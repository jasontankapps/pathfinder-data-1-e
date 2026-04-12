import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", parent_topics: ["basics"], siblings: ["not_found"], jsx: <><p>Unable to find the requested rule.</p>
</>};
const _basics = {title: "Basics", subtopics: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p>These topics cover important rules that will come up in most games.</p>
</>};
const _how_to_play = {title: "How to Play", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 8</Link></p>
<p>The Pathfinder Roleplaying Game is a tabletop fantasy game in which the players take on the roles of heroes who form a group (or party) to set out on dangerous adventures. Helping them tell this story is the Game Master (or GM), who decides what threats the player characters (or PCs) face and what sorts of rewards they earn for succeeding at their quest. Think of it as a cooperative storytelling game, where the players play the protagonists and the Game Master acts as the narrator, controlling the rest of the world.</p>
<p>If you are a player, you make all of the decisions for your character, from what abilities your character has to the type of weapon he carries. Playing a character, however, is more than just following the rules. You also decide your character's personality. Is he a noble knight, set on vanquishing a powerful evil, or is he a conniving rogue who cares more about gold than glory? The choice is up to you.</p>
<p>If you are a Game Master, you control the world that the players explore. Your job is to bring the setting to life and to present the characters with challenges that are both fair and exciting. From the local merchant prince to the rampaging dragon, you control all of the characters that are not being played by the players. Paizo's Pathfinder Adventure Path series, Pathfinder Modules, and Pathfinder Chronicles world guides provide everything you need to run a game, or you can invent your own, using the rules presented herein as well as the monsters found in the various bestiaries.</p>
<p><strong className="hl">What You Need:</strong> In addition to these rules, you will need a number of special dice to play the Pathfinder Roleplaying Game. The dice that come with most board games have six sides, but the Pathfinder Roleplaying Game uses dice with four sides, six sides, eight sides, ten sides, twelve sides, and twenty sides. Dice of this sort can be found at your local game store or online at paizo.com.</p>
<p>In addition to dice, if you are a player, you will need a character sheet [found in the back of the physical book] and, if the Game Master uses a map to represent the adventure, a small figurine to represent your character. These figurines, or miniatures, can also be found at most game stores. They come in a wide variety of styles, so you can probably find a miniature that relatively accurately depicts your character.</p>
<p>If you are the Game Master, you will need a copy of the <em>Pathfinder RPG Bestiary,</em> which contains the rules for a whole spectrum of monsters, from the mighty dragon to the lowly goblin. While many of these monsters can be used to fight against the players, others might provide useful information or become powerful allies. Some might even join the group, with one of the players taking on the role of a monstrous character. In addition, you should have your own set of dice and some sort of screen you can use to hide your notes, maps, and dice rolls behind. (Although you should be honest about the results of your dice rolls, sometimes the results are not evident, and openly rolling the dice might give away too much information.) Combat in the Pathfinder RPG can be resolved in one of two ways: you can describe the situation to the characters and allow them to interact based on the description you provide, or you can draw the situation on a piece of paper or a specially made battle mat and allow the characters to move their miniatures around to more accurately represent their position during the battle. While both ways have their advantages, if you choose the latter, you will need a mat to draw on, such as Paizo's line of GameMastery Flip-Mats, as well as miniatures to represent the monsters or other adversaries. These can also be found at your local game shop, or at paizo.com.</p>
<p><strong className="hl">Playing the Game:</strong> While playing the Pathfinder RPG, the Game Master describes the events that occur in the game world, and the players take turns describing what their characters do in response to those events. Unlike storytelling, however, the actions of the players and the characters controlled by the Game Master (frequently called non-player characters, or NPCs) are not certain. Most actions require dice rolls to determine success, with some tasks being more difficult than others. Each character is better at some things than he is at other things, granting him bonuses based on his skills and abilities.</p>
<p>Whenever a roll is required, the roll is noted as "d#," with the <strong>#</strong> representing the number of sides on the die. If you need to roll multiple dice of the same type, there will be a number before the "d." For example, if you are required to roll 4d6, you should roll four six-sided dice and add the results together. Sometimes there will be a + or - after the notation, meaning that you add that number to, or subtract it from, the total results of the dice (not to each individual die rolled). Most die rolls in the game use a d20 with a number of modifiers based on the character's skills, his or her abilities, and the situation. Generally speaking, rolling high is better than rolling low. Percentile rolls are a special case, indicated as rolling d%. You can generate a random number in this range by rolling two differently colored ten-sided dice (2d10). Pick one color to represent the tens digit, then roll both dice. If the die chosen to be the tens digit rolls a 4 and the other d10 rolls a 2, then you've generated a 42. A zero on the tens digit die indicates a result from 1 to 9, or 100 if both dice result in a zero. Some d10s are printed with 10, 20, 30 and so on in order to make reading d% rolls easier. Unless otherwise noted, whenever you must round a number, always round down.</p>
<p>As your character goes on adventures, he earns gold, magic items, and experience points. Gold can be used to purchase better equipment, while magic items possess powerful abilities that enhance your character. Experience points are awarded for overcoming challenges and completing major storylines. When your character has earned enough experience points, he increases his character level by one, granting him new powers and abilities that allow him to take on even greater challenges. While a 1st-level character might be up to saving a farmer's daughter from rampaging goblins, defeating a terrifying red dragon might require the powers of a 20th-level hero. It is the Game Master's duty to provide challenges for your character that are engaging, but not so deadly as to leave you with no hope of success.</p>
<p>Above all, have fun. Playing the Pathfinder RPG is supposed to be exciting and rewarding for both the Game Master and the players. Adventure awaits!</p>
<h3 id="rule-how_to_play-the-most-important-rule">The Most Important Rule</h3>
<p>The rules are here to help you breathe life into your characters and the world they explore. While they are designed to make your game easy and exciting, you might find that some of them do not suit the style of play that your gaming group enjoys. Remember that these rules are yours. You can change them to fit your needs. Most Game Masters have a number of "house rules" that they use in their games. The Game Master and players should always discuss any rules changes to make sure that everyone understands how the game will be played. Although the Game Master is the final arbiter of the rules, the Pathfinder RPG is a shared experience, and all of the players should contribute their thoughts when the rules are in doubt.</p>
</>};
const _common_terms = {title: "Common Terms", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 11</Link></p>
<p>The Pathfinder RPG uses a number of terms, abbreviations, and definitions in presenting the rules of the game. The following are among the most common.</p>
<p><strong className="hl">Ability Score:</strong> Each creature has six ability scores: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. These scores represent a creature's most basic attributes. The higher the score, the more raw potential and talent your character possesses.</p>
<p><strong className="hl">Action:</strong> An action is a discrete measurement of time during a round of combat. Using abilities, casting spells, and making attacks all require actions to perform. There are a number of <Link to="/rule/actions_in_combat">different kinds of actions</Link>, such as a standard action, move action, swift action, free action, and full-round action.</p>
<p><strong className="hl">Alignment:</strong> Alignment represents a creature's basic moral and ethical attitude. Alignment has two components: one describing whether a creature is lawful, neutral, or chaotic, followed by another that describes whether a character is good, neutral, or evil. Alignments are usually abbreviated using the first letter of each alignment component, such as LN for lawful neutral or CE for chaotic evil. Creatures that are neutral in both components are denoted by a single "N."</p>
<p><strong className="hl">Armor Class (AC):</strong> All creatures in the game have an Armor Class. This score represents how hard it is to hit a creature in combat. As with other scores, higher is better.</p>
<p><strong className="hl">Base Attack Bonus (BAB):</strong> Each creature has a base attack bonus and it represents its skill in combat. As a character gains levels or Hit Dice, his base attack bonus improves. When a creature's base attack bonus reaches +6, +11, or +16, he receives an additional attack in combat when he takes a full-attack action (which is one type of <Link to="/rule/full_round_actions">full-round action</Link>).</p>
<p><strong className="hl">Bonus:</strong> Bonuses are numerical values that are added to checks and statistical scores. Most bonuses have a type, and as a general rule, bonuses of the same type are not cumulative (do not "stack") - only the greater bonus granted applies.</p>
<p><strong className="hl">Caster Level (CL):</strong> Caster level represents a creature's power and ability when casting spells. When a creature casts a spell, it often contains a number of variables, such as range or damage, that are based on the caster's level.</p>
<p><strong className="hl">Class:</strong> <Link to="/main/classes">Classes</Link> represent chosen professions taken by characters and some other creatures. Classes give a host of bonuses and allow characters to take actions that they otherwise could not, such as casting spells or changing shape. As a creature gains levels in a given class, it gains new, more powerful abilities. Most PCs gain levels in the core classes or prestige classes, since these are the most powerful. Most NPCs gain levels in NPC classes, which are less powerful.</p>
<p><strong className="hl">Check:</strong> A check is a d20 roll which may or may not be modified by another value. The most common types are attack rolls, skill checks, ability checks, and saving throws.</p>
<p><strong className="hl">Combat Maneuver:</strong> This is <Link to="/rule/combat_maneuvers">an action taken in combat</Link> that does not directly cause harm to your opponent, such as attempting to trip him, disarm him, or grapple with him.</p>
<p><strong className="hl">Combat Maneuver Bonus (CMB):</strong> This value represents how skilled a creature is at performing a combat maneuver. When attempting to perform a combat maneuver, this value is added to the character's d20 roll.</p>
<p><strong className="hl">Combat Maneuver Defense (CMD):</strong> This score represents how hard it is to perform a combat maneuver against this creature. A creature's CMD is used as the difficulty class when performing a maneuver against that creature.</p>
<p><strong className="hl">Concentration Check:</strong> When a creature is casting a spell, but is disrupted during the casting, he must make a <Link to="/rule/concentration">concentration check</Link> or fail to cast the spell.</p>
<p><strong className="hl">Creature:</strong> A creature is an active participant in the story or world. This includes PCs, NPCs, and monsters.</p>
<p><strong className="hl">Damage Reduction (DR):</strong> Creatures that are resistant to harm typically have damage reduction. This amount is subtracted from any damage dealt to them from a physical source. Most types of DR can be bypassed by certain types of weapons. This is denoted by a number followed by the type, such as "10/cold iron." Some types of DR apply to all physical attacks. Such DR is denoted with a dash instead of a type, e.g. "5/-."</p>
<p><strong className="hl">Difficulty Class (DC):</strong> Whenever a creature attempts to perform an action whose success is not guaranteed, he must make some sort of check (usually a skill check). The result of that check must meet or exceed the Difficulty Class of the action that the creature is attempting to perform in order for the action to be successful.</p>
<p><strong className="hl">Extraordinary Abilities (Ex):</strong> Extraordinary abilities are unusual abilities that do not rely on magic to function.</p>
<p><strong className="hl">Experience Points (XP):</strong> As a character overcomes challenges, defeats monsters, and completes quests, he gains experience points. These points accumulate over time, and when they reach or surpass a specific value, the character gains a level.</p>
<p><strong className="hl">Feat:</strong> A feat is an ability a creature has mastered. Feats often allow creatures to circumvent rules or restrictions. Creatures receive a number of feats based off their Hit Dice, but some classes and other abilities grant bonus feats.</p>
<p><strong className="hl">Game Master (GM):</strong> A Game Master is the person who adjudicates the rules and controls all of the elements of the story and world that the players explore. A GM's duty is to provide a fair and fun game.</p>
<p><strong className="hl">Hit Dice (HD):</strong> Hit Dice represent a creature's general level of power and skill. As a creature gains levels, it gains additional Hit Dice. Monsters, on the other hand, gain racial Hit Dice, which represent the monster's general prowess and ability. Hit Dice are represented by the number the creature possesses followed by a type of die, such as "3d8." This value is used to determine a creature's total hit points. In this example, the creature has 3 Hit Dice. When rolling for this creature's hit points, you would roll a d8 three times and add the results together, along with other modifiers.</p>
<p><strong className="hl">Hit Points (hp):</strong> Hit points are an abstraction signifying how robust and healthy a creature is at the current moment. To determine a creature's hit points, roll the dice indicated by its Hit Dice. A creature gains maximum hit points if its first Hit Die roll is for a character class level. Creatures whose first Hit Die comes from an NPC class or from his race roll their first Hit Die normally. Wounds subtract hit points, while healing (both natural and magical) restores hit points. Some abilities and spells grant temporary hit points that disappear after a specific duration. When a creature's hit points drop below 0, it becomes unconscious. When a creature's hit points reach a negative total equal to its Constitution score, it dies.</p>
<p><strong className="hl">Initiative:</strong> Whenever combat begins, all creatures involved in the battle must make an initiative check to determine the order in which creatures act during combat. The higher the result of the check, the earlier a creature gets to act.</p>
<p><strong className="hl">Level:</strong> A character's level represents his overall ability and power. There are three types of levels. Class level is the number of levels of a specific class possessed by a character. Character level is the sum of all of the levels possessed by a character in all of his classes. In addition, spells have a level associated with them numbered from 0 to 9. This level indicates the general power of the spell. As a spellcaster gains levels, he learns to cast spells of a higher level.</p>
<p><strong className="hl">Monster:</strong> Monsters are creatures that rely on racial Hit Dice instead of class levels for their powers and abilities (although some possess class levels as well). PCs are usually not monsters.</p>
<p><strong className="hl">Multiplying:</strong> When you are asked to apply more than one multiplier to a roll, the multipliers are not multiplied by one another. Instead, you combine them into a single multiplier, with each extra multiple adding 1 less than its value to the first multiple. For example, if you are asked to apply a &times;2 multiplier twice, the result would be &times;3, not &times;4.</p>
<p><strong className="hl">Non-Player Character (NPC):</strong> These are characters controlled by the GM.</p>
<p><strong className="hl">Penalty:</strong> Penalties are numerical values that are subtracted from a check or statistical score. Penalties do not have a type and most penalties stack with one another.</p>
<p><strong className="hl">Player Character (Character, PC):</strong> These are the characters portrayed by the players.</p>
<p><strong className="hl">Round:</strong> Combat is measured in rounds. During an individual round, all creatures have a chance to take a turn to act, in order of initiative. A round represents 6 seconds in the game world.</p>
<p><strong className="hl">Rounding:</strong> Occasionally the rules ask you to round a result or value. Unless otherwise stated, always round down. For example, if you are asked to take half of 7, the result would be 3.</p>
<p><strong className="hl">Saving Throw:</strong> When a creature is the subject of a dangerous spell or effect, it often receives a <Link to="/rule/saving_throws">saving throw</Link> to mitigate the damage or result. Saving throws are passive, meaning that a character does not need to take an action to make a saving throw - they are made automatically. There are three types of saving throws: Fortitude (used to resist poisons, diseases, and other bodily ailments), Reflex (used to avoid effects that target an entire area, such as fireball), and Will (used to resist mental attacks and spells).</p>
<p><strong className="hl">Skill:</strong> A <Link to="/main/skills">skill</Link> represents a creature's ability to perform an ordinary task, such as climb a wall, sneak down a hallway, or spot an intruder. The number of ranks possessed by a creature in a given skill represents its proficiency in that skill. As a creature gains Hit Dice, it also gains additional skill ranks that can be added to its skills.</p>
<p><strong className="hl">Spell:</strong> Spells can perform a wide variety of tasks, from harming enemies to bringing the dead back to life. Spells specify what they can target, what their effects are, and how they can be resisted or negated.</p>
<p><strong className="hl">Spell-Like Abilities (Sp):</strong> Spell-like abilities function just like spells, but are granted through a special racial ability or by a specific class ability (as opposed to spells, which are gained by spellcasting classes as a character gains levels).</p>
<p><strong className="hl">Spell Resistance (SR):</strong> Some creatures are resistant to magic and gain spell resistance. When a creature with spell resistance is targeted by a spell, the caster of the spell must make a caster level check to see if the spell affects the target. The DC of this check is equal to the target creature's SR (some spells do not allow SR checks).</p>
<p><strong className="hl">Stacking:</strong> Stacking refers to the act of adding together bonuses or penalties that apply to one particular check or statistic. Generally speaking, most bonuses of the same type do not stack. Instead, only the highest bonus applies. Most penalties do stack, meaning that their values are added together. Penalties and bonuses generally stack with one another, meaning that the penalties might negate or exceed part or all of the bonuses, and vice versa.</p>
<p><strong className="hl">Supernatural Abilities (Su):</strong> Supernatural abilities are magical attacks, defenses, and qualities. These abilities can be always active or they can require a specific action to utilize. The supernatural ability's description includes information on how it is used and its effects.</p>
<p><strong className="hl">Turn:</strong> In a round, a creature receives one turn, during which it can perform a wide variety of actions. Generally in the course of one turn, a character can perform one standard action, one move action, one swift action, and a number of free actions. Less-common combinations of actions are permissible as well, see <Link to="/rule/actions_in_combat">Actions in Combat</Link> for more details.</p>
</>};
const _character_creation = {title: "Character Creation Steps", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 14</Link></p>
<p>From the sly rogue to the stalwart paladin, the Pathfinder RPG allows you to make the character you want to play. When generating a character, start with your character's concept. Do you want a character who goes toe-to-toe with terrible monsters, matching sword and shield against claws and fangs? Or do you want a mystical seer who draws his powers from the great beyond to further his own ends? Nearly anything is possible.</p>
<p>Once you have a general concept worked out, use the following steps to bring your idea to life, recording the resulting information and statistics on your Pathfinder RPG character sheet, which can be found at the back of [the physical book] and photocopied for your convenience.</p>
<p><strong className="hl">Step 1-Determine Ability Scores:</strong> Start by generating your character's <Link to="/rule/ability_scores">ability scores</Link>. These six scores determine your character's most basic attributes and are used to decide a wide variety of details and statistics. Some class selections require you to have better than average scores for some of your abilities.</p>
<p><strong className="hl">Step 2-Pick Your Race:</strong> Next, pick your character's <Link to="/rule/races">race</Link>, noting any modifiers to your ability scores and any other racial traits. There are seven basic races to choose from, although your GM might have others to add to the list. Each race lists the <Link to="/misc/languages">languages</Link> your character automatically knows, as well as a number of bonus languages. <Link to="/rule/intelligence">A character knows a number of additional bonus languages equal to his or her Intelligence modifier.</Link></p>
<p><strong className="hl">Step 3-Pick Your Class:</strong> A character's <Link to="/rule/classes">class</Link> represents a profession, such as fighter or wizard. If this is a new character, he starts at 1st level in his chosen class. As he gains experience points (XP) for defeating monsters, he goes up in level, granting him new powers and abilities.</p>
<p><strong className="hl">Step 4-Pick Skills and Select Feats:</strong> Determine the number of skill ranks possessed by your character, based on his class and Intelligence modifier (and any other bonuses, such as the bonus received by humans). Then spend these ranks on <Link to="/rule/skills">skills</Link>, but remember that you cannot have more ranks than your level in any one skill (for a starting character, this is usually one). After skills, determine how many <Link to="/rule/feats">feats</Link> your character receives, based on his class and level.</p>
<p><strong className="hl">Step 5-Buy Equipment:</strong> Each new character begins the game with an amount of gold, based on his class, that can be spent on a wide range of <Link to="/rule/equipment">equipment</Link> and gear, from chainmail armor to leather backpacks. This gear helps your character survive while adventuring. Generally speaking, you cannot use this starting money to buy <Link to="/rule/magic_items">magic items</Link> without the consent of your GM.</p>
<p><strong className="hl">Step 6-Finishing Details:</strong> Finally, you need to determine all of a character's details, including his starting hit points (hp), Armor Class (AC), saving throws, initiative modifier, and attack values. All of these numbers are determined by the decisions made in previous steps. A level 1 character begins with maximum hit points for its Hit Die roll. Aside from these, you need to decide on your character's name, <Link to="/rule/alignment">alignment</Link>, and physical appearance. It is best to jot down a few personality traits as well, to help you play the character during the game.</p>
</>};
const _ability_scores = {title: "Ability Scores", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["generating_ability_scores","determine_bonuses","the_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 15</Link></p>
<p>Each character has six ability scores that represent his character's most basic attributes. They are his raw talent and prowess. While a character rarely rolls an ability check (using just an ability score), these scores, and the modifiers they create, affect nearly every aspect of a character's skills and abilities. Each ability score generally ranges from 3 to 18, although racial bonuses and penalties can alter this; an average ability score is 10.</p>
</>};
const _generating_ability_scores = {title: "Generating Ability Scores", parent_topics: ["basics","ability_scores"], siblings: ["generating_ability_scores","determine_bonuses","the_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 15</Link></p>
<p>There are a number of different methods used to generate ability scores. Each of these methods gives a different level of flexibility and randomness to character generation.</p>
<p>Racial modifiers (adjustments made to your ability scores due to your character's <Link to="/main/races">race</Link>) are applied after the scores are generated.</p>
<p><strong className="hl">Standard:</strong> Roll 4d6, discard the lowest die result, and add the three remaining results together. Record this total and repeat the process until six numbers are generated. Assign these totals to your ability scores as you see fit. This method is less random than Classic and tends to create characters with above-average ability scores.</p>
<p><strong className="hl">Classic:</strong> Roll 3d6 and add the dice together. Record this total and repeat the process until you generate six numbers. Assign these results to your ability scores as you see fit. This method is quite random, and some characters will have clearly superior abilities. This randomness can be taken one step further, with the totals applied to specific ability scores in the order they are rolled. Characters generated using this method are difficult to fit to predetermined concepts, as their scores might not support given classes or personalities, and instead are best designed around their ability scores.</p>
<p><strong className="hl">Heroic:</strong> Roll 2d6 and add 6 to the sum of the dice. Record this total and repeat the process until six numbers are generated. Assign these totals to your ability scores as you see fit. This is less random than the Standard method and generates characters with mostly above-average scores.</p>
<p><strong className="hl">Dice Pool:</strong> Each character has a pool of 24d6 to assign to his statistics. Before the dice are rolled, the player selects the number of dice to roll for each score, with a minimum of 3d6 for each ability. Once the dice have been assigned, the player rolls each group and totals the result of the three highest dice. For more high-powered games, the GM should increase the total number of dice to 28. This method generates characters of a similar power to the Standard method.</p>
<p><strong className="hl">Purchase:</strong> Each character receives a number of points to spend on increasing his basic attributes. In this method, all attributes start at a base of 10. A character can increase an individual score by spending some of his points. Likewise, he can gain more points to spend on other scores by decreasing one or more of his ability scores. No score can be reduced below 7 or raised above 18 using this method. See Table 1-1 below for the costs of each score. After all the points are spent, apply any racial modifiers the character might have.</p>
<p>The number of points you have to spend using the purchase method depends on the type of campaign you are playing. The standard value for a character is 15 points. Average non-player characters (NPCs) are typically built using as few as 3 points. See Table 1-2 below for a number of possible point values depending on the style of campaign. The purchase method emphasizes player choice and creates equally balanced characters. This system is typically used for organized play events, such as the Pathfinder Society (visit paizo.com/pathfinderSociety for more details on this exciting campaign).</p>
<h3 id="rule-generating_ability_scores-table-1-1-ability-score-costs">Table 1-1: Ability Score Costs</h3>
<ScrollContainer id="rule-generating_ability_scores--table-0"><table>
<thead>
<tr>
<th>Score</th>
<th>Points</th>
</tr>
</thead>
<tbody><tr>
<td>7</td>
<td>-4</td>
</tr>
<tr>
<td>8</td>
<td>-2</td>
</tr>
<tr>
<td>9</td>
<td>-1</td>
</tr>
<tr>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>11</td>
<td>1</td>
</tr>
<tr>
<td>12</td>
<td>2</td>
</tr>
<tr>
<td>13</td>
<td>3</td>
</tr>
<tr>
<td>14</td>
<td>5</td>
</tr>
<tr>
<td>15</td>
<td>7</td>
</tr>
<tr>
<td>16</td>
<td>10</td>
</tr>
<tr>
<td>17</td>
<td>13</td>
</tr>
<tr>
<td>18</td>
<td>17</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-generating_ability_scores-table-1-2-ability-score-points">Table 1-2: Ability Score Points</h3>
<ScrollContainer id="rule-generating_ability_scores--table-1"><table>
<thead>
<tr>
<th>Campaign Type</th>
<th>Points</th>
</tr>
</thead>
<tbody><tr>
<td>Low Fantasy</td>
<td>10</td>
</tr>
<tr>
<td>Standard Fantasy</td>
<td>15</td>
</tr>
<tr>
<td>High Fantasy</td>
<td>20</td>
</tr>
<tr>
<td>Epic Fantasy</td>
<td>25</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _determine_bonuses = {title: "Determine Bonuses", parent_topics: ["basics","ability_scores"], siblings: ["generating_ability_scores","determine_bonuses","the_abilities"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 15</Link></p>
<p>Each ability, after changes made because of race, has a modifier ranging from -5 to +5. Table 1-3 shows the modifier for each score. The modifier is the number you apply to the die roll when your character tries to do something related to that ability. You also use the modifier with some numbers that aren't die rolls. A positive modifier is called a bonus, and a negative modifier is called a penalty. The table also shows bonus spells, which you'll need to know about if your character is a spellcaster.</p>
<h3 id="rule-determine_bonuses-table-1-3-ability-modifiers-and-bonus-spells-per-day-by-spell-level">Table 1-3: Ability Modifiers and Bonus Spells per Day (by Spell Level)</h3>
<ScrollContainer id="rule-determine_bonuses--table-0"><table>
<thead>
<tr>
<th>Ability Scores</th>
<th>Modifier</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
<th>5th</th>
<th>6th</th>
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>-5</td>
<td>-</td>
<td>-</td>
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
<td>2-3</td>
<td>-4</td>
<td>-</td>
<td>-</td>
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
<td>4-5</td>
<td>-3</td>
<td>-</td>
<td>-</td>
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
<td>6-7</td>
<td>-2</td>
<td>-</td>
<td>-</td>
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
<td>8-9</td>
<td>-1</td>
<td>-</td>
<td>-</td>
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
<td>10-11</td>
<td>0</td>
<td>-</td>
<td>-</td>
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
<td>12-13</td>
<td>+1</td>
<td>-</td>
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
<td>14-15</td>
<td>+2</td>
<td>-</td>
<td>1</td>
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
<td>16-17</td>
<td>+3</td>
<td>-</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>18-19</td>
<td>+4</td>
<td>-</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>20-21</td>
<td>+5</td>
<td>-</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>22-23</td>
<td>+6</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>24-25</td>
<td>+7</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>26-27</td>
<td>+8</td>
<td>-</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>28-29</td>
<td>+9</td>
<td>-</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>30-31</td>
<td>+10</td>
<td>-</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>32-33</td>
<td>+11</td>
<td>-</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>34-35</td>
<td>+12</td>
<td>-</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>36-37</td>
<td>+13</td>
<td>-</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>38-39</td>
<td>+14</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>40-41</td>
<td>+15</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>42-43</td>
<td>+16</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>44-45</td>
<td>+17</td>
<td>-</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<p>And so on. You can't cast spells if your relevant ability score is under 10.</p>
</>};
const _the_abilities = {title: "The Abilities", parent_topics: ["basics","ability_scores"], siblings: ["generating_ability_scores","determine_bonuses","the_abilities"], subtopics: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Each ability partially describes your character and affects some of his actions.</p>
<h3 id="rule-the_abilities-abilities-and-spellcasting">Abilities and Spellcasting</h3>
<p>The ability that governs <Link to="/rule/determine_bonuses">bonus spells</Link> depends on what type of spellcaster your character is: <strong>Intelligence</strong> for alchemists, arcanists, investigators, magi, occultists, psychics, witches, and wizards; <strong>Wisdom</strong> for clerics, druids, hunters, inquisitors, oracles, rangers, shamans, spiritualists, and warpriests; and <strong>Charisma</strong> for bards, bloodragers, mediums, mesmerists, paladins, skalds, sorcerers, and summoners. In addition to having a high ability score, a spellcaster must be of a high enough class level to be able to cast spells or use spell slots of a given spell level.</p>
</>};
const _strength = {title: "Strength", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Strength measures muscle and physical power. This ability is important for those who engage in hand-to-hand (or "melee") combat, such as fighters, monks, paladins, and some rangers. Strength also sets the <Link to="/rule/carrying_capacity">maximum amount of weight</Link> your character can carry. A character with a Strength score of 0 is too weak to move in any way and is unconscious. Some creatures do not possess a Strength score and have no modifier at all to Strength-based skills or checks.</p>
<p>You apply your character's Strength modifier to:</p>
<ul>
<li>Melee attack rolls.</li>
<li>Damage rolls when using a melee weapon or a thrown weapon, including a sling. (Exceptions: Off-hand attacks receive only half the character's Strength bonus, while two-handed attacks receive 1-1/2 times the Strength bonus. A Strength penalty, but not a bonus, applies to attacks made with a bow that is not a composite bow.)</li>
<li>Climb and Swim checks.</li>
<li>Strength checks (for breaking down doors and the like).</li>
</ul>
</>};
const _dexterity = {title: "Dexterity", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Dexterity measures agility, reflexes, and balance. This ability is the most important one for rogues, but it's also useful for characters who wear light or medium armor or no armor at all. This ability is vital for characters seeking to excel with ranged weapons, such as the bow or sling. A character with a Dexterity score of 0 is incapable of moving and is effectively immobile (but not unconscious).</p>
<p>You apply your character's Dexterity modifier to:</p>
<ul>
<li>Ranged attack rolls, including those for attacks made with bows, crossbows, throwing axes, and many ranged spell attacks like scorching ray or searing light.</li>
<li>Armor Class (AC), provided that the character can react to the attack.</li>
<li>Reflex saving throws, for avoiding fireballs and other attacks that you can escape by moving quickly.</li>
<li>Acrobatics, Disable Device, Escape Artist, Fly, Ride, Sleight of Hand, and Stealth checks.</li>
</ul>
</>};
const _constitution = {title: "Constitution", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Constitution represents your character's health and stamina. A Constitution bonus increases a character's hit points, so the ability is important for all classes. Some creatures, such as undead and constructs, do not have a Constitution score. Their modifier is +0 for any Constitution-based checks. A character with a Constitution score of 0 is dead.</p>
<p>You apply your character's Constitution modifier to:</p>
<ul>
<li>Each roll of a Hit Die (though a penalty can never drop a result below 1 - that is, a character always gains at least 1 hit point each time he advances in level).</li>
<li>Fortitude saving throws, for resisting poison, disease, and similar threats.</li>
</ul>
<p>If a character's Constitution score changes enough to alter his or her Constitution modifier, the character's hit points also increase or decrease accordingly.</p>
</>};
const _intelligence = {title: "Intelligence", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Intelligence determines how well your character learns and reasons. This ability is important for wizards because it affects their spellcasting ability in many ways. Creatures of animal-level instinct have Intelligence scores of 1 or 2. Any creature capable of understanding speech has a score of at least 3. A character with an Intelligence score of 0 is comatose. Some creatures do not possess an Intelligence score. Their modifier is +0 for any Intelligence-based skills or checks.</p>
<p>You apply your character's Intelligence modifier to:</p>
<ul>
<li>The number of bonus <Link to="/misc/languages">languages</Link> your character knows at the start of the game. These are in addition to any starting racial languages and Common. If you have a penalty, you can still read and speak your racial languages unless your Intelligence is lower than 3.</li>
<li>The number of skill points gained each level, though your character always gets at least 1 skill point per level.</li>
<li>Appraise, Craft, Knowledge, Linguistics, and Spellcraft checks.</li>
</ul>
<p>A wizard gains bonus spells based on his Intelligence score. The minimum Intelligence score needed to cast a wizard spell is 10 + the spell's level.</p>
</>};
const _wisdom = {title: "Wisdom", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 16</Link></p>
<p>Wisdom describes a character's willpower, common sense, awareness, and intuition. Wisdom is the most important ability for clerics and druids, and it is also important for paladins and rangers. If you want your character to have acute senses, put a high score in Wisdom. Every creature has a Wisdom score. A character with a Wisdom score of 0 is incapable of rational thought and is unconscious.</p>
<p>You apply your character's Wisdom modifier to:</p>
<ul>
<li>Will saving throws (for negating the effects of charm person and other spells).</li>
<li>Heal, Perception, Profession, Sense Motive, and Survival checks.</li>
</ul>
<p>Clerics, druids, and rangers get bonus spells based on their Wisdom scores. The minimum Wisdom score needed to cast a cleric, druid, or ranger spell is 10 + the spell's level.</p>
</>};
const _charisma = {title: "Charisma", parent_topics: ["basics","ability_scores","the_abilities"], siblings: ["strength","dexterity","constitution","intelligence","wisdom","charisma"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 17</Link></p>
<p>Charisma measures a character's personality, personal magnetism, ability to lead, and appearance. It is the most important ability for paladins, sorcerers, and bards. It is also important for clerics, since it affects their ability to channel energy. For undead creatures, Charisma is a measure of their unnatural "lifeforce." Every creature has a Charisma score. A character with a Charisma score of 0 is not able to exert himself in any way and is unconscious.</p>
<p>You apply your character's Charisma modifier to:</p>
<ul>
<li>Bluff, Diplomacy, Disguise, Handle Animal, Intimidate, Perform, and Use Magic Device checks.</li>
<li>Checks that represent attempts to influence others.</li>
<li>Channel energy DCs for clerics and paladins attempting to harm undead foes.</li>
</ul>
<p>Bards, paladins, and sorcerers gain a number of bonus spells based on their Charisma scores. The minimum Charisma score needed to cast a bard, paladin, or sorcerer spell is 10 + the spell's level.</p>
</>};
const _races = {title: "Races", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 20</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 8</Link><br/>From the stout dwarf to the noble elf, the races of the Pathfinder Roleplaying Game are a diverse mix of cultures, sizes, attitudes, and appearances. After you've generated your character's basic ability scores, the next step in the character creation process is to select your character's race; the Core Rulebook presents seven different options from which to choose. These seven races comprise the most commonly encountered civilized races in the Pathfinder RPG.</p>
<p>Choosing your character's race is one of the more important decisions you'll need to make. As your character grows more powerful, you'll be able to diversify his or her abilities by selecting different classes, skills, and feats, but you only get to pick your race once (unless some unusual magic, like <Link to="/spell/reincarnate">reincarnate</Link>, comes into play). Of course, each race is best suited to a specific type of role - dwarves make better fighters than they do sorcerers, while halflings aren't as good as half-orcs at being barbarians. Keep each race's advantages and disadvantages in mind when making your choice. While it can be fun to play a race against its assumed role, it's not as fun to get three levels into a character before realizing that the character you wanted to play would have been better off as a different race entirely.</p>
<p>Each of the seven core races is presented in the same format, starting with a generalized description of the race's role in the world. This is followed by a physical description of an average member of that race, a brief overview of the race's society, and a few words about the race's relations with the other six. Although your race doesn't force you to choose one religion or alignment over another, the typical choices for each race are mentioned. Next is a discussion of why a member of the race in question might decide to take on the peril-filled life of an adventurer. Finally, we list a few sample names for males and females of each race.</p>
<p>Each of them also has a suite of special abilities, bonuses, and other adjustments that apply to all members of that race. These are your character's <strong className="hl">Racial Traits.</strong> This information includes the race's type, size, vision, and base speed, as well as a number of other traits common to most members of the race. With your GM's permission, you will also have the option to exchange these standard racial traits for a number of <Link to="/rule/racial_traits">alternate racial traits</Link>.</p>
<p>Each race also has ability score modifiers that are applied after you've generated your <Link to="/rule/ability_scores">ability scores</Link>. These modifiers can raise an ability score above 18 or reduce a score below 3 - although having such a low score in any of your abilities is something you should avoid, as there's no surer route to character death than a low Constitution, and no swifter route to frustration than a PC who can't talk since his Intelligence is lower than 3. You should seek your GM's approval before playing a character with any ability score of less than 3.</p>
<p>The seven core races have wildly different abilities, personalities, and societies, but at the same time, all seven races are quite similar - none of the races here deviate too far from humanity, and all of their abilities are roughly equal and balanced.</p>
<h3 id="rule-races-favored-class-bonuses">Favored Class Bonuses</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 8</Link><br/>The final section for each racial description describes alternative benefits for members of that race taking certain classes as a favored class. The normal benefit of having a favored class is simple and effective: your character gains one extra hit point or one extra skill rank each time she gains a level in that class. The alternate favored class abilities listed here may not have as broad an appeal as the standard choices. They are designed to reflect flavorful options that might be less useful in general but prove handy in the right situations or for a character with the right focus. Most of them play off racial archetypes, like a half-orc's toughness and proclivity for breaking things or elven grace and finesse.</p>
<p>See <Link to="/rule/favored_class">Favored Class</Link> for more information.</p>
</>};
const _core_races = {title: "The Core Races", parent_topics: ["basics","races"], siblings: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 8</Link></p>
<p><strong className="hl">Dwarves:</strong> These short and stocky defenders of mountain fortresses are often seen as stern and humorless. Known for mining the earth's treasures and crafting magnificent items from ore and gemstones, they have an unrivaled affinity for the bounties of the deep earth. <Link to="/race/dwarf">Dwarves</Link> also have a tendency toward traditionalism and isolation that sometimes manifests as xenophobia.</p>
<p><strong className="hl">Elves:</strong> Tall, noble, and often haughty, <Link to="/race/elf">elves</Link> are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.</p>
<p><strong className="hl">Gnomes:</strong> Expatriates of the strange land of fey, these small folk have a reputation for flighty and eccentric behavior. Many <Link to="/race/gnome">gnomes</Link> are whimsical artisans and tinkers, creating strange devices powered by magic, alchemy, and their quirky imagination. Gnomes have an insatiable need for new experiences that often gets them in trouble.</p>
<p><strong className="hl">Half-Elves:</strong> Often caught between the worlds of their progenitor races, <Link to="/race/half_elf">half-elves</Link> are a race of both grace and contradiction. Their dual heritage and natural gifts often create brilliant diplomats and peacemakers, but half-elves are often susceptible to an intense and even melancholic isolation, realizing that they are never truly part of elven or human society.</p>
<p><strong className="hl">Half-Orcs:</strong> Often fierce and savage, sometimes noble and resolute, <Link to="/race/half_orc">half-orcs</Link> can manifest the best and worst qualities of their parent races. Many half-orcs struggle to keep their more bestial natures in check in order to epitomize the most heroic values of humanity. Unfortunately, many outsiders see half-orcs as hopeless abominations devoid of civility, if not monsters unworthy of pity or parley.</p>
<p><strong className="hl">Halflings:</strong> Members of this diminutive race find strength in family, community, and their own innate and seemingly inexhaustible luck. While their fierce curiosity is sometimes at odds with their intrinsic common sense, <Link to="/race/halfling">halflings</Link> are eternal optimists and cunning opportunists with an incredible knack for getting out the worst situations.</p>
<p><strong className="hl">Humans:</strong> Ambitious, sometimes heroic, and always confident, <Link to="/race/human">humans</Link> have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes.</p>
</>};
const _less_common_races = {title: "Less-Common Races", parent_topics: ["basics","races"], siblings: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 82</Link></p>
<p>While the seven core races are the primary focus of the Pathfinder Roleplaying Game, they're not the only ones suitable to be played as characters. Other, even stranger races help populate the world, and - with the GM's permission - also work well as player character races, creating fun and exciting new roleplaying opportunities. This chapter details the most common of such races. From the nimble catfolk to the fiery ifrits and scavenging, bird-like tengus, these races have just as much motivation to be adventurers as do elves, gnomes, and humans. And while they may not be as common in the major population hubs of the Pathfinder campaign setting, each of the races detailed in this chapter presents its own unique background and abilities.</p>
<p>While many of these races are considered civilized, some are typically viewed as monsters, and may prove interesting challenges for roleplaying and character interaction. When playing drow, kobolds, orcs, or other such races, it is often best for party dynamics to take on the roles of characters who rebel against the norms of their races and societies - creatures who do not agree with their often brutal cultures, and instead wish to carve out a better existence for themselves among other races. When playing these races, even more so than for many other races, it is important to work with your GM to determine character motivations and backgrounds that work in the campaign.</p>
<p><strong className="hl">Aasimars:</strong> Creatures blessed with a celestial bloodline, <Link to="/race/aasimar">aasimars</Link> seem human except for some exotic quality that betrays their otherworldly origin. While aasimars are nearly always beautiful, something simultaneously a part of and apart from humanity, not all of them are good, though very few are evil.</p>
<p><strong className="hl">Catfolk:</strong> A race of graceful explorers, <Link to="/race/catfolk">catfolk</Link> are both clannish and curious by nature. They tend to get along with races that treat them well and respect their boundaries. They love exploration, both physical and intellectual, and tend to be natural adventurers.</p>
<p><strong className="hl">Dhampir:</strong> The accursed spawn of vampires, <Link to="/race/dhampir">dhampirs</Link> are living creatures tainted with the curse of undeath, which causes them to take damage from positive energy and gain healing from negative energy. While many members of this race embrace their dark sides, others are powerfully driven to rebel against their taint and hunt down and destroy vampires and their ilk.</p>
<p><strong className="hl">Drow:</strong> Dark reflections of surface elves, <Link to="/race/drow">drow</Link> are shadowy hunters who strive to snuff out the world's light. Drow are powerful magical creatures who typically serve demons, and only their chaotic nature stops them from becoming an even greater menace. A select few forsake their race's depraved and nihilistic society to walk a heroic path.</p>
<p><strong className="hl">Fetchlings:</strong> Long ago, <Link to="/race/fetchling">fetchlings</Link> were humans exiled to the Shadow Plane, but that plane's persistent umbra has transformed them into a race apart. These creatures have developed an ability to meld into the shadows and have a natural affinity for shadow magic. Fetchlings - who call themselves kayal - often serve as emissaries between the inhabitants of the Shadow Plane and the Material Plane.</p>
<p><strong className="hl">Goblins:</strong> Crazy pyromaniacs with a tendency to commit unspeakable violence, <Link to="/race/goblin">goblins</Link> are the smallest of the goblinoid races. While they are a fun-loving race, their humor is often cruel and hurtful. Adventuring goblins constantly wrestle with their darkly mischievous side in order to get along with others. Few are truly successful.</p>
<p><strong className="hl">Hobgoblins:</strong> These creatures are the most disciplined and militaristic of the goblinoid races. Tall, tough as nails, and strongly built, <Link to="/race/hobgoblin">hobgoblins</Link> would be a boon to any adventuring group, were it not for the fact that they tend to be cruel and malicious, and often keep slaves.</p>
<p><strong className="hl">Ifrit:</strong> <Link to="/race/ifrit">Ifrits</Link> are a race descended from mortals and the strange inhabitants of the Plane of Fire. Their physical traits and personalities often betray their fiery origins, and they tend to be restless, independent, and imperious. Frequently driven from cities for their ability to manipulate flame, ifrits make powerful fire sorcerers and warriors who can wield flame like no other race.</p>
<p><strong className="hl">Kobolds:</strong> Considering themselves the scions of dragons, <Link to="/race/kobold">kobolds</Link> have diminutive statures but massive egos. A select few can take on more draconic traits than their kin, and many are powerful sorcerers, canny alchemists, and cunning rogues.</p>
<p><strong className="hl">Orcs:</strong> Savage, brutish, and hard to kill, <Link to="/race/orc">orcs</Link> are often the scourge of far-flung wildernesses and cavern deeps. Many orcs become fearsome barbarians, as they are muscular and prone to bloody rages. Those few who can control their bloodlust make excellent adventurers.</p>
<p><strong className="hl">Oreads:</strong> Creatures of human ancestry mixed with the blood of creatures from the Plane of Earth, <Link to="/race/oread">oreads</Link> are as strong and solid as stone. Often stubborn and steadfast, their unyielding nature makes it hard for them to get along with most races other than dwarves. Oreads make excellent warriors and sorcerers who can manipulate the raw power of stone and earth.</p>
<p><strong className="hl">Ratfolk:</strong> These small, rat-like humanoids are clannish and nomadic masters of trade. Often tinkers and traders, they are more concerned with accumulating interesting trinkets than amassing wealth. <Link to="/race/ratfolk">Ratfolk</Link> often adventure to find new and interesting curiosities rather than coin.</p>
<p><strong className="hl">Sylphs:</strong> Ethereal folk of elemental air, <Link to="/race/sylph">sylphs</Link> are the result of human blood mixed with that of airy elemental folk. Like ifrits, oreads, and undines, they can become powerful elemental sorcerers with command over their particular elemental dominion. They tend to be beautiful and lithe, and have a knack for eavesdropping.</p>
<p><strong className="hl">Tengus:</strong> These crow-like humanoid scavengers excel in mimicry and swordplay. Flocking into densely populated cities, <Link to="/race/tengu">tengus</Link> occasionally join adventuring groups out of curiosity or necessity. Their impulsive nature and strange habits can often be unnerving to those who are not used to them.</p>
<p><strong className="hl">Tieflings:</strong> Diverse and often despised by humanoid society, <Link to="/race/tiefling">tieflings</Link> are mortals stained with the blood of fiends. Other races rarely trust them, and this lack of empathy usually causes tieflings to embrace the evil, depravity, and rage that seethe within their corrupt blood. A select few see the struggle to smother such dark desires as motivation for grand heroism.</p>
<p><strong className="hl">Undines:</strong> Like their cousins, the ifrits, oreads, and sylphs, <Link to="/race/undine">undines</Link> are humans touched by planar elements. They are the scions of elemental water, equally graceful both on land and in water. Undines are adaptable and resistant to cold, and have an affinity for water magic.</p>
</>};
const _uncommon_races = {title: "Uncommon Races", parent_topics: ["basics","races"], siblings: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 182</Link></p>
<p>Some races are so uncommon that their very existence may be the subject of debate. Living on the fringes of the wilderness, in hidden grottos deep beneath the surface, under the ocean waves, or among the clouds of the night sky, few members of these races hear the call of adventure.</p>
<p>The 14 races presented here are all suitable to be played as PCs, but their rarity or isolation often sets them apart. While all are exotic, the reasons for their rarity are as diverse as their forms. The changeling, an offspring of a hag and a mortal lover, is an uncommon player race because of the improbability of such a foul union. Other races, like the kitsune, nagaji, samsarans, and wayangs, are often more common in certain far-flung lands but are rarely seen in most others. Still other races, like the gillmen, gripplis, merfolk, strix, and svirfneblin, typically distrust outsiders and keep to their own remote and insular communities.</p>
<p>While these races are rare, the same can be said of anyone willing to become an adventurer. Such an activity is not for those who crave a normal life, and these races also produce the rare spirit who strikes out into the wild places of the world in search of excitement and exploration. With your GM's permission, you can select any of the following uncommon races for your player character. Each racial section provides all the information you need to create a character along with a number of new options available to characters of that race. This chapter details the following uncommon races.</p>
<p><strong className="hl">Changelings:</strong> The offspring of hags and their mortal lovers, <Link to="/race/changeling">changelings</Link> are abandoned and raised by foster parents. Always female, changelings all hear a spiritual call during puberty to find their true origins. Tall and slender, with dark hair and eyes mismatched in color, changelings are eerily attractive.</p>
<p><strong className="hl">Duergar:</strong> Gray skinned, deep-dwelling dwarves who hate their lighter skinned cousins, <Link to="/race/duergar">duergar</Link> view life as constant toil ending only in death. Though these dwarves are typically evil, honor and keeping one's word means everything to them, and a rare few make loyal adventuring companions.</p>
<p><strong className="hl">Gillmen:</strong> Survivors of a land-dwelling culture whose homeland was destroyed, <Link to="/race/gillmen">gillmen</Link> were saved and transformed into an amphibious race by the aboleths. Though in many ways they appear nearly human, gillmen's bright purple eyes and gills set them apart from humanity. Reclusive and suspicious, gillmen know that one day the aboleths will call in the debt owed to them.</p>
<p><strong className="hl">Gripplis:</strong> Furtive frogfolk with the ability to camouflage themselves among fens and swamps, <Link to="/race/grippli">gripplis</Link> typically keep to their wetland homes, only rarely interacting with the outside world. Their chief motivation for leaving their marshy environs is to trade in metal and gems.</p>
<p><strong className="hl">Kitsune:</strong> These shapeshifting, fox-like folk share a love of mischief, art, and the finer things in life. They can appear as a single human as well as their true form, that of a fox-like humanoid. <Link to="/race/kitsune">Kitsune</Link> are quick-witted, nimble, and gregarious, and because of this, a fair number of them become adventurers.</p>
<p><strong className="hl">Merfolk:</strong> These creatures have the upper torso of a well-built and attractive humanoid and a lower half consisting of a finned tail. Though they are amphibious and extremely strong swimmers, their lower bodies make it difficult for them to move on land. <Link to="/race/merfolk">Merfolk</Link> can be shy and reclusive. Typically keeping to themselves, they are distrustful of land-dwelling strangers.</p>
<p><strong className="hl">Nagaji:</strong> It is believed that nagas created the nagaji as a race of servants and that the <Link to="/race/nagaji">nagaji</Link> worship their creators as living gods. Due to their reptilian nature and strange mannerisms, these strange, scaly folk inspire fear and wonder in others not of their kind. They are resistant to both poison and mind-affecting magic.</p>
<p><strong className="hl">Samsarans:</strong> Ghostly servants of karma, <Link to="/race/samsaran">samsarans</Link> are creatures reincarnated hundreds if not thousands of times in the hope of reaching true enlightenment. Unlike humans and other races, these humanoids remember much of their past lives.</p>
<p><strong className="hl">Strix:</strong> Hunted to dwindling numbers by humans, who see them as winged devils, <Link to="/race/strix">strix</Link> are black-skinned masters of the nighttime sky. Their territorial conflicts have fueled their hatred for humans. This longstanding feud means that these nocturnal creatures often attack humans on sight.</p>
<p><strong className="hl">Sulis:</strong> Also called suli-jann, these humanoids are the descendants of mortals and jann. These strong and charismatic individuals manifest mastery over elemental power in their adolescence, giving them the ability to manipulate earth, fire, ice, or electricity. This elemental power tends to be reflected in the <Link to="/race/suli">suli's</Link> personality as well.</p>
<p><strong className="hl">Svirfneblin:</strong> Gnomes who guard their hidden enclaves within dark tunnels and caverns deep under the earth, <Link to="/race/svirfneblin">svirfneblin</Link> are as serious as their surface cousins are whimsical. They are resistant to the magic of the foul creatures that share their subterranean environs, and wield powerful protective magic. Svirfneblin are distrustful of outsiders and often hide at their approach.</p>
<p><strong className="hl">Vanaras:</strong> These mischievous, monkey-like humanoids dwell in jungles and warm forests. Covered in soft fur and sporting prehensile tails and hand-like feet, <Link to="/race/vanara">vanaras</Link> are strong climbers. These creatures are at home both on the ground and among the treetops.</p>
<p><strong className="hl">Vishkanyas:</strong> Strangely beautiful on the outside and poisonous on the inside, <Link to="/race/vishkanya">vishkanyas</Link> see the world through slitted serpent eyes. Vishkanyas possess a serpent's grace and ability to writhe out of their enemies' grasp with ease. Vishkanyas have a reputation for being both seductive and manipulative. They can use their saliva or blood to poison their weapons.</p>
<p><strong className="hl">Wayangs:</strong> The small <Link to="/race/wayang">wayangs</Link> are creatures of the Plane of Shadow. They are so attuned to shadow that it even shapes their philosophy, believing that upon death they merely merge back into darkness. The mysteries of their shadowy existence grant them the ability to gain healing from negative energy as well as positive energy.</p>
</>};
const _rare_races = {title: "Rare Races", parent_topics: ["basics","races"], siblings: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p>Over the years, Pathfinder has published numerous other PC races. These tend to be either thought of as monsters, or else so rare or shrouded in secrecy that few know of them.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 16</Link><br/><strong className="hl">Adaros:</strong> These frightful creatures have the upper bodies of muscular humanoids, the lower bodies of sleek sharks, and enormous jaws filled with razor-sharp teeth. Nomadic predators of the deep, <Link to="/race/adaro">adaros</Link> travel in packs through tropical waters, hunting their prey with poisoned spears and then devouring the victims raw. Adaros willingly feed on humans, merfolk, and other sentient creatures.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 239</Link>, <Link to="/source/iron_gods_players_guide">Iron Gods Player's Guide pg. 6</Link><br/><strong className="hl">Androids:</strong> These artificially constructed humanoids known are as much a miracle of technological achievement as they are an example of the sheer will of the multiverse. <Link to="/race/android">Androids</Link> are superficially identical to humans in many ways, and to the uninformed it can be difficult to differentiate the two. In the right light, though, androids' alien nature is revealed by the metallic sheen in their eyes and the biological, tattoo-like circuitry that riddles their skin. Their bodies are completely artificial, though made of materials that mimic the flexibility, shape, and density of human flesh and bone.</p>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 224</Link><br/><strong className="hl">Aphorites:</strong> Ancient axiomites, creatures of pure lawfulness, long pondered a solution to problematic encounters with visitors from the Material Plane. The answer they arrived at was the creation of a new form of life - a melding of their own perfection of order with the unpredictable and fragile bodies and minds of mortal humanoids. Thus, the first <Link to="/race/aphorite">aphorites</Link> came to be. Originally, they were created with nearly uniform physical appearances, but they have diversified as a result of generations spent on the Material Plane. Today, an aphorite always appears humanoid in form with golden skin that flickers and periodically coruscates with sparkling crystalline dust, and eyes and hair that tend toward metallic hues. Beyond this, they can appear similar to dwarves, elves, and humans, or any other Medium humanoid race.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 37</Link><br/><strong className="hl">Astomoi</strong> Appearing to be made of darkness, these mysterious humanoids require no food - indeed, they have no mouths - and they have no eyes with which to survey their environment. Instead, they rely on their powerful minds to sense the world around them, and subsist on nutrients absorbed from the air. This can turn against them, however, as powerful smells and inhaled poisons can render an <Link to="/race/astomoi">astomoi</Link> helpless. Predisposed to asceticism, astomoi rarely wear more than rags, if they wear anything at all.</p>
<p><strong>Sources</strong> <Link to="/source/pathfinder_111_dreams_of_the_yellow_king">Pathfinder #111: Dreams of the Yellow King pg. 87</Link><br/><strong className="hl">Being of Ib:</strong> The curious ears and flabby lips of this sickly green human-shaped ghostly creature frame its frog-like face, yet only empty sockets stare from where its eyes should be. Living examples of this time-forgotten race may yet exist on distant worlds, or they could be resurrected by curious spellcasters. A living <Link to="/race/being_of_ib">being of Ib</Link> is not a very dangerous creature, but those who gain levels in spellcasting classes can become quite formidable.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 66</Link><br/><strong className="hl">Caligni:</strong> The name <Link to="/race/caligni">caligni</Link> is an ancient term for the races now collectively known as <Link to="/family/dark_folk">dark folk</Link>, sometimes still used by dark folk communities to refer to themselves. Untold generations ago, these subterranean dwellers aspired to grand destinies, and might have achieved them if not for the planned degeneration meted out by their controllers, the <Link to="/monster/owb">owbs</Link>. Yet even today, dark folk are sometimes born bearing an uncanny likeness to the ancients that dark stalkers still imitate. Throwbacks to the time before owb tampering, these individuals - called simply "caligni" - might be born from any dark folk race, reminders of their people's half-remembered dreams.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 6</Link><br/><strong className="hl">Cecaelias:</strong> A short-lived race, <Link to="/race/cecaelia">cecaelias</Link> are curious and social half-octopus creatures with a love of novelty who search for every bit of enjoyment they can draw from life. From the waist up, cecaelias resemble humans with agile but muscular builds. Instead of humanoid legs, cecaelias have eight cephalopod tentacles that allow them to move quickly both on land and underwater.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 70</Link><br/><strong className="hl">Deep One Hybrids:</strong> The spawn of humans and <Link to="/subtype/deep_one">deep ones</Link>, they are most comfortable with others of their kind, and typically cluster in small, insular settlements where they can assume positions of authority. They tend to have wide mouths, large eyes, and webbed hands.</p>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 115</Link><br/><strong className="hl">Drow Noble:</strong> About one out of every 20 <Link to="/race/drow">drow</Link> is gifted with special powers from birth. <Link to="/race/drow_noble">Drow nobles</Link> are more powerful than the majority of their kin, and as such they quickly rise to power within their communities. Advancement through the hierarchy of a drow noble house is usually accomplished through a combination of assassination, seduction, and treachery, leading most drow in power to be overly paranoid.</p>
<p><strong>Sources</strong> <Link to="/source/occult_bestiary">Occult Bestiary pg. 23</Link><br/><strong className="hl">Duergar Tyrant:</strong> One in a hundred births brings forth a <Link to="/race/duergar">duergar</Link> bestowed with powerful psychic gifts. When such children grow into their powers, they often become authoritarian members of their clans known as <Link to="/race/duergar_tyrant">tyrants</Link>.</p>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 230</Link><br/><strong className="hl">Duskwalkers:</strong> These tall, bipedal, gray-skinned beings have a connection to <Link to="/faith/pharasma">Pharasma's</Link> Boneyard and are limited in number by divine decree. They manifest directly on the Material Plane, incarnating from souls that have earned the honor of a second life. The souls that become <Link to="/race/duskwalker">duskwalkers</Link> have often distinguished themselves in the eyes of <Link to="/family/psychopomp">psychopomps</Link> as guardians of the cycle of birth and death. Other than their gray skin, their physical features bear some resemblance to those they held in their previous lives. As such, a typical duskwalker looks mostly human, other than her unusual coloration. However, duskwalkers whose ancestors belonged to other races can manifest with characteristic features such as pointed ears, hairy feet, or even feathers, horns, scales, or tails.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 4</Link>, <Link to="/source/inner_sea_races">Inner Sea Races pg. 242</Link><br/><strong className="hl">Aquatic Elves:</strong> <Link to="/race/aquatic_elf">Aquatic elves</Link> can live either in or out of the water, but most prefer homes in the watery depths of oceans and seas. They establish small communities, uniting with other aquatic elves as needed for protection but remaining largely independent.</p>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 234</Link>, <Link to="/source/distant_shores">Distant Shores pg. 22</Link><br/><strong className="hl">Ganzis:</strong> <Link to="/race/ganzi">Ganzis</Link> are the end result of planar chaos touching living creatures. Where the planes brush against the Material Plane or where chaotic inhabitants (be they <Link to="/monster/chaos_beast">chaos beasts</Link>, <Link to="/family/protean">proteans</Link>, <Link to="/monster/valkyrie">valkyries</Link>, or others) affect or influence mortal life, ganzis are born in their wake like ripples in a pond.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 9</Link>, <Link to="/source/inner_sea_races">Inner Sea Races pg. 243</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 122</Link><br/><strong className="hl">Gathlains:</strong> According to some fey ballads, <Link to="/race/gathlain">gathlains</Link> were one of the first peoples awakened in the First World, the primal realm of the fey. Gathlains grow from the seeds of an enormous magical tree - seeds that often drift for hundreds of miles before developing into adolescent gathlains, with the tree's mistletoe grown into their flesh to form their strange wings. Despite being born with a basic understanding of their world, gathlains are inquisitive to a fault. They are known to be invaluable guides and knowledgeable explorers, if one can put up with their numerous questions and strange japes.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 15</Link>, <Link to="/source/inner_sea_races">Inner Sea Races pg. 243</Link>, <Link to="/source/bestiary_5">Bestiary 5 pg. 119</Link>, <Link to="/source/inner_sea_bestiary">Inner Sea Bestiary pg. 14</Link><br/><strong className="hl">Ghorans:</strong> The first <Link to="/race/ghoran">ghorans</Link> came into being thousands of years ago during a great war between two nations ruled by rival archmages. These plants, named "ghorans" after their maker, swiftly developed the ability to move on their own, searching out the most nourishing soil and continuously adapting themselves to survive in more and more dangerous environments. As they grew in intelligence, ghorans evolved human-like forms as a defense mechanism to induce sympathy and prevent further butchery. When he died, their maker took the secrets of creating new ghorans to his grave, and from that point forward the number of ghorans in the world became fixed.</p>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_2">Pathfinder Worldscape #2 pg. 24</Link><br/><strong className="hl">Green Martians:</strong> Among the hardiest and longest-lived of Barsoom's savage races, the <Link to="/race/green_martian">green men of Mars</Link> rove the planet's wastelands in brutal tribes of thousands of warriors, seeking their fortunes as nomads amid the crumbling ruins of ancient cities and the vast barren wildlands between them. Their tall frames, four arms, and battle ferocity make the green Martians among the most respected denizens of Barsoom.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 17</Link><br/><strong className="hl">Grindylows:</strong> A <Link to="/race/grindylow">grindylow</Link> looks like a wide-mouthed goblin from the waist up and a writhing, slimy octopus from the waist down. They have deep-green skin, gray or green tentacles, and mouths full of sharp teeth. Grindylows prefer to attack in packs, making them more dangerous than they appear individually.</p>
<p><strong>Sources</strong> <Link to="/source/paizo_blog___the_gauntlet_will_be_ours">Paizo Blog - The Gauntlet Will Be Ours! pg. 1</Link><br/><strong className="hl">Primitive Humans:</strong> Early humans were far more primitive than their modern descendants. While they still had the capacity to create great works of art and solve complex problems, the reality of their existence meant that most had to fight for survival on a daily basis. As a result, <Link to="/race/primitive_human">primitive humans</Link> devoted more of their time to honing the basic skills of to avoid predators and gather food than to higher-minded pursuits. This prevented them from becoming as versatile as modern humans.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 245</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 174</Link>, <Link to="/source/people_of_the_stars">People of the Stars pg. 8</Link><br/><strong className="hl">Kasathas:</strong> This four-armed nomadic humanoid race hails from a desert world that orbits a red sun far beyond Golarion's own solar system. The <Link to="/race/kasatha">kasathas</Link> of Golarion have a cultural tradition of exploration, and when they come of age, they leave their clan, usually for one year, then return to their people with any riches or knowledge acquired during their journeys. This ritual "tempering" allows young adults to undergo a period of self-discovery before they assume their adult responsibilities.</p>
<p><strong>Sources</strong> <Link to="/source/isles_of_the_shackles">Isles of the Shackles pg. 51</Link><br/><strong className="hl">Kuru:</strong> <Link to="/race/kuru">Kuru</Link> are savage natives of the Shackles, dreadfully transformed by their loathsome "goddess," the Blood Queen. While most kuru live in small tribal villages in or around ruins, some choose to abandon their cultic faith and seek adventure beyond the islands from which they hail, though such individuals are extremely rare.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 246</Link>, <Link to="/source/people_of_the_stars">People of the Stars pg. 10</Link>, <Link to="/source/inner_sea_bestiary">Inner Sea Bestiary pg. 25</Link><br/><strong className="hl">Lashunta:</strong> The <Link to="/race/lashunta">lashunta</Link> are race of humanoids native to Castrovel that exhibit a curious sexual dimorphism. The most obvious similarity the two sexes have is a pair of thin, twitching antennae that sprout from just below their hairlines. Beyond that, male lashunta are compact, muscular, and hirsute, whereas female lashunta are tall, lithe, and majestic. Their personalities also differ somewhat; females are generally charismatic and commanding, and males are brusque and war-like. However, both sexes are equally intelligent, civilized, and competent on the battlefield. Most lashunta prize magical, mental, and psychic potential over common physical prowess.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 10</Link><br/><strong className="hl">Locathahs:</strong> Though unsettling in appearance - at least to most surface races - <Link to="/race/locathah">locathahs</Link> are friendly and inquisitive. Unlike many aquatic denizens, locathahs have no inherent distrust of surfacers. In fact, most locathahs enjoy conversing with surface races and often hail passing ships to exchange goods or simply pass along news. Locathahs are slender humanoids who have feathery fins running along the backs of their arms and legs, along the crown of their skulls, and down their spines. They generally have protruding fish-like faces with large, round eyes.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 138</Link>, <Link to="/source/inner_sea_bestiary">Inner Sea Bestiary pg. 16</Link>, <Link to="/source/inner_sea_races">Inner Sea Races pg. 244</Link><br/><strong className="hl">Monkey Goblins:</strong> <Link to="/race/monkey_goblin">Monkey goblins</Link> are an offshoot of the goblin race adapted for life in the high leafy canopies of Golarion's tropical forests. Equipped with rat-like prehensile tails, monkey goblins are as at home in the trees as they are on the ground.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 197</Link>, <Link to="/source/occult_bestiary">Occult Bestiary pg. 34</Link>, <Link to="/source/darklands_revisited">Darklands Revisited pg. 37</Link><br/><strong className="hl">Munavris:</strong> These pale humanoids, who hail from the distant shores of strange subterranean oceans, have long warred against encroaching monsters. <Link to="/race/munavri">Munavris</Link> pilot violet-sailed, intricately carved ivory ships across the inky black depths of underground oceans and are adept at lightless naval battles.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 200</Link><br/><strong className="hl">Naiads:</strong> <Link to="/race/naiad">Naiads</Link> are protectors of freshwater areas such as lakes, ponds, and particularly rivers. While many naiads are reclusive, some choose to regularly visit settlements built near their bodies of water as long as those settlements are respectful to nature and the fey. Others explore the vast world, bonding to bodies of water as they travel.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 186</Link><br/><strong className="hl">Orang-pendaks:</strong> <Link to="/race/orang_pendak">Orang-pendaks</Link> are a rare offshoot of the sasquatch species that dwells in remote mountainous jungles. Elusive and shy, they are rarely seen by other races. Given their friendship with apes (gibbons and orangutans in particular) and their hunched posture and shaggy fur, they are often mistaken for those beasts at a distance. Orang-pendaks train apes and monkeys to hunt and fight for them, but despite the friendship and similar appearance, the species are not closely related.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 202</Link><br/><strong className="hl">Reptoids:</strong> <Link to="/race/reptoid">Reptoids</Link> are bipedal reptiles from another planet, or perhaps even another plane - they refuse to reveal their origins to humanoids, even under duress. Disguised as members of others races, the reptoids seek positions of power in order to secretly prepare for an invasion from their homeworld. Even those who are aware of reptoids in their midst can never be truly sure who is real and who is an alien, as these creatures are often adept at enchantment and psychic magic, which they use to cover the tracks of their deceptions and to ensure the complacency or even collusion of their soon-to-be thralls.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 242</Link><br/><strong className="hl">Rougarous:</strong> <Link to="/race/rougarou">Rougarous</Link> are wolf-headed humanoids who can transform into wolves. While this sometimes confuses others into mistaking a rougarou for a werewolf, these humanoids are not <Link to="/family/lycanthrope">lycanthropes</Link>. In fact, most detest werewolves and hunt them mercilessly.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 17</Link><br/><strong className="hl">Sahuagin:</strong> <Link to="/race/sahuagin">Sahuagin</Link> are well known and feared among aquatic races. These piscine predators are cruel and vicious, and they see all other creatures as either competitors or prey. The sole exception is the shark; sahuagin are rarely found without semi-domesticated sharks nearby, as they feel a close bond with these other predators of the sea and both creatures are used to hunting ruthlessly alongside each other.</p>
<p><strong>Sources</strong> <Link to="/source/occult_bestiary">Occult Bestiary pg. 50</Link><br/><strong className="hl">Reborn Samsaran:</strong> Sometimes a <Link to="/race/samsaran">samsaran</Link> perishes under especially dramatic emotional circumstances, causing its soul to wander the Ethereal Plane before finally reincarnating. This spirit journey frays the <Link to="/race/reborn_samsaran">reborn samsaran's</Link> connection to his past lives but strengthens his ability to read others' pasts and present.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 227</Link>, <Link to="/source/pathfinder_84_pyramid_of_the_sky_pharaoh">Pathfinder #84: Pyramid of the Sky Pharaoh pg. 90</Link><br/><strong className="hl">Shabti:</strong> Death is more terrifying for those who have the best of life. Many rulers obsess over their mortality, the most brazen turning to the mystical arts, pouring their fears into splendid vessels, fashioning simulacra of themselves to bear the scourge of <Link to="/faith/pharasma">Pharasma's</Link> judgment. In the mortal world, these icons are nothing but gold with a ruler's face and name, but in death, they are <Link to="/race/shabti">shabti</Link>. They serve out the sentences of their mortal twins, whether it be an infinity of torture or an eternity wandering the planes. Most never emerge from such trials, but some manage to find their own paths upon the planes.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_5">Bestiary 5 pg. 233</Link>, <Link to="/source/inner_sea_races">Inner Sea Races pg. 248</Link>, <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 6</Link><br/><strong className="hl">Skinwalkers:</strong> Most people believe <Link to="/race/skinwalker">skinwalkers</Link> are half-breeds of lycanthropes, or that they share some slight version of the curse of those creatures. Skinwalker shamans say they are chosen by nature or the gods to be a bridge between the world of humanity and the animal world. The truth may lie somewhere between these two ideas. For indeed, skinwalkers are those with a lycanthrope crouching somewhere in the branches of their family tree. Skinwalkers resemble humans much of the time, but they possess the uncanny ability to transform into bestial humanoids who combine the most fearsome aspects of flesh and fur.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 251</Link>, <Link to="/source/inner_sea_bestiary">Inner Sea Bestiary pg. 51</Link><br/><strong className="hl">Syrinx:</strong> From lofty monastery-cities entrenched in soaring cliff sides and high mountain valleys, the <Link to="/race/syrinx">syrinx</Link> seek to bring peace to all lands that fall within sight of their marbled spires. Erudite and aloof, the owl-like scholars embrace art, philosophy, and nebulous faiths, seeking to distance themselves from a history of barbarism and ruin. To this end, they seek to enslave all lesser races, especially those without wings. Their elitist culture rests upon thousands of backs in an elaborate hierarchy of slaves.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 252</Link>, <Link to="/source/pathfinder_70_the_frozen_stars">Pathfinder #70: The Frozen Stars pg. 86</Link>, <Link to="/source/people_of_the_stars">People of the Stars pg. 12</Link><br/><strong className="hl">Triaxians:</strong> <Link to="/race/triaxian">Triaxians</Link>, the race of humanoids native to Triaxus, have developed an amazing physiological adaptation to their planet's centuries-long seasons. The average Triaxian lives for only 80 years, so entire generations experience nothing but endless summer or winter throughout their lifetimes. Curiously, Triaxians born on other worlds exhibit Summerborn, Winterborn, or Transitional traits that follow the same pattern as their home world, indicating that their physiological adaptations to the Triaxian environment function according to an internal biological clock rather than in response to external stimuli.</p>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 14</Link><br/><strong className="hl">Tritons:</strong> <Link to="/race/triton">Tritons</Link> first came to Golarion centuries ago from the Plane of Water, but most of them now consider the Material Plane their home. They live in many of the oceans, seas, and even rivers of Golarion, though they dislike settling in lightless oceanic depths. They are kind and good-natured creatures who maintain distant but cordial relations with others. Tritons have a reputation for fairness and honesty that endears them to coastal communities and undersea settlements of aquatic elves, locathahs, and merfolk.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 253</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 264</Link><br/><strong className="hl">Trox:</strong> <Link to="/race/trox">Trox</Link> were once members of a much smaller and more docile race of subterranean burrowers, but were long ago enslaved by the <Link to="/monster/duergar">duergar</Link> and bred into useful brutes. Eventually, several clans of trox were able to escape their slavers and reach the surface world, though they found the creatures above were just as eager to enslave them. Most trox still live a life of servitude. A free trox tends to be loyal to its true friends and inquisitive, though it can harbor deep grudges and resentments.</p>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 20</Link><br/><strong className="hl">Vine Leshys:</strong> <Link to="/race/vine_leshy">Vine leshys</Link> are born by ritual, called forth when a druid channels a nature spirit into a plant's form. The nature spirit that answers the call for a vine leshy creation ritual is always one that has keenly felt the influence of mortal beings. Compared to other <Link to="/family/leshy">leshys</Link>, vine leshys have an easier time relating to non-plant creatures and a deeper sense of curiosity about the wonders of the natural world beyond those plants closely related to them, as well as a fascination with the societies of humans and other creatures.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 253</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 280</Link><br/><strong className="hl">Wyrwoods:</strong> This relatively young race was created by a cabal of wizards who needed nimble and skilled construct servants to do their dirty work. This cabal was interested in creating magical machines, so they built their tools to be small, agile, and clever. Over time, the cabal pushed the limits too far and created minions with free will, and these first <Link to="/race/wyrwood">wyrwoods</Link> began to question why they were involved in their masters' petty intrigues. When the wizards forced the wyrwoods to fight each other as proxies for the wizards themselves, the constructs instead killed their creators and stole the notes on how to create more of their kind, allowing them to perpetuate their race.</p>
<p><strong>Sources</strong> <Link to="/source/inner_sea_races">Inner Sea Races pg. 253</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 281</Link><br/><strong className="hl">Wyvarans:</strong> These dragon-like humanoids are the result of magical draconic experiments at crossbreeding wyverns and kobolds. <Link to="/race/wyvaran">Wyvarans</Link> are fiercely territorial creatures loyal to their kin and tribe, and allow no interlopers into their lands without good reason or proper tribute. Each defends its personal property, and seeks revenge on any who dare steal from it. Most evil and neutral wyvarans primarily concern themselves with expanding their territory and wealth.</p>
<p><strong>Sources</strong> <Link to="/source/bestiary_6">Bestiary 6 pg. 285</Link><br/><strong className="hl">Yaddithians:</strong> These insectile bipeds have a tapir-like snout and are unmistakably alien in appearance, despite their vaguely humanoid shape. <Link to="/race/yaddithian">Yaddithians</Link> are an ancient race of scholarly starfarers. Monsters consumed their home planet long ago; the survivors fled to other worlds across the universe.</p>
</>};
const _racial_traits = {title: "Racial Traits", parent_topics: ["basics","races"], siblings: ["core_races","less_common_races","uncommon_races","rare_races","racial_traits"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 8</Link></p>
<p>It is important to note that "racial traits" are not the same as the <Link to="/rule/traits">trait</Link> rules. Those traits are effectively half-feats, intended to tie characters to the specific nations, cultures, regions, and races of the Golarion campaign world. <strong className="hl">Racial traits</strong>, on the other hand, are those racial abilities described at the bottom of each race's descriptive page. Some races have few racial traits, like half-orcs and humans. Others, like dwarves and gnomes, have many. All of these racial traits represent typical members of the race and the kinds of special abilities they gain from their heritage, whether from biology, racial attitudes, or otherwise.</p>
<p>Racial entries also include <strong className="hl">Alternate Racial Traits</strong>. Some of them play on racial archetypes not reflected in the standard racial traits, like a gnome's love of languages or tinkering or a halfling's mastery of thrown items or of slipping through a battlefield under the feet of larger races. In order to choose one of these racial traits, you must exchange one or more of the existing racial traits available to your character. These racial traits replace a character's normal racial traits; they are not abilities gained in addition to them. In many cases, racial abilities are exchanged on a one-to-one basis; you give up one racial ability to gain a new one. In other cases, you may have to exchange more than one racial trait to take one of these alternate racial traits. For example, a <Link to="/race/gnome">gnome</Link> may eschew the militant path and exchange <em>defensive training</em> and <em>hatred</em> for <em>the gift of tongues,</em> while other magic-using gnomes might forgo the traditional gnome specialty of <em>illusion magic</em> to become a <em>magical linguist</em> or even a <em>pyromaniac.</em></p>
<p>You can exchange one or several of your character's normal racial traits, but of course you cannot exchange the same racial trait more than once. If a <Link to="/race/human">human</Link> exchanges the <em>skilled</em> trait to become either a <em>child of the fields</em> or a <em>child of the street,</em> she cannot exchange it twice to take both new traits. However, she could choose one of those as an alternate racial trait while also exchanging her <em>bonus feat</em> racial trait to gain an <em>eye for talent.</em></p>
<p>As with any alternate or optional rule, you must first get the permission of your GM to exchange any of your character's normal racial traits.</p>
<h3 id="rule-racial_traits-subraces">Subraces</h3>
<p>Some races have "subraces" listed. These are specific to the Pathfinder RPG world and list the requisite alternate racial traits you must use to qualify for the subrace.</p>
</>};
const _classes = {title: "Classes", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 30</Link><br/>A character's class is one of his most defining features. It's the source of most of his abilities, and gives him a specific role in any adventuring party. The following eleven classes represent the core classes of the game.</p>
<blockquote>
<p><strong className="hl">Barbarian:</strong> The <Link to="/class/barbarian">barbarian</Link> is a brutal berserker from beyond the edge of civilized lands.</p>
<p><strong className="hl">Bard:</strong> The <Link to="/class/bard">bard</Link> uses skill and spell alike to bolster his allies, confound his enemies, and build upon his fame.</p>
<p><strong className="hl">Cleric:</strong> A devout follower of a deity, the <Link to="/class/cleric">cleric</Link> can heal wounds, raise the dead, and call down the wrath of the gods.</p>
<p><strong className="hl">Druid:</strong> The <Link to="/class/druid">druid</Link> is a worshiper of all things natural; a spellcaster, a friend to animals, and a skilled shapechanger.</p>
<p><strong className="hl">Fighter:</strong> Brave and stalwart, the <Link to="/class/fighter">fighter</Link> is a master of all manner of arms and armor.</p>
<p><strong className="hl">Monk:</strong> A student of martial arts, the <Link to="/class/monk">monk</Link> trains his body to be his greatest weapon and defense.</p>
<p><strong className="hl">Paladin:</strong> The <Link to="/class/paladin">paladin</Link> is the knight in shining armor, a devoted follower of law and good.</p>
<p><strong className="hl">Ranger:</strong> A tracker and hunter, the <Link to="/class/ranger">ranger</Link> is a creature of the wild and of tracking down his favored foes.</p>
<p><strong className="hl">Rogue:</strong> The <Link to="/class/rogue">rogue</Link> is a thief and a scout, an opportunist capable of delivering brutal strikes against unwary foes.</p>
<p><strong className="hl">Sorcerer:</strong> The spellcasting <Link to="/class/sorcerer">sorcerer</Link> is born with an innate knack for magic and has strange, eldritch powers.</p>
<p><strong className="hl">Wizard:</strong> The <Link to="/class/wizard">wizard</Link> masters magic through constant study that gives him incredible magical power</p>
</blockquote>
<p>Over the years, more classes were developed and published. These include brand new <strong className="hl">Base Classes</strong> that fit new niches, <strong className="hl">Hybrid Classes</strong> that merge two Core or Base classes together, <strong className="hl">Alternate Classes</strong> that tweak an existing Core or Base class into something new, <strong className="hl">Unchained Classes</strong> that sought to fix a broken Core or Base class, and <strong className="hl">Occult Classes</strong> that lean heavily into spirits, psychic energy, and the unknown.</p>
<p>Much like <Link to="/rule/racial_traits">alternate racial traits</Link>, flavorful tweaks were introduced to classes, as well. These are known as <strong className="hl">Archetypes.</strong></p>
<p>Finally, there are <strong className="hl">Prestige Classes</strong>, which cannot be taken at first level. Instead, each class has prerequisites that will take you several regular class levels to meet. Once you meet the qualifications, you can then proceed to take levels in the prestige class.</p>
</>};
const _base_classes = {title: "Base Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 26</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 9</Link>, <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 9</Link>, <Link to="/source/ultimate_magic">Ultimate Magic pg. 9</Link><br/>While most common folk have shared ale with a fighter or perhaps even seen a wizard perform an awesome act of magic, these are not the only adventurers known to legends and history. The following character classes present new options for players and greater variety for a Game Master's cast of nonplayer characters.</p>
<blockquote>
<p><strong className="hl">Alchemist:</strong> The <Link to="/class/alchemist">alchemist</Link> is the master of alchemy, using extracts to grant him great power, mutagens to enhance his form, and bombs to destroy his enemies.</p>
<p><strong className="hl">Cavalier:</strong> Mounted upon his mighty steed, the <Link to="/class/cavalier">cavalier</Link> is a brave warrior, using his wit, charm, and strength at arms to rally his companions and achieve his goals.</p>
<p><strong className="hl">Gunslinger:</strong> For a renegade few, battle sounds different than it does for the typical fighter. The clash of steel and the sizzle of spell energy are drowned out by the thunderous rhythm of gunfire - the pounding beat of the <Link to="/class/gunslinger">gunslinger</Link>.</p>
<p><strong className="hl">Inquisitor:</strong> Scourge of the unfaithful and hunter of horrors, the <Link to="/class/inquisitor">inquisitor</Link> roots out the enemies of her faith with grim conviction and an array of divine blessings.</p>
<p><strong className="hl">Magus:</strong> There are those who spend their lives poring over ancient tomes and texts, unlocking the power of magic, and there are those who spend their time perfecting the use of individual weapons, becoming masters without equal. The <Link to="/class/magus">magus</Link> is at once a student of both philosophies, blending magical ability and martial prowess into something entirely unique, a discipline in which both spell and steel are used to devastating effect.</p>
<p><strong className="hl">Oracle:</strong> Drawing upon divine mysteries, the <Link to="/class/oracle">oracle</Link> channels divine power through her body and soul, but at a terrible price.</p>
<p><strong className="hl">Shifter:</strong> Whether riding on the wind as a falcon or hiding in some fetid bog waiting to strike, the <Link to="/class/shifter">shifter</Link> is a true master of the wild. Both a devoted defender of druidic circles and a fierce predator, the shifter can take on the forms of nature and even fuse them together with devastating effect and unbridled savagery</p>
<p><strong className="hl">Summoner:</strong> Bonded to a mysterious creature called an eidolon, the <Link to="/class/summoner">summoner</Link> focuses his power on strengthing that connection and enhancing his strange, otherworldy companion.</p>
<p><strong className="hl">Vigilante:</strong> There are those who see injustice and do nothing. Then there are those who see inequality and find themselves driven to take action, outside the law if necessary. These <Link to="/class/vigilante">vigilantes</Link> operate in plain sight, hiding behind respectable personas by day, but donning alternate guises by night to right the wrongs they see all around them.</p>
<p><strong className="hl">Witch:</strong> Lurking on the fringe of civilization, the <Link to="/class/witch">witch</Link> makes a powerful connection with a patron that grants her strange and mysterious powers through a special familiar.</p>
</blockquote>
</>};
const _hybrid_classes = {title: "Hybrid Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 8</Link><br/>Most heroes progress along a single path - choosing to become a fearsome fighter, pious cleric, or mighty wizard - but some are drawn to many roads. For them, it can be hard to find a balance between abilities offered by disparate classes. Hybrid classes solve this dilemma by blending features from two classes, adding rules to make them work seamlessly together.</p>
<p><strong className="hl">Parent Classes:</strong> Each of the following classes draws upon two classes to form the basis of its theme. While a character can multiclass with these parent classes, doing so usually results in redundant abilities. Such abilities don't stack unless specified. If a class feature allows the character to make a one-time choice (such as a bloodline), that choice must match similar choices made by the parent classes and vice-versa (such as selecting the same bloodline).</p>
<blockquote>
<p><strong className="hl">Arcanist:</strong> Blending the power of the sorcerer with the versatility of the wizard, the <Link to="/class/arcanist">arcanist</Link> draws upon a reservoir of power to bend magic to her will.</p>
<p><strong className="hl">Bloodrager:</strong> Fusing the frenzy of the barbarian with the bloodline might of the sorcerer, the <Link to="/class/bloodrager">bloodrager</Link> calls upon innate power to give himself extraordinary abilities.</p>
<p><strong className="hl">Brawler:</strong> Focusing on hand-to-hand combat, the <Link to="/class/brawler">brawler</Link> mixes the martial artistry of the monk with the specialist training of the fighter.</p>
<p><strong className="hl">Hunter:</strong> Though both the druid and ranger can have animal companions, the <Link to="/class/hunter">hunter</Link> takes this bond to the next level, forming a deadly duo with her savage ally.</p>
<p><strong className="hl">Investigator:</strong> With the rogue's cunning complemented by the alchemist's magical talent, the <Link to="/class/investigator">investigator</Link> is a peerless problem solver.</p>
<p><strong className="hl">Shaman:</strong> Calling on the divine power of the oracle and the hexes of a witch, the <Link to="/class/shaman">shaman</Link> communes with her spirit animal to unleash doom upon her foes.</p>
<p><strong className="hl">Skald:</strong> Sharing fury through song and deed, the <Link to="/class/skald">skald</Link> takes the rage that lives in the heart of the barbarian and inspires it in others using the performances of the bard.</p>
<p><strong className="hl">Slayer:</strong> Mixing the precise strikes of the rogue with the special training of the ranger, the <Link to="/class/slayer">slayer</Link> hunts down his foes with ruthless efficiency.</p>
<p><strong className="hl">Swashbuckler:</strong> Combining the prowess of the fighter with the determination of the gunslinger, the <Link to="/class/swashbuckler">swashbuckler</Link> is an acrobatic melee combatant.</p>
<p><strong className="hl">Warpriest:</strong> Blending the cleric's divine might and the fighter's martial skills, the <Link to="/class/warpriest">warpriest</Link> brings the fight to the enemies of his faith.</p>
</blockquote>
</>};
const _alternate_classes = {title: "Alternate Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 9</Link><br/>These are standalone classes whose basic ideas are very close to established base classes, yet whose required alterations would be too expansive for an archetype. In this case, that's the <Link to="/class/samurai">samurai</Link> and the <Link to="/class/ninja">ninja</Link> - specifically Asian-themed classes that have long and unique histories, as well as great cultural cachet, but which are similar in concept to the established cavalier and rogue, respectively. An alternate class operates exactly as a base class, save that a character who takes a level in an alternate class can never take a level in its associated class - a samurai cannot also be a cavalier, and vice versa. The <Link to="/class/antipaladin">antipaladin</Link> is also an alternate class, an alternate of the paladin.</p>
</>};
const _unchained_classes = {title: "Unchained Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 8</Link><br/>Since the release of the Pathfinder RPG Core Rulebook, countless game sessions have revealed that certain classes have been pushing against their constraints, yearning to break free into something at once familiar and new. This chapter includes unchained versions of the barbarian, monk, rogue, and summoner. These classes can be used alongside their original counterparts (although individual characters must use one version or the other exclusively). Some feats, rage powers, rogue talents, and other rules might not work with the unchained classes, and such rules should be reviewed before being used with the new versions. Finally, with the exception of the monk, these classes should work with any of the archetypes from previous books as long as the classes still have the appropriate class features to replace.</p>
<p><strong className="hl">Barbarian:</strong> From a game balance perspective, the original barbarian serves her role admirably, but her mechanics require the player to recalculate numerous values once she enters a rage and keep track of a bevy of once-per-rage abilities. She can easily die in a fight due to the way that ending a rage lowers her hit points. The <Link to="/class/unchained_barbarian">unchained barbarian</Link> significantly simplifies the rage bonus calculations, and she gains temporary hit points instead of raising and later decreasing her current and maximum hit points. Finally, she gains stronger versions of some of the weakest rage powers.</p>
<p><strong className="hl">Monk:</strong> The original monk has many disparate abilities, which don't always work together and are inflexible. The <Link to="/class/unchained_monk">unchained monk</Link> loosens up, gaining ki powers that allow greater customization. The unchained monk also has a full base attack bonus and an all-new flurry of blows.</p>
<p><strong className="hl">Rogue:</strong> The original rogue has a niche thanks to her sneak attack and high number of skill ranks, but she is still somewhat underpowered. The <Link to="/class/unchained_rogue">unchained rogue</Link> can debilitate her enemies to dramatically alter her ability to hit or dodge them, gains a unique edge when using her favorite skills, and enjoys a significant boost to her rogue talents.</p>
<p><strong className="hl">Summoner:</strong> The original summoner has plenty of innovative features, but he also lacks focus and theme. The <Link to="/class/unchained_summoner">unchained summoner</Link> gains an eidolon that fits among existing outsiders, gaining additional abilities and plenty of thematic flavor. Additionally, he has a revised spell list more in line with similar casters</p>
</>};
const _occult_classes = {title: "Occult Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 10</Link><br/>Beyond the worship of the divine and the studies of arcane scholars lies the mysterious terrain of the mind, accessed through psychic magic. Classes that draw upon psychic magic do so via innate mental abilities, whether they directly cast spells, create elemental effects, or focus psychic energy through objects. Members of these occult classes find themselves drawn to the strange and the hidden; they have connections to the timeless Astral Plane, the haunted bleakness of the Ethereal Plane, and the history of the Material Plane chronicled as psychic impressions in places and objects.</p>
<blockquote>
<p><strong className="hl">Kineticist:</strong> With a connection to the elements, a <Link to="/class/kineticist">kineticist</Link> can bring forth energy in the form of kinetic blasts. Instead of casting psychic spells, the kineticist uses unique psychic spell-like abilities called wild talents to manipulate elemental energy and matter.</p>
<p><strong className="hl">Medium:</strong> By contacting spirits in places of power, the <Link to="/class/medium">medium</Link> allows the personalities of legendary heroes to overcome his own, vastly changing his abilities and spells. He holds seances to benefit himself and his allies.</p>
<p><strong className="hl">Mesmerist:</strong> A mesmerist's piercing stare lets him insinuate himself into other people's minds. A master of enchantment and illusion, the <Link to="/class/mesmerist">mesmerist</Link> controls and influences the behavior of others.</p>
<p><strong className="hl">Occultist:</strong> To make use of his powers, an <Link to="/class/occultist">occultist</Link> channels psychic energy into a varied collection of antiques and mementos with storied pasts. Every type of implement allows him to use a different school of magic.</p>
<p><strong className="hl">Psychic:</strong> With her incredibly potent mind, the <Link to="/class/psychic">psychic</Link> can cast spells that are more powerful than those of members of any other occult class. She accesses these spells through a specific discipline, and can bend and amplify psychic spells as she casts them.</p>
<p><strong className="hl">Spiritualist:</strong> Attuned to the spirits of the dead, a <Link to="/class/spiritualist">spiritualist</Link> forms a bond with a phantom - a returned spirit that has unfinished business but did not become undead. This spectral ally can alternate between forms, emerging from the safety of the spiritualist's mind to take on an incorporeal form or an ectoplasmic body.</p>
</blockquote>
</>};
const _archetypes = {title: "Archetypes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 72</Link></p>
<p>From the noble paladin to the skillful rogue, each core class draws upon a central archetype. Yet, beyond that basic concept exists the potential for innumerable interpretations, details, and refinements. The fighter class, for example, might easily be sculpted into a dead-eye archer, a fleet-footed duelist, a stealthy jungle hunter, or countless other types of martial masters, all refined by a player's choice of details, class options, and specific rules. Yet some archetypes prove pervasive and exciting enough to see use in play time and time again.</p>
<p>To help players interested in creating iconic fantasy characters, <strong className="hl">Archetypes</strong> were introduced. So while most druids wander the woods, some track through the vast desert, reveling in what the wastes have to offer. Such optional features represent a unique view of what a class deliberately designed to capture a specific character archetype might become. While the types of options presented for each core class differ, each subsystem is customized to best serve that class, emulate the abilities and talents of classic fantasy archetypes, and expand players' freedom to design exactly the characters they desire.</p>
<h3 id="rule-archetypes-alternate-class-features">Alternate Class Features</h3>
<p>Most of the options include a host of alternate class features. When a character selects a class, he must choose to use the standard class features or those listed in one of the archetypes presented with the class. Each alternate class feature replaces a specific class feature from its parent class. For example, the <em>elemental fist</em> class feature of the <Link to="/arc-monk/monk_of_the_four_winds">monk of the four winds</Link> replaces the <em>stunning fist</em> class feature of the <Link to="/class/monk">monk</Link>. When an archetype includes multiple class features, a character must take all of them - often blocking the character from ever gaining certain familiar class features, but replacing them with equally powerful options. All of the other class features found in the core class and not mentioned among the alternate class features remain unchanged and are acquired normally when the character reaches the appropriate level (unless noted otherwise). A character who takes an alternate class feature does not count as having the class feature that was replaced when meeting any requirements or prerequisites.</p>
<p>A character can take more than one archetype and garner additional alternate class features, but none of the alternate class features can replace or alter the same class feature from the core class as another alternate class feature. For example, a <Link to="/class/paladin">paladin</Link> could not be both a <Link to="/arc-paladin/hospitaler">hospitaler</Link> and an <Link to="/arc-paladin/undead_scourge">undead scourge</Link> since they both modify the <em>smite evil</em> class feature and both replace the <em>aura of justice</em> class feature. A paladin could, however, be both an <em>undead scourge</em> and a <Link to="/arc-paladin/warrior_of_the_holy_light">warrior of the holy light</Link>, since none of their new class features replace the same core class feature.</p>
<h3 id="rule-archetypes-adapting-existing-characters">Adapting Existing Characters</h3>
<p>Players with existing characters should talk with their GM about whether on not these alternate class features are available in her game, and if so, whether they can recreate their characters to adopt them. As alternate class features are designed to be balanced when compared to those in the core class, players who revise their characters shouldn't be gaining any special advantage over other party members. As long as the GM is comfortable with retroactively adjusting character specifics, there should be no disruption to future adventures. Typically, the best time for a player to adopt alternate class features and significantly revise his character is when leveling up between adventures, though he should always check with the GM before doing so, as she may wish to work significant changes to a character into the campaign.</p>
<p>While the GM might want to make concessions for players who didn't have these alternate class features available to them when creating their characters, PCs should be one of the most constant elements of a campaign. Constantly changing and recreating characters can prove problematic to a campaign. While the GM should be willing to adapt and may allow players who grow bored with their characters to redefine them, alternate class abilities shouldn't feel like exploitable options allowing PCs to build and rebuild their characters in whatever ways seem most advantageous at a given moment. Allowing players to remake characters in light of newly adopted rules may be desirable on occasion, but GMs shouldn't feel like they're being unfair or breaking any rule by not allowing players to rebuild characters or by disallowing certain options. While the GM should always strive to help players run the characters they want, ultimately she knows what's best for the campaign.</p>
</>};
const _prestige_classes = {title: "Prestige Classes", parent_topics: ["basics","classes"], siblings: ["base_classes","hybrid_classes","alternate_classes","unchained_classes","occult_classes","archetypes","prestige_classes"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 374</Link></p>
<p>Prestige classes allow characters to become truly exceptional, gaining powers beyond the ken of their peers. Unlike the core classes, characters must meet specific requirements before they can take their first level of a prestige class. If a character does not meet the requirements for a prestige class before gaining any benefits of that level, that character cannot take that prestige class. Characters that take levels in prestige classes do not gain any favored class bonuses for those levels.</p>
<p>Some prestige classes are quite focused and heavy on flavor that might not be compatible with your campaign - consult with your GM before you start to work toward qualifying for a prestige class to make sure that the class is allowed</p>
<p>Prestige classes are listed at the bottom of the <Link to="/main/classes">list of classes</Link>.</p>
<p>Here are definitions of some terms used in prestige classes.</p>
<blockquote>
<p><strong className="hl">Core Class:</strong> One of the standard <Link to="/main/classes">classes</Link>.</p>
<p><strong className="hl">Caster Level:</strong> Generally equal to the number of class levels (see below) in a spellcasting class. Some prestige classes add caster levels to an existing class.</p>
<p><strong className="hl">Character Level:</strong> The total level of the character, which is the sum of all class levels held by that character.</p>
<p><strong className="hl">Class Level:</strong> The level of a character in a particular class. For a character with levels in only one class, class level and character level are the same.</p>
</blockquote>
</>};
const _traits_and_other_details = {title: "Filling Out the Details", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["age","height_and_weight","traits","character_background"], jsx: <><p>You will want to flesh out your character's details, and rules exist to help make this easier.</p>
<p>The most important of these are <strong className="hl">Traits</strong> - mini-feats that help flesh out your background.</p>
</>};
const _age = {title: "Age", parent_topics: ["basics","traits_and_other_details"], siblings: ["age","height_and_weight","traits","character_background"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 168</Link></p>
<p>You can choose or randomly generate your character's age. If you choose it, it must be at least the minimum age for the character's race and class. Alternatively, roll the dice indicated for your class on Table 7-1 and add the result to the minimum age of adulthood for your race to determine how old your character is.</p>
<h3 id="rule-age-table-7-1-random-starting-ages">Table 7-1: Random Starting Ages</h3>
<ScrollContainer id="rule-age--table-0"><table>
<thead>
<tr>
<th>Race</th>
<th>Adulthood</th>
<th>Intuitive<sup><InnerLink showBacklink="backlink-rule-age-ref-I-1" id="rule-age-ref-I-1" data-hash-target to="rule-age-I">1</InnerLink></sup></th>
<th>Self-Taught<sup><InnerLink showBacklink="backlink-rule-age-ref-S-1" id="rule-age-ref-S-1" data-hash-target to="rule-age-S">2</InnerLink></sup></th>
<th>Trained<sup><InnerLink showBacklink="backlink-rule-age-ref-T-1" id="rule-age-ref-T-1" data-hash-target to="rule-age-T">3</InnerLink></sup> <sup><InnerLink showBacklink="backlink-rule-age-ref-O-1" id="rule-age-ref-O-1" data-hash-target to="rule-age-O">4</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Human</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Dwarf</td>
<td>40 years</td>
<td>+3d6</td>
<td>+5d6</td>
<td>+7d6</td>
</tr>
<tr>
<td>Elf</td>
<td>110 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+10d6</td>
</tr>
<tr>
<td>Gnome</td>
<td>40 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+9d6</td>
</tr>
<tr>
<td>Half-elf</td>
<td>20 years</td>
<td>+1d6</td>
<td>+2d6</td>
<td>+3d6</td>
</tr>
<tr>
<td>Half-orc</td>
<td>14 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Halfling</td>
<td>20 years</td>
<td>+2d4</td>
<td>+3d6</td>
<td>+4d6</td>
</tr>
<tr>
<td>Aasimar<sup><InnerLink showBacklink="backlink-rule-age-ref-E-1" id="rule-age-ref-E-1" data-hash-target to="rule-age-E">5</InnerLink></sup></td>
<td>20 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Catfolk</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Dhampir<sup><InnerLink showBacklink="backlink-rule-age-ref-E-2" id="rule-age-ref-E-2" data-hash-target to="rule-age-E">5</InnerLink></sup></td>
<td>20 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+10d6</td>
</tr>
<tr>
<td>Drow</td>
<td>110 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+10d6</td>
</tr>
<tr>
<td>Fetchling</td>
<td>20 years</td>
<td>+1d6</td>
<td>+2d6</td>
<td>+3d6</td>
</tr>
<tr>
<td>Goblin</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Hobgoblin</td>
<td>14 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Ifrit</td>
<td>60 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Kobold</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Orc</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Oread</td>
<td>60 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Ratfolk</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Sylph</td>
<td>60 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Tengu</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Tiefling<sup><InnerLink showBacklink="backlink-rule-age-ref-E-3" id="rule-age-ref-E-3" data-hash-target to="rule-age-E">5</InnerLink></sup></td>
<td>20 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Undine</td>
<td>60 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Changeling</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Duergar</td>
<td>40 years</td>
<td>+3d6</td>
<td>+5d6</td>
<td>+7d6</td>
</tr>
<tr>
<td>Gillman</td>
<td>20 years</td>
<td>+1d6</td>
<td>+2d6</td>
<td>+3d6</td>
</tr>
<tr>
<td>Grippli</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Kitsune</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Merfolk</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Nagaji</td>
<td>20 years</td>
<td>+1d6</td>
<td>+2d6</td>
<td>+3d6</td>
</tr>
<tr>
<td>Samsaran</td>
<td>60 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+8d6</td>
</tr>
<tr>
<td>Strix</td>
<td>12 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Suli</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Svirfneblin</td>
<td>40 years</td>
<td>+4d6</td>
<td>+6d6</td>
<td>+9d6</td>
</tr>
<tr>
<td>Vanara</td>
<td>14 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Vishkanya</td>
<td>15 years</td>
<td>+1d4</td>
<td>+1d6</td>
<td>+2d6</td>
</tr>
<tr>
<td>Wayang</td>
<td>40 years</td>
<td>+4d6</td>
<td>+5d6</td>
<td>+6d6</td>
</tr>
</tbody></table></ScrollContainer>
<p>With age, a character's physical ability scores decrease and his mental ability scores increase. The effects of each aging step are cumulative. However, none of a character's ability scores can be reduced below 1 in this way.</p>
<p>When a character reaches venerable age, secretly roll his maximum age and record the result, which the player does not know. A character who reaches his maximum age dies of old age sometime during the following year.</p>
<p>The maximum ages are for player characters. Most people in the world at large die from pestilence, accidents, infections, or violence before getting to venerable age.</p>
<h3 id="rule-age-table-7-2-aging-effects">Table 7-2: Aging Effects</h3>
<ScrollContainer id="rule-age--table-1"><table>
<thead>
<tr>
<th>Race</th>
<th>Middle Age<sup><InnerLink showBacklink="backlink-rule-age-ref-1-1" id="rule-age-ref-1-1" data-hash-target to="rule-age-1">6</InnerLink></sup></th>
<th>Old<sup><InnerLink showBacklink="backlink-rule-age-ref-2-1" id="rule-age-ref-2-1" data-hash-target to="rule-age-2">7</InnerLink></sup></th>
<th>Venerable<sup><InnerLink showBacklink="backlink-rule-age-ref-3-1" id="rule-age-ref-3-1" data-hash-target to="rule-age-3">8</InnerLink></sup></th>
<th>Maximum Age</th>
</tr>
</thead>
<tbody><tr>
<td>Human</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Dwarf</td>
<td>125 years</td>
<td>188 years</td>
<td>250 years</td>
<td>250 + 2d% years</td>
</tr>
<tr>
<td>Elf</td>
<td>175 years</td>
<td>263 years</td>
<td>350 years</td>
<td>350 + 4d% years</td>
</tr>
<tr>
<td>Gnome</td>
<td>100 years</td>
<td>150 years</td>
<td>200 years</td>
<td>200 + 3d% years</td>
</tr>
<tr>
<td>Half-elf</td>
<td>62 years</td>
<td>93 years</td>
<td>125 years</td>
<td>125 + 3d20 years</td>
</tr>
<tr>
<td>Half-orc</td>
<td>30 years</td>
<td>45 years</td>
<td>60 years</td>
<td>60 + 2d10 years</td>
</tr>
<tr>
<td>Halfling</td>
<td>50 years</td>
<td>75 years</td>
<td>100 years</td>
<td>100 + 5d20 years</td>
</tr>
<tr>
<td>Aasimar</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Catfolk</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Dhampir</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Drow</td>
<td>175 years</td>
<td>263 years</td>
<td>350 years</td>
<td>350 + 4d% years</td>
</tr>
<tr>
<td>Fetchling</td>
<td>62 years</td>
<td>93 years</td>
<td>125 years</td>
<td>125 + 3d20 years</td>
</tr>
<tr>
<td>Gnome</td>
<td>100 years</td>
<td>150 years</td>
<td>200 years</td>
<td>200 + 3d% years</td>
</tr>
<tr>
<td>Goblin</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 + 1d20 years</td>
</tr>
<tr>
<td>Hobgoblin</td>
<td>30 years</td>
<td>45 years</td>
<td>60 years</td>
<td>60 + 2d10 years</td>
</tr>
<tr>
<td>Ifrit</td>
<td>150 years</td>
<td>200 years</td>
<td>250 years</td>
<td>250 + 6d% years</td>
</tr>
<tr>
<td>Kobold</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 + 1d20 years</td>
</tr>
<tr>
<td>Orc</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 + 1d20 years</td>
</tr>
<tr>
<td>Oread</td>
<td>150 years</td>
<td>200 years</td>
<td>250 years</td>
<td>250 + 6d% years</td>
</tr>
<tr>
<td>Ratfolk</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 + 1d20 years</td>
</tr>
<tr>
<td>Sylph</td>
<td>150 years</td>
<td>200 years</td>
<td>250 years</td>
<td>250 + 6d% years</td>
</tr>
<tr>
<td>Tengu</td>
<td>35 year</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Tiefling</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Undine</td>
<td>150 years</td>
<td>200 years</td>
<td>250 years</td>
<td>250 + 6d% years</td>
</tr>
<tr>
<td>Changeling</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Duergar</td>
<td>125 years</td>
<td>188 years</td>
<td>250 years</td>
<td>250 + 2d% years</td>
</tr>
<tr>
<td>Gillman</td>
<td>62 years</td>
<td>93 years</td>
<td>125 years</td>
<td>125 + 3d20 years</td>
</tr>
<tr>
<td>Grippli</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 + 1d20 years</td>
</tr>
<tr>
<td>Kitsune</td>
<td>32 year</td>
<td>50 years</td>
<td>65 years</td>
<td>65 + 3d12 years</td>
</tr>
<tr>
<td>Merfolk</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Nagaji</td>
<td>60 years</td>
<td>90 years</td>
<td>120 years</td>
<td>120 + 3d20 years</td>
</tr>
<tr>
<td>Samsaran</td>
<td>150 years</td>
<td>200 years</td>
<td>250 years</td>
<td>250 + 6d% years</td>
</tr>
<tr>
<td>Strix</td>
<td>20 years</td>
<td>30 years</td>
<td>40 years</td>
<td>40 +1d20 years</td>
</tr>
<tr>
<td>Suli</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Svirfneblin</td>
<td>100 years</td>
<td>150 years</td>
<td>200 years</td>
<td>200 + 3d% years</td>
</tr>
<tr>
<td>Vanara</td>
<td>30 years</td>
<td>45 years</td>
<td>60 years</td>
<td>60 + 2d10 years</td>
</tr>
<tr>
<td>Vishkanya</td>
<td>35 years</td>
<td>53 years</td>
<td>70 years</td>
<td>70 + 2d20 years</td>
</tr>
<tr>
<td>Wayang</td>
<td>100 years</td>
<td>150 years</td>
<td>200 years</td>
<td>200 + 1d% years</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-age-label">Footnotes</h3>
<ol>
<li id="rule-age-I">
<p>Includes the barbarian, oracle, rogue, and sorcerer. <InnerLink id="backlink-rule-age-ref-I-1" data-hash-target to="rule-age-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="rule-age-S">
<p>Includes the bard, cavalier, fighter, gunslinger, paladin, ranger, summoner, and witch. <InnerLink id="backlink-rule-age-ref-S-1" data-hash-target to="rule-age-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="rule-age-T">
<p>Includes the alchemist, cleric, druid, inquisitor, magus, monk, and wizard. <InnerLink id="backlink-rule-age-ref-T-1" data-hash-target to="rule-age-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="rule-age-O">
<p>Classes not listed above have not officially been given a specific group. The following is a suggestion: classify Bloodrager, Kineticist and Spiritualist as Intuitive; place Arcanist, Investigator, Psychic, Shifter, and Warpriest in Trained; treat all others as Self-Trained. Consult your GM. <InnerLink id="backlink-rule-age-ref-O-1" data-hash-target to="rule-age-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="rule-age-E">
<p>Errata was published that changed how aasimars, tieflings and dhampirs aged, but it seems incomplete. Originally, these were very long-lived races. The errata changed aging effects (Table 7-2) to be the same as those of humans, and set the starting ages to 20, but the dice rolls were left unchanged. This means that even an average roll of 14 (4d6) for an Intutive class puts these races 1 year away from Middle Age, and the maximum 48 (8d6) for a Trained class leaves them two years from Venerable! Common house rules either use the human adjustments for these races, or modify both tables to be completely in line with either humans or half-elves. Consult your GM. <InnerLink id="backlink-rule-age-ref-E-1" data-hash-target to="rule-age-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-rule-age-ref-E-2" data-hash-target to="rule-age-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-age-ref-E-3" data-hash-target to="rule-age-ref-E-3" aria-label="Back to reference E-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="rule-age-1">
<p>At middle age, -1 to Str, Dex, and Con; +1 to Int, Wis, and Cha <InnerLink id="backlink-rule-age-ref-1-1" data-hash-target to="rule-age-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-age-2">
<p>At old age, -2 to Str, Dex, and Con; +1 to Int, Wis, and Cha <InnerLink id="backlink-rule-age-ref-2-1" data-hash-target to="rule-age-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-age-3">
<p>At venerable age, -3 to Str, Dex, and Con; +1 to Int, Wis, and Cha <InnerLink id="backlink-rule-age-ref-3-1" data-hash-target to="rule-age-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _height_and_weight = {title: "Height and Weight", parent_topics: ["basics","traits_and_other_details"], siblings: ["age","height_and_weight","traits","character_background"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 169</Link></p>
<p>To determine a character's height, roll the modifier dice indicated on Table 7-3 and add the result, in inches, to the base height for your character's race and gender. To determine a character's weight, multiply the result of the modifier dice by the weight multiplier and add the result to the base weight for your character's race and gender.</p>
<h3 id="rule-height_and_weight-table-7-3-random-height-and-weight">Table 7-3: Random Height and Weight</h3>
<ScrollContainer id="rule-height_and_weight--table-0"><table>
<thead>
<tr>
<th>Race</th>
<th>Base Height</th>
<th>Base Weight</th>
<th>Modifier</th>
<th>Weight Multiplier</th>
</tr>
</thead>
<tbody><tr>
<td>Human, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times; 5 lbs.</td>
</tr>
<tr>
<td>Human, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times; 5 lbs.</td>
</tr>
<tr>
<td>Dwarf, male</td>
<td>3 ft. 9 in.</td>
<td>150 lbs.</td>
<td>2d4</td>
<td>&times; 7 lbs.</td>
</tr>
<tr>
<td>Dwarf, female</td>
<td>3 ft. 7 in.</td>
<td>120 lbs.</td>
<td>2d4</td>
<td>&times; 7 lbs.</td>
</tr>
<tr>
<td>Elf, male</td>
<td>5 ft. 4 in.</td>
<td>100 lbs.</td>
<td>2d8</td>
<td>&times; 3 lbs.</td>
</tr>
<tr>
<td>Elf, female</td>
<td>5 ft. 4 in.</td>
<td>90 lbs.</td>
<td>2d6</td>
<td>&times; 3 lbs.</td>
</tr>
<tr>
<td>Gnome, male</td>
<td>3 ft. 0 in.</td>
<td>35 lbs.</td>
<td>2d4</td>
<td>&times; 1 lb.</td>
</tr>
<tr>
<td>Gnome, female</td>
<td>2 ft. 10 in.</td>
<td>30 lbs.</td>
<td>2d4</td>
<td>&times; 1 lb.</td>
</tr>
<tr>
<td>Half-elf, male</td>
<td>5 ft. 2 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times; 5 lbs.</td>
</tr>
<tr>
<td>Half-elf, female</td>
<td>5 ft. 0 in.</td>
<td>90 lbs.</td>
<td>2d8</td>
<td>&times; 5 lbs.</td>
</tr>
<tr>
<td>Half-orc, male</td>
<td>4 ft. 10 in.</td>
<td>150 lbs.</td>
<td>2d12</td>
<td>&times; 7 lbs.</td>
</tr>
<tr>
<td>Half-orc, female</td>
<td>4 ft. 5 in.</td>
<td>110 lbs.</td>
<td>2d12</td>
<td>&times; 7 lbs.</td>
</tr>
<tr>
<td>Halfling, male,</td>
<td>2 ft. 8 in.</td>
<td>30 lbs.</td>
<td>2d4</td>
<td>&times; 1 lb.</td>
</tr>
<tr>
<td>Halfling, female</td>
<td>2 ft. 6 in.</td>
<td>25 lbs.</td>
<td>2d4</td>
<td>&times; 1 lb.</td>
</tr>
<tr>
<td>Aasimar, male</td>
<td>5 ft. 2 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Aasimar, female</td>
<td>5 ft. 0 in.</td>
<td>90 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Catfolk, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Catfolk, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Dhampir, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Dhampir, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Drow, male</td>
<td>5 ft. 4 in.</td>
<td>90 lbs.</td>
<td>2d6</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Drow, female</td>
<td>5 ft. 4 in.</td>
<td>100 lbs.</td>
<td>2d8</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Fetchling, male</td>
<td>5 ft. 4 in.</td>
<td>90 lbs.</td>
<td>2d6</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Fetchling, female</td>
<td>5 ft. 2 in.</td>
<td>80 lbs.</td>
<td>2d6</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Goblin, male</td>
<td>2 ft. 8 in.</td>
<td>30 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Goblin, female</td>
<td>2 ft. 6 in.</td>
<td>25 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Hobgoblin, male</td>
<td>4 ft. 2 in.</td>
<td>165 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Hobgoblin, female</td>
<td>4 ft. 0 in.</td>
<td>145 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Ifrit, male</td>
<td>5 ft. 2 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Ifrit, female</td>
<td>5 ft. 0 in.</td>
<td>90 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Kobold, male</td>
<td>2 ft. 6 in.</td>
<td>25 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Kobold, female</td>
<td>2 ft. 4 in.</td>
<td>20 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Orc, male</td>
<td>5 ft. 1 in.</td>
<td>160 lbs.</td>
<td>2d12</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Orc, female</td>
<td>4 ft. 9 in.</td>
<td>120 lbs.</td>
<td>2d12</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Oread, male</td>
<td>4 ft. 0 in.</td>
<td>150 lbs.</td>
<td>2d6</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Oread, female</td>
<td>3 ft. 9 in.</td>
<td>120 lbs.</td>
<td>2d6</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Ratfolk, male</td>
<td>3 ft. 7 in.</td>
<td>65 lbs.</td>
<td>2d4</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Ratfolk, female</td>
<td>3 ft. 4 in.</td>
<td>50 lbs.</td>
<td>2d4</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Sylph, male</td>
<td>5 ft. 2 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Sylph, female</td>
<td>5 ft. 0 in.</td>
<td>90 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Tengu, male</td>
<td>4 ft. 0 in.</td>
<td>65 lbs.</td>
<td>2d6</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Tengu, female</td>
<td>3 ft. 10 in.</td>
<td>55 lbs.</td>
<td>2d6</td>
<td>&times;3 lbs.</td>
</tr>
<tr>
<td>Tiefling, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Tiefling, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Undine, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Undine, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Changeling, female</td>
<td>5 ft. 2 in.</td>
<td>85 lbs.</td>
<td>2d4</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Duergar, male</td>
<td>3 ft. 9 in.</td>
<td>150 lbs.</td>
<td>2d4</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Duergar, female</td>
<td>3 ft. 7 in.</td>
<td>120 lbs.</td>
<td>2d4</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Gillman, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Gillman, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Grippli, male</td>
<td>1 ft. 7 in.</td>
<td>25 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Grippli, female</td>
<td>1 ft. 5 in.</td>
<td>20 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Kitsune, male</td>
<td>4 ft. 10 in.</td>
<td>100 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Kitsune, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Merfolk, male</td>
<td>5 ft. 10 in.</td>
<td>145 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Merfolk, female</td>
<td>5 ft. 8 in.</td>
<td>135 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Nagaji, male</td>
<td>5 ft. 9 in.</td>
<td>180 lbs.</td>
<td>2d10</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Nagaji, female</td>
<td>5 ft. 6 in.</td>
<td>160 lbs.</td>
<td>2d10</td>
<td>&times;7 lbs.</td>
</tr>
<tr>
<td>Samsaran, male</td>
<td>5 ft. 4 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Samsaran, female</td>
<td>5 ft. 6 in.</td>
<td>110 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Strix, male</td>
<td>5 ft. 4 in.</td>
<td>125 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Strix, female</td>
<td>5 ft. 2 in.</td>
<td>115 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Suli, male</td>
<td>4 ft. 10 in.</td>
<td>120 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Suli, female</td>
<td>4 ft. 5 in.</td>
<td>85 lbs.</td>
<td>2d10</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Svirfneblin, male</td>
<td>3 ft. 0 in.</td>
<td>35 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Svirfneblin, female</td>
<td>2 ft. 10 in.</td>
<td>30 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Vanara, male</td>
<td>4 ft. 8 in.</td>
<td>105 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Vanara, female</td>
<td>4 ft. 2 in.</td>
<td>90 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Vishkanya, male</td>
<td>5 ft. 3 in.</td>
<td>85 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Vishkanya, female</td>
<td>5 ft. 1 in.</td>
<td>75 lbs.</td>
<td>2d8</td>
<td>&times;5 lbs.</td>
</tr>
<tr>
<td>Wayang, male</td>
<td>3 ft. 0 in.</td>
<td>35 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
<tr>
<td>Wayang, female</td>
<td>2 ft. 10 in.</td>
<td>30 lbs.</td>
<td>2d4</td>
<td>&times;1 lb.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _traits = {title: "Traits", parent_topics: ["basics","traits_and_other_details"], siblings: ["age","height_and_weight","traits","character_background"], subtopics: ["gaining_traits","types_of_traits","restrictions_on_trait_selection"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 326</Link></p>
<p>Character traits are abilities that are not tied to your character's race or class. They can enhance your character's skills, racial abilities, class abilities, or other statistics, enabling you to further customize him. At its core, a character trait is approximately equal in power to half a feat, so two character traits are roughly equivalent to a bonus feat. Yet a character trait isn't just another kind of power you can add on to your character - it's a way to quantify (and encourage) building a character background that fits into your campaign world. Think of character traits as "story seeds" for your background; after you pick your two traits, you'll have a point of inspiration from which to build your character's personality and history. Alternatively, if you've already got a background in your head or written down for your character, you can view picking his traits as a way to quantify that background, just as picking race and class and ability scores quantifies his other strengths and weaknesses.</p>
<p>Many traits grant a new type of bonus: a "trait" bonus. Trait bonuses do not stack - they're intended to give player characters a slight edge, not a secret backdoor way to focus all of a character's traits on one type of bonus and thus gain an unseemly advantage. It's certainly possible, for example, that somewhere down the line, a "Courageous" trait might be on the list of dwarf race traits, but just because this trait is on both the dwarf race traits list and the basic combat traits list doesn't mean you're any more brave if you choose both versions than if you choose only one.</p>
<p>Character traits are only for player characters. If you want an NPC to have traits, that NPC must "buy" them with the <Link to="/feat/additional_traits">Additional Traits</Link> feat. Player characters are special; they're the stars of the game, after all, and it makes sense that they have an advantage over the NPCs of the world in this way.</p>
<p>The master list of traits can be found <Link to="/main/traits">here</Link>.</p>
</>};
const _gaining_traits = {title: "Gaining Traits", parent_topics: ["basics","traits_and_other_details","traits"], siblings: ["gaining_traits","types_of_traits","restrictions_on_trait_selection"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 326</Link></p>
<p>When you create your character for a campaign, ask your GM how many traits you can select. In most cases, a new PC should gain two traits, effectively gaining what amounts to a bonus feat at character creation. Some GMs may wish to adjust this number somewhat, depending upon their style of play; you may only be able to pick one trait, or your GM might allow three or more. Even if your GM normally doesn't allow bonus traits, you might still be able to pick up some with the <Link to="/feat/additional_traits">Additional Traits</Link> feat.</p>
</>};
const _types_of_traits = {title: "Types of Traits", parent_topics: ["basics","traits_and_other_details","traits"], siblings: ["gaining_traits","types_of_traits","restrictions_on_trait_selection"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 326</Link></p>
<p>There are five original types of character traits to choose from: basic (split among four categories: Combat, Faith, Magic, and Social), campaign, race, regional, and religion.</p>
<p><strong className="hl">Basic Traits:</strong> The original traits were split among the categories of <Link to="/main/traits_combat">Combat</Link>, <Link to="/main/traits_faith">Faith</Link>, <Link to="/main/traits_magic">Magic</Link>, and <Link to="/main/traits_social">Social</Link>. Each of these four categories roughly equates to the four modes of adventuring, but aren't tied to specific classes. It's perfectly possible to have a religious rogue, for example, or a magic-obsessed fighter. Basic traits are "generic," and should be able to fit into any campaign setting with a minimum of customization.</p>
<p><strong className="hl">Campaign Traits:</strong> These traits are specifically tailored to give new characters an instant hook into a new campaign. <Link to="/main/traits_campaign">Campaign traits</Link> tailored to a specific Pathfinder Adventure Path can always be found in that Adventure Path's Player's Guide. When playing an adventure path, a PC will usually be required to take a campaign trait as one of their two traits.</p>
<p><strong className="hl">Race Traits:</strong> <Link to="/main/traits_race">Race traits</Link> are keyed to specific races or ethnicities, which your character must belong to in order to select the trait. If your race or ethnicity changes at some later point (perhaps as a result of polymorph magic or a <Link to="/spell/reincarnate">reincarnate</Link> spell), the benefits gained by your race trait persist; only if your mind and memories change as well do you lose the benefits of a race trait.</p>
<p><strong className="hl">Regional Traits:</strong> <Link to="/main/traits_regional">Regional traits</Link> are keyed to specific regions, be they large (such as a nation or geographic region) or small (such as a city or a specific mountain). In order to select a regional trait, your PC must have spent at least a year living in that region. At 1st level, you can only select one regional trait (typically the one tied to your character's place of birth or homeland), despite the number of regions you might wish to write into your character's background.</p>
<p><strong className="hl">Religion Traits:</strong> <Link to="/main/traits_religion">Religion traits</Link> indicate that your character has an established faith in a specific deity; you need not be a member of a class that can wield divine magic to pick a religion trait, but you do have to have a patron deity and have some amount of religion in your background to justify this trait. Unlike the other categories of traits, religion traits can go away if you abandon your religion, as detailed under <Link to="/rule/restrictions_on_trait_selection">Restrictions on Trait Selection</Link>.</p>
<p><strong className="hl">Drawbacks:</strong> <Link to="/main/traits_drawback">Drawbacks</Link> are traits in reverse. Instead of granting you a boon, they grant you a negative effect, typically in particular circumstances. If you choose to take a drawback, you get to offset this penalty by selecting an additional trait (following the same <Link to="/rule/restrictions_on_trait_selection">restrictions</Link> on trait selections). For example, you can take a campaign trait and a magic trait, then take a drawback and a combat trait, for a total of three traits and one drawback.</p>
<h3 id="rule-types_of_traits-other-types-of-traits">Other Types of Traits</h3>
<p>Other types of traits exist, introduced in various supplemental sources.</p>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory</Link><br/><strong className="hl">Equipment Traits:</strong> Many adventurers come to rely on certain gear to the extent that the equipment and the adventurer each become something more when the other is present. The symbiosis between adventurers and their gear is varied and complex. <Link to="/main/traits_equipment">Equipment traits</Link> are keyed to specific types of equipment. They represent an unusual knack for a particular kind of equipment (such as splash weapons) or for a specific item (such as a family heirloom sword).</p>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link><br/><strong className="hl">Mount Traits:</strong> Each of these <Link to="/main/traits_mount">mount traits</Link> detail a specific breed of riding animal and grant an additional boon to the mount or its rider. The trait granted to a mount counts against a character's total maximum number of traits. If a character replaces his mount, he effectively loses the old trait and gains the new mount's trait.</p>
<p><strong>Sources</strong> <Link to="/source/occult_mysteries">Occult Mysteries</Link><br/><strong className="hl">Cosmic Traits:</strong> In Avistan and Garund, <Link to="/rule/the_cosmic_caravan">the Cosmic Caravan</Link> is the astrological tool of choice for most diviners. Though some cultures grant the Caravan religious connotations, it is an inherently secular system, available for use by characters of all cultures, alignments, and faiths. Players who know their characters' birth dates could incorporate the appropriate <Link to="/main/traits_cosmic">cosmic traits</Link>.</p>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions</Link><br/><strong className="hl">Family Traits:</strong> This <Link to="/main/traits_family">trait type</Link> allows you to inject a mechanical edge into the dynamics of your family. Unlike other trait types, <strong>you are not limited to a single family trait per character.</strong> Many of these traits work only on a member of your family, or require another character with the same trait to be nearby for the benefits to apply. For a character to count as having the same trait, they must be your family member. At the GM's discretion, the "family" for some of these traits could in fact be another group with strong interpersonal ties and common interests, such as a martial arts school, army unit, mutual protection society, or criminal gang. In this case, however, they become Social traits, which limits the character to one trait.</p>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends</Link><br/><strong className="hl">Exemplar Traits:</strong> A character can have only one <Link to="/main/traits_exemplar">exemplar trait</Link>, and selecting an exemplar trait takes the place of two regular traits. Each exemplar trait is tied to a trait category, such as combat traits or regional traits; a character with an exemplar trait is no longer restricted to a single trait of that category and can select any number of such traits when gaining further traits. In addition, a character with an exemplar trait can select the <Link to="/feat/additional_traits">Additional Traits</Link> feat any number of times and use the feat to gain an exemplar trait of a valid trait category for which she qualifies.</p>
</>};
const _restrictions_on_trait_selection = {title: "Restrictions on Trait Selection", parent_topics: ["basics","traits_and_other_details","traits"], siblings: ["gaining_traits","types_of_traits","restrictions_on_trait_selection"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 326</Link></p>
<p>There are a few rules governing trait selection. To begin with, your GM controls how many bonus traits a PC begins with; the default assumption is two traits. When selecting traits, you may not select more than one from the same list of traits (the four basic traits each count as a separate list for this purpose). Certain types of traits may have additional requirements, as detailed in the section above.</p>
<p>Remember also that traits are intended to model events that were formative in your character's development, either events from before he became an adventurer, or (in the case of additional traits gained via the <Link to="/feat/additional_traits">Additional Traits</Link> feat) ones that happened while adventuring. Even if your character becomes a hermit and abandons society, he'll still retain his legacy of growing up an aristocrat if he took the relevant social trait. The one exception to this is religion traits - since these traits require continued faith in a specific deity, your character can indeed lose the benefits of these traits if he switches religions. In this case, consult your GM for your options. She may simply rule that your character loses that trait, or she might allow him to pick a new religion trait tied to his new deity. Another option is that if your character abandons a religion, he loses the associated religion trait until he gains an experience level, at which point he may replace a lost religion trait with a basic faith trait.</p>
</>};
const _character_advancement = {title: "Character Advancement", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["advancing_your_character","multiclassing","favored_class"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 30</Link></p>
<p>As player characters overcome challenges, they gain experience points. As these points accumulate, PCs advance in level and power. The rate of this advancement depends on the type of game that your group wants to play. Some prefer a fast-paced game, where characters gain levels every few sessions, while others prefer a game where advancement occurs less frequently. In the end, it is up to your group to decide what rate fits you best. Characters advance in level according to Table 3-1.</p>
<h3 id="rule-character_advancement-table-3-1-character-advancement-and-level-dependent-bonuses">Table 3-1: Character Advancement and Level-Dependent Bonuses</h3>
<ScrollContainer id="rule-character_advancement--table-0"><table>
<thead>
<tr>
<th>Character Level</th>
<th>Slow</th>
<th>Medium</th>
<th>Fast</th>
<th>Feats</th>
<th>Ability Score</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>1st</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>3,000</td>
<td>2,000</td>
<td>1,300</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>7,500</td>
<td>5,000</td>
<td>3,300</td>
<td>2nd</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>14,000</td>
<td>9,000</td>
<td>6,000</td>
<td>-</td>
<td>1st</td>
</tr>
<tr>
<td>5th</td>
<td>23,000</td>
<td>15,000</td>
<td>10,000</td>
<td>3rd</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>35,000</td>
<td>23,000</td>
<td>15,000</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>53,000</td>
<td>35,000</td>
<td>23,000</td>
<td>4th</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>77,000</td>
<td>51,000</td>
<td>34,000</td>
<td>-</td>
<td>2nd</td>
</tr>
<tr>
<td>9th</td>
<td>115,000</td>
<td>75,000</td>
<td>50,000</td>
<td>5th</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>160,000</td>
<td>105,000</td>
<td>71,000</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>235,000</td>
<td>155,000</td>
<td>105,000</td>
<td>6th</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>330,000</td>
<td>220,000</td>
<td>145,000</td>
<td>-</td>
<td>3rd</td>
</tr>
<tr>
<td>13th</td>
<td>475,000</td>
<td>315,000</td>
<td>210,000</td>
<td>7th</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>665,000</td>
<td>445,000</td>
<td>295,000</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>955,000</td>
<td>635,000</td>
<td>425,000</td>
<td>8th</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>1,135,000</td>
<td>890,000</td>
<td>600,000</td>
<td>-</td>
<td>4th</td>
</tr>
<tr>
<td>17th</td>
<td>1,900,000</td>
<td>1,300,000</td>
<td>850,000</td>
<td>9th</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>2,700,000</td>
<td>1,800,000</td>
<td>1,200,000</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>3,850,000</td>
<td>2,550,000</td>
<td>1,700,000</td>
<td>10th</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>5,350,000</td>
<td>3,600,000</td>
<td>2,400,000</td>
<td>-</td>
<td>5th</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _advancing_your_character = {title: "Advancing Your Character", parent_topics: ["basics","character_advancement"], siblings: ["advancing_your_character","multiclassing","favored_class"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 30</Link></p>
<p>A character advances in level as soon as he earns enough experience points to do so - typically, this occurs at the end of a game session, when your GM hands out that session's experience point awards.</p>
<p>The process of advancing a character works in much the same way as generating a character, except that your ability scores, race, and previous choices concerning class, skills, and feats cannot be changed. Adding a level generally gives you new abilities, additional skill points to spend, more hit points, possibly a permanent +1 increase to one ability score of your choice, or an additional feat (see <Link to="/rule/character_advancement">Table 3-1</Link>). Over time, as your character rises to higher levels, he becomes a truly powerful force in the game world, capable of ruling nations or bringing them to their knees.</p>
<p>When adding new levels of an existing class or adding levels of a new class (see <Link to="/rule/multiclassing">Multiclassing</Link>), make sure to take the following steps in order. First, select your new class level. You must be able to qualify for this level before any of the following adjustments are made. Second, apply any ability score increases due to gaining a level. Third, integrate all of the level's class abilities and then roll for additional hit points. Finally, add new skills and feats. For more information on when you gain new feats and ability score increases, see Table 3-1.</p>
</>};
const _multiclassing = {title: "Multiclassing", parent_topics: ["basics","character_advancement"], siblings: ["advancing_your_character","multiclassing","favored_class"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 30</Link></p>
<p>Instead of gaining the abilities granted by the next level in your character's current class, he can instead gain the 1st-level abilities of a new class, adding all of those abilities to his existing ones. This is known as "multiclassing."</p>
<p>For example, let's say a 5th-level fighter decides to dabble in the arcane arts, and adds one level of wizard when he advances to 6th level. Such a character would have the powers and abilities of both a 5th-level fighter and a 1st-level wizard, but would still be considered a 6th-level character. (His class levels would be 5th and 1st, but his total character level is 6th.) He keeps all of his bonus feats gained from 5 levels of fighter, but can now also cast 1st-level spells and picks an arcane school. He adds all of the hit points, base attack bonuses, and saving throw bonuses from a 1st-level wizard on top of those gained from being a 5th-level fighter.</p>
<p>Note that there are a number of effects and prerequisites that rely on a character's level or Hit Dice. Such effects are always based on the total number of levels or Hit Dice a character possesses, not just those from one class. The exception to this is class abilities, most of which are based on the total number of class levels that a character possesses of that particular class.</p>
</>};
const _favored_class = {title: "Favored Class", parent_topics: ["basics","character_advancement"], siblings: ["advancing_your_character","multiclassing","favored_class"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 31</Link></p>
<p>Each character begins play with a single favored class of his choosing - typically, this is the same class as the one he chooses at 1st level. Whenever a character gains a level in his favored class, he receives either + 1 hit point or + 1 skill rank. The choice of favored class cannot be changed once the character is created, and the choice of gaining a hit point or a skill rank each time a character gains a level (including his first level) cannot be changed once made for a particular level. <Link to="/rule/prestige_classes">Prestige classes</Link> can never be a favored class.</p>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 8</Link></p>
<p>The final section for each racial description describes alternative benefits for members of that race taking certain classes as a favored class. The normal benefit of having a favored class is simple and effective: your character gains one extra hit point or one extra skill rank each time she gains a level in that class (or in either of two classes, if she is a half-elf). The alternate favored class abilities listed may not have as broad an appeal as the standard choices. They are designed to reflect flavorful options that might be less useful in general but prove handy in the right situations or for a character with the right focus. Most of them play off racial archetypes, like a half-orc's toughness and proclivity for breaking things or elven grace and finesse.</p>
<p>In most cases, these benefits are gained on a level-by-level basis: your character gains the specified incremental benefit each time she gains a level. Unless otherwise noted, these benefits always stack with themselves. For example, a human with paladin as a favored class may choose to gain 1 point of energy resistance each time she gains a level; choosing this benefit twice increases this resistance bonus to 2, 10 times raises it to 10, and so on.</p>
<p>In some cases this benefit may eventually hit a fixed numerical limit, after which selecting that favored class benefit has no effect. Of course, you can still select the bonus hit point or skill rank as your favored class benefit, so there is always a reward for sticking with a favored class.</p>
<p>Finally, some of these alternate favored class benefits only add +1/2, +1/3, +1/4, or +1/6 to a roll (rather than +1) each time the benefit is selected; when applying this result to the die roll, round down (minimum 0). For example, a dwarf with rogue as his favored class adds +1/2 to his trap sense ability regarding stone traps each time he selects the alternate rogue favored class benefit; though this means the net effect is +0 after selecting it once (because +1/2 rounds down to +0), after 20 levels this benefit gives the dwarf a +10 bonus to his trap sense (in addition to the base value from being a 20th-level rogue).</p>
<p>In summary, these are sets of alternative benefits that characters of each race may choose instead of the normal benefits for their favored class. Thus, rather than taking an extra hit point or an extra skill rank, players may choose for their characters to gain the benefit listed here. This is not a permanent or irrevocable choice; just as characters could alternate between taking skill ranks and hit points when they gain levels in their favored class, these benefits provide a third option, and characters may freely alternate between them.</p>
<p>As with any alternate or optional rule, consult with your GM to determine whether exchanging normal favored class benefits will be allowed.</p>
</>};
const _alignment = {title: "Alignment", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["the_nine_alignments","changing_alignments"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 166</Link></p>
<p>A creature's general moral and personal attitudes are represented by its alignment: lawful good, neutral good, chaotic good, lawful neutral, neutral, chaotic neutral, lawful evil, neutral evil, or chaotic evil.</p>
<p>Alignment is a tool for developing your character's identity - it is not a straitjacket for restricting your character. Each alignment represents a broad range of personality types or personal philosophies, so two characters of the same alignment can still be quite different from each other. In addition, few people are completely consistent.</p>
<p>All creatures have an alignment. Alignment determines the effectiveness of some spells and magic items.</p>
<p>Animals and other creatures incapable of moral action are neutral. Even deadly vipers and tigers that eat people are neutral because they lack the capacity for morally right or wrong behavior. Dogs may be obedient and cats free-spirited, but they do not have the moral capacity to be truly lawful or chaotic.</p>
<h3 id="rule-alignment-good-versus-evil">Good Versus Evil</h3>
<p>Good characters and creatures protect innocent life. Evil characters and creatures debase or destroy innocent life, whether for fun or profit.</p>
<p>Good implies altruism, respect for life, and a concern for the dignity of sentient beings. Good characters make personal sacrifices to help others.</p>
<p>Evil implies hurting, oppressing, and killing others. Some evil creatures simply have no compassion for others and kill without qualms if doing so is convenient. Others actively pursue evil, killing for sport or out of duty to some evil deity or master.</p>
<p>People who are neutral with respect to good and evil have compunctions against killing the innocent, but may lack the commitment to make sacrifices to protect or help others.</p>
<h3 id="rule-alignment-law-versus-chaos">Law Versus Chaos</h3>
<p>Lawful characters tell the truth, keep their word, respect authority, honor tradition, and judge those who fall short of their duties. Chaotic characters follow their consciences, resent being told what to do, favor new ideas over tradition, and do what they promise if they feel like it.</p>
<p>Law implies honor, trustworthiness, obedience to authority, and reliability. On the downside, lawfulness can include closed-mindedness, reactionary adherence to tradition, self-righteousness, and a lack of adaptability. Those who consciously promote lawfulness say that only lawful behavior creates a society in which people can depend on each other and make the right decisions in full confidence that others will act as they should.</p>
<p>Chaos implies freedom, adaptability, and flexibility. On the downside, chaos can include recklessness, resentment toward legitimate authority, arbitrary actions, and irresponsibility. Those who promote chaotic behavior say that only unfettered personal freedom allows people to express themselves fully and lets society benefit from the potential that its individuals have within them.</p>
<p>Someone who is neutral with respect to law and chaos has some respect for authority and feels neither a compulsion to obey nor a compulsion to rebel. She is generally honest, but can be tempted into lying or deceiving others.</p>
<h3 id="rule-alignment-alignment-steps">Alignment Steps</h3>
<p>Occasionally the rules refer to "steps" when dealing with alignment. In this case, "steps" refers to the number of alignment shifts between the two alignments, as shown on the following table. Note that diagonal "steps" count as two steps. For example, a lawful neutral character is one step away from a lawful good alignment, and three steps away from a chaotic evil alignment. A cleric's alignment must be within one step of the alignment of her deity.</p>
<ScrollContainer id="rule-alignment--table-0"><table>
<thead>
<tr>
<th></th>
<th>Lawful</th>
<th>Neutral</th>
<th>Chaotic</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Good</strong></td>
<td>Lawful Good</td>
<td>Neutral Good</td>
<td>Chaotic Good</td>
</tr>
<tr>
<td><strong>Neutral</strong></td>
<td>Lawful Neutral</td>
<td>Neutral</td>
<td>Chaotic Neutral</td>
</tr>
<tr>
<td><strong>Evil</strong></td>
<td>Lawful Evil</td>
<td>Neutral Evil</td>
<td>Chaotic Evil</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _the_nine_alignments = {title: "The Nine Alignments", parent_topics: ["basics","alignment"], siblings: ["the_nine_alignments","changing_alignments"], subtopics: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 166</Link>, <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 134</Link></p>
<p>Nine distinct alignments define the possible combinations of the lawful-chaotic axis with the good-evil axis. Each description below depicts a typical character of that alignment. Remember that individuals vary from this norm, and that a given character may act more or less in accord with his alignment from day to day. Use these descriptions as guidelines, not as scripts.</p>
<p>The first six alignments, lawful good through chaotic neutral, are standard alignments for player characters. The three evil alignments are usually for monsters and villains. With the GM's permission, a player may assign an evil alignment to his PC, but such characters are often a source of disruption and conflict with good and neutral party members. GMs are encouraged to carefully consider how evil PCs might affect the campaign before allowing them.</p>
<h3 id="rule-the_nine_alignments-choosing-an-alignment">Choosing an Alignment</h3>
<p>Alignment is a curious creature; it summarizes the philosophy and morality of a person, and yet no two characters with the same alignment are exactly alike. Still, alignment says much about a character's soul and the way she interacts with others.</p>
<p>Each alignment has a list of philosophies or doctrines that characters may follow, together with a list of core concepts to bear in mind while playing a character of a given alignment. You could decide that one word is particularly crucial to your character, be that justice, greed, or self. You'll find that some of these words appear in more than one alignment. To one person, "freedom" may mean freedom for herself and others, while to another, it may mean freedom to take what she wants.</p>
<p>When thinking of alignments, use a simple test: <strong>How would the character treat a stranger in trouble?</strong> A chaotic good person who sees a stranger being robbed would rush to his aid: a person in distress needs help. A lawful good character would move to take over the situation and see justice done. A neutral character might stand back and watch developments, acting as she sees fit on this occasion, and perhaps acting differently the next time. A chaotic evil character would join in, and perhaps try to rob both the victim and the robbers. A lawful evil character would hang back, waiting for the fight to end, and then take advantage for his own gain or that of his god or cult.</p>
<h3 id="rule-the_nine_alignments-the-alignments">The Alignments</h3>
<p><strong className="hl">Lawful Good</strong> combines honor with compassion.</p>
<p><strong className="hl">Neutral Good</strong> means doing what is good and right without bias for or against order.</p>
<p><strong className="hl">Chaotic Good</strong> combines a good heart with a free spirit.</p>
<p><strong className="hl">Lawful Neutral</strong> means you are reliable and honorable without being a zealot.</p>
<p><strong className="hl">Neutral</strong> means you act naturally in any situation, without prejudice or compulsion.</p>
<p><strong className="hl">Chaotic Neutral</strong> represents freedom from both society's restrictions and a do-gooder's zeal.</p>
<p><strong className="hl">Lawful Evil</strong> represents methodical, intentional, and organized evil.</p>
<p><strong className="hl">Neutral Evil</strong> represents pure evil without honor and without variation.</p>
<p><strong className="hl">Chaotic Evil</strong> represents the destruction not only of beauty and life, but also of the order on which beauty and life depend.</p>
</>};
const _lawful_good = {title: "Lawful Good", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 134</Link></p>
<p>Justice is all. Honor is my armor. He who commits a crime will pay. Without law and truth, there is only chaos. I am the light, I am the sword of righteousness. My enemy shall pay in the end. Right is might. My soul is pure. My word is truth.</p>
<p><strong className="hl">Core Concepts:</strong> Duty, fairness, honor, property, responsibility, right, truth, virtue, worthiness</p>
<p>A lawful good character believes in honor. A code or faith that she has unshakable belief in likely guides her. She would rather die than betray that faith, and the most extreme followers of this alignment are willing (sometimes even happy) to become martyrs.</p>
<p>A lawful good character at the extreme end of the lawful-chaotic spectrum can seem pitiless. She may become obsessive about delivering justice, thinking nothing of dedicating herself to chasing a wicked dragon across the world or pursuing a devil into Hell. She can come across as a taskmaster, bent upon her aims without swerving, and may see others who are less committed as weak. Though she may seem austere, even harsh, she is always consistent, working from her doctrine or faith. Hers is a world of order, and she obeys superiors and finds it almost impossible to believe there's any bad in them. She may be more easily duped by such imposters, but in the end she will see justice is done - by her own hand if necessary.</p>
</>};
const _neutral_good = {title: "Neutral Good", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 135</Link></p>
<p>Do the best I can. See the good in everyone. Help others. Work toward the greater good. My soul is good, regardless of how I look. Never judge a book by its cover. Devotion to the goodness in life does not require approval. Charity begins at home. Be kind.</p>
<p><strong className="hl">Core Concepts:</strong> Benevolence, charity, considerateness, goodness, humaneness, kindness, reason, right</p>
<p>A neutral good character is good, but not shackled by order. He sees good where he can, but knows evil can exist even in the most ordered place.</p>
<p>A neutral good character does anything he can, and works with anyone he can, for the greater good. Such a character is devoted to being good, and works in any way he can to achieve it. He may forgive an evil person if he thinks that person has reformed, and he believes that in everyone there is a little bit of good.</p>
</>};
const _chaotic_good = {title: "Chaotic Good", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 135</Link></p>
<p>My soul is good, but free. Laws have no conscience. Blind order promotes disorder. Goodness cannot be learned just from a book of prayer. Compassion does not wear a uniform. The smallest act of kindness is never wasted. Repay kindness with kindness. Be kind to someone in trouble; it may be you who needs kindness the next day.</p>
<p><strong className="hl">Core Concepts:</strong> Benevolence, charity, freedom, joy, kindness, mercy, warmth</p>
<p>A chaotic good character cherishes freedom and the right to make her own way. She might have her own ethics and philosophy, but is not rigidly held by them. She may try to do good each day, perhaps being kind to a stranger or giving money to those less fortunate, but does so purely out of joy. Such a character makes up her own mind up about what is good and right based upon truth and facts, but does not fool herself that evil acts are good. Her goodness is benevolent - perhaps occasionally blind, but always well meant.</p>
<p>A chaotic good character can seem unpredictable, giving alms to an unfortunate outside a church but refusing to make a donation within. She trusts her instincts and could put more stock in the words of a beggar with kind eyes than the teachings of a harsh-looking bishop. She might rob from the rich and give to the poor, or spend lavishly for her own joy and that of her friends. In extreme cases, a chaotic good character may seem reckless in her benevolence.</p>
</>};
const _lawful_neutral = {title: "Lawful Neutral", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 135</Link></p>
<p>Order begets order. My word is my bond. Chaos will destroy the world. Respect rank. I live by my code and I'll die by my code. Tradition must continue. Order is the foundation of all culture. I am my own judge.</p>
<p><strong className="hl">Core Concepts:</strong> Harmony, loyalty, order, organization, rank, rule, system, tradition, word</p>
<p>A lawful neutral character admires order and tradition, or seeks to live by a code. He might fear chaos and disorder, and perhaps have good reason to do so from past experience. A lawful neutral person is not as concerned about who rules him so much as how secure he and his compatriots are, and finds great solace in the normality of society. Such a character may admire the strongest of leaders and punishments if they keep order, and he may support wars against other nations even if his own country is a brutal invader - his only concern is the rightness of the military action.</p>
<p>A lawful neutral character who follows his own code never breaks it willingly, and may become a martyr to defend it.</p>
</>};
const _neutral = {title: "Neutral", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 135</Link></p>
<p>Our whims and desires are irrelevant, compared to the turning wheel of the world. I am who I am. Trust no one but your friends and family. The wheel turns in spite of us. Systems come and go. All empires fade. Time is a healer. The seasons never change. The sun does not care what it rises over.</p>
<p><strong className="hl">Core Concepts:</strong> Balance, cycles, equality, harmony, impartiality, inevitability, nature, seasons</p>
<p>A neutral character is unusual in that she may have one of two distinct philosophies: she may be a person who is neutral because of distrust or apathy toward others, or one who wishes to have a truly neutral stance in the world and rejects extremism.</p>
<p>A neutral character could seem selfish or disinterested. She might be driven primarily by an acceptance of fate, and the most extreme followers of this alignment become hermits, hiding from the zealots of the world. Some neutral characters, however, strive openly for neutrality, and shun any act that veers too extremely toward any alignment. This type of neutral character prides herself on navigating her way between law and chaos, evil and good. She may have a fatalistic view in the face of nature and the fundamental power of night and day.</p>
</>};
const _chaotic_neutral = {title: "Chaotic Neutral", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 136</Link></p>
<p>A rolling stone gathers no moss. There is only today. Be like the wind and be taken wherever fate sees fit. He who fights fate courts folly. You only live once. Power to those who do not wish for power. Avoid anything in a uniform. Challenge the old orders.</p>
<p><strong className="hl">Core Concepts:</strong> Capriciousness, fate, freedom, individuality, liberty, self-possession, unpredictability</p>
<p>A chaotic neutral character values his own freedom and ability to make choices. He avoids authority and does not fear standing out or appearing different. In extreme cases, he may embrace a lifestyle entirely suited to himself - living in a cave near a city, becoming an artist, or otherwise challenging traditions. He never accepts anything at face value and makes up his own mind rather than blindly accepting what others tell him to do or think.</p>
</>};
const _lawful_evil = {title: "Lawful Evil", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 136</Link></p>
<p>One day, I will rule. A strong leader is admired, a weak leader overthrown. I have principles and I am right. Chaos brings death. In this world there is only order or oblivion. Rank must be respected and feared. The weak will follow sure leaders. Sin is satisfaction. Everyone has vices.</p>
<p><strong className="hl">Core Concepts:</strong> Calculation, discipline, malevolence, might, punishment, rationality, subjugation, terror</p>
<p>A lawful evil character goes about her business motivated by her own interests, but knows that ultimately order protects her. She seeks to achieve her own ends, but through order, not chaos. Even when boiling with anger, she is more likely to carefully plot vengeance than risk her own death through hasty actions. Sometimes that revenge will take years to happen, and that is acceptable.</p>
<p>A lawful evil character at the extreme end of the spectrum is zealous in her aims and will make any sacrifice to achieve them. Her twisted philosophy can make her paranoid of her closest followers, even family and friends. She stops at nothing to gain control, for only through control can she have peace. Yet even the most powerful and ordered society has its enemies, and to a lawful evil character only the destruction of those enemies can bring fulfillment.</p>
<p>Order is everything, at any cost.</p>
</>};
const _neutral_evil = {title: "Neutral Evil", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 136</Link></p>
<p>I am the most important thing in creation. Do what you want, but never get caught. Conscience is for angels. Evil for evil's sake. Vice is its own reward. The sinner enjoys his life. Evil is just a word. Others envy my freedom and life without conscience.</p>
<p><strong className="hl">Core Concepts:</strong> Desire, immorality, need, selfishness, sin, vice, viciousness, vileness, wickedness</p>
<p>Motivated by his own needs and wants, a neutral evil character is without conscience, acting only for self-gratification. He might surround himself with the trappings of cults and evil, but does so purely because it brings him closer to sin and wickedness. While a lawful evil person is inclined to bargain and a chaotic evil one to lash out, a neutral evil person is inclined only to look out for himself. In many ways, he epitomizes evil, since he has no clear loyalty to anything except absolute self-interest.</p>
<p>An extremist neutral evil character tends to be a loner, since he has either betrayed or slain those who came close to knowing him.</p>
</>};
const _chaotic_evil = {title: "Chaotic Evil", parent_topics: ["basics","alignment","the_nine_alignments"], siblings: ["lawful_good","neutral_good","chaotic_good","lawful_neutral","neutral","chaotic_neutral","lawful_evil","neutral_evil","chaotic_evil"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 136</Link></p>
<p>If I want something, I take it. Might is right. The strong rule the weak. Respect me or suffer. Fear me. There is only today, and today I take what I need. Anger brings out the best in me. I am the stronger one.</p>
<p><strong className="hl">Core Concepts:</strong> Anarchy, anger, amorality, brutality, chaos, degeneracy, freedom, profaneness, violence</p>
<p>A chaotic evil character is driven entirely by her own anger and needs. She is thoughtless in her actions and acts on whims, regardless of the suffering it causes others.</p>
<p>In many ways, a chaotic evil character is pinned down by her inherent nature to be unpredictable. She is like a spreading fire, a coming storm, an untested sword blade. An extreme chaotic evil character tends to find similarly minded individuals to be with - not out of any need for company, but because there is a familiarity in this chaos, and she relishes the opportunity to be true to her nature with others who share that delight.</p>
</>};
const _changing_alignments = {title: "Changing Alignments", parent_topics: ["basics","alignment"], siblings: ["the_nine_alignments","changing_alignments"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 168</Link></p>
<p>Alignment is a tool, a convenient shorthand you can use to summarize the general attitude of an NPC, region, religion, organization, monster, or even magic item.</p>
<p>Certain character classes list repercussions for those who don't adhere to a specific alignment, and some spells and magic items have different effects on targets depending on alignment, but beyond that it's generally not necessary to worry too much about whether someone is behaving differently from his stated alignment. In the end, the Game Master is the one who gets to decide if something's in accordance with its indicated alignment, based on the descriptions given previously and his own opinion and interpretation; the only thing the GM needs to strive for is to be consistent as to what constitutes the difference between alignments like chaotic neutral and chaotic evil. There's no hard and fast mechanic by which you can measure alignment; unlike hit points or skill ranks or Armor Class, alignment is solely a label the GM controls.</p>
<p>It's best to let players play their characters as they want. If a player is roleplaying in a way that you, as the GM, think doesn't fit his alignment, let him know that he's acting out of alignment and tell him why - but do so in a friendly manner. If a character wants to change his alignment, let him - in most cases, this should amount to little more than a change of personality, or in some cases, no change at all if the alignment change was more of an adjustment to more accurately summarize how a player, in your opinion, is portraying his character. In some cases, changing alignments can impact a character's abilities; see the class write-ups for details. An <Link to="/spell/atonement">atonement</Link> spell may be necessary to repair damage done by alignment changes arising from involuntary sources or momentary lapses in personality.</p>
<p>Players who frequently have their characters change alignment should in all likelihood be playing chaotic neutral characters.</p>
<p><strong className="hl">Note:</strong> GMs may want to check out <Link to="/rule/changing_alignment_ucp">this alternate system</Link> for keeping track of players' alignments.</p>
</>};
const _skills = {title: "Skills", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["skill_checks","taking_10_and_taking_20","aid_another","skill_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 86</Link></p>
<p>Each level, your character gains a number of skill ranks dependent upon your class plus your Intelligence modifier. Investing a rank in a skill represents a measure of training in that skill. You can never have more ranks in a skill than your total number of Hit Dice.</p>
<p>In addition, each class has a number of favored skills, called class skills. It is easier for your character to become more proficient in these skills, as they represent part of his professional training and constant practice. You gain a +3 bonus on all class skills that you put ranks into. If you have more than one class and both grant you a class skill bonus, these bonuses do not stack. The number of skill ranks you gain when taking a level in one of the base classes is shown on Table 4-1.</p>
<p>Humans gain 1 additional skill rank per class level. Characters who take a level in a favored class have the <Link to="/rule/favored_class">option</Link> of gaining 1 additional skill rank or an additional hit point (or another bonus based on their race). If you select a level in a new class, all of its class skills are automatically added to your list of class skills, and you gain a +3 bonus on these skills if you have ranks in them.</p>
<h3 id="rule-skills-table-4-1-skill-ranks">Table 4-1: Skill Ranks</h3>
<ScrollContainer id="rule-skills--table-0"><table>
<thead>
<tr>
<th>Class</th>
<th>Skill Ranks per Level</th>
</tr>
</thead>
<tbody><tr>
<td>Antipaladin, Arcanist, Brawler, Cleric, Fighter, Magus, Paladin, Psychic, Sorcerer, Summoner<sup><InnerLink showBacklink="backlink-rule-skills-ref-U-1" id="rule-skills-ref-U-1" data-hash-target to="rule-skills-U">1</InnerLink></sup>, Warpriest, Witch, Wizard</td>
<td>2 + Int modifier</td>
</tr>
<tr>
<td>Alchemist, Barbarian<sup><InnerLink showBacklink="backlink-rule-skills-ref-U-2" id="rule-skills-ref-U-2" data-hash-target to="rule-skills-U">1</InnerLink></sup>, Bloodrager, Cavalier, Druid, Gunslinger, Kineticist, Medium, Monk<sup><InnerLink showBacklink="backlink-rule-skills-ref-U-3" id="rule-skills-ref-U-3" data-hash-target to="rule-skills-U">1</InnerLink></sup>, Oracle, Occultist, Samurai, Shaman, Shifter, Skald, Spiritualist, Swashbuckler</td>
<td>4 + Int modifier</td>
</tr>
<tr>
<td>Bard, Hunter, Inquisitor, Mesmerist, Ranger, Slayer, Vigilante</td>
<td>6 + Int modifier</td>
</tr>
<tr>
<td>Ninja, Rogue<sup><InnerLink showBacklink="backlink-rule-skills-ref-U-4" id="rule-skills-ref-U-4" data-hash-target to="rule-skills-U">1</InnerLink></sup></td>
<td>8 + Int modifier</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-skills-label">Footnotes</h3>
<ol>
<li id="rule-skills-U">
<p>The Unchained version of this class has the same skill points. <InnerLink id="backlink-rule-skills-ref-U-1" data-hash-target to="rule-skills-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink> <InnerLink id="backlink-rule-skills-ref-U-2" data-hash-target to="rule-skills-ref-U-2" aria-label="Back to reference U-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-rule-skills-ref-U-3" data-hash-target to="rule-skills-ref-U-3" aria-label="Back to reference U-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-rule-skills-ref-U-4" data-hash-target to="rule-skills-ref-U-4" aria-label="Back to reference U-4">↩<sup>4</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _skill_checks = {title: "Skill Checks", parent_topics: ["basics","skills"], siblings: ["skill_checks","taking_10_and_taking_20","aid_another","skill_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 86</Link></p>
<p>When your character uses a skill, he isn't guaranteed success. In order to determine success, whenever you attempt to use a skill, you must make a <strong className="hl">Skill Check.</strong></p>
<p>Each skill rank grants a +1 bonus on checks made using that skill. When you make a skill check, you roll 1d20 and then add your ranks and the appropriate ability score modifier to the result of this check. If the skill you're using is a <strong className="hl">Class Skill</strong> (and you have invested ranks into that skill), you gain a +3 bonus on the check. If you are not trained in the skill (and if the skill may be used untrained), you may still attempt the skill, but you use only the bonus (or penalty) provided by the associated ability score modifier to modify the check. Skills can be further modified by a wide variety of sources - by your race, by a class ability, by equipment, by spell effects or magic items, and so on. See Table 4-2 for a summary of skill check bonuses.</p>
<p>If the result of your skill check is equal to or greater than the difficulty class (or DC) of the task you are attempting to accomplish, you succeed. If it is less than the DC, you fail. Some tasks have varying levels of success and failure depending on how much your check is above or below the required DC. Some skill checks are opposed by the target's skill check. When making an opposed skill check, the attempt is successful if your check result exceeds the result of the target.</p>
<h3 id="rule-skill_checks-table-4-2-skill-check-bonuses">Table 4-2: Skill Check Bonuses</h3>
<ScrollContainer id="rule-skill_checks--table-0"><table>
<thead>
<tr>
<th>Skill</th>
<th>Skill Check is Equal To*</th>
</tr>
</thead>
<tbody><tr>
<td>Untrained</td>
<td>1d20 + ability modifier + racial modifier</td>
</tr>
<tr>
<td>Trained</td>
<td>1d20 + skill ranks + ability modifier + racial modifier</td>
</tr>
<tr>
<td>Trained Class Skill</td>
<td>1d20 + skill ranks + ability modifier + racial modifier + 3</td>
</tr>
</tbody></table></ScrollContainer>
<p>* Armor check penalty applies to all Strength- and Dexterity-based skill checks</p>
</>};
const _taking_10_and_taking_20 = {title: "Taking 10 and Taking 20", parent_topics: ["basics","skills"], siblings: ["skill_checks","taking_10_and_taking_20","aid_another","skill_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 86</Link></p>
<p>A skill check represents an attempt to accomplish some goal, usually while under some sort of time pressure or distraction. Sometimes, though, a character can use a skill under more favorable conditions, increasing the odds of success.</p>
<p><strong className="hl">Taking 10:</strong> When your character is not in immediate danger or distracted, you may choose to take 10. Instead of rolling 1d20 for the skill check, calculate your result as if you had rolled a 10. For many routine tasks, taking 10 makes them automatically successful. Distractions or threats (such as combat) make it impossible for a character to take 10. In most cases, taking 10 is purely a safety measure - you know (or expect) that an average roll will succeed but fear that a poor roll might fail, so you elect to settle for the average roll (a 10). Taking 10 is especially useful in situations where a particularly high roll wouldn't help.</p>
<p><strong className="hl">Taking 20:</strong> When you have plenty of time, you are faced with no threats or distractions, and the skill being attempted carries no penalties for failure, you can take 20. In other words, if you roll a d20 enough times, eventually you will get a 20. Instead of rolling 1d20 for the skill check, just calculate your result as if you had rolled a 20.</p>
<p>Taking 20 means you are trying until you get it right, and it assumes that you fail many times before succeeding. Taking 20 takes 20 times as long as making a single check would take (usually 2 minutes for a skill that takes 1 round or less to perform).</p>
<p>Since taking 20 assumes that your character will fail many times before succeeding, your character would automatically incur any penalties for failure before he or she could complete the task (hence why it is generally not allowed with skills that carry such penalties). Common <em>take 20</em> skills include Disable Device (when used to open locks), Escape Artist, and Perception (when attempting to find traps).</p>
<p><strong className="hl">Ability Checks and Caster Level Checks:</strong> The normal take 10 and take 20 rules apply for ability checks. Neither rule applies to concentration checks or caster level checks.</p>
</>};
const _aid_another = {title: "Aid Another", parent_topics: ["basics","skills"], siblings: ["skill_checks","taking_10_and_taking_20","aid_another","skill_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 86</Link></p>
<p>You can help someone achieve success on a skill check by making the same kind of skill check in a cooperative effort. If you roll a 10 or higher on your check, the character you're helping gets a +2 bonus on his or her check. (You can't take 10 on a skill check to aid another.) In many cases, a character's help won't be beneficial, or only a limited number of characters can help at once.</p>
<p>In cases where the skill restricts who can achieve certain results, such as trying to open a lock using Disable Device, you can't aid another to grant a bonus to a task that your character couldn't achieve alone. The GM might impose further restrictions to aiding another on a case-by-case basis as well.</p>
<p>Also see: <Link to="/rule/aid_another_2">Aid Another</Link> (in the Combat section).</p>
</>};
const _skill_descriptions = {title: "Skill Descriptions", parent_topics: ["basics","skills"], siblings: ["skill_checks","taking_10_and_taking_20","aid_another","skill_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 87</Link></p>
<p>This section describes each skill, including common uses and typical modifiers. Characters can sometimes use skills for purposes other than those noted here, at the GM's discretion. For a complete summary of all of the skills, see Table 4-3.</p>
<p>Skill descriptions adhere to the following guidelines.</p>
<p><strong className="hl">Skill Name:</strong> The skill name line includes (in addition to the name of the skill) the following information.</p>
<p><strong className="hl">Key Ability:</strong> The abbreviation of the ability whose modifier applies to the skill check.</p>
<p><strong className="hl">Trained Only:</strong> If this notation is included in the skill name line, you must have at least 1 rank in the skill to use it. If this notation is omitted, the skill can be used untrained (with a rank of 0). If any special notes apply to trained or untrained use, they are covered in the Untrained section (see below).</p>
<p><strong className="hl">Armor Check Penalty:</strong> If this notation is included in the skill name line, an armor check penalty applies to checks using this skill. If this entry is absent, an armor check penalty does not apply.</p>
<p><strong className="hl">Description:</strong> The skill name line is followed by a general description of what using the skill represents.</p>
<p><strong className="hl">Check:</strong> What a character ("you" in the skill description) can do with a successful skill check and the check's Difficulty Class (DC).</p>
<p><strong className="hl">Action:</strong> The type of action using the skill requires, or the amount of time required for a check.</p>
<p><strong className="hl">Try Again:</strong> Any conditions that apply to successive attempts to use the skill successfully. If the skill doesn't allow you to attempt the same task more than once, or if failure carries an inherent penalty (such as with the Climb skill), you can't take 20. If this paragraph is omitted, the skill can be retried without any inherent penalty other than the additional time required.</p>
<p><strong className="hl">Special:</strong> Any extra facts that apply to the skill, such as special effects deriving from its use or bonuses that certain characters receive because of class, feat choices, or race.</p>
<p><strong className="hl">Restriction:</strong> The full utility of certain skills is restricted to characters of certain classes. This entry indicates whether any such restrictions exist for the skill.</p>
<p><strong className="hl">Untrained:</strong> This entry indicates what a character without at least 1 rank in the skill can do with it. If this entry doesn't appear, it means that the skill functions normally for untrained characters (if it can be used untrained) or that an untrained character can't attempt checks with this skill (for skills that are designated "Trained Only").</p>
<h3 id="rule-skill_descriptions-table-4-3-skill-summary">Table 4-3: Skill Summary</h3>
<DisplayTable table={{"id":"skill description table","columns":[{"header":"Skill","ripple":true,"align":"start"},{"header":"Untrained"},{"header":"Ability"},{"header":"Bbn"},{"header":"Brd"},{"header":"Clr"},{"header":"Drd"},{"header":"Ftr"},{"header":"Mnk"},{"header":"Pal"},{"header":"Rgr"},{"header":"Rog"},{"header":"Sor"},{"header":"Wiz"},{"header":"Alc"},{"header":"Cav"},{"header":"Gun"},{"header":"Inq"},{"header":"Mag"},{"header":"Ora"},{"header":"Shf"},{"header":"Sum"},{"header":"Vig"},{"header":"Wtc"},{"header":"Arc"},{"header":"Bld"},{"header":"Brw"},{"header":"Hnt"},{"header":"Inv"},{"header":"Sha"},{"header":"Skd"},{"header":"Sla"},{"header":"Swa"},{"header":"Wrp"},{"header":"Ant"},{"header":"Nja"},{"header":"Sam"},{"header":"Kin"},{"header":"Med"},{"header":"Mes"},{"header":"Occ"},{"header":"Psy"},{"header":"Spr"}],"data":[["‹skill/Acrobatics›","Yes","Dex\\*","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Appraise›","Yes","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Bluff›","Yes","Cha",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C"],["‹skill/Climb›","Yes","Str\\*","C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Craft (any)›","Yes","Int","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C"],["‹skill/Diplomacy›","Yes","Cha",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"]],["‹skill/Disable Device›","No","Dex\\*",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Disguise›","Yes","Cha",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Escape Artist›","Yes","Dex\\*",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Fly›","Yes","Dex\\*",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C"],["‹skill/Handle Animal›","No","Cha","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Heal›","Yes","Wis",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C"],["‹skill/Intimidate›","Yes","Cha","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C","C","C","C","C","C","C","C","C",["Z","&ndash;"],"C","C"],["‹skill/Knowledge (Arcana)›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C","C"],["‹skill/Knowledge (Dungeoneering)›","No","Int",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C"],["‹skill/Knowledge (Engineering)›","No","Int",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C"],["‹skill/Knowledge (Geography)›","No","Int",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C"],["‹skill/Knowledge (History)›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C"],["‹skill/Knowledge (Local)›","No","Int",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C"],["‹skill/Knowledge (Nature)›","No","Int","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C"],["‹skill/Knowledge (Nobility)›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C"],["‹skill/Knowledge (Planes)›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C"],["‹skill/Knowledge (Religion)›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C","C"],["‹skill/Linguistics›","No","Int",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C","C"],["‹skill/Perception›","Yes","Wis","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C","C","C",["Z","&ndash;"]],["‹skill/Perform (any)›","Yes","Cha",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Profession (any)›","No","Wis",["Z","&ndash;"],"C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C","C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C","C","C","C","C","C","C","C","C","C","C"],["‹skill/Ride›","Yes","Dex\\*","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C","C","C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Sense Motive›","Yes","Wis",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C","C","C","C","C",["Z","&ndash;"],"C","C","C","C","C"],["‹skill/Sleight of Hand›","No","Dex\\*",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Spellcraft›","No","Int",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C","C"],["‹skill/Stealth›","Yes","Dex\\*",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Survival›","Yes","Wis","C",["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Swim›","Yes","Str\\*","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"]],["‹skill/Use Magic Device›","No","Cha",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C","C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C",["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],["Z","&ndash;"],"C",["Z","&ndash;"],"C","C","C","C",["Z","&ndash;"],"C"]],"initialColumn":0}} />
<p><strong>C</strong> indicates that the class treats this skill as a class skill.<br/><strong>*</strong> indicates that armor check penalties may apply.</p>
</>};
const _feats = {title: "Feats", parent_topics: ["basics"], siblings: ["how_to_play","common_terms","character_creation","ability_scores","races","classes","character_advancement","alignment","skills","feats","equipment","traits_and_other_details","magic_items","movement","vision_and_light","breaking_things","magic"], subtopics: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 112</Link></p>
<p>Some abilities are not tied to your race, class, or skill - things like particularly quick reflexes that allow you to react to danger more swiftly, the ability to craft magic items, the training to deliver powerful strikes with melee weapons, or the knack for deflecting arrows fired at you. These abilities are represented as feats. While some feats are more useful to certain types of characters than others, and many of them have special prerequisites that must be met before they are selected, as a general rule feats represent abilities outside of the normal scope of your character's race and class. Many of them alter or enhance class abilities or soften class restrictions, while others might apply bonuses to your statistics or grant you the ability to take actions otherwise prohibited to you. By selecting feats, you can customize and adapt your character to be uniquely yours.</p>
<h3 id="rule-feats-prerequisites">Prerequisites</h3>
<p>Some feats have prerequisites. Your character must have the indicated ability score, class feature, feat, skill, base attack bonus, or other quality designated in order to select or use that feat. A character can gain a feat at the same level at which he gains the prerequisite.</p>
<p>A character can't use a feat if he loses a prerequisite, but he does not lose the feat itself. If, at a later time, he regains the lost prerequisite, he immediately regains full use of the feat that prerequisite enables.</p>
<h3 id="rule-feats-feat-descriptions">Feat Descriptions</h3>
<p>Feats <Link to="/main/feats">are listed here.</Link> Note that the prerequisites and benefits of the feats listed in tables are abbreviated for ease of reference. See the feat's description for full details.</p>
<p>The following format is used for all feat descriptions.</p>
<p><strong className="hl">Feat Name:</strong> The feat's name also indicates what subcategory, if any, the feat belongs to, and is followed by a basic description of what the feat does.</p>
<p><strong className="hl">Prerequisite:</strong> A minimum ability score, another feat or feats, a minimum base attack bonus, a minimum number of ranks in one or more skills, or anything else required in order to take the feat. This entry is absent if a feat has no prerequisite. A feat may have more than one prerequisite.</p>
<p><strong className="hl">Benefit:</strong> What the feat enables the character ("you" in the feat description) to do. If a character has the same feat more than once, its benefits do not stack unless indicated otherwise in the description.</p>
<p><strong className="hl">Normal:</strong> What a character who does not have this feat is limited to or restricted from doing. If not having the feat causes no particular drawback, this entry is absent.</p>
<p><strong className="hl">Special:</strong> Additional unusual facts about the feat.</p>
</>};
const _feats_basic = {hasJL:true,title: "Basic Feat Types", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><div className="jumpList" id="rule-feats_basic-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-feats_basic-combat-feats">Combat Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_basic-critical-feats">Critical Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_basic-item-creation-feats">Item Creation Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_basic-metamagic-feats">Metamagic Feats</InnerLink></li></ul></div><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 112</Link></p>
<p>Some feats are <Link to="/main/feats_general">general</Link> (1,614 feats), meaning that no special rules govern them as a group. Other subcategories of feats exist.</p>
<h3 id="rule-feats_basic-combat-feats" data-hash-target>Combat Feats</h3>
<p>Any feat designated as a <Link to="/main/combat_feat">combat feat</Link> (1,699 feats) can be selected as a fighter's bonus feat. This designation does not restrict characters of other classes from selecting these feats, assuming that they meet the prerequisites.</p>
<h3 id="rule-feats_basic-critical-feats" data-hash-target>Critical Feats</h3>
<p><Link to="/main/feats_critical">Critical feats</Link> (28 feats) modify the effects of a critical hit by inflicting an additional condition on the victim of the critical hit. Characters without the <Link to="/feat/critical_mastery">Critical Mastery</Link> feat can only apply the effects of one critical feat to an individual critical hit. Characters with multiple critical feats can decide which feat to apply after the critical hit has been confirmed.</p>
<h3 id="rule-feats_basic-item-creation-feats" data-hash-target>Item Creation Feats</h3>
<p>An <Link to="/main/item_creation_feat">item creation feat</Link> (26 feats) lets a character create a magic item of a certain type. Regardless of the type of item each involves, the various item creation feats all have certain features in common.</p>
<p><strong>Raw Materials Cost:</strong> The cost of creating a magic item equals half the base price of the item.</p>
<p>Using an item creation feat also requires access to a laboratory or magical workshop, special tools, and so on. A character generally has access to what he needs unless unusual circumstances apply.</p>
<p><strong className="hl">Time:</strong> The time to create a magic item depends on the feat and the cost of the item.</p>
<p><strong className="hl">Item Cost:</strong> Brew Potion, Craft Staff, Craft Wand, and Scribe Scroll create items that directly reproduce spell effects, and the power of these items depends on their caster level - that is, a spell from such an item has the power it would have if cast by a spellcaster of that level. The price of these items (and thus the cost of the raw materials) also depends on the caster level. The caster level must be low enough that the spellcaster creating the item can cast the spell at that level. To find the final price in each case, multiply the caster level by the spell level, then multiply the result by a constant, as shown below:</p>
<ul>
<li>Scrolls: Base price = spell level &times; caster level &times; 25 gp.</li>
<li>Potions: Base price = spell level &times; caster level &times; 50 gp.</li>
<li>Wands: Base price = spell level &times; caster level &times; 750 gp.</li>
<li>Staves: The price for staves is calculated using <Link to="/rule/creating_staves">more complex formulas</Link>.</li>
</ul>
<p>A 0-level spell is considered to have a spell level of 1/2 for the purpose of this calculation.</p>
<p><strong className="hl">Extra Costs:</strong> Any potion, scroll, or wand that stores a spell with a costly material component also carries a commensurate cost. For potions and scrolls, the creator must expend the material component cost when creating the item. For a wand, the creator must expend 50 units of the material component. Some magic items similarly incur extra costs in material components, as noted in their descriptions.</p>
<p><strong className="hl">Skill Check:</strong> Successfully creating a magic item requires a Spellcraft check with a DC equal to 5 + the item's caster level. Alternatively, you can use an associated Craft or Profession skill to attempt this check instead, depending upon the item being crafted. See <Link to="/rule/magic_item_creation">Magic Item Creation</Link> for more details on which Craft and Profession checks may be substituted in this manner. The DC of this check can increase if the crafter is rushed or does not meet all of the prerequisites. A failed check ruins the materials used, while a check that fails by 5 or more results in a cursed item.</p>
<h3 id="rule-feats_basic-metamagic-feats" data-hash-target>Metamagic Feats</h3>
<p>As a spellcaster's knowledge of magic grows, he can learn to cast spells in ways slightly different from the norm. Preparing and casting a spell in such a way is harder than normal but, thanks to <Link to="/main/metamagic_feat">metamagic feats</Link> (85 feats), is at least possible. Spells modified by a metamagic feat use a spell slot higher than normal. This does not change the level of the spell, so the DC for saving throws against it does not go up. Metamagic feats do not affect spell-like abilities.</p>
<p><strong className="hl">Wizards and Divine Spellcasters:</strong> Wizards and divine spellcasters must prepare their spells in advance. During preparation, the character chooses which spells to prepare with metamagic feats (and thus which ones take up higher-level spell slots than normal).</p>
<p><strong className="hl">Sorcerers and Bards:</strong> Sorcerers and bards choose spells as they cast them. They can choose when they cast their spells whether to apply their metamagic feats to improve them. As with other spellcasters, the improved spell uses up a higher-level spell slot. Because the sorcerer or bard has not prepared the spell in a metamagic form in advance, he must apply the metamagic feat on the spot. Therefore, such a character must also take more time to cast a metamagic spell (one enhanced by a metamagic feat) than he does to cast a regular spell. If the spell's normal casting time is a standard action, casting a metamagic version is a full-round action for a sorcerer or bard. (This isn't the same as a 1-round casting time.) The only exception is for spells modified by the <Link to="/feat/quicken_spell">Quicken Spell</Link> metamagic feat, which can be cast as normal using the feat.</p>
<p>For a spell with a longer casting time, it takes an extra full-round action to cast the spell.</p>
<p><strong className="hl">Spontaneous Casting and Metamagic Feats:</strong> A cleric spontaneously casting a cure or inflict spell, or a druid spontaneously casting a summon nature's ally spell, can cast a metamagic version of it instead. Extra time is also required in this case. Casting a standard action metamagic spell spontaneously is a full-round action, and a spell with a longer casting time takes an extra full-round action to cast. The only exception is for spells modified by the Quicken Spell feat, which can be cast as a swift action.</p>
<p><strong className="hl">Effects of Metamagic Feats on a Spell:</strong> In all ways, a metamagic spell operates at its original spell level, even though it is prepared and cast using a higher-level spell slot. Saving throw modifications are not changed unless stated otherwise in the feat description.</p>
<p>The modifications made by these feats only apply to spells cast directly by the feat user. A spellcaster can't use a metamagic feat to alter a spell being cast from a wand, scroll, or other device.</p>
<p>Metamagic feats that eliminate components of a spell don't eliminate the attack of opportunity provoked by casting a spell while threatened. Casting a spell modified by Quicken Spell does not provoke an attack of opportunity.</p>
<p>Metamagic feats cannot be used with all spells. See the specific feat descriptions for the spells that a particular feat can't modify.</p>
<p><strong className="hl">Multiple Metamagic Feats on a Spell:</strong> A spellcaster can apply multiple metamagic feats to a single spell. Changes to its level are cumulative. You can't apply the same metamagic feat more than once to a single spell.</p>
<p><strong className="hl">Magic Items and Metamagic Spells:</strong> With the right item creation feat, you can store a metamagic version of a spell in a scroll, potion, or wand. Level limits for potions and wands apply to the spell's higher spell level (after the application of the metamagic feat). A character doesn't need the metamagic feat to activate an item storing a metamagic version of a spell.</p>
<p><strong className="hl">Counterspelling Metamagic Spells:</strong> Whether or not a spell has been enhanced by a metamagic feat does not affect its vulnerability to <Link to="/rule/counterspells">counterspelling</Link> or its ability to counterspell another spell.</p>
</>};
const _feats_multiperson = {title: "Multiperson Feats", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><p>These feats involve more than one person to pull off.</p>
<h3 id="rule-feats_multiperson-teamwork-feats">Teamwork Feats</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 150</Link><br/><Link to="/main/teamwork_feat">Teamwork feats</Link> (183 feats) grant large bonuses, but they only function under specific circumstances. In most cases, these feats require an ally who also possesses the feat to be positioned carefully on the battlefield.</p>
<p>Teamwork feats provide no bonus if the listed conditions are not met. Note that allies who are paralyzed, stunned, unconscious, or otherwise unable to act do not count for the purposes of these feats.</p>
<h3 id="rule-feats_multiperson-betrayal-feats">Betrayal Feats</h3>
<p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 22</Link><br/>"Teamwork" is a relative term. Many villains don't concern themselves with collateral damage and make their plans with exceeding ruthlessness. <Link to="/main/feats_betrayal">Presented here</Link> (6 feats) are several teamwork feats with the common theme of reaping a benefit at your allies' expense. All of these feats refer to an initiator and an abettor. The initiator is the one activating the feat (also referred to as "you") and the abettor is an ally who also has the feat and whose presence and (perhaps unwilling) sacrifice allows the feat to take effect. Choosing one of these feats effectively grants consent for an ally with the same feat to harm you in combat, and vice versa, but evil characters are often willing to take big risks to get the upper hand. Some recruit devoted minions specifically to use in this way. Characters with class abilities granting allies access to teamwork feats (such as cavaliers or inquisitors) can select these teamwork feats normally, but allies who are granted these feats can use the feats only as initiators, not as abettors. An inquisitor could not grant an ally the Ally Shield feat and then use the ally as a shield, for example, but he could allow that ally to use him as a shield.</p>
<h3 id="rule-feats_multiperson-coven-feats">Coven Feats</h3>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 13</Link><br/><Link to="/main/feats_coven">Coven feats</Link> (2 feats) are special teamwork feats whose effects require three participants. While such feats often represent the connection between coven members and refer to the group as a coven, any group of three individuals who meet the prerequisites can select these feats.</p>
</>};
const _feats_class = {hasJL:true,title: "Class-Based Feats", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><div className="jumpList" id="rule-feats_class-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-feats_class-familiar-feats">Familiar Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-meditation-feats">Meditation Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-style-feats">Style Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-grit-feats">Grit Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-panache-feats">Panache Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-mesmerist-stare-feats">Mesmerist Stare Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-mesmerist-trick-feats">Mesmerist Trick Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_class-blood-hex-feats">Blood Hex Feats</InnerLink></li></ul></div><p>These feats are designed for one or more classes, but might be usable by other characters, too.</p>
<h3 id="rule-feats_class-familiar-feats" data-hash-target>Familiar Feats</h3>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 18</Link><br/><Link to="/main/feats_familiar">Familiar feats</Link> (8 feats) can be taken by characters who have familiars that meet the listed prerequisites. Wizards can take a familiar feat as a bonus feat, and witches can select a familiar feat in place of a hex. If you lose your familiar and gain a new familiar that doesn't meet the listed prerequisites for a familiar feat you possess, your new familiar doesn't gain the benefits of that feat. A new familiar that meets the prerequisites automatically gains the benefits of that feat.</p>
<p>When you gain a new level, if your current familiar does not meet the prerequisite of a familiar feat you possess, you can learn a new familiar feat in place of the feat your familiar doesn't qualify for. In effect, you lose the old familiar feat in exchange for the new one. The feat lost can't be a prerequisite for another feat you possess, and your familiar must meet the new feat's prerequisites. You can exchange only one feat in this way each time you gain a level.</p>
<h3 id="rule-feats_class-meditation-feats" data-hash-target>Meditation Feats</h3>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 19</Link><br/>Meditation provides some of the advantages of a monastic refuge anywhere. While meditation can help any character center herself or calm a troubled mind, those specially trained in the art can use it to unlock fantastic abilities within themselves, reflected in the following feats. <Link to="/main/feats_meditation">These feats</Link> (42 feats) can be taken by any character who meets the prerequisites, but are most commonly encountered among those who have trained in a monastery.</p>
<p><strong className="hl">Monks and Meditation Feats:</strong> A monk may take a meditation feat in place of a bonus feat. She must meet all of the prerequisites to take the feat as normal.</p>
<h3 id="rule-feats_class-style-feats" data-hash-target>Style Feats</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 78</Link><br/>For centuries, great warriors have looked to nature and the multiverse to find inspiration in battle. Countless monastic and contemplative orders have crafted intricate unarmed <Link to="/main/feats_style">fighting styles</Link> (90 feats) based on the deadliness and grace of natural and supernatural creatures. Although many such fighting techniques were created by secretive orders, they have since spread to practitioners the world over.</p>
<p>As a swift action, you can enter the stance employed by the fighting style a style feat embodies. Although you cannot use a style feat before combat begins, the style you are in persists until you spend a swift action to switch to a different combat style. You can use a feat that has a style feat as a prerequisite only while in the stance of the associated style. For example, if you have feats associated with Mantis Style and Tiger Style, you can use a swift action to adopt Tiger Style at the start of one turn, and then can use other feats that have Tiger Style as a prerequisite. By using another swift action at the start of your next turn, you could adopt Mantis Style and use other feats that have Mantis Style as a prerequisite.</p>
<h3 id="rule-feats_class-grit-feats" data-hash-target>Grit Feats</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 78</Link><br/><Link to="/main/grit_feat">Grit feats</Link> (21 feats) interact with the gunslinger's grit class ability or the grit granted by the <Link to="/feat/amateur_gunslinger">Amateur Gunslinger</Link> feat, usually by adding to her set of deeds. Sometimes these feats increase the number of grit points a character has or how that character regains grit points. <Link to="/class/gunslinger">Gunslingers</Link> can take grit feats as bonus feats.</p>
<h3 id="rule-feats_class-panache-feats" data-hash-target>Panache Feats</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 136</Link><br/><Link to="/main/feats_panache">Panache feats</Link> (11 feats) interact with the <Link to="/class/swashbuckler">swashbuckler's</Link> panache class ability or the panache granted by the <Link to="/feat/amateur_swashbuckler">Amateur Swashbuckler</Link> feat. Swashbucklers can take panache feats as bonus feats.</p>
<h3 id="rule-feats_class-mesmerist-stare-feats" data-hash-target>Mesmerist Stare Feats</h3>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 128</Link><br/><Link to="/main/feats_stare">Stare feats</Link> (16 feats) allow a mesmerist to apply additional effects to his painful stare ability. Characters without the <Link to="/feat/compounded_pain">Compounded Pain</Link> feat can apply the effects of only one stare feat to an individual attack; A mesmerist with multiple stare feats must choose which to apply before the damage roll is made.</p>
<h3 id="rule-feats_class-mesmerist-trick-feats" data-hash-target>Mesmerist Trick Feats</h3>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology pg. 16</Link><br/><Link to="/main/feats_trick">Trick feats</Link> (6 feats) are a new type of feat that allows mesmerists - as well as other characters capable of taking mesmerist tricks - to modify their tricks by altering or expanding how they can be used. A target can be implanted with only one mesmerist trick that has been modified by a trick feat at a time, and a single mesmerist trick can be modified by only one trick feat.</p>
<h3 id="rule-feats_class-blood-hex-feats" data-hash-target>Blood Hex Feats</h3>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 28</Link><br/>The spilling of blood can unleash significant magic power, and many cultures on Golarion have developed ways of accessing that power. Some among the winter witches of Irrisen and the dervishes of Casmaron can use magic powered by inflicting significant wounds to curse their enemies. More sinister versions of these hexes can be found in the shadowy realms of Nidal and among the criminal blood magicians of Tian Xia. While these disparate magical traditions employ different terms for the tactic, a curse powered by the subject's own blood loss is commonly known as a blood hex.</p>
<p><Link to="/main/feats_blood_hex">Blood hexes</Link> (8 feats) take many forms, but all obey some basic rules that apply to each blood hex feat. Blood hex feats are available to any character who meets the feat's prerequisites. Blood hex feats work only against targets you have dealt hit point damage to recently, with the exact time frame and any requirements for how you deal the damage outlined in each feat. The saving throw DC of a blood hex is always equal to 10 + 1/2 your character level + your Intelligence, Wisdom, or Charisma modifier (whichever is highest). You can target a creature with the same blood hex at most once every 24 hours, whether it is affected by the blood hex or not. You can use a number of blood hexes per day equal to the number of blood hex feats you have, plus one additional use per day at 4th level and every 4 character levels thereafter. You can use the same blood hex multiple times, as long as you don't exceed your total uses of blood hexes for the day.</p>
<p>Shamans and witches can take a blood hex feat in place of a regular hex and sometimes gain additional effects when they use a blood hex, but must still deal hit point damage to a creature in order to use the blood hex. A shaman or witch can use blood hexes an unlimited number of times per day, but still cannot target the same creature with the same blood hex more than once every 24 hours. All blood hexes with a duration of 1 round can be extended normally using the <Link to="/hex/cackle">cackle</Link> hex or the <Link to="/shamanhex/chant">chant</Link> hex.</p>
<p>The effects of a given blood hex doesn't stack with themselves, even if the blood hex is used by different sources, but a creature can be cursed with any number of different blood hexes at one time. A blood hex is a supernatural curse effect, and counts as a hex for the purposes of abilities that work against hexes.</p>
</>};
const _feats_mastery = {title: "Mastery Feats", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><h3 id="rule-feats_mastery-weapon-mastery-feats">Weapon Mastery Feats</h3>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 20</Link><br/>Although most combat techniques are general enough to be categorized as combat feats, some require such a high level of martial skill that they are instead categorized as weapon mastery feats. <Link to="/main/feats_weapon_mastery">Weapon mastery feats</Link> (17 feats) count as combat feats for all purposes, including which classes can select them as bonus feats, and you gain the benefits of a weapon mastery feat only while wielding a weapon that belongs to a fighter weapon group that you have selected with the fighter weapon training class feature (referred to hereafter as an "appropriate weapon"), and any effect of these feats related to attacks applies only to attacks from such weapons unless the feat specifies otherwise. Characters who lack the weapon training class feature can access weapon mastery feats by taking the <Link to="/feat/martial_focus">Martial Focus</Link> feat.</p>
<h3 id="rule-feats_mastery-armor-mastery-feats">Armor Mastery Feats</h3>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 16</Link><br/><Link to="/main/feats_armor_mastery">Armor mastery feats</Link> (11 feats) are a new type of feat that require armor training as a prerequisite. They count as combat feats for all purposes, including which classes can select them as bonus feats. You gain the benefits of an armor mastery feat only while wearing armor with which you are proficient and only while wearing a type of armor that matches the feat's armor proficiency feat prerequisite, if any. Armor mastery feats without armor proficiency prerequisites can be used while wearing any suit of armor. Characters who lack the armor training class feature can access armor mastery feats by taking the <Link to="/feat/armor_focus">Armor Focus</Link> feat.</p>
<h3 id="rule-feats_mastery-shield-mastery-feats">Shield Mastery Feats</h3>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 18</Link><br/>To some combatants shields are just as important, if not more so, than weapons or armor. Shields are multipurpose, capable of defense or offense. They slide on and off far faster than armor, and allow adventurers to change their tactics on a whim.</p>
<p>A handful of specialists train to maximize a shield's use in battle. Presented here are new feats categorized as <Link to="/main/feats_shield_mastery">shield mastery feats</Link> (14 feats), each requiring <Link to="/feat/shield_focus">Shield Focus</Link> as a prerequisite. Characters with the armor training class feature can ignore the Shield Focus feat as a prerequisite for shield mastery feats. Shield mastery feats count as combat feats for all purposes, including which classes can select them as bonus feats. You gain the benefits of a shield mastery feat only while wielding a shield with which you are proficient. Characters with the Shield Focus feat also qualify for the <Link to="/feat/improved_shield_focus">Improved Shield Focus</Link> feat.</p>
<h3 id="rule-feats_mastery-item-mastery-feats">Item Mastery Feats</h3>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 26</Link><br/>Using an <Link to="/main/feats_item_mastery">item mastery feat</Link> (19 feats) is a standard action that doesn't provoke attacks of opportunity, similar to activating a command word item, though you do not need to speak to use the feat. Creating these effects requires you to assault the existing magic of the item through your force of will and channel the item's inherent magic through your own body; This act is thus governed by the user's fortitude. All effects created by item mastery feats act as spell-like abilities and use your base attack bonus as the caster level. Any spell-like ability's save DC is equal to 10 + the spell level + your Constitution modifier. If a spell-like ability calls for a calculation using your Intelligence, Wisdom, or Charisma bonus or modifier, use your Constitution bonus or modifier instead.</p>
<p>Magic item mastery is stressful for the item as well as the user and can't be performed on items that can be used only a limited number of times or that must be recharged (such as elixirs, potions, scrolls, staffs, and wands) - it requires items with constant effects or daily uses. Magic item mastery doesn't affect an item's normal properties or deplete any of its daily uses.</p>
</>};
const _feats_roleplaying = {hasJL:true,title: "Roleplaying Feats", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><div className="jumpList" id="rule-feats_roleplaying-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-feats_roleplaying-achievement-feats">Achievement Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_roleplaying-alignment-feats">Alignment Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_roleplaying-faction-feats">Faction Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_roleplaying-damnation-feats">Damnation Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_roleplaying-gathlain-court-titles">Gathlain Court Titles</InnerLink></li><li><InnerLink toTop to="rule-feats_roleplaying-story-feats">Story Feats</InnerLink></li></ul></div><p>These feats represent some facet of your roleplaying made manifest. They usually require you to have made progress in the game across a number of sessions.</p>
<h3 id="rule-feats_roleplaying-achievement-feats" data-hash-target>Achievement Feats</h3>
<p><strong>Sources</strong> <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 28</Link><br/>Inspired by a variety of video games and board games that utilize similar conventions, <Link to="/main/feats_achievement">achievement feats</Link> (4 feats) require the cooperation of the player and the GM to make the transition into the world of pen-and-paper RPGs. Players who seek to qualify for an achievement feat should tell their GM early so he can begin noting the PC's progress toward the feat's requirement, or be aware that the player is tracking his character's accomplishments with this goal in mind. Although they require more bookkeeping to attain than typical feats, these feats are custom-designed to reward players of Legacy of Fire and should help PCs feel like they've accomplished something pertinent to the campaign's goals. GMs who don't think achievement feats are for their game can ignore this section with no detriment to their campaign, but for those who do test them out, we'd love to hear your stories and playtest experiences on our messageboards at pazio.com/traits.</p>
<h3 id="rule-feats_roleplaying-alignment-feats" data-hash-target>Alignment Feats</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 98</Link><br/>If you have at least 10 Hit Dice, you can take any <Link to="/main/feats_alignment">alignment feat</Link> (9 feats) that matches your alignment. You cannot have more than one alignment feat at any time, but after changing alignment, when you reach a new character level, you can freely switch your alignment feat to your new alignment's feat. Most alignment feats have a Residual entry that allows you to benefit from some part of the feat even when you no longer meet the alignment prerequisite for the feat, usually aiding you in a small way to regain that alignment. Most alignment feats also allow you to store <Link to="/rule/shifts_and_affirmations">affirmations</Link> for later use. If you shift alignment and no longer have the ability to store affirmations, any affirmations stored by that feat are lost.</p>
<h3 id="rule-feats_roleplaying-faction-feats" data-hash-target>Faction Feats</h3>
<p><strong>Sources</strong> <Link to="/source/faction_guide">Faction Guide pg. 55</Link><br/>Any character who meets the prerequisites for <Link to="/main/feats_faction">these feats</Link> (17 feats) may select them, though some require specialized training only available from certain <Link to="/rule/factions">factions</Link>.</p>
<h3 id="rule-feats_roleplaying-damnation-feats" data-hash-target>Damnation Feats</h3>
<p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 18</Link><br/>Damnation feats represent a bargain the character has made with some dark power, granting the character great power at the cost of her eternal soul. <Link to="/main/feats_damnation">Damnation feats</Link> (4 feats) are distinct from more common feats in three ways.</p>
<p><strong className="hl">Damned:</strong> A character with a damnation feat is damned (see below). This is likely a permanent condition, but might be avoided through redemption.</p>
<p><strong className="hl">Greater Power:</strong> Damnation feats increase in power relative to the number of damnation feats a character possesses. Each new damnation feat increases the power of all of the character's damnation feats, including the newly taken feat and future feats.</p>
<p><strong className="hl">Patronage:</strong> All damnation feats require the patronage of an evil outsider - typically a daemon, devil, demon, or kyton. This evil outsider patron must be favorably disposed toward the character and must have a number of Hit Dice equal to or greater than her character level. An evil outsider summoned via a spell like <Link to="/spell/planar_binding">planar binding</Link> might be coerced to serve as a character's patron (whether that character is the spell's caster or another seeking patronage). The caster of a planar binding spell must still attempt Charisma checks to coerce the outsider into service, but she gains a +4 bonus on her Charisma checks if that service is to act as a damnation feat's patron. Other outsiders might more willingly serve as patrons at the GM's discretion.</p>
<h4 id="rule-feats_roleplaying-damnation-effects">Damnation Effects</h4>
<p>When a character takes a damnation feat, his soul is damned. The character's spirit is promised to a dark power, whether an evil deity or a foul planar race, and his soul will ultimately be consigned to some grim fate after his death. The method by which one becomes damned typically determines the specifics of this eternal doom, but the in-game effects are the same regardless.</p>
<p>Upon taking a damnation feat, the character's soul becomes ensnared by dark, otherworldly forces. From that point on, if the character dies, returning him to life proves to be more difficult. Any nonevil spellcaster who attempts to bring the character back from the dead must attempt a caster level check (DC = 10 + the slain character's Hit Dice). Success means the spell functions as normal, while failure means the spell fails and cannot be attempted again for 24 hours. Evil spellcasters, however, can raise the slain character normally, without a check.</p>
<p>Upon taking a second damnation feat, the character becomes even more ensnared by his doom. He remains difficult to return from the dead (as noted above), and he can't be affected by <Link to="/spell/breath_of_life">breath of life</Link> or <Link to="/spell/raise_dead">raise dead</Link>, even when these spells are cast by an evil spellcaster. Also, the character's alignment shifts one step toward evil (typically toward the alignment of whatever creature serves as his patron).</p>
<p>This corruption continues if the character takes a third damnation feat. He is affected as previously noted, and in addition, the spell <Link to="/spell/resurrection">resurrection</Link> no longer affects him. The character's alignment again shifts one step toward evil (typically toward the alignment of whatever creature serves as his patron).</p>
<p>Finally, upon taking a fourth damnation feat, the character can no longer be returned from the dead by any method short of a <Link to="/spell/wish">wish</Link> or <Link to="/spell/miracle">miracle</Link>. The character's alignment shifts one more step toward the alignment of whatever creature serves as his patron.</p>
<h3 id="rule-feats_roleplaying-gathlain-court-titles" data-hash-target>Gathlain Court Titles</h3>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 22</Link><br/>The courts of the <Link to="/rule/eldest">Eldest</Link> have many fanciful titles, and the strange logic of the fey means bearing one of them can grant a creature unusual powers. <Link to="/main/feats_gathlain">These feats</Link> (4 feats) represent the metaphysical weight of gaining a title from a fey patron. Generally, titles are available only to creatures with the fey creature type (most frequently <Link to="/race/gathlain">gathlains</Link>), but loyal and particularly impressive servants of the Eldest can court the favor of the fey with audacious deeds, and are sometimes rewarded by being made peers.</p>
<h3 id="rule-feats_roleplaying-story-feats" data-hash-target>Story Feats</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 66</Link><br/>A <Link to="/main/feats_story">story feat</Link> (76 feats) reflects a goal - often an all-consuming one - that shapes your life. Each story feat incorporates a trigger event (which comes from either a campaign occurrence or your background), an immediate benefit, a goal, and a further benefit for achieving that goal.</p>
<p>Story feats are marked with the <strong>Story</strong> keyword. Each feat has at least two possible prerequisites, representing conditions most likely met during play or a background that fits the feat (see <Link to="/rule/character_background">Backgrounds</Link>). You need to meet only one of these prerequisites. Anytime you gain a new feat, you may take a story feat, but you can have only one uncompleted story feat at a time. Story feats are designed for PCs, but can be taken by NPCs and monsters as well.</p>
<p>Unlike typical feats, story feats have nebulous prerequisites, and you should chose one only after talking with the GM. The GM should weave a story feat into the greater story of the campaign and even adjust it as needed to fit the campaign's long-term goals and the specifics of your background. Story feats should work organically within the story of the campaign, rather than be chosen purely for their mechanical benefits.</p>
<p>Like the prerequisites, the completion conditions for a story feat might require GM adjudication. If the events of the campaign are not likely to resolve the story implied by the story feat, the GM should consider shifting the goal to something you can achieve. Establishing a meaningful story arc is more important than adhering to the letter of the feat.</p>
<p>Because a story feat represents both your motivation and character development, the GM should make an effort to incorporate elements related to the feat into the ongoing campaign. These can be direct elements, like the appearance of a villain or hated creature, or indirect elements, such as rumors of the fate of a lost relative or NPCs who are impressed by a PC's artistic endeavors. A good rule of thumb is to work in a reference to each PC's story feat once every three to five sessions.</p>
<p>In most cases, allies can assist in completing a story feat. At the GM's discretion, if you do not take a leadership role in tasks or conflicts related to your own story feat, you might need to complete additional goals to resolve the story feat, or might even be denied completion altogether.</p>
<h4 id="rule-feats_roleplaying-common-rules">Common Rules</h4>
<p>Many story feats share similar terminology in their prerequisites and completion conditions. The following terms have special meanings when used in story feats.</p>
<p><strong className="hl">Appropriate Number:</strong> These are either creatures whose individual CRs add up to 20, or creatures whose individual CRs add up to 5 times your character level, whichever is greater. For example, if you're at 6th level, an appropriate number of creatures have CRs that add up to 30. This calculation is based on your current character level, not the level at which you selected the story feat. Overly easy challenges (encounters with CRs of 3 or more below your character level) don't count unless circumstances make them much more difficult to handle.</p>
<p><strong className="hl">Challenging Foe:</strong> This is a foe or group of foes with a total CR of 10 or a CR of 3 plus your character level, whichever is higher. If this refers to a distinct individual, the foe's CR is set when the feat is taken, but the foe advances in power as you do. Otherwise, it refers to your current level. A typical recurring foe advances in CR by 1 for every 1-2 levels you gain.</p>
<p><strong className="hl">Character's Level:</strong> Normally, this is your actual character level. If you're a creature best represented by CR rather than character level (such as most monsters with more than 1 HD), use your calculated CR instead of your character level.</p>
<p><strong className="hl">Decisively Defeat:</strong> You overcome a foe in some way, such as by killing the creature, knocking it unconscious, or causing it to be taken prisoner. You must be a significant participant in the conflict to defeat the opponent, even if another strikes the final blow. Whether or not merely causing the enemy to flee qualifies is up to the GM. Generally, driving off an enemy while causing little actual harm does not qualify as a decisive defeat.</p>
<p><strong className="hl">Slay:</strong> Slaying a foe includes killing it, destroying it, turning it to stone, banishing it to the Abyss, or otherwise eliminating it in a fashion reversible only by powerful magic. Unless otherwise noted, you must deal the final blow yourself to slay a creature.</p>
<p><strong className="hl">Thwart:</strong> Distinct from defeating a foe, thwarting a foe involves disrupting its plans in a substantial and essentially permanent fashion. Deposing a lord, bringing down a priest's temple, or banishing a sorcerer to the depths of Hell all qualify as thwarting. You keep any benefits gained by thwarting a foe even if it survives defeat and returns more powerful than before. You must be a significant participant in the events that lead to your foe being thwarted for your actions to count toward fulfilling a story requirement.</p>
<h4 id="rule-feats_roleplaying-stacking">Stacking</h4>
<p>Most story feat bonuses are untyped, and stack with almost any other bonus. However, if you have multiple story feats, their untyped bonuses do not stack with each other. For example, if two story feats gave you a bonus on saving throws, you would add only the higher bonus.</p>
</>};
const _feats_other = {hasJL:true,title: "Other Feats", parent_topics: ["basics","feats"], siblings: ["feats_basic","feats_multiperson","feats_class","feats_mastery","feats_roleplaying","feats_other"], jsx: <><div className="jumpList" id="rule-feats_other-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="rule-feats_other-combination-feats">Combination Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-conduit-feats">Conduit Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-monster-feats">Monster Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-origin-feats">Origin Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-performance-feats">Performance Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-versatile-brewing-feats">Versatile Brewing Feats</InnerLink></li><li><InnerLink toTop to="rule-feats_other-alternate-rules-feats">Alternate Rules Feats</InnerLink></li></ul></div><p>Other types of feats exist, detailed below.</p>
<h3 id="rule-feats_other-combination-feats" data-hash-target>Combination Feats</h3>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 26</Link><br/>Masters of martial arts can string one attack into the next, setting an opponent up for her allies or wearing a foe down with inevitable attrition. You can apply the effects of only a single <Link to="/main/feats_combination">combination feat</Link> (7 feats) to an attack.</p>
<h3 id="rule-feats_other-conduit-feats" data-hash-target>Conduit Feats</h3>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 22</Link><br/><Link to="/main/feats_conduit">Conduit feats</Link> (23 feats) grant the ability to draw energies from other planes. The effects of conduit feats are supernatural and do not function in an antimagic field or similar effect. In addition, since these abilities require energies from other planes, you cannot use them in areas that are warded against planar or dimensional travel (such as those under the effects of dimensional lock or forbiddance) or when you have been denied this ability (such as via dimensional anchor).</p>
<h3 id="rule-feats_other-monster-feats" data-hash-target>Monster Feats</h3>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 78</Link><br/><Link to="/main/feats_monster">Monster feats</Link> (42 feats) were introduced in <em>Pathfinder RPG Bestiary,</em> though without a separate tag (all feats in Bestiary are monster feats except <Link to="/feat/craft_construct">Craft Construct</Link>). Most of these feats apply specifically to monsters and might grant abilities that could be disruptive in the hands of PCs, although with the GM's permission PCs can take one of these feats if they meet the prerequisites.</p>
<p>Some monster feats allow a creature to apply metamagic feat-like effects to its spell-like abilities. You can select a spell-like ability duplicating a spell with a level less than or equal to 1/2 the monster's caster level (round down) - 1 or 2, depending on the ability. The table below summarizes these feats and what spell-like abilities they can affect by caster level.</p>
<ScrollContainer id="rule-feats_other--table-0"><table>
<thead>
<tr>
<th>Spell Level</th>
<th>Caster Level<sup><InnerLink showBacklink="backlink-rule-feats_other-ref-1-1" id="rule-feats_other-ref-1-1" data-hash-target to="rule-feats_other-1">1</InnerLink></sup></th>
<th>Caster Level<sup><InnerLink showBacklink="backlink-rule-feats_other-ref-2-1" id="rule-feats_other-ref-2-1" data-hash-target to="rule-feats_other-2">2</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>2nd</td>
<td>4th</td>
</tr>
<tr>
<td>1st</td>
<td>4th</td>
<td>6th</td>
</tr>
<tr>
<td>2nd</td>
<td>6th</td>
<td>8th</td>
</tr>
<tr>
<td>3rd</td>
<td>8th</td>
<td>10th</td>
</tr>
<tr>
<td>4th</td>
<td>10th</td>
<td>12th</td>
</tr>
<tr>
<td>5th</td>
<td>12th</td>
<td>14th</td>
</tr>
<tr>
<td>6th</td>
<td>14th</td>
<td>16th</td>
</tr>
<tr>
<td>7th</td>
<td>16th</td>
<td>18th</td>
</tr>
<tr>
<td>8th</td>
<td>18th</td>
<td>20th</td>
</tr>
<tr>
<td>9th</td>
<td>20th</td>
<td>&mdash;</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-feats_other-origin-feats" data-hash-target>Origin Feats</h3>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 16</Link>, <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road pg. 73</Link><br/><Link to="/main/feats_origin">Origin feats</Link> (9 feats) are <Link to="/race/duskwalker">duskwalker</Link> or <Link to="/race/shabti">shabti</Link> racial feats that grant additional powers based on the duskwalker's original cause of death, or the nature of the shabti's creators. Generally, a duskwalker or shabti can qualify for only a single origin feat, but at the GM's discretion, a duskwalker whose death matches multiple origin feats may be allowed to take more than one.</p>
<h3 id="rule-feats_other-performance-feats" data-hash-target>Performance Feats</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 78</Link><br/><Link to="/main/feats_performance">Performance feats</Link> (15 feats) are used when you make a <Link to="/rule/performance_combat">performance combat</Link> check, typically granting a special action that occurs when you make that check. Unless you have the <Link to="/feat/masterful_display">Masterful Display</Link> feat, you can only apply the effect of one performance feat to each performance combat check you make.</p>
<h3 id="rule-feats_other-versatile-brewing-feats" data-hash-target>Versatile Brewing Feats</h3>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 16</Link><br/>These feats allow potion brewers to concoct unusual variations in their potions, altering the potions' effects in strange and useful ways. These feats function similarly to metamagic feats, though they affect the creation of potions instead of the normal casting of spells. Level limits for potions apply to their level after the application of any relevant metamagic feats (if the feat affects the component spell's level).</p>
<h3 id="rule-feats_other-alternate-rules-feats" data-hash-target>Alternate Rules Feats</h3>
<p>Other <Link to="/main/feats_optional_rules">sets of feats</Link> (21 feats) only work if your GM is using the applicable alternate rules systems, such as <Link to="/rule/called_shots">Called Shots</Link>, <Link to="/rule/hero_points">Hero Points</Link>, <Link to="/rule/words_of_power">Words of Power</Link>, and <Link to="/rule/esoteric_material_components">Esoteric Material Components for spells</Link>.</p>
<h3 id="rule-feats_other-mythic-feats">Mythic Feats</h3>
<p><Link to="/main/feats_mythic">Mythic feats</Link> (144 feats) are used with the <Link to="/rule/mythic_rules">mythic rules</Link>, and are mostly upgrades to other, already-existing feats.</p>
<section data-footnotes>
<h3 id="rule-feats_other-label">Footnotes</h3>
<ol>
<li id="rule-feats_other-1">
<p>Bouncing, disruptive, intensified, lingering, or scarring ability. <InnerLink id="backlink-rule-feats_other-ref-1-1" data-hash-target to="rule-feats_other-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-feats_other-2">
<p>Fearsome, sickening, or traumatic ability. <InnerLink id="backlink-rule-feats_other-ref-2-1" data-hash-target to="rule-feats_other-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
export default {not_found:_not_found,basics:_basics,how_to_play:_how_to_play,common_terms:_common_terms,character_creation:_character_creation,ability_scores:_ability_scores,generating_ability_scores:_generating_ability_scores,determine_bonuses:_determine_bonuses,the_abilities:_the_abilities,strength:_strength,dexterity:_dexterity,constitution:_constitution,intelligence:_intelligence,wisdom:_wisdom,charisma:_charisma,races:_races,core_races:_core_races,less_common_races:_less_common_races,uncommon_races:_uncommon_races,rare_races:_rare_races,racial_traits:_racial_traits,classes:_classes,base_classes:_base_classes,hybrid_classes:_hybrid_classes,alternate_classes:_alternate_classes,unchained_classes:_unchained_classes,occult_classes:_occult_classes,archetypes:_archetypes,prestige_classes:_prestige_classes,traits_and_other_details:_traits_and_other_details,age:_age,height_and_weight:_height_and_weight,traits:_traits,gaining_traits:_gaining_traits,types_of_traits:_types_of_traits,restrictions_on_trait_selection:_restrictions_on_trait_selection,character_advancement:_character_advancement,advancing_your_character:_advancing_your_character,multiclassing:_multiclassing,favored_class:_favored_class,alignment:_alignment,the_nine_alignments:_the_nine_alignments,lawful_good:_lawful_good,neutral_good:_neutral_good,chaotic_good:_chaotic_good,lawful_neutral:_lawful_neutral,neutral:_neutral,chaotic_neutral:_chaotic_neutral,lawful_evil:_lawful_evil,neutral_evil:_neutral_evil,chaotic_evil:_chaotic_evil,changing_alignments:_changing_alignments,skills:_skills,skill_checks:_skill_checks,taking_10_and_taking_20:_taking_10_and_taking_20,aid_another:_aid_another,skill_descriptions:_skill_descriptions,feats:_feats,feats_basic:_feats_basic,feats_multiperson:_feats_multiperson,feats_class:_feats_class,feats_mastery:_feats_mastery,feats_roleplaying:_feats_roleplaying,feats_other:_feats_other}