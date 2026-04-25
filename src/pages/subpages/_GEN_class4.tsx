import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _skald = {hasJL:true,title: "Skald", jsx: <><div className="jumpList" id="class-skald-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-skald-bardic-knowledge-ex">Bardic Knowledge</InnerLink></li><li><InnerLink toTop to="class-skald-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-skald-raging-song-su">Raging Song</InnerLink></li><li><InnerLink toTop to="class-skald-versatile-performance-ex">Versatile Performance</InnerLink></li><li><InnerLink toTop to="class-skald-well-versed-ex">Well-Versed</InnerLink></li><li><InnerLink toTop to="class-skald-rage-powers-ex">Rage Powers</InnerLink></li><li><InnerLink toTop to="class-skald-uncanny-dodge-ex">Uncanny Dodge</InnerLink></li><li><InnerLink toTop to="class-skald-spell-kenning-su">Spell Kenning</InnerLink></li><li><InnerLink toTop to="class-skald-lore-master-ex">Lore Master</InnerLink></li><li><InnerLink toTop to="class-skald-improved-uncanny-dodge-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-skald-damage-reduction-ex">Damage Reduction</InnerLink></li><li><InnerLink toTop to="class-skald-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-skald-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-skald-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-skald-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-skald-skald">Skald</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 49</Link></p>
<p>Skalds are poets, historians, and keepers of lore who use their gifts for oration and song to inspire allies into a frenzied rage. They balance a violent spirit with the veneer of civilization, recording events such as heroic battles and the deeds of great leaders, enhancing these stories in the retelling to earn bloodier victories in combat. A skald's poetry is nuanced and often has multiple overlapping meanings, and he applies similar talents to emulate magic from other spellcasters.</p>
<p><strong>Role:</strong> A skald inspires his allies, and often presses forward to fight enemies in melee. Outside of combat, he's useful as a healer and scholar, less versatile but more durable than a bard.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/barbarian">Barbarian</Link> and <Link to="/class/bard">bard</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>3d6 &times; 10 gp (average 105 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-skald-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-skald--table-0"><table>
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
<td>Bardic knowledge, cantrips, inspired rage +1 (+2 Str/Con), raging song, scribe scroll</td>
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
<td>Versatile performance, well-versed</td>
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
<td>Rage power, song of marching</td>
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
<td>Inspired rage +2, uncanny dodge</td>
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
<td>Spell kenning 1/day</td>
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
<td>Rage power, song of strength</td>
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
<td>Lore master 1/day, versatile performance</td>
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
<td>Improved uncanny dodge, inspired rage +3 (+4 Str/Con)</td>
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
<td>Rage power, DR 1/-</td>
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
<td>Dirge of doom</td>
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
<td>Spell kenning 2/day</td>
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
<td>Inspired rage +4, rage power, versatile performance</td>
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
<td>Lore master 2/day</td>
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
<td>DR 2/-, song of the fallen</td>
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
<td>Rage power</td>
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
<td>Inspired rage +5 (+6 Str/Con)</td>
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
<td>Spell kenning 3/day, versatile performance</td>
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
<td>Rage power</td>
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
<td>DR 3/-, lore master 3/day</td>
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
<td>Inspired rage +6, master skald</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-skald-spells-known">Spells Known</h3>
<ScrollContainer id="class-skald--table-1"><table>
<thead>
<tr>
<th>Level</th>
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
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th>Shields?</th><td colSpan={2}>Yes, except tower shields</td></tr><tr><td colSpan={3} className="sw se">A skald can cast skald spells while wearing light or medium armor and even using a shield without incurring the normal arcane spell failure chance. This does not affect the arcane spell failure chance for arcane spells received from other classes. Like other arcane spellcasters, a skald wearing heavy armor incurs a chance of arcane spell failure if the spell in question has somatic components.</td></tr></tbody></table>
<Ability id="class-skald-bardic-knowledge-ex" icon={["upgrade"]}>
<Pair single id="class-skald-bardic-knowledge-ex">Bardic Knowledge (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You add <Link to="/misc/half">half</Link> your class level (minimum 1) on all Knowledge skill checks, and may make all Knowledge skill checks untrained.</Pair>
</Ability>
<Ability id="class-skald-spells" icon={["magic-swirl"]}><Pair single id="class-skald-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_skald">skald spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A skald's selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new skald level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair><Pair title="Special">Every skald spell has a verbal component - these verbal components can take the form of song, recitation, or even non-verbal music like percussion.</Pair></Ability><Ability id="class-skald-cantrips" icon={["magic-swirl"]}>
<Pair single id="class-skald-cantrips">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of cantrips, or 0-level arcane spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Cantrips cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-skald-scribe-scroll" icon={["stairs-goal"]}>
<Pair single id="class-skald-scribe-scroll">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/scribe_scroll">Scribe Scroll</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="class-skald-raging-song-su" extraClasses="hasSubs" icon={["stairs-goal","abstract-091"]}>
<Pair single id="class-skald-raging-song-su" flavor="A skald is trained to use music, oration, and similar performances to inspire his allies to feats of strength and ferocity.">Raging Song (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 + twice your skald level + your Cha modifier rounds/day.</Pair>
<Pair title="Standard Action"><p>Each round, you can produce any one of the types of raging song that you have mastered, as indicated by your level.</p>
<p>Starting a raging song is a <strong className="hl">standard action</strong>, but it can be maintained each round as a <strong className="hl">free action</strong>. A raging song cannot be disrupted, but it ends immediately if you are killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action each round to maintain it. A raging song counts as the bard's <Link to="/ability/bardic_performance">bardic performance</Link> special ability for any effect that affects bardic performances.</p>
<p>A raging song has audible components, but not visual components. Affected allies must be able to hear you for the song to have any effect. A deaf skald has a 20% chance to fail when attempting to use a raging song. If you fail this check, the attempt still counts against his daily limit. <Link to="/misc/deaf">Deaf</Link> creatures are immune to raging songs.</p>
<p>If a raging song affects allies, when you begin a raging song and at the start of each ally's turn in which they can hear the raging song, your allies must decide whether to accept or refuse its effects. This is not an action. <Link to="/misc/unconscious">Unconscious</Link> allies automatically accept the song. If accepted, the raging song's effects last for that ally's turn or until the song ends, whichever comes first.</p>
</Pair>
<Pair title="At 7th Level">You can begin a raging song as a <strong className="hl">move-equivalent action</strong>.</Pair>
<Pair title="At 13th Level">You can begin a raging song as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="class-skald-inspired-rage-su" extraClasses="subAbility" icon={["upgrade","broken-shield","abstract-091"]}>
<Pair single id="class-skald-inspired-rage-su">Inspired Rage (Su)</Pair>
<Pair title="At 1st Level"><p>Affected allies gain a +2 morale bonus to Strength and Constitution and a +1 morale bonus on Will saving throws, but also take a -1 penalty to AC. The bonuses increase as you gain levels.</p>
<p>While under the effects of <em>inspired rage,</em> allies other than you cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except Acrobatics, Fly, Intimidate, and Ride) or any ability that requires patience or concentration. (Unlike the barbarian's <em>rage</em> ability, those affected are not fatigued after the song ends.)</p>
<p>If an ally has her own rage class ability (such as barbarian's <em>rage,</em> bloodrager's <em>bloodrage,</em> or skald's <em>inspired rage</em>), she may use the Strength, Constitution, and Will saving throw bonuses, as well as AC penalties, based on her own ability and level instead of those from you (still suffering no fatigue afterward). However, <em>inspired rage</em> does not allow the ally to activate abilities dependent on other <em>rage</em> class abilities, such as <em>rage powers, blood casting,</em> or <em>bloodrager bloodlines;</em> the ally must activate her own <em>rage</em> class ability in order to use these features.</p>
</Pair>
<Pair title="At 4th Level">The morale bonus to Will becomes +2.</Pair>
<Pair title="At 8th Level">The bonus to Will becomes +3, and the bonus to Str and Con becomes +4.</Pair>
<Pair title="At 12th Level">The bonus to Will becomes +4.</Pair>
<Pair title="At 16th Level">The bonus to Will becomes +5, and the bonus to Str and Con becomes +6.</Pair>
</Ability>
<Ability id="class-skald-song-of-marching-su" extraClasses="subAbility" icon={["upgrade","abstract-091"]}>
<Pair single id="class-skald-song-of-marching-su">Song of Marching (Su)</Pair>
<Pair title="At 3rd Level">You can use <em>raging song</em> to inspire your allies to move faster without suffering from fatigue. By expending 1 round of <em>raging song,</em> you invigorate allies within 60 feet, who may <Link to="/rule/hustle">hustle</Link> for the next hour; this movement counts as a walk (not a hustle) for the purpose of accruing nonlethal damage and fatigue. You must continue to perform the song for the remainder of the hour, otherwise its effects end, but only 1 round of <em>raging song</em> is expended for that hour.</Pair>
</Ability>
<Ability id="class-skald-song-of-strength-su" extraClasses="subAbility" icon={["upgrade","abstract-091"]}>
<Pair single id="class-skald-song-of-strength-su">Song of Strength (Su)</Pair>
<Pair title="At 6th Level">You can use <em>raging song</em> to inspire your allies to superhuman feats of strength. Once each round while you use this performance, allies within 60 feet who can hear you may add 1/2 your level to a Strength check or Strength-based skill check.</Pair>
</Ability>
<Ability id="class-skald-dirge-of-doom-su" extraClasses="subAbility" icon={["armor-downgrade","abstract-091"]}>
<Pair single id="class-skald-dirge-of-doom-su">Dirge of Doom (Su)</Pair>
<Pair title="At 10th Level">You can create a sense of growing dread in your enemies, causing them to become <Link to="/misc/shaken">shaken</Link>. This only affects enemies that are within 30 feet and able to hear your performance. The effect persists for as long as the enemy is within 30 feet and you continue your performance. This cannot cause a creature to become frightened or panicked, even if the targets are already shaken from another effect.</Pair>
<Pair title="Special">This is a sonic mind-affecting fear effect, and relies on audible components.</Pair>
</Ability>
<Ability id="class-skald-song-of-the-fallen-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="class-skald-song-of-the-fallen-su">Song of the Fallen (Su)</Pair>
<Pair title="At 14th Level">You can temporarily revive dead allies to continue fighting, with the same limitations as <Link to="/spell/raise_dead">raise dead</Link>. You select a dead ally within 60 feet and expend 1 round of <em>raging song</em> to bring that ally back to life. The revived ally is alive but <Link to="/misc/staggered">staggered</Link>. Each round, you may expend another 1 round of <em>raging song</em> to keep that ally alive for another round. The ally automatically dies if you end this performance or are interrupted. You may revive multiple allies with this ability (either at the same time or over successive rounds) but must expend 1 round of <em>raging song</em> per revived ally per round to maintain the effect.</Pair>
</Ability>
<aside><p>A skald may learn <Link to="/ability/bardic_masterpieces">bardic masterpieces</Link> and <Link to="/ability/sagas">sagas</Link>.</p>
</aside><Ability id="class-skald-versatile-performance-ex" icon={["upgrade"]}>
<Pair single id="class-skald-versatile-performance-ex">Versatile Performance (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability"><p>You choose one type of Perform skill associated with the skald class. You can use your bonus in that skill in place of your bonus in the associated skills listed below. When substituting in this way, you skald use your total Perform skill bonus, including class skill bonus, in place of the associated skill's bonus, whether or not you have ranks in that skill or if it is a class skill.</p>
<p>The types of Perform and their associated skills are:</p>
<ul>
<li><strong className="hl">Oratory:</strong> Diplomacy, Sense Motive</li>
<li><strong className="hl">Percussion:</strong> Handle Animal, Intimidate</li>
<li><strong className="hl">Sing:</strong> Bluff, Sense Motive</li>
<li><strong className="hl">String:</strong> Bluff, Diplomacy</li>
<li><strong className="hl">Wind:</strong> Diplomacy, Handle Animal</li>
</ul>
</Pair>
<Pair title="At 7th Level">You can select an additional type of Perform to substitute.</Pair>
<Pair title="At 12th Level">You can select an additional type of Perform to substitute.</Pair>
<Pair title="At 17th Level">You can select an additional type of Perform to substitute.</Pair>
</Ability>
<Ability id="class-skald-well-versed-ex" icon={["armor-upgrade"]}>
<Pair single id="class-skald-well-versed-ex">Well-Versed (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on saving throws made against bardic performance, as well as all sonic or language-dependent effects.</Pair>
</Ability>
<Ability id="class-skald-rage-powers-ex" icon={["stairs-goal"]}>
<Pair single id="class-skald-rage-powers-ex">Rage Powers (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You learn a <Link to="/ability/rage_powers">rage power</Link> that affects you and any allies under the influence of your <em>inspired rage.</em></Pair>
<Pair title="Info"><p>When starting an <em>inspired rage,</em> you choose which rage powers (if any) to add to the song, and all affected allies gain the benefit of these rage powers, using your level as their effective barbarian level. You use your skald level as your barbarian level for the purpose of selecting rage powers that require a minimum barbarian level. If the rage power's effects depend on your ability modifier (such as <Link to="/ragepower/lesser_spirit_totem">lesser spirit totem</Link>), affected allies use your ability modifier instead of their own for the purposes of this effect.</p>
<p>If a rage power requires another rage power (such as <Link to="/ragepower/disruptive">disruptive</Link>, which requires <Link to="/ragepower/superstition">superstition</Link>), you cannot grant that rage power to allies unless you can also grant that power's prerequisite. You may add multiple rage powers to an inspired rage at the same time using this ability (such as granting superstition and disruptive simultaneously).</p>
<p>If a rage power can only be used a certain number of times per day or per rage (such as <Link to="/ragepower/renewed_vigor">renewed vigor</Link>), each ally affected by the inspired rage song is subject to that limit (with once per rage abilities limited to once per inspired rage).</p>
<p>If you have rage powers from another source, you (but not your allies) can use those rage powers during an inspired rage. You cannot select a duplicate rage power, unless that rage power can be taken multiple times.</p>
<p>If you have the ability to rage from another source, you can use your skald rage powers during that rage as well.</p>
</Pair>
<Pair title="At 6th Level">You gain a new rage power.</Pair>
<Pair title="At 9th Level">You gain a new rage power.</Pair>
<Pair title="At 12th Level">You gain a new rage power.</Pair>
<Pair title="At 15th Level">You gain a new rage power.</Pair>
<Pair title="At 18th Level">You gain a new rage power.</Pair>
<Pair title="Special">You cannot select a rage power that requires the creature to spend a standard action or rounds of rage to activate it. For example, you cannot choose <Link to="/ragepower/terrifying_howl">terrifying howl</Link> (which requires a standard action to activate), but can choose <Link to="/ragepower/knockback">knockback</Link> (which is made in place of a melee attack). Unless otherwise noted, you cannot select an individual rage power more than once.</Pair>
</Ability>
<Ability id="class-skald-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-skald-uncanny-dodge-ex" flavor="A skald gains the ability to react to danger before his senses would normally allow him to do so.">Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor do you lose your Dex bonus to AC if the attacker is invisible. You still lose your Dexterity bonus to AC if immobilized, or if an opponent successfully uses the <Link to="/skill/bluff">feint</Link> action against you.</Pair>
<Pair title="Special">If you have <em>uncanny dodge</em> from a different class, you automatically gain <em>improved uncanny dodge</em> instead.</Pair>
</Ability>
<Ability id="class-skald-spell-kenning-su" icon={["magic-swirl"]}>
<Pair single id="class-skald-spell-kenning-su" flavor="A skald is learned in the magic of other spellcasters, and can use his own magic to duplicate those classes' spells.">Spell Kenning (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Ability">You can cast any spell on the <Link to="/main/spells_bard">bard</Link>, <Link to="/main/spells_cleric">cleric</Link>, or <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/wizard_spell">wizard spell list</Link> as if it were one of your skald spells known, expending a skald spell slot of the same spell level to cast the desired spell. Casting a spell with <em>spell kenning</em> always has a minimum casting time of 1 full round, regardless of the casting time of the spell.</Pair>
<Pair title="At 11th Level">You can use this twice a day.</Pair>
<Pair title="At 17th Level">You can use this three times a day.</Pair>
</Ability>
<Ability id="class-skald-lore-master-ex" icon={["upgrade","rolling-dices"]}>
<Pair single id="class-skald-lore-master-ex" flavor="The skald becomes a master of many different types of lore.">Lore Master (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">You can take 10 on any Knowledge skill check that you have ranks in.</Pair>
<Pair title="Standard Action">You can take 20 on any Knowledge skill check.</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="At 13th Level">You can Take 20 twice a day.</Pair>
<Pair title="At 19th Level">You can Take 20 three times a day.</Pair>
</Ability>
<Ability id="class-skald-improved-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="class-skald-improved-uncanny-dodge-ex">Improved Uncanny Dodge (Ex)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You can no longer be flanked. This defense denies enemies the ability to <Link to="/ability/sneak_attack">sneak attack</Link> you by flanking you, unless the attacker has at least four more levels in a class that grants sneak attack than you have skald levels.</Pair>
<Pair title="Special">If you already have uncanny dodge from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum level required to flank you.</Pair>
</Ability>
<Ability id="class-skald-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="class-skald-damage-reduction-ex">Damage Reduction (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/rule/damage_reduction">damage reduction</Link> DR 1/-. Subtract 1 from the damage you take each time you're dealt damage from a weapon or a natural attack. Damage reduction can reduce damage to 0, but not below 0.</Pair>
<Pair title="At 14th Level">Your DR becomes 2/-.</Pair>
<Pair title="At 19th Level">Your DR becomes 3/-.</Pair>
<Pair title="Special">You grant this DR to all allies affected by your <em>inspired rage.</em></Pair>
</Ability>
<Ability id="class-skald-master-skald-su" icon={["upgrade"]}>
<Pair single id="class-skald-master-skald-su">Master Skald (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your <em>inspired rage</em> no longer gives allies a penalty to AC, nor limits what skills or abilities you can use. Allies with rage class abilities may use features dependent on those abilities without restriction, such as a barbarian's rage powers and a bloodrager's blood casting and bloodline abilities. Finally, when making a full attack, affected allies may make an additional attack each round (as if using a <Link to="/spell/haste">haste</Link> effect).</Pair>
</Ability>
<h3 id="class-skald-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-skald--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Great Kenning (Su)</td><td>At 20th level, the skald's knowledge of other magic grows ever wider. The skald can use spell kenning three additional times per day and can select one additional spell list from which he can cast spells with spell kenning.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-skald-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Duskwalker:</strong> Add 1/2 to the skald's bardic Knowledge bonus.<sup><InnerLink showBacklink="backlink-class-skald-ref-A-1" id="class-skald-ref-A-1" data-hash-target to="class-skald-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Reduce the arcane spell failure chance for casting skald spells when wearing heavy armor by 1%. Once the total reduction reaches 10%, the skald also receives Heavy Armor Proficiency (if the skald does not already possess it).<sup><InnerLink showBacklink="backlink-class-skald-ref-B-1" id="class-skald-ref-B-1" data-hash-target to="class-skald-B">2</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the bonus granted by the well-versed class feature by 1/4 (maximum +8).<sup><InnerLink showBacklink="backlink-class-skald-ref-C-1" id="class-skald-ref-C-1" data-hash-target to="class-skald-C">3</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Add a +1/2 bonus to Acrobatics checks to avoid attacks of opportunity and to Perform checks while performing a raging song.<sup><InnerLink showBacklink="backlink-class-skald-ref-D-1" id="class-skald-ref-D-1" data-hash-target to="class-skald-D">4</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add a +1 bonus on <Link to="/rule/concentration">concentration</Link> checks when casting skald spells.<sup><InnerLink showBacklink="backlink-class-skald-ref-C-2" id="class-skald-ref-C-2" data-hash-target to="class-skald-C">3</InnerLink></sup></p>
<p><strong>Grippli:</strong> Increase the skald's total number of raging song rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-skald-ref-E-1" id="class-skald-ref-E-1" data-hash-target to="class-skald-E">5</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Increase the skald's total number of raging song rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-skald-ref-C-3" id="class-skald-ref-C-3" data-hash-target to="class-skald-C">3</InnerLink></sup></p>
<p><strong>Halfling:</strong> Choose a weapon from the following list: dagger, sling, or any weapon with the word "halfling" in its name. Add a +1/2 bonus on critical hit confirmation rolls with that weapon (maximum bonus +4). This bonus doesn't stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-skald-ref-C-4" id="class-skald-ref-C-4" data-hash-target to="class-skald-C">3</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Increase the skald's total number of raging song rounds per day by 1.<sup><InnerLink showBacklink="backlink-class-skald-ref-F-1" id="class-skald-ref-F-1" data-hash-target to="class-skald-F">6</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell from the skald's spell list to the skald's known spells. This spell must be at least 1 spell level below the highest level the skald can cast.<sup><InnerLink showBacklink="backlink-class-skald-ref-F-2" id="class-skald-ref-F-2" data-hash-target to="class-skald-F">6</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-skald-ref-G-1" id="class-skald-ref-G-1" data-hash-target to="class-skald-G">7</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add one spell from the skald's spell list to the skald's known spells. This spell must be at least 1 spell level below the highest level of spell the skald can cast.<sup><InnerLink showBacklink="backlink-class-skald-ref-H-1" id="class-skald-ref-H-1" data-hash-target to="class-skald-H">8</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1/2 to the skald's bardic knowledge bonus.<sup><InnerLink showBacklink="backlink-class-skald-ref-I-1" id="class-skald-ref-I-1" data-hash-target to="class-skald-I">9</InnerLink></sup></p>
</div>
<h3 id="class-skald-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-skald/augur">Augur</Link></p><p><strong>Modifies or Replaces:</strong> Well-Versed; Versatile Performance; Spell Kenning</p><p>Tales of Merivesta Olinchi are surprisingly common among the Bekyar of the Mwangi Expanse, who claim she spent some time studying their traditions and history.</p></div>
<div className="archetype"><p><Link to="/arc-skald/bacchanal">Bacchanal</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Versatile Performance; Song of Marching; Dirge of Doom</p><p>Bacchanals are skalds who use ecstatic dancing and ribald songs to influence the primal instincts of listeners.</p></div>
<div className="archetype"><p><Link to="/arc-skald/battle_scion">Battle Scion</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Dirge of Doom; Song of the Fallen; Master Skald</p><p>The battle scion possesses a unique mixture of courtly grace alongside martial and magical prowess.</p></div>
<div className="archetype"><p><Link to="/arc-skald/bekyar_demon_dancer">Bekyar Demon Dancer</Link></p><p><strong>Modifies or Replaces:</strong> Skills; Versatile Performance; 3rd, 6th, and 9th-level Rage Powers</p><p>While the twisted power of the demon-worshiping Bekyar's skalds is great, it comes at a terrible price.</p></div>
<div className="archetype"><p><Link to="/arc-skald/belkzen_war_drummer">Belkzen War Drummer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Bardic Knowledge; Scribe Scroll; Lore Master; 7th-level Versatile Performance</p><p>These fierce drummers are equally adept at tapping out a driving rhythm and rapping enemies upside the head with the same massive clubs they use to beat the crude hidecovered drums they carry into battle.</p></div>
<div className="archetype"><p><Link to="/arc-skald/boaster">Boaster</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Uncanny Dodge; Song of Marching; Lore Master; Song of the Fallen; Rage Powers; 6th-level Rage Power</p><p>Boasters use incredible tales and claims to challenge themselves and their allies to accomplish remarkable feats.</p></div>
<div className="archetype"><p><Link to="/arc-skald/bold_schemer">Bold Schemer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bardic Knowledge; Uncanny Dodge; Improved Uncanny Dodge; Damage Reduction; Dirge of Doom</p><p>The bold schemer combines wrath, wits, and daring to win battles and wars in unconventional ways, often through infiltration and deception.</p></div>
<div className="archetype"><p><Link to="/arc-skald/court_poet">Court Poet</Link></p><p><strong>Modifies or Replaces:</strong> Inspired Rage; Song of Strength; Well-Versed</p><p>Court poets elevate the skald's love of history and poetry to an aristocratic ideal, captivating courts with complicated poetic traditions and inspiring others with their craft.</p></div>
<div className="archetype"><p><Link to="/arc-skald/dragon_skald">Dragon Skald</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Bardic Knowledge; Well-Versed; Song of Marching</p><p>The Ulfen prize skalds on sea raids and linnorm hunts. Dragon skald performances involve song, whistling, or blowing mighty horns, and viking sailors often talk about having a skald along to whistle up a wind or sing away the mists on the morning of a momentous raid.</p></div>
<div className="archetype"><p><Link to="/arc-skald/elegist">Elegist</Link></p><p><strong>Modifies or Replaces:</strong> Raging Song; Rage Powers; Well-Versed; Damage Reduction</p><p>Some skalds internalize the saddest and must mournful of stories, so much that they are able to manifest the emotions caused by these tales in physical form.</p></div>
<div className="archetype"><p><Link to="/arc-skald/fated_champion">Fated Champion</Link></p><p><strong>Modifies or Replaces:</strong> Well-Versed; Spell Kenning; Dirge of Doom; Master Skald</p><p>Among cultures where skalds are the keepers of lore and wisdom, there are those who learn to read the winds of fate and take up the mantle of the fated champion, knowing and embracing their destined paths with strength borne of conviction.</p></div>
<div className="archetype"><p><Link to="/arc-skald/herald_of_the_horn">Herald of the Horn</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; 5th, 11th, and 17th-level Spell Kenning; Lore Master</p><p>Whether with the polished metal trumpet of a standing army or the crude curved animal horn of savage raiders, a herald of the horn sounds his raging song with thunderous blasts, which can bolster allies or shatter castle walls.</p></div>
<div className="archetype"><p><Link to="/arc-skald/hunt_caller">Hunt Caller</Link></p><p><strong>Modifies or Replaces:</strong> Well-Versed; Song of Strength; Song of the Fallen; 6th, 18th-level Rage Power; Spell Kenning</p><p>Hunt callers are skalds whose songs draw their allies into the animal world.</p></div>
<div className="archetype"><p><Link to="/arc-skald/instigator">Instigator</Link></p><p><strong>Modifies or Replaces:</strong> Spell Kenning; Dirge of Doom; Lore Master</p><p>The instigator influences the will of the people, turning them toward his own purposes.</p></div>
<div className="archetype"><p><Link to="/arc-skald/red_tongue">Red Tongue</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; 7th, 12th, 17th-level Versatile Performance</p><p>The tengu tendency toward dramatic flourishes and rhetoric creates an environment in which political clubs led by hot-blooded firebrands - referred to as red tongues in polite company - dominate the political scene by swaying emotions in the moment and wielding magic in the shadows.</p></div>
<div className="archetype"><p><Link to="/arc-skald/serpent_herald">Serpent Herald</Link></p><p><strong>Modifies or Replaces:</strong> 3rd-level Rage Power; Spell Kenning; must have Inspired Rage</p><p>Warrior bands devoted to Ragadahn are often led by a serpent herald, whose deep roars shake the earth itself.</p></div>
<div className="archetype"><p><Link to="/arc-skald/spell_warrior">Spell Warrior</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Inspired Rage; Spell Kenning; Dirge of Doom; Master Skald</p><p>The spell warrior uses his arcane knowledge rather than his rage to turn the tide of battle in favor of himself and his allies.</p></div>
<div className="archetype"><p><Link to="/arc-skald/sunsinger">Sunsinger</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Song of Marching; Spell Kenning</p><p>Qadiran sunsingers are particularly religious skalds of Sarenrae who call down their goddess's glory to fill soldiers with fire.</p></div>
<div className="archetype"><p><Link to="/arc-skald/totem_channeler">Totem Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Bardic Knowledge; Rage Powers; Spell Kenning; Damage Reduction</p><p>Some Shoanti skalds discover deeper truths in their tribes' totems. These skalds, known as totem channelers, learn how to share the totems' gifts with their allies in the heat of battle.</p></div>
<div className="archetype"><p><Link to="/arc-skald/totemic_skald">Totemic Skald</Link></p><p><strong>Modifies or Replaces:</strong> 3rd-level Rage Power; Uncanny Dodge; Improved Uncanny Dodge; Spell Kenning</p><p>The totemic skald forms a close connection to an animal totem. Through the power of this mystical ally, the skald can change shapes, assuming its form as his own.</p></div>
<div className="archetype"><p><Link to="/arc-skald/twilight_speaker">Twilight Speaker</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Deity; Bardic Knowledge; Inspired Rage; Song of Strength; Dirge of Doom; Versatile Performance; Well-Versed; Lore Master; Master Skald</p><p>(Elf Only) Twilight speakers are elven skalds of Findeladlara who consider it a sacred duty to seek out and befriend non-elven communities</p></div>
<div className="archetype"><p><Link to="/arc-skald/undying_word">Undying Word</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Lore Master; Inspired Rage; Song of Strength; Dirge of Doom; Spell Kenning</p><p>Some who have survived the Mana Wastes cannot accept defeat, and those who have learned to speak the undying word can lend others the strength to endure</p></div>
<div className="archetype"><p><Link to="/arc-skald/urban_skald">Urban Skald</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; Inspired Rage; Song of Marching; Damage Reduction; Dirge of Doom</p><p>The urban skald finds that challenging and mocking foes is sometimes more effective than inspiring uncontrolled rage in a city.</p></div>
<div className="archetype"><p><Link to="/arc-skald/war_painter">War Painter</Link></p><p><strong>Modifies or Replaces:</strong> Raging Song; Spell Kenning; Lore Master</p><p>The gripplis of the Valashmai Jungle exhibit savage strength for their size - attributed in part to the frightful magical pigments applied to their skin by the tribes' mystical lore keepers.</p></div>
<div className="archetype"><p><Link to="/arc-skald/warlord">Warlord</Link></p><p><strong>Modifies or Replaces:</strong> Scribe Scroll; Well-Versed; Spell Kenning; Lore Master; Improved Uncanny Dodge</p><p>The warlord wields his force of personality like a weapon, intimidating his allies and ensuring that his followers heed his commands.</p></div>
<div className="archetype"><p><Link to="/arc-skald/wyrm_singer">Wyrm Singer</Link></p><p><strong>Modifies or Replaces:</strong> Inspired Rage; Song of the Fallen; 12th-level rage power</p><p>Wyrm singers spin fragments of the story of the ongoing struggle between noble Apsu and wicked Dahak.</p></div>
<h3 id="class-skald-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"skald archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Bardic Knowledge"},{"header":"Class Skills"},{"header":"Damage Reduction"},{"header":"Deity"},{"header":"Dirge of Doom"},{"header":"Inspired Rage"},{"header":"Lore Master"},{"header":"Master Skald"},{"header":"Rage Powers"},{"header":"3rd-level Rage Power"},{"header":"6th-level Rage Power"},{"header":"9th-level Rage Power"},{"header":"12th-level Rage Power"},{"header":"18th-level Rage Power"},{"header":"Raging Song"},{"header":"Scribe Scroll"},{"header":"Song of Marching"},{"header":"Song of Strength"},{"header":"Song of the Fallen"},{"header":"Spell Kenning"},{"header":"Uncanny Dodge"},{"header":"Improved Uncanny Dodge"},{"header":"Versatile Performance"},{"header":"7th-level Versatile Performance"},{"header":"12th-level Versatile Performance"},{"header":"17th-level Versatile Performance"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"},{"header":"Well-Versed"}],"data":[["‹arc-skald/Augur›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X"],["‹arc-skald/Bacchanal›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-skald/Battle Scion›",null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-skald/Bekyar Demon Dancer›",null,null,"X",null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-skald/Belkzen War Drummer›",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,"X",null,null],["‹arc-skald/Boaster›",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,"X","X",null,"X",null,"X",null,null,null,null,null,null,null,null],["‹arc-skald/Bold Schemer›",null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null],["‹arc-skald/Court Poet›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-skald/Dragon Skald›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-skald/Elegist›",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-skald/Fated Champion›",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-skald/Herald of the Horn›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Hunt Caller›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-skald/Instigator›",null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Red Tongue›",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null],["‹arc-skald/Serpent Herald›",null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Spell Warrior›",null,null,null,null,null,"X","X",null,"X",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Sunsinger›","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Totem Channeler›",null,"X",null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Totemic Skald›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null],["‹arc-skald/Twilight Speaker›","X","X",null,null,"X","X","X","X","X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,"X"],["‹arc-skald/Undying Word›",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Urban Skald›",null,null,null,"X",null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-skald/War Painter›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-skald/Warlord›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null,null,null,"X"],["‹arc-skald/Wyrm Singer›",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-skald-label">Footnotes</h3>
<ol>
<li id="class-skald-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-skald-ref-A-1" data-hash-target to="class-skald-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-skald-B">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-skald-ref-B-1" data-hash-target to="class-skald-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-skald-C">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-skald-ref-C-1" data-hash-target to="class-skald-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-skald-ref-C-2" data-hash-target to="class-skald-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-skald-ref-C-3" data-hash-target to="class-skald-ref-C-3" aria-label="Back to reference C-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-skald-ref-C-4" data-hash-target to="class-skald-ref-C-4" aria-label="Back to reference C-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="class-skald-D">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 10</Link> <InnerLink id="backlink-class-skald-ref-D-1" data-hash-target to="class-skald-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-skald-E">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link> <InnerLink id="backlink-class-skald-ref-E-1" data-hash-target to="class-skald-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-skald-F">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-skald-ref-F-1" data-hash-target to="class-skald-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-class-skald-ref-F-2" data-hash-target to="class-skald-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-skald-G">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-skald-ref-G-1" data-hash-target to="class-skald-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-skald-H">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 13</Link> <InnerLink id="backlink-class-skald-ref-H-1" data-hash-target to="class-skald-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-skald-I">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-skald-ref-I-1" data-hash-target to="class-skald-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _slayer = {hasJL:true,title: "Slayer", jsx: <><div className="jumpList" id="class-slayer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-slayer-studied-target-ex">Studied Target</InnerLink></li><li><InnerLink toTop to="class-slayer-track-ex">Track</InnerLink></li><li><InnerLink toTop to="class-slayer-slayer-talents">Slayer Talents</InnerLink></li><li><InnerLink toTop to="class-slayer-sneak-attack">Sneak Attack</InnerLink></li><li><InnerLink toTop to="class-slayer-stalker-ex">Stalker</InnerLink></li><li><InnerLink toTop to="class-slayer-advanced-talents">Advanced Talents</InnerLink></li><li><InnerLink toTop to="class-slayer-swift-tracker-ex">Swift Tracker</InnerLink></li><li><InnerLink toTop to="class-slayer-slayers-advance-ex">Slayer's Advance</InnerLink></li><li><InnerLink toTop to="class-slayer-quarry-ex">Quarry</InnerLink></li><li><InnerLink toTop to="class-slayer-master-slayer-ex">Master Slayer</InnerLink></li><li><InnerLink toTop to="class-slayer-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-slayer-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-slayer-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-slayer-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-slayer-slayer">Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 53</Link></p>
<p>Skilled at tracking down targets, slayers are consummate hunters, living for the chase and the deadly stroke that brings it to a close. Slayers spend most of their time honing their weapon skills, studying the habits and anatomy of foes, and practicing combat maneuvers.</p>
<p><strong>Role:</strong> The slayer is elusive, and good at finding the opportune time and location to strike. Combining the deadliest talents of rangers and rogues, a slayer's abilities are all about getting into combat, dealing with a target, and then getting back out again.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/ranger">Ranger</Link> and <Link to="/class/rogue">rogue</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-slayer-class-features">Class Features</h3>
<ScrollContainer id="class-slayer--table-0"><table>
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
<td>1st studied target, track</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+3</td>
<td>+3</td>
<td>+0</td>
<td>Slayer talent</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+3</td>
<td>+3</td>
<td>+1</td>
<td>Sneak attack +1d6</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>Slayer talent</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+4</td>
<td>+4</td>
<td>+1</td>
<td>2nd studied target</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Slayer talent, sneak attack +2d6</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+2</td>
<td>Stalker</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+6</td>
<td>+6</td>
<td>+2</td>
<td>Slayer talent</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+3</td>
<td>Sneak attack +3d6</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>3rd studied target, advanced talents, slayer talent</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+7</td>
<td>+7</td>
<td>+3</td>
<td>Swift tracker</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Slayer talent, sneak attack +4d6</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+8</td>
<td>+8</td>
<td>+4</td>
<td>Slayer's advance 1/day</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+9</td>
<td>+9</td>
<td>+4</td>
<td>Quarry, slayer talent</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+9</td>
<td>+9</td>
<td>+5</td>
<td>4th studied target, sneak attack +5d6</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Slayer talent</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+10</td>
<td>+10</td>
<td>+5</td>
<td>Slayer's advance 2/day</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Slayer talent, sneak attack +6d6</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+11</td>
<td>+11</td>
<td>+6</td>
<td>Improved quarry</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+12</td>
<td>+12</td>
<td>+6</td>
<td>5th studied target, master slayer, slayer talent</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-slayer-studied-target-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-studied-target-ex">Studied Target (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Move-Equivalent Action">You can study an opponent you can see. You then gain a bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks attempted against that opponent, and a bonus on weapon attack and damage rolls against it; these bonuses are equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of your slayer level. The DCs of slayer class abilities against that opponent increase by 1 + one-fifth of your slayer level. You can only maintain these bonuses against a certain number of opponents at a time (equal to 1 + one-fifth of your slayer level); these bonuses remain in effect until either the opponent is dead or you study a new target.</Pair>
<Pair title="Immediate Action">If you deal sneak attack damage to a target, you can study that target immediately, allowing you to apply your studied target bonuses against that target (including to the normal weapon damage roll).</Pair>
<Pair title="Free Action">You can discard this connection to a studied target, allowing you to study another target in its place.</Pair>
<Pair title="At 7th Level">You can now choose to study a target as a <strong className="hl">swift action</strong>.</Pair>
</Ability>
<Ability id="class-slayer-track-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-track-ex">Track (Ex)</Pair>
<Pair title="Passive Ability">You add 1/2 your level (minimum 1) to Survival skill checks made to follow tracks</Pair>
</Ability>
<Ability id="class-slayer-slayer-talents" icon={["stairs-goal"]}>
<Pair single id="class-slayer-slayer-talents" flavor="As a slayer gains experience, he learns a number of talents that aid him and confound his foes.">Slayer Talents</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain one <Link to="/ability/slayer_talents">slayer talent</Link> at <strong>every even-numbered level</strong> (2nd, 4th, 6th, and so on). Unless otherwise noted, you cannot select an individual talent more than once.</Pair>
<Pair title="Special">Talents labeled as Primary Sneak Attack Talents add effects to your sneak attack. Only one of these talents can be applied to an individual attack, and the decision of which to use must be made before the attack roll is made.</Pair>
</Ability>
<Ability id="class-slayer-sneak-attack" icon={["upgrade","mailed-fist","bowman"]}>
<Pair single id="class-slayer-sneak-attack">Sneak Attack</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">You gain the ability to make a <Link to="/ability/sneak_attack">sneak attack</Link>, as a rogue can. Your attack deals +1d6 extra damage anytime your target would be denied a Dexterity bonus to AC (whether the target actually has a Dex bonus or not), or when you <Link to="/rule/flank">flank</Link> your target. This additional damage is not multiplied on a critical hit. Ranged attacks can count as sneak attacks only if the target is within 30 feet. You cannot use sneak attack while striking a creature with <Link to="/rule/concealment">concealment</Link>.</Pair>
<Pair title="At 6th Level">Your extra damage becomes +2d6 damage.</Pair>
<Pair title="At 9th Level">Your extra damage increases to +3d6 damage.</Pair>
<Pair title="At 12th Level">Your extra damage becomes +4d6 damage.</Pair>
<Pair title="At 15th Level">Your extra damage increases to +5d6 damage.</Pair>
<Pair title="At 18th Level">Your extra damage becomes +6d6 damage.</Pair>
<Pair title="Special">With a weapon that deals nonlethal damage (like a <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/whip">whip</Link>, or unarmed strike), you can make a sneak attack that deals nonlethal damage instead of lethal damage. You can't use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.</Pair>
</Ability>
<Ability id="class-slayer-stalker-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-stalker-ex">Stalker (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">You gain your <em>studied target</em> bonus on Disguise, Intimidate, and Stealth checks against your studied opponent.</Pair>
</Ability>
<Ability id="class-slayer-advanced-talents" icon={["stairs-goal"]}>
<Pair single id="class-slayer-advanced-talents">Advanced Talents</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">When you would select a <em>slayer talent</em> from gaining a level, you can now select an <Link to="/ability/advanced_slayer_talents">advanced_slayer_talent</Link> instead.</Pair>
</Ability>
<Ability id="class-slayer-swift-tracker-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-swift-tracker-ex">Swift Tracker (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">You can move at your normal speed while using Survival to follow tracks without taking the normal -5 penalty. When moving at up to twice your normal speed while tracking, you take only a -10 penalty instead of the normal -20.</Pair>
</Ability>
<Ability id="class-slayer-slayers-advance-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-slayers-advance-ex">Slayer's Advance (Ex)</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Move-Equivalent Action">You can move up to twice your base speed. You may use Stealth as part of this movement, but take a -10 penalty to your check for doing so.</Pair>
<Pair title="At 17th Level">You can do this twice a day.</Pair>
</Ability>
<Ability id="class-slayer-quarry-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-quarry-ex">Quarry (Ex)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Standard Action">You can denote one target within your line of sight as your <em>quarry.</em> Whenever you are following the tracks of your <em>quarry,</em> you can take 10 on your Survival skill checks while moving at normal speed, without penalty. In addition, you gain a +2 insight bonus on attack rolls made against your <em>quarry,</em> and all critical threats against your <em>quarry</em> are automatically confirmed.</Pair>
<Pair title="Special">You can have no more than one <em>quarry</em> at a time, and the target must be selected as a <em>studied target.</em> You can dismiss this effect at any time as a <strong className="hl">free action</strong>, but you cannot select a new <em>quarry</em> target for 24 hours. If you see proof that your <em>quarry</em> is dead, you can select a new <em>quarry</em> target after 1 hour.</Pair>
</Ability>
<Ability id="class-slayer-improved-quarry-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-improved-quarry-ex">Improved Quarry (Ex)</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Free Action">You can now select a <em>quarry</em> as a <strong className="hl">free action</strong>.</Pair>
<Pair title="Ability">You can now take 20 while using Survival to track your <em>quarry</em> while moving at normal speed without penalty. Your insight bonus to attack your <em>quarry</em> increases to +4.</Pair>
<Pair title="Special">If your <em>quarry</em> is killed or dismissed, you can select a new one after 10 minutes have passed.</Pair>
</Ability>
<Ability id="class-slayer-master-slayer-ex" icon={["upgrade"]}>
<Pair single id="class-slayer-master-slayer-ex">Master Slayer (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">You can make a single attack against a studied target at your full attack bonus, choosing one of the following effects: kill, knock <Link to="/misc/unconscious">unconscious</Link> for 1d4 hours, or <Link to="/rule/paralyze">paralyze</Link> for 2d6 rounds. If the attack succeeds, the target takes damage normally and must succeed at a Fortitude saving throw or suffer the additional effect. The DC for this save is 10 + 1/2 your level + your Intelligence modifier. Whether or not the target succeeds, it cannot be targeted by this ability again (by any slayer) for 24 hours.</Pair>
</Ability>
<h3 id="class-slayer-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-slayer--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Against the Odds (Ex)</td><td>At 20th level, the slayer is used to fighting when the numbers are not in his favor. When the slayer uses studied target, he can study up to two additional foes with the same action.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>The Right Spot (Ex)</td><td>At 20th level, the character can hit an opponent's weak spot effortlessly. Once per round, the character can apply her sneak attack damage to an attack, even if the target is not flanked or denied its Dexterity bonus to AC. This does not allow the character to sneak attack targets that are immune to sneak attacks (such as oozes). This capstone is available for any class with the sneak attack class feature.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-slayer-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Catfolk:</strong> Add 1/3 to the result of any sneak attack damage that the slayer deals after all sneak attack damage dice have been totaled.<sup><InnerLink showBacklink="backlink-class-slayer-ref-A-1" id="class-slayer-ref-A-1" data-hash-target to="class-slayer-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Gain a +1/3 bonus on Knowledge (dungeoneering) checks and on Survival checks when underground. If the slayer has a +1 bonus on Knowledge (dungeoneering) checks from this ability, he is also considered trained in that skill.<sup><InnerLink showBacklink="backlink-class-slayer-ref-B-1" id="class-slayer-ref-B-1" data-hash-target to="class-slayer-B">2</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the studied target bonus on Perception and Survival checks by 1/4. When the slayer gains the stalker class feature, he also gains this increase to the studied target bonus on Stealth checks.<sup><InnerLink showBacklink="backlink-class-slayer-ref-C-1" id="class-slayer-ref-C-1" data-hash-target to="class-slayer-C">3</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add a +1/4 dodge bonus to Armor Class against the slayer's studied target.<sup><InnerLink showBacklink="backlink-class-slayer-ref-D-1" id="class-slayer-ref-D-1" data-hash-target to="class-slayer-D">4</InnerLink></sup></p>
<p><strong>Gnome:</strong> The slayer gains 1/6 of a new slayer talent.<sup><InnerLink showBacklink="backlink-class-slayer-ref-C-2" id="class-slayer-ref-C-2" data-hash-target to="class-slayer-C">3</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add 1/3 to the damage the slayer deals with bone weapons (maximum +4).<sup><InnerLink showBacklink="backlink-class-slayer-ref-E-1" id="class-slayer-ref-E-1" data-hash-target to="class-slayer-E">5</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain a +1/2 bonus on Bluff checks to feint and Diplomacy checks to gain information.<sup><InnerLink showBacklink="backlink-class-slayer-ref-C-3" id="class-slayer-ref-C-3" data-hash-target to="class-slayer-C">3</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add a +1/4 dodge bonus to Armor Class against the slayer's studied target.<sup><InnerLink showBacklink="backlink-class-slayer-ref-C-4" id="class-slayer-ref-C-4" data-hash-target to="class-slayer-C">3</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1/3 bonus on critical hit confirmation rolls made while using sneak attack (maximum bonus of +5). This bonus doesn't stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-slayer-ref-F-1" id="class-slayer-ref-F-1" data-hash-target to="class-slayer-F">6</InnerLink></sup></p>
<p><strong>Human:</strong> Gain 1/6 of a new slayer talent.<sup><InnerLink showBacklink="backlink-class-slayer-ref-F-2" id="class-slayer-ref-F-2" data-hash-target to="class-slayer-F">6</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-slayer-ref-G-1" id="class-slayer-ref-G-1" data-hash-target to="class-slayer-G">7</InnerLink></sup></p>
<p><strong>Locathah:</strong> Gain 1/6 of a new slayer talent.<sup><InnerLink showBacklink="backlink-class-slayer-ref-H-1" id="class-slayer-ref-H-1" data-hash-target to="class-slayer-H">8</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Gain 1/6 of a new slayer talent.<sup><InnerLink showBacklink="backlink-class-slayer-ref-I-1" id="class-slayer-ref-I-1" data-hash-target to="class-slayer-I">9</InnerLink></sup></p>
<p><strong>Strix:</strong> Increase the studied target bonus on Perception and Survival checks by 1/4. When the slayer gains the stalker class feature, the slayer also gains this increase to the studied target bonus on Stealth checks.<sup><InnerLink showBacklink="backlink-class-slayer-ref-J-1" id="class-slayer-ref-J-1" data-hash-target to="class-slayer-J">10</InnerLink></sup></p>
<p><strong>Tengu:</strong> Gain a +1/4 bonus on Disguise, Knowledge (local), and Perception checks.<sup><InnerLink showBacklink="backlink-class-slayer-ref-K-1" id="class-slayer-ref-K-1" data-hash-target to="class-slayer-K">11</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add 1/4 to the studied target bonus on Bluff and Perception checks. When the slayer gains the stalker class feature, he also adds this amount to the studied target bonus on Stealth checks.<sup><InnerLink showBacklink="backlink-class-slayer-ref-L-1" id="class-slayer-ref-L-1" data-hash-target to="class-slayer-L">12</InnerLink></sup></p>
<p><strong>Wyrwood:</strong> The slayer gains 1/6 of a slayer talent.<sup><InnerLink showBacklink="backlink-class-slayer-ref-M-1" id="class-slayer-ref-M-1" data-hash-target to="class-slayer-M">13</InnerLink></sup></p>
</div>
<h3 id="class-slayer-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-slayer/ankous_shadow">Ankou's Shadow</Link></p><p><strong>Modifies or Replaces:</strong> Studied Target; Stalker; Quarry; Improved Quarry</p><p>Ankou's shadow practice the deadliest skills of the First World's most feared enforcers: terrifying, winged fey assassins dispatched by the greatest lords of the First World to eliminate their rivals</p></div>
<div className="archetype"><p><Link to="/arc-slayer/avalancher">Avalancher</Link></p><p><strong>Modifies or Replaces:</strong> Studied Target; Track; Swift Tracker; Stalker; Quarry; Improved Quarry; Master Slayer</p><p>Avalanchers attack from overhead cliffs and mesas like a landslide of arrows and blades.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/bloody_jake">Bloody Jake</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Weapon and Armor Proficiency; Studied Target; 4th, 6th, 8th, 12th, 16th-level Slayer Talents; Swift Tracker; Slayer's Advance</p><p>Bloody jakes are cruel backwoods folk who prey upon their country cousins while terrorizing civilized people who venture into their rural range.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/bounty_hunter">Bounty Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; 2nd, 6th, and 10th-level Slayer Talents</p><p>Whether tasked with bringing in wanted criminals or paid to drag debtors back to their loan sharks, bounty hunters are valued for their ability to capture targets alive.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/butterfly_blade">Butterfly Blade</Link></p><p><strong>Modifies or Replaces:</strong> Studied Target; Track; Sneak Attack; Stalker; Swift Tracker; Quarry; Improved Quarry</p><p>Butterfly blades work in the shadows, eliminating threats with their namesake weapons and intimidating troublesome nobles.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/cleaner">Cleaner</Link></p><p><strong>Modifies or Replaces:</strong> Track; 4th-level Slayer Talent; Stalker</p><p>A cleaner is responsible for destroying or removing incriminating evidence from a crime scene, disposing of corpses and eliminating witnesses to make a crime look like an accident or a mere disappearance.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/covenbane">Covenbane</Link></p><p><strong>Modifies or Replaces:</strong> Track; 2nd-level Slayer Talent; Stalker; Swift Tracker</p><p>Covenbane slayers are scarred by arcane magic at a young age, and that resonance gives them supernatural insight into the psychic bonds between others.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/cutthroat">Cutthroat</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Track; 2nd and 6th-level Slayer Talents</p><p>Street-smart and extremely resourceful, cutthroats stalk city streets and alleyways, preying on those unfortunate enough to catch their eye.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/deliverer">Deliverer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon/Armor Proficiencies; 2nd, 6th, and 10th-level Slayer Talents</p><p>Also known as a divine assassin, god's blade, or wrath-bringer, a deliverer is a weapon chosen by a god to punish those who have committed an affront to that deity.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/dune_rider">Dune Rider</Link></p><p><strong>Modifies or Replaces:</strong> Track; Swift Tracker; Studied Target; Stalker; 4th, 8th-level Slayer Talent; Master Slayer</p><p>Mounted harriers, saboteurs, and skirmishers, dune riders can disrupt even the most organized opposition.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/family_hunter">Family Hunter</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th-level Slayer Talent; Sneak Attack; Studied Target</p><p>Most slayers focus their efforts on single targets, but family hunters try to root out every branch of a tainted tree of life.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/grave_warden">Grave Warden</Link></p><p><strong>Modifies or Replaces:</strong> 2nd and 10th-level Slayer Talents; Stalker</p><p>While paladins and inquisitors use their connection with the divine to fight undead hordes and other horrors of the night, a grave warden relies on knowledge, skill with weapons, and tenacity to put an end to these night-born terrors.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/guerrilla">Guerrilla</Link></p><p><strong>Modifies or Replaces:</strong> Track; Swift Tracker; 6th-level Slayer Talent; Quarry; Improved Quarry</p><p>Slayers characterized by cunning and patience, guerrillas specialize in ambush and harassment of enemies.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/pureblade">Pureblade</Link></p><p><strong>Modifies or Replaces:</strong> Track; 2nd and 8th-level Slayer Talents; Stalker; Master Slayer</p><p>In Numeria, Pureblades are skilled at slaying naturally arising aberrations and any creatures that have been mutated by exposure to the bizarre alien technology that pervades the land. Pureblades from Alkenstar and Nex lead forays into the magic-starved Mana Wastes to eliminate aberrations before the creatures can threaten their lands.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/sczarni_executioner">Sczarni Executioner</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Studied Target; 4th-level Slayer Talent; Swift Tracker; Quarry; Improved Quarry</p><p>These professional killers are trained and used almost exclusively by the various Sczarni crime families.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/sniper">Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Track</p><p>Whether it's with a bullet from a sling, a quarrel from a crossbow, or even an expertly thrown dagger, the sniper ensures that a single shot disables his targets.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/spawn_slayer">Spawn Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Studied Target; Stalker; Master Slayer</p><p>Generations of Ninshaburian warriors fought the Spawn of Rovagug, holding the line against impossible odds. Some of their ancient techniques persist to this day.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/spire_diver">Spire Diver</Link></p><p><strong>Modifies or Replaces:</strong> Studied Target; Stalker; Track; Swift Tracker; Slayer's Advance; Quarry; Improved Quarry</p><p>Peerless divers, assassins, and scouts, spire divers operate in and out of water using the same weapons and equipment.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/spiritslayer">Spiritslayer</Link></p><p><strong>Modifies or Replaces:</strong> 2nd level Slayer Talent; Stalker</p><p>Slayers that focus in culling ghosts, shadow demons, and other incorporeal creatures.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/stygian_slayer">Stygian Slayer</Link></p><p><strong>Modifies or Replaces:</strong> Armor Proficiencies; 4th and 10th-level Slayer Talents; Stalker</p><p>A stygian slayer crawls out of the darkest shadows to strike fear into the hearts of civilized folk.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/toxic_sniper">Toxic Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Track; Studied Target; Slayer Talents</p><p>Followers of the daemonic harbinger Cixyron hide throughout the Mana Wastes, scavenging for guns. With significant firepower in hand, the Furious Thunder's snipers bring poisonous death to the wastes.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/turncoat">Turncoat</Link></p><p><strong>Modifies or Replaces:</strong> Track; Stalker; Quarry; Improved Quarry</p><p>The turncoat's natural talents for deception and treachery are fitting when negotiating with the untrustworthy individuals and his ability to adapt allows him to preempt opponents' schemes.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/vanguard">Vanguard</Link></p><p><strong>Modifies or Replaces:</strong> Track; 2nd and 4th-level Slayer Talents; Stalker</p><p>Vanguards are battlefield commanders who focus on the brutality of combat and lead their allies to bloody victory.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/velvet_blade">Velvet Blade</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiency; Studied Target; Track; Swift Tracker</p><p>Velvet blades specialize in infiltrating the upper echelons of society, mingling with nobles and courtiers, and killing them.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/witch_killer">Witch Killer</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Studied Target; 4th, 10th-level Slayer Talent</p><p>Born into cultures where magic users are hated and feared, witch killers devote their lives to purge the arcane taint from the world.</p></div>
<div className="archetype"><p><Link to="/arc-slayer/woodland_sniper">Woodland Sniper</Link></p><p><strong>Modifies or Replaces:</strong> Track; Sneak Attack; Stalker; Swift Tracker; Slayer's Advance</p><p>Woodland snipers are guardians of forest and grove, keeping vigil on their borders and hunting bounties and trespassers from the shelter of sturdy branches.</p></div>
<h3 id="class-slayer-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"slayer archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Class Skills"},{"header":"Master Slayer"},{"header":"Quarry"},{"header":"Improved Quarry"},{"header":"Slayer Talents"},{"header":"2nd-level Slayer Talent"},{"header":"4th-level Slayer Talent"},{"header":"6th-level Slayer Talent"},{"header":"8th-level Slayer Talent"},{"header":"10th-level Slayer Talent"},{"header":"12th-level Slayer Talent"},{"header":"16th-level Slayer Talent"},{"header":"Slayer's Advance"},{"header":"Sneak Attack"},{"header":"Stalker"},{"header":"Studied Target"},{"header":"Swift Tracker"},{"header":"Track"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-slayer/Ankou's Shadow›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-slayer/Avalancher›",null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null],["‹arc-slayer/Bloody Jake›","X",null,null,null,null,null,null,null,"X","X","X",null,"X","X","X",null,null,"X","X",null,"X"],["‹arc-slayer/Bounty Hunter›",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-slayer/Butterfly Blade›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,"X","X","X","X","X",null],["‹arc-slayer/Cleaner›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,"X",null],["‹arc-slayer/Covenbane›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X","X",null],["‹arc-slayer/Cutthroat›",null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X",null],["‹arc-slayer/Deliverer›",null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,"X"],["‹arc-slayer/Dune Rider›",null,null,null,"X",null,null,null,null,"X",null,"X",null,null,null,null,null,"X","X","X","X",null],["‹arc-slayer/Family Hunter›",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X",null,"X",null,null,null],["‹arc-slayer/Grave Warden›",null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-slayer/Guerrilla›",null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X",null],["‹arc-slayer/Pureblade›",null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,"X",null],["‹arc-slayer/Sczarni Executioner›",null,null,"X",null,"X","X",null,null,"X",null,null,null,null,null,null,null,null,"X","X",null,null],["‹arc-slayer/Sniper›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null],["‹arc-slayer/Spawn Slayer›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-slayer/Spire Diver›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,"X","X","X","X",null],["‹arc-slayer/Spiritslayer›",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-slayer/Stygian Slayer›",null,"X",null,null,null,null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-slayer/Toxic Sniper›",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X","X"],["‹arc-slayer/Turncoat›",null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null],["‹arc-slayer/Vanguard›",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,"X",null,null,"X",null],["‹arc-slayer/Velvet Blade›",null,"X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null],["‹arc-slayer/Witch Killer›",null,null,"X",null,null,null,null,null,"X",null,null,"X",null,null,null,null,null,"X",null,null,null],["‹arc-slayer/Woodland Sniper›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X","X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-slayer-label">Footnotes</h3>
<ol>
<li id="class-slayer-A">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 4</Link> <InnerLink id="backlink-class-slayer-ref-A-1" data-hash-target to="class-slayer-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-slayer-B">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-slayer-ref-B-1" data-hash-target to="class-slayer-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-slayer-C">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-slayer-ref-C-1" data-hash-target to="class-slayer-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-slayer-ref-C-2" data-hash-target to="class-slayer-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-slayer-ref-C-3" data-hash-target to="class-slayer-ref-C-3" aria-label="Back to reference C-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-slayer-ref-C-4" data-hash-target to="class-slayer-ref-C-4" aria-label="Back to reference C-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="class-slayer-D">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 7</Link> <InnerLink id="backlink-class-slayer-ref-D-1" data-hash-target to="class-slayer-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-slayer-E">
<p>Blood of the Beast pg. 8 <InnerLink id="backlink-class-slayer-ref-E-1" data-hash-target to="class-slayer-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-slayer-F">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-slayer-ref-F-1" data-hash-target to="class-slayer-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink> <InnerLink id="backlink-class-slayer-ref-F-2" data-hash-target to="class-slayer-ref-F-2" aria-label="Back to reference F-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-slayer-G">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-slayer-ref-G-1" data-hash-target to="class-slayer-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-slayer-H">
<p><Link to="/source/blood_of_the_sea">Blood of the Sea pg. 11</Link> <InnerLink id="backlink-class-slayer-ref-H-1" data-hash-target to="class-slayer-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-slayer-I">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-slayer-ref-I-1" data-hash-target to="class-slayer-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-slayer-J">
<p><Link to="/source/pathfinder_101_the_kintargo_contract">Pathfinder #101: The Kintargo Contract pg. 73</Link> <InnerLink id="backlink-class-slayer-ref-J-1" data-hash-target to="class-slayer-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-slayer-K">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-slayer-ref-K-1" data-hash-target to="class-slayer-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-slayer-L">
<p>Blood of Shadows pg. 11 <InnerLink id="backlink-class-slayer-ref-L-1" data-hash-target to="class-slayer-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-slayer-M">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 6</Link> <InnerLink id="backlink-class-slayer-ref-M-1" data-hash-target to="class-slayer-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _sorcerer = {hasJL:true,title: "Sorcerer", jsx: <><div className="jumpList" id="class-sorcerer-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-sorcerer-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-sorcerer-bloodline">Bloodline</InnerLink></li><li><InnerLink toTop to="class-sorcerer-eschew-materials">Eschew Materials</InnerLink></li><li><InnerLink toTop to="class-sorcerer-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-sorcerer-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-sorcerer-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-sorcerer-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-sorcerer-sorcerer">Sorcerer</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 70</Link></p>
<p>Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.</p>
<p><strong>Role:</strong> Sorcerers excel at casting a selection of favored spells frequently, making them powerful battle mages. As they become familiar with a specific and ever-widening set of spells, sorcerers often discover new and versatile ways of making use of magics other spellcasters might overlook. Their bloodlines also grant them additional abilities, assuring that no two sorcerers are ever quite alike.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d6</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>2 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/profession_any">Profession (any)</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c">(CHA)</td></tr><tr><td colSpan={2} className="se">You also receive an additional class skill from your <em>bloodline,</em> described below.</td></tr></tbody></table>
<h3 id="class-sorcerer-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-sorcerer--table-0"><table>
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
<td>Bloodline power, cantrips, eschew materials</td>
<td>3</td>
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
<td>Bloodline power, bloodline spell</td>
<td>5</td>
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
<td>4th</td>
<td>+2</td>
<td>+1</td>
<td>+1</td>
<td>+4</td>
<td>-</td>
<td>6</td>
<td>3</td>
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
<td>Bloodline spell</td>
<td>6</td>
<td>4</td>
<td>-</td>
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
<td>6</td>
<td>5</td>
<td>3</td>
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
<td>Bloodline feat, bloodline spell</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
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
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
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
<td>Bloodline power, bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
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
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
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
<td>Bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
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
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
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
<td>Bloodline feat, bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
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
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>+7/+2</td>
<td>+5</td>
<td>+5</td>
<td>+9</td>
<td>Bloodline power, bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>+8/+3</td>
<td>+5</td>
<td>+5</td>
<td>+10</td>
<td>Bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>-</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>3</td>
</tr>
<tr>
<td>19th</td>
<td>+9/+4</td>
<td>+6</td>
<td>+6</td>
<td>+11</td>
<td>Bloodline feat, bloodline spell</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>+10/+5</td>
<td>+6</td>
<td>+6</td>
<td>+12</td>
<td>Bloodline power</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-sorcerer-spells-known">Spells Known</h3>
<ScrollContainer id="class-sorcerer--table-1"><table>
<thead>
<tr>
<th>Level</th>
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
<td>2nd</td>
<td>5</td>
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
<td>5</td>
<td>3</td>
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
<td>4th</td>
<td>6</td>
<td>3</td>
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
<td>5th</td>
<td>6</td>
<td>4</td>
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
<td>6th</td>
<td>7</td>
<td>4</td>
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
<td>7th</td>
<td>7</td>
<td>5</td>
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
<td>8th</td>
<td>8</td>
<td>5</td>
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
<td>9th</td>
<td>8</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>9</td>
<td>5</td>
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
<td>11th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>2</td>
<td>1</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>19th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>20th</td>
<td>9</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={1}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>No</td></tr><tr><th>Shields?</th><td colSpan={2}>No</td></tr><tr><td colSpan={3} className="sw se">Armor interferes with a sorcerer's gestures, which can cause her spells with somatic components to fail.</td></tr></tbody></table>
<Ability id="class-sorcerer-spells" icon={["magic-swirl"]}><Pair single id="class-sorcerer-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To learn or cast a spell, you must have a Charisma score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Charisma score.</Pair>
<Pair title="Ability">You gain the ability to cast arcane spells which are drawn from the <Link to="/main/spells_sorcerer">sorcerer spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Charisma modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A sorcerer's selection of spells is extremely limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new sorcerer level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Charisma score.</p>
<p>At 4th level, and every two levels thereafter (6th, 8th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><Ability id="class-sorcerer-cantrips" icon={["magic-swirl"]}>
<Pair single id="class-sorcerer-cantrips">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of cantrips, or 0-level arcane spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Cantrips cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-sorcerer-bloodline" icon={["stairs-goal","magic-swirl","skills"]}>
<Pair single id="class-sorcerer-bloodline" flavor="Each sorcerer has a source of magic somewhere in her heritage that grants her special abilities. This source can represent a blood relation or an extreme event involving a creature somewhere in the family's past. For example, a sorcerer might have a dragon as a distant relative or her grandfather might have signed a terrible contract with a devil. Regardless of the source, this influence manifests in a number of ways as the sorcerer gains levels.">Bloodline</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must pick one <Link to="/ability/sorcerer_bloodlines">bloodline</Link> upon taking your first level of sorcerer. Once made, this choice cannot be changed. This bloodline grants you a bonus class skill, as well as additional abilities as you gain levels.</Pair>
<Pair title="At 3rd Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 5th Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 7th Level">You learn a new spell from your bloodline, and you receive one bonus feat, chosen from a list specific to your bloodline. You must meet the prerequisites for the feat.</Pair>
<Pair title="At 9th Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 11th Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 13th Level">You learn a new spell from your bloodline, and you receive one bonus feat, chosen from a list specific to your bloodline. You must meet the prerequisites for the feat.</Pair>
<Pair title="At 15th Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 17th Level">You learn a new spell from your bloodline.</Pair>
<Pair title="At 19th Level">You learn a new spell from your bloodline, and you receive one bonus feat, chosen from a list specific to your bloodline. You must meet the prerequisites for the feat.</Pair>
<Pair title="Special">Spells gained from your bloodline are in addition to the number of spells you gain every level. They cannot be exchanged for different spells at higher levels.</Pair>
</Ability>
<aside><p>Optionally, when a sorcerer gains a new bloodline power or bonus feat, she can swap it for a specific <Link to="/ability/bloodline_mutations">bloodline mutation</Link> whose prerequisites she meets.</p>
</aside><Ability id="class-sorcerer-eschew-materials" icon={["stairs-goal"]}>
<Pair single id="class-sorcerer-eschew-materials">Eschew Materials</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain <Link to="/feat/eschew_materials">Eschew Materials</Link> as a bonus feat at 1st level.</Pair>
</Ability>
<h3 id="class-sorcerer-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-sorcerer--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>Unique Bloodline (Su)</td><td>At 20th level, the sorcerer's blood grows wild and strange, become less about her ancestors and more about her specifically. The sorcerer selects a second bloodline and gains the bloodline arcana and the 1st-, 3rd-, and 9th-level bloodline powers. Her level for these powers is the same as for her primary bloodline.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-sorcerer-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Aasimar:</strong> Add +1/4 to the sorcerer's caster level when casting spells with the good descriptor.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-A-1" id="class-sorcerer-ref-A-1" data-hash-target to="class-sorcerer-A">1</InnerLink></sup></p>
<p><strong>Catfolk:</strong> Select one bloodline power at 1st level that is normally usable a number of times equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds + 1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-B-1" id="class-sorcerer-ref-B-1" data-hash-target to="class-sorcerer-B">2</InnerLink></sup></p>
<p><strong>Drow:</strong> Add one spell known from the sorcerer spell list. This spell must have the curse, evil, or pain descriptor, and be at least one level below the highest spell level the sorcerer can cast.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-C-1" id="class-sorcerer-ref-C-1" data-hash-target to="class-sorcerer-C">3</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add +1/2 to acid and earth spell or spell-like ability damage.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-D-1" id="class-sorcerer-ref-D-1" data-hash-target to="class-sorcerer-D">4</InnerLink></sup></p>
<p><strong>Elf:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-E-1" id="class-sorcerer-ref-E-1" data-hash-target to="class-sorcerer-E">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-sorcerer-ref-F-1" id="class-sorcerer-ref-F-1" data-hash-target to="class-sorcerer-F">6</InnerLink></sup></p>
<p><strong>Elf:</strong> Choose a terrain type from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. When casting sorcerer spells in the chosen terrain, add 1/3 to the effective caster level of the spell, for the purpose of determining the spells' duration.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-G-1" id="class-sorcerer-ref-G-1" data-hash-target to="class-sorcerer-G">7</InnerLink></sup></p>
<p><strong>Fetchling:</strong> Add +1/2 to either cold or electricity resistance (maximum resistance 10 for either type).<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-H-1" id="class-sorcerer-ref-H-1" data-hash-target to="class-sorcerer-H">8</InnerLink></sup></p>
<p><strong>Ganzi:</strong> Choose a bloodline power from the abyssal or protean bloodlines that the sorcerer can use. The sorcerer treats her class level as though it were 1/2 higher (to a maximum of +4) when determining the effects of that power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-I-1" id="class-sorcerer-ref-I-1" data-hash-target to="class-sorcerer-I">9</InnerLink></sup></p>
<p><strong>Gathlain:</strong> Choose a bloodline power from the fey or verdant bloodlines that the sorcerer can use. The sorcerer treats her class level as though it were 1/2 higher (to a maximum of +4) when determining the effects of that power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-J-1" id="class-sorcerer-ref-J-1" data-hash-target to="class-sorcerer-J">10</InnerLink></sup></p>
<p><strong>Ghoran:</strong> When casting sorcerer/wizard spells that are also on the druid spell list, add 1/3 to the effective class level, but only for the purpose of determining durations.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-K-1" id="class-sorcerer-ref-K-1" data-hash-target to="class-sorcerer-K">11</InnerLink></sup></p>
<p><strong>Gillman:</strong> Add one spell known from the sorcerer spell list. This spell must be at least one level below the highest spell level the sorcerer can cast.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-L-1" id="class-sorcerer-ref-L-1" data-hash-target to="class-sorcerer-L">12</InnerLink></sup></p>
<p><strong>Gnome:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-M-1" id="class-sorcerer-ref-M-1" data-hash-target to="class-sorcerer-M">13</InnerLink></sup></p>
<p><strong>Goblin:</strong> Add +1 spell known from the sorcerer spell list. This spell must be at least one level below the highest spell level the sorcerer can cast, and must have the fire descriptor.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-N-1" id="class-sorcerer-ref-N-1" data-hash-target to="class-sorcerer-N">14</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-sorcerer-ref-O-1" id="class-sorcerer-ref-O-1" data-hash-target to="class-sorcerer-O">15</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-P-1" id="class-sorcerer-ref-P-1" data-hash-target to="class-sorcerer-P">16</InnerLink></sup></p>
<p><strong>Halfling:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-Q-1" id="class-sorcerer-ref-Q-1" data-hash-target to="class-sorcerer-Q">17</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add +1/2 point of fire damage to spells that deal fire damage cast by the sorcerer.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-R-1" id="class-sorcerer-ref-R-1" data-hash-target to="class-sorcerer-R">18</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-sorcerer-ref-S-1" id="class-sorcerer-ref-S-1" data-hash-target to="class-sorcerer-S">19</InnerLink></sup></p>
<p><strong>Human:</strong> Add one spell known from the sorcerer spell list. This spell must be at least one level below the highest spell level the sorcerer can cast.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-T-1" id="class-sorcerer-ref-T-1" data-hash-target to="class-sorcerer-T">20</InnerLink></sup> <sup><InnerLink showBacklink="backlink-class-sorcerer-ref-U-1" id="class-sorcerer-ref-U-1" data-hash-target to="class-sorcerer-U">21</InnerLink></sup></p>
<p><strong>Ifrit:</strong> Choose a bloodline power from the elemental (fire) bloodline or the efreeti bloodline that the sorcerer can use. The sorcerer treats her class level as though it were +1/6 higher (to a maximum of +2) when determining the effects of that power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-V-1" id="class-sorcerer-ref-V-1" data-hash-target to="class-sorcerer-V">22</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-W-1" id="class-sorcerer-ref-W-1" data-hash-target to="class-sorcerer-W">23</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add +1/4 to the DC of enchantment spells.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-X-1" id="class-sorcerer-ref-X-1" data-hash-target to="class-sorcerer-X">24</InnerLink></sup></p>
<p><strong>Kobold:</strong> Choose acid, cold, electricity, or fire damage. Add +1/2 point of the chosen energy damage to spells that deal the chosen energy damage cast by the sorcerer.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-Y-1" id="class-sorcerer-ref-Y-1" data-hash-target to="class-sorcerer-Y">25</InnerLink></sup></p>
<p><strong>Merfolk:</strong> Add +1/2 to the sorcerer's caster level when determining the range of any spells with the water descriptor.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-Z-1" id="class-sorcerer-ref-Z-1" data-hash-target to="class-sorcerer-Z">26</InnerLink></sup></p>
<p><strong>Nagaji:</strong> Add 1/2 to the sorcerer's caster level when determining the duration of transmutation spells she casts that target the sorcerer or spells she casts with the poison descriptor.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-1-1" id="class-sorcerer-ref-1-1" data-hash-target to="class-sorcerer-1">27</InnerLink></sup></p>
<p><strong>Sylph:</strong> Choose a bloodline power from the djinni or elemental (air) bloodline that the sorcerer can use. The sorcerer treats her class level as though it were +1/6 higher (to a maximum of +2) when determining the effects of that power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-2-1" id="class-sorcerer-ref-2-1" data-hash-target to="class-sorcerer-2">28</InnerLink></sup></p>
<p><strong>Tengu:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-3-1" id="class-sorcerer-ref-3-1" data-hash-target to="class-sorcerer-3">29</InnerLink></sup></p>
<p><strong>Tiefling:</strong> Add +1/2 to the number of times per day a sorcerer can use the corrupting touch infernal bloodline power, or +1 to the total number of rounds per day the sorcerer can use the claws abyssal bloodline power. The sorcerer must possess the applicable power to select these bonuses.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-4-1" id="class-sorcerer-ref-4-1" data-hash-target to="class-sorcerer-4">30</InnerLink></sup></p>
<p><strong>Undine:</strong> Add a +1 bonus on caster level checks to cast spells underwater.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-5-1" id="class-sorcerer-ref-5-1" data-hash-target to="class-sorcerer-5">31</InnerLink></sup></p>
<p><strong>Vishkanya:</strong> Select one bloodline power at 1st level that is normally usable a number of times per day equal to 3 + the sorcerer's Charisma modifier. The sorcerer adds +1/2 to the number of uses per day of that bloodline power.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-6-1" id="class-sorcerer-ref-6-1" data-hash-target to="class-sorcerer-6">32</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add +1/2 point of damage to any illusion spells of the shadow subschool cast by the sorcerer.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-7-1" id="class-sorcerer-ref-7-1" data-hash-target to="class-sorcerer-7">33</InnerLink></sup></p>
<p><strong>Wyvaran:</strong> Add a +1/2 bonus to the damage of spells or spell-like abilities that deal damage of the same energy type as the sorcerer's draconic bloodline breath weapon.<sup><InnerLink showBacklink="backlink-class-sorcerer-ref-8-1" id="class-sorcerer-ref-8-1" data-hash-target to="class-sorcerer-8">34</InnerLink></sup></p>
</div>
<h3 id="class-sorcerer-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-sorcerer/bloodline_familiars">Bloodline Familiars</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline; Bloodline Spells; 1st-Level Bloodline Power</p><p>Those with an inherent connection to magic often attract creatures who feel a similar instinctive pull toward magical forces.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/crossblooded">Crossblooded</Link></p><p><strong>Modifies or Replaces:</strong> Spells Known</p><p>A crossblooded bloodline combines the powers of two distinct heritages.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/dragon_drinker">Dragon Drinker</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline Arcana; 1st-Level Bloodline Power; 7th, 13th, and 19th-level Bloodline Feats</p><p>(Requires Draconic Bloodline) The blood of dragons not only flows through a dragon drinker's veins, but also empowers her spells and magical abilities when consumed.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/eldritch_scrapper">Eldritch Scrapper</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 9th, and 15th-level Bloodline Powers</p><p>An eldritch scrapper is usually spoiling for a fight, looking to prove that she's just as tough as a martial character.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/mongrel_mage">Mongrel Mage</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline; Bloodline Powers; Bloodline Spells; 7th, 13th, and 19th-level Bloodline Feats</p><p>A mongrel mage is a sorcerer whose bloodline is so weak, or mixed with so many others, that her power isn't clearly associated with any bloodline source.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/nine_tailed_heir">Nine-Tailed Heir</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline Spells</p><p>(Kitsune only) Tian stories often tell of kitsune with multiple tails who have a magical quirk in their blood or have been blessed by their race's deific matron, Daikitsu</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/razmiran_priest">Razmiran Priest</Link></p><p><strong>Modifies or Replaces:</strong> Eschew Materials; 3rd-level Bloodline Spell; 5th-level Bloodline Spell; 9th-level Bloodline Power</p><p>The Razmiran priest is a magical charlatan, missionary servant of the Living God.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/seeker">Seeker</Link></p><p><strong>Modifies or Replaces:</strong> Eschew Materials, 3rd-level Bloodline Power, 15th-level Bloodline Power</p><p>The seeker is obsessed with learning about their heritage and history, researching ancient texts and obscure ruins for clues.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/sorcerer_of_sleep">Sorcerer of Sleep</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline Arcana; Eschew Materials; 1st-level Bloodline Power</p><p>Some sorcerers have trouble accessing their innate gifts and must find another way to unlock them. For a sorcerer of sleep, the mind-altering drug pesh is the key.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/stone_warder">Stone Warder</Link></p><p><strong>Modifies or Replaces:</strong> Eschew Materials; 3rd-level Bloodline Spell; 7th-level Bloodline Feat</p><p>Stone warders have an innate ability to create runes that allow them to ward areas with magic traps built from their spells. These sorcerers are most common among dwarves, but have been known to appear among other races who have strong ties to earth, rock, stone, mountains, and the Darklands.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/tattooed_sorcerer">Tattooed Sorcerer</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Bloodline Power; Eschew Materials; 7th-level Bloodline Feat; 9th-level Bloodline Power</p><p>The tattooed sorcerer has embraced the ancient traditions of Varisian spellcasting, and uses colorful and intricate tattoos to enhance her magical powers.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/umbral_scion">Umbral Scion</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline (Shadow Only); Spellcasting; 1st-Level Bloodline Power, 7th and 13th-level Bloodline Feats</p><p>Umbral scions are sorcerers who are able to expertly control their especially potent shadow heritage. The majority of umbral sorcerers hail from the Darklands.</p></div>
<div className="archetype"><p><Link to="/arc-sorcerer/wishcrafter">Wishcrafter</Link></p><p><strong>Modifies or Replaces:</strong> Bloodline Arcana; Bloodline Bonus Spells; 7th, 13th, 19th-level Bloodline Feats</p><p>(Ifrit Only) Wishcrafters are born with a talent for manipulating reality inherited from their efreeti ancestors.</p></div>
<h3 id="class-sorcerer-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"sorcerer archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Bloodline"},{"header":"Bloodline Arcana"},{"header":"7th-level Bloodline Feat"},{"header":"13th-level Bloodline Feat"},{"header":"19th-level Bloodline Feat"},{"header":"Bloodline Powers"},{"header":"1st-level Bloodline Power"},{"header":"3rd-level Bloodline Power"},{"header":"9th-level Bloodline Power"},{"header":"15th-level Bloodline Power"},{"header":"Bloodline Spells"},{"header":"3rd-level Bloodline Spell"},{"header":"5th-level Bloodline Spell"},{"header":"Eschew Materials"},{"header":"Spellcasting"}],"data":[["‹arc-sorcerer/Bloodline Familiars›","X",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null],["‹arc-sorcerer/Crossblooded›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-sorcerer/Dragon Drinker›","X","X","X","X","X",null,"X",null,null,null,null,null,null,null,null],["‹arc-sorcerer/Eldritch Scrapper›",null,null,null,null,null,null,"X",null,"X","X",null,null,null,null,null],["‹arc-sorcerer/Mongrel Mage›","X",null,"X","X","X","X",null,null,null,null,"X",null,null,null,null],["‹arc-sorcerer/Nine-Tailed Heir›",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-sorcerer/Razmiran Priest›",null,null,null,null,null,null,null,null,"X",null,null,"X","X","X",null],["‹arc-sorcerer/Seeker›",null,null,null,null,null,null,null,"X",null,"X",null,null,null,"X",null],["‹arc-sorcerer/Sorcerer of Sleep›",null,"X",null,null,null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-sorcerer/Stone Warder›",null,null,"X",null,null,null,null,null,null,null,null,"X",null,"X",null],["‹arc-sorcerer/Tattooed Sorcerer›",null,null,"X",null,null,null,"X",null,"X",null,null,null,null,"X",null],["‹arc-sorcerer/Umbral Scion›","X",null,"X","X",null,null,"X",null,null,null,null,null,null,null,"X"],["‹arc-sorcerer/Wishcrafter›",null,"X","X","X","X",null,null,null,null,null,"X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-sorcerer-label">Footnotes</h3>
<ol>
<li id="class-sorcerer-A">
<p><Link to="/source/advanced_race_guide">Advanced Race Guide pg. 85</Link> <InnerLink id="backlink-class-sorcerer-ref-A-1" data-hash-target to="class-sorcerer-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-B">
<p>Advanced Race Guide pg. 92 <InnerLink id="backlink-class-sorcerer-ref-B-1" data-hash-target to="class-sorcerer-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-C">
<p>Advanced Race Guide pg. 104 <InnerLink id="backlink-class-sorcerer-ref-C-1" data-hash-target to="class-sorcerer-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-D">
<p>Advanced Race Guide pg. 13 <InnerLink id="backlink-class-sorcerer-ref-D-1" data-hash-target to="class-sorcerer-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-E">
<p>Advanced Race Guide pg. 23 <InnerLink id="backlink-class-sorcerer-ref-E-1" data-hash-target to="class-sorcerer-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-F">
<p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 13</Link> <InnerLink id="backlink-class-sorcerer-ref-F-1" data-hash-target to="class-sorcerer-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-G">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 39</Link> <InnerLink id="backlink-class-sorcerer-ref-G-1" data-hash-target to="class-sorcerer-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-H">
<p>Advanced Race Guide pg. 109 <InnerLink id="backlink-class-sorcerer-ref-H-1" data-hash-target to="class-sorcerer-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-I">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 19</Link> <InnerLink id="backlink-class-sorcerer-ref-I-1" data-hash-target to="class-sorcerer-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-J">
<p><Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 9</Link> <InnerLink id="backlink-class-sorcerer-ref-J-1" data-hash-target to="class-sorcerer-ref-J-1" aria-label="Back to reference J-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-K">
<p><Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 17</Link> <InnerLink id="backlink-class-sorcerer-ref-K-1" data-hash-target to="class-sorcerer-ref-K-1" aria-label="Back to reference K-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-L">
<p>Advanced Race Guide pg. 188 <InnerLink id="backlink-class-sorcerer-ref-L-1" data-hash-target to="class-sorcerer-ref-L-1" aria-label="Back to reference L-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-M">
<p>Advanced Race Guide pg. 33 <InnerLink id="backlink-class-sorcerer-ref-M-1" data-hash-target to="class-sorcerer-ref-M-1" aria-label="Back to reference M-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-N">
<p>Advanced Race Guide pg. 116 <InnerLink id="backlink-class-sorcerer-ref-N-1" data-hash-target to="class-sorcerer-ref-N-1" aria-label="Back to reference N-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-O">
<p><Link to="/source/goblins_of_golarion">Goblins of Golarion pg. 31</Link> <InnerLink id="backlink-class-sorcerer-ref-O-1" data-hash-target to="class-sorcerer-ref-O-1" aria-label="Back to reference O-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-P">
<p>Advanced Race Guide pg. 43 <InnerLink id="backlink-class-sorcerer-ref-P-1" data-hash-target to="class-sorcerer-ref-P-1" aria-label="Back to reference P-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-Q">
<p>Advanced Race Guide pg. 63 <InnerLink id="backlink-class-sorcerer-ref-Q-1" data-hash-target to="class-sorcerer-ref-Q-1" aria-label="Back to reference Q-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-R">
<p>Advanced Race Guide pg. 53 <InnerLink id="backlink-class-sorcerer-ref-R-1" data-hash-target to="class-sorcerer-ref-R-1" aria-label="Back to reference R-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-S">
<p>Advanced Player's Guide pg. 19 <InnerLink id="backlink-class-sorcerer-ref-S-1" data-hash-target to="class-sorcerer-ref-S-1" aria-label="Back to reference S-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-T">
<p>Advanced Race Guide pg. 73 <InnerLink id="backlink-class-sorcerer-ref-T-1" data-hash-target to="class-sorcerer-ref-T-1" aria-label="Back to reference T-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-U">
<p>Advanced Player's Guide pg. 23 <InnerLink id="backlink-class-sorcerer-ref-U-1" data-hash-target to="class-sorcerer-ref-U-1" aria-label="Back to reference U-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-V">
<p>Advanced Race Guide pg. 127 <InnerLink id="backlink-class-sorcerer-ref-V-1" data-hash-target to="class-sorcerer-ref-V-1" aria-label="Back to reference V-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-W">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-sorcerer-ref-W-1" data-hash-target to="class-sorcerer-ref-W-1" aria-label="Back to reference W-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-X">
<p>Advanced Race Guide pg. 192 <InnerLink id="backlink-class-sorcerer-ref-X-1" data-hash-target to="class-sorcerer-ref-X-1" aria-label="Back to reference X-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-Y">
<p>Advanced Race Guide pg. 133 <InnerLink id="backlink-class-sorcerer-ref-Y-1" data-hash-target to="class-sorcerer-ref-Y-1" aria-label="Back to reference Y-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-Z">
<p>Advanced Race Guide pg. 194 <InnerLink id="backlink-class-sorcerer-ref-Z-1" data-hash-target to="class-sorcerer-ref-Z-1" aria-label="Back to reference Z-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-1">
<p>Blood of the Beast pg. 16 <InnerLink id="backlink-class-sorcerer-ref-1-1" data-hash-target to="class-sorcerer-ref-1-1" aria-label="Back to reference 1-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-2">
<p>Advanced Race Guide pg. 157 <InnerLink id="backlink-class-sorcerer-ref-2-1" data-hash-target to="class-sorcerer-ref-2-1" aria-label="Back to reference 2-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-3">
<p>Advanced Race Guide pg. 163 <InnerLink id="backlink-class-sorcerer-ref-3-1" data-hash-target to="class-sorcerer-ref-3-1" aria-label="Back to reference 3-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-4">
<p>Advanced Race Guide pg. 170 <InnerLink id="backlink-class-sorcerer-ref-4-1" data-hash-target to="class-sorcerer-ref-4-1" aria-label="Back to reference 4-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-5">
<p>Advanced Race Guide pg. 176 <InnerLink id="backlink-class-sorcerer-ref-5-1" data-hash-target to="class-sorcerer-ref-5-1" aria-label="Back to reference 5-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-6">
<p>Advanced Race Guide pg. 208 <InnerLink id="backlink-class-sorcerer-ref-6-1" data-hash-target to="class-sorcerer-ref-6-1" aria-label="Back to reference 6-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-7">
<p>Advanced Race Guide pg. 210 <InnerLink id="backlink-class-sorcerer-ref-7-1" data-hash-target to="class-sorcerer-ref-7-1" aria-label="Back to reference 7-1">↩</InnerLink></p>
</li>
<li id="class-sorcerer-8">
<p><Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 18</Link> <InnerLink id="backlink-class-sorcerer-ref-8-1" data-hash-target to="class-sorcerer-ref-8-1" aria-label="Back to reference 8-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _spiritualist = {hasJL:true,title: "Spiritualist", jsx: <><div className="jumpList" id="class-spiritualist-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-spiritualist-spells">Spells</InnerLink></li><li><InnerLink toTop to="class-spiritualist-phantom">Phantom</InnerLink></li><li><InnerLink toTop to="class-spiritualist-shared-consciousness-su">Shared Consciousness</InnerLink></li><li><InnerLink toTop to="class-spiritualist-etheric-tether-su">Etheric Tether</InnerLink></li><li><InnerLink toTop to="class-spiritualist-bonded-senses-su">Bonded Senses</InnerLink></li><li><InnerLink toTop to="class-spiritualist-bonded-manifestation-su">Bonded Manifestation</InnerLink></li><li><InnerLink toTop to="class-spiritualist-spiritual-interference-ex-or-su">Spiritual Interference</InnerLink></li><li><InnerLink toTop to="class-spiritualist-detect-undead-sp">Detect Undead</InnerLink></li><li><InnerLink toTop to="class-spiritualist-phantom-recall-su">Phantom Recall</InnerLink></li><li><InnerLink toTop to="class-spiritualist-calm-spirit-sp">Calm Spirit</InnerLink></li><li><InnerLink toTop to="class-spiritualist-see-invisibility-sp">See Invisibility</InnerLink></li><li><InnerLink toTop to="class-spiritualist-fused-consciousness-su">Fused Consciousness</InnerLink></li><li><InnerLink toTop to="class-spiritualist-greater-spiritual-interference-ex-or-su">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-spiritualist-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-spiritualist-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-spiritualist-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-spiritualist-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-spiritualist-spiritualist">Spiritualist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 72</Link></p>
<p>Becoming a spiritualist is not a calling: it's a phenomenon. When a creature dies, its spirit flees its body and begins the next stage of its existence. Debilitating emotional attachments during life and other psychic corruptions cause some spirits to drift into the Ethereal Plane and descend toward the Negative Energy Plane. Some of these spirits are able to escape the pull of undeath and make their way back to the Material Plane, seeking refuge in a psychically attuned mind. Such a fusing of consciousnesses creates a spiritualist, the master of a single powerful phantom whom the spiritualist can manifest to do her bidding.</p>
<p><strong>Role:</strong> The spiritualist seeks the occult and esoteric truth about life, death, and the passage beyond, using her phantom as a guide and tool. The connection with her phantom allows her to harness the powers of life and death, thought and nightmare, shadow and revelation.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>2d6 &times; 10 gp (average 70 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={4} className="sw">Class Skills</th><td><Link to="/skill/fly">Fly</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_history">Knowledge (history)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/linguistics">Linguistics</Link>, <Link to="/skill/spellcraft">Spellcraft</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-spiritualist-class-features-and-spells-per-day">Class Features and Spells Per Day</h3>
<ScrollContainer id="class-spiritualist--table-0"><table>
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
<td>Etheric tether, knacks, phantom, shared consciousness</td>
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
<td>Bonded senses</td>
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
<td>Bonded manifestation</td>
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
<td>Spiritual interference</td>
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
<td><em>Detect undead</em></td>
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
<td>Phantom recall 1/day</td>
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
<td><em>Calm spirit</em> 1/day</td>
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
<td>Bonded manifestation increase</td>
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
<td><em>See invisibility</em></td>
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
<td>Fused consciousness, phantom recall 2/day</td>
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
<td><em>Calm spirit</em> 2/day</td>
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
<td>Greater spiritual interference</td>
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
<td>Bonded manifestation increase</td>
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
<td>Phantom recall 3/day, spiritual bond</td>
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
<td><em>Calm spirit</em> 3/day</td>
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
<td><em>Call spirit</em></td>
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
<td>Dual bond</td>
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
<td>Bonded manifestation increase, phantom recall 4/day</td>
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
<td><em>Calm spirit</em> 4/day</td>
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
<td>Empowered consciousness</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="class-spiritualist-spells-known">Spells Known</h3>
<ScrollContainer id="class-spiritualist--table-1"><table>
<thead>
<tr>
<th>Level</th>
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
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>2nd</td>
<td>5</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>6</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>4th</td>
<td>6</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>6</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>6th</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>10th</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>11th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
<td>-</td>
</tr>
<tr>
<td>16th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>17th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>3</td>
</tr>
<tr>
<td>18th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>19th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>20th</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>6</td>
<td>5</td>
<td>5</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={3}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td><Link to="/eq-weapon/kukri">kukri</Link></td><td><Link to="/eq-weapon/sap">sap</Link></td></tr><tr><td colSpan={2}><Link to="/eq-weapon/scythe">scythe</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light armor</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">No</td></tr></tbody></table>
<Ability id="class-spiritualist-spells" icon={["magic-swirl"]}><Pair single id="class-spiritualist-spells">Spells</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">To cast a spell, you must have a Wisdom score equal to at least 10 + the spell level. You can cast only a certain number of spells of each spell level per day, as shown on the table above. In addition, you receive <Link to="/rule/determine_bonuses">bonus spells per day</Link> if you have a high Wisdom score.</Pair>
<Pair title="Ability">You gain the ability to cast psychic spells which are drawn from the <Link to="/main/spells_spiritualist">spiritualist spell list</Link>. The DC for a saving throw against spells you cast is 10 + the spell level + your Wisdom modifier. You do not need to prepare these spells in advance; you can cast any spell you know at any time, assuming you haven't yet used up your allotment of spells per day for the spell's level.</Pair><Pair title="Info"><p>A spiritualist's selection of spells is limited. You begin play knowing four 0-level spells and two 1st-level spells of your choice. At each new spiritualist level you gain one or more new spells as indicated on the table above. Unlike spells per day, the number of spells you know is not affected by your Wisdom score.</p>
<p>At 5th level, and every three levels thereafter (8th, 11th, and so on), you can choose to learn a new spell in place of one you already know. In effect, you "lose" the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least one level lower than the highest-level spiritualist spell you can cast. You may swap out only a single spell at any given level and must choose whether or not to swap the spell at the same time that you gain new spells known for the level.</p></Pair></Ability><Ability id="class-spiritualist-knacks" icon={["magic-swirl"]}>
<Pair single id="class-spiritualist-knacks">Knacks</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You learn a number of knacks, or 0-level psychic spells. These spells are cast like any other spell, but they don't consume slots and can be used again. Knacks cast using other spell slots, such as those due to metamagic feats, consume slots normally.</Pair>
</Ability>
<Ability id="class-spiritualist-phantom" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-phantom">Phantom</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You begin play with the aid of a powerful and versatile spirit entity called a <Link to="/sidekick/phantom">phantom</Link>. The phantom forms a link with you; forever after, you can either harbor the creature within your consciousness or manifest it as an ectoplasmic or incorporeal entity. A phantom has the same alignment as you, and it can speak all the languages you can.</p>
<p>Each phantom has an <Link to="/ability/emotional_focus">emotional focus</Link> - a powerful emotion based on some experience in life that keeps it tethered to the Material and Ethereal planes. This emotional focus also grants the phantom abilities that it can use while manifested. The type of each ability and its power are determined by your level.</p>
<p>The emotional focus determines which bonus skill ranks the phantom gains, as well as the skills in which you gain Skill Focus (see <em>Shared Consciousness</em> below). It also determines the <Link to="/misc/good_saving_throws">good saving throws</Link> of the manifested phantom and the special abilities the phantom gains as it increases in level.</p>
<p>You can <strong className="hl">fully manifest</strong> your phantom through a ritual that takes 1 minute to perform. When the phantom is fully manifested, you can change the form of the phantom's manifestation (either from ectoplasmic to incorporeal or vice versa) as a <strong className="hl">full-round action</strong> that <strong className="hl">provokes attacks of opportunity.</strong> When the phantom manifests, its hit points are unchanged from the last time it manifested, unless the phantom was slain and returned to the Ethereal Plane; in this case, the phantom manifests with <Link to="/misc/half">half</Link> its maximum number of hit points. The phantom does not heal naturally, and can be healed only with magic or by being tended to with the Heal skill while fully manifested in ectoplasmic form. The phantom stays fully manifested until it is either returned to your consciousness (a <strong className="hl">standard action</strong>) or banished to the Ethereal Plane. If the phantom is banished to the Ethereal Plane, it can't return to your consciousness or manifest again for 24 hours.</p>
<p>While fully manifested, a phantom can't be returned to the Ethereal Plane by means of <Link to="/spell/dispel_magic">dispel magic</Link>, but spells such as <Link to="/spell/dismissal">dismissal</Link> and <Link to="/spell/banishment">banishment</Link> work normally. Whenever you are unconscious or asleep, the phantom immediately returns to your consciousness. If you die, the phantom is returned to the Ethereal Plane, and can't return to your consciousness until 24 hours after you are brought back to life. A phantom can't be <em>dismissed</em> or <em>banished</em> (by a spell or any other similar effect) while it resides in your consciousness, as the phantom is protected from such effects by the power of your psyche.</p>
<p>Fully manifested phantoms can wear armor and use items (though not wield weapons) appropriate to their forms. Any items worn, carried, or held by a phantom are dropped when the phantom returns to your consciousness, and must be retrieved and donned anew if the phantom wishes to use them when it fully manifests in the future.</p>
<p>Phantoms are self-involved, even jealous, creatures that do not play well with other summoned companions. A phantom refuses to manifest (either fully or as part of a bonded manifestation) in the presence of an eidolon or shadow you have summoned. Furthermore, if a phantom is manifested when such a creature is summoned, it immediately retreats into your consciousness, and will not manifest again until the eidolon or shadow is dismissed.</p>
<p>A fully manifested phantom's abilities, feats, Hit Dice, saving throws, and skills are tied to your class level and increase as you gain levels.</p>
</Pair>
<Pair title="Special">You can harbor your phantom in your consciousness, manifest it partially, or fully manifest it. A fully manifested phantom is treated as a summoned creature from the <Link to="/rule/ethereal_plane">Ethereal Plane</Link>, except it is not sent back to the Ethereal Plane until it is reduced to a negative amount of hit points equal to or greater than its Constitution score.</Pair>
</Ability>
<Ability id="class-spiritualist-shared-consciousness-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="class-spiritualist-shared-consciousness-su">Shared Consciousness (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">While a phantom is confined in your consciousness (but not while it's fully manifested or banished to the Ethereal Plane), it grants you the <Link to="/feat/skill_focus">Skill Focus</Link> feat in two skills determined by the phantom's emotional focus, unless you already have Skill Focus in those skills. It also grants a +4 bonus on saving throws against all mind-affecting effects.</Pair>
<Pair title="Immediate Action">When you fail a saving throw against a mind-affecting effect, you can shunt that effect into the phantom's section of your consciousness instead. When you do so, you are not affected by the mind-affecting effect, but for the normal duration of that effect, you lose the bonuses on saving throws against mind-affecting effects and the Skill Focus effects granted by your phantom, and can't use this ability to shunt a mind-affecting effect into the phantom's consciousness or manifest her phantom in any way.</Pair>
<Pair title="Usage">You can shunt an effect into your phantom once a day.</Pair>
<Pair title="At 12th Level">The bonus on saving throws becomes +8.</Pair>
<Pair title="Special">When a mind-affecting effect is shunted into the phantom's consciousness, spells such as <em>dispel magic</em> and <Link to="/spell/break_enchantment">break enchantment</Link> can be cast on you to end the effect's duration as if you were affected by the mind-affecting effect.</Pair>
</Ability>
<Ability id="class-spiritualist-etheric-tether-su" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-etheric-tether-su">Etheric Tether (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You can force the phantom to manifest in an area around you by pushing the phantom's consciousness though the veil of ethereal essence, allowing it to fully manifest in either ectoplasmic or incorporeal form.</p>
<p>This tether is limited. When the phantom is fully manifested, you and it must remain within 50 feet of one another for the phantom's manifestation to stay stable with little to no concentration on your part. You can stretch the limited tether, but only when the phantom is in ectoplasmic form. When you start your turn and your ectoplasmic phantom is more than 50 feet away from you (but closer than 100 feet), you must concentrate on the link as a <strong className="hl">full-round action</strong> that <strong className="hl">provokes attacks of opportunity</strong> or the ectoplasmic phantom immediately returns to the Ethereal Plane and cannot be summoned from that plane for 24 hours. This <Link to="/rule/concentration">concentration</Link> can be interrupted as if it were a spell. Treat this effect's spell level as equal to 1 + 1 per 10 feet farther than 50 feet that the phantom is from you (maximum spell level 6th). If the tether is interrupted or the check fails, the phantom immediately snaps back into your consciousness.</p>
<p>If the ectoplasmic phantom is ever more than 100 feet away from you, or the incorporeal phantom is ever 50 feet away from you or outside of line of effect from you for more than 1 round per spiritualist level you possess, the tether is automatically broken; the phantom immediately returns to the Ethereal Plane and can't be summoned from that plane for 24 hours.</p>
</Pair>
<Pair title="Passive Ability">Whenever your manifested phantom takes enough damage to send it back to the Ethereal Plane, as a reaction to the damage, you can sacrifice any number of your hit points without using an action. Each hit point sacrificed in this way prevents 1 point of damage dealt to the phantom. This can prevent the phantom from being sent back to the Ethereal Plane.</Pair>
</Ability>
<Ability id="class-spiritualist-bonded-senses-su" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-bonded-senses-su">Bonded Senses (Su)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 round/day per spiritualist level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">You can share the senses of your manifested phantom, hearing, seeing, smelling, tasting, and feeling everything your phantom does. There is no maximum range for this effect, but you and the phantom must be on the same plane.</Pair>
<Pair title="Free Action">You can end this effect.</Pair>
</Ability>
<Ability id="class-spiritualist-bonded-manifestation-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="class-spiritualist-bonded-manifestation-su">Bonded Manifestation (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">3 rounds/day + 1 round per spiritualist level; these rounds need not be consecutive</Pair>
<Pair title="Swift Action">You can pull on the consciousness of your phantom and the substance of the Ethereal Plane to partially manifest aspects of both in your own body. When you do, you enhance your own abilities while the phantom is still bound to your consciousness. To use this ability, the phantom must be confined in your consciousness; it can't be manifested in any other way. During a <em>bonded manifestation,</em> the phantom can't be damaged, dismissed, or banished.</Pair>
<Pair title="Free Action">You can dismiss the effects of a <em>bonded manifestation</em> as a free action, but if you do so the same round that you activated it, it still counts as 1 round of use.</Pair>
<Pair title="Special">You must choose either ectoplasmic or incorporeal form. When you make this choice, youe gain all of the abilities based on the form you choose and your spiritualist level.</Pair>
</Ability>
<Ability id="class-spiritualist-ectoplasmic-bonded-manifestation" extraClasses="subAbility numbered" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="class-spiritualist-ectoplasmic-bonded-manifestation" flavor="The spiritualist gains an ectoplasmic shield that protects her without restricting her movement or actions.">Ectoplasmic Bonded Manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a +4 shield bonus to Armor Class; this bonus applies to incorporeal touch attacks. The ectoplasmic shield has no armor check penalty or arcane spell failure chance.</Pair>
<Pair title="At 8th Level">You also sprout a pair of ectoplasmic tendrils from your body. Once per round as either a <strong className="hl">swift</strong> or a <strong className="hl">standard action</strong> (your choice), you can use one or both tendrils to attack creatures within your melee reach (using the attack bonus and damage dice of your ectoplasmic manifested phantom) or to manipulate objects. You can even use that action to have one tendril make an attack and the other manipulate an object, as long as that object can be manipulated with one hand.</Pair>
<Pair title="At 13th Level">The phantom's ectoplasm clings to you like a suit of armor, granting you a +6 armor bonus to AC without imposing an armor check penalty, an arcane spell failure chance, or any reduction in speed.</Pair>
<Pair title="At 18th Level">You can take a <strong className="hl">full-round action</strong> to attack all creatures within your melee reach with your tendrils (using the attack bonus and damage dice of your ectoplasmic manifested phantom). When you do, you roll the attack roll twice, take the better of the two results, and use that as your attack roll result against all creatures within your melee reach. If the better attack roll threatens a critical hit, you choose one target that you hit to confirm the critical hit against. The other attacks that hit are considered normal hits rather than critical threats.</Pair>
</Ability>
<Ability id="class-spiritualist-incorporeal-bonded-manifestation" extraClasses="subAbility numbered" icon={["armor-upgrade","mailed-fist","stairs-goal"]}>
<Pair single id="class-spiritualist-incorporeal-bonded-manifestation">Incorporeal Bonded Manifestation</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You become shrouded in a haze of insubstantial mist, granting you <Link to="/rule/concealment">concealment</Link> against ranged attacks.</Pair>
<Pair title="At 8th Level">Your unarmed strikes and melee weapon attacks are treated as if they had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> magic weapon special ability.</Pair>
<Pair title="At 13th Level">You can take a <strong className="hl">standard action</strong> to become invisible (as the <Link to="/spell/invisibility">invisibility</Link> spell) until the start of your next turn.</Pair>
<Pair title="At 18th Level">You gain the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and a fly speed of 30 feet (good) while using this form of bonded manifestation.</Pair>
</Ability>
<Ability id="class-spiritualist-spiritual-interference-ex-or-su" icon={["armor-upgrade"]}>
<Pair single id="class-spiritualist-spiritual-interference-ex-or-su">Spiritual Interference (Ex or Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Whenever you are within the reach of your ectoplasmic manifested phantom, you gain a +2 shield bonus to your Armor Class and a +2 circumstance bonus on your saving throws. You don't gain these bonuses when the ectoplasmic manifested phantom is <Link to="/rule/grappled">grappled</Link>, <Link to="/misc/helpless">helpless</Link>, or <Link to="/misc/unconscious">unconscious</Link>.</Pair>
<Pair title="Special">While within 30 feet of your incorporeally manifested phantom, you receive a +2 circumstance bonus on saving throws against mind-affecting effects. This bonus is a supernatural ability and does not apply if the phantom is unconscious.</Pair>
</Ability>
<Ability id="class-spiritualist-detect-undead-sp" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-detect-undead-sp">Detect Undead (Sp)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">Your connection with the Ethereal Plane becomes so strong that you can use <Link to="/spell/detect_undead">detect undead</Link> at will as a spell-like ability with a caster level equal to your spiritualist level.</Pair>
</Ability>
<Ability id="class-spiritualist-phantom-recall-su" icon={["magic-swirl"]}>
<Pair single id="class-spiritualist-phantom-recall-su">Phantom Recall (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 6th<ByLevelPop levels={[[6,1],[10,2],[14,3],[18,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">As either a <strong className="hl">swift</strong> or an <strong className="hl">immediate action</strong>, you can call your manifested phantom to your side or back into your consciousness. This ability functions as <Link to="/spell/dimension_door">dimension door</Link>, using your class level as the caster level. When you call the phantom in this way, the phantom appears adjacent to you (or as close as possible, if all adjacent spaces are occupied).</Pair>
<Pair title="Special">When you use this ability to call the phantom back to your consciousness, you can activate <em>bonded manifestation</em> as part of that action, but doing so costs 1 extra round of <em>bonded manifestation.</em></Pair>
</Ability>
<Ability id="class-spiritualist-calm-spirit-sp" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-calm-spirit-sp">Calm Spirit (Sp)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four spiritualist levels beyond 7th<ByLevelPop levels={[[7,1],[11,2],[15,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">You gain the ability to use <Link to="/spell/calm_spirit">calm spirit</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="class-spiritualist-see-invisibility-sp" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-see-invisibility-sp">See Invisibility (Sp)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Standard Action">You gain the ability to use <Link to="/spell/see_invisibility">see invisibility</Link> as a spell-like ability once per day, with a duration of 10 minutes.</Pair>
</Ability>
<Ability id="class-spiritualist-fused-consciousness-su" icon={["upgrade"]}>
<Pair single id="class-spiritualist-fused-consciousness-su">Fused Consciousness (Su)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">You always gain the benefits of <em>bonded senses</em> when your phantom is manifested. You also gain the skill ranks and bonus to mind-affecting spells granted by the spirit's emotional focus, even when your phantom is manifested.</Pair>
<Pair title="Ability">Lastly, you can shunt the effect of a mind-affecting effect into the consciousness of your phantom as the <em>shared consciousness</em> ability even when the phantom is manifested, but doing so causes the phantom to immediately retreat back into your consciousness.</Pair>
</Ability>
<Ability id="class-spiritualist-greater-spiritual-interference-ex-or-su" icon={["armor-upgrade"]}>
<Pair single id="class-spiritualist-greater-spiritual-interference-ex-or-su">Greater Spiritual Interference (Ex or Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever allies are within your manifested phantom's reach, as long as it is in ectoplasmic form, each ally gains a +2 shield bonus to its Armor Class and a +2 circumstance bonus on its saving throws. For you, these bonuses increase to +4. You and allies within range don't gain this bonus if the manifested phantom is grappled, helpless, or unconscious.</Pair>
<Pair title="Special">While the phantom is incorporeally manifested, allies within 30 feet of the phantom receive a +2 circumstance bonus on saving throws against mind-affecting effects. For you, this bonus increases to +4. This bonus doesn't apply if the phantom is unconscious.</Pair>
</Ability>
<Ability id="class-spiritualist-spiritual-bond-su" icon={["armor-upgrade"]}>
<Pair single id="class-spiritualist-spiritual-bond-su" flavor="A spiritualist's life force becomes intrinsically linked with the phantom's spiritual essence.">Spiritual Bond (Su)</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">As long as the phantom has 1 or more hit points, when you take damage that would reduce you to fewer than 0 hit points, those points of damage are transferred to the phantom instead. This transfer stops after the phantom takes all the points of damage or the phantom is reduced to a negative amount of hit points equal to its Constitution score. In the latter case, points of damage dealt in excess of this limit are dealt to you. This ability affects only effects that deal hit point damage.</Pair>
</Ability>
<Ability id="class-spiritualist-call-spirit-sp" icon={["stairs-goal"]}>
<Pair single id="class-spiritualist-call-spirit-sp">Call Spirit (Sp)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">You gain the ability to use <Link to="/spell/call_spirit">call spirit</Link> as a spell-like ability once per day.</Pair>
</Ability>
<Ability id="class-spiritualist-dual-bond-su" icon={["upgrade"]}>
<Pair single id="class-spiritualist-dual-bond-su">Dual Bond (Su)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">You can use your <em>bonded manifestation</em> ability a number of rounds per day equal to 3 + twice your spiritualist level.</Pair>
</Ability>
<Ability id="class-spiritualist-empowered-consciousness-su" icon={["armor-upgrade"]}>
<Pair single id="class-spiritualist-empowered-consciousness-su">Empowered Consciousness (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">While your phantom is confined in your consciousness, you are immune to mind-affecting effects and spells and effects that involve possession, such as <Link to="/spell/magic_jar">magic jar</Link> and <Link to="/spell/possession">possession</Link>.</Pair>
</Ability>
<h3 id="class-spiritualist-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-spiritualist--table-2"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Deep Magics (Su)</td><td>At 20th level, the character's repertoire of spells deepens dramatically. She gains an additional spell known for each spell level she can cast. A character of any class with spells known can select this capstone.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>Potent Phantom (Su)</td><td>At 20th level, the spiritualist's phantom grows ever more complex and sophisticated in its manifestation. The phantom gains a second emotional focus. This does not change the phantom's saving throws, but the phantom otherwise grants all the skills and powers of the focus.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-spiritualist-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Duskwalker:</strong> Add 1 foot to the spiritualist's phantom's base speed. In combat, this option has no effect unless the spiritualist has selected it 5 times (or another increment of 5).<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-A-1" id="class-spiritualist-ref-A-1" data-hash-target to="class-spiritualist-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add 1/6 to the shield bonus granted by the 3rd-level ectoplasmic bonded manifestation ability.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-B-1" id="class-spiritualist-ref-B-1" data-hash-target to="class-spiritualist-B">2</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Add a +1/4 bonus on weapon damage rolls with the slam attacks from ectoplasmic bonded manifestation.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-C-1" id="class-spiritualist-ref-C-1" data-hash-target to="class-spiritualist-C">3</InnerLink></sup></p>
<p><strong>Elf:</strong> Add 1/6 to the shield bonus granted by the 3rd-level ectoplasmic bonded manifestation ability.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-B-2" id="class-spiritualist-ref-B-2" data-hash-target to="class-spiritualist-B">2</InnerLink></sup></p>
<p><strong>Gnome:</strong> Add 1/6 to the shield bonus granted to the spiritualist while under the effects of either spiritual interference or greater spiritual interference.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-D-1" id="class-spiritualist-ref-D-1" data-hash-target to="class-spiritualist-D">4</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Add 1 skill rank to the spiritualist's phantom.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-D-2" id="class-spiritualist-ref-D-2" data-hash-target to="class-spiritualist-D">4</InnerLink></sup></p>
<p><strong>Halfling:</strong> Add 1/4 to the number of rounds that the spiritualist's incorporeal phantom can be out of sight and line of effect before being sent back to the Ethereal Plane.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-D-3" id="class-spiritualist-ref-D-3" data-hash-target to="class-spiritualist-D">4</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add 1 hit point to the spiritualist's phantom.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-D-4" id="class-spiritualist-ref-D-4" data-hash-target to="class-spiritualist-D">4</InnerLink></sup></p>
<p><strong>Human:</strong> Add 1 skill rank or 1 hit point to the spiritualist's phantom.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-D-5" id="class-spiritualist-ref-D-5" data-hash-target to="class-spiritualist-D">4</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-E-1" id="class-spiritualist-ref-E-1" data-hash-target to="class-spiritualist-E">5</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1/2 hit point and 1/2 skill point to the spiritualist's phantom.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-F-1" id="class-spiritualist-ref-F-1" data-hash-target to="class-spiritualist-F">6</InnerLink></sup></p>
<p><strong>Shabti:</strong> Add 1 foot to the limit of etheric tether. This includes how far the spiritualist's phantom can be before needing to concentrate and before the tether is broken.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-G-1" id="class-spiritualist-ref-G-1" data-hash-target to="class-spiritualist-G">7</InnerLink></sup></p>
<p><strong>Tengu:</strong> The spiritualist's phantom gains 1/6 of a bonus feat. The phantom must meet all prerequisites of the selected feat.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-H-1" id="class-spiritualist-ref-H-1" data-hash-target to="class-spiritualist-H">8</InnerLink></sup></p>
<p><strong>Wayang:</strong> Add 1/4 to the number of rounds that the spiritualist's incorporeal phantom can be out of sight and line of effect before being sent back to the Ethereal Plane.<sup><InnerLink showBacklink="backlink-class-spiritualist-ref-I-1" id="class-spiritualist-ref-I-1" data-hash-target to="class-spiritualist-I">9</InnerLink></sup></p>
</div>
<h3 id="class-spiritualist-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-spiritualist/drowned_channeler">Drowned Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Phantom; Shared Consciousness; Etheric Tether; Bonded Manifestation; Bonded Senses; Detect Undead; Calm Spirit; See Invisibility; Call Spirit</p><p>When a drowned spirit doomed to a watery grave descends toward the evil of undeath and seeks refuge in a mortal shell, the result is an unusual spiritualist with powers that resonate with the drowned spirit's demise.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/ectoplasmatist">Ectoplasmatist</Link></p><p><strong>Modifies or Replaces:</strong> Etheric Tether; Phantom; Shared Consciousness; Fused Consciousness; Spiritual Bond; Empowered Consciousness; Bonded Manifestation; Phantom Recall; Dual Bond; Spiritual Interference; Greater Spiritual Interference</p><p>Instead of calling upon a phantom from the Ethereal Plane, an ectoplasmatist infuses herself with the mysterious substance called ectoplasm.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/exciter">Exciter</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Emotional Focus; Phantom Recall; Etheric Tether; Bonded Senses; Spiritual Bond; Spiritual Interference; Fused Consciousness; Spiritual Interference</p><p>The phantom that accompanies the exciter fills him with unbridled exultation, as he lets feeling and passion rule and sharpen his mind and body into a glorious fusion.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/fated_guide">Fated Guide</Link></p><p><strong>Modifies or Replaces:</strong> Antagonistic; Bonded Manifestation; See Invisibility; Call Spirit</p><p>Not all phantoms are restless dead escaping the afterlife. On rare occasions, Pharasma returns a judged soul to the Material Plane - linking the spirit to a devout believer - to complete some final task, make amends for a crime, or grant a sharply divided soul a second chance.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/fractured_mind">Fractured Mind</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Detect Undead; Calm Spirit; See Invisibility; Call Spirit</p><p>Most spiritualists harbor the spirits of the deceased in their psyches, but a small number of them - known as fractured minds - draw their powers instead from a fraction of their own souls that resonates with extremely powerful emotions.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/geist_channeler">Geist Channeler</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Emotional Focus; Bonded Manifestation</p><p>Some phantoms retain less of their personalities and memories than others. Though most phantoms maintain some semblance of their former selves, others of their kind, known as geists, came close to being lost forever before they became phantoms.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/grim_apostle">Grim Apostle</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Emotional Focus; Shared Consciousness; Fused Consciousness</p><p>Some devotees of the Four Horsemen can form spiritual manifestations of the daemonic demigods.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/hag_haunted">Hag-Haunted</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Shared Consciousness; Fused Consciousness; Spells; Spiritual Interference; Greater Spiritual Interference</p><p>A hag who dies with a curse on her breath is often anchored to the Ethereal Plane by the power of her hatred - similar to vile and angry mortal souls - and some even claw their way back to the living world through the souls of those they despised or ruined... or those unfortunate souls they birthed. Hag-haunted spiritualists are tethered to these spiteful spirits, anchoring them once again in the world of the living.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/haunted">Haunted</Link></p><p><strong>Modifies or Replaces:</strong> Bonded Manifestation; Dual Bond</p><p>The haunted are a dangerous breed of spellcasters bound to temperamental and unpredictable phantoms that leech power from their spiritualists.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/involutionist">Involutionist</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Phantom; Emotional Focus; Bonded Manifestation; Detect Undead; 11th, 15th, 17th-level uses of Calm Spirit</p><p>Rather than bond with an existing spirit as most Rivethun eventually do, the involutionist creates a spirit from a piece of her own soul.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/necrologist">Necrologist</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Shared Consciousness; Share Spells; 5th, 13th-level slam damage increase; Devotion; Bonded Manifestation; Spiritual Interference; Greater Spiritual Interference</p><p>The vile spiritualists known as necrologists reach toward the Negative Energy Plane and for whatever evil purpose, they bring back malevolent spirits whose passions have turned to vengeance and hate for all life.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/onmyoji">Onmyoji</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Shared Consciousness; Fused Consciousness; Spiritual Interference; Greater Spiritual Interference</p><p>Though most spiritualists are chosen by their phantoms, others deliberately call phantoms to them through years of careful preparation and study in obscure divine traditions.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/phantom_blade">Phantom Blade</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Phantom; Phantom Recall; Spiritual Bond; Dual Bond; Etheric Tether; Shared Consciousness; Fused Consciousness; Empowered Consciousness; Bonded Senses; Bonded Manifestation; Spiritual Interference; Greater Spiritual Interference</p><p>A small selection of spiritualists are connected to spirits of combat and warfare, and manifest a weapon instead of a phantom.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/plague_eater">Plague Eater</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Shared Consciousness; Spiritual Interference; Detect Undead; Calm Spirit; See Invisibility; Fused Consciousness; Greater Spiritual Interference; Call Spirit</p><p>A plague eater bears the weight of many souls within her consciousness, spirits that remember the devastation of disease and seek to protect their host from infections, cleanse others of plague, and use disease itself as a weapon.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/priest_of_the_fallen">Priest of the Fallen</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Shared Consciousness; Bonded Manifestation; Phantom Recall; Fused Consciousness; Dual Bond; Empowered Consciousness</p><p>A priest of the fallen is a spiritualist who channels her land's legends and provides a vessel for mighty heroes to perform heroic acts once more.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/quintessentialist">Quintessentialist</Link></p><p><strong>Modifies or Replaces:</strong> Spellcasting; Phantom</p><p>The quintessentialist learns to project her best self - her exemplar - as an independent being, but in doing so leaves only the weakest and basest aspects behind in her body.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/scourge">Scourge</Link></p><p><strong>Modifies or Replaces:</strong> Spiritual Interference; Devotion; Calm Spirit; Greater Spiritual Interference</p><p>Scourges are students of pain and have a rare connection to tormented and wracked spirits.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/seeker_of_enlightenment">Seeker of Enlightenment</Link></p><p><strong>Modifies or Replaces:</strong> Shared Consciousness; Detect Undead; Calm Spirit; See Invisibility; Fused Consciousness; Call Spirit</p><p>Sometimes a spiritualist is so haunted by a past life's failure to reach enlightenment that the past life is reborn not as a new creature but as a phantom in a spiritualist's consciousness.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/shadow_caller">Shadow Caller</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Emotional Focus; Shared Consciousness; Etheric Tether; Phantom Recall; See Invisibility; Fused Consciousness; Empowered Consciousness</p><p>While most spiritualists form a bond with the remnants of a creature's soul, some explore ways to bind ephemeral shadows to their own souls in exchange for power.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/soul_warden">Soul Warden</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Etheric Tether; Shared Consciousness; Spiritual Interference; Fused Consciousness; Greater Spiritual Interference; Bonded Senses; Phantom Recall; Bonded Manifestation; Dual Bond; Empowered Consciousness</p><p>Soul wardens have helped their phantoms pass on and have become wardens of the soulstream, serving Pharasma and working with psychopomps to protect vulnerable souls from those who seek to capture, corrupt, or devour them.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/totem_spiritualist">Totem Spiritualist</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Shared Consciousness; See Invisibility; Dual Bond</p><p>These specialized spiritualists call upon phantoms that are manifestations of animals and personifications of nature.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/usher_of_lost_souls">Usher of Lost Souls</Link></p><p><strong>Modifies or Replaces:</strong> Bonded Senses; Spiritual Interference; Greater Spiritual Interference; See Invisibility; Spiritual Bond</p><p>Ushers of lost souls are spiritualists who focus on bringing the souls of the dead to their final judgments at the end of the River of Souls.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/ward_spiritualist">Ward Spiritualist</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Spellcasting; Bonded Senses; Phantom Recall; Greater Spiritual Interference</p><p>A ward spiritualist ventures into the wilderness and petitions a kami to help her in her travels, either taking an existing ward with her or becoming the kami's new ward.</p></div>
<div className="archetype"><p><Link to="/arc-spiritualist/zeitgeist_binder">Zeitgeist Binder</Link></p><p><strong>Modifies or Replaces:</strong> Phantom; Detect Undead; Calm Spirit; See Invisibility; Call Spirit; Bonded Senses; Fused Consciousness</p><p>Zeitgeist binders channel the emotional connections of a group of people into a unique phantom that personifies a community.</p></div>
<h3 id="class-spiritualist-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"spiritualist archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Antagonistic"},{"header":"Bonded Manifestation"},{"header":"Bonded Senses"},{"header":"Call Spirit"},{"header":"Calm Spirit"},{"header":"11th-Level Calm Spirit"},{"header":"15th-Level Calm Spirit"},{"header":"19th-Level Calm Spirit"},{"header":"Class Skills"},{"header":"Detect Undead"},{"header":"Devotion"},{"header":"Dual Bond"},{"header":"Emotional Focus"},{"header":"Empowered Consciousness"},{"header":"Etheric Tether"},{"header":"Fused Consciousness"},{"header":"Greater Spiritual Interference"},{"header":"Phantom"},{"header":"Phantom Recall"},{"header":"See Invisibility"},{"header":"Share Spells"},{"header":"Shared Consciousness"},{"header":"Spellcasting"},{"header":"Spiritual Bond"},{"header":"Spiritual Interference"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-spiritualist/Drowned Channeler›",null,null,"X","X","X","X",null,null,null,"X","X",null,null,null,null,"X",null,null,"X",null,"X",null,"X",null,null,null,null],["‹arc-spiritualist/Ectoplasmatist›",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X","X","X","X","X",null,null,"X",null,"X","X",null],["‹arc-spiritualist/Exciter›",null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X","X",null,"X","X",null,null,null,null,"X","X",null],["‹arc-spiritualist/Fated Guide›",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null],["‹arc-spiritualist/Fractured Mind›",null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null],["‹arc-spiritualist/Geist Channeler›",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-spiritualist/Grim Apostle›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,"X",null,null,null,null],["‹arc-spiritualist/Hag-Haunted›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X","X",null,"X",null],["‹arc-spiritualist/Haunted›",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-spiritualist/Involutionist›",null,null,"X",null,null,null,"X","X","X",null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,"X",null,null,null],["‹arc-spiritualist/Necrologist›","X",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X","X",null,null,"X","X",null,null,"X",null],["‹arc-spiritualist/Onmyoji›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,"X","X",null,"X",null],["‹arc-spiritualist/Phantom Blade›",null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,"X","X","X","X","X","X",null,null,"X",null,"X","X","X"],["‹arc-spiritualist/Plague Eater›",null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,"X","X","X",null,"X",null,"X",null,null,"X",null],["‹arc-spiritualist/Priest of the Fallen›",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,"X","X",null,null,"X",null,null,null,null],["‹arc-spiritualist/Quintessentialist›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null],["‹arc-spiritualist/Scourge›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null],["‹arc-spiritualist/Seeker of Enlightenment›",null,null,null,null,"X","X",null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,null,null],["‹arc-spiritualist/Shadow Caller›",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X","X",null,"X","X","X",null,"X",null,null,null,null],["‹arc-spiritualist/Soul Warden›",null,null,"X","X",null,null,null,null,null,null,null,null,"X",null,"X","X","X","X","X","X",null,null,"X",null,null,"X",null],["‹arc-spiritualist/Totem Spiritualist›",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null],["‹arc-spiritualist/Usher of Lost Souls›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,null,null,"X","X",null],["‹arc-spiritualist/Ward Spiritualist›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,"X",null,null,null],["‹arc-spiritualist/Zeitgeist Binder›",null,null,null,"X","X","X",null,null,null,null,"X",null,null,null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-spiritualist-label">Footnotes</h3>
<ol>
<li id="class-spiritualist-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-spiritualist-ref-A-1" data-hash-target to="class-spiritualist-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-B">
<p><Link to="/source/occult_adventures">Occult Adventures pg. 84</Link> <InnerLink id="backlink-class-spiritualist-ref-B-1" data-hash-target to="class-spiritualist-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-spiritualist-ref-B-2" data-hash-target to="class-spiritualist-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-spiritualist-C">
<p><Link to="/source/horror_adventures">Horror Adventures pg. 38</Link> <InnerLink id="backlink-class-spiritualist-ref-C-1" data-hash-target to="class-spiritualist-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-D">
<p>Occult Adventures pg. 85 <InnerLink id="backlink-class-spiritualist-ref-D-1" data-hash-target to="class-spiritualist-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-class-spiritualist-ref-D-2" data-hash-target to="class-spiritualist-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-spiritualist-ref-D-3" data-hash-target to="class-spiritualist-ref-D-3" aria-label="Back to reference D-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-spiritualist-ref-D-4" data-hash-target to="class-spiritualist-ref-D-4" aria-label="Back to reference D-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-spiritualist-ref-D-5" data-hash-target to="class-spiritualist-ref-D-5" aria-label="Back to reference D-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="class-spiritualist-E">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-spiritualist-ref-E-1" data-hash-target to="class-spiritualist-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-F">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-spiritualist-ref-F-1" data-hash-target to="class-spiritualist-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-G">
<p>Plane-Hopper's Handbook pg. 23 <InnerLink id="backlink-class-spiritualist-ref-G-1" data-hash-target to="class-spiritualist-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-H">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-spiritualist-ref-H-1" data-hash-target to="class-spiritualist-ref-H-1" aria-label="Back to reference H-1">↩</InnerLink></p>
</li>
<li id="class-spiritualist-I">
<p><Link to="/source/blood_of_shadows">Blood of Shadows pg. 11</Link> <InnerLink id="backlink-class-spiritualist-ref-I-1" data-hash-target to="class-spiritualist-ref-I-1" aria-label="Back to reference I-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _swashbuckler = {hasJL:true,title: "Swashbuckler", jsx: <><div className="jumpList" id="class-swashbuckler-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-swashbuckler-panache-ex">Panache</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-deeds">Deeds</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-swashbuckler-finesse-ex">Swashbuckler Finesse</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-charmed-life-ex">Charmed Life</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-nimble-ex">Nimble</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-bonus-feats">Bonus Feats</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-swashbuckler-weapon-training-ex">Swashbuckler Weapon Training</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-grit-and-panache">Grit and Panache</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-swashbuckler-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-swashbuckler-swashbuckler">Swashbuckler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 56</Link></p>
<p>Whereas many warriors brave battle encased in suits of armor and wielding large and powerful weapons, swashbucklers rely on speed, agility, and panache. Swashbucklers dart in and out of the fray, wearing down opponents with lunges and feints, all while foiling the powerful attacks against them with a flick of the wrist and a flash of the blade. Their deft parries and fatal ripostes are carnage elevated to an art form. Some may be arrogant and devil-may-care, but behind this veneer lie people deeply dedicated to their craft. Those of smaller races are particularly driven to prove that the right mix of discipline and daring is the perfect counter to size and strength, and enjoy nothing more than taking down lumbering brutes and bullies.</p>
<p><strong>Role:</strong> Combining fancy footwork with quick and precise lunges, swashbucklers dart in and out of battle, harassing and thwarting their opponents. These fast and agile combatants serve as protectors for spellcasters and flank mates for rogues and slayers, while waiting for the opportunity to show panache and score the killing blow on some lumbering hulk. Swashbucklers often face death with wry humor, mocking it with jabbing wit.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d10</td></tr><tr><th scope="row">Parent Class(es)</th><td colSpan={2}><Link to="/class/fighter">Fighter</Link> and <Link to="/class/gunslinger">gunslinger</Link>.</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>4 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-swashbuckler-class-features">Class Features</h3>
<ScrollContainer id="class-swashbuckler--table-0"><table>
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
<td>+0</td>
<td>+2</td>
<td>+0</td>
<td>Deeds, panache, swashbuckler finesse</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>+0</td>
<td>+3</td>
<td>+0</td>
<td>Charmed life 3/day</td>
</tr>
<tr>
<td>3rd</td>
<td>+3</td>
<td>+1</td>
<td>+3</td>
<td>+1</td>
<td>Deeds, nimble +1</td>
</tr>
<tr>
<td>4th</td>
<td>+4</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>5th</td>
<td>+5</td>
<td>+1</td>
<td>+4</td>
<td>+1</td>
<td>Swashbuckler weapon training +1</td>
</tr>
<tr>
<td>6th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+5</td>
<td>+2</td>
<td>Charmed life 4/day</td>
</tr>
<tr>
<td>7th</td>
<td>+7/+2</td>
<td>+2</td>
<td>+5</td>
<td>+2</td>
<td>Deeds, nimble +2</td>
</tr>
<tr>
<td>8th</td>
<td>+8/+3</td>
<td>+2</td>
<td>+6</td>
<td>+2</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>9th</td>
<td>+9/+4</td>
<td>+3</td>
<td>+6</td>
<td>+3</td>
<td>Swashbuckler weapon training +2</td>
</tr>
<tr>
<td>10th</td>
<td>+10/+5</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Charmed life 5/day</td>
</tr>
<tr>
<td>11th</td>
<td>+11/+6/+1</td>
<td>+3</td>
<td>+7</td>
<td>+3</td>
<td>Deeds, nimble +3</td>
</tr>
<tr>
<td>12th</td>
<td>+12/+7/+2</td>
<td>+4</td>
<td>+8</td>
<td>+4</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>13th</td>
<td>+13/+8/+3</td>
<td>+4</td>
<td>+8</td>
<td>+4</td>
<td>Swashbuckler weapon training +3</td>
</tr>
<tr>
<td>14th</td>
<td>+14/+9/+4</td>
<td>+4</td>
<td>+9</td>
<td>+4</td>
<td>Charmed life 6/day</td>
</tr>
<tr>
<td>15th</td>
<td>+15/+10/+5</td>
<td>+5</td>
<td>+9</td>
<td>+5</td>
<td>Deeds, nimble +4</td>
</tr>
<tr>
<td>16th</td>
<td>+16/+11/+6/+1</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Bonus feat</td>
</tr>
<tr>
<td>17th</td>
<td>+17/+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+5</td>
<td>Swashbuckler weapon training +4</td>
</tr>
<tr>
<td>18th</td>
<td>+18/+13/+8/+3</td>
<td>+6</td>
<td>+11</td>
<td>+6</td>
<td>Charmed life 7/day</td>
</tr>
<tr>
<td>19th</td>
<td>+19/+14/+9/+4</td>
<td>+6</td>
<td>+11</td>
<td>+6</td>
<td>Deeds, nimble +5</td>
</tr>
<tr>
<td>20th</td>
<td>+20/+15/+10/+5</td>
<td>+6</td>
<td>+12</td>
<td>+6</td>
<td>Bonus feat, swashbuckler weapon mastery</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light armor</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se"><Link to="/eq-armor/buckler">Bucklers</Link> only</td></tr></tbody></table>
<Ability id="class-swashbuckler-panache-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="class-swashbuckler-panache-ex" flavor="More than just a lightly armored warrior, a swashbuckler is a daring combatant. She fights with panache: a fluctuating measure of a swashbuckler's ability to perform amazing actions in combat.">Panache (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">At the start of each day, you gain a number of panache points equal to your Charisma modifier (minimum 1). Your panache goes up or down throughout the day, but usually cannot go higher than your Charisma modifier (minimum 1), though feats and magic items can affect this maximum. You spend panache to accomplish deeds, and regain panache in the following ways.</Pair>
</Ability>
<Ability id="class-swashbuckler-critical-hit-with-a-light-or-one-handed-piercing-melee-weapon" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="class-swashbuckler-critical-hit-with-a-light-or-one-handed-piercing-melee-weapon">Critical Hit with a Light or One-Handed Piercing Melee Weapon</Pair>
<Pair title="Passive Ability">Each time you confirm a critical hit with a light or one-handed piercing melee weapon, you regain 1 panache point. Confirming a critical hit on a <Link to="/misc/helpless">helpless</Link> or unaware creature or a creature that has fewer Hit Dice than <Link to="/misc/half">half</Link> your character level doesn't restore panache.</Pair>
</Ability>
<Ability id="class-swashbuckler-killing-blow-with-a-light-or-one-handed-piercing-melee-weapon" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="class-swashbuckler-killing-blow-with-a-light-or-one-handed-piercing-melee-weapon">Killing Blow with a Light or One-Handed Piercing Melee Weapon</Pair>
<Pair title="Passive Ability">When you reduce a creature to 0 or fewer hit points with a light or one-handed piercing melee weapon attack while in combat, you regain 1 panache point. Destroying an unattended object, reducing a helpless or unaware creature to 0 or fewer hit points, or reducing a creature that has fewer Hit Dice than half your character level to 0 or fewer hit points doesn't restore any panache.</Pair>
</Ability>
<Ability id="class-swashbuckler-deeds" icon={["stairs-goal"]}>
<Pair single id="class-swashbuckler-deeds" flavor="Swashbucklers spend panache points to accomplish deeds.">Deeds</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Most <Link to="/ability/swashbuckler_deeds">deeds</Link> grant you a momentary bonus or effect, but some provide longer-lasting effects. Some deeds remain in effect while you have at least 1 panache point, but do not require expending panache to be maintained. You can only perform deeds of your level or lower. Unless otherwise noted, a deed can be performed multiple successive times, as long as you have or spend the required number of panache points to perform the deed.</Pair>
</Ability>
<aside><p>Swashbucklers may optionally select a <Link to="/ability/swashbuckler_renowned_deeds">renowned deed</Link> at 1st, 3rd, 7th and 11th level. Each of these deeds replace two other deeds.</p>
</aside><Ability id="class-swashbuckler-swashbuckler-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="class-swashbuckler-swashbuckler-finesse-ex">Swashbuckler Finesse (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain the benefits of the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat with light or one-handed piercing melee weapons. This ability counts as having the Weapon Finesse feat for purposes of meeting feat prerequisites.</Pair>
<Pair title="Passive Ability">You can use your Charisma score in place of Intelligence as a prerequisite for combat feats.</Pair>
</Ability>
<Ability id="class-swashbuckler-charmed-life-ex" icon={["armor-upgrade"]}>
<Pair single id="class-swashbuckler-charmed-life-ex" flavor="A swashbuckler gains a knack for getting out of trouble.">Charmed Life (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">3 times a day.</Pair>
<Pair title="Immediate Action">Before attempting a saving throw, you can add your Charisma modifier to the result of the save. You must choose to do this before the roll is made.</Pair>
<Pair title="At 6th Level">You can use this 4 times a day.</Pair>
<Pair title="At 10th Level">You can use this 5 times a day.</Pair>
<Pair title="At 14th Level">You can use this 6 times a day.</Pair>
<Pair title="At 18th Level">You can use this 7 times a day.</Pair>
</Ability>
<Ability id="class-swashbuckler-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="class-swashbuckler-nimble-ex">Nimble (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You gain a +1 dodge bonus to AC while wearing light or no armor. Anything that causes you to lose your Dexterity bonus to AC also causes you to lose this dodge bonus.</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 15th Level">The bonus becomes +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
</Ability>
<Ability id="class-swashbuckler-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="class-swashbuckler-bonus-feats">Bonus Feats:</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain a bonus feat in addition to those gained from normal advancement. These bonus feats must be selected from those listed as <Link to="/main/combat_feat">combat feats</Link>. Swashbuckler levels are considered fighter levels for the purpose of meeting combat feat prerequisites.</Pair>
<Pair title="Ability">In addition, you can choose to learn a new bonus feat in place of a bonus feat you have already learned. In effect, you lose the bonus feat in exchange for the new one. The old feat cannot be one that was used as a prerequisite for another feat, prestige class, or other ability.</Pair>
<Pair title="At 8th Level">You gain a new bonus feat and can swap out a previous feat.</Pair>
<Pair title="At 12th Level">You gain a new bonus feat and can swap out a previous feat.</Pair>
<Pair title="At 16th Level">You gain a new bonus feat and can swap out a previous feat.</Pair>
<Pair title="At 20th Level">You gain a new bonus feat and can swap out a previous feat.</Pair>
<Pair title="Special">You can only change one feat at any given level, and must choose whether or not to swap the feat at the time you gain a new bonus feat for the level.</Pair>
</Ability>
<aside><p>Optionally, you can pick a <Link to="/ability/swashbuckler_dares">dare</Link> instead of a bonus feat. These special abilities only activate when you have 0 panache points.</p>
</aside><Ability id="class-swashbuckler-swashbuckler-weapon-training-ex" icon={["mailed-fist"]}>
<Pair single id="class-swashbuckler-swashbuckler-weapon-training-ex">Swashbuckler Weapon Training (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">You gain a +1 bonus on attack and damage rolls with one-handed or light piercing melee weapons. While wielding such a weapon, you gain the benefit of the <Link to="/feat/improved_critical">Improved Critical</Link> feat.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="class-swashbuckler-swashbuckler-weapon-mastery-ex" icon={["mailed-fist"]}>
<Pair single id="class-swashbuckler-swashbuckler-weapon-mastery-ex">Swashbuckler Weapon Mastery (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When you threaten a critical hit with a light or one-handed piercing melee weapon, that critical is automatically confirmed. Furthermore, the critical modifiers of such weapons increase by 1 (&times;2 becomes &times;3, and so on).</Pair>
</Ability>
<h3 id="class-swashbuckler-grit-and-panache" data-hash-target>Grit and Panache</h3>
<p>The <Link to="/class/gunslinger">gunslinger's</Link> grit and the swashbuckler's panache represent two paths to gain access to the same heroic pool. Characters with both grit and panache class features combine the two resources together into a larger pool of both grit points and panache points.</p>
<p>For purposes of feat prerequisites, a character with the panache class feature satisfies the prerequisites as if she were a grit user, and vice versa. Swashbuckler levels stack with gunslinger levels for the purpose of satisfying <Link to="/feat/signature_deed">Signature Deed's</Link> level requirement. For feats, magic items, and other effects, a panache user can spend and gain panache points in place of grit points, and vice versa.</p>
<h3 id="class-swashbuckler-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-swashbuckler--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Incredible Luck (Ex)</td><td>At 20th level, the swashbuckler has had so many close calls that she barely notices them anymore. The swashbuckler gains three additional uses of charmed life and can activate the ability as a <strong className="hl">free action</strong>, even outside of her turn.</td></tr>
<tr><td>Old Dog, New Tricks (Ex)</td><td>At 20th level, the character shows that a true warrior always has one more surprise the enemy hasn't seen. The character gains four <Link to="/main/combat_feat">combat feats</Link>. This capstone is available to characters of any class that gains at least four bonus combat feats.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-swashbuckler-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Dwarf:</strong> Add 1/4 to the swashbuckler's effective class level to determine the extra damage she deals because of the precise strike deed when wielding a light pick or a heavy pick. If the swashbuckler has the Slashing Grace feat or another similar effect, she can treat the battleaxe or handaxe as a one-handed piercing melee weapon, and she gains this benefit when wielding the appropriate weapon for the feat as well.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-A-1" id="class-swashbuckler-ref-A-1" data-hash-target to="class-swashbuckler-A">1</InnerLink></sup></p>
<p><strong>Elf:</strong> Increase the total number of points in the swashbuckler's panache pool by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-B-1" id="class-swashbuckler-ref-B-1" data-hash-target to="class-swashbuckler-B">2</InnerLink></sup></p>
<p><strong>Gnome:</strong> Increase the number of times per day the swashbuckler can use charmed life by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-B-2" id="class-swashbuckler-ref-B-2" data-hash-target to="class-swashbuckler-B">2</InnerLink></sup></p>
<p><strong>Grippli:</strong> Add 1/2 to the swashbuckler's Acrobatics, Climb, Escape Artist, Fly, Ride, and Swim checks when using the derring-do deed.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-C-1" id="class-swashbuckler-ref-C-1" data-hash-target to="class-swashbuckler-C">3</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Increase the number of times per day the swashbuckler can use charmed life by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-B-3" id="class-swashbuckler-ref-B-3" data-hash-target to="class-swashbuckler-B">2</InnerLink></sup></p>
<p><strong>Halfling:</strong> Increase the number of times the swashbuckler can use charmed life by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-B-4" id="class-swashbuckler-ref-B-4" data-hash-target to="class-swashbuckler-B">2</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Gain a +1/3 bonus on all critical hit confirmation rolls made while using the precise strike deed (maximum bonus of +5). This bonus doesn't stack with those gained through <Link to="/feat/critical_focus">Critical Focus</Link> and similar effects.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-D-1" id="class-swashbuckler-ref-D-1" data-hash-target to="class-swashbuckler-D">4</InnerLink></sup></p>
<p><strong>Human:</strong> Increase the total number of points in the swashbuckler's panache pool by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-D-2" id="class-swashbuckler-ref-D-2" data-hash-target to="class-swashbuckler-D">4</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-E-1" id="class-swashbuckler-ref-E-1" data-hash-target to="class-swashbuckler-E">5</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Increase the total number of points in the swashbuckler's panache pool by 1/4.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-E-2" id="class-swashbuckler-ref-E-2" data-hash-target to="class-swashbuckler-E">5</InnerLink></sup></p>
<p><strong>Ratfolk:</strong> Add 1/4 to the AC bonus provided by cover or improved cover.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-F-1" id="class-swashbuckler-ref-F-1" data-hash-target to="class-swashbuckler-F">6</InnerLink></sup></p>
<p><strong>Tengu:</strong> Add 1/2 to the swashbuckler's Acrobatics, Climb, Escape Artist, Fly, Ride, and Swim checks when using the derring-do deed.<sup><InnerLink showBacklink="backlink-class-swashbuckler-ref-G-1" id="class-swashbuckler-ref-G-1" data-hash-target to="class-swashbuckler-G">7</InnerLink></sup></p>
</div>
<h3 id="class-swashbuckler-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-swashbuckler/arrow_champion">Arrow Champion</Link></p><p><strong>Modifies or Replaces:</strong> Panache; Opportune Parry and Riposte; Precise Strike; Swashbuckler Initiative; Swashbuckler Weapon Training; Swashbuckler Weapon Mastery</p><p>Arrow champions combine a swashbuckler's agile style of combat with mastery over the bow</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/azatariel">Azatariel</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Menacing Swordplay; Precise Strike; Targeted Strike; Bleeding Wound; Charmed Life; Nimble; Bonus Feats</p><p>Azatariels are the champions of Elysium, dedicated to spreading its unpredictable whimsy and capricious goodness across the planes.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/courser">Courser</Link></p><p><strong>Modifies or Replaces:</strong> Opportune Parry and Riposte; Nimble; Menacing Swordplay; Superior Feint; Bleeding Wound</p><p>Coursers move with grace and ease, racing across rooftops, dashing up walls, and clearing vast gaps between buildings.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/daring_infiltrator">Daring Infiltrator</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Bonus Feat; Swashbuckler Initiative; Menacing Swordplay; Bleeding Wound</p><p>Not known for their flashy entrances or for standing out in a crowd, a daring infiltrator uses stealth, disguise, and ruthless guile to pursue her goals.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/dashing_thief">Dashing Thief</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Derring-Do; Swashbuckler's Edge; Panache; Bonus Feats; Menacing Swordplay; Dizzying Defense</p><p>The dashing thief relies on swift swordplay, dazzling charm, and spirited courage to commit audacious acts of thievery.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/flying_blade">Flying Blade</Link></p><p><strong>Modifies or Replaces:</strong> Panache; Dodging Panache; Kip-Up; Menacing Swordplay; Targeted Strike; Bleeding Wound; Perfect Thrust; Swashbuckler Weapon Training; Swashbuckler Weapon Mastery</p><p>While most swashbucklers prefer their battles up close, others prefer dealing death from a distance.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/guiding_blade">Guiding Blade</Link></p><p><strong>Modifies or Replaces:</strong> Bonus Feats; 1st, 7th, 15th-level Deeds; Charmed Life; Nimble; Kip-up</p><p>Instead of parrying attacks against her, a guiding blade redirects her enemies' ire away from her allies, interfering with enemies who attack her allies, whether that attack comes by blade or by spell.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/inspired_blade">Inspired Blade</Link></p><p><strong>Modifies or Replaces:</strong> Panache; Swashbuckler Finesse; Bleeding Wound; Swashbuckler Weapon Training; Swashbuckler Weapon Mastery</p><p>An inspired blade is both a force of personality and a sage of swordplay dedicated to the perfection of combat with the rapier.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/mouser">Mouser</Link></p><p><strong>Modifies or Replaces:</strong> Opportune Parry and Riposte; Menacing Swordplay; Targeted Strike; Bleeding Wound</p><p>In the hands of a trained warrior, a well-sharpened blade is deadly regardless of size. A mouser moves in close, using her size and skill as an advantage.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/musketeer">Musketeer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Swashbuckler Finesse; Dodging Panache</p><p>A number of organizations and kingdoms search for warriors who are brave (or foolish) enough to wield firearms on the battlefield.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/mysterious_avenger">Mysterious Avenger</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Class Skills; Weapon/Armor Proficiencies; Swashbuckler Finesse; Nimble; 4th-level Bonus Feat; Swashbuckler Weapon Training</p><p>While some swashbucklers fight for queen and country, and others for coin, glory, or just the enhancement of their own reputations, the mysterious avenger fights directly for a cause.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/noble_fencer">Noble Fencer</Link></p><p><strong>Modifies or Replaces:</strong> Dodging Panache; Superior Feint; Subtle Blade; Charmed Life</p><p>Noble fencers use their quick wits and panache in both physical and social confrontations, and they rely on their training and discipline to emerge victorious, rather than merely trusting to luck.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/okayo_corsair">Okayo Corsair</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Swashbuckler Finesse; Panache; Menacing Swordplay; Superior Feint; Bleeding Wound; Dizzying Defense; Bonus Feats</p><p>An Okayo corsair practices a unique acrobatic martial art that draws inspiration from both the mysticism of monastic combat traditions and the flair of a swashbuckler.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/picaroon">Picaroon</Link></p><p><strong>Modifies or Replaces:</strong> Weapon Proficiencies; Panache; Opportune Parry and Riposte; Kip-Up; Superior Feint; Bleeding Wound; Swashbuckler Finesse</p><p>While some swashbucklers take pride in their ability to wear down an opponent with great skill at arms and clever positioning, there are those who use firearms to get in close and hit hard.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/rondelero_swashbuckler">Rondelero Swashbuckler</Link></p><p><strong>Modifies or Replaces:</strong> Derring-Do; Kip-Up; Bleeding Wound; Perfect Thrust; Charmed Life</p><p>Rondelero swashbucklers are Taldan specialists in an aggressive, lightly armored fighting style that utilizes the falcata and buckler.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/rostland_bravo">Rostland Bravo</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Armor Proficiency; Menacing Swordplay; Superior Feint; Bleeding Wound; Swashbuckler's Edge</p><p>While some duelists favor more technical approaches, others study flashier maneuvers, wielding the curved blade with artful flair. Disdainfully called "bravos" by classically trained rivals, students of this approach have claimed the label with pride.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/shackles_corsair">Shackles Corsair</Link></p><p><strong>Modifies or Replaces:</strong> Nimble; Swashbuckler Initiative; Targeted Strike</p><p>A Shackles corsair's debonair charm and style make her a paradoxical celebrity even among the nations whose ships she plunders.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/veiled_blade">Veiled Blade</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Opportune Parry and Riposte; Menacing Swordplay; Swashbuckler's Grace; Swashbuckler's Edge</p><p>Veiled blades specialize in subtlety, not through clandestine sneaking but simply by appearing to be someone harmless and unarmed.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/whirling_dervish">Whirling Dervish</Link></p><p><strong>Modifies or Replaces:</strong> Swashbuckler Finesse; Panache; Superior Feint; Targeted Strike; Bleeding Wound; Deadly Stab</p><p>In Qadira and throughout the Padishah Empire, Sarenrae's worshipers praise the Dawnflower through dance. Her more warlike followers adapted these dances into graceful martial forms, and their swashbuckling style is feared throughout the Inner Sea region and beyond for its ability to devastate foes with a scimitar through motion and agility regardless of strength of arms.</p></div>
<div className="archetype"><p><Link to="/arc-swashbuckler/wildstrider">Wildstrider</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Dodging Panache; Derring-Do; Swashbuckler's Edge; Kip-Up; Subtle Blade</p><p>Most swashbucklers call cities their home, but some prefer deserts, marshlands, mountains, or woods, where the rough terrain grants them an advantage, and have little interest in the comforts of an urban lifestyle.</p></div>
<h3 id="class-swashbuckler-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"swashbuckler archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Bleeding Wound"},{"header":"Bonus Feats"},{"header":"4th-level Bonus Feat"},{"header":"Charmed Life"},{"header":"Class Skills"},{"header":"Deadly Stab"},{"header":"1st, 7th, 15th-level Deeds"},{"header":"Derring-Do"},{"header":"Dizzying Defense"},{"header":"Dodging Panache"},{"header":"Kip-Up"},{"header":"Menacing Swordplay"},{"header":"Nimble"},{"header":"Opportune Parry and Riposte"},{"header":"Panache"},{"header":"Perfect Thrust"},{"header":"Precise Strike"},{"header":"Subtle Blade"},{"header":"Superior Feint"},{"header":"Swashbuckler Finesse"},{"header":"Swashbuckler Initiative"},{"header":"Swashbuckler Weapon Training"},{"header":"Swashbuckler Weapon Mastery"},{"header":"Swashbuckler's Edge"},{"header":"Swashbuckler's Grace"},{"header":"Targeted Strike"},{"header":"Weapon Proficiency"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-swashbuckler/Arrow Champion›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,"X",null,null,null,"X","X","X",null,null,null,null,null],["‹arc-swashbuckler/Azatariel›","X",null,"X","X",null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null],["‹arc-swashbuckler/Courser›",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-swashbuckler/Daring Infiltrator›",null,null,"X","X",null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null],["‹arc-swashbuckler/Dashing Thief›",null,null,null,"X",null,null,"X",null,null,"X","X",null,null,"X",null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null],["‹arc-swashbuckler/Flying Blade›",null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null,"X","X",null,null,null,null,null,"X","X",null,null,"X",null,null],["‹arc-swashbuckler/Guiding Blade›",null,null,null,"X",null,"X",null,null,"X",null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-swashbuckler/Inspired Blade›",null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,"X","X",null,null,null,null,null],["‹arc-swashbuckler/Mouser›",null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X",null,null],["‹arc-swashbuckler/Musketeer›",null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null],["‹arc-swashbuckler/Mysterious Avenger›","X",null,null,null,"X",null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,"X"],["‹arc-swashbuckler/Noble Fencer›",null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null],["‹arc-swashbuckler/Okayo Corsair›",null,null,"X","X",null,null,null,null,null,null,"X",null,null,"X",null,null,"X",null,null,null,"X","X",null,null,null,null,null,null,null,"X"],["‹arc-swashbuckler/Picaroon›",null,null,"X",null,null,null,null,null,null,null,null,null,"X",null,null,"X","X",null,null,null,"X","X",null,null,null,null,null,null,"X",null],["‹arc-swashbuckler/Rondelero Swashbuckler›",null,null,"X",null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-swashbuckler/Rostland Bravo›",null,"X","X",null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,null,null,"X",null,null,null,null],["‹arc-swashbuckler/Shackles Corsair›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,"X",null,null,null,null,"X",null,null],["‹arc-swashbuckler/Veiled Blade›",null,null,null,null,null,null,"X",null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,"X","X",null,null,null],["‹arc-swashbuckler/Whirling Dervish›",null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,"X","X",null,null,null,null,null,"X",null,null],["‹arc-swashbuckler/Wildstrider›",null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,null,null,null,null,null,"X",null,null,null,null,null,"X",null,null,null,null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-swashbuckler-label">Footnotes</h3>
<ol>
<li id="class-swashbuckler-A">
<p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 69</Link> <InnerLink id="backlink-class-swashbuckler-ref-A-1" data-hash-target to="class-swashbuckler-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-swashbuckler-B">
<p>Advanced Class Guide pg. 70 <InnerLink id="backlink-class-swashbuckler-ref-B-1" data-hash-target to="class-swashbuckler-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-swashbuckler-ref-B-2" data-hash-target to="class-swashbuckler-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-swashbuckler-ref-B-3" data-hash-target to="class-swashbuckler-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-swashbuckler-ref-B-4" data-hash-target to="class-swashbuckler-ref-B-4" aria-label="Back to reference B-4">↩<sup>4</sup></InnerLink></p>
</li>
<li id="class-swashbuckler-C">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 8</Link> <InnerLink id="backlink-class-swashbuckler-ref-C-1" data-hash-target to="class-swashbuckler-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink></p>
</li>
<li id="class-swashbuckler-D">
<p>Advanced Class Guide pg. 71 <InnerLink id="backlink-class-swashbuckler-ref-D-1" data-hash-target to="class-swashbuckler-ref-D-1" aria-label="Back to reference D-1">↩</InnerLink> <InnerLink id="backlink-class-swashbuckler-ref-D-2" data-hash-target to="class-swashbuckler-ref-D-2" aria-label="Back to reference D-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-swashbuckler-E">
<p>Blood of the Beast pg. 12 <InnerLink id="backlink-class-swashbuckler-ref-E-1" data-hash-target to="class-swashbuckler-ref-E-1" aria-label="Back to reference E-1">↩</InnerLink> <InnerLink id="backlink-class-swashbuckler-ref-E-2" data-hash-target to="class-swashbuckler-ref-E-2" aria-label="Back to reference E-2">↩<sup>2</sup></InnerLink></p>
</li>
<li id="class-swashbuckler-F">
<p>Blood of the Beast pg. 20 <InnerLink id="backlink-class-swashbuckler-ref-F-1" data-hash-target to="class-swashbuckler-ref-F-1" aria-label="Back to reference F-1">↩</InnerLink></p>
</li>
<li id="class-swashbuckler-G">
<p>Blood of the Beast pg. 24 <InnerLink id="backlink-class-swashbuckler-ref-G-1" data-hash-target to="class-swashbuckler-ref-G-1" aria-label="Back to reference G-1">↩</InnerLink></p>
</li>
</ol>
</section>
</>};
const _vigilante = {hasJL:true,title: "Vigilante", jsx: <><div className="jumpList" id="class-vigilante-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="class-vigilante-dual-identity-ex">Dual Identity</InnerLink></li><li><InnerLink toTop to="class-vigilante-seamless-guise-ex">Seamless Guise</InnerLink></li><li><InnerLink toTop to="class-vigilante-social-talent">Social Talent</InnerLink></li><li><InnerLink toTop to="class-vigilante-vigilante-specialization-ex">Vigilante Specialization</InnerLink></li><li><InnerLink toTop to="class-vigilante-vigilante-talent">Vigilante Talent</InnerLink></li><li><InnerLink toTop to="class-vigilante-unshakable-ex">Unshakable</InnerLink></li><li><InnerLink toTop to="class-vigilante-startling-appearance-ex">Startling Appearance</InnerLink></li><li><InnerLink toTop to="class-vigilante-frightening-appearance-ex">Other Abilities</InnerLink></li><li><InnerLink toTop to="class-vigilante-alternate-capstones">Alternate Capstones</InnerLink></li><li><InnerLink toTop to="class-vigilante-favored-class-bonuses">Favored Class Bonuses</InnerLink></li><li><InnerLink toTop to="class-vigilante-archetypes">Archetypes</InnerLink></li><li><InnerLink toTop to="class-vigilante-archetypes-by-feature">Archetypes by Feature</InnerLink></li></ul></div><h2 id="class-vigilante-vigilante">Vigilante</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 9</Link></p>
<p>Life can be unfair. Think of the starving peasants forced to toil for the local baron or the common laborers tasked with building the king's newest palace for a mere handful of copper pieces each week. There are those who see these injustices and do nothing. There are those who are willing to reap the rewards obtained through the suffering of others. Then there are those who see inequality and find themselves driven to take action, outside the law if necessary. These vigilantes operate in plain sight, hiding behind respectable personas by day, but donning alternate guises by night to right the wrongs they see all around them.</p>
<p>Not all vigilantes are out to make the world a better place. Some criminals hide behind the pretense of being ordinary folk, only to become terrors in the shadows, stealing and killing to fulfill some dark agenda. In either case, the vigilante is a character of two natures - the face that everyone knows and the mask that inspires fear.</p>
<p><strong>Role:</strong> A vigilante can take on many tasks within a group. Most are skilled at negotiating delicate social situations and courtly intrigue, but they can also serve as stealthy spies or even brutish warriors in dangerous environments.</p>
<table className="class"><tbody><tr><th scope="row" className="nw">Alignment</th><td colSpan={2} className="ne"><div className="colFlex"><span>Any</span><table className="basic alignment"><tbody><tr><td data-lit>LG</td><td data-lit>LN</td><td data-lit>LE</td></tr><tr><td data-lit>NG</td><td data-lit>N</td><td data-lit>NE</td></tr><tr><td data-lit>CG</td><td data-lit>CN</td><td data-lit>CE</td></tr></tbody></table></div></td></tr><tr><th scope="row">Hit Die</th><td colSpan={2}>d8</td></tr><tr><th scope="row">Starting Wealth</th><td colSpan={2}>5d6 &times; 10 gp (average 175 gp)</td></tr><tr><th scope="row">Skill Points per Level</th><td colSpan={2}>6 + Int modifier</td></tr><tr><th scope="row" rowSpan={5} className="sw">Class Skills</th><td><Link to="/skill/climb">Climb</Link>, <Link to="/skill/swim">Swim</Link></td><td className="c">(STR)</td></tr><tr><td><Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/disable_device">Disable Device</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link></td><td className="c">(DEX)</td></tr><tr><td><Link to="/skill/appraise">Appraise</Link>, <Link to="/skill/craft_any">Craft (any)</Link>, <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link>, <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link></td><td className="c">(INT)</td></tr><tr><td><Link to="/skill/perception">Perception</Link>, <Link to="/skill/profession_any">Profession (any)</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/survival">Survival</Link></td><td className="c">(WIS)</td></tr><tr><td><Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perform_any">Perform (any)</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link></td><td className="c se">(CHA)</td></tr></tbody></table>
<h3 id="class-vigilante-class-features">Class Features</h3>
<ScrollContainer id="class-vigilante--table-0"><table>
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
<td>+0</td>
<td>+0</td>
<td>+2</td>
<td>+2</td>
<td>Dual identity, seamless guise, social talent, vigilante specialization</td>
</tr>
<tr>
<td>2nd</td>
<td>+1</td>
<td>+0</td>
<td>+3</td>
<td>+3</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>3rd</td>
<td>+2</td>
<td>+1</td>
<td>+3</td>
<td>+3</td>
<td>Social talent, unshakable</td>
</tr>
<tr>
<td>4th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>5th</td>
<td>+3</td>
<td>+1</td>
<td>+4</td>
<td>+4</td>
<td>Social talent, startling appearance</td>
</tr>
<tr>
<td>6th</td>
<td>+4</td>
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>7th</td>
<td>+5</td>
<td>+2</td>
<td>+5</td>
<td>+5</td>
<td>Social talent</td>
</tr>
<tr>
<td>8th</td>
<td>+6/+1</td>
<td>+2</td>
<td>+6</td>
<td>+6</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>9th</td>
<td>+6/+1</td>
<td>+3</td>
<td>+6</td>
<td>+6</td>
<td>Social talent</td>
</tr>
<tr>
<td>10th</td>
<td>+7/+2</td>
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>11th</td>
<td>+8/+3</td>
<td>+3</td>
<td>+7</td>
<td>+7</td>
<td>Frightening appearance, social talent</td>
</tr>
<tr>
<td>12th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>13th</td>
<td>+9/+4</td>
<td>+4</td>
<td>+8</td>
<td>+8</td>
<td>Social talent</td>
</tr>
<tr>
<td>14th</td>
<td>+10/+5</td>
<td>+4</td>
<td>+9</td>
<td>+9</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>15th</td>
<td>+11/+6/+1</td>
<td>+5</td>
<td>+9</td>
<td>+9</td>
<td>Social talent</td>
</tr>
<tr>
<td>16th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>17th</td>
<td>+12/+7/+2</td>
<td>+5</td>
<td>+10</td>
<td>+10</td>
<td>Social talent, stunning appearance</td>
</tr>
<tr>
<td>18th</td>
<td>+13/+8/+3</td>
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Vigilante talent</td>
</tr>
<tr>
<td>19th</td>
<td>+14/+9/+4</td>
<td>+6</td>
<td>+11</td>
<td>+11</td>
<td>Social talent</td>
</tr>
<tr>
<td>20th</td>
<td>+15/+10/+5</td>
<td>+6</td>
<td>+12</td>
<td>+12</td>
<td>Vengeance strike, vigilante talent</td>
</tr>
</tbody></table></ScrollContainer>
<table className="class p"><thead><tr><th className="nw ne ion-text-center" scope="col" colSpan={3}>Weapon and Armor Proficiencies</th></tr></thead><tbody><tr><th scope="row" rowSpan={2}>Weapons</th><td colSpan={2}>All <Link to="/main/equipment_weapons_simple">simple weapons</Link></td></tr><tr><td colSpan={2}>All <Link to="/main/equipment_weapons_martial">martial weapons</Link></td></tr><tr><th>Armor?</th><td colSpan={2}>Light and Medium armors</td></tr><tr><th className="sw">Shields?</th><td colSpan={2} className="se">Yes, except tower shields</td></tr></tbody></table>
<Ability id="class-vigilante-dual-identity-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="class-vigilante-dual-identity-ex">Dual Identity (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>You hide your true identity, allowing you to move about social circles and nobility without carrying the stigma of your ruthless actions. In effect, you have two identities: one is a polite member of society while the other is a skilled and cunning warrior. To keep up this charade, you usually have two names: your true name, used in polite company, and your vigilante name, used to strike fear in the hearts of those who oppose you. Knowledge checks about one do not reveal information about the other, unless your true identity is revealed to the world at large.</p>
<p>You can start each day in either of your identities, referred to simply as <strong className="hl">social</strong> or <strong className="hl">vigilante</strong>. Changing from one identity to another takes 1 minute and must be done out of sight from other creatures to preserve your secret. Changing identities is more than just changing outfits and clothing (although that is certainly a part of it); the process often also involves applying make-up, altering your hair, and adjusting other personal effects. Furthermore, the change is as much a state of mind as of body, so items such as a <Link to="/magic-wondrous/hat_of_disguise">hat of disguise</Link> and similar spells and effects that change the user's appearance do not reduce the time required to change identities. Most <em>social talents</em> require you to be in your social identity, but a vigilante who uses <em>vigilante talents</em> in his social identity risks exposing his secret.</p>
<p>Despite being a single person, your dual nature allows you to have two alignments, one for each of your identities. When in an identity, you are treated as having that identity's alignment for all spells, magic items, and abilities that rely on alignment. For the purpose of meeting a qualification for a feat, class, or any ability, you are only eligible if both of your alignments meet the requirements. A vigilante's two alignments cannot be more than one step from each other on a single alignment axis. For example, a vigilante with a lawful neutral social identity could have a vigilante identity that is lawful good, lawful neutral, lawful evil, neutral, neutral good, or neutral evil. If you are the target of an effect that would change your alignment, it changes both of your alignments to the new alignment.</p>
<p>Any attempts to scry or otherwise locate you work only if you are currently in the identity the creature is attempting to locate (or if the creature knows that the two identities are the same individual). Otherwise, the spell or effect has no effect, revealing nothing but darkness, as if the target were invalid or did not exist.</p>
</Pair>
</Ability>
<Ability id="class-vigilante-seamless-guise-ex" icon={["armor-upgrade"]}>
<Pair single id="class-vigilante-seamless-guise-ex" flavor="A vigilante knows how to behave in a way that appears perfectly proper and normal for his current identity.">Seamless Guise (Ex)</Pair>
<Pair title="Ability">Should anyone suspect you of being anything other than what you appear to be while either in your social or vigilante identity, you can attempt a Disguise check with a +20 circumstance bonus to appear as your current identity, and not as your other identity.</Pair>
</Ability>
<Ability id="class-vigilante-social-talent" icon={["stairs-goal"]}>
<Pair single id="class-vigilante-social-talent">Social Talent</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain a <Link to="/ability/social_talents">social talent</Link>. Unless otherwise noted, a talent can be selected only once. Some talents require you to meet other prerequisites before they can be chosen, such as having another social talent or attaining a minimum vigilante level. Once a talent has been chosen, it cannot be changed.</Pair>
<Pair title="Special">You gain a new <em>social talent</em> at every odd-numbered level (1st, 3rd, 5th, 7th, and so on).</Pair>
</Ability>
<Ability id="class-vigilante-vigilante-specialization-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="class-vigilante-vigilante-specialization-ex">Vigilante Specialization (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You must choose to be either an avenger or a stalker. Once this choice is made, it can't be changed.</Pair>
<Pair title="Special">While many <em>vigilante talents</em> are usable by both specializations, some are unique to each specialization.</Pair>
</Ability>
<Ability id="class-vigilante-avenger" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="class-vigilante-avenger">Avenger</Pair>
<Pair title="Passive Ability">You gain a base attack bonus equal to your vigilante level instead of using those listed above. You add this value to any other base attack bonus gained from other classes or racial Hit Dice as normal.</Pair>
</Ability>
<Ability id="class-vigilante-stalker" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="class-vigilante-stalker">Stalker</Pair>
<Pair title="Ability">You gain an ability called <em>hidden strike,</em> which allows you to deal an extra 1d8 points of <Link to="/misc/precision_damage">precision damage</Link> on melee attacks (or ranged attacks from within 30 feet) against foes who are unaware of your presence, who consider you an ally, or who are made <Link to="/rule/flat_footed">flat-footed</Link> by <em>startling appearance.</em></Pair>
<Pair title="At 3rd Level">The damage becomes +2d8.</Pair>
<Pair title="At 5th Level">The damage becomes +3d8.</Pair>
<Pair title="At 7th Level">The damage becomes +4d8.</Pair>
<Pair title="At 9th Level">The damage becomes +5d8.</Pair>
<Pair title="At 11th Level">The damage becomes +6d8.</Pair>
<Pair title="At 13th Level">The damage becomes +7d8.</Pair>
<Pair title="At 15th Level">The damage becomes +8d8.</Pair>
<Pair title="At 17th Level">The damage becomes +9d8.</Pair>
<Pair title="At 19th Level">The damage becomes +10d8.</Pair>
<Pair title="Special">You can also deal hidden strike damage to a target that you are <Link to="/rule/flanking">flanking</Link> or that is denied its Dexterity bonus to AC, but in these cases, the damage dice are reduced to d4s. You can deal hidden strike damage against targets with <Link to="/rule/concealment">concealment</Link> (but not total concealment).</Pair>
</Ability>
<Ability id="class-vigilante-vigilante-talent" icon={["stairs-goal"]}>
<Pair single id="class-vigilante-vigilante-talent">Vigilante Talent</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">You gain a <Link to="/ability/vigilante_talents">vigilante talent</Link>. Unless otherwise noted, a talent can be selected only once. If a talent calls for a saving throw, the DC for that save is equal to 10 + <Link to="/misc/half">half</Link> your vigilante level + your Charisma modifier, unless stated otherwise. Some talents require you to meet prerequisites before they can be chosen, such as possessing another vigilante talent, possessing a particular specialization, or attaining a minimum level. Once a talent has been selected, it can't be changed.</Pair>
<Pair title="Special">You gain a new <em>vigilante talent</em> at every even-numbered level (2nd, 4th, 6th, 8th, and so on). If you use any of these talents while in your social identity, you must succeed at a Disguise check against the Perception checks of all onlookers (without the +20 circumstance bonus from <em>seamless guise</em>) or the onlookers will realize that you are more than your social identity appears to be and perhaps discover the social and vigilante identities are one and the same.</Pair>
</Ability>
<Ability id="class-vigilante-unshakable-ex" icon={["armor-upgrade"]}>
<Pair single id="class-vigilante-unshakable-ex">Unshakable (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">You add your class level to the DC of any attempts to Intimidate you.</Pair>
</Ability>
<Ability id="class-vigilante-startling-appearance-ex" icon={["armor-downgrade","armor-upgrade"]}>
<Pair single id="class-vigilante-startling-appearance-ex" flavor="A vigilante learns to use the element of surprise to his advantage, startling foes that are unaware of his presence.">Startling Appearance (Ex)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">Whenever you attempt an attack against a foe that is completely unaware of your presence (usually due to Stealth or invisibility), the foe is treated as flat-footed for the rest of your turn (<Link to="/ability/uncanny_dodge">uncanny dodge</Link> or a similar ability prevents this effect unless you are at least 4 levels higher than the foe with uncanny dodge). The foe also takes a -4 penalty on attacks made against you until the start of your next turn.</Pair>
</Ability>
<Ability id="class-vigilante-frightening-appearance-ex" icon={["armor-downgrade"]}>
<Pair single id="class-vigilante-frightening-appearance-ex">Frightening Appearance (Ex)</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Free Action">Whenever you make an attack against a foe that is unaware of your presence, you can attempt an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize the target of your attack and any enemies within 10 feet who can see the attack. This check is attempted before the attack roll against the foe is made and resolved. You roll only one Intimidate check and applies the result to all the targets. If the check succeeds against the target of your attack, that foe is also <Link to="/misc/frightened">frightened</Link> for 1 round, in addition to being <Link to="/misc/shaken">shaken</Link> as normal, unless the foe succeeds at a Will save (DC = 10 + 1/2 your class level + your Charisma modifier). This effect is in addition to the bonuses gained from the <em>startling appearance</em> ability.</Pair>
<Pair title="Special">Once a creature has been the target of this ability (either as the target of the attack or as a nearby creature, regardless of whether or not it was successful), it is immune to your <em>frightening appearance</em> for 24 hours. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="class-vigilante-stunning-appearance-ex" icon={["armor-downgrade"]}>
<Pair single id="class-vigilante-stunning-appearance-ex">Stunning Appearance (Ex)</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">Whenever you make a successful attack against a foe that is unaware of your presence, the foe must make a successful Will save (DC = 10 + 1/2 your class level + your Charisma modifier) or be <Link to="/misc/stunned">stunned</Link> until the end of your next turn. If the creature has more HD than your class level, it receives a +4 circumstance bonus on this save. This ability is in addition to the effects of <em>startling appearance</em> and <em>frightening appearance.</em></Pair>
<Pair title="Special">Once a creature has been the target of this ability (regardless of whether or not the saving throw is successful), it is immune to your <em>stunning appearance</em> for 24 hours. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="class-vigilante-vengeance-strike-ex" icon={["upgrade"]}>
<Pair single id="class-vigilante-vengeance-strike-ex">Vengeance Strike (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">You can spend up to 5 <strong className="hl">standard actions</strong>, which all must be in consecutive rounds. On the following round, you can make a <em>vengeance strike</em> against the studied creature. The target must remain unaware of your presence (or not see you as a threat) until the attack. For each round spent studying the target, you grant yourself one of the following benefits on your <em>vengeance strike:</em> gain a +4 circumstance bonus on the attack roll, deal an additional 3d6 points of <Link to="/misc/precision_damage">precision damage</Link> if you hit, or treat the attack roll as if it were 2 higher for the purposes of determining whether the attack hit or threatens a critical hit (to maximum effective roll of 20). Each round of study can be spent in a different way or the same way (they stack with each other), but each round of study must be allocated before the attack roll is made.</Pair>
<Pair title="Special">If you are an avenger, you automatically confirm any critical hits threatened by your <em>vengeance strike.</em> If you are a stalker and would normally be able to add a Hidden Strike Talent to this attack, you can instead add two Hidden Strike Talents to your vengeance strike.</Pair>
</Ability>
<h3 id="class-vigilante-alternate-capstones" data-hash-target>Alternate Capstones</h3>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 28</Link><br/>When a character reaches the 20th level of a class, she gains a powerful class feature or ability, sometimes referred to as a capstone. The following section provides <Link to="/ability/capstones">new capstones</Link> for characters to select at 20th level. A character can select one of the following capstones in place of the capstone provided by her class. Some capstones are for specific classes, while others are for a range of classes that qualify for them. In some cases, a capstone specifies what ability it replaces. A character can't select a new capstone if she has previously traded away her class capstone via an archetype. Clerics and wizards can receive a capstone at 20th level, despite not having one to begin with. A character that gains certain abilities may be eligible for capstones other than those listed below.</p>
<div className="capstones"><ScrollContainer id="class-vigilante--table-1"><table><thead><tr><th scope="col">Capstone</th><th scope="col">Benefit</th></tr></thead>
<tbody>
<tr><td>Past Your Limits (Ex)</td><td>At 20th level, the vigilante has learned to stretch himself to do what he never thought he could before. The vigilante gains one additional social talent and one additional vigilante talent. This bonus vigilante talent is not subject to specialization requirements - a stalker can select an avenger-only talent, and vice versa. At the GM's discretion, the vigilante can instead select an archetype-only vigilante talent, such as the <Link to="/arc-vigilante/cabalist">cabalist's living shadow</Link>.</td></tr>
<tr><td>Perfect Body, Flawless Mind (Ex)</td><td>At 20th level, the character's endless training and study has resulted in an unmatched mastery of the self. The character increases her ability scores by a collective total of 8. For example, she can increase one score by 8, or one score by 5 and another by 3, or four scores by 2, and so on. Characters of any class can select this ability.</td></tr>
<tr><td>The Boss (Ex)</td><td>At 20th level, the character has become more than just a lone hero - she has become one of the senior figures of her field, with powers and responsibilities to match. The character becomes one of the leading figures in some manner of group or organization, as appropriate to the campaign and the setting. A wizard might become the dean of an arcane university or mages' guild, a fighter could command a mercenary army or a city guard, a cleric might lead a major temple or her own sect, and so forth. The player and the GM should work together to determine the specifics. The character gains the <Link to="/feat/leadership">Leadership</Link> feat if she does not already have it, and the number of followers that the feat grants is multiplied by 10 (although depending on the campaign and setting, the position may grant other powers as well). If multiple characters in a party select this capstone, the GM may consider pooling them to grant the players a particularly large and powerful organization, such as a small kingdom. Characters of any class can select this ability.</td></tr>
<tr><td>With This Sword (Ex)</td><td>At 20th level, the character's blade has become as well-known as the character herself. The character selects one item she has - preferably something iconic and significant, such as a weapon or arcane bond. The item becomes a <Link to="/rule/artifacts">minor artifact</Link> and gains 100,000 gp worth of new powers. The player and the GM should work together to select the new powers, with an eye towards making something memorable yet campaign-appropriate. Characters of any class can select this ability.</td></tr>
<tr><td>Won't Stay Dead (Ex)</td><td>At 20th level, the character becomes a paragon of resilience. Once per week, if the character is killed, petrified, or otherwise removed from play, the character manages to survive by some dint of skill or luck and returns at the end of the combat or the scene (GM's discretion). The player and the GM should work together to ensure that the method of the character's survival is at least vaguely plausible, if unlikely. Characters of any class can select this ability.</td></tr>
</tbody></table></ScrollContainer></div>
<h3 id="class-vigilante-favored-class-bonuses" data-hash-target><Link to="/rule/favored_class">Favored Class Bonuses</Link></h3>
<div className="hanging striped">
<p><strong>Duskwalker:</strong> Add 1/4 to the penalty inflicted by startling appearance, and a +1/2 bonus on the Intimidate check for frightening appearance.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-A-1" id="class-vigilante-ref-A-1" data-hash-target to="class-vigilante-A">1</InnerLink></sup></p>
<p><strong>Dwarf:</strong> Increase the bonus from social grace on Craft skills by +1/2.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-1" id="class-vigilante-ref-B-1" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Elf:</strong> Gain +1/3 on all Acrobatics, Climb, and Stealth checks in forested areas.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-2" id="class-vigilante-ref-B-2" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Gnome:</strong> Gain +1/2 on Bluff checks when attempting to tell a lie that would be true from the point of view of the vigilante's current identity.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-3" id="class-vigilante-ref-B-3" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Half-elf:</strong> Gain +1/2 on the Disguise bonus from seamless guise.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-4" id="class-vigilante-ref-B-4" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Halfling:</strong> Gain 1/6 of a new social talent.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-5" id="class-vigilante-ref-B-5" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Half-orc:</strong> Add 1/2 to the DC increase from unshakable.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-6" id="class-vigilante-ref-B-6" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Human:</strong> Gain +1/2 on the Disguise bonus provided by seamless guise.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-B-7" id="class-vigilante-ref-B-7" data-hash-target to="class-vigilante-B">2</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Gain 1/6 of a new Magical Tail feat. Any kitsune character can choose this bonus upon gaining a level in her favored class.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-C-1" id="class-vigilante-ref-C-1" data-hash-target to="class-vigilante-C">3</InnerLink></sup></p>
<p><strong>Kitsune:</strong> Add 1/2 to the Disguise bonus provided by seamless guise.<sup><InnerLink showBacklink="backlink-class-vigilante-ref-C-2" id="class-vigilante-ref-C-2" data-hash-target to="class-vigilante-C">3</InnerLink></sup></p>
</div>
<h3 id="class-vigilante-archetypes" data-hash-target>Archetypes</h3>
<div className="archetype"><p><Link to="/arc-vigilante/agathiel">Agathiel</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; Vigilante Specialization; 1st-level Social Talent; 6th-level Vigilante Talent</p><p>Agathiels surrender a portion of their immortal souls to Nirvana in exchange for a measure of animalistic might to aid them in their righteous crusades.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/anaphexia_thought_killer">Anaphexia Thought-Killer</Link></p><p><strong>Modifies or Replaces:</strong> 2nd, 6th-level Social Talent; 7th, 15th-level Vigilante Talent</p><p>Anaphexia thought-killers cut out their own tongues to gain magical protection from exposure and hunt down secrets to steal before they can be spread</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/avenging_beast">Avenging Beast</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Dual Identity; 4th, 8th, 10th, 14th, 16th-level Vigilante Talents; Vigilante Specialization; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Some vigilantes turn to natural traditions and supernatural forces to transform into beasts, unleashing a primal fury on their foes before returning to an ordinary guise.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/bellflower_harvester">Bellflower Harvester</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; Vigilante Specialization; 1st-level Social Talent; 2nd-level Vigilante Talent</p><p>Bellflower harvesters are the front-line operatives of the secretive Bellflower Network</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/brute">Brute</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Base Saving Throws; Weapon and Armor Proficiency; Vigilante Specialization; Vengeance Strike</p><p>Some vigilantes can transform into brutish versions of themselves, becoming larger, more terrifying in appearance, and far more formidable in combat - though at a price.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/cabalist">Cabalist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Weapon and Armor Proficiency; 4th, 8th, 10th, 14th, 16th-level Vigilante Talent; Vigilante Specialization; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Practice with blood sacrifices, necromancy, and shadow magic gives a cabalist a reputation as a sinister and dangerous vigilante.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/chu_ye_enforcer">Chu Ye Enforcer</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; 1st-level Social Talent; 4th, 6th, 12th, 14th, 18th-level Vigilante Talent</p><p>Donning terrifying masks, these vigilantes forsake their humanity to become more like the evil oni they mimic.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/darklantern">Darklantern</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; 1st-level Social Talent; 4th-level Vigilante Talent</p><p>Select members of the Lantern Bearers undergo a horrific ritual allowing them to temporarily experience the dark transformation into a drow, but at the cost of their sanity.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/dragonscale_loyalist">Dragonscale Loyalist</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Social Talent; Unshakable; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Dragonscale loyalists serve the throne of Brevoy. When not acting as courtiers, these agents don fearsome draconic masks, becoming anonymous protectors of the king-regent's rule.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/experimenter">Experimenter</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Vigilante Specialization; 1st-level Social Talent; Unshakable; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Some vigilantes adopt lives of secrecy to hide their strange experiments from public view.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/faceless_enforcer">Faceless Enforcer</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Dual Identity; 2nd, 6th-level Vigilante Talent; 5th, 11th, 17th-level Social Talent</p><p>Unyielding warriors, faceless enforcers lock their identities behind implacable helms.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/ferocious_hunter">Ferocious Hunter</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; 2nd, 8th-level Vigilante Talent; Unshakable</p><p>Some half-orcs have such distant orc ancestry that they have the ability to move through the world without experiencing the same discrimination many of their kin, yet many of these half-orcs still take great pride in their heritage and have a powerful desire to show the world that half-orcs are deserving of respect</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/gunmaster">Gunmaster</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Vigilante Specialization; Unshakable</p><p>Gunmasters brandish firearms like extensions of their will, taking down their foes with deadly accuracy and skill.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/half_elf_double_scion">Half-Elf Double Scion</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity</p><p>The deception of hiding their true heritage can take a toll on some half-elves, and some form alternate identities to let the suppressed side of their heritage be known.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/hangman">Hangman</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Vigilante Specialization; 2nd, 4th-level Vigilante Talent; Unshakable; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Wherever the guilty walk free, the hangman brings judgment.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/hidden_current">Hidden Current</Link></p><p><strong>Modifies or Replaces:</strong> 1st-level Social Talent; 2nd-level Vigilante Talent; Frightening Appearance</p><p>The hidden current operates above and below the sea.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/imperial_agent">Imperial Agent</Link></p><p><strong>Modifies or Replaces:</strong> 1st, 5th-level Social Talent; Unshakable</p><p>Imperial agents are often the descendants of nobility and generals from Lung Wa, devoted to reuniting the empire by conquering Lung Wa's successor states</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/magical_child">Magical Child</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Weapon and Armor Proficiency; 4th, 8th, 14th, 16th-level Vigilante Talents; Vigilante Specialization</p><p>Some vigilantes, no matter their age, carry a spark of capricious whimsy under which flows a powerful current of magic and wonder.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/masked_maiden">Masked Maiden</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiencies; Dual Identity; Seamless Guise; 3rd, 7th, 11th, 15th, 19th-level Social Talents</p><p>Masked maidens find themselves leading a double life: ordinary (albeit troubled) citizen by day, faceless warrior by night. In the most tragic cases, the identities entirely disassociate, with the maiden experiencing unexplained exhaustion and injuries upon awakening.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/mounted_fury">Mounted Fury</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Vigilante Specialization; 6th, 12th-level Vigilante Talent; Vengeance Strike</p><p>Some vigilantes form special bonds with the creatures they use as steeds, considering these loyal and trusted mounts just as much heroes or antiheroes as they might be.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/mutated_defender">Mutated Defender</Link></p><p><strong>Modifies or Replaces:</strong> Vigilante Specialization; Vigilante Talents</p><p>Occasionally a mutation takes hold of the body of a vigilante, but he learns to hide his maladies, usually through alchemical concoctions or magical concealment</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/psychometrist">Psychometrist</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; 1st-level Social Talent; 2nd, 6th, 12th, 18th-level Vigilante Talent; Unshakable</p><p>Psychometrists aren't spellcasters; instead, they collect strange items or create their own uncanny gadgets that seem to only work for them.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/serial_killer">Serial Killer</Link></p><p><strong>Modifies or Replaces:</strong> Alignment; Vigilante Specialization; Unshakable; 4th, 6th, 12th, 14th-level Vigilante Talent; 7th, 9th, 19th-level Social Talent; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>Some vigilantes adopt an innocent guise to cloak their acts of brutal murder.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/splintersoul">Splintersoul</Link></p><p><strong>Modifies or Replaces:</strong> Dual Identity; Unshakable; 3rd, 7th-level Social Talents; Startling Appearance; Frightening Appearance; Stunning Appearance</p><p>A splintersoul pushes the boundaries of what it means to have two separate identities.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/teisatsu">Teisatsu</Link></p><p><strong>Modifies or Replaces:</strong> Weapon and Armor Proficiency; Vigilante Specialization; 2nd-level Vigilante Talents; Vigilante Talents</p><p>Teisatsu are specialized vigilantes who focus on infiltrating social scenes and high-society gatherings on behalf of the feuding lords of Minkai.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/warlock">Warlock</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Armor Proficiency; 4th, 8th, 10th, 14th, 16th-level Vigilante Talent; Vigilante Specialization; Unshakable</p><p>Practicing magic in secret, the warlock obscures her arcane scholarship from public view.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/wildsoul">Wildsoul</Link></p><p><strong>Modifies or Replaces:</strong> Vigilante Specialization; 2nd, 6th, 12th, 18th-level Vigilante Talent</p><p>Within some vigilantes are incredible innate abilities that, although normally the domain of natural beasts, inexplicably aid them in fighting their enemies.</p></div>
<div className="archetype"><p><Link to="/arc-vigilante/zealot">Zealot</Link></p><p><strong>Modifies or Replaces:</strong> Class Skills; Skill Ranks; Weapon Proficieny; 4th, 8th, 10th, 14th, 16th-level Vigilante Talent; Alignment; Vigilante Specialization</p><p>Dedicated to a single deity, the zealot hunts the enemies of his faith in secret, often because his religion is outlawed or persecuted in the region.</p></div>
<h3 id="class-vigilante-archetypes-by-feature" data-hash-target>Archetypes by Feature</h3>
<DisplayTable table={{"id":"vigilante archetypes","columns":[{"header":"Archetype","ripple":true},{"header":"Alignment"},{"header":"Armor Proficiency"},{"header":"Base Saving Throws"},{"header":"Class Skills"},{"header":"Dual Identity"},{"header":"Frightening Appearance"},{"header":"Seamless Guise"},{"header":"Skill Ranks"},{"header":"Social Talents"},{"header":"1st-level Social Talent"},{"header":"3rd-level Social Talent"},{"header":"5th-level Social Talent"},{"header":"7th-level Social Talent"},{"header":"9th-level Social Talent"},{"header":"11th-level Social Talent"},{"header":"15th-level Social Talent"},{"header":"17th-level Social Talent"},{"header":"19th-level Social Talent"},{"header":"Startling Appearance"},{"header":"Stunning Appearance"},{"header":"Unshakable"},{"header":"Vengeance Strike"},{"header":"Vigilante Specialization"},{"header":"Vigilante Talents"},{"header":"2nd-level Vigilante Talent"},{"header":"4th-level Vigilante Talent"},{"header":"6th-level Vigilante Talent"},{"header":"8th-level Vigilante Talent"},{"header":"10th-level Vigilante Talent"},{"header":"12th-level Vigilante Talent"},{"header":"14th-level Vigilante Talent"},{"header":"16th-level Vigilante Talent"},{"header":"18th-level Vigilante Talent"},{"header":"Weapon Proficieny"},{"header":"Weapon/Armor Proficiency"}],"data":[["‹arc-vigilante/Agathiel›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null],["‹arc-vigilante/Anaphexia Thought-Killer›",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Avenging Beast›",null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,"X",null,"X","X",null,"X","X",null,null,null],["‹arc-vigilante/Bellflower Harvester›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Brute›","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Cabalist›",null,null,null,"X",null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X",null,null,"X",null,"X","X",null,"X","X",null,null,"X"],["‹arc-vigilante/Chu Ye Enforcer›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,"X","X",null,"X",null,null],["‹arc-vigilante/Darklantern›",null,null,null,null,"X",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Dragonscale Loyalist›",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Experimenter›","X",null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Faceless Enforcer›",null,null,null,null,"X",null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Ferocious Hunter›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,null,"X",null,null,null,null,null,null,null],["‹arc-vigilante/Gunmaster›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Half-Elf Double Scion›",null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Hangman›",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,"X",null,"X","X",null,null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Hidden Current›",null,null,null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Imperial Agent›",null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,null,null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Magical Child›",null,null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,"X","X",null,null,"X"],["‹arc-vigilante/Masked Maiden›",null,null,null,null,"X",null,"X",null,null,null,"X",null,"X",null,"X","X",null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Mounted Fury›",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,"X",null,null,"X",null,null,null,null,null],["‹arc-vigilante/Mutated Defender›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X",null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Psychometrist›",null,null,null,"X",null,null,null,null,null,"X",null,null,null,null,null,null,null,null,null,null,"X",null,null,null,"X",null,"X",null,null,"X",null,null,"X",null,null],["‹arc-vigilante/Serial Killer›","X",null,null,null,null,"X",null,null,null,null,null,null,"X","X",null,null,null,"X","X","X","X",null,"X",null,null,"X","X",null,null,"X","X",null,null,null,null],["‹arc-vigilante/Splintersoul›",null,null,null,null,"X","X",null,null,null,null,"X",null,"X",null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,null,null,null,null,null],["‹arc-vigilante/Teisatsu›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X","X","X",null,null,null,null,null,null,null,null,null,"X"],["‹arc-vigilante/Warlock›",null,"X",null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,null,"X",null,"X","X",null,"X","X",null,null,null],["‹arc-vigilante/Wildsoul›",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,"X",null,"X",null,null,"X",null,null,"X",null,null],["‹arc-vigilante/Zealot›","X",null,null,"X",null,null,null,"X",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"X",null,null,"X",null,"X","X",null,"X","X",null,"X",null]],"initialColumn":0,"nullValue":"&nbsp;"}} />
<section data-footnotes>
<h3 id="class-vigilante-label">Footnotes</h3>
<ol>
<li id="class-vigilante-A">
<p><Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 17</Link> <InnerLink id="backlink-class-vigilante-ref-A-1" data-hash-target to="class-vigilante-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink></p>
</li>
<li id="class-vigilante-B">
<p><Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 17</Link> <InnerLink id="backlink-class-vigilante-ref-B-1" data-hash-target to="class-vigilante-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-2" data-hash-target to="class-vigilante-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-3" data-hash-target to="class-vigilante-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-4" data-hash-target to="class-vigilante-ref-B-4" aria-label="Back to reference B-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-5" data-hash-target to="class-vigilante-ref-B-5" aria-label="Back to reference B-5">↩<sup>5</sup></InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-6" data-hash-target to="class-vigilante-ref-B-6" aria-label="Back to reference B-6">↩<sup>6</sup></InnerLink> <InnerLink id="backlink-class-vigilante-ref-B-7" data-hash-target to="class-vigilante-ref-B-7" aria-label="Back to reference B-7">↩<sup>7</sup></InnerLink></p>
</li>
<li id="class-vigilante-C">
<p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 12</Link> <InnerLink id="backlink-class-vigilante-ref-C-1" data-hash-target to="class-vigilante-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-class-vigilante-ref-C-2" data-hash-target to="class-vigilante-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
export default {skald:_skald,slayer:_slayer,sorcerer:_sorcerer,spiritualist:_spiritualist,swashbuckler:_swashbuckler,vigilante:_vigilante}