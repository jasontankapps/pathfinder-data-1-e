import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
const _herbalist = {title: "Herbalist", jsx: <><h2 id="arc-alchemist-herbalist-herbalist">Herbalist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 22</Link><br/>Vine leshys who study the physical and spiritual composition of their own bodies have discovered a strange herbal alchemy all their own.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-herbalist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/vine_leshy">Vine Leshy</Link></td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-herbalist-herbalism-su" data-hash-target><div className="box">Herbalism (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alchemy, the alchemist's key ability score</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An herbalist's studies allow him a unique method of creating alchemical discoveries. He can attempt Profession (herbalist) checks in place of Craft (alchemy) checks for all purposes, and he gains a competence bonus equal to <Link to="/misc/half">half</Link> his alchemist level on Profession (herbalist) checks to create alchemical items and to forage for and process herbs. An herbalist uses his <strong className="hl">Wisdom</strong> score instead of his Intelligence score for all alchemist class abilities.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-herbalist-natural-magic" data-hash-target><div className="box">Natural Magic</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Throw Anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An herbalist's study of the leshy spirit grants him access to natural magic that eludes other alchemists. Each time he gains access to a new level of extracts (including 1st level), he can add two spells from that spell level on the <Link to="/main/druid_spell">druid spell list</Link> to his alchemist class spell list; these spells must target a creature or creatures or have a range of "you," and he must still add them to his formula book as normal before he can prepare them.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">As always, the extracts affect the drinker as if she were the target, so offensive touch spells are a nasty trap for the drinker.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-herbalist-seedpods-su" data-hash-target><div className="box">Seedpods (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bombs, poison use, poison resistance, poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An herbalist can produce and throw seedpods as ranged touch attacks, similar to the ranged attacks of other leshys. He can create a number of seedpods each day equal to his alchemist level + his Wisdom modifier and can throw them as a standard action with a range increment of 20 feet. A seedpod deals 1d6 points of bludgeoning damage, plus an additional 1d6 points of damage at 3rd level and every 2 levels thereafter (this additional damage isn't multiplied on a critical hit or from effects like <Link to="/feat/vital_strike">Vital Strike</Link>). Seedpods are considered weapons and can be selected for feats like <Link to="/feat/weapon_focus">Weapon Focus</Link>, and the herbalist can take the <Link to="/feat/extra_bombs">Extra Bombs</Link> feat to gain additional daily uses of his seedpods. His seedpods also gain one of the following additional effects unless the target succeeds at a Fortitude save (DC = 10 + half the herbalist's alchemist level + his Wisdom modifier).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 1st Level</div></div><div className="abEnd"><div className="box">His seedpods can <Link to="/misc/deafen">deafen</Link> their target for 1 round like a <Link to="/monster/leaf_leshy">leaf leshy</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 2nd Level</div></div><div className="abEnd"><div className="box">They can reduce the target's vision to 10 feet for 1 minute (unless the target spends a full-round action to wash the spores from its eyes early) like the spores of a <Link to="/monster/fungus_leshy">fungus leshy</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">They can <Link to="/rule/entangled">entangle</Link> their target for 2d4 rounds (unless the target succeeds at a Strength check or Escape Artist check at the save DC to break the vine early) like the seeds of a <Link to="/monster/gourd_leshy">gourd leshy</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">They can <Link to="/misc/sicken">sicken</Link> their target for 1d4 rounds like the spittle of a <Link to="/monster/flytrap_leshy">flytrap leshy</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">They can <Link to="/misc/blind">blind</Link> their target until the end of their next turn like the water jets of a <Link to="/monster/seaweed_leshy">seaweed leshy</Link>.</div></div></div></div>
</>};
const _homunculist = {title: "Homunculist", jsx: <><h2 id="arc-alchemist-homunculist-homunculist">Homunculist</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 8</Link><br/>One of the grand goals of alchemy is the ability to create new life. A homunculist has made this dream a reality, growing and modifying a familiar in his own laboratory.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-homunculist-diminished-poisoning" data-hash-target><div className="box">Diminished Poisoning</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A homunculist doesn't gain the <em>poison use, poison resistance, poison immunity,</em> or <em>swift poisoning</em> class features.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-homunculist-homunculus-familiar-ex" data-hash-target><div className="box">Homunculus Familiar (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The homunculist has created a living <Link to="/monster/homunculus">homunculus</Link> in the shape of an animal or vermin. It functions in all ways as a <Link to="/ability/familiar">familiar</Link>, treating the homunculist's alchemist level as his effective wizard level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-homunculist-experimentation-ex" data-hash-target><div className="box">Experimentation (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A homunculist is constantly experimenting on his <Link to="/sidekick/familiar">familiar</Link> to give it new and unusual features and abilities. The homunculist can grant his familiar 1 evolution point worth of eidolon <Link to="/ability/evolutions">evolutions</Link> for every 4 alchemist levels he possesses, though he can't select any evolutions that require a particular base form. Each time the homunculist gains a level, he can change his familiar's evolutions. These evolutions stack with those from the <Link to="/feat/evolved_familiar">Evolved Familiar</Link> feat.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The homunculist can select the Evolved Familiar feat as an alchemist discovery if he meets its prerequisites.</div></div></div></div>
</>};
const _horticulturist = {title: "Horticulturist", jsx: <><h2 id="arc-alchemist-horticulturist-horticulturist">Horticulturist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 35</Link>, <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 24</Link><br/>A horticulturist spends his time cultivating plants and plant creatures, allowing him to experiment with strange and wondrous herbal concoctions.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-horticulturist-seed-extract" data-hash-target><div className="box">Seed Extract</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen, 2nd-level discovery</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A horticulturist adds <em>summon nature's ally I-VI</em> as 1st- through 6th-level extracts, respectively, to his class extract list. For example, he automatically adds <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> to his formula book at 1st level and adds the next higher-level spell to his formula book each time he gains the ability to use extracts of that level. The horticulturist uses these special extracts to plant a seed that grows into a creature, bypassing the restriction for single target or personal effects. Using these extracts takes 1 round (as the spell's normal casting time), and the creature summoned must be placed in a space adjacent to the horticulturist. The horticulturist can use these extracts to summon only animals and plants on the appropriate summon nature's ally list.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Creatures the horticulturist summons with these extracts become creatures with the plant type (gaining low-light vision and immunity to mind-affecting, paralysis, poison, polymorph, sleep, and stunning effects) rather than their normal type, but their attack bonuses, Hit Dice, saving throws, and skills don't change. A horticulturist can't choose mutagen discoveries.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-horticulturist-herbal-bombs-su" data-hash-target><div className="box">Herbal Bombs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A horticulturist's bombs lack the power of a traditional alchemist's but can be fine-tuned in ways normal alchemist explosives cannot. The horticulturist's bombs deal 1d4 points of damage (instead of 1d6), plus 1d4 points of damage for every 2 alchemist levels beyond 1st. When the horticulturist creates a bomb, he can formulate it to affect plants and other creatures normally, affect only plant creatures, or affect only creatures not of the plant type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-horticulturist-plant-voice-ex-su" data-hash-target><div className="box">Plant Voice (Ex, Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance, poison use, poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A horticulturist gains a +2 bonus on Knowledge (nature) and Survival checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">He can speak to plants as a constant <Link to="/spell/speak_with_plants">speak with plants</Link> spell (this ability is supernatural).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-horticulturist-plant-familiar-ex" data-hash-target><div className="box">Plant Familiar (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The discovery gained at 4th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A horticulturist creates a Diminutive or Tiny alchemical plant creature that vaguely resembles a kind of animal suitable for a familiar (such as a cat) and acts as his <Link to="/ability/familiar">familiar</Link>, granting the horticulturist a skill bonus, the <Link to="/feat/alertness">Alertness</Link> feat, and so on. The plant familiar has all the abilities of the animal it resembles (for example, a bat-like plant familiar can fly) but is treated as a creature of the plant type and has familiar abilities based on the horticulturist's alchemist level (though some familiar abilities may be useless to the horticulturist).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An alchemist's extracts and mutagens are considered spells for the purposes of familiar abilities like <em>share spells</em> or <em>deliver touch spells.</em> If a plant familiar is lost or dies, it can be replaced 1 week later through a specialized procedure that costs 200 gp per alchemist level the horticulturist has. The ritual takes 8 hours to complete.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-horticulturist-fury-of-nature-sp" data-hash-target><div className="box">Fury of Nature (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A horticulturist's connection with nature allows him to bring down nature's fury on his opponents. He can cast one of the following spells, chosen at the time of casting, once per day as a spell-like ability: <Link to="/spell/call_lightning_storm">call lightning storm</Link>, <Link to="/spell/eagle_aerie">eagle aerie</Link>, or <Link to="/spell/liveoak">liveoak</Link>.</div></div></div></div>
</>};
const _ice_chemist = {title: "Ice Chemist", jsx: <><h2 id="arc-alchemist-ice_chemist-ice-chemist">Ice Chemist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 35</Link><br/>Reclusive alchemists who dwell in the highest mountains or on the frozen tundra devote their skills to mastering the cold.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ice_chemist-icy-bombs-su" data-hash-target><div className="box">Icy Bombs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An ice chemist's bombs deal cold damage instead of fire damage. In place of an alchemist discovery, she can learn to create bombs that deal fire damage like normal alchemist bombs do, though she can't apply discoveries that modify bombs to such fire bombs that she creates. An ice alchemist's icy bombs can still be poisonous or create thick vapors similar to smoke, but she cannot apply the <Link to="/discovery/explosive_bomb">explosive</Link> or <Link to="/discovery/inferno_bomb">inferno bomb</Link> discoveries to them.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ice_chemist-cold-sweat-su" data-hash-target><div className="box">Cold Sweat (Su)</div><div className="flavor">An ice chemist channels her affinity for cold energy into her personal space, keeping herself and her gear cool.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance, poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">She gains cold <Link to="/umr/resistance">resistance</Link> equal to her alchemist level and can survive comfortably in temperatures as low as -50&deg; Fahrenheit.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ice_chemist-frost-bomb-su" data-hash-target><div className="box">Frost Bomb (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">2nd-level discovery</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An ice chemist gains the <Link to="/discovery/frost_bomb">frost bomb</Link> discovery.</div></div></div></div>
</>};
const _inspired_chemist = {title: "Inspired Chemist", jsx: <><h2 id="arc-alchemist-inspired_chemist-inspired-chemist">Inspired Chemist</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 75</Link><br/>Akin to a mindchemist, inspired chemists use a type of cognatogen that instead of increasing their mental ability scores grants them inspiration like an investigator. This inspiration also grants an inspired chemist amazing powers to avoid danger, but takes a toll on both physical power and health.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-inspired_chemist-inspiring-cognatogen" data-hash-target><div className="box">Inspiring Cognatogen</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An inspired chemist learns how to create an inspiring cognatogen, as the <Link to="/discovery/inspiring_cognatogen">inspiring cognatogen</Link> discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An inspired chemist can learn to create mutagens if he selects the <Link to="/discovery/mutagen">mutagen</Link> discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-inspired_chemist-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An inspired chemist can select <Link to="/feat/skill_focus">Skill Focus</Link> (Disable Device, Disguise, Heal, any Knowledge skill, Sense Motive, Spellcraft, or Use Magic Device) in place of a discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-inspired_chemist-bonus-investigator-talents" data-hash-target><div className="box">Bonus Investigator Talents</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An inspired chemist can select any two <Link to="/ability/investigator_talents">investigator talents</Link> in place of a discovery, but can only use these talents while under the effect of an inspiring cognatogen.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-inspired_chemist-languages" data-hash-target><div className="box">Languages</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An inspired chemist can learn three <Link to="/misc/languages">languages</Link> in place of a discovery.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the inspired chemist archetype: <Link to="/discovery/grand_inspiring_cognatogen">grand inspiring cognatogen</Link>, <Link to="/discovery/greater_inspiring_cognatogen">greater inspiring cognatogen</Link>, and <Link to="/discovery/inspired_bomb">inspired bomb</Link>.</p>
</>};
const _internal_alchemist = {title: "Internal Alchemist", jsx: <><h2 id="arc-alchemist-internal_alchemist-internal-alchemist">Internal Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 18</Link><br/>An internal alchemist studies medicine, diet, and the living body to purify the self in the hope of gaining immortality by means of alchemical concoctions and controlling vital energy. Internal alchemists develop unusual physical abilities from heightened knowledge of how their bodies work. An internal alchemist has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-internal_alchemist-breath-mastery" data-hash-target><div className="box">Breath Mastery</div><div className="flavor">The internal alchemist can control his breath and the flow of vital energy within his body.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Throw Anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Without preparation, he can <Link to="/misc/hold_his_breath">hold his breath</Link> for a number of minutes equal to his Constitution score (after this, he must begin making Constitution checks or risk suffocation).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">By spending a <strong className="hl">full-round action</strong> preparing himself, he can increase this duration to 1 hour per point of Constitution.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The alchemist can survive twice as long as normal without food or water before he starts to take penalties.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">He can put himself into a state of suspended animation as a <strong className="hl">move action</strong>, and is then unconscious and appears completely dead; he awakens at a preset time or in response to a condition set by him when he enters this state.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-internal_alchemist-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An internal alchemist can select <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/extra_ki">Extra Ki</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_critical">Improved Critical</Link> (unarmed strike), <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/stunning_fist">Stunning Fist</Link>, or <Link to="/feat/weapon_focus">Weapon Focus</Link> (unarmed strike) in place of an alchemical discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-internal_alchemist-disease-resistance" data-hash-target><div className="box">Disease Resistance</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An internal alchemist gains a bonus on all saving throws against disease equal to his alchemist class bonus against poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When he gains the <em>poison immunity</em> alchemist class ability, he becomes immune to disease as well.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-internal_alchemist-uncanny-dodge" data-hash-target><div className="box">Uncanny Dodge</div><div className="flavor">An internal alchemist can react to danger before his senses would normally allow him to do so.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">He cannot be caught <Link to="/rule/flat_footed">flat-footed</Link>, nor does he lose his Dexterity bonus to AC if the attacker is invisible. However, he still loses his Dexterity bonus to AC if he is immobilized, or if an opponent successfully uses the feint action (see <Link to="/skill/bluff">Bluff</Link>) against him.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the internal alchemist already has <em>uncanny dodge</em> from a different class, he automatically gains <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> (as a rogue) instead.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the internal alchemist archetype: <Link to="/discovery/cognatogen">cognatogen</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/grand_cognatogen">grand cognatogen</Link>, <Link to="/discovery/greater_cognatogen">greater cognatogen</Link>, <Link to="/discovery/lingering_spirit">lingering spirit</Link>, <Link to="/discovery/mummification">mummification</Link>, and <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>.</p>
</>};
const _interrogator = {title: "Interrogator", jsx: <><h2 id="arc-alchemist-interrogator-interrogator">Interrogator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 18</Link><br/>An interrogator extracts vital information from reluctant individuals using alchemical and traditional methods.</p>
<Ability icon={["skills"]} id="arc-alchemist-interrogator-undefined">
<Pair id="arc-alchemist-interrogator-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/sense_motive">Sense Motive</Link> (WIS)</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-palm"><IonIcon icon="/icons/magic-palm.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-injections-su" data-hash-target><div className="box">Injections (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bomb</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">An interrogator uses his skill with alchemy to create injections. Each day, an interrogator can create a number of injections equal to his alchemist level + his Intelligence modifier. It takes 1 hour to create the injections. An injection is inert until the interrogator attempts to use it.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">Using an injection is a standard action that requires a melee touch attack. If the attack hits, the target of an injection takes a -2 penalty on its Will saving throws for a number of minutes equal to half the interrogator's class level (minimum 1). If the interrogator is also using a <em>serum</em> with this injection, the penalty on Will saves applies to any save against the <em>serum.</em> If the melee touch attack fails, the injection isn't delivered but can still be used again - once activated, it remains potent for 1 day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An injection that hasn't been administered becomes inert if it leaves the interrogator's possession, reactivating as soon as it returns to his possession. The penalties from multiple injections don't stack, nor do the penalties from injections stack with penalties from a <Link to="/class/mesmerist">mesmerist's</Link> stare or a witch's <Link to="/hex/evil_eye">evil eye</Link> hex. Injections are mind-affecting poison effects.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-serums-su" data-hash-target><div className="box">Serums (Su)</div><div className="flavor">An interrogator augments his ability to influence others through supplemental serums.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen, persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">An interrogator prepares his serums at the same time as his injections and he can apply them to any injection as a <strong className="hl">swift action</strong> before he makes the attack roll for the injection.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An interrogator knows one serum at 1st level and can learn another serum in place of a discovery. A creature can be under the effect of only a single serum at a time - with the exception of <em>memory modification</em> serum - with any further serums on the same creature replacing the old serum.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The save DCs of serums are equal to 10 + <Link to="/misc/half">half</Link> the interrogator's alchemist level + his Intelligence modifier. Unless otherwise noted, a creature that succeeds on its saving throw against a serum is immune to that serum's effects for 24 hours. An interrogator can never gain any sort of mutagen or cognatogen, even from a discovery or another class.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-charming" data-hash-target><div className="box">Charming</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The injected creature must succeed at a Will save or treat the interrogator favorably, as if affected by <Link to="/spell/charm_person">charm person</Link> with a caster level equal to the interrogator's alchemist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">This serum acts as <Link to="/spell/charm_monster">charm monster</Link>.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-compliance" data-hash-target><div className="box">Compliance</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">8th-level interrogator</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">On a failed Will save, the subject of this injection is affected by a <Link to="/spell/suggestion">suggestion</Link> with a caster level equal to the interrogator's alchemist level.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-confusion" data-hash-target><div className="box">Confusion</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">6th-level interrogator</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">On a failed Will save, the injected creature is <Link to="/misc/confused">confused</Link> for 1 round per alchemist level the interrogator has.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-hypnosis" data-hash-target><div className="box">Hypnosis</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The injected creature must succeed at a Will save or become <Link to="/misc/fascinated">fascinated</Link> for 1 round per alchemist level the interrogator has.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-memory-modification" data-hash-target><div className="box">Memory Modification</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">12th-level interrogator</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">On a failed Will save, the target of this serum is affected by <Link to="/spell/modify_memory">modify memory</Link> at a caster level equal to the interrogator's alchemist level.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-paralytic" data-hash-target><div className="box">Paralytic</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">8th-level interrogator</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">On a failed Will save, the injected creature is affected by <Link to="/spell/hold_person">hold person</Link> with a caster level equal to the interrogator's alchemist level.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-interrogator-truth" data-hash-target><div className="box">Truth</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A creature injected with a truth serum must succeed at a Will save or be compelled to answer the interrogator's questions truthfully. The interrogator can ask one question per 2 alchemist levels (minimum 1). Answers might be brief, cryptic, or repetitive, especially if the injected creature is unfriendly, but they aren't false. If a creature has been subjected to a truth serum within the past week, whether it succeeded at or failed its save, any new serum fails.</div></div></div></div>
</>};
const _mad_scientist = {title: "Mad Scientist", jsx: <><h2 id="arc-alchemist-mad_scientist-mad-scientist">Mad Scientist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 45</Link><br/>The mad scientist's colleagues laughed at her insights, mocked her theories, and hounded her from the halls of academia, simply because they were too weak and frightened to understand her work. They thought she was finished. They were wrong.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mad_scientist-mad-genius-su" data-hash-target><div className="box">Mad Genius (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">2nd-level discovery</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A mad scientist can deal 1d3 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> to herself (or 1d6 points of sanity damage if employing the <Link to="/rule/sanity">sanity rules</Link>) to create a genius extract as one of her daily 1st-, 2nd-, 3rd-, 4th-, or 5th-level extracts. This otherwise takes the same amount of time and effort as creating a normal extract of its level, but instead of her choosing a formula she knows for it to grant, a genius extract has an unpredictable result. When the alchemist (or an ally, if she has the <Link to="/discovery/infusion">infusion</Link> discovery) drinks the extract, it produces a random effect from the list of alchemist formulae of 1 spell level higher than the extract's spell level. For instance, if she creates a genius extract using a 2nd-level extract, it would produce the effect of a random 3rd-level alchemist formula.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">There is no way to predict which effect a genius extract will produce before drinking it. A genius extract's minimum caster level is equal to the minimum caster level of the extract used, not the effect produced. So, for instance, a genius extract that produced a <Link to="/spell/foxs_cunning">fox's cunning</Link> effect would have a minimum caster level of 1 (for the 1st-level extract used) rather than 4 (for the 2nd-level effect).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">There are 111 potential 2nd-level extracts, 89 potential 3rd-level extracts, 63 potential 4th-level extracts, 39 potential 5th-level extracts, and 33 potential 6th-level extracts.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mad_scientist-mad-mutagen-su" data-hash-target><div className="box">Mad Mutagen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">4th-level discovery</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A mad scientist can brew a mad mutagen in place of a normal mutagen. If she does so, she need not make any decisions about the mutagen (including whether to make it a <Link to="/discovery/cognatogen">cognatogen</Link> or another variant mutagen if she has the appropriate discoveries) when she brews it. When the mad scientist drinks her mad mutagen, she makes those decisions on the fly, but she also takes 1d4 points of Wisdom damage (or 1d8 points of sanity damage if using the sanity rules). If anyone else, even another alchemist, drinks a mad mutagen, that person must succeed at a Will save (with the same DC as for the Fortitude save against nausea) or she becomes <Link to="/misc/confused">confused</Link> for 1 hour.</div></div></div></div>
</>};
const _metamorph = {title: "Metamorph", jsx: <><h2 id="arc-alchemist-metamorph-metamorph">Metamorph</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 19</Link><br/>Metamorphs eschew traditional alchemy, focusing on internal chemistry and the transfiguration of living forms.</p>
<Ability icon={["skills"]} id="arc-alchemist-metamorph-undefined">
<Pair id="arc-alchemist-metamorph-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/disguise">Disguise</Link> (CHA)</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-metamorph-shapechanger-su" data-hash-target><div className="box">Shapechanger (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Alchemy, bombs, extracts, mutagen, Throw Anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">At 1st level, a metamorph gains the ability to transform herself into another form. This ability functions like <Link to="/spell/alter_self">alter self</Link>, except as noted here. The effect lasts for 1 hour per metamorph's alchemist level, or until she changes back. Changing form (to another form or back) is a standard action that doesn't provoke attacks of opportunity. The metamorph is <Link to="/misc/fatigued">fatigued</Link> for 1 round each time she changes shape.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">No</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">This ability can also function as <Link to="/spell/monstrous_physique_i">monstrous physique I</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">This ability can also function as <Link to="/spell/monstrous_physique_ii">monstrous physique II</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">This ability can also function as <Link to="/spell/monstrous_physique_iii">monstrous physique III</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">This ability can also function as <Link to="/spell/monstrous_physique_iv">monstrous physique IV</Link> or <Link to="/spell/giant_form_i">giant form I</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">This ability can also function as <Link to="/spell/giant_form_ii">giant form II</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">A metamorph can use <em>shapechanger</em> as a <strong className="hl">free action</strong> once per round, either before or after all her other actions, with no daily limit.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A metamorph can use this ability once per day at 1st level, and an additional time per day at 4th level, and every 2 alchemist levels thereafter, for a total of nine times at 18th level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-metamorph-mutagen-ex" data-hash-target><div className="box">Mutagen (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A metamorph gains <em>mutagen</em> as a normal alchemist. She can take <em>mutagen</em> and <em>cognatogen</em> discoveries despite not possessing the alchemy class feature that normally grants mutagen.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-metamorph-adaptive-physiology-ex" data-hash-target><div className="box">Adaptive Physiology (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift alchemy, swift poisoning, instant alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A metamorph gains a 25% chance to negate critical hits and <Link to="/misc/precision_damage">precision damage</Link>, similar to the <Link to="/discovery/preserve_organs">preserve organs</Link> discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">This chance becomes 50%.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">This chance increases to 75%.</div></div></div></div>
</>};
const _mindchemist = {title: "Mindchemist", jsx: <><h2 id="arc-alchemist-mindchemist-mindchemist">Mindchemist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 19</Link><br/>While most alchemists use mutagens to boost their physical ability at the cost of mental ability, some use alchemy for the opposite purpose - to boost the power of the mind and memory. A mindchemist can reach incredible levels of mental acuity, but suffers lingering debilitating effects to his physique. A mindchemist has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mindchemist-cognatogen" data-hash-target><div className="box">Cognatogen</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A mindchemist learns how to create a cognatogen, as per the <Link to="/discovery/cognatogen">cognatogen</Link> discovery. (A mindchemist cannot create mutagens unless he selects <Link to="/discovery/mutagen">mutagen</Link> as a discovery.)</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mindchemist-perfect-recall" data-hash-target><div className="box">Perfect Recall</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When making a Knowledge check, he may add his Intelligence bonus on the check a second time. Thus, a mindchemist with 5 ranks in Knowledge (history) and a +2 Intelligence bonus has a total skill bonus of +9 (5 + 2 + 2) using this ability. The mindchemist can also use this ability when making an Intelligence check to remember something.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mindchemist-bonus-feats" data-hash-target><div className="box">Bonus Feats</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A mindchemist may select <Link to="/feat/skill_focus">Skill Focus</Link> (Disable Device, Disguise, Heal, any Knowledge skill, Sense Motive, or Spellcraft) in place of a discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mindchemist-languages" data-hash-target><div className="box">Languages</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A mindchemist may learn three <Link to="/misc/languages">languages</Link> in place of a discovery.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the mindchemist archetype: <Link to="/discovery/grand_cognatogen">grand cognatogen</Link>, <Link to="/discovery/greater_cognatogen">greater cognatogen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>.</p>
</>};
const _mixologist = {title: "Mixologist", jsx: <><h2 id="arc-alchemist-mixologist-mixologist">Mixologist</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_taverns">Inner Sea Taverns pg. 57</Link><br/>Certain alchemists focus on mastering the chemical reactions between alcohol and the physical body. Though the powerful potions they brew can have drawbacks, they are at least pleasurable.</p>
<p><strong className="hl">Note:</strong> This archetype makes heavy use of the alternate <Link to="/rule/drunkenness">drunkenness</Link> rules.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mixologist-alcoholic-alchemy-su" data-hash-target><div className="box">Alcoholic Alchemy (Su)</div><div className="flavor">A mixologist can infuse potions and extracts he creates with alcohol, increasing their potency.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alchemy, brew potion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When a mixologist brews a potion, he can spend an additional 10 gp in raw materials to increase his caster level by 1 for the purpose of the potion's effects, but the potion counts as a <strong>strong alcoholic drink.</strong> When a mixologist creates his extracts, he can spend 1 extra minute doing so to increase his caster level by 1 for the purpose of that extract's effects, but the extract counts as a <strong>strong alcoholic drink.</strong> A mixologist can prepare one alcoholic extract for each level of extracts he can prepare.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A mixologist can't ever gain a mutagen or discoveries that alter mutagens.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mixologist-alcoholic-bombs-su" data-hash-target><div className="box">Alcoholic Bombs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">The discovery gained at 2nd level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When the mixologist creates a bomb, he can cause the detonation to produce intoxicating fumes. A creature that takes a direct hit from an alcoholic bomb becomes <strong className="hl">tipsy</strong> if it fails a Fortitude saving throw. If the creature is already tipsy, it becomes <strong className="hl">drunk</strong> instead. If the creature is already drunk, it becomes <strong className="hl">soused</strong> instead. A soused creature that fails its Fortitude saving throw passes out for 1d3 hours and wakes up with a <strong className="hl">hangover</strong>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This ability counts as a discovery that modifies bombs (Primary Bomb Discovery), so it doesn't stack with other discoveries that modify bombs.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mixologist-alcoholic-resistance-ex" data-hash-target><div className="box">Alcoholic Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Poison resistance</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A mixologist's bonus on saving throws against poison also applies on saving throws to become less drunk and to avoid passing out. This doesn't allow a mixologist to become immune to alcohol.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mixologist-mixologist-master-su" data-hash-target><div className="box">Mixologist Master (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A mixologist can have up to two alcoholic extracts for each level of extracts he can prepare as long as he can prepare at least two extracts of that level.</div></div></div></div>
</>};
const _mnemostiller = {title: "Mnemostiller", jsx: <><h2 id="arc-alchemist-mnemostiller-mnemostiller">Mnemostiller</h2>
<p><strong>Sources</strong> <Link to="/source/distant_realms">Distant Realms pg. 52</Link><br/>Mnemostillers extract memories, storing them as a thick vapor called mnemos. They can return memories as easily as administering a potion, and experienced mnemostillers create a variety of effects through the careful administration of past traumas or victories.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-mental-ambix" data-hash-target><div className="box">Mental Ambix</div><div className="flavor">A mnemostiller's alchemy relies on force of personality, using his own mind as an alchemy lab to draw and purify the mnemos collected from others.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Throw anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A mnemostiller uses his Charisma score in place of his Intelligence score for the purpose of extracts and bonus extracts. A mnemostiller still uses his Intelligence score to learn new formulae.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The mnemostiller can cast <Link to="/spell/detect_thoughts">detect thoughts</Link> as a spell-like ability a number of times per day equal to his Charisma modifier (minimum 1).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-rasugen-su" data-hash-target><div className="box">Rasugen (Su)</div><div className="flavor">A mnemostiller learns to brew a unique type of mutagen, called a rasugen, that suppresses his mind to enter a state of sublime purity. In this state, a mnemostiller becomes incredibly resilient, but cannot perform complex skills.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once imbibed, a rasugen grants a +2 alchemical bonus on all saving throws and 2 <Link to="/rule/temporary_hit_points">temporary hit points</Link> per alchemist level for 10 minutes per alchemist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">In addition, while the rasugen is in effect, a mnemostiller takes a -2 penalty to his Intelligence score and can't attempt checks using Appraise, Craft, Disable Device, Heal, Knowledge (any), Profession, Sleight of Hand, or Spellcraft. This acts in all other ways like a mutagen. A mnemostiller can never gain the <em>mutagen, cognatogen,</em> or <em>inspiring cognatogen</em> ability, even from a discovery or another class.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-anguish-bomb-su" data-hash-target><div className="box">Anguish Bomb (Su)</div><div className="flavor">A mnemostiller crafts his bombs from mnemos of pain and discomfort, inflicting psychic damage.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An anguish bomb is identical to a bomb except that it deals nonlethal damage, it deals no damage to inanimate objects and creatures immune to mental effects, and creatures caught in the anguish bomb's splash can attempt a Will save for half damage. A mnemostiller uses his Charisma score in place of his Intelligence score to determine the bonus damage of his anguish bomb and the save DC of the anguish bomb's splash damage. He still uses his Intelligence score to determine his number of bombs per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the mnemostiller has taken any hit point damage in the past 24 hours, his anguish bombs inflict 1 additional point of nonlethal damage for every 2 alchemist levels he has.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-brewed-memories" data-hash-target><div className="box">Brewed Memories</div><div className="flavor">A mnemostiller can create several unique extracts from the mnemos he pulls from the minds of others.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">He adds <Link to="/spell/mindlink">mindlink</Link>, <Link to="/spell/placebo_effect">placebo effect</Link>, and <Link to="/spell/thought_echo">thought echo</Link> to his formula book as 1st-level extracts.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">He adds <Link to="/spell/aura_alteration">aura alteration</Link>, <Link to="/spell/detect_mindscape">detect mindscape</Link>, and <Link to="/spell/mindscape_door">mindscape door</Link> to his formula book as 2nd-level extracts.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">He adds <Link to="/spell/mindwipe">mindwipe</Link> and <Link to="/spell/thoughtsense">thoughtsense</Link> to his formula book as 3rd-level extracts; the range for a <em>mindwipe</em> extract becomes creature touched, and it can be applied only to a helpless or willing creature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-natural-empath-ex" data-hash-target><div className="box">Natural Empath (Ex)</div><div className="flavor">A mnemostiller's studies naturally focus on others.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">He gains <Link to="/discovery/infusion">infusion</Link> as a bonus discovery at 2nd level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-mnemostiller-mind-delver-su" data-hash-target><div className="box">Mind-Delver (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A mnemostiller can use <Link to="/spell/mind_probe">mind probe</Link> as a spell-like ability a number of times per day equal to his Charisma modifier (minimum 1).</div></div></div></div>
<h3 id="arc-alchemist-mnemostiller-mnemostil">Mnemostil</h3>
<p>First developed to help heal souls who had experienced undeath for a time, the art of mnemostil involves a practitioner carefully extracting or returning memories as an oily vapor - mnemos - which allows tortured souls to confront their past horrors one at a time while finding closure. In a city largely dedicated to waiting out eternity and cultivating absent passion, however, there are abundant souls eager to feel anything, good or bad. Black-market mnemostillers pay handsomely to extract memories from remarkable souls, even traveling to other planes to build up their stock before returning to Spire's Edge to sell their wares. While there is some crossover with information brokers, mnemostillers typically sell experiences and emotions rather than secrets. Petitioners searching for purpose buy what memories they can to try and shape themselves toward one Outer Plane destination or another, often trading in their genuine memories as payment, until little of the original individual remains. Some criminal syndicates target visiting souls and outsiders to extract their memories by force.</p>
<p>Mnemostil has also created a unique faith in Spire's Edge: amnesia cults. Many petitioners succumb to the expectation that they grow - that who they were in life is somehow not enough - and so render themselves into temporary or permanent blank slates to dwell in inert bliss. Others cannot reconcile their own actions and so wipe themselves clean to live in ignorance.</p>
<p>Pruning the development of the soul is anathema to the purpose of Spire's Edge, and the city's <Link to="/family/psychopomp">psychopomps</Link> aggressively hunt both mnemostillers and amnesia cultists, with punishment for the crime invariably being exile into the Astral Plane.</p>
</>};
const _oenopion_researcher = {title: "Oenopion Researcher", jsx: <><h2 id="arc-alchemist-oenopion_researcher-oenopion-researcher">Oenopion Researcher</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 37</Link><br/>Nex is known for its advanced magical lore, and the alchemists of Oenopion are incredibly skilled at making potions, elixirs, and other materials crucial to the country's economy and its monster-creating fleshforges. A Oenopion researcher has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-oenopion_researcher-experimental-mutagen-su" data-hash-target><div className="box">Experimental Mutagen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An Oenopion researcher learns how to create an experimental mutagen that benefits others, though not as well as his normal mutagen. The experimental mutagen works just like a standard mutagen, except the natural armor bonus and the alchemical bonus to the ability score are half normal (+1 natural armor bonus and +2 to one ability score). The experimental mutagen has no risk of nauseating a creature who drinks it. The researcher decides when he creates the mutagen if it is a standard mutagen (which gives no benefit if another creature drinks it) or an experimental mutagen (which does); there is no difference in the cost, time to create, or any other aspect of the mutagen.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the researcher has discoveries or other abilities that alter or increase the benefits of the mutagen, these apply to the experimental mutagen (though the drinker only gets <Link to="/misc/half">half</Link> the numerical bonus of the mutagen).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-oenopion_researcher-acid-resistance-ex" data-hash-target><div className="box">Acid Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">An Oenopion researcher gains acid resistance 5.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the Oenopion researcher archetype: <Link to="/discovery/acid_bomb">acid bomb</Link>, <Link to="/discovery/bottled_ooze">bottled ooze</Link>, <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>, <Link to="/discovery/infusion">infusion</Link>, <Link to="/discovery/sunlight_bomb">sunlight bomb</Link>.</p>
</>};
const _oozemaster = {title: "Oozemaster", jsx: <><h2 id="arc-alchemist-oozemaster-oozemaster">Oozemaster</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 17</Link><br/>The oozemaster is a specialized alchemist who fights and ensnares oozes. An oozemaster carefully studies the characteristics of the oozes he hunts to help him create new and more effective mutagens and bombs.</p>
<Ability icon={["skills"]} id="arc-alchemist-oozemaster-undefined">
<Pair id="arc-alchemist-oozemaster-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-oozemaster-ooze-bomb-su" data-hash-target><div className="box">Ooze Bomb (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Brew Potion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">An oozemaster's bombs deal acid damage instead of fire damage, and they deal damage only on a direct hit; they do not splash. A creature damaged by an ooze bomb takes additional acid damage equal to the oozemaster's Intelligence modifier at the start of the oozemaster's next turn. A creature can take this delayed damage only once per round; additional hits extend the duration of the ongoing damage by 1 round each.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">An oozemaster cannot select discoveries that change the type of damage dealt by his bombs, nor those that affect the bomb's splash radius. An oozemaster can still select <Link to="/feat/brew_potion">Brew Potion</Link> without meeting the feat's prerequisites, but he doesn't gain it as a bonus feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-oozemaster-ooze-resistance" data-hash-target><div className="box">Ooze Resistance</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance, poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">He gains a +2 bonus on saving throws against the extraordinary and supernatural abilities of oozes.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 11th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +5.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 14th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 17th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +7.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +8.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the oozemaster archetype: <Link to="/discovery/bottled_ooze">bottled ooze</Link>, <Link to="/discovery/ooze_blight">ooze blight</Link>, and <Link to="/discovery/splitting_mutagen">splitting mutagen</Link>.</p>
</>};
const _perfumer = {title: "Perfumer", jsx: <><h2 id="arc-alchemist-perfumer-perfumer">Perfumer</h2>
<p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 17</Link><br/>While most alchemists focus on the flash of loud explosions, full-bodied potions, and dramatically transformative mutagens, others prefer subtlety and elegance. A perfumer alchemist refines extracts to their most pure and rarefied forms to spread on the wind, and would rather share a head-turning aroma at a social than drink a bone-twisting mutagen before a brawl.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-perfumer-atomized-extracts-su" data-hash-target><div className="box">Atomized Extracts (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Brew potion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Extracts</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A perfumer's extracts are stored in atomizers, rather than bottles or vials, allowing him to spray them at himself or an adjacent ally. The target is considered the imbiber, as if she had drunk an extract prepared with the <Link to="/discovery/infusion">infusion</Link> discovery. As the contents of an atomizer are inhaled, the target must be able to breathe. Atomized extracts are considered extracts for purposes of other abilities, and become inert when not in the alchemist's possession.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-perfumer-effervescent-bombs-su" data-hash-target><div className="box">Effervescent Bombs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bomb</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Rather than deal direct damage, a perfumer's bombs create an effervescent puddle in a 5-foot radius for a number of rounds equal to the alchemist's intelligence bonus (minimum 1). Each creature within this area takes 1d4 points of fire damage immediately and again each round it remains within or enters the puddle. A creature caught in the puddle when it is first created can attempt a Reflex save (DC = 10 + <Link to="/misc/half">half</Link> the perfumer's level + the perfumer's Intelligence modifier) for half damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The effervescent bombs' damage increases by 1d4 at 3rd level and every odd level thereafter. Effervescent bombs otherwise functions as bombs, and discoveries that apply to bombs apply to effervescent bombs.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-perfumer-pheromones-su" data-hash-target><div className="box">Pheromones (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A perfumer can spend 1 hour to distill a special mixture of exotic pheromones and alchemical reagents and store it in an atomizer. The mixture remains potent until used or until the perfumer distills another pheromone mixture, at which point the first becomes inert and the duration of its effects immediately end.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">Spraying this mixture on a willing creature grants the target a +4 alchemical bonus to Charisma and a -2 penalty to Constitution for 10 minutes per alchemist level. Additionally, the target creature gains a +2 alchemical bonus on Diplomacy and Bluff checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A perfumer can never gain the <em>mutagen, cognatogen,</em> or <em>inspired cognatogen</em> ability, even from a discovery or another class.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-perfumer-persistent-pheromones" data-hash-target><div className="box">Persistent Pheromones</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The alchemist gains the ability to distill extremely potent pheromones. His pheromone atomizers can be sprayed on up to four different targets before becoming fully used. This allows a perfumer to affect multiple targets with a single atomizer.</div></div></div></div>
</>};
const _plague_bringer = {title: "Plague Bringer", jsx: <><h2 id="arc-alchemist-plague_bringer-plague-bringer">Plague Bringer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 153</Link><br/>The plague bringer sees disease as the ultimate weapon, and has worked tirelessly to master new diseases and disease-delivery systems. A plague bringer feels no more remorse at unleashing his armaments on his enemies than an archer does when firing an arrow in the heat of battle. Disease is a tool, and the plague bringer is its master. A plague bringer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-plague_bringer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/ratfolk">Ratfolk</Link></td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-plague_bringer-plague-vial-su" data-hash-target><div className="box">Plague Vial (Su)</div><div className="flavor">A plague bringer can create a plague vial, an alchemically grown and concentrated disease sample.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">It takes 1 hour to prepare a plague vial, and once prepared, the vial remains potent until used. A plague bringer can only maintain 1 plague vial at a time - if he prepares a second vial, any existing plague vial becomes inert. A plague vial that is not in a plague bringer's possession becomes inert until a plague bringer picks it up again.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A plague bringer can drink a plague vial. Anyone other than a plague bringer (including another alchemist) who drinks a plague vial must make a saving throw against the vial's DC or become <Link to="/misc/nauseated">nauseated</Link> for 1 hour. Upon being imbibed, the plague vial infects the plague bringer's blood, sweat, tears, and other bodily fluids for 10 minutes per class level. Any creature that harms him with melee attacks (except with reach weapons) must make a Fortitude save (DC 10 + <Link to="/misc/half">half</Link> the plague bringer's level + the plague bringer's Intelligence modifier) or become <Link to="/misc/sickened">sickened</Link> for 1 round per plague bringer level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">As a <strong className="hl">standard action</strong>, the plague bringer can infect a weapon with this sickness (typically by licking it or wiping his blood or pus on it). The disease on the weapon works like a poisoned weapon, except the source is a disease instead of a poison (so a dwarf's resistance to poison does not apply).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The plague bringer is immune to the effect of his own plague vial, but not that of another's plague vial. The effects of multiple plague vials do not stack. Unless he learns how to brew a mutagen by taking the <Link to="/discovery/mutagen">mutagen</Link> discovery, he can never benefit from a mutagen and reacts to it as if he were a non-alchemist. At any particular time, a plague bringer can only be under the effect of either a plague vial or a mutagen (not both); drinking another immediately ends the effects of any ongoing plague vial or mutagen. All limitations to mutagens apply to plague vials as if they were the same substance. The <Link to="/discovery/infuse_mutagen">infuse mutagen</Link> discovery and <em>persistent mutagen</em> class ability apply to plague vials. The <Link to="/discovery/sticky_poison">sticky poison</Link> discovery applies to a weapon infected with a plague vial. The plague vial is a disease effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-plague_bringer-disease-resistance-ex" data-hash-target><div className="box">Disease Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance, poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A plague bringer gains a +2 bonus on all saving throws against disease.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">This bonus increases to +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">This bonus increases to +6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">A plague bringer becomes completely immune to disease (including magical diseases).</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the plague bringer archetype: <Link to="/discovery/explosive_bomb">explosive bomb</Link>, <Link to="/discovery/precise_bombs">precise bombs</Link>, <Link to="/discovery/smoke_bomb">smoke bomb</Link>, <Link to="/discovery/breath_weapon_bomb">breath weapon bomb</Link>, <Link to="/discovery/fast_bombs">fast bombs</Link>, <Link to="/discovery/nauseating_flesh">nauseating flesh</Link>; <Link to="/discovery/plague_bomb">plague bomb</Link>.</p>
</>};
const _preservationist = {title: "Preservationist", jsx: <><h2 id="arc-alchemist-preservationist-preservationist">Preservationist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 19</Link><br/>Some alchemists are obsessed with collecting and preserving exotic creatures. These preservationists may use bottled animals and monsters as teaching tools, but some learn how to reanimate them for short periods to battle on the alchemist's behalf. A preservationist has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/skills"><IonIcon icon="/icons/skills.svg" color="secondary" /></Link><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-i" data-hash-target><div className="box">Bottled Ally I</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/skill/handle_animal">Handle Animal</Link> (WIS) to his list of class skills.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">He adds <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> to his formula book as a 1st-level extract. When he prepares that extract, he actually prepares a tiny, preserved specimen in a bottle (as with a caster casting the spell, the preservationist doesn't have to choose the creature until he uses the extract). When the alchemist opens the bottle, the specimen animates and grows to normal size, serving the preservationist as per the spell and otherwise being treated as a summoned creature. When the duration expires, the preserved creature decays into powder.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the preservationist has the <Link to="/discovery/infusion">infusion</Link> discovery, another character can use the infused specimen. The <Link to="/feat/augment_summoning">Augment Summoning</Link> feat can be applied to these specimens.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-ii" data-hash-target><div className="box">Bottled Ally II</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +4</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/spell/summon_natures_ally_ii">summon nature's ally II</Link> to his formula book as a 2nd-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-iii" data-hash-target><div className="box">Bottled Ally III</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +6</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link> to his formula book as a 3rd-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-iv" data-hash-target><div className="box">Bottled Ally IV</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/spell/summon_natures_ally_v">summon nature's ally V</Link> to his formula book as a 4th-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-v" data-hash-target><div className="box">Bottled Ally V</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/spell/summon_natures_ally_vii">summon nature's ally VII</Link> to his formula book as a 5th-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-preservationist-bottled-ally-vi" data-hash-target><div className="box">Bottled Ally VI</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">18th-level discovery</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 18th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A preservationist adds <Link to="/spell/summon_natures_ally_ix">summon nature's ally IX</Link> to his formula book as a 6th-level extract.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the preservationist archetype: <Link to="/discovery/bottled_ooze">bottled ooze</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, <Link to="/discovery/tentacle">tentacle</Link>, <Link to="/discovery/vestigial_arm">vestigial arm</Link>, and <Link to="/discovery/wings">wings</Link>.</p>
<p><strong className="hl">Feats:</strong> The <Link to="/feat/planar_preservationist">Planar Preservationist</Link> feat may be of particular interest to a Preservationist.</p>
</>};
const _promethean_alchemist = {title: "Promethean Alchemist", jsx: <><h2 id="arc-alchemist-promethean_alchemist-promethean-alchemist">Promethean Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 112</Link><br/>Obsessed with discovering the origins of life, promethean alchemists build constructs they gradually endow with life.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-craft-construct" data-hash-target><div className="box">Craft Construct</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Brew Potion, Throw Anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A promethean alchemist gains the <Link to="/discovery/promethean_disciple">promethean disciple</Link> discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-homunculus-companion-ex" data-hash-target><div className="box">Homunculus Companion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bombs, mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A promethean alchemist gains the service of a homunculus companion. The means for creating this special homunculus are more exotic than normal and require investiture of the promethean alchemist's own life essence into the homunculus. This construct generally resembles a small humanoid or child when first created; the specific appearance is up to its creator, though a homunculus is always humanoid in shape and obviously unnatural on close inspection. While every homunculus companion is absolutely devoted to its master, some homunculi's loyalty borders on the unsettling; such companions jealously protect their masters from threats or construct strange shrines in their masters' honor. A promethean alchemist can't take the <em>mutagen</em> or <em>cognatogen</em> discoveries.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A homunculus companion can be of any alignment, even one that is different from its master's. A destroyed homunculus companion can be restored to life by performing a ritual with its corpse that requires 1 pint of its creator's blood per Hit Die of the homunculus and rare materials worth 100 gp per Hit Die of the homunculus. Performing this ritual takes 1 hour (though it may take some time to gather enough blood at higher levels, so many promethean alchemists keep chilled blood samples in storage just in case).</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement this archetype: <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link>, <Link to="/discovery/doppelganger_simulacrum">doppelganger simulacrum</Link>, and <Link to="/discovery/greater_alchemical_simulacrum">greater alchemical simulacrum</Link>.</p>
<h3 id="arc-alchemist-promethean_alchemist-homunculus-companion-base-statistics">Homunculus Companion Base Statistics</h3>
<p>A homunculus companion has the following features.</p>
<ScrollContainer id="arc-alchemist-promethean_alchemist--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>HD</th>
<th>BAB</th>
<th>Saves</th>
<th>Skills</th>
<th>Feats</th>
<th>Str/Dex Bonus</th>
<th>Special</th>
</tr>
</thead>
<tbody><tr>
<td>1st</td>
<td>1</td>
<td>+1</td>
<td>+0</td>
<td>2</td>
<td>1</td>
<td>+0</td>
<td>Darkvision, low-light vision, sympathetic alchemy, telepathic link, weapon and armor proficiency</td>
</tr>
<tr>
<td>2nd</td>
<td>2</td>
<td>+2</td>
<td>+0</td>
<td>4</td>
<td>1</td>
<td>+0</td>
<td>-</td>
</tr>
<tr>
<td>3rd</td>
<td>3</td>
<td>+3</td>
<td>+1</td>
<td>8</td>
<td>2</td>
<td>+1</td>
<td>Evasion</td>
</tr>
<tr>
<td>4th</td>
<td>3</td>
<td>+3</td>
<td>+1</td>
<td>8</td>
<td>2</td>
<td>+1</td>
<td>-</td>
</tr>
<tr>
<td>5th</td>
<td>4</td>
<td>+4</td>
<td>+1</td>
<td>10</td>
<td>2</td>
<td>+1</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>6th</td>
<td>5</td>
<td>+5</td>
<td>+1</td>
<td>12</td>
<td>3</td>
<td>+2</td>
<td>Speech</td>
</tr>
<tr>
<td>7th</td>
<td>6</td>
<td>+6</td>
<td>+2</td>
<td>14</td>
<td>3</td>
<td>+2</td>
<td>-</td>
</tr>
<tr>
<td>8th</td>
<td>6</td>
<td>+6</td>
<td>+2</td>
<td>14</td>
<td>3</td>
<td>+2</td>
<td>-</td>
</tr>
<tr>
<td>9th</td>
<td>7</td>
<td>+7</td>
<td>+2</td>
<td>16</td>
<td>4</td>
<td>+3</td>
<td>Spell resistance</td>
</tr>
<tr>
<td>10th</td>
<td>8</td>
<td>+8</td>
<td>+2</td>
<td>18</td>
<td>4</td>
<td>+3</td>
<td>Ability score increase</td>
</tr>
<tr>
<td>11th</td>
<td>9</td>
<td>+9</td>
<td>+3</td>
<td>20</td>
<td>5</td>
<td>+3</td>
<td>-</td>
</tr>
<tr>
<td>12th</td>
<td>9</td>
<td>+9</td>
<td>+3</td>
<td>20</td>
<td>5</td>
<td>+4</td>
<td>-</td>
</tr>
<tr>
<td>13th</td>
<td>10</td>
<td>+10</td>
<td>+3</td>
<td>22</td>
<td>5</td>
<td>+4</td>
<td>-</td>
</tr>
<tr>
<td>14th</td>
<td>11</td>
<td>+11</td>
<td>+3</td>
<td>24</td>
<td>6</td>
<td>+4</td>
<td>-</td>
</tr>
<tr>
<td>15th</td>
<td>12</td>
<td>+12</td>
<td>+4</td>
<td>26</td>
<td>6</td>
<td>+5</td>
<td>Ability score increase, improved evasion</td>
</tr>
<tr>
<td>16th</td>
<td>12</td>
<td>+12</td>
<td>+4</td>
<td>26</td>
<td>6</td>
<td>+5</td>
<td>-</td>
</tr>
<tr>
<td>17th</td>
<td>13</td>
<td>+13</td>
<td>+4</td>
<td>28</td>
<td>7</td>
<td>+5</td>
<td>-</td>
</tr>
<tr>
<td>18th</td>
<td>14</td>
<td>+14</td>
<td>+4</td>
<td>30</td>
<td>7</td>
<td>+6</td>
<td>-</td>
</tr>
<tr>
<td>19th</td>
<td>15</td>
<td>+15</td>
<td>+5</td>
<td>32</td>
<td>8</td>
<td>+6</td>
<td>-</td>
</tr>
<tr>
<td>20th</td>
<td>15</td>
<td>+15</td>
<td>+5</td>
<td>32</td>
<td>8</td>
<td>+6</td>
<td>Ability score increase</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong className="hl">Level</strong> This is the homunculus's master's alchemist level.</p>
<p><strong className="hl">HD</strong> This is the homunculus's total number of 10-sided (d10) Hit Dice. The homunculus doesn't have a Constitution score, but it gains bonus hit points based on its size.</p>
<p><strong className="hl">BAB</strong> This is the base attack bonus of the homunculus, which is equal to its number of Hit Dice.</p>
<p><strong className="hl">Saves</strong> These are the base saving throw bonuses of the homunculus.</p>
<p><strong className="hl">Skills</strong> This entry lists the homunculus's total number of skill ranks. A homunculus with a high Intelligence score modifies these totals as normal (the homunculus gains a number of skill ranks equal to 2 + its Intelligence modifier per HD). A homunculus can't have more ranks in a skill than it has Hit Dice.</p>
<p><strong className="hl">Homunculus Class Skills</strong> The following skills are class skills for a homunculus: Bluff (Cha), Craft (Int), Fly (Dex), Knowledge (arcana) (Int), Perception (Wis), Sense Motive (Wis), and Stealth (Dex). In addition, at 1st level, a promethean alchemist can choose two additional skills to be class skills for his homunculus.</p>
<p><strong className="hl">Feats</strong> This is the total number of feats the homunculus has. A homunculus can select any feats it qualifies for, but must possess the appropriate appendages in order to use some feats.</p>
<p><strong className="hl">Str/Dex Bonus</strong> Add this modifier to the homunculus's Strength and Dexterity.</p>
<p><strong className="hl">Special</strong> As the homunculus increases in power, it gains the special abilities described below.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-darkvision-ex" data-hash-target><div className="box">Darkvision (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The homunculus has darkvision out to a range of 60 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-low-light-vision-ex" data-hash-target><div className="box">Low-Light Vision (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Homunculi see twice as far as humans in <Link to="/rule/dim_light">dim light</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-sympathetic-alchemy-su" data-hash-target><div className="box">Sympathetic Alchemy (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The bond between a promethean alchemist and his homunculus is so close that the alchemist's extracts function for the homunculus as if it were the alchemist, allowing the homunculus companion to benefit from extracts without the alchemist needing the infusion discovery. The homunculus is treated as a humanoid or a construct - whichever is more beneficial - for the purposes of what extracts can affect it. Additionally, the homunculus can prepare its master's extracts from his formula book for him each day, as long as it's within the range of its telepathic link.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-telepathic-link-su" data-hash-target><div className="box">Telepathic Link (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A homunculus can't initially speak, but shares a telepathic link with its creator. It knows what its master knows and can convey to him everything it sees and hears, out to a range of 1,500 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-weapon-and-armor-proficiency-ex" data-hash-target><div className="box">Weapon and Armor Proficiency (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A homunculus is proficient with simple weapons, but not armor or shields.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-evasion-ex" data-hash-target><div className="box">Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">If a homunculus is subjected to an attack that normally allows a Reflex save for half damage, it takes no damage if it succeeds at its saving throw.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-ability-score-increase-ex" data-hash-target><div className="box">Ability Score Increase (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The homunculus adds 1 to one of its ability scores at 5th level and every 5 levels thereafter.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-speech-ex" data-hash-target><div className="box">Speech (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The homunculus gains the ability to speak any languages it knows.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-spell-resistance-su" data-hash-target><div className="box">Spell Resistance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 9th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The homunculus gains spell resistance equal to 11 + its master's alchemist level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-promethean_alchemist-improved-evasion-ex" data-hash-target><div className="box">Improved Evasion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When subjected to an attack that allows a Reflex save for half damage, the homunculus takes no damage if it succeeds at the saving throw and only half damage if it fails the saving throw.</div></div></div></div>
<h3 id="arc-alchemist-promethean_alchemist-homunculus-starting-statistics">Homunculus Starting Statistics</h3>
<p><strong>Size</strong> Small; <strong>Speed</strong> 20 ft., fly 30 ft. (poor); <strong>AC</strong> +2 natural armor; <strong>Attack</strong> bite (1d4); <strong>Ability Scores Str</strong> 10, <strong>Dex</strong> 15, <strong>Con</strong> -, <strong>Int</strong> 10, <strong>Wis</strong> 12, <strong>Cha</strong> 7; <strong>Special Qualities</strong> darkvision, low-light vision; <strong>Languages</strong> Common (can't speak).</p>
<h4 id="arc-alchemist-promethean_alchemist-4th-level-advancement">4th-Level Advancement</h4>
<p><strong>Size</strong> Medium; <strong>Speed</strong> 30 ft., fly 40 ft. (average); <strong>Attack</strong> bite (1d6 plus poison), 2 claws (1d6); <strong>Ability Scores Str</strong> +4, <strong>Dex</strong> -2; <strong>Special Attacks</strong> poison.</p>
<div className="sideNoteWrap"><ScrollContainer id="arc-alchemist-promethean_alchemist--table-1"><table><tbody><tr><ThLink scope="row" rowSpan={10} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Homunculus Poison</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 13</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/minute for 60 minutes</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>sleep for 1 minute</td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr><tr><td colSpan={4} className="extra">Con-based DC with a +2 racial bonus</td></tr></tbody></table></ScrollContainer></div></>};
const _psychonaut = {title: "Psychonaut", jsx: <><h2 id="arc-alchemist-psychonaut-psychonaut">Psychonaut</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 19</Link><br/>A psychonaut uses his knowledge to explore altered states of consciousness and even other planes of existence. A psychonaut has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-bomb" data-hash-target><div className="box">Bomb</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A psychonaut's bombs deal damage <Link to="/misc/one_die_step">one die step</Link> lower than normal (regular bombs deal d4s, <Link to="/discovery/concussive_bomb">concussive bombs</Link> deal 1d3s, and so on). This ability otherwise functions as and replaces the standard alchemist bomb class feature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-precognition" data-hash-target><div className="box">Precognition</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +4</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A psychonaut adds <Link to="/spell/augury">augury</Link> to his formula book as a 2nd-level extract (this extract does not require a divine focus component).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-psychic-senses" data-hash-target><div className="box">Psychic Senses</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +6</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A psychonaut adds <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link>, <Link to="/spell/detect_scrying">detect scrying</Link>, <Link to="/spell/scrying">scrying</Link>, and <Link to="/spell/speak_with_dead">speak with dead</Link> to his formula book as 3rd-level extracts (a <em>scrying</em> extract does not require a focus or divine focus component).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">When a psychonaut uses a <em>speak with dead</em> extract, he gains the power to hear the lingering spirit within a corpse rather than enabling the corpse to audibly speak, but the extract otherwise works as the spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-remote-consciousness" data-hash-target><div className="box">Remote Consciousness</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A psychonaut adds <Link to="/spell/dream">dream</Link>, <Link to="/spell/lesser_astral_projection">lesser astral projection</Link>, <Link to="/spell/nightmare">nightmare</Link>, <Link to="/spell/plane_shift">plane shift</Link>, <Link to="/spell/sending">sending</Link>, and <Link to="/spell/telepathic_bond">telepathic bond</Link> to his formula book as 4th-level extracts (a <em>plane shift</em> extract does not require a focus component).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-greater-precognition" data-hash-target><div className="box">Greater Precognition</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">15th-level bomb damage increase</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A psychonaut adds <Link to="/spell/moment_of_prescience">moment of prescience</Link> to his formula book as a 5th-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-psychonaut-master-precognition" data-hash-target><div className="box">Master Precognition</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">17th-level bomb damage increase</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 17th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A psychonaut adds <Link to="/spell/foresight">foresight</Link> to his formula book as a 6th-level extract.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the psychonaut archetype: <Link to="/discovery/confusion_bomb">confusion bomb</Link>, <Link to="/discovery/eternal_potion">eternal potion</Link>, <Link to="/discovery/extend_potion">extend potion</Link>, <Link to="/discovery/lingering_spirit">lingering spirit</Link>, and <Link to="/discovery/madness_bomb">madness bomb</Link>.</p>
</>};
const _ragechemist = {title: "Ragechemist", jsx: <><h2 id="arc-alchemist-ragechemist-ragechemist">Ragechemist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 25</Link><br/>Some alchemists create mutagens that tap into a primal anger that fuels their physical transformation. These alchemists have little control over their altered selves.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ragechemist-rage-mutagen" data-hash-target><div className="box">Rage Mutagen</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever a ragechemist creates a mutagen that improves his Strength, that mutagen's bonus to Strength increases by +2 and penalizes the alchemist's Intelligence score.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">While under the effects of this mutagen, whenever the alchemist takes damage, his rage grows, with detrimental effects. At the end of each turn that he takes hit point damage, the ragechemist must succeed at a Will saving throw (DC 15, or DC 20 if any of the damage came from a critical hit that turn) or take a -2 penalty on Will saving throws and to Intelligence. These penalties end 1 hour after the mutagen ends and stack with themselves.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the penalty lowers the ragechemist's Intelligence score to 0, the ragechemist is comatose until 1 hour after the mutagen expires.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ragechemist-sturdy-rage" data-hash-target><div className="box">Sturdy Rage</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever a ragechemist uses his rage mutagen, he also gains a +4 bonus to natural armor, but the penalty on Will saving throws and to Intelligence for taking damage increases to -4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-ragechemist-lumbering-rage" data-hash-target><div className="box">Lumbering Rage</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Whenever a ragechemist uses his rage mutagen ability, he may have the mutagen also give him a +2 morale bonus to Constitution, but when he takes a penalty on Will saving throws and to Intelligence, he also takes a -1 penalty to Dexterity.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the ragechemist: <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/grand_mutagen">grand mutagen</Link>, <Link to="/discovery/greater_mutagen">greater mutagen</Link>, <Link to="/discovery/infuse_mutagen">infuse mutagen</Link>, <Link to="/discovery/tentacle">tentacle</Link>, and <Link to="/discovery/vestigial_arm">vestigial arm</Link>.</p>
</>};
const _reanimator = {title: "Reanimator", jsx: <><h2 id="arc-alchemist-reanimator-reanimator">Reanimator</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 20</Link><br/>A reanimator is an alchemist who has discovered how to infuse a corpse with a semblance of life. Many work in tandem with necromancers to explore the fine border between the worlds of the living and the dead. A reanimator has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-reanimator-bomb" data-hash-target><div className="box">Bomb</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A reanimator's bombs deal damage <Link to="/misc/one_die_step">one die step</Link> lower than normal (regular bombs deal d4s, <Link to="/discovery/concussive_bomb">concussive bombs</Link> deal 1d3s, and so on). This ability otherwise functions as and replaces the standard alchemist bomb class feature.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-reanimator-simple-reanimation" data-hash-target><div className="box">Simple Reanimation</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">7th-level bomb damage increase</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A reanimator adds <Link to="/spell/lesser_animate_dead">lesser animate dead</Link> to his formula book as a 3rd-level extract. When he uses that extract, rather than drinking it, he injects it into the corpse he intends to animate, which rises as an undead creature under his control 1 hour later. The extract can only create <Link to="/template/zombie">zombies</Link> (including variant zombies).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-reanimator-create-undead" data-hash-target><div className="box">Create Undead</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">13th-level bomb damage increase</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 13th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A reanimator adds <Link to="/spell/create_undead">create undead</Link> to his formula book as a 4th-level extract. When he uses that extract, rather than drinking it, he injects it into the corpse he intends to animate, which rises as an uncontrolled undead 1 hour later. The extract can only create corporeal undead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-reanimator-create-greater-undead" data-hash-target><div className="box">Create Greater Undead</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">15th-level bomb damage increase</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 15th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A reanimator adds <Link to="/spell/create_greater_undead">create greater undead</Link> to his formula book as a 5th-level extract. This otherwise acts similarly to a <em>create undead</em> extract.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the reanimator archetype: <Link to="/discovery/alchemical_zombie">alchemical zombie</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/eternal_potion">eternal potion</Link>, <Link to="/discovery/mummification">mummification</Link>, and <Link to="/discovery/preserve_organs">preserve organs</Link>.</p>
</>};
const _royal_alchemist = {title: "Royal Alchemist", jsx: <><h2 id="arc-alchemist-royal_alchemist-royal-alchemist">Royal Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 11</Link><br/>Paranoia runs rampant among the noble courts of the Inner Sea. On account of this distrust, many rulers often hire specialized alchemists capable of concocting protections from both poisons and diseases for the nobles and their guests. The royal alchemist tradition began in the nation of Rahadoum shortly after the Oath Wars as a replacement for the protection once offered by the clerics and priests of the region. Today, royal alchemists are found in the courts of Cheliax, Galt, Taldor, and, surprisingly, Geb, where living visitors to the Blood Lords are offered protection from the death around them.</p>
<Ability icon={["skills"]} id="arc-alchemist-royal_alchemist-undefined">
<Pair id="arc-alchemist-royal_alchemist-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_nobility">Knowledge (nobility)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature), Survival</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-royal_alchemist-alchemical-antidote" data-hash-target><div className="box">Alchemical Antidote</div><div className="flavor">A royal alchemist can blend special mixes of antitoxin, medicine, and other remedies into alchemical antidotes that can be imbibed by anyone.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use, swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">The royal alchemist creates his alchemical antidotes when he prepares his extracts for the day; they remain potent for 1 day before losing their properties, and the cost of the materials used to make them is insignificant. An alchemical antidote does not qualify as an extract or an infusion for the purpose of feats or discoveries.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The royal alchemist has a pool of points equal to <Link to="/misc/half">half</Link> his alchemist level + his Intelligence bonus that he can divide among any number of alchemical antidotes, though the maximum number of points he can spend on a single antidote is equal to 1/2 his alchemist level (minimum 1). Each point grants the imbiber of the alchemical antidote a +1 alchemical bonus on saving throws against poison for a number of hours equal to the royal alchemist's Intelligence bonus (minimum 1).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The royal alchemist can also create an antidote that protects against diseases. For every 2 points the royal alchemist spends from his pool, the imbiber of the alchemical antidote gains a +1 alchemical bonus on saving throws against disease for 24 hours. The royal alchemist can expend 10 points from his pool to provide immunity to diseases or poisons (decided by him at the time of the antidote's creation); this immunity lasts for a number of minutes equal to the royal alchemist's Intelligence bonus (minimum 1) after the antidote is imbibed. An alchemical remedy can protect against either diseases or poisons, but not both.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The royal alchemist can alter the distribution of the bonuses of any unused alchemical antidotes as a <strong className="hl">full-round action</strong>, either combining them or splitting the bonuses further. The royal alchemist must be holding all unused alchemical antidotes he wishes to alter in this way.</div></div></div></div>
</>};
const _saboteur = {title: "Saboteur", jsx: <><h2 id="arc-alchemist-saboteur-saboteur">Saboteur</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 36</Link><br/>The saboteur is an alchemist who specializes in destroying the plans, materials, and allies of his enemies. A saboteur has focused his alchemical research toward new ways to conceal his presence, sow confusion, and blow up large structures.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-saboteur--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/gnome">Gnome</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-alchemist-saboteur-undefined">
<Pair id="arc-alchemist-saboteur-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/knowledge_engineering">Knowledge (engineering)</Link> (INT)</Pair>
<Pair title="Removed Skills">Knowledge (nature)</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-chameleon-mutagen-su" data-hash-target><div className="box">Chameleon Mutagen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A saboteur discovers how to create a special elixir that he can imbibe in order to heighten his ability to move undetected and his mobility at the cost of his physical might. When consumed, the elixir causes the saboteur's skin to change color to match the background and causes his hands and feet to secrete a sticky residue. This grants him a circumstance bonus on Stealth checks equal to half his alchemist level (minimum +1), as well as granting him a climb speed equal to half his base speed, for 10 minutes per saboteur level. In addition, while the chameleon extract is in effect, the saboteur takes a -2 penalty to his Strength.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A saboteur who drinks an alchemist's mutagen is treated as a non-alchemist. All limitations to mutagens apply to chameleon mutagen as if it were the same ability. The <Link to="/discovery/infuse_mutagen">infuse mutagen</Link> discovery and <em>persistent mutagen</em> class ability apply to the chameleon mutagen.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-saboteur-discoveries" data-hash-target><div className="box">Saboteur Discoveries</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The following four new options may be taken as discoveries by a saboteur.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-bore-bomb" data-hash-target><div className="box">Bore Bomb</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When the saboteur creates a bomb, he may choose to make it a bore bomb. If a bore bomb strikes a wall, gate, siege engine, or similar large, solid, inanimate structure, it ignores <Link to="/misc/half">half</Link> the target's hardness and deals 1 point of damage per saboteur level. If a bore bomb reduces an inanimate target to half its hit points or fewer, it blows a hole 5 feet wide and 5 feet deep in the target.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">This discovery cannot be used with other discoveries that modify bombs and have this same restriction (Primary Bomb Discoveries).</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-complex-bomb" data-hash-target><div className="box">Complex Bomb</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When the saboteur creates a bomb, he can choose to have it modified by two different discoveries that modify a bomb's damage (that normally cannot be used together). Each discovery modifies half the bomb's damage dice, rounding down. For example, a <Link to="/discovery/concussive_bomb">concussive</Link>/<Link to="/discovery/frost_bomb">frost</Link> bomb from a 9th-level saboteur deals 2d4 points of sonic damage + 2d6 points of frost damage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Creating a complex bomb counts as 2 daily uses of the bomb ability.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-greater-chameleon-mutagen" data-hash-target><div className="box">Greater Chameleon Mutagen</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">12th-level alchemist.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The saboteur's chameleon mutagen now also grants the saboteur the <em>hide in plain sight</em> ability, as the <Link to="/class/ranger">ranger</Link> ability of the same name, but it functions in any terrain.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-grand-chameleon-mutagen" data-hash-target><div className="box">Grand Chameleon Mutagen</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">16th-level alchemist and the <em>greater chameleon mutagen</em> discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The saboteur's chameleon mutagen now grants him a circumstance bonus on Stealth checks equal to his alchemist level, as well as granting him a climb speed equal to his normal movement speed.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-grand-discoveries" data-hash-target><div className="box">Grand Discoveries</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A saboteur may select the following grand discovery.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-saboteur-true-chameleon-mutagen" data-hash-target><div className="box">True Chameleon Mutagen</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">The <em>grand chamelon mutagen</em> discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The saboteur's chameleon mutagen now acts as if he was under the effects of the <Link to="/spell/greater_invisibility">greater invisibility</Link> and <Link to="/spell/spider_climb">spider climb</Link> spells, using his alchemist level as the caster level, for the duration of the mutagen.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the saboteur archetype: <Link to="/discovery/acid_bomb">acid bomb</Link>, <Link to="/discovery/concussive_bomb">concussive bomb</Link>, <Link to="/discovery/delayed_bomb">delayed bomb</Link>, <Link to="/discovery/explosive_bomb">explosive bomb</Link>, <Link to="/discovery/fast_bombs">fast bombs</Link>, <Link to="/discovery/inferno_bomb">inferno bomb</Link>, <Link to="/discovery/madness_bomb">madness bomb</Link>, <Link to="/discovery/precise_bombs">precise bombs</Link>, <Link to="/discovery/smoke_bomb">smoke bomb</Link>, <Link to="/discovery/stink_bomb">stink bomb</Link>; <Link to="/discovery/explosive_missile">explosive missile</Link>, <Link to="/discovery/immolation_bomb">immolation bomb</Link>, <Link to="/discovery/siege_bomb">siege bomb</Link>; <Link to="/discovery/blinding_bomb">blinding bomb</Link>, <Link to="/discovery/cognatogen">cognatogen</Link>, <Link to="/discovery/confusion_bomb">confusion bomb</Link>, <Link to="/discovery/tanglefoot_bomb">tanglefoot bomb</Link>.</p>
</>};
const _sacrament_alchemist = {title: "Sacrament Alchemist", jsx: <><h2 id="arc-alchemist-sacrament_alchemist-sacrament-alchemist">Sacrament Alchemist</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 11</Link><br/>Sacrament alchemists serve in a great variety of priestly roles for their deities. A sacrament alchemist is often invaluable even to like-minded allies who are not adherents of the alchemist's religion but who nonetheless rely on his divine abilities.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-sacrament_alchemist--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Like a cleric, a sacrament alchemist must worship a deity, and must be within one step of his deity's alignment.</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/broken-shield"><IonIcon icon="/icons/broken-shield.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-sacrament_alchemist-sacramental-cognatogen-su" data-hash-target><div className="box">Sacramental Cognatogen (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A sacrament alchemist can anoint himself as his deity's servant using his own special version of a mutagen called a sacramental cognatogen. This is brewed, imbibed, maintained, and can nauseate non-alchemists in the same way as a mutagen. While a sacramental cognatogen is in effect, the sacrament alchemist takes a -2 penalty to Dexterity.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Instead of providing physical benefits, the sacramental cognatogen grants the sacrament alchemist access to the domain powers of one domain or subdomain belonging to his deity as if he were a <Link to="/class/cleric">cleric</Link> of his alchemist level. The sacrament alchemist must choose the domain or subdomain when he brews the sacramental cognatogen. A sacrament alchemist can select an alignment domain only if his alignment matches that domain. He treats his alchemist level as his cleric level for purposes of using these domain powers, and treats his Intelligence modifier as his Wisdom modifier for purposes of variable effects. The effects of the sacramental cognatogen last for 10 minutes per alchemist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A sacrament alchemist doesn't gain the bonus spells listed for each domain, nor does he gain any bonus spell slots. Levels of classes that normally provide access to domains stack with the sacrament alchemist's alchemist level for purposes of determining domain powers and abilities, but not for purposes of determining bonus spells. Discoveries, feats, and effects that interact with the mutagen class feature do not affect sacramental cognatogen. A sacrament alchemist cannot take the <em>cognatogen</em> or <em>mutagen</em> discoveries.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-sacrament_alchemist-divinely-inspired-alchemy-su" data-hash-target><div className="box">Divinely Inspired Alchemy (Su)</div><div className="flavor">A sacrament alchemist's faith inspires him with ideas for novel alchemical achievements, although the mental strain means that he can't reliably repeat them.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift alchemy</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once per day while preparing extracts, for a period of 24 hours, a sacrament alchemist can gain an alchemist discovery for which he qualifies. He treats his alchemist level as 2 lower for the purpose of this discovery.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the sacrament alchemist archetype: <Link to="/discovery/combine_extracts">combine extracts</Link>, <Link to="/discovery/dilution">dilution</Link>, <Link to="/discovery/infusion">infusion</Link>, and <Link to="/discovery/ranged_baptism">ranged baptism</Link>.</p>
</>};
const _tinkerer = {title: "Tinkerer", jsx: <><h2 id="arc-alchemist-tinkerer-tinkerer">Tinkerer</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_intrigue">Inner Sea Intrigue pg. 46</Link><br/>Tinkerers constantly dabble in clockworking, creating special familiars that they regularly upgrade and with which they form bizarre bonds. Many worship <Link to="/faith/brigh">Brigh</Link> and can be found throughout Golarion, especially in dwarven and gnome communities.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-clockwork-bond-ex" data-hash-target><div className="box">Clockwork Bond (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">A tinkerer forms a bond with one of her creations, and begins play with it at no cost. This functions as the <Link to="/ability/familiar">familiar</Link> option of the wizard's arcane bond class feature, with the tinkerer's effective wizard level equal to her alchemist level. If a tinkerer would gain a familiar through another class, those levels stack for purposes of determining the familiar's abilities.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A tinkerer's <Link to="/sidekick/familiar">familiar</Link> can take any shape the tinkerer wishes, but its statistics and abilities are identical to a <Link to="/monster/clockwork_spy">clockwork spy</Link> with the normal adjustments and abilities for a familiar applied, and it is a <Link to="/type/construct">construct</Link> with the <Link to="/subtype/clockwork">clockwork</Link> subtype. Unlike most familiars, a clockwork spy does not grant special abilities to its master.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">With 1 minute of work and a successful DC 15 Heal check, a tinkerer can restore 1d4 hit points to her clockwork spy familiar.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">If the tinkerer has the <Link to="/discovery/infusion">infusion</Link> discovery, a clockwork spy familiar can deliver the tinkerer's extracts with a range of touch for her.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">The tinkerer can now restore 1d6 hit points to her familiar.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">A clockwork spy can communicate with constructs with the clockwork subtype.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The tinkerer can now restore 2d6 hit points to her familiar.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The tinkerer can now heal 3d6 hit points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The tinkerer can now heal 4d6 hit points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The tinkerer can now heal 5d6 hit points.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A tinkerer cannot choose the <em>cognatogen</em> or <em>mutagen</em> discoveries.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-tinkering-ex" data-hash-target><div className="box">Tinkering (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +2, poison use, poison resistance +4</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>A tinkerer can spend 1 hour working on her clockwork spy familiar to enhance it with one of the options from the following list.</p>
<ul>
<li>The clockwork spy familiar gains DR 2/adamantine.</li>
<li>The clockwork spy familiar gains resist cold 5.</li>
<li>The clockwork spy familiar gains resist fire 5.</li>
<li>The clockwork spy's slam attack deals 1d3 points of damage.</li>
<li>The clockwork spy gains a +5 alchemical bonus on Stealth checks.</li>
<li>The clockwork spy gains darkvision 120 feet.</li>
<li>The clockwork spy gains a +2 resistance bonus on Reflex saving throws.</li>
<li>The clockwork spy gains a +2 resistance bonus on Will saving throws.</li>
<li>The clockwork spy gains a +2 natural armor bonus.</li>
<li>The clockwork familiar's maneuverability is average.</li>
</ul>
</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 5th Level</div></div><div className="abEnd"><div className="box">The tinkerer can choose a second option from the list. The same option cannot be chosen twice.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A tinkerer can change the enhancements applied to her familiar, but doing so takes 1 hour of work per enhancement she wishes to change.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-clockwork-familiar-ex" data-hash-target><div className="box">Clockwork Familiar (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">The tinkerer turns her familiar into a <Link to="/monster/clockwork_familiar">clockwork familiar</Link> that takes any form she wishes. She must choose which type of item is installed in the clockwork familiar. She gains the clockwork familiar at no cost, as if she were a 7th-level spellcaster with the <Link to="/feat/improved_familiar">Improved Familiar</Link> feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-greater-tinkering-ex" data-hash-target><div className="box">Greater Tinkering (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +6</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>A tinkerer can spend 1 hour working on her familiar to enhance it with one of the options from the following list. A tinkerer can change the enhancement applied to her familiar, but doing so takes 1 hour.</p>
<ul>
<li>The clockwork familiar's bite attack deals 1d4 points of damage.</li>
<li>The clockwork familiar gains DR 10/adamantine.</li>
<li>The clockwork familiar gains any feat for which it qualifies as a bonus feat.</li>
<li>The clockwork familiar gains a +10 alchemical bonus on Stealth checks.</li>
</ul>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-clockwork-upgrade-ex" data-hash-target><div className="box">Clockwork Upgrade (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A tinkerer has learned how to change the type of magic item her clockwork familiar can carry. This requires 1 hour of uninterrupted work. A tinkerer can change the type of item her clockwork familiar carries only once every 24 hours.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box">A tinkerer can remove a spent item and install a new one.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-tinkerer-clockwork-mimicries-ex" data-hash-target><div className="box">Clockwork Mimicries (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A tinkerer can use her mechanical mastery to create clockwork mimicries of powerful magic items. Doing so takes 1 hour of uninterrupted work, and allows the tinkerer to create a <Link to="/main/magic_wondrous">wondrous item</Link> that functions for a number of hours per day equal to her alchemist level. When creating such a clockwork item, the tinkerer must use materials worth an amount equal to the wondrous item's construction cost. She need not meet any of the item's other creation requirements. A tinkerer cannot create a mimicry of a consumable wondrous item or a wondrous item with finite charges, and she can have only one mimicry at a time. The clockwork item never functions as a wondrous item for any other creature.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The tinkerer can spend 1 hour disassembling a clockwork mimicry and reassembling it into a mimicry of a different wondrous item. When she disassembles a clockwork mimicry, she can salvage parts worth <Link to="/misc/half">half</Link> of the mimicry's creation cost. She still must pay the full creation cost for the new mimicry. This resets the duration the mimicry functions per day.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the tinkerer archetype: <Link to="/discovery/combine_extracts">combine extracts</Link>, <Link to="/discovery/dilution">dilution</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/enhance_potion">enhance potion</Link>, <Link to="/discovery/eternal_potion">eternal potion</Link>, <Link to="/discovery/extend_potion">extend potion</Link>, <Link to="/discovery/infusion">infusion</Link>, and <Link to="/discovery/promethean_disciple">promethean disciple</Link>.</p>
</>};
const _toxicant = {title: "Toxicant", jsx: <><h2 id="arc-alchemist-toxicant-toxicant">Toxicant</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 7</Link><br/>In lands such as Daggermark and Katapesh where poisons are legal and may be openly studied and sold, some alchemists obsess over the myriad ways that poisons and venoms can be applied and delivered. Known as toxicants, these deadly artists induce the production of deadly secretions within their own bodies in order to better inflict crippling conditions upon their foes.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-toxicant-toxic-secretion-ex" data-hash-target><div className="box">Toxic Secretion (Ex)</div><div className="flavor">A toxicant has learned to mimic creatures with the ability to secrete harmful toxins through the skin.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once per day, in a process that takes 10 minutes, the toxicant can create and imbibe a tincture that causes her skin to secrete a mild toxin. The toxicant is immune to this secretion, but any creature that hits her with a natural attack or unarmed strike must succeed at a Fortitude save (DC = 10 + <Link to="/misc/half">half</Link> the toxicant's alchemist level + the toxicant's Intelligence modifier). On a failed save, the target takes an amount of damage equal to the toxicant's Intelligence modifier. This is a poison effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The toxicant can suppress this secretion, in which case it remains suppressed for 1 hour or until the toxicant reactivates it (also a <strong className="hl">standard action</strong>).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">The toxicant can collect and concentrate this secretion into a poison she can deliver as a touch attack or apply to a weapon. Targets of such attacks must attempt saving throws as if they had touched the toxicant's toxic secretion. The toxicant can do this a number of times per day equal to her alchemist level + her Intelligence modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 3rd Level</div></div><div className="abEnd"><div className="box">The toxicant can choose a condition to have her toxin impose. Once this choice is made, it can't be changed. A creature that fails its save against the toxic secretion also gains this condition until it succeeds at a save against the secretion, or until the toxin's duration ends. The initial list of conditions is: <Link to="/rule/bleed">bleed</Link> (1d6), <Link to="/misc/dazzled">dazzled</Link>, <Link to="/misc/fatigued">fatigued</Link>, or <Link to="/misc/sickened">sickened</Link>. At higher alchemist levels, the toxicant gains access to stronger conditions; some replace lower-level conditions, which must be selected first.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">A target that fails its save must succeed at a second save 1 round later or take the same amount of damage again. This effect repeats as long as the target continues to fail its saving throws, to a maximum number of rounds equal to 1 + 1 for every 4 alchemist levels the toxicant possesses (to a maximum of 6 rounds at 20th level).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">The toxicant gains a second condition that her toxin imposes. She can choose from the previous list, or <Link to="/misc/dazed">dazed</Link> or <Link to="/misc/shaken">shaken</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The toxicant chooses a third condition from the previous lists, or can replace <em>dazzled</em> with <Link to="/misc/blinded">blinded</Link>, or <em>dazed</em> with <Link to="/misc/staggered">staggered</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The toxicant chooses a fourth choice from the previous lists, or can replace <em>fatigued</em> with <Link to="/misc/exhausted">exhausted</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">The toxicant chooses a fifth choice from the previous options.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">The toxicant chooses a sixth choice from the previous options, or can replace <em>exhausted <strong>and</strong> staggered</em> with <Link to="/misc/stunned">stunned</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-toxicant-toxic-digestion-ex" data-hash-target><div className="box">Toxic Digestion (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 14th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">A toxicant can drink a poison and suspend it within her own body. She is not affected by the poison, and doesn't need to attempt saving throws against it. When the toxicant next uses her toxic secretion on a creature that attacks her with a natural or unarmed attack, she can expose the attacker to the digested poison (with that poison's normal duration, effects, and save DC) rather than her normal toxic secretion, even if the digested poison isn't normally a contact poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">The alchemist can maintain only a single digested poison at a time. If she digests a new poison, any older digested poison is lost.</div></div></div></div>
</>};
const _trap_breaker = {title: "Trap Breaker", jsx: <><h2 id="arc-alchemist-trap_breaker-trap-breaker">Trap Breaker</h2>
<p><strong>Sources</strong> <Link to="/source/dungeoneers_handbook">Dungeoneer's Handbook pg. 23</Link><br/>Trap breakers forgo the study of poison to instead master the construction and deployment of traps, using their nimble fingers to disable dangerous devices and their alchemical knowledge to create devastating land mines.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-trap_breaker-trapfinding-ex" data-hash-target><div className="box">Trapfinding (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use, poison resistance +2</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A trap breaker adds <Link to="/misc/half">half</Link> his alchemist level on Perception checks made to locate traps and on Disable Device checks. A trap breaker can use Disable Device to disarm magic traps.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-trap_breaker-explosive-disarm-ex" data-hash-target><div className="box">Explosive Disarm (Ex)</div><div className="flavor">A trap breaker can attempt to disarm a mechanical trap by detonating it rather than disarming it with a Disable Device check.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +4, poison resistance +6</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 5th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">A trap breaker may expend one of his bombs to make a ranged touch attack against a trap, using the trap's Disable Device DC as its AC. If the attack misses, the bomb's splash damage activates the trap. If the attack hits, the bomb deactivates the trap without setting it off. The trap breaker must both know the location of the trap and be able to reach the trap's trigger with a ranged touch attack in order to use this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">A trap breaker can disarm magic traps with this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-trap_breaker-land-mine-ex" data-hash-target><div className="box">Land Mine (Ex)</div><div className="flavor">A trap breaker can turn his bombs into land mines.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Full-Round Action</div></div><div className="abEnd"><div className="box">A trap breaker can set a land mine, which fills a single 5-foot square, and can't be placed in the same space as another trap, land mine, or magic trap. The trap breaker can arm the land mine with any bomb he is eligible to use, and the effects of this bomb are immediately transferred to the land mine.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Provokes <Link to="/rule/aoo">AoO?</Link></div></div><div className="abEnd"><div className="box">Yes</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Creating a land mine uses up two of the alchemist's bombs per day. The DCs for Perception checks to notice the land mine, Disable Device checks to disable it, and saving throws to avoid its effects are equal to 10 + 1/2 the alchemist's level + his Intelligence modifier. Land mines last for 1 day per alchemist level or until they are triggered, whichever comes first. All alchemist land mines share the qualities listed in the trap block below.</div></div></div></div>
<div className="sideNoteWrap"><ScrollContainer id="arc-alchemist-trap_breaker--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={6} to="/rule/elements_of_a_trap"><IonIcon aria-label="Trap" icon="/icons/wolf-trap.svg" /></ThLink><th colSpan={4} scope="col" className="title">Alchemist Land Minds</th></tr><tr><th id="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-type">Type</th><td headers="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-type">mechanical</td><th id="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-cr">CR</th><td headers="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-cr">variable</td></tr><tr><th scope="row" colSpan={2}>Perception DC</th><td colSpan={2}>See above</td></tr><tr><th scope="row" colSpan={2}>Disable Device DC</th><td colSpan={2}>See above</td></tr><tr><th id="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-trigger">Trigger</th><td headers="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-trigger">location</td><th id="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-reset">Reset</th><td headers="arc-alchemist-trap_breaker-alchemist-land-minds-haunt-reset">none</td></tr><tr><td colSpan={4}><strong>Effect:</strong> See above</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-trap_breaker-mine-engineering-ex" data-hash-target><div className="box">Mine Engineering (Ex)</div><div className="flavor">A trap breaker's expertise in improving explosives allows him to create land mines with minimal expense.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison immunity</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 10th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Creating a land mine uses up only one of the alchemist's bombs per day.</div></div></div></div>
</>};
const _vaultbreaker = {title: "Vaultbreaker", jsx: <><h2 id="arc-alchemist-vaultbreaker-vaultbreaker">Vaultbreaker</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 236</Link><br/>The vaultbreaker combines stealth with his bomb-making talents to construct special focused charges that can disable or destroy hinges, locks, and similar mechanisms.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/skills"><IonIcon icon="/icons/skills.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vaultbreaker-breaking-and-entering-ex" data-hash-target><div className="box">Breaking and Entering (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Brew Potion</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A vaultbreaker gains <Link to="/skill/stealth">Stealth</Link> (DEX) as a class skill and can disarm magical traps as if he were a <Link to="/class/rogue">rogue</Link> with the <Link to="/ability/trapfinding">trapfinding</Link> ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vaultbreaker-rogue-talents" data-hash-target><div className="box">Rogue Talents</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Discoveries</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A vaultbreaker can choose any of the following rogue talents in place of a discovery: <Link to="/talent/expert_leaper">expert leaper</Link>, <Link to="/talent/fast_stealth">fast stealth</Link>, <Link to="/talent/ledge_walker">ledge walker</Link>, <Link to="/talent/nimble_climber">nimble climber</Link>, or <Link to="/talent/wall_scramble">wall scramble</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vaultbreaker-safecracking-ex" data-hash-target><div className="box">Safecracking (Ex)</div><div className="flavor">A vaultbreaker's bombs can help him disable locks.</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Throw Anything</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">He gains <Link to="/discovery/penetrating_charge">penetrating charge</Link> as a bonus discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">Because this ability replaces Throw Anything, the vaultbreaker's bombs do not add his Intelligence bonus to damage rolls.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vaultbreaker-enhanced-safecracking-ex" data-hash-target><div className="box">Enhanced Safecracking (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison use</div></div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Alters</div></div><div className="abEnd"><div className="box">Bombs</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A vaultbreaker gains <Link to="/discovery/incendiary_charge">incendiary charge</Link> as a bonus discovery, and his incendiary charges ignore 10 points of an object's hardness instead of 5.</div></div></div></div>
</>};
const _vivisectionist = {title: "Vivisectionist", jsx: <><h2 id="arc-alchemist-vivisectionist-vivisectionist">Vivisectionist</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 20</Link><br/>A vivisectionist studies bodies to better understand their function. Unlike a <Link to="/arc-alchemist/chirurgeon">chirurgeon</Link>, a vivisectionist's goals are not related to healing, but rather to experimentation and knowledge that most people would consider evil. A vivisectionist has the following class features.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-sneak-attack" data-hash-target><div className="box">Sneak Attack</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Bomb</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A vivisectionist gains the <Link to="/ability/sneak_attack">sneak attack</Link> ability as a rogue of the same level. If a character already has sneak attack from another class, the levels from the classes that grant sneak attack stack to determine the effective rogue level for the sneak attack's extra damage dice (so an alchemist 1/rogue 1 has a +1d6 sneak attack like a 2nd-level rogue, an alchemist 2/rogue 1 has a +2d6 sneak attack like a 3rd-level rogue, and so on).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-bleeding-attack" data-hash-target><div className="box">Bleeding Attack</div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A vivisectionist may select the <Link to="/talent/bleeding_attack">bleeding attack</Link> rogue talent in place of a discovery.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-torturers-eye" data-hash-target><div className="box">Torturer's Eye</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A vivisectionist adds <Link to="/spell/deathwatch">deathwatch</Link> to his formula book as a 1st-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-cruel-anatomist" data-hash-target><div className="box">Cruel Anatomist</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 3rd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A vivisectionist may use his Knowledge (nature) skill bonus in place of his Heal skill bonus.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-torturous-transformation" data-hash-target><div className="box">Torturous Transformation</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 7th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A vivisectionist adds <Link to="/spell/anthropomorphic_animal">anthropomorphic animal</Link> to his formula book as a 2nd-level extract. When he uses this extract, he injects it into an animal as part of a 2-hour surgical procedure. By using multiple doses of this extract as part of the surgery, he multiplies the duration by the number of extracts used.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">A vivisectionist adds <Link to="/spell/awaken">awaken</Link> and <Link to="/spell/baleful_polymorph">baleful polymorph</Link> to his formula book as 3rd-level extracts. When he uses the <em>awaken</em> or <em>baleful polymorph</em> extract, he injects it into the target (not a plant) as part of a 24-hour surgical procedure. He can make <em>anthropomorphic animal</em> <Link to="/spell/permanency">permanent</Link> on a creature by spending 7,500 gp.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 15th Level</div></div><div className="abEnd"><div className="box">A vivisectionist adds <Link to="/spell/regenerate">regenerate</Link> to his formula book as a 5th-level extract.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-vivisectionist-crippling-strike" data-hash-target><div className="box">Crippling Strike</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">A vivisectionist may select the <Link to="/talent/crippling_strike">crippling strike</Link> rogue talent in place of a discovery.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the vivisectionist archetype: <Link to="/discovery/alchemical_simulacrum">alchemical simulacrum</Link>, <Link to="/discovery/concentrate_poison">concentrate poison</Link>, <Link to="/discovery/doppelganger_simulacrum">doppelganger simulacrum</Link>, <Link to="/discovery/feral_mutagen">feral mutagen</Link>, <Link to="/discovery/parasitic_twin">parasitic twin</Link>, <Link to="/discovery/preserve_organs">preserve organs</Link>, <Link to="/discovery/tentacle">tentacle</Link>, <Link to="/discovery/tumor_familiar">tumor familiar</Link>, <Link to="/discovery/vestigial_arm">vestigial arm</Link>, and <Link to="/discovery/wings">wings</Link>.</p>
</>};
const _wasteland_blightbreaker = {title: "Wasteland Blightbreaker", jsx: <><h2 id="arc-alchemist-wasteland_blightbreaker-wasteland-blightbreaker">Wasteland Blightbreaker</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 10</Link><br/>The deleterious effects of the weird hazards of the Mana Wastes require special skill to remedy. Many wasteland blightbreakers are also <Link to="/arc-alchemist/chirurgeon">chirurgeons</Link>.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-wasteland_blightbreaker-healing-infusion-sp-su" data-hash-target><div className="box">Healing Infusion (Sp, Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +2</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 2nd Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The blightbreaker can prepare extracts of the <Link to="/spelldef/healing">healing</Link> subschool as if he had the <Link to="/discovery/infusion">infusion</Link> discovery and can choose to render any such extracts inert and prepare other extracts to replace them (unlike infusions, which continue to occupy the alchemist's daily extract slots until consumed or used).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">If the blightbreaker has the infusion discovery, or if he is also a chirurgeon, he can use <Link to="/spell/touch_injection">touch injection</Link> as a spell-like ability once per day, but only to absorb an infusion of the healing subschool.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-wasteland_blightbreaker-swift-healing-infusions-sp" data-hash-target><div className="box">Swift Healing Infusions (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Swift poisoning</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 6th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The blightbreaker can absorb an infusion of the healing subschool as if with <em>touch injection</em> an unlimited number of times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">While he has a healing extract absorbed in this fashion, he can deliver it.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-wasteland_blightbreaker-banish-blights-su" data-hash-target><div className="box">Banish Blights (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Poison resistance +6, the discovery gained at 8th level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A blightbreaker can end any effect affecting a creature that could be reversed by <Link to="/spell/break_enchantment">break enchantment</Link>. To do so, the affected creature must imbibe one of the blightbreaker's infused extracts of the healing subschool of at least 3rd level. The blightbreaker must then attempt a caster level check as described in <em>break enchantment.</em> If the blightbreaker succeeds at the check, the creature is free of the spell, curse, or effect. The blightbreaker can also use this ability to attempt to dispel <Link to="/rule/primal_magic">primal magic</Link> events affecting a creature or an area. To do so, the affected creature must imbibe an infused extract as described above, and the blightbreaker must attempt a caster level check against a DC equal to 11 + the primal magic event's CR. If he succeeds at the check, the primal magic event ends as if the blightbreaker had successfully used dispel magic.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">If the blightbreaker attempts to dispel a primal magic event affecting an area, as a <strong className="hl">standard action</strong>, he must dump an infused extract of the healing subschool of at least 3rd level onto an affected square. He then must attempt a caster level check against a DC equal to 11 + the primal magic event's CR. If he succeeds at the check, the primal magic event ends as if the blightbreaker had successfully used <Link to="/spell/dispel_magic">dispel magic</Link>.</div></div></div></div>
<p><strong className="hl">Discoveries:</strong> The following discoveries complement the wasteland blightbreaker archetype: <Link to="/discovery/dispelling_bomb">dispelling bomb</Link>, <Link to="/discovery/elixir_of_life">elixir of life</Link>, <Link to="/discovery/healing_bomb">healing bomb</Link>, <Link to="/discovery/healing_touch">healing touch</Link>, <Link to="/discovery/infusion">infusion</Link>, <Link to="/discovery/spontaneous_healing">spontaneous healing</Link>.</p>
</>};
const _winged_marauder = {title: "Winged Marauder", jsx: <><h2 id="arc-alchemist-winged_marauder-winged-marauder">Winged Marauder</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 104</Link><br/>Goblin alchemists have created a mixture of pheromones that they use to manipulate and entice giant vultures or dire bats to do their bidding. These goblins strap harnesses to the chests of these flying animals and hang beneath them, dropping flaming alchemical solutions on the helpless folks below.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-alchemist-winged_marauder--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/goblin">Goblin</Link></td></tr></tbody></table></ScrollContainer></div><Ability icon={["skills"]} id="arc-alchemist-winged_marauder-undefined">
<Pair id="arc-alchemist-winged_marauder-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX), <Link to="/skill/handle_animal">Handle Animal</Link> (CHA), <Link to="/skill/ride">Ride</Link> (DEX)</Pair>
<Pair title="Removed Skills">Disable Device, Sleight of Hand, Use Magic Device</Pair></Ability>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-winged_marauder-flying-beast-tamer-ex" data-hash-target><div className="box">Flying Beast Tamer (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box hl">Replaces</div></div><div className="abEnd"><div className="box">Mutagen, persistent mutagen</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">A winged marauder acquires a flying mount as an <Link to="/sidekick/animal_companion">animal companion</Link>. This works as the druid <Link to="/ability/animal_companion">animal companion</Link> class feature, except the marauder must select a <Link to="/companion/dire_bat">dire bat</Link> or <Link to="/companion/giant_vulture">giant vulture</Link>. The marauder's effective druid level is equal to his alchemist level.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Special</div></div><div className="abEnd"><div className="box">A marauder and his companion don't gain the <em>share spells</em> ability.</div></div></div></div>
<div className="ability p hasSubs"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-winged_marauder-discovery" data-hash-target><div className="box">Discovery</div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">A winged marauder can select the following additional discovery.</div></div></div></div>
<div className="ability p subAbility numbered"><div className="abIcon"><Link to="/icons/heart-plus"><IonIcon icon="/icons/heart-plus.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="arc-alchemist-winged_marauder-sipping-pet-ex" data-hash-target><div className="box">Sipping Pet (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Prerequisites</div></div><div className="abEnd"><div className="box">The <Link to="/discovery/infusion">infusion</Link> discovery.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The marauder can administer a dose of a liquid (such as an extract, infusion, potion, or an alchemical liquid like <Link to="/eq-misc/antitoxin">antitoxin</Link>) to his animal companion, even if the companion is unconscious. The alchemist must be adjacent to or riding the companion to use this ability.</div></div></div></div>
</>};
export default {herbalist:_herbalist,homunculist:_homunculist,horticulturist:_horticulturist,ice_chemist:_ice_chemist,inspired_chemist:_inspired_chemist,internal_alchemist:_internal_alchemist,interrogator:_interrogator,mad_scientist:_mad_scientist,metamorph:_metamorph,mindchemist:_mindchemist,mixologist:_mixologist,mnemostiller:_mnemostiller,oenopion_researcher:_oenopion_researcher,oozemaster:_oozemaster,perfumer:_perfumer,plague_bringer:_plague_bringer,preservationist:_preservationist,promethean_alchemist:_promethean_alchemist,psychonaut:_psychonaut,ragechemist:_ragechemist,reanimator:_reanimator,royal_alchemist:_royal_alchemist,saboteur:_saboteur,sacrament_alchemist:_sacrament_alchemist,tinkerer:_tinkerer,toxicant:_toxicant,trap_breaker:_trap_breaker,vaultbreaker:_vaultbreaker,vivisectionist:_vivisectionist,wasteland_blightbreaker:_wasteland_blightbreaker,winged_marauder:_winged_marauder}