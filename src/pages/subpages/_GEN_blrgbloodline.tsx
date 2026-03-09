import {IonRippleEffect,IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
const _not_found = {title: "Unknown", jsx: <><h2 id="blrgbloodline-not_found-error">Error</h2>
<p>Unable to find the requested bloodrager bloodline.</p>
</>};
const _aberrant = {title: "Aberrant", jsx: <><h2 id="blrgbloodline-aberrant-aberrant-bloodline">Aberrant Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 17</Link></p>
<p>There is a taint in your blood that is both alien and bizarre. When you bloodrage, this manifests in peculiar and terrifying ways.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/iron_will">Iron Will</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/enlarge_person">Enlarge person</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/see_invisibility">See invisibility</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/displacement">Displacement</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/black_tentacles">Black tentacles</Link></div></div></div></div>
<h3 id="blrgbloodline-aberrant-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you gain the abilities and immunities of some <Link to="/type/aberration">aberrations</Link>, but show signs of your tainted heritage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-staggering-strike-su" data-hash-target><div className="box">Staggering Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you confirm a critical hit the target must succeed at a Fortitude saving throw or be <Link to="/misc/staggered">staggered</Link> for 1 round. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. These effects stack with the <Link to="/feat/staggering_critical">Staggering Critical</Link> feat; the target must save against each effect individually.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-abnormal-reach-su" data-hash-target><div className="box">Abnormal Reach (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your limbs elongate; your reach increases by 5 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-aberrant-fortitude-su" data-hash-target><div className="box">Aberrant Fortitude (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become immune to the <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/nauseated">nauseated</Link> conditions.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-unusual-anatomy-su" data-hash-target><div className="box">Unusual Anatomy (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your internal anatomy shifts and changes, giving you a 50% chance to negate any critical hit or <Link to="/ability/sneak_attack">sneak attack</Link> that hits you. The damage is instead rolled normally.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-aberrant-resistance-su" data-hash-target><div className="box">Aberrant Resistance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are immune to disease, exhaustion, fatigue, and poison, and to the staggered condition.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aberrant-aberrant-form-su" data-hash-target><div className="box">Aberrant Form (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your body becomes truly unnatural. You are immune to critical hits and sneak attacks. In addition, you gain <Link to="/umr/blindsight">blindsight</Link> with a range of 60 feet and your bloodrager damage reduction increases by 1. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _abyssal = {title: "Abyssal", jsx: <><h2 id="blrgbloodline-abyssal-abyssal-bloodline">Abyssal Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 17</Link></p>
<p>Generations ago, a demon spread its filth into the essence of your bloodline. While it doesn't manifest in all of your kin, in those moments when you're bloodraging, you embody its terrifying presence.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/bulls_strength">Bull's strength</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/rage">Rage</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/stoneskin">Stoneskin</Link></div></div></div></div>
<h3 id="blrgbloodline-abyssal-bloodline-powers">Bloodline Powers</h3>
<p>The power of the Abyss courses through your veins, causing horrific transformations during your bloodrage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-claws-su" data-hash-target><div className="box">Claws (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You grow claws while bloodraging. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">Your claws become <Link to="/magic-enh/flaming">flaming</Link> weapons, which deal an additional 1d6 points of fire damage on a hit.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-demonic-bulk-su" data-hash-target><div className="box">Demonic Bulk (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can choose to grow one size category larger than your base size (as <Link to="/spell/enlarge_person">enlarge person</Link>) even if you aren't humanoid.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-demon-resistances-su" data-hash-target><div className="box">Demon Resistances (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 to acid, cold, and fire. At 16th level, these resistances increase to 10.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-abyssal-bloodrage-su" data-hash-target><div className="box">Abyssal Bloodrage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The morale bonus to Strength granted by your bloodrage increases by 2, but the penalty to AC becomes -4 instead of -2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bonus to Strength increases by 4 instead.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus increases by 6 instead.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-demonic-aura-su" data-hash-target><div className="box">Demonic Aura (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose to exude an aura of fire. The aura is a 5-foot <Link to="/misc/burst">burst</Link> centered on you, and deals 2d6 + your Constitution modifier points of fire damage to creatures that end their turns within it.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-abyssal-demonic-immunities-su" data-hash-target><div className="box">Demonic Immunities (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You're <Link to="/umr/immune">immune</Link> to electricity and poison. You have this benefit constantly, even while not bloodraging.</div></div></div></div>
</>};
const _aquatic = {title: "Aquatic", jsx: <><h2 id="blrgbloodline-aquatic-aquatic-bloodline">Aquatic Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/aquatic_adventures">Aquatic Adventures pg. 51</Link></p>
<p>The anger in your blood rises from the ocean depths, seeded by descent from undersea empires, creeping ichthyic infiltrators into remote seaside villages, or something deeper still.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/aquadynamic_focus">Aquadynamic Focus</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/skill_focusfly">Skill Focus|Fly</Link>, <Link to="/feat/steam_spell">Steam Spell</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/hydraulic_push">Hydraulic push</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/slipstream">Slipstream</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/hydraulic_torrent">Hydraulic torrent</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/control_water">Control water</Link></div></div></div></div>
<h3 id="blrgbloodline-aquatic-bloodline-powers">Bloodline Powers</h3>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-underwater-attacks-su" data-hash-target><div className="box">Underwater Attacks (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your bludgeoning and slashing melee attacks underwater ignore the usual underwater penalties.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-aquatic-adaptation-ex" data-hash-target><div className="box">Aquatic Adaptation (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a swim speed of 30 feet and the ability to breathe both underwater and in air.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain cold <Link to="/umr/resistance">resistance</Link> 5.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">Your swim speed increases to 60 feet, and you have the 4th-level benefits of aquatic adaptation constantly, even when not in bloodrage (but not the 8th- and 12th-level benefits).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-watersense-ex" data-hash-target><div className="box">Watersense (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet in water.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You instead gain tremorsense with a range of 60 feet when in water.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-wavedarter-sp-su" data-hash-target><div className="box">Wavedarter (Sp, Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your bloodrage directs the flow of water to assist you in battle. While underwater, your reach increases by 5 feet and you gain the effects of <Link to="/spell/haste">haste</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-currentcaller-su" data-hash-target><div className="box">Currentcaller (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">When underwater, at the start of your turn you can call up a <Link to="/rule/current">current</Link> with a speed up to 20 feet in the direction of your choice in your space (moving with you) that lasts until the end of your turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-aquatic-deep-fury-su" data-hash-target><div className="box">Deep Fury (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain tremorsense 120 feet in water, as well as <Link to="/ability/evasion">evasion</Link> and <Link to="/umr/immunity">immunity</Link> to cold and <Link to="/rule/pressure_damage">pressure damage</Link>. You have these benefits constantly, even when not in bloodrage.</div></div></div></div>
</>};
const _arcane = {title: "Arcane", jsx: <><h2 id="blrgbloodline-arcane-arcane-bloodline">Arcane Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 18</Link></p>
<p>While others of your kin may be powerful wizards and sorcerers, the eldritch nature of the blood coursing through your veins transforms you into a spell-breaking terror.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/disruptive">Disruptive</Link>*, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/spellbreaker">Spellbreaker</Link>*</p>
<p>Your bloodrager levels count as fighter levels for the purposes of qualifying for any feats marked with an asterisk (*). This stacks with any levels in fighter you have.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/magic_missile">Magic missile</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/invisibility">Invisibility</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/lightning_bolt">Lightning bolt</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/dimension_door">Dimension door</Link></div></div></div></div>
<h3 id="blrgbloodline-arcane-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, arcane power transforms you into an arcane juggernaut who can cut down even the most careful caster.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-disruptive-bloodrage-su" data-hash-target><div className="box">Disruptive Bloodrage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The DC to <Link to="/rule/cast_spells_defensively">cast spells defensively</Link> increases by 2 for enemies within your threatened area. This increase stacks with that granted by the <Link to="/feat/disruptive">Disruptive</Link> feat.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-arcane-bloodrage-sp" data-hash-target><div className="box">Arcane Bloodrage (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose one of the following spells and apply its effects to yourself: <Link to="/spell/blur">blur</Link>, <Link to="/spell/protection_from_arrows">protection from arrows</Link>, <Link to="/spell/resist_energy">resist energy</Link> (choose one energy type), or <Link to="/spell/spider_climb">spider climb</Link>. These effects last for as long as you continue bloodraging, regardless of the spell's normal duration.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-greater-arcane-bloodrage-sp" data-hash-target><div className="box">Greater Arcane Bloodrage (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can choose to apply the effects of either <Link to="/spell/displacement">displacement</Link> or <Link to="/spell/haste">haste</Link> to yourself. This is in addition to <em>arcane bloodrage,</em> and otherwise works as that ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-casters-scourge-ex" data-hash-target><div className="box">Caster's Scourge (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a number of extra attacks of opportunity equal to your Dexterity modifier (minimum 1). You can use these attacks of opportunity only against spellcasters in your threatened area who cast or attempt to cast defensively. The <Link to="/feat/spellbreaker">Spellbreaker</Link> feat, the <em>caster's bane</em> bloodrage power, or some similar effect is still required to make attacks of opportunity against spellcasters who are casting defensively. You have this ability constantly, even while not bloodraging.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-true-arcane-bloodrage-sp" data-hash-target><div className="box">True Arcane Bloodrage (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose one of the following spells and apply its effects to yourself: <Link to="/spell/beast_shape_iv">beast shape IV</Link> (choose a creature your size or larger only), <Link to="/spell/form_of_the_dragon_i">form of the dragon I</Link>, or <Link to="/spell/transformation">transformation</Link>. This is in addition to <em>arcane bloodrage</em> and <em>greater arcane bloodrage,</em> and otherwise works as those abilities.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-arcane-casters-bane-ex" data-hash-target><div className="box">Caster's Bane (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Spellcasters with a caster level lower than your bloodrager level always provoke attacks of opportunity within your threatened area, even when casting defensively. You have this ability constantly, even while not bloodraging.</div></div></div></div>
</>};
const _black_blood = {title: "Black Blood", jsx: <><h2 id="blrgbloodline-black_blood-black-blood-bloodline">Black Blood Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 8</Link></p>
<p>Contact with the <Link to="/magic-artifact/black_blood_of_orv">black blood of Orv</Link> - by you or one of your ancestors - transformed your bloodline. This necromantic taint in your blood mutates you into something peculiar.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/chill_touch">Chill touch</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/unshakable_chill">Unshakable chill</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/elemental_aura">Elemental aura</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/black_tentacles">Black tentacles</Link></div></div></div></div>
<h3 id="blrgbloodline-black_blood-bloodline-powers">Bloodline Powers</h3>
<p>The insidious magic of black blood grants you profane powers and hideous resistances.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-black-blood-immunity-su" data-hash-target><div className="box">Black Blood-Immunity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your blood runs black with the blood of Orv. You are immune to the effects (both beneficial and destructive) of black blood. You have this benefit constantly, even while not bloodraging.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-black-blood-cold-su" data-hash-target><div className="box">Black Blood-Cold (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">When you take damage from a slashing or piercing attack while bloodraging, you can grant your melee attacks the <Link to="/magic-enh/frost">frost</Link> weapon special ability for 2 rounds.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-abnormal-reach-su" data-hash-target><div className="box">Abnormal Reach (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The black blood pumping within you twists and elongates your limbs. Your reach increases by 5 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-black-blood-resistance-su" data-hash-target><div className="box">Black Blood Resistance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 to cold and a +2 bonus on saving throws against <Link to="/rule/ability_drain">ability drain</Link>, death effects, disease, <Link to="/rule/energy_drain">energy drain</Link>, paralysis, and poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">This resistance increases to 10 and the saving throw bonus increases to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/barbed-arrow"><IonIcon icon="/icons/barbed-arrow.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-retributive-spray-su" data-hash-target><div className="box">Retributive Spray (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you're hit by an attack or spell that deals slashing or piercing damage, your black blood sprays up to 10 feet toward the opponent who attacked you, striking the first creature along its path. That creature takes 1d8 points of cold damage + 1 point of cold damage for every 2 bloodrager levels you possess. A successful Reflex save (DC = 10 + 1/2 your bloodrager level + your Constitution modifier) halves the damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-black-blood-transfusion-su" data-hash-target><div className="box">Black Blood Transfusion (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you confirm a critical hit, some of your black blood seeps into the target's wounds. The next time the target would be healed by positive energy, the healing burns away the black blood and ends this effect, providing no other benefit. This ability is not effective against creatures that have no blood. The black blood transfusion persists until it negates one positive energy healing effect, but it can be removed sooner with a successful DC 25 Heal check.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-black_blood-black-blood-immunity-su" data-hash-target><div className="box">Black Blood Immunity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to cold, nonlethal damage, critical hits, and <Link to="/ability/sneak_attack">sneak attacks</Link>. You have this benefit constantly, even when not bloodraging.</div></div></div></div>
</>};
const _celestial = {title: "Celestial", jsx: <><h2 id="blrgbloodline-celestial-celestial-bloodline">Celestial Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>By way of a celestial ancestor or divine intervention, the blood of angels fills your body with a holy potency, granting you a majestic visage and angelic powers when you enter your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/mounted_combat">Mounted Combat</Link>, <Link to="/feat/ride_by_attack">Ride-By Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/bless">Bless</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/resist_energy">Resist energy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/heroism">Heroism</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/holy_smite">Holy smite</Link></div></div></div></div>
<h3 id="blrgbloodline-celestial-bloodline-powers">Bloodline Powers</h3>
<p>Your bloodline grants a number of resistances and changes your form to something angelic and terrible to behold when you bloodrage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-angelic-attacks-su" data-hash-target><div className="box">Angelic Attacks (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your melee attacks are considered good-aligned weapons for the purpose of bypassing damage reduction. Furthermore, when you deal damage with a melee attack to an evil outsider, you deal an additional 1d6 points of damage. This additional damage stacks with effects such as <Link to="/spell/align_weapon">align weapon</Link> and those granted by a weapon with the <Link to="/magic-enh/holy">holy</Link> weapon special ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-celestial-resistances-ex" data-hash-target><div className="box">Celestial Resistances (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 to acid and cold.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">These resistances increase to 10.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-conviction-su" data-hash-target><div className="box">Conviction (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Once per bloodrage you can reroll one ability check, skill check, or saving throw you just made. You must decide to use this ability after the die is rolled, but before the GM reveals the results. You must take the second result, even if it's worse.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-wings-of-heaven-su" data-hash-target><div className="box">Wings of Heaven (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can choose to sprout feathery wings and fly with a speed of 60 feet and good maneuverability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">Your fly speed increases to 80 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-angelic-protection-su" data-hash-target><div className="box">Angelic Protection (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +4 deflection bonus to AC and a +4 resistance bonus on saving throws against attacks made or effects created by evil creatures. In addition, you are affected as if subject to a <Link to="/spell/protection_from_evil">protection from evil</Link> spell. This effect cannot be dispelled.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-celestial-ascension-su" data-hash-target><div className="box">Ascension (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become infused with the power of the heavens. You gain <Link to="/umr/immunity">immunity</Link> to acid, cold, and petrification. You also gain resistance 10 to electricity and fire, as well as a +4 racial bonus on saving throws against poison. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _destined = {title: "Destined", jsx: <><h2 id="blrgbloodline-destined-destined-bloodline">Destined Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>Your bloodline is destined for great things. When you bloodrage, you exude a greatness that makes all but the most legendary creatures seem lesser.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/leadership">Leadership</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/shield">Shield</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/blur">Blur</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/protection_from_energy">Protection from energy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/freedom_of_movement">Freedom of movement</Link></div></div></div></div>
<h3 id="blrgbloodline-destined-bloodline-powers">Bloodline Powers</h3>
<p>Your future greatness grants you the might to strike your enemies with awe.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-destined-strike-su" data-hash-target><div className="box">Destined Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Free Action</div></div><div className="abEnd"><div className="box">You can grant yourself an insight bonus equal to 1/2 your bloodrager level (minimum 1) on one melee attack.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You can use this five times a day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-fated-bloodrager-su" data-hash-target><div className="box">Fated Bloodrager (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a luck bonus to AC and on saving throws. This bonus is equal to <Link to="/misc/one_fourth">one-fourth</Link> of your bloodrager level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/rolling-dices"><IonIcon icon="/icons/rolling-dices.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-certain-strike-su" data-hash-target><div className="box">Certain Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You may reroll an attack roll once during a bloodrage. You must decide to use this ability after the die is rolled, but before the GM reveals the results. You must take the second result, even if it's worse.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-defy-death-su" data-hash-target><div className="box">Defy Death (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When an attack or spell that deals damage would result in your death, you can attempt a DC 20 Fortitude save. If you succeed, you are instead reduced to 1 hit point; if you succeed and already have less than 1 hit point, you instead take no damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-unstoppable-su" data-hash-target><div className="box">Unstoppable (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Any critical threats you score are automatically confirmed. Any critical threats made against you confirm only if the second roll results in a natural 20 (or is automatically confirmed).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-destined-victory-or-death-su" data-hash-target><div className="box">Victory or Death (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are immune to paralysis and petrification, as well as to the stunned, dazed, and staggered conditions. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _draconic = {hasJL:true,title: "Draconic", jsx: <><div className="jumpList" id="blrgbloodline-draconic-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="blrgbloodline-draconic-expanded-bloodlines">Expanded Bloodlines</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-esoteric-dragons">Esoteric Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-imperial-dragons">Imperial Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-outer-dragons">Outer Dragons</InnerLink></li><li><InnerLink toTop to="blrgbloodline-draconic-primal-dragons">Primal Dragons</InnerLink></li></ul></div><h2 id="blrgbloodline-draconic-draconic-bloodline">Draconic Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 19</Link></p>
<p>At some point in your family's history, a dragon interbred with your bloodline. Now, the sublime monster's ancient power fuels your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/skill_focusfly">Skill Focus|Fly</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/shield">Shield</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/resist_energy">Resist energy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fly">Fly</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fear">Fear</Link></div></div></div></div>
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
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-claws-su" data-hash-target><div className="box">Claws (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You grow claws. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">Your claws deal an additional 1d6 points of damage of your energy type on a hit.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-draconic-resistance-ex" data-hash-target><div className="box">Draconic Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 against your energy type and a +1 natural armor bonus to AC.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The energy resistance increases to 10 and your natural armor bonus becomes +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your natural armor bonus becomes +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-breath-weapon-su" data-hash-target><div className="box">Breath Weapon (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You gain a <Link to="/umr/breath_weapon">breath weapon</Link> that you can use once per day. This breath weapon deals 1d6 points of damage of your energy type per bloodrager level. Those caught in the area of the breath can attempt a Reflex saving throw for half damage. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. The shape of the breath weapon depends on your dragon type (as indicated on the above table).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You can use this ability twice a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can use this ability three times a day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-dragon-wings-su" data-hash-target><div className="box">Dragon Wings (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can choose to have leathery wings grow from your back, giving you a fly speed of 60 feet with average maneuverability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your fly speed increases to 80 feet with good maneuverability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-dragon-form-su" data-hash-target><div className="box">Dragon Form (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can choose to take the form of your chosen dragon type (as <Link to="/spell/form_of_the_dragon_ii">form of the dragon II</Link>, but with average or good maneuverability, as you would gain from the dragon wings bloodrage power above).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-draconic-power-of-wyrms-su" data-hash-target><div className="box">Power of Wyrms (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to paralysis, sleep, and damage from your energy type. You also gain <Link to="/umr/blindsense">blindsense</Link> with a range of 60 feet. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
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
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart"><div className="box">Info</div></div><div className="abEnd"><div className="box">Spells marked with an asterisk (&#42;) always deal a type of energy damage determined by your element, regardless of the spell's normal effects. In addition, the subtype of these spells changes to match the energy type of your element.</div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/burning_hands">Burning hands</Link> &#42;</div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/scorching_ray">Scorching ray</Link> &#42;</div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/protection_from_energy">Protection from energy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/elemental_body_i">Elemental body I</Link></div></div></div></div>
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
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-elemental-strikes-su" data-hash-target><div className="box">Elemental Strikes (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can imbue your melee attacks with elemental energy. For 1 round, your melee attacks deal 1d6 points of additional damage of your energy type.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You can now use this five times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">All of your melee attacks deal this damage, and this ability no longer requires a swift action to activate.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-elemental-resistance-ex" data-hash-target><div className="box">Elemental Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain energy <Link to="/umr/resistance">resistance</Link> 10 against your energy type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-elemental-movement-su" data-hash-target><div className="box">Elemental Movement (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a special movement type or bonus based on your chosen element, as indicated on the above table.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-power-of-the-elements-su" data-hash-target><div className="box">Power of the Elements (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The energy damage done by your <em>elemental strikes</em> bloodline ability bypasses resistance to that energy type, and still deals half damage to creatures with <Link to="/umr/immunity">immunity</Link> to energy of that type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-elemental-form-su" data-hash-target><div className="box">Elemental Form (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can take an elemental form as <Link to="/spell/elemental_body_iv">elemental body IV</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-elemental-elemental-body-su" data-hash-target><div className="box">Elemental Body (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Elemental power surges through your body. You gain immunity to <Link to="/ability/sneak_attack">sneak attacks</Link>, critical hits, and damage from your energy type. You have this benefit constantly, even while not bloodraging.</div></div></div></div>
</>};
const _fey = {title: "Fey", jsx: <><h2 id="blrgbloodline-fey-fey-bloodline">Fey Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 21</Link></p>
<p>One of your ancestors was <Link to="/type/fey">fey</Link>, or the fey realm somehow intermixed with your bloodline. It affects your bloodrage in tricky and surprising ways.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/step_up">Step Up</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/entangle">Entangle</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/hideous_laughter">Hideous laughter</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/haste">Haste</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/confusion">Confusion</Link></div></div></div></div>
<h3 id="blrgbloodline-fey-bloodline-powers">Bloodline Powers</h3>
<p>The power of the natural world saturates your being, and manifests itself when you bloodrage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-confusing-critical-su" data-hash-target><div className="box">Confusing Critical (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Fey power courses through your attacks. Each time you confirm a critical hit, the target must succeed at a Will saving throw or be <Link to="/misc/confused">confused</Link> for 1 round. The DC of this save is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. This is a mind-affecting compulsion effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-leaping-charger-su" data-hash-target><div className="box">Leaping Charger (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are able to leap over overgrowth and similar impediments with ease while charging. When you <Link to="/rule/charge">charge</Link>, you ignore <Link to="/rule/difficult_terrain">difficult terrain</Link> (but not other creatures). You can move through it at normal speed, and it does not impede your charge.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-blurring-movement-su" data-hash-target><div className="box">Blurring Movement (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become a blur of motion when you move. As long as you move at least 10 feet, you gain the effects of <Link to="/spell/blur">blur</Link> for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-quickling-bloodrage-sp" data-hash-target><div className="box">Quickling Bloodrage (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">While bloodraging you're treated as if you are under the effects of <em>haste.</em></div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-one-with-nature-su" data-hash-target><div className="box">One with Nature (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Three times a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Move-Equivalent Action</div></div><div className="abEnd"><div className="box"><p>You can transport yourself from one tree to another tree, as <Link to="/spell/tree_stride">tree stride</Link> with half the transport range.</p>
<p>Creatures of the animal or plant types don't attack you unless compelled to do so by magic or you attack them first.</p>
<p>You gain these abilities even while not bloodraging.</p>
</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-fey-fury-of-the-fey-su" data-hash-target><div className="box">Fury of the Fey (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose one type of creature (and subtype for humanoids or outsiders) that can be affected by the <Link to="/magic-enh/bane">bane</Link> weapon special ability. All of your melee attacks are considered to have <em>bane</em> against that type. This ability doesn't stack with other forms of <em>bane.</em></div></div></div></div>
</>};
const _hag = {title: "Hag", jsx: <><h2 id="blrgbloodline-hag-hag-bloodline">Hag Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_coven">Blood of the Coven pg. 27</Link></p>
<p><Link to="/family/hag">Hags</Link> interbreed with other races frequently, and those children who escape their grasp may pass their heritage on to later generations before it reemerges. The potent humors that accompany hag blood are better suited to a bloodrager's ferocity than to traditional spellcasting.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/mothers_gift">Mother's Gift</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/chill_touch">Chill touch</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/blindness_deafness">Blindness/deafness</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/bestow_curse">Bestow curse</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/charm_monster">Charm monster</Link></div></div></div></div>
<h3 id="blrgbloodline-hag-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you manifest the physical power and arcane corruption of your hag ancestor.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-evil-eye-su" data-hash-target><div className="box">Evil Eye (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can curse an opponent with a wicked glance, afflicting one target within 30 feet that you can see, causing it to take a -2 penalty to AC and on attack rolls for 1 round per bloodrager level or until the target hits you with an attack. The target can negate this effect with a successful Will saving throw (DC = 10 + half your bloodrager level + your Charisma modifier).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-hag-fortitude-su" data-hash-target><div className="box">Hag Fortitude (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become immune to mundane and magical diseases.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You also become immune to poison.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-hag-transformation-su" data-hash-target><div className="box">Hag Transformation (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your form grows more twisted and powerful while bloodraging, but clumsy, blind aggression clouds your mind. Your morale bonus to Strength increases by 2, and you gain low-light vision and darkvision (60 feet), but you take a -2 penalty to both Dexterity and Wisdom for the duration of your bloodrage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You apply your morale bonus on Will saving throws while bloodraging to Fortitude and Reflex saving throws against spells and spell-like abilities.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-covenguard-su" data-hash-target><div className="box">Covenguard (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can cast <em>bestow curse</em> as a spell-like ability. You count as a hag for the purposes of joining a coven; the coven must contain at least one hag.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-hag-curse-conduit-su" data-hash-target><div className="box">Curse Conduit (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box"><p>You gain immunity to negative energy damage and all spells with the curse descriptor.</p>
<p>Whenever you confirm a critical hit with a melee weapon, you can immediately target your opponent with a <em>bestow curse</em> spell or spell-like ability as a free action.</p>
</div></div></div></div>
</>};
const _infernal = {title: "Infernal", jsx: <><h2 id="blrgbloodline-infernal-infernal-bloodline">Infernal Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 21</Link></p>
<p>The Pit lives in your blood. Maybe one of your ancestors was seduced by the powers of <Link to="/rule/hell">Hell</Link> or made a deal with a <Link to="/family/devil">devil</Link>. Either way, its corruption seethes within your lineage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/deceitful">Deceitful</Link>, <Link to="/feat/improved_disarm">Improved Disarm</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/iron_will">Iron Will</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/protection_from_good">Protection from good</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/scorching_ray">Scorching ray</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/suggestion">Suggestion</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fire_shield">Fire shield</Link></div></div></div></div>
<h3 id="blrgbloodline-infernal-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, hellfire infuses your blood with terrifying effects.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-hellfire-strike-su" data-hash-target><div className="box">Hellfire Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can infuse your attacks with hellfire. When you do, your melee attacks gain the <Link to="/magic-enh/flaming">flaming</Link> weapon special ability for 1 round.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">You can use this ability five times per day, and the effect is treated as <Link to="/magic-enh/flaming_burst">flaming burst</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-infernal-resistance-ex" data-hash-target><div className="box">Infernal Resistance (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain fire <Link to="/umr/resistance">resistance</Link> 5, as well as a +2 bonus on saving throws against poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your fire resistance increases to 10, and the bonus on saving throws against poison increases to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-diabolical-arrogance-su" data-hash-target><div className="box">Diabolical Arrogance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +4 bonus on saving throws against enchantment and fear effects.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-dark-wings-su" data-hash-target><div className="box">Dark Wings (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose to have bat-like wings grow from your back, giving you a fly speed of 60 feet with average maneuverability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your fly speed increases to 80 feet with good maneuverability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-hellfire-charge-su" data-hash-target><div className="box">Hellfire Charge (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you <Link to="/rule/charge">charge</Link> the attack you make at the end of the charge gains the benefit of your <em>hellfire strike</em> without expending a use of it. If you already have <em>hellfire strike</em> active, the fire damage ignores fire resistance of 10 or lower.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-infernal-fiend-of-the-pit-su" data-hash-target><div className="box">Fiend of the Pit (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to fire and poison. You also gain resistance 10 to acid and cold, and gain the <Link to="/umr/see_in_darkness">see in darkness</Link> ability. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _kyton = {title: "Kyton", jsx: <><h2 id="blrgbloodline-kyton-kyton-bloodline">Kyton Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_origins">Advanced Class Origins pg. 9</Link></p>
<p>In the shadowy land of Nidal, the influence of <Link to="/faith/zon_kuthon">Zon-Kuthon</Link> and the Midnight Lord's favored servants - the <Link to="/family/kyton">kytons</Link> - taints the land and its inhabitants. Just as an eclipse drives animals wild, so too does the darkness unleash a madness from deep within you.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/exotic_weapon_proficiencyspiked_chain">Exotic Weapon Proficiency|spiked chain</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/persuasive_goad">Persuasive goad</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/pain_strike">Pain strike</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/deeper_darkness">Deeper darkness</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fear">Fear</Link></div></div></div></div>
<h3 id="blrgbloodline-kyton-bloodline-powers">Bloodline Powers</h3>
<p>The sadistic power of the kytons flows through you, twisting you into a creature of pain and darkness when you bloodrage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-painful-strike-su" data-hash-target><div className="box">Painful Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When you confirm a critical hit, the target is <Link to="/misc/sickened">sickened</Link> for a number of rounds equal to 1/2 your bloodrager level (minimum 1). During this time, the creature must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + the spell's level) in order to cast a spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-grasping-chains-su" data-hash-target><div className="box">Grasping Chains (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Chains cover your body and extend from your arms, grasping at the air around you and granting you a +4 bonus on Climb skill checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 9th Level</div></div><div className="abEnd"><div className="box">The bonus increases to +8 and you gain a Climb speed equal to 1/2 your base speed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-armor-of-chains-su" data-hash-target><div className="box">Armor of Chains (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 to cold and the chains covering your body provide a +4 armor bonus to AC with no armor check penalty, maximum Dexterity bonus, or additional weight.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The resistance increases to 10 and the armor bonus increases to +8.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-agonys-embrace-su" data-hash-target><div className="box">Agony's Embrace (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you're hit by a critical hit, your morale bonus to Strength from your bloodrage increases by 2 for 1d6 rounds or until your rage ends.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bonus to Strength instead increases by 4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus to Strength instead increases by +6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-unnerving-gaze-su" data-hash-target><div className="box">Unnerving Gaze (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your foes begin to see flashes of the faces of dead loved ones when they look at your face. You gain a <Link to="/umr/gaze">gaze</Link> attack with a range of 30 feet. All foes who fail a Will save (DC = 10 + 1/2 your bloodrager level + your Charisma modifier) become <Link to="/misc/shaken">shaken</Link> for 1d3 rounds.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-kyton-kyton-immunities-su" data-hash-target><div className="box">Kyton Immunities (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to cold and DR 10/good and silver. You have this benefit constantly, even when not bloodraging.</div></div></div></div>
</>};
const _martyred = {title: "Martyred", jsx: <><h2 id="blrgbloodline-martyred-martyred-bloodline">Martyred Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/antiheros_handbook">Antihero's Handbook pg. 19</Link></p>
<p>One of your ancestors paid the ultimate price for her beliefs. This distant relative martyred herself out of a devout dedication to some specific cause, and that sacrifice has infused you with power that you can use for good - or for ill. When you bloodrage, an inspiring fury conjures echoes of your forebear's incredible determination and selfless dedication, both offering you protection and amplifying your ability to punish any who dare incur your wrath.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/heroic_defiance">Heroic Defiance</Link>, <Link to="/feat/heroic_recovery">Heroic Recovery</Link>, <Link to="/feat/leadership">Leadership</Link>, <Link to="/feat/persuasive">Persuasive</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/endure_elements">Endure elements</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/surmount_affliction">Surmount affliction</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/heroism">Heroism</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/blessing_of_fervor">Blessing of fervor</Link></div></div></div></div>
<h3 id="blrgbloodline-martyred-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you channel the power of your ancestor's self-sacrifice to urge yourself and your allies on to greater feats of strength than would otherwise be possible.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-ancestral-strikes-su" data-hash-target><div className="box">Ancestral Strikes (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 times/day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can imbue your melee attacks with a measure of your ancestor's power. For 1 round, your melee attacks deal 1d6 additional points of good-aligned damage if you are good, or they deal 1d6 additional points of evil-aligned damage if you are evil. If you are neutral, you must choose which type of damage this ability deals when you choose this bloodline, and the decision cannot be changed later.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You can use this ability up to five times per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">All your melee attacks deal this additional damage, and you don't need to activate this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-martyrs-resistances-su" data-hash-target><div className="box">Martyr's Resistances (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain fire <Link to="/umr/resistance">resistance</Link> 5 and you gain a +2 bonus on saving throws against fear and pain effects.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your fire resistance increases to 10, and the bonus on saving throws against fear and pain effects increases to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-forebears-reserves-su" data-hash-target><div className="box">Forebear's Reserves (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can reroll a saving throw once during a bloodrage. You must decide to use this ability after the die is rolled but before the GM reveals the result. You must take the second result, even if it's worse.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-ancestral-champion-su" data-hash-target><div className="box">Ancestral Champion (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When your <em>ancestral strikes</em> target a creature whose alignment is opposite to the type of damage the strikes deal, your ancestral strikes instead deal 2d6 additional points of damage of that type.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/shield-reflect"><IonIcon icon="/icons/shield-reflect.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-sacrificial-exchange-su" data-hash-target><div className="box">Sacrificial Exchange (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">While you are bloodraging, you can take a -2 penalty to Armor Class to grant one ally within 30 feet a +4 morale bonus to one ability score. (This penalty to your AC stacks with the penalty from your bloodrage.) The penalty and bonus last for the duration of your bloodrage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The penalty this ability imposes changes to -4, and the ally's bonus increases to +6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-martyred-eternal-martyr-su" data-hash-target><div className="box">Eternal Martyr (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your ancestor's act of martyrdom infuses your spirit. Your ancestor's sacrifice transcends time and space, keeping you alive when you otherwise shouldn't be and sanctifying your form. You become immune to death effects. Material components for spells and effects to bring you back to life (such as <Link to="/spell/raise_dead">raise dead</Link> or <Link to="/spell/resurrection">resurrection</Link>) cost half as much as normal. Your body cannot be turned into an undead creature, as though you were affected by a permanent <Link to="/spell/hallow">hallow</Link> effect (caster level = your bloodrager level). You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _medusa = {title: "Medusa", jsx: <><h2 id="blrgbloodline-medusa-medusa-bloodline">Medusa Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<p>No magical creature is more iconic in Iblydan lore than the <Link to="/monster/medusa">medusa</Link>. Perhaps your lineage traces back to a medusa, or an ancestor survived a medusa's petrifying gaze and was forever changed by the experience. However the medusa's influence entered your bloodline, when you bloodrage, you gain fearsome and ancient powers.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/cause_fear">Cause fear</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/resist_energy">Resist energy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/hold_person">Hold person</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/stoneskin">Stoneskin</Link></div></div></div></div>
<h3 id="blrgbloodline-medusa-bloodline-powers">Bloodline Powers</h3>
<p>The cold fury of your cursed rage can freeze others in their tracks.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-gaze-su" data-hash-target><div className="box">Gaze (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can harness the power of the medusa through your gaze. Choose a creature within your line of sight who is within 30 feet of you. The creature must succeed at a Fortitude saving throw or have its speed halved for a number of rounds equal to your Constitution modifier (minimum 1 round). The DC of this save is equal to 10 + half your bloodrager level + your Constitution modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-gift-of-the-ancients-su" data-hash-target><div className="box">Gift of the Ancients (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain a +2 resistance bonus on saving throws against <Link to="/umr/gaze">gaze</Link> attacks and to resist poison. You also gain a +2 competence bonus on Perception checks.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">These bonuses increase to +4.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-staggering-gaze-su" data-hash-target><div className="box">Staggering Gaze (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When a creature is affected by your <em>gaze</em> bloodline power, it is <Link to="/misc/staggered">staggered</Link> in addition to being slowed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-vipers-touch-su" data-hash-target><div className="box">Viper's Touch (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You grow two sets of venomous claws resembling the teeth of a serpent. These claws are primary <Link to="/umr/natural_attacks">natural attacks</Link> that deal 1d8 points of damage (1d6 if you are Small). The claws also gain the following poison ability.</div></div></div></div>
<div className="sideNoteWrap"><ScrollContainer id="blrgbloodline-medusa--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={9} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th colSpan={4} scope="col" className="title">Viper's Venom</th></tr><tr><th scope="row">Type</th><td colSpan={3}>Claw-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your bloodrager level + your Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 4 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d3 <Link to="/rule/str_damage">Str damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-stone-resistance-su" data-hash-target><div className="box">Stone Resistance (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain acid <Link to="/umr/resistance">resistance</Link> 10 and are immune to disease, poison, and the <Link to="/misc/sickened">sickened</Link> and staggered conditions. You also cannot be <Link to="/rule/flanked">flanked</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/smoking-finger"><IonIcon icon="/icons/smoking-finger.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-medusa-true-petrification-su" data-hash-target><div className="box">True Petrification (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can use your <em>gaze</em> bloodline ability to permanently turn a creature to stone, as <Link to="/spell/flesh_to_stone">flesh to stone</Link>. You can still use the less powerful versions of your <em>gaze</em> if you do not wish to turn the target to stone, but you must declare this at the time of the attack.</div></div></div></div>
</>};
const _naga = {title: "Naga", jsx: <><h2 id="blrgbloodline-naga-naga-bloodline">Naga Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast pg. 16</Link></p>
<p>The blood of the powerful, serpentine aberrations known as nagas runs through your veins, fueling your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/stealthy">Stealthy</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/invisibility">Invisibility</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/lightning_bolt">Lightning bolt</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/poison">Poison</Link></div></div></div></div>
<h3 id="blrgbloodline-naga-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, arcane power surges through your body, infusing you with the aberrant power and terrible strength of the <Link to="/family/naga">nagas</Link>.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-serpent-fangs-su" data-hash-target><div className="box">Serpent Fangs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You grow serpentine fangs. These fangs are treated as a natural weapon, granting you a bite attack as a primary <Link to="/umr/natural_weapons">natural weapon</Link>. This attack deals damage equal to 1d8 (1d6 if you are Small) + your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your fangs are considered magic weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The damage increases to 1d10 (1d8 if you are Small) + your Strength modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-serpentine-swim-sp" data-hash-target><div className="box">Serpentine Swim (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You can swim sinuously, like a snake. You gain a swim speed equal to your base speed.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-naga-defenses-su" data-hash-target><div className="box">Naga Defenses (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you gain a +2 enhancement bonus to your natural armor bonus and a +4 bonus on saves against poison.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bonus to your natural armor increases to +4 and the bonus on saves against poison increases to +8.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus to your natural armor increases to +6, and you gain immunity to poison.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-poison-fangs-su" data-hash-target><div className="box">Poison Fangs (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain the <Link to="/umr/poison">poison</Link> special attack, tied to your bite attack. Your poison is below.</div></div></div></div>
<div className="sideNoteWrap"><ScrollContainer id="blrgbloodline-naga--table-0"><table><tbody><tr><ThLink scope="row" rowSpan={8} to="/rule/poison"><IonIcon aria-label="Poison" icon="/icons/poison-bottle.svg" /></ThLink><th scope="row">Type</th><td colSpan={3}>Bite-injury</td></tr><tr><th scope="row">Save DC</th><td colSpan={3}>Fort 10 + 1/2 your bloodrager level + your Con modifier</td></tr><tr><th scope="row">Onset</th><td colSpan={3}>immediate</td></tr><tr><th scope="row">Frequency</th><td colSpan={3}>1/round for 6 rounds</td></tr><tr><th scope="row">Effect</th><td colSpan={3}>1d2 <Link to="/rule/con_damage">Con damage</Link></td></tr><tr><th scope="row">Cure</th><td colSpan={3}>1 save</td></tr></tbody></table></ScrollContainer></div><div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-naga-form-sp" data-hash-target><div className="box">Naga Form (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can assume the form of a naga (as per <Link to="/spell/naga_shape_iii">naga shape III</Link>).</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-naga-naga-thoughts-sp-su" data-hash-target><div className="box">Naga Thoughts (Sp, Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you become immune to charm effects and all forms of mind reading, you gain a +2 bonus on saving throws against other mind-affecting effects, you gain the effects of the spell <Link to="/spell/see_invisibility">see invisibility</Link>, and you can use <Link to="/spell/detect_thoughts">detect thoughts</Link> at will.</div></div></div></div>
</>};
const _phoenix = {title: "Phoenix", jsx: <><h2 id="blrgbloodline-phoenix-phoenix-bloodline">Phoenix Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_144_midwives_to_death">Pathfinder #144: Midwives to Death pg. 82</Link></p>
<p>One of your ancestors may have witnessed the fiery resurrection of a <Link to="/monster/phoenix">phoenix</Link> or been healed by the grace of this legendary bird. Whatever the case, the flames of the phoenix burn brightly within your soul, filling you with an inextinguishable vitality that can withstand the most harrowing of assaults. When you bloodrage, vibrant energy boils forth from beneath your skin, granting you both the soothing warmth to heal a friend's wounds and the brutal power to burn flesh from bone. Your rage is an awesome and terrible thing to behold, as the raw power of your untamed life force can allow you to pull yourself back from the grasp of death itself.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/critical_focus">Critical Focus</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/mobility">Mobility</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/burning_hands">Burning hands</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/lesser_restoration">Lesser restoration</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/cure_serious_wounds">Cure serious wounds</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fire_shield">Fire shield</Link></div></div></div></div>
<h3 id="blrgbloodline-phoenix-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you channel the molten fires of the <Link to="/monster/phoenix">phoenix</Link> to sear your foes and fill your allies with an unquenchable vigor.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-dispelling-strikes-su" data-hash-target><div className="box">Dispelling Strikes (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">No limits on usage, except a creature can only be targeted once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you confirm a critical hit against a target, you can also attempt to dispel the target as if you had cast <Link to="/spell/dispel_magic">dispel magic</Link> as a bloodrager spell and used the targeted dispel function. You can dispel only a single magical effect per use of this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">You gain a +2 bonus on your dispel check when using this ability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can attempt to dispel all magical effects on your target when using this ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-heart-of-fire-su" data-hash-target><div className="box">Heart of Fire (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain fire <Link to="/umr/resistance">resistance</Link> 5. Whenever you are subjected to a magical healing effect from a <Link to="/main/cure_spells">cure spell</Link>, you regain 1 additional hit point per die rolled.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your fire resistance increases to 10, and you regain 2 additional hit points per die rolled when you are healed by a <em>cure</em> spell.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-blazing-vitality-su" data-hash-target><div className="box">Blazing Vitality (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When tensions run high and your emotions flare, you let forth waves of restorative energy from within. You emit a 10-foot-radius aura of energizing fire while bloodraging. Any ally that ends their turn within this aura gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to your Constitution modifier. These temporary hit points last for 1 minute.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-molten-wings-su" data-hash-target><div className="box">Molten Wings (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage you can choose to have wings of flame sprout from your back, giving you a fly speed of 60 feet with average maneuverability.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your fly speed increases to 80 feet with good maneuverability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-self-resurrection-su" data-hash-target><div className="box">Self-Resurrection (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">From the ashes of your body springs forth new life. Once per day when you are reduced below 0 hit points while you are bloodraging, you can call upon the power in your blood to pull yourself back from death. This functions as a <Link to="/spell/breath_of_life">breath of life</Link> spell cast upon yourself. Using this ability does not take an action. This ability does not function if your body is completely destroyed by an effect such as <Link to="/spell/disintegrate">disintegrate</Link>.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">This instead functions as a <Link to="/spell/heal">heal</Link> spell, except that the healing can return you to life as per <em>breath of life,</em> using your bloodrager level as your caster level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-phoenix-phoenix-fire-su" data-hash-target><div className="box">Phoenix Fire (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">The power of the phoenix brings righteous destruction to any who oppose it. While bloodraging, you gain the following effects: your melee attacks deal an additional 2d6 points of fire damage, any enemies within 20 feet of you must succeed at a Reflex save (DC = 10 + 1/2 your bloodrager level + your Constitution modifier) or take 4d6 points of fire damage at the start of their turn, and any creature that attacks you with a natural or non-reach weapon takes 1d6 points of fire damage (no save) with each successful hit.</div></div></div></div>
</>};
const _salamander = {title: "Salamander", jsx: <><h2 id="blrgbloodline-salamander-salamander-bloodline">Salamander Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/elemental_masters_handbook">Elemental Master's Handbook pg. 5</Link></p>
<p>Salamanders are fierce warriors and master smiths, and you wield their might and mastery of metal by birthright.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/improved_iron_will">Improved Iron Will</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/skill_focusperception">Skill Focus|Perception</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/lead_blades">Lead blades</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/make_whole">Make whole</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/versatile_weapon">Versatile weapon</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fire_shield__warm_only">Fire shield/ (warm only)</Link></div></div></div></div>
<h3 id="blrgbloodline-salamander-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you gain the form and flame of the <Link to="/monster/salamander">salamander</Link> and the following powers.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-serpents-tail-su" data-hash-target><div className="box">Serpent's Tail (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your legs twist together into a slithering serpentine tail. Your speed is reduced by 10 feet (to a minimum of 5 feet), and you can't be <Link to="/rule/trip">tripped</Link>. Your footwear melds into your body and is non-functional unless it provides a constant bonus and does not need to be activated. You also gain a tail slap <Link to="/umr/natural_attack">natural attack</Link> that deals 1d6 points of damage (1d4 if you are Small) + your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your speed is no longer reduced by 10 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your tail slap's damage increases to 1d8 (1d6 if you are Small) + your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">Your reach with your tail slap increases by 5 feet.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-salamander-scales-ex" data-hash-target><div className="box">Salamander Scales (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain fire <Link to="/umr/resistance">resistance</Link> 5 and a +1 natural armor bonus to AC.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">Your fire resistance increases to 10 and your natural armor bonus increases to +2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Your fire resistance increases to 20 and your natural armor bonus increases to +3.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-bloodsmith-su" data-hash-target><div className="box">Bloodsmith (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can choose one manufactured weapon you wield, shield you wield, or piece of armor you wear to gain the benefit of <Link to="/spell/greater_magic_weapon">greater magic weapon</Link> (weapon) or <Link to="/spell/magic_vestment">magic vestment</Link> (shield or armor). The caster level of this effect is equal to your bloodrager level, and its effects end when your bloodrage ends or when you no longer wear or wield the weapon, shield, or armor.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-scorching-heat-su" data-hash-target><div className="box">Scorching Heat (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your weapons conduct heat. You deal 1d6 additional points of fire damage with natural weapons and melee attacks made with metal weapons. You also deal 2d6 points of fire damage per round to any creature you <Link to="/rule/grapple">grapple</Link>. This does not damage your equipment.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-master-bloodsmith-su" data-hash-target><div className="box">Master Bloodsmith (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can affect up to two items simultaneously with your <em>bloodsmith</em> bloodline power.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">You can affect up to three items.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-salamander-essence-of-fire-ex" data-hash-target><div className="box">Essence of Fire (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become <Link to="/umr/immune">immune</Link> to fire damage. In addition, your bloodrager damage reduction increases by 5. If you don't have bloodrager damage reduction, you gain DR 10/magic instead. You have these benefits constantly, even while you are not bloodraging.</div></div></div></div>
</>};
const _shadow = {title: "Shadow", jsx: <><h2 id="blrgbloodline-shadow-shadow-bloodline">Shadow Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_shadows">Blood of Shadows pg. 16</Link></p>
<p>Because of your heritage, you can move and see through shadows as if you are part of them. Your fury absorbs light, warmth, and strength.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/step_up">Step Up</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/ray_of_enfeeblement">Ray of enfeeblement</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/darkvision">Darkvision</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/deeper_darkness">Deeper darkness</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/shadow_conjuration">Shadow conjuration</Link></div></div></div></div>
<h3 id="blrgbloodline-shadow-bloodline-powers">Bloodline Powers</h3>
<p>Your bloodline gives you powers over light and darkness.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-shadow-vision-su" data-hash-target><div className="box">Shadow Vision (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">While bloodraging, you gain low-light vision if you don't already have it. If you already have low-light vision, you gain darkvision to a distance of 30 feet.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You gain darkvision with a range of 30 feet, or add 30 feet to the range of your darkvision if you already have it.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/abstract-091"><IonIcon icon="/icons/abstract-091.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-shades-of-rage-su" data-hash-target><div className="box">Shades of Rage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Whenever you enter a bloodrage, the <Link to="/rule/light_level">light level</Link> within 30 feet of you decreases by one step. Natural light is always affected, but magical illumination dispels this ability if the caster of the light effect succeeds at a caster level check against a DC equal to 10 + your class level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-strength-of-shadows-su" data-hash-target><div className="box">Strength of Shadows (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain cold <Link to="/umr/resistance">resistance</Link> 10. Your melee attacks deal additional cold damage equal to the critical multiplier of the weapon you use.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">Your cold resistance increases to 20.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">You become <Link to="/umr/immune">immune</Link> to cold damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-strike-through-shadow-su" data-hash-target><div className="box">Strike Through Shadow (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">1 time/day + 1 per three bloodrager levels beyond 12th</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can declare a single melee attack as a strike through shadow. This attack moves through its target's shadow and strikes from below or inside its armor. You make this attack against the target's touch AC.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-shadow-door-su" data-hash-target><div className="box">Shadow Door (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can take any part of your movement through shadows, teleporting to another location within 60 feet. This ability functions as <Link to="/spell/dimension_door">dimension door</Link>, except you can't use shadow door in brightly lit areas. You can teleport in this manner a total of 10 feet per class level each day.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shadow-shadow-warrior-su" data-hash-target><div className="box">Shadow Warrior (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You become shadow and fury personified. You see perfectly in natural and magical darkness. Whenever you deal hit point damage with a spell or attack, you also deal 2 points of <Link to="/rule/strength_damage">Strength damage</Link> to each creature that took damage.</div></div></div></div>
</>};
const _shapechanger = {title: "Shapechanger", jsx: <><h2 id="blrgbloodline-shapechanger-shapechanger-bloodline">Shapechanger Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 20</Link></p>
<p>The blood of <Link to="/monster/doppelganger">doppelgangers</Link>, <Link to="/monster/faceless_stalker">faceless stalkers</Link>, <Link to="/template/lycanthrope">lycanthropes</Link>, or other shapechangers courses through your veins.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/fleet">Fleet</Link>, <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/lightning_reflexes">Lightning Reflexes</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/enlarge_person">Enlarge person</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/alter_self">Alter self</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/fly">Fly</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/stoneskin">Stoneskin</Link></div></div></div></div>
<h3 id="blrgbloodline-shapechanger-bloodline-powers">Bloodline Powers</h3>
<p>Transformative powers in your blood emerge when you bloodrage.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-shifting-aspect-su" data-hash-target><div className="box">Shifting Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain the benefit of the <Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link> feat while bloodraging. As part of the action to enter a bloodrage, you can choose any one of the four manifestations to affect you for the duration of your bloodrage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-spontaneous-change-sp" data-hash-target><div className="box">Spontaneous Change (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can cast a transmutation spell that affects only you, provided that the spell's normal casting time is 1 round or shorter. The spell lasts for as long as you continue bloodraging, regardless of the spell's normal duration. You can use this ability only to cast bloodrager spells you know.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-evolving-aspect-su" data-hash-target><div className="box">Evolving Aspect (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain <em>Aspect of the Beast</em> as a bonus feat even if you don't meet the prerequisites. As normal for the feat, you must choose one of the manifestations, and you gain its benefits even while not bloodraging. When you enter a bloodrage, you can choose a second manifestation to affect you simultaneously for the duration of your bloodrage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-beastskin-su" data-hash-target><div className="box">Beastskin (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can cause your skin to grow thicker and more bestial. Your <Link to="/rule/damage_reduction">damage reduction</Link> from your bloodrager levels increases by 2, but it can be bypassed with silver weapons. Your natural attacks (including unarmed strikes) are then treated as silver for the purpose of overcoming damage reduction.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-shed-skin-su" data-hash-target><div className="box">Shed Skin (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Immediate Action</div></div><div className="abEnd"><div className="box">When your bloodrage ends, you can choose one spell or spell-like ability affecting you and attempt to shake it off. Attempt a dispel check (1d20 + your bloodrager level) as if you were casting <Link to="/spell/dispel_magic">dispel magic</Link>. If you succeed, the effect is dispelled.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-shapechanger-true-shapechanger-su" data-hash-target><div className="box">True Shapechanger (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You are immune to all transmutation spells and effects unless you are a willing target. You can also use <Link to="/spell/greater_polymorph">greater polymorph</Link> at will as a spell-like ability with a caster level equal to your bloodrager level targeting only yourself. These effects function even while you're not bloodraging.</div></div></div></div>
</>};
const _sphinx = {title: "Sphinx", jsx: <><h2 id="blrgbloodline-sphinx-sphinx-bloodline">Sphinx Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 23</Link></p>
<p>Those who successfully traded riddles with sphinxes sometimes find themselves or their descendants exhibiting both arcane power and violent fury. These bloodragers find being outwitted or outmaneuvered especially infuriating; though they are usually scholarly and erudite, their fits of frenzied rage are all the more terrifying in comparison.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/improved_critical">Improved Critical</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/rending_fury">Rending Fury</Link>, <Link to="/feat/skill_focusintimidate">Skill Focus|Intimidate</Link>, <Link to="/feat/voice_of_the_sibyl">Voice of the Sibyl</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/divine_favor">Divine favor</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/touch_of_idiocy">Touch of idiocy</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/searing_light">Searing light</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/bestow_curse">Bestow curse</Link></div></div></div></div>
<h3 id="blrgbloodline-sphinx-bloodline-powers">Bloodline Powers</h3>
<p>You gain the ruthless claws and implacable voice of the <Link to="/family/sphinx">sphinx</Link> while bloodraging.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-claws-su" data-hash-target><div className="box">Claws (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You grow claws while bloodraging. These claws are treated as <Link to="/umr/natural_weapons">natural weapons</Link>, allowing you to make two claw attacks as a full attack, using your full base attack bonus. These attacks deal 1d6 points of damage each (1d4 if you are Small) plus your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">Your claws are considered magic weapons for the purpose of overcoming damage reduction.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The base damage your claws deal increases to 1d8 points (1d6 if you are small).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The critical threat range for your claws increases to 19-20.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-roar-su" data-hash-target><div className="box">Roar (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">3 + Cha modifier times/day</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">The bloodrager learns the secrets of the sphinx's roar. He can roar as a standard action a number of times per day equal to 3 + his Charisma modifier. Enemies within 60 feet of the bloodrager that can hear the roar must succeed at a Will save (DC = 10 + half the bloodrager's character level + his Charisma modifier) or become <Link to="/misc/frightened">frightened</Link> for 1d6 rounds. Whether or not the save is successful, a creature cannot be the target of the bloodrager's roar again for 24 hours.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">The bloodrager can instead cause targets who fail their save to be <Link to="/misc/panicked">panicked</Link> or <Link to="/misc/stunned">stunned</Link> (bloodrager's choice) and <Link to="/misc/deafened">deafened</Link> for the duration.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bloodrager can instead cause targets who fail their save to be <Link to="/rule/paralyzed">paralyzed</Link> for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-desert-fortitude-su" data-hash-target><div className="box">Desert Fortitude (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/resistance">resistance</Link> 5 to electricity and fire. In addition, you gain <Link to="/spell/endure_elements">endure elements</Link> as a constant spell-like ability and a +2 competence bonus on saves against arcane spells.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 6th Level</div></div><div className="abEnd"><div className="box">Your resistance to electricity and fire increases to 10.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-rending-rage-su" data-hash-target><div className="box">Rending Rage (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You gain a <Link to="/umr/rend">rend</Link> attack, as the universal monster rule, that deals extra damage equal to 2d4 + 1-1/2 times your Strength modifier.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 18th Level</div></div><div className="abEnd"><div className="box">This damage increases to 2d6 + 1-1/2 times your Strength modifier.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-master-of-mysteries-su" data-hash-target><div className="box">Master of Mysteries (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can cast either <Link to="/spell/maze">maze</Link> or <Link to="/spell/symbol_of_insanity">symbol of insanity</Link> once per day as a spell-like ability, with a caster level equal to your character level. You also gain spell resistance equal to 11 + your level.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-sphinx-final-riddle-su" data-hash-target><div className="box">Final Riddle (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to fire and electricity and ignore environmental penalties due to temperature. Your competence bonus on saving throws against arcane spells increases to +6. You have these benefits constantly, even while not raging.</div></div></div></div>
</>};
const _undead = {title: "Undead", jsx: <><h2 id="blrgbloodline-undead-undead-bloodline">Undead Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 22</Link></p>
<p>The foul corruption of undeath is a part of you. Somewhere in the past, death became infused with your lineage. Your connection to the attributes of the undead bestows frightening power when your bloodrage.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/chill_touch">Chill touch</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/false_life">False life</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/vampiric_touch">Vampiric touch</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/enervation">Enervation</Link></div></div></div></div>
<h3 id="blrgbloodline-undead-bloodline-powers">Bloodline Powers</h3>
<p>When you enter a bloodrage, the powers of undeath manifest, empowering your attacks with fear and your body with foul resistances.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-frightful-charger-su" data-hash-target><div className="box">Frightful Charger (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When you hit a creature with a <Link to="/rule/charge">charge</Link> attack, that creature becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 1/2 your bloodrager level (minimum 1). This effect does not cause an existing shaken or frightened condition (from this ability or another source) to turn into frightened or panicked. This is a mind-affecting fear effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-ghost-strike-su" data-hash-target><div className="box">Ghost Strike (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Your melee attacks are treated as if they have the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-deaths-gift-su" data-hash-target><div className="box">Death's Gift (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain cold <Link to="/umr/resistance">resistance</Link> 10, as well as DR 10/- against nonlethal damage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/mailed-fist"><IonIcon icon="/icons/mailed-fist.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-frightful-strikes-su" data-hash-target><div className="box">Frightful Strikes (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once per bloodrage.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can empower your melee attacks with fear. For 1 round, creatures you hit with your melee attacks become shaken. Creatures who are already shaken become <Link to="/misc/frightened">frightened</Link>. This is a mind-affecting fear effect.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">Those who are already frightened become <Link to="/misc/panicked">panicked</Link>.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-incorporeal-bloodrager-su" data-hash-target><div className="box">Incorporeal Bloodrager (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once a day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">You can choose to become <Link to="/umr/incorporeal">incorporeal</Link>. You take only half damage from magic corporeal sources, and you take no damage from non-magic weapons and objects. Your attacks deal damage as normal due to your <em>ghost strike</em> bloodrage power.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-undead-one-foot-in-the-grave-ex" data-hash-target><div className="box">One Foot in the Grave (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/immunity">immunity</Link> to cold, nonlethal damage, paralysis, and sleep. The DR from your damage reduction ability increases to 8. Unintelligent undead don't notice you unless you attack them. You gain a +4 morale bonus on saving throws made against spells and spell-like abilities cast by undead. You have these benefits constantly, even while not bloodraging.</div></div></div></div>
</>};
const _verdant = {title: "Verdant", jsx: <><h2 id="blrgbloodline-verdant-verdant-bloodline">Verdant Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 17</Link></p>
<p>Your body is suffused with raw plant life. When you bloodrage, your plant-like characteristics bolster your durability and grant you some control over vegetation.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/bolstered_resilience">Bolstered Resilience</Link>, <Link to="/feat/diehard">Diehard</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/raging_vitality">Raging Vitality</Link>, <Link to="/feat/toughness">Toughness</Link></p><div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/entangle">Entangle</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/greensight">Greensight</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/burst_of_nettles">Burst of nettles</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/command_plants">Command plants</Link></div></div></div></div>
<h3 id="blrgbloodline-verdant-bloodline-powers">Bloodline Powers</h3>
<p>While bloodraging, you gain plant-like abilities and immunities as you become overgrown with jagged branches, rugged bark, and thick vines.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-verdant-growth-su" data-hash-target><div className="box">Verdant Growth (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">You gain <Link to="/umr/fast_healing">fast healing</Link> 1 while bloodraging. If you have a bloodrager class feature that also grants you fast healing (such as the <Link to="/arc-bloodrager/spelleater">spelleater's</Link> blood of life class feature), you can stack up to half of your fast healing from such abilities with the fast healing gained from this ability, but you cannot do so by an amount that exceeds your Charisma bonus (minimum 0).</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 4th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 2.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 7th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 10th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 13th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 5.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 6.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 19th Level</div></div><div className="abEnd"><div className="box">You instead gain fast healing 7.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-oaken-skin-ex" data-hash-target><div className="box">Oaken Skin (Ex)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">When entering a bloodrage, your skin thickens like bark and you gain a +2 enhancement bonus to your natural armor.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 8th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +3.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 12th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +4.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 16th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +5.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">At 20th Level</div></div><div className="abEnd"><div className="box">The bonus becomes +6.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-botanical-plasticity-su" data-hash-target><div className="box">Botanical Plasticity (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You can bend and twist the plant life within your body to elongate your limbs. Your reach increases by 5 feet until the end of your turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-verdant-call-sp" data-hash-target><div className="box">Verdant Call (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">When entering a bloodrage, you can animate nearby plants to aid you in combat, functioning as <Link to="/spell/wilderness_soldiers">wilderness soldiers</Link>, using your Charisma modifier instead of your Wisdom modifier. This effect lasts for as long as you continue bloodraging, regardless of the spell's normal duration.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-natures-thorns-su" data-hash-target><div className="box">Nature's Thorns (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Creatures that hit you in melee (other than those using manufactured reach weapons) take 4d6 points of piercing damage. A creature takes this damage only on its first successful attack against you in a combat round, and not on subsequent attacks in that round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link><Link to="/icons/armor-upgrade"><IonIcon icon="/icons/armor-upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-verdant-verdant-apotheosis-su" data-hash-target><div className="box">Verdant Apotheosis (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">Verdant power surges throughout your being. While bloodraging, you gain <Link to="/umr/tremorsense">tremorsense</Link> out to 30 feet. In addition, you gain immunity to paralysis, poison, sleep, and stunning effects, even while you are not bloodraging.</div></div></div></div>
</>};
const _vestige = {title: "Vestige", jsx: <><h2 id="blrgbloodline-vestige-vestige-bloodline">Vestige Bloodline</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 6</Link></p>
<p>You are the descendant of great heroes from a lost civilization.</p>
<p><strong>Bonus Feats:</strong> <Link to="/feat/combat_casting">Combat Casting</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link>, <Link to="/feat/greater_weapon_focus">Greater Weapon Focus</Link>*, <Link to="/feat/greater_weapon_specialization">Greater Weapon Specialization</Link>*, <Link to="/feat/iron_will">Iron Will</Link>, <Link to="/feat/weapon_focus">Weapon Focus</Link>, <Link to="/feat/weapon_specialization">Weapon Specialization</Link>*.</p>
<p>The bloodrager counts his total bloodrager levels as fighter levels for the purpose of qualifying for any feats marked with an asterisk (*). If he also has levels in fighter, these levels stack.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/spell-book"><IonIcon icon="/icons/spell-book.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-bonus-spells-by-bloodrager-level" data-hash-target><div className="box">Bonus Spells by Bloodrager Level</div></div>
<div className="abPair"><div className="abStart plain"><div className="box">7th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/true_strike">True strike</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">10th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/false_life">False life</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">13th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/phantom_steed">Phantom steed</Link></div></div></div>
<div className="abPair"><div className="abStart plain"><div className="box">16th</div></div><div className="abEnd simple"><div className="box"><Link to="/spell/mass_enlarge_person">Mass enlarge person</Link></div></div></div></div>
<h3 id="blrgbloodline-vestige-bloodline-powers">Bloodline Powers</h3>
<p>When you bloodrage, you transform into an ancestor or another notable figure from a lost civilization.</p>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-warriors-discipline-su" data-hash-target><div className="box">Warrior's Discipline (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 1st Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Swift Action</div></div><div className="abEnd"><div className="box">You tap into untold generations of battle experience to control your battle fury. You can halve any morale bonuses gained from bloodrage to be able to use Intelligence- or Charisma-based skills, or any abilities requiring patience or concentration. This effect lasts for 1 round.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-ancient-tactics-su" data-hash-target><div className="box">Ancient Tactics (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 4th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Passive Ability</div></div><div className="abEnd"><div className="box">While you are bloodraging, whenever you or an ally within 30 feet of you would gain a bonus on attack rolls or to AC due to battlefield position (such as <Link to="/rule/flanking">flanking</Link> or <Link to="/rule/cover">cover</Link>), that bonus is increased by 1. Allies must be able to see and hear you to gain this bonus. You can expend a spell slot as an immediate action to further increase this bonus by 1 per level of the spell slot expended until the beginning of your next turn.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/stairs-goal"><IonIcon icon="/icons/stairs-goal.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-legacy-style-su" data-hash-target><div className="box">Legacy Style (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 8th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">Select any one <Link to="/main/style_feat">style feat</Link>. You can use this style feat while bloodraging; however, if you do not meet all of the style feat's prerequisites, you must expend a spell slot when entering the style's stance, and the benefits last for only 1 round per level of the spell slot expended or for the duration of your bloodrage, whichever is shorter. If you already have this style feat, you can enter the style's stance as part of the free action to bloodrage.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link><Link to="/icons/armor-downgrade"><IonIcon icon="/icons/armor-downgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-wars-memory-sp" data-hash-target><div className="box">War's Memory (Sp)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 12th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can manifest an illusion of an ancestor's bloody battlefield once per day. This functions as <Link to="/spell/hallucinatory_terrain">hallucinatory terrain</Link>, except it can create only battlefields drawn from a civilization's past, and the effect ends when your bloodrage ends. The saving throw to disbelieve is equal to 10 + 1/2 your bloodrager level + your Constitution modifier. The horrifying scene causes creatures within the area of effect to take a -2 penalty on saves versus fear effects until they disbelieve the illusion. If a creature fails the Will save to disbelieve the illusion, it gains the <Link to="/misc/shaken">shaken</Link> condition until your bloodrage ends, or until it leaves the area of effect. This is an illusion (glamer) and fear effect.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/upgrade"><IonIcon icon="/icons/upgrade.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-legacy-conduit-su" data-hash-target><div className="box">Legacy Conduit (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 16th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Ability</div></div><div className="abEnd"><div className="box">When using the <em>legacy style</em> bloodline power, you can expend a spell slot as a swift action to share the benefits of the selected style feat with all allies within 30 feet. The benefits last for 1 round per level of the spell slot expended. Allies must still enter the style's stance as a swift action.</div></div></div></div>
<div className="ability p"><div className="abIcon"><Link to="/icons/magic-swirl"><IonIcon icon="/icons/magic-swirl.svg" color="secondary" /></Link></div>
<div className="title abSingle" id="blrgbloodline-vestige-call-to-arms-su" data-hash-target><div className="box">Call to Arms (Su)</div></div>
<div className="abPair"><div className="abStart"><div className="box">Gained</div></div><div className="abEnd"><div className="box">At 20th Level</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Usage</div></div><div className="abEnd"><div className="box">Once per day.</div></div></div>
<div className="abPair"><div className="abStart"><div className="box">Standard Action</div></div><div className="abEnd"><div className="box">You can summon a ghostly army from a fallen civilization once per day. This functions as <Link to="/spell/spiritual_ally">spiritual ally</Link> with a caster level equal to your level, except that it summons a number of allies equal to your Constitution modifier, and the allies use your Strength modifier for attack rolls. You can direct all of these allies with a single swift action. Each ally can attack a different target or the same target, as you direct. The allies remain until the spell's duration ends or your bloodrage ends, whichever comes first.</div></div></div></div>
</>};
export default {not_found:_not_found,aberrant:_aberrant,abyssal:_abyssal,aquatic:_aquatic,arcane:_arcane,black_blood:_black_blood,celestial:_celestial,destined:_destined,draconic:_draconic,elemental:_elemental,fey:_fey,hag:_hag,infernal:_infernal,kyton:_kyton,martyred:_martyred,medusa:_medusa,naga:_naga,phoenix:_phoenix,salamander:_salamander,shadow:_shadow,shapechanger:_shapechanger,sphinx:_sphinx,undead:_undead,verdant:_verdant,vestige:_vestige}