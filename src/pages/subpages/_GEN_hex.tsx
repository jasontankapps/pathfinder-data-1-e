import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested witch hex.</p>
</>};
const _ameliorating = {title: "Ameliorating", jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 16</Link></p>
<Ability id="ameliorating-su" icon={["remedy","shield-reflect"]}>
<Pair single id="ameliorating-su" flavor="The witch can touch a creature to suppress or protect it from negative conditions.">Ameliorating (Su)</Pair>
<Pair title="Ability"><p>The witch chooses one of the following conditions each time she uses this hex: dazzled, fatigued, shaken, or sickened. If the target is or later becomes afflicted with the chosen condition, that condition is suppressed for a number of minutes equal to the witch's level.</p>
<p>Alternatively, the witch can grant her target a +4 circumstance bonus on saving throws against effects that cause any two of the listed conditions (which condition is always the witch's choice) for 24 hours.</p>
</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from the hex again for 24 hours.</Pair>
</Ability>
</>};
const _aura_of_purity = {title: "Aura of Purity", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="aura-of-purity-su" icon={["aura","remedy"]}>
<Pair single id="aura-of-purity-su">Aura of Purity (Su)</Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Passive Ability">The witch's aura purifies the air around her. Diseases, inhaled poisons, and noxious gaseous effects (such as <Link to="/spell/stinking_cloud">stinking cloud</Link>) are negated in a 10-foot aura around the witch.</Pair>
<Pair title="Special">Effects caused by spells whose level is more than half the witch's class level are unaffected.</Pair>
</Ability>
</>};
const _beast_of_ill_omen = {title: "Beast of Ill-Omen", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="beast-of-ill-omen-su" icon={["armor-downgrade"]}>
<Pair single id="beast-of-ill-omen-su">Beast of Ill-Omen (Su)</Pair>
<Pair title="Ability"><p>The witch imbues her familiar with strange magic, putting a minor curse upon the next enemy to see it. The enemy must make a Will save or be affected by <Link to="/spell/bane">bane</Link> (caster level equal to the witch's level).</p>
<p>The witch can use this hex on her familiar at a range of up to 60 feet. The affected enemy must be no more than 60 feet from the familiar to trigger the effect; seeing the familiar from a greater distance has no effect (though if the enemy and familiar approach to within 60 feet of each other, the hex takes effect). The <em>bane</em> affects the closest creature to the familiar (ties affect the creature with the highest initiative score).</p>
</Pair>
<Pair title="Special">Whether or not the target's save is successful, the creature cannot be the target of the <em>bane</em> effect for 1 day (later uses of this hex ignore that creature when determining who is affected).</Pair>
</Ability>
</>};
const _blight = {title: "Blight", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="blight-su" icon={["armor-downgrade","magic-palm"]}>
<Pair single id="blight-su">Blight (Su)</Pair>
<Pair title="Ability"><p>The witch can curse an animal, plant creature, or plot of land, causing it to wither and die. Blighting an area takes 1 round, during which time the witch and her familiar must be in contact with the target.</p>
<p>If it's used on a plot of land, the land begins to wither the following day, and over the next week all plants in the area die. Nothing will grow in that area so long as the curse persists. A witch can affect an area with a radius equal to her class level &amp;times&amp; 10 feet.</p>
<p>Blighting a creature is a <strong className="hl">standard action</strong> that requires a melee touch attack. If used on a creature of the animal or plant type, the creature gains the following <Link to="/rule/curses">curse</Link>:</p>
<AffInfo type="Curse" save="Will negates" freq="1/day" eff={<>1 <Link to="/rule/con_damage">Con damage</Link></>} icon="c">Blight Hex</AffInfo>
</Pair>
<Pair title="Special">Both types of curse can be removed with a <Link to="/spell/remove_curse">remove curse</Link> or similar magic, using the save DC as the DC to remove the curse. A witch can only have one <em>blight</em> in effect at a time. If another <em>blight</em> hex is made, the first immediately ends.</Pair>
</Ability>
</>};
const _cackle = {title: "Cackle", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link>, <Link to="/source/magical_marketplace">Magical Marketplace pg. 28</Link>, <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 9</Link>, <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 9</Link>, <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="cackle-su" icon={["upgrade"]}>
<Pair single id="cackle-su">Cackle (Su)</Pair>
<Pair title="Move-Equivalent Action">A witch can cackle madly. Any creature that is within 30 feet that is under the effects of an <Link to="/hex/agony">agony</Link> hex, <Link to="/hex/charm">charm</Link> hex, <Link to="/hex/discord">discord</Link> hex, <Link to="/hex/disrupt_connection">disrupt connection</Link> hex, <Link to="/hex/distraction">distraction</Link> hex, <Link to="/hex/evil_eye">evil eye</Link> hex, <Link to="/hex/fortune">fortune</Link> hex, <Link to="/hex/misfortune">misfortune</Link> hex, <Link to="/hex/protective_luck">protective luck</Link> hex, or <Link to="/hex/sink">sink</Link> hex caused by the witch has the duration of that hex extended by 1 round.</Pair>
</Ability>
</>};
const _cauldron = {title: "Cauldron", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="cauldron-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="cauldron-ex">Cauldron (Ex)</Pair>
<Pair title="Ability">The witch receives <Link to="/feat/brew_potion">Brew Potion</Link> as a bonus feat and a +4 insight bonus on Craft (alchemy) skill checks.</Pair>
</Ability>
</>};
const _poison_steep = {title: "Poison Steep", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="poison-steep-sp" icon={["magic-swirl"]}>
<Pair single id="poison-steep-sp">Poison Steep (Sp)</Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">The witch can use her <em>cauldron</em> to brew a foul toxin in which she can steep fruits and other delicious edibles, transforming them so that when eaten, they have the same effect as a <Link to="/spell/poison">poison</Link> spell. Brewing the toxin and then steeping the food takes 1 hour in total; steeping can affect up to 1 pound of food. The food is poisoned for 24 hours, and the poison cannot be transferred to other objects. The food tastes normal, but magic detects it as poisonous.</Pair>
</Ability>
</>};
const _witchs_bottle = {title: "Witch's Bottle", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_wild">Heroes of the Wild pg. 11</Link></p>
<Ability id="witchs-bottle-su" icon={["magic-swirl"]}>
<Pair single id="witchs-bottle-su">Witch's Bottle (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">Once per day, the witch can perform a 10-minute ritual to create a potion imbued with the power of one of her hexes. Any creature that consumes this potion is affected by the hex as if cast by its creator. The witch can't use that hex until the potion is consumed or rendered inert.</Pair>
<Pair title="Special">Only hexes that can target a creature other than the witch can be distilled in this way. The potion remains potent until consumed or rendered inert by the witch as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _charm = {title: "Charm", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="charm-su" icon={["stairs-goal"]}>
<Pair single id="charm-su">Charm (Su)</Pair>
<Pair title="Ability">A witch can charm an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the witch had successfully used the <Link to="/skill/diplomacy">Diplomacy</Link> skill. The effect lasts for a number of rounds equal to the Witch's Intelligence modifier. A Will save negates this effect.</Pair>
<Pair title="At 8th Level">This effect improves the attitude of the target creature by 2 steps.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
</>};
const _child_scent = {title: "Child-Scent", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="child-scent-ex" icon={["stairs-goal"]}>
<Pair single id="child-scent-ex">Child-Scent (Ex)</Pair>
<Pair title="Ability">The witch gains the <Link to="/umr/scent">scent</Link> ability, but only with respect to humanoid children and immature animals. Thus, she could sniff out a child's hiding place or a den of wolf pups, but not the child's parents or the den mother.</Pair>
</Ability>
</>};
const _city_sight = {title: "City Sight", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="city-sight-su" icon={["armor-downgrade"]}>
<Pair single id="city-sight-su" flavor="The witch curses a target with the simple vision of urban mortals.">City Sight (Su)</Pair>
<Pair title="Ability">On a failed Fortitude save, the subject loses the use of darkvision, <Link to="/umr/greensight">greensight</Link>, low-light vision, <Link to="/umr/see_in_darkness">see in darkness</Link>, and other visual abilities beyond simple sight, but not nonvisual means of perception like <Link to="/umr/blindsight">blindsight</Link>, <Link to="/umr/scent">scent</Link>, or <Link to="/umr/tremorsense">tremorsense</Link>. This effect lasts 1 minute.</Pair>
<Pair title="At 8th Level">This effect lasts for 10 minutes instead.</Pair>
<Pair title="Special">Whether or not the creature succeeds at the saving throw, it can't be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _combat_hypnosis = {title: "Combat Hypnosis", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 15</Link></p>
<Ability id="combat-hypnosis-su" icon={["magic-swirl"]}>
<Pair single id="combat-hypnosis-su" flavor="The witch can lull her enemies into a trance, even in the chaos of combat.">Combat Hypnosis (Su)</Pair>
<Pair title="Ability">This hex functions as <Link to="/spell/hypnotism">hypnotism</Link>, except it can affect only one creature at a time, and the target creature does not receive the usual +2 bonus on its saving throw while in combat. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _congeal = {title: "Congeal", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="congeal-su" icon={["armor-downgrade"]}>
<Pair single id="congeal-su">Congeal (Su)</Pair>
<Pair title="Ability">The witch can make the water in a 10-foot radius around her sludgy and viscous for 1 minute, causing it to function as <Link to="/rule/difficult_terrain">difficult terrain</Link> for all swimming creatures except herself. This also provides partial <Link to="/rule/cover">cover</Link> against physical effects that pass through the affected area.</Pair>
</Ability>
</>};
const _coven = {title: "Coven", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="coven-ex" icon={["upgrade"]}>
<Pair single id="coven-ex">Coven (Ex)</Pair>
<Pair title="Ability">The witch counts as a <Link to="/family/hag">hag</Link> for the purpose of joining a hag's coven. The coven must contain at least one hag.</Pair>
<Pair title="Ability">In addition, whenever the witch with this hex is within 30 feet of another witch with this hex, she can use the <Link to="/rule/aid_another">aid another</Link> action to grant a +1 bonus to the other witch's caster level for 1 round. This bonus applies to the witch's spells and all of her hexes.</Pair>
</Ability>
</>};
const _cursed_wound = {title: "Cursed Wound", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 15</Link></p>
<Ability id="cursed-wound" icon={["armor-downgrade"]}>
<Pair single id="cursed-wound" flavor="The witch can curse a living creature, preventing it from healing completely.">Cursed Wound</Pair>
<Pair title="Ability"><p>For a number of days equal to 3 + the witch's Intelligence modifier (minimum 1), whenever the victim is the target of a conjuration (healing) spell or magical healing effect, the caster of the healing effect must succeed at a caster level check (DC = 11 + the witch's level) to end the hex. If the check fails, the healing effect functions as normal, except it cannot remove the last 10 points of damage the victim suffered.</p>
<p>Similarly, natural healing, <Link to="/umr/fast_healing">fast healing</Link>, and <Link to="/umr/regeneration">regeneration</Link> fail to cure the victim's last 10 points of damage. Thus, the victim's effective maximum number of hit points is 10 fewer than normal.</p>
<p>A successful Will save reduces the duration of this hex to 1 round.</p>
</Pair>
<Pair title="At 5th Level">The victim of this hex also takes a -2 penalty on Fortitude saving throws to avoid contracting a disease or poison from an injury.</Pair>
<Pair title="Special">This is a curse effect and can be removed by <Link to="/spell/remove_curse">remove curse</Link>.</Pair>
</Ability>
</>};
const _dark_apothecary = {title: "Dark Apothecary", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 15</Link></p>
<Ability id="dark-apothecary-ex" icon={["upgrade"]}>
<Pair single id="dark-apothecary-ex" flavor="The witches of ancient Iblydos were masters of herbalism, crafting potent drugs and poisons.">Dark Apothecary (Ex)</Pair>
<Pair title="Passive Ability">The witch receives a +4 insight bonus on checks to craft and apply poison.</Pair>
</Ability>
</>};
const _deathcall = {title: "Deathcall", jsx: <><p><strong>Sources</strong> <Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East pg. 15</Link></p>
<Ability id="deathcall-su" icon={["armor-downgrade","aura"]}>
<Pair single id="deathcall-su" flavor="The witch's presence makes death more likely for wounded foes.">Deathcall (Su)</Pair>
<Pair title="Passive Ability">Creatures within 120 feet of the witch take a -1 penalty on checks to stabilize when <Link to="/misc/dying">dying</Link>.</Pair>
<Pair title="At 8th Level">This penalty changes to -2.</Pair>
<Pair title="At 16th Level">It changes to -3.</Pair>
</Ability>
</>};
const _discord = {title: "Discord", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 28</Link></p>
<Ability id="discord-su" icon={["armor-downgrade"]}>
<Pair single id="discord-su">Discord (Su)</Pair>
<Pair title="Ability">The witch can make an animal or humanoid within 30 feet distrust another creature within line of sight. The target's <Link to="/skill/attitude">attitude</Link> toward the other creature decreases by one step. A successful Will save negates this effect. The effect lasts for a number of rounds equal to the witch's Intelligence modifier.</Pair>
<Pair title="At 8th Level">This effect decreases the attitude of the target creature by two steps.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
</>};
const _disguise = {title: "Disguise", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="disguise-sp" icon={["magic-swirl"]}>
<Pair single id="disguise-sp">Disguise (Sp)</Pair>
<Pair title="Usage">1 hour/day per witch level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">A witch can change her appearance, as if using <Link to="/spell/disguise_self">disguise self</Link>.</Pair>
</Ability>
</>};
const _disrupt_connection = {title: "Disrupt Connection", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook pg. 9</Link></p>
<Ability id="disrupt-connection-su" icon={["armor-downgrade"]}>
<Pair single id="disrupt-connection-su">Disrupt Connection (Su)</Pair>
<Pair title="Ability">The hexer disrupts the connection between a summoned creature within 30 feet and its master. The summoned creature must succeed at a Will save or be <Link to="/misc/confused">confused</Link> for 1d4 rounds. While it's confused in this way, during any round in which the percentile die roll to determine the creature's confusion result is 76-100, the affected creature instead acts as if the hexer had summoned it (attacking the hexer's enemies or performing such other tasks that the hexer can communicate to it).</Pair>
<Pair title="At 8th Level">This hex causes the summoned creature to act as if the hexer had summoned it on a result of 51-100.</Pair>
<Pair title="At 16th Level">This hex causes the summoned creature to act this way on a result of 26-100.</Pair>
<Pair title="Special">Once a creature has been the target of this hex, that creature is immune to this hex for 24 hours.</Pair>
</Ability>
</>};
const _distraction = {title: "Distraction", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 9</Link></p>
<Ability id="distraction-su" icon={["armor-downgrade"]}>
<Pair single id="distraction-su">Distraction (Su)</Pair>
<Pair title="Ability">The witch can cause a creature within 30 feet to suffer hallucinatory distractions whenever it tries to cast a spell or use a spell-like ability for 1 round. Anytime the creature attempts to do so, it must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + twice the spell level) or lose the spell. A successful Will saving throw negates this hex.</Pair>
<Pair title="At 8th Level">The duration becoems 2 rounds.</Pair>
<Pair title="At 16th Level">The duration increases to 3 rounds.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. Hexes that affect the <Link to="/hex/misfortune">misfortune</Link> hex, such as <Link to="/hex/cackle">cackle</Link>, also affect distraction.</Pair>
</Ability>
</>};
const _enemy_ground = {title: "Enemy Ground", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="enemy-ground-su" icon={["armor-downgrade"]}>
<Pair single id="enemy-ground-su" flavor="The witch curses a target with clumsiness when in dangerous terrain.">Enemy Ground (Su)</Pair>
<Pair title="Ability">The target takes a -4 penalty on Acrobatics checks to move over slippery or uneven surfaces and to avoid attacks of opportunity while moving through threatened squares. This effect lasts for 1 minute.</Pair>
<Pair title="At 8th Level">This penalty increases to -8.</Pair>
<Pair title="Special">On a successful Will save, the penalty is reduced by half and the duration is only 1 round.</Pair>
</Ability>
</>};
const _evil_eye = {title: "Evil Eye", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="evil-eye-su" icon={["armor-downgrade"]}>
<Pair single id="evil-eye-su" flavor="The witch can cause doubt to creep into the mind of a foe within 30 feet that she can see.">Evil Eye (Su)</Pair>
<Pair title="Ability">The target takes a -2 penalty on one of the following (witch's choice): AC, ability checks, attack rolls, saving throws, or skill checks.</Pair>
<Pair title="At 8th Level">The penalty increases to -4.</Pair>
<Pair title="Special">This hex lasts for a number of rounds equal to 3 + the witch's Intelligence modifier. A Will save reduces this to just 1 round. This is a mind-affecting effect.</Pair>
</Ability>
</>};
const _feral_speech = {title: "Feral Speech", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="feral-speech-su" icon={["stairs-goal"]}>
<Pair single id="feral-speech-su">Feral Speech (Su)</Pair>
<Pair title="Ability">This hex grants the witch the ability to speak with and understand the response of any animal as if using <Link to="/spell/speak_with_animals">speak with animals</Link>, though each time she uses the hex, she must decide to communicate with either amphibians, birds, fish, mammals, or reptiles, and can only speak to and understand animals of that type. The witch can make herself understood as far as her voice carries. This hex does not predispose any animal so addressed toward the witch in any way.</Pair>
<Pair title="At 12th Level">The witch can use this hex to communicate with vermin.</Pair>
</Ability>
</>};
const _flight = {title: "Flight", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="flight-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="flight-su" flavor="The witch grows lighter as she gains power, eventually gaining the ability to fly.">Flight (Su)</Pair>
<Pair title="At 1st Level">The witch can use <Link to="/spell/feather_fall">feather fall</Link> at will and gains a +4 racial bonus on Swim checks.</Pair>
<Pair title="At 3rd Level">She can cast <Link to="/spell/levitate">levitate</Link> once per day.</Pair>
<Pair title="At 5th Level">She can <Link to="/spell/fly">fly</Link>, as per the spell, for a number of minutes per day equal to her level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.</Pair>
<Pair title="Special">This hex only affects the witch.</Pair>
</Ability>
</>};
const _floating_lotus = {title: "Floating Lotus", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 16</Link></p>
<Ability id="floating-lotus-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="floating-lotus-su">Floating Lotus (Su)</Pair>
<Pair title="Ability"><p>The witch can conjure a large lotus flower that floats by her side for a number of minutes per day equal to her level. This duration doesn't need to be consecutive, but must be spent in 1-minute increments.</p>
<p>While summoned, the witch can use the lotus to cross water as if she was affected by <Link to="/spell/water_walk">water walk</Link>. She can also use the flower for short bursts of flight, gaining a +10 enhancement bonus on Acrobatics checks when attempting high jumps and long jumps.</p>
</Pair>
<Pair title="At 5th Level">This bonus increases to +20.</Pair>
<Pair title="At 9th Level">This bonus becomes +30.</Pair>
</Ability>
</>};
const _fortune = {title: "Fortune", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="fortune-su" icon={["rolling-dices","upgrade"]}>
<Pair single id="fortune-su">Fortune (Su)</Pair>
<Pair title="Ability">The witch can grant a creature within 30 feet a bit of good luck for 1 round. The target can call upon this good luck once per round, allowing him to reroll any ability check, attack roll, saving throw, or skill check, taking the better result. He must decide to use this ability before the first roll is made.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">It becomes 3 rounds.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fortune</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _gift_of_consumption = {title: "Gift of Consumption", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 10</Link></p>
<Ability id="gift-of-consumption-su" icon={["armor-downgrade"]}>
<Pair single id="gift-of-consumption-su" flavor="The witch curses a creature to share any effects that target her vitality.">Gift of Consumption (Su)</Pair>
<Pair title="Immediate Action">Whenever the witch is exposed to an effect that requires her to attempt a Fortitude save, she can curse a creature within 30 feet to share the effect. The hexed creature must also attempt a Fortitude save at the same DC as the witch's, and on a failure it is subject to the same effects as the witch.</Pair>
<Pair title="Special">Regardless of the outcome of the saving throw, the creature can't be targeted by this hex again for 1 day. This hex does not function with effects that require additional types of saves, such as <Link to="/spell/phantasmal_killer">phantasmal killer</Link>.</Pair>
</Ability>
</>};
const _greater_gift_of_consumption = {title: "Greater Gift of Consumption", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 10</Link></p>
<Ability id="greater-gift-of-consumption-su" icon={["armor-downgrade"]}>
<Pair single id="greater-gift-of-consumption-su" flavor={<>The witch can more effectively redirect effects to her proxy chosen by the <em>gift of consumption</em> hex.</>}>Greater Gift of Consumption (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/gift_of_consumption">Gift of consumption</Link></Pair>
<Pair title="Ability"><p>When the witch succeeds at her Fortitude save against an effect that she has redirected to a proxy, the hexed creature takes a -4 penalty on its Fortitude save against the redirected effect.</p>
<p>If the witch ever fails a Fortitude save or intentionally exposes herself to an effect that requires a Fortitude save, such as by ingesting a poison, she can redirect that effect to affect only the hexed creature, though the hexed creature can still attempt a saving throw to resist the effects.</p>
<p>Once she has redirected an effect to another creature in this way, that creature cannot be affected by the <em>gift of consumption</em> hex again for 24 hours.</p>
</Pair>
</Ability>
</>};
const _healing = {title: "Healing", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="healing-su" icon={["remedy"]}>
<Pair single id="healing-su">Healing (Su)</Pair>
<Pair title="Ability">A witch can soothe the wounds of those she touches. This acts as a <Link to="/spell/cure_light_wounds">cure light wounds</Link> spell, using the witch's caster level.</Pair>
<Pair title="At 5th Level">This hex acts like <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _heralding_bloom = {title: "Heralding Bloom", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 16</Link></p>
<Ability id="heralding-bloom-su" icon={["magic-swirl"]}>
<Pair single id="heralding-bloom-su">Heralding Bloom (Su)</Pair>
<Pair title="Ability">A witch can compel a plant within 30 feet to spread a message, which must be 25 words or fewer and in a language the witch speaks. This message can't contain verbal spell components, command words, or other magical effects. An intelligent plant that's targeted can attempt a Will save to negate the effect. If the save fails, the plant is magically compelled to "speak" this message in an audible voice, repeating it each time one or more intelligent creatures to whom the message has not yet been repeated comes within range, until 24 hours after the hex has been placed.</Pair>
<Pair title="Special"><p>The plant under the effect of the hex does not gain any special intelligence from this hex or gain any ability to understand the message if it does not normally understand the language the message is delivered in, and it is in no way otherwise compelled to act in any way it would not normally.</p>
<p>A witch can have a number of heralding blooms active equal to her witch level + her Charisma modifier.</p>
</Pair>
</Ability>
</>};
const _iceplant = {title: "Iceplant", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 17</Link></p>
<Ability id="iceplant-su" icon={["armor-upgrade"]}>
<Pair single id="iceplant-su">Iceplant (Su)</Pair>
<Pair title="Passive Ability">This hex grants the witch and her familiar a +2 natural armor bonus and the constant effects of <Link to="/spell/endure_elements">endure elements</Link>. The effect leaves the witch's skin thick and stiff to the touch.</Pair>
</Ability>
</>};
const _leshy_summoning = {title: "Leshy Summoning", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 17</Link></p>
<Ability id="leshy-summoning-su" icon={["upgrade","magic-swirl"]}>
<Pair single id="leshy-summoning-su">Leshy Summoning (Su)</Pair>
<Pair title="Passive Ability">The witch counts as a plant creature for the purpose of growing <Link to="/family/leshy">leshys</Link>. She adds <Link to="/monster/leaf_leshy">leaf leshys</Link>, <Link to="/monster/gourd_leshy">gourd leshys</Link>, <Link to="/monster/fungus_leshy">fungus leshys</Link>, <Link to="/monster/seaweed_leshy">seaweed leshys</Link>, and <Link to="/monster/lotus_leshy">lotus leshys</Link> to the list of creatures she can summon with <Link to="/spell/summon_monster">summon monster I, II, III, IV, and V</Link>, respectively.</Pair>
</Ability>
</>};
const _minor_prophecy = {title: "Minor Prophecy", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 15</Link></p>
<Ability id="minor-prophecy-su" icon={["magic-swirl"]}>
<Pair single id="minor-prophecy-su">Minor Prophecy (Su)</Pair>
<Pair title="Ability">The witch can call on her prophetic ancestors to cast <Link to="/spell/augury">augury</Link> once per day. She can spend a full hour casting the spell to negate the need for material components, but this reduces the accuracy of the spell by 5%.</Pair>
</Ability>
</>};
const _misfortune = {title: "Misfortune", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="misfortune-su" icon={["rolling-dices","armor-downgrade"]}>
<Pair single id="misfortune-su">Misfortune (Su)</Pair>
<Pair title="Ability">The witch can cause a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result.</Pair>
<Pair title="At 8th Level">The duration becomes 2 rounds.</Pair>
<Pair title="At 16th Level">This hex now lasts for 3 rounds.</Pair>
<Pair title="Special">This hex affects all rolls the target must make while it lasts. A Will save negates this hex. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _mothers_eye = {title: "Mother's Eye", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 17</Link></p>
<Ability id="mothers-eye-su" icon={["stairs-goal"]}>
<Pair single id="mothers-eye-su">Mother's Eye (Su)</Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">The witch can see through plant matter, as the <Link to="/umr/greensight">greensight</Link> universal monster ability.</Pair>
</Ability>
</>};
const _murksight = {title: "Murksight", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="murksight-su" icon={["stairs-goal"]}>
<Pair single id="murksight-su">Murksight (Su)</Pair>
<Pair title="Ability">The witch can see through natural fog, mist, and rain without penalty, ignoring any <Link to="/rule/concealment">concealment</Link> bonuses gained from such effects. If the effect is created by magic, the witch can see up to 15 feet without penalty, with normal penalties and effects applying beyond that distance. This ability functions underwater as well, allowing the witch to see in murky water as though it were clear.</Pair>
<Pair title="Special">This does not allow the witch to see anything she could not see otherwise, such as an invisible creature.</Pair>
</Ability>
</>};
const _nails = {title: "Nails", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="nails-ex" icon={["mailed-fist"]}>
<Pair single id="nails-ex">Nails (Ex)</Pair>
<Pair title="Ability">The witch's nails are long and sharp, and count as <Link to="/umr/natural_weapons">natural weapons</Link> that deal 1d3 points of damage (1d2 for a Small witch). These attacks are secondary attacks.</Pair>
<Pair title="Special">If trimmed, the witch's nails regrow to their normal size in 1d4 days.</Pair>
</Ability>
</>};
const _no_place_like_home = {title: "No Place Like Home", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="no-place-like-home-su" icon={["shield-reflect","armor-downgrade"]}>
<Pair single id="no-place-like-home-su">No Place Like Home (Su)</Pair>
<Pair title="Ability"><p>The witch fills an ally with the safety he feels at home or inflicts pangs of homesickness to hamper an enemy's defenses. She chooses a target for the hex within 30 feet. If she chooses an ally, that ally gains a +2 dodge bonus to AC against traps and on Reflex saves against traps. If she chooses an opponent, that opponent takes a -2 penalty to AC against traps and on Reflex saves against traps.</p>
<p>Either way, the effects last for 1 minute. The target can attempt a Will save to negate the effects of the hex.</p>
</Pair>
<Pair title="At 8th Level">The bonus or penalty increases to 4.</Pair>
<Pair title="At 16th Level">The bonus or penalty increases to 6.</Pair>
<Pair title="Special">A creature targeted by this hex cannot be targeted again by this hex for 1 day.</Pair>
</Ability>
</>};
const _peacebond = {title: "Peacebond", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="peacebond-su" icon={["armor-downgrade"]}>
<Pair single id="peacebond-su">Peacebond (Su)</Pair>
<Pair title="Ability">A witch can use this hex on a creature to prevent it from drawing a weapon for a number of rounds equal to the witch's level. This hex has no effect on natural weapons or weapons already in a creature's hands, but does prevent an archer from drawing arrows.</Pair>
<Pair title="Special">A Will save negates this effect, and whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _poison_touch = {title: "Poison Touch", jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 10</Link></p>
<Ability id="poison-touch-ex" icon={["mailed-fist"]}>
<Pair single id="poison-touch-ex">Poison Touch (Ex)</Pair>
<Pair title="Ability"><p>The witch empowers herself or an ally within 30 feet with poisonous nails. The affected creature gains a <Link to="/umr/claw_attack">claw attack</Link> as a secondary attack that deals 1d3 points of damage (1d2 for Small creatures) and has the following poison ability:</p>
<AffInfo type="Claw-injury" save="Fort 10 + 1/2 the witch's level + the witch's Int modifier" freq="1/round for 6 rounds" eff={<>1d2 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
<p>The creature gains this claw attack for a number of minutes equal to the witch's level. If the target already has a claw attack, that attack gains the poison ability listed above, but the DC is 1 higher.</p>
</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _pollute_water = {title: "Pollute Water", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="pollute-water-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="pollute-water-su" flavor="The witch can corrupt bodies of water with foul energies.">Pollute Water (Su)</Pair>
<Pair title="Ability">This functions as the <Link to="/hex/blight">blight</Link> hex, except it affects only either an area of standing water or a creature with the aquatic or water subtype. A creature of any type that drinks water from a polluted area must succeed at a Fortitude saving throw or become <Link to="/misc/nauseated">nauseated</Link> for 1d3 rounds and afflicted as if blighted with the <em>blight</em> hex curse.</Pair>
<Pair title="Special">A creature that succeeds at this saving throw is immune to the effects of <em>polluted water</em> from this area for 24 hours. <em>Polluted water</em> does not quench thirst.</Pair>
</Ability>
</>};
const _polluting_glance = {title: "Polluting Glance", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="polluting-glance-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="polluting-glance-su" flavor="The witch can corrupt nonmagical liquid items (such as alchemical remedies) with a look.">Polluting Glance (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/pollute_water">Pollute water</Link></Pair>
<Pair title="Ability">The witch can choose one liquid item she can see within 30 feet and change its contents into polluted water as per her <em>pollute water</em> hex.</Pair>
<Pair title="Special">The number of polluting glance hexes the witch can have active at one time is equal to her Intelligence bonus (minimum 1).</Pair>
</Ability>
</>};
const _prehensile_hair = {title: "Prehensile Hair", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="prehensile-hair-su" icon={["mailed-fist"]}>
<Pair single id="prehensile-hair-su">Prehensile Hair (Su)</Pair>
<Pair title="Ability"><p>The witch can instantly cause her hair (or even her eyebrows) to grow up to 10 feet long or to shrink to its normal length, and can manipulate her hair as if it were a limb with a Strength score equal to her Intelligence score. Her hair has reach 10 feet, and she can use it as a secondary <Link to="/umr/natural_attack">natural attack</Link> that deals 1d3 points of damage (1d2 for a Small witch).</p>
<p>Her hair can manipulate objects (but not weapons) as dexterously as a human hand. The hair cannot be sundered or attacked as a separate creature. Pieces cut from the witch's elongated hair shrink away to nothing.</p>
<p>Using her hair does not harm the witch's head or neck, even if she lifts something heavy with it.</p>
</Pair>
<Pair title="Special">The witch can manipulate her hair a number of minutes each day equal to her level; these minutes do not need to be consecutive, but must be spent in 1-minute increments. A typical male witch with this hex can also manipulate his beard, moustache, or eyebrows.</Pair>
</Ability>
</>};
const _protective_luck = {title: "Protective Luck", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 9</Link></p>
<Ability id="protective-luck-su" icon={["rolling-dices","shield-reflect"]}>
<Pair single id="protective-luck-su">Protective Luck (Su)</Pair>
<Pair title="Ability">The witch can cause fate to twist so that it benefits a creature within 30 feet for 1 round. Whenever that creature is targeted by an effect that requires an attack roll, including weapon attacks, the attacker must roll twice and take the worse result.</Pair>
<Pair title="At 8th Level">This lasts for 2 rounds.</Pair>
<Pair title="At 16th Level">This hex lasts for 3 rounds.</Pair>
<Pair title="Special">A witch cannot use this ability on herself. Hexes that affect the <Link to="/hex/fortune">fortune</Link> hex, such as <Link to="/hex/cackle">cackle</Link>, also affect <em>protective luck.</em></Pair>
</Ability>
</>};
const _scar = {title: "Scar", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 81</Link></p>
<Ability id="scar-su" icon={["armor-downgrade"]}>
<Pair single id="scar-su">Scar (Su)</Pair>
<Pair title="Ability"><p>This hex curses a single target touched with horrible scars of the witch's choosing, whether something as simple as a single letter on the target's forehead or blotchy, burn-like scars on his body. The target may make a Will save to resist this hex.</p>
<p>These <em>scars</em> do not interfere with the target's senses or prevent it from using abilities, but may affect social interactions. They persist through disguises and shapechanging.</p>
</Pair>
<Pair title="Ability">The witch can user her hexes on the scarred target at a range of up to 1 mile, and she is considered to have a body part from the target for the purpose of <Link to="/spell/scrying">scrying</Link> and similar divination spells.</Pair>
<Pair title="Special">The witch can withdraw this hex from a target as a <strong className="hl">move action</strong> at any range. The number of supernatural <em>scars</em> the witch can maintain at once is equal to her Intelligence bonus; once she reaches this limit, she must remove the <em>scar</em> from a current victim in order to mark another. Effects that remove curses can remove the <em>scar.</em></Pair>
</Ability>
</>};
const _seduction = {title: "Seduction", jsx: <><p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 17</Link></p>
<Ability id="seduction-su" icon={["armor-downgrade"]}>
<Pair single id="seduction-su">Seduction (Su)</Pair>
<Pair title="Ability"><p>The witch uses enthralling movements to <Link to="/misc/fascinated">fascinate</Link> a single creature within 60 feet that can see the witch. A Will save negates this effect. If the target is (or could be) sexually attracted to the witch, the save DC is increased by 2.</p>
<p>The effect lasts for 1 round, but the witch can extend this effect for 1 additional round (up to a total number of rounds equal to her class level) by taking a <strong className="hl">standard action</strong> to continue her enthralling movements.</p>
</Pair>
<Pair title="At 8th Level">The <em>fascination</em> effect lasts for 2 additional rounds after the witch ceases taking a standard action to maintain it.</Pair>
<Pair title="Special">Whether or not the target succeeds at its save, it cannot be the target of this ability again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
</>};
const _sink = {title: "Sink", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 21</Link></p>
<Ability id="sink-su" icon={["armor-downgrade"]}>
<Pair single id="sink-su">Sink (Su)</Pair>
<Pair title="Ability">The witch can cause a creature in water to struggle, imposing a -4 penalty on its Swim checks and reducing its swim speed (if any) by 10 feet for 1 minute unless it succeeds at a Fortitude saving throw; on a successful save, the effect's duration is reduced to 1 round.</Pair>
<Pair title="Special">This hex does not stack with itself.</Pair>
</Ability>
</>};
const _slumber = {title: "Slumber", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 66</Link></p>
<Ability id="slumber-su" icon={["magic-swirl"]}>
<Pair single id="slumber-su">Slumber (Su)</Pair>
<Pair title="Ability">A witch can cause a creature within 30 feet to fall into a deep, magical sleep, as per the spell <Link to="/spell/sleep">sleep</Link>. The creature receives a Will save to negate the effect. If the save fails, the creature falls asleep for a number of rounds equal to the witch's level.</Pair>
<Pair title="Special"><p>This hex can affect a creature of any HD. The creature will not wake due to noise or light, but others can rouse it with a <strong className="hl">standard action</strong>. This hex ends immediately if the creature takes damage.</p>
<p>Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</p>
</Pair>
</Ability>
</>};
const _soothsayer = {title: "Soothsayer", jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 15</Link>, <Link to="/source/heroes_of_the_high_court">Heroes of the High Court pg. 9</Link></p>
<Ability id="soothsayer-su" icon={["upgrade"]}>
<Pair single id="soothsayer-su" flavor="The witch's predictions become self-fulfilling prophecies.">Soothsayer (Su)</Pair>
<Pair title="Ability">When the witch uses the <Link to="/hex/distraction">distraction</Link> hex, <Link to="/hex/evil_eye">evil eye</Link> hex, <Link to="/hex/fortune">fortune</Link> hex, <Link to="/hex/misfortune">misfortune</Link> hex, <Link to="/hex/protective_luck">protective luck</Link> hex, or <Link to="/hex/retribution">retribution</Link> major hex, she can choose to delay the effect. If she does so, the hex takes effect the next time the target makes a roll that could be affected by the hex (such as an ability check, attack roll, saving throw, or skill check) or is affected by an action that could be modified by the hex (such as being attacked when the hex would affect the target's AC), whichever comes first (ignoring actions that are not in combat and actions that have no penalty for failure).</Pair>
<Pair title="Special">The duration of the hex begins on the same round as the action that causes it to take effect. The hex is wasted if it is not triggered within 24 hours.</Pair>
</Ability>
</>};
const _summers_heat = {title: "Summer's Heat", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 88</Link></p>
<Ability id="summers-heat-su" icon={["armor-downgrade"]}>
<Pair single id="summers-heat-su">Summer's Heat (Su)</Pair>
<Pair title="Ability">The witch surrounds her target with oppressive heat, dealing a number of points of nonlethal damage equal to her witch level and causing the target to become <Link to="/misc/fatigued">fatigued</Link>. The target can attempt a Fortitude save to reduce this nonlethal damage by half and negate the fatigued condition.</Pair>
<Pair title="Special">Whether or not the target succeeds at this save, it can't be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _swamp_hag = {title: "Swamp Hag", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="swamp-hag-sp" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="swamp-hag-sp">Swamp Hag (Sp)</Pair>
<Pair title="Passive Ability">While traveling through swamps, mires, bogs, and similar terrain, the witch leaves no trail and cannot be tracked, as the <Link to="/ability/trackless_step">trackless step</Link> druid ability. The witch can walk through mud and even quicksand as if it were normal ground.</Pair>
</Ability>
</>};
const _mud_witch = {title: "Mud Witch", jsx: <><p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 105</Link></p>
<Ability id="mud-witch-su" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="mud-witch-su">Mud Witch (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/swamp_hag">Swamp hag</Link></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>A witch with this hex can assume the form of viscous brown mud. The witch's type changes to <Link to="/type/ooze">ooze</Link> and she is able to squeeze through even the smallest cracks, but she can't make attacks or cast spells with verbal, somatic, material, or focus components while in this form, and she loses her supernatural abilities. If the witch has a touch spell ready to use, that spell is discharged harmlessly when she uses this hex.</p>
<p>While the witch is in mud form, her speed becomes 10 feet and she gains a swim speed of 20 feet. The witch gains DR 10/slashing and cold resistance 10.</p>
</Pair>
<Pair title="At 10th Level">While the witch is in mud form, her speed increases to 20 feet and her swim speed increases to 40 feet.</Pair>
<Pair title="Special">This hex affects only the witch.</Pair>
</Ability>
</>};
const _swamps_grasp = {title: "Swamp's Grasp", jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 15</Link></p>
<Ability id="swamps-grasp" icon={["stairs-goal"]}>
<Pair single id="swamps-grasp">Swamp's Grasp</Pair>
<Pair title="Ability">The witch can cause an area to become an entangling quagmire. One 10-foot square per witch level within 90 feet becomes <Link to="/rule/difficult_terrain">difficult terrain</Link> for a number of rounds equal to 3 + the witch's Intelligence modifier.</Pair>
<Pair title="Special">If the witch uses this hex again before the duration of the previous use has expired, the effects of the previous use of this hex end immediately.</Pair>
</Ability>
</>};
const _swine = {title: "Swine", jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 15</Link></p>
<Ability id="swine-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="swine-su">Swine (Su)</Pair>
<Pair title="Ability">The witch can partially transform an enemy into a pig. The effects of the transformation are mostly cosmetic and do not change the creature's size category or overall shape, but the affected creature takes a -2 penalty on Will saving throws for a number of rounds equal to the witch's Intelligence modifier (Will negates).</Pair>
<Pair title="At 8th Level">The affected creature's hands (or paws) turn into hooves, preventing it from using claw attacks or taking any action that would require the creature to use its fingers.</Pair>
</Ability>
</>};
const _tongues = {title: "Tongues", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 67</Link></p>
<Ability id="tongues-su" icon={["stairs-goal"]}>
<Pair single id="tongues-su">Tongues (Su)</Pair>
<Pair title="Ability">A witch with this hex can understand any spoken language for a number of minutes per day equal to her level, as <Link to="/spell/comprehend_languages">comprehend languages</Link>. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
<Pair title="At 5th Level">A witch can use this ability to speak any language, as per <Link to="/spell/tongues">tongues</Link>.</Pair>
</Ability>
</>};
const _unnerve_beasts = {title: "Unnerve Beasts", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="unnerve-beasts-su" icon={["armor-downgrade"]}>
<Pair single id="unnerve-beasts-su">Unnerve Beasts (Su)</Pair>
<Pair title="Ability">The target becomes offensive to animals (Will negates). Animals become distraught and aggressive in the victim's presence - horses buck, dogs snap and bark, bulls charge, and so on. The hex lasts a number of hours equal to the witch's Intelligence modifier.</Pair>
<Pair title="Special">A creature that saves against the hex cannot be affected by the hex for 1 day. The reaction of the animals is a mind-affecting charm effect, but the hex on the target is not.</Pair>
</Ability>
</>};
const _verdant_familiar = {title: "Verdant Familiar", jsx: <><p><strong>Sources</strong> <Link to="/source/wilderness_origins">Wilderness Origins pg. 17</Link></p>
<Ability id="verdant-familiar-ex" icon={["stairs-goal"]}>
<Pair single id="verdant-familiar-ex">Verdant Familiar (Ex)</Pair>
<Pair title="Ability">The witch's familiar's creature type changes to plant, gaining all respective <Link to="/type/plant">plant traits</Link>.</Pair>
</Ability>
</>};
const _ward = {title: "Ward", jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 67</Link></p>
<Ability id="ward-su" icon={["shield-reflect"]}>
<Pair single id="ward-su" flavor="A witch can use this hex to place a protective ward over one creature.">Ward (Su)</Pair>
<Pair title="Ability">The warded creature receives a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This <em>ward</em> lasts until the warded creature is hit or fails a saving throw.</Pair>
<Pair title="At 8th Level">The bonuses become +3.</Pair>
<Pair title="At 16th Level">The bonuses increase to +4.</Pair>
<Pair title="Special">A witch knows when a warded creature is no longer protected. A witch can have only one ward active at a time. If the witch uses this ability again, the previous <em>ward</em> immediately ends. A witch cannot use this ability on herself.</Pair>
</Ability>
</>};
const _water_lung = {title: "Water Lung", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="water-lung-su" icon={["stairs-goal"]}>
<Pair single id="water-lung-su">Water Lung (Su)</Pair>
<Pair title="Ability">An air-breathing target can breathe water or an aquatic target can breathe air. This lasts 1 minute.</Pair>
<Pair title="Special">If the witch uses this hex on herself, she can maintain it while she sleeps, allowing her to safely sleep underwater.</Pair>
</Ability>
</>};
const _agony = {title: "Agony", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 67</Link></p>
<Ability id="agony-su" icon={["armor-downgrade"]}>
<Pair single id="agony-su">Agony (Su)</Pair>
<Pair title="Ability">With a quick incantation, a witch can place this hex on one creature within 60 feet, causing them to suffer intense pain. The target is <Link to="/misc/nauseated">nauseated</Link> for a number of rounds equal to the witch's level. A Fortitude save negates this effect. If the saving throw is failed, the target can attempt a new save each round to end the effect.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _animal_skin = {title: "Animal Skin", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 15</Link></p>
<Ability id="animal-skin" icon={["magic-swirl"]}>
<Pair single id="animal-skin">Animal Skin</Pair>
<Pair title="Ability">The witch can become any animal of a size from Tiny to Large whose skin she wears. This ability is similar to <Link to="/spell/beast_shape_ii">beast shape II</Link>, except she takes on the appearance of the specific individual from which the skin came.</Pair>
</Ability>
</>};
const _beast_eye = {title: "Beast Eye", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="beast-eye-su" icon={["magic-swirl"]}>
<Pair single id="beast-eye-su">Beast Eye (Su)</Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>The witch can project her senses into an animal within 100 feet, sensing whatever it senses. She cannot control the animal's actions. She can project her senses from that animal to another within 100 feet of it as a <strong className="hl">standard action</strong>, and can continue to make these sensory leaps, potentially viewing things very far from her actual location. She may return her senses to her own body as a <strong className="hl">free action</strong>.</p>
<p>Normal animals get no saving throw against this ability, but animal companions, paladin mounts, and similar unusual animals may resist with a Will save; the witch may use this ability on her own familiar as if it were an animal.</p>
</Pair>
<Pair title="Special">If the witch has the <Link to="/hex/coven">coven</Link> hex, all other witches within 10 feet of her who also have the <em>coven</em> hex can see through this animal at will, although the acting witch still controls the ability.</Pair>
</Ability>
</>};
const _beasts_gift = {title: "Beast's Gift", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<Ability id="beasts-gift-su" icon={["mailed-fist"]}>
<Pair single id="beasts-gift-su" flavor="The witch can use her magic to grant her allies ferocious animal abilities.">Beast's Gift (Su)</Pair>
<Pair title="Ability">The witch can partially transform a willing ally, granting him natural attacks for a number of minutes equal to the witch's level.</Pair>
<Pair title="Choice">Choose one: the creature gains one bite attack that deals 1d8 points of damage and one secondary attack of the witch's choice that deals 1d6 points of damage, or the creature gains two claw attacks that deal 1d4 points of damage each.</Pair>
<Pair title="Special">These attacks follow the standard rules for <Link to="/umr/natural_attacks">natural attacks</Link>.</Pair>
</Ability>
</>};
const _cook_people = {title: "Cook People", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="cook-people-su" icon={["magic-swirl"]}>
<Pair single id="cook-people-su" flavor="The witch can create fabulous spells by cooking an intelligent humanoid creature in her cauldron, either alive or dead.">Cook People (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability"><p>Using this hex creates one meal or serving of food of the witch's choice, typically a delicious stew or a dough suitable for cookies, pastries, or other desserts. Cooking the victim takes 1 hour.</p>
<p>Eating the food provides one of the following benefits for 1 hour: <Link to="/spell/age_resistance">age resistance</Link>, <Link to="/spell/bears_endurance">bear's endurance</Link>, <Link to="/spell/bulls_strength">bull's strength</Link>, <Link to="/spell/cats_grace">cat's grace</Link>, <Link to="/spell/eagles_splendor">eagle's splendor</Link>, <Link to="/spell/foxs_cunning">fox's cunning</Link>, <Link to="/spell/neutralize_poison">neutralize poison</Link> (instantaneous) <Link to="/spell/owls_wisdom">owl's wisdom</Link>, <Link to="/spell/remove_disease">remove disease</Link> (instantaneous).</p>
<p>Alternatively, the witch can shape the dough into a Small, human-like creature, animating it as a <Link to="/monster/homunculus">homunculus</Link> for 1 hour.</p>
</Pair>
<Pair title="Special">Using this hex or knowingly eating its food is an evil act.</Pair>
</Ability>
</>};
const _delicious_fright = {title: "Delicious Fright", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/blood_of_the_moon">Blood of the Moon pg. 15</Link></p>
<Ability id="delicious-fright" icon={["armor-downgrade","upgrade","armor-upgrade"]}>
<Pair single id="delicious-fright" flavor="The witch can feed on the fear of her victim.">Delicious Fright</Pair>
<Pair title="Ability">The target of this hex becomes <Link to="/misc/shaken">shaken</Link> for a number of rounds equal to 3 + the witch's Intelligence modifier. As long as the witch remains within 30 feet of her target, she gains a +1 morale bonus on attack rolls and a +1 morale bonus on saving throws as long as this effect persists.</Pair>
<Pair title="Special">A successful Will save reduces the duration of this hex to 1 round. This is a mind-affecting fear effect.</Pair>
</Ability>
</>};
const _drugged = {title: "Drugged", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<Ability id="drugged-su" icon={["armor-downgrade"]}>
<Pair single id="drugged-su">Drugged (Su)</Pair>
<Pair title="Ability">The witch can combine her magic with her poisons to weaken her enemies' minds. When the witch creates a poison, she can require the target of the poison to attempt a Will save rather than a Fortitude save. The witch must use this hex when she crafts the poison, and once used, the hex can't be undone without remaking the poison.</Pair>
</Ability>
</>};
const _false_hospitality = {title: "False Hospitality", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<Ability id="false-hospitality-su" icon={["magic-swirl"]}>
<Pair single id="false-hospitality-su" flavor="The witches of Iblydos are known for greeting travelers with warmth only to reveal their powers once their enemies have lowered their defenses.">False Hospitality (Su)</Pair>
<Pair title="Ability">A witch can use this hex to gain the benefits of <Link to="/spell/glibness">glibness</Link> with a caster level equal to the witch's level. This hex can be used once per day.</Pair>
</Ability>
</>};
const _hags_eye = {title: "Hag's Eye", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 67</Link></p>
<Ability id="hags-eye-su" icon={["magic-swirl"]}>
<Pair single id="hags-eye-su">Hag's Eye (Su)</Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">A witch with this hex can create a magic sensor that she can see through. This functions as per the spell <Link to="/spell/arcane_eye">arcane eye</Link>. If the witch has the <Link to="/hex/coven">coven</Link> hex, all other witches within 10 feet who also have the <em>coven</em> hex can see through this sensor as well, although the witch that created it still controls it.</Pair>
</Ability>
</>};
const _harrowing_curse = {title: "Harrowing Curse", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/the_harrow_handbook">The Harrow Handbook pg. 15</Link></p>
<Ability id="harrowing-curse-su" icon={["armor-downgrade"]}>
<Pair single id="harrowing-curse-su">Harrowing Curse (Su)</Pair>
<Pair title="Ability">The witch can curse a target creature by touching it with a card randomly drawn from a <Link to="/eq-misc/harrow_deck">harrow deck</Link> she owns. The target is affected as if by the spell <Link to="/spell/bestow_curse">bestow curse</Link> using the witch's caster level, except that the witch can decrease only the ability score that corresponds to the suit of the card drawn.</Pair>
<Pair title="At 15th Level">This hex acts as a <Link to="/spell/major_curse">major curse</Link> spell.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be targeted by this hex more than once in 24 hours. A witch with the <Link to="/arc-witch/cartomancer">cartomancer</Link> archetype can combine this hex with her spell deck's deliver touch spell ability.</Pair>
</Ability>
</>};
const _hidden_home = {title: "Hidden Home", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="hidden-home-sp" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="hidden-home-sp">Hidden Home (Sp)</Pair>
<Pair title="Ability">The witch can conceal or disguise her home and the area around it as if using <Link to="/spell/mirage_arcana">mirage arcana</Link>. Before using the hex, she must spend 1 day pacing out the border of an area that measures roughly 40,000 square feet (approximately 200 feet by 200 feet) to define her home territory. Thereafter, she can use the hex to change the appearance of that area as a <strong className="hl">standard action</strong> as long as she is within the area. The illusion persists until the witch changes or dismisses it.</Pair>
<Pair title="Special">For the purpose of this ability, a witch can only have one "home" at a time.</Pair>
</Ability>
</>};
const _hoarfrost = {title: "Hoarfrost", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="hoarfrost-su" icon={["armor-downgrade"]}>
<Pair single id="hoarfrost-su">Hoarfrost (Su)</Pair>
<Pair title="Ability">The target is rimed with a shell of frost needles that slowly work their way into its flesh (Fortitude negates). The target turns pale and blue, and takes 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> per minute until it dies, saves (once per minute), or is cured. <Link to="/spell/break_enchantment">Break enchantment</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/remove_curse">remove curse</Link>, and similar spells end the effect.</Pair>
<Pair title="Special">If the target saves, it is immune to this hex for 1 day. This is a cold effect.</Pair>
</Ability>
</>};
const _ice_tomb = {title: "Ice Tomb", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="ice-tomb-su" icon={["armor-downgrade"]}>
<Pair single id="ice-tomb-su">Ice Tomb (Su)</Pair>
<Pair title="Ability"><p>A storm of ice and freezing wind envelops the target, which takes 3d8 points of cold damage (Fortitude half). If the target fails its save, it is <Link to="/rule/paralyzed">paralyzed</Link> and <Link to="/misc/unconscious">unconscious</Link> but does not need to eat or breathe while the ice lasts.</p>
<p>The ice has 20 hit points; destroying the ice frees the creature, which is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds after being released.</p>
</Pair>
<Pair title="Special">Whether or not the target's saving throw is successful, it cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _infected_wounds = {title: "Infected Wounds", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="infected-wounds-su" icon={["armor-downgrade"]}>
<Pair single id="infected-wounds-su">Infected Wounds (Su)</Pair>
<Pair title="Ability">The target's wounds become infected (Fortitude negates). The target takes 1 point of <Link to="/rule/constitution_damage">Constitution damage</Link> per day. After the first day, the target may save once per day to cure the infection.</Pair>
<Pair title="Special">This is a disease effect.</Pair>
</Ability>
</>};
const _major_ameliorating = {title: "Major Ameliorating", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 17</Link></p>
<Ability id="major-ameliorating-su" icon={["remedy","shield-reflect"]}>
<Pair single id="major-ameliorating-su">Major Ameliorating (Su)</Pair>
<Pair title="Ability"><p>The witch can touch a creature to suppress or protect it from more debilitating negative conditions. Each time she uses this hex, the witch either chooses the blinded or deafened condition, or chooses a type of effect: curse, disease, or poison. If the target is or later becomes afflicted with the chosen condition or effect, that condition or effect is suppressed for a number of minutes equal to the witch's level.</p>
<p>Alternatively, for 24 hours the witch can grant her target a +4 circumstance bonus on saving throws against effects that cause any two of the above conditions or effects (witch's choice; she can choose any combination of conditions or effects, as long as she chooses only two total).</p>
</Pair>
<Pair title="At 15th Level">The witch can choose up to two total conditions or types of effects to suppress or three total conditions or types of effects to grant a circumstance bonus against each time she uses the major ameliorating hex.</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _major_healing = {title: "Major Healing", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 68</Link></p>
<Ability id="major-healing-su" icon={["remedy"]}>
<Pair single id="major-healing-su" flavor="By calling upon eerie powers, the witch's touch can mend even the most terrible wounds of those she touches.">Major Healing (Su)</Pair>
<Pair title="Ability">This acts as <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, using the witch's caster level.</Pair>
<Pair title="At 15th Level">This hex acts like <Link to="/spell/cure_critical_wounds">cure critical wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>major healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _nightmares = {title: "Nightmares", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 68</Link></p>
<Ability id="nightmares-su" icon={["armor-downgrade"]}>
<Pair single id="nightmares-su">Nightmares (Su)</Pair>
<Pair title="Ability">Calling upon fell powers, a witch can place a hex on a creature within 60 feet that causes its sleep to be tormented by terrible nightmares. This functions as the spell <Link to="/spell/nightmare">nightmare</Link> each time the affected creature attempts to rest. A Will save negates this effect. If the save is failed, the target must make a new save each night or be unable to rest.</Pair>
</Ability>
</>};
const _pariah = {title: "Pariah", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 28</Link></p>
<Ability id="pariah-su" icon={["armor-downgrade"]}>
<Pair single id="pariah-su">Pariah (Su)</Pair>
<Pair title="Ability">The witch can cause a creature within 60 feet to be shunned by its allies for a number of rounds equal to the witch's Intelligence modifier. Any other creature attempting to directly assist the target with a harmless spell or <Link to="/rule/aid_another_2">aid another</Link> action must attempt a Will save. If the save succeeds, the aiding creature is unaffected by this hex. If the save fails, the aiding creature can't follow through, the action is lost, and the aiding creature can't directly aid the target for the duration of this hex. This hex does not prevent the target from benefiting from area of effect spells.</Pair>
</Ability>
</>};
const _prophecy = {title: "Prophecy", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<Ability id="prophecy-su" icon={["magic-swirl"]}>
<Pair single id="prophecy-su">Prophecy (Su)</Pair>
<Pair title="Ability">The witch can call on her prophetic ancestors and cast <Link to="/spell/divination">divination</Link> once per day. She can spend a full hour casting the spell in place of providing the usual material components.</Pair>
</Ability>
</>};
const _regenerative_sinew = {title: "Regenerative Sinew", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 17</Link></p>
<Ability id="regenerative-sinew-su" icon={["remedy"]}>
<Pair single id="regenerative-sinew-su">Regenerative Sinew (Su)</Pair>
<Pair title="Ability">The witch can cause the debilitating wounds of a creature she touches to quickly close, helping it heal rapidly. The target either gains <Link to="/umr/fast_healing">fast healing</Link> 5 for a number of rounds equal to 1/2 the witch's class level or it heals up to 4 points of ability score damage from any two ability scores (witch's choice).</Pair>
<Pair title="At 15th Level">In addition to the chosen effect, the target's severed body members, broken bones, and ruined organs grow back, as per <Link to="/spell/regenerate">regenerate</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
</>};
const _restless_slumber = {title: "Restless Slumber", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 10</Link></p>
<Ability id="restless-slumber-su" icon={["armor-downgrade"]}>
<Pair single id="restless-slumber-su">Restless Slumber (Su)</Pair>
<Pair title="Prerequisites"><Link to="/hex/slumber">Slumber</Link></Pair>
<Pair title="Ability"><p>The witch causes a creature within 30 feet to fall into a sleep riddled with nightmares. This functions as the <em>slumber</em> hex. Additionally, the restless nature of the sleep causes the creature to violently toss and turn, dealing 1d10 points of damage to itself each turn. This damage does not wake the creature.</p>
<p>When it wakes, the creature's addled state causes it to be <Link to="/misc/confused">confused</Link> for a number of rounds equal to half the witch's level.</p>
</Pair>
</Ability>
</>};
const _retribution = {title: "Retribution", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 68</Link></p>
<Ability id="retribution-su" icon={["armor-downgrade"]}>
<Pair single id="retribution-su">Retribution (Su)</Pair>
<Pair title="Ability"><p>A witch can place this hex on a creature within 60 feet, causing terrible wounds to open across the target's flesh whenever it deals damage to another creature in melee.</p>
<p>Immediately after the hexed creature deals damage in melee, it takes half that damage (round down). This damage bypasses any resistances, immunities, or damage reduction the creature possesses.</p>
</Pair>
<Pair title="Special">This effect lasts for a number of rounds equal to the witch's Intelligence modifier. A Will save negates this effect.</Pair>
</Ability>
</>};
const _speak_in_dreams = {title: "Speak in Dreams", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="speak-in-dreams-sp" icon={["magic-swirl"]}>
<Pair single id="speak-in-dreams-sp">Speak in Dreams (Sp)</Pair>
<Pair title="Ability">The witch can contact a creature as if using <Link to="/spell/dream">dream</Link>. The witch can use this ability on a number of creatures per day equal to her Intelligence bonus, but can dream-speak to those creatures as often as desired throughout that time period.</Pair>
</Ability>
</>};
const _steal_voice = {title: "Steal Voice", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/dirty_tactics_toolbox">Dirty Tactics Toolbox pg. 23</Link></p>
<Ability id="steal-voice-su" icon={["armor-downgrade"]}>
<Pair single id="steal-voice-su">Steal Voice (Su)</Pair>
<Pair title="Prerequisites"><Link to="/race/tiefling">Tiefling</Link></Pair>
<Pair title="Ability">The witch can steal the voice of one creature within 30 feet, causing it to lose, for a number of rounds equal to the witch's Intelligence bonus, all abilities that rely on speech, including talking, casting spells with verbal components, and using auditory bardic performances. A successful Will saving throw negates this effect.</Pair>
<Pair title="Special">If this hex is used upon a willing target, the duration lasts for a number of hours equal to the witch's Intelligence bonus. Additionally, the witch can change her voice to match that of any creature whose voice she has stolen with this hex, as per <Link to="/spell/vocal_alteration">vocal alteration</Link>.</Pair>
</Ability>
</>};
const _vision = {title: "Vision", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 68</Link></p>
<Ability id="vision-su" icon={["magic-swirl"]}>
<Pair single id="vision-su">Vision (Su)</Pair>
<Pair title="Ability"><p>A witch with this hex can grant a glimpse of the future to a creature touched. Granting a vision takes 1 minute, during which time the witch and the target must remain in contact with one another. At the end of this time, the subject receives a brief image of the future, usually no more than 1 year from the time of the vision, subject to GM discretion.</p>
<p>This is only one possible version of the future, making such visions unreliable at best. Most visions are slanted toward the alignment of the witch that granted them. For example, the visions granted by a chaotic evil witch often show scenes of death and destruction, while those of a neutral good witch tend to be of joyous events or occasions.</p>
</Pair>
<Pair title="Special">A creature cannot be subject to another vision until the current vision has either come to pass or been prevented. A witch cannot use this ability on herself. Unwilling creatures receive a Will save to negate the vision.</Pair>
</Ability>
</>};
const _waxen_image = {title: "Waxen Image", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 68</Link></p>
<Ability id="waxen-image-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="waxen-image-su">Waxen Image (Su)</Pair>
<Pair title="Full-Round Action"><p>The witch can create a crude and unnerving wax duplicate of a creature she can see within 30 feet. Once the image is complete, the subject must make a Will save. If the subject fails, the witch gains a small measure of control over the creature. Whenever she exercises this control, the creature receives a new Will save to end the effect. This effect occurs on the witch's turn and does not impede the creature's actions on its turn.</p>
<p>The witch can use the <em>waxen image</em> a number of times equal to her Intelligence modifier before it melts.</p>
</Pair>
<Pair title="Standard Action"><p>The witch can cause the subject to do any one of the following things: move up to the creature's speed in any direction, attack itself once with any weapon in hand (this attack automatically hits), lay down on the ground, or drop anything held.</p>
<p>Alternatively, she can spend one of her uses to simply torture the <em>image,</em> causing the creature to be both <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/staggered">staggered</Link> on its turn.</p>
</Pair>
<Pair title="Special">As soon as the creature has succeeded on a saving throw against this effect, it is immune to it for 24 hours. The is an enchantment (compulsion) effect.</Pair>
</Ability>
</>};
const _weather_control = {title: "Weather Control", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="weather-control-su" icon={["magic-swirl"]}>
<Pair single id="weather-control-su">Weather Control (Su)</Pair>
<Pair title="Ability">A witch with this hex can use <Link to="/spell/control_weather">control weather</Link> once per day, but creating the weather takes 1 full hour of chanting, dancing, and communing with her familiar.</Pair>
</Ability>
</>};
const _witchs_bounty = {title: "Witch's Bounty", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="witchs-bounty-su" icon={["magic-swirl"]}>
<Pair single id="witchs-bounty-su">Witch's Bounty (Su)</Pair>
<Pair title="Ability">The witch may bless a bush, plant, or tree that is planted in the ground, so that it creates a plentiful harvest. Each day at dawn, this blessed bush grows a number of <Link to="/spell/goodberry">goodberries</Link> equal to twice her witch level. Berries on the tree remain until they are picked, but the tree can never manifest a number of berries greater than twice her level at one time.</Pair>
<Pair title="Special">The witch may only have one <em>witch's bounty</em> active at a time, but can shift her blessing to a new plant with a ritual requiring 1 hour.</Pair>
</Ability>
</>};
const _witchs_brew = {title: "Witch's Brew", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="witchs-brew-ex" icon={["stairs-goal"]}>
<Pair single id="witchs-brew-ex">Witch's Brew (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">When the witch uses her cauldron to brew a potion, she may spend double the cost to create 2 identical potions that day instead of just 1.</Pair>
<Pair title="At 15th Level">She may spend triple the cost to create 3 identical potions that day.</Pair>
</Ability>
</>};
const _witchs_charge = {title: "Witch's Charge", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="witchs-charge-su" icon={["shield-reflect"]}>
<Pair single id="witchs-charge-su">Witch's Charge (Su)</Pair>
<Pair title="Ability">Once per day when preparing spells, a witch can designate a willing creature as her <em>charge.</em> She gains a constant <Link to="/spell/status">status</Link> effect on this creature and can target it with beneficial touch spells from a range of 30 feet. The creature remains her <em>charge</em> until she designates a new one.</Pair>
</Ability>
</>};
const _withering = {title: "Withering", topLink: ["Major Hexes","ability/major_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/potions_and_poisons">Potions and Poisons pg. 10</Link></p>
<Ability id="withering-su" icon={["armor-downgrade","upgrade"]}>
<Pair single id="withering-su" flavor="The witch causes a creature within 30 feet to age rapidly, empowering the witch in the process.">Withering (Su)</Pair>
<Pair title="Ability">The target ages to the next <Link to="/rule/age">age category</Link> (adult to middle-aged, and so on). The witch gains a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to 1d10 + her witch level and a +2 enhancement bonus to either Strength, Dexterity, or Constitution for a number of hours equal to her Intelligence modifier. These effects last for a number of hours equal to the witch's level.</Pair>
<Pair title="Special">A creature cannot be aged past venerable age by this hex, and it can attempt a Fortitude save to negate the effect altogether. Once a creature has successfully saved against the <em>withering</em> hex, it cannot be affected by it again.</Pair>
</Ability>
</>};
const _abominate = {title: "Abominate", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 28</Link></p>
<Ability id="abominate-su" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="abominate-su">Abominate (Su)</Pair>
<Pair title="Ability">The witch transforms a creature within 30 feet into an <Link to="/type/aberration">aberration</Link>. This hex acts as <Link to="/spell/baleful_polymorph">baleful polymorph</Link>, except the target is transmuted into a Small, Medium, or Large aberration. The target's abilities are modified as <Link to="/spell/monstrous_physique_iv">monstrous physique IV</Link>.</Pair>
<Pair title="Special">Whether or not its save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _animal_servant = {title: "Animal Servant", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 16</Link></p>
<Ability id="animal-servant-su" icon={["armor-downgrade"]}>
<Pair single id="animal-servant-su">Animal Servant (Su)</Pair>
<Pair title="Ability"><p>The witch can use this hex to turn a humanoid enemy into an animal and rob it of its free will. The transformation works as <Link to="/spell/beast_shape_ii">beast shape II</Link> and is negated by a successful Will save.</p>
<p>The transformed creature retains its Intelligence score and known languages, if any, but the witch controls its mind. This effect functions as <Link to="/spell/dominate_monster">dominate monster</Link>, except the creature does not receive further saving throws to resist the hex.</p>
</Pair>
<Pair title="Special">The effect can be removed only with <Link to="/spell/wish">wish</Link> or similar magic, although slaying the witch also ends the effect. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _curse_of_nonviolence = {title: "Curse of Nonviolence", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="curse-of-nonviolence-su" icon={["armor-downgrade"]}>
<Pair single id="curse-of-nonviolence-su">Curse of Nonviolence (Su)</Pair>
<Pair title="Ability">The witch can curse a creature to prevent it from attacking innocents. If the target fails its Will save, it cannot take violent actions or do anything destructive against any creature with fewer Hit Dice than itself. If another creature takes hostile action against the cursed creature, the cursed creature can act normally in regard to that creature only.</Pair>
<Pair title="Special">This is an abjuration effect. The curse is permanent but can be removed with a <Link to="/spell/break_enchantment">break enchantment</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> spell. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _death_curse = {title: "Death Curse", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="death-curse-su" icon={["armor-downgrade"]}>
<Pair single id="death-curse-su">Death Curse (Su)</Pair>
<Pair title="Ability">This powerful hex seizes a creature's heart, causing death within just a few moments. This hex has a range of 30 feet. The hexed creature receives a Will save to negate the effect. If this save is failed, the creature becomes <Link to="/misc/fatigued">fatigued</Link> the first round of the hex. On the second round of the hex, the creature becomes <Link to="/misc/exhausted">exhausted</Link>. On the third round, the creature dies unless it succeeds at a Fort save.</Pair>
<Pair title="Special">Creatures that fail the first save but succeed at the second remain exhausted and take 4d6 points of damage + 1 point of damage per level of the witch. Slaying the witch that hexed the creature ends the effect, but any fatigue or exhaustion remains. Whether or not the saves are successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _death_interrupted = {title: "Death Interrupted", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 17</Link></p>
<Ability id="death-interrupted-su" icon={["magic-swirl","remedy"]}>
<Pair single id="death-interrupted-su">Death Interrupted (Su)</Pair>
<Pair title="Ability"><p>A witch with this grand hex can pluck a dead creature's soul from the River of Souls and store it in her familiar for safekeeping and eventual resurrection.</p>
<p>In order to use this ability, the witch must be adjacent to the target dead creature and her own familiar, and the ally's soul must be free and willing to return at the witch's behest. When the witch touches the creature's remains (some small portion of the creature's body must still exist, and it may have been dead for any amount of time), its soul enters the body of the witch's familiar as per <Link to="/spell/familiar_melding">familiar melding</Link>, as if the witch's familiar were the target's familiar.</p>
<p>The creature's soul can remain within the witch's familiar for up to 1 hour per class level the witch has. During this time, the witch can telepathically communicate with the creature's soul (though the soul cannot do anything else), and the witch can return the ally to life. Doing so is a <strong className="hl">standard action</strong> that returns the creature's soul to its body, brings it back to life with a number of hit points equal to 5d8 + 1 hit point per the witch's caster level. The witch must be within 300 feet of the creature's body to return it to life.</p>
</Pair>
<Pair title="Special"><p>If a creature's soul is in the witch's familiar and this effect expires, or if the witch attempts to return the creature to life but is out of range, the creature remains dead.</p>
<p>Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</p>
</Pair>
</Ability>
</>};
const _dire_prophecy = {title: "Dire Prophecy", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 82</Link></p>
<Ability id="dire-prophecy-su" icon={["armor-downgrade"]}>
<Pair single id="dire-prophecy-su">Dire Prophecy (Su)</Pair>
<Pair title="Ability"><p>The witch curses the target so he is doomed to die (Will negates). As long as the curse persists, the target takes a -4 penalty to his Armor Class and on attack rolls, saves, ability checks, and skill checks.</p>
<p>While the curse persists, the witch may end it by bringing its full force upon her victim all at once. Doing so gives the victim a penalty equal to the witch's caster level to his Armor Class or on any single attack roll, combat maneuver check, opposed ability or skill check, or saving throw. The witch must decide to apply this penalty before the roll to be modified is made. If the witch does not have line of sight to the target, the full force of the curse occurs when the GM considers it most appropriate, such as when the target is in mortal danger.</p>
</Pair>
<Pair title="Special">A target can only have one <em>dire prophecy</em> upon him at a time. Whether or not the target's save against the hex is successful, a creature cannot be the target of this hex for 1 day. This is a curse effect.</Pair>
</Ability>
</>};
const _eternal_slumber = {title: "Eternal Slumber", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="eternal-slumber-su" icon={["armor-downgrade"]}>
<Pair single id="eternal-slumber-su">Eternal Slumber (Su)</Pair>
<Pair title="Ability">The witch can touch a creature, causing it to drift off into a permanent slumber. The creature receives a Will save to negate this effect. If the save fails, the creature falls asleep and cannot be woken. The effect can only be removed with a <Link to="/spell/wish">wish</Link> or similar magic, although slaying the witch ends the effect.</Pair>
<Pair title="Ability">The witch can use this ability to poison food or drink, causing those who ingest it to make a save or fall into an <em>eternal slumber.</em> She can only have one such dose of poison at any one time, and it loses its potency after 1 minute if not consumed.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _forced_reincarnation = {title: "Forced Reincarnation", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="forced-reincarnation-su" icon={["armor-downgrade","magic-swirl"]}>
<Pair single id="forced-reincarnation-su">Forced Reincarnation (Su)</Pair>
<Pair title="Ability">The witch causes a creature within 30 feet to die and be immediately reincarnated into a new body. A Will save negates this effect. Those that fail are slain and immediately brought back to life with the spell <Link to="/spell/reincarnate">reincarnate</Link>.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _lay_to_rest = {title: "Lay to Rest", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 27</Link></p>
<Ability id="lay-to-rest-sp" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="lay-to-rest-sp">Lay to Rest (Sp)</Pair>
<Pair title="Ability">The witch may target a single undead creature with this hex as if with an <Link to="/spell/undeath_to_death">undeath to death</Link> spell. A Will save negates this effect.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
</>};
const _life_giver = {title: "Life Giver", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="life-giver-su" icon={["remedy"]}>
<Pair single id="life-giver-su">Life Giver (Su)</Pair>
<Pair title="Full-Round Action">Once per day the witch can touch a dead creature and bring it back to life. This functions as <Link to="/spell/resurrection">resurrection</Link>, but it does not require a material component.</Pair>
</Ability>
</>};
const _natural_disaster = {title: "Natural Disaster", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 69</Link></p>
<Ability id="natural-disaster-su" icon={["magic-swirl"]}>
<Pair single id="natural-disaster-su">Natural Disaster (Su)</Pair>
<Pair title="Ability">A witch using this hex calls down the forces of nature to wreak havoc on an area. This functions as a <Link to="/spell/storm_of_vengeance">storm of vengeance</Link> combined with an <Link to="/spell/earthquake">earthquake</Link> that occurs on the second round of the effect (while acid is raining from the sky).</Pair>
<Pair title="Special">A witch must concentrate for the duration of this effect. If disrupted, the effect immediately ends. A witch can only use this ability once per day.</Pair>
</Ability>
</>};
const _summon_spirit = {title: "Summon Spirit", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="summon-spirit-sp" icon={["magic-swirl"]}>
<Pair single id="summon-spirit-sp">Summon Spirit (Sp)</Pair>
<Pair title="Ability"><p>The witch calls forth the <Link to="/template/ghost">ghost</Link> of a humanoid creature with no more than 18 Hit Dice. The ghost has its own personality and desires, but is willing to bargain with the witch, as if she had cast <Link to="/spell/greater_planar_ally">greater planar ally</Link>.</p>
<p>To seal an agreement with the witch, the ghost requires life energy equal to 1 temporary <Link to="/rule/negative_level">negative level</Link> (this is in addition to the standard payment for the ghost's service). This negative level persists as long as the ghost remains in the service of the witch; the witch can end the agreement as a <strong className="hl">standard action</strong>, immediately removing the negative level.</p>
</Pair>
</Ability>
</>};
const _witchs_hut = {title: "Witch's Hut", topLink: ["Grand Hexes","ability/grand_hexes"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 83</Link></p>
<Ability id="witchs-hut-su" icon={["magic-swirl"]}>
<Pair single id="witchs-hut-su">Witch's Hut (Su)</Pair>
<Pair title="Ability">The witch can animate a hut, small house, covered wagon, tent, or similar construction as an <Link to="/monster/animated_object">animated object</Link>. The hut can be of up to Huge size (approximately 15 feet by 15 feet). The animated hut's hardness increases to 8 and its hit points double.</Pair>
<Pair title="Ability">The witch can give the hut the following commands: <strong>guard</strong> (the hut watches for trespassers within 120 feet using the witch's Perception modifier and screams if it spots any), <strong>hide</strong> (all entrances are hidden by illusory wall spells and locked with <Link to="/spell/arcane_lock">arcane lock</Link>), and <strong>move</strong> (moves at speed 60 on giant bird or bone legs as directed by the witch, even obeying commands such as "follow me from 100 feet away").</Pair>
<Pair title="Special">The hut remains animate for 24 hours, until she dismisses it or she animates another, at which time the hut stops where it is and reverts to its nonmagical state.</Pair>
</Ability>
</>};
export default {not_found:_not_found,ameliorating:_ameliorating,aura_of_purity:_aura_of_purity,beast_of_ill_omen:_beast_of_ill_omen,blight:_blight,cackle:_cackle,cauldron:_cauldron,poison_steep:_poison_steep,witchs_bottle:_witchs_bottle,charm:_charm,child_scent:_child_scent,city_sight:_city_sight,combat_hypnosis:_combat_hypnosis,congeal:_congeal,coven:_coven,cursed_wound:_cursed_wound,dark_apothecary:_dark_apothecary,deathcall:_deathcall,discord:_discord,disguise:_disguise,disrupt_connection:_disrupt_connection,distraction:_distraction,enemy_ground:_enemy_ground,evil_eye:_evil_eye,feral_speech:_feral_speech,flight:_flight,floating_lotus:_floating_lotus,fortune:_fortune,gift_of_consumption:_gift_of_consumption,greater_gift_of_consumption:_greater_gift_of_consumption,healing:_healing,heralding_bloom:_heralding_bloom,iceplant:_iceplant,leshy_summoning:_leshy_summoning,minor_prophecy:_minor_prophecy,misfortune:_misfortune,mothers_eye:_mothers_eye,murksight:_murksight,nails:_nails,no_place_like_home:_no_place_like_home,peacebond:_peacebond,poison_touch:_poison_touch,pollute_water:_pollute_water,polluting_glance:_polluting_glance,prehensile_hair:_prehensile_hair,protective_luck:_protective_luck,scar:_scar,seduction:_seduction,sink:_sink,slumber:_slumber,soothsayer:_soothsayer,summers_heat:_summers_heat,swamp_hag:_swamp_hag,mud_witch:_mud_witch,swamps_grasp:_swamps_grasp,swine:_swine,tongues:_tongues,unnerve_beasts:_unnerve_beasts,verdant_familiar:_verdant_familiar,ward:_ward,water_lung:_water_lung,agony:_agony,animal_skin:_animal_skin,beast_eye:_beast_eye,beasts_gift:_beasts_gift,cook_people:_cook_people,delicious_fright:_delicious_fright,drugged:_drugged,false_hospitality:_false_hospitality,hags_eye:_hags_eye,harrowing_curse:_harrowing_curse,hidden_home:_hidden_home,hoarfrost:_hoarfrost,ice_tomb:_ice_tomb,infected_wounds:_infected_wounds,major_ameliorating:_major_ameliorating,major_healing:_major_healing,nightmares:_nightmares,pariah:_pariah,prophecy:_prophecy,regenerative_sinew:_regenerative_sinew,restless_slumber:_restless_slumber,retribution:_retribution,speak_in_dreams:_speak_in_dreams,steal_voice:_steal_voice,vision:_vision,waxen_image:_waxen_image,weather_control:_weather_control,witchs_bounty:_witchs_bounty,witchs_brew:_witchs_brew,witchs_charge:_witchs_charge,withering:_withering,abominate:_abominate,animal_servant:_animal_servant,curse_of_nonviolence:_curse_of_nonviolence,death_curse:_death_curse,death_interrupted:_death_interrupted,dire_prophecy:_dire_prophecy,eternal_slumber:_eternal_slumber,forced_reincarnation:_forced_reincarnation,lay_to_rest:_lay_to_rest,life_giver:_life_giver,natural_disaster:_natural_disaster,summon_spirit:_summon_spirit,witchs_hut:_witchs_hut}