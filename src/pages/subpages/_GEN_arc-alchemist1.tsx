import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _aerochemist = {title: "Aerochemist", jsx: <><h2 id="arc-alchemist-aerochemist-aerochemist">Aerochemist</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 27</Link><br/>Although the specifics of the Aeromantic Infadibulum are lost to time, aerochemists are able to emulate and replicate aspects of this lost magic. Aerochemists use scraps of Shory's magic in their concoctions to gain personal powers of flight.</p>
<Ability id="arc-alchemist-aerochemist-aeromantic-concoction-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-alchemist-aerochemist-aeromantic-concoction-su">Aeromantic Concoction (Su)</Pair>
<Pair hl title="Replaces">Mutagen, swift poisoning, persistent mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>An aerochemist learns to craft a special alchemical concoction. It takes 10 minutes to brew a dose of this concoction, and once brewed, it remains potent until used. An aerochemist can maintain only 1 dose of this concoction at a time: if he brews a second dose, any existing concoction becomes inert. As with an extract or bomb, an aeromantic concoction that is not in the aerochemist's possession becomes inert until he picks it up again. Anyone other than the aerochemist who attempts to drink his aeromantic concoction is affected in the same fashion as is a non-alchemist who drinks an alchemist's mutagen.</p>
<p>When consumed, an aerochemist's aeromantic concoction makes his body become incredibly buoyant for 10 minutes per alchemist level. The concoction grants the aerochemist a +5 bonus on Acrobatics checks to attempt high jumps or long jumps, and he is always treated as having a running start when attempting long jumps. In addition, the aerochemist gains the benefits of <Link to="/spell/feather_fall">feather fall</Link> for the concoction's duration.</p>
<p>An aerochemist with the <Link to="/discovery/infusion">infusion</Link> discovery can instead create a shared alchemical concoction intended for his allies. This shared concoction grants the same benefits as the normal aeromantic concoction, except the duration is only 1 minute per alchemist level its creator has. An aerochemist can have only a standard concoction or shared concoction in effect, not both.</p>
</Pair>
<Pair title="At 6th Level">The aerochemist gains the benefits of <Link to="/spell/fly">fly</Link> for the concoction's duration.</Pair>
<Pair title="At 10th Level">The aerochemist can choose to gain the benefits of <Link to="/spell/air_walk">air walk</Link> instead of <em>fly</em> for the concoction's duration.</Pair>
<Pair title="At 14th Level">The duration of the concoction increases to 1 hour per alchemist level, or 10 minutes per alchemist level if shared.</Pair>
<Pair title="Special">An aeromantic alchemist can never gain the <em>mutagen, cognatogen,</em> or <em>inspired cognatogen</em> ability, even from a discovery or another class.</Pair>
</Ability>
<Ability id="arc-alchemist-aerochemist-bombs-away-ex" icon={["bowman"]}>
<Pair single id="arc-alchemist-aerochemist-bombs-away-ex">Bombs Away (Ex)</Pair>
<Pair hl title="Replaces">Poison use, swift alchemy</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aerochemist becomes an expert at attacking from above. He gains a +1 bonus on attack rolls made with thrown weapons against targets that are at least 10 feet below him.</Pair>
<Pair title="At 6th Level">This bonus becomes +2.</Pair>
<Pair title="At 10th Level">This bonus increases to +3.</Pair>
<Pair title="At 14th Level">This bonus becomes +4.</Pair>
<Pair title="At 18th Level">This bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-alchemist-aerochemist-aerodynamic-prowess-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-aerochemist-aerodynamic-prowess-su">Aerodynamic Prowess (Su)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aerochemist gains a +2 bonus on Fly checks.</Pair>
<Pair title="At 5th Level">This bonus increases to +4.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
</Ability>
</>};
const _alchemical_sapper = {title: "Alchemical Sapper", jsx: <><h2 id="arc-alchemist-alchemical_sapper-alchemical-sapper">Alchemical Sapper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 18</Link><br/>Alchemical sappers are trained to create explosives.</p>
<Ability id="arc-alchemist-alchemical_sapper-diminished-alchemy" icon={["broken-shield"]}>
<Pair single id="arc-alchemist-alchemical_sapper-diminished-alchemy">Diminished Alchemy</Pair>
<Pair hl title="Alters">Extracts</Pair>
<Pair title="Passive Ability">An alchemical sapper can prepare one fewer extract of each level than normal. If this reduces the number to 0, he can prepare extracts of that level only if his Intelligence allows bonus extracts of that level.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-alchemist-alchemical_sapper-undefined">
<Pair id="arc-alchemist-alchemical_sapper-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT), <Link to="/skill/stealth">Stealth</Link> (DEX)</Pair></Ability>
<Ability id="arc-alchemist-alchemical_sapper-demolition-bomb-su" icon={["stairs-goal","bowman"]}>
<Pair single id="arc-alchemist-alchemical_sapper-demolition-bomb-su">Demolition Bomb (Su)</Pair>
<Pair hl title="Alters">Bomb</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">An alchemical sapper can only expend one use of his bomb class feature to create a demolition bomb once per day.</Pair>
<Pair title="Ability">An alchemical sapper can create a demolition bomb. This bomb deals double his normal bomb damage, half of which is bludgeoning and piercing damage, the other half of which is fire damage. This bomb ignores a number of points of hardness up to <Link to="/misc/half">half</Link> the alchemical sapper's level (minimum 1).</Pair>
<Pair title="At 5th Level">He can create two demolition bombs per day.</Pair>
<Pair title="At 9th Level">He can create three demolition bombs per day.</Pair>
<Pair title="At 13th Level">He can create four demolition bombs per day.</Pair>
<Pair title="At 17th Level">He can create five demolition bombs per day.</Pair>
<Pair title="Special">This counts as an ability that modifies the alchemical sapper's bomb, so it doesn't stack with other discoveries that modify bombs (Primary Bomb Discoveries). The alchemical sapper can't use his demolition bomb with the <Link to="/discovery/fast_bombs">fast bombs</Link> discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_sapper-delayed-bomb-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-alchemical_sapper-delayed-bomb-su">Delayed Bomb (Su)</Pair>
<Pair hl title="Replaces">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An alchemical sapper gains the <Link to="/discovery/delayed_bomb">delayed bomb</Link> discovery at 1st level.</Pair>
<Pair title="Special">He does not qualify for the <Link to="/discovery/mutagen">mutagen</Link> or <Link to="/discovery/cognatogen">cognatogen</Link> discoveries until 8th level.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_sapper-master-engineer-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-alchemical_sapper-master-engineer-ex">Master Engineer (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An alchemical sapper adds 1/2 his alchemist level to Knowledge (engineering) checks, Craft (stonemasonry) checks, and Craft (traps) checks.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_sapper-camouflage-bomb-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-alchemical_sapper-camouflage-bomb-ex">Camouflage Bomb (Ex)</Pair>
<Pair hl title="Replaces">Swift alchemy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">When deploying a <em>delayed bomb</em> or <em>trip mine</em> (see below), the alchemical sapper can camouflage the bomb by taking an additional full-round action. Creatures searching for traps must succeed at a Perception check (DC = 10 + the alchemical sapper's alchemist level + his Intelligence modifier) to notice a camouflaged bomb.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_sapper-trip-mine-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-alchemical_sapper-trip-mine-su">Trip Mine (Su)</Pair>
<Pair hl title="Replaces">The discovery gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An alchemical sapper can expend two uses of his bomb class feature to prepare a special kind of trap called a <em>trip mine.</em> This special bomb remains inert until 1 round after it leaves the alchemical sapper's possession, after which time it becomes armed. When a creature enters a square containing an armed trip mine, it explodes, dealing normal bomb damage to all creatures in its square (DC = 10 + 1/2 the alchemical sapper's alchemist level + his Intelligence modifier; Reflex half) and splash damage to every creature adjacent to that square. A trip mine can be disarmed with a successful Disable Device check (with a DC equal to the trip mine's save DC); otherwise, it lasts until the next time the alchemical sapper refreshes his daily bombs.</Pair>
<Pair title="Special">If the alchemical sapper expends four uses of his bomb class feature, his trip mine deals damage as per a <em>demolition bomb;</em> this does not count against his daily uses of the demolition bomb ability. Other than <em>demolition bomb,</em> discoveries that modify bombs cannot apply to trip mine.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_sapper-selective-detonation-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-alchemical_sapper-selective-detonation-su">Selective Detonation (Su)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">When an alchemical sapper plants a <em>trip mine,</em> he can designate a number of allies up to his Intelligence modifier, allowing the designated allies to pass safely through an armed trip mine's square without causing it to detonate. If another creature triggers the trip mine while an ally is nearby, the ally still takes damage as normal.</Pair>
</Ability>
</>};
const _alchemical_trapper = {title: "Alchemical Trapper", jsx: <><h2 id="arc-alchemist-alchemical_trapper-alchemical-trapper">Alchemical Trapper</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 128</Link><br/>Because kobolds rely on <Link to="/rule/traps">traps</Link> to soften up enemies, kobold alchemists learn to turn bombs into traps. When such alchemists are preparing defenses against larger creatures that might enter their tunnels and attempt to exterminate them, their skills mean the difference between life and death.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-alchemical_trapper--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/kobold">Kobold</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-alchemist-alchemical_trapper-bomb-trap-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-alchemical_trapper-bomb-trap-su">Bomb Trap (Su)</Pair>
<Pair hl title="Replaces">The discovery at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Full-Round Action">Creating a bomb trap uses one of the alchemical trapper's bombs per day. A bomb trap fills a single 5-foot square and cannot be placed in the same area as any other trap.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="Special">The alchemical trapper needs the same materials required for making a bomb. The DCs for Perception checks to notice the trap, Disable Device checks to disable it, and saving throws to avoid it are equal to the DC for the alchemical trapper's bombs. All bomb traps have location triggers and do not reset. The alchemical trapper can use any one discovery that applies to a bomb (Primary Bomb Discovery) when making a bomb trap. The bomb trap lasts 10 minutes for each alchemist level the trapper possesses. If the bomb trap is not disabled or exploded within that time frame, the trap becomes inert.</Pair>
</Ability>
<Ability id="arc-alchemist-alchemical_trapper-trapfinding-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-alchemical_trapper-trapfinding-ex">Trapfinding (Ex)</Pair>
<Pair hl title="Replaces">The discovery at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">An alchemical trapper can find and disable traps, as the <Link to="/ability/trapfinding">trapfinding</Link> class feature of the <Link to="/class/rogue">rogue</Link>.</Pair>
</Ability>
</>};
const _aquachymist = {title: "Aquachymist", jsx: <><h2 id="arc-alchemist-aquachymist-aquachymist">Aquachymist</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 49</Link><br/>The principles of alchemy work equally well underwater and on land, but mixing solutions and keeping them pure is a tougher task beneath the waves. Aquachymists are those rare few alchemists of land-dwelling and aquatic races alike who strive to unlock new and fantastic secrets of alchemy that can be discovered only in the water's depths.</p>
<Ability icon={["skills"]} id="arc-alchemist-aquachymist-undefined">
<Pair id="arc-alchemist-aquachymist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/swim">Swim</Link> (STR)</Pair>
<Pair title="Removed Skills">Fly</Pair></Ability>
<Ability id="arc-alchemist-aquachymist-sureseal-alchemy-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-aquachymist-sureseal-alchemy-su">Sureseal Alchemy (Su)</Pair>
<Pair hl title="Alters">Alchemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An aquachymist's extracts and mutagens self-generate a flexible outer shell of <em>sureseal,</em> similar to <Link to="/eq-misc/sureseal_bladder_mundane">sureseal bladders</Link>, allowing the aquachymist to craft a waterproof supply without expending a plethora of sureseal bladders.</Pair>
</Ability>
<Ability id="arc-alchemist-aquachymist-underwater-bombs-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-alchemist-aquachymist-underwater-bombs-su">Underwater Bombs (Su)</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An aquachymist's fire bombs deal steam damage, allowing them to deal damage underwater or on land. Since thrown weapons don't work well underwater, when the aquachymist creates a bomb, he either weights it or includes excess air as part of the action of creating the bomb, granting the bomb his choice of swiftly rising or swiftly sinking <Link to="/rule/buoyancy">buoyancy</Link> and allowing him to target foes directly above or below him. If the attack misses, the bomb doesn't deal splash damage, but instead continues to travel up or down until it loses potency at the end of the alchemist's turn; the exception is when the aquachymist throws a swiftly sinking bomb close to the bottom, in which case it might reach the bottom and explode there.</Pair>
<Pair title="Special">Because of the strange aquadynamic features of the aquachymist's underwater bombs, they have a range increment of only 5 feet above the water.</Pair>
</Ability>
<Ability id="arc-alchemist-aquachymist-amphibious-mutagen-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-aquachymist-amphibious-mutagen-su">Amphibious Mutagen (Su)</Pair>
<Pair hl title="Replaces">The discovery at 2nd level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aquachymist's mutagen allows him to breathe both air and water for its duration, in addition to its other effects.</Pair>
</Ability>
</>};
const _beastmorph = {title: "Beastmorph", jsx: <><h2 id="arc-alchemist-beastmorph-beastmorph">Beastmorph</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 25</Link><br/>Beastmorphs study the anatomy of monsters, learning how they achieve their strange powers. They use their knowledge to duplicate these abilities, but at the cost of taking on inhuman shapes when they use mutagens.</p>
<Ability id="arc-alchemist-beastmorph-beastform-mutagen" icon={["upgrade"]}>
<Pair single id="arc-alchemist-beastmorph-beastform-mutagen">Beastform Mutagen</Pair>
<Pair hl title="Replaces">Swift alchemy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A beastmorph's <em>mutagen</em> causes him to take on animalistic features - whether those of an animal, a magical beast, an animal-like humanoid (such as a lizardfolk), or a monstrous humanoid. For example, when the beastmorph uses his <em>mutagen,</em> he may gain a furry muzzle and pointed ears like a werewolf, scaly skin like a lizardfolk or sahuagin, or compound eyes and mandibles like a giant insect. The beastmorph also gains his choice of one of the abilities listed in the <Link to="/spell/alter_self">alter self</Link> spell, which persists as long as the <em>mutagen.</em> He may select a different ability each time he creates a mutagen.</Pair>
</Ability>
<Ability id="arc-alchemist-beastmorph-improved-beastform-mutagen" icon={["upgrade"]}>
<Pair single id="arc-alchemist-beastmorph-improved-beastform-mutagen">Improved Beastform Mutagen</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A beastmorph's <em>mutagen</em> grants him additional abilities and options. The alchemist gains his choice of two of the abilities listed in the <Link to="/spell/beast_shape_i">beast shape I</Link> spell, which persist as long as the <em>mutagen.</em> He may select two different abilities each time he creates a <em>mutagen.</em></Pair>
</Ability>
<Ability id="arc-alchemist-beastmorph-greater-beastform-mutagen" icon={["upgrade"]}>
<Pair single id="arc-alchemist-beastmorph-greater-beastform-mutagen">Greater Beastform Mutagen</Pair>
<Pair hl title="Replaces">Poison resistance +2, +4, and +6, poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A beastmorph's <em>mutagen</em> grants him three of the abilities listed in the <Link to="/spell/beast_shape_ii">beast shape II</Link> spell, which persist as long as the <em>mutagen.</em> He may select three different abilities each time he creates a <em>mutagen.</em></Pair>
</Ability>
<Ability id="arc-alchemist-beastmorph-grand-beastform-mutagen" icon={["upgrade"]}>
<Pair single id="arc-alchemist-beastmorph-grand-beastform-mutagen">Grand Beastform Mutagen</Pair>
<Pair hl title="Replaces">Persistent mutagen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">A beastmorph's <em>mutagen</em> grants him four of the abilities listed in the <Link to="/spell/beast_shape_iii">beast shape III</Link> spell, which persist as long as the <em>mutagen.</em> He may select four different abilities each time he creates a <em>mutagen.</em></Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the beastmorph archetype: <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/grand_mutagen">grand mutagen</Link>, <Link to="/discovery/greater_mutagen">greater mutagen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>, <Link to="/discovery/mummification">mummification</Link>, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>, <Link to="/discovery/tentacle">tentacle</Link>, and <Link to="/discovery/wings">wings</Link>.</p>
</>};
const _blazing_torchbearer = {title: "Blazing Torchbearer", jsx: <><h2 id="arc-alchemist-blazing_torchbearer-blazing-torchbearer">Blazing Torchbearer</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 21</Link><br/>The blazing torchbearer is especially adept at manipulating flames of all kinds.</p>
<Ability id="arc-alchemist-blazing_torchbearer-everburning-flame-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-blazing_torchbearer-everburning-flame-ex">Everburning Flame (Ex)</Pair>
<Pair hl title="Replaces">Brew Potion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Any torch held by a blazing torchbearer is considered to be an <Link to="/eq-misc/everburning_torch">everburning torch</Link>, although it still sheds heat and can be used as a weapon.</Pair>
<Pair title="Standard Action">A blazing torchbearer can cast <Link to="/spell/spark">spark</Link> as a spell-like ability at will.</Pair>
</Ability>
<Ability id="arc-alchemist-blazing_torchbearer-intense-light-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-blazing_torchbearer-intense-light-ex">Intense Light (Ex)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A blazing torchbearer has mastered lighting and holding a torch to the point that it sheds more light than those carried by his peers. The radius of normal and increased <Link to="/rule/illumination">illumination</Link> of any torch held by a blazing torchbearer increases by 10 feet.</Pair>
<Pair title="Standard Action">Once per day, the blazing torchbearer can create a brilliant flash of light that <Link to="/misc/blind">blinds</Link> everyone within 10 feet (including the torchbearer) for 1 round.</Pair>
</Ability>
<Ability id="arc-alchemist-blazing_torchbearer-explosive-torch-ex" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-blazing_torchbearer-explosive-torch-ex">Explosive Torch (Ex)</Pair>
<Pair hl title="Replaces">The alchemist's 4th-level discovery</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Standard Action">A blazing torchbearer can drop a special blend of explosive powders onto his torch before using it as a weapon. His next successful melee attack with the torch deals an additional 2d6 points of fire damage and <Link to="/rule/sets_on_fire">sets the target on fire</Link>. This attack must be made within 1d4 rounds or the torch prematurely explodes at the end of the blazing torchbearer's turn, dealing damage to the blazing torchbearer and setting him on fire.</Pair>
</Ability>
</>};
const _blightseeker = {title: "Blightseeker", jsx: <><h2 id="arc-alchemist-blightseeker-blightseeker">Blightseeker</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 10</Link><br/>Blightseekers are alchemists devoted to the study of fungi native to the Darklands. While diverse fungi exist on the surface world, the unique combination of environmental conditions found in the Darklands fosters the growth of unpredictable and otherworldly fungal growths.</p>
<Ability id="arc-alchemist-blightseeker-spore-bomb-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-blightseeker-spore-bomb-su">Spore Bomb (Su)</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A blightseeker creates a special kind of alchemist bomb that delivers a payload of alchemically engineered fungal spores. These bombs infest their target with a virulent blight (see below). The blightseeker's bombs deal 1d4 points of damage (instead of 1d6), plus 1d4 points of damage for every 2 alchemist levels beyond 1st.</Pair>
<Pair title="Special">A creature that takes a direct hit from a spore bomb must succeed at a Fortitude save (DC = 10 + <Link to="/misc/half">half</Link> the blightseeker's level + his Intelligence modifier) or suffer the associated blight effects. Creatures that take splash damage from the bomb are not affected by the blight.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blights-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-blightseeker-blights-ex">Blights (Ex)</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A blightseeker gains the blights from the list below. When he prepares bombs at the start of the day, a blightseeker chooses which blight to apply to each bomb. If a blight has no duration listed, it lasts a number of rounds equal to the blightseeker's Intelligence modifier.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-impairing" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-impairing">Impairing</Pair>
<Pair title="Passive Ability">The target's base land speed decreases by 10 feet, to a minimum of 10 feet. This effect doesn't stack with itself.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-minor-sickening" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-minor-sickening">Minor Sickening</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/sickened">sickened</Link>, but it takes only a -1 penalty on affected rolls.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blights-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-blightseeker-blights-ex">Blights (Ex)</Pair>
<Pair hl title="Replaces">The discovery gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">At 6th level, a blightseeker adds the following blights to the list of those that can be applied to his bombs.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-fatiguing" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-fatiguing">Fatiguing</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/fatigued">fatigued</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-fear-inducing" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-fear-inducing">Fear-Inducing</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/shaken">shaken</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-sickening" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-sickening">Sickening</Pair>
<Pair title="Passive Ability">The target is sickened.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blights-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-blightseeker-blights-ex">Blights (Ex)</Pair>
<Pair hl title="Replaces">The discovery gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">At 12th level, a blightseeker adds the following blights to the list of those blights that can be applied to his bombs.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-confusing" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-confusing">Confusing</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/confused">confused</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-exhausting" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-exhausting">Exhausting</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/exhausted">exhausted</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-nauseating" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-nauseating">Nauseating</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/nauseated">nauseated</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-staggering" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-staggering">Staggering</Pair>
<Pair title="Passive Ability">The target becomes <Link to="/misc/staggered">staggered</Link> for 1 round.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blight-engineering-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-blightseeker-blight-engineering-ex">Blight Engineering (Ex)</Pair>
<Pair hl title="Replaces">Persistent mutagen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">A blightseeker can apply two blights that he knows to each spore bomb he creates.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blights-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-blightseeker-blights-ex">Blights (Ex)</Pair>
<Pair hl title="Replaces">The discovery gained at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Passive Ability">At 18th level, a blightseeker adds the following blights to the list of those that can be selected.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-blinding" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-blinding">Blinding</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/blinded">blinded</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-deafening" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-deafening">Deafening</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/deafened">deafened</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-blightseeker-stunning" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-blightseeker-stunning">Stunning</Pair>
<Pair title="Passive Ability">The target is <Link to="/misc/stunned">stunned</Link> for 1 round.</Pair>
</Ability>
</>};
const _blood_alchemist = {title: "Blood Alchemist", jsx: <><h2 id="arc-alchemist-blood_alchemist-blood-alchemist">Blood Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 44</Link><br/>Most alchemists can transform matter and energy into other forms, but some wicked specialists realize that life itself is an energy that can greatly fuel their alchemy.</p>
<Ability id="arc-alchemist-blood_alchemist-alignment" icon={["info"]}>
<Pair single id="arc-alchemist-blood_alchemist-alignment">Alignment</Pair>
<Pair title="Info">A blood alchemist trades the lives of others for more power when using his lifeblood ability. A nonevil blood alchemist can't use the <em>lifeblood</em> ability, but he can use his other archetype and class abilities, and he can continue to advance in alchemist.</Pair>
</Ability>
<Ability id="arc-alchemist-blood_alchemist-lifeblood-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-blood_alchemist-lifeblood-su">Lifeblood (Su)</Pair>
<Pair hl title="Replaces">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When a blood alchemist performs a <Link to="/misc/coup_de_grace">coup de grace</Link> that kills an intelligent humanoid creature (but not a summoned intelligent humanoid creature), he can gather its lifeblood into a vial; this is a death effect. He can use this lifeblood any time within the next 24 hours to create an extract of a spell level he can cast that is no higher than <Link to="/misc/half">half</Link> the creature's CR, without spending a daily extract slot.</Pair>
<Pair title="Usage">He can use this ability once for each spell level each day (for example, a 13th-level blood alchemist can use lifeblood to gain additional 1st-, 2nd-, 3rd-, 4th-, and 5th level extracts).</Pair>
<Pair title="Special">A blood alchemist can't take the mutagen or cognatogen discoveries.</Pair>
</Ability>
<Ability id="arc-alchemist-blood_alchemist-alchemical-circles-sp-su" icon={["magic-swirl"]}>
<Pair single id="arc-alchemist-blood_alchemist-alchemical-circles-sp-su">Alchemical Circles (Sp, Su)</Pair>
<Pair hl title="Replaces">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A blood alchemist gains a blood pool with a number of points equal to his alchemist level + his Intelligence modifier. He can spend 1 point from his blood pool to draw a complex alchemical circle in blood on the ground or on another permanent fixture in a process that takes 1 minute. Depending on his alchemist level, the alchemical circle can have one of several effects.</p>
<p>The blood alchemist can spend an unused extract slot to charge the circle with alchemical energy. He chooses one of the spells listed below of equal or lower level to the extract slot he spent, and until he refreshes his extract slots, as long as his body is in physical contact with the circle, he can produce the effect of the spell he chose as a spell-like ability. If the spell normally has an expensive material component, he must still provide it, either grinding it up and mixing it with the blood used for the circle or placing it in the circle (if the component is also the target). The chosen effect can target or affect only something contained within the circle, or the surface on which the blood alchemist drew the circle. To learn one of these effects, he must write it into his formula book, with the same cost as usual for a formula (he can also use his free formula from leveling up to learn the chosen effect instead of a normal formula).</p>
<p>The blood alchemist can choose from the following spells for this ability. They are listed by spell level.</p>
</Pair>
<Pair plain title="1st"><Link to="/spell/expeditious_excavation">Expeditious excavation</Link>, <Link to="/spell/fabricate_bullets">fabricate bullets</Link>, <Link to="/spell/jury_rig">jury-rig</Link>, <Link to="/spell/magic_weapon">magic weapon</Link>, <Link to="/spell/reinforce_armaments">reinforce armaments</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/knock">Knock</Link>, <Link to="/spell/make_whole">make whole</Link>, <Link to="/spell/masterwork_transformation">masterwork transformation</Link>, <Link to="/spell/silk_to_steel">silk to steel</Link>, <Link to="/spell/soften_earth_and_stone">soften earth and stone</Link>, <Link to="/spell/warp_wood">warp wood</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/keen_edge">Keen edge</Link>, <Link to="/spell/magic_vestment">magic vestment</Link>, <Link to="/spell/greater_magic_weapon">greater magic weapon</Link>, <Link to="/spell/obsidian_flow">obsidian flow</Link>, <Link to="/spell/spike_stones">spike stones</Link>, <Link to="/spell/stone_shape">stone shape</Link></Pair>
<Pair plain title="4th"><Link to="/spell/fabricate">Fabricate</Link>, <Link to="/spell/passwall">passwall</Link>, <Link to="/spell/transmute_mud_to_rock">transmute mud to rock</Link>, <Link to="/spell/transmute_rock_to_mud">transmute rock to mud</Link></Pair>
<Pair plain title="5th"><Link to="/spell/flesh_to_stone">Flesh to stone</Link>, <Link to="/spell/move_earth">move earth</Link>, <Link to="/spell/stone_to_flesh">stone to flesh</Link>, <Link to="/spell/tar_pool">tar pool</Link>, <Link to="/spell/transmute_metal_to_wood">transmute metal to wood</Link></Pair>
<Pair plain title="6th"><Link to="/spell/polymorph_any_object">Polymorph any object</Link>, <Link to="/spell/transmute_blood_to_acid">transmute blood to acid</Link></Pair>
<Pair title="At 8th Level">The blood alchemist can also create a <em>magic circle,</em> as per the magic circles <Link to="/class/occultist">occultist</Link> class ability, though it costs 1 point from his blood pool instead of 1 point of mental focus.</Pair>
<Pair title="At 12th Level">He can also create a <em>binding circle,</em> as per the occultist class ability of the same name, though it costs 2 points from his blood pool instead of 2 points of mental focus.</Pair>
<Pair title="At 16th Level">The blood alchemist can draw <em>magic circles</em> and <em>binding circles</em> more quickly but with a shorter duration, as per the occultist <em>fast circles</em> ability.</Pair>
</Ability>
<Ability id="arc-alchemist-blood_alchemist-blood-knowledge-sp" icon={["magic-swirl"]}>
<Pair single id="arc-alchemist-blood_alchemist-blood-knowledge-sp">Blood Knowledge (Sp)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A blood alchemist can spend an unused extract slot of 2nd level while mixing a drop of blood with various alchemical reagents in a process that takes 1 minute. If he does so, he can drink the resulting concoction as a <strong className="hl">standard action</strong> to gain the information he would learn as if he had cast <Link to="/spell/blood_biography">blood biography</Link> on the blood he just used. As per the spell, living and undead creatures receive a Will saving throw (DC = 13 + the blood alchemist's Intelligence modifier) to negate the effect.</Pair>
</Ability>
</>};
const _bogborn_alchemist = {title: "Bogborn Alchemist", jsx: <><h2 id="arc-alchemist-bogborn_alchemist-bogborn-alchemist">Bogborn Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 191</Link><br/>Some grippli alchemists are particularly attuned to the swamps and the dangerous creatures that inhabit them; these serve as their laboratories and research subjects, respectively. These bogborn alchemists have the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-bogborn_alchemist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/grippli">Grippli</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-alchemist-bogborn_alchemist-undefined">
<Pair id="arc-alchemist-bogborn_alchemist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="arc-alchemist-bogborn_alchemist-amphibious-mutagen-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-bogborn_alchemist-amphibious-mutagen-ex">Amphibious Mutagen (Ex)</Pair>
<Pair hl title="Replaces">Throw anything</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When a bogborn alchemist uses a mutagen, he may choose to have his mutagen form enhanced for aquatic movement. This gives him the <Link to="/umr/amphibious">amphibious</Link> special quality, his feet elongate, and the webbing between his fingers and toes expands, granting a swim speed of 15 feet.</Pair>
</Ability>
<Ability id="arc-alchemist-bogborn_alchemist-discovery-options" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-bogborn_alchemist-discovery-options">Discovery Options</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A bogborn alchemist can select the toxic skin <Link to="/race/grippli">grippli</Link> racial trait in place of an alchemical discovery.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the bogborn alchemist archetype: <Link to="/discovery/chameleon">chameleon</Link>; <Link to="/discovery/concentrate_poison">concentrate poison</Link>, <Link to="/discovery/sticky_poison">sticky poison</Link>; <Link to="/discovery/nauseating_flesh">nauseating flesh</Link>, <Link to="/discovery/poison_conversion">poison conversion</Link>; <Link to="/discovery/bottled_ooze">bottled ooze</Link>, <Link to="/discovery/tanglefoot_bomb">tanglefoot bomb</Link>, <Link to="/discovery/tentacle">tentacle</Link>.</p>
</>};
const _bramble_brewer = {title: "Bramble Brewer", jsx: <><h2 id="arc-alchemist-bramble_brewer-bramble-brewer">Bramble Brewer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 44</Link><br/>Some half-elven alchemists merge human curiosity with their elven link to nature. Such alchemists can manipulate the forces of alchemy to create bombs that reshape terrain and defoliate swaths of vegetation or to create mutagens that bestow the resilience of oak or the tenacity of bamboo. A bramble brewer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-bramble_brewer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/half_elf">Half-Elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-alchemist-bramble_brewer-dendrite-mutagen-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-bramble_brewer-dendrite-mutagen-su">Dendrite Mutagen (Su)</Pair>
<Pair hl title="Replaces">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A bramble brewer's mutagen still contains transformative power, but grants a tree-like sturdiness rather than the feral power of standard mutagens. When imbibed, dendrite mutagen grants a +4 natural armor bonus, a +2 alchemical bonus to one physical ability score, and a -2 penalty to the corresponding mental ability score. In addition, the alchemist gains <Link to="/umr/fast_healing">fast healing</Link> 1 as long as he is in an area of bright light (such as sunlight or inside the area of a <Link to="/spell/daylight">daylight</Link> spell). This otherwise works like the standard mutagen class feature.</Pair>
</Ability>
<p>A bramble brewer who selects the <Link to="/discovery/greater_mutagen">greater mutagen</Link> discovery can create a dendrite mutagen that still grants a +4 natural armor bonus, and also grants a +4 alchemical bonus to one physical ability score and a +2 bonus to a second physical ability score. The bramble brewer takes a -2 penalty to both associated mental ability scores as long as the mutagen persists, but his fast healing increases to 3 as long as he is in an area of bright light. This otherwise works like the <em>greater mutagen</em> discovery and replaces that ability.</p>
<p>A bramble brewer who selects the <Link to="/discovery/grand_mutagen">grand mutagen</Link> discovery can brew a dendrite mutagen that now grants a +6 natural armor bonus, a +6 alchemical bonus to one physical ability score, a +4 alchemical bonus to a second physical ability score, and a +2 alchemical bonus to a third physical ability score. The bramble brewer takes a -2 penalty to his Intelligence, Wisdom, and Charisma scores as long as the mutagen persists. The bramble brewer's fast healing increases to 5 as long as he is within an area of bright light. This otherwise works like the <em>grand mutagen</em> discovery and replaces that ability.</p>
<p>At 20th level, a bramble brewer who selects the <Link to="/discovery/true_mutagen">true mutagen</Link> grand discovery can create a dendrite mutagen that grants a +8 natural armor bonus and a +6 alchemical bonus to Strength, Dexterity, and Constitution. The bramble brewer takes a -2 penalty to his Intelligence, Wisdom, and Charisma scores as long as the mutagen persists. The bramble brewer's gains fast healing 10, but instead of only gaining fast healing in bright light, this fast healing persists in areas of bright or normal light. A bramble brewer must possess the <em>grand mutagen</em> discovery before selecting this discovery.</p>
<Ability id="arc-alchemist-bramble_brewer-briar-bombs-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-alchemist-bramble_brewer-briar-bombs-su">Briar Bombs (Su)</Pair>
<Pair hl title="Replaces">The 2nd-level discovery</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A bramble brewer gains the <Link to="/discovery/tanglefoot_bomb">tanglefoot bomb</Link> discovery, but the entanglement's duration persists for a number of rounds equal to the bramble brewer's Intelligence modifier (minimum 1 round). Additionally, when a bramble brewer throws a tanglefoot bomb, it transforms all squares in its splash radius into <Link to="/rule/difficult_terrain">difficult terrain</Link> that persists for as long as the bomb's entangling effect.</Pair>
<Pair title="Special">Although these bombs deal no damage, for every 1d6 points of damage the bramble brewer's regular bombs deal, the briar bomb's splash radius increases by 5 feet.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the bramble brewer archetype: <Link to="/discovery/precise_bombs">precise bombs</Link>; <Link to="/discovery/defoliant_bomb">defoliant bomb</Link>; <Link to="/discovery/lingering_spirit">lingering spirit</Link>, <Link to="/discovery/strafe_bomb">strafe bomb</Link>, <Link to="/discovery/sunlight_bomb">sunlight bomb</Link>.</p>
</>};
const _chirurgeon = {title: "Chirurgeon", jsx: <><h2 id="arc-alchemist-chirurgeon-chirurgeon">Chirurgeon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 18</Link><br/>An alchemist who studies anatomy and uses this knowledge to heal is a chirurgeon. A chirurgeon has the following class features.</p>
<Ability id="arc-alchemist-chirurgeon-infused-curative" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-alchemist-chirurgeon-infused-curative">Infused Curative</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A chirurgeon's extracts of <Link to="/main/cure_spells">cure spells</Link> automatically act as infusions, and can be used by non-alchemists. When a chirurgeon prepares his extracts, he may choose to render any or all of his infused curatives inert and prepare other extracts to replace them (unlike infusions, which continue to occupy the alchemist's daily extract slots until consumed or used).</Pair>
</Ability>
<Ability id="arc-alchemist-chirurgeon-anaesthetic" icon={["stairs-goal","remedy"]}>
<Pair single id="arc-alchemist-chirurgeon-anaesthetic">Anaesthetic</Pair>
<Pair hl title="Replaces">Poison resistance +4</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A chirurgeon learns how to supplement uses of the Heal skill with painkilling drugs. He gains <Link to="/feat/skill_focus">Skill Focus</Link> (Heal) as a bonus feat. Any use of the Heal skill that has a risk of harming the patient (such as extracting a barb) only deals the minimum damage when performed by a chirurgeon.</Pair>
</Ability>
<Ability id="arc-alchemist-chirurgeon-power-over-death" icon={["spell-book"]}>
<Pair single id="arc-alchemist-chirurgeon-power-over-death">Power Over Death</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">A chirurgeon adds <Link to="/spell/breath_of_life">breath of life</Link> to his formula book as a 4th-level extract. His <em>infused curative</em> ability applies to this extract.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the chirurgeon archetype: <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/healing_touch">healing touch</Link>, <Link to="/discovery/infusion">infusion</Link>, and <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>.</p>
</>};
const _clone_master = {title: "Clone Master", jsx: <><h2 id="arc-alchemist-clone_master-clone-master">Clone Master</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 18</Link><br/>Clone masters practice duplicating existing creatures in order to better understand how to create new life. A clone master has the following class features.</p>
<Ability id="arc-alchemist-clone_master-bomb" icon={["broken-shield"]}>
<Pair single id="arc-alchemist-clone_master-bomb">Bomb</Pair>
<Pair hl title="Replaces">Bombs</Pair>
<Pair title="Passive Ability">A clone master's bombs deal damage one die step lower than normal (regular bombs deal d4s, <Link to="/discovery/concussive_bomb">concussive bombs</Link> deal 1d3s, and so on).</Pair>
</Ability>
<Ability id="arc-alchemist-clone_master-lesser-simulacrum" icon={["spell-book"]}>
<Pair single id="arc-alchemist-clone_master-lesser-simulacrum">Lesser Simulacrum</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Passive Ability">A clone master adds <Link to="/spell/lesser_simulacrum">lesser simulacrum</Link> to his formula book as a 3rd-level extract.</Pair>
</Ability>
<Ability id="arc-alchemist-clone_master-rebirth" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-clone_master-rebirth">Rebirth</Pair>
<Pair hl title="Replaces">Poison resistance +6, poison immunity</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A clone master can prepare a clone of himself that awakens if he is slain. Creating the clone costs 5,000 gp, takes 1 week of work, and requires 3 additional weeks for the clone to grow to maturity. If he dies, the clone awakens as if the alchemist had used the <Link to="/spell/clone">clone</Link> spell on himself. He can have one inert of himself at a time. Unused clones created by a clone master do not rot.</Pair>
</Ability>
<Ability id="arc-alchemist-clone_master-simulacrum" icon={["spell-book"]}>
<Pair single id="arc-alchemist-clone_master-simulacrum">Simulacrum</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A clone master adds <Link to="/spell/simulacrum">simulacrum</Link> to his formula book as a 5th-level extract.</Pair>
</Ability>
<Ability id="arc-alchemist-clone_master-clone" icon={["spell-book"]}>
<Pair single id="arc-alchemist-clone_master-clone">Clone</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">A clone master adds <em>clone</em> to his formula book as a 6th-level extract.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the clone master archetype: <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link>, <Link to="/discovery/doppelganger_simulacrum">doppelganger simulacrum</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, and <Link to="/discovery/parasitic_twin">parasitic twin</Link>.</p>
</>};
const _concocter = {title: "Concocter", jsx: <><h2 id="arc-alchemist-concocter-concocter">Concocter</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 8</Link><br/>Experts at combining sets of chemicals to create unique effects, concocters specialize in blending extracts, mutagens, and potions to create concoctions that give them exhilarating powers. Concocters seem reckless to those who aren't familiar with their ways, but those who know them understand that these alchemists simply have unorthodox methods.</p>
<Ability id="arc-alchemist-concocter-mutagenic-mixology-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-concocter-mutagenic-mixology-ex">Mutagenic Mixology (Ex)</Pair>
<Pair hl title="Replaces">The discoveries gained at 2nd and 4th levels</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever a concocter brews a potion, he can mix in some of the chemicals he uses to create his mutagen, adding some of his mutagen's effects to this concoction.</Pair>
</Ability>
<p>When he drinks this concoction, he gains the benefit of the potion as normal. Additionally, he gains a +2 natural armor bonus and a +4 alchemical bonus to one of his physical ability scores (Strength, Dexterity, or Constitution), while suffering a -2 penalty to the corresponding mental ability score (Intelligence, Wisdom, or Charisma), just as though the concoction were a mutagen. The ability score that receives the bonus must be chosen when the concoction is made. These benefits and penalties last for the duration of the effects of the potion on which the concoction is based or for 1 minute per the concocter's alchemist level, whichever is shorter.</p>
<p>The effects of this concoction do not stack with another such concoction or a mutagen. If the concocter drinks another concoction or a mutagen while under the effects of this concoction, the effects of any previous concoction or mutagen immediately end. A concoction that is not in the concocter's possession becomes inert until the concocter picks it up again (even if the concocter has the infuse mutagen discovery). The process used to combine the mutagen with a potion make it particularly volatile, so anyone else who drinks the concoction (including other alchemists) does not gain its benefits and must succeed at a Fortitude saving throw or be nauseated for 1 minute. The DC of this saving throw is equal to 10 + the concocter's alchemist level + the concocter's Intelligence modifier.</p>
<p>Additional reagents and materials are required to brew a concoction in this way, doubling the cost in raw materials to create the potion on which the concoction is based. A mutagen brewed into a concoction in this way does not count against the number of mutagens the concocter can have active at a given time.</p>
<p>A concocter can make one such concoction per day at 2nd level and a second per day at 4th level. A concoction becomes inert 24 hours after it is created.</p>
<Ability id="arc-alchemist-concocter-extracting-mixology-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-concocter-extracting-mixology-ex">Extracting Mixology (Ex)</Pair>
<Pair hl title="Replaces">Swift poisoning, the discovery gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A concocter can combine an extract and a potion, allowing him to consume this mixture simultaneously, albeit with some potential side effects. As a <strong className="hl">full-round action</strong>, the concocter can combine an extract with a potion in his possession. The concocter can then drink the mixture as a <strong className="hl">standard action</strong>. If he does not consume the mixture within 2 rounds of creating it, the mixture grows inert and both the extract and the potion are ruined. This ability cannot be used with a potion into which he has fused his mutagen using his <em>mutagenic mixology</em> ability.</Pair>
</Ability>
<p>The exact effects of drinking one of these mixtures are volatile and unpredictable. Each time the concocter drinks a mixture, roll on the following table to determine the result.</p>
<ScrollContainer id="arc-alchemist-concocter--table-0"><table>
<thead>
<tr>
<th>d4</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>Either the extract (01-50 on a d%) or potion (51-100 on a d%) has no effect. The consumable that takes effect treats its caster level or the concocter's alchemist level as 2 higher, whichever is appropriate.</td>
</tr>
<tr>
<td>2</td>
<td>Both the extract and potion function normally.</td>
</tr>
<tr>
<td>3</td>
<td>Both the extract and potion function normally but treat their caster level or the concocter's alchemist level as 2 higher, whichever is appropriate.</td>
</tr>
<tr>
<td>4</td>
<td>Both the extract and potion function normally and are affected as though they were spells extended with the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat. If either the extract or the potion's duration is concentration, instantaneous, or permanent, both the extract and the potion simply function normally.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _construct_rider = {title: "Construct Rider", jsx: <><h2 id="arc-alchemist-construct_rider-construct-rider">Construct Rider</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 12</Link><br/>A construct rider creates arcane devices to emulate and surpass weak flesh.</p>
<Ability icon={["skills"]} id="arc-alchemist-construct_rider-undefined">
<Pair id="arc-alchemist-construct_rider-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/ride">Ride</Link> (DEX), <Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT)</Pair></Ability>
<Ability id="arc-alchemist-construct_rider-craft-mount-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-construct_rider-craft-mount-su">Craft Mount (Su)</Pair>
<Pair hl title="Replaces">Brew Potion, mutagen, the discovery gained at 4th level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A construct rider assembles a construct mount shaped like a riding animal. A Medium alchemist can select a <Link to="/companion/camel">camel</Link> or a <Link to="/companion/horse">horse</Link>. A Small alchemist can select a <Link to="/companion/pony">pony</Link> or <Link to="/companion/wolf">wolf</Link>, but can also select a <Link to="/companion/boar">boar</Link> or a <Link to="/companion/dog">dog</Link> if he's at least 4th level. The GM may approve other animals as mounts. This construct mount acts in most ways as an <Link to="/sidekick/animal_companion">animal companion</Link>, using the character's alchemist level as his effective druid level. A construct mount is a construct, but uses the appropriate <Link to="/ability/druid_companions">animal companion's</Link> statistics, gaining Hit Dice, skills, feats, and Strength and Dexterity adjustments as the alchemist advances in level. A construct mount has no Constitution score, and instead gains bonus hit points appropriate for a construct of its size. It has an Intelligence score (and skill points), a lower base attack bonus, and better saving throws than a normal construct of its Hit Dice. The mount has all the immunities of a construct (except immunity to mind-affecting effects, since it has a mind). A construct rider can use Craft (alchemy) instead of Handle Animal for all purposes involving his construct mount, though the check still takes a -5 penalty due to the construct mount's unusual nature.</Pair>
<Pair title="At 4th Level">At first, his mount is a singular masterpiece created during a momentary stroke of brilliance. At 4th level, the construct rider gains <Link to="/feat/craft_construct">Craft Construct</Link> as a bonus feat and can use his extracts instead of spells to meet spell prerequisites when crafting other constructs.</Pair>
<Pair title="Special">To create a construct with a mind and body that are constantly changing and improving, the construct rider must manufacture vast quantities of clockwork or animating reagents. As such, the construct rider can never gain the mutagen or cognatogen ability, even from a discovery or another class.</Pair>
</Ability>
<Ability id="arc-alchemist-construct_rider-diminished-extracts" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-alchemist-construct_rider-diminished-extracts">Diminished Extracts</Pair>
<Pair title="Passive Ability">A construct rider may prepare one fewer extract of each level than normal. If this reduces the number to 0, he may prepare extracts of that level only if his Intelligence allows bonus extracts of that level.</Pair>
</Ability>
<Ability id="arc-alchemist-construct_rider-construct-rider-discoveries-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-construct_rider-construct-rider-discoveries-su">Construct Rider Discoveries (Su)</Pair>
<Pair title="Passive Ability">The construct rider can select from the following three archetype-specific discoveries in place of an alchemist discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-construct_rider-internal-reservoir-ex-sp" extraClasses="subAbility numbered" icon={["magic-swirl"]}>
<Pair single id="arc-alchemist-construct_rider-internal-reservoir-ex-sp">Internal Reservoir (Ex, Sp)</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Passive Ability">The construct mount contains a reservoir tank than the construct rider can fill with one dose of a potion or extract the construct rider created.</Pair>
<Pair title="Move-Equivalent Action">The construct mount can apply the potion or extract to itself. This does not provoke an attack of opportunity.</Pair>
<Pair title="Special">Refilling the reservoir is a complicated process that requires a DC 20 Craft (alchemy) check. Failure destroys the potion or extract. The process requires 1 minute, and provokes attacks of opportunity.</Pair>
</Ability>
<Ability id="arc-alchemist-construct_rider-vaporizing-reservoir-ex-su" extraClasses="subAbility numbered" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="arc-alchemist-construct_rider-vaporizing-reservoir-ex-su">Vaporizing Reservoir (Ex, Su)</Pair>
<Pair title="Prerequisites">8th-level alchemist, the <em>internal reservoir</em> discovery.</Pair>
<Pair title="Passive Ability">The construct rider upgrades his mount's reservoir, adding a compartment near the mouth which stores a bomb. Loading the bomb requires the same process as loading an extract or potion.</Pair>
<Pair title="Standard Action">A construct mount loaded with a bomb can unleash it as a breath weapon in a 15-foot cone or a 30-foot line, dealing damage as a direct hit against all targets in the area of effect.</Pair>
<Pair title="Special">The alchemist selects a line or cone area when loading the reservoir. Because the construct mount lacks the alchemist's Throw Anything ability, the alchemist's Intelligence bonus doesn't apply to this damage.</Pair>
</Ability>
<Ability id="arc-alchemist-construct_rider-widened-vaporizer-su" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-construct_rider-widened-vaporizer-su">Widened Vaporizer (Su)</Pair>
<Pair title="Prerequisites">10th-level alchemist, the <em>internal reservoir</em> and <em>vaporizing reservoir</em> discoveries.</Pair>
<Pair title="Ability">When the construct mount uses its breath weapon from the <em>vaporizing reservoir</em> discovery, it can also unleash a 30-foot cone or a 60-foot line.</Pair>
</Ability>
</>};
const _crimson_chymist = {title: "Crimson Chymist", jsx: <><h2 id="arc-alchemist-crimson_chymist-crimson-chymist">Crimson Chymist</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 156</Link><br/><Link to="/rule/red_mantis">Red Mantis</Link> agents are easily identifiable by their iconic equipment. Yet some assassins believe even subtler killing methods can be employed while still honoring <Link to="/faith/achaekek">Achaekek</Link>. These crimson chymists turn to the alchemical arts, infusing their bodies with the mutagenic essence of the Mantis God.</p>
<Ability id="arc-alchemist-crimson_chymist-mantis-mutagen-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-crimson_chymist-mantis-mutagen-su">Mantis Mutagen (Su)</Pair>
<Pair hl title="Alters">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A crimson chymist discovers how to create a specialized mutagen that grants her aspects of a praying mantis. A mantis mutagen functions as an alchemist mutagen, save that it always enhances Dexterity and applies a penalty to Charisma. When imbibed, the mutagen causes the crimson chymist's flesh to grow red chitinous plates on her body as natural armor and a row of small, cosmetic barbed hooks along her arms.</Pair>
</Ability>
<Ability id="arc-alchemist-crimson_chymist-crimson-discoveries-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-crimson_chymist-crimson-discoveries-su">Crimson Discoveries (Su)</Pair>
<Pair hl title="Alters">Discovery</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A crimson chymist gains access to four additional unique discoveries, as detailed below.</Pair>
</Ability>
<Ability id="arc-alchemist-crimson_chymist-blood-sight" extraClasses="subAbility numbered" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-alchemist-crimson_chymist-blood-sight">Blood Sight</Pair>
<Pair title="Passive Ability">When the crimson chymist is under the effects of her mantis mutagen, her eyes transform, becoming red and multifaceted. This change grants her darkvision to a range of 60 feet and the effects of <Link to="/spell/deathwatch">deathwatch</Link> for the duration of her mutagen's effects. If the crimson chymist already has darkvision as a benefit of her race, the range of her darkvision increases by 30 feet while using blood sight.</Pair>
</Ability>
<Ability id="arc-alchemist-crimson_chymist-arms-of-achaekek" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-crimson_chymist-arms-of-achaekek">Arms of Achaekek</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Passive Ability">The small barbs that grow on the crimson chymist's arms when she drinks her mantis mutagen grow significantly in size, granting her two claw attacks as <Link to="/umr/natural_weapons">natural weapons</Link>. These claws deal damage as appropriate for her size (1d4 for Medium crimson chymists) and function as secondary attacks. These claws do not replace the chymist's hands, and she can still use her hands to wield weapons, attack, hold objects, and otherwise use her hands with ease, but she cannot be wearing any item in the <Link to="/rule/wrist_slot">wrist slot</Link> or any armor - if she dons magic items that occupy the wrist slot or any armor, her claws shrink back to cosmetic barbs that can't be used in combat as long as the armor or wrist items are worn.</Pair>
</Ability>
<Ability id="arc-alchemist-crimson_chymist-improved-arms-of-achaekek" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-crimson_chymist-improved-arms-of-achaekek">Improved Arms of Achaekek</Pair>
<Pair title="Prerequisites">10th-level alchemist and the <em>arms of Achaekek</em> discovery</Pair>
<Pair title="Passive Ability">The claws granted by the <em>arms of Achaekek</em> discovery now function as primary weapons when the crimson chymist makes no attacks with manufactured weapons (the claws function as secondary weapons if the chymist attacks with a manufactured weapon). The damage die of the claws increases by one size category (to 1d6 for Medium crimson chymists), and attacks deal 1d4 points of <Link to="/rule/bleed">bleed</Link> damage on a hit.</Pair>
</Ability>
<Ability id="arc-alchemist-crimson_chymist-ingest-venom" extraClasses="subAbility numbered" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-crimson_chymist-ingest-venom">Ingest Venom</Pair>
<Pair title="Prerequisites">The <em>arms of Achaekek</em> discovery</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">The crimson chymist can ingest one dose of any poison without harming herself. The next time she imbibes her mutagen and uses her <em>arms of Achaekek discovery,</em> both claws are envenomed with a dose of the poison she ingested.</Pair>
<Pair title="Special">An ingested venom remains latent in the alchemist's system until she activates her <em>arms of Achaekek</em> discovery or until 24 hours have passed, whichever comes first. Additional doses of venom ingested during that time affect the alchemist normally.</Pair>
</Ability>
</>};
const _cruorchymist = {title: "Cruorchymist", jsx: <><h2 id="arc-alchemist-cruorchymist-cruorchymist">Cruorchymist</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 12</Link><br/>Cruorchymists see their blood as just another tool for their experiments. They use this blood to create new life that can be commanded to serve the cruorchymist's goals.</p>
<Ability id="arc-alchemist-cruorchymist-blood-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-cruorchymist-blood-familiar-ex">Blood Familiar (Ex)</Pair>
<Pair hl title="Replaces">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A cruorchymist has created a <Link to="/monster/homunculus">homunculus</Link> from basic materials and his own blood. The homunculus takes the shape of a Tiny humanoid. It functions in all ways as a <Link to="/ability/familiar">familiar</Link>, treating the cruorchymist's alchemist level as his effective wizard level. If a cruorchymist wishes to replace his blood <Link to="/sidekick/familiar">familiar</Link>, he can reduce the cost of the replacement ritual by taking 2 points of <Link to="/rule/constitution_damage">Constitution damage</Link> for every 100 gp he wishes to forgo.</Pair>
<Pair title="At 3rd Level">If the cruorchymist has the infusion <Link to="/ability/discovery">discovery</Link>, a blood familiar can deliver extracts that have a range of touch for its cruorchymist master.</Pair>
<Pair title="Special">A cruorchymist can never gain the <em>mutagen, cognatogen,</em> or <em>inspired cognatogen</em> ability, even from a discovery or another class.</Pair>
</Ability>
<Ability id="arc-alchemist-cruorchymist-blood-treatment-ex" icon={["remedy"]}>
<Pair single id="arc-alchemist-cruorchymist-blood-treatment-ex">Blood Treatment (Ex)</Pair>
<Pair hl title="Replaces">Brew Potion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A cruorchymist can give up some of his blood to restore his blood familiar. As a <strong className="hl">swift</strong> or <strong className="hl">immediate action</strong>, a cruorchymist can take a number of points of <Link to="/rule/constitution_drain">Constitution drain</Link>. His blood familiar heals 1d6 hit points for every 1 point of Constitution drain the cruorchymist inflicts upon himself in this way.</Pair>
</Ability>
<Ability id="arc-alchemist-cruorchymist-blood-augmentation-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-cruorchymist-blood-augmentation-ex">Blood Augmentation (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">The cruorchymist can take 1 point of Constitution damage to provide his familiar with an <Link to="/ability/animal_foci">animal aspect</Link> for 1 minute, treating his alchemist level as his hunter level. The cruorchymist takes 1 additional point of Constitution damage for every minute he maintains the animal aspect beyond the first.</Pair>
<Pair title="At 12th Level">The cruorchymist can select two animal aspects for his blood familiar instead of one, taking 2 points of Constitution damage for every minute that he maintains both animal aspects.</Pair>
</Ability>
</>};
const _crypt_breaker = {title: "Crypt Breaker", jsx: <><h2 id="arc-alchemist-crypt_breaker-crypt-breaker">Crypt Breaker</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 33</Link><br/>Crypt breakers are most common in Osirion, where they use their powers of perception and alchemical adaptation to safely investigate the mysteries of that lands' past. They are often involved in expeditions into dangerous tombs and catacombs, where their ability to create alchemical devices designed to neutralize constructs and undead are often crucial to survival. A crypt breaker has the following class features.</p>
<Ability id="arc-alchemist-crypt_breaker-alkahest-bombs-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-alchemist-crypt_breaker-alkahest-bombs-su">Alkahest Bombs (Su)</Pair>
<Pair hl title="Replaces">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A crypt breaker's bombs are specially designed to work best against constructs and corporeal undead - two foes commonly encountered in ancient tombs. Known as alkahest bombs, these bombs deal acid damage instead of fire damage. Alkahest is an alchemical fluid that eats away unliving flesh and animated constructs, but it doesn't work as well against other targets.</Pair>
<Pair title="Ability">Against constructs and corporeal undead, alkahest bombs deal 1d8 points of damage, plus 1d8 points of damage for every odd-numbered level instead of 1d6. Against all other creatures, alkahest bombs deal 1d4 points of damage, plus 1d4 points of force damage for every odd-numbered level. This otherwise works like the standard bombs class feature.</Pair>
</Ability>
<Ability id="arc-alchemist-crypt_breaker-crypt-breakers-draught-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-alchemist-crypt_breaker-crypt-breakers-draught-su">Crypt Breaker's Draught (Su)</Pair>
<Pair hl title="Replaces">Mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Rather than develop mutagens that increase their natural armor and physical abilities at the expense of their minds, crypt breakers focus on the creation of special draughts that can enhance their senses. When a crypt breaker drinks one of these draughts, he gains a +4 bonus on all Perception checks and gains one of the following special senses: darkvision 60 feet, low-light vision, or <Link to="/umr/scent">scent</Link>. While under the effects of a crypt breaker's draught, the alchemist also gains <Link to="/umr/light_blindness">light blindness</Link>.</Pair>
<Pair title="Special">A crypt breaker cannot create mutagens unless he selects the <Link to="/discovery/mutagen">mutagen</Link> discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-crypt_breaker-trapfinding" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-alchemist-crypt_breaker-trapfinding">Trapfinding</Pair>
<Pair hl title="Replaces">Brew potion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A crypt breaker adds <Link to="/misc/half">half</Link> his level on Perception checks made to locate traps and to Disable Device checks (minimum +1). A crypt breaker can use Disable Device to disarm magic traps. When determining the ability of a crypt breaker to <Link to="/ability/trapfinding">deal with locks or traps</Link>, treat his alchemist levels as rogue levels.</Pair>
</Ability>
<Ability id="arc-alchemist-crypt_breaker-discoveries" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-crypt_breaker-discoveries">Discoveries</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A crypt breaker may take the following rogue talents as discoveries: <Link to="/talent/quick_disable">quick disable</Link>, <em>trap sense</em> (see below), and <Link to="/talent/trap_spotter">trap spotter</Link>. Treat the crypt breaker's alchemist level as his rogue level for these talents.</Pair>
</Ability>
<blockquote>
<p><em>Per <a href="https://paizo.com/threads/rzs2mmn3?Inner-Sea-Magic">errata</a> (link opens in outside browser), Trap Sense refers to the rogue <Link to="/ability/trap_sense">class ability</Link>. The crypt breaker can take it as a discovery, and it improves as the crypt breaker levels up.</em></p>
</blockquote>
<Ability id="arc-alchemist-crypt_breaker-enhanced-alkahest-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-crypt_breaker-enhanced-alkahest-su">Enhanced Alkahest (Su)</Pair>
<Pair hl title="Replaces">Persistent mutagen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Against constructs and corporeal undead, the crypt breaker's alkahest bombs deal +1 points of damage per die, and the bomb threatens a critical hit on a 19-20. This does not stack with other effects that improve critical hit threat ranges.</Pair>
</Ability>
</>};
const _deep_bomber = {title: "Deep Bomber", jsx: <><h2 id="arc-alchemist-deep_bomber-deep-bomber">Deep Bomber</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 205</Link><br/>Consumed with keeping hidden from the horrors below the surface, svirfneblin use their racial proclivity for alchemy and their inherent talent for obfuscation to strike their enemies from the darkness and retreat unseen. A deep bomber has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-deep_bomber--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/svirfneblin">Svirfneblin</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-alchemist-deep_bomber-silent-bomb" icon={["upgrade"]}>
<Pair single id="arc-alchemist-deep_bomber-silent-bomb">Silent Bomb</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">When the deep bomber creates a bomb, he can choose to have it explode without making any noise, although those damaged by it may cry out.</Pair>
</Ability>
<Ability id="arc-alchemist-deep_bomber-targeting-bomb" icon={["upgrade"]}>
<Pair single id="arc-alchemist-deep_bomber-targeting-bomb">Targeting Bomb</Pair>
<Pair hl title="Replaces">Instant alchemy</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">When the deep bomber creates a bomb, he can choose to have its detonation include a <Link to="/spell/faerie_fire">faerie fire</Link> effect that applies to all creatures within the splash radius (including the target, if any). This cannot be used with other discoveries that modify bombs and have an only-one-per-bomb restriction.</Pair>
<Pair title="Special">The deep bomber gains swift alchemy at 18th level.</Pair>
</Ability>
<Ability id="arc-alchemist-deep_bomber-stonekin" icon={["spell-book"]}>
<Pair single id="arc-alchemist-deep_bomber-stonekin">Stonekin</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="At 6th Level">The deep bomber automatically learns <Link to="/spell/tree_shape">tree shape</Link> as a 2nd-level extract, except instead of a tree, he takes the form of a stalagmite that is the same size as his current size.</Pair>
<Pair title="At 7th Level">He automatically learns <Link to="/spell/meld_into_stone">meld into stone</Link> as a 3rd-level extract.</Pair>
</Ability>
<Ability id="arc-alchemist-deep_bomber-swift-alchemy" icon={["broken-shield"]}>
<Pair single id="arc-alchemist-deep_bomber-swift-alchemy">Swift Alchemy</Pair>
<Pair hl title="Alters">Swift alchemy</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">The deep bomber gains the <em>swift alchemy</em> alchemist ability at 18th level.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the deep bomber archetype: <Link to="/discovery/delayed_bomb">delayed bomb</Link>, <Link to="/discovery/dispelling_bomb">dispelling bomb</Link>, <Link to="/discovery/fast_bombs">fast bombs</Link>, <Link to="/discovery/infusion">infusion</Link>, <Link to="/discovery/madness_bomb">madness bomb</Link>, <Link to="/discovery/poison_bomb">poison bomb</Link>.</p>
</>};
const _dimensional_excavator = {title: "Dimensional Excavator", jsx: <><h2 id="arc-alchemist-dimensional_excavator-dimensional-excavator">Dimensional Excavator</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 14</Link><br/>Alchemists are often drawn to the Mana Wastes to study the strange energies and interactions that can be found there. Though many overeager alchemists ultimately disappear during research expeditions, more cautious scholars of alchemy in Alkenstar are content to simply read the notes left behind by their more adventurous kindred. Some of these scholars have discovered and recorded ways to cause their bombs to create minor tears in the fabric of reality, forming extradimensional pits to vex their foes.</p>
<Ability id="arc-alchemist-dimensional_excavator-extradimensional-extract-su" icon={["broken-shield","spell-book","smoking-finger"]}>
<Pair single id="arc-alchemist-dimensional_excavator-extradimensional-extract-su">Extradimensional Extract (Su)</Pair>
<Pair hl title="Replaces">4th-level discovery</Pair>
<Pair hl title="Alters">Discovery</Pair>
<Pair title="At 1st Level">The intense study a dimensional excavator applies to dimensional forces causes him to treat his class level as 2 lower when qualifying for alchemist discoveries other than those granted by <em>Precipitous Discoveries</em> (see below).</Pair>
<Pair title="At 4th Level">The dimensional excavator adds <Link to="/spell/create_pit">create pit</Link> to his list of extracts known, treating it as a 2nd-level alchemist extract. He can create an extract of this spell, which can then be thrown as a ranged attack, targeting a creature or square. If it strikes a square, the pit manifests in that area and all nearby creatures are affected normally. If a creature is struck, the pit manifests in the creature's location, and the struck creature must succeed at a Reflex save with a -2 penalty or fall into the pit.</Pair>
</Ability>
<Ability id="arc-alchemist-dimensional_excavator-precipitous-discoveries-su" icon={["stairs-goal","spell-book"]}>
<Pair single id="arc-alchemist-dimensional_excavator-precipitous-discoveries-su">Precipitous Discoveries (Su)</Pair>
<Pair hl title="Alters">Discovery</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A dimensional excavator can choose to learn an additional <em>pit</em> spell in place of learning a new discovery. The alchemist must be able to use an extract of the appropriate level to select a <em>pit</em> spell as an extract. He can add the following spells to his extracts known, and use them as per the extradimensional extract ability: <Link to="/spell/spiked_pit">spiked pit</Link> (3rd-level extract), <Link to="/spell/acid_pit">acid pit</Link> (4th-level extract), <Link to="/spell/hungry_pit">hungry pit</Link> (5th-level extract).</Pair>
</Ability>
</>};
const _dragonblood_chymist = {title: "Dragonblood Chymist", jsx: <><h2 id="arc-alchemist-dragonblood_chymist-dragonblood-chymist">Dragonblood Chymist</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 12</Link><br/>For alchemists, the key to effective mixtures lies in potent ingredients, and what could be more formidable than the blood of wyrms? The dragonblood chymists of Kaer Maga specialize in the reckless distillation of extracts and elixirs that allow them to experience the might of a dragon, however dangerous it might be</p>
<Ability id="arc-alchemist-dragonblood_chymist-dragonblood-mutagen-su" icon={["upgrade","armor-upgrade","mailed-fist"]}>
<Pair single id="arc-alchemist-dragonblood_chymist-dragonblood-mutagen-su">Dragonblood Mutagen (Su)</Pair>
<Pair hl title="Replaces">2nd-, 12th-, 16th-level discoveries</Pair>
<Pair hl title="Alters">Mutagen</Pair>
<Pair title="At 1st Level">A dragonblood chymist discovers how to create a mutagen that he can imbibe in order to mimic the might of a dragon. While he maintains his original form, his features take on a draconic appearance, becoming scaly and lizard-like. He gains a +2 natural armor bonus and a +2 alchemical bonus to his Strength for 10 minutes per class level.</Pair>
<Pair title="At 2nd Level">The dragonblood chymist has learned to concentrate the potency of his dragonblood mutagen such that it grants him two claw attacks and a bite attack. If these are the only attacks the dragonblood chymist makes in a round, they are primary attacks and are made using his full base attack bonus. Otherwise, these <Link to="/umr/natural_attacks">natural attacks</Link> are treated as secondary attacks. The claw attacks deal 1d4 points of damage (1d3 if he is Small) and the bite attack deals 1d6 points of damage (1d4 if he is Small). While the mutagen is in effect, he gains a +2 competence bonus on Intimidate checks.</Pair>
<Pair title="At 12th Level">The dragonblood mutagen grants a +4 natural armor bonus and a +4 alchemical bonus to his Strength.</Pair>
<Pair title="At 16th Level">The dragonblood mutagen grants a +6 natural armor bonus and a +6 alchemical bonus to his Strength.</Pair>
<Pair title="Special">This ability otherwise functions as <em>mutagen</em> and precludes the dragonblood chymist from taking any other <em>mutagen</em> discoveries.</Pair>
</Ability>
<Ability id="arc-alchemist-dragonblood_chymist-explosive-breath-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-dragonblood_chymist-explosive-breath-su">Explosive Breath (Su)</Pair>
<Pair hl title="Replaces">Throw Anything</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">A dragonblood chymist gains the <Link to="/discovery/breath_weapon_bomb">breath weapon bomb</Link> alchemist discovery but must apply this discovery to every bomb he creates.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>no</Pair>
</Ability>
<Ability id="arc-alchemist-dragonblood_chymist-draconic-resistances-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-dragonblood_chymist-draconic-resistances-ex">Draconic Resistances (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance, poison use, swift poisoning</Pair>
<Pair title="At 2nd Level">A dragonblood chymist gains a +2 bonus on all saving throws against paralysis and sleep effects.</Pair>
<Pair title="At 6th Level">This bonus increases to +4.</Pair>
<Pair title="At 10th Level">This bonus increases to +6. At 10th level, a dragonblood chymist becomes immune to paralysis and sleep effects.</Pair>
</Ability>
<blockquote>
<p><em>There is no errata for this archetype. As a recommendation, you may want to follow the</em> poison resistance <em>progression and give the +4 bonus at 5th level, the +6 bonus at 8th level, and immunity at 10th level. Consult your GM.</em></p>
</blockquote>
</>};
const _ectochymist = {title: "Ectochymist", jsx: <><h2 id="arc-alchemist-ectochymist-ectochymist">Ectochymist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 112</Link><br/>Ectochymists study the effects of alchemy on soul and spirit, focusing on fighting ghosts and other incorporeal creatures.</p>
<Ability icon={["skills"]} id="arc-alchemist-ectochymist-undefined">
<Pair id="arc-alchemist-ectochymist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair></Ability>
<Ability id="arc-alchemist-ectochymist-ectoplasmic-blanche-su" icon={["mailed-fist","magic-swirl"]}>
<Pair single id="arc-alchemist-ectochymist-ectoplasmic-blanche-su">Ectoplasmic Blanche (Su)</Pair>
<Pair hl title="Replaces">Bombs</Pair>
<Pair title="Usage">Alchemist level + Intelligence modifier times/day.</Pair>
<Pair title="Full-Round Action">An ectochymist can alchemically treat a melee weapon so that it deals full damage to incorporeal creatures. This lasts until the next time that weapon is used to make an attack.</Pair>
</Ability>
<Ability id="arc-alchemist-ectochymist-cool-headed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-ectochymist-cool-headed-ex">Cool-Headed (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="At 2nd Level">An ectochymist gains a +2 bonus on saves against death, fear, and negative energy effects.</Pair>
<Pair title="At 5th Level">This bonus increases to +4.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-alchemist-ectochymist-advanced-ectochymistry-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-ectochymist-advanced-ectochymistry-su">Advanced Ectochymistry (Su)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A weapon coated in an ectochymist's ectoplasmic blanche also deals full damage to haunts.</Pair>
</Ability>
<Ability id="arc-alchemist-ectochymist-swift-ectochymistry-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-ectochymist-swift-ectochymistry-su">Swift Ectochymistry (Su)</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Swift Action">An ectochymist can use ectoplasmic blanche on one of his own weapons. When coated on a weapon wielded by the ectochymist, ectoplasmic blanche lasts for a number of attacks equal to his Intelligence modifier (minimum 1 attack).</Pair>
</Ability>
<Ability id="arc-alchemist-ectochymist-ghost-trap-su" icon={["smoking-finger"]}>
<Pair single id="arc-alchemist-ectochymist-ghost-trap-su">Ghost Trap (Su)</Pair>
<Pair hl title="Replaces">The 8th-level alchemist discovery</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">The ectochymist can expend a use of ectoplasmic blanche to coat the inside of a container with his blanche and throw it at an incorporeal creature as a ranged touch attack. If he hits, the creature receives a Will save to escape the trap (DC = 10 + <Link to="/misc/half">half</Link> his alchemist level + his Intelligence modifier). If the creature fails its save, it is sealed within the vessel until someone breaks or opens that vessel. The ghost trap automatically survives being thrown at the incorporeal creature, but otherwise is only as durable as the vessel (normally hardness 5, 1 hp for a glass bottle).</Pair>
<Pair title="Special">An ectochymist can throw a trap to capture an incorporeal creature of up to 1 Hit Die per alchemist level he possesses.</Pair>
</Ability>
<Ability id="arc-alchemist-ectochymist-ectochymical-analysis-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-ectochymist-ectochymical-analysis-sp">Ectochymical Analysis (Sp)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">An ectochymist can use alchemical processes to uncover esoteric knowledge from a haunted area that would normally require divinations to ascertain. This process takes 10 minutes and expends one use of ectoplasmic blanche. Treat this effect as <Link to="/spell/speak_with_haunt">speak with haunt</Link> with a saving throw DC equal to 10 + 1/2 the ectochymist's class level + the ectochymist's Charisma modifier and a caster level equal to the ectochymist's class level.</Pair>
<Pair title="Special">Because the ectochymist is performing an analysis to answer his questions and not speaking with the haunt directly, he uses Craft (alchemy) rather than Sense Motive to oppose any Bluff checks the spirit might attempt in order to mislead him.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the ectochymist archetype: <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link>, <Link to="/discovery/cognatogen">cognatogen</Link>, <Link to="/discovery/grand_cognatogen">grand cognatogen</Link>, <Link to="/discovery/greater_alchemical_simulacrum">greater alchemical simulacrum</Link>, and <Link to="/discovery/mummification">mummification</Link>.</p>
</>};
const _ectoplasm_master = {title: "Ectoplasm Master", jsx: <><h2 id="arc-alchemist-ectoplasm_master-ectoplasm-master">Ectoplasm Master</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 14</Link><br/>Able to distill spectral horrors into alchemical reagents, the eccentric techniques of the ectoplasm master originated among agents of the <Link to="/rule/whispering_way">Whispering Way</Link>, though their secrets have since been exposed and spread to the winds by their rivals in the Esoteric Order of the Palatine Eye. Today, the ectoplasm master is not automatically regarded as an agent of sinister evil as a result.</p>
<Ability id="arc-alchemist-ectoplasm_master-ectoplasmic-extracts-su" icon={["spell-book"]}>
<Pair single id="arc-alchemist-ectoplasm_master-ectoplasmic-extracts-su">Ectoplasmic Extracts (Su)</Pair>
<Pair hl title="Replaces">Brew Potion</Pair>
<Pair hl title="Alters">Extracts</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">As a result of his eccentric techniques and use of odd alchemical components, an ectoplasm master has an expanded formula list. He adds all sorcerer/wizard spells of 6th level or lower from the necromancy school to his alchemist formula list (but must still learn each of these spells normally). If a spell appears on both the alchemist formula list and the sorcerer/wizard spell list, the ectoplasm master uses the lower of the two spell levels listed for the spell.</Pair>
<Pair title="Special">Instead of using alchemical reagents in order to create alchemical items (including his bombs, extracts, and mutagens), an ectoplasm master uses reagents such as corpse dust, crystallized ectoplasm, and similar reagents as alchemical catalysts. Just as with standard alchemists, the costs of these materials are insignificant and are comparable to the costs of the valueless material components of most spells.</Pair>
</Ability>
<Ability id="arc-alchemist-ectoplasm_master-ectoplasm-master-discoveries-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-ectoplasm_master-ectoplasm-master-discoveries-su">Ectoplasm Master Discoveries (Su)</Pair>
<Pair title="Passive Ability">An ectoplasm master is able to select the following three alchemist discoveries, in addition to general discoveries.</Pair>
</Ability>
<Ability id="arc-alchemist-ectoplasm_master-ectoplasmic-mutagen" extraClasses="subAbility numbered" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-ectoplasm_master-ectoplasmic-mutagen">Ectoplasmic Mutagen</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Passive Ability">Whenever the ectoplasm master imbibes a mutagen, his living flesh transmutes into ectoplasm, causing him to take on a semi-liquid form. He no longer gains a natural armor bonus from his mutagen, but instead becomes immune to critical hits and <Link to="/misc/precision_damage">precision damage</Link> (such as sneak attacks) while under the mutagen's effects.</Pair>
</Ability>
<Ability id="arc-alchemist-ectoplasm_master-ectoplasmic-servant" extraClasses="subAbility numbered" icon={["spell-book","stairs-goal"]}>
<Pair single id="arc-alchemist-ectoplasm_master-ectoplasmic-servant">Ectoplasmic Servant</Pair>
<Pair title="Passive Ability">An ectoplasm master who selects this discovery adds all <Link to="/spell/summon_monster">summon monster</Link> spells of 6th level or lower to his alchemist formula list as ectoplasmic extracts.</Pair>
<Pair title="Ability">Whenever he summons a creature using an ectoplasmic extract, the creature must appear in a square adjacent to his own, and it gains the <Link to="/template/ectoplasmic">ectoplasmic creature template</Link>. Creatures summoned using ectoplasmic extracts cannot have templates other than the ectoplasmic creature template.</Pair>
</Ability>
<Ability id="arc-alchemist-ectoplasm_master-siphon-bomb" extraClasses="subAbility numbered" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-alchemist-ectoplasm_master-siphon-bomb">Siphon Bomb</Pair>
<Pair title="Passive Ability">The ectoplasm master's bombs can be modified to neutralize and crystallize the ectoplasmic energy of haunts and incorporeal undead. A siphon bomb deals full damage to incorporeal creatures as if it were a force effect, but deals only nonlethal damage to corporeal creatures. A siphon bomb also damages haunts, provided the siphon bomb explodes within a haunt's area of effect. This discovery modifies the alchemist's bombs and doesn't stack with other discoveries that modify bombs (Primary Bomb Discoveries).</Pair>
</Ability>
</>};
const _eldritch_poisoner = {title: "Eldritch Poisoner", jsx: <><h2 id="arc-alchemist-eldritch_poisoner-eldritch-poisoner">Eldritch Poisoner</h2>
<p><strong>Sources</strong> <Link to="/source/black_markets">Black Markets pg. 28</Link><br/>Eldritch poisoners are masters of the toxic arts, synthesizing lethal and incapacitating poisons with uncanny speed and expertise.</p>
<Ability id="arc-alchemist-eldritch_poisoner-arcanotoxin-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-arcanotoxin-su" flavor="An eldritch poisoner can blend volatile chemicals and her own personal magic to create deadly poisons known as arcanotoxins.">Arcanotoxin (Su)</Pair>
<Pair hl title="Replaces">Bomb</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Alchemist level + Int modifier times/day.</Pair>
<Pair title="Standard Action">Create an arcanotoxin.</Pair>
<Pair title="Move-Equivalent Action">Apply an arcanotoxin to a weapon.</Pair>
<Pair title="Choice"><p><em>The base stats for the arcanotoxin are presented below this ability block.</em></p>
<p>At 1st level, an eldritch poisoner must choose whether her arcanotoxin deals 1d2 Strength or Dexterity damage. At 3rd level and every 2 alchemist levels thereafter (5th, 7th, 9th, and so on), she can enhance her arcanotoxin in one of the following ways. She can't select the same improvement twice in a row.</p>
<ul>
<li>Select one additional form of ability damage: Charisma, Dexterity, Intelligence, Strength, or Wisdom.</li>
<li>Grant an onset time of 1 round, or increase an existing onset time by 2 rounds (maximum 11 rounds).</li>
<li>Increase the ability damage die <Link to="/misc/by_one_step">by one step</Link> (maximum 1d6).</li>
<li>Increase the number of consecutive saves required to cure the poison by 1 (maximum 3).</li>
<li>Increase the frequency by 2 rounds (maximum 10 rounds).</li>
</ul>
<p>If an eldritch poisoner can deal different kinds of ability damage, she selects which ability to affect each time she creates a dose of arcanotoxin, and can willingly reduce enhanced aspects of her arcanotoxin, such as the save DC or onset time. Some discoveries apply secondary effects; a dose of arcanotoxin can cause only one secondary effect. Alchemist discoveries that affect mundane poisons do not apply to an arcanotoxin.</p>
</Pair>
<Pair title="Special">An arcanotoxin functions only when used by the eldritch poisoner and becomes inert if not used within 1 minute.</Pair>
</Ability>
<div className="sideNoteWrap"><ScrollContainer id="arc-alchemist-eldritch_poisoner--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Arcanotoxin</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Poison; injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 the eldritch poisoner's level + her Int modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 2 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 ability damage (see above)</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-alchemist-eldritch_poisoner-toxicologist-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-toxicologist-ex">Toxicologist (Ex)</Pair>
<Pair hl title="Replaces">Throw Anything</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An eldritch poisoner gains a +2 bonus on Craft (alchemy) checks to create poisons and antitoxins, and creates them in half the normal amount of time.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-sneak-attack-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-sneak-attack-ex">Sneak Attack (Ex)</Pair>
<Pair hl title="Replaces">Mutagen, persistent mutagen</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">At 1st level, the eldritch poisoner gains a <Link to="/ability/sneak_attack">sneak attack</Link> identical to the rogue class feature, dealing 1d6 points of sneak attack damage.</Pair>
<Pair title="At 4th Level">The damage becomes 2d6.</Pair>
<Pair title="At 8th Level">The damage becomes 3d6.</Pair>
<Pair title="At 12th Level">The damage becomes 4d6.</Pair>
<Pair title="At 16th Level">The damage becomes 5d6.</Pair>
<Pair title="At 20th Level">The damage becomes 6d6.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-discoveries" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-discoveries">Discoveries</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An eldritch poisoner can select any of the following eleven discoveries, in addition to those available to other alchemists.</Pair>
<Pair title="Special">Arcanotoxin discoveries with a save DC use her arcanotoxin's save DC.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-antidote-su" extraClasses="subAbility numbered" icon={["remedy"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-antidote-su">Antidote (Su)</Pair>
<Pair title="Ability">The eldritch poisoner can sacrifice one use of her arcanotoxin to create an extract of <Link to="/spell/delay_poison">delay poison</Link> which she can feed to an adjacent, willing creature as a <strong className="hl">standard action</strong>.</Pair>
<Pair title="At 10th Level">She can instead use this ability to create an extract of <Link to="/spell/neutralize_poison">neutralize poison</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-apothecary-ex-sp" extraClasses="subAbility numbered" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-apothecary-ex-sp">Apothecary (Ex, Sp)</Pair>
<Pair title="Standard Action">The eldritch poisoner can use <Link to="/spell/detect_poison">detect poison</Link> at will as a spell-like ability.</Pair>
<Pair title="Passive Ability">She gains bonus equal to <Link to="/misc/half">half</Link> her alchemist level on Heal checks to identify or treat poisons and to the bonus she grants when successfully treating a poison.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-combine-toxins-ex" extraClasses="subAbility numbered" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-combine-toxins-ex">Combine Toxins (Ex)</Pair>
<Pair title="Passive Ability">An eldritch poisoner can diversify her arcanotoxin, dealing damage to any two ability scores with a single dose. The alchemist must already know how to target both ability scores with her arcanotoxin. A combined toxin reduces the damage die of its arcanotoxin by one step, to a minimum of 1 point of ability damage to each ability score.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-contact-toxin-su" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-contact-toxin-su">Contact Toxin (Su)</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Passive Ability">The eldritch poisoner can create her arcanotoxin as a contact poison. A vial of contact arcanotoxin can be thrown up to 30 feet as a ranged touch attack or smeared onto a surface as a <strong className="hl">standard action</strong>, but it becomes inert after 1 minute. The arcanotoxin's save DC is reduced by 2.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-envenom-su" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-envenom-su">Envenom (Su</Pair>
<Pair title="Move-Equivalent Action">The eldritch poisoner can create and apply her arcanotoxin to a held weapon (her own or an ally's). The toxin lasts 1 minute or until used.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-lethal-toxin-su" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-lethal-toxin-su">Lethal Toxin (Su)</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Ability">The eldritch poisoner's arcanotoxin can deal Constitution damage.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-mind-altering-toxin-su" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-mind-altering-toxin-su">Mind-Altering Toxin (Su)</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Passive Ability">Whenever a creature fails its saving throw against the eldritch poisoner's arcanotoxin, it also becomes <Link to="/misc/dazzled">dazzled</Link> by hallucinations for the toxin's duration as a secondary effect.</Pair>
<Pair title="At 10th Level">Targets become <Link to="/misc/confused">confused</Link> instead.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-paralytic-toxin-su" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-paralytic-toxin-su">Paralytic Toxin (Su)</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Passive Ability">Whenever a creature fails its saving throw against the eldritch poisoner's arcanotoxin, it also becomes <Link to="/misc/staggered">staggered</Link> for the toxin's duration as a secondary effect.</Pair>
<Pair title="At 15th Level">The target becomes <Link to="/rule/paralyzed">paralyzed</Link> instead.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-sickening-toxin-su" extraClasses="subAbility numbered" icon={["armor-downgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-sickening-toxin-su">Sickening Toxin (Su)</Pair>
<Pair title="Passive Ability">When a creature fails its save against the eldritch poisoner's arcanotoxin, it also becomes <Link to="/misc/sickened">sickened</Link> for the toxin's duration as a secondary effect.</Pair>
<Pair title="At 12th Level">When the alchemist reaches 12th level, targets become <Link to="/misc/nauseated">nauseated</Link> instead.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-tailored-toxin-ex" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-tailored-toxin-ex">Tailored Toxin (Ex)</Pair>
<Pair title="Ability">Choose one creature type (and subtype, for humanoids or outsiders). The eldritch poisoner's arcanotoxin is particularly effective against such creatures, increasing the save DC by 2.</Pair>
<Pair title="Special">This discovery can be selected more than once; each time it applies to a different creature type (or subtype).</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-toxic-fumes-ex" extraClasses="subAbility numbered" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-toxic-fumes-ex">Toxic Fumes (Ex)</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The eldritch poisoner can create her arcanotoxin as an inhaled poison. She can throw a vial of arcanotoxin up to 30 feet as a ranged touch attack, affecting all creatures in a 10-foot-by-10-foot square. The arcanotoxin's save DC is reduced by 4, its duration is halved, and a successful save immediately ends the inhaled arcanotoxin's effect.</Pair>
</Ability>
<Ability id="arc-alchemist-eldritch_poisoner-careful-injection-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-eldritch_poisoner-careful-injection-ex">Careful Injection (Ex)</Pair>
<Pair hl title="Replaces">The discovery gained at 4th level</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An eldritch poisoner can forgo some of her sneak attack damage in order to increase the save DC of a poison or arcanotoxin on the weapon used to make the sneak attack. The poison's DC increases by 1 for every 1d6 points of sneak attack damage forgone.</Pair>
</Ability>
</>};
const _energist = {title: "Energist", jsx: <><h2 id="arc-alchemist-energist-energist">Energist</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 13</Link><br/>While most alchemists experiment mainly with chemicals and physical materials to create disparate effects, energists tap into the energy of life or death: positive energy or negative energy. Energists are more likely than most alchemists to follow strange traditions and to travel the planes, discussing theories with jyoti, sceaduinars, and undead alike. Energists are often found in lands with unusual variations between life and death, such as Geb, or Virlych in Ustalav.</p>
<p>The energist is an unusual archetype in that all who choose this specialized path must select one of two types of energy to focus on - positive energy or negative energy. The mechanics of how this archetype alters the basic alchemist class abilities function the same regardless of this choice, but these two schools of thought are diametrically opposed in every way. Just as positive energy and negative energy react violently when mixing together, energists of opposing themes traditionally interact violently. Although most who choose positive energy tend to be of good alignment and those who focus on negative energy gravitate toward evil, there is no underlying ethical or moral restriction for an energist to adhere to. Positive energy can be used for evil purposes, and negative energy to pursue good goals. But even then, energists whose alignments and philosophies otherwise would seem to match find themselves at odds if their chosen energies oppose the other.</p>
<p>To energists, the curious and frustrating nature of their oppositional energy is a constant thorn in the side of their intellects' an ever-present reminder that by choosing to specialize in one, they have forsaken potential discoveries in the other.</p>
<Ability id="arc-alchemist-energist-energy-focus" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-energist-energy-focus">Energy Focus</Pair>
<Pair hl title="Alters">Extracts</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">An energist chooses whether to pursue the path of positive energy or the path of negative energy. Once selected, this choice can't be changed.</Pair>
<Pair title="Ability">If he chooses negative energy, he adds <Link to="/spell/harm">harm</Link> as a 6th-level formula and the <Link to="/main/spell_groupings">inflict spells</Link> to his alchemist formulae list and removes <Link to="/spell/heal">heal</Link> and the <em>cure</em> spells.</Pair>
</Ability>
<Ability id="arc-alchemist-energist-energist-bombs-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-energist-energist-bombs-su">Energist Bombs (Su)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An energist's bombs deal damage based on the energy he chose at 1st level. If he chose positive energy, his bombs damage undead creatures, dealing an amount of positive energy damage equal to his normal bomb damage. If he chose negative energy, his bombs damage the living, dealing 1d4 points of negative energy damage plus 1d4 additional points at every odd-numbered alchemist level beyond 1st (instead of 1d6).</Pair>
<Pair title="At 10th Level">Undead damaged by his positive energy bombs must succeed at a Will save or flee for 1 round as if affected by the <Link to="/feat/turn_undead">Turn Undead</Link> feat, while living creatures damaged by an energist's negative energy bombs must succeed at a Fortitude save or be <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
<Pair title="Special">He can't apply other discoveries to his bombs, except those that do <strong>not</strong> have a one-per-bomb limitation. An energist's bombs don't heal creatures normally healed by the energist's chosen energy type.</Pair>
</Ability>
<Ability id="arc-alchemist-energist-healing-ampoule-su" icon={["remedy"]}>
<Pair single id="arc-alchemist-energist-healing-ampoule-su">Healing Ampoule (Su)</Pair>
<Pair hl title="Replaces">2nd-level discovery, swift poisoning</Pair>
<Pair hl title="Alters">Throw anything</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Standard Action">An energist can create and throw a healing ampoule of the same energy type as his bombs up to 30 feet, using two of his daily uses of bombs. A living creature subject to a direct hit by a healing ampoule of positive energy regains 1d4 hit points plus an additional 1d4 hit points for every even-numbered alchemist level an energist has beyond 2nd, while a direct hit by a negative energy healing ampoule instead restores an equivalent number of hit points to an undead target. In either case, the energist adds his Intelligence modifier to the number of hit points healed, as if the ampoule were a splash weapon benefiting from his <em>throw anything</em> ability.</Pair>
<Pair title="Special">A healing ampoule has no splash effect on adjacent targets unless it misses the target; if it misses, determine where it lands as if it were a <Link to="/rule/splash_weapon">splash weapon</Link>. Healing ampoules don't damage creatures normally damaged by the energist's chosen energy type.</Pair>
</Ability>
<Ability id="arc-alchemist-energist-energist-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-energist-energist-resistance-su">Energist Resistance (Su)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An energist gains energy resistance equal to his alchemist level to positive or negative energy, whichever would naturally harm him. When on a positive-dominant plane such as the <Link to="/rule/positive_energy_plane">Positive Energy Plane</Link>, he can apply this resistance to offset the plane's fast healing.</Pair>
</Ability>
</>};
const _energy_scientist = {title: "Energy Scientist", jsx: <><h2 id="arc-alchemist-energy_scientist-energy-scientist">Energy Scientist</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 30</Link><br/>Energy scientists fervently prepare themselves to overcome exposure to specific elemental hazards so that they can traverse the Elemental Planes in search of novel discoveries and reagents.</p>
<Ability icon={["skills"]} id="arc-alchemist-energy_scientist-undefined">
<Pair id="arc-alchemist-energy_scientist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_planes">Knowledge (planes)</Link> (INT), <Link to="/skill/swim">Swim</Link> (STR)</Pair></Ability>
<Ability id="arc-alchemist-energy_scientist-energy-bombs-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-alchemist-energy_scientist-energy-bombs-su">Energy Bombs (Su)</Pair>
<Pair hl title="Replaces">Brew potion</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Whenever an energy scientist regains his daily uses of bombs, he must attune to one element and its corresponding energy type: air (electricity), earth (acid), fire (fire), or water (cold). The energy scientist's bombs deal the type of energy damage that corresponds to his attuned element until he regains his daily uses of bombs, at which point he must attune to one element again.</Pair>
<Pair title="Special">If the energy scientist uses a discovery that changes his bomb's damage type to one that is different from that of his attuned element (such as using the <Link to="/discovery/acid_bomb">acid bomb</Link> discovery when the alchemist is attuned to fire), instead of its normal amount of damage, the bomb deals 1d4 points of damage, plus 1d4 for every odd-numbered alchemist level.</Pair>
</Ability>
<Ability id="arc-alchemist-energy_scientist-limited-extracts-ex" icon={["broken-shield"]}>
<Pair single id="arc-alchemist-energy_scientist-limited-extracts-ex">Limited Extracts (Ex)</Pair>
<Pair hl title="Alters">Alchemy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">An energy scientist reduces his extracts per day by 1 for each extract level he can create, and he cannot prepare extracts with an elemental or energy descriptor that doesn't match his attuned element.</Pair>
</Ability>
<Ability id="arc-alchemist-energy_scientist-attuned-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-energy_scientist-attuned-resistance-ex">Attuned Resistance (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance, poison immunity</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An energy scientist gains a +2 bonus on all saving throws against effects with descriptors that match his currently attuned element or its corresponding energy type, or that deal his currently attuned element's corresponding energy damage.</Pair>
<Pair title="At 5th Level">The bonus becomes +3.</Pair>
<Pair title="At 8th Level">The bonus becomes +4.</Pair>
<Pair title="At 10th Level">An energy scientist gains the effect of <Link to="/spell/planar_adaptation">planar adaptation</Link> for the Elemental Plane tied to his currently attuned element.</Pair>
</Ability>
<Ability id="arc-alchemist-energy_scientist-salvage-energy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-energy_scientist-salvage-energy-ex">Salvage Energy (Ex)</Pair>
<Pair hl title="Replaces">Poison use, swift poisoning</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">An energy scientist can siphon power from slain elementals into temporary alchemical weapons. While studying the remains of an elemental that has been dead for no longer than 1 minute per alchemist level, you can attempt a Craft (alchemy) check (DC = 20 + the elemental's CR) as a standard action. Success means the alchemist produces a number of canisters of <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link> (from fire and magma elementals), <Link to="/eq-weapon/bottled_lightning">bottled lightning</Link> (from air and lightning elementals), <Link to="/eq-weapon/deadground_dust">deadground dust</Link> (from earth and mud elementals), or <Link to="/eq-siegeengine/liquid_ice">liquid ice</Link> (from water and ice elementals) equal to half the elemental's CR, rounded down. These items cannot be sold and become inert after 24 hours.</Pair>
<Pair title="At 6th Level">The save DCs of the items produced increase by 2.</Pair>
</Ability>
</>};
const _fermenter = {title: "Fermenter", jsx: <><h2 id="arc-alchemist-fermenter-fermenter">Fermenter</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 8</Link><br/>Little more than moonshiners to some, fermenters focus their efforts on imbibing substances, learning from the resulting effects on their bodies, and infusing this knowledge into their skill sets. Fermenters consider themselves living experiments and accept the risks and benefits inherent in their work.</p>
<Ability id="arc-alchemist-fermenter-substance-tolerance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-alchemist-fermenter-substance-tolerance-ex">Substance Tolerance (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance, the discovery gained at 10th level</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">Whenever a fermenter consumes a drug, she gains a +2 bonus on her saving throw to resist becoming <Link to="/rule/addiction">addicted</Link>. Whenever she consumes a <Link to="/main/equipment_alchemical">tincture</Link>, she gains its usual benefits, but all penalties imposed are reduced by 1. (If the tincture's penalties instead impose a condition or another penalty that is not numerical, such as the penalties imposed by starlight juice, this ability has no effect at 2nd level.) Additionally, the fermenter can consume a number of alcoholic beverages equal to one plus three times her Constitution modifier before becoming <Link to="/misc/sickened">sickened</Link> for 1 hour per drink above this maximum. (<Link to="/rule/drunkenness">Normal rules for drunkenness can be found here.</Link>)</Pair>
<Pair title="At 8th Level">The bonus to resist addiction increases to +3.</Pair>
<Pair title="At 10th Level">The bonus to resist addiction increases to +4, and the fermenter suffers no penalties at all from drinking tinctures, including conditions and other non-numerical penalties (<Link to="/eq-misc/starlight_juice">starlight juice</Link> would not make her dazzled, for example). Additionally, she can consume a number of alcoholic beverages equal to one plus four times her Constitution modifier before becoming sickened.</Pair>
</Ability>
<Ability id="arc-alchemist-fermenter-volatile-bombs-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-alchemist-fermenter-volatile-bombs-ex" flavor="A fermenter under the influence can make her bombs more potent, but they also become unstable and more difficult to aim.">Volatile Bombs (Ex)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">As long as the fermenter is under the effects of a drug or tincture, or has imbibed an alcoholic drink in the past 10 minutes, her bombs deal 1 additional point of damage per damage die. While this ability is in effect, she also takes a -2 penalty on attack rolls made with her bombs.</Pair>
<Pair title="At 7th Level">The penalty increases to -3.</Pair>
<Pair title="At 13th Level">The penalty becomes -4.</Pair>
<Pair title="At 19th Level">The penalty increases to -5.</Pair>
</Ability>
<Ability id="arc-alchemist-fermenter-batch-brew-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-fermenter-batch-brew-ex">Batch Brew (Ex)</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A fermenter learns how to brew tinctures in larger batches. Whenever she creates a tincture using Craft (alchemy), she can simultaneously create a number of additional tinctures equal to her Intelligence modifier. She expends resources for each tincture separately, but she attempts a single Craft check and applies the result to each tincture being brewed.</Pair>
</Ability>
</>};
const _fire_bomber = {title: "Fire Bomber", jsx: <><h2 id="arc-alchemist-fire_bomber-fire-bomber">Fire Bomber</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 117</Link><br/>Fire bombers are exceptionally good at using bombs to burn creatures and blow things up, but are not quite as good at creating other types of bombs or extracts. A fire bomber has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-fire_bomber--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/goblin">Goblin</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-alchemist-fire_bomber-weapon-and-armor-proficiency" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-fire_bomber-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A fire bomber treats <Link to="/eq-misc/torch">torches</Link> as a simple weapon.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-fire-bombardier-su-or-ex" icon={["upgrade"]}>
<Pair single id="arc-alchemist-fire_bomber-fire-bombardier-su-or-ex">Fire Bombardier (Su or Ex)</Pair>
<Pair hl title="Alters">Bomb, throw anything</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">At 1st level, when a fire bomber throws a bomb that deals fire damage, all creatures in the splash radius take an additional point of damage per die of fire damage dealt. Fire bombers only add their Intelligence bonus to damage from bombs or alchemical substances that deal fire damage. This otherwise works like the alchemist's bomb and throw anything abilities.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-bonus-feats" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-fire_bomber-bonus-feats">Bonus Feats</Pair>
<Pair title="Passive Ability">A fire bomber can select the <Link to="/feat/burn_burn_burn">Burn! Burn! Burn!</Link>, <Link to="/feat/fire_tamer">Fire Tamer</Link>, or <Link to="/feat/flame_heart">Flame Heart</Link> feat in place of a discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-fiery-cocktail-su" icon={["stairs-goal","broken-shield"]}>
<Pair single id="arc-alchemist-fire_bomber-fiery-cocktail-su">Fiery Cocktail (Su)</Pair>
<Pair hl title="Replaces">The alchemist's 4th-level discovery</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">Whenever a fire bomber uses a discovery that deals damage other than fire damage, he can split the damage dice evenly between the bomb's primary damage type and 1d6 points of fire damage; when there is an odd number of damage dice, the odd die of damage comes from the primary damage type. For example, an 8th-level fire bomber could throw a <Link to="/discovery/concussive_bomb">concussive bomb</Link> that deals 2d6 points of fire damage and 3d4 points of sonic damage. Additional effects from the bomb still apply, but the save DC for admixture bombs is reduced by 2.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-fire-body-ex" icon={["spell-book"]}>
<Pair single id="arc-alchemist-fire_bomber-fire-body-ex">Fire Body (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance +6</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A fire bomber adds <Link to="/spell/elemental_body_i">elemental body I</Link> to his extract list as a 3rd-level extract. <Link to="/spell/elemental_body_1">Elemental body</Link> extracts prepared using fire body are limited to <Link to="/monster/fire_elemental">fire elementals</Link> only.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-improved-fire-body-ex" icon={["spell-book"]}>
<Pair single id="arc-alchemist-fire_bomber-improved-fire-body-ex">Improved Fire Body (Ex)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Passive Ability">Fire bombers add <Link to="/spell/elemental_body_ii">elemental body II</Link> to their spell list as a 4th-level extract. <em>Elemental body</em> extracts prepared using improved fire body are limited to fire elementals only.</Pair>
</Ability>
<Ability id="arc-alchemist-fire_bomber-greater-fire-body-ex" icon={["spell-book"]}>
<Pair single id="arc-alchemist-fire_bomber-greater-fire-body-ex">Greater Fire Body (Ex)</Pair>
<Pair hl title="Replaces">Persistent mutagen</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">Fire bombers add <Link to="/spell/elemental_body_iv">elemental body IV</Link> to their spell list as a 5th-level extract. <em>Elemental body</em> extracts prepared using greater fire body are limited to fire elementals only.</Pair>
</Ability>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the fire bomber archetype: <Link to="/discovery/fire_brand">fire brand</Link>, <Link to="/discovery/rocket_bomb">rocket bomb</Link>; <Link to="/discovery/explosive_bomb">explosive bomb</Link>, <Link to="/discovery/fast_bombs">fast bombs</Link>, <Link to="/discovery/inferno_bomb">inferno bomb</Link>, <Link to="/discovery/precise_bombs">precise bombs</Link>, <Link to="/discovery/breath_weapon_bomb">breath weapon bomb</Link>, <Link to="/discovery/explosive_missile">explosive missile</Link>, <Link to="/discovery/immolation_bomb">immolation bomb</Link>; <Link to="/discovery/bottled_ooze">bottled ooze</Link>, <Link to="/discovery/confusion_bomb">confusion bomb</Link>, <Link to="/discovery/strafe_bomb">strafe bomb</Link>.</p>
</>};
const _first_world_innovator = {title: "First World Innovator", jsx: <><h2 id="arc-alchemist-first_world_innovator-first-world-innovator">First World Innovator</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 6</Link><br/>The First World's energies slowly leak into the Material Plane, haphazardly infusing mundane reagents with unpredictable power. Those who can harness these unusual substances - called primal reagents - walk a fine line between genius and catastrophe.</p>
<Ability id="arc-alchemist-first_world_innovator-primal-reagents-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-alchemist-first_world_innovator-primal-reagents-su">Primal Reagents (Su)</Pair>
<Pair hl title="Replaces">Brew Potion, poison use, swift poisoning, poison immunity</Pair>
<Pair title="Ability"><p>By spending 10 minutes patrolling his surroundings after recovering his daily extract slots, a First World innovator can gather a number of doses of primal reagents equal to <Link to="/misc/half">half</Link> his alchemist level + his Intelligence modifier. Primal reagents retain their potency until the next time the First World innovator regains his extract slots. As part of the same action used to consume an extract, imbibe a potion, throw a bomb, or drink his mutagen, the First World innovator can expend 1 dose of primal reagents for additional effects as described below.</p>
<p><strong className="hl">Bomb:</strong> Expending 1 dose can change either the bomb's damage type or its damage dealt. When changing the damage type, the bomb deals acid (1), cold (2), electricity (3), or fire (4) damage (roll 1d4 to determine the type randomly) instead of its normal damage. When changing the bomb's damage dealt, the bomb's die size <Link to="/misc/by_one_step">increases by one step</Link> (for example, increasing 1d6 to 1d8), but it deals 1 less point of damage per die rolled.</p>
<p><strong className="hl">Extract or Potion:</strong> Expending 1 dose increases the caster level of the extract or potion by 1.</p>
<p><strong className="hl">Mutagen:</strong> Expending 1 dose grants the First World innovator an additional effect for the duration of the mutagen, determined at random (by rolling 1d4):</p>
<ol>
<li>Halve all benefits provided by the mutagen.</li>
<li>Imbibing the mutagen immediately either heals 1d4 points of <Link to="/rule/ability_damage">ability damage</Link> to one ability score (if applicable) or restores a number of hit points equal to 2d8 plus the First World innovator's alchemist level.</li>
<li>The mutagen grants the First World innovator his choice of the benefits of the <Link to="/discovery/lingering_spirit">lingering spirit</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, or <Link to="/discovery/spontaneous_healing">spontaneous healing</Link> alchemist discoveries. He cannot select a discovery if he does not meet its prerequisites.</li>
<li>The mutagen grants the First World innovator his choice of the benefits of the <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/tentacle">tentacle</Link>, <Link to="/discovery/vestigial_arm">vestigial arm</Link>, or <Link to="/discovery/wings">wings</Link> alchemist discoveries. He cannot select a discovery if he does not meet its prerequisites.</li>
</ol>
</Pair>
<Pair title="At 6th Level">The alchemist can expend multiple doses of primal reagents to apply multiple effects. When throwing a bomb, he can expend 2 doses to change both the bomb's damage type and damage dealt. When imbibing an elixir or potion, he can expend an additional number of doses equal to the extract's or potion's spell level to increase its caster level by 2 instead of 1. When imbibing a mutagen, he can expend 2 doses to roll twice for additional effects, applying both results.</Pair>
<Pair title="At 10th Level">Whenever the First World innovator or would use a dose of primal reagents to alter the damage type of a bomb, the bomb deals acid, cold, electricity, fire, force, or sonic damage (determine the type randomly) instead of its normal damage. Additionally, whenever the First World innovator would use a dose to gain an additional effect for a mutagen, he may roll 1d6 for the effect, adding to the list of options above: 5) the mutagen grants immunity to poison and paralysis; or 6) one numeric benefit of the mutagen (such as the natural armor bonus) selected by the First World innovator increases by 1d3.</Pair>
</Ability>
<Ability id="arc-alchemist-first_world_innovator-limited-bombs-su" icon={["broken-shield"]}>
<Pair single id="arc-alchemist-first_world_innovator-limited-bombs-su">Limited Bombs (Su)</Pair>
<Pair hl title="Alters">Bombs</Pair>
<Pair title="Passive Ability">A First World innovator can use a number of bombs per day equal to half his class level + his Intelligence modifier (minimum 1) per day.</Pair>
</Ability>
<Ability id="arc-alchemist-first_world_innovator-refined-reagents-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-first_world_innovator-refined-reagents-su">Refined Reagents (Su)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever the First World innovator expends a dose of primal reagents to roll a die to apply a randomized outcome to his bombs or mutagen, he can expend 1 additional dose to ignore the result and roll again; he must take the second result.</Pair>
</Ability>
</>};
const _gloom_chymist = {title: "Gloom Chymist", jsx: <><h2 id="arc-alchemist-gloom_chymist-gloom-chymist">Gloom Chymist</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 18</Link><br/>A breakthrough in Nidalese alchemy led to the creation of glooms, magical fields of darkness from the Shadow Plane that can be momentarily animated with the use of strange compounds. These mixtures are quite efficacious, leading to the spread of their use throughout the rest of the Inner Sea region.</p>
<Ability id="arc-alchemist-gloom_chymist-gloom-su" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-gloom_chymist-gloom-su">Gloom (Su)</Pair>
<Pair hl title="Replaces">Bomb</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A gloom chymist is skilled at mixing potent concoctions known as glooms, which are infused with shadow energy. A gloom is identical to a bomb except that it deals 1d6 points of cold damage + additional damage equal to the gloom chymist's Intelligence modifier. This damage increases by 1d6 for every 2 alchemist levels beyond 1st the gloom chymist has. A gloom does not qualify as a bomb for the purposes of feats or discoveries.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-umbral-gloom-su" icon={["stairs-goal","aura"]}>
<Pair single id="arc-alchemist-gloom_chymist-umbral-gloom-su">Umbral Gloom (Su)</Pair>
<Pair hl title="Replaces">Poison resistance, poison use, swift poisoning</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">Whenever a gloom chymist makes a gloom, he can have it increase or decrease the <Link to="/rule/light_level">light level</Link> by one step within its splash radius, in addition to its other effects. This change lasts for a number of rounds equal to the gloom chymist's Intelligence modifier.</Pair>
<Pair title="At 8th Level">The gloom chymist can expend two uses of his daily glooms to increase or decrease light levels as per <Link to="/spell/daylight">daylight</Link> or <Link to="/spell/deeper_darkness">deeper darkness</Link>, respectively, using his alchemist level as the caster level.</Pair>
</Ability>
<h3 id="arc-alchemist-gloom_chymist-gloom-discoveries">Gloom Discoveries</h3>
<p>These discoveries are only available to alchemists with the Gloom feature.</p>
<Ability id="arc-alchemist-gloom_chymist-bounding-gloom" icon={["magic-swirl"]}>
<Pair single id="arc-alchemist-gloom_chymist-bounding-gloom">Bounding Gloom</Pair>
<Pair title="Prerequisites">10th-level alchemist</Pair>
<Pair title="Ability">The alchemist gains the ability to travel between shadows as if by means of a <Link to="/spell/dimension_door">dimension door</Link> spell. The limitation is that the alchemist's beginning and ending locations must be areas of dim light or darker, or within the radius of an <em>umbral gloom</em> that is lowering the light level. The alchemist can travel up to a total of 100 feet each day in this way. This distance must be used in 10-foot increments; for example, the alchemist can make a single jump of 100 feet or 10 jumps of 10 feet each.</Pair>
<Pair title="Special">For every 2 levels beyond 10th, the distance the alchemist can jump each day doubles (200 feet at 12th level, 400 feet at 14th level, and so on).</Pair>
</Ability>
<h4 id="arc-alchemist-gloom_chymist-primary-bomb-discoveries-gloom">Primary Bomb Discoveries (Gloom)</h4>
<p>Only one of these discoveries can be applied to a bomb, and it cannot have another discovery applied to it with the same one-per-bomb limit (Primary Bomb Discoveries).</p>
<Ability id="arc-alchemist-gloom_chymist-debilitating-gloom" icon={["smoking-finger"]}>
<Pair single id="arc-alchemist-gloom_chymist-debilitating-gloom">Debilitating Gloom</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">A creature struck by the gloom must make a successful Fortitude save or take a penalty to its Strength equal to 1d4 + 1 per 2 alchemist levels (maximum of 1d4+5) for 1 round per alchemist level. A target's Strength score cannot drop below 1. This penalty does not stack with itself.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-draining-gloom" extraClasses="indent" icon={["smoking-finger"]}>
<Pair single id="arc-alchemist-gloom_chymist-draining-gloom">Draining Gloom</Pair>
<Pair title="Prerequisites">8th-level, <em>debilitating gloom</em> discovery</Pair>
<Pair title="Ability">A creature struck by a direct hit with the gloom must make a successful Fortitude save or gain 1 negative level.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-greater-draining-gloom" extraClasses="indent2" icon={["smoking-finger"]}>
<Pair single id="arc-alchemist-gloom_chymist-greater-draining-gloom">Greater Draining Gloom</Pair>
<Pair title="Prerequisites">12th-level alchemist, <em>debilitating gloom</em> and <em>draining gloom</em> discoveries</Pair>
<Pair title="Ability">A creature struck by the gloom must succeed at a Fortitude save or gain 1d4 negative levels.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-glutinous-gloom" icon={["smoking-finger","aura"]}>
<Pair single id="arc-alchemist-gloom_chymist-glutinous-gloom">Glutinous Gloom</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The gloom creates an area in its splash radius that functions as <Link to="/spell/web">web</Link>. The webbing lasts for a number of rounds equal to <Link to="/misc/half">half</Link> the alchemist's level.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-grasping-gloom" icon={["smoking-finger","aura"]}>
<Pair single id="arc-alchemist-gloom_chymist-grasping-gloom">Grasping Gloom</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The gloom creates an area equal to double its splash radius that functions as <Link to="/spell/black_tentacles">black tentacles</Link>. The effect lasts for a number of rounds equal to half the alchemist's level.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-mucilaginous-gloom" icon={["smoking-finger","aura"]}>
<Pair single id="arc-alchemist-gloom_chymist-mucilaginous-gloom">Mucilaginous Gloom</Pair>
<Pair title="Ability">The gloom leaves a chilly gray residue that turns each square in its splash radius into <Link to="/rule/difficult_terrain">difficult terrain</Link>. This effect lasts for a number of rounds equal to the alchemist's level.</Pair>
</Ability>
<Ability id="arc-alchemist-gloom_chymist-rime-bound-gloom" icon={["smoking-finger","aura"]}>
<Pair single id="arc-alchemist-gloom_chymist-rime-bound-gloom">Rime-Bound Gloom</Pair>
<Pair title="Prerequisites">6th-level alchemist</Pair>
<Pair title="Ability">The gloom creates an area of freezing shadow in its splash radius that deals 2d6 points of cold damage to all creatures in the area each turn. This effect lasts 1 round for every 2 alchemist levels.</Pair>
</Ability>
</>};
const _grenadier = {title: "Grenadier (PSFG)", jsx: <><h2 id="arc-alchemist-grenadier-grenadier-psfg">Grenadier (PSFG)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 30</Link><br/>Grenadiers train to exercise their talents in the thick of battle, even when not under the influence of their mutagens. They learn methods of combining weapon attacks with their alchemical magic, and sacrifice skill with poisons in order to become more adept at using alchemical bombs or using alchemical items in conjunction with their martial skills. As an unusual side effect of their skill at handling bombs and alchemical items with increased speed, grenadiers master the ability to drink potions, elixirs, and mutagens quickly and safely, without exposing themselves to peril while doing so. A grenadier has the following class features.</p>
<Ability id="arc-alchemist-grenadier-martial-weapon-proficiency" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-grenadier-martial-weapon-proficiency">Martial Weapon Proficiency</Pair>
<Pair hl title="Replaces">Brew Potion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A grenadier picks one martial weapon to become proficient in the use of.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier-alchemical-weapon-su" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-grenadier-alchemical-weapon-su">Alchemical Weapon (Su)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Move-Equivalent Action">A grenadier can infuse a weapon or piece of ammunition with a single harmful alchemical liquid or powder, such as <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link> or <Link to="/eq-weapon/sneezing_powder">sneezing powder</Link>. This action consumes the alchemical item, but transfers its effect to the weapon in question. The alchemical item takes full effect on the next creature struck by the weapon, but does not splash, spread, or otherwise affect additional targets. Any extra damage added is treated like bonus dice of damage, and is not doubled on a critical hit. The alchemical treatment causes no harm to the weapon treated, and wears off 1 minute after application if no blow is struck.</Pair>
<Pair title="At 6th Level">A grenadier can use her alchemical weapon ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 15th Level">This ability becomes a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier-precise-bombs-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-grenadier-precise-bombs-ex">Precise Bombs (Ex)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A grenadier gains the <Link to="/discovery/precise_bombs">precise bombs</Link> alchemist discovery as a bonus discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier-directed-blast-su" icon={["tornado-discs"]}>
<Pair single id="arc-alchemist-grenadier-directed-blast-su">Directed Blast (Su)</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A grenadier can detonate a bomb so that it splashes in a 20-foot cone rather than affecting a radius. The cone starts at the alchemist and extends away from her in the direction she chooses. The alchemist designates one creature in the squares affected by the cone to be the target of the bomb and makes her attack roll against that creature; all other squares in the cone take splash damage. If the alchemist has the <Link to="/discovery/explosive_bomb">explosive bomb</Link> discovery and throws an explosive directed blast, the cone of splash damage is 30 feet long instead of 20 feet.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier-staggering-blast-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-grenadier-staggering-blast-su">Staggering Blast (Su)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A grenadier's bombs become particularly overwhelming when they explode. Whenever a grenadier scores a successful critical hit with a bomb, the creature directly struck by that bomb is <Link to="/misc/staggered">staggered</Link> for 1d4+1 rounds. A successful Fortitude save (DC equals the bomb's Reflex save DC to avoid splash damage) reduces the duration to 1 round.</Pair>
<Pair title="Special">The effects of this ability stack with a <Link to="/discovery/frost_bomb">frost bomb's</Link> staggering effect, but not with the effects of the <Link to="/feat/staggering_critical">Staggering Critical</Link> feat. Additional hits from a staggering blast add to the effect's overall duration.</Pair>
</Ability>
</>};
const _grenadier_mc = {title: "Grenadier (MC)", jsx: <><h2 id="arc-alchemist-grenadier_mc-grenadier-mc">Grenadier (MC)</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 116</Link><br/>Grenadiers train to exercise their talents in the thick of battle, even when not under the influence of their mutagens. They learn methods of combining weapon attacks with their alchemical magic, and sacrifice skill with poisons in order to become more adept at using alchemical bombs or using alchemical items in conjunction with their martial skills. As an unusual side effect of their skill at handling bombs and alchemical items with increased speed, grenadiers master the ability to drink potions, elixirs, and mutagens quickly and without exposing themselves to peril while doing so. A grenadier has the following class features.</p>
<Ability id="arc-alchemist-grenadier_mc-martial-weapon-proficiency" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-grenadier_mc-martial-weapon-proficiency">Martial Weapon Proficiency</Pair>
<Pair hl title="Replaces">Brew Potion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A grenadier picks one martial weapon to become proficient in the use of.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier_mc-alchemical-weapon-su" icon={["mailed-fist"]}>
<Pair single id="arc-alchemist-grenadier_mc-alchemical-weapon-su">Alchemical Weapon (Su)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Move-Equivalent Action">A grenadier can infuse a weapon or piece of ammunition with a single harmful alchemical liquid or powder, such as <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link> or <Link to="/eq-weapon/sneezing_powder">sneezing powder</Link>. This action consumes the alchemical item, but transfers its effect to the weapon in question. The alchemical item takes full effect on the next creature struck by the weapon, but does not splash, spread, affect additional targets, or benefit from any other effects that specifically affect splash weapons. Any extra damage added is not doubled on a critical hit. The alchemical treatment causes no harm to the weapon treated, and wears off 1 minute after being applied if no blow is struck. Infusing a new alchemical item also removes the effect of any alchemical liquid or powder previously applied with this ability.</Pair>
<Pair title="At 6th Level">A grenadier can use her alchemical weapon ability as a <strong className="hl">swift action</strong>.</Pair>
<Pair title="At 15th Level">This ability becomes a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier_mc-precise-bombs-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-grenadier_mc-precise-bombs-ex">Precise Bombs (Ex)</Pair>
<Pair hl title="Replaces">Poison use</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A grenadier gains the <Link to="/discovery/precise_bombs">precise bombs</Link> alchemist discovery as a bonus discovery.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier_mc-directed-blast-su" icon={["tornado-discs"]}>
<Pair single id="arc-alchemist-grenadier_mc-directed-blast-su">Directed Blast (Su)</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A grenadier can detonate a bomb so that it splashes in a 20-foot cone rather than affecting a radius. The cone starts at the alchemist and extends away from her in the direction she chooses. The alchemist designates one creature in the squares affected by the cone to be the target of the bomb and makes her attack roll against that creature; all other squares in the cone take splash damage. If the alchemist has the <Link to="/discovery/explosive_bomb">explosive bomb</Link> discovery and throws an explosive directed blast, the cone of splash damage is 30 feet long instead of 20 feet.</Pair>
</Ability>
<Ability id="arc-alchemist-grenadier_mc-staggering-blast-su" icon={["upgrade"]}>
<Pair single id="arc-alchemist-grenadier_mc-staggering-blast-su">Staggering Blast (Su)</Pair>
<Pair hl title="Replaces">Poison immunity</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A grenadier's bombs become particularly overwhelming when they explode. Whenever a grenadier confirms a critical hit with a bomb, the creature directly struck by that bomb is <Link to="/misc/staggered">staggered</Link> for 1d4+1 rounds. A successful Fortitude saving throw (DC equals the bomb's Reflex save DC to avoid splash damage) reduces the duration to 1 round.</Pair>
<Pair title="Special">The effects of this ability stack with a <Link to="/discovery/frost_bomb">frost bomb's</Link> staggering effect, but not with the effects of the <Link to="/feat/staggering_critical">Staggering Critical</Link> feat. Additional critical hits from a staggering blast add to the effect's overall duration.</Pair>
</Ability>
</>};
const _gun_chemist = {title: "Gun Chemist", jsx: <><h2 id="arc-alchemist-gun_chemist-gun-chemist">Gun Chemist</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 11</Link><br/>Simple alchemists may dabble in explosives, but for the rare gun chemist, a firearm's barrel is his crucible.</p>
<Ability id="arc-alchemist-gun_chemist-weapon-and-armor-proficiency" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-gun_chemist-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Replaces">Weapon and armor proficiencies</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Gun chemists are proficient with all simple weapons, firearms, and light armor.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-alchemical-ordnance-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-alchemist-gun_chemist-alchemical-ordnance-su" flavor="A gun chemist is adept at using his know-how to infuse his ammunition with volatile chemicals and his own magical reserves.">Alchemical Ordnance (Su)</Pair>
<Pair hl title="Replaces">Bombs</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Free Action">When loading a firearm, he can infuse the ammunition. The compounds are unstable, and if not fired within a number of rounds equal to the gun chemist's Intelligence modifier (though no sooner than the end of his next turn), the alchemical ordnance becomes inert and loses its additional effects; he can still fire the firearm as normal.</Pair>
<Pair title="Usage">Each day, the gun chemist can infuse a number of pieces of alchemical ordnance equal to his class level + his Intelligence modifier, and he can fire no more than one piece per round.</Pair>
<Pair title="Special">The DCs of saving throws associated with alchemical ordnance are equal to 10 + <Link to="/misc/half">half</Link> the gun chemist's alchemist level + the gun chemist's Intelligence modifier.</Pair>
</Ability>
<p><strong className="hl">Alchemical ordnance</strong> deals damage as normal, plus an amount of fire damage equal to 1d6 + the gun chemist's Intelligence modifier. The damage of the gun chemist's alchemical ordnance increases by 1d6 points at every odd-numbered class level (this bonus damage is not multiplied on a critical hit or by using feats such as <Link to="/feat/vital_strike">Vital Strike</Link>). The explosive nature of alchemical ordnance causes the attack - both the firearm's base damage and the alchemical ordnance's additional damage - to deal full damage to <Link to="/subtype/swarm">swarms</Link> of any size. If the gun chemist uses alchemical ordnance to make a scattering shot with a weapon with the <Link to="/misc/scatter">scatter</Link> quality, each creature in the area instead takes additional fire damage equal to the alchemical ordnance's minimum damage (so if the alchemical ordnance would deal 2d6+4 points of fire damage normally, it deals only 6 points of fire damage with a scattering shot).</p>
<p>The gun chemist's alchemical ordnance functions safely only in weapons he wields. If anyone but a gun chemist attempts to fire a firearm loaded with alchemical ordnance that is not yet inert, the firearm's misfire value increases by 4. If the firearm would explode as the result of such a misfire, the explosion deals additional fire damage equal to that of the alchemical ordnance.</p>
<p>Alchemical ordnance is treated like an alchemist's bomb for the purpose of <strong className="hl">discoveries</strong>, though such discoveries ignore any effects associated with a bomb's splash damage or radius unless the gun chemist also applies the <em>exploding bullet</em> discovery. A scattering shot modified by a discovery applies additional effects as though affected creatures were caught in the splash damage of a bomb rather than subject to a direct hit.</p>
<Ability id="arc-alchemist-gun_chemist-gunsmith" icon={["stairs-goal","bowman"]}>
<Pair single id="arc-alchemist-gun_chemist-gunsmith">Gunsmith</Pair>
<Pair hl title="Replaces">Brew Potion, Throw Anything</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A gun chemist gains a battered gun identical to the one gained by a 1st level <Link to="/class/gunslinger">gunslinger</Link>, as well as the <Link to="/feat/gunsmithing">Gunsmithing</Link> feat (including the ability to restore his battered gun as if he were a gunslinger).</Pair>
<Pair title="Standard Action">The gun chemist can expend one use of his alchemical ordnance to remove the broken condition from a single firearm he is currently wielding, as long as that condition was gained from a misfire.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-discoveries" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-gun_chemist-discoveries">Discoveries</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A gun chemist selects alchemist discoveries as normal. He can also select from the three discoveries below, which are unique to the gun chemist.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-chemical-stability" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-gun_chemist-chemical-stability">Chemical Stability</Pair>
<Pair title="Passive Ability">When firing an alchemical ordnance, the gun chemist reduces the misfire value of the firearm by 1 (minimum 0) and ignores any increased misfire value from using an alchemical cartridge.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-exploding-bullet" extraClasses="subAbility numbered" icon={["upgrade"]}>
<Pair single id="arc-alchemist-gun_chemist-exploding-bullet">Exploding Bullet</Pair>
<Pair title="Prerequisites">4th-level alchemist</Pair>
<Pair title="Passive Ability">The gun chemist's alchemical ordnance splashes adjacent targets as though it were a splash weapon, dealing the alchemical ordnance's minimum additional damage to other creatures caught in the splash (Reflex half). This discovery does not stack with other bomb-altering alchemist discoveries that have a one-per-bomb limit (Primary Bomb Discoveries).</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-fast-ordnance" extraClasses="subAbility numbered" icon={["upgrade","bowman"]}>
<Pair single id="arc-alchemist-gun_chemist-fast-ordnance">Fast Ordnance</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">A gun chemist with this discovery can fire more than one piece of alchemical ordnance as part of a <Link to="/rule/full_attack">full attack</Link>.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-cartridge-savant-ex" icon={["upgrade","bowman"]}>
<Pair single id="arc-alchemist-gun_chemist-cartridge-savant-ex">Cartridge Savant (Ex)</Pair>
<Pair hl title="Replaces">Poison resistance</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">At 2nd level, a gun chemist can make optimal and highly efficient use of <Link to="/eq-weapon/alchemical_cartridge_flare">alchemical cartridges</Link>, such as <em>flare</em> cartridges. If the gun chemist fires such an alchemical cartridge and it allows a saving throw to negate or reduce the cartridge's effect, the saving throw's DC increases by 1 (to a maximum DC of 22). When a gun chemist fires an alchemical cartridge that deals a type of damage in place of a firearm's normal damage (such as a <em>dragon's breath</em> cartridge), he can increase the damage dealt by an amount equal to his Intelligence modifier.</Pair>
<Pair title="At 5th Level">The DC now increases by 2.</Pair>
<Pair title="At 8th Level">The DC now increases by 3.</Pair>
<Pair title="At 11th Level">The DC now increases by 4.</Pair>
<Pair title="At 14th Level">The DC now increases by 5.</Pair>
<Pair title="At 17th Level">The DC now increases by 6.</Pair>
<Pair title="At 20th Level">The DC now increases by 7.</Pair>
</Ability>
<Ability id="arc-alchemist-gun_chemist-repeat-fire-ex" icon={["stairs-goal"]}>
<Pair single id="arc-alchemist-gun_chemist-repeat-fire-ex">Repeat Fire (Ex)</Pair>
<Pair hl title="Replaces">Swift poisoning</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A gun chemist gains <Link to="/feat/rapid_reload">Rapid Reload</Link> as a bonus feat and must select a type of firearm. If he already has this feat, he can instead gain one <Link to="/main/combat_feat">combat feat</Link> for which he qualifies.</Pair>
</Ability>
</>};
export default {aerochemist:_aerochemist,alchemical_sapper:_alchemical_sapper,alchemical_trapper:_alchemical_trapper,aquachymist:_aquachymist,beastmorph:_beastmorph,blazing_torchbearer:_blazing_torchbearer,blightseeker:_blightseeker,blood_alchemist:_blood_alchemist,bogborn_alchemist:_bogborn_alchemist,bramble_brewer:_bramble_brewer,chirurgeon:_chirurgeon,clone_master:_clone_master,concocter:_concocter,construct_rider:_construct_rider,crimson_chymist:_crimson_chymist,cruorchymist:_cruorchymist,crypt_breaker:_crypt_breaker,deep_bomber:_deep_bomber,dimensional_excavator:_dimensional_excavator,dragonblood_chymist:_dragonblood_chymist,ectochymist:_ectochymist,ectoplasm_master:_ectoplasm_master,eldritch_poisoner:_eldritch_poisoner,energist:_energist,energy_scientist:_energy_scientist,fermenter:_fermenter,fire_bomber:_fire_bomber,first_world_innovator:_first_world_innovator,gloom_chymist:_gloom_chymist,grenadier:_grenadier,grenadier_mc:_grenadier_mc,gun_chemist:_gun_chemist}