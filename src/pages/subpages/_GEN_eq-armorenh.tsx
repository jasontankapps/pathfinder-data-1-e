import Link from '../../components/Link';
import InnerLink from '../../components/InnerLink';
import Tabular from '../../components/Tabular';
import Icons from '../../components/Icons';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-armorenh-not_found-error">Error</h2>
<p>Unable to find the requested armor enhancement.</p>
</>};
const _sanctified_shield = {title: "Sanctified shield", jsx: <><h2 id="eq-armorenh-sanctified_shield-sanctified-shield">Sanctified shield</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 25</Link>  </p>
<Tabular format="armor" c="x" a="+100 gp" b="&mdash;" />
<p>A sanctified shield may be any type of shield (including bucklers, tower shields, and even magical shields).</p>
<p><Icons id="eq-armorenh-sanctified_shield-def-icons" wrapper="prefixIcon" list={["def"]} /> When activated as a <Link to="/rule/channel_focus">channel focus</Link>, a sacred shield adds a +1 sacred (if positive energy) or profane (if negative energy) bonus to the wearer's Armor Class. This bonus lasts for 24 hours or until the wearer is struck in combat, whichever comes first. Creatures other than the cleric are able to use the charged shield and this ability.</p>
</>};
const _shield_boss_breakaway = {hasJL:true,title: "Shield boss (breakaway)", jsx: <><div className="jumpList" id="eq-armorenh-shield_boss_breakaway-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-armorenh-shield_boss_breakaway-breakaway-boss">Breakaway Boss</InnerLink></li><li><InnerLink toTop to="eq-armorenh-shield_boss_breakaway-hooked-boss">Hooked Boss</InnerLink></li><li><InnerLink toTop to="eq-armorenh-shield_boss_breakaway-illuminating-boss">Illuminating Boss</InnerLink></li><li><InnerLink toTop to="eq-armorenh-shield_boss_breakaway-masterwork-boss">Masterwork Boss</InnerLink></li></ul></div><h2 id="eq-armorenh-shield_boss_breakaway-shield-boss">Shield boss</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 21</Link>  </p>
<Tabular format="armor" a="30" b="10" />
<p>A shield boss is a sturdy steel device that fastens to the front of a shield, providing metal support struts that radiate outward from the center of the shield, reinforcing its structure. A shield boss can be added to a <Link to="/eq-armor/buckler">buckler</Link>, <Link to="/eq-armor/light_steel_shield">light steel</Link> or <Link to="/eq-armor/light_wooden_shield">wooden shield</Link>, or <Link to="/eq-armor/heavy_steel_shield">heavy steel</Link> or <Link to="/eq-armor/heavy_wooden_shield">wooden shield</Link>. <Link to="/eq-armor/tower_shield">Tower shields</Link> are too large for a typical shield boss, though one can be crafted to fit a tower shield for an additional 300 gp. Attaching or removing a shield boss requires 10 minutes of work and a successful DC 15 <Link to="/skill/craft">Craft</Link> (armor) check; on a failure, the shield boss is not successfully attached or removed and the shield takes 1d6 points of damage that bypasses any hardness.</p>
<p><Icons id="eq-armorenh-shield_boss_breakaway-def-down-icons" wrapper="prefixIcon" list={["def","down"]} /> A <strong className="hl">reinforcing boss</strong> provides extra protection to a shield, increasing the shield's current and maximum hit points by 10. The boss makes the shield 10 pounds heavier and more unwieldy - if the shield imposes a penalty on attack rolls, as do bucklers and tower shields, the penalty increases by 1.</p>
<p>Common improvements to the basic reinforcing boss include the following.</p>
<h3 id="eq-armorenh-shield_boss_breakaway-breakaway-boss" data-hash-target>Breakaway Boss</h3>
<Tabular format="armor" a="120" b="10" />
<p>The metal stud at the center of the reinforcing boss holds a compartment large enough to insert a single splash weapon, such as a vial of <Link to="/eq-weapon/acid">acid</Link> or <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>, as a <strong className="hl">full-round action</strong>.</p>
<p><Icons id="eq-armorenh-shield_boss_breakaway-melee-icons" wrapper="prefixIcon" list={["melee"]} /> On a successful <Link to="/misc/shield_bash">shield bash</Link> attack, the weapon vial breaks and deals damage to the target as though it were directly hit by the splash weapon. The shield takes the normal amount of splash damage for being adjacent to the target, but no other creatures adjacent to the target take splash damage from this effect.</p>
<p>A new splash weapon must be inserted into the breakaway boss for it to be used again.</p>
<h3 id="eq-armorenh-shield_boss_breakaway-hooked-boss" data-hash-target>Hooked Boss</h3>
<Tabular format="armor" a="80" b="10" />
<p>The struts on this reinforcing boss bear large, sturdy hooks, which can be used to snag an opponent's clothing or armor, causing it to stumble.</p>
<p><Icons id="eq-armorenh-shield_boss_breakaway-melee-lower-icons" wrapper="prefixIcon" list={["melee","lower"]} /> You can attempt <Link to="/rule/trip">trip</Link> combat maneuver checks with this shield. If the combat maneuver check is successful, the opponent does not fall <Link to="/rule/prone">prone</Link>, but is considered <Link to="/rule/flat_footed">flat-footed</Link> until the beginning of its next turn.</p>
<h3 id="eq-armorenh-shield_boss_breakaway-illuminating-boss" data-hash-target>Illuminating Boss</h3>
<Tabular format="armor" a="35" b="10" />
<p>The stud at the center of this reinforcing boss contains a covered slot large enough to insert a <Link to="/eq-misc/sunrod">sunrod</Link>. Installing a lit sunrod into an illuminating boss is a <strong className="hl">full-round action</strong>.</p>
<p><Icons id="eq-armorenh-shield_boss_breakaway-power-icons" wrapper="prefixIcon" list={["power"]} /> If you shake the shield firmly as a <strong className="hl">move action</strong>, you can flip a metal flap fitted over the slot to conceal or reveal the sunrod's glow.</p>
<h3 id="eq-armorenh-shield_boss_breakaway-masterwork-boss" data-hash-target>Masterwork Boss</h3>
<Tabular format="armor" a="50" b="x" c="M" />
<p>Any of the bosses listed above, including the basic reinforcing boss, can be masterwork. A masterwork reinforcing boss increases the shield's current and maximum hit points by 15 instead of 10 and doesn't increase the attack roll penalty.</p>
</>};
const _armor_vents = {title: "Armor vents", jsx: <><h2 id="eq-armorenh-armor_vents-armor-vents">Armor vents</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_sands">People of the Sands pg. 28</Link>  </p>
<Tabular format="armor" a="100" b="-5" c="M" />
<p>Armor vents can be built into a suit of medium or heavy armor to allow for better ventilation and reduce the wearer's fatigue in hot environs. The vents can be slid open at the discretion of the user to ensure proper air flow during the day and then closed up at night to better preserve heat.</p>
<p><Icons id="eq-armorenh-armor_vents-def-down-icons" wrapper="prefixIcon" list={["def","down"]} /> A suit of armor with armor vents imposes only a -2 penalty (instead of -4) on Fortitude saves to avoid taking nonlethal damage from <Link to="/rule/heat">heat exposure</Link>, but also has 10 fewer hit points than normal because of its more intricate construction.</p>
</>};
const _armor_spikes = {title: "Armor spikes", jsx: <><h2 id="eq-armorenh-armor_spikes-armor-spikes">Armor spikes</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 9</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 151</Link>  </p>
<Tabular format="armor" a="50" b="10" c="M" />
<p><Icons id="eq-armorenh-armor_spikes-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You can have spikes added to your armor, which allow you to deal extra piercing damage on a successful <Link to="/misc/grapple">grapple</Link> attack.</p>
<Tabular format="weap2" d="s1d4m1d6" e="&times;2" f="x" g="P" i="light" j="M" k="Close" />
<p><Icons id="eq-armorenh-armor_spikes-warning-icons" wrapper="prefixIcon" list={["warning"]} /> The spikes count as a martial weapon. If you are not proficient with them, you take a -4 penalty on grapple checks when you try to use them.</p>
<p><Icons id="eq-armorenh-armor_spikes-melee-icons" wrapper="prefixIcon" list={["melee"]} /> You can also make a regular melee attack (or off-hand attack) with the spikes, and they count as a light weapon in this case. (You can't also make an attack with armor spikes if you have already made an attack with another off-hand weapon, and vice versa.)</p>
<p><Icons id="eq-armorenh-armor_spikes-info-icons" wrapper="prefixIcon" list={["info"]} /> An enhancement bonus to a suit of armor does not improve the spikes' effectiveness, but the spikes can be made into magic weapons in their own right.</p>
<p><Icons id="eq-armorenh-armor_spikes-def-icons" wrapper="prefixIcon" list={["def"]} /> Armor spikes can't be disarmed.</p>
</>};
const _locked_gauntlet = {title: "Locked gauntlet", jsx: <><h2 id="eq-armorenh-locked_gauntlet-locked-gauntlet">Locked gauntlet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 9</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 151</Link>  </p>
<Tabular format="armor" a="8" b="5" c="M" />
<p>This armored gauntlet has small chains and braces that allow the wearer to attach a weapon to the gauntlet so that it cannot be dropped easily.</p>
<p><Icons id="eq-armorenh-locked_gauntlet-def-icons" wrapper="prefixIcon" list={["def"]} /> It provides a +10 bonus to your CMD to keep from being disarmed in combat.</p>
<p><Icons id="eq-armorenh-locked_gauntlet-info-icons" wrapper="prefixIcon" list={["info"]} /> Removing a weapon from a locked gauntlet or attaching a weapon to a locked gauntlet is a <strong className="hl">full-round action</strong> that provokes attacks of opportunity.</p>
<p>The price given is for a single locked gauntlet. The weight given applies only if you're wearing a <Link to="/eq-armor/breastplate">breastplate</Link>, light armor, or no armor. Otherwise, the locked gauntlet replaces a gauntlet you already have as part of the armor.</p>
<p>While the gauntlet is locked, you can't use the hand wearing it for casting spells or employing skills. (You can still cast spells with somatic components, provided that your other hand is free.)</p>
<p><Icons id="eq-armorenh-locked_gauntlet-melee-icons" wrapper="prefixIcon" list={["melee"]} /> Like a normal gauntlet, a locked gauntlet lets you deal lethal damage rather than nonlethal damage with an unarmed strike.</p>
</>};
const _shield_spikes = {title: "Shield spikes", jsx: <><h2 id="eq-armorenh-shield_spikes-shield-spikes">Shield spikes</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 9</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 151</Link>  </p>
<Tabular format="armor" a="10" b="5" c="M" />
<p>Deadly spikes and bladed projections extend from some shields, transforming such pieces of armor into weapon in their own right. Shield spikes turn a shield into a martial piercing weapon and increase the damage dealt by a <Link to="/misc/shield_bash">shield bash</Link> as if the shield were designed for a creature <Link to="/misc/one_size_category_larger">one size category larger</Link>. You can't put spikes on a buckler or a tower shield. Otherwise, attacking with a spiked shield is like making a shield bash attack.</p>
<p>An enhancement bonus on a spiked shield does not improve the effectiveness of a shield bash made with it, but a spiked shield can be made into a magic weapon in its own right.</p>
<p><Icons id="eq-armorenh-shield_spikes-def-icons" wrapper="prefixIcon" list={["def"]} /> Shield spikes cannot be disarmed.</p>
<p><strong className="hl">Light shield</strong>  </p>
<Tabular format="weap2" d="s1d3m1d4" e="&times;2" f="x" g="P" i="Close" j="M" />
<p><strong className="hl">Heavy shield</strong>  </p>
<Tabular format="weap2" d="s1d4m1d6" e="&times;2" f="x" g="P" i="Close" j="M" />
</>};
const _burnished = {title: "Burnished", jsx: <><h2 id="eq-armorenh-burnished-burnished">Burnished</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>  </p>
<Tabular format="armor" a="500" b="5" c="M" />
<p>Metal armor can be polished to reflect light in your enemies' eyes.</p>
<p><Icons id="eq-armorenh-burnished-aura-lower-icons" wrapper="prefixIcon" list={["aura","lower"]} /> In areas of bright light, all enemies within 30 feet that can see you must succeed at a Will saving throw (DC = 10 + your base attack bonus) or be <Link to="/misc/dazzled">dazzled</Link> for 1 round. Regardless of the result of its saving throw, a target may only be affected by this armor modification once per day.</p>
<p><Icons id="eq-armorenh-burnished-down-icons" wrapper="prefixIcon" list={["down"]} /> Polished armor imparts a -10 penalty to <Link to="/skill/stealth">Stealth</Link> checks made in areas of bright or normal light.</p>
</>};
const _deflecting = {title: "Deflecting", jsx: <><h2 id="eq-armorenh-deflecting-deflecting">Deflecting</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>, <Link to="/source/faction_guide">Faction Guide pg. 55</Link>  </p>
<Tabular format="armor" a="1000" b="10" c="M" />
<p>The artistry of a piece of armor's design lies not just in the protection it provides but also in its ability to deflect blows, creating momentary windows of opportunity when an opponent's attack is rebuffed.</p>
<p><Icons id="eq-armorenh-deflecting-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When an opponent attacks you with a bludgeoning or slashing melee weapon and misses by 5 or fewer, you gain a +1 circumstance bonus on your first melee attack roll against that opponent during your next turn.</p>
<p><Icons id="eq-armorenh-deflecting-down-icons" wrapper="prefixIcon" list={["down"]} /> Deflecting armor reduces your speed by 5 feet.</p>
</>};
const _double_plated = {title: "Double-plated", jsx: <><h2 id="eq-armorenh-double_plated-double-plated">Double-plated</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>  </p>
<Tabular format="armor" a="1000" b="20" c="M" />
<p>Plating adds protection to a suit of armor's wearer at the cost of mobility.</p>
<p><Icons id="eq-armorenh-double_plated-def-icons" wrapper="prefixIcon" list={["def"]} /> Double-plated armor's armor bonus is increased by 1, and its maximum Dexterity bonus is reduced by 2.</p>
<p><Icons id="eq-armorenh-double_plated-down-icons" wrapper="prefixIcon" list={["down"]} /> Double-plated armor's armor category (light, medium, or heavy) is considered to be one heavier. Heavy armor that has the modification added to it is too restrictive to use without the <Link to="/feat/armor_adept">Armor Adept</Link> (double-plated) feat.</p>
</>};
const _jarring = {title: "Jarring", jsx: <><h2 id="eq-armorenh-jarring-jarring">Jarring</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>, <Link to="/source/faction_guide">Faction Guide pg. 55</Link>  </p>
<Tabular format="armor" a="1000" b="20" c="M" />
<p>Opponents who swing too hard at targets wearing this armor often regret it - striking jarring armor sends a shock up the arm.</p>
<p><Icons id="eq-armorenh-jarring-lower-icons" wrapper="prefixIcon" list={["lower"]} /> Whenever an opponent makes a melee attack against you using the <Link to="/feat/power_attack">Power Attack</Link> feat and misses by 5 or fewer, he must succeed at a Fortitude saving throw (DC = 10 + the bonus that Power Attack would have applied to the attacker's weapon damage roll) or be <Link to="/misc/sickened">sickened</Link> for 1 round.</p>
<p><Icons id="eq-armorenh-jarring-down-icons" wrapper="prefixIcon" list={["down"]} /> Jarring armor reduces your speed by 5 feet.</p>
</>};
const _nimble = {title: "Nimble", jsx: <><h2 id="eq-armorenh-nimble-nimble">Nimble</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>  </p>
<Tabular format="armor" a="1000" b="5" c="M" />
<p>Nimble armor is designed for flexibility and ease of use, although this compromises its protective qualities.</p>
<p><Icons id="eq-armorenh-nimble-def-boost-icons" wrapper="prefixIcon" list={["def","boost"]} /> Nimble armor's maximum Dexterity bonus is increased by 2, and its armor check penalty is reduced by 1 (minimum 0).</p>
<p><Icons id="eq-armorenh-nimble-down-icons" wrapper="prefixIcon" list={["down"]} /> Nimble armor's armor bonus is reduced by 1.</p>
</>};
const _razored = {title: "Razored", jsx: <><h2 id="eq-armorenh-razored-razored">Razored</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>  </p>
<Tabular format="armor" a="1350" b="10" c="M" />
<p>With every plate sharpened to a cutting edge, razored armor punishes those who get too close.</p>
<p><Icons id="eq-armorenh-razored-melee-icons" wrapper="prefixIcon" list={["melee"]} /> Armor with the razored modification counts as having masterwork <Link to="/eq-armorenh/armor_spikes">armor spikes</Link>; if the armor already had armor spikes or masterwork armor spikes, decrease the cost of the razored modification by the cost of the existing armor spikes.</p>
<p><Icons id="eq-armorenh-razored-def-icons" wrapper="prefixIcon" list={["def"]} /> Whenever an opponent hits you with a melee touch attack or succeeds at a combat maneuver check to <Link to="/rule/grapple">grapple</Link>, she must succeed at a Reflex saving throw (DC = 10 + your base attack bonus) or take an amount of piercing damage equal to 1d6 plus the armor's enhancement bonus.</p>
<p><Icons id="eq-armorenh-razored-down-icons" wrapper="prefixIcon" list={["down"]} /> Razored armor reduces your speed by 5 feet. In addition, razored armor takes twice as long to don or remove.</p>
</>};
const _slumbering = {title: "Slumbering", jsx: <><h2 id="eq-armorenh-slumbering-slumbering">Slumbering</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>  </p>
<Tabular format="armor" a="500" b="5" c="M" />
<p>Soldiers in the field and adventurers in the dungeon both find slumbering armor to be a boon, as its layers of downy internal padding allow the wearer to rest comfortably while armored.</p>
<p><Icons id="eq-armorenh-slumbering-def-icons" wrapper="prefixIcon" list={["def"]} /> Slumbering armor is considered to be one category lighter for the purpose of sleeping in the armor. This allows you to sleep in medium armor without penalty, and if you have the <Link to="/feat/endurance">Endurance</Link> feat (or another method of sleeping in medium armor) you can sleep in heavy slumbering armor without penalty.</p>
<p><Icons id="eq-armorenh-slumbering-down-icons" wrapper="prefixIcon" list={["down"]} /> Slumbering armor's armor check penalty is increased by 1. This increase is applied after reductions for armor material and masterwork armor.</p>
</>};
const _throwing_shield = {title: "Throwing shield", jsx: <><h2 id="eq-armorenh-throwing_shield-throwing-shield">Throwing shield</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 19</Link>  </p>
<Tabular format="armor" a="50" b="&mdash;" c="M" />
<p><Icons id="eq-armorenh-throwing_shield-ranged-icons" wrapper="prefixIcon" list={["ranged"]} /> This shield is designed for throwing and comes with specially designed straps allowing you to unclasp and throw it as a <strong className="hl">free action</strong>. Tower shields cannot be throwing shields. Neither a shield's enhancement bonus to AC nor its <Link to="/eq-armorenh/shield_spikes">shield spikes</Link> apply to your attack or damage rolls.</p>
<Tabular format="weap2" d="s1d4m1d6" e="&times;2" f="30" g="B" h={<><Link to="/misc/performance">performance</Link>, <Link to="/misc/trip">trip</Link></>} i="Thrown" j="E" />
</>};
const _vitalguard = {title: "Vitalguard", jsx: <><h2 id="eq-armorenh-vitalguard-vitalguard">Vitalguard</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 7</Link>, <Link to="/source/faction_guide">Faction Guide pg. 55</Link>  </p>
<Tabular format="armor" a="500" b="15" c="M" />
<p>This well-designed armor reinforces your defenses, adding layers of padding or mail to your most vulnerable locations.</p>
<p><Icons id="eq-armorenh-vitalguard-def-icons" wrapper="prefixIcon" list={["def"]} /> Vitalguard armor's bonus to AC is increased by 2 for the purpose of confirming critical hits against you.</p>
<p><Icons id="eq-armorenh-vitalguard-down-icons" wrapper="prefixIcon" list={["down"]} /> Vitalguard armor reduces your speed by 5 feet.</p>
</>};
const _shield_boss_hooked = {..._shield_boss_breakaway, title: "Shield boss (hooked)"};
const _shield_boss_illuminating = {..._shield_boss_breakaway, title: "Shield boss (illuminating)"};
const _shield_boss_reinforcing_boss = {..._shield_boss_breakaway, title: "Shield boss (reinforcing boss)"};
const _shield_boss_breakaway_masterwork = {..._shield_boss_breakaway, title: "Shield boss (breakaway, masterwork)"};
const _shield_boss_hooked_masterwork = {..._shield_boss_breakaway, title: "Shield boss (hooked, masterwork)"};
const _shield_boss_illuminating_masterwork = {..._shield_boss_breakaway, title: "Shield boss (illuminating, masterwork)"};
const _shield_boss_reinforcing_boss_masterwork = {..._shield_boss_breakaway, title: "Shield boss (reinforcing boss, masterwork)"};
export default {not_found:_not_found,sanctified_shield:_sanctified_shield,shield_boss_breakaway:_shield_boss_breakaway,armor_vents:_armor_vents,armor_spikes:_armor_spikes,locked_gauntlet:_locked_gauntlet,shield_spikes:_shield_spikes,burnished:_burnished,deflecting:_deflecting,double_plated:_double_plated,jarring:_jarring,nimble:_nimble,razored:_razored,slumbering:_slumbering,throwing_shield:_throwing_shield,vitalguard:_vitalguard,shield_boss_hooked:_shield_boss_hooked,shield_boss_illuminating:_shield_boss_illuminating,shield_boss_reinforcing_boss:_shield_boss_reinforcing_boss,shield_boss_breakaway_masterwork:_shield_boss_breakaway_masterwork,shield_boss_hooked_masterwork:_shield_boss_hooked_masterwork,shield_boss_illuminating_masterwork:_shield_boss_illuminating_masterwork,shield_boss_reinforcing_boss_masterwork:_shield_boss_reinforcing_boss_masterwork}