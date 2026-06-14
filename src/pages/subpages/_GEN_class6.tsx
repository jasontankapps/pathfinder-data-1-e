import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import RacialOptions from '../../components/RacialOptions';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _medium = {hasJL:true,title: "Medium", jsx: <><div className="jumpList" id="class-medium-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-medium-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-medium-spirit-su">Spirit</InnerLink></li><li><InnerLink toTop to="class-medium-spirit-bonus-su">Spirit Bonus</InnerLink></li><li><InnerLink toTop to="class-medium-spirit-surge-su">Spirit Surge</InnerLink></li><li><InnerLink toTop to="class-medium-shared-seance-su">Shared Seance</InnerLink></li><li><InnerLink toTop to="class-medium-taboo-ex">Taboo</InnerLink></li><li><InnerLink toTop to="class-medium-haunt-channeler-su">Haunt Channeler</InnerLink></li><li><InnerLink toTop to="class-medium-location-channel-sp">Location Channel</InnerLink></li><li><InnerLink toTop to="class-medium-connection-channel-sp">Connection Channel</InnerLink></li><li><InnerLink toTop to="class-medium-propitiation-su">Propitiation</InnerLink></li><li><InnerLink toTop to="class-medium-ask-the-spirits-sp">Ask the Spirits</InnerLink></li><li><InnerLink toTop to="class-medium-astral-journey-sp">Astral Journey</InnerLink></li><li><InnerLink toTop to="class-medium-trance-of-three-su">Trance of Three</InnerLink></li><li><InnerLink toTop to="class-medium-spacious-soul-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-medium-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-medium-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-medium-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-medium-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-medium-medium">Medium</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 30</Link></p>
<p>Mediums channel spirits into themselves, using their own bodies as vessels for astral entities spawned from myths and legends. A medium balances his need for the spirits' power with the danger of allowing such beings influence over his mind.</p>
<p><strong>Role:</strong> Mediums are very versatile, filling whatever role the party needs at the moment by channeling the right spirit.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>4d6 &times; 10 gp (average 140 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-medium-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-medium--table-0"><table>
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
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Knacks, spirit, spirit bonus +1, spirit power (lesser), spirit surge 1d6</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Shared seance, taboo</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>Haunt channeler</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Spirit bonus +2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Location channel</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Spirit power (intermediate)</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Connection channel</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Spirit bonus +3</td>
<td>1</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>Propitiation</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Spirit surge 1d8</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Spirit power (greater)</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Spirit bonus +4</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Ask the spirits</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Astral journey</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Trance of three</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Spirit bonus +5</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Spirit power (supreme)</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Spacious soul</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Spirit mastery</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Astral beacon, spirit bonus +6, spirit surge 1d10</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-medium-spells-known">Spells Known</h3>
<ScrollContainer id="class-medium--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>0</th>
<th>1st</th>
<th>2nd</th>
<th>3rd</th>
<th>4th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-medium-spells" icon={["magic-swirl"]}><Pair single id="class-medium-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast psychic spells which are drawn from the <Link to="/main/spells_medium">medium spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Info"><p>A medium's selection of spells is limited. You begin play knowing two 0-level spells of your choice. At each new medium level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><Ability id="class-medium-knacks" icon={["magic-swirl"]}>
<Pair single id="class-medium-knacks">Knacks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Knacks cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-medium-spirit-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="class-medium-spirit-su" flavor="A medium serves as a vessel to channel spirits - astral echoes of powerful souls from ages past that live on in myth and legend.">Spirit (Su)</Pair>
<Pair title="Ability"><p>Each day, you can channel a <Link to="/ability/spirits">spirit</Link> through a ritual known as a seance. Seances take 1 hour to perform and require your concentration. At the end of a seance, you invite a local spirit to inhabit you and serve as your spirit for that day. You gain the spirit's listed seance boon and lesser spirit power for 24 hours.</p>
<p>Though you can choose the legend to which the spirit you channel belongs, you must channel that spirit from an appropriate location. Each spirit has a favored location it usually inhabits, though spirits may also be present at other locations appropriate to their legends; such locations are listed in each legend's <strong>Favored Locations</strong> entry.</p>
<p>You can invite your allies to participate in your seance: <em>shared seance</em> and certain spirit powers affect other participants. A character counts as participating so long as she maintains physical contact with another participating character and willfully opens herself to the spirit; unlike you, other participating characters can take other actions during this time. Only creatures with an Intelligence score of at least 3 can participate in a seance.</p>
<p>In addition to granting power to you, a channeled spirit can influence you. By channeling a spirit, you allow the spirit to gain 1 point of <strong className="hl">influence</strong> over you. If you lose that 1 point of influence, you lose contact with the spirit, though you are still unable to perform a new seance until the normal 24 hour period has elapsed since your last seance. When the spirit leaves after the 24-hour duration and before the next seance, the spirit's influence over you resets to 0. Certain abilities allow you to gain additional power in exchange for allowing the spirit more influence over you.</p>
<p>When a spirit gains at least <strong className="hl">3 points of influence</strong> over you, the dual impulses housed within the same body cause you to meld with your spirit's consciousness. The resulting muddled sense of self and struggle for control causes you to take a -2 penalty on initiative checks as well as a specific additional penalty listed in each spirit's entry. However, the spirit's mental presence grants you a +4 bonus against possession effects and a +2 bonus on saving throws against mind-affecting effects that are not related to possession.</p>
<p>If a spirit ever attains <strong className="hl">5 or more points of influence</strong> over you, you completely lose control to the spirit. You effectively become an NPC under the GM's control until after you awaken the next day with the spirit gone.</p>
<p>During your seance, you can choose to <strong className="hl">channel a weaker spirit</strong> to gain its help without incurring as much of its influence. If you do so, you can forgo any number of spirit powers, starting with your most powerful spirit power. For each spirit power you forgo, you can use your <em>spirit surge</em> ability twice without incurring influence.</p>
</Pair>
<Pair title="At 6th Level">You also gain the spirit's intermediate spirit power.</Pair>
<Pair title="At 11th Level">You also gain its greater spirit power.</Pair>
<Pair title="At 17th Level">You also gain its supreme spirit power.</Pair>
<Pair title="Special">After 24 hours, you lose contact with the channeled spirit and can perform another seance.</Pair>
</Ability>
<Ability id="class-medium-spirit-bonus-su" icon={["upgrade"]}>
<Pair single id="class-medium-spirit-bonus-su">Spirit Bonus (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When you channel a spirit, you gain a bonus on certain checks and to certain statistics, depending on the spirit. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of your medium level.</Pair>
</Ability>
<Ability id="class-medium-spirit-surge-su" icon={["armor-upgrade"]}>
<Pair single id="class-medium-spirit-surge-su">Spirit Surge (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">After failing a d20 roll that was modified by your spirit bonus, you can allow your spirit to gain 1 additional point of influence over you in order to add 1d6 to the check's result without taking an action. This can cause the check to succeed instead of fail. You must be conscious and aware to use this ability, and you can use this ability at most once per round.</Pair>
<Pair title="At 10th Level">Your spirit surge die increases to 1d8.</Pair>
<Pair title="At 20th Level">You spirit surge die increases to 1d10.</Pair>
</Ability>
<Ability id="class-medium-shared-seance-su" icon={["upgrade"]}>
<Pair single id="class-medium-shared-seance-su">Shared Seance (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">All allies who participate in your seance gain the channeled spirit's seance boon for 24 hours.</Pair>
</Ability>
<Ability id="class-medium-taboo-ex" icon={["upgrade"]}>
<Pair single id="class-medium-taboo-ex">Taboo (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>During your daily seance, you can accept a taboo in order to appease your spirit. Each spirit lists example taboos, and the GM may allow additional taboos as well. Accepting a taboo allows you to use your spirit surge ability twice without incurring influence. You can select only a single taboo.</p>
<p>You are not magically prevented from breaking your taboo, but if you break the taboo for any reason, you take a -2 penalty on attack rolls, damage rolls, ability checks, skill checks, and saving throws for 1 hour and your spirit gains 1 point of influence over you. If you continue violating the taboo while taking the penalty, the duration of the penalty extends, but the spirit doesn't gain additional influence over you.</p>
</Pair>
<Pair title="Special">If a spirit attains 5 points of influence because of a violated taboo, instead of possessing you, the spirit leaves your body entirely, and you lose access to your <em>spirit</em> powers, <em>spirit bonus,</em> and <em>spirit surge</em> abilities until the next time you can perform a seance. Banishing a spirit in this way damages your connection to that spirit's legend; you cannot channel spirits of that legend for 1 week, and the next time you channel a spirit of that legend, it starts with 2 points of influence over you instead of 1.</Pair>
</Ability>
<Ability id="class-medium-haunt-channeler-su" icon={["upgrade","mailed-fist"]}>
<Pair single id="class-medium-haunt-channeler-su">Haunt Channeler (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You can always act on the surprise round against a haunt.</Pair>
<Pair title="Ability">Your touch funnels a portion of the haunt into yourself, dealing 1d6 points of damage to the haunt per 2 medium levels you possess as if via positive energy and allowing you to ask the haunt a single question. The haunt can answer the question however it chooses. Additionally, you can forgo your saving throw against a haunt's effects to funnel the haunt entirely into yourself. If you do so, you suffer the haunt's full effect, but the haunt doesn't affect anyone else (even if it normally would). The haunt then gains control of your body for 24 hours. Once per minute, you can attempt to end this possession early by succeeding at a Will save (DC = 20 + 1/2 your medium level).</Pair>
</Ability>
<Ability id="class-medium-location-channel-sp" icon={["stairs-goal"]}>
<Pair single id="class-medium-location-channel-sp">Location Channel (Sp)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">You can perform a special seance at the site of a person's death - or a location that was precious to that person in life - to call forth that person's spirit into your body so your allies can ask it questions. The effects are similar to the spell <Link to="/spell/call_spirit">call spirit</Link>, except that the duration is 1 round per medium level and the spirit possesses your body instead of appearing in a wispy form. The other participants of the seance must ask the questions.</Pair>
<Pair title="Special">Once you attempt to call a spirit, you cannot attempt to call the same spirit again for 24 hours. Once per round, you can attempt to end the seance early by succeeding at a Will save (DC = 20 + 1/2 your medium level).</Pair>
</Ability>
<Ability id="class-medium-connection-channel-sp" icon={["upgrade"]}>
<Pair single id="class-medium-connection-channel-sp">Connection Channel (Sp)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">You can use your <em>location channel</em> ability at any location, so long as you possess some connection to the deceased. If another participant in the seance is more familiar with the deceased than you, you can substitute that participant's familiarity in place of your own to determine the DC of the <em>call spirit</em> effect.</Pair>
</Ability>
<Ability id="class-medium-propitiation-su" icon={["armor-upgrade"]}>
<Pair single id="class-medium-propitiation-su">Propitiation (Su)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">You have learned hidden techniques and rites that allow you to mollify your channeled spirit once per day, reducing its influence over you by 1 point (to a minimum of 1 point of influence). The details of the propitiation ritual vary based on the individual spirit, but the process always takes around 10 minutes to perform and it never requires any additional cost (such as an offering of wealth or a live sacrifice).</Pair>
</Ability>
<Ability id="class-medium-ask-the-spirits-sp" icon={["magic-swirl"]}>
<Pair single id="class-medium-ask-the-spirits-sp">Ask the Spirits (Sp)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">You can send your consciousness to the Astral Plane any number of times per day to ask the spirits for advice, as if using <Link to="/spell/contact_other_plane">contact other plane</Link> to contact the Astral Plane. You automatically succeed at the Intelligence check to avoid the possible decrease to your Intelligence and Charisma.</Pair>
</Ability>
<Ability id="class-medium-astral-journey-sp" icon={["magic-swirl"]}>
<Pair single id="class-medium-astral-journey-sp">Astral Journey (Sp)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">You can enter a deep coma in order to project yourself onto the Astral Plane as <Link to="/spell/astral_projection">astral projection</Link>, except you can project only yourself, you can't enter other planes, and your projected gear has no magical properties.</Pair>
</Ability>
<Ability id="class-medium-trance-of-three-su" icon={["upgrade"]}>
<Pair single id="class-medium-trance-of-three-su">Trance of Three (Su)</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Swift Action">You can allow your spirit to gain 1 point of influence over you in order to allow a portion of a legendary spirit from another legend to enter you for 1 round per level, granting you the intermediate spirit power from another legend.</Pair>
<Pair title="Free Action">You can end the <em>trance of three</em> early.</Pair>
<Pair title="Special">If the granted power has a limited number of uses per day, you must keep track of the remaining uses even after the secondary spirit is gone; if you call the secondary spirit again that day, it can grant the remaining uses of that power. If you use an ability that incurs influence, your primary spirit gains that amount of influence over you, not the secondary spirit. You don't gain the benefits of your spirit bonus from the secondary spirit.</Pair>
</Ability>
<Ability id="class-medium-spacious-soul-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-medium-spacious-soul-su" flavor="A medium's soul is spacious enough to provide a foothold for his fallen allies, if he so chooses.">Spacious Soul (Su)</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Immediate Action">If one of the allies who participated in your seance that day dies within line of effect and line of sight of you, you can accept that ally's spirit within you. Since the ally inhabits the portion of your soul normally reserved for a spirit, this suppresses your <em>spirit, spirit bonus,</em> and <em>spirit surge</em> abilities as long as you maintain this ability.</Pair>
<Pair title="Info">The ally's spirit and you share the your body and can decide each round on the your turn which of you will take the you actions for that round. If you don't agree on who should act, you attempt opposed Charisma checks to determine who is dominant for the next hour, and the dominant character decides who acts on each round. The ally's spirit has all the spells and limited use abilities (such as uses of <em>channel energy, ki,</em> and <em>panache</em>) that it possessed at the time of death, but it is incapable of regaining any abilities, points, spells, or uses of abilities it expends. When the ally's spirit acts, it uses the ally's base attack bonus, caster level, and special abilities (such as weapon proficiency), but uses your physical ability scores.</Pair>
<Pair title="Standard Action">You can end this effect early, though if the ally is unwilling to depart, you must succeed at a Will saving throw (DC = 10 + 1/2 the ally's hit dice + the ally's Charisma modifier) or the attempt fails and the ally becomes dominant for 24 hours.</Pair>
<Pair title="Special">If the ally returns to life, this ability immediately ends. Otherwise, you can maintain this ability indefinitely.</Pair>
</Ability>
<Ability id="class-medium-spirit-mastery-ex" icon={["upgrade"]}>
<Pair single id="class-medium-spirit-mastery-ex" flavor="The medium become a legend among spirits, particularly lesser spirits.">Spirit Mastery (Ex)</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">You can use your spirit surge ability an additional two times per day without incurring influence, regardless of whether you accept a taboo or channels a weaker spirit. When channeling a weaker spirit, you can use your spirit surge ability an additional four times per day for each power you forgo, instead of an additional two times.</Pair>
</Ability>
<Ability id="class-medium-astral-beacon-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="class-medium-astral-beacon-su" flavor="A medium is an open connection to the Astral Plane and a shining beacon for spirits.">Astral Beacon (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Free Action">You can channel spirits of any of the five legends you did not contact via your seance. This ability lasts for 1 round and grants access to the intermediate, greater, and supreme spirit powers of the chosen spirits.</Pair>
<Pair title="Special">Unlike trance of three, astral beacon allows spirits of the chosen legends (for instance, archmage) to gain influence over you until 24 hours from when you contacted your primary spirit. Also unlike trance of three, if you would incur influence by using one of the new spirits' abilities, that influence is added to your total influence from that spirit rather than from your primary spirit.</Pair>
</Ability>
<h3 id="class-medium-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-medium--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Hardened Soul (Su)</td><td>At 20th level, the medium's soul has calluses from all the times some spirit or another has tried to take over. The medium does not become an NPC until his influence with a spirit reaches 8, and his spirit surge dice increases to 2d8.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-medium-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-medium/fiend_keeper">Fiend Keeper</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Spirit; Haunt Channeler; Location Channel; Connection Channel; Ask the Spirits</p><p>(Grippli only) Fiend keepers serve as a vessel to contain one of the world's evil spirits so that it cannot inflict further harm.</p></div>
<div className="archetype"><p><Link to="/arc-medium/kami_medium">Kami Medium</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Taboo; Spellcasting; Haunt Channeler; Location Channel; Connection Channel; Ask the Spirits; Astral Journey</p><p>Some mediums channel the power of nature spirits called kami rather than the spirits of legend.</p></div>
<div className="archetype"><p><Link to="/arc-medium/medium_of_the_master">Medium of the Master</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiency; Spirit; Spirit Surge; Spirit Power (Lesser); Shared Seance; Spirit Power (Intermediate); Trance of Three; Spirit Power (Supreme)</p><p>A medium of the master forgoes a connection with most spirits to form a bond with the spirits of great martial artists.</p></div>
<div className="archetype"><p><Link to="/arc-medium/nexian_channeler">Nexian Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Knacks; Taboo; Haunt Channeler; Location Channel; Connection Channel; Propitiation; Ask the Spirits; Astral Journey; Trance of Three; Spacious Soul; Spirit Mastery; Astral Beacon</p><p>The archmage Nex long ago created an astral reflection of himself from which he can draw additional power. This echo now serves as an appropriate spirit for well-trained mediums to channel.</p></div>
<div className="archetype"><p><Link to="/arc-medium/outer_channeler">Outer Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Taboo; Haunt Channeler; Connection Channel; Location Channel; Ask the Spirits; Astral Journey</p><p>Outer channelers invite extraplanar entities to inhabit them, allowing the likes of angels and demons to use them as vessels in exchange for power.</p></div>
<div className="archetype"><p><Link to="/arc-medium/reanimated_medium">Reanimated Medium</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Taboo; Haunt Channeler; Location Channel; Connection Channel; Spacious Soul; Astral Beacon</p><p>Sometimes a departed soul destined for legend gains a second chance at life by possessing his own revived body.</p></div>
<div className="archetype"><p><Link to="/arc-medium/relic_channeler">Relic Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Haunt Channeler; Location Channel; Connection Channel</p><p>A relic channeler carries relics of legend around with her.</p></div>
<div className="archetype"><p><Link to="/arc-medium/rivethun_spirit_channeler">Rivethun Spirit Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Spirit; Spirit Bonus; Spirit Surge; Taboo; Connection Channel</p><p>Rivethun spirit channelers are mediums who practice the ancient dwarven philosophy of the rivethun, which teaches that power lies in the connection between physical bodies and immaterial souls.</p></div>
<div className="archetype"><p><Link to="/arc-medium/spirit_dancer">Spirit Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Spirit Bonus; Spirit Surge; Taboo; Shared Seance; Trance of Three; Spacious Soul; Astral Beacon</p><p>A spirit dancer enacts an exuberant dance to the spirits, accepting many roles in the shifting dance and changing dance partners quickly.</p></div>
<div className="archetype"><p><Link to="/arc-medium/spirit_eater">Spirit Eater</Link></p><p><strong>Modifies or Replaces:</strong> Haunt Channeler; Location Channel; Connection Channel</p><p>Guardians of their communities, spirit eaters absorb the dead to channel their power and serve as a line of defense against all manner of incorporeal yokai.</p></div>
<div className="archetype"><p><Link to="/arc-medium/storm_dreamer">Storm Dreamer</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Surge; Haunt Channeler; Location Channel; Connection Channel</p><p>Storm dreamers serve the Storm Kindlers by communing with their mystical predecessors. They serve as spiritual advisors for the organization, and are valued for the lore and wisdom they gain during their trances.</p></div>
<div className="archetype"><p><Link to="/arc-medium/storyteller">Storyteller</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Spirit Bonus; Spirit Surge; Shared Seance; Taboo; Haunt Channeler; Propitiation; Trance of Three; Connection Channel; Spirit Mastery; Astral Beacon</p><p>While all mediums connect to legendary spirits, storyteller mediums take their obsession with legends to the extreme, suffusing their lives with epic tales at the cost of some of their spiritual power.</p></div>
<div className="archetype"><p><Link to="/arc-medium/uda_wendo">Uda Wendo</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spirit; Shared Seance; Haunt Channeler; Location Channel; Connection Channel</p><p>Uda wendo are powerful mediums who are sensitive to the presence and desires of the wendo, powerful and mysterious entities that walk Golarion while shaping fate and guiding destiny.</p></div>
<div className="archetype"><p><Link to="/arc-medium/vessel_of_the_failed">Vessel of the Failed</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Spirit Mastery; Spirit Surge; Taboo</p><p>A vessel of the failed channels the spirits of those who attempted the Test of the Starstone but failed; these spirits grant the medium abilities wrought from the spirits' ultimate shortcomings.</p></div>
<div className="archetype"><p><Link to="/arc-medium/voice_of_the_void">Voice of the Void</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Taboo; Haunt Channeler</p><p>Some mediums delve deeply into the spirit world and make contact with entities that exist outside the boundaries of the sane multiverse.</p></div>
<h3 id="class-medium-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"medium archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Ask the Spirits"},{"header":"Astral Beacon"},{"header":"Astral Journey"},{"header":"Class Skills"},{"header":"Haunt Channeler"},{"header":"Knacks"},{"header":"Location Channel"},{"header":"Connection Channel"},{"header":"Propitiation"},{"header":"Shared Seance"},{"header":"Spacious Soul"},{"header":"Spellcasting"},{"header":"Spirit"},{"header":"Spirit Bonus"},{"header":"Spirit Power (Lesser)"},{"header":"Spirit Power (Intermediate)"},{"header":"Spirit Power (Supreme)"},{"header":"Spirit Surge"},{"header":"Spirit Mastery"},{"header":"Taboo"},{"header":"Trance of Three"}],"data":[["‹arc-medium/Fiend Keeper›","X",null,"X",null,null,null,"X",null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-medium/Kami Medium›",null,null,"X",null,"X",null,"X",null,"X","X",null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-medium/Medium of the Master›",null,"X",null,null,null,"X",null,null,null,null,null,"X",null,null,"X",null,"X","X","X","X",null,null,"X"],["‹arc-medium/Nexian Channeler›",null,null,"X","X","X",null,"X","X","X","X","X",null,"X",null,"X",null,null,null,null,null,"X","X","X"],["‹arc-medium/Outer Channeler›",null,null,"X",null,"X",null,"X",null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-medium/Reanimated Medium›",null,null,null,"X",null,null,"X",null,"X","X",null,null,"X",null,"X",null,null,null,null,null,null,"X",null],["‹arc-medium/Relic Channeler›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-medium/Rivethun Spirit Channeler›",null,null,null,null,null,null,null,null,null,"X",null,null,null,"X","X","X",null,null,null,"X",null,"X",null],["‹arc-medium/Spirit Dancer›",null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,"X","X",null,null,null,"X",null,"X","X"],["‹arc-medium/Spirit Eater›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-medium/Storm Dreamer›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null],["‹arc-medium/Storyteller›",null,null,null,"X",null,null,"X",null,null,"X","X","X",null,null,"X","X",null,null,null,"X","X","X","X"],["‹arc-medium/Uda Wendo›",null,null,null,null,null,"X","X",null,"X","X",null,"X",null,null,"X",null,null,null,null,null,null,null,null],["‹arc-medium/Vessel of the Failed›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X","X",null],["‹arc-medium/Voice of the Void›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-medium-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="medium" prefix="class-medium-" />
</>};
const _samurai = {hasJL:true,title: "Samurai", jsx: <><div className="jumpList" id="class-samurai-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-samurai-challenge-ex">Challenge</InnerLink></li><li><InnerLink toTop to="class-samurai-mount-ex">Mount</InnerLink></li><li><InnerLink toTop to="class-samurai-order-ex">Order</InnerLink></li><li><InnerLink toTop to="class-samurai-resolve-ex">Resolve</InnerLink></li><li><InnerLink toTop to="class-samurai-determined">Determined</InnerLink></li><li><InnerLink toTop to="class-samurai-resolute">Resolute</InnerLink></li><li><InnerLink toTop to="class-samurai-unstoppable">Unstoppable</InnerLink></li><li><InnerLink toTop to="class-samurai-weapon-expertise-ex">Weapon Expertise</InnerLink></li><li><InnerLink toTop to="class-samurai-mounted-archer-ex">Mounted Archer</InnerLink></li><li><InnerLink toTop to="class-samurai-banner-ex">Banner</InnerLink></li><li><InnerLink toTop to="class-samurai-bonus-feat">Bonus Feat</InnerLink></li><li><InnerLink toTop to="class-samurai-greater-resolve-ex">Greater Resolve</InnerLink></li><li><InnerLink toTop to="class-samurai-honorable-stand-ex">Honorable Stand</InnerLink></li><li><InnerLink toTop to="class-samurai-demanding-challenge-ex">Demanding Challenge</InnerLink></li><li><InnerLink toTop to="class-samurai-greater-banner-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-samurai-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-samurai-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-samurai-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-samurai-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-samurai-samurai">Samurai</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 18</Link></p>
<p>Few warriors are more dedicated to honor and the code of the warrior than the samurai. Trained from an early age in the art of war and sworn to the service of a lord, the samurai holds a position of power and respect in many lands, often serving as the voice and justice of the local noble. The samurai takes on his training with zeal, learning the way of the blade (typically a katana), the bow, and the horse. Some even learn how to effectively use firearms, if they are available. The samurai is often the most trusted soldier in his lord's employ. In him, the common folk see honor and sacrifice. He is an honorable warrior, dedicated to the realm and the leaders that guide it.</p>
<p><strong>Role:</strong> While typically sworn to the service of a lord, a samurai is usually given free reign as to how he performs that service. As such, samurai can sometimes be found with other adventurers, taking the fight to the enemies of their masters. Other samurai become ronin, striving to serve an ideal without paying fealty to a lord. In either case, samurai make powerful allies, capable of withstanding nearly any harm while dispatching their foes with deadly precision. The samurai is an alternate class for the cavalier base class.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/cavalier">Cavalier</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-samurai-class-features">Class Features</h3>
<ScrollContainer id="class-samurai--table-0"><table>
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
<td>Challenge 1/day, mount, order, resolve</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+0</td>
<td>+0</td>
<td>Order ability</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>Weapon expertise</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Challenge 2/day, mounted archer</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+1</td>
<td>+1</td>
<td>Banner</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>Challenge 3/day</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+2</td>
<td>+2</td>
<td>Order ability</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+3</td>
<td>+3</td>
<td>Greater resolve</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Challenge 4/day</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+3</td>
<td>+3</td>
<td>Honorable stand</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Bonus feat, demanding challenge</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+4</td>
<td>+4</td>
<td>Challenge 5/day</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+4</td>
<td>+4</td>
<td>Greater banner</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+5</td>
<td>+5</td>
<td>Order ability</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>Challenge 6/day</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+5</td>
<td>+5</td>
<td>True resolve</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+6</td>
<td>+6</td>
<td>Challenge 7/day</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+6</td>
<td>+6</td>
<td>Last stand</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={4}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><td><Link to="/eq-weapon/katana">katana</Link></td><td><Link to="/eq-weapon/naginata">naginata</Link></td></tr><tr><td colSpan={2}><Link to="/eq-weapon/wakizashi">wakizashi</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light, Medium, and Heavy armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-samurai-challenge-ex" icon={["mailed-fist"]}>
<Pair single id="class-samurai-challenge-ex" flavor="A samurai can challenge a foe to combat.">Challenge (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per three samurai levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">You choose one target within sight to challenge. Your melee attacks deal extra damage when made against the target of your <em>challenge.</em> This extra damage is equal to your level. Challenging a foe requires much of your concentration. You take a -2 penalty to your Armor Class, except against attacks made by the target of your <em>challenge.</em></Pair>
<Pair title="Special">The <em>challenge</em> remains in effect until the target is dead or unconscious or until the combat ends. Your <em>challenge</em> also includes another effect which is listed in the section describing your <em>order.</em></Pair>
</Ability>
<Ability id="class-samurai-mount-ex" icon={["stairs-goal"]}>
<Pair single id="class-samurai-mount-ex" flavor="A samurai gains the service of a loyal and trusty steed to carry him into battle.">Mount (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>Your mount functions as a druid's <Link to="/sidekick/animal_companion">animal companion</Link>, using your samurai level as your effective druid level. The creature must be one that you are capable of riding and that is suitable as a mount. You do not take an armor check penalty on Ride checks while riding your mount. The mount is always considered combat trained and begins play with <Link to="/feat/light_armor_proficiency">Light Armor Proficiency</Link> as a bonus feat. Your mount does not gain the <em>share spells</em> special ability.</p>
<p>Medium samurai mounts: <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. Small samurai mounts: <Link to="/companion/pony">pony</Link> or a <Link to="/companion/wolf">wolf</Link>. At 4th level, you add <Link to="/companion/boar">boar</Link> and <Link to="/companion/dog">dog</Link> to this list. The GM may approve other animals as suitable mounts.</p>
</Pair>
<Pair title="Special">Should your mount die, you may find another mount to serve you after 1 week of mourning. This new mount does not gain the <em>link, evasion, devotion,</em> or <em>improved evasion</em> special abilities until the next time you gain a level.</Pair>
</Ability>
<Ability id="class-samurai-order-ex" icon={["stairs-goal","upgrade","skills"]}>
<Pair single id="class-samurai-order-ex">Order (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must pledge yourself to a specific <Link to="/ability/orders">order</Link>, typically the <Link to="/order/order_of_the_warrior">order of the warrior</Link>. The order grants you a number of bonuses, class skills, and special abilities. In addition, each order includes a number of <strong className="hl">edicts</strong> that you must follow. If you violate any of these edicts, you lose the benefits from your order's <em>challenge</em> ability for 24 hours. The violation of an edict is subject to GM interpretation.</Pair>
<Pair title="Info">Most samurai belong to the order of the warrior and are dedicated to their lord. Those without a lord, or who chose to abandon their lord, are <Link to="/order/ronin">ronin</Link>. You may instead elect to dedicate yourself to any other order, but such samurai are rare.</Pair>
<Pair title="Special">A samurai who wishes to change his order must undertake a lengthy process to dedicate himself to a new cause. When this choice is made, you immediately lose all of the benefits from your old order. You must then follow the edicts of your new order for one entire level without gaining any benefits from that order. Once you have accomplished this, you gain all the bonuses from your new order. The only exception to this is when a samurai decides to become a ronin. You can elect to become a ronin immediately, losing all the benefits from your old order and replacing them with the new benefits from the ronin order. Once a ronin, however, the only way for you to change to another order is through the method described above. Note that the names of these orders might vary depending upon the campaign setting or GM's preference.</Pair>
</Ability>
<Ability id="class-samurai-resolve-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="class-samurai-resolve-ex">Resolve (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per two samurai levels beyond 1st<ByLevelPop levels={[[1,1],[3,2],[5,3],[7,4],[9,5],[11,6],[13,7],[15,8],[17,9],[19,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Passive Ability">You gain <em>resolve</em> that you can call upon to endure even the most devastating wounds and afflictions. Whenever you defeat the target of your challenge, you regain one daily use of your <em>resolve,</em> up to your maximum number of uses per day. Defeating the target of your challenge usually involves reducing the target to 0 hit points or fewer, but the GM might rule that an enemy who surrenders or flees the battle is also defeated. You can use this <em>resolve</em> in a number of ways.</Pair>
</Ability>
<Ability id="class-samurai-determined" extraClasses="subAbility numbered" icon={["remedy"]}>
<Pair single id="class-samurai-determined">Determined</Pair>
<Pair title="Standard Action">You can spend one use of your <em>resolve</em> to remove the <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link> condition.</Pair>
<Pair title="At 8th Level">You can now remove the <Link to="/misc/exhausted">exhausted</Link>, <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/nauseated">nauseated</Link>, or <Link to="/misc/staggered">staggered</Link> conditions, instead.</Pair>
<Pair title="Special">If the condition has a duration longer than 1 hour or is permanent, this ability removes the condition for 1 hour, at which time the condition returns.</Pair>
</Ability>
<Ability id="class-samurai-resolute" extraClasses="subAbility numbered" icon={["rolling-dices"]}>
<Pair single id="class-samurai-resolute">Resolute</Pair>
<Pair title="Immediate Action">Whenever you are required to make a Fortitude or Will save, you can spend one use of your <em>resolve</em> to roll twice and take the better result. You must decide to use this ability before you roll the saving throw.</Pair>
</Ability>
<Ability id="class-samurai-unstoppable" extraClasses="subAbility numbered" icon={["armor-upgrade"]}>
<Pair single id="class-samurai-unstoppable">Unstoppable</Pair>
<Pair title="Immediate Action">When you are reduced to fewer than 0 hit points but not slain, you can spend one use of your <em>resolve</em> to instantly <Link to="/misc/stabilize">stabilize</Link> and remain conscious. You are staggered, but you do not fall unconscious and begin dying if you take a standard action. You do fall unconscious if you take additional damage from any source.</Pair>
</Ability>
<Ability id="class-samurai-weapon-expertise-ex" icon={["upgrade"]}>
<Pair single id="class-samurai-weapon-expertise-ex">Weapon Expertise (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Select either the katana, <Link to="/eq-weapon/longbow">longbow</Link>, naginata, or wakizashi. Whenever you threaten a critical hit with the selected weapon, you gain a +2 bonus on the confirmation roll.</Pair>
<Pair title="Free Action">You can draw the selected weapon as if you had the <Link to="/feat/quick_draw">Quick Draw</Link> feat.</Pair>
<Pair title="Passive Ability">Your samurai levels count as fighter levels and stack with any fighter levels you possess for the purposes of meeting the prerequisites for feats that specifically select your chosen weapon, such as <Link to="/feat/weapon_specialization">Weapon Specialization</Link>.</Pair>
</Ability>
<Ability id="class-samurai-mounted-archer-ex" icon={["upgrade"]}>
<Pair single id="class-samurai-mounted-archer-ex" flavor="A samuari becomes skilled at firing ranged weapons while mounted.">Mounted Archer (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You only take a -2 penalty on attack rolls with ranged weapons while your mount takes a double move. This penalty increases to -4 while your mount is running.</Pair>
</Ability>
<Ability id="class-samurai-banner-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="class-samurai-banner-ex" flavor="A samurai's banner becomes a symbol of inspiration to his allies and companions.">Banner (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">As long as your banner is clearly visible, all allies within 60 feet receive a +2 morale bonus on saving throws against fear and a +1 morale bonus on attack rolls made as part of a <Link to="/rule/charge">charge</Link>.</Pair>
<Pair title="At 10th Level">The bonus on saving throws becomes +3 and the charge bonus becomes +2.</Pair>
<Pair title="At 15th Level">These bonuses become +4 and +3.</Pair>
<Pair title="At 20th Level">These bonuses become +5 and +4.</Pair>
<Pair title="Special">The banner must be at least Small or larger and must be carried or displayed by you or your mount to function.</Pair>
</Ability>
<aside><p>Some samurais inspire and direct their allies with specialized tactics. A samurai can select <Link to="/ability/banners">a different battle standard</Link> upon gaining the banner class feature, and its benefits replace the normal benefits of the banner and greater banner class features.</p>
</aside><Ability id="class-samurai-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="class-samurai-bonus-feat">Bonus Feat</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You gain a bonus <Link to="/main/combat_feat">combat feat</Link>. You must meet the prerequisites of this feat.</Pair>
<Pair title="At 12th Level">You gain a second bonus combat feat. You must meet the prerequisites of this feat.</Pair>
<Pair title="At 18th Level">You gain a third bonus combat feat. You must meet the prerequisites of this feat.</Pair>
</Ability>
<Ability id="class-samurai-greater-resolve-ex" icon={["armor-upgrade"]}>
<Pair single id="class-samurai-greater-resolve-ex">Greater Resolve (Ex)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Immediate Action">After a critical hit is confirmed against you, you can spend one use of your <em>resolve</em> to treat that critical hit as a normal hit.</Pair>
<Pair title="Special">Effects that only trigger on a critical hit do not trigger when you use this ability.</Pair>
</Ability>
<Ability id="class-samurai-honorable-stand-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="class-samurai-honorable-stand-ex" flavor={<>A samurai can make an honorable stand, deciding to fight the target of his <em>challenge</em> to the bitter end, no matter the cost.</>}>Honorable Stand (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Swift Action">You can make an honorable stand. While doing so, you are immune to the shaken, frightened, and <Link to="/misc/panicked">panicked</Link> conditions. You do not fall unconscious while your hit point total is below 0. Finally, if you are making an honorable stand and must make a saving throw, you can spend one daily use of your <em>resolve</em> to reroll the saving throw after the first roll is made. You must take the result of the second roll, even if it is worse.</Pair>
<Pair title="At 16th Level">You can make an <em>honorable stand</em> twice a day.</Pair>
<Pair title="Special">If you are making an honorable stand and ever retreat from battle against your <em>challenged</em> foe, you lose the ability to make a <em>challenge</em> for 24 hours.</Pair>
</Ability>
<Ability id="class-samurai-demanding-challenge-ex" icon={["armor-downgrade"]}>
<Pair single id="class-samurai-demanding-challenge-ex">Demanding Challenge (Ex)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever you declare a <em>challenge,</em> your target must pay attention to the threat you pose. As long as the target is within your threatened area, it takes a -2 penalty to its AC from attacks made by anyone other than you.</Pair>
</Ability>
<Ability id="class-samurai-greater-banner-ex" icon={["armor-upgrade"]}>
<Pair single id="class-samurai-greater-banner-ex" flavor="A samurai's banner becomes a rallying call to his allies.">Greater Banner (Ex)</Pair>
<Pair title="Passive Ability">All allies within 60 feet receive a +2 morale bonus on saving throws against charm and compulsion spells and effects.</Pair>
<Pair title="Standard Action">While your banner is displayed, you can wave the banner through the air, granting all allies within 60 feet an additional saving throw against any one spell or effect that is targeting them. This save is made at the original DC. Spells and effects that do not allow saving throws are unaffected by this ability. An ally cannot benefit from this ability more than once per day.</Pair>
</Ability>
<Ability id="class-samurai-true-resolve-ex" icon={["armor-upgrade"]}>
<Pair single id="class-samurai-true-resolve-ex">True Resolve (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Ability">If you have at least two uses of your <em>resolve</em> remaining, you can spend all of the daily uses of your <em>resolve</em> that you have available to you to avoid death. Regardless of the source of the attack that would have killed you, you are left alive, at -1 hit points (or lower if you were already below -1), <Link to="/misc/unconscious">unconscious</Link>, and <Link to="/misc/stable">stable</Link>.</Pair>
</Ability>
<Ability id="class-samurai-last-stand-ex" icon={["armor-upgrade"]}>
<Pair single id="class-samurai-last-stand-ex">Last Stand (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Ability">You can make a <em>last stand</em> whenever you make a <em>challenge.</em> While this <em>challenge</em> is in effect, all melee and ranged weapons deal the minimum amount of damage to you, unless the attack scored is a critical hit. In addition, you remain conscious and are not staggered while you are below 0 hit points.</Pair>
<Pair title="Passive Ability">While using this ability, you cannot be killed by melee or ranged weapons unless they are wielded by the target of your <em>challenge.</em> Attacks made by opponents that are not the target of your <em>challenge</em> deal no damage when you have 0 or fewer hit points. This ability has no effect on spells, environmental effects, supernatural abilities, or any other source of damage other than melee and ranged weapons. Such sources of damage affect you normally and can kill you (although they do not cause you to fall unconscious or to become staggered if they reduce your hit points below 0).</Pair>
<Pair title="Special">This effect lasts until the <em>challenge</em> ends or you take an offensive action against a target other than the target of your <em>challenge.</em></Pair>
</Ability>
<h3 id="class-samurai-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-samurai--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Great Beast (Su)</td><td>At 20th level, the character's <Link to="/sidekick/animal_companion">animal companion</Link> is a paragon of its kind - a hero and legend in its own right. The animal companion's Strength, Dexterity, Constitution, and Wisdom scores each increase by 4. This capstone is available to any class with an animal companion.</td></tr>
<tr><td>Indomitable Spirit (Ex)</td><td>At 20th level, the sight of the samurai on the battlefield gives heart to even the most doomed force. The range of the samurai's banner increases by 90 feet, the bonuses offered by the banner increase by 2, and the samurai can wave his banner to use its ability as a <strong className="hl">move action</strong> instead of a standard action.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-samurai-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-samurai/brawling_blademaster">Brawling Blademaster</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Mount; Weapon Expertise; Mounted Archer; Banner; Greater Banner</p><p>Brawling blademaster samurai use weapon strikes and unarmed attacks in equal measure</p></div>
<div className="archetype"><p><Link to="/arc-samurai/ironbound_sword">Ironbound Sword</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Expertise; Banner; Greater Banner</p><p>The ironbound sword's fighting style, focused on incapacitating opponents rather than killing them, can subdue a foe without causing permanent harm, leaving the soul of the samurai unstained by deaths of her enemies.</p></div>
<div className="archetype"><p><Link to="/arc-samurai/sovereign_blade">Sovereign Blade</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Mount; Mounted Archer; 6th, 12th, 18th-level bonus feats</p><p>In Tian Xia, many samurai are tutored in the ways of honor using lessons that originate from sovereign dragons and their dedication to safeguarding harmony.</p></div>
<div className="archetype"><p><Link to="/arc-samurai/sword_saint">Sword Saint</Link></p><p><strong>Modifies or Replaces:</strong> Samurai's Mount; Mounted Charge; Banner; Greater Banner</p><p>Sword saints hail from lands where samurai are prevalent, and are often ronin who wander the world seeking new challenges to perfect their intricate style of swordplay called iaijutsu.</p></div>
<div className="archetype"><p><Link to="/arc-samurai/ward_speaker">Ward Speaker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Resolve; Greater Resolve; True Resolve; Honorable Stand</p><p>The ward speaker draws power from simple rituals to honor the spirits found throughout the world so that he might better protect those entrusted to his care.</p></div>
<div className="archetype"><p><Link to="/arc-samurai/warrior_poet">Warrior Poet</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Mount; Weapon Expertise; Banner; Greater Banner; Challenge; Mounted Archer; Demanding Challange; Bonus Combat Feats</p><p>Warrior poets often study calligraphy, flower arrangement, poetry, and other courtly arts, but when called to battle, they treat combat as its own art form, fighting with beauty and grace.</p></div>
<div className="archetype"><p><Link to="/arc-samurai/yojimbo">Yojimbo</Link></p><p><strong>Modifies or Replaces:</strong> Mount; Weapon Expertise; Mounted Archer</p><p>Yojimbo are highly trained bodyguards favored by the nobles and warlords of distant Minkai.</p></div>
<h3 id="class-samurai-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"samurai archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Banner"},{"header":"Greater Banner"},{"header":"Bonus Combat Feats"},{"header":"Challenge"},{"header":"Demanding Challange"},{"header":"Honorable Stand"},{"header":"Mount"},{"header":"Mounted Archer"},{"header":"Mounted Charge"},{"header":"Resolve"},{"header":"Greater Resolve"},{"header":"True Resolve"},{"header":"Weapon Expertise"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-samurai/Brawling Blademaster›",null,"X","X",null,null,null,null,"X","X",null,null,null,null,"X","X"],["‹arc-samurai/Ironbound Sword›",null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-samurai/Sovereign Blade›","X",null,null,"X",null,null,null,"X","X",null,null,null,null,null,null],["‹arc-samurai/Sword Saint›",null,"X","X",null,null,null,null,"X",null,"X",null,null,null,null,null],["‹arc-samurai/Ward Speaker›","X",null,null,null,null,null,"X",null,null,null,"X","X","X",null,null],["‹arc-samurai/Warrior Poet›",null,"X","X","X","X","X",null,"X","X",null,null,null,null,"X","X"],["‹arc-samurai/Yojimbo›",null,null,null,null,null,null,null,"X","X",null,null,null,null,"X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-samurai-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="samurai" prefix="class-samurai-" />
</>};
const _shaman = {hasJL:true,title: "Shaman", jsx: <><div className="jumpList" id="class-shaman-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-shaman-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-shaman-spirit-su">Spirit</InnerLink></li><li><InnerLink toTop to="class-shaman-spirit-animal-ex">Spirit Animal</InnerLink></li><li><InnerLink toTop to="class-shaman-spirit-magic">Spirit Magic</InnerLink></li><li><InnerLink toTop to="class-shaman-hex">Hex</InnerLink></li><li><InnerLink toTop to="class-shaman-wandering-spirit-su">Wandering Spirit</InnerLink></li><li><InnerLink toTop to="class-shaman-wandering-hex">Wandering Hex</InnerLink></li><li><InnerLink toTop to="class-shaman-manifestation-su">Manifestation</InnerLink></li><li><InnerLink toTop to="class-shaman-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-shaman-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-shaman-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-shaman-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-shaman-shaman">Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 35</Link></p>
<p>While some heroes speak to gods or consort with otherworldly muses, shamans commune with the spirits of the world and the energies that exist in every living thing. These divine adventurers draw upon their power to shape the world and expand the influence of their spiritual patrons. Shamans have strong ties to natural spirits. They form powerful bonds with particular spirits, and as their power grows they learn to call upon other spirits in times of need.</p>
<p><strong>Role:</strong> Shamans make for potent divine spellcasters, capable of using divine spells and the power of their spirits to aid their allies and destroy their foes. While they aren't the healers that clerics are, they can still fill that role when needed.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/oracle">Oracle</Link> and <Link to="/class/witch">witch</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-shaman-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-shaman--table-0"><table>
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
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Orisons, spirit, spirit animal, spirit magic</td>
<td>3</td>
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
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Hex</td>
<td>4</td>
<td>2</td>
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
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>-</td>
<td>4</td>
<td>2</td>
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
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Hex, wandering spirit</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Wandering hex</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Hex, spirit (greater)</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Hex, wandering spirit (greater)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Wandering hex (2 hexes)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Hex, spirit (true)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Hex, manifestation, wandering spirit (true)</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-shaman-spells" icon={["magic-swirl"]}><Pair single id="class-shaman-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To prepare or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</Pair>
<Pair title="Ability">You gain the ability to cast Wisdom spells which are drawn from the <Link to="/main/spells_shaman">shaman spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Special">You must spend 1 hour each day in quiet contemplation with your spirit animal to regain your daily allotment of spells. You may prepare and cast any spell on your spell list, provided that you can cast spells of that level, but you must choose which spells to prepare.</Pair></Ability><Ability id="class-shaman-orisons" icon={["magic-swirl"]}>
<Pair single id="class-shaman-orisons">Orisons</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of orisons, or 0-level divine spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Orisons prepared using other spell slots, such as those due to metamagic feats, are expended normally.</Pair>
</Ability>
<Ability id="class-shaman-spirit-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-shaman-spirit-su" flavor="A shaman forms a mystical bond with the spirits of the world.">Spirit (Su)</Pair>
<Pair title="Ability">You form a lasting bond with a single <Link to="/ability/shaman_spirits">spirit</Link>, which grants a number of abilities and defines many of your other class features.</Pair>
<Pair title="At 1st Level">You gain the <em>spirit ability</em> granted by your chosen spirit. You add the spells granted by that spirit to the list of spells that you can cast using <em>spirit magic.</em> You also add the hexes possessed by that spirit to the list of hexes that you can use with the <em>hex</em> and <em>wandering hex</em> class features.</Pair>
<Pair title="At 8th Level">You gain the abilities listed in the <em>greater</em> version of your selected spirit.</Pair>
<Pair title="At 16th Level">You gain the abilities listed for the <em>true</em> version of your selected spirit.</Pair>
<Pair title="Special">If you take levels in another class that grants a mystery (such as the oracle), the spirit and mystery must match, even if that means one of them must change. Subject to GM discretion, you can change your former mystery or spirit to make them conform.</Pair>
</Ability>
<Ability id="class-shaman-spirit-animal-ex" icon={["stairs-goal"]}>
<Pair single id="class-shaman-spirit-animal-ex">Spirit Animal (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You form a close bond with a spirit animal tied to your chosen <em>spirit.</em> This animal is your conduit to the spirit world, guiding you along the path to enlightenment.</p>
<p>You must commune with your spirit animal each day to prepare your spells. While the spirit animal does not store the spells like a witch's familiar does, the spirit animal serves as your conduit to divine power. If your spirit animal is slain, you cannot prepare new spells or use your spirit magic class feature until the spirit animal is replaced.</p>
<p>By communing with the incredible powers of your spirit, you forge a cherished bond with one specific servant of that spirit - known as a <em>spirit animal.</em> A spirit animal is a creature chosen by you to serve as a conduit, allowing you to more fully access the magic of your spirit on a daily basis. Your spirit animal also grants you special powers. This ability uses the same rules as the wizard's <em>arcane bond</em> class feature and is treated as a <Link to="/sidekick/familiar">familiar</Link>, except as noted below.</p>
<p>You use your level as your effective wizard level when determining the abilities of your spirit animal. You can select <Link to="/ability/familiars">any familiar available to wizards</Link> to serve as your spirit animal, although your spirit animal is augmented by the power of your chosen spirit. Once selected, the spirit animal cannot be changed. Although your spirit animal uses the statistics of a specific animal, it is treated as an outsider with the native subtype for the purposes of spells and abilities that affect it.</p>
<p>Levels of different classes that are entitled to familiars stack with shaman levels for the purpose of determining any spirit animal abilities that depend on your level. If you possess such levels in other classes, your spirit animal always uses your rules for spirit animals, not those used by familiars of other classes (such as <Link to="/class/witch">witches</Link>, <Link to="/class/wizard">wizards</Link>, or <Link to="/class/sorcerer">sorcerers</Link> with the <Link to="/sorcbloodline/arcane">arcane</Link> bloodline). If you have witch levels, your spirit animal also serves as the conduit to your patron and stores your witch spells. Your spirit animal is treated as a familiar for the purposes of all spells, effects, and abilities that affect familiars.</p>
<p>If a spirit animal is lost or dies, it can be replaced after 24 hours through a special ritual that consumes material components worth 500 gp per shaman level. The ritual takes 8 hours to complete. The new spirit animal must be of the same sort of creature as the previous one.</p>
</Pair>
<Pair title="At 1st Level">Your spirit animal gains specific abilities, depending upon the type of spirit selected by you using your spirit class feature. These abilities affect the animal's appearance and grant it special abilities that can aid it in serving you and the spirit it represents and is connected to. These abilities are described in the <em>spirit animal</em> section of each individual <em>spirit</em> description.</Pair>
<Pair title="At 3rd Level">Your spirit animal can deliver touch spells or hexes for you. If you and the spirit animal are in contact at the time you cast a touch spell, you can designate your animal as the "toucher." The spirit animal can then deliver the touch spell just as you would. If you cast another spell before the touch is delivered, the touch spell dissipates. If you activate a <em>hex,</em> your spirit animal can be used to make the touch; you don't have to be in contact with the animal to use this ability with hexes.</Pair>
</Ability>
<Ability id="class-shaman-spirit-magic" icon={["magic-swirl"]}>
<Pair single id="class-shaman-spirit-magic">Spirit Magic</Pair>
<Pair title="Ability">You can spontaneously cast a limited number of spells per day beyond those you prepared ahead of time. You have one spell slot per day of each shaman spell level you can cast, not including orisons. You can choose these spells from the list of spells granted by your spirits at the time you cast them. You can enhance these spells using any metamagic feat that you know, using up a higher-level spell slot as required by the feat and increasing the time to cast the spell.</Pair>
</Ability>
<Ability id="class-shaman-hex" icon={["magic-swirl"]}>
<Pair single id="class-shaman-hex" flavor="A shaman learns a number of magical tricks, called hexes, which grant her powers or weaken foes.">Hex</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You learn one hex. You can select from any <Link to="/ability/shaman_hexes">of these shaman hexes</Link> or from any of the hexes listed in the description of your chosen spirit. You cannot select a hex more than once unless noted otherwise.</Pair>
<Pair title="At 4th Level">You learn a new hex.</Pair>
<Pair title="At 8th Level">You learn a new hex.</Pair>
<Pair title="At 10th Level">You learn a new hex.</Pair>
<Pair title="At 12th Level">You learn a new hex.</Pair>
<Pair title="At 16th Level">You learn a new hex.</Pair>
<Pair title="At 18th Level">You learn a new hex.</Pair>
<Pair title="At 20th Level">You learn a new hex.</Pair>
<Pair title="Special">Using a hex is a <strong className="hl">standard action</strong> that doesn't provoke an attack of opportunity unless otherwise noted. The saving throw DC to resist a hex is equal to 10 + <Link to="/misc/half">half</Link> your shaman level + your Wisdom modifier.</Pair>
</Ability>
<aside><p>Shamans can take a <Link to="/main/feats_blood_hex">blood hex feat</Link> in place of a regular hex.</p>
</aside><Ability id="class-shaman-wandering-spirit-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-shaman-wandering-spirit-su">Wandering Spirit (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You can form a temporary bond with a spirit other than the one selected using your <em>spirit</em> class feature. You must make this selection each day when preparing your spells. While this feature is active, you gain the <em>spirit ability</em> granted by the spirit. You also add the spells granted by that spirit to your list of spells that you can cast using <em>spirit magic.</em> You do not add the hexes from your <em>wandering spirit</em> to your list of hexes that you can choose from with the hex class feature.</Pair>
<Pair title="At 12th Level">You gain the abilities listed in the <em>greater</em> version of your <em>wandering spirit.</em></Pair>
<Pair title="At 20th Level">You gain the ability listed in the <em>true</em> version of your <em>wandering spirit.</em></Pair>
</Ability>
<Ability id="class-shaman-wandering-hex" icon={["magic-swirl"]}>
<Pair single id="class-shaman-wandering-hex">Wandering Hex</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">You can temporarily gain the use of one of the hexes possessed by either one of your spirits. You must make this selection each day when you prepare your spells. For the purposes of this ability, you can select any hex possessed by your <em>spirit</em> or <em>wandering spirit.</em> If you select it from your <em>wandering spirit,</em> you lose the hex immediately if you bond with another spirit, although you can then select a different hex to gain using this ability, from either your <em>spirit</em> or your new <em>wandering spirit.</em></Pair>
<Pair title="At 14th Level">You can select two wandering hexes each day instead of one.</Pair>
<Pair title="Special">This ability otherwise functions as the hex class feature.</Pair>
</Ability>
<Ability id="class-shaman-manifestation-su" icon={["stairs-goal"]}>
<Pair single id="class-shaman-manifestation-su">Manifestation (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You undergo a transformation as you manifest as a pinnacle of your main spirit. The nature of this manifestation depends on your <em>spirit,</em> and is described in its entry.</Pair>
</Ability>
<h3 id="class-shaman-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-shaman--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Arch-Familiar (Su)</td><td>At 20th level, the character's familiar is smarter and savvier than plenty of adventurers - and also more dangerous! The familiar's Intelligence increases by 5, and it gains 12 spells levels' worth of spell-like abilities (for example, three daily castings of <Link to="/spell/greater_invisibility">greater invisibility</Link>), drawn from spells its master can cast and using its master's caster levels, DCs, and so forth. This capstone is available to any class with a familiar.</td></tr>
<tr><td>Hex Mastery (Su)</td><td>At 20th level, the shaman has learned ever more terrible hexes. She can select one <Link to="/ability/grand_hexes">grand hex</Link> from the list available to witches.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-shaman-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-shaman/animist">Animist</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Magic Spells; 2nd, 8th, 10th, 12th, and 18th-level Hexes; Manifestation</p><p>Even among mystical practitioners, the animist has a strange perspective and even stranger magic. The animist perceives that all things have a spirit, including objects, constructs, illnesses, buildings, and the environment.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/benefactor">Benefactor</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Hexes</p><p>A benefactor seeks to improve the lives of others by primarily offering powerful supportive abilities and magic to her allies and others she deems worthy.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/crystal_tender">Crystal Tender</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Animal; Wandering Spirit; 8th-level Shaman Hex; Manifestation</p><p>A crystal tender focuses on the spirits of metal and stone, using crystals as a means to focus the power of the spirits she venerates.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/deep_shaman">Deep Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Spirit Animal; Class Skills; Spirit Abilities</p><p>Deep shamans are tied to spirits from the depths.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/draconic_shaman">Draconic Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Spirit Animal; 4th, 10th-level Hexes; Spirit Magic</p><p>Some shamans draw their powers from the might of dragons. These shamans each gain a powerful drake as an ally, and view caring for that drake as a sacred duty</p></div>
<div className="archetype"><p><Link to="/arc-shaman/grasping_vine">Grasping Vine</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Animal; Spirit Magic; 2nd, 8th-level Hex</p><p>Grasping vine shamans are typically adherents of one of several scattered sects dedicated to the Green Mother. They revere plant life in all its forms, with a special fondness for poisonous or carnivorous plants.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/name_keeper">Name-Keeper</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spirit Animal; Spirit Magic; Wandering Spirit; Wandering Hex</p><p>Name-keepers have delved into the storied histories etched into the Wall of Names and communed with the departed spirits of those whose names are memorialized on the monument.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/overseer">Overseer</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Magic; Deliver Touch Spells</p><p>While all shamans use their connection to the spirits of the world to draw upon otherworldly magic powers, the shamans of the Lands of the Linnorm Kings have a unique tradition in which they use the power of patron spirits to directly control their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/possessed_shaman">Possessed Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Magic; 2nd and 6th-level Hexes</p><p>For a possessed shaman, merely communing with the spirit world is insufficient. Instead, she invites the spirits to share her body, granting them the chance to experience corporeal existence.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/primal_warden">Primal Warden</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Animal; Spirit Magic; 4th, 8th, 12th-level Hex</p><p>A shaman who communes with spirits that linger in areas where primal magic reigns, learning to stabilize these erratic energies and draw upon them to her benefit.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/serendipity_shaman">Serendipity Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Magic spells</p><p>The serendipitous, shamanistic rites associated with the traditional catfolk worship of the so-called "spirits of creation" focus upon attracting good fortune and banishing ill fortune in the name of these spirits.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/speaker_for_the_past">Speaker for the Past</Link></p><p><strong>Modifies or Replaces:</strong> Spirit Animal; Wandering Spirit; Wandering Hex</p><p>A speaker for the past is a shaman who specifically serves as the voice for spirits from her people's history.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/spirit_warden">Spirit Warden</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spirit Magic Spells; 2nd and 10th-level Hexes</p><p>Not all spirits deserve reverence and respect. Some are twisted and despicable. It's a spirit warden's duty to end these spirits' existence.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/true_silvered_throne">True Silvered Throne</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Spirit Animal; Wandering Spirit; Wandering Hex; 8th-level Hex</p><p>Members in good standing who have risen to a prestigious rank within the Esoteric Order of the Palatine Eye, true silvered thrones have managed to discover rituals and occult secrets within the lore of their order.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/unsworn_shaman">Unsworn Shaman</Link></p><p><strong>Modifies or Replaces:</strong> Spirit; Hex; Spirit Animal; Wandering Spirit; Wandering Hex; Spirit Magic</p><p>An unsworn shaman never binds herself to one specific spirit, always making new deals as she deems necessary for the circumstances that she finds herself in.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/visionary">Visionary</Link></p><p><strong>Modifies or Replaces:</strong> Wandering Spirit; Spirit Magic Spells; Wandering Hex; Greater Wandering Spirit; True Wandering Spirit</p><p>The visionary is a master at divination, drawing upon her intimate relationship with the spirit world to ferret out all manner of secrets and insights about the world around her and beyond.</p></div>
<div className="archetype"><p><Link to="/arc-shaman/witch_doctor">Witch Doctor</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; 4th, 8th, 10th, and 12th-level Hexes</p><p>The witch doctor is a healer who specializes in afflictions of the soul.</p></div>
<h3 id="class-shaman-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"shaman archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Class Skills"},{"header":"Deliver Touch Spells"},{"header":"Hexes"},{"header":"2nd-level Hex"},{"header":"4th-level Hex"},{"header":"6th-level Hex"},{"header":"8th-level Hex"},{"header":"10th-level Hex"},{"header":"12th-level Hex"},{"header":"18th-level Hex"},{"header":"Manifestation"},{"header":"Spellcasting"},{"header":"Spirit"},{"header":"Greater Spirit"},{"header":"Spirit Animal"},{"header":"Spirit Magic"},{"header":"Wandering Hex"},{"header":"Wandering Spirit"},{"header":"Greater Wandering Spirit"},{"header":"True Wandering Spirit"}],"data":[["‹arc-shaman/Animist›",null,null,null,null,"X",null,null,"X","X","X","X","X",null,null,null,null,"X",null,null,null,null],["‹arc-shaman/Benefactor›",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-shaman/Crystal Tender›",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,"X",null,null,"X",null,null],["‹arc-shaman/Deep Shaman›",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null],["‹arc-shaman/Draconic Shaman›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,"X","X",null,null,null,null],["‹arc-shaman/Grasping Vine›",null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null],["‹arc-shaman/Name-Keeper›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null],["‹arc-shaman/Overseer›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-shaman/Possessed Shaman›",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-shaman/Primal Warden›",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,"X","X",null,null,null,null],["‹arc-shaman/Serendipity Shaman›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-shaman/Speaker for the Past›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null],["‹arc-shaman/Spirit Warden›",null,"X",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-shaman/True Silvered Throne›",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,"X","X",null,null],["‹arc-shaman/Unsworn Shaman›",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X","X","X",null,null],["‹arc-shaman/Visionary›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X","X"],["‹arc-shaman/Witch Doctor›","X",null,null,null,null,"X",null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-shaman-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="shaman" prefix="class-shaman-" />
</>};
const _warpriest = {hasJL:true,title: "Warpriest", jsx: <><div className="jumpList" id="class-warpriest-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-warpriest-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-warpriest-spontaneous-casting">Spontaneous Casting</InnerLink></li><li><InnerLink toTop to="class-warpriest-chaotic-evil-good-and-lawful-spells">Aligned Spells</InnerLink></li><li><InnerLink toTop to="class-warpriest-bonus-languages">Bonus Languages</InnerLink></li><li><InnerLink toTop to="class-warpriest-aura-ex">Aura</InnerLink></li><li><InnerLink toTop to="class-warpriest-focus-weapon">Focus and Sacred Weapon</InnerLink></li><li><InnerLink toTop to="class-warpriest-fervor-su">Fervor</InnerLink></li><li><InnerLink toTop to="class-warpriest-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-warpriest-channel-energy-su">Channel Energy</InnerLink></li><li><InnerLink toTop to="class-warpriest-sacred-armor-su">Sacred Armor</InnerLink></li><li><InnerLink toTop to="class-warpriest-aspect-of-war-su">Aspect of War</InnerLink></li><li><InnerLink toTop to="class-warpriest-ex-warpriests">Ex-Warpriests</InnerLink></li><li><InnerLink toTop to="class-warpriest-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-warpriest-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-warpriest-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-warpriest-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-warpriest-warpriest">Warpriest</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 60</Link></p>
<p>Capable of calling upon the power of the gods in the form of blessings and spells, warpriests blend divine magic with martial skill. They are unflinching bastions of their faith, shouting gospel as they pummel foes into submission, and never shy away from a challenge to their beliefs. While clerics might be subtle and use diplomacy to accomplish their aims, warpriests aren't above using violence whenever the situation warrants it. In many faiths, warpriests form the core of the church's martial forces - reclaiming lost relics, rescuing captured clergy, and defending the church's tenets from all challenges.</p>
<p><strong>Role:</strong> Warpriests can serve as capable healers or spellcasters, calling upon their divine powers from the center of the fight, where their armor and martial skills are put to the test.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>A warpriest's alignment must be within one step of his deity's, along either the law/chaos axis or the good/evil axis.</span></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/cleric">Cleric</Link> and <Link to="/class/fighter">fighter</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-warpriest-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-warpriest--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Base Attack Bonus</th>
<th>Fort Save</th>
<th>Ref Save</th>
<th>Will Save</th>
<th>Special</th>
<th>Sacred Weapon Damage</th>
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
<td>Aura, blessings (minor), focus weapon, orisons, sacred weapon</td>
<td>1d6</td>
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
<td>Fervor 1d6</td>
<td>1d6</td>
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
<td>Bonus feat</td>
<td>1d6</td>
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
<td>Channel energy, sacred weapon +1</td>
<td>1d6</td>
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
<td>Fervor 2d6</td>
<td>1d8</td>
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
<td>Bonus feat</td>
<td>1d8</td>
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
<td>Sacred armor +1</td>
<td>1d8</td>
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
<td>Fervor 3d6, sacred weapon +2</td>
<td>1d8</td>
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
<td>Bonus feat</td>
<td>1d8</td>
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
<td>Blessings (major), sacred armor +2</td>
<td>1d10</td>
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
<td>Fervor 4d6</td>
<td>1d10</td>
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
<td>Bonus feat, sacred weapon +3</td>
<td>1d10</td>
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
<td>Sacred armor +3</td>
<td>1d10</td>
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
<td>Fervor 5d6</td>
<td>1d10</td>
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
<td>Bonus feat</td>
<td>2d6</td>
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
<td>Sacred armor +4, sacred weapon +4</td>
<td>2d6</td>
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
<td>Fervor 6d6</td>
<td>2d6</td>
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
<td>Bonus feat</td>
<td>2d6</td>
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
<td>Sacred armor +5</td>
<td>2d6</td>
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
<td>Aspect of war, fervor 7d6, sacred weapon +5</td>
<td>2d8</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><td colSpan={2}>The favored weapon of your deity</td></tr><tr><th>Armor?</th><td colSpan={2}>Light, Medium, and Heavy armors</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><td colSpan={3} className="sw se">If you worship a deity with unarmed strike as its favored weapon, you gain <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</td></tr></tbody></table>
<Ability id="class-warpriest-spells" icon={["magic-swirl"]}><Pair single id="class-warpriest-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To prepare or cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</Pair>
<Pair title="Ability">You gain the ability to cast divine spells which are drawn from the <Link to="/main/spells_warpriest">warpriest spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. Your alignment may restrict you from casting certain spells opposed to your moral or ethical beliefs; see <em>Chaotic, Evil, Good, and Lawful Spells.</em> You must choose and prepare your spells in advance.</Pair><Pair title="Special">You must spend 1 hour each day in quiet contemplation or supplication to regain your daily allotment of spells. You may prepare and cast any spell on your spell list, provided that you can cast spells of that level, but you must choose which spells to prepare.</Pair></Ability><Ability id="class-warpriest-orisons" icon={["magic-swirl"]}>
<Pair single id="class-warpriest-orisons">Orisons</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of orisons, or 0-level divine spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Orisons prepared using other spell slots, such as those due to metamagic feats, are expended normally.</Pair>
</Ability>
<Ability id="class-warpriest-spontaneous-casting" icon={["magic-swirl"]}>
<Pair single id="class-warpriest-spontaneous-casting" flavor="A good warpriest (or a neutral warpriest of a good deity) can channel stored spell energy into healing spells that he did not prepare ahead of time.">Spontaneous Casting</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">If you are good (or a neutral warpriest of a good deity), you can "lose" any prepared spell that is not an orison in order to cast any <em>cure</em> spell of the same spell level or lower. If you are evil (or a neutral warpriest of an evil deity), you can convert spells to <em>inflict</em> spells.</Pair>
<Pair title="Special">If you are neither good nor evil and your deity is neither good nor evil, you choose whether you can convert spells into either <em>cure spells</em> or <em>inflict spells.</em> Once this choice is made, it cannot be changed. This choice also determines whether you channel positive or negative energy (see below).</Pair>
</Ability>
<aside><p>A <em>cure spell</em> is any spell with "cure" in its name, while an <em>inflict spell</em> is one with "inflict" in its name. These spells are <Link to="/main/spell_groupings">grouped here</Link>.</p>
</aside><Ability id="class-warpriest-chaotic-evil-good-and-lawful-spells" icon={["magic-swirl"]}>
<Pair single id="class-warpriest-chaotic-evil-good-and-lawful-spells">Chaotic, Evil, Good, and Lawful Spells</Pair>
<Pair title="Passive Ability">You can't cast spells of an alignment opposed to your own or your deity's (if you have one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.</Pair>
</Ability>
<Ability id="class-warpriest-bonus-languages" icon={["stairs-goal"]}>
<Pair single id="class-warpriest-bonus-languages">Bonus Languages</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your bonus language options include Abyssal, Celestial, and Infernal. These choices are in addition to the bonus languages available because of your race.</Pair>
</Ability>
<Ability id="class-warpriest-aura-ex" icon={["aura"]}>
<Pair single id="class-warpriest-aura-ex">Aura (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">If you are a warpriest of a chaotic, evil, good, or lawful deity, you have a particularly powerful aura (as a <Link to="/class/cleric">cleric</Link>) corresponding to your deity's alignment (see <Link to="/spell/detect_evil">detect evil</Link>).</Pair>
</Ability>
<Ability id="class-warpriest-blessings-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-warpriest-blessings-su" flavor="A warpriest's deity influences his alignment, what magic he can perform, his values, and how others see him.">Blessings (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You can select two <Link to="/ability/blessings">blessings</Link> from among those granted by your deity (each deity grants the blessings tied to its domains), obtaining each blessing's <strong className="hl">minor</strong> power.</Pair>
<Pair title="Usage">3 times/day + <Link to="/misc/half">half</Link> your warpriest level</Pair>
<Pair title="Standard Action">Unless otherwise stated, using a blessing is a standard action that does not provoke an attack of opportunity. Each time you call upon any one of your blessings, it counts against your daily limit.</Pair>
<Pair title="At 10th Level">You obtain the <strong className="hl">major</strong> power of each of your blessings.</Pair>
<Pair title="Special">You can select an alignment blessing (<Link to="/blessing/chaos">Chaos</Link>, <Link to="/blessing/evil">Evil</Link>, <Link to="/blessing/good">Good</Link>, or <Link to="/blessing/law">Law</Link>) only if your alignment matches that domain. If you aren't devoted to a particular deity, you still select two blessings to represent your spiritual inclinations and abilities, subject to GM approval. The restriction on alignment domains still applies.</Pair>
</Ability>
<Ability id="class-warpriest-focus-weapon" icon={["stairs-goal"]}>
<Pair single id="class-warpriest-focus-weapon">Focus Weapon</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You receive <Link to="/feat/weapon_focus">Weapon Focus</Link> as a bonus feat (you can choose any weapon, not just your deity's favored weapon).</Pair>
</Ability>
<aside><p>A warpriest may receive the <Link to="/feat/modified_weapon_proficiency">Modified Weapon Proficiency</Link> feat instead of Weapon Focus, but only if he selects his deity's favored weapon. -- <em><Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 11</Link></em></p>
</aside><Ability id="class-warpriest-sacred-weapon-su" icon={["upgrade"]}>
<Pair single id="class-warpriest-sacred-weapon-su" flavor="Weapons wielded by a warpriest are charged with the power of his faith.">Sacred Weapon (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever you hit with your sacred weapon, the weapon damage is based on your size and level and not the weapon type. (Only Medium warpriest damage is listed above; see the table below if you are Small or Large.) You can decide to use the weapon's base damage instead of the sacred weapon damage - this must be declared before the attack roll is made. (If the weapon's base damage exceeds the sacred weapon damage, its damage is unchanged.) This increase in damage does not affect any other aspect of the weapon, and doesn't apply to alchemical items, bombs, or other weapons that only deal energy damage.</Pair>
<Pair title="Ability">In addition to the favored weapon of your deity, you can designate a weapon as a sacred weapon by selecting that weapon with the Weapon Focus feat; if you have multiple Weapon Focus feats, this ability applies to all of them.</Pair>
<Pair title="At 4th Level"><p>You gain the ability to enhance one of your sacred weapons with divine power as a <strong className="hl">swift action</strong>. This power grants the weapon an enhancement bonus. This bonus is equal to one-fourth of your warpriest level; see the table below. If you have more than one sacred weapon, you can enhance another on the following round by using another swift action. You can use this ability a number of rounds per day equal to your warpriest level, but these rounds need not be consecutive.</p>
<ScrollContainer id="class-warpriest--table-1"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small)</th>
<th>Damage (Medium)</th>
<th>Damage (Large)</th>
<th>Enhancement Bonus</th>
</tr>
</thead>
<tbody><tr>
<td>1st-4th</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
<td>-</td>
</tr>
<tr>
<td>5th-7th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>+1</td>
</tr>
<tr>
<td>8th-9th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
<td>+2</td>
</tr>
<tr>
<td>10th-11th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>+2</td>
</tr>
<tr>
<td>10th-14th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
<td>+3</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>+4</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
<td>+4</td>
</tr>
<tr>
<td>20th</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
<td>+5</td>
</tr>
</tbody></table></ScrollContainer>
<p>These bonuses stack with any existing bonuses the weapon might have, to a maximum of +5. You can enhance a weapon with any of the following weapon special abilities: <Link to="/magic-enh/brilliant_energy">brilliant energy</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/disruption">disruption</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/keen">keen</Link>, and <Link to="/magic-enh/shock">shock</Link>. In addition, if you are chaotic, you can add <Link to="/magic-enh/anarchic">anarchic</Link> and <Link to="/magic-enh/vicious">vicious</Link>. If you are evil, you can add <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link> and <Link to="/magic-enh/unholy">unholy</Link>. If you are good, you can add <Link to="/magic-enh/ghost_touch">ghost touch</Link> and <Link to="/magic-enh/holy">holy</Link>. If you are lawful, you can add <Link to="/magic-enh/axiomatic">axiomatic</Link> and <Link to="/magic-enh/merciful">merciful</Link>. If you are neutral (with no other alignment components), you can add <Link to="/magic-enh/spell_storing">spell storing</Link> and <Link to="/magic-enh/thundering">thundering</Link>. Adding any of these special abilities replaces an amount of bonus equal to the special ability's base cost. Duplicate abilities do not stack. The weapon must have at least a +1 enhancement bonus before any other special abilities can be added.</p>
<p>If multiple weapons are enhanced, each one consumes rounds of use individually. The enhancement bonus and special abilities are determined the first time the ability is used each day, and cannot be changed until the next day. These bonuses do not apply if another creature is wielding the weapon, but they continue to be in effect if the weapon otherwise leaves your possession (such as if the weapon is thrown). This ability can be ended as a <strong className="hl">free action</strong> at the start of your turn (that round does not count against the total duration, unless the ability is resumed during the same round). If you use this ability on a <Link to="/misc/double">double</Link> weapon, the effects apply to only one end of the weapon.</p>
</Pair>
</Ability>
<Ability id="class-warpriest-fervor-su" icon={["remedy","magic-palm","magic-swirl"]}>
<Pair single id="class-warpriest-fervor-su" flavor="A warpriest can draw upon the power of his faith to heal wounds or harm foes. He can also use this ability to quickly cast spells that aid in his struggles.">Fervor (Su)</Pair>
<Pair title="Ability">If you spontaneously cast <em>cure</em> spells, this ability harms undead (no save) and heals other creatures as positive energy. Otherwise, it heals undead and harms other creatures (no save) as negative energy.</Pair>
<Pair title="Usage">Wis modifier times/day + 1/2 your warpriest level</Pair>
<Pair title="Standard Action">By expending one use of this ability, you can touch a creature to heal it of 1d6 points of damage, or damage it for the same amount. Attempting to harm is a melee touch attack that provokes attacks of opportunity.</Pair>
<Pair title="Swift Action">You can expend one use of this ability to either heal yourself (as if you touched a creature to heal it) or cast any one warpriest spell you have prepared with a casting time of 1 round or shorter. The spell can target only you, even if it could normally affect other or multiple targets. Spells cast in this way ignore somatic components and do not provoke attacks of opportunity. You do not need to have a free hand to cast a spell in this way.</Pair>
<Pair title="At 5th Level">The damage you deal or heal becomes 2d6.</Pair>
<Pair title="At 8th Level">The damage you deal or heal becomes 3d6.</Pair>
<Pair title="At 11th Level">The damage you deal or heal becomes 4d6.</Pair>
<Pair title="At 14th Level">The damage you deal or heal becomes 5d6.</Pair>
<Pair title="At 17th Level">The damage you deal or heal becomes 6d6.</Pair>
<Pair title="At 20th Level">The damage you deal or heal becomes 7d6.</Pair>
</Ability>
<Ability id="class-warpriest-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="class-warpriest-bonus-feats">Bonus Feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain a bonus <Link to="/main/combat_feat">combat feat</Link> in addition to those gained from normal advancement. You must meet the prerequisites for this feat, but you treat your warpriest level as your base attack bonus (in addition to base attack bonuses gained from other classes and Hit Dice) for the purpose of qualifying for this feat. Finally, for the purposes of this feat, you can select one that have a minimum number of fighter levels as a prerequisite, treating your warpriest level as your fighter level.</Pair>
<Pair title="At 6th Level">You gain another bonus combat feat, following the same restrictions as above.</Pair>
<Pair title="At 9th Level">You gain another bonus combat feat, following the same restrictions as above.</Pair>
<Pair title="At 12th Level">You gain another bonus combat feat, following the same restrictions as above.</Pair>
<Pair title="At 15th Level">You gain another bonus combat feat, following the same restrictions as above.</Pair>
<Pair title="At 18th Level">You gain another bonus combat feat, following the same restrictions as above.</Pair>
</Ability>
<Ability id="class-warpriest-channel-energy-su" icon={["aura","remedy"]}>
<Pair single id="class-warpriest-channel-energy-su">Channel Energy (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">You gain the ability to <Link to="/ability/channel_energy">channel energy</Link> like a cleric, by presenting your holy (or unholy) symbol.</Pair>
<Pair title="Standard Action">By expending two uses of your <em>fervor,</em> you cause a <Link to="/misc/burst">burst</Link> that heals (or deals damage to) all creatures in a 30-foot radius centered on you (following the same rules as your <em>fervor</em>). The amount of damage healed or dealt is equal to that of your <em>fervor</em> ability. You can choose whether or not to include yourself in this effect.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
<Pair title="Special">Creatures that take damage from channeled energy must succeed at a Will saving throw to halve the damage. The save DC is 10 + 1/2 your warpriest level + your Wisdom modifier.</Pair>
</Ability>
<Ability id="class-warpriest-sacred-armor-su" icon={["armor-upgrade"]}>
<Pair single id="class-warpriest-sacred-armor-su">Sacred Armor (Su)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">You grant your armor a +1 enhancement bonus.</Pair>
<Pair title="Usage">1 minute/day per warpriest level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Free Action">When you grant this bonus, you can also use your <em>sacred weapon</em> ability by expending one use of your <em>fervor.</em></Pair>
<Pair title="Special"><p>These bonuses stack with any existing bonuses the armor might have, to a maximum of +5. You can enhance armor any of the following armor special abilities: <Link to="/magic-enh/energy_resistance">energy resistance</Link> (normal, improved, and greater), <Link to="/magic-enh/fortification">fortification</Link> (heavy, light, or moderate), <Link to="/magic-enh/glamered">glamered</Link>, and <Link to="/magic-enh/spell_resistance">spell resistance</Link> (13, 15, 17, and 19). Adding any of these special abilities replaces an amount of bonus equal to the special ability's base cost. For this purpose, <em>glamered</em> counts as a +1 bonus, <em>energy resistance</em> counts as +2, <Link to="/magic-enh/improved_energy_resistance">improved energy resistance</Link> counts as +4, and <Link to="/magic-enh/greater_energy_resistance">greater energy resistance</Link> counts as +5. Duplicate abilities do not stack. The armor must have at least a +1 enhancement bonus before any other special abilities can be added.</p>
<p>The enhancement bonus and armor special abilities are determined the first time the ability is used each day and cannot be changed until the next day. These bonuses apply only while you are wearing the armor, and end immediately if the armor is removed or leaves your possession. This ability can be ended as a <strong className="hl">free action</strong> at the start of your turn. This ability cannot be applied to a shield.</p>
</Pair>
<Pair title="At 10th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 16th Level">The bonus becomes +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="class-warpriest-aspect-of-war-su" icon={["upgrade","armor-upgrade","magic-swirl"]}>
<Pair single id="class-warpriest-aspect-of-war-su" flavor="The warpriest can channel an aspect of war, growing in power and martial ability.">Aspect of War (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Swift Action">You can treat your level as your base attack bonus, gain DR 10/-, and can move at your full speed regardless of the armor you are wearing or your encumbrance. In addition, the <em>blessings</em> you call upon don't count against your daily limit during this time. This ability lasts for 1 minute.</Pair>
</Ability>
<h3 id="class-warpriest-ex-warpriests" data-hash-target>Ex-Warpriests</h3>
<p>A warpriest who grossly violates the code of conduct required by his god loses all spells and class features, except for his armor, shield, weapon proficiencies, and bonus feats. He cannot thereafter gain levels as a warpriest of that god until he atones for his deeds (see <Link to="/spell/atonement">atonement</Link>).</p>
<h3 id="class-warpriest-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-warpriest--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Hammer of God (Su)</td><td>At 20th level, the warpriest has become one of his deity's favorite weapons - the first tool that comes to hand when destruction is called for. The warpriest gains two additional blessings from the list offered by his deity. He can also call upon his blessings two more times each day.</td></tr>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Soul Channel (Su)</td><td>At 20th level, the character can channel energy six additional times per day, and her channel energy dice increase by one step. This capstone is available to characters with the channel energy class feature.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-warpriest-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-warpriest/calamity_caller">Calamity Caller</Link></p><p><strong>Modifies or Replaces:</strong> Blessings; Focus Weapon; Sacred Weapon; Bonus Feats; Aspect of War</p><p>(Elf Only) While all elves feel a deep connection to nature, some elven priests take this bond further, using their link to call down the wrath of nature upon their enemies</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/champion_of_the_faith">Champion of the Faith</Link></p><p><strong>Modifies or Replaces:</strong> Sacred Weapon; 3rd-level Bonus Feat; Channel Energy</p><p>Champions of the faith are crusaders who use the power of their divine patron to annihilate the faith's enemies.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/cult_leader">Cult Leader</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Weapon/Armor Proficiencies; Focus Weapon; 3rd, 9th, 12th, and 15th-level Bonus Feats; Channel Energy</p><p>Referred to as fanatics, lunatics, or obsessives, cultists see themselves as genuine devotees of their deity.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/disenchanter">Disenchanter</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; Channel Energy; 6th-level Bonus Feat</p><p>While many warpriests focus on threats to the body, the disenchanter focuses on dangers to the mind and the soul.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/divine_champion">Divine Champion</Link></p><p><strong>Modifies or Replaces:</strong> 3rd, 6th, 9th, 12th, 18th-level Bonus Feat</p><p>Divine champions are unswervingly devoted to their causes, and specialize in bringing battle to the enemies of their faiths.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/divine_commander">Divine Commander</Link></p><p><strong>Modifies or Replaces:</strong> Blessings; 3rd, 6th, 12th, and 15th-level Bonus Feats</p><p>Some warpriests are called to lead great armies and face legions of foes. These divine commanders live for war and fight for glory.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/feral_champion">Feral Champion</Link></p><p><strong>Modifies or Replaces:</strong> Blessings; Sacred Weapon; Sacred Armor</p><p>When a warpriest devotes himself to a god of the natural world, he is sometimes blessed with supernatural powers that allow him to evoke animalistic power and fury.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/fist_of_the_godclaw">Fist of the Godclaw</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Deity; Blessings; 3rd, 6th, 12th-level Bonus Feat; Aspect of War</p><p>Devoted to the divine control of law above all else, these zealots seek to establish absolute order.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/forgepriest">Forgepriest</Link></p><p><strong>Modifies or Replaces:</strong> Blessings; Spells; Bonus Feats; 3rd and 6th-level Bonus Feats; Channel Energy</p><p>Armorers of exquisite skill, forgepriests take inspiration from their deity to produce the most perfect weapons and armor they can, the better to equip the armies of the faithful.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/jistkan_magistrate">Jistkan Magistrate</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Blessings; Spontaneous Casting; Bonus Languages; Channel Energy</p><p>Some warpriests study the ancient magic that the Jistkan magistrates used to bind elementals and make pacts with genies.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/libertys_blade">Liberty's Blade</Link></p><p><strong>Modifies or Replaces:</strong> Blessings; Sacred Weapon; Channel Energy; Sacred Armor</p><p>There are some who find in the call to freedom something primal and spiritual, even more so than other Andorens.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/mantis_zealot">Mantis Zealot</Link></p><p><strong>Modifies or Replaces:</strong> Deity; Alignment; Weapon and Armor Proficiencies; Sacred Weapon; Sacred Armor; Aspect of War</p><p>Among the Red Mantis worshipers of Achaekek, some hold such strong faith in their assassin god that they gain divine power.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/molthuni_arsenal_chaplain">Molthuni Arsenal Chaplain</Link></p><p><strong>Modifies or Replaces:</strong> Blessing; Sacred Armor; Sacred Weapon; Channel Energy</p><p>Molthuni arsenal chaplains are warpriests trained in the Arsenal District in Korholm. They bolster their nation's military by focusing on the militant aspects of their gods.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/proclaimer">Proclaimer</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Deity; Spellcasting; Fervor; Sacred Armor; Channel Energy</p><p>A proclaimer rushes into Abyss-twisted wastes with nothing but his weapon in his hand and his faith in his heart, shouting his deity's name to the skies</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/proselytizer">Proselytizer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Sacred Armor; 3rd-level Bonus Feat; Sacred Weapon; Blessings; Blessings (Major)</p><p>The proselytizer is the perfect militant missionary. He seeks to win the hearts and lay claim to the souls of those he meets, and - failing that - spreads the word of his deity at the edge of the sword.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/sacred_fist">Sacred Fist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Weapon/Armor Proficiencies; Sacred Weapon; Focus Weapon; 3rd, 6th, 9th, 12th, and 18th-level Bonus Feats; Sacred Armor</p><p>Unlike many warpriests, sacred fists leave behind armor and shield and instead rely on their fists and whatever protection their deity bestows on them.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/shieldbearer">Shieldbearer</Link></p><p><strong>Modifies or Replaces:</strong> Focus Weapon; Sacred Weapon; Sacred Armor</p><p>Shieldbearers are divine warriors who stand on the front lines of battle, shoulder to shoulder with the soldiers of their people.</p></div>
<div className="archetype"><p><Link to="/arc-warpriest/sixth_wing_bulwark">Sixth Wing Bulwark</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; Focus Weapon; Sacred Weapon; Sacred Armor; 6-th, 12th-, 18th-level Bonus Feats</p><p>The Sixth Wing bulwark are followers of Ragathiel that train to hold the line and defend against the incursion of evil forces, fortifying herself and her allies to stand strong in the face of any opposition, no matter how dire.</p></div>
<h3 id="class-warpriest-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"warpriest archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Aspect of War"},{"header":"Blessings"},{"header":"Blessings (Major)"},{"header":"Bonus Feats"},{"header":"3rd-level Bonus Feat"},{"header":"6th-level Bonus Feat"},{"header":"9th-level Bonus Feat"},{"header":"12th-level Bonus Feat"},{"header":"15th-level Bonus Feat"},{"header":"18th-level Bonus Feat"},{"header":"Bonus Languages"},{"header":"Channel Energy"},{"header":"Class Skills"},{"header":"Deity"},{"header":"Fervor"},{"header":"Focus Weapon"},{"header":"Sacred Armor"},{"header":"Sacred Weapon"},{"header":"Skill Ranks"},{"header":"Spellcasting"},{"header":"Spontaneous Casting"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-warpriest/Calamity Caller›",null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null],["‹arc-warpriest/Champion of the Faith›",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null],["‹arc-warpriest/Cult Leader›",null,null,null,null,null,null,"X",null,"X","X","X",null,null,"X","X",null,null,"X",null,null,"X",null,null,"X"],["‹arc-warpriest/Disenchanter›",null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-warpriest/Divine Champion›",null,null,null,null,null,null,"X","X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-warpriest/Divine Commander›",null,null,null,"X",null,null,"X","X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-warpriest/Feral Champion›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null],["‹arc-warpriest/Fist of the Godclaw›","X",null,"X","X",null,null,"X","X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-warpriest/Forgepriest›",null,null,null,"X",null,"X","X","X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null],["‹arc-warpriest/Jistkan Magistrate›",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,"X",null],["‹arc-warpriest/Liberty's Blade›",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null],["‹arc-warpriest/Mantis Zealot›","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,"X"],["‹arc-warpriest/Molthuni Arsenal Chaplain›",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X","X",null,null,null,null],["‹arc-warpriest/Proclaimer›","X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,"X",null,null,null,"X",null],["‹arc-warpriest/Proselytizer›",null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X"],["‹arc-warpriest/Sacred Fist›",null,null,null,null,null,null,"X","X","X","X",null,"X",null,null,"X",null,null,"X","X","X",null,null,null,"X"],["‹arc-warpriest/Shieldbearer›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null],["‹arc-warpriest/Sixth Wing Bulwark›",null,"X",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,"X","X","X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-warpriest-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="warpriest" prefix="class-warpriest-" />
</>};
const _witch = {hasJL:true,title: "Witch", jsx: <><div className="jumpList" id="class-witch-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-witch-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-witch-hex">Hex</InnerLink></li><li><InnerLink toTop to="class-witch-witchs-familiar-ex">Witch's Familiar</InnerLink></li><li><InnerLink toTop to="class-witch-patron-spells">Patron Spells</InnerLink></li><li><InnerLink toTop to="class-witch-major-hex">Major and Grand Hex</InnerLink></li><li><InnerLink toTop to="class-witch-adding-spells-to-a-witchs-familiar">Adding Spells to a Witch's Familiar</InnerLink></li><li><InnerLink toTop to="class-witch-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-witch-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-witch-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-witch-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-witch-witch">Witch</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 65</Link></p>
<p>Some gain power through study, some through devotion, others through blood, but the witch gains power from her communion with the unknown. Generally feared and misunderstood, the witch draws her magic from a pact made with an otherworldly power. Communing with that source, using her familiar as a conduit, the witch gains not only a host of spells, but a number of strange abilities known as hexes. As a witch grows in power, she might learn about the source of her magic, but some remain blissfully unaware. Some are even afraid of that source, fearful of what it might be or where its true purposes lie.</p>
<p><strong>Role:</strong> While many witches are recluses, living on the edge of civilization, some live within society, openly or in hiding. The blend of witches' spells makes them adept at filling a number of different roles, from seer to healer, and their hexes grant them a number of abilities that are useful in a fight. Some witches travel about, seeking greater knowledge and better understanding of the mysterious powers that guide them.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d6</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-witch-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-witch--table-0"><table>
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
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Cantrips, hex, witch's familiar</td>
<td>3</td>
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
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>Hex</td>
<td>4</td>
<td>2</td>
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
<td>3rd</td>
<td>+1</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>-</td>
<td>4</td>
<td>2</td>
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
<td>4th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Hex</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>Hex</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+4</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Hex, major hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+7/+2</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Hex, grand hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>20th</td>
<td>+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Hex</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Armor interferes with a witch's gestures, which can cause her spells with somatic components to fail.</td></tr></tbody></table>
<Ability id="class-witch-spells" icon={["magic-swirl"]}><Pair single id="class-witch-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Intelligence score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Intelligence score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_witch">witch spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Special">You may know any number of spells. You must choose and prepare your spells ahead of time by getting 8 hours of sleep and spending 1 hour communing with your familiar and deciding which spells to prepare.</Pair></Ability><Ability id="class-witch-cantrips" icon={["magic-swirl"]}>
<Pair single id="class-witch-cantrips">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of cantrips, or 0-level arcane spells. These spells are prepared like any other spell, but they are not expended when cast and may be used again. Cantrips prepared using other spell slots, such as those due to metamagic feats, are expended normally.</Pair>
</Ability>
<Ability id="class-witch-hex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-witch-hex" flavor="Witches learn a number of magic tricks, called hexes, that grant them powers or weaken foes.">Hex</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/hexes">hex</Link> of your choice. Unless otherwise noted, using a hex is a <strong className="hl">standard action</strong> that does not provoke an attack of opportunity. The save to resist a hex is equal to 10 + <Link to="/misc/half">half</Link> your witch level + your Intelligence modifier.</Pair>
<Pair title="Special">You gain a new hex at 2nd level, and at every even-numbered level (4th, 6th, 8th, and so on). You cannot select an individual hex more than once.</Pair>
</Ability>
<aside><p>Alternately, whenever the witch would learn a new hex, she can instead gain a bonus <Link to="/main/feats_familiar">familiar feat</Link> or take a <Link to="/main/feats_blood_hex">blood hex feat</Link>.</p>
</aside><Ability id="class-witch-witchs-familiar-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-witch-witchs-familiar-ex" flavor="A witch forms a close bond with a familiar, a creature that teaches her magic and helps to guide her along her path. Familiars also aid a witch by granting her skill bonuses, additional spells, and help with some types of magic.">Witch's Familiar (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">This functions like the wizard's arcane bond class feature, except as noted in this section. You must commune with your <Link to="/sidekick/familiar">familiar</Link> each day to prepare your spells. Familiars store all of the spells that a witch knows, and you cannot prepare a spell that is not stored by your familiar. Your familiar begins play storing all of the 0-level witch spells plus three 1st-level spells of your choice. You also select a number of additional 1st-level spells equal to your Intelligence modifier to store in your familiar.</Pair>
<Pair title="Special">At each new witch level, you add two new spells of any spell level or levels that you can cast (based on your new witch level) to your familiar. You can also add additional spells to your familiar through a special ritual, described below under <em>Adding Spells to a Witch's Familiar.</em></Pair>
</Ability>
<Ability id="class-witch-patron-spells" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-witch-patron-spells">Patron Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When you gain your familiar, you must also select a patron. This <Link to="/ability/patrons">patron</Link> is a vague and mysterious force, granting you power for reasons that you might not entirely understand. While these forces need not be named, they typically hold influence over a certain force.</Pair>
<Pair title="Special">At 2nd level, and every two levels thereafter, your patron adds new spells to your list of spells known. These spells are also automatically added to the list of spells stored by the familiar. The spells gained depend upon the patron chosen. Each patron is listed by its theme. Its actual name is up to the GM and the witch to decide.</Pair>
</Ability>
<Ability id="class-witch-major-hex" icon={["upgrade"]}>
<Pair single id="class-witch-major-hex">Major Hex</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">You can choose a <Link to="/ability/major_hexes">major hex</Link> whenever you could select a new hex.</Pair>
</Ability>
<Ability id="class-witch-grand-hex" icon={["upgrade"]}>
<Pair single id="class-witch-grand-hex">Grand Hex</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">You can choose a <Link to="/ability/grand_hexes">grand hex</Link> whenever you could select a new hex.</Pair>
</Ability>
<h3 id="class-witch-adding-spells-to-a-witchs-familiar" data-hash-target>Adding Spells to a Witch's Familiar</h3>
<p>Witches can add new spells to their familiars through several methods. A witch can only add spells to her familiar if those spells belong to the witch's spell list.</p>
<p><strong className="hl">Spells Gained at a New Level:</strong> A witch's familiar learns a certain amount of lore and magic as the witch adventures. Whenever a witch gains a level, she may add two spells from the witch spell list to her familiar. The two free spells must be of spell levels she can cast.</p>
<p><strong className="hl">Familiar Teaching Familiar:</strong> A witch's familiar can learn spells from another witch's familiar. To accomplish this, the familiars must spend one hour per level of the spell being taught in communion with one another. At the end of this time, the witch whose familiar is learning a spell must make a Spellcraft check (DC 15 + spell level). If the check succeeds, the familiar has learned the spell and the witch may utilize it the next time she prepares spells. If the check fails, the familiar has failed to learn the spell and cannot try to learn that spell again until the witch has gained another rank in Spellcraft. Most witches require a spell of equal or greater level in return for this service. If a familiar belongs to a witch that has died, it only retains its knowledge of spells for 24 hours, during which time it is possible to coerce or bribe the familiar into teaching its spells to another, subject to GM discretion.</p>
<p><strong className="hl">Learn from a Scroll:</strong> A witch can use a scroll to teach her familiar a new spell. This process takes 1 hour per level of the spell to be learned, during which time the scroll is burned and its ashes used to create a special brew or powder that is consumed by the familiar. This process destroys the scroll. At the end of this time, the witch must make a Spellcraft check (DC 15 + spell level). If the check fails, the process went awry in some way and the spell is not learned, although the scroll is still consumed.</p>
<h3 id="class-witch-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-witch--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Arch-Familiar (Su)</td><td>At 20th level, the character's familiar is smarter and savvier than plenty of adventurers - and also more dangerous! The familiar's Intelligence increases by 5, and it gains 12 spells levels' worth of spell-like abilities (for example, three daily castings of <Link to="/spell/greater_invisibility">greater invisibility</Link>), drawn from spells its master can cast and using its master's caster levels, DCs, and so forth. This capstone is available to any class with a familiar.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Walking Library (Ex)</td><td>At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills. Characters of any class that prepares spells from a spellbook or familiar can select this ability.</td></tr>
<tr><td>Witch's Dance</td><td><em>Rather than gaining a capstone, a witch can select the following grand hex:</em> Once per day as a <strong className="hl">standard action</strong>, the witch can proclaim a celebration, leading her friends in a riotous and bloodthirsty dance. All allies within 30 feet gain the ability to fly (as per the <Link to="/hex/flight">flight</Link> hex) and a +2 dodge bonus to AC, and when they take a 5-foot step, they can instead move up to 10 feet instead of just 5 feet. The benefits remain for 1 round but can be extended with the <Link to="/hex/cackle">cackle</Link> hex.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-witch-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-witch/alley_witch">Alley Witch</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; 1st and 6th-level Hexes</p><p>Some witches find their spark of magic in the long, dark shadows and forgotten places within the city.</p></div>
<div className="archetype"><p><Link to="/arc-witch/ashiftah">Ashiftah</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; 2nd, 6th-level Hex</p><p>Known in Taldane as a "battle witch," an ashiftah drifts like a phantom among the enemy armies, calling down disaster upon their heads and weakening their resolve.</p></div>
<div className="archetype"><p><Link to="/arc-witch/beast_bonded">Beast-Bonded</Link></p><p><strong>Modifies or Replaces:</strong> 4th-level Hex; 8th-level Hex; 10th-level Major Hex</p><p>While all witches are intimately tied to their familiars, a beast-bonded witch's craft focuses specifically on her familiar bond and developing the relationship with her patron through her familiar.</p></div>
<div className="archetype"><p><Link to="/arc-witch/bonded_witch">Bonded Witch</Link></p><p><strong>Modifies or Replaces:</strong> Familiar</p><p>(Half-Elf Only) While all witches commune with the unknown, the blend of human ingenuity and adept learning mixed with elven blood gives some half-elves a unique conduit to channel the powers of the arcane.</p></div>
<div className="archetype"><p><Link to="/arc-witch/bouda">Bouda</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Familiar; 1st-level Hex; 10-level Major Hex</p><p>These strange and often solitary witches have a strong connection to curses, the evil eye, and hyenas.</p></div>
<div className="archetype"><p><Link to="/arc-witch/cartomancer">Cartomancer</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; 2nd-level Hex</p><p>A witch who serves the spirits of the harrow in exchange for mystical power is known as a cartomancer.</p></div>
<div className="archetype"><p><Link to="/arc-witch/coral_witch">Coral Witch</Link></p><p><strong>Modifies or Replaces:</strong> Patron; Familiar; 8th-level Hex</p><p>Coral witches use their magic to fashion familiars from living coral and emulate the unyielding tenacity of these durable marine organisms.</p></div>
<div className="archetype"><p><Link to="/arc-witch/demon_sworn">Demon-Sworn</Link></p><p><strong>Modifies or Replaces:</strong> Patron Spells; 6th-level Hex</p><p>In the depths of the Darklands, as well as similarly inhospitable locales on Golarion, many seek the succor of demons as a means of survival.</p></div>
<div className="archetype"><p><Link to="/arc-witch/dimensional_occultist">Dimensional Occultist</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Hex, 8th-level Hex, 12th-level Hex</p><p>The dimensional occultist sacrifices some of her mastery over hexes in return for much increased planar lore.</p></div>
<div className="archetype"><p><Link to="/arc-witch/dreamweaver">Dreamweaver</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Patron Spells; 2nd, 6th, 10th-level Hexes</p><p>(Changeling Only) A changeling dreamweaver draws upon her hag heritage to ply the dream realms in order to touch mortal minds and souls, for good or ill.</p></div>
<div className="archetype"><p><Link to="/arc-witch/flood_walker">Flood Walker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; 4th, 10th, 16th, 18th-level Patron Spells; 1st, 6th, 10th-level Hex</p><p>Witches who dwell in floodplains or along the banks of predictably dangerous rivers can tap into the underlying potential of surging waters in order to enhance their eerie powers.</p></div>
<div className="archetype"><p><Link to="/arc-witch/gingerbread_witch">Gingerbread Witch</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; 1st, 4th, 8th, 10th, 12th, 16th-level Hex</p><p>A sweet tooth lures the gingerbread witch's victims to doom.</p></div>
<div className="archetype"><p><Link to="/arc-witch/gravewalker">Gravewalker</Link></p><p><strong>Modifies or Replaces:</strong> Patron Spells; Familiar; 1st-level Hex; 4th-level Hex; 8th-level Hex</p><p>Having much in common with necromancers, the gravewalker is obsessed with the occult manipulations of the dead, particularly mindless undead such as zombies.</p></div>
<div className="archetype"><p><Link to="/arc-witch/hag_of_gyronna">Hag of Gyronna</Link></p><p><strong>Modifies or Replaces:</strong> Patron; Spells; 2nd, 8th, 12th-level Hexes</p><p>Only female witches dare dedicate themselves to the Angry Hag, and those who do so are feared for their ability to bend minds and sow discord.</p></div>
<div className="archetype"><p><Link to="/arc-witch/hagbound">Hagbound</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 2nd, 4th, 8th, 10th, 12th, 14th, and 20th-level Hexes</p><p>Whether a changeling in the process of succumbing to her mother's call, a witch cursed by a hag to become her instrument of torment, a vain and petty witch overeager for power, or some other unfortunate soul, a hagbound witch finds its soul has been infected by a hag's spite and powerful, corrupt arcane magic.</p></div>
<div className="archetype"><p><Link to="/arc-witch/havocker">Havocker</Link></p><p><strong>Modifies or Replaces:</strong> Hexes</p><p>Although most witches are guided to subtle curses and debilitating hexes by their mysterious patrons, some are instead taught the secrets of harnessing raw, destructive elemental power.</p></div>
<div className="archetype"><p><Link to="/arc-witch/hedge_witch">Hedge Witch</Link></p><p><strong>Modifies or Replaces:</strong> 4th-level Hex; 8th-level Hex</p><p>Among witches, there are those who devote themselves to the care of others and restrict their practices to the healing arts.</p></div>
<div className="archetype"><p><Link to="/arc-witch/herb_witch">Herb Witch</Link></p><p><strong>Modifies or Replaces:</strong> Patron; 1st, 2nd, 10th-level Hex</p><p>Herb witches brew foul-tasting medicines, sweet poisons, and other concoctions from the untamed plants of the wild.</p></div>
<div className="archetype"><p><Link to="/arc-witch/hex_channeler">Hex Channeler</Link></p><p><strong>Modifies or Replaces:</strong> 2nd-level Hex</p><p>A hex channeler is a witch who devotes herself to either life - healing the wounded and destroying the undead - or death, slaying the living and aiding undead.</p></div>
<div className="archetype"><p><Link to="/arc-witch/invoker">Invoker</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 8th, 10th, and 16th level Hex</p><p>The invoker uses her familiar to summon facets of her mysterious patron directly into her body, enhancing her skills and granting her powerful abilities.</p></div>
<div className="archetype"><p><Link to="/arc-witch/jinx_witch">Jinx Witch</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 2nd, 6th, 10th-level Hex</p><p>Jinx witches specialize in calling down subtle misfortunes and deceiving enemies and allies alike. While they lack any ability to truly eliminate bad luck, they are uniquely gifted at making others believe otherwise.</p></div>
<div className="archetype"><p><Link to="/arc-witch/ley_line_guardian">Ley Line Guardian</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Familiar; 1st and 8th-level Hexes</p><p>Some witches tap into the power of their patrons not through a special connection with a familiar, but rather directly through the vast network of ley lines that crosses the planes.</p></div>
<div className="archetype"><p><Link to="/arc-witch/medium">Medium</Link></p><p><strong>Modifies or Replaces:</strong> Patron; 2nd, 6th, 20th-level Hexes</p><p>Mediums tap into the spiritual power of those who have yet to find their final rest. Their ability to interact with these souls allows mediums to learn about the physical world through the experiences of those who came before them.</p></div>
<div className="archetype"><p><Link to="/arc-witch/mirror_witch">Mirror Witch</Link></p><p><strong>Modifies or Replaces:</strong> Familiar</p><p>Mirror witches eschew animal familiars and isntead talk to their patrons via mirror magic</p></div>
<div className="archetype"><p><Link to="/arc-witch/mountain_witch">Mountain Witch</Link></p><p><strong>Modifies or Replaces:</strong> Spells; Hex; 2nd-level Hex</p><p>Mountains can be sanctuaries for witches hunted by society. Here they form bonds with the spirits of the lofty reaches.</p></div>
<div className="archetype"><p><Link to="/arc-witch/nexian_spellspy">Nexian Spellspy</Link></p><p><strong>Modifies or Replaces:</strong> Deliver Touch Spells; 4th-level Hex</p><p>Nexian spellspies are witches who use their familiars and divining talents to spy on their rivals and protect themselves from similar intrusions.</p></div>
<div className="archetype"><p><Link to="/arc-witch/pact_witch">Pact Witch</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Patron; Familiar; 6th-level Hex</p><p>Though all witches forge bonds with mysterious powers known as patrons, a pact witch takes this bond to an extreme by forging an inexorable pact with the Outer Planes.</p></div>
<div className="archetype"><p><Link to="/arc-witch/patron_familiars">Patron Familiars</Link></p><p><strong>Modifies or Replaces:</strong> (N/A; not technically an archetype, affects the familiar's owner) Spells</p><p>Witches' familiars are often tied to their patrons, enhancing and reinforcing the spellcasters' connections to the sources of their magical might.</p></div>
<div className="archetype"><p><Link to="/arc-witch/putrefactor">Putrefactor</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; Patron; 1st, 2nd, 4th, 6th, 10th, and 16th-level Hexes</p><p>Some witches find their patrons while in the throes of despair and grief, when all they desire is to see the veneer of civilization peel back to reveal the filth and rot that underlies all things.</p></div>
<div className="archetype"><p><Link to="/arc-witch/rhetorician">Rhetorician</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Hex; Spells</p><p>Rhetoricians feel driven to engage in debate, learn as much as they can about their potential foes, and seek ways to use information and quick talking to handle problems before resorting to raw violence.</p></div>
<div className="archetype"><p><Link to="/arc-witch/scarred_witch_doctor">Scarred Witch Doctor</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Hexes; Familiar; 1st-level Hex</p><p>(Orc Only) The scarred witch doctor draws power from her ability to endure pain and suffering.</p></div>
<div className="archetype"><p><Link to="/arc-witch/sea_witch">Sea Witch</Link></p><p><strong>Modifies or Replaces:</strong> Patron Spells; 1st-level Hex</p><p>A sea witch's affinities are tied to the vast oceans and the rolling waves.</p></div>
<div className="archetype"><p><Link to="/arc-witch/season_witch">Season Witch</Link></p><p><strong>Modifies or Replaces:</strong> Patron; 1st-level Hex</p><p>Season witches gain their power from the cyclical and mystical exchange of energy passed from one season of nature to another.</p></div>
<div className="archetype"><p><Link to="/arc-witch/seducer">Seducer</Link></p><p><strong>Modifies or Replaces:</strong> Patron; Key Ability Score; 1st, 6th, 8th-level Hex</p><p>These charismatic witches, often devotees of the Green Mother, rely on their otherworldly charms to achieve their aims.</p></div>
<div className="archetype"><p><Link to="/arc-witch/synergist">Synergist</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 8th, and 14th-level Hexes</p><p>Synergists gain the ability to combine their forms with their familiars' in order to create something more powerful than either alone.</p></div>
<div className="archetype"><p><Link to="/arc-witch/tatterdemalion">Tatterdemalion</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Cantrips; 1st, 4th, 8th, 12th, 16th-level Hex</p><p>Some witches can bend the warp and weft of fabric and thread.</p></div>
<div className="archetype"><p><Link to="/arc-witch/vellemancer">Vellemancer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 2nd, 6th, and 8th-level Hexes</p><p>While the popular stereotype envisions witches as wicked spellcasters sowing misery, many people turn to the arcane to heal others and better the world. The vellemancer is a guide, using her witchcraft to empower and teach others.</p></div>
<div className="archetype"><p><Link to="/arc-witch/veneficus_witch">Veneficus Witch</Link></p><p><strong>Modifies or Replaces:</strong> 2nd and 10th-level Hexes</p><p>Veneficus witches specialize in poisons - brewing both magical and traditional concoctions, and applying them to weapons, traps or even her potent hexes.</p></div>
<div className="archetype"><p><Link to="/arc-witch/venom_siphoner">Venom Siphoner</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 2nd, 6th-level Hex; Alertness</p><p>Witches are no strangers to poisons, using them alongside their various brews, curses, spells, and other tools of the trade.</p></div>
<div className="archetype"><p><Link to="/arc-witch/white_haired_witch">White-Haired Witch</Link></p><p><strong>Modifies or Replaces:</strong> Hex; Major Hex; Grand Hex</p><p>A white-haired witch concentrates her mysterious powers on improving her prowess in melee, using feats of agility and her prehensile hair to deal extreme damage.</p></div>
<div className="archetype"><p><Link to="/arc-witch/winter_witch">Winter Witch</Link></p><p><strong>Modifies or Replaces:</strong> Familiar; Patron; 4th-level Hex</p><p>The descendents of Baba Yaga rule the frozen realm of Irrisen, and possess a unique power stemming from their otherworldly origin and their ties to cold magic.</p></div>
<div className="archetype"><p><Link to="/arc-witch/witch_watcher">Witch-Watcher</Link></p><p><strong>Modifies or Replaces:</strong> Spells per Day</p><p>For reasons known only to them, witch-watchers offer protection to nobles across Golarion.</p></div>
<div className="archetype"><p><Link to="/arc-witch/wyrm_witch">Wyrm Witch</Link></p><p><strong>Modifies or Replaces:</strong> Patron; Familiar</p><p>Some witch covens have learned to use treasure to access other draconic powers.</p></div>
<h3 id="class-witch-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"witch archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alertness"},{"header":"Alignment"},{"header":"Cantrips"},{"header":"Class Skills"},{"header":"Deliver Touch Spells"},{"header":"Familiar"},{"header":"Hexes"},{"header":"1st-level Hex"},{"header":"2nd-level Hex"},{"header":"4th-level Hex"},{"header":"6th-level Hex"},{"header":"8th-level Hex"},{"header":"10th-level Hex"},{"header":"12th-level Hex"},{"header":"14th-level Hex"},{"header":"16th-level Hex"},{"header":"20th-level Hex"},{"header":"Major Hex"},{"header":"Grand Hex"},{"header":"Key Ability Score"},{"header":"Patron"},{"header":"Patron Spells"},{"header":"4th-level Patron Spell"},{"header":"10th-level Patron Spell"},{"header":"16th-level Patron Spell"},{"header":"18th-level Patron Spell"},{"header":"Spellcasting"},{"header":"Weapon Proficiency"}],"data":[["‹arc-witch/Alley Witch›",null,null,null,null,null,"X",null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Ashiftah›",null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Beast-Bonded›",null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Bonded Witch›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Bouda›",null,"X",null,null,null,"X",null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Cartomancer›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Coral Witch›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Demon-Sworn›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Dimensional Occultist›",null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Dreamweaver›",null,null,null,"X",null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Flood Walker›",null,"X",null,"X",null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X","X","X","X",null,null],["‹arc-witch/Gingerbread Witch›",null,null,null,null,null,"X",null,"X",null,"X",null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Gravewalker›",null,null,null,null,null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Hag of Gyronna›",null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,"X","X",null,null,null,null,null,null],["‹arc-witch/Hagbound›",null,null,null,null,null,null,null,"X","X","X",null,"X","X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Havocker›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Hedge Witch›",null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Herb Witch›",null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Hex Channeler›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Invoker›",null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Jinx Witch›",null,null,null,"X",null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Ley Line Guardian›",null,null,null,null,null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-witch/Medium›",null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Mirror Witch›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Mountain Witch›",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Nexian Spellspy›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Pact Witch›",null,"X",null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Patron Familiars›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Putrefactor›",null,null,null,null,null,"X",null,"X","X","X","X",null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Rhetorician›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Scarred Witch Doctor›",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-witch/Sea Witch›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-witch/Season Witch›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Seducer›",null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-witch/Synergist›",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Tatterdemalion›",null,null,"X",null,null,null,null,"X",null,"X",null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-witch/Vellemancer›",null,null,null,"X",null,null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Veneficus Witch›",null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/Venom Siphoner›","X",null,null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-witch/White-Haired Witch›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-witch/Winter Witch›",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-witch/Witch-Watcher›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-witch/Wyrm Witch›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-witch-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="witch" prefix="class-witch-" />
</>};
const _wizard = {hasJL:true,title: "Wizard", jsx: <><div className="jumpList" id="class-wizard-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-wizard-bonus-languages">Bonus Languages</InnerLink></li><li><InnerLink toTop to="class-wizard-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-wizard-arcane-bond-ex-or-sp">Arcane Bond</InnerLink></li><li><InnerLink toTop to="class-wizard-arcane-school">Arcane School</InnerLink></li><li><InnerLink toTop to="class-wizard-scribe-scroll">Scribe Scroll</InnerLink></li><li><InnerLink toTop to="class-wizard-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-wizard-arcane-discoveries">Arcane Discoveries</InnerLink></li><li><InnerLink toTop to="class-wizard-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-wizard-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-wizard-archetypes-by-feature">Archetypes by Feature</InnerLink></li><li><InnerLink toTop to="class-wizard-favored-class-bonuses">Favored Class Bonuses</InnerLink></li></ul></div><h2 id="class-wizard-wizard">Wizard</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 77</Link></p>
<p>Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible - such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.</p>
<p><strong>Role:</strong> While universalist wizards might study to prepare themselves for any manner of danger, specialist wizards research schools of magic that make them exceptionally skilled within a specific focus. Yet no matter their specialty, all wizards are masters of the impossible and can aid their allies in overcoming any danger.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d6</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={3} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c se">(WIS)</td></tr></tbody></table>
<h3 id="class-wizard-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-wizard--table-0"><table>
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
<th>7th</th>
<th>8th</th>
<th>9th</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>+0</td>
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>Arcane bond, arcane school, cantrips, Scribe Scroll</td>
<td>3</td>
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
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+0</td>
<td>+3</td>
<td>-</td>
<td>4</td>
<td>2</td>
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
<td>3rd</td>
<td>+1</td>
<td>+1</td>
<td>+1</td>
<td>+3</td>
<td>-</td>
<td>4</td>
<td>2</td>
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
<td>4th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>Bonus feat</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>+3</td>
<td>+2</td>
<td>+2</td>
<td>+5</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>+4</td>
<td>+2</td>
<td>+2</td>
<td>+6</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>+4</td>
<td>+3</td>
<td>+3</td>
<td>+6</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>Bonus feat</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>+5</td>
<td>+3</td>
<td>+3</td>
<td>+7</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>+6/+1</td>
<td>+4</td>
<td>+4</td>
<td>+8</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>+7/+2</td>
<td>+4</td>
<td>+4</td>
<td>+9</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Bonus feat</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>18th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>19th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>20th</td>
<td>+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Bonus feat</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td><Link to="/eq-weapon/club">club</Link></td><td><Link to="/eq-weapon/dagger">dagger</Link></td></tr><tr><td><Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link></td><td><Link to="/eq-weapon/light_crossbow">light crossbow</Link></td></tr><tr><td colSpan={2}><Link to="/eq-weapon/quarterstaff">quarterstaff</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Armor interferes with a wizard's movements, which can cause his spells with somatic components to fail.</td></tr></tbody></table>
<Ability id="class-wizard-bonus-languages" icon={["stairs-goal"]}>
<Pair single id="class-wizard-bonus-languages">Bonus Languages</Pair>
<Pair title="Ability">You may substitute Draconic for one of the bonus languages available to you because of your race.</Pair>
</Ability>
<Ability id="class-wizard-spells" icon={["magic-swirl"]}><Pair single id="class-wizard-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn, prepare, or cast a spell, you must have a Intelligence score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Intelligence score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_wizard">wizard spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Intelligence modifier. You must choose and prepare your spells in advance.</Pair><Pair title="Special">You may know any number of spells. You must choose and prepare your spells ahead of time by getting 8 hours of sleep and spending 1 hour studying your spellbook and deciding which spells to prepare.</Pair></Ability><Ability id="class-wizard-cantrips" icon={["magic-swirl"]}>
<Pair single id="class-wizard-cantrips">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You can prepare a number of cantrips, or 0-level arcane spells, each day. These spells are cast like any other but they are not expended when cast and may be used again. You can prepare a cantrip from a prohibited school, but it uses up two of your available slots.</Pair>
</Ability>
<Ability id="class-wizard-spellbooks" icon={["magic-swirl"]}>
<Pair single id="class-wizard-spellbooks">Spellbooks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must study your spellbook each day to prepare your spells. You can't prepare any spell not recorded in your spellbook, except for <Link to="/spell/read_magic">read magic</Link> (which all wizards can prepare from memory).</Pair>
<Pair title="Special">You begin play with a spellbook containing all 0-level wizard spells (except those from your prohibited schools, if any; see <em>Arcane Schools</em>) plus three 1st-level spells of your choice. You also select a number of additional 1st-level spells equal to your Intelligence modifier to add to the spellbook. At each new wizard level, you gain two new spells of any spell level or levels that you can cast (based on your new wizard level) for your spellbook. At any time, you can also add spells found in wizards' spellbooks to your own (see <Link to="/rule/arcane_magical_writing">Arcane Magical Writing</Link>).</Pair>
</Ability>
<Ability id="class-wizard-arcane-bond-ex-or-sp" extraClasses="hasSubs" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="class-wizard-arcane-bond-ex-or-sp" flavor="At 1st level, wizards form a powerful bond with an object or a creature.">Arcane Bond (Ex or Sp)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">This bond can take one of two forms: a familiar or a bonded object. Once you make this choice, it is permanent and cannot be changed.</Pair>
</Ability>
<Ability id="class-wizard-familiar" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="class-wizard-familiar">Familiar</Pair>
<Pair title="Ability">A <Link to="/sidekick/familiar">familiar</Link> is a magical pet that enhances your skills and senses and can aid you in magic. The full rules for familiars can be found <Link to="/ability/familiars">here</Link>.</Pair>
</Ability>
<Ability id="class-wizard-bonded-object" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="class-wizard-bonded-object">Bonded Object</Pair>
<Pair title="Ability"><p>If you select a bonded object, you begin play with one at no cost. Objects that are the subject of an arcane bond must fall into one of the following categories: amulet, ring, staff, wand, or weapon. These objects are always masterwork quality. Weapons acquired at 1st level are not made of any special material. If the object is an amulet or ring, it must be worn to have effect, while staves, wands, and weapons must be wielded. If you attempt to cast a spell without your bonded object worn or in hand, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level. If the object is a ring or amulet, it occupies the <Link to="/rule/neck_slot">ring or neck slot</Link> accordingly.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from your opposition schools.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). If the bonded object is a wand, it loses its wand abilities when its last charge is consumed, but it is not destroyed and it retains all of its bonded object properties and can be used to craft a new wand. The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as your bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
<Ability id="class-wizard-arcane-school" icon={["magic-swirl"]}>
<Pair single id="class-wizard-arcane-school" flavor="A wizard can choose to specialize in one school of magic, gaining additional spells and powers based on that school.">Arcane School</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice"><p>If you choose to specialize in one school of magic, you must select two other schools as your <strong className="hl">opposition schools</strong>, representing knowledge sacrificed in one area of arcane lore to gain mastery in another. If you prepare spells from your opposition schools, you must use two spell slots of that level to prepare the spell. For example, a wizard with evocation as an opposition school must expend two of his available 3rd-level spell slots to prepare a <Link to="/spell/fireball">fireball</Link>. In addition, you take a -4 penalty on any skill checks made when crafting a magic item that has a spell from one of your opposition schools as a prerequisite.</p>
<p>Each arcane school gives you a number of school powers. In addition, you receive an additional spell slot of each spell level you can cast, from 1st on up. Each day, you can prepare a spell from your specialty school in that slot. This spell must be in your spellbook. You can select a spell modified by a metamagic feat to prepare in your school slot, but it uses up a higher-level spell slot.</p>
<p>Here is the <Link to="/ability/arcane_schools">list of arcane schools</Link>. They include other options, such as <em>focused schools</em> and <em>elemental schools.</em></p>
</Pair>
<Pair title="Special">This choice must be made at 1st level, and once made, it cannot be changed. If you choose not to specialize, you receive the <Link to="/arcaneschool/universalist">universalist</Link> school instead; a universalist wizard has no opposition schools and thus can prepare spells from any school without restriction, but he does not receive a school slot.</Pair>
</Ability>
<Ability id="class-wizard-scribe-scroll" icon={["stairs-goal"]}>
<Pair single id="class-wizard-scribe-scroll">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">you gain <Link to="/feat/scribe_scroll">Scribe Scroll</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="class-wizard-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="class-wizard-bonus-feats">Bonus Feats</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">You gain a bonus feat from the following choices: <Link to="/feat/spell_mastery">Spell Mastery</Link>, <Link to="/feat/eldritch_aid">Eldritch Aid</Link>, <Link to="/feat/planned_spontaneity">Planned Spontaneity</Link>, any <Link to="/main/metamagic_feat">metamagic feat</Link>, any <Link to="/main/item_creation_feat">item creation feat</Link>, or any <Link to="/main/feats_familiar">familiar feat</Link>. You must meet all prerequisites for a bonus feat, including caster level minimums.</Pair>
<Pair title="At 10th Level">You gain another bonus feat from the given choices. You still need to meet its prerequisites.</Pair>
<Pair title="At 15th Level">You gain another bonus feat from the given choices. You still need to meet its prerequisites.</Pair>
<Pair title="At 20th Level">You gain another bonus feat from the given choices. You still need to meet its prerequisites.</Pair>
</Ability>
<aside><p><strong className="hl" id="class-wizard-arcane-discoveries" data-hash-target>Arcane Discoveries:</strong> Wizards spend much of their lives seeking deeper truths, hunting knowledge as if it were life itself. The wizard's power is not necessarily the spells he wields; spells are merely the outward, most visible manifestation of that power. A wizard's true power is in his fierce intelligence, his dedication to his craft, and his ability to peel back the surface truths of reality to understand the fundamental underpinnings of existence. A wizard spends much of his time researching spells, and would rather find an undiscovered library than a room full of gold. A wizard need not be a reclusive bookworm, but he must have a burning curiosity for the unknown. Arcane discoveries are the results of this obsession with magic. A wizard can learn one of these <Link to="/ability/arcane_discoveries">arcane discoveries</Link> in place of a regular feat or wizard bonus feat.</p>
</aside><h3 id="class-wizard-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-wizard--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Arch-Familiar (Su)</td><td>At 20th level, the character's familiar is smarter and savvier than plenty of adventurers - and also more dangerous! The familiar's Intelligence increases by 5, and it gains 12 spells levels' worth of spell-like abilities (for example, three daily castings of <Link to="/spell/greater_invisibility">greater invisibility</Link>), drawn from spells its master can cast and using its master's caster levels, DCs, and so forth. This capstone is available to any class with a familiar.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Walking Library (Ex)</td><td>At 20th level, the character becomes a small, mobile athenaeum of occult scraps and lore. The character adds 100 spell levels' worth of spells to his spellbook or familiar and gains a +4 insight bonus on all Knowledge skills. Characters of any class that prepares spells from a spellbook or familiar can select this ability.</td></tr>
<tr><td>Well-Prepared (Su)</td><td>At 20th level, the wizard has a spell for every occasion he can imagine - and a few he can't. The wizard gains two additional cantrips per day, six additional 1st- and 2nd-level spell slots, four additional 3rd- and 4th-level spell slots, two additional 5th-level spell slots, and one additional 6th-level spell slot.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-wizard-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-wizard/absalom_arcanamirium_crafter">Absalom: Arcanamirium Crafter</Link></p><p><strong>Modifies or Replaces:</strong> Hand of the Apprentice</p><p>One trained by the Arcanamirium, a college specializing in the universalist school of magic and the art of crafting magical items.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/arcane_bomber">Arcane Bomber</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Cantrips; Arcane School</p><p>To many wizards, the experimentation of the alchemist seems quaint, if not dangerous or frightening. A few wizards take up the secrets of the bomb, however, fusing alchemy with their already considerable magical power.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/arcane_physician">Arcane Physician</Link></p><p><strong>Modifies or Replaces:</strong> Arcane School; Scribe Scroll</p><p>Arcane physicians use their scholarly knowledge and arcane mastery to achieve incredible feats of medicine.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/arcane_warden">Arcane Warden</Link></p><p><strong>Modifies or Replaces:</strong> Arcane School; Class Skills; Scribe Scroll; Bonus Feats; Hand of the Apprentice; Metamagic Mastery</p><p>Arcane wardens are wizards who specialize in the discovery or generation of places of safety and refuge.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/bonded_wizard">Bonded Wizard</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; 5th, 10th, and 15th-level Bonus Feats</p><p>Many wizards form an arcane bond with an item, but for some this bond becomes a powerful mystic union.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/cheliax_egorian_academy_infernal_binder">Cheliax: Egorian Academy Infernal Binder</Link></p><p><strong>Modifies or Replaces:</strong> Acid Dart, Dimensional Steps</p><p>A wizard trained by the prestigious Egorian Academy, best known for its Infernal Binding program in the school of conjuration.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/chronomancer">Chronomancer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 10th, 15th, 20th-level Bonus Feats</p><p>Rare arcane scholars known as chronomancers demonstrate the ability to shift themselves in short bursts between the past, future, and alternate presents.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/clocksmith">Clocksmith</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School; Scribe Scroll; Bonus Feats</p><p>Clocksmiths are oddities among wizard communities, pursuing the study and creation of clockwork constructs to near obsession</p></div>
<div className="archetype"><p><Link to="/arc-wizard/cruoromancer">Cruoromancer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 5th, 10th, 15th, 20th-level Bonus Feat</p><p>(Dhampir Only) A cruoromancer infuses his necromantic magic with the power of his unique mixture of living blood and undead ichor.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/elder_mythos_scholar">Elder Mythos Scholar</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 1st, 8th-level Arcane School Ability; Spellbook; Scribe Scroll; 5th, 10th-level Bonus feats</p><p>Elder Mythos scholars risk their sanity to seek knowledge of alien and awful entities from beyond the stars.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/exploiter_wizard">Exploiter Wizard</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School</p><p>Contrary to traditional wizardly study, an exploiter wizard forgoes the tried and true methods of arcane focus and arcane schools for the exploits favored by an arcanist.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/familiar_adept">Familiar Adept</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; 5th and 10th-level Bonus Feats; Arcane Bond; Spellbook</p><p>Many wizards employ familiars to assist them, but only a few have unlocked the true power of their school of magic through the familiar itself.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/first_world_caller">First World Caller</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School; Scribe Scroll; 10th, 15th-level Bonus Feats</p><p>Some wizards, typically First World gnomes, have mystical ties with the First World, the primordial home of the fey</p></div>
<div className="archetype"><p><Link to="/arc-wizard/hallowed_necromancer">Hallowed Necromancer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane School; Spells; Power Over Undead; Grave Touch; Scribe Scroll; 5th, 10th, 15th-level Bonus Feat</p><p>Many wizards study necromancy to create undead, but some study the same arts to purge the stain of undeath.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/instructor">Instructor</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 5th, 10th, 15th, and 20th-level Bonus Feats</p><p>Whether serving as staff at a formal school of magic or simply acting as a wandering teacher, an instructor has an apprentice who trades service to the instructor for lessons in magic.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/pact_wizard_ff">Pact Wizard (FF)</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School</p><p>Some wizards make bargains with beings from other realms in order to gain arcane power. These pact wizards have unparalleled access to extraplanar allies, but these bonds never come without strings attached.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/pact_wizard_hhh">Pact Wizard (HHH)</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Scribe Scroll; 5th, 10th, 15th, and 20th level Bonus Feats</p><p>Wizards who seek mastery of arcane power without tedious study and monotonous research.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/poleiheira_adherent">Poleiheira Adherent</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School</p><p>Poleiheira adherents are wizards who wish to emulate the explorations and discoveries of Arustun and partake in great odysseys as they seek to imitate his achievements.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/primalist">Primalist</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond, 5th-level Bonus Feat, 10th-level Bonus Feat</p><p>A primalist is a wizard who has spent a considerable amount of time studying the chaos that is primal magic.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/qadira_mage_of_the_veil">Qadira: Mage of the Veil</Link></p><p><strong>Modifies or Replaces:</strong> Blinding Ray, Invisibility Field</p><p>Rather than controlling the elements or transforming the environment, mages of the veil focus on much more subtle magic.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/runesage">Runesage</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School</p><p>Runesages draw upon the mystic energies of ancient Thassilon.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/scroll_scholar">Scroll Scholar</Link></p><p><strong>Modifies or Replaces:</strong> Diviner's Fortune (diviner) or Hand of the Apprentice (universalist), 5th-level Bonus Feat, 4th-level spell slot</p><p>Those who trade some of their potential to better understand ancient texts and scrolls can become learned scroll scholars.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/scrollmaster">Scrollmaster</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 10th-level Bonus Feat</p><p>To some wizards, a scroll is not just a written form of a spell, it is a physical weapon meant to be used in combat like a sword or a shield.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/shadowcaster">Shadowcaster</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; 5th-level Bonus Feat; 10th-level Bonus Feat</p><p>Trained in the dark mysteries of Nidal's Umbral Court, the shadowcaster harnesses the power of shadows to bolster their spellcasting.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/siege_mage">Siege Mage</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Arcane Bond; Cantrips; Arcane School</p><p>The siege mage combines his arcane mastery with a supernatural link to siege engines.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/spell_sage">Spell Sage</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School</p><p>A spell sage has mastered spells of all types, and is able to increase the effectiveness of his own spells and eventually even cast spells from other classes' spell lists.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/spellbinder">Spellbinder</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond</p><p>(Elf Only) A spellbinder is an elven wizard who forges an arcane bond between himself and one or more wizard spells.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/spellslinger">Spellslinger</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Scribe Scroll; Cantrips; Arcane School</p><p>While few contest the seductive allure of commanding arcane and occult powers, there are those wizards who become obsessed with the natural mysteries of black powder.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/spirit_binder">Spirit Binder</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School; Scribe Scroll; Bonus Feats</p><p>While most wizards learn their arts through gradual study, spirit binders have made a sudden arcane breakthrough due to the traumatic experience of losing a loved one.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/spirit_whisperer">Spirit Whisperer</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Spellbook; Arcane School; Bonus Feats; 20th-level Bonus Feat</p><p>Spirit whisperers are a breed apart among wizards, and are often mistaken for witches.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/sword_binder">Sword Binder</Link></p><p><strong>Modifies or Replaces:</strong> Arcane Bond; Arcane School; Bonus School Spell Slots; 10th-level Bonus Feat</p><p>Sword binders follow a tradition of martial wizards who often worked with the Church of Aroden and the crowns of Taldor and then Cheliax.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/thassilonian_specialist">Thassilonian Specialist</Link></p><p><strong>Modifies or Replaces:</strong> Lose access to two schools of magic</p><p>Specialist in a Thassilonian school of magic, this specialist sacrifices his connection with two schools in order to greatly strengthen his chosen specialty.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/undead_master">Undead Master</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Arcane School; Arcane Bond; Scribe Scroll; 5th, 10th, 15th, 20th-level Bonus Feats</p><p>Undead masters have great power over undeath.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/wind_listener">Wind Listener</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Arcane School; Arcane Bond; 5th, 10th, 15th-level Bonus Feat</p><p>(Sylph Only) The wind listener takes a sylph's natural curiosity to the extreme, enhancing his natural skill at subterfuge and eavesdropping with potent arcane magic.</p></div>
<div className="archetype"><p><Link to="/arc-wizard/worldseeker">Worldseeker</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; 6th/8th-level School Ability; Arcane Bond; 5th, 15th-level Bonus Feat</p><p>Worldseekers are wizards who travel to all corners of the Great Beyond.</p></div>
<h3 id="class-wizard-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"wizard archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Arcane Bond"},{"header":"Arcane School"},{"header":"1st-level Arcane School Ability"},{"header":"6th-level Arcane School Ability"},{"header":"8th-level Arcane School Ability"},{"header":"Bonus Feats"},{"header":"5th-level Bonus Feat"},{"header":"10th-level Bonus Feat"},{"header":"15th-level Bonus Feat"},{"header":"20th-level Bonus Feat"},{"header":"Bonus School Spell Slots"},{"header":"Cantrips"},{"header":"Class Skills"},{"header":"Metamagic Mastery"},{"header":"Scribe Scroll"},{"header":"Spellbook"},{"header":"Spellcasting"}],"data":[["‹arc-wizard/Absalom: Arcanamirium Crafter›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Arcane Bomber›",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null],["‹arc-wizard/Arcane Physician›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-wizard/Arcane Warden›",null,null,"X",null,null,null,"X",null,null,null,null,null,null,"X","X","X",null,null],["‹arc-wizard/Bonded Wizard›",null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,"X",null,null],["‹arc-wizard/Cheliax: Egorian Academy Infernal Binder›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Chronomancer›",null,"X",null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-wizard/Clocksmith›",null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-wizard/Cruoromancer›",null,"X",null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null],["‹arc-wizard/Elder Mythos Scholar›",null,"X",null,"X",null,"X",null,"X","X",null,null,null,null,null,null,"X","X",null],["‹arc-wizard/Exploiter Wizard›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Familiar Adept›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,"X","X",null],["‹arc-wizard/First World Caller›",null,"X","X",null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null],["‹arc-wizard/Hallowed Necromancer›",null,null,"X",null,null,null,null,"X","X","X",null,null,null,null,null,"X",null,"X"],["‹arc-wizard/Instructor›",null,"X",null,null,null,null,null,"X","X","X","X",null,null,null,null,null,null,null],["‹arc-wizard/Pact Wizard (FF)›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Pact Wizard (HHH)›",null,null,null,null,null,null,null,"X","X","X","X",null,null,null,null,"X",null,"X"],["‹arc-wizard/Poleiheira Adherent›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Primalist›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-wizard/Qadira: Mage of the Veil›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Runesage›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Scroll Scholar›",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-wizard/Scrollmaster›",null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-wizard/Shadowcaster›",null,"X",null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-wizard/Siege Mage›",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-wizard/Spell Sage›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Spellbinder›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Spellslinger›",null,"X","X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-wizard/Spirit Binder›",null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-wizard/Spirit Whisperer›",null,"X","X",null,null,null,"X",null,null,null,"X",null,null,null,null,null,"X",null],["‹arc-wizard/Sword Binder›",null,"X","X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null],["‹arc-wizard/Thassilonian Specialist›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-wizard/Undead Master›","X","X","X",null,null,null,null,"X","X","X","X",null,null,null,null,"X",null,null],["‹arc-wizard/Wind Listener›",null,"X","X",null,null,null,null,"X","X","X",null,null,null,"X",null,null,null,null],["‹arc-wizard/Worldseeker›",null,"X",null,null,"X","X",null,"X",null,"X",null,null,null,null,null,"X",null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<h3 id="class-wizard-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<RacialOptions cls="wizard" prefix="class-wizard-" />
</>};
export default {medium:_medium,samurai:_samurai,shaman:_shaman,warpriest:_warpriest,witch:_witch,wizard:_wizard}