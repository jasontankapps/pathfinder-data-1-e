import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-siegeengine-not_found-error">Error</h2>
<p>Unable to find the requested poison.</p>
</>};
const _alchemists_fire = {title: "Alchemist's fire", jsx: <><h2 id="eq-siegeengine-alchemists_fire-alchemists-fire">Alchemist's fire</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister of alchemist's fire can be used as ammunition in catapults and trebuchets. When it hits its target square, it deals 4d6 points of fire damage to each creature and wooden structure within 5 feet of the target space, and each creature must make a DC 20 Reflex saving throw or catch on fire (wooden objects automatically catch on fire). Every creature and wooden object within the area between 5 and 30 feet of the target space must make a DC 20 Reflex saving throw or take half the fire damage, but they do not catch on fire. On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to the siege engine and all nearby creatures and wooden objects as if one of the spaces of the siege engine (crew leader's choice) were the target square. This alchemical fire ignores the hardness of wooden objects.</p>
<p><strong>Cost</strong> 200 gp <strong>Weight</strong> 10 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _blast_shot = {title: "Blast Shot", jsx: <><h2 id="eq-siegeengine-blast_shot-blast-shot">Blast Shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>Instead of a single hard ball, this ammunition is a bundle of large pellets, balls, or pieces of scrap metal, propelled a short distance by black powder and attacking all creatures and objects within an area. Both cannons and fiend's mouth cannons can fire this kind of ammunition. When such a siege engine fires this ammunition, it hits every creature and object within a 30-foot-cone <Link to="/misc/burst">burst</Link>. The siege engine makes attack rolls against each creature and unattended object in the burst. It must miss every creature or target to misfire, and a misfire generates the normal effect. It deals its normal damage on a hit, but does not ignore the hardness of objects.</p>
<p><strong>Cost</strong> 30 gp <strong>Weight</strong> 25 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _bomb = {title: "Bomb", jsx: <><h2 id="eq-siegeengine-bomb-bomb">Bomb</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>A bomb is a metal canister filled with metal balls and black powder that can be used as ammunition in catapults and trebuchets or carried by two Medium creatures or one Large creature to its destination. A bomb either explodes on impact (if fired from a catapult or trebuchet, or within 3 rounds of a fuse being lit if carried). When it explodes, it deals 6d6 points of piercing and bludgeoning damage to all creatures and objects within 30 feet of the target square. On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to the siege engine and all nearby creatures and wooden objects as if one of the spaces of the siege engine (crew leader's choice) were the target square. It ignores the hardness of wood and stone.</p>
<p><strong>Cost</strong> 600 gp <strong>Weight</strong> 30 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _chain_shot = {title: "Chain shot", jsx: <><h2 id="eq-siegeengine-chain_shot-chain-shot">Chain shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This siege engine firearm ammunition can be loaded in a cannon or a fiend's mouth cannon. It is especially good at tearing through sails and dirigibles (see the <Link to="/rule/full_vehicle_rules">Vehicle rules</Link>), dealing double its normal damage to those forms of propulsion. When fired at a creature, on a hit, the creature must succeed at a DC 20 Fortitude saving throw or be knocked prone.</p>
<p><strong>Cost</strong> 50 gp <strong>Weight</strong> 30 lbs<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _defoliant_shot = {title: "Defoliant Shot", jsx: <><h2 id="eq-siegeengine-defoliant_shot-defoliant-shot">Defoliant Shot</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>When used as ammunition in a catapult or trebuchet, this ceramic canister releases a mist of <Link to="/eq-misc/defoliant">defoliant</Link> on impact. When it hits the target square, it deals 2d6 points of damage to any creature in that space. Plant creatures within 30 feet of the target square take an additional 4d6 points of damage. A successful DC 20 Fortitude saving throw halves this additional damage. Plant creatures within 5 feet of the target space that fail their saving throws also take 1d4 points of <Link to="/rule/strength_damage">Strength damage</Link> and 1d4 points of Constitution damage. The defoliant also kills vegetation within 30 feet of the target square.</p>
<p>On a siege engine mishap, this ammunition explodes before it's launched, dealing its damage to the siege engine and all nearby plant creatures as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<p><strong>Cost</strong> 300 gp <strong>Weight</strong> 20 lbs<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _entangling_bolt = {title: "Entangling Bolt", jsx: <><h2 id="eq-siegeengine-entangling_bolt-entangling-bolt">Entangling Bolt</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>When launched from a ballista, this specialized bolt unfurls into a large net. An attack with entangling ammunition is a ranged touch attack, but it's only effective within one range increment. If it hits, the target is <Link to="/rule/entangled">entangled</Link>, but the attack deals no damage.</p>
<p>An entangled creature can escape with a successful DC 20 Escape Artist check (a full-round action). The net has 5 hit points and can be burst with a successful DC 25 Strength check (also a full-round action). Entangling ammunition is useful only against creatures within one size category of the firing ballista.</p>
<p><strong>Cost</strong> 50 gp <strong>Weight</strong> 25 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _liquid_ice = {title: "Liquid ice", jsx: <><h2 id="eq-siegeengine-liquid_ice-liquid-ice">Liquid ice</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister filled with alchemical liquid ice can be used as ammunition in catapults and trebuchets. When it hits its target square, it deals 4d6 points of cold damage to each creature within 5 feet of the targeting space, and each creature must make a DC 20 Fortitude save or become <Link to="/rule/entangled">entangled</Link> for 1 round. Every creature within the area between 5 and 30 feet of the target space must make a DC 20 Fortitude saving throw or take half damage. On a siege engine mishap, this ammunition explodes before it is launched, dealing its damage to all nearby creatures as if one of the spaces of the siege engine (crew leader's choice) were the target square.</p>
<p><strong>Cost</strong> 400 gp <strong>Weight</strong> 20 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _plague_bundle = {title: "Plague bundle", jsx: <><h2 id="eq-siegeengine-plague_bundle-plague-bundle">Plague bundle</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard, ceramic canister is filled with a noxious mass of diseased carrion and offal that can be used as ammunition for a catapult or a trebuchet. It deals only half damage, but every creature hit by it is exposed to <Link to="/disease/filth_fever">filth fever</Link>. A GM might allow a plague bundle to inflict other diseases.</p>
<p><strong>Cost</strong> 80 gp <strong>Weight</strong> 20 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _rockwasp_bomb = {title: "Rockwasp Bomb", jsx: <><h2 id="eq-siegeengine-rockwasp_bomb-rockwasp-bomb">Rockwasp Bomb</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>Usable in catapults and trebuchets, this ammunition consists of a wooden crate packed with wax globes, from which a faint buzzing sound emanates. Visible as a dark shape at the center of each globe is a rat-sized hornet known as a rockwasp. The alchemical wax keeps the wasps immobilized, while tiny air holes allow them to breath. This ammunition deals only half damage, but releases a <Link to="/monster/wasp_swarm">wasp swarm</Link> - two wasp swarms if used for a heavy catapult or heavy trebuchet. The wasps attack for 1 minute before dispersing. On a siege engine mishap, the wasps escape before the ammunition is launched.</p>
<p><strong>Cost</strong> 2,000 gp <strong>Weight</strong> 100 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _smoke_shot = {title: "Smoke shot", jsx: <><h2 id="eq-siegeengine-smoke_shot-smoke-shot">Smoke shot</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 164</Link></p>
<p>This hard ceramic sphere contains two alchemical substances separated by a thin barrier, much like a <Link to="/eq-misc/smoke_pellet">smoke pellet</Link> in larger form, usable by cannons and fiend's mouth cannons. When it hits the targeting space, it deals 2d6 points of damage to any creature in that space, and the substances mingle and then create an area of foul but harmless yellow smoke radiating 30 feet from the target square. Treat the effect as a <Link to="/spell/fog_cloud">fog cloud</Link> spell. On a siege engine mishap, the ammunition explodes before it is launched. Its effect is centered on one of the spaces of the siege engine (crew leader's choice).</p>
<p><strong>Cost</strong> 250 gp <strong>Weight</strong> 20 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _ballista_net = {title: "Ballista net", jsx: <><h2 id="eq-siegeengine-ballista_net-ballista-net">Ballista net</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This ballista bolt is specially equipped with a net which unfurls as the bolt flies toward its target. Unlike a standard ballista bolt, a ballista net requires only a touch attack to hit. If a ballista net hits, it deals no damage, but causes the target to become <Link to="/rule/entangled">entangled</Link>. An entangled creature takes a -2 penalty on attack rolls and a -4 penalty to Dexterity, can move at only half speed, and cannot charge or run.</p>
<p><strong>Cost</strong> 75 gp <strong>Weight</strong> 15 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Ammunition</p>
</>};
const _flak = {title: "Flak", jsx: <><h2 id="eq-siegeengine-flak-flak">Flak</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>Flak ammunition is a type of short-fused bomb, specifically designed to explode in midair. Flak ammunition is packed with steel balls and black powder, and may be fired from a bombard or catapult. When flak explodes, it deals 4d6 points of piercing and bludgeoning damage to all creatures and objects within 40 feet of the target square. A flak bomb must reach an altitude of at least 50 feet to function properly. If flak ammunition impacts anything before it reaches this altitude, the bomb deals 1d6 points of bludgeoning damage and fails to explode.</p>
<p><strong>Cost</strong> 500 gp <strong>Weight</strong> 30 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Ammunition</p>
</>};
const _flechette_bolt = {title: "Flechette bolt", jsx: <><h2 id="eq-siegeengine-flechette_bolt-flechette-bolt">Flechette bolt</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This ballista bolt consists of dozens of small steel darts, called flechettes, which break away after the bolt is released. If the bolt impacts anything before it reaches a distance of 30 feet, it deals 1d8 points of damage. Between 30 and 60 feet away, the flechettes deploy, dealing piercing damage to every creature and object within a 30-foot-cone <Link to="/misc/burst">burst</Link>. After 60 feet, the flechettes lose momentum and fall harmlessly to the ground.</p>
<p>Separate attack rolls must be made against each target hit by the burst. Light ballista flechettes deal 2d8 points of damage, while heavy ballista flechettes deal 3d8 points. Additionally, any winged creature hit by flechettes has several holes punched in its wings, and has its fly speed reduced by 10 feet. The creature takes a -4 penalty on Fly checks until the damage is healed.</p>
<p><strong>Cost</strong> 30 gp <strong>Weight</strong> 20 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Ammunition</p>
</>};
const _weighted_bolt = {title: "Weighted bolt", jsx: <><h2 id="eq-siegeengine-weighted_bolt-weighted-bolt">Weighted bolt</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 27</Link></p>
<p>This barbed ballista bolt is equipped with a heavy weight at the end of a long chain. The bolt's extra weight makes the bolt harder to fire accurately, and imposes a -2 penalty on attack rolls. In addition to the normal damage dealt by a ballista bolt of its size, on a successful hit the weighted bolt lodges itself into the target's body, leaving the weighted chain hanging loosely, imparting a -5 penalty on all Fly checks made by the target. These penalties stack if a target is hit with multiple weighted bolts. A weighted bolt can be removed with a successful DC 25 Heal check or a DC 20 Strength check.</p>
<p><strong>Cost</strong> 50 gp <strong>Weight</strong> 40 lbs.<br/><strong>Category</strong> Ammunition; <strong>Proficiency</strong> Ammunition</p>
</>};
const _ballista_light = {title: "Ballista, light", jsx: <><h2 id="eq-siegeengine-ballista_light-ballista">Ballista</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 160</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>Resembling a massive crossbow, a ballista's power is provided by twisted skeins of animal sinew used as torsion springs driving a pair of adjustable arms. A cord attached to both arms is winched back and a projectile is loaded into a grooved slider for release. Ballistae are direct-fire weapons.</p>
<p><strong>Light:</strong> This common type of ballista, also called an arbalest or scorpion, is size Large, maneuverable, and often mounted atop towers or even vehicles. Light ballistae have a hardness of 5 and 50 hit points. Light ballista bolts cost 10 gp each and weigh 10 pounds.<br/><strong>Cost</strong> 500 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 3d8; <strong>Critical</strong> 19-20/&times;2; <strong>Range</strong> 120 ft.; <strong>Type</strong> P<br/><strong>Crew</strong> 1; <strong>Aim</strong> 0; <strong>Load</strong> 2; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Direct-Fire (Large); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Heavy:</strong> These Huge-sized siege engines are commonly used as castle defenses, as well as on large warships. Heavy ballistae have a hardness of 5 and 100 hit points. Heavy ballista bolts cost 30 gp and weigh 20 pounds each.<br/><strong>Cost</strong> 800 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 4d8; <strong>Critical</strong> 19-20/&times;2; <strong>Range</strong> 180 ft.; <strong>Type</strong> P<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Direct-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gate Breaker:</strong> This massive ballista fires specially weighted quarrels with blunt metal tips. These are used as long-range battering rams, shot at walls or the gates of castles. When they hit a wooden structure, they have a critical range of 19-20/&times;3. Gate breaker ballistae have a hardness of 5 and 200 hit points. Gate breaker ballista bolts cost 50 gp and weigh 30 pounds each.<br/><strong>Cost</strong> 1,200 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d8; <strong>Critical</strong> 19-20/&times;2; <strong>Range</strong> 100 ft.; <strong>Type</strong> B<br/><strong>Crew</strong> 5; <strong>Aim</strong> 3; <strong>Load</strong> 5; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Direct-Fire (Gargantuan); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _cannon = {title: "Cannon", jsx: <><h2 id="eq-siegeengine-cannon-cannon">Cannon</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 162</Link></p>
<p>Cannons are crafted of metal - some are cast in one piece, others welded with iron bands - and mounted either in the ground or on wooden frames. Cannons use black powder to propel their projectiles with great force. A cannon has a misfire range of 1 (20 feet). Cannons have a hardness of 10 and 70 hit points. Cannon balls cost 30 gp each and weigh 25 pounds.</p>
<p><strong>Cost</strong> 6,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> &times;4; <strong>Range</strong> 100 ft.; <strong>Type</strong> B and P<br/><strong>Crew</strong> 2; <strong>Aim</strong> 1; <strong>Load</strong> 3; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Direct-Fire (Large); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _cannon_fiends_mouth = {title: "Cannon, fiend's mouth", jsx: <><h2 id="eq-siegeengine-cannon_fiends_mouth-cannon-fiends-mouth">Cannon, fiend's mouth</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>These massive cannons are usually crafted in multiple pieces, and sometimes feature the heads of demons, devils, or other fiends at their mouths. Like normal canons, they propel their projectiles with great force. A fiend's mouth cannon has a misfire range of 1 (30 ft.). Fiend's mouth canons have a hardness of 10 and 140 hit points. Fiend's mouth cannon balls cost 45 gp and weigh 30 pounds each.</p>
<p><strong>Cost</strong> 9,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 8d6; <strong>Critical</strong> &times;4; <strong>Range</strong> 150 ft.; <strong>Type</strong> B and P<br/><strong>Crew</strong> 3; <strong>Aim</strong> 1; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Direct-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _firedrake = {title: "Firedrake", jsx: <><h2 id="eq-siegeengine-firedrake-firedrake">Firedrake</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>These large siege engines are typically wheeled or attached to vehicles that can transport them to the battlefield. This apparatus fires gouts of <Link to="/eq-siegeengine/alchemists_fire">alchemist's fire</Link> in either a 60-foot line or a 30-foot cone (siege crew leader's choice). Targets in the area take 6d6 points of fire damage (DC 15 Reflex save halves); those who fail their saves also catch on fire. A firedrake with the broken condition that suffers a further mishap explodes, dealing its damage to all creatures within a 20-foot blast (DC 15 Reflex save halves). Firedrakes have a hardness of 10 and 70 hit points. One use of firedrake ammunition costs 200 gp and weighs 20 pounds.</p>
<p><strong>Cost</strong> 4,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> fire<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 5; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Direct-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _manticores_tail = {title: "Manticore's Tail", jsx: <><h2 id="eq-siegeengine-manticores_tail-manticores-tail">Manticore's Tail</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>This massive ballista fires a dozen or more bolts at once in a devastating rain of steel that deals 3d8 points of damage. The crew leader makes a separate attack roll with a -2 penalty against each creature and object within a 60-foot cone, ignoring <Link to="/rule/concealment">concealment</Link>. Confirm any critical threats separately. This weapon has a mishap only if the first attack roll is a mishap. A manticore's tail has a hardness of 5 and 100 hit points. Ammunition for one use of the manticore's tail costs 120 gp and weighs 120 pounds.</p>
<p><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 3d8; <strong>Critical</strong> 19-20/&times;2; <strong>Range</strong> see text; <strong>Type</strong> P<br/><strong>Crew</strong> 3; <strong>Aim</strong> 0; <strong>Load</strong> 4; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Direct-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _firewyrm = {title: "Firewyrm", jsx: <><h2 id="eq-siegeengine-firewyrm-firewyrm">Firewyrm</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>This siege engine is a larger version of the firedrake. A firewyrm is too large to be transported to the battlefield in one piece and must be assembled once the component parts reach the battlefield. A firewyrm fires its gout of flame in either a 120-foot line or a 60-foot cone (crew leader's choice). Targets in the area take 6d6 points of fire damage (DC 20 Reflex save halves). Those who fail their saves catch on fire. A firewyrm with the broken condition that suffers a further mishap explodes, dealing its damage to all creatures within a 30-foot blast (DC 20 Reflex save halves). Firewyrms have a hardness of 10 and 140 hit points. One use of firewyrm ammunition costs 400 gp and weighs 40 pounds.</p>
<p><strong>Cost</strong> 6,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> fire<br/><strong>Crew</strong> 5; <strong>Aim</strong> 2; <strong>Load</strong> 6; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Direct-Fire (Gargantuan); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _bombard_light = {title: "Bombard, light", jsx: <><h2 id="eq-siegeengine-bombard_light-bombard">Bombard</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 161</Link></p>
<p>Resembling either large cauldrons or more traditional cannons, these firearms lob their ammunition in an arc in order to deliver their deadly payloads over troops or castle walls. Bombards are normally fired indirectly, but can also be fired as direct-fire siege engines. When they are used for direct fire, they take a -4 penalty on attack rolls and have their range increment halved, but do not have a minimum range. Like all firearms, bombards do not suffer mishaps, but instead have a misfire chance.</p>
<p><strong>Light:</strong> These bombards resemble cauldrons attached to swivels. Often they are mounted into the ground or into the stone of castle walls because of the mighty power of their recoil. The targeting DC of a light bombard is 15. A light bombard has a base misfire range of 1-2 (10 feet). Light bombards have a hardness of 10 and 70 hit points. Light bombard balls cost 30 gp each and weigh 25 pounds.<br/><strong>Cost</strong> 6,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 5d6; <strong>Critical</strong> &times;4; <strong>Range</strong> 100 ft. (50 ft. min.); <strong>Type</strong> B and P<br/><strong>Crew</strong> 2; <strong>Aim</strong> 1; <strong>Load</strong> 3; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Indirect-Fire (Large); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Standard:</strong> These bombards feature the greatest diversity of forms. Many take the cauldron shape of the light bombard, but they may also take the forms of more traditional cannons, albeit featuring stabilizing mechanisms that allow them to fire at a much steeper incline. The targeting DC of a standard bombard is 20. A standard bombard has a misfire range of 1-2 (20 feet). Standard bombards have a hardness of 10 and 140 hit points. Standard bombard balls cost 35 gp each and weigh 30 pounds.<br/><strong>Cost</strong> 8,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 7d6; <strong>Critical</strong> &times;4; <strong>Range</strong> 150 ft. (100 ft. min.); <strong>Type</strong> B and P<br/><strong>Crew</strong> 2; <strong>Aim</strong> 1; <strong>Load</strong> 3; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Indirect-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Heavy:</strong> These massive siege engines are often fixed to positions on high hilltops or atop massive keeps, raining death down on a valley or strait. Often these firearms come in two pieces connected by a screw mechanism. The bombard is unscrewed to be loaded, and then the main part of the muzzle is screwed back on to the barrel section in order to be fired. Heavy bombards are too large and powerful to mount on vehicles. The targeting DC of a heavy bombard is 25. A heavy bombard has a misfire range of 1-2 (30 feet). Heavy bombards have a hardness of 10 and 280 hit points. Heavy bombard balls cost 45 gp each and weigh 50 pounds.<br/><strong>Cost</strong> 16,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 9d6; <strong>Critical</strong> &times;4; <strong>Range</strong> 200 ft. (100 ft. min.); <strong>Type</strong> B and P<br/><strong>Crew</strong> 4; <strong>Aim</strong> 3; <strong>Load</strong> 5; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Gargantuan); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _catapult_light = {title: "Catapult, light", jsx: <><h2 id="eq-siegeengine-catapult_light-catapult">Catapult</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 162</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>Catapults are stone-throwing siege engines powered by winched arms that run through torsion skeins, and hold their payload in a cup that swings up and over the weapon when released. Catapults can hurl a variety of different types of ammunition (the damage given is for stone projectiles; other types of ammunition may deal different damage). They are indirect-fire siege engines.</p>
<p><strong>Light:</strong> These catapults are Large and often mounted on wheels. The targeting DC of a light catapult is 15. Light catapults have a hardness of 5 and 50 hit points. Light catapult stones cost 10 gp and weigh 50 pounds each.<br/><strong>Cost</strong> 550 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 4d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 150 ft. (50 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 2; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 10 ft.<br/><strong>Category</strong> Indirect-Fire (Large); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Standard:</strong> These Huge siege engines are too large to be transported to the battlefield in one piece, and require assembly. They typically hurl large stones indirectly at a target (targeting DC 20). Standard catapults have a hardness of 5 and 100 hit points. Standard catapult stones cost 15 gp and weigh 75 pounds each.<br/><strong>Cost</strong> 800 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 200 ft. (100 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Heavy:</strong> These Gargantuan siege engines are too large to be transported to the battlefield in one piece, and require assembly. They typically hurl large stones indirectly at a target (targeting DC 25). Heavy catapults have a hardness of 5 and 200 hit points. Heavy catapult stones cost 25 gp and weigh 90 pounds each.<br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 8d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 300 ft. (100 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 4; <strong>Aim</strong> 3; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Gargantuan); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _trebuchet_light = {title: "Trebuchet, light", jsx: <><h2 id="eq-siegeengine-trebuchet_light-trebuchet">Trebuchet</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>Trebuchets are similar in form to catapults, with the payload placed into a basket, cup, or sling at the end of a long lever, and a counterweight (often with crew or animals pulling attached ropes) close to the fulcrum. The leverage imparted by a trebuchet allows it to hurl massive missiles that scatter to a number of squares around the target square based on the size of the trebuchet. Trebuchets are too bulky to move on wheels or vehicles and must be assembled on the battlefield. Trebuchets have a minimum range of 150 feet.</p>
<p><strong>Light:</strong> These Large siege engines typically hurl large stones indirectly at a target (targeting DC 15). A light trebuchet's ammunition scatters on contact, dealing full damage to the target square and half its damage to creatures and objects within 5 feet of the target square (creatures can make a DC 15 Reflex save to halve the damage again). Light trebuchets have a hardness of 5 and 50 hit points. One use of light trebuchet stones costs 15 gp and weighs 60 pounds.<br/><strong>Cost</strong> 800 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 4d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 200 ft. (100 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Large); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Standard:</strong> These Huge siege engines typically hurl large stones indirectly at a target (targeting DC 20). A standard trebuchet's ammunition scatters on contact, dealing full damage to the target square and half damage to creatures and objects within 15 feet of the target square (creatures can make a DC 20 Reflex save to halve the damage again). Standard trebuchets have a hardness of 5 and 100 hit points. One use of standard trebuchet stones costs 30 gp and weighs 110 pounds.<br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 300 ft. (150 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 4; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Heavy:</strong> These Gargantuan siege engines typically hurl large stones indirectly at a target (targeting DC 25). A heavy trebuchet's ammunition scatters on contact, dealing full damage to the target square and half its damage to creatures and objects within 30 feet of the target square (creatures can make a DC 25 Reflex save to halve the damage again). Heavy trebuchets have a hardness of 5 and 200 hit points. One use of heavy trebuchet stones costs 40 gp and weighs 120 pounds.<br/><strong>Cost</strong> 1,500 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 8d6; <strong>Critical</strong> &times;2; <strong>Range</strong> 400 ft. (200 ft. min.); <strong>Type</strong> B<br/><strong>Crew</strong> 4; <strong>Aim</strong> 3; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Gargantuan); <strong>Proficiency</strong> Siege Engine</p>
</>};
const _springal_arrow = {title: "Springal, arrow", jsx: <><h2 id="eq-siegeengine-springal_arrow-springal-arrow">Springal, arrow</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 163</Link></p>
<p>A springal uses a torsion-cranked composite paddle to strike a firing rack containing multiple arrows or black-powder-propelled rockets, which rain down in an arc over a <Link to="/misc/burst">burst</Link> area. Springals are indirect-fire weapons that affect an area centered on the target square (targeting DC 20).</p>
<p><strong>Arrow:</strong> This springal propels a group of arrows that rains down on the targeted square and in a 15-foot burst around that square. One use of arrow springal ammunition costs 20 gp and weighs 10 pounds.<br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 3d8; <strong>Critical</strong> &times;3; <strong>Range</strong> 100 ft. (50 ft. min.); <strong>Type</strong> P<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Rocket:</strong> This highly volatile springal propels a group of black-powder rockets that rain down on the targeted square and in a 15-foot burst around the area. If the rocket springal misfires, it explodes, dealing its damage in a 20-foot blast around the springal. This explosion destroys the rocket springal. One use of rocket springal ammunition costs 500 gp and weighs 30 pounds.<br/><strong>Cost</strong> 6,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 3d10; <strong>Critical</strong> &times;4; <strong>Range</strong> 100 ft. (50 ft. min.); <strong>Type</strong> fire<br/><strong>Crew</strong> 3; <strong>Aim</strong> 2; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Indirect-Fire (Huge); <strong>Proficiency</strong> Siege Engine</p>
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
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5 ft.</td>
<td>20 ft.</td>
</tr>
<tr>
<td>Huge</td>
<td>5 ft.</td>
<td>30 ft.</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>10 ft.</td>
<td>40 ft.</td>
</tr>
<tr>
<td>Colossal</td>
<td>10 ft.</td>
<td>60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Large</strong><br/><strong>Cost</strong> 1 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 0; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Huge</strong><br/><strong>Cost</strong> 10 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 0; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gargantuan</strong><br/><strong>Cost</strong> 50 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 0; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Colossal</strong><br/><strong>Cost</strong> 250 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 0; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _corvus = {title: "Corvus", jsx: <><h2 id="eq-siegeengine-corvus-corvus">Corvus</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 165</Link></p>
<p>A corvus is a boarding device that features a hinged counterweight system for mounting a bridge vertically on a siege tower or a vehicle, with a hooked end to grab onto a target vehicle or structure. A corvus is usually 10 feet wide and 15 feet long. It has a hardness of 5 and 10 hit points per square. Using a corvus requires a DC 10 Profession (siege engineer) check as a full-round action; if the check fails, the corvus fails to catch on the target and must be reset (a full-round action). A corvus mounted on a vehicle can target another moving vehicle. Doing so requires an opposed driving check to get the corvus into the correct position, which is within the length of the corvus and adjacent to the other vehicle. Once a corvus is attached, it takes a Strength check as a full-round action to dislodge the corvus. Alternatively, if the corvus is attached to a vehicle, either vehicle driver can make a driving check as a standard action to dislodge the corvus (a check that succeeds by 5 or more destroys the corvus). The base DC for either of these checks is 15, and the DC increases by 5 for every Small or Medium creature currently standing on the corvus. If a corvus is disengaged while creatures are standing on it, those creatures must make a DC 15 Reflex saving throw or fall. Succeeding at the saving throw allows them to move to the nearest area of safe ground, but such movement provokes attacks of opportunity. A corvus cannot be armored.</p>
<p><strong>Cost</strong> 100 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 1; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Note:</strong> Marked as 'Large' siege engine based on the description given.</p>
</>};
const _crushing_wheel = {title: "Crushing Wheel", jsx: <><h2 id="eq-siegeengine-crushing_wheel-crushing-wheel">Crushing Wheel</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>The bulk of this weapon is a steel roller nearly 10 feet wide. Handles or a harness project from the axle, allowing four orcs or one Large beast to push the crushing wheel from behind. As a full-round action, its crew can roll the crushing wheel over creatures in front of it. This functions as the <Link to="/umr/trample">trample</Link> monster ability except as noted here. Creatures that are overrun fall <Link to="/rule/prone">prone</Link> and take 4d6 points of damage. Targets that succeed at a DC 15 Reflex saving throw take only half damage and avoid falling prone. A crushing wheel has a hardness of 10 and 100 hit points.</p>
<p>A crushing wheel is a Large siege engine.</p>
<p><strong>Cost</strong> 500 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 4d6; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 4; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _earthmaul = {title: "Earthmaul", jsx: <><h2 id="eq-siegeengine-earthmaul-earthmaul">Earthmaul</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>This war machine is fitted with an enormous hammer. When dropped into the horizontal position, it functions like a sideways-mounted catapult, and is capable of clearing wide swaths of enemies. Although it doesn't use ammunition, the earthmaul must effectively be reloaded by winding the torsion. When the earthmaul is activated, creatures on the ground in a 15-foot cone take 6d6 points of damage, are knocked 10 feet in the direction of the swing, and fall <Link to="/rule/prone">prone</Link>. A successful DC 20 Reflex saving throw halves the damage and negates the additional effects. An earthmaul has a hardness of 5 and 100 hit points.</p>
<p>An earthmaul is a Huge siege engine.</p>
<p><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 3; <strong>Aim</strong> 0; <strong>Load</strong> 3; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _gallery_colossal = {title: "Gallery, colossal", jsx: <><h2 id="eq-siegeengine-gallery_colossal-gallery">Gallery</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>A mobile temporary defense, a gallery is similar to a building made of hide or wood. Most are of flimsy construction, but rare examples are more stoutly built (use the rules for giving siege engines armor, and adjust AC, hardness, and hit points accordingly). Galleries are almost always a single section of movable "wall" plus another section that acts as the "roof." (Galleries made to house battering rams are an exception, and typically have two joined wall sections and roof sections.) Because a gallery is partially open, it does not provide the same cover as a normal building: a creature inside a gallery gains cover if it is the same size as the gallery, improved cover if it is one size smaller, and total cover if it is two or more sizes smaller. Galleries are sized like creatures - a Larger gallery protects the same space as a Large creature, and so on.</p>
<p>Wooden galleries can be moved on rollers at a speed of 10 feet with their full crew, or 5 feet with at least half the required crew. Galleries have a base speed of 15 feet (or 10 feet if protected with medium or heavy armor).</p>
<p>Galleries have a hardness of 5, and hit points based on their size. A Large gallery has 30 hit points, a Huge one has 120 hit points, a Gargantuan one has 320 hit points, and a colossal one has 625 hit points.</p>
<p><strong>Large</strong><br/><strong>Cost</strong> 250 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 3; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Huge</strong><br/><strong>Cost</strong> 500 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 6; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gargantuan</strong><br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 9; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Colossal</strong><br/><strong>Cost</strong> 2,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 18; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _harvester = {title: "Harvester", jsx: <><h2 id="eq-siegeengine-harvester-harvester">Harvester</h2>
<p><strong>Sources</strong> <Link to="/source/belkzen_hold_of_the_orc_hordes">Belkzen, Hold of the Orc Hordes pg. 39</Link></p>
<p>A variety of scythe-like blades extend from two sides of this wheeled machine. When it's pulled - typically by an aurochs or enslaved giants - the wheels' rotation causes the blades to slash indiscriminately. Each round the harvester moves, it makes a melee attack with a +10 modifier against any adjacent creature it passes; it deals 2d8 points of damage to those it hits. Multiple harvesters can be strung together. The crew required for a train of harvesters is equal to the total crew of the individual machines. Adjacent creatures are attacked by each individual harvester that passes them. A harvester has a hardness of 5 and 50 hit points.</p>
<p>A harvester is a Large siege engine.</p>
<p><strong>Cost</strong> 800 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 2d8; <strong>Critical</strong> &times;4; <strong>Range</strong> -; <strong>Type</strong> S<br/><strong>Crew</strong> 4; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _ladder_escalade_gargantuan = {title: "Ladder, escalade, gargantuan", jsx: <><h2 id="eq-siegeengine-ladder_escalade_gargantuan-ladder-escalade">Ladder, escalade</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>Escalade ladders have spiked bases for stability, and the upper 5 feet are metal-shod, with hardness 10 and 20 hit points. The remainder of the ladder is wooden and has hardness 5 and hit points based on its size. Large escalade ladders have 20 hit points, Huge ones have 30 hit points, Gargantuan ones have 80 hit points, and Colossal ones have 120 hit points. Escalade ladders cannot be armored.</p>
<h3 id="eq-siegeengine-ladder_escalade_gargantuan-table-3-16-bridges-and-escalade-ladders">Table 3-16: Bridges and Escalade Ladders</h3>
<ScrollContainer id="eq-siegeengine-ladder_escalade_gargantuan--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Width</th>
<th>Length/Height</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5 ft.</td>
<td>20 ft.</td>
</tr>
<tr>
<td>Huge</td>
<td>5 ft.</td>
<td>30 ft.</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>10 ft.</td>
<td>40 ft.</td>
</tr>
<tr>
<td>Colossal</td>
<td>10 ft.</td>
<td>60 ft.</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Large</strong><br/><strong>Cost</strong> 5 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 2; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Huge</strong><br/><strong>Cost</strong> 10 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 4; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gargantuan</strong><br/><strong>Cost</strong> 50 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 6; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Colossal</strong><br/><strong>Cost</strong> 250 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 8; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 0 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _ram_large = {title: "Ram, large", jsx: <><h2 id="eq-siegeengine-ram_large-ram">Ram</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link>, <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 435</Link></p>
<p>The most basic close assault weapons are iron-shod logs carried by one or more creatures to combine their strength. A ram can be used to deal damage or to make a Strength check against the target's break DC.</p>
<p><strong>Ramming Charge:</strong> Rams require momentum to be effective. All creatures using the ram must use the charge action to gain its full effect. Creatures not wishing to charge may make a ram attack as a full-round action, taking a -4 penalty on attack and damage rolls and Strength checks with the ram.</p>
<p><strong>Breaking:</strong> The crew leader makes a Strength check with a +2 bonus, adding +2 for each member of the crew (or equivalent number of larger creatures; see Crew under <Link to="/rule/siege_engine_rules">Siege Engine Rules</Link>) assisting. The ram also provides a +4 bonus per size category above Medium.</p>
<p><strong>Damage:</strong> The crew leader makes an attack roll with a -4 nonproficiency penalty. A hit deals the listed damage, plus the Strength modifiers of the crew leader and all members of the crew, regardless of their size.</p>
<p><strong>Improvised Ram:</strong> Any tree, log, or timber can be used as a ram with a -4 penalty on attack and damage rolls and Strength checks.</p>
<p><strong>Pick:</strong> A ram with a pick head grants a +2 circumstance bonus on Strength checks and attack and damage rolls made against stone structures.</p>
<p><strong>Screw:</strong> A ram with a screw head grants a +2 circumstance bonus on Strength checks and attack and damage rolls made against earthen structures.</p>
<p><strong>Gallery Ram:</strong> This is a ram suspended from chains or ropes within a gallery. A gallery ram does not require a charge action for full momentum. In addition, adding tethers to the back end of the ram allows four additional crew members to assist in using the ram.</p>
<p><strong>Hit Points:</strong> Rams have a hardness of 5 and hit points based on their size. A Large ram has 30 hit points, a Huge one has 120 hit points, a Gargantuan one has 320 hit points, and a Colossal one has 625 hit points. Improvised rams have half the normal hit points.</p>
<p><strong>Large</strong><br/><strong>Cost</strong> 500 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 2d6; <strong>Critical</strong> &times;3; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 5; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Huge</strong><br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 3d6; <strong>Critical</strong> &times;3; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 10; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gargantuan</strong><br/><strong>Cost</strong> 2,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 6d6; <strong>Critical</strong> &times;3; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 20; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Colossal</strong><br/><strong>Cost</strong> 5,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> 10d6; <strong>Critical</strong> &times;3; <strong>Range</strong> -; <strong>Type</strong> B<br/><strong>Crew</strong> 40; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _siege_tower_colossal = {title: "Siege Tower, colossal", jsx: <><h2 id="eq-siegeengine-siege_tower_colossal-siege-tower">Siege Tower</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 166</Link></p>
<p>A wooden gallery of stout construction, a siege tower consists of a tall protective shell with a roof section. The lower story of the tower contains the crew members who propel the tower, and provides total <Link to="/rule/cover">cover</Link> to those within. A siege tower with the broken condition moves at half speed. If a siege tower is destroyed, the entire tower collapses. Treat this as a <Link to="/rule/cave_ins_and_collapses">cave-in</Link>.</p>
<p>The upper section of a siege tower provides improved cover for a number of soldiers (see below) and may have pierced walls allowing creatures to fire ranged weapons out the sides. The roof section may have a battlement and may mount a siege engine of the siege tower's size or smaller and a corvus. Siege towers have a base speed of 15 (or 10 feet if protected with medium or heavy armor).</p>
<p>Siege towers have a hardness of 5, and hit points based on their size. A Large siege tower has 60 hit points, a Huge one has 240 hit points, a Gargantuan one has 640 hit points, and a Colossal one has 1,250 hit points.</p>
<h3 id="eq-siegeengine-siege_tower_colossal-table-3-17-siege-tower-complement">Table 3-17: Siege Tower Complement</h3>
<ScrollContainer id="eq-siegeengine-siege_tower_colossal--table-0"><table>
<thead>
<tr>
<th>Size</th>
<th>Soldiers</th>
</tr>
</thead>
<tbody><tr>
<td>Large</td>
<td>5</td>
</tr>
<tr>
<td>Huge</td>
<td>10</td>
</tr>
<tr>
<td>Gargantuan</td>
<td>50</td>
</tr>
<tr>
<td>Colossal</td>
<td>200</td>
</tr>
</tbody></table></ScrollContainer>
<p><strong>Large</strong><br/><strong>Cost</strong> 1,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 6; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Huge</strong><br/><strong>Cost</strong> 2,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 12; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Gargantuan</strong><br/><strong>Cost</strong> 5,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 24; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
<p><strong>Colossal</strong><br/><strong>Cost</strong> 10,000 gp <strong>Weight</strong> -<br/><strong>Damage</strong> -; <strong>Critical</strong> -; <strong>Range</strong> -; <strong>Type</strong> -<br/><strong>Crew</strong> 48; <strong>Aim</strong> 0; <strong>Load</strong> 0; <strong>Speed</strong> 15 ft.<br/><strong>Category</strong> Close Assault; <strong>Proficiency</strong> Siege Engine</p>
</>};
const _hotchkiss_6_pounder = {title: "Hotchkiss 6 pounder", jsx: <><h2 id="eq-siegeengine-hotchkiss_6_pounder-hotchkiss-6-pounder">Hotchkiss 6-Pounder</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_71_rasputin_must_die">Pathfinder #71: Rasputin Must Die! pg. 64</Link></p>
<p>The Hotchkiss 6 pounder gun is a shortened version of the Hotchkiss 6 pounder naval gun, designed for use in the sponsons of World War I-era tanks such as the Mark IV. The Hotchkiss 6 pounder is a direct-fire advanced siege firearm that must be mounted in place on a vehicle to be used. It fires high explosive (HE) shells that deal 8d6 points of bludgeoning, piercing, and slashing damage in a 30-foot radius around the point of impact (Reflex DC 20 for half). A Hotchkiss 6 pounder is a Medium weapon and has hardness 10 and 70 hit points. Hotchkiss HE shells cost 25 gp each and weigh 6 pounds each.</p>
<p><strong>Cost</strong> 2,000 gp <strong>Weight</strong> Special<br/><strong>Damage</strong> 8d6; <strong>Critical</strong> &times;3; <strong>Range</strong> 300 ft.; <strong>Type</strong> B, P, and S<br/><strong>Misfire</strong> 1-2; <strong>Crew</strong> 2; <strong>Aim</strong> 0; <strong>Load</strong> 2<br/><strong>Category</strong> Siege; <strong>Proficiency</strong> Exotic</p>
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