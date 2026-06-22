import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ByLevelPop from '../../components/ByLevelPop';
const _arrow_champion = {title: "Arrow Champion", jsx: <><h2 id="arc-swashbuckler-arrow_champion-arrow-champion">Arrow Champion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 95</Link><br/>While the swashbuckler's agile style of combat is equally suited to urban settings and wilderness, the bow and arrow is an indispensable asset in open areas and harsh terrain where fancy footwork isn't enough to close the distance or dodge the enemy's arrows.</p>
<Ability id="arc-swashbuckler-arrow_champion-arrow-champions-panache-ex" icon={["info"]}>
<Pair single id="arc-swashbuckler-arrow_champion-arrow-champions-panache-ex">Arrow Champion's Panache (Ex)</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Ability">An arrow champion regains panache when she makes a killing blow with a light or one-handed piercing melee weapon or a bow (a <Link to="/eq-weapon/longbow">longbow</Link>, <Link to="/eq-weapon/shortbow">shortbow</Link>, <Link to="/eq-weapon/composite_longbow">composite longbow</Link>, or <Link to="/eq-weapon/composite_shortbow">composite shortbow</Link>).</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-arrow_champion-deeds">Deeds</Pair>
<Pair title="Ability">An arrow champion gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-retaliation-ex" extraClasses="subAbility" icon={["mailed-fist","bowman"]}>
<Pair single id="arc-swashbuckler-arrow_champion-retaliation-ex">Retaliation (Ex)</Pair>
<Pair hl title="Replaces">Opportune parry and riposte</Pair>
<Pair title="Ability">When a foe hits the arrow champion with an attack, she can spend 1 panache point to make a retaliatory attack of opportunity against that foe. If the triggering attack is a melee attack, she can retaliate with a melee attack using a light or one-handed piercing melee weapon, provided the creature is within her reach. If the triggering attack is a ranged attack, she can retaliate with a ranged attack using a bow, provided that the creature is within 30 feet of her.</Pair>
<Pair title="Special">This deed's cost cannot be reduced by any ability or effect that reduces the number of panache points a deed costs.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-precise-aim-ex" extraClasses="subAbility" icon={["upgrade","bowman","broken-shield"]}>
<Pair single id="arc-swashbuckler-arrow_champion-precise-aim-ex">Precise Aim (Ex)</Pair>
<Pair hl title="Alters">Precise strike</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When attacking with a light or one-handed piercing melee weapon, an arrow champion can add her swashbuckler level to the damage she deals, as the swashbuckler's <Link to="/swashdeed/precise_strike">precise strike</Link> deed. She can also add <Link to="/misc/one_quarter">one-quarter</Link> of her swashbuckler level to the damage dealt when attacking with a bow, but the target must be within 30 feet of her.</Pair>
<Pair title="Swift Action">An arrow champion can spend 1 panache point to increase the range of the effect to her bow's first range increment. Unlike a normal swashbuckler, an arrow champion cannot spend panache to double the extra damage.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-swift-switch-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-arrow_champion-swift-switch-ex">Swift Switch (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler initiative</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">While the arrow champion has at least 1 panache point, she can sheathe or draw an unhidden light or one-handed piercing melee weapon or a bow as a <strong className="hl">swift action</strong> without provoking attacks of opportunity. If the arrow champion spends 1 panache point, she can perform either action as an <strong className="hl">immediate action</strong>.</Pair>
<Pair title="Special">In addition, if she has the <Link to="/feat/quick_draw">Quick Draw</Link> feat and one of her hands is free, she can sheathe a weapon and draw an unhidden weapon as part of the same swift action, provided that one of the weapons is a bow and the other is a light or one-handed piercing melee weapon. If she spends 1 panache point, she can perform the switch as an immediate action.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-archers-feint-ex" extraClasses="subAbility" icon={["armor-downgrade","upgrade"]}>
<Pair single id="arc-swashbuckler-arrow_champion-archers-feint-ex">Archer's Feint (Ex)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When the arrow champion hits a foe within 30 feet with a bow attack, she can forgo the damage and instead attempt a <Link to="/skill/bluff">Bluff</Link> check to feint against that foe as a <strong className="hl">swift action</strong>. If successful, in addition to the normal benefits of feinting, she doubles the extra damage from <em>precise aim</em> on her next melee attack before the end of her next turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-weapon-versatility-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-arrow_champion-weapon-versatility-ex" flavor="An arrow champion learns to use precision-based tricks just as accurately with her bow as with her melee weapons.">Weapon Versatility (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Provided that her swashbuckler level is high enough, she can use the <Link to="/swashdeed/bleeding_wound">bleeding wound</Link>, <Link to="/swashdeed/deadly_stab">deadly stab</Link>, <Link to="/swashdeed/menacing_swordplay">menacing swordplay</Link>, <Link to="/swashdeed/perfect_thrust">perfect thrust</Link>, <Link to="/swashdeed/stunning_stab">stunning stab</Link>, and <Link to="/swashdeed/targeted_strike">targeted strike</Link> deeds when attacking with a bow, so long as her target is within 30 feet.</Pair>
<Pair title="Special">If she spends a panache point to increase the range of her <em>precise aim</em> ability, the increased range applies to this ability as well.</Pair>
</Ability>
<Ability id="arc-swashbuckler-arrow_champion-versatile-weapon-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-arrow_champion-versatile-weapon-mastery-ex">Versatile Weapon Mastery (Ex)</Pair>
<Pair hl title="Alters">Swashbuckler weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">An arrow champion gains the benefits of <em>swashbuckler weapon mastery</em> when using a light or one-handed piercing melee weapon or a bow.</Pair>
</Ability>
</>};
const _azatariel = {title: "Azatariel", jsx: <><h2 id="arc-swashbuckler-azatariel-azatariel">Azatariel</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 10</Link><br/>Azatariels are the champions of Elysium, dedicated to spreading its unpredictable whimsy and capricious goodness across the planes. Irrepressible and happy-golucky even in the face of the most tyrannical devil, azatariels take their name from the azatas that they emulate. In battle, azatariels exult in darting among their foes, heedless of danger. Mastery of combat's chaos allows azatariels to turn enemies' strikes against each other, while supernatural good fortune protects them from dire afflictions. When allies falter with fear or suffer the effects of dark magic, a compassionate gesture from an azatariel cures their ills and spurs them onward.</p>
<Ability id="arc-swashbuckler-azatariel-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-swashbuckler-azatariel-alignment">Alignment</Pair>
<Pair title="Info">An azatariel must be chaotic good. If an azatariel changes alignment, she loses all abilities granted by this archetype until her alignment returns to chaotic good.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-azatariel-deeds">Deeds</Pair>
<Pair title="Ability">An azatariel gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-bralanis-swiftness-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-azatariel-bralanis-swiftness-ex">Bralani's Swiftness (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">While the azatariel has at least 1 point of panache, she ignores movement penalties from <Link to="/rule/difficult_terrain">difficult terrain</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-whimsical-riposte-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-azatariel-whimsical-riposte-ex">Whimsical Riposte (Ex)</Pair>
<Pair hl title="Replaces">Precise strike</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The azatariel adds her Charisma modifier to attack and damage rolls made with light or one-handed piercing weapons as part of her <Link to="/swashdeed/opportune_parry_and_riposte">opportune parry and riposte</Link> deed (including when riposting). In addition, whenever the azatariel successfully parries an opponent's attack, instead of riposting she can redirect that attack to another target as an <strong className="hl">immediate action</strong>. The new target must be within the attacker's reach, and the attacker uses the original attack roll to determine the attack's success.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-lillends-misdirection-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-azatariel-lillends-misdirection-ex">Lillend's Misdirection (Ex)</Pair>
<Pair hl title="Replaces">Targeted strike</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Immediate Action">When a foe <Link to="/rule/flanking">flanking</Link> the azatariel misses her with a melee attack, the azatariel can spend 2 panache points to attempt a <Link to="/rule/reposition">reposition</Link> combat maneuver check against the attacking foe. If she succeeds at the combat maneuver check, she and the attacking foe switch positions, and the melee attack roll that missed the azatariel instead targets the flanking opponent that did not make the attack, using the same attack roll result (including the bonus gained from flanking).</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-ghaeles-assault-ex" extraClasses="subAbility" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-swashbuckler-azatariel-ghaeles-assault-ex">Ghaele's Assault (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The azatariel can spend 2 panache points when charging. If she does, the AC penalty for charging changes to -4 and she can make a full attack at the end of her charge.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-elysian-conviction-su" icon={["armor-upgrade"]}>
<Pair single id="arc-swashbuckler-azatariel-elysian-conviction-su">Elysian Conviction (Su)</Pair>
<Pair hl title="Replaces">Charmed life</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">While she has at least 1 panache point, an azatariel adds her Charisma bonus to her saving throws against mind-affecting effects.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-battle-dance-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-azatariel-battle-dance-ex">Battle Dance (Ex)</Pair>
<Pair hl title="Replaces">Nimble</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An azatariel's base speed increases by 10 feet. This is an enhancement bonus.</Pair>
<Pair title="At 7th Level">The enhancement bonus becomes +20.</Pair>
<Pair title="At 11th Level">The enhancement bonus increases to +30.</Pair>
<Pair title="At 15th Level">The enhancement bonus becomes +40.</Pair>
<Pair title="At 19th Level">The enhancement bonus increases to +50.</Pair>
<Pair title="Special">An azatariel in medium or heavy armor or carrying a medium or heavy load loses this extra speed.</Pair>
</Ability>
<Ability id="arc-swashbuckler-azatariel-affection-of-elysium-su" icon={["remedy"]}>
<Pair single id="arc-swashbuckler-azatariel-affection-of-elysium-su" flavor="An azatariel's affection relieves harmful afflictions.">Affection of Elysium (Su)</Pair>
<Pair hl title="Replaces">Bonus feats</Pair>
<Pair title="At 4th Level">An azatariel selects a <Link to="/ability/mercy">mercy</Link> from those available to a paladin whose class level is equal to her swashbuckler level. She can show her affection to a willing, adjacent creature as a <strong className="hl">standard action</strong> to apply the effects of these mercies to the targeted creature, treating her swashbuckler level as her paladin level.</Pair>
<Pair title="Usage">Charisma modifier + <Link to="/misc/one_half">one-half</Link> of her swashbuckler level times/day<ByLevelPop levels={[[4,2],[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} preText="Charisma modifier + " unit="round" postText="/day" /></Pair>
<Pair title="At 8th Level">She selects a 2nd mercy.</Pair>
<Pair title="At 12th Level">She selects a 3rd mercy.</Pair>
<Pair title="At 16th Level">She selects a 4th mercy.</Pair>
<Pair title="At 20th Level">She selects a 5th mercy.</Pair>
</Ability>
</>};
const _courser = {title: "Courser", jsx: <><h2 id="arc-swashbuckler-courser-courser">Courser</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 24</Link><br/>Many <Link to="/race/tengu">tengus</Link> still hold some bitterness at their lack of wings, and while a small number cultivate enough magic in themselves to recall the gift of flight, those tengu denizens of Golarion's greatest cities have refined their own way to fly. Coursers move with grace and ease, racing across rooftops, dashing up walls, and clearing vast gaps between buildings. These daredevils clash for territory and rob vastly superior enemies, trusting in their incredible speed and mobility to keep them safe rather than resorting to swordplay.</p>
<Ability id="arc-swashbuckler-courser-swift-target-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-swashbuckler-courser-swift-target-ex">Swift Target (Ex)</Pair>
<Pair hl title="Replaces">Opportune parry and riposte</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The courser gains <Link to="/feat/dodge">Dodge</Link> as a bonus feat even if she does not meet the prerequisites.</Pair>
<Pair title="Passive Ability">As long as she has at least 1 panache point and is wearing light armor or no armor, her base speed increases by 5 feet.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-nimble-toes-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-swashbuckler-courser-nimble-toes-ex">Nimble Toes (Ex)</Pair>
<Pair hl title="Alters">Nimble</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The AC bonus gained from the <em>nimble</em> class feature increases by 1 as long as the courser moves at least 20 feet during her turn, though it is reduced by 1 if she does not move at least 10 feet on her turn. These modifiers last until the beginning of the courser's next turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-confounding-target-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-swashbuckler-courser-confounding-target-ex">Confounding Target (Ex)</Pair>
<Pair hl title="Replaces">4th-level bonus feat</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The courser gains <Link to="/feat/spring_attack">Spring Attack</Link> as a bonus feat even if she does not meet the prerequisites.</Pair>
<Pair title="Passive Ability">As long as she has at least 1 panache point and is wearing light armor or no armor, her base speed increases by 10 feet rather than 5 feet.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-courser-deeds">Deeds</Pair>
<Pair title="Ability">A courser gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-wall-run-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-courser-wall-run-ex">Wall Run (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">The courser can run horizontally across vertical surfaces for 1 round by spending 1 panache point. She can perform this deed only while wearing light armor or no armor, and she must end her movement for the round on solid ground or else fall <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title="Special">The courser can use this deed to run straight up vertical surfaces as well, but every 5 feet up counts as 10 feet of movement.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-impossible-leap-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-courser-impossible-leap-ex">Impossible Leap (Ex)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">As long as the courser has at least 1 panache point and is wearing light armor or no armor, she adds her swashbuckler level on all <Link to="/skill/acrobatics">Acrobatics</Link> checks to jump.</Pair>
<Pair title="Immediate Action">She can spend 1 panache point to jump 10 feet in the direction of her choice. This ability can be used to extend another jump or change direction mid-jump. If used in response to an attack, this deed functions as the <Link to="/swashdeed/dodging_panache">dodging panache</Link> deed, but it allows the courser to move 10 feet.</Pair>
</Ability>
<Ability id="arc-swashbuckler-courser-swift-strikes-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-courser-swift-strikes-ex">Swift Strikes (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">The courser can spend 1 panache point to target two separate creatures when she uses the Spring Attack feat. She rolls the attack once and compares the result to each target's Armor Class separately. Additional damage, such as from a critical hit or weapon property, applies to only the first target struck. Her movement still provokes attacks of opportunity normally from any creature she doesn't attack.</Pair>
</Ability>
</>};
const _daring_infiltrator = {title: "Daring Infiltrator", jsx: <><h2 id="arc-swashbuckler-daring_infiltrator-daring-infiltrator">Daring Infiltrator</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 124</Link><br/>Not known for their flashy entrances or for standing out in a crowd, a daring infiltrator uses stealth, disguise, and ruthless guile to pursue her goals. Some of these swashbucklers work to undermine evil organizations, while others are master thieves or mysterious assassins.</p>
<Ability icon={["skills"]} id="arc-swashbuckler-daring_infiltrator-undefined">
<Pair id="arc-swashbuckler-daring_infiltrator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair>
<Pair title="Removed Skills">Diplomacy, Perform, Profession</Pair></Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="Info">In addition to combat feats, a daring infiltrator's bonus feats at 4th, 8th, 12th, 16th, and 20th level can come from the following list: <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/antagonize">Antagonize</Link>, <Link to="/feat/cosmopolitan">Cosmopolitan</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/deft_hands">Deft Hands</Link>, <Link to="/feat/disarming_threat_deed">Disarming Threat Deed</Link>, <Link to="/feat/persuasive">Persuasive</Link>, <Link to="/feat/prodigy">Prodigy</Link>, and <Link to="/feat/skill_focus">Skill Focus</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-quick-tongued-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-quick-tongued-ex">Quick-Tongued (Ex)</Pair>
<Pair hl title="Replaces">Charmed life</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A daring infiltrator gains a +1 bonus on Bluff checks.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-deeds">Deeds</Pair>
<Pair title="Ability">A daring infiltrator gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-clandestine-expertise-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-clandestine-expertise-ex">Clandestine Expertise (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler initiative</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A daring infiltrator with at least 1 panache point gains a +2 bonus on Disguise and Stealth checks.</Pair>
<Pair title="Ability">Also, as long as she has at least 1 panache point, when she successfully aids another with a Disguise or Stealth check, she grants the subject a +4 bonus on the skill check instead of the normal +2.</Pair>
</Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-silence-is-golden-ex" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-silence-is-golden-ex">Silence Is Golden (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When a daring infiltrator with at least 1 panache point succeeds at a <Link to="/rule/trip">trip</Link> or <Link to="/rule/grapple">grapple</Link> combat maneuver check, the target is rendered mute for 1 round. For every 5 by which the result of the combat maneuver check exceeds the opponent's CMD, the target remains mute for an additional round.</Pair>
<Pair title="Special">A mute creature cannot speak, use language-dependent effects or verbal components, or use command words.</Pair>
</Ability>
<Ability id="arc-swashbuckler-daring_infiltrator-authoritative-bluff-ex" extraClasses="subAbility" icon={["rolling-dices","upgrade"]}>
<Pair single id="arc-swashbuckler-daring_infiltrator-authoritative-bluff-ex">Authoritative Bluff (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A daring infiltrator can spend 1 panache point to reroll a Bluff check after the roll is made but before the results are revealed. She must take the result of the second roll, even if it is lower.</Pair>
<Pair title="Ability">Additionally, a daring infiltrator with at least 1 panache point gains a +5 bonus on Bluff checks to pretend to be someone's superior (socially or in the military). If she succeeds at the check, the target obeys any reasonable orders she gives as it would those of an actual superior in the situation.</Pair>
</Ability>
</>};
const _dashing_thief = {title: "Dashing Thief", jsx: <><h2 id="arc-swashbuckler-dashing_thief-dashing-thief">Dashing Thief</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 51</Link><br/>The dashing thief relies on swift swordplay, dazzling charm, and spirited courage to commit audacious acts of thievery. Another thief might break into a noble's house by night, leaving none the wiser, but the dashing thief swings in through a window, charms the noble's servant into handing over the jewelry, and then duels her way out. <Link to="/rule/council_of_thieves">Council of Thieves</Link> heists often involve at least one dashing thief, as their attention-grabbing antics can provide a distraction for subtler agents, and their combat skills can be vital in tight spots. The majority of the Council's dashing thieves are personally trained by Sabriune Misraria - between her renounced family's lust-fueled intrigues and their numerous enslaved succubi, the drow heretic has numerous sources for the tricks and stunts she teaches her agents.</p>
<Ability icon={["skills"]} id="arc-swashbuckler-dashing_thief-undefined">
<Pair id="arc-swashbuckler-dashing_thief-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair>
<Pair title="Removed Skills">Fly, Ride</Pair></Ability>
<Ability id="arc-swashbuckler-dashing_thief-bold-thief-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-swashbuckler-dashing_thief-bold-thief-ex" flavor="A dashing thief fulfills the Council's larcenous goals with style.">Bold Thief (Ex)</Pair>
<Pair hl title="Alters">Derring-do, swashbuckler's edge</Pair>
<Pair title="Ability">Her <Link to="/swashdeed/derring_do">derring-do</Link> and <Link to="/swashdeed/swashbucklers_edge">swashbuckler's edge</Link> deeds apply to Disable Device and Sleight of Hand, but not to Fly and Ride.</Pair>
</Ability>
<Ability id="arc-swashbuckler-dashing_thief-thiefs-confidence-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-dashing_thief-thiefs-confidence-ex" flavor="A dashing thief's panache is fueled by bold acts of thievery.">Thief's Confidence (Ex)</Pair>
<Pair hl title="Replaces">Regain panache from a killing blow</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Ability">Whenever a dashing thief uses the <Link to="/rule/steal">steal</Link> combat maneuver to steal an object worth at least 100 gp &times; her class level from an opponent, she regains 1 panache point. She cannot regain panache in this way from a given opponent more than once per day.</Pair>
</Ability>
<Ability id="arc-swashbuckler-dashing_thief-rogue-talents" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-dashing_thief-rogue-talents" flavor="Council training grants a dashing thief numerous opportunities to learn trade secrets from fellow scoundrels.">Rogue Talents</Pair>
<Pair hl title="Replaces">Bonus feats</Pair>
<Pair title="At 4th Level">A dashing thief gains a <Link to="/ability/rogue_talent">rogue talent</Link>, treating her class level as her rogue level when determining the talents' benefits.</Pair>
<Pair title="At 8th Level">She gains her 2nd such talent.</Pair>
<Pair title="At 12th Level">She gains her 3rd such talent. The dashing thief can now choose from <Link to="/ability/advanced_rogue_talents">advanced rogue talents</Link>, too.</Pair>
<Pair title="At 16th Level">She gains her 4th such talent.</Pair>
<Pair title="At 20th Level">She gains her 5th such talent.</Pair>
</Ability>
<Ability id="arc-swashbuckler-dashing_thief-dazing-charm-deed-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-swashbuckler-dashing_thief-dazing-charm-deed-ex" flavor="A dashing thief takes foes aback with her forwardness, shocking them into submission long enough to rush past or stage a getaway.">Dazing Charm Deed (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Free Action">When she successfully feints against a foe, she can spend 1 panache point to pull the enemy into a quick kiss (or similar gesture). The target is <Link to="/misc/dazed">dazed</Link> for 1 round unless it succeeds at a Will save (DC = 10 + half the dashing thief's class level + her Charisma modifier). A creature dazed this way is immune to that dashing thief's <em>dazing charm</em> deed for 24 hours.</Pair>
<Pair title="Special">Whether or not a creature could potentially be affected by a <em>dazing charm</em> deed is ultimately subject to GM adjudication. As a general rule, however, it works on creatures of the dashing thief's creature type, or on those of a different type but who share significant thematic similarities (for example, a human dashing thief could use her <em>dazing charm</em> deed on any humanoid, but also potentially on creatures as diverse as dryads, tieflings, or even centaurs or sphinxes).</Pair>
</Ability>
<Ability id="arc-swashbuckler-dashing_thief-swaying-charm-deed-su" icon={["magic-swirl"]}>
<Pair single id="arc-swashbuckler-dashing_thief-swaying-charm-deed-su" flavor="A dashing thief eventually becomes truly irresistible.">Swaying Charm Deed (Su)</Pair>
<Pair hl title="Replaces">Dizzying defense</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">When a dashing thief successfully dazes a creature using her <em>dazing charm</em> deed, she can instead charm the target for 1 day (as per <Link to="/spell/charm_monster">charm monster</Link>). Only one creature can be charmed this way at a time; if the dashing thief charms another creature this way, the first charm effect immediately ends.</Pair>
</Ability>
</>};
const _flying_blade = {title: "Flying Blade", jsx: <><h2 id="arc-swashbuckler-flying_blade-flying-blade">Flying Blade</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 124</Link><br/>While most swashbucklers prefer their battles up close, others prefer dealing death from a distance.</p>
<Ability id="arc-swashbuckler-flying_blade-panache" icon={["info"]}>
<Pair single id="arc-swashbuckler-flying_blade-panache">Panache</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Info">Unlike other swashbucklers, a flying blade regains panache only when she confirms a critical hit or makes a killing blow with a <Link to="/eq-weapon/dagger">dagger</Link> or <Link to="/eq-weapon/starknife">starknife</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-flying_blade-deeds">Deeds</Pair>
<Pair title="Ability">A flying blade gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-subtle-throw-ex" extraClasses="subAbility" icon={["bowman","armor-upgrade"]}>
<Pair single id="arc-swashbuckler-flying_blade-subtle-throw-ex">Subtle Throw (Ex)</Pair>
<Pair hl title="Replaces">Dodging panache</Pair>
<Pair title="At 1st Level">A flying blade can spend 1 panache point as part of a ranged attack with a dagger or starknife to make it without provoking attacks of opportunity.</Pair>
<Pair title="At 6th Level">As a <strong className="hl">swift action</strong> she can spend 1 panache point to make all of her ranged attacks with daggers or starknives without provoking attacks of opportunity until the start of her next turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-disrupting-counter-ex" extraClasses="subAbility" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-swashbuckler-flying_blade-disrupting-counter-ex">Disrupting Counter (Ex)</Pair>
<Pair hl title="Replaces">Kip-up</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When an opponent makes a melee attack against her, she can spend 1 panache point to make an attack of opportunity against the attacking foe. This attack of opportunity can be made with either a dagger or a starknife. If the attack hits, the opponent takes a -4 penalty on all attack rolls until the end of its turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-precise-throw-ex" extraClasses="subAbility" icon={["bowman","upgrade"]}>
<Pair single id="arc-swashbuckler-flying_blade-precise-throw-ex">Precise Throw (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">As long as she has at least 1 panache point, a flying blade can use her <Link to="/swashdeed/precise_strike">precise strike</Link> with a thrown dagger or starknife as long as the target is within 60 feet of her, and she increases the range increment of these weapons by 5 feet.</Pair>
<Pair title="Ability">She can spend 1 panache point when she throws a dagger or a starknife to ignore all range increment penalties with that ranged attack.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-targeted-throw-ex" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-swashbuckler-flying_blade-targeted-throw-ex">Targeted Throw (Ex)</Pair>
<Pair hl title="Replaces">Targeted strike</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A flying blade can target individual body parts. This deed functions as the swashbuckler's <Link to="/swashdeed/targeted_strike">targeted strike</Link> deed, but the flying blade can also use this deed when making ranged attacks with either a dagger or a starknife as long as the target is within 60 feet of the flying blade.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-bleeding-wound-ex" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-swashbuckler-flying_blade-bleeding-wound-ex">Bleeding Wound (Ex)</Pair>
<Pair hl title="Alters">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">A flying blade can deal <Link to="/umr/bleed">bleed</Link> damage as part of an attack. This deed functions as the swashbuckler's <Link to="/swashdeed/bleeding_wound">bleeding wound</Link> deed, but the flying blade can also use this deed when making ranged attacks with either a dagger or a starknife as long as the target is within 60 feet of the flying blade.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-perfect-throw-ex" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="arc-swashbuckler-flying_blade-perfect-throw-ex">Perfect Throw (Ex)</Pair>
<Pair hl title="Replaces">Perfect thrust</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A flying blade can pool all of her attack potential into a single attack. This deed functions as the swashbuckler's <Link to="/swashdeed/perfect_thrust">perfect thrust</Link> deed, but the flying blade must use this deed when making ranged attacks with either a dagger or a starknife, and she can use this deed only on targets within 60 feet of her.</Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-flying-blade-training-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-flying_blade-flying-blade-training-ex">Flying Blade Training (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A flying blade gains a +1 bonus on attack and damage rolls when using daggers or starknives in combat.</Pair>
<Pair title="Ability">When a flying blade wields a dagger or starknife, she gains the benefit of the <Link to="/feat/improved_critical">Improved Critical</Link> feat with those weapons. Additionally, a flying blade increases the range increment of a thrown dagger or starknife by 5 feet.</Pair>
<Pair title="At 9th Level">The attack and damage bonus increases to +2 and the range increment is now increased by 10 feet.</Pair>
<Pair title="At 13th Level">The attack and damage bonus increases to +3 and the range increment is now increased by 15 feet.</Pair>
<Pair title="At 17th Level">The attack and damage bonus increases to +4 and the range increment is now increased by 20 feet.</Pair>
<Pair title="Special">The increase of range increment stacks with that of <em>precise throw.</em></Pair>
</Ability>
<Ability id="arc-swashbuckler-flying_blade-flying-blade-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-flying_blade-flying-blade-mastery-ex">Flying Blade Mastery (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When an attack that a flying blade makes with a dagger or starknife threatens a critical hit, that critical hit is automatically confirmed. Furthermore, the critical modifiers of daggers and starknives increase by 1 (&times;2 becomes &times;3, and so on).</Pair>
</Ability>
</>};
const _guiding_blade = {title: "Guiding Blade", jsx: <><h2 id="arc-swashbuckler-guiding_blade-guiding-blade">Guiding Blade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 52</Link><br/>While some swashbucklers are loners or glory hounds, always trying to take the credit for finishing off a foe with little regard for their allies, guiding blades focus their swordplay and panache on helping their allies. For a guiding blade, anything is possible when the right team comes together, and she learns how to protect and bolster her allies to ensure the team's victory. Instead of parrying attacks against her, a guiding blade redirects her enemies' ire away from her allies, interfering with enemies who attack her allies, whether that attack comes by blade or by spell.</p>
<Ability id="arc-swashbuckler-guiding_blade-daring-teamwork-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-guiding_blade-daring-teamwork-ex" flavor="A guiding blade uses her panache to inspire her allies to heights of teamwork they could never reach alone.">Daring Teamwork (Ex)</Pair>
<Pair hl title="Replaces">Bonus feats, 1st-, 7th-, and 15th-level deeds</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="At 1st Level">A guiding blade gains a bonus <Link to="/main/teamwork_feat">teamwork feat</Link>. As a <strong className="hl">standard action</strong>, she can spend 1 panache point to grant a teamwork feat she gained from this ability to all allies within 30 feet who can see and hear her. They do not need to meet the feat's prerequisites. She can use this ability multiple times to grant multiple teamwork feats. This ability lasts for 3 rounds + 1 round for every 2 swashbuckler levels she has, but if the guiding blade ever fails to have at least 1 panache point, all of these durations end immediately.</Pair>
<Pair title="At 4th Level">She gains an additional teamwork feat.</Pair>
<Pair title="At 7th Level">The guiding blade can activate this ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 8th Level">She gains an additional teamwork feat.</Pair>
<Pair title="At 12th Level">She gains an additional teamwork feat.</Pair>
<Pair title="At 15th Level">She can grant two teamwork feats each time she activates this ability, and she can grant any teamwork feats she possesses, not just the teamwork feats she gained from this ability.</Pair>
<Pair title="At 16th Level">She gains an additional teamwork feat.</Pair>
<Pair title="At 20th Level">She gains an additional teamwork feat.</Pair>
<Pair title="Special">A guiding blade regains panache whenever an ally reduces a creature to 0 or fewer hit points, instead of when she herself does so. She still doesn't regain panache from unattended objects, helpless or unaware creatures, or opponents with low Hit Dice.</Pair>
</Ability>
<Ability id="arc-swashbuckler-guiding_blade-charmed-guardian-ex" icon={["shield-reflect"]}>
<Pair single id="arc-swashbuckler-guiding_blade-charmed-guardian-ex">Charmed Guardian (Ex)</Pair>
<Pair hl title="Alters">Charmed life</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">The fortunate nature of a guiding blade's <em>charmed life</em> extends to protect her allies as well. She can use her charmed life ability on a saving throw attempted by any ally within 30 feet, including herself.</Pair>
</Ability>
<Ability id="arc-swashbuckler-guiding_blade-interfering-blade-ex" icon={["shield-reflect"]}>
<Pair single id="arc-swashbuckler-guiding_blade-interfering-blade-ex" flavor="A guiding blade learns how to use her weapon to interfere with enemies' attacks, protecting her allies from peril.">Interfering Blade (Ex)</Pair>
<Pair hl title="Replaces">Nimble</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>As long as the guiding blade is wearing light or no armor, whenever she is aware of an attack against an adjacent ally and would not herself be denied her Dexterity bonus against that attack, the guiding blade grants that ally a +1 bonus to AC against that attack.</p>
<p>For example, if an invisible enemy attacks a guiding blade's ally and the guiding blade can't see that enemy, she would not grant the bonus from interfering blade unless she had the <Link to="/ability/uncanny_dodge">uncanny dodge</Link> ability.</p>
</Pair>
<Pair title="At 7th Level">The bonus becomes +2.</Pair>
<Pair title="At 11th Level">The bonus increases to +3.</Pair>
<Pair title="At 15th Level">The bonus becomes +4.</Pair>
<Pair title="At 19th Level">The bonus increases to +5.</Pair>
<Pair title="Special">This bonus does not stack with any bonus to AC the guiding blade provides with the <Link to="/rule/aid_another_2">aid another</Link> action.</Pair>
</Ability>
<Ability id="arc-swashbuckler-guiding_blade-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-guiding_blade-deeds">Deeds</Pair>
<Pair title="Ability">A guiding blade gains the following deed.</Pair>
</Ability>
<Ability id="arc-swashbuckler-guiding_blade-opportune-redirection-and-riposte-ex" extraClasses="subAbility" icon={["shield-reflect"]}>
<Pair single id="arc-swashbuckler-guiding_blade-opportune-redirection-and-riposte-ex">Opportune Redirection and Riposte (Ex)</Pair>
<Pair hl title="Replaces">Kip-up</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When an opponent threatening both the guiding blade and an adjacent ally attacks that ally, the guiding blade can spend 1 point of panache and expend a use of an attack of opportunity to attempt to redirect the attack to herself. The guiding blade makes an attack roll as if she were making an attack of opportunity; for each size category the attacking creature is larger than the guiding blade, the guiding blade takes a -2 penalty on this roll. If her result is greater than the attacking creature's attack result, the creature's attack is redirected to the guiding blade instead of the guiding blade's adjacent ally. The guiding blade must declare the use of this ability after the creature's attack is announced but before its attack roll is made.</Pair>
<Pair title="Immediate Action">Upon performing a successful redirection, if the guiding blade has at least 1 panache point, the guiding blade can make an attack against the creature whose attack she redirected, provided that creature is within reach.</Pair>
<Pair title="Special">A guiding blade can't select <em>opportune redirection and riposte</em> as a <em>signature deed.</em></Pair>
</Ability>
</>};
const _inspired_blade = {title: "Inspired Blade", jsx: <><h2 id="arc-swashbuckler-inspired_blade-inspired-blade">Inspired Blade</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 125</Link><br/>An inspired blade is both a force of personality and a sage of swordplay dedicated to the perfection of combat with the rapier. They use the science and geometry with swordplay to beautiful and deadly effect.</p>
<Ability id="arc-swashbuckler-inspired_blade-inspired-panache-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-swashbuckler-inspired_blade-inspired-panache-ex">Inspired Panache (Ex)</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Info">Each day, an inspired blade gains a number of panache points equal to her Charisma modifier (minimum 1) and Intelligence modifier (minimum 1), instead of just her Charisma modifier.</Pair>
<Pair title="Special">Unlike other swashbucklers, an inspired blade gains no panache from a killing blow. She gains panache only from scoring a critical hit with a <Link to="/eq-weapon/rapier">rapier</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-inspired_blade-inspired-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-inspired_blade-inspired-finesse-ex">Inspired Finesse (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler finesse</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An inspired blade gains the benefits of <Link to="/feat/weapon_finesse">Weapon Finesse</Link> with the rapier (this ability counts as having the Weapon Finesse feat for the purpose of meeting feat prerequisites) and gains <Link to="/feat/weapon_focus">Weapon Focus</Link> (rapier) as a bonus feat.</Pair>
</Ability>
<Ability id="arc-swashbuckler-inspired_blade-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-inspired_blade-deeds">Deeds</Pair>
<Pair title="Ability">The inspired blade gains the following deed.</Pair>
</Ability>
<Ability id="arc-swashbuckler-inspired_blade-inspired-strike-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-inspired_blade-inspired-strike-ex">Inspired Strike (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">An inspired blade can spend 1 panache point when making an attack with a rapier to gain an insight bonus on that attack roll equal to her Intelligence modifier (minimum +1).</Pair>
<Pair title="Ability">When an inspired blade hits with an attack augmented by <em>inspired strike,</em> she can spend 1 additional panache point to make the hit a critical threat, though if she does so, she does not regain panache if she confirms that critical threat. The cost of this deed cannot be reduced by abilities such as <Link to="/feat/signature_deed">Signature Deed</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-inspired_blade-rapier-training-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-swashbuckler-inspired_blade-rapier-training-ex">Rapier Training (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">An inspired blade gains a +1 bonus on attack rolls and a +2 bonus on damage rolls with rapiers. While wielding a rapier, she gains the benefit of the <Link to="/feat/improved_critical">Improved Critical</Link> feat.</Pair>
<Pair title="At 9th Level">The attack bonus becomes +2 and the damage bonus increases to +3.</Pair>
<Pair title="At 13th Level">The attack bonus becomes +3 and the damage bonus increases to +4.</Pair>
<Pair title="At 17th Level">The attack bonus becomes +4 and the damage bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-swashbuckler-inspired_blade-rapier-weapon-mastery-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-inspired_blade-rapier-weapon-mastery-ex">Rapier Weapon Mastery (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon mastery</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When an inspired blade threatens a critical hit with a rapier, that critical hit is automatically confirmed. Furthermore, the critical threat range increases by 1 (this increase to the critical threat range stacks with the increases from <em>rapier training,</em> to a total threat range of 14-20), and the critical modifier of the weapon increases by 1 (&times;2 becomes &times;3, for example).</Pair>
</Ability>
</>};
const _mouser = {title: "Mouser", jsx: <><h2 id="arc-swashbuckler-mouser-mouser">Mouser</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 125</Link><br/>In the hands of a trained warrior, a well-sharpened blade is deadly regardless of size. A mouser moves in close, using her size and skill as an advantage.</p>
<Ability id="arc-swashbuckler-mouser-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-mouser-deeds">Deeds</Pair>
<Pair title="Ability">The mouser gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mouser-underfoot-assault-ex" extraClasses="subAbility" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-swashbuckler-mouser-underfoot-assault-ex">Underfoot Assault (Ex)</Pair>
<Pair hl title="Replaces">Opportune parry and riposte</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Immediate Action">If a foe whose size is larger than the mouser's is adjacent to her and misses her with a melee attack, the mouser can spend 1 panache point to move 5 feet into an area of the attacker's space. This movement does not count against the mouser's movement the next round, and it doesn't provoke attacks of opportunity. While the mouser is within a foe's space, she is considered to occupy her square within that foe's space.</Pair>
<Pair title="Passive Ability">While the mouser is within her foe's space, the foe takes a -4 penalty on all attack rolls and combat maneuver checks not made against the mouser, and all of the mouser's allies that are adjacent to both the foe and the mouser are considered to be <Link to="/rule/flanking">flanking</Link> the foe. The mouser is considered to be flanking the foe whose space she is within if she is adjacent to an ally who is also adjacent to the foe. The mouser can move within her foe's space and leave the foe's space unhindered and without provoking attacks of opportunity, but if the foe attempts to move to a position where the mouser is no longer in its space, the movement provokes an attack of opportunity from the mouser.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mouser-quick-steal-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-mouser-quick-steal-ex">Quick Steal (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Swift Action">The mouser can spend 1 panache point when she hits a foe larger than her size with a light or one-handed piercing melee weapon to attempt a <Link to="/rule/steal">steal</Link> combat maneuver check against the creature she hit. Using this deed does not provoke an attack of opportunity.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mouser-hamstring-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-mouser-hamstring-ex">Hamstring (Ex)</Pair>
<Pair hl title="Replaces">Targeted strike</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">As long as a mouser has at least 1 panache point when she hits a foe whose size is larger than her own with a light or one-handed piercing melee weapon, she can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver check. Instead of the normal conditions that can be applied with dirty trick, this deed can only <Link to="/misc/stagger">stagger</Link> the target if the check is successful.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mouser-cats-charge-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-mouser-cats-charge-ex">Cat's Charge (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">As long as a mouser has at least 1 panache point, when she <Link to="/rule/charge">charges</Link> a foe whose size is larger than her own, the mouser can end her charge in any space she can reach, not just the closest space. All other requirements of the charge must still be satisfied.</Pair>
</Ability>
</>};
const _musketeer = {title: "Musketeer", jsx: <><h2 id="arc-swashbuckler-musketeer-musketeer">Musketeer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 126</Link><br/>A number of organizations and kingdoms search for warriors who are brave (or foolish) enough to wield firearms on the battlefield. The daring nature of swashbucklers often makes them ideal candidates for such service.</p>
<Ability id="arc-swashbuckler-musketeer-weapon-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-musketeer-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Replaces">Weapon proficiencies</Pair>
<Pair title="Info">A musketeer gains proficiency with all simple weapons and martial weapons, as well as one-handed and two-handed <Link to="/main/equipment_firearms">firearms</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-musketeer-musketeer-instruction-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-musketeer-musketeer-instruction-ex">Musketeer Instruction (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler finesse</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A musketeer gains the benefits of the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feature with the <Link to="/eq-weapon/rapier">rapier</Link> (this counts as having the Weapon Finesse feat for purposes of meeting feat prerequisites), as well as both <Link to="/feat/rapid_reload">Rapid Reload</Link> (musket) and <Link to="/feat/gunsmithing">Gunsmithing</Link> feats as bonus feats.</Pair>
</Ability>
<Ability id="arc-swashbuckler-musketeer-deeds" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-swashbuckler-musketeer-deeds">Deeds</Pair>
<Pair title="Ability">The musketeer gains the following deed.</Pair>
</Ability>
<Ability id="arc-swashbuckler-musketeer-quick-clear-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-musketeer-quick-clear-ex">Quick Clear (Ex)</Pair>
<Pair hl title="Replaces">Dodging panache</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">The musketeer can spend 1 panache point to remove the <Link to="/misc/broken">broken</Link> condition from a single firearm he is currently wielding, as long as the firearm gained that condition through a misfire.</Pair>
</Ability>
</>};
const _mysterious_avenger = {title: "Mysterious Avenger", jsx: <><h2 id="arc-swashbuckler-mysterious_avenger-mysterious-avenger">Mysterious Avenger</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 126</Link><br/>While some swashbucklers fight for queen and country, and others for coin, glory, or just the enhancement of their own reputations, the mysterious avenger fights directly for a cause. Instead of gaining personal glory for her heroic deeds, she keeps her identity hidden in order to fight for those who cannot fight for themselves.</p>
<Ability id="arc-swashbuckler-mysterious_avenger-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-alignment">Alignment</Pair>
<Pair title="Info">A mysterious avenger must be of a good alignment, and must be dedicated to the protection of the good and the powerless under her care. If she ceases to be good or betrays the trust of those she was sworn to protect, she loses her <em>secret identity</em> and <em>greater charmed life</em> class features. She can regain them if she atones for her violations by some means that the GM sees fit (possibly by way of the <Link to="/spell/atonement">atonement</Link> spell if the mysterious avenger is especially religious).</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-swashbuckler-mysterious_avenger-undefined">
<Pair id="arc-swashbuckler-mysterious_avenger-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA)</Pair></Ability>
<Ability id="arc-swashbuckler-mysterious_avenger-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Ability">A mysterious avenger loses her proficiency with bucklers, but gains proficiency in the <Link to="/eq-weapon/whip">whip</Link> exotic weapon.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mysterious_avenger-avenger-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-avenger-finesse-ex">Avenger Finesse (Ex)</Pair>
<Pair hl title="Alters">Swashbuckler finesse</Pair>
<Pair title="Info">A mysterious avenger gains all of the benefits of the <em>swashbuckler finesse</em> class feature, and gains the ability to use a whip in place of a light or one-handed piercing melee weapon for all swashbuckler class features and deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mysterious_avenger-secret-identity-su" icon={["armor-upgrade"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-secret-identity-su" flavor="A mysterious avenger's force of personality and dedication to her cause give her the ability to keep her true identity secret, even from magical prying.">Secret Identity (Su)</Pair>
<Pair hl title="Replaces">Nimble</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">She gains a +4 bonus on Disguise checks in a single disguise of her choice, typically her avenger persona. Once this disguise has been chosen, it can't be changed. She also gains a +4 bonus on saving throws against divination effect.</Pair>
<Pair title="At 11th Level">She becomes immune to all <Link to="/spelldef/scrying">scrying</Link> effects and other magical effects used in attempts to uncover her secret identity.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mysterious_avenger-greater-charmed-life-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-greater-charmed-life-ex">Greater Charmed Life (Ex)</Pair>
<Pair hl title="Replaces">4th-level bonus feat</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The mysterious avenger gains three extra uses of <em>charmed life.</em></Pair>
<Pair title="Immediate Action">She can expend one use of charmed life to gain a bonus to her AC equal to her Charisma modifier (minimum 1). She must choose to do this before the attack roll is made against her.</Pair>
</Ability>
<Ability id="arc-swashbuckler-mysterious_avenger-avengers-target-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-mysterious_avenger-avengers-target-ex">Avenger's Target (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler weapon training</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A mysterious avenger gains a +1 bonus on attack and damage rolls with light or one-handed piercing melee weapons and whips.</Pair>
<Pair title="Move-Equivalent Action">A mysterious avenger can study an opponent she can see. The mysterious avenger then gains a +1 bonus on Bluff, Knowledge, Perception, Sense Motive, and Survival checks against that opponent, a +1 bonus on weapon attack and damage rolls against it, and a +1 bonus to DCs of any deeds used against that opponent. A mysterious avenger can maintain these bonuses against only one opponent at a time; these bonuses remain in effect until either the opponent is dead or the mysterious avenger studies a new target.</Pair>
<Pair title="At 10th Level">The bonuses against studied targets become +2. In addition, she can maintain these bonuses against 2 studied targets at the same time. A mysterious avenger can discard this connection to a studied target as a <strong className="hl">free action</strong>, allowing her to study another target in its place. Finally, a mysterious avenger can study an opponent as a move or <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 15th Level">The bonuses against studied targets become +3. In addition, she can maintain these bonuses against 3 studied targets at the same time.</Pair>
<Pair title="At 20th Level">The bonuses against studied targets become +4. In addition, she can maintain these bonuses against 4 studied targets at the same time.</Pair>
</Ability>
</>};
const _noble_fencer = {title: "Noble Fencer", jsx: <><h2 id="arc-swashbuckler-noble_fencer-noble-fencer">Noble Fencer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 52</Link><br/>The noble fencer is an aristocrat or other upper-class socialite who trained in dueling from a young age. Noble fencers fight with their own style, with distinct differences from those of alley bravos or gladiatorial duelists. They use their quick wits and panache in both physical and social confrontations, and they rely on their training and discipline to emerge victorious, rather than merely trusting to luck.</p>
<Ability id="arc-swashbuckler-noble_fencer-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-noble_fencer-deeds">Deeds</Pair>
<Pair title="Ability">A noble fencer gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-noble_fencer-social-panache-ex" extraClasses="subAbility" icon={["upgrade","rolling-dices"]}>
<Pair single id="arc-swashbuckler-noble_fencer-social-panache-ex">Social Panache (Ex)</Pair>
<Pair hl title="Replaces">Dodging panache</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A noble fencer can spend 1 panache point when he attempts a Bluff, Diplomacy, Intimidate, or Sense Motive check to roll 1d6 and add the result to the check. He can do this after he rolls the check but before the result is revealed. If the result of the d6 roll is a natural 6, he rolls another 1d6 and adds it to the check. He can continue to do this as long as he rolls natural 6s, up to a number of times equal to his Charisma modifier (minimum 1).</Pair>
<Pair title="Ability">Just before a <Link to="/rule/verbal_duels">verbal duel</Link>, a noble fencer can spend up to 4 panache points. For each point he spends, he selects a <em>tactic</em> for which he has chosen Bluff, Diplomacy, Intimidate, or Sense Motive as an associated skill and gains an <em>edge</em> he can only use with that <em>tactic.</em></Pair>
</Ability>
<Ability id="arc-swashbuckler-noble_fencer-incredible-aspirations-ex" extraClasses="subAbility" icon={["upgrade","rolling-dices"]}>
<Pair single id="arc-swashbuckler-noble_fencer-incredible-aspirations-ex" flavor={<>A noble fencer strives for truly amazing results when he uses his <Link to="/swashdeed/derring_do">derring-do</Link> and <em>social panache</em> deeds.</>}>Incredible Aspirations (Ex)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">As long as he has 1 panache point, the first time he rolls a natural 5 on the 1d6 for those deeds, he can roll another 1d6, subject to the other limitations of the respective deeds. He can still reroll as many rolls of 6 as normal.</Pair>
</Ability>
<Ability id="arc-swashbuckler-noble_fencer-unshakable-presence-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-swashbuckler-noble_fencer-unshakable-presence-ex" flavor="A noble fencer cloaks himself in the combined bravado of a swashbuckler and a noble, girding himself against anything that attempts to shake his impossible confidence.">Unshakable Presence (Ex)</Pair>
<Pair hl title="Replaces">Subtle blade</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">While he has at least 1 panache point, he cannot be demoralized by the Intimidate skill.</Pair>
</Ability>
<Ability id="arc-swashbuckler-noble_fencer-aristocratic-discipline-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-swashbuckler-noble_fencer-aristocratic-discipline-ex" flavor="A noble fencer relies on his extremely honed training and discipline to protect his mind, rather than luck.">Aristocratic Discipline (Ex)</Pair>
<Pair hl title="Replaces">Charmed life</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">The noble fencer gains a +1 bonus on Will saves against mind-affecting effects.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
</>};
const _okayo_corsair = {title: "Okayo Corsair", jsx: <><h2 id="arc-swashbuckler-okayo_corsair-okayo-corsair">Okayo Corsair</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 11</Link><br/>An Okayo corsair practices a unique acrobatic martial art that draws inspiration from both the mysticism of monastic combat traditions and the flair of a swashbuckler. This style originated among pirates of the Dragon Empires and has since spread and become popular in the Shackles.</p>
<Ability id="arc-swashbuckler-okayo_corsair-weapon-and-armor-proficiency" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiency</Pair>
<Pair title="Info">Okayo corsairs are proficient with simple weapons and all weapons from the monk <Link to="/ability/weapon_groups">weapon group</Link>, as well as light armor and bucklers.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-okayo-finesse-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-okayo-finesse-ex">Okayo Finesse (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler finesse</Pair>
<Pair title="Ability">An Okayo corsair gains the benefits of the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat with light or one-handed melee weapons from the monk weapon group, and she can use her Charisma score in place of Intelligence and Wisdom for the purpose of meeting prerequisites for combat feats. This ability counts as the Weapon Finesse feat for the purpose of meeting feat prerequisites.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-okayo-panache-ex" icon={["info"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-okayo-panache-ex">Okayo Panache (Ex)</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Ability">An Okayo corsair regains panache only when she confirms a critical hit or makes a killing blow with a light or one-handed weapon from the monk weapon group. Additionally, the Okayo corsair gains the ability to use a light or one-handed monk weapon for her swashbuckler class features, deeds, and feats, even if the weapon is not a piercing weapon, but she can't use other light or one-handed weapons with her class features or deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-deeds">Deeds</Pair>
<Pair title="Ability">An Okayo corsair gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-ki-panache-su" extraClasses="subAbility" icon={["stairs-goal","upgrade","armor-upgrade"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-ki-panache-su" flavor={<>A power similar to a monk's <em>ki</em> awakens within the Okayo corsair.</>}>Ki Panache (Su)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Swift Action">She can spend 1 panache point to gain one of the following three benefits: she can make one additional attack at her highest attack bonus when making a full attack, she can increase her speed by 20 feet for 1 round, or she can give herself a +4 dodge bonus to AC for 1 round.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-slow-fall-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-slow-fall-su">Slow Fall (Su)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The Okayo corsair can spend 1 panache point to slow her descent as per <Link to="/spell/feather_fall">feather fall</Link>, treating her swashbuckler level as her caster level, provided that she is adjacent to a wall.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-high-jump-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-high-jump-su">High Jump (Su)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">So long as the Okayo corsair has at least 1 panache point, she adds her level as a bonus on Acrobatics checks to jump and always counts as having a running start.</Pair>
<Pair title="Swift Action">She can spend 1 panache point to gain a +20 bonus on Acrobatics checks to jump for 1 round.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-abundant-step-su" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-abundant-step-su">Abundant Step (Su)</Pair>
<Pair hl title="Replaces">Dizzying defense</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Move-Equivalent Action">An Okayo corsair can spend 2 panache points to move magically between spaces, as <Link to="/spell/dimension_door">dimension door</Link>. Her caster level for this effect is equal to her swashbuckler level. She can't take other creatures with her when she uses this ability.</Pair>
</Ability>
<Ability id="arc-swashbuckler-okayo_corsair-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-okayo_corsair-bonus-feats">Bonus Feats</Pair>
<Pair hl title="Alters">Bonus feats</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">An Okayo corsair's swashbuckler levels are considered both fighter levels and monk levels for the purpose of meeting <Link to="/main/combat_feat">combat feat</Link> prerequisites.</Pair>
</Ability>
</>};
const _picaroon = {title: "Picaroon", jsx: <><h2 id="arc-swashbuckler-picaroon-picaroon">Picaroon</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 127</Link><br/>While some swashbucklers take pride in their ability to wear down an opponent with great skill at arms and clever positioning, there are those who use firearms to get in close and hit hard.</p>
<Ability id="arc-swashbuckler-picaroon-weapon-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-picaroon-weapon-proficiency">Weapon Proficiency</Pair>
<Pair hl title="Replaces">Weapon proficiency</Pair>
<Pair title="Info">A picaroon gains proficiency with all simple weapons and martial weapons, as well as one-handed <Link to="/main/equipment_firearms">firearms</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-panache" icon={["info"]}>
<Pair single id="arc-swashbuckler-picaroon-panache">Panache</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Info">Unlike other swashbucklers, a picaroon regains panache when she confirms a critical hit or makes a killing blow with a light or one-handed piercing melee weapon or a one-handed firearm.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-picaroon-deeds">Deeds</Pair>
<Pair title="Ability">The picaroon gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-melee-shooter-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-swashbuckler-picaroon-melee-shooter-ex">Melee Shooter (Ex)</Pair>
<Pair hl title="Replaces">Opportune parry and riposte</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">When wielding both a light or one-handed piercing melee weapon and a one-handed firearm, the picaroon can spend 1 panache point to avoid provoking attacks of opportunity with the first ranged attack made by the one-handed firearm during her turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-quick-clear-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-picaroon-quick-clear-ex">Quick Clear (Ex)</Pair>
<Pair hl title="Replaces">Kip-up</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Standard Action">The picaroon can spend 1 panache point to remove the <Link to="/misc/broken">broken</Link> condition from a single one-handed firearm she is currently wielding, as long as the firearm gained that condition through a misfire.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-gun-feint-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-swashbuckler-picaroon-gun-feint-ex" flavor="A picaroon can use the ferocious reputation of firearms to her advantage.">Gun Feint (Ex)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A picaroon with at least 1 panache point can <Link to="/skill/feint">feint</Link> instead of attacking with her firearm as part of a full attack. She can spend 1 panache point to gain a +5 bonus on this check.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-lightning-reload-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-picaroon-lightning-reload-ex">Lightning Reload (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Swift Action">Once per round the picaroon can spend 1 panache point to reload a single barrel of a one-handed firearm. If she has the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat or is using an alchemical cartridge, she can instead reload a single barrel of the weapon as a <strong className="hl">free action</strong> each round. Using this deed doesn't provoke attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-swashbuckler-picaroon-two-weapon-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-picaroon-two-weapon-finesse-ex">Two-Weapon Finesse (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler finesse</Pair>
<Pair title="Ability">A picaroon gains the benefits of the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat with light or one-handed piercing melee weapons. She also gains the effects of the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat as long as she is wielding a light or one-handed piercing melee weapon in one hand and one-handed firearm in the other hand. This ability counts as having both the Weapon Finesse and Two-Weapon Fighting feats for the purposes of meeting feat requirements.</Pair>
</Ability>
</>};
const _rondelero_swashbuckler = {title: "Rondelero Swashbuckler", jsx: <><h2 id="arc-swashbuckler-rondelero_swashbuckler-rondelero-swashbuckler">Rondelero Swashbuckler</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 6</Link><br/>Rondelero swashbucklers are Taldan specialists in an aggressive, lightly armored fighting style that utilizes the falcata and buckler.</p>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-falcata-emphasis-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-falcata-emphasis-ex">Falcata Emphasis (Ex)</Pair>
<Pair hl title="Replaces">Derring-do</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A rondelero swashbuckler is proficient with <Link to="/eq-weapon/falcata">falcatas</Link> and can treat a falcata as a one-handed piercing melee weapon for the purposes of <em>swashbuckler finesse</em> as well as all feats and class abilities that refer to such a weapon.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-rondelero-deeds-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-rondelero-deeds-ex">Rondelero Deeds (Ex)</Pair>
<Pair title="Ability">A rondelero swashbuckler gains the following deeds at the appropriate levels.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-shield-catch-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-shield-catch-ex">Shield Catch (Ex)</Pair>
<Pair hl title="Replaces">Kip-up</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">While he has at least 1 panache point, the rondelero swashbuckler gains a +4 bonus on all combat maneuver checks to <Link to="/rule/disarm">disarm</Link> that he attempts with his <Link to="/eq-armor/buckler">buckler</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-rondelero-chop-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-rondelero-chop-ex">Rondelero Chop (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Immediate Action">When the rondelero swashbuckler hits with a melee attack using a light or one-handed slashing melee weapon, he can spend 1 panache point to attempt a <Link to="/rule/sunder">sunder</Link> combat maneuver check against the target of his attack without provoking attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-shattering-chop-ex" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-shattering-chop-ex">Shattering Chop (Ex)</Pair>
<Pair hl title="Replaces">Perfect thrust</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Full-Round Action">While the rondelero swashbuckler has at least 1 panache point, he can attempt a <em>shattering chop,</em> pooling all of his attack potential into a single melee sunder combat maneuver with a light or one-handed slashing weapon. When he does, he gains a +4 bonus on his combat maneuver check and ignores half of the hardness of the item he sunders.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-buckler-bash-ex" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-buckler-bash-ex">Buckler Bash (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A rondelero swashbuckler can perform a shield bash with a buckler (use the same damage and critical multiplier as for a <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>). He can treat a buckler as a one-handed piercing melee weapon for the purposes of <em>swashbuckler finesse</em> and all feats and class abilities that refer to such a weapon.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-rondelero-flexibility-ex" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-rondelero-flexibility-ex">Rondelero Flexibility (Ex)</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">As a full-attack action, a rondelero swashbuckler wielding a falcata in one hand and a buckler in the other can alternate between using his falcata and his buckler for each attack. This does not grant additional attacks or incur penalties as two-weapon fighting does, and does not cause her to lose his Armor Class bonus from her buckler.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rondelero_swashbuckler-charmed-life-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rondelero_swashbuckler-charmed-life-ex">Charmed Life (Ex)</Pair>
<Pair hl title="Alters">Charmed life</Pair>
<Pair title="At 10th Level">A rondelero swashbuckler does not gain <em>charmed life</em> until 10th level, at which point he can use the ability only once per day.</Pair>
<Pair title="At 14th Level">He can use it twice a day.</Pair>
<Pair title="At 18th Level">He can use this three times per day.</Pair>
</Ability>
</>};
const _rostland_bravo = {title: "Rostland Bravo", jsx: <><h2 id="arc-swashbuckler-rostland_bravo-rostland-bravo">Rostland Bravo</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 23</Link><br/>The Free City of Restov is host to numerous dueling schools, from the renowned Aldori Academy to tiny training grounds in blademasters' homes. Students of these schools are notoriously competitive, and street-corner duels at dawn and dusk are a constant of Restov life. In most cases, while these "lesser schools" do not teach official Aldori techniques, their methods mesh well with that signature style. Unsurprisingly, many students eventually train in the Aldori style, whether because they aspire to join the swordlords' ranks or simply for the challenge of mastering the legendary weapon. While some favor more technical approaches, others study flashier maneuvers, wielding the curved blade with artful flair. Disdainfully called "bravos" by classically trained rivals, students of this approach have claimed the label with pride. The Rostland bravos' most advanced techniques bear dragon-themed names as a snub to traditionalist Aldori swordlords, who have never forgotten their crushing defeat by Choral the Conqueror's dragons at the Valley of Fire.</p>
<Ability icon={["skills"]} id="arc-swashbuckler-rostland_bravo-undefined">
<Pair id="arc-swashbuckler-rostland_bravo-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="Removed Skills">Climb, Swim</Pair></Ability>
<Ability id="arc-swashbuckler-rostland_bravo-aldori-swashbuckler-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-aldori-swashbuckler-ex">Aldori Swashbuckler (Ex)</Pair>
<Pair hl title="Alters">Armor proficiencies</Pair>
<Pair title="Ability">A Rostland bravo focuses on the <Link to="/eq-weapon/aldori_dueling_sword">Aldori dueling sword</Link>, scorning the bucklers used by duelists of other styles. In addition, the relative safety and creature comforts allowed by life in the sprawling city of Restov reduces her need for athleticism. A Rostland bravo gains <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (Aldori dueling sword) as a bonus feat.</Pair>
<Pair title="Special">The Rostland bravo is not proficient with bucklers.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rostland_bravo-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-deeds">Deeds</Pair>
<Pair title="Ability">A Rostland bravo's training and personality set her apart from the typical swashbuckler, and as a result of these differences (as well as the impact of her Aldori training), she gains the following deeds.</Pair>
<Pair title="Special">These deeds function only when the bravo is wielding just an Aldori dueling sword.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rostland_bravo-inevitable-victory-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-inevitable-victory-ex" flavor="The Rostland bravo's technique is all about flair; a display of her skill is enough to make any Restov brawler reconsider picking a fight.">Inevitable Victory (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="At 3rd Level">The Rostland bravo gains <Link to="/feat/dazzling_display">Dazzling Display</Link> as a bonus feat. She can activate its effect only while wielding an Aldori dueling sword, and she must spend 1 panache point to do so.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rostland_bravo-sweeping-wind-feint-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-sweeping-wind-feint-ex" flavor="The Rostland bravo masters an exotic feinting style, tossing her blade to the other hand and performing a sweeping attack or upward slash before the opponent reacts.">Sweeping Wind Feint (Ex)</Pair>
<Pair hl title="Replaces">Superior feint</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Swift Action">Once per round, she can spend 1 point of panache to attempt a <Link to="/skill/feint">feint</Link>.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rostland_bravo-dragons-rage-ex" extraClasses="subAbility" icon={["mailed-fist","upgrade"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-dragons-rage-ex" flavor="The Rostland bravo can cast aside restraint in favor of a blindingly fast assault of unpredictable strikes inspired in part by the overwhelming brutality of a dragon in combat.">Dragon's Rage (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">Once per round as part of a full attack, the bravo can spend 1 panache point to make an additional attack with her Aldori dueling sword at her highest attack bonus. If she reduces a creature to 0 or fewer hit points with this additional attack, she regains 2 panache points rather than the normal 1 point she would gain from striking a killing blow.</Pair>
</Ability>
<Ability id="arc-swashbuckler-rostland_bravo-terror-of-the-great-wyrm-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-rostland_bravo-terror-of-the-great-wyrm-ex">Terror of the Great Wyrm (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler's edge</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The Rostland bravo can use her <em>inevitable victory</em> deed as part of a full attack or <em>dragon's rage.</em> If a creature demoralized in this way would be <Link to="/misc/shaken">shaken</Link> for 3 or more rounds, the Rostland bravo can make the target <Link to="/misc/frightened">frightened</Link> for 1 round before becoming shaken for the appropriate duration.</Pair>
</Ability>
</>};
const _shackles_corsair = {title: "Shackles Corsair", jsx: <><h2 id="arc-swashbuckler-shackles_corsair-shackles-corsair">Shackles Corsair</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 22</Link><br/>While it doesn't take much more than a ship and a crew in the Shackles to become a pirate, Shackles corsairs are a finer breed of freebooter. A Shackles corsair's debonair charm and style make her a paradoxical celebrity even among the nations whose ships she plunders.</p>
<Ability id="arc-swashbuckler-shackles_corsair-swagger-ex" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="arc-swashbuckler-shackles_corsair-swagger-ex" flavor="A Shackles corsair's confident swagger unnerves her foes and inspires her crew.">Swagger (Ex)</Pair>
<Pair hl title="Replaces">Nimble</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">She gains a +1 bonus on Intimidate checks, and the DC of Intimidate checks made against her increases by 1. She and her allies gain a +1 morale bonus on Profession (sailor) checks.</Pair>
<Pair title="At 7th Level">These bonuses become +2 and her Intimidate DC now increases by 2. In addition, if she succeeds at a saving throw against an opponent's attack or ability while using <em>charmed life</em> on that save, she can attempt an Intimidate check to demoralize that opponent without using an action.</Pair>
<Pair title="At 11th Level">These bonuses become +3 and her Intimidate DC now increases by 3.</Pair>
<Pair title="At 15th Level">These bonuses become +4 and her Intimidate DC now increases by 4.</Pair>
<Pair title="At 19th Level">These bonuses become +5 and her Intimidate DC now increases by 5.</Pair>
</Ability>
<Ability id="arc-swashbuckler-shackles_corsair-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-shackles_corsair-deeds">Deeds</Pair>
<Pair title="Ability">A Shackles corsair gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-shackles_corsair-eyes-of-abendego-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-shackles_corsair-eyes-of-abendego-ex" flavor="Every true Shackles captain dreams of winning the Free Captain's Regatta, and the wise begin training for it early.">Eyes of Abendego (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler initiative</Pair>
<Pair title="At 3rd Level">Whenever she has at least 1 panache point, a Shackles corsair can see three times as far as normal in nonmagical fog. In magical fog, she can see normally for 10 feet; after that, creatures and objects have partial <Link to="/rule/concealment">concealment</Link> for the next 10 feet and total concealment thereafter.</Pair>
</Ability>
<Ability id="arc-swashbuckler-shackles_corsair-plunder-ex" extraClasses="subAbility" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-shackles_corsair-plunder-ex" flavor="A Shackles corsair knows she doesn't always need to win the fight - she just needs to get what she came for.">Plunder (Ex)</Pair>
<Pair hl title="Replaces">Targeted strike</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Full-Round Action">She can make a single attack with a light or one-handed piercing melee weapon against a foe that is either <Link to="/misc/shaken">shaken</Link> or denied its Dexterity bonus to AC. If the attack hits, the Shackles corsair also pilfers a small, loose item from her target as if she had succeeded at a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> or <Link to="/rule/steal">steal</Link> combat maneuver check. She doesn't need to attempt a Sleight of Hand check, but if she does so and surpasses the target's opposed Perception check, the target is unaware that the item is stolen.</Pair>
</Ability>
</>};
const _veiled_blade = {title: "Veiled Blade", jsx: <><h2 id="arc-swashbuckler-veiled_blade-veiled-blade">Veiled Blade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 53</Link><br/>Veiled blades specialize in subtlety, not through clandestine sneaking but simply by appearing to be someone harmless and unarmed. When a fight breaks out, a veiled blade doffs that facade and pulls out her hidden trump cards. Those who have mastered the art of the veiled blade can even hide their weapons on their own bodies as brands.</p>
<Ability icon={["skills"]} id="arc-swashbuckler-veiled_blade-undefined">
<Pair id="arc-swashbuckler-veiled_blade-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA)</Pair>
<Pair title="Removed Skills">Intimidate</Pair></Ability>
<Ability id="arc-swashbuckler-veiled_blade-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-veiled_blade-deeds">Deeds</Pair>
<Pair title="Ability">A veiled blade gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-veiled_blade-quick-draw-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-veiled_blade-quick-draw-ex">Quick Draw (Ex)</Pair>
<Pair hl title="Replaces">Opportune parry and riposte</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever she has at least 1 panache point, a veiled blade gains the benefits of the <Link to="/feat/quick_draw">Quick Draw</Link> feat.</Pair>
</Ability>
<Ability id="arc-swashbuckler-veiled_blade-hidden-blade-ex" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-swashbuckler-veiled_blade-hidden-blade-ex">Hidden Blade (Ex)</Pair>
<Pair hl title="Replaces">Menacing swordplay</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">Whenever she has at least 1 panache point, a veiled blade can hide any light or one-handed piercing melee weapon using Sleight of Hand, and she receives a +4 insight bonus on her check to hide the weapon.</Pair>
</Ability>
<Ability id="arc-swashbuckler-veiled_blade-instant-unveil-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-veiled_blade-instant-unveil-ex">Instant Unveil (Ex)</Pair>
<Pair hl title="Replaces">Swashbuckler's grace</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">When she uses her <Link to="/swashdeed/swashbuckler_initiative">swashbuckler initiative</Link> deed to draw a light or one-handed piercing weapon as part of an initiative check, she can draw that weapon even if it is hidden.</Pair>
</Ability>
<Ability id="arc-swashbuckler-veiled_blade-soul-veil-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-swashbuckler-veiled_blade-soul-veil-sp">Soul Veil (Sp)</Pair>
<Pair hl title="Replaces">Swashbuckler's edge</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A veiled blade can merge a light or one-handed piercing melee weapon with herself, as if using the spell <Link to="/spell/ghost_brand">ghost brand</Link>, except that it takes only a <strong className="hl">swift action</strong> to manifest or store the weapon. This ability lasts until it is dispelled or until the veiled blade merges with a different light or one-handed piercing melee weapon.</Pair>
</Ability>
</>};
const _whirling_dervish = {title: "Whirling Dervish", jsx: <><h2 id="arc-swashbuckler-whirling_dervish-whirling-dervish">Whirling Dervish</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 23</Link><br/>In Qadira and throughout the Padishah Empire, <Link to="/faith/sarenrae">Sarenrae's</Link> worshipers praise the Dawnflower through dance. Her more warlike followers adapted these dances into graceful martial forms, and their swashbuckling style is feared throughout the Inner Sea region and beyond for its ability to devastate foes with a scimitar through motion and agility regardless of strength of arms.</p>
<Ability id="arc-swashbuckler-whirling_dervish-dervish-finesse-ex" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-dervish-finesse-ex">Dervish Finesse (Ex)</Pair>
<Pair hl title="Alters">Swashbuckler finesse</Pair>
<Pair title="Ability">A whirling dervish can treat a <Link to="/eq-weapon/scimitar">scimitar</Link> as a one-handed piercing melee weapon for the purposes of <em>swashbuckler finesse</em> and all feats and class abilities that refer to such a weapon. She must not be carrying a weapon or shield in her off hand to gain this benefit.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-dawnflowers-mercy-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-dawnflowers-mercy-ex" flavor="While violence is sometimes necessary to cleanse evil, Sarenrae's desire for redemption prevents her dervishes from reveling in a foe's defeat.">Dawnflower's Mercy (Ex)</Pair>
<Pair hl title="Alters">Panache</Pair>
<Pair title="Ability">A whirling dervish does not gain any panache for dropping a foe below 0 hit points unless that foe is an evil outsider or undead, or if the damage she dealt was nonlethal.</Pair>
<Pair title="Special">Additionally, she gains 1 panache point if she causes an evildoer with a number of Hit Dice equal to at least 1/2 her character level to surrender to her. She can gain this benefit no more than once per round, even if multiple enemies surrender.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-dervish-dance-ex" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-dervish-dance-ex">Dervish Dance (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A whirling dervish can use her Dexterity modifier instead of her Strength modifier on melee damage rolls when using her <em>swashbuckler finesse.</em> She counts as having the <Link to="/feat/dervish_dance">Dervish Dance</Link> feat for purposes of meeting feat prerequisites.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-deeds" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-deeds">Deeds</Pair>
<Pair title="Ability">A whirling dervish gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-whirlwind-dance-ex" icon={["mailed-fist"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-whirlwind-dance-ex" flavor="A whirling dervish can sweep through her opponents' lines like a cyclone.">Whirlwind Dance (Ex)</Pair>
<Pair hl title="Replaces">Superior feint, targeted strike</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Full-Round Action">She can spend 1 panache point to move up to her speed. She can make attacks against creatures with her reach during this movement, up to the number of attacks she's entitled to with a full attack. Each attack is made at her highest attack bonus, and must target a different creature. This movement provokes attacks of opportunity as normal.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-dance-of-dawn-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-dance-of-dawn-ex">Dance of Dawn (Ex)</Pair>
<Pair hl title="Replaces">Bleeding wound</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">Whenever a whirling dervish is in conditions of <Link to="/rule/dim_light">dim light</Link> or brighter and hits with a melee attack, she can spend 1 panache point to reflect the light off her blade into the eyes of her target. That opponent is <Link to="/misc/blinded">blinded</Link> for 1 round. A successful Fortitude save (DC = 10 + 1/2 the whirling dervish's class level + her Dexterity modifier) negates this effect.</Pair>
</Ability>
<Ability id="arc-swashbuckler-whirling_dervish-dance-of-mercy-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="arc-swashbuckler-whirling_dervish-dance-of-mercy-ex">Dance of Mercy (Ex)</Pair>
<Pair hl title="Replaces">Deadly stab</Pair>
<Pair title="Gained">At 19th Level</Pair>
<Pair title="Ability">When a whirling dervish confirms a critical hit with a light or one-handed piercing melee weapon, in addition to the normal damage, she can spend 1 panache point to inflict a deadly stab. The target must succeed at a Fortitude saving throw (DC = 10 + 1/2 the dervish's class level + her Dexterity modifier) or take an amount of nonlethal damage equal to its current hit points + 1, as well as becomes <Link to="/rule/paralyzed">paralyzed</Link> for 1 hour. Performing this deed doesn't grant the swashbuckler a panache point.</Pair>
</Ability>
</>};
const _wildstrider = {title: "Wildstrider", jsx: <><h2 id="arc-swashbuckler-wildstrider-wildstrider">Wildstrider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 96</Link><br/>Most swashbucklers call cities their home, but some prefer deserts, marshlands, mountains, or woods, where the rough terrain grants them an advantage, and have little interest in the comforts of an urban lifestyle.</p>
<Ability icon={["skills"]} id="arc-swashbuckler-wildstrider-undefined">
<Pair id="arc-swashbuckler-wildstrider-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_nature">Knowledge (nature)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX), <Link to="/skill/survival">Survival</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (nobility), Sense Motive, Sleight of Hand</Pair></Ability>
<Ability id="arc-swashbuckler-wildstrider-deeds" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-swashbuckler-wildstrider-deeds">Deeds</Pair>
<Pair title="Ability">A wildstrider gains the following deeds.</Pair>
</Ability>
<Ability id="arc-swashbuckler-wildstrider-subterfuge-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-wildstrider-subterfuge-ex">Subterfuge (Ex)</Pair>
<Pair hl title="Replaces">Dodging panache</Pair>
<Pair hl title="Alters">derring-do, swashbuckler's edge</Pair>
<Pair title="At 1st Level">A wildstrider adds Stealth to the list of skills to which the <Link to="/swashdeed/derring_do">derring-do</Link> deed applies.</Pair>
<Pair title="At 15th Level">She adds Stealth to the list of skills on which she can take 10 using the <Link to="/swashdeed/swashbucklers_edge">swashbuckler's edge</Link> deed.</Pair>
</Ability>
<Ability id="arc-swashbuckler-wildstrider-adroit-step-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-wildstrider-adroit-step-ex">Adroit Step (Ex)</Pair>
<Pair hl title="Replaces">Kip-up</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Swift Action">A wildstrider can treat a 5-foot square of <Link to="/rule/difficult_terrain">difficult terrain</Link> as if it were normal terrain. If she also spends a panache point, she can treat all difficult terrain as though it were normal terrain until the end of her turn.</Pair>
</Ability>
<Ability id="arc-swashbuckler-wildstrider-keen-gaze-ex" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-swashbuckler-wildstrider-keen-gaze-ex">Keen Gaze (Ex)</Pair>
<Pair hl title="Replaces">Subtle blade</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">While a wildstrider has at least 1 panache point, she can ignore the miss chance from <Link to="/rule/concealment">concealment</Link> (but not total concealment) caused by normal and magical fog, smoke, and undergrowth, but not other sources of concealment or a miss chance, such as <Link to="/spell/blur">blur</Link>.</Pair>
</Ability>
</>};
export default {arrow_champion:_arrow_champion,azatariel:_azatariel,courser:_courser,daring_infiltrator:_daring_infiltrator,dashing_thief:_dashing_thief,flying_blade:_flying_blade,guiding_blade:_guiding_blade,inspired_blade:_inspired_blade,mouser:_mouser,musketeer:_musketeer,mysterious_avenger:_mysterious_avenger,noble_fencer:_noble_fencer,okayo_corsair:_okayo_corsair,picaroon:_picaroon,rondelero_swashbuckler:_rondelero_swashbuckler,rostland_bravo:_rostland_bravo,shackles_corsair:_shackles_corsair,veiled_blade:_veiled_blade,whirling_dervish:_whirling_dervish,wildstrider:_wildstrider}