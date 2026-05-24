import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><h2 id="blrgbloodline-not_found-error">Error</h2>
<p>Unable to find the requested bloodrager bloodline.</p>
</>};
const _aberrant = {title: "Aberrant", jsx: <><h2 id="blrgbloodline-aberrant-aberrant-bloodline">Aberrant Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 17</Link></p>
<p>There is a taint in your blood that is both alien and bizarre. When you bloodrage, this manifests in peculiar and terrifying ways.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/iron_will">Iron Will</Link></p><Ability id="blrgbloodline-aberrant-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-aberrant-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="10th"><Link to="/spell/see_invisibility">See invisibility</Link></Pair>
<Pair plain title="13th"><Link to="/spell/displacement">Displacement</Link></Pair>
<Pair plain title="16th"><Link to="/spell/black_tentacles">Black tentacles</Link></Pair>
</Ability>
<h3 id="blrgbloodline-aberrant-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you gain the abilities and immunities of some <Link to="/type/aberration">aberrations</Link>, but show signs of your tainted heritage.</p>
<Ability id="blrgbloodline-aberrant-staggering-strike-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-aberrant-staggering-strike-su">Staggering Strike (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When you confirm a critical hit the target must succeed at a Fortitude saving throw or be <Link to="/misc/staggered">staggered</Link> for 1 round. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. These effects stack with the <Link to="/feat/staggering_critical">Staggering Critical</Link> feat; the target must save against each effect individually.</Pair>
</Ability>
<Ability id="blrgbloodline-aberrant-abnormal-reach-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-aberrant-abnormal-reach-su">Abnormal Reach (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Your limbs elongate; your reach increases by 5 feet.</Pair>
</Ability>
<Ability id="blrgbloodline-aberrant-aberrant-fortitude-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-aberrant-aberrant-fortitude-su">Aberrant Fortitude (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You become immune to the <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/nauseated">nauseated</Link> conditions.</Pair>
</Ability>
<Ability id="blrgbloodline-aberrant-unusual-anatomy-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-aberrant-unusual-anatomy-su">Unusual Anatomy (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Your internal anatomy shifts and changes, giving you a 50% chance to negate any critical hit or <Link to="/ability/sneak_attack">sneak attack</Link> that hits you. The damage is instead rolled normally.</Pair>
</Ability>
<Ability id="blrgbloodline-aberrant-aberrant-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-aberrant-aberrant-resistance-su">Aberrant Resistance (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">You are immune to disease, exhaustion, fatigue, and poison, and to the staggered condition.</Pair>
</Ability>
<Ability id="blrgbloodline-aberrant-aberrant-form-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="blrgbloodline-aberrant-aberrant-form-su">Aberrant Form (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain <Link to="/umr/blindsight">blindsight</Link> with a range of 60 feet and your bloodrager damage reduction increases by 1. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _abyssal = {title: "Abyssal", jsx: <><h2 id="blrgbloodline-abyssal-abyssal-bloodline">Abyssal Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 17</Link></p>
<p>Generations ago, a demon spread its filth into the essence of your bloodline. While it doesn't manifest in all of your kin, in those moments when you're bloodraging, you embody its terrifying presence.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-abyssal-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-abyssal-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="10th"><Link to="/spell/bulls_strength">Bull's strength</Link></Pair>
<Pair plain title="13th"><Link to="/spell/rage">Rage</Link></Pair>
<Pair plain title="16th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
</Ability>
<h3 id="blrgbloodline-abyssal-bloodline-powers">Bloodline Powers</h3>
<p>The power of the Abyss courses through your veins, causing horrific transformations during your bloodrage.</p>
<Ability id="blrgbloodline-abyssal-claws-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-abyssal-claws-su">Claws (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You grow claws while bloodraging. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</Pair>
<Pair title="At 4th Level">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 8th Level">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</Pair>
<Pair title="At 12th Level">Your claws become <Link to="/magic-enh/flaming">flaming</Link> weapons, which deal an additional 1d6 points of fire damage on a hit.</Pair>
</Ability>
<Ability id="blrgbloodline-abyssal-demonic-bulk-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-abyssal-demonic-bulk-su">Demonic Bulk (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can choose to grow one size category larger than your base size (as <Link to="/spell/enlarge_person">enlarge person</Link>) even if you aren't humanoid.</Pair>
</Ability>
<Ability id="blrgbloodline-abyssal-demon-resistances-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-abyssal-demon-resistances-su">Demon Resistances (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to acid, cold, and fire. At 16th level, these resistances increase to 10.</Pair>
</Ability>
<Ability id="blrgbloodline-abyssal-abyssal-bloodrage-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-abyssal-abyssal-bloodrage-su">Abyssal Bloodrage (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">The morale bonus to Strength granted by your bloodrage increases by 2, but the penalty to AC becomes -4 instead of -2.</Pair>
<Pair title="At 16th Level">The bonus to Strength increases by 4 instead.</Pair>
<Pair title="At 20th Level">The bonus increases by 6 instead.</Pair>
</Ability>
<Ability id="blrgbloodline-abyssal-demonic-aura-su" icon={["aura"]}>
<Pair single id="blrgbloodline-abyssal-demonic-aura-su">Demonic Aura (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose to exude an aura of fire. The aura is a 5-foot <Link to="/misc/burst">burst</Link> centered on you, and deals 2d6 + your Constitution modifier points of fire damage to creatures that end their turns within it.</Pair>
</Ability>
<Ability id="blrgbloodline-abyssal-demonic-immunities-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-abyssal-demonic-immunities-su">Demonic Immunities (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You're <Link to="/umr/immune">immune</Link> to electricity and poison. You have this benefit constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _aquatic = {title: "Aquatic", jsx: <><h2 id="blrgbloodline-aquatic-aquatic-bloodline">Aquatic Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 51</Link></p>
<p>The anger in your blood rises from the ocean depths, seeded by descent from undersea empires, creeping ichthyic infiltrators into remote seaside villages, or something deeper still.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/aquadynamic_focus">Aquadynamic Focus</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Fly), <Link to="/feat/steam_spell">Steam Spell</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-aquatic-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-aquatic-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/hydraulic_push">Hydraulic push</Link></Pair>
<Pair plain title="10th"><Link to="/spell/slipstream">Slipstream</Link></Pair>
<Pair plain title="13th"><Link to="/spell/hydraulic_torrent">Hydraulic torrent</Link></Pair>
<Pair plain title="16th"><Link to="/spell/control_water">Control water</Link></Pair>
</Ability>
<h3 id="blrgbloodline-aquatic-bloodline-powers">Bloodline Powers</h3>
<Ability id="blrgbloodline-aquatic-underwater-attacks-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-aquatic-underwater-attacks-su">Underwater Attacks (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your bludgeoning and slashing melee attacks underwater ignore the usual underwater penalties.</Pair>
</Ability>
<Ability id="blrgbloodline-aquatic-aquatic-adaptation-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="blrgbloodline-aquatic-aquatic-adaptation-ex">Aquatic Adaptation (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain a swim speed of 30 feet and the ability to breathe both underwater and in air.</Pair>
<Pair title="At 8th Level">You gain cold <Link to="/umr/resistance">resistance</Link> 5.</Pair>
<Pair title="At 12th Level">Your swim speed increases to 60 feet, and you have the 4th-level benefits of aquatic adaptation constantly, even when not in bloodrage (but not the 8th- and 12th-level benefits).</Pair>
</Ability>
<Ability id="blrgbloodline-aquatic-watersense-ex" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-aquatic-watersense-ex">Watersense (Ex)</Pair>
<Pair title="At 8th Level">You gain <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet in water.</Pair>
<Pair title="At 12th Level">You instead gain tremorsense with a range of 60 feet when in water.</Pair>
</Ability>
<Ability id="blrgbloodline-aquatic-wavedarter-sp-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-aquatic-wavedarter-sp-su">Wavedarter (Sp, Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Your bloodrage directs the flow of water to assist you in battle. While underwater, your reach increases by 5 feet and you gain the effects of <Link to="/spell/haste">haste</Link>.</Pair>
</Ability>
<Ability id="blrgbloodline-aquatic-currentcaller-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-aquatic-currentcaller-su">Currentcaller (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">3 times/day</Pair>
<Pair title="Swift Action">When underwater, at the start of your turn you can call up a <Link to="/rule/current">current</Link> with a speed up to 20 feet in the direction of your choice in your space (moving with you) that lasts until the end of your turn.</Pair>
</Ability>
<Ability id="blrgbloodline-aquatic-deep-fury-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="blrgbloodline-aquatic-deep-fury-su">Deep Fury (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain tremorsense 120 feet in water, as well as <Link to="/ability/evasion">evasion</Link> and <Link to="/umr/immunity">immunity</Link> to cold and <Link to="/rule/pressure_damage">pressure damage</Link>. You have these benefits constantly, even when not in bloodrage.</Pair>
</Ability>
</>};
const _arcane = {title: "Arcane", jsx: <><h2 id="blrgbloodline-arcane-arcane-bloodline">Arcane Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 18</Link></p>
<p>While others of your kin may be powerful wizards and sorcerers, the eldritch nature of the blood coursing through your veins transforms you into a spell-breaking terror.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/disruptive">Disruptive</Link>*, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/spellbreaker">Spellbreaker</Link>*</p>
<p>Your bloodrager levels count as fighter levels for the purposes of qualifying for any feats marked with an asterisk (*). This stacks with any levels in fighter you have.</p>
<Ability id="blrgbloodline-arcane-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-arcane-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/magic_missile">Magic missile</Link></Pair>
<Pair plain title="10th"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="13th"><Link to="/spell/lightning_bolt">Lightning bolt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/dimension_door">Dimension door</Link></Pair>
</Ability>
<h3 id="blrgbloodline-arcane-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, arcane power transforms you into an arcane juggernaut who can cut down even the most careful caster.</p>
<Ability id="blrgbloodline-arcane-disruptive-bloodrage-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-arcane-disruptive-bloodrage-su">Disruptive Bloodrage (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">The DC to <Link to="/rule/cast_spells_defensively">cast spells defensively</Link> increases by 2 for enemies within your threatened area. This increase stacks with that granted by the <Link to="/feat/disruptive">Disruptive</Link> feat.</Pair>
</Ability>
<Ability id="blrgbloodline-arcane-arcane-bloodrage-sp" icon={["upgrade"]}>
<Pair single id="blrgbloodline-arcane-arcane-bloodrage-sp">Arcane Bloodrage (Sp)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose one of the following spells and apply its effects to yourself: <Link to="/spell/blur">blur</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/resist_energy">resist energy</Link> (choose one energy type), or <Link to="/spell/spider_climb">spider climb</Link>. These effects last for as long as you continue bloodraging, regardless of the spell's normal duration.</Pair>
</Ability>
<Ability id="blrgbloodline-arcane-greater-arcane-bloodrage-sp" icon={["upgrade"]}>
<Pair single id="blrgbloodline-arcane-greater-arcane-bloodrage-sp">Greater Arcane Bloodrage (Sp)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can choose to apply the effects of either <Link to="/spell/displacement">displacement</Link> or <Link to="/spell/haste">haste</Link> to yourself. This is in addition to <em>arcane bloodrage,</em> and otherwise works as that ability.</Pair>
</Ability>
<Ability id="blrgbloodline-arcane-casters-scourge-ex" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-arcane-casters-scourge-ex">Caster's Scourge (Ex)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">You gain a number of extra attacks of opportunity equal to your Dexterity modifier (minimum 1). You can use these attacks of opportunity only against spellcasters in your threatened area who cast or attempt to cast defensively. The <Link to="/feat/spellbreaker">Spellbreaker</Link> feat, the <em>caster's bane</em> bloodrage power, or some similar effect is still required to make attacks of opportunity against spellcasters who are casting defensively. You have this ability constantly, even while not bloodraging.</Pair>
</Ability>
<Ability id="blrgbloodline-arcane-true-arcane-bloodrage-sp" icon={["upgrade"]}>
<Pair single id="blrgbloodline-arcane-true-arcane-bloodrage-sp">True Arcane Bloodrage (Sp)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose one of the following spells and apply its effects to yourself: <Link to="/spell/beast_shape_iv">beast shape IV</Link> (choose a creature your size or larger only), <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>, or <Link to="/spell/transformation">transformation</Link>. This is in addition to <em>arcane bloodrage</em> and <em>greater arcane bloodrage,</em> and otherwise works as those abilities.</Pair>
</Ability>
<Ability id="blrgbloodline-arcane-casters-bane-ex" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-arcane-casters-bane-ex">Caster's Bane (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Spellcasters with a caster level lower than your bloodrager level always provoke attacks of opportunity within your threatened area, even when casting defensively. You have this ability constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _black_blood = {title: "Black Blood", jsx: <><h2 id="blrgbloodline-black_blood-black-blood-bloodline">Black Blood Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 8</Link></p>
<p>Contact with the <Link to="/magic-artifact/black_blood_of_orv">black blood of Orv</Link> - by you or one of your ancestors - transformed your bloodline. This necromantic taint in your blood mutates you into something peculiar.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-black_blood-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-black_blood-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/chill_touch">Chill touch</Link></Pair>
<Pair plain title="10th"><Link to="/spell/unshakable_chill">Unshakable chill</Link></Pair>
<Pair plain title="13th"><Link to="/spell/elemental_aura">Elemental aura</Link></Pair>
<Pair plain title="16th"><Link to="/spell/black_tentacles">Black tentacles</Link></Pair>
</Ability>
<h3 id="blrgbloodline-black_blood-bloodline-powers">Bloodline Powers</h3>
<p>The insidious magic of black blood grants you profane powers and hideous resistances.</p>
<Ability id="blrgbloodline-black_blood-black-blood-immunity-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-black_blood-black-blood-immunity-su">Black Blood-Immunity (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your blood runs black with the blood of Orv. You are immune to the effects (both beneficial and destructive) of black blood. You have this benefit constantly, even while not bloodraging.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-black-blood-cold-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-black_blood-black-blood-cold-su">Black Blood-Cold (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 times/day</Pair>
<Pair title="Immediate Action">When you take damage from a slashing or piercing attack while bloodraging, you can grant your melee attacks the <Link to="/magic-enh/frost">frost</Link> weapon special ability for 2 rounds.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-abnormal-reach-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-black_blood-abnormal-reach-su">Abnormal Reach (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">The black blood pumping within you twists and elongates your limbs. Your reach increases by 5 feet.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-black-blood-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-black_blood-black-blood-resistance-su">Black Blood Resistance (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to cold and a +2 bonus on saving throws against <Link to="/rule/ability_drain">ability drain</Link>, death effects, disease, <Link to="/rule/energy_drain">energy drain</Link>, paralysis, and poison.</Pair>
<Pair title="At 16th Level">This resistance increases to 10 and the saving throw bonus increases to +4.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-retributive-spray-su" icon={["barbed-arrow"]}>
<Pair single id="blrgbloodline-black_blood-retributive-spray-su">Retributive Spray (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever you're hit by an attack or spell that deals slashing or piercing damage, your black blood sprays up to 10 feet toward the opponent who attacked you, striking the first creature along its path. That creature takes 1d8 points of cold damage + 1 point of cold damage for every 2 bloodrager levels you possess. A successful Reflex save (DC = 10 + 1/2 your bloodrager level + your Constitution modifier) halves the damage.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-black-blood-transfusion-su" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="blrgbloodline-black_blood-black-blood-transfusion-su">Black Blood Transfusion (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">When you confirm a critical hit, some of your black blood seeps into the target's wounds. The next time the target would be healed by positive energy, the healing burns away the black blood and ends this effect, providing no other benefit. This ability is not effective against creatures that have no blood. The black blood transfusion persists until it negates one positive energy healing effect, but it can be removed sooner with a successful DC 25 Heal check.</Pair>
</Ability>
<Ability id="blrgbloodline-black_blood-black-blood-immunity-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-black_blood-black-blood-immunity-su">Black Blood Immunity (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to cold, nonlethal damage, critical hits, and <Link to="/ability/sneak_attack">sneak attacks</Link>. You have this benefit constantly, even when not bloodraging.</Pair>
</Ability>
</>};
const _celestial = {title: "Celestial", jsx: <><h2 id="blrgbloodline-celestial-celestial-bloodline">Celestial Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>By way of a celestial ancestor or divine intervention, the blood of angels fills your body with a holy potency, granting you a majestic visage and angelic powers when you enter your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/mounted_combat">Mounted Combat</Link>, <Link to="/feat/ride_by_attack">Ride-By Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><Ability id="blrgbloodline-celestial-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-celestial-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/bless">Bless</Link></Pair>
<Pair plain title="10th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="13th"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="16th"><Link to="/spell/holy_smite">Holy smite</Link></Pair>
</Ability>
<h3 id="blrgbloodline-celestial-bloodline-powers">Bloodline Powers</h3>
<p>Your bloodline grants a number of resistances and changes your form to something angelic and terrible to behold when you bloodrage.</p>
<Ability id="blrgbloodline-celestial-angelic-attacks-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-celestial-angelic-attacks-su">Angelic Attacks (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your melee attacks are considered good-aligned weapons for the purpose of bypassing damage reduction. Furthermore, when you deal damage with a melee attack to an evil outsider, you deal an additional 1d6 points of damage. This additional damage stacks with effects such as <Link to="/spell/align_weapon">align weapon</Link> and those granted by a weapon with the <Link to="/magic-enh/holy">holy</Link> weapon special ability.</Pair>
</Ability>
<Ability id="blrgbloodline-celestial-celestial-resistances-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-celestial-celestial-resistances-ex">Celestial Resistances (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to acid and cold.</Pair>
<Pair title="At 12th Level">These resistances increase to 10.</Pair>
</Ability>
<Ability id="blrgbloodline-celestial-conviction-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-celestial-conviction-su">Conviction (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once per bloodrage you can reroll one ability check, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the GM reveals the results. You must take the second result, even if it's worse.</Pair>
</Ability>
<Ability id="blrgbloodline-celestial-wings-of-heaven-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-celestial-wings-of-heaven-su">Wings of Heaven (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">You can choose to sprout feathery wings and fly with a speed of 60 feet and good maneuverability.</Pair>
<Pair title="At 20th Level">Your fly speed increases to 80 feet.</Pair>
</Ability>
<Ability id="blrgbloodline-celestial-angelic-protection-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-celestial-angelic-protection-su">Angelic Protection (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">You gain a +4 deflection bonus to AC and a +4 resistance bonus on saving throws against attacks made or effects created by evil creatures. In addition, you are affected as if subject to a <Link to="/spell/protection_from_evil">protection from evil</Link> spell. This effect cannot be dispelled.</Pair>
</Ability>
<Ability id="blrgbloodline-celestial-ascension-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-celestial-ascension-su">Ascension (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You become infused with the power of the heavens. You gain <Link to="/umr/immunity">immunity</Link> to acid, cold, and petrification. You also gain resistance 10 to electricity and fire, as well as a +4 racial bonus on saving throws against poison. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _destined = {title: "Destined", jsx: <><h2 id="blrgbloodline-destined-destined-bloodline">Destined Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>Your bloodline is destined for great things. When you bloodrage, you exude a greatness that makes all but the most legendary creatures seem lesser.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/leadership">Leadership</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><Ability id="blrgbloodline-destined-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-destined-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/shield">Shield</Link></Pair>
<Pair plain title="10th"><Link to="/spell/blur">Blur</Link></Pair>
<Pair plain title="13th"><Link to="/spell/protection_from_energy">Protection from energy</Link></Pair>
<Pair plain title="16th"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></Pair>
</Ability>
<h3 id="blrgbloodline-destined-bloodline-powers">Bloodline Powers</h3>
<p>Your future greatness grants you the might to strike your enemies with awe.</p>
<Ability id="blrgbloodline-destined-destined-strike-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-destined-destined-strike-su">Destined Strike (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 times/day.</Pair>
<Pair title="Free Action">You can grant yourself an insight bonus equal to 1/2 your bloodrager level (minimum 1) on one melee attack.</Pair>
<Pair title="At 12th Level">You can use this five times a day.</Pair>
</Ability>
<Ability id="blrgbloodline-destined-fated-bloodrager-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-destined-fated-bloodrager-su">Fated Bloodrager (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain a luck bonus to AC and on saving throws. This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of your bloodrager level.</Pair>
</Ability>
<Ability id="blrgbloodline-destined-certain-strike-su" icon={["rolling-dices"]}>
<Pair single id="blrgbloodline-destined-certain-strike-su">Certain Strike (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You may reroll an attack roll once during a bloodrage. You must decide to use this ability after the die is rolled, but before the GM reveals the results. You must take the second result, even if it's worse.</Pair>
</Ability>
<Ability id="blrgbloodline-destined-defy-death-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-destined-defy-death-su">Defy Death (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">Once a day</Pair>
<Pair title="Ability">When an attack or spell that deals damage would result in your death, you can attempt a DC 20 Fortitude save. If you succeed, you are instead reduced to 1 hit point; if you succeed and already have less than 1 hit point, you instead take no damage.</Pair>
</Ability>
<Ability id="blrgbloodline-destined-unstoppable-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="blrgbloodline-destined-unstoppable-su">Unstoppable (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">Any critical threats you score are automatically confirmed. Any critical threats made against you confirm only if the second roll results in a natural 20 (or is automatically confirmed).</Pair>
</Ability>
<Ability id="blrgbloodline-destined-victory-or-death-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-destined-victory-or-death-su">Victory or Death (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You are immune to paralysis and petrification, as well as to the stunned, dazed, and staggered conditions. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _draconic = {hasJL:true,title: "Draconic", jsx: <><div className="jumpList" id="blrgbloodline-draconic-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="blrgbloodline-draconic-expanded-bloodlines">Expanded Bloodlines</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-esoteric-dragons">Esoteric Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-imperial-dragons">Imperial Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-outer-dragons">Outer Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-primal-dragons">Primal Dragons</InnerLink></li></ul></div><h2 id="blrgbloodline-draconic-draconic-bloodline">Draconic Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>At some point in your family's history, a dragon interbred with your bloodline. Now, the sublime monster's ancient power fuels your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Fly), <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-draconic-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-draconic-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/shield">Shield</Link></Pair>
<Pair plain title="10th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="13th"><Link to="/spell/fly">Fly</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fear">Fear</Link></Pair>
</Ability>
<h3 id="blrgbloodline-draconic-bloodline-powers">Bloodline Powers</h3>
<p>The power of dragons flows through you and manifests in a number of ways. At 1st level, you must select one of the chromatic or metallic dragon types. Once chosen, this cannot be changed. A number of your bloodline powers deal damage and grant resistances based on your dragon type, as noted below.</p>
<p><strong>Dragon:</strong> Choose one.</p>
<ScrollContainer id="blrgbloodline-draconic--table-0"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
<th>Breath Shape</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/family/black_dragon">Black<IonRippleEffect /></Link></td>
<td>Acid</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/blue_dragon">Blue<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/green_dragon">Green<IonRippleEffect /></Link></td>
<td>Acid</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/red_dragon">Red<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/white_dragon">White<IonRippleEffect /></Link></td>
<td>Cold</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/brass_dragon">Brass<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/bronze_dragon">Bronze<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/copper_dragon">Copper<IonRippleEffect /></Link></td>
<td>Acid</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/gold_dragon">Gold<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/silver_dragon">Silver<IonRippleEffect /></Link></td>
<td>Cold</td>
<td>30-foot cone</td>
</tr>
</tbody></table></ScrollContainer>
<Ability id="blrgbloodline-draconic-claws-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-draconic-claws-su">Claws (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You grow claws. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</Pair>
<Pair title="At 4th Level">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 8th Level">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</Pair>
<Pair title="At 12th Level">Your claws deal an additional 1d6 points of damage of your energy type on a hit.</Pair>
</Ability>
<Ability id="blrgbloodline-draconic-draconic-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-draconic-draconic-resistance-ex">Draconic Resistance (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 against your energy type and a +1 natural armor bonus to AC.</Pair>
<Pair title="At 8th Level">The energy resistance increases to 10 and your natural armor bonus becomes +2.</Pair>
<Pair title="At 16th Level">Your natural armor bonus becomes +4.</Pair>
</Ability>
<Ability id="blrgbloodline-draconic-breath-weapon-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-draconic-breath-weapon-su">Breath Weapon (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Standard Action">You gain a <Link to="/umr/breath_weapon">breath weapon</Link> that you can use once per day. This breath weapon deals 1d6 points of damage of your energy type per bloodrager level. Those caught in the area of the breath can attempt a Reflex saving throw for half damage. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. The shape of the breath weapon depends on your dragon type (as indicated on the above table).</Pair>
<Pair title="At 16th Level">You can use this ability twice a day.</Pair>
<Pair title="At 20th Level">You can use this ability three times a day.</Pair>
</Ability>
<Ability id="blrgbloodline-draconic-dragon-wings-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-draconic-dragon-wings-su">Dragon Wings (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can choose to have leathery wings grow from your back, giving you a fly speed of 60 feet with average maneuverability.</Pair>
<Pair title="At 16th Level">Your fly speed increases to 80 feet with good maneuverability.</Pair>
</Ability>
<Ability id="blrgbloodline-draconic-dragon-form-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-draconic-dragon-form-su">Dragon Form (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can choose to take the form of your chosen dragon type (as <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, but with average or good maneuverability, as you would gain from the dragon wings bloodrage power above).</Pair>
</Ability>
<Ability id="blrgbloodline-draconic-power-of-wyrms-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="blrgbloodline-draconic-power-of-wyrms-su">Power of Wyrms (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to paralysis, sleep, and damage from your energy type. You also gain <Link to="/umr/blindsense">blindsense</Link> with a range of 60 feet. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
<h3 id="blrgbloodline-draconic-expanded-bloodlines" data-hash-target>Expanded Bloodlines</h3>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 4</Link></p>
<p>Chromatic and metallic dragons remain the most common dragons to impart their legacy onto other species. The bloodrager and sorcerer classes each include a draconic bloodline that assumes the character's lineage is somehow connected with the power of a chromatic or metallic dragon. Presented below are expanded options for the existing draconic bloodlines, increasing the selection of heritages to include numerous new true dragons. Each of the draconic bloodlines below alters the bloodrager's or sorcerer's bloodline arcana.</p>
<p><strong>Energy Types:</strong> Several of these new draconic bloodline options include non-standard damage types. For the sake of game balance, many of the damage types available to the bloodlines below somewhat differ from those produced by the parent dragon. Specifically, force energy, negative energy, and sonic energy have been altered to different types of energy. In cases where a dragon's energy type is listed as physical damage (such as bludgeoning or piercing), use that damage type when determining your breath weapon damage. For the purpose of the dragon resistance bloodline power, you gain DR equal to half the energy resistance you would normally gain against all attacks of that specific damage type. A character with the power of wyrms bloodline power gains immunity to her bloodline's damage type. For all other purposes, such as archetypes, bloodline powers, and feats, treat that dragon's energy type as fire.</p>
<h3 id="blrgbloodline-draconic-esoteric-dragons" data-hash-target>Esoteric Dragons</h3>
<p>Though many of the enigmatic esoteric dragons remain aloof or intentionally distant from mortal affairs, occult dragons are the most likely to imprint their bloodline onto humanoids. Often such draconic blood is the result of ongoing experimentation. Scions of other esoteric dragons are far more unusual; such bloodlines usually result from explorers traveling the realms where these distant dragons dwell and being exposed to some spectacular and ill-understood power.</p>
<ScrollContainer id="blrgbloodline-draconic--table-1"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
<th>Breath Shape</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/monster/adult_astral_dragon">Astral<IonRippleEffect /></Link></td>
<td>Bludgeoning</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/adult_dream_dragon">Dream<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/adult_etheric_dragon">Etheric<IonRippleEffect /></Link></td>
<td>Bludgeoning</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/adult_nightmare_dragon">Nightmare<IonRippleEffect /></Link></td>
<td>Acid</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/monster/adult_occult_dragon">Occult<IonRippleEffect /></Link></td>
<td>Cold or Fire*</td>
<td>30-foot cone</td>
</tr>
</tbody></table></ScrollContainer>
<p>*Choose one when the bloodline is first selected</p>
<h3 id="blrgbloodline-draconic-imperial-dragons" data-hash-target>Imperial Dragons</h3>
<p>The blood of imperial dragons is well known throughout the lands of Tian Xia, where such dragons form a strong part of much of the continent's mythology. This is particularly true in Xa Hoi, where imperial dragons rule. Imperial dragons in other lands may vary in their interactions with humanoids, but universally accept the praise (and fear) of those around them. Their connection to the land makes the blood of these dragons a powerful arcane catalyst in the making of heroes.</p>
<ScrollContainer id="blrgbloodline-draconic--table-2"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
<th>Breath Shape</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/family/forest_dragon">Forest<IonRippleEffect /></Link></td>
<td>Piercing</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/sea_dragon">Sea<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/sky_dragon">Sky<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/sovereign_dragon">Sovereign<IonRippleEffect /></Link></td>
<td>Bludgeoning</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/underworld_dragon">Underworld<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>60-foot line</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="blrgbloodline-draconic-outer-dragons" data-hash-target>Outer Dragons</h3>
<p>The interests of outer dragons take them across the cosmos. Strange devices or experimentation are most likely to lead to the addition of outer dragon blood into a world's ecosystem. The hidden blood of an outer dragon in a family's lineage is difficult to detect or stamp out. On Golarion, these dragons most commonly find themselves drawn to the fabled land of Numeria and its alien technology, though they usually refuse to share any of their insights with that nation's residents.</p>
<ScrollContainer id="blrgbloodline-draconic--table-3"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
<th>Breath Shape</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/family/lunar_dragon">Lunar<IonRippleEffect /></Link></td>
<td>Cold</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/solar_dragon">Solar<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/time_dragon">Time<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/void_dragon">Void<IonRippleEffect /></Link></td>
<td>Cold</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/vortex_dragon">Vortex<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>30-foot cone</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="blrgbloodline-draconic-primal-dragons" data-hash-target>Primal Dragons</h3>
<p>Born from the elemental planes or the Shadow Plane, primal dragons are infused with primeval power. These dragons traveled to the Material Plane in ages past, and many of their kind continue to spread their blood and magical influence among the humanoid races of the world. Even the malign umbral dragons prosper in the caverns of the Darklands and the mountains of Nidal. Any exposure to or experimentation with primal magics may introduce primal dragon blood into a lineage.</p>
<ScrollContainer id="blrgbloodline-draconic--table-4"><table>
<thead>
<tr>
<th>Dragon Type</th>
<th>Energy Type</th>
<th>Breath Shape</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/family/brine_dragon">Brine<IonRippleEffect /></Link></td>
<td>Acid</td>
<td>60-foot line</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/cloud_dragon">Cloud<IonRippleEffect /></Link></td>
<td>Electricity</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/crystal_dragon">Crystal<IonRippleEffect /></Link></td>
<td>Piercing</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/magma_dragon">Magma<IonRippleEffect /></Link></td>
<td>Fire</td>
<td>30-foot cone</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/family/umbral_dragon">Umbral<IonRippleEffect /></Link></td>
<td>Cold</td>
<td>30-foot cone</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _elemental = {title: "Elemental", jsx: <><h2 id="blrgbloodline-elemental-elemental-bloodline">Elemental Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 20</Link></p>
<p>The power of the elements resides in you, and at times you can hardly control its fury. This influence comes either from an elemental outsider in your family history or from a moment when you or your ancestors were exposed to a powerful elemental force or cataclysm.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><Ability id="blrgbloodline-elemental-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-elemental-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair title="Info">Spells marked with an asterisk (&#42;) always deal a type of energy damage determined by your element, regardless of the spell's normal effects. In addition, the subtype of these spells changes to match the energy type of your element.</Pair>
<Pair plain title="7th"><Link to="/spell/burning_hands">Burning hands</Link> &#42;</Pair>
<Pair plain title="10th"><Link to="/spell/scorching_ray">Scorching ray</Link> &#42;</Pair>
<Pair plain title="13th"><Link to="/spell/protection_from_energy">Protection from energy</Link></Pair>
<Pair plain title="16th"><Link to="/spell/elemental_body_i">Elemental body I</Link></Pair>
</Ability>
<h3 id="blrgbloodline-elemental-bloodline-powers">Bloodline Powers</h3>
<p>One of the four elements infuses your being, and you can draw upon its power while bloodraging. At first level, you must select an element: air, earth, fire, or water. Once chosen, this cannot be changed. A number of your abilities deal damage and grant resistances based on your element, as noted below.</p>
<p><strong>Element:</strong> Choose one.</p>
<ScrollContainer id="blrgbloodline-elemental--table-0"><table>
<thead>
<tr>
<th>Element</th>
<th>Energy Type</th>
<th>Elemental Movement</th>
</tr>
</thead>
<tbody><tr>
<td>Air</td>
<td>Electricity</td>
<td>Fly 60 feet (good)</td>
</tr>
<tr>
<td>Earth</td>
<td>Acid</td>
<td>Burrow 30 feet</td>
</tr>
<tr>
<td>Fire</td>
<td>Fire</td>
<td>+30 feet base land speed</td>
</tr>
<tr>
<td>Water</td>
<td>Cold</td>
<td>Swim 60 feet</td>
</tr>
</tbody></table></ScrollContainer>
<Ability id="blrgbloodline-elemental-elemental-strikes-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-elemental-elemental-strikes-su">Elemental Strikes (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 times/day.</Pair>
<Pair title="Swift Action">You can imbue your melee attacks with elemental energy. For 1 round, your melee attacks deal 1d6 points of additional damage of your energy type.</Pair>
<Pair title="At 8th Level">You can now use this five times a day.</Pair>
<Pair title="At 20th Level">All of your melee attacks deal this damage, and this ability no longer requires a swift action to activate.</Pair>
</Ability>
<Ability id="blrgbloodline-elemental-elemental-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-elemental-elemental-resistance-ex">Elemental Resistance (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain energy <Link to="/umr/resistance">resistance</Link> 10 against your energy type.</Pair>
</Ability>
<Ability id="blrgbloodline-elemental-elemental-movement-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-elemental-elemental-movement-su">Elemental Movement (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain a special movement type or bonus based on your chosen element, as indicated on the above table.</Pair>
</Ability>
<Ability id="blrgbloodline-elemental-power-of-the-elements-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-elemental-power-of-the-elements-su">Power of the Elements (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">The energy damage done by your <em>elemental strikes</em> bloodline ability bypasses resistance to that energy type, and still deals half damage to creatures with <Link to="/umr/immunity">immunity</Link> to energy of that type.</Pair>
</Ability>
<Ability id="blrgbloodline-elemental-elemental-form-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-elemental-elemental-form-su">Elemental Form (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Ability">When entering a bloodrage you can take an elemental form as <Link to="/spell/elemental_body_iv">elemental body IV</Link>.</Pair>
</Ability>
<Ability id="blrgbloodline-elemental-elemental-body-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-elemental-elemental-body-su">Elemental Body (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Elemental power surges through your body. You gain immunity to <Link to="/ability/sneak_attack">sneak attacks</Link>, critical hits, and damage from your energy type. You have this benefit constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _fey = {title: "Fey", jsx: <><h2 id="blrgbloodline-fey-fey-bloodline">Fey Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 21</Link></p>
<p>One of your ancestors was <Link to="/type/fey">fey</Link>, or the fey realm somehow intermixed with your bloodline. It affects your bloodrage in tricky and surprising ways.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/step_up">Step Up</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link></p><Ability id="blrgbloodline-fey-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-fey-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="10th"><Link to="/spell/hideous_laughter">Hideous laughter</Link></Pair>
<Pair plain title="13th"><Link to="/spell/haste">Haste</Link></Pair>
<Pair plain title="16th"><Link to="/spell/confusion">Confusion</Link></Pair>
</Ability>
<h3 id="blrgbloodline-fey-bloodline-powers">Bloodline Powers</h3>
<p>The power of the natural world saturates your being, and manifests itself when you bloodrage.</p>
<Ability id="blrgbloodline-fey-confusing-critical-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-fey-confusing-critical-su">Confusing Critical (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Fey power courses through your attacks. Each time you confirm a critical hit, the target must succeed at a Will saving throw or be <Link to="/misc/confused">confused</Link> for 1 round. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. This is a mind-affecting compulsion effect.</Pair>
</Ability>
<Ability id="blrgbloodline-fey-leaping-charger-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-fey-leaping-charger-su">Leaping Charger (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You are able to leap over overgrowth and similar impediments with ease while charging. When you <Link to="/rule/charge">charge</Link>, you ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> (but not other creatures). You can move through it at normal speed, and it does not impede your charge.</Pair>
</Ability>
<Ability id="blrgbloodline-fey-blurring-movement-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-fey-blurring-movement-su">Blurring Movement (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You become a blur of motion when you move. As long as you move at least 10 feet, you gain the effects of <Link to="/spell/blur">blur</Link> for 1 round.</Pair>
</Ability>
<Ability id="blrgbloodline-fey-quickling-bloodrage-sp" icon={["upgrade"]}>
<Pair single id="blrgbloodline-fey-quickling-bloodrage-sp">Quickling Bloodrage (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">While bloodraging you're treated as if you are under the effects of <em>haste.</em></Pair>
</Ability>
<Ability id="blrgbloodline-fey-one-with-nature-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="blrgbloodline-fey-one-with-nature-su">One with Nature (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">Three times a day.</Pair>
<Pair title="Move-Equivalent Action"><p>You can transport yourself from one tree to another tree, as <Link to="/spell/tree_stride">tree stride</Link> with half the transport range.</p>
<p>Creatures of the animal or plant types don't attack you unless compelled to do so by magic or you attack them first.</p>
<p>You gain these abilities even while not bloodraging.</p>
</Pair>
</Ability>
<Ability id="blrgbloodline-fey-fury-of-the-fey-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-fey-fury-of-the-fey-su">Fury of the Fey (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose one type of creature (and subtype for humanoids or outsiders) that can be affected by the <Link to="/magic-enh/bane">bane</Link> weapon special ability. All of your melee attacks are considered to have <em>bane</em> against that type. This ability doesn't stack with other forms of <em>bane.</em></Pair>
</Ability>
</>};
const _hag = {title: "Hag", jsx: <><h2 id="blrgbloodline-hag-hag-bloodline">Hag Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 27</Link></p>
<p><Link to="/family/hag">Hags</Link> interbreed with other races frequently, and those children who escape their grasp may pass their heritage on to later generations before it reemerges. The potent humors that accompany hag blood are better suited to a bloodrager's ferocity than to traditional spellcasting.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/mothers_gift">Mother's Gift</Link></p><Ability id="blrgbloodline-hag-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-hag-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/chill_touch">Chill touch</Link></Pair>
<Pair plain title="10th"><Link to="/spell/blindness_deafness">Blindness/deafness</Link></Pair>
<Pair plain title="13th"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
<Pair plain title="16th"><Link to="/spell/charm_monster">Charm monster</Link></Pair>
</Ability>
<h3 id="blrgbloodline-hag-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you manifest the physical power and arcane corruption of your hag ancestor.</p>
<Ability id="blrgbloodline-hag-evil-eye-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-hag-evil-eye-su">Evil Eye (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 + Cha modifier times/day</Pair>
<Pair title="Standard Action">You can curse an opponent with a wicked glance, afflicting one target within 30 feet that you can see, causing it to take a -2 penalty to AC and on attack rolls for 1 round per bloodrager level or until the target hits you with an attack. The target can negate this effect with a successful Will saving throw (DC = 10 + half your bloodrager level + your Charisma modifier).</Pair>
</Ability>
<Ability id="blrgbloodline-hag-hag-fortitude-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-hag-hag-fortitude-su">Hag Fortitude (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You become immune to mundane and magical diseases.</Pair>
<Pair title="At 8th Level">You also become immune to poison.</Pair>
</Ability>
<Ability id="blrgbloodline-hag-hag-transformation-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-hag-hag-transformation-su">Hag Transformation (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Your form grows more twisted and powerful while bloodraging, but clumsy, blind aggression clouds your mind. Your morale bonus to Strength increases by 2, and you gain low-light vision and darkvision (60 feet), but you take a -2 penalty to both Dexterity and Wisdom for the duration of your bloodrage.</Pair>
<Pair title="At 16th Level">You apply your morale bonus on Will saving throws while bloodraging to Fortitude and Reflex saving throws against spells and spell-like abilities.</Pair>
</Ability>
<Ability id="blrgbloodline-hag-covenguard-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-hag-covenguard-su">Covenguard (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">3 times/day.</Pair>
<Pair title="Standard Action">You can cast <em>bestow curse</em> as a spell-like ability. You count as a hag for the purposes of joining a coven; the coven must contain at least one hag.</Pair>
</Ability>
<Ability id="blrgbloodline-hag-curse-conduit-su" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="blrgbloodline-hag-curse-conduit-su">Curse Conduit (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability"><p>You gain immunity to negative energy damage and all spells with the curse descriptor.</p>
<p>Whenever you confirm a critical hit with a melee weapon, you can immediately target your opponent with a <em>bestow curse</em> spell or spell-like ability as a free action.</p>
</Pair>
</Ability>
</>};
const _infernal = {title: "Infernal", jsx: <><h2 id="blrgbloodline-infernal-infernal-bloodline">Infernal Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 21</Link></p>
<p>The Pit lives in your blood. Maybe one of your ancestors was seduced by the powers of <Link to="/rule/hell">Hell</Link> or made a deal with a <Link to="/family/devil">devil</Link>. Either way, its corruption seethes within your lineage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/iron_will">Iron Will</Link></p><Ability id="blrgbloodline-infernal-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-infernal-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/protection_from_good">Protection from good</Link></Pair>
<Pair plain title="10th"><Link to="/spell/scorching_ray">Scorching ray</Link></Pair>
<Pair plain title="13th"><Link to="/spell/suggestion">Suggestion</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fire_shield">Fire shield</Link></Pair>
</Ability>
<h3 id="blrgbloodline-infernal-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, hellfire infuses your blood with terrifying effects.</p>
<Ability id="blrgbloodline-infernal-hellfire-strike-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-infernal-hellfire-strike-su">Hellfire Strike (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 times/day.</Pair>
<Pair title="Swift Action">You can infuse your attacks with hellfire. When you do, your melee attacks gain the <Link to="/magic-enh/flaming">flaming</Link> weapon special ability for 1 round.</Pair>
<Pair title="At 12th Level">You can use this ability five times per day, and the effect is treated as <Link to="/magic-enh/flaming_burst">flaming burst</Link>.</Pair>
</Ability>
<Ability id="blrgbloodline-infernal-infernal-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-infernal-infernal-resistance-ex">Infernal Resistance (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain fire <Link to="/umr/resistance">resistance</Link> 5, as well as a +2 bonus on saving throws against poison.</Pair>
<Pair title="At 8th Level">Your fire resistance increases to 10, and the bonus on saving throws against poison increases to +4.</Pair>
</Ability>
<Ability id="blrgbloodline-infernal-diabolical-arrogance-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-infernal-diabolical-arrogance-su">Diabolical Arrogance (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain a +4 bonus on saving throws against enchantment and fear effects.</Pair>
</Ability>
<Ability id="blrgbloodline-infernal-dark-wings-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-infernal-dark-wings-su">Dark Wings (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose to have bat-like wings grow from your back, giving you a fly speed of 60 feet with average maneuverability.</Pair>
<Pair title="At 16th Level">Your fly speed increases to 80 feet with good maneuverability.</Pair>
</Ability>
<Ability id="blrgbloodline-infernal-hellfire-charge-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-infernal-hellfire-charge-su">Hellfire Charge (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">When you <Link to="/rule/charge">charge</Link> the attack you make at the end of the charge gains the benefit of your <em>hellfire strike</em> without expending a use of it. If you already have <em>hellfire strike</em> active, the fire damage ignores fire resistance of 10 or lower.</Pair>
</Ability>
<Ability id="blrgbloodline-infernal-fiend-of-the-pit-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="blrgbloodline-infernal-fiend-of-the-pit-su">Fiend of the Pit (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to fire and poison. You also gain resistance 10 to acid and cold, and gain the <Link to="/umr/see_in_darkness">see in darkness</Link> ability. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _kyton = {title: "Kyton", jsx: <><h2 id="blrgbloodline-kyton-kyton-bloodline">Kyton Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 9</Link></p>
<p>In the shadowy land of Nidal, the influence of <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> and the Midnight Lord's favored servants - the <Link to="/family/kyton">kytons</Link> - taints the land and its inhabitants. Just as an eclipse drives animals wild, so too does the darkness unleash a madness from deep within you.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (spiked chain), <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-kyton-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-kyton-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/persuasive_goad">Persuasive goad</Link></Pair>
<Pair plain title="10th"><Link to="/spell/pain_strike">Pain strike</Link></Pair>
<Pair plain title="13th"><Link to="/spell/deeper_darkness">Deeper darkness</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fear">Fear</Link></Pair>
</Ability>
<h3 id="blrgbloodline-kyton-bloodline-powers">Bloodline Powers</h3>
<p>The sadistic power of the kytons flows through you, twisting you into a creature of pain and darkness when you bloodrage.</p>
<Ability id="blrgbloodline-kyton-painful-strike-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-kyton-painful-strike-su">Painful Strike (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">When you confirm a critical hit, the target is <Link to="/misc/sickened">sickened</Link> for a number of rounds equal to 1/2 your bloodrager level (minimum 1). During this time, the creature must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + the spell's level) in order to cast a spell.</Pair>
</Ability>
<Ability id="blrgbloodline-kyton-grasping-chains-su" icon={["upgrade","stairs-goal"]}>
<Pair single id="blrgbloodline-kyton-grasping-chains-su">Grasping Chains (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Chains cover your body and extend from your arms, grasping at the air around you and granting you a +4 bonus on Climb skill checks.</Pair>
<Pair title="At 9th Level">The bonus increases to +8 and you gain a Climb speed equal to 1/2 your base speed.</Pair>
</Ability>
<Ability id="blrgbloodline-kyton-armor-of-chains-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-kyton-armor-of-chains-su">Armor of Chains (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to cold and the chains covering your body provide a +4 armor bonus to AC with no armor check penalty, maximum Dexterity bonus, or additional weight.</Pair>
<Pair title="At 16th Level">The resistance increases to 10 and the armor bonus increases to +8.</Pair>
</Ability>
<Ability id="blrgbloodline-kyton-agonys-embrace-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-kyton-agonys-embrace-su">Agony's Embrace (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Whenever you're hit by a critical hit, your morale bonus to Strength from your bloodrage increases by 2 for 1d6 rounds or until your rage ends.</Pair>
<Pair title="At 16th Level">The bonus to Strength instead increases by 4.</Pair>
<Pair title="At 20th Level">The bonus to Strength instead increases by +6.</Pair>
</Ability>
<Ability id="blrgbloodline-kyton-unnerving-gaze-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-kyton-unnerving-gaze-su">Unnerving Gaze (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">Your foes begin to see flashes of the faces of dead loved ones when they look at your face. You gain a <Link to="/umr/gaze">gaze</Link> attack with a range of 30 feet. All foes who fail a Will save (DC = 10 + 1/2 your bloodrager level + your Charisma modifier) become <Link to="/misc/shaken">shaken</Link> for 1d3 rounds.</Pair>
</Ability>
<Ability id="blrgbloodline-kyton-kyton-immunities-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-kyton-kyton-immunities-su">Kyton Immunities (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to cold and DR 10/good and silver. You have this benefit constantly, even when not bloodraging.</Pair>
</Ability>
</>};
const _martyred = {title: "Martyred", jsx: <><h2 id="blrgbloodline-martyred-martyred-bloodline">Martyred Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 19</Link></p>
<p>One of your ancestors paid the ultimate price for her beliefs. This distant relative martyred herself out of a devout dedication to some specific cause, and that sacrifice has infused you with power that you can use for good - or for ill. When you bloodrage, an inspiring fury conjures echoes of your forebear's incredible determination and selfless dedication, both offering you protection and amplifying your ability to punish any who dare incur your wrath.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/heroic_defiance">Heroic Defiance</Link>, <Link to="/feat/heroic_recovery">Heroic Recovery</Link>, <Link to="/feat/leadership">Leadership</Link>, <Link to="/feat/persuasive">Persuasive</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-martyred-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-martyred-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/endure_elements">Endure elements</Link></Pair>
<Pair plain title="10th"><Link to="/spell/surmount_affliction">Surmount affliction</Link></Pair>
<Pair plain title="13th"><Link to="/spell/heroism">Heroism</Link></Pair>
<Pair plain title="16th"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></Pair>
</Ability>
<h3 id="blrgbloodline-martyred-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you channel the power of your ancestor's self-sacrifice to urge yourself and your allies on to greater feats of strength than would otherwise be possible.</p>
<Ability id="blrgbloodline-martyred-ancestral-strikes-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-martyred-ancestral-strikes-su">Ancestral Strikes (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">3 times/day.</Pair>
<Pair title="Swift Action">You can imbue your melee attacks with a measure of your ancestor's power. For 1 round, your melee attacks deal 1d6 additional points of good-aligned damage if you are good, or they deal 1d6 additional points of evil-aligned damage if you are evil. If you are neutral, you must choose which type of damage this ability deals when you choose this bloodline, and the decision cannot be changed later.</Pair>
<Pair title="At 8th Level">You can use this ability up to five times per day.</Pair>
<Pair title="At 20th Level">All your melee attacks deal this additional damage, and you don't need to activate this ability.</Pair>
</Ability>
<Ability id="blrgbloodline-martyred-martyrs-resistances-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-martyred-martyrs-resistances-su">Martyr's Resistances (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain fire <Link to="/umr/resistance">resistance</Link> 5 and you gain a +2 bonus on saving throws against fear and pain effects.</Pair>
<Pair title="At 8th Level">Your fire resistance increases to 10, and the bonus on saving throws against fear and pain effects increases to +4.</Pair>
</Ability>
<Ability id="blrgbloodline-martyred-forebears-reserves-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-martyred-forebears-reserves-su">Forebear's Reserves (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You can reroll a saving throw once during a bloodrage. You must decide to use this ability after the die is rolled but before the GM reveals the result. You must take the second result, even if it's worse.</Pair>
</Ability>
<Ability id="blrgbloodline-martyred-ancestral-champion-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-martyred-ancestral-champion-su">Ancestral Champion (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">When your <em>ancestral strikes</em> target a creature whose alignment is opposite to the type of damage the strikes deal, your ancestral strikes instead deal 2d6 additional points of damage of that type.</Pair>
</Ability>
<Ability id="blrgbloodline-martyred-sacrificial-exchange-su" icon={["shield-reflect"]}>
<Pair single id="blrgbloodline-martyred-sacrificial-exchange-su">Sacrificial Exchange (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Swift Action">While you are bloodraging, you can take a -2 penalty to Armor Class to grant one ally within 30 feet a +4 morale bonus to one ability score. (This penalty to your AC stacks with the penalty from your bloodrage.) The penalty and bonus last for the duration of your bloodrage.</Pair>
<Pair title="At 20th Level">The penalty this ability imposes changes to -4, and the ally's bonus increases to +6.</Pair>
</Ability>
<Ability id="blrgbloodline-martyred-eternal-martyr-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-martyred-eternal-martyr-su">Eternal Martyr (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Your ancestor's act of martyrdom infuses your spirit. Your ancestor's sacrifice transcends time and space, keeping you alive when you otherwise shouldn't be and sanctifying your form. You become immune to death effects. Material components for spells and effects to bring you back to life (such as <Link to="/spell/raise_dead">raise dead</Link> or <Link to="/spell/resurrection">resurrection</Link>) cost half as much as normal. Your body cannot be turned into an undead creature, as though you were affected by a permanent <Link to="/spell/hallow">hallow</Link> effect (caster level = your bloodrager level). You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _medusa = {title: "Medusa", jsx: <><h2 id="blrgbloodline-medusa-medusa-bloodline">Medusa Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<p>No magical creature is more iconic in Iblydan lore than the <Link to="/monster/medusa">medusa</Link>. Perhaps your lineage traces back to a medusa, or an ancestor survived a medusa's petrifying gaze and was forever changed by the experience. However the medusa's influence entered your bloodline, when you bloodrage, you gain fearsome and ancient powers.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-medusa-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-medusa-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/cause_fear">Cause fear</Link></Pair>
<Pair plain title="10th"><Link to="/spell/resist_energy">Resist energy</Link></Pair>
<Pair plain title="13th"><Link to="/spell/hold_person">Hold person</Link></Pair>
<Pair plain title="16th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
</Ability>
<h3 id="blrgbloodline-medusa-bloodline-powers">Bloodline Powers</h3>
<p>The cold fury of your cursed rage can freeze others in their tracks.</p>
<Ability id="blrgbloodline-medusa-gaze-su" icon={["smoking-finger"]}>
<Pair single id="blrgbloodline-medusa-gaze-su">Gaze (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Standard Action">You can harness the power of the medusa through your gaze. Choose a creature within your line of sight who is within 30 feet of you. The creature must succeed at a Fortitude saving throw or have its speed halved for a number of rounds equal to your Constitution modifier (minimum 1 round). The DC of this save is equal to 10 + half your bloodrager level + your Constitution modifier.</Pair>
</Ability>
<Ability id="blrgbloodline-medusa-gift-of-the-ancients-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-medusa-gift-of-the-ancients-su">Gift of the Ancients (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain a +2 resistance bonus on saving throws against <Link to="/umr/gaze">gaze</Link> attacks and to resist poison. You also gain a +2 competence bonus on Perception checks.</Pair>
<Pair title="At 8th Level">These bonuses increase to +4.</Pair>
</Ability>
<Ability id="blrgbloodline-medusa-staggering-gaze-su" icon={["smoking-finger"]}>
<Pair single id="blrgbloodline-medusa-staggering-gaze-su">Staggering Gaze (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">When a creature is affected by your <em>gaze</em> bloodline power, it is <Link to="/misc/staggered">staggered</Link> in addition to being slowed.</Pair>
</Ability>
<Ability id="blrgbloodline-medusa-vipers-touch-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-medusa-vipers-touch-su">Viper's Touch (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">You grow two sets of venomous claws resembling the teeth of a serpent. These claws are primary <Link to="/umr/natural_attacks">natural attacks</Link> that deal 1d8 points of damage (1d6 if you are Small). The claws also gain the following poison ability.</Pair>
</Ability>
<div className="sideNoteWrap"><ScrollContainer id="blrgbloodline-medusa--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Viper's Venom</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Claw-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your bloodrager level + your Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Ability id="blrgbloodline-medusa-stone-resistance-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-medusa-stone-resistance-su">Stone Resistance (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">You gain acid <Link to="/umr/resistance">resistance</Link> 10 and are immune to disease, poison, and the <Link to="/misc/sickened">sickened</Link> and staggered conditions. You also cannot be <Link to="/rule/flanked">flanked</Link>.</Pair>
</Ability>
<Ability id="blrgbloodline-medusa-true-petrification-su" icon={["smoking-finger"]}>
<Pair single id="blrgbloodline-medusa-true-petrification-su">True Petrification (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Standard Action">You can use your <em>gaze</em> bloodline ability to permanently turn a creature to stone, as <Link to="/spell/flesh_to_stone">flesh to stone</Link>. You can still use the less powerful versions of your <em>gaze</em> if you do not wish to turn the target to stone, but you must declare this at the time of the attack.</Pair>
</Ability>
</>};
const _naga = {title: "Naga", jsx: <><h2 id="blrgbloodline-naga-naga-bloodline">Naga Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 16</Link></p>
<p>The blood of the powerful, serpentine aberrations known as nagas runs through your veins, fueling your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/stealthy">Stealthy</Link></p><Ability id="blrgbloodline-naga-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-naga-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="10th"><Link to="/spell/invisibility">Invisibility</Link></Pair>
<Pair plain title="13th"><Link to="/spell/lightning_bolt">Lightning bolt</Link></Pair>
<Pair plain title="16th"><Link to="/spell/poison">Poison</Link></Pair>
</Ability>
<h3 id="blrgbloodline-naga-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, arcane power surges through your body, infusing you with the aberrant power and terrible strength of the <Link to="/family/naga">nagas</Link>.</p>
<Ability id="blrgbloodline-naga-serpent-fangs-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-naga-serpent-fangs-su">Serpent Fangs (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You grow serpentine fangs. These fangs are treated as a natural weapon, granting you a bite attack as a primary <Link to="/umr/natural_weapons">natural weapon</Link>. This attack deals damage equal to 1d8 (1d6 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 4th Level">Your fangs are considered magic weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 8th Level">The damage increases to 1d10 (1d8 if you are Small) + your Strength modifier.</Pair>
</Ability>
<Ability id="blrgbloodline-naga-serpentine-swim-sp" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-naga-serpentine-swim-sp">Serpentine Swim (Sp)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You can swim sinuously, like a snake. You gain a swim speed equal to your base speed.</Pair>
</Ability>
<Ability id="blrgbloodline-naga-naga-defenses-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-naga-naga-defenses-su">Naga Defenses (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">When entering a bloodrage, you gain a +2 enhancement bonus to your natural armor bonus and a +4 bonus on saves against poison.</Pair>
<Pair title="At 16th Level">The bonus to your natural armor increases to +4 and the bonus on saves against poison increases to +8.</Pair>
<Pair title="At 20th Level">The bonus to your natural armor increases to +6, and you gain immunity to poison.</Pair>
</Ability>
<Ability id="blrgbloodline-naga-poison-fangs-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-naga-poison-fangs-su">Poison Fangs (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">You gain the <Link to="/umr/poison">poison</Link> special attack, tied to your bite attack. Your poison is below.</Pair>
</Ability>
<div className="sideNoteWrap"><ScrollContainer id="blrgbloodline-naga--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your bloodrager level + your Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><Ability id="blrgbloodline-naga-naga-form-sp" icon={["upgrade"]}>
<Pair single id="blrgbloodline-naga-naga-form-sp">Naga Form (Sp)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can assume the form of a naga (as per <Link to="/spell/naga_shape_iii">naga shape III</Link>).</Pair>
</Ability>
<Ability id="blrgbloodline-naga-naga-thoughts-sp-su" icon={["armor-upgrade","stairs-goal"]}>
<Pair single id="blrgbloodline-naga-naga-thoughts-sp-su">Naga Thoughts (Sp, Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">When entering a bloodrage, you become immune to charm effects and all forms of mind reading, you gain a +2 bonus on saving throws against other mind-affecting effects, you gain the effects of the spell <Link to="/spell/see_invisibility">see invisibility</Link>, and you can use <Link to="/spell/detect_thoughts">detect thoughts</Link> at will.</Pair>
</Ability>
</>};
const _phoenix = {title: "Phoenix", jsx: <><h2 id="blrgbloodline-phoenix-phoenix-bloodline">Phoenix Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 82</Link></p>
<p>One of your ancestors may have witnessed the fiery resurrection of a <Link to="/monster/phoenix">phoenix</Link> or been healed by the grace of this legendary bird. Whatever the case, the flames of the phoenix burn brightly within your soul, filling you with an inextinguishable vitality that can withstand the most harrowing of assaults. When you bloodrage, vibrant energy boils forth from beneath your skin, granting you both the soothing warmth to heal a friend's wounds and the brutal power to burn flesh from bone. Your rage is an awesome and terrible thing to behold, as the raw power of your untamed life force can allow you to pull yourself back from the grasp of death itself.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/critical_focus">Critical Focus</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/mobility">Mobility</Link></p><Ability id="blrgbloodline-phoenix-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-phoenix-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/burning_hands">Burning hands</Link></Pair>
<Pair plain title="10th"><Link to="/spell/lesser_restoration">Lesser restoration</Link></Pair>
<Pair plain title="13th"><Link to="/spell/cure_serious_wounds">Cure serious wounds</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fire_shield">Fire shield</Link></Pair>
</Ability>
<h3 id="blrgbloodline-phoenix-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you channel the molten fires of the <Link to="/monster/phoenix">phoenix</Link> to sear your foes and fill your allies with an unquenchable vigor.</p>
<Ability id="blrgbloodline-phoenix-dispelling-strikes-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-phoenix-dispelling-strikes-su">Dispelling Strikes (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">No limits on usage, except a creature can only be targeted once per day.</Pair>
<Pair title="Ability">When you confirm a critical hit against a target, you can also attempt to dispel the target as if you had cast <Link to="/spell/dispel_magic">dispel magic</Link> as a bloodrager spell and used the targeted dispel function. You can dispel only a single magical effect per use of this ability.</Pair>
<Pair title="At 8th Level">You gain a +2 bonus on your dispel check when using this ability.</Pair>
<Pair title="At 20th Level">You can attempt to dispel all magical effects on your target when using this ability.</Pair>
</Ability>
<Ability id="blrgbloodline-phoenix-heart-of-fire-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-phoenix-heart-of-fire-su">Heart of Fire (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain fire <Link to="/umr/resistance">resistance</Link> 5. Whenever you are subjected to a magical healing effect from a <Link to="/main/cure_spells">cure spell</Link>, you regain 1 additional hit point per die rolled.</Pair>
<Pair title="At 8th Level">Your fire resistance increases to 10, and you regain 2 additional hit points per die rolled when you are healed by a <em>cure</em> spell.</Pair>
</Ability>
<Ability id="blrgbloodline-phoenix-blazing-vitality-su" icon={["aura"]}>
<Pair single id="blrgbloodline-phoenix-blazing-vitality-su">Blazing Vitality (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">When tensions run high and your emotions flare, you let forth waves of restorative energy from within. You emit a 10-foot-radius aura of energizing fire while bloodraging. Any ally that ends their turn within this aura gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to your Constitution modifier. These temporary hit points last for 1 minute.</Pair>
</Ability>
<Ability id="blrgbloodline-phoenix-molten-wings-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-phoenix-molten-wings-su">Molten Wings (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When entering a bloodrage you can choose to have wings of flame sprout from your back, giving you a fly speed of 60 feet with average maneuverability.</Pair>
<Pair title="At 16th Level">Your fly speed increases to 80 feet with good maneuverability.</Pair>
</Ability>
<Ability id="blrgbloodline-phoenix-self-resurrection-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-phoenix-self-resurrection-su">Self-Resurrection (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">From the ashes of your body springs forth new life. Once per day when you are reduced below 0 hit points while you are bloodraging, you can call upon the power in your blood to pull yourself back from death. This functions as a <Link to="/spell/breath_of_life">breath of life</Link> spell cast upon yourself. Using this ability does not take an action. This ability does not function if your body is completely destroyed by an effect such as <Link to="/spell/disintegrate">disintegrate</Link>.</Pair>
<Pair title="At 20th Level">This instead functions as a <Link to="/spell/heal">heal</Link> spell, except that the healing can return you to life as per <em>breath of life,</em> using your bloodrager level as your caster level.</Pair>
</Ability>
<Ability id="blrgbloodline-phoenix-phoenix-fire-su" icon={["mailed-fist","aura","armor-upgrade"]}>
<Pair single id="blrgbloodline-phoenix-phoenix-fire-su">Phoenix Fire (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">The power of the phoenix brings righteous destruction to any who oppose it. While bloodraging, you gain the following effects: your melee attacks deal an additional 2d6 points of fire damage, any enemies within 20 feet of you must succeed at a Reflex save (DC = 10 + 1/2 your bloodrager level + your Constitution modifier) or take 4d6 points of fire damage at the start of their turn, and any creature that attacks you with a natural or non-reach weapon takes 1d6 points of fire damage (no save) with each successful hit.</Pair>
</Ability>
</>};
const _salamander = {title: "Salamander", jsx: <><h2 id="blrgbloodline-salamander-salamander-bloodline">Salamander Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 5</Link></p>
<p>Salamanders are fierce warriors and master smiths, and you wield their might and mastery of metal by birthright.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/improved_iron_will">Improved Iron Will</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Perception), <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-salamander-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-salamander-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/lead_blades">Lead blades</Link></Pair>
<Pair plain title="10th"><Link to="/spell/make_whole">Make whole</Link></Pair>
<Pair plain title="13th"><Link to="/spell/versatile_weapon">Versatile weapon</Link></Pair>
<Pair plain title="16th"><Link to="/spell/fire_shield">Fire shield</Link> (warm only)</Pair>
</Ability>
<h3 id="blrgbloodline-salamander-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you gain the form and flame of the <Link to="/monster/salamander">salamander</Link> and the following powers.</p>
<Ability id="blrgbloodline-salamander-serpents-tail-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-salamander-serpents-tail-su">Serpent's Tail (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">Your legs twist together into a slithering serpentine tail. Your speed is reduced by 10 feet (to a minimum of 5 feet), and you can't be <Link to="/rule/trip">tripped</Link>. Your footwear melds into your body and is non-functional unless it provides a constant bonus and does not need to be activated. You also gain a tail slap <Link to="/umr/natural_attack">natural attack</Link> that deals 1d6 points of damage (1d4 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 4th Level">Your speed is no longer reduced by 10 feet.</Pair>
<Pair title="At 8th Level">Your tail slap's damage increases to 1d8 (1d6 if you are Small) + your Strength modifier.</Pair>
<Pair title="At 12th Level">Your reach with your tail slap increases by 5 feet.</Pair>
</Ability>
<Ability id="blrgbloodline-salamander-salamander-scales-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-salamander-salamander-scales-ex">Salamander Scales (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">You gain fire <Link to="/umr/resistance">resistance</Link> 5 and a +1 natural armor bonus to AC.</Pair>
<Pair title="At 8th Level">Your fire resistance increases to 10 and your natural armor bonus increases to +2.</Pair>
<Pair title="At 16th Level">Your fire resistance increases to 20 and your natural armor bonus increases to +3.</Pair>
</Ability>
<Ability id="blrgbloodline-salamander-bloodsmith-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-salamander-bloodsmith-su">Bloodsmith (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can choose one manufactured weapon you wield, shield you wield, or piece of armor you wear to gain the benefit of <Link to="/spell/greater_magic_weapon">greater magic weapon</Link> (weapon) or <Link to="/spell/magic_vestment">magic vestment</Link> (shield or armor). The caster level of this effect is equal to your bloodrager level, and its effects end when your bloodrage ends or when you no longer wear or wield the weapon, shield, or armor.</Pair>
</Ability>
<Ability id="blrgbloodline-salamander-scorching-heat-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-salamander-scorching-heat-su">Scorching Heat (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Passive Ability">Your weapons conduct heat. You deal 1d6 additional points of fire damage with natural weapons and melee attacks made with metal weapons. You also deal 2d6 points of fire damage per round to any creature you <Link to="/rule/grapple">grapple</Link>. This does not damage your equipment.</Pair>
</Ability>
<Ability id="blrgbloodline-salamander-master-bloodsmith-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-salamander-master-bloodsmith-su">Master Bloodsmith (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">You can affect up to two items simultaneously with your <em>bloodsmith</em> bloodline power.</Pair>
<Pair title="At 20th Level">You can affect up to three items.</Pair>
</Ability>
<Ability id="blrgbloodline-salamander-essence-of-fire-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-salamander-essence-of-fire-ex">Essence of Fire (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You become <Link to="/umr/immune">immune</Link> to fire damage. In addition, your bloodrager damage reduction increases by 5. If you don't have bloodrager damage reduction, you gain DR 10/magic instead. You have these benefits constantly, even while you are not bloodraging.</Pair>
</Ability>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="blrgbloodline-shadow-shadow-bloodline">Shadow Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 16</Link></p>
<p>Because of your heritage, you can move and see through shadows as if you are part of them. Your fury absorbs light, warmth, and strength.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/step_up">Step Up</Link></p><Ability id="blrgbloodline-shadow-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-shadow-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></Pair>
<Pair plain title="10th"><Link to="/spell/darkvision">Darkvision</Link></Pair>
<Pair plain title="13th"><Link to="/spell/deeper_darkness">Deeper darkness</Link></Pair>
<Pair plain title="16th"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></Pair>
</Ability>
<h3 id="blrgbloodline-shadow-bloodline-powers">Bloodline Powers</h3>
<p>Your bloodline gives you powers over light and darkness.</p>
<Ability id="blrgbloodline-shadow-shadow-vision-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-shadow-shadow-vision-su">Shadow Vision (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">While bloodraging, you gain low-light vision if you don't already have it. If you already have low-light vision, you gain darkvision to a distance of 30 feet.</Pair>
<Pair title="At 10th Level">You gain darkvision with a range of 30 feet, or add 30 feet to the range of your darkvision if you already have it.</Pair>
</Ability>
<Ability id="blrgbloodline-shadow-shades-of-rage-su" icon={["aura"]}>
<Pair single id="blrgbloodline-shadow-shades-of-rage-su">Shades of Rage (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Whenever you enter a bloodrage, the <Link to="/rule/light_level">light level</Link> within 30 feet of you decreases by one step. Natural light is always affected, but magical illumination dispels this ability if the caster of the light effect succeeds at a caster level check against a DC equal to 10 + your class level.</Pair>
</Ability>
<Ability id="blrgbloodline-shadow-strength-of-shadows-su" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="blrgbloodline-shadow-strength-of-shadows-su">Strength of Shadows (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain cold <Link to="/umr/resistance">resistance</Link> 10. Your melee attacks deal additional cold damage equal to the critical multiplier of the weapon you use.</Pair>
<Pair title="At 13th Level">Your cold resistance increases to 20.</Pair>
<Pair title="At 18th Level">You become <Link to="/umr/immune">immune</Link> to cold damage.</Pair>
</Ability>
<Ability id="blrgbloodline-shadow-strike-through-shadow-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-shadow-strike-through-shadow-su">Strike Through Shadow (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">1 time/day + 1 per three bloodrager levels beyond 12th<ByLevelPop levels={[[12,1],[15,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You can declare a single melee attack as a strike through shadow. This attack moves through its target's shadow and strikes from below or inside its armor. You make this attack against the target's touch AC.</Pair>
</Ability>
<Ability id="blrgbloodline-shadow-shadow-door-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-shadow-shadow-door-su">Shadow Door (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">You can take any part of your movement through shadows, teleporting to another location within 60 feet. This ability functions as <Link to="/spell/dimension_door">dimension door</Link>, except you can't use shadow door in brightly lit areas. You can teleport in this manner a total of 10 feet per class level each day.</Pair>
</Ability>
<Ability id="blrgbloodline-shadow-shadow-warrior-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="blrgbloodline-shadow-shadow-warrior-su">Shadow Warrior (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You become shadow and fury personified. You see perfectly in natural and magical darkness. Whenever you deal hit point damage with a spell or attack, you also deal 2 points of <Link to="/rule/strength_damage">Strength damage</Link> to each creature that took damage.</Pair>
</Ability>
</>};
const _shapechanger = {title: "Shapechanger", jsx: <><h2 id="blrgbloodline-shapechanger-shapechanger-bloodline">Shapechanger Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 20</Link></p>
<p>The blood of <Link to="/monster/doppelganger">doppelgangers</Link>, <Link to="/monster/faceless_stalker">faceless stalkers</Link>, <Link to="/template/lycanthrope">lycanthropes</Link>, or other shapechangers courses through your veins.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/fleet">Fleet</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><Ability id="blrgbloodline-shapechanger-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-shapechanger-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/enlarge_person">Enlarge person</Link></Pair>
<Pair plain title="10th"><Link to="/spell/alter_self">Alter self</Link></Pair>
<Pair plain title="13th"><Link to="/spell/fly">Fly</Link></Pair>
<Pair plain title="16th"><Link to="/spell/stoneskin">Stoneskin</Link></Pair>
</Ability>
<h3 id="blrgbloodline-shapechanger-bloodline-powers">Bloodline Powers</h3>
<p>Transformative powers in your blood emerge when you bloodrage.</p>
<Ability id="blrgbloodline-shapechanger-shifting-aspect-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-shapechanger-shifting-aspect-su">Shifting Aspect (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">You gain the benefit of the <Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link> feat while bloodraging. As part of the action to enter a bloodrage, you can choose any one of the four manifestations to affect you for the duration of your bloodrage.</Pair>
</Ability>
<Ability id="blrgbloodline-shapechanger-spontaneous-change-sp" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-shapechanger-spontaneous-change-sp">Spontaneous Change (Sp)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Swift Action">When entering a bloodrage, you can cast a transmutation spell that affects only you, provided that the spell's normal casting time is 1 round or shorter. The spell lasts for as long as you continue bloodraging, regardless of the spell's normal duration. You can use this ability only to cast bloodrager spells you know.</Pair>
</Ability>
<Ability id="blrgbloodline-shapechanger-evolving-aspect-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-shapechanger-evolving-aspect-su">Evolving Aspect (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">You gain <em>Aspect of the Beast</em> as a bonus feat even if you don't meet the prerequisites. As normal for the feat, you must choose one of the manifestations, and you gain its benefits even while not bloodraging. When you enter a bloodrage, you can choose a second manifestation to affect you simultaneously for the duration of your bloodrage.</Pair>
</Ability>
<Ability id="blrgbloodline-shapechanger-beastskin-su" icon={["armor-upgrade","mailed-fist"]}>
<Pair single id="blrgbloodline-shapechanger-beastskin-su">Beastskin (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">When entering a bloodrage, you can cause your skin to grow thicker and more bestial. Your <Link to="/rule/damage_reduction">damage reduction</Link> from your bloodrager levels increases by 2, but it can be bypassed with silver weapons. Your natural attacks (including unarmed strikes) are then treated as silver for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="blrgbloodline-shapechanger-shed-skin-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-shapechanger-shed-skin-su">Shed Skin (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Immediate Action">When your bloodrage ends, you can choose one spell or spell-like ability affecting you and attempt to shake it off. Attempt a dispel check (1d20 + your bloodrager level) as if you were casting <Link to="/spell/dispel_magic">dispel magic</Link>. If you succeed, the effect is dispelled.</Pair>
</Ability>
<Ability id="blrgbloodline-shapechanger-true-shapechanger-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="blrgbloodline-shapechanger-true-shapechanger-su">True Shapechanger (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You are immune to all transmutation spells and effects unless you are a willing target. You can also use <Link to="/spell/greater_polymorph">greater polymorph</Link> at will as a spell-like ability with a caster level equal to your bloodrager level targeting only yourself. These effects function even while you're not bloodraging.</Pair>
</Ability>
</>};
const _sphinx = {title: "Sphinx", jsx: <><h2 id="blrgbloodline-sphinx-sphinx-bloodline">Sphinx Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 23</Link></p>
<p>Those who successfully traded riddles with sphinxes sometimes find themselves or their descendants exhibiting both arcane power and violent fury. These bloodragers find being outwitted or outmaneuvered especially infuriating; though they are usually scholarly and erudite, their fits of frenzied rage are all the more terrifying in comparison.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/rending_fury">Rending Fury</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Intimidate), <Link to="/feat/voice_of_the_sibyl">Voice of the Sibyl</Link></p><Ability id="blrgbloodline-sphinx-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-sphinx-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/divine_favor">Divine favor</Link></Pair>
<Pair plain title="10th"><Link to="/spell/touch_of_idiocy">Touch of idiocy</Link></Pair>
<Pair plain title="13th"><Link to="/spell/searing_light">Searing light</Link></Pair>
<Pair plain title="16th"><Link to="/spell/bestow_curse">Bestow curse</Link></Pair>
</Ability>
<h3 id="blrgbloodline-sphinx-bloodline-powers">Bloodline Powers</h3>
<p>You gain the ruthless claws and implacable voice of the <Link to="/family/sphinx">sphinx</Link> while bloodraging.</p>
<Ability id="blrgbloodline-sphinx-claws-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-sphinx-claws-su">Claws (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You grow claws while bloodraging. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</Pair>
<Pair title="At 4th Level">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 8th Level">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</Pair>
<Pair title="At 12th Level">The critical threat range for your claws increases to 19-20.</Pair>
</Ability>
<Ability id="blrgbloodline-sphinx-roar-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-sphinx-roar-su">Roar (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Usage">3 + Cha modifier times/day</Pair>
<Pair title="Standard Action">The bloodrager learns the secrets of the sphinx's roar. He can roar as a standard action a number of times per day equal to 3 + his Charisma modifier. Enemies within 60 feet of the bloodrager that can hear the roar must succeed at a Will save (DC = 10 + half the bloodrager's character level + his Charisma modifier) or become <Link to="/misc/frightened">frightened</Link> for 1d6 rounds. Whether or not the save is successful, a creature cannot be the target of the bloodrager's roar again for 24 hours.</Pair>
<Pair title="At 10th Level">The bloodrager can instead cause targets who fail their save to be <Link to="/misc/panicked">panicked</Link> or <Link to="/misc/stunned">stunned</Link> (bloodrager's choice) and <Link to="/misc/deafened">deafened</Link> for the duration.</Pair>
<Pair title="At 16th Level">The bloodrager can instead cause targets who fail their save to be <Link to="/rule/paralyzed">paralyzed</Link> for 1 round.</Pair>
</Ability>
<Ability id="blrgbloodline-sphinx-desert-fortitude-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-sphinx-desert-fortitude-su">Desert Fortitude (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/resistance">resistance</Link> 5 to electricity and fire. In addition, you gain <Link to="/spell/endure_elements">endure elements</Link> as a constant spell-like ability and a +2 competence bonus on saves against arcane spells.</Pair>
<Pair title="At 6th Level">Your resistance to electricity and fire increases to 10.</Pair>
</Ability>
<Ability id="blrgbloodline-sphinx-rending-rage-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-sphinx-rending-rage-su">Rending Rage (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Ability">You gain a <Link to="/umr/rend">rend</Link> attack, as the universal monster rule, that deals extra damage equal to 2d4 + 1-1/2 times your Strength modifier.</Pair>
<Pair title="At 18th Level">This damage increases to 2d6 + 1-1/2 times your Strength modifier.</Pair>
</Ability>
<Ability id="blrgbloodline-sphinx-master-of-mysteries-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="blrgbloodline-sphinx-master-of-mysteries-su">Master of Mysteries (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Standard Action">You can cast either <Link to="/spell/maze">maze</Link> or <Link to="/spell/symbol_of_insanity">symbol of insanity</Link> once per day as a spell-like ability, with a caster level equal to your character level. You also gain spell resistance equal to 11 + your level.</Pair>
</Ability>
<Ability id="blrgbloodline-sphinx-final-riddle-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-sphinx-final-riddle-su">Final Riddle (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to fire and electricity and ignore environmental penalties due to temperature. Your competence bonus on saving throws against arcane spells increases to +6. You have these benefits constantly, even while not raging.</Pair>
</Ability>
</>};
const _undead = {title: "Undead", jsx: <><h2 id="blrgbloodline-undead-undead-bloodline">Undead Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 22</Link></p>
<p>The foul corruption of undeath is a part of you. Somewhere in the past, death became infused with your lineage. Your connection to the attributes of the undead bestows frightening power when your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-undead-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-undead-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/chill_touch">Chill touch</Link></Pair>
<Pair plain title="10th"><Link to="/spell/false_life">False life</Link></Pair>
<Pair plain title="13th"><Link to="/spell/vampiric_touch">Vampiric touch</Link></Pair>
<Pair plain title="16th"><Link to="/spell/enervation">Enervation</Link></Pair>
</Ability>
<h3 id="blrgbloodline-undead-bloodline-powers">Bloodline Powers</h3>
<p>When you enter a bloodrage, the powers of undeath manifest, empowering your attacks with fear and your body with foul resistances.</p>
<Ability id="blrgbloodline-undead-frightful-charger-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-undead-frightful-charger-su">Frightful Charger (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">When you hit a creature with a <Link to="/rule/charge">charge</Link> attack, that creature becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 1/2 your bloodrager level (minimum 1). This effect does not cause an existing shaken or frightened condition (from this ability or another source) to turn into frightened or panicked. This is a mind-affecting fear effect.</Pair>
</Ability>
<Ability id="blrgbloodline-undead-ghost-strike-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-undead-ghost-strike-su">Ghost Strike (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">Your melee attacks are treated as if they have the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability.</Pair>
</Ability>
<Ability id="blrgbloodline-undead-deaths-gift-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-undead-deaths-gift-su">Death's Gift (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Passive Ability">You gain cold <Link to="/umr/resistance">resistance</Link> 10, as well as DR 10/- against nonlethal damage.</Pair>
</Ability>
<Ability id="blrgbloodline-undead-frightful-strikes-su" icon={["mailed-fist"]}>
<Pair single id="blrgbloodline-undead-frightful-strikes-su">Frightful Strikes (Su)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Usage">Once per bloodrage.</Pair>
<Pair title="Swift Action">You can empower your melee attacks with fear. For 1 round, creatures you hit with your melee attacks become shaken. Creatures who are already shaken become <Link to="/misc/frightened">frightened</Link>. This is a mind-affecting fear effect.</Pair>
<Pair title="At 16th Level">Those who are already frightened become <Link to="/misc/panicked">panicked</Link>.</Pair>
</Ability>
<Ability id="blrgbloodline-undead-incorporeal-bloodrager-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-undead-incorporeal-bloodrager-su">Incorporeal Bloodrager (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Usage">Once a day.</Pair>
<Pair title="Ability">You can choose to become <Link to="/umr/incorporeal">incorporeal</Link>. You take only half damage from magic corporeal sources, and you take no damage from non-magic weapons and objects. Your attacks deal damage as normal due to your <em>ghost strike</em> bloodrage power.</Pair>
</Ability>
<Ability id="blrgbloodline-undead-one-foot-in-the-grave-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-undead-one-foot-in-the-grave-ex">One Foot in the Grave (Ex)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/immunity">immunity</Link> to cold, nonlethal damage, paralysis, and sleep. The DR from your damage reduction ability increases to 8. Unintelligent undead don't notice you unless you attack them. You gain a +4 morale bonus on saving throws made against spells and spell-like abilities cast by undead. You have these benefits constantly, even while not bloodraging.</Pair>
</Ability>
</>};
const _verdant = {title: "Verdant", jsx: <><h2 id="blrgbloodline-verdant-verdant-bloodline">Verdant Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 17</Link></p>
<p>Your body is suffused with raw plant life. When you bloodrage, your plant-like characteristics bolster your durability and grant you some control over vegetation.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/bolstered_resilience">Bolstered Resilience</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/raging_vitality">Raging Vitality</Link>, <Link to="/feat/toughness">Toughness</Link></p><Ability id="blrgbloodline-verdant-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-verdant-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/entangle">Entangle</Link></Pair>
<Pair plain title="10th"><Link to="/spell/greensight">Greensight</Link></Pair>
<Pair plain title="13th"><Link to="/spell/burst_of_nettles">Burst of nettles</Link></Pair>
<Pair plain title="16th"><Link to="/spell/command_plants">Command plants</Link></Pair>
</Ability>
<h3 id="blrgbloodline-verdant-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you gain plant-like abilities and immunities as you become overgrown with jagged branches, rugged bark, and thick vines.</p>
<Ability id="blrgbloodline-verdant-verdant-growth-su" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-verdant-verdant-growth-su">Verdant Growth (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Passive Ability">You gain <Link to="/umr/fast_healing">fast healing</Link> 1 while bloodraging. If you have a bloodrager class feature that also grants you fast healing (such as the <Link to="/arc-bloodrager/spelleater">spelleater's</Link> blood of life class feature), you can stack up to half of your fast healing from such abilities with the fast healing gained from this ability, but you cannot do so by an amount that exceeds your Charisma bonus (minimum 0).</Pair>
<Pair title="At 4th Level">You instead gain fast healing 2.</Pair>
<Pair title="At 7th Level">You instead gain fast healing 3.</Pair>
<Pair title="At 10th Level">You instead gain fast healing 4.</Pair>
<Pair title="At 13th Level">You instead gain fast healing 5.</Pair>
<Pair title="At 16th Level">You instead gain fast healing 6.</Pair>
<Pair title="At 19th Level">You instead gain fast healing 7.</Pair>
</Ability>
<Ability id="blrgbloodline-verdant-oaken-skin-ex" icon={["armor-upgrade"]}>
<Pair single id="blrgbloodline-verdant-oaken-skin-ex">Oaken Skin (Ex)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">When entering a bloodrage, your skin thickens like bark and you gain a +2 enhancement bonus to your natural armor.</Pair>
<Pair title="At 8th Level">The bonus becomes +3.</Pair>
<Pair title="At 12th Level">The bonus becomes +4.</Pair>
<Pair title="At 16th Level">The bonus becomes +5.</Pair>
<Pair title="At 20th Level">The bonus becomes +6.</Pair>
</Ability>
<Ability id="blrgbloodline-verdant-botanical-plasticity-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-verdant-botanical-plasticity-su">Botanical Plasticity (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Swift Action">You can bend and twist the plant life within your body to elongate your limbs. Your reach increases by 5 feet until the end of your turn.</Pair>
</Ability>
<Ability id="blrgbloodline-verdant-verdant-call-sp" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-verdant-verdant-call-sp">Verdant Call (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Swift Action">When entering a bloodrage, you can animate nearby plants to aid you in combat, functioning as <Link to="/spell/wilderness_soldiers">wilderness soldiers</Link>, using your Charisma modifier instead of your Wisdom modifier. This effect lasts for as long as you continue bloodraging, regardless of the spell's normal duration.</Pair>
</Ability>
<Ability id="blrgbloodline-verdant-natures-thorns-su" icon={["armor-downgrade"]}>
<Pair single id="blrgbloodline-verdant-natures-thorns-su">Nature's Thorns (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Passive Ability">Creatures that hit you in melee (other than those using manufactured reach weapons) take 4d6 points of piercing damage. A creature takes this damage only on its first successful attack against you in a combat round, and not on subsequent attacks in that round.</Pair>
</Ability>
<Ability id="blrgbloodline-verdant-verdant-apotheosis-su" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="blrgbloodline-verdant-verdant-apotheosis-su">Verdant Apotheosis (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Passive Ability">Verdant power surges throughout your being. While bloodraging, you gain <Link to="/umr/tremorsense">tremorsense</Link> out to 30 feet. In addition, you gain immunity to paralysis, poison, sleep, and stunning effects, even while you are not bloodraging.</Pair>
</Ability>
</>};
const _vestige = {title: "Vestige", jsx: <><h2 id="blrgbloodline-vestige-vestige-bloodline">Vestige Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 6</Link></p>
<p>You are the descendant of great heroes from a lost civilization.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>*, <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>*, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>, <Link to="/feat/weapon_specialization">Weapon Specialization</Link>*.</p>
<p>The bloodrager counts his total bloodrager levels as fighter levels for the purpose of qualifying for any feats marked with an asterisk (*). If he also has levels in fighter, these levels stack.</p>
<Ability id="blrgbloodline-vestige-bonus-spells-by-bloodrager-level" icon={["spell-book"]}>
<Pair single id="blrgbloodline-vestige-bonus-spells-by-bloodrager-level">Bonus Spells by Bloodrager Level</Pair>
<Pair plain title="7th"><Link to="/spell/true_strike">True strike</Link></Pair>
<Pair plain title="10th"><Link to="/spell/false_life">False life</Link></Pair>
<Pair plain title="13th"><Link to="/spell/phantom_steed">Phantom steed</Link></Pair>
<Pair plain title="16th"><Link to="/spell/mass_enlarge_person">Mass enlarge person</Link></Pair>
</Ability>
<h3 id="blrgbloodline-vestige-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you transform into an ancestor or another notable figure from a lost civilization.</p>
<Ability id="blrgbloodline-vestige-warriors-discipline-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-vestige-warriors-discipline-su">Warrior's Discipline (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">You tap into untold generations of battle experience to control your battle fury. You can halve any morale bonuses gained from bloodrage to be able to use Intelligence- or Charisma-based skills, or any abilities requiring patience or concentration. This effect lasts for 1 round.</Pair>
</Ability>
<Ability id="blrgbloodline-vestige-ancient-tactics-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-vestige-ancient-tactics-su">Ancient Tactics (Su)</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Passive Ability">While you are bloodraging, whenever you or an ally within 30 feet of you would gain a bonus on attack rolls or to AC due to battlefield position (such as <Link to="/rule/flanking">flanking</Link> or <Link to="/rule/cover">cover</Link>), that bonus is increased by 1. Allies must be able to see and hear you to gain this bonus. You can expend a spell slot as an immediate action to further increase this bonus by 1 per level of the spell slot expended until the beginning of your next turn.</Pair>
</Ability>
<Ability id="blrgbloodline-vestige-legacy-style-su" icon={["stairs-goal"]}>
<Pair single id="blrgbloodline-vestige-legacy-style-su">Legacy Style (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Select any one <Link to="/main/style_feat">style feat</Link>. You can use this style feat while bloodraging; however, if you do not meet all of the style feat's prerequisites, you must expend a spell slot when entering the style's stance, and the benefits last for only 1 round per level of the spell slot expended or for the duration of your bloodrage, whichever is shorter. If you already have this style feat, you can enter the style's stance as part of the free action to bloodrage.</Pair>
</Ability>
<Ability id="blrgbloodline-vestige-wars-memory-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="blrgbloodline-vestige-wars-memory-sp">War's Memory (Sp)</Pair>
<Pair title="Gained">At 12th Level</Pair>
<Pair title="Standard Action">You can manifest an illusion of an ancestor's bloody battlefield once per day. This functions as <Link to="/spell/hallucinatory_terrain">hallucinatory terrain</Link>, except it can create only battlefields drawn from a civilization's past, and the effect ends when your bloodrage ends. The saving throw to disbelieve is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. The horrifying scene causes creatures within the area of effect to take a -2 penalty on saves versus fear effects until they disbelieve the illusion. If a creature fails the Will save to disbelieve the illusion, it gains the <Link to="/misc/shaken">shaken</Link> condition until your bloodrage ends, or until it leaves the area of effect. This is an illusion (glamer) and fear effect.</Pair>
</Ability>
<Ability id="blrgbloodline-vestige-legacy-conduit-su" icon={["upgrade"]}>
<Pair single id="blrgbloodline-vestige-legacy-conduit-su">Legacy Conduit (Su)</Pair>
<Pair title="Gained">At 16th Level</Pair>
<Pair title="Ability">When using the <em>legacy style</em> bloodline power, you can expend a spell slot as a swift action to share the benefits of the selected style feat with all allies within 30 feet. The benefits last for 1 round per level of the spell slot expended. Allies must still enter the style's stance as a swift action.</Pair>
</Ability>
<Ability id="blrgbloodline-vestige-call-to-arms-su" icon={["magic-swirl"]}>
<Pair single id="blrgbloodline-vestige-call-to-arms-su">Call to Arms (Su)</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Usage">Once per day.</Pair>
<Pair title="Standard Action">You can summon a ghostly army from a fallen civilization once per day. This functions as <Link to="/spell/spiritual_ally">spiritual ally</Link> with a caster level equal to your level, except that it summons a number of allies equal to your Constitution modifier, and the allies use your Strength modifier for attack rolls. You can direct all of these allies with a single swift action. Each ally can attack a different target or the same target, as you direct. The allies remain until the spell's duration ends or your bloodrage ends, whichever comes first.</Pair>
</Ability>
</>};
export default {not_found:_not_found,aberrant:_aberrant,abyssal:_abyssal,aquatic:_aquatic,arcane:_arcane,black_blood:_black_blood,celestial:_celestial,destined:_destined,draconic:_draconic,elemental:_elemental,fey:_fey,hag:_hag,infernal:_infernal,kyton:_kyton,martyred:_martyred,medusa:_medusa,naga:_naga,phoenix:_phoenix,salamander:_salamander,shadow:_shadow,shapechanger:_shapechanger,sphinx:_sphinx,undead:_undead,verdant:_verdant,vestige:_vestige}