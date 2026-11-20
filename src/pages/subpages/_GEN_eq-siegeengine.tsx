import Link from '../../components/Link';
import {Block,Row,Cell} from '../../components/Block';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import Tabular from '../../components/Tabular';
import Icons from '../../components/Icons';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-siegeengine-not_found-error">Error</h2>
<p>Unable to find the requested siege engine.</p>
</>};
const _alchemists_fire = {title: "Alchemist's fire", jsx: <><h2 id="eq-siegeengine-alchemists_fire-alchemists-fire">Alchemist's fire</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister of alchemist's fire can be used as ammunition in catapults and trebuchets. When it hits its target square, it deals 4d6 points of fire damage to each creature and wooden structure within 5 feet of the target space, and each creature must make a DC 20 Reflex saving throw or <Link to="/rule/catch_on_fire">catch on fire</Link> (wooden objects automatically catch on fire). Every creature and wooden object within the area between 5 and 30 feet of the target space must make a DC 20 Reflex saving throw or take half the fire damage, but they do not catch on fire.</p>
<p>On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to the siege engine and all nearby creatures and wooden objects as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<p>This alchemical fire ignores the hardness of wooden objects.</p>
<Tabular format="siegeammo" p="200" w="10" />
</>};
const _blast_shot = {title: "Blast Shot", jsx: <><h2 id="eq-siegeengine-blast_shot-blast-shot">Blast Shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>Instead of a single hard ball, this ammunition is a bundle of large pellets, balls, or pieces of scrap metal, propelled a short distance by black powder and attacking all creatures and objects within an area.</p>
<p><Icons id="eq-siegeengine-blast_shot-cone-icons" wrapper="prefixIcon" list={["cone"]} /> Both <Link to="/eq-siegeengine/cannon">cannons</Link> and <Link to="/eq-siegeengine/fiends_mouth">fiend's mouth</Link> cannons can fire this kind of ammunition. When such a siege engine fires this ammunition, it hits every creature and object within a 30-foot-cone <Link to="/misc/burst">burst</Link>. The siege engine makes attack rolls against each creature and unattended object in the burst. It must miss every creature or target to misfire, and a misfire generates the normal effect.</p>
<p>It deals its normal damage on a hit, but does not ignore the hardness of objects.</p>
<Tabular format="siegeammo" p="30" w="25" />
</>};
const _bomb = {title: "Bomb", jsx: <><h2 id="eq-siegeengine-bomb-bomb">Bomb</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>A bomb is a metal canister filled with metal balls and black powder that can be used as ammunition in <Link to="/eq-siegeengine/catapult">catapults</Link> and <Link to="/eq-siegeengine/trebuchet">trebuchets</Link> or carried by two Medium creatures or one Large creature to its destination.</p>
<p>A bomb either explodes on impact (if fired from a catapult or trebuchet, or within 3 rounds of a fuse being lit if carried). When it explodes, it deals 6d6 points of piercing and bludgeoning damage to all creatures and objects within 30 feet of the target square. On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to the siege engine and all nearby creatures and wooden objects as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<p>It ignores the hardness of wood and stone.</p>
<Tabular format="siegeammo" p="600" w="30" />
</>};
const _chain_shot = {title: "Chain shot", jsx: <><h2 id="eq-siegeengine-chain_shot-chain-shot">Chain shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This siege engine firearm ammunition can be loaded in a <Link to="/eq-siegeengine/cannon">cannon</Link> or a <Link to="/eq-siegeengine/fiends_mouth">fiend's mouth</Link> cannon. It is especially good at tearing through sails and dirigibles (see the <Link to="/rule/full_vehicle_rules">Vehicle rules</Link>), dealing double its normal damage to those forms of propulsion.</p>
<p>When fired at a creature, on a hit, the creature must succeed at a DC 20 Fortitude saving throw or be knocked <Link to="/rule/prone">prone</Link>.</p>
<Tabular format="siegeammo" p="50" w="30" />
</>};
const _defoliant_shot = {title: "Defoliant Shot", jsx: <><h2 id="eq-siegeengine-defoliant_shot-defoliant-shot">Defoliant Shot</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>When used as ammunition in a <Link to="/eq-siegeengine/catapult">catapult</Link> or <Link to="/eq-siegeengine/trebuchet">trebuchet</Link>, this ceramic canister releases a mist of <Link to="/eq-misc/defoliant">defoliant</Link> on impact. When it hits the target square, it deals 2d6 points of damage to any creature in that space.</p>
<p>Plant creatures within 30 feet of the target square take an additional 4d6 points of damage. A successful DC 20 Fortitude saving throw halves this additional damage. Plant creatures within 5 feet of the target space that fail their saving throws also take 1d4 points of <Link to="/rule/strength_damage">Strength damage</Link> and 1d4 points of Constitution damage.</p>
<p>The defoliant also kills vegetation within 30 feet of the target square.</p>
<p>On a siege engine mishap, this ammunition explodes before it's launched, dealing its damage to the siege engine and all nearby plant creatures as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<Tabular format="siegeammo" p="300" w="20" />
</>};
const _entangling_bolt = {title: "Entangling Bolt", jsx: <><h2 id="eq-siegeengine-entangling_bolt-entangling-bolt">Entangling Bolt</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>When launched from a <Link to="/eq-siegeengine/ballista">ballista</Link>, this specialized bolt unfurls into a large net.</p>
<p><Icons id="eq-siegeengine-entangling_bolt-zap-icons" wrapper="prefixIcon" list={["zap"]} /> An attack with entangling ammunition is a ranged touch attack, but it's only effective within one range increment. If it hits, the target is <Link to="/rule/entangled">entangled</Link>, but the attack deals no damage.</p>
<p>An entangled creature can escape with a successful DC 20 <Link to="/skill/escape_artist">Escape Artist</Link> check (a full-round action). The net has 5 hit points and can be burst with a successful DC 25 Strength check (also a full-round action).</p>
<p>Entangling ammunition is useful only against creatures within one size category of the firing ballista.</p>
<Tabular format="siegeammo" p="50" w="25" />
</>};
const _liquid_ice = {title: "Liquid ice", jsx: <><h2 id="eq-siegeengine-liquid_ice-liquid-ice">Liquid ice</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister filled with alchemical liquid ice can be used as ammunition in <Link to="/eq-siegeengine/catapult">catapults</Link> and <Link to="/eq-siegeengine/trebuchet">trebuchets</Link>. When it hits its target square, it deals 4d6 points of cold damage to each creature within 5 feet of the targeting space, and each creature must make a DC 20 Fortitude save or become <Link to="/rule/entangled">entangled</Link> for 1 round. Every creature within the area between 5 and 30 feet of the target space must make a DC 20 Fortitude saving throw or take half damage.</p>
<p>On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to all nearby creatures as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<Tabular format="siegeammo" p="400" w="20" />
</>};
const _plague_bundle = {title: "Plague bundle", jsx: <><h2 id="eq-siegeengine-plague_bundle-plague-bundle">Plague bundle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister is filled with a noxious mass of diseased carrion and offal that can be used as ammunition for a <Link to="/eq-siegeengine/catapult">catapult</Link> or a <Link to="/eq-siegeengine/trebuchet">trebuchet</Link>. It deals only half damage, but every creature hit by it is exposed to <Link to="/disease/filth_fever">filth fever</Link>.</p>
<p>A GM might allow a <em>plague bundle</em> to inflict other diseases.</p>
<Tabular format="siegeammo" p="80" w="20" />
</>};
const _rockwasp_bomb = {title: "Rockwasp Bomb", jsx: <><h2 id="eq-siegeengine-rockwasp_bomb-rockwasp-bomb">Rockwasp Bomb</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>Usable in catapults and trebuchets, this ammunition consists of a wooden crate packed with wax globes, from which a faint buzzing sound emanates. Visible as a dark shape at the center of each globe is a rat-sized hornet known as a rockwasp. The alchemical wax keeps the wasps immobilized, while tiny air holes allow them to breath.</p>
<p>This ammunition deals only half damage, but releases a <Link to="/monster/wasp_swarm">wasp swarm</Link> - two wasp swarms if used for a <Link to="/eq-siegeengine/heavy_catapult">heavy catapult</Link> or <Link to="/eq-siegeengine/heavy_trebuchet">heavy trebuchet</Link>. The wasps attack for 1 minute before dispersing.</p>
<p>On a siege engine mishap, the wasps escape before the ammunition is launched.</p>
<Tabular format="siegeammo" p="2000" w="100" />
</>};
const _smoke_shot = {title: "Smoke shot", jsx: <><h2 id="eq-siegeengine-smoke_shot-smoke-shot">Smoke shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard ceramic sphere contains two alchemical substances separated by a thin barrier, much like a <Link to="/eq-misc/smoke_pellet">smoke pellet</Link> in larger form, usable by <Link to="/eq-siegeengine/cannon">cannons</Link> and <Link to="/eq-siegeengine/fiends_mouth">fiend's mouth</Link> cannons.</p>
<p>When it hits the targeting space, it deals 2d6 points of damage to any creature in that space, and the substances mingle and then create an area of foul but harmless yellow smoke radiating 30 feet from the target square. Treat the effect as a <Link to="/spell/fog_cloud">fog cloud</Link> spell.</p>
<p>On a siege engine mishap, the ammunition explodes before it is launched. Its effect is centered on one of the spaces of the siege engine (crew leader's choice).</p>
<Tabular format="siegeammo" p="250" w="20" />
</>};
const _ballista_net = {title: "Ballista net", jsx: <><h2 id="eq-siegeengine-ballista_net-ballista-net">Ballista net</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This <Link to="/eq-siegeengine/ballista">ballista</Link> bolt is specially equipped with a net which unfurls as the bolt flies toward its target.</p>
<p><Icons id="eq-siegeengine-ballista_net-zap-icons" wrapper="prefixIcon" list={["zap"]} /> Unlike a standard ballista bolt, a ballista net requires only a touch attack to hit. If a ballista net hits, it deals no damage, but causes the target to become <Link to="/rule/entangled">entangled</Link>. An entangled creature takes a -2 penalty on attack rolls and a -4 penalty to Dexterity, can move at only half speed, and cannot charge or run.</p>
<Tabular format="siegeammo" p="75" w="15" />
</>};
const _flak = {title: "Flak", jsx: <><h2 id="eq-siegeengine-flak-flak">Flak</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>Flak ammunition is a type of short-fused <Link to="/eq-siegeengine/bomb">bomb</Link>, specifically designed to explode in midair. Flak ammunition is packed with steel balls and black powder, and may be fired from a <Link to="/eq-siegeengine/bombard">bombard</Link> or <Link to="/eq-siegeengine/catapult">catapult</Link>.</p>
<p>When flak explodes, it deals 4d6 points of piercing and bludgeoning damage to all creatures and objects within 40 feet of the target square.</p>
<p>A flak bomb must reach an altitude of at least 50 feet to function properly. If flak ammunition impacts anything before it reaches this altitude, the bomb deals 1d6 points of bludgeoning damage and fails to explode.</p>
<Tabular format="siegeammo" p="500" w="30" />
</>};
const _flechette_bolt = {title: "Flechette bolt", jsx: <><h2 id="eq-siegeengine-flechette_bolt-flechette-bolt">Flechette bolt</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This <Link to="/eq-siegeengine/ballista">ballista</Link> bolt consists of dozens of small steel darts, called flechettes, which break away after the bolt is released.</p>
<p><Icons id="eq-siegeengine-flechette_bolt-cone-icons" wrapper="prefixIcon" list={["cone"]} /> If the bolt impacts anything before it reaches a distance of 30 feet, it deals 1d8 points of damage. Between 30 and 60 feet away, the flechettes deploy, dealing piercing damage to every creature and object within a 30-foot-cone <Link to="/misc/burst">burst</Link>. After 60 feet, the flechettes lose momentum and fall harmlessly to the ground.</p>
<p>Separate attack rolls must be made against each target hit by the burst. Light ballista flechettes deal 2d8 points of damage, while heavy ballista flechettes deal 3d8 points. Additionally, any winged creature hit by flechettes has several holes punched in its wings, and has its fly speed reduced by 10 feet. The creature takes a -4 penalty on <Link to="/skill/fly">Fly</Link> checks until the damage is healed.</p>
<Tabular format="siegeammo" p="30" w="20" />
</>};
const _weighted_bolt = {title: "Weighted bolt", jsx: <><h2 id="eq-siegeengine-weighted_bolt-weighted-bolt">Weighted bolt</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This barbed <Link to="/eq-siegeengine/ballista">ballista</Link> bolt is equipped with a heavy weight at the end of a long chain.</p>
<p><Icons id="eq-siegeengine-weighted_bolt-down-icons" wrapper="prefixIcon" list={["down"]} /> The bolt's extra weight makes the bolt harder to fire accurately, and imposes a -2 penalty on attack rolls. In addition to the normal damage dealt by a ballista bolt of its size, on a successful hit the weighted bolt lodges itself into the target's body, leaving the weighted chain hanging loosely, imparting a -5 penalty on all <Link to="/skill/fly">Fly</Link> checks made by the target. These penalties stack if a target is hit with multiple weighted bolts.</p>
<p>A weighted bolt can be removed with a successful DC 25 <Link to="/skill/heal">Heal</Link> check or a DC 20 Strength check.</p>
<Tabular format="siegeammo" p="50" w="40" />
</>};
const _ballista_light = {hasJL:true,title: "Ballista, light", jsx: <><div className="jumpList" id="eq-siegeengine-ballista_light-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-siegeengine-ballista_light-light-ballista">Light Ballista</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-ballista_light-heavy-ballista">Heavy Ballista</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-ballista_light-gate-breaker-ballista">Gate Breaker Ballista</InnerLink></li></ul></div><h2 id="eq-siegeengine-ballista_light-ballista">Ballista</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 160</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>Resembling a massive crossbow, a ballista's power is provided by twisted skeins of animal sinew used as torsion springs driving a pair of adjustable arms. A cord attached to both arms is winched back and a projectile is loaded into a grooved slider for release. Ballistae are direct-fire weapons.</p>
<h3 id="eq-siegeengine-ballista_light-light-ballista" data-hash-target>Light Ballista</h3>
<p>This common type of ballista, also called an arbalest or scorpion, is size Large, maneuverable, and often mounted atop towers or even vehicles. Light ballistae have a <Link to="/rule/hardness">hardness</Link> of 5 and 50 hit points. Light ballista bolts cost 10 gp each and weigh 10 pounds.</p>
<Tabular format="siege" id="light" p="500" d="3d8" e="19-20/&times;2" r="120" t="P" w="1" a="0" l="2" s="10" c="d" z="l" />
<h3 id="eq-siegeengine-ballista_light-heavy-ballista" data-hash-target>Heavy Ballista</h3>
<p>These Huge-sized siege engines are commonly used as castle defenses, as well as on large warships. Heavy ballistae have a hardness of 5 and 100 hit points. Heavy ballista bolts cost 30 gp and weigh 20 pounds each.</p>
<Tabular format="siege" id="heavy" p="800" d="4d8" e="19-20/&times;2" r="180" t="P" w="3" a="2" l="3" s="0" c="d" z="h" />
<h3 id="eq-siegeengine-ballista_light-gate-breaker-ballista" data-hash-target>Gate Breaker Ballista</h3>
<p>This massive ballista fires specially weighted quarrels with blunt metal tips. These are used as long-range battering rams, shot at walls or the gates of castles. When they hit a wooden structure, they have a critical range of 19-20/&times;3.</p>
<p>Gate breaker ballistae have a hardness of 5 and 200 hit points. Gate breaker ballista bolts cost 50 gp and weigh 30 pounds each.</p>
<Tabular format="siege" id="gate" p="1200" d="6d8" e="19-20/&times;2" r="100" t="B" w="5" a="3" l="5" s="0" c="d" z="g" />
</>};
const _cannon = {title: "Cannon", jsx: <><h2 id="eq-siegeengine-cannon-cannon">Cannon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 162</Link></p>
<p>Cannons are crafted of metal - some are cast in one piece, others welded with iron bands - and mounted either in the ground or on wooden frames. Cannons use black powder to propel their projectiles with great force.</p>
<p>A cannon has a misfire range of 1 (20 feet). Cannons have a <Link to="/rule/hardness">hardness</Link> of 10 and 70 hit points. Cannon balls cost 30 gp each and weigh 25 pounds.</p>
<Tabular format="siege" p="6000" d="6d6" e="&times;4" r="100" t="B and P" w="2" a="1" l="3" s="10" c="d" z="l" />
</>};
const _cannon_fiends_mouth = {title: "Cannon, fiend's mouth", jsx: <><h2 id="eq-siegeengine-cannon_fiends_mouth-cannon-fiends-mouth">Cannon, fiend's mouth</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>These massive <Link to="/eq-siegeengine/cannon">cannons</Link> are usually crafted in multiple pieces, and sometimes feature the heads of demons, devils, or other fiends at their mouths. Like normal canons, they propel their projectiles with great force.</p>
<p>A fiend's mouth cannon has a misfire range of 1 (30 ft.). Fiend's mouth canons have a <Link to="/rule/hardness">hardness</Link> of 10 and 140 hit points. Fiend's mouth cannon balls cost 45 gp and weigh 30 pounds each.</p>
<Tabular format="siege" p="9000" d="8d6" e="&times;4" r="150" t="B and P" w="3" a="1" l="3" s="0" c="d" z="h" />
</>};
const _firedrake = {title: "Firedrake", jsx: <><h2 id="eq-siegeengine-firedrake-firedrake">Firedrake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p><Icons id="eq-siegeengine-firedrake-line-cone-icons" wrapper="prefixIcon" list={["line","cone"]} /> These large siege engines are typically wheeled or attached to vehicles that can transport them to the battlefield. This apparatus fires gouts of <Link to="/eq-siegeengine/alchemists_fire">alchemist's fire</Link> in either a 60-foot line or a 30-foot cone (siege crew leader's choice). Targets in the area take 6d6 points of fire damage (DC 15 Reflex save halves); those who fail their saves also catch on fire.</p>
<p>A firedrake with the broken condition that suffers a further mishap explodes, dealing its damage to all creatures within a 20-foot blast (DC 15 Reflex save halves).</p>
<p>Firedrakes have a <Link to="/rule/hardness">hardness</Link> of 10 and 70 hit points. One use of firedrake ammunition costs 200 gp and weighs 20 pounds.</p>
<Tabular format="siege" p="4000" d="6d6" t="fire" w="3" a="2" l="5" s="10" c="d" z="h" />
</>};
const _manticores_tail = {title: "Manticore's Tail", jsx: <><h2 id="eq-siegeengine-manticores_tail-manticores-tail">Manticore's Tail</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>This massive <Link to="/eq-siegeengine/ballista">ballista</Link> fires a dozen or more bolts at once in a devastating rain of steel that deals 3d8 points of damage.</p>
<p><Icons id="eq-siegeengine-manticores_tail-cone-icons" wrapper="prefixIcon" list={["cone"]} /> The crew leader makes a separate attack roll with a -2 penalty against each creature and object within a 60-foot cone, ignoring <Link to="/rule/concealment">concealment</Link>. Confirm any critical threats separately. This weapon has a mishap only if the first attack roll is a mishap.</p>
<p>A manticore's tail has a <Link to="/rule/hardness">hardness</Link> of 5 and 100 hit points. Ammunition for one use of the manticore's tail costs 120 gp and weighs 120 pounds.</p>
<Tabular format="siege" p="1000" d="3d8" e="19-20/&times;2" x="see text" t="P" w="3" a="0" l="4" s="0" c="d" z="h" />
</>};
const _firewyrm = {title: "Firewyrm", jsx: <><h2 id="eq-siegeengine-firewyrm-firewyrm">Firewyrm</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>This siege engine is a larger version of the <Link to="/eq-siegeengine/firedrake">firedrake</Link>. A firewyrm is too large to be transported to the battlefield in one piece and must be assembled once the component parts reach the battlefield.</p>
<p><Icons id="eq-siegeengine-firewyrm-line-cone-icons" wrapper="prefixIcon" list={["line","cone"]} /> A firewyrm fires its gout of flame in either a 120-foot line or a 60-foot cone (crew leader's choice). Targets in the area take 6d6 points of fire damage (DC 20 Reflex save halves). Those who fail their saves <Link to="/rule/catch_on_fire">catch on fire</Link>. A firewyrm with the broken condition that suffers a further mishap explodes, dealing its damage to all creatures within a 30-foot blast (DC 20 Reflex save halves).</p>
<p>Firewyrms have a <Link to="/rule/hardness">hardness</Link> of 10 and 140 hit points. One use of firewyrm ammunition costs 400 gp and weighs 40 pounds.</p>
<Tabular format="siege" p="6000" d="6d6" t="fire" w="5" a="2" l="6" s="0" c="d" z="g" />
</>};
const _bombard_light = {hasJL:true,title: "Bombard, light", jsx: <><div className="jumpList" id="eq-siegeengine-bombard_light-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-siegeengine-bombard_light-light-bombard">Light Bombard</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-bombard_light-standard-bombard">Standard Bombard</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-bombard_light-heavy-bombard">Heavy Bombard</InnerLink></li></ul></div><h2 id="eq-siegeengine-bombard_light-bombard">Bombard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 161</Link></p>
<p>Resembling either large cauldrons or more traditional <Link to="/eq-siegeengine/cannon">cannons</Link>, these firearms lob their ammunition in an arc in order to deliver their deadly payloads over troops or castle walls.</p>
<p><Icons id="eq-siegeengine-bombard_light-info-icons" wrapper="prefixIcon" list={["info"]} /> Bombards are normally fired indirectly, but can also be fired as direct-fire siege engines. When they are used for direct fire, they take a -4 penalty on attack rolls and have their range increment halved, but do not have a minimum range.</p>
<p>Like all firearms, bombards do not suffer mishaps, but instead have a misfire chance.</p>
<h3 id="eq-siegeengine-bombard_light-light-bombard" data-hash-target>Light Bombard</h3>
<p>These bombards resemble cauldrons attached to swivels. Often they are mounted into the ground or into the stone of castle walls because of the mighty power of their recoil. The targeting DC of a light bombard is 15. A light bombard has a base misfire range of 1-2 (10 feet). Light bombards have a <Link to="/rule/hardness">hardness</Link> of 10 and 70 hit points. Light bombard balls cost 30 gp each and weigh 25 pounds.</p>
<Tabular format="siege" id="light" p="6000" d="5d6" e="&times;4" r="100" m="50" t="B and P" w="2" a="1" l="3" s="10" c="i" z="l" />
<h3 id="eq-siegeengine-bombard_light-standard-bombard" data-hash-target>Standard Bombard</h3>
<p>These bombards feature the greatest diversity of forms. Many take the cauldron shape of the light bombard, but they may also take the forms of more traditional cannons, albeit featuring stabilizing mechanisms that allow them to fire at a much steeper incline. The targeting DC of a standard bombard is 20. A standard bombard has a misfire range of 1-2 (20 feet). Standard bombards have a hardness of 10 and 140 hit points. Standard bombard balls cost 35 gp each and weigh 30 pounds.</p>
<Tabular format="siege" id="standard" p="8000" d="7d6" e="&times;4" r="150" m="100" t="B and P" w="2" a="1" l="3" s="10" c="i" z="h" />
<h3 id="eq-siegeengine-bombard_light-heavy-bombard" data-hash-target>Heavy Bombard</h3>
<p>These massive siege engines are often fixed to positions on high hilltops or atop massive keeps, raining death down on a valley or strait. Often these firearms come in two pieces connected by a screw mechanism. The bombard is unscrewed to be loaded, and then the main part of the muzzle is screwed back on to the barrel section in order to be fired.</p>
<p>Heavy bombards are too large and powerful to mount on vehicles. The targeting DC of a heavy bombard is 25. A heavy bombard has a misfire range of 1-2 (30 feet). Heavy bombards have a hardness of 10 and 280 hit points. Heavy bombard balls cost 45 gp each and weigh 50 pounds.</p>
<Tabular format="siege" id="heavy" p="16000" d="9d6" e="&times;4" r="200" m="100" t="B and P" w="4" a="3" l="5" s="0" c="i" z="g" />
</>};
const _catapult_light = {hasJL:true,title: "Catapult, light", jsx: <><div className="jumpList" id="eq-siegeengine-catapult_light-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-siegeengine-catapult_light-light-catapult">Light Catapult</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-catapult_light-standard-catapult">Standard Catapult</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-catapult_light-heavy-catapult">Heavy Catapult</InnerLink></li></ul></div><h2 id="eq-siegeengine-catapult_light-catapult">Catapult</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 162</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>Catapults are stone-throwing siege engines powered by winched arms that run through torsion skeins, and hold their payload in a cup that swings up and over the weapon when released. Catapults can hurl a variety of different types of ammunition (the damage given is for stone projectiles; other types of ammunition may deal different damage). They are indirect-fire siege engines.</p>
<h3 id="eq-siegeengine-catapult_light-light-catapult" data-hash-target>Light Catapult</h3>
<p>These catapults are Large and often mounted on wheels. The targeting DC of a light catapult is 15. Light catapults have a <Link to="/rule/hardness">hardness</Link> of 5 and 50 hit points. Light catapult stones cost 10 gp and weigh 50 pounds each.</p>
<Tabular format="siege" id="light" p="550" d="4d6" e="&times;2" r="150" m="50" t="B" w="2" a="2" l="3" s="10" c="i" z="l" />
<h3 id="eq-siegeengine-catapult_light-standard-catapult" data-hash-target>Standard Catapult</h3>
<p>These Huge siege engines are too large to be transported to the battlefield in one piece, and require assembly. They typically hurl large stones indirectly at a target (targeting DC 20). Standard catapults have a hardness of 5 and 100 hit points. Standard catapult stones cost 15 gp and weigh 75 pounds each.</p>
<Tabular format="siege" id="standard" p="800" d="6d6" e="&times;2" r="200" m="100" t="B" w="3" a="2" l="3" s="0" c="i" z="h" />
<h3 id="eq-siegeengine-catapult_light-heavy-catapult" data-hash-target>Heavy Catapult</h3>
<p>These Gargantuan siege engines are too large to be transported to the battlefield in one piece, and require assembly. They typically hurl large stones indirectly at a target (targeting DC 25). Heavy catapults have a hardness of 5 and 200 hit points. Heavy catapult stones cost 25 gp and weigh 90 pounds each.</p>
<Tabular format="siege" id="heavy" p="1000" d="8d6" e="&times;2" r="300" m="100" t="B" w="4" a="3" l="3" s="0" c="i" z="g" />
</>};
const _trebuchet_light = {hasJL:true,title: "Trebuchet, light", jsx: <><div className="jumpList" id="eq-siegeengine-trebuchet_light-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-siegeengine-trebuchet_light-light-trebuchet">Light Trebuchet</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-trebuchet_light-standard-trebuchet">Standard Trebuchet</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-trebuchet_light-heavy-trebuchet">Heavy Trebuchet</InnerLink></li></ul></div><h2 id="eq-siegeengine-trebuchet_light-trebuchet">Trebuchet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>Trebuchets are similar in form to <Link to="/eq-siegeengine/catapult">catapults</Link>, with the payload placed into a basket, cup, or sling at the end of a long lever, and a counterweight (often with crew or animals pulling attached ropes) close to the fulcrum. The leverage imparted by a trebuchet allows it to hurl massive missiles that scatter to a number of squares around the target square based on the size of the trebuchet.</p>
<p>Trebuchets are too bulky to move on wheels or vehicles and must be assembled on the battlefield. Trebuchets have a minimum range of 150 feet.</p>
<h3 id="eq-siegeengine-trebuchet_light-light-trebuchet" data-hash-target>Light Trebuchet</h3>
<p>These Large siege engines typically hurl large stones indirectly at a target (targeting DC 15). A light trebuchet's ammunition scatters on contact, dealing full damage to the target square and half its damage to creatures and objects within 5 feet of the target square (creatures can make a DC 15 Reflex save to halve the damage again). Light trebuchets have a <Link to="/rule/hardness">hardness</Link> of 5 and 50 hit points. One use of light trebuchet stones costs 15 gp and weighs 60 pounds.</p>
<Tabular format="siege" id="light" p="800" d="4d6" e="&times;2" r="200" m="100" t="B" w="3" a="2" l="3" s="0" c="i" z="l" />
<h3 id="eq-siegeengine-trebuchet_light-standard-trebuchet" data-hash-target>Standard Trebuchet</h3>
<p>These Huge siege engines typically hurl large stones indirectly at a target (targeting DC 20). A standard trebuchet's ammunition scatters on contact, dealing full damage to the target square and half damage to creatures and objects within 15 feet of the target square (creatures can make a DC 20 Reflex save to halve the damage again). Standard trebuchets have a hardness of 5 and 100 hit points. One use of standard trebuchet stones costs 30 gp and weighs 110 pounds.</p>
<Tabular format="siege" id="standard" p="1000" d="6d6" e="&times;2" r="300" m="150" t="B" w="4" a="2" l="3" s="0" c="i" z="h" />
<h3 id="eq-siegeengine-trebuchet_light-heavy-trebuchet" data-hash-target>Heavy Trebuchet</h3>
<p>These Gargantuan siege engines typically hurl large stones indirectly at a target (targeting DC 25). A heavy trebuchet's ammunition scatters on contact, dealing full damage to the target square and half its damage to creatures and objects within 30 feet of the target square (creatures can make a DC 25 Reflex save to halve the damage again). Heavy trebuchets have a hardness of 5 and 200 hit points. One use of heavy trebuchet stones costs 40 gp and weighs 120 pounds.</p>
<Tabular format="siege" id="heavy" p="1500" d="8d6" e="&times;2" r="400" m="200" t="B" w="4" a="3" l="3" s="0" c="i" z="g" />
</>};
const _springal_arrow = {hasJL:true,title: "Springal, arrow", jsx: <><div className="jumpList" id="eq-siegeengine-springal_arrow-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="eq-siegeengine-springal_arrow-arrow-springal">Arrow Springal</InnerLink></li><li><InnerLink toTop to="eq-siegeengine-springal_arrow-rocket-springal">Rocket Springal</InnerLink></li></ul></div><h2 id="eq-siegeengine-springal_arrow-springal">Springal</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>A springal uses a torsion-cranked composite paddle to strike a firing rack containing multiple arrows or black-powder-propelled rockets, which rain down in an arc over a <Link to="/misc/burst">burst</Link> area. Springals are indirect-fire weapons that affect an area centered on the target square (targeting DC 20).</p>
<h3 id="eq-siegeengine-springal_arrow-arrow-springal" data-hash-target>Arrow Springal</h3>
<p>This springal propels a group of arrows that rains down on the targeted square and in a 15-foot burst around that square. One use of arrow springal ammunition costs 20 gp and weighs 10 pounds.</p>
<Tabular format="siege" id="arrow" p="1000" d="3d8" e="&times;3" r="100" m="50" t="P" w="3" a="2" l="3" s="0" c="i" z="h" />
<h3 id="eq-siegeengine-springal_arrow-rocket-springal" data-hash-target>Rocket Springal</h3>
<p>This highly volatile springal propels a group of black-powder rockets that rain down on the targeted square and in a 15-foot burst around the area. If the rocket springal misfires, it explodes, dealing its damage in a 20-foot blast around the springal. This explosion destroys the rocket springal. One use of rocket springal ammunition costs 500 gp and weighs 30 pounds.</p>
<Tabular format="siege" id="rocket" p="6000" d="3d10" e="&times;4" r="100" m="50" t="fire" w="3" a="2" l="3" s="0" c="i" z="h" />
</>};
const _bridge_assault_colossal = {title: "Bridge, assault, colossal", jsx: <><h2 id="eq-siegeengine-bridge_assault_colossal-bridge-assault">Bridge, assault</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 165</Link></p>
<p>An assault bridge is used to span a ditch, moat, or other gap. Raising an assault bridge requires one full-round action per 5 feet of length; up to four creatures may cooperate to raise a bridge. The time required is doubled for each size category that the bridge is larger than the creatures raising it. Large assault bridges have 40 hit points, Huge ones have 60 hit points, Gargantuan ones have 160 hit points, and Colossal ones have 240 hit points.</p>
<h3 id="eq-siegeengine-bridge_assault_colossal-table-3-16-bridges-and-escalade-ladders">Table 3-16: Bridges and Escalade Ladders</h3>
<ScrollContainer id="eq-siegeengine-bridge_assault_colossal--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Width</th>
<th>Length/Height</th>
<th>Price</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5 ft.</td>
<td>20 ft.</td>
<td>1 gp</td>
</tr>
<tr>
<td>Huge</td>
<td>5 ft.</td>
<td>30 ft.</td>
<td>10 gp</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>10 ft.</td>
<td>40 ft.</td>
<td>50 gp</td>
</tr>
<tr>
<td>Colossal</td>
<td>10 ft.</td>
<td>60 ft.</td>
<td>250 gp</td>
</tr>
</tbody></table></ScrollContainer>
<Tabular format="siege" p="See table" v="v" w="0" a="0" l="0" s="0" c="c" />
</>};
const _corvus = {title: "Corvus", jsx: <><h2 id="eq-siegeengine-corvus-corvus">Corvus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 165</Link></p>
<p>A corvus is a boarding device that features a hinged counterweight system for mounting a bridge vertically on a siege tower or a vehicle, with a hooked end to grab onto a target vehicle or structure.</p>
<p>A corvus is usually 10 feet wide and 15 feet long. It has a <Link to="/rule/hardness">hardness</Link> of 5 and 10 hit points per square. Using a corvus requires a DC 10 <Link to="/skill/profession">Profession</Link> (siege engineer) check as a full-round action; if the check fails, the corvus fails to catch on the target and must be reset (a full-round action).</p>
<p>A corvus mounted on a vehicle can target another moving vehicle. Doing so requires an opposed driving check to get the corvus into the correct position, which is within the length of the corvus and adjacent to the other vehicle.</p>
<p>Once a corvus is attached, it takes a Strength check as a full-round action to dislodge the corvus. Alternatively, if the corvus is attached to a vehicle, either vehicle driver can make a driving check as a standard action to dislodge the corvus (a check that succeeds by 5 or more destroys the corvus). The base DC for either of these checks is 15, and the DC increases by 5 for every Small or Medium creature currently standing on the corvus.</p>
<p>If a corvus is disengaged while creatures are standing on it, those creatures must make a DC 15 Reflex saving throw or fall. Succeeding at the saving throw allows them to move to the nearest area of safe ground, but such movement provokes attacks of opportunity. A corvus cannot be armored.</p>
<Tabular format="siege" p="100" w="1" a="0" l="0" s="0" c="c" />
<p><strong className="hl">Note:</strong> This has been marked as a 'Large' siege engine based on the description given. No official size was given in the source material.</p>
</>};
const _crushing_wheel = {title: "Crushing Wheel", jsx: <><h2 id="eq-siegeengine-crushing_wheel-crushing-wheel">Crushing Wheel</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>The bulk of this weapon is a steel roller nearly 10 feet wide. Handles or a harness project from the axle, allowing four orcs or one Large beast to push the crushing wheel from behind.</p>
<p>As a full-round action, its crew can roll the crushing wheel over creatures in front of it. This functions as the <Link to="/umr/trample">trample</Link> monster ability except as noted here. Creatures that are overrun fall <Link to="/rule/prone">prone</Link> and take 4d6 points of damage. Targets that succeed at a DC 15 Reflex saving throw take only half damage and avoid falling prone.</p>
<p>A crushing wheel has a <Link to="/rule/hardness">hardness</Link> of 10 and 100 hit points, and is a Large siege engine.</p>
<Tabular format="siege" p="500" d="4d6" t="B" w="4" a="0" l="0" s="0" c="c" />
</>};
const _earthmaul = {title: "Earthmaul", jsx: <><h2 id="eq-siegeengine-earthmaul-earthmaul">Earthmaul</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>This war machine is fitted with an enormous hammer. When dropped into the horizontal position, it functions like a sideways-mounted catapult, and is capable of clearing wide swaths of enemies. Although it doesn't use ammunition, the earthmaul must effectively be reloaded by winding the torsion.</p>
<p><Icons id="eq-siegeengine-earthmaul-cone-icons" wrapper="prefixIcon" list={["cone"]} /> When the earthmaul is activated, creatures on the ground in a 15-foot cone take 6d6 points of damage, are knocked 10 feet in the direction of the swing, and fall <Link to="/rule/prone">prone</Link>. A successful DC 20 Reflex saving throw halves the damage and negates the additional effects.</p>
<p>An earthmaul is a Huge siege engine and has a <Link to="/rule/hardness">hardness</Link> of 5 and 100 hit points.</p>
<Tabular format="siege" p="1000" d="6d6" t="B" w="3" a="0" l="3" s="0" c="c" />
</>};
const _gallery_colossal = {title: "Gallery, colossal", jsx: <><h2 id="eq-siegeengine-gallery_colossal-gallery">Gallery</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>A mobile temporary defense, a gallery is similar to a building made of hide or wood. Most are of flimsy construction, but rare examples are more stoutly built (use the <Link to="/rule/siege_engine_rules">rules</Link> for giving siege engines armor, and adjust AC, hardness, and hit points accordingly).</p>
<p>Galleries are almost always a single section of movable "wall" plus another section that acts as the "roof." (Galleries made to house battering rams are an exception, and typically have two joined wall sections and roof sections.) Because a gallery is partially open, it does not provide the same cover as a normal building: a creature inside a gallery gains <Link to="/rule/cover">cover</Link> if it is the same size as the gallery, improved cover if it is one size smaller, and total cover if it is two or more sizes smaller. Galleries are sized like creatures - a Larger gallery protects the same space as a Large creature, and so on.</p>
<p>Wooden galleries can be moved on rollers at a speed of 10 feet with their full crew, or 5 feet with at least half the required crew. Galleries have a base speed of 15 feet (or 10 feet if protected with medium or heavy armor).</p>
<p>Galleries have a <Link to="/rule/hardness">hardness</Link> of 5, and hit points based on their size.</p>
<ScrollContainer id="eq-siegeengine-gallery_colossal--table-0"><table>
<thead>
<tr>
<th>Gallery Size</th>
<th>Hit Points</th>
<th>Price</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>30 hp</td>
<td>250 gp</td>
</tr>
<tr>
<td>Huge</td>
<td>120 hp</td>
<td>500 gp</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>320 hp</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>Colossal</td>
<td>625 hp</td>
<td>2,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<Tabular format="siege" p="See table above" v="v" w="3" a="0" l="0" s="15" c="c" />
</>};
const _harvester = {title: "Harvester", jsx: <><h2 id="eq-siegeengine-harvester-harvester">Harvester</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>A variety of scythe-like blades extend from two sides of this wheeled machine. When it's pulled - typically by an <Link to="/monster/aurochs">aurochs</Link> or enslaved giants - the wheels' rotation causes the blades to slash indiscriminately.</p>
<p>Each round the harvester moves, it makes a melee attack with a +10 modifier against any adjacent creature it passes; it deals 2d8 points of damage to those it hits.</p>
<p>Multiple harvesters can be strung together. The crew required for a train of harvesters is equal to the total crew of the individual machines. Adjacent creatures are attacked by each individual harvester that passes them.</p>
<p>A harvester is a Large siege engine with a <Link to="/rule/hardness">hardness</Link> of 5 and 50 hit points.</p>
<Tabular format="siege" p="800" d="2d8" e="&times;4" t="S" w="4" a="0" l="0" s="0" c="c" />
</>};
const _ladder_escalade_gargantuan = {title: "Ladder, escalade, gargantuan", jsx: <><h2 id="eq-siegeengine-ladder_escalade_gargantuan-ladder-escalade">Ladder, escalade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>Escalade ladders have spiked bases for stability, and the upper 5 feet are metal-shod, with <Link to="/rule/hardness">hardness</Link> 10 and 20 hit points. The remainder of the ladder is wooden and has hardness 5 and hit points based on its size. Escalade ladders cannot be armored.</p>
<h3 id="eq-siegeengine-ladder_escalade_gargantuan-table-3-16-bridges-and-escalade-ladders">Table 3-16: Bridges and Escalade Ladders</h3>
<ScrollContainer id="eq-siegeengine-ladder_escalade_gargantuan--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Width</th>
<th>Length/Height</th>
<th>Hit Points</th>
<th>Price</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5 ft.</td>
<td>20 ft.</td>
<td>20 hp</td>
<td>5 gp</td>
</tr>
<tr>
<td>Huge</td>
<td>5 ft.</td>
<td>30 ft.</td>
<td>30 hp</td>
<td>10 gp</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>10 ft.</td>
<td>40 ft.</td>
<td>80 hp</td>
<td>50 gp</td>
</tr>
<tr>
<td>Colossal</td>
<td>10 ft.</td>
<td>60 ft.</td>
<td>120 hp</td>
<td>250 gp</td>
</tr>
</tbody></table></ScrollContainer>
<Tabular format="siege" p="See table above" v="v" w="8" a="0" l="0" s="0" c="c" />
</>};
const _ram_large = {title: "Ram, large", jsx: <><h2 id="eq-siegeengine-ram_large-ram">Ram</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>The most basic close assault weapons are iron-shod logs carried by one or more creatures to combine their strength. A ram can be used to deal damage or to make a Strength check against the target's break DC.</p>
<Block hl>
<Row><Cell>Ramming Charge</Cell><Cell><Icons id="eq-siegeengine-ram_large-info-icons" wrapper="prefixIcon" list={["info"]} /> Rams require momentum to be effective. All creatures using the ram must use the <Link to="/rule/charge">charge</Link> action to gain its full effect. Creatures not wishing to charge may make a ram attack as a full-round action, taking a -4 penalty on attack and damage rolls and Strength checks with the ram.</Cell></Row>
<Row><Cell>Breaking</Cell><Cell><Icons id="eq-siegeengine-ram_large-boost-icons" wrapper="prefixIcon" list={["boost"]} /> The crew leader makes a Strength check with a +2 bonus, adding +2 for each member of the crew (or equivalent number of larger creatures; see Crew under <Link to="/rule/siege_engine_rules">Siege Engine Rules</Link>) assisting. The ram also provides a +4 bonus per size category above Medium.</Cell></Row>
<Row><Cell>Damage</Cell><Cell><Icons id="eq-siegeengine-ram_large-down-icons" wrapper="prefixIcon" list={["down"]} /> The crew leader makes an attack roll with a -4 nonproficiency penalty. A hit deals the listed damage, plus the Strength modifiers of the crew leader and all members of the crew, regardless of their size.</Cell></Row>
<Row><Cell>Improvised Ram</Cell><Cell><Icons id="eq-siegeengine-ram_large-down-icons" wrapper="prefixIcon" list={["down"]} /> Any tree, log, or timber can be used as a ram with a -4 penalty on attack and damage rolls and Strength checks.</Cell></Row>
<Row><Cell>Pick</Cell><Cell><Icons id="eq-siegeengine-ram_large-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A ram with a pick head grants a +2 circumstance bonus on Strength checks and attack and damage rolls made against stone structures.</Cell></Row>
<Row><Cell>Screw</Cell><Cell><Icons id="eq-siegeengine-ram_large-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A ram with a screw head grants a +2 circumstance bonus on Strength checks and attack and damage rolls made against earthen structures.</Cell></Row>
<Row><Cell>Gallery Ram</Cell><Cell><Icons id="eq-siegeengine-ram_large-info-icons" wrapper="prefixIcon" list={["info"]} /> This is a ram suspended from chains or ropes within a gallery. A gallery ram does not require a charge action for full momentum. In addition, adding tethers to the back end of the ram allows four additional crew members to assist in using the ram.</Cell></Row></Block>
<p>Rams have a <Link to="/rule/hardness">hardness</Link> of 5 and hit points based on their size. Improvised rams have half the normal hit points.</p>
<p><strong className="hl">Large</strong> rams have 30 hit points.</p>
<Tabular format="siege" id="large" p="500" d="2d6" e="&times;3" t="B" w="5" a="0" l="0" s="15" c="c" />
<p><strong className="hl">Huge</strong> rams have 120 hit points.</p>
<Tabular format="siege" id="huge" p="1000" d="3d6" e="&times;3" t="B" w="10" a="0" l="0" s="15" c="c" />
<p><strong className="hl">Gargantuan</strong> rams have 320 hit points.</p>
<Tabular format="siege" id="garg" p="2000" d="6d6" e="&times;3" t="B" w="20" a="0" l="0" s="15" c="c" />
<p><strong className="hl">Colossal</strong> rams have 625 hit points.</p>
<Tabular format="siege" id="colo" p="5000" d="10d6" e="&times;3" t="B" w="40" a="0" l="0" s="15" c="c" />
</>};
const _siege_tower_colossal = {title: "Siege Tower, colossal", jsx: <><h2 id="eq-siegeengine-siege_tower_colossal-siege-tower">Siege Tower</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>A wooden gallery of stout construction, a siege tower consists of a tall protective shell with a roof section. The lower story of the tower contains the crew members who propel the tower, and provides total <Link to="/rule/cover">cover</Link> to those within. A siege tower with the broken condition moves at half speed. If a siege tower is destroyed, the entire tower collapses. Treat this as a <Link to="/rule/cave_ins_and_collapses">cave-in</Link>.</p>
<p>The upper section of a siege tower provides improved cover for a number of soldiers (see below) and may have pierced walls allowing creatures to fire ranged weapons out the sides. The roof section may have a battlement and may mount a siege engine of the siege tower's size or smaller and a <Link to="/eq-siegeengine/corvus">corvus</Link>. Siege towers have a base speed of 15 (or 10 feet if protected with medium or heavy armor).</p>
<p>Siege towers have a <Link to="/rule/hardness">hardness</Link> of 5, and hit points based on their size.</p>
<h3 id="eq-siegeengine-siege_tower_colossal-table-3-17-siege-tower-complement">Table 3-17: Siege Tower Complement</h3>
<ScrollContainer id="eq-siegeengine-siege_tower_colossal--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Soldiers</th>
<th>Hit Points</th>
<th>Price</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5</td>
<td>60 hp</td>
<td>1,000 gp</td>
</tr>
<tr>
<td>Huge</td>
<td>10</td>
<td>240 hp</td>
<td>2,000 gp</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>50</td>
<td>640 hp</td>
<td>5,000 gp</td>
</tr>
<tr>
<td>Colossal</td>
<td>200</td>
<td>640 hp</td>
<td>10,000 gp</td>
</tr>
</tbody></table></ScrollContainer>
<Tabular format="siege" p="See table above" v="v" w="48" a="0" l="0" s="15" c="c" />
</>};
const _hotchkiss_6_pounder = {title: "Hotchkiss 6 pounder", jsx: <><h2 id="eq-siegeengine-hotchkiss_6_pounder-hotchkiss-6-pounder">Hotchkiss 6-Pounder</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 64</Link></p>
<p>The Hotchkiss 6 pounder gun is a shortened version of the Hotchkiss 6 pounder naval gun, designed for use in the sponsons of World War I-era tanks such as the Mark IV. The Hotchkiss 6 pounder is a direct-fire advanced siege firearm that must be mounted in place on a vehicle to be used. It fires high explosive (HE) shells that deal 8d6 points of bludgeoning, piercing, and slashing damage in a 30-foot radius around the point of impact (Reflex DC 20 for half). A Hotchkiss 6 pounder is a Medium weapon and has hardness 10 and 70 hit points. Hotchkiss HE shells cost 25 gp each and weigh 6 pounds each.</p>
<p><strong className="hl">Cost</strong> 2,000 gp <strong className="hl">Weight</strong> Special<br/><strong>Damage</strong> 8d6; <strong>Critical</strong> &times;3; <strong>Range</strong> 300 ft.; <strong>Type</strong> B, P, and S<br/><strong>Misfire</strong> 1-2; <strong>Crew</strong> 2; <strong>Aim</strong> 0; <strong>Load</strong> 2<br/><strong className="hl">Category</strong> Direct-Fire Siege Engine; <strong className="hl">Proficiency</strong> Exotic</p>
</>};
const _ballista_heavy = {..._ballista_light, title: "Ballista, heavy"};
const _ballista_gate_breaker = {..._ballista_light, title: "Ballista, gate Breaker"};
const _bombard_standard = {..._bombard_light, title: "Bombard, standard"};
const _catapult_standard = {..._catapult_light, title: "Catapult, standard"};
const _springal_rocket = {..._springal_arrow, title: "Springal, rocket"};
const _trebuchet_standard = {..._trebuchet_light, title: "Trebuchet, standard"};
const _bombard_heavy = {..._bombard_light, title: "Bombard, heavy"};
const _catapult_heavy = {..._catapult_light, title: "Catapult, heavy"};
const _trebuchet_heavy = {..._trebuchet_light, title: "Trebuchet, heavy"};
const _bridge_assault_gargantuan = {..._bridge_assault_colossal, title: "Bridge, assault, gargantuan"};
const _bridge_assault_huge = {..._bridge_assault_colossal, title: "Bridge, assault, huge"};
const _bridge_assault_large = {..._bridge_assault_colossal, title: "Bridge, assault, large"};
const _gallery_gargantuan = {..._gallery_colossal, title: "Gallery, gargantuan"};
const _gallery_huge = {..._gallery_colossal, title: "Gallery, huge"};
const _gallery_large = {..._gallery_colossal, title: "Gallery, large"};
const _ladder_escalade_colossal = {..._ladder_escalade_gargantuan, title: "Ladder, escalade, colossal"};
const _ladder_escalade_huge = {..._ladder_escalade_gargantuan, title: "Ladder, escalade, huge"};
const _ladder_escalade_large = {..._ladder_escalade_gargantuan, title: "Ladder, escalade, large"};
const _ram_colossal = {..._ram_large, title: "Ram, colossal"};
const _ram_gargantuan = {..._ram_large, title: "Ram, gargantuan"};
const _ram_huge = {..._ram_large, title: "Ram, huge"};
const _siege_tower_gargantuan = {..._siege_tower_colossal, title: "Siege Tower, gargantuan"};
const _siege_tower_huge = {..._siege_tower_colossal, title: "Siege Tower, huge"};
const _siege_tower_large = {..._siege_tower_colossal, title: "Siege Tower, large"};
export default {not_found:_not_found,alchemists_fire:_alchemists_fire,blast_shot:_blast_shot,bomb:_bomb,chain_shot:_chain_shot,defoliant_shot:_defoliant_shot,entangling_bolt:_entangling_bolt,liquid_ice:_liquid_ice,plague_bundle:_plague_bundle,rockwasp_bomb:_rockwasp_bomb,smoke_shot:_smoke_shot,ballista_net:_ballista_net,flak:_flak,flechette_bolt:_flechette_bolt,weighted_bolt:_weighted_bolt,ballista_light:_ballista_light,cannon:_cannon,cannon_fiends_mouth:_cannon_fiends_mouth,firedrake:_firedrake,manticores_tail:_manticores_tail,firewyrm:_firewyrm,bombard_light:_bombard_light,catapult_light:_catapult_light,trebuchet_light:_trebuchet_light,springal_arrow:_springal_arrow,bridge_assault_colossal:_bridge_assault_colossal,corvus:_corvus,crushing_wheel:_crushing_wheel,earthmaul:_earthmaul,gallery_colossal:_gallery_colossal,harvester:_harvester,ladder_escalade_gargantuan:_ladder_escalade_gargantuan,ram_large:_ram_large,siege_tower_colossal:_siege_tower_colossal,hotchkiss_6_pounder:_hotchkiss_6_pounder,ballista_heavy:_ballista_heavy,ballista_gate_breaker:_ballista_gate_breaker,bombard_standard:_bombard_standard,catapult_standard:_catapult_standard,springal_rocket:_springal_rocket,trebuchet_standard:_trebuchet_standard,bombard_heavy:_bombard_heavy,catapult_heavy:_catapult_heavy,trebuchet_heavy:_trebuchet_heavy,bridge_assault_gargantuan:_bridge_assault_gargantuan,bridge_assault_huge:_bridge_assault_huge,bridge_assault_large:_bridge_assault_large,gallery_gargantuan:_gallery_gargantuan,gallery_huge:_gallery_huge,gallery_large:_gallery_large,ladder_escalade_colossal:_ladder_escalade_colossal,ladder_escalade_huge:_ladder_escalade_huge,ladder_escalade_large:_ladder_escalade_large,ram_colossal:_ram_colossal,ram_gargantuan:_ram_gargantuan,ram_huge:_ram_huge,siege_tower_gargantuan:_siege_tower_gargantuan,siege_tower_huge:_siege_tower_huge,siege_tower_large:_siege_tower_large}