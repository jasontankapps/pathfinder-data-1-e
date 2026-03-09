import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested creature type or subtype.</p>
</>};
const _aberration = {title: "Aberration", jsx: <><h2 id="type-aberration-type-aberration">Type: Aberration</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 306</Link></p>
<p>An aberration has a bizarre anatomy, strange abilities, an alien mindset, or any combination of the three.</p>
<p>An aberration has the following features.</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>Good Will Saves.</li>
<li>Skill points equal to 4 + Int modifier (minimum 1) per Hit Die. The following are class skills for aberrations: <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge">Knowledge</Link> (pick one), <Link to="/skill/perception">Perception</Link>, <Link to="/skill/spellcraft">Spellcraft</Link>, <Link to="/skill/stealth">Stealth</Link>, <Link to="/skill/survival">Survival</Link>, and <Link to="/skill/swim">Swim</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> An aberration possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Darkvision 60 feet.</li>
<li>Proficient with its natural weapons. If generally humanoid in form, proficient with all simple weapons and any weapon it is described as using.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, as well as all lighter types. Aberrations not indicated as wearing armor are not proficient with armor. Aberrations are proficient with shields if they are proficient with any form of armor.</li>
<li>Aberrations breathe, eat, and sleep.</li>
</ul>
</>};
const _animal = {title: "Animal", jsx: <><h2 id="type-animal-type-animal">Type: Animal</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 306</Link></p>
<p>An animal is a living, non-human creature, usually a vertebrate with no magical abilities and no innate capacity for language or culture. Animals usually have additional information on how they can serve as companions.</p>
<p>An animal has the following features (unless otherwise noted).</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>Good Fortitude and Reflex saves.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. The following are class skills for animals: <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/stealth">Stealth</Link>, and <Link to="/skill/swim">Swim</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> An animal possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Intelligence score of 1 or 2 (no creature with an Intelligence score of 3 or higher can be an animal).</li>
<li>Low-light vision.</li>
<li><strong>Alignment:</strong> Always neutral.</li>
<li><strong>Treasure:</strong> None.</li>
<li>Proficient with its natural weapons only. A noncombative herbivore treats its natural weapons as secondary attacks. Such attacks are made with a -5 penalty on the creature's attack rolls, and the animal receives only 1/2 its Strength modifier as a damage adjustment.</li>
<li>Proficient with no armor unless trained for combat. (See <Link to="/skill/handle_animal">Handle Animal</Link> skill.)</li>
<li>Animals breathe, eat, and sleep.</li>
</ul>
</>};
const _construct = {title: "Construct", jsx: <><h2 id="type-construct-type-construct">Type: Construct</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 307</Link></p>
<p>A construct is an animated object or artificially created creature.</p>
<p>A construct has the following features.</p>
<ul>
<li>d10 Hit Die.</li>
<li>Base attack bonus equal to total Hit Dice (fast progression).</li>
<li>No <Link to="/misc/good_saving_throws">good saving throws</Link>.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. However, most constructs are mindless and gain no skill points or feats. Constructs do not have any class skills, regardless of their Intelligence scores.</li>
</ul>
<p><strong className="hl">Traits:</strong> A construct possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>No Constitution score. Any DCs or other Statistics that rely on a Constitution score treat a construct as having a score of 10 (no bonus or penalty).</li>
<li>Low-light vision.</li>
<li>Darkvision 60 feet.</li>
<li><Link to="/umr/immunity">Immunity</Link> to all mind-affecting effects (charms, compulsions, morale effects, patterns, and phantasms).</li>
<li>Immunity to bleed, disease, death effects, necromancy effects, paralysis, poison, sleep effects, and stunning.</li>
<li>Cannot heal damage on its own, but often can be repaired via exposure to a certain kind of effect (see the creature's description for details) or through the use of the <Link to="/feat/craft_construct">Craft Construct</Link> feat. Constructs can also be healed through spells such as <Link to="/spell/make_whole">make whole</Link>. A construct with the <Link to="/umr/fast_healing">fast healing</Link> special quality still benefits from that quality.</li>
<li>Not subject to ability damage, ability drain, fatigue, exhaustion, energy drain, or nonlethal damage.</li>
<li>Immunity to any effect that requires a Fortitude save (unless the effect also works on objects, or is harmless).</li>
<li>Not at risk of death from massive damage. Immediately destroyed when reduced to 0 hit points or less.</li>
<li>A construct cannot be <em>raised</em> or <em>resurrected.</em></li>
<li>A construct is hard to destroy, and gains bonus hit points based on size, as shown on the following table.</li>
<li>Proficient with its natural weapons only, unless generally humanoid in form, in which case proficient with any weapon mentioned in its entry.</li>
<li>Proficient with no armor.</li>
<li>Constructs do not breathe, eat, or sleep.</li>
</ul>
<ScrollContainer id="type-construct--table-0"><table>
<thead>
<tr>
<th>Construct Size</th>
<th>Bonus Hit Points</th>
</tr>
</thead>
<tbody><tr>
<td>Fine</td>
<td>-</td>
</tr>
<tr>
<td>Diminutive</td>
<td>-</td>
</tr>
<tr>
<td>Tiny</td>
<td>-</td>
</tr>
<tr>
<td>Small</td>
<td>10</td>
</tr>
<tr>
<td>Medium</td>
<td>20</td>
</tr>
<tr>
<td>Large</td>
<td>30</td>
</tr>
<tr>
<td>Huge</td>
<td>40</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>60</td>
</tr>
<tr>
<td>Colossal</td>
<td>80</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _dragon = {title: "Dragon", jsx: <><h2 id="type-dragon-type-dragon">Type: Dragon</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 307</Link></p>
<p>A dragon is a reptile-like creature, usually winged, with magical or unusual abilities.</p>
<p>A dragon has the following features.</p>
<ul>
<li>d12 Hit Die.</li>
<li>Base attack bonus equal to total Hit Dice (fast progression).</li>
<li>Good Fortitude, Reflex, and Will Saves.</li>
<li>Skill points equal to 6 + Int modifier (minimum 1) per Hit Die. The following are class skills for dragons: Appraise, Bluff, Climb, Craft, Diplomacy, Fly, Heal, Intimidate, Knowledge (all), Linguistics, Perception, Sense Motive, Spellcraft, Stealth, Survival, Swim, and Use Magic Device.</li>
</ul>
<p><strong className="hl">Traits:</strong> A dragon possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Darkvision 60 feet and low-light vision.</li>
<li><Link to="/umr/immunity">Immunity</Link> to magic sleep effects and paralysis effects.</li>
<li>Proficient with its natural weapons only unless humanoid in form (or capable of assuming humanoid form), in which case proficient with all simple weapons and any weapons mentioned in its entry.</li>
<li>Proficient with no armor.</li>
<li>Dragons breathe, eat, and sleep.</li>
</ul>
</>};
const _fey = {title: "Fey", jsx: <><h2 id="type-fey-type-fey">Type: Fey</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 307</Link></p>
<p>A fey is a creature with supernatural abilities and connections to nature or to some other force or place. Fey are usually human-shaped.</p>
<p>A fey has the following features.</p>
<ul>
<li>d6 Hit Die.</li>
<li>Base attack bonus equal to 1/2 total Hit Dice (slow progression).</li>
<li>Good Reflex and Will Saves.</li>
<li>Skill points equal to 6 + Int modifier (minimum 1) per Hit Die. The following are class skills for fey: <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/diplomacy">Diplomacy</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/escape_artist">Escape Artist</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/knowledge_geography">Knowledge (geography)</Link>, <Link to="/skill/knowledge_local">Knowledge (local)</Link>, <Link to="/skill/knowledge_nature">Knowledge (nature)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/perform">Perform</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/sleight_of_hand">Sleight of Hand</Link>, <Link to="/skill/stealth">Stealth</Link>, <Link to="/skill/swim">Swim</Link>, <Link to="/skill/use_magic_device">Use Magic Device</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> A fey possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Low-light vision.</li>
<li>Proficient with all simple weapons and any weapons mentioned in its entry.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, as well as all lighter types. Fey not indicated as wearing armor are not proficient with armor. Fey are proficient with shields if they are proficient with any form of armor.</li>
<li>Fey breathe, eat, and sleep.</li>
</ul>
</>};
const _humanoid = {title: "Humanoid", jsx: <><h2 id="type-humanoid-type-humanoid">Type: Humanoid</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 308</Link></p>
<p>A humanoid usually has two arms, two legs, and one head, or a human-like torso, arms, and a head. humanoids have few or no supernatural or extraordinary abilities, but most can speak and usually have well-developed societies. They are usually Small or Medium (with the exception of <Link to="/subtype/giant">giants</Link>). Every humanoid creature also has a specific subtype to match its race, such as human, dark folk, or goblinoid.</p>
<p>Humanoids with 1 Hit Die exchange the features of their humanoid Hit Die for the class features of a PC or NPC class. Humanoids of this sort are typically presented as 1st-level warriors, which means they have average combat ability and <Link to="/misc/poor_saving_throws">poor saving throws</Link>. Humanoids with more than 1 Hit Die (such as giants) are the only humanoids who make use of the features of the humanoid type.</p>
<p>A humanoid has the following features (unless otherwise noted in a creature's entry).</p>
<ul>
<li>d8 Hit Die, or by character class.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>One <Link to="/misc/good_saves">good save</Link>, usually Reflex.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die or by character class. The following are class skills for humanoids without a character class: <Link to="/skill/climb">Climb</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/handle_animal">Handle Animal</Link>, <Link to="/skill/heal">Heal</Link>, <Link to="/skill/profession">Profession</Link>, <Link to="/skill/ride">Ride</Link>, and <Link to="/skill/survival">Survival</Link>. Humanoids with both a character class and racial HD add these skills to their list of class skills.</li>
</ul>
<p><strong className="hl">Traits:</strong> A humanoid possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Proficient with all simple weapons, or by character class.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, or by character class. If a humanoid does not have a class and wears armor, it is proficient with that type of armor and all lighter types. Humanoids not indicated as wearing armor are not proficient with armor. Humanoids are proficient with shields if they are proficient with any form of armor.</li>
<li>Humanoids breathe, eat, and sleep.</li>
</ul>
</>};
const _magical_beast = {title: "Magical Beast", jsx: <><h2 id="type-magical_beast-type-magical-beast">Type: Magical Beast</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 308</Link></p>
<p>Magical Beasts are similar to animals but can have Intelligence scores higher than 2 (in which case the creature knows at least one language, but can't necessarily speak). Magical Beasts usually have supernatural or extraordinary abilities, but are sometimes merely bizarre in appearance or habits.</p>
<p>A magical beast has the following features.</p>
<ul>
<li>d10 Hit Die.</li>
<li>Base attack bonus equal to total Hit Dice (fast progression).</li>
<li>Good Fortitude and Reflex saves.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. The following are class skills for magical beasts: <Link to="/skill/acrobatics">Acrobatics</Link>, <Link to="/skill/climb">Climb</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/stealth">Stealth</Link>, <Link to="/skill/swim">Swim</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> A magical beast possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Darkvision 60 feet.</li>
<li>Low-light vision.</li>
<li>Proficient with its natural weapons only.</li>
<li>Proficient with no armor.</li>
<li>Magical beasts breathe, eat, and sleep.</li>
</ul>
</>};
const _monstrous_humanoid = {title: "Monstrous Humanoid", jsx: <><h2 id="type-monstrous_humanoid-type-monstrous-humanoid">Type: Monstrous Humanoid</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 308</Link></p>
<p>Monstrous humanoids are similar to <Link to="/type/humanoid">humanoids</Link>, but with monstrous or animalistic features. They often have magical abilities as well.</p>
<p>A monstrous humanoid has the following features.</p>
<ul>
<li>d10 Hit Die.</li>
<li>Base attack bonus equal to total Hit Dice (fast progression).</li>
<li>Good Reflex and Will Saves.</li>
<li>Skill points equal to 4 + Int modifier (minimum 1) per Hit Die. The following are class skills for monstrous humanoids: <Link to="/skill/climb">Climb</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/ride">Ride</Link>, <Link to="/skill/stealth">Stealth</Link>, <Link to="/skill/survival">Survival</Link>, and <Link to="/skill/swim">Swim</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> A monstrous humanoid possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Darkvision 60 feet.</li>
<li>Proficient with all simple weapons and any weapons mentioned in its entry.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, as well as all lighter types. Monstrous humanoids not indicated as wearing armor are not proficient with armor. Monstrous humanoids are proficient with shields if they are proficient with any form of armor.</li>
<li>Monstrous humanoids breathe, eat, and sleep.</li>
</ul>
</>};
const _ooze = {title: "Ooze", jsx: <><h2 id="type-ooze-type-ooze">Type: Ooze</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 308</Link></p>
<p>An ooze is an amorphous or mutable creature, usually mindless.</p>
<p>An ooze has the following features.</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>No <Link to="/misc/good_saving_throws">good saving throws</Link>.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. However, most oozes are mindless and gain no skill points or feats. Oozes do not have any class skills.</li>
</ul>
<p><strong className="hl">Traits:</strong> An ooze possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li><strong>Mindless:</strong> No Intelligence score, and immunity to all mind-affecting effects (charms, compulsions, phantasms, patterns, and morale effects). An ooze with an Intelligence score loses this trait.</li>
<li><Link to="/misc/blind">Blind</Link> (but have the <Link to="/umr/blindsight">blindsight</Link> special quality), with immunity to gaze attacks, visual effects, illusions, and other attack forms that rely on sight.</li>
<li><Link to="/umr/immunity">Immunity</Link> to poison, sleep effects, paralysis, polymorph, and stunning.</li>
<li>Some oozes have the ability to deal acid damage to objects.</li>
<li>Not subject to critical hits or <Link to="/rule/flanking">flanking</Link>. Does not take additional damage from precision-based attacks, such as <Link to="/ability/sneak_attack">sneak attack</Link>.</li>
<li>Proficient with its natural weapons only.</li>
<li>Proficient with no armor.</li>
<li>Oozes eat and breathe, but do not sleep.</li>
</ul>
</>};
const _outsider = {title: "Outsider", jsx: <><h2 id="type-outsider-type-outsider">Type: Outsider</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 309</Link></p>
<p>An outsider is at least partially composed of the essence (but not necessarily the material) of some plane other than the Material Plane. Some creatures start out as some other type and become outsiders when they attain a higher (or lower) state of spiritual existence.</p>
<p>An outsider has the following features.</p>
<ul>
<li>d10 Hit Dice.</li>
<li>Base attack bonus equal to total Hit Dice (fast progression).</li>
<li>Two <Link to="/misc/good_saving_throws">good saving throws</Link>, usually Reflex and Will.</li>
<li>Skill points equal to 6 + Int modifier (minimum 1) per Hit Die. The following are class skills for outsiders: <Link to="/skill/bluff">Bluff</Link>, <Link to="/skill/craft">Craft</Link>, <Link to="/skill/knowledge_planes">Knowledge (planes)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, and <Link to="/skill/stealth">Stealth</Link>. Due to their varied nature, outsiders also receive 4 additional class skills determined by the creature's theme.</li>
</ul>
<p><strong className="hl">Traits:</strong> An outsider possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Darkvision 60 feet.</li>
<li>Unlike most living creatures, an outsider does not have a dual nature&mdash;its soul and body form one unit. When an outsider is slain, no soul is set loose. Spells that restore souls to their bodies, such as <Link to="/spell/raise_dead">raise dead</Link>, <Link to="/spell/reincarnate">reincarnate</Link>, and <Link to="/spell/resurrection">resurrection</Link>, don't work on an outsider. It takes a different magical effect, such as <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, <Link to="/spell/true_resurrection">true resurrection</Link>, or <Link to="/spell/wish">wish</Link> to restore it to life. An outsider with the <Link to="/subtype/native">native</Link> subtype can be <em>raised, reincarnated,</em> or <em>resurrected</em> just as other living creatures can be.</li>
<li>Proficient with all simple and martial weapons and any weapons mentioned in its entry.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, as well as all lighter types. Outsiders not indicated as wearing armor are not proficient with armor. Outsiders are proficient with shields if they are proficient with any form of armor.</li>
<li>Outsiders breathe, but do not need to eat or sleep (although they can do so if they wish). Native outsiders breathe, eat, and sleep.</li>
</ul>
</>};
const _plant = {title: "Plant", jsx: <><h2 id="type-plant-type-plant">Type: Plant</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 309</Link></p>
<p>This type comprises vegetable creatures. Note that regular plants, such as one finds growing in gardens and fields, lack Intelligence, Wisdom, and Charisma scores; even though plants are alive, they are objects, not creatures.</p>
<p>A plant creature has the following features.</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>Good Fortitude saves.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. Some plant creatures, however, are mindless and gain no skill points or feats. The following are class skills for plants: <Link to="/skill/perception">Perception</Link> and <Link to="/skill/stealth">Stealth</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> A plant creature possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>Low-light vision.</li>
<li><Link to="/umr/immunity">Immunity</Link> to all mind-affecting effects (charms, compulsions, morale effects, patterns, and phantasms).</li>
<li>Immunity to paralysis, poison, polymorph, sleep effects, and stunning.</li>
<li>Proficient with its natural weapons only.</li>
<li>Not proficient with armor.</li>
<li>Plants breathe and eat, but do not sleep.</li>
</ul>
</>};
const _undead = {title: "Undead", jsx: <><h2 id="type-undead-type-undead">Type: Undead</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 309</Link></p>
<p>Undead are once-living creatures animated by spiritual or supernatural forces.</p>
<p>An undead creature has the following features.</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>Good Will Saves.</li>
<li>Skill points equal to 4 + Int modifier (minimum 1) per Hit Die. Many undead, however, are mindless and gain no skill points or feats. The following are class skills for undead: <Link to="/skill/climb">Climb</Link>, <Link to="/skill/disguise">Disguise</Link>, <Link to="/skill/fly">Fly</Link>, <Link to="/skill/intimidate">Intimidate</Link>, <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link>, <Link to="/skill/knowledge_religion">Knowledge (religion)</Link>, <Link to="/skill/perception">Perception</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, <Link to="/skill/spellcraft">Spellcraft</Link>, and <Link to="/skill/stealth">Stealth</Link>.</li>
</ul>
<p><strong className="hl">Traits:</strong> An undead creature possesses the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li>No Constitution score. Undead use their Charisma score in place of their Constitution score when calculating hit points, Fortitude saves, and any special ability that relies on Constitution (such as when calculating a breath weapon's DC).</li>
<li>Darkvision 60 feet.</li>
<li><Link to="/umr/immunity">Immunity</Link> to all mind-affecting effects (charms, compulsions, morale effects, patterns, and phantasms).</li>
<li>Immunity to bleed, death effects, disease, paralysis, poison, sleep effects, and stunning.</li>
<li>Not subject to nonlethal damage, ability drain, or energy drain. Immune to damage to its physical ability scores (Constitution, Dexterity, and Strength), as well as to exhaustion and fatigue effects.</li>
<li>Cannot heal damage on its own if it has no Intelligence score, although it can be healed. Negative energy (such as an <Link to="/spell/inflict_light_wounds">inflict</Link> spell) can heal undead creatures. The <Link to="/umr/fast_healing">fast healing</Link> special quality works regardless of the creature's Intelligence score.</li>
<li>Immunity to any effect that requires a Fortitude save (unless the effect also works on objects or is harmless).</li>
<li>Not at risk of death from massive damage, but is immediately destroyed when reduced to 0 hit points.</li>
<li>Not affected by <Link to="/spell/raise_dead">raise dead</Link> and <Link to="/spell/reincarnate">reincarnate</Link> spells or abilities. <Link to="/spell/resurrection">Resurrection</Link> and <Link to="/spell/true_resurrection">true resurrection</Link> can affect undead creatures. These spells turn undead creatures back into the living creatures they were before becoming undead.</li>
<li>Proficient with its natural weapons, all simple weapons, and any weapons mentioned in its entry.</li>
<li>Proficient with whatever type of armor (light, medium, or heavy) it is described as wearing, as well as all lighter types. Undead not indicated as wearing armor are not proficient with armor. Undead are proficient with shields if they are proficient with any form of armor.</li>
<li>Undead do not breathe, eat, or sleep.</li>
</ul>
</>};
const _vermin = {title: "Vermin", jsx: <><h2 id="type-vermin-type-vermin">Type: Vermin</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 310</Link></p>
<p>This type includes insects, arachnids, other arthropods, worms, and similar invertebrates.</p>
<p>Vermin have the following features.</p>
<ul>
<li>d8 Hit Die.</li>
<li>Base attack bonus equal to 3/4 total Hit Dice (medium progression).</li>
<li>Good Fortitude saves.</li>
<li>Skill points equal to 2 + Int modifier (minimum 1) per Hit Die. Most vermin, however, are mindless and gain no skill points or feats. Vermin have no class skills.</li>
</ul>
<p><strong className="hl">Traits:</strong> Vermin possess the following traits (unless otherwise noted in a creature's entry).</p>
<ul>
<li><strong>Mindless:</strong> No Intelligence score, and immunity to all mind-affecting effects (charms, compulsions, morale effects, patterns, and phantasms). Mindless creatures have no feats or skills. A vermin-like creature with an Intelligence score is usually either an animal or a magical beast, depending on its other abilities.</li>
<li>Darkvision 60 feet.</li>
<li>Proficient with its natural weapons only.</li>
<li>Proficient with no armor.</li>
<li>Vermin breathe, eat, and sleep.</li>
</ul>
</>};
export default {not_found:_not_found,aberration:_aberration,animal:_animal,construct:_construct,dragon:_dragon,fey:_fey,humanoid:_humanoid,magical_beast:_magical_beast,monstrous_humanoid:_monstrous_humanoid,ooze:_ooze,outsider:_outsider,plant:_plant,undead:_undead,vermin:_vermin}