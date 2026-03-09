import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><h2 id="skill-not_found-error">Error</h2>
<p>Unable to find the requested skill.</p>
</>};
const _acrobatics = {hasJL:true,title: "Acrobatics", jsx: <><div className="jumpList" id="skill-acrobatics-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-acrobatics-moving-carefully">Moving Carefully</InnerLink></li><li><InnerLink toTop to="skill-acrobatics-avoiding-attacks">Avoiding Attacks</InnerLink></li><li><InnerLink toTop to="skill-acrobatics-jumping">Jumping</InnerLink></li><li><InnerLink toTop to="skill-acrobatics-falling">Falling</InnerLink></li><li><InnerLink toTop to="skill-acrobatics-other-modifiers">Other Modifiers</InnerLink></li><li><InnerLink toTop to="skill-acrobatics-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-acrobatics-acrobatics">Acrobatics</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 87</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> See below.</p>
<p><strong>Action:</strong> None. An Acrobatics check is made as part of another action or as a reaction to a situation.</p>
<p><strong>Special:</strong> If you have 3 or more ranks in Acrobatics, you gain a +3 dodge bonus to AC when fighting defensively instead of the usual +2, and a +6 dodge bonus to AC when taking the total defense action instead of the usual +4.</p>
<p>If you have the <Link to="/feat/acrobatic">Acrobatic</Link> feat, you get a bonus on Acrobatics checks.</p>
<h3 id="skill-acrobatics-moving-carefully" data-hash-target>Moving Carefully</h3>
<p>You can use Acrobatics to move on narrow surfaces and uneven ground without falling. A successful check allows you to move at half speed across such surfaces - only one check is needed per round. Use the following table to determine the base DC, which is then modified by the Acrobatics skill modifiers noted below. While you are using Acrobatics in this way, you are considered flat-footed and lose your Dexterity bonus to your AC (if any). If you take damage while using Acrobatics, you must immediately make another Acrobatics check at the same DC to avoid falling or being knocked prone.</p>
<ScrollContainer id="skill-acrobatics--table-0"><table>
<thead>
<tr>
<th>Surface Width</th>
<th>Base Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Greater than 3 feet wide</td>
<td>0</td>
</tr>
<tr>
<td>1-3 feet wide</td>
<td>5</td>
</tr>
<tr>
<td>7-11 inches wide</td>
<td>10</td>
</tr>
<tr>
<td>2-6 inches wide</td>
<td>15</td>
</tr>
<tr>
<td>Less than 2 inches wide</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p>No Acrobatics check is needed to move across surfaces at least 1 foot wide unless the modifiers to the surface (below) increase the DC to 10 or higher.</p>
<h3 id="skill-acrobatics-avoiding-attacks" data-hash-target>Avoiding Attacks</h3>
<p>In addition, you can move through a threatened square without provoking an attack of opportunity from an enemy by using Acrobatics. When moving in this way, you move at half speed. You can move at full speed by increasing the DC of the check by 10. You cannot use Acrobatics to move past foes if your speed is reduced due to carrying a medium or heavy load or wearing medium or heavy armor. If an ability allows you to move at full speed under such conditions, you can use Acrobatics to move past foes. You can use Acrobatics in this way while prone, but doing so requires a full-round action to move 5 feet, and the DC is increased by 5. If you attempt to move through an enemy's space and fail the check, you lose the move action and provoke an attack of opportunity.</p>
<ScrollContainer id="skill-acrobatics--table-1"><table>
<thead>
<tr>
<th>Situation</th>
<th>Base Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>Move through a threatened area</td>
<td>Opponent's Combat Maneuver Defense</td>
</tr>
<tr>
<td>Move through an enemy's space</td>
<td>5 + opponent's Combat Maneuver Defense</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> This DC is used to avoid an attack of opportunity due to movement. This DC increases by 2 for each additional opponent avoided in 1 round.</p>
<h3 id="skill-acrobatics-jumping" data-hash-target>Jumping</h3>
<p>Finally, you can use the Acrobatics skill to make jumps or to soften a fall. The base DC to make a jump is equal to the distance to be crossed (if horizontal) or four times the height to be reached (if vertical). These DCs double if you do not have at least 10 feet of space to get a running start. The only Acrobatics modifiers that apply are those concerning the surface you are jumping from. If you fail this check by 4 or less, you can attempt a DC 20 Reflex save to grab hold of the other side after having missed the jump. If you fail by 5 or more, you fail to make the jump and fall (or land prone, in the case of a vertical jump). Creatures with a base land speed above 30 feet receive a +4 racial bonus on Acrobatics checks made to jump for every 10 feet of their speed above 30 feet. Creatures with a base land speed below 30 feet receive a -4 racial bonus on Acrobatics checks made to jump for every 10 feet of their speed below 30 feet. No jump can allow you to exceed your maximum movement for the round. For a running jump, the result of your Acrobatics check indicates the distance traveled in the jump (and if the check fails, the distance at which you actually land and fall prone). Halve this result for a standing long jump to determine where you land.</p>
<ScrollContainer id="skill-acrobatics--table-2"><table>
<thead>
<tr>
<th>Long Jump</th>
<th>Acrobatics DC</th>
<th>High Jump</th>
<th>Acrobatics DC</th>
</tr>
</thead>
<tbody><tr>
<td>5 feet</td>
<td>5</td>
<td>1 foot</td>
<td>4</td>
</tr>
<tr>
<td>10 feet</td>
<td>10</td>
<td>2 feet</td>
<td>8</td>
</tr>
<tr>
<td>15 feet</td>
<td>15</td>
<td>3 feet</td>
<td>12</td>
</tr>
<tr>
<td>20 feet</td>
<td>20</td>
<td>4 feet</td>
<td>16</td>
</tr>
<tr>
<td>Greater than 20 feet</td>
<td>+5 per 5 feet</td>
<td>Greater than 4 feet</td>
<td>+4 per foot</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="skill-acrobatics-falling" data-hash-target>Falling</h3>
<p>When you deliberately fall any distance, even as a result of a missed jump, a DC 15 Acrobatics skill check allows you to ignore the first 10 feet fallen, although you still end up prone if you take damage from a fall. See the falling rules for further details.</p>
<h3 id="skill-acrobatics-other-modifiers" data-hash-target>Other Modifiers</h3>
<p>Many conditions can affect your chances of success with Acrobatics checks. The following modifiers to target DCs apply to all Acrobatics skill checks. The modifiers stack with one another, but only the most severe modifier for any one condition applies.</p>
<ScrollContainer id="skill-acrobatics--table-3"><table>
<thead>
<tr>
<th>Acrobatics Modifiers</th>
<th>DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Slightly obstructed (gravel, sand)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely obstructed (cavern, rubble)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly slippery (wet)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely slippery (icy)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly sloped (up to 45&deg;)</td>
<td>+2</td>
</tr>
<tr>
<td>Severely sloped (over 45&deg;)</td>
<td>+5</td>
</tr>
<tr>
<td>Slightly unsteady (boat in rough water)</td>
<td>+2</td>
</tr>
<tr>
<td>Moderately unsteady (boat in a storm)</td>
<td>+5</td>
</tr>
<tr>
<td>Severely unsteady (earthquake)</td>
<td>+10</td>
</tr>
<tr>
<td>Move at full speed on narrow or uneven surfaces (not jumping)</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="skill-acrobatics-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 82</Link><br/>With sufficient ranks in Acrobatics, you earn the following.</p>
<p><strong>5 Ranks:</strong> You can move at normal speed through a threatened square without provoking an attack of opportunity by increasing the DC of the check by 5 (instead of by 10). You aren't denied your Dexterity bonus when attempting Acrobatics checks with DCs of 20 or lower.<br/><strong>10 Ranks:</strong> You can attempt an Acrobatics check at a -10 penalty and use the result as your CMD against trip maneuvers. You can also attempt an Acrobatics check at a -10 penalty in place of a Reflex save to avoid falling. You must choose to use this ability before the trip attempt or Reflex save is rolled. With a successful DC 20 Acrobatics check, you treat an unintentional fall as 10 feet shorter plus 10 feet for every 10 by which you exceed the DC, and treat an intentional fall as 10 feet shorter for every 10 by which you exceed the DC.<br/><strong>15 Ranks:</strong> You do not provoke attacks of opportunity when standing up from prone.<br/><strong>20 Ranks:</strong> You double the result of any Acrobatics check when jumping and never fall prone at the end of a fall as long as you remain conscious.</p>
</>};
const _appraise = {hasJL:true,title: "Appraise", jsx: <><div className="jumpList" id="skill-appraise-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-appraise-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-appraise-psychometry">Psychometry</InnerLink></li><li><InnerLink toTop to="skill-appraise-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-appraise-appraise">Appraise</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 90</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p><strong>Check:</strong> A DC 20 Appraise check determines the value of a common item. If you succeed by 5 or more, you also determine if the item has magic properties, although this success does not grant knowledge of the magic item's abilities. If your fail the check by less than 5, you determine the price of that item to within 20% of its actual value. If you fail this check by 5 or more, the price is wildly inaccurate, subject to GM discretion. Particularly rare or exotic items might increase the DC of this check by 5 or more.</p>
<p>You can also use this check to determine the most valuable item visible in a treasure hoard. The DC of this check is generally 20 but can increase to as high as 30 for a particularly large hoard.</p>
<p><strong>Action:</strong> Appraising an item takes 1 standard action. Determining the most valuable object in a treasure hoard takes 1 full-round action.</p>
<p><strong>Try Again:</strong> Additional attempts to Appraise an item reveal the same result.</p>
<p><strong>Special:</strong> A spellcaster with a raven familiar gains a +3 bonus on Appraise checks.</p>
<h3 id="skill-appraise-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-appraise-psychometry" data-hash-target>Psychometry</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 196</Link></p>
<p>You can read the psychic impressions left on objects or in places by previous owners and events.</p>
<p><strong>Check:</strong> Once per day, you can concentrate for 1 minute while in physical contact with an item or location, during which you receive flashes of insight regarding the subject's nature and ownership. After 1 minute, you attempt a DC 15 Appraise check to decipher the visions. You gain one piece of information about the historical significance or the last previous owner - such as a glimpse of the last owner's appearance or its emotional state when it last used the item - determined by the GM. You learn one more piece of information for every 10 by which your check result exceeds the DC, as long as you concentrate for 1 additional minute for each piece of information. If you fail the check by less than 5 or the item has no significant psychic imprint, you don't learn any information. If you fail this check by 5 or more, the item appears to be psychically significant even if it's not, and the information you gain is wildly inaccurate. If you attempt to use psychometry on an item affected by <Link to="/spell/charge_object">charge object</Link> or <Link to="/spell/implant_false_reading">implant false reading</Link>, you automatically learn all information imprinted by the spell. You must also attempt a Will save. If the item is affected by an <em>implant false reading</em> spell, on a success, you realize the information was false, and can determine the true information as well. On a failure, or if the item is affected by a <em>charge object</em> spell, you believe the information is true.</p>
<p><strong>Action:</strong> Reading an object requires at least 1 minute of uninterrupted concentration.</p>
<p><strong>Try Again:</strong> Yes. Multiple readings on an object or place always give the same results unless its circumstances or ownership have changed, but additional checks might reach further back into an object's history. You don't reroll the saving throw to determine if a psychic imprint is false. You can still use psychometry only once per day.</p>
<h3 id="skill-appraise-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 82</Link><br/>With sufficient ranks in Appraise, you earn the following.</p>
<p><strong>5 Ranks:</strong> A successful DC 20 Appraise check reveals whether an item is magical, and a second check (DC = 25 + the item's caster level) unveils its properties. You can use Appraise to detect non-written forgeries and counterfeits.<br/><strong>10 Ranks:</strong> You can determine the most expensive object a creature is wearing or wielding (or in a 5-foot cube) as a standard action by succeeding at a DC 20 check. You never make a wildly inaccurate appraisal of an item's value.<br/><strong>15 Ranks:</strong> Determining the most expensive object as above is a move action. You can substitute an Appraise check at a -10 penalty for a Will save to disbelieve a figment or glamer.<br/><strong>20 Ranks:</strong> Determining the most expensive object as above is a move action, and if the check succeeds, you gain a +2 circumstance bonus on combat maneuver checks to steal that object or disarm a creature of that object for 1 minute.</p>
</>};
const _artistry_any = {title: "Artistry (any)", jsx: <><h2 id="skill-artistry_any-artistry-any">Artistry (any)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 48</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> Yes<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are skilled in the creative arts, following your aesthetic sensibilities to bring to life the wonders of your imagination. Like Craft, Perform, and Profession, Artistry is actually a number of separate skills. You could have several Artistry skills, each with its own ranks. The most common Artistry skills are choreography, criticism, literature (including poetry), musical composition, philosophy, and playwriting.</p>
<p>Like Craft, an Artistry skill is focused on creating something. However, what it creates is not necessarily a physical object; it could be a pattern or blueprint for an item, or a better method for crafting a type of item. Thus, an Artistry (musical composition) check could be used to create a new song, but the important act of creation is the song itself, not the paper on which it is written or even the performance. An artist is not necessarily a skilled performer, though she might be. An artist's province is the creation of ideas and concepts, and the realization of those ideas in a way that can be enjoyed by others and contribute to the broader culture of the arts. Some art forms (such as painting or sculpture) skirt the line between Artistry and Craft. It's up to the GM to rule whether certain Craft skills can be taken as Artistry skills instead.</p>
<p><strong>Check:</strong> You can create works of art and try to earn a living by impressing possible patrons with your talent and ideas.</p>
<ScrollContainer id="skill-artistry_any--table-0"><table>
<thead>
<tr>
<th>Artistry DC</th>
<th>Workmanship</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>Pedestrian work. No one buys your original work, but you get a few odd jobs using your skills - often just repairing or copying someone else's work. You earn 1d10 cp per day.</td>
</tr>
<tr>
<td>15</td>
<td>Pleasing work. In a prosperous city, you find a few who wish to purchase your work, and earn 1d10 sp per day.</td>
</tr>
<tr>
<td>20</td>
<td>Impressive work. In a prosperous city, you earn 3d10 sp per day, and may receive an artistic commission from a wealthy or public figure. As a result, you gain a local reputation.</td>
</tr>
<tr>
<td>25</td>
<td>Memorable work. In a prosperous city, you earn 1d6 gp per day, and you are likely to attract the attention of wealthy patrons and to develop a national reputation.</td>
</tr>
<tr>
<td>30</td>
<td>Masterful work. In a prosperous city, you earn 3d6 gp per day. In time, you may draw attention from distant patrons, or even from extraplanar beings.</td>
</tr>
</tbody></table></ScrollContainer>
<p>Since works of art are products of imagination, masterwork tools are of no use in their creation.</p>
<p><em>Creating a Commissioned Work:</em> If you are creating a specific commissioned work, determine the value of the work you wish to create by looking at the table below, then follow the listed steps. You must have a patron willing to pay this value to attempt to create a commissioned work. The amount earned from trying to make a living using Artistry is for works that are distributed among many people and publications, not bought by one patron.</p>
<ScrollContainer id="skill-artistry_any--table-1"><table>
<thead>
<tr>
<th>Quality of Work</th>
<th>DC</th>
<th>Commission Fee</th>
</tr>
</thead>
<tbody><tr>
<td>Pedestrian work</td>
<td>10</td>
<td>1 sp</td>
</tr>
<tr>
<td>Pleasing work</td>
<td>15</td>
<td>25 gp (250 sp)</td>
</tr>
<tr>
<td>Impressive work</td>
<td>20</td>
<td>50 gp (500 sp)</td>
</tr>
<tr>
<td>Memorable work</td>
<td>25</td>
<td>100 gp (1,000 sp)</td>
</tr>
<tr>
<td>Masterful work</td>
<td>30</td>
<td>200 gp (2,000 sp)</td>
</tr>
</tbody></table></ScrollContainer>
<p>To determine how much time and money it takes to complete a work of art, follow these steps.</p>
<p><strong>Step 1:</strong> Find the DC and price corresponding to the quality of the work you intend to create.</p>
<p><strong>Step 2:</strong> Spend 1/4 the price of the work you intend to create. This represents buying supplies such as parchment and ink, hiring the services of musicians, paying for research materials, and the like.</p>
<p><strong>Step 3:</strong> Attempt an Artistry check with the appropriate DC, representing 1 week's worth of work. If you succeed, multiply your check result by the DC. If the resulting value equals the price of the item in sp, then you have completed the work of art and gain your commission fee. (If the resulting value equals double or triple the price of the work in silver pieces, then you've completed the task in half or one-third of the time. Other multiples of the DC reduce the completion time in the same manner.) If the resulting value doesn't equal the price, then it represents the progress you've made this week in sp. If the check fails, you make no progress.</p>
<p>If you didn't complete the work of art, you can either continue working or call it done and cut your losses. If you continue working, you must spend 1/4 the price again for each week you work. Record the result of your check from the first week, and add your progress for each subsequent week to the total until you either complete the item or cut your losses. If you decide to cut your losses, you gain the commission of the highest-quality level that your total could have completed. For instance, if you were trying to create a memorable work (a commission price of 1,000 sp) and have made only 600 sp worth of progress, you can cut your losses to gain a commission fee for an impressive work (500 sp, or 50 gp). You can't earn the value for a higher quality than you were aiming for, so if you aimed to create a memorable work but ended up creating a masterful work, you couldn't gain a commission price higher than 100 gp. When you cut your losses, you don't gain back any money you spent on supplies and services. So if you spent 250 sp when trying to create a memorable work, selling an impressive work would net you only 250 sp total if you spent 1 week of work, and would cause you to break even if you spent 2 weeks. It's possible to lose money working on a commission.</p>
<p><strong>Action:</strong> Varies. Trying to earn money by creating minor works of art typically involves a full week's work. If you work less than 1 week, you earn the daily average amount appropriate for your level of workmanship. Creating a commissioned work typically takes a week or more.</p>
<p><strong>Try Again:</strong> Yes. Retries are allowed, but they don't negate previous failures. If you're trying to earn a living as an artist in a city where the public hasn't been impressed with your work (because you failed a DC 15 Artistry check in the previous week), you have a hard time breaking into the marketplace with future artwork (increase the DC by 2 for each previous failure). If you leave the area for a month or more before trying again, this increase resets to 0.</p>
</>};
const _bluff = {hasJL:true,title: "Bluff", jsx: <><div className="jumpList" id="skill-bluff-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-bluff-lying">Lying</InnerLink></li><li><InnerLink toTop to="skill-bluff-feinting">Feinting</InnerLink></li><li><InnerLink toTop to="skill-bluff-secret-messages">Secret Messages</InnerLink></li><li><InnerLink toTop to="skill-bluff-inconspicuous-action">Inconspicuous Action</InnerLink></li><li><InnerLink toTop to="skill-bluff-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-bluff-bluff">Bluff</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 90</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> See below.</p>
<p><strong>Special:</strong> A spellcaster with a viper familiar gains a +3 bonus on Bluff checks.</p>
<p>If you have the <Link to="/feat/deceitful">Deceitful</Link> feat, you get a bonus on Bluff checks.</p>
<h3 id="skill-bluff-lying" data-hash-target>Lying</h3>
<p>Bluff is an opposed skill check against your opponent's Sense Motive skill. If you use Bluff to fool someone, with a successful check you convince your opponent that what you are saying is true. Bluff checks are modified depending upon the believability of the lie. The following modifiers are applied to the roll of the creature attempting to tell the lie. Note that some lies are so improbable that it is impossible to convince anyone that they are true (subject to GM discretion).</p>
<ScrollContainer id="skill-bluff--table-0"><table>
<thead>
<tr>
<th>Circumstances</th>
<th>Bluff Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>The target wants to believe you</td>
<td>+5</td>
</tr>
<tr>
<td>The lie is believable</td>
<td>+0</td>
</tr>
<tr>
<td>The lie is unlikely</td>
<td>-5</td>
</tr>
<tr>
<td>The lie is far-fetched</td>
<td>-10</td>
</tr>
<tr>
<td>The lie is impossible</td>
<td>-20</td>
</tr>
<tr>
<td>The target is drunk or impaired</td>
<td>+5</td>
</tr>
<tr>
<td>You possess convincing proof</td>
<td>up to +10</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Attempting to deceive someone takes at least 1 round, but can possibly take longer if the lie is elaborate (as determined by the GM on a case-by-case basis).</p>
<p><strong>Try Again:</strong> If you fail to deceive someone, further attempts to deceive them are at a -10 penalty and may be impossible (GM discretion).</p>
<h3 id="skill-bluff-feinting" data-hash-target>Feinting</h3>
<p>You can use Bluff to feint in combat, causing your opponent to be denied his Dexterity bonus to his AC against your next attack. The DC of this check is equal to 10 + your opponent's base attack bonus + your opponent's Wisdom modifier. If your opponent is trained in Sense Motive, the DC is instead equal to 10 + your opponent's Sense Motive bonus, if higher. For more information on feinting in combat, see Combat.</p>
<p><strong>Action:</strong> Feinting in combat is a standard action.</p>
<p><strong>Try Again:</strong> You can attempt to feint against someone again if you fail.</p>
<h3 id="skill-bluff-secret-messages" data-hash-target>Secret Messages</h3>
<p>You can use Bluff to pass hidden messages along to another character without others understanding your true meaning by using innuendo to cloak your actual message. The DC of this check is 15 for simple messages and 20 for complex messages. If you are successful, the target automatically understands you, assuming you are communicating in a language that it understands. If your check fails by 5 or more, you deliver the wrong message. Other creatures that receive the message can decipher it by succeeding at an opposed Sense Motive check against your Bluff result.</p>
<p><strong>Action:</strong> Using Bluff to deliver a secret message takes twice as long as the message would otherwise take to relay.</p>
<p><strong>Try Again:</strong> Secret messages can be relayed again if the first attempt fails.</p>
<h3 id="skill-bluff-inconspicuous-action" data-hash-target>Inconspicuous Action</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 8</Link></p>
<p>You can avoid drawing attention to yourself when performing conspicuous actions such as picking up an object in a museum where handling the exhibits is frowned upon but not a matter of grave concern, or closely studying someone across a room at a party.</p>
<p><strong>Check:</strong> Your Bluff check is opposed by observers' Sense Motive checks. You can't attempt the check if your very presence is suspicious (which you could prevent by altering your appearance with the Disguise skill).</p>
<p><strong>Action:</strong> You attempt the Bluff check as part of performing the action you wish to render inconspicuous. Normally, you must take twice as long as normal to perform the action in order to make it inconspicuous. A standard action becomes a full-round action completed just before the start of your next turn and a free, immediate, move, or swift action becomes a standard action.</p>
<h3 id="skill-bluff-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 82</Link><br/>With sufficient ranks in Bluff, you earn the following.</p>
<p><strong>5 Ranks:</strong> The penalty to Bluff a creature after a failed check is halved unless you failed by 5 or more.<br/><strong>10 Ranks:</strong> You take no penalty to Bluff a creature after a failed check unless you failed by 5 or more.<br/><strong>15 Ranks:</strong> Creatures magically attempting to read your thoughts, detect your alignment, or reveal when you are lying must attempt a caster level check (DC = 11 + your ranks in Bluff) or the effect reveals nothing.<br/><strong>20 Ranks:</strong> As a full-round action, you can make a <Link to="/spell/suggestion">suggestion</Link> (as the spell, maximum duration 1 hour) to a creature within 30 feet (Will negates, DC = 15 + your Charisma modifier). A creature that saves against your <em>suggestion</em> is immune to further uses of this effect for 24 hours, and whenever the suggested creature is specifically confronted with proof of your manipulation, it receives another saving throw. This is an extraordinary mind-affecting compulsion.</p>
</>};
const _climb = {hasJL:true,title: "Climb", jsx: <><div className="jumpList" id="skill-climb-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-climb-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-climb-climb">Climb</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 90</Link><br/><strong>Associated Skill:</strong> Strength<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> With a successful Climb check, you can advance up, down, or across a slope, wall, or other steep incline (or even across a ceiling, provided it has handholds) at one-quarter your normal speed. A slope is considered to be any incline at an angle measuring less than 60 degrees; a wall is any incline at an angle measuring 60 degrees or more.</p>
<p>A Climb check that fails by 4 or less means that you make no progress, and one that fails by 5 or more means that you fall from whatever height you have already attained.</p>
<p>The DC of the check depends on the conditions of the climb. Compare the task with those on the following table to determine an appropriate DC.</p>
<ScrollContainer id="skill-climb--table-0"><table>
<thead>
<tr>
<th>Climb DC</th>
<th>Example Surface or Activity</th>
</tr>
</thead>
<tbody><tr>
<td>0</td>
<td>A slope too steep to walk up, or a knotted rope with a wall to brace against.</td>
</tr>
<tr>
<td>5</td>
<td>A rope with a wall to brace against, or a knotted rope, or a rope affected by the rope trick spell.</td>
</tr>
<tr>
<td>10</td>
<td>A surface with ledges to hold on to and stand on, such as a very rough wall or a ship's rigging.</td>
</tr>
<tr>
<td>15</td>
<td>Any surface with adequate handholds and footholds (natural or artificial), such as a very rough natural rock surface or a tree, or an unknotted rope, or pulling yourself up when dangling by your hands.</td>
</tr>
<tr>
<td>20</td>
<td>An uneven surface with narrow handholds and footholds, such as a typical wall in a dungeon.</td>
</tr>
<tr>
<td>25</td>
<td>A rough surface, such as a natural rock wall or a brick wall.</td>
</tr>
<tr>
<td>30</td>
<td>An overhang or ceiling with handholds only.</td>
</tr>
<tr>
<td>-</td>
<td>A perfectly smooth, flat vertical (or inverted) surface cannot be climbed.</td>
</tr>
</tbody></table></ScrollContainer>
<p>These modifiers are cumulative; use all that apply.</p>
<ScrollContainer id="skill-climb--table-1"><table>
<thead>
<tr>
<th>Climb DC Modifier</th>
<th>Example Surface or Activity</th>
</tr>
</thead>
<tbody><tr>
<td>-10</td>
<td>Climbing a chimney (artificial or natural) or other location where you can brace against two opposite walls.</td>
</tr>
<tr>
<td>-5</td>
<td>Climbing a corner where you can brace against perpendicular walls.</td>
</tr>
<tr>
<td>+5</td>
<td>Surface is slippery.</td>
</tr>
</tbody></table></ScrollContainer>
<p>You need both hands free to climb, but you may cling to a wall with one hand while you cast a spell or take some other action that requires only one hand. While climbing, you can't move to avoid a blow, so you lose your Dexterity bonus to AC (if any). You also can't use a shield while climbing. Anytime you take damage while climbing, make a Climb check against the DC of the slope or wall. Failure means you fall from your current height and sustain the appropriate falling damage.</p>
<p><em>Accelerated Climbing:</em> You try to climb more quickly than normal. By accepting a -5 penalty, you can move half your speed (instead of one-quarter your speed).</p>
<p><em>Make Your Own Handholds and Footholds:</em> You can make your own handholds and footholds by pounding pitons into a wall. Doing so takes 1 minute per piton, and one piton is needed per 5 feet of distance. As with any surface that offers handholds and footholds, a wall with pitons in it has a DC of 15. In the same way, a climber with a handaxe or similar implement can cut handholds in an ice wall.</p>
<p><em>Catch Yourself When Falling:</em> It's practically impossible to catch yourself on a wall while falling, yet if you wish to attempt such a difficult task, you can make a Climb check (DC = wall's DC + 20) to do so. It's much easier to catch yourself on a slope (DC = slope's DC + 10).</p>
<p><em>Catch a Falling Character While Climbing:</em> If someone climbing above you or adjacent to you falls, you can attempt to catch the falling character if he or she is within your reach. Doing so requires a successful melee touch attack against the falling character (though he or she can voluntarily forego any Dexterity bonus to AC if desired). If you hit, you must immediately attempt a Climb check (DC = wall's DC + 10). Success indicates that you catch the falling character, but his total weight, including equipment, cannot exceed your heavy load limit or you automatically fall. If you fail your Climb check by 4 or less, you fail to stop the character's fall but don't lose your grip on the wall. If you fail by 5 or more, you fail to stop the character's fall and begin falling as well.</p>
<p><strong>Action:</strong> Climbing is part of movement, so it's generally part of a move action (and may be combined with other types of movement in a move action). Each move action that includes any climbing requires a separate Climb check. Catching yourself or another falling character doesn't take an action.</p>
<p><strong>Special:</strong> You can use a rope to haul a character upward (or lower a character) through sheer strength. You can lift double your maximum load in this manner.</p>
<p>A creature with a climb speed has a +8 racial bonus on all Climb checks. The creature must make a Climb check to climb any wall or slope with a DC higher than 0, but it can always choose to take 10, even if rushed or threatened while climbing. If a creature with a climb speed chooses an accelerated climb, it moves at double its climb speed (or at its land speed, whichever is slower) and makes a single Climb check at a -5 penalty. Such a creature retains its Dexterity bonus to Armor Class (if any) while climbing, and opponents get no special bonus to their attacks against it. It cannot, however, use the run action while climbing.</p>
<p>If you have the <Link to="/feat/athletic">Athletic</Link> feat, you get a bonus on Climb checks.</p>
<h3 id="skill-climb-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 82</Link><br/>With sufficient ranks in Climb, you earn the following.</p>
<p><strong>5 Ranks:</strong> You are no longer denied your Dexterity bonus when climbing.<br/><strong>10 Ranks:</strong> You gain a natural climb speed (but not the +8 racial bonus on Climb checks) of 10 feet, but only on surfaces with a Climb DC of 20 or lower.<br/><strong>15 Ranks:</strong> You gain a natural climb speed (but not the +8 racial bonus on Climb checks) equal to your base speed on surfaces with a Climb DC of 20 or lower, and of 10 feet on all other surfaces.<br/><strong>20 Ranks:</strong> You gain a natural climb speed equal to your base speed on all surfaces. If you have both hands free, you gain a +8 racial bonus on Climb checks.</p>
</>};
const _craft_any = {hasJL:true,title: "Craft (any)", jsx: <><div className="jumpList" id="skill-craft_any-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-craft_any-crafting-antivenom">Crafting Antivenom</InnerLink></li><li><InnerLink toTop to="skill-craft_any-preserving-harvested-poison">Preserving Harvested Poison</InnerLink></li><li><InnerLink toTop to="skill-craft_any-salvaging">Salvaging</InnerLink></li><li><InnerLink toTop to="skill-craft_any-technology">Technology</InnerLink></li><li><InnerLink toTop to="skill-craft_any-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-craft_any-craft-any">Craft (any)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 91</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are skilled in the creation of a specific group of items, such as armor or weapons. Like Knowledge, Perform, and Profession, Craft is actually a number of separate skills. You could have several Craft skills, each with its own ranks. The most common Craft skills are alchemy, armor, baskets, books, bows, calligraphy, carpentry, cloth, clothing, firearms, glass, jewelry, leather, locks, paintings, pottery, sculptures, ships, shoes, siege engines, stonemasonry, traps, and weapons.</p>
<p>A Craft skill is specifically focused on creating something. If nothing is created by the endeavor, it probably falls under the heading of a Profession skill.</p>
<p><strong>Check:</strong> You can practice your trade and make a decent living, earning half your check result in gold pieces per week of dedicated work. You know how to use the tools of your trade, how to perform the craft's daily tasks, how to supervise untrained helpers, and how to handle common problems. (Untrained laborers and assistants earn an average of 1 silver piece per day.)</p>
<p>The basic function of the Craft skill, however, is to allow you to make an item of the appropriate type. The DC depends on the complexity of the item to be created. The DC, your check result, and the price of the item determine how long it takes to make a particular item. The item's finished price also determines the cost of raw materials.</p>
<p>In some cases, the <Link to="/spell/fabricate">fabricate</Link> spell can be used to achieve the results of a Craft check with no actual check involved. You must still make an appropriate Craft check when using the spell to make articles requiring a high degree of craftsmanship.</p>
<p>A successful Craft check related to woodworking in conjunction with the casting of the <Link to="/spell/ironwood">ironwood</Link> spell enables you to make wooden items that have the strength of steel.</p>
<p>When casting the spell <Link to="/spell/minor_creation">minor creation</Link>, you must succeed on an appropriate Craft check to make a complex item.</p>
<p>All crafts require artisan's tools to give the best chance of success. If improvised tools are used, the check is made with a -2 penalty. On the other hand, masterwork artisan's tools provide a +2 circumstance bonus on the check.</p>
<p>To determine how much time and money it takes to make an item, follow these steps.</p>
<ol>
<li>Find the item's price in silver pieces (1 gp = 10 sp).</li>
<li>Find the item's DC from the table below.</li>
<li>Pay 1/3 of the item's price for the raw material cost.</li>
<li>Make an appropriate Craft check representing one week's worth of work. If the check succeeds, multiply your check result by the DC. If the result &times; the DC equals the price of the item in sp, then you have completed the item. (If the result &times; the DC equals double or triple the price of the item in silver pieces, then you've completed the task in one-half or one-third of the time. Other multiples of the DC reduce the time in the same manner.) If the result &times; the DC doesn't equal the price, then it represents the progress you've made this week. Record the result and make a new Craft check for the next week. Each week, you make more progress until your total reaches the price of the item in silver pieces.</li>
</ol>
<p>If you fail a check by 4 or less, you make no progress this week. If you fail by 5 or more, you ruin half the raw materials and have to pay half the original raw material cost again.</p>
<p><em>Progress by the Day:</em> You can make checks by the day instead of by the week. In this case your progress (check result &times; DC) should be divided by the number of days in a week.</p>
<p><em>Create Masterwork Items:</em> You can make a masterwork item: a weapon, suit of armor, shield, or tool that conveys a bonus on its use through its exceptional craftsmanship. To create a masterwork item, you create the masterwork component as if it were a separate item in addition to the standard item. The masterwork component has its own price (300 gp for a weapon or 150 gp for a suit of armor or a shield, see Equipment for the price of other masterwork tools) and a Craft DC of 20. Once both the standard component and the masterwork component are completed, the masterwork item is finished. The cost you pay for the masterwork component is one-third of the given amount, just as it is for the cost in raw materials.</p>
<p><em>Repair Items:</em> You can repair an item by making checks against the same DC that it took to make the item in the first place. The cost of repairing an item is one-fifth of the item's price.</p>
<h3 id="skill-craft_any-table-4-4-craft-skills">Table 4-4: Craft Skills</h3>
<ScrollContainer id="skill-craft_any--table-0"><table>
<thead>
<tr>
<th>Item Craft</th>
<th>Skill</th>
<th>Craft DC</th>
</tr>
</thead>
<tbody><tr>
<td>Acid</td>
<td>Alchemy</td>
<td>15</td>
</tr>
<tr>
<td>Alchemist's fire, smokestick, or tindertwig</td>
<td>Alchemy</td>
<td>20</td>
</tr>
<tr>
<td>Antitoxin, sunrod, tanglefoot bag, or thunderstone</td>
<td>Alchemy</td>
<td>25</td>
</tr>
<tr>
<td><Link to="/rule/spontaneous_alchemy">Spontaneous alchemy</Link> use</td>
<td>Alchemy</td>
<td>Varies</td>
</tr>
<tr>
<td>Armor or shield</td>
<td>Armor</td>
<td>10 + AC bonus</td>
</tr>
<tr>
<td>Longbow, shortbow, or arrows</td>
<td>Bows</td>
<td>12</td>
</tr>
<tr>
<td>Composite longbow or composite shortbow</td>
<td>Bows</td>
<td>15</td>
</tr>
<tr>
<td>Composite longbow or composite shortbow with high strength rating</td>
<td>Bows</td>
<td>15 + (2 &times; rating)</td>
</tr>
<tr>
<td>Mechanical trap</td>
<td>Traps</td>
<td>Varies</td>
</tr>
<tr>
<td>Crossbow, or bolts</td>
<td>Weapons</td>
<td>15</td>
</tr>
<tr>
<td>Simple melee or thrown weapon</td>
<td>Weapons</td>
<td>12</td>
</tr>
<tr>
<td>Martial melee or thrown weapon</td>
<td>Weapons</td>
<td>15</td>
</tr>
<tr>
<td>Exotic melee or thrown weapon</td>
<td>Weapons</td>
<td>18</td>
</tr>
<tr>
<td>Very simple item (wooden spoon)</td>
<td>Varies</td>
<td>5</td>
</tr>
<tr>
<td>Typical item (iron pot)</td>
<td>Varies</td>
<td>10</td>
</tr>
<tr>
<td>High-quality item (bell)</td>
<td>Varies</td>
<td>15</td>
</tr>
<tr>
<td>Complex or superior item (lock)</td>
<td>Varies</td>
<td>20</td>
</tr>
<tr>
<td>A weapon with the fragile special quality</td>
<td>Weapon or Bow</td>
<td>Normal DC -5</td>
</tr>
<tr>
<td>One-handed firearm</td>
<td>Firearm</td>
<td>20</td>
</tr>
<tr>
<td>Two-handed firearm</td>
<td>Firearm</td>
<td>20</td>
</tr>
<tr>
<td>Siege firearm, heavy</td>
<td>Firearm</td>
<td>25</td>
</tr>
<tr>
<td>Siege firearm, medium</td>
<td>Firearm</td>
<td>30</td>
</tr>
<tr>
<td>Siege firearm, light</td>
<td>Firearm</td>
<td>35</td>
</tr>
<tr>
<td>Ranged siege engine, heavy</td>
<td>Siege Engine</td>
<td>20</td>
</tr>
<tr>
<td>Ranged siege engine, medium</td>
<td>Siege Engine</td>
<td>25</td>
</tr>
</tbody></table></ScrollContainer>
<p><Link to="/rule/traps">Traps</Link> have their own rules for construction.</p>
<p><strong>Action:</strong> Does not apply. Craft checks are made by the day or week.</p>
<p><strong>Try Again:</strong> Yes, but each time you fail by 5 or more, you ruin half the raw materials and have to pay half the original raw material cost again.</p>
<p><strong>Special:</strong> You may voluntarily add +10 to the indicated DC to craft an item. This allows you to create the item more quickly (since you'll be multiplying this higher DC by your Craft check result to determine progress). You must decide whether to increase the DC before you make each weekly or daily check.</p>
<p>To make an item using Craft (alchemy), you must have alchemical equipment. If you are working in a city, you can buy what you need as part of the raw materials cost to make the item, but alchemical equipment is difficult or impossible to come by in some places. Purchasing and maintaining an alchemist's lab grants a +2 circumstance bonus on Craft (alchemy) checks because you have the perfect tools for the job, but it does not affect the cost of any items made using the skill.</p>
<p>A gnome receives a +2 bonus on a Craft or Profession skill of her choice.</p>
<h3 id="skill-craft_any-crafting-antivenom" data-hash-target>Crafting Antivenom</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 143</Link></p>
<p>While <Link to="/eq-misc/antitoxin">antitoxin</Link> presents a generalized tool for protecting oneself from poison, more specialized antivenoms can provide even greater protection against specific poisons. Creating a dose of antivenom requires a dose of the specific poison that the antivenom is designed to protect against.</p>
<p><strong>Antivenom Effects:</strong> A single dose of antivenom automatically neutralizes the first exposure of the specific poison it is made to combat and provides a +8 alchemical bonus on saving throws against additional exposure to that specific poison; this bonus decreases by 1 every hour, until the effect ends after 8 hours.</p>
<p><strong>Crafting Antivenom:</strong> To create a dose of antivenom, a living creature must first be exposed to a half dose of the poison in question. The creature suffers the poison's effects normally, except the saving throw DC to resist the poison is reduced by 2. In order to be able to produce antivenom, the creature must succeed at the necessary saving throws to be cured of the poison. If the poison's duration expires without the creature being cured, no antivenom can be harvested.</p>
<p>Once the creature has resisted the poison's effects, a viable sample of the creature's blood can be extracted with a successful DC 20 Craft (alchemy) or Heal check. This blood must then be refined to extract the natural antibodies that combat the poison in a process that takes 1 hour and requires a successful Craft (alchemy) check (DC = 5 + the poison's saving throw DC). Success yields 1 dose of antivenom.</p>
<p>Antivenom can also be harvested in the same fashion from a creature that has been afflicted by a full dose of poison, rather than a creature deliberately given a half dose for this purpose. Regardless of how much poison the creature is exposed to, the antibodies in its system can be harvested only for 24 hours after it has recovered from the poison.</p>
<p><strong>Purchasing Antivenom:</strong> Antivenom is not particularly expensive, but because it is highly specialized, it can be difficult to find. A dose of antivenom has a market price equal to half the market price of a dose of the poison in question, but it is treated as though its price were five times the market price of the poison for the purposes of determining its availability in any given settlement. Alternatively, if 1 or more doses of the poison in question can be provided, most alchemists will supply as much antivenom as they can produce from the doses for a fee of 10% of the market price of the poison.</p>
<h3 id="skill-craft_any-preserving-harvested-poison" data-hash-target>Preserving Harvested Poison</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 143</Link></p>
<p>Poison harvested from a creature or hazard remains potent for 24 hours. If a character wishes to preserve harvested poison for a longer period, she must treat it alchemically, as if crafting the poison with Craft (alchemy) but using the poison dose as the raw ingredients normally needed to brew a dose of the poison and thus avoiding the gp cost to craft the poison.</p>
<h3 id="skill-craft_any-salvaging" data-hash-target>Salvaging</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 134</Link></p>
<p>Foraging is one way to gather resources in the wild, but you can also recycle or repurpose items and gear as well, salvaging materials from items you no longer need or are willing to sacrifice. You can't salvage materials from artifacts, cursed items, or items you can't destroy. Successfully salvaging an item requires a Craft or Spellcraft check and takes an amount of time as indicated in the specific type of salvage operation below.</p>
<p><strong>Ammunition:</strong> You can use destroyed ammunition as raw materials for new ammunition. Five pieces of destroyed ammunition provide suitable material to create one new piece of ammunition using the normal crafting rules.</p>
<p><strong>Potions:</strong> If you have the <Link to="/feat/brew_potion">Brew Potion</Link> feat, you can combine natural catalysts with a potion to salvage it and create a different potion of a lower spell level. Salvaging a potion requires raw magic item materials (these can be salvaged from existing items, as detailed below). To salvage a potion, you must spend 1 hour per spell level of the original potion and then attempt a Craft (alchemy) or Spellcraft check with a DC equal to 15 + 3 &times; the original potion's spell level. If you succeed, you transmute the original potion into a new potion of a spell at least one spell level lower, provided you know the spell in question (it need not be one you can currently cast). If you fail this check by 4 or less, the attempt fails and the catalyst is wasted, but the potion is unharmed. If you fail by 5 or more, the raw materials are lost and the original potion is ruined.</p>
<p><strong>Raw Crafting Materials:</strong> Anyone trained in the Craft skill can salvage raw materials from equipment for use in crafting or repair. You must carefully dismantle the item to be salvaged, resulting in the item's destruction. If the item's price is 1 gp or less, its materials can be salvaged with only 1 hour of work; otherwise it takes 8 hours to salvage crafting materials. A successful Craft check against the item's creation DC + 5 yields raw materials worth one-quarter the item's price. If you fail the Craft check by 4 or less, the item is destroyed but the materials can still be salvaged in a future attempt. If you fail the Craft check by 5 or more, the item is destroyed and the materials are ruined. Salvaged raw materials can be used to create or repair any item of the same materials and reduces the construction time by the proportion of the new item's raw materials that are salvaged (minimum 8 hours).</p>
<p><strong>Raw Magic Item Materials:</strong> Anyone with an item creation feat can salvage the raw materials from magic items for the creation of new ones or repair of existing ones. You must have the item creation feat required for that item to salvage its raw materials. Each attempt requires destroying a magic item and 8 hours of work. If the item's price is 500 gp or less, you can salvage its materials in only 2 hours. A successful Craft or Spellcraft check with a DC equal to 10 + the item's caster level yields raw materials worth two-thirds the creation cost of the destroyed item (one-third the market price). If you fail the skill check by 4 or less, the item is destroyed but the materials can still be salvaged in a future attempt. If you fail the skill check by 5 or more, the item is destroyed and the materials are ruined. Salvaged raw materials can be used to create or repair any item made of similar materials or that shares any of the creation requirements as the original. Including the majority of the materials allows you to automatically meet any construction requirements of a new item that the salvaged item also required and reduces the construction or repair time by the proportion of the new item's construction materials that are salvaged (with the usual minimum creation time). Spellbooks and formula books can be salvaged for magic inks and paper usable in formula books, scrolls, and spellbooks.</p>
<h3 id="skill-craft_any-technology" data-hash-target>Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link></p>
<p>Those who wish to construct or repair technological items use the Craft (mechanical) skill in conjunction with the technological item crafting feats. Without the <Link to="/feat/technologist">Technologist</Link> feat, Craft (mechanical) can still be used to craft less advanced forms of technology such as gears, hinges, and pulleys. Note that in the campaign setting, NPCs with the means of crafting technological items are extremely rare, and it is not assumed that PCs have access to such resources. GMs are encouraged to discuss such considerations with their players before allowing technological crafting into the game.</p>
<h3 id="skill-craft_any-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 83</Link><br/>With sufficient ranks in Craft, you earn the following.</p>
<p><strong>5 Ranks:</strong> When determining your weekly progress, double the result of your Craft check before multiplying the result by the item's DC.<br/><strong>10 Ranks:</strong> You do not ruin any of your raw materials unless you fail a check by 10 or more.<br/><strong>15 Ranks:</strong> When you determine your progress, the result of your check is how much work you complete each day in silver pieces.<br/><strong>20 Ranks:</strong> You can craft magic armor, magic weapons, magic rings, and wondrous items that fall under your category of Craft using the normal Craft rules.</p>
</>};
const _diplomacy = {hasJL:true,title: "Diplomacy", jsx: <><div className="jumpList" id="skill-diplomacy-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-diplomacy-gather-information">Gather Information</InnerLink></li><li><InnerLink toTop to="skill-diplomacy-calling-for-the-guards">Calling for the Guards</InnerLink></li><li><InnerLink toTop to="skill-diplomacy-directing-crowds">Directing Crowds</InnerLink></li><li><InnerLink toTop to="skill-diplomacy-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-diplomacy-hypnotism">Hypnotism</InnerLink></li><li><InnerLink toTop to="skill-diplomacy-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-diplomacy-diplomacy">Diplomacy</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 93</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> You can change the initial attitudes of non-player characters with a successful check. The DC of this check depends on the creature's starting attitude toward you, adjusted by its Charisma modifier. If you succeed, the character's attitude toward you is improved by one step. For every 5 by which your check result exceeds the DC, the character's attitude toward you increases by one additional step. A creature's attitude cannot be shifted more than two steps up in this way, although the GM can override this rule in some situations. If you fail the check by 4 or less, the character's attitude toward you is unchanged. If you fail by 5 or more, the character's attitude toward you is decreased by one step.</p>
<p>You cannot use Diplomacy against a creature that does not understand you or has an Intelligence of 3 or less. Diplomacy is generally ineffective in combat and against creatures that intend to harm you or your allies in the immediate future. Any attitude shift caused through Diplomacy generally lasts for 1d4 hours but can last much longer or shorter depending upon the situation (GM discretion).</p>
<ScrollContainer id="skill-diplomacy--table-0"><table>
<thead>
<tr>
<th>Starting Attitude</th>
<th>Diplomacy DC</th>
</tr>
</thead>
<tbody><tr>
<td>Hostile</td>
<td>25 + creature's Cha modifier</td>
</tr>
<tr>
<td>Unfriendly</td>
<td>20 + creature's Cha modifier</td>
</tr>
<tr>
<td>Indifferent</td>
<td>15 + creature's Cha modifier</td>
</tr>
<tr>
<td>Friendly</td>
<td>10 + creature's Cha modifier</td>
</tr>
<tr>
<td>Helpful</td>
<td>0 + creature's Cha modifier</td>
</tr>
</tbody></table></ScrollContainer>
<p>If a creature's attitude toward you is at least indifferent, you can make requests of the creature. This is an additional Diplomacy check, using the creature's current attitude to determine the base DC, with one of the following modifiers. Once a creature's attitude has shifted to helpful, the creature gives in to most requests without a check, unless the request is against its nature or puts it in serious peril. Some requests automatically fail if the request goes against the creature's values or its nature, subject to GM discretion.</p>
<ScrollContainer id="skill-diplomacy--table-1"><table>
<thead>
<tr>
<th>Request</th>
<th>Diplomacy DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Give simple advice or directions</td>
<td>-5</td>
</tr>
<tr>
<td>Give detailed advice</td>
<td>+0</td>
</tr>
<tr>
<td>Give simple aid</td>
<td>+0</td>
</tr>
<tr>
<td>Reveal an unimportant secret</td>
<td>+5</td>
</tr>
<tr>
<td>Give lengthy or complicated aid</td>
<td>+5</td>
</tr>
<tr>
<td>Give dangerous aid</td>
<td>+10</td>
</tr>
<tr>
<td>Reveal an important secret</td>
<td>+10 or more</td>
</tr>
<tr>
<td>Give aid that could result in punishment</td>
<td>+15 or more</td>
</tr>
<tr>
<td>Additional requests</td>
<td>+5 per request</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Using Diplomacy to influence a creature's attitude takes 1 minute of continuous interaction. Making a request of a creature takes 1 or more rounds of interaction, depending upon the complexity of the request.</p>
<p><strong>Try Again:</strong> You cannot use Diplomacy to influence a given creature's attitude more than once in a 24-hour period. If a request is refused, the result does not change with additional checks, although other requests might be made.</p>
<p><strong>Special:</strong> If you have the <Link to="/feat/persuasive">Persuasive</Link> feat, you gain a bonus on Diplomacy checks.</p>
<h3 id="skill-diplomacy-gather-information" data-hash-target>Gather Information</h3>
<p>You can also use Diplomacy to gather information about a specific topic or individual. To do this, you must spend at least 1d4 hours canvassing people at local taverns, markets, and gathering places. The DC of this check depends on the obscurity of the information sought, but for most commonly known facts or rumors it is 10. For obscure or secret knowledge, the DC might increase to 20 or higher. The GM might rule that some topics are simply unknown to common folk.</p>
<p><strong>Action:</strong> Using Diplomacy to gather information takes 1d4 hours of work searching for rumors and informants.</p>
<p><strong>Try Again:</strong> You can retry Diplomacy checks made to gather information.</p>
<h3 id="skill-diplomacy-calling-for-the-guards" data-hash-target>Calling for the Guards</h3>
<p><strong>Sources</strong> <Link to="/source/gamemastery_guide">GameMastery Guide pg. 204</Link></p>
<p>It's inevitable - sooner or later, the PCs will want to call upon the town guard or cause a situation where citizens do so instead. Calling for the guard requires a Diplomacy check modified by the settlement's law modifier. It's only a DC 5 check to call for the guard; with a success, the guards generally arrive on the scene in 1d6 minutes. Every 5 points by which the Diplomacy check exceeds DC 5 (rounding down) reduces the arrival time by 1 minute; if this reduces their arrival time below 1 minute, the increments of reduction instead change to 1 round. For example, Ezren is being mugged by thugs and calls for the guard. The result of his Diplomacy check is a 23, and the GM rolls a 2 on 1d6 to determine how long it'll be before the guards arrive. Since Ezren rolled three times the amount he needed, the 2-minute wait time is reduced to 8 rounds.</p>
<h3 id="skill-diplomacy-directing-crowds" data-hash-target>Directing Crowds</h3>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 436</Link></p>
<p>It takes a DC 15 Diplomacy check or DC 20 Intimidate check to convince a crowd to move in a particular direction, and the crowd must be able to hear or see the character making the attempt. It takes a full-round action to make the Diplomacy check, but only a free action to make the Intimidate check.</p>
<h3 id="skill-diplomacy-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-diplomacy-hypnotism" data-hash-target>Hypnotism</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 195</Link></p>
<p>You use the power of suggestion and subtle psychic influence to alter a subject's mind and dredge up repressed memories.</p>
<p><strong>Check:</strong> You can use hypnotism once per day. The DC of a Diplomacy check to hypnotize is 20 + the subject's Will save modifier against mind-affecting enchantment (compulsion) effects. All uses of hypnotism are mind-affecting enchantment (compulsion) effects.</p>
<p><em>Implant Suggestion:</em> You can implant a suggested course of reasonable action in the mind of a willing creature, along with a defined trigger. To implant a suggestion, you spend 1 minute inducing a trance-like state in the subject, after which you attempt a Diplomacy check. If the check is successful, you implant the course of action, as a <Link to="/spell/suggestion">suggestion</Link> spell with a duration of 10 minutes plus 10 additional minutes for every 1 by which your check result exceeds the DC. If the subject ceases to be willing, it can attempt a Will save once each round to shake off the effects. The save DC is equal to 10 + 1/2 your character level + your Charisma modifier. You can attempt to subtly implant a suggestion in the mind of an unwilling creature with an attitude of indifferent or better after 1 minute of continuous, calm interaction with that creature, but the DC is 10 higher.</p>
<p><em>Recall Memory:</em> You can draw out forgotten memories from a willing subject. You spend 1 minute inducing a calming, trance-like state in the subject, after which you attempt a Diplomacy check. If you succeed at the check, the hypnotized creature can reroll any previously failed Intelligence or Knowledge check to recall the forgotten information with a +4 bonus. The information must be something the subject once knew or was exposed to.</p>
<p><strong>Action:</strong> Hypnotism takes 1 minute of calm interaction.</p>
<p><strong>Try Again:</strong> Yes. You can try to hypnotize the same creature more than once, but only once per day.</p>
<h3 id="skill-diplomacy-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 83</Link><br/>With sufficient ranks in Diplomacy, you earn the following.</p>
<p><strong>5 Ranks:</strong> The time required to influence a creature's attitude or gather information is halved.<br/><strong>10 Ranks:</strong> You can attempt to adjust a creature's attitude in 1 round by taking a -10 penalty. If you take 1 minute to adjust a creature's attitude, add your Charisma bonus to the number of hours that attitude change persists.<br/><strong>15 Ranks:</strong> You can attempt to adjust a creature's attitude in 1 round with no penalty. If you take 1 minute to adjust a creature's attitude, the duration of the resulting change is measured in days, not hours. You can gather information in 10 minutes by taking a -5 penalty.<br/><strong>20 Ranks:</strong> You can attempt to adjust a creature's attitude in 1 round with no penalty. If you take 1 minute to adjust a creature's attitude, the duration of the resulting change is measured in weeks, not hours. You can gather information in 1d4 minutes with no penalty.</p>
</>};
const _disable_device = {hasJL:true,title: "Disable Device", jsx: <><div className="jumpList" id="skill-disable_device-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-disable_device-open-locks">Open Locks</InnerLink></li><li><InnerLink toTop to="skill-disable_device-technology">Technology</InnerLink></li><li><InnerLink toTop to="skill-disable_device-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-disable_device-disable-device">Disable Device</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 94</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> When disarming a trap or other device, the Disable Device check is made secretly, so that you don't necessarily know whether you've succeeded.</p>
<p>The DC depends on how tricky the device is. If the check succeeds, you disable the device. If it fails by 4 or less, you have failed but can try again. If you fail by 5 or more, something goes wrong. If the device is a trap, you trigger it. If you're attempting some sort of sabotage, you think the device is disabled, but it still works normally.</p>
<p>You also can rig simple devices such as saddles or wagon wheels to work normally for a while and then fail or fall off some time later (usually after 1d4 rounds or minutes of use).</p>
<ScrollContainer id="skill-disable_device--table-0"><table>
<thead>
<tr>
<th>Device</th>
<th>Time</th>
<th>Disable Device DC</th>
<th>Example</th>
</tr>
</thead>
<tbody><tr>
<td>Simple</td>
<td>1 round</td>
<td>10</td>
<td>Jam a lock</td>
</tr>
<tr>
<td>Tricky</td>
<td>1d4 rounds</td>
<td>15</td>
<td>Sabotage a wagon wheel</td>
</tr>
<tr>
<td>Difficult</td>
<td>2d4 rounds</td>
<td>20</td>
<td>Disarm a trap, reset a trap</td>
</tr>
<tr>
<td>Extreme</td>
<td>2d4 rounds</td>
<td>25</td>
<td>Disarm a complex trap, cleverly sabotage a clockwork device</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> The amount of time needed to make a Disable Device check depends on the task, as noted above. Disabling a simple device takes 1 round and is a full-round action. A tricky or difficult device requires 1d4 or 2d4 rounds.</p>
<p><strong>Try Again:</strong> You can retry checks made to disable traps if you miss the check by 4 or less.</p>
<p><strong>Special:</strong> If you have the <Link to="/feat/deft_hands">Deft Hands</Link> feat, you get a bonus on Disable Device checks.</p>
<p>A rogue who beats a trap's DC by 10 or more can study the trap, figure out how it works, and bypass it without disarming it. A rogue can rig a trap so her allies can bypass it as well.</p>
<p><strong>Restriction:</strong> Characters with the trapfinding ability (like rogues) can disarm magic traps. A magic trap generally has a DC of 25 + the level of the spell used to create it.</p>
<p>The spells <Link to="/spell/fire_trap">fire trap</Link>, <Link to="/spell/glyph_of_warding">glyph of warding</Link>, <Link to="/spell/symbol_of_death">symbol of death</Link>, and <Link to="/spell/teleportation_circle">teleportation circle</Link> also create traps that a rogue can disarm with a successful Disable Device check. <Link to="/spell/spike_growth">Spike growth</Link> and <Link to="/spell/spike_stones">spike stones</Link>, however, create magic hazards against which Disable Device checks do not succeed. See the individual spell descriptions for details.</p>
<p>If you attempt to leave behind no trace of your tampering, add 5 to the DC.</p>
<h3 id="skill-disable_device-open-locks" data-hash-target>Open Locks</h3>
<p>The DC for opening a lock depends on its quality. If you do not have a set of thieves' tools, these DCs increase by 10.</p>
<ScrollContainer id="skill-disable_device--table-1"><table>
<thead>
<tr>
<th>Lock Quality</th>
<th>Disable Device DC</th>
</tr>
</thead>
<tbody><tr>
<td>Simple</td>
<td>20</td>
</tr>
<tr>
<td>Average</td>
<td>25</td>
</tr>
<tr>
<td>Good</td>
<td>30</td>
</tr>
<tr>
<td>Superior</td>
<td>40</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Attempting to open a lock is a full-round action.</p>
<p><strong>Try Again:</strong> You can retry checks made to open locks.</p>
<h3 id="skill-disable_device-technology" data-hash-target>Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link></p>
<p>With the <Link to="/feat/technologist">Technologist</Link> feat, you can use Disable Device to arm or disarm high-tech explosives or disable electronic triggers or locks. The Technologist feat is not required to disable a high-tech trap or object, but such traps and objects often have significantly higher DCs to disable than low-tech versions of a similar device would have.</p>
<p><em>Arm Explosive:</em> If you possess a detonator, you can arm an explosive weapon as a trap. Connecting a detonator to an explosive requires a successful DC 10 Disable Device check. Failure means that the attempt fails, but you can attempt to arm the explosive again. Failure by 5 or more means the explosive is triggered as the detonator is installed. You can attempt to make an explosive difficult to disarm. To do so, choose a target disarm DC of 15 or higher, with a DC increment of 5. This becomes your target DC to set the explosive as well as the DC to disarm the explosive.</p>
<p><em>Disable Electronic Lock or Trigger:</em> Disabling an electronic lock on a door or an electronic trigger for a trap (not the trap itself) is easier if you use an e-pick-without an e-pick, you take a -5 penalty on such checks.</p>
<p><em>Disarm Explosive:</em> Disarming an explosive requires the character to succeed at a Disable Device check as if disarming a trap. The DC is usually 10, unless the person who set the explosive successfully did so with a higher disarm DC. A failure to disarm an explosive by 5 or more immediately triggers the explosive.</p>
<p><strong>Special:</strong> A character can take 10 when using Disable Device to arm or disarm explosives, but cannot take 20.</p>
<p><strong>Time:</strong> Arming an explosive device takes 1 minute or more, depending on the scope of the job. Disarming an explosive is treated as if the explosive were a complex trap, and takes 2d4 rounds to attempt.</p>
<h3 id="skill-disable_device-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 83</Link><br/>With sufficient ranks in Disable Device, you earn the following.</p>
<p><strong>5 Ranks:</strong> Reduce the time required to disarm a trap or open a lock by taking a -5 penalty on your Disable Device check for each step by which you reduce the time required: 2d4 rounds, 1d4 rounds, 1 round, a standard action, a move action, a swift action.<br/><strong>10 Ranks:</strong> You can disarm magical traps at a -10 penalty even if you lack the trapfinding ability. If you possess the trapfinding ability, when attempting to disable magic traps, you never trigger them, even if you perform the trigger action (such as looking at a <Link to="/spell/symbol_of_death">symbol of death</Link>). If you fail the check, you can still trigger the trap, and you can't use this ability to bypass it.<br/><strong>15 Ranks:</strong> When attacked by a trap, you can attempt a Disable Device check as an immediate action (adding your <Link to="/ability/trap_sense">trap sense</Link> bonus, if any) opposed by the trap's attack roll or its save DC. If you succeed, you take half damage (or no damage if you exceed the DC by at least 10).<br/><strong>20 Ranks:</strong> You halve the penalties for performing a quick disarm as described in the 5 Ranks entry. If you possess the trapfinding ability and accept a -20 penalty while using the ability unlocked at 15 ranks, all nearby allies gain the benefit, and you disable the trap as an immediate action before it can trigger if you exceed the DC by at least 10.</p>
</>};
const _disguise = {hasJL:true,title: "Disguise", jsx: <><div className="jumpList" id="skill-disguise-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-disguise-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-disguise-disguise">Disguise</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 95</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Your Disguise check result determines how good the disguise is, and it is opposed by others' Perception check results. If you don't draw any attention to yourself, others do not get to make Perception checks. If you come to the attention of people who are suspicious (such as a guard who is watching commoners walking through a city gate), it can be assumed that such observers are taking 10 on their Perception checks.</p>
<p>You get only one Disguise check per use of the skill, even if several people make Perception checks against it. The Disguise check is made secretly, so that you can't be sure how good the result is.</p>
<p>The effectiveness of your disguise depends on how much you're changing your appearance. Disguise can be used to make yourself appear like a creature that is one size category larger or smaller than your actual size. This does not change your actual size or reach, should you enter combat while wearing such a disguise.</p>
<ScrollContainer id="skill-disguise--table-0"><table>
<thead>
<tr>
<th>Disguise</th>
<th>Check Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Minor details only</td>
<td>+5</td>
</tr>
<tr>
<td>Disguised as different gender</td>
<td>-2</td>
</tr>
<tr>
<td>Disguised as different race</td>
<td>-2</td>
</tr>
<tr>
<td>Disguised as different age category</td>
<td>-2 per step</td>
</tr>
<tr>
<td>Disguised as different size category</td>
<td>-10</td>
</tr>
</tbody></table></ScrollContainer>
<p>These modifiers are cumulative; use all that apply.</p>
<p>Age category steps are: young (younger than adulthood), adulthood, middle age, old, and venerable.</p>
<ScrollContainer id="skill-disguise--table-1"><table>
<thead>
<tr>
<th>Familiarity</th>
<th>Viewer's Perception Check Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>Recognizes on sight</td>
<td>+4</td>
</tr>
<tr>
<td>Friends or associates</td>
<td>+6</td>
</tr>
<tr>
<td>Close friends</td>
<td>+8</td>
</tr>
<tr>
<td>Intimate</td>
<td>+10</td>
</tr>
</tbody></table></ScrollContainer>
<p>If you are impersonating a particular individual, those who know what that person looks like get a bonus on their Perception checks according to the table below. Furthermore, they are automatically considered to be suspicious of you, so opposed checks are always called for.</p>
<p>An individual makes a Perception check to see through your disguise immediately upon meeting you and again every hour thereafter. If you casually meet a large number of different creatures, each for a short time, check once per day or hour, using an average Perception modifier for the group.</p>
<p><strong>Action:</strong> Creating a disguise requires 1d3 &times; 10 minutes of work. Using magic (such as the <Link to="/spell/disguise_self">disguise self</Link> spell) reduces this action to the time required to cast the spell or trigger the effect.</p>
<p><strong>Try Again:</strong> Yes. You may try to redo a failed disguise, but once others know that a disguise was attempted, they'll be more suspicious.</p>
<p><strong>Special:</strong> Magic that alters your form, such as <Link to="/spell/alter_self">alter self</Link>, <em>disguise self,</em> <Link to="/spell/polymorph">polymorph</Link>, or <Link to="/spell/shapechange">shapechange</Link>, grants you a +10 bonus on Disguise checks (see the individual spell descriptions). Divination magic that allows people to see through illusions (such as true seeing) does not penetrate a mundane disguise, but it can negate the magical component of a magically enhanced one.</p>
<p>You must make a Disguise check when you cast a <Link to="/spell/simulacrum">simulacrum</Link> spell to determine how good the likeness is.</p>
<p>If you have the <Link to="/feat/deceitful">Deceitful</Link> feat, you gain a bonus on Disguise checks.</p>
<h3 id="skill-disguise-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 83</Link><br/>With sufficient ranks in Disguise, you earn the following.</p>
<p><strong>5 Ranks:</strong> You can create a disguise in 1d3 minutes.<br/><strong>10 Ranks:</strong> You can create a disguise in 1d3 rounds. If you take the full normal amount of time to create your disguise, you take no penalty for disguising your gender, race, or age category.<br/><strong>15 Ranks:</strong> You can create a disguise as a full-round action.<br/><strong>20 Ranks:</strong> You can create a disguise as a standard action, or as a full-round action combined with a Bluff check to create a diversion to hide.</p>
</>};
const _escape_artist = {hasJL:true,title: "Escape Artist", jsx: <><div className="jumpList" id="skill-escape_artist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-escape_artist-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-escape_artist-escape-artist">Escape Artist</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 95</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> The table below gives the DCs needed to escape various forms of restraints.</p>
<p><em>Ropes:</em> The DC of your Escape Artist check is equal to the binder's Combat Maneuver Bonus +20.</p>
<p><em>Manacles and Masterwork Manacles:</em> The DC for manacles is set by their construction (see the table below).</p>
<p><em>Tight Space:</em> The DC noted is for getting through a space through which your head fits but your shoulders don't. If the space is long, you may need to make multiple checks. You can't squeeze through a space that your head does not fit through.</p>
<p><em>Grappler:</em> You can make an Escape Artist check in place of a combat maneuver check to escape a grapple or a pin.</p>
<ScrollContainer id="skill-escape_artist--table-0"><table>
<thead>
<tr>
<th>Restraint</th>
<th>Escape Artist DC</th>
</tr>
</thead>
<tbody><tr>
<td>Rope/bindings</td>
<td>Binder's CMB +20</td>
</tr>
<tr>
<td>Net, <Link to="/spell/animate_rope">animate rope</Link>, <Link to="/spell/command_plants">command plants</Link>, <Link to="/spell/control_plants">control plants</Link>, or <Link to="/spell/entangle">entangle</Link></td>
<td>20</td>
</tr>
<tr>
<td><Link to="/spell/snare">Snare</Link> spell</td>
<td>23</td>
</tr>
<tr>
<td>Manacles</td>
<td>30</td>
</tr>
<tr>
<td>Tight space</td>
<td>30</td>
</tr>
<tr>
<td>Masterwork manacles</td>
<td>35</td>
</tr>
<tr>
<td>Grappler</td>
<td>Grappler's CMD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Making an Escape Artist check to escape from rope bindings, manacles, or other restraints (except a grappler) requires 1 minute of work. Escaping from a net or an <em>animate rope, command plants, control plants,</em> or <em>entangle</em> spell is a full-round action. Escaping from a grapple or pin is a standard action. Squeezing through a tight space takes at least 1 minute, maybe longer, depending on how long the space is.</p>
<p><strong>Try Again:</strong> Varies. You can make another check after a failed check if you're squeezing your way through a tight space, making multiple checks. If the situation permits, you can make additional checks, or even take 20, as long as you're not being actively opposed. If the DC to escape from rope or bindings is higher than 20 + your Escape Artist skill bonus, you cannot escape from the bonds using Escape Artist.</p>
<p><strong>Special:</strong> If you have the <Link to="/feat/stealthy">Stealthy</Link> feat, you gain a bonus on Escape Artist checks.</p>
<h3 id="skill-escape_artist-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 84</Link><br/>With sufficient ranks in Escape Artist, you earn the following.</p>
<p><strong>5 Ranks:</strong> If you take a -10 penalty, the time required to use this skill is halved; escaping a grapple or pin is a move action, and escaping a net, <Link to="/spell/animate_rope">animate rope</Link>, <Link to="/spell/command_plants">command plants</Link>, or <Link to="/spell/control_plants">control plants</Link> spell is a standard action.<br/><strong>10 Ranks:</strong> You can attempt to escape from any entangling effect as a standard action with an Escape Artist check (DC = the effect's save DC + 10). You can attempt an Escape Artist check as a move action to set the DC for a creature to escape from ropes or bindings; you gain a +10 bonus on the check if you instead attempt it as a full-round action.<br/><strong>15 Ranks:</strong> You can escape any entangling effect (as above) as a move action. As a standard action, you can attempt an Escape Artist check (DC = the effect's save DC + 20) to suppress a slow or paralysis effect for 1 round, plus 1 round for every 5 by which you exceed the DC. This action counts as purely mental for the purpose of being able to take it while paralyzed.<br/><strong>20 Ranks:</strong> You can escape being entangled, grappled, or pinned as an immediate action with an Escape Artist check (DC = the effect's DC + 10 or the attacker's CMB + 10). You can attempt to suppress a slow or paralysis effect as a standard action (increasing the DC by 10), a move action (increasing the DC by 15), or an immediate action (increasing the DC by 20).</p>
</>};
const _fly = {hasJL:true,title: "Fly", jsx: <><div className="jumpList" id="skill-fly-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-fly-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-fly-fly">Fly</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 96</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> You generally need only make a Fly check when you are attempting a complex maneuver. Without making a check, a flying creature can remain flying at the end of its turn so long as it moves a distance greater than half its speed. It can also turn up to 45 degrees by sacrificing 5 feet of movement, can rise at half speed at an angle of 45 degrees, and can descend at any angle at normal speed. Note that these restrictions only apply to movement taken during your current turn. At the beginning of the next turn, you can move in a different direction than you did the previous turn without making a check. Taking any action that violates these rules requires a Fly check. The difficulty of these maneuvers varies depending upon the maneuver you are attempting, as noted on the following chart.</p>
<ScrollContainer id="skill-fly--table-0"><table>
<thead>
<tr>
<th>Flying Maneuver</th>
<th>Fly DC</th>
</tr>
</thead>
<tbody><tr>
<td>Move less than half speed and remain flying</td>
<td>10</td>
</tr>
<tr>
<td>Hover</td>
<td>15</td>
</tr>
<tr>
<td>Turn greater than 45&deg; by spending 5 feet of movement</td>
<td>15</td>
</tr>
<tr>
<td>Turn 180&deg; by spending 10 feet of movement</td>
<td>20</td>
</tr>
<tr>
<td>Fly up at greater than 45&deg; angle</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Attacked While Flying:</em> You are not considered flat-footed while flying. If you are flying using wings and you take damage while flying, you must make a DC 10 Fly check to avoid losing 10 feet of altitude. This descent does not provoke an attack of opportunity and does not count against a creature's movement.</p>
<p><em>Collision While Flying:</em> If you are using wings to fly and you collide with an object equal to your size or larger, you must immediately make a DC 25 Fly check to avoid plummeting to the ground, taking the appropriate falling damage.</p>
<p><em>Avoid Falling Damage:</em> If you are falling and have the ability to fly, you can make a DC 10 Fly check to negate the damage. You cannot make this check if you are falling due to a failed Fly check or a collision.</p>
<p><em>High Wind Speeds:</em> Flying in high winds adds penalties on your Fly checks as noted on the table below. "Checked" means that creatures of that size or smaller must succeed on a DC 20 Fly check to move at all so long as the wind persists. "Blown away" means that creatures of that size or smaller must make a DC 25 Fly check or be blown back 2d6 &times; 10 feet and take 2d6 points of nonlethal damage. This check must be made every round the creature remains airborne. A creature that is blown away must still make a DC 20 Fly check to move due to also being checked.</p>
<ScrollContainer id="skill-fly--table-1"><table>
<thead>
<tr>
<th>Wind Force</th>
<th>Wind Speed</th>
<th>Checked Size</th>
<th>Blown Away Size</th>
<th>Fly Penalty</th>
</tr>
</thead>
<tbody><tr>
<td>Light</td>
<td>0-10 mph</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Moderate</td>
<td>11-20 mph</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>Strong</td>
<td>21-30 mph</td>
<td>Tiny</td>
<td>-</td>
<td>-2</td>
</tr>
<tr>
<td>Severe</td>
<td>31-50 mph</td>
<td>Small</td>
<td>Tiny</td>
<td>-4</td>
</tr>
<tr>
<td>Windstorm</td>
<td>51-74 mph</td>
<td>Medium</td>
<td>Small</td>
<td>-8</td>
</tr>
<tr>
<td>Hurricane</td>
<td>75-174 mph</td>
<td>Large</td>
<td>Medium</td>
<td>-12</td>
</tr>
<tr>
<td>Tornado</td>
<td>175+ mph</td>
<td>Huge</td>
<td>Large</td>
<td>-16</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> None. A Fly check doesn't require an action; it is made as part of another action or as a reaction to a situation.</p>
<p><strong>Try Again:</strong> Varies. You can attempt a Fly check to perform the same maneuver on subsequent rounds. If you are using wings and you fail a Fly check by 5 or more, you plummet to the ground, taking the appropriate falling damage.</p>
<p><strong>Special:</strong> A spellcaster with a bat familiar gains a +3 bonus on Fly checks.</p>
<p>Creatures with a fly speed treat the Fly skill as a class skill. A creature with a natural fly speed receives a bonus (or penalty) on Fly skill checks depending on its maneuverability: Clumsy -8, Poor -4, Average +0, Good +4, Perfect +8. Creatures without a listed maneuverability rating are assumed to have average maneuverability.</p>
<p>A creature larger or smaller than Medium takes a size bonus or penalty on Fly checks depending on its size category: Fine +8, Diminutive +6, Tiny +4, Small +2, Large -2, Huge -4, Gargantuan -6, Colossal -8.</p>
<p>You cannot take ranks in this skill without a natural means of flight or gliding. Creatures can also take ranks in Fly if they possess a reliable means of flying every day (either through a spell or other special ability).</p>
<p>If you have the <Link to="/feat/acrobatic">Acrobatic</Link> feat, you get a bonus on Fly checks.</p>
<h3 id="skill-fly-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 84</Link><br/>With sufficient ranks in Fly, you earn the following.</p>
<p><strong>5 Ranks:</strong> A successful DC 20 Fly check allows you to make a 45-degree turn without sacrificing movement.<br/><strong>10 Ranks:</strong> A successful DC 30 Fly check allows you to ascend at a 45-degree angle at full speed. You treat falls after midair collisions as 10 feet shorter with a successful DC 10 Fly check, plus 10 feet for every 10 points by which you exceed the DC.<br/><strong>15 Ranks:</strong> A successful DC 30 Fly check allows you to make a 90-degree turn without sacrificing movement, or a 180-degree turn by sacrificing 5 feet of movement. You are considered one size category larger when determining wind effects on Fly checks.<br/><strong>20 Ranks:</strong> A successful DC 35 Fly check allows you to fly straight up at full speed. You are considered two size categories larger when determining wind effects on Fly checks.</p>
</>};
const _handle_animal = {hasJL:true,title: "Handle Animal", jsx: <><div className="jumpList" id="skill-handle_animal-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-handle_animal-handle-an-animal">Handle an Animal</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-push-animal">"Push" Animal</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-teach-trick">Teach Trick</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-companion-tricks">Companion Tricks</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-train-animal">Train Animal</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-rear-wild-animal">Rear Wild Animal</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-milking-venom">Milking Venom</InnerLink></li><li><InnerLink toTop to="skill-handle_animal-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-handle_animal-handle-animal">Handle Animal</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 97</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p><strong>Check:</strong> The DC depends on what you are trying to do.</p>
<ScrollContainer id="skill-handle_animal--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Handle Animal DC</th>
</tr>
</thead>
<tbody><tr>
<td>Handle an animal</td>
<td>10</td>
</tr>
<tr>
<td>"Push" an animal</td>
<td>25</td>
</tr>
<tr>
<td>Teach an animal a trick</td>
<td>15 or 20</td>
</tr>
<tr>
<td>Train an animal for a general purpose</td>
<td>15 or 20</td>
</tr>
<tr>
<td>Rear a wild animal</td>
<td>15 + HD of animal</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Varies.</p>
<p><strong>Try Again:</strong> Yes, except for rearing an animal.</p>
<p><strong>Special:</strong> You can use this skill on a creature with an Intelligence score of 1 or 2 that is not an animal, but the DC of any such check increases by 5. Such creatures have the same limit on tricks known as animals do.</p>
<p>A druid or ranger gains a +4 circumstance bonus on Handle Animal checks involving an animal companion.</p>
<p>In addition, a druid's or ranger's animal companion knows one or more bonus tricks, which don't count against the normal limit on tricks known and don't require any training time or Handle Animal checks to teach.</p>
<p>If you have the <Link to="/feat/animal_affinity">Animal Affinity</Link> feat, you get a bonus on Handle Animal checks.</p>
<p><strong>Untrained:</strong> If you have no ranks in Handle Animal, you can use a Charisma check to handle and push domestic animals, but you can't teach, rear, or train animals. A druid or ranger with no ranks in Handle Animal can use a Charisma check to handle and push her animal companion, but she can't teach, rear, or train other non-domestic animals.</p>
<h3 id="skill-handle_animal-handle-an-animal" data-hash-target>Handle an Animal</h3>
<p>This task involves commanding an animal to perform a task or trick that it knows. If the animal is wounded or has taken any nonlethal damage or ability score damage, the DC increases by 2. If your check succeeds, the animal performs the task or trick on its next action.</p>
<p><strong>Action:</strong> Handling an animal is a move action. (A druid or ranger can handle an animal companion as a free action.)</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Untrained:</strong> If you have no ranks in Handle Animal, you can use a Charisma check to handle domestic animals. (A druid or ranger can handle their animal companion as a Charisma check.)</p>
<h3 id="skill-handle_animal-push-animal" data-hash-target>"Push" Animal</h3>
<p>To "push" an animal means to get it to perform a task or trick that it doesn't know but is physically capable of performing. This category also covers making an animal perform a forced march or forcing it to hustle for more than 1 hour between sleep cycles. If the animal is wounded or has taken any nonlethal damage or ability score damage, the DC increases by 2. If your check succeeds, the animal performs the task or trick on its next action.</p>
<p><strong>Action:</strong> "Pushing" an animal is a full-round action. (A druid or ranger can push an animal companion as a move action.)</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Untrained:</strong> If you have no ranks in Handle Animal, you can use a Charisma check to push domestic animals. (A druid or ranger can push their animal companion as a Charisma check.)</p>
<h3 id="skill-handle_animal-teach-trick" data-hash-target>Teach Trick</h3>
<p>You can teach an animal a specific trick with 1 week of work and a successful Handle Animal check against the indicated DC. An animal with an Intelligence score of 1 can learn a maximum of three tricks, while an animal with an Intelligence score of 2 can learn a maximum of six tricks. Possible tricks (and their associated DCs) include, but are not necessarily limited to, <Link to="/ability/animal_tricks">this list</Link>.</p>
<p><strong>Action:</strong> You must spend four days (half a week, at the rate of 3 hours per day per animal being handled) working toward completion of the task before you attempt the Handle Animal check. If the check fails, your attempt fails and you need not complete the teaching time. If the check succeeds, you must invest the remainder of the time to complete the teaching. If the time is interrupted or the task is not followed through to completion, the attempt automatically fails.</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Untrained:</strong> You can't teach, rear, or train animals.</p>
<h3 id="skill-handle_animal-companion-tricks" data-hash-target>Companion Tricks</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 214</Link><br/><Link to="/ability/companion_tricks">Certain tricks</Link> can only be taught to animal companions, and often require the animal to have specific characteristics. They otherwise follow the rules for teaching tricks.</p>
<h3 id="skill-handle_animal-train-animal" data-hash-target>Train Animal</h3>
<p>Rather than teaching an animal individual tricks, you can simply train it for a general purpose. Essentially, an animal's purpose represents a preselected set of known tricks that fit into a common scheme, such as guarding or heavy labor. The animal must meet all the normal prerequisites for all tricks included in the training package. If the package includes more than three tricks, the animal must have an Intelligence score of 2 or higher.</p>
<p>An animal can be trained for only one general purpose (listed at the end of the <Link to="/ability/animal_tricks">animal tricks</Link> entry), though if the creature is capable of learning additional tricks (above and beyond those included in its general purpose), it may do so. Training an animal for a purpose requires fewer checks than teaching individual tricks does, but no less time.</p>
<p><strong>Action:</strong> You must spend half of the indicated time (at the rate of 3 hours per day per animal being handled) working toward completion of the task before you attempt the Handle Animal check. If the check fails, your attempt to ttrain the animal fails and you need not complete it. If the check succeeds, you must invest the remainder of the time to complete the training. If the time is interrupted or the task is not followed through to completion, the attempt to train the animal automatically fails.</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Untrained:</strong> You can't teach, rear, or train animals.</p>
<h3 id="skill-handle_animal-rear-wild-animal" data-hash-target>Rear Wild Animal</h3>
<p>To rear an animal means to raise a wild creature from infancy so that it becomes domesticated. A handler can rear as many as three creatures of the same kind at once.</p>
<p>A successfully domesticated animal can be taught tricks at the same time it's being raised, or it can be taught as a domesticated animal later.</p>
<p><strong>Action:</strong> You must spend half the rearing time (at the rate of 3 hours per day per animal being handled) working toward completion of the task before you attempt the Handle Animal check. If the check fails, your attempt fails and you need not complete the task. If the check succeeds, you must invest the remainder of the time to complete the rearing. If the time is interrupted or the task is not followed through to completion, the attempt to automatically fails.</p>
<p><strong>Try Again:</strong> No.</p>
<p><strong>Untrained:</strong> You can't teach, rear, or train animals.</p>
<h3 id="skill-handle_animal-milking-venom" data-hash-target>Milking Venom</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 142</Link><br/>Venom can be harvested from a living creature without harming the creature, although the process is dangerous unless the creature has been trained for that specific purpose (see <Link to="/rule/harvesting_poisons">Milk Venom</Link>). For most venomous creatures, this involves stretching a thin canvas over a jar or vial and then coaxing the creature to bite into the canvas before massaging its venom glands, causing the venom to drip from its fangs into the container. Similar methods are used for creatures that deliver venom in other ways, such as with a stinger.</p>
<p>Milking a single dose of poison from a creature takes 10 minutes of work and requires a successful Handle Animal check (DC = 10 + the donor's Hit Dice + the donor's Wisdom modifier). Failure by less than 5 indicates that the venom is not collected, but the handler suffers no other ill effect. Failure by 5 or more indicates that the creature bites, stings, or otherwise injects the handler with its venom. It automatically hits the handler with one of its natural attacks that delivers its poison, and it applies the effects of the attack normally. The creature might continue to attack the handler after doing so, possibly initiating combat. Milking venom from a cooperative intelligent creature doesn't require a Handle Animal check but presents a 5% chance of exposure to the venom.</p>
<p>A creature can produce a number of doses of venom in this way each day equal to its Constitution modifier (minimum 1). A creature that is milked of venom this many times in one day (whether or not the attempts are successful) loses its poison special ability until the next time it rests.</p>
<h3 id="skill-handle_animal-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 84</Link><br/>With sufficient ranks in Handle Animal, you earn the following.</p>
<p><strong>5 Ranks:</strong> Creatures you have trained gain a +2 bonus on Will saves when adjacent to you.<br/><strong>10 Ranks:</strong> Creatures you have trained gain a +2 bonus on Will saves whenever you are within 30 feet and clearly visible. You can teach a trick in 1 day by increasing the DC by 20.<br/><strong>15 Ranks:</strong> You can train an animal to understand your speech (as speak with animals) with 1 week of effort and a successful DC 30 Handle Animal check. Its actions are still limited by its Intelligence. You can teach a trick in 1 day (increasing the DC by 10) or 1 hour (increasing the DC by 20).<br/><strong>20 Ranks:</strong> You can make your speech understandable to any animal for 24 hours with a successful DC 30 Handle Animal check (DC 40 for magical beasts or vermin). You can teach a trick in 1 day, 1 hour (increasing the DC by 10), or 1 minute (increasing the DC by 20).</p>
</>};
const _heal = {hasJL:true,title: "Heal", jsx: <><div className="jumpList" id="skill-heal-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-heal-first-aid-and-poison">First Aid and Poison</InnerLink></li><li><InnerLink toTop to="skill-heal-long-term-care">Long-Term Care</InnerLink></li><li><InnerLink toTop to="skill-heal-treat-mobility-wounds">Treat Mobility Wounds</InnerLink></li><li><InnerLink toTop to="skill-heal-treat-deadly-wounds">Treat Deadly Wounds</InnerLink></li><li><InnerLink toTop to="skill-heal-treat-disease">Treat Disease</InnerLink></li><li><InnerLink toTop to="skill-heal-crafting-antivenom">Crafting Antivenom</InnerLink></li><li><InnerLink toTop to="skill-heal-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-heal-faith-healing">Faith Healing</InnerLink></li><li><InnerLink toTop to="skill-heal-researching-technology">Researching Technology</InnerLink></li><li><InnerLink toTop to="skill-heal-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-heal-heal">Heal</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 98</Link><br/><strong>Associated Skill:</strong> Wisdom<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> The DC and effect of a Heal check depend on the task you attempt.</p>
<ScrollContainer id="skill-heal--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>First aid</td>
<td>15</td>
</tr>
<tr>
<td>Long-term care</td>
<td>15</td>
</tr>
<tr>
<td>Treat wounds from caltrops, spike growth, or spike stones</td>
<td>15</td>
</tr>
<tr>
<td>Treat deadly wounds</td>
<td>20</td>
</tr>
<tr>
<td>Treat poison</td>
<td>Poison's save DC</td>
</tr>
<tr>
<td>Treat disease</td>
<td>Disease's save DC</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Varies</p>
<p><strong>Try Again:</strong> Varies. Generally speaking, you can't try a Heal check again without witnessing proof of the original check's failure.</p>
<p><strong>Special:</strong> A character with the <Link to="/feat/self_sufficient">Self-Sufficient</Link> feat gets a bonus on Heal checks.</p>
<p>A healer's kit gives you a +2 circumstance bonus on Heal checks.</p>
<h3 id="skill-heal-first-aid-and-poison" data-hash-target>First Aid and Poison</h3>
<p>You usually use first aid to save a dying character. If a character has negative hit points and is losing hit points (at the rate of 1 per round, 1 per hour, or 1 per day), you can make him stable. A stable character regains no hit points but stops losing them. First aid also stops a character from losing hit points due to effects that cause bleed.</p>
<p>To treat poison means to tend to a single character who has been poisoned and who is going to take more damage from the poison (or suffer some other effect). Every time the poisoned character makes a saving throw against the poison, you make a Heal check. If your Heal check exceeds the DC of the poison, the character receives a +4 competence bonus on his saving throw against the poison.</p>
<p><strong>Action:</strong> Providing first aid, treating a wound, or treating poison is a standard action.</p>
<p><strong>Try Again:</strong> Generally speaking, you can't try a Heal check again without witnessing proof of the original check's failure. You can always retry a check to provide first aid, assuming the target of the previous attempt is still alive.</p>
<h3 id="skill-heal-long-term-care" data-hash-target>Long-Term Care</h3>
<p>Providing long-term care means treating a wounded person for a day or more. If your Heal check is successful, the patient recovers hit points or ability score points lost to ability damage at twice the normal rate: 2 hit points per level for a full 8 hours of rest in a day, or 4 hit points per level for each full day of complete rest; 2 ability score points for a full 8 hours of rest in a day, or 4 ability score points for each full day of complete rest.</p>
<p>You can tend to as many as six patients at a time. You need a few items and supplies (bandages, salves, and so on) that are easy to come by in settled lands. Giving long-term care counts as light activity for the healer. You cannot give long-term care to yourself.</p>
<p><strong>Action:</strong> Providing long-term care requires 8 hours of light activity.</p>
<h3 id="skill-heal-treat-mobility-wounds" data-hash-target>Treat Mobility Wounds</h3>
<p>A creature wounded by stepping on a caltrop moves at half normal speed. A successful Heal check removes this movement penalty.</p>
<p>A creature wounded by a <Link to="/spell/spike_growth">spike growth</Link> or <Link to="/spell/spike_stones">spike stones</Link> spell must succeed on a Reflex save or take injuries that reduce his speed by one-third. Another character can remove this penalty by taking 10 minutes to dress the victim's injuries and succeeding on a Heal check against the spell's save DC.</p>
<p><strong>Action:</strong> Tending a creature wounded by caltrops or a <em>spike growth</em> or <em>spike stones</em> spell takes 10 minutes of work.</p>
<h3 id="skill-heal-treat-deadly-wounds" data-hash-target>Treat Deadly Wounds</h3>
<p>When treating deadly wounds, you can restore hit points to a damaged creature. Treating deadly wounds restores 1 hit point per level of the creature. If you exceed the DC by 5 or more, add your Wisdom modifier (if positive) to this amount. A creature can only benefit from its deadly wounds being treated within 24 hours of being injured and never more than once per day. You must expend two uses from a healer's kit to perform this task. You take a -2 penalty on your Heal skill check for each use from the healer's kit that you lack.</p>
<p><strong>Action:</strong> Treating deadly wounds takes 1 hour of work.</p>
<h3 id="skill-heal-treat-disease" data-hash-target>Treat Disease</h3>
<p>To treat a disease means to tend to a single diseased character. Every time the diseased character makes a saving throw against disease effects, you make a Heal check. If your Heal check exceeds the DC of the disease, the character receives a +4 competence bonus on his saving throw against the disease.</p>
<p><strong>Action:</strong> Treating a disease takes 10 minutes of work.</p>
<h3 id="skill-heal-crafting-antivenom" data-hash-target>Crafting Antivenom</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 143</Link><br/>While <Link to="/eq-misc/antitoxin">antitoxin</Link> presents a generalized tool for protecting oneself from poison, more specialized antivenoms can provide even greater protection against specific poisons. Creating a dose of antivenom requires a dose of the specific poison that the antivenom is designed to protect against.</p>
<p><strong>Antivenom Effects:</strong> A single dose of antivenom automatically neutralizes the first exposure of the specific poison it is made to combat and provides a +8 alchemical bonus on saving throws against additional exposure to that specific poison; this bonus decreases by 1 every hour, until the effect ends after 8 hours.</p>
<p><strong>Crafting Antivenom:</strong> To create a dose of antivenom, a living creature must first be exposed to a half dose of the poison in question. The creature suffers the poison's effects normally, except the saving throw DC to resist the poison is reduced by 2. In order to be able to produce antivenom, the creature must succeed at the necessary saving throws to be cured of the poison. If the poison's duration expires without the creature being cured, no antivenom can be harvested.</p>
<p>Once the creature has resisted the poison's effects, a viable sample of the creature's blood can be extracted with a successful DC 20 Craft (alchemy) or Heal check. This blood must then be refined to extract the natural antibodies that combat the poison in a process that takes 1 hour and requires a successful Craft (alchemy) check (DC = 5 + the poison's saving throw DC). Success yields 1 dose of antivenom.</p>
<p>Antivenom can also be harvested in the same fashion from a creature that has been afflicted by a full dose of poison, rather than a creature deliberately given a half dose for this purpose. Regardless of how much poison the creature is exposed to, the antibodies in its system can be harvested only for 24 hours after it has recovered from the poison.</p>
<p><strong>Purchasing Antivenom:</strong> Antivenom is not particularly expensive, but because it is highly specialized, it can be difficult to find. A dose of antivenom has a market price equal to half the market price of a dose of the poison in question, but it is treated as though its price were five times the market price of the poison for the purposes of determining its availability in any given settlement. Alternatively, if 1 or more doses of the poison in question can be provided, most alchemists will supply as much antivenom as they can produce from the doses for a fee of 10% of the market price of the poison.</p>
<h3 id="skill-heal-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-heal-faith-healing" data-hash-target>Faith Healing</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 195</Link><br/>You apply esoteric principles to temporarily suspend or remove curses, diseases, and ability damage.</p>
<p><strong>Check:</strong> You can use faith healing once per day. The DC and effect of the Heal check depend on the task you attempt. You can't use faith healing on yourself.</p>
<p><em>Restore Vitality:</em> You suppress <Link to="/rule/ability_damage">ability damage</Link>. You perform a 1-hour ceremony, after which you attempt a Heal check against the DC of the effect that caused the ability damage. If you succeed at the check, you temporarily suppress 1 point of ability damage for 1 hour, plus 1 additional point and hour for every 5 by which the check result exceeds the DC. A creature can benefit from this treatment no more than once per day.</p>
<p><em>Suspend Affliction:</em> You treat one curse, disease, or poison affecting a creature. You enter into a deep trance for 1 hour while you treat the subject, after which you attempt your Heal check. If the check is successful, you suspend the effects of the <Link to="/rule/afflictions">affliction</Link> by 1 hour, plus 1 hour for every 5 by which you exceed the DC. This time doesn't count against the effect's duration (if any). The affliction can still be cured by other means while it's suspended.</p>
<p><em>Remove Affliction:</em> You can attempt to permanently remove an affliction in an 8-hour ceremony, after which you attempt a Heal check. If the result of the check is at least double the DC of the original affliction, the sufferer can attempt another saving throw using the original DC to permanently cast off the effect.</p>
<ScrollContainer id="skill-heal--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Restore vitality</td>
<td>Effect's save DC</td>
</tr>
<tr>
<td>Suspend affliction</td>
<td>Affliction's save DC</td>
</tr>
<tr>
<td>Remove affliction</td>
<td>Double the affliction's save DC</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Restoring vitality and suspending afflictions each require 1 hour in a quiet environment. Permanent removal of afflictions requires 8 hours of heavy activity.</p>
<p><strong>Try Again:</strong> Varies. A creature can't be the subject of faith healing more than once per day. You can't try to permanently remove an affliction again.</p>
<h3 id="skill-heal-researching-technology" data-hash-target>Researching Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link><br/>A character can use the following skills to research technological subjects. Other skills may have research applications as well, subject to GM approval.</p>
<blockquote>
<p><strong>Heal:</strong> Used to identify and understand pharmaceuticals.</p>
</blockquote>
<h3 id="skill-heal-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 84</Link><br/>With sufficient ranks in Heal, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you treat deadly wounds, the target recovers hit points and ability damage as if it had rested for a full day.<br/><strong>10 Ranks:</strong> When you treat deadly wounds, the target recovers hit points as if it had rested for a full day with long-term care.<br/><strong>15 Ranks:</strong> When you treat deadly wounds, the creature recovers hit point and ability damage as if it had rested for 3 days.<br/><strong>20 Ranks:</strong> When you treat deadly wounds, the target recovers hit point and ability damage as if it had rested for 3 days with long-term care.</p>
</>};
const _intimidate = {hasJL:true,title: "Intimidate", jsx: <><div className="jumpList" id="skill-intimidate-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-intimidate-coercion">Coercion</InnerLink></li><li><InnerLink toTop to="skill-intimidate-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-intimidate-intimidate">Intimidate</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> You can use Intimidate to force an opponent to act friendly toward you for 1d6 &times; 10 minutes with a successful check. The DC of this check is equal to 10 + the target's Hit Dice + the target's Wisdom modifier. If successful, the target gives you the information you desire, takes actions that do not endanger it, or otherwise offers limited assistance. After the Intimidate expires, the target treats you as unfriendly and may report you to local authorities. If you fail this check by 5 or more, the target attempts to deceive you or otherwise hinder your activities.</p>
<p><em>Demoralize:</em> You can use this skill to cause an opponent to become shaken for a number of rounds. The DC of this check is equal to 10 + the target's Hit Dice + the target's Wisdom modifier. If you are successful, the target is shaken for 1 round. This duration increases by 1 round for every 5 by which you beat the DC. You can only threaten an opponent in this way if they are within 30 feet and can clearly see and hear you. Using demoralize on the same creature only extends the duration; it does not create a stronger fear condition.</p>
<p><strong>Action:</strong> Using Intimidate to change an opponent's attitude requires 1 minute of conversation. Demoralizing an opponent is a standard action.</p>
<p><strong>Try Again:</strong> You can attempt to Intimidate an opponent again, but each additional check increases the DC by +5. This increase resets after 1 hour has passed.</p>
<p><strong>Special:</strong> You also gain a +4 bonus on Intimidate checks if you are larger than your target and a -4 penalty on Intimidate checks if you are smaller than your target.</p>
<p>If you have the <Link to="/feat/persuasive">Persuasive</Link> feat, you get a bonus on Intimidate checks.</p>
<p>A <Link to="/race/half_orc">half-orc</Link> gets a +2 bonus on Intimidate checks.</p>
<h3 id="skill-intimidate-coercion" data-hash-target>Coercion</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 8</Link><br/>Sometimes you need to cow someone into submission for more than just a few hours.</p>
<p><strong>Check:</strong> By spending more time threatening or harassing a target, you can attempt to force a creature to act friendly toward you for 1d6 hours + 1 hour for every 5 points by which you exceed the DC. If you succeed at such a check against the same target at least once per week for 1d6 weeks (without ever failing any Intimidate checks against the target during that time), the duration of the coercion increases to 2d8 days. Coercion is overt, not subtle, and in most cases using coercion against a creature is an evil act.</p>
<p>A coerced target acts as though friendly toward you even when you aren't around, but the aid offered remains grudging at best. The target's true attitude is hostile, and if the target believes it can take an action to hinder you that can't be traced back to it, it's likely to take such opportunities. Creatures attempting to enlist its aid against you can often do so by convincing the target they are able to protect it from your wrath, using the normal Diplomacy rules.</p>
<p><strong>Action:</strong> Coercing a target into acting friendly for hours takes 1d4 &times; 10 minutes. Coercing a target into acting friendly for days requires you to successfully use coercion at least once per week for 1d6 weeks without failing any Intimidate checks against the target during that time.</p>
<p><strong>Try Again:</strong> You can't attempt long-term coercion against the same target again for 1 week.</p>
<h3 id="skill-intimidate-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Intimidate, you earn the following.</p>
<p>An asterisk (*) indicates the total duration cannot exceed 1 round plus 1 round for every 5 by which you exceed the DC.<br/><strong>5 Ranks:</strong> If you exceed the DC to demoralize a target by at least 10, it is frightened for 1 round and shaken thereafter.* A Will save (DC = 10 + your number of ranks in Intimidate) negates the frightened condition, but the target is still shaken, even if it has the stalwart ability.<br/><strong>10 Ranks:</strong> If you exceed the DC to demoralize a target by at least 10, it is panicked for 1 round or frightened for 1d4 rounds (your choice) and shaken thereafter.* A Will save (DC = 10 + your number of ranks in Intimidate) negates the frightened or panicked condition, but the target is still shaken, even if it has the stalwart ability.<br/><strong>15 Ranks:</strong> If you exceed the DC to demoralize a target by at least 20, it is cowering for 1 round or panicked for 1d4 rounds (your choice) and frightened thereafter.* A Will save (DC = 10 + your number of ranks in Intimidate) negates the cowering, panicked, and frightened conditions, but the target is still shaken, even if it has the stalwart ability.<br/><strong>20 Ranks:</strong> If you exceed the DC to demoralize a target by at least 20, it is cowering for 1d4 rounds and panicked thereafter.* A Will save (DC = 10 + your number of ranks in Intimidate) negates the cowering and panicked conditions, but the target is still shaken, even if it has the stalwart ability.</p>
</>};
const _knowledge_all = {hasJL:true,title: "Knowledge", jsx: <><div className="jumpList" id="skill-knowledge_all-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_all-identify-class-features">Identify Class Features</InnerLink></li></ul></div><h2 id="skill-knowledge_all-knowledge">Knowledge</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No  </p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the <Link to="/skill/craft">Craft</Link>, <Link to="/skill/perform">Perform</Link>, and <Link to="/skill/profession">Profession</Link> skills, Knowledge actually encompasses a number of different specialties.</p>
<p>Here are the ten Knowledge subskills and what they typically cover:</p>
<ul>
<li><strong className="hl"><Link to="/skill/knowledge_arcana">Arcana:</Link></strong> ancient mysteries, magic traditions, arcane symbols, constructs, dragons, magical beasts, arcane and psychic spellcasting, metamagic feats</li>
<li><strong className="hl"><Link to="/skill/knowledge_dungeoneering">Dungeoneering:</Link></strong> aberrations, caverns, oozes, spelunking</li>
<li><strong className="hl"><Link to="/skill/knowledge_engineering">Engineering:</Link></strong> buildings, aqueducts, bridges, fortifications</li>
<li><strong className="hl"><Link to="/skill/knowledge_geography">Geography:</Link></strong> lands, terrain, climate, people</li>
<li><strong className="hl"><Link to="/skill/knowledge_history">History:</Link></strong> wars, colonies, migrations, founding of cities</li>
<li><strong className="hl"><Link to="/skill/knowledge_local">Local:</Link></strong> legends, personalities, inhabitants, laws, customs, traditions, humanoids, classes that do not grant spells, feats that are not teamwork or metamagic feats</li>
<li><strong className="hl"><Link to="/skill/knowledge_nature">Nature:</Link></strong> animals, fey, monstrous humanoids, plants, seasons and cycles, weather, vermin, classes with access to the druid or ranger spell list</li>
<li><strong className="hl"><Link to="/skill/knowledge_nobility">Nobility:</Link></strong> lineages, heraldry, personalities, royalty, teamwork feats</li>
<li><strong className="hl"><Link to="/skill/knowledge_planes">Planes:</Link></strong> the Inner Planes, the Outer Planes, the Astral Plane, the Ethereal Plane, outsiders, planar magic</li>
<li><strong className="hl"><Link to="/skill/knowledge_religion">Religion:</Link></strong> gods and goddesses, mythic history, ecclesiastic tradition, holy symbols, undead, classes that grant divine spells</li>
</ul>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_all-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how <Link to="/skill/spellcraft">Spellcraft</Link> can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<p>The Knowledge skill required to identify a feat or class feature varies depending on the type of feat or class feature to be identified.</p>
</>};
const _knowledge_arcana = {hasJL:true,title: "Knowledge (arcana)", jsx: <><div className="jumpList" id="skill-knowledge_arcana-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_arcana-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-knowledge_arcana-phrenology">Phrenology</InnerLink></li><li><InnerLink toTop to="skill-knowledge_arcana-identify-class-features">Identify Class Features</InnerLink></li><li><InnerLink toTop to="skill-knowledge_arcana-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_arcana-knowledge-arcana">Knowledge (arcana)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties.</p>
<p><em>Arcana</em> typically covers the following: ancient mysteries, magic traditions, arcane symbols, constructs, dragons, magical beasts</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Arcana).</p>
<ScrollContainer id="skill-knowledge_arcana--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify auras while using detect magic</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Identify a spell effect that is in place</td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Identify materials manufactured by magic</td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Identify a spell that just targeted you</td>
<td>25 + spell level</td>
</tr>
<tr>
<td>Identify the spells cast using a specific material component</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (non-robot constructs, dragons, magical beasts)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_arcana-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-knowledge_arcana-phrenology" data-hash-target>Phrenology</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 196</Link><br/>You examine the skulls of intelligent creatures to analyze the subjects' psychological attributes, since the shape of the brain influences the shape of the skull.</p>
<p><strong>Check:</strong> Once per day, you can use your fingertips to examine the shape of a creature's skull. Reading a creature's skull requires 1 minute of concentration and scrutiny while you physically manipulate the skull. This technique can be used on a willing, helpless, or paralyzed creature, or on decomposed remains (as long as the skull is intact or can be pieced together). This skill can't be used on creatures without discernible skulls, such as constructs, elementals, oozes, or plants. After the minute is up, the GM attempts a secret Knowledge (arcana) check. The DC is typically modified by the subject's Hit Dice. With a single check, you determine all the information whose DC you meet. For instance, if you had a result of 22 when examining a creature with 2 HD, you would learn that creature's race and age, gender, alignment, and class, but not its level or HD.</p>
<ScrollContainer id="skill-knowledge_arcana--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Determine race and age</td>
<td>10</td>
</tr>
<tr>
<td>Determine gender</td>
<td>15</td>
</tr>
<tr>
<td>Determine alignment</td>
<td>15 + creature's HD</td>
</tr>
<tr>
<td>Determine class</td>
<td>20 + creature's HD</td>
</tr>
<tr>
<td>Determine level or HD</td>
<td>25 + creature's HD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> A dead creature's skull uses the HD the creature had when alive.</p>
<p><strong>Action:</strong> Reading a creature's cranium requires 1 minute of uninterrupted study.</p>
<p><strong>Try Again:</strong> Yes. Reexamining a skull may provide new insights. You can attempt only one such check per day.</p>
<h3 id="skill-knowledge_arcana-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how Spellcraft can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<p>The Knowledge skill required to identify a feat or class feature varies depending on the type of feat or class feature to be identified and is outlined in the table below, along with the DCs of such skill checks.</p>
<ScrollContainer id="skill-knowledge_arcana--table-2"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a class feature from a class that grants arcane or psychic spells</td>
<td>10 + class level when feature is granted</td>
</tr>
<tr>
<td>Identify a metamagic feat being used</td>
<td>10 + character's level</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> For class features, add 10 to the DC if the class is a prestige class.</p>
<h3 id="skill-knowledge_arcana-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_dungeoneering = {hasJL:true,title: "Knowledge (dungeoneering)", jsx: <><div className="jumpList" id="skill-knowledge_dungeoneering-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_dungeoneering-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_dungeoneering-knowledge-dungeoneering">Knowledge (dungeoneering)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Dungeoneering</em> typically covers the following: aberrations, caverns, oozes, spelunking</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Dungeoneering).</p>
<ScrollContainer id="skill-knowledge_dungeoneering--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify underground hazard</td>
<td>15 + hazard's CR</td>
</tr>
<tr>
<td>Identify mineral, stone, or metal</td>
<td>10</td>
</tr>
<tr>
<td>Determine slope</td>
<td>15</td>
</tr>
<tr>
<td>Determine depth underground</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (aberrations, oozes)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_dungeoneering-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_engineering = {hasJL:true,title: "Knowledge (engineering)", jsx: <><div className="jumpList" id="skill-knowledge_engineering-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_engineering-researching-technology">Researching Technology</InnerLink></li><li><InnerLink toTop to="skill-knowledge_engineering-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_engineering-knowledge-engineering">Knowledge (engineering)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Engineering</em> typically covers the following: buildings, aqueducts, bridges, fortifications</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<ScrollContainer id="skill-knowledge_engineering--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify dangerous construction</td>
<td>10</td>
</tr>
<tr>
<td>Determine a structure's style or age</td>
<td>15</td>
</tr>
<tr>
<td>Determine a structure's weakness</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (robots)</td>
<td>10 + monster's CR</td>
</tr>
<tr>
<td>Identify the properties of a technological item</td>
<td>15 + item's Craft DC</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_engineering-researching-technology" data-hash-target>Researching Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link></p>
<p>A character can use the following skills to research technological subjects. Other skills may have research applications as well, subject to GM approval.</p>
<blockquote>
<p><strong>Knowledge (engineering):</strong> This is the most important skill with regard to technological subjects. Knowledge (engineering) can be used to identify a robot's abilities and weaknesses. Knowledge (engineering) is also used to identify and understand unknown technological objects in a similar manner to how Spellcraft is used to identify the properties of a magic item. The DC to correctly identify and understand an unknown technological object is equal to the object's Craft DC. An object with a Craft DC of 15 or less can be automatically identified and understood by someone trained in Knowledge (engineering) who also has the <Link to="/feat/technologist">Technologist</Link> feat.</p>
</blockquote>
<h3 id="skill-knowledge_engineering-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_geography = {hasJL:true,title: "Knowledge (geography)", jsx: <><div className="jumpList" id="skill-knowledge_geography-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_geography-researching-technology">Researching Technology</InnerLink></li><li><InnerLink toTop to="skill-knowledge_geography-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_geography-knowledge-geography">Knowledge (geography)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Geography</em> typically covers the following: lands, terrain, climate, people</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<ScrollContainer id="skill-knowledge_geography--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a creature's ethnicity or accent</td>
<td>10</td>
</tr>
<tr>
<td>Recognize regional terrain features</td>
<td>15</td>
</tr>
<tr>
<td>Know location of nearest community or noteworthy site</td>
<td>20</td>
</tr>
<tr>
<td>Astronomy</td>
<td>Varies</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_geography-researching-technology" data-hash-target>Researching Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link></p>
<p>A character can use the following skills to research technological subjects. Other skills may have research applications as well, subject to GM approval.</p>
<blockquote>
<p><strong>Knowledge (geography):</strong> Used for astronomy.</p>
</blockquote>
<h3 id="skill-knowledge_geography-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_history = {hasJL:true,title: "Knowledge (history)", jsx: <><div className="jumpList" id="skill-knowledge_history-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_history-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_history-knowledge-history">Knowledge (history)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>History</em> typically covers the following: wars, colonies, migrations, founding of cities</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<ScrollContainer id="skill-knowledge_history--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know recent or historically significant event</td>
<td>10</td>
</tr>
<tr>
<td>Determine approximate date of a specific event</td>
<td>15</td>
</tr>
<tr>
<td>Know obscure or ancient historical event</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_history-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_local = {hasJL:true,title: "Knowledge (local)", jsx: <><div className="jumpList" id="skill-knowledge_local-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_local-identify-class-features">Identify Class Features</InnerLink></li><li><InnerLink toTop to="skill-knowledge_local-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_local-knowledge-local">Knowledge (local)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Local</em> typically covers the following: legends, personalities, inhabitants, laws, customs, traditions, humanoids</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Local).</p>
<ScrollContainer id="skill-knowledge_local--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know local laws, rulers, and popular locations</td>
<td>10</td>
</tr>
<tr>
<td>Know a common rumor or local tradition</td>
<td>15</td>
</tr>
<tr>
<td>Know hidden organizations, rulers, and locations</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (humanoids)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_local-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how Spellcraft can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<ScrollContainer id="skill-knowledge_local--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a class feature from classes that do not grant arcane, psychic, or divine spells</td>
<td>10 + class level when feature is granted</td>
</tr>
<tr>
<td>Identify a combat feat being used</td>
<td>10 + character's level</td>
</tr>
<tr>
<td>Identify a non-metamagic, non-teamwork, non-combat feat being used</td>
<td>15 + character's level</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> For class features, add 10 to the DC if the class is a prestige class.</p>
<h3 id="skill-knowledge_local-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_nature = {hasJL:true,title: "Knowledge (nature)", jsx: <><div className="jumpList" id="skill-knowledge_nature-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_nature-identify-class-features">Identify Class Features</InnerLink></li><li><InnerLink toTop to="skill-knowledge_nature-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_nature-knowledge-nature">Knowledge (nature)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Nature</em> typically covers the following: animals, fey, monstrous humanoids, plants, seasons and cycles, weather, vermin</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Nature).</p>
<ScrollContainer id="skill-knowledge_nature--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify natural hazard</td>
<td>15 + hazard's CR</td>
</tr>
<tr>
<td>Identify a common plant or animal</td>
<td>10</td>
</tr>
<tr>
<td>Identify unnatural weather phenomenon</td>
<td>15</td>
</tr>
<tr>
<td>Determine artificial nature of feature</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (animals, fey, monstrous humanoids, plants, vermin)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_nature-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how Spellcraft can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<ScrollContainer id="skill-knowledge_nature--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a class feature from a class with access to the druid or ranger spell list</td>
<td>10 + class level when feature is granted</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> For class features, add 10 to the DC if the class is a prestige class.</p>
<h3 id="skill-knowledge_nature-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_nobility = {hasJL:true,title: "Knowledge (nobility)", jsx: <><div className="jumpList" id="skill-knowledge_nobility-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_nobility-identify-class-features">Identify Class Features</InnerLink></li><li><InnerLink toTop to="skill-knowledge_nobility-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_nobility-knowledge-nobility">Knowledge (nobility)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Nobility</em> typically covers the following: lineages, heraldry, personalities, royalty</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<ScrollContainer id="skill-knowledge_nobility--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know current rulers and their symbols</td>
<td>10</td>
</tr>
<tr>
<td>Know proper etiquette</td>
<td>15</td>
</tr>
<tr>
<td>Know line of succession</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_nobility-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how Spellcraft can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<ScrollContainer id="skill-knowledge_nobility--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a teamwork feat being used</td>
<td>10 + character's level</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="skill-knowledge_nobility-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_planes = {hasJL:true,title: "Knowledge (planes)", jsx: <><div className="jumpList" id="skill-knowledge_planes-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_planes-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_planes-knowledge-planes">Knowledge (planes)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Planes</em> typically covers the following: the Inner Planes, the Outer Planes, the Astral Plane, the Ethereal Plane, outsiders, planar magic</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Planes).</p>
<ScrollContainer id="skill-knowledge_planes--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Know the names of the planes</td>
<td>10</td>
</tr>
<tr>
<td>Recognize current plane</td>
<td>15</td>
</tr>
<tr>
<td>Identify a creature's planar origin</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (outsiders)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_planes-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _knowledge_religion = {hasJL:true,title: "Knowledge (religion)", jsx: <><div className="jumpList" id="skill-knowledge_religion-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-knowledge_religion-identify-class-features">Identify Class Features</InnerLink></li><li><InnerLink toTop to="skill-knowledge_religion-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-knowledge_religion-knowledge-religion">Knowledge (religion)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 99</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p>You are educated in a field of study and can answer both simple and complex questions. Like the Craft, Perform, and Profession skills, Knowledge actually encompasses a number of different specialties. Below are listed typical fields of study.</p>
<p><em>Religion</em> typically covers the following: gods and goddesses, mythic history, ecclesiastic tradition, holy symbols, undead</p>
<p><strong>Check:</strong> Answering a question within your field of study has a DC of 10 (for really easy questions), 15 (for basic questions), or 20 to 30 (for really tough questions).</p>
<p>You can use this skill to identify monsters and their special powers or vulnerabilities. In general, the DC of such a check equals 10 + the monster's CR. For common monsters, such as goblins, the DC of this check equals 5 + the monster's CR. For particularly rare monsters, such as the tarrasque, the DC of this check equals 15 + the monster's CR, or more. A successful check allows you to remember a bit of useful information about that monster. For every 5 points by which your check result exceeds the DC, you recall another piece of useful information.</p>
<p>Below are some specific uses of Knowledge (Religion).</p>
<ScrollContainer id="skill-knowledge_religion--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Recognize a common deity's symbol or clergy</td>
<td>10</td>
</tr>
<tr>
<td>Know common mythology and tenets</td>
<td>15</td>
</tr>
<tr>
<td>Recognize an obscure deity's symbol or clergy</td>
<td>20</td>
</tr>
<tr>
<td>Identify a monster's abilities and weaknesses (undead)</td>
<td>10 + monster's CR</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Usually none. In most cases, a Knowledge check doesn't take an action (but see "Untrained," below).</p>
<p><strong>Try Again:</strong> No. The check represents what you know, and thinking about a topic a second time doesn't let you know something that you never learned in the first place.</p>
<p><strong>Untrained:</strong> You cannot make an untrained Knowledge check with a DC higher than 10. If you have access to an extensive library that covers a specific skill, this limit is removed. The time to make checks using a library, however, increases to 1d4 hours. Particularly complete libraries might even grant a bonus on Knowledge checks in the fields that they cover.</p>
<h3 id="skill-knowledge_religion-identify-class-features" data-hash-target>Identify Class Features</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can identify feats and the class features of various classes with successful Knowledge checks when you observe the feats or class features being used.</p>
<p><strong>Check:</strong> You can attempt a skill check to identify a feat or class feature when you observe it in use, similar to how Spellcraft can be used to identify a spell. The feat or class feature must have some observable effect in order for you to attempt the Knowledge check. For example, you can't see the internal determination of <Link to="/feat/iron_will">Iron Will</Link>, so this ability can't identify that feat. In general, if a feat or class feature creates a noticeable effect (such as the extra attack from using <Link to="/feat/cleave">Cleave</Link>) or has a variable modifier a character must choose to use (such as <Link to="/feat/arcane_strike">Arcane Strike</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, or <Link to="/feat/enlarge_spell">Enlarge Spell</Link>), it can be identified. If it creates a static bonus (such as <Link to="/feat/dodge">Dodge</Link> or <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>), there's no telltale sign to give it away.</p>
<p>The Knowledge skill required to identify a feat or class feature varies depending on the type of feat or class feature to be identified and is outlined in the table below, along with the DCs of such skill checks.</p>
<ScrollContainer id="skill-knowledge_religion--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a class feature from another class that grants divine spells</td>
<td>10 + class level when feature is granted</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> For class features, add 10 to the DC if the class is a prestige class.</p>
<h3 id="skill-knowledge_religion-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Knowledge, you earn the following.</p>
<p><strong>5 Ranks:</strong> When you successfully identify a creature, you gain one additional piece of information for every 5 ranks you possess in that Knowledge skill.<br/><strong>10 Ranks:</strong> When you successfully identify a creature, you gain a +1 competence bonus on attack rolls, opposed ability checks, skill checks, and caster level checks against creatures of that kind (e.g., glabrezu demons, but not other demons or evil outsiders) for 1 minute. This bonus increases by 1 for every 5 ranks beyond 10 you possess in that Knowledge skill.<br/><strong>15 Ranks:</strong> When you fail a Knowledge check, you can reroll the check at a -10 penalty. The competence bonus above also applies to saving throws against exceptional, spell-like, or supernatural abilities used by creatures you identify.<br/><strong>20 Ranks:</strong> Whenever you attempt a Knowledge check, you can roll twice and take the better result.</p>
</>};
const _linguistics = {hasJL:true,title: "Linguistics", jsx: <><div className="jumpList" id="skill-linguistics-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-linguistics-create-or-detect-forgeries">Create or Detect Forgeries</InnerLink></li><li><InnerLink toTop to="skill-linguistics-learning-languages">Learning Languages</InnerLink></li><li><InnerLink toTop to="skill-linguistics-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-linguistics-automatic-writing">Automatic Writing</InnerLink></li><li><InnerLink toTop to="skill-linguistics-technology">Technology</InnerLink></li><li><InnerLink toTop to="skill-linguistics-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-linguistics-linguistics">Linguistics</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 100</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p><strong>Check:</strong> You can decipher writing in an unfamiliar language or a message written in an incomplete or archaic form. The base DC is 20 for the simplest messages, 25 for standard texts, and 30 or higher for intricate, exotic, or very old writing. If the check succeeds, you understand the general content of a piece of writing about one page long (or the equivalent). If the check fails, make a DC 5 Wisdom check to see if you avoid drawing a false conclusion about the text. (Success means that you do not draw a false conclusion; failure means that you do.)</p>
<p>Both the Linguistics check and (if necessary) the Wisdom check are made secretly by the GM, so that you can't tell whether the conclusion you draw is true or false.</p>
<p><strong>Action:</strong> Deciphering a page of ordinary text takes 1 minute (10 consecutive rounds).</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Special:</strong> You must be trained to use this skill, but you can always attempt to read archaic and strange forms of your own racial bonus languages.</p>
<h3 id="skill-linguistics-create-or-detect-forgeries" data-hash-target>Create or Detect Forgeries</h3>
<p>Forgery requires writing materials appropriate to the document being forged. To forge a document on which the handwriting is not specific to a person, you need only to have seen a similar document before, and you gain a +8 bonus on your check. To forge a signature, you need an autograph of that person to copy, and you gain a +4 bonus on the check. To forge a longer document written in the hand of some particular person, a large sample of that person's handwriting is needed.</p>
<ScrollContainer id="skill-linguistics--table-0"><table>
<thead>
<tr>
<th>Condition</th>
<th>Detection Check Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Type of document unknown to reader</td>
<td>-2</td>
</tr>
<tr>
<td>Type of document somewhat known to reader</td>
<td>+0</td>
</tr>
<tr>
<td>Type of document well known to reader</td>
<td>+2</td>
</tr>
<tr>
<td>Handwriting not known to reader</td>
<td>-2</td>
</tr>
<tr>
<td>Handwriting somewhat known to reader</td>
<td>+0</td>
</tr>
<tr>
<td>Handwriting intimately known to reader</td>
<td>+2</td>
</tr>
<tr>
<td>Reader only casually reviews the document</td>
<td>-2</td>
</tr>
<tr>
<td>Document contradicts orders or knowledge</td>
<td>+2</td>
</tr>
</tbody></table></ScrollContainer>
<p>The Linguistics check is made secretly, so that you're not sure how good your forgery is. As with Disguise, you don't make a check until someone examines the work. Your Linguistics check is opposed by the Linguistics check of the person who examines the document to verify its authenticity. The examiner gains modifiers if any of the conditions are listed on the table above.</p>
<p><strong>Action:</strong> Creating a forgery can take anywhere from 1 minute to 1d4 minutes per page. Detecting a forgery using Linguistics takes 1 round of examination per page.</p>
<p><strong>Try Again:</strong> Yes.</p>
<p><strong>Special:</strong> You must be trained to use this skill, but you can also always attempt to detect a forgery.</p>
<h3 id="skill-linguistics-learning-languages" data-hash-target>Learning Languages</h3>
<p><em>Learn a Language:</em> Whenever you put a rank into this skill, you learn to speak and read a new language. Known <Link to="/misc/languages">languages</Link> are listed.</p>
<h3 id="skill-linguistics-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day are accurate.</p>
<h4 id="skill-linguistics-automatic-writing" data-hash-target>Automatic Writing</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 194</Link><br/>You can produce mysterious writing that pertains to the immediate future, either under the influence of enigmatic guiding spirits or by unleashing your subconscious intuition.</p>
<p><strong>Check:</strong> Once per week, you can spend 1 hour posing questions while your hand unconsciously scribbles messages of varying legibility and accuracy. At the end of this hour, you attempt a Linguistics check to decipher the meanings of these messages. If successful, you gain information as though you had used <Link to="/spell/augury">augury</Link>. If you have 10 or more ranks in Linguistics, you can attempt a higher DC check to instead gain information as though you had used <Link to="/spell/divination">divination</Link>. The chance of successfully producing coherent or meaningful writing from any of these effects equals 60% plus 5% for every 1 by which your check result exceeds the DC (to a maximum of 90%). You must choose which DC you'll try to meet before attempting the check. The GM rolls the check and d% roll secretly, so that you can't tell whether the messages are accurate.</p>
<ScrollContainer id="skill-linguistics--table-1"><table>
<thead>
<tr>
<th>Writing Results</th>
<th>Ranks Required</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>As <em>augury</em> spell</td>
<td>1</td>
<td>20</td>
</tr>
<tr>
<td>As <em>divination</em> spell</td>
<td>10</td>
<td>30</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Automatic writing takes 1 hour.</p>
<p><strong>Try Again:</strong> Yes. You can attempt to learn more about a subject, but can still attempt only one check per week.</p>
<h3 id="skill-linguistics-technology" data-hash-target>Technology</h3>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 5</Link><br/>A character with the <Link to="/feat/technologist">Technologist</Link> feat can attempt a Linguistics check to decipher certain complex messages that appear in ruins. Note that many of these messages are written in Androffan. This language is spoken outside only rarely, and even within its borders, some have tried (quite unsuccessfully) to keep it a secret language.</p>
<p><strong>Androffan:</strong> Some robots may also know it (either in addition to Common and Hallit or replacing these languages), depending on the robots' nature. Androffan cannot be chosen as a bonus language for high Intelligence without GM permission.</p>
<h3 id="skill-linguistics-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Linguistics, you earn the following.</p>
<p><strong>5 Ranks:</strong> You can use Linguistics instead of Sense Motive to intercept and interpret secret messages (as the Bluff skill). You gain a +1 insight bonus on Perception and Disable Device checks to detect or disarm written magical traps. This bonus increases by 1 for every 5 ranks beyond 5 you possess in Linguistics.<br/><strong>10 Ranks:</strong> If you succeed at a Linguistics check by at least 10 when examining writing, you can learn the precise meaning rather than general content, and you never draw false conclusions on a failed check. A successful DC 30 Linguistics check reveals the general meaning of speech, a successful DC 35 check reveals 1d4 pieces of specific information, and a successful DC 40 check reveals exact meaning.<br/><strong>15 Ranks:</strong> You can decipher magical writings (as <Link to="/spell/read_magic">read magic</Link>) by succeeding at a Linguistics check (DC = 25 + caster level). If you identify a written magical trap in this way, you gain a +2 circumstance bonus on Disable Device checks to disarm it.<br/><strong>20 Ranks:</strong> You can attempt to decipher magical or nonmagical text at a rate of one page per round. If you instead spend 1 minute per page, roll twice and take the better result.</p>
</>};
const _lore_any = {title: "Lore (any)", jsx: <><h2 id="skill-lore_any-lore-any">Lore (any)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 50</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> Yes<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You possess a specialized area of knowledge, generally narrower than that of a full-fledged scholar. Lore acts as a catch-all skill for information, similar to how Craft handles artisanal skills and Profession handles professional skills. The category of a Lore skill can vary widely from that of another Lore skill. It could be regional (such as a city or country), about a discipline (such as cryptography), or related to a narrow set of people (such as famous musicians). The scope of region-based Lore skills can also refer to specific subcategories, such as taverns in a particular region.</p>
<p>A Lore skill must be narrow - far narrower than the most relevant Knowledge skill. The broader the scope of a given category of Lore, the shallower your knowledge is on that topic. If you know about taverns in a wide region, you know less about each of them than you would if you had Lore in taverns of a specific city. Lore skills normally can't be used to identify monsters the way Knowledge skills can, unless they refer to a specific type of monster (such as <Link to="/monster/owlbear">owlbears</Link> or <Link to="/template/vampire">vampires</Link>). If Lore involves a common, broad category of race or monster, it needs to be more specific. Lore (elves) would be too broad, as would Lore (dragons).</p>
<p><strong>Check:</strong> Lore skills use the same DC scale as Knowledge skills: DC 10 to answer easy questions, DC 15 for basic questions, and DC 20 to 30 for really tough questions. In many cases, Lore can substitute for a Knowledge skill, such as Lore (elven history) filling in for Knowledge (history) in a check involving elves. At the GM's discretion, a player might be able to apply a Lore skill that's only partially related to a subject with a -5 penalty, such as using a Lore skill about a region to recall information about a particular city in that region or applying knowledge of distilling to winemaking.</p>
<p>The table below describes some examples of Lore skills alongside examples of skills that would be too broad. This is by no means a comprehensive list, and the GM has final say on whether a particular Lore skill is appropriate.</p>
<ScrollContainer id="skill-lore_any--table-0"><table>
<thead>
<tr>
<th>Appropriate Lore Skills</th>
<th>Inappropriate Choices</th>
</tr>
</thead>
<tbody><tr>
<td>A particular small city (or smaller settlement)</td>
<td>Settlements</td>
</tr>
<tr>
<td>One district of a large city or metropolis</td>
<td>An entire large city or metropolis</td>
</tr>
<tr>
<td>A particular monastery</td>
<td>Monasteries</td>
</tr>
<tr>
<td>Taverns in a region</td>
<td>Taverns</td>
</tr>
<tr>
<td>Bandits in a region</td>
<td>Banditry</td>
</tr>
<tr>
<td>Famous battles in a region</td>
<td>Famous battles</td>
</tr>
<tr>
<td>The spice trade</td>
<td>Commerce</td>
</tr>
<tr>
<td>Cats</td>
<td>Animals</td>
</tr>
<tr>
<td>Drow matriarchs</td>
<td>Drow</td>
</tr>
<tr>
<td>Dwarven history</td>
<td>Dwarves</td>
</tr>
<tr>
<td>Frost giants</td>
<td>Giants</td>
</tr>
<tr>
<td>Sarenrae</td>
<td>Gods</td>
</tr>
<tr>
<td>Dagon</td>
<td>Demon lords</td>
</tr>
<tr>
<td>Phlegethon</td>
<td>Hell</td>
</tr>
<tr>
<td>Military commanders</td>
<td>Warfare</td>
</tr>
<tr>
<td>Famous singers</td>
<td>Music</td>
</tr>
<tr>
<td>Infernal contracts</td>
<td>Devils</td>
</tr>
<tr>
<td>Evocations</td>
<td>Spells</td>
</tr>
<tr>
<td>Silver and mithral</td>
<td>Metals</td>
</tr>
<tr>
<td>Tea</td>
<td>Beverages</td>
</tr>
<tr>
<td>Trees</td>
<td>Plants</td>
</tr>
<tr>
<td>Tattoos</td>
<td>Art</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Bards:</strong> Lore is treated as a Knowledge skill for the purposes of bardic knowledge and lore master, as well as similar abilities found in other classes, creatures, and archetypes. This applies only to Lore skills in which a character is trained. In other circumstances, use the more relevant Knowledge skill.</p>
</>};
const _perception = {hasJL:true,title: "Perception", jsx: <><div className="jumpList" id="skill-perception-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-perception-underwater-perception">Underwater Perception</InnerLink></li><li><InnerLink toTop to="skill-perception-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-perception-read-aura">Read Aura</InnerLink></li><li><InnerLink toTop to="skill-perception-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-perception-perception">Perception</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 102</Link><br/><strong>Associated Skill:</strong> Wisdom<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Perception has a number of uses, the most common of which is an opposed check versus an opponent's Stealth check to notice the opponent and avoid being surprised. If you are successful, you notice the opponent and can react accordingly. If you fail, your opponent can take a variety of actions, including sneaking past you and attacking you.</p>
<p>Perception is also used to notice fine details in the environment. The DC to notice such details varies depending upon distance, the environment, and how noticeable the detail is. The following table gives a number of guidelines.</p>
<h3 id="skill-perception-details-table">Details Table</h3>
<ScrollContainer id="skill-perception--table-0"><table>
<thead>
<tr>
<th>Detail</th>
<th>Perception DC</th>
</tr>
</thead>
<tbody><tr>
<td>Hear the sound of battle</td>
<td>-10</td>
</tr>
<tr>
<td>Notice the stench of rotting garbage</td>
<td>-10</td>
</tr>
<tr>
<td>Detect the smell of smoke</td>
<td>0</td>
</tr>
<tr>
<td>Hear the details of a conversation</td>
<td>0</td>
</tr>
<tr>
<td>Notice a visible creature</td>
<td>0</td>
</tr>
<tr>
<td>Determine if food is spoiled</td>
<td>5</td>
</tr>
<tr>
<td>Hear the sound of a creature walking</td>
<td>10</td>
</tr>
<tr>
<td>Hear the details of a whispered conversation</td>
<td>15</td>
</tr>
<tr>
<td>Find the average concealed door</td>
<td>15</td>
</tr>
<tr>
<td>Hear the sound of a key being turned in a lock</td>
<td>20</td>
</tr>
<tr>
<td>Find the average secret door</td>
<td>20</td>
</tr>
<tr>
<td>Hear a bow being drawn</td>
<td>25</td>
</tr>
<tr>
<td>Sense a burrowing creature underneath you</td>
<td>25</td>
</tr>
<tr>
<td>Notice a pickpocket</td>
<td>Opposed by Sleight of Hand</td>
</tr>
<tr>
<td>Notice a creature using Stealth</td>
<td>Opposed by Stealth</td>
</tr>
<tr>
<td>Find a hidden trap</td>
<td>Varies by trap</td>
</tr>
<tr>
<td>Identify the powers of a potion through taste</td>
<td>15 + the potion's caster level</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="skill-perception-modifiers-table">Modifiers Table</h3>
<ScrollContainer id="skill-perception--table-1"><table>
<thead>
<tr>
<th>Perception Modifiers</th>
<th>DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Distance to the source, object, or creature</td>
<td>+1/10 feet</td>
</tr>
<tr>
<td>Through a closed door</td>
<td>+5</td>
</tr>
<tr>
<td>Through a wall</td>
<td>+10/foot of thickness</td>
</tr>
<tr>
<td>Favorable conditions</td>
<td>-2</td>
</tr>
<tr>
<td>Unfavorable conditions</td>
<td>+2</td>
</tr>
<tr>
<td>Terrible conditions</td>
<td>+5</td>
</tr>
<tr>
<td>Creature making the check is distracted</td>
<td>+5</td>
</tr>
<tr>
<td>Creature making the check is asleep</td>
<td>+10</td>
</tr>
<tr>
<td>Creature or object is invisible</td>
<td>+20</td>
</tr>
</tbody></table></ScrollContainer>
<p>Favorable and unfavorable conditions depend upon the sense being used to make the check. For example, bright light might decrease the DC of checks involving sight, while torchlight or moonlight might increase the DC. Background noise might increase a DC involving hearing, while competing odors might increase the DC of a check involving scent.</p>
<p>Terrible conditions are unfavorable conditions, but more extreme. For example, candlelight for DCs involving sight, a roaring dragon for DCs involving hearing, and an overpowering stench covering the area for DCs involving scent.</p>
<p><strong>Action:</strong> Most Perception checks are reactive, made in response to observable stimulus. Intentionally searching for stimulus is a move action.</p>
<p><strong>Try Again:</strong> Yes. You can try to sense something you missed the first time, so long as the stimulus is still present.</p>
<p><strong>Special:</strong> Elves, half-elves, gnomes, and halflings receive a +2 racial bonus on Perception checks. Creatures with the <Link to="/umr/scent">scent</Link> special quality have a +8 bonus on Perception checks made to detect a scent. Creatures with the <Link to="/umr/tremorsense">tremorsense</Link> special quality have a +8 bonus on Perception checks against creatures touching the ground and automatically make any such checks within their range. For more on special qualities, see <Link to="/rule/special_abilities_2">Special Abilities</Link>.</p>
<p>A spellcaster with a <Link to="/monster/familiar_hawk">hawk</Link> or <Link to="/monster/familiar_owl">owl</Link> <Link to="/ability/familiar">familiar</Link> gains a +3 bonus on Perception checks. If you have the <Link to="/feat/alertness">Alertness</Link> feat, you get a bonus on Perception checks.</p>
<h3 id="skill-perception-underwater-perception" data-hash-target>Underwater Perception</h3>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 46</Link><br/>Even in clear water, the way light travels underwater makes it harder to see underwater than on land, and water sometimes contains particulates that further obscure vision. Perception checks to see something are always made at a minimum -2 penalty underwater, and often a greater penalty when the water is murky (flowing water, such as in a current or river, is always at least somewhat murky). The maximum distance most creatures can see underwater varies from 40 to 320 feet in clear water (4d8 &times; 10) and from 10 to 80 feet in murky water (1d8 &times; 10). Generally the only way to gain the <Link to="/rule/concealment">concealment</Link> necessary to use Stealth in open water is to swim at least that distance away from an opponent.</p>
<p>Most naturally aquatic creatures either have eyes that are evolved to be exposed to water or have protective transparent eyelids, as do beavers. Surface creatures can use goggles to protect their eyes from water and its particulates; otherwise, they take a -4 penalty on Perception checks to see underwater and risk eye damage or blinding, depending on the water source.</p>
<p>Many undersea denizens, particularly those in deep areas, use scent or tremorsense instead of sight. Scent usually works normally underwater for aquatic creatures (though terrestrial creatures that rely on scent can't follow a trail in the water), but water is more conducive to carrying scents from afar, allowing creatures like <Link to="/monster/shark">sharks</Link> to detect blood up to a mile away with their <Link to="/umr/keen_scent">keen scent</Link> ability. Aquatic tremorsense detects disturbances in the water nearby, even without touching the same solid surface.</p>
<p>Sound travels farther and faster underwater, but that benefit is usually mitigated by the ambient noise of moving water. In situations with particularly little ambient noise (for instance, an area where all wildlife has been killed by a necromantic blight, or a flooded chamber or tank), Perception checks to hear something underwater are made with a +2 bonus.</p>
<h3 id="skill-perception-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-perception-read-aura" data-hash-target>Read Aura</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 197</Link></p>
<p>Your psychic sensitivity allows you to read the psychic and magical auras of creatures and objects.</p>
<p><strong>Check:</strong> Once per day, you can examine the natural aura of a creature or object to discern the subject's alignment, emotions, health, or magic. This requires 10 minutes of concentration, after which you attempt a Perception check. Each time, you must pick one of four auras to read: alignment, emotion, health, or magic. The result of the check applies only to the selected aura. You must be within 30 feet of the subject at all times during the reading. Objects typically have only magic auras, though some also have alignment auras (and intelligent items have emotion auras). You can still attempt to detect a type of aura an object doesn't have, but you get no results. The DC varies depending on the aura, as shown on the table.</p>
<p><em>Read Alignment Aura:</em> You attempt to read the alignment aura, learning the alignment and its strength. An alignment aura's strength depends on the creature's Hit Dice or item's caster level, as noted in the description of the <Link to="/spell/detect_evil">detect evil</Link> spell.</p>
<p><em>Read Emotion Aura:</em> The colors within the target's aura reveal its emotional state. If successful, you learn the target's disposition and its attitude toward any creatures within 30 feet of it. For a number of rounds equal to the amount by which you exceeded the skill check's DC, you gain a +2 circumstance bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks against the target.</p>
<p><em>Read Health Aura:</em> Viewing the flow of vital force, you assess a creature's physical condition. You learn if the creature is unharmed or wounded, if it is poisoned or diseased, and whether it is affected by any of the following conditions: confused, disabled, dying, nauseated, panicked, staggered, stunned, and unconscious. You also learn the total number of points available in its ki pool, grit pool, or similar resource.</p>
<p><em>Read Magic Aura:</em> You attempt to determine the number and power of all magical auras on a target creature or object (see <Link to="/spell/detect_magic">detect magic</Link> to determine a magic aura's power). If the check is successful, you can attempt Knowledge (arcana) or Spellcraft checks to determine the school or identify properties of a magic item, as normal. If the item is affected by <Link to="/spell/magic_aura">magic aura</Link> or a similar spell, you can realize this and determine the actual properties of the item if your check result exceeds the DC by 5 or more. If the spell is of a higher level (such as <Link to="/spell/aura_alteration">aura alteration</Link>), increase this threshold DC by 2 for every spell level beyond 1st.</p>
<ScrollContainer id="skill-perception--table-2"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Read alignment aura</td>
<td>15 + creature's HD or item's caster level</td>
</tr>
<tr>
<td>Read emotion aura</td>
<td>20 + creature's HD or item's caster level (intellignt items only)</td>
</tr>
<tr>
<td>Read health aura</td>
<td>15 + creature's HD</td>
</tr>
<tr>
<td>Read magic aura</td>
<td>20 + creature's HD or item's caster level</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Reading an aura requires 10 minutes of study.</p>
<p><strong>Try Again:</strong> Yes. You can read a creature or object's aura more than once, whether you read the same aura or a different one. You can still attempt only one skill check to read an aura per day.</p>
<h3 id="skill-perception-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Perception, you earn the following.</p>
<p><strong>5 Ranks:</strong> You remain alert to sounds even in your sleep, and the normal DC increase to Perception checks when you are sleeping is halved. The distance modifier on the DC of Perception checks you attempt is reduced to +1 per 20 feet.<br/><strong>10 Ranks:</strong> The distance modifier on the DC of Perception checks you attempt is reduced to +1 per 30 feet. In addition, you gain a +5 bonus on Perception checks to notice or locate an invisible creature or object.<br/><strong>15 Ranks:</strong> You remain alert to sounds even in your sleep, and the normal DC increase to Perception checks when you are sleeping doesn't apply to you. The distance modifier on the DC of your Perception checks is reduced to +1 per 40 feet.<br/><strong>20 Ranks:</strong> You gain a +10 bonus on Perception checks to notice invisible creatures or objects. The distance modifier on the DC of Perception checks you attempt is reduced to +1 per 60 feet.</p>
</>};
const _perform_any = {hasJL:true,title: "Perform (any)", jsx: <><div className="jumpList" id="skill-perform_any-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-perform_any-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-perform_any-perform-any">Perform (any)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 102</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are skilled at one form of entertainment, from singing to acting to playing an instrument. Like Craft, Knowledge, and Profession, Perform is actually a number of separate skills. You could have several Perform skills, each with its own ranks.</p>
<p>Each of the nine categories of the Perform skill includes a variety of methods, instruments, or techniques, a small sample of which is provided for each category below.</p>
<ul>
<li>Act (comedy, drama, pantomime)</li>
<li>Comedy (buffoonery, limericks, joke-telling)</li>
<li>Dance (ballet, waltz, jig)</li>
<li>Keyboard instruments (harpsichord, piano, pipe organ)</li>
<li>Oratory (epic, ode, storytelling)</li>
<li>Percussion instruments (bells, chimes, drums, gong)</li>
<li>String instruments (fiddle, harp, lute, mandolin)</li>
<li>Wind instruments (flute, pan pipes, recorder, trumpet)</li>
<li>Sing (ballad, chant, melody)</li>
</ul>
<p><strong>Check:</strong> You can impress audiences with your talent and skill in your chosen performance type.</p>
<ScrollContainer id="skill-perform_any--table-0"><table>
<thead>
<tr>
<th>Perform DC</th>
<th>Performance</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>Routine performance. Trying to earn money by playing in public is akin to begging. You can earn 1d10 cp/day.</td>
</tr>
<tr>
<td>15</td>
<td>Enjoyable performance. In a prosperous city, you can earn 1d10 sp/day.</td>
</tr>
<tr>
<td>20</td>
<td>Great performance. In a prosperous city, you can earn 3d10 sp/day. In time, you may be invited to join a professional troupe and may develop a regional reputation.</td>
</tr>
<tr>
<td>25</td>
<td>Memorable performance. In a prosperous city, you can earn 1d6 gp/day. In time, you may come to the attention of noble patrons and develop a national reputation.</td>
</tr>
<tr>
<td>30</td>
<td>Extraordinary performance. In a prosperous city, you can earn 3d6 gp/day. In time, you may draw attention from distant patrons, or even from extraplanar beings.</td>
</tr>
</tbody></table></ScrollContainer>
<p>A masterwork musical instrument gives you a +2 circumstance bonus on all Perform checks that involve its use.</p>
<p><strong>Action:</strong> Varies. Trying to earn money by playing in public requires anywhere from an evening's work to a full day's performance. The bard's special Perform-based abilities are described in that class's description.</p>
<p><strong>Try Again:</strong> Yes. Retries are allowed, but they don't negate previous failures, and an audience that has been unimpressed in the past is likely to be prejudiced against future performances. (Increase the DC by 2 for each previous failure.)</p>
<p><strong>Special:</strong> A bard must have ranks in specific Perform categories to use some of his Bardic Performance abilities.</p>
<h3 id="skill-perform_any-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 85</Link><br/>With sufficient ranks in Perform, you earn the following.</p>
<p><strong>5 Ranks:</strong> Whenever you attempt a Bluff, Diplomacy, Handle Animal, or Intimidate check, you can attempt a DC 20 Perform check to gain a +2 circumstance bonus on the check.<br/><strong>10 Ranks:</strong> Whenever you cast a spell with the emotion or language-dependent descriptor, you can attempt a DC 25 Perform check to increase the save DC by 1.<br/><strong>15 Ranks:</strong> Whenever you cast a spell with the emotion or language-dependent descriptor, you can attempt a DC 30 Perform check to increase your caster level by 1. You must choose whether to use this ability or the ability unlocked at 10 ranks when casting the spell.<br/><strong>20 Ranks:</strong> Choose one of the following skills: Bluff, Diplomacy, or Intimidate. When you attempt a skill check with that skill, you can also attempt a Perform check and use the better result to determine the success of that skill check.</p>
</>};
const _profession_any = {hasJL:true,title: "Profession (any)", jsx: <><div className="jumpList" id="skill-profession_any-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-profession_any-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-profession_any-profession-any">Profession (any)</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 103</Link><br/><strong>Associated Skill:</strong> Wisdom<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p>You are skilled at a specific job. Like Craft, Knowledge, and Perform, Profession is actually a number of separate skills. You could have several Profession skills, each with its own ranks. While a Craft skill represents ability in creating an item, a Profession skill represents an aptitude in a vocation requiring a broader range of less specific knowledge. The most common Profession skills are architect, baker, barrister, brewer, butcher, clerk, cook, courtesan, driver, engineer, farmer, fisherman, gambler, gardener, herbalist, innkeeper, librarian, merchant, midwife, miller, miner, porter, sailor, scribe, shepherd, stable master, soldier, tanner, trapper, and woodcutter.</p>
<p><strong>Check:</strong> You can earn half your Profession check result in gold pieces per week of dedicated work. You know how to use the tools of your trade, how to perform the profession's daily tasks, how to supervise helpers, and how to handle common problems. You can also answer questions about your Profession. Basic questions are DC 10, while more complex questions are DC 15 or higher.</p>
<p><strong>Action:</strong> Not applicable. A single check generally represents a week of work.</p>
<p><strong>Try Again:</strong> Varies. An attempt to use a Profession skill to earn income cannot be retried. You are stuck with whatever weekly wage your check result brought you. Another check may be made after a week to determine a new income for the next period of time. An attempt to accomplish some specific task can usually be retried.</p>
<p><strong>Untrained:</strong> Untrained laborers and assistants (that is, characters without any ranks in Profession) earn an average of 1 silver piece per day.</p>
<p><strong>Special:</strong> A gnome gets a +2 bonus on a Craft or Profession skill of her choice.</p>
<h3 id="skill-profession_any-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Profession, you earn the following.</p>
<p><strong>5 Ranks:</strong> When using Profession checks to earn income, you earn gold pieces equal to the result of your check each week.<br/><strong>10 Ranks:</strong> When attempting Profession checks, you can roll twice and take the better result. When answering questions about your Profession, you can always take 10.<br/><strong>15 Ranks:</strong> You can attempt checks to earn income once per day instead of once per week.<br/><strong>20 Ranks:</strong> When attempting Profession checks, you can choose to roll once instead of twice. If you do and the result of the roll is less than 10, replace it with 10. When answering questions about your Profession, you can always take 20.</p>
</>};
const _ride = {hasJL:true,title: "Ride", jsx: <><div className="jumpList" id="skill-ride-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-ride-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-ride-ride">Ride</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 103</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Typical riding actions don't require checks. You can saddle, mount, ride, and dismount from a mount without a problem. The following tasks do require checks.</p>
<ScrollContainer id="skill-ride--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Ride DC</th>
</tr>
</thead>
<tbody><tr>
<td>Guide with knees</td>
<td>5</td>
</tr>
<tr>
<td>Stay in saddle</td>
<td>5</td>
</tr>
<tr>
<td>Fight with a combat-trained mount</td>
<td>10</td>
</tr>
<tr>
<td>Cover</td>
<td>15</td>
</tr>
<tr>
<td>Soft fall</td>
<td>15</td>
</tr>
<tr>
<td>Leap</td>
<td>15</td>
</tr>
<tr>
<td>Spur mount</td>
<td>15</td>
</tr>
<tr>
<td>Control mount in battle</td>
<td>20</td>
</tr>
<tr>
<td>Fast mount or dismount</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Guide with Knees:</em> You can guide your mount with your knees so you can use both hands in combat. Make your Ride check at the start of your turn. If you fail, you can use only one hand this round because you need to use the other to control your mount. This does not take an action.</p>
<p><em>Stay in Saddle:</em> You can react instantly to try to avoid falling when your mount rears or bolts unexpectedly or when you take damage. This usage does not take an action.</p>
<p><em>Fight with a Combat-Trained Mount:</em> If you direct your combat-trained mount to attack in battle, you can still make your own attack or attacks normally. This usage is a free action.</p>
<p><em>Cover:</em> You can react instantly to drop down and hang alongside your mount, using it as cover. You can't attack or cast spells while using your mount as cover. If you fail your Ride check, you don't get the cover benefit. Using this option is an immediate action, but recovering from this position is a move action (no check required).</p>
<p><em>Soft Fall:</em> You negate damage when you fall off a mount. If you fail the Ride check, you take 1d6 points of damage and are prone. This usage does not take an action.</p>
<p><em>Leap:</em> You can get your mount to leap obstacles as part of its movement. If the Ride check to make the leap succeeds, make a check using your Ride modifier or the mount's jump modifier, which is lower, to see how far the creature can jump. If you fail your Ride check, you fall off the mount when it leaps and take the appropriate falling damage (at least 1d6 points). This usage does not take an action but is part of the mount's movement.</p>
<p><em>Spur Mount:</em> You can spur your mount to greater speed with a move action. A successful Ride check increases the mount's speed by 10 feet for 1 round but deals 1d3 points of damage to the creature. You can use this ability every round, but the mount becomes fatigued after a number of rounds equal to its Constitution score. This ability cannot be used on a fatigued mount.</p>
<p><em>Control Mount in Battle:</em> As a move action, you can attempt to control a light horse, pony, heavy horse, or other mount not trained for combat riding while in battle. If you fail the Ride check, you can do nothing else in that round. You do not need to roll for horses or ponies trained for combat.</p>
<p><em>Fast Mount or Dismount:</em> You can attempt to mount or dismount from a mount of up to one size category larger than yourself as a free action, provided that you still have a move action available that round. If you fail the Ride check, mounting or dismounting is a move action. You can't use fast mount or dismount on a mount more than one size category larger than yourself.</p>
<p><strong>Action:</strong> Varies. Mounting or dismounting normally is a move action. Other checks are a move action, a free action, or no action at all, as noted above.</p>
<p><strong>Special:</strong> If you are riding bareback, you take a -5 penalty on Ride checks.</p>
<p>If you have the <Link to="/feat/animal_affinity">Animal Affinity</Link> feat, you get a bonus on Ride checks.</p>
<p>If you use a military saddle you get a +2 circumstance bonus on Ride checks related to staying in the saddle.</p>
<p>Ride is a prerequisite for <Link to="/feat/mounted_archery">Mounted Archery</Link>, <Link to="/feat/mounted_combat">Mounted Combat</Link>, <Link to="/feat/ride_by_attack">Ride-By Attack</Link>, <Link to="/feat/spirited_charge">Spirited Charge</Link>, and <Link to="/feat/trample">Trample</Link>.</p>
<h3 id="skill-ride-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Ride, you earn the following.</p>
<p><strong>5 Ranks:</strong> Your mount gains a +2 bonus on Fortitude saves or Constitution checks to avoid becoming fatigued or exhausted. This bonus increases by 1 for every 5 ranks beyond 5 you possess in Ride.<br/><strong>10 Ranks:</strong> When you spur your mount, its speed is increased by 20 feet, and it gains a +2 bonus on Reflex saves and a +2 dodge bonus to AC.<br/><strong>15 Ranks:</strong> When an opponent targets you or your mount with a bull rush, drag, overrun, reposition, or trip combat maneuver while you are mounted, you can substitute the result of a Ride check in place of your (or your mount's) CMD.<br/><strong>20 Ranks:</strong> When you spur your mount, its speed is increased by 30 feet, and it gains a +4 bonus on Reflex saves and a +4 dodge bonus to AC.</p>
</>};
const _sense_motive = {hasJL:true,title: "Sense Motive", jsx: <><div className="jumpList" id="skill-sense_motive-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-sense_motive-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-sense_motive-prognostication">Prognostication</InnerLink></li><li><InnerLink toTop to="skill-sense_motive-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-sense_motive-sense-motive">Sense Motive</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 104</Link><br/><strong>Associated Skill:</strong> Wisdom<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> A successful check lets you avoid being bluffed (see the <Link to="/skill/bluff">Bluff</Link> skill). You can also use this skill to determine when "something is up" (that is, something odd is going on) or to assess someone's trustworthiness.</p>
<ScrollContainer id="skill-sense_motive--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Sense Motive DC</th>
</tr>
</thead>
<tbody><tr>
<td>Hunch</td>
<td>20</td>
</tr>
<tr>
<td>Sense enchantment</td>
<td>25 or 15</td>
</tr>
<tr>
<td>Discern secret message</td>
<td>Varies</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Hunch:</em> This use of the skill involves making a gut assessment of the social situation. You can get the feeling from another's behavior that something is wrong, such as when you're talking to an impostor. Alternatively, you can get the feeling that someone is trustworthy.</p>
<p><em>Sense Enchantment:</em> You can tell that someone's behavior is being influenced by an enchantment effect even if that person isn't aware of it. The usual DC is 25, but if the target is dominated (see <Link to="/spell/dominate_person">dominate person</Link>), the DC is only 15 because of the limited range of the target's activities.</p>
<p><em>Discern Secret Message:</em> You may use Sense Motive to detect that a hidden message is being transmitted via the Bluff skill. In this case, your Sense Motive check is opposed by the Bluff check of the character transmitting the message. For each piece of information relating to the message that you are missing, you take a -2 penalty on your Sense Motive check. If you succeed by 4 or less, you know that something hidden is being communicated, but you can't learn anything specific about its content. If you beat the DC by 5 or more, you intercept and understand the message. If you fail by 4 or less, you don't detect any hidden communication. If you fail by 5 or more, you might infer false information.</p>
<p><strong>Action:</strong> Trying to gain information with Sense Motive generally takes at least 1 minute, and you could spend a whole evening trying to get a sense of the people around you.</p>
<p><strong>Try Again:</strong> No, though you may make a Sense Motive check for each Bluff check made against you.</p>
<p><strong>Special:</strong> A ranger gains a bonus on Sense Motive checks when using this skill against a <Link to="/ability/favored_enemy">favored enemy</Link>.</p>
<p>If you have the <Link to="/feat/alertness">Alertness</Link> feat, you get a bonus on Sense Motive checks.</p>
<h3 id="skill-sense_motive-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-sense_motive-prognostication" data-hash-target>Prognostication</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 196</Link></p>
<p>You are skilled in means of folk divination. The most common methods are cartomancy (reading cards), cheiromancy (reading a creature's palms), crystallomancy (crystal-gazing), extispicy (reading animal entrails), horoscopy (reading a creature's birth stars), oneiromancy (interpreting dreams), osteomancy (reading cast bones), and pyromancy (reading flames).</p>
<p><strong>Check:</strong> Once per day, you can predict a creature's fortune for the near future. You spend 10 minutes interpreting the divination means at your disposal. The GM then attempts a secret Sense Motive check with a DC modified by the subject's Hit Dice (see the table below). The result of the check can give you basic insight into the subject's nature, including its alignment, class, and levels or Hit Dice, and might reveal clues to the creature's immediate future. Determining the immediate future as an <Link to="/spell/augury">augury</Link> spell has a chance of successfully interpreting meaningful readings equal to 60% plus 5% for every point by which the check result exceeds the DC (to a maximum of 90%). With a single check, you determine all the information whose DC you meet. For instance, if you had a result of 22 when telling the fortune of a creature with 2 HD, you would learn that creature's alignment and class, but not its level, HD, or fortune.</p>
<ScrollContainer id="skill-sense_motive--table-1"><table>
<thead>
<tr>
<th>Task</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Determine alignment</td>
<td>15 + creature's HD</td>
</tr>
<tr>
<td>Determine class</td>
<td>20 + creature's HD</td>
</tr>
<tr>
<td>Determine level or HD</td>
<td>25 + creature's HD</td>
</tr>
<tr>
<td>Determine fortune as <em>augury</em> spell</td>
<td>25 + creature's HD</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Reading a creature's fortune requires 10 minutes of uninterrupted contemplation, and the subject creature must be present.</p>
<p><strong>Try Again:</strong> Yes. You can attempt to read a particular creature's fortune repeatedly, but only once per 24 hours.</p>
<p><strong>Special:</strong> Specially crafted items purchased for the exclusive use of this skill grant a +2 circumstance bonus on Sense Motive checks to prognosticate.</p>
<h3 id="skill-sense_motive-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Sense Motive, you earn the following.</p>
<p><strong>5 Ranks:</strong> If you were aware of an opponent before rolling initiative (such as when you ambush an enemy or negotiations break down into combat, but not when both sides happen upon each other or you are surprised), you can attempt a Sense Motive check as part of your initiative check (DC = 11 + the highest Bluff modifier among your opponents or DC 15, whichever is higher). If you succeed, you gain a +1 bonus on the initiative check, plus an additional +1 for every 5 by which you exceeded the DC.<br/><strong>10 Ranks:</strong> After 1 minute of conversation, you can read a creature's surface thoughts (as <Link to="/spell/detect_thoughts">detect thoughts</Link>) by attempting a Sense Motive check at a -20 penalty opposed by the creature's Bluff check.<br/><strong>15 Ranks:</strong> You can read surface thoughts as above after 1 round. In addition, when attacked, you can attempt a Sense Motive check as an immediate action opposed by your target's attack roll. A successful check grants a +2 insight bonus to your AC against attacks from that specific opponent for 1 minute.<br/><strong>20 Ranks:</strong> You can read surface thoughts as above as a standard action. A successful check to gain an insight bonus to your AC also negates the attack that triggered it.</p>
</>};
const _sleight_of_hand = {hasJL:true,title: "Sleight of Hand", jsx: <><div className="jumpList" id="skill-sleight_of_hand-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-sleight_of_hand-palm-weapon">Palm Weapon</InnerLink></li><li><InnerLink toTop to="skill-sleight_of_hand-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-sleight_of_hand-sleight-of-hand">Sleight of Hand</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 104</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> Yes</p>
<p><strong>Check:</strong> A DC 10 Sleight of Hand check lets you palm a coin-sized, unattended object. Performing a minor feat of legerdemain, such as making a coin disappear, also has a DC of 10 unless an observer is determined to note where the item went.</p>
<p>When you use this skill under close observation, your skill check is opposed by the observer's Perception check. The observer's success doesn't prevent you from performing the action, just from doing it unnoticed.</p>
<p>You can hide a small object (including a light weapon or an easily concealed ranged weapon, such as a dart, sling, or hand crossbow) on your body. Your Sleight of Hand check is opposed by the Perception check of anyone observing you or of anyone frisking you. In the latter case, the searcher gains a +4 bonus on the Perception check, since it's generally easier to find such an object than to hide it. A dagger is easier to hide than most light weapons, and grants you a +2 bonus on your Sleight of Hand check to conceal it. An extraordinarily small object, such as a coin, shuriken, or ring, grants you a +4 bonus on your Sleight of Hand check to conceal it, and heavy or baggy clothing (such as a cloak) grants you a +2 bonus on the check.</p>
<p>Drawing a hidden weapon is a standard action and doesn't provoke an attack of opportunity.</p>
<p>If you try to take something from a creature, you must make a DC 20 Sleight of Hand check. The opponent makes a Perception check to detect the attempt, opposed by the Sleight of Hand check result you achieved when you tried to grab the item. An opponent who succeeds on this check notices the attempt, regardless of whether you got the item. You cannot use this skill to take an object from another creature during combat if the creature is aware of your presence.</p>
<p>You can also use Sleight of Hand to entertain an audience as though you were using the Perform skill. In such a case, your "act" encompasses elements of legerdemain, juggling, and the like.</p>
<ScrollContainer id="skill-sleight_of_hand--table-0"><table>
<thead>
<tr>
<th>Sleight of Hand DC</th>
<th>Task</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>Palm a coin-sized object, make a coin disappear</td>
</tr>
<tr>
<td>20</td>
<td>Lift a small object from a person</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Any Sleight of Hand check is normally a standard action. However, you may perform a Sleight of Hand check as a move action by taking a -20 penalty on the check.</p>
<p><strong>Try Again:</strong> Yes, but after an initial failure, a second Sleight of Hand attempt against the same target (or while you are being watched by the same observer who noticed your previous attempt) increases the DC for the task by 10.</p>
<p><strong>Untrained:</strong> An untrained Sleight of Hand check is simply a Dexterity check. Without actual training, you can't succeed on any Sleight of Hand check with a DC higher than 10, except for hiding an object on your body.</p>
<p><strong>Special:</strong> If you have the <Link to="/feat/deft_hands">Deft Hands</Link> feat, you get a bonus on Sleight of Hand checks.</p>
<h3 id="skill-sleight_of_hand-palm-weapon" data-hash-target>Palm Weapon</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 9</Link><br/>You can draw a light weapon without anyone noticing.</p>
<p><strong>Check:</strong> A successful DC 20 Sleight of Hand check allows you to unobtrusively draw a weapon or other object no larger or longer than a light weapon (which includes potions, but not wands or alchemist bombs). Observers can notice you drawing the item as normal with opposed Perception checks. Creatures carefully observing you gain a +4 bonus on this Perception check.</p>
<h3 id="skill-sleight_of_hand-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Sleight of Hand, you earn the following.</p>
<p><strong>5 Ranks:</strong> When attempting a disarm or steal maneuver, a successful Sleight of Hand check against your target's CMD grants a +2 circumstance bonus on your combat maneuver check.<br/><strong>10 Ranks:</strong> The penalty for attempting a Sleight of Hand check (including drawing a hidden weapon) as a move action is reduced to -10.<br/><strong>15 Ranks:</strong> You can attempt a Sleight of Hand check (including drawing a hidden weapon) as a swift action at a -20 penalty.<br/><strong>20 Ranks:</strong> You take no penalty for using Sleight of Hand as a move action, and take only a -10 penalty when using it as a swift action.</p>
</>};
const _spellcraft = {hasJL:true,title: "Spellcraft", jsx: <><div className="jumpList" id="skill-spellcraft-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-spellcraft-salvaging">Salvaging</InnerLink></li><li><InnerLink toTop to="skill-spellcraft-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-spellcraft-spellcraft">Spellcraft</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 106</Link><br/><strong>Associated Skill:</strong> Intelligence<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Spellcraft is used whenever your knowledge and skill of the technical art of casting a spell or crafting a magic item comes into question. This skill is also used to identify the properties of magic items in your possession through the use of spells such as <Link to="/spell/detect_magic">detect magic</Link> and <Link to="/spell/identify">identify</Link>. The DC of this check varies depending upon the task at hand.</p>
<p><strong>Action:</strong> Identifying a spell as it is being cast requires no action, but you must be able to clearly see the spell as it is being cast, and this incurs the same penalties as a Perception skill check due to distance, poor conditions, and other factors. Learning a spell from a spellbook takes 1 hour per level of the spell (0-level spells take 30 minutes). Preparing a spell from a borrowed spellbook does not add any time to your spell preparation. Making a Spellcraft check to craft a magic item is made as part of the creation process. Attempting to ascertain the properties of a magic item takes 3 rounds per item to be identified and you must be able to thoroughly examine the object.</p>
<p><strong>Retry:</strong> You cannot retry checks made to identify a spell. If you fail to learn a spell from a spellbook or scroll, you must wait at least 1 week before you can try again. If you fail to prepare a spell from a borrowed spellbook, you cannot try again until the next day. When using detect magic or identify to learn the properties of magic items, you can only attempt to ascertain the properties of an individual item once per day. Additional attempts reveal the same results.</p>
<p><strong>Special:</strong> If you are a specialist wizard, you get a +2 bonus on Spellcraft checks made to identify, learn, and prepare spells from your chosen school. Similarly, you take a -5 penalty on similar checks made concerning spells from your opposition schools.</p>
<p>An elf gets a +2 racial bonus on Spellcraft checks to identify the properties of magic items.</p>
<p>If you have the <Link to="/feat/magical_aptitude">Magical Aptitude</Link> feat, you gain a bonus on Spellcraft checks.</p>
<ScrollContainer id="skill-spellcraft--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Spellcraft DC</th>
</tr>
</thead>
<tbody><tr>
<td>Identify a spell as it is being cast</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Learn a spell from a spellbook or scroll</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Prepare a spell from a borrowed spellbook</td>
<td>15 + spell level</td>
</tr>
<tr>
<td>Identify the properties of a magic item using <Link to="/spell/detect_magic">detect magic</Link></td>
<td>15 + item's caster level</td>
</tr>
<tr>
<td>Decipher a scroll</td>
<td>20 + spell level</td>
</tr>
<tr>
<td>Craft a magic item</td>
<td>Varies by item</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="skill-spellcraft-salvaging" data-hash-target>Salvaging</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 134</Link><br/>Foraging is one way to gather resources in the wild, but you can also recycle or repurpose items and gear as well, salvaging materials from items you no longer need or are willing to sacrifice. You can't salvage materials from artifacts, cursed items, or items you can't destroy. Successfully salvaging an item requires a Craft or Spellcraft check and takes an amount of time as indicated in the specific type of salvage operation below.</p>
<p><strong>Potions:</strong> If you have the <Link to="/feat/brew_potion">Brew Potion</Link> feat, you can combine natural catalysts with a potion to salvage it and create a different potion of a lower spell level. Salvaging a potion requires raw magic item materials (these can be salvaged from existing items, as detailed below). To salvage a potion, you must spend 1 hour per spell level of the original potion and then attempt a Craft (alchemy) or Spellcraft check with a DC equal to 15 + 3 &times; the original potion's spell level. If you succeed, you transmute the original potion into a new potion of a spell at least one spell level lower, provided you know the spell in question (it need not be one you can currently cast). If you fail this check by 4 or less, the attempt fails and the catalyst is wasted, but the potion is unharmed. If you fail by 5 or more, the raw materials are lost and the original potion is ruined.</p>
<p><strong>Raw Magic Item Materials:</strong> Anyone with an item creation feat can salvage the raw materials from magic items for the creation of new ones or repair of existing ones. You must have the item creation feat required for that item to salvage its raw materials. Each attempt requires destroying a magic item and 8 hours of work. If the item's price is 500 gp or less, you can salvage its materials in only 2 hours. A successful Craft or Spellcraft check with a DC equal to 10 + the item's caster level yields raw materials worth two-thirds the creation cost of the destroyed item (one-third the market price). If you fail the skill check by 4 or less, the item is destroyed but the materials can still be salvaged in a future attempt. If you fail the skill check by 5 or more, the item is destroyed and the materials are ruined. Salvaged raw materials can be used to create or repair any item made of similar materials or that shares any of the creation requirements as the original. Including the majority of the materials allows you to automatically meet any construction requirements of a new item that the salvaged item also required and reduces the construction or repair time by the proportion of the new item's construction materials that are salvaged (with the usual minimum creation time). Spellbooks and formula books can be salvaged for magic inks and paper usable in formula books, scrolls, and spellbooks.</p>
<p><strong>Costly Spell Components:</strong> Anyone trained in Spellcraft can salvage costly material or focus spell components from magic items. Each attempt requires destroying the item and 8 hours of work. An item can be broken down into a powder that can be used in place of gemstone dust as a material component. Otherwise, the item must have a spell requiring the component in its construction requirements to salvage that component. A successful Spellcraft check with a DC equal to 10 + the item's caster level yields materials usable in place of that spell component worth two-thirds the item's creation cost (one-third its market price). If you fail the check by 4 or less, the item is destroyed without yielding spell components, but you can try to salvage them again. If you fail the check by 5 or more, the item is destroyed and the spell components are ruined.</p>
<h3 id="skill-spellcraft-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Spellcraft, you earn the following.</p>
<p><strong>5 Ranks:</strong> Identifying magic items takes 1 full round, and the time required to learn a spell from a spellbook is halved.<br/><strong>10 Ranks:</strong> You can identify magic items without using <Link to="/spell/detect_magic">detect magic</Link>, though the DC is increased by 10.<br/><strong>15 Ranks:</strong> Identifying magic items is a standard action, and the time required to learn a new spell from a spellbook is reduced to 1 minute per spell level.<br/><strong>20 Ranks:</strong> Whenever you attempt a caster level check, attempt a Spellcraft check at a -20 penalty at the same DC. If the spellcraft check succeeds, you gain a +2 circumstance bonus on your caster level check.</p>
</>};
const _stealth = {hasJL:true,title: "Stealth", jsx: <><div className="jumpList" id="skill-stealth-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-stealth-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-stealth-stealth">Stealth</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 106</Link><br/><strong>Associated Skill:</strong> Dexterity<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Your Stealth check is opposed by the Perception check of anyone who might notice you. Creatures that fail to beat your Stealth check are not aware of you and treat you as if you had total <Link to="/rule/concealment">concealment</Link>. You can move up to half your normal speed and use Stealth at no penalty. When moving at a speed greater than half but less than your normal speed, you take a -5 penalty. It's impossible to use Stealth while attacking, running, or charging.</p>
<p>Creatures gain a bonus or penalty on Stealth checks based on their size: Fine +16, Diminutive +12, Tiny +8, Small +4, Medium +0, Large -4, Huge -8, Gargantuan -12, Colossal -16.</p>
<p>If people are observing you using any of their senses (but typically sight), you can't use Stealth. Against most creatures, finding cover or concealment allows you to use Stealth. If your observers are momentarily distracted (such as by a Bluff check), you can attempt to use Stealth. While the others turn their attention from you, you can attempt a Stealth check if you can get to an unobserved place of some kind. This check, however, is made at a -10 penalty because you have to move fast.</p>
<p><em>Breaking Stealth:</em> When you start your turn using Stealth, you can leave cover or concealment and remain unobserved as long as you succeed at a Stealth check and end your turn in cover or concealment. Your Stealth immediately ends after you make an attack roll, whether or not the attack is successful (except when sniping as noted below).</p>
<p><em>Sniping:</em> If you've already successfully used Stealth at least 10 feet from your target, you can make one ranged attack and then immediately use Stealth again. You take a -20 penalty on your Stealth check to maintain your obscured location.</p>
<p><em>Creating a Diversion to Hide:</em> You can use Bluff to allow you to use Stealth. A successful Bluff check can give you the momentary diversion you need to attempt a Stealth check while people are aware of you.</p>
<p><strong>Action:</strong> Usually none. Normally, you make a Stealth check as part of movement, so it doesn't take a separate action. However, using Stealth immediately after a ranged attack (see Sniping, above) is a move action.</p>
<p><strong>Special:</strong> If you are invisible, you gain a +40 bonus on Stealth checks if you are immobile, or a +20 bonus on Stealth checks if you're moving.</p>
<p>If you have the <Link to="/feat/stealthy">Stealthy</Link> feat, you get a bonus on Stealth checks.</p>
<h3 id="skill-stealth-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 86</Link><br/>With sufficient ranks in Stealth, you earn the following.</p>
<p><strong>5 Ranks:</strong> Reduce the Stealth penalty from sniping by 10.<br/><strong>10 Ranks:</strong> Stealth check penalties for moving quickly are halved, including the ability unlocked at 5 ranks, moving full speed, and reaching concealment after creating a distraction.<br/><strong>15 Ranks:</strong> If you attack after successfully using Stealth, your target is denied its Dexterity bonus against all attacks that you make before the end of your turn.<br/><strong>20 Ranks:</strong> If you attack after successfully using Stealth, your target is denied its Dexterity bonus against all attacks that you make before the beginning of your next turn.</p>
</>};
const _survival = {hasJL:true,title: "Survival", jsx: <><div className="jumpList" id="skill-survival-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-survival-tracking-underwater">Tracking Underwater</InnerLink></li><li><InnerLink toTop to="skill-survival-building-makeshift-tools-and-structures">Building Makeshift Tools and Structures</InnerLink></li><li><InnerLink toTop to="skill-survival-occult-skill-unlocks">Occult Skill Unlocks</InnerLink></li><li><InnerLink toTop to="skill-survival-dowsing">Dowsing</InnerLink></li><li><InnerLink toTop to="skill-survival-foraging">Foraging</InnerLink></li><li><InnerLink toTop to="skill-survival-harvesting-poison">Harvesting Poison</InnerLink></li><li><InnerLink toTop to="skill-survival-making-a-fire">Making a Fire</InnerLink></li><li><InnerLink toTop to="skill-survival-obscuring-tracks">Obscuring Tracks</InnerLink></li><li><InnerLink toTop to="skill-survival-snares-and-simple-traps">Snares and Simple Traps</InnerLink></li><li><InnerLink toTop to="skill-survival-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-survival-survival">Survival</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 107</Link><br/><strong>Associated Skill:</strong> Wisdom<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> You can keep yourself and others safe and fed in the wild. The table below gives the DCs for various tasks that require Survival checks.</p>
<ScrollContainer id="skill-survival--table-0"><table>
<thead>
<tr>
<th>Survival DC</th>
<th>Task</th>
</tr>
</thead>
<tbody><tr>
<td>10</td>
<td>Get along in the wild. Move up to half your overland speed while hunting and foraging (no food or water supplies needed). You can provide food and water for one other person for every 2 points by which your check result exceeds 10.</td>
</tr>
<tr>
<td>15</td>
<td>Gain a +2 bonus on all Fortitude saves against severe weather while moving up to half your overland speed, or gain a +4 bonus if you remain stationary. You may grant the same bonus to one other character for every 1 point by which your Survival check result exceeds 15.</td>
</tr>
<tr>
<td>15</td>
<td>Keep from getting lost or avoid natural hazards, such as quicksand.</td>
</tr>
<tr>
<td>15</td>
<td>Predict the weather up to 24 hours in advance. For every 5 points by which your Survival check result exceeds 15, you can predict the weather for one additional day in advance.</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Follow Tracks:</em> To find tracks or to follow them for 1 mile requires a successful Survival check. You must make another Survival check every time the tracks become difficult to follow. If you are not trained in this skill, you can make untrained checks to find tracks, but you can follow them only if the DC for the task is 10 or lower. Alternatively, you can use the Perception skill to find a footprint or similar sign of a creature's passage using the same DCs, but you can't use Perception to follow tracks, even if someone else has already found them.</p>
<p>You move at half your normal speed while following tracks (or at your normal speed with a -5 penalty on the check, or at up to twice your normal speed with a -20 penalty on the check). The DC depends on the surface and the prevailing conditions, as given on the table.</p>
<ScrollContainer id="skill-survival--table-1"><table>
<thead>
<tr>
<th>Surface</th>
<th>Survival DC</th>
</tr>
</thead>
<tbody><tr>
<td>Very soft ground</td>
<td>5</td>
</tr>
<tr>
<td>Soft ground</td>
<td>10</td>
</tr>
<tr>
<td>Firm ground</td>
<td>15</td>
</tr>
<tr>
<td>Hard ground</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Very Soft Ground:</em> Any surface (fresh snow, thick dust, wet mud) that holds deep, clear impressions of footprints.</p>
<p><em>Soft Ground:</em> Any surface soft enough to yield to pressure, but firmer than wet mud or fresh snow, in which a creature leaves frequent but shallow footprints.</p>
<p><em>Firm Ground:</em> Most normal outdoor surfaces (such as lawns, fields, woods, and the like) or exceptionally soft or dirty indoor surfaces (thick rugs and very dirty or dusty floors). The creature might leave some traces (broken branches or tufts of hair), but it leaves only occasional or partial footprints.</p>
<p><em>Hard Ground:</em> Any surface that doesn't hold footprints at all, such as bare rock or an indoor floor. Most streambeds fall into this category, since any footprints left behind are obscured or washed away. The creature leaves only traces (scuff marks or displaced pebbles).</p>
<p>Several modifiers may apply to the Survival check, as given on the tables below.</p>
<ScrollContainer id="skill-survival--table-2"><table>
<thead>
<tr>
<th>Size of creature(s) being tracked</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>-Fine</td>
<td>+8</td>
</tr>
<tr>
<td>-Diminutive</td>
<td>+4</td>
</tr>
<tr>
<td>-Tiny</td>
<td>+2</td>
</tr>
<tr>
<td>-Small</td>
<td>+1</td>
</tr>
<tr>
<td>-Medium</td>
<td>+0</td>
</tr>
<tr>
<td>-Large</td>
<td>-1</td>
</tr>
<tr>
<td>-Huge</td>
<td>-2</td>
</tr>
<tr>
<td>-Gargantuan</td>
<td>-4</td>
</tr>
<tr>
<td>-Colossal</td>
<td>-8</td>
</tr>
</tbody></table></ScrollContainer>
<p>For a group of mixed sizes, apply only the modifier for the largest size category.</p>
<ScrollContainer id="skill-survival--table-3"><table>
<thead>
<tr>
<th>Poor visibility</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Overcast or moonless night</td>
<td>+6</td>
</tr>
<tr>
<td>Moonlight</td>
<td>+3</td>
</tr>
<tr>
<td>Fog or precipitation</td>
<td>+3</td>
</tr>
</tbody></table></ScrollContainer>
<p>Apply only the largest modifier from this category.</p>
<ScrollContainer id="skill-survival--table-4"><table>
<thead>
<tr>
<th>Condition</th>
<th>Survival DC Modifier</th>
</tr>
</thead>
<tbody><tr>
<td>Every three creatures in the group being tracked</td>
<td>-1</td>
</tr>
<tr>
<td>Every 24 hours since the trail was made</td>
<td>+1</td>
</tr>
<tr>
<td>Every hour of rain since the trail was made</td>
<td>+1</td>
</tr>
<tr>
<td>Fresh snow since the trail was made</td>
<td>+10</td>
</tr>
<tr>
<td>Tracked party hides trail (and moves at half speed)</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Varies. A single Survival check may represent activity over the course of hours or a full day. A Survival check made to find tracks is at least a full-round action, and it may take even longer.</p>
<p><strong>Try Again:</strong> Varies. For getting along in the wild or for gaining the Fortitude save bonus noted in the first table above, you make a Survival check once every 24 hours. The result of that check applies until the next check is made. To avoid getting lost or avoid natural hazards, you make a Survival check whenever the situation calls for one. Retries to avoid getting lost in a specific situation or to avoid a specific natural hazard are not allowed. For finding tracks, you can retry a failed check after 1 hour (outdoors) or 10 minutes (indoors) of searching.</p>
<p><strong>Special:</strong> If you are trained in Survival, you can automatically determine where true north lies in relation to yourself.</p>
<p>A ranger gains a bonus on Survival checks when using this skill to find or follow the tracks of a <Link to="/ability/favored_enemy">favored enemy</Link>.</p>
<p>If you have the <Link to="/feat/self_sufficient">Self-Sufficient</Link> feat, you get a bonus on Survival checks.</p>
<h3 id="skill-survival-tracking-underwater" data-hash-target>Tracking Underwater</h3>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 47</Link><br/>Creatures with keen scent, like sharks, can track blood trails from an incredible distance, making it easier to track wounded targets in tandem with such a creature. Otherwise, it's much harder to track a creature underwater with Survival unless the target is moving along the bottom or through something that might leave signs, like a coral reef or sargassum. Even then, the water quickly washes away signs of passage. The Survival DC to track in such a situation starts at 10, and increases by 1 for every 10 minutes after the target has passed through (or by 1 for every minute in areas with a current).</p>
<h3 id="skill-survival-building-makeshift-tools-and-structures" data-hash-target>Building Makeshift Tools and Structures</h3>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 8</Link><br/>With a successful DC 15 Survival check and 1 hour of work, you can build the following temporary tools and structures from natural materials using a handaxe, kukri, utility knife, or similar item (including anything that can be used as a shovel, if building a snow cave). Without a proper tool, you have to use improvised tools (imposing a -2 penalty on the Survival check). Makeshift structures and objects have half the normal hardness and hit points of a properly constructed version, and have a 10% chance of falling apart for each day of use. GMs may choose to allow other primitive tools based on these, at their discretion.</p>
<p><strong>Cooking Vessel:</strong> Flat rocks can be used as primitive frying pans, and wood can be hollowed out and charred to make simple bowls and even pots.</p>
<p><strong>Lean-To:</strong> This rudimentary shelter for two creatures of your size grants its occupants a +4 bonus on Fortitude saves against severe weather. The construction requires 20 feet of rope.</p>
<p><strong>Raft:</strong> This log raft for two people requires 10 feet of rope to construct.</p>
<p><strong>Rope:</strong> Makeshift rope is constructed in 10-foot lengths, though multiple lengths can be spliced together to make a longer rope. A makeshift rope gains the broken condition if the user rolls a natural 1 on a skill check involving the rope. If already broken, the rope snaps instead.</p>
<p><strong>Snow Cave:</strong> The temperature in an inhabited snow cave generally remains around 32&deg; F regardless of outside temperature. A lit candle further increases the temperature by 10&deg; F.</p>
<p><strong>Torch:</strong> A makeshift torch burns for 1d6 &times; 5 minutes and has the <Link to="/misc/fragile">fragile</Link> quality if used as an improvised weapon.</p>
<h3 id="skill-survival-occult-skill-unlocks" data-hash-target>Occult Skill Unlocks</h3>
<p>Characters capable of casting psychic spells or who have the <Link to="/feat/psychic_sensitivity">Psychic Sensitivity</Link> feat gain access to skill unlocks - a host of esoteric skill uses not available to other PCs. These are not entirely new skills, but rather new uses of existing skills for those trained in the occult arts. A character must be trained in the appropriate skill to use that skill's unlock, even if the skill can normally be used untrained. It's impossible to take 10 for an occult skill unlock. Occult skill unlocks require intense concentration and strenuous effort, so the amount a character can use each skill unlock is limited to once per day or per week. This limit is for all uses of the skill unlock; if a character uses hypnotism to implant a suggestion, he can't also use it to recall memories on the same day.</p>
<h4 id="skill-survival-dowsing" data-hash-target>Dowsing</h4>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 195</Link></p>
<p>You channel mysterious forces in the nearby environment to locate hidden resources.</p>
<p><strong>Check:</strong> Once per day, you can follow a dowsing rod's movements to locate a particular type of location. Each attempt requires 10 minutes of intense concentration, after which you attempt the Survival check with the DC listed on the table below. The maximum range at which you can detect anything using dowsing is 400 feet + 40 feet per rank in Survival you possess. The rod's directions persist for up to 10 minutes. You choose a particular target each time you dowse, and get the following information on a successful check.</p>
<p><em>Find Water:</em> The dowsing rod points toward the largest source of fresh water within range, including aquifers, lakes, ponds, and springs.</p>
<p><em>Grave Dowsing:</em> The dowsing rod points in the direction of the largest burial site, cairn, or tomb within range.</p>
<p><em>Locate Metal and Gems:</em> You concentrate on a specific metal or mineral. On a successful check, the dowsing rod points to the largest quantity of the selected mineral within range.</p>
<ScrollContainer id="skill-survival--table-5"><table>
<thead>
<tr>
<th>Dowsing Target</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Water</td>
<td>15</td>
</tr>
<tr>
<td>Grave</td>
<td>20</td>
</tr>
<tr>
<td>Mineral</td>
<td>25</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Action:</strong> Dowsing attempts take 10 minutes to initiate. The results of the check persist for 10 minutes afterward.</p>
<p><strong>Try Again:</strong> Yes. You can try to dowse from the same location more than once, but still only once per day.</p>
<h3 id="skill-survival-foraging" data-hash-target>Foraging</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 134</Link></p>
<p>These foraging techniques assume a search in a typically bountiful wilderness area. The exact time required to forage for supplies depends on the specific supplies desired and the type of terrain being searched, as does the DC of the skill check to successfully forage, as listed on the table below. As a general rule, a character who spends more than 8 hours per day foraging becomes fatigued.</p>
<p>The base amount of time required to forage for supplies depends on the type of supplies you're searching for, as listed in each supply category below. When foraging, multiply this base time by the terrain's "forage factor" as listed on the table below. Whether the terrain in question counts as standard, barren, or abundant depends on the type of terrain being searched, what is begin searched for, and the GM's discretion (for example, a remote shoreline may qualify as abundant for the purposes of foraging for tools and weapons, but barren for the purposes of foraging for herbs), but in most cases, the standard category should be used. Rugged terrain includes all terrain with difficult physical obstacles (numerous steep mountainsides or cliffs, particularly dense undergrowth, or any other terrain where the searcher's movement type is impeded), and its forage factor stacks with other forage factors for different types of terrain.</p>
<ScrollContainer id="skill-survival--table-6"><table>
<thead>
<tr>
<th>Type of Terrain</th>
<th>Forage Factor</th>
<th>Forage DC</th>
</tr>
</thead>
<tbody><tr>
<td>Standard</td>
<td>&times;1</td>
<td>15</td>
</tr>
<tr>
<td>Barren</td>
<td>&times;2</td>
<td>20</td>
</tr>
<tr>
<td>Abundant</td>
<td>&times;1/2</td>
<td>10</td>
</tr>
<tr>
<td>Terrain is rugged</td>
<td>&times;2</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<p>Time spent to forage for supplies need not be consecutive and can be split over multiple days. Once the required time has passed, attempt a skill check against the appropriate forage DC as indicated on the table above; typically this is a Survival check, but searching for some types of supplies sometimes allows the substitution of a different skill.</p>
<p>When a character attempts to forage for supplies, he must choose what kind of supplies he is searching for from the broad categories detailed below.</p>
<p><strong>Alchemical Supplies and Material Components:</strong> Many alchemical supplies and material components can be found in the wilderness. You can forage enough supplies to approximate the contents of an alchemy crafting kit or a spell component pouch with a successful Survival check and 2d4 hours of effort, but the GM can rule that certain components simply aren't available in an area (for example, bat guano cannot be foraged in terrain where no bats live). If a component is unavailable in the area but its cost remains negligible, you can create a rudimentary substitute component from your foraged supplies with a successful Craft (alchemy) or Spellcraft check and 1 hour of effort (DC = 15 + double the level of the extract or spell). An extract or spell cast with such an improvised substitute has a 20% chance of failure (in addition to any other chance of failure). Focus components or costly material components cannot be foraged.</p>
<p><strong>Herbs:</strong> Foraging for specific herbs requires a <Link to="/skill/knowledge_nature">Knowledge (nature)</Link> or <Link to="/skill/profession">Profession (herbalist)</Link> check and follows special rules.</p>
<p><strong>Repair Materials and Improvised Tools:</strong> A period of 1d6 hours and a successful Survival check are enough to forage rudimentary supplies to perform field repairs for damaged equipment when the proper tools and supplies are not available. On a successful check, a character gathers the equivalent of 2d6 gp in raw materials. She must still spend the time and attempt Craft or Spellcraft skill checks as normal to use these materials to repair an object, but she takes a -5 penalty on the check due to the foraged nature of the materials used. Repair materials gathered in this way cannot be sold.</p>
<p>If these gathered materials are instead used to craft improvised tools, a successful forage check gathers only the equivalent of 1d6 gp in raw materials. A Craft or Spellcraft check to repair an object or to craft an improvised tool with foraged supplies always fails on a natural 1.</p>
<p><strong>Weapons:</strong> Functional clubs and quarterstaves can be foraged with 10 minutes of foraging in any area with trees or wood; in other regions, clubs and quarterstaves require 1d4 hours of searching and function as improvised weapons. At the GM's discretion, other improvised weapons can be foraged.</p>
<h3 id="skill-survival-harvesting-poison" data-hash-target>Harvesting Poison</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 142</Link><br/>While some think of poison as an assassin's tool, the herbalists and naturalists of the world know that poison carries in it no more inherent evil than fire or water. Indeed, in the wildlands of the world, harvesting poison to give a hunter an edge or to aid in the production of antivenom is a time-honored practice.</p>
<p>While Craft (alchemy) is necessary to brew long-lasting poisons, there are many natural sources of poison in the world, and poison crafters who wish to avoid the expense of purchasing raw ingredients may seek to harvest poison from natural sources instead. The following section presents rules for harvesting poisons from the wild.</p>
<p>Unless a dose of harvested poison is preserved (see <Link to="/rule/harvesting_poisons">Preserving Harvested Poison</Link>), it remains potent for 24 hours after it is harvested.</p>
<h4 id="skill-survival-harvesting-from-dead-creatures">Harvesting from Dead Creatures</h4>
<p>Once a venomous creature is slain, its venom sacs can be removed, allowing 1 or more doses of its venom to be harvested for later use. In order to harvest venom, the creature must have been dead for less than 24 hours. Every hour the source creature has been dead reduces the lifespan of the harvested poison by an hour. Removing venom sacs is a messy and timeconsuming process, requiring 10 minutes of work, access to surgical tools, and a container to store the venom in. If proper surgical tools are not available, a dagger or other light slashing weapon can be used, although this imposes a -2 penalty on checks to harvest the venom. The harvester must succeed at a Survival check (DC = 15 + the dead creature's CR) in order to successfully harvest poison. On a success, the harvester acquires a single dose of the creature's venom, plus 1 additional dose for every 5 by which the result of this check exceeded the DC (to a maximum number of doses equal to the creature's Constitution modifier, minimum 1). Failing the check causes all of the venom to be lost. Failure by 5 or more exposes the harvester to 1d3 doses of the creature's venom unless she has the poison use class feature.</p>
<h4 id="skill-survival-harvesting-poison-from-hazards">Harvesting Poison from Hazards</h4>
<p>Some hazards, such as poison oak and spider vines, feature poisons that can be harvested by those who know how to do so. This process requires 1 hour and an alchemist's lab or alchemy crafting kit. If the harvester succeeds at a Survival check (DC = 15 + the hazard's CR), she collects 1 dose of poison. Harvesting poison from a hazard in this way requires getting close enough to it to touch it, which may expose the harvester to the hazard's effects.</p>
<h3 id="skill-survival-making-a-fire" data-hash-target>Making a Fire</h3>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 8</Link><br/>It is possible to make a fire even without flint and steel or other fire-making tools. Finding suitable materials to start a fire requires 10 minutes of effort and a successful DC 20 Survival check.</p>
<h3 id="skill-survival-obscuring-tracks" data-hash-target>Obscuring Tracks</h3>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 8</Link><br/>You can use Survival to make your tracks more difficult to follow. A successful DC 15 Survival check increases the DC of following your tracks by 4. You can move at only half speed while obscuring your tracks unless you increase the Survival check DC to do so by 5. If you're traveling in a group, for every creature beyond yourself whose tracks you wish to obscure, increase the DC by an additional 1. Large creatures count as two creatures for this purpose, and Huge creatures count as four. You cannot conceal the tracks of groups traveling with Gargantuan or larger creatures.</p>
<h3 id="skill-survival-snares-and-simple-traps" data-hash-target>Snares and Simple Traps</h3>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 8</Link><br/>As a normal part of using a Survival check to get along in the wild, a character can make simple snares and deadfalls to trap small game. Though not as robust or dangerous as ranger traps or traps created using the Craft (traps) skill, simple traps and snares can also be used against prey that is more dangerous than typical game.</p>
<p>Regardless of the nature of its construction, such a trap acts as an extraordinary ranger snare trap, with the following modifications. With a successful DC 15 Survival check, a simple trap can be constructed in 20 minutes in a typical wilderness area using proper tools. The trap affects only creatures of a single size category, determined when the trap is constructed. (Smaller creatures slip out easily, and larger creatures are too big to be effectively snared.) The trap is obvious unless it is hidden with a successful DC 20 Stealth check, in which case noticing it requires a successful DC 15 Perception check. The trap's DC is 13, it has 10 hit points, and it can be burst with a successful DC 15 Strength check. If left unattended, a simple trap has a 25% chance of becoming ineffective each day.</p>
<p>Characters who wish to create more effective traps should invest skill ranks in Craft (traps) or take the <Link to="/feat/learn_ranger_trap">Learn Ranger Trap</Link> feat.</p>
<h3 id="skill-survival-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 87</Link><br/>With sufficient ranks in Survival, you earn the following.</p>
<p><strong>5 Ranks:</strong> You reduce all nonlethal damage you take from heat, cold, starvation, or thirst by 1 point for every 5 ranks you possess in Survival.<br/><strong>10 Ranks:</strong> You can track creatures that leave no tracks, including flying and swimming creatures and creatures using trackless step or pass without trace, taking a -20 penalty on your Survival check.<br/><strong>15 Ranks:</strong> Once per day, you can spend 1 hour and attempt a DC 30 Survival check. Success grants you cold resistance or fire resistance 5 for 24 hours. You can share this with one ally for every 5 by which you exceeded the check.<br/><strong>20 Ranks:</strong> You take only a -10 penalty when tracking creatures that leave no tracks.</p>
</>};
const _swim = {hasJL:true,title: "Swim", jsx: <><div className="jumpList" id="skill-swim-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-swim-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-swim-swim">Swim</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 108</Link><br/><strong>Associated Skill:</strong> Strength<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> Make a Swim check once per round while you are in the water. Success means you may swim at up to half your speed (as a full-round action) or at a quarter of your speed (as a move action). If you fail by 4 or less, you make no progress. If you fail by 5 or more, you go underwater.</p>
<p>If you are underwater, either because you failed a Swim check or because you are swimming underwater intentionally, you must hold your breath. You can hold your breath for a number of rounds equal to twice your Constitution score, but only if you do nothing other than take move actions or free actions. If you take a standard action or a full-round action (such as making an attack), the remainder of the duration for which you can hold your breath is reduced by 1 round. (Effectively, a character in combat can hold his breath only half as long as normal.) After that period of time, you must make a DC 10 Constitution check every round to continue holding your breath. Each round, the DC for that check increases by 1. If you fail the Constitution check, you begin to drown. The DC for the Swim check depends on the water, as given on the table below.</p>
<ScrollContainer id="skill-swim--table-0"><table>
<thead>
<tr>
<th>Water</th>
<th>Swim DC</th>
</tr>
</thead>
<tbody><tr>
<td>Calm water</td>
<td>10</td>
</tr>
<tr>
<td>Rough water</td>
<td>15</td>
</tr>
<tr>
<td>Stormy water</td>
<td>20</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Note:</strong> You can't take 10 on a Swim check in stormy water, even if you aren't otherwise being threatened or distracted.</p>
<p>Each hour that you swim, you must make a DC 20 Swim check or take 1d6 points of nonlethal damage from fatigue.</p>
<p><strong>Action:</strong> A successful Swim check allows you to swim a quarter of your speed as a move action or half your speed as a full-round action.</p>
<p><strong>Special:</strong> A creature with a swim speed can move through water at its indicated speed without making Swim checks. It gains a +8 racial bonus on any Swim check to perform a special action or avoid a hazard. The creature can always choose to take 10 on a Swim check, even if distracted or endangered when swimming. Such a creature can use the run action while swimming, provided that it swims in a straight line.</p>
<p>If you have the <Link to="/feat/athletic">Athletic</Link> feat, you get a bonus on Swim checks.</p>
<h3 id="skill-swim-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 87</Link><br/>With sufficient ranks in Swim, you earn the following.</p>
<p><strong>5 Ranks:</strong> You gain a swim speed of 10 feet, but only in water with a Swim DC of 15 or lower.<br/><strong>10 Ranks:</strong> You gain a swim speed (though you do not gain the +8 racial bonus on Swim checks) equal to your base speed in water with a Swim DC of 15 or lower, or 10 feet in all other water.<br/><strong>15 Ranks:</strong> You ignore the penalties for using slashing or bludgeoning weapons underwater, as <Link to="/spell/freedom_of_movement">freedom of movement</Link>.<br/><strong>20 Ranks:</strong> You gain a swim speed equal to your base speed in all water. If you have both hands free, you gain a +8 racial bonus on Swim checks.</p>
</>};
const _use_magic_device = {hasJL:true,title: "Use Magic Device", jsx: <><div className="jumpList" id="skill-use_magic_device-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="skill-use_magic_device-intentional-mishap">Intentional Mishap</InnerLink></li><li><InnerLink toTop to="skill-use_magic_device-unchained-rogue-skill-unlocks">Unchained Rogue Skill Unlocks</InnerLink></li></ul></div><h2 id="skill-use_magic_device-use-magic-device">Use Magic Device</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 108</Link><br/><strong>Associated Skill:</strong> Charisma<br/><strong>Trained Only:</strong> No<br/><strong>Armor Check Penalty:</strong> No<br/><strong>Optional <Link to="/rule/new_skills">Unchained Skill</Link>:</strong> No<br/><strong>Optional <Link to="/rule/background_skills">Background Skill</Link>:</strong> No</p>
<p><strong>Check:</strong> You can use this skill to read a spell or to activate a magic item. Use Magic Device lets you use a magic item as if you had the spell ability or class features of another class, as if you were a different race, or as if you were of a different alignment.</p>
<p>You make a Use Magic Device check each time you activate a device such as a wand. If you are using the check to emulate an alignment or some other quality in an ongoing manner, you need to make the relevant Use Magic Device check once per hour.</p>
<p>You must consciously choose which requirement to emulate. That is, you must know what you are trying to emulate when you make a Use Magic Device check for that purpose. The DCs for various tasks involving Use Magic Device checks are summarized on the table below.</p>
<ScrollContainer id="skill-use_magic_device--table-0"><table>
<thead>
<tr>
<th>Task</th>
<th>Use Magic Device DC</th>
</tr>
</thead>
<tbody><tr>
<td>Activate blindly</td>
<td>25</td>
</tr>
<tr>
<td>Decipher a written spell</td>
<td>25 + spell level</td>
</tr>
<tr>
<td>Use a scroll</td>
<td>20 + caster level</td>
</tr>
<tr>
<td>Use a wand</td>
<td>20</td>
</tr>
<tr>
<td>Emulate a class feature</td>
<td>20</td>
</tr>
<tr>
<td>Emulate an ability score</td>
<td>See text</td>
</tr>
<tr>
<td>Emulate a race</td>
<td>25</td>
</tr>
<tr>
<td>Emulate an alignment</td>
<td>30</td>
</tr>
</tbody></table></ScrollContainer>
<p><em>Activate Blindly:</em> Some magic items are activated by special words, thoughts, or actions. You can activate such an item as if you were using the activation word, thought, or action, even when you're not and even if you don't know it. You do have to perform some equivalent activity in order to make the check. That is, you must speak, wave the item around, or otherwise attempt to get it to activate. You get a +2 bonus on your Use Magic Device check if you've activated the item in question at least once before. If you fail by 9 or less, you can't activate the device. If you fail by 10 or more, you suffer a mishap. A mishap means that magical energy gets released but doesn't do what you wanted it to do. The default mishaps are that the item affects the wrong target or that uncontrolled magical energy is released, dealing 2d6 points of damage to you. This mishap is in addition to the chance for a mishap that you normally risk when you cast a spell from a scroll that you could not otherwise cast yourself.</p>
<p><em>Decipher a Written Spell:</em> This usage works just like deciphering a written spell with the Spellcraft skill, except that the DC is 5 points higher. Deciphering a written spell requires 1 minute of concentration.</p>
<p><em>Emulate an Ability Score:</em> To cast a spell from a scroll, you need a high score in the appropriate ability (Intelligence for wizard spells, Wisdom for divine spells, or Charisma for sorcerer or bard spells). Your effective ability score (appropriate to the class you're emulating when you try to cast the spell from the scroll) is your Use Magic Device check result minus 15. If you already have a high enough score in the appropriate ability, you don't need to make this check.</p>
<p><em>Emulate an Alignment:</em> Some magic items have positive or negative effects based on the user's alignment. Use Magic Device lets you use these items as if you were of an alignment of your choice. You can emulate only one alignment at a time.</p>
<p><em>Emulate a Class Feature:</em> Sometimes you need to use a class feature to activate a magic item. In this case, your effective level in the emulated class equals your Use Magic Device check result minus 20. This skill does not let you actually use the class feature of another class. It just lets you activate items as if you had that class feature. If the class whose feature you are emulating has an alignment requirement, you must meet it, either honestly or by emulating an appropriate alignment with a separate Use Magic Device check.</p>
<p><em>Emulate a Race:</em> Some magic items work only for members of certain races, or work better for members of those races. You can use such an item as if you were a member of a race of your choice. You can emulate only one race at a time.</p>
<p><em>Use a Scroll:</em> Normally, to cast a spell from a scroll, you must have the scroll's spell on your class spell list. Use Magic Device allows you to use a scroll as if you had a particular spell on your class spell list. The DC is equal to 20 + the caster level of the spell you are trying to cast from the scroll. In addition, casting a spell from a scroll requires a minimum score (10 + spell level) in the appropriate ability. If you don't have a sufficient score in that ability, you must emulate the ability score with a separate Use Magic Device check.</p>
<p>This use of the skill also applies to other <Link to="/misc/spell_completion">spell completion</Link> magic items.</p>
<p><em>Use a Wand, Staff, or Other <Link to="/misc/spell_trigger">Spell Trigger</Link> Item:</em> Normally, to use a wand, you must have the wand's spell on your class spell list. This use of the skill allows you to use a wand as if you had a particular spell on your class spell list. Failing the roll does not expend a charge.</p>
<p><strong>Action:</strong> None. The Use Magic Device check is made as part of the action (if any) required to activate the magic item.</p>
<p><strong>Try Again:</strong> Yes, but if you ever roll a natural 1 while attempting to activate an item and you fail, then you can't try to activate that item again for 24 hours.</p>
<p><strong>Special:</strong> You cannot take 10 with this skill. You can't aid another on Use Magic Device checks. Only the user of the item may attempt such a check.</p>
<p>If you have the <Link to="/feat/magical_aptitude">Magical Aptitude</Link> feat, you gain a bonus on Use Magic Device checks.</p>
<h3 id="skill-use_magic_device-intentional-mishap" data-hash-target>Intentional Mishap</h3>
<p><strong>Sources</strong> <Link to="/source/spymasters_handbook">Spymaster's Handbook pg. 8</Link><br/>You can intentionally cause a magic item to produce a mishap.</p>
<p><strong>Check:</strong> You can cause a magic item to have an intentional magic mishap, as if you had attempted to activate it blindly and failed by 10 or more. The DC to produce an intentional mishap is 30. If you succeed, you have some control over the mishap. The item deals 2d6 points of damage to any one creature or object that the item could have targeted if activated normally. You can attempt to aim it, but if you select an invalid target, you take the damage instead. If you fail the check by 9 or less, you create a normal mishap you do not control. If you fail by 10 or more, nothing happens.</p>
<p><strong>Action:</strong> Attempting to create a mishap is like activating an item blindly, and requires a standard action during which you try out magic words or other appropriate actions.</p>
<h3 id="skill-use_magic_device-unchained-rogue-skill-unlocks" data-hash-target>Unchained Rogue Skill Unlocks</h3>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained pg. 87</Link><br/>With sufficient ranks in Use Magic Device, you earn the following.</p>
<p><strong>5 Ranks:</strong> You can use the aid another action to assist another creature's Use Magic Device check by attempting a check against the item's Use Magic Device DC.<br/><strong>10 Ranks:</strong> If you roll a natural 1 when activating an item, you take a -10 penalty on Use Magic Device checks with that item for 24 hours instead of being unable to activate it. This penalty stacks with itself.<br/><strong>15 Ranks:</strong> You can use this skill to emulate two races or two alignments simultaneously.<br/><strong>20 Ranks:</strong> If you roll a natural 1 when activating an item, you can reroll the check at a -10 penalty to activate the item. You must take the result of the second check, even if it is worse, and you can't reroll it again.</p>
</>};
export default {not_found:_not_found,acrobatics:_acrobatics,appraise:_appraise,artistry_any:_artistry_any,bluff:_bluff,climb:_climb,craft_any:_craft_any,diplomacy:_diplomacy,disable_device:_disable_device,disguise:_disguise,escape_artist:_escape_artist,fly:_fly,handle_animal:_handle_animal,heal:_heal,intimidate:_intimidate,knowledge_all:_knowledge_all,knowledge_arcana:_knowledge_arcana,knowledge_dungeoneering:_knowledge_dungeoneering,knowledge_engineering:_knowledge_engineering,knowledge_geography:_knowledge_geography,knowledge_history:_knowledge_history,knowledge_local:_knowledge_local,knowledge_nature:_knowledge_nature,knowledge_nobility:_knowledge_nobility,knowledge_planes:_knowledge_planes,knowledge_religion:_knowledge_religion,linguistics:_linguistics,lore_any:_lore_any,perception:_perception,perform_any:_perform_any,profession_any:_profession_any,ride:_ride,sense_motive:_sense_motive,sleight_of_hand:_sleight_of_hand,spellcraft:_spellcraft,stealth:_stealth,survival:_survival,swim:_swim,use_magic_device:_use_magic_device}