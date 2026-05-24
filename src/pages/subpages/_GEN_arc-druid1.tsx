import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _aerie_protector = {title: "Aerie Protector", jsx: <><h2 id="arc-druid-aerie_protector-aerie-protector">Aerie Protector</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 47</Link><br/>The aerie protector guards nature's nests and lairs in the highest mountains, and she is only ever truly at ease when under vast expanses of open sky.</p>
<Ability id="arc-druid-aerie_protector-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-druid-aerie_protector-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Info">Aerie protectors are proficient with <Link to="/eq-weapon/javelin">javelins</Link> and <Link to="/eq-weapon/shortbow">shortbows</Link> but not with scimitars or scythes. Aerie protectors are not proficient with medium armor.</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-aerie_protector-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice"><p>If the aerie protector chooses an animal companion as her nature bond, she must choose an animal with a fly speed. She can use spells or other effects to alter her companion's fly speed, but it must be able to fly on its own before it becomes her companion.</p>
<p>If the aerie protector chooses a domain as her nature bond, she must choose the <Link to="/domain/air">Air</Link>, <Link to="/druiddomain/eagle">Eagle</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/druiddomain/mountain">Mountain</Link>, or <Link to="/domain/weather">Weather</Link> domain.</p>
</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-wild-empathy-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-druid-aerie_protector-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Passive Ability">An aerie protector gains a +4 bonus on <em>wild empathy</em> checks on flying animals, but she takes a -4 penalty on checks on other animals.</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-sky-and-stone-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-aerie_protector-sky-and-stone-ex">Sky and Stone (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aerie protector gains a bonus equal to <Link to="/misc/half">half</Link> her level on Knowledge (geography) and Survival checks involving mountainous terrain or high altitudes, and she cannot be tracked in such an environment.</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-wind-at-her-back-su" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-aerie_protector-wind-at-her-back-su">Wind at Her Back (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An aerie protector gains a +4 bonus to CMD and on saving throws against the effects of high altitude and effects that rely on air pressure or strong wind to move her or impede her flight. This bonus also applies on Reflex saves against effects that deal electricity damage.</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-wild-shape" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-aerie_protector-wild-shape">Wild Shape</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An aerie protector gains <em>wild shape,</em> except her effective druid level is her druid level - 2. If she takes on the form of a flying animal, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-aerie_protector-in-the-wind-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-aerie_protector-in-the-wind-ex">In the Wind (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">The climb and fly speeds of forms the aerie protector assumes with her <em>wild shape</em> ability (if any) increase by 10 feet. The maneuverability of her flying forms improves by one category.</Pair>
</Ability>
</>};
const _ancient_guardian = {title: "Ancient Guardian", jsx: <><h2 id="arc-druid-ancient_guardian-ancient-guardian">Ancient Guardian</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 140</Link><br/>Ancient guardians revere nature and draw power from its divine energies, but also protect the customs, histories, and lore of their tribe and race. They act as ambassadors and protectors of the old ways, nurturing their tribe's growth and holding back civilization's corruptive influence.</p>
<Ability id="arc-druid-ancient_guardian-ancient-arms" icon={["broken-shield","hazard-sign"]}>
<Pair single id="arc-druid-ancient_guardian-ancient-arms">Ancient Arms</Pair>
<Pair hl title="Alters">Weapon proficiencies</Pair>
<Pair title="Info">An ancient guardian can't wield weapons made primarily of metal. She is proficient with only the <Link to="/eq-weapon/club">club</Link>, <Link to="/eq-weapon/dart">dart</Link>, <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, <Link to="/eq-weapon/sling">sling</Link>, and <Link to="/eq-weapon/spear">spear</Link>. She is also proficient with all natural attacks (claw, bite, and so forth) of any form she assumes with <em>wild shape.</em> Using a prohibited weapon renders her unable to cast druid spells or use any of her druid supernatural or spell-like class abilities while wielding the weapon and for 24 hours after ceasing to wield it.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-community-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-ancient_guardian-community-bond-ex">Community Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">An ancient guardian must choose the domain nature bond ability and select from the following domains: <Link to="/domain/community">Community</Link>, <Link to="/domain/healing">Healing</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/protection">Protection</Link>, or <Link to="/domain/repose">Repose</Link>.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-patience-of-nature-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-druid-ancient_guardian-patience-of-nature-ex">Patience of Nature (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="At 2nd Level">An ancient guardian adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/perform">Perform (oratory)</Link> (CHA), and <Link to="/skill/sense_motive">Sense Motive</Link> (WIS) to her list of class skills and gains an insight bonus equal to <Link to="/misc/half">half</Link> her druid level on such checks.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-ancient-ways-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-ancient_guardian-ancient-ways-ex">Ancient Ways (Ex)</Pair>
<Pair hl title="Replaces">Trackless step, woodland stride</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An ancient guardian increases any climb, fly, or swim speeds she has or gains via her <em>wild shape</em> ability by 10 feet.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-dispel-hostility-su" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-druid-ancient_guardian-dispel-hostility-su">Dispel Hostility (Su)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An ancient guardian can channel stored spell energy into a spell capable of dispelling hostile thoughts and strong emotions. She can "lose" a prepared spell in order to cast <Link to="/spell/calm_emotions">calm emotions</Link>. Instead of the normal Will saving throw for that spell, the DC of a <em>calm emotions</em> spell cast with this ability is 10 + 1/2 the ancient guardian's druid level + her Wisdom modifier.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-unimpeachable-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-ancient_guardian-unimpeachable-ex">Unimpeachable (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An ancient guardian gains a +4 bonus on saves against enchantments.</Pair>
</Ability>
<Ability id="arc-druid-ancient_guardian-undo-artifice-sp" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-druid-ancient_guardian-undo-artifice-sp">Undo Artifice (Sp)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">An ancient guardian gains the ability to reduce a nonliving item to its component raw materials. This acts as the spell <Link to="/spell/polymorph_any_object">polymorph any object</Link>, but works on magical or nonmagical nonliving objects. The duration is always permanent. Unlike <em>polymorph any object,</em> this ability can't be used to mimic the effects of other spells. Items subject to this effect receive a Fortitude saving throw to negate the effect (DC = 10 + 1/2 the ancient guardian's druid level + her Wisdom modifier). Magic items receive a circumstance bonus on this save equal to +1 for every 5,000 gp of the item's value. An ancient guardian can use <em>undo artifice</em> a number of times per day equal to her Wisdom modifier.</Pair>
</Ability>
</>};
const _ape_shaman = {title: "Ape Shaman", jsx: <><h2 id="arc-druid-ape_shaman-ape-shaman">Ape Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 42</Link><br/>A shaman with this totem calls upon the mighty ape, a peaceful but powerful simian whose strength is beyond compare. An ape shaman is a friendly protector of the forest, but will crush those enemies who rouse her anger.</p>
<Ability id="arc-druid-ape_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-ape_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">An ape shaman who chooses an animal companion must select an <Link to="/companion/ape">ape</Link> or related primate. If choosing a domain, the ape shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/community">Community</Link> (Family subdomain), <Link to="/domain/destruction">Destruction</Link> (Rage subdomain), and <Link to="/domain/strength">Strength</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-ape_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-ape_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">An ape shaman can use <em>wild empathy</em> with apes and other primates as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-ape_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-ape_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>An ape shaman may adopt an aspect of the ape while retaining her normal form. The druid gains one of the following sets of bonuses and abilities:</p>
<ul>
<li><strong>Movement</strong> (climb speed 20 ft., +4 racial bonus on Climb checks)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (2 slams [1d6 for a Medium shaman], +2 on combat maneuver checks to <Link to="/rule/grapple">grapple</Link>)</li>
<li><strong>Toughness</strong> (+2 natural armor bonus to AC, <Link to="/feat/endurance">Endurance</Link> feat)</li>
</ul>
<p>While using <em>totem transformation,</em> the ape shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (primates only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-ape_shaman-totemic-summons-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-ape_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">An ape shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon primates, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any primate to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-ape_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-ape_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An ape shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of an ape, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-ape_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-ape_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An ape shaman gains one of the following bonus feats: <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, and <Link to="/feat/toughness">Toughness</Link>.</Pair>
<Pair title="At 13th Level">The ape shaman gains another bonus feat from the list above.</Pair>
<Pair title="At 17th Level">The ape shaman gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _aquatic_druid = {title: "Aquatic Druid", jsx: <><h2 id="arc-druid-aquatic_druid-aquatic-druid">Aquatic Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 98</Link><br/>Shepherds of the lakes and seas, aquatic druids guard ecosystems ranging from shallows streams to deep ocean trenches, ministering to their residents and communing with the tides.</p>
<Ability id="arc-druid-aquatic_druid-wild-empathy-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-aquatic_druid-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">An aquatic druid's <em>wild empathy</em> functions only on creatures that have a swim speed or the aquatic or water subtype; however, she can improve the attitude of any such creature with Intelligence 2 or less regardless of type, including mindless creatures.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-aquatic-adaptation-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-aquatic_druid-aquatic-adaptation-ex">Aquatic Adaptation (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An aquatic druid gains an insight bonus on Initiative checks and Knowledge (geography), Perception, Stealth, Survival, and Swim checks equal to <Link to="/misc/half">half</Link> her druid level in aquatic terrain, and she cannot be tracked such environments.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-natural-swimmer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-aquatic_druid-natural-swimmer-ex">Natural Swimmer (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">An aquatic druid gains a swim speed equal to half her land speed.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-resist-oceans-fury-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-aquatic_druid-resist-oceans-fury-ex">Resist Ocean's Fury (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An aquatic druid gains a +4 bonus on saving throws against spells of the water type or the exceptional or supernatural abilities of creatures with the aquatic or water subtype.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-aquatic_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An aquatic druid gains <em>wild shape,</em> except that her effective druid level for the ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-seaborn-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="arc-druid-aquatic_druid-seaborn-ex">Seaborn (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">An aquatic druid gains the <Link to="/subtype/aquatic">aquatic</Link> subtype, the <Link to="/umr/amphibious">amphibious</Link> trait, and a swim speed equal to her land speed. She also can endure cold climate effects as if using <Link to="/spell/endure_elements">endure elements</Link>.</Pair>
</Ability>
<Ability id="arc-druid-aquatic_druid-deep-diver-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-aquatic_druid-deep-diver-ex">Deep Diver (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A aquatic druid gains DR/slashing or piercing equal to 1/2 her level. This damage reduction also applies against spells and spell-like abilities that inflict damage by grappling or crushing (e.g., <Link to="/spell/black_tentacles">black tentacles</Link>, <Link to="/spell/crushing_hand">crushing hand</Link>). She never takes <Link to="/rule/pressure_damage">pressure damage</Link> from deep water.</Pair>
</Ability>
</>};
const _arctic_druid = {title: "Arctic Druid", jsx: <><h2 id="arc-druid-arctic_druid-arctic-druid">Arctic Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 98</Link><br/>An arctic druid watches over the stark landscape of the far frozen reaches of the world, tending the stunted and rugged life that ekes out its survival in the least habitable climes.</p>
<Ability id="arc-druid-arctic_druid-arctic-native-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-arctic_druid-arctic-native-ex">Arctic Native (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">An arctic druid gains a bonus on Initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in cold or icy terrain, and she cannot be tracked in cold or icy terrain.</Pair>
</Ability>
<Ability id="arc-druid-arctic_druid-icewalking-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-arctic_druid-icewalking-ex">Icewalking (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An arctic druid suffers no penalty to speed or on Acrobatics, Climb, or Stealth checks in snowy or icy terrain or weather conditions and can walk across snow crusts or thin ice without breaking through.</Pair>
</Ability>
<Ability id="arc-druid-arctic_druid-arctic-endurance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-arctic_druid-arctic-endurance-ex">Arctic Endurance (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An arctic druid ignores the effects of a cold climate as if using <Link to="/spell/endure_elements">endure elements</Link>. She is also immune to being dazzled.</Pair>
</Ability>
<Ability id="arc-druid-arctic_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-arctic_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">An arctic druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-arctic_druid-snowcaster-su" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-druid-arctic_druid-snowcaster-su">Snowcaster (Su)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An arctic druid can see normally in ice storm, sleet storm, or similar natural snowstorms. In addition, she can prepare any druid spell with the fire subtype as a cold spell, with an identical effect but inflicting cold damage instead of fire damage.</Pair>
</Ability>
<Ability id="arc-druid-arctic_druid-flurry-form-ex" icon={["stairs-goal","upgrade","magic-swirl"]}>
<Pair single id="arc-druid-arctic_druid-flurry-form-ex">Flurry Form (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">An arctic druid can assume the form of a swirling column of snow equivalent to <Link to="/spell/gaseous_form">gaseous form</Link> at will. While in this form, she gains a circumstance bonus on Stealth checks made in cold terrain equal to her druid level.</Pair>
</Ability>
</>};
const _ashvawg_tamer = {title: "Ashvawg Tamer", jsx: <><h2 id="arc-druid-ashvawg_tamer-ashvawg-tamer">Ashvawg Tamer</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_5_sins_of_the_saviors">Pathfinder #5: Sins of the Saviors pg. 71</Link><br/>The ashvawg tamer is a variant class that allows a druid to bond with strange and monstrous creatures. Given the unusual nature of these companions, the tamer also learns ways to strengthen his valuable ally. Most tamers worship <Link to="/faith/lamashtu">Lamashtu</Link>, the Demon Queen, though a few have discovered these practices independently. Tamers develop a stronger bond with their companion than some of the most powerful druids or rangers, and often travel to exotic locations to find strange specimens to tame, with bragging rights going to those with the most unusual creature.</p>
<Ability icon={["skills"]} id="arc-druid-ashvawg_tamer-undefined">
<Pair id="arc-druid-ashvawg_tamer-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/intimidate">Intimidate</Link> (CHA), <Link to="/skill/knowledge_arcana">Knowledge (arcana)</Link> (INT)</Pair>
<Pair title="Removed Skills">Diplomacy, Heal</Pair></Ability>
<Ability id="arc-druid-ashvawg_tamer-bestial-bond-sp" icon={["remedy","armor-downgrade"]}>
<Pair single id="arc-druid-ashvawg_tamer-bestial-bond-sp">Bestial Bond (Sp)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">The druid can call out to savage powers of the wilds, entreating them to aid her and her companion. Doing so allows her to cast <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link>, or <Link to="/spell/remove_disease">remove disease</Link> on her animal companion as a spell-like ability by channeling the power of nature. The druid does not need to have these spells prepared as they come directly from the goddess. Using this ability, however, causes the druid to take 1d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link>. Any effect that prevents this Wisdom damage from occurring also prevents the use of this ability.</Pair>
</Ability>
<Ability id="arc-druid-ashvawg_tamer-variant-companion-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-ashvawg_tamer-variant-companion-ex">Variant Companion (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">The druid adds additional non-animals to her alternate list of <Link to="/ability/animal_companion">animal companions</Link>. If she chooses one of these creatures as an animal companion, she may use her <em>wild empathy</em> ability to influence the creature (even though it is not an animal and its intelligence may be above 2), though she takes a -4 penalty on this check. If the druid and the companion share a common language these checks are not needed. If the companion's intelligence is 3 or higher, the number of "tricks" the druid can teach it refers to the number of commands the creature understands regardless of language.</Pair>
<Pair title="At 1st Level"><Link to="/monster/darkmantle">Darkmantle</Link>, <Link to="/monster/krenshar">krenshar</Link>, <Link to="/monster/shocker_lizard">shocker lizard</Link>.</Pair>
<Pair title="At 4th Level">(Level - 3) <Link to="/monster/hippogriff">Hippogriff</Link></Pair>
<Pair title="At 10th Level">(Level - 9) <Link to="/monster/girallon">Girallon</Link>, <Link to="/monster/griffon">griffon</Link>, <Link to="/monster/owlbear">owlbear</Link>, <Link to="/monster/sea_cat">sea cat</Link></Pair>
<Pair title="At 13th Level">(Level - 12) <Link to="/monster/bulette">Bulette</Link>, <Link to="/monster/chimera">chimera</Link></Pair>
</Ability>
<Ability id="arc-druid-ashvawg_tamer-undying-bond-sp" icon={["upgrade"]}>
<Pair single id="arc-druid-ashvawg_tamer-undying-bond-sp">Undying Bond (Sp)</Pair>
<Pair hl title="Replaces">Daily use of <em>wild shape</em> at 6th level, venom immunity</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">The druid can use her <em>bestial bond</em> ability to cast <Link to="/spell/resurrection">resurrection</Link> on her animal companion.</Pair>
<Pair title="Special">Hereafter, the druid has one fewer daily use of the <em>wild shape</em> ability than a standard druid of her level.</Pair>
</Ability>
<Ability id="arc-druid-ashvawg_tamer-exotic-companion-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-ashvawg_tamer-exotic-companion-ex">Exotic Companion (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Info">The druid adds additional non-animals to her alternate list of animal companions, all of them with higher intelligence and strange shapes. It otherwise functions as the <em>variant companion</em> ability.</Pair>
<Pair title="At 7th Level">(Level - 6) <Link to="/monster/worg">Worg</Link></Pair>
<Pair title="At 10th Level">(Level - 9) <Link to="/monster/ettercap">Ettercap</Link>, <Link to="/monster/manticore">manticore</Link>, <Link to="/monster/minotaur">minotaur</Link>, <Link to="/monster/winter_wolf">winter wolf</Link></Pair>
<Pair title="At 13th Level">(Level - 12) <Link to="/monster/behir">Behir</Link>, <Link to="/monster/dragonne">dragonne</Link>, <Link to="/monster/hieracosphinx">hieracosphinx</Link></Pair>
</Ability>
<blockquote>
<p><em><strong className="hl">Note:</strong> This "alternate class" was created before the concept of archetypes was finalized by Paizo, and has been back-ported into archetype form. The original source lists the abilities being replaced, but does not specify what each is being replaced by.</em></p>
</blockquote>
</>};
const _bat_shaman = {title: "Bat Shaman", jsx: <><h2 id="arc-druid-bat_shaman-bat-shaman">Bat Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 42</Link><br/>The bat shaman's totem is the agile bat, flitting and turning with incredible speed through even the most convoluted mazes. Her enemies do not know when she will appear, and when she does, she strikes fast and hard before disappearing into the night.</p>
<Ability id="arc-druid-bat_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-bat_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A bat shaman who chooses an animal companion must select a <Link to="/companion/dire_bat">bat</Link>. If choosing a domain, the bat shaman must choose from <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/darkness">Darkness</Link> (Night subdomain), and <Link to="/domain/trickery">Trickery</Link> (Deception subdomain).</Pair>
</Ability>
<Ability id="arc-druid-bat_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-bat_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A bat shaman can use <em>wild empathy</em> with bats as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-bat_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-bat_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A bat shaman may adopt an aspect of the bat while retaining her normal form. The druid may select from the following sets of bonuses and abilities:</p>
<ul>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d4 for a Medium shaman])</li>
<li><strong>Senses</strong> (<Link to="/umr/blindsense">blindsense</Link> 20 ft.)</li>
</ul>
<p>While using <em>totem transformation,</em> the bat shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (bats only) at will.</p>
</Pair>
<Pair title="At 5th Level">The druid may select a new option: <strong>Movement</strong> (fly speed 30 ft. [average])</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-bat_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-bat_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A bat shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon bats, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any bat to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-bat_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-bat_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A bat shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a bat, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-bat_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-bat_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A bat shaman gains one of the following bonus feats: <Link to="/feat/acrobatic">Acrobatic</Link>, <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, or <Link to="/feat/skill_focus">Skill Focus</Link> (Perception).</Pair>
<Pair title="At 13th Level">The druid gains another bonus feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _bear_shaman = {title: "Bear Shaman", jsx: <><h2 id="arc-druid-bear_shaman-bear-shaman">Bear Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 102</Link><br/>A shaman with this focus calls upon the mighty bear, titan of the woodlands and mountains, a paragon of strength and ferocity, and yet also a quiet protector rich in wisdom.</p>
<Ability id="arc-druid-bear_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-bear_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A bear shaman who chooses an animal companion must select a <Link to="/companion/bear">bear</Link>. If choosing a domain, the bear shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/protection">Protection</Link>, and <Link to="/domain/strength">Strength</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-bear_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-bear_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A bear shaman can use <em>wild empathy</em> with bears and wolverines as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-bear_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-bear_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A bear shaman may adopt an aspect of the bear while retaining her normal form. She gains one of the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (+10 enhancement bonus to land speed, +4 racial bonus on Swim checks)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong>Toughness</strong> (+2 natural armor bonus to AC, <Link to="/feat/endurance">Endurance</Link> feat)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d6] and 2 claws [1d4] for a Medium shaman, +2 to CMB on grapple checks).</li>
</ul>
<p>While using <em>totem transformation,</em> the bear shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (mammals only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-bear_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-bear_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A bear shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon bears, and summoned bears gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any bear to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-bear_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-bear_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A bear shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a bear, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-bear_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-bear_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A bear shaman gains one of the following bonus feats: <Link to="/feat/diehard">Diehard</Link>, Endurance, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>, <Link to="/feat/toughness">Toughness</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _blight_druid = {title: "Blight Druid", jsx: <><h2 id="arc-druid-blight_druid-blight-druid">Blight Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 98</Link><br/>The devoted servants of nature corrupted, ruined, and destroyed, blight druids are the caretakers of lands ravaged by natural disaster. While some are devoted to reforming and reclaiming lands despoiled by the ravages of civilization, others seek out the more rapacious violence inherent in nature and feed the creeping rot and decay that brings an end to all things.</p>
<Ability id="arc-druid-blight_druid-nature-bond-ex" icon={["broken-shield","stairs-goal"]}>
<Pair single id="arc-druid-blight_druid-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A blight druid may not bond with an animal companion, but may either call a <Link to="/sidekick/familiar">familiar</Link> as a <Link to="/class/wizard">wizard</Link> of her druid level or select from the <Link to="/domain/darkness">Darkness</Link>, <Link to="/domain/death">Death</Link>, and <Link to="/domain/destruction">Destruction</Link> domains in addition to those normally available.</Pair>
</Ability>
<Ability id="arc-druid-blight_druid-vermin-empathy-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-blight_druid-vermin-empathy-su">Vermin Empathy (Su)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A blight druid can improve the attitude of vermin as a normal druid can with animals. Vermin have a starting attitude of unfriendly. The blight druid can also improve the attitude of animals and mindless undead creatures that were formerly animals, but she takes a -4 penalty on the check unless the animal or undead has a disease special attack.</Pair>
</Ability>
<Ability id="arc-druid-blight_druid-miasma-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-druid-blight_druid-miasma-ex">Miasma (Ex)</Pair>
<Pair hl title="Replaces">Trackless step, resist nature's lure</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">If a blight druid is adjacent to a creature at the beginning of its turn, the creature must succeed at a Fortitude save with a DC of 10 + <Link to="/misc/half">half</Link> the druid's level + the druid's Wisdom modifier or become <Link to="/misc/sickened">sickened</Link> for 1 round. A creature of the animal, fey, or plant type that fails its save is <Link to="/misc/nauseated">nauseated</Link> for 1 round and sickened for 1 minute thereafter. If the creature makes its save, it is immune to this effect for 24 hours, as are creatures immune to disease.</Pair>
</Ability>
<Ability id="arc-druid-blight_druid-blightblooded-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-blight_druid-blightblooded-ex">Blightblooded (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A blight druid gains immunity to all diseases, including natural and supernatural diseases. She also becomes immune to effects that would cause her to become sickened or nauseated.</Pair>
</Ability>
<Ability id="arc-druid-blight_druid-plaguebearer-su" icon={["armor-downgrade"]}>
<Pair single id="arc-druid-blight_druid-plaguebearer-su">Plaguebearer (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">Any creature that strikes a blight druid with a touch attack, unarmed strike, or natural weapon must succeed at a Fortitude save with a DC of 10 + 1/2 the druid's level + the druid's Wisdom modifier or contract a disease, as the <Link to="/spell/contagion">contagion</Link> spell. If the creature makes its save, it is immune to this effect for 24 hours.</Pair>
</Ability>
</>};
const _boar_shaman = {title: "Boar Shaman", jsx: <><h2 id="arc-druid-boar_shaman-boar-shaman">Boar Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 43</Link><br/>A boar shaman chooses the stolid and ferocious boar as her totem. Content to be left alone, she becomes one of the most dangerous creatures of the wild when provoked.</p>
<Ability id="arc-druid-boar_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-boar_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A boar shaman who chooses an animal companion must select a <Link to="/companion/boar">boar</Link>. If choosing a domain, the boar shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link> (Rage), <Link to="/domain/protection">Protection</Link>, and <Link to="/domain/strength">Strength</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-boar_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-boar_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A boar shaman can use <em>wild empathy</em> with porcine creatures as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-boar_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-boar_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A boar shaman may adopt an aspect of the boar while retaining her normal form. The druid may select from the following sets of bonuses and abilities:</p>
<ul>
<li><strong>Movement</strong> (+10 enhancement bonus to land speed)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (gore [1d8 for a Medium druid], +2 on combat maneuver checks to overrun)</li>
<li><strong>Toughness</strong> (+2 natural armor bonus to AC, <Link to="/feat/endurance">Endurance</Link> feat).</li>
</ul>
<p>While using <em>totem transformation,</em> the boar shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (boars and related animals only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-boar_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-boar_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A boar shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon <Link to="/monster/boar">boars</Link> or other porcine creatures, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any porcine summon to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-boar_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-boar_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A boar shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a boar, she instead uses her druid level +2.</Pair>
</Ability>
<Ability id="arc-druid-boar_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-boar_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A boar shaman gains one of the following bonus feats: <Link to="/feat/bleeding_critical">Bleeding Critical</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/diehard">Diehard</Link>, or <Link to="/feat/improved_overrun">Improved Overrun</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _cave_druid = {title: "Cave Druid", jsx: <><h2 id="arc-druid-cave_druid-cave-druid">Cave Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 99</Link><br/>Far from the green fields of the world above lies a lightless expanse beneath the surface. This darkling fairyland is not without beauty and natural wonders of its own, and a few druids seek to preserve this hidden realm and purge it of the fell horrors that creep up from below.</p>
<Ability id="arc-druid-cave_druid-cavesense-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-druid-cave_druid-cavesense-ex">Cavesense (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">A cave druid adds <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT) rather than Knowledge (geography) as a class skill and gains a +2 bonus on Knowledge (dungeoneering) and Survival skill checks.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-nature-bond" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-druid-cave_druid-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A cave druid may select the <Link to="/domain/darkness">Darkness</Link> domain in addition to the choices normally allowed, but may not select the Air or Weather domains.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-wild-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-cave_druid-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A cave druid can influence oozes, rather than magical beasts, with a -4 penalty on her <em>wild empathy</em> check.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-tunnelrunner-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-cave_druid-tunnelrunner-ex">Tunnelrunner (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A cave druid can move through areas of rubble or narrow passages that require <Link to="/misc/squeezing">squeezing</Link> at her normal movement rate and without penalty.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-lightfoot-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-cave_druid-lightfoot-ex">Lightfoot (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A cave druid cannot be detected with <Link to="/umr/tremorsense">tremorsense</Link>.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-resist-subterranean-corruption-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-cave_druid-resist-subterranean-corruption-ex">Resist Subterranean Corruption (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A cave druid gains a +2 bonus on saves against exceptional, supernatural, and spell-like abilities of oozes and aberrations.</Pair>
</Ability>
<Ability id="arc-druid-cave_druid-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-cave_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A cave druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2. She cannot use <em>wild shape</em> to adopt a plant form.</Pair>
<Pair title="At 10th Level">The cave druid can assume the form of a Small or Medium ooze as if using <Link to="/spell/beast_shape_iii">beast shape III</Link>.</Pair>
<Pair title="At 12th Level">The druid can assume the form of a Tiny or Large ooze as if using <Link to="/spell/beast_shape_iv">beast shape IV</Link> (treating the ooze as if it were a magical beast without a natural armor bonus).</Pair>
<Pair title="Special">When in ooze form, the cave druid has no discernible anatomy and is immune to poison, sneak attacks, and critical hits.</Pair>
</Ability>
</>};
const _death_druid = {title: "Death Druid", jsx: <><h2 id="arc-druid-death_druid-death-druid">Death Druid</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 50</Link><br/>Some druids believe that birth and death are the most important parts of the natural cycle. They focus on destroying undead and putting troubled souls to rest.</p>
<Ability id="arc-druid-death_druid-phantom" icon={["stairs-goal"]}>
<Pair single id="arc-druid-death_druid-phantom">Phantom</Pair>
<Pair hl title="Replaces">Nature bond, wild shape</Pair>
<Pair title="Passive Ability">A death druid attracts phantoms like a <Link to="/class/spiritualist">spiritualist</Link>, though she focuses her efforts on putting those phantoms to rest. A death druid is continually attempting to figure out how to send her <Link to="/sidekick/phantom">phantom</Link> to the afterlife (usually by completing the phantom's unfinished business as determined by the GM). If she is able to do so, she gains a new phantom with no additional effort on her part, sometime during the next week.</Pair>
<Pair title="At 1st Level">She gains the spiritualist's <em>phantom</em> and <em>etheric tether</em> class features.</Pair>
<Pair title="At 4th Level">She gains the <em>bonded manifestation</em> class feature.</Pair>
<Pair title="At 14th Level">She gains the <em>spiritual bond</em> class feature.</Pair>
<Pair title="Special">She does not gain any of the other spiritualist abilities related to phantoms. The death druid treats her druid level as her spiritualist level for these abilities.</Pair>
</Ability>
<Ability id="arc-druid-death_druid-soul-magic" icon={["spell-book"]}>
<Pair single id="arc-druid-death_druid-soul-magic">Soul Magic</Pair>
<Pair hl title="Replaces">Nature sense, wild empathy</Pair>
<Pair title="Info">A death druid adds the following spells to her druid spell list at the given spell levels.</Pair>
<Pair plain title="0"><Link to="/spell/grave_words">Grave words</Link></Pair>
<Pair plain title="1st"><Link to="/spell/sanctify_corpse">Sanctify corpse</Link></Pair>
<Pair plain title="2nd"><Link to="/spell/calm_spirit">Calm spirit</Link>, <Link to="/spell/false_life">false life</Link>, <Link to="/spell/ghostbane_dirge">ghostbane dirge</Link>, <Link to="/spell/spiritual_weapon">spiritual weapon</Link></Pair>
<Pair plain title="3rd"><Link to="/spell/speak_with_dead">Speak with dead</Link></Pair>
<Pair plain title="4th"><Link to="/spell/speak_with_haunt">Speak with haunt</Link>, <Link to="/spell/spiritual_ally">spiritual ally</Link></Pair>
<Pair plain title="5th"><Link to="/spell/breath_of_life">Breath of life</Link>, <Link to="/spell/call_spirit">call spirit</Link>, <Link to="/spell/mass_ghostbane_dirge">mass ghostbane dirge</Link></Pair>
<Pair plain title="6th"><Link to="/spell/circle_of_death">Circle of death</Link>, <Link to="/spell/undeath_to_death">undeath to death</Link></Pair>
</Ability>
<Ability id="arc-druid-death_druid-resist-deaths-call-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-death_druid-resist-deaths-call-ex">Resist Death's Call (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A death druid gains a +4 bonus on saving throws against death effects, negative energy, and energy drain.</Pair>
</Ability>
<Ability id="arc-druid-death_druid-negative-immunity-su" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-death_druid-negative-immunity-su">Negative Immunity (Su)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A death druid is immune to negative energy and energy drain.</Pair>
</Ability>
</>};
const _defender_of_the_true_world = {title: "Defender of the True World", jsx: <><h2 id="arc-druid-defender_of_the_true_world-defender-of-the-true-world">Defender of the True World</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 10</Link><br/>Some druids specialize in protecting Golarion from the threat of First World inhabitants. They are devoted to tracking down, diverting, and slaying fey threats.</p>
<Ability icon={["skills"]} id="arc-druid-defender_of_the_true_world-undefined">
<Pair id="arc-druid-defender_of_the_true_world-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/diplomacy">Diplomacy</Link> (CHA)</Pair></Ability>
<Ability id="arc-druid-defender_of_the_true_world-bonus-languages" icon={["stairs-goal"]}>
<Pair single id="arc-druid-defender_of_the_true_world-bonus-languages">Bonus Languages</Pair>
<Pair title="Info">A defender of the true world can select Aklo, Sylvan, or Undercommon as bonus languages, in addition to the normal list of bonus languages available.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-enemy-of-the-first-world" icon={["broken-shield"]}>
<Pair single id="arc-druid-defender_of_the_true_world-enemy-of-the-first-world">Enemy of the First World</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Info">A defender of the true world cannot use <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon fey creatures.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-fey-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-defender_of_the_true_world-fey-empathy-ex">Fey Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Passive Ability">A defender of the true world gains a competence bonus on Bluff, Diplomacy, and Intimidate checks when interacting with fey creatures. This bonus is equal to 2 + <Link to="/misc/one_fourth">one-fourth</Link> of her druid level.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-fey-stalker-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-defender_of_the_true_world-fey-stalker-ex">Fey Stalker (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">The defender of the true world's animal companion and any creatures she summons with <em>summon nature's ally</em> gain a +1 morale bonus on attack and damage rolls against fey creatures.</Pair>
<Pair title="At 8th Level">The bonus becomes +2.</Pair>
<Pair title="At 13th Level">The bonus increases to +3.</Pair>
<Pair title="At 18th Level">The bonus becomes +4.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-feybane-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-defender_of_the_true_world-feybane-ex">Feybane (Ex)</Pair>
<Pair hl title="Alters">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A defender of the true world doesn't gain a bonus on saving throws against spells and effects that utilize or target plants. She instead treats her natural attacks as cold iron for the purpose of overcoming damage reduction, and she gains a +2 bonus on caster level checks to overcome the spell resistance of fey creatures.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-beguiling-immunity-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-defender_of_the_true_world-beguiling-immunity-ex">Beguiling Immunity (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A defender of the true world becomes immune to the mind-affecting effects of fey.</Pair>
</Ability>
<Ability id="arc-druid-defender_of_the_true_world-first-world-deceiver-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-defender_of_the_true_world-first-world-deceiver-su">First World Deceiver (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A defender of the true world gains the ability to change her appearance as per <Link to="/spell/alter_self">alter self</Link>, except she can take the form of a humanoid or fey creature. Her base land speed from this ability cannot exceed 60 feet.</Pair>
</Ability>
</>};
const _desert_druid = {title: "Desert Druid", jsx: <><h2 id="arc-druid-desert_druid-desert-druid">Desert Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 99</Link><br/>Not all climates are verdant paradises, but even in the sere deserts there is life - though often hidden from the sun and rarely friendly - and raw, desolate beauty. Here desert druids come to pay homage, protect and maintain the few habitable locales, and witness nature's majesty in all its burning, merciless glory.</p>
<Ability id="arc-druid-desert_druid-desert-native-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-desert_druid-desert-native-ex">Desert Native (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A desert druid gains a bonus on Initiative checks and Knowledge (geography), Perception, Stealth, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in desert terrain, and she cannot be tracked in such environments.</Pair>
</Ability>
<Ability id="arc-druid-desert_druid-sandwalker-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-desert_druid-sandwalker-ex">Sandwalker (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A desert druid suffers no penalty to speed or on Acrobatics or Stealth checks when moving through sandy or desert terrain.</Pair>
</Ability>
<Ability id="arc-druid-desert_druid-desert-endurance-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="arc-druid-desert_druid-desert-endurance-ex">Desert Endurance (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A desert druid ignores the effects of a hot climate as if using <Link to="/spell/endure_elements">endure elements</Link>. She also has a reduced need to eat and drink, as if wearing a <Link to="/magic-ring/ring_of_sustenance">ring of sustenance</Link> (though normal sleep is still required).</Pair>
</Ability>
<Ability id="arc-druid-desert_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-desert_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A desert druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2. A desert druid cannot use <em>wild shape</em> to adopt a plant form.</Pair>
<Pair title="At 10th Level">She can assume the form of a Small or Medium vermin.</Pair>
<Pair title="At 12th Level">She can take the form of a Tiny or Large vermin.</Pair>
<Pair title="At 14th Level">She can assume the form of a Diminutive or Huge vermin.</Pair>
<Pair title="Special">Starting at 10th level, this effect functions as <Link to="/spell/beast_shape_iv">beast shape IV</Link> (treating the vermin as an animal to determine its ability and natural armor modifiers).</Pair>
</Ability>
<Ability id="arc-druid-desert_druid-shaded-vision-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-desert_druid-shaded-vision-ex">Shaded Vision (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A desert druid becomes immune to blinding and dazzling effects and gains a +2 bonus on saving throws against <Link to="/umr/gaze">gaze</Link> attacks and illusions of the figment and pattern subschools.</Pair>
</Ability>
<Ability id="arc-druid-desert_druid-dunemeld-ex" icon={["stairs-goal","upgrade","magic-swirl"]}>
<Pair single id="arc-druid-desert_druid-dunemeld-ex">Dunemeld (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A desert druid can assume the form of a swirling mass of sand at will. This is equivalent to <Link to="/spell/gaseous_form">gaseous form</Link>, but the druid gains a land and burrow speed of 10 feet rather than a fly speed. While in this form, the druid gains a circumstance bonus on Stealth checks made in desert terrain equal to her druid level.</Pair>
</Ability>
</>};
const _devolutionist = {title: "Devolutionist", jsx: <><h2 id="arc-druid-devolutionist-devolutionist">Devolutionist</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 50</Link><br/>Full of simmering hatred toward civilization and those who dwell within it, devolutionists believe that the world would be better off without any sentient life at all. They transform intelligent creatures and domesticated animals into throwbacks to their feral ancestors.</p>
<Ability id="arc-druid-devolutionist-devolved-companion-ex" icon={["info"]}>
<Pair single id="arc-druid-devolutionist-devolved-companion-ex">Devolved Companion (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A devolutionist must choose a devolved humanoid as an animal companion for her <em>nature bond.</em> Use the stats for an <Link to="/companion/ape">ape</Link> animal companion.</Pair>
<Pair title="At 4th Level">The devolved humanoid doesn't increase to size Large (it still gains all the other benefits at 4th level).</Pair>
</Ability>
<Ability id="arc-druid-devolutionist-undomesticate-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-devolutionist-undomesticate-su">Undomesticate (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A devolutionist can spend 1 minute with a willing or restrained domesticated animal to undo the effects of domestication, transforming it into a wild animal and causing it to lose any tricks it knew. The animal no longer recognizes any humanoids as friends or allies and gladly tears former playmates apart for food. Handle Animal checks don't work on an undomesticated creature, though <em>wild empathy</em> does.</Pair>
<Pair title="Special">This ability doesn't function on animal companions, special mounts, or the like, and other exceptional domesticated animals can attempt a Will save (DC = 10 + <Link to="/misc/half">half</Link> the devolutionist's druid level + her Wisdom modifier) to negate the effect and become immune to it for 24 hours. Though this ability is instantaneous, <Link to="/spell/break_enchantment">break enchantment</Link>, <Link to="/spell/limited_wish">limited wish</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> can reverse the effects.</Pair>
</Ability>
<Ability id="arc-druid-devolutionist-devolution-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-devolutionist-devolution-sp">Devolution (Sp)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability"><p>A devolutionist can perform a 24-hour ritual to irrevocably transform a humanoid or animal into a devolved feral state. There is no saving throw, but the target must be present and stay relatively still for the entire ritual, which typically requires a willing or restrained target. An affected humanoid's Intelligence score is instantly reduced to 2; its type changes to <Link to="/type/animal">animal</Link>; it loses all spellcasting and abilities that require intelligence; it can't wield manufactured weapons; it gains two <Link to="/umr/natural_attacks">claw attacks</Link> and a bite attack (all dealing 1d4 points of damage for a Medium humanoid or 1d3 for Small humanoids); and it can't use skills other than Acrobatics, Climb, Escape Artist, Fly, Intimidate, Perception, Stealth, Survival, and Swim.</p>
<p>An affected animal is <em>undomesticated</em> (see above) if applicable and then either gains the <Link to="/template/advanced">advanced</Link> template, except without any increases to mental ability scores, or becomes a dire version of the animal (if a dire version exists and at the GM's discretion). The devolved creature starts out friendly toward the devolutionist, though it typically tries to kill and devour other sentient humanoids. The devolutionist has no special empathy or connection with a creature she devolves, and if it was her animal companion before, it ceases to be so. The druid can communicate her desires to a devolved creature using <em>wild empathy.</em></p>
</Pair>
<Pair title="Special">This ability counters and dispels <Link to="/spell/awaken">awaken</Link>, and only <em>awaken, miracle,</em> or <em>wish</em> can reverse it.</Pair>
</Ability>
</>};
const _dinosaur_druid = {title: "Dinosaur Druid", jsx: <><h2 id="arc-druid-dinosaur_druid-dinosaur-druid">Dinosaur Druid</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 47</Link><br/>A dinosaur druid speaks for the spirit of prehistoric nature, even taking the form of great beasts of legend.</p>
<Ability id="arc-druid-dinosaur_druid-summon-dinosaur-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-dinosaur_druid-summon-dinosaur-sp">Summon Dinosaur (Sp)</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability"><p>A dinosaur druid can summon a wide range of dinosaurs and related prehistoric beasts using <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells. She adds the following options to these spells when using <em>spontaneous casting</em> to cast such a spell.</p>
<div className="hanging">
<p><strong className="hl"><em>Summon Nature's Ally I:</em></strong> <Link to="/monster/compsognathus">Compsognathus</Link></p><p><strong className="hl"><em>Summon Nature's Ally II:</em></strong> <Link to="/monster/dimorphodon">Dimorphodon</Link>, <Link to="/monster/troodon">troodon</Link></p><p><strong className="hl"><em>Summon Nature's Ally III:</em></strong> <Link to="/monster/plesiosaurus">Plesiosaurus</Link>, <Link to="/monster/velociraptor">velociraptor</Link></p><p><strong className="hl"><em>Summon Nature's Ally IV:</em></strong> <Link to="/monster/dimetrodon">Dimetrodon</Link>, <Link to="/monster/pachycephalosaurus">pachycephalosaurus</Link>, <Link to="/monster/parasaurolophus">parasaurolophus</Link></p><p><strong className="hl"><em>Summon Nature's Ally V:</em></strong> <Link to="/monster/amargasaurus">Amargasaurus</Link>, <Link to="/monster/ceratosaurus">ceratosaurus</Link>, <Link to="/monster/iguanodon">iguanodon</Link>, <Link to="/monster/kentrosaurus">kentrosaurus</Link>, <Link to="/monster/styracosaurus">styracosaurus</Link></p><p><strong className="hl"><em>Summon Nature's Ally VI:</em></strong> <Link to="/monster/allosaurus">Allosaurus</Link>, <Link to="/monster/quetzalcoatlus">quetzalcoatlus</Link>, <Link to="/monster/tylosaurus">tylosaurus</Link></p><p><strong className="hl"><em>Summon Nature's Ally VII:</em></strong> <Link to="/monster/therizinosaurus">Therizinosaurus</Link></p><p><strong className="hl"><em>Summon Nature's Ally VIII:</em></strong> <Link to="/monster/diplodocus">Diplodocus</Link>, <Link to="/monster/spinosaurus">spinosaurus</Link></p><p><strong className="hl"><em>Summon Nature's Ally IX:</em></strong> <Link to="/monster/giganotosaurus">Giganotosaurus</Link></p></div>
</Pair>
</Ability>
<Ability id="arc-druid-dinosaur_druid-dinosaur-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-dinosaur_druid-dinosaur-bond-ex">Dinosaur Bond (Ex)</Pair>
<Pair hl title="Alters">Nature's bond</Pair>
<Pair title="Choice">A dinosaur druid must choose an animal companion as her <em>nature's bond,</em> and the animal companion must be a <Link to="/family/dinosaur">dinosaur</Link>.</Pair>
</Ability>
<Ability id="arc-druid-dinosaur_druid-dinosaur-shape-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-druid-dinosaur_druid-dinosaur-shape-su" flavor={<>A dinosaur druid specializes in assuming the form of dinosaurs when using <em>wild shape.</em></>}>Dinosaur Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Ability">When she assumes the form of a dinosaur via <em>wild shape,</em> she gains a +2 size bonus to her Constitution in addition to the other modifiers granted by <em>beast shape.</em> When she uses <em>wild shape</em> to assume the form of a creature other than a dinosaur, the <em>wild shape</em> effect lasts for only 1 minute per level, rather than 1 hour per level.</Pair>
</Ability>
<Ability id="arc-druid-dinosaur_druid-primeval-voice-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-dinosaur_druid-primeval-voice-su">Primeval Voice (Su)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A dinosaur druid gains the ability to speak with dinosaurs (as per <Link to="/spell/speak_with_animals">speak with animals</Link>) at all times.</Pair>
</Ability>
</>};
const _draconic_druid = {title: "Draconic Druid", jsx: <><h2 id="arc-druid-draconic_druid-draconic-druid">Draconic Druid</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 24</Link><br/>Some druids believe that dragons are the ultimate expression of nature, combining elemental fury with majestic beauty. These druids consort with dragons and eventually transform into draconic forms.</p>
<Ability id="arc-druid-draconic_druid-drake-companion" icon={["stairs-goal"]}>
<Pair single id="arc-druid-draconic_druid-drake-companion">Drake Companion</Pair>
<Pair hl title="Replaces">Nature bond, wild empathy, woodland stride, venom immunity, a thousand faces, timeless body</Pair>
<Pair title="Ability">A draconic druid gains a <Link to="/sidekick/drake">drake companion</Link> instead of an animal companion.</Pair>
</Ability>
<Ability id="arc-druid-draconic_druid-dragon-sense" icon={["upgrade"]}>
<Pair single id="arc-druid-draconic_druid-dragon-sense" flavor="A draconic druid studies dragons and their history.">Dragon Sense</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Passive Ability">She gains a +2 bonus on Knowledge (arcana) and Knowledge (history) checks.</Pair>
</Ability>
<Ability id="arc-druid-draconic_druid-resist-dragons-might" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-draconic_druid-resist-dragons-might">Resist Dragon's Might</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Passive Ability">A draconic druid gains a +4 bonus on saving throws against the spells, spell-like abilities, and supernatural abilities of dragons.</Pair>
</Ability>
<Ability id="arc-druid-draconic_druid-dragon-shape" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-draconic_druid-dragon-shape">Dragon Shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A draconic druid can't use <em>wild shape</em> to change into any of the usual forms available to a druid. Instead, she can use <em>wild shape</em> to change into a dragon-scaled version of herself with long fangs, gaining a +1 natural armor bonus to her AC and a <Link to="/umr/natural_attack">bite attack</Link> appropriate for her size (1d6 points of damage for a Medium druid) but otherwise retaining her usual form.</Pair>
<Pair title="At 10th Level">She can spend two uses of <em>wild shape</em> to transform into a Medium dragon as per <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>.</Pair>
<Pair title="At 12th Level">She can spend two uses to change into a Large dragon as per <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>.</Pair>
<Pair title="Special">Each time that a draconic druid uses <em>wild shape</em> counts as a separate casting of the <em>form of the dragon</em> spell for the purpose of refreshing her uses of her breath weapon.</Pair>
</Ability>
</>};
const _dragon_shaman = {title: "Dragon Shaman", jsx: <><h2 id="arc-druid-dragon_shaman-dragon-shaman">Dragon Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 37</Link><br/>Your totem is the legendary dragon, fearsome and deadly yet cunning and wise, a creature born of pure magic and raw elemental fury, bound within a shell of fangs, claws, and scales that few dare to challenge. Though your initial focus is on dragons' mundane cousins, as your powers grow you become attuned to actual dragons.</p>
<Ability id="arc-druid-dragon_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-dragon_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A dragon shaman who chooses an animal companion must select a <Link to="/companion/crocodile">crocodile</Link> or <Link to="/companion/monitor_lizard">monitor lizard</Link>. If choosing a domain, the dragon shaman must choose from the <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, <Link to="/domain/earth">Earth</Link>, <Link to="/domain/fire">Fire</Link>, <Link to="/domain/war">War</Link>, and <Link to="/domain/water">Water</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-dragon_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A dragon shaman can use her <em>wild empathy</em> ability with lizards as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-dragon_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A dragon shaman may adopt an aspect of the dragon while retaining her normal form. She gains one of the following bonuses:</p>
<ul>
<li><strong>Senses</strong> (low-light vision, +4 racial bonus to Perception)</li>
<li><strong>Toughness</strong> (+2 natural armor bonus to AC, <Link to="/feat/endurance">Endurance</Link> feat)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d6] and 2 claws [1d4] for a Medium shaman, +2 bonus on CMB on grapple checks).</li>
</ul>
<p>While using <em>totem transformation,</em> the dragon shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (lizards only) at will.</p>
</Pair>
<Pair title="At 5th Level">The druid may select a new option: <strong>Movement</strong> (fly speed 30 ft. [average])</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-dragon_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A dragon shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon lizards, and summoned lizards gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> to any lizard to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-dragon_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A dragon shaman gains <em>wild shape,</em> but the ability functions at her druid level - 4. If she takes on the form of a lizard, she instead uses her unmodified druid level.</Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-dragon-bite-su" icon={["mailed-fist"]}>
<Pair single id="arc-druid-dragon_shaman-dragon-bite-su">Dragon Bite (Su)</Pair>
<Pair hl title="Replaces">The additional use of <em>wild shape</em> at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">A dragon shaman's bite attack (whether using <em>totem transformation</em> or <em>wild shape</em> to take the form of a lizard) deals +1d6 points of energy damage (acid, cold, electricity, or fire). She chooses what kind of energy damage that she deals each time she bites.</Pair>
</Ability>
<Ability id="arc-druid-dragon_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-dragon_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A dragon shaman gains one of the following bonus feats: <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/magical_aptitude">Magical Aptitude</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Knowledge [arcana]), and <Link to="/feat/spell_penetration">Spell Penetration</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _drovier = {title: "Drovier", jsx: <><h2 id="arc-druid-drovier-drovier">Drovier</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 6</Link><br/>Droviers view their allies and adventuring companions as a herd or pack to be protected and directed, with variations on that theme ranging from culture to culture. The orcs of Belkzen see droviers as alpha predators, offering tribal warriors totemic power in exchange for obedience in combat. The elves of the Mwangi Expanse regard them as spokespeople for the jungle, adopting aspects that help preserve and defend the land.</p>
<Ability id="arc-druid-drovier-natures-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-drovier-natures-bond-ex">Nature's Bond (Ex)</Pair>
<Pair hl title="Alters">Nature's bond</Pair>
<Pair title="Info">A drovier must take the <Link to="/domain/animal">Animal</Link> domain with this ability, or the <Link to="/druiddomain/eagle">Eagle</Link> or <Link to="/druiddomain/wolf">Wolf</Link> animal domains.</Pair>
</Ability>
<Ability id="arc-druid-drovier-communal-aspect-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-drovier-communal-aspect-su" flavor="A drovier can imbue her allies (including herself) with an aspect of a wild animal.">Communal Aspect (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">10 minutes per druid level per day; these minutes need not be consecutive, but they must be spent in 10-minute increments</Pair>
<Pair title="Standard Action">She chooses an animal totem and grants the abilities of that totem to every ally within 30 feet. This otherwise functions like the spell <Link to="/spell/animal_aspect">animal aspect</Link>. If she uses the ability to grant a new aspect, any previous aspect immediately ends.</Pair>
<Pair title="At 6th Level">The drovier's communal aspect ability grants the benefits of the spell <Link to="/spell/greater_animal_aspect">greater animal aspect</Link>. The drovier can still choose only one aspect to grant her allies.</Pair>
<Pair title="At 8th Level">The drovier can choose to grant her allies the benefits of the spell <Link to="/spell/aspect_of_the_falcon">aspect of the falcon</Link> instead of an animal aspect.</Pair>
<Pair title="At 10th Level">The drovier can choose to grant her allies the benefits of the spell <Link to="/spell/aspect_of_the_bear">aspect of the bear</Link> instead of an animal aspect.</Pair>
<Pair title="At 12th Level">The drovier can choose to grant her allies the benefits of the spell <Link to="/spell/aspect_of_the_stag">aspect of the stag</Link> instead of an animal aspect.</Pair>
<Pair title="At 14th Level">The drovier can choose to grant her allies the benefits of the spell <Link to="/spell/aspect_of_the_wolf">aspect of the wolf</Link> rather than an animal aspect.</Pair>
<Pair title="At 20th Level">The drovier can use this ability at will.</Pair>
</Ability>
</>};
const _eagle_shaman = {title: "Eagle Shaman", jsx: <><h2 id="arc-druid-eagle_shaman-eagle-shaman">Eagle Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 102</Link><br/>A shaman with this totem calls upon the noble eagle, stern and proud, soaring high above the world with keen and pitiless eyes that miss nothing.</p>
<Ability id="arc-druid-eagle_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-eagle_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">An eagle shaman who chooses an animal companion must select a <Link to="/companion/bird">bird (eagle)</Link>. If choosing a domain, the eagle shaman must choose from the <Link to="/domain/air">Air</Link>, <Link to="/domain/animal">Animal</Link>, <Link to="/domain/nobility">Nobility</Link>, and <Link to="/domain/weather">Weather</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-eagle_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-eagle_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">An eagle shaman can use <em>wild empathy</em> with birds as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-eagle_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-eagle_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>An eagle shaman may adopt an aspect of the eagle while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Senses</strong> (low-light vision, +4 racial bonus to Perception)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d4], 2 talons [1d4] for a Medium shaman)</li>
</ul>
<p>While using <em>totem transformation,</em> the eagle shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (birds only) at will.</p>
</Pair>
<Pair title="At 5th Level">The druid may select a new option: <strong>Movement</strong> (fly speed 30 ft. [average])</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-eagle_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-eagle_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">An eagle shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon <Link to="/monster/eagle">eagles</Link>, <Link to="/monster/roc">rocs</Link>, and <Link to="/monster/giant_eagle">giant eagles</Link> (added to the 4th-level list), and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any eagle or roc to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-eagle_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-eagle_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">An eagle shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of an eagle or roc, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-eagle_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-eagle_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">An eagle shaman gains one of the following bonus feats: <Link to="/feat/flyby_attack">Flyby Attack</Link>, <Link to="/feat/improved_lightning_reflexes">Improved Lightning Reflexes</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Perception), or <Link to="/feat/wind_stance">Wind Stance</Link>.</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _elemental_ally = {title: "Elemental Ally", jsx: <><h2 id="arc-druid-elemental_ally-elemental-ally">Elemental Ally</h2>
<p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 16</Link><br/>An elemental ally is a druid who has crafted powerful bonds of trust and friendship with one ally from each of the four primary elemental planes. Elemental allies are most common in Qadira, where they are considered similar to genie-binders.</p>
<Ability id="arc-druid-elemental_ally-elemental-eidolons" icon={["stairs-goal"]}>
<Pair single id="arc-druid-elemental_ally-elemental-eidolons">Elemental Eidolons</Pair>
<Pair hl title="Replaces">Nature's bond, wild shape</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability"><p>An elemental ally has four elemental eidolons she can summon, one each for the elements of air, earth, fire, and water. Their abilities and statistics are determined using the rules for <Link to="/eidolon/elemental">elemental</Link> eidolons for the <Link to="/class/unchained_summoner">unchained summoner</Link> class, as if the elemental ally were a summoner of her druid level, except they gain no additional evolution pool (just those evolutions from their base form and base evolutions from their subtype).</p>
<p>Each of the four elementals has its own base form, skills, and feats. The elemental ally can summon one of these elementals with the same 1-minute ritual a summoner normally uses to do so. The elemental ally can't summon an eidolon or cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> if she currently has an eidolon summoned. She also can't summon an eidolon if she currently has a creature summoned through other means. If one of the elemental ally's eidolons is killed, she cannot summon any eidolons for 24 hours. The elemental ally can dismiss her eidolon as a <strong className="hl">standard action</strong>.</p>
<p>As the elemental ally gains levels, her elemental eidolons' base statistics and base evolutions increase as if her druid level were her summoner level. The eidolons gain the <em>darkvision, link, share spells, evasion, ability score increase, devotion, multiattack,</em> and <em>improved evasion</em> abilities at the appropriate levels, but never gain an evolution pool. Abilities and spells that grant additional evolution points to eidolons do not function for elemental eidolons, though any ability that would grant evolution points to an animal companion does work. The elemental ally does not gain <em>life link</em> or any other class features a summoner gains in relation to her eidolon.</p>
</Pair>
</Ability>
<Ability id="arc-druid-elemental_ally-elemental-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-elemental_ally-elemental-empathy-ex">Elemental Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability"><p>An elemental ally can improve the attitude of a creature of the elemental subtype. This ability functions just like a Diplomacy check to improve the attitude of a person. The elemental ally rolls 1d20 and adds her druid level and her Charisma modifier to determine the <em>elemental empathy</em> check result.</p>
<p>To use <em>elemental empathy,</em> the elemental ally and the elemental must be able to study each other, which means that they must be within 30 feet of one another under normal conditions. Generally, influencing an elemental in this way takes 1 minute, but as with influencing people, it might take more or less time.</p>
<p>An elemental ally can also use this ability to influence a non-elemental outsider with the air, earth, fire, or water subtype, but she takes a -4 penalty on the check.</p>
</Pair>
</Ability>
<Ability id="arc-druid-elemental_ally-elemental-magic" icon={["upgrade"]}>
<Pair single id="arc-druid-elemental_ally-elemental-magic">Elemental Magic</Pair>
<Pair title="Passive Ability">The elemental ally can target elementals (including her elemental eidolons) with any spell she casts that targets animals, even though elementals can't normally be targeted by such spells.</Pair>
</Ability>
<Ability id="arc-druid-elemental_ally-elemental-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-elemental_ally-elemental-resistance-ex">Elemental Resistance (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">An elemental ally gains <Link to="/umr/resist">resist</Link> acid, cold, electricity, and fire 5.</Pair>
</Ability>
</>};
const _feral_child = {title: "Feral Child", jsx: <><h2 id="arc-druid-feral_child-feral-child">Feral Child</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 74</Link><br/>Some youths, abandoned in the wilderness and then raised by animals, are so connected with their adoptive home and family that they become feral. Suspicious of civilized society, these foundlings often choose allegiance to the wild over their human forebears. A feral child has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-feral_child--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/human">Human</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-feral_child-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-druid-feral_child-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair title="Info">A feral child loses proficiency with the scimitar, scythe, and sickle and with shields.</Pair>
</Ability>
<Ability icon={["skills"]} id="arc-druid-feral_child-undefined">
<Pair id="arc-druid-feral_child-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/acrobatics">Acrobatics</Link> (DEX)</Pair>
<Pair title="Removed Skills">Fly, Profession</Pair></Ability>
<Ability id="arc-druid-feral_child-illiteracy" icon={["broken-shield"]}>
<Pair single id="arc-druid-feral_child-illiteracy">Illiteracy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A feral child is unable to read and write, though she may learn by taking 1 rank of Linguistics. She does not gain Druidic as a free language and cannot select Sylvan as a bonus language.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-improved-unarmed-strike" icon={["stairs-goal"]}>
<Pair single id="arc-druid-feral_child-improved-unarmed-strike">Improved Unarmed Strike</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A feral child gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-beast-family-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-feral_child-beast-family-ex">Beast Family (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A feral child may choose one specific type of animal as the type that raised her. She gains a +2 circumstance bonus on Handle Animal and <em>wild empathy</em> checks with animals of that type, and she can communicate with them as if using a continual <Link to="/spell/speak_with_animals">speak with animals</Link> spell-like ability, but this ability is nonmagical.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-nature-bond-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-feral_child-nature-bond-ex">Nature Bond (Ex)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A feral child must select an animal companion as her nature bond.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-favored-terrain-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-feral_child-favored-terrain-ex">Favored Terrain (Ex)</Pair>
<Pair hl title="Replaces">Trackless step, a thousand faces</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A feral child gains the <Link to="/ability/favored_terrain">favored terrain</Link> ability as a <Link to="/class/ranger">ranger</Link> of her class level. A feral child may not choose urban as a favored terrain.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-native-cunning-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-feral_child-native-cunning-ex">Native Cunning (Ex)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A feral child gains <Link to="/ability/trap_sense">trap sense</Link> as a <Link to="/class/barbarian">barbarian</Link> of equal level, and in her favored terrain, she immediately receives a Perception check to notice traps within 10 feet, as the trap spotter rogue talent.</Pair>
<Pair title="Choice">She may choose one combat maneuver, and gains a bonus equal to her trap sense bonus to her CMD against that maneuver.</Pair>
<Pair title="At 6th Level">She may choose another combat maneuver to gain the same bonus in.</Pair>
<Pair title="At 9th Level">She may gain a third such bonus.</Pair>
<Pair title="At 12th Level">She may select a fourth combat maneuver for a bonus.</Pair>
<Pair title="At 15th Level">She may select a fifth such maneuver.</Pair>
<Pair title="At 18th Level">She may select a sixth such maneuver.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-native-fortitude-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-feral_child-native-fortitude-ex">Native Fortitude (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A feral child gains a +1 bonus on saving throws against disease, exhaustion, fatigue, fear, and poison. When she is in her favored terrain, she instead applies her favored terrain bonus on such saving throws. She also recovers from <Link to="/rule/ability_damage">ability damage</Link>, <Link to="/misc/exhausted">exhaustion</Link>, and <Link to="/misc/fatigued">fatigue</Link> at twice the normal rate.</Pair>
</Ability>
<Ability id="arc-druid-feral_child-native-call-su" icon={["upgrade"]}>
<Pair single id="arc-druid-feral_child-native-call-su">Native Call (Su)</Pair>
<Pair hl title="Replaces">Venom immunity, timeless body</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When in her favored terrain, for any <Link to="/spell/summon_natures_ally">summon nature's ally</Link> spells a feral child uses to summon animals that are native to that terrain, she treats the duration of the spell as if she were 2 levels higher.</Pair>
<Pair title="At 17th Level">When the feral child uses <em>summon nature's ally</em> spells to summon such animals, those animals gain a +2 bonus to both their Strength and Constitution ability scores. This stacks with the effects of the <Link to="/feat/augment_summoning">Augment Summoning</Link> feat.</Pair>
</Ability>
</>};
const _feral_shifter = {title: "Feral Shifter", jsx: <><h2 id="arc-druid-feral_shifter-feral-shifter">Feral Shifter</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 92</Link><br/>A feral shifter internalizes her communion with and mastery over animals. Instead of forming a bond with an animal companion or an aspect of nature, she alters her own essence or being as homage to the noble creatures of the wild. More in tune with transformation and animal bodies than a normal druid, a feral shifter blurs the line between humanoid and beast.</p>
<Ability id="arc-druid-feral_shifter-animal-focus-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-feral_shifter-animal-focus-su">Animal Focus (Su)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Swift Action">A feral shifter can take on the aspect of an animal, gaining a bonus or special ability based on the type of animal emulated. This functions as the hunter's <Link to="/ability/animal_focus">animal focus</Link> class feature.</Pair>
<Pair title="Special">She can emulate only one animal at a time.</Pair>
</Ability>
<Ability id="arc-druid-feral_shifter-second-animal-focus-su" icon={["upgrade"]}>
<Pair single id="arc-druid-feral_shifter-second-animal-focus-su">Second Animal Focus (Su)</Pair>
<Pair hl title="Replaces">Venom immunity, a thousand faces, timeless body</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">When a feral shifter uses her animal focus ability, she selects two different animal aspects for herself instead of one.</Pair>
</Ability>
</>};
const _feyspeaker = {title: "Feyspeaker", jsx: <><h2 id="arc-druid-feyspeaker-feyspeaker">Feyspeaker</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 26</Link><br/>Some druids hear the whispers of the natural world like fey creatures do, and learn to mimic those tantalizing murmurs in order to influence the minds of both wild beasts and civilized people. These feyspeakers are often touched by the fey in some way, such as mortals who dared to eat the food and drink the wine while in the hidden halls of the fey.</p>
<Ability id="arc-druid-feyspeaker-fey-magic-part-one" icon={["broken-shield","spell-book"]}>
<Pair single id="arc-druid-feyspeaker-fey-magic-part-one" flavor="A feyspeaker allows the strange idylls of the fey to guide her magic.">Fey Magic (Part One)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">The feyspeaker uses her Charisma score instead of her Wisdom score as her key spellcasting ability score (to determine her spell DCs, <Link to="/rule/bonus_spells">bonus spells</Link> per day, concentration checks, and so on). A feyspeaker loses the ability to spontaneously cast <em>summon nature's ally</em> spells.</Pair>
<Pair title="At 4th Level">A feyspeaker adds one enchantment or illusion spell from the <Link to="/main/spells_sorcerer">sorcerer</Link>/<Link to="/main/spells_wizard">wizard</Link> spell list to her druid spell list as a spell of 1 level higher (for instance, at 4th level, she could add <Link to="/spell/color_spray">color spray</Link> as a 2nd-level druid spell). In order to select a spell, she must be of a level high enough (including the increased spell level) to cast it. Once selected, the spell cannot be changed.</Pair>
<Pair title="At 6th Level">She adds another bonus spell, following the same rules and restrictions above.</Pair>
<Pair title="At 8th Level">She adds a third such bonus spell.</Pair>
<Pair title="At 10th Level">She gains a fourth bonus spell.</Pair>
<Pair title="At 12th Level">She gains a fifth bonus spell.</Pair>
<Pair title="At 14th Level">She gains a sixth bonus spell.</Pair>
<Pair title="At 16th Level">She gains a seventh bonus spell.</Pair>
<Pair title="At 18th Level">She gains an eighth bonus spell.</Pair>
</Ability>
<Ability id="arc-druid-feyspeaker-fey-speech-ex" icon={["skills","stairs-goal","upgrade","broken-shield"]}>
<Pair single id="arc-druid-feyspeaker-fey-speech-ex" flavor="A feyspeaker's words carry a tiny fragment of the otherworldly power of the fey's voices.">Fey Speech (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair hl title="Alters">Base attack bonus, class skills, skills ranks per level</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">She gains <Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/disguise">Disguise</Link> (CHA), and <Link to="/skill/sense_motive">Sense Motive</Link> (WIS) as class skills. A feyspeaker also learns Sylvan as a bonus language. In addition, the feyspeaker gains a number of skill ranks at each level equal to 6 + her Intelligence modifier, instead of 4 + her Intelligence modifier.</Pair>
<Pair title="Info">The feyspeaker's base attack bonus from her druid levels is equal to <Link to="/misc/half">half</Link> her druid level (much like a sorcerer's base attack bonus is calculated), rather than the usual druid base attack bonus.</Pair>
</Ability>
<Ability id="arc-druid-feyspeaker-wild-mischief-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-feyspeaker-wild-mischief-ex">Wild Mischief (Ex)</Pair>
<Pair hl title="Replaces">The druid's proficiency with medium armor</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A feyspeaker can fool an animal into thinking there is food, a potential mate, or a predator nearby. This ability functions just like a Bluff check to deceive a character. To determine the result of the <em>wild mischief</em> check, the feyspeaker rolls 1d20 and adds her druid level and her Charisma modifier. As with Bluff checks, <em>wild mischief</em> checks are modified depending on the believability of the false information. A typical domestic animal is not particularly suspicious of the feyspeaker (no circumstance modifier), whereas wild animals are usually suspicious (-5 penalty on the check). To use <em>wild mischief,</em> the feyspeaker and the animal must be able to study each other, which means they must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute, but as when influencing people, it could take more or less time.</Pair>
<Pair title="Special">A feyspeaker can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but she takes a -4 penalty on the check.</Pair>
</Ability>
<Ability id="arc-druid-feyspeaker-fey-magic-part-two" icon={["magic-swirl","broken-shield"]}>
<Pair single id="arc-druid-feyspeaker-fey-magic-part-two" flavor="A feyspeaker allows the strange idylls of the fey to guide her magic.">Fey Magic (Part Two)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Info">The feyspeaker gains the <em>wild shape</em> ability and gains all benefits related to <em>wild shape</em> 2 druid levels later than usual. She can never use <em>wild shape</em> to transform into an elemental.</Pair>
</Ability>
</>};
const _fungal_pilgrim = {title: "Fungal Pilgrim", jsx: <><h2 id="arc-druid-fungal_pilgrim-fungal-pilgrim">Fungal Pilgrim</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_the_darklands">Heroes of the Darklands pg. 16</Link><br/>Druids often work to preserve the natural world, but some seek to further emulate it. Fungal pilgrims are druids seeking transformation into a more plant-like existence. These unique adherents of nature's creed see fungi as the means to such ends, as many fungi - particularly those of the Darklands' naturally work their way into the bodies of living creatures.</p>
<Ability id="arc-druid-fungal_pilgrim-devotion-to-ascension-ex" icon={["info"]}>
<Pair single id="arc-druid-fungal_pilgrim-devotion-to-ascension-ex">Devotion to Ascension (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A fungal pilgrim must select the <Link to="/domain/plant">Plant</Link> domain for her nature bond if she does not select an animal companion.</Pair>
</Ability>
<Ability id="arc-druid-fungal_pilgrim-spore-spawning" icon={["magic-swirl"]}>
<Pair single id="arc-druid-fungal_pilgrim-spore-spawning">Spore Spawning</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">The fungal pilgrim <strong className="hl">only</strong> gets this ability if they selected the Plant domain as their <em>nature bond.</em></Pair>
<Pair title="Ability"><p>A fungal pilgrim who selected the Plant domain for her nature bond gains the ability to grow fungal creatures from the spores of her body. Once per day, when casting a <em>summon nature's ally</em> spell to summon a single creature, the fungal pilgrim can infuse her fungal connection into the casting. The creature summoned must be selected from the <Link to="/spell/summon_natures_ally">summon nature's ally</Link> list for 1 spell level lower than the spell cast. For example, if the fungal pilgrim casts <em>summon nature's ally III,</em> she must choose a creature from the list in <em>summon nature's ally II.</em></p>
<p>Creatures summoned in this manner gain the <Link to="/template/fungal_creature">fungal creature</Link> template, except they do not gain the <em>create spawn</em> and <em>poison spore cloud</em> special attacks. A creature summoned in this manner cannot be harvested for its poison.</p>
</Pair>
<Pair title="Usage">Once a day, plus one additional time for every two levels after 4th.</Pair>
<Pair title="At 20th Level">The druid can use this ability any number of times a day.</Pair>
</Ability>
<Ability id="arc-druid-fungal_pilgrim-fungal-companion" icon={["upgrade"]}>
<Pair single id="arc-druid-fungal_pilgrim-fungal-companion">Fungal Companion</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">The fungal pilgrim <strong className="hl">only</strong> gets this ability if they selected an animal companion as their <em>nature bond.</em></Pair>
<Pair title="Ability">A fungal pilgrim who selected an animal companion for her nature bond initiates a transformation in her companion. The animal companion gains the <em>fungal creature</em> template, but does not gain the <em>create spawn, poison spore cloud,</em> and <em>poisonous blood</em> special attacks.</Pair>
<Pair title="At 10th Level">The animal companion gains the <em>poisonous blood</em> special attack.</Pair>
<Pair title="At 14th Level">The animal companion gains the <em>poison spore</em> cloud special attack.</Pair>
<Pair title="At 20th Level">The animal companion gains the <em>create spawn</em> special attack; created spawn are under the control of the fungal pilgrim. Spawn created in this way last for only 48 hours before rotting away.</Pair>
</Ability>
<Ability id="arc-druid-fungal_pilgrim-mycological-transformation-ex" icon={["armor-upgrade","broken-shield","magic-swirl"]}>
<Pair single id="arc-druid-fungal_pilgrim-mycological-transformation-ex" flavor="Fungal spores become fully integrated into the druid's body, inside and out.">Mycological Transformation (Ex)</Pair>
<Pair hl title="Replaces">Timeless body</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Passive Ability">She gains all immunities granted by the <Link to="/type/plant">plant</Link> creature type as well as the <Link to="/umr/light_sensitivity">light sensitivity</Link> universal monster rule. She counts as a plant for the purposes of effects that would negatively affect or damage plants. In addition, she no longer needs to eat or sleep in the typical manner, and instead gains the fungal creature's <em>rejuvenation</em> ability. She can perform her daily meditation during her rejuvenation.</Pair>
</Ability>
</>};
const _goliath_druid = {title: "Goliath Druid", jsx: <><h2 id="arc-druid-goliath_druid-goliath-druid">Goliath Druid</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 20</Link><br/>Goliath druids hone their spiritual and magical connections to nature's largest creatures, especially dinosaurs, giants, and megafauna, revering these massive creatures as living relics of a primeval time when all creatures were more in harmony with nature. Despite this respect, a goliath druid doesn't hesitate to infiltrate giant groups who defile nature and destroy them from within.</p>
<p>Goliath druids have the following class features.</p>
<Ability icon={["skills"]} id="arc-druid-goliath_druid-undefined">
<Pair id="arc-druid-goliath_druid-undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/bluff">Bluff</Link> (CHA), <Link to="/skill/diplomacy">Diplomacy</Link> (CHA), <Link to="/skill/knowledge_local">Knowledge (local)</Link> (INT)</Pair>
<Pair title="Removed Skills">Craft, Profession, Ride</Pair></Ability>
<Ability id="arc-druid-goliath_druid-bonus-languages" icon={["info"]}>
<Pair single id="arc-druid-goliath_druid-bonus-languages">Bonus Languages</Pair>
<Pair title="Info">A goliath druid with an Intelligence bonus can select Giant as a bonus language.</Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-primal-size" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-druid-goliath_druid-primal-size">Primal Size</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Ability">A goliath druid adds <Link to="/spell/enlarge_person">enlarge person</Link> to her list of class spells. She can cast this spell only on herself. She can also channel stored spell energy to cast this spell without preparing it - she can lose a prepared spell of 1st level or higher to cast <em>enlarge person.</em></Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-primal-bond-ex" icon={["info"]}>
<Pair single id="arc-druid-goliath_druid-primal-bond-ex">Primal Bond (Ex)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">When a goliath druid forms a <em>nature bond,</em> if she selects a cleric domain, she must selected from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/destruction">Destruction</Link>, or <Link to="/domain/strength">Strength</Link> domains, or the <Link to="/domain/ferocity">Ferocity</Link>, <Link to="/domain/growth">Growth</Link>, or <Link to="/domain/rage">Rage</Link> subdomains. If the goliath druid selects an animal companion, she must select a <Link to="/family/dinosaur">dinosaur</Link> or <Link to="/family/megafauna">megafauna</Link>. If she has a dinosaur or megafauna animal companion, she can target it with <em>enlarge person</em> even though the companion isn't of the humanoid type.</Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-primal-empathy-ex" icon={["broken-shield"]}>
<Pair single id="arc-druid-goliath_druid-primal-empathy-ex">Primal Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A goliath druid's <em>wild empathy</em> functions only with creatures that are Large or larger.</Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-face-natures-might-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-goliath_druid-face-natures-might-ex">Face Nature's Might (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A goliath druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of giants.</Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-goliath_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">The ability to <em>wild shape</em> into a creature of the animal type allows a goliath druid to assume only the form of a dinosaur or megafauna. She doesn't gain the ability to become an elemental or plant.</Pair>
<Pair title="At 6th Level">The goliath druid can use <em>wild shape</em> to become a Large humanoid of the giant subtype. This functions as the <Link to="/spell/alter_self">alter self</Link> spell, except the goliath druid gains a +4 size bonus to Strength, a -2 penalty to Dexterity, and a +1 natural armor bonus. If the Large humanoid form she takes has rock throwing, she gains <Link to="/umr/rock_throwing">rock throwing</Link> (range 40 feet, 1d8 damage). If the form has the aquatic subtype, she gains the <Link to="/subtype/aquatic">aquatic</Link> subtype and the <Link to="/umr/amphibious">amphibious</Link> quality</Pair>
<Pair title="At 12th Level">When taking the form of a giant, the goliath druid's <em>wild shape</em> functions as <Link to="/spell/giant_form_i">giant form I</Link>.</Pair>
<Pair title="At 14th Level">The goliath druid can also use <em>wild shape</em> to change into a Huge giant. When taking the form of a giant, the goliath druid's <em>wild shape</em> functions as <Link to="/spell/giant_form_ii">giant form II</Link>.</Pair>
</Ability>
<Ability id="arc-druid-goliath_druid-primal-summons" icon={["upgrade"]}>
<Pair single id="arc-druid-goliath_druid-primal-summons">Primal Summons</Pair>
<Pair hl title="Replaces">Venom immunity, a thousand faces</Pair>
<Pair title="Ability"><p>A goliath druid adds the following creatures to the list of creatures she can normally summon using <em>summon nature's ally</em> spells.</p>
<div className="hanging">
<p><strong className="hl"><em>Summon Nature's Ally I:</em></strong> <Link to="/monster/compsognathus">Compsognathus</Link></p><p><strong className="hl"><em>Summon Nature's Ally II:</em></strong> <Link to="/monster/dimorphodon">Dimorphodon</Link></p><p><strong className="hl"><em>Summon Nature's Ally III:</em></strong> <Link to="/monster/velociraptor">Velociraptor</Link></p><p><strong className="hl"><em>Summon Nature's Ally IV:</em></strong> <Link to="/monster/ogre">Ogre</Link>, <Link to="/monster/parasaurolophus">parasaurolophus</Link></p><p><strong className="hl"><em>Summon Nature's Ally V:</em></strong> <Link to="/monster/glyptodon">Glyptodon</Link>, <Link to="/monster/iguanodon">iguanodon</Link></p><p><strong className="hl"><em>Summon Nature's Ally VI:</em></strong> <Link to="/monster/baluchitherium">Baluchitherium</Link>, <Link to="/monster/megalania">megalania</Link></p><p><strong className="hl"><em>Summon Nature's Ally VII:</em></strong> <Link to="/monster/cliff_giant">Cliff giant</Link></p><p><strong className="hl"><em>Summon Nature's Ally VIII:</em></strong> <Link to="/monster/spinosaurus">Spinosaurus</Link></p><p><strong className="hl"><em>Summon Nature's Ally IX:</em></strong> <Link to="/monster/diplodocus">Diplodocus</Link></p></div>
</Pair>
</Ability>
</>};
const _green_faith_initiate = {title: "Green Faith Initiate", jsx: <><h2 id="arc-druid-green_faith_initiate-green-faith-initiate">Green Faith Initiate</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 141</Link>, <Link to="/source/faiths_and_philosophies">Faiths and Philosophies pg. 10</Link><br/>Druids who are initiated into the magic of nature as strict students of the <Link to="/faith/green_faith">Green Faith's</Link> traditions sometimes demonstrate abilities unique to their organization.</p>
<Ability id="arc-druid-green_faith_initiate-mediators-ear-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-green_faith_initiate-mediators-ear-ex">Mediator's Ear (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A Green Faith initiate is respected for her neutrality and even-handed attitude toward all people as well as other living things. She quickly develops a sense of other peoples' attitudes, much as she does with animals. A Green Faith initiate gains a bonus on Diplomacy and Sense Motive checks equal to <Link to="/misc/half">half</Link> her druid level.</Pair>
</Ability>
<Ability id="arc-druid-green_faith_initiate-zephyr-message-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-green_faith_initiate-zephyr-message-sp">Zephyr Message (Sp)</Pair>
<Pair hl title="Replaces">Daily use of <em>wild shape</em> gained at 6th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">Once per day, a Green Faith initiate can cast <Link to="/spell/whispering_wind">whispering wind</Link> as a spell-like ability, treating her druid level as her caster level.</Pair>
</Ability>
<Ability id="arc-druid-green_faith_initiate-path-to-refuge-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-green_faith_initiate-path-to-refuge-sp">Path to Refuge (Sp)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">Once per day, a Green Faith initiate can travel as if with <Link to="/spell/transport_via_plants">transport via plants</Link> to any major Green Faith druid circle or important holy site. Each of these sites is marked with special standing stones that allow all Green Faith followers within range using <em>transport via plants</em> or <Link to="/spell/tree_stride">tree stride</Link> to sense their distance from it and the direction to it.</Pair>
<Pair title="At 14th Level">She can use this ability twice a day.</Pair>
<Pair title="At 19th Level">She can use this ability three times a day.</Pair>
</Ability>
<Ability id="arc-druid-green_faith_initiate-secrets-across-lifetimes-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-green_faith_initiate-secrets-across-lifetimes-sp">Secrets across Lifetimes (Sp)</Pair>
<Pair hl title="Replaces">Daily use of <em>wild shape</em> gained at 10th level</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A Green Faith initiate can use <Link to="/spell/legend_lore">legend lore</Link> once per week as a spell-like ability, drawing upon the knowledge of Green Faith archdruids recorded in secret across the generations in places where magic such as this can retrieve it. This ability does not require material components.</Pair>
</Ability>
<Ability id="arc-druid-green_faith_initiate-a-thousand-voices-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-green_faith_initiate-a-thousand-voices-su">A Thousand Voices (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">A Green Faith initiate can communicate with any creature that has a language or with any stone, as if using <Link to="/spell/tongues">tongues</Link> or <Link to="/spell/stone_tell">stone tell</Link>, respectively.</Pair>
</Ability>
</>};
const _green_scourge = {title: "Green Scourge", jsx: <><h2 id="arc-druid-green_scourge-green-scourge">Green Scourge</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 7</Link><br/>Green scourges are militant druids sworn to restore natural order. They're less concerned with nurturing the natural world than most druids, instead focusing their efforts on slaying corrupted creatures.</p>
<Ability id="arc-druid-green_scourge-natures-armaments" icon={["magic-swirl"]}>
<Pair single id="arc-druid-green_scourge-natures-armaments">Nature's Armaments</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">A green scourge can lose a prepared 1st- or 2nd-level spell in order to cast <Link to="/spell/shillelagh">shillelagh</Link> or <Link to="/spell/flame_blade">flame blade</Link>, respectively. She can instead choose to lose a higher-level spell in order to increase the enhancement bonus of her <em>shillelagh,</em> or to add any of the following weapon special abilities to her <em>shillelagh</em> or <em>flame blade:</em> <Link to="/magic-enh/bane">bane</Link> (aberrations only), <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/mighty_cleaving">mighty cleaving</Link>, <Link to="/magic-enh/returning">returning</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/throwing">throwing</Link>, or <Link to="/magic-enh/vicious">vicious</Link>.</Pair>
<Pair title="Info">When adding weapon special abilities or increasing the enhancement bonus, the final level of the spell expended is 1 higher than the base spell level (2nd for <em>shillelagh</em> and 3rd for <em>flame blade</em>), increased by the additional special abilities' total base price modifier. For example, creating an <em>aberration-bane vicious flame blade</em> requires spending a 5th-level spell slot (3 for <em>flame blade,</em> +1 for <em>bane,</em> +1 for <em>vicious</em> = 5), which also counts as a 5th-level spell for purposes of dispelling.</Pair>
<Pair title="Special">If the target weapon is a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, these bonuses apply to only one of its ends. If a <em>flame blade</em> gains the <em>frost</em> or <em>shock</em> special ability, the base damage of the spell changes to match the energy type; neither a <em>flame blade</em> nor <em>shillelagh</em> can gain both of these special abilities. A green scourge cannot add the <em>throwing</em> property to a <em>flame blade</em> unless she also adds the <em>returning</em> property.</Pair>
</Ability>
<Ability id="arc-druid-green_scourge-aberration-sense-ex" icon={["skills","upgrade"]}>
<Pair single id="arc-druid-green_scourge-aberration-sense-ex">Aberration Sense (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">A green scourge adds <Link to="/skill/knowledge_dungeoneering">Knowledge (dungeoneering)</Link> (INT) to her class skills and gains a +2 bonus on Knowledge (dungeoneering) checks.</Pair>
</Ability>
<Ability id="arc-druid-green_scourge-scentless-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-green_scourge-scentless-ex">Scentless (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A green scourge cannot be detected or tracked with the <Link to="/umr/scent">scent</Link> ability or any other special senses that rely on acute smell. She can choose to exude a scent if desired.</Pair>
</Ability>
<Ability id="arc-druid-green_scourge-resist-unnatural-influence-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-green_scourge-resist-unnatural-influence-ex">Resist Unnatural Influence (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A green scourge gains a +4 bonus on saving throws against aberrations' spell-like abilities, supernatural abilities, and poisons.</Pair>
</Ability>
</>};
const _halcyon_druid = {title: "Halcyon Druid", jsx: <><h2 id="arc-druid-halcyon_druid-halcyon-druid">Halcyon Druid</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 121</Link><br/>Druids of the Halcyon Circle embrace <Link to="/rule/aff_i_school">the teachings of Old-Mage Jatembe</Link>, combining them with traditional druidic practices. Though they revere the natural world, halcyon druids are less focused on emulating its inhabitants. Instead, like Old-Mage Jatembe, they treat with beings from the Outer Sphere. As a sign of their allegiance, these druids wear fantastical masks depicting celestials, fiends, and (most often) the bestial agathions.</p>
<p>Halcyon druids are peacekeepers, mediating between people and nature, people and the spirit world, and different groups of people. Yet when necessary, they use their magic to fight enemies of peace, especially demons and demon cultists.</p>
<p>Most halcyon druids serve Nantambu and the surrounding villages - making, memorizing, and arbitrating the unwritten pacts between them. Some halcyon druids, however, are drawn farther afield. They may do so to forge new connections between tribes and villages, to spread the message of peace, or to fight demonic outbreaks.</p>
<Ability id="arc-druid-halcyon_druid-bonded-mask-su" extraClasses="hasSubs" icon={["magic-swirl"]}>
<Pair single id="arc-druid-halcyon_druid-bonded-mask-su">Bonded Mask (Su)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Ability">A halcyon druid forms a powerful bond with a mask, which functions identically to a <Link to="/class/wizard">wizard's</Link> <em>bonded object</em> except that it can be used to cast druid spells (including those gained from class abilities) instead of wizard spells. A <em>bonded mask</em> must be worn to have an effect, and it occupies the <Link to="/rule/head_slot">head slot</Link>. A halcyon druid can enhance her mask with abilities appropriate for a head slot item, and can designate an existing head slot item as her <em>bonded mask</em> (but only if it covers her face).</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-bonded-object" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-druid-halcyon_druid-bonded-object" flavor="Text from the wizard class">Bonded Object</Pair>
<Pair title="Ability"><p>If you select a bonded object, you begin play with one at no cost. These objects are always masterwork quality. If you attempt to cast a spell without your bonded object worn, you must make a <Link to="/rule/concentration">concentration</Link> check or lose the spell. The DC for this check is equal to 20 + the spell's level.</p>
<p>A bonded object can be used once per day to cast any one spell that you have in your spellbook and are capable of casting, even if the spell is not prepared. This spell is treated like any other spell cast by you, including casting time, duration, and other effects dependent on your level. This spell cannot be modified by metamagic feats or other abilities. The bonded object cannot be used to cast spells from your opposition schools.</p>
<p>You can add additional magic abilities to your bonded object as if you have the required item creation feats and if you meet the level prerequisites of the feat. For example, a wizard with a bonded dagger must be at least 5th level to add magic abilities to the dagger (see <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link>). The magic properties of a bonded object, including any magic abilities added to the object, only function for the wizard who owns it. If a bonded object's owner dies, or the item is replaced, the object reverts to being an ordinary masterwork item of the appropriate type.</p>
<p>If a bonded object is damaged, it is restored to full hit points the next time you prepare your spells. If the object of an arcane bond is lost or destroyed, it can be replaced after 1 week in a special ritual that costs 200 gp per wizard level plus the cost of the masterwork item. This ritual takes 8 hours to complete. Items replaced in this way do not possess any of the additional enchantments of the previous bonded item. You can designate an existing magic item as your bonded item. This functions in the same way as replacing a lost or destroyed item except that the new magic item retains its abilities while gaining the benefits and drawbacks of becoming a bonded item.</p>
</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-magaambya-trained-ex" icon={["skills"]}>
<Pair single id="arc-druid-halcyon_druid-magaambya-trained-ex">Magaambya-Trained (Ex)</Pair>
<Pair hl title="Replaces">Nature sense</Pair>
<Pair hl title="Alters">Class skills</Pair>
<Pair title="Passive Ability">A halcyon druid adds <Link to="/skill/diplomacy">Diplomacy</Link> (CHA) and all <Link to="/skill/knowledge">Knowledge</Link> (INT) skills to her list of class skills.</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-peacekeeper-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-halcyon_druid-peacekeeper-ex">Peacekeeper (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Passive Ability">A halcyon druid adds <Link to="/misc/half">half</Link> her class level (minimum 1) to Diplomacy and Knowledge (local) checks.</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-spontaneous-casting" icon={["spell-book","magic-swirl"]}>
<Pair single id="arc-druid-halcyon_druid-spontaneous-casting">Spontaneous Casting</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair title="Ability">A halcyon druid adds all spells from the <Link to="/domain/good">Good</Link> cleric domain to her druid spell list, and she can focus stored spell energy into spells from the Good domain that she hasn't prepared ahead of time. She can lose a prepared spell to cast any spell of the same level or lower from the Good domain.</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-natural-arcana-su" icon={["spell-book"]}>
<Pair single id="arc-druid-halcyon_druid-natural-arcana-su">Natural Arcana (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Choice">A halcyon druid chooses two spells from the <Link to="/main/spells_wizard">wizard</Link>/<Link to="/main/spells_sorcerer">sorcerer</Link> spell list and adds them to her druid spell list. The chosen spells must be at least 1 level lower than the highest level spell she can currently cast.</Pair>
<Pair title="At 6th Level">She adds two more bonus spells, following the same rules and restrictions above.</Pair>
<Pair title="At 8th Level">She gains two more bonus spells.</Pair>
<Pair title="At 10th Level">She gains two more bonus spells.</Pair>
<Pair title="At 12th Level">She gains two more bonus spells.</Pair>
<Pair title="At 14th Level">She gains two more bonus spells.</Pair>
<Pair title="At 16th Level">She gains two more bonus spells.</Pair>
<Pair title="At 18th Level">She gains two more bonus spells.</Pair>
<Pair title="At 20th Level">She gains two more bonus spells, but they can be of any level.</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-resist-fiendish-influence-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-halcyon_druid-resist-fiendish-influence-ex">Resist Fiendish Influence (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A halcyon druid gains a +4 bonus on saving throws against the spell-like and supernatural abilities of outsiders with the evil subtype and spells with the evil descriptor.</Pair>
</Ability>
<Ability id="arc-druid-halcyon_druid-embody-mask-sp" icon={["magic-swirl"]}>
<Pair single id="arc-druid-halcyon_druid-embody-mask-sp">Embody Mask (Sp)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action">A halcyon druid wearing her <em>bonded mask</em> can embody the spirit it represents, which can be any Tiny to Large <Link to="/family/agathion">agathion</Link>, <Link to="/family/angel">angel</Link>, <Link to="/family/archon">archon</Link>, or <Link to="/family/azata">azata</Link>. This ability functions as per <Link to="/spell/beast_shape_iv">beast shape IV</Link> (using the adjustments for magical beasts), but adds the following abilities if the assumed form has them: <em>aura of menace, protective aura, speak with animals, telepathy,</em> and <em>truespeech.</em> If the assumed form has <Link to="/umr/immunity">immunity</Link> to a condition, the druid gains a +4 bonus on saving throws against effects that cause that condition.</Pair>
</Ability>
</>};
const _jungle_druid = {title: "Jungle Druid", jsx: <><h2 id="arc-druid-jungle_druid-jungle-druid">Jungle Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 100</Link><br/>The fecund jungles of the equatorial regions are rich in life and ancient tradition; druidical guardians of sacred pools, elder trees, and trembling volcanoes watch over crumbling temples and the inevitable reclamation of lost civilizations by the beating heart of nature untamed.</p>
<Ability id="arc-druid-jungle_druid-jungle-guardian-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-jungle_druid-jungle-guardian-ex">Jungle Guardian (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A jungle druid gains a bonus on Initiative checks and Climb, Knowledge (geography), Perception, Stealth, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in jungle terrain, and she cannot be tracked in such environments.</Pair>
</Ability>
<Ability id="arc-druid-jungle_druid-woodland-stride-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-jungle_druid-woodland-stride-ex">Woodland Stride (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A jungle druid gains <em>woodland stride</em> at this level.</Pair>
</Ability>
<Ability id="arc-druid-jungle_druid-torrid-endurance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-jungle_druid-torrid-endurance-ex">Torrid Endurance (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A jungle druid ignores the effects of a hot climate as if under the effects of <Link to="/spell/endure_elements">endure elements</Link>. She also gains a +4 bonus on saves against disease and the exceptional abilities of animals and magical beasts.</Pair>
</Ability>
<Ability id="arc-druid-jungle_druid-wild-shape-su" icon={["broken-shield"]}>
<Pair single id="arc-druid-jungle_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A jungle druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2.</Pair>
</Ability>
<Ability id="arc-druid-jungle_druid-verdant-sentinel-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-druid-jungle_druid-verdant-sentinel-ex">Verdant Sentinel (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A jungle druid can cast <Link to="/spell/tree_shape">tree shape</Link> at will.</Pair>
</Ability>
</>};
const _kraken_caller = {title: "Kraken Caller", jsx: <><h2 id="arc-druid-kraken_caller-kraken-caller">Kraken Caller</h2>
<p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 16</Link><br/>Some druids draw upon power irreverently stolen from one of the most dangerous creatures of the depths: the kraken.</p>
<Ability id="arc-druid-kraken_caller-call-of-the-waves-ex" icon={["hazard-sign"]}>
<Pair single id="arc-druid-kraken_caller-call-of-the-waves-ex">Call of the Waves (Ex)</Pair>
<Pair title="Info">A kraken caller must choose <Link to="/faith/besmara">Besmara</Link> as her deity. If she ever changes her deity, she loses this archetype and becomes a normal druid.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-bonus-languages" icon={["info"]}>
<Pair single id="arc-druid-kraken_caller-bonus-languages">Bonus Languages</Pair>
<Pair hl title="Alters">Bonus languages</Pair>
<Pair title="Info">A kraken caller's bonus language options include Aquan instead of Sylvan.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-dauntless-swimmer-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-kraken_caller-dauntless-swimmer-ex">Dauntless Swimmer (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A kraken caller can always take 10 on Swim checks, even if she is rushed or threatened.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-hold-breath-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-kraken_caller-hold-breath-ex">Hold Breath (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A kraken caller can <Link to="/misc/hold_her_breath">hold her breath</Link> for a number of minutes equal to her Constitution score before she risks drowning.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-resist-the-waves-lure-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-kraken_caller-resist-the-waves-lure-ex">Resist the Waves' Lure (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A kraken caller gains a +4 bonus on saving throws against the spell-like and supernatural abilities of creatures with the aquatic subtype.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-wild-shape-su" icon={["broken-shield","magic-swirl","mailed-fist"]}>
<Pair single id="arc-druid-kraken_caller-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>A kraken caller's options for <em>wild shape</em> are limited to animals with the aquatic or water subtype or that have the amphibious special quality. The kraken caller can alternatively expend a daily use of <em>wild shape</em> to grow two tentacles out of her body while otherwise retaining her own form. This effect lasts for 10 minutes per level, or until the kraken caller changes back.</p>
<p>The tentacles have a reach of 5 feet regardless of the kraken caller's size, and the kraken caller can use them as secondary <Link to="/umr/natural_attacks">natural attacks</Link> that deal 1d4 points of damage (1d3 for a Small kraken caller). She also gains a racial bonus on Climb, Swim, and <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver checks equal to the number of tentacles grown.</p>
<p>While in this form, a kraken caller can expel a 10-foot-radius cloud of ink once per minute as a <strong className="hl">standard action</strong>. This cloud provides <Link to="/rule/concealment">total concealment</Link> in water and persists for 1 round per level. The ink has no effect out of water.</p>
</Pair>
<Pair title="At 6th Level">A kraken caller can grow one additional tentacle.</Pair>
<Pair title="At 8th Level">A krakan caller can grow two additional tentacles. As a <strong className="hl">move action</strong>, she can retract or regrow any number of the additional tentacles, redistributing the mass of any retracted tentacles. For every 2 retracted tentacles, she can increase the reach of the remaining tentacles by 5 feet (to a maximum of 15 feet), or increase the damage dealt by her tentacles as if she were <Link to="/misc/one_size_category_larger">one size category larger</Link>.</Pair>
<Pair title="At 10th Level">A kraken caller can grow three additional tentacles.</Pair>
<Pair title="At 12th Level">A kraken caller can grow four additional tentacles.</Pair>
</Ability>
<Ability id="arc-druid-kraken_caller-beast-of-the-depths-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-kraken_caller-beast-of-the-depths-su">Beast of the Depths (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">A kraken caller gains a swim speed equal to her base land speed and can breathe water as though affected by the spell <Link to="/spell/water_breathing">water breathing</Link>.</Pair>
</Ability>
</>};
const _leshy_warden = {title: "Leshy Warden", jsx: <><h2 id="arc-druid-leshy_warden-leshy-warden">Leshy Warden</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 47</Link>, <Link to="/source/familiar_folio">Familiar Folio pg. 7</Link><br/>The natural world is full of bodiless nature spirits connected to the forces of glades, springs, and individual plants. Some druids hear their call keenly and are able to effortlessly incarnate them as the miniature creatures known as leshys. The leshy warden serves as these spirits' ally, defender, and voice.</p>
<Ability id="arc-druid-leshy_warden-leshy-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-leshy_warden-leshy-familiar-ex">Leshy Familiar (Ex)</Pair>
<Pair hl title="Replaces">Nature bond</Pair>
<Pair title="Ability">A leshy warden forms an intimate bond with a nature spirit, incarnating the spirit as a <Link to="/monster/leaf_leshy">leaf leshy</Link>. She gains a leaf leshy as a <Link to="/sidekick/familiar">familiar</Link> and treats her druid level as her effective <Link to="/class/wizard">wizard</Link> level for the purpose of this ability. If the leshy dies, the leshy warden can incarnate the same spirit again by paying the normal cost to replace a familiar. So long as the leshy lives, the leshy warden gains access to the <Link to="/domain/plant">Plant</Link> domain as if through a druid's <em>nature bond</em> class feature, but she can't choose the Decay subdomain.</Pair>
</Ability>
<Ability id="arc-druid-leshy_warden-green-empathy-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-leshy_warden-green-empathy-ex">Green Empathy (Ex)</Pair>
<Pair hl title="Replaces">Wild empathy</Pair>
<Pair title="Ability">A leshy warden can improve the attitude of a plant creature as if using <em>wild empathy.</em> The typical wild plant creature has a starting attitude of indifferent. If the plant creature is mindless, the leshy warden imparts a modicum of intellect to the plant so that it can be interacted with as if it were an animal. A leshy warden can also use this ability to influence an animal, but she takes a -4 penalty on the check to do so.</Pair>
</Ability>
<Ability id="arc-druid-leshy_warden-leshy-summoner-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-leshy_warden-leshy-summoner-ex">Leshy Summoner (Ex)</Pair>
<Pair hl title="Alters">Spontaneous casting</Pair>
<Pair title="Ability">A leshy warden is an expert at summoning and growing <Link to="/family/leshy">leshys</Link>. She counts as a plant creature for the purpose of growing leshys. She adds leaf leshys, <Link to="/monster/gourd_leshy">gourd leshys</Link>, <Link to="/monster/fungus_leshy">fungus leshys</Link>, <Link to="/monster/seaweed_leshy">seaweed leshys</Link>, and <Link to="/monster/lotus_leshy">lotus leshys</Link> to her list of creatures she can summon with <Link to="/spell/summon_natures_ally_i">summon nature's ally I, II, III, IV, and V</Link>, respectively.</Pair>
</Ability>
<Ability id="arc-druid-leshy_warden-leshy-tender-ex" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-leshy_warden-leshy-tender-ex">Leshy Tender (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="At 4th Level">A leshy warden can either grant her leaf leshy a +2 increase to Strength and Dexterity or transform it into a gourd leshy.</Pair>
<Pair title="At 8th Level">The leshy warden can either grant her current leshy a +2 increase to Strength and Dexterity or transform it into a fungus leshy.</Pair>
<Pair title="At 12th Level">She can either grant her current leshy a final +2 increase to Strength and Dexterity or transform it into a seaweed leshy.</Pair>
<Pair title="Special">If the leshy is transformed, it gains the normal ability scores of its new form; ability score increases granted by this ability don't carry over to its new form.</Pair>
</Ability>
<Ability id="arc-druid-leshy_warden-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-leshy_warden-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A leshy warden gains <em>wild shape,</em> except her effective druid level for the ability is equal to her druid level - 2 for the purpose of determining the number of times per day she can use it. The leshy warden can assume the form of only Small or Medium plant creatures, as per <Link to="/spell/plant_shape_i">plant shape I</Link>.</Pair>
<Pair title="At 8th Level">She can take the form of a Large plant creature, as per <Link to="/spell/plant_shape_ii">plant shape II</Link>.</Pair>
<Pair title="At 10th Level">She can take the form of a Huge plant creature, as per <Link to="/spell/plant_shape_iii">plant shape III</Link>.</Pair>
</Ability>
<Ability id="arc-druid-leshy_warden-plant-whisperer-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-leshy_warden-plant-whisperer-su" flavor="A leshy warden's connection to the spirits of nature becomes strong enough that she can always hear them whispering.">Plant Whisperer (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Passive Ability">She is treated as if constantly under the effects of <Link to="/spell/speak_with_plants">speak with plants</Link>.</Pair>
<Pair title="Ability">Once per day, she can spend 10 minutes in communion with the spirits to learn the answers to her questions, as <Link to="/spell/commune_with_nature">commune with nature</Link>.</Pair>
</Ability>
</>};
const _life_channeler = {title: "Life Channeler", jsx: <><h2 id="arc-druid-life_channeler-life-channeler">Life Channeler</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 50</Link><br/>Life channelers take the natural cycle to what they believe is its logical conclusion. By sacrificing the life of a sentient creature, they can generate energy that guarantees fertility and prosperity for lower creatures like plants and animals. These druids preach to flocks who become willing sacrifices, each serving as a "king" or "queen" for a short time after being chosen as the next sacrifice.</p>
<Ability id="arc-druid-life_channeler-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-druid-life_channeler-alignment">Alignment</Pair>
<Pair hl title="Alters">Alignment requirements</Pair>
<Pair title="Info">In addition to a druid's usual alignment requirements, a life channeler must be of a nongood alignment. If she becomes good, she can no longer take levels in the druid class or fill her <em>wicker talismans</em> (see below), but she otherwise keeps all her abilities.</Pair>
</Ability>
<Ability id="arc-druid-life_channeler-plant-preservation-su" icon={["stairs-goal"]}>
<Pair single id="arc-druid-life_channeler-plant-preservation-su">Plant Preservation (Su)</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A life channeler must choose the <Link to="/domain/plant">Plant</Link> domain with her <em>nature bond</em> (she can select the Growth subdomain if she wishes).</Pair>
<Pair title="Ability">When she performs a <Link to="/misc/coup_de_grace">coup de grace</Link> that kills a sentient humanoid creature (not a summoned creature), she can do so ritualistically in order to affect the area centered on the body with the enrichment version of <Link to="/spell/plant_growth">plant growth</Link>. The sacrifice is a death effect.</Pair>
</Ability>
<Ability id="arc-druid-life_channeler-wicker-talismans-su" icon={["magic-swirl","stairs-goal"]}>
<Pair single id="arc-druid-life_channeler-wicker-talismans-su">Wicker Talismans (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability"><p>A life channeler gains a selection of wicker talismans that can store and convert the life energy of sentient creatures into the growth, health, and fertility of plants around her. The life channeler gains one wicker talisman corresponding to each level of druid spells she can cast, starting with 1st-level spells. These talismans are initially empty, but can hold life energy.</p>
<p>When the life channeler ritualistically kills a creature with a <em>coup de grace,</em> she can store life energy in a talisman instead of gaining the <em>plant growth</em> effect. The creature must be of a CR equal to at least twice the spell level of the corresponding talisman. For instance, a CR 8 creature's life energy could provide energy for a talisman holding up to a 4th-level spell.</p>
<p>A talisman is either full or empty; it can't hold more than one creature's life energy. A life channeler can expend the energy stored in a talisman to cast her domain spell of the talisman's level without expending a spell slot.</p>
</Pair>
<Pair title="At 6th Level">A life channeler gathers a flock of willing sacrifices. This grants her the benefits of the <Link to="/feat/leadership">Leadership</Link> feat, except that using a follower as a human sacrifice with this ability doesn't cause the life channeler to take a penalty to her Leadership score.</Pair>
</Ability>
<Ability id="arc-druid-life_channeler-rampant-growth" icon={["upgrade"]}>
<Pair single id="arc-druid-life_channeler-rampant-growth">Rampant Growth</Pair>
<Pair title="At 4th Level">A life channeler can enrich the land more than usual with her sacrifices. When ritually killing a creature with a <em>coup de grace</em> for the <em>plant growth</em> enrichment effect or casting <em>plant growth</em> for the enrichment effect from one of her talismans, the effect has a range of 1 mile instead of a range of half a mile.</Pair>
<Pair title="At 8th Level">If the sacrificed creature was at least CR 8, the effect lasts for 3 years instead of 1 year.</Pair>
<Pair title="At 12th Level">If the sacrificed creature was at least CR 12, the effect increases productivity to two-thirds above normal, instead of one-third above normal.</Pair>
<Pair title="Special">These effects stack, assuming the creature is high enough CR.</Pair>
</Ability>
<Ability id="arc-druid-life_channeler-stored-life" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-life_channeler-stored-life">Stored Life</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A life channeler gains a third option when using a <em>coup de grace</em> on a sentient humanoid. If the victim had a CR at least as high as the life channeler's class level, the life channeler can store the creature's life energy in her body. She can have the life energy from only 1 creature in her body at a time. While she is storing life energy, if she would take damage or die from a death effect or if she would gain negative levels or take energy drain, she can sacrifice the stored energy to negate the effect without spending an action.</Pair>
</Ability>
</>};
const _lion_shaman = {title: "Lion Shaman", jsx: <><h2 id="arc-druid-lion_shaman-lion-shaman">Lion Shaman</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 103</Link><br/>A shaman with this totem calls upon the proud lion, imposing and majestic, the mighty leader of deadly hunters.</p>
<Ability id="arc-druid-lion_shaman-nature-bond" icon={["info"]}>
<Pair single id="arc-druid-lion_shaman-nature-bond">Nature Bond</Pair>
<Pair hl title="Alters">Nature bond</Pair>
<Pair title="Choice">A lion shaman who chooses an animal companion must select a <Link to="/companion/lion">lion</Link>. If choosing a domain, the lion shaman must choose from the <Link to="/domain/animal">Animal</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/nobility">Nobility</Link>, and <Link to="/domain/sun">Sun</Link> domains.</Pair>
</Ability>
<Ability id="arc-druid-lion_shaman-wild-empathy-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-lion_shaman-wild-empathy-ex">Wild Empathy (Ex)</Pair>
<Pair hl title="Alters">Wild empathy</Pair>
<Pair title="Ability">A lion shaman can use <em>wild empathy</em> with felines as a <strong className="hl">full-round action</strong> with a +4 bonus.</Pair>
</Ability>
<Ability id="arc-druid-lion_shaman-totem-transformation-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="arc-druid-lion_shaman-totem-transformation-su">Totem Transformation (Su)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 minute/day per druid level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Standard Action"><p>A lion shaman may adopt an aspect of the lion while retaining her normal form. The druid may select from the following bonuses:</p>
<ul>
<li><strong>Movement</strong> (+20 enhancement bonus to land speed)</li>
<li><strong>Senses</strong> (low-light vision, <Link to="/umr/scent">scent</Link>)</li>
<li><strong><Link to="/umr/natural_weapons">Natural weapons</Link></strong> (bite [1d4], 2 claws [1d4] for a Medium druid, rake, +2 CMB to grapple)</li>
</ul>
<p>While using <em>totem transformation,</em> the lion shaman may speak normally and can cast <Link to="/spell/speak_with_animals">speak with animals</Link> (felines only) at will.</p>
</Pair>
<Pair title="At 7th Level">This becomes a <strong className="hl">move action</strong>.</Pair>
<Pair title="At 12th Level">This becomes a <strong className="hl">swift action</strong>.</Pair>
<Pair title="Special">This is a polymorph effect and cannot be used while the druid is using another polymorph effect, such as <em>wild shape.</em></Pair>
</Ability>
<Ability id="arc-druid-lion_shaman-totemic-summons-su" icon={["upgrade"]}>
<Pair single id="arc-druid-lion_shaman-totemic-summons-su">Totemic Summons (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Standard Action">A lion shaman may cast <Link to="/spell/summon_natures_ally">summon nature's ally</Link> to summon felines, and these summoned creatures gain <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to her druid level. She can apply the <Link to="/template/young">young</Link> template to any feline to reduce the level of the summoning spell required by one. She can also increase the level of summoning required by one in order to apply either the <Link to="/template/advanced">advanced</Link> or the <Link to="/template/giant">giant</Link> template, or increase it by two to apply both the advanced and giant templates.</Pair>
</Ability>
<Ability id="arc-druid-lion_shaman-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-lion_shaman-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Replaces">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">A lion shaman gains <em>wild shape,</em> but the ability functions at her druid level - 2. If she takes on the form of a feline, she instead uses her druid level + 2.</Pair>
</Ability>
<Ability id="arc-druid-lion_shaman-bonus-feat" icon={["stairs-goal"]}>
<Pair single id="arc-druid-lion_shaman-bonus-feat">Bonus Feat</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Ability">A lion shaman gains one of the following bonus feats: <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/lunge">Lunge</Link>, <Link to="/feat/improved_iron_will">Improved Iron Will</Link>, <Link to="/feat/iron_will">Iron Will</Link>, or <Link to="/feat/skill_focus">Skill Focus</Link> (Acrobatics).</Pair>
<Pair title="At 13th Level">The druid gains another feat from the list above.</Pair>
<Pair title="At 17th Level">The druid gains a third bonus feat from the list above.</Pair>
<Pair title="Special">She must meet the prerequisites for these bonus feats.</Pair>
</Ability>
</>};
const _mantella = {title: "Mantella", jsx: <><h2 id="arc-druid-mantella-mantella">Mantella</h2>
<p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 4</Link><br/>A mantella focuses on exploring her poisonous heritage, whether or not it has manifested in her own personal biology.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-druid-mantella--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/grippli">Grippli</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="arc-druid-mantella-poison-affinity-su" icon={["upgrade","broken-shield"]}>
<Pair single id="arc-druid-mantella-poison-affinity-su">Poison Affinity (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Info">If a form the mantella assumes with <em>wild shape</em> has any poison abilities, the mantella also gains those abilities. However, the mantilla can never use <em>wild shape</em> to take the form of an elemental.</Pair>
</Ability>
<Ability id="arc-druid-mantella-toxic-diet-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-mantella-toxic-diet-ex">Toxic Diet (Ex)</Pair>
<Pair hl title="Replaces">Spontaneous casting</Pair>
<Pair hl title="Alters">Venom immunity</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Passive Ability">Both the mantella and her animal companion gain immunity to poison.</Pair>
<Pair title="Immediate Action">When exposed to a dose of poison, a mantella can absorb the toxin and store it internally for up to 1 day.</Pair>
<Pair title="Swift Action">A mantella can secrete this poison; this changes the poison's type to injury and applies the dose of poison to all of the druid's natural attacks.</Pair>
<Pair title="Usage">3 times/day + 1 per two druid levels beyond 6th<ByLevelPop levels={[[6,3],[8,4],[10,5],[12,6],[14,7],[16,8],[18,9],[20,10]]} unit="time" postText="/day" /></Pair>
</Ability>
</>};
const _menhir_savant = {title: "Menhir Savant", jsx: <><h2 id="arc-druid-menhir_savant-menhir-savant">Menhir Savant</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 38</Link><br/>Some druids study the paths of nature's power through the nodes and ley lines that connect standing stones and megalithic circles, learning to tap into their energies.</p>
<Ability id="arc-druid-menhir_savant-spirit-sense-sp" icon={["stairs-goal"]}>
<Pair single id="arc-druid-menhir_savant-spirit-sense-sp">Spirit Sense (Sp)</Pair>
<Pair hl title="Replaces">Nature sense, wild empathy</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A menhir savant can detect the presence of undead; fey; outsiders; and astral, ethereal, or incorporeal creatures. This ability functions like <Link to="/spell/detect_undead">detect undead</Link>, and the druid detects all of these creatures rather than trying to detect one kind.</Pair>
</Ability>
<Ability id="arc-druid-menhir_savant-place-magic-su" icon={["upgrade"]}>
<Pair single id="arc-druid-menhir_savant-place-magic-su" flavor="A menhir savant learns to identify and tap into ley lines in different types of terrain.">Place Magic (Su)</Pair>
<Pair hl title="Replaces">Woodland stride, trackless step</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">3 + Wis modifier times/day</Pair>
<Pair title="Free Action">She can tap into the magic of a nearby ley line and increase her caster level by +1 for 1 round.</Pair>
</Ability>
<Ability id="arc-druid-menhir_savant-walk-the-lines-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-menhir_savant-walk-the-lines-su">Walk the Lines (Su)</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Usage">Wis modifier times/day</Pair>
<Pair title="Ability">A menhir savant can use her connection to ley lines to cast <Link to="/spell/transport_via_plants">transport via plants</Link>.</Pair>
</Ability>
<Ability id="arc-druid-menhir_savant-empty-body-su" icon={["magic-swirl"]}>
<Pair single id="arc-druid-menhir_savant-empty-body-su">Empty Body (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Usage">1 round/day per druid level; these rounds need not be consecutive</Pair>
<Pair title="Standard Action">A menhir savant can become ethereal, as if using <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>.</Pair>
</Ability>
</>};
const _mooncaller = {title: "Mooncaller", jsx: <><h2 id="arc-druid-mooncaller-mooncaller">Mooncaller</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 38</Link><br/>A mooncaller is bound to the subtle influences of the ever-changing moon and its endless cycles from light to dark and back again.</p>
<Ability id="arc-druid-mooncaller-night-sight-ex" icon={["stairs-goal"]}>
<Pair single id="arc-druid-mooncaller-night-sight-ex">Night Sight (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A mooncaller gains low-light vision. If she already has low-light vision, she gains darkvision with a range of 30 feet. If she already has darkvision, the range of her darkvision is increased by 30 feet.</Pair>
</Ability>
<Ability id="arc-druid-mooncaller-resist-call-of-the-wild-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-mooncaller-resist-call-of-the-wild-ex">Resist Call of the Wild (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A mooncaller gains a +4 bonus on saving throws to avoid confusion, daze, feeblemind, and insanity effects. She also gains a +4 bonus against the exceptional, spell-like, and supernatural abilities of creatures with the shapechanger subtype.</Pair>
</Ability>
<Ability id="arc-druid-mooncaller-purity-of-body-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-mooncaller-purity-of-body-ex">Purity of Body (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A mooncaller gains immunity to all diseases, including supernatural and magical diseases.</Pair>
</Ability>
<Ability id="arc-druid-mooncaller-wolfsbane-su" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-mooncaller-wolfsbane-su">Wolfsbane (Su)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="At 13th Level">A mooncaller gains DR 3/silver.</Pair>
<Pair title="At 16th Level">This becomes DR 4/silver.</Pair>
<Pair title="At 19th Level">This becomes DR 5/silver.</Pair>
</Ability>
</>};
const _mountain_druid = {title: "Mountain Druid", jsx: <><h2 id="arc-druid-mountain_druid-mountain-druid">Mountain Druid</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 100</Link><br/>As more and more of the soft, easy lands become cultivated and civilized, many druids look for refuge and solitude among the eternal peaks of the highest mountains.</p>
<Ability id="arc-druid-mountain_druid-mountaineer-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="arc-druid-mountain_druid-mountaineer-ex">Mountaineer (Ex)</Pair>
<Pair hl title="Replaces">Woodland stride</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Passive Ability">A mountain druid gains a bonus on Initiative checks and Climb, Knowledge (geography), Perception, Stealth, and Survival checks equal to <Link to="/misc/half">half</Link> her druid level in mountainous terrain, and she cannot be tracked in such an environment.</Pair>
</Ability>
<Ability id="arc-druid-mountain_druid-sure-footed-ex" icon={["upgrade"]}>
<Pair single id="arc-druid-mountain_druid-sure-footed-ex">Sure-Footed (Ex)</Pair>
<Pair hl title="Replaces">Trackless step</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">A mountain druid suffers no penalty to speed or on Acrobatics or Stealth checks when walking across steep slopes, rubble, or scree.</Pair>
</Ability>
<Ability id="arc-druid-mountain_druid-spire-walker-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arc-druid-mountain_druid-spire-walker-ex">Spire Walker (Ex)</Pair>
<Pair hl title="Replaces">Resist nature's lure</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">A mountain druid does not lose her Dexterity bonus when climbing. A mountain druid is immune to <Link to="/rule/altitude_sickness">altitude sickness</Link> and ignores the effects of a cold climate as if under the effects of <Link to="/spell/endure_elements">endure elements</Link>.</Pair>
</Ability>
<Ability id="arc-druid-mountain_druid-wild-shape-su" icon={["broken-shield","upgrade"]}>
<Pair single id="arc-druid-mountain_druid-wild-shape-su">Wild Shape (Su)</Pair>
<Pair hl title="Alters">Wild shape</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Ability">A mountain druid gains <em>wild shape,</em> except that her effective druid level for this ability is equal to her druid level - 2. A mountain druid cannot use <em>wild shape</em> to adopt a plant form.</Pair>
<Pair title="At 12th Level">She can assume the form of a Large giant as if using <Link to="/spell/giant_form_i">giant form I</Link>.</Pair>
<Pair title="At 16th Level">She may assume the form of a Huge giant as if using <Link to="/spell/giant_form_ii">giant form II</Link>.</Pair>
</Ability>
<Ability id="arc-druid-mountain_druid-mountain-stance-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-druid-mountain_druid-mountain-stance-ex">Mountain Stance (Ex)</Pair>
<Pair hl title="Replaces">Venom immunity</Pair>
<Pair title="Gained">At 9th Level</Pair>
<Pair title="Passive Ability">A mountain druid gains immunity to petrification and receives a +4 bonus on saving throws or to CMD to resist any attempt to push, pull, bull rush, or drag her, or to resist any other effect that would physically move her from her position (e.g., <Link to="/spell/repel_wood">repel wood</Link>, <Link to="/spell/reverse_gravity">reverse gravity</Link>, or being blown away by high winds). This does not protect her against being tripped, grappled, or overrun.</Pair>
</Ability>
<Ability id="arc-druid-mountain_druid-mountain-stone-ex" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="arc-druid-mountain_druid-mountain-stone-ex">Mountain Stone (Ex)</Pair>
<Pair hl title="Replaces">A thousand faces</Pair>
<Pair title="Gained">At 13th Level</Pair>
<Pair title="Ability">A mountain druid can transform her body into a weathered stone outcrop and back at will. This effect functions as <Link to="/spell/statue">statue</Link>.</Pair>
</Ability>
</>};
export default {aerie_protector:_aerie_protector,ancient_guardian:_ancient_guardian,ape_shaman:_ape_shaman,aquatic_druid:_aquatic_druid,arctic_druid:_arctic_druid,ashvawg_tamer:_ashvawg_tamer,bat_shaman:_bat_shaman,bear_shaman:_bear_shaman,blight_druid:_blight_druid,boar_shaman:_boar_shaman,cave_druid:_cave_druid,death_druid:_death_druid,defender_of_the_true_world:_defender_of_the_true_world,desert_druid:_desert_druid,devolutionist:_devolutionist,dinosaur_druid:_dinosaur_druid,draconic_druid:_draconic_druid,dragon_shaman:_dragon_shaman,drovier:_drovier,eagle_shaman:_eagle_shaman,elemental_ally:_elemental_ally,feral_child:_feral_child,feral_shifter:_feral_shifter,feyspeaker:_feyspeaker,fungal_pilgrim:_fungal_pilgrim,goliath_druid:_goliath_druid,green_faith_initiate:_green_faith_initiate,green_scourge:_green_scourge,halcyon_druid:_halcyon_druid,jungle_druid:_jungle_druid,kraken_caller:_kraken_caller,leshy_warden:_leshy_warden,life_channeler:_life_channeler,lion_shaman:_lion_shaman,mantella:_mantella,menhir_savant:_menhir_savant,mooncaller:_mooncaller,mountain_druid:_mountain_druid}