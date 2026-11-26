import {IonIcon} from '@ionic/react';
import Link, {ThLink} from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import Tabular from '../../components/Tabular';
import Message from '../../components/Message';
import Icons from '../../components/Icons';
const _guisarme = {title: "Guisarme", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-guisarme-guisarme">Guisarme</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A guisarme is an 8-foot-long shaft with a blade and a hook mounted at the tip.</p>
<Tabular format="weap1" a="9" b="12" d="s1d6~m2d4" e="x3" f="x" g="S" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Polearms" />
</>};
const _halberd = {title: "Halberd", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-halberd-halberd">Halberd</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A halberd is similar to a 5-foot-long <Link to="/eq-weapon/spear">spear</Link>, but it also has a small, axe-like head mounted near the tip.</p>
<Tabular format="weap1" a="10" b="12" d="s1d8~m1d10" e="x3" f="x" g="P or S" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Polearms" />
</>};
const _heavy_flail = {title: "Heavy flail", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-heavy_flail-heavy-flail">Heavy flail</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>Similar to a <Link to="/eq-weapon/light_flail">light flail</Link>, a heavy flail has a larger metal ball and a longer handle.</p>
<Tabular format="weap1" a="15" b="10" d="s1d8~m1d10" e="r19x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Flails" />
</>};
const _hooked_lance = {title: "Hooked lance", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-hooked_lance-hooked-lance">Hooked lance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 131</Link></p>
<p>This slender, 10-foot-long polearm has an added hook protruding from the head that is used to snag the clothing and armor of opponents. A hooked lance, unlike a <Link to="/eq-weapon/lance">lance</Link>, can't be wielded in one hand while mounted and doesn't deal extra damage if used while mounted.</p>
<Tabular format="weap1" a="3" b="10" d="s1d6~m1d8" e="x4" f="x" g="P" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Polearms" />
</>};
const _horsechopper = {title: "Horsechopper", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-horsechopper-horsechopper">Horsechopper</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 18</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 118</Link></p>
<p>Crafted by goblins for battling horses, this weapon is essentially a long-handled <Link to="/eq-weapon/halberd">halberd</Link> with an enlarged hook on the blade. Most horsechoppers are sized for Small creatures.</p>
<Tabular format="weap1" a="10" b="12" d="s1d8~m1d10" e="x3" f="x" g="P or S" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Polearms" />
</>};
const _lance = {title: "Lance", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-lance-lance">Lance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p><Icons id="eq-weapon-lance-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A lance deals double damage when used from the back of a charging mount. While mounted, you can wield a lance with one hand.</p>
<Tabular format="weap1" a="10" b="10" d="s1d6~m1d8" e="x3" f="x" g="P" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="M" k="Spears" />
</>};
const _lucerne_hammer = {title: "Lucerne hammer", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-lucerne_hammer-lucerne-hammer">Lucerne hammer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 179</Link></p>
<p>This polearm has both a pronged hammer head for crushing blows and a spiked head for piercing and peeling armor. The long haft allows the wielder to put amazing force behind the head of this weapon.</p>
<p><Icons id="eq-weapon-lucerne_hammer-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You gain a +2 bonus on combat maneuver checks to <Link to="/rule/sunder">sunder</Link> medium or heavy armor with a lucerne hammer.</p>
<Tabular format="weap1" a="15" b="12" d="s1d10~m1d12" e="x2" f="x" g="B or P" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/reach">reach</Link>, see text</>} i="two" j="M" k="Polearms" />
</>};
const _mattock = {title: "Mattock", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-mattock-mattock">Mattock</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>A mattock resembles a two-handed pick, but with a chisel-like blade instead of a point.</p>
<Tabular format="weap1" a="12" b="12" d="s1d6~m2d4" e="x4" f="x" g="P" h={<><Link to="/misc/fragile">fragile</Link></>} i="two" j="M" k="Axes" />
</>};
const _monks_spade = {title: "Monk's spade", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-monks_spade-monks-spade">Monk's spade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link></p>
<p>This polearm is a double weapon. One side is fitted with a broad, shovel-like sharpened blade, while the opposite side is fitted with a crescent blade that juts out like a pair of bull's horns. The monk's spade does many types of damage. The type of damage it deals depends on how it is wielded, with the spade side able to bludgeon and slash and the crescent side able to slash and pierce.</p>
<Tabular format="weap1" a="20" b="12" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="B or P or S" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/monk">monk</Link></>} i="two" j="M" k="Double; Monk; Polearms" />
</>};
const _naginata = {title: "Naginata", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-naginata-naginata">Naginata</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link></p>
<p>The naginata consists of a 6-foot staff affixed to a 2-foot-long, slightly curved, sword-like blade. The shaft is designed to keep the wielder out of reach from swords and shorter weapons.</p>
<Tabular format="weap1" a="35" b="9" d="s1d6~m1d8" e="x4" f="x" g="S" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="M" k="Polearms" />
</>};
const _nodachi = {title: "Nodachi", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-nodachi-nodachi">Nodachi</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link></p>
<p>This very long, two-handed weapon has a slender but wickedly sharp 4-foot-long blade at one end. It is predominantly used by ground troops to attack mounted warriors, and can be used to hack riders from their mounts or set to receive a <Link to="/rule/charge">charge</Link>.</p>
<Tabular format="weap1" a="60" b="8" d="s1d8~m1d10" e="r18x2" f="x" g="S or P" h={<><Link to="/misc/brace">brace</Link></>} i="two" j="M" k="Blades, Heavy; Polearms" />
</>};
const _ogre_hook = {title: "Ogre hook", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-ogre_hook-ogre-hook">Ogre hook</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/rise_of_the_runelords_players_guide">Rise of the Runelords Player's Guide pg. 11</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 0</Link></p>
<p>This large crook of sharpened metal makes it easy to trip and catch fleeing opponents. Invented by <Link to="/monster/ogre">ogres</Link>, most ogre hooks are Large-sized and crudely fashioned - often from metal torn from previous victims' weapons and armor. Despite their poor workmanship, the rarity and peril involved in getting ogre hooks make such items quite valuable.</p>
<Tabular format="weap1" a="24" b="10" d="s1d8~m1d10" e="x3" f="x" g="P" h={<><Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Polearms" />
</>};
const _planson = {title: "Planson", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-planson-planson">Planson</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This 5-foot tapered pole is bound in metal with a narrow metal spike projecting from the top. The planson can be used as a <Link to="/eq-weapon/club">club</Link> or as a sturdy, if top-heavy, <Link to="/eq-weapon/spear">spear</Link> to stop a <Link to="/rule/charge">charge</Link>.</p>
<Tabular format="weap1" a="10" b="10" d="s1d8~m1d10" e="x2" f="x" g="B or P" h={<><Link to="/misc/brace">brace</Link></>} i="two" j="M" k="Hammers; Spears" />
</>};
const _ranseur = {title: "Ranseur", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-ranseur-ranseur">Ranseur</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>Similar in appearance to a <Link to="/eq-weapon/trident">trident</Link>, a ranseur has a single spear at its tip, flanked by a pair of short, curving blades.</p>
<Tabular format="weap1" a="10" b="12" d="s1d6~m2d4" e="x3" f="x" g="P" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="M" k="Polearms" />
</>};
const _rhomphaia = {title: "Rhomphaia", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-rhomphaia-rhomphaia">Rhomphaia</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>This <Link to="/eq-material/bronze">Bronze</Link> Age weapon is an early polearm consisting of a long, single-edged blade attached to a sturdy staff, sometimes slightly curved. It serves as both a cutting and a thrusting weapon.</p>
<Tabular format="weap1" a="15" b="10" d="s1d6~m2d4" e="x3" f="x" g="P or S" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/fragile">fragile</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="M" />
</>};
const _sansetsukon = {title: "Sansetsukon", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-sansetsukon-sansetsukon">Sansetsukon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>Also called a three-section staff, this weapon is divided into three 2-foot-long segments chained together, allowing the wielder greater flexibility than a normal staff and allowing the weapon to be swung rapidly to create a defensive block, wrap and catch weapons, or harness momentum via a whipping motion for powerful strikes.</p>
<Tabular format="weap1" a="8" b="3" d="s1d8~m1d10" e="r19x2" f="x" g="B" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/disarm">disarm</Link>, <Link to="/misc/monk">monk</Link></>} i="two" j="M" k="Flails; Monk" />
</>};
const _sarissa = {title: "Sarissa", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-sarissa-sarissa">Sarissa</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 24</Link></p>
<p>This spear-like weapon is about 15 feet long. Its unwieldy length is counterbalanced by a heavy brass base.</p>
<p><Icons id="eq-weapon-sarissa-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A sarissa provides extended reach - tripling your reach rather than doubling it. A Medium wielder would threaten spaces 10 to 15 feet away, but not adjacent squares or squares 5 to 10 feet away (as with a typical reach weapon).</p>
<p><Icons id="eq-weapon-sarissa-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Because of its great length and weight, a sarissa can be used to attack foes in only one direction each round. You must select a cone each round before you make any attacks with the sarissa. The weapon threatens only foes within this cone and within its extended reach. You can't change the area you threaten with the sarissa until your next turn. While you carry the sarissa pointed upward (typical for overland movement), you threaten only squares in the sarissa's reach in a cone pointed upward.</p>
<Tabular format="weap1" a="12" b="12" d="s1d6~m1d8" e="x3" f="x" g="P" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/reach">reach</Link>, see text</>} i="two" j="M" />
</>};
const _scythe = {title: "Scythe", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-scythe-scythe">Scythe</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>This weapon consists of a long wooden shaft with protruding handles and a sharp curved blade set at a right angle. Derived from a farm tool used to mow down crops, a scythe requires two hands to use, and is unwieldy but capable of inflicting grievous wounds. Its connotations as a symbol of death due to its association with reaping also make the scythe a particularly intimidating weapon.</p>
<Tabular format="weap1" a="18" b="10" d="s1d6~m2d4" e="x4" f="x" g="P or S" h={<><Link to="/misc/trip">trip</Link></>} i="two" j="M" k="Blades, Heavy" />
</>};
const _syringe_spear = {title: "Syringe spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-syringe_spear-syringe-spear">Syringe spear</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 5</Link></p>
<p>The blade of this weapon, which is also called an injection spear, contains a thin tube or bore that connects to a hollow container just beneath the crosspiece. A successful hit with the spear injects the liquid contents of the container (typically poison or a potion) into the target. Refilling a syringe spear takes 1 minute.</p>
<Tabular format="weap1" a="100" b="6" d="s1d6~m1d8" e="x3" f="20" g="P" h={<><Link to="/misc/brace">brace</Link>, see text</>} i="two" j="M" />
</>};
const _tepoztopilli = {title: "Tepoztopilli", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-tepoztopilli-tepoztopilli">Tepoztopilli</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>The head of this wooden Stone Age polearm is edged with jagged bits of obsidian, glass, teeth, or similar materials. The wide head serves well for both piercing and slashing attacks.</p>
<Tabular format="weap1" a="8" b="8" d="s1d8~m1d10" e="r19x2" f="x" g="P or S" h={<><Link to="/misc/fragile">fragile</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="M" />
</>};
const _tiger_fork = {title: "Tiger fork", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-tiger_fork-tiger-fork">Tiger fork</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>This long, <Link to="/eq-weapon/trident">trident</Link>-like weapon consists of a three-pronged metal fork set upon an 8-foot-long shaft. It is wielded much like a staff, with the wielder grasping the shaft from the center and jabbing with its forked end. A tiger fork can be set to receive a <Link to="/rule/charge">charge</Link>.</p>
<Tabular format="weap1" a="5" b="8" d="s1d6~m1d8" e="x2" f="x" g="P" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/monk">monk</Link></>} i="two" j="M" k="Monk; Polearms; Spears" />
</>};
const _tri_point_double_edged_sword = {title: "Tri-point double-edged sword", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-tri_point_double_edged_sword-tri-point-double-edged-sword">Tri-point double-edged sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>Topping the head of this 5-foot-long shaft are three long, backward-curved blades fashioned in the appearance of a blossoming lotus. The unusually large head is designed to land heavy blows and cause multiple wounds that open away from each other.</p>
<Tabular format="weap1" a="12" b="14" d="s1d8~m1d10" e="x3" f="x" g="P" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="M" k="Monk" />
</>};
const _amentum = {title: "Amentum", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-amentum-amentum">Amentum</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p><Icons id="eq-weapon-amentum-boost-icons" wrapper="prefixIcon" list={["boost"]} /> An amentum is a long leather thong that attaches to a standard <Link to="/eq-weapon/javelin">javelin</Link>. Before throwing, the amentum is wound about the javelin's shaft. You then throw the javelin while gripping the amentum, imparting spin on the weapon and greatly improving its range.</p>
<p>Attaching an amentum to a javelin is a <strong className="hl">move action</strong>, and winding it is a <strong className="hl">full-round action</strong>. Javelins can be stored with amenta already wound about them.</p>
<p><Icons id="eq-weapon-amentum-info-icons" wrapper="prefixIcon" list={["info"]} /> A javelin wound with an amentum is considered a martial weapon.</p>
<Tabular format="weap1" a="0" b="1" d="s1d4~m1d6" e="x2" f="50" g="P" h={<><Link to="/misc/performance">performance</Link></>} i="ranged" j="M" k="Spears; Thrown" />
</>};
const _atlatl = {title: "Atlatl", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-atlatl-atlatl">Atlatl</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>This Stone Age weapon is a thin piece of wood or antler used as a lever to hurl a specially fitted dart. An atlatl gives much greater range to a dart, but must be loaded like a projectile weapon. Your Strength modifier applies to damage rolls when you use an atlatl, just as it does for thrown weapons.</p>
<p>You can fire - but not load - an atlatl with one hand. Loading an atlatl is a <strong className="hl">move action</strong> that requires two hands and provokes attacks of opportunity. The <Link to="/feat/rapid_reload">Rapid Reload</Link> feat can be taken for atlatls, allowing you to load a dart as a <strong className="hl">free action</strong>.</p>
<Tabular format="weap1" a="2" b="2" d="s1d4~m1d6" e="x2" f="50" g="P" i="ranged" j="M" k="Thrown" />
</>};
const _chakram = {title: "Chakram", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-chakram-chakram">Chakram</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>The chakram is a simple, elegant, and highly portable thrown weapon. It is a flat, open-centered metal discus with a sharpened edge.</p>
<p><Icons id="eq-weapon-chakram-warning-icons" wrapper="prefixIcon" list={["warning"]} /> You can wield the chakram as a melee weapon, but it is not designed for such use; you take a -1 penalty on your attack roll with the weapon and must succeed at a DC 15 Reflex save or cut yourself on the blade (half damage, no Strength modifier). You do not need to make this save if wearing heavy armor.</p>
<Tabular format="weap1" a="1" b="1" d="s1d6~m1d8" e="x2" f="30" g="S" i="ranged" j="M" k="Blades, Heavy; Blades, Light; Thrown" />
</>};
const _composite_bow = {title: "Composite Bow", notBookmarkable: true, jsx: <><h2 id="eq-weapon-composite_bow-composite-bow">Composite bow</h2>
<p>This can refer to either the <Link to="/eq-weapon/composite_longbow">composite longbow</Link> or the <Link to="/eq-weapon/composite_shortbow">composite shortbow</Link>.</p>
</>};
const _composite_longbow = {title: "Composite longbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-composite_longbow-composite-longbow">Composite longbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>You need at least two hands to use a bow, regardless of its size.</p>
<p>You can use a composite longbow while mounted.</p>
<p><Icons id="eq-weapon-composite_longbow-warning-icons" wrapper="prefixIcon" list={["warning"]} /> All composite bows are made with a particular strength rating (that is, each requires a minimum Strength modifier to use it with proficiency). If your Strength modifier is less than the strength rating of the composite bow, you can't effectively use it, so you take a -2 penalty on attacks with it. The default composite longbow requires a Strength modifier of +0 or higher to use with proficiency.</p>
<p><Icons id="eq-weapon-composite_longbow-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A composite longbow can be made with a high strength rating to take advantage of an above-average Strength score; this feature allows you to add your Strength modifier on damage rolls, up to the maximum bonus indicated for the bow. Each point of Strength bonus granted by the bow adds 100 gp to its cost.</p>
<p><Icons id="eq-weapon-composite_longbow-down-icons" wrapper="prefixIcon" list={["down"]} /> If you have a negative modifier due to low Strength, apply it to damage rolls when you use a composite longbow.</p>
<p>A composite longbow fires <Link to="/eq-weapon/arrows">arrows</Link>. For the purposes of Weapon Proficiency and similar feats, a composite longbow is treated as if it were a <Link to="/eq-weapon/longbow">longbow</Link>.</p>
<Tabular format="weap1" a="100 gp (+0), 200 gp (+1), 300 gp (+2), and so on" b="3 lbs." c="x" d="s1d6~m1d8" e="x3" f="110" g="P" i="ranged" j="M" k="Bows" />
</>};
const _composite_shortbow = {title: "Composite shortbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-composite_shortbow-composite-shortbow">Composite shortbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>You need at least two hands to use a bow, regardless of its size.</p>
<p>You can use a composite shortbow while mounted.</p>
<p><Icons id="eq-weapon-composite_shortbow-warning-icons" wrapper="prefixIcon" list={["warning"]} /> All composite bows are made with a particular strength rating (that is, each requires a minimum Strength modifier to use with proficiency). If your Strength modifier is lower than the strength rating of the composite bow, you can't effectively use it, so you take a -2 penalty on attacks with it. The default composite shortbow requires a Strength modifier of +0 or higher to use with proficiency.</p>
<p><Icons id="eq-weapon-composite_shortbow-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A composite shortbow can be made with a high strength rating to take advantage of an above-average Strength score; this feature allows you to add your Strength modifier on damage rolls, up to the maximum bonus indicated for the bow. Each point of Strength bonus granted by the bow adds 75 gp to its cost.</p>
<p><Icons id="eq-weapon-composite_shortbow-down-icons" wrapper="prefixIcon" list={["down"]} /> If you have a negative modifier due to low Strength, apply it to damage rolls when you use a composite shortbow.</p>
<p>A composite shortbow fires <Link to="/eq-weapon/arrows">arrows</Link>. For the purposes of Weapon Proficiency, <Link to="/feat/weapon_focus">Weapon Focus</Link>, and similar feats, a composite shortbow is treated as if it were a <Link to="/eq-weapon/shortbow">shortbow</Link>.</p>
<Tabular format="weap1" a="75 gp (+0), 150 gp (+1), 225 gp (+2), 300 gp (+3) and so on" b="2 lbs." c="x" d="s1d4~m1d6" e="x3" f="70" g="P" i="ranged" j="M" k="Bows" />
</>};
const _gastraphetes = {title: "Gastraphetes", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-gastraphetes-gastraphetes">Gastraphetes</h2>
<p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores pg. 12</Link></p>
<p>The gastraphetes, sometimes called a "belly bow," is an oversized <Link to="/eq-weapon/crossbow">crossbow</Link> reloaded by pressing one end against the ground, the other against one's abdomen, and locking the string in place through ratchet action. Reloading takes a <strong className="hl">full-round action</strong>, uses two hands, and requires that the wielder be standing.</p>
<p><Icons id="eq-weapon-gastraphetes-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Wielding a gastraphetes requires two hands, and due to the weapon's bulk, firing it while standing without support (such as a wall, a window, or a stand) imposes a -4 penalty on attack rolls; you take no penalty for firing a gastraphetes while <Link to="/rule/prone">prone</Link>.</p>
<p>A Large or larger creature can use a gastraphetes one size smaller than itself without any support, but takes the normal penalty for firing an <Link to="/misc/inappropriately_sized_weapon">inappropriately sized weapon</Link>.</p>
<Tabular format="weap1" a="65" b="12" d="s1d10~m1d12" e="r19x2" f="120" g="P" i="ranged" j="M" />
</>};
const _hunga_munga = {title: "Hunga munga", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-hunga_munga-hunga-munga">Hunga munga</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>Also called a mambele, danisco, goleyo, njiga, or any of many lesser-known names, this three-bladed <Link to="/eq-weapon/dagger">dagger</Link> is intended for throwing but can be used as a melee weapon. Though the basic three-blade design is most common, hunga mungas can take a wide variety of forms.</p>
<Tabular format="weap1" a="4" b="3" d="s1d4~m1d6" e="x2" f="15" g="P" i="ranged" j="M" k="Blades, Light; Thrown" />
</>};
const _hurlbat = {title: "Hurlbat", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-hurlbat-hurlbat">Hurlbat</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 18</Link></p>
<p>A hurlbat is a <Link to="/eq-weapon/throwing_axe">throwing axe</Link> made from a single piece of flat metal. Every extremity of the hurlbat is sharpened, including the point of the handle.</p>
<p><Icons id="eq-weapon-hurlbat-warning-icons" wrapper="prefixIcon" list={["warning"]} /> You can wield the hurlbat as a melee weapon, but it's not designed for such use; you take a -1 penalty on melee attack rolls with the weapon, and you must succeed at a DC 15 Reflex save when making melee attacks to avoid cutting yourself on an edge and taking 1 point of slashing damage. You don't need to attempt this save while wearing heavy armor.</p>
<Tabular format="weap1" a="8" b="2" d="s1d4~m1d6" e="x3" f="10" g="P and S" i="ranged" j="M" />
</>};
const _jolting_dart = {title: "Jolting dart", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-jolting_dart-jolting-dart">Jolting dart</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 205</Link></p>
<p><Icons id="eq-weapon-jolting_dart-boost-icons" wrapper="prefixIcon" list={["boost"]} /> This alchemically grown crystal dart builds up an electrical charge when thrown. A creature struck by the dart takes normal piercing damage and 1d6 points of electricity damage.</p>
<p>Anyone proficient in <Link to="/eq-weapon/dart">darts</Link> can use a jolting dart. Once thrown, the dart is destroyed.</p>
<Tabular format="weap1" a="100" b="0.5" d="s1d3~m1d4" e="x2" f="20" g="P" h="see text" i="ranged" j="M" />
</>};
const _longbow = {title: "Longbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-longbow-longbow">Longbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>At almost 5 feet in height, a longbow is made up of one solid piece of carefully curved wood. You need two hands to use a bow, regardless of its size. A longbow can't be used while mounted.</p>
<p><Icons id="eq-weapon-longbow-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If you have a penalty for low Strength, apply it to damage rolls when you use a longbow. You can apply your Strength modifier to damage rolls when you use a <Link to="/eq-weapon/composite_longbow">composite longbow</Link>, but not a regular longbow.</p>
<p>A longbow fires <Link to="/eq-weapon/arrows">arrows</Link>.</p>
<Tabular format="weap1" a="75" b="3" d="s1d6~m1d8" e="x3" f="100" g="P" i="ranged" j="M" k="Bows" />
</>};
const _phaleros = {title: "Phaleros", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-phaleros-phaleros">Phaleros</h2>
<p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores pg. 12</Link></p>
<p>A phaleros is a type of metal <Link to="/eq-weapon/javelin">javelin</Link> that stores a <Link to="/rule/splash_weapon">splash weapon</Link> in a small cage between the haft and the spearhead.</p>
<p><Icons id="eq-weapon-phaleros-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When a phaleros strikes its target, the spearhead compresses toward the haft and breaks the payload, showering the target with its contents as though you had struck the target's square with the splash weapon. On a critical hit, you instead treat the target as though it had suffered a direct hit from the splash weapon.</p>
<p>A phaleros is reusable, and reloading one with a splash weapon is a process that takes two rounds and provokes attacks of opportunity.</p>
<Tabular format="weap1" a="5" b="3" d="s1d4~m1d6" e="x2" f="20" g="P" i="ranged" j="M" />
</>};
const _pilum = {title: "Pilum", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-pilum-pilum">Pilum</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 179</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>The tip of this heavy <Link to="/eq-weapon/javelin">javelin</Link> is designed to break off and embed itself into a shield once it hits. Like ammunition, a thrown pilum that hits its target is destroyed.</p>
<p><Icons id="eq-weapon-pilum-lower-icons" wrapper="prefixIcon" list={["lower"]} /> If you hit a shield-bearing opponent with a pilum, he loses the AC bonuses from that shield until he takes a <strong className="hl">standard action</strong> to pry the remnants of the pilum from his shield.</p>
<Tabular format="weap1" a="5" b="4" d="s1d6~m1d8" e="x2" f="20" g="P" h="see text" i="ranged" j="M" k="Spears; Thrown" />
</>};
const _poisoned_sand_tube = {title: "Poisoned sand tube", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-poisoned_sand_tube-poisoned-sand-tube">Poisoned sand tube</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>Resembling a slim scroll case made of bamboo or metal, this tube is filled with fine sand that is soaked or coated with inhaled or contact poison.</p>
<p><Icons id="eq-weapon-poisoned_sand_tube-cone-icons" wrapper="prefixIcon" list={["cone"]} /> When loaded with 3 doses of these types of poison, you can blow into the tube to disperse the poisoned sand into your enemies' faces in a 15-foot cone. Each creature in the cone is affected as if afflicted with 1 dose of the poison.</p>
<p><Icons id="eq-weapon-poisoned_sand_tube-lower-icons" wrapper="prefixIcon" list={["lower"]} /> Even when loaded with unpoisoned sand, the tube lets loose a powerful irritant, and an opponent struck must succeed at a DC 12 Fortitude saving throw or be <Link to="/misc/dazzled">dazzled</Link> for 1 round.</p>
<p>Once expended, the tube must be repacked before it can be used again. Repacking a tube requires a <strong className="hl">full-round action</strong>, or a <strong className="hl">standard action</strong> if you have the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat.</p>
<Tabular format="weap1" a="1" b="1" d="sspecial~mspecial" e="&mdash;" f="x" g="&mdash;" h="see text" i="ranged" j="M" k="Thrown" />
</>};
const _reflex_bow = {title: "Reflex bow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-reflex_bow-reflex-bow">Reflex bow</h2>
<p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest pg. 11</Link></p>
<p>These C-shaped bows are most often used in the Hongal tundra by the outriders of Tianjing, and in rare cases by the nobility of Xa Hoi. The unique shape and craft of these bows allows them to shoot with the same velocity and power as a <Link to="/eq-weapon/longbow">longbow</Link>. The shorter size also allows them to be wielded easily while mounted on horseback (or atop any other steed).</p>
<p><Icons id="eq-weapon-reflex_bow-boost-icons" wrapper="prefixIcon" list={["boost"]} /> While mounted, you gain a +1 circumstance bonus on attack rolls with a reflex bow. All reflex bows are <Link to="/eq-weapon/composite_longbow">composite bows</Link> and can be modified to benefit from high Strength scores in the same way as composite bows.</p>
<p>Effects that apply to both longbows and shortbows also apply to reflex bows.</p>
<Tabular format="weap1" a="125 gp (+0), 250 gp (+1), 375 gp (+2), 500 gp (+3), and so on" b="2 lbs." c="x" d="s1d4~m1d6" e="x3" f="100" g="P" h="see text" i="ranged" j="M" />
<blockquote>
<p><strong className="hl">Note:</strong> The cost for a +0 reflex bow was given as 125 gp, but the cost for upgraded reflex bows was not given in the original source. A composite longbow +0 costs 100 gp and gains +1 for every additional 100 gp. A composite shortbow costs 75 gp and gains +1 for every additional 75 gp. The similar <Link to="/eq-weapon/spear_sling">spear-sling</Link> and <Link to="/eq-weapon/horse_bow">horse bow</Link> follow this same formula. Therefore, the reflex bow was given a +1 modifier of +125 gp. As always, consult your GM for a final ruling.</p>
</blockquote>
</>};
const _shortbow = {title: "Shortbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-shortbow-shortbow">Shortbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>A shortbow is made up of one piece of wood about 3 feet in length. You need two hands to use a bow, regardless of its size. You can use a shortbow while mounted.</p>
<p><Icons id="eq-weapon-shortbow-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If you have a penalty for low Strength, apply it to damage rolls when you use a shortbow. If you have a bonus for high Strength, you can apply it to damage rolls when you use a <Link to="/eq-weapon/composite_shortbow">composite shortbow</Link>, but not a regular shortbow.</p>
<p>A shortbow fires <Link to="/eq-weapon/arrows">arrows</Link>.</p>
<Tabular format="weap1" a="30" b="2" d="s1d4~m1d6" e="x3" f="60" g="P" i="ranged" j="M" k="Bows" />
</>};
const _spear_sling = {title: "Spear-sling", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-spear_sling-spear-sling">Spear-sling</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 18</Link></p>
<p>A spear-sling consists of a hollow tube with a loop of elastic material, such as rubber or sinew, attached to one end. The wielder draws a <Link to="/eq-weapon/harpoon">harpoon</Link>, <Link to="/eq-weapon/javelin">javelin</Link>, <Link to="/eq-weapon/shortspear">shortspear</Link>, or <Link to="/eq-weapon/spear">spear</Link> through the tube, pulling the loop taut. Releasing the loop propels the shaft forward like a bow does an arrow.</p>
<p><Icons id="eq-weapon-spear_sling-info-icons" wrapper="prefixIcon" list={["info"]} /> A harpoon, javelin, shortspear, spear, or other weapon shot from a spear-sling is treated as a projectile weapon instead of a thrown weapon, increasing its maximum range and allowing it to be used underwater.</p>
<p>Using a spear-sling requires two hands. Loading a spear-sling is a <strong className="hl">standard action</strong> (a <strong className="hl">move action</strong> if the wielder has the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat) that provokes attacks of opportunity.</p>
<p>A spear-sling is made with a particular strength rating, like a <Link to="/eq-weapon/composite_longbow">composite longbow</Link>. Each point of Strength bonus granted by the sling's strength rating adds 50 gp to its cost.</p>
<p><Icons id="eq-weapon-spear_sling-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If you have a negative Strength modifier, apply it to damage rolls when you use a spear-sling.</p>
<Tabular format="weap1" a="50 gp (+0), 100 gp (+1), 150 gp (+2), and so on" b="2 lbs." c="x" d="s1d6~m1d8" e="x3" f="see text" g="P" h="see text" i="ranged" j="M" />
</>};
const _throwing_arrow_cord = {title: "Throwing arrow cord", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-throwing_arrow_cord-throwing-arrow-cord">Throwing arrow cord</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 19</Link></p>
<p>This simple fiber or leather cord has a knot at either end. One end is wound once around the notch of a <Link to="/eq-weapon/throwing_arrow">throwing arrow</Link>. The cord runs taut along the shaft to the front of the arrow, where you hold the arrow to throw. The remainder of the cord wraps around your hand.</p>
<p>The cord dramatically increases the throwing arrow's range. Attaching the cord to a throwing arrow is a <strong className="hl">move action</strong> that requires two hands and provokes attacks of opportunity. The <Link to="/feat/rapid_reload">Rapid Reload</Link> feat can be taken for throwing arrow cords, allowing you to load a throwing arrow as a <strong className="hl">free action</strong>.</p>
<Tabular format="weap1" a="0" b="x" d="s1d3~m1d4" e="x2" f="60" g="P" i="ranged" j="M" />
</>};
const _tube_arrow_shooter = {title: "Tube arrow shooter", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-tube_arrow_shooter-tube-arrow-shooter">Tube arrow shooter</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 0</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 19</Link></p>
<p>This weapon consists of a small metal tube hidden within a sleeve; the tube holds a short, spring-loaded <Link to="/eq-weapon/bamboo_shaft_arrows">bamboo shaft arrow</Link>.</p>
<p><Icons id="eq-weapon-tube_arrow_shooter-def-icons" wrapper="prefixIcon" list={["def"]} /> You gain a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal a tube arrow shooter on your body.</p>
<p>Releasing the fastener allows the spring to force the arrow out. Once a shaft is fired, the tube must be reloaded before it can be used again. Reloading a tube is a <strong className="hl">full-round action</strong>, or a <strong className="hl">standard action</strong> if the wielder has the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat.</p>
<Tabular format="weap1" a="3" b="0.5" d="s1d3~m1d4" e="x2" f="40" g="P" i="ranged" j="M" k="Crossbows" />
</>};
const _aklys = {title: "Aklys", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-aklys-aklys">Aklys</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 8</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 2</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>The aklys is a hooked throwing club with a 20-foot-long cord, usually of woven leather; you can retrieve the aklys after throwing it as a <strong className="hl">move action</strong>.</p>
<p><Icons id="eq-weapon-aklys-power-icons" wrapper="prefixIcon" list={["power"]} /> The hook allows you to make <Link to="/rule/trip">trip</Link> attacks at range. Some aklyses have holes drilled through them and whistle when flung.</p>
<Tabular format="weap1" a="5" b="2" d="s1d4~m1d6" e="x2" f="20" g="B" h={<><Link to="/misc/performance">performance</Link>, <Link to="/misc/trip">trip</Link></>} i="light" j="E" k="Hammers; Thrown" />
</>};
const _axe_gauntlet_dwarven_light = {title: "Axe-gauntlet, dwarven light", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-axe_gauntlet_dwarven_light-axe-gauntlet-dwarven-light">Axe-gauntlet, dwarven light</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>An axe-gauntlet is a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> covering the hand and forearm up to and over the elbow, with an axe blade built around the gauntlet's permanently closed fist. Axe-gauntlets were developed during the long Quest for Sky, when dwarven warriors often had to engage in running fights against larger, stronger opponents in areas the dwarves did not intend to ever return to. Losing a weapon in such circumstances often made it irretrievable, and the axe-gauntlet became popular with rear-guard warriors.</p>
<p><Icons id="eq-weapon-axe_gauntlet_dwarven_light-def-info-icons" wrapper="prefixIcon" list={["def","info"]} /> Though these weapons have seen significantly less use since the dwarves reached the surface, some dwarven warriors still appreciate the reliability of such designs. An axe-gauntlet takes a <strong className="hl">full-round action</strong> to don, and it gives you a +10 bonus to your CMD against <Link to="/rule/disarm">disarm</Link> attempts. You can't use the hand on which an axe-gauntlet is worn for anything else.</p>
<Tabular format="weap1" a="16" b="5" d="s1d4~m1d6" e="x3" f="x" g="S" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/disarm">disarm</Link></>} i="light" j="E" k="Axes; Close" />
</>};
const _axe_gauntlet_dwarven_heavy = {title: "Axe-gauntlet, dwarven heavy", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-axe_gauntlet_dwarven_heavy-axe-gauntlet-dwarven-heavy">Axe-gauntlet, dwarven heavy</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>An axe-gauntlet is a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> covering the hand and forearm up to and over the elbow, with an axe blade built around the gauntlet's permanently closed fist. Axe-gauntlets were developed during the long Quest for Sky, when dwarven warriors often had to engage in running fights against larger, stronger opponents in areas the dwarves did not intend to ever return to. Losing a weapon in such circumstances often made it irretrievable, and the axe-gauntlet became popular with rear-guard warriors.</p>
<p><Icons id="eq-weapon-axe_gauntlet_dwarven_heavy-def-info-icons" wrapper="prefixIcon" list={["def","info"]} /> Though these weapons have seen significantly less use since the dwarves reached the surface, some dwarven warriors still appreciate the reliability of such designs. An axe-gauntlet takes a <strong className="hl">full-round action</strong> to don, and it gives you a +10 bonus to your CMD against <Link to="/rule/disarm">disarm</Link> attempts. You can't use the hand on which an axe-gauntlet is worn for anything else.</p>
<Tabular format="weap1" a="21" b="5" d="s1d6~m1d8" e="x3" f="x" g="S" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/disarm">disarm</Link></>} i="one" j="E" k="Axes; Close" />
</>};
const _barbazu_beard = {title: "Barbazu beard", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-barbazu_beard-barbazu-beard">Barbazu beard</h2>
<p><strong>Sources</strong> <Link to="/source/cheliax_empire_of_devils">Cheliax, Empire of Devils pg. 27</Link></p>
<p>Popular in Egorian but rarely seen elsewhere, a <em>barbazu beard</em> is an intimidating helm with a full facemask wrought to look like a snarling barbazu's head. Extending from the chin area of the face guard is a razor-sharp blade much like an actual <Link to="/monster/barbazu">barbazu's</Link> beard, usually 8 inches long but sometimes longer.</p>
<p>A <em>barbazu beard</em> can be used as an <Link to="/rule/off_hand">off-hand</Link> weapon that requires no hands to use; thus, a warrior could combine use of a <em>barbazu beard</em> with a two-handed weapon. It otherwise follows all rules for using an off-hand weapon.</p>
<p><Icons id="eq-weapon-barbazu_beard-down-icons" wrapper="prefixIcon" list={["down"]} /> Attacking with a <em>barbazu beard</em> provokes an attack of opportunity. Because it is so close to the wearer's face, using a <em>barbazu beard</em> against creatures harmful to touch (such as fire elementals and acidic oozes) has the same risks as using a natural weapon or unarmed strike against these creatures.</p>
<Tabular format="weap1" a="25" b="5" d="s1d3~m1d4" e="x2" f="x" g="S" i="light" j="E" />
</>};
const _battle_poi = {title: "Battle poi", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-battle_poi-battle-poi">Battle poi</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 2</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 22</Link></p>
<p>This pair of arm-length chains has handles at one end and heavy fuel-soaked torch heads at the other. The weight of the poi is insufficient to deal physical damage, but the burning fuel deals fire damage.</p>
<p>If you are proficient in battle poi, you are treated as if you have the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat for the purposes of making poi attacks.</p>
<p>Poi can be extinguished by spending a <strong className="hl">full-round action</strong> smothering them in sand or submerging them in water.</p>
<Tabular format="weap1" a="5" b="2" d="s1d3 fire~m1d4 fire" e="x2" f="x" g="fire" i="light" j="E" k="Flails" />
</>};
const _butterfly_knife = {title: "Butterfly knife", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-butterfly_knife-butterfly-knife">Butterfly knife</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link></p>
<p>This weapon has a blade concealed between the two halves of the handle that can be brought to bear quickly. If you are proficient with it (or have the <Link to="/feat/quick_draw">Quick Draw</Link> feat), you may open it as a <strong className="hl">free action</strong>; a nonproficient user must spend a <strong className="hl">move action</strong> to open it. Otherwise, treat it as a <Link to="/eq-weapon/dagger">dagger</Link>.</p>
<p><Icons id="eq-weapon-butterfly_knife-def-icons" wrapper="prefixIcon" list={["def"]} /> When it's closed, you gain a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal it on your body.</p>
<Tabular format="weap1" a="5" b="1" d="s1d3~m1d4" e="r19x2" f="x" g="P or S" i="light" j="E" k="Blades, Light" />
</>};
const _dan_bong = {title: "Dan bong", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-dan_bong-dan-bong">Dan bong</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>These short, blunt sticks are held in the hands to enhance unarmed martial techniques and secured by a cord looped over the thumb.</p>
<p><Icons id="eq-weapon-dan_bong-boost-icons" wrapper="prefixIcon" list={["boost"]} /> They provide the wielder with the ability to lock an opponent and target pressure points, granting you a +2 bonus on combat maneuver checks to <Link to="/rule/grapple">grapple</Link>.</p>
<Tabular format="weap1" a="0.1" b="x" d="s1d2~m1d3" e="r19x2" f="10" g="B" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/monk">monk</Link>, see text</>} i="light" j="E" k="Close; Monk" />
</>};
const _deer_horn_knife = {title: "Deer horn knife", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-deer_horn_knife-deer-horn-knife">Deer horn knife</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This flat, metal weapon consists of two joined crescent-shaped blades overlapping to form a hollow center with four projecting points. The blades can differ in length. One side of the center is wrapped to serve as a grip while the other acts as a guard. Deer horn knives are traditionally used in pairs.</p>
<Tabular format="weap1" a="10" b="3" d="s1d3~m1d4" e="x3" f="20" g="P" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/monk">monk</Link></>} i="light" j="E" k="Blades, Light; Monk; Thrown" />
</>};
const _dwarven_maulaxe = {title: "Dwarven maulaxe", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-dwarven_maulaxe-dwarven-maulaxe">Dwarven maulaxe</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link></p>
<p>This versatile weapon looks like a heavy-headed axe, but a proficient wielder can use the blunt back of the head to deal bludgeoning damage.</p>
<Tabular format="weap1" a="25" b="5" d="s1d4~m1d6" e="x3" f="10" g="B or S" i="light" j="E" />
</>};
const _elven_leafblade = {title: "Elven leafblade", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-elven_leafblade-elven-leafblade">Elven leafblade</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 114</Link></p>
<p>Elves have traditionally eschewed the use of larger weaponry, opting instead for lighter weapons that take advantage of their wielders' agility and poise. The elven curve blade is perhaps the best-known weapon in this category, but the leafblade (often partnered with the substantially longer <Link to="/eq-weapon/elven_thornblade">thornblade</Link>) embraces these fighting styles to an even greater extent.</p>
<p>This <Link to="/eq-weapon/short_sword">short sword</Link> has a blade reminiscent of a long, narrow leaf and is suitable both for slashing swings and targeted thrusts. These weapons are designed to be wielded alongside elven thornblades.</p>
<p><Icons id="eq-weapon-elven_leafblade-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Attacks with an elven leafblade gain a +2 bonus on attack rolls made to confirm critical hits.</p>
<Tabular format="weap1" a="40" b="3" d="s1d3~m1d4" e="r18x2" f="x" g="P or S" h="see text" i="light" j="E" />
</>};
const _emei_piercer = {title: "Emei piercer", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-emei_piercer-emei-piercer">Emei piercer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>This weapon is used to augment unarmed martial techniques. It consists of an 8- to 10-inch-long, dual-pointed steel spike set on swivels and mounted on a ring, so that it can be spun around at high speeds when slipped over the wielder's ring finger. The ring prevents the wielder from being <Link to="/rule/disarm">disarmed</Link> and turns unarmed strikes into piercing attacks.</p>
<Tabular format="weap1" a="3" b="x" d="s1d2~m1d3" e="r19x2" f="x" g="P" h="see text" i="light" j="E" k="Close; Monk" />
</>};
const _fighting_fan = {title: "Fighting fan", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-fighting_fan-fighting-fan">Fighting fan</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Made to resemble a courtier's fan, this device consists of silk paper stretched and folded over a folding frame of hardened steel. Folding fans are typically wielded in pairs using a technique that distracts the opponent. The fans sport sharp tips, which can be <Link to="/main/equipment_poisons">poisoned</Link>.</p>
<Tabular format="weap1" a="5" b="x" d="s1d3~m1d4" e="x3" f="x" g="P" h={<><Link to="/misc/distracting">distracting</Link>, <Link to="/misc/monk">monk</Link></>} i="light" j="E" k="Close; Monk" />
</>};
const _flying_talon = {title: "Flying talon", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-flying_talon-flying-talon">Flying talon</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 208</Link></p>
<p><Icons id="eq-weapon-flying_talon-down-icons" wrapper="prefixIcon" list={["down"]} /> This weapon consists of a three-pronged, barbed hook attached to a length of chain. Due to the weapon's unwieldiness, you cannot make attacks of opportunity with a flying talon and do not threaten any squares with it.</p>
<p><Icons id="eq-weapon-flying_talon-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A flying talon has reach, so you can strike opponents 10 feet away with it. When using a flying talon, you gain a +2 bonus on opposed attack rolls to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/trip">trip</Link> an opponent (including the roll to avoid being disarmed if such an attempt fails).</p>
<Tabular format="weap1" a="15" b="5" d="s1d3~m1d4" e="x2" f="x" g="P or S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link>, see text</>} i="light" j="E" k="Flails" />
</>};
const _gnome_pincher = {title: "Gnome pincher", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-gnome_pincher-gnome-pincher">Gnome pincher</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This odd weapon is a 2-foot rod topped with four blunt claws. Squeezing the handle causes the claws to close.</p>
<p><Icons id="eq-weapon-gnome_pincher-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You can use the gnome pincher to attempt a <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/steal">steal</Link> combat maneuver with a +2 bonus.</p>
<p><Icons id="eq-weapon-gnome_pincher-info-icons" wrapper="prefixIcon" list={["info"]} /> You can transfer an object from the pincher to your free hand as a <strong className="hl">free action</strong>. <Link to="/race/gnome">Gnomes</Link> treat pinchers as martial weapons.</p>
<Tabular format="weap1" a="10" b="2" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, see text</>} i="light" j="E" k="Flails" />
</>};
const _halfling_rope_shot = {title: "Halfling rope-shot", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-halfling_rope_shot-halfling-rope-shot">Halfling rope-shot</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>One end of this short rope has a <Link to="/eq-weapon/sling_bullet">sling bullet</Link> wrapped in a monkey's fist knot, and the other end is tied in a small loop. You wrap the loop around your wrist as a <strong className="hl">full-round action</strong> and swing the weighted end like a flail.</p>
<p><Icons id="eq-weapon-halfling_rope_shot-info-icons" wrapper="prefixIcon" list={["info"]} /> If the loop is properly attached to your wrist and you drop the rope-shot or are disarmed, you can recover it as a <strong className="hl">swift action</strong>. Removing the weapon's loop is a <strong className="hl">full-round action</strong>. You get a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal a rope-shot on your body. <Link to="/race/halfling">Halflings</Link> treat rope-shots as martial weapons.</p>
<Tabular format="weap1" a="1" b="1" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link></>} i="light" j="E" k="Flails" />
</>};
const _helmet_dwarven_boulder = {title: "Helmet, dwarven boulder", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-helmet_dwarven_boulder-helmet-dwarven-boulder">Helmet, dwarven boulder</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 17</Link></p>
<p><Icons id="eq-weapon-helmet_dwarven_boulder-power-boost-down-def-icons" wrapper="prefixIcon" list={["power","boost","down","def"]} /> This heavy, reinforced helmet can be used to make melee attacks. The wearer may also use the helmet when attempting <Link to="/rule/bull_rush">bull rush</Link> maneuvers, granting a +2 circumstance bonus on the check, but after completing the maneuver (whether successful or not), the wearer is <Link to="/misc/staggered">staggered</Link> until the end of his next turn. In addition, the helmet grants a +2 circumstance bonus to the wearer's AC against critical hit confirmation rolls.</p>
<p><Icons id="eq-weapon-helmet_dwarven_boulder-down-info-icons" wrapper="prefixIcon" list={["down","info"]} /> A dwarven boulder helmet adds 20% to the wearer's arcane spell failure chance. It occupies the head slot and is made of metal, not stone, meaning that it can be crafted from unusual materials as a metal weapon. A dwarven boulder helmet can be enchanted as a weapon (not as armor, despite providing some protection).</p>
<Tabular format="weap1" a="20" b="10" d="s1d3~m1d4" e="x2" f="x" g="B" h="see text" i="light" j="E" />
</>};
const _kama = {title: "Kama", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-kama-kama">Kama</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>Similar to a <Link to="/eq-weapon/sickle">sickle</Link> - and in some regions still used to reap grain - a kama is a short, curved blade attached to a simple handle, usually made of wood. It is sometimes also referred to as a kai, and is frequently used in pairs by martial artists.</p>
<Tabular format="weap1" a="2" b="2" d="s1d4~m1d6" e="x2" f="x" g="S" h={<><Link to="/misc/monk">monk</Link>, <Link to="/misc/trip">trip</Link></>} i="light" j="E" k="Blades, Light; Monk" />
</>};
const _kasatha_spinal_sword = {title: "Kasatha spinal sword", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-kasatha_spinal_sword-kasatha-spinal-sword">Kasatha spinal sword</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_stars">People of the Stars pg. 9</Link></p>
<p>This light one-handed sword is covered in bony spines that make it easier to poison opponents.</p>
<p><Icons id="eq-weapon-kasatha_spinal_sword-boost-icons" wrapper="prefixIcon" list={["boost"]} /> The save DC of a nonmagical injury poison applied to a kasatha spinal sword increases by 2. <Link to="/race/kasatha">Kasathas</Link> treat kasatha spinal swords as martial weapons.</p>
<Tabular format="weap1" a="50" b="3" d="s1d4~m1d6" e="x3" f="x" g="P or S" h={<><Link to="/misc/fragile">fragile</Link></>} i="light" j="E" />
</>};
const _knuckle_axe = {title: "Knuckle axe", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-knuckle_axe-knuckle-axe">Knuckle axe</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>Knuckle axes, usually used in pairs, resemble axe blades mounted on brass knuckles.</p>
<p><Icons id="eq-weapon-knuckle_axe-warning-icons" wrapper="prefixIcon" list={["warning"]} /> You may hold, but not wield, a weapon or other object in a hand wearing a knuckle axe. Unlike when wearing <Link to="/eq-weapon/brass_knuckles">brass knuckles</Link>, you cannot use a hand wearing a knuckle axe for spellcasting.</p>
<Tabular format="weap1" a="9" b="2" d="s1d4~m1d6" e="x3" f="x" g="S" h={<><Link to="/misc/monk">monk</Link>, <Link to="/misc/performance">performance</Link></>} i="light" j="E" k="Axes" />
</>};
const _nunchaku = {title: "Nunchaku", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-nunchaku-nunchaku">Nunchaku</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A nunchaku is made up of two wooden or metal bars connected by a short length of rope or chain.</p>
<Tabular format="weap1" a="2" b="2" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/monk">monk</Link></>} i="light" j="E" k="Flails; Monk" />
</>};
const _pata = {title: "Pata", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-pata-pata">Pata</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_9_escape_from_old_korvosa">Pathfinder #9: Escape from Old Korvosa pg. 83</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 18</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>An evolution of the <Link to="/eq-weapon/punching_dagger">punching dagger</Link>, the pata is a <Link to="/eq-weapon/short_sword">short sword</Link> that ends in a full, fingerless gauntlet hilt. You punch rather than stab with the weapon, allowing you to put more force behind each strike.</p>
<p><Icons id="eq-weapon-pata-down-def-icons" wrapper="prefixIcon" list={["down","def"]} /> While wearing a pata, you cannot use that hand for anything else. A pata provides a +10 bonus to your CMD against <Link to="/rule/disarm">disarm</Link> attempts.</p>
<Tabular format="weap1" a="14" b="3" d="s1d4~m1d6" e="x3" f="x" g="P" h={<><Link to="/misc/performance">performance</Link></>} i="light" j="E" k="Axes; Blades, Light" />
</>};
const _quadrens = {title: "Quadrens", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-quadrens-quadrens">Quadrens</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>A quadrens looks similar to a sturdy dagger, but with four spikes mounted in a square pattern in place of a blade.</p>
<p><Icons id="eq-weapon-quadrens-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When you score a critical hit with a quadrens, the resulting gaping wound causes 1 point of <Link to="/rule/bleed">bleed</Link> damage.</p>
<p>In addition to punching through hide and armor, the spikes can also be used to snag opponents' blades and twist them out of their grips.</p>
<Tabular format="weap1" a="8" b="2" d="s1d4~m1d6" e="r19x2" f="x" g="P" h={<><Link to="/misc/performance">performance</Link></>} i="light" j="E" k="Blades, Light" />
</>};
const _razor_drow = {title: "Razor, drow", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-razor_drow-razor-drow">Razor, drow</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link></p>
<p>Meant for quick strikes and slashes, this long, slender knife is incredibly sharp along one edge. Drow swashbucklers and assassins are particularly fond of these weapons.</p>
<p><Icons id="eq-weapon-razor_drow-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A confirmed critical hit or successful <Link to="/ability/sneak_attack">sneak attack</Link> with a drow razor deals an additional 2 points of damage; this damage is <Link to="/misc/precision_damage">precision damage</Link> and is not multiplied on a critical hit. A character with the drow's <em>weapon familiarity</em> racial trait treats the drow razor as a martial weapon.</p>
<Tabular format="weap1" a="25" b="2" d="s1d3~m1d4" e="r18x2" f="x" g="S" h="see text" i="light" j="E" k="Blades, Light" />
</>};
const _rope_gauntlet = {title: "Rope gauntlet", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-rope_gauntlet-rope-gauntlet">Rope gauntlet</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 23</Link></p>
<p>By wrapping your hands and forearms in thin but tough hemp ropes and then soaking the makeshift gloves in water for weight and expansion, you can transform your fists into rock-hard weapons easily capable of killing in a fistfight.</p>
<p>Each rope gauntlet takes a full minute to wrap and another minute to soak, but once applied the gauntlet can be worn for a day; removing a rope gauntlet takes 1 full round.</p>
<p>When wearing rope gauntlets, you are considered armed and your attacks deal normal damage. If you are proficient with rope gauntlets, you may use the rough edges of the ropes to deal slashing damage rather than bludgeoning damage.</p>
<p><Icons id="eq-weapon-rope_gauntlet-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Your fingers are mostly exposed, allowing you to wield or carry items in your hands while wearing rope gauntlets, but the constriction of the weapon at your knuckles gives you a -2 penalty on all precision-based tasks involving your hands (such <Link to="/skill/disable_device">opening locks</Link>).</p>
<Tabular format="weap1" a="0.2" b="2" d="s1d3~m1d4" e="x2" f="x" g="B (or S)" i="light" j="E" k="Close" />
</>};
const _sai = {title: "Sai", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-sai-sai">Sai</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p><Icons id="eq-weapon-sai-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A sai is a metal spike flanked by a pair of prongs used to trap an enemy's weapon. When wielding a sai, you get a +2 bonus on combat maneuver checks to <Link to="/rule/sunder">sunder</Link> an enemy's weapon.</p>
<p>Though pointed, a sai is not usually used for stabbing. Instead, it is used primarily to bludgeon foes, punching with the hilt, or else to catch and disarm weapons between its tines. Sais are often wielded in pairs.</p>
<Tabular format="weap1" a="1" b="1" d="s1d3~m1d4" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/monk">monk</Link></>} i="light" j="E" k="Monk" />
</>};
const _sanpkhang = {title: "Sanpkhang", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-sanpkhang-sanpkhang">Sanpkhang</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link></p>
<p>This elaborate knife is carved with special barbs and grooves, meant to channel toxins into the bloodstream.</p>
<p><Icons id="eq-weapon-sanpkhang-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Any injury poison delivered with a sanpkhang has its DC increased by 1, or by 2 if delivered as part of a critical hit or sneak attack. The <Link to="/race/vishkanya">vishkanya's</Link> <em>weapon familiarity</em> racial trait grants proficiency with the sanpkhang.</p>
<Tabular format="weap1" a="60" b="1" d="s1d3~m1d4" e="r19x2" f="x" g="P or S" h={<><Link to="/misc/monk">monk</Link>, see text</>} i="light" j="E" k="Blades, Light; Monk" />
</>};
const _scorpion_whip = {title: "Scorpion whip", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-scorpion_whip-scorpion-whip">Scorpion whip</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 23</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>This whip has a series of razor-sharp blades and fangs inset along its tip. It deals lethal damage, even to creatures with armor bonuses. If you are proficient with both the scorpion whip and <Link to="/eq-weapon/whip">whip</Link>, you can use a scorpion whip in either the normal way (as a light performance weapon) or as a whip. When you use a scorpion whip as a whip, it is equivalent to a whip, but deals lethal damage and can harm creatures regardless of their armor bonus.</p>
<Tabular format="weap1" a="5" b="3" d="s1d3~m1d4" e="x2" f="x" g="S" h={<><Link to="/misc/performance">performance</Link></>} i="light" j="E" k="Flails" />
</>};
const _siangham = {title: "Siangham", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-siangham-siangham">Siangham</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>This weapon is a handheld shaft fitted with a pointed tip for stabbing foes. It resembles a (much sturdier) arrow with a grip designed for melee combat.</p>
<Tabular format="weap1" a="3" b="1" d="s1d4~m1d6" e="x2" f="x" g="P" h={<><Link to="/misc/monk">monk</Link></>} i="light" j="E" k="Monk" />
</>};
const _sica = {title: "Sica", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-sica-sica">Sica</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 5</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 145</Link></p>
<p>This blade is a smaller, lighter version of the <Link to="/eq-weapon/shotel">shotel</Link>.</p>
<p><Icons id="eq-weapon-sica-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You gain a +1 bonus on attack rolls with a sica against opponents using bucklers, light shields, or heavy shields.</p>
<Tabular format="weap1" a="10" b="2" d="s1d4~m1d6" e="x2" f="x" g="S" h={<><Link to="/misc/performance">performance</Link></>} i="light" j="E" k="Blades, Light" />
</>};
const _swordbreaker_dagger = {title: "Swordbreaker dagger", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-swordbreaker_dagger-swordbreaker-dagger">Swordbreaker dagger</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 5</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 179</Link></p>
<p><Icons id="eq-weapon-swordbreaker_dagger-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You can use this dagger to disarm or sunder enemy blades by catching them in the grooves on the back of the blade and using your weapon as a lever. If you are proficient with this weapon, add a +4 bonus on combat maneuver checks to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/sunder">sunder</Link> bladed weapons while using it.</p>
<Tabular format="weap1" a="10" b="3" d="s1d3~m1d4" e="x2" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/sunder">sunder</Link>, see text</>} i="light" j="E" k="Blades, Light" />
</>};
const _tekko_kagi = {title: "Tekko-kagi", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-tekko_kagi-tekko-kagi">Tekko-kagi</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>Also known as an iron claw, this device consists of a fan-like structure of three or more 10-inch blades secured to a sturdy handle strapped to the forearm of the off hand.</p>
<p><Icons id="eq-weapon-tekko_kagi-boost-icons" wrapper="prefixIcon" list={["boost"]} /> It can be used as an offensive weapon or defensively like a buckler, or used to disarm an opponent without provoking an attack of opportunity. It provides its owner with a +2 circumstance bonus on attempts to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/sunder">sunder</Link> swords or other slender-bladed weapons.</p>
<Tabular format="weap1" a="2" b="x" d="s1d2~m1d3" e="x2" f="x" g="P" h={<><Link to="/misc/disarm">disarm</Link>, see text</>} i="light" j="E" k="Close" />
</>};
const _wakizashi = {title: "Wakizashi", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-wakizashi-wakizashi">Wakizashi</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>These short, slender blades are between 1 to 2 feet long. They are primarily used as back-up weapons, to decapitate defeated enemies, or to commit seppuku (ritual suicide) as a matter of honor. These blades are specifically worn by <Link to="/class/samurai">samurai</Link> and are intended to be paired with a <Link to="/eq-weapon/katana">katana</Link>. Together, this set of blades is referred to as a daisho.</p>
<Tabular format="weap1" a="35" b="2" d="s1d4~m1d6" e="r18x2" f="x" g="P or S" h={<><Link to="/misc/deadly">deadly</Link></>} i="light" j="E" k="Blades, Light" />
</>};
const _waveblade = {title: "Waveblade", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-waveblade-waveblade">Waveblade</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 208</Link></p>
<p>Also known as a "bich'wa" or a "scorpion's tail" due to its unique, stinger-like shape, this short, double-curved blade has no hilt but features a knuckle guard.</p>
<p><Icons id="eq-weapon-waveblade-def-icons" wrapper="prefixIcon" list={["def"]} /> You gain a +2 bonus to your CMD against <Link to="/rule/disarm">disarm</Link> attempts made to disarm you of a waveblade.</p>
<Tabular format="weap1" a="5" b="2" d="s1d4~m1d6" e="r18x2" f="x" g="P or S" h={<><Link to="/misc/monk">monk</Link>, see text</>} i="light" j="E" k="Close" />
</>};
const _aldori_dueling_sword = {title: "Aldori dueling sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-aldori_dueling_sword-aldori-dueling-sword">Aldori dueling sword</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 24</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 18</Link></p>
<p>These slightly curved swords measure just over 3 feet in length.</p>
<p><Icons id="eq-weapon-aldori_dueling_sword-info-icons" wrapper="prefixIcon" list={["info"]} /> An Aldori dueling sword can be used as a martial weapon (in which case it functions as a <Link to="/eq-weapon/longsword">longsword</Link>), but if you have the feat <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (Aldori dueling sword), you can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with an Aldori dueling sword sized for you, even though it isn't a light weapon. You can also wield an Aldori dueling sword in two hands to apply 1&frac12; times your Strength bonus to damage rolls.</p>
<Tabular format="weap1" a="20" b="3" d="s1d6~m1d8" e="r19x2" f="x" g="S" i="one" j="E" k="Blades, Heavy" />
</>};
const _bastard_sword = {title: "Bastard sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-bastard_sword-bastard-sword">Bastard sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A bastard sword is about 4 feet in length, making it too large to use in one hand without special training; thus, it is an exotic weapon.</p>
<p><Icons id="eq-weapon-bastard_sword-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use a bastard sword two-handed as a martial weapon.</p>
<Tabular format="weap1" a="35" b="6" d="s1d8~m1d10" e="r19x2" f="x" g="S" i="one" j="E" k="Blades, Heavy" />
</>};
const _broken_back_seax = {title: "Broken-back seax", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-broken_back_seax-broken-back-seax">Broken-back seax</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 30</Link></p>
<p>Used in Avistan since before Earthfall, seaxes are straight, single-edged blades. The broken-back seax is the size of a <Link to="/eq-weapon/short_sword">short sword</Link>, and has a broad blade with a distinctive trapezoidal shape.</p>
<p><Icons id="eq-weapon-broken_back_seax-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If your Strength score is less than 15, you take a -2 penalty on attack rolls with a broken-back seax, as you're unable to put enough force into the blows to land them effectively.</p>
<Tabular format="weap1" a="40" b="4" d="s1d8~m1d10" e="r19x2" f="x" g="P &amp; S" h="see text" i="one" j="E" k="Blades, Light" />
</>};
const _doru = {title: "Doru", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-doru-doru">Doru</h2>
<p><strong>Sources</strong> <Link to="/source/distant_shores">Distant Shores pg. 12</Link></p>
<p>Balanced by a metal butt, this large <Link to="/eq-weapon/spear">spear</Link> is weighted so that it can be used in one hand by a proficient wielder.</p>
<p><Icons id="eq-weapon-doru-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use a doru two-handed as a simple weapon. You can also use a doru as a one-handed martial weapon, but its critical hit multiplier decreases to &times;2.</p>
<Tabular format="weap1" a="4" b="6" d="s1d6~m1d8" e="x3" f="20" g="P" h={<><Link to="/misc/brace">brace</Link></>} i="one" j="E" />
</>};
const _dwarven_double_waraxe = {title: "Dwarven double waraxe", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-dwarven_double_waraxe-dwarven-double-waraxe">Dwarven double waraxe</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 17</Link></p>
<p>This hefty waraxe is similar to the common <Link to="/eq-weapon/dwarven_waraxe">dwarven waraxe</Link>, but its recurved blade spans forward and back from its head like a deadly butterfly.</p>
<p><Icons id="eq-weapon-dwarven_double_waraxe-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A dwarven double waraxe grants a +1 bonus on all attack rolls after the first when using <Link to="/feat/cleave">Cleave</Link> or <Link to="/feat/great_cleave">Great Cleave</Link>.</p>
<Tabular format="weap1" a="60" b="12" d="s1d8~m1d10" e="x3" f="x" g="S" h="see text" i="one" j="E" />
</>};
const _dwarven_waraxe = {title: "Dwarven waraxe", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-dwarven_waraxe-dwarven-waraxe">Dwarven waraxe</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A dwarven waraxe has a large, ornate head mounted on a thick handle, making it too large to use in one hand without special training; thus, it is an exotic weapon.</p>
<p><Icons id="eq-weapon-dwarven_waraxe-info-icons" wrapper="prefixIcon" list={["info"]} /> A Medium character can use a dwarven waraxe two-handed as a martial weapon, or a Large creature can use it one-handed in the same way. A dwarf treats a dwarven waraxe as a martial weapon even when using it in one hand.</p>
<Tabular format="weap1" a="30" b="8" d="s1d8~m1d10" e="x3" f="x" g="S" i="one" j="E" k="Axes" />
</>};
const _elven_thornblade = {title: "Elven thornblade", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-elven_thornblade-elven-thornblade">Elven thornblade</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 114</Link></p>
<p>This blade is suited for thrusts and parries, making it especially capable of inflicting deep, penetrating wounds.</p>
<p><Icons id="eq-weapon-elven_thornblade-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A wielder with <Link to="/feat/weapon_finesse">Weapon Finesse</Link> can apply her Dexterity modifier to attack rolls with an elven thornblade instead of her Strength modifier. An elven thornblade grants no additional benefit when wielded two-handed. In addition, attacks with an elven thornblade gain a +2 bonus on attack rolls made to confirm critical hits.</p>
<Tabular format="weap1" a="60" b="4" d="s1d4~m1d6" e="r18x2" f="x" g="P or S" h="see text" i="one" j="E" />
</>};
const _estoc = {title: "Estoc", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-estoc-estoc">Estoc</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>An estoc is a sword about as long as a <Link to="/eq-weapon/bastard_sword">bastard sword</Link>, but designed exclusively for thrusting attacks. Its "blade" is a steel spike with a triangular, square, or hexagonal crosssection.</p>
<p><Icons id="eq-weapon-estoc-info-icons" wrapper="prefixIcon" list={["info"]} /> Like the bastard sword, an estoc requires special training to use it one handed, but it can also be wielded as a two-handed martial weapon. When you wield an estoc with one hand, treat it as a one-handed weapon; when you wield an estoc with two hands, treat it as a two-handed weapon. If you can use the estoc proficiently with one hand, you can also use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier on attack rolls when wielding an estoc sized for you with one or two hands, even though it isn't a light weapon.</p>
<Tabular format="weap1" a="50" b="4" d="s2d3~m2d4" e="r18x2" f="x" g="P" i="one" j="E" k="Blades, Heavy" />
</>};
const _falcata = {title: "Falcata", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-falcata-falcata">Falcata</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link></p>
<p>This heavy blade has a single sharp edge, concave at the bottom and convex at the top, with a hook-shaped hilt. Its shape distributes the weight to give it the momentum of an axe with the cutting edge of a sword, much like a larger version of a <Link to="/eq-weapon/kukri">kukri</Link>. The hooked hilt is sometimes carved to resemble the head of a horse or bird of prey, and may have a thin chain stretched across its opening, acting as a partial guard for the hand and fingers.</p>
<Tabular format="weap1" a="18" b="4" d="s1d6~m1d8" e="r19x3" f="x" g="S" i="one" j="E" k="Blades, Heavy" />
</>};
const _flindbar = {title: "Flindbar", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-flindbar-flindbar">Flindbar</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 93</Link>, <Link to="/source/classic_monsters_revisited">Classic Monsters Revisited pg. 14</Link></p>
<p>This one-handed weapon is similar to a <Link to="/eq-weapon/nunchaku">nunchaku</Link> in that it consists of a pair of bars linked with heavy chain. However, a flindbar's bars are made of iron and are capped with a ring of spikes or studs. Since it's much heaver than a nunchaku, it is not a light weapon.</p>
<Tabular format="weap1" a="9" b="6" d="s1d6~m1d8" e="x2" f="x" g="B and P" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" />
</>};
const _gnome_flick_mace = {title: "Gnome flick-mace", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-gnome_flick_mace-gnome-flick-mace">Gnome flick-mace</h2>
<p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>More a flail than a mace, this weapon has a short handle attached to a length of chain with a ball at the end. The ball is propelled to its reach with the flick of the wrist, the momentum of which brings the ball back to the wielder after the strike.</p>
<Tabular format="weap1" a="20" b="10" d="s1d6~m1d8" e="x2" f="x" g="B" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> The original source had no description. The description above is taken from the 2nd edition <a href="https://paizo.com/products/btq02ej2" data-outgoing>Player Core</a> book, page 279.</p>
</blockquote>
</>};
const _great_terbutje = {title: "Great terbutje", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-great_terbutje-great-terbutje">Great terbutje</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link></p>
<p>This Stone Age weapon is a 4-foot-long version of the <Link to="/eq-weapon/terbutje">terbutje</Link>. It is too large to use in one hand without special training; thus, it is an exotic weapon.</p>
<p><Icons id="eq-weapon-great_terbutje-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use a great terbutje two-handed as a martial weapon.</p>
<Tabular format="weap1" a="12" b="4" d="s1d8~m1d10" e="r19x2" f="x" g="S" h={<><Link to="/misc/fragile">fragile</Link></>} i="one" j="E" k="Blades, Heavy" />
</>};
const _hooked_axe = {title: "Hooked axe", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-hooked_axe-hooked-axe">Hooked axe</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>The hooked end of this axe's blade can be used to <Link to="/rule/disarm">disarm</Link> foes or pull them off balance.</p>
<p><Icons id="eq-weapon-hooked_axe-info-icons" wrapper="prefixIcon" list={["info"]} /> A hooked axe can be used as a martial weapon (in which case it functions like a <Link to="/eq-weapon/battleaxe">battleaxe</Link>).</p>
<Tabular format="weap1" a="20" b="7" d="s1d6~m1d8" e="x3" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/performance">performance</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" k="Axes" />
</>};
const _katana = {title: "Katana", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-katana-katana">Katana</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 131</Link></p>
<p>Specifically constructed for <Link to="/class/samurai">samurai</Link>, katanas employ multiple types of steel combined in a distinctive forging process. The result are swords noted for their wickedly sharp yet slender, gently curved blades, designed to make graceful hacking strokes capable of severing opponents' heads and limbs. Though finely balanced, these blades are difficult to master.</p>
<p><Icons id="eq-weapon-katana-info-icons" wrapper="prefixIcon" list={["info"]} /> Characters can use a katana two-handed as a martial weapon, but must take the <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (katana) feat to use it one-handed.</p>
<Tabular format="weap1" a="50" b="6" d="s1d6~m1d8" e="r18x2" f="x" g="S" h={<><Link to="/misc/deadly">deadly</Link></>} i="one" j="E" k="Blades, Heavy" />
</>};
const _khopesh = {title: "Khopesh", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-khopesh-khopesh">Khopesh</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link></p>
<p>This heavy blade has a convex curve near the end, making its overall shape similar to that of a <Link to="/eq-weapon/battleaxe">battleaxe</Link>. A typical khopesh is 20 to 24 inches in length. Its curved shape allows the wielder to hook around defenses and trip foes. The elegant shape of a khopesh leads some artisans to cover them in ornate decorations.</p>
<Tabular format="weap1" a="20" b="8" d="s1d6~m1d8" e="r19x2" f="x" g="S" h={<><Link to="/misc/trip">trip</Link></>} i="one" j="E" k="Blades, Heavy" />
</>};
const _knobkerrie = {title: "Knobkerrie", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-knobkerrie-knobkerrie">Knobkerrie</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 18</Link></p>
<p>A knobkerrie, or iwisa, is carved from a single piece of hardwood with a shaft 2 to 4 feet long surmounted by a bulbous knob. The knobkerrie is a traditional hunting weapon among the Zenj people of the Mwangi, but it's also used as a symbol of authority. Many tribal elders use decorated knobkerries as scepters or canes.</p>
<p><Icons id="eq-weapon-knobkerrie-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A knobkerrie is thrown end-over-end. If you are proficient, you gain a +1 bonus on ranged attack rolls with a knobkerrie against opponents using bucklers, light shields, or heavy shields.</p>
<p><Icons id="eq-weapon-knobkerrie-info-icons" wrapper="prefixIcon" list={["info"]} /> If you aren't proficient with a knobkerrie, treat it as a <Link to="/eq-weapon/club">club</Link>.</p>
<Tabular format="weap1" a="5" b="4" d="s1d4~m1d6" e="x2" f="20" g="B" h="see text" i="one" j="E" />
</>};
const _nine_section_whip = {title: "Nine-section whip", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-nine_section_whip-nine-section-whip">Nine-section whip</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link></p>
<p>The nine-section whip consists of steel bars linked together. The final bar is a 6-inch weighted spike. This weapon can be wielded as a single-handed weapon, a two-handed weapon, or in pairs. Nine-section whips often have colored cloth flags attached to the ends to make them easier to control.</p>
<Tabular format="weap1" a="8" b="3" d="s1d6~m1d8" e="r19x2" f="x" g="B" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/distracting">distracting</Link>, <Link to="/misc/monk">monk</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" k="Flails; Monk" />
</>};
const _ram_hammer_dwarven = {title: "Ram hammer, dwarven", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-ram_hammer_dwarven-ram-hammer-dwarven">Ram hammer, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>The dwarven ram hammer is designed to be thrown or used in melee, with a long leather strap that is wrapped around the wrist when used to deliver blows in close combat but unfurled to aid in swinging the weapon when the hammer is thrown.</p>
<Tabular format="weap1" a="25" b="5" d="s1d6~m1d8" e="x3" f="10" g="B" i="one" j="E" k="Hammers; Thrown" />
</>};
const _rhoka_sword = {title: "Rhoka sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-rhoka_sword-rhoka-sword">Rhoka sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/into_the_darklands">Into the Darklands pg. 61</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link></p>
<p>This sword is used almost exclusively by the life-hating <Link to="/monster/urdefhan">urdefhans</Link>. The sword is the size of a <Link to="/eq-weapon/longsword">longsword</Link> but consists of two serrated blades placed side by side.</p>
<Tabular format="weap1" a="25" b="6" d="s1d6~m1d8" e="r18x2" f="x" g="S" i="one" j="E" k="Blades, Heavy" />
</>};
const _sawtooth_sabre = {title: "Sawtooth sabre", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-sawtooth_sabre-sawtooth-sabre">Sawtooth sabre</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide pg. 158</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide pg. 13</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link></p>
<p><Icons id="eq-weapon-sawtooth_sabre-info-icons" wrapper="prefixIcon" list={["info"]} /> Crafted to evoke the barbed talons of the <Link to="/faith/achaekek">Mantis God</Link> himself, a sawtooth sabre may be used as a martial weapon (in which case it functions identically to a <Link to="/eq-weapon/longsword">longsword</Link>). If you have the <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon Proficiency</Link> (sawtooth sabre) feat, for the purpose of <Link to="/rule/two_weapon_fighting">two-weapon fighting</Link> you can treat it as a light melee weapon; for all other purposes, it is a one-handed melee weapon.</p>
<Tabular format="weap1" a="35" b="2" d="s1d6~m1d8" e="r19x2" f="x" g="S" h="see text" i="one" j="E" k="Blades, Heavy; Blades, Light" />
</>};
const _shotel = {title: "Shotel", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-shotel-shotel">Shotel</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 5</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link></p>
<p>The shotel is a downward-curving sword designed to reach over or around an opponent's shield.</p>
<p><Icons id="eq-weapon-shotel-boost-icons" wrapper="prefixIcon" list={["boost"]} /> You gain a +1 bonus on attack rolls with a shotel against opponents using bucklers, light shields, or heavy shields.</p>
<p>The curve of a shotel's blade varies from sword to sword, and some models are double-edged, while others are single-edged, with the back edge able to be braced against a shield for additional power. Shotels are particularly useful for hooking mounted combatants and ripping them from their steeds.</p>
<Tabular format="weap1" a="30" b="3" d="s1d6~m1d8" e="x3" f="x" g="P" h={<><Link to="/misc/performance">performance</Link></>} i="one" j="E" k="Blades, Heavy" />
</>};
const _sickle_sword = {title: "Sickle-sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-sickle_sword-sickle-sword">Sickle-sword</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link></p>
<p>Favored by those residents of Irrisen with no talent for witchcraft, this exotic blade curves multiple times along its 3&frac12; feet. The sickle-sword's hilt is long and curved, and its blade bears a small secondary grip partway up its length. These allow a wielder with a free hand to rapidly twist the sword in unpredictable ways.</p>
<p><Icons id="eq-weapon-sickle_sword-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When wielding a sickle-sword in one hand and nothing in the other, you can spend a <strong className="hl">swift action</strong> to gain a +2 bonus on your next attack roll before the end of your turn.</p>
<Tabular format="weap1" a="20" b="4" d="s1d6~m1d8" e="r19x2" f="x" g="S" h={<><Link to="/misc/distracting">distracting</Link>, see text</>} i="one" j="E" k="Blades, Heavy" />
</>};
const _spiral_rapier = {title: "Spiral rapier", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-spiral_rapier-spiral-rapier">Spiral rapier</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link></p>
<p>This <Link to="/eq-weapon/rapier">rapier</Link>-like weapon has a thicker blade than normal, which is shaped into a corkscrewing spiral of sharpened edges. These edges can catch enemy weapons, making it ideal for disarming or parrying.</p>
<p><Icons id="eq-weapon-spiral_rapier-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a spiral rapier sized for you, even though it isn't a light weapon. You can't wield a spiral rapier in two hands in order to apply 1&frac12; times your Strength modifier to its damage. Any effects that apply to rapiers also apply to a spiral rapier.</p>
<Tabular format="weap1" a="80" b="3" d="s1d4~m1d6" e="r18x2" f="x" g="P" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/disarm">disarm</Link>, see text</>} i="one" j="E" k="Blades, Light" />
</>};
const _split_blade_sword = {title: "Split-blade sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-split_blade_sword-split-blade-sword">Split-blade sword</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 30</Link></p>
<p>Patterned after the fiery blades masterfully wielded by <Link to="/faith/sarenrae">Sarenite</Link> angels, the split-blade sword is both a holy symbol and a difficult-yet-effective weapon. A split-blade sword resembles a large <Link to="/eq-weapon/scimitar">scimitar</Link> whose blade splits into two about two-thirds of the way toward the tip.</p>
<p><Icons id="eq-weapon-split_blade_sword-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If your Dexterity score is less than 15, you take a -2 penalty on attacks rolls with a split-blade sword, as you're unable to maneuver its unusual blade.</p>
<Tabular format="weap1" a="200" b="8" d="s1d10~m2d6" e="x2" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link>, see text</>} i="one" j="E" k="Blades, Heavy" />
</>};
const _taiaha = {title: "Taiaha", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-taiaha-taiaha">Taiaha</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link></p>
<p>The Stone Age taiaha is a long, heavy stick, club-shaped at one end and tipped with a wooden or metal spear point at the other. You wield it with a combination of solid strikes with the club and fending motions with the spear.</p>
<p><Icons id="eq-weapon-taiaha-info-icons" wrapper="prefixIcon" list={["info"]} /> A taiaha can be wielded as a martial weapon that deals 1d8 points of bludgeoning damage (1d6 if Small) and has a &times;2 critical.</p>
<Tabular format="weap1" a="10" b="8" d="s1d8/1d4~m1d10/1d6" e="&times;2/&times;3" f="x" g="B or P" h={<><Link to="/misc/double">double</Link></>} i="one" j="E" k="Double; Hammers" />
</>};
const _temple_sword = {title: "Temple sword", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-temple_sword-temple-sword">Temple sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_9_escape_from_old_korvosa">Pathfinder #9: Escape from Old Korvosa pg. 83</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 179</Link></p>
<p>Heavy blades typically used by guardians of religious sites, temple swords have distinctive crescent-shaped blades, which appear to be an amalgam of sickle and sword. Many have holes drilled into the blade or the pommel so that charms, bells, or other holy trinkets can be attached to reflect the owner's devotion or to serve as foci for prayer or meditation. Monks are proficient with the temple sword.</p>
<Tabular format="weap1" a="30" b="3" d="s1d6~m1d8" e="r19x2" f="x" g="S" h={<><Link to="/misc/monk">monk</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" k="Blades, Heavy; Monk" />
</>};
const _tongi = {title: "Tongi", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-tongi-tongi">Tongi</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This rare weapon resembles a <Link to="/eq-weapon/battleaxe">battleaxe</Link> with wedges cut out of the head, presenting four sharp points that splay from the handle rather than a single convex blade.</p>
<Tabular format="weap1" a="18" b="4" d="s1d4~m1d6" e="r19x3" f="x" g="P" i="one" j="E" k="Axes" />
</>};
const _urumi = {title: "Urumi", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-urumi-urumi">Urumi</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_9_escape_from_old_korvosa">Pathfinder #9: Escape from Old Korvosa pg. 83</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>Commonly known as a whip sword, this deadly weapon is fashioned from one to four 5-foot-long, razor-sharp blades of flexible steel, almost like a metal <Link to="/eq-weapon/cat_o_nine_tails">cat-o'-nine-tails</Link>. The weapon is wielded by whipping the blades at one's opponent. The coiled blade is fine and flexible enough to be worn as a belt, and its wielders often carry the blades wrapped around themselves in this fashion.</p>
<p><Icons id="eq-weapon-urumi-boost-icons" wrapper="prefixIcon" list={["boost"]} /> An urumi has <Link to="/misc/reach">reach</Link>, so you can strike opponents 10 feet away with it. In addition, unlike most other weapons with reach, it can be used against an adjacent foe.</p>
<p><Icons id="eq-weapon-urumi-def-icons" wrapper="prefixIcon" list={["def"]} /> Built for flexibility, an urumi takes only half damage from attempts to <Link to="/rule/sunder">sunder</Link> it.</p>
<Tabular format="weap1" a="30" b="6" d="s1d6~m1d8" e="r18x2" f="x" g="S" h={<><Link to="/misc/distracting">distracting</Link></>} i="one" j="E" k="Flails; Monk" />
</>};
const _wahaika = {title: "Wahaika", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-wahaika-wahaika">Wahaika</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link></p>
<p>This short and broad Stone Age club is made of hardened wood or bone. It has a notch on one side that is used for catching weapons.</p>
<p><Icons id="eq-weapon-wahaika-info-icons" wrapper="prefixIcon" list={["info"]} /> If you are proficient with the weapon, you can use the notch in the wahaika to disarm your foes. Otherwise, treat this weapon as a <Link to="/eq-weapon/club">club</Link>. Feats and abilities that affect clubs apply to the wahaika.</p>
<Tabular format="weap1" a="3" b="3" d="s1d4~m1d6" e="x2" f="10" g="B" h={<><Link to="/misc/disarm">disarm</Link></>} i="one" j="E" k="Hammers" />
</>};
const _whip = {title: "Whip", topLink: ["One-Handed Weapons","main/equipment_weapons_one_handed"], jsx: <><h2 id="eq-weapon-whip-whip">Whip</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A whip deals no damage to any creature with an armor bonus of +1 or higher or a natural armor bonus of +3 or higher. The whip is treated as a melee weapon with a 15-foot reach, though you don't threaten the area into which you can make an attack. In addition, unlike most other weapons with reach, you can use it against foes anywhere within your reach (including adjacent foes).</p>
<p><Icons id="eq-weapon-whip-down-icons" wrapper="prefixIcon" list={["down"]} /> Using a whip provokes an attack of opportunity, just as if you had used a ranged weapon.</p>
<p><Icons id="eq-weapon-whip-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a whip sized for you, even though it isn't a light weapon. You can't wield a whip in two hands in order to apply 1&frac12; times your Strength modifier to damage rolls.</p>
<Tabular format="weap1" a="1" b="2" d="s1d2~m1d3" e="x2" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/nonlethal">nonlethal</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="one" j="E" k="Flails" />
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="eq-weapon-whip--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>The whip has the <Link to="/rule/equipment_errata"><em>agile</em> weapon quality</Link>.</p>
<p>You can apply your Dexterity modifier instead of your Strength modifier to attack rolls when wielding an agile weapon sized for you, even though it isn't a <Link to="/rule/finesse">finesse</Link> weapon.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _barbed_spear = {title: "Barbed spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-barbed_spear-barbed-spear">Barbed spear</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 24</Link></p>
<p>A barbed spear is a 10-foot-long polearm with a four-pronged head similar to a caltrop. The head is connected to the pole by a single weak bolt, giving the weapon the fragile condition.</p>
<p><Icons id="eq-weapon-barbed_spear-power-lower-down-icons" wrapper="prefixIcon" list={["power","lower","down"]} /> When you use a barbed spear to attack a creature that is <Link to="/rule/prone">prone</Link>, flying above you, or at least one size category larger than you, you can make a melee attack with a -4 penalty to jam the barbed head into the target's foot. If you're successful, the target takes 1 point of damage and the barbed head breaks off in the target's foot. The barb then acts as a <Link to="/eq-misc/caltrops">caltrop</Link>, wounding the creature's foot and halving its speed. This movement penalty lasts for 24 hours, or until the creature is treated with a successful DC 15 <Link to="/skill/heal">Heal</Link> check or receives at least 1 point of magical healing. Like caltrops, barbed spears may not work against unusual opponents. A barbed spear that embeds its caltrop-like head into a target's foot gains the <Link to="/misc/broken">broken</Link> condition, and can't be used as a weapon until it's repaired.</p>
<Tabular format="weap1" a="15" b="10" d="s1d4~m1d6" e="x2" f="x" g="P" h={<><Link to="/misc/fragile">fragile</Link>, <Link to="/misc/reach">reach</Link>, see text</>} i="two" j="E" />
</>};
const _battle_ladder_gnome = {title: "Battle ladder, gnome", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-battle_ladder_gnome-battle-ladder-gnome">Battle ladder, gnome</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>Gnomes use these narrow, reinforced, 4-foot ladders as weapons. Fighting with a battle ladder is like fighting with a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, except that the spaces in the ladder can be used to entangle limbs, granting the ladder the trip weapon feature.</p>
<Tabular format="weap1" a="20" b="8" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="B" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/trip">trip</Link>, see text</>} i="two" j="E" k="Double" />
</>};
const _bladed_scarf = {title: "Bladed scarf", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-bladed_scarf-bladed-scarf">Bladed scarf</h2>
<p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends pg. 14</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide pg. 13</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link></p>
<p>Knowing that seductive performances can bring out the worst in watchers, some Varisians craft rows of razor-sharp blades into their scarves. The skill required in using such scarves effectively and not revealing their deadly nature makes them exotic weapons.</p>
<p><Icons id="eq-weapon-bladed_scarf-def-icons" wrapper="prefixIcon" list={["def"]} /> If you are proficient with a bladed scarf, you deal 1d4 points of slashing damage to any creature that makes a successful <Link to="/rule/grapple">grapple</Link> check against you while you wield the scarf.</p>
<p><Icons id="eq-weapon-bladed_scarf-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier on attack rolls with a bladed scarf sized for you, even though it isn't a light weapon.</p>
<p>A bladed scarf has <Link to="/misc/reach">reach</Link>, so you can strike opponents 10 feet away with it. In addition, unlike most other weapons with reach, it can be used against an adjacent foe.</p>
<Tabular format="weap1" a="12" b="2" d="s1d4~m1d6" e="x2" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Flails" />
</>};
const _bo_staff = {title: "Bo staff", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-bo_staff-bo-staff">Bo staff</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 130</Link></p>
<p>Similar to a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>, only more slender and tapered at one end, the bo staff is both a defensive device and a weapon.</p>
<Tabular format="weap1" a="1" b="3" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="B" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/double">double</Link>, <Link to="/misc/monk">monk</Link></>} i="two" j="E" k="Double; Monk" />
</>};
const _boarding_gaff = {title: "Boarding gaff", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-boarding_gaff-boarding-gaff">Boarding gaff</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 19</Link></p>
<p>A boarding gaff, or gaff hook, is a long pole with a hook for spearing fish. Pirates often add extra, heavier hooks to both ends of boarding gaffs to assist with boarding actions, giving the weapon its common name. A boarding gaff can also be used for fishing.</p>
<Tabular format="weap1" a="8" b="8" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="P or S" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double; Polearms" />
</>};
const _butchering_axe = {title: "Butchering axe", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-butchering_axe-butchering-axe">Butchering axe</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link></p>
<p>A creation of the orc smiths of Belkzen, this axe has an oversized head bristling with spikes and a long, thick haft that only barely counterbalances its weight.</p>
<p><Icons id="eq-weapon-butchering_axe-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If your Strength is less than 19 (or 17 for a Small or smaller butchering axe), you take a -2 penalty on attacks with it, as you're unable to maneuver its daunting size and weight.</p>
<Tabular format="weap1" a="65" b="25" d="s1d12~m3d6" e="x3" f="x" g="S" h="see text" i="two" j="E" k="Axes" />
</>};
const _chain_spear = {title: "Chain spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-chain_spear-chain-spear">Chain spear</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/crown_of_the_kobold_king">Crown of the Kobold King pg. 17</Link>, <Link to="/source/revenge_of_the_kobold_king">Revenge of the Kobold King pg. 13</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link></p>
<p>This vicious weapon is often used in gladiatorial events due to its versatility. The body of the weapon is a standard <Link to="/eq-weapon/shortspear">shortspear</Link>, primarily used for thrusting. The butt of the spear is fitted with a length of chain, often spiked, with a hook at the end. The hook and chain may be used to make trip attacks. If your trip attack fails by 10 or more, you may drop the chain spear to avoid being knocked prone.</p>
<Tabular format="weap1" a="15" b="13" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="P and S" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double; Flails; Spears" />
</>};
const _chain_hammer = {title: "Chain-hammer", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-chain_hammer-chain-hammer">Chain-hammer</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link></p>
<p>This pair of hammers is linked by a loose chain. While the two hammers are balanced to wield in melee together, the chain is long enough that you can throw one hammer a short distance and then pull it back; pulling the chain to retrieve the thrown hammer is a <strong className="hl">move action</strong>. The chain-hammer's maximum throwing range is 10 feet. Dwarf rangers are fond of using chain-hammers, often using a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> to make sure one of the hammers remains secure.</p>
<Tabular format="weap1" a="34" b="8" d="s1d4/1d4~m1d6/1d6" e="x2" f="20" g="B" h={<><Link to="/misc/double">double</Link>, see text</>} i="two" j="E" k="Double; Hammers; Thrown" />
</>};
const _crook = {title: "Crook", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-crook-crook">Crook</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This common herder's tool is a wooden pole with a hooked end.</p>
<p><Icons id="eq-weapon-crook-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When using a crook, you can ignore the penalty for not having two hands free when making a combat maneuver check to initiate a <Link to="/rule/grapple">grapple</Link> against a creature you threaten.</p>
<Tabular format="weap1" a="1" b="5" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Polearms" />
</>};
const _dire_flail = {title: "Dire flail", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-dire_flail-dire-flail">Dire flail</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A dire flail consists of two spheres of spiked iron dangling from chains at opposite ends of a long haft. This weapon excels at short but powerful strikes, and is typically swung in a constant churning motion. The wielder of a dire flail must have great strength, both to use the weapon effectively and to keep from tiring out.</p>
<Tabular format="weap1" a="90" b="10" d="s1d6/1d6~m1d8/1d8" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/double">double</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double; Flails" />
</>};
const _dorn_dergar_dwarven = {title: "Dorn-dergar, dwarven", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-dorn_dergar_dwarven-dorn-dergar-dwarven">Dorn-dergar, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/dwarves_of_golarion">Dwarves of Golarion pg. 21</Link></p>
<p>This 10-foot-long chain is weighted at the end by a ball of solid iron the size of a large fist. By adjusting the slack of the chain, the weapon can be used either with or without reach. Changing between using it as a normal weapon and a reach weapon is a <strong className="hl">move action</strong>.</p>
<Tabular format="weap1" a="50" b="15" d="s1d8~m1d10" e="x2" f="x" g="B" h={<><Link to="/misc/reach">reach</Link>, see text</>} i="two" j="E" k="Flails" />
</>};
const _double_spear = {title: "Double spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-double_spear-double-spear">Double spear</h2>
<p><strong>Sources</strong> <Link to="/source/martial_arts_handbook">Martial Arts Handbook pg. 30</Link></p>
<p>This long, heavy spear has a point at each end, allowing it to be used as a double weapon.</p>
<Tabular format="weap1" a="25" b="12" d="s1d6/1d6~m1d8/1d8" e="x3" f="x" g="P" h={<><Link to="/misc/double">double</Link></>} i="two" j="E" k="Spears" />
</>};
const _double_chained_kama = {title: "Double-chained kama", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-double_chained_kama-double-chained-kama">Double-chained kama</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 131</Link></p>
<p>This weapon comprises a pair of <Link to="/eq-weapon/kama">kama</Link> connected with an 8-foot length of chain. The wielder can attack as if armed with a single kama in each hand or extend the chain to make a single reach attack. By swinging the chain, the wielder can whip the kama about to <Link to="/rule/disarm">disarm</Link> or <Link to="/rule/trip">trip</Link> opponents. Furthermore, if one of the weapons is dropped, the wielder can retrieve it as a <strong className="hl">free action</strong> by pulling on the chain.</p>
<Tabular format="weap1" a="8" b="4" d="s1d4/1d4~m1d6/1d6" e="x2" f="x" g="S" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/monk">monk</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double" />
</>};
const _dwarven_urgrosh = {title: "Dwarven urgrosh", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-dwarven_urgrosh-dwarven-urgrosh">Dwarven urgrosh</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A dwarven urgrosh is a double weapon: an axe head and a spear point on opposite ends of a long haft. The urgrosh's axe head is a slashing weapon that deals 1d8 points of damage. Its spear head is a piercing weapon that deals 1d6 points of damage. You can use either head as the primary weapon; the other becomes the <Link to="/rule/off_hand">off-hand</Link> weapon. If you use an urgrosh against a <Link to="/rule/charging">charging</Link> character, the spear head is the part of the weapon that deals damage. Dwarves treat dwarven urgroshes as martial weapons.</p>
<Tabular format="weap1" a="50" b="12" d="s1d6/1d4~m1d8/1d6" e="x3" f="x" g="P or S" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/double">double</Link></>} i="two" j="E" k="Double" />
</>};
const _elven_branched_spear = {title: "Elven branched spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-elven_branched_spear-elven-branched-spear">Elven branched spear</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>Behind this long pole weapon's spearhead, several short branches project from the shaft at irregular intervals, each angled forward and tipped with a smaller leaf like blade.</p>
<p><Icons id="eq-weapon-elven_branched_spear-boost-icons" wrapper="prefixIcon" list={["boost"]} /> When you make attacks of opportunity provoked by movement, you gain a +2 bonus on attack rolls. You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier on attack rolls with an elven branched spear sized for you, even though it isn't a light weapon. Elves treat elven branched spears as martial weapons.</p>
<Tabular format="weap1" a="20" b="10" d="s1d6~m1d8" e="x3" f="x" g="P" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="E" k="Spears" />
</>};
const _elven_curve_blade = {title: "Elven curve blade", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-elven_curve_blade-elven-curve-blade">Elven curve blade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>Essentially a longer version of a <Link to="/eq-weapon/scimitar">scimitar</Link>, but with a thinner blade, the elven curve blade is exceptionally rare.</p>
<p><Icons id="eq-weapon-elven_curve_blade-def-icons" wrapper="prefixIcon" list={["def"]} /> You receive a +2 circumstance bonus to your CMD whenever a foe attempts to <Link to="/rule/sunder">sunder</Link> your elven curve blade because of its flexible metal.</p>
<p><Icons id="eq-weapon-elven_curve_blade-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier on attack rolls with an elven curve blade that is sized for you, even though it isn't a light weapon.</p>
<Tabular format="weap1" a="80" b="7" d="s1d8~m1d10" e="r18x2" f="x" g="S" i="two" j="E" k="Blades, Heavy" />
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="eq-weapon-elven_curve_blade--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>The Elven curved blade has the <Link to="/rule/equipment_errata"><em>agile</em> weapon quality</Link>.</p>
<p>You can apply your Dexterity modifier instead of your Strength modifier to attack rolls when wielding an agile weapon sized for you, even though it isn't a <Link to="/rule/finesse">finesse</Link> weapon.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _fauchard = {title: "Fauchard", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-fauchard-fauchard">Fauchard</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 8</Link></p>
<p>Like a <Link to="/eq-weapon/glaive">glaive</Link>, the fauchard is a curved blade at the end of a pole. However, the cutting edge of a fauchard is along the concave side, like that of a <Link to="/eq-weapon/sickle">sickle</Link> or <Link to="/eq-weapon/scythe">scythe</Link>.</p>
<Tabular format="weap1" a="14" b="10" d="s1d8~m1d10" e="r18x2" f="x" g="S" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Polearms" />
</>};
const _flailpole = {title: "Flailpole", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-flailpole-flailpole">Flailpole</h2>
<p><strong>Sources</strong> <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>This is simply a <Link to="/eq-weapon/heavy_flail">heavy flail</Link> mounted on the end of a long polearm. It has the reach and trip weapon qualities.</p>
<Tabular format="weap1" a="15" b="10" d="s1d6~m1d8" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" />
</>};
const _flambard = {title: "Flambard", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-flambard-flambard">Flambard</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link></p>
<p>This two-handed sword has a wavy blade that is especially useful for cutting through wooden weapons.</p>
<p><Icons id="eq-weapon-flambard-boost-icons" wrapper="prefixIcon" list={["boost"]} /> If you are proficient with this weapon, you gain a +4 bonus on any <Link to="/rule/sunder">sunder</Link> attempts made against weapons with a wooden haft; otherwise you may use this sword as a <Link to="/eq-weapon/bastard_sword">bastard sword</Link>.</p>
<Tabular format="weap1" a="50" b="6" d="s1d8~m1d10" e="r19x2" f="x" g="S" h={<><Link to="/misc/sunder">sunder</Link></>} i="two" j="E" k="Blades, Heavy" />
</>};
const _flask_pike = {title: "Flask pike", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-flask_pike-flask-pike">Flask pike</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 24</Link></p>
<p>This pike has a hollow spot near its tip into which a flask can be strapped. If the flask is filled with an alchemical <Link to="/rule/splash_weapon">splash weapon</Link> and you hit a creature with the pike, the target is also hit with the splash weapon. This uses up the contents of the flask.</p>
<p><Icons id="eq-weapon-flask_pike-info-icons" wrapper="prefixIcon" list={["info"]} /> Because of the added weight of a flask, attacks with the flask pike take a -2 penalty when it's loaded with one. Reloading the flask pike is a <strong className="hl">full-round action</strong> that provokes attacks of opportunity.</p>
<Tabular format="weap1" a="30" b="9" d="s1d6~m1d8" e="x3" f="x" g="P" h={<><Link to="/misc/reach">reach</Link>, see text</>} i="two" j="E" />
</>};
const _flying_blade = {title: "Flying blade", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-flying_blade-flying-blade">Flying blade</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 144</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link></p>
<p>A flying blade is a large, crescent-shaped blade anchored to a 10-foot chain. You fight with a flying blade by spinning it about your head or by snapping it toward an opponent.</p>
<p><Icons id="eq-weapon-flying_blade-down-boost-icons" wrapper="prefixIcon" list={["down","boost"]} /> Because the flying blade is a clumsy weapon, you receive a -2 penalty on attack rolls with it, but when you make attacks of opportunity provoked by movement, you receive a +2 bonus on attack rolls instead of the penalty.</p>
<Tabular format="weap1" a="40" b="12" d="s1d10~m1d12" e="x3" f="x" g="S" h={<><Link to="/misc/performance">performance</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="E" k="Flails" />
</>};
const _garrote = {title: "Garrote", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-garrote-garrote">Garrote</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link></p>
<p>A garrote is a length of wire or thin rope with wooden handles at both ends. The wire is placed across a victim's throat and crossed behind the neck; when the handles are pulled tight, the garrote strangles him.</p>
<p><Icons id="eq-weapon-garrote-info-icons" wrapper="prefixIcon" list={["info"]} /> In order for you to use a garrote, your opponent must be <Link to="/misc/helpless">helpless</Link> or unaware of you. You must make a <Link to="/rule/grapple">grapple</Link> check (though you avoid the -4 penalty for not having two hands free) to successfully begin garroting your opponent. Sneak attack damage does not apply to a garrote. Your garroted opponent must make a <Link to="/rule/concentration">concentration</Link> check (DC 20 + your CMB + level of the spell he's casting) to cast a spell with a verbal component, use a command word item, or use any magic requiring speech. You gain the following additional option when grappling with a garrote.</p>
<Ability id="choke" extraClasses="indent" icon={["melee","lower"]}>
<Pair single id="choke">Choke</Pair>
<Pair title="Ability">You cut off your target's air supply so he has to hold his breath (see <Link to="/rule/suffocation">Suffocation</Link> and the <Link to="/skill/swim">Swim</Link> skill).</Pair>
<Pair title="Special">Any round you do not maintain the choke, your opponent can take a breath and restart when he has to begin making Constitution checks.</Pair>
</Ability>
<Tabular format="weap1" a="3" b="1" d="s1d4~m1d6" e="x2" f="x" g="S" h={<><Link to="/misc/grapple">grapple</Link>, see text</>} i="two" j="E" />
</>};
const _giant_sticker_dwarven = {title: "Giant-sticker, dwarven", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-giant_sticker_dwarven-giant-sticker-dwarven">Giant-sticker, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>This heavy bladed spear is specifically designed for use against giants, who have long reach and the ability to soak up large amounts of damage.</p>
<Tabular format="weap1" a="25" b="12" d="s1d8~m2d6" e="x3" f="x" g="P or S" h={<><Link to="/misc/brace">brace</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="E" k="Polearms" />
</>};
const _gnome_hooked_hammer = {title: "Gnome hooked hammer", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-gnome_hooked_hammer-gnome-hooked-hammer">Gnome hooked hammer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A gnome hooked hammer is a double weapon - an ingenious tool with a hammer head at one end of its haft and a long, curved pick at the other. The hammer's blunt head is a bludgeoning weapon that deals 1d6 points of damage (critical multiplier &times;3). Its hook is a piercing weapon that deals 1d4 points of damage (critical multiplier &times;4). You can use either head as the primary weapon. Gnomes treat hooked hammers as martial weapons.</p>
<Tabular format="weap1" a="20" b="6" d="s1d6/1d4~m1d8/1d6" e="&times;3/&times;4" f="x" g="B or P" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double" />
</>};
const _harpoon = {title: "Harpoon", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-harpoon-harpoon">Harpoon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 19</Link>, <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide pg. 6</Link></p>
<p>A harpoon is a barbed spear with an attached rope 50 feet or less in length. Most harpoons have metal points, but some use ivory or are made entirely of wood.</p>
<p><Icons id="eq-weapon-harpoon-info-icons" wrapper="prefixIcon" list={["info"]} /> If you are proficient with the harpoon, it is a grappling weapon. A harpoon's weight includes 10 pounds for the weight of 50 feet of <Link to="/eq-misc/hemp_rope">hemp rope</Link>. The weight can be reduced by using shorter or lighter rope. If you are not proficient with a harpoon, treat it like a <Link to="/eq-weapon/spear">spear</Link>.</p>
<Tabular format="weap1" a="5" b="16" d="s1d6~m1d8" e="x3" f="10" g="P" h={<><Link to="/misc/grapple">grapple</Link>, see text</>} i="two" j="E" k="Spears; Thrown" />
</>};
const _injection_spear = {title: "Injection spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-injection_spear-injection-spear">Injection spear</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_61_shards_of_sin">Pathfinder #61: Shards of Sin pg. 64</Link>, <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 8</Link></p>
<p>This exotic two-handed weapon allows the user to inject targets with liquid on a hit. The spear's reservoir can hold up to 5 doses of a single fluid - a single dose is automatically injected when the spear hits a target.</p>
<p><Icons id="eq-weapon-injection_spear-info-icons" wrapper="prefixIcon" list={["info"]} /> A non-proficient user can wield an injection spear as a standard <Link to="/eq-weapon/spear">spear</Link> but cannot trigger the injection. An injection spear is otherwise identical to a normal spear, save that it cannot be thrown, weighs 8 pounds, cannot be used to brace, and costs 60 gp.</p>
<Tabular format="weap1" a="60" b="8" d="s1d6~m1d8" e="x3" f="x" g="P" i="two" j="E" />
</>};
const _katana_double_walking_stick = {title: "Katana, double walking stick", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-katana_double_walking_stick-katana-double-walking-stick">Katana, double walking stick</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 132</Link></p>
<p>This single case conceals a pair of matched fighting swords perfectly balanced to be wielded as a pair. Despite their name, the blades more closely resemble the shorter <Link to="/eq-weapon/wakizashi">wakizashi</Link>. When drawn, the blades use the statistics listed below. When the blades are concealed in their case, this weapon can be used as a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link>.</p>
<Tabular format="weap1" a="50" b="6" d="s1d4~m1d6" e="r19x2" f="x" g="S" i="two" j="E" k="Double" />
</>};
const _kusarigama = {title: "Kusarigama", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-kusarigama-kusarigama">Kusarigama</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 20</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 132</Link></p>
<p>This weapon has a single <Link to="/eq-weapon/kama">kama</Link> or <Link to="/eq-weapon/sickle">sickle</Link> held in the off hand, attached by 10 feet of fine chain to a weighted metal ball. The sickle can be used to make trip attacks, jabs, and blocks, while the ball is whipped around at high speeds and then smashed into the opponent, or used to tangle an opponent's sword or spear, allowing the wielder to then attack with the sickle.</p>
<Tabular format="weap1" a="12" b="3" d="s1d2/1d4~m1d3/1d6" e="x2" f="x" g="S or B" h={<><Link to="/misc/double">double</Link>, <Link to="/misc/grapple">grapple</Link>, <Link to="/misc/monk">monk</Link>, <Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Double; Flails; Monk" />
</>};
const _kyoketsu_shoge = {title: "Kyoketsu shoge", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-kyoketsu_shoge-kyoketsu-shoge">Kyoketsu shoge</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 132</Link></p>
<p>This weapon consists of a foot-long double-edged blade, with another smaller, curved hook-blade sticking out the side like a rooster's spur. The blade is strung to a large iron hoop with a 10-foot length of <Link to="/eq-misc/rope">rope</Link>. The blade can be used as an <Link to="/rule/off_hand">off-handed</Link> melee weapon or thrown like a <Link to="/eq-weapon/dagger">dagger</Link>, while the rope and circlet can be whipped around and swung at opponents as a bludgeoning reach weapon.</p>
<Tabular format="weap1" a="6" b="1" d="s1d3~m1d4" e="x2" f="20" g="S or P" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/grapple">grapple</Link>, <Link to="/misc/monk">monk</Link>, <Link to="/misc/reach">reach</Link></>} i="two" j="E" k="Flails; Monk" />
</>};
const _longaxe_dwarven = {title: "Longaxe, dwarven", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-longaxe_dwarven-longaxe-dwarven">Longaxe, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 17</Link></p>
<p>These ornate and heavy blades are mounted atop a long, steel-shod haft for greater reach. They are rare among cave-dwelling dwarves but common in mountain dwarf clans that commonly feud with giants.</p>
<Tabular format="weap1" a="50" b="14" d="s1d10~m1d12" e="x3" f="x" g="S" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="E" />
</>};
const _longhammer_dwarven = {title: "Longhammer, dwarven", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-longhammer_dwarven-longhammer-dwarven">Longhammer, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 17</Link></p>
<p>These heavy-headed bludgeons are often carved or cast with monstrous faces or drilled with tiny holes to create a menacing whistling as they are swung through the air.</p>
<Tabular format="weap1" a="70" b="20" d="s1d10~m2d6" e="x3" f="x" g="B" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="E" />
</>};
const _mancatcher = {title: "Mancatcher", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-mancatcher-mancatcher">Mancatcher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 179</Link></p>
<p>This polearm consists of two curved metal bands that close around a target when you attack, allowing you to bind an opponent.</p>
<p><Icons id="eq-weapon-mancatcher-info-touch-icons" wrapper="prefixIcon" list={["info","touch"]} /> A mancatcher is built to capture a creature of a particular size category (such as Small or Medium) and doesn't work on creatures of the wrong size. Make a touch attack to hit an opponent and a combat maneuver check to <Link to="/rule/grapple">grapple</Link> him (without the -4 penalty for not having two hands free); success means you and the target are <Link to="/rule/grappled">grappled</Link>. Once the target is grappled, you can perform a <em>move</em> or <em>damage</em> grapple action against him.</p>
<p>The mancatcher has <Link to="/rule/hardness">hardness</Link> 10 and 5 hit points; breaking it requires a DC 26 Strength check. If you drop the mancatcher, the target can free himself as a <strong className="hl">standard action</strong>.</p>
<Tabular format="weap1" a="15" b="10" d="s1~m1d2" e="&mdash;" f="x" g="P" h={<><Link to="/misc/reach">reach</Link>, see text</>} i="two" j="E" k="Polearms" />
</>};
const _meteor_hammer = {title: "Meteor hammer", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-meteor_hammer-meteor-hammer">Meteor hammer</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 22</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 132</Link></p>
<p>This weapon consists of one or two spherical weights attached by a 10-foot chain. You whirl the weights and wrap them around an opponent's body. If you succeed at a <Link to="/rule/trip">trip</Link> attempt with a meteor hammer, you can drag your opponent 5 feet closer to you rather than knocking her <Link to="/rule/prone">prone</Link>.</p>
<p><Icons id="eq-weapon-meteor_hammer-info-icons" wrapper="prefixIcon" list={["info"]} /> You may use this weapon in two different ways: In meteor mode you use it as a <Link to="/misc/double">double</Link> weapon, while in fortress mode you cannot use it as a double weapon but gain reach and a +1 shield bonus to AC. Switching between these two modes is a <strong className="hl">free action</strong> decided at the start of your turn.</p>
<Tabular format="weap1" a="10" b="10" d="s1d6~m1d8" e="x2" f="x" g="B" h={<><Link to="/misc/reach">reach</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Flails" />
</>};
const _orc_double_axe = {title: "Orc double axe", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-orc_double_axe-orc-double-axe">Orc double axe</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A cruel weapon with blades placed at opposite ends of a long haft, an orc double axe is a double weapon. Though invented by and traditionally associated with orcs, the double axe can be crafted and wielded by other races as well, though many disdain it for its extreme weight and clumsiness. Because of the blades at either end of the axe, the wielder must hold an orc double axe in the middle of its haft, and utilize a weaving, slashing fighting style more akin to that of a <Link to="/eq-weapon/quarterstaff">quarterstaff</Link> than to that of a <Link to="/eq-weapon/greataxe">greataxe</Link> or <Link to="/eq-weapon/battleaxe">battleaxe</Link>.</p>
<Tabular format="weap1" a="60" b="15" d="s1d6/1d6~m1d8/1d8" e="x3" f="x" g="S" h={<><Link to="/misc/double">double</Link></>} i="two" j="E" k="Axes; Double" />
</>};
const _orc_skull_ram = {title: "Orc skull ram", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-orc_skull_ram-orc-skull-ram">Orc skull ram</h2>
<p><strong>Sources</strong> <Link to="/source/melee_tactics_toolbox">Melee Tactics Toolbox pg. 19</Link></p>
<p>This weapon consists of a wooden log with a shoulder strap to carry some of the weight. The name comes from the orc tradition of making the ram's head out of a large skull.</p>
<p><Icons id="eq-weapon-orc_skull_ram-melee-icons" wrapper="prefixIcon" list={["melee"]} /> On a successful critical hit with a skull ram, you can attempt a combat maneuver check to <Link to="/rule/bull_rush">bull rush</Link> your opponent as a <strong className="hl">free action</strong>.</p>
<Tabular format="weap1" a="15" b="20" d="s1d8~m1d10" e="x3" f="x" g="B" h={<><Link to="/misc/reach">reach</Link></>} i="two" j="E" k="Spears" />
</>};
const _piston_maul_gnome = {title: "Piston maul, gnome", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-piston_maul_gnome-piston-maul-gnome">Piston maul, gnome</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>An alchemically fired piston in the head of this two-handed hammer strikes targets with astounding force.</p>
<p><Icons id="eq-weapon-piston_maul_gnome-boost-icons" wrapper="prefixIcon" list={["boost"]} /> Successful <Link to="/rule/sunder">sunder</Link> attacks made with a piston maul deal an additional 4 points of damage.</p>
<p><Icons id="eq-weapon-piston_maul_gnome-info-icons" wrapper="prefixIcon" list={["info"]} /> A piston maul requires a <Link to="/eq-weapon/thunderstone">thunderstone</Link> to function; otherwise, it functions as a <Link to="/eq-weapon/greatclub">greatclub</Link>. Inserting a thunderstone into the weapon's compartment is a <strong className="hl">standard action</strong>, and powers the weapon for 24 hours, after which the thunderstone is consumed.</p>
<Tabular format="weap1" a="70" b="15" d="s1d8~m1d10" e="x2" f="x" g="B" h="see text" i="two" j="E" k="Hammers" />
</>};
const _ripsaw_glaive_gnome = {title: "Ripsaw glaive, gnome", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-ripsaw_glaive_gnome-ripsaw-glaive-gnome">Ripsaw glaive, gnome</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p><Icons id="eq-weapon-ripsaw_glaive_gnome-info-icons" wrapper="prefixIcon" list={["info"]} /> The blade of this glaive is serrated and mounted on an axle, around which a heavy cord is wrapped. When the cord is pulled as a <strong className="hl">move action</strong>, the blade spins rapidly for a number of rounds equal to your Strength bonus. While the blade is spinning, you gain a +2 bonus on damage rolls with the weapon. When the blade is not spinning, treat this weapon as a <Link to="/eq-weapon/glaive">glaive</Link>.</p>
<Tabular format="weap1" a="30" b="12" d="s1d8~m1d10" e="x3" f="x" g="S" h={<><Link to="/misc/reach">reach</Link>, see text</>} i="two" j="E" k="Polearms" />
</>};
const _seven_branched_sword = {title: "Seven-branched sword", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-seven_branched_sword-seven-branched-sword">Seven-branched sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>This unusual sword has a straight 2-foot-long blade with six shorter L-shaped blades protruding from it, three on each side in a staggered pattern. The shorter blades can be used to snag opponents' clothing or armor, or can target weapons in order to <Link to="/rule/disarm">disarm</Link> them.</p>
<p><Icons id="eq-weapon-seven_branched_sword-melee-lower-icons" wrapper="prefixIcon" list={["melee","lower"]} /> To snag armor or clothing, the attacker makes a <Link to="/rule/trip">trip</Link> attempt. If successful, the victim doesn't fall <Link to="/rule/prone">prone</Link>, but instead is snagged and stumbles forward, leaving the victim <Link to="/rule/flat_footed">flat-footed</Link> for the remainder of the round.</p>
<Tabular format="weap1" a="50" b="7" d="s1d8~m1d10" e="x3" f="x" g="S" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/monk">monk</Link></>} i="two" j="E" k="Blades, Heavy; Monk" />
</>};
const _sphinx_hammer_dwarven = {title: "Sphinx hammer, dwarven", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-sphinx_hammer_dwarven-sphinx-hammer-dwarven">Sphinx hammer, dwarven</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>The dwarven sphinx hammer is a long-handled hammer with a striking head that is artfully designed to look like a ram-headed <Link to="/monster/criosphinx">criosphinx</Link>. Most commonly found among the Pahmet, the dwarven sphinx hammer is balanced for use as both a melee weapon and a thrown weapon.</p>
<Tabular format="weap1" a="45" b="8" d="s1d8~m1d10" e="x3" f="20" g="B" i="two" j="E" k="Hammers; Thrown" />
</>};
const _spiked_chain = {title: "Spiked chain", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-spiked_chain-spiked-chain">Spiked chain</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A spiked chain is about 4 feet in length and covered in wicked barbs. Some have metal hoops to use as handgrips.</p>
<p><Icons id="eq-weapon-spiked_chain-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use the <Link to="/feat/weapon_finesse">Weapon Finesse</Link> feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a spiked chain sized for you, even though it isn't a light weapon.</p>
<Tabular format="weap1" a="25" b="10" d="s1d6~m2d4" e="x2" f="x" g="P" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Flails" />
<div className="sideNoteWrap singular optional elephant"><ScrollContainer id="eq-weapon-spiked_chain--table-0"><table><tbody><tr><ThLink scope="row" to="/rule/the_elephant_in_the_room"><IonIcon aria-label="The Elephant in the Room" icon="/icons/elephant.svg" /></ThLink><td><p><strong>Sources</strong> <Link to="/source/the_elephant_in_the_room_feat_taxes_in_pathfinder">The Elephant in the Room: Feat Taxes in Pathfinder</Link><br/>The spiked chain has the <Link to="/rule/equipment_errata"><em>agile</em> weapon quality</Link>.</p>
<p>You can apply your Dexterity modifier instead of your Strength modifier to attack rolls when wielding an agile weapon sized for you, even though it isn't a <Link to="/rule/finesse">finesse</Link> weapon.</p>
</td></tr></tbody></table></ScrollContainer></div></>};
const _switchscythe = {title: "Switchscythe", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-switchscythe-switchscythe">Switchscythe</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 23</Link></p>
<p>This <Link to="/eq-weapon/scythe">scythe</Link> has a spring-loaded blade that folds down into the weapon's handle. Opening the scythe blade is a <strong className="hl">swift action</strong>, and closing it again is a <strong className="hl">standard action</strong>.</p>
<p><Icons id="eq-weapon-switchscythe-def-icons" wrapper="prefixIcon" list={["def"]} /> You can use <Link to="/skill/bluff">Bluff</Link> or <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> to treat a closed switchscythe as a hidden weapon; the apparatus can be disguised with 1 minute of work, which grants a +5 bonus on such checks. This disguise is ruined when the weapon is opened and must be reapplied to hide the weapon again.</p>
<p><Icons id="eq-weapon-switchscythe-info-icons" wrapper="prefixIcon" list={["info"]} /> Any effects that apply to a scythe also apply to a switchscythe.</p>
<Tabular format="weap1" a="18" b="10" d="s1d6~m2d4" e="x4" f="x" g="P or S" h={<><Link to="/misc/trip">trip</Link></>} i="two" j="E" k="Blades, Heavy" />
</>};
const _tetsubo = {title: "Tetsubo", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-tetsubo-tetsubo">Tetsubo</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 134</Link></p>
<p>A slight improvement over the <Link to="/eq-weapon/greatclub">greatclub</Link>, this weapon consists of a long, slender length of wood or metal whose upper half is shod with a thick sheet of studded iron. The iron gives added weight and strength to the club, while the studs are designed to crack helmets and armor.</p>
<Tabular format="weap1" a="20" b="10" d="s1d8~m1d10" e="x4" f="x" g="B" i="two" j="E" k="Hammers" />
</>};
const _totem_spear = {title: "Totem spear", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-totem_spear-totem-spear">Totem spear</h2>
<p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends pg. 14</Link>, <Link to="/source/pathfinder_10_a_history_of_ashes">Pathfinder #10: A History of Ashes pg. 35</Link></p>
<p>Favored by the Shoanti of the Sklar-Quah, totem spears combine deadly weapons with the mournful music of Varisia's displaced natives. The shovel-like heads of these broad spears are decorated with variously oriented hollows.</p>
<p><Icons id="eq-weapon-totem_spear-power-icons" wrapper="prefixIcon" list={["power"]} /> In addition to its use as a weapon, a totem spear can be played using the <Link to="/skill/perform">Perform</Link> (wind) skill.</p>
<Tabular format="weap1" a="25" b="6" d="s1d8~m1d10" e="x3" f="10" g="P or B" i="two" j="E" />
</>};
const _two_bladed_sword = {title: "Two-bladed sword", topLink: ["Two-Handed Weapons","main/equipment_weapons_two_handed"], jsx: <><h2 id="eq-weapon-two_bladed_sword-two-bladed-sword">Two-bladed sword</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link></p>
<p>A two-bladed sword is a double weapon-twin blades extend from either side of a central, short haft, allowing the wielder to attack with graceful but deadly flourishes.</p>
<Tabular format="weap1" a="100" b="10" d="s1d6/1d6~m1d8/1d8" e="r19x2" f="x" g="S" h={<><Link to="/misc/double">double</Link></>} i="two" j="E" k="Blades, Heavy; Double" />
</>};
const _bolas = {title: "Bolas", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-bolas-bolas">Bolas</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>A bolas is a pair of wooden, stone, or metal weights connected by a thin rope or cord. You can whirl and throw this weapon to make a ranged trip attack against an opponent. You can't be tripped during your own trip attempt when using a bolas.</p>
<Tabular format="weap1" a="5" b="2" d="s1d3~m1d4" e="x2" f="10" g="B" h={<><Link to="/misc/nonlethal">nonlethal</Link>, <Link to="/misc/trip">trip</Link></>} i="ranged" j="E" k="Thrown" />
</>};
const _boomerang = {title: "Boomerang", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-boomerang-boomerang">Boomerang</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 2</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 176</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>The boomerang is primarily a hunting tool, but it is not uncommon for these versatile thrown weapons to be carried into battle. A boomerang is made of wood and is flat, with a long haft, a pronounced forward curve, and a sharp backward bend at the head. A hunting boomerang does not fly in a returning path.</p>
<Tabular format="weap1" a="3" b="3" d="s1d4~m1d6" e="x2" f="30" g="B" h="see text" i="ranged" j="E" k="Thrown" />
</>};
const _crystal_chakram = {title: "Crystal chakram", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-crystal_chakram-crystal-chakram">Crystal chakram</h2>
<p><strong>Sources</strong> <Link to="/source/classic_horrors_revisited">Classic Horrors Revisited pg. 8</Link></p>
<p>Shaped and carved from quartz or stranger subterranean crystals, these circular throwing discs have jagged razor-sharp edges.</p>
<p><Icons id="eq-weapon-crystal_chakram-info-icons" wrapper="prefixIcon" list={["info"]} /> When a crystal chakram strikes a foe, the weapon shatters into tiny sharp fragments; if it misses, there is a 50% chance the chakram shatters when it hits the ground or another solid object; otherwise it can be retrieved and used again. A crystal chakram is treated as ammunition for the purpose of creating magic weapons.</p>
<Tabular format="weap1" a="20" b="2" d="s1d4~m1d6" e="r18x2" f="x" g="S" i="ranged" j="E" />
</>};
const _dire_bolas = {title: "Dire bolas", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-dire_bolas-dire-bolas">Dire bolas</h2>
<p><strong>Sources</strong> <Link to="/source/giant_hunters_handbook">Giant Hunter's Handbook pg. 24</Link></p>
<p>This specialized <Link to="/eq-weapon/bolas">bolas</Link> can be used to perform ranged <Link to="/rule/trip">trip</Link> combat maneuvers against creatures far larger than the wielder. It consists of a pair of metal weights connected by a <Link to="/eq-misc/silk_rope">silk rope</Link> 20 feet long.</p>
<p><Icons id="eq-weapon-dire_bolas-info-icons" wrapper="prefixIcon" list={["info"]} /> Because of the great size and weight of the bolas, you need both hands to swing it around your head, and considerable time to get the weights up to speed. Making a ranged attack with it is a <strong className="hl">full-round action</strong>. You can use a dire bolas to trip a creature whose size is up to three size categories larger than yours.</p>
<Tabular format="weap1" a="20" b="4" d="s1d4~m1d6" e="x2" f="10" g="B" h={<><Link to="/misc/nonlethal">nonlethal</Link>, <Link to="/misc/trip">trip</Link></>} i="ranged" j="E" />
</>};
const _double_crossbow = {title: "Double crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-double_crossbow-double-crossbow">Double crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/classic_monsters_revisited">Classic Monsters Revisited pg. 42</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 18</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This heavy weapon fires a pair of iron-tipped bolts with a single squeeze of the trigger.</p>
<p><Icons id="eq-weapon-double_crossbow-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Because of its size and weight, you take a -4 penalty on your attack roll if you're proficient with it, or -8 if you're not.</p>
<p><Icons id="eq-weapon-double_crossbow-info-icons" wrapper="prefixIcon" list={["info"]} /> If the attack hits, the target takes damage from both bolts. Critical hits, <Link to="/ability/sneak_attack">sneak attack</Link> damage, and other <Link to="/misc/precision_damage">precision-based damage</Link> apply to only the first bolt. Reloading one bolt is a <strong className="hl">standard action</strong>; the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat reduces this to a <strong className="hl">move action</strong>. <Link to="/feat/crossbow_mastery">Crossbow Mastery</Link> allows you to reload both bolts as a <strong className="hl">move action</strong>. A double crossbow fires <Link to="/eq-weapon/crossbow_bolts">crossbow bolts</Link>.</p>
<Tabular format="weap1" a="300" b="18" d="s1d6~m1d8" e="r19x2" f="80" g="P" h="see text" i="ranged" j="E" k="Crossbows" />
</>};
const _flask_thrower = {title: "Flask thrower", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-flask_thrower-flask-thrower">Flask thrower</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>This staff has a cradle at the end, designed to hold alchemical weapons such as <Link to="/eq-weapon/acid">acid</Link>. A flask thrower significantly extends the range of thrown substances that deal splash damage, such as acid, <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link>, or <Link to="/eq-weapon/holy_water">holy water</Link>, as well as that of tools such as <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bags</Link>, <Link to="/eq-weapon/thunderstone">thunderstones</Link>, or <Link to="/eq-misc/caltrops">caltrops</Link>.</p>
<Tabular format="weap1" a="25" b="4" d="s-~m-" e="&mdash;" f="20" g="&mdash;" h="see text" i="ranged" j="E" k="Thrown" />
</>};
const _grappling_hook = {title: "Grappling hook", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-grappling_hook-grappling-hook">Grappling hook</h2>
<p><strong>Sources</strong> <Link to="/source/pirates_of_the_inner_sea">Pirates of the Inner Sea pg. 19</Link>, <Link to="/source/skull_and_shackles_players_guide">Skull and Shackles Player's Guide pg. 6</Link></p>
<p>A grappling hook is usually thought of as a climbing instrument, but is also used to grapple enemy ships and draw them close before a boarding action.</p>
<p>Grappling hooks bite deeply into the wood of the railing. It takes 1 minute to pry a grappling hook free. The rope attached to a grappling hook can be cut, but pirates often target the rigging and masts to make it difficult to remove the hooks. Tying off the rope of a grappling hook is a <strong className="hl">move action</strong>.</p>
<p><Icons id="eq-weapon-grappling_hook-info-icons" wrapper="prefixIcon" list={["info"]} /> A grappling hook can also be used as a ranged weapon. If you are proficient in the grappling hook, it is a grappling weapon. On a successful critical hit with a weapon of this type, you can grapple the target of the attack. You can attempt a combat maneuver check to grapple your opponent as a <strong className="hl">free action</strong>. This grapple attempt does not provoke an attack of opportunity from the creature you are attempting to grapple if that creature is not threatening you. While you grapple the target with a grappling weapon, you can only move or damage the creature on your turn. You are still considered <Link to="/rule/grappled">grappled</Link>, though you do not have to be adjacent to the creature to continue the grapple. If you move far enough away to be out of the weapon's reach, the grapple ends.</p>
<p>A grappling hook's weight includes the weight of 50 feet of <Link to="/eq-misc/hemp_rope">hemp rope</Link>. It can be reduced by using shorter or lighter rope.</p>
<Tabular format="weap1" a="6" b="14" d="s1d4~m1d6" e="x2" f="10" g="P" h={<><Link to="/misc/grapple">grapple</Link></>} i="ranged" j="E" />
</>};
const _halfling_double_sling = {title: "Halfling double sling", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-halfling_double_sling-halfling-double-sling">Halfling double sling</h2>
<p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion pg. 22</Link></p>
<p>At first glance resembling a baton-like stick with a sling dangling from each end, this weapon requires extraordinary skill, or <Link to="/race/halfling">halfling</Link> acrobatics, to use to full effect.</p>
<p><Icons id="eq-weapon-halfling_double_sling-info-icons" wrapper="prefixIcon" list={["info"]} /> You can use a double sling as a normal <Link to="/eq-weapon/sling">sling</Link>, or use the second end to make one additional ranged attack each round. You take the normal penalties for <Link to="/rule/fighting_with_two_weapons">fighting with two weapons</Link> when you use both ends of a double sling (as if it were a double weapon); the <Link to="/feat/two_weapon_fighting">Two-Weapon Fighting</Link> feat reduces these penalties as normal.</p>
<p><Icons id="eq-weapon-halfling_double_sling-info-icons" wrapper="prefixIcon" list={["info"]} /> Reloading one end of a double sling is a <strong className="hl">move action</strong> (just like a normal sling), so unless you have an ability or feat (such as <Link to="/feat/ammo_drop">Ammo Drop</Link>) that allows you to quickly reload a sling, you cannot normally make multiple attacks per round for several consecutive rounds with this weapon.</p>
<p><Icons id="eq-weapon-halfling_double_sling-warning-icons" wrapper="prefixIcon" list={["warning"]} /> You can hurl ordinary stones with a double sling, but stones are not as dense or as round as bullets. Thus, such an attack deals damage as if the weapon were designed for a creature <Link to="/misc/one_size_category_smaller">one size category smaller</Link> than you, and you take a -1 penalty on attack rolls.</p>
<Tabular format="weap1" a="10" b="1" d="s1d3~m1d4" e="x2" f="50" g="B" h={<><Link to="/misc/double">double</Link> (see text)</>} i="ranged" j="E" />
</>};
const _halfling_sling_staff = {title: "Halfling sling staff", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-halfling_sling_staff-halfling-sling-staff">Halfling sling staff</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>Made from a specially designed <Link to="/eq-weapon/sling">sling</Link> attached to a short <Link to="/eq-weapon/club">club</Link>, a halfling sling staff can be used by a proficient wielder to devastating effect.</p>
<p><Icons id="eq-weapon-halfling_sling_staff-info-icons" wrapper="prefixIcon" list={["info"]} /> Your Strength modifier applies to damage rolls when you use a halfling sling staff, just as it does for thrown weapons. You can fire, but not load, a halfling sling staff with one hand. Loading a halfling sling staff is a <strong className="hl">move action</strong> that requires two hands and provokes attacks of opportunity.</p>
<p><Icons id="eq-weapon-halfling_sling_staff-warning-icons" wrapper="prefixIcon" list={["warning"]} /> A halfling sling staff fires <Link to="/eq-weapon/sling_bullet">sling bullets</Link>. You can hurl ordinary stones with a halfling sling staff, but stones are not as dense or as round as bullets. Thus, such an attack deals damage as if the weapon were designed for a creature <Link to="/misc/one_size_category_smaller">one size category smaller</Link> than you and you take a -1 penalty on attack rolls.</p>
<p><Icons id="eq-weapon-halfling_sling_staff-info-icons" wrapper="prefixIcon" list={["info"]} /> A halfling sling staff can be used as a simple weapon that deals bludgeoning damage equal to that of a <Link to="/eq-weapon/club">club</Link> of its size. <Link to="/race/halfling">Halflings</Link> treat halfling sling staves as martial weapons.</p>
<Tabular format="weap1" a="20" b="3" d="s1d6~m1d8" e="x3" f="80" g="B" i="ranged" j="E" k="Thrown" />
</>};
const _halfling_stitched_sling = {title: "Halfling stitched sling", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-halfling_stitched_sling-halfling-stitched-sling">Halfling stitched sling</h2>
<p><strong>Sources</strong> <Link to="/source/halflings_of_golarion">Halflings of Golarion pg. 22</Link></p>
<p>Technically not a unique kind of weapon, a stitched sling is a <Link to="/eq-weapon/sling">sling</Link>, <Link to="/eq-weapon/sling_staff">sling staff</Link>, or <Link to="/eq-weapon/double_sling">double sling</Link> whose cup is sewn closed around the ammunition, creating a weak sort of <Link to="/eq-weapon/light_flail">light flail</Link>. The ammunition sewn into the sling is irrelevant to the type and amount of damage it causes. A stitched sling cannot be used to fire ammunition unless the thread or cord holding the cup closed is cut open (a <strong className="hl">full-round action</strong> that provokes attacks of opportunity).</p>
<Tabular format="weap1" a="0" b="1" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/disarm">disarm</Link>, <Link to="/misc/trip">trip</Link></>} i="ranged" j="E" />
</>};
const _hand_crossbow = {title: "Hand crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-hand_crossbow-hand-crossbow">Hand crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>You can draw a hand crossbow back by hand. Loading a hand crossbow is a <strong className="hl">move action</strong> that provokes attacks of opportunity. A hand crossbow fires standard <Link to="/eq-weapon/crossbow_bolts">crossbow bolts</Link>, like those used by light and heavy <Link to="/eq-weapon/crossbow">crossbows</Link>.</p>
<p><Icons id="eq-weapon-hand_crossbow-info-icons" wrapper="prefixIcon" list={["info"]} /> You can shoot, but not load, a hand crossbow with one hand at no penalty. You can shoot a hand crossbow with each hand, but you take a penalty on attack rolls as if attacking with <Link to="/rule/two_weapon_fighting">two light weapons</Link>.</p>
<Tabular format="weap1" a="100" b="2" d="s1d3~m1d4" e="r19x2" f="30" g="P" i="ranged" j="E" k="Crossbows" />
</>};
const _heavy_crank_crossbow = {title: "Heavy crank crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-heavy_crank_crossbow-heavy-crank-crossbow">Heavy crank crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 18</Link></p>
<p>This <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link> has a winch mounted below the stock.</p>
<p><Icons id="eq-weapon-heavy_crank_crossbow-info-icons" wrapper="prefixIcon" list={["info"]} /> Up to 50 feet of <Link to="/eq-misc/silk_rope">silk rope</Link> can be wound onto the winch as a <strong className="hl">full-round action</strong> that provokes attacks of opportunity. The wound rope can be attached to a <Link to="/eq-weapon/barbed_bolt">barbed bolt</Link> or <Link to="/eq-misc/grappling_bolt">grappling bolt</Link> as part of a loading action. After firing such a bolt, the wielder can use the winch to retract the rope or pull herself along the rope if the bolt is secure. When used with a barbed bolt, the winch provides a +2 bonus on grapple combat maneuver checks to pull the target toward you. When used with a grappling bolt, the winch provides a +2 bonus on <Link to="/skill/climb">Climb</Link> checks.</p>
<Tabular format="weap1" a="400" b="12" d="s1d8~m1d10" e="r19x2" f="120" g="P" i="ranged" j="E" />
</>};
const _heavy_slavers_crossbow = {title: "Heavy slaver's crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-heavy_slavers_crossbow-heavy-slavers-crossbow">Heavy slaver's crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 45</Link></p>
<p>This crossbow shoots ammunition called <Link to="/eq-weapon/bolas_bolts">bolas bolts</Link> instead of crossbow bolts. It comes in both <Link to="/eq-weapon/light_slavers_crossbow">light</Link> and heavy varieties (but not double, hand, or repeating crossbow varieties) with the same reload action as a conventional crossbow of its type.</p>
<Tabular format="weap1" a="400" b="12" d="s1d6~m1d8" e="19-20/see &amp;quotbolas bolts&quot; text" f="80" g="B" h={<><Link to="/misc/nonlethal">nonlethal</Link>, <Link to="/misc/trip">trip</Link>, see text</>} i="ranged" j="E" />
</>};
const _heavy_wrist_launcher = {title: "Heavy wrist launcher", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-heavy_wrist_launcher-heavy-wrist-launcher">Heavy wrist launcher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 232</Link></p>
<p>A larger version of the <Link to="/eq-weapon/wrist_launcher">wrist launcher</Link>, this device fires a single <Link to="/eq-weapon/crossbow_bolts">crossbow bolt</Link> instead of a featherweight dart. If you are proficient with <Link to="/eq-weapon/hand_crossbow">hand crossbows</Link>, you are also proficient with heavy wrist launchers.</p>
<Tabular format="weap1" a="250" b="2" d="s1d3~m1d4" e="r19x2" f="30" g="P" i="ranged" j="E" />
</>};
const _hornbow_orc = {title: "Hornbow, orc", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-hornbow_orc-hornbow-orc">Hornbow, orc</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 8</Link></p>
<p>Larger even than a <Link to="/eq-weapon/longbow">longbow</Link>, these bows are often made from the horns of great beasts. Though they have a shorter range than other bows, their greater destructive power is highly favored by orcs and their kin. All hornbows are <Link to="/eq-weapon/composite_bow">composite bows</Link> and can be modified to benefit from high Strength scores in the same way as other composite bows. Any effect that applies to both longbows and <Link to="/eq-weapon/shortbow">shortbows</Link> also applies to hornbows.</p>
<Tabular format="weap1" a="130 gp (+0), 260 gp (+1), 390 gp (+2), 520 gp (+3), and so on" b="7 lbs." c="x" d="s1d8~m2d6" e="x3" f="80" g="P" i="ranged" j="E" k="Bows" />
<blockquote>
<p><strong className="hl">Note:</strong> The cost for a +0 orc hornbow was given as 130 gp, but the cost for upgraded hornbows was not given in the original source. A composite longbow +0 costs 100 gp and gains +1 for every additional 100 gp. A composite shortbow costs 75 gp and gains +1 for every additional 75 gp. The similar <Link to="/eq-weapon/spear_sling">spear-sling</Link> and <Link to="/eq-weapon/horse_bow">horse bow</Link> follow this same formula. Therefore, the orc hornbow was given a +1 modifier of +130 gp. As always, consult your GM for a final ruling.</p>
</blockquote>
</>};
const _horse_bow = {title: "Horse bow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-horse_bow-horse-bow">Horse bow</h2>
<p><strong>Sources</strong> <Link to="/source/merchants_manifest">Merchant's Manifest pg. 24</Link></p>
<p>The horse bow functions like a <Link to="/eq-weapon/composite_longbow">composite longbow</Link>, but it is designed to be used on horseback. A rider using a horse bow can make ranged attacks while mounted; furthermore, she does not take a penalty to attack rolls when her mount is taking a double move action, and she takes only a -4 penalty on attack rolls when her mount is running. Each point of Strength bonus granted by the horse bow adds 150 gp to its cost.</p>
<Tabular format="weap1" a="150 gp (+0), 300 gp (+1), 450 gp (+2), and so on" b="3 lbs." c="x" d="s1d6~m1d8" e="x3" f="110" g="P" i="ranged" j="E" />
</>};
const _kestros = {title: "Kestros", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-kestros-kestros">Kestros</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>The kestros is an oddly shaped Bronze Age <Link to="/eq-weapon/sling">sling</Link> used for launching <Link to="/eq-weapon/kestros_dart">kestros darts</Link>. Your Strength modifier applies on damage rolls when you use a kestros, just as it does for thrown weapons.</p>
<p><Icons id="eq-weapon-kestros-info-icons" wrapper="prefixIcon" list={["info"]} /> You can fire - but not load - a kestros with one hand. Loading a kestros is a <strong className="hl">move action</strong> that requires two hands and provokes attacks of opportunity. <Link to="/race/halfling">Halflings</Link> treat the kestros as a martial weapon.</p>
<Tabular format="weap1" a="1" b="1" d="s1d6~m1d8" e="x3" f="50" g="P" i="ranged" j="E" k="Thrown" />
</>};
const _lasso = {title: "Lasso", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-lasso-lasso">Lasso</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 3</Link>, <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 178</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This thrown weapon is a length of <Link to="/eq-misc/rope">rope</Link> with a simple open knot on one end that allows you entangle a foe like you would using a <Link to="/eq-weapon/net">net</Link>. The DC to cast a spell while <Link to="/rule/entangled">entangled</Link> with a lasso is 10 + the spell level being cast. An entangled creature can slip free with a successful DC 15 <Link to="/skill/escape_artist">Escape Artist</Link> check as a <strong className="hl">full-round action</strong>. The lasso has 2 hit points and AC 10, and requires a DC 23 Strength check to break it. On a successful hit, the lasso tightens; to use it again you must spend a <strong className="hl">standard action</strong> sliding the knot to enlarge the loop.</p>
<Tabular format="weap1" a="0.1" b="5" d="s-~m-" e="&mdash;" f="x" g="&mdash;" h="see text" i="ranged" j="E" k="Thrown" />
</>};
const _launching_crossbow = {title: "Launching crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-launching_crossbow-launching-crossbow">Launching crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 4</Link></p>
<p>This stubby-looking <Link to="/eq-weapon/crossbow">crossbow</Link> has a cup-like attachment rather than a groove for a bolt. It is designed to launch <Link to="/rule/splash_weapon">splash weapons</Link>. Loading a launching crossbow is a <strong className="hl">full-round action</strong>.</p>
<Tabular format="weap1" a="75" b="8" d="s-~m-" e="&mdash;" f="30" g="&mdash;" i="ranged" j="E" k="Crossbows" />
</>};
const _light_crank_crossbow = {title: "Light crank crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-light_crank_crossbow-light-crank-crossbow">Light crank crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 18</Link></p>
<p>This weapon functions as a <Link to="/eq-weapon/heavy_crank_crossbow">heavy crank crossbow</Link>, except that its damage, critical, and range values are equivalent to those of a <Link to="/eq-weapon/light_crossbow">light crossbow</Link>. Its lighter construction means it provides only a +1 bonus on <Link to="/skill/climb">Climb</Link> checks and <Link to="/rule/grapple">grapple</Link> combat maneuver checks to pull the target toward you.</p>
<Tabular format="weap1" a="250" b="6" d="s1d6~m1d8" e="r19x2" f="80" g="P" i="ranged" j="E" />
</>};
const _light_slavers_crossbow = {title: "Light slaver's crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-light_slavers_crossbow-light-slavers-crossbow">Light slaver's crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/monster_codex">Monster Codex pg. 45</Link></p>
<p>This crossbow shoots ammunition called <Link to="/eq-weapon/bolas_bolts">bolas bolts</Link> instead of crossbow bolts. It comes in both light and <Link to="/eq-weapon/heavy_slavers_crossbow">heavy</Link> varieties (but not double, hand, or repeating crossbow varieties) with the same reload action as a conventional crossbow of its type.</p>
<Tabular format="weap1" a="250" b="6" d="s1d3~m1d4" e="19-20/see &amp;quotbolas bolts&quot; text" f="40" g="B" h={<><Link to="/misc/nonlethal">nonlethal</Link>, <Link to="/misc/trip">trip</Link>, see text</>} i="ranged" j="E" />
</>};
const _net = {title: "Net", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-net-net">Net</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>A net is used to entangle enemies.</p>
<p><Icons id="eq-weapon-net-zap-icons" wrapper="prefixIcon" list={["zap"]} /> When you throw a net, you make a ranged touch attack against your target. A net's maximum range is 10 feet. If you hit, the target is <Link to="/rule/entangled">entangled</Link>. An entangled creature takes a -2 penalty on attack rolls and a -4 penalty to Dexterity, can move at only half speed, and cannot charge or run.</p>
<p><Icons id="eq-weapon-net-lower-icons" wrapper="prefixIcon" list={["lower"]} /> If you control the trailing rope by succeeding at an opposed Strength check while holding it, the entangled creature can move only within the limits that the rope allows. If the entangled creature attempts to cast a spell, it must succeed at a <Link to="/rule/concentration">concentration</Link> check with a DC of 15 + the spell's level or be unable to cast the spell.</p>
<p>An entangled creature can escape with a successful DC 20 <Link to="/skill/escape_artist">Escape Artist</Link> check (a <strong className="hl">full-round action</strong>). The net has 5 hit points and can be burst with a successful DC 25 Strength check (also a <strong className="hl">full-round action</strong>). A net is useful only against creatures within one size category of you.</p>
<p><Icons id="eq-weapon-net-warning-icons" wrapper="prefixIcon" list={["warning"]} /> A net must be folded to be thrown effectively. The first time you throw your net in a fight, you make a normal ranged touch attack roll. After the net is unfolded, you take a -4 penalty on attack rolls with it. It takes 2 rounds for a proficient user to fold a net and twice that long for a nonproficient one to do so.</p>
<Tabular format="weap1" a="20" b="6" d="s-~m-" e="&mdash;" f="10" g="&mdash;" h="see text" i="ranged" j="E" k="Thrown" />
</>};
const _pelletbow_dwarven_heavy = {title: "Pelletbow, dwarven heavy", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-pelletbow_dwarven_heavy-pelletbow-dwarven-heavy">Pelletbow, dwarven heavy</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>The dwarven pelletbow is a crossbow-like weapon that is loaded with and fires <Link to="/eq-weapon/sling_bullet">sling bullets</Link> rather than bolts. A dwarven heavy pelletbow takes the same amount of time and effort to load as a <Link to="/eq-weapon/light_crossbow">light crossbow</Link> (normally a <strong className="hl">move action</strong>).</p>
<p><Icons id="eq-weapon-pelletbow_dwarven_heavy-info-icons" wrapper="prefixIcon" list={["info"]} /> Normally a pelletbow takes two hands to operate, but you can shoot (but not load) a pelletbow with one hand by taking a -2 penalty on attack rolls. You can shoot one pelletbow with each hand, but you take a penalty on attack rolls for <Link to="/rule/attacking_with_two_weapons">attacking with two weapons</Link> (treating the heavy pelletbow as a one-handed weapon).</p>
<p>Feats and special abilities that don't involve proficiency (that don't depend on dealing piercing damage or firing bolts) that apply to a <Link to="/eq-weapon/heavy_crossbow">heavy crossbow</Link> also apply to a dwarven heavy pelletbow.</p>
<Tabular format="weap1" a="75" b="8" d="s1d4~m1d6" e="r19x3" f="60" g="B" i="ranged" j="E" k="Crossbows" />
</>};
const _pelletbow_dwarven_light = {title: "Pelletbow, dwarven light", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-pelletbow_dwarven_light-pelletbow-dwarven-light">Pelletbow, dwarven light</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_from_the_fringe">Heroes from the Fringe pg. 8</Link></p>
<p>The dwarven pelletbow is a crossbow-like weapon that is loaded with and fires <Link to="/eq-weapon/sling_bullet">sling bullets</Link> rather than bolts. A dwarven light pelletbow can be reloaded as a <strong className="hl">free action</strong> (allowing characters to attack with it multiple times in a round).</p>
<p><Icons id="eq-weapon-pelletbow_dwarven_light-info-icons" wrapper="prefixIcon" list={["info"]} /> Normally a pelletbow takes two hands to operate, but you can shoot (but not load) a pelletbow with one hand by taking a -2 penalty on attack rolls. You can shoot one pelletbow with each hand, but you take a penalty on attack rolls for <Link to="/rule/attacking_with_two_weapons">attacking with two weapons</Link> (treating the light pelletbow as a light weapon).</p>
<p>Feats and special abilities that don't involve proficiency (that don't depend on dealing piercing damage or firing bolts) that apply to a light crossbow also apply to a dwarven light pelletbow.</p>
<Tabular format="weap1" a="50" b="4" d="s1d3~m1d4" e="r19x3" f="40" g="B" i="ranged" j="E" k="Crossbows" />
</>};
const _repeating_hand_crossbow = {title: "Repeating hand crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-repeating_hand_crossbow-repeating-hand-crossbow">Repeating hand crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This weapon functions identically to a <Link to="/eq-weapon/repeating_heavy_crossbow">repeating heavy crossbow</Link>, except its damage, critical, and range values are equivalent to those of a <Link to="/eq-weapon/hand_crossbow">hand crossbow</Link> instead.</p>
<Tabular format="weap1" a="800" b="4" d="s1d3~m1d4" e="r19x2" f="30" g="P" i="ranged" j="E" k="Crossbows" />
</>};
const _repeating_heavy_crossbow = {title: "Repeating heavy crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-repeating_heavy_crossbow-repeating-heavy-crossbow">Repeating heavy crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>The repeating heavy crossbow holds 5 <Link to="/eq-weapon/repeating_crossbow_bolts">repeating crossbow bolts</Link>. As long as it holds bolts, you can reload it by pulling the reloading lever (a <strong className="hl">free action</strong>). Loading a new case of 5 bolts is a <strong className="hl">full-round action</strong> that provokes attacks of opportunity.</p>
<p><Icons id="eq-weapon-repeating_heavy_crossbow-info-icons" wrapper="prefixIcon" list={["info"]} /> You can fire a repeating crossbow with one hand or fire a repeating crossbow in each hand in the same manner as you would a normal crossbow of the same size. However, you must fire the weapon with two hands in order to use the reloading lever, and you must use two hands to load a new case of bolts.</p>
<Tabular format="weap1" a="400" b="12" d="s1d8~m1d10" e="r19x2" f="120" g="P" i="ranged" j="E" k="Crossbows" />
</>};
const _repeating_light_crossbow = {title: "Repeating light crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-repeating_light_crossbow-repeating-light-crossbow">Repeating light crossbow</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This weapon functions identically to a <Link to="/eq-weapon/repeating_heavy_crossbow">repeating heavy crossbow</Link>, except that its damage, critical, and range values are equivalent to those of a <Link to="/eq-weapon/light_crossbow">light crossbow</Link> instead of a heavy crossbow. Its significantly lighter construction and pull make it both more portable and more useful to those who rely on stealth or speed.</p>
<Tabular format="weap1" a="250" b="6" d="s1d6~m1d8" e="r19x2" f="80" g="P" i="ranged" j="E" k="Crossbows" />
</>};
const _repeating_crossbow = {title: "Repeating crossbow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], notBookmarkable: true, jsx: <><h2 id="eq-weapon-repeating_crossbow-repeating-crossbow">Repeating crossbow</h2>
<p>There are three repeating crossbows.</p>
<ol>
<li><Link to="/eq-weapon/repeating_hand_crossbow">repeating hand crossbow</Link></li>
<li><Link to="/eq-weapon/repeating_light_crossbow">repeating light crossbow</Link></li>
<li><Link to="/eq-weapon/repeating_heavy_crossbow">repeating heavy crossbow</Link></li>
</ol>
</>};
const _rope_dart = {title: "Rope dart", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-rope_dart-rope-dart">Rope dart</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 133</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This deceptively complex weapon appears to be nothing more than a 12-foot <Link to="/eq-misc/rope">rope</Link> attached to a 6-inch-long, conical metal spike. Similar to a <Link to="/eq-weapon/meteor_hammer">meteor hammer</Link>, it can be whirled at great speeds, then aimed to strike and pierce opponents with great reach. Once it strikes, the wielder can quickly retrieve the weapon with a tug of the rope as a <strong className="hl">free action</strong>.</p>
<Tabular format="weap1" a="1" b="x" d="s1d3~m1d4" e="x2" f="20" g="P" h={<><Link to="/misc/blocking">blocking</Link>, <Link to="/misc/distracting">distracting</Link>, <Link to="/misc/monk">monk</Link></>} i="ranged" j="E" k="Monk; Thrown" />
</>};
const _shoanti_bolas = {title: "Shoanti bolas", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-shoanti_bolas-shoanti-bolas">Shoanti bolas</h2>
<p><strong>Sources</strong> <Link to="/source/varisia_birthplace_of_legends">Varisia, Birthplace of Legends pg. 14</Link>, <Link to="/source/curse_of_the_crimson_throne_players_guide">Curse of the Crimson Throne Player's Guide pg. 13</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 290</Link>, <Link to="/source/adventurers_armory">Adventurer's Armory pg. 33</Link></p>
<p>This spiked bolas functions as a standard <Link to="/eq-weapon/bolas">bolas</Link>, but deals lethal damage rather than nonlethal damage.</p>
<Tabular format="weap1" a="15" b="2" d="s1d3~m1d4" e="x2" f="10" g="B and P" h={<><Link to="/misc/trip">trip</Link></>} i="ranged" j="E" k="Thrown" />
</>};
const _shuriken = {title: "Shuriken", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-shuriken-shuriken">Shuriken</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 143</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>A shuriken is a small piece of metal with sharpened edges, designed for throwing. A shuriken can't be used as a melee weapon.</p>
<p><Icons id="eq-weapon-shuriken-info-icons" wrapper="prefixIcon" list={["info"]} /> Although they are thrown weapons, shuriken are treated as ammunition for the purposes of drawing them and crafting <Link to="/rule/masterwork_w">masterwork</Link> or otherwise special versions of them, and of what happens to them after they are thrown.</p>
<Tabular format="weap1" a="1" b="0.5" d="s1~m1d2" e="x2" f="10" g="P" h={<><Link to="/misc/monk">monk</Link></>} i="ranged" j="E" />
</>};
const _sling_glove = {title: "Sling glove", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-sling_glove-sling-glove">Sling glove</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 5</Link>, <Link to="/source/legacy_of_fire_players_guide">Legacy of Fire Player's Guide pg. 23</Link></p>
<p>This curved, scooped-shaped, 2-foot-long wicker basket attaches to your wrist, allowing you to throw fist-sized stones at great speed merely by whipping your arm forward.</p>
<p><Icons id="eq-weapon-sling_glove-info-icons" wrapper="prefixIcon" list={["info"]} /> Loading a sling glove is a <strong className="hl">free action</strong> that does not provoke an attack of opportunity so long as you have a free hand. You take -4 penalty when throwing a stone at an adjacent target and cannot use the weapon to attack creatures in your space.</p>
<Tabular format="weap1" a="5" b="2" d="s1d3~m1d4" e="x2" f="50" g="B" i="ranged" j="E" k="Thrown" />
</>};
const _snag_net = {title: "Snag net", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-snag_net-snag-net">Snag net</h2>
<p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 33</Link>, <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 201</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 21</Link></p>
<p>This short, wide net is covered in barbed loops and slipknots. It works like a typical <Link to="/eq-weapon/net">net</Link>, except it has the trip weapon special feature.</p>
<p><Icons id="eq-weapon-snag_net-melee-icons" wrapper="prefixIcon" list={["melee"]} /> If you entangle an opponent and hold the trailing rope, on your turn in place of a melee attack you may make a combat maneuver check to <Link to="/rule/trip">trip</Link> against that opponent; if you succeed, you may trip your opponent or deal 1 point of piercing damage to it.</p>
<p><Icons id="eq-weapon-snag_net-info-icons" wrapper="prefixIcon" list={["info"]} /> The <Link to="/rule/concentration">concentration</Link> DC to cast while entangled in a snag net is 17 + the spell's level. The <Link to="/skill/escape_artist">Escape Artist</Link> DC to escape a snag net is 22.</p>
<Tabular format="weap1" a="30" b="10" d="s-~m-" e="&mdash;" f="10" g="P" h={<><Link to="/misc/trip">trip</Link>, see text</>} i="ranged" j="E" k="Thrown" />
</>};
const _stormshaft_javelin = {title: "Stormshaft javelin", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-stormshaft_javelin-stormshaft-javelin">Stormshaft javelin</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory_2">Adventurer's Armory 2 pg. 9</Link>, <Link to="/source/gnomes_of_golarion">Gnomes of Golarion pg. 22</Link></p>
<p>Also known as a shrillshaft javelin, this single-use <Link to="/eq-weapon/javelin">javelin</Link> bears a <Link to="/eq-weapon/thunderstone">thunderstone</Link> just behind the head. If you successfully strike a target with one of these javelins, the creature takes damage as normal and is the center of the thunderstone's effect. If you miss, roll to see where the javelin lands (as if determining a miss with a <Link to="/rule/splash_weapon">splash weapon</Link>); that square becomes the center of the thunderstone's effect.</p>
<Tabular format="weap1" a="35" b="3" d="s1d4~m1d6" e="x2" f="30" g="P" h="see text" i="ranged" j="E" k="Spears; Thrown" />
</>};
const _thorn_bow = {title: "Thorn bow", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-thorn_bow-thorn-bow">Thorn bow</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 18</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 209</Link>, <Link to="/source/conquest_of_bloodsworn_vale">Conquest of Bloodsworn Vale pg. 31</Link></p>
<p>This polished rosewood bow is studded with thorns and tiny flowers; treat it as a <Link to="/eq-weapon/shortbow">shortbow</Link>.</p>
<Tabular format="weap1" a="50" b="2" d="s1d4~m1d6" e="x3" f="40" g="P" i="ranged" j="E" />
</>};
const _wrist_launcher = {title: "Wrist launcher", topLink: ["Ranged Weapons","main/equipment_weapons_ranged"], jsx: <><h2 id="eq-weapon-wrist_launcher-wrist-launcher">Wrist launcher</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_intrigue">Ultimate Intrigue pg. 232</Link></p>
<p>This slender tube is strapped to one forearm and designed to be concealed beneath the sleeve, where the wielder can fire a <Link to="/eq-weapon/featherweight_dart">featherweight dart</Link> with a twist of the wrist. The launcher functions by means of a tightly compressed spring, and must be reloaded and re-cocked with a separate ramrod as a <strong className="hl">full-round action</strong>.</p>
<p><Icons id="eq-weapon-wrist_launcher-def-icons" wrapper="prefixIcon" list={["def"]} /> After firing, the wearer can attempt a <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> check opposed by opponents' <Link to="/skill/perception">Perception</Link> checks to keep the wrist launcher concealed.</p>
<p>If you are proficient with <Link to="/eq-weapon/hand_crossbow">hand crossbows</Link>, you are also proficient with wrist launchers.</p>
<Tabular format="weap1" a="200" b="1" d="s-~m-" e="&mdash;" f="20" g="P" i="ranged" j="E" />
</>};
const _claw_blades = {title: "Claw blades", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-claw_blades-claw-blades">Claw blades</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 93</Link></p>
<p>These subtle blades can only be used by <Link to="/race/catfolk">catfolk</Link> with the <em>cat's claws</em> racial trait. Bought in a set of five, they fit over the wearer's claws on one hand.</p>
<p><Icons id="eq-weapon-claw_blades-boost-icons" wrapper="prefixIcon" list={["boost"]} /> The blades grant the wearer a +1 enhancement bonus on claw attack rolls with that hand and change the weapon type from a natural weapon to a light slashing weapon.</p>
<p>Catfolk with the <em>cat's claws</em> racial trait are proficient with this weapon. The claw blades can be enhanced like a <Link to="/rule/masterwork_w">masterwork weapon</Link> for the normal costs. The listed cost of the item is for one set of five claws for one hand.</p>
<Tabular format="weap1" a="305" b="2" d="s-~m-" e="&mdash;" f="x" g="S" h="catfolk only, see description" i="light" j="Special" />
</>};
const _kobold_tail_long_lash = {title: "Kobold tail, long lash", topLink: ["Light Weapons","main/equipment_weapons_light"], jsx: <><h2 id="eq-weapon-kobold_tail_long_lash-kobold-tail-long-lash">Kobold tail, long lash</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 135</Link></p>
<p><Icons id="eq-weapon-kobold_tail_long_lash-info-icons" wrapper="prefixIcon" list={["info"]} /> A <Link to="/race/kobold">kobold</Link> with the <Link to="/feat/tail_terror">Tail Terror</Link> feat can slip this device over the tip of his tail to augment his natural attack. Each tail attachment provides just enough weight, balance, and striking power to increase the damage of his tail slap. It takes a <strong className="hl">full-round action</strong> to slip on a kobold tail attachment, and the kobold gains a +4 bonus against <Link to="/rule/disarm">disarm</Link> attempts made to remove his tail attachment.</p>
<p>While a kobold is wearing a kobold tail attachment, the attack deals the tail attachment damage, and some attachments gain a special feature. Tail attachments are light weapons and can be improved by feats that can improve weapon attacks (such as <Link to="/feat/weapon_focus">Weapon Focus</Link> and <Link to="/feat/weapon_specialization">Weapon Specialization</Link>).</p>
<p><Icons id="eq-weapon-kobold_tail_long_lash-info-icons" wrapper="prefixIcon" list={["info"]} /> All kobold tail attachments make up a kobold tail attachment weapon group that can be improved by the fighter's <em>weapon training</em> class ability. Tail attachments can be constructed of special material and made into <Link to="/rule/masterwork_w">masterwork</Link> or magic items. There are five types of common tail attachments.</p>
<h3 id="eq-weapon-kobold_tail_long_lash-long-lash">Long Lash</h3>
<p>This slender cord has tiny bits of glass and stone embedded in its length.</p>
<Tabular format="weap1" a="15" b="1" d="s1d4~m1d6" e="x2" f="x" g="S" h={<><Link to="/misc/reach">reach</Link></>} i="light" j="Special" />
<h3 id="eq-weapon-kobold_tail_long_lash-pounder">Pounder</h3>
<p>This squat ball is made from some sort of dull metal.</p>
<Tabular format="weap1" a="1" b="4" d="s1d6~m1d8" e="x2" f="x" g="B" i="light" j="Special" />
<h3 id="eq-weapon-kobold_tail_long_lash-razored">Razored</h3>
<p>This metal wedge has a prickly edge on one of its sides.</p>
<Tabular format="weap1" a="3" b="2" d="s1d6~m1d8" e="r19x2" f="x" g="S" i="light" j="Special" />
<h3 id="eq-weapon-kobold_tail_long_lash-spiked">Spiked</h3>
<p>This narrow spike tapers to a sharp point.</p>
<Tabular format="weap1" a="3" b="2" d="s1d6~m1d8" e="x3" f="x" g="P" i="light" j="Special" />
<h3 id="eq-weapon-kobold_tail_long_lash-sweeper">Sweeper</h3>
<p>When properly used, this sharply curved piece of metal can knock opponents off their feet.</p>
<p><Icons id="eq-weapon-kobold_tail_long_lash-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Unlike most trip weapons, you cannot drop it if you are tripped during your own trip attempt.</p>
<Tabular format="weap1" a="7" b="3" d="s1d4~m1d6" e="x2" f="x" g="B" h={<><Link to="/misc/trip">trip</Link></>} i="light" j="Special" />
</>};
const _breech_loader = {title: "Breech-loader", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-breech_loader-breech-loader">Breech-loader</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 18</Link></p>
<p>This <Link to="/eq-weapon/double_barreled_pistol">double-barreled pistol</Link> variant has its barrel attached to its stock by a hinge, enabling ammunition to be loaded quickly and easily. Reloading a breech-loader is a <strong className="hl">standard action</strong> that reloads both barrels; the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat reduces this to a <strong className="hl">move action</strong>.</p>
<Tabular format="weap1" a="3000" b="4" d="s1d4~m1d6" e="x4" f="20" g="B and P" m="1 (5 ft.)" n="2" i="one" j="E" />
</>};
const _buckler_gun = {title: "Buckler gun", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-buckler_gun-buckler-gun">Buckler gun</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>The front of this <Link to="/eq-armor/buckler">buckler</Link> is fitted with a small, double-barreled gun that can be shot while wearing the buckler. Unlike with a <Link to="/eq-weapon/double_barreled_pistol">double-barreled pistol</Link>, you can shoot only one barrel at a time. You must remove the buckler to reload the gun.</p>
<p><Icons id="eq-weapon-buckler_gun-info-icons" wrapper="prefixIcon" list={["info"]} /> Each barrel of a buckler gun uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. Because of its awkward construction, a buckler gun is always considered an <Link to="/rule/off_hand">off-handed</Link> weapon. This is an early firearm.</p>
<Tabular format="weap1" a="750" b="6" d="s1d4~m1d6" e="x4" f="10" g="B and P" m="1 (5 ft.)" n="2" i="one" j="E" />
</>};
const _coat_pistol = {title: "Coat pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-coat_pistol-coat-pistol">Coat pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p><Icons id="eq-weapon-coat_pistol-def-icons" wrapper="prefixIcon" list={["def"]} /> Though less powerful than other, larger firearms, this pistol is small enough to be easily concealed in a jacket or coat. You get a +2 bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks made to conceal a coat pistol on your body.</p>
<p><Icons id="eq-weapon-coat_pistol-info-icons" wrapper="prefixIcon" list={["info"]} /> A coat pistol uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="750" b="1" d="s1d3~m1d4" e="x3" f="10" g="B and P" m="1 (5 ft.)" n="1" i="one" j="E" />
</>};
const _dagger_pistol = {title: "Dagger pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-dagger_pistol-dagger-pistol">Dagger pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p><Icons id="eq-weapon-dagger_pistol-info-icons" wrapper="prefixIcon" list={["info"]} /> A combination of a <Link to="/eq-weapon/coat_pistol">coat pistol</Link> and a <Link to="/eq-weapon/dagger">blade</Link>, the dagger pistol can be used as both weapons. The awkwardness of the configuration means you do not gain the bonus on <Link to="/skill/sleight_of_hand">Sleight of Hand</Link> checks that either of those stand-alone weapons grants. The dagger pistol is considered a <Link to="/misc/double">double</Link> weapon for the purpose of creating <Link to="/rule/masterwork_w">masterwork</Link> or magical versions of this weapon.</p>
<p>If this firearm gains the <Link to="/misc/broken">broken</Link> condition, both the firearm component and the dagger component are considered broken. A dagger pistol uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="740" b="1" d="s1d3~m1d4" e="x3" f="10" g="B and P" m="1 (5 ft.)" n="1" i="one" j="E" />
</>};
const _double_barreled_pistol = {title: "Double-barreled pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-double_barreled_pistol-double-barreled-pistol">Double-barreled pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p><Icons id="eq-weapon-double_barreled_pistol-info-icons" wrapper="prefixIcon" list={["info"]} /> This pistol has two parallel barrels; each barrel can be fired independently as separate attacks, or both can be fired at once as a <strong className="hl">standard action</strong> (the attack action).</p>
<p><Icons id="eq-weapon-double_barreled_pistol-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If both barrels are shot at once, they must both target the same creature or object, and the pistol becomes wildly inaccurate, imposing a -4 penalty on each shot.</p>
<p>This is an early firearm.</p>
<Tabular format="weap1" a="1750" b="5" d="s1d6~m1d8" e="x4" f="20" g="B and P" m="1-2 (5 ft.)" n="2" i="one" j="E" />
</>};
const _dragon_pistol = {title: "Dragon pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-dragon_pistol-dragon-pistol">Dragon pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p>Like a miniature <Link to="/eq-weapon/blunderbuss">blunderbuss</Link>, the dragon pistol fires pellets or a bullet from its flared barrel.</p>
<p>The dragon pistol fires in a 15-foot cone when firing pellets, and has a 10-foot range increment when firing a bullet. A dragon pistol uses either a <Link to="/eq-weapon/bullet">bullet</Link> or group of <Link to="/eq-weapon/pellets">pellets</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link>, or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> (with either bullets or pellets) as ammunition.</p>
<p>This is an early firearm.</p>
<Tabular format="weap1" a="1000" b="3" d="s1d4~m1d6" e="x4" f="special" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1-2 (5 ft.)" n="1" i="one" j="E" />
</>};
const _dragoon_pistol = {title: "Dragoon Pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-dragoon_pistol-dragoon-pistol">Dragoon Pistol</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 57</Link></p>
<p>Like the <Link to="/eq-weapon/dragoon_musket">dragoon musket</Link>, this long-barreled pistol is more precise than a typical pistol but slightly less deadly on a critical hit. It can fire only <Link to="/eq-weapon/dragoon_cartridge">dragoon cartridges</Link> or specially modified <Link to="/magic-weapon/mage_shot">mage shot</Link>.</p>
<Tabular format="weap1" a="1500" b="5" d="s1d6~m1d8" e="x3" f="30" g="B and P" m="1 (5 ft.)" n="3" i="one" j="E" />
</>};
const _paddle_foot_pistol = {title: "Paddle-foot pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-paddle_foot_pistol-paddle-foot-pistol">Paddle-foot pistol</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 15</Link></p>
<p>This early firearm has four barrels, each of which can be fired one at a time with a single adjustable flintlock.</p>
<p><Icons id="eq-weapon-paddle_foot_pistol-info-icons" wrapper="prefixIcon" list={["info"]} /> The paddle-foot pistol fires in a 20-foot cone when making a scattering shot, and it has a 20-foot range increment when firing a bullet. Additionally, the paddle-foot pistol has a maximum range of three range increments.</p>
<p>Each barrel of a paddle-foot pistol can hold 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link>, along with either <Link to="/eq-weapon/pellets">pellets</Link> or a <Link to="/eq-weapon/bullet">bullet</Link>, or it can hold a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link>.</p>
<Tabular format="weap1" a="2500" b="5" d="s1d4~m1d6" e="x3" f="20" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1-2 (5 ft.)" n="4" i="one" j="E" />
</>};
const _pepperbox = {title: "Pepperbox", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-pepperbox-pepperbox">Pepperbox</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 138</Link></p>
<p>This <Link to="/eq-weapon/pistol">pistol</Link> has six barrels instead of one. The entire barrel housing can be quickly rotated by hand between shots (a <strong className="hl">free action</strong> requiring one free hand), allowing all six bullets to be fired before the weapon must be reloaded. Each barrel of a pepperbox uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="3000" b="5" d="s1d6~m1d8" e="x4" f="20" g="B and P" m="1-2 (5 ft.)" n="6" i="one" j="E" />
</>};
const _pistol = {title: "Pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-pistol-pistol">Pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 138</Link></p>
<p>The basic single-shot pistol is one of the most common firearms, although in most campaigns it is still rare enough to be an object of envy or curiosity to most. As such, it can take a variety of different forms, from wildly ornate masterpieces in the shape of fire-breathing dragons to the more common wood-handled pistols, or nothing more than a simple metal tube with a triggering device.</p>
<p>A pistol uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="1000" b="4" d="s1d6~m1d8" e="x4" f="20" g="B and P" m="1 (5 ft.)" n="1" i="one" j="E" />
</>};
const _sword_cane_pistol = {title: "Sword cane pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-sword_cane_pistol-sword-cane-pistol">Sword cane pistol</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p>A combination weapon, this gun mixes a <Link to="/eq-weapon/coat_pistol">coat pistol</Link> with a <Link to="/eq-weapon/sword_cane">sword cane</Link>.</p>
<p>The sword cane pistol is considered a <Link to="/misc/double">double</Link> weapon for the purpose of creating <Link to="/rule/masterwork_w">masterwork</Link> or magical versions of this weapon.</p>
<p><Icons id="eq-weapon-sword_cane_pistol-warning-icons" wrapper="prefixIcon" list={["warning"]} /> The pistol attachment makes the nature of the weapon a little more difficult to hide. An observer must succeed at a DC 15 <Link to="/skill/perception">Perception</Link> check to realize that an undrawn sword cane pistol is a weapon rather than a simple walking stick; the DC decreases to 5 if the observer is able to handle the weapon.</p>
<p>A sword cane pistol uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. The sword part of the weapon must be drawn in order to load the pistol part of the weapon. This is an early firearm.</p>
<Tabular format="weap1" a="775" b="1" d="s1d3~m1d4" e="x3" f="10" g="B and P" m="1 (5 ft.)" n="1" i="one" j="E" />
</>};
const _air_repeater = {title: "Air repeater", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-air_repeater-air-repeater">Air repeater</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 18</Link></p>
<p>This long-barreled firearm is powered by a removable compressed <Link to="/eq-weapon/air_reservoir">air reservoir</Link>.</p>
<p><Icons id="eq-weapon-air_repeater-info-icons" wrapper="prefixIcon" list={["info"]} /> A misfire while an air repeater has the <Link to="/misc/broken">broken</Link> condition does not cause the firearm to explode, but it does destroy the air reservoir. An air repeater can fire 6 shots before the air reservoir is depleted. An air repeater comes with three air reservoirs. Replacing the air reservoir requires 1 minute. The <Link to="/feat/rapid_reload">Rapid Reload</Link> feat reduces this to a <strong className="hl">full-round action</strong>.</p>
<Tabular format="weap1" a="600" b="6" d="s1d6~m1d8" e="x4" f="50" g="B and P" m="1 (see text)" n="6" i="two" j="E" />
</>};
const _axe_musket = {title: "Axe musket", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-axe_musket-axe-musket">Axe musket</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>This short musket features an axe blade at the end of its barrel. It can be used as both a <Link to="/eq-weapon/musket">musket</Link> and a <Link to="/eq-weapon/battleaxe">battleaxe</Link>. It is considered a <Link to="/misc/double">double</Link> weapon for the purposes of creating <Link to="/rule/masterwork_w">masterwork</Link> or magical versions of this weapon. If this firearm gains the <Link to="/misc/broken">broken</Link> condition, both the firearm component and the axe are considered broken.</p>
<p>An axe musket uses either a <Link to="/eq-weapon/bullet">bullet</Link> and a single dose of <Link to="/eq-weapon/black_powder">black powder</Link> or an <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="1600" b="6" d="s1d6~m1d8" e="x4" f="30" g="B and P" m="1-2 (5 ft.)" n="1" i="two" j="E" />
</>};
const _blunderbuss = {title: "Blunderbuss", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-blunderbuss-blunderbuss">Blunderbuss</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>This weapon fires <Link to="/eq-weapon/pellets">pellets</Link> or a <Link to="/eq-weapon/bullet">bullet</Link> from its trumpet-shaped barrel, making it an effective fowling weapon or close-fighting personal defense weapon. The blunderbuss fires in a 15-foot cone when firing pellets, and has a 10-foot range increment when firing a bullet.</p>
<p>A blunderbuss uses a bullet or pellets and a single dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="2000" b="8" d="s1d6~m1d8" e="x2" f="special" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1-2 (10 ft.)" n="1" i="two" j="E" />
</>};
const _culverin = {title: "Culverin", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-culverin-culverin">Culverin</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>The culverin, also known as a hand bombard, consists of a simple smoothbore tube, sealed at one end except for a small hole used to ignite a gunpowder charge. A wooden stock partially encases the barrel, allowing you to hold it under your arm with relative ease when carrying it.</p>
<p><Icons id="eq-weapon-culverin-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Firing a culverin without support (such as a wall, a window, or a stand) imposes a -4 penalty on attack rolls, and knocks you <Link to="/rule/prone">prone</Link>. A culverin uses 4 doses of <Link to="/eq-weapon/black_powder">black powder</Link> and grapeshot (a handful of <Link to="/eq-weapon/pellets">pellets</Link>) as ammunition.</p>
<p><Icons id="eq-weapon-culverin-info-icons" wrapper="prefixIcon" list={["info"]} /> Note that these statistics simulate only the original, hand-held culverins - their larger descendants are considered <Link to="/eq-siegeengine/cannon">cannons</Link>. This is an early firearm.</p>
<Tabular format="weap1" a="4000" b="40" d="s2d6~m2d8" e="x4" f="30" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1 (10 ft.)" n="1" i="two" j="E" />
</>};
const _cylinder_rifle = {title: "Cylinder rifle", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-cylinder_rifle-cylinder-rifle">Cylinder rifle</h2>
<p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 15</Link></p>
<p>This long-barreled early firearm has a slim horizontal disk with eight uncovered slots, each of which can hold one <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> (but not alchemical cartridges). Each time the weapon is fired, the disk rotates to load the next available shot.</p>
<p><Icons id="eq-weapon-cylinder_rifle-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Misfiring with a cylinder rifle causes rogue sparks to cause the gun to erratically fire all the remaining bullets loaded in the disk, and each stray bullet has a 50% chance to hit the wielder, dealing 1d6 points of damage.</p>
<p><Icons id="eq-weapon-cylinder_rifle-info-icons" wrapper="prefixIcon" list={["info"]} /> Reloading a cylinder rifle requires two <strong className="hl">full-round actions</strong>, regardless of the number of slots being loaded. The <Link to="/feat/rapid_reload">Rapid Reload</Link> feat reduces this to a single <strong className="hl">full-round action</strong>.</p>
<Tabular format="weap1" a="6000" b="12" d="s1d6~m1d8" e="x4" f="40" g="B and P" m="1-3 (10 ft.)" n="8" i="two" j="E" />
</>};
const _double_hackbut = {title: "Double hackbut", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-double_hackbut-double-hackbut">Double hackbut</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>This double-length <Link to="/eq-weapon/rifle">rifle</Link> uses a pair of trunnions to mount its barrel into a swiveling mechanism fastened to the top of a lightweight, two-wheeled carriage.</p>
<p><Icons id="eq-weapon-double_hackbut-info-icons" wrapper="prefixIcon" list={["info"]} /> It takes a <strong className="hl">full-round action</strong> to set up the carriage. The carriage has a hind leg, allowing the wielder to wheel the device about and immediately prop it for stability during combat.</p>
<p><Icons id="eq-weapon-double_hackbut-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Unlike other two-handed firearms, you must fire the double hackbut while it is mounted, or else firing it imparts a -4 penalty on attack rolls and the recoil knocks you <Link to="/rule/prone">prone</Link>. A Large or larger creature can fire a double hackbut one size smaller than itself without the gun's mounting as a normal two-handed weapon and without the danger of being knocked prone, but takes the normal penalty for firing an <Link to="/misc/inappropriately_sized_weapon">inappropriately sized weapon</Link>.</p>
<p>This is an early firearm.</p>
<Tabular format="weap1" a="4000" b="18" d="s2d10~m2d12" e="x4" f="50" g="B and P" m="1-2 (5 ft.)" n="2" i="two" j="E" />
</>};
const _double_barreled_musket = {title: "Double-barreled musket", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-double_barreled_musket-double-barreled-musket">Double-barreled musket</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 138</Link></p>
<p>This musket has two parallel barrels; each barrel can be shot independently as separate attacks, or both can be fired at once as a <strong className="hl">standard action</strong> (the attack action).</p>
<p><Icons id="eq-weapon-double_barreled_musket-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If both barrels are fired at once, they must both target the same creature or object, and the gun becomes wildly inaccurate, taking a -4 penalty on each shot.</p>
<p>Each barrel of a double-barreled musket uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="2500" b="11" d="s1d10~m1d12" e="x4" f="10" g="B and P" m="1-3 (5 ft.)" n="2" i="two" j="E" />
</>};
const _dragoon_musket = {title: "Dragoon Musket", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-dragoon_musket-dragoon-musket">Dragoon Musket</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 57</Link></p>
<p>This long-barreled <Link to="/eq-weapon/musket">musket</Link> shoots more precisely than other muskets but is slightly less damaging on a critical hit. It can fire only <Link to="/eq-weapon/dragoon_cartridge">dragoon cartridges</Link> or specially modified <Link to="/magic-weapon/mage_shot">mage shot</Link>.</p>
<Tabular format="weap1" a="2000" b="12" d="s1d10~m1d12" e="x3" f="60" g="B and P" m="1-2 (5 ft.)" n="3" i="two" j="E" />
</>};
const _fire_lance = {title: "Fire lance", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-fire_lance-fire-lance">Fire lance</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>This primitive firearm is merely a long tube that, when ignited, propels forth a short gout of flame and a <Link to="/eq-weapon/javelin">javelin</Link>.</p>
<p><Icons id="eq-weapon-fire_lance-down-icons" wrapper="prefixIcon" list={["down"]} /> Unlike other firearms, the fire lance is wildly imprecise, and targets AC rather than touch AC. A fire lance is always treated as having the <Link to="/misc/broken">broken</Link> condition for the purpose of determining the effects of a misfire.</p>
<p>A fire lance uses a javelin and 2 doses of <Link to="/eq-weapon/black_powder">black powder</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="25" b="4" d="s1d4~m1d6" e="x4" f="10" g="P" m="1-4 (5 ft.)" n="1" i="two" j="E" />
</>};
const _musket = {title: "Musket", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-musket-musket">Musket</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 137</Link></p>
<p>This long-barreled firearm has a much greater range than a <Link to="/eq-weapon/pistol">pistol</Link>. A musket uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as its ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="1500" b="9" d="s1d10~m1d12" e="x4" f="40" g="B and P" m="1-2 (5 ft.)" n="1" i="two" j="E" />
</>};
const _warhammer_musket = {title: "Warhammer musket", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-warhammer_musket-warhammer-musket">Warhammer musket</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 138</Link></p>
<p>This musket has a warhammer head at the end of its barrel, which allows it to be used as both a <Link to="/eq-weapon/musket">musket</Link> and a <Link to="/eq-weapon/warhammer">warhammer</Link>.</p>
<p><Icons id="eq-weapon-warhammer_musket-info-icons" wrapper="prefixIcon" list={["info"]} /> It is considered a <Link to="/misc/double">double</Link> weapon for the purposes of creating <Link to="/rule/masterwork_w">masterwork</Link> or magical versions of this weapon. If this firearm gains the <Link to="/misc/broken">broken</Link> condition, both the firearm component and the warhammer are considered broken.</p>
<p>A warhammer musket uses either a <Link to="/eq-weapon/bullet">bullet</Link> and 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link> or a single <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link> as ammunition. This is an early firearm.</p>
<Tabular format="weap1" a="1600" b="6" d="s1d6~m1d8" e="x4" f="30" g="B and P" m="1-2 (5 ft.)" n="1" i="two" j="E" />
</>};
const _radium_pistol = {title: "Radium pistol", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-radium_pistol-radium-pistol">Radium pistol</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_2">Pathfinder Worldscape #2 pg. 26</Link></p>
<p>A radium pistol is a one-handed weapon with a revolving cylinder containing six chambers. Each chamber holds a special radium-powder cartridge, and when one cartridge is fired, the cylinder automatically rotates (no extra hand or action required), readying the next cartridge for firing.</p>
<Tabular format="weap1" a="4500" b="3" d="s1d6~m1d8" e="x4" f="30" g="B and P" h="see text" m="1" n="6" i="one" j="E" />
<Message radium />
</>};
const _revolver = {title: "Revolver", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-revolver-revolver">Revolver</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p>A revolver is a <Link to="/eq-weapon/pistol">pistol</Link> with a revolving cylinder containing six chambers. Each chamber can hold a metal cartridge, and when one cartridge is fired, the cylinder automatically rotates (no extra hand or action required), readying the next chamber for firing.</p>
<p>A revolver uses <Link to="/eq-weapon/metal_cartridges">metal cartridges</Link> as ammunition. This is an advanced firearm.</p>
<Tabular format="weap1" a="4000" b="4" d="s1d6~m1d8" e="x4" f="20" g="B and P" m="1" n="6" i="one" j="E" />
</>};
const _double_barreled_shotgun = {title: "Double-barreled shotgun", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-double_barreled_shotgun-double-barreled-shotgun">Double-barreled shotgun</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 140</Link></p>
<p>This twin-barreled <Link to="/eq-weapon/shotgun">shotgun</Link> can be shot one barrel at a time, or both together as one attack.</p>
<p><Icons id="eq-weapon-double_barreled_shotgun-warning-icons" wrapper="prefixIcon" list={["warning"]} /> A double shot that fires bullets is inaccurate, and takes a -4 penalty on both attacks. A double shot that fires bullets targets only a single creature and increases the damage of each barrel to 2d6 points (Small) or 2d8 points (Medium) for a total of 4d6 or 4d8 points of damage.</p>
<p>A double-barreled shotgun uses <Link to="/eq-weapon/metal_cartridges">metal cartridges</Link> (loaded with either a <Link to="/eq-weapon/bullet">bullet</Link> or <Link to="/eq-weapon/pellets">pellets</Link>) as ammunition. This is an advanced firearm.</p>
<Tabular format="weap1" a="7000" b="15" d="s1d6~m1d8" e="x2" f="20" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1-2" n="2" i="two" j="E" />
</>};
const _pepperbox_rifle = {title: "Pepperbox rifle", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-pepperbox_rifle-pepperbox-rifle">Pepperbox rifle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 140</Link></p>
<p>The four barrels of this <Link to="/eq-weapon/rifle">rifle</Link> are set into a turnable housing that can be quickly rotated by hand (a <strong className="hl">free action</strong>) between shots. A pepperbox rifle uses <Link to="/eq-weapon/metal_cartridges">metal cartridges</Link> as ammunition. This is an advanced firearm.</p>
<Tabular format="weap1" a="7000" b="15" d="s1d8~m1d10" e="x4" f="80" g="B and P" m="1-2" n="4" i="two" j="E" />
</>};
const _radium_rifle = {title: "Radium rifle", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-radium_rifle-radium-rifle">Radium rifle</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_2">Pathfinder Worldscape #2 pg. 27</Link></p>
<p>The long barrel and line construction of this two handed weapon allows for a range superior to even modern Earth <Link to="/eq-weapon/rifle">rifles</Link>.</p>
<Tabular format="weap1" a="5500" b="10" d="s1d8~m1d10" e="x4" f="100" g="B and P" h="see text" m="1" n="1" i="two" j="E" />
<Message radium />
</>};
const _rifle = {title: "Rifle", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-rifle-rifle">Rifle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 139</Link></p>
<p>This improvement on the <Link to="/eq-weapon/musket">musket</Link> features a grooved barrel that imparts a twisting, spiral motion to the bullet as it exits, stabilizing it and preventing the end-over-end tumbling common to projectiles from simpler firearms. As a result, a rifle can fire significantly farther and with more accuracy than early long-bore firearms.</p>
<p>A rifle uses <Link to="/eq-weapon/metal_cartridges">metal cartridges</Link> as ammunition. This is an advanced firearm.</p>
<Tabular format="weap1" a="5000" b="12" d="s1d8~m1d10" e="x4" f="80" g="B and P" m="1" n="1" i="two" j="E" />
</>};
const _shotgun = {title: "Shotgun", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-shotgun-shotgun">Shotgun</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 43</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 140</Link></p>
<p>This advanced version of the <Link to="/eq-weapon/blunderbuss">blunderbuss</Link> shoots in a 30-foot cone when firing <Link to="/eq-weapon/pellets">pellets</Link>, and has a 20-foot range increment when firing a <Link to="/eq-weapon/bullet">bullet</Link> (often called a slug).</p>
<p>Shotguns can either be simple and functional, or art pieces in their own right, with engravings and inlay on the stocks and breeches. Those used by the upper class are often emblazoned with images of game animals, family crests, or elaborate maker's marks.</p>
<p>A shotgun uses <Link to="/eq-weapon/metal_cartridges">metal cartridges</Link> (loaded with either a bullet or pellets) as ammunition. This is an advanced firearm.</p>
<Tabular format="weap1" a="5000" b="12" d="s1d6~m1d8" e="x2" f="20" g="B and P" h={<><Link to="/misc/scatter">scatter</Link></>} m="1-2" n="1" i="two" j="E" />
</>};
const _thark_rifle = {title: "Thark rifle", topLink: ["Firearms","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-thark_rifle-thark-rifle">Thark rifle</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_worldscape_2">Pathfinder Worldscape #2 pg. 27</Link></p>
<p>Similar in construction to the standard <Link to="/eq-weapon/radium_rifle">radium rifle</Link> employed by Barsoom's red Martians, the Thark rifle (named for Barsoom's most prominent green Martian tribe) offers a staggering range and greater damage capacity fitting the brutality of its Large wielder. The Thark rifle is a Large two-handed weapon.</p>
<Tabular format="weap1" a="6500" b="12" d="s1d8~m1d10" e="x4" f="1 mile" g="B and P" h="see text" m="1-2" n="1" i="two" j="E" />
<Message radium />
</>};
const _air_reservoir = {title: "Air reservoir", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-air_reservoir-air-reservoir">Air reservoir</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 18</Link></p>
<p>A spare reservoir of compressed air comes with 6 pieces of ammunition to be used with an <Link to="/eq-weapon/air_repeater">air repeater</Link>.</p>
<Tabular format="weap1" a="6" b="x" i="ammo" j="E" />
</>};
const _alchemical_cartridge = {hasJL:true,title: "Alchemical cartridge", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><div className="jumpList" id="eq-weapon-alchemical_cartridge-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-dragons-breath-cartridge">Dragon's Breath Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-entangling-shot-cartridge">Entangling Shot Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-flare-cartridge">Flare Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-gray-dust-cartridge">Gray Dust Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-gray-dust-shot-cartridge">Gray Dust Shot Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-molten-cartridge">Molten Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-paper-cartridge">Paper Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-repellent-cartridge">Repellent Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-salt-shot-cartridge">Salt Shot Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-smoke-cartridge">Smoke Cartridge</InnerLink></li><li><InnerLink toTop to="eq-weapon-alchemical_cartridge-toxic-cartridge">Toxic Cartridge</InnerLink></li></ul></div><h2 id="eq-weapon-alchemical_cartridge-alchemical-cartridge">Alchemical cartridge</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 140</Link></p>
<p>An alchemical cartridge is a prepared bundle of <Link to="/eq-weapon/black_powder">black powder</Link> with a <Link to="/eq-weapon/bullet">bullet</Link> or <Link to="/eq-weapon/pellets">pellets</Link>, sometimes with more exotic material added, which is then wrapped in paper or cloth and sealed with beeswax, lard, or tallow. There are many types of alchemical cartridges, the simplest being the paper cartridge - a simple mix of black powder and either pellets or a bullet. Alchemical cartridges make loading a firearm easier, reducing the time to load a firearm by one step (a full-round action becomes a standard action, a standard action becomes a move action, and a move action becomes a free action), but they tend to be unstable. The misfire value of a weapon firing an alchemical cartridge increases as listed in each entry.</p>
<h3 id="eq-weapon-alchemical_cartridge-dragons-breath-cartridge" data-hash-target>Dragon's Breath Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-cone-icons" wrapper="prefixIcon" list={["cone"]} /> This cartridge contains alchemical compounds that, when fired, produce a cone of fire instead of the normal attack of a one-handed or two-handed firearm with the <Link to="/misc/scatter">scatter</Link> weapon quality. The nonmagical flame deals 2d6 points of fire damage to all targets within the cone of the scatter firearm (DC 15 Reflex save for half).</p>
<p><Icons id="eq-weapon-alchemical_cartridge-info-icons" wrapper="prefixIcon" list={["info"]} /> These cartridges cannot be used in firearms that don't have the scatter weapon quality. Because this ammunition forces a saving throw instead of making an attack roll, the misfire rules are slightly different. If you roll a 1 with either of the damage dice, the firearm misfires.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-A-1" id="eq-weapon-alchemical_cartridge-ref-A-1" data-hash-target to="eq-weapon-alchemical_cartridge-A">1</InnerLink></sup></p>
<Tabular format="weap1" a="40" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-entangling-shot-cartridge" data-hash-target>Entangling Shot Cartridge</h3>
<p>This mix of black powder and an alchemically treated resin strong enough to survive the shot can only be loaded into a <Link to="/eq-weapon/blunderbuss">blunderbuss</Link>, a <Link to="/eq-weapon/dragon_pistol">dragon pistol</Link>, or another scatter weapon.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-cone-down-lower-icons" wrapper="prefixIcon" list={["cone","down","lower"]} /> It deals half damage to those hit by a cone attack made with this weapon, but any creature hit by the shot must succeed at a DC 15 Reflex saving throw or become <Link to="/rule/entangled">entangled</Link> for 2d4 rounds. An <em>entangling shot cartridge</em> increases the firearm's misfire value by 2.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-A-2" id="eq-weapon-alchemical_cartridge-ref-A-2" data-hash-target to="eq-weapon-alchemical_cartridge-A">1</InnerLink></sup></p>
<Tabular format="weap1" a="40" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-flare-cartridge" data-hash-target>Flare Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-down-boom-lower-icons" wrapper="prefixIcon" list={["down","boom","lower"]} /> When a <em>flare cartridge</em> hits its target, it deals only half the normal damage, but the creature struck is <Link to="/misc/blinded">blinded</Link> for 1 round (Fortitude DC 15 reduces this to dazzled), and creatures within a 20-foot <Link to="/misc/burst">burst</Link> are dazzled for 1 round (Fortitude DC 15 negates the effect).</p>
<p>Flare cartridges are also useful for sending up signal flares.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Firing a <em>flare cartridge</em> increases the firearm's misfire value by 2 unless it is fired from a blunderbuss or a dragon pistol, in which case doing so only increases the firearm's misfire value by 1. Flares can be used only to attack single creatures; they do not work as a shot for a scatter weapon's cone attack.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-A-3" id="eq-weapon-alchemical_cartridge-ref-A-3" data-hash-target to="eq-weapon-alchemical_cartridge-A">1</InnerLink></sup></p>
<Tabular format="weap1" a="10" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-gray-dust-cartridge" data-hash-target>Gray Dust Cartridge</h3>
<p>Packed with mysterious magic-suppressing dust from the Mana Wastes, these rounds burst on impact and inhibit spellcasting.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-down-lower-icons" wrapper="prefixIcon" list={["down","lower"]} /> When a <em>gray dust cartridge</em> strikes a target, it deals only half damage, but the creature struck takes a -10 penalty on <Link to="/rule/concentration">concentration</Link> checks to cast spells for 1d4 rounds and cannot cast defensively.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-B-1" id="eq-weapon-alchemical_cartridge-ref-B-1" data-hash-target to="eq-weapon-alchemical_cartridge-B">2</InnerLink></sup></p>
<Tabular format="weap1" a="50" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-gray-dust-shot-cartridge" data-hash-target>Gray Dust Shot Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-down-boom-lower-icons" wrapper="prefixIcon" list={["down","boom","lower"]} /> This version of the <em>gray dust cartridge</em> can be loaded only into a weapon with the scatter quality. It functions similarly to a <em>gray dust cartridge,</em> except upon impact it bursts into a 20-foot-radius cloud. Creatures within the cloud take a -5 penalty on concentration checks to cast spells. This cloud dissipates in 1d6 rounds in still air. Light <Link to="/rule/wind">wind</Link> disperses the cloud in 1 round.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-B-2" id="eq-weapon-alchemical_cartridge-ref-B-2" data-hash-target to="eq-weapon-alchemical_cartridge-B">2</InnerLink></sup></p>
<Tabular format="weap1" a="50" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-molten-cartridge" data-hash-target>Molten Cartridge</h3>
<p>This cartridge holds a handful of alchemically infused pellets that ignite and become molten when fired as a scattering shot with a one-handed or two-handed firearm with the scatter weapon quality.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-info-icons" wrapper="prefixIcon" list={["info"]} /> These molten projectiles deal fire damage to targets hit by the scattering shot, and each target hit must succeed at a DC 15 Reflex saving throw or take 1d6 additional points of fire damage each round as the projectiles smolder. An affected target can use a <strong className="hl">full-round action</strong> to scrape off the smoldering projectile before taking this additional damage. In addition, molten metal fragments litter the area, functioning as <Link to="/eq-misc/caltrops">caltrops</Link> in each square of the scattering shot cone (except they deal fire damage). These projectiles and fragments cool down after 3 rounds, at which point they become harmless bits of metal.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Firing this cartridge increases the firearm's misfire value by 2, and the cartridge can be used only in early or advanced firearms with the scatter weapon quality.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-C-1" id="eq-weapon-alchemical_cartridge-ref-C-1" data-hash-target to="eq-weapon-alchemical_cartridge-C">3</InnerLink></sup></p>
<Tabular format="weap1" a="40" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-paper-cartridge" data-hash-target>Paper Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-warning-icons" wrapper="prefixIcon" list={["warning"]} /> This simple mix of black powder and either pellets or a bullet increases the misfire value by 1.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-A-4" id="eq-weapon-alchemical_cartridge-ref-A-4" data-hash-target to="eq-weapon-alchemical_cartridge-A">1</InnerLink></sup></p>
<Tabular format="weap1" a="12" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-repellent-cartridge" data-hash-target>Repellent Cartridge</h3>
<p>This cartridge can be used only in early or advanced firearms with the scatter weapon quality.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-cone-lower-icons" wrapper="prefixIcon" list={["cone","lower"]} /> To use a repellent cartridge, make a scattering shot against an AC of 5. If you succeed, you create a cone of foul fumes that lasts for 2 rounds, after which the stench becomes inert and dissipates. Any creature within this area when the fumes are created or any creature that enters the fumes while they are active must succeed at a DC 15 Fortitude save or become <Link to="/misc/sickened">sickened</Link> for 1d6 rounds. Being affected by the fumes multiple times lengthens the duration of the sickened condition.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If your attack results in a misfire that causes your firearm to explode, the area of the cloud is instead centered on one corner of your square (your choice), with a radius equal to the firearm's misfire burst size. Firing this cartridge increases the firearm's misfire value by 1.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-C-2" id="eq-weapon-alchemical_cartridge-ref-C-2" data-hash-target to="eq-weapon-alchemical_cartridge-C">3</InnerLink></sup></p>
<Tabular format="weap1" a="30" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-salt-shot-cartridge" data-hash-target>Salt Shot Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-info-icons" wrapper="prefixIcon" list={["info"]} /> This mix of black powder and rock salt can only be loaded into a blunderbuss, a dragon pistol, or other scatter weapon. It deals nonlethal instead of lethal damage, and increases the misfire value by 1. You can use it only with a scatter weapon's cone attack.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-A-5" id="eq-weapon-alchemical_cartridge-ref-A-5" data-hash-target to="eq-weapon-alchemical_cartridge-A">1</InnerLink></sup></p>
<Tabular format="weap1" a="12" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-smoke-cartridge" data-hash-target>Smoke Cartridge</h3>
<p><Icons id="eq-weapon-alchemical_cartridge-down-boom-icons" wrapper="prefixIcon" list={["down","boom"]} /> This cartridge can be loaded only into a weapon with the scatter quality. Upon striking a target, it deals no damage, but instead bursts into a cloud of smoke in a 20-foot radius. This smoke impairs sight beyond 5 feet; any creature farther away gains <Link to="/rule/concealment">concealment</Link> (20% miss chance). The cloud disperses after 1d4 rounds, or in 1 round in light wind.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-B-3" id="eq-weapon-alchemical_cartridge-ref-B-3" data-hash-target to="eq-weapon-alchemical_cartridge-B">2</InnerLink></sup></p>
<Tabular format="weap1" a="35" b="x" i="ammo" j="E" />
<h3 id="eq-weapon-alchemical_cartridge-toxic-cartridge" data-hash-target>Toxic Cartridge</h3>
<p>A toxic cartridge can be used only in early or advanced firearms with the scatter weapon quality.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-cone-lower-icons" wrapper="prefixIcon" list={["cone","lower"]} /> To use a toxic cartridge, make a scattering shot against an AC of 5. If you succeed, you create a cone of burning toxic gas that lasts for 1 rounds, after which the gas dissipates. Any creature within this area when it is created or any creature that enters the gas while it is active must succeed at a DC 15 Fortitude save or become <Link to="/misc/nauseated">nauseated</Link> for 1d2 rounds. Being affected by the gas multiple times lengthens the duration of the sickened condition. In addition, any creature that begins its turn in the area takes 1d6 points of fire damage.</p>
<p><Icons id="eq-weapon-alchemical_cartridge-warning-icons" wrapper="prefixIcon" list={["warning"]} /> If your attack results in a misfire that causes your firearm to explode, the area of the cloud is instead centered on one corner of your square (your choice), with a radius equal to the firearm's misfire burst size. Firing this cartridge increases the firearm's misfire value by 1.<sup><InnerLink showBacklink="backlink-eq-weapon-alchemical_cartridge-ref-C-3" id="eq-weapon-alchemical_cartridge-ref-C-3" data-hash-target to="eq-weapon-alchemical_cartridge-C">3</InnerLink></sup></p>
<Tabular format="weap1" a="100" b="x" i="ammo" j="E" />
<section data-footnotes>
<h3 id="eq-weapon-alchemical_cartridge-label">Footnotes</h3>
<ol>
<li id="eq-weapon-alchemical_cartridge-A">
<p><Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-A-1" data-hash-target to="eq-weapon-alchemical_cartridge-ref-A-1" aria-label="Back to reference A-1">↩</InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-A-2" data-hash-target to="eq-weapon-alchemical_cartridge-ref-A-2" aria-label="Back to reference A-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-A-3" data-hash-target to="eq-weapon-alchemical_cartridge-ref-A-3" aria-label="Back to reference A-3">↩<sup>3</sup></InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-A-4" data-hash-target to="eq-weapon-alchemical_cartridge-ref-A-4" aria-label="Back to reference A-4">↩<sup>4</sup></InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-A-5" data-hash-target to="eq-weapon-alchemical_cartridge-ref-A-5" aria-label="Back to reference A-5">↩<sup>5</sup></InnerLink></p>
</li>
<li id="eq-weapon-alchemical_cartridge-B">
<p><Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 18</Link> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-B-1" data-hash-target to="eq-weapon-alchemical_cartridge-ref-B-1" aria-label="Back to reference B-1">↩</InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-B-2" data-hash-target to="eq-weapon-alchemical_cartridge-ref-B-2" aria-label="Back to reference B-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-B-3" data-hash-target to="eq-weapon-alchemical_cartridge-ref-B-3" aria-label="Back to reference B-3">↩<sup>3</sup></InnerLink></p>
</li>
<li id="eq-weapon-alchemical_cartridge-C">
<p><Link to="/source/people_of_the_wastes">People of the Wastes pg. 15</Link> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-C-1" data-hash-target to="eq-weapon-alchemical_cartridge-ref-C-1" aria-label="Back to reference C-1">↩</InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-C-2" data-hash-target to="eq-weapon-alchemical_cartridge-ref-C-2" aria-label="Back to reference C-2">↩<sup>2</sup></InnerLink> <InnerLink id="backlink-eq-weapon-alchemical_cartridge-ref-C-3" data-hash-target to="eq-weapon-alchemical_cartridge-ref-C-3" aria-label="Back to reference C-3">↩<sup>3</sup></InnerLink></p>
</li>
</ol>
</section>
</>};
const _black_powder_dose = {title: "Black Powder (dose)", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-black_powder_dose-black-powder">Black Powder</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link>, <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 292</Link></p>
<p><Link to="/eq-reagent/black_powder">Black powder</Link> is the key explosive component within a firearm that enables it to function, but in larger amounts this alchemical material can be quite destructive on its own as well.</p>
<p><Icons id="eq-weapon-black_powder_dose-info-icons" wrapper="prefixIcon" list={["info"]} /> A single dose of black powder is enough to power a single shot from most one-handed and two-handed firearms, while 10 doses are required to fire a <Link to="/eq-siegeengine/cannon">cannon</Link>.</p>
<p><Icons id="eq-weapon-black_powder_dose-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Black powder is often stored and transported in kegs (which hold 100 doses), but in this quantity the powder itself becomes dangerous. Exposure to fire, electricity, or a misfire explosion causes black powder to explode - a single keg that explodes in this manner deals 5d6 points of fire damage to anyone within a 20-foot <Link to="/misc/burst">burst</Link> (DC 15 Reflex half).</p>
<p>Storing black powder in a <Link to="/eq-weapon/powder_horn">powder horn</Link> protects the powder from explosion.</p>
<Tabular format="weap1" a="10 gp (dose)/1,000 gp (keg)" b="&mdash; (dose)/5 lbs. (keg)" c="x" i="ammo" j="E" />
</>};
const _bullet_adamantine = {title: "Bullet, adamantine", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-bullet_adamantine-bullet-adamantine">Bullet, adamantine</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>These expensive <Link to="/eq-weapon/bullet">bullets</Link> are crafted from <Link to="/eq-material/adamantine">adamantine</Link>. They ignore hardness 20 or less when attacking objects.</p>
<Tabular format="weap1" a="61" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is approximate, based on 30 regular bullets weighing half a pound; 15 bullets therefore weight 0.25 lb. (&frac14; lb.), and 3 bullets weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _bullet_screaming = {title: "Bullet, screaming", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-bullet_screaming-bullet-screaming">Bullet, screaming</h2>
<p><strong>Sources</strong> <Link to="/source/heroes_of_golarion">Heroes of Golarion pg. 18</Link></p>
<p>This ammunition makes a piercing scream when fired.</p>
<p><Icons id="eq-weapon-bullet_screaming-boost-lower-icons" wrapper="prefixIcon" list={["boost","lower"]} /> If fired as part of an <Link to="/skill/intimidate">Intimidate</Link> check, it imparts a +5 bonus on the check. If used with the <Link to="/deed/startling_shot">startling shot</Link> deed, the target is <Link to="/rule/flat_footed">flat-footed</Link> for an additional round.</p>
<Tabular format="weap1" a="20" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is approximate, based on 30 regular bullets weighing half a pound; 15 bullets therefore weight 0.25 lb. (&frac14; lb.), and 3 bullets weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _dragoon_cartridge = {title: "Dragoon Cartridge", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-dragoon_cartridge-dragoon-cartridge">Dragoon Cartridge</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex pg. 57</Link></p>
<p>These clips of <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridges</Link> hold three <Link to="/eq-weapon/bullet">bullets</Link> and fit the slot of either the <Link to="/eq-weapon/dragoon_musket">dragoon musket</Link> or the <Link to="/eq-weapon/dragoon_pistol">dragoon pistol</Link>. They allow the wielder of those firearms to fire up to three shots in quick succession without the need to reload.</p>
<p>Once the cartridge is spent, reloading another dragoon cartridge takes a <strong className="hl">full-round action</strong>, no matter the type of dragoon firearm in question. <Link to="/feat/rapid_reload">Rapid Reload</Link> can reduce the action time required, but abilities like the <Link to="/arc-gunslinger/musket_master">musket master's</Link> <em>fast musket</em> have no effect.</p>
<p>Unlike other alchemical cartridges, dragoon cartridges don't increase a dragoon firearm's misfire chance by 1. Dragoon cartridges can be used only with dragoon firearms.</p>
<p>Magical bullets can be made in the form of dragoon cartridges, but the price and cost are three times greater than the listed value.</p>
<Tabular format="weap1" a="30" b="x" i="ammo" j="E" />
</>};
const _firearm_bullet = {title: "Firearm bullet", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-firearm_bullet-firearm-bullet">Firearm bullet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 211</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>The ammunition of most one-handed and two-handed firearms, firearm bullets typically take the form of small balls of lead or some other metal. Thirty bullets weigh half a pound.</p>
<Tabular format="weap1" a="1" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is approximate, based on 30 bullets weighing half a pound; 15 bullets therefore weight 0.25 lb. (&frac14; lb.), and 3 bullets weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _firearm_bullet_silver = {title: "Firearm bullet, silver", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-firearm_bullet_silver-firearm-bullet-silver">Firearm bullet, silver</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p><Icons id="eq-weapon-firearm_bullet_silver-info-icons" wrapper="prefixIcon" list={["info"]} /> This ammunition is specifically crafted from <Link to="/eq-material/silver">silver</Link>, and though nonmagical, it is particularly detrimental to lycanthropes, automatically confirming any critical threats against such creatures.</p>
<p><Icons id="eq-weapon-firearm_bullet_silver-down-icons" wrapper="prefixIcon" list={["down"]} /> A firearm that is shooting a silver bullet takes a -1 penalty on damage rolls (with a minimum of 1 point of damage).</p>
<Tabular format="weap1" a="25" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is based on 30 regular <Link to="/eq-weapon/bullet">bullets</Link> weighing half a pound; 15 bullets therefore weight 0.25 lb. (&frac14; lb.), and 3 bullets weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _gunsmiths_kit = {title: "Gunsmith's kit", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-gunsmiths_kit-gunsmiths-kit">Gunsmith's kit</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>This small kit has all the tools a person needs to create, repair, and restore firearms, except for the necessary raw materials. Without such a kit, you cannot properly construct or provide upkeep for firearms.</p>
<Tabular format="weap1" a="15" b="2" i="ammo" j="E" />
</>};
const _metal_cartridge = {title: "Metal cartridge", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-metal_cartridge-metal-cartridge">Metal cartridge</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>These sturdier versions of <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridges</Link> serve as the ammunition for advanced firearms. They can hold either <Link to="/eq-weapon/bullet">bullets</Link> or <Link to="/eq-weapon/pellets">pellets</Link>.</p>
<Tabular format="weap1" a="15" b="x" i="ammo" j="E" />
</>};
const _pellets_handful = {title: "Pellets (handful)", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-pellets_handful-pellets-handful">Pellets (handful)</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>A handful of pellets, along with 1 dose of <Link to="/eq-weapon/black_powder">black powder</Link>, is commonly used as ammunition for one-handed and two-handed firearms with the <Link to="/misc/scatter">scatter</Link> weapon quality, though rocks or other small bits of hard material can be used in the pellets' place.</p>
<p><Icons id="eq-weapon-pellets_handful-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Using anything other than pellets or <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridges</Link> when firing off a cone attack with a scatter weapon increases the weapon's misfire range by 1 (though this increase can be removed by switching back to standard ammunition).</p>
<p>Thirty handfuls of pellets weigh half a pound.</p>
<Tabular format="weap1" a="1" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is approximate, based on 30 handfuls weighing half a pound; 15 handfuls weight 0.25 lb. (&frac14; lb.), and 3 handfuls weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _pitted_bullet = {title: "Pitted bullet", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-pitted_bullet-pitted-bullet">Pitted bullet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 41</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link></p>
<p>This ammunition is pitted with a pattern of small pocks into which specially formulated poison compounds can be applied. A poison compound is a derivative of a standard toxin that is alchemically reduced to a solid form. These can be made from any standard injury or contact poison with a successful <Link to="/skill/craft">Craft</Link> (poison) check equal to the poison's DC + 4.</p>
<p><Icons id="eq-weapon-pitted_bullet-info-icons" wrapper="prefixIcon" list={["info"]} /> The cost of purchasing an already prepared poison compound for the purpose of treating pitted bullets is equal to the poison's base cost + 20 gp. Once crafted, the compound can be pasted into the ammunition's pitted design and allowed to harden. Upon completion, the <Link to="/eq-weapon/bullet">bullet</Link> can be fired from an appropriate firearm, releasing the poison compound into its target upon impact, but the poison's DC is reduced by 2.</p>
<p>A pitted bullet cannot be used with an <Link to="/eq-weapon/alchemical_cartridge">alchemical cartridge</Link>. The listed cost does not include the cost of poison.</p>
<Tabular format="weap1" a="5" b="0.0166" i="ammo" j="E" />
<blockquote>
<p><strong className="hl">Note:</strong> Weight is approximate, based on 30 regular bullets weighing half a pound; 15 bullets therefore weight 0.25 lb. (&frac14; lb.), and 3 bullets weigh 0.05 lb. (&#185;&#8260;&#8322;&#8320; lb.)</p>
</blockquote>
</>};
const _powder_horn = {title: "Powder horn", topLink: ["Firearms Ammunition","main/equipment_firearms"], jsx: <><h2 id="eq-weapon-powder_horn-powder-horn">Powder horn</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_equipment">Ultimate Equipment pg. 57</Link>, <Link to="/source/ultimate_combat">Ultimate Combat pg. 141</Link>, <Link to="/source/inner_sea_world_guide">Inner Sea World Guide pg. 293</Link></p>
<p>Typically crafted from hollowed-out animal horn, but increasingly crafted from metal in a wide variety of shapes, a powder horn can hold up to 10 doses of <Link to="/eq-weapon/black_powder">black powder</Link>. A powder horn protects black powder stored within in it from exposure to fire, electricity, firearm misfires, and water, and the narrow end of the horn is useful in funneling the expensive powder carefully into the barrel of a firearm.</p>
<Tabular format="weap1" a="3" b="1" i="ammo" j="E" />
</>};
const _maxim_m1910_machine_gun = {title: "Maxim M1910 machine gun", jsx: <><h2 id="eq-weapon-maxim_m1910_machine_gun-maxim-m1910-machine-gun">Maxim M1910 Machine Gun</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 64</Link></p>
<p>This heavy machine gun uses 7.6254mmR ammunition in 250-round belts. Although a single person can fire a Maxim, it typically has a two-person crew: the gunner, and a loader who assists with feeding the ammunition belt into the weapon. As a <strong className="hl">full-round action</strong>, the loader can use a special <Link to="/rule/aid_another_2">aid another</Link> action to grant the gunner a +2 bonus on his next attack roll.</p>
<p><Icons id="eq-weapon-maxim_m1910_machine_gun-warning-icons" wrapper="prefixIcon" list={["warning"]} /> Because of its size and heavy weight, a Maxim is often either mounted on a wheeled chassis with a gun shield for trench defensive use, or on the back of a horse-drawn wagon called a tachanka. Assuming a user can even lift the weapon, firing a Maxim M1910 machine gun that is not mounted imparts a -4 penalty on attack rolls and the recoil knocks the wielder <Link to="/rule/prone">prone</Link>.</p>
<p>The Maxim M1910 is automatic-fire only. The armored shield provides cover when firing the weapon from the prone position.</p>
<Tabular format="weap1" a="1500" b="140" d="2d8 (medium)" e="x4" f="120" g="B and P" h="automatic" m="1-2" n="250" i="two" j="E" />
</>};
const _m1914_concussion_grenade = {title: "M1914 grenade (concussion)", jsx: <><h2 id="eq-weapon-m1914_concussion_grenade-m1914-grenade-concussion">M1914 grenade (concussion)</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 64</Link></p>
<p>This time-delayed concussion grenade is a mainstay of trench warfare. The device appears to be little more than a metal cylinder tapering to a handle containing a spring-loaded lever. To detonate the device, you disengage the safety pin while depressing the handle's lever, which releases the firing pin when thrown. The device detonates at the beginning of your next turn, hopefully in the area you targeted.</p>
<p><Icons id="eq-weapon-m1914_concussion_grenade-boom-icons" wrapper="prefixIcon" list={["boom"]} /> The device relies on a concussive blast to deal damage, and all creatures within a 20-foot radius take 3d6 points of bludgeoning damage (Reflex DC 15 for half ).</p>
<Tabular format="weap1" a="50" b="1" d="3d6 (medium)" e="x2" f="20" g="B" h="see description" i="Explosive" j="E" />
</>};
const _mosin_nagant_m1891_rifle = {title: "Mosin-Nagant M1891 rifle", jsx: <><h2 id="eq-weapon-mosin_nagant_m1891_rifle-maxim-m1910-machine-gun">Maxim M1910 Machine Gun</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 64</Link></p>
<p>This bolt-action rifle is the mainstay of Russian military forces. It is similar to the advanced firearms <Link to="/eq-weapon/rifle">rifle</Link> with the following differences. It uses the same ammunition as the Madsen machine gun, and is fed from a 5-round internal, nondetachable magazine that is typically loaded with 5-round stripper clips (loading it is a <strong className="hl">move action</strong>). Without stripper clips, you may only reload up to 2 rounds of ammunition as a move action.</p>
<p>Ammunition is typically sold in groups of 5 rounds. The rifle has a lug for the attachment of a <Link to="/eq-weapon/bayonet">socket bayonet</Link>, and can be equipped with a unique sidemount scope system.</p>
<Tabular format="weap1" a="500" b="9" d="1d10 (medium)" e="x4" f="80" g="B and P" h="&mdash;" m="1" n="5" i="two" j="E" />
</>};
const _shrillshaft_javelin = {..._stormshaft_javelin, title: "Shrillshaft javelin"};
const _kobold_tail = {..._kobold_tail_long_lash, title: "Kobold Tail Attachment"};
const _kobold_tail_pounder = {..._kobold_tail_long_lash, title: "Kobold tail, pounder"};
const _kobold_tail_razored = {..._kobold_tail_long_lash, title: "Kobold tail, razored"};
const _kobold_tail_spiked = {..._kobold_tail_long_lash, title: "Kobold tail, spiked"};
const _kobold_tail_sweeper = {..._kobold_tail_long_lash, title: "Kobold tail, sweeper"};
const _alchemical_cartridge_dragons_breath = {..._alchemical_cartridge, title: "Alchemical cartridge (dragon's breath)"};
const _alchemical_cartridge_entangling_shot = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (entangling shot)"};
const _alchemical_cartridge_flare = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (flare)"};
const _alchemical_cartridge_gray_dust_shot = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (gray dust shot)"};
const _alchemical_cartridge_gray_dust = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (gray dust)"};
const _alchemical_cartridge_molten_shot = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (molten shot)"};
const _alchemical_cartridge_paper_bullet_or_pellet = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (paper, bullet or pellet)"};
const _alchemical_cartridge_repellent = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (repellent)"};
const _alchemical_cartridge_salt_shot = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (salt shot)"};
const _alchemical_cartridge_smoke_cartridge = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (smoke cartridge)"};
const _alchemical_cartridge_toxin = {..._alchemical_cartridge_dragons_breath, title: "Alchemical cartridge (toxin)"};
const _black_powder_keg = {..._black_powder_dose, title: "Black powder (keg)"};
export default {guisarme:_guisarme,halberd:_halberd,heavy_flail:_heavy_flail,hooked_lance:_hooked_lance,horsechopper:_horsechopper,lance:_lance,lucerne_hammer:_lucerne_hammer,mattock:_mattock,monks_spade:_monks_spade,naginata:_naginata,nodachi:_nodachi,ogre_hook:_ogre_hook,planson:_planson,ranseur:_ranseur,rhomphaia:_rhomphaia,sansetsukon:_sansetsukon,sarissa:_sarissa,scythe:_scythe,syringe_spear:_syringe_spear,tepoztopilli:_tepoztopilli,tiger_fork:_tiger_fork,tri_point_double_edged_sword:_tri_point_double_edged_sword,amentum:_amentum,atlatl:_atlatl,chakram:_chakram,composite_bow:_composite_bow,composite_longbow:_composite_longbow,composite_shortbow:_composite_shortbow,gastraphetes:_gastraphetes,hunga_munga:_hunga_munga,hurlbat:_hurlbat,jolting_dart:_jolting_dart,longbow:_longbow,phaleros:_phaleros,pilum:_pilum,poisoned_sand_tube:_poisoned_sand_tube,reflex_bow:_reflex_bow,shortbow:_shortbow,spear_sling:_spear_sling,throwing_arrow_cord:_throwing_arrow_cord,tube_arrow_shooter:_tube_arrow_shooter,aklys:_aklys,axe_gauntlet_dwarven_light:_axe_gauntlet_dwarven_light,axe_gauntlet_dwarven_heavy:_axe_gauntlet_dwarven_heavy,barbazu_beard:_barbazu_beard,battle_poi:_battle_poi,butterfly_knife:_butterfly_knife,dan_bong:_dan_bong,deer_horn_knife:_deer_horn_knife,dwarven_maulaxe:_dwarven_maulaxe,elven_leafblade:_elven_leafblade,emei_piercer:_emei_piercer,fighting_fan:_fighting_fan,flying_talon:_flying_talon,gnome_pincher:_gnome_pincher,halfling_rope_shot:_halfling_rope_shot,helmet_dwarven_boulder:_helmet_dwarven_boulder,kama:_kama,kasatha_spinal_sword:_kasatha_spinal_sword,knuckle_axe:_knuckle_axe,nunchaku:_nunchaku,pata:_pata,quadrens:_quadrens,razor_drow:_razor_drow,rope_gauntlet:_rope_gauntlet,sai:_sai,sanpkhang:_sanpkhang,scorpion_whip:_scorpion_whip,siangham:_siangham,sica:_sica,swordbreaker_dagger:_swordbreaker_dagger,tekko_kagi:_tekko_kagi,wakizashi:_wakizashi,waveblade:_waveblade,aldori_dueling_sword:_aldori_dueling_sword,bastard_sword:_bastard_sword,broken_back_seax:_broken_back_seax,doru:_doru,dwarven_double_waraxe:_dwarven_double_waraxe,dwarven_waraxe:_dwarven_waraxe,elven_thornblade:_elven_thornblade,estoc:_estoc,falcata:_falcata,flindbar:_flindbar,gnome_flick_mace:_gnome_flick_mace,great_terbutje:_great_terbutje,hooked_axe:_hooked_axe,katana:_katana,khopesh:_khopesh,knobkerrie:_knobkerrie,nine_section_whip:_nine_section_whip,ram_hammer_dwarven:_ram_hammer_dwarven,rhoka_sword:_rhoka_sword,sawtooth_sabre:_sawtooth_sabre,shotel:_shotel,sickle_sword:_sickle_sword,spiral_rapier:_spiral_rapier,split_blade_sword:_split_blade_sword,taiaha:_taiaha,temple_sword:_temple_sword,tongi:_tongi,urumi:_urumi,wahaika:_wahaika,whip:_whip,barbed_spear:_barbed_spear,battle_ladder_gnome:_battle_ladder_gnome,bladed_scarf:_bladed_scarf,bo_staff:_bo_staff,boarding_gaff:_boarding_gaff,butchering_axe:_butchering_axe,chain_spear:_chain_spear,chain_hammer:_chain_hammer,crook:_crook,dire_flail:_dire_flail,dorn_dergar_dwarven:_dorn_dergar_dwarven,double_spear:_double_spear,double_chained_kama:_double_chained_kama,dwarven_urgrosh:_dwarven_urgrosh,elven_branched_spear:_elven_branched_spear,elven_curve_blade:_elven_curve_blade,fauchard:_fauchard,flailpole:_flailpole,flambard:_flambard,flask_pike:_flask_pike,flying_blade:_flying_blade,garrote:_garrote,giant_sticker_dwarven:_giant_sticker_dwarven,gnome_hooked_hammer:_gnome_hooked_hammer,harpoon:_harpoon,injection_spear:_injection_spear,katana_double_walking_stick:_katana_double_walking_stick,kusarigama:_kusarigama,kyoketsu_shoge:_kyoketsu_shoge,longaxe_dwarven:_longaxe_dwarven,longhammer_dwarven:_longhammer_dwarven,mancatcher:_mancatcher,meteor_hammer:_meteor_hammer,orc_double_axe:_orc_double_axe,orc_skull_ram:_orc_skull_ram,piston_maul_gnome:_piston_maul_gnome,ripsaw_glaive_gnome:_ripsaw_glaive_gnome,seven_branched_sword:_seven_branched_sword,sphinx_hammer_dwarven:_sphinx_hammer_dwarven,spiked_chain:_spiked_chain,switchscythe:_switchscythe,tetsubo:_tetsubo,totem_spear:_totem_spear,two_bladed_sword:_two_bladed_sword,bolas:_bolas,boomerang:_boomerang,crystal_chakram:_crystal_chakram,dire_bolas:_dire_bolas,double_crossbow:_double_crossbow,flask_thrower:_flask_thrower,grappling_hook:_grappling_hook,halfling_double_sling:_halfling_double_sling,halfling_sling_staff:_halfling_sling_staff,halfling_stitched_sling:_halfling_stitched_sling,hand_crossbow:_hand_crossbow,heavy_crank_crossbow:_heavy_crank_crossbow,heavy_slavers_crossbow:_heavy_slavers_crossbow,heavy_wrist_launcher:_heavy_wrist_launcher,hornbow_orc:_hornbow_orc,horse_bow:_horse_bow,kestros:_kestros,lasso:_lasso,launching_crossbow:_launching_crossbow,light_crank_crossbow:_light_crank_crossbow,light_slavers_crossbow:_light_slavers_crossbow,net:_net,pelletbow_dwarven_heavy:_pelletbow_dwarven_heavy,pelletbow_dwarven_light:_pelletbow_dwarven_light,repeating_hand_crossbow:_repeating_hand_crossbow,repeating_heavy_crossbow:_repeating_heavy_crossbow,repeating_light_crossbow:_repeating_light_crossbow,repeating_crossbow:_repeating_crossbow,rope_dart:_rope_dart,shoanti_bolas:_shoanti_bolas,shuriken:_shuriken,sling_glove:_sling_glove,snag_net:_snag_net,stormshaft_javelin:_stormshaft_javelin,thorn_bow:_thorn_bow,wrist_launcher:_wrist_launcher,claw_blades:_claw_blades,kobold_tail_long_lash:_kobold_tail_long_lash,breech_loader:_breech_loader,buckler_gun:_buckler_gun,coat_pistol:_coat_pistol,dagger_pistol:_dagger_pistol,double_barreled_pistol:_double_barreled_pistol,dragon_pistol:_dragon_pistol,dragoon_pistol:_dragoon_pistol,paddle_foot_pistol:_paddle_foot_pistol,pepperbox:_pepperbox,pistol:_pistol,sword_cane_pistol:_sword_cane_pistol,air_repeater:_air_repeater,axe_musket:_axe_musket,blunderbuss:_blunderbuss,culverin:_culverin,cylinder_rifle:_cylinder_rifle,double_hackbut:_double_hackbut,double_barreled_musket:_double_barreled_musket,dragoon_musket:_dragoon_musket,fire_lance:_fire_lance,musket:_musket,warhammer_musket:_warhammer_musket,radium_pistol:_radium_pistol,revolver:_revolver,double_barreled_shotgun:_double_barreled_shotgun,pepperbox_rifle:_pepperbox_rifle,radium_rifle:_radium_rifle,rifle:_rifle,shotgun:_shotgun,thark_rifle:_thark_rifle,air_reservoir:_air_reservoir,alchemical_cartridge:_alchemical_cartridge,black_powder_dose:_black_powder_dose,bullet_adamantine:_bullet_adamantine,bullet_screaming:_bullet_screaming,dragoon_cartridge:_dragoon_cartridge,firearm_bullet:_firearm_bullet,firearm_bullet_silver:_firearm_bullet_silver,gunsmiths_kit:_gunsmiths_kit,metal_cartridge:_metal_cartridge,pellets_handful:_pellets_handful,pitted_bullet:_pitted_bullet,powder_horn:_powder_horn,maxim_m1910_machine_gun:_maxim_m1910_machine_gun,m1914_concussion_grenade:_m1914_concussion_grenade,mosin_nagant_m1891_rifle:_mosin_nagant_m1891_rifle,shrillshaft_javelin:_shrillshaft_javelin,kobold_tail:_kobold_tail,kobold_tail_pounder:_kobold_tail_pounder,kobold_tail_razored:_kobold_tail_razored,kobold_tail_spiked:_kobold_tail_spiked,kobold_tail_sweeper:_kobold_tail_sweeper,alchemical_cartridge_dragons_breath:_alchemical_cartridge_dragons_breath,alchemical_cartridge_entangling_shot:_alchemical_cartridge_entangling_shot,alchemical_cartridge_flare:_alchemical_cartridge_flare,alchemical_cartridge_gray_dust_shot:_alchemical_cartridge_gray_dust_shot,alchemical_cartridge_gray_dust:_alchemical_cartridge_gray_dust,alchemical_cartridge_molten_shot:_alchemical_cartridge_molten_shot,alchemical_cartridge_paper_bullet_or_pellet:_alchemical_cartridge_paper_bullet_or_pellet,alchemical_cartridge_repellent:_alchemical_cartridge_repellent,alchemical_cartridge_salt_shot:_alchemical_cartridge_salt_shot,alchemical_cartridge_smoke_cartridge:_alchemical_cartridge_smoke_cartridge,alchemical_cartridge_toxin:_alchemical_cartridge_toxin,black_powder_keg:_black_powder_keg}