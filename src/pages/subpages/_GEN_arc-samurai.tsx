import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _brawling_blademaster = {title: "Brawling Blademaster", jsx: <><h2 id="arc-samurai-brawling_blademaster-brawling-blademaster">Brawling Blademaster</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 10</Link><br/>While some martial arts traditions focus on the strength of the body, most schools of combat and self-defense know the importance of using weapons as well. Brawling blademaster samurai use weapon strikes and unarmed attacks in equal measure - foes expecting to defend themselves against a dagger or a sword are often caught off guard by a brawling blademaster's brutal kicks or punches.</p>
<Ability id="arc-samurai-brawling_blademaster-weapon-and-armor-proficiency" icon={["broken-shield"]}>
<Pair single id="arc-samurai-brawling_blademaster-weapon-and-armor-proficiency">Weapon and Armor Proficiency</Pair>
<Pair hl title="Alters">Weapon and armor proficiency</Pair>
<Pair title="Info">Brawling blademasters are proficient with all simple and martial weapons, plus the <Link to="/eq-weapon/katana">katana</Link> and <Link to="/eq-weapon/wakizashi">wakizashi</Link>. Brawling blademasters are proficient with light armor, but not with shields.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-empty-hand-ex" icon={["mailed-fist"]}>
<Pair single id="arc-samurai-brawling_blademaster-empty-hand-ex">Empty Hand (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Ability">A brawling blademaster gains <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link> as a bonus feat. She uses her samurai level as her <Link to="/class/monk">monk</Link> level for determining the amount of damage she deals with an unarmed strike. These levels stack with monk levels to determine the brawling blademaster's unarmed strike damage.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-nimble-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-brawling_blademaster-nimble-ex">Nimble (Ex)</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Ability">A brawling blademaster gains the <Link to="/class/gunslinger">gunslinger's</Link> nimble class feature, using her samurai level as his gunslinger level.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-nimble-ex" extraClasses="subAbility" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-brawling_blademaster-nimble-ex" flavor="Text from the gunslinger ability.">Nimble (Ex)</Pair>
<Pair title="Passive Ability">You gain a +1 dodge bonus to AC while wearing light or no armor. Anything that causes you to lose your Dexterity bonus to AC also causes you to lose this dodge bonus.</Pair>
<Pair title="At 6th Level">The dodge bonus becomes +2.</Pair>
<Pair title="At 10th Level">The dodge bonus increases to +3.</Pair>
<Pair title="At 14th Level">The dodge bonus becomes +4.</Pair>
<Pair title="At 18th Level">The dodge bonus increases to +5.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-dual-expertise-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="arc-samurai-brawling_blademaster-dual-expertise-ex">Dual Expertise (Ex)</Pair>
<Pair hl title="Replaces">Weapon expertise</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A brawling blademaster gains <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> as a bonus feat, even if she doesn't meet the prerequisites. Furthermore, when the brawling blademaster selects a feat with the <em>bonus feat</em> class feature, she can ignore any Dexterity requirements for the feat if its prerequisites include the Two-Weapon Fighting feat.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-harmonious-flow-ex" icon={["upgrade"]}>
<Pair single id="arc-samurai-brawling_blademaster-harmonious-flow-ex" flavor="The brawling blademaster becomes skilled at combining weapon attacks and unarmed strikes into a harmonious combat style.">Harmonious Flow (Ex)</Pair>
<Pair hl title="Replaces">Mounted archer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When attacking the target of her <em>challenge,</em> the brawling blademaster doesn't take the usual -2 penalty on attack rolls associated with attacking with two weapons if her main-hand weapon is a light or one-handed manufactured weapon and her off-hand weapon is an unarmed strike (or vice versa).</Pair>
<Pair title="Special">While she's using this ability, one of her hands must be empty even if she uses another body part to make an unarmed strike.</Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-perfect-clarity-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-brawling_blademaster-perfect-clarity-ex" flavor="The brawling blademaster sees all her foes with perfect clarity even when focused on one opponent.">Perfect Clarity (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">She no longer takes a penalty to her AC during a <em>challenge.</em></Pair>
</Ability>
<Ability id="arc-samurai-brawling_blademaster-superior-focus-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-brawling_blademaster-superior-focus-ex">Superior Focus (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Passive Ability">The brawling blademaster gains a +2 bonus on saving throws during a <em>challenge.</em></Pair>
</Ability>
</>};
const _ironbound_sword = {title: "Ironbound Sword", jsx: <><h2 id="arc-samurai-ironbound_sword-ironbound-sword">Ironbound Sword</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 20</Link><br/>The ironbound sword's fighting style, focused on incapacitating opponents rather than killing them, is founded on a philosophy that cares both for the samurai and for her attacker. This style became prevalent during the peaceful and stable periods of Lung Wa, and reflected those values. Using these techniques, an ironbound sword can subdue a foe without causing permanent harm, leaving the soul of the samurai unstained by deaths of her enemies.</p>
<Ability id="arc-samurai-ironbound_sword-merciful-combatant-ex" icon={["upgrade"]}>
<Pair single id="arc-samurai-ironbound_sword-merciful-combatant-ex" flavor="An ironbound sword becomes an expert at defeating foes without killing them.">Merciful Combatant (Ex)</Pair>
<Pair hl title="Replaces">Weapon expertise</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Passive Ability">An ironbound sword can use any weapon to deal nonlethal damage without taking the normal -4 penalty on attack rolls. Additionally, the ironbound sword gains a +2 bonus on combat maneuvers against a target so long as the last successful attack she made against that target dealt nonlethal damage.</Pair>
<Pair title="Special">Her samurai levels count as fighter levels and stack with fighter levels for the purposes of fighter and samurai prerequisites and class features.</Pair>
</Ability>
<Ability id="arc-samurai-ironbound_sword-subduing-knockout-ex" icon={["stairs-goal","armor-downgrade"]}>
<Pair single id="arc-samurai-ironbound_sword-subduing-knockout-ex">Subduing Knockout (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">Once per day, an ironbound sword can unleash a devastating attack that can instantly knock a target unconscious. She must announce this intent before making her attack roll. If the ironbound sword's attack hits and the target takes damage from the blow, the target must succeed at a Fortitude saving throw (DC = 10 + half the ironbound sword's level + the higher of the ironbound sword's Strength or Dexterity modifier) or fall unconscious for 1d6 rounds. Each round on its turn, the unconscious target can attempt a new saving throw to end the effect as a full-round action that does not provoke attacks of opportunity. Creatures immune to critical hits or nonlethal damage are immune to this ability.</Pair>
<Pair title="At 10th Level">The ironbound sword can use this ability twice per day.</Pair>
<Pair title="At 15th Level">She can use this three times per day.</Pair>
</Ability>
<Ability id="arc-samurai-ironbound_sword-blade-reversal-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-ironbound_sword-blade-reversal-ex" flavor="An ironbound sword can turn the force of an opponent's attacks back against them.">Blade Reversal (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">Whenever the ironbound sword takes a <Link to="/misc/full_defense">full defense</Link> action, she can expend an attack of opportunity to attempt to counter melee attacks made against her. This counter is a single attack roll at the ironbound blade's full base attack bonus that resolves before the enemy's attack. If the counter successfully hits the attacking enemy's AC and if the ironbound sword's attack roll is higher than the attacking creature's attack roll, the ironbound sword takes no damage from the enemy's attack and can initiate a <Link to="/rule/disarm">disarm</Link> combat maneuver against the attacking enemy as a free action. If the triggering attack was made with a natural attack or unarmed strike, a successful disarm combat maneuver renders that natural attack or unarmed strike unusable until the victim spends a standard action to reset dislocated joints.</Pair>
<Pair title="Free Action">In addition, the ironbound sword can spend one use of her <em>resolve</em> when she hits with a nonlethal attack to initiate a disarm combat maneuver against her target.</Pair>
</Ability>
</>};
const _sovereign_blade = {title: "Sovereign Blade", jsx: <><h2 id="arc-samurai-sovereign_blade-sovereign-blade">Sovereign Blade</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_dragons">Legacy of Dragons pg. 14</Link><br/>In Tian Xia, many samurai are tutored in the ways of honor using lessons that originate from sovereign dragons and their dedication to safeguarding harmony.</p>
<Ability id="arc-samurai-sovereign_blade-alignment" icon={["hazard-sign"]}>
<Pair single id="arc-samurai-sovereign_blade-alignment">Alignment</Pair>
<Pair title="Info">A sovereign blade's alignment must be at least partially neutral. If the sovereign blade's alignment is not partially neutral, she is treated as if she had violated her order's edicts each day until her alignment is again partially neutral.</Pair>
</Ability>
<Ability id="arc-samurai-sovereign_blade-dogmatic-denial-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-sovereign_blade-dogmatic-denial-ex">Dogmatic Denial (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Passive Ability">A sovereign blade gains a +2 bonus on saving throws against spells with any of the following descriptors that don't match part of the character's own alignment: chaotic, evil, good, or lawful.</Pair>
</Ability>
<Ability id="arc-samurai-sovereign_blade-golden-armor-su" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-sovereign_blade-golden-armor-su">Golden Armor (Su)</Pair>
<Pair hl title="Replaces">Mounted archer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">A sovereign blade can spend one use of her <em>resolve</em> to cause her armor to become golden for 1 round per class level, gaining energy resistance equal to 1/2 her samurai level against one energy type of her choice.</Pair>
</Ability>
<Ability id="arc-samurai-sovereign_blade-sovereign-breath-sp" icon={["tornado-discs"]}>
<Pair single id="arc-samurai-sovereign_blade-sovereign-breath-sp">Sovereign Breath (Sp)</Pair>
<Pair hl title="Replaces">Bonus feats gained at 6th, 12th, and 18th level</Pair>
<Pair title="Gained">At 6th Level</Pair>
<Pair title="Usage">1 time/day per six samurai levels<ByLevelPop levels={[[6,1],[12,2],[18,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">The sovereign blade can issue forth an immense roar similar to the breath weapon of a <Link to="/family/sovereign_dragon">sovereign dragon</Link>. This functions as <Link to="/spell/dragons_breath">dragon's breath</Link>, except it deals sonic damage in a 30-foot cone and has a caster level equal to half the sovereign blade's samurai level.</Pair>
</Ability>
</>};
const _sword_saint = {title: "Sword Saint", jsx: <><h2 id="arc-samurai-sword_saint-sword-saint">Sword Saint</h2>
<p><strong>Sources</strong> <Link to="/source/dragon_empires_primer">Dragon Empires Primer pg. 22</Link><br/>Sword saints hail from lands where samurai are prevalent, and are often <Link to="/order/ronin">ronin</Link> who wander the world seeking new challenges to perfect their intricate style of swordplay called iaijutsu. The following benefits apply only when a sword saint is using a sword and carrying nothing in his other hand.</p>
<Ability id="arc-samurai-sword_saint-iaijutsu-strike-ex" icon={["mailed-fist","broken-shield"]}>
<Pair single id="arc-samurai-sword_saint-iaijutsu-strike-ex" flavor={<>A sword saint can perform a lightning-quick <em>iaijutsu strike</em> against the target of his <em>challenge</em> to inflict devastating wounds while drawing his sword.</>}>Iaijutsu Strike (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Ability">After the sword saint has <em>challenged</em> a foe but before he has attacked the target of his <em>challenge,</em> he may choose to use his <em>iaijutsu strike</em> as a <strong className="hl">full-round action</strong>, making an attack roll with his weapon as normal. In order to use this ability, the sword saint's weapon must be sheathed at the start of his turn. If he successfully hits his opponent with an <em>iaijutsu strike,</em> his attack deals an additional +1d6 points of damage.</Pair>
<Pair title="Info">After making an <em>iaijutsu strike,</em> a sword saint takes a -4 penalty to his AC until his next turn, but his weapon is now drawn and he may continually to fight normally. Regardless of whether he hits his opponent with the <em>iaijutsu strike,</em> a sword saint cannot use this ability on the same foe more than once per day.</Pair>
<Pair title="At 5th Level">The bonus damage becomes 2d6.</Pair>
<Pair title="At 7th Level">The bonus damage increases to 3d6.</Pair>
<Pair title="At 9th Level">The bonus damage becomes 4d6.</Pair>
<Pair title="At 10th Level">A sword saint learns to focus faster and is able to make an <em>iaijutsu strike</em> as a <strong className="hl">standard action</strong>, and the penalty to his AC is reduced to -2.</Pair>
<Pair title="At 11th Level">The bonus damage increases to 5d6.</Pair>
<Pair title="At 13th Level">The bonus damage becomes 6d6.</Pair>
<Pair title="At 15th Level">The bonus damage increases to 7d6.</Pair>
<Pair title="At 17th Level">The bonus damage becomes 8d6.</Pair>
<Pair title="At 19th Level">The bonus damage increases to 9d6.</Pair>
<Pair title="Special">Any extra damage as a result of a successful <em>iaijutsu strike</em> is not multiplied by a critical hit.</Pair>
</Ability>
<Ability id="arc-samurai-sword_saint-brutal-slash-ex" icon={["upgrade"]}>
<Pair single id="arc-samurai-sword_saint-brutal-slash-ex" flavor={<>A sword saint's <em>iaijutsu strike</em> becomes even more deadly.</>}>Brutal Slash (Ex)</Pair>
<Pair hl title="Replaces">Mounted charge</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">If a sword saint threatens a critical hit with his <em>iaijutsu strike,</em> he adds a bonus equal to 1/2 his class level to the attack roll to confirm a critical hit.</Pair>
</Ability>
<Ability id="arc-samurai-sword_saint-terrifying-iaijutsu-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-samurai-sword_saint-terrifying-iaijutsu-ex" flavor={<>A sword saint's <em>iaijutsu strike</em> devastates the morale of foes that witness it.</>}>Terrifying Iaijutsu (Ex)</Pair>
<Pair hl title="Replaces">Banner</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">When a sword saint successfully hits with an <em>iaijutsu strike,</em> all foes within 30 feet must succeed at a Will save (DC 10 + 1/2 the sword saint's class level + the sword saint's Cha modifier) or become <Link to="/misc/shaken">shaken</Link> for 1d4+1 rounds.</Pair>
</Ability>
<Ability id="arc-samurai-sword_saint-roaring-iaijutsu-ex" icon={["armor-downgrade"]}>
<Pair single id="arc-samurai-sword_saint-roaring-iaijutsu-ex" flavor={<>A sword saint's <em>iaijutsu strike</em> deafens foes upon impact.</>}>Roaring Iaijutsu (Ex)</Pair>
<Pair hl title="Replaces">Greater banner</Pair>
<Pair title="Gained">At 14th Level</Pair>
<Pair title="Ability">When a sword saint successfully hits with an <em>iaijutsu strike,</em> all foes within 30 feet must succeed at a Fortitude save (DC 10 + 1/2 the sword saint's class level + the sword saint's Str modifier) or be <Link to="/misc/deafened">deafened</Link> for 1d4 minutes.</Pair>
</Ability>
</>};
const _ward_speaker = {title: "Ward Speaker", jsx: <><h2 id="arc-samurai-ward_speaker-ward-speaker">Ward Speaker</h2>
<p><strong>Sources</strong> <Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 26</Link><br/>The ward speaker draws power from simple rituals to honor the spirits found throughout the world so that he might better protect those entrusted to his care.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-samurai-ward_speaker--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Nonevil alignment</td></tr></tbody></table></ScrollContainer></div><Ability id="arc-samurai-ward_speaker-propitiation-ex-su-sp" extraClasses="hasSubs" icon={["stairs-goal","rolling-dices"]}>
<Pair single id="arc-samurai-ward_speaker-propitiation-ex-su-sp">Propitiation (Ex, Su, Sp)</Pair>
<Pair hl title="Replaces">Resolve, greater resolve, true resolve</Pair>
<Pair title="Usage">1 time/day + 1 per three samurai levels beyond 1st<ByLevelPop levels={[[1,1],[4,2],[7,3],[10,4],[13,5],[16,6],[19,7]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">A ward speaker can perform a special ritual to <em>propitiate</em> <Link to="/family/kami">kami</Link> and gain a sliver of their power. This ritual must be performed at a shrine or a location warded by a specific type of kami. The <em>propitiation</em> takes 1 minute and involves clapping, ringing bells, bowing, and token offerings of coins, food, incense, or other gifts. The ward speaker's <em>propitiation</em> must be performed uninterrupted to receive any benefits from it. At the end of this ritual, the ward speaker immediately gains a <em>fortune</em> depending on the type of kami he sought to <em>propitiate.</em></Pair>
<Pair title="Immediate Action">The ward speaker can dismiss the <em>fortune</em> to reroll one d20 roll before the results of the roll are revealed; he must use the result of the second roll, even if it's worse.</Pair>
<Pair title="Special">If not dismissed, a <em>fortune</em> remains in effect until the ward speaker regains the use of his daily abilities, at which point the <em>fortune</em> and its benefits end. If a ward speaker dismisses a <em>fortune</em> to receive a benefit based on the specific kami he <em>propitiated</em> (see below), he does not also gain the reroll described here. He can maintain only one <em>fortune</em> at a time; performing a <em>propitiation</em> while he already has a <em>fortune</em> active ends the previous <em>fortune</em> and its benefits.</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-jinushigami-ex-sp" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-samurai-ward_speaker-jinushigami-ex-sp">Jinushigami (Ex, Sp)</Pair>
<Pair title="Passive Ability">The ward speaker (and his mount, if he has one) gains a 10-foot enhancement bonus to base speed.</Pair>
<Pair title="At 9th Level">This enhancement bonus increases to 20 feet.</Pair>
<Pair title="At 17th Level">Once per day, he can dismiss this <em>fortune</em> as an <strong className="hl">immediate action</strong> to cast <Link to="/spell/earthquake">earthquake</Link> as a spell-like ability, using his samurai level as his caster level.</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-kodama-su" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="arc-samurai-ward_speaker-kodama-su">Kodama (Su)</Pair>
<Pair title="Standard Action">The ward speaker can afflict one target that can see him with a distracting <Link to="/umr/gaze">gaze</Link>. If the target fails a Will save (DC = 10 + half the ward speaker's samurai level), it is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
<Pair title="At 9th Level">It is instead staggered for 2d4 rounds.</Pair>
<Pair title="At 17th Level">It is instead staggered for 1 minute.</Pair>
<Pair title="Special">Once a creature has been targeted by this ability, it cannot be targeted by it again for 24 hours</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-shikigami-ex" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-ward_speaker-shikigami-ex">Shikigami (Ex)</Pair>
<Pair title="Ability">The ward speaker gains <Link to="/feat/catch_off_guard">Catch Off-Guard</Link> and <Link to="/feat/throw_anything">Throw Anything</Link> as bonus feats.</Pair>
<Pair title="At 9th Level">He gains <Link to="/feat/toughness">Toughness</Link> and <Link to="/feat/step_up">Step Up</Link>.</Pair>
<Pair title="At 17th Level">He gains <Link to="/feat/following_step">Following Step</Link> and <Link to="/feat/step_up_and_strike">Step Up and Strike</Link>, even if he does not meet the prerequisites.</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-toshigami-sp" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="arc-samurai-ward_speaker-toshigami-sp">Toshigami (Sp)</Pair>
<Pair title="Ability">The ward speaker can speak with plants, as the <Link to="/spell/speak_with_plants">speak with plants</Link> spell.</Pair>
<Pair title="At 9th Level">The ward speaker can dismiss this <em>fortune</em> as an <strong className="hl">immediate action</strong> to cast <Link to="/spell/haste">haste</Link> as a spell-like ability.</Pair>
<Pair title="At 17th Level">Once per day, the ward speaker can instead dismiss this <em>fortune</em> to cast <Link to="/spell/temporal_stasis">temporal stasis</Link> as a spell-like ability.</Pair>
<Pair title="Special">The ward speaker's caster level for these spell-like abilities is equal to his samurai level.</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-zuishin-sp" extraClasses="subAbility" icon={["heart-plus"]}>
<Pair single id="arc-samurai-ward_speaker-zuishin-sp">Zuishin (Sp)</Pair>
<Pair title="Immediate Action">The ward speaker can dismiss this <em>fortune</em> to cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> as a spell-like ability.</Pair>
<Pair title="At 9th Level">The ward speaker can dismiss this <em>fortune</em> to cast <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/lesser_restoration">lesser restoration</Link>, <Link to="/spell/remove_curse">remove curse</Link>, or <Link to="/spell/remove_disease">remove disease</Link>.</Pair>
<Pair title="At 17th Level">He also adds <Link to="/spell/breath_of_life">breath of life</Link> and <Link to="/spell/heal">heal</Link> to this list.</Pair>
<Pair title="Special">The ward speaker's caster level for these spell-like abilities is equal to his samurai level.</Pair>
</Ability>
<Ability id="arc-samurai-ward_speaker-resilient-stand-ex" icon={["rolling-dices"]}>
<Pair single id="arc-samurai-ward_speaker-resilient-stand-ex" flavor="The spirits can bolster a ward speaker's willpower and resolve, granting him an inner reservoir he can use when he needs it most.">Resilient Stand (Ex)</Pair>
<Pair hl title="Alters">Honorable stand</Pair>
<Pair title="Gained">At 11th Level</Pair>
<Pair title="Ability">If a ward speaker has not expended his daily uses of <em>propitiation,</em> he can call upon the spirits to reroll a saving throw during an <em>honorable stand</em> instead of expending a use of <em>resolve</em> to do so. He must take the result of the second roll, even if it is worse. This expends a daily use of <em>propitiation.</em></Pair>
</Ability>
</>};
const _warrior_poet = {title: "Warrior Poet", jsx: <><h2 id="arc-samurai-warrior_poet-warrior-poet">Warrior Poet</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 13</Link><br/>Warrior poets often study calligraphy, flower arrangement, poetry, and other courtly arts, but when called to battle, they treat combat as its own art form, fighting with beauty and grace. While these traditions first arose among the Jininese elves and are still extremely common in Jinin, the warrior poet's art has spread to different nations and peoples in Tian Xia over centuries.</p>
<Ability id="arc-samurai-warrior_poet-dancers-grace-ex" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-warrior_poet-dancers-grace-ex">Dancer's Grace (Ex)</Pair>
<Pair hl title="Replaces">Proficiency with medium armor, heavy armor, and shields</Pair>
<Pair title="Passive Ability">When wearing no armor and not using a shield, the warrior poet gains a bonus to Armor Class equal to her Charisma bonus (to a maximum of her samurai level). A warrior poet loses this bonus while <Link to="/rule/flat_footed">flat-footed</Link> or otherwise denied her Dexterity bonus.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-flourish-ex" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-flourish-ex" flavor="The warrior poet is skilled at performing elegant moves in battle.">Flourish (Ex)</Pair>
<Pair hl title="Replaces">Mount, weapon expertise, banner, greater banner</Pair>
<Pair title="At 1st Level">The warrior poet gains a flourish of her choice from the list below.</Pair>
<Pair title="At 3rd Level">She gains another flourish.</Pair>
<Pair title="At 5th Level">She gains another flourish.</Pair>
<Pair title="At 9th Level">She gains another flourish.</Pair>
<Pair title="At 13th Level">She gains another flourish.</Pair>
<Pair title="At 17th Level">She gains another flourish.</Pair>
<Pair title="At 20th Level">She gains another flourish.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-chrysanthemums-blooming" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-chrysanthemums-blooming">Chrysanthemum's Blooming</Pair>
<Pair title="Prerequisites">11th-level samurai</Pair>
<Pair title="Ability">The warrior poet gains <Link to="/feat/vital_strike">Vital Strike</Link> as a bonus feat and can apply its benefit when using <Link to="/feat/spring_attack">Spring Attack</Link>.</Pair>
<Pair title="At 16th Level">If the warrior poet has <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link>, she can apply that feat's benefit instead.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-exodus-of-jinin" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="arc-samurai-warrior_poet-exodus-of-jinin">Exodus of Jinin</Pair>
<Pair title="Passive Ability">As long as the warrior poet is wearing light or no armor and carrying no more than a light load, her land speed increases by 10 feet.</Pair>
<Pair title="Special">A warrior poet can select this flourish up to three times.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-harmony-of-the-tranquil-garden" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-harmony-of-the-tranquil-garden">Harmony of the Tranquil Garden</Pair>
<Pair title="Move-Equivalent Action">The warrior poet can focus her senses to gain <Link to="/umr/blindsense">blindsense</Link> out to 5 feet for 1 round.</Pair>
<Pair title="At 10th Level">The range of her blindsense becomes 10 feet.</Pair>
<Pair title="At 15th Level">The range of her blindsense increases to 15 feet.</Pair>
<Pair title="At 20th Level">The range of her blindsense becomes 20 feet.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-jininsiels-guidance" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-jininsiels-guidance">Jininsiel's Guidance</Pair>
<Pair title="Prerequisites">4th-level samuari</Pair>
<Pair title="Ability">The warrior poet gains the rogue's <Link to="/ability/uncanny_dodge">uncanny dodge</Link> class feature.</Pair>
<Pair title="Special">This flourish can be selected a second time beginning at 8th level; the warrior poet then gains the rogue's <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> class feature.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-kitsunes-mystique" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-kitsunes-mystique">Kitsune's Mystique</Pair>
<Pair title="Ability">The warrior poet gains <Link to="/feat/improved_feint">Improved Feint</Link> as a bonus feat, ignoring its prerequisites. When the warrior poet uses Spring Attack or takes a move action to move, she can attempt to feint against one creature she threatens during her movement as part of her movement.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-petals-on-the-wind" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-petals-on-the-wind">Petals on the Wind</Pair>
<Pair title="Ability">Whenever a foe provokes an attack of opportunity from the warrior poet, she can move 5 feet before making the attack of opportunity. This movement does not provoke attacks of opportunity. If the warrior poet takes an action to move during her next turn, she subtracts 5 feet from her total movement for each time she has used this ability since her last turn.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-wrath-of-the-heavens" extraClasses="subAbility" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-wrath-of-the-heavens">Wrath of the Heavens</Pair>
<Pair title="Ability">The warrior poet gains <Link to="/feat/shot_on_the_run">Shot on the Run</Link> as a bonus feat, ignoring its prerequisites.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-graceful-warrior-ex" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-graceful-warrior-ex">Graceful Warrior (Ex)</Pair>
<Pair title="Ability">The warrior poet gains <Link to="/feat/weapon_finesse">Weapon Finesse</Link> as a bonus feat and can apply its benefits to <Link to="/eq-weapon/glaive">glaives</Link>, <Link to="/eq-weapon/katana">katanas</Link>, and <Link to="/eq-weapon/naginata">naginatas</Link> as if they were light weapons. This does not alter the weapons' properties for the purposes of any other effects.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-skirmishers-challenge-ex" icon={["broken-shield"]}>
<Pair single id="arc-samurai-warrior_poet-skirmishers-challenge-ex">Skirmisher's Challenge (Ex)</Pair>
<Pair hl title="Alters">Challenge</Pair>
<Pair title="Ability">The warrior poet adds her samurai level to her damage rolls only on her first successful attack against a <em>challenged</em> target each round.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-graceful-strike-ex" icon={["upgrade"]}>
<Pair single id="arc-samurai-warrior_poet-graceful-strike-ex">Graceful Strike (Ex)</Pair>
<Pair hl title="Replaces">Mounted archer, demanding challenge</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">When the warrior poet uses Weapon Finesse to make a melee attack that adds her Dexterity bonus to attack rolls and her Strength bonus to damage rolls, she also adds half her samurai level to damage rolls.</Pair>
</Ability>
<Ability id="arc-samurai-warrior_poet-battle-dance-ex" icon={["stairs-goal"]}>
<Pair single id="arc-samurai-warrior_poet-battle-dance-ex">Battle Dance (Ex)</Pair>
<Pair hl title="Replaces">Bonus combat feats</Pair>
<Pair title="At 6th Level">The warrior poet gains Spring Attack as a bonus feat.</Pair>
<Pair title="At 12th Level">She gains <Link to="/feat/improved_spring_attack">Improved Spring Attack</Link> as a bonus feat.</Pair>
<Pair title="At 18th Level">She gains <Link to="/feat/greater_spring_attack">Greater Spring Attack</Link> as a bonus feat.</Pair>
<Pair title="Special">The warrior poet does not need to meet the prerequisites for these feats.</Pair>
</Ability>
</>};
const _yojimbo = {title: "Yojimbo", jsx: <><h2 id="arc-samurai-yojimbo-yojimbo">Yojimbo</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 7</Link><br/>Yojimbo are highly trained bodyguards favored by the nobles and warlords of distant Minkai. Yojimbo who follow the order of the warrior loyally guard a single master, while ronin serve whoever can pay for their protection. Yojimbo often accompany visitors to the Inner Sea region from Tian Xia; a few have chosen to stay, and some have even passed on their training to bodyguards of this region.</p>
<Ability id="arc-samurai-yojimbo-resolute-defense-ex" icon={["shield-reflect","upgrade"]}>
<Pair single id="arc-samurai-yojimbo-resolute-defense-ex">Resolute Defense (Ex)</Pair>
<Pair hl title="Replaces">Mount</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Whenever a yojimbo issues a challenge, he can select one ally as his ward for the duration of the challenge. Whenever the yojimbo is adjacent to his ward, he can use <em>resolve, greater resolve,</em> and <em>true resolve</em> on his ward rather than targeting himself.</Pair>
</Ability>
<Ability id="arc-samurai-yojimbo-armor-expertise-ex" extraClasses="hasSubs" icon={["armor-upgrade"]}>
<Pair single id="arc-samurai-yojimbo-armor-expertise-ex">Armor Expertise (Ex)</Pair>
<Pair hl title="Replaces">Weapon expertise</Pair>
<Pair title="Gained">At 3rd Level</Pair>
<Pair title="Ability">A yojimbo selects one type of armor, such as <Link to="/eq-armor/chain_shirt">chain shirt</Link> or <Link to="/eq-armor/scale_mail">scale mail</Link>. The yojimbo gains <em>armor training,</em> treating his samurai level as his <Link to="/class/fighter">fighter</Link> level, when wearing the selected armor.</Pair>
</Ability>
<Ability id="arc-samurai-yojimbo-armor-training-ex" icon={["upgrade"]}>
<Pair single id="arc-samurai-yojimbo-armor-training-ex" flavor="Text from the fighter class ability.">Armor Training (Ex)</Pair>
<Pair title="At 3rd Level">Whenever you wear armor, you reduce the armor check penalty by 1 (to a minimum of 0) and increase the maximum Dexterity bonus allowed by the armor by 1. You can also move at your normal speed while wearing medium armor.</Pair>
<Pair title="At 7th Level">The penalty is now reduced by 2 (minimum 0) and the maximum Dex bonus is now increased by +2. You can also move at your normal speed while wearing heavy armor.</Pair>
<Pair title="At 11th Level">The penalty is now reduced by 3 (minimum 0) and the maximum Dex bonus is now increased by +3.</Pair>
<Pair title="At 15th Level">The penalty is now reduced by 4 (minimum 0) and the maximum Dex bonus is now increased by +4.</Pair>
</Ability>
<Ability id="arc-samurai-yojimbo-intercept-ex" icon={["stairs-goal","shield-reflect"]}>
<Pair single id="arc-samurai-yojimbo-intercept-ex" flavor="A yojimbo learns to better disrupt the attacks of his enemies.">Intercept (Ex)</Pair>
<Pair hl title="Replaces">Mounted archer</Pair>
<Pair title="Gained">At 4th Level</Pair>
<Pair title="Ability">He gains <Link to="/feat/bodyguard">Bodyguard</Link> as a bonus feat, even if he does not meet the prerequisite. In addition, whenever the yojimbo uses the <Link to="/rule/aid_another_2">aid another</Link> action to increase an ally's Armor Class, the bonus to Armor Class from the aid another action increases by 1.</Pair>
</Ability>
</>};
export default {brawling_blademaster:_brawling_blademaster,ironbound_sword:_ironbound_sword,sovereign_blade:_sovereign_blade,sword_saint:_sword_saint,ward_speaker:_ward_speaker,warrior_poet:_warrior_poet,yojimbo:_yojimbo}