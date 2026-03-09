import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-reagent-not_found-error">Error</h2>
<p>Unable to find the requested alchemical reagent.</p>
</>};
const _acid = {title: "Acid", jsx: <><h2 id="eq-reagent-acid-acid">Acid</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<p><strong>Price</strong> 10 gp; <strong>Weight</strong> 1 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/acid">Acid</Link></p>
<p>A common flask of acid has many uses as a power component, particularly with attack spells.</p>
<h3 id="eq-reagent-acid-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (10 gp); <strong>Spells</strong> <Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/acid_fog">acid fog</Link>, <Link to="/spell/acid_splash">acid splash</Link>, <Link to="/spell/dispel_magic">dispel magic</Link>, <Link to="/spell/grease">grease</Link>, <Link to="/spell/wall_of_ice">wall of ice</Link><br/><strong>Effect</strong> Acid can be used as a power component in the following ways:</p>
<p><strong className="hl">Acid Arrow (M):</strong> The spell's acid lasts 1 round longer than normal.</p>
<p><strong className="hl">Acid Fog (M):</strong> The fog's radius and height increase by 5 feet.</p>
<p><strong className="hl">Acid Splash (F):</strong> The spell deals +1 point of damage.</p>
<p><strong className="hl">Acid Splash (M):</strong> The spell lasts 1 round longer than normal.</p>
<p><strong className="hl">Dispel Magic (M):</strong> Using acid as a material component while attempting to dispel or counterspell a spell or effect with the earth subtype gives you a +2 bonus on your dispel check. This bonus applies whether you are using <em>dispel magic,</em> <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, or some other spell that you can use for counterspelling (for example, if you have the <Link to="/feat/improved_counterspell">Improved Counterspell</Link> feat).</p>
<p><strong className="hl">Grease (M):</strong> The grease is acidic and deals 1 point of acid damage per round to any creature in the area or holding the greased object.</p>
<p><strong className="hl">Wall of Ice (M):</strong> For each flask of acid used as a power component, you may designate one 10-foot square of ice wall that, if broken through, deals 1d6 acid damage in addition to the normal cold damage.</p>
</>};
const _alchemical_grease = {title: "Alchemical Grease", jsx: <><h2 id="eq-reagent-alchemical_grease-alchemical-grease">Alchemical Grease</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<p><strong>Price</strong> 5 gp; <strong>Weight</strong> 1 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/alchemical_grease">Alchemical Grease</Link></p>
<p>This substance is good for augmenting spells affecting or creating surfaces.</p>
<h3 id="eq-reagent-alchemical_grease-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (5 gp); <strong>Spells</strong> <Link to="/spell/grease">grease</Link>, <Link to="/spell/sleet_storm">sleet storm</Link>, <Link to="/spell/wall_of_iron">wall of iron</Link>, <Link to="/spell/wall_of_stone">wall of stone</Link><br/><strong>Effect</strong> Alchemical grease can be used as a power component in the following ways:</p>
<p><strong className="hl">Grease (M):</strong> Increase the Reflex save DC for affected creatures and the Escape Artist bonus for greased armor by 1.</p>
<p><strong className="hl">Sleet Storm (M):</strong> Increase the Acrobatics DC by 1.</p>
<p><strong className="hl">Wall of Iron (M):</strong> For each pot of grease used as a power component, you may designate one 10-foot square of iron wall as being slippery (+5 to Climb DCs).</p>
<p><strong className="hl">Wall of Stone (M):</strong> For each pot of grease used as a power component, you may designate one 10-foot square of the spell's stone wall as being slippery (+5 to Climb DCs).</p>
</>};
const _alchemists_fire = {title: "Alchemist's Fire", jsx: <><h2 id="eq-reagent-alchemists_fire-alchemists-fire">Alchemist's Fire</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<p><strong>Price</strong> 20 gp; <strong>Weight</strong> 1 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/alchemists_fire">Alchemist's Fire</Link></p>
<p>This dwarven favorite can make fire spells last longer.</p>
<h3 id="eq-reagent-alchemists_fire-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (20 gp); <strong>Spells</strong> <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/flaming_sphere">flaming sphere</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/resist_energy">resist energy</Link>, <Link to="/spell/scorching_ray">scorching ray</Link><br/><strong>Effect</strong> Alchemist's fire can be used as a power component in the following ways:</p>
<p><strong className="hl">Burning Hands (M):</strong> One target that fails its Reflex saving throw (your choice) catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl">Fireball (M):</strong> One target per caster level that fails its Reflex saving throw (your choice) catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl">Flaming Sphere (M):</strong> Any creature damaged by a flaming sphere catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl">Protection from Energy (M):</strong> If cast to ward against cold, increase the amount of cold damage absorbed by 5.</p>
<p><strong className="hl">Resist Energy (M):</strong> If cast to ward against cold, increase the cold resistance to 12. At caster level 7th, you may use two flasks of alchemist's fire as a power component to increase the cold resistance to 24. At caster level 11th, you may use three flasks as a power component to increase the cold resistance to 36.</p>
<p><strong className="hl">Scorching Ray (F):</strong> Add a +1 circumstance bonus on your attack roll with all rays from the spell.</p>
<p><strong className="hl">Scorching Ray (M):</strong> Any target damaged by a scorching ray catches on fire as if it has been struck by alchemist's fire.</p>
</>};
const _antiplague = {title: "Antiplague", jsx: <><h2 id="eq-reagent-antiplague-antiplague">Antiplague</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<p><strong>Price</strong> 50 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/antiplague">Antiplague</Link></p>
<p>Certain healing spells have greater effects when used with this substance.</p>
<h3 id="eq-reagent-antiplague-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (50 gp); <strong>Spells</strong> <Link to="/spell/heroes_feast">heroes' feast</Link>, <Link to="/spell/remove_disease">remove disease</Link><br/><strong>Effect</strong> Antiplague can be used as a power component in the following ways:</p>
<p><strong className="hl">Heroes' Feast (M):</strong> For each vial of antiplague used as a power component, one creature eating the feast gains the benefits of antiplague for 12 hours. Antiplague's normally foul taste does not change the taste of the feast.</p>
<p><strong className="hl">Remove Disease (M):</strong> Add +2 on your caster level check to cure diseases on the target.</p>
</>};
const _antitoxin = {title: "Antitoxin", jsx: <><h2 id="eq-reagent-antitoxin-antitoxin">Antitoxin</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<p><strong>Price</strong> 50 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/antitoxin">Antitoxin</Link></p>
<p>Like antiplague, this substance can augment certain healing spells.</p>
<h3 id="eq-reagent-antitoxin-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (50 gp); <strong>Spells</strong> <Link to="/spell/neutralize_poison">neutralize poison</Link><br/><strong>Effect</strong> Antitoxin can be used as a power component in the following ways:</p>
<p><strong className="hl">Neutralize Poison (M):</strong> Add +2 on your caster level check to neutralize poison on a target creature. Antitoxin has no effect when you cast the spell on an object.</p>
</>};
const _black_powder = {title: "Black Powder", jsx: <><h2 id="eq-reagent-black_powder-black-powder">Black Powder</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 10 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/black_powder">Black Powder</Link></p>
<p>Black powder is a volatile explosive and is the primary component in fireworks and other explosives.</p>
<h3 id="eq-reagent-black_powder-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (10 gp); <strong>Spells</strong> evocation school (M)<br/><strong>Effect</strong> +1 energy damage</p>
</>};
const _bladeguard = {title: "Bladeguard", jsx: <><h2 id="eq-reagent-bladeguard-bladeguard">Bladeguard</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 40 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/bladeguard">Bladeguard</Link></p>
<p>Weapons and armor aren't the only things bladeguard protects.</p>
<h3 id="eq-reagent-bladeguard-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (40 gp); <strong>Spells</strong> <Link to="/spell/wall_of_iron">wall of iron</Link><br/><strong>Effect</strong> Bladeguard can be used as a power component in the following ways:</p>
<p><strong className="hl">Wall of Iron (M):</strong> For each pot of bladeguard used as a power component, you may designate one 10-foot square of iron wall that has acid resistance 10 and immunity to rusting attacks.</p>
</>};
const _brimstone = {title: "Brimstone", jsx: <><h2 id="eq-reagent-brimstone-brimstone">Brimstone</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>Brimstone, also called sulfur, has a distinctive odor and caustic properties.</p>
<h3 id="eq-reagent-brimstone-power-component">Power Component</h3>
<p><strong>Doses</strong> 2 (1 gp); <strong>Spells</strong> acid descriptor (M)<br/><strong>Effect</strong> +1 acid damage</p>
</>};
const _cold_iron = {title: "Cold Iron", jsx: <><h2 id="eq-reagent-cold_iron-cold-iron">Cold Iron</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 1 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-material/cold_iron">Cold Iron</Link></p>
<p>Cold iron is often used to produce alloyed metals, catalysts, and items that interfere with magic.</p>
<h3 id="eq-reagent-cold_iron-power-component">Power Component</h3>
<p><strong>Doses</strong> 5 (5 gp); <strong>Spells</strong> abjuration school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of caster level and dispel checks</p>
</>};
const _cooperation_crystals = {title: "Cooperation Crystals", jsx: <><h2 id="eq-reagent-cooperation_crystals-cooperation-crystals">Cooperation Crystals</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 10</Link></p>
<p><strong>Price</strong> 300 gp; <strong>Weight</strong> -</p>
<p>This vibrant blue-green crystal is a distillation of the spirit of cooperation characteristic of the chaotic good plane of <Link to="/rule/elysium">Elysium</Link>.</p>
<h3 id="eq-reagent-cooperation_crystals-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (300 gp); <strong>Spells</strong> harmless spells (M or F)<br/><strong>Effect</strong> When you use a cooperation crystal as a material component or focus for a harmless spell, treat your caster level as 1 higher for the purpose of determining the spell's duration and effect. This increase doesn't stack with other effects that raise the caster level of a spell. (You cannot use this as a material component and a focus for the same spell.)</p>
</>};
const _cytillesh_spores = {title: "Cytillesh Spores", jsx: <><h2 id="eq-reagent-cytillesh_spores-cytillesh-spores">Cytillesh Spores</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 11</Link></p>
<p><strong>Price</strong> 5 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-poison/cytillesh_extract">Cytillesh Extract</Link></p>
<p>The spore of the cytillesh fungus is a versatile reagent, and is often combined with other poisonous elements to create deliriums, hallucinogens, and psychotics.</p>
<h3 id="eq-reagent-cytillesh_spores-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (5 gp); <strong>Spells</strong> charm or compulsion subschool (M)<br/><strong>Effect</strong> +1 caster level for the purpose of duration</p>
</>};
const _darkwood = {title: "Darkwood", jsx: <><h2 id="eq-reagent-darkwood-darkwood">Darkwood</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 2 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-material/darkwood">Darkwood</Link></p>
<p>The bark of the darkwood tree is useful in numerous alchemical applications, especially those that require a light but strong foundation.</p>
<h3 id="eq-reagent-darkwood-power-component">Power Component</h3>
<p><strong>Doses</strong> 5 (10 gp); <strong>Spells</strong> creation subschool (M)<br/><strong>Effect</strong> +1 caster level for the purpose of the effect</p>
</>};
const _dew_of_lunary = {title: "Dew of Lunary", jsx: <><h2 id="eq-reagent-dew_of_lunary-dew-of-lunary">Dew of Lunary</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 4 gp; <strong>Weight</strong> -</p>
<p>Dew of lunary is derived from a potent herb. It is commonly used in the creation of medicinal, protective, and divinatory items.</p>
<h3 id="eq-reagent-dew_of_lunary-power-component">Power Component</h3>
<p><strong>Doses</strong> 5 (20 gp); <strong>Spells</strong> divination school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of effect</p>
</>};
const _dragons_gut = {title: "Dragon's Gut", jsx: <><h2 id="eq-reagent-dragons_gut-dragons-gut">Dragon's Gut</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 19</Link></p>
<p><strong>Price</strong> 50 gp; <strong>Weight</strong> 1 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/dragons_gut">Dragon's Gut</Link></p>
<p>A dragon's stomach contains highly corrosive acid that can be crafted into an alchemical item called dragon's gut.</p>
<h3 id="eq-reagent-dragons_gut-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (50 gp); <strong>Spells</strong> <Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/acid_fog">acid fog</Link>, <Link to="/spell/acidic_spray">acidic spray</Link><br/><strong>Effect</strong> Dragon's gut has alternate effects when used in place of <Link to="/eq-reagent/acid">acid</Link> as an alchemical power component:</p>
<p><strong className="hl">Acid arrow (M):</strong> The spell lasts 1d3 rounds longer than usual.</p>
<p><strong className="hl">Acid fog (M):</strong> The fog takes on a sticky quality and clings to creatures within it. Any creature damaged by the acid fog takes an additional 2d6 points of acid damage on the round after leaving the fog's area of effect. The creature can negate this additional damage by spending a standard action to wipe the clinging acid from its body.</p>
<p><strong className="hl">Acidic spray (M):</strong> The spell deals 1d8 points of acid damage per caster level (maximum 15d8) instead of the normal 1d6 per caster level on the round of its casting (Reflex half). It still deals 1d6 points of damage per two caster levels on the following round as normal.</p>
<blockquote>
<p><em>Note: The original source doesn't state whether the spells use it as a material or focus cost. The first two have clear parallels with the</em> acid <em>entry, but the third is a guess. Consult your GM.</em></p>
</blockquote>
</>};
const _fire_fragment = {title: "Fire Fragment", jsx: <><h2 id="eq-reagent-fire_fragment-fire-fragment">Fire Fragment</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 10</Link></p>
<p><strong>Price</strong> 350 gp; <strong>Weight</strong> -</p>
<p>This small, reddish crystal shard flickers with a brilliant, dancing flame - a representation of the <Link to="/rule/plane_of_fire">Plane of Fire</Link>.</p>
<h3 id="eq-reagent-fire_fragment-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (350 gp); <strong>Spells</strong> fire spells (M or F)<br/><strong>Effect</strong> When you use a fire fragment as a material component or focus for a spell that deals fire damage, that spell is affected as per the <Link to="/feat/flaring_spell">Flaring Spell</Link> metamagic feat (though this does not increase the spell slot that the spell uses), and you treat your caster level as 1 higher for the purpose of determining the spell's damage. (You cannot use this as a material component and a focus for the same spell.)</p>
</>};
const _flash_powder = {title: "Flash Powder", jsx: <><h2 id="eq-reagent-flash_powder-flash-powder">Flash Powder</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 50 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/flash_powder">Flash Powder</Link></p>
<p>Useful as a distraction, flash powder makes light-burst spells more dangerous.</p>
<h3 id="eq-reagent-flash_powder-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (50 gp); <strong>Spells</strong> <Link to="/spell/flare">flare</Link>, <Link to="/spell/pyrotechnics">pyrotechnics</Link><br/><strong>Effect</strong> Flash powder can be used as a power component in the following ways:</p>
<p><strong className="hl">Flare (M):</strong> Increase the saving throw DC of the spell by 2.</p>
<p><strong className="hl">Pyrotechnics (M):</strong> When used to create fireworks, increase the DC by 1 and the blindness duration by 1 round.</p>
</>};
const _ginger_extract = {title: "Ginger Extract", jsx: <><h2 id="eq-reagent-ginger_extract-ginger-extract">Ginger Extract</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 25</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>In addition to serving as a spice and as an alchemical reagent, ginger extract has a wide variety of uses in herbal remedies that treat nausea and pain.</p>
<h3 id="eq-reagent-ginger_extract-power-component">Power Component</h3>
<p><strong>Doses</strong> 10 (5 gp); <strong>Spells</strong> transmutation school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of overcoming spell resistance</p>
</>};
const _gold = {title: "Gold", jsx: <><h2 id="eq-reagent-gold-gold">Gold</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 5 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-material/gold">Gold</Link></p>
<p>In its purest form, gold is a dense, non-reactive metal. Its alchemical products are useful in stains and in treating swelling, pain, and infections.</p>
<h3 id="eq-reagent-gold-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (5 gp); <strong>Spells</strong> healing subschool (M)<br/><strong>Effect</strong> +1 hit point healed</p>
</>};
const _heavenly_quartz = {title: "Heavenly Quartz", jsx: <><h2 id="eq-reagent-heavenly_quartz-heavenly-quartz">Heavenly Quartz</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<p><strong>Price</strong> 250 gp; <strong>Weight</strong> -</p>
<p>This fragment appears to be made of glass and gold and emits gleaming light, reminiscent of the mountain of <Link to="/rule/heaven">Heaven</Link>.</p>
<h3 id="eq-reagent-heavenly_quartz-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (250 gp); <strong>Spells</strong> good or lawful spells with a Will saving throw (M or F)<br/><strong>Effect</strong> When you use a Heavenly quartz as a material component or focus for a spell with the good or lawful descriptor that requires affected creatures to attempt a Will saving throw, increase the DC of that saving throw by 1; if the spell has both the good and lawful descriptors, treat the spell's caster level as if it were 1 higher for the purpose of caster level checks and dispel checks. (You cannot use this as a material component and a focus for the same spell.)</p>
</>};
const _itching_powder = {title: "Itching Powder", jsx: <><h2 id="eq-reagent-itching_powder-itching-powder">Itching Powder</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 60 gp; <strong>Weight</strong> 2 lbs.<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/itching_powder">Itching Powder</Link></p>
<p>This powder can make an otherwise innocuous spell especially irritating.</p>
<h3 id="eq-reagent-itching_powder-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (60 gp); <strong>Spells</strong> <Link to="/spell/glitterdust">glitterdust</Link>, <Link to="/spell/repel_vermin">repel vermin</Link>, <Link to="/spell/summon_swarm">summon swarm</Link><br/><strong>Effect</strong> Itching powder can be used as a power component in the following ways:</p>
<p><strong className="hl">Glitterdust (M):</strong> For each packet of itching powder used as a power component, you may designate one creature in the area to be affected by itching powder (DC 12).</p>
<p><strong className="hl">Repel Vermin (M):</strong> The first vermin that enters the emanation is subject to the effects of itching powder (DC 15). Each packet of itching powder beyond the first means the spell affects another vermin that enters the emanation. A swarm of vermin counts as one vermin for the purpose of this effect.</p>
<p><strong className="hl">Summon Swarm (M):</strong> Increase the swarm's distraction DC by 2.</p>
</>};
const _liquid_ice = {title: "Liquid Ice", jsx: <><h2 id="eq-reagent-liquid_ice-liquid-ice">Liquid Ice</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 40 gp; <strong>Weight</strong> 2 lbs.<br/><strong>Equipment Pages:</strong> <Link to="/eq-weapon/liquid_ice">Liquid Ice</Link> (weapon), <Link to="/eq-siegeengine/liquid_ice">Liquid Ice</Link> (siege engine ammunition)</p>
<p>This substance augments cold magic.</p>
<h3 id="eq-reagent-liquid_ice-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (40 gp); <strong>Spells</strong> <Link to="/spell/cone_of_cold">cone of cold</Link>, <Link to="/spell/gentle_repose">gentle repose</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link>, <Link to="/spell/protection_from_energy">protection from energy</Link>, <Link to="/spell/resist_energy">resist energy</Link><br/><strong>Effect</strong> Liquid ice can be used as a power component in the following ways:</p>
<p><strong className="hl">Cone of Cold (M):</strong> The spell deals +1 point of damage per caster level.</p>
<p><strong className="hl">Gentle Repose (M):</strong> The spell's duration increases to 2 days per level.</p>
<p><strong className="hl">Ray of Frost (F):</strong> The spell deals +1 point of damage.</p>
<p><strong className="hl">Ray of Frost (M):</strong> The spell creates an icicle of frozen water vapor that strikes the target and deals 1d3 points of piercing damage and 1 point of cold damage.</p>
<p><strong className="hl">Protection from Energy (M):</strong> If cast to ward against fire, increase the amount of fire damage absorbed by 5.</p>
<p><strong className="hl">Resist Energy (M):</strong> If cast to ward against fire, increase the fire resistance to 12. At caster level 7th, you may use two jars of liquid ice as a power component to increase the fire resistance to 24. At caster level 11th, you may use three jars as a power component to increase the fire resistance to 36.</p>
</>};
const _magnesium = {title: "Magnesium", jsx: <><h2 id="eq-reagent-magnesium-magnesium">Magnesium</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 1 gp; <strong>Weight</strong> -</p>
<p>Magnesium is an extremely light and reactive metal that burns brightly when exposed to air. It is important for all living things, especially plants.</p>
<h3 id="eq-reagent-magnesium-power-component">Power Component</h3>
<p><strong>Doses</strong> 2 (2 gp); <strong>Spells</strong> transmutation school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of duration</p>
</>};
const _mugwort_extract = {title: "Mugwort Extract", jsx: <><h2 id="eq-reagent-mugwort_extract-mugwort-extract">Mugwort Extract</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 25</Link></p>
<p><strong>Price</strong> 2 gp; <strong>Weight</strong> -</p>
<p>Many varieties of mugwort exist; some are used in acupuncture, while others are key ingredients in herbal remedies that ward off fatigue, cold, or even supernatural dangers.</p>
<h3 id="eq-reagent-mugwort_extract-power-component">Power Component</h3>
<p><strong>Doses</strong> 2 (4 gp); <strong>Spells</strong> abjuration school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of range</p>
</>};
const _myrrh = {title: "Myrrh", jsx: <><h2 id="eq-reagent-myrrh-myrrh">Myrrh</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>Myrrh is an aromatic gum used as a base for alchemical remedies and as a sticky bonding agent.</p>
<h3 id="eq-reagent-myrrh-power-component">Power Component</h3>
<p><strong>Doses</strong> 4 (2 gp); <strong>Spells</strong> abjuration school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of caster level checks and dispel checks</p>
</>};
const _odor_stalk = {title: "Odor Stalk", jsx: <><h2 id="eq-reagent-odor_stalk-odor-stalk">Odor stalk</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 27</Link></p>
<p><strong>Price</strong> 70 gp; <strong>Weight</strong> 1/10 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/odor_stalk">Odor Stalk</Link></p>
<p>These alchemically treated <Link to="/eq-misc/incense">incense</Link> sticks contain pheromones that certain creatures find repellent. Each odor stalk is created to irritate a specific creature type.</p>
<h3 id="eq-reagent-odor_stalk-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (70 gp); <strong>Spells</strong> <Link to="/spell/ghoul_touch">ghoul touch</Link>, <Link to="/spell/repel_vermin">repel vermin</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link><br/><strong>Effect</strong> Odor stalks can be used as a power component in the following ways:</p>
<p><strong className="hl">Ghoul touch:</strong> The stench only affects creatures of the odor stalk's associated creature type.</p>
<p><strong className="hl">Repel vermin:</strong> The spell functions as written, but applies to the odor stalk's associated creature type instead of to vermin. The Will save DC is always 12 when using this component.</p>
<p><strong className="hl">Stinking cloud:</strong> The Fortitude save DC increases by 1 for creatures of the odor stalk's prescribed type, but decreases by 1 for all other creature types.</p>
<blockquote>
<p><em>Note: The original source doesn't state whether the spells use it as a material or focus cost. Consult your GM.</em></p>
</blockquote>
</>};
const _pesh = {title: "Pesh", jsx: <><h2 id="eq-reagent-pesh-pesh">Pesh</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 19</Link></p>
<p><strong>Price</strong> 15 gp; <strong>Weight</strong> -<br/><strong>Equipment Pages:</strong> <Link to="/eq-misc/pesh">Pesh</Link> (Black Market item), <Link to="/drug/pesh">Pesh</Link> (drug)</p>
<p>When used as an alchemical reagent, refined pesh is often sublimated along with other reagents to create new forms of the famous drug.</p>
<h3 id="eq-reagent-pesh-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (15 gp); <strong>Spells</strong> enchantment school (M)<br/><strong>Effect</strong> +1 caster level for purpose of duration</p>
</>};
const _phosphorus = {title: "Phosphorus", jsx: <><h2 id="eq-reagent-phosphorus-phosphorus">Phosphorus</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 2 sp; <strong>Weight</strong> -</p>
<p>Phosphorus is a highly reactive mineral that glows faintly in air. Vital to all life, it is most commonly used by alchemists to create fertilizers, poisons, soaps, and tindertwigs. It is obtained by processing uric acid or bone ash.</p>
<h3 id="eq-reagent-phosphorus-power-component">Power Component</h3>
<p><strong>Doses</strong> 10 (2 gp); <strong>Spells</strong> light descriptor or teleportation subschool (M)<br/><strong>Effect</strong> +1 caster level for the purpose of range</p>
</>};
const _quicksilver = {title: "Quicksilver", jsx: <><h2 id="eq-reagent-quicksilver-quicksilver">Quicksilver</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 1 gp; <strong>Weight</strong> -</p>
<p>Quicksilver is a liquid metal with dangerous mental effects on those who handle it. It is most often distilled from crystalline amalgams such as cinnabar and stored in iron flasks.</p>
<h3 id="eq-reagent-quicksilver-power-component">Power Component</h3>
<p><strong>Doses</strong> 3 (3 gp); <strong>Spells</strong> mind-affecting descriptor (M)<br/><strong>Effect</strong> +1 caster level for the purpose of duration</p>
</>};
const _realgar = {title: "Realgar", jsx: <><h2 id="eq-reagent-realgar-realgar">Realgar</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 3 gp; <strong>Weight</strong> -</p>
<p>Realgar, also called ruby of arsenic, is a red crystal useful in creating poisons and medicines. It is commonly purified into <Link to="/eq-poison/arsenic">arsenic</Link>, a crystalline metal known as the "king of poisons" for its popularity among nobles seeking to poison their rivals.</p>
<h3 id="eq-reagent-realgar-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (3 gp); <strong>Spells</strong> poison descriptor (M)<br/><strong>Effect</strong> +2 DC to identify or neutralize the poison with spells or skills</p>
</>};
const _salt = {title: "Salt", jsx: <><h2 id="eq-reagent-salt-salt">Salt</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>Salt is a vital mineral commodity. It is most commonly used as a desiccant and as a catalyst.</p>
<h3 id="eq-reagent-salt-power-component">Power Component</h3>
<p><strong>Doses</strong> 20 (10 gp); <strong>Spells</strong> necromancy school (M)<br/><strong>Effect</strong> +1 caster level for the purpose of effect</p>
</>};
const _saltpeter = {title: "Saltpeter", jsx: <><h2 id="eq-reagent-saltpeter-saltpeter">Saltpeter</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 3 gp; <strong>Weight</strong> -</p>
<p>Saltpeter is used to create fertilizers, propellants, fireworks, and preservatives.</p>
<h3 id="eq-reagent-saltpeter-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (1 gp); <strong>Spells</strong> fire descriptor (M)<br/><strong>Effect</strong> +1 fire damage</p>
</>};
const _silver = {title: "Silver", jsx: <><h2 id="eq-reagent-silver-silver">Silver</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 1 gp; <strong>Weight</strong> -<br/><strong>Equipment Page:</strong> <Link to="/eq-material/silver">Silver</Link></p>
<p>Silver is a lustrous precious metal used in mirrors, disinfectants, electrics, and illusion-creating magic items.</p>
<h3 id="eq-reagent-silver-power-component">Power Component</h3>
<p><strong>Doses</strong> 10 (10 gp); <strong>Spells</strong> illusion school (M)<br/><strong>Effect</strong> +1 to DC of Will saves to disbelieve</p>
</>};
const _smokestick = {title: "Smokestick", jsx: <><h2 id="eq-reagent-smokestick-smokestick">Smokestick</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 20 gp; <strong>Weight</strong> 1/2 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-misc/smokestick">Smokestick</Link></p>
<p>These items work best with spells that create clouds or smoke.</p>
<h3 id="eq-reagent-smokestick-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (20 gp); <strong>Spells</strong> <Link to="/spell/fog_cloud">fog cloud</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/pyrotechnics">pyrotechnics</Link><br/><strong>Effect</strong> Smokesticks can be used as a power component in the following ways:</p>
<p><strong className="hl">Fog Cloud (M):</strong> Increase the radius of the cloud by 5 feet.</p>
<p><strong className="hl">Obscuring Mist (M):</strong> The spell creates a smoky haze instead of mist. This haze cannot be dispersed by fire spells and dissipates naturally after 1 minute.</p>
<p><strong className="hl">Pyrotechnics (M):</strong> Increase the radius of the cloud by 5 feet and the duration by 2 rounds.</p>
</>};
const _spirit_of_wine = {title: "Spirit of Wine", jsx: <><h2 id="eq-reagent-spirit_of_wine-spirit-of-wine">Spirit of Wine</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>Spirit of wine is purified, alchemically active alcohol commonly used as a fuel or solvent in alchemical items, specialized inks, and perfumes. It is too pure to drink alone, but can be used as a reagent to form tinctures and alchemical drinks.</p>
<h3 id="eq-reagent-spirit_of_wine-power-component">Power Component</h3>
<p><strong>Doses</strong> 6 (3 gp); <strong>Spells</strong> calling and summoning subschools (M)<br/><strong>Effect</strong> +1 caster level for the purpose of duration</p>
</>};
const _tanglefoot_bag = {title: "Tanglefoot Bag", jsx: <><h2 id="eq-reagent-tanglefoot_bag-tanglefoot-bag">Tanglefoot Bag</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 50 gp; <strong>Weight</strong> 4 lbs.<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/tanglefoot_bag">Tanglefoot Bag</Link></p>
<p>These sticky pouches can make a troublesome spell even worse.</p>
<h3 id="eq-reagent-tanglefoot_bag-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (50 gp); <strong>Spells</strong> <Link to="/spell/black_tentacles">black tentacles</Link>, <Link to="/spell/slow">slow</Link>, <Link to="/spell/web">web</Link><br/><strong>Effect</strong> Tanglefoot bags can be used as a power component in the following ways:</p>
<p><strong className="hl">Black Tentacles (M):</strong> For each tanglefoot bag used as a power component, you may reroll the tentacles' grapple check against one creature of your choice.</p>
<p><strong className="hl">Slow (M):</strong> For each tanglefoot bag used as a power component, you may designate one slowed creature as being affected by a tanglefoot bag.</p>
<p><strong className="hl">Web (M):</strong> Increase the DC of breaking free by making a combat maneuver or Escape Artist check by 1.</p>
</>};
const _thunderstone = {title: "Thunderstone", jsx: <><h2 id="eq-reagent-thunderstone-thunderstone">Thunderstone</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<p><strong>Price</strong> 30 gp; <strong>Weight</strong> 1 lb.<br/><strong>Equipment Page:</strong> <Link to="/eq-weapon/thunderstone">Thunderstone</Link></p>
<p>While they are effective enough on their own, these stones have useful interactions with some spells.</p>
<h3 id="eq-reagent-thunderstone-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (30 gp); <strong>Spells</strong> <Link to="/spell/alarm">alarm</Link>, <Link to="/spell/glyph_of_warding">glyph of warding</Link><br/><strong>Effect</strong> Thunderstones can be used as a power component in the following ways:</p>
<p><strong className="hl">Alarm (M):</strong> If cast as a mental alarm, you may have the spell activate a mental and audible alarm. If cast as an audible alarm, the alarm is as loud as a thunderstone and affects creatures in a 10-foot-radius spread as if a thunderstone had detonated there.</p>
<p><strong className="hl">Glyph of Warding (M):</strong> Creatures that fail their saves against a blast glyph are also <Link to="/misc/deafened">deafened</Link> as if by a thunderstone.</p>
</>};
const _urea = {title: "Urea", jsx: <><h2 id="eq-reagent-urea-urea">Urea</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<p><strong>Price</strong> 5 sp; <strong>Weight</strong> -</p>
<p>Urea is a highly versatile reagent most commonly used in salves and as a stabilizer for particularly volatile alchemical reactions.</p>
<h3 id="eq-reagent-urea-power-component">Power Component</h3>
<p><strong>Doses</strong> 4 (2 gp); <strong>Spells</strong> cold descriptor (M)<br/><strong>Effect</strong> +1 caster level for the purpose of the effect</p>
</>};
const _void_shard = {title: "Void Shard", jsx: <><h2 id="eq-reagent-void_shard-void-shard">Void Shard</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<p><strong>Price</strong> 250 gp; <strong>Weight</strong> -</p>
<p>This shard seems to absorb the light around it, demonstrating the annihilatory power of the <Link to="/rule/negative_energy_plane">Negative Energy Plane</Link>.</p>
<h3 id="eq-reagent-void_shard-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (250 gp); <strong>Spells</strong> necromancy school (M or F)<br/><strong>Effect</strong> When you use a void crystal as a material component or focus for a spell of the necromancy school, the target takes a -2 penalty on saves against the spell. (You cannot use this as a material component and a focus for the same spell.)</p>
</>};
const _whimsy_star = {title: "Whimsy Star", jsx: <><h2 id="eq-reagent-whimsy_star-whimsy-star">Whimsy Star</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<p><strong>Price</strong> 200 gp; <strong>Weight</strong> -</p>
<p>The shimmering, multicolored whimsy star captures the mutability of <Link to="/rule/the_first_world">the First World</Link>.</p>
<h3 id="eq-reagent-whimsy_star-power-component">Power Component</h3>
<p><strong>Doses</strong> 1 (200 gp); <strong>Spells</strong> any (M or F)<br/><strong>Effect</strong> When you use a whimsy star as a material component or focus for a spell, roll 1d6 and consult the table below. You can't use magic or other abilities to affect the result of this roll. If a result cannot apply to your spell, then the spell resolves normally. Regardless of the result, the spell slot required to cast the spell doesn't change. (You cannot use this as a material component and a focus for the same spell.)</p>
<ScrollContainer id="eq-reagent-whimsy_star--table-0"><table>
<thead>
<tr>
<th>d6</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>The spell fails and you are dazzled for 1d4 rounds.</td>
</tr>
<tr>
<td>2</td>
<td>The spell resolves normally.</td>
</tr>
<tr>
<td>3</td>
<td>The spell is affected as per the <Link to="/feat/enlarge_spell">Enlarge Spell</Link> metamagic feat.</td>
</tr>
<tr>
<td>4</td>
<td>The spell is affected as per the <Link to="/feat/extend_spell">Extend Spell</Link> metamagic feat.</td>
</tr>
<tr>
<td>5</td>
<td>The spell is affected as per the <Link to="/feat/widen_spell">Widen Spell</Link> metamagic feat.</td>
</tr>
<tr>
<td>6</td>
<td>The spell is affected as per the <Link to="/feat/heighten_spell">Heighten Spell</Link> metamagic feat, increasing the spell's level by 1.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
export default {not_found:_not_found,acid:_acid,alchemical_grease:_alchemical_grease,alchemists_fire:_alchemists_fire,antiplague:_antiplague,antitoxin:_antitoxin,black_powder:_black_powder,bladeguard:_bladeguard,brimstone:_brimstone,cold_iron:_cold_iron,cooperation_crystals:_cooperation_crystals,cytillesh_spores:_cytillesh_spores,darkwood:_darkwood,dew_of_lunary:_dew_of_lunary,dragons_gut:_dragons_gut,fire_fragment:_fire_fragment,flash_powder:_flash_powder,ginger_extract:_ginger_extract,gold:_gold,heavenly_quartz:_heavenly_quartz,itching_powder:_itching_powder,liquid_ice:_liquid_ice,magnesium:_magnesium,mugwort_extract:_mugwort_extract,myrrh:_myrrh,odor_stalk:_odor_stalk,pesh:_pesh,phosphorus:_phosphorus,quicksilver:_quicksilver,realgar:_realgar,salt:_salt,saltpeter:_saltpeter,silver:_silver,smokestick:_smokestick,spirit_of_wine:_spirit_of_wine,tanglefoot_bag:_tanglefoot_bag,thunderstone:_thunderstone,urea:_urea,void_shard:_void_shard,whimsy_star:_whimsy_star}