import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _pursuit = {title: "Pursuit", parent_topics: ["advanced_gm_topics"], siblings: ["diseases_and_poisons","catastrophes","exploration_ucp","discovery_and_exploration","duels","verbal_duels","heists","infiltration","nemeses","performance_combat","pursuit","simple_monster_creation","skills_in_conflict","social_conflicts","spells_of_intrigue","spells_of_the_wild","taxation","treasure_generator","trophies","weather_in_the_wilderness"], subtopics: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 142</Link></p>
<p>Hunting down your enemies across hill and dale is a classic fantasy trope, and a deeply satisfying part of many books and films, yet difficult to simulate using only the Pathfinder RPG combat rules. Though <Link to="/rule/chases">chase rules</Link> exist, those are specifically designed to cover fast-paced action chases - once the journey is measured in hours rather than seconds, endurance and strategy quickly outweigh fast reflexes and quick thinking. Only by using careful tracking and cunning tricks can pursuers catch up to their quarries. The pursuit system presented below integrates these crucial elements into a structure that simulates a longer pursuit in a manner that's both fun and easy to manage.</p>
<p>There are two main types of pursuits. In a direct pursuit, the pursuers are following another group's trail wherever it may lead, with the express goal of catching up to their quarries. In this type of pursuit, the pursuers don't know where the quarries will go - they're forced to follow the trail that their prey left behind. By contrast, in a race, both sides know the destination, and the pursuers simply want to get there first, perhaps to catch their quarries or prevent them from acquiring something at the destination.</p>
</>};
const _the_core_mechanic = {title: "The Core Mechanic", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 142</Link></p>
<p>In a pursuit, each group travels along a series of terrain tiles. Each group must complete a certain amount of progress to complete a tile and move on. This amount is listed in the terrain tile for that type of terrain. One terrain tile is roughly 12 miles across (see <Link to="/rule/terrain_tiles">Terrain Tiles</Link> for more information).</p>
<p>The quarries always start out ahead of the pursuers by an amount established by the GM. In a direct pursuit, if the pursuers ever share the same terrain tile with the quarries and have made an equal or greater amount of progress on that tile, they have caught up to the quarries. In a race, whoever reaches the destination tile first wins the race, and the groups can continue with their goals from there.</p>
<p><strong className="hl">Personal Progress:</strong> To determine the amount of progress that each group makes during a 1-hour pursuit phase, first calculate the progress each party member could potentially make. This is roughly based on the number of miles the character could travel per hour when using overland movement if the tile were devoid of obstacles and rough terrain. Each party member's personal progress is equal to her base land speed divided by 10 (typically 3 for a human or 2 for a dwarf, for instance). Temporary effects that boost movement speed count only if they last for the entire 1-hour pursuit phase (like <Link to="/spell/longstrider">longstrider</Link> or <Link to="/spell/overland_flight">overland flight</Link>, but not <Link to="/spell/fly">fly</Link>).</p>
<p><strong className="hl">Group Progress:</strong> The group's progress is equal to the lowest personal progress in the party. Tactics and advantages, as explained later, can give characters ways to improve the speed of the whole group.</p>
</>};
const _building_a_pursuit = {title: "Building a Pursuit", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], subtopics: ["direct_pursuits","races_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 142</Link></p>
<p>Once the GM knows the progress numbers for both the pursuers and quarries, she is ready to construct the overall structure of the pursuit. Building a pursuit is fairly simple, but the process depends on the type of pursuit (and for direct pursuits, whether the PCs are the pursuers or the quarries).</p>
<p>When running a pursuit, it helps to have a visual aid of the area where the pursuit takes place. If the GM is using a published adventure or otherwise has access to a nice-looking map of the region, it might be interesting to have a map big enough for miniatures or tokens to sit on each tile. The GM can then draw in the tiles, providing a bit of a game board to help the players visualize the pursuit.</p>
</>};
const _direct_pursuits = {title: "Direct Pursuits", parent_topics: ["advanced_gm_topics","pursuit","building_a_pursuit"], siblings: ["direct_pursuits","races_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 142</Link></p>
<p>A direct pursuit involves a pursuing group chasing after a quarry group across a series of terrain tiles. The pursuers must succeed at Survival checks to continue tracking their quarries, as described in the <Link to="/rule/running_a_pursuit">Running a Pursuit</Link> section. Direct pursuits in which the PCs are the pursuers are the simplest and the most common type in an average campaign. It is a good idea to run a direct pursuit as the group's first pursuit to help the players and GM alike to get a grasp of the system.</p>
<p><strong className="hl">PCs as Pursuers:</strong> In a direct pursuit with NPC quarries, the GM establishes a linear series of terrain tiles that the quarries will follow, and the pursuers proceed along those tiles after their prey. See the section on <Link to="/rule/terrain_tiles">Terrain Tiles</Link> for common types of terrain tiles. For a direct pursuit that is even simpler to run, don't give the quarry group access to use all the tools described later in this section. For instance, the quarries might not attempt to gain advantages, and they might use tactics sparingly - and only if it makes the pursuit more interesting. Remember that if the quarry group doesn't use those tools, the pursuit will be much easier for the PCs.</p>
<p><strong className="hl">PCs as Quarries:</strong> If the PCs are quarries, direct pursuits become a bit more complicated, as the PCs have options for which path they choose and which type of terrain they enter as they try to shake their pursuers. The GM should present pursuit tiles arranged in more than a simple linear path. In fact, the GM can divide a map of the general region into terrain tiles as appropriate, perhaps using a hex grid to match the <Link to="/rule/exploration_ucp">system for exploration</Link>.</p>
<p><strong className="hl">Ending a Direct Pursuit:</strong> A direct pursuit can end in one of four ways. When the pursuers are on the same tile as the quarries and have made equal or greater progress than the quarries, the pursuers catch their quarries. When the quarries reach a location where they stop progressing (such as a safe haven or stronghold), pursuit ends and may turn into a siege. When the pursuers can't possibly succeed at the Survival check to continue tracking their quarries and have exhausted any other tactics that might help relocate the trail, their quarries have eluded them. Finally, the pursuers can voluntarily give up the pursuit. Optionally, the GM can choose a distance at which the quarries are so far ahead that the pursuers have no real chance of catching up. For instance, the GM might decide that if the quarry group is five tiles ahead of the pursuers, they've escaped; this number might be smaller in jungles or other dense terrain.</p>
</>};
const _races_ui = {title: "races_ui", parent_topics: ["advanced_gm_topics","pursuit","building_a_pursuit"], siblings: ["direct_pursuits","races_ui"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 143</Link></p>
<p>In a race, both groups have far more options in their travels. As with a direct pursuit in which the PCs are the quarries, the GM should include more options for terrain tiles than just a linear path. The two groups might start on different tiles and move through different types of terrain during the race. A race features no quarry or pursuer. A race ends when one group reaches the designated destination.</p>
</>};
const _running_a_pursuit = {title: "Running a Pursuit", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], subtopics: ["direct_pursuits_and_tracking"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 143</Link></p>
<p>Pursuits proceed in 1-hour pursuit phases, during which each group (or the group that is moving, if one group is resting) makes progress toward completing its current terrain tile. The group can potentially attempt to use <Link to="/rule/tactics">tactics</Link> or gain an <Link to="/rule/pursuit_advantages">advantage</Link> to outthink or outperform the enemy.</p>
<p>Each day of pursuit consists of eight 1-hour pursuit phases. Pursuits take place over a long period of time and cover plenty of ground, so pursuers and quarries might encounter terrain tile denizens or environmental hazards along the way. Consider using these encounters to provide spikes of tension and to control the pursuit's pacing.</p>
</>};
const _direct_pursuits_and_tracking = {title: "Direct Pursuits and Tracking", parent_topics: ["advanced_gm_topics","pursuit","running_a_pursuit"], siblings: ["direct_pursuits_and_tracking"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 143</Link></p>
<p>In a direct pursuit, the pursuers need to attempt a Survival check at the start of each pursuit phase in order to make any progress at all. A failure means they have lost the trail and must spend that hour trying to find it. Success means the pursuers progress at their speed for that phase. The base DC is either 5, 10, 15, or 20, depending on the type of ground dominant in the terrain tile (very soft, soft, firm, or hard, respectively; see the <Link to="/skill/survival">Survival</Link> skill for more details). This DC increases by 1 for every day behind the quarries, but it decreases by 1 for every three members in the quarry group.</p>
<p>The pursuing group has one main tracker, but other members can assist using the aid another action. Any pursuer participating in tracking (either as the main tracker or assisting) halves her personal progress for that pursuit phase. If the tracking pursuer has a much greater speed than the slowest member of his group, this might not lower the group's progress.</p>
</>};
const _terrain_tiles = {title: "Terrain Tiles", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 143</Link></p>
<p>The following are some of the most common types of terrain tiles a group might encounter during a pursuit. One terrain tile is roughly 12 miles across (the same size as hexes in the <Link to="/rule/sandbox_exploration">hex-based exploration system</Link>), though pursuit is abstracted enough that the size can vary. Especially large tracts of one terrain type should consist of multiple tiles. The GM might want to customize these options and create terrain tiles appropriate for the situation. For instance, if the PCs use <Link to="/spell/aerial_tracks">aerial tracks</Link> to pursue foes through the clouds, the GM should create a sky terrain tile.</p>
<p>Each terrain tile's stat block lists the amount of progress a group needs to make to pass off of that tile and onto the next one, followed by the typical type of ground and the base Survival DC in parentheses, plus the maximum number of advantages a group can employ on that type of tile. This limit resets when the group enters a new 1-hour pursuit phase. The number of advantages is smaller the easier the terrain is to navigate, as there's not many tricks that can speed up travel along a road, for instance, without using a vehicle or magical means of conveyance.</p>
<h3 id="rule-terrain_tiles-inclement-weather">Inclement Weather</h3>
<p>Bad weather, especially precipitation, can affect both the progress a group makes and the DCs of Survival checks required during pursuits.</p>
<p><strong className="hl">Progress:</strong> Heavy precipitation, strong winds, and other environmental factors might impede a group's progress. For brief storms lasting one or two pursuit phases, reduce the group's progress by 1 in each pursuit phase. If an entire terrain tile has particularly nasty weather (like a high mountain plagued by winds or a jungle during a monsoon), instead add between 4 and 8 to the tile's progress to complete, depending on the weather's severity. Increase the tile's number of maximum advantages by 1 so the travelers have the opportunity to find a way to overcome the nasty weather.</p>
<p><strong className="hl">Tracking:</strong> If there is rain during a direct pursuit, increase the DC of the Survival check by 1 for every pursuit phase that it rained. If it snowed, increase the DC by 10 instead. To track the duration of the precipitation during a direct pursuit, mark down the tile where the quarries are and the amount of progress they have made when the precipitation begins, then mark down the progress they had made when the precipitation ends. When the pursuers are on that tile and have made an amount of progress equal to or greater than the lower progress value, use the increased Survival DCs. After the pursuers have passed the higher progress value, the Survival DCs return to normal. If the precipitation occurs before the quarries entered an area, the Survival DCs to follow the trail might be reduced since the ground becomes very soft mud or covered in snow.</p>
<h3 id="rule-terrain_tiles-cold">Cold</h3>
<p><strong>Progress to Complete</strong> 12<br/><strong>Ground</strong> soft (DC 10) or very soft (DC 5); <strong>Maximum Advantages</strong> 2</p>
<p>Cold terrain includes tundras, glaciers, and the like. The rules for <Link to="/rule/cold_dangers">environmental cold dangers</Link> apply in most cases, potentially affecting both groups.</p>
<h3 id="rule-terrain_tiles-desert">Desert</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> very soft (DC 5), soft (DC 10), or firm (DC 15); <strong>Maximum Advantages</strong> 3</p>
<p>Desert terrain includes warm and sandy areas. The rules for <Link to="/rule/heat_dangers">environmental heat dangers</Link> apply in most cases, potentially affecting both groups.</p>
<h3 id="rule-terrain_tiles-forest">Forest</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> firm (DC 15); <strong>Maximum Advantages</strong> 3</p>
<p>Forest terrain includes both deciduous and coniferous forests, but not dense jungles or rain forests.</p>
<h3 id="rule-terrain_tiles-hill">Hill</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> firm (DC 15); <strong>Maximum Advantages</strong> 3</p>
<p>Hilly terrain includes areas with plenty of uphill and downhill travel, but not mountains.</p>
<h3 id="rule-terrain_tiles-jungle">Jungle</h3>
<p><strong>Progress to Complete</strong> 32<br/><strong>Ground</strong> firm (DC 15); <strong>Maximum Advantages</strong> 8</p>
<p>Jungle terrain is denser than forest terrain, and it also includes rain forests. Jungle terrain is particularly slow going, but there is ample opportunity to gain an advantage over pursuers or quarries.</p>
<h3 id="rule-terrain_tiles-mountain">Mountain</h3>
<p><strong>Progress to Complete</strong> 24<br/><strong>Ground</strong> firm (DC 15) or hard (DC 20); <strong>Maximum Advantages</strong> 6</p>
<p>Mountainous terrain contains areas that require climbing, as well as the potential for steep cliffs and precipitous drops. If the need to climb is especially ubiquitous or if the characters are climbing above the timber line (use the rules for <Link to="/rule/cold_dangers">cold dangers</Link>), a mountain tile can have more maximum advantages and take more progress in order to complete.</p>
<h3 id="rule-terrain_tiles-plain">Plain</h3>
<p><strong>Progress to Complete</strong> 8<br/><strong>Ground</strong> firm (DC 15); <strong>Maximum Advantages</strong> 0</p>
<p>The plains terrain is a basic terrain type with no particular hindrances or advantages, and often represents a tame, flat grassland that isn't difficult to travel across. A wild and overgrown savannah tile can easily have more maximum advantages and take more progress to complete. The statistics for a plain tile also suit many other types of readily navigable ground.</p>
<h3 id="rule-terrain_tiles-planar">Planar</h3>
<p><strong>Progress to Complete</strong> varies<br/><strong>Ground</strong> varies; <strong>Maximum Advantages</strong> varies</p>
<p>Planes vary so wildly in their nature that it would be impossible to create a listing that covers them all in any meaningful way. Sometimes, an area on the planes can be simulated by using another sort of terrain tile. On other planes, tracking becomes nearly impossible. On planes with truly strange or exotic features, such as highly morphic planes, it's appropriate to offer plenty of <Link to="/rule/sample_advantages">know the terrain advantages</Link> and other advantages involving the plane's nature (such as an advantage using the Fly skill to understand and control subjective gravity).</p>
<h3 id="rule-terrain_tiles-road">Road</h3>
<p><strong>Progress to Complete</strong> 8<br/><strong>Ground</strong> firm (DC 15) or hard (DC 20); <strong>Maximum Advantages</strong> 0</p>
<p>A dirt or cobblestone road can let a group move quickly without leaving as clear a trail as they would in unworked terrain. However, traveling on a road makes it more likely they'll be seen. The <Link to="/rule/group_tactics">gather information tactic</Link> can make it easier to track road travelers. Old, unused, and overgrown roads are treated like plains.</p>
<h3 id="rule-terrain_tiles-swamp">Swamp</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> very soft (DC 5) or soft (DC 10); <strong>Maximum Advantages</strong> 3</p>
<p>Swampy terrain includes bogs, marshes, and fens, as well as any other sort of wetlands. A swamp tile with a significant number of deep areas, quicksand, or more can easily have more maximum advantages and take more progress to complete.</p>
<h3 id="rule-terrain_tiles-underground">Underground</h3>
<p><strong>Progress to Complete</strong> 12<br/><strong>Ground</strong> hard (DC 20); <strong>Maximum Advantages</strong> 2</p>
<p>Underground terrain includes caverns and dungeons. While the ground is hard - making it one of the most difficult terrains through which to track prey - the lack of rain or snow can make it much easier for pursuers to catch up to their quarries. While the typical underground tile only offers a small number of obstacles and hindrances, an underground tile with extremely narrow tunnels, yawning chasms, treacherous dips and climbs, or other sorts of features can easily have more maximum advantages and take more progress to complete.</p>
<h3 id="rule-terrain_tiles-underwater">Underwater</h3>
<p><strong>Progress to Complete</strong> varies<br/><strong>Ground</strong> varies; <strong>Maximum Advantages</strong> varies</p>
<p>Underwater pursuits also require more planning than other types. Because travel speeds can very wildly, a pursuit might end up being trivial if one side has members with swim speeds and the other doesn't. Typically, if so much of the pursuit occurs underwater that it takes up an entire terrain tile or more, and both groups are on equal footing in terms of their ability to move underwater, it's best to find an analog among the other terrain tiles and use that instead. For instance, traversing an underwater garden might work like a jungle, traversing open stretches of water might work like a plain, and swimming under an iceberg might be cold terrain or a mountain (and could use the rules for <Link to="/rule/cold_dangers">cold dangers</Link>). This also assumes the groups can breathe underwater for enough pursuit phases to traverse an underwater tile.</p>
<h3 id="rule-terrain_tiles-urban">Urban</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> firm (DC 15) or hard (DC 20); <strong>Maximum Advantages</strong> 3</p>
<p>In theory, urban terrain covers settlements from a thorp to a metropolis, but for an entire terrain tile to count as urban, it must be a large enough city to warrant a tile (though smaller settlements might certainly appear on another terrain's tile, thus opening up different tactics or advantages). Tracking through an urban environment can be extremely challenging, given the sheer number of creatures present, but that also makes the <Link to="/rule/group_tactics">gather information tactic</Link> more effective. Despite the relative ease of moving through a city, an urban tile takes longer to navigate because of the difficulty of tracking creatures through a heavily populated environment.</p>
<h3 id="rule-terrain_tiles-water">Water</h3>
<p><strong>Progress to Complete</strong> 16<br/><strong>Ground</strong> hard (DC 20, see text); <strong>Maximum Advantages</strong> 3</p>
<p>A lake or an area with many rivers counts as a water tile. Because such a tile contains little ground, Survival checks to track involve following wakes or looking for refuse quarries left behind, functioning the same as hard ground. Rapids might cause a water tile to take more progress to complete, and water features with currents typically have more maximum advantages. A group traveling on water usually needs a boat or raft, and uses the speed of that vessel. Swimmers must attempt a DC 20 Swim check for each 1-hour pursuit phase or take 1d6 points of nonlethal damage (See the <Link to="/skill/swim">Swim</Link> skill for more information). The <Link to="/rule/individual_tactics">special movement tactic</Link> allows a creature with a swim speed to traverse water rapidly.</p>
</>};
const _pursuit_advantages = {title: "Pursuit Advantages", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], subtopics: ["sample_advantages"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 145</Link></p>
<p>During each 1-hour pursuit phase, any member of a group who is not spending that phase tracking can attempt to gain an advantage, and a group can gain up to the maximum number of advantages allowed by the terrain tile. The sample advantages listed below mention the terrain types most likely to allow them, but the advantages available for any given tile - and even hour-by-hour across the same tile - can vary significantly. The GM chooses which ones apply at any given time in a way that adds flavor to the pursuit's current location in the same way that the <Link to="/rule/chases">chase rules</Link> have a set of options available at each location in a chase.</p>
<p><strong className="hl">Advantage Bonus:</strong> If a character succeeds at gaining an advantage, the group's progress increases by 1 for that pursuit phase, unless otherwise specified. Attempting and failing to gain an advantage reduces that character's personal progress by 1, unless otherwise specified, due to the effort they expend. If that person had a higher speed than the slowest member, this might not slow the group as a whole. Each of the sample advantages list an appropriate skill.</p>
<p>Failing a check to gain an advantage by 5 or more reduces the entire group's progress by 1, unless otherwise specified, as the character made such a large error that it hindered all of his allies. The increase or reduction to progress applies after any multiplication or division due to tracking, hustling, and the like. Because advantages represent more than just speed - finding shortcuts, for example - they can cause the group to make more progress than the fastest person's personal progress.</p>
<p>Checks attempted to gain an advantage represent an entire hour's worth of checks, so temporary modifiers that don't last the entire time cannot be applied. These skills can't be rerolled by an effect that would reroll a single check, and the character can't take 10 or 20.</p>
</>};
const _sample_advantages = {title: "Sample Advantages", parent_topics: ["advanced_gm_topics","pursuit","pursuit_advantages"], siblings: ["sample_advantages"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 146</Link></p>
<p>The following advantages are just a sample of those possible. Each advantage lists the terrains most likely to allow it, though there are certainly exceptions. Customize the selected advantage to fit the particulars of the situation. It is possible to choose more than one of the same category of advantage for the same terrain tile (for instance, a jungle with multiple know the terrain advantages might require different Knowledge [nature] DCs).</p>
<p><strong className="hl">Climbing Lead (Hill or Mountain):</strong> A character can attempt a Climb check to ascend ahead of the others with a rope to help his allies navigate the worst of the area. The DC varies based on the difficulty of climbing.</p>
<p><strong className="hl">Craft or Modify Tools (Any):</strong> A character can attempt a Craft check to fashion or modify specialized tools (such as footwear to travel over icy surfaces). Unlike normal, attempting to gain this advantage requires the character to spend 1 pursuit phase without moving per check she attempts. This either reduces the group's progress to 0 or requires her to split up and catch up later (see the <Link to="/rule/individual_tactics">split up tactic</Link>). Once she has succeeded once per character, the advantage applies for the rest of the current tile, without further action on her part, unless the situation changes enough that she needs to modify the tools again. The DC varies based on the complexity of the gear, though it is typically 15 (for a high-quality item). If the character is modifying similar items to what she needs rather than crafting brand-new ones, she can attempt two checks for each phase she doesn't move.</p>
<p><strong className="hl">Crowd Control (Urban):</strong> A character can attempt an Intimidate check to thin the crowds, making it easier for the group to progress. The DC depends on the composition and size of the crowd.</p>
<p><strong className="hl">Evade Hazards (Any):</strong> A character can attempt a Survival check to recognize hazards and rough areas and ensure that the group skirts around them when possible. The DC varies depending on how devious or hidden the hazards might be.</p>
<p><strong className="hl">Fancy Footwork (Any):</strong> A character can attempt an Acrobatics check to help balance over an icy or wet area, leap over quicksand or rooftops, or otherwise move more rapidly. By using ropes, finding a safe path, or otherwise leading the way, the character helps her allies move faster as well. The DC varies depending on how treacherous the footing is.</p>
<p><strong className="hl">Know the Area (Any):</strong> A character can attempt a Knowledge (geography) check to allow the characters to exploit nearby useful terrain features that he remembers while avoiding dangerous or obstructive features. The DC varies based on the feature's obscurity.</p>
<p><strong className="hl">Know the Terrain (Any):</strong> A character can attempt an appropriate Knowledge check (usually nature, but dungeoneering underground, local in an urban environment, and planes in a planar environment) to deduce something about the current terrain that gives her group an advantage. The DC varies based on the particulars of the deduction.</p>
<p><strong className="hl">Notice Shortcut (Any):</strong> A character can attempt a Perception check to notice a shortcut or other hidden feature that grants an advantage. This advantage is not as helpful for pursuers in a direct pursuit unless they split up or deduce a point where they are sure to intersect the quarries' trail.</p>
<p><strong className="hl">Professional Opinion (Any):</strong> A character with a relevant profession might be able to grant the party a significant advantage in a pursuit. For instance, in a pursuit through a mine, a character can attempt a Profession (miner) check to learn about the mine's layout based on markings or other indicators the miners left for their colleagues.</p>
<p><strong className="hl">Tight Squeeze (Underground):</strong> A character can attempt an Escape Artist check to fit more quickly and easily through narrow tunnels. This allows her to scout ahead to find more direct passages, set explosives to open up passages, or otherwise clear the way for allies. The DC varies depending on how tight the squeeze is.</p>
</>};
const _pursuit_tactics = {title: "Pursuit Tactics", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], subtopics: ["individual_tactics","group_tactics"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 146</Link></p>
<p>Tactics are the key to shaking a tenacious pursuer or capturing an elusive quarry. The following tactics present many of the most basic methods for doing so, but if the PCs come up with a new tactic, the GM should use these examples as guidelines. Tactics can affect a single character, multiple characters, or the whole group. There is no limit to how many tactics a character or group can use, but common sense prevents using two contradictory tactics. Characters and groups decide which tactics they are using for each 1-hour pursuit phase, though some last for multiple phases or until the characters using them decide to stop. Some tactics require the group to be either the pursuers or the quarries, and can't be used in races.</p>
</>};
const _individual_tactics = {title: "Individual Tactics", parent_topics: ["advanced_gm_topics","pursuit","pursuit_tactics"], siblings: ["individual_tactics","group_tactics"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 146</Link></p>
<p>These tactics apply to individual characters, and each character decides whether she's using the tactic.</p>
<p><strong className="hl">Fast Track:</strong> A character using this tactic does not reduce her progress by half while tracking. However, she takes a -5 penalty on the Survival check to track. Abilities such as the <Link to="/class/ranger">ranger's</Link> master hunter class feature negate this penalty.</p>
<p><strong className="hl">Obscure Trail:</strong> Mark the terrain tile where a character starts and stops using this tactic. A character using this tactic reduces her progress by half in order to increase the DC to track her group by 5 throughout the marked section. This tactic requires the group to be quarries.</p>
<p><strong className="hl">Recovery:</strong> A character can spend a phase tending to the health of her or her allies. This allows the character to cast healing spells, for example, which can be useful for removing nonlethal damage if the group has been hustling or making a forced march (see <Link to="/rule/group_tactics">Group Tactics</Link>). A character that spends a phase helping with recovery can't attempt to track or gain an advantage in that phase.</p>
<p><strong className="hl">Special Movement:</strong> A character with consistent access to a fly speed, swim speed, or the like for a full pursuit phase might be able to move particularly quickly over the appropriate type of terrain; though, for instance, a character flying above a jungle canopy would not be able to follow a trail below.</p>
</>};
const _group_tactics = {title: "Group Tactics", parent_topics: ["advanced_gm_topics","pursuit","pursuit_tactics"], siblings: ["individual_tactics","group_tactics"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 147</Link></p>
<p>These tactics apply to the group, and can be used only if all characters agree to do so.</p>
<p><strong className="hl">Forced March:</strong> A group using this tactic takes a ninth pursuit phase in the same day, directly after the eighth phase. As with a normal forced march during <Link to="/rule/overland_movement">overland movement</Link>, this tactic causes each character to attempt a Constitution check or take 1d6 points of nonlethal damage (and possibly become fatigued).</p>
<p><strong className="hl">Gather Information:</strong> A group that is stymied in tracking their adversaries can attempt to gather information with a Diplomacy check, though it takes 2 pursuit phases, and it requires either that there are people around to gather information from or access to special abilities that allow them to question things like animals, plants, or stones. The DC is typically 15, though it varies depending on the area and how sneaky the quarries were being. The information is sufficient to make progress during that pursuit phase without a successful Survival check.</p>
<p><strong className="hl">Hustle:</strong> This tactic is analogous to hustling during overland movement. A group using this tactic can double the progress they make during that pursuit phase. They can use it once per day without consequences, but using it again requires all members of the group to take 1 point of nonlethal damage and become fatigued. Each additional hour spent hustling deals twice the amount of nonlethal damage of the previous hour. A group can hustle during a forced march, but they take the nonlethal damage and conditions from both, meaning a healthy group usually becomes exhausted when they do so. Hustling is a useful tactic with fairly light repercussions, but the group spends all of its time moving. This means that the obscure trail, recovery, gather information, and set a trap tactics can't be used when hustling. Unless an <Link to="/rule/pursuit_advantages">advantage</Link> is focused specifically on movement (such as climbing lead or fancy footwork), it can't be gained while hustling.</p>
<p><strong className="hl">Intentional Hardships:</strong> A quarry group using this tactic chooses a circuitous or treacherous path to attempt to shake pursuers. This decreases their group's progress by 2 as long as they use the tactic. Mark the terrain tile and amount of progress the group made on that tile when they start and stop using this tactic. While the pursuers are in the same area, their progress is reduced by 2, but their number of maximum advantages is increased by 2. Like advantages, this reduction applies after any multiplication or division due to tracking, hustling, and the like. For simplicity's sake, the GM might want to require the quarry group to use intentional hardships when they first enter a terrain tile and stick to it throughout that terrain tile.</p>
<p><strong className="hl">Set a Trap:</strong> A more extreme version of intentional hardships, this tactic involves leaving a trap or ambush for the pursuers somewhere along the path. Depending on the situation, this trap could take a varying amount of time to enact. Make a note of the terrain tile where the quarries left the trap or ambush and adjudicate it as a normal encounter. If a trap or ambush would involve the quarries themselves, they halt their progress until they spring the trap, and springing the trap likely ends the pursuit unless they split the group and sent someone ahead toward their destination. This tactic requires the group to be quarries.</p>
<p><strong className="hl">Split Up:</strong> This tactic allows a group to split into multiple groups. For example, quarries might choose to do so to ensure that at least one character gets away (or to send off a decoy group that doesn't carry what the pursuers want), whereas pursuers might choose to do so in order to attempt more Survival checks and have a greater chance not to lose the trail, or they might leave a tired but faster character behind to catch up later. Pursuers who split up will probably need to use magic, a smoke signal, or other means to arrange a rendezvous. This makes the pursuit more complicated, so GMs might want to consider restricting this tactic for their groups' first few pursuits.</p>
</>};
const _damage_fatigue_and_exhaustion = {title: "Damage, Fatigue, and Exhaustion", parent_topics: ["advanced_gm_topics","pursuit"], siblings: ["the_core_mechanic","building_a_pursuit","running_a_pursuit","terrain_tiles","pursuit_advantages","pursuit_tactics","damage_fatigue_and_exhaustion"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 147</Link></p>
<p>Damage taken during a pursuit follows all the normal rules for damage. A healer can use the <Link to="/rule/group_tactics">recovery tactic</Link> to take a break and cast healing spells (or spells that remove afflictions or conditions, for that matter).</p>
<p>The <Link to="/rule/group_tactics">forced march and hustle tactics</Link> cause nonlethal damage, and can cause characters to become fatigued (or exhausted if they were already fatigued). This nonlethal damage goes away at a rate of 1 per hour, as normal, and a character can use the recovery tactic to remove more. However, a character who is fatigued or exhausted takes any penalties that apply before the nonlethal damage is healed and the conditions removed.</p>
<p>The following penalties apply to characters who become fatigued or exhausted.</p>
<p><strong className="hl">Fatigued:</strong> A fatigued character reduces her personal progress by 1. This reduction applies before any multiplication or division due to the character tracking, hustling, or performing similar activities.</p>
<p><strong className="hl">Exhausted:</strong> An exhausted character halves her personal progress. This stacks with tactics that halve her progress, leaving her at 1/4 of her normal personal progress, or tactics that double her progress, leaving her at her normal personal progress. A character that becomes fatigued by a tactic while already exhausted falls unconscious.</p>
<p><strong className="hl">Unconscious:</strong> An unconscious character has a personal progress of 0, and can't increase it as long as she remains unconscious. As with fatigue and exhaustion, the character must take this penalty for the entire phase in which she recovers from unconsciousness.</p>
</>};
const _simple_monster_creation = {title: "Simple Monster Creation", parent_topics: ["advanced_gm_topics"], siblings: ["diseases_and_poisons","catastrophes","exploration_ucp","discovery_and_exploration","duels","verbal_duels","heists","infiltration","nemeses","performance_combat","pursuit","simple_monster_creation","skills_in_conflict","social_conflicts","spells_of_intrigue","spells_of_the_wild","taxation","treasure_generator","trophies","weather_in_the_wilderness"], subtopics: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 194</Link></p>
<p>Monsters can be truly memorable and entertaining, but they can also be a lot of work if the GM needs to customize them or create new ones. The standard methods for creating monsters and NPCs are similar to those for creating player characters, but striking the right power balance can be challenging.</p>
<p>The simple monster creation system presented here lets you create a monster and have it ready for your table quickly. This means bending the normal rules to cut out time-consuming steps, such as picking a ton of 1st-level spells a monster is unlikely to cast, selecting magic items according to an NPC's budget, or recalculating statistics based on spell effects. Rather than making you build a monster from scratch, this system uses baselines derived from <Link to="/rule/step_2_target_statistics">Table 1-1: Monster Statistics by CR</Link>. This gives you the flexibility to start off with almost-final statistics and make a few adjustments as needed to create a formidable unchained monster.</p>
</>};
const _step_1_array = {title: "Step 1: Array", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 196</Link></p>
<p>The arrays presented in this section allow you to quickly derive the statistics for three broad types of monsters. Each one allows for a fair amount of customization - especially through monster options - but the monster's statistics stay close to the baselines set by PC progressions and <Link to="/rule/step_2_target_statistics">Table 1-1 in the Bestiary</Link>. The options roughly correspond to the combat, skill, and spell roles used for monster advancement in the normal monster creation system. Therefore, if you were to recreate a monster with the combat role (such as an ogre or vrock), you would start with the combatant array. You can choose whichever array you prefer, unless the monster is meant to mimic an NPC created with a character class from <Link to="/rule/step_2_creature_type_or_class_graft">Step 2</Link> or a template from <Link to="/rule/step_4_template_graft">Step 4</Link>. The three arrays are as follows.</p>
<p><strong className="hl">Combatant:</strong> Any monster that focuses primarily on its physical power uses the combatant array. High attack bonuses, hit points, and defenses are the defining traits of this array. A combatant's skills are weak, and the majority of its options are in the combat category. Most creatures of low or no Intelligence should be combatants, as should intelligent monsters with combat training.</p>
<p><strong className="hl">Expert:</strong> A monster uses the expert array if it's focused on skills, interaction, or cunning tactics. This array provides moderate statistics in most areas, but strong skills and extensive monster options. The expert array is the ideal way to replicate skill-based NPCs such as rogues or bards. In many cases, expert monsters are more likely to attempt tricking or befriending the PCs than fight.</p>
<p><strong className="hl">Spellcaster:</strong> If a monster relies primarily on spells, it uses the spellcaster array. Though the monster's statistics are typically weak overall, it gains access to a sizable number of spells from the lists in <Link to="/rule/step_6_spells">Step 6</Link>. Because this system uses benchmark numbers instead of calculating individual statistics, a monster that uses its spells primarily to increase its own abilities (so that it can become a strong melee combatant, for instance) should use the array that best matches the way it will be used in the game rather than using the spellcaster array just because it can cast magic.</p>
</>};
const _character_classes = {title: "Character Classes", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_1_array"], siblings: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 196</Link></p>
<p>You might create a monster that should use the statistics for a character class, either because the monster would normally be created by adding class levels to the monster or because you think the monster's abilities are similar enough to those of a character class that it would be quicker to start with the class. In this case, look ahead to the <Link to="/rule/class_grafts">class grafts</Link> and use the array required by the class you desire. Keep in mind that a monster with class levels typically has a CR equal to its class level - 1, so if you want your monster to have particular level-dependent class abilities, you'll want to use the statistics for a CR that's 1 lower than the target class level.</p>
<p>As mentioned before, a monster that primarily relies on its racial or innate abilities with only a small number of class levels might be built differently. You can create the monster using its <Link to="/rule/creature_type_grafts">creature type graft</Link>, then refer to the related class graft for ideas of which monster options to select.</p>
</>};
const _using_an_array = {title: "Using an Array", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_1_array"], siblings: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 196</Link></p>
<p>In the simple monster creation system, you don't use the normal calculations to generate your monster's final statistics. Instead, you take the numbers directly from the array, then make a few adjustments based on grafts and monster options later along in the process. In other words, if the array says the monster's Fortitude saving throw bonus is +11, that number is its total bonus - it's assumed to already include all bonuses from Hit Dice, classes, Constitution modifier, and magic items, regardless of later adjustments.</p>
<p>Each array consists of two tables: the first contains most of the monster's statistics and choices, and the second contains the array's options for attacks and damage values. To start creating your monster's statistics, find the table with the appropriate array and go to the row for your monster's desired CR. Record the statistics from that row according to the following guidelines.</p>
<p>CR, AC, Saving Throws, CMD, hp, and DCs: Record these numbers as they appear on the table. A few of these might change in later stages, but there aren't any additional choices to make for these numbers during this step of the process. Note that for AC, the first number is the normal AC, the second is touch AC, and the third is flat-footed AC. For saving throws, you can swap one save with another to better suits your monster. The two DC columns are used for all the monster's abilities and spells. For any ability that isn't a spell, use the ability DC listed. For any spell the monster can cast, add the spell's level to the number from the spell DC column. Use the spell's cleric or sorcerer/ wizard level if multiple classes can cast it. If neither of those classes has the spell, use the highest spell level listed in the spell's description.</p>
<p><strong className="hl">Ability Modifiers:</strong> For this step, you'll assign the modifiers for the monster's three most important ability scores. You can use whatever criteria you like to assign the ability modifiers; each array's section gives suggestions for typical choices. All other abilities have a modifier of +0, though you can give the monster a penalty if thematically appropriate. Note that these entries are the ability modifiers, not the ability scores, since you'll primarily use them as the default modifiers for skill checks and ability checks. Write down the ability modifier assignments you've chosen.</p>
<p><strong className="hl">Skills:</strong> All skills are divided into two categories, representing those the monster has mastered and ones it's merely good at. The number with the plus before it is the skill's bonus, and the number in parentheses indicates how many skills the monster gets at that level of expertise. For instance, a master entry of "+11 (2)" means that the monster gets two skills at +11, and any other "master skills" that grafts provide will also be at +11. These bonuses are assumed to include the monster's ability score bonuses, ranks, feats, and racial modifiers as appropriate to get the value given here. Write down the monster's good and master bonuses, and note how many skills it has with each bonus. Because grafts can alter a monster's number of skills or bestow or deny specific skills, you'll decide on specific skills in <Link to="/rule/step_8_skills">Step 8</Link>.</p>
<p><strong className="hl">Options:</strong> Most of a monster's abilities beyond its base statistics come from monster options. There are four categories of options: combat, magic, social, and universal. Each entry lists how many options of a given category that monster can take, with "any" meaning that there's no category restriction for those options. Make a note of how many options of each type the monster gets. You define the options in <Link to="/rule/step_7_monster_options">Step 7</Link>.</p>
<p><strong className="hl">Attacks and Damage:</strong> The second table shows four options for a monster's attacks. Two columns show weapon-based attacks, one with a high bonus and one with a low bonus. Use the higher attack and damage values for the monster's main attack. If the monster has additional attacks that are less powerful, use the lower attack and damage values for those attacks - a creature that's primarily a ranged attacker would use high values for its longbow attacks and low values for its longsword attacks. You can mix and match these values. For example, since ranged attacks typically deal less damage, you might have a longbow attack use the high attack value but the low damage value.</p>
<p>The remaining two columns are for natural attacks - either two attacks (two slam or claw attacks, for example) or one powerful primary attack and two weaker secondary attacks (such as a bite and two claws). At some levels, a monster might have a negative number for an attack bonus; this means that number of attacks is probably too strong for a monster of that CR. These entries are included for completeness.</p>
<p>The number in parentheses indicates the amount of damage each attack deals. For example, an entry that reads "+10/+5 (10)" means that when the monster makes a full attack, it makes one attack at +10 and one at +5, and that each attack deals an average of 10 points of damage. An entry reading "1 at +10 (10), 2 at +5 (5)" indicates that the monster would make one attack at +10 that deals 10 points of damage and two at +5 that deal 5 points of damage each.</p>
<p>Write down the attack bonuses and the damage for the monster's attacks. In <Link to="/rule/step_9_damage">Step 9</Link>, you'll assign dice to the damage values. If your monster should have a number of attacks different from what you see here (four tentacle attacks, for example), that section includes advice for how to alter the monster's attacks using <Link to="/rule/step_2_target_statistics">Table 1-1</Link>.</p>
<h3 id="rule-using_an_array-reading-array-entries">Reading Array Entries</h3>
<p>Each section on the following pages briefly explains the concept of a particular array, then provides the following tools.</p>
<p><strong className="hl">Themes:</strong> These examples detail some common types of monsters this array can be used to create. The theme entry suggests the main ability scores, skills, and monster options the monster might take. Spellcaster entries also include suggested spell lists. All these listings are simply suggestions, and are provided to point you toward the best monster options quickly.</p>
<p><strong className="hl">Main Statistics:</strong> Most statistics for the monster array appear on the large table at the bottom of the left-hand page, organized by CR.</p>
<p><strong className="hl">Attack Statistics:</strong> The array continues on the right-hand page with attack options and damage values by CR.</p>
</>};
const _combatant_array = {title: "Combatant Array", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_1_array"], siblings: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 198</Link></p>
<p>The most common type of monster in most regions, a combatant is at its best on the battlefield. A combatant monster typically has high physical statistics and powerful attacks. Strong defenses, hit points, and attacks take precedence over skills and options. This array covers a wide variety of creatures, from brutish beasts to experienced generals.</p>
<p>Some common combatants include most animals and vermin, most demons, chokers, most giants, ghouls, golems, ogres, trolls, and worgs.</p>
<h3 id="rule-combatant_array-combatant-themes">Combatant Themes</h3>
<p>The following themes reflect many of the styles combatants might use to fight.</p>
<p><strong className="hl">Beater:</strong> Big and rugged, the beater is all about hitting things hard and soaking up a ton of punishment. Ability modifiers-Strength and Constitution; skills-Climb, Intimidate, Swim; combat options-damage reduction, diehard, extra hit points, power attack, rend.</p>
<p><strong className="hl">Commander:</strong> Leading by example, the commander fights while inspiring allies to greater success. Ability modifiers-Strength and Charisma; skills-Acrobatics, Diplomacy, Intimidate, Ride; combat options-challenge, combatant's touch, improved initiative; social options-bolstering presence, heroic recovery.</p>
<p><strong className="hl">Hunter:</strong> Trained to fight by stalking its foes, the hunter thrives on the element of surprise. Ability modifiers-Strength or Dexterity and Wisdom; skills-Climb, Handle Animal, Perception, Survival, Swim; combat options-bleed, critical striker, favored enemy, trap squares; social option-alertness.</p>
<p><strong className="hl">Rider:</strong> Mounted on another creature, the rider attacks using its advantageous position. Ability modifiers-Dexterity and Strength; skills-Handle Animal, Intimidate, Ride; combat options-improved initiative, mounted master, powerful charge.</p>
<p><strong className="hl">Sharpshooter:</strong> This monster attacks from a distance, typically using a bow, crossbow, or firearm. Ability modifiers-Dexterity and Wisdom; skills-Acrobatics, Perception, Stealth; combat options-extra attack, far shot, fast reload, firearm savvy, precise shot; universal option-magic weapon.</p>
<p><strong className="hl">Skirmisher:</strong> Dancing in and out of battle, the skirmisher uses speed and trickery. Ability modifiers-Dexterity and Charisma; skills-Acrobatics, Climb, Escape Artist, Stealth; combat options-dodge expert, extra attack, mobile attack, repositioning attack; universal option-terrain stride.</p>
<p><strong className="hl">Tactician:</strong> With an vast bag of tricks, the tactician uses its savvy mind more than its brawn. Ability modifiers-Intelligence and Dexterity; skills-Bluff, Escape Artist, Perception; combat options-defense breaker, deflect projectiles, improved combat maneuver, mage-killer, sneak attack.</p>
<p><strong className="hl">Untouchable:</strong> Protected by exhaustive defenses, the untouchable can't be phased by most attacks. Ability modifiers-Constitution and Dexterity; skills-Acrobatics, Perception, Survival; combat options-damage reduction, dodge expert or extra armor, immunity, spell resistance, uncanny dodge.</p>
<p><strong className="hl">Weakener:</strong> Rather than dealing massive amounts of damage, the weakener undermines its opponents' combat abilities. This theme offers several potential options, but avoid giving the monster more than two. Ability modifiers-Strength and Constitution; skills-Intimidate, Perception, Stealth; combat options-ability damage, blood drain, defense breaker, energy drain, fear attack, paralysis, stun attack.</p>
<h3 id="rule-combatant_array-combatant-classes">Combatant Classes</h3>
<p>If your monster is meant to act as though it has a character class, it gains a class graft. The following class grafts require the monster to use the combatant array: barbarian, cavalier, fighter, gunslinger, monk, paladin, and ranger. For animal companions and mounts, see the section under <Link to="/rule/class_grafts">Class Grafts</Link>.</p>
<h3 id="rule-combatant_array-table-5-1-combatant-main-statistics">Table 5-1: Combatant Main Statistics</h3>
<ScrollContainer id="rule-combatant_array--table-0"><table>
<thead>
<tr>
<th>CR</th>
<th>AC</th>
<th>Fort</th>
<th>Ref</th>
<th>Will</th>
<th>CMD</th>
<th>hp</th>
<th>Ability DC</th>
<th>Spell DC</th>
<th>Ability Modifiers</th>
<th>(Skills) Master</th>
<th>(Skills) Good</th>
<th>Options</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>13, t 12, f 12</td>
<td>+1</td>
<td>+1</td>
<td>+0</td>
<td>13</td>
<td>11</td>
<td>9</td>
<td>9</td>
<td>+3, +2, +1</td>
<td>+8 (1)</td>
<td>+5 (2)</td>
<td>1 combat</td>
</tr>
<tr>
<td>1</td>
<td>14, t 12, f 12</td>
<td>+2</td>
<td>+2</td>
<td>+1</td>
<td>14</td>
<td>16</td>
<td>10</td>
<td>11</td>
<td>+3, +2, +1</td>
<td>+9 (1)</td>
<td>+6 (2)</td>
<td>1 combat</td>
</tr>
<tr>
<td>2</td>
<td>16, t 12, f 12</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>16</td>
<td>22</td>
<td>11</td>
<td>12</td>
<td>+3, +2, +1</td>
<td>+10 (1)</td>
<td>+7 (2)</td>
<td>1 combat</td>
</tr>
<tr>
<td>3</td>
<td>17, t 12, f 12</td>
<td>+4</td>
<td>+4</td>
<td>+2</td>
<td>18</td>
<td>33</td>
<td>12</td>
<td>11</td>
<td>+4, +2, +1</td>
<td>+11 (1)</td>
<td>+8 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>4</td>
<td>19, t 12, f 14</td>
<td>+5</td>
<td>+5</td>
<td>+3</td>
<td>20</td>
<td>44</td>
<td>13</td>
<td>12</td>
<td>+4, +2, +1</td>
<td>+12 (1)</td>
<td>+9 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>5</td>
<td>20, t 12, f 15</td>
<td>+6</td>
<td>+6</td>
<td>+4</td>
<td>21</td>
<td>60</td>
<td>13</td>
<td>12</td>
<td>+5, +2, +2</td>
<td>+13 (1)</td>
<td>+10 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>6</td>
<td>21, t 12, f 15</td>
<td>+7</td>
<td>+7</td>
<td>+5</td>
<td>23</td>
<td>77</td>
<td>14</td>
<td>12</td>
<td>+5, +2, +2</td>
<td>+14 (1)</td>
<td>+11 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>7</td>
<td>22, t 13, f 16</td>
<td>+8</td>
<td>+8</td>
<td>+6</td>
<td>24</td>
<td>93</td>
<td>15</td>
<td>12</td>
<td>+6, +4, +2</td>
<td>+15 (1)</td>
<td>+12 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>8</td>
<td>23, t 13, f 17</td>
<td>+9</td>
<td>+9</td>
<td>+7</td>
<td>26</td>
<td>110</td>
<td>16</td>
<td>13</td>
<td>+6, +4, +2</td>
<td>+16 (1)</td>
<td>+13 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>9</td>
<td>25, t 15, f 18</td>
<td>+10</td>
<td>+10</td>
<td>+8</td>
<td>28</td>
<td>126</td>
<td>16</td>
<td>13</td>
<td>+7, +4, +3</td>
<td>+17 (1)</td>
<td>+14 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>10</td>
<td>26, t 15, f 19</td>
<td>+11</td>
<td>+11</td>
<td>+9</td>
<td>29</td>
<td>143</td>
<td>17</td>
<td>13</td>
<td>+7, +5, +3</td>
<td>+18 (1)</td>
<td>+14 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>11</td>
<td>27, t 16, f 20</td>
<td>+12</td>
<td>+12</td>
<td>+10</td>
<td>30</td>
<td>159</td>
<td>18</td>
<td>13</td>
<td>+8, +5, +3</td>
<td>+19 (1)</td>
<td>+15 (2)</td>
<td>1 combat, 1 any</td>
</tr>
<tr>
<td>12</td>
<td>29, t 17, f 21</td>
<td>+13</td>
<td>+13</td>
<td>+11</td>
<td>32</td>
<td>176</td>
<td>19</td>
<td>14</td>
<td>+8, +5, +4</td>
<td>+20 (1)</td>
<td>+16 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>13</td>
<td>30, t 18, f 22</td>
<td>+14</td>
<td>+14</td>
<td>+12</td>
<td>33</td>
<td>198</td>
<td>19</td>
<td>14</td>
<td>+9, +6, +4</td>
<td>+21 (1)</td>
<td>+17 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>14</td>
<td>31, t 18, f 23</td>
<td>+15</td>
<td>+15</td>
<td>+12</td>
<td>34</td>
<td>220</td>
<td>20</td>
<td>14</td>
<td>+9, +6, +4</td>
<td>+23 (1)</td>
<td>+18 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>15</td>
<td>32, t 19, f 24</td>
<td>+16</td>
<td>+16</td>
<td>+13</td>
<td>36</td>
<td>242</td>
<td>21</td>
<td>14</td>
<td>+10, +7, +5</td>
<td>+25 (1)</td>
<td>+20 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>16</td>
<td>33, t 19, f 24</td>
<td>+17</td>
<td>+17</td>
<td>+14</td>
<td>37</td>
<td>264</td>
<td>22</td>
<td>15</td>
<td>+11, +7, +5</td>
<td>+27 (1)</td>
<td>+22 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>17</td>
<td>34, t 20, f 25</td>
<td>+18</td>
<td>+18</td>
<td>+15</td>
<td>38</td>
<td>297</td>
<td>22</td>
<td>15</td>
<td>+11, +8, +5</td>
<td>+29 (1)</td>
<td>+23 (2)</td>
<td>2 combat, 1 any</td>
</tr>
<tr>
<td>18</td>
<td>35, t 21, f 26</td>
<td>+18</td>
<td>+18</td>
<td>+16</td>
<td>39</td>
<td>330</td>
<td>23</td>
<td>15</td>
<td>+12, +8, +6</td>
<td>+31 (1)</td>
<td>+25 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>19</td>
<td>36, t 21, f 27</td>
<td>+19</td>
<td>+19</td>
<td>+16</td>
<td>40</td>
<td>363</td>
<td>24</td>
<td>16</td>
<td>+13, +9, +6</td>
<td>+33 (1)</td>
<td>+27 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>20</td>
<td>38, t 22, f 28</td>
<td>+20</td>
<td>+20</td>
<td>+17</td>
<td>42</td>
<td>407</td>
<td>25</td>
<td>17</td>
<td>+13, +9, +6</td>
<td>+35 (1)</td>
<td>+28 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>21</td>
<td>39, t 23, f 29</td>
<td>+21</td>
<td>+21</td>
<td>+18</td>
<td>43</td>
<td>440</td>
<td>25</td>
<td>17</td>
<td>+14, +10, +7</td>
<td>+37 (1)</td>
<td>+30 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>22</td>
<td>41, t 24, f 30</td>
<td>+21</td>
<td>+21</td>
<td>+18</td>
<td>45</td>
<td>484</td>
<td>26</td>
<td>18</td>
<td>+14, +10, +7</td>
<td>+39 (1)</td>
<td>+32 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>23</td>
<td>42, t 25, f 31</td>
<td>+22</td>
<td>+22</td>
<td>+19</td>
<td>46</td>
<td>528</td>
<td>27</td>
<td>19</td>
<td>+15, +11, +7</td>
<td>+41 (1)</td>
<td>+33 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>24</td>
<td>44, t 26, f 33</td>
<td>+23</td>
<td>+23</td>
<td>+20</td>
<td>48</td>
<td>572</td>
<td>28</td>
<td>20</td>
<td>+15, +11, +8</td>
<td>+43 (1)</td>
<td>+35 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>25</td>
<td>45, t 27, f 33</td>
<td>+24</td>
<td>+24</td>
<td>+21</td>
<td>50</td>
<td>616</td>
<td>28</td>
<td>20</td>
<td>+16, +12, +8</td>
<td>+45 (1)</td>
<td>+37 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>26</td>
<td>46, t 27, f 34</td>
<td>+25</td>
<td>+25</td>
<td>+22</td>
<td>51</td>
<td>660</td>
<td>29</td>
<td>21</td>
<td>+16, +12, +8</td>
<td>+47 (1)</td>
<td>+38 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>27</td>
<td>47, t 28, f 35</td>
<td>+26</td>
<td>+26</td>
<td>+23</td>
<td>52</td>
<td>704</td>
<td>30</td>
<td>22</td>
<td>+17, +13, +9</td>
<td>+49 (1)</td>
<td>+40 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>28</td>
<td>48, t 28, f 36</td>
<td>+27</td>
<td>+27</td>
<td>+24</td>
<td>53</td>
<td>748</td>
<td>31</td>
<td>23</td>
<td>+17, +13, +9</td>
<td>+51 (1)</td>
<td>+42 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>29</td>
<td>49, t 29, f 36</td>
<td>+28</td>
<td>+28</td>
<td>+25</td>
<td>54</td>
<td>792</td>
<td>32</td>
<td>24</td>
<td>+18, +14, +10</td>
<td>+53 (1)</td>
<td>+43 (2)</td>
<td>3 combat, 1 any</td>
</tr>
<tr>
<td>30</td>
<td>50, t 30, f 37</td>
<td>+29</td>
<td>+29</td>
<td>+26</td>
<td>55</td>
<td>836</td>
<td>33</td>
<td>25</td>
<td>+18, +15, +10</td>
<td>+55 (1)</td>
<td>+45 (2)</td>
<td>3 combat, 1 any</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-combatant_array-table-5-2-combatant-attack-statistics">Table 5-2: Combatant Attack Statistics</h3>
<ScrollContainer id="rule-combatant_array--table-1"><table>
<thead>
<tr>
<th>CR</th>
<th>Weapon Attacks: High (Damage)</th>
<th>Weapon Attacks: Low (Damage)</th>
<th>Two Natural Attacks (Damage)</th>
<th>Three Natural Attacks (Damage)</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>+1 (5)</td>
<td>+0 (4)</td>
<td>2 at -1 (4)</td>
<td>1 at -1 (6), 2 at -6 (4)</td>
</tr>
<tr>
<td>1</td>
<td>+2 (8)</td>
<td>+1 (6)</td>
<td>2 at +0 (4)</td>
<td>1 at +0 (6), 2 at -5 (4)</td>
</tr>
<tr>
<td>2</td>
<td>+4 (11)</td>
<td>+3 (8)</td>
<td>2 at +2 (6)</td>
<td>1 at +2 (6), 2 at -3 (4)</td>
</tr>
<tr>
<td>3</td>
<td>+6 (14)</td>
<td>+4 (10)</td>
<td>2 at +6 (8)</td>
<td>1 at +6 (10), 2 at +1 (5)</td>
</tr>
<tr>
<td>4</td>
<td>+8 (17)</td>
<td>+6 (13)</td>
<td>2 at +8 (9)</td>
<td>1 at +8 (12), 2 at +3 (6)</td>
</tr>
<tr>
<td>5</td>
<td>+10/+5 (15)</td>
<td>+7/+2 (11)</td>
<td>2 at +10 (11)</td>
<td>1 at +10 (15), 2 at +5 (8)</td>
</tr>
<tr>
<td>6</td>
<td>+12/+7 (18)</td>
<td>+8/+3 (13)</td>
<td>2 at +12 (14)</td>
<td>1 at +12 (19), 2 at +7 (10)</td>
</tr>
<tr>
<td>7</td>
<td>+13/+8 (22)</td>
<td>+10/+5 (16)</td>
<td>2 at +13 (17)</td>
<td>1 at +13 (22), 2 at +8 (11)</td>
</tr>
<tr>
<td>8</td>
<td>+15/+10 (26)</td>
<td>+11/+6 (19)</td>
<td>2 at +15 (20)</td>
<td>1 at +15 (26), 2 at +10 (13)</td>
</tr>
<tr>
<td>9</td>
<td>+17/+12 (29)</td>
<td>+12/+7 (22)</td>
<td>2 at +17 (22)</td>
<td>1 at +17 (30), 2 at +12 (15)</td>
</tr>
<tr>
<td>10</td>
<td>+18/+13/+8 (28)</td>
<td>+13/+8/+3 (21)</td>
<td>2 at +18 (25)</td>
<td>1 at +18 (33), 2 at +13 (17)</td>
</tr>
<tr>
<td>11</td>
<td>+19/+14/+9 (32)</td>
<td>+14/+9/+4 (23)</td>
<td>2 at +19 (28)</td>
<td>1 at +19 (37), 2 at +14 (19)</td>
</tr>
<tr>
<td>12</td>
<td>+21/+16/+11 (35)</td>
<td>+15/+10/+5 (26)</td>
<td>2 at +21 (31)</td>
<td>1 at +21 (41), 2 at +16 (21)</td>
</tr>
<tr>
<td>13</td>
<td>+22/+17/+12 (38)</td>
<td>+16/+11/+6 (28)</td>
<td>2 at +22 (33)</td>
<td>1 at +22 (44), 2 at +17 (22)</td>
</tr>
<tr>
<td>14</td>
<td>+23/+18/+13 (41)</td>
<td>+17/+12/+7 (30)</td>
<td>2 at +23 (36)</td>
<td>1 at +23 (48), 2 at +18 (24)</td>
</tr>
<tr>
<td>15</td>
<td>+24/+19/+14/+9 (41)</td>
<td>+18/+13/+8/+3 (31)</td>
<td>2 at +24 (39)</td>
<td>1 at +24 (52), 2 at +19 (26)</td>
</tr>
<tr>
<td>16</td>
<td>+26/+21/+16/+11 (47)</td>
<td>+19/+14/+9/+4 (35)</td>
<td>2 at +26 (44)</td>
<td>1 at +26 (59), 2 at +21 (30)</td>
</tr>
<tr>
<td>17</td>
<td>+27/+22/+17/+12 (53)</td>
<td>+20/+15/+10/+5 (40)</td>
<td>2 at +27 (50)</td>
<td>1 at +27 (66), 2 at +22 (33)</td>
</tr>
<tr>
<td>18</td>
<td>+28/+23/+18/+13 (59)</td>
<td>+21/+16/+11/+6 (44)</td>
<td>2 at +28 (55)</td>
<td>1 at +28 (74), 2 at +23 (37)</td>
</tr>
<tr>
<td>19</td>
<td>+29/+24/+19/+14 (65)</td>
<td>+22/+17/+12/+7 (48)</td>
<td>2 at +29 (61)</td>
<td>1 at +29 (81), 2 at +24 (41)</td>
</tr>
<tr>
<td>20</td>
<td>+30/+25/+20/+15 (70)</td>
<td>+23/+18/+13/+8 (53)</td>
<td>2 at +30 (66)</td>
<td>1 at +30 (88), 2 at +25 (44)</td>
</tr>
<tr>
<td>21</td>
<td>+31/+26/+21/+16 (76)</td>
<td>+24/+19/+14/+9 (58)</td>
<td>2 at +31 (72)</td>
<td>1 at +31 (96), 2 at +26 (48)</td>
</tr>
<tr>
<td>22</td>
<td>+32/+27/+22/+17 (82)</td>
<td>+25/+20/+15/+10 (62)</td>
<td>2 at +32 (77)</td>
<td>1 at +32 (103), 2 at +27 (52)</td>
</tr>
<tr>
<td>23</td>
<td>+33/+28/+23/+18 (88)</td>
<td>+26/+21/+16/+11 (66)</td>
<td>2 at +33 (83)</td>
<td>1 at +33 (110), 2 at +28 (55)</td>
</tr>
<tr>
<td>24</td>
<td>+35/+30/+25/+20 (97)</td>
<td>+27/+22/+17/+12 (73)</td>
<td>2 at +35 (91)</td>
<td>1 at +35 (121), 2 at +30 (61)</td>
</tr>
<tr>
<td>25</td>
<td>+36/+31/+26/+21 (105)</td>
<td>+28/+23/+18/+13 (79)</td>
<td>2 at +36 (99)</td>
<td>1 at +36 (132), 2 at +31 (66)</td>
</tr>
<tr>
<td>26</td>
<td>+37/+32/+27/+22 (114)</td>
<td>+29/+24/+19/+14 (85)</td>
<td>2 at +37 (108)</td>
<td>1 at +37 (143), 2 at +32 (72)</td>
</tr>
<tr>
<td>27</td>
<td>+38/+33/+28/+23 (123)</td>
<td>+30/+25/+20/+15 (91)</td>
<td>2 at +38 (116)</td>
<td>1 at +38 (154), 2 at +33 (77)</td>
</tr>
<tr>
<td>28</td>
<td>+39/+34/+29/+24 (132)</td>
<td>+31/+26/+21/+16 (97)</td>
<td>2 at +39 (124)</td>
<td>1 at +39 (165), 2 at +34 (83)</td>
</tr>
<tr>
<td>29</td>
<td>+40/+35/+30/+25 (140)</td>
<td>+32/+27/+22/+17 (103)</td>
<td>2 at +40 (132)</td>
<td>1 at +40 (176), 2 at +35 (88)</td>
</tr>
<tr>
<td>30</td>
<td>+41/+36/+31/+26 (149)</td>
<td>+33/+28/+23/+18 (108)</td>
<td>2 at +41 (141)</td>
<td>1 at +41 (187), 2 at +36 (94)</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _expert_array = {title: "Expert Array", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_1_array"], siblings: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 200</Link></p>
<p>Possessing in-depth knowledge, experts often appear as leaders, trusted advisors, or elite operatives. An expert monster typically has a high Intelligence modifier, but its other statistics vary depending on its role. Strong skills and interaction options are an expert's most important traits, but as the expert array is more versatile than the other arrays, many experts also pick up the secondary magic option or tactical combat options.</p>
<p>Common expert monsters include doppelgangers, imps, intellect devourers, invisible stalkers, and pixies.</p>
<h3 id="rule-expert_array-expert-themes">Expert Themes</h3>
<p>The following themes represent skill sets and areas of knowledge an expert might embrace.</p>
<p><strong className="hl">Advisor:</strong> Usually serving as an assistant to a more powerful creature, the advisor fills a support role. Ability modifiers-Charisma and Wisdom; skills-Bluff, Diplomacy, Intimidate, Knowledge (local), Knowledge (nobility), Sense Motive; combat option-improved initiative; social options-alertness, inspire competence, persuasive, slippery mind.</p>
<p><strong className="hl">Apothecary:</strong> With extensive practice in creating alchemical concoctions, the apothecary might be an alchemist or a village healer. Ability modifiers-Intelligence and Constitution; skills-Appraise, Craft (alchemy), Heal, Knowledge (arcana), Knowledge (nature), Spellcraft; combat option-bombs; magic options-mutagen, potent healing, potions, remove minor condition, remove moderate condition, secondary magic (alchemy or healing spell list).</p>
<p><strong className="hl">Artificer:</strong> Well acquainted with items and their creation, the artificer could be a crafter, a merchant, or an expert on magical devices. Ability modifiers-Intelligence and Charisma or Strength; skills-Appraise, Craft (any), Disable Device, Knowledge (engineering), Use Magic Device; combat option-firearm savvy; magic options: magical aptitude; social option-mercantile savvy; universal option-magic weapon.</p>
<p><strong className="hl">Deceiver:</strong> A master of chicanery blessed with a silver tongue, the deceiver knows how to get its way. Ability modifiers-Charisma and Intelligence; skills-Bluff, Disguise, Knowledge (local), Perform (oratory), Sense Motive; combat option-sneak attack; social options-alertness, inspire fear, persuasive, slippery mind.</p>
<p><strong className="hl">Guide:</strong> Familiar with a particular area or skilled at getting along in the wild, a guide can get people where they need to go. Ability modifiers-Wisdom and Constitution; skills-Climb, Handle Animal, Knowledge (local), Knowledge (nature), Perception, Survival, Swim; combat option-extra hit points; social options-alertness, animal friend, sound mimicry; universal option-terrain stride (undergrowth).</p>
<p><strong className="hl">Performer:</strong> Born to the stage, the performer puts on an elaborate show. Ability modifiers-Charisma and Dexterity; skills-Acrobatics, Disguise, Escape Artist, Perform (any), Sleight of Hand; combat options-dodge expert, mobility; social options-bolstering presence, fascinate, persuasive.</p>
<p><strong className="hl">Scholar:</strong> Through extensive study, the scholar picks up detailed information about a variety of subjects, becoming an invaluable resource. Ability modifiers-Intelligence and Wisdom; skills-Appraise, Knowledge (any), Spellcraft, Use Magic Device; magic options-magical aptitude, protective ward; social option-knowledgeable; universal option-secondary magic (knowledge or magic spell list).</p>
<p><strong className="hl">Spy:</strong> A well-rounded expert, the spy needs to be prepared for any situation. Ability modifiers-Charisma and Dexterity; skills-Bluff, Disable Device, Disguise, Sleight of Hand, Stealth; combat options-constant invisibility, poison, sneak attack; social options-alertness, persuasive, slippery mind.</p>
<h3 id="rule-expert_array-expert-classes">Expert Classes</h3>
<p>If your monster is meant to act as though it has a character class, it gains a <Link to="/rule/class_grafts">class graft</Link>. The following class grafts require the monster to use the expert array: alchemist, bard, inquisitor, magus, and rogue.</p>
<h3 id="rule-expert_array-table-5-3-expert-main-statistics">Table 5-3: Expert Main Statistics</h3>
<ScrollContainer id="rule-expert_array--table-0"><table>
<thead>
<tr>
<th>CR</th>
<th>AC</th>
<th>Fort</th>
<th>Ref</th>
<th>Will</th>
<th>CMD</th>
<th>hp</th>
<th>Ability DC</th>
<th>Spell DC</th>
<th>Ability Modifiers</th>
<th>(Skills) Master</th>
<th>(Skills) Good</th>
<th>Options</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>11, t 10, f 10</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>11</td>
<td>10</td>
<td>11</td>
<td>11</td>
<td>+3, +2, +1</td>
<td>+8 (3)</td>
<td>+5 (2)</td>
<td>1 any</td>
</tr>
<tr>
<td>1</td>
<td>12, t 10, f 10</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>12</td>
<td>15</td>
<td>12</td>
<td>12</td>
<td>+3, +2, +1</td>
<td>+9 (3)</td>
<td>+6 (2)</td>
<td>1 any</td>
</tr>
<tr>
<td>2</td>
<td>14, t 10, f 10</td>
<td>+1</td>
<td>+1</td>
<td>+5</td>
<td>14</td>
<td>20</td>
<td>13</td>
<td>13</td>
<td>+3, +2, +1</td>
<td>+10 (3)</td>
<td>+7 (2)</td>
<td>1 any</td>
</tr>
<tr>
<td>3</td>
<td>15, t 10, f 11</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>16</td>
<td>30</td>
<td>14</td>
<td>13</td>
<td>+4, +2, +1</td>
<td>+11 (3)</td>
<td>+8 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>4</td>
<td>17, t 10, f 12</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>18</td>
<td>40</td>
<td>15</td>
<td>14</td>
<td>+4, +3, +1</td>
<td>+12 (3)</td>
<td>+9 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>5</td>
<td>18, t 10, f 13</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>19</td>
<td>55</td>
<td>15</td>
<td>14</td>
<td>+5, +3, +2</td>
<td>+13 (3)</td>
<td>+10 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>6</td>
<td>19, t 11, f 14</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>21</td>
<td>70</td>
<td>16</td>
<td>14</td>
<td>+5, +3, +2</td>
<td>+14 (3)</td>
<td>+11 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>7</td>
<td>20, t 12, f 15</td>
<td>+6</td>
<td>+6</td>
<td>+10</td>
<td>22</td>
<td>85</td>
<td>17</td>
<td>14</td>
<td>+6, +4, +2</td>
<td>+15 (3)</td>
<td>+12 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>8</td>
<td>21, t 12, f 15</td>
<td>+7</td>
<td>+7</td>
<td>+11</td>
<td>24</td>
<td>100</td>
<td>18</td>
<td>15</td>
<td>+6, +4, +2</td>
<td>+16 (3)</td>
<td>+13 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>9</td>
<td>23, t 13,1 f 17</td>
<td>+8</td>
<td>+8</td>
<td>+12</td>
<td>26</td>
<td>115</td>
<td>18</td>
<td>15</td>
<td>+7, +4, +3</td>
<td>+17 (3)</td>
<td>+14 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>10</td>
<td>24, t 14, f 18</td>
<td>+9</td>
<td>+9</td>
<td>+13</td>
<td>27</td>
<td>130</td>
<td>19</td>
<td>15</td>
<td>+7, +5, +3</td>
<td>+18 (3)</td>
<td>+14 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>11</td>
<td>25, t 15, f 18</td>
<td>+10</td>
<td>+10</td>
<td>+14</td>
<td>28</td>
<td>145</td>
<td>20</td>
<td>15</td>
<td>+8, +5, +3</td>
<td>+19 (3)</td>
<td>+15 (2)</td>
<td>1 any, 1 social</td>
</tr>
<tr>
<td>12</td>
<td>27, t 16, f 20</td>
<td>+11</td>
<td>+11</td>
<td>+15</td>
<td>30</td>
<td>160</td>
<td>21</td>
<td>16</td>
<td>+8, +5, +4</td>
<td>+20 (3)</td>
<td>+16 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>13</td>
<td>28, t 16, f 21</td>
<td>+12</td>
<td>+12</td>
<td>+16</td>
<td>31</td>
<td>180</td>
<td>21</td>
<td>16</td>
<td>+9, +6, +4</td>
<td>+21 (3)</td>
<td>+17 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>14</td>
<td>29, t 17, f 21</td>
<td>+12</td>
<td>+12</td>
<td>+17</td>
<td>32</td>
<td>200</td>
<td>22</td>
<td>16</td>
<td>+9, +6, +4</td>
<td>+23 (3)</td>
<td>+18 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>15</td>
<td>30, t 18, f 22</td>
<td>+13</td>
<td>+13</td>
<td>+18</td>
<td>34</td>
<td>220</td>
<td>23</td>
<td>16</td>
<td>+10, +7, +5</td>
<td>+25 (3)</td>
<td>+20 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>16</td>
<td>31, t 18, f 23</td>
<td>+14</td>
<td>+14</td>
<td>+19</td>
<td>35</td>
<td>240</td>
<td>24</td>
<td>17</td>
<td>+11, +7, +5</td>
<td>+27 (3)</td>
<td>+22 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>17</td>
<td>32, t 19, f 24</td>
<td>+15</td>
<td>+15</td>
<td>+20</td>
<td>36</td>
<td>270</td>
<td>24</td>
<td>17</td>
<td>+11, +8, +5</td>
<td>+29 (3)</td>
<td>+23 (2)</td>
<td>2 any, 1 social</td>
</tr>
<tr>
<td>18</td>
<td>33, t 19, f 24</td>
<td>+16</td>
<td>+16</td>
<td>+20</td>
<td>37</td>
<td>300</td>
<td>25</td>
<td>17</td>
<td>+12, +8, +6</td>
<td>+31 (3)</td>
<td>+25 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>19</td>
<td>34, t 20, f 25</td>
<td>+16</td>
<td>+16</td>
<td>+21</td>
<td>38</td>
<td>330</td>
<td>26</td>
<td>18</td>
<td>+13, +9, +6</td>
<td>+33 (3)</td>
<td>+27 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>20</td>
<td>36, t 21, f 27</td>
<td>+17</td>
<td>+17</td>
<td>+22</td>
<td>40</td>
<td>370</td>
<td>27</td>
<td>19</td>
<td>+13, +9, +6</td>
<td>+35 (3)</td>
<td>+28 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>21</td>
<td>37, t 22, f 27</td>
<td>+18</td>
<td>+18</td>
<td>+23</td>
<td>41</td>
<td>400</td>
<td>27</td>
<td>19</td>
<td>+14, +10, +7</td>
<td>+37 (3)</td>
<td>+30 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>22</td>
<td>39, t 23, f 29</td>
<td>+18</td>
<td>+18</td>
<td>+23</td>
<td>43</td>
<td>440</td>
<td>28</td>
<td>20</td>
<td>+14, +10, +7</td>
<td>+39 (3)</td>
<td>+32 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>23</td>
<td>40, t 24, f 30</td>
<td>+19</td>
<td>+19</td>
<td>+24</td>
<td>44</td>
<td>480</td>
<td>29</td>
<td>21</td>
<td>+15, +11, +7</td>
<td>+41 (3)</td>
<td>+33 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>24</td>
<td>42, t 25, f 31</td>
<td>+20</td>
<td>+20</td>
<td>+25</td>
<td>46</td>
<td>520</td>
<td>30</td>
<td>22</td>
<td>+15, +11, +8</td>
<td>+43 (3)</td>
<td>+35 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>25</td>
<td>43, t 25, f 32</td>
<td>+21</td>
<td>+21</td>
<td>+26</td>
<td>48</td>
<td>560</td>
<td>30</td>
<td>22</td>
<td>+16, +12, +8</td>
<td>+45 (3)</td>
<td>+37 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>26</td>
<td>44, t 26, f 33</td>
<td>+22</td>
<td>+22</td>
<td>+27</td>
<td>49</td>
<td>600</td>
<td>31</td>
<td>23</td>
<td>+16, +12, +8</td>
<td>+47 (3)</td>
<td>+38 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>27</td>
<td>45, t 27, f 33</td>
<td>+23</td>
<td>+23</td>
<td>+28</td>
<td>50</td>
<td>640</td>
<td>32</td>
<td>24</td>
<td>+17, +13, +9</td>
<td>+49 (3)</td>
<td>+40 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>28</td>
<td>46, t 27, f 34</td>
<td>+24</td>
<td>+24</td>
<td>+29</td>
<td>51</td>
<td>680</td>
<td>33</td>
<td>25</td>
<td>+17, +13, +9</td>
<td>+51 (3)</td>
<td>+42 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>29</td>
<td>47, t 28, f 35</td>
<td>+25</td>
<td>+25</td>
<td>+30</td>
<td>52</td>
<td>720</td>
<td>34</td>
<td>26</td>
<td>+18, +14, +10</td>
<td>+53 (3)</td>
<td>+43 (2)</td>
<td>3 any, 1 social</td>
</tr>
<tr>
<td>30</td>
<td>48, t 28, f 36</td>
<td>+26</td>
<td>+26</td>
<td>+31</td>
<td>53</td>
<td>760</td>
<td>35</td>
<td>27</td>
<td>+18, +15, +110</td>
<td>+55 (3)</td>
<td>+45 (2)</td>
<td>3 any, 1 social</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-expert_array-table-5-4-expert-attack-statistics">Table 5-4: Expert Attack Statistics</h3>
<ScrollContainer id="rule-expert_array--table-1"><table>
<thead>
<tr>
<th>CR</th>
<th>Weapon Attacks: High (Damage)</th>
<th>Weapon Attacks: Low (Damage)</th>
<th>Two Natural Attacks (Damage)</th>
<th>Three Natural Attacks (Damage)</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>+1 (4)</td>
<td>+0 (3)</td>
<td>2 at -2 (4)</td>
<td>1 at -2 (6), 2 at -7 (4)</td>
</tr>
<tr>
<td>1</td>
<td>+2 (7)</td>
<td>+1 (5)</td>
<td>2 at -1 (4)</td>
<td>1 at -1 (6), 2 at -6 (4)</td>
</tr>
<tr>
<td>2</td>
<td>+4 (10)</td>
<td>+3 (7)</td>
<td>2 at +1 (6)</td>
<td>1 at +1 (6), 2 at -4 (4)</td>
</tr>
<tr>
<td>3</td>
<td>+6 (13)</td>
<td>+4 (9)</td>
<td>2 at +4 (7)</td>
<td>1 at +4 (9), 2 at -1 (5)</td>
</tr>
<tr>
<td>4</td>
<td>+8 (16)</td>
<td>+6 (12)</td>
<td>2 at +6 (8)</td>
<td>1 at +6 (11), 2 at +1 (6)</td>
</tr>
<tr>
<td>5</td>
<td>+10 (19)</td>
<td>+7 (15)</td>
<td>2 at +7 (10)</td>
<td>1 at +7 (14), 2 at +2 (7)</td>
</tr>
<tr>
<td>6</td>
<td>+12 (24)</td>
<td>+8 (18)</td>
<td>2 at +8 (13)</td>
<td>1 at +8 (17), 2 at +3 (9)</td>
</tr>
<tr>
<td>7</td>
<td>+13/+8 (20)</td>
<td>+10/+5 (15)</td>
<td>2 at +10 (15)</td>
<td>1 at +10 (20), 2 at +5 (10)</td>
</tr>
<tr>
<td>8</td>
<td>+15/+10 (23)</td>
<td>+11/+6 (17)</td>
<td>2 at +11 (18)</td>
<td>1 at +11 (24), 2 at +6 (12)</td>
</tr>
<tr>
<td>9</td>
<td>+17/+12 (26)</td>
<td>+12/+7 (20)</td>
<td>2 at +12 (20)</td>
<td>1 at +12 (27), 2 at +7 (14)</td>
</tr>
<tr>
<td>10</td>
<td>+18/+13 (30)</td>
<td>+13/+8 (22)</td>
<td>2 at +13 (23)</td>
<td>1 at +13 (30), 2 at +8 (15)</td>
</tr>
<tr>
<td>11</td>
<td>+19/+14 (33)</td>
<td>+14/+9 (25)</td>
<td>2 at +14 (25)</td>
<td>1 at +14 (34), 2 at +9 (17)</td>
</tr>
<tr>
<td>12</td>
<td>+21/+16 (36)</td>
<td>+15/+10 (27)</td>
<td>2 at +15 (28)</td>
<td>1 at +15 (37), 2 at +10 (19)</td>
</tr>
<tr>
<td>13</td>
<td>+22/+17 (39)</td>
<td>+16/+11 (30)</td>
<td>2 at +16 (30)</td>
<td>1 at +16 (40), 2 at +11 (20)</td>
</tr>
<tr>
<td>14</td>
<td>+23/+18/+13 (37)</td>
<td>+17/+12/+7 (28)</td>
<td>2 at +17 (33)</td>
<td>1 at +17 (44), 2 at +12 (22)</td>
</tr>
<tr>
<td>15</td>
<td>+24/+19/+14 (40)</td>
<td>+18/+13/+8 (30)</td>
<td>2 at +18 (35)</td>
<td>1 at +18 (47), 2 at +13 (24)</td>
</tr>
<tr>
<td>16</td>
<td>+26/+21/+16 (46)</td>
<td>+19/+14/+9 (34)</td>
<td>2 at +19 (40)</td>
<td>1 at +19 (54), 2 at +14 (27)</td>
</tr>
<tr>
<td>17</td>
<td>+27/+22/+17 (51)</td>
<td>+20/+15/+10 (38)</td>
<td>2 at +20 (45)</td>
<td>1 at +20 (60), 2 at +15 (30)</td>
</tr>
<tr>
<td>18</td>
<td>+28/+23/+18 (57)</td>
<td>+21/+16/+11 (43)</td>
<td>2 at +21 (50)</td>
<td>1 at +21 (67), 2 at +16 (34)</td>
</tr>
<tr>
<td>19</td>
<td>+29/+24/+19 (63)</td>
<td>+22/+17/+12 (47)</td>
<td>2 at +22 (55)</td>
<td>1 at +22 (74), 2 at +17 (37)</td>
</tr>
<tr>
<td>20</td>
<td>+30/+25/+20 (68)</td>
<td>+23/+18/+13 (51)</td>
<td>2 at +23 (60)</td>
<td>1 at +23 (80), 2 at +18 (40)</td>
</tr>
<tr>
<td>21</td>
<td>+31/+26/+21/+16 (69)</td>
<td>+24/+19/+14/+9 (52)</td>
<td>2 at +24 (65)</td>
<td>1 at +24 (87), 2 at +19 (44)</td>
</tr>
<tr>
<td>22</td>
<td>+32/+27/+22/+17 (75)</td>
<td>+25/+20/+15/+10 (56)</td>
<td>2 at +25 (70)</td>
<td>1 at +25 (94), 2 at +20 (47)</td>
</tr>
<tr>
<td>23</td>
<td>+33/+28/+23/+18 (80)</td>
<td>+26/+21/+16/+11 (60)</td>
<td>2 at +26 (75)</td>
<td>1 at +26 (100), 2 at +21 (50)</td>
</tr>
<tr>
<td>24</td>
<td>+35/+30/+25/+20 (88)</td>
<td>+27/+22/+17/+12 (66)</td>
<td>2 at +27 (83)</td>
<td>1 at +27 (110), 2 at +22 (55)</td>
</tr>
<tr>
<td>25</td>
<td>+36/+31/+26/+21 (96)</td>
<td>+28/+23/+18/+13 (72)</td>
<td>2 at +28 (90)</td>
<td>1 at +28 (120), 2 at +23 (60)</td>
</tr>
<tr>
<td>26</td>
<td>+37/+32/+27/+22 (104)</td>
<td>+29/+24/+19/+14 (77)</td>
<td>2 at +29 (98)</td>
<td>1 at +29 (130), 2 at +24 (65)</td>
</tr>
<tr>
<td>27</td>
<td>+38/+33/+28/+23(112)</td>
<td>+30/+25/+20/+15 (83)</td>
<td>2 at +30 (105)</td>
<td>1 at +30 (140), 2 at +25 (70)</td>
</tr>
<tr>
<td>28</td>
<td>+39/+34/+29/+24 (120)</td>
<td>+31/+26/+21/+16 (88)</td>
<td>2 at +31 (113)</td>
<td>1 at +31 (150), 2 at +26 (75)</td>
</tr>
<tr>
<td>29</td>
<td>+40/+35/+30/+25 (128)</td>
<td>+32/+27/+22/+17 (93)</td>
<td>2 at +32 (120)</td>
<td>1 at +32 (160), 2 at +27 (80)</td>
</tr>
<tr>
<td>30</td>
<td>+41/+36/+31/+26 (136)</td>
<td>+33/+28/+23/+18 (99)</td>
<td>2 at +33 (128)</td>
<td>1 at +33 (170), 2 at +28 (85)</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _spellcaster_array = {title: "Spellcaster Array", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_1_array"], siblings: ["character_classes","using_an_array","combatant_array","expert_array","spellcaster_array"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 202</Link></p>
<p>With a large selection of spells, a spellcaster might be weak in combat, or could focus on powerful offensive spells. A spellcaster monster typically has a high spellcasting ability modifier: Intelligence, Wisdom, or (often for monstrous creatures) Charisma. Spells make up for the spellcaster's weak combat abilities, modest skills, and small number of monster options.</p>
<p>Well-known spellcasters include couatls, liches, nymphs, and rakshasas.</p>
<p><strong className="hl">Special Rules:</strong> Every monster with the spellcaster array automatically gains spells, as described under <Link to="/rule/step_6_spells">Step 6: Spells</Link>. A spellcaster can treat its spell choices as either spells or spell-like abilities, depending on its theme.</p>
<h3 id="rule-spellcaster_array-spellcaster-themes">Spellcaster Themes</h3>
<p>The following themes include recommended spell lists for common spellcaster paths.</p>
<p><strong className="hl">Cultist:</strong> A worshiper of dark forces, the cultist is a true fanatic. Ability modifiers-Wisdom and Charisma; skills-Knowledge (arcana), Knowledge (planes), Knowledge (religion), Spellcraft; combat options-poison, rage; magic options-bestow major condition, bestow minor condition, bestow moderate condition, misfortune; social option-weakening presence; spell lists-aberrant, abyssal, chaos, death, destruction, evil, infernal, madness, necromancy.</p>
<p><strong className="hl">Lorekeeper:</strong> Through study of ancient texts, the lorekeeper wields the fundamental principles of magic. Ability modifiers-Intelligence; skills-Knowledge (arcana), Knowledge (history), Knowledge (planes), Spellcraft, Use Magic Device; magic options-at-will magic, energy explosion, magical aptitude, metamagic spell, spell penetration; social option-knowledgeable; spell lists-abjuration, arcane, divination, knowledge, magic, transmutation.</p>
<p><strong className="hl">Naturalist:</strong> In awe of the majesty of the wilderness, the naturalist calls on powers of the plant and animal world. Ability modifiers-Wisdom and Charisma; skills-Handle Animal, Knowledge (nature), Spellcraft, Survival; combat options-mounted master, poison; magic options-bestow major condition, bestow minor condition, bestow moderate condition; social option-animal talker; universal option-terrain stride (undergrowth); spell lists-animal, earth, nature, plant, weather.</p>
<p><strong className="hl">Righteous One:</strong> Fighting for the cause of good or order, the righteous one can't be swayed from its purpose. Ability modifiers-Wisdom and Charisma; skills-Heal, Knowledge (arcana), Knowledge (religion), Spellcraft; combat option-extra armor; magic options-fortune, protective ward, turn undead; social option-weakening presence; spell lists-celestial, community, glory, healing, law, protection.</p>
<p><strong className="hl">Trickster:</strong> Never to be trusted, the trickster casts spells to warp the senses and fool the mind. Ability modifiers-Intelligence and Charisma; skills-Bluff, Knowledge (arcana), Sleight of Hand, Spellcraft; combat option-sneak attack; magic options-evil eye, misfortune; social options-persuasive, slippery mind; spell lists-chaos, charm, enchantment, illusion, stealth, trickery.</p>
<p><strong className="hl">War Mage:</strong> Armed to the teeth with offensive spells, the war mage never met a problem it couldn't blow up. Ability modifiers-Intelligence and Charisma; skills-Knowledge (arcana), Spellcraft; combat options-energy resistance, improved initiative; magic options-combat casting, magic attack, spell penetration; spell lists-battle, evocation, strength, war.</p>
<h3 id="rule-spellcaster_array-spellcaster-classes">Spellcaster Classes</h3>
<p>If your monster is meant to act as though it has a character class, it gains a <Link to="/rule/class_grafts">class graft</Link>.</p>
<p>The following class grafts require the monster to use the spellcaster array: cleric, druid, oracle, sorcerer, summoner, witch, and wizard. A summoner's eidolon is a separate monster, typically created using the combatant array.</p>
<h3 id="rule-spellcaster_array-table-5-5-spellcaster-main-statistics">Table 5-5: Spellcaster Main Statistics</h3>
<ScrollContainer id="rule-spellcaster_array--table-0"><table>
<thead>
<tr>
<th>CR</th>
<th>AC</th>
<th>Fort</th>
<th>Ref</th>
<th>Will</th>
<th>CMD</th>
<th>hp</th>
<th>Ability DC</th>
<th>Spell DC</th>
<th>Ability Modifiers</th>
<th>(Skills) Master</th>
<th>(Skills) Good</th>
<th>Options</th>
</tr>
</thead>
<tbody><tr>
<td>1/2</td>
<td>9, t 8, f 8</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>9</td>
<td>9</td>
<td>11</td>
<td>13</td>
<td>+3, +2, +1</td>
<td>+8 (2)</td>
<td>+5 (1)</td>
<td>1 magic</td>
</tr>
<tr>
<td>1</td>
<td>10, t 8, f 8</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>10</td>
<td>13</td>
<td>12</td>
<td>14</td>
<td>+3, +2, +1</td>
<td>+9 (2)</td>
<td>+6 (1)</td>
<td>1 magic</td>
</tr>
<tr>
<td>2</td>
<td>12, t 8, f 8</td>
<td>+1</td>
<td>+1</td>
<td>+5</td>
<td>12</td>
<td>18</td>
<td>13</td>
<td>15</td>
<td>+3, +2, +1</td>
<td>+10 (2)</td>
<td>+7 (1)</td>
<td>1 magic</td>
</tr>
<tr>
<td>3</td>
<td>13, t 8, f 8</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>14</td>
<td>27</td>
<td>14</td>
<td>15</td>
<td>+4, +2, +1</td>
<td>+11 (2)</td>
<td>+8 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>4</td>
<td>15, t 8, f 11</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>16</td>
<td>36</td>
<td>15</td>
<td>16</td>
<td>+4, +3, +1</td>
<td>+12 (2)</td>
<td>+9 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>5</td>
<td>16, t 8, f 12</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>17</td>
<td>49</td>
<td>15</td>
<td>16</td>
<td>+5, +3, +2</td>
<td>+13 (2)</td>
<td>+10 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>6</td>
<td>17, t 8, f 12</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>19</td>
<td>63</td>
<td>16</td>
<td>16</td>
<td>+5, +3, +2</td>
<td>+14 (2)</td>
<td>+11 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>7</td>
<td>18, t 8, f 13</td>
<td>+6</td>
<td>+6</td>
<td>+10</td>
<td>20</td>
<td>76</td>
<td>17</td>
<td>16</td>
<td>+6, +4, +2</td>
<td>+15 (2)</td>
<td>+12 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>8</td>
<td>19, t 11, f 14</td>
<td>+7</td>
<td>+7</td>
<td>+11</td>
<td>22</td>
<td>90</td>
<td>18</td>
<td>17</td>
<td>+6, +4, +2</td>
<td>+16 (2)</td>
<td>+13 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>9</td>
<td>21, t 12, f 15</td>
<td>+8</td>
<td>+8</td>
<td>+12</td>
<td>24</td>
<td>103</td>
<td>18</td>
<td>17</td>
<td>+7, +4, +3</td>
<td>+17 (2)</td>
<td>+14 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>10</td>
<td>22, t 13, f 16</td>
<td>+9</td>
<td>+9</td>
<td>+13</td>
<td>25</td>
<td>117</td>
<td>19</td>
<td>17</td>
<td>+7, +5, +3</td>
<td>+18 (2)</td>
<td>+14 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>11</td>
<td>23, t 13, f 17</td>
<td>+10</td>
<td>+10</td>
<td>+14</td>
<td>26</td>
<td>130</td>
<td>20</td>
<td>17</td>
<td>+8, +5, +3</td>
<td>+19 (2)</td>
<td>+15 (1)</td>
<td>1 magic, 1 any</td>
</tr>
<tr>
<td>12</td>
<td>25, t 15, f 18</td>
<td>+11</td>
<td>+11</td>
<td>+15</td>
<td>28</td>
<td>144</td>
<td>21</td>
<td>18</td>
<td>+8, +5, +4</td>
<td>+20 (2)</td>
<td>+16 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>13</td>
<td>26, t 15, f 19</td>
<td>+12</td>
<td>+12</td>
<td>+16</td>
<td>29</td>
<td>162</td>
<td>21</td>
<td>18</td>
<td>+9, +6, +4</td>
<td>+21 (2)</td>
<td>+17 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>14</td>
<td>27, t 16, f 20</td>
<td>+12</td>
<td>+12</td>
<td>+17</td>
<td>30</td>
<td>180</td>
<td>22</td>
<td>18</td>
<td>+9, +6, +4</td>
<td>+23 (2)</td>
<td>+18 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>15</td>
<td>28, t 16, f 21</td>
<td>+13</td>
<td>+13</td>
<td>+18</td>
<td>32</td>
<td>198</td>
<td>23</td>
<td>18</td>
<td>+10, +7, +5</td>
<td>+25 (2)</td>
<td>+20 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>16</td>
<td>29, t 17, f 21</td>
<td>+14</td>
<td>+14</td>
<td>+19</td>
<td>33</td>
<td>216</td>
<td>24</td>
<td>19</td>
<td>+11, +7, +5</td>
<td>+27 (2)</td>
<td>+22 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>17</td>
<td>30, t 18, f 22</td>
<td>+15</td>
<td>+15</td>
<td>+20</td>
<td>34</td>
<td>243</td>
<td>24</td>
<td>19</td>
<td>+11, +8, +5</td>
<td>+29 (2)</td>
<td>+23 (1)</td>
<td>2 magic, 1 any</td>
</tr>
<tr>
<td>18</td>
<td>31, t 18, f 23</td>
<td>+16</td>
<td>+16</td>
<td>+20</td>
<td>35</td>
<td>270</td>
<td>25</td>
<td>19</td>
<td>+12, +8, +6</td>
<td>+31 (2)</td>
<td>+25 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>19</td>
<td>32, t 19, f 24</td>
<td>+16</td>
<td>+16</td>
<td>+21</td>
<td>36</td>
<td>297</td>
<td>26</td>
<td>20</td>
<td>+13, +9, +6</td>
<td>+33 (2)</td>
<td>+27 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>20</td>
<td>34, t 20, f 25</td>
<td>+17</td>
<td>+17</td>
<td>+22</td>
<td>38</td>
<td>333</td>
<td>27</td>
<td>21</td>
<td>+13, +9, +6</td>
<td>+35 (2)</td>
<td>+28 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>21</td>
<td>35, t 21, f 26</td>
<td>+18</td>
<td>+18</td>
<td>+23</td>
<td>39</td>
<td>360</td>
<td>27</td>
<td>21</td>
<td>+14, +10, +7</td>
<td>+37 (2)</td>
<td>+30 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>22</td>
<td>37, t 22, f 27</td>
<td>+18</td>
<td>+18</td>
<td>+23</td>
<td>41</td>
<td>396</td>
<td>28</td>
<td>22</td>
<td>+14, +10, +7</td>
<td>+39 (2)</td>
<td>+32 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>23</td>
<td>38, t 22, f 28</td>
<td>+19</td>
<td>+19</td>
<td>+24</td>
<td>42</td>
<td>432</td>
<td>29</td>
<td>23</td>
<td>+15, +11, +7</td>
<td>+41 (2)</td>
<td>+33 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>24</td>
<td>40, t 24, f 30</td>
<td>+20</td>
<td>+20</td>
<td>+25</td>
<td>44</td>
<td>468</td>
<td>30</td>
<td>24</td>
<td>+15, +11, +8</td>
<td>+43 (2)</td>
<td>+35 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>25</td>
<td>41, t 24, f 30</td>
<td>+21</td>
<td>+21</td>
<td>+26</td>
<td>46</td>
<td>504</td>
<td>30</td>
<td>24</td>
<td>+16, +12, +8</td>
<td>+45 (2)</td>
<td>+37 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>26</td>
<td>42, t 25, f 31</td>
<td>+22</td>
<td>+22</td>
<td>+27</td>
<td>47</td>
<td>540</td>
<td>31</td>
<td>25</td>
<td>+16, +12, +8</td>
<td>+47 (2)</td>
<td>+38 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>27</td>
<td>43, t 25, f 32</td>
<td>+23</td>
<td>+23</td>
<td>+28</td>
<td>48</td>
<td>576</td>
<td>32</td>
<td>26</td>
<td>+17, +13, +9</td>
<td>+49 (2)</td>
<td>+40 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>28</td>
<td>44, t 26, f 33</td>
<td>+24</td>
<td>+24</td>
<td>+29</td>
<td>49</td>
<td>612</td>
<td>33</td>
<td>27</td>
<td>+17, +13, +9</td>
<td>+51 (2)</td>
<td>+42 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>29</td>
<td>45, t 27, f 33</td>
<td>+25</td>
<td>+25</td>
<td>+30</td>
<td>50</td>
<td>648</td>
<td>34</td>
<td>28</td>
<td>+18, +14, +10</td>
<td>+53 (2)</td>
<td>+43 (1)</td>
<td>3 magic, 1 any</td>
</tr>
<tr>
<td>30</td>
<td>46, t 27, f 34</td>
<td>+26</td>
<td>+26</td>
<td>+31</td>
<td>51</td>
<td>684</td>
<td>35</td>
<td>29</td>
<td>+18, +15, +110</td>
<td>+55 (2)</td>
<td>+45 (1)</td>
<td>3 magic, 1 any</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-spellcaster_array-table-5-6-spellcaster-attack-statistics">Table 5-6: Spellcaster Attack Statistics</h3>
<ScrollContainer id="rule-spellcaster_array--table-1"><table>
<thead>
<tr>
<th>CR</th>
<th>Weapon Attacks: High (Damage)</th>
<th>Weapon Attacks: Low (Damage)</th>
<th>Two Natural Attacks (Damage)</th>
<th>Three Natural Attacks (Damage)</th>
</tr>
</thead>
<tbody><tr>
<td>CR</td>
<td>High (Damage)</td>
<td>Low (Damage)</td>
<td>Two (Damage)</td>
<td>Three (Damage)</td>
</tr>
<tr>
<td>1/2</td>
<td>+1 (4)</td>
<td>+0 (3)</td>
<td>2 at -2 (4)</td>
<td>1 at -2 (6), 2 at -7 (4)</td>
</tr>
<tr>
<td>1</td>
<td>+2 (6)</td>
<td>+1 (5)</td>
<td>2 at -1 (4)</td>
<td>1 at -1 (6), 2 at -6 (4)</td>
</tr>
<tr>
<td>2</td>
<td>+4 (9)</td>
<td>+3 (6)</td>
<td>2 at +1 (6)</td>
<td>1 at +1 (6), 2 at -4 (4)</td>
</tr>
<tr>
<td>3</td>
<td>+6 (12)</td>
<td>+4 (8)</td>
<td>2 at +2 (6)</td>
<td>1 at +2 (8), 2 at -3 (4)</td>
</tr>
<tr>
<td>4</td>
<td>+8 (14)</td>
<td>+6 (11)</td>
<td>2 at +6 (8)</td>
<td>1 at +6 (10), 2 at +1 (5)</td>
</tr>
<tr>
<td>5</td>
<td>+10 (18)</td>
<td>+7 (13)</td>
<td>2 at +7 (9)</td>
<td>1 at +7 (12), 2 at +2 (6)</td>
</tr>
<tr>
<td>6</td>
<td>+12 (22)</td>
<td>+8 (16)</td>
<td>2 at +8 (12)</td>
<td>1 at +8 (15), 2 at +3 (8)</td>
</tr>
<tr>
<td>7</td>
<td>+13/+8 (18)</td>
<td>+10/+5 (13)</td>
<td>2 at +10 (14)</td>
<td>1 at +10 (18), 2 at +5 (9)</td>
</tr>
<tr>
<td>8</td>
<td>+15/+10 (21)</td>
<td>+11/+6 (16)</td>
<td>2 at +11 (16)</td>
<td>1 at +11 (21), 2 at +6 (11)</td>
</tr>
<tr>
<td>9</td>
<td>+17/+12 (24)</td>
<td>+12/+7 (18)</td>
<td>2 at +12 (18)</td>
<td>1 at +12 (24), 2 at +7 (12)</td>
</tr>
<tr>
<td>10</td>
<td>+18/+13 (27)</td>
<td>+13/+8 (20)</td>
<td>2 at +13 (21)</td>
<td>1 at +13 (27), 2 at +8 (14)</td>
</tr>
<tr>
<td>11</td>
<td>+19/+14 (30)</td>
<td>+14/+9 (22)</td>
<td>2 at +14 (23)</td>
<td>1 at +14 (30), 2 at +9 (15)</td>
</tr>
<tr>
<td>12</td>
<td>+21/+16 (33)</td>
<td>+15/+10 (24)</td>
<td>2 at +15 (25)</td>
<td>1 at +15 (33), 2 at +10 (17)</td>
</tr>
<tr>
<td>13</td>
<td>+22/+17 (36)</td>
<td>+16/+11 (27)</td>
<td>2 at +16 (27)</td>
<td>1 at +16 (36), 2 at +11 (18)</td>
</tr>
<tr>
<td>14</td>
<td>+23/+18/+13 (34)</td>
<td>+17/+12/+7 (25)</td>
<td>2 at +17 (30)</td>
<td>1 at +17 (39), 2 at +12 (20)</td>
</tr>
<tr>
<td>15</td>
<td>+24/+19/+14 (36)</td>
<td>+18/+13/+8 (27)</td>
<td>2 at +18 (32)</td>
<td>1 at +18 (42), 2 at +13 (21)</td>
</tr>
<tr>
<td>16</td>
<td>+26/+21/+16 (41)</td>
<td>+19/+14/+9 (31)</td>
<td>2 at +19 (36)</td>
<td>1 at +19 (48), 2 at +14 (24)</td>
</tr>
<tr>
<td>17</td>
<td>+27/+22/+17 (46)</td>
<td>+20/+15/+10 (35)</td>
<td>2 at +20 (41)</td>
<td>1 at +20 (54), 2 at +15 (27)</td>
</tr>
<tr>
<td>18</td>
<td>+28/+23/+18 (51)</td>
<td>+21/+16/+11 (39)</td>
<td>2 at +21 (45)</td>
<td>1 at +21 (60), 2 at +16 (30)</td>
</tr>
<tr>
<td>19</td>
<td>+29/+24/+19 (56)</td>
<td>+22/+17/+12 (42)</td>
<td>2 at +22 (50)</td>
<td>1 at +22 (66), 2 at +17 (33)</td>
</tr>
<tr>
<td>20</td>
<td>+30/+25/+20 (61)</td>
<td>+23/+18/+13 (46)</td>
<td>2 at +23 (54)</td>
<td>1 at +23 (72), 2 at +18 (36)</td>
</tr>
<tr>
<td>21</td>
<td>+31/+26/+21/+16 (63)</td>
<td>+24/+19/+14/+9 (47)</td>
<td>2 at +24 (59)</td>
<td>1 at +24 (78), 2 at +19 (39)</td>
</tr>
<tr>
<td>22</td>
<td>+32/+27/+22/+17 (67)</td>
<td>+25/+20/+15/+10 (51)</td>
<td>2 at +25 (63)</td>
<td>1 at +25 (84), 2 at +20 (42)</td>
</tr>
<tr>
<td>23</td>
<td>+33/+28/+23/+18 (72)</td>
<td>+26/+21/+16/+11 (54)</td>
<td>2 at +26 (68)</td>
<td>1 at +26 (90), 2 at +21 (45)</td>
</tr>
<tr>
<td>24</td>
<td>+35/+30/+25/+20 (79)</td>
<td>+27/+22/+17/+12 (60)</td>
<td>2 at +27 (75)</td>
<td>1 at +27 (99), 2 at +22 (50)</td>
</tr>
<tr>
<td>25</td>
<td>+36/+31/+26/+21 (86)</td>
<td>+28/+23/+18/+13 (65)</td>
<td>2 at +28 (81)</td>
<td>1 at +28 (108), 2 at +23 (54)</td>
</tr>
<tr>
<td>26</td>
<td>+37/+32/+27/+22 (94)</td>
<td>+29/+24/+19/+14 (70)</td>
<td>2 at +29 (88)</td>
<td>1 at +29 (117), 2 at +24 (59)</td>
</tr>
<tr>
<td>27</td>
<td>+38/+33/+28/+23 (101)</td>
<td>+30/+25/+20/+15 (74)</td>
<td>2 at +30 (95)</td>
<td>1 at +30 (126), 2 at +25 (63)</td>
</tr>
<tr>
<td>28</td>
<td>+39/+34/+29/+24 (108)</td>
<td>+31/+26/+21/+16 (79)</td>
<td>2 at +31 (102)</td>
<td>1 at +31 (135), 2 at +26 (68)</td>
</tr>
<tr>
<td>29</td>
<td>+40/+35/+30/+25 (115)</td>
<td>+32/+27/+22/+17 (84)</td>
<td>2 at +32 (108)</td>
<td>1 at +32 (144), 2 at +27 (72)</td>
</tr>
<tr>
<td>30</td>
<td>+41/+36/+31/+26 (122)</td>
<td>+33/+28/+23/+18 (89)</td>
<td>2 at +33 (115)</td>
<td>1 at +33 (153), 2 at +28 (77)</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _step_2_creature_type_or_class_graft = {title: "Step 2: Creature Type or Class Graft", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["creature_type_grafts","class_grafts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 204</Link></p>
<p>With the normal monster creation system, foundational statistics such as base attack bonus, saving throw bonuses, and hit points are calculated from a monster's creature type and class levels. In this system, a monster's array sets its main statistics based on the broad role and CR it fits into. Creature types and classes then adjust those statistics to better resemble a particular monster concept.</p>
<p>Creature types and character classes are represented by "grafts" - groups of adjustments applied to an array's statistics. A monster made with this system is primarily defined either by its creature type or a character class. For example, a ghoul that is a powerful cleric would most likely use the cleric class graft rather than being defined primarily as undead. A fire giant with 3 levels in bard, on the other hand, should use the humanoid creature type graft and later choose some monster options that grant bard-like abilities.</p>
<p>If the focus is on a creature type, choose the appropriate creature type graft and apply the adjustments in that graft as described in the next section. If the focus is on a class, still choose a creature type graft but only apply its "automatic traits" entry, then apply the class graft. Even if a dragon has 20 levels in rogue (thus using the rogue class graft), for example, it still gets a dragon's normal vision types and immunities.</p>
</>};
const _creature_type_grafts = {title: "Creature Type Grafts", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft"], siblings: ["creature_type_grafts","class_grafts"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 204</Link></p>
<p>Altering an array by creature type is a simple process that typically adds or changes some of the monster's statistics. Each creature type includes at least the first two entries.</p>
<p><strong className="hl">Automatic Traits:</strong> All creatures of this type get these abilities, which typically include senses, immunities, and more detailed sets of traits that are defined in the creature type's full description. This doesn't include forms of movement; see Speed in <Link to="/rule/other_calculations">Other Calculations</Link>.</p>
<p><strong className="hl">Statistics Adjustments:</strong> These modifications change the base numbers from the monster's array. These are adjustments, not replacements; increase or decrease the statistics you recorded from the array by the amount indicated. Apply these adjustments to your monster only if it doesn't have a class graft.</p>
<p><strong className="hl">Elective Adjustments:</strong> These are optional changes that can better evoke the monster's type, frequently including changes to the array's list of skills, monster options typical for this creature type (see <Link to="/rule/step_7_monster_options">Step 7</Link>), suggested spell lists, or even suggested restrictions. These should point you toward abilities that typically appear among creatures of the listed type, but aren't an exhaustive list of possibilities for monsters of that type.</p>
<h3 id="rule-creature_type_grafts-aberration">Aberration</h3>
<p>An aberration has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Will save bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Spells from the aberrant list.</p>
<h3 id="rule-creature_type_grafts-animal">Animal</h3>
<p>An animal is a living, non-human creature, usually with no magical abilities and no innate capacity for language.</p>
<p><strong className="hl">Automatic Traits:</strong> Low-light vision; set Intelligence modifier to -4 or -5.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 2.</p>
<h3 id="rule-creature_type_grafts-construct">Construct</h3>
<p>A construct is an animated object or artificially created creature. Most constructs have little willpower of their own, but are exceptionally hardy.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft., low-light vision; construct immunities; set Constitution modifier to -.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Decrease Fortitude, Reflex, and Will saving throw bonuses by 2; increase attack bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Mindless; set Intelligence modifier to - for mindless constructs; no master or good skills.</p>
<h3 id="rule-creature_type_grafts-dragon">Dragon</h3>
<p>A dragon is a reptile-like creature, usually winged, with magical or unusual abilities.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft., low-light vision; immune to paralysis and sleep.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase low saving throw bonuses by 2; increase attack bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Breath weapon combat option (monstrous); secondary magic universal option; one additional master skill.</p>
<h3 id="rule-creature_type_grafts-fey">Fey</h3>
<p>A fey is a supernatural creature that typically derives its power from its relationship to or guardianship of an area or natural feature. Fey usually resemble humans or gnomes, though fey animals exist.</p>
<p><strong className="hl">Automatic Traits:</strong> Low-light vision.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Reflex and Will saving throw bonuses by 2; decrease attack bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Spells from the fey list; one additional master skill.</p>
<h3 id="rule-creature_type_grafts-humanoid">Humanoid</h3>
<p>A humanoid usually has two arms, two legs, and one head, or a human-like torso, arms, and a head. Humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies. They are usually Small or Medium (with the exception of giants). Every humanoid creature also has a specific subtype to match its race, such as human, giant, goblinoid, reptilian, or tengu.</p>
<p><strong className="hl">Automatic Traits:</strong> None.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase any one saving throw bonus by 2.</p>
<h3 id="rule-creature_type_grafts-magical-beast">Magical Beast</h3>
<p>Magical beasts are similar to animals, but can have Intelligence scores higher than 2 (in which case the magical beast knows at least one language, but can't necessarily speak). In addition, magical beasts usually have supernatural or extraordinary abilities.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft., low-light vision.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 2; increase attack bonus by 2.</p>
<h3 id="rule-creature_type_grafts-monstrous-humanoid">Monstrous Humanoid</h3>
<p>Monstrous humanoids are similar to humanoids, but with distorted or animalistic features. They often have magical abilities as well.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Reflex and Will saving throw bonuses by 2; increase attack bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> One additional good skill.</p>
<h3 id="rule-creature_type_grafts-ooze">Ooze</h3>
<p>An ooze is an amorphous or mutable creature, usually without a mind of its own. Options for oozes typically reflect their diverse physical compositions and innate abilities.</p>
<p><strong className="hl">Automatic Traits:</strong> Blind, blindsight; mindless, ooze immunities, not subject to critical hits or flanking; set Intelligence modifier to -.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2, decrease Reflex and Will saving throw bonuses by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> No master or good skills.</p>
<h3 id="rule-creature_type_grafts-outsider">Outsider</h3>
<p>Most outsiders are beings native to a plane other than the Material Plane, or mortal descendants of such creatures. All outsiders are at least partially composed of the essence of their home planes. Some creatures become outsiders when they attain a higher (or lower) state of spiritual existence.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase one saving throw bonus by 2; increase attack bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Spells from the abyssal, celestial, or infernal list; one additional master skill.</p>
<h3 id="rule-creature_type_grafts-plant">Plant</h3>
<p>This type comprises vegetable creatures. Note that regular plants, such those found growing in gardens and fields, lack Wisdom and Charisma scores and aren't creatures, but objects, even though they are alive.</p>
<p><strong className="hl">Automatic Traits:</strong> Low-light vision; plant immunities.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> No master or good skills.</p>
<h3 id="rule-creature_type_grafts-undead">Undead</h3>
<p>Undead are once-living creatures that have been reanimated by spiritual or supernatural forces.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft.; undead immunities, set Constitution modifier to -.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Will saving throw bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> Mindless; no master or good skills; set Intelligence modifier to - for mindless undead.</p>
<h3 id="rule-creature_type_grafts-vermin">Vermin</h3>
<p>Concerned only with survival, vermin are common in nearly all environments. This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.</p>
<p><strong className="hl">Automatic Traits:</strong> Darkvision 60 ft.; mindless; set Intelligence modifier to -.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2.</p>
<p><strong className="hl">Elective Adjustments:</strong> No master or good skills.</p>
</>};
const _class_grafts = {title: "Class Grafts", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft"], siblings: ["creature_type_grafts","class_grafts"], subtopics: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<p>Class grafts are more detailed than creature type grafts, ensuring that they more closely represent a PC class of the appropriate level. Each class graft is divided into the following sections.</p>
<p><strong className="hl">Special Rules:</strong> This section appears in only some entries, and describes the class's significant requirements or features.</p>
<p><strong className="hl">Required Array:</strong> You should use a specific array when you create a monster of this class. This is one instance in which a graft has a prerequisite, meant to match the feel of the class.</p>
<p>If you want to replicate a class without using the indicated array, do so without using the class graft. For example, if you wanted to create a cleric monster with the combatant array, you could still achieve a cleric's flavor by choosing the secondary magic option in Step 7. This essentially replicates a cleric built under the standard creation system that took combat feats and pre-casts many of its spells to give itself combat bonuses.</p>
<p><strong className="hl">Statistics Adjustments:</strong> These change or replace some of the baseline numbers, skills, and options given by the monster's array. Apply the adjustments as written. Any skill listed replaces one of the choices of skills the monster gets from its array (with either a master or good bonus, as specified). If a monster gains additional skills above the normal allotment, this entry lists "one additional master skill" or "one additional good skill." The adjustments might also specify options, which replace the allotted options the monster gets from its array.</p>
<p><strong className="hl">CR Entries:</strong> These adjustments replicate advancement by level. Apply only the highest entry to your monster: a CR 3 rogue would get the CR 3 line, but not the CR 1 line. Options gained from these entries replace options granted by the monster's array. It's possible the class graft will add more options than the monster's array allows; that's fine, and as usual you can selectively add or remove bonus options if you need to do so to make the monster function in a thematically appropriate way. See Step 7 for descriptions of these options.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> This section lists the recommended assignments for the monster's ability score bonuses, in order from highest to lowest. For instance, the barbarian lists "Strength, Constitution, Dexterity," meaning that when making a CR 1/2 barbarian, you would give it a +3 Strength modifier, a +2 Constitution modifier, and a +1 Dexterity modifier.</p>
<p><strong className="hl">Suggested Options:</strong> These entries offer suggestions for cases in which the monster's array grants additional monster options beyond those determined by the class graft. They typically mimic flexible character class options, such as barbarian rage powers or rogue talents (see <Link to="/rule/step_7_monster_options">Step 7</Link>).</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Found only in class grafts for spellcaster monsters, these entries point you toward the spell lists that best replicate that class's typical spells.</p>
</>};
const _class_grafts_1 = {title: "Alchemist, Barbarian, Bard, Cavalier", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft","class_grafts"], siblings: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<h3 id="rule-class_grafts_1-alchemist">Alchemist</h3>
<p>Alchemists stand at the crossroads of magic and science. They blend exotic chemicals and infuse them with magical power in order to create unusual and sometimes unpredictable effects.</p>
<p><strong className="hl">Special Rules:</strong> The spellcasting ability granted by this graft simulates the extracts an alchemist makes. The alchemist must use the alchemy spell list. Furthermore, "spells" the alchemist casts count as supernatural effects rather than spells.</p>
<p><strong className="hl">Required Array:</strong> Expert.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Use the combatant array's saving throws; skill-master Craft (alchemy); options-bombs, mutagen, secondary magic.</p>
<p><strong className="hl">CR 1:</strong> Options-energy infusion.</p>
<p><strong className="hl">CR 3:</strong> Replace secondary magic with spellcasting (as if CR 2); options-energy infusion, one any.</p>
<p><strong className="hl">CR 6:</strong> Replace secondary magic with spellcasting (as if CR 4); options-energy infusion, one any.</p>
<p><strong className="hl">CR 9:</strong> Replace secondary magic with spellcasting (as if CR 6); options-energy infusion, immunity (poison), one any.</p>
<p><strong className="hl">CR 12:</strong> Replace secondary magic with spellcasting (as if CR 8); options-energy infusion, immunity (poison), one magic, one any.</p>
<p><strong className="hl">CR 15:</strong> Replace secondary magic with spellcasting (as if CR 10); options-energy infusion, immunity (poison), one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Replace secondary magic with spellcasting (as if CR 12); options-energy infusion, immunity (poison), one magic, two any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Intelligence, Constitution, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Extra attack (the alchemist can use this ability with bombs), knowledgeable, poison, spontaneous casting (cure), trap squares.</p>
<p><strong className="hl">Suggested Spell List:</strong> Alchemy.</p>
<h3 id="rule-class_grafts_1-barbarian">Barbarian</h3>
<p>Fueled by wrath, driven by fury, barbarians unleash their rage to become powerful killing machines. They revel in the carnage they create and pay no heed to danger.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase speed by 10 feet; increase Fortitude saving throw bonus by 2; skill-master Intimidate; options-extra hit points, rage.</p>
<p><strong className="hl">CR 1:</strong> Options-uncanny dodge, one combat.</p>
<p><strong className="hl">CR 5:</strong> Options-uncanny dodge, unflankable, one combat.</p>
<p><strong className="hl">CR 7:</strong> Options-damage reduction as if 5 CR lower, uncanny dodge, unflankable, one combat.</p>
<p><strong className="hl">CR 15:</strong> Options-damage reduction as if 5 CR lower, uncanny dodge, unflankable, two combat.</p>
<p><strong className="hl">CR 19:</strong> Options-damage reduction as if 5 CR lower, uncanny dodge, unflankable, three combat.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Constitution, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Combat reflexes, critical striker, diehard, improved combat maneuver (bull rush or grapple), mobile attack, power attack.</p>
<h3 id="rule-class_grafts_1-bard">Bard</h3>
<p>Bards infuse their performances with magic to bolster their allies. Bards supplement their music with spells, typically favoring those that enchant, beguile, and befuddle.</p>
<p><strong className="hl">Required Array:</strong> Expert.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Reflex saving throw bonuses by 2; skills-master Perform, one additional master; options-inspire courage, knowledgeable, secondary magic, one social.</p>
<p><strong className="hl">CR 3:</strong> Replace secondary magic with spellcasting (as if CR 2); option-one any.</p>
<p><strong className="hl">CR 6:</strong> Replace secondary magic with spellcasting (as if CR 4); option-one any.</p>
<p><strong className="hl">CR 9:</strong> Replace secondary magic with spellcasting (as if CR 6); option-one any.</p>
<p><strong className="hl">CR 12:</strong> Replace secondary magic with spellcasting (as if CR 8); options-one social, one any.</p>
<p><strong className="hl">CR 15:</strong> Replace secondary magic with spellcasting (as if CR 10); options-one social, one any.</p>
<p><strong className="hl">CR 18:</strong> Replace secondary magic with spellcasting (as if CR 12); options-one social, two any.</p>
<p><strong className="hl">CR 19:</strong> Replace secondary magic with spellcasting (as if CR 14); options-slaying attack (requires performing for 1 full round instead of hitting with an attack), one social, two any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Charisma, Intelligence, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, countersong, fascinate, inspire competence, linguist, persuasive.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Charm, enchantment, fey, liberation, trickery.</p>
<h3 id="rule-class_grafts_1-cavalier">Cavalier</h3>
<p>When mounted on a warhorse or some other steed trained for battle, the cavalier dominates the battlefield. He might serve as a battle leader, rallying allies to his banner.</p>
<p><strong className="hl">Special Rules:</strong> The cavalier works well with a mount. See the Animal Companions and Mounts section below.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; skill-master Ride; options-challenge, one any.</p>
<p><strong className="hl">CR 3:</strong> Options-mounted mastery.</p>
<p><strong className="hl">CR 4:</strong> Options-inspire courage, mounted mastery.</p>
<p><strong className="hl">CR 13:</strong> Options-aura of resistance (charm, compulsion), heroic recovery, inspire courage, mounted mastery, one combat.</p>
<p><strong className="hl">CR 17:</strong> Options-aura of resistance (charm, compulsion), heroic recovery, inspire courage, mounted mastery, two combat.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Dexterity, Constitution.</p>
<p><strong className="hl">Suggested Options:</strong> Critical striker, extra armor, improved combat maneuver, mounted master, powerful charge.</p>
</>};
const _class_grafts_2 = {title: "Cleric, Druid, Fighter, Gunslinger, Inquisitor", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft","class_grafts"], siblings: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<h3 id="rule-class_grafts_2-cleric">Cleric</h3>
<p>Clerics draw power from the gods they serve to advance their interests in the world. As varied as the gods, clerics possess a wide array of spells and abilities with which they fight the enemies of their faith. Many clerics focus on battle and choose various combat options.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2; skill-master Knowledge (religion); option-channel energy, spontaneous casting (cure or inflict), one any.</p>
<p><strong className="hl">CR 12:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-one magic, two any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Wisdom, Strength, Charisma.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, extra armor, protective ward, turn undead; see Domain Options below.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Chaos, evil, good, law, by domain.</p>
<h4 id="rule-class_grafts_2-domain-options">Domain Options</h4>
<p>The suggested options for a cleric vary based on the cleric's domains. Consider the following options if a specific domain ability is particularly important to the cleric. Other monsters that gain domains, such as druids, or any creature with a theme or feature similar to a cleric's domain might also draw from the appropriate domain's list of options. See Step 7 for descriptions of monster options.</p>
<p><strong className="hl">Air:</strong> Energy resistance (electricity), magic attack (electricity).</p>
<p><strong className="hl">Animal:</strong> Animal talker.</p>
<p><strong className="hl">Artifice:</strong> Magic weapon.</p>
<p><strong className="hl">Chaos:</strong> Bypass DR (chaotic), misfortune (requires a melee touch attack).</p>
<p><strong className="hl">Charm:</strong> Bestow moderate condition (dazed).</p>
<p><strong className="hl">Community:</strong> Remove minor condition.</p>
<p><strong className="hl">Darkness:</strong> See in darkness.</p>
<p><strong className="hl">Death:</strong> Bleed, negative healing.</p>
<p><strong className="hl">Destruction:</strong> Power attack.</p>
<p><strong className="hl">Earth:</strong> Energy resistance (acid), magic attack (acid).</p>
<p><strong className="hl">Evil:</strong> Bestow minor condition (sickened, and the sickened creature counts as good for the purposes of spells with the evil descriptor), bypass DR (evil).</p>
<p><strong className="hl">Fire:</strong> Energy resistance (fire), magic attack (fire).</p>
<p><strong className="hl">Glory:</strong> Inspire competence (typically for Charisma-based skills).</p>
<p><strong className="hl">Good:</strong> Bolstering touch, bypass DR (good).</p>
<p><strong className="hl">Healing:</strong> Potent healing.</p>
<p><strong className="hl">Knowledge:</strong> Knowledgeable.</p>
<p><strong className="hl">Law:</strong> Bypass DR (lawful).</p>
<p><strong className="hl">Liberation:</strong> Immunity (grappled, paralyzed).</p>
<p><strong className="hl">Luck:</strong> Fortune (requires touching the subject).</p>
<p><strong className="hl">Madness:</strong> Confusion aura.</p>
<p><strong className="hl">Magic:</strong> Magic attack (bludgeoning, piercing, or slashing).</p>
<p><strong className="hl">Nobility:</strong> Inspire courage (affects only one creature).</p>
<p><strong className="hl">Plant:</strong> Damaging body (piercing).</p>
<p><strong className="hl">Protection:</strong> Protective ward, save boost.</p>
<p><strong className="hl">Repose:</strong> Bestow moderate condition (staggered, lasts only 1 round), immunity (death effects).</p>
<p><strong className="hl">Rune:</strong> Trap squares (magical trap only).</p>
<p><strong className="hl">Strength:</strong> Combatant's touch (Strength only).</p>
<p><strong className="hl">Sun:</strong> Potent magic damage (healing).</p>
<p><strong className="hl">Travel:</strong> Dimensional steps, terrain stride.</p>
<p><strong className="hl">Trickery:</strong> Constant invisibility.</p>
<p><strong className="hl">War:</strong> Replace a magic option from the cleric graft with a combat option.</p>
<p><strong className="hl">Water:</strong> Energy resistance (cold), magic attack (cold).</p>
<p><strong className="hl">Weather:</strong> Magic attack (electricity).</p>
<h3 id="rule-class_grafts_2-druid">Druid</h3>
<p>Guardians of balance, protectors of nature, druids wield power drawn from the world around them. Equipped with magic that allows them to manipulate nature and assume different forms, druids have a bevy of methods in their arsenals to defeat their enemies. <Link to="/umr/change_shape">Change shape</Link> functions as the universal monster rule, allowing the druid to change into the listed creature types. A druid changed in this way can still cast spells.</p>
<p><strong className="hl">Special Rules:</strong> Druids often have animal companions. See <strong className="hl">Animal Companions and Mounts</strong> below.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonuses by 2; skills-master Knowledge (nature) and Survival; options-spontaneous casting (summon nature's ally), one any.</p>
<p><strong className="hl">CR 1:</strong> Options-terrain stride (undergrowth).</p>
<p><strong className="hl">CR 3:</strong> Options-change shape (Small or Medium animal), terrain stride (undergrowth).</p>
<p><strong className="hl">CR 5:</strong> Options-change shape (Tiny, Small, Medium, or Large animal or Small elemental), terrain stride (undergrowth), one magic.</p>
<p><strong className="hl">CR 7:</strong> Options-change shape (any size animal, Medium or smaller elemental, or Small or Medium plant), terrain stride (undergrowth), one magic.</p>
<p><strong className="hl">CR 9:</strong> Options-change shape(any size animal, Large or smaller elemental, or Large or smaller plant), immunity (poison), terrain stride (undergrowth), one magic.</p>
<p><strong className="hl">CR 11:</strong> Options-change shape (any size animal, Huge or smaller elemental, or Huge or smaller plant), immunity (poison), terrain stride (undergrowth), one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-change shape (any size animal, Huge or smaller elemental, or Huge or smaller plant), immunity (poison), terrain stride (undergrowth), two magic, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Wisdom, Constitution, Charisma.</p>
<p><strong className="hl">Suggested Options:</strong> Animal talker, combat casting, magic attack, powerful summons; see Domain Options from the Cleric above.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Air, animal, earth, fire, healing, nature, plant, water, weather.</p>
<h3 id="rule-class_grafts_2-fighter">Fighter</h3>
<p>Fighters excel in battle. Their training makes them the undisputed masters of arms and armor, and their grit and determination see them through almost any conflict.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; option-one combat.</p>
<p><strong className="hl">CR 1:</strong> Options-one combat.</p>
<p><strong className="hl">CR 3:</strong> Options-two combat.</p>
<p><strong className="hl">CR 5:</strong> Options-three combat.</p>
<p><strong className="hl">CR 7:</strong> Options-four combat.</p>
<p><strong className="hl">CR 11:</strong> Options-five combat.</p>
<p><strong className="hl">CR 15:</strong> Options-six combat.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Dexterity, Constitution.</p>
<p><strong className="hl">Suggested Options:</strong> Accuracy, combat reflexes, extra armor, extra attack, improved combat maneuver, extra armor, power attack.</p>
<h3 id="rule-class_grafts_2-gunslinger">Gunslinger</h3>
<p>Gunslingers focus their training on handling firearms, coaxing every advantage they can from the weapons they have mastered. Guns blazing, they tend to fearlessly lead the way in battle.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; options-firearm savvy, one combat.</p>
<p><strong className="hl">CR 3:</strong> Options-one any.</p>
<p><strong className="hl">CR 10:</strong> Options-fast reload, one combat, one any.</p>
<p><strong className="hl">CR 14:</strong> Options-evasion, fast reload, uncanny dodge, two combat, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-evasion, fast reload, uncanny dodge, three combat, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Dexterity, Constitution, Wisdom.</p>
<p><strong className="hl">Suggested Options:</strong> Bleed, fear attack (burst), improved initiative, magic weapon, stun attack.</p>
<h3 id="rule-class_grafts_2-inquisitor">Inquisitor</h3>
<p>The gods grant inquisitors the power to root out the enemies of their faith and destroy them. Implacable in their focus and driven by their devotion, inquisitors undertake their divine missions with the grim determination required to deal with those who oppose their deities.</p>
<p><strong className="hl">Required Array:</strong> Expert.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1, increase Will saving throw bonus by 2; skills-master Intimidate and Sense Motive; options-secondary magic, one any.</p>
<p><strong className="hl">CR 3:</strong> Replace secondary magic with spellcasting (as if CR 2); options-improved initiative, one combat.</p>
<p><strong className="hl">CR 4:</strong> Replace secondary magic with spellcasting (as if CR 2); options-improved initiative, magic weapon (<Link to="/magic-enh/bane">bane</Link>), one combat.</p>
<p><strong className="hl">CR 6:</strong> Replace secondary magic with spellcasting (as if CR 4); options-improved initiative, magic weapon (<em>bane</em>), one combat.</p>
<p><strong className="hl">CR 9:</strong> Replace secondary magic with spellcasting (as if CR 6); options-improved initiative, magic weapon (<em>bane</em>), stalwart, one combat.</p>
<p><strong className="hl">CR 12:</strong> Replace secondary magic with spellcasting (as if CR 8); options-improved initiative, magic weapon (<em>bane</em>), stalwart, one combat, one social.</p>
<p><strong className="hl">CR 15:</strong> Replace secondary magic with spellcasting (as if CR 10); options-improved initiative, magic weapon (<em>bane</em>), stalwart, one combat, one social.</p>
<p><strong className="hl">CR 18:</strong> Replace secondary magic with spellcasting (as if CR 12); options-improved initiative, magic weapon (<Link to="/magic-enh/bane">bane</Link>), stalwart, two combat, one social.</p>
<p><strong className="hl">CR 19:</strong> Replace secondary magic with spellcasting (as if CR 14); options-improved initiative, magic weapon (<em>bane</em>), slaying attack, stalwart, two combat, one social.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Wisdom, Strength or Dexterity, Charisma.</p>
<p><strong className="hl">Suggested Options:</strong> Accuracy, bypass DR (magic, plus one alignment type if CR 5 or higher, plus adamantine if CR 9 or higher), damage reduction (magic, or by alignment if CR 9 or higher), energy resistance, extra armor, fast healing, power attack, save boost, spell penetration.</p>
<p><strong className="hl">Suggested Spell List:</strong> By domain.</p>
</>};
const _class_grafts_3 = {title: "Magus, Monk, Oracle, Paladin, Ranger", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft","class_grafts"], siblings: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<h3 id="rule-class_grafts_3-magus">Magus</h3>
<p>The magus blends weapon training and magic to become an effective master of both.</p>
<p><strong className="hl">Required Array:</strong> Expert.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2; options-magic weapon, secondary magic, spell combat, one magic.</p>
<p><strong className="hl">CR 1:</strong> Options-spellstrike.</p>
<p><strong className="hl">CR 3:</strong> Replace secondary magic with spellcasting (as if CR 2); options-spellstrike, one combat.</p>
<p><strong className="hl">CR 6:</strong> Replace secondary magic with spellcasting (as if CR 4); options-combat casting, spellstrike, one combat.</p>
<p><strong className="hl">CR 9:</strong> Replace secondary magic with spellcasting (as if CR 6); options-combat casting, spellstrike, one combat.</p>
<p><strong className="hl">CR 12:</strong> Replace secondary magic with spellcasting (as if CR 8); options-combat casting, spellstrike, one combat, one magic.</p>
<p><strong className="hl">CR 15:</strong> Replace secondary magic with spellcasting (as if CR 10); options-combat casting, mage punisher, spellstrike, one combat, one magic.</p>
<p><strong className="hl">CR 18:</strong> Replace secondary magic with spellcasting (as if CR 12); options-combat casting, mage punisher, spellstrike, two combat, one magic.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Intelligence, Strength, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Dodge expert, improved combat maneuver, magic attack (melee), metamagic spell, mobile attack (melee).</p>
<h3 id="rule-class_grafts_3-monk">Monk</h3>
<p>Masters of complex fighting techniques, monks supplement their physical training with mystical powers that help them push past mortal limits.</p>
<p><strong className="hl">Special Rules:</strong> The monk's unarmed attacks use a specified die progression for damage, beginning at 1d6 and increasing based on CR. This alters only the damage calculation from <Link to="/rule/step_9_damage">Step 9: Damage</Link>; the total amount of damage is still based on the combatant array.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1, increase Will saving throw bonus by 2; skill-master Acrobatics; options-extra attack, stun attack, one combat; monk unarmed damage 1d6.</p>
<p><strong className="hl">CR 1:</strong> Options-evasion, one combat.</p>
<p><strong className="hl">CR 3:</strong> Increase speed by 10 feet; options-bypass DR (magic), evasion, one combat.</p>
<p><strong className="hl">CR 5:</strong> Increase speed by 20 feet; options-bypass DR (magic), evasion, immunity (disease), unarmed damage 1d8, one combat.</p>
<p><strong className="hl">CR 7:</strong> Increase speed by 20 feet; options-bypass DR (magic), evasion, immunity (disease), unarmed damage 1d10, one combat.</p>
<p><strong className="hl">CR 9:</strong> Increase speed by 30 feet; options-bypass DR (lawful, magic), evasion, immunity (disease), unarmed damage 1d10, one combat.</p>
<p><strong className="hl">CR 11:</strong> Increase speed by 40 feet; options-bypass DR (lawful, magic), evasion, immunity (disease, poison), unarmed damage 2d6, one combat.</p>
<p><strong className="hl">CR 13:</strong> Increase speed by 40 feet; options-bypass DR (lawful, magic), evasion, immunity (disease, poison), spell resistance, unarmed damage 2d6, two combat.</p>
<p><strong className="hl">CR 15:</strong> Increase speed by 50 feet; options-bypass DR (adamantine, lawful, magic), evasion, immunity (disease, poison), spell resistance, unarmed damage 2d8, two combat.</p>
<p><strong className="hl">CR 17:</strong> Increase speed by 60 feet; options-bypass DR (adamantine, lawful, magic), evasion, immunity (disease, poison), spell resistance, unarmed damage 2d8, three combat.</p>
<p><strong className="hl">CR 19:</strong> Increase speed by 60 feet; options-bypass DR (adamantine, lawful, magic), damage reduction (chaotic), evasion, immunity (disease, falling damage, poison), spell resistance, unarmed damage 2d10, three combat.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Wisdom, Dexterity, Strength.</p>
<p><strong className="hl">Suggested Options:</strong> Deflect projectiles, improved combat maneuver, improved initiative, mobile attack (melee), quivering palm, secondary magic (dimension door and etherealness), whirlwind attack.</p>
<h3 id="rule-class_grafts_3-oracle">Oracle</h3>
<p>Rather than devote themselves to a single god, oracles serve diverse forces. In return for their devotion, oracles gain access to strange and mysterious mystical power.</p>
<p><strong className="hl">Special Rules:</strong> The oracle has a unique curse that doesn't appear with the other monster options. The traits gained at each CR are cumulative. Choose one of the following.</p>
<ul>
<li>Clouded Vision: The monster has darkvision to 30 feet, but can't see anything beyond that range. At CR 4, this increases to 60 feet. At CR 9, the monster also gains blindsense to 30 feet. At CR 14, the monster also gains blindsight to 15 feet.</li>
<li>Deaf: The monster is permanently deafened. It ignores the verbal component of any spell it casts. At CR 4, the monster gains a master bonus on Perception checks that do not rely on hearing. At CR 9, the monster gains scent. At CR 14, the monster gains tremorsense to 30 feet.</li>
<li>Haunted: The monster must use a standard action to retrieve a stored item unless doing so would normally take more time. Any item the monster drops lands 10 feet away from it in a random direction. The monster gains the at-will magic option (<Link to="/spell/mage_hand">mage hand</Link> and <Link to="/spell/ghost_sound">ghost sound</Link>).</li>
<li>Lame: Reduce the monster's speed by 10 feet. At CR 4, the monster is immune to the fatigued condition. At CR 14, the monster is immune to the exhausted condition.</li>
<li>Tongues: Add one of the following languages to the list of languages the monster knows: Abyssal, Aklo, Aquan, Auran, Celestial, Ignan, Infernal, or Terran. In combat, the monster can speak and understand only this language. At CR 4, add another language from the list to the languages the monster can speak during combat. At CR 9, the monster can understand any spoken language, as if under the effects of <Link to="/spell/tongues">tongues</Link>, even in combat. At CR 14, the monster can speak any language outside combat.</li>
<li>Wasting: Decrease the monster's Charisma modifier by 4. At CR 4, the monster becomes immune to the sickened condition. At CR 9, the monster becomes immune to disease. At CR 14, the monster becomes immune to the nauseated condition.</li>
</ul>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Reflex and Will saving throw bonuses by 1; options-mystery (any), one any.</p>
<p><strong className="hl">CR 3:</strong> Options-one magic.</p>
<p><strong className="hl">CR 12:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-two magic, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Charisma, Wisdom, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, dodge expert, extra armor, spontaneous casting (cure); see Mystery Options below.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Chaos, evil, good, law, by mystery.</p>
<h4 id="rule-class_grafts_3-mystery-options">Mystery Options</h4>
<p>The mystery an oracle possesses can alter her abilities significantly. Consider the following options if a mystery ability is particularly important to the oracle. Any creature with a theme similar to a given oracle mystery might also draw from that mystery's list of options.</p>
<p><strong className="hl">Battle:</strong> Damage reduction (adamantine), inspire courage.</p>
<p><strong className="hl">Bones:</strong> At-will magic (<Link to="/spell/animate_dead">animate dead</Link>), constant invisibility, incorporeal.</p>
<p><strong className="hl">Flame:</strong> Breath weapon (cone of fire), metamagic spell (fire spells only).</p>
<p><strong className="hl">Heavens:</strong> Energy explosion (5-ft. burst).</p>
<p><strong className="hl">Life:</strong> Blindsight 30 ft. (detects living creatures only), channel energy.</p>
<p><strong className="hl">Lore:</strong> Knowledgeable.</p>
<p><strong className="hl">Nature:</strong> Animal talker, vampiric attack (ranged).</p>
<p><strong className="hl">Stone:</strong> Earth glide, magic attack (bludgeoning), metamagic spell (earth spells only).</p>
<p><strong className="hl">Waves:</strong> Magic attack (cold, melee touch attack), magic weapon (cold energy), metamagic spell (cold or water spell).</p>
<p><strong className="hl">Wind:</strong> Extra armor, fly 90 ft. (good), metamagic spell (air or electricity spells only).</p>
<h3 id="rule-class_grafts_3-paladin">Paladin</h3>
<p>Paladins champion law and good and bring divine power to bear against the agents of chaos and evil.</p>
<p><strong className="hl">Special Rules:</strong> Some paladins have mounts. See the Animal Companions and Mounts section below.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude saving throw bonus by 2, increase Will saving throw bonus by 3; <Link to="/spell/detect_evil">detect evil</Link> at will; options-smite (evil), one any.</p>
<p><strong className="hl">CR 1:</strong> Options-healing touch.</p>
<p><strong className="hl">CR 3:</strong> Options-aura of resistance (fear), channel energy, immunity (disease, fear), healing touch, secondary magic (as if CR 1).</p>
<p><strong className="hl">CR 7:</strong> Options-aura of resistance (charm, fear), channel energy, immunity (charm, disease, fear), healing touch, save boost, secondary magic (as if CR 2).</p>
<p><strong className="hl">CR 9:</strong> Options-aura of resistance (charm, fear), channel energy, immunity (charm, disease, fear), healing touch, save boost, secondary magic (as if CR 4).</p>
<p><strong className="hl">CR 13:</strong> Options-aura of resistance (charm, fear), bypass DR (good), channel energy, immunity (charm, disease, fear), healing touch, save boost, secondary magic (as if CR 6), one combat.</p>
<p><strong className="hl">CR 15:</strong> Options-aura of resistance (charm, compulsion, fear), bypass DR (good), channel energy, damage reduction (evil), immunity (charm, compulsion, disease, fear), healing touch, save boost, secondary magic (as if CR 6), one combat.</p>
<p><strong className="hl">CR 19:</strong> Options-aura of resistance (charm, compulsion, fear), bypass DR (good), channel energy, damage reduction (evil), immunity (charm, compulsion, disease, fear), healing touch, save boost, secondary magic (as if CR 6), one combat, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Charisma, Constitution.</p>
<p><strong className="hl">Suggested Options:</strong> Extra armor, inspire courage, magic weapon, mounted master, powerful charge.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Good, glory, war.</p>
<h3 id="rule-class_grafts_3-ranger">Ranger</h3>
<p>The guardians of the wild, blazers of trails, and destroyers of monsters, rangers are the first line of defense against the dangers of the wilderness. They have strong combat abilities and limited spellcasting.</p>
<p><strong className="hl">Special Rules:</strong> Some rangers have an animal companion. See the Animal Companions and Mounts section below.</p>
<p><strong className="hl">Required Array:</strong> Combatant.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; skills-master Perception, one additional master (typically Stealth or Survival); options-favored enemy, one any.</p>
<p><strong className="hl">CR 3:</strong> Options-secondary magic (as if CR 1), one combat.</p>
<p><strong className="hl">CR 7:</strong> Options-secondary magic (as if CR 2), terrain stride (undergrowth), one combat.</p>
<p><strong className="hl">CR 9:</strong> Options-secondary magic (as if CR 4), terrain stride (undergrowth), one combat.</p>
<p><strong className="hl">CR 11:</strong> Options-evasion (as if CR 4), secondary magic (as if CR 4), terrain stride (undergrowth), two combat.</p>
<p><strong className="hl">CR 15:</strong> Options-evasion, secondary magic (as if CR 6), terrain stride (undergrowth), two combat.</p>
<p><strong className="hl">CR 17:</strong> Options-evasion, secondary magic (as if CR 6), terrain stride (undergrowth), two combat, one any.</p>
<p><strong className="hl">CR 19:</strong> Options-evasion, secondary magic (as if CR 6), slaying attack (Fortitude), terrain stride (undergrowth), two combat, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength or Dexterity, Constitution, Wisdom.</p>
<p><strong className="hl">Suggested Options:</strong> Animal talker, critical striker, extra attack, far shot, rend, trap squares.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Animal, nature, plant.</p>
</>};
const _class_grafts_4 = {title: "Rogue, Sorcerer, Summoner, Witch, Wizard", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft","class_grafts"], siblings: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<h3 id="rule-class_grafts_4-rogue">Rogue</h3>
<p>Rogues always have a trick up their sleeves. Armed with numerous skills and tricks to confound their adversaries, rogues can always stay one step ahead of the foe.</p>
<p><strong className="hl">Required Array:</strong> Expert.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Reflex saving throw bonus by 3; skills-master Perception and Stealth; options-improved initiative, sneak attack.</p>
<p><strong className="hl">CR 1:</strong> Options-evasion, one any.</p>
<p><strong className="hl">CR 3:</strong> Options-evasion, uncanny dodge, one combat, one social.</p>
<p><strong className="hl">CR 9:</strong> Options-evasion, uncanny dodge, unflankable, one combat, one social.</p>
<p><strong className="hl">CR 11:</strong> Options-evasion, uncanny dodge, unflankable, one combat, one social, one any.</p>
<p><strong className="hl">CR 19:</strong> Options-evasion, slaying attack (Fortitude), uncanny dodge, unflankable, two combat, one social, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Dexterity, Charisma, Intelligence.</p>
<p><strong className="hl">Suggested Options:</strong> Constant invisibility, mobility, persuasive, poison, slippery mind, trap squares.</p>
<h3 id="rule-class_grafts_4-sorcerer">Sorcerer</h3>
<p>Sorcerers draw magical power from a quirk in their heritage, the remnant of a past, powerful ancestor whose magic traveled through the generations until it woke within the sorcerer.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase either Fortitude or Reflex saving throw bonus by 1; skill-master Knowledge (arcana); option-one magic.</p>
<p><strong className="hl">CR 3:</strong> Options-one any.</p>
<p><strong className="hl">CR 12:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-two magic, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Charisma, Constitution, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, extra hit points, magic attack, metamagic spell, potent magic damage.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Arcane, magic, by bloodline.</p>
<h4 id="rule-class_grafts_4-bloodline-options">Bloodline Options</h4>
<p>A sorcerer's bloodline provides several additional powers. Consider the following options if a bloodline ability is particularly important to the sorcerer. Any creature with a theme similar to a sorcerer bloodline might also draw from the appropriate bloodline's list of options. See <Link to="/rule/step_7_monster_options">Step 7</Link> for descriptions of monster options.</p>
<p><strong className="hl">Aberrant:</strong> <Link to="/umr/fortification">Fortification</Link> (as the universal monster rule), magic attack (acid).</p>
<p><strong className="hl">Abyssal:</strong> Use two natural attacks instead of weapon attacks, resistance (electricity).</p>
<p><strong className="hl">Arcane:</strong> At-will magic, metamagic spell.</p>
<p><strong className="hl">Celestial:</strong> Energy resistance (acid, cold), fly 60 ft. (good) for a number of minutes per day equal to CR, magic attack (divine).</p>
<p><strong className="hl">Destined:</strong> Bolstering touch.</p>
<p><strong className="hl">Draconic:</strong> Use two natural attacks instead of weapon attacks, breath weapon, energy resistance, fly 60 ft. (average).</p>
<p><strong className="hl">Elemental (Air):</strong> Energy explosion (electricity), energy resistance (electricity), fly 60 ft. (average).</p>
<p><strong className="hl">Elemental (Earth):</strong> Burrow 30 ft., energy explosion (acid), energy resistance (acid).</p>
<p><strong className="hl">Elemental (Fire):</strong> Energy explosion (fire), energy resistance (fire), increase base speed by 30 ft.</p>
<p><strong className="hl">Elemental (Water):</strong> Energy explosion (cold), energy resistance (cold), swim 60 ft.</p>
<p><strong className="hl">Fey:</strong> Damage reduction (cold iron), spell penetration, terrain stride (undergrowth).</p>
<p><strong className="hl">Infernal:</strong> Bestow minor condition (shaken), energy resistance (fire), fly 60 ft. (average).</p>
<p><strong className="hl">Undead:</strong> Bestow minor condition (shaken), energy resistance (cold), incorporeal (1/day).</p>
<h3 id="rule-class_grafts_4-summoner">Summoner</h3>
<p>Already endowed with considerable arcane might, a summoner can also call forth an eidolon, a powerful otherworldly entity, for aid and protection.</p>
<p><strong className="hl">Special Rules:</strong> A summoner needs an eidolon. Decide the CR you want the summoner and eidolon to be together, and create the summoner and eidolon each at that CR - 2. Create an outsider with the same CR as the summoner using the combatant array, or use an existing outsider of the same CR. Treat the companion as an additional creature in the encounter, awarding XP for defeating it as if it were an independent creature; see the Animal Companion and Mount section below.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; skill-master Knowledge (planes); options-spontaneous casting (<Link to="/spell/summon_monster">summon monster</Link>), one magic.</p>
<p><strong className="hl">CR 3:</strong> Options-one any.</p>
<p><strong className="hl">CR 12:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-two magic, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Charisma, Constitution, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, improved initiative, magical aptitude, powerful summons, transfer hit points (self to ally).</p>
<p><strong className="hl">Suggested Spell List:</strong> Conjuration.</p>
<h3 id="rule-class_grafts_4-witch">Witch</h3>
<p>Witches commune with unknown forces to grow their magical power. These spellcasters forge pacts with otherworldly beings and draw magic from their mysterious patrons.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase Fortitude and Reflex saving throw bonuses by 1; skill-Knowledge (arcana); option-one magic.</p>
<p><strong className="hl">CR 1:</strong> Options-one any.</p>
<p><strong className="hl">CR 3:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 12:</strong> Options-two magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-two magic, two any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Intelligence, Charisma, Dexterity.</p>
<p><strong className="hl">Suggested Options:</strong> Bestow major condition, bestow minor condition, bestow moderate condition, evil eye, fortune, healing touch, linguist, misfortune.</p>
<p><strong className="hl">Suggested Spell List:</strong> Choose a thematically appropriate list based on the witch's patron.</p>
<h3 id="rule-class_grafts_4-wizard">Wizard</h3>
<p>Wizards spend their lives delving into the mysteries of arcane magic, poring over scrolls and tomes to tease out true magical power. This academic approach allows wizards to learn some of the most varied and useful spells in existence.</p>
<p><strong className="hl">Required Array:</strong> Spellcaster.</p>
<p><strong className="hl">Statistics Adjustments:</strong> Increase either Fortitude or Reflex saving throw bonus by 1; skill-master Knowledge (arcana); option-one magic.</p>
<p><strong className="hl">CR 3:</strong> Options-one any.</p>
<p><strong className="hl">CR 12:</strong> Options-one magic, one any.</p>
<p><strong className="hl">CR 18:</strong> Options-two magic, one any.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Intelligence, Dexterity, Constitution.</p>
<p><strong className="hl">Suggested Options:</strong> Combat casting, magic attack, magical aptitude, knowledgeable, spell penetration; see Arcane School Options below.</p>
<p><strong className="hl">Suggested Spell Lists:</strong> Arcane, magic, by arcane school.</p>
<h4 id="rule-class_grafts_4-arcane-school-options">Arcane School Options</h4>
<p>Specialist wizards in particular are defined by the schools in which they focus. Consider the following monster options if an arcane school is particularly important to the wizard. Any creature that predominantly uses spells from a single school might also draw from the school's list of options. See <Link to="/rule/step_7_monster_options">Step 7</Link> for descriptions of monster options.</p>
<p><strong className="hl">Abjuration:</strong> Energy resistance (acid, cold, electricity, fire, or sonic), protective ward.</p>
<p><strong className="hl">Conjuration:</strong> Dimensional steps, magic attack (acid), powerful summons.</p>
<p><strong className="hl">Divination:</strong> Bolstering touch, improved initiative.</p>
<p><strong className="hl">Enchantment:</strong> Bestow major condition (dazed, 1 round), persuasive.</p>
<p><strong className="hl">Evocation:</strong> Magic attack (force), potent magic damage.</p>
<p><strong className="hl">Illusion:</strong> Bestow moderate condition (blinded, ranged touch attack, 1 round).</p>
<p><strong className="hl">Necromancy:</strong> Bestow minor condition (shaken), turn undead.</p>
<p><strong className="hl">Transmutation:</strong> Dodge expert, extra hit points, magic attack (bludgeoning), power attack.</p>
<p><strong className="hl">Universalist:</strong> Magic attack (bludgeoning or piercing), metamagic spell.</p>
</>};
const _class_grafts_5 = {title: "Other Classes and Animal Companions", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_2_creature_type_or_class_graft","class_grafts"], siblings: ["class_grafts_1","class_grafts_2","class_grafts_3","class_grafts_4","class_grafts_5"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 206</Link></p>
<h3 id="rule-class_grafts_5-hybrid-classes">Hybrid Classes</h3>
<p>To create a monster that mimics a hybrid class, use one of the class grafts, but replace some of the options with those from a secondary class graft. In some cases, it's easiest to just use an existing class graft whole cloth and make it feel more like the hybrid class by choosing appropriate monster options. Use the table below to determine which to use for each.</p>
<ScrollContainer id="rule-class_grafts_5--table-0"><table>
<thead>
<tr>
<th>Class</th>
<th>Primary Graft</th>
<th>Secondary Graft</th>
<th>Spellcasting</th>
</tr>
</thead>
<tbody><tr>
<td>Arcanist</td>
<td>Wizard</td>
<td>-</td>
<td>Wizard</td>
</tr>
<tr>
<td>Bloodrager</td>
<td>Barbarian</td>
<td>Sorcerer</td>
<td>Secondary magic option</td>
</tr>
<tr>
<td>Brawler</td>
<td>Fighter</td>
<td>Monk</td>
<td>-</td>
</tr>
<tr>
<td>Hunter</td>
<td>Ranger</td>
<td>Druid</td>
<td>Bard</td>
</tr>
<tr>
<td>Investigator</td>
<td>Alchemist</td>
<td>Rogue</td>
<td>Alchemist</td>
</tr>
<tr>
<td>Shaman</td>
<td>Witch</td>
<td>Oracle</td>
<td>Witch</td>
</tr>
<tr>
<td>Skald</td>
<td>Bard</td>
<td>Barbarian</td>
<td>Bard</td>
</tr>
<tr>
<td>Slayer</td>
<td>Rogue</td>
<td>Ranger</td>
<td>-</td>
</tr>
<tr>
<td>Swashbuckler</td>
<td>Fighter</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Warpriest</td>
<td>Fighter</td>
<td>Cleric</td>
<td>Inquisitor</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="rule-class_grafts_5-animal-companions-and-mounts">Animal Companions and Mounts</h3>
<p>If you decide a monster should have an animal companion or mount, choose an animal from the list of a <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spell. The spell must have a level no higher than 1/2 the monster's CR. Treat the companion as an additional creature in the encounter, awarding XP for defeating it as if it were an independent creature rather than an animal companion.</p>
<p>Alternatively, you can create an animal from scratch using simple monster creation. This monster should have a CR no higher than 1 + 1/2 the primary monster's CR. Award XP for defeating it as if it were not an animal companion.</p>
</>};
const _step_3_subtype_graft = {title: "Step 3: Subtype Graft", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], subtopics: ["subtype_entries"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 214</Link></p>
<p>Find the monster's subtype (if any) in the list below and apply all abilities listed there. For monsters that replicate common PC races (such as humans or elves), the subtype includes the equivalent of their important racial traits as well. These entries don't always include all the abilities a creature gains from the subtypes as they appear in Bestiary volumes; they omit rules that are only relevant for creating the creature, those that cover the monster's noncombat abilities (such as whether it eats or sleeps), and abilities that aren't as useful for NPCs as they would be for PCs (such as a dwarf's stonecunning ability).</p>
<p>Subtype graft entries use a short format. After the name, each subtype entry has one to three sections listing its abilities, separated by category. Some grafts grant a monster additional senses, movement types, bonuses, or other statistic adjustments. Abilities listed under the options and skills sections are found on Step 7 and 8, respectively.</p>
<p>All subtype abilities are added automatically; none are optional. They're meant to be included in addition to all the skills and options you can choose for the monster based on its CR and array. Likewise, subtype entries might tell you to add particular monster options or skills. These don't count against the monster's normal number of options or skills.</p>
</>};
const _subtype_entries = {title: "Subtype Entries", parent_topics: ["advanced_gm_topics","simple_monster_creation","step_3_subtype_graft"], siblings: ["subtype_entries"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 214</Link></p>
<p>The following subtypes cover most of those presented in bestiaries, with the exception of those that either don't grant significant abilities or have such an impact on the monster that a graft can't cover them. Those subtypes appear in the "Other Subtypes" section below.</p>
<p><Link to="/subtype/aeon">Aeon</Link>:** Gain a deflection bonus to AC equal to 1/4 CR; options-energy resistance 10 (electricity and fire), immunity (cold, poison, and critical hits).</p>
<p><Link to="/subtype/agathion">Agathion</Link>:** +4 racial bonus on saving throws against poison, truespeech; options-energy resistance 10 (cold and sonic), healing touch, immunity (electricity and poison).</p>
<p><Link to="/subtype/air">Air</Link>:** Fly 60 ft. (perfect); skills-gain Fly as an additional master skill.</p>
<p><Link to="/subtype/angel">Angel</Link>:** +4 racial bonus on saving throws against poison; protective aura; truespeech; options-energy resistance 10 (electricity and fire), immunity (acid, cold, and petrification).</p>
<p><Link to="/subtype/aquatic">Aquatic</Link>:** Swim 30 ft.; skills-gain Swim as an additional master skill.</p>
<p><Link to="/subtype/archon">Archon</Link>:** +4 racial bonus on saving throws against poison; aura of menace, teleport; options-immunity (electricity and petrification).</p>
<p><Link to="/subtype/asura">Asura</Link>:** +2 racial bonus on saving throws against enchantment spells; elusive aura; options-energy resistance 10 (acid and electricity), immunity (curses, disease, and poison), regeneration (overcome by good), spell resistance, summon allies, telepathy; skills-gain Escape Artist and Perception as additional master skills.</p>
<p><Link to="/subtype/azata">Azata</Link>:** Options-energy resistance 10 (cold and fire), immunity (electricity and petrification).</p>
<p><Link to="/subtype/clockwork">Clockwork</Link>:** Increase AC and touch AC by 2, increase Reflex saving throw bonus by 2, vulnerable to electricity; options-improved initiative.</p>
<p><Link to="/subtype/cold">Cold</Link>:** Vulnerable to fire; options-immunity (cold).</p>
<p><Link to="/subtype/daemon">Daemon</Link>:** Options-energy resistance 10 (cold, electricity, and fire), immunity (acid, death effects, disease, and poison), summon allies, telepathy.</p>
<p><Link to="/subtype/demodand">Demodand</Link>:** Faith-stealing strike; heretical soul; options-energy resistance 10 (cold and fire), immunity (acid and poison), summon allies.</p>
<p><Link to="/subtype/demon">Demon</Link>:** Options-energy resistance 10 (acid, cold, and fire), immunity (electricity and poison), summon allies, telepathy.</p>
<p><Link to="/subtype/devil">Devil</Link>:** See in darkness; options-energy resistance 10 (acid and cold), immunity (fire and poison), summon allies, telepathy.</p>
<p><Link to="/subtype/div">Div</Link>:** See in darkness; options-energy resistance 10 (acid and electricity), immunity (fire and poison), summon allies, telepathy.</p>
<p><Link to="/subtype/dwarf">Dwarf</Link>:** Darkvision 60 ft.; +2 racial bonus on saving throws against poison, spells, and spell-like abilities.</p>
<p><Link to="/subtype/earth">Earth</Link>:** Burrow 20 ft., tremorsense (range varies).</p>
<p><Link to="/subtype/elemental">Elemental</Link>:** Options-immunity (bleed, critical hits, flanking, paralysis, poison, sleep effects, and stunning).</p>
<p><Link to="/subtype/elf">Elf</Link>:** Low-light vision; skills-gain Perception or Spellcraft as an additional master skill; options-immunity (sleep).</p>
<p><Link to="/subtype/fire">Fire</Link>:** Vulnerable to cold; options-immunity (fire).</p>
<p><Link to="/subtype/giant">Giant</Link>:** Low-light vision; skills-gain Intimidate as additional good skill.</p>
<p><Link to="/subtype/gnome">Gnome</Link>:** Gain the Small graft, low-light vision, gain one CR-appropriate spell from the <Link to="/main/illusion_spell">illusion spell list</Link>.</p>
<p><Link to="/subtype/goblinoid">Goblinoid</Link>:** Skills-gain Stealth as an additional good skill.</p>
<p><Link to="/race/half_elf">Half-Elf</Link>:** Low-light vision; options-immunity (sleep); skills-gain one additional master skill.</p>
<p><Link to="/race/half_orc">Half-Orc</Link>:** Darkvision 60 ft.; skill-gain Intimidate as an additional good skill.</p>
<p><Link to="/subtype/halfling">Halfling</Link>:** Gain the Small graft, +2 racial bonus on saving throws against fear.</p>
<p><Link to="/subtype/human">Human</Link>:** Options-gain one additional combat or social option.</p>
<p><Link to="/subtype/incorporeal">Incorporeal</Link>:** Set touch AC to same value as AC; options-immunity (critical hits and precision-based damage from weapons without <Link to="/magic-enh/ghost_touch">ghost touch</Link>), incorporeal.</p>
<p><Link to="/subtype/inevitable">Inevitable</Link>:** Low-light vision; options-regeneration (overcome by chaotic).</p>
<p><Link to="/subtype/kami">Kami</Link>:** Merge with ward, ward; Options-energy resistance 10 (acid, electricity, and fire), fast healing, immunity (bleed, mind-affecting effects, petrification, and polymorph effects), telepathy.</p>
<p><Link to="/subtype/leshy">Leshy</Link>:** Constant pass without trace; plantspeech; verdant burst; options-change shape, immunity (electricity and sonic).</p>
<p><Link to="/subtype/nightshade">Nightshade</Link>:** Desecrating aura, darksense, low-light vision, light aversion; options-channel energy (negative energy).</p>
<p><Link to="/subtype/oni">Oni</Link>:** Options-change shape; regeneration (typically overcome by acid or fire).</p>
<p><Link to="/subtype/orc">Orc</Link>:** Darkvision 60 ft., light sensitivity.</p>
<p><Link to="/subtype/protean">Protean</Link>:** Blindsense (range varies), amorphous anatomy, constant <Link to="/spell/freedom_of_movement">freedom of movement</Link>; options-change shape, constrict, energy resistance 10 (electricity and sonic), immunity (acid), improved combat maneuver (grab).</p>
<p><Link to="/subtype/psychopomp">Psychopomp</Link>:** Spiritsense, spirit touch; options-damage reduction (5/adamantine), energy resistance 10 (cold and electricity), immunity (death effects, disease, and poison).</p>
<p><Link to="/subtype/qlippoth">Qlippoth</Link>:** Horrific appearance; options-energy resistance 10 (acid, electricity, and fire), immunity (cold, mind-affecting effects, and poison), telepathy.</p>
<p><Link to="/subtype/rakshasa">Rakshasa</Link>:** Detect thoughts, enhanced defenses; options-change shape.</p>
<p><Link to="/subtype/shapechanger">Shapechanger</Link>:** Options-change shape.</p>
<p><Link to="/subtype/swarm">Swarm</Link>:** Takes an additional 50% damage from spells or effects that affect an area; swarm attack; if made of Tiny creatures, the monster takes half damage from slashing and piercing weapons; if made of Fine or Diminutive creatures, the monster is immune to weapon damage; options-distraction, immunity (critical hits, flanking, trip, grapple, bull rush, and spells that target a specific number of creatures).</p>
<p><Link to="/subtype/water">Water</Link>:** Swim 30 ft.; skills-gain Swim as an additional master skill.</p>
<h3 id="rule-subtype_entries-other-subtypes">Other Subtypes</h3>
<p>A number of subtypes don't have full entries. Most of these don't grant additional abilities to monsters, and are listed below. A monster gains all subtypes appropriate to it, even those without rules in this section, such as the following.</p>
<ul>
<li><Link to="/subtype/adlet">Adlet</Link></li>
<li><Link to="/subtype/augmented">Augmented</Link></li>
<li><Link to="/subtype/catfolk">Catfolk</Link></li>
<li><Link to="/subtype/chaotic">Chaotic</Link></li>
<li><Link to="/subtype/changeling">Changeling</Link></li>
<li><Link to="/subtype/dark_folk">Dark Folk</Link></li>
<li><Link to="/subtype/evil">Evil</Link></li>
<li><Link to="/subtype/extraplanar">Extraplanar</Link></li>
<li><Link to="/subtype/good">Good</Link></li>
<li><Link to="/subtype/kasatha">Kasatha</Link></li>
<li><Link to="/subtype/kitsune">Kitsune</Link></li>
<li><Link to="/subtype/lawful">Lawful</Link></li>
<li><Link to="/subtype/native">Native</Link></li>
<li><Link to="/subtype/ratfolk">Ratfolk</Link></li>
<li><Link to="/subtype/reptilian">Reptilian</Link></li>
<li><Link to="/subtype/samsaran">Samsaran</Link></li>
<li><Link to="/subtype/sasquatch">Sasquatch</Link></li>
<li><Link to="/subtype/vanara">Vanara</Link></li>
<li><Link to="/subtype/vishkanya">Vishkanya</Link></li>
<li><Link to="/subtype/wayang">Wayang</Link></li>
</ul>
<h3 id="rule-subtype_entries-complex-subtypes">Complex Subtypes</h3>
<p>The subtypes listed below don't appear because they're so complex that adding a subtype graft isn't enough. Creatures of these subtypes need to be created carefully, and have detailed rules associated with them that go beyond the scope of simple monster creation.</p>
<ul>
<li><Link to="/subtype/behemoth">Behemoth</Link></li>
<li><Link to="/subtype/colossus">Colossus</Link></li>
<li><Link to="/subtype/great_old_one">Great Old One</Link></li>
<li><Link to="/subtype/kaiju">Kaiju</Link></li>
<li><Link to="/subtype/mythic">Mythic</Link></li>
</ul>
</>};
const _step_4_template_graft = {title: "Step 4: Template Graft", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 216</Link></p>
<p>These optional grafts replicate popular monster templates, and are applied on top of the creature type or class graft chosen for the monster. Template graft entries follow a format similar to creature type grafts.</p>
<p><strong className="hl">Minimum or Maximum CR:</strong> This entry indicates what the lowest or highest possible CR for the monster can be. A header that says "CR 2+" indicates the monster's CR must be 2 or higher, and "CR 9-" means its CR can't be higher than 9.</p>
<p><strong className="hl">Required Creature Type or Subtype:</strong> For templates that change a creature's type or subtype in the normal monster creation system, this entry shows which creature type or subtype the monster must be in order to apply the template graft.</p>
<p><strong className="hl">Suggested Array:</strong> This indicates the monster array the template is most closely associated with, if any. Liches, for example, are almost always spellcasters.</p>
<p><strong className="hl">Automatic Traits:</strong> All creatures with this graft gain these abilities. The automatic traits might tell you to add particular monster options or skills. These count against the monster's normal number of options, skills, and so forth, replacing them (unlike subtype grafts, which grant options and skills for free). However, even if the automatic traits would cause a monster to exceed its maximum number of options or skills, the monster still gains all of them. If the monster has a class graft, use your best judgment when replacing options to maintain the feeling of both the class and template.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> This section lists the recommended assignments for the monster's high ability scores, in order from highest to lowest. For instance, the graveknight lists "Strength, Charisma, Wisdom," meaning that when making a CR 10 graveknight, you would give it a +7 Strength modifier, a +5 Charisma modifier, and a +3 Wisdom modifier. Not all entries list modifiers for all abilities. A ghost, for example, lists only Charisma since the remaining statistics can vary, and a half-dragon doesn't have an entry at all as half-dragons are so varied.</p>
<h3 id="rule-step_4_template_graft-ghost-cr-2">Ghost (CR 2+)</h3>
<p>A soul unable to rest becomes a spectral undead creature.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Required Subtype:</strong> Incorporeal.</p>
<p><strong className="hl">Automatic Traits:</strong> Fly 30 ft. (perfect); Ability modifiers-set Strength modifier to -, increase Charisma modifier by 2; options-channel resistance, corrupting touch, rejuvenation (2d4 days); one of the following at CR 6 plus one for every 3 CR above 6: at-will magic (<Link to="/spell/telekinesis">telekinesis</Link>), corrupting gaze, draining touch, frightful presence, malevolence; skills-gain Perception and Stealth as master skills.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Charisma.</p>
<h3 id="rule-step_4_template_graft-graveknight-cr-5">Graveknight (CR 5+)</h3>
<p>This undead creature is heavily armed and armored, and can be rejuvenated if destroyed.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Suggested Array:</strong> Combatant.</p>
<p><strong className="hl">Automatic Traits:</strong> Increase AC by 2 and touch AC by 4, decrease flat-footed AC by 6; options-channel destruction, channel resistance, devastating blast (as the breath weapon option in a 30-foot cone dealing acid, cold, electricity, or fire damage), DR 10/magic, immunity (cold and electricity), phantom mount, rejuvenation (1d10 days), sacrilegious aura, spell resistance, undead mastery, one additional combat option; skills-gain Intimidate, Perception, and Ride as master skills. Suggested Ability Modifiers: Strength, Charisma.</p>
<h3 id="rule-step_4_template_graft-half-celestial-cr-1">Half-Celestial (CR 1+)</h3>
<p>This creature was born of a good outsider and a mortal, or created by a major infusion of holy energy.</p>
<p><strong className="hl">Required Creature Type:</strong> Outsider.</p>
<p><strong className="hl">Automatic Traits:</strong> +4 bonus on saving throws against poison; gain a fly speed equal to twice base speed (good maneuverability); options-DR 5/magic (increases to DR 10/magic at CR 12), energy resistance 10 (acid, cold, and electricity), immunity (disease), secondary magic (good), smite (evil); skill-gain one additional master skill.</p>
<h3 id="rule-step_4_template_graft-half-dragon-cr-3">Half-Dragon (CR 3+)</h3>
<p>This creature is born of a dragon and some other form of creature. It exhibits traits of both its parents.</p>
<p><strong className="hl">Required Creature Type:</strong> Dragon.</p>
<p><strong className="hl">Automatic Traits:</strong> Options-breath weapon (usable 1/day), immunity (sleep, paralysis, and one of acid, cold, electricity, or fire); skill-gain one additional master skill.</p>
<h3 id="rule-step_4_template_graft-half-fiend-cr-1">Half-Fiend (CR 1+)</h3>
<p>This creature is heavily tainted with evil power, most likely demonic or infernal.</p>
<p><strong className="hl">Required Creature Type:</strong> Outsider.</p>
<p><strong className="hl">Automatic Traits:</strong> Gain a fly speed equal to twice the base speed (good maneuverability); options-DR 5/magic (increases to DR 10/magic at CR 12), energy resistance 10 (acid, cold, electricity, and fire), immunity (poison), secondary magic (evil), smite (good); skill-gain one additional master skill.</p>
<h3 id="rule-step_4_template_graft-lich-cr-2">Lich (CR 2+)</h3>
<p>This spellcaster retained its magical powers after it died and rose again in undeath.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Suggested Array:</strong> Spellcaster.</p>
<p><strong className="hl">Automatic Traits:</strong> Increase AC by 2; options-channel resistance, DR 15/bludgeoning and magic, fear aura, immunity (cold and electricity), paralyzing touch, rejuvenation (1d10); skills-gain Perception, Sense Motive, and Stealth as master skills.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Intelligence, Wisdom, or Charisma should be highest ability modifier, depending on which of these the lich uses to cast its spells.</p>
<h3 id="rule-step_4_template_graft-lycanthrope-cr-1">Lycanthrope (CR 1+)</h3>
<p>This humanoid can turn into an animal or assume a hybrid form between its humanoid and animal natures.</p>
<p><strong className="hl">Required Creature Type:</strong> Humanoid.</p>
<p><strong className="hl">Required Subtype:</strong> Shapechanger.</p>
<p><strong className="hl">Automatic Traits:</strong> Options-curse of lycanthropy.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Constitution.</p>
<h3 id="rule-step_4_template_graft-skeleton-cr-8-">Skeleton (CR 8-)</h3>
<p>The animated bones of the dead attack as a skeleton - a mindless soldier in an army of the dead.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Suggested Array:</strong> Combatant.</p>
<p><strong className="hl">Automatic Traits:</strong> Ability modifiers-set Intelligence modifier to -; options-DR 5/bludgeoning, immunity (cold), improved initiative.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Dexterity.</p>
<h3 id="rule-step_4_template_graft-vampire-cr-5">Vampire (CR 5+)</h3>
<p>This charismatic undead monster feasts on blood and has impressive supernatural powers.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Suggested Array:</strong> Any: a vampire could fill any role and be built using any array. It is capable in combat even if it's an expert or spellcaster.</p>
<p><strong className="hl">Automatic Traits:</strong> Increase AC by 2 and flat-footed AC by 2, <Link to="/spell/spider_climb">spider climb</Link> (constant), vampire weaknesses; options-at-will magic (<Link to="/spell/dominate_person">dominate person</Link>), blood drain, change shape (dire bat or wolf, as <Link to="/spell/beast_shape_ii">beast shape II</Link>), channel resistance, children of the night, create spawn, DR 10/magic and silver, energy drain, energy resistance 10 (cold and electricity), fast healing 5, gaseous form; skills-gain Bluff, Perception, Sense Motive, and Stealth as master skills.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength, Dexterity, Charisma.</p>
<h3 id="rule-step_4_template_graft-zombiecr-9-">Zombie(CR 9-)</h3>
<p>A reanimated corpse can become a sluggish and unthinking zombie.</p>
<p><strong className="hl">Required Creature Type:</strong> Undead.</p>
<p><strong className="hl">Suggested Array:</strong> Combatant.</p>
<p><strong className="hl">Automatic Traits:</strong> Staggered (can perform only a single move action or standard action each round); ability modifiers-set Intelligence modifier to -; options-DR 5/slashing, extra hit points; skills-no master or good skills.</p>
<p><strong className="hl">Suggested Ability Modifiers:</strong> Strength.</p>
</>};
const _step_5_size_graft = {title: "Step 5: Size Graft", parent_topics: ["advanced_gm_topics","simple_monster_creation"], siblings: ["step_1_array","step_2_creature_type_or_class_graft","step_3_subtype_graft","step_4_template_graft","step_5_size_graft","step_6_spells","step_7_monster_options","step_8_skills","step_9_damage","other_calculations","monster_creation_examples"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 217</Link></p>
<p>If your monster isn't Medium, apply a size graft. Because there are many other ways to alter a creature's AC, hit points, attack bonuses, and damage, these grafts don't adjust those values like size changes do in the core rules. Most headers list a minimum CR or maximum CR, as described in the previous step. Use caution if your monster is outside the minimum or maximum CR range. Touch and flat-footed AC never increase above the monster's total AC, and never decrease below 1.</p>
<h3 id="rule-step_5_size_graft-fine-cr-2-">Fine (CR 2-)</h3>
<p><strong className="hl">Automatic Traits:</strong> Increase touch AC and flat-footed AC by 8; decrease CMB by 16; decrease CMD by 8; gain Fly and Stealth as additional master skills.</p>
<h3 id="rule-step_5_size_graft-diminutive-cr-4-">Diminutive (CR 4-)</h3>
<p><strong className="hl">Automatic Traits:</strong> Increase touch AC and flat-footed AC by 4; decrease CMB by 8; decrease CMD by 4; gain Fly and Stealth as additional master skills.</p>
<h3 id="rule-step_5_size_graft-tiny-cr-6-">Tiny (CR 6-)</h3>
<p><strong className="hl">Automatic Traits:</strong> Increase touch AC and flat-footed AC by 2; decrease CMB by 4; decrease CMD by 2; gain Fly as an additional good skill (or increase good to master) and Stealth as an additional master skill.</p>
<h3 id="rule-step_5_size_graft-small">Small</h3>
<p><strong className="hl">Automatic Traits:</strong> Increase touch AC and flat-footed AC by 1; decrease CMB by 2; decrease CMD by 1; gain Stealth as an additional good skill.</p>
<h3 id="rule-step_5_size_graft-large-cr-2">Large (CR 2+)</h3>
<p><strong className="hl">Automatic Traits:</strong> Decrease touch AC by 1, increase flat-footed AC by 1; increase CMB by 2; increase CMD by 1.</p>
<h3 id="rule-step_5_size_graft-huge-cr-4">Huge (CR 4+)</h3>
<p><strong className="hl">Automatic Traits:</strong> Decrease touch AC by 2, increase flat-footed AC by 3; increase CMB by 4; increase CMD by 2; can't have Stealth as a master skill.</p>
<h3 id="rule-step_5_size_graft-gargantuan-cr-6">Gargantuan (CR 6+)</h3>
<p><strong className="hl">Automatic Traits:</strong> Decrease touch AC by 4, increase flat-footed AC by 5; increase CMB by 8; increase CMD by 4; can't have Fly as a master skill, can't have Stealth as a good or master skill.</p>
<h3 id="rule-step_5_size_graft-colossal-cr-8">Colossal (CR 8+)</h3>
<p><strong className="hl">Automatic Traits:</strong> Decrease touch AC by 8, increase flat-footed AC by 6; increase CMB by 16; increase CMD by 8; can't have Fly or Stealth as good or master skills.</p>
</>};
export default {pursuit:_pursuit,the_core_mechanic:_the_core_mechanic,building_a_pursuit:_building_a_pursuit,direct_pursuits:_direct_pursuits,races_ui:_races_ui,running_a_pursuit:_running_a_pursuit,direct_pursuits_and_tracking:_direct_pursuits_and_tracking,terrain_tiles:_terrain_tiles,pursuit_advantages:_pursuit_advantages,sample_advantages:_sample_advantages,pursuit_tactics:_pursuit_tactics,individual_tactics:_individual_tactics,group_tactics:_group_tactics,damage_fatigue_and_exhaustion:_damage_fatigue_and_exhaustion,simple_monster_creation:_simple_monster_creation,step_1_array:_step_1_array,character_classes:_character_classes,using_an_array:_using_an_array,combatant_array:_combatant_array,expert_array:_expert_array,spellcaster_array:_spellcaster_array,step_2_creature_type_or_class_graft:_step_2_creature_type_or_class_graft,creature_type_grafts:_creature_type_grafts,class_grafts:_class_grafts,class_grafts_1:_class_grafts_1,class_grafts_2:_class_grafts_2,class_grafts_3:_class_grafts_3,class_grafts_4:_class_grafts_4,class_grafts_5:_class_grafts_5,step_3_subtype_graft:_step_3_subtype_graft,subtype_entries:_subtype_entries,step_4_template_graft:_step_4_template_graft,step_5_size_graft:_step_5_size_graft}