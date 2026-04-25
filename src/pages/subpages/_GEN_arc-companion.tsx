import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
const _aberrant_companion = {title: "Aberrant Companion", jsx: <><h2 id="arc-companion-aberrant_companion-aberrant-companion">Aberrant Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 186</Link><br/>There's something oddly wrong about aberrant companions. Though they're touched by eldritch magic or mutated by strange influences, they are still loyal, if unnatural, allies.</p>
<Ability icon={["skills"]} id="arc-companion-aberrant_companion-undefined">
<Pair id="arc-companion-aberrant_companion-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/escape_artist">Escape Artist</Link> (DEX), <Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-companion-aberrant_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-aberrant_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on an aberrant companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2.</Pair>
</Ability>
<Ability id="arc-companion-aberrant_companion-aberrant-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-aberrant_companion-aberrant-sight-ex">Aberrant Sight (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">An aberrant companion gains darkvision with a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-companion-aberrant_companion-alien-mind-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-aberrant_companion-alien-mind-ex">Alien Mind (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">An aberrant companion is immune to mind-affecting effects that specifically target animals, such as <Link to="/spell/charm_animal">charm animal</Link>. Anyone who attempts to use such an effect against it takes 1d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> (Will DC 20 half).</Pair>
</Ability>
<Ability id="arc-companion-aberrant_companion-fluid-bones-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-aberrant_companion-fluid-bones-ex">Fluid Bones (Ex)</Pair>
<Pair hl title="Replaces">Multiattack, The +2 natural armor increase at 9th level</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">An aberrant companion gains <Link to="/umr/compression">compression</Link> as per the universal monster rule, though it can use the ability while carrying a rider only if the rider has compression.</Pair>
</Ability>
</>};
const _accursed_companion = {title: "Accursed Companion", jsx: <><h2 id="arc-companion-accursed_companion-accursed-companion">Accursed Companion</h2>
<p><strong>Sources</strong> <Link to="/source/horror_realms">Horror Realms pg. 10</Link><br/>When a character calls upon the aid and companionship of one of nature's children, she forges a sacred pact to care for and cherish that creature. In exchange, the animal companion serves as her guide and guardian. The bond between the two strengthens, and the animal companion moves beyond its primal instincts and its soul blossoms. This transcendence is both beautiful and wondrous, but as with all magic, there is always a cost. As an animal companion's consciousness grows, it can sometimes attract the attention of the spiritual energies that hide in plain sight everywhere. While some of these forces are good or indifferent, others lurk in the void, in the deepest shadows where death waits. When the right moment comes, these darker entities latch onto these proud companions with a vicious hunger. Should the character fail to protect her companion, corruption ebbs forth and fills the once-magnificent creatures with vile intent. Cursed and corrupted, these companions return to their masters broken, scarred, and distraught. Theirs is a curse they are bound to share, for when mortals fail to protect their bonded companions, so too shall those mortals suffer.</p>
<p>When a cavalier, druid, hunter, ranger, or other character loses an animal companion to a disturbingly gruesome death, particularly if that fate could have been avoided through an act the character chose not to or was unable to take, the soul of the slain animal companion sometimes remains bound to the character. In such cases, this scarred soul infests the next companion the character takes.</p>
<h3 id="arc-companion-accursed_companion-gaining-an-accursed-companion">Gaining an Accursed Companion</h3>
<p>Any character with the animal companion or mount class ability can choose to gain an accursed animal companion once a previous animal companion has suffered a violent, humiliating, or particularly horrible death. The character must then choose to gain an accursed companion while performing the ritual to replace the slain companion. At the GM's discretion, the player might automatically gain an accursed companion unless she takes the time to seek atonement for allowing her previous companion to die.</p>
<h3 id="arc-companion-accursed_companion-accursed-companion-manifestations">Accursed Companion Manifestations</h3>
<p>An accursed companion's unnatural condition manifests in one of the following ways, chosen at the time the companion is gained. Once selected, the choice cannot be changed. Who gets to choose the manifestation depends on the GM's preference (the manifestation may even be randomly determined).</p>
<p>All manifestations grant a boon in combat to the animal companion but a disadvantage to the master. An animal companion's accursed manifestation can be activated in one of two ways: the companion's master can deliberately trigger a manifestation by making a successful DC 20 Handle Animal or <Link to="/ability/wild_empathy">wild empathy</Link> check as a move action, or the manifestation can take place when a specific trigger occurs, as detailed in each manifestation's entry.</p>
<p>When an accursed companion manifests its condition, the companion's master can resist or mitigate the debilitating side effect with a successful Will save (DC = 10 + <Link to="/misc/half">half</Link> the accursed companion's HD + the accursed companion's Wisdom modifier [minimum +0]). However, manifestations that are constant (such as <em>festering flesh</em> or <em>unsavory friends</em>) have an equally constant effect on the companion's master, and these effects cannot be mitigated or resisted in any way. An accursed companion can only be affected by a manifestation once per hour unless the manifestation is constant. All side effects on an accursed companion's master are mind-affecting effects.</p>
<Ability id="arc-companion-accursed_companion-bestial-flashes-su" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-bestial-flashes-su">Bestial Flashes (Su)</Pair>
<Pair title="Passive Ability">The companion is haunted by the previous companion's fear and pain during its death. This manifestation is triggered automatically whenever the accursed companion takes damage from a single blow in excess of half its current hit points. When an accursed companion suffers bestial flashes, it gains a +2 morale bonus on all attack rolls and damage rolls made on natural attacks, and gains a +4 morale bonus on rolls to confirm critical hits.</Pair>
<Pair title="Special">Once triggered, a bestial flash lasts for 1 minute. When a bestial flash occurs, the mind of the companion's master is overwhelmed with images of feral savagery. She becomes <Link to="/misc/confused">confused</Link> for 1d4 rounds and is then <Link to="/misc/sickened">sickened</Link> for the remainder of the minute that the bestial flash persists. On a successful Will save, the master is instead sickened for only 1d4 rounds.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-bloodthirsty-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-bloodthirsty-su">Bloodthirsty (Su)</Pair>
<Pair title="Passive Ability">The companion becomes consumed with bloodlust that drives it into a frenzy of savage ferocity. This manifestation is triggered automatically whenever the accursed companion makes a successful critical hit with a natural attack.</Pair>
<Pair title="Special">When the companion becomes bloodthirsty, it flies into a rage and gains +2 Constitution and +2 Strength, but it also takes a -2 penalty to its AC. The rage lasts until the battle is over or for 1 minute, whichever is shorter. It cannot end its rage voluntarily. The companion's master is overwhelmed with rage as well for this period, although this rage is unfocused and distracting, preventing the master from doing anything but growling, hissing, shrieking, and making other animalistic howls, during which time the master cannot speak or use spells with verbal components. A successful Will save reduces the duration of the master's rage to 1 round.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-festering-flesh-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-festering-flesh-su">Festering Flesh (Su)</Pair>
<Pair title="Passive Ability">The companion looks horrific and smells worse. Its rancid flesh reeks of rot and crawls with fleas, ticks, and other vile parasites. Despite its obvious grotesqueness, the creature is quite affectionate, perhaps even overly and inappropriately so.</Pair>
<Pair title="Special">This manifestation is always active - the accursed companion is immune to the sickened and <Link to="/misc/nauseated">nauseated</Link> condition. The master, on the other hand, becomes consumed by fears of contagion to the extent that she takes a -2 penalty on all saving throws against disease effects.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-palsy-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-palsy-su">Palsy (Su)</Pair>
<Pair title="Passive Ability">The poor creature is stricken with palsy. It drools constantly and its muscles spasm with tics and twitches. The palsy doesn't impact its abilities, and actually aids the accursed companion when it loses mobility from other sources.</Pair>
<Pair title="Special">The first time each day that the accursed companion becomes paralyzed, grappled or otherwise has its movement impaired, a <Link to="/spell/freedom_of_movement">freedom of movement</Link> effect automatically activates on the accursed companion. This effect persists for 1 minute, during which time the companion's master becomes nauseated unless she succeeds at a Will save (in which case she is merely sickened for the duration).</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-rabid-vomit-ex" icon={["tornado-discs","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-rabid-vomit-ex">Rabid Vomit (Ex)</Pair>
<Pair title="Passive Ability">A crust of froth lines the rim of the accursed companion's mouth. This manifestation is triggered automatically on the third round of any combat - on this round, the accursed companion always takes a standard action to vomit diseased pus and bile in a 15-foot cone (after moving, if it can, to capture as many enemies in the area of effect as possible). All creatures in this area must succeed at a Fortitude saving throw (DC = 10 + 1/2 the accursed companion's HD + the accursed companion's Constitution modifier) or become nauseated for 1d4 rounds and contract <Link to="/disease/rabies">rabies</Link>. On a successful save, the targets are merely sickened for 1d4 rounds.</Pair>
<Pair title="Special">When the accursed companion makes this vomit attack, its master is overwhelmed by the sensation of a mouthful of diseased bile. She is stunned for 1 round and nauseated for 1d4 rounds thereafter unless she succeeds at a Will save, in which case she is merely sickened for 1d4 rounds.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-scavenger-su" icon={["upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-scavenger-su">Scavenger (Su)</Pair>
<Pair title="Passive Ability">This companion is particularly intrigued by undeath, often playing with carcasses and presenting decaying body parts as gifts to its master.</Pair>
<Pair title="Special">This manifestation is triggered automatically when the companion successfully damages a corporeal undead with a natural attack. For 1 minute, the companion gains a +2 bonus on all attack rolls, damage rolls, and saving throws against undead. During this time, the companion's master becomes more susceptible to the undead, and takes a -2 penalty to all mind-affecting effects created by any undead creature.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-unexpected-frenzy-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-unexpected-frenzy-su">Unexpected Frenzy (Su)</Pair>
<Pair title="Passive Ability">The accursed companion looks normal, but some conditions or phrases cause the animal to fly into a murderous frenzy.</Pair>
<Pair title="Special">When an accursed companion gains this condition, the GM determines three specific situations that can trigger the manifestation of the unexpected frenzy, such as a character petting the companion on the head, a keyword or key phrase such as "good dog," or the sight of a specific type of creature within 10 feet. The first time each day one of the three triggers occurs, the accursed companion flies into its frenzy. Its eyes glow, and any sounds it makes take on an eerie, hollow echo. The companion acts as if under the effects of <Link to="/spell/haste">haste</Link> for 1d4 rounds before returning to normal, and it typically attacks the source of its trigger. While her companion is frenzied, the master is overwhelmed with shame and despair, suffering as if under the effects of a <Link to="/spell/crushing_despair">crushing despair</Link> spell for twice the length of the accursed companion's frenzy. A successful Will save negates this effect.</Pair>
</Ability>
<Ability id="arc-companion-accursed_companion-unsavory-friends-su" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="arc-companion-accursed_companion-unsavory-friends-su">Unsavory Friends (Su)</Pair>
<Pair title="Passive Ability">The companion manages to attract the company of less desirable species. It has an uncanny knack for finding centipedes, bats, mice, and other vermin, even in areas where such pests might not be all that common. Even more unusual, the companion makes it a habit to play with such creatures and becomes angry and defensive if anything threatens its vermin friends. This manifestation is constant. Immune to the <Link to="/umr/distraction">distraction</Link> effect caused by all <Link to="/subtype/swarm">swarms</Link>, the animal companion is comfortable and even welcomes the nauseating sensation of its crawling friends. The companion's master, unfortunately, never gets used to finding squirming bugs or wriggling maggots in the companion's vicinity and takes a -4 penalty on all saving throws against any swarm's distraction ability.</Pair>
</Ability>
</>};
const _ambusher = {title: "Ambusher", jsx: <><h2 id="arc-companion-ambusher-ambusher">Ambusher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 186</Link><br/>Ambushers sneak up on unsuspecting prey, pouncing on targets when they least expect it.</p>
<Ability id="arc-companion-ambusher-camouflage-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-ambusher-camouflage-ex">Camouflage (Ex)</Pair>
<Pair hl title="Replaces">Share Spells, Improved Evasion</Pair>
<Pair title="Passive Ability">An ambusher gains a +4 racial bonus on Stealth checks in its natural environment (if this is unclear, use the environment in its Bestiary entry).</Pair>
<Pair title="At 15th Level">An ambusher can use the Stealth skill to hide in its natural environment, even if the environment doesn't grant <Link to="/rule/cover">cover</Link> or <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
<Ability id="arc-companion-ambusher-cunning-ambusher-ex" icon={["armor-upgrade","upgrade","armor-downgrade"]}>
<Pair single id="arc-companion-ambusher-cunning-ambusher-ex">Cunning Ambusher (Ex)</Pair>
<Pair hl title="Replaces">Evasion, Devotion, Multiattack</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An ambusher gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link>.</Pair>
<Pair title="At 6th Level">An ambusher gains a +2 racial bonus on initiative checks, and during the surprise round, opponents are always considered <Link to="/rule/flat_footed">flat-footed</Link> against the ambusher's attacks, even if they have already acted.</Pair>
<Pair title="At 9th Level">An ambusher gains a +2 morale bonus on attack and damage rolls during a surprise round.</Pair>
</Ability>
</>};
const _apex_species = {title: "Apex Species", jsx: <><h2 id="arc-companion-apex_species-apex-species">Apex Species</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 20</Link><br/>Some animals have no serious competitors and no real predators. They are masters of their habitats, perfectly evolved to take advantage of their native terrain. They need not be predators, of course - some herbivores are just as lethally suited to their homes.</p>
<Ability id="arc-companion-apex_species-native-environment-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-companion-apex_species-native-environment-ex">Native Environment (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Choice">An apex species selects a specific terrain type from the ranger's list of <Link to="/ability/favored_terrain">favored terrains</Link>.</Pair>
<Pair title="Passive Ability">While in its chosen terrain, the apex species gains a bonus equal to <Link to="/misc/half">half</Link> its level on checks and saves to deal with environmental hazards. An apex species may not select a plane as its native environment.</Pair>
</Ability>
<Ability id="arc-companion-apex_species-favored-terrain-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-apex_species-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The apex species gains the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> ability for the terrain that matches its native environment, except that the bonus is +1 instead of the ranger's +2.</Pair>
<Pair title="At 8th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 18th Level">The bonus becomes +4.</Pair>
<Pair title="Special">The animal companion does not gain additional favored terrains.</Pair>
</Ability>
<Ability id="arc-companion-apex_species-natural-selection-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-apex_species-natural-selection-ex">Natural Selection (Ex)</Pair>
<Pair hl title="Replaces">Devotion, Improved Evasion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability"><p>The apex species gains an ability based on their favored terrain, as follows:</p>
<p><em><strong>Cold:</strong></em> The apex species gains cold resistance 5, increasing to 15 at 15th level.</p>
<p><em><strong>Desert:</strong></em> The apex species gains fire resistance 5, increasing to 15 at 15th level.</p>
<p><em><strong>Forest, Jungle:</strong></em> The apex species gains a +1 dodge bonus to CMD, increasing to +3 at 15th level.</p>
<p><em><strong>Mountains, Plains:</strong></em> The apex species gains electricity resistance 5, increasing to 15 at 15th level.</p>
<p><em><strong>Water, Underground:</strong></em> The apex species gains acid resistance 5, increasing to 15 at 15th level.</p>
<p><em><strong>Swamp, Urban:</strong></em> The apex species gains a +4 racial bonus on saves against disease and poison. At 15th level, the apex species becomes immune to disease and poison.</p>
</Pair>
</Ability>
<Ability id="arc-companion-apex_species-master-of-the-wild-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-companion-apex_species-master-of-the-wild-ex">Master of the Wild (Ex)</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability"><p>The apex species gains an ability based on its favored terrain, as follows.</p>
<p><em><strong>Cold:</strong></em> The apex species can see through weather conditions (including blizzards, rain, fog, and mist) without penalty, ignoring any cover or concealment from such effects. If the effect is created by magic, the apex species instead triples the distance it can see without penalty.</p>
<p><em><strong>Desert:</strong></em> The apex species gains a +4 morale bonus on Will saves against illusion spells and effects.</p>
<p><em><strong>Forest, Urban:</strong></em> The apex species gains <Link to="/feat/skill_focus">Skill Focus</Link> (Stealth) as a bonus feat.</p>
<p><em><strong>Jungle, Mountains:</strong></em> The apex species gains a climb speed equal to half its base land speed, or increases its existing climb speed by 10 feet.</p>
<p><em><strong>Plains:</strong></em> The apex species increases its base land speed by 10 feet.</p>
<p><em><strong>Swamp, Water:</strong></em> The apex species gains a swim speed equal to half its base land speed, or increases its existing swim speed by 10 feet.</p>
<p><em><strong>Underground:</strong></em> The apex species gains a burrow speed equal to half its base land speed, or increases its existing burrow speed by 10 feet.</p>
</Pair>
</Ability>
</>};
const _augmented_companion = {title: "Augmented Companion", jsx: <><h2 id="arc-companion-augmented_companion-augmented-companion">Augmented Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 186</Link><br/>Augmented companions have suffered an injury, such as the loss of a wing, and parts of their bodies have been replaced by a master construct crafter. This procedure grants them unusual abilities.</p>
<Ability id="arc-companion-augmented_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-augmented_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on an augmented companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2.</Pair>
</Ability>
<Ability id="arc-companion-augmented_companion-augmented-body-ex" icon={["broken-shield"]}>
<Pair single id="arc-companion-augmented_companion-augmented-body-ex">Augmented Body (Ex)</Pair>
<Pair title="Passive Ability">An augmented companion heals only <Link to="/misc/half">half</Link> as much as normal from positive energy healing effects but also heals half the usual amount from effects that specifically heal constructs.</Pair>
</Ability>
<Ability id="arc-companion-augmented_companion-augmented-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-augmented_companion-augmented-sight-ex">Augmented Sight (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">An augmented companion gains low-light vision and darkvision to a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-companion-augmented_companion-constructed-form-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-augmented_companion-constructed-form-ex">Constructed Form (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">An augmented companion gains a +4 morale bonus on Fortitude saves against effects that could not normally affect objects or constructs, and it takes only half damage from bleed effects. However, it can be affected by attacks that specifically target constructs.</Pair>
</Ability>
</>};
const _auspice = {title: "Auspice", jsx: <><h2 id="arc-companion-auspice-auspice">Auspice</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 187</Link><br/>Auspices were born with a birthmark or other feature that seems to be in the shape of their master's deity's holy symbol; they are usually animal sacred to that deity's religion.</p>
<Ability id="arc-companion-auspice-aligned-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-auspice-aligned-ex">Aligned (Ex)</Pair>
<Pair title="Passive Ability">Even though an auspice is an animal, its connection to its associated deity allows it to be chaotic neutral, lawful neutral, neutral evil, or neutral good, whichever is closest to the deity's alignment, or it can remain true neutral.</Pair>
</Ability>
<Ability id="arc-companion-auspice-auspicious-boon-sp-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-companion-auspice-auspicious-boon-sp-su">Auspicious Boon (Sp, Su)</Pair>
<Pair hl title="Replaces">Share Spells, Evasion</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Full-Round Action">The auspice can cast <Link to="/spell/guidance">guidance</Link> as a spell-like ability at will.</Pair>
<Pair title="At 3rd Level">The auspice can access a spark of its associated deity's favor. Choose one of that deity's domains that grants a 1st-level domain power usable a number of times per day equal to 3 + the user's Wisdom modifier. The auspice can use that power once per day.</Pair>
</Ability>
<Ability id="arc-companion-auspice-aligned-strike-ex" icon={["mailed-fist"]}>
<Pair single id="arc-companion-auspice-aligned-strike-ex">Aligned Strike (Ex)</Pair>
<Pair hl title="Replaces">Improved Evasion</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">An auspice's attacks count as chaotic, evil, good, or lawful (whichever matches its alignment) for the purpose of overcoming damage reduction, unless the auspice is true neutral.</Pair>
</Ability>
</>};
const _bodyguard = {title: "Bodyguard", jsx: <><h2 id="arc-companion-bodyguard-bodyguard">Bodyguard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 187</Link>, <Link to="/source/animal_archive">Animal Archive pg. 20</Link><br/>Some companions live lives of faithful devotion and steady vigilance, standing watch through long hours and always ready to leap into action to protect their masters.</p>
<Ability id="arc-companion-bodyguard-animal-feats" icon={["stairs-goal"]}>
<Pair single id="arc-companion-bodyguard-animal-feats">Animal Feats</Pair>
<Pair title="Passive Ability">In addition to the standard feats available to animal companions, a bodyguard can select <Link to="/feat/bodyguard">Bodyguard</Link>, <Link to="/feat/combat_patrol">Combat Patrol</Link>, <Link to="/feat/heroic_defiance">Heroic Defiance</Link>, <Link to="/feat/heroic_recovery">Heroic Recovery</Link>, and <Link to="/feat/in_harms_way">In Harm's Way</Link>.</Pair>
</Ability>
<Ability id="arc-companion-bodyguard-shared-vigilance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-bodyguard-shared-vigilance-ex">Shared Vigilance (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">Both a bodyguard and its master gain <Link to="/feat/alertness">Alertness</Link> as a bonus feat whenever they are adjacent.</Pair>
</Ability>
<Ability id="arc-companion-bodyguard-tenacious-guardian-ex" icon={["upgrade","mailed-fist"]}>
<Pair single id="arc-companion-bodyguard-tenacious-guardian-ex">Tenacious Guardian (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A bodyguard can always act in a surprise round (though it remains <Link to="/rule/flat_footed">flat-footed</Link> until it acts). As long as its master is adjacent, a bodyguard remains conscious (though it becomes <Link to="/misc/staggered">staggered</Link>) when its hit points fall below 0. While below 0 hit points, the bodyguard loses 1 hit point per round but gains a +2 morale bonus on attack rolls, saving throws, and skill checks, dying only if its hit points reach a negative total equal to its Constitution score plus its master's class level.</Pair>
</Ability>
<Ability id="arc-companion-bodyguard-uncanny-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-bodyguard-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A bodyguard gains <Link to="/ability/uncanny_dodge">uncanny dodge</Link> as per the <Link to="/class/rogue">rogue</Link> class feature of the same name.</Pair>
</Ability>
<Ability id="arc-companion-bodyguard-greater-tenacity-ex" icon={["mailed-fist","armor-upgrade"]}>
<Pair single id="arc-companion-bodyguard-greater-tenacity-ex">Greater Tenacity (Ex)</Pair>
<Pair hl title="Replaces">Improved Evasion</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A bodyguard with fewer than 0 hit points gains a +4 morale bonus on attack rolls, saving throws, and skill checks; immunity to fear effects; and temporary hit points equal to its master's class level (maximum 20). It dies only if its hit points reach a negative total equal to twice its Constitution score plus its master's class level.</Pair>
</Ability>
</>};
const _bully = {title: "Bully", jsx: <><h2 id="arc-companion-bully-bully">Bully</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 187</Link><br/>Bigger than others of its kind, a bully is used to winning fights and displays of dominance for its choice of mates, territory, or other privileges.</p>
<Ability id="arc-companion-bully-bully-feats" icon={["stairs-goal"]}>
<Pair single id="arc-companion-bully-bully-feats">Bully Feats</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">In addition to the standard feats available to animal companions, a bully can select <Link to="/feat/greater_bull_rush">Greater Bull Rush</Link>, <Link to="/feat/greater_overrun">Greater Overrun</Link>, <Link to="/feat/greater_reposition">Greater Reposition</Link>, <Link to="/feat/greater_trip">Greater Trip</Link>, <Link to="/feat/improved_reposition">Improved Reposition</Link>, and <Link to="/feat/improved_trip">Improved Trip</Link>. It can use <Link to="/feat/power_attack">Power Attack</Link> instead of <Link to="/feat/combat_expertise">Combat Expertise</Link> as a prerequisite to qualify for feats on this list.</Pair>
</Ability>
<Ability id="arc-companion-bully-bullying-thrill-ex" icon={["mailed-fist"]}>
<Pair single id="arc-companion-bully-bullying-thrill-ex">Bullying Thrill (Ex)</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">Whenever a bully succeeds at a bull rush, overrun, reposition, or trip combat maneuver check, after fully resolving the combat maneuver, it gains a +2 morale bonus on attack and damage rolls until the end of its next turn.</Pair>
</Ability>
</>};
const _charger = {title: "Charger", jsx: <><h2 id="arc-companion-charger-charger">Charger</h2>
<p><strong>Sources</strong> <Link to="/source/animal_archive">Animal Archive pg. 20</Link><br/>The mighty charger is a boon to heavily armored and armed champions, bearing them and their ironmongery into battle without hesitation.</p>
<Ability id="arc-companion-charger-animal-feats" icon={["stairs-goal"]}>
<Pair single id="arc-companion-charger-animal-feats">Animal Feats</Pair>
<Pair title="Passive Ability">In addition to the standard animal companion feats, a charger may select <Link to="/feat/charge_through">Charge Through</Link>, <Link to="/feat/greater_overrun">Greater Overrun</Link>, <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>, and <Link to="/feat/improved_iron_will">Improved Iron Will</Link>.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-companion-charger-undefined">
<Pair id="arc-companion-charger-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-companion-charger-mounted-challenge-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-charger-mounted-challenge-ex">Mounted Challenge (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">When ridden by a <Link to="/class/cavalier">cavalier</Link>, chargers gain <Link to="/misc/half">half</Link> of the bonuses and penalties granted by the cavalier's challenge class feature.</Pair>
</Ability>
<Ability id="arc-companion-charger-barding-training-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-charger-barding-training-ex">Barding Training (Ex)</Pair>
<Pair hl title="Replaces">Evasion, Multiattack</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A charger's armor check penalty for wearing barding or for <Link to="/rule/carrying_capacity">carrying a medium load</Link> is reduced by 1 and the maximum Dexterity bonus for its armor and load increases by 1. In addition, the charger's speed does not decrease when wearing medium armor or carrying a medium load.</Pair>
<Pair title="At 9th Level">The armor check penalty is now reduced by 2, and the maximum Dex bonus now increases by 2. In addition, a charger can move at normal speed in heavy armor or while carrying a heavy load.</Pair>
<Pair title="At 15th Level">The armor check penalty is now reduced by 3, and the maximum Dex bonus now increases by 3.</Pair>
</Ability>
<Ability id="arc-companion-charger-indefatigable-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-charger-indefatigable-ex">Indefatigable (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A charger becomes immune to <Link to="/misc/fatigue">fatigue</Link>.</Pair>
</Ability>
<Ability id="arc-companion-charger-stalwart-steed-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-charger-stalwart-steed-ex">Stalwart Steed (Ex)</Pair>
<Pair hl title="Replaces">Improved Evasion</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">Whenever the charger succeeds at a Fortitude or Will save that would normally result in a reduced or partial effect, the charger is unaffected.</Pair>
</Ability>
</>};
const _daredevil = {title: "Daredevil", jsx: <><h2 id="arc-companion-daredevil-daredevil">Daredevil</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 187</Link><br/>Daredevil companions join the fray with graceful leaps or swooping dives, heedless of the danger.</p>
<Ability id="arc-companion-daredevil-artful-acrobat-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-daredevil-artful-acrobat-ex">Artful Acrobat (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">A daredevil gains a competence bonus on Acrobatics checks equal to <Link to="/misc/half">half</Link> its Hit Dice.</Pair>
</Ability>
<Ability id="arc-companion-daredevil-uncanny-dodge-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-daredevil-uncanny-dodge-ex">Uncanny Dodge (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A daredevil gains <Link to="/feat/mobility">Mobility</Link> as a bonus feat without needing to meet the prerequisites. If it already has Mobility, it gains <Link to="/feat/spring_attack">Spring Attack</Link> instead.</Pair>
</Ability>
<Ability id="arc-companion-daredevil-devil-may-care-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-daredevil-devil-may-care-ex">Devil May Care (Ex)</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A daredevil can't be flanked.</Pair>
</Ability>
</>};
const _deathtouched_companion = {title: "Deathtouched Companion", jsx: <><h2 id="arc-companion-deathtouched_companion-deathtouched-companion">Deathtouched Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 187</Link><br/>Whether the result of a partially successful attempt at revival, a strange blight, or repeated exposure to undead, deathtouched companions are living animals with a trace of the undead, somewhat like <Link to="/race/dhampir">dhampirs</Link>.</p>
<Ability id="arc-companion-deathtouched_companion-deathtouched-skills" icon={["upgrade"]}>
<Pair single id="arc-companion-deathtouched_companion-deathtouched-skills">Deathtouched Skills</Pair>
<Pair title="Passive Ability">Deathtouched companions treat Intimidate as a class skill.</Pair>
</Ability>
<Ability id="arc-companion-deathtouched_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-deathtouched_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on a deathtouched companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2. It doesn't count as an animal for the purpose of an undead's unnatural aura.</Pair>
</Ability>
<Ability id="arc-companion-deathtouched_companion-dead-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-deathtouched_companion-dead-sight-ex">Dead Sight (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">A deathtouched companion gains darkvision to a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-companion-deathtouched_companion-negative-energy-affinity-ex" icon={["broken-shield"]}>
<Pair single id="arc-companion-deathtouched_companion-negative-energy-affinity-ex">Negative Energy Affinity (Ex)</Pair>
<Pair title="Passive Ability">Though a living creature, a deathtouched companion reacts to positive and negative energy as if it were undead - positive energy harms it, while negative energy heals it.</Pair>
</Ability>
<Ability id="arc-companion-deathtouched_companion-one-foot-in-the-grave-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-deathtouched_companion-one-foot-in-the-grave-ex">One Foot in the Grave (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A deathtouched companion gains a +4 morale bonus on Fortitude saves against effects that could not normally affect objects or undead, and it takes only <Link to="/misc/half">half</Link> damage from bleed effects. However, it can be affected by attacks that specifically target undead, such as <Link to="/spell/halt_undead">halt undead</Link>.</Pair>
</Ability>
</>};
const _draconic_companion = {title: "Draconic Companion", jsx: <><h2 id="arc-companion-draconic_companion-draconic-companion">Draconic Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 188</Link><br/>Draconic companions bear a faint trace of dragon blood that grants them special abilities.</p>
<Ability icon={["skills"]} id="arc-companion-draconic_companion-undefined">
<Pair id="arc-companion-draconic_companion-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA)</Pair></Ability>
<Ability id="arc-companion-draconic_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-draconic_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on a draconic companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2.</Pair>
</Ability>
<Ability id="arc-companion-draconic_companion-draconic-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-draconic_companion-draconic-sight-ex">Draconic Sight (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">A draconic companion gains low-light vision and darkvision to a range of 60 feet.</Pair>
</Ability>
<Ability id="arc-companion-draconic_companion-draconic-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-draconic_companion-draconic-resistance-ex">Draconic Resistance (Ex)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">Choose acid, cold, electricity, or fire, based on the draconic companion's draconic ancestor. The draconic companion gains resistance 5 against the chosen energy type, as well as a +2 racial bonus on saves against paralysis and sleep.</Pair>
</Ability>
<Ability id="arc-companion-draconic_companion-improved-draconic-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-draconic_companion-improved-draconic-resistance-ex">Improved Draconic Resistance (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A draconic companion becomes immune to paralysis and sleep, and its energy resistance increases to 10.</Pair>
<Pair title="At 15th Level">Its energy resistance increases to 20.</Pair>
</Ability>
<Ability id="arc-companion-draconic_companion-breath-weapon-ex" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="arc-companion-draconic_companion-breath-weapon-ex">Breath Weapon (Ex)</Pair>
<Pair hl title="Replaces">Multiattack, Improved Evasion</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Ability">A draconic companion gains a breath weapon that deals 1d6 points of damage per Hit Dice of the energy type matching its draconic resistance in either a 30-foot cone or a 60-foot line (chosen when the draconic companion gains this ability).</Pair>
<Pair title="At 15th Level">It can use the breath weapon three times per day, but it must wait 1d4 rounds between uses.</Pair>
<Pair title="Special">Targets of this breath weapon can attempt a Reflex save (DC = 10 + <Link to="/misc/half">half</Link> the draconic companion's Hit Dice + the draconic companion's Constitution modifier) for half damage.</Pair>
</Ability>
</>};
const _elemental_companion = {title: "Elemental Companion", jsx: <><h2 id="arc-companion-elemental_companion-elemental-companion">Elemental Companion</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 26</Link><br/>The heart of this companion beats with primal energy.</p>
<Ability id="arc-companion-elemental_companion-elemental-type-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-elemental_companion-elemental-type-ex">Elemental Type (Ex)</Pair>
<Pair title="Passive Ability">An elemental companion gains a subtype that matches its element: air, earth, fire, or water.</Pair>
</Ability>
<Ability id="arc-companion-elemental_companion-lesser-elemental-manifestation-ex" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="arc-companion-elemental_companion-lesser-elemental-manifestation-ex">Lesser Elemental Manifestation (Ex)</Pair>
<Pair hl title="Replaces">Evasion, Improved Evasion</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An elemental companion gains one or more special abilities based on its element. An <strong className="hl">air</strong> companion gains a 20% miss chance against ranged attacks. An <strong className="hl">earth</strong> companion gains DR 1/adamantine, and this damage reduction increases by 1 for every 4 druid levels the master has. A <strong className="hl">fire</strong> companion can see through fire, fog, and smoke without penalty, and it gains <Link to="/feat/nimble_moves">Nimble Moves</Link> as a bonus feat. A <strong className="hl">water</strong> companion can breathe underwater, gains a swim speed of 20 feet, and gains a +2 dodge bonus to AC against attacks of opportunity; a water companion that already has a swim speed instead increases its swim speed by 10 feet.</Pair>
</Ability>
<Ability id="arc-companion-elemental_companion-greater-elemental-manifestation-su" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-companion-elemental_companion-greater-elemental-manifestation-su">Greater Elemental Manifestation (Su)</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An elemental companion gains an additional ability based on its element. An <strong className="hl">air</strong> companion gains a fly speed of 20 feet (good maneuverability); an air companion that already has a fly speed instead improves its maneuverability by one category. An <strong className="hl">earth</strong> companion's natural attacks overcome damage reduction as though they were adamantine, cold iron, and silver weapons. For a <strong className="hl">fire</strong> companion, choose one natural attack; that attack deals an additional 1d6 points of fire damage for every 5 Hit Dice the companion has. For a <strong className="hl">water</strong> companion, choose one melee natural attack; that attack gains the <Link to="/umr/push">push (10 feet)</Link> special ability.</Pair>
</Ability>
</>};
const _feytouched_companion = {title: "Feytouched Companion", jsx: <><h2 id="arc-companion-feytouched_companion-feytouched-companion">Feytouched Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 188</Link><br/>Feytouched companions are strangely colored fauna native to the First World, the primal realm of the fey. They gain strange abilities tied to the fey.</p>
<p><strong className="hl">Small:</strong> A feytouched companion must be an animal companion that normally starts as Small or smaller.</p>
<Ability icon={["skills"]} id="arc-companion-feytouched_companion-undefined">
<Pair id="arc-companion-feytouched_companion-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perform">Perform</Link> (CHA)</Pair></Ability>
<Ability id="arc-companion-feytouched_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-feytouched_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on a feytouched companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2.</Pair>
</Ability>
<Ability id="arc-companion-feytouched_companion-small-but-fierce-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-feytouched_companion-small-but-fierce-ex">Small but Fierce (Ex)</Pair>
<Pair hl title="Replaces">The 4th- or 7th-level ability score and size advancement</Pair>
<Pair title="Passive Ability">At 4th or 7th level, whenever the feytouched companion would normally gain the choice of a listed advancement or a +2 bonus to its Dexterity and Constitution scores, it instead gains a +2 bonus to its Strength, Dexterity, and Constitution scores.</Pair>
</Ability>
<Ability id="arc-companion-feytouched_companion-fey-magic-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-companion-feytouched_companion-fey-magic-sp">Fey Magic (Sp)</Pair>
<Pair hl title="Replaces">Share Spells, Multiattack</Pair>
<Pair title="Full-Round Action">A feytouched companion can cast <Link to="/spell/dancing_lights">dancing lights</Link> at will as a spell-like ability.</Pair>
<Pair title="At 3rd Level">A feytouched companion can <Link to="/rule/ready">ready</Link> an action for its master's spellcasting while adjacent to its master, to allow its master to spontaneously cast one of the following spells by sacrificing a spell slot of equal or higher level: <Link to="/spell/faerie_fire">faerie fire</Link> (1st), <Link to="/spell/glitterdust">glitterdust</Link> (2nd), <Link to="/spell/deep_slumber">deep slumber</Link> (3rd), <Link to="/spell/major_image">major image</Link> (4th), <Link to="/spell/confusion">confusion</Link> (5th), <Link to="/spell/feeblemind">feeblemind</Link> (7th), <Link to="/spell/mislead">mislead</Link> (8th). A feytouched companion's master can cast each of the spells on the list only once each day in this way.</Pair>
</Ability>
<Ability id="arc-companion-feytouched_companion-iron-bane-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-feytouched_companion-iron-bane-ex">Iron Bane (Ex)</Pair>
<Pair hl title="Replaces">Evasion, Devotion, Improved Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A feytouched companion gains <Link to="/rule/damage_reduction">damage reduction</Link> 1/cold iron. This damage reduction increases by 1 for every 3 levels beyond 3rd.</Pair>
<Pair title="Special">Any creature holding or wearing an item made out of cold iron takes a -10 penalty on Handle Animal checks to handle the feytouched companion.</Pair>
</Ability>
</>};
const _precocious_companion = {title: "Precocious Companion", jsx: <><h2 id="arc-companion-precocious_companion-precocious-companion">Precocious Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 188</Link><br/>Precocious companions are able to learn far more tricks than other companions; this ability to learn allows their masters to use them for a wider variety of tasks.</p>
<Ability id="arc-companion-precocious_companion-expanded-tricks-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-precocious_companion-expanded-tricks-ex">Expanded Tricks (Ex)</Pair>
<Pair hl title="Replaces">Evasion, Improved Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A precocious companion gains twice as many bonus tricks as normal for an animal companion. A <Link to="/class/hunter">hunter's</Link> animal companion can't use the additional bonus tricks to learn hunter's tricks.</Pair>
<Pair title="At 15th Level">The DC of the Handle Animal check to push a precocious companion to perform an unlearned trick is only 15, instead of 25.</Pair>
</Ability>
<Ability id="arc-companion-precocious_companion-perspicacious-mind-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-precocious_companion-perspicacious-mind-ex">Perspicacious Mind (Ex)</Pair>
<Pair hl title="Replaces">The 4th- or 7th-level ability score advancement</Pair>
<Pair title="Ability">At 4th or 7th level, whenever the precocious companion would normally gain the choice of a listed score advancement or a +2 bonus to Dexterity and Constitution, it instead gains a +2 bonus to its Intelligence score and a +4 bonus to its Wisdom and Charisma scores.</Pair>
</Ability>
</>};
const _racer = {title: "Racer", jsx: <><h2 id="arc-companion-racer-racer">Racer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 188</Link>, <Link to="/source/animal_archive">Animal Archive pg. 21</Link><br/>Some companions have uncanny speed, providing their masters with swift transport.</p>
<Ability id="arc-companion-racer-racer-feats" icon={["stairs-goal"]}>
<Pair single id="arc-companion-racer-racer-feats">Racer Feats</Pair>
<Pair title="Passive Ability">In addition to the standard feats available to animal companions, a racer can select <Link to="/feat/acrobatic_steps">Acrobatic Steps</Link>, <Link to="/feat/charge_through">Charge Through</Link>, <Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link>, <Link to="/feat/lightning_stance">Lightning Stance</Link>, <Link to="/feat/nimble_moves">Nimble Moves</Link>, and <Link to="/feat/wind_stance">Wind Stance</Link>.</Pair>
</Ability>
<Ability id="arc-companion-racer-fast-movement-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-racer-fast-movement-ex">Fast Movement (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">A racer's speed is 10 feet greater than that of typical animals of its kind when it is wearing no armor and carrying a light load.</Pair>
</Ability>
<Ability id="arc-companion-racer-sprint-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-racer-sprint-ex">Sprint (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">Once per hour.</Pair>
<Pair title="Ability">A racer can move at 10 times its normal speed when it makes a <Link to="/rule/charge">charge</Link> or uses the <Link to="/rule/run">run</Link> action.</Pair>
</Ability>
</>};
const _totem_guide = {title: "Totem Guide", jsx: <><h2 id="arc-companion-totem_guide-totem-guide">Totem Guide</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 189</Link>, <Link to="/source/animal_archive">Animal Archive pg. 21</Link><br/>Totem guides embody the wisdom and spirituality of the natural world, providing guidance as well as aid in combat. Once a totem guide is chosen, a character can replace the companion if it is slain but must choose the same kind of totem guide.</p>
<Ability id="arc-companion-totem_guide-spiritual-guidance-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-companion-totem_guide-spiritual-guidance-sp">Spiritual Guidance (Sp)</Pair>
<Pair hl title="Replaces">Evasion</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Full-Round Action">A totem guide can use <Link to="/spell/guidance">guidance</Link> as a spell-like ability at will, targeting itself or its master.</Pair>
<Pair title="Ability">A totem guide's master can spontaneously cast the following spells while adjacent to the totem guide by sacrificing a spell slot of equal or higher level: <Link to="/spell/detect_animals_or_plants">detect animals or plants</Link> (1st), <Link to="/spell/augury">augury</Link> (2nd), <Link to="/spell/helping_hand">helping hand</Link> (3rd), <Link to="/spell/divination">divination</Link> (4th), <Link to="/spell/commune_with_nature">commune with nature</Link> (5th), and <Link to="/spell/find_the_path">find the path</Link> (6th). The totem guide serves as a divine focus for these spells, but costly material components must still be provided.</Pair>
</Ability>
<Ability id="arc-companion-totem_guide-beast-speech-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-totem_guide-beast-speech-ex">Beast Speech (Ex)</Pair>
<Pair hl title="Replaces">Devotion</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A totem guide can speak with its master as though the two share a common language, and it can speak with other animals of its species (or, at the GM's discretion, other creatures with similar types).</Pair>
</Ability>
<Ability id="arc-companion-totem_guide-eldritch-claws" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="arc-companion-totem_guide-eldritch-claws">Eldritch Claws</Pair>
<Pair hl title="Replaces">Multiattack</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A totem guide gains <Link to="/feat/eldritch_claws">Eldritch Claws</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-companion-totem_guide-ghost-guardian-ex" icon={["mailed-fist","armor-upgrade","upgrade"]}>
<Pair single id="arc-companion-totem_guide-ghost-guardian-ex">Ghost Guardian (Ex)</Pair>
<Pair hl title="Replaces">Improved Evasion</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">A totem guide's natural weapons deal full damage to incorporeal creatures, and its natural armor bonus applies against incorporeal touch attacks. A totem guide can never be transformed into or animated as an undead creature.</Pair>
</Ability>
</>};
const _tracker = {title: "Tracker", jsx: <><h2 id="arc-companion-tracker-tracker">Tracker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 189</Link><br/>Some companions are expert trackers, able to use their scent ability to follow any trail.</p>
<p><strong className="hl">Keen Nose:</strong> A tracker must be an animal companion with the <Link to="/umr/scent">scent</Link> ability.</p>
<Ability id="arc-companion-tracker-tracker-skills" icon={["upgrade"]}>
<Pair single id="arc-companion-tracker-tracker-skills">Tracker Skills</Pair>
<Pair title="Passive Ability">Trackers treat Survival as a class skill.</Pair>
</Ability>
<Ability id="arc-companion-tracker-expert-tracker-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-tracker-expert-tracker-ex">Expert Tracker (Ex)</Pair>
<Pair hl title="Replaces">Share Spells, Devotion</Pair>
<Pair title="Passive Ability">A tracker gains a competence bonus on Survival checks to track via scent equal to <Link to="/misc/half">half</Link> its total Hit Dice.</Pair>
<Pair title="At 6th Level">It can move at its normal speed while using Survival to follow tracks without taking the normal -5 penalty. It takes only a -10 penalty (instead of the normal -20 penalty) when moving at up to twice its normal speed while tracking.</Pair>
</Ability>
</>};
const _unexpected_intellectual = {title: "Unexpected Intellectual", jsx: <><h2 id="arc-companion-unexpected_intellectual-unexpected-intellectual">Unexpected Intellectual</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 20</Link><br/>Sometimes, when an insect or other vermin is chosen to be an animal companion, it proves cleverer than expected. On occasion, it proves much cleverer.</p>
<p><strong className="hl">Special Requirement:</strong> Only vermin companions may become unexpected intellectuals.</p>
<Ability id="arc-companion-unexpected_intellectual-genius-that-creeps-and-crawls-ex" icon={["upgrade"]}>
<Pair single id="arc-companion-unexpected_intellectual-genius-that-creeps-and-crawls-ex">Genius that Creeps and Crawls (Ex)</Pair>
<Pair hl title="Replaces">Share Spells</Pair>
<Pair title="Passive Ability">The unexpected intellectual gains an Intelligence score of 2 and can gain skills and feats. It loses the mindless quality.</Pair>
</Ability>
</>};
const _verdant_companion = {title: "Verdant Companion", jsx: <><h2 id="arc-companion-verdant_companion-verdant-companion">Verdant Companion</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 189</Link><br/>Favorites of druids who balance their responsibilities between flora and fauna, verdant companions are animals with some of the abilities and physical aspects of plants.</p>
<Ability id="arc-companion-verdant_companion-not-quite-animal" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-verdant_companion-not-quite-animal">Not Quite Animal</Pair>
<Pair title="Passive Ability">The DC to use Handle Animal on a verdant companion is 5 higher, as if it were a nonanimal with an Intelligence score of 1 or 2.</Pair>
</Ability>
<Ability id="arc-companion-verdant_companion-photosynthesis-ex" icon={["stairs-goal"]}>
<Pair single id="arc-companion-verdant_companion-photosynthesis-ex">Photosynthesis (Ex)</Pair>
<Pair title="Passive Ability">As long as it stays in the sunlight for at least 8 hours per day, a verdant companion doesn't need to eat. Otherwise, it eats normally for an animal of its kind.</Pair>
</Ability>
<Ability id="arc-companion-verdant_companion-verdant-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-companion-verdant_companion-verdant-resistance-ex">Verdant Resistance (Ex)</Pair>
<Pair hl title="Replaces">Share Spells, Evasion, Devotion, Improved Evasion</Pair>
<Pair title="Passive Ability">A verdant companion gains a +1 racial bonus on saving throws against mind-affecting effects, paralysis, poison, polymorph, sleep effects, and stunning.</Pair>
<Pair title="At 3rd Level">This bonus increases to +2.</Pair>
<Pair title="At 6th Level">This bonus increases to +3 and it gains roots it can plant or retract as a <strong className="hl">swift action</strong>. With its roots planted, it can't move, but it gains a +4 bonus to its CMD against bull rush, pull, push, reposition, trip, and other combat maneuvers that would knock it over or move it.</Pair>
<Pair title="At 15th Level">The bonus on saving throws increases to +4.</Pair>
</Ability>
</>};
const _wrecker = {title: "Wrecker", jsx: <><h2 id="arc-companion-wrecker-wrecker">Wrecker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 189</Link><br/>Like unruly pets, some companions have a tendency to destroy nearby objects while unsupervised, and their masters can channel these destructive impulses into an advantage in battle.</p>
<Ability id="arc-companion-wrecker-wrecker-feats" icon={["upgrade"]}>
<Pair single id="arc-companion-wrecker-wrecker-feats">Wrecker Feats</Pair>
<Pair title="Passive Ability">In addition to the standard feats available to animal companions, a wrecker can select <Link to="/feat/improved_sunder">Improved Sunder</Link> and <Link to="/feat/greater_sunder">Greater Sunder</Link>.</Pair>
</Ability>
<Ability id="arc-companion-wrecker-destructive-wrecker-ex" icon={["mailed-fist"]}>
<Pair single id="arc-companion-wrecker-destructive-wrecker-ex">Destructive Wrecker (Ex)</Pair>
<Pair hl title="Replaces">Share Spells, Multiattack</Pair>
<Pair title="At 1st Level">A wrecker's natural attacks ignore an inanimate object's first 5 points of hardness.</Pair>
<Pair title="At 9th Level">A wrecker's natural attacks count as if they were <Link to="/eq-material/adamantine">adamantine</Link> for the purpose of overcoming a construct's damage reduction.</Pair>
</Ability>
</>};
export default {aberrant_companion:_aberrant_companion,accursed_companion:_accursed_companion,ambusher:_ambusher,apex_species:_apex_species,augmented_companion:_augmented_companion,auspice:_auspice,bodyguard:_bodyguard,bully:_bully,charger:_charger,daredevil:_daredevil,deathtouched_companion:_deathtouched_companion,draconic_companion:_draconic_companion,elemental_companion:_elemental_companion,feytouched_companion:_feytouched_companion,precocious_companion:_precocious_companion,racer:_racer,totem_guide:_totem_guide,tracker:_tracker,unexpected_intellectual:_unexpected_intellectual,verdant_companion:_verdant_companion,wrecker:_wrecker}