import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _kingdoms_and_war = {title: "Kingdoms and War", parent_topics: ["gm_specific_campaigns"], siblings: ["aquatic_adventures_aa","caravans","horror_rules","intrigue_systems","kingdoms_and_war","militias","mythic_rules","occult_rules","planar_adventures","the_first_world","seafaring_and_piracy_rules","technological_equipment"], subtopics: ["kingdom_building","optional_kingdom_rules","mass_combat"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 198</Link></p>
<p>Some heroes found kingdoms, driving out hostile monsters to make room for peaceful settlers. Others lead soldiers into battle, waging great and terrible wars. This section presents rules for building a kingdom and waging war that focus on the larger tactics of city planning and troop strategy rather than managing details of individual settlers and soldiers.</p>
<p>This section uses "kingdom" as a universal term to represent all kinds of domains, regardless of size, form of government, and gender of the ruler. Most of the decisions are in the hands of the players, and these rules are written with that assumption, using terms like "your kingdom" and "your army." However, the GM is still in charge of the campaign, and is expected to make judgments about the repercussions of player decisions. While players running a kingdom should be allowed to read these rules (having them do so makes much of the kingdom building easier for the GM), the players shouldn't think they can abuse these rules to exploit weird corner cases. For example, players may decide to construct a city full of graveyards because of the bonuses they provide to the city, but if the GM believes that is unreasonable, he could decide that the city is prone to frequent undead attacks. Likewise, a settlement with more magic shops than houses and businesses may slowly become a ghost town as all the normal citizens move elsewhere out of superstitious fear. As with a normal campaign, the GM is the final arbiter of the rules, and can make adjustments to events as necessary for the campaign.</p>
</>};
const _kingdom_building = {title: "Kingdom Building", parent_topics: ["gm_specific_campaigns","kingdoms_and_war"], siblings: ["kingdom_building","optional_kingdom_rules","mass_combat"], subtopics: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 198</Link></p>
<p>Ruling a kingdom is a complex and difficult task, one undertaken only by the very ambitious. Many PCs are content to live as mercenaries or treasure hunters, no interest in being responsible for the health and well-being of subjects; for these characters, a kingdom is simply a place they pass through on the way to the next adventure. However, characters who are keen to spread their wings and forge a place of power and influence in the world can use this section to create a different sort of campaign. If the PCs are interested in ruling only a single town or castle and the small region around it, kingdom building can focus primarily on the settlement and the PCs' personal demesne. If the PCs have larger goals, such as carving out a new, independent kingdom, these rules allow them to build cities and engage in trade, diplomacy, and war.</p>
<p>These rules assume that all of the kingdom's leaders are focused on making the kingdom prosperous and stable, rather than oppressing the citizens and stealing from the treasury. Likewise, the rules assume that the leaders are working together, not competing with each other or working at odds. If the campaign begins to step into those areas, the GM is free to introduce new rules to deal with these activities.</p>
<p>Like the <Link to="/rule/sandbox_exploration">exploration system</Link>, the kingdom-building rules measure terrain in hexes. Each hex is 12 miles from corner to corner, representing an area of just less than 95 square miles. The hex measurement is an abstraction; the hexes are easy to quantify and allow the GM to categorize a large area as one terrain type without having to worry about precise borders of forests and other terrain features.</p>
</>};
const _kingdom_building_overview = {title: "Kingdom Building Overview", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 198</Link></p>
<p>The key parts of the kingdom-building rules that you'll be referencing are as follows:</p>
<ul>
<li>Explanation of the kingdom terminology used throughout this section.</li>
<li>Step-by-step instructions for founding a kingdom.</li>
<li>The turn sequence for an established kingdom.</li>
<li>The game statistics for terrain improvements.</li>
<li>Step-by-step instructions on how to found your first settlement.</li>
<li>The game statistics for the types of buildings.</li>
<li>The settlement District Grid.</li>
<li>The kingdom sheet.</li>
</ul>
<p>Following the main rules and the types of buildings are several optional rules for kingdom building, such as modifying the effect of religious buildings based on alignment or deity portfolio, tracking Fame and Infamy scores for your kingdom, rules for different types of government, and special edicts you can declare during the turn sequence.</p>
</>};
const _kingdom_terminology = {title: "Kingdom Terminology", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 198</Link></p>
<p>Kingdoms have attributes that describe and define them. These are tracked on a kingdom sheet, like a character's statistics are on a character sheet.</p>
<p><strong className="hl">Alignment:</strong> Like a PC, your kingdom has an alignment, which you decide when you form the kingdom. The kingdom's alignment represents the majority outlook and behavior of the people within that kingdom when they're considered as a group. (Individual citizens and even some leaders may be of different alignments.)</p>
<p>When you decide on your kingdom's alignment, apply the following adjustments to the kingdom's statistics: Chaotic: +2 Loyalty; Evil: +2 Economy; Good: +2 Loyalty; Lawful: +2 Economy; Neutral: Stability +2 (apply this twice if the kingdom's alignment is simply Neutral, not Chaotic Neutral or Lawful Neutral).</p>
<p>A kingdom's alignment rarely changes, though at the GM's option, it can shift through the actions of its rulers or its people.</p>
<p><strong className="hl">Build Points:</strong> Build points (or BP for short) are the measure of your kingdom's resources - equipment, labor, money, and so on. They're used to acquire new hexes and develop additional buildings, settlements, and terrain improvements. Your kingdom also consumes BP to maintain itself.</p>
<p><strong className="hl">Consumption:</strong> Consumption indicates how many BP are required to keep the kingdom functioning each month. Your kingdom's Consumption is equal to its Size, modified by settlements and terrain improvements (such as Farms and Fisheries). Consumption can never go below 0.</p>
<p><strong className="hl">Control DC:</strong> Some kingdom actions require a check (1d20 + modifiers) to succeed - this is known as a control check. The base DC for a control check is equal to 20 + the kingdom's Size in hexes + the total number of districts in all your settlements + any other modifiers from special circumstances or effects. Unless otherwise stated, the DC of a kingdom check is the Control DC.</p>
<p><strong className="hl">Economy:</strong> This attribute measures the productivity of your kingdom's workers and the vibrancy of its trade, both in terms of money and in terms of information, innovation, and technology. Your kingdom's initial Economy is 0 plus your kingdom's alignment and leadership modifiers.</p>
<p><strong className="hl">Kingdom Check:</strong> A kingdom has three attributes: Economy, Loyalty, and Stability. Your kingdom's initial scores in each of these attributes is 0, plus modifiers for kingdom alignment, bonuses provided by the leaders, and any other modifiers.</p>
<p>Many kingdom actions and events require you to attempt a kingdom check, either using your Economy, Loyalty, or Stability attribute (1d20 + the appropriate attribute + other modifiers). You cannot take 10 or take 20 on a kingdom check. Kingdom checks automatically fail on a natural 1 and automatically succeed on a natural 20.</p>
<p><strong className="hl">Loyalty:</strong> Loyalty refers to the sense of goodwill among your people, their ability to live peaceably together even in times of crisis, and to fight for one another when needed. Your kingdom's initial Loyalty is 0 plus your kingdom's alignment and any modifiers from your kingdom's leadership role.</p>
<p><strong className="hl">Population:</strong> Actual population numbers don't factor into your kingdom's statistics, but can be fun to track anyway. The population of each settlement is described in <Link to="/rule/settlements_and_districts">Settlements and Districts</Link>.</p>
<p><strong className="hl">Size:</strong> This is how many hexes the kingdom claims. A new kingdom's Size is 1.</p>
<p><strong className="hl">Stability:</strong> Stability refers to the physical and social well-being of the kingdom, from the health and security of its citizenry to the vitality of its natural resources and its ability to maximize their use. Your kingdom's initial Stability is 0 plus your kingdom's alignment and leadership modifiers.</p>
<p><strong className="hl">Treasury:</strong> The Treasury is the amount of BP your kingdom has saved and can spend on activities (much in the same way that your character has gold and other valuables you can spend on gear). Your Treasury can fall below 0 (meaning your kingdom's costs exceed its savings and it is operating in debt), but this increases Unrest (see <Link to="/rule/kingdom_upkeep_phase">Kingdom Upkeep Phase</Link>).</p>
<p><strong className="hl">Turn:</strong> A kingdom turn spans 1 month of game time. You make your kingdom checks and other decisions about running your kingdom at the end of each month.</p>
<p><strong className="hl">Unrest:</strong> Your kingdom's Unrest indicates how rebellious your citizens are. Your kingdom's initial Unrest is 0. Unrest can never fall below 0 (anything that would modify it to less than 0 is wasted). Subtract your kingdom's Unrest from all Economy, Loyalty, and Stability checks.</p>
<p>If your kingdom's Unrest is 11 or higher, the kingdom begins to lose control of hexes it has claimed.</p>
<p>If your kingdom's Unrest ever reaches 20, the kingdom falls into anarchy (see Kingdom Upkeep Phase).</p>
</>};
const _kingdom_building_quick_reference = {title: "Kingdom Building Quick Reference", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 199</Link></p>
<p>With building a kingdom, you begin by founding a small settlement - such as a village or town - and expand your territory outward, claiming nearby hexes, founding additional settlements, and constructing buildings within those settlements. What you build in a hex or a settlement affects the economy of your kingdom, the loyalty of your citizens, the stability of the government, and the likeliness that kingdom will fall into chaos when citizens worry about monster attacks and other threats.</p>
<p>Use the kingdom sheet to track the statistics of your kingdom, just as you use a character sheet to track the statistics of your character. The terms on the kingdom sheet are described in <Link to="/rule/kingdom_terminology">Kingdom Terminology</Link>.</p>
<p>You and the other PCs take specific roles in leading your kingdom, such as <Link to="/rule/leadership_roles">Ruler, High Priest, General, and so on</Link>. The leaders provide bonuses on rolls you make to manage the kingdom's economy and other important issues. For example, having a High Priest makes your kingdom more stable and your citizens more loyal, and having a Treasurer makes your kingdom more profitable.</p>
<p>Instead of using gold pieces, a kingdom uses a type of currency called <Link to="/rule/build_points">build points (BP)</Link>, which represent actual cash, labor, expertise, and raw materials. While it is possible to convert gp into BP and back again, for the most part you'll just be spending BP to run your kingdom.</p>
<p>Running a kingdom takes place over a series of turns, similar to how combat takes place over a series of rounds. A <Link to="/rule/kingdom_turn_sequence">kingdom turn</Link> takes 1 month of game time. Each turn has four phases which you resolve in order: the Upkeep phase, where you pay the kingdom's bills; the Edict phase, where you levy taxes and build improvements; the Income phase, where you collect taxes; and the Events phase, where you see if something especially good or bad happens to your kingdom.</p>
<p>If this is your first time reading these rules, start with the section on <Link to="/rule/founding_a_settlement">Founding a Settlement</Link> and read the rest of the kingdom-building rules in order. If you find a term you're not familiar with, check the Kingdom Terminology section or refer to the <Link to="/rule/kingdom_building_overview">Kingdom Building Overview</Link> for a better idea of where you can find that information.</p>
</>};
const _founding_a_kingdom = {title: "Founding a Kingdom", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 200</Link></p>
<p>Once you have your first settlement, you have the start of a kingdom. You'll need to make some initial decisions that affect your kingdom's statistics, and record them on the kingdom sheet.</p>
<p>Choose Your Kingdom's Alignment. Your kingdom's alignment helps determine how loyal, prosperous, and stable your kingdom is. Your kingdom may be a lawful good bastion against a nearby land of devil worshipers, or a chaotic neutral territory of cutthroat traders whose government does very little to interfere with the rights of its citizens.</p>
<p>Choose Leadership Roles. Assign the <Link to="/rule/leadership_roles">leadership roles</Link> for all PCs and NPCs involved in running the kingdom, such as Ruler, General, and High Priest. The leadership roles provide bonuses on checks made to collect taxes, deal with rioting citizens, and resolve similar issues.</p>
<p>Start Your Treasury. The build points you have left over from starting your first settlement make up your initial Treasury.</p>
<p>Determine Your Kingdom's Attributes. Your initial Economy, Loyalty, and Stability scores are based on the kingdom's alignment and the buildings your settlement has. (If you start with more than one settlement, include all the settlements in this reckoning.)</p>
<p>Once you've completed these steps, move on to <Link to="/rule/kingdom_turn_sequence">Kingdom Turn Sequence</Link>.</p>
</>};
const _leadership_roles = {title: "Leadership Roles", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 200</Link></p>
<p>A stable kingdom has leaders that fill different roles' tending to the economy, defense, and health of its citizens. PCs and NPCs can fill these roles; your fighter may be the kingdom's Warden, the party cleric its High Priest, and so on. Each role grants the kingdom different benefits.</p>
<p>A character can only fill one leadership role at a time. For example, your character can't be both the Ruler and the High Priest. Even if you want the Ruler to be the head of the kingdom's religion, she's too busy ruling to also do the work of a High Priest; she'll have to appoint someone else to do that work.</p>
<p>The kingdom must have someone in the Ruler role to function; without a Ruler, the kingdom cannot perform basic actions and gains Unrest every turn. All other roles are optional, though leaving certain roles vacant gives your kingdom penalties.</p>
<p>These leadership roles can be a part of any form of government; in some kingdoms they take the form of a formal ruling council, while in others they may be advisors, ministers, relatives of the leader, or simply powerful nobles, merchants, or bureaucrats with access to the seat of power. The names of these roles are game terms and need not correspond to the titles of those roles in the kingdom - the Ruler of your kingdom may be called king, queen, chosen one, padishah, overlord, sultan, and so on.</p>
<p><strong className="hl">Responsibilities of Leadership:</strong> In order to gain the benefits of leadership, you must spend at least 7 days per month attending to your duties; these days need not be consecutive. This can be roleplayed or can be assumed to run in the background without needing to be defined or actively played out. Time spent ruling cannot be used for adventuring, crafting magic items, or completing other <Link to="/rule/downtime_activities">downtime activities</Link> that require your full attention and participation. Failure to complete your duties during a turn means treating the role as thought it's vacant.</p>
<p>For most campaigns, it's best to have the PCs pick the same days of the month for these administrative duties, so everyone is available for adventuring at the same time.</p>
<p><strong className="hl">PCs and NPCs as Leaders:</strong> These rules include enough important leadership roles that a small group of PCs can't fill them all. You may have to recruit NPCs to fill out the remaining necessary roles for your kingdom. Cohorts, followers, and even intelligent familiars or similar companions can fill leadership roles, and you may want to consider inviting allied NPCs to become rulers, such as asking a friendly ranger you rescued to become the kingdom's Marshal.</p>
<p><strong className="hl">Abdicating a Role:</strong> If you want to step down from a leadership position, you must find a replacement to avoid incurring the appropriate vacancy penalty for your position. Abdicating a position increases Unrest by 1 and requires a Loyalty check; if the check fails, the vacancy penalty applies for 1 turn while the new leader transitions into that role. If you are the Ruler, abdicating increases Unrest by 2 instead of 1, and you take a -4 penalty on the Loyalty check to avoid the vacancy penalty.</p>
<p>If you are not the Ruler and are leaving one leadership role to take a different one in the kingdom, the Unrest increase does not occur and you gain a +4 bonus on the Loyalty check to avoid the vacancy penalty.</p>
<p><strong className="hl">Leader Statistics:</strong> The statistics for the different roles are presented as follows.</p>
<p><strong className="hl">Benefit:</strong> This explains the benefit to your kingdom if you have a character in this role. If you have the <Link to="/feat/leadership">Leadership</Link> feat, increase this benefit by 1. If this section gives you a choice of two ability scores, use whichever is highest.</p>
<p>Most benefits are constant and last as long as there is a character in that role, but don't stack with themselves. For example, a General increases Loyalty by 2, so the General provides a constant +2 to the kingdom's Loyalty (not a stacking +2 increase every turn), which goes away if she dies or resigns. If a benefit mentions a particular phase in kingdom building, that benefit applies every turn during that phase. For example, the Royal Enforcer decreases Unrest by 1 at every Upkeep phase.</p>
<p><strong className="hl">Vacancy Penalty:</strong> This line explains the penalty to your kingdom if no character fills this role, or if the leader fails to spend the necessary time fulfilling his responsibilities. Some roles have no vacancy penalty. If a character in a role is killed or permanently incapacitated during a turn and not restored to health by the start of the next kingdom turn, that role counts as vacant for that next turn, after which a replacement can be appointed to the role.</p>
<p>Like benefits, most vacancy penalties are constant, last as long as that role is vacant, and don't stack with themselves. If a vacant role lists an increase to Unrest, however, that increase does not go away when the role is filled. For example, if the kingdom doesn't have a ruler for a turn, Unrest increases by 4 and doesn't automatically return to its previous level when you eventually fill the vacant Ruler role.</p>
</>};
const _ruler = {title: "Ruler", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 201</Link></p>
<p>The Ruler is the highest-ranking person in the kingdom, above even the other kingdom leaders, and is expected to embody the values of the kingdom. The Ruler performs the kingdom's most important ceremonies (such as knighting royals and signing treaties), is the kingdom's chief diplomatic officer (though most of these duties are handled by the Grand Diplomat), is the signatory for all laws affecting the entire kingdom, pardons criminals when appropriate, and is responsible for appointing characters to all other high positions in the government (such as other leadership roles, mayors of settlements, and judges).</p>
<p><strong className="hl">Benefit:</strong> Choose one kingdom attribute (Economy, Loyalty, or Stability). Add your Charisma modifier to this attribute. If your kingdom's Size is 26-100, choose a second kingdom attribute and add your Charisma modifier to it as well. If your kingdom's Size is 101 or more, choose a third kingdom attribute and add your Charisma modifier to it too.</p>
<p>If you have the <Link to="/feat/leadership">Leadership</Link> feat, the bonus from the feat applies to all kingdom attributes you affect (one, two, or three attributes, depending on the kingdom's Size).</p>
<p>If you marry someone of equal station, you both can act as Ruler. You both add your Charisma modifiers to the kingdom attribute (or attributes, if the kingdom is large enough). As long as one of you is present for 1 week per month, you avoid the vacancy penalty.</p>
<p>In a typical campaign where the kingdom leaders have no ties to actual nobility, "someone of equal station" is irrelevant and your marriage is between two Rulers. In a campaign where the leaders are nobles or royals, marrying someone of lesser station means the spouse becomes a Consort rather than a Ruler.</p>
<p><strong className="hl">Vacancy Penalty:</strong> A kingdom without a ruler cannot claim new hexes, create Farms, build Roads, or purchase settlement districts. Unrest increases by 4 during the kingdom's Upkeep phase.</p>
</>};
const _consort = {title: "Consort", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 201</Link></p>
<p>The Consort is usually the spouse of the Ruler, and spends time attending court, speaking with and advising nobles, touring the kingdom to lift the spirits of the people, and so on. In most kingdoms, you cannot have two married Rulers and a Consort at the same time.</p>
<p>The Consort represents the Ruler when the Ruler is occupied or otherwise unable to act. With the Ruler's permission, the Consort may perform any of the Ruler's duties, allowing the Ruler to effectively act in two places at once. If the Ruler dies, the Consort may act as Ruler until the Heir comes of age and can take over as Ruler.</p>
<p><strong className="hl">Benefit:</strong> Add half your Charisma modifier to Loyalty. If the ruler is unavailable during a turn, you may act as the Ruler for that turn, negating the vacancy penalty for having no Ruler, though you do not gain the Ruler benefit. If you act as the Ruler for the turn, you must succeed at a Loyalty check during the kingdom's Upkeep phase or Unrest increases by 1.</p>
<p><strong className="hl">Vacancy Penalty:</strong> None.</p>
</>};
const _councilor = {title: "Councilor", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 201</Link></p>
<p>The Councilor acts as a liaison between the citizenry and the other kingdom leaders, parsing requests from the commonwealth and presenting the leaders' proclamations to the people in understandable ways. It is the Councilor's responsibility to make sure the Ruler is making decisions that benefit the kingdom's communities and its citizens.</p>
<p><strong className="hl">Benefit:</strong> Add your Charisma modifier or Wisdom modifier to Loyalty.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Loyalty decreases by 2. The kingdom gains no benefits from the <Link to="/rule/holiday_edicts">Holiday edict</Link>. During the Upkeep phase, Unrest increases by 1.</p>
</>};
const _general = {title: "General", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>The General is the highest-ranking member of the kingdom's military. If the kingdom has an army and a navy, the heads of those organizations report to the kingdom's General. The General is responsible for looking after the needs of the military and directing the kingdom's armies in times of war. Most citizens see the General as a protector and patriot.</p>
<p><strong className="hl">Benefit:</strong> Add your Charisma modifier or Strength modifier to Stability.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Loyalty decreases by 4.</p>
</>};
const _grand_diplomat = {title: "Grand Diplomat", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>The Grand Diplomat is in charge of the kingdom's foreign policy - how it interacts with other kingdoms and similar political organizations such as tribes of intelligent monsters. The Grand Diplomat is the head of all of the kingdom's diplomats, envoys, and ambassadors. It is the Grand Diplomat's responsibility to represent and protect the interests of the kingdom with regard to foreign powers.</p>
<p><strong className="hl">Benefit:</strong> Add your Charisma modifier or Intelligence modifier to Stability.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Stability decreases by 2. The kingdom cannot issue <Link to="/rule/diplomatic_edicts">Diplomatic</Link> or <Link to="/rule/exploration_edicts">Exploration</Link> edicts.</p>
</>};
const _heir = {title: "Heir", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>The Heir is usually the Ruler's eldest son or daughter, though some kingdoms may designate a significant advisor (such as a seneschal) as Heir. The Heir's time is mostly spent learning to become a ruler - pursuing academic and martial training, touring the kingdom to get to the know the land and its people, experiencing the intrigues of courtly life, and so on.</p>
<p>Because the Heir carries the potential of being the next Ruler, the Heir's role is similar to the Consort in that the Heir may act on behalf of the Ruler.</p>
<p><strong className="hl">Benefit:</strong> Add half your Charisma modifier to Loyalty. You may act as the Ruler for a turn, negating the vacancy penalty for the kingdom having no Ruler, though you do not gain the Ruler benefit. Whenever you act as the Ruler for the turn, you must succeed at a Loyalty check during the kingdom's Upkeep phase or Unrest increases by 1.</p>
<p><strong className="hl">Vacancy Penalty:</strong> None.</p>
</>};
const _high_priest = {title: "High Priest", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>The High Priest tends to the kingdom's religious needs and guides its growth. If the kingdom has an official religion, the High Priest may also be the highest-ranking member of that religion in the kingdom, and has similar responsibilities over the lesser priests of that faith to those the Grand Diplomat has over the kingdom's ambassadors and diplomats. If the kingdom has no official religion, the High Priest may be a representative of the most popular religion in the kingdom or a neutral party representing the interests of all religions allowed by the kingdom.</p>
<p><strong className="hl">Benefit:</strong> Add your Charisma modifier or Wisdom modifier to Stability.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Stability and Loyalty decrease by 2. During the Upkeep phase, Unrest increases by 1.</p>
</>};
const _magister = {title: "Magister", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>The Magister guides the kingdom's higher learning and magic, promoting education and knowledge among the citizens and representing the interests of magic, science, and academia. In most kingdoms, the Magister is a sage, a wizard, or a priest of a deity of knowledge, and oversees the governmental bureaucracy except regarding finance.</p>
<p><strong className="hl">Benefit:</strong> Add your Charisma modifier or Intelligence modifier to Economy.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Economy decreases by 4.</p>
</>};
const _marshal = {title: "Marshal", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 203</Link></p>
<p>The Marshal ensures that the kingdom's laws are being enforced in the remote parts of the kingdom as well as in the vicinity of the capital. The Marshal is also responsible for securing the kingdom's borders. He organizes regular patrols and works with the General to respond to threats that militias and adventurers can't deal with alone.</p>
<p><strong className="hl">Benefit:</strong> Add your Dexterity modifier or Wisdom modifier to Economy.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Economy decreases by 4.</p>
</>};
const _royal_enforcer = {title: "Royal Enforcer", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 203</Link></p>
<p>The Royal Enforcer deals with punishing criminals, working with the Councilor to make sure the citizens feel the government is adequately dealing with wrongdoers, and working with the Marshal to capture fugitives from the law. The Royal Enforcer may grant civilians the authority to kill in the name of the law.</p>
<p><strong className="hl">Benefit:</strong> Add your Dexterity modifier or Strength modifier to Loyalty. During the Upkeep phase, you may decrease Unrest by 1 (this is not affected by having the <Link to="/feat/leadership">Leadership</Link> feat); if you do so, you must succeed at a Loyalty check or Loyalty decreases by 1.</p>
<p><strong className="hl">Vacancy Penalty:</strong> None.</p>
</>};
const _spymaster = {title: "Spymaster", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 203</Link></p>
<p>The Spymaster observes the kingdom's criminal elements and underworld and spies on other kingdoms. The Spymaster always has a finger on the pulse of the kingdom's underbelly, and uses acquired information to protect the interests of the kingdom at home and elsewhere through a network of spies and informants.</p>
<p><strong className="hl">Benefit:</strong> During the Edict phase, choose one kingdom attribute (Economy, Loyalty or Stability). Add your Dexterity modifier or Intelligence modifier to this attribute.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Economy decreases by 4. During the Upkeep phase, Unrest increases by 1.</p>
</>};
const _treasurer = {title: "Treasurer", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 203</Link></p>
<p>The Treasurer monitors the state of the kingdom's Treasury and citizens' confidence in the value of their money and investigates whether any businesses are taking unfair advantage of the system. The Treasurer is in charge of the tax collectors and tracks debts and credits with guilds and other governments.</p>
<p><strong className="hl">Benefit:</strong> Add your Intelligence modifier or Wisdom modifier to Economy.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Economy decreases by 4. The kingdom cannot collect taxes - during the Edict phase, when you would normally collect taxes, the kingdom does not collect taxes at all and the taxation level is considered "none."</p>
</>};
const _viceroy = {title: "Viceroy", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 203</Link></p>
<p>The Viceroy represents the Ruler's interests on an ongoing basis in a specific location such as a colony or vassal state (see the optional <Link to="/rule/vassalage_edicts">Vassalage edict</Link>). The Viceroy is in effect the Ruler for that territory; her orders are superceded only by direct commands from the Ruler.</p>
<p><strong className="hl">Benefit:</strong> Add half your Intelligence or Wisdom modifier to Economy. You may assume any leadership role (including Ruler) for your colony or vassal state, but any benefit you provide in this role is 1 less than normal; if you do so, you must spend 7 days that month performing duties appropriate to that leadership role in addition to the 7 days spent for Viceroy duties.</p>
<p><strong className="hl">Vacancy Penalty:</strong> If you have no Viceroy for your vassal state, treat it as if it had the Ruler vacancy penalty.</p>
</>};
const _warden = {title: "Warden", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","leadership_roles"], siblings: ["ruler","consort","councilor","general","grand_diplomat","heir","high_priest","magister","marshal","royal_enforcer","spymaster","treasurer","viceroy","warden"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 204</Link></p>
<p>The Warden is responsible for enforcing laws in larger settlements, as well as ensuring the safety of the kingdom leaders. The Warden also works with the General to deploy forces to protect settlements and react to internal threats.</p>
<p><strong className="hl">Benefit:</strong> Add your Constitution modifier or Strength modifier to Loyalty.</p>
<p><strong className="hl">Vacancy Penalty:</strong> Loyalty and Stability decrease by 2.</p>
</>};
const _who_rolls_the_kingdom_check = {title: "Who Rolls the Kingdom Check?", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 202</Link></p>
<p>Running a kingdom is more fun if all the players are involved and each is responsible for making some of the kingdom checks. Who makes each roll depends on the players in your group and what roles they want to play. Some players may not want to make any of these rolls. You may want to start with the following die roll responsibilities and modify them to suit your kingdom and the other players. Anything marked as an optional rule is described in the <Link to="/rule/kingdom_building">optional kingdom-building rules</Link>.</p>
<p><strong className="hl">Ruler:</strong> Loyalty checks, any checks or edicts not covered by other rulers</p>
<p><strong className="hl">Consort:</strong> As Ruler when Ruler is unavailable</p>
<p><strong className="hl">Councilor:</strong> Holiday edicts</p>
<p><strong className="hl">General:</strong> Kingdom checks for events requiring combat</p>
<p><strong className="hl">Grand Diplomat:</strong> Diplomatic edicts (optional rule)</p>
<p><strong className="hl">Heir:</strong> Kingdom event rolls</p>
<p><strong className="hl">High Priest:</strong> Holiday edicts, rolls to generate magic items from Cathedrals, Shrines, and Temples</p>
<p><strong className="hl">Magister:</strong> Rolls to generate magic items not rolled by the High Priest</p>
<p><strong className="hl">Marshal:</strong> Exploration edicts (optional rule)</p>
<p><strong className="hl">Royal Enforcer:</strong> Loyalty checks to reduce Unrest or prevent Unrest increases</p>
<p><strong className="hl">Spymaster:</strong> Kingdom checks involving crime and foreigners</p>
<p><strong className="hl">Treasurer:</strong> Economy checks, Taxation edicts,</p>
<p><strong className="hl">Trade edicts</strong> (optional rule)</p>
<p><strong className="hl">Viceroy:</strong> Vassalage edicts (optional rule)</p>
<p><strong className="hl">Warden:</strong> Stability checks</p>
</>};
const _build_points = {title: "Build Points", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["wealthy_sponsor","starting_from_scratch"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 204</Link></p>
<p>The units of a kingdom's wealth and productivity are build points (BP). Build points are an abstraction representing the kingdom's expendable assets, not just gold in the treasury. Build points include raw materials (such as livestock, lumber, land, seed, and ore), tangible goods (such as wagons, weapons, and candles), and people (artisans, laborers, and colonists). Together, these assets represent the labor and productive output of your citizens.</p>
<p>You spend BP on tasks necessary to develop and protect your kingdom - planting farms, creating roads, constructing buildings, raising armies, and so on. These things are made at your command, but they are not yours. The cities, roads, farms, and buildings belong to the citizens who build them and use them to live and work every day, and those acts of living and working create more BP for the kingdom. As the leaders, you use your power and influence to direct the economic and constructive activity of your kingdom, deciding what gets built, when, and where.</p>
<p>Build points don't have a precise exchange rate to gold pieces because they don't represent exact amounts of specific resources. For example, you can't really equate the productivity of a blacksmith with that of a stable, as their goods are used for different things and aren't produced at the same rate, but both of them contribute to a kingdom's overall economy. In general, 1 BP is worth approximately 4,000 gp; use this value to get a sense of how costly various kingdom expenditures are. In practice, it is not a simple matter to convert one currency to the other, but there are certain ways for your PC to spend gp to increase the kingdom's BP or withdraw BP and turn them into gold for your character to spend.</p>
<p>Providing a seed amount of BP at the start of kingdom building means your kingdom isn't starving for resources in the initial months. Whether you acquire these funds on your own or with the help of an influential NPC is decided by the GM, and sets the tone for much of the campaign.</p>
</>};
const _wealthy_sponsor = {title: "Wealthy Sponsor", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","build_points"], siblings: ["wealthy_sponsor","starting_from_scratch"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 205</Link></p>
<p>In many cases, a kingdom's initial BP come from a source outside your party. A wealthy queen may want to tame some of the wilderness on her kingdom's borders, or a merchant's guild may want to construct a trading post to increase trade with distant lands. Regardless of the intent, the work involved to create a new settlement costs thousands of gold pieces - more than most adventurers would want to spend on mundane things like jails, mills, and piers.</p>
<p>It is an easy matter for the GM to provide these funds in the form of a quest reward. A wealthy queen may grant you minor titles and BP for your treasury if you kill a notorious bandit and turn his ruined castle into a town, or a guild may provide you with a ship full of goods and workers and enough BP to start a small colony on a newly discovered, resource-rich continent. In exchange for this investment, the sponsor expects you to be a vassal or close ally; in some cases, you may be required to pay back these BP (such as at a rate of 1 BP per turn) or provide tribute to the patron on an ongoing basis (such as at a rate of 10% of your income per turn, minimum 1 BP).</p>
<p>An appropriate starting amount is 50 BP. This amount is enough to keep a new kingdom active for a few turns while it establishes its own economy, but it is still at risk of collapse from mismanagement or bad luck.</p>
<p>As the initial citizens represented by this BP investment are probably loyal to the sponsor, taking action against the sponsor may anger those people and cause trouble. For example, if you rebuff the queen's envoy, your citizens may see this as a snub against the queen and rebel.</p>
<p>Your responsibility to the sponsor usually falls into one of the following categories, based on the loan arrangement.</p>
<p><strong className="hl">Charter:</strong> The sponsor expects you to explore, clear, and settle a wilderness area along the sponsor's border - an area where the sponsor has some territorial claims. You may have to fend off other challengers for the land.</p>
<p><strong className="hl">Conquest:</strong> The sponsor's soldiers clashed with the army of an existing kingdom and the kingdom's old leaders have fled, surrendered, or been killed. The sponsor has placed you in command of this territory and the soldiers.</p>
<p><strong className="hl">Fief:</strong> The sponsor places you in charge of an existing domain within his own already-settled lands. If it includes already improved terrain and cities, you're expected to govern and further improve them. (While you'll start with land and settlements, you'll still need around 50 BP to handle your kingdom's Consumption and development needs.)</p>
<p><strong className="hl">Grant:</strong> The sponsor places you in charge of settling and improving an area already claimed by the liege but not significantly touched by civilization. You may have to expand the borders of the land or defend it against hostile creatures.</p>
</>};
const _starting_from_scratch = {title: "Starting from Scratch", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","build_points"], siblings: ["wealthy_sponsor","starting_from_scratch"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 205</Link></p>
<p>It's not easy to start a kingdom - probably the reason everyone doesn't have one. If you are founding a kingdom on your own, without an external sponsor or a fantastic windfall of resources, the initial financial costs can be crippling to PCs. Even building a new town with just a House and an Inn costs 13 BP-worth over 50,000 gp in terms of stone, timber, labor, food, and so on. To compensate for this (and encourage you to adventure in search of more gold that you can convert into BP), if you're running a small, self-starting kingdom, the GM may allow you to turn your gold into BP at a better rate. You may only take advantage of this if you don't have a sponsor; it represents your people seeing the hard work you're directly putting in and being inspired to do the same to get the kingdom off the ground.</p>
<p>This improved rate depends on the Size of your kingdom, as shown in the following table.</p>
<ScrollContainer id="rule-starting_from_scratch--table-0"><table>
<thead>
<tr>
<th>Kingdom Size</th>
<th>Price of 1 BP</th>
<th>Withdrawal Rate*</th>
</tr>
</thead>
<tbody><tr>
<td>01-25</td>
<td>1,000 gp</td>
<td>500 gp</td>
</tr>
<tr>
<td>26-50</td>
<td>2,000 gp</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>51-100</td>
<td>3,000 gp</td>
<td>1,500 gp</td>
</tr>
<tr>
<td>101+</td>
<td>4,000 gp</td>
<td>2,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<p>* If you make a withdrawal from the Treasury during the <Link to="/rule/income_phase">Income phase</Link>, use this withdrawal rate to determine how much gp you gain per BP withdrawn.</p>
<p>The GM may also allow you to discover a cache of goods worth BP (instead of gp) as a reward for adventuring, giving you the seed money to found or support your kingdom.</p>
</>};
const _kingdom_turn_sequence = {title: "Kingdom Turn Sequence", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["kingdom_upkeep_phase","kingdom_edict_phase","kingdom_income_phase","kingdom_event_phase"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 205</Link></p>
<p>A kingdom's growth occurs during four phases, which together make up 1 kingdom turn (1 month of game time). The four phases are as follows:</p>
<p><strong className="hl">Phase 1-Upkeep:</strong> Check your kingdom's stability, pay costs, and deal with Unrest.</p>
<p>If your kingdom controls 0 hexes, skip the Upkeep phase and proceed to the Edict phase.</p>
<p><strong className="hl">Phase 2-Edict:</strong> Declare official proclamations about taxes, diplomacy, and other kingdom-wide decisions.</p>
<p><strong className="hl">Phase 3-Income:</strong> Add to your Treasury by collecting taxes and converting gp into BP, or withdraw BP from your kingdom for your personal use.</p>
<p><strong className="hl">Phase 4-Event:</strong> Check whether any unusual events occur that require attention. Some are beneficial, such as an economic boom, good weather, or the discovery of remarkable treasure. Others are detrimental, such as foul weather, a plague, or a rampaging monster.</p>
<p>These phases are always undertaken in the above order. Many steps allow you to perform an action once per kingdom turn; this means once for the entire kingdom, not once per leader.</p>
</>};
const _kingdom_upkeep_phase = {title: "Kingdom Upkeep Phase", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","kingdom_turn_sequence"], siblings: ["kingdom_upkeep_phase","kingdom_edict_phase","kingdom_income_phase","kingdom_event_phase"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 206</Link></p>
<p>During the Upkeep phase, you adjust your kingdom's scores based on what's happened in the past month, how happy the people are, how much they've consumed and are taxed, and so on.</p>
<p><strong className="hl">Step 1-Determine Kingdom Stability:</strong> Attempt a Stability check. If you succeed, Unrest decreases by 1 (if this would reduce Unrest below 0, add 1 BP to your Treasury instead). If you fail by 4 or less, Unrest increases by 1; if you fail by 5 or more, Unrest increases by 1d4.</p>
<p><strong className="hl">Step 2-Pay Consumption:</strong> Subtract your kingdom's Consumption from the kingdom's Treasury. If your Treasury is negative after paying Consumption, Unrest increases by 2.</p>
<p><strong className="hl">Step 3-Fill Vacant Magic Item Slots:</strong> If any of your settlement districts have buildings that produce magic items (such as a Caster's Tower or Herbalist) with vacant magic item slots, there is a chance of those slots filling with new items (see the <Link to="/rule/magic_items_in_settlements">Magic Items in Settlements</Link> section).</p>
<p><strong className="hl">Step 4-Modify Unrest:</strong> Unrest increases by 1 for each kingdom attribute (Economy, Loyalty, or Stability) that is a negative number.</p>
<p>The Royal Enforcer may attempt to reduce Unrest during this step.</p>
<p>If the kingdom's Unrest is 11 or higher, it loses 1 hex (the leaders choose which hex). See <Link to="/rule/losing_hexes">Losing Hexes</Link> for more information.</p>
<p>If your kingdom's Unrest ever reaches 20, the kingdom falls into anarchy. While in anarchy, your kingdom can take no action and treats all Economy, Loyalty, and Stability check results as 0. Restoring order once a kingdom falls into anarchy typically requires a number of quests and lengthy adventures by you and the other would-be leaders to restore the people's faith in you.</p>
<p>Example: Jessica is the Ruler of a kingdom with a Size of 30 and a Control DC of 60. Based on leadership role bonuses, kingdom alignment bonuses, and buildings in her settlements, the kingdom's Economy is 52, its Loyalty is 45, and its Stability is 56. Its Unrest is currently 5, its Consumption is 5, and the Treasury has 12 BP. In Step 1 of the Upkeep phase, Adam, the Warden, attempts a Stability check to determine the kingdom's stability. Adam rolls a 19, adds the kingdom's Stability (56), and subtracts its Unrest (5), for a total of 70; that's a success, so Unrest decreases by 1. In Step 2, the kingdom pays 5 BP for Consumption. None of the kingdom's magic item slots are empty, so they skip Step 3. In Step 4, none of the attributes are negative, so Unrest doesn't increase. Mark, the Royal Enforcer, doesn't want to risk reducing the kingdom's Loyalty, so he doesn't use his leadership role to reduce Unrest. At the end of this phase, the kingdom has Economy 52, Loyalty 45, Stability 56, Unrest 4, Consumption 5, and Treasury 7 BP.</p>
</>};
const _kingdom_edict_phase = {title: "Kingdom Edict Phase", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","kingdom_turn_sequence"], siblings: ["kingdom_upkeep_phase","kingdom_edict_phase","kingdom_income_phase","kingdom_event_phase"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 206</Link></p>
<p>The Edict phase is when you make proclamations on expansion, improvements, taxation, holidays, and so on.</p>
<p><strong className="hl">Step 1-Assign Leadership:</strong> Assign PCs or NPCs to any vacant leadership roles or change the roles being filled by particular PCs or closely allied NPCs (see <Link to="/rule/leadership_roles">Leadership Roles</Link>).</p>
<p><strong className="hl">Steps 2 and 3-Claim and Abandon Hexes:</strong> For your kingdom to grow, you must claim additional hexes. You can only claim a hex that is adjacent to at least 1 other hex in your kingdom. Before you can claim it, the hex must first be explored, then cleared of monsters and dangerous hazards (see Steps 2 and 3 of <Link to="/rule/founding_a_settlement">Founding a Settlement</Link> for more details). Then, to claim the hex, spend 1 BP; this establishes the hex as part of your kingdom and increases your kingdom's Size by 1. <Link to="/rule/improvement_edicts">Table 4-4: Improvement Edicts</Link> tells you the maximum number of hexes you can claim per turn.</p>
<p>You may abandon any number of hexes to reduce your kingdom's Size (which you may wish to do to manage Consumption). Doing so increases Unrest by 1 for each hex abandoned (or by 4 if the hex contained a settlement). This otherwise functions like losing a hex due to unrest (<Link to="/rule/upkeep_phase">see Step 4 of the Upkeep phase</Link>).</p>
<p><strong className="hl">Step 4-Build Terrain Improvements:</strong> You may spend BP to build terrain improvements like Farms, Forts, Roads, Mines, and Quarries (see <Link to="/rule/terrain_improvements">Terrain Improvements</Link>).</p>
<p>You may also prepare a hex for constructing a settlement. Depending on the site, this may involve clearing trees, moving boulders, digging sanitation trenches, and so on. See the Preparation Cost column on <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link> to determine how many BP this requires.</p>
<p><Link to="/rule/improvement_edicts">Table 4-4: Improvement Edicts</Link> tells you the maximum number of terrain improvements you can make per turn.</p>
<p><strong className="hl">Step 5-Create and Improve Settlements:</strong> You may create a settlement in a claimed hex (see <Link to="/rule/founding_a_settlement">Founding a Settlement</Link>). <Link to="/rule/improvement_edicts">Table 4-4: Improvement Edicts</Link> tells you the maximum number of settlements you can establish per turn.</p>
<p>You may construct a building in any settlement in your kingdom. The list of available building types can be found <Link to="/rule/building_descriptions">here</Link>. When a building is completed, apply its modifiers to your kingdom sheet. <Link to="/rule/improvement_edicts">Table 4-4: Improvement Edicts</Link> tells you the maximum number of buildings you can construct in your kingdom per turn. The first House, Mansion, Noble Villa, or Tenement your kingdom builds each turn does not count against that limit.</p>
<p><strong className="hl">Step 6-Create Army Units:</strong> You may create, expand, equip, or repair army units (see <Link to="/rule/mass_combat">Mass Combat</Link>).</p>
<p><strong className="hl">Step 7-Issue Edicts:</strong> Select or adjust your edict levels (see <Link to="/rule/edicts">Edicts</Link>).</p>
<p>Example: Jessica's kingdom has no vacant leadership roles, so nothing happens in Step 1. The leaders don't want to spend BP and increase Size right now, so in Step 2 they don't claim any hexes. In Step 3, the leaders construct a Farm in one of the kingdom's prepared hexes (Consumption -2, Treasury -2 BP). In Steps 5 and 6, the leaders continue to be frugal and do not construct settlement improvements or create armies. In Step 7, the leaders issue a Holiday edict of one national holiday (Loyalty +1, Consumption +1) and set the Promotion edict level to "none" (Stability -1, Consumption +0). Looking ahead to the Income phase, Jessica realizes that an average roll for her Economy check would be a failure (10 on the 1d20 + 52 Economy - 4 Unrest = 58, less than the Control DC of 60), which means there's a good chance the kingdom won't generate any BP this turn. She decides to set the Taxation edict to "heavy" (Economy +3, Loyalty -4). At the end of this phase, the kingdom has Economy 55, Loyalty 42, Stability 55, Unrest 4, Consumption 4, and Treasury 5 BP.</p>
</>};
const _kingdom_income_phase = {title: "Kingdom Income Phase", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","kingdom_turn_sequence"], siblings: ["kingdom_upkeep_phase","kingdom_edict_phase","kingdom_income_phase","kingdom_event_phase"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 207</Link></p>
<p>During the Income phase, you may add to or withdraw from the Treasury as well as collect taxes.</p>
<p><strong className="hl">Step 1-Make Withdrawals from the Treasury:</strong> The kingdom-building rules allow you to expend BP on things related to running the kingdom. If you want to spend some of the kingdom's resources on something for your own personal benefit (such as a new magic item), you may withdraw BP from the Treasury and convert it into gp once per turn, but there is a penalty for doing so.</p>
<p>Each time you withdraw BP for your personal use, Unrest increases by the number of BP withdrawn. Each BP you withdraw this way converts to 2,000 gp of personal funds.</p>
<p><strong className="hl">Step 2-Make Deposits to the Treasury:</strong> You can add funds to a kingdom's Treasury by donating your personal wealth to the kingdom - coins, gems, jewelry, weapons, armor, magic items, and other valuables you find while adventuring, as long as they are individually worth 4,000 gp or less. For every full 4,000 gp in value of the deposit, increase your kingdom's BP by 1.</p>
<p>If you want to donate an item that is worth more than 4,000 gp, refer to Step 3 instead.</p>
<p><strong className="hl">Step 3-Sell Expensive Items for BP:</strong> You can attempt to sell expensive personal items (that is, items worth more than 4,000 gp each) through your kingdom's markets to add to your Treasury. You may sell one item per settlement district per turn. You must choose the settlement where you want to sell the item, and the item cannot be worth more than the base value of that settlement (see <Link to="/rule/settlements_and_districts">Table 4-5</Link>). To sell an item, divide its price by half (as if selling it to an NPC for gp), divide the result by 4,000 (rounded down), and add that many BP to your Treasury.</p>
<p>You cannot use this step to sell magic items held or created by buildings in your settlements; those items are the property of the owners of those businesses. (See <Link to="/rule/magic_items_in_settlements">Magic Items in Settlements</Link> for more information on this topic.)</p>
<p><strong className="hl">Step 4-Collect Taxes:</strong> Attempt an Economy check, divide the result by 3 (round down), and add a number of BP to your Treasury equal to the result.</p>
<p>Example: Jessica and the other leaders need to keep BP in the kingdom for future plans, so they skip Step 1 of the Income phase. They are worried that they won't collect enough taxes this turn, so just in case, in Step 2 they deposit 8,000 gp worth of coins, gems, and small magic items (Treasury +2 BP). The leaders aren't selling any expensive items, so nothing happens in Step 3. In Step 4, Rob, the Treasurer, rolls the Economy check to collect taxes. Rob rolls a 9 on the 1d20, adds the kingdom's Economy score (55), and subtracts Unrest (4) for a total of 60, which means the kingdom adds 20 BP (the Economy check result of 60, divided by 3) to the Treasury. At the end of this phase, the kingdom has Economy 55, Loyalty 42, Stability 55, Unrest 4, Consumption 4, and Treasury 27 BP.</p>
</>};
const _kingdom_event_phase = {title: "Kingdom Event Phase", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","kingdom_turn_sequence"], siblings: ["kingdom_upkeep_phase","kingdom_edict_phase","kingdom_income_phase","kingdom_event_phase"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 208</Link></p>
<p>In the Event phase, a random event may affect your kingdom as a whole or a single settlement or hex.</p>
<p>There is a 25% chance of an event occurring (see <Link to="/rule/events">Events</Link>). If no event occurred during the last turn, this chance increases to 75%. Some events can be negated, ended, or compensated for with some kind of kingdom check. Others, such as a rampaging monster, require you to complete an adventure or deal with a problem in a way not covered by the kingdom-building rules.</p>
<p>In addition, the GM may have an adventure- or campaign-specific event take place. Other events may also happen during this phase, such as <Link to="/rule/independence_and_unification">independence or unification</Link>.</p>
<p>Example: The GM rolls on one of the event tables and determines that a monster is attacking one of the kingdom's hexes. Instead of attempting a Stability check to deal with the monster (risking increasing Unrest if it fails), Jessica and the other leaders go on a quest to deal with the monster personally. They defeat the monster, so the event does not generate any Unrest. At the end of this phase, the kingdom's scores are unchanged: Economy 55, Loyalty 42, Stability 55, Unrest 4, Consumption 4, and Treasury 27 BP.</p>
</>};
const _edicts = {title: "Edicts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["holiday_edicts","improvement_edicts","promotion_edicts","taxation_edicts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 208</Link></p>
<p>Edicts are the official pronouncements by your government about how you are running the kingdom that turn. For example, you may decide to have low or high taxes, to have more or fewer holidays, and how much effort to put into improving the kingdom's infrastructure. Edicts fall into four types: Holiday, Improvement, Promotion, and Taxation.</p>
<p>In the Edict phase of the kingdom turn, you may set the Holiday, Promotion, and Taxation edict categories to whatever level you want, as well as decide how much of your allowed improvement from the Improvement edict you'll use. For example, you may decide that this turn holidays are quarterly, promotions are aggressive, taxation is minimal, and you won't build any improvements.</p>
</>};
const _holiday_edicts = {title: "Holiday Edicts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","edicts"], siblings: ["holiday_edicts","improvement_edicts","promotion_edicts","taxation_edicts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 208</Link></p>
<p>Holidays are general celebrations or observances that take place across the kingdom. The BP expenditure includes lost revenue from citizens not working during the holidays, preparations and logistical arrangements that occur year-round, and the cost of the actual celebrations (these annual costs are averaged over the year and included in the listed Consumption modifier that you pay each turn).</p>
<p>The number of holidays per year is the number you promise to uphold and the number that the common folk expect to enjoy over the next months. The Loyalty and Consumption modifiers change as soon as you change the number of holidays per year. The listed number assumes that you are fulfilling your promise - if you announce 12 holidays in the coming year but don't actually hold and pay for them, the GM should increase your kingdom's Unrest to reflect public disappointment and outrage.</p>
<p>Example: Logan is the Ruler of a kingdom with some Loyalty issues. He issues a Holiday edict that there will be 24 kingdom-wide official holidays in the next year (Loyalty +4, Consumption +8). In the second turn, he worries about the increased Consumption's effect on the Treasury, so he issues a new Holiday edict decreeing that until further notice, there will be no kingdom-wide holidays. He loses the previous +4 Loyalty bonus and incurs a -1 Loyalty penalty for the new Holiday edict, but no longer has to pay the 8 Consumption each turn for his previous edict. If he frequently changes Holiday edicts from high to low levels, the GM may decide that his citizens no longer believe such promises and he won't gain any benefits from having a high level of Holiday edict until he becomes consistent.</p>
<h3 id="rule-holiday_edicts-table-4-1-holiday-edicts">Table 4-1: Holiday Edicts</h3>
<ScrollContainer id="rule-holiday_edicts--table-0"><table>
<thead>
<tr>
<th>Per Year</th>
<th>Loyalty</th>
<th>Consumption</th>
</tr>
</thead>
<tbody><tr>
<td>None</td>
<td>-1</td>
<td>+0</td>
</tr>
<tr>
<td>1</td>
<td>+1</td>
<td>+1</td>
</tr>
<tr>
<td>6</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>12</td>
<td>+3</td>
<td>+4</td>
</tr>
<tr>
<td>24</td>
<td>+4</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _improvement_edicts = {title: "Improvement Edicts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","edicts"], siblings: ["holiday_edicts","improvement_edicts","promotion_edicts","taxation_edicts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 208</Link></p>
<p>Improvements are physical improvements you can make to your kingdom: founding new settlements, adding buildings to a settlement, building roads, creating facilities such as mines to tap natural resources, and claiming more hexes for your kingdom. Your kingdom's Size limits how many improvements you can make each turn; see Table 4-4: Improvement Edicts below. You can make all of the improvements listed on the appropriate row of the table. For example, if your kingdom's Size is 5, on each turn you can create 1 new settlement, 1 new building, 2 terrain improvements, and claim 1 more hex.</p>
<h3 id="rule-improvement_edicts-table-4-4-improvement-edicts">Table 4-4: Improvement Edicts</h3>
<ScrollContainer id="rule-improvement_edicts--table-0"><table>
<thead>
<tr>
<th>Kingdom Size</th>
<th>New Settlements<sup><InnerLink showBacklink="backlink-rule-improvement_edicts-ref-1-1" id="rule-improvement_edicts-ref-1-1" data-hash-target to="rule-improvement_edicts-1">1</InnerLink></sup></th>
<th>New Buildings<sup><InnerLink showBacklink="backlink-rule-improvement_edicts-ref-2-1" id="rule-improvement_edicts-ref-2-1" data-hash-target to="rule-improvement_edicts-2">2</InnerLink></sup></th>
<th>Terrain Improvements</th>
<th>Hex Claims</th>
</tr>
</thead>
<tbody><tr>
<td>01-10</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>11-25</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>26-50</td>
<td>1</td>
<td>5</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>51-100</td>
<td>2</td>
<td>10</td>
<td>7</td>
<td>4</td>
</tr>
<tr>
<td>101-200</td>
<td>3</td>
<td>20</td>
<td>9</td>
<td>8</td>
</tr>
<tr>
<td>201+</td>
<td>4</td>
<td>No limit</td>
<td>12</td>
<td>12</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-improvement_edicts-label">Footnotes</h3>
<ol>
<li id="rule-improvement_edicts-1">
<p>Instead of creating a new settlement, your kingdom may create a new army unit (see <Link to="/rule/mass_combat">Mass Combat</Link>), expand or equip an existing army unit, or bring an existing army unit back to full strength. <InnerLink id="backlink-rule-improvement_edicts-ref-1-1" data-hash-target to="rule-improvement_edicts-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-improvement_edicts-2">
<p>Upgrading a building (for example, from a Shrine to a Temple) or destroying a building counts toward this limit. The first House, Mansion, Noble Villa, or Tenement your kingdom builds each turn does not count against this number. <InnerLink id="backlink-rule-improvement_edicts-ref-2-1" data-hash-target to="rule-improvement_edicts-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _promotion_edicts = {title: "Promotion Edicts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","edicts"], siblings: ["holiday_edicts","improvement_edicts","promotion_edicts","taxation_edicts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 209</Link></p>
<p>Promotion edicts are events and actions the kingdom uses to attract new citizens and increase the well-being of the kingdom, such as recruitment campaigns, advertisements about services and goods, and propaganda to improve the perception of your kingdom at home and abroad. Promotions increase Consumption, but also increase Stability.</p>
<h3 id="rule-promotion_edicts-table-4-2-promotion-edicts">Table 4-2: Promotion Edicts</h3>
<ScrollContainer id="rule-promotion_edicts--table-0"><table>
<thead>
<tr>
<th>Promotion Level</th>
<th>Stability</th>
<th>Consumption</th>
</tr>
</thead>
<tbody><tr>
<td>None</td>
<td>-1</td>
<td>+0</td>
</tr>
<tr>
<td>Token</td>
<td>+1</td>
<td>+1</td>
</tr>
<tr>
<td>Standard</td>
<td>+2</td>
<td>+2</td>
</tr>
<tr>
<td>Aggressive</td>
<td>+3</td>
<td>+4</td>
</tr>
<tr>
<td>Expansionist</td>
<td>+4</td>
<td>+8</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _taxation_edicts = {title: "Taxation Edicts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","edicts"], siblings: ["holiday_edicts","improvement_edicts","promotion_edicts","taxation_edicts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 209</Link></p>
<p>Setting the tax level determines how much revenue you collect from taxes in the Income phase. Higher taxes increase your kingdom's Economy (making it easier for you to succeed at Economy checks to generate revenue) but make your citizens unhappy (reducing Loyalty).</p>
<h3 id="rule-taxation_edicts-table-4-3-taxation-edicts">Table 4-3: Taxation Edicts</h3>
<ScrollContainer id="rule-taxation_edicts--table-0"><table>
<thead>
<tr>
<th>Tax Level</th>
<th>Economy</th>
<th>Loyalty</th>
</tr>
</thead>
<tbody><tr>
<td>None</td>
<td>+0</td>
<td>+1</td>
</tr>
<tr>
<td>Light</td>
<td>+1</td>
<td>-1</td>
</tr>
<tr>
<td>Normal</td>
<td>+2</td>
<td>-2</td>
</tr>
<tr>
<td>Heavy</td>
<td>+3</td>
<td>-4</td>
</tr>
<tr>
<td>Overwhelming</td>
<td>+4</td>
<td>-8</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _losing_hexes = {title: "Losing Hexes", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["capital_city"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 209</Link></p>
<p>If you lose control of a hex - whether because of Unrest, monster attacks, assaults from a hostile kingdom, and so on - you lose all the benefits of any terrain improvements in that hex (such as Farms and Roads). All settlements in that hex become free cities with no loyalty to you or any other kingdom (see <Link to="/rule/special_terrain">Free City</Link>). At the GM's discretion, monsters may move into the abandoned hex, requiring you to clear it again if you want to claim it later, and terrain improvements may decay over time.</p>
<p>Losing a hex may break your connection to other kingdom hexes. For example, losing the only hex that bridges two sides of a mountain range creates two separate territories. If this happens, the primary territory is the part of the kingdom with your capital city, and the rest of the kingdom is the secondary territory. If none of the kingdom's leaders are in the secondary territory when this split happens, you lose control of all hexes (as described above) in the secondary territory.</p>
<p>If at least one kingdom leader is in the secondary territory when the split occurs, you retain control of the secondary territory, but kingdom checks regarding its hexes treat Unrest as 1 higher, increasing by 1 each turn after the split. This modifier goes away if you claim a hex that reconnects the secondary territory to the primary territory.</p>
<p>If you claim a hex that reestablishes a connection to a leaderless secondary territory, you regain the benefits of the territory's terrain improvements. You must succeed at a Stability check to reclaim each of your former settlements in the secondary territory. You initially have a +5 bonus on these checks because the cities want to return to your kingdom, but this bonus decreases by 1 (to a minimum bonus of +0) for each subsequent turn since you lost control of the secondary territory.</p>
<p>If your kingdom is reduced to 0 hexes - whether through Unrest, a natural disaster, an attack by another kingdom, or other circumstances - you are at risk of losing the kingdom. On your next turn, you must claim a new hex and found or claim a new settlement, or your kingdom is destroyed and you must start over if you want to found a new kingdom. At the GM's discretion, you may be able to keep some BP from your destroyed kingdom's Treasury for a time; otherwise, those assets are lost.</p>
</>};
const _capital_city = {title: "Capital City", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","losing_hexes"], siblings: ["capital_city"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 207</Link></p>
<p>A kingdom should have a capital city - the seat of your power. Your first settlement is your capital. If you want to designate a different settlement as the capital, you may do so in Step 7 of the Edict phase. Your capital city primarily comes into play if your <Link to="/rule/losing_hexes">kingdom loses hexes</Link>. If you change the capital city, attempt a Stability check. Success means Unrest increases by 1; failure means Unrest increases by 1d6.</p>
</>};
const _terrain_improvements = {title: "Terrain Improvements", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>Terrain improvements are changes to a hex that improve the land for your kingdom's use, such as cultivating fields, digging mines, and clearing forests for lumber. The following list describes common improvements. An improvement marked with an asterisk (*) can share the same hex as other improvements.</p>
<p>Some terrain improvements affect a settlement's Defense, which is used in the <Link to="/rule/mass_combat">mass combat rules</Link>.</p>
<p><strong className="hl">Terrain:</strong> This indicates what kind of hex you can build this terrain improvement in.</p>
<p><strong className="hl">Effect:</strong> This line states the effect the terrain improvement has on that hex (or in some cases, your entire kingdom).</p>
<p>If an improvement says you can upgrade it into another improvement, you can do so by paying the cost difference between the two improvements. When the upgrade is complete, you lose the benefit of the old improvement but gain the benefit of the new improvement.</p>
<p><strong className="hl">Cost:</strong> This line gives the cost in BP to build the terrain improvement.</p>
<h3 id="rule-terrain_improvements-table-4-6-terrain-and-terrain-improvements">Table 4-6: Terrain and Terrain Improvements</h3>
<ScrollContainer id="rule-terrain_improvements--table-0"><table>
<thead>
<tr>
<th>Terrain</th>
<th>Exploration Time<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-1-1" id="rule-terrain_improvements-ref-1-1" data-hash-target to="rule-terrain_improvements-1">1</InnerLink></sup></th>
<th>Preparation Time<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-2-1" id="rule-terrain_improvements-ref-2-1" data-hash-target to="rule-terrain_improvements-2">2</InnerLink></sup></th>
<th>Preparation Cost<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-3-1" id="rule-terrain_improvements-ref-3-1" data-hash-target to="rule-terrain_improvements-3">3</InnerLink></sup></th>
<th>Farm Cost<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-4-1" id="rule-terrain_improvements-ref-4-1" data-hash-target to="rule-terrain_improvements-4">4</InnerLink></sup></th>
<th>Road Cost<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-5-1" id="rule-terrain_improvements-ref-5-1" data-hash-target to="rule-terrain_improvements-5">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-6-1" id="rule-terrain_improvements-ref-6-1" data-hash-target to="rule-terrain_improvements-6">6</InnerLink></sup></th>
</tr>
</thead>
<tbody><tr>
<td>Cavern<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-7-1" id="rule-terrain_improvements-ref-7-1" data-hash-target to="rule-terrain_improvements-7">7</InnerLink></sup></td>
<td>3 days</td>
<td>3 months</td>
<td>8 BP</td>
<td>-</td>
<td>4 BP</td>
</tr>
<tr>
<td>Coastline<sup><InnerLink showBacklink="backlink-rule-terrain_improvements-ref-8-1" id="rule-terrain_improvements-ref-8-1" data-hash-target to="rule-terrain_improvements-8">8</InnerLink></sup></td>
<td>Special</td>
<td>Special</td>
<td>Special</td>
<td>Special</td>
<td>Special</td>
</tr>
<tr>
<td>Desert</td>
<td>2 days</td>
<td>1 month</td>
<td>4 BP</td>
<td>8 BP</td>
<td>4 BP</td>
</tr>
<tr>
<td>Forest</td>
<td>2 days</td>
<td>2 months</td>
<td>4 BP</td>
<td>-</td>
<td>2 BP</td>
</tr>
<tr>
<td>Hills</td>
<td>1 day</td>
<td>1 month</td>
<td>2 BP</td>
<td>4 BP</td>
<td>3 BP</td>
</tr>
<tr>
<td>Jungle</td>
<td>2 days</td>
<td>4 months</td>
<td>12 BP</td>
<td>-</td>
<td>4 BP</td>
</tr>
<tr>
<td>Marsh</td>
<td>3 days</td>
<td>3 months</td>
<td>8 BP</td>
<td>-</td>
<td>4 BP</td>
</tr>
<tr>
<td>Mountains</td>
<td>3 days</td>
<td>4 months</td>
<td>12 BP</td>
<td>-</td>
<td>4 BP</td>
</tr>
<tr>
<td>Plains</td>
<td>1 day</td>
<td>Immediate</td>
<td>1 BP</td>
<td>2 BP</td>
<td>1 BP</td>
</tr>
<tr>
<td>Water</td>
<td>2 days</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody></table></ScrollContainer>
<section data-footnotes>
<h3 id="rule-terrain_improvements-label">Footnotes</h3>
<ol>
<li id="rule-terrain_improvements-1">
<p>Exploration time represents how many days a typical scouting party requires to explore a hex of this type. These times assume a party speed of 30 feet. For parties with different speeds, see <Link to="/rule/movement_ucp">Table 3-3: Exploration Time (1 Hex)</Link>. Treat Cavern as Mountain and Jungle as Marsh for exploration time. Do not adjust the speed for Water hexes; it's assumed that the party is already using a boat or other watercraft to explore. <InnerLink id="backlink-rule-terrain_improvements-ref-1-1" data-hash-target to="rule-terrain_improvements-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-2">
<p>Preparation time represents the months of labor (beginning with the current turn) required to prepare the hex for settlement. Construction of buildings can begin in the current month for settlements built on plains. <InnerLink id="backlink-rule-terrain_improvements-ref-2-1" data-hash-target to="rule-terrain_improvements-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-3">
<p>Preparation cost represents the BP cost to clear a hex of this type in preparation for founding a settlement. <InnerLink id="backlink-rule-terrain_improvements-ref-3-1" data-hash-target to="rule-terrain_improvements-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-4">
<p>Farm cost represents the BP cost to cultivate a hex for farming. A Farm must be within or adjacent to a hex containing a river, lake, swamp, or Canal, or adjacent to at least 2 hexes that already contain Farms. <InnerLink id="backlink-rule-terrain_improvements-ref-4-1" data-hash-target to="rule-terrain_improvements-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-5">
<p>Road cost represents the BP cost to establish a Road that crosses a hex and connects to all adjacent hexes. The cost to build a Road doubles if the hex contains rivers. A kingdom with a Size of 26 or greater can build a Highway (or upgrade a Road to a Highway). <InnerLink id="backlink-rule-terrain_improvements-ref-5-1" data-hash-target to="rule-terrain_improvements-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-6">
<p>If the hex contains any rivers, double the listed cost to reflect the need to build bridges. <InnerLink id="backlink-rule-terrain_improvements-ref-6-1" data-hash-target to="rule-terrain_improvements-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-7">
<p>This is a large system of caves and underground passages and can be found in any terrain type except Marsh. It functions as an additional hex that exists underground, below the surface hex. <InnerLink id="backlink-rule-terrain_improvements-ref-7-1" data-hash-target to="rule-terrain_improvements-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="rule-terrain_improvements-8">
<p>Treat this as the adjacent land terrain type for all purposes. <InnerLink id="backlink-rule-terrain_improvements-ref-8-1" data-hash-target to="rule-terrain_improvements-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _aqueduct = {title: "Aqueduct", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>An Aqueduct brings water from alpine lakes and rivers to lowland cities where water is scarce or insufficient for the local populace. A finished series of Aqueduct hexes must connect to a hill or mountain hex (with a river or lake) on one end and a settlement on the other end; otherwise, you do not gain its benefit.</p>
<p><strong className="hl">Terrain:</strong> One end must be hill or mountain hex; can pass through any type of hex.</p>
<p><strong className="hl">Effect:</strong> Loyalty +1, Stability +1, allows settlement to build water-dependent buildings.</p>
<p><strong className="hl">Cost:</strong> As a Road, except the cost is not doubled for hexes with rivers (see <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>).</p>
</>};
const _bridge = {title: "Bridge", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A Bridge allows your Road hexes to cross rivers.</p>
<p><strong className="hl">Cost:</strong> When you build a Road in a hex that contains a river, the doubled coast of the Road includes the cost of bridges needed to cross the river. You don't need to build a Bridge as a separate unit; it's listed here for reference only.</p>
</>};
const _canal = {title: "Canal", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A Canal is an artificial waterway that allows barge traffic to haul heavy commodities.</p>
<p><strong className="hl">Terrain:</strong> Desert, hill, or plain.</p>
<p><strong className="hl">Effect:</strong> Settlements in a hex with a Canal treat the hex as if it had a river.</p>
<p><strong className="hl">Cost:</strong> Twice the cost of a Road (see <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>).</p>
</>};
const _farm = {title: "Farm", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A Farm helps feed your kingdom.</p>
<p><strong className="hl">Terrain:</strong> Desert (requires canal, coastline, or river), hill, or plain.</p>
<p><strong className="hl">Effect:</strong> Consumption decreases by 2 BP.</p>
<p><strong className="hl">Cost:</strong> See <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>.</p>
</>};
const _fishery = {title: "Fishery", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A Fishery is like a Farm, except it provides abundant fish rather than planted crops.</p>
<p><strong className="hl">Terrain:</strong> Coastline, water, river, or marsh.</p>
<p><strong className="hl">Effect:</strong> Consumption decreases by 1 BP.</p>
<p><strong className="hl">Cost:</strong> 4 BP.</p>
</>};
const _fort = {title: "Fort", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A Fort is a walled encampment for military forces outside a settlement. You can upgrade a Watchtower to a Fort (Unrest decreases when you do so, just as if you had built the Fort from scratch).</p>
<p><strong className="hl">Terrain:</strong> Any land.</p>
<p><strong className="hl">Effect:</strong> Stability +2, Defense +4, increase Consumption by 1 BP; Unrest decreases by 1 when completed. If this hex becomes a settlement, this improvement counts as one Barracks and one Stables building.</p>
<p><strong className="hl">Cost:</strong> 24 BP.</p>
</>};
const _highway = {title: "Highway", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 210</Link></p>
<p>A highway is a paved and well-maintained version of a Road. You may upgrade a Road into a Highway. You must have a kingdom of Size 26 or greater to build a Highway.</p>
<p><strong className="hl">Terrain:</strong> Any hex with a Road.</p>
<p><strong className="hl">Effect:</strong> Economy +1 for every 4 hexes of Highway, Stability +1 for every 8 hexes of Highway; improves <Link to="/rule/overland_movement">overland travel speed</Link>.</p>
<p><strong className="hl">Cost:</strong> Twice the cost of a Road (see <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>).</p>
</>};
const _mine = {title: "Mine", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>A Mine extracts metal, coal, salt, or other useful materials from the earth.</p>
<p><strong className="hl">Terrain:</strong> Cavern, desert, hill, or mountain.</p>
<p><strong className="hl">Effect:</strong> Economy +1, earn +1 BP per turn when collecting taxes during the Income phase.</p>
<p><strong className="hl">Cost:</strong> 6 BP.</p>
</>};
const _quarry = {title: "Quarry", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>A Quarry extracts workable stone from the ground.</p>
<p><strong className="hl">Terrain:</strong> Cavern, hill, or mountain.</p>
<p><strong className="hl">Effect:</strong> Stability +1, earn +1 BP per turn when collecting taxes during the Income phase.</p>
<p><strong className="hl">Cost:</strong> 6 BP.</p>
</>};
const _road = {title: "Road", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>A Road speeds travel through your kingdom and promotes trade. You can upgrade a Road to a Highway.</p>
<p><strong className="hl">Terrain:</strong> Any land.</p>
<p><strong className="hl">Effect:</strong> Economy +1 for every 4 hexes of Road, Stability +1 for every 8 hexes of Road; improves <Link to="/rule/overland_movement">overland travel speed</Link>.</p>
<p><strong className="hl">Cost:</strong> See the Road column of <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>.</p>
</>};
const _sawmill = {title: "Sawmill", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>A sawmill centralizes the activities of loggers and turns trees into lumber for use in building and crafting.</p>
<p><strong className="hl">Terrain:</strong> Forest or jungle.</p>
<p><strong className="hl">Effect:</strong> Stability +1, earn +1 BP per turn when collecting taxes during the Income phase.</p>
<p><strong className="hl">Cost:</strong> 3 BP.</p>
</>};
const _watchtower = {title: "Watchtower", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>A Watchtower flies your flag, is a safe place for your patrols, and establishes your power on the frontier. A Watchtower cannot share a hex with a Fort or another Watchtower.</p>
<p><strong className="hl">Terrain:</strong> Any land.</p>
<p><strong className="hl">Effect:</strong> Stability +1, Defense +2; Unrest decreases by 1 when completed. If this hex becomes a settlement, this improvement counts as a Watchtower building.</p>
<p><strong className="hl">Cost:</strong> 12 BP.</p>
</>};
const _special_terrain = {title: "Special Terrain", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","terrain_improvements"], siblings: ["aqueduct","bridge","canal","farm","fishery","fort","highway","mine","quarry","road","sawmill","watchtower","special_terrain"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>Some hexes contain features or resources that impact a kingdom's Economy, Loyalty, Stability, and other game statistics. These terrain resources are placed by the GM - not by player characters - for you to discover while exploring or adventuring, and may modify terrain improvements or cities.</p>
<p><strong className="hl">Bridge:</strong> The hex contains an existing Bridge over a waterway. If you build a Road in this hex, you do not have to double the cost of the Road.</p>
<p><strong className="hl">Building:</strong> The hex contains an abandoned building in good repair (type determined by the GM). If you establish a settlement at the building's location in the hex, you can incorporate the building into the settlement at no cost (this does not count toward your building limit for that turn).</p>
<p><strong className="hl">Free City:</strong> A Free City is a settlement that is not part of any established kingdom. Claiming a hex with a Free City is an excellent way to add a fully functional settlement to your kingdom. In order to claim a Free City hex peacefully, you must succeed at a Stability check. Failure indicates radicals and upstarts in the settlement and Unrest increases by 1d4.</p>
<p><strong className="hl">Lair:</strong> A Lair is usually a cave or defensible shelter that can be used as a defensive fallback point, a storage location, or even a guardpost or prison. If you claim a hex with a Lair, Stability increases by 1. If you construct a Fort or Watchtower over a Lair, its Defense increases by 1. At the GM's option, a Lair may allow access to an underground cavern hex (see <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>).</p>
<p><strong className="hl">Landmark:</strong> A Landmark is a site of great pride, mystery, and wonder, such as an outcropping in the shape of a human face, a smoking volcano, or a lake with an unusual color or unique properties. The Landmark bolsters your kingdom's morale. If you claim a hex with a Landmark, Loyalty increases by 1. If the hex also has a Road or Highway, Loyalty increases by an additional 1.</p>
<p><strong className="hl">Resource:</strong> A Resource is a ready supply of some kind of valuable commodity that offers a great economic boon to your kingdom, such as exotic lumber, precious metal, gems, rare herbs, incense, silk, ivory, furs, salt, dyes, and the like. If you claim a hex with a Resource, Economy increases by 1. If you construct a Mine, Quarry, or Sawmill in a hex with a Resource, all of its benefits increase by 1. If you construct a Farm or Fishery in a hex with a Resource, those improvements decrease Consumption by an additional 1 BP.</p>
<p><strong className="hl">River:</strong> A River allows <Link to="/rule/overland_movement">water travel</Link> through your kingdom, facilitating trade and allowing irrigation. Economy increases by 1 for every 4 River hexes claimed, and Stability increases by 1 for every 8 such hexes claimed.</p>
<p><strong className="hl">Ruin:</strong> A Ruin is a partially destroyed building. If you claim a hex containing a Ruin and build a settlement at the Ruin's location, you can use the Ruin as the basis of an appropriate type of building (as determined by the GM), reducing the cost of that building by half. Alternatively, you can salvage building materials from the Ruin, reducing the cost of 1 building in that hex by 1d4 BP.</p>
</>};
const _settlements_and_districts = {title: "Settlements and Districts", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 211</Link></p>
<p>The greatest assets of your kingdom are its settlements. Most settlements start as simple villages, and some grow over time into bustling cities. You can use the District Grid [found in the physical book on pg. 226] to create the initial design for your settlement and decide where to place additional buildings as it grows. You may want to photocopy the District Grid so you can build multiple settlements in your kingdom.</p>
<p>The District Grid is divided into 9 large blocks separated by streets. Each block consists of 4 smaller lots separated by alleys. Treat each lot as approximately 750 feet per side, so overall the district takes up about 1 square mile. On each lot you may construct a building, and each building affects your kingdom's Economy, Loyalty, and so on. Descriptions of these buildings, as well as the bonuses they provide once they're added to a settlement, are listed <Link to="/rule/building_descriptions">here</Link>.</p>
<p>Most settlements only have 1 district. If your District Grid is full and you want to add another district (for example, if you run out of available lots in that settlement and want to construct additional buildings), you can create an additional district for that settlement by paying the preparation cost for the settlement's terrain as listed on <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link>). Remember that your kingdom's Control DC is based on the number of districts in your settlement.</p>
<p>The placement of buildings in your district is up to you; you can start in the center of the district and build outward, or start at the edge and build toward the center. Some buildings (such as the Guildhall) take up more than 1 lot on the grid. You can't divide up these larger structures, though you can place them so they cover a street. (Streets do not count as lots.)</p>
<p><strong className="hl">Construction:</strong> Construction is completed in the same turn you spend BP for the building, no matter what its size is. A building's benefits apply to your kingdom immediately. At the GM's discretion, construction magic (such as <Link to="/magic-wondrous/lyre_of_building">lyre of building</Link>, <Link to="/spell/fabricate">fabricate</Link>, or <Link to="/spell/wall_of_stone">wall of stone</Link>) can reduce a single building's BP cost by 2 (minimum 0). This is a one-time reduction per turn, regardless of the amount of magic used.</p>
<p><strong className="hl">Population:</strong> A settlement's population is approximately equal to the number of completed lots within its districts &times; 250. A grid that has all 36 lots filled with buildings has a population of approximately 9,000.</p>
<p><strong className="hl">Base Value:</strong> The base value of a settlement is used to determine what magic items may easily be purchased there. There is a 75% chance that any item of that value or lower can be found for sale in the settlement with little effort. The base value of a new settlement is 0 gp. Certain buildings (such as a Market or Tavern) increase a settlement's base value. A settlement's base value can never increase above the values listed in Table 4-5: Settlement Size and Base Value (except under special circumstances decided by the GM).</p>
<p><strong className="hl">Defense:</strong> A settlement's Defense is used with the <Link to="/rule/mass_combat">mass combat rules</Link>. It otherwise has no effect unless the settlement is attacked. You can increase a settlement's Defense by building certain structures (such as City Walls).</p>
<h3 id="rule-settlements_and_districts-table-4-5-settlement-size-and-base-value">Table 4-5: Settlement Size and Base Value</h3>
<ScrollContainer id="rule-settlements_and_districts--table-0"><table>
<thead>
<tr>
<th>Population</th>
<th>Settlement Size</th>
<th>Value</th>
</tr>
</thead>
<tbody><tr>
<td>Fewer than 21</td>
<td>Thorp</td>
<td>50 gp</td>
</tr>
<tr>
<td>21-60</td>
<td>Hamlet</td>
<td>200 gp</td>
</tr>
<tr>
<td>61-200</td>
<td>Village</td>
<td>500 gp</td>
</tr>
<tr>
<td>201-2,000</td>
<td>Small town</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>2,001-5,000</td>
<td>Large town</td>
<td>2,000 gp</td>
</tr>
<tr>
<td>5,001-10,000</td>
<td>Small city</td>
<td>4,000 gp</td>
</tr>
<tr>
<td>10,001-25,000</td>
<td>Large city</td>
<td>8,000 gp</td>
</tr>
<tr>
<td>More than 25,000</td>
<td>Metropolis</td>
<td>16,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _founding_a_settlement = {title: "Founding a Settlement", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["magic_items_in_settlements"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 212</Link></p>
<p>Before you can start your own kingdom, you first need a base of operations - a fort, village, or other settlement - where you can rest between adventures and where your citizens know they can find you if they need help or want to pay their taxes. Once you have a kingdom, you'll want to create more settlements in order for the kingdom to grow and prosper. To found a settlement, you must perform the following steps. (These steps assume you're building a new settlement from scratch; if you're attempting to incorporate an existing settlement into your kingdom, see Free City under <Link to="/rule/special_terrain">Special Terrain</Link>.)</p>
<p>Step 1-Acquire funds. You'll need money and resources in the form of build points.</p>
<p>Step 2-Explore and clear a hex. You'll need to explore the hex where you want to put the settlement. See the Exploration Time column on <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link> to see how long this takes. Once you have explored the hex, clear it of monsters and dangerous hazards. The time needed to clear it depends on the nature of the threats; this step is usually handled by you completing adventures there to kill or drive out monsters.</p>
<p>Step 3-Claim the hex as yours. Once you have BP and have explored and cleared the hex, you can claim it. Spend 1 BP to do so; this represents setting up very basic infrastructure such as clearing paths, hiring patrols, setting up a tent city, and so on. This establishes the hex as part of your kingdom (or the beginning of your kingdom).</p>
<p>Step 4-Prepare the site for construction. To put a settlement on a claimed hex, you'll need to prepare it. Depending on the site, this process may involve clearing trees, moving boulders, digging sanitation trenches, and so on. See the Preparation Cost column on <Link to="/rule/terrain_improvements">Table 4-6: Terrain and Terrain Improvements</Link> for the BP cost.</p>
<p>If your settlement is in a hex containing a canal, lake, ocean, river, or similar large body of water, you must decide which of your settlement's borders are water (riverbanks, lakeshores, or seashores) or land. Some types of buildings, such as Mills, Piers, and Waterfronts, must be adjacent to water.</p>
<p>A new settlement consists of 1 district, represented by the District Grid map [found in the physical book on pg. 226]. Mark the four borders on the District Grid as land or water, as appropriate.</p>
<p>Step 5-Construct your first buildings. Construct 1 building in your settlement and pay its BP cost. See <Link to="/rule/building_descriptions">Building Descriptions</Link> for building types. If this is your kingdom's first settlement, you should start with an Inn, Shrine, Monastery, or Watchtower. In addition, you may also purchase and construct 1 House, Mansion, Noble Villa, or Tenement. If your first building is an Inn, you must construct a House or Tenement next to it, as building an Inn requires an adjacent House or Tenement.</p>
<p>When you complete these steps, you've founded your settlement! If this is your first settlement, it's considered your kingdom's <Link to="/rule/capital_city">capital city</Link>.</p>
</>};
const _magic_items_in_settlements = {title: "Magic Items in Settlements", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","founding_a_settlement"], siblings: ["magic_items_in_settlements"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 213</Link></p>
<p>In addition to the commonly available items in a settlement as determined by its <Link to="/rule/the_settlement_stat_block">base value</Link>, some buildings increase the likelihood of having specific or unusual magic items available for purchase.</p>
<p><strong className="hl">Gaining Item Slots:</strong> When you construct one of these buildings, mark the appropriate boxes in the Magic Items section of the settlement's District Grid; this indicates that the settlement has gained a slot for an item of that type.</p>
<p><strong className="hl">Filling Item Slots:</strong> In Step 3 of the Upkeep phase, you roll to fill vacant magic item slots in each district. Roll d% once for each district that has an open magic item slot (if the district has more than one, select one randomly). There is a 50% chance (51-100) that an appropriate magic item becomes available in that slot. This item's price cannot exceed the base value for the settlement (reroll if the item's price exceeds the settlement's base value).</p>
<p>Example: Jessica's settlement has a base value of 200 gp. She built an Herbalist last turn, giving the settlement 1 minor potion slot. In the Upkeep phase this turn, she rolls d% and gets a result of 62, meaning she can roll a random minor potion to fill the settlement's empty slot. She rolls on <Link to="/rule/potions">Table 15-12: Potions</Link> and gets a result of 45, indicating a potion of a 1st-level spell. If she had rolled anything more valuable than the 200 gp base value for her settlement, she would have to reroll until she got an acceptable result. Once a magic item is rolled for a settlement in this way, it remains on the market until someone purchases it.</p>
<p><strong className="hl">Emptying Item Slots:</strong> If you are unsatisfied with a magic item generated by a settlement, there are three ways to purge an undesirable item and make its slot vacant. The first is to purchase it with your own gp, which makes it your personal property and means you may do with it what you please (use it, sell it at half price for gold, deposit it in the kingdom's Treasury during the next Income phase, use it as a reward for a local general, and so on).</p>
<p>The second method is to manipulate your kingdom's economy to encourage an NPC to purchase the item (such as a random adventurer passing through the settlement). During Step 3 of the Income phase, you may attempt one Economy check for each filled slot you want to empty. For every such check after the first one in a turn, your Economy decreases by 1, since these manipulations are harmful to your kingdom's economy and typically only serve to get rid of an item you consider undesirable. If the check fails, nothing happens. If the check succeeds, erase the item from that slot; you may attempt to fill the empty slot as normal in the next Upkeep phase. You do not gain any gp or BP from this sale; the money goes to the building's owner, who uses it to acquire or craft the next item.</p>
<p>The third way is to spend BP (1 BP = 2,000 gp) to purchase the item. If you take the item for your own use, this counts as withdrawing BP from the Treasury for your personal use (see <Link to="/rule/kingdom_income_phase">Make Withdrawals from the Treasury</Link>). If you use the item in a way that doesn't directly benefit you or the other PCs (such as giving it to a hero of your army or donating it to a settlement as a religious or historical artifact), then purchasing it is essentially like other kingdom expenditures and does not increase Unrest or decrease Loyalty.</p>
</>};
const _claiming_water_and_islands = {title: "Claiming Water and Islands", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 213</Link></p>
<p>When you claim a hex that contains part of an ocean or lake, your claim includes the water portion of that hex. In effect, your kingdom automatically controls a small portion of the waters adjacent to its coastline. Because any new hex you claim must be adjacent to an existing hex in your kingdom, if you want to claim land beyond that water (such as an island), you must first explore and claim the intervening deep water hexes. Your exploration only applies to the water's surface - you are searching for uncharted islands, dangerous reefs, and so on. The GM may want to treat the underwater portion of a hex as a separate hex, much like a network of large caves under a hex may count as its own hex, allowing a village of merfolk or sahuagin to thrive in your kingdom without your knowledge.</p>
</>};
const _buildings_in_the_kingdom = {title: "Buildings in the Kingdom", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building"], siblings: ["kingdom_building_overview","kingdom_terminology","kingdom_building_quick_reference","founding_a_kingdom","leadership_roles","who_rolls_the_kingdom_check","build_points","kingdom_turn_sequence","edicts","losing_hexes","terrain_improvements","settlements_and_districts","founding_a_settlement","claiming_water_and_islands","buildings_in_the_kingdom","events","gaining_experience_for_leadership"], subtopics: ["building_descriptions"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 213</Link></p>
<p>You improve settlements by constructing buildings, which provide bonuses to the kingdom in general and the settlement in particular. Pgs. 224 and 225 [of the physical book] present icons for these buildings, and the building descriptions and effects begin below. Some buildings also intersect with the mass combat rules, notably with <Link to="/rule/battlefield_conditions">fortifications</Link> and <Link to="/rule/reserve_army">reserve armies</Link>.</p>
<p><strong className="hl">Demolition:</strong> If a lot has a building, you can clear it for new construction. Doing so costs 1 BP. You may construct a building on a lot the same turn you demolish the old building there. You do not regain BP for a demolished building (but see Rebuilding, below).</p>
<p><strong className="hl">Destroyed Lots:</strong> If an event or a pillaging army destroys 1 or more lots, the devastation causes Unrest to increase by 1 per lot destroyed.</p>
<p><strong className="hl">Rebuilding:</strong> If you rebuild the same type of building on a destroyed lot, the cost is halved, as you can reuse some of the materials for the same purpose. If you rebuild a different type of building on that lot, reduce the cost of the new building by 1/4 the cost of the old building (minimum 1 BP). If you build smaller buildings on top of a site that held a multi-lot building, split the discount evenly over the new buildings. For example, if you demolish an Academy and construct a Mansion and a Luxury Store on top of those lots, each building gets a 6 BP discount (1/4 of 52 BP is 13, divided evenly between the two).</p>
</>};
const _building_descriptions = {title: "Building Descriptions", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom"], siblings: ["building_descriptions"], subtopics: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 214</Link></p>
<p>Buildings are described in the following format.</p>
<p><strong className="hl">Building Name:</strong> The type of buildings contained in this lot. In most cases, each lot represents numerous buildings of that type, rather than a single edifice.<br/><strong className="hl">Cost:</strong> The cost in BP to construct the building.<br/><strong className="hl">Lots:</strong> How many lots the building fills.<br/><strong className="hl">Kingdom:</strong> Building modifiers to Economy, Loyalty, and Stability stack, affect your entire kingdom, and are ongoing from turn to turn. Modifiers to Unrest occur once when the building is completed. This category also lists any bonuses to Fame (see <Link to="/rule/fame_and_infamy">Fame and Infamy</Link>) from having the building.<br/><strong className="hl">Discount:</strong> Some buildings halve the cost of constructing a related type of building in the same settlement. This cost reduction applies only to the first constructed building of the types listed in this line. For example, an Academy halves the cost of your next Library in that settlement; if you build a second Library in that settlement, you pay the normal cost for it. If 2 buildings give the same discount, only one discount applies per new building, but you may construct 2 buildings at the discounted cost. For example, Market and Theater both halve the cost of an Inn; if your settlement has a Market and a Theater, you may construct 2 Inns at half cost (the Market discounts one, and the Theater discounts the other).<br/><strong className="hl">Limit:</strong> This lists limitations on the number of buildings of this type, special requirements for adjacent buildings, or prohibitions against certain buildings being adjacent.</p>
<p>For most buildings, you can construct as many of them as you want in a settlement, but some are limited in the number that can be built per settlement or district. For example, you can only construct 1 Arena per settlement.</p>
<p>Some buildings require that you construct them adjacent to at least 1 or 2 of a specific kind of building or feature of the settlement. For example, a Shop or Tavern must be adjacent to a House or Mansion. The required adjacent building can only count toward 1 building that requires it. For example, if you have a House and a Shop, that House can't be used to meet the requirement for another Shop or a Tavern; you have to construct a new House and use it to meet the requirement of the new Shop or Tavern.</p>
<p>For example, you can't construct a Tannery next to a House, Mansion, Noble Villa, or Tenement. If you want to use a lot for this type of building, you must demolish all prohibited adjacent structures first (see <Link to="/rule/buildings_in_the_kingdom">Demolition</Link>).</p>
<p>If you get overzealous in constructing a particular type of building in a settlement, the GM should feel free to add events to discourage this practice. For example, a settlement with too many Dumps is prone to otyugh and wererat attacks, and a settlement with too many Graveyards tends to have frequent undead attacks. This should not occur, however, if you build too many Houses, Parks, Tenements, or Waterways.</p>
<p><strong className="hl">Upgrade To/From:</strong> Some buildings can be converted into a more advanced form of the existing building, such as converting a Shrine into a Temple. To upgrade a building, pay the BP cost difference between the current building and the new building. Remove the modifiers from the old building and apply the modifiers from the new building. Upgrading counts as constructing a building for the purpose of the maximum number of buildings you can construct on your turn. You can't upgrade a building to a larger one if there isn't space in the District Grid for the building's new size.<br/><strong className="hl">Special:</strong> This lists any other effect the building has, such as increasing Defense, the settlement's <Link to="/rule/the_settlement_stat_block">base value</Link>, or the output of a nearby Mine.<br/><strong className="hl">Magic Items:</strong> This lists any magic item slot the building creates, which may be filled in the Upkeep phase (see <Link to="/rule/magic_items_in_settlements">Magic Items in Settlements</Link>). If a building lists multiple options within a category (such as -1 minor potion or wondrous item), it has an equal chance for each option.<br/><strong className="hl">Settlement:</strong> This lists <Link to="/rule/settlement_modifiers">settlement modifiers</Link> that affect specific skills within the settlement. These modifiers are ongoing from turn to turn, but apply only to skill checks within that settlement (not other settlements in the hex or anywhere else in your kingdom). Note that the <em>GameMastery Guide</em> also uses a settlement statistic called Economy; to avoid confusion with the Economy kingdom score, this section renames the Economy settlement statistic "Productivity."</p>
<ul>
<li><Link to="/rule/kbuildings1">Group 1:</Link> <em>Academy, Alchemist, Arena, Bank, Bardic College, Barracks, Black Market, Brewery, Bridge, Bureau</em></li>
<li><Link to="/rule/kbuildings2">Group 2:</Link> <em>Caster's Tower, Castle, Cathedral, Cistern, City Wall, Dance Hall, Dump, Everflowing Spring, Exotic Artisan</em></li>
<li><Link to="/rule/kbuildings3">Group 3:</Link> <em>Foreign Quarter, Foundry, Garrison, Granery, Graveyard, Guildhall, Herbalist, Hospital, House, Inn</em></li>
<li><Link to="/rule/kbuildings4">Group 4:</Link> <em>Jail, Library, Luxury Store, Magic Shop, Magical Academy, Magical Streetlamps, Mansion, Market, Menagerie, Military Academy</em></li>
<li><Link to="/rule/kbuildings5">Group 5:</Link> <em>Mill, Mint, Moat, Monastery, Monument, Museum, Noble Villa, Observatory, Orphanage, Palace</em></li>
<li><Link to="/rule/kbuildings6">Group 6:</Link> <em>Park, Paved Streets, Pier, Sewer System, Shop, Shrine, Smithy, Stable, Stockyard, Tannery</em></li>
<li><Link to="/rule/kbuildings7">Group 7:</Link> <em>Tavern, Temple, Tenement, Theater, Town Hall, Trade Shop, University, Watchtower, Waterfront, Waterway</em></li>
</ul>
</>};
const _kbuildings1 = {title: "Buildings: Academy through Bureau", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 215</Link></p>
<h3 id="rule-kbuildings1-academy-52-bp-2-lots">Academy (52 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Loyalty +2<br/><strong>Discount</strong> Caster's Tower, Library, Magic Shop<br/><strong>Upgrade From</strong> Library; <strong>Upgrade To</strong> University<br/><strong>Magic Items</strong> 3 minor scrolls or wondrous items, 2 medium scrolls or wondrous items<br/><strong>Settlement</strong> Lore +2, Productivity +1, Society +2; increase Lore bonus by 2 for questions relating to one Knowledge or Profession skill</p>
<p>An institution of higher learning.</p>
<h3 id="rule-kbuildings1-alchemist-18-bp-1-lot">Alchemist (18 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Special</strong> Base value +1,000 gp<br/><strong>Magic Items</strong> 1 minor potion or wondrous item</p>
<p>The laboratory and home of a crafter of poisons, potions, or alchemical items.</p>
<h3 id="rule-kbuildings1-arena-40-bp-4-lots">Arena (40 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Stability +4; Fame +1<br/><strong>Discount</strong> Brothel, Garrison, Inn, Stable, Theater<br/><strong>Limit</strong> 1 per settlement<br/><strong>Upgrade From</strong> Theater<br/><strong>Settlement</strong> Crime +1</p>
<p>A large public structure for competitions and team sports.</p>
<h3 id="rule-kbuildings1-bank-28-bp-1-lot">Bank (28 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +4<br/><strong>Special</strong> Base value +2,000 gp</p>
<p>A secure building for storing valuables and granting loans.</p>
<h3 id="rule-kbuildings1-bardic-college-40-bp-2-lots">Bardic College (40 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +3, Stability +1; Fame +1<br/><strong>Discount</strong> Library, Museum, Theater<br/><strong>Magic Items</strong> 2 minor scrolls or wondrous items</p>
<p>A center for artistic learning. Education in a Bardic College also includes research into a wide-range of historical topics.</p>
<h3 id="rule-kbuildings1-barracks-6-bp-1-lot">Barracks (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Unrest -1<br/><strong>Upgrade To</strong> Garrison<br/><strong>Special</strong> Defense +2<br/><strong>Settlement</strong> Law +1</p>
<p>A building to house conscripts, guards, militia, soldiers, or similar military forces.</p>
<h3 id="rule-kbuildings1-black-market-50-bp-1-lot">Black Market (50 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +2, Stability +1, Unrest +1<br/><strong>Discount</strong> Brothel<br/><strong>Limit</strong> Adjacent to 2 Houses<br/><strong>Special</strong> Base value +2,000 gp<br/><strong>Magic Items</strong> 2 minor items, 1 medium item, 1 major item<br/><strong>Settlement</strong> Corruption +2, Crime +2</p>
<p>A number of shops with secret and usually illegal wares.</p>
<h3 id="rule-kbuildings1-brewery-6-bp-1-lot">Brewery (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Stability +1</p>
<p>A building for beer brewing, winemaking, or some similar use.</p>
<h3 id="rule-kbuildings1-bridge-6-bp-1-lot">Bridge (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1<br/><strong>Special</strong> Shares the space with a river or Waterway lot</p>
<p>Allows travel across a river or Waterway, easing transportation.</p>
<h3 id="rule-kbuildings1-bureau-10-bp-2-lots">Bureau (10 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty -1, Stability +1<br/><strong>Settlement</strong> Corruption +1, Law +1</p>
<p>A large warren of offices for clerks and record-keepers working for a guild or government.</p>
</>};
const _kbuildings2 = {title: "Buildings: Caster's Tower through Foundry", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 216</Link></p>
<h3 id="rule-kbuildings2-casters-tower-30-bp-1-lot">Caster's Tower (30 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1<br/><strong>Magic Items</strong> 3 minor items, 2 medium items</p>
<p>The home and laboratory for a spellcaster.</p>
<h3 id="rule-kbuildings2-castle-54-bp-4-lots">Castle (54 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Loyalty +2, Stability +2, Unrest -4; Fame +1<br/><strong>Discount</strong> Noble Villa, Town Hall<br/><strong>Limit</strong> 1 per settlement<br/><strong>Special</strong> Defense +8</p>
<p>The home of the settlement's leader or the heart of its defenses.</p>
<h3 id="rule-kbuildings2-cathedral-58-bp-4-lots">Cathedral (58 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Loyalty +4, Stability +4, Unrest -4; Fame +1<br/><strong>Discount</strong> Academy, Temple<br/><strong>Limit</strong> 1 per settlement<br/><strong>Special</strong> Halves Consumption increase for Promotion edicts<br/><strong>Magic Items</strong> 3 minor potions or wondrous items, 2 medium potions or wondrous items<br/><strong>Settlement</strong> Law +2</p>
<p>The focal point of the settlement's spiritual leadership.</p>
<h3 id="rule-kbuildings2-cistern-6-bp-1-lot">Cistern (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1<br/><strong>Limit</strong> Cannot be adjacent to a Dump, Graveyard, Stable, Stockyard, or Tannery<br/><strong>Special</strong> Can share lot with another building Contains a safe supply of fresh water for the settlement.</p>
<h3 id="rule-kbuildings2-city-wall-2-bp">City Wall (2 BP)</h3>
<p><strong>Kingdom</strong> Unrest -2 (once per settlement)<br/><strong>Limit</strong> Land district border<br/><strong>Special</strong> Defense +1</p>
<p>A fortification of one side of a district with a sturdy wall. The GM may allow for cliffs and other natural features to function as a City Wall for one or more sides of a district. You may construct gates through your own city wall at no cost.</p>
<h3 id="rule-kbuildings2-dance-hall-4-bp-1-lot">Dance Hall (4 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +2, Unrest +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Settlement</strong> Corruption +1, Crime +1</p>
<p>An establishment for dancing, drinking, carousing, and holding celebrations.</p>
<h3 id="rule-kbuildings2-dump-4-bp-1-lot">Dump (4 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1<br/><strong>Limit</strong> Cannot be adjacent to House, Mansion, or Noble Villa</p>
<p>A centralized place to dispose of refuse.</p>
<h3 id="rule-kbuildings2-everflowing-spring-5-bp">Everflowing Spring (5 BP)</h3>
<p><strong>Limit</strong> Settlement must have a building that can create medium magic items<br/><strong>Special</strong> Can share lot with Castle, Cathedral, Market, Monument, Park, or Town Hall</p>
<p>A fountain built around several decanters of endless water that provides an inexhaustible supply of fresh water.</p>
<h3 id="rule-kbuildings2-exotic-artisan-10-bp-1-lot">Exotic Artisan (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Magic Items</strong> 1 minor ring, wand, or wondrous item</p>
<p>The shop and home of a jeweler, tinker, glassblower, or the like.</p>
</>};
const _kbuildings3 = {title: "Buildings: Foreign Quarter through Inn", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 216</Link></p>
<h3 id="rule-kbuildings3-foreign-quarter-30-bp-4-lots">Foreign Quarter (30 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +3, Stability -1<br/><strong>Special</strong> Increase the value of trade routes (see <Link to="/rule/trade_edicts">Trade Edicts</Link> by 5% (maximum 100%)<br/><strong>Settlement</strong> Crime +1, Lore +1, Society +2</p>
<p>An area with many foreigners, as well as shops and services catering to them.</p>
<h3 id="rule-kbuildings3-foundry-16-bp-2-lots">Foundry (16 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1, Unrest +1<br/><strong>Discount</strong> Smithy<br/><strong>Limit</strong> Adjacent to water district border<br/><strong>Special</strong> Increase the Economy and BP earned per turn by 1 for 1 Mine connected to this settlement by a river or Road<br/><strong>Settlement</strong> Productivity +1</p>
<p>Processes ore and refines it into finished metal.</p>
<h3 id="rule-kbuildings3-garrison-28-bp-2-lots">Garrison (28 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Loyalty +2, Stability +2, Unrest -2<br/><strong>Discount</strong> City Wall, Granary, Jail<br/><strong>Upgrade From</strong> Barracks</p>
<p>A large building to house armies, train guards, and recruit militia.</p>
<h3 id="rule-kbuildings3-granary-12-bp-1-lot">Granary (12 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Stability +1<br/><strong>Special</strong> If Farms reduce Consumption below 0, store up to 5 BP of excess production for use on a later turn when Consumption exceeds the Treasury</p>
<p>A place to store grain and food.</p>
<h3 id="rule-kbuildings3-graveyard-4-bp-1-lot">Graveyard (4 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1</p>
<p>A plot of land to honor and bury the dead.</p>
<h3 id="rule-kbuildings3-guildhall-34-bp-2-lots">Guildhall (34 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Loyalty +2<br/><strong>Discount</strong> Pier, Stable, Trade Shop<br/><strong>Upgrade From</strong> Trade Shop<br/><strong>Special</strong> Base value +1,000 gp<br/><strong>Settlement</strong> Law +1, Productivity +2</p>
<p>The headquarters for a guild or similar organization.</p>
<h3 id="rule-kbuildings3-herbalist-10-bp-1-lot">Herbalist (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Stability +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Magic Items</strong> 1 minor potion or wondrous item</p>
<p>The workshop and home of a gardener, healer, or poisoner.</p>
<h3 id="rule-kbuildings3-hospital-30-bp-2-lots">Hospital (30 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Stability +2<br/><strong>Special</strong> Increase Stability by 2 during plague events<br/><strong>Settlement</strong> Lore +1, Productivity +2</p>
<p>A building devoted to healing the sick.</p>
<h3 id="rule-kbuildings3-house-3-bp-1-lot">House (3 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Unrest -1<br/><strong>Upgrade From</strong> Tenement<br/><strong>Special</strong> The first House you build during the Improvement phase does not count against the total number of buildings you can build during the phase</p>
<p>A number of mid-sized houses for citizens.</p>
<h3 id="rule-kbuildings3-inn-10-bp-1-lot">Inn (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Special</strong> Base value +500 gp<br/><strong>Settlement</strong> Society +1</p>
<p>A place for visitors to rest.</p>
</>};
const _kbuildings4 = {title: "Buildings: Jail through Military Academy", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 217</Link></p>
<h3 id="rule-kbuildings4-jail-14-bp-1-lot">Jail (14 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +2, Stability +2, Unrest -2<br/><strong>Settlement</strong> Crime -1, Law +1</p>
<p>A fortified structure for confining criminals or dangerous monsters.</p>
<h3 id="rule-kbuildings4-library-6-bp-1-lot">Library (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1<br/><strong>Upgrade To</strong> Academy<br/><strong>Settlement</strong> Lore +1</p>
<p>A large building containing an archive of books.</p>
<h3 id="rule-kbuildings4-luxury-store-28-bp-1-lot">Luxury Store (28 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Upgrade To</strong> Magic Shop; <strong>Upgrade From</strong> Shop<br/><strong>Special</strong> Base value +2,000 gp<br/><strong>Magic Items</strong> 2 minor rings, wands, or wondrous items</p>
<p>A shop that specializes in expensive comforts for the wealthy.</p>
<h3 id="rule-kbuildings4-magic-shop-68-bp-1-lot">Magic Shop (68 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1<br/><strong>Limit</strong> Adjacent to 2 Houses<br/><strong>Upgrade From</strong> Luxury Store<br/><strong>Special</strong> Base value +2,000 gp<br/><strong>Magic Items</strong> 4 minor wondrous items, 2 medium wondrous items, 1 major wondrous item</p>
<p>A shop that specializes in magic items and spells.</p>
<h3 id="rule-kbuildings4-magical-academy-58-bp-2-lots">Magical Academy (58 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2; Fame +1<br/><strong>Discount</strong> Caster's Tower, Library, Magic Shop<br/><strong>Magic Items</strong> 3 minor potions, scrolls, or wondrous items; 1 medium potion, scroll, or wondrous item<br/><strong>Settlement</strong> Lore +2, Society +1; increase Lore bonus by 2 for questions relating to Knowledge (arcana)</p>
<p>An institution for training students in spellcasting, magic item crafting, and various arcane arts.</p>
<h3 id="rule-kbuildings4-magical-streetlamps-5-bp">Magical Streetlamps (5 BP)</h3>
<p><strong>Limit</strong> Settlement must have a Cathedral, Magic Shop, Magical Academy, or Temple<br/><strong>Special</strong> Can share a lot with any building or improvement<br/><strong>Settlement</strong> Crime -1</p>
<p><Link to="/spell/continual_flame">Continual flame</Link> lamps that illuminate the lot.</p>
<h3 id="rule-kbuildings4-mansion-10-bp-1-lot">Mansion (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1<br/><strong>Upgrade To</strong> Noble Villa<br/><strong>Settlement</strong> Law +1, Society +1</p>
<p>A single huge manor housing a rich family and its servants.</p>
<h3 id="rule-kbuildings4-market-48-bp-2-lots">Market (48 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Stability +2<br/><strong>Discount</strong> Black Market, Inn, Shop<br/><strong>Limit</strong> Adjacent to 2 Houses<br/><strong>Upgrade From</strong> Shop<br/><strong>Special</strong> Base value +2,000 gp<br/><strong>Magic Items</strong> 2 minor wondrous items</p>
<p>An open area for traveling merchants and bargain hunters.</p>
<h3 id="rule-kbuildings4-menagerie-16-bp-4-lots">Menagerie (16 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty (special); Fame +1<br/><strong>Special</strong> Increase Loyalty by 1/4 the CR of the highest-CR creature in the Menagerie</p>
<p>A large park stocked with exotic creatures for public viewing.</p>
<h3 id="rule-kbuildings4-military-academy-36-bp-2-lots">Military Academy (36 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Loyalty +2, Stability +1; Fame +1<br/><strong>Discount</strong> Barracks<br/><strong>Limit</strong> 1 per settlement<br/><strong>Special</strong> Armies and commanders recruited at the settlement gain one bonus tactic (see <Link to="/rule/army_tactics">Army Tactics</Link>)<br/><strong>Magic Items</strong> 1 minor armor, shield, or weapon; 1 medium armor, shield, or weapon<br/><strong>Settlement</strong> Law +1, Lore +1</p>
<p>An institution dedicated to the study of war and the training of elite soldiers and officers.</p>
</>};
const _kbuildings5 = {title: "Buildings: Mill through Palace", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 218</Link></p>
<h3 id="rule-kbuildings5-mill-6-bp-1-lot">Mill (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1<br/><strong>Limit</strong> Adjacent to water district border<br/><strong>Special</strong> With GM approval, you can construct a windmill at the same cost without the water district border requirement<br/><strong>Settlement</strong> Productivity +1</p>
<p>A building used to cut lumber or grind grain.</p>
<h3 id="rule-kbuildings5-mint-30-bp-1-lot">Mint (30 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +3, Loyalty +3, Stability +1; Fame +1</p>
<p>A secure building where the kingdom's coinage is minted and standard weights and measures are kept.</p>
<h3 id="rule-kbuildings5-moat-2-bp">Moat (2 BP)</h3>
<p><strong>Kingdom</strong> Unrest -1 (once per settlement)<br/><strong>Limit</strong> Land district border<br/><strong>Special</strong> Defense +1; cannot be damaged by siege engines</p>
<p>A fortification of one side of a district with an open or water-filled ditch, often backed by a low dike or embankment. The GM may allow a river or similar natural feature to function as a moat for one or more sides of a district.</p>
<h3 id="rule-kbuildings5-monastery-16-bp-2-lots">Monastery (16 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Stability +1<br/><strong>Settlement</strong> Law +1, Lore +1</p>
<p>A cloister for meditation, study, and the pursuit of various other scholarly paths.</p>
<h3 id="rule-kbuildings5-monument-6-bp-1-lot">Monument (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Unrest -1</p>
<p>A local memorial such as a bell tower, a statue of a settlement founder, a large tomb, or a public display of art.</p>
<h3 id="rule-kbuildings5-museum-30-bp-2-lots">Museum (30 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1; Fame +1<br/><strong>Settlement</strong> Lore +2, Society +1; increase Lore bonus by 2 for questions relating to Knowledge (history); apply Lore bonus on Appraise checks regarding art objects</p>
<p>A place to display art and artifacts both modern and historical. The GM may allow the kingdom leaders to display a valuable item (such as a magic item or bejeweled statue) in the museum, increasing Fame during this display by 1 for every 10,000 gp of the item's price (maximum +5 Fame), and by an additional 1 if the item is significant to the kingdom's history.</p>
<h3 id="rule-kbuildings5-noble-villa-24-bp-2-lot">Noble Villa (24 BP, 2 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1, Stability +1; Fame +1<br/><strong>Discount</strong> Exotic Artisan, Luxury Store, Mansion<br/><strong>Upgrade From</strong> Mansion<br/><strong>Settlement</strong> Society +1</p>
<p>A sprawling manor with luxurious grounds that houses a noble's family and staff.</p>
<h3 id="rule-kbuildings5-observatory-12-bp-1-lot">Observatory (12 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1<br/><strong>Magic Items</strong> 1 minor scroll or wondrous item<br/><strong>Settlement</strong> Lore +2</p>
<p>A dome or tower with optical devices for viewing the heavens.</p>
<h3 id="rule-kbuildings5-orphanage-6-bp-1-lot">Orphanage (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1, Unrest -1</p>
<p>A place for housing and taking care of large numbers of orphans.</p>
<h3 id="rule-kbuildings5-palace-108-bp-4-lots">Palace (108 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Loyalty +6, Stability +2; Fame +1<br/><strong>Discount</strong> Mansion, Mint, Noble Villa<br/><strong>Special</strong> Base value +1,000 gp; you may make two <Link to="/rule/special_edicts">special edicts per turn</Link>, but take a -2 penalty on kingdom checks associated with each special edict<br/><strong>Settlement</strong> Law +2</p>
<p>A grand edifice and walled grounds demonstrating one's wealth, power, and authority to the world.</p>
</>};
const _kbuildings6 = {title: "Buildings: Park through Tannery", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 218</Link></p>
<h3 id="rule-kbuildings6-park-4-bp-1-lot">Park (4 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Unrest -1</p>
<p>A plot of land set aside for its serene beauty.</p>
<h3 id="rule-kbuildings6-paved-streets-24-bp">Paved Streets (24 BP)</h3>
<p><strong>Kingdom</strong> Economy +2, Stability +1<br/><strong>Limit</strong> 1 per district<br/><strong>Settlement</strong> Productivity +2</p>
<p>Brick or stone pavement that speeds transportation.</p>
<h3 id="rule-kbuildings6-pier-16-bp-1-lot">Pier (16 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1<br/><strong>Limit</strong> Adjacent to water district border<br/><strong>Upgrade To</strong> Waterfront<br/><strong>Special</strong> Base value +1,000 gp<br/><strong>Settlement</strong> Crime +1</p>
<p>Warehouses and workshops for docking ships and handling cargo and passengers.</p>
<h3 id="rule-kbuildings6-sewer-system-24-bp">Sewer System (24 BP)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Stability +2<br/><strong>Discount</strong> Cistern, Dump<br/><strong>Limit</strong> 1 per district<br/><strong>Settlement</strong> Crime +1, Productivity +1</p>
<p>An underground sanitation system that keeps the settlement clean, though it may become home to criminals and monsters.</p>
<h3 id="rule-kbuildings6-shop-8-bp-1-lot">Shop (8 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1<br/><strong>Limit</strong> Adjacent to 1 House or Mansion<br/><strong>Upgrade To</strong> Luxury Store, Market<br/><strong>Special</strong> Base value +500 gp<br/><strong>Settlement</strong> Productivity +1</p>
<p>A general store.</p>
<h3 id="rule-kbuildings6-shrine-8-bp-1-lot">Shrine (8 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Loyalty +1, Unrest -1<br/><strong>Upgrade To</strong> Temple<br/><strong>Magic Items</strong> 1 minor potion, scroll, or wondrous item</p>
<p>A shrine, idol, sacred grove, or similar holy site designed for worship by pious individuals.</p>
<h3 id="rule-kbuildings6-smithy-6-bp-1-lot">Smithy (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1</p>
<p>The workshop of an armorsmith, blacksmith, weaponsmith, or other craftsman who works with metal.</p>
<h3 id="rule-kbuildings6-stable-10-bp-1-lot">Stable (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1<br/><strong>Limit</strong> Adjacent to 1 House, Mansion, or Noble Villa<br/><strong>Special</strong> Base value +500 gp</p>
<p>A structure for housing or selling horses and other mounts.</p>
<h3 id="rule-kbuildings6-stockyard-20-bp-4-lots">Stockyard (20 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability -1<br/><strong>Discount</strong> Stable, Tannery<br/><strong>Special</strong> Farms in this hex or adjacent hexes reduce Consumption by 3 instead of 2<br/><strong>Settlement</strong> Productivity +1</p>
<p>Barns and pens that store herd animals and prepare them for nearby slaughterhouses.</p>
<h3 id="rule-kbuildings6-tannery-6-bp-1-lot">Tannery (6 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1<br/><strong>Limit</strong> Cannot be adjacent to House, Mansion, Noble Villa, or Tenement<br/><strong>Settlement</strong> Society -1</p>
<p>A structure that prepares hides and leather.</p>
</>};
const _kbuildings7 = {title: "Buildings: Tavern through Waterway", parent_topics: ["gm_specific_campaigns","kingdoms_and_war","kingdom_building","buildings_in_the_kingdom","building_descriptions"], siblings: ["kbuildings1","kbuildings2","kbuildings3","kbuildings4","kbuildings5","kbuildings6","kbuildings7"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_campaign">Ultimate Campaign pg. 219</Link></p>
<h3 id="rule-kbuildings7-tavern-12-bp-1-lot">Tavern (12 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1<br/><strong>Limit</strong> Adjacent to 1 House or Mansion<br/><strong>Special</strong> Base value +500 gp<br/><strong>Settlement</strong> Corruption +1</p>
<p>An eating or drinking establishment.</p>
<h3 id="rule-kbuildings7-temple-32-bp-2-lots">Temple (32 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Loyalty +2, Stability +2, Unrest -2<br/><strong>Discount</strong> Graveyard, Monument, Shrine<br/><strong>Upgrade From</strong> Shrine<br/><strong>Magic Items</strong> 2 minor items</p>
<p>A large place of worship dedicated to a deity.</p>
<h3 id="rule-kbuildings7-tenement-1-bp-1-lot">Tenement (1 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Unrest +2<br/><strong>Upgrade To</strong> House<br/><strong>Special</strong> Counts as House for buildings that must be adjacent to a House</p>
<p>A staggering number of low-rent housing units.</p>
<h3 id="rule-kbuildings7-theater-24-bp-2-lots">Theater (24 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +2, Stability +2<br/><strong>Discount</strong> Brothel, Exotic Artisan, Inn, Park, Tavern<br/><strong>Upgrade To</strong> Arena</p>
<p>A venue for entertainments such as plays, operas, and concerts.</p>
<h3 id="rule-kbuildings7-town-hall-22-bp-2-lots">Town Hall (22 BP, 2 Lots)</h3>
<p><strong>Kingdom</strong> Economy +1, Loyalty +1, Stability +1<br/><strong>Discount</strong> Barracks, Cistern, Dump, Jail, Watchtower<br/><strong>Settlement</strong> Law +1</p>
<p>A public venue for town meetings, repository for town records, and offices for minor bureaucrats.</p>
<h3 id="rule-kbuildings7-trade-shop-10-bp-1-lot">Trade Shop (10 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Economy +1, Stability +1<br/><strong>Limit</strong> Adjacent to 1 House<br/><strong>Upgrade To</strong> Guildhall<br/><strong>Special</strong> Base value +500 gp<br/><strong>Settlement</strong> Productivity +1</p>
<p>A shop front for a tradesperson, such as a baker, butcher, candle maker, cobbler, rope maker, or wainwright.</p>
<h3 id="rule-kbuildings7-university-78-bp-4-lots">University (78 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +3, Loyalty +3; Fame +1<br/><strong>Discount</strong> Academy, Bardic College, Library, Magical Academy, Military Academy, Museum<br/><strong>Upgrade From</strong> Academy<br/><strong>Magic Items</strong> 4 minor scrolls or wondrous items, 2 medium scrolls or wondrous items<br/><strong>Settlement</strong> Lore +4, Society +3; increase Lore bonus by 4 for questions relating to one Knowledge or Profession skill</p>
<p>An institution of higher learning, focusing mainly on mundane subjects but dabbling in magical theory.</p>
<h3 id="rule-kbuildings7-watchtower-12-bp-1-lot">Watchtower (12 BP, 1 Lot)</h3>
<p><strong>Kingdom</strong> Stability +1, Unrest -1<br/><strong>Special</strong> Defense +2</p>
<p>A tall structure that serves as a guard post.</p>
<h3 id="rule-kbuildings7-watergate-2-bp">Watergate (2 BP)</h3>
<p><strong>Special</strong> Shares City Wall</p>
<p>A gate in a City Wall that allows water (such as a river, Aqueduct, or Waterway) to enter the settlement. A Watergate has underwater defenses to block unwanted access. If you construct a Watergate when you construct a City Wall, the Watergate does not count toward the limit of the number of buildings you can construct per turn.</p>
<h3 id="rule-kbuildings7-waterfront-90-bp-4-lots">Waterfront (90 BP, 4 Lots)</h3>
<p><strong>Kingdom</strong> Economy +4<br/><strong>Discount</strong> Black Market, Guildhall, Market, Pier<br/><strong>Limit</strong> Adjacent to water district border, 1 per settlement<br/><strong>Upgrade From</strong> Pier<br/><strong>Special</strong> Base value +4,000 gp; halves Loyalty penalty for Taxation edicts<br/><strong>Magic Items</strong> 2 minor wondrous items, 1 medium wondrous item, 1 major wondrous item<br/><strong>Settlement</strong> Productivity +2</p>
<p>A port for waterborne arrival and departure, with facilities for shipping and shipbuilding.</p>
<h3 id="rule-kbuildings7-waterway-3-bp-1-2-lots">Waterway (3 BP, 1-2 Lots)</h3>
<p><strong>Special</strong> Counts as water district border for adjacent buildings</p>
<p>A river or canal occupying part of the District Grid. At the GM's option, a natural Waterway may already exist on the grid, requiring no action or BP to build. If you construct a City Wall that touches or crosses the Waterway, you must also build Watergates on the same turn.</p>
</>};
export default {kingdoms_and_war:_kingdoms_and_war,kingdom_building:_kingdom_building,kingdom_building_overview:_kingdom_building_overview,kingdom_terminology:_kingdom_terminology,kingdom_building_quick_reference:_kingdom_building_quick_reference,founding_a_kingdom:_founding_a_kingdom,leadership_roles:_leadership_roles,ruler:_ruler,consort:_consort,councilor:_councilor,general:_general,grand_diplomat:_grand_diplomat,heir:_heir,high_priest:_high_priest,magister:_magister,marshal:_marshal,royal_enforcer:_royal_enforcer,spymaster:_spymaster,treasurer:_treasurer,viceroy:_viceroy,warden:_warden,who_rolls_the_kingdom_check:_who_rolls_the_kingdom_check,build_points:_build_points,wealthy_sponsor:_wealthy_sponsor,starting_from_scratch:_starting_from_scratch,kingdom_turn_sequence:_kingdom_turn_sequence,kingdom_upkeep_phase:_kingdom_upkeep_phase,kingdom_edict_phase:_kingdom_edict_phase,kingdom_income_phase:_kingdom_income_phase,kingdom_event_phase:_kingdom_event_phase,edicts:_edicts,holiday_edicts:_holiday_edicts,improvement_edicts:_improvement_edicts,promotion_edicts:_promotion_edicts,taxation_edicts:_taxation_edicts,losing_hexes:_losing_hexes,capital_city:_capital_city,terrain_improvements:_terrain_improvements,aqueduct:_aqueduct,bridge:_bridge,canal:_canal,farm:_farm,fishery:_fishery,fort:_fort,highway:_highway,mine:_mine,quarry:_quarry,road:_road,sawmill:_sawmill,watchtower:_watchtower,special_terrain:_special_terrain,settlements_and_districts:_settlements_and_districts,founding_a_settlement:_founding_a_settlement,magic_items_in_settlements:_magic_items_in_settlements,claiming_water_and_islands:_claiming_water_and_islands,buildings_in_the_kingdom:_buildings_in_the_kingdom,building_descriptions:_building_descriptions,kbuildings1:_kbuildings1,kbuildings2:_kbuildings2,kbuildings3:_kbuildings3,kbuildings4:_kbuildings4,kbuildings5:_kbuildings5,kbuildings6:_kbuildings6,kbuildings7:_kbuildings7}