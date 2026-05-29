import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _battle_dancer = {title: "Battle Dancer", jsx: <><h2 id="arc-brawler-battle_dancer-battle-dancer">Battle Dancer</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 4</Link><br/>Originating among the Mwangi tribes of Sargava, battle dancers practice a martial art that emphasizes constant motion, hiding their training from colonial oppressors by presenting it as an acrobatic dance. Sargava's alliance with the Shackles has led to a proliferation of the art there, and battle dancers are often found among Mwangi-descended pirates.</p>
<Ability icon={["skills"]} id="arc-brawler-battle_dancer-undefined">
<Pair id="arc-brawler-battle_dancer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perform">Perform</Link> (CHA)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-brawler-battle_dancer-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-brawler-battle_dancer-armor-proficiency">Armor Proficiency</Pair>
<Pair hl title="Alters">The brawler's armor proficiencies</Pair>
<Pair title="Info">A battle dancer isn't proficient with shields.</Pair>
</Ability>
<Ability id="arc-brawler-battle_dancer-dancers-cunning-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-battle_dancer-dancers-cunning-ex">Dancer's Cunning (Ex)</Pair>
<Pair hl title="Replaces">Brawler's cunning</Pair>
<Pair title="Ability">A battle dancer can treat her Charisma score as her Intelligence score for the purpose of meeting the prerequisites of combat feats. In addition, she can attempt a Perform (dance) check instead of a Bluff check to feint in combat, and her unarmed strikes are considered to have the <Link to="/misc/performance">performance</Link> weapon special quality.</Pair>
</Ability>
<Ability id="arc-brawler-battle_dancer-rolling-flurry-ex" icon={["info"]}>
<Pair single id="arc-brawler-battle_dancer-rolling-flurry-ex">Rolling Flurry (Ex)</Pair>
<Pair hl title="Alters">Brawler's flurry</Pair>
<Pair title="Ability">When a battle dancer uses her brawler's flurry, she must move 5 feet before each melee attack or combat maneuver. If she is unable to move 5 feet, she can't attempt any further attacks or combat maneuvers. She can't exceed her maximum speed. This movement does not provoke attacks of opportunity if the brawler would be able to take a 5-foot step normally; if she would be unable to (for instance, if she were in <Link to="/rule/difficult_terrain">difficult terrain</Link>), the movement provokes attacks of opportunity as normal unless she succeeds at the appropriate Acrobatics checks. While using this ability, she can still take her normal 5-foot step before or after making her attacks.</Pair>
</Ability>
<Ability id="arc-brawler-battle_dancer-dancing-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-battle_dancer-dancing-dodge-ex">Dancing Dodge (Ex)</Pair>
<Pair hl title="Replaces">AC bonus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day per two brawler levels<ByLevelPop levels={[[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">When an opponent attempts a melee attack against a battle dancer, the battle dancer can expend one use of an attack of opportunity to move 5 feet, granting the battle dancer a dodge bonus to AC equal to her Charisma modifier (minimum 0) against the triggering attack. The attack is still resolved normally, even if the battle dancer's movement takes her out of the triggering attack's reach. This movement is not a 5-foot step and provokes attacks of opportunity from creatures other than the one that triggered this ability, though the battle dancer can attempt an Acrobatics check to avoid provoking the attacks.</Pair>
<Pair title="Special">She can use this ability only while wearing light armor or no armor, and while carrying no heavier than a light load.</Pair>
</Ability>
<Ability id="arc-brawler-battle_dancer-sparring-partners-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-battle_dancer-sparring-partners-ex">Sparring Partners (Ex)</Pair>
<Pair hl title="Replaces">Knockout</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day + 1 per six brawler levels beyond 4th<ByLevelPop levels={[[4,1],[10,2],[16,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When a battle dancer gains a <Link to="/rule/flanking">flanking</Link> bonus on an attack while using her <em>rolling flurry</em> ability, the ally providing the flank gains a flanking bonus on its next attack against that opponent, even if the battle dancer moves out of a flanking position. If either the opponent or the ally moves more than 5 feet before the ally's attack, the flanking bonus is lost. This ability works only if the ally is on the opposite side of an opponent during the battle dancer's attack, not if a flanking bonus is gained in some other way, such as through <Link to="/feat/gang_up">Gang Up</Link>.</Pair>
</Ability>
</>};
const _bouncer = {title: "Bouncer", jsx: <><h2 id="arc-brawler-bouncer-bouncer">Bouncer</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_taverns">Inner Sea Taverns pg. 58</Link><br/>Some taverns employ bouncers to keep out undesirables or for when their customers get too rowdy.</p>
<blockquote>
<p><strong className="hl">Note:</strong> This archetype extensively uses the optional <Link to="/rule/bar_fights">Bar Fights</Link> rules.</p>
</blockquote>
<Ability id="arc-brawler-bouncer-crowd-control-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-bouncer-crowd-control-ex">Crowd Control (Ex)</Pair>
<Pair title="Passive Ability">When in a bar fight, a bouncer has her tenacity reduced by the crowd at the end of a round by the minimum possible amount. In addition, when she takes the mix it up action, she reduces the tenacity of the crowd by an additional amount equal to her brawler level.</Pair>
</Ability>
<Ability id="arc-brawler-bouncer-lesser-flexibility-ex" icon={["broken-shield"]}>
<Pair single id="arc-brawler-bouncer-lesser-flexibility-ex">Lesser Flexibility (Ex)</Pair>
<Pair hl title="Alters">Martial flexibility</Pair>
<Pair title="Ability">A bouncer can use her martial flexibility only a number of times per day equal to 2 + <Link to="/misc/half">half</Link> her brawler level (minimum 3 times per day).</Pair>
</Ability>
<Ability id="arc-brawler-bouncer-drunk-handler-ex" icon={["upgrade","armor-downgrade"]}>
<Pair single id="arc-brawler-bouncer-drunk-handler-ex">Drunk Handler (Ex)</Pair>
<Pair hl title="Replaces">The bonus feat gained at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A bouncer gains a +2 circumstance bonus on Intimidate and Sense Motive checks against foes that are tipsy or worse. In addition, when in a bar fight, she ignores damage reduction against nonlethal damage her targets have from being drunk or worse.</Pair>
</Ability>
<Ability id="arc-brawler-bouncer-drunk-knockout-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-bouncer-drunk-knockout-ex">Drunk Knockout (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A bouncer can use one use of her <em>knockout</em> ability to attempt a similar maneuver in a bar fight against a major participant who is drunk or worse. She must declare her intent before attempting her brawling check, and if she hits and reduces the target's tenacity, that target must succeed at a Fortitude saving throw (DC = 10 + half the bouncer's brawler level + the higher of the bouncer's Strength or Dexterity modifiers) or immediately be reduced to 0 tenacity.</Pair>
</Ability>
<Ability id="arc-brawler-bouncer-bar-fight-mastery-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-bouncer-bar-fight-mastery-ex">Bar Fight Mastery (Ex)</Pair>
<Pair hl title="Alters">Close weapon mastery</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">In addition to the benefits of <em>close weapon mastery,</em> when a bouncer confirms a critical hit against a major participant in a bar fight, she also reduces the tenacity of the crowd by her normal brawling damage amount (this amount isn't doubled).</Pair>
</Ability>
</>};
const _constructed_pugilist = {title: "Constructed Pugilist", jsx: <><h2 id="arc-brawler-constructed_pugilist-constructed-pugilist">Constructed Pugilist</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 8</Link><br/>Mutants whose mutations make using standard weapons or other gear difficult sometimes attach mechanical prostheses to their existing limbs. Many develop combat skills that use their prostheses so they always have a weapon at hand. Over time, these brawlers customize their mechanical limbs, adding additional weaponry and other mechanisms.</p>
<Ability icon={["skills"]} id="arc-brawler-constructed_pugilist-undefined">
<Pair id="arc-brawler-constructed_pugilist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/craft">Craft (weapons)</Link> (INT)</Pair></Ability>
<Ability id="arc-brawler-constructed_pugilist-constructed-limb-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-constructed_pugilist-constructed-limb-ex">Constructed Limb (Ex)</Pair>
<Pair title="Ability"><p>A constructed pugilist begins play with a special prosthetic limb built for fighting and typically made of iron, steel, stone, or wood, with the corresponding hardness and hit points (<Link to="/rule/breaking_things">see Table 7-13</Link>). She treats attacks with this limb as unarmed strikes that gain all the benefits of the brawler's unarmed strike class feature. She treats the limb as a light weapon and is proficient with it. Removing or reattaching the constructed limb takes 10 minutes.</p>
<p>The constructed pugilist can improve her constructed limb as if it were a normal melee weapon. For the purpose of rebuilding the limb as a masterwork weapon, rebuilding the limb out of a special material, or adding certain magical special abilities to it, the limb counts as a one-handed melee weapon that costs 60 gp and weighs 6 pounds - though it is specially fitted to the constructed pugilist and can't be resold or used by anyone else. A constructed limb can benefit from either its own enhancement bonus and special abilities or those granted by an <Link to="/magic-wondrous/amulet_of_mighty_fists">amulet of mighty fists</Link>, but if it would benefit from both simultaneously, it benefits only from the source with the higher effective enhancement bonus (the limb benefits from its own abilities in the case of a tie).</p>
</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-limb-modification" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-constructed_pugilist-limb-modification">Limb Modification</Pair>
<Pair hl title="Replaces">Martial flexibility</Pair>
<Pair title="Ability">A constructed pugilist chooses one of the following limb modifications at 1st level and another at 6th, 10th, 12th, and 20th levels. These modifications do not require the constructed pugilist to rebuild her constructed limb.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-flex-limb" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-brawler-constructed_pugilist-flex-limb">Flex Limb</Pair>
<Pair title="Info">The limb is divided into jointed segments held in place with rigid rods.</Pair>
<Pair title="Standard Action">The constructed pugilist can release the rods and turn her limb into a whip-like appendage. In this mode, the prosthesis can be used to make <Link to="/rule/trip">trip</Link> attempts, and it grants a +2 bonus on <Link to="/rule/disarm">disarm</Link> attempts made using it. The constructed pugilist doesn't run the risk of dropping her limb if she fails. Returning the limb to its rigid form takes a <strong className="hl">standard action</strong>.</Pair>
<Pair title="Special">As a <strong className="hl">standard action</strong>, a constructed pugilist with both <em>flex limb</em> and <em>limb extender</em> can activate or deactivate one of those limb modifications or both simultaneously; when the constructed pugilist has both <em>flex limb</em> and <em>limb extender</em> activated, she gains the benefits of reach with the flex limb abilities.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-grapnel-arm" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-brawler-constructed_pugilist-grapnel-arm">Grapnel Arm</Pair>
<Pair title="Ability">The constructed pugilist can fire a grappling hook built into her prosthesis. The grappling hook is attached to a 40-foot-long fine chain affixed to the limb. The constructed pugilist can attack with the grappling hook as a <strong className="hl">standard action</strong>, making a ranged touch attack against the target. The grappling hook can't be used as part of a <Link to="/rule/full_attack">full attack</Link>. On a successful hit, the grappling hook deals no damage, but it functions as though it had the <Link to="/misc/grapple">grapple</Link> weapon special feature, except it requires only a hit (not a critical hit) and the grapple ends if the constructed pugilist moves more than 40 feet away from the grappled creature. The constructed limb can't be used to make melee attacks until the grappling hook has been reloaded (a <strong className="hl">standard action</strong>).</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-limb-extender" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-brawler-constructed_pugilist-limb-extender">Limb Extender</Pair>
<Pair title="Standard Action">The constructed pugilist can activate an extender, giving her limb the <Link to="/misc/reach">reach</Link> weapon special feature. Returning the limb to its normal length is also a standard action.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-shielding-limb" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-constructed_pugilist-shielding-limb">Shielding Limb</Pair>
<Pair title="Passive Ability">The constructed pugilist learns to block blows with her mechanical limb. She gains a +2 shield bonus to AC, though she loses this bonus anytime she loses her Dexterity bonus to AC.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-tight-grip" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-brawler-constructed_pugilist-tight-grip">Tight Grip</Pair>
<Pair title="Passive Ability">Special tensors allow the constructed pugilist to lock her grip in place. When using her constructed limb, the constructed pugilist gains a +1 bonus on Climb checks and combat maneuver checks to disarm and grapple, as well as to her CMD against attempts to disarm items held in the limb.</Pair>
<Pair title="Special">This modification can be chosen only if the limb includes a hand or other gripping appendage.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-vicious-blades" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-brawler-constructed_pugilist-vicious-blades">Vicious Blades</Pair>
<Pair title="Passive Ability">Razor-sharp blades on the surface of the limb cause it to deal bludgeoning and slashing damage and increase its critical threat range to 19-20.</Pair>
<Pair title="Special">A constructed pugilist who has the <em>vicious spikes</em> limb modification can't select this modification.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-vicious-spikes" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-brawler-constructed_pugilist-vicious-spikes">Vicious Spikes</Pair>
<Pair title="Passive Ability">Long spikes protrude from the limb, causing it to deal bludgeoning and piercing damage and increasing its critical multiplier to &times;3.</Pair>
<Pair title="Special">A constructed pugilist who has the <em>vicious blades</em> limb modification can't select this modification.</Pair>
</Ability>
<Ability id="arc-brawler-constructed_pugilist-bonus-item-creation-feats" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-constructed_pugilist-bonus-item-creation-feats">Bonus Item Creation Feats</Pair>
<Pair hl title="Alters">Bonus combat feats</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Info">A constructed pugilist adds <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>, <Link to="/feat/master_craftsman">Master Craftsman</Link> (Craft [weapons]), and <Link to="/feat/skill_focus">Skill Focus</Link> (Craft [weapons]) to the list of bonus feats she can choose (instead of just combat feats).</Pair>
</Ability>
</>};
const _exemplar = {title: "Exemplar", jsx: <><h2 id="arc-brawler-exemplar-exemplar">Exemplar</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 86</Link><br/>A versatile soldier who inspires her companions with her fighting prowess, an exemplar is at home on the front lines of battles anywhere.</p>
<Ability id="arc-brawler-exemplar-call-to-arms-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-exemplar-call-to-arms-ex">Call to Arms (Ex)</Pair>
<Pair hl title="Replaces">Unarmed strike, close weapon mastery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Move-Equivalent Action">An exemplar can expend a use of martial flexibility to rouse her allies into action. All allies within 30 feet are no longer <Link to="/rule/flat_footed">flat-footed</Link>, even if they are surprised.</Pair>
<Pair title="At 6th Level">The exemplar can use it as a <strong className="hl">swift action</strong> instead.</Pair>
<Pair title="At 10th Level">She can use it as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 12th Level">She can use it as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="arc-brawler-exemplar-inspiring-prowess-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-brawler-exemplar-inspiring-prowess-ex">Inspiring Prowess (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training, AC bonus</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">2 + brawler level + Charisma modifier rounds/day</Pair>
<Pair title="Ability">An exemplar gains the ability to use certain <Link to="/ability/bardic_performances">bardic performances</Link>. The exemplar's effective bard level for this ability is equal to her brawler level - 2.</Pair>
<Pair title="At 3rd Level">The exemplar can use <Link to="/performance/inspire_courage">inspire courage</Link>.</Pair>
<Pair title="At 11th Level">The exemplar can use <Link to="/performance/inspire_greatness">inspire greatness</Link>.</Pair>
<Pair title="At 15th Level">The exemplar can use <Link to="/performance/inspire_heroics">inspire heroics</Link>.</Pair>
<Pair title="Special">Instead of the Perform skill, she activates this ability with impressive flourishes and displays of martial talent (this uses visual components). This ability otherwise functions as bardic performance; feats and other effects that affect bardic performance (such as the <Link to="/feat/extra_performance">Extra Performance</Link> feat) apply to it.</Pair>
</Ability>
<Ability id="arc-brawler-exemplar-field-instruction-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-brawler-exemplar-field-instruction-ex">Field Instruction (Ex)</Pair>
<Pair hl title="Replaces">Brawler's strike</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">Once a day</Pair>
<Pair title="Standard Action">An exemplar can grant a <Link to="/main/teamwork_feat">teamwork feat</Link> to all allies within 30 feet who can see and hear her. This teamwork feat must be one the exemplar knows or has gained with the martial flexibility ability. Allies retain the use of this teamwork feat for 3 rounds + 1 round for every 2 brawler levels. If the granted teamwork feat is one gained from martial flexibility, this duration ends immediately if the exemplar loses access to that feat. Allies don't need to meet the prerequisites of this teamwork feat. This ability otherwise counts as the cavalier's tactician class feature; feats and other effects which affect tactician (such as <Link to="/feat/practiced_tactician">Practiced Tactician</Link>) apply to it.</Pair>
<Pair title="At 9th Level">She can use this twice a day.</Pair>
<Pair title="At 12th Level">She can use this three times a day.</Pair>
<Pair title="At 17th Level">She can use this four times a day.</Pair>
</Ability>
</>};
const _feral_striker = {title: "Feral Striker", jsx: <><h2 id="arc-brawler-feral_striker-feral-striker">Feral Striker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 42</Link><br/>A feral striker taps into a reservoir of druidic power hidden inside herself, allowing her to take animalistic characteristics.</p>
<Ability id="arc-brawler-feral_striker-feral-aspect-su" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-feral_striker-feral-aspect-su">Feral Aspect (Su)</Pair>
<Pair hl title="Replaces">Martial flexibility</Pair>
<Pair title="Usage">3 minutes/day + 1 minute per brawler level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="At 1st Level">This functions as the <Link to="/ability/aspects">shifter aspect</Link> class feature of the shifter, except the feral striker can choose only from the <Link to="/aspect/bear">bear</Link>, <Link to="/aspect/bull">bull</Link>, <Link to="/aspect/falcon">falcon</Link>, <Link to="/aspect/snake">snake</Link>, <Link to="/aspect/stag">stag</Link>, <Link to="/aspect/tiger">tiger</Link>, and <Link to="/aspect/wolf">wolf</Link> aspects. She can shift into an aspect as a <strong className="hl">swift action</strong>. On her turn, she may dismiss it as a <strong className="hl">free action</strong>. She has access to only the minor versions all these aspects.</Pair>
<Pair title="At 6th Level">The feral striker can take on two minor aspects simultaneously as a <strong className="hl">move action</strong>. Each aspect counts toward her total number of minutes (so if a feral striker who normally has 9 total minutes of aspects takes on two aspects simultaneously for 4 minutes, she still has 1 minute remaining). She can end one or both aspects as a <strong className="hl">free action</strong> on her turn.</Pair>
<Pair title="At 10th Level">The feral shifter adds her Constitution modifier to the total number of minutes per day in which she can use feral aspect.</Pair>
<Pair title="At 12th Level">The feral striker can take on three aspects simultaneously as a <strong className="hl">move action</strong> or one or two aspects as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 20th Level">The feral striker can take on as many aspects as she wishes at once as a <strong className="hl">swift action</strong>, and they count as only one aspect for the purpose of calculating duration.</Pair>
</Ability>
</>};
const _hinyasi = {title: "Hinyasi", jsx: <><h2 id="arc-brawler-hinyasi-hinyasi">Hinyasi</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 11</Link><br/>After Yamasa seceded from Lirgen, their elite combatants formed a military caste, called hinyasi, who protected Yamasa for centuries. Their martial traditions were centered on the use of farming tools and on other improvised weapons.</p>
<Ability id="arc-brawler-hinyasi-humble-beginnings-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-brawler-hinyasi-humble-beginnings-ex">Humble Beginnings (Ex)</Pair>
<Pair hl title="Alters">The brawler's armor proficiencies</Pair>
<Pair title="Choice">A hinyasi gains her choice of <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> or <Link to="/feat/throw_anything">Throw Anything</Link> as a bonus feat.</Pair>
<Pair title="Info">She is not proficient with shields.</Pair>
</Ability>
<Ability id="arc-brawler-hinyasi-improvisation-training-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-hinyasi-improvisation-training-ex">Improvisation Training (Ex)</Pair>
<Pair hl title="Replaces">The bonus combat feat gained at 2nd level</Pair>
<Pair title="Passive Ability">A hinyasi is skilled at fighting with <Link to="/misc/improvised_weapons">improvised weapons</Link>. She deals damage equal to her unarmed strike damage while fighting with an improvised weapon. A hinyasi treats improvised weapons as weapons from the close <Link to="/ability/weapon_groups">fighter weapon group</Link>.</Pair>
</Ability>
<Ability id="arc-brawler-hinyasi-improvised-maneuver-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-hinyasi-improvised-maneuver-ex" flavor="A hinyasi learns to confound and befuddle her opponents with improvised weapons.">Improvised Maneuver (Ex)</Pair>
<Pair hl title="Replaces">Knockout</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">She chooses one of the following combat maneuvers: bull rush, drag, disarm, sunder, reposition, or trip.</Pair>
<Pair title="Free Action">When she hits an opponent with an improvised weapon, the hinyasi can perform her chosen combat maneuver against the same target. She takes a -4 penalty on the combat maneuver check, and she can't attempt an improvised maneuver check more than once per round. This combat maneuver still provokes attacks of opportunity unless the hinyasi has a feat or ability that allows her to perform it without provoking attacks of opportunity.</Pair>
<Pair title="At 10th Level">She chooses a second combat maneuver that she can use with this ability, though she can still perform only one improvised maneuver per round.</Pair>
<Pair title="At 16th Level">She chooses a third, though she can still perform only one improvised maneuver per round.</Pair>
</Ability>
<Ability id="arc-brawler-hinyasi-improvisation-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-hinyasi-improvisation-mastery-ex">Improvisation Mastery (Ex)</Pair>
<Pair hl title="Replaces">Close weapon mastery</Pair>
<Pair title="Choice">A hinyasi picks one type of improvised weapon (light, one-handed, or two-handed) and gains a +2 bonus on attack and damage rolls with that type of weapon.</Pair>
</Ability>
</>};
const _living_avalanche = {title: "Living Avalanche", jsx: <><h2 id="arc-brawler-living_avalanche-living-avalanche">Living Avalanche</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 42</Link><br/>When a living avalanche is on the move, no one can stand in her way.</p>
<Ability id="arc-brawler-living_avalanche-earth-discipline-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-living_avalanche-earth-discipline-ex">Earth Discipline (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 2nd and 5th levels</Pair>
<Pair title="At 2nd Level">A living avalanche gains <Link to="/feat/improved_overrun">Improved Overrun</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
<Pair title="At 5th Level">She gains <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-brawler-living_avalanche-landslide-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-brawler-living_avalanche-landslide-ex">Landslide (Ex)</Pair>
<Pair hl title="Alters">Maneuver training</Pair>
<Pair title="At 3rd Level">A living avalanche must choose <Link to="/rule/overrun">overrun</Link> as her first combat maneuver for maneuver training.</Pair>
<Pair title="At 7th Level">She must choose <Link to="/rule/bull_rush">bull rush</Link> as her second combat maneuver for maneuver training. She doesn't gain training in any new combat maneuvers at later levels, but her bonuses on combat maneuver checks and to CMD for bull rush and overrun combat maneuvers increase as normal.</Pair>
<Pair title="At 11th Level">If she succeeds at an overrun combat maneuver as part of a <Link to="/rule/charge">charge</Link>, she automatically knocks her target <Link to="/rule/prone">prone</Link> (no matter the result of her check). In addition, if the living avalanche succeeds at a bull rush combat maneuver as part of a charge, she reduces the penalty combat maneuver checks to bull rush each creature beyond the first by 2.</Pair>
<Pair title="At 15th Level">The living avalanche can attempt bull rush and overrun combat maneuvers against creatures two sizes larger than herself, but only as part of a charge.</Pair>
<Pair title="At 19th Level">If the living avalanche succeeds at a bull rush combat maneuver as part of a charge, she reduces the penalty on combat maneuver checks to bull rush each creature beyond the first by an additional 2. When attempting an overrun combat maneuver as part of a charge, she also ignores any increase to a creature's CMD from having more than two legs.</Pair>
</Ability>
<Ability id="arc-brawler-living_avalanche-unyielding-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-living_avalanche-unyielding-ex">Unyielding (Ex)</Pair>
<Pair hl title="Replaces">The brawler's AC bonus</Pair>
<Pair title="At 4th Level">When a living avalanche wears light armor or no armor, she gains DR 1/adamantine.</Pair>
<Pair title="At 9th Level">This becomes DR 2/adamantine.</Pair>
<Pair title="At 13th Level">This becomes DR 3/adamantine.</Pair>
<Pair title="At 18th Level">This becomes DR 4/adamantine.</Pair>
</Ability>
<Ability id="arc-brawler-living_avalanche-avalanche-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-living_avalanche-avalanche-ex">Avalanche (Ex)</Pair>
<Pair hl title="Replaces">Awesome blow</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Full-Round Action">A living avalanche can attempt to overrun multiple creatures. The living avalanche moves up to twice her speed in a straight line and attempts an overrun combat maneuver against each creature in her path, as long as that creature is no more than two size categories larger than herself. Each creature she succeeds against is knocked prone and takes damage as if the living avalanche hit it with a close weapon she is wielding or an unarmed strike. If she fails her combat maneuver check against a creature, she stops her movement in the space directly in front of the creature.</Pair>
</Ability>
<Ability id="arc-brawler-living_avalanche-improved-avalanche-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-living_avalanche-improved-avalanche-ex">Improved Avalanche (Ex)</Pair>
<Pair hl title="Replaces">Improved awesome blow</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">If a living avalanche rolls a natural 20 on an overrun combat maneuver check as part of the avalanche ability, she can immediately attempt to confirm the critical hit by attempting another combat maneuver check with the same modifiers as the previous one; if the critical hit is confirmed, the attack deals double damage.</Pair>
</Ability>
</>};
const _mutagenic_mauler = {title: "Mutagenic Mauler", jsx: <><h2 id="arc-brawler-mutagenic_mauler-mutagenic-mauler">Mutagenic Mauler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 86</Link><br/>Not content with perfecting her body with natural methods, a mutagenic mauler resorts to alchemy to unlock the primal beast within.</p>
<Ability id="arc-brawler-mutagenic_mauler-mutagen-su" extraClasses="hasSubs" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-brawler-mutagenic_mauler-mutagen-su">Mutagen (Su)</Pair>
<Pair hl title="Replaces">Martial flexibility</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A mutagenic mauler discovers how to create a mutagen that she can imbibe in order to heighten her physical prowess, though at the cost of her personality. This functions as an <Link to="/class/alchemist">alchemist's</Link> mutagen and uses the brawler's class level as her alchemist level for this ability (alchemist levels stack with brawler levels for determining the effect of this ability).</Pair>
<Pair title="At 6th Level">A mutagenic mauler gains a +2 bonus on damage rolls when she attacks in melee while in her mutagenic form.</Pair>
<Pair title="At 10th Level">A mutagenic mauler learns one of the following alchemist discoveries: <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>.</Pair>
<Pair title="At 11th Level">The damage bonus becomes +3.</Pair>
<Pair title="At 12th Level">The mutagenic mauler learns the <Link to="/discovery/greater_mutagen">greater mutagen</Link> discovery.</Pair>
<Pair title="At 16th Level">The damage bonus becomes +4.</Pair>
<Pair title="Special">A mutagenic mauler counts as an alchemist for the purpose of imbibing a mutagen prepared by someone else.</Pair>
</Ability>
<Ability id="arc-brawler-mutagenic_mauler-mutagen-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-brawler-mutagenic_mauler-mutagen-su" flavor="Text from the alchemist class">Mutagen (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can drink a mutagen to heighten your physical prowess at the cost of your personality. You gain a +2 natural armor bonus, a +4 alchemical bonus to a physical stat, and a -2 penalty to a mental stat. See below for details.</Pair>
<Pair title="Usage">A mutagen lasts for 10 minutes per alchemist level.</Pair>
<Pair title="Note"><p>You learn how to create a mutagen that you can imbibe in order to heighten your physical prowess at the cost of your personality. It takes 1 hour to brew a dose of mutagen, and once brewed, it remains potent until used. You can only maintain one dose of mutagen at a time - if you brew a second dose, any existing mutagen becomes inert.</p>
<p>When you brew a mutagen, you select one physical ability score for it to boost - either Strength, Dexterity, or Constitution. If the mutagen enhances your Strength, it applies a penalty to your Intelligence. If it enhances your Dexterity, it applies a penalty to your Wisdom. If it enhances your Constitution, it applies a penalty to your Charisma.</p>
<p>A non-alchemist who drinks a mutagen must make a Fortitude save (DC 10 + 1/2 your alchemist level + your Intelligence modifier) or become <Link to="/misc/nauseated">nauseated</Link> for 1 hour - a non-alchemist can never gain the benefit of a mutagen, but you can gain the effects of another alchemist's mutagen if you drink it. (Although if the other alchemist creates a different mutagen, the effects of the "stolen" mutagen immediately cease.) The effects of a mutagen do not stack. Whenever you drink a mutagen, the effects of any previous mutagen immediately end.</p>
</Pair>
<Pair title="Special">A mutagen that is not in your possession becomes inert until you pick it up again.</Pair>
</Ability>
<Ability id="arc-brawler-mutagenic_mauler-beastmorph-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-brawler-mutagenic_mauler-beastmorph-su">Beastmorph (Su)</Pair>
<Pair hl title="Replaces">AC bonus</Pair>
<Pair title="Ability">A mutagenic mauler gains additional abilities when using her mutagen.</Pair>
<Pair title="At 4th Level">She gains low-light vision and a +10 enhancement bonus to her base speed.</Pair>
<Pair title="At 9th Level">She gains darkvision to a range of 30 feet and a climb speed of 15 feet.</Pair>
<Pair title="At 13th Level">The enhancement bonus to her base speed increases to +15 feet and she gains the <Link to="/umr/scent">scent</Link> ability within 30 feet.</Pair>
<Pair title="At 18th Level">Her climb speed increases to 30 feet, and the enhancement bonus to her base speed increases to +20 feet.</Pair>
</Ability>
</>};
const _shield_champion = {title: "Shield Champion", jsx: <><h2 id="arc-brawler-shield_champion-shield-champion">Shield Champion</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 86</Link><br/>Stalwart in battle, a shield champion has perfected an entire martial discipline relying on only her hand-to-hand fighting skills and her ever-present shield. What she forgoes in weapon versatility and improved combat maneuvering, she makes up for in her ability to turn her defense into a weapon.</p>
<Ability id="arc-brawler-shield_champion-weapon-and-armor-proficiency" icon={["info"]}>
<Pair single id="arc-brawler-shield_champion-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Info">A shield champion is proficient with all simple weapons and with shields as weapons. She is also proficient with light armor, and with <Link to="/eq-armor/buckler">bucklers</Link>, <Link to="/eq-armor/light_shield">light shields</Link>, and <Link to="/eq-armor/heavy_shield">heavy shields</Link>.</Pair>
</Ability>
<Ability id="arc-brawler-shield_champion-throw-shield-ex" icon={["bowman"]}>
<Pair single id="arc-brawler-shield_champion-throw-shield-ex">Throw Shield (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training at 3rd, 7th, and 11th levels</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A shield champion can throw a heavy or light shield as a normal (non-improvised) thrown weapon with a range increment of 10 feet or the shield's range increment, whichever is greater. The thrown shield deals the same damage as a <Link to="/misc/shield_bash">shield bash</Link>, and any damage increases from <Link to="/eq-armorenh/shield_spikes">shield spikes</Link> apply to this attack. A shield champion is treated as having the <Link to="/feat/far_shot">Far Shot</Link> feat for the purpose of determining range increment penalties for throwing a shield.</Pair>
<Pair title="At 7th Level">A shield champion can use a thrown shield to perform a bull rush, dirty trick, disarm, reposition, or trip <Link to="/rule/combat_maneuvers">combat maneuver</Link> as if she were making a melee shield bash attack.</Pair>
<Pair title="At 11th Level">A shield champion gains <Link to="/feat/shield_master">Shield Master</Link> as a bonus feat. She must meet all prerequisites before selecting that feat.</Pair>
</Ability>
<Ability id="arc-brawler-shield_champion-returning-shield-ex" icon={["bowman","stairs-goal"]}>
<Pair single id="arc-brawler-shield_champion-returning-shield-ex">Returning Shield (Ex)</Pair>
<Pair hl title="Replaces">Brawler's strike</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability"><p>A shield champion can throw a shield so it ricochets off her target (and possibly other solid objects) to return to her at the end of her turn. This ability functions whether or not the shield champion hits her opponent or moves on her turn. The shield deals no damage to targets it bounces off other than the original target of the shield champion's attack. Other circumstances can prevent the shield from returning to the shield champion, such as an opponent using a <Link to="/rule/readied_action">readied action</Link> to catch the shield, or the shield sticking to a <Link to="/monster/mimic">mimic's</Link> adhesive. The shield champion can opt to not have a thrown shield return to her, in which case it falls to the ground as it normally would. If the shield has the <Link to="/magic-enh/returning">returning</Link> weapon special ability, she can use either that or this ability.</p>
<p>If a shield champion has additional attacks from a high base attack bonus, these additional attacks can be ricochets off an earlier target. The distance to each additional target adds to the total range of the shield, and range penalties apply, but there are no additional penalties for attacking in this manner. Because ricocheting attacks are treated as separate attacks, effects and modifiers that only apply to one attack roll (such as <Link to="/spell/true_strike">true strike</Link>) only apply to the first attack and not to the others.</p>
</Pair>
<Pair title="At 9th Level">A shield champion gains <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link> as a bonus feat. She must meet all prerequisites before selecting that feat.</Pair>
<Pair title="At 12th Level">A shield champion can use her unarmed strike damage when dealing damage with a shield (whether in melee or thrown) or the shield's damage, whichever is greater.</Pair>
<Pair title="At 17th Level">By ricocheting her shield off a nearby surface before hitting her intended target, she can treat that surface as the origin square of the attack to determine whether the target is <Link to="/rule/flanked">flanked</Link> and whether the target gains a <Link to="/rule/cover">cover</Link> bonus to its AC. She can use this ability to attack a creature with <Link to="/rule/concealment">total concealment</Link> from her if she knows what square it occupies, but the attack still has a 50% miss chance.</Pair>
<Pair title="Special">A shield champion can throw a shield as part of a brawler's flurry.</Pair>
</Ability>
<Ability id="arc-brawler-shield_champion-champion-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-shield_champion-champion-defense-ex">Champion Defense (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training gained at 15th and 19th levels</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">Once per day when she would be reduced to 0 or fewer hit points by damage in combat from a weapon, unarmed, or natural attack, the shield champion can attempt to absorb all the damage with her shield. To use this ability, the shield champion must attempt a Fortitude saving throw, with the DC equal to the damage dealt. If it succeeds, she takes only half damage from the blow; otherwise, she takes full damage. She must be aware of the attack and able to react to it in order to use this ability - if she is denied her Dexterity bonus to AC, she can't use this ability.</Pair>
<Pair title="At 19th Level">She can use this ability twice per day.</Pair>
</Ability>
</>};
const _snakebite_striker = {title: "Snakebite Striker", jsx: <><h2 id="arc-brawler-snakebite_striker-snakebite-striker">Snakebite Striker</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 88</Link><br/>With her lightning quickness and guile, a snakebite striker keeps her foes' attention focused on her, because any one of her feints might be an actual attack. By giving up some of a brawler's versatility, she increases her damage potential and exposes opponents to deadly and unexpected strikes.</p>
<Ability icon={["skills"]} id="arc-brawler-snakebite_striker-undefined">
<Pair id="arc-brawler-snakebite_striker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Intimidate</Pair></Ability>
<Ability id="arc-brawler-snakebite_striker-sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-snakebite_striker-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Martial flexibility</Pair>
<Pair title="Ability">The snakebite striker can make a <Link to="/ability/sneak_attack">sneak attack</Link>. This is as the rogue ability of the same name.</Pair>
<Pair title="At 1st Level">Her sneak attack damage is +1d6.</Pair>
<Pair title="At 6th Level">Damage becomes +2d6.</Pair>
<Pair title="At 10th Level">Damage becomes +3d6.</Pair>
<Pair title="At 12th Level">Damage becomes +4d6.</Pair>
<Pair title="At 20th Level">Damage becomes +5d6.</Pair>
<Pair title="Special">If she gets a sneak attack bonus from another source, the bonuses on damage stack.</Pair>
</Ability>
<Ability id="arc-brawler-snakebite_striker-snake-feint-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-snakebite_striker-snake-feint-ex">Snake Feint (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training gained at 3rd and 7th levels</Pair>
<Pair title="At 3rd Level">A snakebite striker who uses a standard action to move can combine that move with a feint. If she is able to feint as a move action (such as from having the <Link to="/feat/improved_feint">Improved Feint</Link> feat), she can combine a move action to move with her feint.</Pair>
<Pair title="At 11th Level">Once per round she can declare her square and one adjacent square as the origin of her attacks until her next turn (allowing her to use one or both squares to determine whether she or allies are flanking an opponent).</Pair>
<Pair title="At 15th Level">She counts an additional adjacent square for this purpose.</Pair>
</Ability>
<Ability id="arc-brawler-snakebite_striker-opportunist-ex" icon={["mailed-fist"]}>
<Pair single id="arc-brawler-snakebite_striker-opportunist-ex">Opportunist (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training gained at 11th and 19th levels</Pair>
<Pair title="At 11th Level">Once per round the snakebite striker can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round. She cannot use this ability more than once per round, even if she has the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat or a similar ability.</Pair>
<Pair title="At 19th Level">She can use this ability twice per round.</Pair>
</Ability>
</>};
const _steel_breaker = {title: "Steel-Breaker", jsx: <><h2 id="arc-brawler-steel_breaker-steel-breaker">Steel-Breaker</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 88</Link><br/>The steel-breaker studies destruction and practices it as an art form. She knows every defense has a breaking point, and can shatter those defenses with carefully planned strikes.</p>
<Ability icon={["skills"]} id="arc-brawler-steel_breaker-undefined">
<Pair id="arc-brawler-steel_breaker-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-brawler-steel_breaker-exploit-weakness-ex" icon={["upgrade","armor-downgrade","armor-upgrade"]}>
<Pair single id="arc-brawler-steel_breaker-exploit-weakness-ex">Exploit Weakness (Ex)</Pair>
<Pair hl title="Replaces">Brawler's strike</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">As a <strong className="hl">swift action</strong>, a steel-breaker can observe a creature or object to find its weak point by succeeding at a Wisdom check, adding her brawler level against a DC of 10 the object's hardness or the target's CR. If it succeeds, the steel-breaker gains a +2 bonus on attack rolls until the end of her turn, and any attacks she makes until the end of her turn ignore the creature or object's DR or hardness.</Pair>
<Pair title="Info">A steel-breaker can instead use this ability as a <strong className="hl">swift action</strong> to analyze the movements and expressions of one creature within 30 feet, granting a bonus on Sense Motive checks and Reflex saving throws, as well as a dodge bonus to AC against that opponent equal to <Link to="/misc/half">half</Link> her brawler level until the start of her next turn.</Pair>
</Ability>
<Ability id="arc-brawler-steel_breaker-sunder-training-ex" icon={["mailed-fist","upgrade","armor-upgrade"]}>
<Pair single id="arc-brawler-steel_breaker-sunder-training-ex" flavor="A steel-breaker receives additional training in sunder combat maneuvers.">Sunder Training (Ex)</Pair>
<Pair hl title="Alters">Maneuver training</Pair>
<Pair title="At 3rd Level">She gains a +2 bonus when attempting a <Link to="/rule/sunder">sunder</Link> combat maneuver checks and a +2 bonus to her CMD when defending against this maneuver.</Pair>
<Pair title="At 7th Level">These bonuses increase to +3, and she gains a +2 bonus on <Link to="/rule/disarm">disarm</Link> combat maneuver checks and a +2 bonus to her CMD when defending against a disarm maneuver.</Pair>
<Pair title="At 11th Level">The sunder bonuses become +4 and the disarm bonuses become +3.</Pair>
<Pair title="At 15th Level">These bonuses become +5 and +4, respectively.</Pair>
<Pair title="At 19th Level">These bonuses become +6 and +5.</Pair>
</Ability>
</>};
const _strangler = {title: "Strangler", jsx: <><h2 id="arc-brawler-strangler-strangler">Strangler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 88</Link><br/>A strangler is trained to choke the life out of her victims with her vise-like grip. Some stranglers are self-taught and are little more than brutish murderers, unhinged sociopaths, or opportunistic alley-bashers. Others are members of murder cults or specialized schools of assassination, trained since the cradle to kill with their bare hands.</p>
<Ability icon={["skills"]} id="arc-brawler-strangler-undefined">
<Pair id="arc-brawler-strangler-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="arc-brawler-strangler-strangle-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-strangler-strangle-ex">Strangle (Ex)</Pair>
<Pair hl title="Replaces">Unarmed strike, brawler's flurry</Pair>
<Pair title="At 1st Level">A strangler deals +1d6 <Link to="/ability/sneak_attack">sneak attack</Link> damage whenever she succeeds at a <Link to="/rule/grapple">grapple</Link> check to damage or pin an opponent. The strangler is always considered flanking her target for the purpose of using this ability.</Pair>
<Pair title="At 2nd Level">The damage becomes +2d6.</Pair>
<Pair title="At 8th Level">The damage becomes +3d6.</Pair>
<Pair title="At 15th Level">The damage becomes +4d6.</Pair>
</Ability>
<Ability id="arc-brawler-strangler-practiced-strangler-ex" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="arc-brawler-strangler-practiced-strangler-ex">Practiced Strangler (Ex)</Pair>
<Pair hl title="Replaces">AC bonus</Pair>
<Pair title="At 2nd Level">When a strangler has the <Link to="/rule/grappled">grappled</Link> condition, she does not take a -4 penalty to Dexterity and does not lose her Dexterity bonus to AC.</Pair>
<Pair title="At 9th Level">A grappling or grappled strangler still threatens an area and is still able to make attacks of opportunity while grappling or grappled; when pinned, she is not denied her Dexterity bonus and does not take a -4 penalty to Armor Class.</Pair>
</Ability>
<Ability id="arc-brawler-strangler-sleeper-hold-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-strangler-sleeper-hold-ex">Sleeper Hold (Ex)</Pair>
<Pair hl title="Alters">Knockout</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">1 time/day + 1 per six brawler levels beyond 4th<ByLevelPop levels={[[4,1],[10,2],[16,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A strangler can instantly render a pinned opponent unconscious. This works like the <em>knockout</em> ability, but requires a successful grapple combat maneuver check against the pinned opponent and does not have to damage the opponent.</Pair>
<Pair title="Special">Creatures that do not need to breathe, are immune to critical hits, or are immune to nonlethal damage are immune to this ability.</Pair>
</Ability>
<Ability id="arc-brawler-strangler-neckbreaker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-strangler-neckbreaker-ex">Neckbreaker (Ex)</Pair>
<Pair hl title="Replaces">Awesome blow, improved awesome blow</Pair>
<Pair title="Standard Action">A strangler can attempt to instantly kill a pinned opponent as a standard action. This works like the <em>sleeper hold</em> ability, but imposes a -5 penalty on her grapple combat maneuver check. If the opponent succeeds at its Fortitude save, the strangler deals damage as if she had attempted the grapple check to damage her opponent; if the opponent fails its Fortitude save, it dies.</Pair>
<Pair title="At 20th Level">The strangler can attempt this as a <strong className="hl">move action</strong>.</Pair>
<Pair title="Special">Creatures that are immune to critical hits are immune to this ability.</Pair>
</Ability>
</>};
const _strong_side_boxer = {title: "Strong-Side Boxer", jsx: <><h2 id="arc-brawler-strong_side_boxer-strong-side-boxer">Strong-Side Boxer</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 16</Link><br/>A strong-side boxer employs a unique fighting style that incorporates a rope or cord wound around her hand. The wrapped hand is known as the strong side. The other hand is kept free to deflect blows, and is known as the shield. The Zenj people of the Mwangi Expanse, who gather for large boxing tournaments, developed this style for their competitions. Many guests and visitors have witnessed these tournaments over the years, and as a result, the style has spread throughout Golarion.</p>
<Ability id="arc-brawler-strong_side_boxer-shield-hand-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-strong_side_boxer-shield-hand-ex">Shield-Hand (Ex)</Pair>
<Pair hl title="Replaces">The brawler's AC bonus</Pair>
<Pair title="Ability">A strong-side boxer can use her off hand as if it were a <Link to="/eq-armor/buckler">buckler</Link>, gaining a natural armor bonus to her AC as long as she does not use her off hand to make attacks. This bonus is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> her brawler level.</Pair>
<Pair title="Special">While using her off hand in this manner, the strong-side boxer treats that hand as a buckler for the purposes of other feats and abilities (though she is also considered to have a free hand).</Pair>
</Ability>
<Ability id="arc-brawler-strong_side_boxer-strong-side-fist-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-brawler-strong_side_boxer-strong-side-fist-ex">Strong-Side Fist (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="At 1st Level">A strong-side boxer can spend 1 minute to wrap one of her hands in rope or cord. The strong-side boxer can carry items or wield weapons in a wrapped hand, but she takes a -2 penalty on Dexterity-based skill checks that requires the use of that hand (such as Disable Device and Sleight of Hand checks). Unwrapping a hand is a <strong className="hl">move action</strong> that provokes attacks of opportunity.</Pair>
<Pair title="At 3rd Level">As a <strong className="hl">full-round action</strong> that provokes attacks of opportunity, a strong-side boxer can dip her wrapped hand in resin and then crushed glass or small metal spikes, which remain on her wrapped hand for 1 hour. If she chooses crushed glass, she can deal slashing damage with her unarmed strikes; if she chooses spikes, she can deal piercing damage with her unarmed strikes for the duration. Whether she chooses crushed glass or metal spikes, she deals an additional 1 point of <Link to="/rule/bleed">bleed</Link> damage with her unarmed strikes.</Pair>
<Pair title="At 7th Level">The bleed damage becomes 1d4.</Pair>
<Pair title="At 11th Level">The bleed damage increases to 1d6.</Pair>
<Pair title="At 15th Level">The bleed damage becomes 2d4.</Pair>
<Pair title="At 19th Level">The bleed damage is multiplied on a critical hit.</Pair>
<Pair title="Special">Bleed damage from this ability does not stack with bleed damage from other sources.</Pair>
</Ability>
<Ability id="arc-brawler-strong_side_boxer-lead-leg-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-brawler-strong_side_boxer-lead-leg-ex">Lead Leg (Ex)</Pair>
<Pair hl title="Replaces">Close weapon mastery</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A strong-side boxer can spend 1 minute to wrap one of her legs in a chain, and can thereafter use the chain-wrapped leg both defensively and offensively. While her leg is wrapped, she is considered to be wearing a <Link to="/eq-armor/chain_shirt">chain shirt</Link>, gaining all the appropriate bonuses and penalties. The chain can be enchanted as armor and is treated as <Link to="/rule/masterwork_a">masterwork</Link>.</Pair>
<Pair title="Immediate Action">Once per round while wearing the chain, she can apply a +4 circumstance bonus to a <Link to="/rule/trip">trip</Link> attempt.</Pair>
</Ability>
</>};
const _turfer = {title: "Turfer", jsx: <><h2 id="arc-brawler-turfer-turfer">Turfer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 42</Link><br/>A turfer has a mastery over particular types of terrain.</p>
<Ability id="arc-brawler-turfer-favored-turf-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-brawler-turfer-favored-turf-ex">Favored Turf (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">A turfer chooses a type of terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. When in that type of terrain, she gains a +2 bonus on initiative checks and a +1 bonus on combat maneuver checks and to CMD.</Pair>
<Pair title="At 7th Level">The turfer chooses an additional terrain in which to gain these bonuses. In one terrain of her choice (including the one just chosen), her bonus on initiative checks increases by 2, and her bonus on combat maneuver checks and to CMD increases by 1.</Pair>
<Pair title="At 11th Level">She gains another terrain and increases the bonuses in one of her terrains, as above.</Pair>
<Pair title="At 15th Level">She gains a fourth terrain and chooses one to increase bonuses in.</Pair>
<Pair title="At 19th Level">She chooses a fifth terrain and increases the bonuses in one of her terrains.</Pair>
</Ability>
<Ability id="arc-brawler-turfer-terrain-mastery-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-brawler-turfer-terrain-mastery-su">Terrain Mastery (Su)</Pair>
<Pair hl title="Replaces">Knockout</Pair>
<Pair title="At 4th Level">A turfer gains the benefits of <Link to="/spell/endure_elements">endure elements</Link> and a +10 foot enhancement bonus to her base speed, but only in her favored terrains. In addition, she can move through <Link to="/rule/difficult_terrain">difficult terrain</Link> in her favored terrains at her normal speed without taking damage or suffering any other impairment, but she can't do so through difficult terrain that has been magically manipulated.</Pair>
<Pair title="At 10th Level">Her enhancement bonus to her base speed increases to +20 feet.</Pair>
<Pair title="At 16th Level">Her enhancement bonus increases to +30 feet.</Pair>
<Pair title="Special">The turfer loses this ability if she wears medium or heavy armor or carries a medium or heavy load.</Pair>
</Ability>
</>};
const _ulfen_beast_wrestler = {title: "Ulfen Beast-Wrestler", jsx: <><h2 id="arc-brawler-ulfen_beast_wrestler-ulfen-beast-wrestler">Ulfen Beast-Wrestler</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 10</Link><br/>For these mighty grapplers, wrestling normal opponents has lost its challenge - they seek greater targets for glory. Ulfen beast-wrestlers challenge trolls to unarmed combat, and the greatest seek out the great linnorm their lands are known for and wrestle these primeval dragons into submission.</p>
<Ability id="arc-brawler-ulfen_beast_wrestler-beast-training-ex" icon={["upgrade"]}>
<Pair single id="arc-brawler-ulfen_beast_wrestler-beast-training-ex">Beast Training (Ex)</Pair>
<Pair hl title="Replaces">Maneuver training</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Choice">An Ulfen beast-wrestler selects a creature type from the ranger's <Link to="/ability/favored_enemies">favored enemies</Link> table. The only humanoid subtype the beast-wrestler can select is giant. She gains a +2 bonus on combat maneuver checks and to her CMD against creatures of the type she selected.</Pair>
<Pair title="At 7th Level">The Ulfen beast-wrestler can select an additional type of creature. In addition, the bonuses against any one type of creature she's chosen (including the one just selected, if so desired) increase by 2.</Pair>
<Pair title="At 11th Level">She chooses another type of creature and increases the bonuses against one type, as above.</Pair>
<Pair title="At 15th Level">She chooses and increases again, as above.</Pair>
<Pair title="At 19th Level">She chooses and increases one more time.</Pair>
<Pair title="Special">If a specific creature falls into more than one category, the beast-wrestler's bonuses don't stack; she simply uses whichever bonus is higher.</Pair>
</Ability>
<Ability id="arc-brawler-ulfen_beast_wrestler-beast-defenses-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-brawler-ulfen_beast_wrestler-beast-defenses-ex">Beast Defenses (Ex)</Pair>
<Pair hl title="Replaces">AC bonus</Pair>
<Pair title="Passive Ability">When facing enemies she selected with beast training, the beast-wrestler gains a bonus to AC equal to <Link to="/misc/half">half</Link> her beast training bonus against that creature.</Pair>
</Ability>
</>};
const _venomfist = {title: "Venomfist", jsx: <><h2 id="arc-brawler-venomfist-venomfist">Venomfist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 43</Link><br/>Thanks to alchemical experiments and rigorous study of venomous creatures, a venomfist has toxic unarmed strikes.</p>
<Ability id="arc-brawler-venomfist-venomous-strike-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-brawler-venomfist-venomous-strike-ex">Venomous Strike (Ex)</Pair>
<Pair hl title="Replaces">Knockout, close weapon mastery</Pair>
<Pair hl title="Alters">Unarmed strike</Pair>
<Pair title="Ability">A venomfist's unarmed strikes deal damage as a creature <Link to="/misc/one_size_category_smaller">one size category smaller</Link> (1d4 at first level for Medium venomfists). If she hits with her first unarmed strike in a round, the target must succeed at a Fortitude saving throw (DC = 10 + <Link to="/misc/half">half</Link> the venomfist's brawler level + her Constitution modifier) or take an additional amount of damage equal to the venomfist's Constitution modifier. The venomfist is immune to this toxin.</Pair>
<Pair title="At 4th Level">A target that fails this save must succeed at a second saving throw 1 round later or take the same amount of damage again. This effect repeats as long as the target continues to fail its saving throws, to a maximum number of rounds equal to 1 plus 1 additional round for every 4 brawler levels the venomfist has. Unlike other poisons, multiple doses of a venomfist's poison never stack; the more recent poison effect replaces the older one.</Pair>
<Pair title="At 5th Level">After the venomfist gets 8 hours of rest, she can choose a secondary effect for her venom to impose. She can choose <Link to="/misc/fatigued">fatigued</Link>, <Link to="/misc/shaken">shaken</Link>, or <Link to="/misc/sickened">sickened</Link>. A creature that fails its saving throw against her venom also gains the chosen condition until it succeeds at a save against the venom or until the venom's duration ends. Once a creature succeeds at its save against the poison, it becomes immune to the secondary condition for 24 hours, but the attack still deals the extra damage.</Pair>
<Pair title="At 10th Level">When the venomfist chooses the condition her venom imposes, she can also cause her venom to deal <Link to="/rule/ability_damage">ability score damage</Link> each round instead of hit point damage. She chooses Strength, Dexterity, or Constitution, and her venom deals 1d3 points of ability score damage each round. In addition, she adds <Link to="/misc/blinded">blinded</Link>, <Link to="/misc/exhausted">exhausted</Link>, and <Link to="/misc/staggered">staggered</Link> to the list of secondary effects she can choose for her venom.</Pair>
<Pair title="At 16th Level">The venomfist's venom is particularly potent. If it fails the initial save, the target must succeed at two consecutive saves before being cured of the venom, though if the first save is successful, the secondary effect ends and the creature is immune to the secondary effects of the venomfist's poison for 24 hours. In addition, the venomfist adds <Link to="/misc/dazed">dazed</Link> and <Link to="/misc/stunned">stunned</Link> to the list of secondary effects she can choose for her venom.</Pair>
<Pair title="Special">This is a poison effect. The venomfist can't suppress it, but she affects only those she damages with her unarmed strikes (not those she merely touches).</Pair>
</Ability>
</>};
const _verdant_grappler = {title: "Verdant Grappler", jsx: <><h2 id="arc-brawler-verdant_grappler-verdant-grappler">Verdant Grappler</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 43</Link><br/>By accepting spirits of nature into her soul, a verdant grappler can entangle her foes with tangled undergrowth.</p>
<Ability id="arc-brawler-verdant_grappler-green-grasp-su" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-verdant_grappler-green-grasp-su">Green Grasp (Su)</Pair>
<Pair hl title="Replaces">Bonus feat gained at 2nd level</Pair>
<Pair hl title="Alters">Maneuver training</Pair>
<Pair title="At 2nd Level">A verdant grappler gains <Link to="/feat/improved_grapple">Improved Grapple</Link> as a bonus feat.</Pair>
<Pair title="At 3rd Level">She must choose <Link to="/rule/grapple">grapple</Link> as her first combat maneuver for maneuver training. When she pins a creature, she can cause roots and vines to burst from the ground (no matter the surrounding terrain), allowing the verdant grappler to attempt to tie up the creature without needing to retrieve rope or use a hand to hold the rope; as usual, a tied-up creature is <Link to="/rule/pinned">pinned</Link> and not helpless.</Pair>
<Pair title="Special">The verdant grappler must remain within 30 feet of the tied-up creature, or the vines automatically release it. She can tie up only one creature at a time with <em>green grasp.</em></Pair>
</Ability>
<Ability id="arc-brawler-verdant_grappler-thorny-embrace-su" icon={["upgrade"]}>
<Pair single id="arc-brawler-verdant_grappler-thorny-embrace-su">Thorny Embrace (Su)</Pair>
<Pair hl title="Replaces">Close weapon mastery</Pair>
<Pair title="At 5th Level">When a verdant grappler uses <em>green grasp</em> to tie up a creature, she can have the roots and vines grow vicious thorns that automatically damage the tied-up creature each round at the start of the verdant grappler's turn. The thorns deal damage equal to the base unarmed strike damage of a brawler 4 levels lower than the verdant grappler.</Pair>
</Ability>
<Ability id="arc-brawler-verdant_grappler-phytological-anatomy-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-brawler-verdant_grappler-phytological-anatomy-su">Phytological Anatomy (Su)</Pair>
<Pair hl title="Replaces">The combat feat gained at 11th level</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">The verdant grappler transforms partially into a plant. She gains a +2 bonus on saving throws against mind-affecting, paralysis, poison, polymorph, sleep, and stunning effects.</Pair>
</Ability>
</>};
const _wild_child = {title: "Wild Child", jsx: <><h2 id="arc-brawler-wild_child-wild-child">Wild Child</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 89</Link><br/>The wild child works with his sworn animal friend to conquer the challenges that lay before them. This kinship could come from being lost in the wilderness and raised by animals or growing up with an exotic pet.</p>
<Ability icon={["skills"]} id="arc-brawler-wild_child-undefined">
<Pair id="arc-brawler-wild_child-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/heal">Heal</Link> (WIS)</Pair></Ability>
<Ability id="arc-brawler-wild_child-animal-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-wild_child-animal-companion-ex">Animal Companion (Ex)</Pair>
<Pair hl title="Replaces">Bonus combat feats gained at 2nd, 8th, 14th, and 20th levels</Pair>
<Pair title="Ability">A wild child forms a bond with a loyal companion that accompanies the wild child on his adventures. A wild child can begin play with any of the <Link to="/ability/animal_companion">animals</Link> available to a druid. The wild child uses his brawler level as his effective druid level for determining the abilities of his <Link to="/sidekick/animal_companion">animal companion</Link>.</Pair>
</Ability>
<Ability id="arc-brawler-wild_child-hunters-tricks" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-wild_child-hunters-tricks">Hunter's Tricks</Pair>
<Pair hl title="Replaces">Close weapon mastery</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A wild child can expend a use of martial flexibility to use a <em>hunter's trick</em> from the <Link to="/arc-ranger/skirmisher">ranger skirmisher archetype</Link>. Each time he activates this ability, the wild child can use a different hunter trick. He cannot choose any tricks that rely on ranged attacks. Activating this ability is not an action, but using the trick might require the wild child to use an action of a different type.</Pair>
</Ability>
<Ability id="arc-brawler-wild_child-maneuver-training-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-wild_child-maneuver-training-ex">Maneuver Training (Ex)</Pair>
<Pair hl title="Alters">Maneuver training</Pair>
<Pair title="Ability">Whenever the wild child chooses a new maneuver for this ability, his animal companion also learns a trick to make use of this combat maneuver. For example, if the wild child chooses maneuver training (dirty trick), his animal companion also learns a trick that allows it to use the dirty trick combat maneuver. He cannot choose any tricks that rely on ranged attacks.</Pair>
<Pair title="Special">This bonus trick doesn't count against the animal companion's total tricks known and does not take any time or checks to train. Should the wild child gain a new animal companion (such as if the previous one dies), this new animal companion begins with the same number of bonus tricks.</Pair>
</Ability>
<Ability id="arc-brawler-wild_child-wild-tricks-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-wild_child-wild-tricks-ex" flavor="The wild child has learned a number of tricks to aid his allies and his animal companion, as well as to hinder his opponents.">Wild Tricks (Ex)</Pair>
<Pair hl title="Replaces">Bonus combat feats gained at 5th, 11th, and 17th levels</Pair>
<Pair title="At 5th Level">The wild child learns one <em>hunter's trick</em> from the ranger skirmisher archetype. He cannot choose a trick that relies on ranged attacks.</Pair>
<Pair title="At 11th Level">The wild child learns a second hunter's trick, with the same restrictions.</Pair>
<Pair title="At 17th Level">The wild child learns a third hunter's trick, with the same restrictions.</Pair>
<Pair title="Special">The wild child can use these tricks a number of times per day equal to <Link to="/misc/half">half</Link> his brawler level + his Constitution modifier. This ability otherwise follows the rules of the hunter's tricks ability, including all action costs.</Pair>
</Ability>
</>};
const _winding_path_renegade = {title: "Winding Path Renegade", jsx: <><h2 id="arc-brawler-winding_path_renegade-winding-path-renegade">Winding Path Renegade</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 105</Link>, <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 11</Link><br/>In the sacred text Unbinding the Fetters, Irori teaches that the path to transcendence can be straight or twisted. Those who follow the straight path adhere to the traditions and techniques perfected by others who have traveled before them, while those who seek the twisted path abandon tradition and follow their own unique routes to self-perfection. Both paths can lead to the same place, but those who follow the twisted path must take care to not lose their way.</p>
<p>Winding path renegades epitomize those who have chosen the twisted path. These brawlers initially studied at the <Link to="/rule/houses_of_perfection">Houses of Perfection</Link> in Jalmeray, but while they grasped the mechanical aspects of the forms, they lacked the mental discipline required by the masters of the school. Thus, they have withdrawn from their monasteries - some peacefully, some not - to find their own paths.</p>
<Ability id="arc-brawler-winding_path_renegade-school-focus-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-winding_path_renegade-school-focus-ex">School Focus (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 2nd, 8th, and 14th levels</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A winding path renegade continues the training she left behind, gaining the benefits of the mystery taught at her old monastery. As the winding path renegade progresses in her self-guided training, she gains a deeper understanding of her chosen monastery's mystery, which grants her new powers.</Pair>
</Ability>
<Ability id="arc-brawler-winding_path_renegade-mystery-of-unblinking-flame-su" extraClasses="subAbility" icon={["upgrade","mailed-fist","armor-upgrade"]}>
<Pair single id="arc-brawler-winding_path_renegade-mystery-of-unblinking-flame-su">Mystery of Unblinking Flame (Su)</Pair>
<Pair title="At 2nd Level">The winding path renegade increases her speed by 10 feet (this is treated as an enhancement bonus). If she uses her <em>monk moves</em> class ability to gain fast movement, the abilities stack with each other.</Pair>
<Pair title="At 8th Level">If the winding path renegade begins her turn with the <Link to="/rule/grappled">grappled</Link> condition, she can deal 2d6 points of fire damage to all other creatures in the grapple as a <strong className="hl">free action</strong>.</Pair>
<Pair title="At 14th Level">The winding path renegade becomes as difficult to contain as a flame. Once per day as a <strong className="hl">full-round action</strong>, she can transform into liquid flame, instantly escaping all bonds as if under the effect of <Link to="/spell/freedom_of_movement">freedom of movement</Link> and moving up to her speed. When moving as part of this ability, she can move through creatures' squares freely and doesn't provoke attacks of opportunity. She deals 10d6 points of fire damage to any creature whose square she enters during this movement. A successful Reflex saving throw (DC = 10 + <Link to="/misc/half">half</Link> her brawler level + her Dexterity bonus) halves this damage.</Pair>
</Ability>
<Ability id="arc-brawler-winding_path_renegade-mystery-of-unfolding-wind-su" extraClasses="subAbility" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-brawler-winding_path_renegade-mystery-of-unfolding-wind-su">Mystery of Unfolding Wind (Su)</Pair>
<Pair title="At 2nd Level">The winding path renegade adds 10 to the range increments of ranged weapons she wields and gains <Link to="/feat/deflect_arrows">Deflect Arrows</Link> as a bonus feat.</Pair>
<Pair title="At 8th Level">She can harness the power of the wind to make enormous leaps. As a <strong className="hl">move action</strong>, she can leap without attempting an Acrobatics check, jumping any distance up to her speed (upward movement counts as double, as when flying). She can leap in this way a number of times per day equal to her class level.</Pair>
<Pair title="At 14th Level">When using the Deflect Arrows feat, the winding path renegade can send one projectile back at her attacker, using the same attack roll and damage roll the attacker rolled against her. Even if the deflected attack had more than one projectile (as with <Link to="/feat/manyshot">Manyshot</Link>), the winding path renegade sends only one projectile back at the attacker. The others are deflected as normal.</Pair>
</Ability>
<Ability id="arc-brawler-winding_path_renegade-mystery-of-untwisting-iron-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-brawler-winding_path_renegade-mystery-of-untwisting-iron-su">Mystery of Untwisting Iron (Su)</Pair>
<Pair title="At 2nd Level">Metal weapons and armor in the winding path renegade's possession are treated as <Link to="/rule/masterwork_w">masterwork</Link> unless they have the <Link to="/misc/broken">broken</Link> condition.</Pair>
<Pair title="At 8th Level">The winding path renegade gains a bonus equal to half her level on Craft checks involving metal, and she gains the benefits of the <Link to="/feat/master_craftsman">Master Craftsman</Link> and <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> feats when crafting items made of metal.</Pair>
<Pair title="At 14th Level">Any weapon the winding path renegade wields is treated as <Link to="/eq-material/adamantine">adamantine</Link>.</Pair>
</Ability>
<Ability id="arc-brawler-winding_path_renegade-monk-moves-ex" icon={["stairs-goal"]}>
<Pair single id="arc-brawler-winding_path_renegade-monk-moves-ex">Monk Moves (Ex)</Pair>
<Pair hl title="Replaces">AC bonus</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A winding path renegade can use her martial flexibility ability to gain the benefits of certain <Link to="/class/monk">monk</Link> abilities as well as combat feats. Each ability counts as one combat feat for this purpose, and the winding path renegade is treated as a monk of a level equal to her brawler level for the purpose of determining the effects of these abilities.</Pair>
<Pair title="Special">The winding path renegade gains access to these abilities at the levels listed on the Monk Moves table below. She does not gain a ki pool, and she can't use powers that require ki. The winding path renegade must be wearing light or no armor to benefit from this ability.</Pair>
</Ability>
<ScrollContainer id="arc-brawler-winding_path_renegade--table-0"><table>
<thead>
<tr>
<th>Monk Ability</th>
<th>Level Gained</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/ability/evasion">Evasion<IonRippleEffect /></Link></td>
<td>4th</td>
</tr>
<tr>
<td>Fast movement</td>
<td>4th</td>
</tr>
<tr>
<td>Slow fall</td>
<td>4th</td>
</tr>
<tr>
<td>High jump</td>
<td>5th</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/ability/improved_evasion">Improved evasion<IonRippleEffect /></Link></td>
<td>9th</td>
</tr>
</tbody></table></ScrollContainer>
</>};
export default {battle_dancer:_battle_dancer,bouncer:_bouncer,constructed_pugilist:_constructed_pugilist,exemplar:_exemplar,feral_striker:_feral_striker,hinyasi:_hinyasi,living_avalanche:_living_avalanche,mutagenic_mauler:_mutagenic_mauler,shield_champion:_shield_champion,snakebite_striker:_snakebite_striker,steel_breaker:_steel_breaker,strangler:_strangler,strong_side_boxer:_strong_side_boxer,turfer:_turfer,ulfen_beast_wrestler:_ulfen_beast_wrestler,venomfist:_venomfist,verdant_grappler:_verdant_grappler,wild_child:_wild_child,winding_path_renegade:_winding_path_renegade}