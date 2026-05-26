import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _animal_speaker = {title: "Animal Speaker", jsx: <><h2 id="arc-bard-animal_speaker-animal-speaker">Animal Speaker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 25</Link><br/>An animal speaker focuses not on the ears and minds of humans, but on the creatures of the wild and those in the underbellies of cities.</p>
<Ability id="arc-bard-animal_speaker-animal-friend" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-animal_speaker-animal-friend">Animal Friend</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Choice">An animal speaker selects a particular kind of animal, such as apes, badgers, bears, boars, cats, snakes, and so on.</Pair>
<Pair title="Passive Ability">The bard gains a +4 bonus on Handle Animal checks to influence animals of his chosen kind. Animals of this kind have a starting attitude of at least "indifferent" toward the bard and never attack him unless he attacks them first.</Pair>
<Pair title="Special">Animal companions and magically controlled animals of the bard's chosen kind can be directed to attack the bard if the controlling creature wins an opposed Charisma check against the bard (this check can be made once per round until it succeeds, after which no further checks are needed). Supernatural versions of animals (such as animals with the <Link to="/template/fiendish">fiendish</Link> template) can attempt an opposed Charisma check against the bard with a +4 bonus on its roll to overcome this hesitation. This ability has no effect on creatures other than animals.</Pair>
</Ability>
<Ability id="arc-bard-animal_speaker-natures-speaker" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-bard-animal_speaker-natures-speaker">Nature's Speaker</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="At 5th Level">The animal speaker selects a second kind of animal friend.</Pair>
<Pair title="At 11th Level">The animal speaker selects a third kind of animal friend.</Pair>
<Pair title="At 17th Level">The animal speaker selects a fourth kind of animal friend.</Pair>
<Pair title="Special">The bard can use <Link to="/spell/speak_with_animals">speak with animals</Link> at will on animals of his selected kinds.</Pair>
</Ability>
<Ability id="arc-bard-animal_speaker-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-animal_speaker-bardic-performance">Bardic Performance</Pair>
<Pair title="Ability">An animal speaker gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-animal_speaker-soothing-performance" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-animal_speaker-soothing-performance">Soothing Performance</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An animal speaker can use bardic performance to influence animals. This works like the druid ability <Link to="/ability/wild_empathy">wild empathy</Link>, except he expends 1 round of bardic performance and makes a Perform check. If the bard already has wild empathy from another class, he adds the class levels that provide wild empathy to the result of his Perform check to influence an animal.</Pair>
</Ability>
<Ability id="arc-bard-animal_speaker-attract-rats" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-animal_speaker-attract-rats">Attract Rats</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The animal speaker can use bardic performance to summon 1d3 <Link to="/monster/rat_swarm">rat swarms</Link>; they remain as long as he continues performing.</Pair>
<Pair title="At 11th Level">He summons 2d3 swarms instead of 1d3 and the swarms have the <Link to="/template/advanced">advanced</Link> creature simple template.</Pair>
<Pair title="At 17th Level">The number of swarms he summons increases to 3d3.</Pair>
</Ability>
<Ability id="arc-bard-animal_speaker-summon-natures-ally" icon={["spell-book"]}>
<Pair single id="arc-bard-animal_speaker-summon-natures-ally">Summon Nature's Ally</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Ability">At 1st level, the animal speaker adds <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> to his bard spell list and bard spells known as a 1st-level spell. At 4th level, he adds <Link to="/spell/summon_natures_ally_ii">summon nature's ally II</Link> to his spell list and spells known as a 2nd-level spell, and so on every 3 levels thereafter, until 16th level when he adds <Link to="/spell/summon_natures_ally_vi">summon nature's ally VI</Link> to his 6th-level spell list and spells known.</Pair>
</Ability>
</>};
const _arcane_duelist = {title: "Arcane Duelist", jsx: <><h2 id="arc-bard-arcane_duelist-arcane-duelist">Arcane Duelist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 80</Link><br/>A master of the martial applications of steel and spell, the arcane duelist blends both into a lethal combination.</p>
<Ability id="arc-bard-arcane_duelist-arcane-strike" icon={["stairs-goal"]}>
<Pair single id="arc-bard-arcane_duelist-arcane-strike">Arcane Strike</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">Arcane duelists gain <Link to="/feat/arcane_strike">Arcane Strike</Link> as a bonus feat at 1st level.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-arcane_duelist-bardic-performance">Bardic Performance</Pair>
<Pair title="Ability">An arcane duelist gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-rallying-cry-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-arcane_duelist-rallying-cry-su" flavor="An arcane duelist can use performance to rally dispirited allies.">Rallying Cry (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Each round he makes an Intimidate check. Any ally (including the bard) within 30 feet may use this check in place of his own saving throw against fear and despair effects. Those already under a fear or despair effect can attempt a new save each round using the bard's Intimidate check.</Pair>
<Pair title="Special">Rallying cry does not work on effects that don't allow saves. This is a mind-affecting ability that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-bladethirst-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-arcane_duelist-bladethirst-su">Bladethirst (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An arcane duelist may use performance to grant one weapon, one natural weapon, one end of a double weapon, or 50 items of ammunition of the same type within 30 feet a +1 enhancement bonus. This enhancement bonus increases by +1 for every three levels after 6th (maximum +5 at 18th level).</Pair>
<Pair title="Special">These bonuses stack with existing bonuses and may be used to increase the item's enhancement bonus up to +5 or to add any of the following weapon properties: <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, <Link to="/magic-enh/returning">returning</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, <Link to="/magic-enh/seeking">seeking</Link>, <Link to="/magic-enh/speed">speed</Link>, or <Link to="/magic-enh/wounding">wounding</Link>. If the weapon is not magical, at least a +1 enhancement bonus must be added before adding special abilities.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-mass-bladethirst-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-arcane_duelist-mass-bladethirst-su">Mass Bladethirst (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">An arcane duelist can use his <em>bladethirst</em> performance to enhance the weapons of as many allies as desired within 30 feet. The bonus provided by this power is +4 if conferred on two allies, +3 for three allies, +2 for four allies, and +1 for five or more allies. The power granted to each weapon must be identical.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-bard-arcane_duelist-bonus-feats" flavor="An arcane duelist weaves might and magic in his combat style.">Bonus Feats</Pair>
<Pair hl title="Replaces">Versatile performance, well-versed</Pair>
<Pair title="At 2nd Level">Gain <Link to="/feat/combat_casting">Combat Casting</Link> as a bonus feat</Pair>
<Pair title="At 6th Level">Gain <Link to="/feat/disruptive">Disruptive</Link> as a bonus feat</Pair>
<Pair title="At 10th Level">Gain <Link to="/feat/spellbreaker">Spellbreaker</Link> as a bonus feat</Pair>
<Pair title="At 14th Level">Gain <Link to="/feat/penetrating_strike">Penetrating Strike</Link> as a bonus feat</Pair>
<Pair title="At 18th Level">Gain <Link to="/feat/greater_penetrating_strike">Greater Penetrating Strike</Link> as a bonus feat</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-arcane-bond-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-arcane_duelist-arcane-bond-ex">Arcane Bond (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">An arcane duelist gains the arcane bond ability as a <Link to="/class/wizard">wizard</Link>, using a weapon as his bonded item, allowing him to cast any one additional spell that he knows once per day.</Pair>
<Pair title="Special">He may use the hand holding his bonded weapon for somatic components.</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-bonded-object" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-arcane_duelist-bonded-object" flavor="Relevant text from the wizard ability.">Bonded Object</Pair>
<Pair title="Ability"><p>You begin play with a bonded object at no cost. This object is always masterwork quality. Weapons acquired at 1st level are not made of any special material. Weapons must be wielded to have an effect. If you attempt to cast a spell without your bonded object in hand, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as your bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
<Ability id="arc-bard-arcane_duelist-arcane-armor-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-bard-arcane_duelist-arcane-armor-ex">Arcane Armor (Ex)</Pair>
<Pair hl title="Replaces">Jack of all trades</Pair>
<Pair title="At 10th Level">An arcane duelist gains Medium Armor Proficiency and can cast bard spells in medium armor with no chance of arcane spell failure.</Pair>
<Pair title="At 16th Level">He gains Heavy Armor Proficiency and can cast bard spells in heavy armor with no arcane spell failure chance.</Pair>
</Ability>
</>};
const _arcane_healer = {title: "Arcane Healer", jsx: <><h2 id="arc-bard-arcane_healer-arcane-healer">Arcane Healer</h2>
<p><strong>Sources</strong> <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 13</Link><br/>Though bards may have different reasons for wanting to heal the sick and injured, both out of pure altruism and in order to keep adventuring companions safe, the ability to heal also makes it much easier for a bard to pose as a cleric or other divine healer, opening the door for a wide array of swindles and scams.</p>
<Ability id="arc-bard-arcane_healer-channel-energy-su" icon={["stairs-goal","aura"]}>
<Pair single id="arc-bard-arcane_healer-channel-energy-su">Channel Energy (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">Once a day</Pair>
<Pair title="Standard Action">An arcane healer gains the ability to <Link to="/ability/channel_positive_energy">channel positive energy</Link> as a cleric of one level lower than his level. If a creature within the channeled energy's area of effect would be allowed a save against its effects, the DC is equal to 10 + <Link to="/misc/half">half</Link> the arcane healer's level + the arcane healer's Charisma modifier.</Pair>
<Pair title="At 6th Level">He can <em>channel</em> twice a day.</Pair>
<Pair title="At 10th Level">He can <em>channel</em> three times a day.</Pair>
<Pair title="At 14th Level">He can <em>channel</em> four times a day.</Pair>
<Pair title="At 18th Level">He can <em>channel</em> five times a day.</Pair>
</Ability>
<Ability id="arc-bard-arcane_healer-inspiring-healing-sp" icon={["magic-swirl"]}>
<Pair single id="arc-bard-arcane_healer-inspiring-healing-sp" flavor="An arcane healer gains the ability to expend rounds of his bardic performance to provide extra healing to his allies.">Inspiring Healing (Sp)</Pair>
<Pair hl title="Replaces">Loremaster</Pair>
<Pair title="At 5th Level">By expending 2 rounds of bardic performance, an arcane healer can cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> as a spell-like ability.</Pair>
<Pair title="At 11th Level">The arcane healer can expend 2 rounds of bardic performance to cast <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link> as a spell-like ability</Pair>
<Pair title="At 17th Level">He may instead expend 2 rounds of bardic performance to cast <Link to="/spell/cure_serious_wounds">cure serious wounds</Link> as a spell-like ability.</Pair>
<Pair title="Special">No single target may be affected by an arcane healer's inspiring healing ability more than once in a 24-hour period.</Pair>
</Ability>
</>};
const _archaeologist = {title: "Archaeologist", jsx: <><h2 id="arc-bard-archaeologist-archaeologist">Archaeologist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 32</Link><br/>No stodgy researcher, this archaeologist meets his research head-on in the field. Archaeologists sacrifice the bard's inspirational performance for a smattering of rogue talents. This archetype also fits rogue-like characters that focus more on learning than on stabbing foes in the back.</p>
<Ability id="arc-bard-archaeologist-bardic-performance" icon={["broken-shield"]}>
<Pair single id="arc-bard-archaeologist-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">Archaeologists do not gain the <em>bardic performance</em> ability or any of its performance types.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-archaeologists-luck-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-archaeologist-archaeologists-luck-ex" flavor="Fortune favors the archaeologist.">Archaeologist's Luck (Ex)</Pair>
<Pair title="Usage">4 + Cha modifier rounds/day</Pair>
<Pair title="Swift Action">An archaeologist can call on fortune's favor, giving him a +1 luck bonus on attack rolls, saving throws, skill checks, and weapon damage rolls. Maintaining this bonus is a <strong className="hl">free action</strong>, but it ends immediately if the archaeologist is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round.</Pair>
<Pair title="At 5th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
<Pair title="Special">Archaeologist's luck is treated as bardic performance for the purposes of feats, abilities, effects, and the like that affect bardic performance. Like bardic performance, it cannot be maintained at the same time as other performance abilities.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-clever-explorer-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-archaeologist-clever-explorer-ex">Clever Explorer (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An archaeologist gains a bonus equal to <Link to="/misc/half">half</Link> his class level on Disable Device and Perception checks. He can disable intricate and complex devices in half the normal amount of time (minimum 1 round) and open a lock as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 6th Level">An archaeologist can take 10 on Disable Device checks, even if distracted or endangered, and can disarm magical traps.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-archaeologist-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An archaeologist gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, as the rogue class feature of the same name.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-trap-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-archaeologist-trap-sense-ex">Trap Sense (Ex)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An archaeologist gains <Link to="/ability/trap_sense">trap sense</Link>, as the rogue class feature of the same name. The bonus granted by <em>trap sense</em> is equal to one-third of your archaeologist level.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-rogue-talents" icon={["stairs-goal"]}>
<Pair single id="arc-bard-archaeologist-rogue-talents">Rogue Talents</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An archaeologist gains a <Link to="/ability/rogue_talent">rogue talent</Link>. He gains an additional rogue talent for every four levels of archaeologist gained after 4th level. Otherwise, this works as the rogue's rogue talent ability.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-archaeologist-evasion-ex">Evasion (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An archaeologist gains <Link to="/ability/evasion">evasion</Link>, as the rogue ability of the same name.</Pair>
</Ability>
<Ability id="arc-bard-archaeologist-advanced-talent" icon={["upgrade"]}>
<Pair single id="arc-bard-archaeologist-advanced-talent">Advanced Talent</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">An archaeologist can now choose an <Link to="/ability/advanced_rogue_talent">advanced rogue talent</Link> instead of a rogue talent.</Pair>
</Ability>
</>};
const _archivist = {title: "Archivist", jsx: <><h2 id="arc-bard-archivist-archivist">Archivist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 80</Link><br/>Some bards greatly prefer academic pursuits to the drama (and sometimes melodrama) of their artistic brethren.</p>
<Ability id="arc-bard-archivist-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-archivist-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">An archivist gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-archivist-naturalist-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-archivist-naturalist-ex">Naturalist (Ex)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">An archivist who has identified a creature with a Knowledge check appropriate to its type can use performance to share strategies for defeating it with allies in combat. The archivist and any allies within 30 feet gain a +1 insight bonus to AC and on attack rolls and saving throws against exceptional, supernatural, and spell-like abilities used by creatures of that specific kind of monster (e.g., <Link to="/monster/frost_giant">frost giants</Link>, not all giants or all humanoids).</Pair>
<Pair title="At 5th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 17th Level">The bonus becomes +4.</Pair>
<Pair title="Special">This language-dependent ability requires visual and audible components.</Pair>
</Ability>
<Ability id="arc-bard-archivist-lamentable-belaborment-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-archivist-lamentable-belaborment-ex">Lamentable Belaborment (Ex)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An archivist can bewilder a creature already <Link to="/misc/fascinated">fascinated</Link> by his performance. Using this ability does not disrupt the fascinate effect, but it does require a <strong className="hl">standard action</strong> to activate (in addition to the <strong className="hl">free action</strong> to continue the fascinate effect). The target must make a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha modifier). Success renders the target immune to this power for 24 hours, but failure leaves the target either <Link to="/misc/dazed">dazed</Link> or <Link to="/misc/confused">confused</Link> (archivist's choice) for as long as the performance continues.</Pair>
<Pair title="Special">If the target takes damage, this effect ends immediately. This mind-affecting ability relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-archivist-pedantic-lecture-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-archivist-pedantic-lecture-su">Pedantic Lecture (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">An archivist can affect as many creatures with <em>lamentable belaborment</em> as he currently has fascinated. In addition, he may choose to cause targets to fall asleep rather than be dazed or confused.</Pair>
</Ability>
<Ability id="arc-bard-archivist-lore-master-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-archivist-lore-master-ex">Lore Master (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">An archivist may take 20 on Knowledge checks once per day.</Pair>
<Pair title="At 8th Level">He may do so twice a day.</Pair>
<Pair title="At 14th Level">He may do so three times a day.</Pair>
<Pair title="At 20th Level">He may do so four times a day.</Pair>
</Ability>
<Ability id="arc-bard-archivist-magic-lore-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-archivist-magic-lore-ex">Magic Lore (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Passive Ability">An archivist gains a bonus on Spellcraft checks to identify magic items or decipher scrolls equal to half his bard level and may take 10 on such checks. He gains a +4 bonus on saves against magical traps, language-dependent effects, and symbols, glyphs, and magical writings of any kind.</Pair>
<Pair title="Ability">An archivist can use Disable Device to disarm magical traps as per a rogue's <Link to="/ability/trapfinding">trapfinding</Link> ability.</Pair>
</Ability>
<Ability id="arc-bard-archivist-jack-of-all-trades-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-archivist-jack-of-all-trades-ex">Jack-of-All-Trades (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 5th Level">An archivist can use any skill, even if the skill normally requires him to be trained.</Pair>
<Pair title="At 11th Level">He considers all skills to be class skills.</Pair>
<Pair title="At 17th Level">He can take 10 on any skill check, even if it is not normally allowed.</Pair>
</Ability>
<Ability id="arc-bard-archivist-probable-path-ex" icon={["rolling-dices"]}>
<Pair single id="arc-bard-archivist-probable-path-ex" flavor="An archivist can calculate the action likely to bring success with the least risk">Probable Path (Ex)</Pair>
<Pair hl title="Replaces">Jack of all trades</Pair>
<Pair title="At 10th Level">Once per day, he can take 10 on any d20 roll.</Pair>
<Pair title="At 13th Level">He may do so twice a day.</Pair>
<Pair title="At 16th Level">He may do so three times a day.</Pair>
<Pair title="At 19th Level">He may do so four times a day.</Pair>
</Ability>
</>};
const _argent_voice = {title: "Argent Voice", jsx: <><h2 id="arc-bard-argent_voice-argent-voice">Argent Voice</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 174</Link><br/>As much as the <Link to="/rule/silver_ravens">Silver Ravens</Link> are freedom fighters, they are also patrons of the arts. Perhaps owing to the strong ties between the organization's leadership and the Kintargo Opera House, the Silver Ravens are particularly active in the theater community and count many of Cheliax's finest singers among their recruits. In part, this is mere shrewdness, as actors and performers are often invited into the halls of the wealthy and powerful, where a rebellion can do the most damage.</p>
<p>However, there is another reason for the Silver Ravens to recruit singers from the Chelish opera. The Silver Ravens rely on talented voices to deploy their most powerful weapon in the defense of Kintargo - the "Song of Silver." While specially trained argent dramaturges can create lesser versions of this song, the true "Song of Silver" must be performed in Kintargo. Those among the Silver Ravens who dedicate themselves to the study of this magical performance are known as argent voices, and through practice and experience, these bards are able to modulate their own bardic performance abilities to reflect some measure of the power found in the "Song of Silver." For this reason, argent voices are among the most respected and treasured of the Silver Raven's agents. While some argent voices travel the Inner Sea, fighting tyranny and oppression, many others remain in Kintargo, ready to activate the city's defenses should the need arise.</p>
<p>Argent voices who wish to further explore the magic and power of the "Song of Silver" often further focus their training so that they can become <Link to="/pclass/argent_dramaturge">argent dramaturges</Link>.</p>
<Ability id="arc-bard-argent_voice-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-argent_voice-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">An argent voice gains the following bardic performances. The argent voice must use Perform (sing) with these performances.</Pair>
</Ability>
<Ability id="arc-bard-argent_voice-limning-verse-su" extraClasses="subAbility" icon={["armor-downgrade","aura"]}>
<Pair single id="arc-bard-argent_voice-limning-verse-su">Limning Verse (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Ability">An argent voice can sing a song that causes fiends to glow with an aura of silvery light. Outsiders with the evil subtype within 10 feet of the argent voice are affected as per <Link to="/spell/faerie_fire">faerie fire</Link>.</Pair>
<Pair title="At 4th Level">The range of this ability increases by 10 feet for every four argent voice levels he has, to a maximum of 60 feet at 20th level.</Pair>
<Pair title="Special">Any defense that prevents the detection of alignment or evil also prevents <em>limning verse</em> from outlining a creature.</Pair>
</Ability>
<Ability id="arc-bard-argent_voice-shattering-crescendo-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-argent_voice-shattering-crescendo-sp" flavor="The argent voice learns to sing at frequencies capable of shattering magical effects.">Shattering Crescendo (Sp)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Full-Round Action">An argent voice can use 2 rounds of bardic performance to attempt to dispel a single evil spell or enchantment spell cast by an evil creature. This functions as per <Link to="/spell/dispel_magic">dispel magic</Link>, using the bard's level as his caster level.</Pair>
<Pair title="At 18th Level">This ability can be used on effects that can be removed by the spell <Link to="/spell/break_enchantment">break enchantment</Link>.</Pair>
</Ability>
<Ability id="arc-bard-argent_voice-devilbane-refrain-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-argent_voice-devilbane-refrain-su" flavor="The argent voice learns how to mimic aspects of the magical &quot;Song of Silver&quot; with his performance, enhancing his allies' ability to combat devils and similar fiends.">Devilbane Refrain (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom, frightening tune</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A creature must be able to hear the argent voice's singing and be within 30 feet of him to be affected. Natural and manufactured weapons wielded by affected allies are treated as though they were silver for the purpose of bypassing damage reduction.</Pair>
<Pair title="At 14th Level">Allies' natural and manufactured weapons also gain the benefit of the evil outsider <Link to="/magic-enh/bane">bane</Link> weapon special ability.</Pair>
</Ability>
<Ability id="arc-bard-argent_voice-dedicated-performance-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-argent_voice-dedicated-performance-ex" flavor="An argent voice can call upon the training of the Chelish opera to influence and scrutinize his foes.">Dedicated Performance (Ex)</Pair>
<Pair hl title="Alters">Versatile performance</Pair>
<Pair title="At 2nd Level">An argent voice must choose Perform (sing) as his versatile performance skill.</Pair>
<Pair title="At 6th Level">The argent voice gains a bonus on Perform (sing) checks made as part of a versatile performance equal to the number of <strong>additional</strong> Perform skills in which he has the maximum number of ranks possible at his level.</Pair>
<Pair title="At 10th Level">The bonus increases to +2 per additional maximized Perform skill.</Pair>
<Pair title="At 14th Level">The bonus increases to +3 per additional maximized Perform skill.</Pair>
<Pair title="At 18th Level">The bonus increases to +4 per additional maximized Perform skill.</Pair>
</Ability>
</>};
const _arrowsong_minstrel = {title: "Arrowsong Minstrel", jsx: <><h2 id="arc-bard-arrowsong_minstrel-arrowsong-minstrel">Arrowsong Minstrel</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 30</Link><br/>Originating from the wooded wilds of Hymbria, Arrowsong minstrels combine the elven traditions of archery, song, and spellcasting into a seamless harmony of dazzling magical effects.</p>
<Ability id="arc-bard-arrowsong_minstrel-weapon-proficiency" icon={["bowman","broken-shield"]}>
<Pair single id="arc-bard-arrowsong_minstrel-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Alters">Weapon proficiencies</Pair>
<Pair title="Info">An Arrowsong minstrel is proficient with <Link to="/eq-weapon/longbow">longbows</Link>, but not the longsword, rapier, or whip.</Pair>
</Ability>
<Ability id="arc-bard-arrowsong_minstrel-diminished-spellcasting" icon={["broken-shield","magic-swirl"]}>
<Pair single id="arc-bard-arrowsong_minstrel-diminished-spellcasting">Diminished Spellcasting</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">An Arrowsong minstrel casts one fewer spell of each level than normal. If this reduces the number to 0, she can cast spells of that level only if her Charisma score allows <Link to="/rule/bonus_spells">bonus spells</Link> of that level.</Pair>
</Ability>
<Ability id="arc-bard-arrowsong_minstrel-arcane-archery" icon={["spell-book","upgrade"]}>
<Pair single id="arc-bard-arrowsong_minstrel-arcane-archery" flavor="An Arrowsong minstrel's skill at ranged martial arts allows her to learn to cast a number of powerful, offensive spells that would otherwise be unavailable to her.">Arcane Archery</Pair>
<Pair hl title="Replaces">Bardic knowledge, dirge of doom, distraction, fascinate, inspire competence, lore master, soothing performance</Pair>
<Pair title="At 1st Level">She selects a number of spells from the sorcerer/wizard spell list (see <em>special</em> below) equal to her Charisma modifier (minimum 1) and adds them to her bard spell list as bard spells of the same level. The spells selected must not already be on the bard spell list, and must be 6th level or lower.</Pair>
<Pair title="At 4th Level">She adds an additional sorcerer/wizard spell to her bard spell list.</Pair>
<Pair title="At 8th Level">She adds an additional spell to her bard spell list.</Pair>
<Pair title="At 12th Level">She adds an additional spell to her bard spell list.</Pair>
<Pair title="At 16th Level">She adds an additional spell to her bard spell list.</Pair>
<Pair title="At 20th Level">She adds an additional spell to her bard spell list.</Pair>
<Pair title="Passive Ability">For the purpose of meeting the requirements of combat feats and prestige classes, an Arrowsong minstrel treats her bard level as her base attack bonus (in addition to base attack bonuses gained from other classes and Hit Dice). Her skilled blending of archery and arcane magic also allows an Arrowsong minstrel to fulfill a spell's somatic components even when using a bow in both hands (though not other ranged weapons).</Pair>
<Pair title="Special">An Arrowsong minstrel is limited to the following spells when adding spells to her spell list in this manner: <Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/arrow_eruption">arrow eruption</Link>, <Link to="/spell/flame_arrow">flame arrow</Link>, <Link to="/spell/gravity_bow">gravity bow</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, <Link to="/spell/longshot">longshot</Link>, <Link to="/spell/magic_weapon">magic weapon</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/spectral_hand">spectral hand</Link>, <Link to="/spell/true_strike">true strike</Link>, and sorcerer/wizard spells of the <Link to="/main/spells_evocation">evocation</Link> school. An Arrowsong minstrel must still select these spells as spells known before she can cast them.</Pair>
</Ability>
<Ability id="arc-bard-arrowsong_minstrel-precise-minstrel-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-bard-arrowsong_minstrel-precise-minstrel-ex">Precise Minstrel (Ex)</Pair>
<Pair hl title="Replaces">The versatile performance gained at 2nd level, well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An Arrowsong minstrel gains <Link to="/feat/precise_shot">Precise Shot</Link> as a bonus feat.</Pair>
<Pair title="Passive Ability">In addition, any creature that is affected by any of the Arrowsong minstrel's bardic performance does not provide soft <Link to="/rule/cover">cover</Link> to enemies against her ranged attacks with a bow.</Pair>
</Ability>
<Ability id="arc-bard-arrowsong_minstrel-arrowsong-strike-su" icon={["magic-swirl","bowman"]}>
<Pair single id="arc-bard-arrowsong_minstrel-arrowsong-strike-su">Arrowsong Strike (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="At 6th Level">An Arrowsong minstrel can use spellstrike (as per the <Link to="/class/magus">magus</Link> class feature) to cast a single-target ranged touch attack spell and deliver it through a ranged weapon attack. Even if the spell can normally affect multiple targets, only a single missile, ray, or effect accompanies the attack. She cannot use spellstrike with normal touch attacks or melee attacks.</Pair>
<Pair title="At 18th Level">An Arrowsong minstrel using a multiple-target spell with this ability can deliver one ray or line of effect with each attack when using a <Link to="/rule/full_attack">full-attack</Link> action, up to the maximum allowed by the spell (in the case of ray effects). Any effects not used in the round the spell is cast are lost.</Pair>
</Ability>
</>};
const _averaka_arbiter = {title: "Averaka Arbiter", jsx: <><h2 id="arc-bard-averaka_arbiter-averaka-arbiter">Averaka Arbiter</h2>
<p><strong>Sources</strong> <Link to="/source/bastards_of_golarion">Bastards of Golarion pg. 15</Link><br/>Some Averakan bards make it their mission to unify their fellow half-orcs, and are equally skilled at helping allies defeat common enemies and at building a new civilization that reflects their unique identity.</p>
<Ability id="arc-bard-averaka_arbiter-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-averaka_arbiter-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">An Averaka arbiter gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-averaka_arbiter-inspire-teamwork-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-averaka_arbiter-inspire-teamwork-ex">Inspire Teamwork (Ex)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An Averaka arbiter can use his performance to treat his allies as if they possessed the same <Link to="/main/teamwork_feat">teamwork feats</Link> as the bard for the purpose of determining whether the bard receives a bonus from his teamwork feats. His allies do not receive any bonuses from these feats unless they actually possess the feats themselves. The allies' positioning and actions must still meet the prerequisites listed in the teamwork feat for the bard to receive the listed bonus.</Pair>
</Ability>
<Ability id="arc-bard-averaka_arbiter-ritual-of-reconciliation-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-averaka_arbiter-ritual-of-reconciliation-su">Ritual of Reconciliation (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">An Averaka arbiter can use his performance to <Link to="/skill/improve_the_attitude">improve the attitudes</Link> of nearby creatures by two steps. To be affected, a creature must be within 30 feet and able to hear the bard. Creatures whose attitude toward the bard becomes indifferent or better immediately cease attacking the bard and his allies, but may otherwise act as they please. The effect persists for as long as the creature is within 30 feet and the bard continues his performance. The effect ends if one of the bard's allies attacks the creature. A successful Will saving throw (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Charisma modifier) negates the effect.</Pair>
<Pair title="Special"><em>Ritual of reconciliation</em> relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-averaka_arbiter-versatile-teamwork-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-averaka_arbiter-versatile-teamwork-ex">Versatile Teamwork (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance, well-versed</Pair>
<Pair title="At 2nd Level">An Averaka arbiter gains a bonus teamwork feat.</Pair>
<Pair title="At 6th Level">He gains an additional bonus teamwork feat.</Pair>
<Pair title="At 10th Level">He gains an additional bonus teamwork feat.</Pair>
<Pair title="At 14th Level">He gains an additional bonus teamwork feat.</Pair>
<Pair title="At 18th Level">He gains an additional bonus teamwork feat.</Pair>
</Ability>
</>};
const _brazen_deceiver = {title: "Brazen Deceiver", jsx: <><h2 id="arc-bard-brazen_deceiver-brazen-deceiver">Brazen Deceiver</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 50</Link><br/>Where other thieves use stealth or intimidation to achieve their goals, the brazen deceiver depends on lies. The <Link to="/rule/council_of_thieves">Council of Thieves</Link> often sends brazen deceivers to acquire blackmail materials, arrange the release of incarcerated agents, or otherwise manipulate events in the Council's favor. Brazen deceivers' techniques come from a dark source. During the reformation of the Council, Sabriune and Aspexia acquired the shattered fragments of an ancient relic called the Totemrix, which belonged to the long-deceased demon lord of shadows, Vyriavaxus. This particularly intrigued Sabriune, for it was her demonic patron Nocticula who slew Vyriavaxus. Drawing upon Sabriune's heretical faith, Aspexia's psychometric mastery, and Westcrown's lingering psychic trauma from an oppressive shadow curse that plagued its nights for many years, the Council leaders were able to coax remnants of power from the broken artifact. All brazen deceivers are imbued with a fragment of that power during their initiation - not enough to damn a soul or shift alignment, but just enough to give these bards access to the sinister energies they need to deceive.</p>
<Ability id="arc-bard-brazen_deceiver-deceptive-tale-su" icon={["upgrade"]}>
<Pair single id="arc-bard-brazen_deceiver-deceptive-tale-su">Deceptive Tale (Su)</Pair>
<Pair hl title="Replaces">Countersong, distraction</Pair>
<Pair title="Ability">A brazen deceiver learns the <em>deceptive tale</em> bardic performance, allowing him to weave magic into his lies and imbue the most fantastic claims with the appearance of truth. While the brazen deceiver maintains this performance, he takes half the normal penalty on Bluff checks for unlikely lies (rounding down to -2).</Pair>
<Pair title="At 5th Level">This effect also applies to Bluff checks for far-fetched lies.</Pair>
<Pair title="At 11th Level">It now applies to Bluff checks for impossible lies.</Pair>
<Pair title="Special"><em>Deceptive tale</em> relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-brazen_deceiver-shameless-scoundrel-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-brazen_deceiver-shameless-scoundrel-ex">Shameless Scoundrel (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A brazen deceiver adds <Link to="/misc/half">half</Link> his level (minimum +1) on Bluff, Disguise, and Stealth checks.</Pair>
</Ability>
<Ability id="arc-bard-brazen_deceiver-blatant-subtlety-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-brazen_deceiver-blatant-subtlety-ex">Blatant Subtlety (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Ability">A brazen deceiver has mastered the art of using magic without being detected. The brazen deceiver gains <Link to="/feat/spellsong">Spellsong</Link> as a bonus feat. Observers do not automatically recognize his bardic performances as anything other than ordinary speech or performance. Those specifically looking for abnormal effects must succeed at a Sense Motive check (DC = 10 + half the brazen deceiver's bard level + the brazen deceiver's Charisma modifier) to detect his performances.</Pair>
</Ability>
<Ability id="arc-bard-brazen_deceiver-invoke-vyriavaxus-ex" icon={["spell-book"]}>
<Pair single id="arc-bard-brazen_deceiver-invoke-vyriavaxus-ex">Invoke Vyriavaxus (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Info">Westcrown suffered under the shadow curse for many years, and a brazen deceiver has a tiny piece of that darkness lodged in his soul; as his skills increase, he learns to command this shadowy power. A brazen deceiver adds the following spells to his bard spells known at the listed class levels.</Pair>
<Pair title="At 2nd Level">The brazen deceiver adds <Link to="/spell/bleed">bleed</Link> and <Link to="/spell/touch_of_fatigue">touch of fatigue</Link> to his 0-level bard spells known.</Pair>
<Pair title="At 6th Level">The brazen deceiver adds <Link to="/spell/darkness">darkness</Link> and <Link to="/spell/darkvision">darkvision</Link> to his 2nd-level bard spells known.</Pair>
<Pair title="At 10th Level">He adds <Link to="/spell/shadow_conjuration">shadow conjuration</Link> and <Link to="/spell/shadow_step">shadow step</Link> to his 4th-level bard spells known.</Pair>
<Pair title="At 14th Level">He adds <Link to="/spell/shadow_evocation">shadow evocation</Link> and <Link to="/spell/shadow_walk">shadow walk</Link> to his 5th-level bard spells known.</Pair>
<Pair title="At 18th Level">He adds <Link to="/spell/shadow_conjuration_greater">shadow conjuration, greater</Link> and <Link to="/spell/greater_shadow_evocation">greater shadow evocation</Link> to his 6th-level bard spells known.</Pair>
</Ability>
<Ability id="arc-bard-brazen_deceiver-devils-tongue-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-brazen_deceiver-devils-tongue-ex">Devil's Tongue (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A brazen deceiver beguiles others with astonishing skill. This functions as the <em>lore master</em> ability, but its effects apply to Bluff checks instead of Knowledge skill checks.</Pair>
</Ability>
</>};
const _buccaneer = {title: "Buccaneer", jsx: <><h2 id="arc-bard-buccaneer-buccaneer">Buccaneer</h2>
<p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 22</Link><br/>A buccaneer is a pirate who specializes in raiding ships and port towns, but who leaves his victims alive whenever possible. Buccaneers are flashy, debonair pirates who enjoy the excitement and rewards of piracy, but prefer not to kill; they are welcome on ships whose captains prefer to avoid the punishments that murder would bring or who lack the heart to strike down civilians in cold blood. Buccaneers are also popular in privateer crews - and among slave traders.</p>
<Ability id="arc-bard-buccaneer-hilt-bash-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-buccaneer-hilt-bash-ex" flavor="A buccaneer develops the ability to fight with the hilts and flats of his weapons, aiming to leave his victims alive.">Hilt Bash (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">He can use a weapon that normally deals lethal damage to deal nonlethal damage with no penalty on his attack roll.</Pair>
</Ability>
<Ability id="arc-bard-buccaneer-song-of-surrender-su" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-buccaneer-song-of-surrender-su">Song of Surrender (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A buccaneer can use his performance to encourage an enemy to surrender. To be affected, an enemy must be within 30 feet and be able to see and hear the buccaneer's performance. An affected enemy feels the irresistible urge to drop any held weapons and fall <Link to="/rule/prone">prone</Link>. This effect lasts for 1 round - essentially, the affected enemy takes no actions on its next turn other than to lie prone, although it is not considered <Link to="/rule/flat_footed">flat-footed</Link> or <Link to="/misc/helpless">helpless</Link>.</Pair>
<Pair title="Special">A Will saving throw (DC 10 + <Link to="/misc/half">half</Link> the buccaneer's level + the buccaneer's Charisma modifier) negates the effect. This ability affects only a single creature. Song of surrender is an enchantment (compulsion), mind-affecting, language-dependent ability and relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-buccaneer-knock-out-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-buccaneer-knock-out-ex" flavor="A buccaneer may focus his blows in an attempt to knock out an opponent.">Knock Out (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per six bard levels beyond 5th<ByLevelPop levels={[[5,1],[11,2],[17,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action">The buccaneer can choose one target to attempt to knock out. The buccaneer adds his Charisma bonus (if any) on his attack roll and adds his buccaneer level on any nonlethal damage rolls made against the target. The bonus lasts until the buccaneer deals nonlethal damage to his target or until the buccaneer chooses a new target to attempt to knock out.</Pair>
</Ability>
<Ability id="arc-bard-buccaneer-mass-song-of-surrender-su" icon={["upgrade"]}>
<Pair single id="arc-bard-buccaneer-mass-song-of-surrender-su">Mass Song of Surrender (Su)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">This ability functions just like <em>song of surrender</em> but allows a buccaneer to affect all enemies within 30 feet. Enemies within range of this effect still receive a saving throw.</Pair>
<Pair title="Special"><em>Mass song of surrender</em> is an enchantment (compulsion), mind-affecting, language-dependent ability that relies on audible components.</Pair>
</Ability>
</>};
const _busker = {title: "Busker", jsx: <><h2 id="arc-bard-busker-busker">Busker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 26</Link><br/>A busker uses his dazzling physical stunts to get by on his own in the city streets. Buskers commonly use their skills to entertain for a few coins, but also pick pockets, hide in plain sight as statues, and manipulate the desperate in medicine shows. Many buskers are also <Link to="/arc-bard/juggler">jugglers</Link>.</p>
<Ability id="arc-bard-busker-bardic-performance" icon={["broken-shield"]}>
<Pair single id="arc-bard-busker-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">Buskers do not gain the bardic performance ability or any of its performance types, except as noted below.</Pair>
</Ability>
<Ability id="arc-bard-busker-busker-stunts-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="arc-bard-busker-busker-stunts-su">Busker Stunts (Su)</Pair>
<Pair title="Usage">4 + Cha modifier rounds/day</Pair>
<Pair title="Ability">A busker knows how to magically enhance the effectiveness of his physical stunts. Maintaining a stunt is a <strong className="hl">free action</strong>, but it ends immediately if the busker is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action to maintain it each round.</Pair>
<Pair title="Special">This ability is treated as bardic performance for the purposes of feats, abilities, and other effects that affect bardic performance. Like a bardic performance, a busker stunt cannot be maintained at the same time as other performance abilities.</Pair>
</Ability>
<Ability id="arc-bard-busker-quick-hands-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-busker-quick-hands-su">Quick Hands (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">A busker can call on his stunts to gain a +1 competence bonus on Acrobatics checks, a +1 dodge bonus to AC and on Reflex saves, and a +1 bonus on attack rolls as if from <Link to="/spell/haste">haste</Link>.</Pair>
<Pair title="At 5th Level">This bonus becomes +2. While maintaining this stunt the busker also gains an extra attack at his highest base attack bonus as if from <em>haste.</em></Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-bard-busker-patter-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-busker-patter-su">Patter (Su)</Pair>
<Pair title="Ability">A busker can engage in brisk conversation that seems innocuous, but actually encourages creatures to reveal secrets to the busker. Each round while maintaining this stunt, the busker can force one creature within 30 feet that is able to see and hear the busker and has an attitude of indifferent or better towards him to attempt a Will save (DC = 10 + <Link to="/misc/half">half</Link> the busker's bard level + the busker's Charisma modifier). On a failed save, the target must answer one yes/no question the busker asks to the best of its ability.</Pair>
<Pair title="Special">Anyone observing this (including the creature asked, even if it succeeds at its save) must succeed at a Sense Motive check (opposed by the busker's Bluff check) to realize the question was asked or answered. A target that feels threatened or is in combat is immune to this ability. This is a language-dependent, mind-affecting enchantment effect.</Pair>
</Ability>
<Ability id="arc-bard-busker-living-statue-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-busker-living-statue-su">Living Statue (Su)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A busker can use this stunt to hold perfectly still. While maintaining this stunt the busker can attempt a Bluff check (opposed by all observers' Sense Motive checks) to appear paralyzed, dead, or as a statue (this requires that the busker be disguised to look as though he were made of stone or metal, which is aided with a <Link to="/eq-misc/statue_disguise_kit">statue disguise kit</Link>). Even magical means of determining the true nature of the busker do not function for an observer that fails this check. If the busker takes any physical actions, this stunt ends.</Pair>
</Ability>
<Ability id="arc-bard-busker-fascinate-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-busker-fascinate-su">Fascinate (Su)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The busker can <Link to="/misc/fascinate">fascinate</Link> creatures with his stunts, as per the bardic performance ability.</Pair>
</Ability>
<Ability id="arc-bard-busker-suggestion-sp" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-busker-suggestion-sp">Suggestion (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The busker can implant a <Link to="/spell/suggestion">suggestion</Link> in a creature with his stunts, as per the bardic performance ability of the same name.</Pair>
</Ability>
<Ability id="arc-bard-busker-inventive-juggler-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-bard-busker-inventive-juggler-ex" flavor="A busker masters unconventionally dangerous juggling techniques.">Inventive Juggler (Ex)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">While maintaining this stunt, the busker can use a thrown weapon (even an improvised one) to threaten spaces as though he were using a <Link to="/misc/reach">reach</Link> weapon.</Pair>
<Pair title="At 12th Level">The busker threatens squares up to 10 feet farther away with thrown weapons.</Pair>
<Pair title="At 15th Level">The busker now threatens squares up to 20 feet farther away.</Pair>
<Pair title="At 18th Level">The busker now threatens squares up to 30 feet farther away.</Pair>
</Ability>
<Ability id="arc-bard-busker-impossible-sleight-of-hand-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-busker-impossible-sleight-of-hand-su">Impossible Sleight of Hand (Su)</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A busker can store items in or retrieve them from a personal extradimensional space with a maximum capacity of 8,000 cubic feet and 8,000 pounds as a busker stunt. The item may be sent from or called to his hand or any place it fits on his person. He can access the extradimensional space only to store or retrieve a single object at a time; to retrieve or store an object larger than Fine size, the busker must expend 1 additional round of busker stunts for each size category larger than Fine.</Pair>
<Pair title="Special">This stunt is instantaneous and must be activated again each time the busker wishes to use it. The extradimensional space empties its contents within the busker's space if he dies.</Pair>
</Ability>
<Ability id="arc-bard-busker-flexible-performer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-busker-flexible-performer-ex">Flexible Performer (Ex)</Pair>
<Pair title="Ability">A busker can attempt Acrobatics, Disguise, Sleight of Hand, and Stealth checks to earn money instead of Perform checks. He can use his Bluff modifier in place of his Diplomacy modifier on Diplomacy checks.</Pair>
</Ability>
</>};
const _celebrity = {title: "Celebrity", jsx: <><h2 id="arc-bard-celebrity-celebrity">Celebrity</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 25</Link><br/>Known for being known, a celebrity bard is a master of performance who captures the imagination and attention of his audience. He trades on his charisma, his wit, and his exploits to build his renown - and that of his companions.</p>
<Ability id="arc-bard-celebrity-famous" icon={["upgrade"]}>
<Pair single id="arc-bard-celebrity-famous">Famous</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A celebrity bard may choose a region where he is famous, and within that region, the locals are more likely to react favorably toward the bard. The bard gains a bonus on Diplomacy and Intimidate checks in that area and to influence people from that area.</Pair>
<Pair title="At 1st Level">This region is a settlement or settlements with a total population of 1,000 or fewer people, and the modifier on Diplomacy and Intimidate checks is +1. As the celebrity grows more famous, additional areas learn of him (typically places where he has lived or traveled, or settlements adjacent to those where he is known) and his bonuses apply to even more people.</Pair>
<Pair title="At 5th Level">The region is a settlement or settlements with a total population of 5,000 or fewer people, and the modifier on Diplomacy and Intimidate checks is +2.</Pair>
<Pair title="At 9th Level">The region is a settlement or settlements with a total population of up to 25,000 people, and the modifier on Diplomacy and Intimidate checks is +3.</Pair>
<Pair title="At 13th Level">The region is a settlement or settlements with a total population of up to 100,000 people, and the modifier to Diplomacy and Intimidate is +4.</Pair>
<Pair title="At 17th Level">The bard's renown has spread far, and most civilized folk know of him (GM's discretion); the bard's modifier on Diplomacy and Intimidate checks is +5.</Pair>
</Ability>
<Ability id="arc-bard-celebrity-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-celebrity-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A celebrity gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-celebrity-gather-crowd-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-celebrity-gather-crowd-ex">Gather Crowd (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The celebrity is skilled at drawing an audience to his performances. If he is in a settlement or populated area, he can shout, sing, or otherwise make himself noticed in order to attract an audience to his impromptu stage. The size of the crowd depends on the local population, but typically is a number of people equal to <Link to="/misc/half">half</Link> the bard's class level &times; the result of the bard's Perform check. The crowd gathers over the next 1d10 rounds.</Pair>
<Pair title="Special">If the bard fails to engage the crowd (such as by performing, kissing babies, trying to use fascinate, and so on), it disperses over the next 1d10 rounds.</Pair>
</Ability>
<Ability id="arc-bard-celebrity-shining-star-su" icon={["upgrade"]}>
<Pair single id="arc-bard-celebrity-shining-star-su">Shining Star (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">The celebrity has learned how to focus attention on himself so thoroughly that even the presence of danger does not distract his adoring crowd. When using <em>fascinate,</em> a target making a save to break the effect because of a potential threat takes a -4 penalty on that save, and even obvious threats require a save rather than automatically breaking the effect. Creatures affected by the bard's fascinate ability ignore the shaken condition.</Pair>
</Ability>
</>};
const _chelish_diva = {title: "Chelish Diva", jsx: <><h2 id="arc-bard-chelish_diva-chelish-diva">Chelish Diva</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 32</Link><br/>Cheliax is well known for its elaborate operas, and as with any kind of theater, there are performers whose egos get the better of them. Some have an inflated idea of their talent and importance. A few, the Chelish divas, are wholly justified in their feelings of superiority. In their pursuit of glory, their magic and discipline allows them to prove themselves better than any upstart actor, dancer, or chorus member - and when crossed, their fury is legendary. A Chelish diva has the following class features.</p>
<Ability id="arc-bard-chelish_diva-famous" icon={["upgrade"]}>
<Pair single id="arc-bard-chelish_diva-famous">Famous</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A Chelish diva may choose a region where she is famous, and within that region, the locals are more likely to react favorably toward her. The bard gains a bonus on Bluff and Intimidate checks in that area and to influence people from that area.</Pair>
<Pair title="At 1st Level">This region is a settlement or settlements with a total population of 1,000 or fewer people, and the modifier on Bluff and Intimidate checks is +1. As the diva grows more famous, additional areas learn of her (typically places where she has lived or traveled, or settlements adjacent to those where she is known) and her bonuses apply to even more people.</Pair>
<Pair title="At 5th Level">The region is a settlement or settlements with a total population of 5,000 or fewer people, and the modifier on Bluff and Intimidate checks is +2.</Pair>
<Pair title="At 9th Level">The region is a settlement or settlements with a total population of up to 25,000 people, and the modifier on Bluff and Intimidate checks is +3.</Pair>
<Pair title="At 13th Level">The region is a settlement or settlements with a total population of up to 100,000 people, and the modifier to Bluff and Intimidate is +4.</Pair>
<Pair title="At 17th Level">The diva's renown has spread far, and most civilized folk know of her (GM's discretion); the diva's modifier on Bluff and Intimidate checks is +5.</Pair>
</Ability>
<Ability id="arc-bard-chelish_diva-prima-donna-ex" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-bard-chelish_diva-prima-donna-ex">Prima Donna (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">As her efforts to outdo her rivals increase, a Chelish diva can spend additional rounds of bardic performance to augment <em>countersong, deadly performance, fascinate, frightening tune,</em> and <em>scathing tirade</em> (see below). When used, this ability gives her a +2 bonus on her Perform check or saving throw DC for those performances. The diva must spend an additional round of bardic performance for every round she uses <em>prima donna</em> to increase her Perform check result or saving throw DC.</Pair>
</Ability>
<Ability id="arc-bard-chelish_diva-costume-proficiency-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-chelish_diva-costume-proficiency-ex">Costume Proficiency (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 5th Level">The Chelish diva has become so used to wearing strange and cumbersome costumes for her performances that she gains medium armor proficiency and can cast bard spells while wearing medium armor without incurring the normal arcane spell failure chance.</Pair>
<Pair title="At 11th Level">She gains heavy armor proficiency and can cast bard spells while wearing heavy armor without incurring the normal arcane spell failure chance.</Pair>
<Pair title="Special">A multiclassed diva still incurs the normal arcane spell failure chance for arcane spells received from other classes.</Pair>
</Ability>
<Ability id="arc-bard-chelish_diva-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-chelish_diva-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A Chelish diva gains the following bardic performances. This can never be performed more quickly than a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-bard-chelish_diva-devastating-aria-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-chelish_diva-devastating-aria-su">Devastating Aria (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">The Chelish diva can spend 1 round of bardic performance to direct a burst of sonically charged words at a creature or object. This performance deals 1d4 points of damage + the diva's level to an object, or half this damage to a living creature.</Pair>
</Ability>
<Ability id="arc-bard-chelish_diva-scathing-tirade-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-chelish_diva-scathing-tirade-su">Scathing Tirade (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability"><p>A Chelish diva can use her performance to verbally lash out at another creature, causing it to become <Link to="/misc/frightened">frightened</Link>. To be affected, the target enemy must be within 30 feet and be able to see and hear the diva's performance. The effect persists for as long as the enemy is within 30 feet and the diva continues her performance, plus 1d4 rounds.</p>
<p>Although the diva can only direct the effect at one creature at a time, its effects persist for as long as she continues the performance, even if directed at a different creature. For example, she could direct her tirade at an innkeeper, who becomes frightened, then focus her wrath on the captain of the guard, and the innkeeper remains frightened for 1d4 more rounds even though her attention is no longer directed at him.</p>
</Pair>
<Pair title="Special">This performance cannot cause a creature to become <Link to="/misc/panicked">panicked</Link>, even if the target is already frightened from another effect. <em>Scathing tirade</em> is a mind-affecting fear effect, and it relies on audible and visual components.</Pair>
</Ability>
</>};
const _chronicler_of_worlds = {title: "Chronicler of Worlds", jsx: <><h2 id="arc-bard-chronicler_of_worlds-chronicler-of-worlds">Chronicler of Worlds</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 11</Link><br/>In eons past, the angel Tabris was tasked with cataloging all knowledge of the Great Beyond, only to eventually be cast from Heaven for penning the <Link to="/magic-artifact/book_of_the_damned">Book of the Damned</Link>, the perfect catalog of all planar evil. His dedication and sacrifice to the task have inspired some to follow his example; these bards are known as the chroniclers of worlds.</p>
<p>A chronicler of worlds forsakes morality in service of understanding; she is both warrior and mystic, scholar and soldier. Some chroniclers congregate in <Link to="/rule/axis">Axis</Link> to share their discoveries and theories, but the majority wander the planes, steadfastly pushing the boundaries of what is known.</p>
<Ability id="arc-bard-chronicler_of_worlds-wanderers-insight" icon={["info"]}>
<Pair single id="arc-bard-chronicler_of_worlds-wanderers-insight">Wanderer's Insight</Pair>
<Pair title="Info">A chronicler of worlds gains power not from her personality but from an analytical understanding of existence. She uses Intelligence instead of Charisma to determine the effects of bard class features, including spellcasting and bardic performance. A chronicler of worlds must have an alignment with at least one neutral component; a character who does not meet this requirement cannot use or benefit from this archetype's abilities.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-planar-lore-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-chronicler_of_worlds-planar-lore-ex">Planar Lore (Ex)</Pair>
<Pair hl title="Alters">Bardic knowledge</Pair>
<Pair title="Ability">A chronicler of worlds can take 10 on Knowledge (planes) checks. A number of times per day equal to her Intelligence modifier, she can take 20 on a Knowledge (planes) check. This ability stacks with that gained by <em>lore master</em> at 5th level. A chronicler of worlds can attempt all Knowledge checks untrained.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-chronicler_of_worlds-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">The chronicler of worlds gains the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-quintessence-infusion-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-chronicler_of_worlds-quintessence-infusion-su" flavor="This performance infuses allies with planar quintessence.">Quintessence Infusion (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="At 9th Level">While on a plane other than the Material Plane, the chronicler of worlds can use this performance to target an ally within 30 feet. Affected allies gain the plane's basic infusion effect (see <Link to="/feat/planar_infusion">Planar Infusion</Link>).</Pair>
<Pair title="At 12th Level">She can now affect two allies.</Pair>
<Pair title="At 13th Level">Affected creatures also gain the plane's improved infusion.</Pair>
<Pair title="At 15th Level">She can now affect three allies.</Pair>
<Pair title="At 16th Level">Affected creatures also gain the plane's greater infusion.</Pair>
<Pair title="At 18th Level">She can now affect four allies.</Pair>
<Pair title="Special">The first time each day a creature benefits from quintessence infusion, the plane infused is set for the day and additional infusions can grant only that plane's infusions. Infusions that have limited uses per day remain limited in that way, regardless of how many times quintessence infusion is gained. Quintessence infusion relies on audible and visual components.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-mantra-of-tabris-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-chronicler_of_worlds-mantra-of-tabris-su" flavor="Tabris survived his travels through the darkest realms, his dedication to the pursuit of knowledge a shield against planar horrors. The chronicler of worlds walks in his footsteps.">Mantra of Tabris (Su)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Immediate Action">The chronicler of worlds can create a potent ward against outsiders. While maintaining this performance, when the chronicler of worlds is hit by an attack from an outsider or fails a saving throw against an outsider's extraordinary, supernatural, or spell-like ability, she can attempt a Knowledge (planes) check and use the result as her Armor Class or her saving throw result against that attack or effect. The chronicler cannot use her <em>planar lore</em> ability to take 20 on this Knowledge (planes) check. This can retroactively alter the results of the attack or ability.</Pair>
<Pair title="Special">The chronicler of worlds must decide to use this ability before the effects of the successful attack or failed saving throw have been announced. Mantra of Tabris relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-amoral-scholar-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-chronicler_of_worlds-amoral-scholar-ex">Amoral Scholar (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A chronicler of worlds rejects cosmic morality. She does not take penalties imposed by <Link to="/rule/alignment_traits_pa">planar alignment traits</Link>, and she gains a +4 bonus on saving throws against spells and effects that vary based on their target's alignment.</Pair>
</Ability>
<Ability id="arc-bard-chronicler_of_worlds-scriveners-versatility-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-chronicler_of_worlds-scriveners-versatility-ex" flavor="A chronicler of worlds seeks to emulate history's greatest scribe; studying the lore of Tabris grants insight into widely varying subjects, from anatomy to discourse.">Scrivener's Versatility (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A chronicler of worlds selects a skill from the following list: Bluff, Diplomacy, Disable Device, Heal, Intimidate, Profession (scribe), Sense Motive, or Survival.</Pair>
<Pair title="Passive Ability">When attempting skill checks of that type, a chronicler can use her Linguistics skill bonus in place of her bonus with the chosen skill.</Pair>
<Pair title="At 6th Level">She selects a second skill to receive this benefit.</Pair>
<Pair title="At 10th Level">She selects a third skill.</Pair>
<Pair title="At 14th Level">She selects a fourth skill.</Pair>
<Pair title="At 18th Level">She selects a fifth skill.</Pair>
</Ability>
</>};
const _court_bard = {title: "Court Bard", jsx: <><h2 id="arc-bard-court_bard-court-bard">Court Bard</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 81</Link><br/>Spending years studying all of the finer points of erudition and etiquette, the court bard takes up the role of resplendent proclaimer and artist-in-residence at the hand of nobility, royalty, and the well-moneyed elite who aspire to join their ranks.</p>
<Ability id="arc-bard-court_bard-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-court_bard-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A court bard gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-court_bard-satire-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-court_bard-satire-su">Satire (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A court bard can use performance to undermine the confidence of enemies who hear it, causing them to take a -1 penalty on attack and damage rolls (minimum 1) and a -1 penalty on saves against fear and charm effects as long as the bard continues performing.</Pair>
<Pair title="At 5th Level">The penalty becomes -2.</Pair>
<Pair title="At 11th Level">The penalty becomes -3.</Pair>
<Pair title="At 17th Level">The penalty becomes -4.</Pair>
<Pair title="Special"><em>Satire</em> is a language-dependent, mind-affecting ability that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-court_bard-mockery-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-court_bard-mockery-su" flavor="A court bard can subtly ridicule and defame a specific individual.">Mockery (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The bard selects one target who can hear his performance. That individual takes a -2 penalty on Charisma checks and Charisma-related skill checks as long as the bard continues performing.</Pair>
<Pair title="At 7th Level">The penalty becomes -3.</Pair>
<Pair title="At 11th Level">The penalty becomes -4.</Pair>
<Pair title="At 15th Level">The penalty becomes -5.</Pair>
<Pair title="At 19th Level">The penalty becomes -6.</Pair>
<Pair title="Special"><em>Mockery</em> is a language-dependent, mind-affecting ability that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-court_bard-glorious-epic-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-court_bard-glorious-epic-su" flavor="A court bard can weave captivating tales that engross those who hear them.">Glorious Epic (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Enemies within 30 feet become <Link to="/rule/flat_footed">flat-footed</Link> unless they succeed at a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha modifier). A save renders them immune to this ability for 24 hours.</Pair>
<Pair title="Special"><em>Glorious epic</em> is a language-dependent, mind-affecting ability that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-court_bard-scandal-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-court_bard-scandal-su" flavor="A court bard can combine salacious gossip and biting calumny to incite a riot.">Scandal (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">Each enemy within 30 feet is affected as if by a <Link to="/spell/song_of_discord">song of discord</Link> for as long as it can hear the performance. A successful Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier) negates the effect, and that creature is immune to this ability for 24 hours.</Pair>
<Pair title="Special"><em>Scandal</em> is a language-dependent, mind-affecting ability that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-court_bard-heraldic-expertise-ex" icon={["upgrade","rolling-dices"]}>
<Pair single id="arc-bard-court_bard-heraldic-expertise-ex">Heraldic Expertise (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A court bard gains a bonus equal to half his bard level on Diplomacy, Knowledge (history), Knowledge (local), and Knowledge (nobility) checks (minimum +1).</Pair>
<Pair title="Ability">The court bard can also reroll a check against one of these skills, though he must take the result of the second roll even if it is worse.</Pair>
<Pair title="Usage">1 time/day + 1 per five bard levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="arc-bard-court_bard-wide-audience-su" icon={["tornado-discs","upgrade"]}>
<Pair single id="arc-bard-court_bard-wide-audience-su">Wide Audience (Su)</Pair>
<Pair hl title="Replaces">Lore master, jack of all trades</Pair>
<Pair title="Ability">A court bard can choose to affect a 60-foot cone instead of a 30-foot radius with bardic performances that affect an area.</Pair>
<Pair title="At 10th Level">The area of such powers is increased by 10 feet (radius) or 20 feet (cone). If the power instead affects multiple creatures, it affects one additional creature than normal.</Pair>
<Pair title="At 15th Level">If the power instead affects multiple creatures, it affects two additional creatures than normal.</Pair>
<Pair title="At 20th Level">If the power instead affects multiple creatures, it affects three additional creatures than normal.</Pair>
<Pair title="Special">This does not affect powers that affect only a single creature.</Pair>
</Ability>
</>};
const _court_fool = {title: "Court Fool", jsx: <><h2 id="arc-bard-court_fool-court-fool">Court Fool</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 6</Link><br/>Arguably the oldest and most widespread role for a court entertainer is that of the court jester or fool. This role arose from the need to offset the intense, even deadly, seriousness of court business. The court fool serves as an outlet for the constant pressure of aristocratic dealings, relieving tensions through humor. The motley clad acrobat is a good example of this style of court fool, using physical comedy to generate belly laughs and raise spirits. In other courts, the court fool might ridicule social conventions with bawdy songs or engage in biting satire, parodying manners or even mocking individuals to spread good cheer. The court fool holds up an unflattering mirror to those in charge or speaks truths, however veiled, that no one else can safely utter.</p>
<Ability id="arc-bard-court_fool-buffoonery-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-court_fool-buffoonery-ex">Buffoonery (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A court fool gains a bonus equal to <Link to="/misc/half">half</Link> his bard level on Acrobatics, Bluff, Climb, and Disguise checks (minimum +1).</Pair>
</Ability>
<Ability id="arc-bard-court_fool-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-court_fool-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A court fool gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-court_fool-distracting-motley-su" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-bard-court_fool-distracting-motley-su">Distracting Motley (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A court fool can startle his allies back to their senses with erratic capering or by fluttering multicolored clothing. Each round, he attempts an Acrobatics check. Any ally (including the court fool) within 30 feet can use this check in place of her own saving throw against confusion and fascination effects. Those already under a confusion or fascination effect can attempt a new save each round using the court fool's Acrobatics check. A court fool wearing an <Link to="/eq-misc/entertainers_outfit">entertainer's outfit</Link> gains a +2 bonus on these Acrobatics checks.</Pair>
<Pair title="Special"><em>Distracting motley</em> doesn't work on effects that don't allow saves. This is a mind-affecting effect that uses visual components.</Pair>
</Ability>
<Ability id="arc-bard-court_fool-defuse-tension-su" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="arc-bard-court_fool-defuse-tension-su">Defuse Tension (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A court fool can use a silly performance to comfort a beleaguered ally. That ally must be within 30 feet and be able to see the court fool. The ally ignores the <Link to="/misc/fatigued">fatigued</Link> and <Link to="/misc/shaken">shaken</Link> conditions (but not more extreme conditions, such as exhausted or frightened) as long as she continues to see the court fool's performance.</Pair>
<Pair title="At 7th Level">The court fool can affect two allies at once.</Pair>
<Pair title="At 11th Level">The court fool can affect three allies.</Pair>
<Pair title="At 15th Level">The court fool can affect four allies.</Pair>
<Pair title="At 19th Level">The court fool can affect five allies.</Pair>
<Pair title="Special">A court fool can't use <em>defuse tension</em> on himself. <em>Defuse tension</em> relies on visual components.</Pair>
</Ability>
<Ability id="arc-bard-court_fool-caper-and-jeer-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-court_fool-caper-and-jeer-ex">Caper and Jeer (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A court fool can take 10 on Acrobatics and Bluff checks, even when in danger or distracted.</Pair>
<Pair title="Ability">He can take 20 on an Acrobatics or Bluff check once per day, even when in danger or distracted.</Pair>
<Pair title="Swift Action">A court fool can use Bluff to create a diversion to hide (as per the <Link to="/skill/stealth">Stealth</Link> skill).</Pair>
<Pair title="At 11th Level">He can take 20 as above twice per day.</Pair>
<Pair title="At 17th Level">He can take 20 as above three times per day.</Pair>
</Ability>
</>};
const _cultivator = {title: "Cultivator", jsx: <><h2 id="arc-bard-cultivator-cultivator">Cultivator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 40</Link><br/>Cultivators use music to promote plant growth and influence the behavior of plants both naturally and supernaturally. Most cultivators work in conjunction with local communities to maintain crops and oversee harvests, while others serve as wardens of unspoiled natural wonders.</p>
<Ability icon={["skills"]} id="arc-bard-cultivator-undefined">
<Pair id="arc-bard-cultivator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair></Ability>
<Ability id="arc-bard-cultivator-plant-magic" icon={["spell-book"]}>
<Pair single id="arc-bard-cultivator-plant-magic">Plant Magic</Pair>
<Pair hl title="Alters">The bard's spells</Pair>
<Pair title="Info">A cultivator bard adds the following spells to his bard spell list at the corresponding spell levels: <Link to="/spell/entangle">entangle</Link> (1st), <Link to="/spell/greensight">greensight</Link> (2nd), <Link to="/spell/plant_growth">plant growth</Link> (3rd), <Link to="/spell/antiplant_shell">antiplant shell</Link> (4th), <Link to="/spell/tree_stride">tree stride</Link> (5th), <Link to="/spell/green_caress">green caress</Link> (6th).</Pair>
</Ability>
<Ability id="arc-bard-cultivator-verdant-voice" icon={["stairs-goal"]}>
<Pair single id="arc-bard-cultivator-verdant-voice">Verdant Voice</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">By combining traditional <Link to="/faith/green_faith">Green Faith</Link> chants and fey songs into his bardic performance, a cultivator gains the ability to affect a creature of the plant type with mind-affecting bardic performances. However, doing so requires the cultivator to expend 1 additional round of bardic performance each round he maintains a performance augmented by <em>verdant voice.</em></Pair>
</Ability>
<Ability id="arc-bard-cultivator-song-of-growth-su" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-bard-cultivator-song-of-growth-su" flavor="A cultivator can spontaneously promote massive plant growth with his bardic performance.">Song of Growth (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Standard Action">While he maintains his <em>song of growth,</em> the cultivator can select one side of a square within 30 feet of himself and instantly create an opaque barrier of plant matter to block that face, providing total <Link to="/rule/cover">cover</Link>. He can create one barrier as part of starting his bardic performance if he starts the performance as a standard action. The side the cultivator selects must be supported by the ground, and the growth itself cannot support more than 5 pounds of weight. The conjured barrier has hardness 0, AC 5, and 2 hit points per bard level.</Pair>
<Pair title="Special">A cultivator can maintain a number of plant growths equal to his Charisma modifier + <Link to="/misc/half">half</Link> his bard level. These barriers immediately crumble to dust when the cultivator ends his performance.</Pair>
</Ability>
<Ability id="arc-bard-cultivator-resist-natures-lure-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-bard-cultivator-resist-natures-lure-ex">Resist Nature's Lure (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A cultivator gains <Link to="/ability/resist_natures_lure">resist nature's lure</Link>, as the druid class feature of the same name, but with only a +2 bonus instead of +4.</Pair>
<Pair title="At 4th Level">This increases to a +4 bonus.</Pair>
</Ability>
<Ability id="arc-bard-cultivator-nature-lore-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-bard-cultivator-nature-lore-ex">Nature Lore (Ex)</Pair>
<Pair hl title="Alters">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The cultivator gains the <em>lore master</em> bard ability, except he can use it only on Knowledge (nature) checks and Survival checks to track creatures in natural environments.</Pair>
</Ability>
</>};
const _daredevil = {title: "Daredevil", jsx: <><h2 id="arc-bard-daredevil-daredevil">Daredevil</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 32</Link><br/>As quick at wordplay as at swordplay, daredevils are dashing heroes, inspiring their allies to match their clever repartee and acrobatic feats. Daredevils often lean toward comedy, dance, oratory, and singing.</p>
<Ability id="arc-bard-daredevil-agile-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-daredevil-agile-ex">Agile (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A daredevil adds <Link to="/misc/half">half</Link> her class level (minimum 1) on Acrobatics, Bluff, Climb, and Escape Artist checks.</Pair>
</Ability>
<Ability id="arc-bard-daredevil-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-daredevil-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A daredevil gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-daredevil-derring-do-su" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect","upgrade"]}>
<Pair single id="arc-bard-daredevil-derring-do-su" flavor="A daredevil can use her performance to bring out grace in the clumsiest allies.">Derring-do (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">The daredevil and any allies who see her receive a +1 morale bonus on Reflex saving throws and a +2 competence bonus on Dexterity-based skill checks. Allies who move at least 10 feet during their turn gain a +1 dodge bonus to their Armor Class until the start of their next turn.</Pair>
<Pair title="At 5th Level">The skill bonus becomes +4, and the other bonuses become +2.</Pair>
<Pair title="At 11th Level">The skill bonus becomes +6, and the other bonuses become +3.</Pair>
<Pair title="At 17th Level">The skill bonus becomes +8, and the other bonuses become +4.</Pair>
<Pair title="Special">This is a mind-affecting ability that uses visual components.</Pair>
</Ability>
<Ability id="arc-bard-daredevil-canny-foe-ex" icon={["mailed-fist","armor-upgrade"]}>
<Pair single id="arc-bard-daredevil-canny-foe-ex">Canny Foe (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Choice">A daredevil can choose one type of <Link to="/rule/combat_maneuvers">combat maneuver</Link>.</Pair>
<Pair title="Passive Ability">She gains a +2 bonus on her combat maneuver checks to attempt the chosen maneuver and to her CMD to resist that maneuver.</Pair>
<Pair title="At 6th Level">The daredevil gains a +2 bonus for a second type of combat maneuver.</Pair>
<Pair title="At 10th Level">The daredevil chooses a third combat maneuver to gain a +2 bonus.</Pair>
<Pair title="At 14th Level">The daredevil chooses a fourth combat maneuver to gain a +2 bonus.</Pair>
<Pair title="At 18th Level">The daredevil chooses a fifth combat maneuver to gain a +2 bonus.</Pair>
<Pair title="Special">She may not choose the same maneuver twice.</Pair>
</Ability>
<Ability id="arc-bard-daredevil-dauntless-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-daredevil-dauntless-ex">Dauntless (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A daredevil gains a +1 morale bonus on saving throws against mind-affecting effects, including all fear effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-bard-daredevil-scoundrels-fortune-ex" icon={["rolling-dices"]}>
<Pair single id="arc-bard-daredevil-scoundrels-fortune-ex">Scoundrel's Fortune (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three bard levels beyond 5th<ByLevelPop levels={[[5,1],[8,2],[11,3],[14,4],[17,5],[20,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A daredevil can choose to roll two dice instead of one for any skill check, keeping the best result.</Pair>
</Ability>
</>};
const _dawnflower_dervish = {title: "Dawnflower Dervish", jsx: <><h2 id="arc-bard-dawnflower_dervish-dawnflower-dervish">Dawnflower Dervish</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 34</Link><br/>Although Sarenrae is seen mainly as a goddess of healing and redemption in most parts of the Inner Sea, her stern, evil-smiting element is more common in areas like Qadira, Osirion, and Katapesh. Many of the Dawnflower's disciples from these lands become Dawnflower dervishes, religious mystics who use a spinning dance as part of their worship. Many bards of her faith hone their skills with dance and scimitar to become <Link to="/arc-bard/dervish_dancer">dervish dancers</Link>, but some tread a similar path focused more on magic and healing than swordplay. These are the Dawnflower dervishes. A Dawnflower dervish has the following class features.</p>
<Ability id="arc-bard-dawnflower_dervish-deity" icon={["info"]}>
<Pair single id="arc-bard-dawnflower_dervish-deity">Deity</Pair>
<Pair title="Info">A Dawnflower dervish must be a worshiper of <Link to="/faith/sarenrae">Sarenrae</Link>. A dervish who abandons or betrays this faith reverts to a standard bard.</Pair>
</Ability>
<Ability id="arc-bard-dawnflower_dervish-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dawnflower_dervish-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Proficiency with the rapier and whip</Pair>
<Pair title="Ability">Dawnflower dervishes gain weapon proficiency with the <Link to="/eq-weapon/scimitar">scimitar</Link>.</Pair>
</Ability>
<Ability id="arc-bard-dawnflower_dervish-battle-dance" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dawnflower_dervish-battle-dance">Battle Dance</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Ability"><p>A Dawnflower dervish is trained in the use of the Perform skill, especially dance, to create magical effects on himself. This works like bardic performance, except that the Dawnflower dervish's performances grant double their normal bonuses, but these bonuses only affect him. He does not need to be able to see or hear his own performance. Battle dancing is treated as bardic performance for the purposes of feats, abilities, and effects that affect bardic performance, except that battle dancing does not benefit from the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat or any other ability that allows a bardic performance to grant bonuses after it has ended. The benefits of battle dancing apply only when the bard is wearing light or no armor. Like bardic performance, battle dancing cannot be maintained at the same time as other performance abilities.</p>
<p>Starting a battle dance is a <strong className="hl">move action</strong>, but it can be maintained each round as a <strong className="hl">free action</strong>. Changing a battle dance from one effect to another requires the Dawnflower dervish to stop the previous performance and start the new one as a move action. Like a bard, a Dawnflower dervish's performance ends immediately if he is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action each round. A Dawnflower dervish cannot perform more than one battle dance at a time.</p>
</Pair>
<Pair title="At 10th Level">A Dawnflower dervish can start a battle dance as a <strong className="hl">swift action</strong> instead of a move action.</Pair>
<Pair title="Special">When the Dawnflower dervish uses the <em>inspire courage, inspire greatness,</em> or <em>inspire heroics</em> bardic performance types as battle dances, these performance types only provide benefit to the Dawnflower dervish himself. All other types of bardic performance work normally (affecting the bard and his allies, or the bard's enemies, as appropriate).</Pair>
</Ability>
<Ability id="arc-bard-dawnflower_dervish-dervish-dance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dawnflower_dervish-dervish-dance-ex">Dervish Dance (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">A Dawnflower dervish gains the <Link to="/feat/dervish_dance">Dervish Dance</Link> feat as a bonus feat.</Pair>
</Ability>
<Ability id="arc-bard-dawnflower_dervish-spinning-spellcaster-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-dawnflower_dervish-spinning-spellcaster-ex">Spinning Spellcaster (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A Dawnflower dervish gains a +4 bonus on <Link to="/rule/concentration">concentration</Link> checks to cast spells defensively.</Pair>
</Ability>
<Ability id="arc-bard-dawnflower_dervish-meditative-whirl-ex" icon={["magic-swirl","remedy"]}>
<Pair single id="arc-bard-dawnflower_dervish-meditative-whirl-ex" flavor="When using battle dance, the Dawnflower dervish can enter a trance-like state where his spinning motion represents the movement of the planets around the sun, and his spirit is attuned to the healing aspects of Sarenrae.">Meditative Whirl (Ex)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per two dervish levels beyond 8th<ByLevelPop levels={[[8,1],[10,2],[12,3],[14,4],[16,5],[18,6],[20,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Move-Equivalent Action">By focusing on his whirling, the dervish can apply the <Link to="/feat/quicken_spell">Quicken Spell</Link> feat to any <Link to="/main/cure_spells">cure spell</Link> he is about to cast (effectively spending a move action and swift action to cast the spell). This does not alter the level of the spell or the casting time.</Pair>
</Ability>
</>};
const _demagogue = {title: "Demagogue", jsx: <><h2 id="arc-bard-demagogue-demagogue">Demagogue</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 26</Link><br/>Not content with providing amusing and occasionally instructive performances, the demagogue seeks to inflame and ignite his audience, driving them toward a specific purpose with carefully chosen words and tones that may spark momentous change.</p>
<Ability id="arc-bard-demagogue-famous" icon={["upgrade"]}>
<Pair single id="arc-bard-demagogue-famous">Famous</Pair>
<Pair hl title="Replaces">Inspire courage +1</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A demagogue may choose a region where he is famous, and within that region, the locals are more likely to react favorably toward him. The bard gains a bonus on Bluff and Intimidate checks in that area and to influence people from that area.</Pair>
<Pair title="At 1st Level">This region is a settlement or settlements with a total population of 1,000 or fewer people, and the modifier on Bluff and Intimidate checks is +1. As the demagogue grows more famous, additional areas learn of him (typically places where he has lived or traveled, or settlements adjacent to those where he is known) and his bonuses apply to even more people.</Pair>
<Pair title="At 5th Level">The region is a settlement or settlements with a total population of 5,000 or fewer people, and the modifier on Bluff and Intimidate checks is +2.</Pair>
<Pair title="At 9th Level">The region is a settlement or settlements with a total population of up to 25,000 people, and the modifier on Bluff and Intimidate checks is +3.</Pair>
<Pair title="At 13th Level">The region is a settlement or settlements with a total population of up to 100,000 people, and the modifier to Bluff and Intimidate is +4.</Pair>
<Pair title="At 17th Level">The demagogue's renown has spread far, and most civilized folk know of him (GM's discretion); the demagogue's modifier on Bluff and Intimidate checks is +5.</Pair>
</Ability>
<Ability id="arc-bard-demagogue-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-demagogue-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A demagogue gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-demagogue-gather-crowd-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-demagogue-gather-crowd-ex">Gather Crowd (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The demagogue is skilled at drawing an audience to his performances. If he is in a settlement or populated area, he can shout, sing, or otherwise make himself noticed in order to attract an audience to his impromptu stage. The size of the crowd depends on the local population, but typically is a number of people equal to <Link to="/misc/half">half</Link> the bard's class level &times; the result of the bard's Perform check. The crowd gathers over the next 1d10 rounds.</Pair>
<Pair title="Special">If the bard fails to engage the crowd (such as by performing, kissing babies, trying to use <em>fascinate,</em> and so on), it disperses over the next 1d10 rounds.</Pair>
</Ability>
<Ability id="arc-bard-demagogue-incite-violence-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-demagogue-incite-violence-ex">Incite Violence (Ex)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The demagogue can use his performance to fan the fury of a crowd of people he has fascinated. Using this ability does not disrupt the <em>fascinate</em> effect, but does require a <strong className="hl">standard action</strong> to activate (in addition to the <strong className="hl">free action</strong> to continue the <em>fascinate</em> effect). The bard selects a number of targets equal to his level, who must make Will saves (DC 10 + 1/2 the bard's level + the bard's Charisma modifier) or be affected by <Link to="/spell/rage">rage</Link> for a number of rounds equal to the bard's level. The bard indicates who is the intended target of violence (either after using this ability or as part of the performance leading to it) and the enraged members of the crowd immediately attack the target if possible. The target does not need to be present ("kill the king" is a suitable choice) and can be an object instead of a person ("destroy the prison!" is likewise appropriate). Other members of the crowd may follow suit, though they do not gain the benefits of <em>rage.</em></Pair>
<Pair title="Special">This is a sound-based effect and is affected by <em>countersong.</em> If two or more bards are attempting to direct the crowd against different targets, they must make opposed Charisma checks, with the crowd following the directions of the winner.</Pair>
</Ability>
<Ability id="arc-bard-demagogue-righteous-cause-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-demagogue-righteous-cause-ex">Righteous Cause (Ex)</Pair>
<Pair hl title="Replaces">Mass suggestion</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">The demagogue can lift a crowd's emotions and turn them toward a common purpose. First, he must <em>fascinate</em> the crowd, and then use <em>incite violence</em> without designating a target, at which point he can use <em>righteous cause.</em> Instead of driving the crowd with anger, he fills them with purpose. Fascinated creatures must make Will saves (DC 10 + 1/2 the bard's level + the bard's Charisma modifier) to resist. Those who fail are affected by <Link to="/spell/mass_suggestion">mass suggestion</Link> of a plausible idea that lingers with them for one day. Typical uses of this ability are to spark rebellion, overthrow a king, build a beneficial structure such as an orphanage, or donate money to a cause.</Pair>
</Ability>
</>};
const _dervish_dancer = {title: "Dervish Dancer", jsx: <><h2 id="arc-bard-dervish_dancer-dervish-dancer">Dervish Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 32</Link><br/>Not all bards inspire others with their performances. Dervish dancers enter a near-mystical trance that allows them to push their bodies beyond normal limits.</p>
<Ability id="arc-bard-dervish_dancer-weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-bard-dervish_dancer-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Proficiency with the rapier and whip</Pair>
<Pair title="Ability">Dervish dancers gain weapon proficiency with the <Link to="/eq-weapon/scimitar">scimitar</Link> and <Link to="/eq-weapon/kukri">kukri</Link>.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-battle-dance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dervish_dancer-battle-dance">Battle Dance</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Ability"><p>A dervish dancer is trained in the use of the Perform skill, especially dance, to create magical effects on himself. This works like bardic performance, except the dervish dancer only affects himself, and does not need to be able to see or hear his own performance. Battle dancing is treated as bardic performance for the purposes of feats, abilities, effects, and the like that affect bardic performance, except that <em>battle dancing</em> does not benefit from the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat or any other ability that allows a bardic performance to grant bonuses after it has ended. Battle dancing benefits apply only when the bard is wearing light or no armor. Like bardic performance, it cannot be maintained at the same time as other performance abilities.</p>
<p>Starting a <em>battle dance</em> is a <strong className="hl">move action</strong>, but it can be maintained each round as a <strong className="hl">free action</strong>. Changing a <em>battle dance</em> from one effect to another requires the dervish dancer to stop the previous performance and start the new one as a move action. Like a bard, a dervish dancer's performance ends immediately if he is killed, paralyzed, stunned, knocked unconscious, or otherwise prevented from taking a free action each round. A dervish dancer cannot perform more than one <em>battle dance</em> at a time.</p>
</Pair>
<Pair title="At 10th Level">A dervish dancer can start a <em>battle dance</em> as a <strong className="hl">swift action</strong> instead of a move action.</Pair>
<Pair title="Special">Dervish dancers gain the <em>inspire courage, inspire greatness,</em> and <em>inspire heroics</em> bardic performance types as <em>battle dances,</em> but these only provide benefit to the dervish dancer himself.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-rain-of-blows-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-rain-of-blows-su">Rain of Blows (Su)</Pair>
<Pair hl title="Replaces">Suggestion, mass suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A dervish dancer can use his <em>battle dance</em> to speed up his attacks. When making a <Link to="/rule/full_attack">full attack</Link> action, he may make one extra attack with any weapon he is holding, as though under the effects of a <Link to="/spell/haste">haste</Link> spell. He also gains a +1 bonus on attack rolls and a +1 dodge bonus to AC and on Reflex saves.</Pair>
<Pair title="At 9th Level">The bonuses become +2.</Pair>
<Pair title="At 12th Level">The bonuses increase to +3.</Pair>
<Pair title="At 15th Level">The bonuses become +4.</Pair>
<Pair title="At 18th Level">The bonuses increase to +5.</Pair>
<Pair title="Special">These bonuses do not stack with the <em>haste</em> spell.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-razors-kiss-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-razors-kiss-su">Razor's Kiss (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A dervish dancer can use his <em>battle dance</em> to improve his weapons' critical range. All attacks he makes with manufactured weapons are treated as though he had the <Link to="/feat/improved_critical">Improved Critical</Link> feat. Natural weapons and spells are not affected.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-leaf-on-the-wind-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-leaf-on-the-wind-su">Leaf on the Wind (Su)</Pair>
<Pair hl title="Replaces">Frightening performance</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A dervish dancer can use his <em>battle dance</em> to evade attacks with unearthly grace and to shake off the effects of his wounds. Unlike other <em>battle dances, leaf on the wind</em> requires a <strong className="hl">standard action</strong> each round to start or maintain the performance. Each round it is maintained, including the first, the dervish dancer gains a +6 dodge bonus to Armor Class and on Reflex saves. If wounded, he heals 1 hit point of damage per bard level.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-fleet-su" icon={["upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-fleet-su">Fleet (Su)</Pair>
<Pair hl title="Replaces">Bardic knowledge, lore master</Pair>
<Pair title="Passive Ability">While performing a <em>battle dance,</em> a dervish dancer gains a +10 enhancement bonus to his land speed.</Pair>
<Pair title="At 5th Level">This bonus becomes +15 feet.</Pair>
<Pair title="At 9th Level">This bonus increases to +20 feet.</Pair>
<Pair title="At 13th Level">This bonus becomes +25 feet.</Pair>
<Pair title="At 17th Level">This bonus increases to +30 feet.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-versatile-dance-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-versatile-dance-ex">Versatile Dance (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">At 2nd level, a dervish dancer gains a bonus equal to <Link to="/misc/half">half</Link> his level on Perform (dance) checks.</Pair>
<Pair title="Ability">He can use his bonus for his Perform (dance) skill in place of his bonus for Acrobatics.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-dance-of-fury-su" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-dance-of-fury-su">Dance of Fury (Su)</Pair>
<Pair hl title="Replaces">Soothing performance</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A dervish dancer can attack more than once as he moves while performing a <em>battle dance.</em> He can combine a full-attack action with a single move, taking the attacks at any point during his movement, but must move at least 5 feet between each attack. This movement provokes attacks of opportunity as normal.</Pair>
</Ability>
<Ability id="arc-bard-dervish_dancer-battle-fury-su" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-bard-dervish_dancer-battle-fury-su" flavor={<>The dervish dancer can unleash a whirlwind of blows while performing a <em>battle dance.</em></>}>Battle Fury (Su)</Pair>
<Pair hl title="Replaces">Deadly performance</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Full-Round Action">He can take a single move action and unleash a single attack at his highest bonus against each target within his reach during any point of his move, up to a maximum number of attacks equal to the dervish dancer's character level. This movement provokes attacks of opportunity as normal.</Pair>
</Ability>
</>};
const _detective = {title: "Detective", jsx: <><h2 id="arc-bard-detective-detective">Detective</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 81</Link><br/>Piecing together clues and catching the guilty with sheer cleverness, the detective is skilled at divining the truth.</p>
<Ability id="arc-bard-detective-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-detective-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A detective gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-detective-careful-teamwork-su" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-bard-detective-careful-teamwork-su">Careful Teamwork (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A detective uses performance to keep allies coordinated, alert, and ready for action. All allies within 30 feet gain a +1 bonus on Initiative checks, Perception, and Disable Device checks for 1 hour. They also gain a +1 insight bonus on Reflex saves and to AC against traps and when they are <Link to="/rule/flat_footed">flat-footed</Link>.</Pair>
<Pair title="At 5th Level">The bonuses become +2.</Pair>
<Pair title="At 11th Level">The bonuses increase to +3.</Pair>
<Pair title="At 17th Level">The bonuses become +4.</Pair>
<Pair title="Special">Using this ability requires 3 rounds of continuous performance, and the targets must be able to see and hear the bard throughout the performance. This ability is language-dependent and requires visual and audible components.</Pair>
</Ability>
<Ability id="arc-bard-detective-true-confession-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-detective-true-confession-su">True Confession (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A detective can use performance to trick a creature into revealing its secrets. Using this ability requires a successful Sense Motive check to see through a Bluff or notice mental compulsion. After 3 continuous rounds of performance, the target must make a Will save (DC 10 + <Link to="/misc/half">half</Link> the bard's level + the bard's Cha modifier). Success renders the target immune to this power for 24 hours. On a failed save, a liar inadvertently reveals the lie and the truth behind it. A creature under a charm or compulsion reveals the nature of its enchantment and who placed it (if the creature knows) and gains a new saving throw to break free from the enchantment.</Pair>
<Pair title="At 15th Level">Using this power requires only 2 rounds of performance.</Pair>
<Pair title="At 20th Level">This power now only requires 1 round of performance.</Pair>
<Pair title="Special">This ability is language-dependent and requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-detective-show-yourselves-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-detective-show-yourselves-ex">Show Yourselves (Ex)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A detective can use performance to compel creatures to reveal themselves when hiding. All enemies within 30 feet must make a Will save (DC 10 + 1/2 the bard's level + the bard's Cha modifier). If they fail, they must cease using Stealth, unlock and open doors between themselves and the detective, and dismiss, suppress, or dispel if necessary magical effects that grant <Link to="/spell/invisibility">invisibility</Link> or any other form of <Link to="/rule/concealment">concealment</Link> from the detective. As long as they can hear the performance, affected creatures may not attack or flee until they have eliminated every such effect, though they are freed from this compulsion immediately if attacked.</Pair>
<Pair title="Special">Creatures in the area must make this save each round the bard continues his performance. This ability is language-dependent and requires audible components.</Pair>
</Ability>
<Ability id="arc-bard-detective-eye-for-detail-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-detective-eye-for-detail-ex">Eye for Detail (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A detective gains a bonus equal to half his level on Knowledge (local), Perception, and Sense Motive checks, as well as Diplomacy checks to gather information (minimum +1).</Pair>
</Ability>
<Ability id="arc-bard-detective-arcane-insight-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-bard-detective-arcane-insight-ex">Arcane Insight (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A detective can find and disable magical traps, like a rogue's <Link to="/ability/trapfinding">trapfinding</Link> ability. In addition, he gains a +4 bonus on saving throws made against illusions and a +4 bonus on caster level checks and saving throws to see through disguises and protections against divination (such as <Link to="/spell/magic_aura">magic aura</Link>, <Link to="/spell/misdirection">misdirection</Link>, and <Link to="/spell/nondetection">nondetection</Link>).</Pair>
</Ability>
<Ability id="arc-bard-detective-arcane-investigation" icon={["spell-book"]}>
<Pair single id="arc-bard-detective-arcane-investigation">Arcane Investigation</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Info">In addition, a detective's class spell list includes the following: 1st-<Link to="/spell/detect_chaos">detect chaos</Link>/<Link to="/spell/detect_evil">evil</Link>/<Link to="/spell/detect_law">law</Link>/<Link to="/spell/detect_good">good</Link>; 2nd-<Link to="/spell/zone_of_truth">zone of truth</Link>; 3rd-<Link to="/spell/arcane_eye">arcane eye</Link>, <Link to="/spell/speak_with_dead">speak with dead</Link>, <Link to="/spell/speak_with_plants">speak with plants</Link>; 4th-<Link to="/spell/discern_lies">discern lies</Link>; 5th-<Link to="/spell/prying_eyes">prying eyes</Link>, <Link to="/spell/stone_tell">stone tell</Link>; 6th-<Link to="/spell/discern_location">discern location</Link>, <Link to="/spell/find_the_path">find the path</Link>, <Link to="/spell/greater_prying_eyes">greater prying eyes</Link>, <Link to="/spell/moment_of_prescience">moment of prescience</Link>.</Pair>
<Pair title="At 2nd Level">A detective may add one of these spells or any divination spell on the bard spell list to his list of spells known at 2nd level and every four levels thereafter (6th, 10th, 14th, and 18th levels).</Pair>
</Ability>
</>};
const _dirge_bard = {title: "Dirge Bard", jsx: <><h2 id="arc-bard-dirge_bard-dirge-bard">Dirge Bard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 26</Link><br/>A composer of sonorous laments for the dead and elaborate requiems for those lost yet long remembered, dirge bards master musical tools and tropes that must appeal to the ears and hearts of both the living and the dead.</p>
<Ability id="arc-bard-dirge_bard-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dirge_bard-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A dirge bard gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-dirge_bard-dance-of-the-dead-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dirge_bard-dance-of-the-dead-su">Dance of the Dead (Su)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Ability">A dirge bard can use his bardic performance to cause dead bones or bodies to rise up and move or fight at his command. This ability functions like <Link to="/spell/animate_dead">animate dead</Link>, but the created skeletons or zombies remain fully animate only as long as the dirge bard continues the performance. Once it stops, any created undead collapse into carrion. Bodies or bones cannot be animated more than once using this ability. Unlike <em>animate dead,</em> dance of the dead requires no components and does not have the evil descriptor.</Pair>
</Ability>
<Ability id="arc-bard-dirge_bard-haunted-eyes-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-dirge_bard-haunted-eyes-ex">Haunted Eyes (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A dirge bard gains a +4 bonus on saves against fear, energy drain, death effects, and necromantic effects.</Pair>
</Ability>
<Ability id="arc-bard-dirge_bard-secrets-of-the-grave-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-dirge_bard-secrets-of-the-grave-ex">Secrets of the Grave (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A dirge bard gains a bonus equal to <Link to="/misc/half">half</Link> his bard level on Knowledge (religion) checks made to identify undead creatures and their abilities.</Pair>
<Pair title="Ability">A dirge bard may use mind-affecting spells to affect undead as if they were living creatures, even if they are mindless (though spells that affect only humanoids do not affect them, even if they were humanoids in life).</Pair>
<Pair title="Special">In addition, he may add one <Link to="/main/spells_necromancy">necromancy spell</Link> from the spell list of any arcane spellcasting class to his list of spells known at 2nd level and every four levels thereafter (6th, 10th, 14th, and 18th levels).</Pair>
</Ability>
<Ability id="arc-bard-dirge_bard-haunting-refrain-su" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-dirge_bard-haunting-refrain-su">Haunting Refrain (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A dirge bard is able to stir primal terrors in the hearts of listeners. He can use a Perform (keyboard) or Perform (percussion) check in place of an Intimidate check to demoralize an opponent, with a bonus equal to half his bard level. In addition, saving throws against any fear effect he creates are made with a -2 penalty.</Pair>
<Pair title="At 10th Level">The penalty becomes -3.</Pair>
<Pair title="At 15th Level">The penalty becomes -4.</Pair>
<Pair title="At 20th Level">The penalty becomes -5.</Pair>
</Ability>
</>};
const _disciple_of_the_forked_tongue = {title: "Disciple of the Forked Tongue", jsx: <><h2 id="arc-bard-disciple_of_the_forked_tongue-disciple-of-the-forked-tongue">Disciple of the Forked Tongue</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 7</Link><br/>Studied in venomous words as well as venomous blood, a disciple of the forked tongue knows just the right phrase to slowly poison the soul. His voice can sink deep into his victims' hearts, destroying friendships and devouring the mind.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-disciple_of_the_forked_tongue--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vishkanya">Vishkanya</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-disciple_of_the_forked_tongue-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-disciple_of_the_forked_tongue-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A disciple of the forked tongue gains the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-disciple_of_the_forked_tongue-discordant-spiral-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-disciple_of_the_forked_tongue-discordant-spiral-su">Discordant Spiral (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">The disciple can disrupt the thought processes of enemies who hear his performance, causing them to take a -1 penalty on saves against mind-affecting and curse effects and a -2 penalty on <Link to="/rule/concentration">concentration</Link> checks.</Pair>
<Pair title="At 5th Level">These penalties become -2 and -3, respectively.</Pair>
<Pair title="At 11th Level">These penalties become -3 and -4.</Pair>
<Pair title="At 17th Level">These penalties become -4 and -5.</Pair>
</Ability>
<Ability id="arc-bard-disciple_of_the_forked_tongue-venomous-whispers-su" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-disciple_of_the_forked_tongue-venomous-whispers-su">Venomous Whispers (Su)</Pair>
<Pair hl title="Replaces">Inspire greatness</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A disciple of the forked tongue can use his performance to sow distrust into the mind of an enemy within 30 feet. An affected creature treats its allies as hostile for the purposes of their spells and abilities - it is never considered a willing target of spells and must attempt saving throws against them when possible, and it gains no benefit from allied bardic performances and other abilities that specifically target allies.</Pair>
<Pair title="At 12th Level">He can now affect two creatures at the same time.</Pair>
<Pair title="At 15th Level">He can now affect three creatures at the same time.</Pair>
<Pair title="At 18th Level">He can now affect four creatures at the same time.</Pair>
</Ability>
<Ability id="arc-bard-disciple_of_the_forked_tongue-serpent-of-the-mind-su" icon={["spell-book"]}>
<Pair single id="arc-bard-disciple_of_the_forked_tongue-serpent-of-the-mind-su">Serpent of the Mind (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A disciple of the forked tongue can add one spell with the <Link to="/spelldef/curse">curse</Link> descriptor from the spell list of any spellcasting class to his list of spells known.</Pair>
<Pair title="At 6th Level">He adds another <em>curse</em> spell to his list of spells known.</Pair>
<Pair title="At 10th Level">He adds another <em>curse</em> spell.</Pair>
<Pair title="At 14th Level">He adds another <em>curse</em> spell.</Pair>
<Pair title="At 18th Level">He adds another <em>curse</em> spell.</Pair>
</Ability>
</>};
const _dragon_herald = {title: "Dragon Herald", jsx: <><h2 id="arc-bard-dragon_herald-dragon-herald">Dragon Herald</h2>
<p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 22</Link><br/>Dragon heralds are messengers and evangelists of true dragonkind. They carry the word of their dragon patrons far and wide, whether that's a message of peace or a declaration of war. A kobold whose scales already associate her with a revered dragon is often trained as her tribe's dragon herald.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-dragon_herald--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kobold">Kobold</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-dragon_herald-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-bard-dragon_herald-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Ability">The dragon herald is proficient with simple weapons and light armor, but not with shields. Dragon heralds are messengers, not warriors. Like other bards, dragon heralds don't incur the normal arcane spell failure chance from wearing light armor.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-dragon-patron-ex" icon={["info"]}>
<Pair single id="arc-bard-dragon_herald-dragon-patron-ex">Dragon Patron (Ex)</Pair>
<Pair title="Choice">A dragon herald must choose a particular <Link to="/family/true_dragon">true dragon</Link> species whose glory to extol. In most cases, this is a dragon with whom the herald is familiar, but it could be a dragon deity, a long-dead dragon hero, or even an entire dragon lineage. The energy type associated with her dragon patron (as shown on the <Link to="/sorcbloodline/draconic">draconic sorcerer bloodline</Link>) determines the energy type used by several of her abilities. She must also designate a sacred space relevant to her dragon choice - usually the lair of a patron dragon or a shrine or holy place associated with a dragon type.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-coat-of-arms-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-dragon_herald-coat-of-arms-ex">Coat of Arms (Ex)</Pair>
<Pair title="Passive Ability">A dragon herald gains <Link to="/umr/resistance">energy resistance</Link> equal to her dragon herald level against the energy type associated with her dragon patron. This resistance stacks with any inherent racial resistances, but not with magical or temporary resistances.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-dragon-voice-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-dragon_herald-dragon-voice-ex">Dragon Voice (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A dragon herald gains a bonus equal to <Link to="/misc/half">half</Link> her level on Intimidate and Diplomacy checks. She gains Draconic as a bonus language.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dragon_herald-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A dragon herald gains the following types of bardic performance:</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-diplomatic-immunity-su" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-dragon_herald-diplomatic-immunity-su">Diplomatic Immunity (Su)</Pair>
<Pair hl title="Replaces">Countersong, fascinate</Pair>
<Pair title="Ability">A dragon herald can use bardic performance to generate a <Link to="/spell/sanctuary">sanctuary</Link> effect upon herself. Most use this to deliver the word of their patron or to safely complete Diplomacy or Intimidate checks in the presence of hostile foes. The effect persists for as long as the dragon herald performs and for 1 round after.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-diplomatic-protection-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-dragon_herald-diplomatic-protection-su">Diplomatic Protection (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The dragon herald can use bardic performance to wrap a single ally in the colors and scales of her patron. The dragon herald must be able to see her ally, and that ally must be able to perceive her performance. While the herald performs, the target gains resistance equal to twice the dragon herald's level to the energy type associated with the dragon herald's patron, and an enhancement bonus to natural armor equal to 1/2 the dragon herald's level.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-rebuke-foes-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-dragon_herald-rebuke-foes-su">Rebuke Foes (Su)</Pair>
<Pair hl title="Replaces">Soothing performance</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The dragon herald gains the ability to rain down her patron's wrath on her enemies, dealing energy damage of the appropriate type equal to twice her dragon herald level (Reflex save for half). She can target one enemy within 50 feet for every 4 dragon herald levels she has. This effect occurs once per round for as long as she continues her performance.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-retreat-to-lair-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-dragon_herald-retreat-to-lair-sp">Retreat to Lair (Sp)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Full-Round Action">The dragon herald can spend 5 daily uses of performance to teleport herself, or a willing target touched, to her sacred place.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-master-of-persuasion-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-dragon_herald-master-of-persuasion-ex">Master of Persuasion (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The dragon herald becomes so sure in her craft that she can take 10 on any Diplomacy or Intimidate check, even when rushed or threatened.</Pair>
<Pair title="Full-Round Action">Once per day, instead of spending a full minute, she may attempt either a Diplomacy or Intimidate check.</Pair>
<Pair title="At 11th Level">You can use the full-round ability twice a day.</Pair>
<Pair title="At 17th Level">You can use the full-round ability three times a day.</Pair>
</Ability>
<Ability id="arc-bard-dragon_herald-extol-glory-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dragon_herald-extol-glory-su">Extol Glory (Su)</Pair>
<Pair hl title="Replaces">Jack-of-all-trades</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">The dragon herald gains the ability to spread her patron's glory to all intelligent creatures. When she speaks Draconic, any intelligent creature that hears her and knows any language can understand her words.</Pair>
<Pair title="Special">This ability does not allow the dragon herald to understand languages with which she is not familiar.</Pair>
</Ability>
</>};
const _dragon_yapper = {title: "Dragon Yapper", jsx: <><h2 id="arc-bard-dragon_yapper-dragon-yapper">Dragon Yapper</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link><br/>Kobolds' yammering songs distract opponents in combat, hindering their ability to attack.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-dragon_yapper--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kobold">Kobold</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-dragon_yapper-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dragon_yapper-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A dragon yapper gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-dragon_yapper-yapping-song-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-dragon_yapper-yapping-song-su">Yapping Song (Su)</Pair>
<Pair hl title="Replaces">Fascinate</Pair>
<Pair title="Ability">A dragon yapper can use performance to annoy those that hear it, causing them to take a -1 penalty on attack and damage rolls (minimum 1) and a -1 penalty on saves against fear effects and charm effects as long as the dragon yapper continues performing.</Pair>
<Pair title="At 5th Level">These penalties become -2.</Pair>
<Pair title="At 11th Level">These penalties become -3.</Pair>
<Pair title="At 17th Level">These penalties become -4.</Pair>
<Pair title="Special">Yapping song is a mind-affecting ability that uses audible components, but is not language-dependent.</Pair>
</Ability>
<Ability id="arc-bard-dragon_yapper-frightful-song-su" extraClasses="subAbility" icon={["armor-downgrade","aura"]}>
<Pair single id="arc-bard-dragon_yapper-frightful-song-su">Frightful Song (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A dragon yapper can amplify his voice to sound like an actual dragon. Enemies within 30 feet become <Link to="/misc/shaken">shaken</Link> unless they succeed at a Will save (DC 10 +<Link to="/misc/half">half</Link> the dragon yapper's level + the dragon yapper's Charisma modifier). A successful save renders targets immune to this ability for 24 hours.</Pair>
<Pair title="Special">Frightful song is a mind-affecting ability, and a fear effect that uses audible components.</Pair>
</Ability>
<Ability id="arc-bard-dragon_yapper-versatile-performance-ex" icon={["info"]}>
<Pair single id="arc-bard-dragon_yapper-versatile-performance-ex">Versatile Performance (Ex)</Pair>
<Pair title="At 2nd Level">A dragon yapper must choose sing at 2nd level.</Pair>
</Ability>
</>};
const _duettist = {title: "Duettist", jsx: <><h2 id="arc-bard-duettist-duettist">Duettist</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 6</Link><br/>Whether singing a delicate duo with a nightingale or slipping coins from purses while a trained monkey distracts the crowd, the duettist blends his bond to his familiar with his natural talent for performance to create amazing effects.</p>
<Ability id="arc-bard-duettist-diminished-competency" icon={["broken-shield"]}>
<Pair single id="arc-bard-duettist-diminished-competency">Diminished Competency</Pair>
<Pair title="Info">A duettist does not gain the <em>well-versed</em> or <em>jack-of-all-trades</em> class features.</Pair>
</Ability>
<Ability id="arc-bard-duettist-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-duettist-familiar-ex">Familiar (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="At 1st Level">A duettist gains a <Link to="/sidekick/familiar">familiar</Link>, treating his bard level as his effective wizard level for the purpose of this ability.</Pair>
</Ability>
<Ability id="arc-bard-duettist-versatile-familiar-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-duettist-versatile-familiar-ex" flavor="A duettist's familiar learns to use performance to supplement its skills.">Versatile Familiar (Ex)</Pair>
<Pair hl title="Alters">Versatile performance</Pair>
<Pair title="At 2nd Level">A duettist's familiar benefits from its master's <em>versatile performance</em> class feature.</Pair>
</Ability>
<Ability id="arc-bard-duettist-performing-familiar-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-duettist-performing-familiar-su" flavor="A duettist's familiar learns how to create supernatural effects with its performances, just like its master.">Performing Familiar (Su)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="At 4th Level">The familiar can use any of its master's bardic performances, but only the familiar or the duettist can have a performance active at any given time, not both. If one is performing and the other starts a performance, the previous performance immediately ends.</Pair>
<Pair title="Special">Each round that the familiar performs consumes 2 rounds of the duettist's bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-duettist-harmonizing-familiar-su" icon={["upgrade"]}>
<Pair single id="arc-bard-duettist-harmonizing-familiar-su" flavor="The duettist and his familiar have learned how to perform together in harmony.">Harmonizing Familiar (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="At 8th Level">When a duettist and his familiar perform the same bardic performance simultaneously, its effects are enhanced. If the performance has a DC, the DC increases by 2. If the performance provides a competence bonus, the competence bonus increases by 1.</Pair>
<Pair title="Special">Because both the duettist and the familiar are performing, each round performed consumes 3 rounds of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-duettist-symphonic-familiar-su" icon={["stairs-goal"]}>
<Pair single id="arc-bard-duettist-symphonic-familiar-su" flavor="The duettist and his familiar have learned how to create a symphony of complementary performances that meld together to produce two different effects.">Symphonic Familiar (Su)</Pair>
<Pair hl title="Replaces">Frightening tune</Pair>
<Pair title="At 14th Level">They can each perform a different bardic performance simultaneously, and each has its full effect.</Pair>
<Pair title="Special">Because both the duettist and the familiar are performing, each round performed consumes 3 rounds of bardic performance.</Pair>
</Ability>
</>};
const _dwarven_scholar = {title: "Dwarven Scholar", jsx: <><h2 id="arc-bard-dwarven_scholar-dwarven-scholar">Dwarven Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 30</Link><br/>A dwarven scholar researches the lineage of the kings of the old dwarven empires and learns their ancient tactics. She keeps these ancient traditions alive by sharing them with her allies.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-dwarven_scholar--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>This archetype appears to be intended for <Link to="/race/dwarves">dwarves</Link> only, but that limitation is never explicitly stated.</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-dwarven_scholar-weapon-and-armor-proficiency" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-bard-dwarven_scholar-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Info">A dwarven scholar is proficient with one weapon of her choosing with the word "dwarven" in its name, in addition to her normal weapon proficiencies. She is not proficient with shields.</Pair>
</Ability>
<Ability id="arc-bard-dwarven_scholar-studied-insight-ex" icon={["info"]}>
<Pair single id="arc-bard-dwarven_scholar-studied-insight-ex">Studied Insight (Ex)</Pair>
<Pair title="Info">A dwarven scholar uses her Wisdom modifier instead of her Charisma modifier to determine all class features and effects relating to her bard class, including her bardic performance ability, <Link to="/rule/bonus_spells">bonus spells</Link> per day, the maximum spell level she can cast, and the save DCs of her spells.</Pair>
</Ability>
<Ability id="arc-bard-dwarven_scholar-dwarven-training-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dwarven_scholar-dwarven-training-ex">Dwarven Training (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A dwarven scholar masters one aspect of dwarven combat and gains a bonus <Link to="/main/combat_feat">combat feat</Link>. She must meet the prerequisites for this feat, but she treats her bard level as her base attack bonus (in addition to base attack bonuses gained from other classes and racial Hit Dice) for the purpose of qualifying for this feat.</Pair>
<Pair title="At 6th Level">She gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 10th Level">She gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 14th Level">She gains another bonus feat, following the restrictions above.</Pair>
<Pair title="At 18th Level">She gains another bonus feat, following the restrictions above.</Pair>
</Ability>
<Ability id="arc-bard-dwarven_scholar-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-dwarven_scholar-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A dwarven scholar gains the following type of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-dwarven_scholar-war-chant-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-bard-dwarven_scholar-war-chant-su">War Chant (Su)</Pair>
<Pair hl title="Replaces">Inspire courage, suggestion</Pair>
<Pair title="At 1st Level">A dwarven scholar can use her performance to inspire the martial prowess of the ancient dwarves in her allies. The dwarven scholar selects a single combat feat she knows. Allies affected by this performance gain the benefit of this feat for as long as the performance is maintained. To be affected, an ally must be able to perceive the dwarven scholar's performance. If a combat feat has a daily use limitation (such as <Link to="/feat/stunning_fist">Stunning Fist</Link>), any uses of that combat feat by the dwarven scholar's allies while using this ability counts toward the dwarven scholar's feat's daily limit.</Pair>
<Pair title="At 6th Level">The dwarven scholar may grant the benefit of two combat feats at the same time. She may use one of these feats to meet a prerequisite of the second feat. Maintaining two feats in this way requires spending 2 rounds of bardic performance every round.</Pair>
</Ability>
</>};
const _faith_singer = {title: "Faith Singer", jsx: <><h2 id="arc-bard-faith_singer-faith-singer">Faith Singer</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 19</Link><br/>Faith singers show their faith in their deity with songs or other appropriate performances.</p>
<Ability id="arc-bard-faith_singer-faithful" icon={["info"]}>
<Pair single id="arc-bard-faith_singer-faithful">Faithful</Pair>
<Pair title="Info">Like a cleric, a faith singer must worship a <Link to="/main/faiths">deity</Link>, and his alignment must be within one step of his deity's alignment.</Pair>
</Ability>
<Ability id="arc-bard-faith_singer-devout-spell-knowledge-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-bard-faith_singer-devout-spell-knowledge-su">Devout Spell Knowledge (Su)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">A faith singer can select one <Link to="/ability/domains">domain</Link> from among those belonging to his deity. Once per day as a spell-like ability using his bard level as his caster level, he can cast the 1st-level domain spell while giving a bardic performance.</Pair>
<Pair title="At 6th Level">He can similarly cast the 2nd-level domain spell while giving a bardic performance.</Pair>
<Pair title="At 10th Level">He can similarly cast the 3rd-level domain spell while giving a bardic performance.</Pair>
<Pair title="At 14th Level">He can similarly cast the 4th-level domain spell while giving a bardic performance.</Pair>
<Pair title="At 18th Level">He can similarly cast the 5th-level domain spell while giving a bardic performance.</Pair>
<Pair title="Special">He can use each spell-like ability only once per day.</Pair>
</Ability>
</>};
const _fey_courtier = {title: "Fey Courtier", jsx: <><h2 id="arc-bard-fey_courtier-fey-courtier">Fey Courtier</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 11</Link><br/>Fey who associate with courts often become bards skilled at navigating the inhuman societies of the trackless wilds.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-bard-fey_courtier--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gathlain">Gathlain</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-bard-fey_courtier-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-fey_courtier-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">The fey courtier has access to the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-fey_courtier-scorn-of-the-wilds-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-fey_courtier-scorn-of-the-wilds-sp">Scorn of the Wilds (Sp)</Pair>
<Pair hl title="Replaces">Dirge of doom, frightening tune</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The fey courtier can use bardic performance to permanently mark a creature with nature's displeasure by spending 2 rounds performing while the target remains within 30 feet. The performance includes a litany of the target's misdeeds against fey and nature. Unless the target succeeds at a Will saving throw (DC = 10 + <Link to="/misc/half">half</Link> the bard's level + his Charisma modifier), it is cursed as per <Link to="/spell/natures_exile">nature's exile</Link> or <Link to="/spell/bestow_curse">bestow curse</Link>.</Pair>
<Pair title="At 14th Level">The fey courtier's options expand to include <Link to="/spell/baleful_polymorph">baleful polymorph</Link> and <Link to="/spell/green_caress">green caress</Link>.</Pair>
<Pair title="Special">As part of the performance, the fey courtier must define a condition under which the curse will be lifted, which must relate to making amends for the crime against fey or nature and cannot be suicidal to carry out. A creature that succeeds at its saving throw is immune to the fey courtier's scorn of the wild for 24 hours. This is a curse effect.</Pair>
</Ability>
<Ability id="arc-bard-fey_courtier-stone-dance-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-fey_courtier-stone-dance-sp">Stone Dance (Sp)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The bard's performance can move even the features of the natural world. This performance functions as <Link to="/spell/animate_plants">animate plants</Link> (DC = 10 + half the bard's level + his Charisma modifier) except it can also animate unworked stone and water from natural bodies of water (with statistics equivalent to an appropriate plant).</Pair>
</Ability>
<Ability id="arc-bard-fey_courtier-fey-contacts" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-fey_courtier-fey-contacts">Fey Contacts</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Thanks to his fey contacts and knowledge of the byzantine trade customs of the fey courts, a fey courtier can treat any wilderness area with fey residents as a settlement with a certain base value and purchase limit based on his bard level for the purpose of buying and selling magic items (see the table below). The fey courtier can also use these contacts to gather information about the residents, geography, and nearby areas with Diplomacy.</Pair>
</Ability>
<p>These rules come from <Link to="/rule/the_settlement_stat_block">The Settlement Stat Block</Link>:</p>
<blockquote>
<p><em>There is a 75% chance that any item of [the Base Value] or lower can be found for sale in the community with little effort. If an item is not available, a new check to determine if the item has become available can be made in 1 week. A settlement's purchase limit is the most money a shop in the settlement can spend to purchase any single item from the PCs. If the PCs wish to sell an item worth more than a settlement's purchase limit, they'll either need to settle for a lower price, travel to a larger city, or (with the GM's permission) search for a specific buyer in the city with deeper pockets.</em></p>
</blockquote>
<ScrollContainer id="arc-bard-fey_courtier--table-1"><table>
<thead>
<tr>
<th>Bard Level</th>
<th>Base Value</th>
<th>Purchase Limit</th>
</tr>
</thead>
<tbody><tr>
<td>2nd</td>
<td>50 gp</td>
<td>500 gp</td>
</tr>
<tr>
<td>6th</td>
<td>500 gp</td>
<td>2,500 gp</td>
</tr>
<tr>
<td>10th</td>
<td>2,000 gp</td>
<td>10,000 gp</td>
</tr>
<tr>
<td>14th</td>
<td>8,000 gp</td>
<td>50,000 gp</td>
</tr>
<tr>
<td>18th</td>
<td>32,000 gp</td>
<td>200,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<Ability id="arc-bard-fey_courtier-summon-fey-allies" icon={["spell-book","stairs-goal"]}>
<Pair single id="arc-bard-fey_courtier-summon-fey-allies">Summon Fey Allies</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The fey courtier gains <Link to="/feat/augment_summoning">Augment Summoning</Link> as a bonus feat and can call upon natural allies who owe him favors. He adds <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> to his list of 1st-level bard spells known. Whenever he gains access to another spell level, he adds the next-higher <em>summon nature's ally</em> spell to his list of bard spells known.</Pair>
<Pair title="Special">The fey courtier adds the following creatures to the <em>summon nature's ally</em> list: 1st-<Link to="/monster/grimple">grimple (gremlin)</Link>, <Link to="/monster/mite">mite</Link>, <Link to="/monster/sprite">sprite</Link>; 2nd-<Link to="/monster/atomie">atomie</Link>, <Link to="/monster/fuath">fuath (gremlin)</Link>, <Link to="/monster/nixie">nixie</Link>; 3rd-<Link to="/monster/leprechaun">leprechaun</Link>, <Link to="/monster/nuglub">nuglub (gremlin)</Link>, <Link to="/monster/pooka">pooka</Link>; 4th-<Link to="/monster/kelpie">kelpie</Link>, <Link to="/monster/korred">korred</Link>, <Link to="/monster/twigjack">twigjack</Link>; 5th-<Link to="/monster/lampad">lampad</Link>, <Link to="/monster/lurker_in_light">lurker in light</Link>, <Link to="/monster/swan_maiden">swan maiden</Link>; 6th-<Link to="/monster/cold_rider">cold rider</Link>, <Link to="/monster/oceanid">oceanid</Link>, <Link to="/monster/sangoi">sangoi</Link>.</Pair>
</Ability>
</>};
const _fey_prankster = {title: "Fey Prankster", jsx: <><h2 id="arc-bard-fey_prankster-fey-prankster">Fey Prankster</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 20</Link><br/>Sly and mischievous like the Lantern King himself, fey pranksters learn supernatural tricks that can cause their victims to suffer mishaps and accidents.</p>
<Ability id="arc-bard-fey_prankster-mischievous-talent-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-bard-fey_prankster-mischievous-talent-ex">Mischievous Talent (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Passive Ability">A fey prankster adds <Link to="/misc/half">half</Link> her class level (minimum 1) on Bluff, Disguise, Sleight of Hand, and Stealth skill checks, and can attempt Sleight of Hand checks untrained.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-fey_prankster-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A fey prankster gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-song-of-clumsiness-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-fey_prankster-song-of-clumsiness-su">Song of Clumsiness (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Ability">A fey prankster can use this performance to cause enemies within 30 feet that can hear her to suffer seemingly random mishaps. Any enemy in this area that draws a weapon or retrieves an item from a backpack or similar container immediately drops it, and falls prone the first time it enters a square of <Link to="/rule/difficult_terrain">difficult terrain</Link> during its turn. A creature can negate a specific effect with a successful Reflex saving throw (DC = 10 + half the fey prankster's bard level + her Charisma modifier), but an enemy must attempt a separate save for each potential effect during the song of clumsiness (for example, if it draws multiple weapons).</Pair>
<Pair title="Special">Song of clumsiness is an enchantment (compulsion), mind-affecting ability that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-incite-unreliability-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-bard-fey_prankster-incite-unreliability-su">Incite Unreliability (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A fey prankster can use her performance to manipulate a single target into fighting erratically or haphazardly, as though affected by <Link to="/spell/lesser_confusion">lesser confusion</Link>. To be affected, the target must be within 30 feet and able to hear the fey prankster's performance. The effect persists for as long as the target can hear the performance. A target that succeeds at a Will saving throw (DC = 10 + half the fey prankster's bard level + her Charisma modifier) negates the effect and becomes immune to incite unreliability from the same fey prankster for 24 hours.</Pair>
<Pair title="Special">Incite unreliability is an enchantment (compulsion), mind-affecting ability that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-embarrassing-satire-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="arc-bard-fey_prankster-embarrassing-satire-su">Embarrassing Satire (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A fey prankster's powerful satire raises painful blisters and ugly boils on the face of her target. The fey prankster selects one target within 30 feet to become <Link to="/misc/sickened">sickened</Link> from the uncomfortable facial boils. The sickened effect continues for as long as the target is within 30 feet and the fey prankster continues the performance, though the boils remain for 1 day afterward.</Pair>
<Pair title="Special">Embarrassing satire is a language-dependent, mind-affecting ability that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-dirty-trickster-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-fey_prankster-dirty-trickster-ex">Dirty Trickster (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A fey prankster gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat and counts as having <Link to="/feat/combat_expertise">Combat Expertise</Link> for the purpose of meeting the prerequisites of feats that have Improved Dirty Trick as a prerequisite.</Pair>
</Ability>
<Ability id="arc-bard-fey_prankster-master-of-mischief-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-bard-fey_prankster-master-of-mischief-ex">Master of Mischief (Ex)</Pair>
<Pair hl title="Replaces">Lore master</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 time/day + 1 per six bard levels beyond 5th<ByLevelPop levels={[[5,1],[11,2],[17,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A fey prankster can take 10 on a Bluff, Disguise, Sleight of Hand, or Stealth skill check (if she has ranks in that skill), even if distracted or endangered. In addition, once per day, the fey prankster can take 20 on one these skill checks (if she has ranks in that skill).</Pair>
</Ability>
</>};
const _filidh = {title: "Filidh", jsx: <><h2 id="arc-bard-filidh-filidh">Filidh</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 40</Link><br/>By tapping into the world's natural music, specialized bards known as filidhs are able to see not only the tapestry of life but divine portents of the future from the rhythm of all life's song.</p>
<Ability id="arc-bard-filidh-armor-and-weapon-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-bard-filidh-armor-and-weapon-proficiency">Armor and Weapon Proficiency</Pair>
<Pair hl title="Alters">Armor and weapon proficiencies</Pair>
<Pair title="Info">A filidh is proficient with light armor and is prohibited from wearing metal armor. A filidh can wear wooden armor that has been altered by the <Link to="/spell/ironwood">ironwood</Link> spell. Filidhs are proficient with shields (except tower shields) but can use only those made of wood.</Pair>
<Pair title="Special">A filidh who wears prohibited armor or uses a prohibited shield is unable to cast bard spells or use any of his supernatural or spell-like class abilities while doing so and for 24 hours thereafter.</Pair>
</Ability>
<Ability id="arc-bard-filidh-natural-magic" icon={["magic-swirl"]}>
<Pair single id="arc-bard-filidh-natural-magic">Natural Magic</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Info">A filidh casts spells as a bard, but the spells are divine, not arcane, and therefore not subject to arcane spell failure. A filidh must use a holy symbol or a musical instrument as a divine focus when a spell includes such a component. He still uses the bard spell list.</Pair>
</Ability>
<Ability id="arc-bard-filidh-natures-song" icon={["magic-swirl"]}>
<Pair single id="arc-bard-filidh-natures-song">Nature's Song</Pair>
<Pair title="Ability">Filidhs can hear the resonant song generated by all living creatures - a primal music that stretches back to the beginning of time and ahead to the unwritten future. By tapping into this cosmic melody, a filidh can steal glimpses of the future.</Pair>
<Pair title="Swift Action">A filidh can sacrifice a spell slot to gain an additional number of rounds of bardic performance for that day equal to the spell's level.</Pair>
<Pair title="Usage">1 time/day per bard level</Pair>
</Ability>
<Ability id="arc-bard-filidh-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-filidh-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A filidh gains the following types of bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-filidh-echoes-of-natures-song-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-filidh-echoes-of-natures-song-su">Echoes of Nature's Song (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A filidh can use his bardic performance to imbue his allies with subconscious knowledge of their own futures, improving their reflexes and ability to avoid danger. An affected ally receives a +1 insight bonus on Reflex saving throws and to AC.</Pair>
<Pair title="At 5th Level">This bonus becomes +2.</Pair>
<Pair title="At 11th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
<Pair title="Special">This performance is a mind-affecting ability and relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-filidh-divinatory-song-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-filidh-divinatory-song-sp">Divinatory Song (Sp)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A filidh can use his performance to create an effect equivalent to <Link to="/spell/divination">divination</Link>, using the filidh's level as the caster level. The filidh and all allies who can hear his performance receive the information provided by the divination as flashes of inspiration and knowledge.</Pair>
<Pair title="Special">Divinatory song takes 10 minutes and uses 6 rounds of bardic performance. Divinatory song relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-filidh-voices-of-life-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-bard-filidh-voices-of-life-su">Voices of Life (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A filidh can grant himself and all allies who can hear his performance the ability to speak with animals and plants as if affected by <Link to="/spell/speak_with_animals">speak with animals</Link> and <Link to="/spell/speak_with_plants">speak with plants</Link> so long as he maintains this performance.</Pair>
</Ability>
<Ability id="arc-bard-filidh-unity-of-life-su" extraClasses="subAbility" icon={["magic-swirl","shield-reflect"]}>
<Pair single id="arc-bard-filidh-unity-of-life-su">Unity of Life (Su)</Pair>
<Pair hl title="Replaces">Inspire heroics</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A filidh can use his performance to interlink the life force of two allies who can hear his performance as though they were affected by <Link to="/spell/shield_other">shield other</Link>, using the filidh's bard level as his caster level. The filidh designates which ally is the warded target and which ally receives half the warded creature's damage.</Pair>
<Pair title="Free Action">The filidh can switch the targets of this ability (and the effect of the performance the targets receive) once per round at the start of each turn that he maintains the performance.</Pair>
</Ability>
<Ability id="arc-bard-filidh-song-of-the-cycle-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-filidh-song-of-the-cycle-su">Song of the Cycle (Su)</Pair>
<Pair hl title="Replaces">Deadly performance</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A filidh can grant awe-inspiring glimpses into the future with his magic. All allies who can see and hear the filidh are affected as though by the personal version of <Link to="/spell/foresight">foresight</Link> for the duration of the performance.</Pair>
</Ability>
</>};
const _first_world_minstrel = {title: "First World Minstrel", jsx: <><h2 id="arc-bard-first_world_minstrel-first-world-minstrel">First World Minstrel</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 11</Link><br/>Most cultures tell stories of people stolen away by the fey, only to return years later, forever changed. The First World minstrel was changed in such a way by the fey, and his performances channel the mysterious powers of the First World.</p>
<Ability id="arc-bard-first_world_minstrel-fey-magic" icon={["spell-book"]}>
<Pair single id="arc-bard-first_world_minstrel-fey-magic">Fey Magic</Pair>
<Pair hl title="Alters">Spell list</Pair>
<Pair title="Info">A First World minstrel adds <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells to his spell list instead of the equivalent <Link to="/spell/summon_monster">summon monster</Link> spells.</Pair>
</Ability>
<Ability id="arc-bard-first_world_minstrel-wild-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-bard-first_world_minstrel-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Replaces">Bardic knowledge</Pair>
<Pair title="Ability">A First World minstrel gains the <Link to="/ability/wild_empathy">wild empathy</Link> druid class feature, using his bard level as his druid level for this ability.</Pair>
</Ability>
<Ability id="arc-bard-first_world_minstrel-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-first_world_minstrel-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A First World minstrel gains the following types of bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-first_world_minstrel-echoes-of-the-first-world-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-first_world_minstrel-echoes-of-the-first-world-su">Echoes of the First World (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">A First World minstrel infuses himself or a single willing ally within 30 feet with the strange magic of the First World, granting the target one of the special abilities from the <Link to="/template/fey_creature">fey creature template</Link> other than <em>change shape</em> for 1 round.</Pair>
<Pair title="Special">For every 3 levels beyond 1st the First World minstrel has, he can target one additional ally or add an additional special ability to one of his targets. This is a polymorph effect that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-first_world_minstrel-gremlins-luck-su" extraClasses="subAbility" icon={["armor-downgrade","rolling-dices"]}>
<Pair single id="arc-bard-first_world_minstrel-gremlins-luck-su">Gremlin's Luck (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Ability">A First World minstrel can use his performance to inflict bad luck on a target within 30 feet for 1 round. Whenever the target rolls an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A target that succeeds at a Will save (DC 10 + <Link to="/misc/half">half</Link> the First World minstrel's level + his Charisma modifier) negates the effect and is immune to this ability for 24 hours.</Pair>
<Pair title="Special">This is a mind-affecting effect that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-first_world_minstrel-resist-natures-lure-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-bard-first_world_minstrel-resist-natures-lure-ex">Resist Nature's Lure (Ex)</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A First World minstrel gains the <Link to="/ability/resist_natures_lure">resist nature's lure</Link> druid class feature.</Pair>
</Ability>
</>};
const _flame_dancer = {title: "Flame Dancer", jsx: <><h2 id="arc-bard-flame_dancer-flame-dancer">Flame Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 81</Link><br/>A flame dancer studies the movements of fire, adding its grace to his repertoire. He seeks truth in fire's burning essence, and uses his performance to unleash the power of fire against those who dare oppose him.</p>
<Ability id="arc-bard-flame_dancer-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-flame_dancer-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A flame dancer gains the following bardic performances.</Pair>
</Ability>
<Ability id="arc-bard-flame_dancer-fire-dance-su" extraClasses="subAbility" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="arc-bard-flame_dancer-fire-dance-su" flavor="A fire dancer learns to protect himself and others from the pain of fire, and discovers how to control the flame while enduring its heat.">Fire Dance (Su)</Pair>
<Pair hl title="Replaces">Countersong</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Each round of the <em>fire dance,</em> he rolls a Perform (dance or sing) check. Any ally within 30 feet of the bard that has caught on fire or is affected by a fire effect or extreme heat can use the bard's Perform check result in place of its saving throw against that fire. Any ally within 30 feet of the bard who is suffering from <Link to="/rule/heat">heatstroke</Link> can ignore the fatigue from heat exposure so long as the bard maintains this performance.</Pair>
<Pair title="Special"><em>Fire dance</em> relies on audible or visual components.</Pair>
</Ability>
<Ability id="arc-bard-flame_dancer-song-of-the-fiery-gaze-su" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-bard-flame_dancer-song-of-the-fiery-gaze-su" flavor={<>A fire dancer can allow allies to see through flames without any distortion. Any ally within 30 feet of the bard who can hear the performance can see through fire, fog, and smoke without penalty as long as the light is sufficient to allow him to see normally, as with the base effect of the <Link to="/mystery/flame">gaze of flames</Link> oracle revelation.</>}>Song of the Fiery Gaze (Su)</Pair>
<Pair hl title="Replaces">Inspire competence</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Special"><em>Song of the fiery gaze</em> relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-flame_dancer-fire-break-su" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-bard-flame_dancer-fire-break-su" flavor="A fire dancer's performance can bend flames away from others.">Fire Break (Su)</Pair>
<Pair hl title="Replaces">Suggestion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Any ally within 30 feet of the bard who can hear or see the bardic performance gains <Link to="/umr/resist">resist</Link> fire 20 as long as the performance is maintained.</Pair>
<Pair title="At 11th Level">This resistance increases to 30.</Pair>
<Pair title="Special"><em>Fire break</em> relies on audible or visual components.</Pair>
</Ability>
<Ability id="arc-bard-flame_dancer-fan-the-flames-su" icon={["spell-book"]}>
<Pair single id="arc-bard-flame_dancer-fan-the-flames-su">Fan the Flames (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Info">A fire dancer adds <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/flaming_sphere">flaming sphere</Link>, and <Link to="/spell/fireball">fireball</Link> to his list of bard spells known (as 1st-, 2nd-, and 3rd-level spells, respectively).</Pair>
</Ability>
</>};
const _flamesinger = {title: "Flamesinger", jsx: <><h2 id="arc-bard-flamesinger-flamesinger">Flamesinger</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 5</Link><br/>The flamesinger finds inspiration in the mesmerizing beauty of fire. While the flamesinger's tradition originated among the varied peoples of the Padishah Empire of Kelesh, it long ago spread to Qadira and from there throughout the Inner Sea region.</p>
<Ability id="arc-bard-flamesinger-fire-music" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-bard-flamesinger-fire-music">Fire Music</Pair>
<Pair hl title="Replaces">Bardic knowledge, lore master</Pair>
<Pair title="At 1st Level">A flamesinger gains <Link to="/feat/fire_music">Fire Music</Link> as a bonus feat (without needing the meet the normal prerequisites).</Pair>
<Pair title="At 4th Level">When she gains access to 2nd-level spells (4th level), she adds <Link to="/spell/summon_monster_i">summon monster I</Link> and <Link to="/spell/summon_monster_ii">summon monster II</Link> to her bard spells known; every 3 levels thereafter (7th, 10th, 13th, 16th) she gains the next level of <em>summon monster,</em> until she adds <Link to="/spell/summon_monster_vi">summon monster VI</Link> to her spells known at 16th level.</Pair>
<Pair title="Special">The flamesinger must apply the Fire Music feat's effect when casting these spells.</Pair>
</Ability>
<Ability id="arc-bard-flamesinger-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-flamesinger-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A flamesinger gains the following bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-flamesinger-blazing-blades-su" extraClasses="subAbility" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-bard-flamesinger-blazing-blades-su">Blazing Blades (Su)</Pair>
<Pair hl title="Replaces">Inspire courage</Pair>
<Pair title="Ability">The flamesinger's song causes allies' weapons to burst into flames. To be affected, an ally must be able to hear the bard perform and be within 30 feet. An affected creature's successful attacks with manufactured or natural weapons deal 1d4 additional points of fire damage. These flames do not harm the weapon or its wielder. This damage stacks with other sources of fire damage, such as the <Link to="/magic-enh/flaming">flaming</Link> special weapon ability.</Pair>
<Pair title="At 5th Level">The bonus damage becomes 2d4.</Pair>
<Pair title="At 11th Level">The bonus damage becomes 3d4.</Pair>
<Pair title="At 17th Level">The bonus damage becomes 4d4.</Pair>
<Pair title="Special">This is a fire effect that relies on audible components.</Pair>
</Ability>
<Ability id="arc-bard-flamesinger-wildfire-ex" icon={["upgrade"]}>
<Pair single id="arc-bard-flamesinger-wildfire-ex" flavor="Like a raging wildfire, a flamesinger moves with blistering speed.">Wildfire (Ex)</Pair>
<Pair hl title="Replaces">Versatile performance</Pair>
<Pair title="At 2nd Level">The flamesinger gains a +5-foot enhancement bonus to her base speed.</Pair>
<Pair title="At 6th Level">The bonus increases to +10 feet.</Pair>
<Pair title="At 10th Level">The bonus increases to +15 feet.</Pair>
<Pair title="At 14th Level">The bonus increases to +20 feet.</Pair>
<Pair title="At 18th Level">The bonus increases to +25 feet.</Pair>
</Ability>
</>};
const _fortune_teller = {title: "Fortune-Teller", jsx: <><h2 id="arc-bard-fortune_teller-fortune-teller">Fortune-Teller</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 32</Link><br/>Instead of using song and dance, a fortune-teller influences people by divining their fate. Though he learns a great deal about the paths of destiny, his true skill is in making others think he knows more than he truly does.</p>
<Ability id="arc-bard-fortune_teller-fortune-tellers-divinations" icon={["spell-book"]}>
<Pair single id="arc-bard-fortune_teller-fortune-tellers-divinations">Fortune-Teller's Divinations</Pair>
<Pair hl title="Alters">Spell list</Pair>
<Pair title="Info">Add the following spells to the fortune-teller's bard spell list. He doesn't automatically gain them and must still select them as spells known if he wants to use them. 0-<Link to="/spell/guidance">guidance</Link>; 1st-<Link to="/spell/object_reading">object reading</Link>; 2nd-<Link to="/spell/augury">augury</Link>; 3rd-<Link to="/spell/analyze_aura">analyze aura</Link>; 4th-<Link to="/spell/divination">divination</Link>; 5th-<Link to="/spell/retrocognition">retrocognition</Link>; 6th-<Link to="/spell/true_seeing">true seeing</Link>, <Link to="/spell/vision">vision</Link>.</Pair>
</Ability>
<Ability id="arc-bard-fortune_teller-oracular-performance" icon={["magic-swirl"]}>
<Pair single id="arc-bard-fortune_teller-oracular-performance" flavor="A fortune-teller can use Perform (oratory) to read a fortune as part of a bardic performance.">Oracular Performance</Pair>
<Pair hl title="Replaces">Countersong, distraction</Pair>
<Pair hl title="Alters">Bardic performance</Pair>
<Pair title="Ability"><p>Once per hour when the bard performs a fortune-telling using a fortune-teller's deck, a crystal ball, or a similar item, he can read the fortune of one subject of the bardic performance. This is part of the same action used to activate the performance. The fortune-teller rolls d%, adds his bard level to the result, and consults the list below. The outcome depends on whether the chosen creature is an ally (for a beneficial performance) or an enemy (for a detrimental performance).</p>
<ul>
<li>01-35%<ul>
<li>Ally: <strong>Woe</strong></li>
<li>Enemy: <strong>Weal</strong></li>
</ul>
</li>
<li>36-65%<ul>
<li><strong>Inconclusive</strong></li>
</ul>
</li>
<li>66%+<ul>
<li>Ally: <strong>Weal</strong></li>
<li>Enemy: <strong>Woe</strong></li>
</ul>
</li>
</ul>
<p>On an inconclusive result, the bard fails to get any information from the reading and the subject is affected by the performance normally. For an ally, on a weal result the subject's bonus from the performance increases by 1, and on a woe result the subject's bonus decreases by 1 (minimum 0). This affects only numeric bonuses. For example, a subject wouldn't gain another Hit Die from <em>inspire greatness.</em></p>
<p>For an enemy, on a weal result the subject gains a +2 bonus on its saving throw to negate the bard's performance, and on a woe result it takes a -2 penalty on its save. An oracular performance has no effect on an enemy if the performance doesn't require a saving throw.</p>
<p>All adjustments from an oracular performance on a foe last only for that instance of the bardic performance. All adjustments on an ally last for 1 minute, applying each time the fortune-teller uses that particular bardic performance on that ally but ending when the duration expires, even if the performance continues.</p>
</Pair>
</Ability>
<Ability id="arc-bard-fortune_teller-fortune-tellers-acumen" icon={["magic-swirl"]}>
<Pair single id="arc-bard-fortune_teller-fortune-tellers-acumen">Fortune-Teller's Acumen</Pair>
<Pair hl title="Replaces">Well-versed</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever he casts a spell from the divination school, a fortune-teller can use a fortune-teller's deck, crystal ball, or similar item instead of the spell's material component, as long as the cost of the material component is no more than 100 gp per bard level. If he chooses to cast the spell using such an item and the spell's normal material component (regardless of that component's cost), he casts the spell at caster level.</Pair>
<Pair title="Special">This special focus can't be used with other special foci that have a similar effect, but can be used with spells that normally require a focus component (which must also be provided).</Pair>
</Ability>
<Ability id="arc-bard-fortune_teller-bardic-performance" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-bard-fortune_teller-bardic-performance">Bardic Performance</Pair>
<Pair title="Info">A fortune-teller gains the following bardic performance.</Pair>
</Ability>
<Ability id="arc-bard-fortune_teller-transparent-fate-su" extraClasses="subAbility" icon={["armor-downgrade","aura"]}>
<Pair single id="arc-bard-fortune_teller-transparent-fate-su">Transparent Fate (Su)</Pair>
<Pair hl title="Replaces">Dirge of doom</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability"><p>The fortune-teller can cause all enemies within 30 feet to have their near future revealed for all to see. A successful Will saving throw (DC = 10 <Link to="/misc/half">half</Link> the fortune-teller's level the fortune-teller's Cha modifier) negates the effect. This ability causes any creature attacked by an affected enemy to gain a +2 bonus to AC and on saving throws against the attack.</p>
<p>As a secondary effect, if an affected creature's hit points are reduced to less than its Constitution score, it also sees a vision of its own death and must succeed at another Will save or become frightened for 1 round. A given creature needs to save against this secondary effect at most once per performance of transparent fate, even if its hit points are reduced to less than its Constitution score multiple times.</p>
</Pair>
<Pair title="Special">A creature that was targeted by oracular performance when this performance began applies any save DC adjustment to this secondary save as well. At the GM's discretion, the revelation of the creature's fate might have other consequences; for example, a creature's allies might see it was planning to betray them.</Pair>
</Ability>
</>};
export default {animal_speaker:_animal_speaker,arcane_duelist:_arcane_duelist,arcane_healer:_arcane_healer,archaeologist:_archaeologist,archivist:_archivist,argent_voice:_argent_voice,arrowsong_minstrel:_arrowsong_minstrel,averaka_arbiter:_averaka_arbiter,brazen_deceiver:_brazen_deceiver,buccaneer:_buccaneer,busker:_busker,celebrity:_celebrity,chelish_diva:_chelish_diva,chronicler_of_worlds:_chronicler_of_worlds,court_bard:_court_bard,court_fool:_court_fool,cultivator:_cultivator,daredevil:_daredevil,dawnflower_dervish:_dawnflower_dervish,demagogue:_demagogue,dervish_dancer:_dervish_dancer,detective:_detective,dirge_bard:_dirge_bard,disciple_of_the_forked_tongue:_disciple_of_the_forked_tongue,dragon_herald:_dragon_herald,dragon_yapper:_dragon_yapper,duettist:_duettist,dwarven_scholar:_dwarven_scholar,faith_singer:_faith_singer,fey_courtier:_fey_courtier,fey_prankster:_fey_prankster,filidh:_filidh,first_world_minstrel:_first_world_minstrel,flame_dancer:_flame_dancer,flamesinger:_flamesinger,fortune_teller:_fortune_teller}