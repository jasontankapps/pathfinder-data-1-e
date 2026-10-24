import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import Tabular from '../../components/Tabular';
const _not_found = {title: "Unknown", jsx: <><h2 id="eq-reagent-not_found-error">Error</h2>
<p>Unable to find the requested alchemical reagent.</p>
</>};
const _acid = {title: "Acid", jsx: <><h2 id="eq-reagent-acid-acid">Acid</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<Tabular format="alchstats" a="10 gp" b="1 lb." c="weapon" d="Acid" />
<p>A common flask of acid has many uses as a power component, particularly with attack spells.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (10 gp)" b={<><em>acid arrow, acid fog, acid splash, dispel magic, grease, wall of ice</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/acid_arrow">Acid Arrow</Link></strong> <strong className="hl">(M):</strong> The spell's acid lasts 1 round longer than normal.</p>
<p><strong className="hl"><Link to="/spell/acid_fog">Acid Fog</Link></strong> <strong className="hl">(M):</strong> The fog's radius and height increase by 5 feet.</p>
<p><strong className="hl"><Link to="/spell/acid_splash">Acid Splash</Link></strong> <strong className="hl">(F):</strong> The spell deals +1 point of damage.</p>
<p><strong className="hl"><Link to="/spell/acid_splash">Acid Splash</Link></strong> <strong className="hl">(M):</strong> The spell lasts 1 round longer than normal.</p>
<p><strong className="hl"><Link to="/spell/dispel_magic">Dispel Magic</Link></strong> <strong className="hl">(M):</strong> Using acid as a material component while attempting to dispel or counterspell a spell or effect with the earth subtype gives you a +2 bonus on your dispel check. This bonus applies whether you are using <em>dispel magic,</em> <Link to="/spell/greater_dispel_magic">greater dispel magic</Link>, or some other spell that you can use for counterspelling (for example, if you have the <Link to="/feat/improved_counterspell">Improved Counterspell</Link> feat).</p>
<p><strong className="hl"><Link to="/spell/grease">Grease</Link></strong> <strong className="hl">(M):</strong> The grease is acidic and deals 1 point of acid damage per round to any creature in the area or holding the greased object.</p>
<p><strong className="hl"><Link to="/spell/wall_of_ice">Wall of Ice</Link></strong> <strong className="hl">(M):</strong> For each flask of acid used as a power component, you may designate one 10-foot square of ice wall that, if broken through, deals 1d6 acid damage in addition to the normal cold damage.</p>
</>};
const _alchemical_grease = {title: "Alchemical Grease", jsx: <><h2 id="eq-reagent-alchemical_grease-alchemical-grease">Alchemical Grease</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<Tabular format="alchstats" a="5 gp" b="1 lb." c="misc" d="Alchemical Grease" />
<p>This substance is good for augmenting spells affecting or creating surfaces.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (5 gp)" b={<><em>grease, sleet storm, wall of iron, wall of stone</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/grease">Grease</Link></strong> <strong className="hl">(M):</strong> Increase the Reflex save DC for affected creatures and the Escape Artist bonus for greased armor by 1.</p>
<p><strong className="hl"><Link to="/spell/sleet_storm">Sleet Storm</Link></strong> <strong className="hl">(M):</strong> Increase the Acrobatics DC by 1.</p>
<p><strong className="hl"><Link to="/spell/wall_of_iron">Wall of Iron</Link></strong> <strong className="hl">(M):</strong> For each pot of grease used as a power component, you may designate one 10-foot square of iron wall as being slippery (+5 to Climb DCs).</p>
<p><strong className="hl"><Link to="/spell/wall_of_stone">Wall of Stone</Link></strong> <strong className="hl">(M):</strong> For each pot of grease used as a power component, you may designate one 10-foot square of the spell's stone wall as being slippery (+5 to Climb DCs).</p>
</>};
const _alchemists_fire = {title: "Alchemist's Fire", jsx: <><h2 id="eq-reagent-alchemists_fire-alchemists-fire">Alchemist's Fire</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<Tabular format="alchstats" a="20 gp" b="1 lb." c="weapon" d="Alchemist's Fire" />
<p>This dwarven favorite can make fire spells last longer.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (20 gp)" b={<><em>burning hands, fireball, flaming sphere, protection from energy, resist energy, scorching ray</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/burning_hands">Burning Hands</Link></strong> <strong className="hl">(M):</strong> One target that fails its Reflex saving throw (your choice) catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl"><Link to="/spell/fireball">Fireball</Link></strong> <strong className="hl">(M):</strong> One target per caster level that fails its Reflex saving throw (your choice) catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl"><Link to="/spell/flaming_sphere">Flaming Sphere</Link></strong> <strong className="hl">(M):</strong> Any creature damaged by a flaming sphere catches on fire as if it has been struck by alchemist's fire.</p>
<p><strong className="hl"><Link to="/spell/protection_from_energy">Protection from Energy</Link></strong> <strong className="hl">(M):</strong> If cast to ward against cold, increase the amount of cold damage absorbed by 5.</p>
<p><strong className="hl"><Link to="/spell/resist_energy">Resist Energy</Link></strong> <strong className="hl">(M):</strong> If cast to ward against cold, increase the cold resistance to 12. At caster level 7th, you may use two flasks of alchemist's fire as a power component to increase the cold resistance to 24. At caster level 11th, you may use three flasks as a power component to increase the cold resistance to 36.</p>
<p><strong className="hl"><Link to="/spell/scorching_ray">Scorching Ray</Link></strong> <strong className="hl">(F):</strong> Add a +1 circumstance bonus on your attack roll with all rays from the spell.</p>
<p><strong className="hl"><Link to="/spell/scorching_ray">Scorching Ray</Link></strong> <strong className="hl">(M):</strong> Any target damaged by a scorching ray catches on fire as if it has been struck by alchemist's fire.</p>
</>};
const _antiplague = {title: "Antiplague", jsx: <><h2 id="eq-reagent-antiplague-antiplague">Antiplague</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<Tabular format="alchstats" a="50 gp" b="-" c="misc" d="Antiplague" />
<p>Certain healing spells have greater effects when used with this substance.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (50 gp)" b={<><em>heroes' feast, remove disease</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/heroes_feast">Heroes' Feast</Link></strong> <strong className="hl">(M):</strong> For each vial of antiplague used as a power component, one creature eating the feast gains the benefits of antiplague for 12 hours. Antiplague's normally foul taste does not change the taste of the feast.</p>
<p><strong className="hl"><Link to="/spell/remove_disease">Remove Disease</Link></strong> <strong className="hl">(M):</strong> Add +2 on your caster level check to cure diseases on the target.</p>
</>};
const _antitoxin = {title: "Antitoxin", jsx: <><h2 id="eq-reagent-antitoxin-antitoxin">Antitoxin</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 26</Link></p>
<Tabular format="alchstats" a="50 gp" b="-" c="misc" d="Antitoxin" />
<p>Like antiplague, this substance can augment certain healing spells.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (50 gp)" b={<><em>neutralize poison (M)</em></>} c="Add +2 on your caster level check to neutralize poison on a target creature. Antitoxin has no effect when you cast the spell on an object." />
</>};
const _black_powder = {title: "Black Powder", jsx: <><h2 id="eq-reagent-black_powder-black-powder">Black Powder</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="10 gp" b="-" c="weapon" d="Black Powder" />
<p>Black powder is a volatile explosive and is the primary component in fireworks and other explosives.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (10 gp)" b="evocation school (M)" c="+1 energy damage" />
</>};
const _bladeguard = {title: "Bladeguard", jsx: <><h2 id="eq-reagent-bladeguard-bladeguard">Bladeguard</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="40 gp" b="-" c="misc" d="Bladeguard" />
<p>Weapons and armor aren't the only things bladeguard protects.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (40 gp)" b={<><em>wall of iron (M)</em></>} c="For each pot of bladeguard used as a power component, you may designate one 10-foot square of iron wall that has acid resistance 10 and immunity to rusting attacks." />
</>};
const _brimstone = {title: "Brimstone", jsx: <><h2 id="eq-reagent-brimstone-brimstone">Brimstone</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>Brimstone, also called sulfur, has a distinctive odor and caustic properties.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="2 (1 gp)" b="acid descriptor (M)" c="+1 acid damage" />
</>};
const _cold_iron = {title: "Cold Iron", jsx: <><h2 id="eq-reagent-cold_iron-cold-iron">Cold Iron</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="1 gp" b="-" c="material" d="Cold Iron" />
<p>Cold iron is often used to produce alloyed metals, catalysts, and items that interfere with magic.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="5 (5 gp)" b="abjuration school (M)" c="+1 caster level for the purpose of caster level and dispel checks" />
</>};
const _cooperation_crystals = {title: "Cooperation Crystals", jsx: <><h2 id="eq-reagent-cooperation_crystals-cooperation-crystals">Cooperation Crystals</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 10</Link></p>
<Tabular format="alchstats" a="300 gp" b="-" />
<p>This vibrant blue-green crystal is a distillation of the spirit of cooperation characteristic of the chaotic good plane of <Link to="/rule/elysium">Elysium</Link>.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (300 gp)" b="harmless spells (M or F)" c="When you use a cooperation crystal as a material component or focus for a harmless spell, treat your caster level as 1 higher for the purpose of determining the spell's duration and effect. This increase doesn't stack with other effects that raise the caster level of a spell. (You cannot use this as a material component and a focus for the same spell.)" />
</>};
const _cytillesh_spores = {title: "Cytillesh Spores", jsx: <><h2 id="eq-reagent-cytillesh_spores-cytillesh-spores">Cytillesh Spores</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 11</Link></p>
<Tabular format="alchstats" a="5 gp" b="-" c="poison" d="Cytillesh Extract" />
<p>The spore of the cytillesh fungus is a versatile reagent, and is often combined with other poisonous elements to create deliriums, hallucinogens, and psychotics.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (5 gp)" b="charm or compulsion subschool (M)" c="+1 caster level for the purpose of duration" />
</>};
const _darkwood = {title: "Darkwood", jsx: <><h2 id="eq-reagent-darkwood-darkwood">Darkwood</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="2 gp" b="-" c="material" d="Darkwood" />
<p>The bark of the darkwood tree is useful in numerous alchemical applications, especially those that require a light but strong foundation.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="5 (10 gp)" b="creation subschool (M)" c="+1 caster level for the purpose of the effect" />
</>};
const _dew_of_lunary = {title: "Dew of Lunary", jsx: <><h2 id="eq-reagent-dew_of_lunary-dew-of-lunary">Dew of Lunary</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="4 gp" b="-" />
<p>Dew of lunary is derived from a potent herb. It is commonly used in the creation of medicinal, protective, and divinatory items.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="5 (20 gp)" b="divination school (M)" c="+1 caster level for the purpose of effect" />
</>};
const _dragons_gut = {title: "Dragon's Gut", jsx: <><h2 id="eq-reagent-dragons_gut-dragons-gut">Dragon's Gut</h2>
<p><strong>Sources</strong> <Link to="/source/dragonslayers_handbook">Dragonslayer's Handbook pg. 19</Link></p>
<Tabular format="alchstats" a="50 gp" b="1 lb." c="misc" d="Dragon's Gut" />
<p>A dragon's stomach contains highly corrosive acid that can be crafted into an alchemical item called dragon's gut.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (50 gp)" b={<><em>acid arrow, acid fog, acidic spray</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/acid_arrow">Acid arrow</Link></strong> <strong className="hl">(M):</strong> The spell lasts 1d3 rounds longer than usual.</p>
<p><strong className="hl"><Link to="/spell/acid_fog">Acid fog</Link></strong> <strong className="hl">(M):</strong> The fog takes on a sticky quality and clings to creatures within it. Any creature damaged by the acid fog takes an additional 2d6 points of acid damage on the round after leaving the fog's area of effect. The creature can negate this additional damage by spending a standard action to wipe the clinging acid from its body.</p>
<p><strong className="hl"><Link to="/spell/acidic_spray">Acidic spray</Link></strong> <strong className="hl">(M):</strong> The spell deals 1d8 points of acid damage per caster level (maximum 15d8) instead of the normal 1d6 per caster level on the round of its casting (Reflex half). It still deals 1d6 points of damage per two caster levels on the following round as normal.</p>
<blockquote>
<p><em>Note: The original source doesn't state whether the spells use it as a material or focus cost. The first two have clear parallels with the</em> acid <em>entry, but the third is a guess. Consult your GM.</em></p>
</blockquote>
</>};
const _fire_fragment = {title: "Fire Fragment", jsx: <><h2 id="eq-reagent-fire_fragment-fire-fragment">Fire Fragment</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 10</Link></p>
<Tabular format="alchstats" a="350 gp" b="-" />
<p>This small, reddish crystal shard flickers with a brilliant, dancing flame - a representation of the <Link to="/rule/plane_of_fire">Plane of Fire</Link>.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (350 gp)" b="fire spells (M or F)" c={<>When you use a fire fragment as a material component or focus for a spell that deals fire damage, that spell is affected as per the <Link to="/feat/flaring_spell">Flaring Spell</Link> metamagic feat (though this does not increase the spell slot that the spell uses), and you treat your caster level as 1 higher for the purpose of determining the spell's damage. (You cannot use this as a material component and a focus for the same spell.)</>} />
</>};
const _flash_powder = {title: "Flash Powder", jsx: <><h2 id="eq-reagent-flash_powder-flash-powder">Flash Powder</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="50 gp" b="-" c="weapon" d="Flash Powder" />
<p>Useful as a distraction, flash powder makes light-burst spells more dangerous.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (50 gp)" b={<><em>flare, pyrotechnics</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/flare">Flare</Link></strong> <strong className="hl">(M):</strong> Increase the saving throw DC of the spell by 2.</p>
<p><strong className="hl"><Link to="/spell/pyrotechnics">Pyrotechnics</Link></strong> <strong className="hl">(M):</strong> When used to create fireworks, increase the DC by 1 and the blindness duration by 1 round.</p>
</>};
const _ginger_extract = {title: "Ginger Extract", jsx: <><h2 id="eq-reagent-ginger_extract-ginger-extract">Ginger Extract</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 25</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>In addition to serving as a spice and as an alchemical reagent, ginger extract has a wide variety of uses in herbal remedies that treat nausea and pain.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="10 (5 gp)" b="transmutation school (M)" c="+1 caster level for the purpose of overcoming spell resistance" />
</>};
const _gold = {title: "Gold", jsx: <><h2 id="eq-reagent-gold-gold">Gold</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="5 gp" b="-" c="material" d="Gold" />
<p>In its purest form, gold is a dense, non-reactive metal. Its alchemical products are useful in stains and in treating swelling, pain, and infections.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (5 gp)" b="healing subschool (M)" c="+1 hit point healed" />
</>};
const _heavenly_quartz = {title: "Heavenly Quartz", jsx: <><h2 id="eq-reagent-heavenly_quartz-heavenly-quartz">Heavenly Quartz</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<Tabular format="alchstats" a="250 gp" b="-" />
<p>This fragment appears to be made of glass and gold and emits gleaming light, reminiscent of the mountain of <Link to="/rule/heaven">Heaven</Link>.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (250 gp)" b="good or lawful spells with a Will saving throw (M or F)" c="When you use a Heavenly quartz as a material component or focus for a spell with the good or lawful descriptor that requires affected creatures to attempt a Will saving throw, increase the DC of that saving throw by 1; if the spell has both the good and lawful descriptors, treat the spell's caster level as if it were 1 higher for the purpose of caster level checks and dispel checks. (You cannot use this as a material component and a focus for the same spell.)" />
</>};
const _itching_powder = {title: "Itching Powder", jsx: <><h2 id="eq-reagent-itching_powder-itching-powder">Itching Powder</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="60 gp" b="2 lbs." c="weapon" d="Itching Powder" />
<p>This powder can make an otherwise innocuous spell especially irritating.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (60 gp)" b={<><em>glitterdust, repel vermin, summon swarm</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/glitterdust">Glitterdust</Link></strong> <strong className="hl">(M):</strong> For each packet of itching powder used as a power component, you may designate one creature in the area to be affected by itching powder (DC 12).</p>
<p><strong className="hl"><Link to="/spell/repel_vermin">Repel Vermin</Link></strong> <strong className="hl">(M):</strong> The first vermin that enters the emanation is subject to the effects of itching powder (DC 15). Each packet of itching powder beyond the first means the spell affects another vermin that enters the emanation. A swarm of vermin counts as one vermin for the purpose of this effect.</p>
<p><strong className="hl"><Link to="/spell/summon_swarm">Summon Swarm</Link></strong> <strong className="hl">(M):</strong> Increase the swarm's distraction DC by 2.</p>
</>};
const _liquid_ice = {title: "Liquid Ice", jsx: <><h2 id="eq-reagent-liquid_ice-liquid-ice">Liquid Ice</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="40 gp" b="2 lbs." e={<><Link to="/eq-weapon/liquid_ice">Liquid Ice</Link> (weapon), <Link to="/eq-siegeengine/liquid_ice">Liquid Ice</Link> (siege engine ammunition)</>} />
<p>This substance augments cold magic.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (40 gp)" b={<><em>cone of cold, gentle repose, ray of frost, protection from energy, resist energy</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/cone_of_cold">Cone of Cold</Link></strong> <strong className="hl">(M):</strong> The spell deals +1 point of damage per caster level.</p>
<p><strong className="hl"><Link to="/spell/gentle_repose">Gentle Repose</Link></strong> <strong className="hl">(M):</strong> The spell's duration increases to 2 days per level.</p>
<p><strong className="hl"><Link to="/spell/ray_of_frost">Ray of Frost</Link></strong> <strong className="hl">(F):</strong> The spell deals +1 point of damage.</p>
<p><strong className="hl"><Link to="/spell/ray_of_frost">Ray of Frost</Link></strong> <strong className="hl">(M):</strong> The spell creates an icicle of frozen water vapor that strikes the target and deals 1d3 points of piercing damage and 1 point of cold damage.</p>
<p><strong className="hl"><Link to="/spell/protection_from_energy">Protection from Energy</Link></strong> <strong className="hl">(M):</strong> If cast to ward against fire, increase the amount of fire damage absorbed by 5.</p>
<p><strong className="hl"><Link to="/spell/resist_energy">Resist Energy</Link></strong> <strong className="hl">(M):</strong> If cast to ward against fire, increase the fire resistance to 12. At caster level 7th, you may use two jars of liquid ice as a power component to increase the fire resistance to 24. At caster level 11th, you may use three jars as a power component to increase the fire resistance to 36.</p>
</>};
const _magnesium = {title: "Magnesium", jsx: <><h2 id="eq-reagent-magnesium-magnesium">Magnesium</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="1 gp" b="-" />
<p>Magnesium is an extremely light and reactive metal that burns brightly when exposed to air. It is important for all living things, especially plants.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="2 (2 gp)" b="transmutation school (M)" c="+1 caster level for the purpose of duration" />
</>};
const _mugwort_extract = {title: "Mugwort Extract", jsx: <><h2 id="eq-reagent-mugwort_extract-mugwort-extract">Mugwort Extract</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 25</Link></p>
<Tabular format="alchstats" a="2 gp" b="-" />
<p>Many varieties of mugwort exist; some are used in acupuncture, while others are key ingredients in herbal remedies that ward off fatigue, cold, or even supernatural dangers.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="2 (4 gp)" b="abjuration school (M)" c="+1 caster level for the purpose of range" />
</>};
const _myrrh = {title: "Myrrh", jsx: <><h2 id="eq-reagent-myrrh-myrrh">Myrrh</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 0</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>Myrrh is an aromatic gum used as a base for alchemical remedies and as a sticky bonding agent.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="4 (2 gp)" b="abjuration school (M)" c="+1 caster level for the purpose of caster level checks and dispel checks" />
</>};
const _odor_stalk = {title: "Odor Stalk", jsx: <><h2 id="eq-reagent-odor_stalk-odor-stalk">Odor stalk</h2>
<p><strong>Sources</strong> <Link to="/source/monster_hunters_handbook">Monster Hunter's Handbook pg. 27</Link></p>
<Tabular format="alchstats" a="70 gp" b="1/10 lb." c="misc" d="Odor Stalk" />
<p>These alchemically treated <Link to="/eq-misc/incense">incense</Link> sticks contain pheromones that certain creatures find repellent. Each odor stalk is created to irritate a specific creature type.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (70 gp)" b={<><em>ghoul touch, repel vermin, stinking cloud</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/ghoul_touch">Ghoul touch:</Link></strong> The stench only affects creatures of the odor stalk's associated creature type.</p>
<p><strong className="hl"><Link to="/spell/repel_vermin">Repel vermin:</Link></strong> The spell functions as written, but applies to the odor stalk's associated creature type instead of to vermin. The Will save DC is always 12 when using this component.</p>
<p><strong className="hl"><Link to="/spell/stinking_cloud">Stinking cloud:</Link></strong> The Fortitude save DC increases by 1 for creatures of the odor stalk's prescribed type, but decreases by 1 for all other creature types.</p>
<blockquote>
<p><em>Note: The original source doesn't state whether the spells use it as a material or focus cost. Consult your GM.</em></p>
</blockquote>
</>};
const _pesh = {title: "Pesh", jsx: <><h2 id="eq-reagent-pesh-pesh">Pesh</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 19</Link></p>
<Tabular format="alchstats" a="15 gp" b="-" e={<><Link to="/eq-misc/pesh">Pesh</Link> (Black Market item), <Link to="/drug/pesh">Pesh</Link> (drug)</>} />
<p>When used as an alchemical reagent, refined pesh is often sublimated along with other reagents to create new forms of the famous drug.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (15 gp)" b="enchantment school (M)" c="+1 caster level for purpose of duration" />
</>};
const _phosphorus = {title: "Phosphorus", jsx: <><h2 id="eq-reagent-phosphorus-phosphorus">Phosphorus</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="2 sp" b="-" />
<p>Phosphorus is a highly reactive mineral that glows faintly in air. Vital to all life, it is most commonly used by alchemists to create fertilizers, poisons, soaps, and tindertwigs. It is obtained by processing uric acid or bone ash.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="10 (2 gp)" b="light descriptor or teleportation subschool (M)" c="+1 caster level for the purpose of range" />
</>};
const _quicksilver = {title: "Quicksilver", jsx: <><h2 id="eq-reagent-quicksilver-quicksilver">Quicksilver</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="1 gp" b="-" />
<p>Quicksilver is a liquid metal with dangerous mental effects on those who handle it. It is most often distilled from crystalline amalgams such as cinnabar and stored in iron flasks.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="3 (3 gp)" b="mind-affecting descriptor (M)" c="+1 caster level for the purpose of duration" />
</>};
const _realgar = {title: "Realgar", jsx: <><h2 id="eq-reagent-realgar-realgar">Realgar</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="3 gp" b="-" />
<p>Realgar, also called ruby of arsenic, is a red crystal useful in creating poisons and medicines. It is commonly purified into <Link to="/eq-poison/arsenic">arsenic</Link>, a crystalline metal known as the "king of poisons" for its popularity among nobles seeking to poison their rivals.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (3 gp)" b="poison descriptor (M)" c="+2 DC to identify or neutralize the poison with spells or skills" />
</>};
const _salt = {title: "Salt", jsx: <><h2 id="eq-reagent-salt-salt">Salt</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>Salt is a vital mineral commodity. It is most commonly used as a desiccant and as a catalyst.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="20 (10 gp)" b="necromancy school (M)" c="+1 caster level for the purpose of effect" />
</>};
const _saltpeter = {title: "Saltpeter", jsx: <><h2 id="eq-reagent-saltpeter-saltpeter">Saltpeter</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="3 gp" b="-" />
<p>Saltpeter is used to create fertilizers, propellants, fireworks, and preservatives.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (1 gp)" b="fire descriptor (M)" c="+1 fire damage" />
</>};
const _silver = {title: "Silver", jsx: <><h2 id="eq-reagent-silver-silver">Silver</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="1 gp" b="-" c="material" d="Silver" />
<p>Silver is a lustrous precious metal used in mirrors, disinfectants, electrics, and illusion-creating magic items.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="10 (10 gp)" b="illusion school (M)" c="+1 to DC of Will saves to disbelieve" />
</>};
const _smokestick = {title: "Smokestick", jsx: <><h2 id="eq-reagent-smokestick-smokestick">Smokestick</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="20 gp" b="1/2 lb." c="misc" d="Smokestick" />
<p>These items work best with spells that create clouds or smoke.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (20 gp)" b={<><em>fog cloud, obscuring mist, pyrotechnics</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/fog_cloud">Fog Cloud</Link></strong> <strong className="hl">(M):</strong> Increase the radius of the cloud by 5 feet.</p>
<p><strong className="hl"><Link to="/spell/obscuring_mist">Obscuring Mist</Link></strong> <strong className="hl">(M):</strong> The spell creates a smoky haze instead of mist. This haze cannot be dispersed by fire spells and dissipates naturally after 1 minute.</p>
<p><strong className="hl"><Link to="/spell/pyrotechnics">Pyrotechnics</Link></strong> <strong className="hl">(M):</strong> Increase the radius of the cloud by 5 feet and the duration by 2 rounds.</p>
</>};
const _spirit_of_wine = {title: "Spirit of Wine", jsx: <><h2 id="eq-reagent-spirit_of_wine-spirit-of-wine">Spirit of Wine</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>Spirit of wine is purified, alchemically active alcohol commonly used as a fuel or solvent in alchemical items, specialized inks, and perfumes. It is too pure to drink alone, but can be used as a reagent to form tinctures and alchemical drinks.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="6 (3 gp)" b="calling and summoning subschools (M)" c="+1 caster level for the purpose of duration" />
</>};
const _tanglefoot_bag = {title: "Tanglefoot Bag", jsx: <><h2 id="eq-reagent-tanglefoot_bag-tanglefoot-bag">Tanglefoot Bag</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="50 gp" b="4 lbs." c="weapon" d="Tanglefoot Bag" />
<p>These sticky pouches can make a troublesome spell even worse.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (50 gp)" b={<><em>black tentacles, slow, web</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/black_tentacles">Black Tentacles</Link></strong> <strong className="hl">(M):</strong> For each tanglefoot bag used as a power component, you may reroll the tentacles' grapple check against one creature of your choice.</p>
<p><strong className="hl"><Link to="/spell/slow">Slow</Link></strong> <strong className="hl">(M):</strong> For each tanglefoot bag used as a power component, you may designate one slowed creature as being affected by a tanglefoot bag.</p>
<p><strong className="hl"><Link to="/spell/web">Web</Link></strong> <strong className="hl">(M):</strong> Increase the DC of breaking free by making a combat maneuver or Escape Artist check by 1.</p>
</>};
const _thunderstone = {title: "Thunderstone", jsx: <><h2 id="eq-reagent-thunderstone-thunderstone">Thunderstone</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_armory">Adventurer's Armory pg. 27</Link></p>
<Tabular format="alchstats" a="30 gp" b="1 lb." c="weapon" d="Thunderstone" />
<p>While they are effective enough on their own, these stones have useful interactions with some spells.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (30 gp)" b={<><em>alarm, glyph of warding</em></>} c="Uses are listed below." />
<p><strong className="hl"><Link to="/spell/alarm">Alarm</Link></strong> <strong className="hl">(M):</strong> If cast as a mental alarm, you may have the spell activate a mental and audible alarm. If cast as an audible alarm, the alarm is as loud as a thunderstone and affects creatures in a 10-foot-radius spread as if a thunderstone had detonated there.</p>
<p><strong className="hl"><Link to="/spell/glyph_of_warding">Glyph of Warding</Link></strong> <strong className="hl">(M):</strong> Creatures that fail their saves against a blast glyph are also <Link to="/misc/deafened">deafened</Link> as if by a thunderstone.</p>
</>};
const _urea = {title: "Urea", jsx: <><h2 id="eq-reagent-urea-urea">Urea</h2>
<p><strong>Sources</strong> <Link to="/source/alchemy_manual">Alchemy Manual pg. 33</Link></p>
<Tabular format="alchstats" a="5 sp" b="-" />
<p>Urea is a highly versatile reagent most commonly used in salves and as a stabilizer for particularly volatile alchemical reactions.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="4 (2 gp)" b="cold descriptor (M)" c="+1 caster level for the purpose of the effect" />
</>};
const _void_shard = {title: "Void Shard", jsx: <><h2 id="eq-reagent-void_shard-void-shard">Void Shard</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<Tabular format="alchstats" a="250 gp" b="-" />
<p>This shard seems to absorb the light around it, demonstrating the annihilatory power of the <Link to="/rule/negative_energy_plane">Negative Energy Plane</Link>.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (250 gp)" b="necromancy school (M or F)" c="When you use a void crystal as a material component or focus for a spell of the necromancy school, the target takes a -2 penalty on saves against the spell. (You cannot use this as a material component and a focus for the same spell.)" />
</>};
const _whimsy_star = {title: "Whimsy Star", jsx: <><h2 id="eq-reagent-whimsy_star-whimsy-star">Whimsy Star</h2>
<p><strong>Sources</strong> <Link to="/source/plane_hoppers_handbook">Plane-Hopper's Handbook pg. 11</Link></p>
<Tabular format="alchstats" a="200 gp" b="-" />
<p>The shimmering, multicolored whimsy star captures the mutability of <Link to="/rule/the_first_world">the First World</Link>.</p>
<h3><Link to="/rule/alchemical_power_components">Power Component</Link></h3><Tabular format="powercomp" a="1 (200 gp)" b="any (M or F)" c="When you use a whimsy star as a material component or focus for a spell, roll 1d6 and consult the table below. You can't use magic or other abilities to affect the result of this roll. If a result cannot apply to your spell, then the spell resolves normally. Regardless of the result, the spell slot required to cast the spell doesn't change. (You cannot use this as a material component and a focus for the same spell.)" />
<ScrollContainer id="eq-reagent-whimsy_star--table-0"><table>
<thead>
<tr>
<th>d6</th>
<th>Result</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>The spell fails and you are <Link to="/misc/dazzled">dazzled</Link> for 1d4 rounds.</td>
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