import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="ragepower-not_found-error">Error</h2>
<p>Unable to find the requested rage power.</p>
</>};
const _animal_fury = {title: "Animal Fury", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="animal-fury-ex" icon={["mailed-fist"]}>
<Pair single id="animal-fury-ex">Animal Fury (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains a <Link to="/umr/bite_attack">bite attack</Link>. If used as part of a full attack action, the bite attack is made at the barbarian's full base attack bonus -5. If the bite hits, it deals 1d4 points of damage (assuming the barbarian is Medium; 1d3 points of damage if Small) plus half the barbarian's Strength modifier.</Pair>
<Pair title="Special">A barbarian can make a bite attack as part of the action to maintain or break free from a grapple. This attack is resolved before the grapple check is made. If the bite attack hits, any grapple checks made by the barbarian against the target this round are at a +2 bonus.</Pair>
</Ability>
</>};
const _greater_animal_fury = {title: "Greater Animal Fury", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="greater-animal-fury-ex" icon={["upgrade"]}>
<Pair single id="greater-animal-fury-ex">Greater Animal Fury (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link></Pair>
<Pair title="Ability">This power works as <em>animal fury,</em> but the barbarian's bite attack deals damage as if she were <Link to="/misc/one_size_category_larger">one size category larger</Link>.</Pair>
</Ability>
</>};
const _bloody_bite = {title: "Bloody Bite", jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="bloody-bite-ex" icon={["upgrade"]}>
<Pair single id="bloody-bite-ex">Bloody Bite (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/half_orc">Half-orc</Link>, either <Link to="/ragepower/animal_fury">animal fury</Link> or a natural bite attack</Pair>
<Pair title="Passive Ability">The barbarian's bite attack deals 1d6 points of <Link to="/rule/bleed">bleed</Link> damage in addition to its other effects.</Pair>
</Ability>
</>};
const _feasting_bite = {title: "Feasting Bite", jsx: <><p><strong>Sources</strong> <Link to="/source/agents_of_evil">Agents of Evil</Link></p>
<Ability id="feasting-bite-ex" icon={["remedy"]}>
<Pair single id="feasting-bite-ex">Feasting Bite (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/race/half_orc">Half-orc</Link>, <Link to="/ragepower/bloody_bite">bloody bite</Link>, either <Link to="/ragepower/animal_fury">animal fury</Link> or a natural bite attack</Pair>
<Pair title="Passive Ability">When the barbarian confirms a critical hit with her bite attack, she regains a number of hit points equal to half the damage dealt. Activating this ability consumes 1 round of <em>rage.</em></Pair>
</Ability>
</>};
const _penetrating_bite = {title: "Penetrating Bite", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="penetrating-bite-ex" icon={["upgrade"]}>
<Pair single id="penetrating-bite-ex" flavor={<>When using the <em>animal fury</em> rage power while <em>raging,</em> the barbarian's bite is able to pierce most resistances.</>}>Penetrating Bite (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian, <Link to="/ragepower/animal_fury">animal fury</Link></Pair>
<Pair title="At 4th Level">Her bite is treated as a magic weapon for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 7th Level">Her bite is also treated as cold iron and silver for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 10th Level">Her bite is also treated as a chaotic weapon for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 16th Level">Her bite is treated as an <Link to="/eq-material/adamantine">adamantine</Link> weapon for the purpose of overcoming damage reduction and bypassing hardness.</Pair>
</Ability>
</>};
const _savage_jaw = {title: "Savage Jaw", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption</Link></p>
<Ability id="savage-jaw-ex" icon={["mailed-fist"]}>
<Pair single id="savage-jaw-ex" flavor={<>While <em>raging,</em> the barbarian can open her jaw wide and latch her teeth firmly onto her opponent.</>}>Savage Jaw (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link></Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Free Action">While using the <em>animal fury</em> power, the barbarian can activate this power and gain the <Link to="/umr/grab">grab</Link> ability with her bite attack until the start of her next turn.</Pair>
</Ability>
</>};
const _vipers_kiss = {title: "Viper's Kiss", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link></p>
<Ability id="vipers-kiss-ex" icon={["mailed-fist"]}>
<Pair single id="vipers-kiss-ex">Viper's Kiss (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link> or a has bite attack while <em>raging</em></Pair>
<Pair title="Ability"><p>The barbarian can drink 1 dose of an ingested poison as a <strong className="hl">move action</strong> (instead of a standard action) as long as she starts the turn with the poison in her hand. She can hold this dose within her mouth for a number of rounds equal to her Constitution modifier (minimum 1 round) without suffering harmful effects. If the barbarian still holds the poison in her mouth after this time, she consumes the poison.</p>
<p>While the dose is held within her mouth, the barbarian's next successful bite attack applies the effect of the poison with an immediate onset; this consumes the dose.</p>
</Pair>
</Ability>
</>};
const _vipers_breath = {title: "Viper's Breath", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link></p>
<Ability id="vipers-breath-ex" icon={["tornado-discs"]}>
<Pair single id="vipers-breath-ex">Viper's Breath (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/vipers_kiss">Viper's kiss</Link></Pair>
<Pair title="Ability">While holding a dose of poison in her mouth, the barbarian can exhale a 15-foot cone of inhaled poison. Anyone caught in the spray must succeed at a saving throw against the poison with a DC equal to the poison's DC - 4 or suffer the poison's effects with an immediate onset.</Pair>
</Ability>
</>};
const _enhance_venom = {title: "Enhance Venom", jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox</Link></p>
<Ability id="enhance-venom-ex" icon={["upgrade"]}>
<Pair single id="enhance-venom-ex">Enhance Venom (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/vipers_kiss">Viper's kiss</Link>, <Link to="/ragepower/vipers_breath">viper's breath</Link></Pair>
<Pair title="Passive Ability">The barbarian adds her Constitution modifier to the DC of any poison she delivers using <em>viper's kiss</em> or <em>viper's breath.</em></Pair>
</Ability>
</>};
const _armor_ripper = {title: "Armor Ripper", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="armor-ripper" icon={["upgrade"]}>
<Pair single id="armor-ripper">Armor Ripper</Pair>
<Pair title="Prerequisites"><Link to="/race/wereboar_kin">Wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Passive Ability">While <em>raging,</em> you gain a +2 bonus on combat maneuver checks made to <Link to="/rule/sunder">sunder</Link> with any of your natural attacks.</Pair>
</Ability>
</>};
const _auspicious_mark = {title: "Auspicious Mark", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="auspicious-mark-su" icon={["upgrade"]}>
<Pair single id="auspicious-mark-su" flavor="The barbarian has been marked by the spirits, as indicated by an impressive tattoo, scar, or birthmark she possesses.">Auspicious Mark (Su)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Swift Action">By spending 2 rounds of <em>rage,</em> the barbarian can call upon the spirits' favor. Using <em>auspicious mark</em> grants her a +1d6 bonus on one d20 roll she has just made.</Pair>
<Pair title="Special">She can call on the <em>auspicious</em> mark after seeing the result of the d20 roll.</Pair>
</Ability>
</>};
const _autumn_rage = {title: "Autumn Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="autumn-rage-su" icon={["upgrade"]}>
<Pair single id="autumn-rage-su" flavor="The barbarian becomes a servant of the harvest.">Autumn Rage (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> she gains a +2 bonus on combat maneuver checks to <Link to="/rule/reposition">reposition</Link> or <Link to="/rule/trip">trip</Link>. She also gains this bonus on attack rolls to confirm critical hits.</Pair>
<Pair title="Special">A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, <Link to="/ragepower/summer_rage">summer</Link>, <em>autumn,</em> or <Link to="/ragepower/winter_rage">winter</Link> rage.</Pair>
</Ability>
</>};
const _bloody_fist = {title: "Bloody Fist", jsx: <><p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="bloody-fist-ex" icon={["mailed-fist"]}>
<Pair single id="bloody-fist-ex">Bloody Fist (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian may attempt to punch through an opponent's flesh and rip out one of its vital organs. In order to do so, the barbarian must confirm a critical hit against an opponent with a natural attack or unarmed strike. The barbarian deals damage as normal for a critical hit and the opponent must succeed at a Fortitude save (DC = 10 + 1/2 the barbarian's class level + the barbarian's Strength modifier) or take 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> as one of its vital organs is ripped free from its body.</Pair>
</Ability>
</>};
const _feast_of_blood = {title: "Feast of Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook</Link></p>
<Ability id="feast-of-blood-su" icon={["remedy","armor-upgrade"]}>
<Pair single id="feast-of-blood-su" flavor={<>While <em>raging,</em> the barbarian may feast on the organs of her foes and absorb their power.</>}>Feast of Blood (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/bloody_fist">Bloody fist</Link>, 14th-level barbarian</Pair>
<Pair title="Full-Round Action"><p>After successfully ripping out a creature's vital organ, the barbarian may eat the organ within 1 minute of extracting it. Once the organ is consumed, the barbarian recovers a number of hit points equal to the Hit Dice of the organ's owner.</p>
<p>In addition, the barbarian gains any energy immunities or resistances the victim had, though the effectiveness of these resistances is halved (for instance, a barbarian who eats the heart of a creature with <Link to="/umr/resist">resist</Link> cold 10 would gain resist cold 5; energy immunities are reduced to resist energy 20). This energy resistance lasts for a number of rounds equal to half the Hit Dice of the creature whose organ was consumed.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
</Ability>
</>};
const _boars_charge = {title: "Boar's Charge", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="boars-charge" icon={["mailed-fist","upgrade"]}>
<Pair single id="boars-charge">Boar's Charge</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/race/wereboar_kin">wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Ability">While <em>raging,</em> when you hit with a gore attack as part of a <Link to="/rule/charge">charge</Link>, you automatically score a critical threat. You must still confirm the critical hit as normal.</Pair>
</Ability>
</>};
const _boasting_taunt = {title: "Boasting Taunt", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="boasting-taunt-ex" icon={["armor-downgrade"]}>
<Pair single id="boasting-taunt-ex">Boasting Taunt (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can incite a creature to attack her by making an <Link to="/skill/intimidate">Intimidate</Link> check to demoralize. If the check succeeds, the target is also <Link to="/misc/shaken">shaken</Link> as long as the barbarian is visible and <em>raging</em> or until it makes a melee attack against the barbarian. The barbarian receives a +2 circumstance bonus on this check for every alcoholic drink she has consumed during this <em>rage.</em></Pair>
<Pair title="Special">This is a language-dependent mind-affecting effect, and it relies on audible components.</Pair>
</Ability>
</>};
const _body_bludgeon = {title: "Body Bludgeon", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="body-bludgeon-ex" icon={["mailed-fist"]}>
<Pair single id="body-bludgeon-ex">Body Bludgeon (Ex)</Pair>
<Pair title="Prerequisites">10th-level barbarian</Pair>
<Pair title="Ability"><p>While <em>raging,</em> if the barbarian <Link to="/rule/pin">pins</Link> an opponent that is smaller than her, she can then use that opponent as a two-handed <Link to="/misc/improvised_weapon">improvised weapon</Link> that deals 1d8 points of bludgeoning damage, assuming the opponent is sized Small. Larger or smaller creatures used as a bludgeon deal damage based on their size using this base damage. A size Tiny creature deals 1d6 points of damage, a size Medium creature deals 1d10 points of damage, <Link to="/misc/and_so_on">and so on</Link>.</p>
<p>The barbarian can make a single attack using the pinned opponent as part of the action she uses to maintain the grapple, using her highest attack bonus. Whenever the barbarian hits using the pinned opponent as a weapon, she deals damage to her target normally, and the grappled opponent used as a bludgeon also takes the same damage she dealt to the target.</p>
</Pair>
<Pair title="Special">If the pinned opponent is unable to resist being pinned for any reason, the barbarian can use that opponent as an improvised weapon without grappling or pinning the opponent, until the creature is reduced to 0 or fewer hit points, at which point the creature becomes useless as an improvised weapon.</Pair>
</Ability>
</>};
const _brawler = {title: "Brawler", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="brawler" icon={["mailed-fist"]}>
<Pair single id="brawler">Brawler</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian is treated as if she has <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>. If she already has the feat, her unarmed strikes deal 1d6 points of damage (1d4 if she is Small).</Pair>
</Ability>
</>};
const _greater_brawler = {title: "Greater Brawler", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-brawler" icon={["mailed-fist"]}>
<Pair single id="greater-brawler">Greater Brawler</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/brawler">Brawler</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian is treated as if she has <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> when making unarmed strike attacks.</Pair>
</Ability>
</>};
const _breathtaker = {title: "Breathtaker", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="breathtaker-ex" icon={["armor-downgrade"]}>
<Pair single id="breathtaker-ex" flavor="The barbarian's blows take the air from her foes' lungs.">Breathtaker (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> whenever the barbarian makes a successful melee attack against an opponent that is <Link to="/misc/hold_its_breath">holding its breath</Link>, in addition to any other effects caused by that attack, the opponent loses a number of rounds of breath equal to the barbarian's Strength modifier.</Pair>
</Ability>
</>};
const _clear_mind = {title: "Clear Mind", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="clear-mind-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="clear-mind-ex">Clear Mind (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian</Pair>
<Pair title="Immediate Action">A barbarian may reroll a failed Will save. This power is used after the first save is attempted, but before the results are revealed by the GM. The barbarian must take the second result, even if it is worse.</Pair>
<Pair title="Special">This power can only be used once per <em>rage.</em></Pair>
</Ability>
</>};
const _come_and_get_me = {title: "Come and Get Me", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="come-and-get-me-ex" icon={["broken-shield","mailed-fist"]}>
<Pair single id="come-and-get-me-ex">Come and Get Me (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Free Action">While <em>raging,</em> the barbarian may leave herself open to attack while preparing devastating counterattacks. Enemies gain a +4 bonus on attack and damage rolls against the barbarian until the beginning of her next turn, but every attack against the barbarian provokes an attack of opportunity from her, which is resolved prior to resolving each enemy attack.</Pair>
</Ability>
</>};
const _contagious_rage = {title: "Contagious Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="contagious-rage-su" icon={["upgrade"]}>
<Pair single id="contagious-rage-su" flavor="The barbarian howls during combat, agitating nearby fauna.">Contagious Rage (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Ability">Willing animals and magical beasts within 30 feet of the barbarian gain the benefits of the <Link to="/spell/rage">rage</Link> spell for as long as she maintains her <em>rage.</em> After the barbarian's <em>rage</em> ends, creatures affected by her <em>rage</em> are <Link to="/misc/fatigued">fatigued</Link> for the same number of rounds as the barbarian.</Pair>
</Ability>
</>};
const _deathless_frenzy = {title: "Deathless Frenzy", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="deathless-frenzy" icon={["stairs-goal"]}>
<Pair single id="deathless-frenzy">Deathless Frenzy</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/race/wereboar_kin">wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Passive Ability">While <em>raging,</em> you ignore the effects of being at 0 or fewer hit points until you have been at 0 or fewer hit points for 1 round, at which point the appropriate consequences for your current hit point total take effect. Even death can be postponed this way, potentially allowing you to survive if you receive sufficient healing before the round is up.</Pair>
</Ability>
</>};
const _disemboweling_tusks = {title: "Disemboweling Tusks", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="disemboweling-tusks" icon={["upgrade"]}>
<Pair single id="disemboweling-tusks">Disemboweling Tusks</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/race/wereboar_kin">wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Ability">While <em>raging,</em> when you confirm a critical hit with your gore attack, you deal 1d4 points of <Link to="/rule/constitution_damage">Constitution damage</Link> in addition to the normal damage for the gore attack.</Pair>
</Ability>
</>};
const _dissipating_rage = {title: "Dissipating Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="dissipating-rage-su" icon={["armor-downgrade"]}>
<Pair single id="dissipating-rage-su">Dissipating Rage (Su)</Pair>
<Pair title="Passive Ability">When the barbarian <em>rages,</em> her feverish frenzy and hot breath burn or blow fog, smoke and similar effects away from her. The barbarian and creatures adjacent to her do not gain <Link to="/rule/concealment">concealment</Link> from obfuscating effects like fog or precipitation.</Pair>
<Pair title="Special">Magical effects that require more than a strong wind to dissipate are not affected by this rage power.</Pair>
</Ability>
</>};
const _eclipsing_rage = {title: "Eclipsing Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="eclipsing-rage-su" icon={["magic-swirl"]}>
<Pair single id="eclipsing-rage-su">Eclipsing Rage (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> the <Link to="/rule/light_level">light level</Link> within 10 feet of her lowers by one step. She can't decrease the light level below normal darkness with this ability.</Pair>
<Pair title="Special">Multiple barbarians with this rage power don't further reduce the light level.</Pair>
</Ability>
</>};
const _greater_eclipsing_rage = {title: "Greater Eclipsing Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="greater-eclipsing-rage-su" icon={["magic-swirl"]}>
<Pair single id="greater-eclipsing-rage-su">Greater Eclipsing Rage (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/eclipsing_rage">eclipsing rage</Link></Pair>
<Pair title="Passive Ability">Whenever the barbarian <em>rages,</em> the <Link to="/rule/light_level">light level</Link> within 20 feet of her lowers by two steps instead of one. She still can't decrease the light level below normal darkness with this ability.</Pair>
</Ability>
</>};
const _lesser_elemental_rage = {title: "Lesser Elemental Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-elemental-rage-su" icon={["upgrade"]}>
<Pair single id="lesser-elemental-rage-su">Lesser Elemental Rage (Su)</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Swift Action">The barbarian can cause her melee attacks to deal an additional 1d6 points of energy damage (acid, cold, electricity, or fire) for 1 round.</Pair>
</Ability>
</>};
const _elemental_rage = {title: "Elemental Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="elemental-rage-su" icon={["upgrade"]}>
<Pair single id="elemental-rage-su">Elemental Rage (Su)</Pair>
<Pair title="Prerequisites">8th-level barbarian,<Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> all of the barbarian's melee attacks deal an additional 1d6 points of energy damage (acid, cold, electricity, or fire). The type is chosen when the barbarian begins her <em>rage.</em></Pair>
<Pair title="Special">The barbarian can still use her <em>lesser elemental rage</em> power while using this rage power, but she must select a different energy type.</Pair>
</Ability>
</>};
const _greater_elemental_rage = {title: "Greater Elemental Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-elemental-rage-su" icon={["upgrade"]}>
<Pair single id="greater-elemental-rage-su">Greater Elemental Rage (Su)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/elemental_rage">elemental rage</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> all of the barbarian's critical hits made with melee weapons deal an additional 1d10 points of energy damage (2d10 if the weapon deals &times;3 damage on a critical hit, 3d10 if the weapon deals &times;4 on a critical hit). The type of this damage is the same as the type chosen for the <em>elemental rage</em> power.</Pair>
</Ability>
</>};
const _energy_resistance = {title: "Energy Resistance", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="energy-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="energy-resistance-ex">Energy Resistance (Ex)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/resistance">resistance</Link> to one energy type (acid, cold, electricity, fire, or sonic) equal to 1/2 her barbarian level (minimum 1).</Pair>
<Pair title="Special">The energy type is chosen when this rage power is selected and it cannot be changed. This rage power can be selected more than once. Its effects do not stack. Each time is applies to a different energy type.</Pair>
</Ability>
</>};
const _greater_energy_resistance = {title: "Greater Energy Resistance", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-energy-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="greater-energy-resistance-ex">Greater Energy Resistance (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/energy_resistance">energy resistance</Link></Pair>
<Pair title="Ability">Once per <em>rage,</em> a barbarian can reduce damage by half from a single attack against which she has energy resistance (halve the damage, then apply resistance).</Pair>
</Ability>
</>};
const _energy_absorption = {title: "Energy Absorption", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="energy-absorption-su" icon={["armor-upgrade"]}>
<Pair single id="energy-absorption-su">Energy Absorption (Su)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/greater_energy_resistance">greater energy resistance</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can absorb energy from a single attack of her chosen energy type once per <em>rage.</em> She does not make a saving throw against the effect but takes no damage from it, instead gaining 1 temporary hit point per 3 points of damage the attack would have inflicted. These <Link to="/rule/temporary_hit_points">temporary hit points</Link> last until the end of the barbarian's <em>rage.</em></Pair>
</Ability>
</>};
const _energy_eruption = {title: "Energy Eruption", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="energy-eruption-su" icon={["armor-upgrade","barbed-arrow","tornado-discs"]}>
<Pair single id="energy-eruption-su">Energy Eruption (Su)</Pair>
<Pair title="Prerequisites">16th-level barbarian, <Link to="/ragepower/energy_absorption">energy absorption</Link></Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Ability"><p>While <em>raging,</em> the barbarian can absorb energy from a single attack and unleash it upon her enemies. She does not make a saving throw against the effect but takes no damage from it.</p>
<p>At any point during the remainder of her <em>rage</em> she can unleash the stored energy as a breath weapon in either a 60-foot line or 30-foot cone. The breath weapon inflicts damage equal to the damage from the attack absorbed by the barbarian, but creatures within the area may make a Reflex save (DC 10 + 1/2 the barbarian's level + the barbarian's Constitution modifier) for half damage even if the original effect did not allow a save.</p>
</Pair>
</Ability>
</>};
const _erratic_charge = {title: "Erratic Charge", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="erratic-charge-ex" icon={["mailed-fist"]}>
<Pair single id="erratic-charge-ex">Erratic Charge (Ex)</Pair>
<Pair title="Ability">As part of the full-round action to perform a <Link to="/rule/charge">charge</Link> attack against a creature at least 20 feet away, the barbarian can move 5 feet in any direction before making the charge. This movement is not a 5-foot step and provokes attacks of opportunity as normal, and using this option reduces the maximum distance of the charge by 10 feet.</Pair>
</Ability>
</>};
const _greater_erratic_charge = {title: "Greater Erratic Charge", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="greater-erratic-charge-ex" icon={["mailed-fist"]}>
<Pair single id="greater-erratic-charge-ex">Greater Erratic Charge (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/erratic_charge">Erratic charge</Link></Pair>
<Pair title="Ability">The barbarian can move 10 feet when using <em>erratic charge.</em> If she does so, the creature she is charging must be at least 20 feet away and the movement reduces the maximum distance of her charge by 20 feet.</Pair>
</Ability>
</>};
const _fearless_rage = {title: "Fearless Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="fearless-rage-ex" icon={["armor-upgrade"]}>
<Pair single id="fearless-rage-ex">Fearless Rage (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian is immune to the <Link to="/misc/shaken">shaken</Link> and <Link to="/misc/frightened">frightened</Link> conditions.</Pair>
</Ability>
</>};
const _ferocious_beast = {title: "Ferocious Beast", jsx: <><p><strong>Sources</strong> <Link to="/source/animal_archive">Animal Archive</Link></p>
<Ability id="ferocious-beast-ex" icon={["stairs-goal"]}>
<Pair single id="ferocious-beast-ex">Ferocious Beast (Ex)</Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> her animal companion also gains the benefits of <em>rage</em> (including <em>greater rage, mighty rage,</em> and <em>tireless rage</em>), though the barbarian must spend 1 additional round of <em>rage</em> per round if her companion begins or ends its turn adjacent to her, and 2 additional rounds of <em>rage</em> per round if not.</Pair>
</Ability>
</>};
const _greater_ferocious_beast = {title: "Greater Ferocious Beast", jsx: <><p><strong>Sources</strong> <Link to="/source/animal_archive">Animal Archive</Link></p>
<Ability id="greater-ferocious-beast-ex" icon={["stairs-goal"]}>
<Pair single id="greater-ferocious-beast-ex">Greater Ferocious Beast (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/ferocious_beast">ferocious beast</Link></Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> her animal companion shares the benefits of the barbarian's rage powers that are constant in effect. It gains no benefit from rage powers that require actions to activate, even if they are free actions.</Pair>
</Ability>
</>};
const _ferocious_mount = {title: "Ferocious Mount", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="ferocious-mount-ex" icon={["stairs-goal"]}>
<Pair single id="ferocious-mount-ex">Ferocious Mount (Ex)</Pair>
<Pair title="Passive Ability">While <em>raging</em> and mounted, the barbarian's mount also gains the benefits of <em>rage</em> (including <em>greater rage</em> and <em>mighty rage</em>) as long as the barbarian is mounted or adjacent to it. While her mount is <em>raging</em> in this way, she must spend one additional round of <em>rage</em> per round. She can elect not to pay this cost, in which case her mount does not <em>rage.</em></Pair>
</Ability>
</>};
const _greater_ferocious_mount = {title: "Greater Ferocious Mount", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-ferocious-mount-ex" icon={["stairs-goal"]}>
<Pair single id="greater-ferocious-mount-ex">Greater Ferocious Mount (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/ferocious_mount">ferocious mount</Link></Pair>
<Pair title="Passive Ability">While <em>raging</em> and mounted, the barbarian's mount gains the benefits of any rage powers that are constant in effect when the barbarian is <em>raging.</em> It does not gain the benefit of any rage powers that require actions to activate, even if they are free actions.</Pair>
</Ability>
</>};
const _ferocious_trample = {title: "Ferocious Trample", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="ferocious-trample-ex" icon={["mailed-fist"]}>
<Pair single id="ferocious-trample-ex">Ferocious Trample (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/ferocious_mount">ferocious mount</Link></Pair>
<Pair title="Ability"><p>While <em>raging</em> and mounted, the barbarian's mount gains the <Link to="/umr/trample">trample</Link> special attack. This attack inflicts 1d8 points of damage for a Medium mount, 2d6 for a Large mount, or 2d8 for a Huge mount, plus 1-1/2 times the mount's Strength modifier. A successful Reflex save (DC 10 + 1/2 the barbarian's level + the mount's Strength modifier) halves this damage.</p>
<p>Creatures in the mount's path or that threaten squares it passes through may make attacks of opportunity against either the barbarian or the mount, but not both.</p>
</Pair>
</Ability>
</>};
const _greater_ferocious_trample = {title: "Greater Ferocious Trample", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-ferocious-trample-ex" icon={["upgrade","mailed-fist"]}>
<Pair single id="greater-ferocious-trample-ex">Greater Ferocious Trample (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/ferocious_trample">ferocious trample</Link></Pair>
<Pair title="Ability">A barbarian's mount can affect creatures up to its own size with its <em>ferocious trample.</em> In addition, it can make an <Link to="/rule/overrun">overrun</Link> combat maneuver check as a <strong className="hl">free action</strong> against a creature that fails its Reflex save (or chooses not to save in order to take an attack of opportunity) against its trample.</Pair>
</Ability>
</>};
const _spirit_steed = {title: "Spirit Steed", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="spirit-steed-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="spirit-steed-su">Spirit Steed (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/ferocious_mount">ferocious mount</Link></Pair>
<Pair title="Passive Ability">While <em>raging</em> and mounted, the barbarian's mount gains DR/magic equal to 1/2 the barbarian's level. The mount's natural weapons count as magical for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _fierce_fortitude = {title: "Fierce Fortitude", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="fierce-fortitude-ex" icon={["armor-upgrade"]}>
<Pair single id="fierce-fortitude-ex">Fierce Fortitude (Ex)</Pair>
<Pair title="Prerequisites">Trained in <Link to="/skill/intimidate">Intimidate</Link></Pair>
<Pair title="Passive Ability">The character gains a +4 bonus on saving throws against diseases and poison.</Pair>
</Ability>
</>};
const _flesh_wound = {title: "Flesh Wound", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="flesh-wound-ex" icon={["armor-upgrade"]}>
<Pair single id="flesh-wound-ex">Flesh Wound (Ex)</Pair>
<Pair title="Prerequisites">10th-level barbarian</Pair>
<Pair title="Ability">Once per <em>rage,</em> the barbarian can try to avoid serious harm from an attack. The barbarian must make a Fortitude save with a DC equal to the damage that would be dealt by the attack. The barbarian's armor check penalty applies on this saving throw. If the save succeeds, the barbarian takes half damage from the attack and the damage is nonlethal.</Pair>
<Pair title="Special">The barbarian must elect to use this ability after the attack roll is made, but before the damage is rolled.</Pair>
</Ability>
</>};
const _flight_response = {title: "Flight Response", jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="flight-response" icon={["armor-upgrade"]}>
<Pair single id="flight-response">Flight Response</Pair>
<Pair title="Immediate Action">When a barbarian attempts a saving throw against a fear effect, she can enter a <em>rage</em> (as long as she would normally be able to enter <em>rage</em>). This consumes 3 rounds of the barbarian's daily allotment of <em>rage</em> rounds, but the barbarian can maintain the <em>rage</em> each round on her turn normally. Any benefits from the barbarian's <em>rage</em> apply immediately, so she gains her bonus on Will saves against the effect that required the initial saving throw.</Pair>
<Pair title="Special">Unlike most rage powers, this rage power's effects are useful only when the barbarian is not <em>raging,</em> so a skald can't grant this rage power to allies with raging song.</Pair>
</Ability>
</>};
const _fueled_by_vengeance = {title: "Fueled by Vengeance", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="fueled-by-vengeance" icon={["upgrade"]}>
<Pair single id="fueled-by-vengeance">Fueled by Vengeance</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/race/wereboar_kin">wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Ability">While <em>raging,</em> whenever you deal weapon damage to a creature that dealt damage to you since the end of your last turn, add 1 round to your remaining number of rounds of <em>rage</em> for the current day.</Pair>
<Pair title="Special">You can gain no more than 1 extra round of <em>rage</em> each round.</Pair>
</Ability>
</>};
const _furious_draw = {title: "Furious Draw", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="furious-draw" icon={["stairs-goal"]}>
<Pair single id="furious-draw">Furious Draw</Pair>
<Pair title="Ability">The barbarian is treated as having the <Link to="/feat/quick_draw">Quick Draw</Link> feat.</Pair>
</Ability>
</>};
const _furious_barrage = {title: "Furious Barrage", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="furious-barrage-ex" icon={["stairs-goal","bowman"]}>
<Pair single id="furious-barrage-ex">Furious Barrage (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian, <Link to="/ragepower/furious_draw">furious draw</Link></Pair>
<Pair title="Ability">The barbarian is treated as having the <Link to="/feat/rapid_shot">Rapid Shot</Link> feat, but only for the purpose of attacking with thrown weapons. She need not meet the feat's prerequisites.</Pair>
</Ability>
</>};
const _ghost_rager = {title: "Ghost Rager", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="ghost-rager-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="ghost-rager-su">Ghost Rager (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian deals normal damage to incorporeal creatures even when using nonmagical weapons. She also gains a morale bonus to touch AC equal to 2 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level. This can't raise her touch AC above her full AC.</Pair>
</Ability>
</>};
const _good_for_what_ails_you = {title: "Good for What Ails You", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="good-for-what-ails-you-ex" icon={["armor-upgrade"]}>
<Pair single id="good-for-what-ails-you-ex">Good for What Ails You (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian who takes a drink of alcohol may attempt a new saving throw against one of the following conditions that may be affecting her: blinded, confused, dazzled, deafened, exhausted, fatigued, frightened, nauseated, panicked, shaken, or sickened. If she succeeds at the save, the effect is suppressed for the duration of the <em>rage.</em></Pair>
<Pair title="Special">She also may attempt a new saving throw if poisoned; a successful save counts against those required for a cure, but a failed save has no ill effect.</Pair>
</Ability>
</>};
const _ground_breaker = {title: "Ground Breaker", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="ground-breaker-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="ground-breaker-ex">Ground Breaker (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Standard Action">The barbarian can attack the floor around her. This attack automatically hits and deals damage normally. If the barbarian manages to deal more damage than the floor's hardness, the space she occupies and all of the squares adjacent to her become <Link to="/rule/difficult_terrain">difficult terrain</Link>. Creatures in these squares, except the barbarian, must make a DC 15 Reflex save or be knocked <Link to="/rule/prone">prone</Link>.</Pair>
</Ability>
</>};
const _greater_ground_breaker = {title: "Greater Ground Breaker", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="greater-ground-breaker-ex" icon={["upgrade"]}>
<Pair single id="greater-ground-breaker-ex">Greater Ground Breaker (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/ground_breaker">ground breaker</Link></Pair>
<Pair title="Ability">When using the <em>ground breaker</em> rage power, the barbarian can extend the radius of the effect by 5 feet.</Pair>
<Pair title="Special">This rage power can be selected up to three times, and its effects stack.</Pair>
</Ability>
</>};
const _guarded_life = {title: "Guarded Life", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="guarded-life-ex" icon={["armor-upgrade"]}>
<Pair single id="guarded-life-ex">Guarded Life (Ex)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> if the barbarian is reduced below 0 hit points, 1 hit point of lethal damage per barbarian level is converted to nonlethal damage. If the barbarian is at negative hit points due to lethal damage, she immediately <Link to="/misc/stabilize">stabilizes</Link>.</Pair>
</Ability>
</>};
const _greater_guarded_life = {title: "Greater Guarded Life", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="greater-guarded-life-ex" icon={["upgrade"]}>
<Pair single id="greater-guarded-life-ex">Greater Guarded Life (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/guarded_life">guarded life</Link></Pair>
<Pair title="Passive Ability">When using the <em>guarded life</em> rage power, 1 additional hit point of lethal damage per barbarian level is converted to nonlethal damage.</Pair>
</Ability>
</>};
const _guarded_stance = {title: "Guarded Stance", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="guarded-stance-ex" icon={["armor-upgrade"]}>
<Pair single id="guarded-stance-ex">Guarded Stance (Ex)</Pair>
<Pair title="Move-Equivalent Action">The barbarian gains a dodge bonus to her Armor Class against melee attacks for a number of rounds equal to the barbarian's current Constitution modifier (minimum 1). This dodge bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> her barbarian level.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _hissing_rage = {title: "Hissing Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="hissing-rage-su" icon={["magic-palm"]}>
<Pair single id="hissing-rage-su">Hissing Rage (Su)</Pair>
<Pair title="Usage">Once per hour</Pair>
<Pair title="Standard Action"><p>Once per hour, the barbarian can spit venom at an adjacent enemy. She must make a touch attack to successfully spit on a foe in this way, but she can also apply this poison as a <strong className="hl">swift action</strong> when she hits with a bite attack.</p>
<AffInfo type="Bite-contact or injury" save="Fort 10 + 1/2 the barbarian's level + her Con modifier" freq="1/round for 6 rounds" eff={<>1d2 <Link to="/rule/str_damage">Str damage</Link></>} cure2c icon="p">Hissing Rage Poison</AffInfo>
</Pair>
</Ability>
</>};
const _lesser_hurling = {title: "Lesser Hurling", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-hurling-ex" icon={["smoking-finger"]}>
<Pair single id="lesser-hurling-ex">Lesser Hurling (Ex)</Pair>
<Pair title="Full-Round Action">While <em>raging,</em> the barbarian can lift and hurl an object up to one size category smaller than herself with both hands or two size categories smaller with one hand as an <Link to="/misc/improvised_weapon">improvised weapon</Link> with a range increment of 10 feet. This inflicts damage as a <Link to="/rule/falling_objects">falling object</Link> plus the barbarian's Strength bonus. This damage is halved if the object is not made of stone, metal, or similar material.</Pair>
<Pair title="Special">This is a ranged touch attack, and the target may attempt a Reflex save (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) for half damage. The barbarian may apply <Link to="/feat/power_attack">Power Attack</Link> to this attack as a one- or two-handed weapon, as appropriate.</Pair>
</Ability>
</>};
const _hurling = {title: "Hurling", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="hurling-ex" icon={["upgrade"]}>
<Pair single id="hurling-ex">Hurling (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/lesser_hurling">Lesser hurling</Link>, 8th-level barbarian</Pair>
<Pair title="Ability">As <em>lesser hurling,</em> but the barbarian can increase the range increment to 20 feet or increase the size of a hurled object by one size category.</Pair>
</Ability>
</>};
const _greater_hurling = {title: "Greater Hurling", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-hurling-ex" icon={["upgrade"]}>
<Pair single id="greater-hurling-ex">Greater Hurling (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/hurling">Hurling</Link>, 12th-level barbarian</Pair>
<Pair title="Ability">As <em>hurling,</em> but the barbarian can increase the range increment to 30 feet or increase the size of a hurled object by two size categories.</Pair>
</Ability>
</>};
const _hurling_charge = {title: "Hurling Charge", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="hurling-charge-ex" icon={["smoking-finger"]}>
<Pair single id="hurling-charge-ex">Hurling Charge (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/lesser_hurling">Lesser hurling</Link>, 6th-level barbarian</Pair>
<Pair title="Ability">While <em>raging</em> and making a <Link to="/rule/charge">charge</Link> attack, the barbarian may draw and throw a <em>hurled</em> weapon during her charge, gaining the normal +2 attack roll bonus on the thrown weapon attack as well as on the melee attack at the end of the charge.</Pair>
<Pair title="Special">The barbarian must move at least 10 feet before using a thrown weapon and at least 10 additional feet before making a melee attack at the end of her charge. The barbarian must have a thrown weapon in hand or have one hand free at the beginning of her charge.</Pair>
</Ability>
</>};
const _impelling_disarm = {title: "Impelling Disarm", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="impelling-disarm-ex" icon={["mailed-fist","bowman"]}>
<Pair single id="impelling-disarm-ex">Impelling Disarm (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Ability"><p>The barbarian can make a <Link to="/rule/disarm">disarm</Link> attempt against a target in place of a melee attack. This attempt does not provoke attacks of opportunity.</p>
<p>If successful, the barbarian sends the target's weapon flying - either straight at the target, or spinning away to strike another foe up to 20 feet away. This ranged attack has a -4 penalty, as it is treated as <Link to="/rule/weapons">throwing a weapon that isn't designed to be thrown</Link>, even if the weapon disarmed is a thrown weapon.</p>
<p>The barbarian makes a ranged attack, which doesn't provoke attacks of opportunity, at either the target of his disarm maneuver or another creature within 20 feet. If the barbarian is aiming for the disarmed creature, the foe doesn't count as being in melee for determining any penalty on the ranged attack from throwing a ranged weapon into melee. If the ranged attack hits, the disarmed weapon deals damage as if the barbarian had thrown it. The barbarian can choose to aim the disarmed weapon at a square rather than at a foe.</p>
</Pair>
</Ability>
</>};
const _increased_damage_reduction = {title: "Increased Damage Reduction", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="increased-damage-reduction-ex" icon={["armor-upgrade"]}>
<Pair single id="increased-damage-reduction-ex">Increased Damage Reduction (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian</Pair>
<Pair title="Passive Ability">The barbarian's damage reduction increases by 1/-. This increase is always active while the barbarian is <em>raging.</em></Pair>
<Pair title="Special">A barbarian can select this rage power up to three times. Its effects stack.</Pair>
</Ability>
</>};
const _internal_fortitude = {title: "Internal Fortitude", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="internal-fortitude-ex" icon={["armor-upgrade"]}>
<Pair single id="internal-fortitude-ex">Internal Fortitude (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian is immune to the sickened and nauseated conditions.</Pair>
</Ability>
</>};
const _intimidating_glare = {title: "Intimidating Glare", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="intimidating-glare-ex" icon={["armor-downgrade"]}>
<Pair single id="intimidating-glare-ex">Intimidating Glare (Ex)</Pair>
<Pair title="Move-Equivalent Action">The barbarian can make an Intimidate check against one adjacent foe. If the barbarian successfully demoralizes her opponent, the foe is <Link to="/misc/shaken">shaken</Link> for 1d4 rounds + 1 round for every 5 points by which the barbarian's check exceeds the DC.</Pair>
</Ability>
</>};
const _battle_roar = {title: "Battle Roar", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="battle-roar-su" icon={["smoking-finger"]}>
<Pair single id="battle-roar-su">Battle Roar (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/intimidating_glare">intimidating glare</Link></Pair>
<Pair title="Ability">When the character successfully demoralizes an opponent using <em>intimidating glare,</em> he also deals 1d6 points of sonic damage to that opponent.</Pair>
</Ability>
</>};
const _terrifying_howl = {title: "Terrifying Howl", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="terrifying-howl-ex" icon={["armor-downgrade"]}>
<Pair single id="terrifying-howl-ex">Terrifying Howl (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/intimidating_glare">Intimidating glare</Link>, 8th-level barbarian</Pair>
<Pair title="Standard Action">The barbarian unleashes a terrifying howl. All <Link to="/misc/shaken">shaken</Link> enemies within 30 feet must make a Will save (DC equal to 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) or be <Link to="/misc/panicked">panicked</Link> for 1d4+1 rounds.</Pair>
<Pair title="Special">Once an enemy has made a save versus <em>terrifying howl</em> (successful or not), it is immune to this power for 24 hours.</Pair>
</Ability>
</>};
const _inured_to_the_dead = {title: "Inured to the Dead", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="inured-to-the-dead" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="inured-to-the-dead">Inured to the Dead</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Passive Ability">Once per <em>rage,</em> when the barbarian fails a saving throw against an effect created by an undead creature, she can reroll the saving throw. She must use the second result, even if it is worse. This does not require spending an action.</Pair>
</Ability>
</>};
const _knockback = {title: "Knockback", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="knockback-ex" icon={["mailed-fist"]}>
<Pair single id="knockback-ex">Knockback (Ex)</Pair>
<Pair title="Ability">Once per round, the barbarian can make a <Link to="/rule/bull_rush">bull rush</Link> attempt against one target in place of a melee attack. If successful, the target takes damage equal to the barbarian's Strength modifier and is moved back as normal. The barbarian does not need to move with the target if successful.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _knockdown = {title: "Knockdown", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="knockdown-ex" icon={["mailed-fist"]}>
<Pair single id="knockdown-ex">Knockdown (Ex)</Pair>
<Pair title="Ability">Once per <em>rage,</em> the barbarian can make a <Link to="/rule/trip">trip</Link> attack against one target in place of a melee attack. If successful, the target takes damage equal to the barbarian's Strength modifier and is knocked <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _linnorm_death_curse = {title: "Linnorm Death Curse", notBookmarkable: true, jsx: <><h2 id="ragepower-linnorm_death_curse-linnorm-death-curse">Linnorm Death Curse</h2>
<p>"Linnorm Death Curse" can refer to seven different rage powers.</p>
<ol>
<li><Link to="/ragepower/cairn_linnorm_death_curse">Cairn Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/crag_linnorm_death_curse">Crag Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/fjord_linnorm_death_curse">Fjord Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/ice_linnorm_death_curse">Ice Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/taiga_linnorm_death_curse">Taiga Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/tarn_linnorm_death_curse">Tarn Linnorm Death Curse</Link></li>
<li><Link to="/ragepower/tor_linnorm_death_curse">Tor Linnorm Death Curse</Link></li>
</ol>
</>};
const _cairn_linnorm_death_curse = {title: "Cairn Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="cairn-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="cairn-linnorm-death-curse-su">Cairn Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/cairn_linnorm">cairn linnorm</Link>. The character's melee attacks deal an additional 1 point of negative energy damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of decay</em> (Will negates)." prereq="8th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target takes 1 point of <Link to="/rule/con_damage">Con damage</Link> per day and <Link to="/rule/age">ages</Link> at a rate of 1 year per day (eventually incurring all of the penalties of old age but none of the bonuses)</>} icon="c">Curse of Decay</AffInfo>
</Pair>
</Ability>
</>};
const _crag_linnorm_death_curse = {title: "Crag Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="crag-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="crag-linnorm-death-curse-su">Crag Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/crag_linnorm">crag linnorm</Link>. The character's melee attacks deal an additional 1 point of fire damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of fire</em> (Will negates)." prereq="4th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to fire</>} icon="c">Curse of Fire</AffInfo>
</Pair>
</Ability>
</>};
const _fjord_linnorm_death_curse = {title: "Fjord Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="fjord-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="fjord-linnorm-death-curse-su">Fjord Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/fjord_linnorm">fjord linnorm</Link>. The character's melee attacks deal an additional 1 point of cold damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of drowning</em> (Will negates)." prereq="4th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target is unable to breathe water (even with magic), can hold its breath only half as long as normal, and is <Link to="/misc/sickened">sickened</Link> whenever it holds its breath</>} icon="c">Curse of Drowning</AffInfo>
</Pair>
</Ability>
</>};
const _ice_linnorm_death_curse = {title: "Ice Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="ice-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="ice-linnorm-death-curse-su">Ice Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of an <Link to="/monster/ice_linnorm">ice linnorm</Link>. The character's melee attacks deal an additional 1 point of cold damage. If the character is knocked unconscious or killed, the attacker suffers the <em>curse of frost.</em>" prereq="4th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to cold</>} icon="c">Curse of Frost</AffInfo>
</Pair>
</Ability>
</>};
const _taiga_linnorm_death_curse = {title: "Taiga Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="taiga-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="taiga-linnorm-death-curse-su">Taiga Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/taiga_linnorm">taiga linnorm</Link>. The character's melee attacks deal an additional 1 point of electricity damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of electricity</em> (Will negates)." prereq="4th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to electricity</>} icon="c">Curse of Electricity</AffInfo>
</Pair>
</Ability>
</>};
const _tarn_linnorm_death_curse = {title: "Tarn Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="tarn-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="tarn-linnorm-death-curse-su">Tarn Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/tarn_linnorm">tarn linnorm</Link>. The character's melee attacks deal an additional 1 point of acid damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of death</em> (Will negates)." prereq="4th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff="Target is no longer affected by healing spells and can't heal damage naturally by resting" icon="c">Curse of Death</AffInfo>
</Pair>
</Ability>
</>};
const _tor_linnorm_death_curse = {title: "Tor Linnorm Death Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="tor-linnorm-death-curse-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="tor-linnorm-death-curse-su">Tor Linnorm Death Curse (Su)</Pair>
<Pair title="Ability"><p>The character channels the power of a <Link to="/monster/tor_linnorm">tor linnorm</Link>. The character's melee attacks deal an additional 1 point of fire damage. If the character is knocked unconscious or killed by an attack or spell, the attacker suffers the <em>curse of boiling blood</em> (Will negates)." prereq="8th-level barbarian"</p>
<AffInfo type="Curse" save="Will 10 + 1/2 the character's level + their Charisma modifier" eff={<>Target gains <Link to="/umr/vulnerability">vulnerability</Link> to fire and is permanently <Link to="/misc/staggered">staggered</Link> from the pain of its boiling blood (this is a pain effect)</>} icon="c">Curse of Boiling Blood</AffInfo>
</Pair>
</Ability>
</>};
const _liquid_courage = {title: "Liquid Courage", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="liquid-courage-ex" icon={["armor-upgrade"]}>
<Pair single id="liquid-courage-ex">Liquid Courage (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian increases her morale bonus on saving throws against mind-affecting effects by +1 for each alcoholic drink she consumes during her <em>rage,</em> to a maximum of +1 increase per four barbarian levels.</Pair>
</Ability>
</>};
const _lizard_stride = {title: "Lizard Stride", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="lizard-stride-su" icon={["magic-swirl"]}>
<Pair single id="lizard-stride-su">Lizard Stride (Su)</Pair>
<Pair title="Ability">When the barbarian makes a <Link to="/rule/charge">charge</Link> or <Link to="/rule/run">run</Link> action while <em>raging,</em> she can move across the surface of water without sinking. She sinks immediately if she ends her turn standing on water.</Pair>
</Ability>
</>};
const _low_light_vision = {title: "Low-Light Vision", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="low-light-vision-ex" icon={["stairs-goal"]}>
<Pair single id="low-light-vision-ex">Low-Light Vision (Ex)</Pair>
<Pair title="Ability">The barbarian's senses sharpen and she gains low-light vision while <em>raging.</em></Pair>
</Ability>
</>};
const _night_vision = {title: "Night Vision", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="night-vision-ex" icon={["stairs-goal"]}>
<Pair single id="night-vision-ex">Night Vision (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/low_light_vision">Low-light vision</Link> rage power or a low-light vision racial trait</Pair>
<Pair title="Ability">The barbarian's senses grow incredibly sharp while <em>raging</em> and she gains darkvision 60 feet.</Pair>
</Ability>
</>};
const _master_of_the_deep = {title: "Master of the Deep", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="master-of-the-deep-su" icon={["magic-swirl"]}>
<Pair single id="master-of-the-deep-su" flavor="The barbarian commands an aquatic creature to do her bidding.">Master of the Deep (Su)</Pair>
<Pair title="Prerequisites">8th-level barbarian</Pair>
<Pair title="Standard Action">The barbarian selects a creature with the aquatic type within 30 feet and gives a terse command from those listed in the <Link to="/spell/command">command</Link> spell. Alternatively, if the creature has an Intelligence of 1 or 2, the barbarian may instead command the creature to attack the closest creature to it. The creature must succeed at a Will save (DC equal to 10 + half the barbarian's level + her Strength modifier) or obey the command to the best of its ability on its next turn.</Pair>
<Pair title="Special">Once a creature has attempted a saving throw against master of the deep (successful or not), it is immune to this power for 24 hours. This ability is a mind-affecting effect, but it is not language dependent; the creature need not understand the barbarian giving the command.</Pair>
</Ability>
</>};
const _mighty_swing = {title: "Mighty Swing", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="mighty-swing-ex" icon={["upgrade"]}>
<Pair single id="mighty-swing-ex">Mighty Swing (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Immediate Action">The barbarian automatically confirms a critical hit. This power can be used once a critical threat has been determined.</Pair>
<Pair title="Special">This power can only be used once per <em>rage.</em></Pair>
</Ability>
</>};
const _moment_of_clarity = {title: "Moment of Clarity", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="moment-of-clarity-ex" icon={["stairs-goal"]}>
<Pair single id="moment-of-clarity-ex">Moment of Clarity (Ex)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Swift Action">The barbarian does not gain any benefits or take any of the penalties from <em>rage</em> for 1 round. This includes the penalty to Armor Class and the restriction on what actions can be performed. This round still counts against her total number of rounds of <em>rage</em> per day.</Pair>
</Ability>
</>};
const _perfect_clarity = {title: "Perfect Clarity", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="perfect-clarity-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="perfect-clarity-ex">Perfect Clarity (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/moment_of_clarity">Moment of clarity</Link></Pair>
<Pair title="Ability">While using her <em>moment of clarity</em> rage power, the barbarian can roll twice for any miss chance or Will saving throws to disbelieve illusions, taking the better result.</Pair>
</Ability>
</>};
const _ultimate_clarity = {title: "Ultimate Clarity", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="ultimate-clarity-su" icon={["stairs-goal"]}>
<Pair single id="ultimate-clarity-su">Ultimate Clarity (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/moment_of_clarity">moment of clarity</Link>, <Link to="/ragepower/perfect_clarity">perfect clarity</Link></Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Ability">The character can refine her senses, seeing through normal and magical darkness (including from magical effects such as <Link to="/spell/blur">blur</Link> and <Link to="/spell/displacement">displacement</Link>), <Link to="/spell/invisibility">invisibility</Link>, and illusions; she can also discern the exact locations of creatures with <Link to="/rule/concealment">concealment</Link>. This lasts for 1 round.</Pair>
<Pair title="Special">The character does not need to be using <em>moment of clarity</em> to use this rage power.</Pair>
</Ability>
</>};
const _overbearing_advance = {title: "Overbearing Advance", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="overbearing-advance-ex" icon={["upgrade"]}>
<Pair single id="overbearing-advance-ex">Overbearing Advance (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian inflicts damage equal to her Strength bonus whenever she succeeds at an <Link to="/rule/overrun">overrun</Link> combat maneuver.</Pair>
</Ability>
</>};
const _overbearing_onslaught = {title: "Overbearing Onslaught", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="overbearing-onslaught-ex" icon={["upgrade"]}>
<Pair single id="overbearing-onslaught-ex">Overbearing Onslaught (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/overbearing_advance">Overbearing advance</Link>, 6th-level barbarian</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian may <Link to="/rule/overrun">overrun</Link> more than one target per round, with a -2 penalty on her CMB for each overrun check after the first.</Pair>
</Ability>
</>};
const _no_escape = {title: "No Escape", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="no-escape-ex" icon={["stairs-goal"]}>
<Pair single id="no-escape-ex">No Escape (Ex)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Immediate Action">When an adjacent foe uses a <Link to="/rule/withdraw">withdraw</Link> action to move away from her, the barbarian can move up to double her normal speed. She must end her movement adjacent to the enemy that used the withdraw action. The barbarian provokes attacks of opportunity as normal during this movement.</Pair>
</Ability>
</>};
const _pack_rage = {title: "Pack Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="pack-rage-ex" icon={["stairs-goal"]}>
<Pair single id="pack-rage-ex">Pack Rage (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Ability">When a barbarian with this rage power enters a <em>rage,</em> any barbarian within 30 feet who also has this rage power can enter a <em>rage.</em> A barbarian that enters a <em>rage</em> outside of her turn spends 1 round of <em>rage</em> immediately and then spends another round of <em>rage</em> to maintain her <em>rage</em> at the beginning of her next turn.</Pair>
</Ability>
</>};
const _powerful_blow = {title: "Powerful Blow", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="powerful-blow-ex" icon={["upgrade"]}>
<Pair single id="powerful-blow-ex">Powerful Blow (Ex)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Swift Action">The barbarian gains a bonus on a single damage roll. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level. This power is used before the roll to hit is made.</Pair>
</Ability>
</>};
const _bleeding_blow = {title: "Bleeding Blow", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="bleeding-blow-ex" icon={["upgrade"]}>
<Pair single id="bleeding-blow-ex">Bleeding Blow (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/powerful_blow">powerful blow</Link></Pair>
<Pair title="Passive Ability">When she uses her <em>powerful blow</em> rage power, the barbarian also deals <Link to="/rule/bleed">bleed</Link> damage equal to her bonus damage with the <em>powerful blow.</em> This bleed damage bypasses damage reduction.</Pair>
</Ability>
</>};
const _crippling_blow = {title: "Crippling Blow", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="crippling-blow-ex" icon={["upgrade"]}>
<Pair single id="crippling-blow-ex">Crippling Blow (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/powerful_blow">powerful blow</Link></Pair>
<Pair title="Ability">When using her <em>powerful blow</em> rage power, the barbarian can forgo the normal bonus to damage (including any bleed damage granted by the <Link to="/ragepower/bleeding_blow">bleeding blow</Link> rage power or similar boosts to the damage of the <em>powerful blow</em> rage power) and instead deals 1 point of <Link to="/rule/ability_damage">ability damage</Link> to the target's Strength or Dexterity score for every four class levels the barbarian has attained. The target can attempt a Fortitude saving throw (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) to halve this ability damage.</Pair>
</Ability>
</>};
const _quick_reflexes = {title: "Quick Reflexes", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="quick-reflexes-ex" icon={["mailed-fist"]}>
<Pair single id="quick-reflexes-ex">Quick Reflexes (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can make one additional attack of opportunity per round.</Pair>
</Ability>
</>};
const _raging_climber = {title: "Raging Climber", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="raging-climber-ex" icon={["upgrade"]}>
<Pair single id="raging-climber-ex">Raging Climber (Ex)</Pair>
<Pair title="Passive Ability">When <em>raging,</em> the barbarian adds her level as an enhancement bonus on all <Link to="/skill/climb">Climb</Link> skill checks.</Pair>
</Ability>
</>};
const _bestial_climber = {title: "Bestial Climber", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="bestial-climber-ex" icon={["stairs-goal"]}>
<Pair single id="bestial-climber-ex">Bestial Climber (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/raging_climber">raging climber</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains a natural climb speed equal to her land speed.</Pair>
</Ability>
</>};
const _raging_flyer = {title: "Raging Flyer", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="raging-flyer-ex" icon={["upgrade"]}>
<Pair single id="raging-flyer-ex">Raging Flyer (Ex)</Pair>
<Pair title="Passive Ability">When <em>raging,</em> the barbarian adds her level as an enhancement bonus to <Link to="/skill/fly">Fly</Link> checks.</Pair>
</Ability>
</>};
const _bestial_flyer = {title: "Bestial Flyer", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="bestial-flyer-ex" icon={["upgrade"]}>
<Pair single id="bestial-flyer-ex">Bestial Flyer (Ex)</Pair>
<Pair title="Prerequisites">A fly speed (before <em>raging,</em>) <Link to="/ragepower/raging_flyer">raging flyer</Link>, 6th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's fly speed increases by 10 feet and her maneuverability improves by one category.</Pair>
</Ability>
</>};
const _raging_leaper = {title: "Raging Leaper", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="raging-leaper-ex" icon={["upgrade"]}>
<Pair single id="raging-leaper-ex">Raging Leaper (Ex)</Pair>
<Pair title="Passive Ability">When <em>raging,</em> the barbarian adds her level as an enhancement bonus on all <Link to="/skill/acrobatics">Acrobatics</Link> skill checks made to jump. When making a jump in this way, the barbarian is always considered to have a running start.</Pair>
</Ability>
</>};
const _bestial_leaper = {title: "Bestial Leaper", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="bestial-leaper-ex" icon={["stairs-goal"]}>
<Pair single id="bestial-leaper-ex">Bestial Leaper (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/raging_leaper">raging leaper</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can take a <strong className="hl">move action</strong> to move and can take her normal <strong className="hl">standard action</strong> at any point during the move.</Pair>
</Ability>
</>};
const _raging_flier = {title: "Raging Flier", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="raging-flier-su" icon={["stairs-goal"]}>
<Pair single id="raging-flier-su">Raging Flier (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/raging_leaper">raging leaper</Link></Pair>
<Pair title="Move-Equivalent Action">Once per <em>rage,</em> the character can fly up to her base speed. If she uses the <Link to="/rule/charge">charge</Link> action, she can use this flight as part of her movement during the charge.</Pair>
</Ability>
</>};
const _raging_grappler = {title: "Raging Grappler", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="raging-grappler-ex" icon={["mailed-fist"]}>
<Pair single id="raging-grappler-ex">Raging Grappler (Ex)</Pair>
<Pair title="Ability"><p>While <em>raging,</em> the barbarian grapples her foes with the power and viciousness of a river crocodile. As long as she is <em>raging,</em> whenever the barbarian succeeds at a check to start a <Link to="/rule/grapple">grapple</Link>, she can choose to deal damage as if she had also succeeded at a check to maintain the grapple.</p>
<p>In addition, while she is <em>raging,</em> whenever the barbarian succeeds at a combat maneuver check to maintain a grapple, she can choose to give herself, the target of her grapple, or both the <Link to="/rule/prone">prone</Link> condition as a <strong className="hl">free action</strong> while continuing to maintain the grapple.</p>
</Pair>
</Ability>
</>};
const _raging_swimmer = {title: "Raging Swimmer", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="raging-swimmer-ex" icon={["upgrade"]}>
<Pair single id="raging-swimmer-ex">Raging Swimmer (Ex)</Pair>
<Pair title="Passive Ability">When <em>raging,</em> the barbarian adds her level as an enhancement bonus on all <Link to="/skill/swim">Swim</Link> skill checks.</Pair>
</Ability>
</>};
const _bestial_swimmer = {title: "Bestial Swimmer", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="bestial-swimmer-ex" icon={["stairs-goal"]}>
<Pair single id="bestial-swimmer-ex">Bestial Swimmer (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/raging_swimmer">raging swimmer</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains a natural swim speed equal to her normal land speed.</Pair>
</Ability>
</>};
const _raging_whirlwind = {title: "Raging Whirlwind", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="raging-whirlwind-su" icon={["armor-downgrade"]}>
<Pair single id="raging-whirlwind-su">Raging Whirlwind (Su)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Immediate Action">The barbarian can create a whirlwind with a powerful spinning move after she confirms a critical hit with a melee attack. The whirlwind circles the target of her melee attack, lifting it in the air slightly until the end of the barbarian's turn. The creature can attempt a Fortitude save (DC = 10 + half the barbarian's level + the barbarian's Constitution modifier) to negate this effect. If it fails the save, the target loses its Dexterity modifier to AC for the rest of the barbarian's turn and lands <Link to="/rule/prone">prone</Link> on the ground at the end of her turn.</Pair>
<Pair title="Special">Raging whirlwind has no effect on flying creatures.</Pair>
</Ability>
</>};
const _reckless_abandon = {title: "Reckless Abandon", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="reckless-abandon-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="reckless-abandon-ex">Reckless Abandon (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can take a penalty to AC to gain a bonus on attack rolls. The penalty and bonus are both equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _inspire_ferocity = {title: "Inspire Ferocity", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="inspire-ferocity-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="inspire-ferocity-ex">Inspire Ferocity (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/reckless_abandon">Reckless abandon</Link></Pair>
<Pair title="Move-Equivalent Action">While <em>raging,</em> the barbarian can impart her <em>reckless abandon</em> modifier to all willing allies within 30 feet for a number of rounds equal to her Charisma modifier (minimum 1).</Pair>
</Ability>
</>};
const _renewed_vigor = {title: "Renewed Vigor", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="renewed-vigor-ex" icon={["remedy"]}>
<Pair single id="renewed-vigor-ex">Renewed Vigor (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Usage">Once per day</Pair>
<Pair title="Standard Action">The barbarian heals 1d8 points of damage + her Constitution modifier. For every four levels the barbarian has attained above 4th, this amount of damage healed increases by 1d8, to a maximum of 5d8 at 20th level.</Pair>
<Pair title="Special">This power can be used only while <em>raging.</em></Pair>
</Ability>
</>};
const _regenerative_vigor = {title: "Regenerative Vigor", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="regenerative-vigor-ex" icon={["remedy"]}>
<Pair single id="regenerative-vigor-ex">Regenerative Vigor (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/renewed_vigor">renewed vigor</Link></Pair>
<Pair title="Passive Ability">After using her <em>renewed vigor</em> rage power until her current <em>rage</em> ends, the barbarian gains <Link to="/umr/fast_healing">fast healing</Link> equal to <Link to="/misc/one_sixth">one-sixth</Link> of her barbarian level. She regains hit points from <em>fast healing</em> at the start of each of her turns.</Pair>
</Ability>
</>};
const _renewed_vitality = {title: "Renewed Vitality", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="renewed-vitality-ex" icon={["upgrade"]}>
<Pair single id="renewed-vitality-ex">Renewed Vitality (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian, <Link to="/ragepower/renewed_vigor">renewed vigor</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian ignores the effect of 1 point of ability penalty or damage per two barbarian levels she has (maximum 10).</Pair>
<Pair title="Ability">Once per day, when a barbarian with ability penalties or damage ends her <em>rage,</em> she can reroll a saving throw, if any, against an effect that imposed an ability penalty or dealt her ability damage. If successful, she removes an amount of ability penalty or damage equal to the amount she can ignore while <em>raging.</em></Pair>
</Ability>
</>};
const _renewed_life = {title: "Renewed Life", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="renewed-life-ex" icon={["upgrade"]}>
<Pair single id="renewed-life-ex">Renewed Life (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/renewed_vitality">renewed vitality</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian ignores the effect of one temporary <Link to="/rule/negative_level">negative level</Link> per four barbarian levels she has (maximum 5).</Pair>
<Pair title="Ability">Once per day, when a barbarian with temporary negative levels ends her <em>rage,</em> she can attempt saving throws to remove a number of negative levels equal to the number of levels she could ignore while <em>raging.</em></Pair>
</Ability>
</>};
const _roaring_drunk = {title: "Roaring Drunk", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="roaring-drunk-ex" icon={["upgrade"]}>
<Pair single id="roaring-drunk-ex">Roaring Drunk (Ex)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +1 morale bonus on Intimidate checks and to the save DC of any fear effects she creates for each alcoholic drink she has consumed during her <em>rage,</em> to a maximum of +1 per four barbarian levels.</Pair>
</Ability>
</>};
const _rolling_dodge = {title: "Rolling Dodge", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="rolling-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="rolling-dodge-ex">Rolling Dodge (Ex)</Pair>
<Pair title="Move-Equivalent Action">The barbarian gains a dodge bonus to her Armor Class against ranged attacks for a number of rounds equal to the barbarian's current Constitution modifier (minimum 1). This bonus is equal to 1 + <Link to="/misc/one_sixth">one-sixth</Link> of her barbarian level.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _reflexive_dodge = {title: "Reflexive Dodge", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="reflexive-dodge-ex" icon={["armor-upgrade"]}>
<Pair single id="reflexive-dodge-ex">Reflexive Dodge (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/rolling_dodge">rolling dodge</Link></Pair>
<Pair title="Passive Ability">While using her <em>rolling dodge</em> rage power, the barbarian may apply her dodge bonus to AC as a bonus on Reflex saving throws.</Pair>
</Ability>
</>};
const _roused_anger = {title: "Roused Anger", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="roused-anger-ex" icon={["stairs-goal"]}>
<Pair single id="roused-anger-ex">Roused Anger (Ex)</Pair>
<Pair title="Ability">The barbarian may enter a <em>rage</em> even if fatigued. While <em>raging</em> after using this ability, the barbarian is immune to the <Link to="/misc/fatigued">fatigued</Link> condition. Once this <em>rage</em> ends, the barbarian is <Link to="/misc/exhausted">exhausted</Link> for 10 minutes per round spent <em>raging.</em></Pair>
</Ability>
</>};
const _savage_dirty_trick = {title: "Savage Dirty Trick", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance</Link></p>
<Ability id="savage-dirty-trick-ex" icon={["mailed-fist","armor-downgrade"]}>
<Pair single id="savage-dirty-trick-ex">Savage Dirty Trick (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian</Pair>
<Pair title="Usage">Once per opponent per <em>rage</em></Pair>
<Pair title="Ability"><p>Once per round while <em>raging,</em> the barbarian can attempt a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver in place of a melee attack. If successful, the target takes an amount of damage equal to the barbarian's Strength modifier and must succeed at a Fortitude save (DC 10 + 1/2 the barbarian's level + the barbarian's Strength modifier) or take an additional penalty from the dirty trick based on the type of dirty trick performed and the following table.</p>
<ScrollContainer id="ragepower-savage_dirty_trick--table-0"><table>
<thead>
<tr>
<th>Initial Penalty</th>
<th>Additional Penalty</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/misc/blinded">Blinded<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/staggered">Staggered<IonRippleEffect /></Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/dazzled">Dazzled<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/dazed">Dazed<IonRippleEffect /></Link></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/deafened">Deafened<IonRippleEffect /></Link></td>
<td>Staggered</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/rule/entangled">Entangled<IonRippleEffect /></Link></td>
<td>Anchored in place and unable to move from that square</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/misc/sickened">Sickened<IonRippleEffect /></Link></td>
<td className="ion-activatable"><Link to="/misc/nauseated">Nauseated<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
<p>On a failed Fortitude save, the opponent takes this additional penalty on top of the dirty trick's original effect. The additional penalty lasts for 1 round (though the initial penalty lasts as long as normal), and can be removed with a move action. The initial effect cannot be removed via mundane means until the additional penalty is removed (though magical effects like <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> work). Removing the initial effect also removes the additional penalty. If the target is immune to the initial penalty, then it is unaffected by the additional penalty.</p>
<p>For example, a barbarian using this rage power attempts a dirty trick combat maneuver against her opponent to blind him. She succeeds and her opponent fails his Fortitude save, so he becomes staggered as well as blinded. Regardless of whether he had succeeded at his saving throw, the opponent still takes an amount of damage from the barbarian's combat maneuver equal to the barbarian's Strength modifier (unless he has damage reduction or would otherwise be able to prevent this damage). Likewise, if her opponent were immune to blinding effects, he would not suffer from the blindness or the staggering effect, regardless of his saving throw.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _savage_hurl = {title: "Savage Hurl", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="savage-hurl-ex" icon={["upgrade"]}>
<Pair single id="savage-hurl-ex">Savage Hurl (Ex)</Pair>
<Pair title="Passive Ability">The barbarian gains a +1 bonus on ranged attack rolls with thrown weapons that add her Dexterity bonus to the attack roll.</Pair>
<Pair title="At 4th Level">This bonus increases to +2 if the barbarian's Strength modifier is at least +4.</Pair>
<Pair title="At 8th Level">It increases to +3 if her Strength modifier is at least +6.</Pair>
<Pair title="At 12th Level">It becomes +4 at if her Strength modifier is at least +8.</Pair>
</Ability>
</>};
const _savage_intuition = {title: "Savage Intuition", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon</Link></p>
<Ability id="savage-intuition" icon={["stairs-goal"]}>
<Pair single id="savage-intuition" flavor="Your bestial senses allow you to sense danger and become enraged before you even have time to consciously react to danger.">Savage Intuition</Pair>
<Pair title="Prerequisites"><Link to="/race/wereboar_kin">Wereboar-kin</Link> or associated with wereboar-kin</Pair>
<Pair title="Ability">sWhen combat begins, if you have rounds of <em>rage</em> remaining, you may automatically enter a <em>rage</em> without using an action at the start of the first round of combat (or at the start of the surprise round, if there is one), even if you are not otherwise aware that combat has begun.</Pair>
</Ability>
</>};
const _scent = {title: "Scent", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="scent-ex" icon={["stairs-goal"]}>
<Pair single id="scent-ex">Scent (Ex)</Pair>
<Pair title="Ability">The barbarian gains the <Link to="/umr/scent">scent</Link> ability while <em>raging</em> and can use this ability to locate unseen foes.</Pair>
</Ability>
</>};
const _primal_scent = {title: "Primal Scent", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="primal-scent-ex" icon={["upgrade"]}>
<Pair single id="primal-scent-ex">Primal Scent (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/scent">scent</Link></Pair>
<Pair title="Passive Ability"><p>When using her <em>scent</em> rage power, the barbarian adds half her barbarian level on Survival checks made to track by scent and on Perception checks to pinpoint the location of creatures she cannot see.</p>
<p>If she pinpoints the location of a creature that has total concealment, she treats it as having <Link to="/rule/concealment">concealment</Link>.</p>
</Pair>
</Ability>
</>};
const _smasher = {title: "Smasher", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="smasher-ex" icon={["upgrade"]}>
<Pair single id="smasher-ex">Smasher (Ex)</Pair>
<Pair title="Ability">Once per <em>rage,</em> whenever the barbarian makes an attack against an unattended object or a <Link to="/rule/sunder">sunder</Link> combat maneuver, she can ignore the object's hardness. This ability must be used before the attack roll or sunder check is made.</Pair>
</Ability>
</>};
const _gearbreaker = {title: "Gearbreaker", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="gearbreaker-ex" icon={["upgrade"]}>
<Pair single id="gearbreaker-ex">Gearbreaker (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/smasher">Smasher</Link></Pair>
<Pair title="Ability">Once per round while <em>raging,</em> whenever the barbarian makes an attack against a construct, she can ignore an amount of that construct's hardness equal to her barbarian level. This ability must be used before the attack roll is made.</Pair>
<Pair title="Special">This power stacks with the <em>hard hitter</em> ability from the <Link to="/arc-barbarian/numerian_liberator">Numerian liberator</Link> archetype.</Pair>
</Ability>
</>};
const _spiritual_awareness = {title: "Spiritual Awareness", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="spiritual-awareness" icon={["armor-upgrade"]}>
<Pair single id="spiritual-awareness">Spiritual Awareness</Pair>
<Pair title="Prerequisites"><Link to="/ability/trap_sense">Trap sense</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's dodge bonus to AC from <em>trap sense</em> applies against attacks made by incorporeal creatures.</Pair>
</Ability>
</>};
const _spring_rage = {title: "Spring Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="spring-rage-su" icon={["upgrade"]}>
<Pair single id="spring-rage-su" flavor={<>The barbarian's <em>rage</em> rejuvenates her physically and spiritually.</>}>Spring Rage (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> she ignores penalties to her ability scores due to <Link to="/rule/aging">aging</Link>. She also ignores penalties from <Link to="/rule/negative_levels">negative levels</Link>, though she retains any negative levels she has until they are removed normally.</Pair>
<Pair title="Special">A barbarian can have only one season-themed rage power, choosing between spring, <Link to="/ragepower/summer_rage">summer</Link>, <Link to="/ragepower/autumn_rage">autumn</Link>, or <Link to="/ragepower/winter_rage">winter</Link> rage.</Pair>
</Ability>
</>};
const _staggering_drunk = {title: "Staggering Drunk", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="staggering-drunk-ex" icon={["armor-upgrade"]}>
<Pair single id="staggering-drunk-ex">Staggering Drunk (Ex)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> a barbarian gains a +1 dodge bonus to AC against attacks of opportunity for each alcoholic drink she has consumed during her <em>rage,</em> to a maximum of +1 per four barbarian levels.</Pair>
</Ability>
</>};
const _strength_surge = {title: "Strength Surge", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="strength-surge-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="strength-surge-ex">Strength Surge (Ex)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Immediate Action">The barbarian adds her barbarian level on one Strength check or combat maneuver check, or to her Combat Maneuver Defense when an opponent attempts a maneuver against her.</Pair>
</Ability>
</>};
const _suffocating_grip = {title: "Suffocating Grip", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="suffocating-grip-ex" icon={["armor-downgrade"]}>
<Pair single id="suffocating-grip-ex">Suffocating Grip (Ex)</Pair>
<Pair title="Ability">While <em>raging,</em> when the barbarian successfully maintains a grapple, she can choke her opponent instead of dealing damage to, moving, pinning, or tying up her opponent. The grappled opponent cannot speak or breathe and must <Link to="/misc/hold_its_breath">hold its breath</Link> or begin <Link to="/rule/suffocation">suffocating</Link>.</Pair>
<Pair title="Special">The grappled opponent can take a breath during any round in which the barbarian does not maintain the grapple. Creatures that do not breathe are not affected by this ability.</Pair>
</Ability>
</>};
const _greater_suffocating_grip = {title: "Greater Suffocating Grip", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link></p>
<Ability id="greater-suffocating-grip-ex" icon={["armor-downgrade"]}>
<Pair single id="greater-suffocating-grip-ex">Greater Suffocating Grip (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/suffocating_grip">suffocating grip</Link></Pair>
<Pair title="Ability">When the barbarian is using the <em>suffocating grip</em> rage power, the grappled creature cannot hold its breath and immediately begins <Link to="/rule/suffocation">suffocating</Link>.</Pair>
</Ability>
</>};
const _summer_rage = {title: "Summer Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="summer-rage-su" icon={["armor-downgrade"]}>
<Pair single id="summer-rage-su" flavor="The barbarian channels the heat of late summer, making the air around her hot and oppressive.">Summer Rage (Su)</Pair>
<Pair title="Ability">A creature within the barbarian's reach becomes <Link to="/misc/fatigued">fatigued</Link> as long as it remains within the barbarian's reach unless it succeeds at a Fortitude save (DC = 10 + half the barbarian's level + her Constitution modifier) to become immune for 24 hours.</Pair>
<Pair title="Special">A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, summer, <Link to="/ragepower/autumn_rage">autumn</Link>, or <Link to="/ragepower/winter_rage">winter</Link> rage.</Pair>
</Ability>
</>};
const _superstition = {title: "Superstition", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="superstition-ex" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="superstition-ex">Superstition (Ex)</Pair>
<Pair title="Passive Ability">The barbarian gains a morale bonus on saving throws made to resist spells, supernatural abilities, and spell-like abilities. This bonus is equal to 2 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
<Pair title="Special">While <em>raging,</em> the barbarian cannot be a willing target of any spell and must make saving throws to resist all spells, even those cast by allies.</Pair>
</Ability>
</>};
const _disruptive = {title: "Disruptive", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="disruptive" icon={["stairs-goal"]}>
<Pair single id="disruptive">Disruptive</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/superstition">superstition</Link></Pair>
<Pair title="Ability">When <em>raging,</em> the barbarian gains <Link to="/feat/disruptive">Disruptive</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _eater_of_magic = {title: "Eater of Magic", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="eater-of-magic-su" icon={["armor-upgrade"]}>
<Pair single id="eater-of-magic-su">Eater of Magic (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/superstition">superstition</Link></Pair>
<Pair title="Ability">Once per <em>rage,</em> when a barbarian fails a saving throw against a spell, supernatural ability, or spell-like ability, she can reroll the saving throw against the effect (this is not an action). If she succeeds at the second saving throw, she is not affected by the spell, supernatural ability, or spell-like ability and gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the effect's caster level (in the case of spell or spell-like abilities) or the CR of the effect's creator (in the case of supernatural abilities). These temporary hit points last until damage is applied to them or 1 minute, whichever occurs first.</Pair>
</Ability>
</>};
const _spellbreaker = {title: "Spellbreaker", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="spellbreaker" icon={["stairs-goal"]}>
<Pair single id="spellbreaker">Spellbreaker</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/disruptive">disruptive</Link></Pair>
<Pair title="Ability">When <em>raging,</em> the barbarian gains <Link to="/feat/spellbreaker">Spellbreaker</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _witch_hunter = {title: "Witch Hunter", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="witch-hunter-ex" icon={["upgrade"]}>
<Pair single id="witch-hunter-ex">Witch Hunter (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/superstition">Superstition</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a bonus on damage rolls against creatures possessing spells or spell-like abilities. This damage bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _spell_sunder = {title: "Spell Sunder", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="spell-sunder-su" icon={["magic-swirl"]}>
<Pair single id="spell-sunder-su">Spell Sunder (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/witch_hunter">witch hunter</Link></Pair>
<Pair title="Ability"><p>Once per <em>rage,</em> the barbarian can attempt to <Link to="/rule/sunder">sunder</Link> an ongoing spell effect by succeeding at a combat maneuver check.</p>
<p>For any effect other than one on a creature, the barbarian must make her combat maneuver check against a CMD of 15 plus the effect's caster level. To sunder an effect on a creature, the barbarian must succeed at a normal sunder combat maneuver against the creature's CMD + 5, ignoring any miss chance caused by a spell or spell-like ability.</p>
<p>If successful, the barbarian suppresses the effect for 1 round, or 2 rounds if she exceeded the CMD by 5 to 9. If she exceeds the CMD by 10 or more, the effect is dispelled.</p>
</Pair>
</Ability>
</>};
const _sunder_enchantment = {title: "Sunder Enchantment", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="sunder-enchantment-su" icon={["magic-swirl"]}>
<Pair single id="sunder-enchantment-su">Sunder Enchantment (Su)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/spell_sunder">spell sunder</Link></Pair>
<Pair title="Ability">While <em>raging,</em> whenever the barbarian succeeds at a <Link to="/rule/sunder">sunder</Link> combat maneuver on a magical item, that item's magical abilities are suppressed for 1 round, plus 1 round for every 5 points by which her combat maneuver check exceeded the target's CMD.</Pair>
</Ability>
</>};
const _surprise_accuracy = {title: "Surprise Accuracy", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="surprise-accuracy-ex" icon={["upgrade"]}>
<Pair single id="surprise-accuracy-ex">Surprise Accuracy (Ex)</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Swift Action">The barbarian gains a morale bonus on one attack roll equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level. This power must be used before the roll to hit is made.</Pair>
</Ability>
</>};
const _deadly_accuracy = {title: "Deadly Accuracy", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="deadly-accuracy-ex" icon={["upgrade"]}>
<Pair single id="deadly-accuracy-ex">Deadly Accuracy (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian, <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link></Pair>
<Pair title="Ability">If the barbarian scores a critical threat when using her <em>surprise accuracy</em> rage power, she applies double the surprise accuracy bonus when rolling to confirm the critical.</Pair>
</Ability>
</>};
const _lethal_accuracy = {title: "Lethal Accuracy", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="lethal-accuracy-ex" icon={["upgrade"]}>
<Pair single id="lethal-accuracy-ex">Lethal Accuracy (Ex)</Pair>
<Pair title="Prerequisites">16th-level barbarian, <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link>, <Link to="/ragepower/deadly_accuracy">deadly accuracy</Link></Pair>
<Pair title="Passive Ability">When using her <em>surprise accuracy</em> rage power, the barbarian's critical multiplier for damage increases by 1 (a &times;2 multiplier becomes &times;3, a 19-20/&times;2 multiplier becomes 19-20/&times;3, a &times;3 multiplier becomes &times;4, and a &times;4 multiplier becomes &times;5).</Pair>
</Ability>
</>};
const _sharpened_accuracy = {title: "Sharpened Accuracy", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="sharpened-accuracy-ex" icon={["upgrade"]}>
<Pair single id="sharpened-accuracy-ex">Sharpened Accuracy (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/surprise_accuracy">surprise accuracy</Link></Pair>
<Pair title="Passive Ability">When using her *surprise accuracy *rage power, the barbarian ignores the miss chance for <Link to="/rule/concealment">concealment</Link> and treats total concealment as concealment. She also ignores cover penalties except those from total cover.</Pair>
</Ability>
</>};
const _swift_foot = {title: "Swift Foot", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="swift-foot-ex" icon={["upgrade"]}>
<Pair single id="swift-foot-ex">Swift Foot (Ex)</Pair>
<Pair title="Passive Ability">The barbarian gains a 5-foot enhancement bonus to her speed. This increase is always active while the barbarian is <em>raging.</em></Pair>
<Pair title="Special">A barbarian can select this rage power up to three times. Its effects stack.</Pair>
</Ability>
</>};
const _sprint = {title: "Sprint", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="sprint-ex" icon={["stairs-goal"]}>
<Pair single id="sprint-ex">Sprint (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian, <Link to="/ragepower/swift_foot">swift foot</Link></Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Full-Round Action">The barbarian can move up to 6 times her speed or a single full-round <Link to="/rule/charge">charge</Link> action to move up to 3 times her speed.</Pair>
</Ability>
</>};
const _two_fanged_pounce = {title: "Two-Fanged Pounce", jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="two-fanged-pounce" icon={["stairs-goal"]}>
<Pair single id="two-fanged-pounce">Two-Fanged Pounce</Pair>
<Pair title="Ability">If the barbarian is wielding a pair of <Link to="/eq-weapon/dagger">daggers</Link>, <Link to="/eq-weapon/kukri">kukris</Link>, or <Link to="/eq-weapon/punching_dagger">punching daggers</Link>, she can attack once with each of the two weapons when she <Link to="/rule/charge">charges</Link>. If she does, she loses the bonus on attack rolls for charging and takes an additional -2 penalty to her AC, and she applies <Link to="/misc/precision_damage">precision damage</Link> or effects that occur on a hit only once, even if she hits with both attacks.</Pair>
</Ability>
</>};
const _unexpected_strike = {title: "Unexpected Strike", jsx: <><p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link></p>
<Ability id="unexpected-strike-ex" icon={["mailed-fist"]}>
<Pair single id="unexpected-strike-ex">Unexpected Strike (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian</Pair>
<Pair title="Usage">Once per <em>rage</em></Pair>
<Pair title="Ability">The barbarian can make an attack of opportunity against a foe that moves into any square threatened by the barbarian, regardless of whether or not that movement would normally provoke an attack of opportunity.</Pair>
</Ability>
</>};
const _unrestrained_rage = {title: "Unrestrained Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="unrestrained-rage" icon={["armor-upgrade"]}>
<Pair single id="unrestrained-rage">Unrestrained Rage</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian is immune to paralysis.</Pair>
<Pair title="Special">If the barbarian is targeted by an effect that would cause her to become <Link to="/rule/paralyzed">paralyzed</Link>, she can enter a <em>rage</em> as an <strong className="hl">immediate action</strong>, as long as she still has rounds of <em>rage</em> remaining.</Pair>
</Ability>
</>};
const _water_sense = {title: "Water Sense", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_river">People of the River</Link></p>
<Ability id="water-sense-ex" icon={["armor-downgrade","upgrade"]}>
<Pair single id="water-sense-ex">Water Sense (Ex)</Pair>
<Pair title="Ability">The barbarian's senses are no longer fooled by the rippling surface and confounding reflections seen in water that is being used as <Link to="/rule/cover">cover</Link> by her foes. While the barbarian is <em>raging</em> and on land, opponents in the water gain only partial cover from her attacks, instead of improved cover. In addition, while on land and targeting an opponent in water, she takes only a -1 penalty on attacks with ranged weapons (including thrown weapons) for every 5 feet of water they pass through (instead of the usual -2 penalty for every 5 feet of water).</Pair>
</Ability>
</>};
const _winter_rage = {title: "Winter Rage", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="winter-rage-su" icon={["tornado-discs"]}>
<Pair single id="winter-rage-su">Winter Rage (Su)</Pair>
<Pair title="Standard Action">The barbarian can bellow a 20-foot cone of frigid, snowy air. Until the beginning of the barbarian's next turn, creatures moving through the cone move at half speed.</Pair>
<Pair title="Special">A barbarian can have only one season-themed rage power, choosing between <Link to="/ragepower/spring_rage">spring</Link>, <Link to="/ragepower/summer_rage">summer</Link>, <Link to="/ragepower/autumn_rage">autumn</Link>, or winter rage.</Pair>
</Ability>
</>};
const _aryzuls_curse = {title: "Aryzul's Curse", jsx: <><p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power</Link></p>
<Ability id="aryzuls-curse-su" icon={["aura"]}>
<Pair single id="aryzuls-curse-su">Aryzul's Curse (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian or <Link to="/class/skald">skald</Link> with <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> or <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link>; or 6th-level <Link to="/class/unchained_barbarian">unchained barbarian</Link> with <Link to="/ragepower/elemental_stance">elemental stance</Link> (and must adopt that stance to use this power)</Pair>
<Pair title="Passive Ability">When <em>raging,</em> the barbarian emanates a 5-foot-radius aura of radioactivity. Each round that another creature begins its turn within this aura, it takes a cumulative -2 penalty to Strength (Fortitude negates, DC = 10 + 1/2 the barbarian's level + her Constitution modifier) for the duration of the <em>rage.</em> A creature's Strength penalty from this ability cannot exceed the barbarian's class level.</Pair>
<Pair title="At 12th Level">The barbarian can choose to create a 10-foot-radius aura of radioactivity when she begins her <em>rage.</em></Pair>
</Ability>
</>};
const _hshurhas_veil = {title: "Hshurha's Veil", jsx: <><p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power</Link></p>
<Ability id="hshurhas-veil-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="hshurhas-veil-su">Hshurha's Veil (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian or <Link to="/class/skald">skald</Link> with <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> or <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link>; or 6th-level <Link to="/class/unchained_barbarian">unchained barbarian</Link> with <Link to="/ragepower/elemental_stance">elemental stance</Link> (and must adopt that stance to use this power)</Pair>
<Pair title="Ability">When <em>raging,</em> the barbarian can use Stealth, and she gains a bonus equal to 1/2 her barbarian level on Stealth checks plus the benefits of <Link to="/rule/concealment">concealment</Link> against ranged attacks and attacks of opportunity.</Pair>
</Ability>
</>};
const _kelizandris_tide = {title: "Kelizandri's Tide", jsx: <><p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power</Link></p>
<Ability id="kelizandris-tide-su" icon={["mailed-fist"]}>
<Pair single id="kelizandris-tide-su">Kelizandri's Tide (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian or <Link to="/class/skald">skald</Link> with <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> or <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link>; or 6th-level <Link to="/class/unchained_barbarian">unchained barbarian</Link> with <Link to="/ragepower/elemental_stance">elemental stance</Link> (and must adopt that stance to use this power)</Pair>
<Pair title="Full-Round Action">The barbarian can attempt a single combat maneuver check against each creature within 10 feet of her. If her roll equals or exceeds a creature's CMD, she moves that creature 5 feet closer to her.</Pair>
<Pair title="Free Action">Once per day after attempting this maneuver, she can attack each adjacent creature as if using the <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> feat. If she has the Whirlwind Attack feat, she can also use it as a free action in this way one additional time per day.</Pair>
</Ability>
</>};
const _ymeris_pyre = {title: "Ymeri's Pyre", jsx: <><p><strong>Sources</strong> <Link to="/source/planes_of_power">Planes of Power</Link></p>
<Ability id="ymeris-pyre-su" icon={["armor-upgrade"]}>
<Pair single id="ymeris-pyre-su" flavor="The barbarian visibly burns with an inner flame that consumes all impurities affecting her.">Ymeri's Pyre (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian or <Link to="/class/skald">skald</Link> with <Link to="/ragepower/lesser_elemental_rage">lesser elemental rage</Link> or <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link>; or 6th-level <Link to="/class/unchained_barbarian">unchained barbarian</Link> with <Link to="/ragepower/elemental_stance">elemental stance</Link> (and must adopt that stance to use this power)</Pair>
<Pair title="Ability">Each round that the barbarian <em>rages</em> reduces the duration of negative spells and effects inflicted upon her as if 2 rounds had passed; this has no effect on the duration of such effects against other creatures.</Pair>
<Pair title="Ability">Once per day, the barbarian can expend 5 rounds of <em>rage</em> to attempt a new saving throw against each non-permanent effect currently affecting her. Each successful saving throw ends the related effect, and she can choose not to make a save against an effect.</Pair>
</Ability>
</>};
const _lesser_ancestor_totem = {title: "Lesser Ancestor Totem", addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="lesser-ancestor-totem-su" icon={["upgrade"]}>
<Pair single id="lesser-ancestor-totem-su">Lesser Ancestor Totem (Su)</Pair>
<Pair title="Passive Ability">When she enters a <em>rage,</em> the barbarian selects a skill of her choice, which must be one she can use while <em>raging,</em> such as Climb or Intimidate. While <em>raging,</em> she gains a +2 insight bonus to the chosen skill.</Pair>
</Ability>
</>};
const _ancestor_totem = {title: "Ancestor Totem", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="ancestor-totem-su" icon={["upgrade"]}>
<Pair single id="ancestor-totem-su">Ancestor Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/lesser_ancestor_totem">Lesser ancestor totem</Link>, 6th-level barbarian</Pair>
<Pair title="Passive Ability">The barbarian's insight bonus to her chosen skill increases to +4. The barbarian can now select any skill to receive this bonus, even a Charisma-, Dexterity-, or Intelligence-based skill or a skill that requires patience or concentration; if she selects such a skill, she can use it even while <em>raging.</em></Pair>
</Ability>
</>};
const _greater_ancestor_totem = {title: "Greater Ancestor Totem", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="greater-ancestor-totem-su" icon={["upgrade","rolling-dices"]}>
<Pair single id="greater-ancestor-totem-su">Greater Ancestor Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/ancestor_totem">Ancestor totem</Link>, 10th-level barbarian</Pair>
<Pair title="Passive Ability">The barbarian's insight bonus to her chosen skill increases to +6.</Pair>
<Pair title="Immediate Action">Once per <em>rage,</em> she can spend one round of <em>rage</em> to reroll a skill check in the chosen skill. She must take the result of the second roll, even if it is lower.</Pair>
</Ability>
</>};
const _lesser_atavism_totem = {title: "Lesser Atavism Totem", addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="lesser-atavism-totem-su" icon={["mailed-fist"]}>
<Pair single id="lesser-atavism-totem-su">Lesser Atavism Totem (Su)</Pair>
<Pair title="Ability">The barbarian gains a <Link to="/umr/bite_attack">bite attack</Link>; if she already has a bite attack, it deals damage as if the barbarian were one size larger.</Pair>
</Ability>
</>};
const _atavism_totem = {title: "Atavism Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="atavism-totem-su" icon={["stairs-goal"]}>
<Pair single id="atavism-totem-su">Atavism Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/lesser_atavism_totem">Lesser atavism totem</Link>, 6th-level barbarian</Pair>
<Pair title="Ability">The barbarian gains <Link to="/umr/ferocity">ferocity</Link>.</Pair>
</Ability>
</>};
const _greater_atavism_totem = {title: "Greater Atavism Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link></p>
<Ability id="greater-atavism-totem-su" icon={["stairs-goal","mailed-fist"]}>
<Pair single id="greater-atavism-totem-su">Greater Atavism Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/atavism_totem">Atavism totem</Link>, 10th-level barbarian</Pair>
<Pair title="Ability">The barbarian gains <Link to="/umr/trample">trample</Link>.</Pair>
</Ability>
</>};
const _lesser_beast_totem = {title: "Lesser Beast Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-beast-totem-su" icon={["mailed-fist"]}>
<Pair single id="lesser-beast-totem-su">Lesser Beast Totem (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are considered primary attacks and are made at the barbarian's full base attack bonus. The claws deal 1d6 points of slashing damage (1d4 if Small) plus the barbarian's Strength modifier.</Pair>
</Ability>
</>};
const _beast_totem = {title: "Beast Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="beast-totem-su" icon={["armor-upgrade"]}>
<Pair single id="beast-totem-su">Beast Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/lesser_beast_totem">Lesser beast totem</Link>, 6th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a natural armor bonus. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _greater_beast_totem = {title: "Greater Beast Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-beast-totem-su" icon={["mailed-fist","upgrade"]}>
<Pair single id="greater-beast-totem-su">Greater Beast Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/beast_totem">Beast totem</Link>, 10th-level barbarian</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains the <Link to="/umr/pounce">pounce</Link> special ability, allowing her to make a full attack at the end of a charge. In addition, the damage from her claws increases to 1d8 (1d6 if Small) and the claws deal &times;3 damage on a critical hit.</Pair>
</Ability>
</>};
const _lesser_celestial_totem = {title: "Lesser Celestial Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="lesser-celestial-totem-su" icon={["remedy","upgrade"]}>
<Pair single id="lesser-celestial-totem-su">Lesser Celestial Totem (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian benefits from increased magical healing. Whenever she is subject to a spell that cures hit point damage, she heals 1 additional point of damage per caster level. In the case of non-spell healing effects (such as <Link to="/ability/channel_energy">channeled energy</Link> or <Link to="/ability/lay_on_hands">lay on hands</Link>), she heals a number of additional points equal to the class level of the character performing the magical healing. This does not affect fast healing or regeneration.</Pair>
</Ability>
</>};
const _celestial_totem = {title: "Celestial Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="celestial-totem-su" icon={["magic-swirl"]}>
<Pair single id="celestial-totem-su">Celestial Totem (Su)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/lesser_celestial_totem">lesser celestial totem</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian shines with a righteous light. This effect bestows upon the barbarian a halo of gleaming light that shines as if it were <Link to="/spell/daylight">daylight</Link> and triggers an <Link to="/spell/invisibility_purge">invisibility purge</Link> effect in the barbarian's square and each adjacent square. The <em>invisibility purge</em> only affects nongood creatures.</Pair>
</Ability>
</>};
const _greater_celestial_totem = {title: "Greater Celestial Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity</Link></p>
<Ability id="greater-celestial-totem-su" icon={["armor-upgrade"]}>
<Pair single id="greater-celestial-totem-su">Greater Celestial Totem (Su)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/celestial_totem">celestial totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains spell resistance equal to 11 + the barbarian's class level against spells with the evil descriptor. She also gains a +2 bonus on all saving throws against spells and effects from evil creatures.</Pair>
</Ability>
</>};
const _lesser_chaos_totem = {title: "Lesser Chaos Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-chaos-totem-su" icon={["armor-upgrade"]}>
<Pair single id="lesser-chaos-totem-su">Lesser Chaos Totem (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +1 deflection bonus to AC against the attacks of lawful creatures and a +1 resistance bonus on saving throws against confusion, insanity, polymorph, and effects with the lawful descriptor. This bonus increases by +1 for each chaos totem rage power she possesses.</Pair>
</Ability>
</>};
const _chaos_totem = {title: "Chaos Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="chaos-totem-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="chaos-totem-su">Chaos Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_chaos_totem">lesser chaos totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's form becomes infused with chaos. She gains a +4 bonus on Escape Artist checks and has a 25% chance to ignore extra damage from critical hits and sneak attacks.</Pair>
</Ability>
</>};
const _greater_chaos_totem = {title: "Greater Chaos Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-chaos-totem-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="greater-chaos-totem-su">Greater Chaos Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/chaos_totem">chaos totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains DR/lawful equal to 1/2 her barbarian level. Her weapons and natural weapons are considered chaotic for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _lesser_cult_totem = {title: "Lesser Cult Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="lesser-cult-totem-ex" icon={["stairs-goal"]}>
<Pair single id="lesser-cult-totem-ex">Lesser Cult Totem (Ex)</Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> any morale bonuses or bonuses for <Link to="/rule/flanking">flanking</Link> she gains on attacks rolls are added to her damage rolls instead of her attack rolls. They are still morale bonuses, and they don't stack with other morale bonuses on damage rolls.</Pair>
</Ability>
</>};
const _cult_totem = {title: "Cult Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="cult-totem-ex" icon={["shield-reflect"]}>
<Pair single id="cult-totem-ex">Cult Totem (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_cult_totem">lesser cult totem</Link></Pair>
<Pair title="Ability">The barbarian can make an attack of opportunity against a creature within her reach who damages an ally of the barbarian with a melee attack. Only the enemy, not the barbarian's ally, needs to be within the barbarian's melee reach in order for the barbarian to make this attack of opportunity.</Pair>
<Pair title="Special">Once the barbarian makes an attack of opportunity against a creature with this ability, she can't use this ability to make an attack of opportunity against the same creature for 24 hours.</Pair>
</Ability>
</>};
const _greater_cult_totem = {title: "Greater Cult Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="greater-cult-totem-ex" icon={["stairs-goal"]}>
<Pair single id="greater-cult-totem-ex">Greater Cult Totem (Ex)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/lesser_cult_totem">lesser cult totem</Link>, <Link to="/ragepower/cult_totem">cult totem</Link></Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> when she takes hit point damage that would render her <Link to="/misc/dying">dying</Link> or <Link to="/misc/dead">dead</Link>, she remains conscious and <em>raging</em> until the end of her next turn after taking that damage, though she is <Link to="/misc/disabled">disabled</Link> during that turn. She becomes dying or dead at the end of her next turn as normal for her current hit point total.</Pair>
<Pair title="Special">This ability has no effect if the barbarian dies from a cause other than hit point damage, such as from a death effect or if her Constitution damage exceeds her Constitution score.</Pair>
</Ability>
</>};
const _lesser_daemon_totem = {title: "Lesser Daemon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="undefined" icon={["armor-upgrade"]}>
<Pair single id="undefined"></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +2 bonus on saving throws against acid damage, death effects, disease, and poison. This bonus increases by 1 for each daemon totem rage power the barbarian has, excluding this one.</Pair>
</Ability>
</>};
const _daemon_totem = {title: "Daemon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="daemon-totem-su" icon={["armor-downgrade"]}>
<Pair single id="daemon-totem-su">Daemon Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_daemon_totem">lesser daemon totem</Link></Pair>
<Pair title="Ability">While the barbarian is <em>raging,</em> her melee attacks impose a temporary <Link to="/rule/negative_level">negative level</Link> on her opponent on a successful critical hit. After 1 hour, these temporary negative levels disappear automatically (without a saving throw).</Pair>
</Ability>
</>};
const _greater_daemon_totem = {title: "Greater Daemon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures</Link></p>
<Ability id="greater-daemon-totem-su" icon={["remedy"]}>
<Pair single id="greater-daemon-totem-su">Greater Daemon Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/lesser_daemon_totem">lesser daemon totem</Link>, <Link to="/ragepower/daemon_totem">daemon totem</Link></Pair>
<Pair title="Ability">If the barbarian kills an intelligent creature with a CR equal to at least half her character level while <em>raging,</em> she heals 5 hit points. If she is already at her maximum number of hit points, she instead gains 5 <Link to="/rule/temporary_hit_points">temporary hit points</Link>, which don't stack if she kills multiple creatures.</Pair>
</Ability>
</>};
const _dragon_totem = {title: "Dragon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="dragon-totem-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="dragon-totem-su">Dragon Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link>, <Link to="/ragepower/intimidating_glare">intimidating glare</Link>, 6th-level barbarian</Pair>
<Pair title="Choice">The barbarian must select a single color of dragon (black, blue, brass, bronze, copper, gold, green, red, silver, or white) as her totem.</Pair>
<Pair title="Passive Ability">While <em>raging,</em> she gains a +1 bonus on Perception checks and a +1 morale bonus on saving throws against fear, paralysis, and sleep effects. This bonus increases by +1 for each additional dragon totem rage power (such as <Link to="/ragepower/dragon_totem_resilience">dragon totem resilience</Link> and <Link to="/ragepower/dragon_totem_wings">dragon totem wings</Link>) the barbarian possesses.</Pair>
</Ability>
</>};
const _dragon_totem_resilience = {title: "Dragon Totem Resilience", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="dragon-totem-resilience-su" icon={["armor-upgrade"]}>
<Pair single id="dragon-totem-resilience-su">Dragon Totem Resilience (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/dragon_totem">Dragon totem</Link>, 8th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains resistance to the energy type that is associated with her dragon totem - acid (black, copper, green), cold (silver, white), electricity (blue, bronze), or fire (brass, gold, red). This resistance equals double her current DR/- from her barbarian <em>damage reduction</em> class feature; this energy resistance increases by 2 for each dragon totem rage power she possesses, including this one.</Pair>
</Ability>
</>};
const _dragon_totem_wings = {title: "Dragon Totem Wings", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="dragon-totem-wings-su" icon={["skills","stairs-goal"]}>
<Pair single id="dragon-totem-wings-su">Dragon Totem Wings (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/dragon_totem">Dragon totem</Link>, <Link to="/ragepower/dragon_totem_resilience">dragon totem resilience</Link>, 10th-level barbarian</Pair>
<Pair title="Passive Ability">When a barbarian selects this rage power, the <Link to="/skill/fly">Fly</Link> (Dex) skill becomes a class skill for her.</Pair>
<Pair title="Standard Action">While <em>raging</em> and wearing medium or lighter armor, the barbarian can manifest a pair of spiritual dragon wings that grant her a fly speed equal to her base speed (average maneuverability). She can expend 2 rounds of her <em>rage</em> to instead use an <strong className="hl">immediate action</strong> to gain this fly speed.</Pair>
<Pair title="Special">She can end her fly speed at any time, even when it is not her turn. Each round she spends <em>raging</em> and flying counts as 2 rounds of <em>rage.</em> Her ability to fly ends automatically when she ceases <em>raging.</em></Pair>
</Ability>
</>};
const _lesser_elemental_totem = {title: "Lesser Elemental Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="ragepowerlesser-elemental-totem-su" icon={["armor-upgrade"]}>
<Pair single id="ragepowerlesser-elemental-totem-su"><Link to="/ragepower/lesser_elemental_totem">Lesser Elemental Totem</Link> (Su)</Pair>
<Pair title="Choice">The barbarian selects one elemental type (air, earth, fire, or water). Once selected, this choice cannot be changed.</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a bonus on saving throws against spells with the selected elemental descriptor. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level. The barbarian gains access to the elemental totem rage power matching the element she selected.</Pair>
</Ability>
</>};
const _air_totem = {title: "Air Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="air-totem-su" icon={["magic-swirl"]}>
<Pair single id="air-totem-su">Air Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_elemental_totem">lesser elemental totem</Link> (air)</Pair>
<Pair title="Ability">Once per <em>rage,</em> the barbarian can move for 1 round as if affected by <Link to="/spell/air_walk">air walk</Link>.</Pair>
</Ability>
</>};
const _greater_air_totem = {title: "Greater Air Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="greater-air-totem-su" icon={["aura","armor-downgrade","armor-upgrade"]}>
<Pair single id="greater-air-totem-su">Greater Air Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/air_totem">air totem</Link></Pair>
<Pair title="Passive Ability"><p>While <em>raging,</em> the barbarian is surrounded by an aura of howling winds. Creatures attempting to cast spells while adjacent to the barbarian must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC 15 + spell level), and ranged attack rolls against the barbarian take a -4 penalty.</p>
<p>Creatures smaller than the barbarian that attack the barbarian in melee with a natural weapon or touch attack must succeed at a Fortitude save (DC 10 + 1/2 the barbarian's level + the barbarian's Constitution modifier) or the attack fails and the creature is flung back 5 feet and knocked <Link to="/rule/prone">prone</Link>.</p>
</Pair>
<Pair title="Special">The barbarian can suspend this aura as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _earth_totem = {title: "Earth Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="earth-totem-ex" icon={["stairs-goal"]}>
<Pair single id="earth-totem-ex">Earth Totem (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_elemental_totem">lesser elemental totem</Link> (earth)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can burrow through sand, loose soil, or gravel at a speed of 20 feet. This does not give the barbarian the ability to breathe underground. Loose material collapses behind the target 1 round after it leaves the area.</Pair>
</Ability>
</>};
const _greater_earth_totem = {title: "Greater Earth Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="greater-earth-totem-su" icon={["armor-upgrade"]}>
<Pair single id="greater-earth-totem-su">Greater Earth Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/earth_totem">earth totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's skin becomes as hard as stone. If the barbarian is hit with a manufactured weapon while <em>raging,</em> the weapon takes an amount of damage equal to half that dealt to the barbarian (ignoring damage reduction).</Pair>
</Ability>
</>};
const _fire_totem = {title: "Fire Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="fire-totem-su" icon={["armor-upgrade"]}>
<Pair single id="fire-totem-su">Fire Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_elemental_totem">lesser elemental totem</Link> (fire)</Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> any opponent that confirms a critical hit against her with a piercing or slashing melee weapon is sprayed with liquid fire. (Creatures with reach weapons are immune.) The attacker takes 1d6 points of fire damage per barbarian level (Reflex halves; DC 10 + 1/2 the barbarian's level + the barbarian's Con modifier).</Pair>
</Ability>
</>};
const _greater_fire_totem = {title: "Greater Fire Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="greater-fire-totem-su" icon={["aura","armor-downgrade"]}>
<Pair single id="greater-fire-totem-su">Greater Fire Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/fire_totem">fire totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian can envelope herself in a cloud of smoke that fills a 10-foot-radius sphere and follows her as she moves. Creatures in the affected area must succeed at Fortitude saves each round or <Link to="/rule/forest_fires">suffer the effects of breathing heavy smoke</Link>. The barbarian is immune to the smoke's effects, including vision obstruction. She can end this smoke as a <strong className="hl">free action</strong>, or it can be dispersed by wind in the same manner as a <Link to="/spell/fog_cloud">fog cloud</Link> spell.</Pair>
</Ability>
</>};
const _water_totem = {title: "Water Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="water-totem-ex" icon={["stairs-goal"]}>
<Pair single id="water-totem-ex">Water Totem (Ex)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_elemental_totem">lesser elemental totem</Link> (water)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian can breathe water as well as air.</Pair>
</Ability>
</>};
const _greater_water_totem = {title: "Greater Water Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_elements">Blood of the Elements</Link></p>
<Ability id="greater-water-totem-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="greater-water-totem-su">Greater Water Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/water_totem">water totem</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/tremorsense">tremorsense</Link> to a range of 30 feet while underwater. She can attack and move underwater as if affected by <Link to="/spell/freedom_of_movement">freedom of movement</Link>.</Pair>
</Ability>
</>};
const _lesser_fiend_totem = {title: "Lesser Fiend Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-fiend-totem-su" icon={["mailed-fist"]}>
<Pair single id="lesser-fiend-totem-su">Lesser Fiend Totem (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian grows a pair of large horns, gaining a <Link to="/umr/gore_attack">gore attack</Link>. This attack is a primary attack (unless she is also attacking with weapons, in which case it is a secondary attack) and is made at the barbarian's full base attack bonus (-5 if it is a secondary attack). The gore attack deals 1d8 points of piercing damage (1d6 if Small) plus the barbarian's Strength modifier (1/2 if it is a secondary attack).</Pair>
</Ability>
</>};
const _fiend_totem = {title: "Fiend Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="fiend-totem-su" icon={["armor-upgrade"]}>
<Pair single id="fiend-totem-su">Fiend Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_fiend_totem">lesser fiend totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian sprouts dozens of wicked barbs from her body. Anyone striking the barbarian with a melee weapon, an unarmed strike, or a natural weapon takes 1d6 points of piercing damage.</Pair>
</Ability>
</>};
const _greater_fiend_totem = {title: "Greater Fiend Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-fiend-totem-su" icon={["aura","armor-downgrade"]}>
<Pair single id="greater-fiend-totem-su">Greater Fiend Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/fiend_totem">fiend totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian is surrounded by an aura of menace. Good creatures adjacent to the barbarian are <Link to="/misc/shaken">shaken</Link> and take 2d6 points of slashing damage at the beginning of the barbarian's turn as dozens of small cuts open across their flesh. Neutral creatures that are adjacent to the barbarian are shaken, but do not take any damage. Evil creatures are unaffected.</Pair>
</Ability>
</>};
const _hive_totem = {title: "Hive Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="hive-totem-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="hive-totem-su">Hive Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link>, 4th-level barbarian</Pair>
<Pair title="Passive Ability"><p>While <em>raging,</em> the barbarian takes half damage from attacks by swarms of vermin, including spells and effects that act like a swarm of vermin (like <Link to="/spell/summon_swarm">summon swarm</Link> used to summon spiders or <Link to="/spell/insect_plague">insect plague</Link>).</p>
<p>She also gains a bonus on Strength ability checks and to CMD against bull rush, drag, and trip attacks equal to <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</p>
</Pair>
</Ability>
</>};
const _hive_totem_resilience = {title: "Hive Totem Resilience", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="hive-totem-resilience-su" icon={["armor-upgrade","armor-upgrade"]}>
<Pair single id="hive-totem-resilience-su">Hive Totem Resilience (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/hive_totem">Hive totem</Link>, 6th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian takes no damage from attacks by swarms of vermin, preventing harmful secondary effects of such attacks like poison or bleed. She also gains a bonus on combat maneuver checks and to CMD when grappling equal to <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _hive_totem_toxicity = {title: "Hive Totem Toxicity", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="hive-totem-toxicity-su" icon={["upgrade","mailed-fist","armor-downgrade"]}>
<Pair single id="hive-totem-toxicity-su">Hive Totem Toxicity (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/hive_totem">Hive totem</Link>, <Link to="/ragepower/hive_totem_resilience">hive totem resilience</Link>, 8th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian increases her bite damage die type with the <Link to="/ragepower/animal_fury">animal fury</Link> rage power <Link to="/misc/by_one_die">by one die type</Link> and decreases the penalty on attack rolls with that bite to -2.</Pair>
<Pair title="Ability">Once per <em>rage,</em> a bite that hits can deliver an injury <Link to="/rule/toxin">toxin</Link> that has a frequency of once per round for 4 rounds, deals 1d3 points of <Link to="/rule/constitution_damage">Constitution damage</Link>, and has a cure of one save. The saving throw has a Fortitude save DC of 10 + 1/2 the barbarian's level + the barbarian's Constitution modifier.</Pair>
</Ability>
</>};
const _lesser_moon_totem = {title: "Lesser Moon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="lesser-moon-totem-su" icon={["stairs-goal"]}>
<Pair single id="lesser-moon-totem-su">Lesser Moon Totem (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains darkvision with a range of 30 feet. If the barbarian already has darkvision, the range of her darkvision increases by 30 feet while she is <em>raging.</em></Pair>
</Ability>
</>};
const _moon_totem = {title: "Moon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="moon-totem-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="moon-totem-su">Moon Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_moon_totem">lesser moon totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a bonus equal to <Link to="/misc/half">half</Link> her level on Perception checks to pinpoint the location of an unseen creature, and unseen attackers gain no bonus on attacks against the barbarian.</Pair>
</Ability>
</>};
const _greater_moon_totem = {title: "Greater Moon Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="greater-moon-totem-su" icon={["upgrade"]}>
<Pair single id="greater-moon-totem-su">Greater Moon Totem (Su)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/moon_totem">Moon totem</Link>, 10th-level barbarian</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian ignores the miss chance for <Link to="/rule/concealment">concealment</Link> and treats total concealment as concealment.</Pair>
</Ability>
</>};
const _lesser_psychopomp_totem = {title: "Lesser Psychopomp Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="undefined" icon={["armor-upgrade"]}>
<Pair single id="undefined"></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +1 deflection bonus to AC against the attacks of undead creatures and a +1 bonus on saving throws against death effects, diseases, and poisons. This bonus increases by 1 for each psychopomp totem rage power she has, excepting this one.</Pair>
</Ability>
</>};
const _psychopomp_totem = {title: "Psychopomp Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="undefined" icon={["armor-downgrade"]}>
<Pair single id="undefined"></Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_psychopomp_totem">lesser psychopomp totem</Link></Pair>
<Pair title="Ability">The first time each round a creature with <Link to="/umr/regeneration">regeneration</Link> or <Link to="/umr/fast_healing">fast healing</Link> is struck by the barbarian while she is <em>raging,</em> the creature must succeed at a Will save (DC = 10 + half the barbarian's level + the barbarian's Strength modifier) or that ability is suppressed for 1 round.</Pair>
</Ability>
</>};
const _greater_psychopomp_totem = {title: "Greater Psychopomp Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_139_the_dead_road">Pathfinder #139: The Dead Road</Link></p>
<Ability id="undefined" icon={["stairs-goal","upgrade"]}>
<Pair single id="undefined"></Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/psychopomp_totem">psychopomp totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian can detect and locate undead creatures within 30 feet, just as if it had the <Link to="/umr/blindsight">blindsight</Link> ability, and any weapons she wields are treated as if they had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> special ability.</Pair>
</Ability>
</>};
const _lesser_spire_totem = {title: "Lesser Spire Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="lesser-spire-totem-su" icon={["upgrade"]}>
<Pair single id="lesser-spire-totem-su">Lesser Spire Totem (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +1 morale bonus on attacks against any creature that has targeted one of her allies with an attack or a harmful spell within the last round.</Pair>
</Ability>
</>};
const _spire_totem = {title: "Spire Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="spire-totem-su" icon={["upgrade"]}>
<Pair single id="spire-totem-su">Spire Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_spire_totem">lesser spire totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian takes no penalties for using a weapon to deal nonlethal damage. When dealing nonlethal damage, the barbarian adds a bonus equal to half her barbarian level on her damage rolls.</Pair>
</Ability>
</>};
const _greater_spire_totem = {title: "Greater Spire Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<Ability id="greater-spire-totem-su" icon={["armor-upgrade","shield-reflect","rolling-dices"]}>
<Pair single id="greater-spire-totem-su">Greater Spire Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/spire_totem">spire totem</Link></Pair>
<Pair title="Passive Ability">While the barbarian is <em>raging,</em> all allies within 30 feet gain a +2 morale bonus on Will saves. When attempting a Will save against a fear effect, all allies within this area can roll twice and use the better result.</Pair>
</Ability>
</>};
const _lesser_spirit_totem = {title: "Lesser Spirit Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="lesser-spirit-totem-su" icon={["mailed-fist"]}>
<Pair single id="lesser-spirit-totem-su">Lesser Spirit Totem (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian is surrounded by spirit wisps that harass her foes. These spirits make one slam attack each round against a living foe that is adjacent to the barbarian. This slam attack is made using the barbarian's full base attack bonus, plus the barbarian's Charisma modifier. The slam deals 1d4 points of negative energy damage, plus the barbarian's Charisma modifier.</Pair>
</Ability>
</>};
const _spirit_totem = {title: "Spirit Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="spirit-totem-su" icon={["armor-upgrade"]}>
<Pair single id="spirit-totem-su">Spirit Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_spirit_totem">lesser spirit totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the spirits that surround the barbarian make it difficult for her enemies to see her. The spirits grant the barbarian a 20% miss chance against ranged attacks and melee attacks made by creatures that are not adjacent to the barbarian (typically due to reach).</Pair>
</Ability>
</>};
const _greater_spirit_totem = {title: "Greater Spirit Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link></p>
<Ability id="greater-spirit-totem-su" icon={["aura","bowman"]}>
<Pair single id="greater-spirit-totem-su">Greater Spirit Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/spirit_totem">spirit totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the spirits that surround the barbarian become dangerous to any enemy adjacent to the barbarian. Living enemies adjacent to the barbarian at the start of her turn take 1d8 points of negative energy damage. In addition, the spirit wisps can now attack foes that are up to 15 feet away from the barbarian and the slam attack deals 1d6 points of negative energy damage.</Pair>
</Ability>
</>};
const _lesser_sun_totem = {title: "Lesser Sun Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link></p>
<Ability id="lesser-sun-totem-su" icon={["armor-upgrade"]}>
<Pair single id="lesser-sun-totem-su">Lesser Sun Totem (Su)</Pair>
<Pair title="Passive Ability">The sun's fire invigorates the barbarian. She is immune to environmental effects from <Link to="/rule/heat">heat and severe heat</Link>, and she gains a +2 bonus on Fortitude saves against the effects of extreme heat. In addition, the barbarian gains fire <Link to="/umr/resistance">resistance</Link> 5 while <em>raging.</em></Pair>
</Ability>
</>};
const _sun_totem = {title: "Sun Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link></p>
<Ability id="sun-totem-su" icon={["armor-upgrade","upgrade"]}>
<Pair single id="sun-totem-su">Sun Totem (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_sun_totem">lesser sun totem</Link></Pair>
<Pair title="Passive Ability">The touch of flame fuels and bolsters the barbarian's <em>rage.</em> She gains fire resistance 10 when <em>raging.</em> In addition, for 1d6 rounds after coming in direct contact with open flame, her speed increases by 10 feet.</Pair>
</Ability>
</>};
const _greater_sun_totem = {title: "Greater Sun Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link></p>
<Ability id="greater-sun-totem-su" icon={["armor-upgrade","aura","mailed-fist"]}>
<Pair single id="greater-sun-totem-su">Greater Sun Totem (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/sun_totem">sun totem</Link></Pair>
<Pair title="Passive Ability">The barbarian takes on aspects of the sun. She gains fire resistance 20 when <em>raging.</em> While <em>raging,</em> she is surrounded by a halo of flame that deals 1d6 points of fire damage to anyone that hits her with a touch attack or unarmed attack or succeeds at a bull rush, drag, or grapple combat maneuver against her. Her unarmed strikes and attacks with natural weapons deal 1d6 additional points of fire damage.</Pair>
</Ability>
</>};
const _lesser_tyrant_totem = {title: "Lesser Tyrant Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="lesser-tyrant-totem-ex" icon={["upgrade"]}>
<Pair single id="lesser-tyrant-totem-ex">Lesser Tyrant Totem (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/ragepower/animal_fury">Animal fury</Link> rage power or a natural bite attack</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's bite attack deals damage as if the barbarian were <Link to="/misc/one_size_larger">one size larger</Link> than her actual size.</Pair>
</Ability>
</>};
const _tyrant_totem = {title: "Tyrant Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="tyrant-totem-ex" icon={["mailed-fist"]}>
<Pair single id="tyrant-totem-ex">Tyrant Totem (Ex)</Pair>
<Pair title="Prerequisites">8th-level barbarian, <Link to="/ragepower/lesser_tyrant_totem">lesser tyrant totem</Link></Pair>
<Pair title="Free Action">While <em>raging,</em> the barbarian can begin a <Link to="/rule/grapple">grapple</Link> against any creature she hits with her bite attack.</Pair>
</Ability>
</>};
const _greater_tyrant_totem = {title: "Greater Tyrant Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link></p>
<Ability id="greater-tyrant-totem-su" icon={["mailed-fist"]}>
<Pair single id="greater-tyrant-totem-su">Greater Tyrant Totem (Su)</Pair>
<Pair title="Prerequisites">12th-level barbarian, <Link to="/ragepower/tyrant_totem">tyrant totem</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/swallow_whole">swallow whole</Link> as per the universal monster rule.</Pair>
</Ability>
</>};
const _world_serpent_totem = {title: "World Serpent Totem", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], addenda: ["totem"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="world-serpent-totem-su" icon={["armor-upgrade"]}>
<Pair single id="world-serpent-totem-su">World Serpent Totem (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +1 insight bonus to AC against outsiders and aberrations. This bonus increases by +1 for each world serpent rage power the barbarian possesses, excluding this one.</Pair>
</Ability>
</>};
const _world_serpent_spirit = {title: "World Serpent Spirit", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="world-serpent-spirit-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="world-serpent-spirit-su">World Serpent Spirit (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/world_serpent_totem">world serpent totem</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian considers her weapons to be chaotic-, evil-, good-, and lawful-aligned for the purposes of overcoming damage reduction. She also gains a +1 resistance bonus on saving throws against spells and effects that have an alignment descriptor or come from an outsider or aberration. This bonus increases by +1 for each world serpent rage power the barbarian possesses, excluding this one.</Pair>
</Ability>
</>};
const _world_serpent_totem_unity = {title: "World Serpent Totem Unity", topLink: ["Totem Warrior","arc-barbarian/totem_warrior"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat</Link></p>
<Ability id="world-serpent-totem-unity-su" icon={["upgrade","armor-upgrade"]}>
<Pair single id="world-serpent-totem-unity-su">World Serpent Totem Unity (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/world_serpent_totem">world serpent totem</Link>, <Link to="/ragepower/world_serpent_spirit">world serpent spirit</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian doubles her <em>fast movement</em> bonus to land speed and cannot be knocked <Link to="/rule/prone">prone</Link>. She also doubles her world serpent totem insight bonus to AC against attack rolls made by an outsider or aberration to confirm a critical hit against her.</Pair>
</Ability>
</>};
const _lesser_abyssal_blood = {title: "Lesser Abyssal Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-abyssal-blood-su" icon={["stairs-goal"]}>
<Pair single id="lesser-abyssal-blood-su">Lesser Abyssal Blood (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are considered primary attacks and are made at the barbarian's full base attack bonus. They deal 1d6 points of slashing damage for Medium creatures (1d4 if Small) plus her Strength modifier.</Pair>
</Ability>
</>};
const _abyssal_blood = {title: "Abyssal Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="abyssal-blood-su" icon={["stairs-goal"]}>
<Pair single id="abyssal-blood-su">Abyssal Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_abyssal_blood">lesser abyssal blood</Link></Pair>
<Pair title="Ability">Once per day when the barbarian enters a <em>rage,</em> she can choose to grow one size category larger than her base size (as <Link to="/spell/enlarge_person">enlarge person</Link>, even if the barbarian isn't humanoid).</Pair>
</Ability>
</>};
const _greater_abyssal_blood = {title: "Greater Abyssal Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-abyssal-blood-su" icon={["armor-upgrade"]}>
<Pair single id="greater-abyssal-blood-su">Greater Abyssal Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/abyssal_blood">abyssal blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/resistance">resistance</Link> 5 to acid, cold, and fire.</Pair>
</Ability>
</>};
const _lesser_celestial_blood = {title: "Lesser Celestial Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-celestial-blood-su" icon={["upgrade"]}>
<Pair single id="lesser-celestial-blood-su">Lesser Celestial Blood (Su)</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian's melee attacks are considered good-aligned weapons for the purpose of bypassing damage reduction. Furthermore, the barbarian deals an additional 1d6 points of damage when she damages an evil outsider with a melee attack.</Pair>
</Ability>
</>};
const _celestial_blood = {title: "Celestial Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="celestial-blood-su" icon={["armor-upgrade"]}>
<Pair single id="celestial-blood-su">Celestial Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_celestial_blood">lesser celestial blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/resistance">resistance</Link> 5 to acid and cold.</Pair>
</Ability>
</>};
const _greater_celestial_blood = {title: "Greater Celestial Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-celestial-blood-su" icon={["rolling-dices"]}>
<Pair single id="greater-celestial-blood-su">Greater Celestial Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/celestial_blood">celestial blood</Link></Pair>
<Pair title="Ability">Once per <em>rage,</em> the barbarian can reroll one ability check, skill check, or saving throw she just made. She must take the second result, even if it's lower. She must decide to use this ability after the die is rolled but before results are revealed.</Pair>
</Ability>
</>};
const _lesser_draconic_blood = {title: "Lesser Draconic Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-draconic-blood-su" icon={["stairs-goal"]}>
<Pair single id="lesser-draconic-blood-su">Lesser Draconic Blood (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are considered primary attacks and are made at the barbarian's full base attack bonus. They deal 1d6 points of slashing damage for Medium creatures (1d4 if Small) plus her Strength modifier.</Pair>
</Ability>
</>};
const _draconic_blood = {title: "Draconic Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="draconic-blood-su" icon={["armor-upgrade"]}>
<Pair single id="draconic-blood-su">Draconic Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_draconic_blood">lesser draconic blood</Link></Pair>
<Pair title="Choice">Choose an energy type from the following: acid, cold, fire, or electricity.</Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains <Link to="/umr/resistance">resistance</Link> 5 against the chosen energy type and a +1 natural armor bonus.</Pair>
</Ability>
</>};
const _greater_draconic_blood = {title: "Greater Draconic Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-draconic-blood-su" icon={["barbed-arrow","tornado-discs"]}>
<Pair single id="greater-draconic-blood-su">Greater Draconic Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/draconic_blood">draconic blood</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains a breath weapon that she can use once per day. For every 2 barbarian levels, this breath weapon deals 1d6 points of damage of the energy type she choose for the draconic blood power, either in a 30-foot cone (if cold or fire) or a 60-foot line (if acid or electricity). Those caught in the area of the breath can attempt a Reflex saving throw for half damage. The DC of this save is equal to 10 + 1/2 the barbarian's level + her Constitution modifier.</Pair>
</Ability>
</>};
const _lesser_elemental_blood = {title: "Lesser Elemental Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-elemental-blood-su" icon={["upgrade"]}>
<Pair single id="lesser-elemental-blood-su">Lesser Elemental Blood (Su)</Pair>
<Pair title="Choice">Choose an energy type: acid, cold, fire, or electricity.</Pair>
<Pair title="Swift Action">While <em>raging,</em> the barbarian can imbue her melee attacks with elemental energy, dealing an additional 1d6 points of damage of the chosen energy type for 1 round.</Pair>
<Pair title="Usage">3 times/day</Pair>
</Ability>
</>};
const _elemental_blood = {title: "Elemental Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="elemental-blood-su" icon={["armor-upgrade"]}>
<Pair single id="elemental-blood-su">Elemental Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_elemental_blood">lesser elemental blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging</em> the barbarian gains energy <Link to="/umr/resistance">resistance</Link> 10 against the energy type chosen when she took lesser elemental blood.</Pair>
</Ability>
</>};
const _greater_elemental_blood = {title: "Greater Elemental Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-elemental-blood-su" icon={["stairs-goal","upgrade"]}>
<Pair single id="greater-elemental-blood-su">Greater Elemental Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/elemental_blood">elemental blood</Link></Pair>
<Pair title="Ability">While <em>raging,</em> the barbarian gains a special movement type or bonus based on her chosen element: <strong>acid</strong> grants a burrow speed of 30 feet, <strong>cold</strong> grants a swim speed of 60 feet, <strong>fire</strong> grants an increase of 30 feet to her base land speed, and <strong>electricity</strong> grants a fly speed of 60 feet (good maneuverability).</Pair>
</Ability>
</>};
const _lesser_fey_blood = {title: "Lesser Fey Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-fey-blood-su" icon={["armor-downgrade"]}>
<Pair single id="lesser-fey-blood-su">Lesser Fey Blood (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> each time the barbarian confirms a critical hit, the target must succeed at a Will saving throw (DC = 10 + 1/2 the barbarian's level + her Constitution modifier) or be <Link to="/misc/confused">confused</Link> for one round.</Pair>
<Pair title="Special">This is a mind-affecting compulsion effect.</Pair>
</Ability>
</>};
const _fey_blood = {title: "Fey Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="fey-blood-su" icon={["stairs-goal"]}>
<Pair single id="fey-blood-su">Fey Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_fey_blood">lesser fey blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> when the barbarian <Link to="/rule/charge">charges</Link>, she ignores <Link to="/rule/difficult_terrain">difficult terrain</Link> (including magical terrain, but not other creatures).</Pair>
</Ability>
</>};
const _greater_fey_blood = {title: "Greater Fey Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-fey-blood-su" icon={["armor-upgrade"]}>
<Pair single id="greater-fey-blood-su">Greater Fey Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/fey_blood">fey blood</Link></Pair>
<Pair title="Ability">While <em>raging,</em> as long as the barbarian moves at least 10 feet, she gain the effects of <Link to="/spell/blur">blur</Link> for 1 round.</Pair>
</Ability>
</>};
const _lesser_infernal_blood = {title: "Lesser Infernal Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-infernal-blood-su" icon={["mailed-fist"]}>
<Pair single id="lesser-infernal-blood-su">Lesser Infernal Blood (Su)</Pair>
<Pair title="Usage">3 times/day</Pair>
<Pair title="Swift Action">While <em>raging,</em> the barbarian can infuse her attacks with hellfire for 1 round. During this time, all of her melee attacks gain the <Link to="/magic-enh/flaming">flaming</Link> magic weapon special ability.</Pair>
</Ability>
</>};
const _infernal_blood = {title: "Infernal Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="infernal-blood-su" icon={["armor-upgrade"]}>
<Pair single id="infernal-blood-su">Infernal Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_infernal_blood">lesser infernal blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains fire <Link to="/umr/resistance">resistance</Link> 5, as well as a +2 bonus on saving throws against poison.</Pair>
</Ability>
</>};
const _greater_infernal_blood = {title: "Greater Infernal Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-infernal-blood-su" icon={["armor-upgrade"]}>
<Pair single id="greater-infernal-blood-su">Greater Infernal Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/infernal_blood">infernal blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains a +4 bonus against enchantment and fear effects.</Pair>
</Ability>
</>};
const _lesser_undead_blood = {title: "Lesser Undead Blood", addenda: ["blood"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="lesser-undead-blood-su" icon={["armor-downgrade"]}>
<Pair single id="lesser-undead-blood-su">Lesser Undead Blood (Su)</Pair>
<Pair title="Ability">While <em>raging,</em> when the barbarian hits a creature with a <Link to="/rule/charge">charge</Link> attack, the creature she hit becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 1/2 her barbarian level (minimum 1). This effect does not stack with other fear effects to cause a stronger condition.</Pair>
</Ability>
</>};
const _undead_blood = {title: "Undead Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="undead-blood-su" icon={["upgrade"]}>
<Pair single id="undead-blood-su">Undead Blood (Su)</Pair>
<Pair title="Prerequisites">6th-level barbarian, <Link to="/ragepower/lesser_undead_blood">lesser undead blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> all of the barbarian's melee attacks are treated as if they were made with a weapon with the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability.</Pair>
</Ability>
</>};
const _greater_undead_blood = {title: "Greater Undead Blood", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<Ability id="greater-undead-blood-su" icon={["armor-upgrade"]}>
<Pair single id="greater-undead-blood-su">Greater Undead Blood (Su)</Pair>
<Pair title="Prerequisites">10th-level barbarian, <Link to="/ragepower/undead_blood">undead blood</Link></Pair>
<Pair title="Passive Ability">While <em>raging,</em> the barbarian gains cold <Link to="/umr/resistance">resistance</Link> 10, as well as DR 10/- against nonlethal damage.</Pair>
</Ability>
</>};
const _accurate_stance = {title: "Accurate Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="accurate-stance-ex" icon={["upgrade"]}>
<Pair single id="accurate-stance-ex" flavor="The barbarian can focus her strikes.">Accurate Stance (Ex)</Pair>
<Pair title="Passive Ability">She gains a competence bonus on melee attack rolls and thrown weapon attack rolls. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _calm_stance = {title: "Calm Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="calm-stance-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="calm-stance-ex" flavor="The barbarian can enter a state of calm.">Calm Stance (Ex)</Pair>
<Pair title="Passive Ability">While in this stance, the barbarian doesn't gain any benefits from <em>rage</em> other than the temporary hit points, but she doesn't take any of the penalties from <em>rage</em> (including the penalty to AC and the restriction on actions she can take). Rounds spent in a calm stance still count against her total number of rounds of <em>rage</em> per day.</Pair>
</Ability>
</>};
const _elemental_stance = {title: "Elemental Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="elemental-stance-su" icon={["upgrade"]}>
<Pair single id="elemental-stance-su">Elemental Stance (Su)</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Passive Ability">When the barbarian adopts this stance, she chooses an energy type (acid, cold, electricity, or fire). Her melee attacks deal 1 additional point of damage of the chosen type.</Pair>
<Pair title="At 8th Level">This damage increases to 1d6 points.</Pair>
<Pair title="At 12th Level">The barbarian's critical hits deal an additional 1d10 points of energy damage of the same type (2d10 if the weapon deals &times;3 damage on a critical hit, 3d10 if the weapon deals &times;4 damage on a critical hit).</Pair>
</Ability>
</>};
const _guarded_stance_stance = {title: "Guarded Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="guarded-stance-ex" icon={["armor-upgrade"]}>
<Pair single id="guarded-stance-ex" flavor="The barbarian can take on a more defensive posture.">Guarded Stance (Ex)</Pair>
<Pair title="Passive Ability">This grants her a dodge bonus to her Armor Class for the duration of her current <em>rage.</em> This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _knockdown_stance = {title: "Knockdown Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="knockdown-stance-ex" icon={["mailed-fist"]}>
<Pair single id="knockdown-stance-ex" flavor="The barbarian can focus on toppling her foes.">Knockdown Stance (Ex)</Pair>
<Pair title="Ability">Once per round, she can make a <Link to="/rule/trip">trip</Link> attack against one target in place of a melee attack. If she succeeds, the target is knocked <Link to="/rule/prone">prone</Link>.</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>No</Pair>
</Ability>
</>};
const _powerful_stance = {title: "Powerful Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="powerful-stance-ex" icon={["upgrade"]}>
<Pair single id="powerful-stance-ex" flavor="The barbarian can focus her ferocity.">Powerful Stance (Ex)</Pair>
<Pair title="Passive Ability">She gains a bonus on melee damage rolls and thrown weapon damage rolls. This bonus is equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _reckless_stance = {title: "Reckless Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="reckless-stance-ex" icon={["upgrade","broken-shield"]}>
<Pair single id="reckless-stance-ex" flavor="The barbarian can attack with abandon at the expense of her defense.">Reckless Stance (Ex)</Pair>
<Pair title="Passive Ability">She gains a bonus on attack rolls, but takes a penalty to AC. This bonus and penalty are equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level.</Pair>
</Ability>
</>};
const _regenerative_stance = {title: "Regenerative Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="regenerative-stance-ex" icon={["remedy"]}>
<Pair single id="regenerative-stance-ex" flavor="The barbarian can continually replenish her health.">Regenerative Stance (Ex)</Pair>
<Pair title="Prerequisites">4th-level barbarian</Pair>
<Pair title="Passive Ability">At the start of her turn, she regains temporary hit points equal to <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level, but this cannot give her more than her maximum temporary hit points from <em>rage.</em></Pair>
</Ability>
</>};
const _strength_stance = {title: "Strength Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="strength-stance-ex" icon={["upgrade"]}>
<Pair single id="strength-stance-ex" flavor="The barbarian can summon mighty strength.">Strength Stance (Ex)</Pair>
<Pair title="Passive Ability">She gains a competence bonus on combat maneuvers and to her CMD. These bonuses are equal to 1 + <Link to="/misc/one_fourth">one-fourth</Link> of her barbarian level. In addition, she gains a +8 competence bonus on Strength checks to lift, push, bend, or break objects (this does not apply to combat maneuvers).</Pair>
</Ability>
</>};
const _taunting_stance = {title: "Taunting Stance", topLink: ["Stance Rage Powers","ability/stance_rage_powers"], jsx: <><p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link></p>
<Ability id="taunting-stance-ex" icon={["broken-shield","mailed-fist"]}>
<Pair single id="taunting-stance-ex" flavor="The barbarian can leave herself open to attacks while preparing devastating counterattacks.">Taunting Stance (Ex)</Pair>
<Pair title="Prerequisites">12th-level barbarian</Pair>
<Pair title="Passive Ability">Enemies gain a +4 bonus on attack and damage rolls against the barbarian while she's in this stance, but every attack against the barbarian provokes an attack of opportunity from her, which is resolved prior to each provoking attack.</Pair>
</Ability>
</>};
export default {not_found:_not_found,animal_fury:_animal_fury,greater_animal_fury:_greater_animal_fury,bloody_bite:_bloody_bite,feasting_bite:_feasting_bite,penetrating_bite:_penetrating_bite,savage_jaw:_savage_jaw,vipers_kiss:_vipers_kiss,vipers_breath:_vipers_breath,enhance_venom:_enhance_venom,armor_ripper:_armor_ripper,auspicious_mark:_auspicious_mark,autumn_rage:_autumn_rage,bloody_fist:_bloody_fist,feast_of_blood:_feast_of_blood,boars_charge:_boars_charge,boasting_taunt:_boasting_taunt,body_bludgeon:_body_bludgeon,brawler:_brawler,greater_brawler:_greater_brawler,breathtaker:_breathtaker,clear_mind:_clear_mind,come_and_get_me:_come_and_get_me,contagious_rage:_contagious_rage,deathless_frenzy:_deathless_frenzy,disemboweling_tusks:_disemboweling_tusks,dissipating_rage:_dissipating_rage,eclipsing_rage:_eclipsing_rage,greater_eclipsing_rage:_greater_eclipsing_rage,lesser_elemental_rage:_lesser_elemental_rage,elemental_rage:_elemental_rage,greater_elemental_rage:_greater_elemental_rage,energy_resistance:_energy_resistance,greater_energy_resistance:_greater_energy_resistance,energy_absorption:_energy_absorption,energy_eruption:_energy_eruption,erratic_charge:_erratic_charge,greater_erratic_charge:_greater_erratic_charge,fearless_rage:_fearless_rage,ferocious_beast:_ferocious_beast,greater_ferocious_beast:_greater_ferocious_beast,ferocious_mount:_ferocious_mount,greater_ferocious_mount:_greater_ferocious_mount,ferocious_trample:_ferocious_trample,greater_ferocious_trample:_greater_ferocious_trample,spirit_steed:_spirit_steed,fierce_fortitude:_fierce_fortitude,flesh_wound:_flesh_wound,flight_response:_flight_response,fueled_by_vengeance:_fueled_by_vengeance,furious_draw:_furious_draw,furious_barrage:_furious_barrage,ghost_rager:_ghost_rager,good_for_what_ails_you:_good_for_what_ails_you,ground_breaker:_ground_breaker,greater_ground_breaker:_greater_ground_breaker,guarded_life:_guarded_life,greater_guarded_life:_greater_guarded_life,guarded_stance:_guarded_stance,hissing_rage:_hissing_rage,lesser_hurling:_lesser_hurling,hurling:_hurling,greater_hurling:_greater_hurling,hurling_charge:_hurling_charge,impelling_disarm:_impelling_disarm,increased_damage_reduction:_increased_damage_reduction,internal_fortitude:_internal_fortitude,intimidating_glare:_intimidating_glare,battle_roar:_battle_roar,terrifying_howl:_terrifying_howl,inured_to_the_dead:_inured_to_the_dead,knockback:_knockback,knockdown:_knockdown,linnorm_death_curse:_linnorm_death_curse,cairn_linnorm_death_curse:_cairn_linnorm_death_curse,crag_linnorm_death_curse:_crag_linnorm_death_curse,fjord_linnorm_death_curse:_fjord_linnorm_death_curse,ice_linnorm_death_curse:_ice_linnorm_death_curse,taiga_linnorm_death_curse:_taiga_linnorm_death_curse,tarn_linnorm_death_curse:_tarn_linnorm_death_curse,tor_linnorm_death_curse:_tor_linnorm_death_curse,liquid_courage:_liquid_courage,lizard_stride:_lizard_stride,low_light_vision:_low_light_vision,night_vision:_night_vision,master_of_the_deep:_master_of_the_deep,mighty_swing:_mighty_swing,moment_of_clarity:_moment_of_clarity,perfect_clarity:_perfect_clarity,ultimate_clarity:_ultimate_clarity,overbearing_advance:_overbearing_advance,overbearing_onslaught:_overbearing_onslaught,no_escape:_no_escape,pack_rage:_pack_rage,powerful_blow:_powerful_blow,bleeding_blow:_bleeding_blow,crippling_blow:_crippling_blow,quick_reflexes:_quick_reflexes,raging_climber:_raging_climber,bestial_climber:_bestial_climber,raging_flyer:_raging_flyer,bestial_flyer:_bestial_flyer,raging_leaper:_raging_leaper,bestial_leaper:_bestial_leaper,raging_flier:_raging_flier,raging_grappler:_raging_grappler,raging_swimmer:_raging_swimmer,bestial_swimmer:_bestial_swimmer,raging_whirlwind:_raging_whirlwind,reckless_abandon:_reckless_abandon,inspire_ferocity:_inspire_ferocity,renewed_vigor:_renewed_vigor,regenerative_vigor:_regenerative_vigor,renewed_vitality:_renewed_vitality,renewed_life:_renewed_life,roaring_drunk:_roaring_drunk,rolling_dodge:_rolling_dodge,reflexive_dodge:_reflexive_dodge,roused_anger:_roused_anger,savage_dirty_trick:_savage_dirty_trick,savage_hurl:_savage_hurl,savage_intuition:_savage_intuition,scent:_scent,primal_scent:_primal_scent,smasher:_smasher,gearbreaker:_gearbreaker,spiritual_awareness:_spiritual_awareness,spring_rage:_spring_rage,staggering_drunk:_staggering_drunk,strength_surge:_strength_surge,suffocating_grip:_suffocating_grip,greater_suffocating_grip:_greater_suffocating_grip,summer_rage:_summer_rage,superstition:_superstition,disruptive:_disruptive,eater_of_magic:_eater_of_magic,spellbreaker:_spellbreaker,witch_hunter:_witch_hunter,spell_sunder:_spell_sunder,sunder_enchantment:_sunder_enchantment,surprise_accuracy:_surprise_accuracy,deadly_accuracy:_deadly_accuracy,lethal_accuracy:_lethal_accuracy,sharpened_accuracy:_sharpened_accuracy,swift_foot:_swift_foot,sprint:_sprint,two_fanged_pounce:_two_fanged_pounce,unexpected_strike:_unexpected_strike,unrestrained_rage:_unrestrained_rage,water_sense:_water_sense,winter_rage:_winter_rage,aryzuls_curse:_aryzuls_curse,hshurhas_veil:_hshurhas_veil,kelizandris_tide:_kelizandris_tide,ymeris_pyre:_ymeris_pyre,lesser_ancestor_totem:_lesser_ancestor_totem,ancestor_totem:_ancestor_totem,greater_ancestor_totem:_greater_ancestor_totem,lesser_atavism_totem:_lesser_atavism_totem,atavism_totem:_atavism_totem,greater_atavism_totem:_greater_atavism_totem,lesser_beast_totem:_lesser_beast_totem,beast_totem:_beast_totem,greater_beast_totem:_greater_beast_totem,lesser_celestial_totem:_lesser_celestial_totem,celestial_totem:_celestial_totem,greater_celestial_totem:_greater_celestial_totem,lesser_chaos_totem:_lesser_chaos_totem,chaos_totem:_chaos_totem,greater_chaos_totem:_greater_chaos_totem,lesser_cult_totem:_lesser_cult_totem,cult_totem:_cult_totem,greater_cult_totem:_greater_cult_totem,lesser_daemon_totem:_lesser_daemon_totem,daemon_totem:_daemon_totem,greater_daemon_totem:_greater_daemon_totem,dragon_totem:_dragon_totem,dragon_totem_resilience:_dragon_totem_resilience,dragon_totem_wings:_dragon_totem_wings,lesser_elemental_totem:_lesser_elemental_totem,air_totem:_air_totem,greater_air_totem:_greater_air_totem,earth_totem:_earth_totem,greater_earth_totem:_greater_earth_totem,fire_totem:_fire_totem,greater_fire_totem:_greater_fire_totem,water_totem:_water_totem,greater_water_totem:_greater_water_totem,lesser_fiend_totem:_lesser_fiend_totem,fiend_totem:_fiend_totem,greater_fiend_totem:_greater_fiend_totem,hive_totem:_hive_totem,hive_totem_resilience:_hive_totem_resilience,hive_totem_toxicity:_hive_totem_toxicity,lesser_moon_totem:_lesser_moon_totem,moon_totem:_moon_totem,greater_moon_totem:_greater_moon_totem,lesser_psychopomp_totem:_lesser_psychopomp_totem,psychopomp_totem:_psychopomp_totem,greater_psychopomp_totem:_greater_psychopomp_totem,lesser_spire_totem:_lesser_spire_totem,spire_totem:_spire_totem,greater_spire_totem:_greater_spire_totem,lesser_spirit_totem:_lesser_spirit_totem,spirit_totem:_spirit_totem,greater_spirit_totem:_greater_spirit_totem,lesser_sun_totem:_lesser_sun_totem,sun_totem:_sun_totem,greater_sun_totem:_greater_sun_totem,lesser_tyrant_totem:_lesser_tyrant_totem,tyrant_totem:_tyrant_totem,greater_tyrant_totem:_greater_tyrant_totem,world_serpent_totem:_world_serpent_totem,world_serpent_spirit:_world_serpent_spirit,world_serpent_totem_unity:_world_serpent_totem_unity,lesser_abyssal_blood:_lesser_abyssal_blood,abyssal_blood:_abyssal_blood,greater_abyssal_blood:_greater_abyssal_blood,lesser_celestial_blood:_lesser_celestial_blood,celestial_blood:_celestial_blood,greater_celestial_blood:_greater_celestial_blood,lesser_draconic_blood:_lesser_draconic_blood,draconic_blood:_draconic_blood,greater_draconic_blood:_greater_draconic_blood,lesser_elemental_blood:_lesser_elemental_blood,elemental_blood:_elemental_blood,greater_elemental_blood:_greater_elemental_blood,lesser_fey_blood:_lesser_fey_blood,fey_blood:_fey_blood,greater_fey_blood:_greater_fey_blood,lesser_infernal_blood:_lesser_infernal_blood,infernal_blood:_infernal_blood,greater_infernal_blood:_greater_infernal_blood,lesser_undead_blood:_lesser_undead_blood,undead_blood:_undead_blood,greater_undead_blood:_greater_undead_blood,accurate_stance:_accurate_stance,calm_stance:_calm_stance,elemental_stance:_elemental_stance,guarded_stance_stance:_guarded_stance_stance,knockdown_stance:_knockdown_stance,powerful_stance:_powerful_stance,reckless_stance:_reckless_stance,regenerative_stance:_regenerative_stance,strength_stance:_strength_stance,taunting_stance:_taunting_stance}