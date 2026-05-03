import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _acrobat = {title: "Acrobat", jsx: <><h2 id="arc-rogue-acrobat-acrobat">Acrobat</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link><br/>Agility and daring are both excellent rogue traits, and their confluence can create spectacular feats of acrobatics. Whether they are daring thieves, infiltrating assassins, or intrepid spies, proper training in acrobatics is a valuable boon for rogues.</p>
<Ability id="arc-rogue-acrobat-expert-acrobat-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-acrobat-expert-acrobat-ex">Expert Acrobat (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An acrobat does not suffer any armor check penalties on Acrobatics, Climb, Fly, Sleight of Hand, or Stealth skill checks while wearing light armor. When she is not wearing armor, she gains a +2 competency bonus on Acrobatics and Fly skill checks.</Pair>
</Ability>
<Ability id="arc-rogue-acrobat-second-chance-ex" icon={["rolling-dices"]}>
<Pair single id="arc-rogue-acrobat-second-chance-ex">Second Chance (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day per three rogue levels<ByLevelPop levels={[[3,1],[6,2],[9,3],[12,4],[15,5],[18,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">An acrobat can reroll any Acrobatics, Climb, or Fly skill check she has just made. This reroll is made at a -5 penalty. She must take the second result, even if it is worse. An acrobat can use this ability only once on any given skill check.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/expert_leaper">Expert leaper</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, <Link to="/talent/peerless_maneuver">peerless maneuver</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/stand_up">stand up</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/defensive_roll">Defensive roll</Link>, <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/improved_evasion">improved evasion</Link></p></>};
const _bandit = {title: "Bandit", jsx: <><h2 id="arc-rogue-bandit-bandit">Bandit</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link><br/>Bandits, brigands, and highwaymen hone their craft along the roadsides and byways of the world, where they leap from the shadows to plunder the spoils of passing travelers. Bandits tend to have a variety of skills; sometimes these skills are similar to a ranger's, but a bandit's tactics always deal with surprise followed by intimidation, with the clear threat of naked force if intimidation does not do the trick. But not all bandits are ruthless thugs. There are those who become outlaws in opposition to tyrants or similar oppressors. These bandits target the status quo and distribute their spoils back into the needy hands of the peasantry.</p>
<Ability id="arc-rogue-bandit-ambush-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-bandit-ambush-ex" flavor="A bandit becomes fully practiced in the art of ambushing.">Ambush (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When she acts in the surprise round, she can take a move action, standard action, and swift action during the surprise round, not just a move or standard action.</Pair>
</Ability>
<Ability id="arc-rogue-bandit-fearsome-strike-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-bandit-fearsome-strike-ex" flavor="A bandit can terrify an opponent with a single hit.">Fearsome Strike (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Charisma modifier times/day (minimum 1)</Pair>
<Pair title="Ability">When a bandit confirms a critical hit and deals sneak attack damage to an opponent, she can choose to make the opponent <Link to="/misc/frightened">frightened</Link> for a number of rounds equal to her Charisma modifier (minimum 1). She cannot use this ability in conjunction with a critical feat.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/assault_leader">Assault leader</Link>, <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/snap_shot">snap shot</Link>, <Link to="/talent/strong_impression">strong impression</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link>, <Link to="/talent/underhanded">underhanded</Link>, <Link to="/talent/weapon_training">weapon training</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hide_in_plain_sight">Hide in plain sight</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/opportunist">opportunist</Link></p></>};
const _bekyar_kidnapper = {title: "Bekyar Kidnapper", jsx: <><h2 id="arc-rogue-bekyar_kidnapper-bekyar-kidnapper">Bekyar Kidnapper</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 36</Link><br/>One of the many ethnicities found in the Mwangi Expanse, the Bekyar people are slavers and demon worshipers. A Bekyar kidnapper is not only adept at hiding herself in thick jungles and quickly subduing her prey, but also at spreading rumors of hidden ruins, buried treasure, and other such valuables that might lure an unwary foreigner into her traps.</p>
<Ability id="arc-rogue-bekyar_kidnapper-clean-capture-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-bekyar_kidnapper-clean-capture-ex">Clean Capture (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A Bekyar kidnapper reduces the penalty to her combat maneuver check to tie up a pinned or otherwise restrained target by an amount equal to 1/2 her rogue level.</Pair>
<Pair title="Ability">She can take the feats <Link to="/feat/improved_grapple">Improved Grapple</Link> and <Link to="/feat/greater_grapple">Greater Grapple</Link> as rogue talents. She can ignore the <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> requirement when selecting these feats as rogue talents, but must meet all other prerequisites.</Pair>
</Ability>
<Ability id="arc-rogue-bekyar_kidnapper-abductor-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-rogue-bekyar_kidnapper-abductor-ex">Abductor (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A Bekyar kidnapper gains a bonus on combat maneuver checks to grapple a foe. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her rogue level. In addition, the Bekyar kidnapper adds this bonus to her combat maneuver bonus when a foe tries to grapple her or when a grappled target attempts to break free of her grapple.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/black_market_connections">Black market connections</Link>, <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/rope_master">rope master</Link>, <Link to="/talent/survivalist">survivalist</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/crippling_strike">Crippling strike</Link>, <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/weapon_snatcher">weapon snatcher</Link></p></>};
const _bellflower_irrigator = {title: "Bellflower Irrigator", jsx: <><h2 id="arc-rogue-bellflower_irrigator-bellflower-irrigator">Bellflower Irrigator</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 43</Link><br/>Bellflower irrigators take on tasks that many other agents of the <Link to="/rule/bellflower_network">Bellflower Network</Link> find distasteful. Rather than focusing on saving slaves, Bellflower irrigators seek to defeat slavery by aiming to eliminate the source. They gauge the precise moment to strike from the shadows and annihilate slave traders and masters alike. Bellflower irrigators realize that for every slave released today, another will be shackled tomorrow - until all the masters are dead. This cynicism leads Bellflower irrigators to target anyone who owns or sells slaves on Golarion, especially cruel masters within Cheliax.</p>
<p>Though most Bellflower irrigators are <Link to="/race/halfling">halflings</Link>, this branch of the Network is more diverse than many of the others - anyone with a hatred of slavery and a talent for stealth and martial combat is free to join. Bellflower irrigators employ combat methods that many find questionable, such as the use of poison and calculated strikes meant to kill rather than incapacitate. The Bellflower Network does not knowingly allow evil members, but very few Bellflower irrigators are good - most are chaotic neutral in alignment, as their methods of solving the problem of slavery often force them into moral and ethical gray areas. A few Bellflower irrigators are in fact evil, but these rarities do their best to hide their personal lack of morals and addiction to cruelty in order to maintain their positions and connection to the Bellflowers, for as evil as they may be, they share a hatred of slavery with their more altruistic kin. An evil Bellflower irrigator who is found out is typically exiled from the group, yet most continue to fight slavery even after they are sent away in this way.</p>
<Ability id="arc-rogue-bellflower_irrigator-bellflower-crop-ex" icon={["abstract-091"]}>
<Pair single id="arc-rogue-bellflower_irrigator-bellflower-crop-ex">Bellflower Crop (Ex)</Pair>
<Pair title="Standard Action">A Bellflower irrigator can designate a number of allies equal to 3 + his Charisma modifier as part of his <em>Bellflower crop.</em> Members of a <em>Bellflower crop</em> must remain within 30 feet of the Bellflower irrigator to gain any benefits from abilities that affect a <em>Bellflower crop,</em> regardless of the ability's source (whether it's a Bellflower harvester, irrigator, or tiller). If the allies leave this range, the Bellflower irrigator must designate them again to include them in his crop.</Pair>
</Ability>
<Ability id="arc-rogue-bellflower_irrigator-poison-use-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-bellflower_irrigator-poison-use-ex">Poison Use (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">A Bellflower irrigator is trained in the use of poison and cannot accidentally poison himself when applying poison to a weapon.</Pair>
</Ability>
<Ability id="arc-rogue-bellflower_irrigator-grafting-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-bellflower_irrigator-grafting-ex">Grafting (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, rogue talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A Bellflower irrigator is considered to be <Link to="/rule/flanking">flanking</Link> an opponent if at least two members of his <em>Bellflower crop</em> are threatening that opponent, regardless of the irrigator's actual positioning.</Pair>
</Ability>
<Ability id="arc-rogue-bellflower_irrigator-irrigation-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-bellflower_irrigator-irrigation-ex">Irrigation (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four rogue levels beyond 8th<ByLevelPop levels={[[8,1],[12,2],[16,3],[20,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">If a Bellflower irrigator studies his target for 3 rounds (spending a <strong className="hl">standard action</strong> each round to do so) and then makes a sneak attack with a melee weapon that successfully deals damage, the attack has the additional effect of possibly either <Link to="/rule/paralyzed">paralyzing</Link> or killing the target (Bellflower irrigator's choice). The death attack fails if the target detects the Bellflower irrigator or recognizes him as an enemy. If the victim of the attack fails a Fortitude save (DC = 10 + 1/2 the Bellflower irrigator's class level + the Bellflower irrigator's Intelligence modifier) against the kill effect, she dies. If the saving throw fails against the paralysis effect, the victim is rendered helpless and unable to act for 1d6 rounds plus 1 round per 2 rogue levels that the Bellflower irrigator has. If the victim's saving throw succeeds, the attack is just a normal sneak attack. Once the Bellflower irrigator has completed the 3 rounds of study, he must make the irrigation attempt within the next 3 rounds.</Pair>
</Ability>
</>};
const _burglar = {title: "Burglar", jsx: <><h2 id="arc-rogue-burglar-burglar">Burglar</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link><br/>Adept at infiltration, trap removal, and lock picking, burglars prey on the homes of the wealthy and forgotten tombs alike. Such riches are guarded with vicious traps and hazards, but the devious mind of the burglar allows her to find such dangers and avoid them.</p>
<Ability id="arc-rogue-burglar-careful-disarm-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-burglar-careful-disarm-ex">Careful Disarm (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Whenever a burglar attempts to disarm a trap using Disable Device, she does not spring the trap unless she fails by 10 or more. If she does set off a trap she was attempting to disarm, she adds double her <em>trap sense</em> bonus to avoid the trap.</Pair>
</Ability>
<Ability id="arc-rogue-burglar-distraction-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-burglar-distraction-ex">Distraction (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Whenever a burglar is detected while using Stealth, she can immediately attempt a Bluff skill check opposed by the Sense Motive skill of the creature that spotted her. If this check succeeds, the target assumes that the noise was something innocent and disregards the detection. This only functions if the creature cannot see the rogue. This ability can only be used once during a given Stealth attempt. If the same creature detects the rogue's presence again, the ability has no effect.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/fast_picks">Fast picks</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, <Link to="/talent/quick_disable">quick disable</Link>, <Link to="/talent/trap_spotter">trap spotter</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/knock_out_blow">Knock-out blow</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link></p></>};
const _carnivalist = {title: "Carnivalist", jsx: <><h2 id="arc-rogue-carnivalist-carnivalist">Carnivalist</h2>
<p><strong>Sources</strong> <Link to="/source/animal_archive">Animal Archive pg. 6</Link><br/>Carnivalists train their miniature minions to perform acts of larceny and often hide their true talents behind theatrical sideshows.</p>
<Ability icon={["skills"]} id="arc-rogue-carnivalist-undefined">
<Pair id="arc-rogue-carnivalist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/handle_animal">Handle Animal</Link> (CHA)</Pair></Ability>
<Ability id="arc-rogue-carnivalist-familiar" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-carnivalist-familiar">Familiar</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A carnivalist gains a <Link to="/sidekick/familiar">familiar</Link> as a wizard of equal level. Levels in a class that grants a familiar stack with carnivalist levels for determining the familiar's abilities.</Pair>
</Ability>
<Ability id="arc-rogue-carnivalist-pet-performance-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-carnivalist-pet-performance-ex">Pet Performance (Ex)</Pair>
<Pair hl title="Replaces">Rogue talents gained at 2nd, 4th, and 6th level</Pair>
<Pair title="Ability">A carnivalist gains use of several <Link to="/ability/bardic_performances">bardic performances</Link>, making Handle Animal checks in place of any Perform checks.</Pair>
<Pair title="At 2nd Level">She gains the <Link to="/performance/distraction">distraction</Link> bardic performance.</Pair>
<Pair title="At 4th Level">She gains the <Link to="/performance/fascinate">fascinate</Link> bardic performance.</Pair>
<Pair title="At 6th Level">She gains use of the performance below.</Pair>
</Ability>
<Ability id="arc-rogue-carnivalist-trained-legerdemain-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-rogue-carnivalist-trained-legerdemain-ex">Trained Legerdemain (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A carnivalist can command a familiar or pet within 30 feet to make a Disable Device or Sleight of Hand check as if trained in the skill, using its own skill ranks (if any), Dexterity modifier, and equipment, with a competence bonus equal to 1/2 her rogue level. The check requires the normal amount of time to complete and the DC increases by 5. The carnivalist must maintain this pet performance each round her familiar or pet attempts a Disable Device or Sleight of Hand check.</Pair>
<Pair title="Special">The pet performance ability otherwise functions identically to bardic performance. Levels in a class with the <em>distraction</em> or <em>fascinate</em> bardic performances stack with carnivalist levels for the purpose of determining bonuses granted by these performances.</Pair>
</Ability>
<Ability id="arc-rogue-carnivalist-sneak-attack-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-rogue-carnivalist-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Alters">Sneak attack</Pair>
<Pair title="At 2nd Level">A carnivalist gains this ability starting at 2nd level. The sneak attack damage dealt is 1d6 points. A carnivalist's familiar can also deal sneak attack damage as appropriate to foes as long as it is within 30 feet of her (though only Small and larger creatures may flank enemies, as usual).</Pair>
<Pair title="At 6th Level">The sneak attack damage becomes 2d6 points.</Pair>
<Pair title="At 10th Level">The sneak attack damage increases to 3d6 points.</Pair>
<Pair title="At 14th Level">The sneak attack damage becomes 4d6 points.</Pair>
<Pair title="At 18th Level">The sneak attack damage increases to 5d6 points.</Pair>
</Ability>
<Ability id="arc-rogue-carnivalist-animal-trainer-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-rogue-carnivalist-animal-trainer-ex">Animal Trainer (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A carnivalist receives a bonus equal to 1/2 her rogue level whenever she uses Handle Animal on a Tiny or Small animal. In addition, she can increase the DC by 5 to reduce the time needed to teach an animal a new trick or train an animal for a general purpose to 1 day for every week normally required. She can also train more than one animal at once, although each animal after the first adds 2 to the DC.</Pair>
</Ability>
</>};
const _cat_burglar = {title: "Cat Burglar", jsx: <><h2 id="arc-rogue-cat_burglar-cat-burglar">Cat Burglar</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 92</Link><br/>Gifted with finesse and stealth, catfolk make excellent burglars. Cat burglars are masters of breaking and entering, using their feline grace to make it seem as though no crime was ever committed in the first place. Few locks can withstand skilled cat burglars, and such nimble rogues are capable of bypassing traps without activating them and enabling associates to do the same. A cat burglar has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-cat_burglar--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/catfolk">Catfolk</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-rogue-cat_burglar-phantom-presence-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-rogue-cat_burglar-phantom-presence-ex" flavor="A cat burglar masters stealthy movement and leaves no trace of her passing in dungeons and cities.">Phantom Presence (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">While in dungeon and urban environments, she leaves no trail and cannot be tracked, though she can choose to leave behind a trail if she so desires. Furthermore, she can always choose to take 10 when making a Stealth check.</Pair>
</Ability>
<Ability id="arc-rogue-cat_burglar-trap-saboteur-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-rogue-cat_burglar-trap-saboteur-su" flavor="A cat burglar becomes a master of avoiding and manipulating traps and locks.">Trap Saboteur (Su)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">She can attempt to open a lock as a <strong className="hl">standard action</strong> and takes 1/2 the normal amount of time to disable traps (minimum 1 round). When she has bypassed a trap without disarming it, she can also choose to suppress its trigger for up to 1 minute. If she does, she can also choose to end this suppression prematurely as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/fast_picks">Fast picks</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/quick_disable">quick disable</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link><sup><InnerLink showBacklink="backlink-arc-rogue-cat_burglar-fake-fn-1" id="arc-rogue-cat_burglar-fake-fn-1" data-hash-target to="arc-rogue-cat_burglar-fake-fn-1-target">1</InnerLink></sup></p>
<p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/another_day">Another day</Link>, <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link></p><section data-footnotes><h3 id="arc-rogue-cat_burglar-label">Footnotes</h3><ol>
<li id="arc-rogue-cat_burglar-fake-fn-1-target"><p>The original text also recommended <em>convincing fakes</em> and <em>dodge trap.</em> However, these talents do not exist - the former may refer to the Deception Talent <Link to="/talent/sczarni_smuggler">sczarni smuggler</Link>, though. <InnerLink aria-label="Back to reference 1" id="backlink-arc-rogue-cat_burglar-fake-fn-1" data-hash-target to="arc-rogue-cat_burglar-fake-fn-1">↩</InnerLink></p></li>
</ol></section></>};
const _chameleon = {title: "Chameleon", jsx: <><h2 id="arc-rogue-chameleon-chameleon">Chameleon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 71</Link><br/>An absolute master of disguise, a chameleon effortlessly blends into any environment. Whether disappearing into crowded city streets, vanishing into desert sands, or slipping into the darkness of subterranean tunnels, the chameleon relies upon her ability to become part of her surroundings.</p>
<Ability id="arc-rogue-chameleon-misdirection-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-chameleon-misdirection-ex" flavor="A chameleon begins her career knowing that the secret to disappearing lies in deceiving the senses of her observers.">Misdirection (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Every day she gains a pool of stealth points equal to her ranks in Bluff. These points refresh at the start of each day. Before making a Stealth check, she can choose to put stealth points into the roll, gaining a bonus on Stealth checks equal to the number of stealth points she puts into the roll.</Pair>
<Pair title="Special">If she gains a bonus on Bluff checks because of a feat (such as <Link to="/feat/skill_focus">Skill Focus</Link> [Bluff]), she adds a number of points to her stealth pool equal to the bonus the feat grants.</Pair>
</Ability>
<Ability id="arc-rogue-chameleon-effortless-sneak-sp" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-chameleon-effortless-sneak-sp">Effortless Sneak (Sp)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The chameleon chooses a single terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> class feature. While she is within that terrain, she can take 10 on any Stealth check she can make within that terrain.</Pair>
<Pair title="At 6th Level">She chooses a new type of terrain and gains this ability with the newly picked terrain.</Pair>
<Pair title="At 9th Level">She chooses a new type of terrain and gains this ability with the newly picked terrain.</Pair>
<Pair title="At 12th Level">She chooses a new type of terrain and gains this ability with the newly picked terrain.</Pair>
<Pair title="At 15th Level">She chooses a new type of terrain and gains this ability with the newly picked terrain.</Pair>
<Pair title="At 18th Level">She chooses a new type of terrain and gains this ability with the newly picked terrain.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/camouflage">Camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/quick_disguise">quick disguise</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hide_in_plain_sight">Hide in plain sight</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link></p></>};
const _charlatan = {title: "Charlatan", jsx: <><h2 id="arc-rogue-charlatan-charlatan">Charlatan</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 72</Link><br/>A charlatan is a master of lies and deception. Whether creating simple cons or elaborately woven hoaxes capable of swaying the masses and those in positions of power, a charlatan is often a purveyor of snake-oil, forgeries, and rumormongering.</p>
<Ability id="arc-rogue-charlatan-natural-born-liar-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-charlatan-natural-born-liar-ex">Natural Born Liar (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When a charlatan successfully deceives a creature with a Bluff, that creature takes a -2 penalty on the charlatan's Bluff checks for the next 24 hours. This ability does not stack with itself.</Pair>
</Ability>
<Ability id="arc-rogue-charlatan-grand-hoax-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-charlatan-grand-hoax-ex" flavor={["The charlatan begins to master the art of the ",{"tag":"em","content":"grand hoax","props":{}}," and learns to create deceptions designed to bestow harm upon her foes."]}>Grand Hoax (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">She gains the <Link to="/talent/rumormonger">rumormonger</Link> advanced talent, even though she is not yet 10th level.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/black_market_connections">Black market connections</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/underhanded">underhanded</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hard_minded">Hard minded</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link></p></>};
const _consigliere = {title: "Consigliere", jsx: <><h2 id="arc-rogue-consigliere-consigliere">Consigliere</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 44</Link><br/>Consiglieres act as trusted mediators and administrators for crime families and various criminal organizations, and many serve as the right hand to the leaders of such groups. Other consiglieres prefer to work as independent operators and sell their advice and expertise to the highest bidder. Though some consiglieres insulate themselves from violence and criminal activities, many enjoy getting their hands dirty leading strike teams or gangs of hardened thugs.</p>
<Ability icon={["skills"]} id="arc-rogue-consigliere-undefined">
<Pair id="arc-rogue-consigliere-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-rogue-consigliere-convincing-attitude-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-consigliere-convincing-attitude-ex">Convincing Attitude (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding, evasion</Pair>
<Pair title="At 1st Level">A consigliere gains <Link to="/feat/persuasive">Persuasive</Link> as a bonus feat.</Pair>
<Pair title="At 2nd Level">He gains the <Link to="/talent/charmer">charmer</Link> rogue talent (or the <Link to="/talent/certainty">certainty</Link> [Diplomacy] rogue talent if he is an unchained rogue).</Pair>
<Pair title="At 3rd Level">If a consigliere attempts a Diplomacy check and fails to influence a creature's attitude by 5 or more, the creature's attitude remains unchanged instead of decreasing by one step.</Pair>
</Ability>
<Ability id="arc-rogue-consigliere-combat-advisor-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-consigliere-combat-advisor-ex">Combat Advisor (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="At 4th Level">Whenever a consigliere misses with a melee attack against an opponent, he can designate an ally within 30 feet of the target to receive a +1 insight bonus on her next attack roll against that opponent before the consigliere's next turn.</Pair>
<Pair title="At 8th Level">The insight bonus increases to +2.</Pair>
</Ability>
<Ability id="arc-rogue-consigliere-bonus-feats-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-consigliere-bonus-feats-ex">Bonus Feats (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="At 4th Level">A consigliere can choose to gain a single <Link to="/main/teamwork_feat">teamwork feat</Link> instead of a single rogue talent. (This substitution can only be used once, at either 4th, 6th, or 8th level.)</Pair>
<Pair title="At 12th Level">The consigliere can choose to gain teamwork feats instead of rogue talents as many times as she chooses.</Pair>
</Ability>
<Ability id="arc-rogue-consigliere-field-boss-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-consigliere-field-boss-ex">Field Boss (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent normally gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Usage">1 time/day + 1 per four rogue levels beyond 10th<ByLevelPop levels={[[10,1],[14,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A consigliere can grant a teamwork feat to all allies within 30 feet who can see and hear her. This teamwork feat must be one the consigliere knows. Allies retain the use of this feat for 3 rounds plus 1 round for every 2 rogue levels the consigliere has. Allies do not need to meet the prerequisites of this teamwork feat.</Pair>
</Ability>
<p><strong>These rogue talents complement this archetype:</strong> <Link to="/talent/assault_leader">assault leader</Link>, <Link to="/talent/black_market_connections">black market connections</Link>, <Link to="/talent/shades_of_gray">shades of gray</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/certainty">certainty</Link> (Bluff; unchained rogue only)</p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hard_minded">Hard minded</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/redirect_attack">redirect attack</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link></p></>};
const _construct_saboteur = {title: "Construct Saboteur", jsx: <><h2 id="arc-rogue-construct_saboteur-construct-saboteur">Construct Saboteur</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 12</Link><br/>The construct saboteur harnesses arcane energy to combat the golems and eldritch guardians that prowl the depths of ancient ruins and forgotten tombs.</p>
<Ability icon={["skills"]} id="arc-rogue-construct_saboteur-undefined">
<Pair id="arc-rogue-construct_saboteur-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Knowledge (local)</Pair></Ability>
<Ability id="arc-rogue-construct_saboteur-arcane-strike-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-construct_saboteur-arcane-strike-ex">Arcane Strike (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">A construct saboteur gains <Link to="/feat/arcane_strike">Arcane Strike</Link> as a bonus feat, even if she does not meet the prerequisites. She uses her construct saboteur class level in place of her caster level for the purposes of the feat's effects.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-arcane-sabotage-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-construct_saboteur-arcane-sabotage-su" flavor="A construct saboteur can user her arcane prowess to hinder constructs.">Arcane Sabotage (Su)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">She gains one sabotage ability (listed below). Whenever she uses Arcane Strike to attack a construct, she can activate one of her sabotage abilities that she has gained.</Pair>
<Pair title="At 4th Level">From here on out, she can select any sabotage ability in place of a rogue talent.</Pair>
<Pair title="Special">The DC for any sabotage ability that requires a saving throw is 10 + half the construct saboteur's level + the construct saboteur's Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-diminish-senses" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-construct_saboteur-diminish-senses">Diminish Senses</Pair>
<Pair title="Ability">A jolt of energy overwhelms the construct's senses. The construct is <Link to="/misc/blinded">blinded</Link> for 1 round. A construct saboteur can forgo dealing sneak attack damage to extend the duration of the blindness by 1 round for every 2d6 points of sneak attack damage forgone in this way. A construct can negate this effect with a successful Will save.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-magic-vulnerability" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-construct_saboteur-magic-vulnerability">Magic Vulnerability</Pair>
<Pair title="Ability">A field of energy enshrouds the construct, disabling its immunity to magic for 1 round. The construct instead gains spell resistance equal to 15 + its CR. A construct saboteur can forgo dealing sneak attack damage to reduce this spell resistance. The construct's spell resistance is reduced by 1 for every 1d6 points of sneak attack damage forgone in this way. A construct can negate this effect with a successful Will save.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-overwhelming-jolt" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-construct_saboteur-overwhelming-jolt">Overwhelming Jolt</Pair>
<Pair title="Ability">A sudden burst of power moves over the surface of the construct, giving it the <Link to="/misc/staggered">staggered</Link> condition for 1 round. A construct can negate this effect with a successful Will save.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-slowing-pulse" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-construct_saboteur-slowing-pulse">Slowing Pulse</Pair>
<Pair title="Ability">A surge of slowing energy ripples through the construct, reducing its speed by 5 feet for a number of rounds equal to the construct saboteur's Intelligence modifier. A construct saboteur can forgo dealing sneak attack damage to reduce the construct's speed by an additional 5 feet for every 1d6 points of sneak attack damage forgone in this way. This ability cannot lower a construct's movement speed below 5 feet. A construct can reduce the duration of this effect to 1 round with a successful Reflex save.</Pair>
</Ability>
<Ability id="arc-rogue-construct_saboteur-dismantling-strikes-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-construct_saboteur-dismantling-strikes-ex">Dismantling Strikes (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="At 3rd Level">A construct saboteur ignores the first 2 points of DR or hardness when attacking constructs.</Pair>
<Pair title="At 6th Level">The amount of DR ignored becomes 4.</Pair>
<Pair title="At 9th Level">The amount of DR ignored increases to 6.</Pair>
<Pair title="At 12th Level">The amount of DR ignored becomes 8.</Pair>
<Pair title="At 15th Level">The amount of DR ignored increases to 10.</Pair>
<Pair title="At 18th Level">The amount of DR ignored becomes 12.</Pair>
</Ability>
</>};
const _counterfeit_mage = {title: "Counterfeit Mage", jsx: <><h2 id="arc-rogue-counterfeit_mage-counterfeit-mage">Counterfeit Mage</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 109</Link><br/>Charlatans and stage magicians use sleight of hand to fake magic. A counterfeit mage goes a step further, parroting the motions and activation phrases used by arcane casters to activate wands or other magical accoutrements. While counterfeit mages rarely fool a real wizard, their command of the arcane is enough to convince most lay people.</p>
<Ability id="arc-rogue-counterfeit_mage-magical-expertise-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-rogue-counterfeit_mage-magical-expertise-ex">Magical Expertise (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A counterfeit mage adds 1/2 his level to Disable Device checks to disarm magical traps, Perception checks to find magical traps, and Use Magic Device checks to activate scrolls and wands.</Pair>
<Pair title="Ability">A counterfeit mage can use Disable Device to disarm magic traps.</Pair>
</Ability>
<Ability id="arc-rogue-counterfeit_mage-signature-wand-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-counterfeit_mage-signature-wand-ex">Signature Wand (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A counterfeit mage can spend 1 hour practicing with a wand to designate it as his signature wand. He can draw that wand as a <strong className="hl">free action</strong>, and can activate it without having to succeed at a Use Magic Device check. He can change his signature wand once per day.</Pair>
</Ability>
<Ability id="arc-rogue-counterfeit_mage-wand-adept-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-counterfeit_mage-wand-adept-ex">Wand Adept (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A counterfeit mage can use his Dexterity modifier in place of his Charisma modifier when attempting Use Magic Device checks to activate wands.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/deft_palm">Deft palm</Link>, <Link to="/talent/esoteric_scholar">esoteric scholar</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/trap_spotter">trap spotter</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/dispelling_attack">Dispelling attack</Link>, <Link to="/talent/familiar">familiar</Link>, <Link to="/talent/slippery_mind">slippery mind</Link></p></>};
const _cutpurse = {title: "Cutpurse", jsx: <><h2 id="arc-rogue-cutpurse-cutpurse">Cutpurse</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 132</Link><br/>Everyone who lives in the city understands that a wealthy man stays wealthy by guarding his purse while wandering the streets and markets. Cutpurses are often trained by guilds to collect the guild's tax from local businesses on a daily basis, whether through intimidation or pickpocketing. Some find themselves taking up the mantle of adventurer, and their talents are generally appreciated in this role, but the cutpurse is still the first person her companions look to when an item goes missing.</p>
<Ability id="arc-rogue-cutpurse-measure-the-mark-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-cutpurse-measure-the-mark-ex">Measure the Mark (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">When a cutpurse makes a Sleight of Hand check to take something from a creature, the target makes its Perception check before the rogue makes her Sleight of Hand check, and the rogue knows the Perception check result. She can decide whether or not to make the check based on the results of the target's Perception check. If the rogue elects not to make the check, she can make a Bluff check, opposed by the target's Sense Motive, to prevent the target from noticing the attempt.</Pair>
</Ability>
<Ability id="arc-rogue-cutpurse-stab-and-grab-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-cutpurse-stab-and-grab-ex">Stab and Grab (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">A cutpurse can make an attack and also make a Sleight of Hand check to steal something from the target of the attack. If the attack deals sneak attack damage, the rogue can use Sleight of Hand to take an item from the creature during combat; otherwise this ability can only be used in a surprise round before the target has acted. If the attack is successful, the target takes a -5 penalty on the Perception check to notice the theft.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/combat_swipe">Combat swipe</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/surprise_attack">surprise attack</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/crippling_strike">Crippling strike</Link>, <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/skill_mastery">skill mastery</Link></p></>};
const _dark_lurker = {title: "Dark Lurker", jsx: <><h2 id="arc-rogue-dark_lurker-dark-lurker">Dark Lurker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 26</Link><br/>Dark lurkers use darkness as an ally. They are widely feared in many major metropolises, spoken of as "living shadows" by guards of Magnimar who patrol under the Irespan and called "the hungry night" by citizens of Absalom who mistake them for fetchling assassins.</p>
<Ability id="arc-rogue-dark_lurker-blades-from-the-shadows-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dark_lurker-blades-from-the-shadows-ex">Blades from the Shadows (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="At 2nd Level">A dark lurker gains <Link to="/feat/shadow_strike">Shadow Strike</Link> as a bonus feat. (A character using the unchained rogue class instead gains the ability to make attacks of opportunity against foes with <Link to="/rule/cover">cover</Link>, though not foes with improved cover or total cover).</Pair>
<Pair title="At 6th Level">The dark lurker can deal <Link to="/misc/precision_damage">precision damage</Link> to targets with <Link to="/rule/concealment">total concealment</Link> (though any miss chance applies normally, and may prevent an attack from hitting in the first place).</Pair>
<Pair title="Special">The dark lurker can take <Link to="/ability/evasion">evasion</Link> as a rogue talent.</Pair>
</Ability>
<Ability id="arc-rogue-dark_lurker-blind-fight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dark_lurker-blind-fight-ex">Blind-Fight (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A dark lurker gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-rogue-dark_lurker-improved-blind-fight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dark_lurker-improved-blind-fight-ex">Improved Blind-Fight (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 8th level</Pair>
<Pair title="At 8th Level">A dark lurker gains <Link to="/feat/improved_blind_fight">Improved Blind-Fight</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-rogue-dark_lurker-greater-blind-fight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dark_lurker-greater-blind-fight-ex">Greater Blind-Fight (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 14th level</Pair>
<Pair title="At 14th Level">A dark lurker gains <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-rogue-dark_lurker-instinctual-sense-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dark_lurker-instinctual-sense-ex">Instinctual Sense (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 20th level</Pair>
<Pair title="At 20th Level">A dark lurker gains <Link to="/umr/blindsight">blindsight</Link> with a range of 30 feet.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/befuddling_strike">Befuddling strike</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/snipers_eye">sniper's eye</Link>, <Link to="/talent/surprise_attack">surprise attack</Link></p><p><strong className="hl">This advanced rogue talent complements this archetype:</strong> <Link to="/talent/opportunist">Opportunist</Link>.</p>
</>};
const _deadly_courtesan = {title: "Deadly Courtesan", jsx: <><h2 id="arc-rogue-deadly_courtesan-deadly-courtesan">Deadly Courtesan</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 208</Link><br/>Skilled at manipulation and diversion, the deadly courtesan builds up those around her and periodically takes them down. She can be a spy, entertainer, assassin, bodyguard, or just an intimate to someone who needs it most. A deadly courtesan has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-deadly_courtesan--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vishkanya">Vishkanya</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-rogue-deadly_courtesan-undefined">
<Pair id="arc-rogue-deadly_courtesan-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-rogue-deadly_courtesan-bardic-performance-su" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-deadly_courtesan-bardic-performance-su">Bardic Performance (Su)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">A number of rounds/day equal to her rogue level - 1 + her Charisma modifier</Pair>
<Pair title="Ability">A deadly courtesan gains the <Link to="/ability/bardic_performance">bardic performance</Link> ability and the <Link to="/performance/fascinate">fascinate</Link> bardic performance. Her fascinate DC is 10 + 1/2 her rogue level + her Charisma modifier.</Pair>
<Pair title="Special">If the courtesan also has bard levels, she may use these rounds for either class's <em>fascinate</em> bardic performance, and her bard and rogue levels stack for determining her fascinate DC.</Pair>
</Ability>
<Ability id="arc-rogue-deadly_courtesan-inspire-competence-su" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-deadly_courtesan-inspire-competence-su">Inspire Competence (Su)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A deadly courtesan can use her bardic performance to <Link to="/performance/inspire_competence">inspire competence</Link>. The bonus begins at +2.</Pair>
<Pair title="At 9th Level">The bonus becomes +3.</Pair>
<Pair title="At 15th Level">The bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-rogue-deadly_courtesan-performance-strike-sp" icon={["upgrade"]}>
<Pair single id="arc-rogue-deadly_courtesan-performance-strike-sp">Performance Strike (Sp)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">A deadly courtesan may expend rounds of bardic performance to gain a morale bonus on one attack roll. The amount of the bonus is equal to the number of bardic performance rounds expended (maximum bonus equal to 1/2 her deadly courtesan level).</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/charmer">Charmer</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/deft_palm">deft palm</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/stand_up">stand up</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/master_of_disguise">Master of disguise</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link></p></>};
const _desert_raider = {title: "Desert Raider", jsx: <><h2 id="arc-rogue-desert_raider-desert-raider">Desert Raider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 76</Link><br/>Desert raiders constantly threaten caravans that cross vast, desolate expanses. Some desert raiders are tribespeople who raid to supplement their hardscrabble existence, while others are career thieves who take to the desert to avoid the noose. To survive, a desert raider must learn the secrets of the deserts and become inured to their dangers. Though most often associated with hot deserts, desert raiders can also operate in tundra, where sunlight on snow can blind as easily as on sand.</p>
<Ability icon={["skills"]} id="arc-rogue-desert_raider-undefined">
<Pair id="arc-rogue-desert_raider-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_geography">Knowledge (geography)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering), Swim</Pair></Ability>
<Ability id="arc-rogue-desert_raider-desert-tracker-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-rogue-desert_raider-desert-tracker-ex">Desert Tracker (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">A desert raider is immune to the <Link to="/misc/dazzled">dazzled</Link> condition. A desert raider adds half her level (minimum 1) as a bonus on Survival skill checks to follow or identify tracks in desert terrain.</Pair>
</Ability>
<Ability id="arc-rogue-desert_raider-sun-at-your-back-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-desert_raider-sun-at-your-back-ex" flavor="A desert raider can use the reflected light of the blinding sun to conceal her presence.">Sun at Your Back (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A desert raider in bright light can attempt Stealth checks without cover or concealment but takes a -5 penalty on her check. The desert raider cannot use this ability to hide from creatures immune to the <Link to="/misc/blinded">blinded</Link> or dazzled conditions.</Pair>
</Ability>
<Ability id="arc-rogue-desert_raider-light-step-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-rogue-desert_raider-light-step-ex">Light Step (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The DC of Survival checks to track the desert raider increase by 2 + <Link to="/misc/one_third">one-third</Link> of her rogue level. In addition, she gains a bonus on Perception checks to avoid being surprised by a foe. This bonus on is equal to one-third of her rogue level.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/fast_stealth">Fast stealth</Link>, <Link to="/talent/getaway_artist">getaway artist</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/stand_up">stand up</Link>, <Link to="/talent/surprise_attack">surprise attack</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hide_in_plain_sight">Hide in plain sight</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link></p></>};
const _discretion_specialist = {title: "Discretion Specialist", jsx: <><h2 id="arc-rogue-discretion_specialist-discretion-specialist">Discretion Specialist</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 25</Link><br/>Often brought in to handle messy situations, discretion specialists deal with bodies, inconvenient witnesses, and other loose ends. Many organizations employ them to cover up activities that might be unpopular - should they become known to the general populace.</p>
<p>This archetype is appropriate for rogues and unchained rogues.</p>
<Ability id="arc-rogue-discretion_specialist-fast-talker-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-discretion_specialist-fast-talker-ex">Fast Talker (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">A discretion specialist adds half her rogue level (minimum +1) as a bonus on Bluff, Diplomacy, and Intimidate checks.</Pair>
</Ability>
<Ability id="arc-rogue-discretion_specialist-obfuscation-su" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-discretion_specialist-obfuscation-su" flavor="A discretion specialist is highly skilled at convincing others not to trust their own senses.">Obfuscation (Su)</Pair>
<Pair hl title="Replaces">Trap sense (for a core rogue), danger sense (for an unchained rogue)</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day + 1 per five rogue levels<ByLevelPop levels={[[3,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Full-Round Action">The discretion specialist can convince one living creature within 30 feet that up to 5 minutes of its memories from the past hour are unreliable. If the target fails a Will saving throw (DC = 10 + half the discretion specialist's rogue level + her Intelligence modifier), the target is convinced that those memories didn't happen or that it's confusing the memories with a dream (or is otherwise hazy as to the memories' reality). Each hour after the discretion specialist uses this ability, the target can attempt a new Will saving throw to realize that its relevant memories have been tampered with, although not necessarily that the discretion specialist was the originator of the tampering.</Pair>
<Pair title="At 6th Level">The discretion specialist can obfuscate memories from up to 2 hours in the past.</Pair>
<Pair title="At 9th Level">The discretion specialist can obfuscate memories from up to 3 hours in the past.</Pair>
<Pair title="At 12th Level">The discretion specialist can obfuscate memories from up to 4 hours in the past.</Pair>
<Pair title="At 15th Level">The discretion specialist can obfuscate memories from up to 5 hours in the past.</Pair>
<Pair title="At 18th Level">The discretion specialist can obfuscate memories from up to 6 hours in the past.</Pair>
</Ability>
<Ability id="arc-rogue-discretion_specialist-evidence-disposal-sp" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-discretion_specialist-evidence-disposal-sp" flavor="A discretion specialist can cover up a corpse's cause of a death - or dispose of it entirely.">Evidence Disposal (Sp)</Pair>
<Pair hl title="Replaces">Rogue talents gained at 4th and 12th levels</Pair>
<Pair title="At 4th Level">The discretion specialist gains the ability to cast <Link to="/spell/dress_corpse">dress corpse</Link> as a spell-like ability, using her rogue level as her caster level. She can use this ability a number of times per day equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> of her rogue level.</Pair>
<Pair title="At 12th Level">She can spend two uses of this ability to disintegrate a corpse entirely as a <strong className="hl">full-round action</strong>, leaving behind only a trace of fine dust (a disintegrated creature's equipment is unaffected). The target cannot be an undead creature. A corpse disintegrated this way cannot be brought back to life except by <Link to="/spell/resurrection">resurrection</Link> or more powerful magic, including <Link to="/spell/miracle">miracle</Link> or <Link to="/spell/wish">wish</Link>.</Pair>
</Ability>
<Ability id="arc-rogue-discretion_specialist-no-loose-ends-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-rogue-discretion_specialist-no-loose-ends-ex" flavor="The discretion specialist can prevent opponents from escaping.">No Loose Ends (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="At 4th Level">Opponents damaged by the discretion specialist's sneak attack are unable to take the <Link to="/rule/withdraw">withdraw</Link> action for 1 round, though they can still move as normal.</Pair>
<Pair title="At 8th Level">A creature damaged by the discretion specialist's sneak attack is hampered in casting spells of the teleportation subschool (such as <Link to="/spell/dimension_door">dimension door</Link>) as well as using methods of magical transport such as <Link to="/spell/shadow_walk">shadow walk</Link>. A target attempting to cast such a spell before the end of the discretion specialist's next turn must succeed at a <Link to="/rule/concentration">concentration</Link> check (in addition to any concentration checks required for casting while threatened or other circumstances) or lose the spell. The DC of this check is equal to 10 + half the discretion specialist's rogue level + her Intelligence modifier.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/camouflage">Camouflage</Link>, <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/quick_disguise">quick disguise</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hide_in_plain_sight">Hide in plain sight</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link></p></>};
const _dreamthief = {title: "Dreamthief", jsx: <><h2 id="arc-rogue-dreamthief-dreamthief">Dreamthief</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 12</Link><br/>The dreamthief is master of both waking and dreaming worlds. Each dreamthief bears a focused fragment of emotion, known as a dreamshard, within her soul. Some are born with such fragments, while others gain their dreamshards during traumatic moments, especially those involving nightmares, attacks by ethereal beings, or incidents that take place in the Dimension of Dreams. Whether a dreamshard is shaped from the dreamer's aggregated emotions or manifested from a repressed aspect of herself, this metaphysical crystal grants a dreamthief supernatural powers, which she supplements with skill and grace.</p>
<p>Dreamthieves' powers grant them enhanced access to <Link to="/rule/dimension_of_dreams">dreamscapes</Link>. Using the unique power of her dreamshard, a knowledgeable dreamthief can crystallize and steal dreamers' deepest emotions. Such theft can alter dreamers in profound ways, whether for better or worse.</p>
<Ability icon={["skills"]} id="arc-rogue-dreamthief-undefined">
<Pair id="arc-rogue-dreamthief-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT)</Pair></Ability>
<Ability id="arc-rogue-dreamthief-dreamshard-focus-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-rogue-dreamthief-dreamshard-focus-su">Dreamshard Focus (Su)</Pair>
<Pair hl title="Replaces">Sneak attack, master strike</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A dreamthief selects an <Link to="/ability/emotional_focus">emotional focus</Link> from among those available to a spiritualist's phantom. She gains the abilities granted by that emotional focus (with the exception of the focus determining her <Link to="/misc/good_saving_throws">good saving throws</Link> - she retains the typical rogue saves). For each of the two skills associated with that emotional focus, a dreamthief gains ranks in that skill equal to her rogue level; this does not allow her ranks in these skills to exceed her Hit Dice.</Pair>
<Pair title="Passive Ability">A dreamthief is considered to be both a phantom and a spiritualist for the purpose of emotional focus abilities whose effect references both a phantom and a spiritualist, such as <em>dutiful strike,</em> and she treats her rogue level as both her spiritualist level and her phantom Hit Dice when determining abilities and save DCs.</Pair>
<Pair title="Ability">Once per round when a dreamthief makes a melee attack, she can declare that attack to be a <em>dreamstrike.</em> This does not require an action, but a dreamthief must declare a <em>dreamstrike</em> before making the attack roll. A <em>dreamstrike</em> is treated as a slam attack for the purpose of emotional focus abilities that apply to a phantom's slam attacks, such as <em>miserable strike.</em></Pair>
<Pair title="At 20th Level">Any melee attack a dreamthief makes automatically gains this benefit.</Pair>
</Ability>
<Ability id="arc-rogue-dreamthief-lucid-dreamer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-dreamthief-lucid-dreamer-ex">Lucid Dreamer (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A dreamthief can control her dreams, and gains <Link to="/feat/lucid_dreamer">Lucid Dreamer</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-rogue-dreamthief-soothe-dreaming-su" icon={["heart-plus"]}>
<Pair single id="arc-rogue-dreamthief-soothe-dreaming-su">Soothe Dreaming (Su)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day per three rogue levels<ByLevelPop levels={[[4,1],[6,2],[9,3],[12,4],[15,5],[18,6]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A dreamthief can steal negative emotions, freeing allies from harmful conditions. This acts as the <Link to="/class/mesmerist">mesmerist's</Link> <em>touch treatment</em> ability, treating her rogue level as her mesmerist level.</Pair>
</Ability>
<Ability id="arc-rogue-dreamthief-dream-infiltrator-sp" extraClasses="hasSubs" icon={["heart-plus"]}>
<Pair single id="arc-rogue-dreamthief-dream-infiltrator-sp" flavor="A dreamthief can enter dreams, whether to learn secrets or meddle more directly.">Dream Infiltrator (Sp)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge, rogue talent gained at 12th level</Pair>
<Pair title="At 8th Level">A dreamthief can cast <Link to="/spell/dream_scan">dream scan</Link> once per day as a spell-like ability.</Pair>
<Pair title="At 12th Level">Once per day she can cast either <em>dream scan</em> or <Link to="/spell/dream_travel">dream travel</Link> as a spell-like ability.</Pair>
<Pair title="Special">The caster level of these spell-like abilities is equal to her rogue level.</Pair>
</Ability>
<Ability id="arc-rogue-dreamthief-touch-treatment-su" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-rogue-dreamthief-touch-treatment-su" flavor="Text from the mesmerist ability.">Touch Treatment (Su)</Pair>
<Pair title="At 3rd Level">You can help allies shake off harmful conditions - especially those that affect their minds - by channeling psychic energy through your healing hands. You must be able to touch your target. You can remove the <em>fascinated</em> or <em>shaken</em> condition from your target each time you use this ability. This is the "minor" ability.</Pair>
<Pair title="At 6th Level">You can now also remove the <em>confused, dazed, frightened,</em> and <em>sickened</em> conditions. This is the "moderate" ability.</Pair>
<Pair title="At 10th Level">You can now also remove the <em>cowering, nauseated, panicked,</em> and <em>stunned</em> conditions. This is the "greater" ability.</Pair>
<Pair title="At 14th Level">You can instead expend one use of touch treatment to replicate the effects of <Link to="/spell/break_enchantment">break enchantment</Link>. This targets only one creature you are touching and follows all other restrictions of touch treatment.</Pair>
</Ability>
</>};
const _driver = {title: "Driver", jsx: <><h2 id="arc-rogue-driver-driver">Driver</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 72</Link><br/>A driver makes her living driving vehicles in the service of those who can pay for her considerable talents. She may be a wagon-driver practiced at smuggling contraband, an accomplished musher blazing arctic trails, or a seemingly refined coach driver placing her roguish talents in the service of a wealthy patron.</p>
<Ability id="arc-rogue-driver-hard-drive-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-driver-hard-drive-ex">Hard Drive (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">When driving a vehicle that uses a group of animals or magical beasts as muscle propulsion, the DCs of all driving checks are reduced by 2, the maximum speed of the vehicle increases by 10 feet, and the acceleration increases by 5 feet.</Pair>
</Ability>
<Ability id="arc-rogue-driver-drivers-fortitude-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-driver-drivers-fortitude-ex" flavor="The driver learns to keep driving and maintain control of her vehicle, even when mortally wounded.">Driver's Fortitude (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">If the driver drops below 0 hit points but is not dead, she can attempt a DC 15 Fortitude save each round to remain conscious and in control of her vehicle, though she may take no other actions.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/firearm_training">Firearm training</Link>, <Link to="/talent/getaway_artist">getaway artist</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/feat">Feat</Link>, <Link to="/talent/getaway_master">getaway master</Link></p></>};
const _earthshadow = {title: "Earthshadow", jsx: <><h2 id="arc-rogue-earthshadow-earthshadow">Earthshadow</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 8</Link><br/>When the dwarves began their Quest for Sky millennia ago to reach the world's surface, they already had a deep understanding of the earth's secrets. In the centuries since, the mystic lore the dwarves call earthcraft has been passed down through the generations, and its practitioners are called earthshadows. While many earthshadows are dwarves, their secrets have been shared with a worthy few members of other races over the ages.</p>
<Ability id="arc-rogue-earthshadow-earthlink-su" icon={["upgrade"]}>
<Pair single id="arc-rogue-earthshadow-earthlink-su" flavor="The earth grants an earthshadow swiftness and hones her senses.">Earthlink (Su)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">When an earthshadow is in direct contact with an expanse of natural earth or unworked stone that is at least as large as she is, she adds half her rogue level (minimum 1) to Acrobatics and Perception checks.</Pair>
</Ability>
<Ability id="arc-rogue-earthshadow-earthcraft-su" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-earthshadow-earthcraft-su" flavor="An earthshadow can draw upon the power of earth to perform mystical tricks.">Earthcraft (Su)</Pair>
<Pair hl title="Replaces">Evasion, rogue talents gained at 4th, 8th, 12th, and 16th levels</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">At the start of each day, an earthshadow gains a pool of earthcraft points equal to half her rogue level plus her Wisdom modifier, and she can spend earthcraft points to use certain spell-like abilities. The caster level of these spell-like abilities is equal to the earthshadow's rogue level. Earthcraft effects affect only the earthshadow, even if the spell could normally affect others.</Pair>
<Pair title="At 2nd Level">She can spend 1 earthcraft point to cast <Link to="/spell/blend">blend</Link>, even if she is not an elf, but this ability works only in areas of natural earth or unworked stone.</Pair>
<Pair title="At 4th Level">An earthshadow can spend 2 earthcraft points to cast <Link to="/spell/meld_into_stone">meld into stone</Link>.</Pair>
<Pair title="At 8th Level">An earthshadow can spend 3 earthcraft points to cast <Link to="/spell/dimension_door">dimension door</Link>. She must be able to see her destination (or she must be able to otherwise sense its surface, such as with <Link to="/umr/tremorsense">tremorsense</Link>), and her current location must be connected to her destination by continuous natural earth or unworked stone.</Pair>
<Pair title="At 12th Level">An earthshadow can spend 5 earthcraft points to cast the spell <Link to="/spell/stone_tell">stone tell</Link> but can communicate only with unworked stone.</Pair>
<Pair title="At 16th Level">An earthshadow can spend 6 earthcraft points to cast <Link to="/spell/statue">statue</Link>.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/extra_earthcraft">Extra earthcraft</Link>, <Link to="/talent/favored_terrain">favored terrain</Link>, <Link to="/talent/fortified_position">fortified position</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/resiliency">resiliency</Link>, <Link to="/talent/trap_spotter">trap spotter</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/against_the_wall">Against the wall</Link>, <Link to="/talent/dispelling_attack">dispelling attack</Link>, <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/stony_skin">stony skin</Link></p></>};
const _eldritch_raider = {title: "Eldritch Raider", jsx: <><h2 id="arc-rogue-eldritch_raider-eldritch-raider">Eldritch Raider</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 189</Link><br/>An eldritch raider is a rogue who seeks to unravel the mysteries of the destruction of the gillmen's homeland. They explore old ruins that date back to the days of the old human empire and track down relics and lore from its glory days. An eldritch raider has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-eldritch_raider--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gillman">Gillman</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-rogue-eldritch_raider-undefined">
<Pair id="arc-rogue-eldritch_raider-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/knowledge_history">Knowledge (history)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Disguise, Perform, Sleight of Hand</Pair></Ability>
<Ability id="arc-rogue-eldritch_raider-skill-ranks-per-level" icon={["broken-shield"]}>
<Pair single id="arc-rogue-eldritch_raider-skill-ranks-per-level">Skill Ranks per Level</Pair>
<Pair title="Info">The eldritch raider gains only 6 + Int modifier skill points per level.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_raider-detect-magic-sp" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-eldritch_raider-detect-magic-sp">Detect Magic (Sp)</Pair>
<Pair hl title="Replaces">Rogue talent rogues gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An eldritch raider gains the ability to use <Link to="/spell/detect_magic">detect magic</Link> at will. The eldritch raider treats her rogue level as her caster level for this ability.</Pair>
<Pair title="Special">This ability counts as the <Link to="/talent/minor_magic">minor magic</Link> rogue talent for purposes of qualifying for other rogue talents.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_raider-eldritch-intuition-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-eldritch_raider-eldritch-intuition-ex">Eldritch Intuition (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An eldritch raider gains an intuitive sense that allows her to more easily activate sorcerer and wizard spell completion and spell trigger items. She gains a bonus on Use Magic Device checks for this purpose. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_raider-new-talents" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-eldritch_raider-new-talents">New Talents</Pair>
<Pair title="Info">An eldritch raider has access to the following new advanced talents when selecting rogue advanced talents.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_raider-minor-eldritch-magic-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-eldritch_raider-minor-eldritch-magic-sp">Minor Eldritch Magic (Sp)</Pair>
<Pair title="Prerequisites"><em>Minor magic</em> and <Link to="/talent/major_magic">major magic</Link> rogue talents; Intelligence 12</Pair>
<Pair title="Ability">The eldritch raider gains the ability to cast a 2nd-level spell from the <Link to="/main/spells_wizard">sorcerer/wizard spell list</Link> two times per day as a spell-like ability. The caster level for this ability is equal to her rogue level. The save DC for this spell is 12 + her Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_raider-major-eldritch-magic-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-eldritch_raider-major-eldritch-magic-sp">Major Eldritch Magic (Sp)</Pair>
<Pair title="Prerequisites">Minor Eldritch Magic; Intelligence 13</Pair>
<Pair title="Ability">The eldritch raider gains the ability to cast a 3rd-level spell from the sorcerer/wizard spell list two times per day as a spell-like ability. The caster level for this ability is equal to her rogue level. The save DC for this spell is 13 + her Intelligence modifier.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/black_market_connections">Black market connections</Link>, <Link to="/talent/esoteric_scholar">esoteric scholar</Link>, <Link to="/talent/fast_picks">fast picks</Link>, major magic, minor magic, <Link to="/talent/ninja_trick">ninja trick</Link> [<Link to="/ninjatrick/slow_metabolism">slow metabolism</Link>, <Link to="/ninjatrick/wall_climber">wall climber</Link>], <Link to="/talent/quick_disable">quick disable</Link>, <Link to="/talent/trap_spotter">trap spotter</Link></p>
<p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/dispelling_attack">Dispelling attack</Link>, <Link to="/talent/familiar">familiar</Link>, <Link to="/talent/hard_minded">hard minded</Link>, <Link to="/talent/improved_evasion">improved evasion</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link></p></>};
const _eldritch_scoundrel = {title: "Eldritch Scoundrel", jsx: <><h2 id="arc-rogue-eldritch_scoundrel-eldritch-scoundrel">Eldritch Scoundrel</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 23</Link><br/>Students of arcane magic, legerdemain, and stealth, eldritch scoundrels are a rare breed of adventurer most commonly found seeking lost and valuable arcane writings in the ruins of fallen empires, such as Thassilon or the Jistka Imperium.</p>
<Ability icon={["skills"]} id="arc-rogue-eldritch_scoundrel-undefined">
<Pair id="arc-rogue-eldritch_scoundrel-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT), <Link to="/skill/spellcraft">Spellcraft</Link> (INT)</Pair>
<Pair title="Removed Skills">Diplomacy, Disguise</Pair></Ability>
<Ability id="arc-rogue-eldritch_scoundrel-armor-proficiencies" icon={["broken-shield"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-armor-proficiencies">Armor Proficiencies</Pair>
<Pair hl title="Alters">Armor proficiencies</Pair>
<Pair title="Ability">An eldritch scoundrel is not proficient with any armor or shields. Armor sometimes interferes with an eldritch scoundrel's gestures, which can cause her spells with somatic components to fail.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-skill-ranks" icon={["broken-shield"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-skill-ranks">Skill Ranks</Pair>
<Pair hl title="Alters">Skills</Pair>
<Pair title="Info">An eldritch scoundrel gains 4 skill ranks (plus a number of ranks equal to her Intelligence modifier) at each level instead of a normal 8.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-spells" icon={["magic-swirl","spell-book"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-spells">Spells</Pair>
<Pair title="Ability">An eldritch scoundrel casts arcane spells drawn from the <Link to="/main/wizard_spell">wizard spell list</Link>. An eldritch scoundrel must choose and prepare her spells ahead of time. She learns, prepares, and casts spells exactly as a <Link to="/class/wizard">wizard</Link> does, including adding new spells to her spellbook and gaining two additional spells known (of any level she can cast) each time she gains a rogue level with this archetype.</Pair>
<Pair title="Special">An eldritch scoundrel can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is the same as the <Link to="/class/magus">magus</Link> class.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-alarm-sense-su" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-alarm-sense-su">Alarm Sense (Su)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An eldritch scoundrel gains an intuitive sense that warns her when she is near a magic trap. This functions as the <Link to="/talent/trap_spotter">trap spotter</Link> rogue talent, but applies only if the eldritch scoundrel comes within 10 feet of a magic trap.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-sneak-attack-ex" icon={["broken-shield"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Alters">Sneak attack progression</Pair>
<Pair title="At 3rd Level">The eldritch scoundrel doesn't acquire the sneak attack class feature until 3rd level, when she gains a +1d6 sneak attack.</Pair>
<Pair title="At 7th Level">The sneak attack damage becomes +2d6.</Pair>
<Pair title="At 11th Level">The sneak attack damage increases to +3d6.</Pair>
<Pair title="At 15th Level">The sneak attack damage becomes +4d6.</Pair>
<Pair title="At 19th Level">The sneak attack damage increases to +5d6.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-rogue-talents" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-rogue-talents">Rogue Talents</Pair>
<Pair hl title="Alters">Rogue talent progression, advanced talent</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The eldritch scoundrel gains a <Link to="/ability/rogue_talent">rogue talent</Link> or <Link to="/ability/ninja_tricks">ninja trick</Link> for which she meets the prerequisites (treating her rogue level as her ninja level). If a talent requires her to expend points from her ki pool, she can instead expend a spell slot with a spell level equal to the number of ki points she would normally expend. If a talent functions only if she has ki in her ki pool, it functions as long as she still has a spell of 1st level or higher prepared.</Pair>
<Pair title="At 8th Level">She can select another talent or trick.</Pair>
<Pair title="At 12th Level">She can select another talent or trick. From here on out, she can select an <Link to="/ability/advanced_rogue_talent">advanced rogue talent</Link> in place of a rogue talent.</Pair>
<Pair title="At 16th Level">She can select another talent or trick.</Pair>
<Pair title="At 20th Level">She can select another talent or trick.</Pair>
</Ability>
<Ability id="arc-rogue-eldritch_scoundrel-uncanny-training" icon={["info"]}>
<Pair single id="arc-rogue-eldritch_scoundrel-uncanny-training">Uncanny Training</Pair>
<Pair hl title="Alters">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="Info">An eldritch scoundrel does not gain uncanny dodge or improved uncanny dodge.</Pair>
<Pair title="At 4th Level">She can take <Link to="/ability/uncanny_dodge">uncanny dodge</Link> instead of a rogue talent.</Pair>
<Pair title="At 12th Level">The eldritch scoundrel can choose to take <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> in place of an advanced talent.</Pair>
</Ability>
</>};
const _escapologist = {title: "Escapologist", jsx: <><h2 id="arc-rogue-escapologist-escapologist">Escapologist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 123</Link><br/>The escapologist excels at escaping any confinement, whether physical, magical, or mental. Few restraints can hold an escapologist for long.</p>
<Ability id="arc-rogue-escapologist-elusive" icon={["upgrade"]}>
<Pair single id="arc-rogue-escapologist-elusive">Elusive</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">An escapologist adds 1/2 her rogue level (minimum +1) as a bonus on all Disable Device and Escape Artist checks.</Pair>
<Pair title="Ability">An escapologist can use Disable Device to disarm magical traps.</Pair>
<Pair title="Special">This counts as <em>trapfinding</em> for the purpose of prerequisites and abilities that require trapfinding.</Pair>
</Ability>
<Ability id="arc-rogue-escapologist-unfettered-mind-su" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-escapologist-unfettered-mind-su">Unfettered Mind (Su)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">An escapologist can attempt an Escape Artist check to remove a mind-affecting effect currently affecting her. The DC of this check is equal to the effect's original save DC + 20. She cannot remove effects that do not allow a saving throw. She can attempt to escape even if paralyzed or restrained, as long as she can take purely mental actions.</Pair>
<Pair title="Special">She can attempt this check against a particular effect once per round if the effect is measured in rounds, once per minute if the effect is measured in minutes, once per 10 minutes if the effect is measured in 10-minute intervals, and so on.</Pair>
</Ability>
<Ability id="arc-rogue-escapologist-impossible-escape-su" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-escapologist-impossible-escape-su">Impossible Escape (Su)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Immediate Action">An escapologist can attempt an Escape Artist check at a -10 penalty and apply the result in place of either a failed Reflex save or her AC against an attack that would have hit her. If she succeeds, her contortions let her avoid the attack or effect entirely.</Pair>
<Pair title="Special">Using this ability leaves the escapologist <Link to="/misc/staggered">staggered</Link> until the end of her next turn. If the escapologist can't become staggered, she can't use impossible escape.</Pair>
</Ability>
</>};
const _false_medium = {title: "False Medium", jsx: <><h2 id="arc-rogue-false_medium-false-medium">False Medium</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 123</Link><br/>The false medium is a master of pretending to have occult powers in order to manipulate the emotions and atmosphere of the people and places around him, often reaping a healthy reward from the bereaved, who find solace in his comforting lies.</p>
<Ability id="arc-rogue-false_medium-dim-the-lights-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-false_medium-dim-the-lights-ex">Dim the Lights (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">While in <Link to="/rule/dim_light">dim light</Link> or darkness, a false medium adds 1/2 his rogue level as a bonus on Bluff, Disguise, and Sleight of Hand checks, and creatures without low-light vision or darkvision take an equal penalty on skill checks to oppose the false medium's Bluff, Disguise, and Sleight of Hand checks.</Pair>
</Ability>
<Ability id="arc-rogue-false_medium-false-sensitivity-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-false_medium-false-sensitivity-ex">False Sensitivity (Ex)</Pair>
<Pair hl title="Replaces">2nd-level rogue talent</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A charlatan can convincingly fake the ability to use occult skill unlocks such as <Link to="/skill/automatic_writing">automatic writing</Link> and <Link to="/skill/dowsing">dowsing</Link>. An untrained onlooker can't tell the difference between the false medium's scams and a true use of occult skill unlocks. An onlooker capable of using the particular occult skill unlock that the false medium is faking can attempt the appropriate skill check for that unlock, opposed by the false medium's Bluff check, to detect the fraud. In any case, any results of the false medium's charades are fabricated (for instance, the false medium might ask leading questions to elicit false memories while pretending to use hypnotism).</Pair>
</Ability>
<Ability id="arc-rogue-false_medium-haunting-presences-ex" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-false_medium-haunting-presences-ex" flavor="The false medium exploits his natural talent for deception to convince others of the presence of false supernatural entities.">Haunting Presences (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">As long as the false medium is in conditions of dim light or darkness, he can use Bluff skill checks to emulate the effects of <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/silent_image">silent image</Link>, or <Link to="/spell/ventriloquism">ventriloquism</Link> by throwing his voice, subtly misdirecting or convincing subjects, or manipulating light and shadows. The range of these effects is 10 feet from the false medium. The effects last for 1 round, though they can be maintained with additional checks.</Pair>
<Pair title="At 6th Level">The range of his effects can now reach up to 15 feet from him.</Pair>
<Pair title="At 9th Level">The range of his effects increase to 20 feet from him.</Pair>
<Pair title="At 12th Level">The range of his effects now extend to reach 25 feet from him.</Pair>
<Pair title="At 15th Level">The range of his effects can now reach up to 30 feet from him.</Pair>
<Pair title="At 18th Level">The range of his effects increase to 35 feet from him.</Pair>
<Pair title="Special">Only one of these effects can be created or maintained in a given round. Observers can attempt either a Perception or Sense Motive check (whichever of their bonuses is higher) to oppose this Bluff check; the GM should roll these checks secretly. This is an extraordinary ability and not an illusion, so if the false medium succeeds at the opposed check, even powerful effects like <Link to="/spell/true_seeing">true seeing</Link> don't detect the fakery.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/esoteric_scholar">Esoteric scholar</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/feat">Feat</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/skill_mastery">skill mastery</Link></p></>};
const _fey_prankster = {title: "Fey Prankster", jsx: <><h2 id="arc-rogue-fey_prankster-fey-prankster">Fey Prankster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 12</Link><br/>Fey pranksters specialize in tricking others to teach a lesson or for their own entertainment.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-fey_prankster--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gathlain">Gathlain</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-rogue-fey_prankster-treacherous-plants-sp" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-fey_prankster-treacherous-plants-sp">Treacherous Plants (Sp)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">The fey prankster can cause plants to distract nearby creatures. To use this ability, the fey prankster attempts a Bluff check to create a distraction to hide as a <strong className="hl">swift action</strong> or to <Link to="/rule/feint">feint</Link> against an adjacent opponent as a <strong className="hl">move action</strong>, so long as the target is adjacent to plants. He gains a bonus on this check equal to half his rogue level (minimum +1).</Pair>
</Ability>
<Ability id="arc-rogue-fey_prankster-improved-dirty-trick" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-fey_prankster-improved-dirty-trick">Improved Dirty Trick</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The fey prankster gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat. He need not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-rogue-fey_prankster-steal-appearance-sp" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-fey_prankster-steal-appearance-sp">Steal Appearance (Sp)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The fey prankster can exchange the appearance of two adjacent items of the same size. He can also exchange the appearance of two creatures if at least one is willing and both are adjacent. Affecting an unwilling creature or an item it wears or carries requires a successful <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against that creature. If he succeeds, the objects or creatures are each disguised as the other as if with <Link to="/spell/veil">veil</Link> cast at his rogue level. The Will save DC to resist or disbelieve the illusion is equal to 10 + half the rogue's level + his Intelligence modifier.</Pair>
<Pair title="At 8th Level">The fey prankster can also exchange the locations of the two targets by succeeding at a DC 20 Sleight of Hand check. If he succeeds, observers can't tell which is the original based on movement without succeeding at a Perception check against his Sleight of Hand result.</Pair>
</Ability>
<Ability id="arc-rogue-fey_prankster-greater-dirty-trick" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-fey_prankster-greater-dirty-trick">Greater Dirty Trick</Pair>
<Pair hl title="Replaces">Rogue talent gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The fey prankster gains <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> as a bonus feat. He does not need to meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-rogue-fey_prankster-plant-traps-su" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-fey_prankster-plant-traps-su">Plant Traps (Su)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">3 times/day</Pair>
<Pair title="Full-Round Action">The fey trickster can modify a plant (but not plant creatures) into a trap. The Perception and Disable Device DCs for the trap are each equal to 15 + his rogue level. A Tiny or larger plant can be used to perform a <Link to="/rule/trip">trip</Link> or dirty trick combat maneuver using the fey trickster's CMB and the plant's size. A Large or larger plant can be used to create a <Link to="/spell/snare">snare</Link> as per the spell. The save DC is equal to 12 + the rogue's Intelligence modifier.</Pair>
<Pair title="Special">The fey trickster can trigger any plant trap he created as a <strong className="hl">standard action</strong> as long as he is within 60 feet of it.</Pair>
</Ability>
<Ability id="arc-rogue-fey_prankster-unseen-trickster" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-fey_prankster-unseen-trickster">Unseen Trickster</Pair>
<Pair hl title="Replaces">Rogue talent gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">The fey trickster can attempt Stealth checks in areas with plants even if he does not have <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
</>};
const _filcher = {title: "Filcher", jsx: <><h2 id="arc-rogue-filcher-filcher">Filcher</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 64</Link><br/>A filcher steals valuables without their owners even realizing it. Whether cutting purses in the midst of combat or replacing prized items with fakes under the noses of their owners, the filcher is the master of the quick and quiet steal. A filcher has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-filcher--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/halfling">Halfling</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-rogue-filcher-quicker-than-the-eye-ex" icon={["armor-downgrade","upgrade"]}>
<Pair single id="arc-rogue-filcher-quicker-than-the-eye-ex" flavor="A filcher develops an amazingly swift and delicate touch.">Quicker than the Eye (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">When she uses Sleight of Hand, creatures take a penalty on their Perception checks to notice the attempt equal to half the filcher's class level. The filcher also subtracts her class level from the normal -20 penalty when attempting to make a Sleight of Hand check as a <strong className="hl">move action</strong> instead of as a standard action. Lastly, the filcher can withdraw an object hidden on her person, including a weapon, as a move action instead of the usual standard action.</Pair>
</Ability>
<Ability id="arc-rogue-filcher-rummage-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-filcher-rummage-ex" flavor="A filcher learns how to assess the value of items at the quickest glance. She can even make startlingly accurate guesses about particular items merely by observing the bulges they make in pouches, backpacks, or similar containers.">Rummage (Ex)</Pair>
<Pair hl title="Replaces">Trap sense +1, +2, +3, +4, +5, and +6</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">She gains a bonus on Appraise checks equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
<Pair title="Swift Action">A filcher can make an Appraise check in order to determine the relative value of each object carried by her target (DC = 10 + 1 for every object the filcher is trying to ascertain the relative value of). Though she never learns the actual prices of items when using <em>rummage,</em> she does gain enough information to list these items in order, from the most valuable to the least valuable. She can, by taking a -20 penalty on the check, add to this assessment any items carried by her target that she cannot see.</Pair>
</Ability>
<Ability id="arc-rogue-filcher-filch-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-rogue-filcher-filch-ex" flavor="A filcher learns how pluck items off her opponents even in combat.">Filch (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">She gains <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat and can use her Sleight of Hand bonus instead of her CMB when performing a <Link to="/rule/steal">steal</Link> combat maneuver. If the filcher gains bonuses on combat maneuver checks from any feats, spells, magic items, or similar effects, they are added to the Sleight of Hand bonus when using the steal maneuver.</Pair>
</Ability>
<Ability id="arc-rogue-filcher-superior-filching-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-rogue-filcher-superior-filching-ex" flavor="A filcher becomes a master at separating owners from their property.">Superior Filching (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">She gains <Link to="/feat/greater_steal">Greater Steal</Link> as a bonus feat, and opponents do not gain a +5 bonus to their CMD when she tries to remove items fastened to them.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/black_market_connections">Black market connections</Link>, <Link to="/talent/deft_palm">deft palm</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/slow_reactions">slow reactions</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/fast_tumble">Fast tumble</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/weapon_snatcher">weapon snatcher</Link></p></>};
const _galtan_agitator = {title: "Galtan Agitator", jsx: <><h2 id="arc-rogue-galtan_agitator-galtan-agitator">Galtan Agitator</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 39</Link><br/>Galtan agitators fight mightily to cast down the enemies of their ideals within the shambles of the tumultuous nation of Galt. Any rogue (including unchained rogues) can select the Galtan agitator archetype.</p>
<Ability id="arc-rogue-galtan_agitator-reputation-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-galtan_agitator-reputation-ex">Reputation (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">This ability functions as the <Link to="/soctalent/renown">renown</Link> vigilante social talent. In addition to improving attitudes, it also improves the Galtan agitator's starting <Link to="/rule/influence">influence</Link> and reputation with <Link to="/rule/contacts">contacts</Link> in the area by one level or step.</Pair>
<Pair title="Special">For the purpose of vigilante social talents, the Galtan agitator does not have a vigilante identity and is always considered to be in her social identity, unless she has another identity (such as from the <Link to="/class/vigilante">vigilante</Link> class). If the Galtan agitator has another identity, she does not gain any benefits from <em>renown</em> while in that identity unless she has the <em>renown</em> social talent or a similar ability.</Pair>
</Ability>
<Ability id="arc-rogue-galtan_agitator-ready-for-betrayal-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-galtan_agitator-ready-for-betrayal-ex">Ready for Betrayal (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A Galtan agitator gains a bonus on Perception checks to recognize disguises and notice hiding creatures and on Sense Motive checks to disbelieve lies. These bonuses are equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
</Ability>
<Ability id="arc-rogue-galtan_agitator-enthralling-agitation-su" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-galtan_agitator-enthralling-agitation-su">Enthralling Agitation (Su)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A Galtan agitator can captivate a crowd once per day, as per the spell <Link to="/spell/enthrall">enthrall</Link> (DC = 10 + 1/2 the Galtan agitator's rogue level + her Charisma modifier). During the spell's effect, the Galtan agitator can attempt a DC 15 Charisma check to increase her individual or organizational influence with the members of the crowd by 1 rank or step. Or, if the crowd members' attitudes toward the Galtan agitator are indifferent or worse, this check can improve their attitudes by 1 step.</Pair>
<Pair title="Special">The Galtan agitator can never use this ability to increase her individual or organization influence or improve the crowd's attitude by more than 2 ranks or steps.</Pair>
</Ability>
<Ability id="arc-rogue-galtan_agitator-revolutionarys-cause-su" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-galtan_agitator-revolutionarys-cause-su" flavor="The Galtan agitator can lift an enthralled crowd's emotions and turn them toward a common purpose.">Revolutionary's Cause (Su)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">After she has used her <em>enthralling agitation,</em> but before the <em>enthrall</em> effect wears off, she can target the affected creatures with a plausible <Link to="/spell/suggestion">suggestion</Link> (DC = 10 + 1/2 her rogue level + her Charisma modifier) that has a duration of up to 1 day.</Pair>
</Ability>
<Ability id="arc-rogue-galtan_agitator-leadership-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-rogue-galtan_agitator-leadership-ex">Leadership (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A Galtan agitator gains <Link to="/feat/leadership">Leadership</Link> as a bonus feat. If the Galtan agitator already has the Leadership feat, she doubles her Charisma modifier when calculating her base Leadership score.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/canny_observer">Canny observer</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/follow_clues">follow clues</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/strong_impression">strong impression</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/feat">Feat</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link></p></>};
const _guerrilla = {title: "Guerrilla", jsx: <><h2 id="arc-rogue-guerrilla-guerrilla">Guerrilla</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 41</Link><br/>Guerrillas fight against oppressive leadership and governments - often under cover of night - including Chelish colonization in Sargava and the power structures in Cheliax proper, Nidal, and Razmiran. Any rogue (including the unchained rogue) can select the guerrilla archetype.</p>
<Ability id="arc-rogue-guerrilla-skilled-liar-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-rogue-guerrilla-skilled-liar-ex">Skilled Liar (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">Whenever a guerrilla uses Bluff to attempt to deceive someone, she gains a bonus on the opposed roll equal to 1/2 her rogue level (minimum +1). A guerrilla can still use Disable Device to disarm magic traps.</Pair>
</Ability>
<Ability id="arc-rogue-guerrilla-cover-of-night-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-rogue-guerrilla-cover-of-night-ex" flavor="A guerrilla learns to use darkness to her advantage.">Cover of Night (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">She gains a +5 bonus on Disguise, Sleight of Hand, and Stealth checks while she is in areas of <Link to="/rule/dim_light">dim light</Link> or darkness. Additionally, while in dim light or darkness, if a guerrilla would have <Link to="/rule/concealment">concealment</Link>, she instead has total concealment.</Pair>
<Pair title="Full-Round Action">She can create mundane disguises in dim light or darkness (at a faster rate than the normal 1d3 &times; 10 minutes).</Pair>
</Ability>
<Ability id="arc-rogue-guerrilla-secret-messenger-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-guerrilla-secret-messenger-ex">Secret Messenger (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A guerrilla gains a bonus on Bluff checks to convey secret messages and on Sense Motive checks to discern secret messages. These bonuses are equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
</Ability>
<Ability id="arc-rogue-guerrilla-guerrilla-sniping-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-guerrilla-guerrilla-sniping-ex">Guerrilla Sniping (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When a guerrilla is in an area of dim light or darkness, she takes only a -10 penalty on her Stealth check to maintain her obscured location while sniping.</Pair>
</Ability>
<Ability id="arc-rogue-guerrilla-uncanny-dodge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-guerrilla-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A guerrilla gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/camouflage">Camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/powerful_sneak">powerful sneak</Link>, <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/stand_up">stand up</Link>, <Link to="/talent/surprise_attack">surprise attack</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/deadly_sneak">Deadly sneak</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link></p></>};
const _guild_agent = {title: "Guild Agent", jsx: <><h2 id="arc-rogue-guild_agent-guild-agent">Guild Agent</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 45</Link><br/>Guild agents are members of a thieves' guild or other shadowy organization. What they lose in independence, they more than make up for in benefits gained due to their association's infrastructure. Guild agents come at all levels of the organization, from a lowly recruit all the way up to the guildmaster himself.</p>
<Ability id="arc-rogue-guild_agent-honor-among-thieves-ex" icon={["hazard-sign"]}>
<Pair single id="arc-rogue-guild_agent-honor-among-thieves-ex">Honor Among Thieves (Ex)</Pair>
<Pair title="Info">A guild agent must remain a member in good standing of a thieves' guild (he starts at rank 1 with her guild when using the <Link to="/rule/organizational_influence">organizational influence</Link> system). If the guild agent leaves his guild, he loses all of the abilities granted by this archetype and does not gain their replacements. If he joins a new guild, the guild agent regains his abilities, though depending on how he joins the guild, he may regain his abilities all at once or gradually over time. Even if the guild in question operates in multiple locations, the guild agent chooses a settlement as a base of operations for his own activities.</Pair>
</Ability>
<Ability id="arc-rogue-guild_agent-guild-connections-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-rogue-guild_agent-guild-connections-ex">Guild Connections (Ex)</Pair>
<Pair hl title="Replaces">Evasion, uncanny dodge</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A guild agent gains the <Link to="/talent/black_market_connections">black market connections</Link> rogue talent. Furthermore, he can ask his guild for tips about the local scene, granting him a bonus equal to half his rogue level on Knowledge (local) checks and Diplomacy checks to gather information, as long as the information in question pertains to the guild agent's base of operations.</Pair>
<Pair title="At 4th Level">The guild agent also gains the <Link to="/soctalent/gossip_collector">gossip collector</Link> vigilante social talent and his base of operations counts as his area of renown for the purpose of determining the effects of gossip collector.</Pair>
</Ability>
<Ability id="arc-rogue-guild_agent-pull-rank-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-guild_agent-pull-rank-ex">Pull Rank (Ex)</Pair>
<Pair hl title="Replaces">Improved evasion</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A guild agent has attained sufficient rank to call in lesser guild members to assist him with a job. He can call lesser members of a number and level equal to the number of followers he would have if he had the <Link to="/feat/leadership">Leadership</Link> feat (including the +2 bonus for his guildhouse), to a maximum of a number of lesser members equal to his rogue level. If the guild agent possesses the Leadership feat, he gains twice as many followers as normal. If he spends a favor, he can combine this with the command team organizational influence benefit to gain even more lesser members for a particularly difficult job. Each time the guild agent uses the lesser members recklessly and gets them killed, he loses at least 1 influence with his guild.</Pair>
</Ability>
<Ability id="arc-rogue-guild_agent-criminal-mastermind-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-guild_agent-criminal-mastermind-ex">Criminal Mastermind (Ex)</Pair>
<Pair hl title="Replaces">Master strike</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">Except in an unusually powerful guild, a guild agent has become the true power behind the guild. The guild agent has built up a nearly worldwide reputation under a particular criminal epithet (such as "The Silver Shadow"), known by criminals and law enforcement officers everywhere. This works like the <Link to="/soctalent/renown">renown</Link> vigilante social talent except as follows. It applies in all towns and cities on the same continent as the guild agent's base of operations, without requiring him to select a particular settlement. He has only one identity, and only other criminals and members of the underworld treat their attitudes toward the guild agent as one step closer to helpful at all times (rather than while only in his social identity), while the bonus on Intimidate checks applies against everyone at all times (rather than while only in his vigilante identity).</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/assault_leader">Assault leader</Link>, <Link to="/talent/certainty">certainty</Link> (unchained rogue only), <Link to="/talent/getaway_artist">getaway artist</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/getaway_master">Getaway master</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/skill_mastery">skill mastery</Link></p></>};
const _gun_smuggler = {title: "Gun Smuggler", jsx: <><h2 id="arc-rogue-gun_smuggler-gun-smuggler">Gun Smuggler</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 13</Link><br/>Alkenstar protects the secrets of gunpowder and controls the sale of firearms, creating lucrative opportunities for those who can sneak the technology beyond the Mana Wastes. Gun smugglers are adept at procuring firearms and concealing their secret weapons.</p>
<Ability id="arc-rogue-gun_smuggler-weapon-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-gun_smuggler-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Replaces">Weapon proficiencies</Pair>
<Pair title="Ability">A gun smuggler is proficient with all simple weapons and one-handed firearms, plus the <Link to="/eq-weapon/rapier">rapier</Link>, <Link to="/eq-weapon/sap">sap</Link>, <Link to="/eq-weapon/short_sword">short sword</Link>, and <Link to="/eq-weapon/sword_cane">sword cane</Link>.</Pair>
</Ability>
<Ability id="arc-rogue-gun_smuggler-hidden-gun-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-gun_smuggler-hidden-gun-ex">Hidden Gun (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">A gun smuggler gains a bonus equal to half her rogue level on Sleight of Hand checks to conceal a one-handed firearm on her body. She increases the DCs of opponents' Perception checks to realize the true nature of disguised weapons (such as a sword cane) within 5 feet of her by an amount equal to her rogue level (maximum DC 25 plus her rogue level).</Pair>
</Ability>
<Ability id="arc-rogue-gun_smuggler-secret-sidearm-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-gun_smuggler-secret-sidearm-ex">Secret Sidearm (Ex)</Pair>
<Pair title="Ability">As an expert in discreet and easily concealable weapons and firearms, a gun smuggler gains a battered gun identical to that gained by a 1st-level <Link to="/class/gunslinger">gunslinger</Link> and <Link to="/feat/gunsmithing">Gunsmithing</Link> as a bonus feat (including the ability to restore her battered gun as if she were a gunslinger), though she must select a <Link to="/eq-weapon/coat_pistol">coat pistol</Link>, <Link to="/eq-weapon/dagger_pistol">dagger pistol</Link>, or <Link to="/eq-weapon/sword_cane_pistol">sword cane pistol</Link> as her battered weapon.</Pair>
</Ability>
<Ability id="arc-rogue-gun_smuggler-selective-targeting-ex" icon={["broken-shield"]}>
<Pair single id="arc-rogue-gun_smuggler-selective-targeting-ex">Selective Targeting (Ex)</Pair>
<Pair hl title="Alters">Sneak attack</Pair>
<Pair title="Ability">A gun smuggler focuses on concealable firearms for her sneak attacks. When she makes a sneak attack using any weapon other than a coat pistol, dagger pistol, or sword cane pistol (either firing the weapon or making a melee attack), her sneak attack damage dice are d4s instead of d6s.</Pair>
</Ability>
<Ability id="arc-rogue-gun_smuggler-stolen-shots-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-gun_smuggler-stolen-shots-ex">Stolen Shots (Ex)</Pair>
<Pair hl title="Replaces">Trap sense, rogue talent gained at 6th level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A gun smuggler can access small quantities of cutting-edge firearm technology through clandestine dealers. She gains the benefits of the <Link to="/talent/black_market_connections">black market connections</Link> rogue talent, though only for the purpose of securing firearms and related equipment. At the beginning of each day, the gun smuggler gains a number of bullets (with accompanying black powder) or paper cartridges - referred to as shots - in any combination equal to her rogue level, representing ammunition smuggled to her by contacts. Her contacts provide only enough shots to replenish this small supply, so she can't accumulate ammunition indefinitely, and these shots have a market price of 0 gp.</Pair>
<Pair title="At 6th Level">The gun smuggler can elect to gain one or more pieces of magic ammunition, though each one replaces a number of her daily shots equal to the ammunition's enhancement bonus (maximum enhancement bonus equal to <Link to="/misc/one_third">one-third</Link> of her level for any one piece of ammunition). She can choose to add any of the following weapon special abilities to the shot, though the shot must have at least a +1 enhancement bonus, and these special abilities use an amount of bonus equal to the ability's normal price: <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/seeking">seeking</Link>, or <Link to="/magic-enh/thundering">thundering</Link>.</Pair>
</Ability>
<Ability id="arc-rogue-gun_smuggler-uncanny-aim-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-gun_smuggler-uncanny-aim-ex">Uncanny Aim (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, improved uncanny dodge</Pair>
<Pair title="At 4th Level">A gun smuggler increases the range increment of any coat pistol, dagger pistol, or sword cane pistol she wields by 10 feet.</Pair>
<Pair title="At 8th Level">The base damage of bullets fired by these weapons increases by <Link to="/misc/one_die_step">one die step</Link>.</Pair>
</Ability>
</>};
const _heister = {title: "Heister", jsx: <><h2 id="arc-rogue-heister-heister">Heister</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 45</Link><br/>Notorious for their stealth, imagination, and elaborately planned thefts and capers, heisters specialize in breaking into secure locations, stealing items of value, and escaping undetected. Heisters often work as members of or independent operatives contracted to criminal organizations, crime families, or wealthy individuals inclined to unlawful activity.</p>
<Ability id="arc-rogue-heister-rum-dubber-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-heister-rum-dubber-ex">Rum Dubber (Ex)</Pair>
<Pair hl title="Replaces">Rogue talent gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever a heister attempts to open a lock without a set of <Link to="/eq-misc/thieves_tools">thieves' tools</Link>, the DC increases by 2, instead of 10.</Pair>
</Ability>
<Ability id="arc-rogue-heister-ferrets-grace-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-heister-ferrets-grace-ex">Ferret's Grace (Ex)</Pair>
<Pair hl title="Replaces">Uncanny dodge, rogue talent gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A heister gains <Link to="/feat/stealthy">Stealthy</Link> as a bonus feat. Additionally, a heister counts as a creature one size category smaller than she actually is when determining whether or not she is <Link to="/misc/squeezing">squeezing</Link> into an enclosed space. Finally, when a heister uses the <Link to="/skill/escape_artist">Escape Artist</Link> skill to move through a tight space where her head fits but her shoulders do not, the DC is 20, instead of 30.</Pair>
</Ability>
<Ability id="arc-rogue-heister-unseen-ex" icon={["stairs-goal"]}>
<Pair single id="arc-rogue-heister-unseen-ex">Unseen (Ex)</Pair>
<Pair hl title="Replaces">Improved uncanny dodge, rogue talent gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A heister masters hiding in underground and urban terrain. She can use the Stealth skill to hide in underground and urban terrain, even while being observed. She also gains the <Link to="/talent/terrain_mastery">terrain mastery</Link> rogue talent twice, once each for underground and urban terrain.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/certainty">Certainty</Link> (unchained rogue only), <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/fast_picks">fast picks</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/getaway_artist">getaway artist</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/quick_disable">quick disable</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/cutting_edge">Cutting edge</Link> (unchained rogue only), <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/getaway_master">getaway master</Link>, <Link to="/talent/hidden_mind">hidden mind</Link>, <Link to="/talent/skill_mastery">skill mastery</Link></p></>};
const _investigator = {title: "Investigator", jsx: <><h2 id="arc-rogue-investigator-investigator">Investigator</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 133</Link><br/>Not all rogues work against the law. Investigators use their skills to serve the law, often in the employ of nobles or in the pursuit of noble causes. In some cities cabals of investigators work for rulers or bureaucracies, but often an investigator is a free agent who pursues whatever mysteries come across her path. Of course, not all investigators serve the law. Crime lords and guildmasters often have squads of investigators serving their own nefarious purposes.</p>
<Ability id="arc-rogue-investigator-follow-up-ex" icon={["rolling-dices","upgrade"]}>
<Pair single id="arc-rogue-investigator-follow-up-ex">Follow Up (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Ability">An investigator can roll twice on any Diplomacy check made to gather information, and receives the information for both results. This takes the same amount of time as one check. If the lesser of the two checks reveals false information, the rogue is aware of it. False information is not revealed in this way if the people she questioned do not know it to be false.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/coax_information">Coax information</Link>, <Link to="/talent/fast_picks">fast picks</Link>, <Link to="/talent/follow_clues">follow clues</Link>, <Link to="/talent/hard_to_fool">hard to fool</Link>, <Link to="/talent/minor_magic">minor magic</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hunters_surprise">Hunter's surprise</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link></p></>};
const _kintargo_rebel = {title: "Kintargo Rebel", jsx: <><h2 id="arc-rogue-kintargo_rebel-kintargo-rebel">Kintargo Rebel</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 40</Link><br/>With few natural barriers, a thriving international port, and many miles separating it from Egorian, Kintargo is geographically suited for rebellion against the rigid laws that reign in Cheliax. This rebellion is hardly malicious in intent; business is simply easier without the imposing bureaucracy. Whenever the Chelish navy sails into the port, these rebels are quick to appear agreeably subservient in order to conceal their non-compliance and avoid retribution.</p>
<Ability id="arc-rogue-kintargo_rebel-sophisticated-stealth-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-kintargo_rebel-sophisticated-stealth-ex">Sophisticated Stealth (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A Kintargo rebel gains a bonus on Knowledge (nobility) checks. In addition, she gains a bonus on Bluff checks to convey a secret message and on Sense Motive checks to discern secret messages. These bonuses are equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
</Ability>
<Ability id="arc-rogue-kintargo_rebel-misdirection-sp" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-kintargo_rebel-misdirection-sp">Misdirection (Sp)</Pair>
<Pair hl title="Replaces">Uncanny dodge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A Kintargo rebel gains the ability to cast <Link to="/spell/misdirection">misdirection</Link> on herself once per day, though instead of choosing an object for the second target, she must choose a creature in range. The caster level for this ability is equal to her class level, and the save DC for this spell is 12 + the Kintargo rebel's Intelligence modifier. The save DC of this ability increases by 1 if the secondary target is lawful or evil.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/canny_observer">Canny observer</Link>, <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/false_friend">false friend</Link>, <Link to="/talent/fast_getaway">fast getaway</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/obfuscate_story">obfuscate story</Link>, <Link to="/talent/quick_disguise">quick disguise</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/hard_minded">Hard minded</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/slippery_mind">slippery mind</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link></p></>};
const _kitsune_trickster = {title: "Kitsune Trickster", jsx: <><h2 id="arc-rogue-kitsune_trickster-kitsune-trickster">Kitsune Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 192</Link><br/>The kitsune trickster combines her sharpened wit with minor arcane powers of charm and persuasion. She uses her talents to spin convincing lies, riddles, and stories. A trickster has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-rogue-kitsune_trickster--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kitsune">Kitsune</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-rogue-kitsune_trickster-kitsunes-guile-ex" icon={["upgrade"]}>
<Pair single id="arc-rogue-kitsune_trickster-kitsunes-guile-ex" flavor="A trickster relies on her intellect as much as her personality.">Kitsune's Guile (Ex)</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">She adds her Intelligence modifier on Bluff, Diplomacy, Disguise, and Sense Motive checks.</Pair>
</Ability>
<Ability id="arc-rogue-kitsune_trickster-kitsunes-charm-sp" icon={["magic-swirl"]}>
<Pair single id="arc-rogue-kitsune_trickster-kitsunes-charm-sp">Kitsune's Charm (Sp)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="At 3rd Level">A kitsune trickster can use <Link to="/spell/charm_person">charm person</Link> as a spell-like ability (caster level equal to her rogue level - 2).</Pair>
<Pair title="Usage">1 time/day per three rogue levels<ByLevelPop levels={[[3,1],[6,2],[9,3],[12,4],[15,5],[18,6]]} unit="time" postText="/day" /></Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/charmer">Charmer</Link>, <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/false_friend">false friend</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link>, <Link to="/talent/obfuscate_story">obfuscate story</Link>, <Link to="/talent/steal_the_story">steal the story</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/master_of_disguise">Master of disguise</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/slippery_mind">slippery mind</Link></p></>};
const _knife_master = {title: "Knife Master", jsx: <><h2 id="arc-rogue-knife_master-knife-master">Knife Master</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 72</Link><br/>The knife master is a trained killer who specializes in close-up combat and the wave and weave of knife fighting. In her hands, daggers and other similar light blades become truly deadly instruments..</p>
<Ability id="arc-rogue-knife_master-hidden-blade" icon={["upgrade"]}>
<Pair single id="arc-rogue-knife_master-hidden-blade">Hidden Blade</Pair>
<Pair hl title="Replaces">Trapfinding</Pair>
<Pair title="Passive Ability">A knife master adds 1/2 her level on Sleight of Hand checks made to conceal a light blade.</Pair>
</Ability>
<Ability id="arc-rogue-knife_master-sneak-stab-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-rogue-knife_master-sneak-stab-ex">Sneak Stab (Ex)</Pair>
<Pair hl title="Alters">Sneak attack</Pair>
<Pair title="Info">A knife master focuses her ability to deal sneak attack damage with daggers and similar weapons to such a degree that she can deal more sneak attack damage with those weapons at the expense of sneak attacks with other weapons.</Pair>
<Pair title="Ability">When she makes a sneak attack with a <Link to="/eq-weapon/dagger">dagger</Link>, <Link to="/eq-weapon/kerambit">kerambit</Link>, <Link to="/eq-weapon/kukri">kukri</Link>, <Link to="/eq-weapon/punching_dagger">punching daggers</Link>, <Link to="/eq-weapon/starknife">starknife</Link>, or <Link to="/eq-weapon/swordbreaker_dagger">swordbreaker dagger</Link>, she uses d8s to roll sneak attack damage instead of d6s. For sneak attacks with all other weapons, she uses d4s instead of d6s.</Pair>
<Pair title="Special">This ability is identical in all other ways to sneak attack, and supplements that ability.</Pair>
</Ability>
<Ability id="arc-rogue-knife_master-blade-sense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-rogue-knife_master-blade-sense-ex">Blade Sense (Ex)</Pair>
<Pair hl title="Replaces">Trap sense</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A knife master is so skilled in combat involving light blades that she gains a dodge bonus to AC against attacks made against her with light blades. This bonus is equal to <Link to="/misc/one_third">one-third</Link> of her rogue level.</Pair>
</Ability>
<p><strong className="hl">These rogue talents complement this archetype:</strong> <Link to="/talent/befuddling_strike">Befuddling strike</Link>, <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/offensive_defense">offensive defense</Link>, <Link to="/talent/surprise_attack">surprise attack</Link>, <Link to="/talent/underhanded">underhanded</Link>, <Link to="/talent/weapon_training">weapon training</Link></p><p><strong className="hl">These advanced rogue talents complement this archetype:</strong> <Link to="/talent/another_day">Another day</Link>, <Link to="/talent/confounding_blades">confounding blades</Link>, <Link to="/talent/deadly_sneak">deadly sneak</Link>, <Link to="/talent/entanglement_of_blades">entanglement of blades</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link></p></>};
const _makeshift_scrapper = {title: "Makeshift Scrapper", jsx: <><h2 id="arc-rogue-makeshift_scrapper-makeshift-scrapper">Makeshift Scrapper</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 15</Link><br/>Some combatants specialize in the study of certain weapons, but those without formal training often learn to survive a fight by making brilliant use of whatever is lying around.</p>
<p><strong>Weapon Proficiency:</strong> The makeshift scrapper is proficient with only simple weapons.</p>
<p><strong>Improvised Weapons (Ex):</strong> At 1st level, a makeshift scrapper gains <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> and <Link to="/feat/throw_anything">Throw Anything</Link> as bonus feats.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Supernatural Improvisation (Su):</strong> At 3rd level, a makeshift scrapper gains the ability to enhance an item, making it a more effective weapon or changing the way it can be used. As a swift action, she can alter a single <Link to="/misc/improvised_weapon">improvised weapon</Link> to either grant it a +1 enhancement bonus on attack rolls and damage rolls or use it to gain a +1 shield bonus to her AC. The makeshift scrapper can use this ability for a number of rounds per day equal to her rogue level. These rounds need not be consecutive, and the makeshift scrapper can change the enhancement each time she activates the ability. The bonus increases by 1 every 4 levels thereafter, up to a maximum bonus of +5 at 19th level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Improvised Weapon Mastery (Ex):</strong> At 12th level, the makeshift scrapper gains <Link to="/feat/improvised_weapon_mastery">Improvised Weapon Mastery</Link> as a bonus feat.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 12th level.</p>
<p><strong>Rogue Talents/Ninja Tricks:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the makeshift scrapper archetype: <Link to="/talent/offensive_defense">offensive defense</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/fast_getaway">fast getaway</Link> and <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/ki_pool">ki pool</Link>, <Link to="/talent/ninja_trick">ninja trick</Link> [<Link to="/ninjatrick/acrobatic_master">acrobatic master</Link> - <em>Ki Tricks</em> group], <Link to="/talent/peerless_maneuver">peerless maneuver</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the makeshift scrapper archetype: <Link to="/talent/another_day">another day</Link>, <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/opportunist">opportunist</Link> (<em>Combat Talents</em> group); <Link to="/talent/getaway_master">getaway master</Link> (<em>Other Talents</em> group).</p>
</>};
const _master_of_disguise = {title: "Master of Disguise", jsx: <><h2 id="arc-rogue-master_of_disguise-master-of-disguise">Master of Disguise</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 46</Link><br/>A master of disguise feels no need to advertise her skills to build a reputation. Instead, she believes that never letting her adversaries know her true identity protects her from bad luck or missteps on a job.</p>
<p><strong>Consummate Actor (Ex):</strong> A master of disguise adds half her rogue level (minimum 1) on all Disguise checks and on Bluff checks to stay in character while using Disguise. At 2nd level, she gains the <Link to="/talent/quick_disguise">quick disguise</Link> rogue talent, and she can create a disguise twice as quickly as normal even for that rogue talent (she can create a disguise that encompasses only minor details as a standard action).</p>
<p>This ability replaces <strong className="hl">trapfinding</strong> and the <strong className="hl">rogue talent</strong> gained at 2nd level.</p>
<p><strong>Grandmaster of Disguise (Ex):</strong> At 10th level, a master of disguise gains the <Link to="/talent/master_of_disguise">master of disguise</Link> advanced rogue talent and can use it an unlimited number of times per day. Because she must still don a physical disguise to gain this bonus, it doesn't stack with the bonuses from spells like alter self and disguise self, but since it is completely nonmagical, it is more reliable when scrutinized under magical detection.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 10th level.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the master of disguise archetype: <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/shades_of_gray">shades of gray</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/false_friend">false friend</Link>, <Link to="/talent/obfuscate_story">obfuscate story</Link>, <Link to="/talent/steal_the_story">steal the story</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the master of disguise archetype: <Link to="/talent/hidden_mind">hidden mind</Link>, <Link to="/talent/slippery_mind">slippery mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/hard_minded">hard minded</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link> (<em>Combat Talents</em> group); <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _nameless_shadow = {title: "Nameless Shadow", jsx: <><h2 id="arc-rogue-nameless_shadow-nameless-shadow">Nameless Shadow</h2>
<p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest pg. 30</Link><br/>Where bandits and tyrants prey on merchants and caravans, the nameless shadow preys on bandits and tyrants. Posing as mundane merchants or other harmless travelers, these assassins can hide both within darkness and in the anonymity of a seemingly unimportant crowd. This archetype is appropriate for rogues built using the rules from the Pathfinder RPG Core Rulebook as well as for unchained rogues.</p>
<p><strong>Harmless Guise (Ex):</strong> A nameless shadow gains the dual identity and seamless guise <Link to="/class/vigilante">vigilante</Link> class features, with the following restrictions. Her social identity must be that of a mundane and non-threatening member of society, such as a farmer or a merchant. At 6th level, the nameless shadow gains the <Link to="/soctalent/many_guises">many guises</Link> vigilante social talent. At 8th level, the nameless shadow gains the <Link to="/soctalent/quick_change">quick change</Link> vigilante social talent. At 14th level, the nameless shadow gains the <Link to="/soctalent/everyman">everyman</Link> vigilante social talent. At 18th level, the nameless shadow gains the <Link to="/soctalent/any_guise">any guise</Link> vigilante social talent.</p>
<p>Additionally, when a nameless shadow attacks a foe while in a social or mundane identity, her target takes a -2 penalty to AC for the purpose of resolving that attack. This use of harmless guise forces the nameless shadow into her vigilante identity after the attack is completed, and the target (if it survives) then becomes aware of the nameless shadow's secret. This ability cannot be used on targets that are aware of the nameless shadow's dual identity.</p>
<p>This replaces <strong className="hl">trapfinding</strong> and the <strong className="hl">rogue talents</strong> gained at 2nd, 6th, 10th, 14th, and 18th levels.</p>
<p><strong>Face in the Crowd (Ex):</strong> At 4th level, so long as there are at least 10 other non-hostile creatures within 30 feet of her, a nameless shadow can use Bluff or Disguise in place of Stealth to hide or for sniping. At 8th level, she can use this ability to hide within a crowd even if she is being observed.</p>
<p>This replaces the <strong className="hl">rogue talents</strong> gained at 4th and 8th levels.</p>
</>};
const _needler = {title: "Needler", jsx: <><h2 id="arc-rogue-needler-needler">Needler</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 12</Link><br/>While some assassins and killers prefer to be up front with their poison use, others favor a covert approach. Needlers use subtlety and misdirection to deliver deadly poisons to unsuspecting victims in creative and unorthodox ways. This archetype is appropriate for rogues built using the rules from the Pathfinder RPG Core Rulebook as well as for unchained rogues.</p>
<p><strong>Adroit Poisoner (Ex):</strong> At 2nd level, a needler gains a +2 bonus on Sleight of Hand checks. This bonus increases to +4 when the needler uses Sleight of Hand to draw a hidden weapon that is coated in poison. At 8th level, these bonuses increase to +4 and +6, respectively.</p>
<p>This replaces <strong className="hl">evasion</strong>.</p>
<p><strong>Subtle Poisoning (Ex):</strong> At 4th level, a needler can apply a contact or ingested poison to her weapon and deliver it as if it were an injury poison. The poison must be delivered within 1 minute of this application, or it is wasted. The DC of the saving throw to resist the poison decreases by 1 when the needler uses this ability to deliver a contact or ingested poison via injury.</p>
<p>This replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Needle Poisoner (Ex):</strong> At 6th level, a needler can apply a dose of poison to a weapon as a swift action. This ability counts as <em>swift poisoning</em> for the purpose of meeting prerequisites.</p>
<p>This replaces the <strong className="hl">rogue talent</strong> gained at 6th level.</p>
<p><strong>Concealed Delivery (Ex):</strong> At 8th level, a needler learns how to deliver all types of poisons with subtlety. As a standard action, she can deliver an ingested or inhaled poison to a creature within reach by placing a dose of poison on the target's lips, on the target's neck, or through other similar contact with the target's skin as if the poison were a contact poison. Delivering poison in this way requires a successful Sleight of Hand check opposed by the target's Perception check. The poison is not lost on a failed check, but it must be successfully delivered within 1 minute of the first attempt, or it is wasted.</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong>.</p>
</>};
const _numerian_scavenger = {title: "Numerian Scavenger", jsx: <><h2 id="arc-rogue-numerian_scavenger-numerian-scavenger">Numerian Scavenger</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 13</Link><br/>A Numerian scavenger lives for the discovery of new technological wonders scraped from the depths of the strange ruins, metal caverns, and outlandish junkyards of Numeria. She is well-versed in all the ways that technology can be used to protect sites, as well as the ways in which it can malfunction.</p>
<p><strong>Technic Training (Ex):</strong> A Numerian scavenger adds 1/2 her rogue level to Perception skill checks to locate mechanical or high-tech traps and to Disable Device skill checks against these traps (minimum +1). She gains <Link to="/feat/technologist">Technologist</Link> as a bonus feat. She cannot use Disable Device to disarm magical traps.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Lucky Glitch (Ex):</strong> Starting at 4th level, whenever a Numerian scavenger triggers a glitch when using a timeworn technological item, she rolls twice and can choose which of the two glitch effects actually occurs. A Numerian scavenger always adds her level to rolls to determine what kind of glitch occurs, and treats rolls of over 100 as 100.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Robot Slayer (Ex):</strong> At 8th level, a Numerian scavenger knows just where to strike robots to incapacitate and disable them. When she deals sneak attack damage to a robot, she ignores all hardness that robot possesses.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
</>};
const _okeno_liberator = {title: "Okeno Liberator", jsx: <><h2 id="arc-rogue-okeno_liberator-okeno-liberator">Okeno Liberator</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_combat">Inner Sea Combat pg. 41</Link><br/>The sight of yellow sails on the Inner Sea signals the approach of a ship from Okeno, home port of the most ruthless and feared of all slaving operations. Most who see these sails flee in terror, but some freedom fighters actually endeavor to be captured, knowing that being taken to Stonespine Island in manacles is the easiest way to infiltrate the city, liberate other slaves, and lead them to freedom.</p>
<p><strong>Bond Breaker (Ex):</strong> An Okeno liberator adds 1/2 her class level to Escape Artist checks, and never takes a penalty on Disable Device checks when using improvised tools to open locks.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Covert Commander (Ex):</strong> An Okeno liberator grants all allies within 30 feet who are in her line of sight (but not herself) a +1 competence bonus on Disguise and Stealth checks. This bonus increases by 1 for every 3 levels beyond 3rd.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Catch Off-Guard (Ex):</strong> At 4th level, the Okeno liberator is adept at improvising weapons. She gains <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> as a bonus feat.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the Okeno liberator archetype: <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/underhanded">underhanded</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/deft_palm">deft palm</Link> (<em>Combat Talents</em> group); <Link to="/talent/fast_picks">fast picks</Link> (<em>Disable Device Talents</em> group); <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/quick_disguise">quick disguise</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the Okeno liberator archetype: <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/fast_tumble">fast tumble</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/weapon_snatcher">weapon snatcher</Link> (<em>Combat Talents</em> group); <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _phantom_thief = {title: "Phantom Thief", jsx: <><h2 id="arc-rogue-phantom_thief-phantom-thief">Phantom Thief</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 46</Link><br/>Also known as gentleman thieves or lady thieves, phantom thieves don't know the desperation of a hard life like many rogues. Instead, they come from the ranks of the elite, having grown bored with their finery, and seek thrills from acts of daring, skill, and crime. Phantom thieves don't need the money, so they often perform acts such as breaking into a secure vault for the thrill, leaving a calling card rather than robbing the place.</p>
<p><strong>Refined Education (Ex):</strong> A phantom thief adds Handle Animal, Heal, Ride, Spellcraft, Survival, and all Knowledge skills to her list of class skills. Furthermore, she selects one of her rogue class skills and adds half her rogue level on all skill checks using that skill. At 3rd level and every 2 rogue levels thereafter, she selects an additional rogue class skill and adds half her rogue level on all skill checks using that skill as well. Starting at 4th level, if the phantom thief is an unchained rogue, she gains rogue's edge skill unlocks with each of these skills rather than selecting one skill every 5 levels, and she adds half her rogue level to her number of ranks to determine when she receives a skill unlock (so a 7th level rogue (phantom thief) with 7 ranks in a chosen skill would count as having 10 ranks and receive the second skill unlock).</p>
<p>This ability alters the rogue's <strong className="hl">class skills</strong> and replaces <strong className="hl">sneak attack</strong> and <strong className="hl">trapfinding</strong>. For an unchained rogue, it also alters <strong className="hl">rogue's edge</strong> and replaces <strong className="hl">debilitating injury</strong>.</p>
<p><strong>Broad Education (Ex):</strong> A phantom thief's broad studies with expensive tutors keep her up to speed in both martial and magical knowledge, as well as in her skills. She can select the <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/minor_magic">minor magic</Link>, and <Link to="/talent/major_magic">major magic</Link> rogue talents as many times as she likes, and she can select the <Link to="/feat/skill_focus">Skill Focus</Link> feat as a rogue talent, also as many times as she likes. Finally, she can select a vigilante <Link to="/ability/social_talents">social talent</Link> instead of a rogue talent, except for social grace and vigilante social talents that would require her to be a craftsman or professional. For the purpose of vigilante social talents, a phantom thief does not have a vigilante identity and is always considered to be in her social identity.</p>
<p>This ability alters <strong className="hl">rogue talent</strong>.</p>
<p><strong>Social Sense (Ex):</strong> At 3rd level, a phantom thief's social sixth sense allows her to avoid danger in social situations and to act first when it breaks out. She receives a +1 bonus on Sense Motive checks to avoid being surprised by a foe, on Bluff checks to surprise a foe, and on initiative checks for surprise rounds that involved Bluff and Sense Motive checks to determine surprise. This bonus increases by 1 at 3rd level and every 3 rogue levels thereafter.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Master of All (Ex):</strong> At 20th level, a phantom thief can reroll any skill check as long as it is a class skill in which she is trained. She must take the second result, even if it is worse. She can use this ability no more than once per minute.</p>
<p>This ability replaces <strong className="hl">master strike</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the phantom thief archetype: major magic, minor magic (<em>Spellcasting Talents</em> group); combat trick (<em>Combat Talents</em> group); <Link to="/talent/certainty">certainty</Link> (<em>Other Talents</em> group - unchained rogue only).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the phantom thief archetype: <Link to="/talent/hidden_mind">hidden mind</Link> (<em>Magical Talents</em> group), <Link to="/talent/cutting_edge">cutting edge</Link> (unchained rogue only), <Link to="/talent/feat">feat</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, and <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _pirate = {title: "Pirate", jsx: <><h2 id="arc-rogue-pirate-pirate">Pirate</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 73</Link><br/>A pirate breaks from the confines of country and king to commit her crimes upon the high seas. She holds allegiance only to her ship and its captain (if even that much is true), and lives a lawless life upon the waves, plundering ships and shorelines as suits her whim.</p>
<p><strong>Sea Legs (Ex):</strong> At 1st level, a pirate becomes adept at moving on ships, boats, and similar vessels. She gains the <Link to="/feat/sea_legs">Sea Legs</Link> feat as a bonus feat, even if she does not meet the prerequisites.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Swinging Reposition (Ex):</strong> At 2nd level, a pirate incorporates a ship's masts, rigging, ropes, sails, and other such structures into her combat style. Provided she is wearing light armor or no armor, when fighting in an environment where such structures exist, the rogue incorporates them into her movement, and does not have to move in a straight line when making either a charge attack or a bull rush combat maneuver. Once she completes her attack or maneuver, she can reposition herself. Immediately after making the charge or bull rush, she can move 5 feet as a free action, even if the charge ends her turn. This movement does not provoke attacks of opportunity.</p>
<p>This ability replaces the 2nd-level <strong className="hl">rogue talent</strong>.</p>
<p><strong>Unflinching (Ex):</strong> Pirates are a salty and steadfast lot. At 3rd level, a pirate gains a +1 bonus on saving throws against fear and mind-affecting effects. This bonus increases by +1 for every three levels, to a maximum of +6 at 18th level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the pirate archetype: <Link to="/talent/black_market_connections">black market connections</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/finesse_rogue">finesse rogue</Link>, <Link to="/talent/firearm_training">firearm training</Link> (<em>Combat Talents</em> group); <Link to="/talent/hold_breath">hold breath</Link>, <Link to="/talent/rope_master">rope master</Link>, <Link to="/talent/strong_stroke">strong stroke</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the pirate archetype: <Link to="/talent/hard_minded">hard minded</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link> (<em>Combat Talents</em> group); <Link to="/talent/getaway_master">getaway master</Link> (<em>Other Talents</em> group).</p>
</>};
const _planar_sneak = {title: "Planar Sneak", jsx: <><h2 id="arc-rogue-planar_sneak-planar-sneak">Planar Sneak</h2>
<p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power pg. 8</Link><br/>A planar sneak finds creative ways to defy conventional limitations when trying to overcome extraplanar obstacles.</p>
<p><strong>Planar Sense (Ex):</strong> At 3rd level, a planar sneak gains a +1 bonus on saving throws against all effects with the air, chaos, earth, evil, fire, good, law, or water descriptors. This bonus increases by 1 for every 3 rogue levels thereafter (to a maximum of +6 at 18th level).</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Elemental Execution (Su):</strong> At 4th level, a planar sneak treats creatures with the elemental subtype as though they were vulnerable to her sneak attack, but she deals only half as much sneak attack damage as she normally would. She can confirm critical hits against such creatures, though 50% of the time, the critical hit is automatically negated and damage is instead rolled normally. At 8th level, this ability also applies to all outsiders otherwise immune to critical hits and sneak attack damage.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong> and <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the planar sneak archetype: <Link to="/talent/terrain_mastery">terrain mastery</Link> (<em>Deception Talents</em> group); <Link to="/talent/guileful_polyglot">guileful polyglot</Link>, <Link to="/talent/strong_stroke">strong stroke</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Rogue Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement this archetype: <Link to="/talent/defensive_roll">defensive roll</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _poisoner = {title: "Poisoner", jsx: <><h2 id="arc-rogue-poisoner-poisoner">Poisoner</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 134</Link><br/>Some consider poisoning an evil act. The poisoner knows poison is just a tool toward an end, and is no different than any other weapon. Some poisoners see themselves as great equalizers, as they are able to craft weapons that the weakest of creatures can wield to devastating effect, but most have no lofty delusions about their work.</p>
<p><strong>Poison Use (Ex):</strong> At 1st level, a poisoner is trained in the use of poison and cannot accidentally poison herself when applying poison to a blade.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Master Poisoner (Ex):</strong> At 3rd level, a poisoner can use Craft (alchemy) to change the type of a poison. This requires 1 hour of work with an alchemist's lab and a Craft (alchemy) skill check with a DC equal to the poison's DC. If successful, the poison's type changes to contact, ingested, inhaled, or injury. If the check fails, the poison is ruined. The poisoner also receives a bonus on Craft (alchemy) skill checks when working with poison equal to 1/2 her rogue level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the poisoner archetype: <Link to="/talent/distracting_attack">distracting attack</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/swift_poison">swift poison</Link> (<em>Poison Talents</em> group); <Link to="/talent/weapon_training">weapon training</Link> (<em>Combat Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the poisoner archetype: <Link to="/talent/deadly_cocktail">deadly cocktail</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/opportunist">opportunist</Link> (<em>Combat Talents</em> group).</p>
</>};
const _rake = {title: "Rake", jsx: <><h2 id="arc-rogue-rake-rake">Rake</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 134</Link><br/>The rake is a rogue who is open about her skills and talents, often to the point of being boastful. Usually she has the protection of an important figure who finds her services useful, but sometimes her bravado is enough to keep enemies away. She is often used as a face for the group for diplomacy, gathering information, negotiations, or to gain the most lucrative contracts and quests from local authorities.</p>
<p><strong>Bravado's Blade (Ex):</strong> When a rake hits an opponent and deals sneak attack damage, she can forgo 1d6 points of that damage and make a free Intimidate check to demoralize the foe. For every additional 1d6 points of sneak attack damage she forgoes, she receives a +5 circumstance bonus on this check.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Rake's Smile (Ex):</strong> At 3rd level, a rake gains a +1 morale bonus on Bluff and Diplomacy checks. This bonus increases by +1 for every 3 levels beyond 3rd.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the rake archetype: <Link to="/talent/befuddling_strike">befuddling strike</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/honeyed_words">honeyed words</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the rake archetype: <Link to="/talent/another_day">another day</Link>, <Link to="/talent/redirect_attack">redirect attack</Link> (<em>Combat Talents</em> group); <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _relic_raider = {title: "Relic Raider", jsx: <><h2 id="arc-rogue-relic_raider-relic-raider">Relic Raider</h2>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 27</Link><br/>Relic raiders are rogues who specialize in recovering treasures from ruins and tombs, some in a quest for knowledge, others out of a desire for riches. In addition to natural dangers and mundane traps, these locations are often protected by ancient curses or the psychic imprints of former occupants. Though not versed in magic, relic raiders learn to unweave these maledictions as easily as they unlock ancient vaults.</p>
<p><strong>Curse Sense (Ex):</strong> At 4th level, a relic raider adds 1/2 her rogue level on Perception checks to notice haunts and on Spellcraft checks to identify cursed items (using detect magic or similar effects).</p>
<p>In addition, the relic raider gains a +1 bonus on saving throws against curses and haunts and a +1 dodge bonus to AC against attacks by haunts. These bonuses increase by 1 at 6th level and every 3 rogue levels thereafter (to a maximum of +6 at 18th level).</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Disable Curse (Su):</strong> At 8th level, a relic raider can attempt to disable a curse as she would a magical trap. This ability acts as <Link to="/spell/remove_curse">remove curse</Link>, except instead of a caster level check, the relic raider attempts a Disable Device check (DC = 15 + the DC of the curse). Disabling a curse takes 2d4 rounds, and the relic raider cannot take 10 or 20 on this check. A relic raider can use this ability once per day at 8th level. At 12th level and every 4 rogue levels thereafter, a relic raider can use disable curse one additional time per day.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Advanced Talents:</strong> A relic raider can select the following new <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link>. These talents are considered Primary Sneak Attack Talents, and add effects to a rogue's sneak attack. Only one Primary Sneak Attack Talent can be applied to an individual attack, and the decision must be made before making the attack roll.</p>
<blockquote>
<p><em>Cursed Strike (Su):</em> Once per day, when the relic raider would normally deal sneak attack damage, she can instead forgo all bonus damage to attempt to curse her target (as per the spell <Link to="/spell/bestow_curse">bestow curse</Link>). The save is DC equal to 10 + 1/2 the relic raider's rogue level + her Intelligence modifier. A relic raider must have the <Link to="/talent/major_magic">major magic</Link> rogue talent before choosing cursed strike. The relic raider can use this ability an additional time per day at 15th level and 20th level.</p>
<p><em>Etheric Strike (Su):</em> With a successful sneak attack against haunts or undead, the relic raider can deal her sneak attack damage as positive energy damage rather than physical damage. The additional damage affects undead that are normally immune to sneak attacks because of their lack of a discernible anatomy (such as <Link to="/template/ghost">ghosts</Link>). A relic raider can make an etheric strike a number of times per day equal to 3 + her Charisma modifier.</p>
</blockquote>
</>};
const _river_rat = {title: "River Rat", jsx: <><h2 id="arc-rogue-river_rat-river-rat">River Rat</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 76</Link>, <Link to="/source/people_of_the_river">People of the River pg. 21</Link><br/>What highway robbers are to roads, river rats are to waterways. Skilled at hiding amid reeds and roots, these rogues strike the unwary from the shallows as others would from the shadows. Despite their strong association with banditry, river rats make excellent guides and hunters.</p>
<Ability icon={["skills"]} id="arc-rogue-river_rat-undefined">
<Pair id="arc-rogue-river_rat-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<p><strong>Swamper (Ex):</strong> At 1st level, a river rat gains a bonus equal to half her rogue level on Swim checks (minimum +1).</p>
<p>A river rat ignores <Link to="/rule/difficult_terrain">difficult terrain</Link> caused by light undergrowth and shallow bogs, and it costs her only 2 squares of movement to enter a square of deep bog or heavy undergrowth, rather than 4 squares of movement. She takes no penalty on Acrobatics or Stealth checks for being in bogs and undergrowth. All of these abilities apply only when she is wearing light or no armor and carrying no more than a light load.</p>
<p>This replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Rat's Resilience (Ex):</strong> A river rat is inured to dangers presented by disease-carrying parasites, poisonous fish, and other toxic river denizens. At 3rd level, a river rat gains a +1 bonus on saving throws against disease and poison effects. This bonus increases by 1 every 3 levels thereafter, to a maximum bonus of +6 at 18th level.</p>
<p>This replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the river rat archetype: <Link to="/talent/rogue_crawl">rogue crawl</Link>, <Link to="/talent/stand_up">stand up</Link> (<em>Combat Talents</em> group); <Link to="/talent/camouflage">camouflage</Link> (<em>Deception Talents</em> group); <Link to="/talent/hold_breath">hold breath</Link>, <Link to="/talent/strong_stroke">strong stroke</Link>, <Link to="/talent/survivalist">survivalist</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the river rat archetype: <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _roof_runner = {title: "Roof Runner", jsx: <><h2 id="arc-rogue-roof_runner-roof-runner">Roof Runner</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 74</Link><br/>A specialized urban acrobat, the roof runner makes her home high atop the spires and gables of great cities. She is skilled at traveling these uneven surfaces at full speed, performing daring leaps and deftly balancing upon narrow and precarious ledges.</p>
<p><strong>Roof Running (Ex):</strong> At 1st level, a roof runner becomes entirely adept at moving across the tops of buildings, spires, and similar locations. Provided she is wearing light armor or no armor, the roof runner can move at full speed while traveling across the tops of buildings or similar structures, and takes no penalties on any Dexterity-based Skill checks or Reflex saves that might be incurred from moving about on a roof.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Tumbling Descent (Ex):</strong> At 2nd level, a roof runner can use her acrobatics skill to attempt a rapid descent from a rooftop or another surface, ricocheting against another surface and then diving through an opening (such as a balcony or window) directly below. So long as she has at least two surfaces no farther than 10 feet apart to bounce against, she can ricochet her body back from one to the next, descending great distances with a single check. The DC is 10 + 5 for every additional 10-foot increment descended beyond the initial 10 feet dropped. If she fails, she falls the full distance.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the roof runner archetype: <Link to="/talent/stand_up">stand up</Link> (<em>Combat Talents</em> group); <Link to="/talent/terrain_mastery">terrain mastery</Link> (<em>Deception Talents</em> group); <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/nimble_climber">nimble climber</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talent</Link> complements the roof runner archetype: <Link to="/talent/fast_tumble">fast tumble</Link> (<em>Combat Talents</em> group).</p>
</>};
const _rotdrinker = {title: "Rotdrinker", jsx: <><h2 id="arc-rogue-rotdrinker-rotdrinker">Rotdrinker</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 12</Link><br/>Poisons are common tools in a rogue's trade, and some poison-using rogues are so frequently exposed to these toxins that they have developed resistances to particular poisons. Known as rotdrinkers, these rogues purposefully consume poisons to augment their minds and bodies, though they do so at the expense of traditional roguish nimbleness. This archetype is appropriate for rogues built using the Core Rulebook as well for unchained rogues.</p>
<p><strong>Poison Resistance (Ex):</strong> At 2nd level, a rotdrinker gains a +2 bonus on saving throws against all poisons. This bonus increases to +4 at 8th level.</p>
<p>This replaces <strong className="hl">evasion</strong>.</p>
<p><strong>Unnatural Ingestion (Ex):</strong> At 4th level, a rotdrinker gains immunity to all ingested poisons, including poisons that are converted to or considered ingested poisons (such as a poison converted to an ingested poison using the alchemist's poison conversion discovery).</p>
<p>Further, when the rotdrinker ingests an ingested poison, she gains a number of temporary hit points equal to half her rogue level. These temporary hit points stack with temporary hit points from other effects, and they last until they are lost or for a number of rounds equal to the rotdrinker's rogue level, whichever comes first.</p>
<p>Additionally, the rotdrinker gains benefits from the ingested poisons that she ingests depending on the poison's details, as explained below. A rotdrinker can gain hit points and additional benefits from only one ingested poison at a time. If she ingests another poison while she has temporary hit points and additional benefits from another poison, the previous temporary hit points and benefits are lost. At 8th level, the temporary hit points and additional benefits last for a number of minutes equal to the rotdrinker's rogue level.</p>
<p>Ingested poisons provide an alchemical bonus equal to the number of consecutive saving throws required to cure the poison (for example, lich dust provides a +2 bonus). An ingested poison that affects Strength, Dexterity, or Constitution grants this bonus on the rotdrinker's damage rolls and Fortitude saving throws. An ingested poison that affects Intelligence, Wisdom, or Charisma instead grants this bonus on the rotdrinker's attack rolls and Will saving throws. An ingested poison that does not affect any ability scores (such as <Link to="/eq-poison/oil_of_taggit">oil of taggit</Link>) grants this bonus to the rotdrinker's AC. If an ingested poison falls into more than one of these categories, the rotdrinker chooses which benefit she receives at the time of ingestion.</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong> and <strong className="hl">uncanny dodge</strong>.</p>
</>};
const _sanctified_rogue = {title: "Sanctified Rogue", jsx: <><h2 id="arc-rogue-sanctified_rogue-sanctified-rogue">Sanctified Rogue</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 74</Link><br/>The sanctified rogue serves a higher purpose, acting as a representative of a church or cult, or following the tenets of a specific faith or deity. While most sanctified rogues share the beliefs or ideals of the religions they represent, not all of them are necessarily pious. A handful of disreputable holy thieves serve purely as mercenaries. At the other end of spectrum, however, more sanctified rogues adhere to the tenets of their faith with fanatical devotion. Regardless, all seem blessed with the ability to call upon divine favor to aid them in times of need.</p>
<p><strong>Divine Purpose (Su):</strong> At 4th level, the favor of a deity or religious institution grants a special blessing on a sanctified rogue, shoring up some of her weaknesses. She gains a +1 sacred bonus on Fortitude and Will saving throws.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Divine Epiphany (Su):</strong> At 8th level, once per day, a sanctified rogue can peer into the immediate future and predict the results of a specific action as if she had cast an <Link to="/spell/augury">augury</Link> spell. The caster level of this spell is equal to the sanctified rogue's rogue class level.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the sanctified rogue archetype: <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/esoteric_scholar">esoteric scholar</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the sanctified rogue archetype: <Link to="/talent/feat">feat</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _sapper = {title: "Sapper", jsx: <><h2 id="arc-rogue-sapper-sapper">Sapper</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 21</Link><br/>The sapper is a trained siege engineer and can deal with traps and other obstacles given plenty of time.</p>
<p><strong>Destructive Dismantle (Ex):</strong> A sapper is able to quickly breach obstacles. Using a combination of engineering, explosives, alchemical reagents, and sheer bloodymindedness, she can deal up to 10 points of damage per sapper level upon an object once per day, ignoring the object's hardness. She might crack open a stone wall with an explosive charge, or collapse a ceiling by tunneling through its supports. This ability requires 1d4+1 hours of preparation, so it can be used only on immobile and unresisting objects.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Sapping (Ex):</strong> At 2nd level, a sapper gains a +4 bonus on Perception or Disable Device checks to find or disable traps. She also grants a +4 bonus when using the aid another action to assist with Strength checks to lift gates, bend bars, or force open doors. However, the sapper is focused, so it takes her a full-round action to complete any aid another action.</p>
<p>This ability replaces her 2nd-level <strong className="hl">rogue talent</strong>.</p>
<p><strong>Fence (Ex):</strong> At 4th level, a sapper loots a dungeon or other adventuring complex of its mundane goods and sells them to her various contacts. These mundane goods include things like brass fittings, stewpots, scrap metal, and so on. The sapper automatically loots this junk while in the dungeon, and must spend 24 uninterrupted hours selling the objects in town. She shares a portion of the proceeds with the adventurers; the amount typically equals 1d10 gp per sapper level per dungeon.</p>
<p>This ability replaces her 4th-level <strong className="hl">rogue talent</strong>.</p>
</>};
const _scout = {title: "Scout", jsx: <><h2 id="arc-rogue-scout-scout">Scout</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 134</Link><br/>Not all rogues live in the city. Scouts frequently roam the wilderness, often banding together as bandits, but sometimes serving as guides, as trailblazers, or as companions to a ranger or barbarian warrior. More comfortable with sneaking and hiding outdoors, the scout is still effective in the city and the dungeon.</p>
<p><strong>Scout's Charge (Ex):</strong> At 4th level, whenever a scout makes a charge, her attack deals sneak attack damage as if the target were flat-footed. Foes with uncanny dodge are immune to this ability.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Skirmisher (Ex):</strong> At 8th level, whenever a scout moves more than 10 feet in a round and makes an attack action, the attack deals sneak attack damage as if the target was flat-footed. If the scout makes more than one attack this turn, this ability only applies to the first attack. Foes with uncanny dodge are immune to this ability.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the scout archetype: <Link to="/talent/assault_leader">assault leader</Link> (<em>Ally-Related Talents</em> group); <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/trap_spotter">trap spotter</Link> (<em>Trap Talents</em> group); <Link to="/talent/camouflage">camouflage</Link> (<em>Deception Talents</em> group); <Link to="/talent/survivalist">survivalist</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the scout archetype: <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link> (<em>Combat Talents</em> group); <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _scroll_scoundrel = {title: "Scroll Scoundrel", jsx: <><h2 id="arc-rogue-scroll_scoundrel-scroll-scoundrel">Scroll Scoundrel</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 27</Link><br/>The scroll scoundrel is a rogue archetype that relies on cunning and quick wits to stay alive. He excels in exploiting overconfidence and predictability, using knowledge he's gained from his extensive research and field experience combined with hearsay and recent observations to react to problems as soon as they arise with swift but unnaturally accurate guesswork. A scroll scoundrel is often called upon by the Pathfinders to undertake missions where killing a foe isn't nearly as important as humiliating them in public duels or similar conflicts. A scroll scoundrel has the following class features.</p>
<p><strong>Fast Talker (Ex):</strong> At 2nd level, a scroll scoundrel's penalty on Bluff checks that are unlikely, farfetched, or impossible to achieve is reduced by 5. When he makes a Diplomacy check to adjust a creature's starting attitude, he gains a +3 competence bonus on the skill check.</p>
<p>This ability replaces the rogue's 2nd-level <strong className="hl">rogue talent</strong>.</p>
<p><strong>Adaptive Learning (Ex):</strong> At 3rd level, a scroll scoundrel gains a +1 bonus on saving throws against abilities and spells he has already successfully saved against within the past minute (even if the spells or abilities in question were used by different creatures). This bonus increases by +1 when the scroll scoundrel reaches 6th level, and by an additional +1 for every three levels thereafter, to a maximum of +6 at 18th level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Pay it Back (Ex):</strong> At 4th level, a scroll scoundrel receives a +1 bonus on attack rolls and weapon damage rolls against foes who made melee attacks against him in the previous round. This bonus increases to +2 at 10th level.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Elusive Gambit (Ex):</strong> At 6th level, a scroll scoundrel's movement can leave a foe off-balance. If a scroll scoundrel provokes an attack of opportunity by moving past an opponent and that opponent then misses with the attack, that foe is considered to be flat-footed against the scroll scoundrel's next melee attack, provided that melee attack comes within 1 round of the missed attack of opportunity.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Spot Weakness (Ex):</strong> At 10th level, a scroll scoundrel can discover a weakness in his enemy's defenses as a swift action. His next successful hit in the same round ignores 5 points of the foe's damage reduction or hardness. At 15th level, he ignores the first 10 points, and at 20th level, the first 15 points. If the attack deals any sneak attack damage, he ignores all of the foe's damage reduction or hardness for that attack. He cannot use this ability on foes that are immune to critical hits.</p>
<p>This ability replaces the scroll scoundrel's 10th-level <strong className="hl">rogue talent</strong>.</p>
</>};
const _sczarni_swindler = {title: "Sczarni Swindler", jsx: <><h2 id="arc-rogue-sczarni_swindler-sczarni-swindler">Sczarni Swindler</h2>
<p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 13</Link><br/>If life is a game, the Sczarni play to win. When skill and luck aren't enough, cheating is often the best option.</p>
<p><strong>Let Fate Decide (Ex):</strong> At 1st level, the Sczarni swindler can declare two different actions that rely on different types of rolls or checks, such as attacking a creature (an attack roll) or sneaking past the same creature (a Stealth check). As a standard action, the swindler then uses a random method to choose one of the declared activities, such as flipping a coin, rolling a die, or drawing a harrow card. The specific method doesn't matter as long as there is an equal chance of either activity being chosen. If the swindler then performs the chosen activity within the next round, she gains a luck bonus on the roll type required for that activity - attack rolls with a specific weapon, a specific skill check, a specific ability check, or a specific saving throw - equal to half her rogue level (minimum +1) for 1 minute. If the swindler performs any other action (whether declared or not) in the round after using this ability, she becomes shaken for 1 minute instead. The swindler can use this ability a number of times per day equal to 3 + her Charisma modifier.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Quicker Than the Eye (Ex):</strong> At 2nd level, when the Sczarni swindler uses Sleight of Hand, creatures take a penalty on their Perception checks equal to half the swindler's class level to notice the attempt. The swindler also reduces the normal -20 penalty by an amount equal to her class level when attempting a Sleight of Hand check as a move action instead of as a standard action. Lastly, the swindler can draw hidden weapons or objects from her person as a move action instead of the usual standard action.</p>
<p>This ability replaces <strong className="hl">evasion</strong>.</p>
<p><strong>Poker Face (Ex):</strong> At 3rd level, the Sczarni swindler gains a +1 bonus on Bluff, Profession (gambler), and Sense Motive checks. This bonus increases by 1 for every 3 levels beyond 3rd. The Sczarni swindler can also attempt to feint against non-humanoid targets without penalty, though she still takes a -8 penalty on feint attempts against creatures with animal intelligence and she cannot feint against mindless creatures.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>No Fool (Ex):</strong> At 4th level, the Sczarni swindler gains a +1 bonus on Will saving throws. This bonus increases by 1 for every 4 levels beyond 4th (to a maximum of +5 at 20th level).</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Cheat Fate (Ex):</strong> At 8th level, once per day, the Sczarni swindler can reroll any one d20 roll she has just made before the GM has revealed the result. She must take the result of the second roll, even if it is worse. The swindler can use this ability twice per day at 14th level, and three times per day at 20th.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the Sczarni swindler archetype: <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/canny_observer">canny observer</Link> (<em>Trap Talents</em> group); <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/honeyed_words">honeyed words</Link> (<em>Deception Talents</em> group); <Link to="/talent/hard_to_fool">hard to fool</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the Sczarni swindler archetype: <Link to="/talent/slippery_mind">slippery mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _seeker_of_the_lost = {title: "Seeker of the Lost", jsx: <><h2 id="arc-rogue-seeker_of_the_lost-seeker-of-the-lost">Seeker of the Lost</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 5</Link><br/>Aquatic elven adventurers descending into the ruins of sunken Azlant developed techniques to ease their explorations, and they now share these techniques among a loose group of acquaintances calling themselves the seekers of the lost. These aquatic elves eagerly explore trap-laden ruins of all types, using their skills to bypass traps and dispatch animated guardians put in place long ago by the lost cities' original founders. These seekers rarely travel far inland, though they may journey to larger landlocked bodies of water, such as Lake Encarthan, to explore submerged ruins there.</p>
<p><strong>Arcana Breaker (Su):</strong> Typically, only magical traps survive for long periods underwater, so a seeker of the lost specializes in noticing and disarming such traps. At 3rd level, a seeker of the lost gains a +1 competence bonus on Perception checks to notice magical traps and on Disable Device checks to disarm magical traps. This bonus increases by an additional +1 every 3 levels beyond 3rd (to a maximum of +6 at 18th level).</p>
<p>This ability replaces the 2nd-level <strong className="hl">rogue talent</strong>.</p>
<p><strong>Underwater Striker (Ex):</strong> At 4th level, a seeker of the lost gains the ability to strike precisely underwater. When a seeker of the lost makes a sneak attack with a melee weapon, the damage is not halved for being made underwater, as is usually the case for attacks that deal slashing or bludgeoning damage or, if the rogue is <Link to="/rule/underwater_combat">off-balance</Link>, attacks that deal piercing damage. In addition, when a seeker of the lost makes a sneak attack with a melee weapon against a construct, she ignores any hardness the construct has.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Wary Disarm (Ex):</strong> At 8th level, whenever a seeker of the lost attempts to disarm a trap using Disable Device, she does not spring the trap unless she fails by an amount equal to her rogue level or more. If she does set off a trap she was attempting to disarm, she doubles her trap sense bonus to avoid the trap.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the seeker of the lost archetype: <Link to="/talent/canny_observer">canny observer</Link>, <Link to="/talent/trap_spotter">trap spotter</Link> (<em>Trap Talents</em> group); <Link to="/talent/terrain_mastery">terrain mastery</Link> [water] (<em>Deception Talents</em> group); <Link to="/talent/strong_stroke">strong stroke</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the seeker of the lost archetype: <Link to="/talent/dispelling_attack">dispelling attack</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/defensive_roll">defensive roll</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> [water] (<em>Other Talents</em> group).</p>
</>};
const _shadow_scion = {title: "Shadow Scion", jsx: <><h2 id="arc-rogue-shadow_scion-shadow-scion">Shadow Scion</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 15</Link><br/>Count Ranalc's worshipers congregate in the places between dark and light, searching for secrets that might one day free their patron from his mysterious exile. Shadow scions have learned some of these secrets and draw power from the shadows themselves. Many shadow scions are dedicated <Link to="/race/fetchling">fetchling</Link> or <Link to="/race/wayang">wayang</Link> devotees of Count Ranalc.</p>
<p><strong>Shadow Dweller (Ex):</strong> A shadow scion gains darkvision with a range of 30 feet and a +1 competence bonus on Stealth checks in <Link to="/rule/dim_light">dim light</Link> and darkness. If she already has darkvision, the range of her darkvision increases by 10 feet. At 3rd level, and every 2 levels thereafter, the range of her darkvision increases by 10 feet and her bonus on Stealth checks increases by 1.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Shadow Strike:</strong> At 2nd level, a shadow scion gains <Link to="/feat/shadow_strike">Shadow Strike</Link> as a bonus feat. A character using the unchained rogue class instead gains <Link to="/feat/blind_fight">Blind-Fight</Link> as a bonus feat.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 2nd level.</p>
<p><strong>Shadow Step (Sp):</strong> At 8th level, a shadow scion can walk through the Shadow Plane and reappear elsewhere on the Material Plane as a standard action. The shadow scion can travel up to 30 feet per rogue level per day in this fashion, either in a single round or broken up across multiple shadow steps. This movement must be used in increments of at least 5 feet and does not provoke attacks of opportunity. Travel through the Shadow Plane is imprecise; when the shadow scion arrives back on the Material Plane, she reenters 1 square off target, as per the rules for <Link to="/rule/throw_splash_weapon">thrown splash weapons</Link>. If this would place her in an occupied square, she instead arrives in the nearest safe location. When the shadow scion arrives on the Material Plane, she is cloaked in shadow and gains concealment as per the <Link to="/spell/blur">blur</Link> spell for 1 round.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 8th level.</p>
<p><strong>Shadow Speaker (Sp):</strong> At 14th level, a shadow scion can spend 1 minute meditating within a patch of dim light or darkness; at the end of the time, she can draw information from the shadows. This functions as <Link to="/spell/commune_with_nature">commune with nature</Link>, except that it functions in any terrain to a radius of 100 feet per rogue level, and it cannot reveal information about any object or subject that is not currently in dim light or darkness. The shadow scion can use this ability once per day at 14th level and twice per day at 19th level.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 14th level.</p>
<p><strong>Shadow Master (Su):</strong> At 20th level, whenever a shadow scion is in an area of dim light, she gains DR 10/cold iron and a +2 luck bonus on all saving throws. In addition, whenever she confirms a critical hit against a foe that is in an area of dim light, that foe is blinded for 1d6 rounds.</p>
<p>This ability replaces <strong className="hl">master strike</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the shadow scion archetype: <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/underhanded">underhanded</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/false_friend">false friend</Link>, <Link to="/talent/fast_stealth">fast stealth</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the shadow walker archetype: <Link to="/talent/slippery_mind">slippery mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/improved_evasion">improved evasion</Link>, <Link to="/talent/unwitting_ally">unwitting ally</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> (<em>Other Talents</em> group).</p>
</>};
const _shadow_walker = {title: "Shadow Walker", jsx: <><h2 id="arc-rogue-shadow_walker-shadow-walker">Shadow Walker</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 9</Link><br/>Shadow walkers are comfortable in light, darkness, and the shadows in between. Fetchling rogues naturally gravitate toward becoming shadow walkers, but shadow walkers exist among other creatures both above and below the surface.</p>
<p><strong>Expanded Sight (Su):</strong> At 1st level, a shadow walker gains darkvision with a range of 30 feet. If she already has darkvision, the range of her darkvision increases by 10 feet. When the shadow walker reaches 3rd level, and every 2 rogue levels thereafter, the range of her darkvision increases by 10 feet. Also at 3rd level, the shadow walker loses the light sensitivity weakness, if she has it. If she has light blindness, she instead treats it as light sensitivity.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Illumination Control (Sp):</strong> At 3rd level, a shadow walker can manipulate nearby illumination. At the start of each day, a shadow walker gains a number of illumination points equal to half her rogue level and can spend illumination points to use certain spell-like abilities. As long as she has at least 1 illumination point, she can cast <Link to="/spell/light">light</Link> at will. She can spend 2 illumination points to cast <Link to="/spell/darkness">darkness</Link>, and 3 illumination points to cast <Link to="/spell/daylight">daylight</Link>, <Link to="/spell/deeper_darkness">deeper darkness</Link>, or <Link to="/spell/motes_of_dusk_and_dawn">motes of dusk and dawn</Link>. These spell-like abilities have a caster level equal to the shadow walker's rogue level. Using these spell-like abilities does not hamper the shadow walker's vision; for example, she can see through the deeper darkness she creates, and does not take penalties for light sensitivity in the area of her own daylight.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 2nd level and <strong className="hl">trap sense</strong>.</p>
<p><strong>Favored Illumination (Su):</strong> At 4th level, a shadow walker chooses one <Link to="/rule/illumination_level">illumination level</Link>: bright light, normal light, dim light, or darkness (including supernatural darkness). While she is within her chosen illumination level, she gains a +2 bonus on initiative checks and Acrobatics, Perception, and Sleight of Hand skill checks, and can take 10 on any Stealth check attempted within that illumination level. When the shadow walker confirms a critical hit with a melee attack that deals sneak attack damage while in her chosen illumination level, she regains 1 illumination point (to a maximum of half her rogue level). Confirming a critical hit on a creature that has fewer Hit Dice than half the shadow walker's character level doesn't restore illumination points. When the shadow walker reaches 6th level, and every 3 rogue levels thereafter, the bonuses she gains within her chosen illumination level increase by 1.</p>
<p>This ability replaces the rogue's <strong className="hl">uncanny dodge</strong> and <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the shadow walker archetype: <Link to="/talent/obscuring_blow">obscuring blow</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/gloom_magic">gloom magic</Link>, <Link to="/talent/greater_gloom_magic">greater gloom magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/umbral_gear">umbral gear</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/deft_palm">deft palm</Link> (<em>Combat Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the shadow walker archetype: <Link to="/talent/slippery_mind">slippery mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/unwitting_ally">unwitting ally</Link>, <Link to="/talent/weapon_snatcher">weapon snatcher</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/see_in_darkness">see in darkness</Link> (<em>Other Talents</em> group).</p>
</>};
const _sharper = {title: "Sharper", jsx: <><h2 id="arc-rogue-sharper-sharper">Sharper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 47</Link><br/>Sharpers use trickery and deception to part an owner from his valuables. Pathological risk-takers, they distinguish themselves from con artists and burglars by virtue of the simplicity and boldness of their schemes, which are usually impromptu, rather than carefully orchestrated. Many sharpers consider themselves romantic figures and foster the image of a resourceful, dashing rogue living by wits and luck while subverting authority at every turn.</p>
<p><strong>Scam Artist (Ex):</strong> A sharper gains a bonus equal to half her rogue level (minimum +1) on all Bluff and Sleight of Hand checks.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Sticky Fingers (Ex):</strong> At 2nd level, a sharper receives <Link to="/feat/improved_steal">Improved Steal</Link> as a bonus feat. At 6th level, she receives <Link to="/feat/greater_steal">Greater Steal</Link> as a bonus feat, and at 8th level, she receives <Link to="/feat/quick_steal">Quick Steal</Link> as a bonus feat. The sharper gains these feats even if she doesn't meet the prerequisites.</p>
<p>This ability replaces the <strong className="hl">rogue talents</strong> gained at 2nd, 6th, and 8th levels.</p>
<p><strong>Lucky Save (Su):</strong> At 3rd level, when a sharper's wits aren't enough to pull her out of a bad situation, her luck still just might save her. She gains a +1 luck bonus on all saving throws. This bonus increases to +2 at 9th level and to +3 at 15th level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Audacious Overconfidence (Ex):</strong> At 4th level, after failing an attack roll, skill check, or saving throw, a sharper can reduce her saving throw bonus from lucky save by 1 for 24 hours in order to reroll the failed roll. She can use this ability once per day at 4th level, plus an additional time per day at 10th level and again at 16th level. The decreases to her bonus from lucky save stack with each other.</p>
<p>This ability replaces the <strong className="hl">rogue talents</strong> gained at 4th, 10th, and 16th levels.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the sharper archetype: <Link to="/talent/follow_along">follow along</Link>, <Link to="/talent/shades_of_gray">shades of gray</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/deft_palm">deft palm</Link> (<em>Combat Talents</em> group); <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/convincing_lie">convincing lie</Link>, <Link to="/talent/false_friend">false friend</Link>, <Link to="/talent/fast_fingers">fast fingers</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/obfuscate_story">obfuscate story</Link>, <Link to="/talent/steal_the_story">steal the story</Link> (<em>Deception Talents</em> group); <Link to="/talent/certainty">certainty</Link> (<em>Other Talents</em> group - unchained rogue only).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the sharper archetype: <Link to="/talent/another_day">another day</Link>, <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/improved_evasion">improved evasion</Link>, <Link to="/talent/redirect_attack">redirect attack</Link> (<em>Combat Talents</em> group); <Link to="/talent/hidden_mind">hidden mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/cutting_edge">cutting edge</Link> (unchained rogue only), <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _skulking_slayer = {title: "Skulking Slayer", jsx: <><h2 id="arc-rogue-skulking_slayer-skulking-slayer">Skulking Slayer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 55</Link><br/>Pushed into a life of crime by the society around them, half-orcs gravitate toward criminal activities that suit them best. <Link to="/race/half_orc">Half-orc</Link> rogues leave subtle tactics and finesse to halflings and elves, and rely on brute strength and thuggery when they go about making mischief. Skulking slayers have turned the use of raw strength and surprise into an art form. A skulking slayer has the following class features.</p>
<p><strong>Weapon and Armor Proficiency:</strong> The skulking slayer gains proficiency with <Link to="/eq-weapon/greatclub">greatclubs</Link> and <Link to="/eq-weapon/whip">whips</Link>, but loses proficiency with rapiers and hand crossbows.</p>
<Ability icon={["skills"]} id="arc-rogue-skulking_slayer-undefined">
<Pair id="arc-rogue-skulking_slayer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="Removed Skills">Disable Device, Linguistics, Sleight of Hand</Pair></Ability>
<p><strong>Skill Ranks per Level:</strong> 6 + Int modifier.</p>
<p><strong>Pass for Human (Ex):</strong> At 1st level, when trying to conceal her half-orc heritage, a skulking slayer gains a bonus on Disguise checks equal to half her level. When using disguise to appear as a specific individual, skulking stalkers ignore the normal -2 penalty to appear as another race.</p>
<p><strong>Underhanded Maneuvers (Ex):</strong> At 1st level, when she could normally make a sneak attack, a slayer may instead make a dirty trick or steal combat maneuver with a bonus on her roll. This bonus is equal to her number of sneak attack dice for a dirty trick combat maneuver, or 1-1/2 &times; her number of sneak attack dice for a steal combat maneuver.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Bonus Feats:</strong> At 2nd level, a skulking slayer can select the <Link to="/feat/surprise_follow_through">Surprise Follow-Through</Link> feat in place of a rogue talent. At 10th level, she can select the <Link to="/feat/improved_surprise_follow_through">Improved Surprise Follow-Through</Link> feat (if she already has Surprise Follow-Through) in place of an advanced rogue talent.</p>
<p><strong>Bold Strike (Ex):</strong> At 3rd level, when a skulking slayer charges and makes a sneak attack with a two-handed weapon, she rolls d8s instead of d6s for her sneak attack damage.</p>
<p>This ability replaces <strong className="hl">trap sense +1 and +4</strong>.</p>
<p><strong>Shifty (Ex):</strong> At 6th level, a skulking slayer gains a bonus on Bluff checks to feint equal to half her level.</p>
<p>This ability replaces <strong className="hl">trap sense +2</strong>.</p>
<p><strong>Unexpected Charge (Ex):</strong> At 9th level, a skulking slayer can make a Bluff check to feint as a swift action before a charge.</p>
<p>This ability replaces <strong className="hl">trap sense +3</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the skulking slayer archetype: <Link to="/talent/powerful_sneak">powerful sneak</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/combat_swipe">combat swipe</Link> (<em>Combat Talents</em> group); <Link to="/talent/terrain_mastery">terrain mastery</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the skulking slayer archetype: <Link to="/talent/crippling_strike">crippling strike</Link>, <Link to="/talent/deadly_sneak">deadly sneak</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/unwitting_ally">unwitting ally</Link> (<em>Combat Talents</em> group).</p>
</>};
const _sly_saboteur = {title: "Sly Saboteur", jsx: <><h2 id="arc-rogue-sly_saboteur-sly-saboteur">Sly Saboteur</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 77</Link><br/>Sly saboteurs are irregular soldiers who specialize in sabotage and surprise attacks. Though they often face enemies with greater numbers or resources (or both), sly saboteurs have the advantage of knowing the local people and terrain. They might be rebels fighting against a corrupt government, or they might be members of a militia opposing an invading force. Some are environmentalists who sabotage the tools of industry in order to protect unspoiled nature.</p>
<Ability icon={["skills"]} id="arc-rogue-sly_saboteur-undefined">
<Pair id="arc-rogue-sly_saboteur-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<p><strong>Scamper (Ex):</strong> At 3rd level, a sly saboteur can move through 5 feet of <Link to="/rule/difficult_terrain">difficult terrain</Link> each round as if it were normal terrain. At 6th level and every 3 levels thereafter, this distance increases by 5 feet (to a maximum of 30 feet at 18th level). This ability allows the sly saboteur to take a 5-foot step into difficult terrain. This ability applies only when she is wearing light armor or no armor and carrying no more than a light load, and it stacks with the <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link> and <Link to="/feat/nimble_moves">Nimble Moves</Link> feats.</p>
<p>This replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Catastrophic Failure (Ex):</strong> At 4th level, when a sly saboteur uses Disable Device to rig a device to fail, she can increase the DC of the check by 5. If she does so and succeeds at the check, when the device fails, users take damage equal to the sly saboteur's sneak attack, or they take half that amount with a successful Reflex save (DC = 10 + half the sly saboteur's level + her Dexterity modifier). The type of damage depends on the nature of the device but is typically bludgeoning, fire, piercing, or slashing.</p>
<p>This replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Disable Magic Device (Su):</strong> At 8th level, a sly saboteur can use Disable Device to rig a magic item to fail as if it were an extremely complex device. If the item's effect is instantaneous, the effect is countered the next time the item is activated, but the activation still consumes a charge or use. If the item's effect is continuous or has a duration, the effect fails after 1d4 rounds or minutes of use (sly saboteur's choice). This ends the duration or suppresses a continuous effect for 1d4 rounds (as the spell <Link to="/spell/dispel_magic">dispel magic</Link>). This ability cannot be used on artifacts.</p>
<p>If this ability is combined with the catastrophic failure ability, the resulting damage is untyped magic and is not reduced by damage reduction or energy resistance.</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the sly saboteur archetype: <Link to="/talent/rogue_crawl">rogue crawl</Link> (<em>Combat Talents</em> group); <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link>, <Link to="/talent/trap_spotter">trap spotter</Link> (<em>Trap Talents</em> group); <Link to="/talent/quick_disable">quick disable</Link> (<em>Disable Device Talents</em> group); <Link to="/talent/fast_stealth">fast stealth</Link> (<em>Deception Talents</em> group); <Link to="/talent/getaway_artist">getaway artist</Link>, <Link to="/talent/wall_scramble">wall scramble</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the sly saboteur archetype: <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link> (<em>Combat Talents</em> group); <Link to="/talent/frugal_trapsmith">frugal trapsmith</Link>, <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link>, <Link to="/talent/rumormonger">rumormonger</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _smuggler = {title: "Smuggler", jsx: <><h2 id="arc-rogue-smuggler-smuggler">Smuggler</h2>
<p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 23</Link><br/>Smugglers specialize in moving contraband from one area to another while avoiding detection by authorities. Sometimes a smuggler's cargo is illegal goods, such as drugs or slaves. Other times, a smuggler hides legal goods to avoid paying duties or taxes, and some may even use their abilities to help smuggle escaped slaves to freedom. Smugglers may work on a ship that does nothing but smuggle goods from one port to another, or they may freelance, working on ships that require a smuggler's services for a short time.</p>
<p><strong>Bribery:</strong> An experienced smuggler knows how to smooth over interactions with customs officials. At 3rd level, when dealing with officials working at a checkpoint, conducting an inspection, or performing another such activity, a smuggler can make a Diplomacy check opposed by the presiding official's Sense Motive check to ensure her contraband makes it through. She gains a +1 bonus on this Diplomacy check. On a successful check, the smuggler pays a small bribe (5d4 gp) to guarantee her cargo remains undisturbed. This bonus rises to +2 when the smuggler reaches 6th level, +3 at 9th level, +4 at 12th level, +5 at 15th level, and +6 at 18th level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Conceal Item:</strong> A smuggler adds 1/2 her level on Sleight of Hand checks (minimum +1). A smuggler can use Sleight of Hand to conceal a small item in a container or room, such as the false bottom of a chest or beneath floorboards. Anyone attempting to find an item concealed by a smuggler makes a Perception check opposed by the Sleight of Hand check made by the smuggler when she concealed the object.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Distraction:</strong> A smuggler uses patter and body language to deflect searchers from hidden items. At 2nd level, a smuggler may make a Bluff check opposed by a searcher's Perception check when a searcher looks for items the smuggler has concealed. If the smuggler's Bluff check succeeds, the searcher must make a second Perception check and take the lower of the two rolls.</p>
<p>This ability replaces <strong className="hl">Evasion</strong>.</p>
</>};
const _snare_setter = {title: "Snare Setter", jsx: <><h2 id="arc-rogue-snare_setter-snare-setter">Snare Setter</h2>
<p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 23</Link><br/>Deep in darkness, the snare setter constructs his deadly traps and brutal mechanisms to confound and destroy any who try to invade his domain.</p>
<p><strong>Trapper (Ex):</strong> At 1st level, a snare setter gains <Link to="/feat/learn_ranger_trap">Learn Ranger Trap</Link> as a bonus feat. In addition to the trap granted by this feat, he learns how to construct the <Link to="/rangertrap/tripwire">tripwire</Link> trap for free. For the purposes of this feat, he's considered a ranger of his snare setter level, and uses his Intelligence in place of Wisdom to determine uses per day and the DC of his ranger traps. Whenever the snare setter could learn a new rogue trick, he may instead learn a new ranger trap.</p>
<p>This ability replaces <strong className="hl">sneak attack</strong> (but see below).</p>
<p><strong>Trapsmithing (Ex):</strong> A snare setter gains a bonus on Perception skill checks to detect traps and on Craft (traps) checks equal to 1/2 his snare setter level. He can use Craft (traps) in place of Disable Device to disarm traps, including magical traps.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Deadly Traps (Ex):</strong> At 3rd level, the snare setter's traps deal an additional 1d6 points of damage on the first round they're activated. This damage is of the same type the trap normally deals. Traps that don't deal damage are unaffected by this ability. This additional damage increases by 1d6 points every 4 levels beyond 3rd (7th, 11th, 15th, and 19th).</p>
<p><strong>Sneak Attack (Su):</strong> At 5th level, the snare setter gains sneak attack +1d6. This functions as the rogue ability of the same name, but the damage increases by 1d6 every 4 levels after 5th (9th, 13th, and 17th).</p>
<p><strong>Master Snare Setter (Ex):</strong> At 20th level, the snare setter can attach one of a rogue's master strike effects to a trap he creates. When the trap is triggered, the subject makes an additional Fortitude save at the same DC as the trap to avoid this effect. A snare setter can have only one trap affected by this ability active at any time. He may remove this ability from a trap at any range as a free action.</p>
<p>This ability replaces <strong className="hl">master strike</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the snare setter archetype: <Link to="/talent/snipers_eye">sniper's eye</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/cunning_trigger">cunning trigger</Link> (<em>Trap Talents</em> group); <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/fast_stealth">fast stealth</Link> (<em>Deception Talents</em> group).</p>
</>};
const _sniper = {title: "Sniper", jsx: <><h2 id="arc-rogue-sniper-sniper">Sniper</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 134</Link><br/>Some say that the sniper is the worst kind of assassin: a killer who waits silently in the shadows and then strikes from a distance without remorse. Snipers, of course, understand that such protestations about "cowardice" and "honor" regarding their profession are in fact merely the bleatings of sheep fearing the slaughter and pay them no heed. Most snipers take pride in their formidable abilities, which allow them to take life quickly, quietly, and efficiently, then disappear into their surroundings without a trace.</p>
<p><strong>Accuracy (Ex):</strong> At 1st level, a sniper halves all range increment penalties when making ranged attacks with a bow or crossbow.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Deadly Range (Ex):</strong> At 3rd level, a sniper increases the range at which she can apply her sneak attack damage by 10 feet. This range increases by 10 feet for every 3 levels after 3rd.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the sniper archetype: <Link to="/talent/snipers_eye">sniper's eye</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/snap_shot">snap shot</Link>, <Link to="/talent/weapon_training">weapon training</Link> (<em>Combat Talents</em> group); <Link to="/talent/camouflage">camouflage</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the sniper archetype: <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link> (<em>Combat Talents</em> group); <Link to="/talent/master_of_disguise">master of disguise</Link> (<em>Other Talents</em> group).</p>
</>};
const _snoop = {title: "Snoop", jsx: <><h2 id="arc-rogue-snoop-snoop">Snoop</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 47</Link><br/>Snoops are the underworld's version of detectives. They often act as information peddlers, specializing in gathering secrets through investigation, subterfuge, and coercion, and selling or trading those secrets for personal gain.</p>
<p><strong>Inspiration (Ex):</strong> At 1st level, a snoop gains an ability similar to the <Link to="/class/investigator">investigator's</Link> inspiration class ability. The snoop begins with an inspiration pool equal to half her rogue level plus her Intelligence modifier (minimum of 1). Unlike an investigator, a snoop can only use inspiration on skill checks, not on attack rolls or saving throws. This ability is otherwise identical to the investigator class ability of the same name.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong> and <strong className="hl">evasion</strong>.</p>
<p><strong>Investigator Talents (Ex):</strong> Beginning at 2nd level, and each time she selects a new rogue talent, a snoop can instead select one of the following investigator talents: <Link to="/invtalent/eidetic_recollection">eidetic recollection</Link>, <Link to="/invtalent/empathy">empathy</Link>, <Link to="/invtalent/hidden_agendas">hidden agendas</Link>, <Link to="/invtalent/inspired_alertness">inspired alertness</Link>, <Link to="/invtalent/inspired_intimidator">inspired intimidator</Link>, <Link to="/invtalent/item_lore">item lore</Link>, or <Link to="/invtalent/underworld_inspiration">underworld inspiration</Link>. Her effective investigator level for the purpose of these talents is equal to her rogue level. She still can't use inspiration on attack rolls or saving throws (so, for instance, she can't use the second part of hidden agendas).</p>
<p><strong>Uncanny Snoop (Ex):</strong> At 4th level, a snoop gains a +2 bonus on Intimidate checks when trying to force an opponent to give her information (or Bluff and Diplomacy checks for the same purpose if she has the coax information rogue talent). She also gains a +2 bonus on Sense Motive checks to tell if someone's information is false. At 8th level, these bonuses increase to +4.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong> and <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Master of Whispers (Ex):</strong> At 8th level, a snoop receives the <Link to="/talent/rumormonger">rumormonger</Link> advanced rogue talent.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 8th level.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the snoop archetype: <Link to="/talent/black_market_connections">black market connections</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/coax_information">coax information</Link>, <Link to="/talent/fast_stealth">fast stealth</Link> (<em>Deception Talents</em> group); <Link to="/talent/follow_clues">follow clues</Link>, <Link to="/talent/strong_impression">strong impression</Link> (<em>Other Talents</em> group); <Link to="/talent/certainty">certainty</Link> (<em>Other Talents</em> group - unchained rogue only).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the snoop archetype: <Link to="/talent/hard_minded">hard minded</Link> (<em>Combat Talents</em> group); <Link to="/talent/hidden_mind">hidden mind</Link> (<em>Magical Talents</em> group); <Link to="/talent/cutting_edge">cutting edge</Link> (unchained rogue only), <Link to="/talent/skill_mastery">skill mastery</Link>, <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link> (<em>Other Talents</em> group).</p>
</>};
const _spy = {title: "Spy", jsx: <><h2 id="arc-rogue-spy-spy">Spy</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 135</Link><br/>The best spies are like chameleons, but not only can they change their appearances to fit the situation, they can also change their personalities, allegiances, and even loves if that's what it takes to achieve their clandestine goals. Spies are the ultimate manipulators, and even those who commission their services sometimes find that they've merely served the spies' own interests.</p>
<p><strong>Skilled Liar (Ex):</strong> Whenever a spy uses Bluff to attempt to deceive someone, she gains a bonus on the opposed roll equal to 1/2 her rogue level (minimum +1). This bonus does not apply to feint attempts or attempts to pass secret messages.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Poison Use (Ex):</strong> A 3rd level, a spy is trained in the use of poison and cannot accidentally poison herself when applying poison to a blade.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the spy archetype: <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/canny_observer">canny observer</Link> (<em>Trap Talents</em> group); <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/quick_disguise">quick disguise</Link> (<em>Deception Talents</em> group); <Link to="/talent/guileful_polyglot">guileful polyglot</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the spy archetype: <Link to="/talent/crippling_strike">crippling strike</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/stealthy_sniper">stealthy sniper</Link> (<em>Combat Talents</em> group); <Link to="/talent/master_of_disguise">master of disguise</Link> (<em>Other Talents</em> group).</p>
</>};
const _survivalist = {title: "Survivalist", jsx: <><h2 id="arc-rogue-survivalist-survivalist">Survivalist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 74</Link><br/>The survivalist focuses her talents on surviving harsh and unforgiving conditions that would kill a lesser rogue. Whether in blazing deserts or frigid arctic wastes - or simply the cold, hard reality of the streets - the survivalist uses her training to both ensure her own success and provide for the safety of her allies.</p>
<p><strong>Hardy (Ex):</strong> At 1st level, a survivalist is already prepared to endure extreme hardships and environmental conditions. She can go twice the normal number of days without water and triple the normal number of days without food before feeling the effects of either thirst or starvation.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Endure Elements (Sp):</strong> At 3rd level, a survivalist rogue can use <Link to="/spell/endure_elements">endure elements</Link> once per day as a spell-like ability. The survivalist's caster level is the same as her rogue level.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the survivalist archetype: <Link to="/talent/iron_guts">iron guts</Link> (<em>Poison Talents</em> group); <Link to="/talent/resiliency">resiliency</Link> (<em>Combat Talents</em> group); <Link to="/talent/terrain_mastery">terrain mastery</Link> (<em>Deception Talents</em> group); <Link to="/talent/hold_breath">hold breath</Link>, <Link to="/talent/strong_stroke">strong stroke</Link>, <Link to="/talent/survivalist">survivalist</Link>, <Link to="/talent/wall_scramble">wall scramble</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the survivalist archetype: <Link to="/talent/another_day">another day</Link>, <Link to="/talent/defensive_roll">defensive roll</Link> (<em>Combat Talents</em> group); <Link to="/talent/feat">feat</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _swamp_poisoner = {title: "Swamp Poisoner", jsx: <><h2 id="arc-rogue-swamp_poisoner-swamp-poisoner">Swamp Poisoner</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 4</Link><br/>Swamp poisoners use their own toxins to defend their homes and level the playing field. The swamp poisoner is an archetype available to <Link to="/race/grippli">grippli</Link> characters, and it is appropriate for rogues built using the rules from the Pathfinder RPG Core Rulebook as well as for unchained rogues.</p>
<p><strong>Prerequisites:</strong> A swamp poisoner must have selected the toxic skin grippli alternate racial trait.</p>
<p><strong>Mucous Membrane (Ex):</strong> A swamp poisoner gains a bonus equal to half his class level on Escape Artist checks and to his CMD when resisting grapple attempts (minimum 1).</p>
<p>This replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Mark the Vein (Ex):</strong> At 2nd level, when the swamp poisoner attacks a target that is currently affected by his grippli racial poison, that target is denied its Dexterity bonus to AC. The target must be actively poisoned, not just suffering the effects of poison, such as lingering ability damage.</p>
<p>This replaces the <strong className="hl">rogue talent</strong> gained at 2nd level.</p>
<p><strong>Poison the Well (Ex):</strong> At 3rd level as a standard action, a swamp poisoner can smear the poison generated through the use of his toxic skin alternate racial trait onto the ground in a 5-foot area, instead of onto a weapon or his own body. The first creature other than the swamp poisoner to enter the area is exposed to the poison. The poison loses its potency after 1 hour. This area is considered a trap, and the DCs of Perception checks to notice it and Disable Device checks to disable it are equal to 10 + half the swamp poisoner's level + the swamp poisoner's Constitution modifier.</p>
<p>The swamp poisoner also gains an extra use per day of his toxic skin alternate racial trait, plus one additional use per day for every 3 levels beyond 3rd.</p>
<p>This replaces <strong className="hl">trap sense</strong>. An unchained rogue replaces <strong className="hl">danger sense</strong> instead.</p>
</>};
const _swashbuckler = {title: "Swashbuckler", jsx: <><h2 id="arc-rogue-swashbuckler-swashbuckler">Swashbuckler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 135</Link><br/>A paragon of mobile swordplay, the swashbuckler is a rogue who focuses almost exclusively on honing her skill at arms and perfecting daring acrobatic moves and elaborate flourishes that border on performance.</p>
<p><strong>Martial Training (Ex):</strong> At 1st level, the swashbuckler may select one martial weapon to add to her list of weapon proficiencies. In addition, she may take the <Link to="/talent/combat_trick">combat trick</Link> rogue talent up to two times.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Daring (Ex):</strong> At 3rd level, a swashbuckler gains a +1 morale bonus on Acrobatics checks and saving throws against fear. This bonus increases by +1 for every 3 levels beyond 3rd.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the swashbuckler archetype: <Link to="/talent/offensive_defense">offensive defense</Link>, <Link to="/talent/powerful_sneak">powerful sneak</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/positioning_attack">positioning attack</Link>, <Link to="/talent/weapon_training">weapon training</Link> (<em>Combat Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the swashbuckler archetype: <Link to="/talent/crippling_strike">crippling strike</Link>, <Link to="/talent/entanglement_of_blades">entanglement of blades</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/redirect_attack">redirect attack</Link> (<em>Combat Talents</em> group).</p>
</>};
const _swordmaster = {title: "Swordmaster", jsx: <><h2 id="arc-rogue-swordmaster-swordmaster">Swordmaster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 164</Link><br/>A swordmaster meditates to strengthen her spiritual connection to her blade. She strives to perfect her skills by mastering six deadly trances. A swordmaster has the following class features.</p>
<Ability icon={["skills"]} id="arc-rogue-swordmaster-undefined">
<Pair id="arc-rogue-swordmaster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Disguise, Knowledge (dungeoneering)</Pair></Ability>
<p><strong>Trance (Ex):</strong> At 3rd level, a swordmaster learns to focus her martial prowess using an intense meditative trance. Under the influence of a trance, the swordmaster can perform fantastic martial feats. Entering a trance is a full-round action that provokes attacks of opportunity. The swordmaster can maintain the trance for a number of rounds per day equal to 4 + her Wisdom modifier. At each level beyond 3rd, she can remain in the trance for 1 additional round. She can end her trance as a free action. Following a trance, the swordmaster is fatigued for a number of rounds equal to 2 &times; the number of rounds she spent in the trance. A swordmaster cannot enter a new trance while fatigued but can otherwise enter a trance multiple times during a single encounter or combat. If a swordmaster falls unconscious, her trance immediately ends.</p>
<p>At 3rd level, the swordmaster chooses one trance from the list below. She chooses another trance at 6th, 9th, 12th, 15th, and 18th level. She can only use one type of trance at a time.</p>
<blockquote>
<p><strong>Crane Trance (Ex):</strong> The swordmaster's blade rises and falls with the graceful sweeping arcs of the mountain crane. When in this trance, a swordmaster gains the benefits of the <Link to="/feat/crane_style">Crane Style</Link> feat.</p>
<p><strong>Dragon Trance (Ex):</strong> Like the dragon, the swordmaster has honed the steadiness of her mind and body. When in this trance, a swordmaster gains the benefits of the <Link to="/feat/dragon_style">Dragon Style</Link> feat.</p>
<p><strong>Leopard Trance (Ex):</strong> Using the swiftness of the leopard, a swordmaster's evasive footwork confuses her opponents. When in this trance, a swordmaster gains the benefits of the <Link to="/feat/mobility">Mobility</Link> feat.</p>
<p><strong>Monkey Trance (Ex):</strong> As the monkey springs, the swordmaster leaps from the reach of her enemies. While in this trance, a swordmaster can make an Acrobatics check opposed by an opponent's CMD. If she succeeds, she may move 5 feet as a swift action within the opponent's threatened area; this movement does not provoke attacks of opportunity and does not count as a 5-foot step.</p>
<p><strong>Serpent Trance (Ex):</strong> Like the serpent, the swordmaster's quick movements allow her to catch her opponent unawares. While in this trance, a swordmaster receives a +4 bonus on Bluff checks made to feint during combat.</p>
<p><strong>Tiger Trance (Ex):</strong> The swordmaster pounces upon her opponents, striking with the ferocity and brute force of a wild tiger. While in this trance, a swordmaster can make a combat maneuver check against an opponent within charge range. If she succeeds, she may charge that opponent and make a full attack against that opponent.</p>
</blockquote>
<p>This ability replaces all increments of <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the swordmaster archetype: <Link to="/talent/befuddling_strike">befuddling strike</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/combat_trick">combat trick</Link>, <Link to="/talent/stand_up">stand up</Link>, <Link to="/talent/weapon_training">weapon training</Link>, <Link to="/talent/positioning_attack">positioning attack</Link> (<em>Combat Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the swordmaster archetype: <Link to="/talent/crippling_strike">crippling strike</Link>, <Link to="/talent/confounding_blades">confounding blades</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/defensive_roll">defensive roll</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/redirect_attack">redirect attack</Link> (<em>Combat Talents</em> group).</p>
</>};
const _sylvan_trickster = {title: "Sylvan Trickster", jsx: <><h2 id="arc-rogue-sylvan_trickster-sylvan-trickster">Sylvan Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 77</Link><br/>Sylvan tricksters are rogues who model themselves after the mischievous fey of legend. Though not spellcasters, sylvan tricksters learn minor magical abilities reminiscent of those favored by fey creatures. The journey for many sylvan tricksters began in childhood, learning at an elder's knee the stories of the fey and the secrets of how to resist their tricks. Sylvan tricksters often live in areas where the boundary with the First World is thin, and a few have even been there: voluntarily or not.</p>
<p><strong>Class Skills:</strong> A sylvan trickster adds Knowledge (nature) to her list of class skills and learns Sylvan as a bonus language. She does not gain Knowledge (dungeoneering) as a class skill.</p>
<p>This alters the rogue's <strong className="hl">class skills</strong>.</p>
<p><strong>Wild Empathy (Ex):</strong> A sylvan trickster can improve an animal's attitude. This ability functions as the <Link to="/class/druid">druid</Link> ability of the <Link to="/ability/wild_empathy">same name</Link>, using the sylvan trickster's rogue level as her effective druid level.</p>
<p>This replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Fey Tricks:</strong> A sylvan trickster can select a witch <Link to="/ability/hexes">hex</Link> in place of a rogue talent. At 10th level, the sylvan trickster can select a hex or <Link to="/ability/major_hexes">major hex</Link> in place of a rogue talent. At 18th level, a sylvan trickster can select a hex, major hex, or <Link to="/ability/grand_hexes">grand hex</Link> in place of a rogue talent. She cannot select any hex more than once.</p>
<p>This alters <strong className="hl">rogue talents</strong>.</p>
<p><strong>Resist Nature's Lure (Ex):</strong> At 4th level, a sylvan trickster gains <Link to="/ability/resist_natures_lure">resist nature's lure</Link> as the druid ability of the same name.</p>
<p>This replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Fey Resistance (Ex):</strong> At 8th level, a sylvan trickster gains DR 2/cold iron. At 11th level and every 3 levels thereafter, this damage reduction increases by 2 (to a maximum of DR 10/cold iron at 20th level).</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the sylvan trickster archetype: <Link to="/talent/major_magic">major magic</Link>, <Link to="/talent/minor_magic">minor magic</Link> (<em>Spellcasting Talents</em> group); <Link to="/talent/camouflage">camouflage</Link>, <Link to="/talent/charmer">charmer</Link>, <Link to="/talent/honeyed_words">honeyed words</Link>, <Link to="/talent/terrain_mastery">terrain mastery</Link> (<em>Deception Talents</em> group); <Link to="/talent/survivalist">survivalist</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the sylvan trickster archetype: <Link to="/talent/familiar">familiar</Link> (<em>Magical Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> (<em>Other Talents</em> group).</p>
</>};
const _thug = {title: "Thug", jsx: <><h2 id="arc-rogue-thug-thug">Thug</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 135</Link><br/>Some criminals steal with finesse, their victims only discovering the crime when the rogue is long gone and the coin already spent. A thug, on the other hand, cares nothing for finesse. Through both threat and violence, the thug gets what she wants by the promise of force, and has no problem making good on that promise as needed.</p>
<p><strong>Frightening (Ex):</strong> Whenever a thug successfully uses Intimidate to demoralize a creature, the duration of the shaken condition is increased by 1 round. In addition, if the target is shaken for 4 or more rounds, the thug can instead decide to make the target frightened for 1 round.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Brutal Beating (Ex):</strong> At 3rd level, whenever a thug deals sneak attack damage, she can choose to forgo 1d6 points of sneak attack damage to make the target sickened for a number of rounds equal to 1/2 her rogue level. This ability does not stack with itself - only the most recent duration applies.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the thug archetype: <Link to="/talent/offensive_defense">offensive defense</Link>, <Link to="/talent/powerful_sneak">powerful sneak</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/weapon_training">weapon training</Link> (<em>Combat Talents</em> group); <Link to="/talent/strong_impression">strong impression</Link> (<em>Other Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the thug archetype: <Link to="/talent/crippling_strike">crippling strike</Link>, <Link to="/talent/deadly_sneak">deadly sneak</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/knock_out_blow">knock-out blow</Link> (<em>Combat Talents</em> group).</p>
</>};
const _tidal_trickster = {title: "Tidal Trickster", jsx: <><h2 id="arc-rogue-tidal_trickster-tidal-trickster">Tidal Trickster</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 55</Link><br/>Tidal tricksters roam the seas, using their skillful mastery of the currents to move across aquatic battlefields and throw their enemies off-balance.</p>
<p><strong>Wisdom of the Waves (Ex):</strong> A tidal trickster gains a swim speed equal to her unmodified base land speed (or increases her swim speed by 10 feet, if she has a racial swim speed). Instead of the +8 bonus granted by a swim speed, she gains a racial bonus on Swim checks equal to 4 + half her rogue level (if she has a racial swim speed, she uses the better bonus). She gains a bonus on Bluff checks equal to half her rogue level. At 3rd level, she gains a +1 bonus on Will saves whenever she is underwater; this bonus increases by 1 at 6th level and every 3 levels thereafter.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong> and <strong className="hl">trap sense</strong>.</p>
<p><strong>Liquid Disruption (Ex):</strong> At 4th level, a tidal trickster can use her knowledge of the cohesion of liquids to disrupt certain foes. She can deal sneak attack damage to oozes and creatures with the water subtype that are normally immune to <Link to="/misc/precision_damage">precision damage</Link> (such as <Link to="/monster/water_elemental">water elementals</Link>), and she ignores a <Link to="/class/kineticist">hydrokineticist's</Link> chance to negate precision damage from elemental overflow.</p>
<p>This ability alters <strong className="hl">sneak attack</strong> and replaces <strong className="hl">uncanny dodge</strong> and the 4th-level <strong className="hl">rogue talent</strong>.</p>
<p><strong>Tidal Distortion (Ex):</strong> At 8th level, while making a full attack underwater, a tidal trickster can give up one attack to create a tidal distortion. When she creates a tidal distortion, the tidal trickster moves up to 10 feet. If any part of her movement includes a square adjacent to one or more foes, she can choose one of those foes and attempt a Bluff check with a DC of 11 + either the enemy's Sense Motive or Swim modifier, whichever is higher. Her Bluff check is subject to any penalties the attack roll she sacrificed would have taken, and if she trades an iterative attack gained from having a high base attack bonus, she also takes a penalty based on that attack's lower base attack bonus (a -5 penalty for the second iterative attack, a -10 penalty for the third iterative attack, and a -15 penalty for the fourth iterative attack, if she manages to gain one). If she succeeds at the Bluff check, the movement doesn't provoke an attack of opportunity from that foe and the foe becomes <Link to="/rule/underwater_combat">off-balance</Link> until its next turn. A tidal trickster can give up any number of her attacks in a given full attack to create tidal distortions, but she can't give up two consecutive attacks.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong> and the 8th-level <strong className="hl">rogue talent</strong>.</p>
</>};
const _toxic_talon = {title: "Toxic Talon", jsx: <><h2 id="arc-rogue-toxic_talon-toxic-talon">Toxic Talon</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 75</Link><br/>Twilight Talons might pursue many tasks, from relatively passive information gathering to staging massive coups meant to depose tyrants. A toxic talon, however, is trained and deployed for one very specific purpose: to defeat foes with unusual and potent poisons. After adopting a profession to serve as a cover for his activities, a toxic talon spends resources and time combining easy-to-obtain materials into dangerous toxins to aid in the defense of Andoran. A toxic talon can use rare, complex, slow-release poisons to make a death look like it happened naturally, but sometimes the toxic talon will use specific poisons to cast suspicion on other organizations, stirring internal conflict that other Twilight Talons can use to their advantage.</p>
<p>The use of poisons in the defense of a good nation is controversial, and other branches of the <Link to="/rule/eagle_knights">Eagle Knights</Link> generally disavow the existence of toxic talons among their organization. Many influential leaders among the Eagle Knights, particularly in the Steel Falcons, have pushed to have the practices of the toxic talons banned from use, but these efforts have only pushed the toxic talons into further obscurity. Their role is particularly protected by the Twilight Talons, who sometimes go as far as to outright lie to others in the Eagle Knights about the operations of a toxic talon. At other times, a toxic talon may choose to martyr his freedom by publicly accepting blame for a mission that has had unfortunate public repercussions. In such a case, the toxic talon is not abandoned by his kin - instead, he is placed on a fair and public trial whose purpose is as much to appease the masses as it is to determine whether any moral lines were crossed. In cases where such a toxic talon is found guilty, he is generally sentenced to hard labor or prison (in which case he often continues to run missions inside of prisons or other fortifications for the Eagle Knights as best suits his talents) or to exile (in which case his role in serving Andoran shifts to one of clandestine missions in other nations). A toxic talon who martyrs his freedom in this way and is then captured again understands that it's unlikely he'll be afforded the same level of support from the Eagle Knights, and that the organization may well disavow any official knowledge of his actions. To a toxic talon, this is all merely a deeper, more significant level of service to the well-being of the nation of Andoran. By serving as a sort of sineater for the rest of the Twilight Talons (and at times, for the other branches of the Eagle Knights), such selfless characters can ensure that the organization survives scandal and public outcry to carry on their good work. In such cases, while public recognition for their deeds may never manifest, their brothers and sisters never forget the toxic talon's sacrifice.</p>
<p><strong>Forceful Breath (Ex):</strong> A toxic talon is proficient with <Link to="/eq-weapon/blowgun">blowguns</Link> instead of hand crossbows. He can use a blowgun without penalty while prone.</p>
<p>This alters the rogue's <strong className="hl">weapon proficiencies</strong>.</p>
<p><strong>Poison Adept (Ex):</strong> A toxic talon is trained in the use of poison and cannot accidentally poison himself when applying poison to a projectile weapon. He can apply poison to a projectile as a move action. This counts as the <Link to="/ability/poison_use">poison use</Link> ability for the purposes of qualifying for feats, prestige classes, and other options.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Toxin Resistance (Ex):</strong> A toxic talon's constant exposure to varied poisons grants him increasing resistance to them. At 3rd level, a toxic talon gains a +1 bonus on saving throws against diseases and poisons, and he gains a +1 bonus on Heal checks to treat diseases and poisons. He also gains a +1 bonus on caster level checks (including when he activates a magic item) to treat or remove poisons and diseases, such as when using <Link to="/spell/remove_disease">remove disease</Link> or <Link to="/spell/neutralize_poison">neutralize poison</Link>. Finally, he gains a +1 bonus on Perception checks to identify traps that utilize diseases or poisons. These bonuses increase to +2 at 6th level, to +3 at 9th level, to +4 at 12th level, to +5 at 15th level, and to +6 at 18th level.</p>
<p>This replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Catalyst (Su):</strong> At 4th level, a toxic talon can use secret alchemical techniques to enhance a poison as he applies it to a weapon, increasing the save DC of the poison by 1 (this bonus increases to +2 at 12th level). This increase to the save DC lasts for 1 minute or until the poison is used up, whichever comes first. A toxic talon can use catalyst once per hour.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Split Toxin (Su):</strong> At 8th level, when a toxic talon uses catalyst to enhance poison as he applies it, he can envenom two ranged weapons or units of ammunition simultaneously with the same dose.</p>
<p>This ability replaces the rogue's <strong className="hl">improved uncanny dodge</strong>.</p>
</>};
const _trapsmith = {title: "Trapsmith", jsx: <><h2 id="arc-rogue-trapsmith-trapsmith">Trapsmith</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 135</Link><br/>Some rogues are not content with just disabling traps - they love to build them, finding a captivating beauty in the turning of gears and the slither of ropes over pulleys. The trapsmith may have started out putting together traps in order to better understand how to disable them, but for most, it's long since gone beyond that - they now relish the challenge of creating the perfect combat machine.</p>
<p><strong>Careful Disarm (Ex):</strong> At 4th level, whenever a trapsmith attempts to disarm a trap using Disable Device, she does not spring the trap unless she fails by 10 or more. If she does set off a trap she was attempting to disarm, she adds double her trap sense bonus to avoid the trap.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Trap Master (Ex):</strong> At 8th level, whenever a trapsmith disarms a trap using Disable Device, she can bypass it even if her check did not exceed the DC by 10 or more. If it is a magic trap that allows specific creatures to pass it without danger, she can modify which creatures it allows to pass, adding her allies and restricting enemies if she desires.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the trapsmith archetype: <Link to="/talent/befuddling_strike">befuddling strike</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link> (<em>Trap Talents</em> group); <Link to="/talent/quick_disable">quick disable</Link> (<em>Disable Device Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the trapsmith archetype: <Link to="/talent/another_day">another day</Link> (<em>Combat Talents</em> group); <Link to="/talent/frugal_trapsmith">frugal trapsmith</Link>, <Link to="/talent/skill_mastery">skill mastery</Link> (<em>Other Talents</em> group).</p>
</>};
const _underground_chemist = {title: "Underground Chemist", jsx: <><h2 id="arc-rogue-underground_chemist-underground-chemist">Underground Chemist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 109</Link><br/>Underground chemists are part of the rotting, fetid underbelly of the alchemical world. While underground chemists can't hold a candle to dedicated alchemists, they're tricky and dangerous with alchemical substances and potions.</p>
<p><strong>Chemical Weapons (Ex):</strong> At 2nd level, an underground chemist is able to retrieve an alchemical item as if drawing a weapon. She adds her Intelligence modifier to damage dealt with splash weapons, including any splash damage. She adds 1/2 her level to Craft (alchemy) checks.</p>
<p>This ability replaces <strong className="hl">evasion</strong>.</p>
<p><strong>Precise Splash Weapons (Ex):</strong> At 4th level, an underground chemist can deal sneak attack damage with splash weapons. The attack must be her first attack that round, qualify for dealing sneak attack damage (such as against a flat-footed target), and be directed at a creature rather than a square.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 4th level.</p>
<p><strong>Discovery (Su):</strong> At 10th level, an underground chemist can select one of the following <Link to="/ability/discoveries">alchemist discoveries</Link> in place of a rogue talent: <Link to="/discovery/concentrate_poison">concentrate poison</Link>, <Link to="/discovery/dilution">dilution</Link>, <Link to="/discovery/enhance_potion">enhance potion</Link>, <Link to="/discovery/extend_potion">extend potion</Link>, <Link to="/discovery/mummification">mummification</Link>, <Link to="/discovery/nauseating_flesh">nauseating flesh</Link>, <Link to="/discovery/poison_conversion">poison conversion</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>, or <Link to="/discovery/sticky_poison">sticky poison</Link>. She uses her rogue level as her alchemist level for determining the effects of her discoveries and whether she is able to select one.</p>
<p>This ability alters <strong className="hl">advanced talents</strong>.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the underground chemist archetype: <Link to="/talent/snipers_eye">sniper's eye</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/lasting_poison">lasting poison</Link>, <Link to="/talent/swift_poison">swift poison</Link> (<em>Poison Talents</em> group); <Link to="/talent/black_market_connections">black market connections</Link> (<em>Other Magic-Related Talents</em> group); <Link to="/talent/fast_fingers">fast fingers</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the underground chemist archetype: <Link to="/talent/deadly_cocktail">deadly cocktail</Link> (<em>Combat Talents</em> group); <Link to="/talent/thoughtful_reexamining">thoughtful reexamining</Link> (<em>Other Talents</em> group).</p>
</>};
const _vexing_dodger = {title: "Vexing Dodger", jsx: <><h2 id="arc-rogue-vexing_dodger-vexing-dodger">Vexing Dodger</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 21</Link><br/>Vexing dodgers take advantage of their smaller size to outmaneuver larger foes such as giants. Vexing dodgers have the following class features.</p>
<p><strong>Limb-Climber (Ex):</strong> When adjacent to or in the space of a corporeal creature at least one size category larger than herself, a vexing dodger can climb that creature's body with a successful Climb check against a DC equal to the target creature's CMD. Although the vexing dodger is holding on to the creature, this action isn't a grapple; it doesn't provoke attacks of opportunity from the creature, and neither the vexing dodger nor the creature she climbs gains the grappled condition. While the vexing dodger is on the climbed creature, the creature takes a penalty on attack rolls against the vexing dodger equal to the number of sneak attack dice the dodger possesses.</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Improved Dirty Trick (Ex):</strong> At 2nd level, a vexing dodger gains <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link> as a bonus feat, even if she doesn't meet the prerequisites.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 2nd level.</p>
<p><strong>Underfoot Agility (Ex):</strong> At 3rd level, a vexing dodger gains a +1 morale bonus on Acrobatics, Climb, and Escape Artist attempts against creatures at least one size category larger than herself. This bonus increases by 1 for every 3 levels beyond 3rd.</p>
<p>This ability replaces <strong className="hl">trap sense</strong>.</p>
<p><strong>Underfoot Trickster (Ex):</strong> At 4th level, a vexing dodger can move through the space of a creature two size categories larger than herself without needing to attempt an Acrobatics check. She would still need to succeed at Acrobatics checks to avoid attacks of opportunity provoked by leaving a threatened space; this ability covers only the ability to move. Additionally, whenever the vexing dodger hits a larger foe with a melee sneak attack, she can choose to forgo the sneak attack bonus damage and instead attempt make a dirty trick combat maneuver as a swift action.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Distracting Climber (Ex):</strong> At 8th level, when a vexing dodger attempts a dirty trick maneuver against a creature she's climbing, she gets a bonus on the combat maneuver check equal to the number of sneak attack dice she has. If she chooses to sicken the target with her dirty trick and succeeds at her combat maneuver check, the target must succeed at a Fortitude saving throw (DC = 10 + 1/2 the vexing dodger's level + her Intelligence modifier) or be nauseated for 1 round.</p>
<p>This ability replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Rogue Talents (Ex):</strong> A vexing dodger can choose uncanny dodge as a rogue talent starting at 4th level, and she can choose improved uncanny dodge as an advanced rogue talent. The following talents complement the vexing dodger archetype: <Link to="/talent/befuddling_strike">befuddling strike</Link>, <Link to="/talent/confounding_blades">confounding blades</Link>, <Link to="/talent/peerless_maneuver">peerless maneuver</Link>, <Link to="/talent/positioning_attack">positioning attack</Link>, <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/wall_scramble">wall scramble</Link>.</p>
</>};
const _waylayer = {title: "Waylayer", jsx: <><h2 id="arc-rogue-waylayer-waylayer">Waylayer</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 13</Link><br/>A clever rogue knows the easiest battle to win is the one that's over before your foe knows it has begun. Some rogues thus specialize in setting up ambushes to catch their opponents off guard.</p>
<p><strong>Staggering Reflexes (Ex):</strong> At 1st level, a waylayer gains a bonus on initiative checks equal to 1/2 her level (minimum +1) if she acts in a surprise round, and is never flat-footed at the start of combat (even if she fails to act during the surprise round).</p>
<p>This ability replaces <strong className="hl">trapfinding</strong>.</p>
<p><strong>Ambuscading Sneak Attack (Ex):</strong> At 4th level, a waylayer becomes especially skilled at attacking unaware foes. When she makes a sneak attack during a surprise round, she uses d8s to roll sneak attack damage instead of d6s.</p>
<p>This ability replaces <strong className="hl">uncanny dodge</strong>.</p>
<p><strong>Danger Awareness (Ex):</strong> At 8th level, a waylayer is never considered an unaware combatant and is always able to act in the surprise round.</p>
<p>This replaces <strong className="hl">improved uncanny dodge</strong>.</p>
<p><strong>Exceptional Reflexes (Ex):</strong> At 12th level, a waylayer can move up to her speed before taking her action in a surprise round.</p>
<p>This replaces the <strong className="hl">rogue talent</strong> gained at 12th level.</p>
<p><strong>Masterful Reflexes (Ex):</strong> At 20th level, a waylayer's initiative roll is automatically a natural 20.</p>
<p>This ability replaces the <strong className="hl">rogue talent</strong> gained at 20th level.</p>
<p><strong>Rogue Talents:</strong> The following <Link to="/ability/rogue_talents">rogue talents</Link> complement the waylayer archetype: <Link to="/talent/slow_reactions">slow reactions</Link>, <Link to="/talent/underhanded">underhanded</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/surprise_attack">surprise attack</Link> (<em>Other Sneak Attack Talents</em> group); <Link to="/talent/cunning_trigger">cunning trigger</Link>, <Link to="/talent/quick_trapsmith">quick trapsmith</Link> (<em>Trap Talents</em> group); <Link to="/talent/camouflage">camouflage</Link> (<em>Deception Talents</em> group).</p>
<p><strong>Advanced Talents:</strong> The following <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link> complement the waylayer archetype: <Link to="/talent/entanglement_of_blades">entanglement of blades</Link> (<em>Primary Sneak Attack Talents</em> group); <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/weapon_snatcher">weapon snatcher</Link> (<em>Combat Talents</em> group); <Link to="/talent/hide_in_plain_sight">hide in plain sight</Link> (<em>Other Talents</em> group).</p>
</>};
export default {acrobat:_acrobat,bandit:_bandit,bekyar_kidnapper:_bekyar_kidnapper,bellflower_irrigator:_bellflower_irrigator,burglar:_burglar,carnivalist:_carnivalist,cat_burglar:_cat_burglar,chameleon:_chameleon,charlatan:_charlatan,consigliere:_consigliere,construct_saboteur:_construct_saboteur,counterfeit_mage:_counterfeit_mage,cutpurse:_cutpurse,dark_lurker:_dark_lurker,deadly_courtesan:_deadly_courtesan,desert_raider:_desert_raider,discretion_specialist:_discretion_specialist,dreamthief:_dreamthief,driver:_driver,earthshadow:_earthshadow,eldritch_raider:_eldritch_raider,eldritch_scoundrel:_eldritch_scoundrel,escapologist:_escapologist,false_medium:_false_medium,fey_prankster:_fey_prankster,filcher:_filcher,galtan_agitator:_galtan_agitator,guerrilla:_guerrilla,guild_agent:_guild_agent,gun_smuggler:_gun_smuggler,heister:_heister,investigator:_investigator,kintargo_rebel:_kintargo_rebel,kitsune_trickster:_kitsune_trickster,knife_master:_knife_master,makeshift_scrapper:_makeshift_scrapper,master_of_disguise:_master_of_disguise,nameless_shadow:_nameless_shadow,needler:_needler,numerian_scavenger:_numerian_scavenger,okeno_liberator:_okeno_liberator,phantom_thief:_phantom_thief,pirate:_pirate,planar_sneak:_planar_sneak,poisoner:_poisoner,rake:_rake,relic_raider:_relic_raider,river_rat:_river_rat,roof_runner:_roof_runner,rotdrinker:_rotdrinker,sanctified_rogue:_sanctified_rogue,sapper:_sapper,scout:_scout,scroll_scoundrel:_scroll_scoundrel,sczarni_swindler:_sczarni_swindler,seeker_of_the_lost:_seeker_of_the_lost,shadow_scion:_shadow_scion,shadow_walker:_shadow_walker,sharper:_sharper,skulking_slayer:_skulking_slayer,sly_saboteur:_sly_saboteur,smuggler:_smuggler,snare_setter:_snare_setter,sniper:_sniper,snoop:_snoop,spy:_spy,survivalist:_survivalist,swamp_poisoner:_swamp_poisoner,swashbuckler:_swashbuckler,swordmaster:_swordmaster,sylvan_trickster:_sylvan_trickster,thug:_thug,tidal_trickster:_tidal_trickster,toxic_talon:_toxic_talon,trapsmith:_trapsmith,underground_chemist:_underground_chemist,vexing_dodger:_vexing_dodger,waylayer:_waylayer}