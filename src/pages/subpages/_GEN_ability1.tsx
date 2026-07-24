import {IonRippleEffect} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import ByLevelPop from '../../components/ByLevelPop';
const _not_found = {title: "Unknown", jsx: <><h2 id="ability-not_found-error">Error</h2>
<p>Unable to find the requested class ability.</p>
</>};
const _advanced_armor_training = {hasJL:true,title: "Advanced Armor Training", topLink: ["Fighter","class/fighter"], jsx: <><div className="jumpList" id="ability-advanced_armor_training-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-advanced_armor_training-adaptable-training-ex">Adaptable Training</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armor-specialization-ex">Armor Specialization</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armored-confidence-ex">Armored Confidence</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armored-juggernaut-ex">Armored Juggernaut</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armored-master">Armored Master</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armored-sacrifice-ex">Armored Sacrifice</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-armored-sprint-ex">Armored Sprint</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-critical-deflection-ex">Critical Deflection</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-master-armorer-ex">Master Armorer</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-quick-donning-ex">Quick Donning</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-steel-headbutt-ex">Steel Headbutt</InnerLink></li><li><InnerLink toTop to="ability-advanced_armor_training-unmoving-ex">Unmoving</InnerLink></li></ul></div><h2 id="ability-advanced_armor_training-advanced-armor-training">Advanced Armor Training</h2>
<p><strong>Sources</strong> <Link to="/source/armor_masters_handbook">Armor Master's Handbook pg. 14-15</Link><br/>Highly skilled and tenacious fighters can gain <em>advanced armor training,</em> learning techniques and applications of the <em>armor training</em> class feature that give them special benefits in exchange for reducing their ability to mitigate their armor's armor check penalty and improve its maximum Dexterity bonus. Beginning at 3rd level, instead of increasing the benefits provided by <em>armor training</em> (reducing his armor's check penalty by 1 and increasing its maximum Dexterity bonus by 1), a fighter can choose an <em>advanced armor training</em> option. If the fighter does so, he still gains the ability to move at his normal speed while wearing medium armor at 3rd level, and while wearing heavy armor at 7th level.</p>
<p><em>Advanced armor training</em> options function only when the fighter is wearing appropriate armor or using a shield, unless otherwise noted. A fighter with an archetype that replaces <em>armor training</em> cannot select <em>advanced armor training</em> options. (However, see the <Link to="/feat/advanced_armor_training">Advanced Armor Training</Link> feat.)</p>
<Ability id="adaptable-training-ex" icon={["upgrade"]}>
<Pair single id="adaptable-training-ex">Adaptable Training (Ex)</Pair>
<Pair title="Ability"><p>The fighter can use his base attack bonus in place of his ranks in one skill of his choice from the following list: Acrobatics, Climb, Disguise, Escape Artist, Intimidate, Knowledge (engineering), Profession (soldier), Ride, or Swim. The fighter need not be wearing armor or using a shield to use this option.</p>
<p>When using adaptable training, the fighter substitutes his total base attack bonus (including his base attack bonus gained through levels in other classes) for his ranks in this skill, but adds the skill's usual ability score modifier and any other bonuses or penalties that would modify that skill.</p>
</Pair>
<Pair title="Special">Once a skill has been selected, it cannot be changed and the fighter can immediately retrain all of his ranks in the selected skill at no additional cost in money or time. In addition, the fighter adds all skills chosen with this option to his list of class skills. A fighter can choose this option up to four times.</Pair>
</Ability>
<Ability id="armor-specialization-ex" icon={["armor-upgrade"]}>
<Pair single id="armor-specialization-ex">Armor Specialization (Ex)</Pair>
<Pair title="Ability">The fighter selects one specific type of armor with which he is proficient, such as <Link to="/eq-armor/chain_shirt">chain shirts</Link> or <Link to="/eq-armor/scale_mail">scale mail</Link>. While wearing the selected type of armor, the fighter adds <Link to="/misc/one_quarter">one-quarter</Link> of his fighter level to the armor's armor bonus, up to a maximum bonus of +3 for light armor, +4 for medium armor, or +5 for heavy armor.</Pair>
<Pair title="Special">This increase to the armor bonus doesn't increase the benefit that the fighter gains from feats, class abilities, or other effects that are determined by his armor's base armor bonus, including other advanced armor training options. A fighter can choose this option multiple times. Each time he chooses it, he applies its benefit to a different type of armor.</Pair>
</Ability>
<Ability id="armored-confidence-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="armored-confidence-ex">Armored Confidence (Ex)</Pair>
<Pair title="Passive Ability"><p>While wearing armor, the fighter gains a bonus on Intimidate checks based upon the type of armor he is wearing: +1 for light armor, +2 for medium armor, or +3 for heavy armor.</p>
<p>In addition, the fighter adds half his <em>armored confidence</em> bonus to the DC of Intimidate checks to demoralize him.</p>
</Pair>
<Pair title="At 7th Level">This bonus increases by 1.</Pair>
<Pair title="At 11th Level">This bonus now increases by 2.</Pair>
<Pair title="At 15th Level">This bonus now increases by 3.</Pair>
<Pair title="At 19th Level">This bonus now increases by 4.</Pair>
</Ability>
<Ability id="armored-juggernaut-ex" icon={["armor-upgrade"]}>
<Pair single id="armored-juggernaut-ex">Armored Juggernaut (Ex)</Pair>
<Pair title="At 3rd Level">When wearing heavy armor, the fighter gains DR 1/-.</Pair>
<Pair title="At 7th Level">The fighter gains DR 1/- when wearing medium armor, and DR 2/- when wearing heavy armor.</Pair>
<Pair title="At 11th Level">The fighter gains DR 1/- when wearing light armor, DR 2/- when wearing medium armor, and DR 3/- when wearing heavy armor.</Pair>
<Pair title="At 19th Level">If the fighter has the <em>armor mastery</em> class feature, these DR values increase by 5.</Pair>
<Pair title="Special">The DR from this ability stacks with that provided by <Link to="/eq-material/adamantine">adamantine</Link> armor, but not with other forms of damage reduction. This damage reduction does not apply if the fighter is <Link to="/misc/helpless">helpless</Link>, <Link to="/misc/stunned">stunned</Link>, or <Link to="/misc/unconscious">unconscious</Link>.</Pair>
</Ability>
<Ability id="armored-master" icon={["stairs-goal"]}>
<Pair single id="armored-master">Armored Master</Pair>
<Pair title="Ability">The fighter gains an <Link to="/main/feats_armor_mastery">armor mastery feat</Link> or a <Link to="/main/feats_shield_mastery">shield mastery feat</Link> as a bonus feat. He must meet all of the feat's prerequisites.</Pair>
</Ability>
<Ability id="armored-sacrifice-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="armored-sacrifice-ex">Armored Sacrifice (Ex)</Pair>
<Pair title="Usage">1 time/day + 1 per eight fighter levels beyond 3rd<ByLevelPop levels={[[3,1],[11,2],[19,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">When damage would cause the fighter or an adjacent ally to be knocked unconscious or killed, the fighter can instead direct the damage to a suit of armor that he is wearing or a shield he is using as an immediate action. The original target takes no damage, but the armor or shield is treated as if it had only half its normal hardness.</Pair>
</Ability>
<Ability id="armored-sprint-ex" icon={["stairs-goal"]}>
<Pair single id="armored-sprint-ex">Armored Sprint (Ex)</Pair>
<Pair title="Ability">The fighter gains <Link to="/feat/run">Run</Link> as a bonus feat. If the fighter is proficient with heavy armor, he treats heavy armor as if it were one category lighter for the purpose of determining how fast he can move while running in armor.</Pair>
</Ability>
<Ability id="critical-deflection-ex" icon={["armor-upgrade"]}>
<Pair single id="critical-deflection-ex">Critical Deflection (Ex)</Pair>
<Pair title="Ability">While wearing armor or using a shield, the fighter gains a +2 bonus to his AC against attack rolls made to confirm a critical hit.</Pair>
<Pair title="At 7th Level">This bonus becomes +3.</Pair>
<Pair title="At 11th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus becomes +5.</Pair>
<Pair title="At 19th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="master-armorer-ex" icon={["upgrade"]}>
<Pair single id="master-armorer-ex">Master Armorer (Ex)</Pair>
<Pair title="Ability"><p>The fighter can use his base attack bonus in place of his ranks in the Craft (armor) skill. The fighter need not be wearing armor or using a shield to use this option. The fighter substitutes his total base attack bonus (including his base attack bonus gained through levels in other classes) for his ranks in this skill, but adds the skill's usual ability score modifier and any other bonuses or penalties that would modify that skill.</p>
<p>Additionally the fighter is treated as having the <Link to="/feat/craft_magic_arms_and_armor">Craft Magic Arms and Armor</Link> and <Link to="/feat/master_craftsman">Master Craftsman</Link> feats, but only for the purpose of making magic armor. The fighter does not need to meet these feats' prerequisites.</p>
</Pair>
</Ability>
<Ability id="quick-donning-ex" icon={["upgrade"]}>
<Pair single id="quick-donning-ex">Quick Donning (Ex)</Pair>
<Pair title="Ability"><p>The fighter can <Link to="/rule/don_armor">don armor</Link> in a hurry without reducing its effectiveness, and remove it quickly when it becomes a hindrance. When the fighter dons or removes his armor or dons it hastily, the amount of time needed to do so is reduced, as noted on the table below. Other characters can still help the fighter don his armor as normal.</p>
<ScrollContainer id="ability-advanced_armor_training--table-0"><table>
<thead>
<tr>
<th>Armor Type</th>
<th>Don</th>
<th>Don Hastily</th>
<th>Remove</th>
</tr>
</thead>
<tbody><tr>
<td>Light armor</td>
<td>5 rounds</td>
<td>1 round</td>
<td>5 rounds</td>
</tr>
<tr>
<td>Medium armor</td>
<td>1 minute</td>
<td>5 rounds</td>
<td>1 minute</td>
</tr>
<tr>
<td>Heavy armor</td>
<td>2 minutes</td>
<td>1 minute</td>
<td>1d4 minutes</td>
</tr>
</tbody></table></ScrollContainer>
<p>Additionally, when wearing hastily donned armor, the fighter can attempt a Strength or Dexterity check as a <strong className="hl">full-round action</strong> to remove the penalties associated with wearing hastily donned armor (DC = 10 + his armor's unmodified armor bonus). If he succeeds at the check, he is treated as having properly donned his armor rather than having hastily donned it.</p>
<p>The fighter can also remove his armor in the same amount of time that it takes him to don his armor hastily. He can even remove sections of armor to escape <Link to="/rule/grapple">grapples</Link> and similar grasping hindrances. Whenever the fighter attempts a combat maneuver check, an Escape Artist check, or a Strength check to escape from an effect that reduces or restricts his ability to move or act, he can reduce the armor bonus of any armor that he is wearing by up to half his armor's base armor bonus. If he does so, he gains a bonus on his check equal to the amount by which he reduced his armor's armor bonus. Multiple uses of this ability cannot reduce the armor's armor bonus below half its base armor bonus, and the reduction to the armor's armor bonus lasts until the fighter recovers and dons the removed pieces of armor.</p>
</Pair>
</Ability>
<Ability id="steel-headbutt-ex" icon={["mailed-fist"]}>
<Pair single id="steel-headbutt-ex">Steel Headbutt (Ex)</Pair>
<Pair title="Ability">While wearing medium or heavy armor, a fighter can deliver a headbutt with his helm as part of a full attack action. This headbutt is in addition to his normal attacks, and is made using the fighter's base attack bonus - 5. A helmet headbutt deals 1d3 points of damage if the fighter is wearing medium armor, or 1d4 points of damage if he is wearing heavy armor (1d2 and 1d3, respectively, for Small creatures), plus an amount of damage equal to 1/2 the fighter's Strength modifier.</Pair>
<Pair title="Special">Treat this attack as a weapon attack made using the same special material (if any) as the armor. The armor's enhancement bonus does not modify the headbutt attack, but the helm can be enchanted as a separate weapon.</Pair>
</Ability>
<Ability id="unmoving-ex" icon={["armor-upgrade"]}>
<Pair single id="unmoving-ex">Unmoving (Ex)</Pair>
<Pair title="Ability">Select one <Link to="/rule/combat_maneuvers">combat maneuver</Link> (except sunder). Whether using his armor as leverage against a grappling foe or using its weight to help him stop a bull rush, a fighter can use his armor to protect him from the chosen combat maneuver. While wearing armor or wielding a shield, the fighter gains a bonus to his CMD against the chosen combat maneuver. The bonus is +1 if he's wearing light armor, +2 if he's wearing medium armor, and +3 if he's wearing heavy armor.</Pair>
<Pair title="At 7th Level">This bonus increases by 1.</Pair>
<Pair title="At 11th Level">The bonus is now increased by 2.</Pair>
<Pair title="At 15th Level">The bonus is now increased by 3.</Pair>
<Pair title="At 19th Level">The bonus is now increased by 4.</Pair>
<Pair title="Special"><Link to="/eq-material/mithral">Mithral</Link> armor provides a bonus 1 lower than normal for armor of its type.</Pair>
</Ability>
</>};
const _advanced_rogue_talents = {hasJL:true,title: "Advanced Rogue Talents", topLink: ["Rogue","class/rogue"], jsx: <div className="compilation"><div className="jumpList" id="ability-advanced_rogue_talents-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-advanced_rogue_talents-primary-sneak-attack-talents">Primary Sneak Attack Talents</InnerLink></li><li><InnerLink toTop to="ability-advanced_rogue_talents-magical-talents">Magical Talents</InnerLink></li><li><InnerLink toTop to="ability-advanced_rogue_talents-combat-talents">Combat Talents</InnerLink></li><li><InnerLink toTop to="ability-advanced_rogue_talents-other-talents">Other Talents</InnerLink></li></ul></div><h2 id="ability-advanced_rogue_talents-advanced-rogue-talents">Advanced Rogue Talents</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 69</Link><br/>At 10th level, and every two levels thereafter, a rogue can choose an advanced rogue talent in place of a <Link to="/ability/rogue_talent">rogue talent</Link>.</p>
<h3 id="ability-advanced_rogue_talents-primary-sneak-attack-talents" data-hash-target>Primary Sneak Attack Talents</h3>
<p>These talents add effects to a rogue's <Link to="/ability/sneak_attack">sneak attack</Link>. Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.</p>
<Ability id="talentconfoundingblades-confounding-blades-ex-fn1" icon={["armor-downgrade"]}>
<Pair single id="talentconfoundingblades-confounding-blades-ex-fn1"><Link to="/talent/confounding_blades">⮞</Link> Confounding Blades (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-1" id="ability-advanced_rogue_talents-fake-fn-1" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/slow_reactions">Slow reactions</Link></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, her target cannot make attacks of opportunity for 1d4+1 rounds.</Pair>
</Ability>
<Ability id="talentcripplingstrike-crippling-strike-ex-fn2" icon={["armor-downgrade"]}>
<Pair single id="talentcripplingstrike-crippling-strike-ex-fn2"><Link to="/talent/crippling_strike">⮞</Link> Crippling Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-2" id="ability-advanced_rogue_talents-fake-fn-2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of <Link to="/rule/strength_damage">Strength damage</Link>.</Pair>
</Ability>
<Ability id="talentdeadlysneak-deadly-sneak-ex-fn3" icon={["upgrade"]}>
<Pair single id="talentdeadlysneak-deadly-sneak-ex-fn3"><Link to="/talent/deadly_sneak">⮞</Link> Deadly Sneak (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-3" id="ability-advanced_rogue_talents-fake-fn-3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/powerful_sneak">Powerful sneak</Link></Pair>
<Pair title="Passive Ability">Whenever a rogue with this talent uses the <em>powerful sneak</em> rogue talent, she treats all 1s and 2s on the sneak attack damage dice as 3s.</Pair>
</Ability>
<Ability id="talentdispellingattack-dispelling-attack-su-fn4" icon={["armor-downgrade"]}>
<Pair single id="talentdispellingattack-dispelling-attack-su-fn4"><Link to="/talent/dispelling_attack">⮞</Link> Dispelling Attack (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4" id="ability-advanced_rogue_talents-fake-fn-4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/major_magic">Major magic</Link></Pair>
<Pair title="Ability">Opponents that are dealt sneak attack damage by a rogue with this ability are affected by a targeted <Link to="/spell/dispel_magic">dispel magic</Link>, targeting the lowest-level spell effect active on the target. The caster level for this ability is equal to the rogue's level.</Pair>
</Ability>
<Ability id="talententanglementofblades-entanglement-of-blades-ex-fn3-2" icon={["armor-downgrade"]}>
<Pair single id="talententanglementofblades-entanglement-of-blades-ex-fn3-2"><Link to="/talent/entanglement_of_blades">⮞</Link> Entanglement of Blades (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-3.2" id="ability-advanced_rogue_talents-fake-fn-3.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee attack that deals sneak attack damage, the target cannot take a 5-foot step until the beginning of the rogue's next turn.</Pair>
</Ability>
<Ability id="talenthamstringstrike-hamstring-strike-ex-fn5" icon={["armor-downgrade"]}>
<Pair single id="talenthamstringstrike-hamstring-strike-ex-fn5"><Link to="/talent/hamstring_strike">⮞</Link> Hamstring Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-5" id="ability-advanced_rogue_talents-fake-fn-5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">Anytime a rogue with this talent successfully hits an opponent with a sneak attack, she may forgo her sneak attack damage to try to hamstring her opponent. If the attack succeeds, the rogue deals weapon damage as normal, but instead of the rogue dealing sneak attack damage, the target is knocked <Link to="/rule/prone">prone</Link> and is unable to take move actions during its next turn. A successful Fortitude save (DC = 10 + 1/2 the rogue's level + the rogue's Dexterity modifier) negates this effect.</Pair>
</Ability>
<Ability id="talentharrowstrike-harrow-strike-ex-fn6" icon={["armor-downgrade"]}>
<Pair single id="talentharrowstrike-harrow-strike-ex-fn6"><Link to="/talent/harrow_strike">⮞</Link> Harrow Strike (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-6" id="ability-advanced_rogue_talents-fake-fn-6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">Once per day while making a sneak attack against a creature, you can draw a random card from a <Link to="/eq-misc/harrow_deck">harrow deck</Link> you own. If your attack hits, instead of dealing sneak attack damage as normal, you deal a number of points of ability damage equal to your number of sneak attack dice. The ability score damaged is the score affiliated with the suit of the harrow card drawn.</Pair>
<Pair title="At 15th Level">You can use this 2 times/day.</Pair>
<Pair title="At 20th Level">You can use this 3 times/day.</Pair>
</Ability>
<Ability id="talentimprovedshadowschill-improved-shadows-chill-su-fn7" icon={["upgrade"]}>
<Pair single id="talentimprovedshadowschill-improved-shadows-chill-su-fn7"><Link to="/talent/improved_shadows_chill">⮞</Link> Improved Shadow's Chill (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-7" id="ability-advanced_rogue_talents-fake-fn-7" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">Has cold <Link to="/umr/resistance">resistance</Link> from a racial trait, <Link to="/talent/shadows_chill">shadow's chill</Link></Pair>
<Pair title="Ability">When a rogue with this talent hits a creature with a melee weapon that deals sneak attack damage, the sneak attack damage is cold damage. Normal weapon damage is unaffected.</Pair>
</Ability>
<Ability id="talentpetrifyingstrike-petrifying-strike-su-fn8" icon={["armor-downgrade"]}>
<Pair single id="talentpetrifyingstrike-petrifying-strike-su-fn8"><Link to="/talent/petrifying_strike">⮞</Link> Petrifying Strike (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-8" id="ability-advanced_rogue_talents-fake-fn-8" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">Whenever the rogue damages a creature with one of her sneak attacks, she also deals 2 points of <Link to="/rule/dexterity_damage">Dexterity damage</Link> to that creature as its body petrifies.</Pair>
</Ability>
<Ability id="talentresonatingrumbles-resonating-rumbles-su-fn8-2" icon={["armor-downgrade"]}>
<Pair single id="talentresonatingrumbles-resonating-rumbles-su-fn8-2"><Link to="/talent/resonating_rumbles">⮞</Link> Resonating Rumbles (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-8.2" id="ability-advanced_rogue_talents-fake-fn-8.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent makes a successful sneak attack against a creature with <Link to="/umr/tremorsense">tremorsense</Link>, the rogue can subtract 3 dice from her sneak attack damage to prevent the target from using tremorsense for a number of rounds equal to half her rogue level.</Pair>
</Ability>
<h3 id="ability-advanced_rogue_talents-magical-talents" data-hash-target>Magical Talents</h3>
<Ability id="talentaligneddisguise-aligned-disguise-sp-fn9" icon={["armor-upgrade"]}>
<Pair single id="talentaligneddisguise-aligned-disguise-sp-fn9"><Link to="/talent/aligned_disguise">⮞</Link> Aligned Disguise (Sp) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-9" id="ability-advanced_rogue_talents-fake-fn-9" data-hash-target to="ability-advanced_rogue_talents-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">Has <em>disguise self</em> as a spell-like ability</Pair>
<Pair title="Ability">When a rogue with this talent uses the <Link to="/spell/disguise_self">disguise self</Link> spell-like ability, she can also alter her alignment aura to deceive spells that discern alignment (such as <Link to="/spell/detect_evil">detect evil</Link>) for the duration of the disguise self effect. She can choose to detect as any specific alignment, or to detect as no alignment at all. This ability does not protect against spells or effects that cause harm based on alignment.</Pair>
</Ability>
<Ability id="talentfamiliar-familiar-ex-fn1-2" icon={["stairs-goal"]}>
<Pair single id="talentfamiliar-familiar-ex-fn1-2"><Link to="/talent/familiar">⮞</Link> Familiar (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-1.2" id="ability-advanced_rogue_talents-fake-fn-1.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/minor_magic">Minor magic</Link>, <Link to="/talent/major_magic">major magic</Link></Pair>
<Pair title="Ability">A rogue with this talent gains a <Link to="/sidekick/familiar">familiar</Link> as the <Link to="/ability/familiar">familiar</Link> option of the wizard's <em>arcane bond</em> class feature. This ability functions exactly like that part of the class feature, but the rogue's effective wizard level is her rogue level -4.</Pair>
</Ability>
<Ability id="talentfoundersblessing-founders-blessing-fn10" icon={["upgrade"]}>
<Pair single id="talentfoundersblessing-founders-blessing-fn10" flavor="The rogue can call upon the mystical legacies of the Council."><Link to="/talent/founders_blessing">⮞</Link> Founders' Blessing <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-10" id="ability-advanced_rogue_talents-fake-fn-10" data-hash-target to="ability-advanced_rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, she can choose a skill in which she has no ranks. After she spends 10 minutes communing with these mystical spirits, they grant her a luck bonus equal to her rogue level with that skill, and she can attempt checks with that skill as if she were trained in its use. The effects of <em>founder's blessing</em> last for 8 hours.</Pair>
</Ability>
<Ability id="talentglibfacade-glib-facade-sp-fn11" icon={["magic-swirl"]}>
<Pair single id="talentglibfacade-glib-facade-sp-fn11"><Link to="/talent/glib_facade">⮞</Link> Glib Facade (Sp) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-11" id="ability-advanced_rogue_talents-fake-fn-11" data-hash-target to="ability-advanced_rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/innocent_facade">Innocent facade</Link></Pair>
<Pair title="Ability">Once per day, a rogue with this advanced talent can use <Link to="/spell/glibness">glibness</Link> as a spell-like ability, using her rogue level as the spell's caster level.</Pair>
</Ability>
<Ability id="talenthiddenmind-hidden-mind-ex-fn12" icon={["armor-upgrade"]}>
<Pair single id="talenthiddenmind-hidden-mind-ex-fn12"><Link to="/talent/hidden_mind">⮞</Link> Hidden Mind (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-12" id="ability-advanced_rogue_talents-fake-fn-12" data-hash-target to="ability-advanced_rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent uses various devious techniques, including mental exercises and dusting her clothing with a small amount of lead, to protect herself from divinations, with the same benefits as if she cast <Link to="/spell/nondetection">nondetection</Link> on herself with a caster level equal to her rogue level.</Pair>
</Ability>
<Ability id="talentslipperymind-slippery-mind-ex-fn4-2" icon={["armor-upgrade"]}>
<Pair single id="talentslipperymind-slippery-mind-ex-fn4-2" flavor="This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her."><Link to="/talent/slippery_mind">⮞</Link> Slippery Mind (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4.2" id="ability-advanced_rogue_talents-fake-fn-4.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">If a rogue with <em>slippery mind</em> is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.</Pair>
</Ability>
<h3 id="ability-advanced_rogue_talents-combat-talents" data-hash-target>Combat Talents</h3>
<Ability id="talentagainstthewall-against-the-wall-ex-fn8-3" icon={["upgrade"]}>
<Pair single id="talentagainstthewall-against-the-wall-ex-fn8-3"><Link to="/talent/against_the_wall">⮞</Link> Against the Wall (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-8.3" id="ability-advanced_rogue_talents-fake-fn-8.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent is considered to be <Link to="/rule/flanking">flanking</Link> any opponent adjacent to a stone wall (whether the stone is worked or unworked).</Pair>
</Ability>
<Ability id="talentanotherday-another-day-ex-fn3-3" icon={["armor-upgrade","broken-shield"]}>
<Pair single id="talentanotherday-another-day-ex-fn3-3"><Link to="/talent/another_day">⮞</Link> Another Day (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-3.3" id="ability-advanced_rogue_talents-fake-fn-3.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Immediate Action">Once per day, when the rogue would be reduced to 0 or fewer hit points by a melee attack, she can take a 5-foot step. If the movement takes her out of the reach of the attack, she takes no damage from the attack. The rogue is <Link to="/misc/staggered">staggered</Link> for 1 round on her next turn.</Pair>
</Ability>
<Ability id="talentblindingstrike-blinding-strike-fn7-2" icon={["stairs-goal"]}>
<Pair single id="talentblindingstrike-blinding-strike-fn7-2"><Link to="/talent/blinding_strike">⮞</Link> Blinding Strike <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-7.2" id="ability-advanced_rogue_talents-fake-fn-7.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level rogue, <Link to="/talent/obscuring_blow">obscuring blow</Link></Pair>
<Pair title="Ability">A rogue who selects this talent gains <Link to="/feat/blinding_critical">Blinding Critical</Link> as a bonus feat, even if she doesn't meet the prerequisites.</Pair>
</Ability>
<Ability id="talentdanceofdisorientingshadows-dance-of-disorienting-shadows-ex-fn7-3" icon={["mailed-fist"]}>
<Pair single id="talentdanceofdisorientingshadows-dance-of-disorienting-shadows-ex-fn7-3"><Link to="/talent/dance_of_disorienting_shadows">⮞</Link> Dance of Disorienting Shadows (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-7.3" id="ability-advanced_rogue_talents-fake-fn-7.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can attempt a <Link to="/skill/perform">Perform</Link> (dance) check in place of a combat maneuver check when attempting a <Link to="/rule/reposition">reposition</Link> combat maneuver.</Pair>
</Ability>
<Ability id="talentdeadlycocktail-deadly-cocktail-ex-fn3-4" icon={["stairs-goal"]}>
<Pair single id="talentdeadlycocktail-deadly-cocktail-ex-fn3-4"><Link to="/talent/deadly_cocktail">⮞</Link> Deadly Cocktail (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-3.4" id="ability-advanced_rogue_talents-fake-fn-3.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can apply two doses of poison to a weapon at once. These can be separate poisons, in which case they both affect the target individually, or two doses of the same toxin, in which case the poisons' frequency is extended by 50% and the save DC increases by +2.</Pair>
<Pair title="Special">This talent is an exception to the rule that injury poisons can only be delivered one dose at a time.</Pair>
</Ability>
<Ability id="talentdefensiveroll-defensive-roll-ex-fn2-2" icon={["armor-upgrade"]}>
<Pair single id="talentdefensiveroll-defensive-roll-ex-fn2-2" flavor="With this advanced talent, the rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would."><Link to="/talent/defensive_roll">⮞</Link> Defensive Roll (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-2.2" id="ability-advanced_rogue_talents-fake-fn-2.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll&mdash;if she is denied her Dexterity bonus to AC, she can't use this ability.</Pair>
<Pair title="Special">Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's <Link to="/ability/evasion">evasion</Link> ability does not apply to the defensive roll.</Pair>
</Ability>
<Ability id="talentfasttumble-fast-tumble-ex-fn3-5" icon={["upgrade"]}>
<Pair single id="talentfasttumble-fast-tumble-ex-fn3-5"><Link to="/talent/fast_tumble">⮞</Link> Fast Tumble (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-3.5" id="ability-advanced_rogue_talents-fake-fn-3.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent uses <Link to="/skill/acrobatics">Acrobatics</Link> to move at full speed through a threatened square without provoking an attack of opportunity, the DC of the Acrobatics check does not increase by 10.</Pair>
</Ability>
<Ability id="talentgrazingshot-grazing-shot-ex-fn13" icon={["bowman"]}>
<Pair single id="talentgrazingshot-grazing-shot-ex-fn13" flavor="Particularly deft rogues can strike two foes with one well-placed shot."><Link to="/talent/grazing_shot">⮞</Link> Grazing Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-13" id="ability-advanced_rogue_talents-fake-fn-13" data-hash-target to="ability-advanced_rogue_talents-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/race/drow">Drow</Link></Pair>
<Pair title="Standard Action">A rogue with this talent can fire a <Link to="/eq-weapon/hand_crossbow">hand crossbow</Link> at an enemy who is granted <Link to="/rule/cover">cover</Link> by another opponent. Make one ranged attack roll and compare the result to each opponent's AC. Each hit deals 1 point of damage. Any special weapon properties or <Link to="/misc/precision_damage">precision damage</Link> apply to only a single target, but any poison applied to the bolt affects all targets struck.</Pair>
</Ability>
<Ability id="talenthardminded-hard-minded-ex-fn1-3" icon={["armor-upgrade"]}>
<Pair single id="talenthardminded-hard-minded-ex-fn1-3" flavor="A rogue with this talent is hard to fool with illusions."><Link to="/talent/hard_minded">⮞</Link> Hard Minded (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-1.3" id="ability-advanced_rogue_talents-fake-fn-1.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Passive Ability">She automatically receives a save to disbelieve any illusion she can see each round at the start of her turn, even if she hasn't interacted with it. If she fails a saving throw against an illusion that is not to disbelieve, she can attempt to save again again 1 round later at the same DC. She gets only one extra chance to succeed at her saving throw.</Pair>
</Ability>
<Ability id="talenthunterssurprise-hunters-surprise-ex-fn14" icon={["upgrade"]}>
<Pair single id="talenthunterssurprise-hunters-surprise-ex-fn14"><Link to="/talent/hunters_surprise">⮞</Link> Hunter's Surprise (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14" id="ability-advanced_rogue_talents-fake-fn-14" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, a rogue with this talent can designate a single enemy she is adjacent to as her prey. Until the end of her next turn, she can add her sneak attack damage to all attacks made against her prey, even if she is not flanking it or it is not flat-footed.</Pair>
</Ability>
<Ability id="talentimprovedevasion-improved-evasion-ex-fn4-3" icon={["armor-upgrade"]}>
<Pair single id="talentimprovedevasion-improved-evasion-ex-fn4-3"><Link to="/talent/improved_evasion">⮞</Link> Improved Evasion (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4.3" id="ability-advanced_rogue_talents-fake-fn-4.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">This works like <Link to="/ability/evasion">evasion</Link>, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks, she henceforth takes only half damage on a failed save. A <Link to="/misc/helpless">helpless</Link> rogue does not gain the benefit of <em>improved evasion.</em></Pair>
</Ability>
<Ability id="talentknockoutblow-knock-out-blow-ex-fn14-2" icon={["armor-downgrade"]}>
<Pair single id="talentknockoutblow-knock-out-blow-ex-fn14-2"><Link to="/talent/knock_out_blow">⮞</Link> Knock-Out Blow (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.2" id="ability-advanced_rogue_talents-fake-fn-14.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, the rogue can forgo her sneak attack damage to attempt to knock out an opponent. She must declare the use of <em>knock-out blow</em> before she makes the attack. If the attack hits, it does normal damage, but instead of dealing sneak attack damage (and instead of any effect that triggers when the rogue deals sneak attack damage), the target falls <Link to="/misc/unconscious">unconscious</Link> for 1d4 rounds. A successful Fortitude save reduces this effect to <Link to="/misc/staggered">staggered</Link> for 1 round. The DC of this save is equal to 10 + 1/2 the rogue's level + the rogue's Intelligence modifier.</Pair>
</Ability>
<Ability id="talentopportunist-opportunist-ex-fn4-4" icon={["stairs-goal"]}>
<Pair single id="talentopportunist-opportunist-ex-fn4-4"><Link to="/talent/opportunist">⮞</Link> Opportunist (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4.4" id="ability-advanced_rogue_talents-fake-fn-4.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as an attack of opportunity for that round.</Pair>
<Pair title="Special">Even a rogue with the <Link to="/feat/combat_reflexes">Combat Reflexes</Link> feat can't use the <em>opportunist</em> ability more than once per round.</Pair>
</Ability>
<Ability id="talentredirectattack-redirect-attack-ex-fn14-3" icon={["armor-upgrade"]}>
<Pair single id="talentredirectattack-redirect-attack-ex-fn14-3"><Link to="/talent/redirect_attack">⮞</Link> Redirect Attack (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.3" id="ability-advanced_rogue_talents-fake-fn-14.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, when a rogue with this talent is hit with a melee attack, she can redirect the attack to strike at an adjacent creature with a <strong className="hl">free action</strong>. The creature targeted must be within melee reach of the attack that hit the rogue, and the creature that made the attack against the rogue must make a new attack roll against the new target.</Pair>
</Ability>
<Ability id="talentreflexiveshadowshield-reflexive-shadow-shield-su-fn7-4" icon={["armor-upgrade"]}>
<Pair single id="talentreflexiveshadowshield-reflexive-shadow-shield-su-fn7-4"><Link to="/talent/reflexive_shadow_shield">⮞</Link> Reflexive Shadow Shield (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-7.4" id="ability-advanced_rogue_talents-fake-fn-7.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/resiliency">Resiliency</Link></Pair>
<Pair title="Immediate Action">Once per day, the rogue can gain an amount of cold <Link to="/umr/resistance">resistance</Link> or electricity resistance equal to half the rogue's level. This resistance lasts for 1 round.</Pair>
<Pair title="Special">If the rogue has the <em>shadowy resistance</em> racial trait, the cold or electricity resistance stacks with the resistance that trait grants; otherwise, the energy resistance does not stack with any cold or electricity resistance the rogue has.</Pair>
</Ability>
<Ability id="talentshrinewalk-shrinewalk-sp-fn10-2" icon={["stairs-goal","magic-swirl"]}>
<Pair single id="talentshrinewalk-shrinewalk-sp-fn10-2"><Link to="/talent/shrinewalk">⮞</Link> Shrinewalk (Sp) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-10.2" id="ability-advanced_rogue_talents-fake-fn-10.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">Council agents can walk the mystic paths between Westcrown's shrines. A rogue with <em>shrinewalk</em> can create her own shrine simply by designating an area in any urban region by placing a unique marking or rune on a wall or the ground. This marking is not magical, and if it is defaced or erased, it can no longer be used by the rogue (the marking can be hidden from view without removing its usability, including painting over the marking in question).</Pair>
<Pair title="Ability">Once placed, the rogue can use <Link to="/spell/word_of_recall">word of recall</Link> once per day to return to the shrine.</Pair>
<Pair title="Special">A rogue can maintain one shrine at a time; if a new marking is created in a new location, the previous shrine becomes inactive.</Pair>
</Ability>
<Ability id="talentstealthysniper-stealthy-sniper-ex-fn14-4" icon={["upgrade"]}>
<Pair single id="talentstealthysniper-stealthy-sniper-ex-fn14-4"><Link to="/talent/stealthy_sniper">⮞</Link> Stealthy Sniper (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.4" id="ability-advanced_rogue_talents-fake-fn-14.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent uses the <Link to="/skill/stealth">Stealth</Link> skill to snipe, she only suffers a -10 penalty on the Stealth check, instead of -20.</Pair>
</Ability>
<Ability id="talentunwittingally-unwitting-ally-ex-fn15" icon={["stairs-goal"]}>
<Pair single id="talentunwittingally-unwitting-ally-ex-fn15"><Link to="/talent/unwitting_ally">⮞</Link> Unwitting Ally (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-15" id="ability-advanced_rogue_talents-fake-fn-15" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can spend a <strong className="hl">swift action</strong> to attempt to make an opponent act like an ally for purposes of providing a <Link to="/rule/flank">flank</Link> until the beginning of the rogue's next turn. The opponent must be able to hear and see the rogue, and the rogue must succeed at a Bluff check opposed by the opponent's Sense Motive. If the check succeeds, the opponent acts as an ally for the purpose of providing a flank.</Pair>
<Pair title="Special">Whether or not the check succeeds, the rogue cannot use this trick again on the same opponent for the next 24 hours. If the rogue fails the check by 5 or more, she cannot use the <em>unwitting ally</em> ability on any opponent within line of sight of the failed attempt for 24 hours.</Pair>
</Ability>
<Ability id="talentweaponsnatcher-weapon-snatcher-ex-fn15-2" icon={["mailed-fist"]}>
<Pair single id="talentweaponsnatcher-weapon-snatcher-ex-fn15-2"><Link to="/talent/weapon_snatcher">⮞</Link> Weapon Snatcher (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-15.2" id="ability-advanced_rogue_talents-fake-fn-15.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can make a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check in place of a combat maneuver check when attempting to <Link to="/rule/disarm">disarm</Link> an opponent.</Pair>
</Ability>
<h3 id="ability-advanced_rogue_talents-other-talents" data-hash-target>Other Talents</h3>
<Ability id="talentfeat-feat-fn4-5" icon={["stairs-goal"]}>
<Pair single id="talentfeat-feat-fn4-5"><Link to="/talent/feat">⮞</Link> Feat <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4.5" id="ability-advanced_rogue_talents-fake-fn-4.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A rogue may gain any feat that she qualifies for in place of a rogue talent.</Pair>
</Ability>
<Ability id="talentfrugaltrapsmith-frugal-trapsmith-ex-fn14-5" icon={["upgrade"]}>
<Pair single id="talentfrugaltrapsmith-frugal-trapsmith-ex-fn14-5"><Link to="/talent/frugal_trapsmith">⮞</Link> Frugal Trapsmith (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.5" id="ability-advanced_rogue_talents-fake-fn-14.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">When a rogue with this talent constructs a mechanical trap, she only pays 75% of the normal cost.</Pair>
</Ability>
<Ability id="talentgetawaymaster-getaway-master-ex-fn1-4" icon={["info"]}>
<Pair single id="talentgetawaymaster-getaway-master-ex-fn1-4"><Link to="/talent/getaway_master">⮞</Link> Getaway Master (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-1.4" id="ability-advanced_rogue_talents-fake-fn-1.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/getaway_artist">Getaway artist</Link></Pair>
<Pair title="Ability">A rogue with this talent gains a +10 bonus on all <Link to="/rule/driving_check">drive checks</Link>.</Pair>
</Ability>
<Ability id="talenthideinplainsight-hide-in-plain-sight-ex-fn15-3" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="talenthideinplainsight-hide-in-plain-sight-ex-fn15-3"><Link to="/talent/hide_in_plain_sight">⮞</Link> Hide in Plain Sight (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-15.3" id="ability-advanced_rogue_talents-fake-fn-15.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent can select a single terrain from the ranger's <Link to="/ability/favored_terrain">favored terrain</Link> list. She is a master at hiding in that terrain, and while within that terrain, she can use the <Link to="/skill/stealth">Stealth</Link> skill to hide, even while being observed.</Pair>
<Pair title="Special">A rogue may take this advanced talent more than once, each time selecting a different terrain from the favored terrain list.</Pair>
</Ability>
<Ability id="talentmasterofdisguise-master-of-disguise-ex-fn14-6" icon={["upgrade"]}>
<Pair single id="talentmasterofdisguise-master-of-disguise-ex-fn14-6"><Link to="/talent/master_of_disguise">⮞</Link> Master of Disguise (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.6" id="ability-advanced_rogue_talents-fake-fn-14.6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, a rogue with this talent gains a +10 bonus on a single <Link to="/skill/disguise">Disguise</Link> check.</Pair>
</Ability>
<Ability id="talentmastertricks-master-tricks-fn15-4" icon={["stairs-goal"]}>
<Pair single id="talentmastertricks-master-tricks-fn15-4"><Link to="/talent/master_tricks">⮞</Link> Master Tricks <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-15.4" id="ability-advanced_rogue_talents-fake-fn-15.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability">The rogue can select a ninja trick from the list of <Link to="/ability/master_tricks">master tricks</Link> in place of a rogue talent. The rogue cannot select a ninja trick that has the same name as a rogue talent. The rogue can choose but cannot use tricks that require ki points, unless she has a ki pool.</Pair>
</Ability>
<Ability id="talentpiercethedarkness-pierce-the-darkness-ex-fn16" icon={["stairs-goal"]}>
<Pair single id="talentpiercethedarkness-pierce-the-darkness-ex-fn16" flavor="The rogue can extend her senses of hearing and smell in darkness or when blinded."><Link to="/talent/pierce_the_darkness">⮞</Link> Pierce the Darkness (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-16" id="ability-advanced_rogue_talents-fake-fn-16" data-hash-target to="ability-advanced_rogue_talents-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Ability">She gains <Link to="/umr/blindsense">blindsense</Link> out to a range of 5 feet, but only against creatures concealed by darkness or her own blindness. She still suffers the normal miss chance for attacking creatures with <Link to="/rule/concealment">concealment</Link>.</Pair>
</Ability>
<Ability id="talentrumormonger-rumormonger-ex-fn15-5" icon={["stairs-goal"]}>
<Pair single id="talentrumormonger-rumormonger-ex-fn15-5"><Link to="/talent/rumormonger">⮞</Link> Rumormonger (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-15.5" id="ability-advanced_rogue_talents-fake-fn-15.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability"><p>A rogue with this talent can attempt to spread a rumor though a small town or larger settlement by making a <Link to="/skill/bluff">Bluff</Link> check. She can do so a number of times per week equal to her Charisma modifier (minimum 0). The DC is based on the size of the settlement, and it takes a week for the rumor to propagate through the settlement. If the check succeeds, the rumor is practically accepted as fact within the community; succeeding by 5 or more over the DC decreases the time it takes the rumor to propagate by 1d4 days. A failed check means the rumor failed to gain traction, while failing by 5 or more causes the opposite of the rumor or some other competing theory involving the rumor's subject to take hold.</p>
<ScrollContainer id="ability-advanced_rogue_talents--table-0"><table>
<thead>
<tr>
<th>Community Size</th>
<th>DC</th>
</tr>
</thead>
<tbody><tr>
<td>Small town</td>
<td>18</td>
</tr>
<tr>
<td>Large town</td>
<td>20</td>
</tr>
<tr>
<td>Small city</td>
<td>25</td>
</tr>
<tr>
<td>Large city</td>
<td>30</td>
</tr>
<tr>
<td>Metropolis</td>
<td>35</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="talentseeindarkness-see-in-darkness-su-fn7-5" icon={["stairs-goal"]}>
<Pair single id="talentseeindarkness-see-in-darkness-su-fn7-5"><Link to="/talent/see_in_darkness">⮞</Link> See in Darkness (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-7.5" id="ability-advanced_rogue_talents-fake-fn-7.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">Darkvision</Pair>
<Pair title="Ability">The rogue gains the <Link to="/umr/see_in_darkness">see in darkness</Link> ability.</Pair>
</Ability>
<Ability id="talentskillmastery-skill-mastery-fn4-6" icon={["upgrade"]}>
<Pair single id="talentskillmastery-skill-mastery-fn4-6" flavor="The rogue becomes so confident in the use of certain skills that she can use them reliably even under adverse conditions."><Link to="/talent/skill_mastery">⮞</Link> Skill Mastery <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-4.6" id="ability-advanced_rogue_talents-fake-fn-4.6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Choice">Upon gaining this ability, the rogue selects a number of skills equal to 3 + her Intelligence modifier.</Pair>
<Pair title="Ability">When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so.</Pair>
<Pair title="Special">A rogue may gain this special ability multiple times, selecting additional skills for skill mastery to apply to each time.</Pair>
</Ability>
<Ability id="talentstalkertalent-stalker-talent-fn12-2" icon={["stairs-goal"]}>
<Pair single id="talentstalkertalent-stalker-talent-fn12-2"><Link to="/talent/stalker_talent">⮞</Link> Stalker Talent <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-12.2" id="ability-advanced_rogue_talents-fake-fn-12.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">The rogue can select a <Link to="/ability/vigilante_talents">vigilante talent</Link>. For the purposes of selecting and using this talent, she counts as a 10th-level <Link to="/class/vigilante">vigilante</Link> with the <em>stalker</em> specialization, regardless of her actual rogue level. Her sneak attack counts as a <em>hidden strike</em> with reduced damage for the purpose of determining the effects of her vigilante talent, which means, among other things, that she can't apply any of the <em>hidden strike talents</em> to her sneak attacks.</Pair>
</Ability>
<Ability id="talentstonyskin-stony-skin-ex-fn8-4" icon={["armor-upgrade"]}>
<Pair single id="talentstonyskin-stony-skin-ex-fn8-4"><Link to="/talent/stony_skin">⮞</Link> Stony Skin (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-8.4" id="ability-advanced_rogue_talents-fake-fn-8.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">A rogue with this talent gains DR 2/adamantine.</Pair>
<Pair title="Special">A rogue can select this talent up to three times; each additional time the rogue selects this talent, the DR granted by this talent increases by 1.</Pair>
</Ability>
<Ability id="talentthoughtfulreexamining-thoughtful-reexamining-ex-fn14-7" icon={["rolling-dices"]}>
<Pair single id="talentthoughtfulreexamining-thoughtful-reexamining-ex-fn14-7"><Link to="/talent/thoughtful_reexamining">⮞</Link> Thoughtful Reexamining (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-14.7" id="ability-advanced_rogue_talents-fake-fn-14.7" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">Once per day, a rogue with this talent can reroll a <Link to="/skill/knowledge">Knowledge</Link>, <Link to="/skill/sense_motive">Sense Motive</Link>, or <Link to="/skill/perception">Perception</Link> skill check to try to gain new or better information from the roll. This reroll can be made any time during the same day as the original check.</Pair>
</Ability>
<Ability id="talentunlockki-unlock-ki-su-fn11-2" icon={["upgrade"]}>
<Pair single id="talentunlockki-unlock-ki-su-fn11-2"><Link to="/talent/unlock_ki">⮞</Link> Unlock Ki (Su) <sup><InnerLink showBacklink="backlink-ability-advanced_rogue_talents-fake-fn-11.2" id="ability-advanced_rogue_talents-fake-fn-11.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">Has a ki pool</Pair>
<Pair title="Ability">A rogue with this advanced talent increases the number of points in the ki pool that she gains from the <Link to="/talent/ki_pool">ki pool</Link> rogue talent to be equal to 1/2 her rogue level + her highest mental ability score modifier (Intelligence, Wisdom, or Charisma).</Pair>
<Pair title="Swift Action">In addition, she can spend 2 points from her ki pool to gain the skill unlocks for one skill of her choice as appropriate for her number of ranks in that skill. This benefit lasts for 1 minute.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-advanced_rogue_talents-label">Footnotes</h3><ol>
<li id="ability-advanced_rogue_talents-fake-fn-1-target"><p><Link to="/source/ultimate_combat">Ultimate Combat</Link> pg. 70 <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_rogue_talents-fake-fn-1" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_rogue_talents-fake-fn-1.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_rogue_talents-fake-fn-1.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_rogue_talents-fake-fn-1.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-2-target"><p><Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link> pg. 69 <InnerLink aria-label="Back to reference 2" id="backlink-ability-advanced_rogue_talents-fake-fn-2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-advanced_rogue_talents-fake-fn-2.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 131 <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_rogue_talents-fake-fn-3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_rogue_talents-fake-fn-3.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_rogue_talents-fake-fn-3.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_rogue_talents-fake-fn-3.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_rogue_talents-fake-fn-3.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-3.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-4-target"><p>PRPG Core Rulebook pg. 70 <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_rogue_talents-fake-fn-4.6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-4.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-5-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 26 <InnerLink aria-label="Back to reference 5" id="backlink-ability-advanced_rogue_talents-fake-fn-5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-6-target"><p><Link to="/source/the_harrow_handbook">The Harrow Handbook</Link> pg. 21 <InnerLink aria-label="Back to reference 6" id="backlink-ability-advanced_rogue_talents-fake-fn-6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-6">↩</InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-7-target"><p><Link to="/source/blood_of_shadows">Blood of Shadows</Link> pg. 9 <InnerLink aria-label="Back to reference 7" id="backlink-ability-advanced_rogue_talents-fake-fn-7" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-advanced_rogue_talents-fake-fn-7.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-advanced_rogue_talents-fake-fn-7.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-advanced_rogue_talents-fake-fn-7.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-advanced_rogue_talents-fake-fn-7.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-7.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-8-target"><p><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link> pg. 9 <InnerLink aria-label="Back to reference 8" id="backlink-ability-advanced_rogue_talents-fake-fn-8" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-advanced_rogue_talents-fake-fn-8.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-advanced_rogue_talents-fake-fn-8.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-advanced_rogue_talents-fake-fn-8.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-8.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-9-target"><p>Blood of Shadows pg. 8 <InnerLink aria-label="Back to reference 9" id="backlink-ability-advanced_rogue_talents-fake-fn-9" data-hash-target to="ability-advanced_rogue_talents-fake-fn-9">↩</InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-10-target"><p><Link to="/source/adventurers_guide">Adventurer's Guide</Link> pg. 53 <InnerLink aria-label="Back to reference 10" id="backlink-ability-advanced_rogue_talents-fake-fn-10" data-hash-target to="ability-advanced_rogue_talents-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-advanced_rogue_talents-fake-fn-10.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-11-target"><p><Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox</Link> pg. 27 <InnerLink aria-label="Back to reference 11" id="backlink-ability-advanced_rogue_talents-fake-fn-11" data-hash-target to="ability-advanced_rogue_talents-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-advanced_rogue_talents-fake-fn-11.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-11.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-12-target"><p><Link to="/source/ultimate_intrigue">Ultimate Intrigue</Link> pg. 44 <InnerLink aria-label="Back to reference 12" id="backlink-ability-advanced_rogue_talents-fake-fn-12" data-hash-target to="ability-advanced_rogue_talents-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-advanced_rogue_talents-fake-fn-12.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-13-target"><p><Link to="/source/agents_of_evil">Agents of Evil</Link> pg. 24 <InnerLink aria-label="Back to reference 13" id="backlink-ability-advanced_rogue_talents-fake-fn-13" data-hash-target to="ability-advanced_rogue_talents-fake-fn-13">↩</InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-14-target"><p>Advanced Player's Guide pg. 132 <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.6" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-advanced_rogue_talents-fake-fn-14.7" data-hash-target to="ability-advanced_rogue_talents-fake-fn-14.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-15-target"><p>Ultimate Combat pg. 71 <InnerLink aria-label="Back to reference 15" id="backlink-ability-advanced_rogue_talents-fake-fn-15" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-advanced_rogue_talents-fake-fn-15.2" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-advanced_rogue_talents-fake-fn-15.3" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-advanced_rogue_talents-fake-fn-15.4" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-advanced_rogue_talents-fake-fn-15.5" data-hash-target to="ability-advanced_rogue_talents-fake-fn-15.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-advanced_rogue_talents-fake-fn-16-target"><p><Link to="/source/heroes_of_the_streets">Heroes of the Streets</Link> pg. 26 <InnerLink aria-label="Back to reference 16" id="backlink-ability-advanced_rogue_talents-fake-fn-16" data-hash-target to="ability-advanced_rogue_talents-fake-fn-16">↩</InnerLink></p></li>
</ol></section></div>};
const _advanced_slayer_talents = {title: "Advanced Slayer Talents", topLink: ["Slayer","class/slayer"], jsx: <div className="compilation"><h2 id="ability-advanced_slayer_talents-advanced-slayer-talents">Advanced Slayer Talents</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>At 10th level and every 2 levels thereafter, a slayer can select one of the following advanced talents in place of a slayer talent.</p>
<hr/>
<Ability id="slayertalentarmoredmarauder-armored-marauder-ex-fn1" icon={["stairs-goal","upgrade"]}>
<Pair single id="slayertalentarmoredmarauder-armored-marauder-ex-fn1" flavor="Some elite slayers exchange leather and chain for plate when stalking prey."><Link to="/slayertalent/armored_marauder">⮞</Link> Armored Marauder (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-1" id="ability-advanced_slayer_talents-fake-fn-1" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">A slayer with this talent gains proficiency with heavy armor. In addition, the armor check penalty of any heavy armor the slayer wears is reduced by 1 for every 6 class levels he has.</Pair>
</Ability>
<Ability id="slayertalentarmoredswiftness-armored-swiftness-ex-fn1-2" icon={["upgrade"]}>
<Pair single id="slayertalentarmoredswiftness-armored-swiftness-ex-fn1-2" flavor="In time, the heaviest armor can become like a second skin."><Link to="/slayertalent/armored_swiftness">⮞</Link> Armored Swiftness (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-1.2" id="ability-advanced_slayer_talents-fake-fn-1.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/slayertalent/armored_marauder">Armored marauder</Link></Pair>
<Pair title="Ability">A slayer with this talent can move at full speed in heavy armor. In addition, the maximum Dexterity bonus of heavy armor the slayer wears increases by 1 for every 6 class levels he has.</Pair>
</Ability>
<Ability id="slayertalentassassinate-assassinate-ex-fn2" icon={["stairs-goal"]}>
<Pair single id="slayertalentassassinate-assassinate-ex-fn2" flavor="A slayer with this advanced talent can kill foes that are unable to defend themselves."><Link to="/slayertalent/assassinate">⮞</Link> Assassinate (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-2" id="ability-advanced_slayer_talents-fake-fn-2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>To attempt to assassinate a target, the slayer must first study his target for 1 round as a <strong className="hl">standard action</strong>. On the following round, if the slayer makes a sneak attack against the target and that target is denied its Dexterity bonus to AC, the sneak attack has the additional effect of possibly killing the target. This attempt automatically fails if the target recognizes the slayer as an enemy.</p>
<p>If the sneak attack is successful, the target must attempt a Fortitude saving throw with a DC equal to 10 + 1/2 the slayer's level + the slayer's Intelligence modifier. If the target fails this save, it dies; otherwise, the target takes the sneak attack damage as normal and is then immune to that slayer's <em>assassinate</em> ability for 24 hours.</p>
</Pair>
</Ability>
<Ability id="slayertalentmarksmansshot-marksmans-shot-ex-fn1-3" icon={["upgrade"]}>
<Pair single id="slayertalentmarksmansshot-marksmans-shot-ex-fn1-3" flavor="Those who seek to slay with a single shot must have keen eyes and perfect poise."><Link to="/slayertalent/marksmans_shot">⮞</Link> Marksman's Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-1.3" id="ability-advanced_slayer_talents-fake-fn-1.3" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">As an attack action, the slayer makes a single ranged attack at his highest attack bonus with a ranged weapon he wields. The target of the attack must be the slayer's <em>studied target.</em> On a successful hit, the slayer doubles the number of sneak attack dice applied to the attack; if the attack was not a sneak attack, this benefit does not apply.</Pair>
</Ability>
<Ability id="slayertalentreapingstalker-reaping-stalker-ex-fn3" icon={["upgrade"]}>
<Pair single id="slayertalentreapingstalker-reaping-stalker-ex-fn3" flavor="Some slayers prefer weapons with grim symbolism of lives cut short and can wield such weapons with unparalleled lethality."><Link to="/slayertalent/reaping_stalker">⮞</Link> Reaping Stalker (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-3" id="ability-advanced_slayer_talents-fake-fn-3" data-hash-target to="ability-advanced_slayer_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">A slayer with this talent treats any <Link to="/eq-weapon/sickle">sickle</Link> or <Link to="/eq-weapon/scythe">scythe</Link> he wields as though it were <Link to="/misc/one_size_category_larger">one size category larger</Link> for the purpose of determining its damage dice. In addition, the slayer increases the critical threat range of any sickle or scythe he wields by 1; this does not stack with other effects that alter a weapon's threat range.</Pair>
</Ability>
<Ability id="slayertalentrogueandninjaadvancedtalents-rogue-and-ninja-advanced-talents-fn4" icon={["stairs-goal"]}>
<Pair single id="slayertalentrogueandninjaadvancedtalents-rogue-and-ninja-advanced-talents-fn4"><Link to="/slayertalent/rogue_and_ninja_advanced_talents">⮞</Link> Rogue and Ninja Advanced Talents <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-4" id="ability-advanced_slayer_talents-fake-fn-4" data-hash-target to="ability-advanced_slayer_talents-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>A slayer can select one of the following rogue <em>advanced talents</em> or ninja <em>master tricks</em> in place of a slayer advanced talent.</p>
<p><strong className="hl">Advanced rogue talents:</strong> <Link to="/talent/aligned_disguise">aligned disguise</Link>, <Link to="/talent/blinding_strike">blinding strike</Link>, <Link to="/talent/dance_of_disorienting_shadows">dance of disorienting shadows</Link>, <Link to="/talent/deadly_sneak">deadly sneak</Link>, <Link to="/talent/feat">feat</Link>, <Link to="/talent/hunters_surprise">hunter's surprise</Link>, <Link to="/talent/improved_shadows_chill">improved shadow's chill</Link>, <Link to="/talent/knock_out_blow">knock-out blow</Link>, <Link to="/talent/master_of_disguise">master of disguise</Link>, <Link to="/talent/opportunist">opportunist</Link>, <Link to="/talent/reflexive_shadow_shield">reflexive shadow shield</Link>, <Link to="/talent/see_in_darkness">see in darkness</Link>, <Link to="/talent/stealthy_sniper">stealthy sniper</Link>.</p>
<p><strong className="hl">Master Tricks:</strong> <Link to="/ninjatrick/evasion">evasion</Link>, <Link to="/ninjatrick/feat">feat</Link>.</p>
</Pair>
<Pair title="Special">A slayer can select multiple rogue advanced talents or ninja master tricks by taking this slayer advanced talent multiple times, but can't select the same one more than once.</Pair>
</Ability>
<Ability id="slayertalentslayercamouflage-slayer-camouflage-ex-fn5" icon={["armor-upgrade"]}>
<Pair single id="slayertalentslayercamouflage-slayer-camouflage-ex-fn5"><Link to="/slayertalent/slayer_camouflage">⮞</Link> Slayer Camouflage (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-5" id="ability-advanced_slayer_talents-fake-fn-5" data-hash-target to="ability-advanced_slayer_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/talent/terrain_mastery">Terrain mastery</Link> (rogue talent)</Pair>
<Pair title="Ability">A slayer can use the Stealth skill to hide in any of his <Link to="/ability/favored_terrain">favored terrains</Link>, even if the terrain doesn't grant cover or concealment.</Pair>
</Ability>
<Ability id="slayertalentswallowreversal-swallow-reversal-ex-fn3-2" icon={["mailed-fist","rolling-dices"]}>
<Pair single id="slayertalentswallowreversal-swallow-reversal-ex-fn3-2" flavor="This technique, a creation of a legendary Minkaian duelist, mimics the movement of a bird in flight to pierce an opponent's defenses."><Link to="/slayertalent/swallow_reversal">⮞</Link> Swallow Reversal (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-3.2" id="ability-advanced_slayer_talents-fake-fn-3.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">As an attack action, the slayer can make a single melee attack against his <em>studied target</em> at his highest base attack bonus. When attempting a <em>swallow reversal,</em> the slayer rolls two attack rolls and uses the highest result. If the attack is a critical threat, the slayer attempts to confirm the critical hit as normal.</Pair>
<Pair title="Special">The slayer can use <em>swallow reversal</em> at will, but it can only be used against a given target once per day.</Pair>
</Ability>
<Ability id="slayertalentwoodlandstride-woodland-stride-ex-fn5-2" icon={["stairs-goal"]}>
<Pair single id="slayertalentwoodlandstride-woodland-stride-ex-fn5-2"><Link to="/slayertalent/woodland_stride">⮞</Link> Woodland Stride (Ex) <sup><InnerLink showBacklink="backlink-ability-advanced_slayer_talents-fake-fn-5.2" id="ability-advanced_slayer_talents-fake-fn-5.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">A slayer with this talent may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. Terrain that is enchanted or magically manipulated to impede motion still affects the slayer as normal.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-advanced_slayer_talents-label">Footnotes</h3><ol>
<li id="ability-advanced_slayer_talents-fake-fn-1-target"><p><Link to="/source/chronicle_of_legends">Chronicle of Legends</Link> pg. 6 <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_slayer_talents-fake-fn-1" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_slayer_talents-fake-fn-1.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_slayer_talents-fake-fn-1.3" data-hash-target to="ability-advanced_slayer_talents-fake-fn-1.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-advanced_slayer_talents-fake-fn-2-target"><p><Link to="/source/advanced_class_guide">Advanced Class Guide</Link> pg. 54 <InnerLink aria-label="Back to reference 2" id="backlink-ability-advanced_slayer_talents-fake-fn-2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-2">↩</InnerLink></p></li>
<li id="ability-advanced_slayer_talents-fake-fn-3-target"><p>Chronicle of Legends pg. 7 <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_slayer_talents-fake-fn-3" data-hash-target to="ability-advanced_slayer_talents-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-advanced_slayer_talents-fake-fn-3.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-advanced_slayer_talents-fake-fn-4-target"><p>Advanced Class Guide pg. 53 <InnerLink aria-label="Back to reference 4" id="backlink-ability-advanced_slayer_talents-fake-fn-4" data-hash-target to="ability-advanced_slayer_talents-fake-fn-4">↩</InnerLink></p></li>
<li id="ability-advanced_slayer_talents-fake-fn-5-target"><p>Advanced Class Guide pg. 55 <InnerLink aria-label="Back to reference 5" id="backlink-ability-advanced_slayer_talents-fake-fn-5" data-hash-target to="ability-advanced_slayer_talents-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-advanced_slayer_talents-fake-fn-5.2" data-hash-target to="ability-advanced_slayer_talents-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _advanced_versatile_performances = {title: "Advanced Versatile Performances", topLink: ["Bard","class/bard"], jsx: <><h2 id="ability-advanced_versatile_performances-advanced-versatile-performances">Advanced Versatile Performances</h2>
<p><strong>Sources</strong> <Link to="/source/blood_of_the_beast">Blood of the Beast</Link><br/>The charismatic <Link to="/race/kitsune">kitsune</Link> have developed countless techniques for transforming even the most mundane tasks into stunning and riveting performances. These much-lauded arts have spread like wildfire with bards who perform across Golarion. Beginning at 6th level, instead of selecting an additional skill with versatile performance, a <Link to="/class/bard">bard</Link> or <Link to="/class/skald">skald</Link> can choose an advanced versatile performance for one Perform skill he previously selected with versatile performance. Some advanced versatile performance options can be selected only if the bard or skald meets the option's prerequisites. A bard or skald with an archetype that replaces versatile performance cannot select advanced versatile performance options.</p>
<Ability id="expanded-versatility-ex" icon={["upgrade"]}>
<Pair single id="expanded-versatility-ex">Expanded Versatility (Ex)</Pair>
<Pair title="Ability">The bard chooses one Perform skill that he has already selected with versatile performance. He adds one of the following skills to the list of skills that are associated with the chosen Perform skill for the purpose of the versatile performance ability: Bluff, Diplomacy, Disguise, Escape Artist, Handle Animal, Intimidate, Sense Motive, or Use Magic Device.</Pair>
<Pair title="Special">This option can be selected multiple times, but no skill can be associated with the same Perform skill more than once.</Pair>
</Ability>
<Ability id="martial-performance-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="martial-performance-ex">Martial Performance (Ex)</Pair>
<Pair title="Ability">The bard chooses one weapon belonging to a <Link to="/ability/weapon_groups">fighter weapon group</Link> that is associated with a Perform skill he has selected with versatile performance. He gains proficiency with this weapon. If the bard is already proficient with this weapon or later becomes proficient with it, he gains <Link to="/feat/weapon_focus">Weapon Focus</Link> with that weapon as a bonus feat instead. In addition, the bard's effective fighter level is equal to 1/2 his bard level for the purpose of qualifying for feats that specifically select weapons from those Perform skills' associated fighter weapon groups.</Pair>
<Pair title="Info">The types of Perform skills and their associated fighter weapon groups are: Act (close, double), Comedy (flails, thrown), Dance (monk, spears), Keyboard Instruments (hammers, siege engines), Oratory (heavy blades, light blades), Percussion (close, hammers), Sing (close, natural), String (axes, bows), and Wind (monk, thrown).</Pair>
</Ability>
<Ability id="masterpiece" icon={["stairs-goal"]}>
<Pair single id="masterpiece">Masterpiece</Pair>
<Pair title="Ability">The bard gains a <Link to="/ability/bardic_masterpieces">bardic masterpiece</Link>, as if he were giving up a feat to learn it. He must meet the masterpiece's prerequisites, and the masterpiece must list ranks in a Perform skill that the bard has chosen with versatile performance as a prerequisite.</Pair>
<Pair title="Special">This option can be selected multiple times.</Pair>
</Ability>
</>};
const _advanced_weapon_training = {hasJL:true,title: "Advanced Weapon Training", topLink: ["Fighter","class/fighter"], jsx: <><div className="jumpList" id="ability-advanced_weapon_training-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-advanced_weapon_training-abundant-tactics-ex">Abundant Tactics</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-armed-bravery-ex">Armed Bravery</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-combat-competence-ex">Combat Competence</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-combat-maneuver-defense-ex">Combat Maneuver Defense</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-dazzling-intimidation-ex">Dazzling Intimidation</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-defensive-weapon-training-ex">Defensive Weapon Training</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-effortless-dual-wielding-ex">Effortless Dual-Wielding</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-fighters-finesse-ex">Fighter's Finesse</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-fighters-reflexes-ex">Fighter's Reflexes</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-fighters-stamina-ex">Fighter's Stamina</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-fighters-tactics-ex">Fighter's Tactics</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-focused-weapon-ex">Focused Weapon</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-inspiring-confidence-ex">Inspiring Confidence</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-item-mastery">Item Mastery</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-knockout-training-ex">Knockout Training</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-trained-grace-ex">Trained Grace</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-trained-initiative-ex">Trained Initiative</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-trained-throw-ex">Trained Throw</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-versatile-training-ex">Versatile Training</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-warrior-spirit-su">Warrior Spirit</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-weapon-mastery">Weapon Mastery</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-weapon-sacrifice-ex">Weapon Sacrifice</InnerLink></li><li><InnerLink toTop to="ability-advanced_weapon_training-weapon-specialist-ex">Weapon Specialist</InnerLink></li></ul></div><h2 id="ability-advanced_weapon_training-advanced-weapon-training">Advanced Weapon Training</h2>
<p><strong>Sources</strong> <Link to="/source/weapon_masters_handbook">Weapon Master's Handbook pg. 18-19</Link><br/>Highly skilled and experienced fighters can gain <em>advanced weapon training,</em> learning techniques and applications of the <em>weapon training</em> class feature that give them special benefits in exchange for specializing in a smaller number of <Link to="/ability/weapon_groups">fighter weapon groups</Link>. Beginning at 9th level, instead of selecting an additional fighter weapon group, a fighter can choose an <em>advanced weapon training</em> option for one fighter weapon group that he previously selected with the <em>weapon training</em> class feature. The fighter's <em>weapon training</em> bonus still increases for weapons from all fighter weapon groups he previously selected with <em>weapon training.</em> Some advance weapon training options can be selected only if the fighter meets the option's prerequisites.</p>
<p><em>Advanced weapon training</em> options function only when the fighter is wielding a weapon from the associated group, unless otherwise noted, and use his <em>weapon training</em> bonus for the associated weapon group. Any bonuses on attack rolls and damage rolls granted by <em>advanced weapon training</em> apply only on attack rolls and damage rolls from weapons in the associated group. A fighter with an archetype that replaces <em>weapon training</em> cannot select <em>advanced weapon training</em> options.</p>
<Ability id="abundant-tactics-ex" icon={["upgrade"]}>
<Pair single id="abundant-tactics-ex">Abundant Tactics (Ex)</Pair>
<Pair title="Passive Ability">The fighter adds his <em>weapon training</em> bonus to the number of times per day he can use a combat feat he has that allows a limited number of daily uses, such as the <Link to="/feat/stunning_fist">Stunning Fist</Link> feat.</Pair>
</Ability>
<Ability id="armed-bravery-ex" icon={["armor-upgrade"]}>
<Pair single id="armed-bravery-ex">Armed Bravery (Ex)</Pair>
<Pair title="Prerequisites"><em>Bravery</em> class feature</Pair>
<Pair title="Passive Ability">The fighter applies his bonus from <em>bravery</em> to Will saving throws. In addition, the DC of Intimidate checks to demoralize him increases by an amount equal to twice his bonus from <em>bravery.</em></Pair>
</Ability>
<Ability id="combat-competence-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="combat-competence-ex">Combat Competence (Ex)</Pair>
<Pair title="Passive Ability">For any weapon in the associated weapon group with which the fighter is not proficient, the penalty on attack rolls taken as a result of not being proficient is reduced by an amount equal to the fighter's <em>weapon training</em> bonus with that weapon group.</Pair>
<Pair title="Special">Once the penalty is reduced to 0, the fighter becomes proficient with such weapons.</Pair>
</Ability>
<Ability id="combat-maneuver-defense-ex" icon={["armor-upgrade"]}>
<Pair single id="combat-maneuver-defense-ex">Combat Maneuver Defense (Ex)</Pair>
<Pair title="Passive Ability">When the fighter is wielding weapons from the associated weapon group, his <em>weapon training</em> bonus applies to his CMD against all <Link to="/rule/combat_maneuvers">combat maneuvers</Link> attempted against him, instead of just against disarm and sunder combat maneuvers.</Pair>
</Ability>
<Ability id="dazzling-intimidation-ex" icon={["upgrade"]}>
<Pair single id="dazzling-intimidation-ex">Dazzling Intimidation (Ex)</Pair>
<Pair title="Ability">The fighter applies his <em>weapon training</em> bonus to Intimidate checks and can attempt an Intimidate check to demoralize an opponent as a <strong className="hl">move action</strong> instead of a standard action.</Pair>
<Pair title="Special">If he has the <Link to="/feat/dazzling_display">Dazzling Display</Link> feat, he can use it as a <strong className="hl">standard action</strong> instead of a full-round action.</Pair>
</Ability>
<Ability id="defensive-weapon-training-ex" icon={["armor-upgrade"]}>
<Pair single id="defensive-weapon-training-ex">Defensive Weapon Training (Ex)</Pair>
<Pair title="Passive Ability">The fighter gains a +1 shield bonus to his Armor Class. The fighter adds <Link to="/misc/half">half</Link> his weapon's enhancement bonus (if any) to this shield bonus. When his <em>weapon training</em> bonus for weapons from the associated fighter weapon group reaches +4, this shield bonus increases to +2. This shield bonus is lost if the fighter is immobilized or helpless.</Pair>
</Ability>
<Ability id="effortless-dual-wielding-ex" icon={["upgrade"]}>
<Pair single id="effortless-dual-wielding-ex">Effortless Dual-Wielding (Ex)</Pair>
<Pair title="Ability">The fighter treats all one-handed weapons that belong to the associated weapon group as though they were light weapons when determining his penalties on attack rolls for <Link to="/rule/fighting_with_two_weapons">fighting with two weapons</Link>. <sup><InnerLink showBacklink="backlink-ability-advanced_weapon_training-fake-fn-1" id="ability-advanced_weapon_training-fake-fn-1" data-hash-target to="ability-advanced_weapon_training-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="fighters-finesse-ex" icon={["upgrade"]}>
<Pair single id="fighters-finesse-ex">Fighter's Finesse (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/feat/weapon_finesse">Weapon Finesse</Link></Pair>
<Pair title="Ability">The fighter gains the benefits of the Weapon Finesse feat with all melee weapons that belong to the associated fighter weapon group (even if they cannot normally be used with Weapon Finesse).</Pair>
</Ability>
<Ability id="fighters-reflexes-ex" icon={["armor-upgrade"]}>
<Pair single id="fighters-reflexes-ex">Fighter's Reflexes (Ex)</Pair>
<Pair title="Passive Ability">The fighter applies his <em>weapon training</em> bonus to Reflex saving throws. He loses this bonus when he is <Link to="/rule/flat_footed">flat-footed</Link> or denied his Dexterity bonus to AC.</Pair>
</Ability>
<Ability id="fighters-stamina-ex" icon={["stairs-goal"]}>
<Pair single id="fighters-stamina-ex">Fighter's Stamina (Ex)</Pair>
<Pair title="Ability">The fighter gains <Link to="/feat/combat_stamina">Combat Stamina</Link> as a bonus feat, even when not wielding a weapon from the appropriate weapon group.</Pair>
<Pair title="Special">If the fighter already has this feat, he gains <Link to="/feat/extra_stamina">Extra Stamina</Link> as a bonus feat instead. <sup><InnerLink showBacklink="backlink-ability-advanced_weapon_training-fake-fn-1.2" id="ability-advanced_weapon_training-fake-fn-1.2" data-hash-target to="ability-advanced_weapon_training-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="fighters-tactics-ex" icon={["upgrade"]}>
<Pair single id="fighters-tactics-ex">Fighter's Tactics (Ex)</Pair>
<Pair title="Passive Ability">All of the fighter's allies are treated as if they had the same teamwork feats as the fighter for the purpose of determining whether the fighter receives a bonus from his teamwork feats. His allies do not receive any bonuses from these feats unless they actually have the feats themselves. The allies' positioning and actions must still meet the prerequisites listed in the teamwork feat for the fighter to receive the listed bonus.</Pair>
</Ability>
<Ability id="focused-weapon-ex" extraClasses="hasSubs" icon={["upgrade"]}>
<Pair single id="focused-weapon-ex">Focused Weapon (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/feat/weapon_focus">Weapon Focus</Link> with the selected weapon</Pair>
<Pair title="Ability">The fighter selects one weapon for which he has Weapon Focus and that belongs to the associated fighter weapon group. The fighter can deal damage with this weapon based on the damage of the <Link to="/class/warpriest">warpriest's</Link> <em>sacred weapon</em> class feature, treating his fighter level as his warpriest level.</Pair>
</Ability>
<Ability id="sacred-weapon-su" extraClasses="subAbility" icon={["upgrade"]}>
<Pair single id="sacred-weapon-su" flavor="Relevant text from the warpriest class ability.">Sacred Weapon (Su)</Pair>
<Pair title="Passive Ability"><p>Whenever you hit with your <em>sacred weapon,</em> the weapon damage is based on your size and level and not the weapon type. You can decide to use the weapon's base damage instead of the <em>sacred weapon</em> damage - this must be declared before the attack roll is made. (If the weapon's base damage exceeds the <em>sacred weapon</em> damage, its damage is unchanged.) This increase in damage does not affect any other aspect of the weapon, and doesn't apply to alchemical items, bombs, or other weapons that only deal energy damage.</p>
<ScrollContainer id="ability-advanced_weapon_training--table-0"><table>
<thead>
<tr>
<th>Level</th>
<th>Damage (Small)</th>
<th>Damage (Medium)</th>
<th>Damage (Large)</th>
</tr>
</thead>
<tbody><tr>
<td>1st-4th</td>
<td>1d4</td>
<td>1d6</td>
<td>1d8</td>
</tr>
<tr>
<td>5th-7th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>8th-9th</td>
<td>1d6</td>
<td>1d8</td>
<td>2d6</td>
</tr>
<tr>
<td>10th-11th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>10th-14th</td>
<td>1d8</td>
<td>1d10</td>
<td>2d8</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>15th-19th</td>
<td>1d10</td>
<td>2d6</td>
<td>3d6</td>
</tr>
<tr>
<td>20th</td>
<td>2d6</td>
<td>2d8</td>
<td>3d8</td>
</tr>
</tbody></table></ScrollContainer>
</Pair>
</Ability>
<Ability id="inspiring-confidence-ex" icon={["shield-reflect"]}>
<Pair single id="inspiring-confidence-ex">Inspiring Confidence (Ex)</Pair>
<Pair title="Usage">A number of times per day equal to his highest <em>weapon training</em> bonus</Pair>
<Pair title="Swift Action">The fighter can allow one ally within 30 feet to attempt a new saving throw against an ongoing fear effect that causes the ally to cower or to become <Link to="/misc/frightened">frightened</Link>, <Link to="/misc/panicked">panicked</Link>, or <Link to="/misc/shaken">shaken</Link>. If the ally succeeds at the save, the effect ends. A fighter can use this option even when not wielding a weapon from the associated weapon group.</Pair>
</Ability>
<Ability id="item-mastery" icon={["stairs-goal"]}>
<Pair single id="item-mastery">Item Mastery</Pair>
<Pair title="Ability">The fighter gains an <Link to="/main/feats_item_mastery">item mastery feat</Link> as a bonus feat, which functions with any magic weapon he wields, even if the magic weapon does not meet the feat's normal requirements. He must meet all of the feat's prerequisites.</Pair>
</Ability>
<Ability id="knockout-training-ex" icon={["upgrade"]}>
<Pair single id="knockout-training-ex">Knockout Training (Ex)</Pair>
<Pair title="Ability">The fighter takes no penalties on attack rolls when attempting to deal nonlethal damage with a weapon from the associated fighter weapon group that normally deals lethal damage. In addition, whenever the fighter deals nonlethal damage with a weapon from the associated fighter weapon group, he doubles his <em>weapon training</em> bonus on the damage roll.</Pair>
<Pair title="Special">This doesn't stack with other <em>advanced weapon training</em> options that allow the fighter to double his <em>weapon training</em> bonus on damage rolls, such as <em>trained grace</em> or <em>trained throw.</em> <sup><InnerLink showBacklink="backlink-ability-advanced_weapon_training-fake-fn-1.3" id="ability-advanced_weapon_training-fake-fn-1.3" data-hash-target to="ability-advanced_weapon_training-fake-fn-1-target">1</InnerLink></sup></Pair>
</Ability>
<Ability id="trained-grace-ex" icon={["upgrade"]}>
<Pair single id="trained-grace-ex">Trained Grace (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/feat/weapon_finesse">Weapon Finesse</Link></Pair>
<Pair title="Ability">When the fighter uses Weapon Finesse to make a melee attack with a weapon, using his Dexterity modifier on attack rolls and his Strength modifier on damage rolls, he doubles his <em>weapon training</em> bonus on damage rolls.</Pair>
</Ability>
<Ability id="trained-initiative-ex" icon={["upgrade"]}>
<Pair single id="trained-initiative-ex">Trained Initiative (Ex)</Pair>
<Pair title="Ability">As long as he is wielding a weapon from the associated weapon group or is able to draw such a weapon (even if he is not currently wielding it), the fighter applies his <em>weapon training</em> bonus to initiative checks. In addition, if he has the <Link to="/feat/quick_draw">Quick Draw</Link> feat and has a weapon from the appropriate weapon group that isn't hidden, he can draw that weapon as a <strong className="hl">free action</strong> as part of making an initiative check.</Pair>
</Ability>
<Ability id="trained-throw-ex" icon={["upgrade"]}>
<Pair single id="trained-throw-ex">Trained Throw (Ex)</Pair>
<Pair title="Ability">When the fighter makes a ranged attack with a thrown weapon and applies his Dexterity modifier on attack rolls and his Strength modifier on damage rolls, he doubles his <em>weapon training</em> bonus on damage rolls.</Pair>
<Pair title="Special">Unless he has the <Link to="/feat/throw_anything">Throw Anything</Link> feat, the fighter can choose only the <em>thrown</em> fighter weapon group with this option. If he has Throw Anything, the fighter can choose any fighter weapon group with this option and apply this option's benefits to any weapon from that group that he throws.</Pair>
</Ability>
<Ability id="versatile-training-ex" icon={["upgrade"]}>
<Pair single id="versatile-training-ex">Versatile Training (Ex)</Pair>
<Pair title="Ability"><p>The fighter can use his base attack bonus in place of his ranks in two skills of his choice that are associated with the fighter weapon group he has chosen with this option (see below). The fighter need not be wielding an associated weapon to use this option. When using <em>versatile training,</em> the fighter substitutes his total base attack bonus (including his base attack bonus gained through levels in other classes) for his ranks in these skills, but adds the skill's usual ability score modifier and any other bonuses or penalties that would modify those skills.</p>
<p>Once the skills have been selected, they cannot be changed and the fighter can immediately retrain all of his skill ranks in the selected skills at no additional cost in money or time. In addition, the fighter adds all skills chosen with this option to his list of class skills.</p>
</Pair>
<Pair title="Info"><p>The Bluff and Intimidate skills are associated with all fighter weapon groups.</p>
<p>The various fighter weapon groups also have the following associated skills:</p>
<ul>
<li>Axes (Climb, Survival) </li>
<li>Bows (Knowledge [engineering], Perception) </li>
<li>Close (Sense Motive, Stealth) </li>
<li>Crossbows (Perception, Stealth) </li>
<li>Double (Acrobatics, Sense Motive) </li>
<li>Firearms (Perception, Sleight of Hand) </li>
<li>Flails (Acrobatics, Sleight of Hand) </li>
<li>Hammers (Diplomacy, Ride) </li>
<li>Heavy blades (Diplomacy, Ride) </li>
<li>Light blades (Diplomacy, Sleight of Hand) </li>
<li>Monk (Acrobatics, Escape Artist) </li>
<li>Natural (Climb, Fly, Swim) </li>
<li>Polearms (Diplomacy, Sense Motive) </li>
<li>Siege engines (Disable Device, Profession [driver]) </li>
<li>Spears (Handle Animal, Ride) </li>
<li>Thrown (Acrobatics, Perception)</li>
</ul>
</Pair>
<Pair title="Special">A fighter can choose this option up to two times.</Pair>
</Ability>
<Ability id="warrior-spirit-su" icon={["upgrade"]}>
<Pair single id="warrior-spirit-su">Warrior Spirit (Su)</Pair>
<Pair title="Ability"><p>The fighter can forge a spiritual bond with a weapon that belongs to the associated weapon group, allowing him to unlock the weapon's potential. Each day, he designates one such weapon and gains a number of points of spiritual energy equal to 1 + his <em>weapon training</em> bonus. While wielding this weapon, he can spend 1 point of spiritual energy to grant the weapon an enhancement bonus equal to his <em>weapon training</em> bonus. Enhancement bonuses gained by this <em>advanced weapon training</em> option stack with those of the weapon, to a maximum of +5.</p>
<p>The fighter can also imbue the weapon with any one <Link to="/main/magic_enhancements">weapon special ability</Link> with an equivalent enhancement bonus less than or equal to his maximum bonus by reducing the granted enhancement bonus by the amount of the equivalent enhancement bonus. The item must have an enhancement bonus of at least +1 (from the item itself or from warrior spirit) to gain a weapon special ability.</p>
<p>In either case, these bonuses last for 1 minute. <sup><InnerLink showBacklink="backlink-ability-advanced_weapon_training-fake-fn-2" id="ability-advanced_weapon_training-fake-fn-2" data-hash-target to="ability-advanced_weapon_training-fake-fn-2-target">2</InnerLink></sup></p>
</Pair>
</Ability>
<Ability id="weapon-mastery" icon={["stairs-goal"]}>
<Pair single id="weapon-mastery">Weapon Mastery</Pair>
<Pair title="Ability">The fighter gains a <Link to="/main/feats_weapon_mastery">weapon mastery feat</Link> as a bonus feat, even when not wielding a weapon from the appropriate weapon group. He must meet all of the feat's prerequisites.</Pair>
</Ability>
<Ability id="weapon-sacrifice-ex" icon={["armor-upgrade","shield-reflect"]}>
<Pair single id="weapon-sacrifice-ex">Weapon Sacrifice (Ex)</Pair>
<Pair title="Usage">A number of times per day equal to the fighter's <em>weapon training</em> bonus with the associated weapon group</Pair>
<Pair title="Ability">When damage would cause the fighter or an adjacent ally to be knocked unconscious or killed, as a <strong className="hl">swift</strong> or <strong className="hl">immediate action</strong> the fighter can instead direct the damage to a weapon from the associated weapon group that he is wielding. The original target takes no damage, but the weapon receives only half its normal hardness.</Pair>
<Pair title="Special">He cannot use this option with unarmed attacks.</Pair>
</Ability>
<Ability id="weapon-specialist-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="weapon-specialist-ex">Weapon Specialist (Ex)</Pair>
<Pair title="Ability">The fighter selects a number of combat feats that he knows equal to his <em>weapon training</em> bonus with the associated weapon group. The selected feats must be ones that require the fighter to choose a type of weapon (such as <Link to="/feat/weapon_focus">Weapon Focus</Link> and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>), and the fighter must have chosen weapons that belong to the associated fighter weapon group. The fighter is treated as having the selected feats for all the weapons in the associated weapon group that are legal choices for those feats. The fighter is also considered to have those feats with these weapons for the purpose of meeting prerequisites.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-advanced_weapon_training-label">Footnotes</h3><ol>
<li id="ability-advanced_weapon_training-fake-fn-1-target"><p><Link to="/source/blood_of_the_beast">Blood of the Beast pg. 29</Link> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_weapon_training-fake-fn-1" data-hash-target to="ability-advanced_weapon_training-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_weapon_training-fake-fn-1.2" data-hash-target to="ability-advanced_weapon_training-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-advanced_weapon_training-fake-fn-1.3" data-hash-target to="ability-advanced_weapon_training-fake-fn-1.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-advanced_weapon_training-fake-fn-2-target"><p><Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 10</Link> <InnerLink aria-label="Back to reference 2" id="backlink-ability-advanced_weapon_training-fake-fn-2" data-hash-target to="ability-advanced_weapon_training-fake-fn-2">↩</InnerLink></p></li>
</ol></section></>};
const _animal_foci = {title: "Animal Focus", topLink: ["Hunter","class/hunter"], jsx: <><h2 id="ability-animal_foci-animal-focus">Animal Focus</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>At 1st level, a hunter can take on the aspect of an animal as a swift action. She must select one type of animal to emulate, gaining a bonus or special ability based on the type of animal emulated and her hunter level. The hunter can use this ability for a number of minutes per day equal to her level. This duration does not need to be consecutive, but must be spent in 1-minute increments. The hunter can emulate only one animal at a time.</p>
<p>The hunter can also apply one of these aspects to her animal companion. Unlike with the hunter herself, there is no duration on the animal aspect applied to her animal companion. An aspect applied in this way does not count against the hunter's minutes of duration per day&mdash;it remains in effect until the hunter changes it. The companion's aspect can be the same aspect the hunter has taken on or a different one. The hunter can select or change the animal foci on both herself and her animal companion as part of the same swift action.</p>
<p>If the hunter's animal companion is dead, the hunter can apply her companion's animal focus to herself instead of her animal companion. This is in addition to the normal one she can choose, and (as with a companion's focus) remains in effect until the hunter changes it instead of counting against her minutes per day.</p>
<aside><p>Characters with the <em>animal focus</em> feature can also gain <Link to="/ability/ward_aspects">ward aspects</Link> if they desire.</p>
</aside><h3 id="ability-animal_foci-animal-foci">Animal Foci</h3>
<Ability id="bat" icon={["stairs-goal"]}>
<Pair single id="bat">Bat</Pair>
<Pair title="Ability">The creature gains darkvision to a range of 60 feet.</Pair>
<Pair title="At 8th Level">The range increases by 30 feet.</Pair>
<Pair title="At 15th Level">The creature also gains <Link to="/umr/blindsense">blindsense</Link> to a range of 10 feet.</Pair>
</Ability>
<Ability id="bear" icon={["upgrade"]}>
<Pair single id="bear">Bear</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Constitution.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="bull" icon={["upgrade"]}>
<Pair single id="bull">Bull</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Strength.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="falcon" icon={["upgrade"]}>
<Pair single id="falcon">Falcon</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Perception checks.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="frog" icon={["upgrade"]}>
<Pair single id="frog">Frog</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Swim checks and on Acrobatics checks to jump.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="monkey" icon={["upgrade"]}>
<Pair single id="monkey">Monkey</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Climb checks.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="mouse" icon={["armor-upgrade"]}>
<Pair single id="mouse">Mouse</Pair>
<Pair title="Passive Ability">The creature gains <Link to="/ability/evasion">evasion</Link>, as the <Link to="/class/rogue">rogue</Link> class feature.</Pair>
<Pair title="At 12th Level">This increases to <Link to="/talent/improved_evasion">improved evasion</Link>, as the rogue advanced talent.</Pair>
</Ability>
<Ability id="owl" icon={["upgrade"]}>
<Pair single id="owl">Owl</Pair>
<Pair title="Passive Ability">The creature gains a +4 competence bonus on Stealth checks.</Pair>
<Pair title="At 8th Level">This bonus increases to +6.</Pair>
<Pair title="At 15th Level">This bonus increases to +8.</Pair>
</Ability>
<Ability id="snake" icon={["upgrade","armor-upgrade"]}>
<Pair single id="snake">Snake</Pair>
<Pair title="Passive Ability">The creature gains a +2 bonus on attack rolls when making attacks of opportunity and a +2 dodge bonus to AC against attacks of opportunity.</Pair>
<Pair title="At 8th Level">These bonuses increase to +4.</Pair>
<Pair title="At 15th Level">These bonuses increase to +6.</Pair>
</Ability>
<Ability id="stag" icon={["upgrade"]}>
<Pair single id="stag">Stag</Pair>
<Pair title="Passive Ability">The creature gains a 5-foot enhancement bonus to its base land speed.</Pair>
<Pair title="At 8th Level">This bonus increases to 10 feet.</Pair>
<Pair title="At 15th Level">This bonus increases to 20 feet.</Pair>
</Ability>
<Ability id="tiger" icon={["upgrade"]}>
<Pair single id="tiger">Tiger</Pair>
<Pair title="Passive Ability">The creature gains a +2 enhancement bonus to Dexterity.</Pair>
<Pair title="At 8th Level">This bonus increases to +4.</Pair>
<Pair title="At 15th Level">This bonus increases to +6.</Pair>
</Ability>
<Ability id="wolf" icon={["stairs-goal"]}>
<Pair single id="wolf">Wolf</Pair>
<Pair title="Ability">The creature gains the <Link to="/umr/scent">scent</Link> ability with a range of 10 feet.</Pair>
<Pair title="At 8th Level">The range of this sense increases to 20 feet.</Pair>
<Pair title="At 15th Level">The range of this sense increases to 30 feet.</Pair>
<Pair title="Special">The range doubles if the opponent is upwind, and is halved if the opponent is downwind.</Pair>
</Ability>
</>};
const _annointings = {hasJL:true,title: "Annointings", topLink: ["Alchemist","class/alchemist"], jsx: <><div className="jumpList" id="ability-annointings-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-annointings-eldritch-enhancement">Eldritch Enhancement</InnerLink></li><li><InnerLink toTop to="ability-annointings-essence-booster">Essence Booster</InnerLink></li><li><InnerLink toTop to="ability-annointings-mercurial-oil">Mercurial Oil</InnerLink></li><li><InnerLink toTop to="ability-annointings-orichalcum-dust">Orichalcum Dust</InnerLink></li></ul></div><h2 id="ability-annointings-annointings">Annointings</h2>
<p><strong>Sources</strong> <Link to="/source/arcane_anthology">Arcane Anthology</Link></p>
<p>The power of transmutation is evident in magical oils and pastes that alter the properties of objects when applied. Though the Runes of Wealth is focused primarily on spells, Haphrama included a remarkable appendix of ingenious theories about transmuting the properties of magical armor and weapons, from which the magical process of anointings has been developed over the centuries. Alchemists can choose any of the following anointings in place of a normal discovery. An alchemist can use any of the anointings he knows a total number of times per day equal to 3 + his alchemist level. Unless an anointing specifies otherwise, all anointings require a standard action to apply (this provokes attacks of opportunity) and last for 1 minute per alchemist level.</p>
<p><Link to="/class/investigator">Investigators</Link> can choose any of these discoveries with the <Link to="/invtalent/alchemist_discovery">alchemist discovery</Link> investigator talent. <Link to="/class/cleric">Clerics</Link> with the <Link to="/domain/artifice">Artifice</Link> domain can select an anointing in place of their 8th-level domain ability. <Link to="/arcaneschool/transmutation">Transmuter</Link> <Link to="/class/wizard">wizards</Link> can gain anointings in place of wizard bonus feats. <Link to="/class/witch">Witches</Link> with <Link to="/patron/transformation">transformation</Link> patrons can gain a single anointing in place of a major hex. In each of these cases, the character treats levels in the class used to select the anointing as his alchemist level for all relevant anointing calculations and prerequisites.</p>
<Ability id="eldritch-enhancement" icon={["upgrade"]}>
<Pair single id="eldritch-enhancement">Eldritch Enhancement</Pair>
<Pair title="Ability">The alchemist douses a weapon, shield, or suit of armor with a glowing green wash. The caster level of any of the item's magical properties increases by the alchemist's Intelligence modifier for the purposes of effects, including calculations based on level, overcoming spell resistance, or being dispelled.</Pair>
</Ability>
<Ability id="essence-booster" icon={["upgrade"]}>
<Pair single id="essence-booster">Essence Booster</Pair>
<Pair title="Prerequisites">8th-level alchemist</Pair>
<Pair title="Ability">The alchemist applies this golden liniment to a weapon or suit of armor that has a tiered special ability (a special ability available in varying degrees of potency, such as <Link to="/magic-enh/light_fortification">light fortification</Link> or <Link to="/magic-enh/shadow">shadow</Link>). The affected special ability increases by one step (to <Link to="/magic-enh/moderate_fortification">moderate fortification</Link> or <Link to="/magic-enh/greater_shadow">greater shadow</Link>, for example). If the item has multiple tiered special abilities, the alchemist chooses one to affect. The item's enhancement bonus increases by 1 if it has no tiered magical qualities.</Pair>
</Ability>
<Ability id="mercurial-oil" icon={["upgrade","armor-upgrade"]}>
<Pair single id="mercurial-oil">Mercurial Oil</Pair>
<Pair title="Ability">This gleaming silver fluid sinks into a magical metal weapon or suit of armor and temporarily liquefies the interior. An affected weapon gains momentum as its center of gravity moves outward during a swing, dealing damage as if it were <Link to="/rule/weapon_descriptions">one size category larger</Link> than it actually is. Affected armor resists impact and provides the wearer DR 2/-.</Pair>
</Ability>
<Ability id="orichalcum-dust" icon={["magic-swirl"]}>
<Pair single id="orichalcum-dust">Orichalcum Dust</Pair>
<Pair title="Ability">The alchemist sprinkles a small quantity of colorful dust that comprises the essence of all four elements. By favoring one element over another in this mixture, the alchemist temporarily changes the energy type of one weapon into another. For example, the alchemist can choose for a bomb to deal acid damage or a weapon with the <Link to="/magic-enh/shocking_burst">shocking burst</Link> special ability to deal fire damage instead. Once an elemental effect is changed, it cannot be changed again until the anointing's duration expires.</Pair>
</Ability>
</>};
const _arcane_discoveries = {title: "Arcane Discoveries", topLink: ["Wizard","class/wizard"], jsx: <div className="compilation"><h2 id="ability-arcane_discoveries-arcane-discoveries">Arcane Discoveries</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic</Link><br/>Wizards spend much of their lives seeking deeper truths, hunting knowledge as if it were life itself. The wizard's power is not necessarily the spells he wields; spells are merely the outward, most visible manifestation of that power. A wizard's true power is in his fierce intelligence, his dedication to his craft, and his ability to peel back the surface truths of reality to understand the fundamental underpinnings of existence. A wizard spends much of his time researching spells, and would rather find an undiscovered library than a room full of gold. A wizard need not be a reclusive bookworm, but he must have a burning curiosity for the unknown. Arcane discoveries are the results of this obsession with magic. A wizard can learn an arcane discovery in place of a regular feat or wizard bonus feat.</p>
<hr/>
<Ability id="arcanediscalchemicalaffinity-alchemical-affinity-fn1" icon={["upgrade","spell-book"]}>
<Pair single id="arcanediscalchemicalaffinity-alchemical-affinity-fn1" flavor={<>Having studied alongside <Link to="/class/alchemist">alchemists</Link>, you've learned to use their methodologies to enhance your spellcraft.</>}><Link to="/arcanedisc/alchemical_affinity">⮞</Link> Alchemical Affinity <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-1" id="ability-arcane_discoveries-fake-fn-1" data-hash-target to="ability-arcane_discoveries-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Whenever you cast a spell that appears on both the wizard and alchemist spell lists, you treat your caster level as 1 higher than normal and the save DC of such spells increases by 1.</Pair>
<Pair title="Special">Additionally, you may copy spells from an alchemist's formula book into your spellbook just as you could with another wizard's spellbook.</Pair>
</Ability>
<Ability id="arcanediscarcanebuilder-arcane-builder-fn2" icon={["upgrade"]}>
<Pair single id="arcanediscarcanebuilder-arcane-builder-fn2" flavor="You have an exceptional understanding of the theory behind creating magical items."><Link to="/arcanedisc/arcane_builder">⮞</Link> Arcane Builder <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2" id="ability-arcane_discoveries-fake-fn-2" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Select one type of magic item (potions, wondrous items, and so on). You create items of this type 25% faster than normal, and gain a +4 bonus on Spellcraft checks (or other checks, as appropriate) to craft items of this type.</Pair>
<Pair title="Special">You may select this discovery multiple times; its effects do not stack. Each time you select this discovery, it applies to a different type of magic item.</Pair>
</Ability>
<Ability id="arcanediscbalancedsummoning-balanced-summoning-fn3" icon={["upgrade"]}>
<Pair single id="arcanediscbalancedsummoning-balanced-summoning-fn3" flavor="You maintain balance by calling on opposing forces when summoning."><Link to="/arcanedisc/balanced_summoning">⮞</Link> Balanced Summoning <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-3" id="ability-arcane_discoveries-fake-fn-3" data-hash-target to="ability-arcane_discoveries-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Whenever you cast a <em>summon monster</em> spell, you can summon two creatures from a single list 1 or more levels lower than the level of the spell. The two creatures must have alignments that are opposite along at least one axis (chaotic and lawful or evil and good). For example, if you cast <Link to="/spell/summon_monster_iii">summon monster III</Link>, you could summon a <Link to="/template/celestial">celestial</Link> wolf and a <Link to="/template/fiendish">fiendish</Link> hyena from the 2nd-level list.</Pair>
</Ability>
<Ability id="arcanediscbeyondmorality-beyond-morality-su-fn4" icon={["armor-upgrade"]}>
<Pair single id="arcanediscbeyondmorality-beyond-morality-su-fn4"><Link to="/arcanedisc/beyond_morality">⮞</Link> Beyond Morality (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-4" id="ability-arcane_discoveries-fake-fn-4" data-hash-target to="ability-arcane_discoveries-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">As long as you are neutral, you may choose to be treated as the most favorable alignment when affected by spells whose effects vary based on alignment (such as <Link to="/spell/holy_word">holy word</Link>). If you are neutral in relation to evil and good, you may choose to be treated as good or evil. If you are neutral in relation to chaos and law, you may choose to be treated as lawful or chaotic.</Pair>
<Pair title="Special">You may only choose to be treated as one alignment type along a single axis at a time (for instance, if you were within the area of both a <Link to="/spell/magic_circle_against_evil">magic circle against evil</Link> spell and an <Link to="/spell/unholy_blight">unholy blight</Link> spell, you would have to choose to be either evil, good, or neutral for the purpose of determining the spells' effects).</Pair>
</Ability>
<Ability id="arcanediscbondedmask-bonded-mask-fn5" icon={["armor-upgrade"]}>
<Pair single id="arcanediscbondedmask-bonded-mask-fn5"><Link to="/arcanedisc/bonded_mask">⮞</Link> Bonded Mask <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-5" id="ability-arcane_discoveries-fake-fn-5" data-hash-target to="ability-arcane_discoveries-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">Your devotion to the Forgotten Pharaoh enables you to select a mask - typically an Osirian funerary mask - as your bonded item. The mask must be worn to have effect, and occupies the <Link to="/rule/head_slot">head slot</Link>.</Pair>
<Pair title="Passive Ability">In addition, the mask shields you from notice. While wearing your bonded mask, efforts to use the Diplomacy skill to gather information about you take a -1 penalty, and you gain a +1 competence bonus on all saving throws against scrying and mind-reading effects that allow saving throws.</Pair>
</Ability>
<Ability id="arcanedisccreativedestruction-creative-destruction-su-fn4-2" icon={["remedy"]}>
<Pair single id="arcanedisccreativedestruction-creative-destruction-su-fn4-2" flavor="You have learned how to use destructive energy to empower yourself."><Link to="/arcanedisc/creative_destruction">⮞</Link> Creative Destruction (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-4.2" id="ability-arcane_discoveries-fake-fn-4.2" data-hash-target to="ability-arcane_discoveries-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">When you cast an evocation spell that deals damage, you gain a number of <Link to="/rule/temporary_hit_points">temporary hit points</Link> equal to the total number of dice used to determine the damage caused by the spell. Temporary hit points gained from this discovery do not stack and disappear after 1 hour.</Pair>
</Ability>
<Ability id="arcanediscdefensivefeedback-defensive-feedback-su-fn4-3" icon={["armor-upgrade","magic-swirl"]}>
<Pair single id="arcanediscdefensivefeedback-defensive-feedback-su-fn4-3" flavor="Rather than dissipate damaging energy, you can redirect some of it back to its source."><Link to="/arcanedisc/defensive_feedback">⮞</Link> Defensive Feedback (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-4.3" id="ability-arcane_discoveries-fake-fn-4.3" data-hash-target to="ability-arcane_discoveries-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">When an abjuration spell you cast prevents damage (with damage reduction or energy resistance), if the attacking creature is within 30 feet of the protected creature, the foe takes 1d6 points of damage for every 10 points of damage prevented.</Pair>
</Ability>
<Ability id="arcanediscfaithmagic-faith-magic-fn6" icon={["spell-book"]}>
<Pair single id="arcanediscfaithmagic-faith-magic-fn6"><Link to="/arcanedisc/faith_magic">⮞</Link> Faith Magic <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-6" id="ability-arcane_discoveries-fake-fn-6" data-hash-target to="ability-arcane_discoveries-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">Worship a deity</Pair>
<Pair title="Ability">Select one spell granted by a domain belonging to the god you worship. This spell must be at least 2 levels lower than the highest-level wizard spell you can cast. When you first prepare your spells for the day, you can prepare this spell once, using a spell slot 1 level higher than the spell's actual level. This is cast as a divine spell.</Pair>
</Ability>
<Ability id="arcanediscfaststudy-fast-study-fn2-2" icon={["upgrade"]}>
<Pair single id="arcanediscfaststudy-fast-study-fn2-2"><Link to="/arcanedisc/fast_study">⮞</Link> Fast Study <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.2" id="ability-arcane_discoveries-fake-fn-2.2" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Normally, a wizard spends 1 hour preparing all of his spells for the day, or proportionately less if he only prepares some spells, with a minimum of 15 minutes of preparation. Thanks to mental discipline and clever mnemonics, you can prepare all of your spells in only 15 minutes, and your minimum preparation time is only 1 minute.</Pair>
</Ability>
<Ability id="arcanediscferalspeech-feral-speech-su-fn2-3" icon={["stairs-goal"]}>
<Pair single id="arcanediscferalspeech-feral-speech-su-fn2-3"><Link to="/arcanedisc/feral_speech">⮞</Link> Feral Speech (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.3" id="ability-arcane_discoveries-fake-fn-2.3" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">You gain the ability to speak with and understand the response of any animal as if using <Link to="/spell/speak_with_animals">speak with animals</Link>, though each time you speak to animals, you must decide to communicate with either amphibians, birds, fish, mammals, or reptiles, and can only speak to and understand animals of that type. You can make yourself understood as far as your voice carries. This discovery does not predispose any animal addressed toward you in any way.</Pair>
<Pair title="At 12th Level">You can also use this ability to communicate with vermin.</Pair>
</Ability>
<Ability id="arcanediscgolemconstructor-golem-constructor-fn2-4" icon={["stairs-goal"]}>
<Pair single id="arcanediscgolemconstructor-golem-constructor-fn2-4"><Link to="/arcanedisc/golem_constructor">⮞</Link> Golem Constructor <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.4" id="ability-arcane_discoveries-fake-fn-2.4" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">You have learned the art and craft of creating a single type of <Link to="/family/golem">golem</Link> (such as <Link to="/monster/stone_golem">stone golems</Link> or <Link to="/monster/iron_golem">iron golems</Link>). When creating a golem of this type, you count as having the <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link>, <Link to="/feat/craft_magic_arms_and_armor">Craft_Magic_Arms_and_Armor</Link>, and <Link to="/feat/craft_construct">Craft Construct</Link> feats. You must meet all other construction requirements for the golem as normal.</Pair>
<Pair title="Special">You may select this discovery multiple times. Each time you select this discovery, it applies to a different kind of golem.</Pair>
</Ability>
<Ability id="arcanediscidealize-idealize-su-fn4-4" icon={["upgrade"]}>
<Pair single id="arcanediscidealize-idealize-su-fn4-4" flavor="In your quest for self-perfection, you have discovered a way to further enhance yourself and others."><Link to="/arcanedisc/idealize">⮞</Link> Idealize (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-4.4" id="ability-arcane_discoveries-fake-fn-4.4" data-hash-target to="ability-arcane_discoveries-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level wizard</Pair>
<Pair title="Passive Ability">When a transmutation spell you cast grants an enhancement bonus to an ability score, that bonus increases by 2.</Pair>
<Pair title="At 20th Level">The bonus increases by 4.</Pair>
</Ability>
<Ability id="arcanediscimmortality-immortality-ex-fn2-5" icon={["armor-upgrade"]}>
<Pair single id="arcanediscimmortality-immortality-ex-fn2-5"><Link to="/arcanedisc/immortality">⮞</Link> Immortality (Ex) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.5" id="ability-arcane_discoveries-fake-fn-2.5" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">20th-level wizard</Pair>
<Pair title="Passive Ability">You discover a cure for aging, and from this point forward you take no penalty to your physical ability scores from <Link to="/rule/age">advanced age</Link>. If you are already taking such penalties, they are removed at this time.</Pair>
</Ability>
<Ability id="arcanediscinfectiouscharms-infectious-charms-fn1-2" icon={["magic-swirl","upgrade"]}>
<Pair single id="arcanediscinfectiouscharms-infectious-charms-fn1-2" flavor="Your charms are so smooth that they're contagious."><Link to="/arcanedisc/infectious_charms">⮞</Link> Infectious Charms <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-1.2" id="ability-arcane_discoveries-fake-fn-1.2" data-hash-target to="ability-arcane_discoveries-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level wizard</Pair>
<Pair title="Ability">Anytime you target and successfully affect a single creature with a charm or compulsion spell and that creature is within 30 feet of another opponent, your spell has a chance of affecting the second creature as well. As a <strong className="hl">swift action</strong> immediately after affecting a creature with a charm or compulsion spell, you can cause the spell to carry over to the nearest creature within 30 feet. The spell behaves in all ways as though its new target were the original target of the spell.</Pair>
</Ability>
<Ability id="arcanedisciounbond-ioun-bond-fn7" icon={["magic-swirl"]}>
<Pair single id="arcanedisciounbond-ioun-bond-fn7"><Link to="/arcanedisc/ioun_bond">⮞</Link> Ioun Bond <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-7" id="ability-arcane_discoveries-fake-fn-7" data-hash-target to="ability-arcane_discoveries-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">Has a bonded object from the <em>arcane bond</em> class ability</Pair>
<Pair title="Ability">You can form an arcane bond with an <Link to="/magic-wondrous/ioun_stone">ioun stone</Link>. If you choose this arcane discovery at 1st level, you gain a <Link to="/magic-ioun/dull_gray">dull gray</Link> ioun stone as a bonded object at no cost. A bonded ioun stone must be orbiting your head to have effect.</Pair>
<Pair title="At 12th Level">You can turn a bonded dull gray ioun stone into another kind of ioun stone as if you possessed the <Link to="/feat/craft_wondrous_item">Craft Wondrous Item</Link> feat; if you die or replace a bonded ioun stone that has been transformed in this way, the stone reverts to a dull gray ioun stone.</Pair>
</Ability>
<Ability id="arcanediscknowledgeispower-knowledge-is-power-ex-fn7-2" icon={["upgrade","armor-upgrade"]}>
<Pair single id="arcanediscknowledgeispower-knowledge-is-power-ex-fn7-2" flavor="Your understanding of physical forces gives you power over them."><Link to="/arcanedisc/knowledge_is_power">⮞</Link> Knowledge Is Power (Ex) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-7.2" id="ability-arcane_discoveries-fake-fn-7.2" data-hash-target to="ability-arcane_discoveries-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Passive Ability">You add your Intelligence modifier on combat maneuver checks and to your CMD. You also add your Intelligence modifier on Strength checks to break or lift objects.</Pair>
</Ability>
<Ability id="arcanediscmultimorph-multimorph-su-fn2-6" icon={["stairs-goal"]}>
<Pair single id="arcanediscmultimorph-multimorph-su-fn2-6" flavor="Your studies in transmogrification have increased your control over shapechanging spells."><Link to="/arcanedisc/multimorph">⮞</Link> Multimorph (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.6" id="ability-arcane_discoveries-fake-fn-2.6" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Standard Action">When you cast a spell of the polymorph subschool on yourself, you may expend 1 minute of the spell's duration to assume another form allowed by the spell. You can do this as often as you like, subject to the duration of the spell.</Pair>
</Ability>
<Ability id="arcanediscobservantillusion-observant-illusion-su-fn8" icon={["stairs-goal"]}>
<Pair single id="arcanediscobservantillusion-observant-illusion-su-fn8"><Link to="/arcanedisc/observant_illusion">⮞</Link> Observant Illusion (Su) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-8" id="ability-arcane_discoveries-fake-fn-8" data-hash-target to="ability-arcane_discoveries-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Ability">You can project your senses into any ongoing figment or shadow illusion you create with a spell of at least 3rd level. You can see through its eyes and hear through its ears as if you were standing where it is, and during your turn you can switch from using its senses to using your own, or back again, as a <strong className="hl">swift</strong> or <strong className="hl">move action</strong>.</Pair>
<Pair title="Special">While you are using its senses, your body is considered <Link to="/misc/blinded">blinded</Link> and <Link to="/misc/deafened">deafened</Link>.</Pair>
</Ability>
<Ability id="arcanediscoppositionresearch-opposition-research-fn2-7" icon={["magic-swirl","upgrade"]}>
<Pair single id="arcanediscoppositionresearch-opposition-research-fn2-7"><Link to="/arcanedisc/opposition_research">⮞</Link> Opposition Research <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.7" id="ability-arcane_discoveries-fake-fn-2.7" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level wizard, have at least one opposition school</Pair>
<Pair title="Ability">By completing strenuous studies, you have broken through the mental barriers that made it hard for you to prepare spells from one of your opposition schools. Select one wizard opposition school; preparing spells of this school now only requires one spell slot of the appropriate level instead of two, and you no longer have the -4 Spellcraft penalty for crafting items from that school.</Pair>
</Ability>
<Ability id="arcanediscpsychicpreparation-psychic-preparation-fn6-2" icon={["magic-swirl"]}>
<Pair single id="arcanediscpsychicpreparation-psychic-preparation-fn6-2"><Link to="/arcanedisc/psychic_preparation">⮞</Link> Psychic Preparation <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-6.2" id="ability-arcane_discoveries-fake-fn-6.2" data-hash-target to="ability-arcane_discoveries-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">You have learned a limited way to access <Link to="/rule/psychic_magic">psychic magic</Link>. When you first prepare your spells for the day, you can prepare one spell as a psychic spell. This spell must be at least 2 levels lower than the highest-level wizard spell you can cast, and takes a slot 1 level higher than the spell's actual level. When you cast this spell, it operates as a psychic spell, including using emotional and thought components in place of somatic and verbal components, and only having expensive material components.</Pair>
</Ability>
<Ability id="arcanediscresilientillusions-resilient-illusions-fn1-3" icon={["upgrade"]}>
<Pair single id="arcanediscresilientillusions-resilient-illusions-fn1-3"><Link to="/arcanedisc/resilient_illusions">⮞</Link> Resilient Illusions <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-1.3" id="ability-arcane_discoveries-fake-fn-1.3" data-hash-target to="ability-arcane_discoveries-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level wizard</Pair>
<Pair title="Passive Ability">You are able to conjure illusions so lifelike that they defy disbelief. Anytime a creature tries to disbelieve one of your illusion effects, make a caster level check. Treat the illusion's save DC as its normal DC or the result of the caster level check, whichever is higher.</Pair>
</Ability>
<Ability id="arcanediscsplitslot-split-slot-fn2-8" icon={["magic-swirl"]}>
<Pair single id="arcanediscsplitslot-split-slot-fn2-8"><Link to="/arcanedisc/split_slot">⮞</Link> Split Slot <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-2.8" id="ability-arcane_discoveries-fake-fn-2.8" data-hash-target to="ability-arcane_discoveries-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Ability">Once per day when you prepare spells, you may treat any one of your open spell slots as if it were two spell slots that were two spell levels lower. For example, a 9th-level wizard can split a 5th-level slot into two 3rd-level slots, preparing <Link to="/spell/fireball">fireball</Link> and <Link to="/spell/lightning_bolt">lightning bolt</Link> in those 3rd-level slots. For all purposes, the two lower-level slots are treated as that lower level (so the split 5th-level slot used for a fireball has a DC as if it were in a normal 3rd-level slot). Splitting a 2nd-level slot lets you prepare two additional cantrips (which you can cast over and over, just like normally prepared cantrips).</Pair>
<Pair title="Special">This discovery has no effect on cantrips or 1st-level spells. You may select this discovery multiple times; each time you select it, you may split another spell slot when you prepare spells. You cannot split a slot that you created by splitting a higher-level slot.</Pair>
</Ability>
<Ability id="arcanediscstafflikewand-staff-like-wand-fn9" icon={["upgrade"]}>
<Pair single id="arcanediscstafflikewand-staff-like-wand-fn9"><Link to="/arcanedisc/staff_like_wand">⮞</Link> Staff-Like Wand <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-9" id="ability-arcane_discoveries-fake-fn-9" data-hash-target to="ability-arcane_discoveries-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level wizard, <Link to="/feat/craft_staff">Craft Staff</Link></Pair>
<Pair title="Ability">Your research has unlocked a new power in conjunction with using a wand. Similar to using a magic staff, you use your own Intelligence score and relevant feats to set the DC for saves against spells you cast from a wand, and you can use your caster level when activating the power of a wand if it's higher than the caster level of the wand.</Pair>
</Ability>
<Ability id="arcanediscstewardofthegreatbeyond-steward-of-the-great-beyond-fn10" icon={["magic-swirl"]}>
<Pair single id="arcanediscstewardofthegreatbeyond-steward-of-the-great-beyond-fn10"><Link to="/arcanedisc/steward_of_the_great_beyond">⮞</Link> Steward of the Great Beyond <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-10" id="ability-arcane_discoveries-fake-fn-10" data-hash-target to="ability-arcane_discoveries-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level wizard</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 10th<ByLevelPop levels={[[10,1],[15,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Immediate Action">Whenever a creature attempts to use a teleportation effect or summon a creature within 30 feet of you, you may attempt to block the effect. Make an opposed caster level check (1d20 + caster level). If the check succeeds, the spell or effect fails and is wasted; otherwise, it is unaffected.</Pair>
</Ability>
<Ability id="arcanedisctimestutter-time-stutter-sp-fn7-3" icon={["magic-swirl"]}>
<Pair single id="arcanedisctimestutter-time-stutter-sp-fn7-3"><Link to="/arcanedisc/time_stutter">⮞</Link> Time Stutter (Sp) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-7.3" id="ability-arcane_discoveries-fake-fn-7.3" data-hash-target to="ability-arcane_discoveries-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">10th-level wizard</Pair>
<Pair title="Usage">1 time/day + 1 per five wizard levels beyond 10th<ByLevelPop levels={[[10,1],[15,2],[20,3]]} unit="time" postText="/day" /></Pair>
<Pair title="Ability">You can briefly step out of time, pausing the world around you. This ability acts as the <Link to="/spell/time_stop">time stop</Link> spell, except that you gain only 1 round of apparent time.</Pair>
</Ability>
<Ability id="arcanedisctruename-true-name-sp-fn9-2" icon={["magic-swirl"]}>
<Pair single id="arcanedisctruename-true-name-sp-fn9-2"><Link to="/arcanedisc/true_name">⮞</Link> True Name (Sp) <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-9.2" id="ability-arcane_discoveries-fake-fn-9.2" data-hash-target to="ability-arcane_discoveries-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level wizard</Pair>
<Pair title="Ability"><p>Your researches into ancient tomes and your inquisitions of bound spirits have led you to one of the best-hidden secrets of the multiverse: the true name of an outsider - the name that defines the very essence of the creature and that gives the speaker control over the being. This outsider can have no more than 12 Hit Dice. Once per day, you can speak the common name by which the outsider is known, and the outsider travels to you as if you had cast <Link to="/spell/planar_binding">planar binding</Link> upon it. It must obey you to the best of its ability, without pay or bargaining for its services, for its fear that you might release its true name to the wider world is enough to bring even the most recalcitrant of outsiders to bear.</p>
<p>If the creature is within 100 feet, as a <strong className="hl">move action</strong>, you may punish it by deliberately mispronouncing its name, wracking its very essence and giving it the <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/staggered">staggered</Link> conditions for 1 round (even if the creature is normally immune to these conditions). You cannot use <em>true name</em> in an area of <Link to="/spell/silence">silence</Link>, but the creature does not have to be able to hear you for it to be harmed by the ability.</p>
<p>It is in your best interest to call this creature only sparingly, and occasionally reward it in some fashion to mollify its wrath. If you repeatedly fail to offer it a reward appropriate to its type and ethos, the creature may begin plotting ways to destroy the bond between you, whether by creating an accident that will destroy your memory of the name, by plaguing you with nuisances or dangers until you vow never to call on it again, or by actively seeking to destroy you through its own devices or those of an underling. If this creature is of a lawful type and you are violating its ethos, its superiors may even destroy it or you rather than allow you to contaminate their servant further. Worse, they may establish situations where it is necessary for you to summon this outsider, opening gateways to infernal or angelic interference, in order to gain a foothold on the Material Plane.</p>
</Pair>
<Pair title="Special">You may select this discovery multiple times. Each time you select this discovery, it applies to a different, specific outsider. If you select this discovery at 15th level or higher, the creature may have up to 18 Hit Dice and the call acts as <Link to="/spell/greater_planar_binding">greater planar binding</Link> instead of <em>planar binding.</em></Pair>
</Ability>
<Ability id="arcanediscwerewolfshape-werewolf-shape-fn11" icon={["upgrade"]}>
<Pair single id="arcanediscwerewolfshape-werewolf-shape-fn11"><Link to="/arcanedisc/werewolf_shape">⮞</Link> Werewolf Shape <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-11" id="ability-arcane_discoveries-fake-fn-11" data-hash-target to="ability-arcane_discoveries-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level wizard</Pair>
<Pair title="Ability">When you cast <Link to="/spell/beast_shape_iv">beast shape IV</Link> or <Link to="/spell/shapechange">shapechange</Link>, you can choose to take the shape of a werewolf in addition to the other shapes available. While in werewolf shape, you gain all the effects of the <Link to="/template/lycanthrope">lycanthrope</Link> template instead of the spell's normal benefits. You act in all respects as a natural lycanthrope for the duration of the spell, including the ability to inflict the <Link to="/umr/curse_of_lycanthropy">curse of lycanthropy</Link> using the spell's save DC.</Pair>
</Ability>
<Ability id="arcanediscyuelralsblessing-yuelrals-blessing-fn10-2" icon={["upgrade"]}>
<Pair single id="arcanediscyuelralsblessing-yuelrals-blessing-fn10-2"><Link to="/arcanedisc/yuelrals_blessing">⮞</Link> Yuelral's Blessing <sup><InnerLink showBacklink="backlink-ability-arcane_discoveries-fake-fn-10.2" id="ability-arcane_discoveries-fake-fn-10.2" data-hash-target to="ability-arcane_discoveries-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level wizard</Pair>
<Pair title="Passive Ability">You cast any spells that appear on both the wizard and druid spell lists at +1 caster level and with +1 to the save DC. In addition, you may replace the material component of any arcane spell with gems of the same value.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-arcane_discoveries-label">Footnotes</h3><ol>
<li id="ability-arcane_discoveries-fake-fn-1-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 18 <InnerLink aria-label="Back to reference 1" id="backlink-ability-arcane_discoveries-fake-fn-1" data-hash-target to="ability-arcane_discoveries-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-arcane_discoveries-fake-fn-1.2" data-hash-target to="ability-arcane_discoveries-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-arcane_discoveries-fake-fn-1.3" data-hash-target to="ability-arcane_discoveries-fake-fn-1.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-2-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 86 <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2" data-hash-target to="ability-arcane_discoveries-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.2" data-hash-target to="ability-arcane_discoveries-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.3" data-hash-target to="ability-arcane_discoveries-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.4" data-hash-target to="ability-arcane_discoveries-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.5" data-hash-target to="ability-arcane_discoveries-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.6" data-hash-target to="ability-arcane_discoveries-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.7" data-hash-target to="ability-arcane_discoveries-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-arcane_discoveries-fake-fn-2.8" data-hash-target to="ability-arcane_discoveries-fake-fn-2.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-3-target"><p><Link to="/source/champions_of_balance">Champions of Balance</Link> pg. 20 <InnerLink aria-label="Back to reference 3" id="backlink-ability-arcane_discoveries-fake-fn-3" data-hash-target to="ability-arcane_discoveries-fake-fn-3">↩</InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-4-target"><p>Champions of Balance pg. 21 <InnerLink aria-label="Back to reference 4" id="backlink-ability-arcane_discoveries-fake-fn-4" data-hash-target to="ability-arcane_discoveries-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-arcane_discoveries-fake-fn-4.2" data-hash-target to="ability-arcane_discoveries-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-arcane_discoveries-fake-fn-4.3" data-hash-target to="ability-arcane_discoveries-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-arcane_discoveries-fake-fn-4.4" data-hash-target to="ability-arcane_discoveries-fake-fn-4.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-5-target"><p><Link to="/source/pathfinder_80_empty_graves">Pathfinder #80: Empty Graves</Link> pg. 26 <InnerLink aria-label="Back to reference 5" id="backlink-ability-arcane_discoveries-fake-fn-5" data-hash-target to="ability-arcane_discoveries-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-6-target"><p><Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox</Link> pg. 3 <InnerLink aria-label="Back to reference 6" id="backlink-ability-arcane_discoveries-fake-fn-6" data-hash-target to="ability-arcane_discoveries-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-arcane_discoveries-fake-fn-6.2" data-hash-target to="ability-arcane_discoveries-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-7-target"><p><Link to="/source/people_of_the_river">People of the River</Link> pg. 9 <InnerLink aria-label="Back to reference 7" id="backlink-ability-arcane_discoveries-fake-fn-7" data-hash-target to="ability-arcane_discoveries-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-arcane_discoveries-fake-fn-7.2" data-hash-target to="ability-arcane_discoveries-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-arcane_discoveries-fake-fn-7.3" data-hash-target to="ability-arcane_discoveries-fake-fn-7.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-8-target"><p><Link to="/source/spymasters_handbook">Spymaster's Handbook</Link> pg. 23 <InnerLink aria-label="Back to reference 8" id="backlink-ability-arcane_discoveries-fake-fn-8" data-hash-target to="ability-arcane_discoveries-fake-fn-8">↩</InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-9-target"><p>Ultimate Magic pg. 87 <InnerLink aria-label="Back to reference 9" id="backlink-ability-arcane_discoveries-fake-fn-9" data-hash-target to="ability-arcane_discoveries-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-arcane_discoveries-fake-fn-9.2" data-hash-target to="ability-arcane_discoveries-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-10-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 27 <InnerLink aria-label="Back to reference 10" id="backlink-ability-arcane_discoveries-fake-fn-10" data-hash-target to="ability-arcane_discoveries-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-arcane_discoveries-fake-fn-10.2" data-hash-target to="ability-arcane_discoveries-fake-fn-10.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-arcane_discoveries-fake-fn-11-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> pg. 25 <InnerLink aria-label="Back to reference 11" id="backlink-ability-arcane_discoveries-fake-fn-11" data-hash-target to="ability-arcane_discoveries-fake-fn-11">↩</InnerLink></p></li>
</ol></section></div>};
const _arcane_schools = {title: "Arcane Schools", topLink: ["Wizard","class/wizard"], jsx: <><h2 id="ability-arcane_schools-arcane-schools">Arcane Schools</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 79</Link><br/>The following descriptions detail each arcane school and its corresponding powers.</p>
<h3 id="ability-arcane_schools-focused-arcane-schools">Focused Arcane Schools</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 143</Link><br/>Wizards that specialize in one of the schools of magic can instead chose to focus their studies still further. Wizards who choose a focused arcane school retain the bonus spells from their school and must select two prohibited schools as normal, but the focused school changes one or more of the powers granted by their arcane school. A wizard must take all of the replacement powers associated with his focused arcane school. Once a focused arcane school is chosen, it cannot be changed.</p>
<ScrollContainer id="ability-arcane_schools--table-0"><table>
<thead>
<tr>
<th>School</th>
<th>Focused Schools</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/arcaneschool/abjuration">Abjuration<IonRippleEffect /></Link></td>
<td>Banishment, Counterspell</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/conjuration">Conjuration<IonRippleEffect /></Link></td>
<td>Cheliax: Egorian Academy Infernal Binder, Creation, Extradimension, Teleportation</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/divination">Divination<IonRippleEffect /></Link></td>
<td>Foresight, Prophecy, Scryer</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/enchantment">Enchantment<IonRippleEffect /></Link></td>
<td>Controller, Manipulator</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/evocation">Evocation<IonRippleEffect /></Link></td>
<td>Admixture, Generation</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/illusion">Illusion<IonRippleEffect /></Link></td>
<td>Deception, Phantasm, Qadira: Mage of the Veil, Shadow</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/necromancy">Necromancy<IonRippleEffect /></Link></td>
<td>Life, Undead</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/transmutation">Transmutation<IonRippleEffect /></Link></td>
<td>Enhancement, Shapechange</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/universalist">Universalist<IonRippleEffect /></Link></td>
<td>Absalom: Arcanamirium Crafter</td>
</tr>
</tbody></table></ScrollContainer>
<h3 id="ability-arcane_schools-thassilonian-magic">Thassilonian Magic</h3>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 63</Link>, <Link to="/source/inner_sea_magic">Inner Sea Magic pg. 17</Link><br/>While the concept of wizard specializations along the classically recognized schools of magic certainly dates back to the time of Azlant, and perhaps beyond into the dim recesses of time before humanity rose to prominence, it was the runelords of Thassilon who explored school specialization to its full extreme.</p>
<p>Focusing their research on the discovery that each school of magic was opposed by two specific opposition schools, the runelords developed methods of further enhancing their mastery over their chosen arcane specialties. Essentially, they defined these seven schools as much by what they couldn't do as by what they could. By excising "impurities" introduced by fixed oppositional schools, they traded arcane versatility for greater strength in their chosen fields. The seven schools of <Link to="/arcaneschool/thassilonian_magic">Thassilonian Magic</Link> are presented here.</p>
<h3 id="ability-arcane_schools-elemental-arcane-schools">Elemental Arcane Schools</h3>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 142</Link><br/>Instead of specializing in one of the standard eight schools of magic, a wizard can choose to specialize in one of the four elemental schools of magic. Like a normal arcane school, an elemental school grants a number of school powers and one bonus spell slot of each level the wizard can cast, from 1st on up. This bonus spell slot must be used to prepare a spell from the elemental school's spell list. Unlike a normal arcane school, each elemental school requires the wizard to select his opposed element as his opposition school (air opposes earth, fire opposes water). He does not need to select a second opposition school. He must expend two spell slots to prepare a spell from his opposed elemental school as normal.</p>
<h4 id="ability-arcane_schools-five-elements-variant">Five Elements Variant</h4>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 88</Link><br/>In some lands, scholars of magic insist that material things consist of five elements, not four: fire, earth, metal, water, and wood. Rather than directly opposing each other, these five elements counter and generate each other in a wheel-like formation: wood overcomes earth, earth overcomes water, water overcomes fire, fire overcomes metal, and metal overcomes wood. Similar to the four types of elemental wizard schools, some wizards specialize in the schools of magic based on metal or wood. Like a normal arcane school, an elemental school grants a number of school powers and one bonus spell slot of each level the wizard can cast, from 1st on up. This bonus spell slot must be used to prepare a spell from the elemental school's spell list. Unlike a normal arcane school, each elemental school requires the wizard to select his opposed element as his opposition school - in the case of the five-element system, he must choose the element that overcomes his element as his opposition element (so a metal elementalist must select fire as his opposition school because fire overcomes metal). He does not need to select a second opposition school. He must expend two spell slots to prepare a spell from his opposed elemental school as normal.</p>
<ScrollContainer id="ability-arcane_schools--table-1"><table>
<thead>
<tr>
<th>Elemental School</th>
<th>Subschools</th>
<th>Opposition Element</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/arcaneschool/aether">Aether<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Any one</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/air">Air<IonRippleEffect /></Link></td>
<td>Ice, Smoke</td>
<td>Earth</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/earth">Earth<IonRippleEffect /></Link></td>
<td>Magma, Mud</td>
<td>Air (classical) or Wood (five elements)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/fire">Fire<IonRippleEffect /></Link></td>
<td>Magma, Smoke</td>
<td>Water</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/metal">Metal<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Fire</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/void">Void<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Any one</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/water">Water<IonRippleEffect /></Link></td>
<td>Ice, Mud</td>
<td>Fire (classical) or Earth (five elements)</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/arcaneschool/wood">Wood<IonRippleEffect /></Link></td>
<td>&mdash;</td>
<td>Metal</td>
</tr>
</tbody></table></ScrollContainer>
<p><em><Link to="/source/dragon_empires_primer">Dragon Empires Primer</Link></em> later added the <em>void</em> element, while <em><Link to="/source/elemental_masters_handbook">Elemental Master's Handbook</Link></em> added the <em>aether</em> element.</p>
</>};
const _aspects = {title: "Aspects", topLink: ["Shifter","class/shifter"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link>, <Link to="/source/wilderness_origins">Wilderness Origins</Link></p>
<p>A shifter draws her primary strength from an association with a specific type of animal. As a result, when a shifter uses her shifter aspect or wild shape class features, she can assume only the forms of her chosen aspects. Until reaching 5th level, a shifter has only a single aspect, but as she increases in level, she gains more control over her metamorphosis, allowing her to take on multiple aspects and even merge aspects.</p>
<p>All shifter aspects have a minor form and a major form. The minor form grants a shifter a few of the animal's physical traits, while the major aspect is the form she takes on when she uses wild shape to fully transform into an animal. The list of abilities gained with the major aspect include those gained from the wild shape class feature, but the benefits gained from any resulting changes to size are not listed here (see <Link to="/spell/beast_shape_ii">beast shape II</Link>).</p>
<p>The following options represent only the most common choices used by shifters. Other aspects based on different animals certainly exist, and might grant similar powers or entirely new abilities based on the animal's themes and nature. You can use the following aspects as guides for developing aspects of your own design, but if you wish to do so, you must secure your GM's permission.</p>
<p>Shifters with a vermin aspect, such as dragonfly or spider, assume these major aspects with <Link to="/spell/vermin_shape_ii">vermin shape II</Link> rather than <em>beast shape II.</em></p>
<div className="columnar">
<ul>
<li><Link to="/aspect/bat">Bat</Link></li>
<li><Link to="/aspect/bear">Bear</Link></li>
<li><Link to="/aspect/boar">Boar</Link></li>
<li><Link to="/aspect/bull">Bull</Link></li>
<li><Link to="/aspect/crocodile">Crocodile</Link></li>
<li><Link to="/aspect/deinonychus">Deinonychus</Link></li>
<li><Link to="/aspect/dolphin">Dolphin</Link></li>
<li><Link to="/aspect/dragonfly">Dragonfly</Link></li>
<li><Link to="/aspect/electric_eel">Electric Eel</Link></li>
<li><Link to="/aspect/elephant">Elephant</Link></li>
<li><Link to="/aspect/falcon">Falcon</Link></li>
<li><Link to="/aspect/frog">Frog</Link></li>
<li><Link to="/aspect/giant_wasp">Giant Wasp</Link></li>
<li><Link to="/aspect/horse">Horse</Link></li>
<li><Link to="/aspect/lion">Lion</Link></li>
<li><Link to="/aspect/lizard">Lizard</Link></li>
<li><Link to="/aspect/mantis">Mantis</Link></li>
<li><Link to="/aspect/monkey">Monkey</Link></li>
<li><Link to="/aspect/mouse">Mouse</Link></li>
<li><Link to="/aspect/octopus">Octopus</Link></li>
<li><Link to="/aspect/owl">Owl</Link></li>
<li><Link to="/aspect/peafowl">Peafowl</Link></li>
<li><Link to="/aspect/scorpion">Scorpion</Link></li>
<li><Link to="/aspect/snake">Snake</Link></li>
<li><Link to="/aspect/snapping_turtle">Snapping Turtle</Link></li>
<li><Link to="/aspect/spider">Spider</Link></li>
<li><Link to="/aspect/stag">Stag</Link></li>
<li><Link to="/aspect/tiger">Tiger</Link></li>
<li><Link to="/aspect/wolf">Wolf</Link></li>
<li><Link to="/aspect/wolverine">Wolverine</Link></li>
</ul>
</div>
</>};
const _banners = {title: "Banners", topLink: ["Cavalier","class/cavalier"], jsx: <><h2 id="ability-banners-cavalier-banners">Cavalier Banners</h2>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 4</Link><br/>Some knights inspire and direct their allies with specialized tactics. A cavalier or <Link to="/class/samurai">samurai</Link> can select one of the following battle standards upon gaining the banner class feature, and its benefits replace the normal benefits of the banner and greater banner class features. A battle standard functions as the banner or greater banner class feature except where otherwise noted. A cavalier or samurai who replaces the banner or greater banner class feature via an archetype cannot select a battle standard, with the following exception: a standard bearer cavalier can select a battle standard at 1st level, and its effects increase as per the standard bearer's banner.</p>
<Ability id="fleet-standard-ex" icon={["upgrade","armor-upgrade","stairs-goal"]}>
<Pair single id="fleet-standard-ex">Fleet Standard (Ex)</Pair>
<Pair title="Passive Ability">An ally who benefits from this standard increases her land speed by 5 feet and gains a +1 dodge bonus to AC during any round in which she moved at least 10 feet. This increase to land speed is an enhancement bonus.</Pair>
<Pair title="At 10th Level">The bonus to speed becomes +10 feet.</Pair>
<Pair title="At 14th Level">An ally benefiting from the banner gains a +2 morale bonus on Reflex saving throws against effects that target an area, such as <Link to="/spell/fireball">fireball</Link> or <Link to="/umr/breath_weapon">breath weapons</Link>.</Pair>
<Pair title="At 15th Level">The bonus to speed increases to +15 feet.</Pair>
<Pair title="At 20th Level">The bonus to speed becomes +20 feet.</Pair>
<Pair title="Special">When the cavalier or samurai waves this standard, each ally within 60 feet can move up to her speed as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="jinx-standard-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="jinx-standard-ex">Jinx Standard (Ex)</Pair>
<Pair title="Passive Ability">An ally who benefits from this standard gains a +1 bonus on caster level checks to bypass spell resistance and a +1 bonus to the DC of her hexes and necromancy or enchantment spell she casts.</Pair>
<Pair title="At 10th Level">The bonus on caster level checks becomes +2.</Pair>
<Pair title="At 14th Level">An ally benefiting from the banner gains a +2 morale bonus on saving throws against spells or effects that deal hit point damage.</Pair>
<Pair title="At 15th Level">The bonus on caster level checks increases to +3.</Pair>
<Pair title="At 20th Level">The bonus on caster level checks becomes +4.</Pair>
<Pair title="Special">When the cavalier or samurai waves this standard, a number of allies equal to the cavalier or samurai's Charisma modifier (minimum 1) within 60 feet can attempt an Intimidate check to demoralize a foe as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="knave-standard-ex" icon={["armor-upgrade","upgrade","stairs-goal"]}>
<Pair single id="knave-standard-ex">Knave Standard (Ex)</Pair>
<Pair title="Passive Ability">An ally who benefits from this standard gains a +2 dodge bonus to AC against attacks of opportunity provoked by movement and a +1 morale bonus on attack rolls that benefit from <Link to="/rule/flanking">flanking</Link>.</Pair>
<Pair title="At 10th Level">The bonus to AC becomes +3.</Pair>
<Pair title="At 14th Level">An ally benefiting from the banner gains <Link to="/ability/sneak_attack">sneak attack</Link> +1d6; this stacks with other sources of sneak attack.</Pair>
<Pair title="At 15th Level">The bonus to AC increases to +4.</Pair>
<Pair title="At 20th Level">The bonus to AC becomes +5.</Pair>
<Pair title="Special">When the cavalier or samurai waves this standard, a number of allies equal to the cavalier or samurai's Charisma modifier (minimum 1) within 60 feet can each attempt a <Link to="/rule/feint">feint</Link> against a foe she threatens as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
<Ability id="stalwart-standard-ex" icon={["upgrade","upgrade","stairs-goal"]}>
<Pair single id="stalwart-standard-ex">Stalwart Standard (Ex)</Pair>
<Pair title="Passive Ability">An ally who benefits from this standard gains a +2 morale bonus to CMD and a +1 morale bonus on attack rolls to creatures threatening an ally.</Pair>
<Pair title="At 10th Level">The morale bonus to CMD becomes +3.</Pair>
<Pair title="At 14th Level">An ally benefiting from the banner is treated as one size category larger for the purposes of determining which creatures can affect him with combat maneuvers.</Pair>
<Pair title="At 15th Level">The morale bonus to CMD increases to +4.</Pair>
<Pair title="At 20th Level">The morale bonus to CMD becomes +5.</Pair>
<Pair title="Special">When the cavalier or samurai waves this standard, each ally within 60 feet can move up to 10 feet without provoking attacks of opportunities and ignoring <Link to="/rule/difficult_terrain">difficult terrain</Link> as an <strong className="hl">immediate action</strong>.</Pair>
</Ability>
</>};
const _bardic_masterpieces = {title: "Bardic Masterpieces", topLink: ["Bard","class/bard"], jsx: <><h2 id="ability-bardic_masterpieces-bardic-masterpieces">Bardic Masterpieces</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 21</Link><br/>Talented bards can learn or create masterpieces, unusual applications of the <Link to="/ability/bardic_performance">bardic performance</Link> ability requiring special training. Masterpiece descriptions adhere to the following guidelines.</p>
<p><strong className="hl">Masterpiece Name:</strong> In addition to the name of the masterpiece, this line indicates which Perform skill or skills the masterpiece relies upon.</p>
<p><strong className="hl">Prerequisites:</strong> Like feats, masterpieces have prerequisites that a bard must meet in order to learn them. Only bards may learn masterpieces.</p>
<p><strong className="hl">Cost:</strong> Each masterpiece has an associated cost to learn it. Typically, a bard must spend one of his bard spells known of a specific spell level or select it in place of a feat. The bard can spend a bard spell known of a level higher than the listed level to learn a masterpiece (for example, spending a 4th-level spell known to learn a masterpiece that requires spending a 3rd-level spell known).</p>
<p><strong className="hl">Effect:</strong> This brief description summarizes what occurs when a bard performs the masterpiece. Unless otherwise stated, a masterpiece's effects are supernatural. Unwilling creatures may attempt a Will save against the effect of a masterpiece; the save DC for masterpieces is equal to 10 + 1/2 the bard's level + the bard's Charisma bonus. Masterpieces that duplicate spells use the bard's caster level for the spell's caster level.</p>
<p><strong className="hl">Use:</strong> This line specifies how many bardic performance rounds the bard must use to activate the masterpiece. In some cases, the bard can extend the duration of the masterpiece by expending additional rounds of bardic performance, just as if it were any other use of bardic performance. The bard expends the listed number of bardic performance rounds when he starts performing the masterpiece; if he is interrupted, the attempt fails and the spent performance rounds are lost.</p>
<p><strong className="hl">Action:</strong> This line indicates the type of action performing the masterpiece requires. If it only requires a standard action to activate, being able to activate a bardic performance more quickly (at 7th level, activation is a move action, and at 13th, it becomes a swift action) applies to the masterpiece as well.</p>
<p>Unless otherwise stated, effects or feats that extend the duration of bardic performance (such as the <Link to="/feat/lingering_performance">Lingering Performance</Link> feat) do not apply to masterpieces.</p>
<p>GMs can use these masterpieces to inspire their own ideas for other masterpieces. Masterpieces should generally be no more powerful than a cleric or sorcerer/wizard spell available to a caster of the same level as the minimum level needed to select the masterpiece (a masterpiece requiring 7 ranks in Perform requires a 7th-level bard, and thus should not be more powerful than a 4th-level cleric or sorcerer/wizard spell).</p>
<DisplayTable table={{"id":"bardic masterpieces table","columns":[{"header":"Masterpiece","size":8.5,"align":"start","link":"masterpiece"},{"header":"Perform Skill(s)","size":5.5,"align":"start"},{"header":"Ranks","type":"num","size":4},{"header":"Cost","type":"num","size":7,"align":"start"},{"header":"Description","unsortable":true,"size":15,"align":"start"}],"initialColumn":0,"filter":[{"col":1,"has":["Act","Comedy","Dance","Keyboard","Oratory","Percussion","Sing","String","Wind"]}],"data":[[["Ancients' Flight","ancients_flight"],"Oratory",13,{"sort":5,"data":"Feat or 5th-level bard spell known."},"You compel dragons to recite an epic poem telling the story of their race's creation."],[["Anthem of Pageantry","anthem_of_pageantry"],"String, Wind",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"This lengthy piece gradually increases in power and gravity, conjuring magnificent furnishings and outfits out of thin air."],[["Arrowsong's Lament","arrowsongs_lament"],"Oratory",3,{"sort":1.1,"data":"Feat or 1st-level spell known or higher (see text)."},"This collection of brooding poetry, all in pentatonic verse, expresses Arrowsong's frustration over her overbearing parents' desire for her to become a spellcaster. Her in-depth analysis of their struggles and failings provides great insight into reading and memorizing spells from a spellbook."],[["At the Heart of It All","at_the_heart_of_it_all"],"String, Wind",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your song pierces to the heart of a creature's identity, weakening it against you."],[["Ballad of the Homesick Wanderer","ballad_of_the_homesick_wanderer"],"Oratory, Sing",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This poem of sadness and longing was developed by a Riftwarden bard seeking a way to fight summoned creatures without violence. Its otherworldly lyrics drive outsiders to return to their planes of origin."],[["Ballad of the Warding Princess","ballad_of_the_warding_princess"],"Oratory, Sing",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"The words of your poem weave around your allies and deflect attacks."],[["Banshee's Requiem","banshees_requiem"],"Sing",17,{"sort":6,"data":"Feat or 6th-level bard spell known."},"By filling your performance with the mournful angst of a lost love, your song evokes the inexorable pull of the grave upon every living thing."],[["Battle Song of the People's Revolt","battle_song_of_the_peoples_revolt"],"Percussion, Wind",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This song for fife and drum is found in many folios filled with music intended to unite the people of Andoran in their secession from Cheliax."],[["Blazing Rondo","blazing_rondo"],"Oratory, Percussion",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Thundering rhythms quicken your allies' movements, but the effort of keeping up with the beat is wearying."],[["Clamor of the Heavens","clamor_of_the_heavens"],"Percussion, Sing",10,{"sort":5,"data":"5th-level bard spell known."},"This confusing dirge of melody and counter-melody was composed for choirs celebrating the various martyrs of Ragathiel. It is intended to praise and magnify the glory of the empyreal lord, but to the uninitiated it sounds like a battle hymn. In fact, in Varisia, this is what the song has become to many."],[["Dance of Captivating Desire","dance_of_captivating_desire"],"Dance",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"A creation of Calistria's priesthood, this swaying, sensuous dance fans the fires of lust."],[["Death of Heroes","death_of_heroes"],"Oratory, Sing",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You speak of the Worldwound's horrors, retelling tales of helpless warriors watching their loved ones die."],[["Dirge of the Torn Sail","dirge_of_the_torn_sail"],"Sing, String",7,{"sort":2,"data":"Feat or 2nd-level spell known."},"Your ominous refrain warns away those who would trespass in your domain."],[["Endless Waltz of the Eldest","endless_waltz_of_the_eldest"],"Dance, String",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This elegant but dizzyingly fast gnome waltz calls for rapidly changing roles inspired by the many faces that the legendary Eldest of the First World wear."],[["Exhilarating Prayer of Grace","exhilarating_prayer_of_grace"],"Dance",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"You lead your audience through a series of stretches and exercises designed to warm the muscles and increase blood circulation."],[["Fafnheir and the First King","fafnheir_and_the_first_king"],"String, Wind",6,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"You affect the mood of listeners by celebrating the defeat of the First Linnorm King at the claws of Fafnheir, the Father of All Linnorms."],[["Findelalara's Refuge","findelalaras_refuge"],"Dance, Oratory",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Praying to the Guiding Hand for assistance, you invoke shelter from ice and snow."],[["Fugue de Rue d'Auseil","fugue_de_rue_dauseil"],"String",15,{"sort":6,"data":"Feat or 6th-level bard spell known."},"Your music provides a bastion that hedges out horrors and fiends."],[["Hymn of Restorative Harmonics","hymn_of_restorative_harmonics"],"Sing, Wind",6,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You perform a song of such beauty that it touches the soul of any who hear it, allowing them to recover from any adverse conditions."],[["Hymn of Sacred Lands","hymn_of_sacred_lands"],"Oratory, Sing",16,{"sort":5,"data":"Feat or 5th-level bard spell known."},"You cherish and love your home with such strength that your words weave protective magic around your dwelling."],[["Illusion's Decree","illusions_decree"],"Comedy, Oratory",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"These stories of wiliness and mystery inspire listeners to see through deceptions."],[["Kaminari Drums","kaminari_drums"],"Percussion",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"You beat a thunderous cacophony that strikes your foes with the fury of the kami of storms."],[["Legato Piece on the Infernal Bargain","legato_piece_on_the_infernal_bargain"],"String",11,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Your skilled playing can conjure up supernatural servants."],[["Life Budding in Salted Earth","life_budding_in_salted_earth"],"Sing, String, Wind",4,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"This delicate tune suggests the determined sprouting of seedlings through barren, rocky soil. Both its motif and effects are popular in Rahadoum, where the tune is also known as \"Spring Inside.\""],[["Lingering Leitmotif","lingering_leitmotif"],"Oratory, Sing",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your clever turn of words or catchy musical jingle sticks in people's heads long after they have heard it."],[["Melody of Frightful Death","melody_of_frightful_death"],"String",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"The pain and horror of the Abyss shrieks through your instrument to make a listener experience the death she dreads most."],[["Melody of Surrender","melody_of_surrender"],"Sing, Wind",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This gentle, relaxing tune makes its listeners calm and receptive."],[["Minuet of the Midnight Ivy","minuet_of_the_midnight_ivy"],"Dance",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your winding, twisting dance is helpful in dodging obstacles and climbing."],[["Music Beyond the Spheres","music_beyond_the_spheres"],"Dance, Sing, String",13,{"sort":5,"data":"Feat or 5th-level bard spell known."},"You use your own life force to create a phantasmagorical impression of eldritch vibrations with your wild, flailing dance and erratic tones. The performance unravels and remakes the fabric of reality around you according to your designs."],[["Night Queen's Fury","night_queens_fury"],"Act, Oratory",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You lay a curse on those who have wronged you."],[["Pageant of the Peacock","pageant_of_the_peacock"],"Act, Dance",4,{"sort":2,"data":"Feat or 2nd-level spell known."},"Your elegant movements cause you to seem to be more than you are."],[["Pallavi of Nirvana's Blossoming","pallavi_of_nirvanas_blossoming"],"Dance",11,{"sort":4,"data":"Feat or 4th-level bard spell known."},"The divine sunlight caused by this dance banishes darkness and causes flowers to bloom."],[["Ragadahn's Raqs Beledi","ragadahns_raqs_beledi"],"Dance",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your expressive dance makes your allies much more limber."],[["Ragadahn's Spiraling Ascent","ragadahns_spiraling_ascent"],"Act, Dance",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You can hurl your allies into battle by directing swift winds."],[["Rat Quadrille","rat_quadrille"],"Percussion, Sing",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This repetitive, distracting melody wears down foes."],[["Relentless Reprise","relentless_reprise"],"Keyboard, Sing, String, Wind",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your song replays endlessly in your target's mind, sapping resolve and sanity."],[["Rondeau of Heavenly Order","rondeau_of_heavenly_order"],"Sing",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your carefully structured song imposes rigid order on your listeners."],[["Song of Extinction","song_of_extinction"],"Sing, String, Wind",15,{"sort":6,"data":"Feat or 6th-level bard spell known."},"The clarion of the end times, this masterpiece is a meticulous cacophony that ends all life."],[["Song of Sarkoris","song_of_sarkoris"],"Oratory, Sing",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"You recite inspirational lines from this epic poem commemorating the final stand at Storasta, keeping defiance alive even in the face of certain death."],[["Song of the Stonebearers","song_of_the_stonebearers"],"Percussion, Sing",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"This working song consists of a strong rhythm and boneshaking drum beats."],[["Spirit of the Horse","spirit_of_the_horse"],"Strings",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"This mournful song, which is typically played upon a traditional instrument known as a morin khuur, empowers animal companions."],[["Stirring Discourse of the Mind","stirring_discourse_of_the_mind"],"Oratory",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"You lecture your audience on the merits of studious endeavors and inspire them with new insights into the subject matter. As a result of your discourse, those who listen become more receptive to knowledge."],[["Stone Face","stone_face"],"Comedy, Oratory",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your antics can soften even the hardest visage."],[["Symphony of Sylandurla's Ascent","symphony_of_sylandurlas_ascent"],"Percussion, Wind",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"This elaborate arrangement for traditional elven instruments evokes Sylandurla's heroic climb up the spire from the planar city of Axis to the Boneyard, where it's said that she sang 8,008 tales to win elves their immunity to magical sleep."],[["Symphony of the Dark Prince","symphony_of_the_dark_prince"],"Sing",15,{"sort":5,"data":"Feat or 5th-level bard spell known."},"You contort your vocal cords to produce an eerie, melodious song about the wonders of Dispater's court."],[["Symphony of the Elysian Heart","symphony_of_the_elysian_heart"],"Keyboard, Wind",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You spark notes of joy and freedom in your listeners."],[["Tales of Twisting Steel","tales_of_twisting_steel"],"Act, Oratory",3,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This medley of tales inspires listeners to new heights of bravery and self sacrifice."],[["Bear's Jig, The","the_bears_jig"],"String, Wing",11,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Your music makes animals act like people."],[["Canticle of Joy, The","the_canticle_of_joy"],"Sing",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your haunting melody is capable of shattering the very minds of those who hear it."],[["Cat-Step, The","the_cat_step"],"Dance",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your agile dancing allows you and others to fall safely and land gracefully."],[["Dance of 23 Steps, The","the_dance_of_23_steps"],"Dance",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"This complex dance makes you difficult to strike."],[["Dance of Kindled Desires, The","the_dance_of_kindled_desires"],"Dance",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Each sway and shake of your hips calls up another temptation from the depths of Hell until your spectator, hapless and drooling, finally succumbs and freely offers up his life, honor, or very soul for just a taste of what you have proffered."],[["Depths of the Mountain, The","the_depths_of_the_mountain"],"Percussion, Wind",15,{"sort":5,"data":"Feat or 5th-level bard spell known."},"Your drumming skills can break solid rock."],[["Dumbshow of Gorroc, The","the_dumbshow_of_gorroc"],"Act, Comedy",6,{"sort":2,"data":"Feat or 2nd-level spell known."},"Your acting conjures hellfire and salt to destroy plants."],[["House of Imaginary Walls, The","the_house_of_imaginary_walls"],"Act",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"You can trap opponents with the power of your acting."],[["Lullaby of Ember the Ancient, The","the_lullaby_of_ember_the_ancient"],"Sing",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"You can put powerful creatures to sleep with the power of your song."],[["Quickening Pulse, The","the_quickening_pulse"],"Percussion, Wind",7,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your driving notes cause unnatural heart rates in your opponents."],[["Requiem of the Fallen Priest-King, The","the_requiem_of_the_fallen_priest_king"],"Oratory, Sing",10,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your performance reveals ways to cheat time itself."],[["Rheumy Refrain, The","the_rheumy_refrain"],"Sing",5,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your strange melody of hacking gasps and pained wheezes draws upon the dark powers of Abaddon to fill a witness with debilitating and distracting phlegm."],[["Sea Is Now My Sky, The","the_sea_is_now_my_sky"],"Sing, String",9,{"sort":3,"data":"Feat or 3rd-level bard spell known."},"Your thrilling tune causes you and your allies to fly through the water as easily as a bird soars through the air."],[["Tragedy of False Hope, The","the_tragedy_of_false_hope"],"Oratory, Sing",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"You remind those around you of the mystic's warning and how danger was ignored in expectation of Aroden's return."],[["Waning Bolero, The","the_waning_bolero"],"Dance",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Your deliberate dancing causes your foes' steps to fall in time to your own."],[["Winds of the Five Heavens, The","the_winds_of_the_five_heavens"],"Act, Oratory",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"You control the wind by telling a tale demonstrating the hubris of mortals."],[["Toccata and Fugue of the Danse Macabre","toccata_and_fugue_of_the_danse_macabre"],"Keyboard, Wind",4,{"sort":2,"data":"Feat or 2nd-level bard spell known."},"Your spooky music blurs the boundaries between life and death, confusing the senses of undead creatures."],[["Triple Time","triple_time"],"Percussion, String, Wind",3,{"sort":1,"data":"Feat or 1st-level bard spell known."},"Your lively cadence puts a spring in the step of weary marchers."],[["Vindictive Soliloquy","vindictive_soliloquy"],"Act, Oratory, Sing",10,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Your bombastic speech creates booming reverberations of sound."],[["Wildsoul Aria","wildsoul_aria"],"Sing, Wind",7,{"sort":4,"data":"Feat or 4th-level bard spell known."},"Channeling the mysterious power of the First World, you grant the listener the gift - or curse - of an animal's shape."],[["Wise King's Saga","wise_kings_saga"],"Oratory, Sing",15,{"sort":5,"data":"Feat or 5th-level bard spell known."},"Your saga magically weaves the counsel of sagacious ancestors into the telling."]]}} />
</>};
const _blessings = {hasJL:true,title: "Warpriest Blessings", topLink: ["Warpriest","class/warpriest"], jsx: <><div className="jumpList" id="ability-blessings-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-blessings-focused-blessings">Focused Blessings</InnerLink></li><li><InnerLink toTop to="ability-blessings-disaster-blessings">Disaster Blessings</InnerLink></li><li><InnerLink toTop to="ability-blessings-list-of-blessings">List of Blessings</InnerLink></li></ul></div><h2 id="ability-blessings-warpriest-blessings">Warpriest Blessings</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link><br/>A warpriest can select any two blessings granted by his deity. <Link to="/main/faiths">Deities</Link> grant blessings of the same name as the <Link to="/ability/domains">domains</Link> they grant. Unless otherwise noted, using a blessing is a standard action. A warpriest without a deity can select any two blessings (subject to GM approval). If a blessing's power duplicates a spell effect, the warpriest's caster level for that power is equal to his warpriest level.</p>
<p>Blessings that affect weapons and armor benefit anyone who wields or wears those items, not just the warpriest.</p>
<h3 id="ability-blessings-focused-blessings" data-hash-target>Focused Blessings</h3>
<p><strong>Sources</strong> <Link to="/source/healers_handbook">Healer's Handbook</Link><br/>Focused blessings are more specific blessings bestowed upon a warpriest by his deity that allow players greater flexibility for customization. Focused blessings are to blessings what subdomains are to domains; each focused blessing corresponds to a specific subdomain, and a warpriest can select a focused blessing only if his deity could grant the corresponding subdomain (and associated domain) to a cleric. For instance, a warpriest can select the <em>Resurrection</em> focused blessing only if his deity's list of subdomains includes the Resurrection subdomain.</p>
<p>Each focused blessing grants either a minor blessing or a major blessing that replaces the associated blessing's respective minor blessing or major blessing. If a warpriest selects a focused blessing, he cannot select its associated blessing as his other blessing choice (in effect, the focused blessing replaces its associated blessing). A focused blessing is treated as equivalent to its associated blessing for any effect or prerequisite based on blessings. A focused blessing can be selected by a character of any class that grants the warpriest's blessing class feature, provided his deity allows the focused blessing (subject to the GM's discretion).</p>
<p>If a warpriest with a focused blessing or blessings also has levels in a class that grants cleric domains, the associated blessing or blessings must match the domain selected by that class. Subject to the GM's discretion, the warpriest can change his previously selected associated blessings or domains to make all of them conform.</p>
<p>If a focused blessing ability calls for a saving throw, the DC of the save is equal to 10 + 1/2 the character's warpriest level + his Wisdom modifier.</p>
<h3 id="ability-blessings-disaster-blessings" data-hash-target>Disaster Blessings</h3>
<p><strong>Sources</strong> <Link to="/source/ultimate_wilderness">Ultimate Wilderness pg. 97</Link><br/>Evil deities that offer the Air, Earth, Fire, and Water blessings, or nonevil deities with disasters in their portfolios, might also offer disaster blessings as options for their warpriests.</p>
<h3 id="ability-blessings-list-of-blessings" data-hash-target>List of Blessings</h3>
<div className="columnar max2">
<ul>
<li><Link to="/blessing/air">Air</Link><ul>
<li><Link to="/blessing/tornado">Tornado</Link> disaster blessing</li>
</ul>
</li>
<li><Link to="/blessing/animal">Animal</Link></li>
<li><Link to="/blessing/artifice">Artifice</Link></li>
<li><Link to="/blessing/chaos">Chaos</Link></li>
<li><Link to="/blessing/charm">Charm</Link></li>
<li><Link to="/blessing/community">Community</Link><ul>
<li><Link to="/blessing/cooperation">Cooperation</Link> focused blessing</li>
</ul>
</li>
<li><Link to="/blessing/curse">Curse</Link></li>
<li><Link to="/blessing/darkness">Darkness</Link></li>
<li><Link to="/blessing/death">Death</Link></li>
<li><Link to="/blessing/destruction">Destruction</Link></li>
<li><Link to="/blessing/earth">Earth</Link><ul>
<li><Link to="/blessing/earthquake">Earthquake</Link> disaster blessing</li>
</ul>
</li>
<li><Link to="/blessing/evil">Evil</Link></li>
<li><Link to="/blessing/fire">Fire</Link><ul>
<li><Link to="/blessing/wildfire">Wildfire</Link> disaster blessing</li>
</ul>
</li>
<li><Link to="/blessing/glory">Glory</Link></li>
<li><Link to="/blessing/godclaw">Godclaw</Link></li>
<li><Link to="/blessing/good">Good</Link></li>
<li><Link to="/blessing/healing">Healing</Link><ul>
<li><Link to="/blessing/restoration">Restoration</Link> focused blessing</li>
<li><Link to="/blessing/resurrection">Resurrection</Link> focused blessing</li>
</ul>
</li>
<li><Link to="/blessing/knowledge">Knowledge</Link></li>
<li><Link to="/blessing/law">Law</Link></li>
<li><Link to="/blessing/liberation">Liberation</Link><ul>
<li><Link to="/blessing/freedom">Freedom</Link> focused blessing</li>
</ul>
</li>
<li><Link to="/blessing/luck">Luck</Link></li>
<li><Link to="/blessing/madness">Madness</Link></li>
<li><Link to="/blessing/magic">Magic</Link></li>
<li><Link to="/blessing/nobility">Nobility</Link><ul>
<li><Link to="/blessing/martyr">Martyr</Link> focused blessing</li>
</ul>
</li>
<li><Link to="/blessing/plant">Plant</Link></li>
<li><Link to="/blessing/protection">Protection</Link></li>
<li><Link to="/blessing/repose">Repose</Link></li>
<li><Link to="/blessing/rune">Rune</Link></li>
<li><Link to="/blessing/scalykind">Scalykind</Link></li>
<li><Link to="/blessing/shadow">Shadow</Link></li>
<li><Link to="/blessing/strength">Strength</Link></li>
<li><Link to="/blessing/sun">Sun</Link></li>
<li><Link to="/blessing/travel">Travel</Link></li>
<li><Link to="/blessing/trickery">Trickery</Link></li>
<li><Link to="/blessing/void">Void</Link></li>
<li><Link to="/blessing/war">War</Link></li>
<li><Link to="/blessing/water">Water</Link><ul>
<li><Link to="/blessing/flood">Flood</Link> disaster blessing</li>
</ul>
</li>
<li><Link to="/blessing/weather">Weather</Link></li>
</ul>
</div>
</>};
const _bloodline_mutations = {title: "Bloodline Mutations", topLink: ["Sorcerer","class/sorcerer"], jsx: <><h2 id="ability-bloodline_mutations-bloodline-mutations">Bloodline Mutations</h2>
<p><strong>Sources</strong> <Link to="/source/magic_tactics_toolbox">Magic Tactics Toolbox pg. 10</Link></p>
<p>Although heirs to similar arcane bloodlines may share commonalities, the unique circumstances in which a bloodline enters a <Link to="/class/bloodrager">bloodrager</Link> or sorcerer's lineage can result in the manifestation of particularly strange or unusual bloodline powers known as mutations. Whenever a bloodrager or a sorcerer gains a new bloodline power, she can swap her bloodline power for a bloodline mutation whose prerequisites she meets. Once this choice is made, it cannot be changed, and a bloodrager or sorcerer cannot swap a bloodline power that she has altered or replaced with an archetype for a bloodline mutation. A bloodrager need not be in a bloodrage to use her bloodline mutation powers.</p>
<p>Alternatively, a bloodrager or sorcerer can select a bloodline mutation in place of a bloodline bonus feat, provided her class level is at least equal to the level of the bloodline ability the mutation normally replaces.</p>
<Ability id="blood-havoc" icon={["upgrade"]}>
<Pair single id="blood-havoc">Blood Havoc</Pair>
<Pair title="Replaces" hl>The sorcerer's 1st-level bloodline power or the bloodrager's 4th-level bloodline power</Pair>
<Pair title="Ability">Whenever you cast a bloodrager or sorcerer spell that deals damage, add 1 point of damage per die rolled. This benefit applies only to damaging spells that belong to schools you have selected with <Link to="/feat/spell_focus">Spell Focus</Link> or that are bloodline spells for your bloodline.</Pair>
</Ability>
<Ability id="blood-intensity" icon={["upgrade"]}>
<Pair single id="blood-intensity">Blood Intensity</Pair>
<Pair title="Replaces" hl>The sorcerer's 3rd-level bloodline power or the bloodrager's 8th-level bloodline power</Pair>
<Pair title="Ability">Whenever you cast a bloodrager or sorcerer spell that deals damage, you can increase its maximum number of damage dice by an amount equal to your Strength or Charisma modifier, whichever is higher. This otherwise functions as &mdash; and does not stack with &mdash; the <Link to="/feat/intensified_spell">Intensified Spell</Link> feat.</Pair>
<Pair title="Usage">1 time/day + 1 per four sorcerer or bloodrager levels beyond 3rd<ByLevelPop levels={[[3,1],[7,2],[11,3],[15,4],[19,5]]} unit="time" postText="/day" /></Pair>
</Ability>
<Ability id="blood-piercing" icon={["armor-downgrade"]}>
<Pair single id="blood-piercing">Blood Piercing</Pair>
<Pair title="Replaces" hl>The sorcerer's 9th-level bloodline power or the bloodrager's 4th-level bloodline power</Pair>
<Pair title="Ability">When you cast a bloodrager or sorcerer spell that deals damage, creatures affected by the spell reduce their energy resistance and spell resistance against the spell's effects by an amount equal to your Strength or Charisma modifier, whichever is higher.</Pair>
<Pair title="Usage">1 time/day + 1 per five sorcerer or bloodrager levels beyond 4th<ByLevelPop levels={[[4,1],[9,2],[14,3],[19,4]]} unit="time" postText="/day" /></Pair>
<Pair title="Note" hl>The original text says this ability peaks at 4 times per day at 18th level, but the progression given doesn't reach 4 times per day until 19th level.</Pair>
</Ability>
</>};
const _bloodrager_bloodlines = {title: "Bloodrager Bloodlines", topLink: ["Bloodrager","class/bloodrager"], jsx: <><h2 id="ability-bloodrager_bloodlines-bloodrager-bloodlines">Bloodrager Bloodlines</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<p>When a bloodrager enters a bloodrage, he often takes on a physical transformation influenced by his bloodline and powered by the magic that roils within him. Unless otherwise specified, he gains the effects of his bloodline powers only while in a bloodrage; once the bloodrage ends, all powers from his bloodline immediately cease, and any physical changes the bloodrager underwent revert, restoring him to normal.</p>
<ScrollContainer id="ability-bloodrager_bloodlines--table-0"><table>
<thead>
<tr>
<th>Bloodline</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/blrgbloodline/aberrant">Aberrant<IonRippleEffect /></Link></td>
<td>There is a taint in your blood that is both alien and bizarre. When you bloodrage, this manifests in peculiar and terrifying ways.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/abyssal">Abyssal<IonRippleEffect /></Link></td>
<td>Generations ago, a demon spread its filth into the essence of your bloodline. While it doesn't manifest in all of your kin, in those moments when you're bloodraging, you embody its terrifying presence.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/aquatic">Aquatic<IonRippleEffect /></Link></td>
<td>The anger in your blood rises from the ocean depths, seeded by descent from undersea empires, creeping ichthyic infiltrators into remote seaside villages, or something deeper still.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/arcane">Arcane<IonRippleEffect /></Link></td>
<td>While others of your kin may be powerful wizards and sorcerers, the eldritch nature of the blood coursing through your veins transforms you into a spell-breaking terror.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/black_blood">Black Blood<IonRippleEffect /></Link></td>
<td>Contact with the black blood of Orv - by you or one of your ancestors - transformed your bloodline. This necromantic taint in your blood mutates you into something peculiar.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/celestial">Celestial<IonRippleEffect /></Link></td>
<td>By way of a celestial ancestor or divine intervention, the blood of angels fills your body with a holy potency, granting you a majestic visage and angelic powers when you enter your bloodrage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/destined">Destined<IonRippleEffect /></Link></td>
<td>Your bloodline is destined for great things. When you bloodrage, you exude a greatness that makes all but the most legendary creatures seem lesser.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/draconic">Draconic<IonRippleEffect /></Link></td>
<td>At some point in your family's history, a dragon interbred with your bloodline. Now, the sublime monster's ancient power fuels your bloodrage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/elemental">Elemental<IonRippleEffect /></Link></td>
<td>The power of the elements resides in you, and at times you can hardly control its fury. This influence comes either from an elemental outsider in your family history or from a moment when you or your ancestors were exposed to a powerful elemental force or cataclysm.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/fey">Fey<IonRippleEffect /></Link></td>
<td>One of your ancestors was fey, or the fey realm somehow intermixed with your bloodline. It affects your bloodrage in tricky and surprising ways.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/hag">Hag<IonRippleEffect /></Link></td>
<td>Hags interbreed with other races frequently, and those children who escape their grasp may pass their heritage on to later generations before it reemerges. The potent humors that accompany hag blood are better suited to a bloodrager's ferocity than to traditional spellcasting.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/infernal">Infernal<IonRippleEffect /></Link></td>
<td>The Pit lives in your blood. Maybe one of your ancestors was seduced by the powers of Hell or made a deal with a devil. Either way, its corruption seethes within your lineage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/kyton">Kyton<IonRippleEffect /></Link></td>
<td>In the shadowy land of Nidal, the influence of Zon-Kuthon and the Midnight Lord's favored servants - the kytons - taints the land and its inhabitants. Just as an eclipse drives animals wild, so too does the darkness unleash a madness from deep within you.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/martyred">Martyred<IonRippleEffect /></Link></td>
<td>One of your ancestors paid the ultimate price for her beliefs. This distant relative martyred herself out of a devout dedication to some specific cause, and that sacrifice has infused you with power that you can use for good - or for ill. When you bloodrage, an inspiring fury conjures echoes of your forebear's incredible determination and selfless dedication, both offering you protection and amplifying your ability to punish any who dare incur your wrath.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/medusa">Medusa<IonRippleEffect /></Link></td>
<td>No magical creature is more iconic in Iblydan lore than the <Link to="/monster/medusa">medusa</Link>. Perhaps your lineage traces back to a medusa, or an ancestor survived a medusa's petrifying gaze and was forever changed by the experience. However the medusa's influence entered your bloodline, when you bloodrage, you gain fearsome and ancient powers.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/naga">Naga<IonRippleEffect /></Link></td>
<td>The blood of the powerful, serpentine aberrations known as nagas runs through your veins, fueling your bloodrage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/phoenix">Phoenix<IonRippleEffect /></Link></td>
<td>The flames of the phoenix burn brightly within your soul, filling you with an inextinguishable vitality that can withstand the most harrowing of assaults.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/salamander">Salamander<IonRippleEffect /></Link></td>
<td>Salamanders are fierce warriors and master smiths, and you wield their might and mastery of metal by birthright.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/shadow">Shadow<IonRippleEffect /></Link></td>
<td>Because of your heritage, you can move and see through shadows as if you are part of them. Your fury absorbs light, warmth, and strength.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/shapechanger">Shapechanger<IonRippleEffect /></Link></td>
<td>The blood of doppelgangers, faceless stalkers, lycanthropes, or other shapechangers courses through your veins.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/sphinx">Sphinx<IonRippleEffect /></Link></td>
<td>Those who successfully traded riddles with sphinxes sometimes find themselves or their descendants exhibiting both arcane power and violent fury. These bloodragers find being outwitted or outmaneuvered especially infuriating; though they are usually scholarly and erudite, their fits of frenzied rage are all the more terrifying in comparison.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/undead">Undead<IonRippleEffect /></Link></td>
<td>The foul corruption of undeath is a part of you. Somewhere in the past, death became infused with your lineage. Your connection to the attributes of the undead bestows frightening power when your bloodrage.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/verdant">Verdant<IonRippleEffect /></Link></td>
<td>Your body is suffused with raw plant life. When you bloodrage, your plant-like characteristics bolster your durability and grant you some control over vegetation.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/blrgbloodline/vestige">Vestige<IonRippleEffect /></Link></td>
<td>You are the descendant of great heroes from a lost civilization.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _combat_styles = {title: "Combat Styles", topLink: ["Ranger","class/ranger"], jsx: <><h2 id="ability-combat_styles-combat-styles">Combat Styles</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>At 2nd level, a ranger must select a combat style to pursue. The ranger's expertise manifests in the form of bonus feats at 2nd, 6th, 10th, 14th, and 18th level. He can choose feats from his selected combat style, even if he does not have the normal prerequisites.</p>
<blockquote className="hanging">
<Ability id="archery" icon={["info"]}>
<Pair single id="archery">Archery</Pair>
<Pair title="At 1st Level"><Link to="/feat/far_shot">Far Shot</Link>, <Link to="/feat/focused_shot">Focused Shot</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, and <Link to="/feat/rapid_shot">Rapid Shot</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-1" id="ability-combat_styles-fake-fn-1" data-hash-target to="ability-combat_styles-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/crossbow_mastery">Crossbow Mastery</Link>, <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link>, <Link to="/feat/manyshot">Manyshot</Link>, and <Link to="/feat/point_blank_master">Point-Blank Master</Link> <sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-2" id="ability-combat_styles-fake-fn-2" data-hash-target to="ability-combat_styles-fake-fn-2-target">2</InnerLink></sup> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</Pair>
</Ability>
<Ability id="crossbow" icon={["info"]}>
<Pair single id="crossbow">Crossbow</Pair>
<Pair title="At 1st Level"><Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/feat/focused_shot">Focused Shot</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, and <Link to="/feat/rapid_reload">Rapid Reload</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-3" id="ability-combat_styles-fake-fn-3" data-hash-target to="ability-combat_styles-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/crossbow_mastery">Crossbow Mastery</Link> and <Link to="/feat/improved_precise_shot">Improved Precise Shot</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</Pair>
</Ability>
<Ability id="deceptive" icon={["info"]}>
<Pair single id="deceptive">Deceptive</Pair>
<Pair title="At 1st Level"><Link to="/feat/disengaging_feint">Disengaging Feint</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, <Link to="/feat/ranged_feint">Ranged Feint</Link>, and <Link to="/feat/two_weapon_feint">Two-Weapon Feint</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-4" id="ability-combat_styles-fake-fn-4" data-hash-target to="ability-combat_styles-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/greater_feint">Greater Feint</Link> and <Link to="/feat/misdirection_tactics">Misdirection Tactics</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/disengaging_shot">Disengaging Shot</Link> and <Link to="/feat/passing_trick">Passing Trick</Link> to the list.</Pair>
</Ability>
<Ability id="elemental" icon={["info"]}>
<Pair single id="elemental">Elemental</Pair>
<Pair title="At 1st Level"><Link to="/feat/aquadynamic_focus">Aquadynamic Focus</Link>, <Link to="/feat/scorching_weapons">Scorching Weapons</Link>, <Link to="/feat/stony_step">Stony Step</Link>, and <Link to="/feat/wind_stance">Wind Stance</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-5" id="ability-combat_styles-fake-fn-5" data-hash-target to="ability-combat_styles-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/inner_flame">Inner Flame</Link> and <Link to="/feat/lightning_stance">Lightning Stance</Link> to the list.</Pair>
<Pair title="At 10th Level">Add Blazing Aura and <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> to the list.</Pair>
</Ability>
<Ability id="faithful" extraClasses="hasSubs" icon={["info"]}>
<Pair single id="faithful">Faithful</Pair>
<Pair title="Info">This combat style is specific to a deity the ranger worships. The associated feat lists are given below.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-6" id="ability-combat_styles-fake-fn-6" data-hash-target to="ability-combat_styles-fake-fn-6-target">6</InnerLink></sup></Pair>
</Ability>
<Ability id="achaekek" extraClasses="subAbility" icon={["info"]}>
<Pair single id="achaekek">Achaekek</Pair>
<Pair title="Deity" hl><Link to="/faith/achaekek">Achaekek</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/double_slice">Double Slice</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (sawtooth sabre), <Link to="/feat/two_weapon_feint">Two-Weapon Feint</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_two_weapon_feint">Improved Two-Weapon Feint</Link> and <Link to="/feat/two_weapon_defense">Two-Weapon Defense</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> and <Link to="/feat/two_weapon_rend">Two-Weapon Rend</Link> to the list.</Pair>
</Ability>
<Ability id="besmara" extraClasses="subAbility" icon={["info"]}>
<Pair single id="besmara">Besmara</Pair>
<Pair title="Deity" hl><Link to="/faith/besmara">Besmara</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, <Link to="/feat/improved_feint">Improved Feint</Link>, and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/greater_feint">Greater Feint</Link> and <Link to="/feat/quick_dirty_trick">Quick Dirty Trick</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/critical_focus">Critical Focus</Link> and <Link to="/feat/disengaging_flourish">Disengaging Flourish</Link> to the list.</Pair>
</Ability>
<Ability id="calistria" extraClasses="subAbility" icon={["info"]}>
<Pair single id="calistria">Calistria</Pair>
<Pair title="Deity" hl><Link to="/faith/calistria">Calistria</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (Whip), <Link to="/feat/weapon_finesse">Weapon Finesse</Link>, and <Link to="/feat/whip_mastery">Whip Mastery</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_trip">Improved Trip</Link> and <Link to="/feat/improved_whip_mastery">Improved Whip Mastery</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/greater_trip">Greater Trip</Link> and <Link to="/feat/greater_whip_mastery">Greater Whip Mastery</Link> to the list.</Pair>
</Ability>
<Ability id="cayden-cailean" extraClasses="subAbility" icon={["info"]}>
<Pair single id="cayden-cailean">Cayden Cailean</Pair>
<Pair title="Deity" hl><Link to="/faith/cayden_cailean">Cayden Cailean</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/catch_off_guard">Catch Off-Guard</Link>, <Link to="/feat/combat_expertise">Combat Expertise</Link>, <Link to="/feat/combat_reflexes">Combat Reflexes</Link>, and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_disarm">Improved Disarm</Link> and <Link to="/feat/lunge">Lunge</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/disarming_strike">Disarming Strike</Link> and <Link to="/feat/improved_critical">Improved Critical</Link> (rapier) to the list.</Pair>
</Ability>
<Ability id="desna" extraClasses="subAbility" icon={["info"]}>
<Pair single id="desna">Desna</Pair>
<Pair title="Deity" hl><Link to="/faith/desna">Desna</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, <Link to="/feat/rapid_shot">Rapid Shot</Link>, and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/distance_thrower">Distance Thrower</Link> and <Link to="/feat/opening_volley">Opening Volley</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/close_quarters_thrower">Close-Quarters Thrower</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</Pair>
</Ability>
<Ability id="erastil" extraClasses="subAbility" icon={["info"]}>
<Pair single id="erastil">Erastil</Pair>
<Pair title="Deity" hl><Link to="/faith/erastil">Erastil</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/feat/far_shot">Far Shot</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, and <Link to="/feat/precise_shot">Precise Shot</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/clustered_shots">Clustered Shots</Link> and <Link to="/feat/snap_shot">Snap Shot</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/improved_snap_shot">Improved Snap Shot</Link> and <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> to the list.</Pair>
</Ability>
<Ability id="gorum" extraClasses="subAbility" icon={["info"]}>
<Pair single id="gorum">Gorum</Pair>
<Pair title="Deity" hl><Link to="/faith/gorum">Gorum</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/improved_bull_rush">Improved Bull Rush</Link>, <Link to="/feat/power_attack">Power Attack</Link>, and <Link to="/feat/shield_of_swings">Shield of Swings</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/cleaving_finish">Cleaving Finish</Link> and <Link to="/feat/vital_strike">Vital Strike</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/death_or_glory">Death or Glory</Link> and <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link> to the list.</Pair>
</Ability>
<Ability id="gozreh" extraClasses="subAbility" icon={["info"]}>
<Pair single id="gozreh">Gozreh</Pair>
<Pair title="Deity" hl><Link to="/faith/gozreh">Gozreh</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/feat/distance_thrower">Distance Thrower</Link>, <Link to="/feat/point_blank_shot">Point-Blank Shot</Link>, and <Link to="/feat/two_handed_thrower">Two-Handed Thrower</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/lunge">Lunge</Link> and <Link to="/feat/precise_shot">Precise Shot</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/impaling_critical">Impaling Critical</Link> (trident) and <Link to="/feat/strike_back">Strike Back</Link> to the list.</Pair>
</Ability>
<Ability id="iomedae" extraClasses="subAbility" icon={["info"]}>
<Pair single id="iomedae">Iomedae</Pair>
<Pair title="Deity" hl><Link to="/faith/iomedae">Iomedae</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/bodyguard">Bodyguard</Link>, <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/step_up">Step Up</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/in_harms_way">In Harm's Way</Link> and <Link to="/feat/shield_slam">Shield Slam</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/bashing_finish">Bashing Finish</Link> and <Link to="/feat/shield_master">Shield Master</Link> to the list.</Pair>
</Ability>
<Ability id="irori" extraClasses="subAbility" icon={["info"]}>
<Pair single id="irori">Irori</Pair>
<Pair title="Deity" hl><Link to="/faith/irori">Irori</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/improved_grapple">Improved Grapple</Link>, <Link to="/feat/improved_unarmed_strike">Improved Unarmed Strike</Link>, <Link to="/feat/monastic_legacy">Monastic Legacy</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_trip">Improved Trip</Link> and <Link to="/feat/spring_attack">Spring Attack</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/ki_throw">Ki Throw</Link> and <Link to="/feat/stunning_fist">Stunning Fist</Link> to the list.</Pair>
</Ability>
<Ability id="kurgess" extraClasses="subAbility" icon={["info"]}>
<Pair single id="kurgess">Kurgess</Pair>
<Pair title="Deity" hl><Link to="/faith/kurgess">Kurgess</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/charging_hurler">Charging Hurler</Link>, <Link to="/feat/deadly_aim">Deadly Aim</Link>, <Link to="/feat/improved_grapple">Improved Grapple</Link>, and <Link to="/feat/opening_volley">Opening Volley</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_charging_hurler">Improved Charging Hurler</Link> and <Link to="/feat/greater_grapple">Greater Grapple</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/pinning_knockout">Pinning Knockout</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</Pair>
</Ability>
<Ability id="lamashtu" extraClasses="subAbility" icon={["info"]}>
<Pair single id="lamashtu">Lamashtu</Pair>
<Pair title="Deity" hl><Link to="/faith/lamashtu">Lamashtu</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/furious_focus">Furious Focus</Link>, <Link to="/feat/power_attack">Power Attack</Link>, and <Link to="/feat/pushing_assault">Pushing Assault</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/bloody_assault">Bloody Assault</Link> and <Link to="/feat/vital_strike">Vital Strike</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/dreadful_carnage">Dreadful Carnage</Link> and <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link> to the list.</Pair>
</Ability>
<Ability id="norgorber" extraClasses="subAbility" icon={["info"]}>
<Pair single id="norgorber">Norgorber</Pair>
<Pair title="Deity" hl><Link to="/faith/norgorber">Norgorber</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/blind_fight">Blind-Fight</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, <Link to="/feat/wave_strike">Wave Strike</Link>, and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_critical">Improved Critical</Link> (short sword) and <Link to="/feat/improved_feint">Improved Feint</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/deadly_finish">Deadly Finish</Link> and <Link to="/feat/greater_blind_fight">Greater Blind-Fight</Link> to the list.</Pair>
</Ability>
<Ability id="sarenrae" extraClasses="subAbility" icon={["info"]}>
<Pair single id="sarenrae">Sarenrae</Pair>
<Pair title="Deity" hl><Link to="/faith/sarenrae">Sarenrae</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/improved_initiative">Improved Initiative</Link>, <Link to="/feat/mobility">Mobility</Link>, <Link to="/feat/nimble_moves">Nimble Moves</Link>, and <Link to="/feat/sidestep">Sidestep</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/whirlwind_attack">Whirlwind Attack</Link> and <Link to="/feat/wind_stance">Wind Stance</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/lightning_stance">Lightning Stance</Link> and <Link to="/feat/spring_attack">Spring Attack</Link> to the list.</Pair>
</Ability>
<Ability id="torag" extraClasses="subAbility" icon={["info"]}>
<Pair single id="torag">Torag</Pair>
<Pair title="Deity" hl><Link to="/faith/torag">Torag</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/bludgeoner">Bludgeoner</Link>, <Link to="/feat/improved_sunder">Improved Sunder</Link>, <Link to="/feat/power_attack">Power Attack</Link>, and <Link to="/feat/shield_focus">Shield Focus</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/felling_smash">Felling Smash</Link> and <Link to="/feat/greater_sunder">Greater Sunder</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link> and <Link to="/feat/sundering_strike">Sundering Strike</Link> to the list.</Pair>
</Ability>
<Ability id="zon-kuthon" extraClasses="subAbility" icon={["info"]}>
<Pair single id="zon-kuthon">Zon-Kuthon</Pair>
<Pair title="Deity" hl><Link to="/faith/zon_kuthon">Zon-Kuthon</Link></Pair>
<Pair title="At 1st Level">List of combat feats: <Link to="/feat/agile_maneuvers">Agile Maneuvers</Link>, <Link to="/feat/disruptive">Disruptive</Link>, <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (spiked chain), and <Link to="/feat/weapon_finesse">Weapon Finesse</Link>.</Pair>
<Pair title="At 6th Level">Add <Link to="/feat/bloody_assault">Bloody Assault</Link> and <Link to="/feat/improved_trip">Improved Trip</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/bleeding_critical">Bleeding Critical</Link> and <Link to="/feat/pin_down">Pin Down</Link> to the list.</Pair>
</Ability>
<Ability id="menacing" icon={["info"]}>
<Pair single id="menacing">Menacing</Pair>
<Pair title="At 1st Level"><Link to="/feat/dazzling_display">Dazzling Display</Link>, <Link to="/feat/enforcer">Enforcer</Link>, <Link to="/feat/gory_finish">Gory Finish</Link>, and <Link to="/feat/intimidating_prowess">Intimidating Prowess</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-4.2" id="ability-combat_styles-fake-fn-4.2" data-hash-target to="ability-combat_styles-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/martial_dominance">Martial Dominance</Link> and <Link to="/feat/shatter_defenses">Shatter Defenses</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/dreadful_carnage">Dreadful Carnage</Link> and <Link to="/feat/improved_critical">Improved Critical</Link> to the list.</Pair>
</Ability>
<Ability id="mounted-combat" icon={["info"]}>
<Pair single id="mounted-combat">Mounted Combat</Pair>
<Pair title="At 1st Level"><Link to="/feat/mounted_combat">Mounted Combat</Link>, <Link to="/feat/mounted_archery">Mounted Archery</Link>, <Link to="/feat/ride_by_attack">Ride-By Attack</Link>, and <Link to="/feat/trick_riding">Trick Riding</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-3.2" id="ability-combat_styles-fake-fn-3.2" data-hash-target to="ability-combat_styles-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/mounted_shield">Mounted Shield</Link> and <Link to="/feat/spirited_charge">Spirited Charge</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/mounted_skirmisher">Mounted Skirmisher</Link> and <Link to="/feat/unseat">Unseat</Link> to the list.</Pair>
</Ability>
<Ability id="natural-weapon" icon={["info"]}>
<Pair single id="natural-weapon">Natural Weapon</Pair>
<Pair title="At 1st Level"><Link to="/feat/aspect_of_the_beast">Aspect of the Beast</Link>, <Link to="/feat/improved_natural_attack">Improved Natural Attack</Link>, <Link to="/feat/rending_claws">Rending Claws</Link>, and <Link to="/feat/weapon_focus">Weapon Focus</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-3.3" id="ability-combat_styles-fake-fn-3.3" data-hash-target to="ability-combat_styles-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/eldritch_claws">Eldritch Claws</Link> and <Link to="/feat/vital_strike">Vital Strike</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/multiattack">Multiattack</Link> and <Link to="/feat/improved_vital_strike">Improved Vital Strike</Link> to the list.</Pair>
</Ability>
<Ability id="thrown-weapon" icon={["info"]}>
<Pair single id="thrown-weapon">Thrown Weapon</Pair>
<Pair title="At 1st Level"><Link to="/feat/distance_thrower">Distance Thrower</Link>, <Link to="/feat/precise_shot">Precise Shot</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-7" id="ability-combat_styles-fake-fn-7" data-hash-target to="ability-combat_styles-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/close_quarters_thrower">Close-Quarters Thrower</Link> and <Link to="/feat/false_opening">False Opening</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/pinpoint_targeting">Pinpoint Targeting</Link> and <Link to="/feat/shot_on_the_run">Shot on the Run</Link> to the list.</Pair>
</Ability>
<Ability id="two-handed-weapon" icon={["info"]}>
<Pair single id="two-handed-weapon">Two-Handed Weapon</Pair>
<Pair title="At 1st Level"><Link to="/feat/cleave">Cleave</Link>, <Link to="/feat/power_attack">Power Attack</Link>, <Link to="/feat/pushing_assault">Pushing Assault</Link>, and <Link to="/feat/shield_of_swings">Shield of Swings</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-3.4" id="ability-combat_styles-fake-fn-3.4" data-hash-target to="ability-combat_styles-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/furious_focus">Furious Focus</Link> and <Link to="/feat/great_cleave">Great Cleave</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/dreadful_carnage">Dreadful Carnage</Link> and <Link to="/feat/improved_sunder">Improved Sunder</Link> to the list.</Pair>
</Ability>
<Ability id="two-weapon-combat" icon={["info"]}>
<Pair single id="two-weapon-combat">Two-Weapon Combat</Pair>
<Pair title="At 1st Level"><Link to="/feat/double_slice">Double Slice</Link>, <Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/quick_draw">Quick Draw</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-1.2" id="ability-combat_styles-fake-fn-1.2" data-hash-target to="ability-combat_styles-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/improved_two_weapon_fighting">Improved Two-Weapon Fighting</Link> and <Link to="/feat/two_weapon_defense">Two-Weapon Defense</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/greater_two_weapon_fighting">Greater Two-Weapon Fighting</Link> and <Link to="/feat/two_weapon_rend">Two-Weapon Rend</Link> to the list.</Pair>
</Ability>
<Ability id="underhanded" icon={["info"]}>
<Pair single id="underhanded">Underhanded</Pair>
<Pair title="At 1st Level"><Link to="/feat/combat_expertise">Combat Expertise</Link> (see note<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-8" id="ability-combat_styles-fake-fn-8" data-hash-target to="ability-combat_styles-fake-fn-8-target">8</InnerLink></sup>), <Link to="/feat/dodge">Dodge</Link>, <Link to="/feat/improved_dirty_trick">Improved Dirty Trick</Link>, and <Link to="/feat/improved_steal">Improved Steal</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-4.3" id="ability-combat_styles-fake-fn-4.3" data-hash-target to="ability-combat_styles-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/greater_dirty_trick">Greater Dirty Trick</Link> and <Link to="/feat/greater_steal">Greater Steal</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/quick_dirty_trick">Quick Dirty Trick</Link> and <Link to="/feat/quick_steal">Quick Steal</Link> to the list.</Pair>
</Ability>
<Ability id="underwater" icon={["info"]}>
<Pair single id="underwater">Underwater</Pair>
<Pair title="At 1st Level"><Link to="/feat/aquadynamic_focus">Aquadynamic Focus</Link>, <Link to="/feat/aquadynamic_shot">Aquadynamic Shot</Link>, <Link to="/feat/dolphin_style">Dolphin Style</Link>, and <Link to="/feat/shark_style">Shark Style</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-9" id="ability-combat_styles-fake-fn-9" data-hash-target to="ability-combat_styles-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/dolphin_dart">Dolphin Dart</Link> and <Link to="/feat/shark_tear">Shark Tear</Link> to the list.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-10" id="ability-combat_styles-fake-fn-10" data-hash-target to="ability-combat_styles-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="At 10th Level">Add <Link to="/feat/dolphin_circle">Dolphin Circle</Link> and <Link to="/feat/shark_leap">Shark Leap</Link> to the list.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-11" id="ability-combat_styles-fake-fn-11" data-hash-target to="ability-combat_styles-fake-fn-11-target">11</InnerLink></sup></Pair>
</Ability>
<Ability id="weapon-and-shield" icon={["info"]}>
<Pair single id="weapon-and-shield">Weapon and Shield</Pair>
<Pair title="At 1st Level"><Link to="/feat/improved_shield_bash">Improved Shield Bash</Link>, <Link to="/feat/shield_focus">Shield Focus</Link>, <Link to="/feat/shield_slam">Shield Slam</Link>, and <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link>.<sup><InnerLink showBacklink="backlink-ability-combat_styles-fake-fn-3.5" id="ability-combat_styles-fake-fn-3.5" data-hash-target to="ability-combat_styles-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="At 6th Level">Add <Link to="/feat/saving_shield">Saving Shield</Link> and <Link to="/feat/shield_master">Shield Master</Link> to the list.</Pair>
<Pair title="At 10th Level">Add <Link to="/feat/bashing_finish">Bashing Finish</Link> and <Link to="/feat/greater_shield_focus">Greater Shield Focus</Link> to the list.</Pair>
</Ability>
</blockquote>
<section data-footnotes><h3 id="ability-combat_styles-label">Footnotes</h3><ol>
<li id="ability-combat_styles-fake-fn-1-target"><p><Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 65</Link> <InnerLink aria-label="Back to reference 1" id="backlink-ability-combat_styles-fake-fn-1" data-hash-target to="ability-combat_styles-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-combat_styles-fake-fn-1.2" data-hash-target to="ability-combat_styles-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-2-target"><p>You must have <Link to="/feat/weapon_focus">Weapon Focus</Link> (instead of <Link to="/feat/weapon_specialization">Weapon Specialization</Link>) in the selected weapon as a prerequisite in order to select Point-Blank Master. <InnerLink aria-label="Back to reference 2" id="backlink-ability-combat_styles-fake-fn-2" data-hash-target to="ability-combat_styles-fake-fn-2">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-3-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 124</Link> <InnerLink aria-label="Back to reference 3" id="backlink-ability-combat_styles-fake-fn-3" data-hash-target to="ability-combat_styles-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-combat_styles-fake-fn-3.2" data-hash-target to="ability-combat_styles-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-combat_styles-fake-fn-3.3" data-hash-target to="ability-combat_styles-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-combat_styles-fake-fn-3.4" data-hash-target to="ability-combat_styles-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-combat_styles-fake-fn-3.5" data-hash-target to="ability-combat_styles-fake-fn-3.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-4-target"><p><Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 40</Link> <InnerLink aria-label="Back to reference 4" id="backlink-ability-combat_styles-fake-fn-4" data-hash-target to="ability-combat_styles-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-combat_styles-fake-fn-4.2" data-hash-target to="ability-combat_styles-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-combat_styles-fake-fn-4.3" data-hash-target to="ability-combat_styles-fake-fn-4.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-5-target"><p><Link to="/source/disciples_doctrine">Disciple's Doctrine pg. 5</Link> <InnerLink aria-label="Back to reference 5" id="backlink-ability-combat_styles-fake-fn-5" data-hash-target to="ability-combat_styles-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-6-target"><p><Link to="/source/inner_sea_combat">Inner Sea Combat pg. 11</Link> <InnerLink aria-label="Back to reference 6" id="backlink-ability-combat_styles-fake-fn-6" data-hash-target to="ability-combat_styles-fake-fn-6">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-7-target"><p><Link to="/source/advanced_class_guide">Advanced Class Guide pg. 118</Link> <InnerLink aria-label="Back to reference 7" id="backlink-ability-combat_styles-fake-fn-7" data-hash-target to="ability-combat_styles-fake-fn-7">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-8-target"><p>If the ranger chooses Combat Expertise, he counts as having 13 Intelligence for the purpose of selecting that feat and others that have Combat Expertise as a prerequisite. <InnerLink aria-label="Back to reference 8" id="backlink-ability-combat_styles-fake-fn-8" data-hash-target to="ability-combat_styles-fake-fn-8">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-9-target"><p><Link to="/source/aquatic_adventures">Aquatic Adventures pg. 55</Link> <InnerLink aria-label="Back to reference 9" id="backlink-ability-combat_styles-fake-fn-9" data-hash-target to="ability-combat_styles-fake-fn-9">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-10-target"><p>The ranger must have Dolphin Style to select Dolphin Dart, and must have Shark Style to select Shark Tear, but otherwise ignores all other prerequisites. <InnerLink aria-label="Back to reference 10" id="backlink-ability-combat_styles-fake-fn-10" data-hash-target to="ability-combat_styles-fake-fn-10">↩</InnerLink></p></li>
<li id="ability-combat_styles-fake-fn-11-target"><p>The ranger must have Dolphin Style and Dolphin Dart to select Dolphin Circle, and must have Shark Style and Shark Tear to select Shark Leap, but otherwise ignores all other prerequisites. <InnerLink aria-label="Back to reference 11" id="backlink-ability-combat_styles-fake-fn-11" data-hash-target to="ability-combat_styles-fake-fn-11">↩</InnerLink></p></li>
</ol></section></>};
const _composite_kinetic_blasts = {title: "Composite Blasts", topLink: ["Kineticist","class/kineticist"], jsx: <><h2 id="ability-composite_kinetic_blasts-composite-kinetic-blasts">Composite Kinetic Blasts</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 15</Link><br/>Composite blasts combine elements to form a new blast. When a kineticist gains a new element through expanded element, she gains access to all composite blasts for which she qualifies. Most composite blasts are either physical or energy blasts, like simple blasts. Physical composite blasts deal an amount of damage equal to 2d6+2 + the kineticist's Constitution modifier, increasing by 2d6+2 for every 2 kineticist levels beyond 1st; energy composite blasts deal an amount of damage equal to 2d6 + 1/2 the kineticist's Constitution modifier, increasing by 2d6 for every 2 kineticist levels beyond 1st.</p>
<DisplayTable table={{"id":"composite kinetic blasts","columns":[{"header":"Composite Blast","align":"start","link":"kinetic"},{"header":"Prerequisites","align":"start"},{"header":"Elements"},{"header":"Burn","type":"num"},{"header":"Blast Type"},{"header":"Damage","align":"start"}],"data":[[["Aetheric Boost (Sp)","aetheric_boost"],"‹kinetic/telekinetic blast›, expanded element (any)","aether",2,"special","see text"],[["Autumn Blast (Sp)","autumn_blast"],"‹kinetic/earth blast›, ‹kinetic/wood blast›","earth, wood",2,"physical","any two of bludgeoning, piercing, and slashing (half each)"],[["Blizzard Blast (Sp)","blizzard_blast"],"‹kinetic/air blast›, ‹kinetic/cold blast›","air, water",2,"physical","half piercing, half cold"],[["Blue Flame Blast (Sp)","blue_flame_blast"],"primary element (fire), expanded element (fire)","fire",2,"energy","fire"],[["Charged Water Blast (Sp)","charged_water_blast"],"‹kinetic/electric blast›, ‹kinetic/water blast›","air, water",2,"physical","half bludgeoning, half electricity"],[["Force Blast (Sp)","force_blast"],"primary element (aether), expanded element (aether)","aether",2,"energy","force (see text)"],[["Gravitic Boost (Sp)","gravitic_boost"],"‹kinetic/gravity blast›, any other physical simple blast","void",2,"special","see text"],[["Ice Blast (Sp)","ice_blast"],"primary element (water), expanded element (water)","water",2,"physical","half piercing, half cold"],[["Magma Blast (Sp)","magma_blast"],"‹kinetic/earth blast›, ‹kinetic/fire blast›","earth, fire",2,"physical","half bludgeoning, half fire"],[["Metal Blast (Sp)","metal_blast"],"primary element (earth), expanded element (earth)","earth",2,"physical","bludgeoning, piercing, or slashing"],[["Mud Blast (Sp)","mud_blast"],"‹kinetic/earth blast›, ‹kinetic/water blast›","earth, water",2,"physical","bludgeoning"],[["Negative Admixture (Sp)","negative_admixture"],"‹kinetic/negative blast›, any other energy simple blast","void",2,"energy","see text"],[["Plasma Blast (Sp)","plasma_blast"],"‹kinetic/air blast›, ‹kinetic/fire blast›","air, fire",2,"physical","half bludgeoning, half fire"],[["Positive Admixture (Sp)","positive_admixture"],"‹kinetic/positive blast›, any other energy simple blast","wood",2,"energy","see text"],[["Sandstorm Blast (Sp)","sandstorm_blast"],"‹kinetic/air blast›, ‹kinetic/earth blast›","air, earth",2,"physical","piercing and slashing"],[["Spring Blast (Sp)","spring_blast"],"‹kinetic/air blast›, ‹kinetic/wood blast›","air, wood",2,"physical","half bludgeoning and half slashing or piercing"],[["Steam Blast (Sp)","steam_blast"],"‹kinetic/fire blast›, ‹kinetic/water blast›","fire, water",2,"physical","half bludgeoning, half fire"],[["Summer Blast (Sp)","summer_blast"],"‹kinetic/fire blast›, ‹kinetic/wood blast›","fire, wood",2,"physical","half fire and half bludgeoning, piercing, or slashing"],[["Thunderstorm Blast (Sp)","thunderstorm_blast"],"primary element (air), expanded element (air)","air",2,"physical","half bludgeoning, half electricity"],[["Verdant Blast (Sp)","verdant_blast"],"primary element (wood), expanded element (wood)","wood",2,"physical","bludgeoning, piercing, slashing, and optionally positive energy"],[["Void Blast (Sp)","void_blast"],"primary element (void), expanded element (void)","void",2,"physical","half bludgeoning, half negative energy"],[["Winter Blast (Sp)","winter_blast"],"‹kinetic/cold blast›, ‹kinetic/wood blast›","water, wood",2,"physical","half cold and half bludgeoning, piercing, or slashing"]],"initialColumn":0}} />
</>};
const _oracle_curses = {title: "Oracle Curses", topLink: ["Oracle","class/oracle"], jsx: <><h2 id="ability-oracle_curses-oracle-curses">Oracle Curses</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 43</Link><br/>Each oracle is cursed, but this curse comes with a benefit as well as a hindrance. This choice is made at 1st level, and once made, it cannot be changed. The oracle's curse cannot be removed or dispelled without the aid of a deity. An oracle's curse is based on her oracle level plus one for every two levels or Hit Dice other than oracle. Each oracle must choose one of the following curses.</p>
<ScrollContainer id="ability-oracle_curses--table-0"><table>
<thead>
<tr>
<th>Curse</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/oraclecurse/aboleth">Aboleth<IonRippleEffect /></Link></td>
<td>Your mind is marked by aboleth tampering, either as a result of a close encounter with one of these creatures while you were a child, or even through an ancestor, close family member, or one of your sisters or brothers in faith - this associate's interaction with the aboleths may be all that it takes to infect you.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/acursed">Acursed<IonRippleEffect /></Link></td>
<td>You are cursed with misfortune and sorrow, and you cannot gain benefit from morale bonuses.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/blackened">Blackened<IonRippleEffect /></Link></td>
<td>Your hands and forearms are shriveled and blackened, as if you had plunged your arms into a blazing fire, and your thin, papery skin is sensitive to the touch.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/clouded_vision">Clouded Vision<IonRippleEffect /></Link></td>
<td>Your eyes are obscured, making it difficult for you to see.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/cold_blooded">Cold-Blooded<IonRippleEffect /></Link></td>
<td>Your blood turns sluggish without sufficient heat, and you must seek warmth and shelter earlier than most.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/consumed">Consumed<IonRippleEffect /></Link></td>
<td>Your connection to Abaddon and the daemons that call it home has left you diminished but still able to scorn many mortal frailties.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/covetous">Covetous<IonRippleEffect /></Link></td>
<td>You find yourself drawn to the luster of wealthy living.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/deaf">Deaf<IonRippleEffect /></Link></td>
<td>You cannot hear and suffer all of the usual penalties for being deafened.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/deep_one">Deep One<IonRippleEffect /></Link></td>
<td>The lure of the ocean tugs at your soul.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/demonic">Demonic<IonRippleEffect /></Link></td>
<td>Your heart is cursed with the pull of the Abyss.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/elemental_imbalance">Elemental Imbalance<IonRippleEffect /></Link></td>
<td>You wield an element's might, but you are vulnerable to its opposite.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/ghoul">Ghoul<IonRippleEffect /></Link></td>
<td>While your actual dietary needs don't change, you crave the flesh of sentient creatures.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/god_meddled">God-Meddled<IonRippleEffect /></Link></td>
<td>Iblydos's hero-gods' interference in your life has left you with strange, unpredictable powers dependent on divine whim.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/haunted">Haunted<IonRippleEffect /></Link></td>
<td>Malevolent spirits follow you wherever you go, causing minor mishaps and strange occurrences (such as unexpected breezes, small objects moving on their own, and faint noises).</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/hellbound">Hellbound<IonRippleEffect /></Link></td>
<td>Infernal influence grants you profane insight and weighs on your soul.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/hive">Hive<IonRippleEffect /></Link></td>
<td>You were exposed at a young age (perhaps even before you were born) to the alien species known as the hive, but this exposure did not result in a full-blown infestation by these otherworldly monsters.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/hunger">Hunger<IonRippleEffect /></Link></td>
<td>Ravenous hunger wracks your body in stressful situations.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/infested">Infested<IonRippleEffect /></Link></td>
<td>Insects, spiders, grubs, and other vermin plague you constantly.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/lame">Lame<IonRippleEffect /></Link></td>
<td>One of your legs is permanently wounded.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/legalistic">Legalistic<IonRippleEffect /></Link></td>
<td>The shackles of Hell impose savage consequences should you violate a covenant, but also imbue you with remarkable guile.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/lich">Lich<IonRippleEffect /></Link></td>
<td>You have (unknowingly) fulfilled most (but not all) of the ritualistic components to achieve lichdom.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/lycanthropy">Lycanthropy<IonRippleEffect /></Link></td>
<td>You suffer from a minor form of lycanthropy.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/plagued">Plagued<IonRippleEffect /></Link></td>
<td>You suffer from minor ailments and sicknesses.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/possessed">Possessed<IonRippleEffect /></Link></td>
<td>Another mind shares your body, interfering with your control, and it's more difficult for you to concentrate as a result.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/powerless_prophecy">Powerless Prophecy<IonRippleEffect /></Link></td>
<td>You are forewarned of danger but can't act to prevent it.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/pranked">Pranked<IonRippleEffect /></Link></td>
<td>Capricious fey constantly bedevil you.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/promethean">Promethean<IonRippleEffect /></Link></td>
<td>Your body is falling apart, forcing you to rely on mechanical augmentations or replacements to keep yourself alive.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/putrid">Putrid<IonRippleEffect /></Link></td>
<td>Your presence stagnates water and befouls all liquids carried on your person, including magical items such as potions, and unattended sources of still water within 10 feet.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/reclusive">Reclusive<IonRippleEffect /></Link></td>
<td>You are reclusive and paranoid to the point that your allies cannot easily help you in times of stress or unease.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/scourge">Scourge<IonRippleEffect /></Link></td>
<td>You are a blight on the natural world.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/shadowbound">Shadowbound<IonRippleEffect /></Link></td>
<td>Your pigmentation is oddly colorless, and your eyes are highly sensitive to light.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/shattered_psyche">Shattered Psyche<IonRippleEffect /></Link></td>
<td>Your mind is crowded with dozens of voices, fragmented snippets of your past lives.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/site_bound">Site-Bound<IonRippleEffect /></Link></td>
<td>You bond with a particular 10-foot square, and must remain within 1,500 feet of that site or immediately become sickened.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/song_bound">Song-Bound<IonRippleEffect /></Link></td>
<td>(Merfolk only) Whenever you speak, you are compelled to sing loudly, and you draw out even short utterances with vocal scales or simple melodies.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/tongues">Tongues<IonRippleEffect /></Link></td>
<td>In times of stress or unease, you speak in tongues.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/toxic_blood">Toxic Blood<IonRippleEffect /></Link></td>
<td>Your body is ravaged by a potent, slow-acting poison that resists all treatment.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/vampirism">Vampirism<IonRippleEffect /></Link></td>
<td>You crave the taste of fresh, warm blood.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/wasting">Wasting<IonRippleEffect /></Link></td>
<td>Your body is slowly rotting away.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/wolfscarred_face">Wolfscarred Face<IonRippleEffect /></Link></td>
<td>Your face is deformed, as though you were born with a wolf's muzzle instead of an ordinary nose and jaw.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/wrecker">Wrecker<IonRippleEffect /></Link></td>
<td>The destructive power of the Abyss and its teeming hordes of demons seeps from your very pores and into your belongings and surroundings.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/oraclecurse/wrecking_mysticism">Wrecking Mysticism<IonRippleEffect /></Link></td>
<td>(Kitsune only) A divine entity has blessed you with a source of eldritch power that erodes your fortitude.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _dares = {title: "Dares", topLink: ["Gunslinger","class/gunslinger"], jsx: <><h2 id="ability-dares-dares">Dares</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<p>Dares are similar to deeds in that they grant a gunslinger or a swashbuckler extra abilities based on either grit or panache, but unlike deeds, dares become active when a member of these classes runs out of her respective pool, and become inactive when the character regains points of their respective pool. They grant the character a benefit and a new ability to regain or increase the ability to regain either grit or panache.</p>
<p>A dare can be taken in place of one of the bonus feats one of those classes gains at 4th level and every 4 levels thereafter. A member of those classes can choose to have multiple dares, but can only pick one to be active each time she reaches 0 grit or panache points. Once chosen, the active dare cannot be changed until the gunslinger or swashbuckler reaches 0 grit or panache points again.</p>
<Ability id="desperate-evasion-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="desperate-evasion-ex">Desperate Evasion (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, you gain the <Link to="/ability/evasion">evasion</Link> class feature. If you already have this class feature, while this dare is active you roll twice when making a Reflex saving throw and take the higher result. You regain 1 grit point when you succeed at two Reflex saving throws while using this dare.</Pair>
</Ability>
<Ability id="frantically-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="frantically-nimble-ex">Frantically Nimble (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, you gain a +2 dodge bonus to AC. You regain 1 grit point when any enemy making a ranged or melee attack against you misses you three consecutive times. The attacks need not come from the same enemy.</Pair>
</Ability>
<Ability id="out-for-blood-ex" icon={["upgrade"]}>
<Pair single id="out-for-blood-ex">Out for Blood (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, your critical threat range with firearms increases by 1 (20/&times;4 becomes 19-20/&times;4, 19-20/&times;2 becomes 18-20/&times;2, and so on). This effect does not stack with similar effects that modify a weapon's critical threat range.</Pair>
</Ability>
<Ability id="run-like-hell-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="run-like-hell-ex">Run Like Hell (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, your speed increases by 10 feet, and you retain your Dexterity bonus to your AC while running. You regain 1 grit point the first time you are more than 100 feet away from your closest enemy.</Pair>
</Ability>
</>};
const _swashbuckler_dares = {title: "Dares", topLink: ["Swashbuckler","class/swashbuckler"], jsx: <><h2 id="ability-swashbuckler_dares-dares">Dares</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<p>Dares are similar to deeds in that they grant a gunslinger or a swashbuckler extra abilities based on either grit or panache, but unlike deeds, dares become active when a member of these classes runs out of her respective pool, and become inactive when the character regains points of their respective pool. They grant the character a benefit and a new ability to regain or increase the ability to regain either grit or panache.</p>
<p>A dare can be taken in place of one of the bonus feats one of those classes gains at 4th level and every 4 levels thereafter. A member of those classes can choose to have multiple dares, but can only pick one to be active each time she reaches 0 grit or panache points. Once chosen, the active dare cannot be changed until the gunslinger or swashbuckler reaches 0 grit or panache points again.</p>
<Ability id="desperate-evasion-ex" icon={["armor-upgrade","rolling-dices"]}>
<Pair single id="desperate-evasion-ex">Desperate Evasion (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, you gain the <Link to="/ability/evasion">evasion</Link> class feature. If you already have this class feature, while this dare is active you roll twice when making a Reflex saving throw and take the higher result. You regain 1 panache point when you succeed at two Reflex saving throws while using this dare.</Pair>
</Ability>
<Ability id="frantically-nimble-ex" icon={["armor-upgrade"]}>
<Pair single id="frantically-nimble-ex">Frantically Nimble (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, you gain a +2 dodge bonus to AC. You regain 1 panache point when any enemy making a ranged or melee attack against you misses you three consecutive times. The attacks need not come from the same enemy.</Pair>
</Ability>
<Ability id="out-for-blood-ex" icon={["upgrade"]}>
<Pair single id="out-for-blood-ex">Out for Blood (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, your critical threat range with light or one-handed piercing melee weapons increases by 1 (20/&times;4 becomes 19-20/&times;4, 19-20/&times;2 becomes 18-20/&times;2, and so on). This effect does not stack with similar effects that modify a weapon's critical threat range.</Pair>
</Ability>
<Ability id="run-like-hell-ex" icon={["upgrade","armor-upgrade"]}>
<Pair single id="run-like-hell-ex">Run Like Hell (Ex)</Pair>
<Pair title="Passive Ability">While this dare is active, your speed increases by 10 feet, and you retain your Dexterity bonus to your AC while running. You regain 1 panache point the first time you are more than 100 feet away from your closest enemy.</Pair>
</Ability>
</>};
const _defense_wild_talents = {title: "Defense Wild Talents", topLink: ["Kineticist","class/kineticist"], jsx: <><h2 id="ability-defense_wild_talents-defense-wild-talents">Defense Wild Talents</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 16</Link><br/>A kineticist gains the defense wild talent from her primary element at 2nd level.</p>
<ScrollContainer id="ability-defense_wild_talents--table-0"><table>
<thead>
<tr>
<th>Defense</th>
<th>Element</th>
<th>Burn</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/kinetic/emptiness">Emptiness (Su)<IonRippleEffect /></Link></td>
<td>void</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/enveloping_winds">Enveloping Winds (Su)<IonRippleEffect /></Link></td>
<td>air</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/flesh_of_stone">Flesh of Stone (Su)<IonRippleEffect /></Link></td>
<td>earth</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/flesh_of_wood">Flesh of Wood (Su)<IonRippleEffect /></Link></td>
<td>wood</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/force_ward">Force Ward (Su)<IonRippleEffect /></Link></td>
<td>aether</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/searing_flesh">Searing Flesh (Su)<IonRippleEffect /></Link></td>
<td>fire</td>
<td>0</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/kinetic/shroud_of_water">Shroud of Water (Su)<IonRippleEffect /></Link></td>
<td>water</td>
<td>0</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _disciplines = {title: "Psychic Disciplines", topLink: ["Psychic","class/psychic"], jsx: <><p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 64</Link><br/>The following disciplines represent those most commonly chosen by psychics. Followers of a discipline might come to it in a variety of different ways, and though some might join together in orders, others follow personal, singular interpretations of the discipline.</p>
<DisplayTable table={{"id":"psychic disciplines","columns":[{"header":"Discipline","align":"start","link":"discipline"},{"header":"Pool Stat"},{"header":"Description","align":"start"}],"data":[[["Abomination","abomination"],"Charisma","Your mind is impure, tainted by outside forces."],[["Bleaching","bleaching"],"Wisdom","You draw power from a void in your emotions, a yawning and empty chasm where your hopes and dreams and fears should be."],[["Dream","dream"],"Charisma","You discover deeper and more powerful corners of your mind through journeys you make in your dreams."],[["Enlightenment","enlightenment"],"Wisdom","Your quest for enlightenment has opened your eyes to new concepts and heights of spiritual awareness."],[["Faith","faith"],"Wisdom","Your belief in a higher power fuels your psychic abilities."],[["Ferocity","ferocity"],"Wisdom","You are in touch with the most primal part of your subconscious."],[["Hag-Called","hag_called"],"Charisma","A hag's call echoes through your mind like a siren's song, enticing you to surrender and become something horrible."],[["Haunted","haunted"],"Charisma","You attract the attention of spirits as naturally as a lodestone attracts iron filings."],[["Lore","lore"],"Wisdom","By collecting expert information and reading all sorts of treatises and chapbooks on occult subjects, you learn proper techniques and rituals to empower your mental abilities."],[["Mindtech","mindtech"],"Wisdom","You are innately tied to and can communicate with electronic machinery and similar technological objects, through which you can funnel your psychic power like flowing water."],[["Pageantry","pageantry"],"Charisma","The act of ritual, no matter how ostentatious, can be a route to mental strength."],[["Pain","pain"],"Charisma","Mental blocks prevent your immense inborn psychic energies from flowing freely."],[["Psychedelia","psychedelia"],"Wisdom","You ingest hallucinogens to expand your mind."],[["Rapport","rapport"],"Charisma","Forging a close bond with other people brings out the best in you, making it easier for you to link your mind with theirs."],[["Rebirth","rebirth"],"Charisma","Your mind is forged from the most powerful memories of a multitude of lifetimes."],[["Rivethun","rivethun"],"Charisma","You have embraced those aspects of your body that cause you agony, respecting the perspective they grant you if not necessarily the roles they've condemned you to in life."],[["Self-Perfection","self_perfection"],"Wisdom","You take a holistic view of psychic power, believing that you must hone both your mental and physical attributes to remain in balance."],[["Shadow","shadow"],"Wisdom","You perceive the space between light and darkness, and draw power from it."],[["Sorrow","sorrow"],"Charisma","You draw strength from deep feelings of abandonment, loneliness, and sadness, turning these emotions into a powerful weapon or a barrier that protects you."],[["Superiority","superiority"],"Charisma","You know that you are far better than average creatures of your kind."],[["Symbiosis","symbiosis"],"Charisma","Like pollen on the wind or the roots of plants in the ground, your thoughts permeate your surroundings, allowing you to study and manipulate the world around you."],[["Tranquility","tranquility"],"Wisdom","Psychic magic flows through you when you attain a peaceful mental state."],[["Warp","warp"],"Charisma","Ratfolk mythology claims they were appointed by the gods to sniff out the ragged edges of creation."]],"initialColumn":1}} />
</>};
export default {not_found:_not_found,advanced_armor_training:_advanced_armor_training,advanced_rogue_talents:_advanced_rogue_talents,advanced_slayer_talents:_advanced_slayer_talents,advanced_versatile_performances:_advanced_versatile_performances,advanced_weapon_training:_advanced_weapon_training,animal_foci:_animal_foci,annointings:_annointings,arcane_discoveries:_arcane_discoveries,arcane_schools:_arcane_schools,aspects:_aspects,banners:_banners,bardic_masterpieces:_bardic_masterpieces,blessings:_blessings,bloodline_mutations:_bloodline_mutations,bloodrager_bloodlines:_bloodrager_bloodlines,combat_styles:_combat_styles,composite_kinetic_blasts:_composite_kinetic_blasts,oracle_curses:_oracle_curses,dares:_dares,swashbuckler_dares:_swashbuckler_dares,defense_wild_talents:_defense_wild_talents,disciplines:_disciplines}