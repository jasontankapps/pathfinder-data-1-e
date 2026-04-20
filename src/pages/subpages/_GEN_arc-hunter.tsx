import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _aquatic_beastmaster = {title: "Aquatic Beastmaster", jsx: <><h2 id="arc-hunter-aquatic_beastmaster-aquatic-beastmaster">Aquatic Beastmaster</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_sea">Blood of the Sea pg. 22</Link><br/>Hunters beneath the sea are just as committed as their surface-dwelling counterparts to working alongside their animal companions to eradicate threats. Although many aquatic beastmasters simply want to be left alone in the areas they have claimed as their own, others use their abilities to fight against aboleth masterminds, sahuagin tribes, and other villains that haunt the oceans.</p>
<Ability id="arc-hunter-aquatic_beastmaster-animal-focus-su" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Info">An aquatic beastmaster emulates animals found beneath the waves. This functions as <Link to="/ability/animal_focus">animal focus</Link>, but it allows only the following choices.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-crab" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-crab">Crab</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks and a +2 competence bonus on <Link to="/rule/grapple">grapple</Link> combat maneuver checks.<sup><InnerLink showBacklink="backlink-arc-hunter-aquatic_beastmaster-fake-fn-1" id="arc-hunter-aquatic_beastmaster-fake-fn-1" data-hash-target to="arc-hunter-aquatic_beastmaster-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="At 8th Level">These bonuses increase to +6 and +4, respectively.</Pair>
<Pair title="At 15th Level">They increase to +8 and +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-dolphin" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-dolphin">Dolphin</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Knowledge checks to identify the abilities and weaknesses of creatures.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">It increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-eel" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-eel">Eel</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Dexterity.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">It increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-manta-ray" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-manta-ray">Manta Ray</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Stealth checks and a +2 bonus on saving throws against poison.</Pair>
<Pair title="At 8th Level">These bonuses increase to +6 and +4, respectively.</Pair>
<Pair title="At 15th Level">They increase to +8 and +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-octopus" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-octopus">Octopus</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks and a +2 competence bonus on grapple combat maneuver checks.<sup><InnerLink showBacklink="backlink-arc-hunter-aquatic_beastmaster-fake-fn-1.2" id="arc-hunter-aquatic_beastmaster-fake-fn-1.2" data-hash-target to="arc-hunter-aquatic_beastmaster-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="At 8th Level">These bonuses increase to +6 and +4, respectively.</Pair>
<Pair title="At 15th Level">They increase to +8 and +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-orca" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-orca">Orca</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Strength</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">It increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-shark" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-shark">Shark</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Survival checks to track a creature to which the hunter or her animal companion has dealt damage in the past 24 hours.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">It increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-snake" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-snake">Snake</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on attack rolls when making attacks of opportunity and a +2 dodge bonus to AC against attacks of opportunity.</Pair>
<Pair title="At 8th Level">These bonuses increases to +4.</Pair>
<Pair title="At 15th Level">They increase to +6.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-turtle" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-turtle">Turtle</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to its natural armor bonus.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">It increases to +6.</Pair>
<Pair title="Special">A creature without natural armor has an effective natural armor bonus of +0.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-wild-empathy-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild Empathy</Pair>
<Pair title="Ability">An aquatic beastmaster's wild empathy functions only on creatures that have a swim speed or the aquatic or water subtype. However, she can improve the attitude of any such creature with Intelligence 2 or less regardless of type, including mindless creatures.</Pair>
</Ability>
<Ability id="arc-hunter-aquatic_beastmaster-oceanic-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-aquatic_beastmaster-oceanic-defense-ex">Oceanic Defense (Ex)</Pair>
<Pair hl title="Replaces">Improved empathic link</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An aquatic beastmaster gains a +4 bonus on saving throws against spells with the water descriptor and the extraordinary or supernatural abilities of creatures with the aquatic or water subtype whenever her animal companion is within 60 feet.</Pair>
</Ability>
<section data-footnotes><h3 id="arc-hunter-aquatic_beastmaster-label">Footnotes</h3><ol>
<li id="arc-hunter-aquatic_beastmaster-fake-fn-1-target"><p>The crab and octopus foci grant the exact same bonuses. There has been no errata addressing this. If you wish to alter this with your GM, consider the following: The crab's bonuses are the same as those of the crab focus from the <Link to="/arc-hunter/verminous_hunter">verminous hunter</Link>. In fact, alternate animal foci from different archetypes almost always offer the exact same bonuses when they appear in different archetypes. The only exceptions are the scorpion (the verminous hunter's scorpion gives bonuses to stealth and grapple, while the <Link to="/arc-hunter/scarab_stalker">scarab stalker</Link> version provides defense vs poison) and the octopus. The octopus focus from the <Link to="/arc-hunter/courtly_hunter">courtly hunter</Link> grants bonuses to Escape Artist. The only other similarly-shaped animal focus is the <Link to="/arc-hunter/pelagic_hunter">pelagic hunter's</Link> kraken focus, which grants the <Link to="/umr/jet">jet</Link> ability. <InnerLink aria-label="Back to reference 1" id="backlink-arc-hunter-aquatic_beastmaster-fake-fn-1" data-hash-target to="arc-hunter-aquatic_beastmaster-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-arc-hunter-aquatic_beastmaster-fake-fn-1.2" data-hash-target to="arc-hunter-aquatic_beastmaster-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></>};
const _chameleon_adept = {title: "Chameleon Adept", jsx: <><h2 id="arc-hunter-chameleon_adept-chameleon-adept">Chameleon Adept</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 52</Link><br/>Some hunters are masters of blending into every situation, even making their companions appear humanoid for brief periods of time.</p>
<Ability icon={["skills"]} id="arc-hunter-chameleon_adept-undefined">
<Pair id="arc-hunter-chameleon_adept-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA)</Pair></Ability>
<Ability id="arc-hunter-chameleon_adept-shifting-companion-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-chameleon_adept-shifting-companion-su">Shifting Companion (Su)</Pair>
<Pair hl title="Replaces">Teamwork feats, hunter's tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">10 minutes/day per hunter level; these minutes need not be consecutive, but they must be spent in 10-minute increments</Pair>
<Pair title="Standard Action">A chameleon adept can cause her companion to assume a humanoid form of the same race as herself. This functions as <Link to="/spell/alter_self">alter self</Link>, except it is used on an adjacent animal companion to have it assume a humanoid form. The companion always assumes the same form, selected when the hunter reaches 3rd level. The hunter can change this form when she gains a new level, but the companion loses the old form and can't resume it unless the chameleon adept chooses that form when she reaches a new level.</Pair>
<Pair title="Special">The companion is no more intelligent or less savage than normal; the hunter still needs to control it as normal, and it still can't activate magic items or wield manufactured weapons.</Pair>
</Ability>
<Ability id="arc-hunter-chameleon_adept-terrain-chameleon-su" icon={["upgrade"]}>
<Pair single id="arc-hunter-chameleon_adept-terrain-chameleon-su">Terrain Chameleon (Su)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Choice">Choose one type of terrain from the ranger's list of <Link to="/ability/favored_terrain">favored terrains</Link>. When in the specified type of terrain, a chameleon adept gains a bonus equal to <Link to="/misc/half">half</Link> her hunter level on Stealth checks.</Pair>
</Ability>
<Ability id="arc-hunter-chameleon_adept-savage-diplomacy-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-chameleon_adept-savage-diplomacy-ex">Savage Diplomacy (Ex)</Pair>
<Pair hl title="Replaces">Precise companion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">While in humanoid form, a chameleon adept's animal companion grants its master a +2 circumstance bonus on Diplomacy and Intimidate checks. <em>Savage diplomacy</em> functions only as long as the creature being influenced can see both the companion and the master.</Pair>
<Pair title="At 9th Level">This bonus becomes +2.</Pair>
<Pair title="At 13th Level">This bonus increases to +3.</Pair>
<Pair title="At 17th Level">This bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-hunter-chameleon_adept-animal-shape-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-chameleon_adept-animal-shape-su">Animal Shape (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Usage">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">A chameleon adept can assume a form superficially identical to her animal companion's animal form. She gains no bonuses or natural attacks while in this form, only forms of movement. Her size category does not change. This is a polymorph effect.</Pair>
<Pair title="Special">She can dismiss this ability at any point as a <strong className="hl">standard action</strong>.</Pair>
</Ability>
<Ability id="arc-hunter-chameleon_adept-improved-shifting-companion-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-chameleon_adept-improved-shifting-companion-su">Improved Shifting Companion (Su)</Pair>
<Pair hl title="Replaces">Raise animal companion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A chameleon adept's animal companion improves its ability to change shape. It can use <em>wild shape,</em> as a <Link to="/class/druid">druid</Link> of half the hunter's level, to gain the effects of <Link to="/spell/beast_shape_i">beast shape I.</Link> Unlike a druid's wild shape, this ability does not improve to encompass larger or smaller animals or elementals.</Pair>
</Ability>
<Ability id="arc-hunter-chameleon_adept-one-with-the-wild-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-chameleon_adept-one-with-the-wild-ex">One with the Wild (Ex)</Pair>
<Pair hl title="Alters">One with the wild</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">When the companion is using <em>wild shape</em> to appear as a different type of animal, it counts as being in that <em>animal focus</em> for the purpose of <em>one with the wild.</em></Pair>
</Ability>
</>};
const _colluding_scoundrel = {title: "Colluding Scoundrel", jsx: <><h2 id="arc-hunter-colluding_scoundrel-colluding-scoundrel">Colluding Scoundrel</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 11</Link><br/>The colluding scoundrel is a canny and conniving skirmisher, manipulating her enemies and leveraging her allies for her own benefit. A Free Captain ordering her crew to occupy foes and thus expose the enemy to her attacks might take this archetype, and colluding scoundrels have proven to be formidable members of the Wasp Queens, as their giant wasp companions draw out opponents to fall under the Wasp Queens' stinging blades. In any case, the colluding scoundrel rarely concerns herself overmuch with her allies' well-being.</p>
<Ability id="arc-hunter-colluding_scoundrel-scapegoat-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-hunter-colluding_scoundrel-scapegoat-ex" flavor="A colluding scoundrel is adept at redirecting a foe's hostility toward another creature, creating openings for her own attacks.">Scapegoat (Ex)</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Usage">1 time/day per hunter level</Pair>
<Pair title="Swift Action"><p>A colluding scoundrel can target one foe within 30 feet and designate one willing ally adjacent to that foe as a scapegoat. For the following minute, the target takes a -2 penalty on attacks against any creature other than the designated scapegoat, and the target has a 10% spell failure chance on spells that don't target the scapegoat or include the scapegoat in their area of effect.</p>
<p>The colluding scoundrel can designate her animal companion as a scapegoat without it counting against her daily uses of this ability.</p>
</Pair>
<Pair title="At 8th Level">The penalty becomes -4.</Pair>
<Pair title="At 15th Level">The penalty increases to -6.</Pair>
<Pair title="Special">This is a mind-affecting effect. The effect ends if the colluding scoundrel falls unconscious or is slain.</Pair>
</Ability>
<Ability id="arc-hunter-colluding_scoundrel-backstabber-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-colluding_scoundrel-backstabber-ex">Backstabber (Ex)</Pair>
<Pair hl title="Replaces">Second animal focus</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A colluding scoundrel deals 2d6 additional points of damage on attacks against a target threatened by an ally currently designated as the scapegoat.</Pair>
<Pair title="At 15th Level">This increases to 3d6 points of damage.</Pair>
<Pair title="Special">This is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit, but it does stack with <Link to="/ability/sneak_attack">sneak attack</Link> and similar effects.</Pair>
</Ability>
<Ability id="arc-hunter-colluding_scoundrel-master-backstabber-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-colluding_scoundrel-master-backstabber-ex" flavor="A colluding scoundrel becomes a master at dispatching distracted targets.">Master Backstabber (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Standard Action">She can make a single attack against a foe that is taking the penalties of her scapegoat ability and is adjacent to an ally currently designated as the scapegoat. If the attack hits, the target takes damage normally and must succeed at a Fortitude saving throw (DC = 10 + half the colluding scoundrel's level + her Wisdom modifier) or be slain.</Pair>
<Pair title="Special">Whether or not the target succeeds, it cannot be targeted by this ability again (by any colluding scoundrel) for 24 hours.</Pair>
</Ability>
</>};
const _courtly_hunter = {title: "Courtly Hunter", jsx: <><h2 id="arc-hunter-courtly_hunter-courtly-hunter">Courtly Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 64</Link><br/>While most hunters find themselves at ease in the wildest parts of the world, courtly hunters instead make their homes in cultured urban environments. They and their animal companions are more refined than typical hunters, using their skills to navigate the winding paths of courtly intrigue as surely as other hunters find trails in the wilderness.</p>
<Ability icon={["skills"]} id="arc-hunter-courtly_hunter-undefined">
<Pair id="arc-hunter-courtly_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (geography), Knowledge (nature), Survival</Pair></Ability>
<Ability id="arc-hunter-courtly_hunter-courtly-companion" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-courtly_hunter-courtly-companion">Courtly Companion</Pair>
<Pair hl title="Alters">Animal companion</Pair>
<Pair title="Passive Ability">A courtly hunter's animal companion was touched by either the fey or the nature spirits that form leshys and answer to <Link to="/spell/commune_with_nature">commune with nature</Link>, granting it its own intelligence. The companion's type changes to <Link to="/type/magical_beast">magical beast</Link> (<Link to="/subtype/augmented">augmented</Link> animal), but this doesn't change any of its statistics and it counts as an animal, not as a magical beast, for the purposes of determining all effects, prerequisites, and so on. It does not learn tricks, but it does have an Intelligence score equal to that of a <Link to="/sidekick/familiar">familiar</Link> belonging to a <Link to="/class/wizard">wizard</Link> of the courtly hunter's hunter level.</Pair>
<Pair title="Special">Levels in other classes that grant animal companions do not stack with levels of courtly hunter for the purpose of determining the abilities of her courtly companion.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-refined-focus-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-courtly_hunter-refined-focus-su">Refined Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Ability">A courtly hunter has access to a different set of animal aspects with her animal focus. She does not gain access to the bear, bull, frog, monkey, snake, stag, tiger, or wolf <Link to="/ability/animal_foci">aspects</Link>. (She still has access to the bat, falcon, mouse, and owl aspects.) Instead, she gains access to the following aspects.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-beaver" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-beaver">Beaver</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Craft checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-chameleon" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-chameleon">Chameleon</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Disguise checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-eagle" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-eagle">Eagle</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Charisma.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-fox" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-fox">Fox</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Bluff checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-frilled-lizard" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-frilled-lizard">Frilled Lizard</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Intimidate checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-octopus" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-octopus">Octopus</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Escape Artist checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-raccoon" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-raccoon">Raccoon</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Sleight of Hand checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-songbird" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-courtly_hunter-songbird">Songbird</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Perform checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-subtle-companion-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-courtly_hunter-subtle-companion-su">Subtle Companion (Su)</Pair>
<Pair hl title="Replaces">Precise companion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Standard Action">A courtly hunter can transform her animal companion into a similar Tiny animal to allow it hide easily or even blend in and act as a spy. For instance, a tiger could be transformed into a housecat, a wolf could be transformed into a Tiny dog, a dire bat could be transformed into a Tiny flying fox, and so on. This functions as a polymorph effect, and the animal companion gains a +2 size bonus to Dexterity and a -4 size penalty to Strength (use <Link to="/spelldef/polymorph">the polymorph table</Link> to adjust its ability score if the animal companion is larger than Medium).</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-skill-bond-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-courtly_hunter-skill-bond-ex">Skill Bond (Ex)</Pair>
<Pair hl title="Replaces">Hunter tactics, the hunter's bonus teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A courtly hunter's animal companion gains the courtly hunter's class skills as class skills. Her animal companion can use the courtly hunter's skill ranks in a skill in place of its own, but only to a maximum of the courtly hunter's hunter level (for instance, if a character had 3 levels in courtly hunter and 5 ranks in Diplomacy, her animal companion could either share 3 ranks with skill bond or use its own ranks, whichever would result in a higher total skill bonus).</Pair>
</Ability>
<Ability id="arc-hunter-courtly_hunter-alternate-form-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-courtly_hunter-alternate-form-su">Alternate Form (Su)</Pair>
<Pair hl title="Replaces">Bonus tricks</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">The courtly hunter's animal companion learns an additional subtle form. When the courtly hunter gains this ability, she chooses a Tiny animal. When under the effects of the <em>subtle companion</em> ability, the courtly hunter's animal companion can change between a shrunken, more innocuous version of its original shape or the shape of the chosen animal as a <strong className="hl">standard action</strong>. When it transforms, it loses abilities dependent on its original shape and gains abilities from its new shape as <Link to="/spell/beast_shape_ii">beast shape II</Link>.</Pair>
<Pair title="At 13th Level">The courtly hunter can select an additional form to add to the animal companion's list of choices while it is in its polymorphed form.</Pair>
<Pair title="At 19th Level">She can select a fourth such form.</Pair>
</Ability>
</>};
const _divine_hunter = {title: "Divine Hunter", jsx: <><h2 id="arc-hunter-divine_hunter-divine-hunter">Divine Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 95</Link><br/>While most hunters heed the call of nature and fight to protect its bounty, some are inspired to serve a higher power. These divine hunters use faith to aid them in their struggles, and their faith infuses their animal companions, making these companions champions of their deities.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-hunter-divine_hunter--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>A divine hunter's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis. A divine hunter can otherwise be of any alignment.</td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-hunter-divine_hunter-undefined">
<Pair id="arc-hunter-divine_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_religion">Knowledge (religion)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (dungeoneering)</Pair></Ability>
<Ability id="arc-hunter-divine_hunter-domain" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-divine_hunter-domain">Domain</Pair>
<Pair hl title="Replaces">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability"><p>A divine hunter learns to call upon the power of her deity. The divine hunter must select one <Link to="/ability/domains">domain</Link> from those available to her deity. She gains the granted powers of this domain, using her hunter level - 2 as her cleric level for determining when the powers are gained and what effects they have. Once she chooses this domain, it cannot be changed.</p>
<p>If the divine hunter selects the <Link to="/domain/animal">animal</Link> domain, she does not gain a second animal companion upon reaching an effective cleric level of 4th. When the divine hunter would gain that ability, her animal companion instead gains two ability score increases (gaining +1 to two different ability scores or +2 to one ability score). If her animal companion dies or is released, when she gains a new one, it benefits from this ability score increase.</p>
<p>In addition, the divine hunter adds the 1st-level domain spell from her domain to her list of spells known.</p>
</Pair>
<Pair title="At 6th Level">She adds the 2nd-level domain spell to her list of spells known.</Pair>
<Pair title="At 9th Level">She adds the 3rd-level domain spell, as above.</Pair>
<Pair title="At 12th Level">She adds the 4th-level domain spell.</Pair>
<Pair title="At 15th Level">She adds the 5th-level domain spell.</Pair>
<Pair title="At 18th Level">She adds the 6th-level domain spell.</Pair>
</Ability>
<Ability id="arc-hunter-divine_hunter-otherworldly-companion-su" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-divine_hunter-otherworldly-companion-su">Otherworldly Companion (Su)</Pair>
<Pair hl title="Replaces">Hunter tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A hunter's companion takes on otherworldly features. If the divine hunter is good (or worships a good deity), the animal companion gains the <Link to="/template/celestial">celestial template</Link>. If the hunter is evil (or worships an evil deity), the animal companion gains the <Link to="/template/fiendish">fiendish template</Link>. If the hunter is neutral and worships a neutral deity, she must choose either the celestial or fiendish template; once this choice is made, it cannot be changed. The companion's CR is considered to be equal to its Hit Dice for the purpose of the celestial or fiendish template.</Pair>
</Ability>
</>};
const _feral_hunter = {title: "Feral Hunter", jsx: <><h2 id="arc-hunter-feral_hunter-feral-hunter">Feral Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 95</Link><br/>A feral hunter has forged a bond with nature that's so strong that she doesn't merely channel the aspects of animals' she actually becomes an animal herself. Though she lacks an animal companion, a feral hunter is in tune with the beast lurking within her flesh and spirit, and lives in a near-wild state of being. A feral hunter often resembles a lycanthrope, but her power comes from her own nature and is not influenced by moonlight or silver.</p>
<Ability id="arc-hunter-feral_hunter-solitary" icon={["broken-shield"]}>
<Pair single id="arc-hunter-feral_hunter-solitary">Solitary</Pair>
<Pair title="Info">Unlike most hunters, a feral hunter does not gain an animal companion.</Pair>
</Ability>
<Ability id="arc-hunter-feral_hunter-feral-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-feral_hunter-feral-focus-su">Feral Focus (Su)</Pair>
<Pair hl title="Replaces">Hunter tactics, speak with master</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>A feral hunter gains a limited ability to change her shape into hybrid animal forms. This functions as the <em>animal focus</em> class feature, except that the hunter always applies the animal aspect to herself, and there is no limit to this ability's duration. She can end this ability as a <strong className="hl">free action</strong>.</p>
<p>When a feral hunter uses this ability, her body takes on cosmetic aspects of an animal, such as furry skin, longer nails, elongated teeth, and oddly colored eyes; these changes do not grant her any abilities other than what is stated in the <em>animal focus,</em> and end when she takes on a different aspect or ends the ability. This physical change is a <Link to="/spelldef/polymorph">polymorph</Link> effect, though the effects of the <em>animal focus</em> are not.</p>
</Pair>
</Ability>
<Ability id="arc-hunter-feral_hunter-precise-summoned-animal-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-feral_hunter-precise-summoned-animal-ex">Precise Summoned Animal (Ex)</Pair>
<Pair hl title="Alters">Precise companion</Pair>
<Pair title="Passive Ability">This functions like the <em>precise companion</em> class ability, except the hunter grants all her teamwork feats to all animals she summons with <Link to="/spell/summon_natures_ally">summon nature's ally</Link>.</Pair>
</Ability>
<Ability id="arc-hunter-feral_hunter-wild-shape-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-feral_hunter-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Bonus tricks, improved empathic link, greater empathic link, master of the wild, raise animal companion</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A feral hunter gains the ability to change shape. This ability functions like the <Link to="/class/druid">druid</Link> wild shape ability, except the hunter can take only animal forms (not elemental or plant forms). The hunter's effective druid level is equal to her class level.</Pair>
</Ability>
<Ability id="arc-hunter-feral_hunter-summon-pack-sp" icon={["upgrade"]}>
<Pair single id="arc-hunter-feral_hunter-summon-pack-sp">Summon Pack (Sp)</Pair>
<Pair hl title="Replaces">Teamwork feats gained at 6th, 9th, 12th, 15th, and 18th levels</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Whenever a feral hunter casts a <em>summon nature's ally</em> spell to summon one or more animals, she summons one additional animal of the same type. The summoned creature or creatures must be animals and must be of the same type as the hunter's current aspect or of a similar type (bears for bear aspect, dogs or wolves for wolf aspect, great cats for the tiger aspect, and so on). The additional creature immediately vanishes if the hunter chooses a different aspect or ends his feral focus ability. She can increase the duration of any one <em>summon nature's ally</em> spell affected by this ability to 1 minute per level. She can have only one spell with a duration increased by this ability active at a time.</Pair>
</Ability>
</>};
const _feykiller = {title: "Feykiller", jsx: <><h2 id="arc-hunter-feykiller-feykiller">Feykiller</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 13</Link><br/>Some hunters in fey-plagued regions are dedicated to tracking down and eradicating these threats. They use their connection to the natural world to ground their senses and fight corrupted First World intrusions.</p>
<Ability id="arc-hunter-feykiller-animal-focus-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-feykiller-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Ability">A feykiller emulates animals that grant her the ability to unmask fey trickery. She adds the following choices to her <Link to="/ability/animal_focus">animal focus</Link> ability instead of the bear, frog, monkey, mouse, and snake choices.</Pair>
<Pair title="Special">She retains the bat, bull, falcon, owl, stag, tiger, and wolf aspects.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-crow" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-feykiller-crow">Crow</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Knowledge checks to identify the abilities and weaknesses of creatures.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-goat" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-feykiller-goat">Goat</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on saving throws against enchantment spells and spell-like abilities.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-mongoose" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-feykiller-mongoose">Mongoose</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on grapple combat maneuver checks and on saving throws against poison.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-shark" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-feykiller-shark">Shark</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Survival checks to track a creature that has taken damage from the hunter or her animal companion in the past 24 hours.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-turtle" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-feykiller-turtle">Turtle</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to its natural armor bonus.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-iron-talons-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-feykiller-iron-talons-ex" flavor="Through training and prayer, a feykiller imbues her animal companion with an enhanced ability to fight fey.">Iron Talons (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy, speak with master</Pair>
<Pair title="Passive Ability">One of the animal companion's natural attacks, as selected by the feykiller, is treated as cold iron for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 7th Level">All of her animal companion's natural attacks are treated as cold iron.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-resist-natures-lure-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-feykiller-resist-natures-lure-ex">Resist Nature's Lure (Ex)</Pair>
<Pair hl title="Replaces">Improved empathic link</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">At 4th level, a feykiller gains the <Link to="/ability/resist_natures_lure">resist nature's lure</Link> druid class feature whenever her animal companion is within 60 feet.</Pair>
</Ability>
<Ability id="arc-hunter-feykiller-grounded-su" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-feykiller-grounded-su">Grounded (Su)</Pair>
<Pair hl title="Replaces">One with the wild</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A feykiller gains a +4 insight bonus on saving throws against illusion and enchantment effects, and she is immune to illusion and enchantment effects created by fey. This ability functions only when her animal companion is within 60 feet.</Pair>
</Ability>
</>};
const _flood_flourisher = {title: "Flood Flourisher", jsx: <><h2 id="arc-hunter-flood_flourisher-flood-flourisher">Flood Flourisher</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 20</Link><br/>Well adapted to their drenched surroundings, flood flourishers coordinate deadly ambushes with their loyal animal companions by capitalizing on their mastery of the soggy terrain.</p>
<Ability id="arc-hunter-flood_flourisher-twin-hunters-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-twin-hunters-ex">Twin Hunters (Ex)</Pair>
<Pair hl title="Replaces">Hunter tactics</Pair>
<Pair title="Passive Ability">Each time a flood flourisher gains a benefit from this archetype, she also grants the benefit to her animal companion.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-skilled-ambusher-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-skilled-ambusher-ex">Skilled Ambusher (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 3rd level</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A flood flourisher gains either <Link to="/feat/athletic">Athletic</Link> or <Link to="/feat/stealthy">Stealthy</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-watery-stride-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-hunter-flood_flourisher-watery-stride-ex">Watery Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A flood flourisher and her animal companion gain a swim speed equal to their base land speed (maximum 30 feet). A flood flourisher or animal companion that already has a swim speed instead gains a +10 bonus on Acrobatics checks to avoid provoking attacks of opportunity from swimming out of a threatened square.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-water-striker-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-water-striker-ex">Water Striker (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A flood flourisher gains the benefits of either <Link to="/feat/shot_on_the_run">Shot on the Run</Link> or <Link to="/feat/spring_attack">Spring Attack</Link>, even if she does not meet either of the feats' prerequisites. She gains the benefits of this feat only while using her swim speed.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-submerged-stealth-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-submerged-stealth-ex">Submerged Stealth (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">While in a deep bog, as long as she moves no more than 5 feet in a round, she has <Link to="/umr/tremorsense">tremorsense</Link> out to a range of 30 feet against anything that moves within the same body of water. While underwater in a deep bog, she can <Link to="/misc/hold_her_breath">hold her breath</Link> for a number of minutes equal to 6 times her Constitution score before she risks drowning.</Pair>
<Pair title="Ability">A flood flourisher learns how to ambush targets from beneath the muck, becoming a silent threat. While in a deep bog, the flood flourisher can use cover from the water to attempt Stealth checks with no penalties from the natural environment.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-aquatic-action-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-aquatic-action-ex">Aquatic Action (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A flood flourisher gains the benefits of the <Link to="/vigtalent/aquatic_action">aquatic action</Link> vigilante talent.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-sudden-strike-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-sudden-strike-ex">Sudden Strike (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 12th level</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">A flood flourisher can better take advantage of the element of surprise. She can take a full round's worth of actions during the surprise round, rather than a single standard action or move action.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-fast-submerged-stealth-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-flood_flourisher-fast-submerged-stealth-ex">Fast Submerged Stealth (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 15th level</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A flood flourisher can move up to her full swim speed with no penalty while using Stealth in a deep bog, and she can maintain her tremorsense from her submerged stealth while doing so.</Pair>
</Ability>
<Ability id="arc-hunter-flood_flourisher-fast-swimmer-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-flood_flourisher-fast-swimmer-ex">Fast Swimmer (Ex)</Pair>
<Pair hl title="Replaces">The teamwork feat gained at 18th level</Pair>
<Pair title="Gained">At 18th Level</Pair>
<Pair title="Ability">A flood flourisher increases her swim speed by 20 feet.</Pair>
</Ability>
</>};
const _forester = {title: "Forester", jsx: <><h2 id="arc-hunter-forester-forester">Forester</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 52</Link><br/>While all hunters have a bond with the natural world, a forester has a stronger tie to her environment than to the animals within it. While most foresters feel strong bonds with woodland regions, the archetype functions well in other terrains as well. In such cases, a forester might refer to herself by a different name that more accurately reflects her chosen terrain. For example, a forester who favors bogs and marshes might call herself a "swamper," while one who favors frozen regions might call herself a "glacier guardian." As foresters gain levels and take on new favored terrains, they often eschew such titles completely, viewing them as unnecessary, and merely refer to themselves as guardians of the wild or champions of nature's will - but regardless of the name, their devotion remains.</p>
<Ability id="arc-hunter-forester-animal-focus-su" icon={["upgrade"]}>
<Pair single id="arc-hunter-forester-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Ability">As a forester has no animal companion, the aspects granted by this ability always apply to the forester herself, just as if a normal hunter's companion were dead.</Pair>
</Ability>
<Ability id="arc-hunter-forester-bonus-feat-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-forester-bonus-feat-ex">Bonus Feat (Ex)</Pair>
<Pair hl title="Replaces">Precise companion</Pair>
<Pair title="At 2nd Level">A forester gains one bonus <Link to="/main/combat_feat">combat feat</Link>.</Pair>
<Pair title="At 7th Level">She gains a 2nd bonus combat feat.</Pair>
<Pair title="At 13th Level">She gains a 3rd bonus combat feat.</Pair>
<Pair title="At 19th Level">She gains a 4th bonus combat feat.</Pair>
<Pair title="Special">She must meet the prerequisites for these feat as normal.</Pair>
</Ability>
<Ability id="arc-hunter-forester-tactician-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-forester-tactician-ex">Tactician (Ex)</Pair>
<Pair hl title="Replaces">Hunter tactics</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Usage">1 time/day + 1 per five hunter levels beyond 2nd<ByLevelPop levels={[[3,1],[7,2],[12,3],[17,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Standard Action">A forester can grant the benefits of one teamwork feat to all allies within 30 feet who can see and hear her. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every 2 levels the forester has. Allies do not need to meet the prerequisites of these bonus feats.</Pair>
</Ability>
<Ability id="arc-hunter-forester-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-forester-evasion-ex">Evasion (Ex)</Pair>
<Pair hl title="Replaces">Improved empathic link</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A forester can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. <em>Evasion</em> can be used only if the forester is wearing light armor, medium armor, or no armor. A <Link to="/misc/helpless">helpless</Link> forester does not gain the benefit of <em>evasion.</em></Pair>
</Ability>
<Ability id="arc-hunter-forester-favored-terrain-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-hunter-forester-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Animal companion</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A forester gains the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> ability, gaining her first such terrain.</Pair>
<Pair title="Passive Ability">A forester adds half her favored terrain bonus on damage rolls while in her favored terrain and fighting a creature native to that terrain.</Pair>
<Pair title="At 9th Level">She gains a second favored terrain. In addition, the bonuses on initiative checks and skill checks in one favored terrain (including the one just selected, if so desired) increase by 2.</Pair>
<Pair title="At 13th Level">She gains a third terrain, and chooses one terrain in which to increase the initiative and skill check bonuses by 2.</Pair>
<Pair title="At 17th Level">She gains a fourth such terrain, and again chooses a terrain in which to increase her initiative and skill bonuses.</Pair>
</Ability>
<Ability id="arc-hunter-forester-camouflage-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-forester-camouflage-ex">Camouflage (Ex)</Pair>
<Pair hl title="Replaces">Bonus tricks</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A forester can use the Stealth skill to hide in any of her favored terrains, even if the terrain doesn't grant <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
<Ability id="arc-hunter-forester-breath-of-life-sp" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-forester-breath-of-life-sp">Breath of Life (Sp)</Pair>
<Pair hl title="Replaces">Raise animal companion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A forester can cast <Link to="/spell/breath_of_life">breath of life</Link> once per day as a spell-like ability.</Pair>
</Ability>
<Ability id="arc-hunter-forester-improved-evasion-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-forester-improved-evasion-ex">Improved Evasion (Ex)</Pair>
<Pair hl title="Replaces">Speak with master</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Passive Ability">A forester's <em>evasion</em> improves. <em>Improved evasion</em> works like <em>evasion,</em> except while the forester still takes no damage on a successful Reflex saving throw against attacks, she takes only half damage on a failed save. A helpless forester does not gain the benefit of <em>improved evasion.</em></Pair>
</Ability>
<Ability id="arc-hunter-forester-hide-in-plain-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-forester-hide-in-plain-sight-ex">Hide in Plain Sight (Ex)</Pair>
<Pair hl title="Replaces">Greater empathic link</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">While in any of her favored terrains, a forester can use the Stealth skill even while being observed.</Pair>
</Ability>
</>};
const _packmaster = {title: "Packmaster", jsx: <><h2 id="arc-hunter-packmaster-packmaster">Packmaster</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 96</Link><br/>Some hunters form bonds with packs of well-trained creatures. Whether such a hunter is a northern berserker running with a pack of timber wolves or a savage warrior dashing through the jungle alongside her herd of dimetrodons, the packmaster revels in the thrill of the hunt and the glory of the kill. A packmaster is more comfortable in groups than alone, and although her animal companions may be weaker than a typical hunter's, what they lack in strength they make up for in numbers.</p>
<Ability id="arc-hunter-packmaster-pack-bond-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-packmaster-pack-bond-ex">Pack Bond (Ex)</Pair>
<Pair hl title="Replaces">Animal companion</Pair>
<Pair hl title="Alters">Precise companion, woodland stride, teamwork feats</Pair>
<Pair title="Ability"><p>A packmaster can have more than one animal companion, but she must divide her effective druid level between her companions to determine the abilities of each one. For example, a 4th-level packmaster can have one 4th-level animal companion, two 2nd-level companions, one 3rd-level companion and one 1st-level companion, or four 1st-level companions.</p>
<p>When a packmaster gains a level, she must decide how to allocate the increase among her animal companions, including whether or not to add a new 1st-level companion. Once a hunter level is allocated to a particular companion, it cannot be redistributed while that companion is in the packmaster's service. She must release the companion or wait until the companion dies to allocate its levels to another companion, which she can then do the next time she refreshes her spell slots for the day. The <em>share spells</em> animal companion ability applies to only one animal companion at a time - the packmaster cannot use it to cast a spell that affects only a single target and have the spell affect all of her animal companions.</p>
<p>A packmaster's <em>precise companion, woodland stride,</em> and <em>teamwork feats</em> apply to only one of her animal companions at a time. (For example, a packmaster can apply <em>precise companion</em> to one companion, <em>woodland stride</em> to another, and a given teamwork feat to a third, but cannot apply any of those to two animal companions at once.) As a <strong className="hl">swift action</strong>, she can change which companion gains any or all of these benefits.</p>
</Pair>
</Ability>
<Ability id="arc-hunter-packmaster-pack-focus-su" icon={["info"]}>
<Pair single id="arc-hunter-packmaster-pack-focus-su">Pack Focus (Su)</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Ability">This ability functions like <Link to="/ability/animal_focus">animal focus</Link>, with the following exceptions. A packmaster can apply her animal aspect to only one of her animal companions at a time without it counting against the number of minutes per day she can use that ability. When using <em>animal focus</em> on herself or her other animal companion, the ability counts against her minutes per day as normal.</Pair>
<Pair title="Special">She can have only two animal aspects in effect at a time - one that counts against her minutes per day and one that doesn't - and they can't both target the same companion. Unless both her companions are dead, the hunter can't apply the companion's aspect to herself (and thereby gain the benefit of its unlimited duration).</Pair>
</Ability>
<Ability id="arc-hunter-packmaster-teamwork-feat-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-packmaster-teamwork-feat-ex">Teamwork Feat (Ex)</Pair>
<Pair hl title="Alters">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">At any level at which a packmaster would gain a bonus teamwork feat, she can instead increase the number of her animal companions that gain the benefits of her <em>precise companion, woodland stride,</em> and <em>teamwork feats</em> by 1. She can select this ability multiple times.</Pair>
</Ability>
<Ability id="arc-hunter-packmaster-second-pack-focus-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-packmaster-second-pack-focus-su">Second Pack Focus (Su)</Pair>
<Pair hl title="Replaces">Second animal focus</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">The hunter gains an ability that functions like the <em>second animal focus,</em> but the hunter can either assign each companion one aspect each or assign both aspects to the same companion. The foci on the companions don't need to be the same, nor do they need to be the same as the one assigned to the packmaster.</Pair>
</Ability>
<Ability id="arc-hunter-packmaster-master-of-the-pack-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-hunter-packmaster-master-of-the-pack-ex">Master of the Pack (Ex)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">A packmaster and her animal companions can always move at full speed while using Survival to follow tracks without penalty.</Pair>
<Pair title="Ability">Each day when a packmaster gains new spells for the day, she chooses one <em>animal focus</em> to be active on herself or one of her animal companions for the entire day (if all of her animal companions are dead, she instead chooses two animal foci to be active on herself for the entire day). This focus is in addition to her <em>pack focus</em> class ability.</Pair>
</Ability>
</>};
const _patient_ambusher = {title: "Patient Ambusher", jsx: <><h2 id="arc-hunter-patient_ambusher-patient-ambusher">Patient Ambusher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 53</Link>, <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 14</Link><br/>Wandering the wilds, some hunters eschew the bond of innate teamwork with their animal companions. Instead, these hunters master the creation and deployment of intricate ranger traps, often using themselves or their animal companions to lure foes into their snares.</p>
<Ability icon={["skills"]} id="arc-hunter-patient_ambusher-undefined">
<Pair id="arc-hunter-patient_ambusher-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disable_device">Disable Device</Link> (DEX)</Pair></Ability>
<Ability id="arc-hunter-patient_ambusher-trapfinding-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-hunter-patient_ambusher-trapfinding-ex">Trapfinding (Ex)</Pair>
<Pair hl title="Replaces">Nature training, wild empathy</Pair>
<Pair title="Passive Ability">A patient ambusher adds half her hunter level (minimum +1) on Perception checks to locate traps and on Disable Device skill checks.</Pair>
<Pair title="Ability">A patient ambusher can use Disable Device to disarm magic traps.</Pair>
</Ability>
<Ability id="arc-hunter-patient_ambusher-snare-trap-ex-or-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-patient_ambusher-snare-trap-ex-or-su">Snare Trap (Ex or Su)</Pair>
<Pair hl title="Replaces">Hunter tactics</Pair>
<Pair title="Ability">A patient ambusher learns how to create a snare trap. The patient ambusher can use this and other learned traps a total number of times per day equal to half her hunter level + her Wisdom modifier. This snare trap otherwise functions the same as the <Link to="/trap/spring_snare">ranger snare trap</Link>.</Pair>
</Ability>
<Ability id="arc-hunter-patient_ambusher-additional-traps-ex-or-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-patient_ambusher-additional-traps-ex-or-su">Additional Traps (Ex or Su)</Pair>
<Pair hl title="Replaces">Teamwork feats</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A patient ambusher can learn a new type of trap, selected from the list of <Link to="/ability/ranger_traps">ranger traps</Link>. Once a trap is learned, it can't be unlearned and replaced with a different type of trap.</Pair>
<Pair title="At 6th Level">She gains a 2nd ranger trap.</Pair>
<Pair title="At 9th Level">She learns a 3rd ranger trap.</Pair>
<Pair title="At 12th Level">She gains a 4th ranger trap.</Pair>
<Pair title="At 15th Level">She learns a 5th ranger trap.</Pair>
<Pair title="At 18th Level">She gains a 6th ranger trap.</Pair>
<Pair title="Special">The patient ambusher cannot learn an individual trap more than once.</Pair>
</Ability>
<Ability id="arc-hunter-patient_ambusher-launch-trap-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-patient_ambusher-launch-trap-su">Launch Trap (Su)</Pair>
<Pair hl title="Replaces">Raise animal companion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A patient ambusher can affix a magical ranger trap to an arrow, a crossbow bolt, or a thrown weapon, allowing her to set the trap remotely or use it as a direct attack. Attaching the trap to the projectile is part of the <strong className="hl">full-round action</strong> to create a new trap. The trapped projectile is fired or thrown in the normal manner.</Pair>
<Pair title="Info">If fired at a square, the trap is treated as if the hunter had set the trap in that square, except the DC is 5 lower than normal. If the trap is fired at a creature, the target takes damage from the ranged weapon and is treated as if it had triggered the trap (attempting a saving throw, if any).</Pair>
<Pair title="Special">The attack has a maximum range of 60 feet, and penalties from range increments apply on the attack roll. The duration of the trap starts when it is created, not when it is triggered.</Pair>
</Ability>
</>};
const _pelagic_hunter = {title: "Pelagic Hunter", jsx: <><h2 id="arc-hunter-pelagic_hunter-pelagic-hunter">Pelagic Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 54</Link><br/>Pelagic hunters form strong bonds that extend deep beneath the sea, reaching out to whatever heeds their call, whether it be mundane animals or something far more sinister.</p>
<Ability id="arc-hunter-pelagic_hunter-pelagic-companion" icon={["broken-shield"]}>
<Pair single id="arc-hunter-pelagic_hunter-pelagic-companion">Pelagic Companion</Pair>
<Pair hl title="Alters">Animal companion</Pair>
<Pair title="Choice">A pelagic hunter must select an aquatic animal companion.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-pelagic-focus-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-pelagic_hunter-pelagic-focus-su">Pelagic Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Ability">Unlike with a normal hunter's <Link to="/ability/animal_focus">animal focus</Link>, pelagic focus allows the hunter to contact magical deep sea creatures instead of animals, using the options below instead of the normal hunter options.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-aboleth" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-aboleth">Aboleth</Pair>
<Pair title="Passive Ability">The creature gains a +1 morale bonus on saves against divine spells and spell-like abilities.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-cetus" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-pelagic_hunter-cetus">Cetus</Pair>
<Pair title="Passive Ability">The creature gains <Link to="/feat/lunge">Lunge</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">Instead of gaining Lunge, the creature increases its reach by 5 feet.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-charybdis" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-charybdis">Charybdis</Pair>
<Pair title="Passive Ability">The creature's attacks ignore the first 5 points of hardness.</Pair>
<Pair title="At 8th Level">This improves to ignore the first 7 points of hardness.</Pair>
<Pair title="At 15th Level">They now ignore 10 points of hardness.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-deep-one" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-deep-one">Deep One</Pair>
<Pair title="Passive Ability">The creature reduces <Link to="/rule/pressure_damage">pressure damage</Link> it takes by 10.</Pair>
<Pair title="At 12th Level">The creature is immune to damage from changing pressure.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-hippocampus" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-hippocampus">Hippocampus</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-kraken" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-pelagic_hunter-kraken">Kraken</Pair>
<Pair title="Passive Ability">The creature gains the <Link to="/umr/jet">jet</Link> ability with a speed equal to its unmodified base land speed or four times its swim speed (if it has one), whichever is higher.</Pair>
<Pair title="At 8th Level">If it has a swim speed, the jet ability's speed increases to five times its swim speed.</Pair>
<Pair title="At 15th Level">If it has a swim speed, the jet's speed increases to seven times its swim speed.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-reefclaw" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-pelagic_hunter-reefclaw">Reefclaw</Pair>
<Pair title="Passive Ability">The creature gains <Link to="/feat/diehard">Diehard</Link> as a bonus feat.</Pair>
<Pair title="At 12th Level">Instead of gaining Diehard, the creature gains the <Link to="/umr/ferocity">ferocity ability</Link>.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-scylla" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-scylla">Scylla</Pair>
<Pair title="Passive Ability">The creature's attacks deal 1 point of <Link to="/rule/bleed">bleed</Link> damage in addition to their normal damage.</Pair>
<Pair title="At 8th Level">The bleed damage increases to 1d3.</Pair>
<Pair title="At 15th Level">It increases to 1d6.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-sea-serpent" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-sea-serpent">Sea Serpent</Pair>
<Pair title="Passive Ability">The creature is considered to be under a <Link to="/spell/nondetection">nondetection</Link> spell it cast on itself, with a caster level equal to the pelagic hunter's class level.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-selkie" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-selkie">Selkie</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Bluff checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-shoggoth" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-shoggoth">Shoggoth</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on Perception checks and reduces the <Link to="/rule/flanking">flanking</Link> bonuses of creatures flanking it by 1.</Pair>
<Pair title="At 8th Level">This perception bonus becomes +3.</Pair>
<Pair title="At 12th Level">The creature can't be flanked.</Pair>
<Pair title="At 15th Level">This perception bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-siyokoy" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-siyokoy">Siyokoy</Pair>
<Pair title="Passive Ability">The creature's attacks deal 1 additional point of electricity damage.</Pair>
<Pair title="At 8th Level">The electricity damage increases to 1d3.</Pair>
<Pair title="At 15th Level">It increases to 1d6.</Pair>
</Ability>
<Ability id="arc-hunter-pelagic_hunter-blood-to-water-su" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-pelagic_hunter-blood-to-water-su">Blood to Water (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">When a pelagic hunter or her animal companion bleeds underwater into the surrounding water (whether from piercing or slashing damage, a bleed effect, or another effect that causes blood to spill), the blood transmutes into ordinary water within 1 round.</Pair>
<Pair title="Special">This prevents sharks and other predators with <Link to="/umr/keen_scent">keen scent</Link> from being drawn to the pelagic hunter's position by the blood and makes it harder for such creatures to track her.</Pair>
</Ability>
</>};
const _plant_master = {title: "Plant Master", jsx: <><h2 id="arc-hunter-plant_master-plant-master">Plant Master</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 53</Link><br/>Some hunters form a bond with plant life instead of an animal and take on those aspects instead. These hunters form potent bonds with plant creatures, and their leafy or fungal friends are more than capable of anything another hunter's animal allies can accomplish.</p>
<Ability id="arc-hunter-plant_master-plant-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-plant_master-plant-companion-ex">Plant Companion (Ex)</Pair>
<Pair hl title="Replaces">Animal companion</Pair>
<Pair title="Ability">A plant master forms a mystic bond with a plant companion. A plant master can begin play with any <Link to="/ability/druid_companions">plant companion</Link>. Except for the companion being a creature of the plant type, this ability otherwise works like the druid's animal companion.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-plant-focus-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-plant_master-plant-focus-su">Plant Focus (Su)</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Usage">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A plant master can take on the aspect of a plant. He must select one type of plant to emulate, gaining a bonus or special ability based on the type of plant emulated and his hunter level. He can emulate only one plant at a time.</Pair>
<Pair title="Ability">The plant master can also apply one of these aspects to his plant companion. An aspect applied in this way does not count against the hunter's minutes of duration per day - it remains in effect until he changes it. The companion's aspect can be the same aspect the hunter has taken on or a different one.</Pair>
<Pair title="Special">A plant master can select or change the plant foci on both himself and his plant companion as part of the same swift action.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-assassin-vine" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-plant_master-assassin-vine">Assassin Vine</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on combat maneuver checks to grapple.</Pair>
<Pair title="At 8th Level">This bonus becomes +3.</Pair>
<Pair title="At 15th Level">This bonus increases to +4.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-brambles" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-plant_master-brambles">Brambles</Pair>
<Pair title="Passive Ability">When the creature is hit by an unarmed strike or natural attack, the attacker takes 1 point of piercing damage.</Pair>
<Pair title="At 8th Level">This increases to 2 points.</Pair>
<Pair title="At 15th Level">This becomes 3 points.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-creeping-vine" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-plant_master-creeping-vine">Creeping Vine</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Climb checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-giant-flytrap" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-plant_master-giant-flytrap">Giant Flytrap</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-mushroom" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-plant_master-mushroom">Mushroom</Pair>
<Pair title="Passive Ability">The creature gains a +4 enhancement bonus on saves against poison.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-oak" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-plant_master-oak">Oak</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to CMD.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-shrieker" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-plant_master-shrieker">Shrieker</Pair>
<Pair title="Passive Ability">The creature gains darkvision with a range of 60 feet.</Pair>
<Pair title="At 8th Level">The range increases by 30 feet.</Pair>
<Pair title="At 15th Level">The creature also gains <Link to="/umr/blindsense">blindsense</Link> with a range of 10 feet.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-spore" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-plant_master-spore">Spore</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Fly checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-water-lily" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-plant_master-water-lily">Water Lily</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-green-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-plant_master-green-empathy-ex">Green Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A plant master can improve the attitude of a plant creature. Green empathy functions like a Diplomacy check to improve the attitude of a person. The plant master rolls 1d20 and adds his hunter level and his Charisma modifier to determine the wild empathy check result. The typical wild plant creature has a starting attitude of indifferent. To use green empathy, the plant master and the plant creature must be within 30 feet of each other under normal conditions. Generally, influencing a plant creature in this way takes 1 minute, but as with influencing people, it might take more or less time.</Pair>
<Pair title="Special">A plant master can also use this ability to influence an animal, but he takes a -4 penalty on the check. He has no ability to influence magical beasts.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-plant-shield-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-plant_master-plant-shield-ex">Plant Shield (Ex)</Pair>
<Pair hl title="Replaces">One with the wild</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Passive Ability">A plant master and his companion are distasteful to plant creatures. Creatures of the plant type with an Intelligence score of 2 or lower will not willingly attack either the plant master or his companion unless magically compelled to do so or the plant master or his companion attacks the creature first.</Pair>
</Ability>
<Ability id="arc-hunter-plant_master-master-hunter-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-plant_master-master-hunter-ex">Master Hunter (Ex)</Pair>
<Pair hl title="Alters">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When a plant master prepares spells for the day, he chooses one <em>plant focus</em> to be active for the entire day.</Pair>
</Ability>
</>};
const _primal_companion_hunter = {title: "Primal Companion Hunter", jsx: <><h2 id="arc-hunter-primal_companion_hunter-primal-companion-hunter">Primal Companion Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 97</Link><br/>Most hunters are skilled at awakening the primal beasts inside themselves. However, some can instead activate the primal essence within their animal companion. These primal companion hunters bestow upon their companions the ability to suddenly manifest new and terrifying powers - throwbacks to long-extinct beasts, bizarre mutations from extreme environments, or new abilities crafted from generations of selective breeding.</p>
<Ability id="arc-hunter-primal_companion_hunter-primal-transformation-su" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-primal_companion_hunter-primal-transformation-su">Primal Transformation (Su)</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>A primal companion hunter can awaken a primal creature from within his animal companion. The animal companion gains a pool of 2 evolution points that can be used to temporarily give the companion <Link to="/ability/evolutions">evolutions</Link> as if it were an eidolon. A primal companion hunter uses her hunter level to determine her effective <Link to="/class/summoner">summoner</Link> level for the purpose of qualifying for evolutions and determining their effects.</p>
<p>Activating these evolutions on the animal companion is a <strong className="hl">swift action</strong>. An animal companion transformed in this way cannot exceed the maximum number of attacks available to the eidolon of a summoner whose class level equals that of the hunter. While transformed in this way, the animal companion's type changes to <Link to="/type/magical_beast">magical beast</Link>, though the primal companion hunter still treats it as an animal for the purpose of the Handle Animal skill.</p>
<p>If a primal companion hunter's animal companion is dead, she can apply these evolutions to herself instead of to her animal companion. Uses of this ability count toward the hunter's maximum daily duration of evolution use.</p>
</Pair>
<Pair title="At 8th Level">The number of evolution points in her pool increases to 4</Pair>
<Pair title="At 15th Level">It increases to 6.</Pair>
</Ability>
<Ability id="arc-hunter-primal_companion_hunter-primal-surge-su" icon={["upgrade"]}>
<Pair single id="arc-hunter-primal_companion_hunter-primal-surge-su">Primal Surge (Su)</Pair>
<Pair hl title="Replaces">Second animal focus</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Swift Action">A primal companion hunter can touch her animal companion and grant it one evolution that costs up to 4 evolution points. The companion must meet the prerequisites of the selected evolution. Unlike the evolutions from <em>primal transformation,</em> this evolution is not set; it can be changed each time the hunter uses this ability. Using <em>primal surge</em> activates the <em>primal transformation</em> ability on the companion if it isn't already active. This effect lasts until the hunter ends the <em>primal transformation.</em> This does not allow a companion to exceed its maximum number of natural attacks.</Pair>
<Pair title="Special">This ability can grant only one evolution at a time, even if the chosen evolution could be selected multiple times. This ability can grant an evolution that allows additional evolution points to be spent to upgrade that evolution (such as <Link to="/evolution/damage_reduction">damage reduction</Link> or <Link to="/evolution/flight">flight</Link>), and any points left over can be spent on such upgrades. This ability cannot be used to grant an upgrade to an evolution that the companion already possesses.</Pair>
</Ability>
<Ability id="arc-hunter-primal_companion_hunter-primal-master-su" icon={["upgrade"]}>
<Pair single id="arc-hunter-primal_companion_hunter-primal-master-su">Primal Master (Su)</Pair>
<Pair hl title="Replaces">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A primal companion hunter becomes in tune with his primal nature. He can activate his companion's primal aspect as a <strong className="hl">free action</strong>. When using <em>primal surge,</em> he can grant his companion two evolutions instead of one (each costing up to 4 evolution points).</Pair>
</Ability>
</>};
const _roof_runner = {title: "Roof Runner", jsx: <><h2 id="arc-hunter-roof_runner-roof-runner">Roof Runner</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 65</Link><br/>Roof runners are skilled ambushers, skirmishers, and spies who eschew heavier types of armor in order to remain light on their feet. They lurk in the shadows of the rooftops to find people or houses to rob, though some use their specialized skills for nobler purposes.</p>
<Ability id="arc-hunter-roof_runner-skilled-ex" icon={["skills","broken-shield"]}>
<Pair single id="arc-hunter-roof_runner-skilled-ex">Skilled (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor and shields</Pair>
<Pair hl title="Alters">Class skills</Pair>
<Pair title="Passive Ability">A roof runner adds <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, and <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> (all DEX-based) to her list of class skills.</Pair>
</Ability>
<Ability id="arc-hunter-roof_runner-natural-leaper-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-roof_runner-natural-leaper-ex">Natural Leaper (Ex)</Pair>
<Pair hl title="Replaces">Track</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A roof runner adds half her hunter level on Acrobatics checks to jump.</Pair>
</Ability>
<Ability id="arc-hunter-roof_runner-shingle-stride-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-roof_runner-shingle-stride-ex">Shingle Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A roof runner and her animal companion can move at full speed without penalty when using Acrobatics to cross narrow or uneven surfaces, and climb at half speed (instead of one-quarter speed) without taking the - 5 penalty.</Pair>
</Ability>
<Ability id="arc-hunter-roof_runner-alley-ghost-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-roof_runner-alley-ghost-ex">Alley Ghost (Ex)</Pair>
<Pair hl title="Replaces">Swift tracker</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A roof runner gains the benefits of the <Link to="/talent/fast_stealth">fast stealth</Link> rogue talent.</Pair>
</Ability>
<Ability id="arc-hunter-roof_runner-master-climber-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-roof_runner-master-climber-ex">Master Climber (Ex)</Pair>
<Pair hl title="Alters">Master hunter</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A roof runner gains a climb speed equal to her base land speed, instead of being able to move at full speed while tracking.</Pair>
</Ability>
</>};
const _scarab_stalker = {title: "Scarab Stalker", jsx: <><h2 id="arc-hunter-scarab_stalker-scarab-stalker">Scarab Stalker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 55</Link>, <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 13</Link><br/>The forgotten ruins in the desert sands have given rise to a breed of hunters who call upon the powers of the pyramids to protect and explore the ancient sites of their people. These hunters form sacred bonds with desert-dwelling denizens.</p>
<Ability id="arc-hunter-scarab_stalker-sacred-animal-focus-su" extraClasses="hasSubs" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-hunter-scarab_stalker-sacred-animal-focus-su">Sacred Animal Focus (Su)</Pair>
<Pair hl title="Alters">Animal focus</Pair>
<Pair title="Ability">A scarab stalker can select from the bull, falcon, and snake <Link to="/ability/animal_foci">animal foci</Link>, as well as the following new animal foci.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-bee" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-bee">Bee</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Fly checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-cat" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-cat">Cat</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Acrobatics checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-cow" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-cow">Cow</Pair>
<Pair title="Passive Ability">The creature gains a +1 resistance bonus on Fortitude saving throws.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-crocodile" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-crocodile">Crocodile</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-ibis" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-ibis">Ibis</Pair>
<Pair title="Passive Ability">The creature gains a +2 resistance bonus on saving throws against disease.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-jackal" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-jackal">Jackal</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Survival checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-kite" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-hunter-scarab_stalker-kite">Kite</Pair>
<Pair title="Passive Ability">The creature recovers 1 additional hit point whenever it receives magical healing.</Pair>
<Pair title="At 8th Level">This increases to 2 additional hit points.</Pair>
<Pair title="At 15th Level">This increases to 3 additional hit points.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-leopard" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-leopard">Leopard</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Escape Artist checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-lion" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-lion">Lion</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Intimidate checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-ram" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-scarab_stalker-ram">Ram</Pair>
<Pair title="Passive Ability">The creature gains a +1 bonus on damage rolls when making charge attacks.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-scarab-beetle" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-scarab-beetle">Scarab Beetle</Pair>
<Pair title="Passive Ability">The creature gains a +1 enhancement bonus to its natural armor bonus.</Pair>
<Pair title="At 8th Level">This bonus becomes +2.</Pair>
<Pair title="At 15th Level">This bonus increases to +3.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-scorpion" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-scorpion">Scorpion</Pair>
<Pair title="Passive Ability">The creature gains a +2 resistance bonus on saving throws against poison.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-sha" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-scarab_stalker-sha">Sha</Pair>
<Pair title="Passive Ability">The creature ignores the Perception penalty from sandstorms and can see twice as far in sandstorms.</Pair>
<Pair title="At 8th Level">This becomes 3&times; as far.</Pair>
<Pair title="At 15th Level">This increases to 4&times; as far.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-uraeus" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-uraeus">Uraeus</Pair>
<Pair title="Passive Ability">The creature gains a +2 resistance bonus on saving throws against <Link to="/umr/breath_weapon">breath weapons</Link>.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-scarab_stalker-desert-walker-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-scarab_stalker-desert-walker-ex">Desert Walker (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A scarab stalker and her animal companion can move through desert terrain at normal speed without taking damage or suffering any other impairments unless that terrain has been enchanted or magically manipulated.</Pair>
</Ability>
</>};
const _totem_bonded = {title: "Totem-Bonded", jsx: <><h2 id="arc-hunter-totem_bonded-totem-bonded">Totem-Bonded</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 131</Link><br/>The <Link to="/rule/mammoth_lords">Mammoth Lords</Link> coexist with the great primeval beasts that roam their lands, surviving with the help of the animals' meat, hides, milk, bones, and more. These fearsome and wondrous animals have made their way into Kellid culture and tradition. Tribes are named after these creatures. Armor, clothing, weapons, and jewelry - when not fashioned from bone, hide, or teeth harvested from these beasts - are worked into images that evoke their shape and strength. They are even captured and trained for use as guardians, as hunters, or in the most iconic use, as mounts - though they're rarely tamed, as the Mammoth Lords value the ferociousness of these creatures. The sight of a Mammoth Lord atop an elephantine steed is one that few soon forget.</p>
<p>For some of the people of the Mammoth Lords, this adoration and respect for the megafauna that share their realm goes one step further. Shamans, oracles, druids, and others worship these animals as primal spirits of the world and draw great power from their faith. Others, like rangers and barbarians, are no less faithful in their belief, even though they focus more on physical combat than on spellcasting. Among the most devoted of these hunters are the so-called totem-bonded-hunters who are able to form a true spiritual bond with the powerful fauna that dominate the wildlands. Such a hunter embraces one of the realm's megafauna as a sort of spiritual guide, eventually attracting a mighty beast that travels with her and helps keep her territory free of invaders. By doing so, the totem-bonded hunter becomes something more than merely a guardian and provider for her tribe - she becomes a manifestation of the tribe's spiritual belief in the power of the land itself.</p>
<Ability id="arc-hunter-totem_bonded-primeval-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-totem_bonded-primeval-companion-ex">Primeval Companion (Ex)</Pair>
<Pair hl title="Alters">Animal companion</Pair>
<Pair title="Ability">The totem-bonded adopts a powerful animal native to the region - often one suited to the cold tundra - selected from the following list: <Link to="/companion/aurochs">aurochs</Link>, <Link to="/companion/badger">badger</Link>, <Link to="/companion/bear">bear</Link>, <Link to="/companion/big_cat">big cat</Link>, <Link to="/companion/elk">elk</Link>, <Link to="/companion/giant_raven">giant raven</Link>, <Link to="/companion/mastodon">mastodon</Link>, <Link to="/companion/rhinoceros">rhinoceros</Link>, <Link to="/companion/walrus">walrus</Link>, <Link to="/companion/wolf">wolf</Link>, or any creature categorized as <Link to="/family/megafauna">megafauna</Link>. At the GM's discretion, she can select other animal companions.</Pair>
<Pair title="At 7th Level">If the animal companion's natural size is Large but it is normally available as a Medium animal companion at 7th level (such as a bear), the totem-bonded can have the companion increase in size. To generate statistics for such a creature, apply the following modifications: <strong>Size</strong> Large; <strong>AC</strong> +1 natural armor; <strong>Ability Scores</strong> <em>Str</em> +4, <em>Dex</em> -2, <em>Con</em> +2. Increase the damage of each of the companion's natural attacks <Link to="/misc/by_one_die">by one die size</Link>.</Pair>
</Ability>
<Ability id="arc-hunter-totem_bonded-shared-strength-su" icon={["upgrade"]}>
<Pair single id="arc-hunter-totem_bonded-shared-strength-su">Shared Strength (Su)</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>The connection the totem-bonded has with her animal companion allows them to draw upon one another's strength. The totem-bonded can activate this ability as a <strong className="hl">swift action</strong>. The effect ends immediately if the animal companion is ever more than 100 feet away from the totem-bonded.</p>
<p>While the <em>shared strength</em> ability is active, the totem-bonded manifests one aspect of her animal companion drawn from the following list.</p>
<ul>
<li>Low-light vision</li>
<li><Link to="/umr/scent">Scent</Link></li>
<li>+1 bonus to natural armor</li>
<li>+10-foot bonus to speed</li>
<li>climb speed 30 feet</li>
<li>swim speed 40 feet</li>
<li>2 claws (1d4)</li>
<li>bite (1d6)</li>
<li>gore (1d6)</li>
<li>slam (1d6)<ul>
<li><em>The <Link to="/umr/natural_attacks">natural attacks</Link> above are all primary attacks, and the listed damage is for a Medium creature.</em></li>
</ul>
</li>
</ul>
<p>At 8th-level, the following aspects become available.</p>
<ul>
<li>+20-foot bonus to speed</li>
<li>fly speed 50 feet (average)</li>
<li>increased size (as <Link to="/spell/enlarge_person">enlarge person</Link>)</li>
<li><Link to="/umr/powerful_charge">powerful charge</Link> (doubles the damage dice dealt by the granted gore or slam attack)</li>
</ul>
<p>The totem-bonded can select only a movement speed or natural attack that her animal companion also has, and an aspect cannot cause her speed or size to exceed that of her animal companion with this ability.</p>
<p>A totem-bonded's animal companion also benefits from the <em>shared strength</em> ability, and while it is active, the animal understands the totem-bonded's known languages and can be pushed to perform an unfamiliar trick as a <strong className="hl">free action</strong>.</p>
</Pair>
<Pair title="At 8th Level">The totem-bonded manifests two aspects of her animal companion. The animal companion gains a +1 bonus on saving throws and a +2 bonus on checks with each skill in which it has at least 1 rank.</Pair>
<Pair title="At 15th Level">The damage dealt by any natural attacks granted by this ability increases by two die steps. The animal companion's bonuses on saving throws and skill checks increase to +2 and +4 respectively.</Pair>
</Ability>
</>};
const _treestrider = {title: "Treestrider", jsx: <><h2 id="arc-hunter-treestrider-treestrider">Treestrider</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 55</Link><br/>Some hunters are masters of the wild. Whether raised by apes or having some other link with simian creatures, these hunters glide through the wilderness with ease.</p>
<Ability id="arc-hunter-treestrider-animal-companion" icon={["info"]}>
<Pair single id="arc-hunter-treestrider-animal-companion">Animal Companion</Pair>
<Pair hl title="Alters">Animal companion</Pair>
<Pair title="Info">A treestrider must select an <Link to="/companion/ape">ape</Link> as her animal companion.</Pair>
</Ability>
<Ability id="arc-hunter-treestrider-brachiation-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-treestrider-brachiation-ex">Brachiation (Ex)</Pair>
<Pair hl title="Replaces">Animal focus, second animal focus</Pair>
<Pair title="Usage">1 minute/day per hunter level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Free Action">A treestrider can gain a climb speed equal to half her base speed. In addition, she can use her climb speed to move through the canopies of forests or jungles, provided the limbs of the trees are strong enough to support her weight. The treestrider's companion gains a +10-foot enhancement bonus to its climb speed.</Pair>
<Pair title="At 8th Level">The treestrider's climb speed increases to equal her base speed, the duration of her <em>brachiation</em> increases to 10 minutes per hunter level per day (usable in 10-minute increments), and the enhancement bonus to her companion's climb speed increases to +20 feet.</Pair>
<Pair title="At 15th Level">She can use <em>brachiation</em> with no limit on the duration.</Pair>
</Ability>
<Ability id="arc-hunter-treestrider-improved-unarmed-strike-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-treestrider-improved-unarmed-strike-ex">Improved Unarmed Strike (Ex)</Pair>
<Pair hl title="Replaces">Precise companion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A treestrider gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-hunter-treestrider-tree-stride-sp" icon={["magic-swirl"]}>
<Pair single id="arc-hunter-treestrider-tree-stride-sp">Tree Stride (Sp)</Pair>
<Pair hl title="Replaces">Raise animal companion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Usage">3 + Wis modifier times/day</Pair>
<Pair title="Full-Round Action">A treestrider can move between two trees, as per the spell <Link to="/spell/tree_stride">tree stride</Link>. Unlike the spell, this ability has a duration of instantaneous and the treestrider can make only a single transfer. She can bring her animal companion with her, but if she does, her companion can't take any actions that round.</Pair>
</Ability>
</>};
const _uprooter_scout = {title: "Uprooter Scout", jsx: <><h2 id="arc-hunter-uprooter_scout-uprooter-scout">Uprooter Scout</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 13</Link><br/>The Uprooters are an elite band of Kyonin elves skilled and brave enough to foray into the Tanglebriar and take the offensive in the fight against <Link to="/monster/treerazer">Treerazer</Link>. Uprooter scouts rely on their close bonds with their animal companions to survive such raids. One Uprooter scout who accompanied an expedition into the Worldwound to put his <Link to="/family/demon">demon</Link>-fighting skills to work there has retired to Mendev to teach his techniques to others, so these skills are slowly being passed on to non-elves.</p>
<Ability id="arc-hunter-uprooter_scout-lore-of-the-blight-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-uprooter_scout-lore-of-the-blight-ex">Lore of the Blight (Ex)</Pair>
<Pair hl title="Replaces">Improved empathic link, speak with master, greater empathic link</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">An Uprooter scout and her animal companion gain a +2 bonus on initiative checks and on Knowledge (geography), Perception, Stealth, and Survival skill checks when she's in <Link to="/rule/the_abyss">the Abyss</Link> or Abyss-tainted terrain (such as Tanglebriar or the Worldwound). When she travels through this terrain, she leaves no trail and can't be tracked (though she can leave a trail if she so chooses).</Pair>
<Pair title="At 11th Level">This bonus becomes +4.</Pair>
<Pair title="At 16th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-uprooter_scout-unnatural-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-uprooter_scout-unnatural-stride-ex">Unnatural Stride (Ex)</Pair>
<Pair hl title="Replaces">Raise animal companion</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The Uprooter scout and her animal companion learn how to move through undergrowth (as <Link to="/ability/woodland_stride">woodland stride</Link>) that has been enchanted, corrupted, or magically manipulated.</Pair>
</Ability>
<Ability id="arc-hunter-uprooter_scout-demons-end-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-hunter-uprooter_scout-demons-end-ex" flavor="Even demons must respect the number of their kindred an Uprooter scout has slain, and lesser demons quake before her.">Demon's End (Ex)</Pair>
<Pair hl title="Replaces">One with the wild</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">The Uprooter scout and her companion can attempt to demoralize a demon, rolling 1d20 and adding the scout's level and her Charisma modifier to determine the <Link to="/skill/intimidate">Intimidate</Link> check result.</Pair>
</Ability>
</>};
const _urban_hunter = {title: "Urban Hunter", jsx: <><h2 id="arc-hunter-urban_hunter-urban-hunter">Urban Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_streets">Heroes of the Streets pg. 25</Link><br/>Urban hunters help guards track down and apprehend criminals or spies, find lost children and disaster victims, and protect animals from abuse in the city. They still draw their inspiration and strength from the natural world, marveling at how nature flourishes wherever the city allows.</p>
<Ability icon={["skills"]} id="arc-hunter-urban_hunter-undefined">
<Pair id="arc-hunter-urban_hunter-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair>
<Pair title="Removed Skills">Knowledge (nature), Survival</Pair></Ability>
<Ability id="arc-hunter-urban_hunter-animal-companion-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-urban_hunter-animal-companion-ex">Animal Companion (Ex)</Pair>
<Pair hl title="Alters">Animal companion</Pair>
<Pair title="Ability"><p>Urban hunters have animal companions that are domesticated animals or animals native to a major city. The urban hunter must select her animal companion from the following list: <Link to="/companion/axe_beak">axe beak</Link>, <Link to="/companion/badger">badger</Link>, <Link to="/companion/bird">bird</Link>, <Link to="/companion/camel">camel</Link>, <Link to="/companion/dire_rat">dire rat</Link>, <Link to="/companion/dog">dog</Link>, <Link to="/companion/horse">horse</Link>, <Link to="/companion/llama">llama</Link>, <Link to="/companion/ostrich">ostrich</Link>, <Link to="/companion/pony">pony</Link>, <Link to="/companion/ram">ram</Link>, or <Link to="/companion/trumpeter_swan">trumpeter swan</Link>. In urban settings, an urban hunter's animal companion seems domesticated and likely harmless to anyone who has not seen it in combat (potentially reducing the DC of Diplomacy checks to convince anyone to allow it into secure areas). It draws no more attention than a friendly dog, loyal horse, or similar tame animal.</p>
<p>Creatures who have never seen the animal companion make an attack must succeed at a Sense Motive check (opposed by the animal companion's Stealth check) to realize the animal companion is a potential threat. The hunter can calm those who witness her animal companion's attacks (so long as they were not injured) with a successful Handle Animal check (DC = 15 + the target's Will save modifier).</p>
</Pair>
</Ability>
<Ability id="arc-hunter-urban_hunter-captor-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-urban_hunter-captor-ex">Captor (Ex)</Pair>
<Pair hl title="Replaces">Hunter tactics, teamwork feat</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An urban hunter and her animal companion take no penalties when dealing nonlethal damage with weapons or natural attacks.</Pair>
<Pair title="At 6th Level">The urban hunter selects a bonus feat from the following list to be gained by both the hunter and her animal companion: <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, and <Link to="/feat/improved_trip">Improved Trip</Link>.</Pair>
<Pair title="At 9th Level">She selects another bonus feat from the list above.</Pair>
<Pair title="At 12th Level">The hunter gains another bonus feat, and she can select from the list above, or any of the following feats: <Link to="/feat/combat_patrol">Combat Patrol</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/disarming_strike">Disarming Strike</Link>, <Link to="/feat/greater_bull_rush">Greater Bull Rush</Link>, <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link>, <Link to="/feat/greater_disarm">Greater Disarm</Link>, <Link to="/feat/greater_grapple">Greater Grapple</Link>, <Link to="/feat/greater_trip">Greater Trip</Link>, and <Link to="/feat/lunge">Lunge</Link>.</Pair>
<Pair title="At 15th Level">She can select another bonus feat from either list above.</Pair>
<Pair title="At 18th Level">The hunter can gain another bonus feat from either list.</Pair>
<Pair title="Special">Neither the hunter nor her animal companion needs to meet the prerequisites for these bonus feats.</Pair>
</Ability>
<Ability id="arc-hunter-urban_hunter-animal-insight-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-urban_hunter-animal-insight-ex" flavor="An urban hunter and her animal companion learn to combine their insights to defeat deception and manipulation.">Animal Insight (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">As long as they are within 30 feet of each other, both hunter and animal companion gain an insight bonus on Sense Motive checks equal to half the urban hunter's hunter level. They also gain a +2 insight bonus on Will saving throws against illusions and mind-affecting effects.</Pair>
</Ability>
<Ability id="arc-hunter-urban_hunter-frightful-ferocity-ex" icon={["upgrade"]}>
<Pair single id="arc-hunter-urban_hunter-frightful-ferocity-ex">Frightful Ferocity (Ex)</Pair>
<Pair hl title="Replaces">One with the wild</Pair>
<Pair title="Gained">At 17th Level</Pair>
<Pair title="Swift Action">An urban hunter and her animal companion can each attempt an Intimidate check to demoralize a foe as a swift action.</Pair>
</Ability>
</>};
const _verminous_hunter = {title: "Verminous Hunter", jsx: <><h2 id="arc-hunter-verminous_hunter-verminous-hunter">Verminous Hunter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 98</Link><br/>A verminous hunter calls on the ceaseless, single-minded dedication of vermin to hunt and overwhelm her prey. Where other hunters invoke the cunning, animalistic powers of the alpha predators, she calls on the powers of the lowest life forms, reaching out to the spider instead of the monkey, the mantis instead of the snake, or the moth instead of the owl.</p>
<Ability id="arc-hunter-verminous_hunter-vermin-companion-ex" icon={["info"]}>
<Pair single id="arc-hunter-verminous_hunter-vermin-companion-ex">Vermin Companion (Ex)</Pair>
<Pair hl title="Alters">Animal companion, hunter tactics</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A verminous hunter must choose a vermin companion instead of an animal companion. The <em>hunter tactics</em> class ability allows a verminous hunter to grant her teamwork feats to a mindless vermin companion.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-vermin-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-verminous_hunter-vermin-empathy-ex">Vermin Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A verminous hunter gains the <em>wild empathy</em> ability, but can use it only to influence vermin (not animals or magical beasts).</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-vermin-focus-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-verminous_hunter-vermin-focus-su">Vermin Focus (Su)</Pair>
<Pair title="Ability">A verminous hunter can take on the aspect of a vermin. This functions as <Link to="/ability/animal_focus">animal focus</Link>, but allows only the following choices.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-ant" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-ant">Ant</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Strength.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-beetle" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-beetle">Beetle</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to its natural armor bonus.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
<Pair title="Special">A creature without natural armor has an effective natural armor bonus of +0.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-centipede" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-centipede">Centipede</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on Climb checks and a +2 bonus to CMD against pull, push, reposition, and trip combat maneuvers.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-cockroach" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-cockroach">Cockroach</Pair>
<Pair title="Passive Ability">The creature gains a +4 bonus on saves against cold dangers, disease, heat dangers, starvation, thirst, and on Constitution checks to avoid <Link to="/rule/suffocation">suffocation</Link>.</Pair>
<Pair title="At 8th Level">These bonuses become +6.</Pair>
<Pair title="At 15th Level">These bonuses increase to +8.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-crab" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-crab">Crab</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks and a +2 competence bonus on <Link to="/rule/grapple">grapple</Link> combat maneuver checks.</Pair>
<Pair title="At 8th Level">These bonuses increase to +6 and +4 respectively.</Pair>
<Pair title="At 15th Level">They increase to +8 and +6 respectively.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-flea" extraClasses="subAbility" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-flea">Flea</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on saves against disease and Acrobatics checks to jump.</Pair>
<Pair title="At 8th Level">These bonuses become +6.</Pair>
<Pair title="At 15th Level">These bonuses increase to +8.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-fly" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-fly">Fly</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on Perception checks and on Acrobatics checks to balance or fall safely.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-leech" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-leech">Leech</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on grapple combat maneuver checks, and deals 1 point of <Link to="/rule/bleed">bleed</Link> damage every time it succeeds at a grapple combat maneuver check to damage an opponent.</Pair>
<Pair title="At 8th Level">These benefits increase to a +4 bonus and 3 points of bleed.</Pair>
<Pair title="At 15th Level">The benefits increase to a +6 bonus and 5 points of bleed.</Pair>
<Pair title="Special">Bleed damage from this ability does not stack with itself.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-mantis" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-mantis">Mantis</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on attack of opportunity attack rolls and a +2 competence bonus on grapple combat maneuver checks.</Pair>
<Pair title="At 8th Level">These bonuses become +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-moth" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-hunter-verminous_hunter-moth">Moth</Pair>
<Pair title="Passive Ability">The creature gains darkvision to a range of 60 feet.</Pair>
<Pair title="At 8th Level">The range increases by 30 feet.</Pair>
<Pair title="At 15th Level">The creature gains <Link to="/umr/blindsense">blindsense</Link> to a range of 10 feet.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-phasmid" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-phasmid">Phasmid</Pair>
<Pair title="Passive Ability">The creature gains low-light vision and a +4 competence bonus on Stealth checks in forests or plains.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-scorpion" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-scorpion">Scorpion</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on Stealth checks and grapple combat maneuver checks.</Pair>
<Pair title="At 8th Level">These bonuses increase to +6 and +4 respectively.</Pair>
<Pair title="At 15th Level">They increase to +8 and +6 respectively.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-spider" extraClasses="subAbility" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-spider">Spider</Pair>
<Pair title="Passive Ability">The creature gains a +2 competence bonus on Stealth checks, saving throws against <Link to="/spell/web">web</Link> effects (magical or otherwise), and checks to break free of webs.</Pair>
<Pair title="At 8th Level">This bonus becomes +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-wasp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-wasp">Wasp</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Perception checks.</Pair>
<Pair title="At 8th Level">This bonus becomes +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-worm" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-worm">Worm</Pair>
<Pair hl title="Replaces">Animal focus</Pair>
<Pair title="Passive Ability">The creature gains a 25% chance to treat any critical hit or sneak attack as a normal hit (as the <Link to="/magic-enh/fortification">fortification</Link> armor special ability).</Pair>
<Pair title="At 8th Level">This increases to 50%.</Pair>
<Pair title="At 15th Level">This increases to 75%.</Pair>
</Ability>
<Ability id="arc-hunter-verminous_hunter-swarm-stride-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-hunter-verminous_hunter-swarm-stride-ex" flavor="A verminous hunter learns to move through vermin without danger.">Swarm Stride (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">He can safely pass through <Link to="/subtype/swarm">swarms</Link> of vermin and does not take swarm damage while within a vermin swarm's space. In addition, he is immune to a swarm's distraction ability.</Pair>
<Pair title="Special">If the hunter or his animal companion attacks a swarm, they lose this protection against only that swarm.</Pair>
</Ability>
</>};
export default {aquatic_beastmaster:_aquatic_beastmaster,chameleon_adept:_chameleon_adept,colluding_scoundrel:_colluding_scoundrel,courtly_hunter:_courtly_hunter,divine_hunter:_divine_hunter,feral_hunter:_feral_hunter,feykiller:_feykiller,flood_flourisher:_flood_flourisher,forester:_forester,packmaster:_packmaster,patient_ambusher:_patient_ambusher,pelagic_hunter:_pelagic_hunter,plant_master:_plant_master,primal_companion_hunter:_primal_companion_hunter,roof_runner:_roof_runner,scarab_stalker:_scarab_stalker,totem_bonded:_totem_bonded,treestrider:_treestrider,uprooter_scout:_uprooter_scout,urban_hunter:_urban_hunter,verminous_hunter:_verminous_hunter}