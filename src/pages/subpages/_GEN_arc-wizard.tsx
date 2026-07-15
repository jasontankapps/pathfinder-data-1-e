import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import ByLevelPop from '../../components/ByLevelPop';
const _arcane_bomber = {title: "Arcane Bomber", jsx: <><h2 id="arc-wizard-arcane_bomber-arcane-bomber">Arcane Bomber</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 75</Link><br/>To many wizards, the experimentation of the alchemist seems quaint, if not dangerous or frightening. A few wizards take up the secrets of the bomb, however, fusing alchemy with their already considerable magical power.</p>
<Ability id="bomb-su" extraClasses="hasSubs" icon={["bowman"]}>
<Pair single id="bomb-su">Bomb (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The arcane bomber gains an ability nearly identical to the <Link to="/class/alchemist">alchemist's</Link> <em>bomb</em> ability. Unlike the alchemist, at 1st level, the arcane bomber chooses one type of energy from the following list: acid, cold, fire, and electricity. He can throw bombs of that type, but cannot modify them with discoveries. This ability stacks with the alchemist <em>bomb</em> ability to determine the level of bomb damage, but an arcane bomber that becomes an alchemist does not gain that class's <em>bomb</em> ability, nor does an alchemist that becomes an arcane bomber gain this <em>bomb</em> ability.</Pair>
</Ability>
<Ability id="bomb-su" extraClasses="subAbility" icon={["smoking-finger"]}>
<Pair single id="bomb-su" flavor="Relevant text from the alchemist class ability.">Bomb (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">You can use a number of bombs each day equal to your class level + your Intelligence modifier.</Pair>
<Pair title="Standard Action">You can make and throw bombs. Drawing the components of, creating, and throwing a bomb is a single action. Thrown bombs have a range of 20 feet and use the <Link to="/rule/throw_splash_weapon">Throw Splash Weapon special attack</Link>. On a direct hit, your bomb inflicts 1d6 points of fire damage + additional damage equal to your Intelligence modifier (this bonus damage is not multiplied on a critical hit or by using feats such as <Link to="/feat/vital_strike">Vital Strike</Link>).</Pair>
<Pair title="Info"><p>In addition to magical extracts, alchemists are adept at swiftly mixing various volatile chemicals and infusing them with their magical reserves to create powerful bombs that they can hurl at their enemies. Bombs are unstable, and if not used in the round they are created, they degrade and become inert - their method of creation prevents large volumes of explosive material from being created and stored. In order to create a bomb, you must use a small vial containing an ounce of liquid catalyst - you can create this liquid catalyst from small amounts of chemicals from an alchemy lab, and these supplies can be readily refilled in the same manner as a spellcaster's component pouch. Most alchemists create a number of catalyst vials at the start of the day equal to the total number of bombs they can create in that day - once created, a catalyst vial remains usable by you for years.</p>
<p>Bombs are considered weapons and can be selected using feats such as <Link to="/feat/point_blank_shot">Point-Blank Shot</Link> and <Link to="/feat/weapon_focus">Weapon Focus</Link>. Your bombs become inert if used or carried by anyone else.</p>
</Pair>
<Pair title={<>Provokes <Link to="/rule/aoo">AoO?</Link></>}>Yes</Pair>
<Pair title="At 3rd Level">The base bomb damage becomes 2d6.</Pair>
<Pair title="At 5th Level">The base bomb damage becomes 3d6.</Pair>
<Pair title="At 7th Level">The base bomb damage becomes 4d6.</Pair>
<Pair title="At 9th Level">The base bomb damage becomes 5d6.</Pair>
<Pair title="At 11th Level">The base bomb damage becomes 6d6.</Pair>
<Pair title="At 13th Level">The base bomb damage becomes 7d6.</Pair>
<Pair title="At 15th Level">The base bomb damage becomes 8d6.</Pair>
<Pair title="At 17th Level">The base bomb damage becomes 9d6.</Pair>
<Pair title="At 19th Level">The base bomb damage becomes 10d6.</Pair>
<Pair title="Special">Splash damage from your bomb is always equal to the bomb's minimum damage (so if the bomb would deal 1d6+4 points of fire damage on a direct hit, its splash damage would be 5 points of fire damage). Those caught in the splash damage can attempt a Reflex save for half damage, with a DC equal to 10 + <Link to="/misc/half">half</Link> your alchemist level + your Intelligence modifier.</Pair>
</Ability>
<Ability id="spellblast-bombs-su" icon={["upgrade","spell-book"]}>
<Pair single id="spellblast-bombs-su">Spellblast Bombs (Su)</Pair>
<Pair hl title="Replaces">Cantrips</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">An arcane bomber can sacrifice one of his spells to empower the next bomb he throws during his turn. When he does, he gains a bonus to hit with the next bomb he throws before the end of his turn equal to the level of the spell he sacrificed, and a bonus to damage equal to twice the level of the spell.</Pair>
<Pair title="Ability">The arcana bomber gains the <Link to="/spell/detect_magic">detect magic</Link> and <Link to="/spell/read_magic">read magic</Link> cantrips and places them in his spellbook. He can cast either of these as 1st-level spells.</Pair>
</Ability>
<Ability id="school-of-the-bomb" icon={["broken-shield"]}>
<Pair single id="school-of-the-bomb">School of the Bomb</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Info">The creation and use of bombs is often so engrossing or intellectually taxing that an arcane bomber forsakes four schools of magic. These opposition schools are chosen at 1st level and cannot be changed later. An arcane bomber who prepares spells from his opposition school must use two spell slots of that level to prepare the spell.</Pair>
<Pair title="Passive Ability">In addition, the arcane bomber takes a -4 penalty on any skill checks made when crafting a magic item that has a spell from one of his opposition schools.</Pair>
</Ability>
</>};
const _arcane_physician = {title: "Arcane Physician", jsx: <><h2 id="arc-wizard-arcane_physician-arcane-physician">Arcane Physician</h2>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook pg. 6</Link><br/>Arcane physicians use their scholarly knowledge and arcane mastery to achieve incredible feats of medicine. Most worship <Link to="/faith/qi_zhong">Qi Zhong</Link>, <Link to="/faith/nethys">Nethys</Link>, or other patrons of disparate sorts of magic.</p>
<Ability id="medicinal-alchemy" icon={["spell-book","stairs-goal"]}>
<Pair single id="medicinal-alchemy">Medicinal Alchemy</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Info">The arcane physician treats all spells of the healing subschool on the <Link to="/main/spells_alchemist">alchemist extract list</Link> as if they were on the wizard spell list for the purpose of activating magic items.</Pair>
<Pair title="Ability">Additionally, he can expend a spell slot of the appropriate level to meet the spell requirements for magic item construction (including potions) as if the expended spell slot contained any alchemist spell that belongs to the healing subschool. If the spell is on both the wizard and alchemist lists, the arcane physician may expend a slot equal to the spell's alchemist level instead of the spell's wizard level.</Pair>
<Pair title="At 8th Level">The arcane physician can expend a spell slot of 1st level or higher as a <strong className="hl">standard action</strong> to alter a potion or <Link to="/main/equipment_alchemical">alchemical remedy</Link> held in hand. An alchemical remedy can become any other alchemical remedy of the same or lower price of the arcane physician's choice. A potion can change to contain any alchemist extract of the arcane physician's choice that belongs to the healing subschool and is of the same level as or lower than the expended spell slot. The extract must have no material component costing more than 1 gp, and it must be one that it is possible to make into a potion.</Pair>
</Ability>
<Ability id="brew-potion" icon={["stairs-goal"]}>
<Pair single id="brew-potion">Brew Potion</Pair>
<Pair hl title="Replaces">Scribe scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An arcane physician gains <Link to="/feat/brew_potion">Brew Potion</Link> as a bonus feat.</Pair>
</Ability>
</>};
const _arcane_warden = {title: "Arcane Warden", jsx: <><h2 id="arc-wizard-arcane_warden-arcane-warden">Arcane Warden</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 14</Link><br/>In the aftermath of Earthfall, some elven wizards from Mierani chose to remain behind and provide aid to others. These elves were and still are highly honored by their kin, as they sacrificed the easy comfort and refuge of Castrovel to brave the wreckage of Earthfall in order to save what short-lived human lives they could. Although Golarion has long since recovered from Earthfall, the elven arcane warden traditions remain particularly useful for those who face long-term explorations of hostile environments - whether on Golarion or the planes beyond. The arcane wardens of today are wizards who specialize in the discovery or generation of places of safety and refuge.</p>
<Ability id="universal-magic" icon={["info"]}>
<Pair single id="universal-magic">Universal Magic</Pair>
<Pair hl title="Alters">Arcane school</Pair>
<Pair title="Info">An arcane warden values all schools of magic and recognizes that, faced with an unpredictable world, versatility is one of the greatest tools for survival. All arcane warden wizards must be <Link to="/arcaneschool/universalist">universalists</Link>.</Pair>
</Ability>
<Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/climb">Climb</Link> (STR), <Link to="/skill/heal">Heal</Link> (WIS), <Link to="/skill/survival">Survival</Link> (WIS), <Link to="/skill/swim">Swim</Link> (STR)</Pair>
<Pair title="Removed Skills">Appraise, Fly, Knowledge (nobility), Linguistics</Pair></Ability>
<Ability id="ready-for-anything-ex" icon={["stairs-goal"]}>
<Pair single id="ready-for-anything-ex" flavor="Instead of crafting magical items or learning ways to manipulate metamagic, arcane wardens prefer to spend their time providing safety and refuge for others.">Ready for Anything (Ex)</Pair>
<Pair hl title="Replaces">Scribe Scroll, 5th-, 10th-, 15th-, and 20th-level bonus feats</Pair>
<Pair title="At 1st Level">An arcane warden gains a bonus feat associated with aiding allies or providing shelter. The arcane warden must qualify for any feat he takes, and must choose from the following list: <Link to="/feat/alertness">Alertness</Link>, <Link to="/feat/endurance">Endurance</Link>, <Link to="/feat/great_fortitude">Great Fortitude</Link>, <Link to="/feat/improved_great_fortitude">Improved Great Fortitude</Link>, <Link to="/feat/leadership">Leadership</Link>, <Link to="/feat/self_sufficient">Self-Sufficient</Link>, <Link to="/feat/skill_focus">Skill Focus</Link> (Survival), <Link to="/feat/toughness">Toughness</Link>, or any <Link to="/main/teamwork_feat">teamwork feat</Link>.</Pair>
<Pair title="At 5th Level">The arcane warden gains an additional bonus feat.</Pair>
<Pair title="At 10th Level">The arcane warden gains an additional bonus feat.</Pair>
<Pair title="At 15th Level">The arcane warden gains an additional bonus feat.</Pair>
<Pair title="At 20th Level">The arcane warden gains an additional bonus feat.</Pair>
</Ability>
<Ability id="generous-touch-su" icon={["upgrade"]}>
<Pair single id="generous-touch-su" flavor="Arcane wardens are talented at enhancing the magical effects they create to bolster allies.">Generous Touch (Su)</Pair>
<Pair hl title="Replaces"><em>Hand of the apprentice</em> universalist school ability</Pair>
<Pair title="Ability">When an arcane warden casts a spell with a target of "creature touched" on a willing target other than himself, he can cause the effects of the spell to last longer than normal. A spell with a duration of 1 round per level lasts an additional number of rounds equal to the arcane warden's Intelligence modifier (minimum of 1 additional round). A spell with a duration of 1 minute per level lasts for an additional number of minutes equal to the arcane warden's Intelligence modifier (minimum of 1 additional minute). Spells with different durations than this are not enhanced by this ability. Only one spell can be enhanced in this way on any individual creature at a time.</Pair>
</Ability>
<Ability id="restorative-shelter-su" icon={["spell-book","upgrade","armor-upgrade"]}>
<Pair single id="restorative-shelter-su" flavor="While an arcane warden can find refuge in many naturally occurring hideaways, his preferred places of rest are magically created cottages, homes, and even manors.">Restorative Shelter (Su)</Pair>
<Pair hl title="Replaces"><em>Metamagic mastery</em> universalist school ability</Pair>
<Pair title="Ability">An arcane warden learns the following spells: <Link to="/spell/mages_magnificent_mansion">mage's magnificent mansion</Link>, <Link to="/spell/rope_trick">rope trick</Link>, <Link to="/spell/secure_shelter">secure shelter</Link>, and <Link to="/spell/tiny_hut">tiny hut</Link>. These spells do not take up room in the arcane warden's spellbook, and he does not need his spellbook to prepare these spells. He must still be the appropriate level to prepare the spell in question.</Pair>
<Pair title="Special">The arcane warden's caster level is treated as 2 higher than his actual caster level for the purposes of determining the duration of these spells and resolving attempts to dispel these spells. Any creature that spends at least 8 hours relaxing in one of these shelters gains a bonus equal to the level of the spell that created it on any saving throws against disease or poison effects made in the next 24 hours.</Pair>
</Ability>
</>};
const _bonded_wizard = {title: "Bonded Wizard", jsx: <><h2 id="arc-wizard-bonded_wizard-bonded-wizard">Bonded Wizard</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 17</Link><br/>Many wizards form an arcane bond with an item, but for some this bond becomes a powerful mystic union.</p>
<Ability id="arcane-bond-ex" icon={["info"]}>
<Pair single id="arcane-bond-ex">Arcane Bond (Ex)</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Info">A bonded wizard must select an item as her <em>arcane bond.</em> The bonded object's hit point and hardness increase by +1 per level the bonded wizard possesses.</Pair>
</Ability>
<Ability id="hidden-bond-sp" icon={["magic-swirl"]}>
<Pair single id="hidden-bond-sp">Hidden Bond (Sp)</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Ability">A bonded wizard can change the appearance and magical aura of her bonded item at will, as if using <Link to="/spell/disguise_self">disguise self</Link> and <Link to="/spell/magic_aura">magic aura</Link>, but affecting only the item; for the purpose of <em>disguise self,</em> the item's item type (such as weapon or ring) is its creature type.</Pair>
</Ability>
<Ability id="bonded-force-su" icon={["magic-swirl"]}>
<Pair single id="bonded-force-su">Bonded Force (Su)</Pair>
<Pair hl title="Replaces">5th- and 15th-level bonus feats</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Info">A bonded wizard wearing or wielding her bonded object can channel magical energies through it to create tools, armor, and weapons from pure force. She gains a pool of force points equal to half his wizard level.</Pair>
<Pair title="Standard Action">She can expend 1 point from his force pool to create an effect that acts as <Link to="/spell/mage_armor">mage armor</Link> (lasting 1 hour), <Link to="/spell/shield">shield</Link> (lasting 1 minute), or <Link to="/spell/spiritual_weapon">spiritual weapon</Link> (any simple or martial weapon, using her Intelligence modifier to determine its attack bonus rather than Wisdom and lasting 1 round per wizard level). These effects are visible; they take the appearance of armor, shields, or weapons as appropriate, and they always have some visual detail reminiscent of the wizard's bonded item (such as the pattern of a bonded ring appearing as decoration on a <em>mage armor</em> or <em>shield</em> effect).</Pair>
<Pair title="Ability">Alternatively, the bonded wizard can expend a point from her force pool to create a <em>tool of force,</em> which functions as a masterwork version of a simple tool of her choice that could be reproduced by a <Link to="/magic-wondrous/travelers_any_tool">traveler's any-tool</Link>. The <em>tool</em> has the same AC and durability as a <em>spiritual weapon</em> and lasts for 10 minutes. The circumstance bonus the <em>tool of force</em> grants to appropriate skill checks starts at +2 (as masterwork tools).</Pair>
<Pair title="At 9th Level"><p>When the bonded wizard uses <em>bonded force</em> for <em>mage armor,</em> the armor bonus increases by 1; when she uses <em>bonded force</em> for <em>shield,</em> the shield bonus increases by 1; and she gains a +1 enhancement bonus on attack and damage rolls when using <em>bonded force</em> for <em>spiritual weapon.</em></p>
<p>The bonus for the <em>tool of force</em> increases to +3.</p>
</Pair>
<Pair title="At 13th Level">The increases for <em>mage armor</em> and <em>shield</em> and the enhancement bonus for <em>spiritual weapon</em> now improve by an additional 2, and the bonus for the <em>tool of force</em> becomes +4.</Pair>
<Pair title="At 17th Level">The increases for <em>mage armor</em> and <em>shield</em> and the enhancement bonus for <em>spiritual weapon</em> now improve by an additional 3, and the bonus for the <em>tool of force</em> becomes +5.</Pair>
<Pair title="Special">When she uses <em>bonded force</em> for <em>spiritual weapon,</em> the bonded wizard can choose to reduce this enhancement bonus by 1 to double the <em>spiritual weapon's</em> critical threat range as the <Link to="/magic-enh/keen">keen</Link> weapon property, and for <em>mage armor</em> or <em>shield,</em> she can choose to reduce the armor or shield bonus by 1 to protect herself from critical hits and sneak attacks as the <Link to="/magic-enh/light_fortification">light fortification</Link> armor property. A bonded wizard can only have one instance of <em>bonded force</em> active at a time. If she uses this ability again, any previously created force construct immediately ends.</Pair>
</Ability>
<Ability id="reshape-bond-sp" icon={["magic-swirl"]}>
<Pair single id="reshape-bond-sp">Reshape Bond (Sp)</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Full-Round Action">A bonded wizard can repair her bonded item or turn it into another object once per day. Transforming it functions as <Link to="/spell/polymorph_any_object">polymorph any object</Link>, but does not alter the item's magical properties (including its item slot), while repairing it functions as <Link to="/spell/make_whole">make whole</Link>. The wizard may also sacrifice a prepared spell in order to repair an additional 1d6 points of damage per level of the sacrificed spell.</Pair>
</Ability>
</>};
const _chronomancer = {title: "Chronomancer", jsx: <><h2 id="arc-wizard-chronomancer-chronomancer">Chronomancer</h2>
<p><strong>Sources</strong> <Link to="/source/legacy_of_the_first_world">Legacy of the First World pg. 30</Link><br/>Time is not an immutable force but an inscrutable phenomenon. Rare arcane scholars known as chronomancers demonstrate the ability to shift themselves in short bursts between the past, future, and alternate presents.</p>
<Ability id="temporal-pool-su" icon={["magic-swirl"]}>
<Pair single id="temporal-pool-su">Temporal Pool (Su)</Pair>
<Pair title="Ability">A chronomancer gains a reservoir of temporal energy to manipulate the time stream in a variety of ways listed below. This temporal pool has a number of points equal to half his class level + his Intelligence modifier (minimum 1). This pool refreshes once per day when the chronomancer prepares his spells.</Pair>
</Ability>
<Ability id="forewarned" icon={["rolling-dices","upgrade","armor-upgrade"]}>
<Pair single id="forewarned">Forewarned</Pair>
<Pair title="Ability">The chronomancer can expend 1 point from his temporal pool when he rolls initiative to allow himself or an ally within 30 feet to roll 1d4 and add it to that character's initiative result.</Pair>
<Pair title="At 5th Level">The chronomancer can expend 2 points from his temporal pool as an <strong className="hl">immediate action</strong> to apply this benefit to a saving throw he has just rolled (but before the result is revealed).</Pair>
<Pair title="At 10th Level">The die size increases to 1d6.</Pair>
</Ability>
<Ability id="rewind" icon={["magic-swirl"]}>
<Pair single id="rewind">Rewind</Pair>
<Pair title="Immediate Action">After losing a spell due to a failed <Link to="/rule/concentration">concentration</Link> check or after casting a spell that had no effect (such as due to successful saving throws, a failed caster level check to overcome spell resistance, or other immunities), the chronomancer can expend a number of points from his temporal pool equal to half the spell's level (minimum 1) to immediately prepare the spell again, as if it had not been cast. Any material components expended in the original casting remain expended, as are actions used to cast the original spell.</Pair>
</Ability>
<Ability id="accelerate" icon={["magic-swirl"]}>
<Pair single id="accelerate">Accelerate</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">When casting a spell, the chronomancer can expend 2 points from his temporal pool to apply the effects of <Link to="/spell/haste">haste</Link> to one creature affected by the spell until the end of the chronomancer's next turn.</Pair>
</Ability>
<Ability id="complex-contingency" icon={["magic-swirl"]}>
<Pair single id="complex-contingency">Complex Contingency</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">The chronomancer can specify two trigger conditions when casting <Link to="/spell/contingency">contingency</Link>.</Pair>
<Pair title="Immediate Action">In addition, when the chronomancer's <em>contingency</em> would trigger, the chronomancer can expend 1 point from his temporal pool to prevent the <em>contingency</em> from triggering, saving the stored effect for later.</Pair>
</Ability>
<Ability id="parallel-self" icon={["magic-swirl"]}>
<Pair single id="parallel-self">Parallel Self</Pair>
<Pair hl title="Replaces">Arcane bond, 10th-, 15th-, and 20th-level bonus feats</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">If the chronomancer is killed, he can immediately expend 10 points from his temporal pool to summon an alternate version of himself from a parallel existence, appearing up to 30 feet away. This alternate version is identical to the chronomancer except he is a member of a random race, determined using the table that accompanies <Link to="/spell/reincarnate">reincarnate</Link>. The alternate version has half the chronomancer's total hit points (but not any <Link to="/rule/temporary_hit_points">temporary hit points</Link>) and those spells the chronomancer had prepared when he died. The alternate version has the same equipment as the chronomancer but does not bear any artifacts the chronomancer was carrying. Any expendable items, charges, or expensive material components the alternate version uses are also expended for the chronomancer. This alternate version remains for 1 minute before the duplicate and its equipment are ripped back to their reality.</Pair>
</Ability>
</>};
const _clocksmith = {title: "Clocksmith", jsx: <><h2 id="arc-wizard-clocksmith-clocksmith">Clocksmith</h2>
<p><strong>Sources</strong> <Link to="/source/construct_handbook">Construct Handbook pg. 10</Link><br/>Clocksmiths are oddities among wizard communities, pursuing the study and creation of clockwork constructs to near obsession. These wizards favor mechanical experiments over other arcane pursuits.</p>
<Ability id="clockwork-bond-ex" icon={["stairs-goal"]}>
<Pair single id="clockwork-bond-ex">Clockwork Bond (Ex)</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Ability">A clocksmith forms a bond with one of his clockwork creations and begins play with a constructed familiar. He must select this familiar as his <em>arcane bond.</em> The constructed familiar functions as a typical familiar of its type except as noted here. The construct familiar is always a construct with the <Link to="/subtype/clockwork">clockwork</Link> subtype. A construct familiar grants only half of its typical bonus (minimum +1 bonus) from its special familiar ability to its master.</Pair>
</Ability>
<Ability id="clockwork-expertise-ex" icon={["armor-upgrade"]}>
<Pair single id="clockwork-expertise-ex">Clockwork Expertise (Ex)</Pair>
<Pair hl title="Replaces">School powers granted by the wizard's arcane school</Pair>
<Pair title="Passive Ability">A clocksmith is especially adept at dealing with clockworks. He gains a +2 bonus on saving throws against effects created by creatures of the clockwork subtype. Additionally, he treats his caster level as 1 higher when casting a spell that affects or targets only creatures of the clockwork subtype.</Pair>
<Pair title="At 8th Level">The bonus to saves becomes +4 and he treats his caster level as 2 higher when affecting clockwork creatures.</Pair>
</Ability>
<Ability id="craft-construct" icon={["stairs-goal","broken-shield"]}>
<Pair single id="craft-construct">Craft Construct</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Ability">A clocksmith gains <Link to="/feat/craft_construct">Craft Construct</Link> as a bonus feat, even if he does not meet the prerequisites. He can create any construct, but he increases the cost required to create constructs without the clockwork subtype by 50%.</Pair>
</Ability>
<Ability id="familiar-tinkering-ex" icon={["upgrade"]}>
<Pair single id="familiar-tinkering-ex">Familiar Tinkering (Ex)</Pair>
<Pair hl title="Replaces">5th-, 10th-, 15th-, and 20th-level bonus feats</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A clocksmith learns to improve upon his clockwork familiar. A clocksmith can grant his familiar an amount of evolution points equal to <Link to="/misc/one_fifth">one-fifth</Link> of his wizard level. He can use these points to grant his familar <Link to="/ability/evolutions">eidolon evolutions</Link>, though he can't select any evolutions that require a specific base form.</Pair>
<Pair title="Special">Each time the clocksmith gains a level, he can change his familiar's evolutions. These evolutions stack with those from the <Link to="/feat/evolved_familiar">Evolved Familiar</Link> feat.</Pair>
</Ability>
</>};
const _cruoromancer = {title: "Cruoromancer", jsx: <><h2 id="arc-wizard-cruoromancer-cruoromancer">Cruoromancer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 98</Link><br/>To those who know how to manipulate it, the blood of a dhampir can be a powerful component to magic. A cruoromancer infuses his necromantic magic with the power of his unique mixture of living blood and undead ichor. As his power increases in this strange arcane art, a cruoromancer finds potent ways to infuse his unique blood with necromancy spells. A cruoromancer has the following class features.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-wizard-cruoromancer--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/dhampir">Dhampir</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="blood-infusion-su" extraClasses="hasSubs" icon={["upgrade","broken-shield"]}>
<Pair single id="blood-infusion-su">Blood Infusion (Su)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Swift Action">When a cruoromancer casts a spell of the necromancy school, he can opt to infuse that spell with his undead-tainted blood, choosing a <em>blood infusion</em> that he knows.</Pair>
<Pair title="Special">Each time a cruoromancer uses <em>blood infusion,</em> he drains a portion of his own blood either by cutting himself with a blade or by opening a scab from a previous wound. When he does this, he takes an amount of damage equal to 1d4 + the level of the spell being infused. A cruoromancer can only affect a spell with a single type of <em>blood infusion.</em></Pair>
</Ability>
<Ability id="focused-infusion" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="focused-infusion">Focused Infusion</Pair>
<Pair title="Passive Ability">When the cruoromancer uses this infusion, he adds +1 to the DC of the infused necromancy spell.</Pair>
</Ability>
<Ability id="sickening-infusion" extraClasses="subAbility" icon={["armor-downgrade"]}>
<Pair single id="sickening-infusion">Sickening Infusion</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Passive Ability">When the cruoromancer uses this infusion, any creature damaged by the infused necromancy spell becomes <Link to="/misc/sickened">sickened</Link> for 1 round.</Pair>
</Ability>
<Ability id="blood-command-su" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="blood-command-su">Blood Command (Su)</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A cruoromancer can control up to 5 Hit Dice worth of undead creatures per caster level instead of the normal 4 Hit Dice of undead when casting the <Link to="/spell/animate_dead">animate dead</Link> spell.</Pair>
<Pair title="Special">He also gains the following <em>blood infusion</em> ability.</Pair>
</Ability>
<Ability id="commanding-infusion" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="commanding-infusion">Commanding Infusion</Pair>
<Pair hl title="Replaces">5th-level bonus feat</Pair>
<Pair title="Ability">When using this infusion with <em>animate dead,</em> the cruoromancer can create a number of Hit Dice of undead equal to three times his caster level instead of twice his caster level.</Pair>
</Ability>
<Ability id="blood-desecration-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="blood-desecration-su">Blood Desecration (Su)</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">A cruoromancer gains the following <em>blood infusion.</em></Pair>
</Ability>
<Ability id="desecrating-infusion" extraClasses="subAbility" icon={["magic-swirl"]}>
<Pair single id="desecrating-infusion">Desecrating Infusion</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Ability">When the cruoromancer uses this infusion, he can choose to center a <em>desecrate</em> effect on himself or a single target of the spell modified by this infusion (he chooses upon casting). This effect is like the <Link to="/spell/desecrate">desecrate</Link> spell, but lasts for 1 minute per caster level of the cruoromancer, and does not interact with altars, shrines, or permanent fixtures that boost the <em>desecrate</em> effect.</Pair>
</Ability>
<Ability id="blood-ability-su" icon={["magic-swirl"]}>
<Pair single id="blood-ability-su">Blood Ability (Su)</Pair>
<Pair hl title="Replaces">15th-level bonus feat</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Ability">A cruoromancer can choose to scry through a single undead creature he created with a spell modified by a <em>commanding infusion.</em> The undead creature is treated as if imbued with an <Link to="/spell/arcane_eye">arcane eye</Link> spell (caster level equal to the cruoromancer's wizard level).</Pair>
</Ability>
<Ability id="perfect-infusion-su" icon={["upgrade"]}>
<Pair single id="perfect-infusion-su">Perfect Infusion (Su)</Pair>
<Pair hl title="Replaces">The 20th-level wizard bonus spell</Pair>
<Pair title="Gained">At 20th Level</Pair>
<Pair title="Ability">A cruoromancer can use his <em>blood infusions</em> without taking damage.</Pair>
</Ability>
</>};
const _elder_mythos_scholar = {title: "Elder Mythos Scholar", jsx: <><h2 id="arc-wizard-elder_mythos_scholar-elder-mythos-scholar">Elder Mythos Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 74</Link><br/>Elder Mythos scholars risk their sanity to seek knowledge of alien and awful entities from beyond the stars.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-wizard-elder_mythos_scholar--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td>Must have a 1st-level arcane school ability which is normally used a number of times per day equal to 3 + the wizard's Intelligence modifier.</td></tr></tbody></table></ScrollContainer></div><Ability id="arcane-bond" icon={["broken-shield"]}>
<Pair single id="arcane-bond">Arcane Bond</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Info">An Elder Mythos scholar must choose to bond with an object, inscribing that object with eldritch runes.</Pair>
</Ability>
<Ability id="eldritch-knowledge-su" icon={["broken-shield","armor-upgrade"]}>
<Pair single id="eldritch-knowledge-su">Eldritch Knowledge (Su)</Pair>
<Pair hl title="Alters">The 1st-level arcane school ability</Pair>
<Pair title="Info">An Elder Mythos scholar gains two fewer daily uses of his 1st-level arcane school ability, which is normally used a number of times per day equal to 3 + his Intelligence modifier.</Pair>
<Pair title="Ability">When an Elder Mythos scholar attempts a Will save against confusion, fear, insanity, or madness, whether magical or mundane, he can spend 2 daily uses of that arcane school ability to apply his Intelligence modifier instead of his Wisdom modifier to the save. However, whenever he uses this ability, he is affected by a <Link to="/spell/nightmare">nightmare</Link> the next time he sleeps, with no saving throw. Until he sleeps and experiences the nightmare, he can't recover the spent uses of the arcane school ability by any means.</Pair>
</Ability>
<Ability id="eldritch-grimoire-" icon={["broken-shield","upgrade"]}>
<Pair single id="eldritch-grimoire-">Eldritch Grimoire </Pair>
<Pair hl title="Alters">Spellbook</Pair>
<Pair title="Info">An Elder Mythos scholar keeps copious notes on how to use magic against the servants of the Elder Mythos in his spellbook. Every spell he adds to his spellbook takes up an additional 1d6 pages and costs twice the normal amount to inscribe; however, when casting spells prepared from his grimoire, he gains a +2 bonus on caster level checks and increases the save DCs by 1 against the creatures listed in <em>talisman of revealing</em> below.</Pair>
</Ability>
<Ability id="talisman-of-revealing" icon={["magic-swirl","upgrade","spell-book"]}>
<Pair single id="talisman-of-revealing">Talisman of Revealing</Pair>
<Pair hl title="Replaces">Scribe Scroll, the 5th- and 10th-level bonus feats</Pair>
<Pair title="Ability">While wearing or wielding his <em>bonded item,</em> an Elder Mythos scholar can spontaneously cast a special <Link to="/spell/detect_aberration">detect aberration</Link> spell by sacrificing a prepared 1st-level spell. Instead of detecting aberrations, this spell detects creatures associated with the Elder Mythos, such as the following (or similar creatures, at the GM's discretion): <Link to="/monster/bhole">bhole</Link>, <Link to="/monster/colour_out_of_space">colour out of space</Link>, <Link to="/monster/deep_one">deep one</Link>, <Link to="/monster/elder_deep_one">elder deep one</Link>, <Link to="/monster/denizen_of_leng">denizen of Leng</Link>, <Link to="/monster/elder_thing">elder thing</Link>, <Link to="/monster/flying_polyp">flying polyp</Link>, <Link to="/monster/gug">gug</Link>, <Link to="/monster/hound_of_tindalos">hound of Tindalos</Link>, <Link to="/monster/leng_ghoul">Leng ghoul</Link>, <Link to="/monster/leng_spider">Leng spider</Link>, <Link to="/monster/mi_go">mi-go</Link>, <Link to="/monster/nightgaunt">nightgaunt</Link>, <Link to="/monster/ratling">ratling</Link>, <Link to="/monster/shantak">shantak</Link>, <Link to="/monster/shoggoth">shoggoth</Link>, <Link to="/monster/spawn_of_yog_sothoth">spawn of Yog-Sothoth</Link>, <Link to="/monster/star_spawn_of_cthulhu">star-spawn of Cthulhu</Link>, <Link to="/monster/voonith">voonith</Link>, <Link to="/monster/wendigo">wendigo</Link>, and <Link to="/monster/yithian">yithian</Link>.</Pair>
<Pair title="Passive Ability">He gains a +2 circumstance bonus on Knowledge checks to identify such creatures and Spellcraft checks to identify effects they create.</Pair>
<Pair title="At 5th Level">An Elder Mythos scholar adds <Link to="/spell/invisibility_purge">invisibility purge</Link> and <Link to="/spell/see_invisibility">see invisibility</Link> to his spellbook and can spontaneously cast either spell by sacrificing a prepared spell of the same or higher level while wearing or wielding his <em>bonded item.</em></Pair>
<Pair title="At 10th Level">He adds <Link to="/spell/banish_seeming">banish seeming</Link> and <Link to="/spell/true_seeing">true seeing</Link> to his spellbook as 5th-level spells and can spontaneously cast them in the same fashion.</Pair>
</Ability>
<Ability id="eldritch-infusion-su" icon={["upgrade","broken-shield"]}>
<Pair single id="eldritch-infusion-su">Eldritch Infusion (Su)</Pair>
<Pair hl title="Replaces">The school gained at 8th level</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">Once each day while preparing spells, an Elder Mythos scholar can spend 1 extra hour to brew a tincture of hallucinogens and alien trace minerals. Though it has no effect for others, if he drinks it, the elixir expands his mind and perceptions into transitive dimensions, granting him a +4 alchemical bonus to his Intelligence score and reducing his Wisdom and Constitution scores by 2 for 10 minutes per wizard level he has.</Pair>
<Pair title="Passive Ability">While under the effects of this elixir, he adds 1/2 his class level to his Perception checks against aberrations and creatures listed in talisman of revealing, but subtracts the same amount from all other Perception checks. His spells have a 20% failure chance, unless they summon, call, or contact a creature listed in talisman of revealing or otherwise affect only such creatures (for instance, a <Link to="/spell/fireball">fireball</Link> aimed at 3 gugs but not a fireball aimed at 3 gugs and a gnome).</Pair>
</Ability>
</>};
const _exploiter_wizard = {title: "Exploiter Wizard", jsx: <><h2 id="arc-wizard-exploiter_wizard-exploiter-wizard">Exploiter Wizard</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 133</Link><br/>Contrary to traditional wizardly study, an exploiter wizard forgoes the tried and true methods of arcane focus and arcane schools for the exploits favored by an arcanist. Some wizards regard this blatant exploitation of arcane magic as somehow "cheating," but most exploiters believe this prejudice is close-minded and overly traditional.</p>
<Ability id="arcane-reservoir-su" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="arcane-reservoir-su">Arcane Reservoir (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The exploiter wizard gains the <Link to="/class/arcanist">arcanist's</Link> <em>arcane reservoir</em> class feature. The exploiter wizard uses his wizard level as his arcanist level for determining how many <em>arcane reservoir</em> points he gains at each level.</Pair>
</Ability>
<Ability id="arcane-reservoir-su" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="arcane-reservoir-su" flavor="Relevant text from the arcanist class ability.">Arcane Reservoir (Su)</Pair>
<Pair title="Passive Ability">You have an arcane reservoir that can hold a maximum amount of magical energy equal to 3 + your arcanist level. Each day, when preparing spells, your arcane reservoir fills with raw magical energy, gaining a number of points equal to 3 + <Link to="/misc/half">half</Link> your arcanist level. Any points you had from the previous day are lost. You can also regain these points through some arcanist exploits. The arcane reservoir can never hold more points than the maximum amount noted above; points gained in excess of this total are lost.</Pair>
<Pair title="Free Action">You can expend 1 point from your arcane reservoir whenever you cast an arcanist spell. If you do, you can choose to increase the caster level by 1 or increase the spell's DC by 1. You can expend no more than 1 point from your reservoir on a given spell in this way.</Pair>
</Ability>
<Ability id="exploiter-exploit" icon={["stairs-goal"]}>
<Pair single id="exploiter-exploit">Exploiter Exploit</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The exploiter wizard gains a single <Link to="/ability/exploits">arcanist exploit</Link>. The exploiter wizard uses his wizard level as his arcanist level for determining the effects and DCs of his arcanist exploits.</Pair>
<Pair title="At 5th Level">The wizard gains another exploit.</Pair>
<Pair title="At 9th Level">The wizard gains another exploit.</Pair>
<Pair title="At 13th Level">The wizard gains another exploit.</Pair>
<Pair title="At 17th Level">The wizard gains another exploit.</Pair>
</Ability>
</>};
const _familiar_adept = {title: "Familiar Adept", jsx: <><h2 id="arc-wizard-familiar_adept-familiar-adept">Familiar Adept</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 8</Link><br/>Many wizards employ familiars to assist them, but only a few have unlocked the true power of their school of magic through the familiar itself.</p>
<Ability id="diminished-expertise" icon={["broken-shield"]}>
<Pair single id="diminished-expertise">Diminished Expertise</Pair>
<Pair hl title="Replaces">Scribe scroll, 5th- and 10th-level bonus feats</Pair>
<Pair title="Info">A familiar must choose one additional opposition school, even if he is a universalist.</Pair>
</Ability>
<Ability id="school-familiar-ex" icon={["stairs-goal","broken-shield"]}>
<Pair single id="school-familiar-ex">School Familiar (Ex)</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A familiar adept must select a familiar for his <em>arcane bond.</em> His familiar automatically gains the <Link to="/arc-familiar/school_familiar">school familiar</Link> archetype, but it cannot use its <em>lesser school power</em> until 4th level. At 8th level, it gains access to its <em>greater school power.</em></Pair>
</Ability>
<Ability id="familiar-spells-ex" icon={["spell-book"]}>
<Pair single id="familiar-spells-ex">Familiar Spells (Ex)</Pair>
<Pair hl title="Alters">Spellbook</Pair>
<Pair title="Ability">A familiar adept stores his spells in his familiar rather than in a spellbook, exactly as a <Link to="/class/witch">witch</Link> does. His familiar can freely trade spells known with a witch's familiar, provided the spells traded are on both casters' class spell lists. The familiar adept's familiar uses the witch rules for familiars, including the increased cost of replacing the familiar.</Pair>
</Ability>
<Ability id="focused-school-ex" icon={["upgrade"]}>
<Pair single id="focused-school-ex">Focused School (Ex)</Pair>
<Pair title="Ability">A familiar adept's training is focused more deeply on his familiar and his school of magic. His familiar gains the ability to use the wizard's 1st-level school ability additional times per day without it counting against the wizard's daily uses. The amount of additional uses is equal to 1 + <Link to="/misc/one_fifth">one-fifth</Link> the wizard's class level.</Pair>
</Ability>
</>};
const _first_world_caller = {title: "First World Caller", jsx: <><h2 id="arc-wizard-first_world_caller-first-world-caller">First World Caller</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 17</Link><br/>Some wizards, typically First World <Link to="/race/gnome">gnomes</Link>, have mystical ties with the First World, the primordial home of the fey. This bond allows them to more easily conjure creatures and effects from the First World, giving them the nickname of First World callers.</p>
<Ability id="fey-familiar" icon={["stairs-goal"]}>
<Pair single id="fey-familiar">Fey Familiar</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Ability">A First World caller must select a familiar as his <em>arcane bond.</em> This familiar is often the fey creature that was created when the First World caller's soul passed through the First World on the way to being born. The familiar counts as both an animal and a fey for the purposes of effects that depend on its type, rather than counting as a magical beast. It gains only half the normal natural armor bonus for a familiar based on the First World caller's level (rounded down, minimum 0), and it doesn't grant its special familiar ability to its master. Instead, the familiar gains the <Link to="/template/fey_touched_creature">fey-touched creature</Link> template.</Pair>
<Pair title="At 10th Level">The familiar grows a pair of delicate, gossamer wings, gaining a fly speed equal to its land speed and average maneuverability. If the familiar could already fly, its maneuverability improves by one step instead.</Pair>
</Ability>
<Ability id="fey-summoner" icon={["magic-swirl"]}>
<Pair single id="fey-summoner">Fey Summoner</Pair>
<Pair hl title="Replaces">Arcane school, Scribe Scroll</Pair>
<Pair title="Ability"><p>A First World caller is able to conjure fey creatures. He gains <Link to="/feat/augment_summoning">Augment Summoning</Link> as a bonus feat. He adds the following creatures to the <Link to="/spell/summon_monster">summon monster</Link> list of the same level, allowing him to summon them with the appropriate <em>summon monster</em> spell.</p>
<ul>
<li>1st-<Link to="/monster/grimple">grimple</Link> (gremlin), <Link to="/monster/mite">mite</Link>, <Link to="/monster/sprite">sprite</Link></li>
<li>2nd-<Link to="/monster/atomie">atomie</Link>, <Link to="/monster/fuath">fuath</Link> (gremlin), <Link to="/monster/nixie">nixie</Link></li>
<li>3rd-<Link to="/monster/leprechaun">leprechaun</Link>, <Link to="/monster/nuglub">nuglub</Link> (gremlin), <Link to="/monster/pooka">pooka</Link></li>
<li>4th-<Link to="/monster/kelpie">kelpie</Link>, <Link to="/monster/korred">korred</Link>, <Link to="/monster/twigjack">twigjack</Link></li>
<li>5th-<Link to="/monster/lampad">lampad</Link>, <Link to="/monster/lurker_in_light">lurker in light</Link>, <Link to="/monster/swan_maiden">swan maiden</Link></li>
<li>6th-<Link to="/monster/cold_rider">cold rider</Link>, <Link to="/monster/oceanid">oceanid</Link>, <Link to="/monster/sangoi">sangoi</Link></li>
<li>7th-<Link to="/monster/alp">alp</Link>, <Link to="/monster/bogeyman">bogeyman</Link>, <Link to="/monster/ijiraq">ijiraq</Link></li>
<li>8th-<Link to="/monster/banelight">banelight</Link>, <Link to="/monster/fastachee">fastachee</Link>, <Link to="/monster/rusalka">rusalka</Link></li>
<li>9th-<Link to="/monster/ankou">ankou</Link>, <Link to="/monster/kamaitachie">kamaitachie</Link>, <Link to="/monster/wild_hunt_archer">wild hunt archer</Link>.</li>
</ul>
<p>This ability is a function of the First World caller himself, and it applies even if he uses a scroll, wand, or other magic item to cast a <em>summon monster</em> spell. If he creates such an item and it is used by another character, the spell functions as an ordinary <em>summon monster</em> spell.</p>
</Pair>
</Ability>
<Ability id="warp-reality-su" icon={["magic-swirl"]}>
<Pair single id="warp-reality-su">Warp Reality (Su)</Pair>
<Pair hl title="Replaces">10th- and 15th-level bonus feats</Pair>
<Pair title="At 10th Level">A First World caller can reshape the nearby area at his whim, as he pulls in aspects of the mutable and primal First World. To use this ability, he must expend a spell slot of 5th level or higher as a <strong className="hl">standard action</strong> and succeed at a DC 15 Charisma check. If he succeeds, he can apply one of the following <Link to="/rule/planar_traits">planar traits</Link> to the area in a 60-foot radius for 2d4 minutes: <em>normal gravity, heavy gravity, light gravity, mildly aligned</em> (chaos, evil, good, or law), <em>enhanced magic,</em> or <em>impeded magic.</em></Pair>
<Pair title="At 15th Level">He can instead expend a slot of 7th level or higher and attempt a DC 20 Charisma check. If successful, he can apply two planar traits from the previous list, or any one of the following traits: <em>no gravity, subjective directional gravity, erratic time, fire-dominant, water-dominant, negative-dominant, positive-dominant,</em> or <em>wild magic.</em></Pair>
</Ability>
</>};
const _hallowed_necromancer = {title: "Hallowed Necromancer", jsx: <><h2 id="arc-wizard-hallowed_necromancer-hallowed-necromancer">Hallowed Necromancer</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 74</Link><br/>Many wizards study necromancy to create undead, but some study the same arts to purge the stain of undeath.</p>
<Ability id="arcane-school" icon={["info"]}>
<Pair single id="arcane-school">Arcane School</Pair>
<Pair hl title="Alters">Arcane school, spells</Pair>
<Pair title="Info">A hallowed necromancer must specialize in the school of <Link to="/arcaneschool/necromancy">necromancy</Link> and swear never to create undead.</Pair>
</Ability>
<Ability id="turn-undead-su" icon={["stairs-goal"]}>
<Pair single id="turn-undead-su">Turn Undead (Su)</Pair>
<Pair hl title="Alters"><em>Power over undead</em> necromancy school ability</Pair>
<Pair title="Ability">A hallowed necromancer must select <Link to="/feat/turn_undead">Turn Undead</Link> as a bonus feat with her <em>power over undead</em> arcane school ability.</Pair>
</Ability>
<Ability id="positive-touch-su" icon={["magic-palm","smoking-finger"]}>
<Pair single id="positive-touch-su">Positive Touch (Su)</Pair>
<Pair hl title="Replaces"><em>Grave touch</em> necromancy school ability, Scribe Scroll</Pair>
<Pair title="Standard Action">A hallowed necromancer can sacrifice a prepared spell of the necromancy school to spontaneously cast a <Link to="/main/cure_spells">cure spell</Link> of the same level or lower, counting the spell as a necromancy spell rather than a conjuration spell. This <em>cure</em> spell harms only undead; it doesn't heal the living. If the spell requires an attack roll, it has a critical threat range of 19-20.</Pair>
<Pair title="Ability">A number of times per day equal to 3 + her Intelligence modifier, when she spontaneously casts a <em>cure</em> spell, she can either turn the effect into a ray and increase the <Link to="/rule/range">range</Link> to Close or remove the Will save but deal half the normal amount of damage.</Pair>
</Ability>
<Ability id="death-bane-su" icon={["upgrade"]}>
<Pair single id="death-bane-su">Death Bane (Su)</Pair>
<Pair hl title="Replaces">5th-level bonus feat</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Passive Ability">A hallowed necromancer's <em>cure</em> spells are <Link to="/feat/maximized">maximized</Link> when used to damage undead and the save DCs of her spells cast on undead creatures are 1 higher.</Pair>
<Pair title="Swift Action"><p>She can expend 2 uses of <em>positive touch</em> to imbue any weapon she wields with the undead-<Link to="/magic-enh/bane">bane</Link> or <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon special ability for a number of rounds equal to <Link to="/misc/one_fifth">one-fifth</Link> her wizard level. These effects apply only against undead, and only while the hallowed necromancer wields the weapon.</p>
<p>If the weapon is her <em>arcane bond</em> item, this ability costs only 1 use of <em>positive touch.</em></p>
</Pair>
</Ability>
<Ability id="ghostbane-su" icon={["upgrade"]}>
<Pair single id="ghostbane-su">Ghostbane (Su)</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Swift Action">A hallowed necromancer can expend 3 uses of her <em>positive touch</em> while casting a spell to affect undead as if the spell were prepared with the <Link to="/feat/ectoplasmic_spell">Ectoplasmic Spell</Link>, <Link to="/feat/thanatopic_spell">Thanatopic Spell</Link>, or <Link to="/feat/threnodic_spell">Threnodic Spell</Link> feat.</Pair>
</Ability>
<Ability id="guarded-life-su" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="guarded-life-su">Guarded Life (Su)</Pair>
<Pair hl title="Replaces">15th-level bonus feat</Pair>
<Pair title="Gained">At 15th Level</Pair>
<Pair title="Immediate Action"><p>When a hallowed necromancer fails a saving throw against a death effect, energy drain, a necromantic effect, or a negative energy effect, she can expend 2 uses of <em>positive touch</em> to reroll it. She must accept the result of the reroll even if it's worse.</p>
<p>If she would take hit point damage from such an effect, she can instead expend 1 use of <em>positive touch</em> and sacrifice a prepared necromancy spell of 4th level or higher to reduce the damage she takes by an amount equal to her wizard level + 10 times the spell level.</p>
</Pair>
</Ability>
</>};
const _instructor = {title: "Instructor", jsx: <><h2 id="arc-wizard-instructor-instructor">Instructor</h2>
<p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 31</Link><br/>Whether serving as staff at a formal school of magic or simply acting as a wandering teacher, an instructor has an apprentice who trades service to the instructor for lessons in magic.</p>
<Ability id="apprentice-ex" icon={["stairs-goal"]}>
<Pair single id="apprentice-ex">Apprentice (Ex)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">An instructor acquires the services of a loyal apprentice. She functions similarly to a cohort (see the <Link to="/feat/leadership">Leadership</Link> feat), though your apprentice begins as a 1st-level <Link to="/npcclass/commoner">commoner</Link> with <Link to="/feat/magical_aptitude">Magical Aptitude</Link> as their 1st-level feat and <Link to="/rule/step_1_the_basics_step_2_determine_ability_scores">NPC ability scores</Link> (13, 12, 11, 10, 9, 8 before racial modifiers).</Pair>
<Pair title="At 3rd Level">If the instructor's Leadership score is at least 2, the apprentice becomes a 1st-level wizard of the same school specialization as the instructor, and she gains heroic ability scores (15, 14, 13, 12, 10, 8 before racial modifiers).</Pair>
<Pair title="At 7th Level">An instructor may select the Leadership feat - using his Intelligence modifier to determine his Leadership score - but doing so only provides followers, never a second cohort.</Pair>
<Pair title="Special"><p>The apprentice never gains item creation feats, but otherwise follows the normal rules for a cohort.</p>
<p>Each time the instructor gains a level, he may dismiss his existing apprentice as graduated (or expelled, depending on her performance), and gain a new cohort following the same rules. If an apprentice dies in service to the instructor, the instructor takes a -2 penalty to his Leadership score. This penalty is reduced by 1 for every level the instructor gains after the death, to a minimum of 0.</p>
<p>Because cohorts are most interested in the instructor's magical ability, the instructor uses his Intelligence modifier, rather than Charisma, to determine his Leadership score.</p>
</Pair>
</Ability>
<Ability id="trained-teamwork-ex" icon={["stairs-goal"]}>
<Pair single id="trained-teamwork-ex">Trained Teamwork (Ex)</Pair>
<Pair hl title="Alters">5th-, 10th-, 15th-, and 20th-level bonus feats</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">The instructor can take a <Link to="/main/teamwork_feat">teamwork feat</Link> as a wizard bonus feat. As long as his apprentice is within 60 feet, the apprentice gains all such teamwork feats as bonus feats. The apprentice does not have to meet the feat's prerequisites.</Pair>
</Ability>
</>};
const _pact_wizard_ff = {title: "Pact Wizard (FF)", jsx: <><h2 id="arc-wizard-pact_wizard_ff-pact-wizard-ff">Pact Wizard (FF)</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 8</Link><br/>Some wizards make bargains with beings from other realms in order to gain arcane power. These pact wizards have unparalleled access to extraplanar allies, but these bonds never come without strings attached.</p>
<Ability id="familiar-ex" icon={["info"]}>
<Pair single id="familiar-ex">Familiar (Ex)</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Info">A pact wizard must select a <Link to="/ability/familiar">familiar</Link> for his <em>arcane bond.</em> The familiar's loyalty ultimately lies with the pact wizard's patron, and it reports back to the patron on the wizard's activities.</Pair>
</Ability>
<Ability id="pact-focus-ex" icon={["broken-shield"]}>
<Pair single id="pact-focus-ex">Pact Focus (Ex)</Pair>
<Pair hl title="Alters">Arcane school</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Info">A pact wizard must choose one additional opposition school, even if he is a universalist. A pact wizard can't pick <Link to="/arcaneschool/conjuration">conjuration</Link> as an opposition school.</Pair>
</Ability>
<Ability id="pact-ex" icon={["stairs-goal","hazard-sign"]}>
<Pair single id="pact-ex" flavor="A pact wizard enters into a bargain with an extraplanar being in order to gain increased wizardly powers.">Pact (Ex)</Pair>
<Pair title="At 1st Level">The wizard selects a patron belonging to one specific subtype of outsider for which there exists an <Link to="/feat/improved_familiar">improved familiar</Link> option (such as devil or azata). The pact wizard can select a subtype of outsider even with a diametrically opposed alignment; in this case, the patron being offers the pact in an attempt to tempt or redeem the pact wizard.</Pair>
<Pair title="Special">A pact wizard whose alignment shifts away from the chosen outsider subtype, who grossly abuses his familiar or any outsider of the chosen subtype, or who commits egregious acts against the alignment of the patron loses all the benefits of this archetype (but keeps the additional opposition school) until he receives an <Link to="/spell/atonement">atonement</Link>.</Pair>
</Ability>
<Ability id="aura-ex" extraClasses="hasSubs" icon={["aura"]}>
<Pair single id="aura-ex">Aura (Ex)</Pair>
<Pair title="Passive Ability">A pact wizard has an aura corresponding to the alignment of his chosen subtype as a cleric of his wizard level.</Pair>
</Ability>
<Ability id="aura-ex" icon={["aura"]}>
<Pair single id="aura-ex" flavor="Text from the cleric class ability.">Aura (Ex)</Pair>
<Pair title="Passive Ability">If you are a cleric of a chaotic, evil, good, or lawful deity, you have a particularly powerful aura corresponding to your deity's alignment (see <Link to="/spell/detect_evil">detect evil</Link>).</Pair>
</Ability>
<Ability id="pact-summons-ex" icon={["upgrade"]}>
<Pair single id="pact-summons-ex">Pact Summons (Ex)</Pair>
<Pair title="Ability">A pact wizard can select <Link to="/feat/sacred_summons">Sacred Summons</Link> as a wizard bonus feat. He can use this feat only to summon outsiders of his chosen subtype.</Pair>
</Ability>
<Ability id="true-form-ex" icon={["upgrade"]}>
<Pair single id="true-form-ex">True Form (Ex)</Pair>
<Pair title="Gained">At 7th Level</Pair>
<Pair title="Ability">A pact wizard's familiar reveals its true form, automatically transforming into an outsider improved familiar of the chosen subtype.</Pair>
</Ability>
</>};
const _pact_wizard_hhh = {title: "Pact Wizard (HHH)", jsx: <><h2 id="arc-wizard-pact_wizard_hhh-pact-wizard-hhh">Pact Wizard (HHH)</h2>
<p><strong>Sources</strong> <Link to="/source/haunted_heroes_handbook">Haunted Heroes Handbook pg. 20</Link><br/>While the art of wizardry is usually a scholar's pursuit, there are those who seek mastery of arcane power without tedious study and monotonous research. Motivated by foolish ambition, such individuals turn to the greatest enigmas of the cosmos in the hopes of attaining greater power. Though few successfully attract the attention of these forces, those who do receive phenomenal arcane power for their efforts, but become the dutiful playthings and servants of the forces with which they consort.</p>
<Ability id="effortless-magic-ex" icon={["upgrade"]}>
<Pair single id="effortless-magic-ex">Effortless Magic (Ex)</Pair>
<Pair hl title="Alters">Spellcasting</Pair>
<Pair title="Ability">Although a pact wizard still uses a spellbook to prepare his wizard spells, his close ties with his otherworldly patron allow him to do so nearly effortlessly. A pact wizard can prepare all of his spells in only 15 minutes, and his minimum preparation time is only 1 minute.</Pair>
</Ability>
<Ability id="patron-spells" icon={["stairs-goal","spell-book","magic-swirl"]}>
<Pair single id="patron-spells">Patron Spells</Pair>
<Pair hl title="Replaces">Scribe Scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A pact wizard must select a <Link to="/ability/patrons">patron</Link>. This functions like the <Link to="/class/witch">witch</Link> class ability of the same name, except the pact wizard automatically adds his patron's spells to his spellbook instead of to his familiar.</Pair>
<Pair title="Special">In addition, the pact wizard can expend any prepared spell that isn't a spell prepared using the additional spell slot the wizard receives from his arcane school in order to spontaneously cast one of his patron's spells of the same level or lower.</Pair>
</Ability>
<Ability id="great-power-greater-expense-ex" icon={["broken-shield","stairs-goal","spell-book","rolling-dices","armor-upgrade"]}>
<Pair single id="great-power-greater-expense-ex" flavor="As a pact wizard grows in power, his choice of patron begins to affect his physical body.">Great Power, Greater Expense (Ex)</Pair>
<Pair hl title="Replaces">5th-, 10th-, 15th-, and 20th-level bonus feats</Pair>
<Pair title="At 5th Level">The pact wizard chooses one <Link to="/ability/oracle_curses">oracle curse</Link>, using <Link to="/misc/half">half</Link> his character level as his effective oracle level when determining the effects of this curse. If an oracle curse would add spells to the oracle's list of spells known, the pact wizard instead adds those spells to the wizard's spell list as well as to his spellbook.</Pair>
<Pair title="At 10th Level"><p>The pact wizard can invoke his patron's power to roll twice and take the better result when attempting any caster level check, <Link to="/rule/concentration">concentration</Link> check, initiative check, or saving throw. He can activate this ability as a <strong className="hl">free action</strong> before attempting the check, even if it isn't his turn.</p>
<p>He can use this ability a number of times per day equal to 3 + half his Intelligence modifier.</p>
</Pair>
<Pair title="At 15th Level">When the pact wizard invokes his patron's power to roll twice on a check, he adds his Intelligence bonus to the result as an insight bonus. When he applies metamagic feats to any spells he learned via his patron or curse, he treats that spell's final effective level as 1 lower (to a minimum level equal to the spell's original level).</Pair>
<Pair title="At 20th Level">Whenever the pact wizard invokes his patron's power to roll twice on a check and his result is a natural 20, he automatically succeeds, regardless of whether or not a check of that type would normally allow an automatic success.</Pair>
</Ability>
</>};
const _poleiheira_adherent = {title: "Poleiheira Adherent", jsx: <><h2 id="arc-wizard-poleiheira_adherent-poleiheira-adherent">Poleiheira Adherent</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_ancients">Blood of the Ancients pg. 18</Link><br/>Poleiheira adherents are wizards who wish to emulate the explorations and discoveries of Arustun and partake in great odysseys as they seek to imitate his achievements. These adherents bond to a book in tribute to Arustun and his extensive journals - known as the Poleiheira. This allows them to record their travels as well as any lost magic and lore they encounter.</p>
<Ability id="bonded-book-sp" icon={["stairs-goal","spell-book","upgrade"]}>
<Pair single id="bonded-book-sp">Bonded Book (Sp)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Info"><p>A Poleiheira adherent forms a bond with a spellbook. This bonded book becomes intrinsically tied to a Poleiheira adherent's conscious and subconscious mind. The book always opens to the right page, and she can record any number of spells and other information in her bonded book - when she turns pages, more blank pages appear. Other wizards find it difficult to read the book, which displays information in a seemingly random order: the DC of all Spellcraft checks to copy or prepare spells from the book increases by 10.</p>
<p>Each time a Poleiheira adherent attains a new wizard level, she gains four spells (rather than two) to add to the bonded book. The cost and time requirement for writing a new spell into the book are halved. The time to prepare spells is reduced to one third (20 minutes to prepare all spells, and 5 minutes to prepare up to one quarter of her spells).</p>
</Pair>
<Pair title="Ability">Once per day while holding the book in one hand, she can use it to cast any one spell she has written in the bonded book, even if the spell is not prepared.</Pair>
<Pair title="Special">A Poleiheira adherent can replace a lost or destroyed bonded book in the same manner as a bonded item. The new bonded book retains a number of spells per spell level equal to the Poleiheira adherent's Intelligence modifier from the previous bonded book, as well as all the mundane information that was recorded in the previous bonded book. If a Poleiheira adherent replaces her bonded book or dies, the previous book reverts to an ordinary blank spellbook.</Pair>
</Ability>
<Ability id="great-odyssey" extraClasses="hasSubs" icon={["stairs-goal"]}>
<Pair single id="great-odyssey">Great Odyssey</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Info">A Poleiheira adherent specializes in exploration and travel rather than a particular school of magic. She gains the abilities below.</Pair>
</Ability>
<Ability id="mount-sp" extraClasses="subAbility" icon={["stairs-goal","upgrade"]}>
<Pair single id="mount-sp">Mount (Sp)</Pair>
<Pair title="Ability">A Poleiheira adherent can summon a magical steed to her side (per the <Link to="/spell/mount">mount</Link> spell). When riding a mount summoned with this ability, a Poleiheira adherent can substitute Spellcraft checks for Ride checks.</Pair>
<Pair title="Usage">The mount lasts up to 2 hours per wizard level. The duration of this ability doesn't need to be consecutive, but it must be spent in 2-hour increments.<ByLevelPop levels={[[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20],[11,22],[12,24],[13,26],[14,28],[15,30],[16,32],[17,34],[18,36],[19,38],[20,40]]} unit="hour" postText="/day" /></Pair>
</Ability>
<Ability id="master-mariner-su" extraClasses="subAbility" icon={["magic-swirl","upgrade"]}>
<Pair single id="master-mariner-su">Master Mariner (Su)</Pair>
<Pair title="Gained">At 8th Level</Pair>
<Pair title="Ability">A Poleiheira adherent can telekinetically control a boat or ship with such skill and finesse that she counts as a number of people equal to her wizard level for the purpose of determining how many <Link to="/rule/driving_vehicles">crew members are needed</Link> to move a water vehicle. When controlling a ship in this manner, she can substitute Spellcraft checks for Profession (sailor) checks.</Pair>
</Ability>
</>};
const _primalist = {title: "Primalist", jsx: <><h2 id="arc-wizard-primalist-primalist">Primalist</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 37</Link><br/>A primalist is a wizard who has spent a considerable amount of time studying the chaos that is <Link to="/rule/primal_magic">primal magic</Link> - she seeks order in chaos, and hopes to master the raw power of primal magic to bolster her own abilities. A primalist wizard has the following class features.</p>
<Ability id="primal-magic-su" icon={["magic-swirl"]}>
<Pair single id="primal-magic-su">Primal Magic (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels<ByLevelPop levels={[[1,1],[5,2],[10,3],[15,4],[20,5]]} unit="time" postText="/day" /></Pair>
<Pair title="Swift Action"><p>A primalist may attempt to channel primal magic to cast a prepared spell without losing that spell from its spell slot. Essentially, a primalist is forcing primal magic into the world and attempting to shape it into a specific spell effect.</p>
<p>To use this ability, she casts the spell as she would normally, but as the spell's effects take place, she makes a <Link to="/rule/concentration">concentration</Link> check (DC 20 + double the spell's level). If she fails this check, she expends the spell normally as if she had cast it, but its actual effects are replaced by a <em>primal magic event</em> with a CR equal to her caster level and she is <Link to="/misc/staggered">staggered</Link> for 1 round per level of the spell she was attempting to cast. If she makes this check, she casts the spell normally and it is not expended from her prepared spell slot, allowing her to cast that spell again at a later point.</p>
</Pair>
</Ability>
<Ability id="enhance-primal-magic-event-su" icon={["magic-swirl"]}>
<Pair single id="enhance-primal-magic-event-su">Enhance Primal Magic Event (Su)</Pair>
<Pair hl title="Replaces">5th-level bonus feat</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Swift Action">When a primalist triggers a <em>primal magic event,</em> she can increase or decrease its CR by 1. If she makes a concentration check (DC = 15 + the <em>primal magic event's</em> CR), she can instead increase or decrease the CR by 2. If she reduces a <em>primal magic event's</em> CR to less than 1, the <em>event</em> is negated.</Pair>
<Pair title="Special">She can choose to use this ability after she determines what <em>primal magic event</em> she triggers, but before she resolves the effects of that <em>event.</em></Pair>
</Ability>
<Ability id="primal-surge-su" icon={["rolling-dices","armor-upgrade"]}>
<Pair single id="primal-surge-su">Primal Surge (Su)</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">Whenever a primalist triggers a <em>primal magic event,</em> she rolls the percentile dice twice to determine the <em>event</em> that occurs and chooses which one of the two possible events occurs.</Pair>
<Pair title="Passive Ability">She becomes resistant to the effects of <em>primal magic events.</em> Anytime an <em>event</em> would affect her, the GM rolls 1d20 + the <em>event's</em> CR against a DC of 11 + her wizard level. If this roll fails, the <em>event</em> does not affect her, similar to a creature with spell resistance ignoring magical effects with an SR check. If the <em>primal magic event</em> is duplicating the effects of a spell that does not allow spell resistance (such as <Link to="/spell/create_pit">create pit</Link>), this resistance does not apply.</Pair>
</Ability>
</>};
const _runesage = {title: "Runesage", jsx: <><h2 id="arc-wizard-runesage-runesage">Runesage</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 58</Link><br/>Runesages draw upon the mystic energies of ancient Thassilon. While they sometimes experiment with the same heinous techniques exploited by the runelords, runesages temper their explorations into classic Thassilonian mysteries with moderation and empathy, maintaining balance by using small gemstones as the foci for their spellcasting. Runesages are experts at identifying spell effects associated with Thassilonian magic. As most of Thassilon's mysteries remain buried, runesages remain ever curious and continue to seek out new locations that hide secrets caches of Thassilonian magic.</p>
<Ability id="runic-focus-su" icon={["stairs-goal"]}>
<Pair single id="runic-focus-su">Runic Focus (Su)</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Ability"><p>A runesage can use her knowledge of runes to create a runic focus, a small, semiprecious stone engraved with Thassilonian runes that she manipulates to alter her spellcasting abilities. In function, a runic focus behaves like an <Link to="/magic-wondrous/ioun_stone">ioun stone</Link>.</p>
<p>To activate a runic focus, the runesage must meditate on it as she prepares her spells. Following spell preparation, she tosses the gemstone into the air, after which it orbits around her head. A runic focus remains in orbit until the next time the runesage prepares her spells. A runic focus automatically functions as a runesage's <em>bonded object.</em></p>
<p>A runesage does not have the option to specialize in an arcane school - all runesages must be <Link to="/arcaneschool/universalist">universalists</Link>. However, when a runesage creates a runic focus, she must choose one <Link to="/arcaneschool/thassilonian_magic">Thassilonian school of magic</Link>. When she prepares her spells, she is treated as a Thassilonian magic specialist of her runic focus's school for the purposes of determining what spells she can prepare (including gaining two additional spell slots per spell level of her school, and being unable to prepare spells from her runic focus's two opposition schools). She does not gain the corresponding powers of that school, however, and always functions as a universalist wizard in this regard.</p>
<p>A runic focus allows the runesage to augment spells of a single arcane school to which the runic focus is aligned. As long as a runic focus remains activated, the runesage doesn't require material components for any spell she casts from the runic focus's aligned arcane school, provided the component's cost never exceeds 10 gp &amp;times&amp; the runesage's caster level. If the spell requires a material component that surpasses the cost limit, the runesage must have the material component on hand to cast the spell, as normal.</p>
<p>A runic focus has an AC of 24, 10 hit points, and hardness 5, as per an ioun stone. While the first runic focus a runesage creates is free, replacement runic foci can be created using the standard rules for replacing a bonded object for a wizard's <em>arcane bond.</em> When a runesage creates a new runic focus, she can focus it on a different school of Thassilonian magic than her previous focus as long as the new school is not one that was an oppositional school from her previous focus. For example, a runesage with a runic focus on necromancy could abandon that focus and replace it with a new focus on any school other than abjuration and enchantment (as these two schools are opposition schools to Thassilonian necromancy).</p>
</Pair>
</Ability>
</>};
const _scroll_scholar = {title: "Scroll Scholar", jsx: <><h2 id="arc-wizard-scroll_scholar-scroll-scholar">Scroll Scholar</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_society_field_guide">Pathfinder Society Field Guide pg. 26</Link><br/>A scroll scholar values knowledge and learning as much as her other abilities, trading a portion of her potential in her chosen class for greater breadth of skill at deciphering old texts, piecing together strange fragments of esoteric lore, and deciphering the hidden qualities of strange and unusual magical items. The scroll scholar archetype can be taken by either clerics or wizards - they give up <Link to="/arc-cleric/scroll_scholar">different class abilities</Link> for the new abilities granted by this archetype. A wizard must either be a <Link to="/arcaneschool/universalist">universalist</Link> wizard or a <Link to="/arcaneschool/divination">diviner</Link> wizard in order to take this archetype - other types of school specializations are not suited to this archetype's focus. A scroll scholar has the following class features.</p>
<Ability id="diligent-student-ex" icon={["skills","upgrade"]}>
<Pair single id="diligent-student-ex">Diligent Student (Ex)</Pair>
<Pair hl title="Replaces">Diviner's fortune (if a diviner) or hand of the apprentice (if a universalist)</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A scroll scholar chooses one <Link to="/skill/knowledge">Knowledge</Link> skill. This becomes a class skill if it is not already one.</Pair>
<Pair title="Passive Ability">The scroll scholar adds <Link to="/misc/half">half</Link> her class level to all Knowledge checks of this type (minimum 1).</Pair>
<Pair title="At 5th Level">A scroll scholar chooses 1 additional Knowledge skill to receive this bonus.</Pair>
<Pair title="At 10th Level">A scroll scholar chooses 1 additional Knowledge skill to receive this bonus.</Pair>
<Pair title="At 15th Level">A scroll scholar chooses 1 additional Knowledge skill to receive this bonus.</Pair>
<Pair title="At 20th Level">A scroll scholar chooses 1 additional Knowledge skill to receive this bonus.</Pair>
</Ability>
<Ability id="secrets-revealed-sp" icon={["magic-swirl"]}>
<Pair single id="secrets-revealed-sp">Secrets Revealed (Sp)</Pair>
<Pair hl title="Replaces">5th-level bonus feat</Pair>
<Pair title="At 5th Level">A scroll scholar gains the ability to cast <Link to="/spell/comprehend_languages">comprehend languages</Link> and <Link to="/spell/identify">identify</Link> as spell-like abilities. Her caster level is equal to her wizard class level. She can cast these spells once per day.</Pair>
<Pair title="At 7th Level">She can cast them twice per day each.</Pair>
<Pair title="At 11th Level">One of these spell-like abilities (scholar's choice) becomes a constant spell-like ability.</Pair>
<Pair title="At 13th Level">The other spell becomes a constant spell-like ability.</Pair>
<Pair title="At 9th Level">She can cast them three times per day each.</Pair>
</Ability>
<Ability id="flash-of-insight-su" icon={["upgrade"]}>
<Pair single id="flash-of-insight-su">Flash of Insight (Su)</Pair>
<Pair hl title="Replaces">The normal addition of a new 4th-level spell slot; from this point on, the wizard has one fewer 4th-level spell slot than other wizards</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Immediate Action">Once per day, a scroll scholar can gain a +5 bonus on a single attack roll, caster level check, or saving throw. This decision must be made before the results of the roll are known, but can be made after the die is rolled.</Pair>
<Pair title="At 15th Level">This ability can be used twice per day.</Pair>
<Pair title="At 20th Level">This ability can be used 3 times per day.</Pair>
</Ability>
</>};
const _scrollmaster = {title: "Scrollmaster", jsx: <><h2 id="arc-wizard-scrollmaster-scrollmaster">Scrollmaster</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 89</Link><br/>To some wizards, a scroll is not just a written form of a spell, it is a physical weapon meant to be used in combat like a sword or a shield. These strange wizards enter battle armed with scrolls, often one in each in each hand, practicing combat techniques resembling some monk martial arts.</p>
<Ability id="scroll-blade-su" icon={["mailed-fist"]}>
<Pair single id="scroll-blade-su">Scroll Blade (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Ability"><p>A scrollmaster can wield any paper, parchment, or cloth scroll as if it were a melee weapon. In the hands of the wizard, the scroll acts as a <Link to="/eq-weapon/short_sword">short sword</Link> with an enhancement bonus equal to 1/2 the level of the highest-level wizard spell on the scroll; a scroll with only a cantrip or 1st-level spell on it counts as a <Link to="/rule/masterwork_w">masterwork</Link> short sword. The scrollmaster is proficient in this weapon, and feats and abilities that affect short swords (such as <Link to="/feat/weapon_focus">Weapon Focus</Link>) apply to this weapon. A scrollmaster cannot wield two scrollblades at the same time.</p>
<p>Activating this ability is a <strong className="hl">free action</strong>. A scroll blade only retains its abilities in the hands of the scrollmaster. The scroll blade has hardness 0 and hit points equal to the highest-level wizard spell on the scroll. Each successful hit by the scroll blade reduces its hit points by 1; this damage cannot be repaired, but does not affect casting from the scroll. When its hit points reach 0, the scroll is destroyed.</p>
<p>If a scroll contains a spell with a metamagic feat, this ability uses the original spell level of the spell (a scroll of <Link to="/feat/empowered">empowered</Link> <Link to="/spell/fireball">fireball</Link> counts as a 3rd-level spell).</p>
</Pair>
<Pair title="At 3rd Level">When using a 4th-level or higher wizard scroll as a scroll blade, the scrollmaster can choose to reduce its enhancement bonus by 1 (minimum +1 enhancement bonus) to treat it as a <Link to="/misc/reach">reach</Link> weapon. For example, he could use a scroll of <Link to="/spell/charm_monster">charm monster</Link> (a 4th-level wizard spell) as either a +2 short sword or a +1 short sword with reach.</Pair>
<Pair title="At 5th Level">when using a 4th-level or higher wizard scroll as a scroll blade, the scrollmaster can choose to reduce its enhancement bonus (to a minimum of a +1 enhancement bonus) to give any of the following weapon properties: <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/keen">keen</Link>, <Link to="/magic-enh/ki_focus">ki focus</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, <Link to="/magic-enh/speed">speed</Link>. Adding any of these properties consumes an amount of enhancement bonus equal to the property's <Link to="/main/magic_enhancements">cost</Link>. The scrollmaster must know the prerequisite spell or spells to craft the weapon property in question (for example, he must know <Link to="/spell/haste">haste</Link> to be able to give his scroll blade the speed property).</Pair>
</Ability>
<Ability id="scroll-shield-su" icon={["armor-upgrade"]}>
<Pair single id="scroll-shield-su">Scroll Shield (Su)</Pair>
<Pair title="Ability"><p>A scrollmaster can wield any paper, parchment, or cloth scroll as if it were a <Link to="/eq-armor/light_wooden_shield">light wooden shield</Link>. In the hands of the wizard, the scroll grants a +1 shield bonus with an enhancement bonus equal to 1/2 the level of the highest-level wizard spell on the scroll; a scroll with only a cantrip or 1st-level spell counts as a <Link to="/rule/masterwork_a">masterwork</Link> light shield. The scroll shield has no armor check penalty, arcane spell failure chance, or maximum Dexterity bonus. The scrollmaster is considered proficient in this shield. A scrollmaster can use a scrollblade in one hand and a scroll shield in the other hand.</p>
<p>Activating this ability is a <strong className="hl">free action</strong>. A scroll shield only retains its abilities in the hands of the scrollmaster. The scroll shield has hardness 0 and hit points equal to the highest-level wizard spell on the scroll. Each successful attack roll against the wizard reduces the scroll shield's hit points by 1; this damage cannot be repaired, but does not affect casting from the scroll. When its hit points reach 0, the scroll is destroyed.</p>
<p>If a scroll contains a spell with a metamagic feat, this ability uses the original spell level of the spell (a scroll of <em>empowered fireball</em> counts as a 3rd-level spell).</p>
</Pair>
<Pair title="At 5th Level">When using a 3rd-level or higher wizard scroll as a scroll shield, the scrollmaster can choose to reduce its enhancement bonus (to a minimum of a +1 enhancement bonus) to give it any of the following shield properties: <Link to="/magic-enh/ghost_touch_a">ghost touch</Link>, <Link to="/magic-enh/light_fortification">light fortification</Link>, <Link to="/magic-enh/moderate_fortification">moderate fortification</Link>. Adding any of these properties consumes an amount of bonus equal to the property's cost (see <Link to="/rule/magic_armor">Table 15-5: Shield Special Abilities</Link>). The scrollmaster must know the prerequisite spell or spells to craft the shield property in question (for example, he must know <Link to="/spell/limited_wish">limited wish</Link> to be able to give his scroll shield the fortification property).</Pair>
</Ability>
<Ability id="improved-scroll-casting-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="improved-scroll-casting-su">Improved Scroll Casting (Su)</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">The scrollmaster can cast a wizard spell from a scroll and use his own Intelligence score and relevant feats to set the DC for the spell, and can use his own caster level if it is higher than that of the scroll (similar to a caster using a <Link to="/rule/staves">staff</Link>).</Pair>
<Pair title="Special">The scrollmaster must have already deciphered the writing on the scroll to use this ability.</Pair>
</Ability>
</>};
const _shadowcaster = {title: "Shadowcaster", jsx: <><h2 id="arc-wizard-shadowcaster-shadowcaster">Shadowcaster</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 39</Link><br/>Trained in the dark mysteries of Nidal's Umbral Court and its Kuthonite dogma, your training allows you to harness the power of shadows to bolster your spellcasting. A shadowcaster has the following class features.</p>
<Ability id="shadow-spells-su" icon={["magic-swirl","upgrade"]}>
<Pair single id="shadow-spells-su">Shadow Spells (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">A shadowcaster uses his shadow to prepare additional spells. He must spend his entire period of spell preparation in <Link to="/rule/illumination">dim illumination</Link> to use this ability.</Pair>
<Pair title="Ability">He may prepare a number of additional spell levels of spells equal to the level of the highest-level wizard spell he can cast. For example, if he can cast 6th-level wizard spells, he could prepare six 1st-level spells, two 3rd level-spells, or any similar combination that adds up to a total of six spell levels. These spells are stored in his shadow. He can only cast these spells when he is in an area of normal light or dim light.</Pair>
<Pair title="Special">He gains Shadowtongue as a bonus language.</Pair>
</Ability>
<Ability id="shadowsight-ex" icon={["stairs-goal"]}>
<Pair single id="shadowsight-ex">Shadowsight (Ex)</Pair>
<Pair hl title="Replaces">5th-level bonus feat</Pair>
<Pair title="Gained">At 5th Level</Pair>
<Pair title="Ability">A shadowcaster gains darkvision 60 feet.</Pair>
</Ability>
<Ability id="shadowy-specialization-ex" icon={["upgrade"]}>
<Pair single id="shadowy-specialization-ex">Shadowy Specialization (Ex)</Pair>
<Pair hl title="Replaces">10th-level bonus feat</Pair>
<Pair title="Gained">At 10th Level</Pair>
<Pair title="Ability">When a shadowcaster casts <Link to="/spell/shades">shades</Link>, <Link to="/spell/shadow_conjuration">shadow conjuration</Link>, <Link to="/spell/shadow_evocation">shadow evocation</Link>, and similar illusion spells that have a listed fraction of the strength of real effects, he increases the percentage of damage caused by the spell's effect or summoned creatures by one-fifth (+20%) against creatures that make their saving throw against the effect, up to a maximum of 100% of the strength. For example, <em>shadow evocation</em> and <em>shadow conjuration</em> deal 40% normal damage on a successful save instead of 20%.</Pair>
</Ability>
</>};
const _siege_mage = {title: "Siege Mage", jsx: <><h2 id="arc-wizard-siege_mage-siege-mage">Siege Mage</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 75</Link><br/>The siege mage combines his arcane mastery with a supernatural link to <Link to="/rule/siege_engines">siege engines</Link>.</p>
<Ability id="siege-engineer" icon={["stairs-goal"]}>
<Pair single id="siege-engineer">Siege Engineer</Pair>
<Pair hl title="Replaces">Scribe scroll</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">The siege mage gains <Link to="/feat/siege_engineer">Siege Engineer</Link> as a bonus feat, even though he does not meet the prerequisites for that feat.</Pair>
</Ability>
<Ability id="siege-engine-bond-su" icon={["bowman"]}>
<Pair single id="siege-engine-bond-su">Siege Engine Bond (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Usage">Intelligence modifier times/day (minimum 1)</Pair>
<Pair title="Standard Action">A siege mage can bond with a single <Link to="/main/equipment_siege_engines">siege engine</Link> within 30 feet and line of sight. He can utilize the power of this link to aim and fire the siege engine remotely (as long as he's within 30 feet), though it still requires a crew to reload the siege engine.</Pair>
<Pair title="At 10th Level">He can reload, aim, and fire the siege engine purely by the power of this link, and no longer needs a crew to control the siege engine. It still takes the normal required amount of time and actions to control a siege engine in this manner.</Pair>
<Pair title="Special">The siege mage can end this bond with a <strong className="hl">free action</strong>. A siege mage can only be bonded with one siege engine at a time.</Pair>
</Ability>
<Ability id="empower-siege-engine-su" icon={["upgrade","spell-book"]}>
<Pair single id="empower-siege-engine-su">Empower Siege Engine (Su)</Pair>
<Pair hl title="Replaces">Cantrips</Pair>
<Pair title="Swift Action">A siege mage can sacrifice one of his spells to empower the next attack he makes before the end of his turn with a siege engine he is bonded with. When he does, the siege engine attack gains a bonus on its attack roll or targeting roll equal to the level of the spell he sacrificed, and a bonus to damage equal to 3 &times; the level of the spell.</Pair>
<Pair title="Ability">The siege mage gains the <Link to="/spell/detect_magic">detect magic</Link> and <Link to="/spell/read_magic">read magic</Link> cantrips and places them in his spellbook. He can cast either of these as 1st-level spells.</Pair>
</Ability>
<Ability id="siege-school" icon={["broken-shield"]}>
<Pair single id="siege-school" flavor="The strange rituals needed to empower all forms of siege engines takes a level of dedication and perseverance that limits a wizard's time to unlock other arcane mysteries.">Siege School</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="At 1st Level">The siege mage forsakes three schools of magic. Once chosen, these opposition schools cannot be changed. A siege mage who prepares spells from his opposition school must use two spell slots of that level to prepare the spell. In addition, the siege mage takes a -4 penalty on any skill checks made when crafting a magic item that has a spell from one of his opposition schools.</Pair>
</Ability>
</>};
const _spell_sage = {title: "Spell Sage", jsx: <><h2 id="arc-wizard-spell_sage-spell-sage">Spell Sage</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 133</Link><br/>A spell sage has mastered spells of all types, and is able to increase the effectiveness of his own spells and eventually even cast spells from other classes' spell lists. While most wizards focus on a school, the spell sage looks at the particular aspects of individual spells and is not afraid to modify them with interesting bits of insight to gain deeper understandings of the formulae.</p>
<Ability id="focused-spells-su" icon={["upgrade"]}>
<Pair single id="focused-spells-su">Focused Spells (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Ability">Once per day the spell sage's understanding of spells allows him to increase his caster level by 4 for a single spell cast.</Pair>
<Pair title="At 8th Level">He can do this twice per day.</Pair>
<Pair title="At 16th Level">He can do this three times per day.</Pair>
</Ability>
<Ability id="spell-study-su" icon={["magic-swirl"]}>
<Pair single id="spell-study-su" flavor="The sage's understanding of the spells of bards, clerics, and druids is so great that he can use his own magic in an inefficient, roundabout way to duplicate those classes' spells.">Spell Study (Su)</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Gained">At 2nd Level</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 1st<ByLevelPop levels={[[1,1],[6,2],[11,3],[16,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability"><p>A spell sage can spontaneously cast any spell on the <Link to="/main/spells_bard">bard</Link>, <Link to="/main/spells_cleric">cleric</Link>, or <Link to="/main/druid_spell">druid spell list</Link> as if it were a wizard spell he knew and had prepared.</p>
<p>Casting the spell requires the spell sage to spend 1 full round per spell level of the desired spell (if the spell is on multiple spell lists indicated above, using the lowest level from among those lists) and requires expending two prepared spells of that spell level or higher; if the spell's casting time is normally 1 full round or longer, this is added to the spell sage's casting time. For example, if a spell sage wants to use spell study to cast <Link to="/spell/cure_light_wounds">cure light wounds</Link> (cleric spell level 1st), he must spend 2 full rounds casting and expend two prepared wizard spells of 1st level or higher.</p>
</Pair>
</Ability>
</>};
const _spellbinder = {title: "Spellbinder", jsx: <><h2 id="arc-wizard-spellbinder-spellbinder">Spellbinder</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 25</Link><br/>A spellbinder is an elven wizard who forges an arcane bond between himself and one or more wizard spells. These spells become so well understood by the spellbinder that he can prepare them in spell slots that already have other spells prepared in them.</p>
<div className="sideNoteWrap startAlign singular delist"><ScrollContainer id="arc-wizard-spellbinder--table-0"><table><tbody><tr><ThLink scope="row" to="/icons/confirmed"><IonIcon aria-label="Prerequisites" icon="/icons/confirmed.svg" /></ThLink><td><Link to="/race/elf">Elf</Link></td></tr></tbody></table></ScrollContainer></div><Ability id="spell-bond-su" icon={["magic-swirl"]}>
<Pair single id="spell-bond-su">Spell Bond (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Gained">At 1st Level</Pair>
<Pair title="Choice">A spellbinder selects any one spell that he knows as a <em>bonded spell.</em></Pair>
<Pair title="Full-Round Action">The spellbinder may replace a spell of the same or higher level as his <em>bonded spell</em> with his <em>bonded spell.</em> For example, a spellbinder who selects <Link to="/spell/magic_missile">magic missile</Link> as his <em>bonded spell</em> could spend a full-round action to exchange any 1st-level or higher spell that he has prepared with <em>magic missile.</em></Pair>
<Pair title="At 3rd Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 4th Level">A spellbinder can choose to select a new spell as a bonded spell in place of one with which he is already bonded. In effect, the spellbinder loses the bond with the old spell (though it is still one of his spells known) in exchange for forging a spell bond with a new spell. The new spell's level must be the same as that of the spell being exchanged.</Pair>
<Pair title="At 5th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 6th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 7th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 8th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 9th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 10th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 11th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 12th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 13th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 14th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 15th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 16th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 17th Level">A spellbinder may select another spell he knows and add it to his list of <em>bonded spells.</em></Pair>
<Pair title="At 18th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="At 20th Level">He may swap out a <em>bonded spell,</em> following the rules above.</Pair>
<Pair title="Special">A spellbinder may swap only one spell bond at any given level, and must choose whether or not to swap the spell bond at the same time that he gains two new spells known for the level.</Pair>
</Ability>
<p><strong className="hl">The following arcane discoveries complement the spellbinder archetype:</strong> <Link to="/arcanedisc/fast_study">Fast Study</Link>, <Link to="/arcanedisc/split_slot">Split Slot</Link>.</p>
</>};
const _spellslinger = {title: "Spellslinger", jsx: <><h2 id="arc-wizard-spellslinger-spellslinger">Spellslinger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 75</Link><br/>While few contest the seductive allure of commanding arcane and occult powers, there are those wizards who become obsessed with the natural mysteries of black powder. Combining this emerging technology with their considerable arcane skills, they transform <Link to="/main/equipment_firearms">firearms</Link> into a powerful focus.</p>
<Ability id="arcane-gun-su" icon={["stairs-goal","bowman","smoking-finger","upgrade"]}>
<Pair single id="arcane-gun-su">Arcane Gun (Su)</Pair>
<Pair hl title="Replaces">Arcane bond</Pair>
<Pair title="Ability">The spellslinger gains the <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (firearms) feat, and one or two of his firearms can be <em>arcane guns. Arcane guns</em> are normal one-handed or two-handed firearms in the hands of others, as they were normal firearms before the spellslinger imbued them with magic. In a spellslinger's hands, they both fire projectiles (bullets and pellets) and cast magic.</Pair>
<Pair title="Choice">At 1st level, the spellslinger decides whether he wants to have one or two <em>arcane guns</em> at a time. If the spellslinger chooses to have only one <em>arcane gun</em> at a time, spells fired through the <em>arcane gun</em> that require an attack roll have a &times;3 critical hit multiplier.</Pair>
<Pair title="Ability"><p>A spellslinger can cast any ranged touch attack, cone, line, or ray spells through his <em>arcane gun.</em> When he casts through the <em>arcane gun,</em> the gun's enhancement bonus (if any) is a bonus to the spell's attack rolls or to the spell's saving throw DCs.</p>
<p>Yet there are dangers inherent to this method. If any of the spells' attack rolls result in a natural 1 (a misfire), or a natural 20 is rolled on any saving throw made against the spell by a target (an overload), the <em>arcane gun</em> gains the <Link to="/misc/broken">broken</Link> condition. If the <em>arcane gun</em> already has the broken condition, the gun explodes.</p>
<p>When a gun explodes, it lets loose a blast of force, or if the spell has the acid, cold, electricity, or sonic descriptor, it deals that type of energy damage instead. In the case of spells with multiple descriptors, roll randomly among the descriptors to determine the type of damage dealt by the blast. The blast is centered on a single intersection within the spellslinger's space (spellslinger's choice) and deals 1d6 points of the appropriate energy damage or force damage per level of the spell cast. Any creature within the blast other than the spellslinger can make a Reflex saving throw to halve the damage. The Reflex save DC is calculated using the spell level of the spell being sacrificed.</p>
</Pair>
<Pair title="Special">A spellslinger can attune his <em>arcane guns</em> at the start of each day. That attunement lasts until the spellslinger attunes to a new gun, even if a formally attuned gun is destroyed.</Pair>
</Ability>
<Ability id="gunsmith" icon={["stairs-goal"]}>
<Pair single id="gunsmith">Gunsmith</Pair>
<Pair hl title="Replaces">Scribe scroll</Pair>
<Pair title="Ability">The spellslinger gains the <Link to="/feat/gunsmithing">Gunsmithing</Link> feat and a battered gun that is identical to the gun a <Link to="/class/gunslinger">gunslinger</Link> gains at first level.</Pair>
<Pair title="Special">If the spellslinger chooses the ability to attune two <em>arcane guns,</em> he still only starts out with one gun. Like a gunslinger, a spellslinger can use the Gunsmithing feat to restore his battered gun.</Pair>
</Ability>
<Ability id="mage-bullets-su" icon={["upgrade"]}>
<Pair single id="mage-bullets-su" flavor={<>A spellslinger is adept at transferring spell energy into his <em>arcane gun</em> attacks.</>}>Mage Bullets (Su)</Pair>
<Pair hl title="Replaces">Cantrips</Pair>
<Pair title="Ability">The spellslinger gains the <Link to="/spell/detect_magic">detect magic</Link> and <Link to="/spell/read_magic">read magic</Link> cantrips and places them in his spellbook. He can cast either of these as 1st-level spells.</Pair>
<Pair title="Swift Action">He can sacrifice a spell and transform that energy into a weapon bonus equal to the level of the spell sacrificed on a single barrel of his firearm. With that weapon bonus the spellslinger can apply any of the following to his <em>arcane bond:</em> enhancement bonuses (up to +5) and <Link to="/magic-enh/dancing">dancing</Link>, <Link to="/magic-enh/defending">defending</Link>, <Link to="/magic-enh/distance">distance</Link>, <Link to="/magic-enh/flaming">flaming</Link>, <Link to="/magic-enh/flaming_burst">flaming burst</Link>, <Link to="/magic-enh/frost">frost</Link>, <Link to="/magic-enh/ghost_touch">ghost touch</Link>, <Link to="/magic-enh/icy_burst">icy burst</Link>, <Link to="/magic-enh/merciful">merciful</Link>, <Link to="/magic-enh/seeking">seeking</Link>, <Link to="/magic-enh/shock">shock</Link>, <Link to="/magic-enh/shocking_burst">shocking burst</Link>, <Link to="/magic-enh/spell_storing">spell storing</Link>, <Link to="/magic-enh/thundering">thundering</Link>, <Link to="/magic-enh/vicious">vicious</Link>, and <Link to="/magic-enh/wounding">wounding</Link>.</Pair>
<Pair title="Special">An <em>arcane gun</em> gains no benefit from having two of the same weapon special abilities on the same barrel. The effect of the <em>mage bullets</em> ability lasts for a number of minutes equal to the level of the spell sacrificed, or until this ability is used again to assign the barrel different enhancements.</Pair>
</Ability>
<Ability id="school-of-the-gun" icon={["broken-shield"]}>
<Pair single id="school-of-the-gun">School of the Gun</Pair>
<Pair hl title="Replaces">Arcane school</Pair>
<Pair title="Info">The rigor and care required by <em>arcane guns</em> is so great that a spellslinger forsakes four schools of magic. These opposition schools are chosen at 1st level and cannot be changed later. A spellslinger who prepares a spell from his opposition school must use two spell slots of that level to prepare the spell. In addition, the spellslinger takes a -4 penalty on any skill checks made when crafting a magic item that has a spell from one of his opposition schools as a prerequisite.</Pair>
</Ability>
</>};
const _spirit_binder = {title: "Spirit Binder", jsx: <><h2 id="arc-wizard-spirit_binder-spirit-binder">Spirit Binder</h2>
<p><strong>Sources</strong> <Link to="/source/familiar_folio">Familiar Folio pg. 9</Link><br/>While most wizards learn their arts through gradual study, spirit binders have made a sudden arcane breakthrough due to the traumatic experience of losing a loved one.</p>
<Ability id="soulbound-familiar-ex" icon={["info","stairs-goal"]}>
<Pair single id="soulbound-familiar-ex">Soulbound Familiar (Ex)</Pair>
<Pair hl title="Alters">Arcane bond</Pair>
<Pair title="Ability"><p>A spirit binder must select a <Link to="/ability/familiar">familiar</Link> for his <em>arcane bond.</em> Unlike in a normal familiar-summoning ritual, a spirit binder created his special familiar through a dangerous ritual catalyzed by the death of a loved one. Before the loved one's spirit passed on to the Boneyard, the spirit binder was able to bind the spirit to an animal or vermin, which then became his familiar.</p>
<p>A soulbound familiar's personality is that of the lost loved one, rather than a servant of the spirit binder. It can have any alignment, even one that is diametrically opposed to the spirit binder's. A soulbound familiar has the base attack bonus and base saving throws of the loved one's favored class (using the spirit binder's level as its level). If the loved one died before the beginning of the campaign, the spirit binder selects the familiar's favored class at 1st level and it cannot be changed.</p>
</Pair>
</Ability>
<Ability id="arcane-school" icon={["broken-shield"]}>
<Pair single id="arcane-school">Arcane School</Pair>
<Pair hl title="Alters">Arcane school</Pair>
<Pair title="Info">A spirit binder can't choose necromancy as an opposition school.</Pair>
</Ability>
<Ability id="lost-talents-ex" icon={["stairs-goal"]}>
<Pair single id="lost-talents-ex" flavor="A spirit binder's soulbound familiar possesses some of the ability of the lost loved one, and it is capable of learning more.">Lost Talents (Ex)</Pair>
<Pair hl title="Replaces">Scribe Scroll, bonus feats</Pair>
<Pair title="At 1st Level">The spirit binder's familiar gains a new feat for which it meets the prerequisites.</Pair>
<Pair title="At 5th Level">The familiar gains another such feat.</Pair>
<Pair title="At 10th Level">The familiar gains another such feat.</Pair>
<Pair title="At 15th Level">The familiar gains another such feat.</Pair>
<Pair title="At 20th Level">The familiar gains another such feat.</Pair>
</Ability>
</>};
const _spirit_whisperer = {title: "Spirit Whisperer", jsx: <><h2 id="arc-wizard-spirit_whisperer-spirit-whisperer">Spirit Whisperer</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide pg. 133</Link><br/>Spirit whisperers are a breed apart among wizards, and are often mistaken for witches. While spirit whisperers do gain and store their spells by communing with familiars, the spirits they gain guidance from are somewhat closer to the world and more direct than the powers with which witches typically traffic. These wizards treat such spirits as mentors and friends, conversing with them rather than appeasing them in the effort to gain and use arcane knowledge.</p>
<p><strong>Arcane Bond (Ex):</strong> When a spirit whisperer chooses an arcane bond, he must choose the familiar arcane bond, and the familiar gains the spirit animal ability of his selected spirit (see spirit link, below). The spirit whisperer does not need a spellbook, but instead stores and prepares his spell by communing with the familiar as the <Link to="/class/witch">witch's</Link> familiar class feature.</p>
<p>This ability alters <strong className="hl">arcane bond</strong> and replaces the <strong className="hl">spellbook</strong> class feature.</p>
<p><strong>Spirit Link (Su):</strong> At 1st level, a spirit whisperer forms a mystical bond with a spirit. The spirit whisperer picks a spirit from the <Link to="/ability/shaman_spirits">shaman's list of spirits</Link>. At 1st level, he gains a spirit ability granted by that spirit. At 8th level, he gains the greater spirit ability granted by that spirit. At 20th level, the spirit whisperer gains the manifestation ability granted by the spirit. He uses his wizard level as his shaman level for determining the effects and DCs of abilities granted by the spirit. In addition, he uses his Intelligence modifier in place of his Wisdom modifier for these abilities. He does not gain hexes, spirit magic spells, or the true spirit ability typically granted to a shaman by these spirits.</p>
<p>This ability replaces <strong className="hl">arcane school</strong> and <strong className="hl">the bonus feat gained at 20th level</strong>.</p>
<p><strong>Spirit Hex:</strong> At 5th level, a spirit whisperer can select one hex from the list of those granted by his chosen spirit. He uses his wizard level as his shaman level when determining the effects and DC of this hex. In addition, he uses his Intelligence modifier in place of his Wisdom modifier for these hexes. At 10th and 15th level, he can select another hex from those granted by his spirit. Each hex selected in this way replaces the bonus feat gained at that level.</p>
<p>This ability alters <strong className="hl">bonus feats</strong>.</p>
</>};
const _sword_binder = {title: "Sword Binder", jsx: <><h2 id="arc-wizard-sword_binder-sword-binder">Sword Binder</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology pg. 11</Link><br/>Sword binders follow a tradition of martial wizards who often worked with the Church of Aroden and the crowns of Taldor and then Cheliax. Once common in Absalom, Cheliax, and Taldor, where they were frequently battlefield commanders, historians, and expedition leaders, they have become much rarer over the past century.</p>
<p><strong>Arcane Bond:</strong> A sword binder must choose a sword as his bonded item. He gains proficiency with it.</p>
<p>This alters <strong className="hl">arcane bond</strong>.</p>
<p><strong>Sword of the Mage (Su):</strong> A sword binder can send his bound sword to strike his foes. He gains the hand of the apprentice ability of the <Link to="/arcaneschool/universalist">universalist</Link> school, but can use that ability only with his bound sword. His range with the ability is close (25 feet + 5 feet per 2 wizard levels he possesses), and he can use it a number of times per day equal to 3 + his Intelligence modifier + 1/2 his level.</p>
<p>At 5th level, whenever the sword binder casts a spell with a range of touch from the wizard spell list, he can use his bonded sword to deliver the touch attack, including expending a daily use of hand of the apprentice to make the touch attack at range. This occurs as part of the same action as casting the spell. He gains all the attack bonuses that apply to his sword (including enhancement bonuses and relevant feats), but does not add his sword's damage or effects to the touch spell.</p>
<p>At 8th level, when a sword binder casts a ranged touch spell or activates this ability to cast a touch spell through it, he can send his bound sword to deliver the spell and strike the target in one motion. Rather than a touch attack, he makes a ranged attack with the sword. If the sword hits, it deals normal weapon damage for hand of the apprentice and the spell automatically hits that target. If the sword misses, the spell lingers on the weapon and the sword binder can attempt to deliver the spell again by activating this ability as a standard action. If the sword binder drops or sheaths the weapon with the spell's charge still held, the charge dissipates to no effect.</p>
<p>This ability replaces <strong className="hl">arcane school</strong> and <strong className="hl">bonus school spell slots</strong>.</p>
<p><strong>Telekinetic Sword (Sp):</strong> At 10th level, a sword binder can control his bound sword (and only his sword) as per the sustained force option of <Link to="/spell/telekinesis">telekinesis</Link>. While the sword is flying in this way, the sword binder can monitor the area around the sword with <Link to="/spell/clairaudience_clairvoyance">clairaudience/clairvoyance</Link> as a swift action. This ability can be used once per day at 10th level, and an additional time per day at 15th level and again at 20th level. This ability can be used for 2 rounds per sword binder level each day.</p>
<p>This ability replaces <strong className="hl">the 10th level bonus feat</strong>.</p>
</>};
const _undead_master = {title: "Undead Master", jsx: <><h2 id="arc-wizard-undead_master-undead-master">Undead Master</h2>
<p><strong>Sources</strong> <Link to="/source/horror_adventures">Horror Adventures pg. 75</Link><br/>Undead masters have great power over undeath.</p>
<p><strong>Necromantic Focus:</strong> An undead master must be of an evil alignment. If he becomes nonevil, he can still use his powers but can't progress any further as a wizard. Most undead masters specialize in the necromancy school, and an undead master can't have necromancy as an opposition school.</p>
<p>This alters <strong className="hl">arcane school</strong> and <strong className="hl">alignment</strong>.</p>
<p><strong>Necropolitan (Ex):</strong> An undead master gains a bonus equal to half his wizard level (minimum +1) on Diplomacy and Knowledge checks regarding undead creatures. Because of his obsessive focus on the undead, he takes a -2 penalty when attempting such checks regarding living creatures.</p>
<p><strong>Corpse Bond (Su):</strong> An undead master can forge an arcane bond with an object, but that object must be made at least partially of <Link to="/eq-material/bone">bone</Link>. Alternatively, he can animate a corpse companion, as per the <Link to="/arc-cleric/undead_lord">undead lord</Link> cleric archetype. He can't gain a familiar.</p>
<p>This ability alters <strong className="hl">arcane bond</strong>.</p>
<p><strong>Command Undead (Su):</strong> An undead master gains <Link to="/feat/command_undead">Command Undead</Link> as a bonus feat, treating his wizard level as his cleric level. If he lacks the ability to channel negative energy for the purpose of Command Undead, he can expend 3 uses of any 1st-level arcane school ability that normally has a number of uses per day equal to 3 + his Intelligence modifier, rather than a use of channel energy. If he's a necromancer with the power over undead ability, he instead gains <Link to="/feat/improved_channel">Improved Channel</Link>.</p>
<p>This ability replaces <strong className="hl">Scribe Scroll</strong>.</p>
<p><strong>Reanimator (Su):</strong> An undead master adds the following spells to his spellbook at the given wizard levels: 1st-<Link to="/spell/repair_undead">repair undead</Link>; 3rd-<Link to="/spell/lesser_animate_dead">lesser animate dead</Link>; 5th-<Link to="/spell/animate_dead">animate dead</Link>; 7th-<Link to="/spell/undead_anatomy_i">undead anatomy I</Link>; 9th-<Link to="/spell/create_undead">create undead</Link>; 11th-<Link to="/spell/undeath_to_death">undeath to death</Link>; 13th-<Link to="/spell/create_greater_undead">create greater undead</Link>; 15th-<Link to="/spell/undead_anatomy_iv">undead anatomy IV</Link>; 17th-<Link to="/spell/cursed_earth">cursed earth</Link>. He can spontaneously cast any of these spells by sacrificing a prepared spell of the same level or higher. The undead master can cast lesser animate dead, animate dead, create undead, and create greater undead as if they were 1 level lower than their normal wizard spell level; this does not alter their level for the purpose of item crafting and the like.</p>
<p>This ability replaces the <strong className="hl">bonus feats</strong> gained at 5th, 10th, and 15th levels.</p>
<p><strong>Lich-Loved (Su):</strong> At 20th level, an undead master gains the benefits of the <Link to="/sorcbloodline/undead">undead</Link> sorcerer bloodline's one of us ability.</p>
<p>This ability replaces the <strong className="hl">bonus feat</strong> gained at 20th level.</p>
</>};
const _wind_listener = {title: "Wind Listener", jsx: <><h2 id="arc-wizard-wind_listener-wind-listener">Wind Listener</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 158</Link><br/>The wind listener takes a sylph's natural curiosity to the extreme, enhancing his natural skill at subterfuge and eavesdropping with potent arcane magic. A wind listener has the following class features.</p>
<Ability icon={["skills"]} id="undefined">
<Pair id="undefined" single>Class Skills</Pair>
<Pair title="Alters" hl>Class skills</Pair><Pair title="New Class Skills"><Link to="/skill/perception">Perception</Link> (WIS)</Pair></Ability>
<p><strong>Arcane School:</strong> A wind listener cannot select divination or illusion as a prohibited school.</p>
<p><strong>Spontaneous Divination (Su):</strong> At 1st level, a wind listener can reshape stored spell energy into divination spells he did not prepare ahead of time. The wind listener can "lose" any prepared spell that is not a cantrip in order to cast a divination spell of the same spell level or lower. The new spell must be one the wind listener knows and is capable of casting. Spells cast with this ability increase their casting time to a full-round action (if the spell's normal casting time is longer than a full-round action, it remains unchanged).</p>
<p>This ability replaces <strong className="hl">arcane bond</strong>.</p>
<p><strong>Abjuration Sense (Ex):</strong> At 5th level, a wind listener develops a sixth sense for spotting spells designed to guard against his investigations. He gains a bonus on Perception checks equal to 1/2 his level to notice spells of the abjuration school and on Spellcraft checks to identify abjuration effects, spells, and magic items.</p>
<p>This ability replaces <strong className="hl">the bonus feat gained at 5th level</strong>.</p>
<p><strong>Wispy Form (Ex):</strong> At 10th level, the wind listener gains the ability to become airy and translucent as a standard action, gaining DR 10/magic and the effects of <Link to="/spell/greater_invisibility">greater invisibility</Link> for a number of rounds per day equal to his level. These rounds need not be consecutive. Like the <Link to="/umr/natural_invisibility">natural invisibility</Link> universal monster ability, this ability is not subject to <Link to="/spell/invisibility_purge">invisibility purge</Link>.</p>
<p>This ability replaces <strong className="hl">the bonus feat gained at 10th level</strong>.</p>
<p><strong>Listening to the Wind (Sp):</strong> At 15th level, the wind listener can call upon spirits of the air to uncover lost lore about a legendary person, place, or thing. Invoking the spirits takes 10 minutes, during which time the wind listener must be free of distractions and able to concentrate. Once called, the spirits seek out information on the subject of the wind listener's inquiries. This functions as the spell <Link to="/spell/legend_lore">legend lore</Link> (caster level equal to the wind listener's level), except that the wind listener is free to engage in other activities while spirits investigate on his behalf. The time required for the air spirits to return with this information is equal to what the casting time of the spell legend lore would have been if the wind listener had cast it. The wind listener can use this ability once per week, and only if he does not currently have air spirits searching for information. If the air spirits are currently searching for information, the wind listener can end their task early as a standard action, dismissing the magical effect and not returning any information.</p>
<p>This ability replaces <strong className="hl">the bonus feat gained at 15th level</strong>.</p>
</>};
const _worldseeker = {title: "Worldseeker", jsx: <><h2 id="arc-wizard-worldseeker-worldseeker">Worldseeker</h2>
<p><strong>Sources</strong> <Link to="/source/planar_adventures">Planar Adventures pg. 21</Link><br/>Worldseekers are wizards who travel to all corners of the Great Beyond. While neophytes must content themselves with study and practice, the most powerful worldseekers are movers and shakers throughout the Great Beyond, power players of whom even demigods take note. Worldseekers are rare sights on Golarion, but among those few, more are trained in Kyonin and Nex than any other nation; those in Kyonin explore the potential of using elf gates to travel beyond this realm, while those in Nex emulate some of the dimensional exploits of Nex's legendary founder.</p>
<p>Most worldseekers prefer not to specialize in a school of magic, for having a diverse array of available spells is a boon when exploring the countless wonders of the Great Beyond. Those who do specialize usually do so as <Link to="/arcaneschool/conjuration">conjurers</Link>. Conjuration is a poor choice of oppositional school for a worldseeker.</p>
<p><strong>Walk the Planes (Sp, Su):</strong> A worldseeker learns every plane's place in the Great Beyond and trains to survive even on the harshest of them. She gains a +2 bonus on Knowledge (planes) checks and is constantly under the effects of <Link to="/spell/endure_elements">endure elements</Link>.</p>
<p>This replaces <strong className="hl">Scribe Scroll</strong>.</p>
<p><strong>Planar Adaptation (Su):</strong> At 8th level, a worldseeker is continually protected from planar environments as by <Link to="/spell/planar_adaptation">planar adaptation</Link>. At 15th level, she can extend that benefit to all allies within 30 feet of her.</p>
<p>This replaces <strong className="hl">the school ability normally gained at 6th or 8th level</strong>.</p>
<p><strong>Planar Associates (Ex):</strong> A worldseeker's travels and dealings across the planes allow her to make connections she can call upon when necessary to gain assistance without needing to resort to <Link to="/spell/planar_binding">planar binding</Link>. A worldseeker must choose a <Link to="/ability/familiar">familiar</Link> for her arcane bond. At 5th level, she gains <Link to="/feat/improved_familiar">Improved Familiar</Link> as a bonus feat and must choose an outsider familiar that matches her alignment exactly; she can choose an outsider in this way even if it normally requires a 7th-level spellcaster as its master.</p>
<p>At 7th level, a worldseeker automatically learns <Link to="/spell/lesser_planar_ally">lesser planar ally</Link> as a 4th-level wizard spell. She automatically learns <Link to="/spell/planar_ally">planar ally</Link> as a 6th-level wizard spell at 11th level, and <Link to="/spell/greater_planar_ally">greater planar ally</Link> as an 8th-level wizard spell at 15th level. She can swap out a prepared spell of an equal spell level to spontaneously cast any of these three spells (one 4th-level spell for lesser planar ally, a 6th-level spell for planar ally, and a 8th level spell for greater planar ally).</p>
<p>The first time each day she casts one of these three spells, the worldseeker reduces the gp value of the material component cost by an amount equal to her caster level &times; 100 (to a minimum cost of 0 gp).</p>
<p>This alters <strong className="hl">arcane bond</strong> and replaces <strong className="hl">the bonus feat gained at 5th level</strong>.</p>
<p><strong>Planar Redoubt (Sp):</strong> At 15th level, a worldseeker creates a planar redoubt, a personal demiplane to which she can retreat to rest and plan. This functions like <Link to="/spell/lesser_create_demiplane">lesser create demiplane</Link>, except the demiplane is up to a single 50-foot cube in size and is permanent.</p>
<p>This replaces <strong className="hl">the bonus feat gained at 15th level</strong>.</p>
</>};
export default {arcane_bomber:_arcane_bomber,arcane_physician:_arcane_physician,arcane_warden:_arcane_warden,bonded_wizard:_bonded_wizard,chronomancer:_chronomancer,clocksmith:_clocksmith,cruoromancer:_cruoromancer,elder_mythos_scholar:_elder_mythos_scholar,exploiter_wizard:_exploiter_wizard,familiar_adept:_familiar_adept,first_world_caller:_first_world_caller,hallowed_necromancer:_hallowed_necromancer,instructor:_instructor,pact_wizard_ff:_pact_wizard_ff,pact_wizard_hhh:_pact_wizard_hhh,poleiheira_adherent:_poleiheira_adherent,primalist:_primalist,runesage:_runesage,scroll_scholar:_scroll_scholar,scrollmaster:_scrollmaster,shadowcaster:_shadowcaster,siege_mage:_siege_mage,spell_sage:_spell_sage,spellbinder:_spellbinder,spellslinger:_spellslinger,spirit_binder:_spirit_binder,spirit_whisperer:_spirit_whisperer,sword_binder:_sword_binder,undead_master:_undead_master,wind_listener:_wind_listener,worldseeker:_worldseeker}