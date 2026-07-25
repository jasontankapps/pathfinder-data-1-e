import Link from '../../components/Link';
import {Block,Row,Cell} from '../../components/Block';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested ranger trap.</p>
</>};
const _acid_trap = {title: "Acid Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Acid Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The target is splattered with acid, taking a number of points of acid damage equal to 1d6 + 1/2 the ranger's level to the triggering creature (Reflex negates).<br/><br/>If it is an extraordinary trap, the ranger must supply a dose of <Link to="/eq-weapon/acid">acid</Link> when setting the trap.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/corrosive_touch">corrosive touch</Link></em></Cell></Row></Block>
</>};
const _alarm_trap = {title: "Alarm Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Alarm Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>When the trap is triggered, it also creates a momentary loud noise equivalent to the audible alarm version of <Link to="/spell/alarm">alarm</Link>.</Cell></Row></Block>
</>};
const _anchoring_trap = {title: "Anchoring Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook pg. 11</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Anchoring Trap (Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>This trap can be added to a supernatural <Link to="/rangertrap/snare_trap">snare trap</Link>.<br/><br/>The trap briefly imprisons any called creature (such as those called by the <Link to="/spell/planar_binding">planar binding</Link> spells) for 1d4 rounds (Will negates). During this time the creature may not move from the location of the trap, though it may still use ranged effects and attack any creature within its reach.<br/><br/>Additionally, anchoring traps disable the creature's ability to travel within or between dimensions. This includes casting <Link to="/spell/astral_projection">astral projection</Link>, <Link to="/spell/blink">blink</Link>, <Link to="/spell/dimension_door">dimension door</Link>, <Link to="/spell/ethereal_jaunt">ethereal jaunt</Link>, <Link to="/spell/etherealness">etherealness</Link>, <Link to="/spell/gate">gate</Link>, <Link to="/spell/maze">maze</Link>, <Link to="/spell/plane_shift">plane shift</Link>, <Link to="/spell/shadow_walk">shadow walk</Link>, <Link to="/spell/teleport">teleport</Link>, <Link to="/spell/teleportation_circle">teleportation circle</Link>, and similar spell-like abilities. The trap does not prevent the creature from using magic items that produce these effects, like <Link to="/magic-wondrous/cubic_gate">cubic gates</Link>, <Link to="/magic-wondrous/helm_of_teleportation">helms of teleportation</Link>, or <Link to="/magic-wondrous/amulet_of_the_planes">amulets of the planes</Link>.<br/><br/>The trap can hold up to a Medium creature; each extra daily use of the ranger's trap ability spent when the trap is set increases the maximum size of creature the trap can hold by one size category.</Cell></Row></Block>
</>};
const _blightburn_trap = {title: "Blightburn Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Blightburn Trap (Ex)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap strikes the target with a small shard of <Link to="/eq-material/blightburn">blightburn</Link>, dealing 2d6 points of fire damage, 1d3 points of <Link to="/rule/constitution_damage">Constitution damage</Link>, and 1d3 points of Charisma damage. A successful Fortitude save negates the ability damage and halves the fire damage.<br/><br/>The ranger must supply a sliver of blightburn, a dangerous task in itself, though storing the blightburn in a lead vial makes the task less risky.</Cell></Row></Block>
</>};
const _blighted_mark_trap = {title: "Blighted Mark Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 17</Link></p>
<Block titled size="minimal"><Row><Cell><p>Blighted Mark Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap stains the victim with blighted plant matter, increasing its susceptibility to the attacks of creatures created or enthralled by the affliction.<br/><br/>The target takes a -2 penalty to Armor Class against the attacks of creatures closely affiliated with the specific blight (typically demons, fey, plants, or undead) and on saving throws against effects created by such creatures. This effect lasts for 10 minutes per ranger level. A successful Will save negates this effect.<br/><br/>Regardless of whether this is an extraordinary or supernatural trap, the ranger must supply a sample of the specific blight when setting this trap.</Cell></Row></Block>
</>};
const _bludgeoning_trap = {title: "Bludgeoning Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 15</Link></p>
<Block titled size="minimal"><Row><Cell><p>Bludgeoning Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap bludgeons the creature that triggers it. The trap makes an attack with a bonus equal to the ranger's character level + his Wisdom bonus. The triggering creature is denied its Dexterity bonus to AC if it was unaware of the trap. If the trap hits, it deals 1d6 points of bludgeoning damage for every 4 levels the ranger possesses (minimum 1d6).<br/><br/>If it's an extraordinary trap, the ranger must provide an object suitable for dealing lethal bludgeoning damage, such as a large branch or heavy stone.</Cell></Row></Block>
</>};
const _burning_trap = {title: "Burning Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Burning Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>A ranger can only add this to a <Link to="/rangertrap/fire_trap">fire trap</Link>.<br/><br/>If the triggering creature fails its Reflex save, it catches on fire, taking 1d6 points of fire damage at the start of its turn for 1d4 rounds. The burning creature can attempt a new save as a full-round action. Dropping and rolling on the ground grants a +4 bonus on this save.</Cell></Row></Block>
</>};
const _channeled_energy_trap = {title: "Channeled Energy Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Channeled Energy Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap creates a positive or negative energy effect designed to harm either undead or living creatures, respectively. The target takes a number of points of damage equal to 1d8 + the ranger's level from either positive energy or negative energy (Will save for half).<br/><br/>If this is an extraordinary trap, the ranger must supply a vial of <Link to="/eq-weapon/holy_water">holy water</Link> (positive energy) or unholy water (negative energy).</Cell></Row></Block>
</>};
const _cleansing_trap = {title: "Cleansing Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 17</Link></p>
<Block titled size="minimal"><Row><Cell><p>Cleansing Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap suppresses the target's ability to use one randomly selected attack, ability, or quality that creates a disease or poison effect; this lasts for 1 round per ranger level. If the creature has more than one such attack, ability, or quality that creates a disease or poison effect, the attack, ability, or quality to be suppressed when the creature is affected by this trap is determined at random from those not already suppressed.</Cell></Row></Block>
</>};
const _decoy_trap = {title: "Decoy Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 15</Link></p>
<Block titled size="minimal"><Row><Cell><p>Decoy Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap creates a shadowy humanoid figment that appears to move away from the triggering creature or that follows a simple program of no more than 25 words defined by the ranger at the time when the trap is set. Unless programmed otherwise, the figment appears 60 feet away from the triggering creature or as close to that distance as possible, and then moves away toward the nearest exit, if any. The figment can move up to 60 feet per round.<br/><br/>A viewer can attempt a Will save or a Perception check to disbelieve the illusion if she attacks it or otherwise interacts with it. The Will save DC to disbelieve the illusion is the same as the DC to avoid the trap; the DC of the Perception check to disbelieve the illusion is equal to 5 + the DC to avoid the trap.</Cell></Row></Block>
</>};
const _dirty_trick_trap = {title: "Dirty Trick Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 15</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Dirty Trick Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>If the triggering creature fails its saving throw against the trap or is struck by the trap's attack, the trap also attempts a <Link to="/rule/dirty_trick">dirty trick</Link> combat maneuver against the triggering creature. The type of dirty trick is chosen when the trap is created, and if it isn't possible or isn't applicable to the triggering creature, the combat maneuver is wasted. The trap's CMB for the dirty trick is equal to the ranger's level + his Wisdom modifier.</Cell></Row></Block>
</>};
const _distraction_trap = {title: "Distraction Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Distraction Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The target is affected with irritation that detracts from its alertness. It takes a -2 penalty on <Link to="/skill/perception">Perception</Link> checks, initiative checks, and Reflex saves for 10 minutes per ranger level.<br/><br/>If this is a supernatural trap, this is a mind-affecting effect. If this is an extraordinary trap, the ranger must supply a dose of <Link to="/eq-weapon/itching_powder">itching powder</Link> or another alchemical irritant.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/daze_monster">daze monster</Link></em></Cell></Row></Block>
</>};
const _exploding_trap = {title: "Exploding Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Exploding Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>A ranger can only add this to a <Link to="/rangertrap/fire_trap">fire trap</Link>.<br/><br/>The trap explodes in fire, filling all squares adjacent to the trap and dealing a number of points of fire damage equal to 1d6 + 1/2 the ranger's level (Reflex negates).<br/><br/>If it is an extraordinary trap, the ranger must use an explosive material such as <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link> when setting the trap.</Cell></Row></Block>
</>};
const _fire_trap = {title: "Fire Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal"><Row><Cell><p>Fire Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap explodes in flames, dealing a number of points of fire damage equal to 1d6 + 1/2 the ranger's level to the triggering creature (Reflex negates).<br/><br/>If it is an extraordinary trap, the ranger must use an explosive material such as <Link to="/eq-weapon/alchemists_fire">alchemist's fire</Link> when setting the trap.</Cell></Row></Block>
</>};
const _firework_trap = {title: "Firework Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 25</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Firework Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>A ranger can add this augmentation to a <Link to="/rangertrap/fire_trap">fire</Link> or <Link to="/rangertrap/smoke_trap">smoke trap</Link>.<br/><br/>The trap explodes in a flash of colored lights. All creatures within 10 feet must succeed at a saving throw (Fortitude if an extraordinary firework trap, Will if supernatural) or be <Link to="/misc/blinded">blinded</Link> for 1d4+1 rounds.<br/><br/>If this is an extraordinary trap, the ranger must use an alchemical weapon when setting the trap, such as <Link to="/eq-weapon/flash_powder">flash powder</Link> or a <Link to="/eq-weapon/fireworks">firework</Link>.</Cell></Row></Block>
</>};
const _freezing_trap = {title: "Freezing Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal"><Row><Cell><p>Freezing Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap creates a burst of ice that damages and encases the triggering creature. The creature takes 1d3 points of cold damage + 1/4 the ranger's level and is <Link to="/rule/entangled">entangled</Link> and stuck to the ground, similar to the effect of a <Link to="/eq-weapon/tanglefoot_bag">tanglefoot bag</Link>. A successful Reflex save halves the damage and means the creature is not stuck to the floor by the ice.<br/><br/>The ice is 1 inch thick per 2 Hit Dice of the ranger (minimum 1), has hardness 0 and 3 hit points per inch of thickness, and melts in 2d4 rounds.</Cell></Row></Block>
</>};
const _infected_snare_trap = {title: "Infected Snare Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/people_of_the_wastes">People of the Wastes pg. 17</Link></p>
<Block titled size="minimal"><Row><Cell><p>Infected Snare Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>A ranger can add this only to a <Link to="/rangertrap/snare_trap">snare trap</Link>.<br/><br/>The snare is made of diseased materials, which contain an aggressive blight that saps the energy and bodily health from the target creature.<br/><br/>When initially caught in the snare, the trapped creature must succeed at a Fortitude saving throw or immediately take 2 points of <Link to="/rule/constitution_damage">Constitution damage</Link>. Each subsequent hour, the creature must succeed at a Fortitude saving throw or take 2 points of Constitution damage.<br/><br/>This effect lasts for 12 hours or until the creature makes two successful saving throws in a row, whichever comes first. This is a poison effect.</Cell></Row></Block>
</>};
const _lazurite_trap = {title: "Lazurite Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Lazurite Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell><Link to="/eq-material/lazurite">Lazurite</Link> radiation increases the victim's susceptibility to the attacks of undead creatures that are bolstered by the radiation. The target takes a -2 penalty to Armor Class against the attacks of undead creatures and on saving throws against effects created by undead. This effect lasts for 10 minutes per ranger level. A successful Will save negates this effect.<br/><br/>If this is an extraordinary trap, the ranger must supply a sliver of lazurite.</Cell></Row></Block>
</>};
const _limning_trap = {title: "Limning Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 25</Link></p>
<Block titled size="minimal"><Row><Cell><p>Limning Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap sprays glowing dust into the trapped square and all adjacent squares. A creature covered in this dust glows like a <Link to="/eq-misc/candle">candle</Link> (becoming visibly outlined if invisible) and takes a -20 penalty on Stealth checks. The dust's effects last for 1 round per ranger level or until the creature washes it off (a move action requiring water or some other cleanser).<br/><br/>If this is an extraordinary trap, the ranger must use alchemical components when setting the trap, such as <Link to="/eq-misc/glowing_ink">glowing ink</Link> or <Link to="/eq-misc/marker_dye">marker dye</Link>.</Cell></Row></Block>
</>};
const _marking_trap = {title: "Marking Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Marking Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>If the triggering creature fails its save against the trap, it is marked with a dye and/or scent of the ranger's choosing.<br/><br/>A scent mark decreases the DC of tracking the marked creature by <Link to="/umr/scent">scent</Link> by 4. The mark can be washed off with vigorous scrubbing, but fades on its own over several days.</Cell></Row></Block>
</>};
const _oversized_barbs = {title: "Oversized Barbs", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 20</Link></p>
<Block titled size="minimal"><Row><Cell><p>Oversized Barbs (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The target is speared with barbs that penetrate and protrude from its body, making squeezing, climbing, and swimming challenging.<br/><br/>The trap implants 1d4+1 barbs, each dealing 1 point of damage. A successful Reflex save halves the number of barbs. The target takes a penalty on Climb checks and Swim checks equal to the number of barbs attached, and is considered one size category larger for the purposes of determining what size of opening or passageway it must <Link to="/misc/squeeze">squeeze</Link> through as long as at least 1 barb remains attached.<br/><br/>Each barb can be removed with a full minute of work and a <Link to="/skill/heal">Heal</Link> check that equals or exceeds the trap's DC. If this check fails, the barb is still removed but the target takes 1d4 points of damage. The barbs shake loose harmlessly after 10 minutes per ranger level.</Cell></Row></Block>
</>};
const _penetrating_trap = {title: "Penetrating Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 12</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Penetrating Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>A ranger can only add this to a <Link to="/rangertrap/wounding_trap">wounding trap</Link>.<br/><br/>The damage die of a penetrating trap increases to 1d8. Choose either <Link to="/eq-material/adamantine">adamantine</Link>, <Link to="/eq-material/cold_iron">cold iron</Link>, or <Link to="/eq-material/silver">silver</Link>. The trap counts as that material for the purposes of overcoming damage reduction.<br/><br/>If this is an extraordinary trap, the ranger must provide 1 pound of the chosen material during the trap's construction.</Cell></Row></Block>
</>};
const _pit_trap = {title: "Pit Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Pit Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This simple pit is covered over with leaves or appropriate materials for the area. It's 5 feet deep plus 5 feet for every 4 ranger levels. A victim that succeeds at a Reflex save doesn't fall into the pit.<br/><br/>If it is an extraordinary trap, the ranger can set this trap only in terrain with soft ground.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/create_pit">create pit</Link></em></Cell></Row></Block>
</>};
const _poison_trap = {title: "Poison Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 64</Link></p>
<Block titled size="minimal"><Row><Cell><p>Poison Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap poisons the creature that triggers it. If it is a supernatural trap, the poison deals 1d2 <Link to="/rule/con_damage">Con damage</Link> per round for 6 rounds. If it is an extraordinary trap, the ranger must provide 1 dose of contact, inhaled, or injury poison when setting the trap, and the trap uses that poison's effects and DC.</Cell></Row></Block>
</>};
const _quicksand_trap = {title: "Quicksand Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 12</Link></p>
<Block titled size="minimal"><Row><Cell><p>Quicksand Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap and all adjacent squares become <Link to="/rule/marsh_terrain">quicksand</Link> as long as they contain loose sand or soil. The Swim DC to move in this quicksand is equal to the trap's save DC, and the Swim DC to tread in the quicksand is equal to the trap's DC - 5.<br/><br/>The quicksand lasts for a number of rounds equal to the ranger's level. When the effect ends, any creature still in the quicksand is returned to the surface <Link to="/rule/prone">prone</Link>.</Cell></Row></Block>
</>};
const _rust_monster_trap = {title: "Rust Monster Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Rust Monster Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap throws up a cloud of dust ground from the antennae of a <Link to="/monster/rust_monster">rust monster</Link>, dealing 1d4 points of damage to the target's metal armor and weapons. A ranger may increase the damage by 1 point for each additional daily use of his trap ability he spends when creating this trap. A successful Reflex save negates this damage.<br/><br/>If this is an extraordinary trap, the ranger must supply a set of rust monster antennae.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/rusting_grasp">rusting grasp</Link></em></Cell></Row></Block>
</>};
const _selective_trigger = {title: "Selective Trigger", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Selective Trigger (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>The ranger adds a race, type, alignment, or minimum weight restriction to the trap's trigger.<br/><br/>If this is an extraordinary trap, the ranger can choose only the minimum weight restriction.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Potion of <Link to="/spell/identify">identify</Link></em></Cell></Row></Block>
</>};
const _sleet_trap = {title: "Sleet Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 65</Link></p>
<Block titled size="minimal"><Row><Cell><p>Sleet Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The detonating trap creates a 20-foot-radius <Link to="/misc/burst">burst</Link> of sleet with the effects of a <Link to="/spell/sleet_storm">sleet storm</Link>. The driving sleet lasts for 1 round, but the icy ground persists for 1 round per ranger level.</Cell></Row></Block>
</>};
const _smoke_trap = {title: "Smoke Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 25</Link></p>
<Block titled size="minimal"><Row><Cell><p>Smoke Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap bellows out thick, choking smoke that fills the trapped square and all adjacent squares.<br/><br/>Any breathing creature in these squares must succeed at a Fortitude saving throws or take a -4 penalty to Strength and Dexterity every round it's within the smoke and for 1d4+1 rounds after leaving the smoke. All sight, even darkvision, is ineffective in or through the smoke. The smoke lasts for 1 round per 2 ranger levels, and is dispersed by wind as <Link to="/spell/fog_cloud">fog cloud</Link>.<br/><br/>If this is an extraordinary trap, the ranger must use an alchemical component when setting the trap, such as a <Link to="/eq-misc/smokestick">smokestick</Link>.</Cell></Row></Block>
</>};
const _snare_trap = {title: "Snare Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 65</Link></p>
<Block titled size="minimal"><Row><Cell><p>Snare Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap constricts around a limb or other part of the triggering creature's body (Reflex avoids). The creature cannot move from the location of the trap, unless the ranger included a "leash" when setting the trap, in which case the creature is limited to the length of the leash.<br/><br/>The trapped creature can escape with an Escape Artist check (DC equal to the trap's DC) as a full-round action. The trap or its leash has a number of hit points equal to 1/2 the ranger's level, or can be burst as a full-round action with a DC 25 Strength check.<br/><br/>The trap can hold up to a Medium creature; each extra daily use of the ranger's trap ability spent when the trap is set increases the maximum size of creature the trap can hold.<br/><br/>At the ranger's option, if there is a tall object or structure nearby, she can have the trap lift the creature.</Cell></Row></Block>
</>};
const _spell_stealing_trap = {title: "Spell-Stealing Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Spell-Stealing Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The target is struck by a burst of abjuration that steals its magical ability. The target loses 1d4+1 levels of spells (of its choice). A ranger may increase the number of spell levels lost by 1d4 for each additional daily use of his trap ability he spends when creating this trap.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/dispel_magic">dispel magic</Link></em></Cell></Row></Block>
</>};
const _spell_storing_trap = {title: "Spell-Storing Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Spell-Storing Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap behaves like a <Link to="/spell/greater_glyph_of_warding">greater glyph of warding</Link>, except the maximum level of spell it can hold is 1. A ranger may increase the maximum level by 1 for each daily use of his trap ability he spends when creating this trap.<br/><br/>The spell contained must be supplied by either the ranger or another creature within 1 round of the trap being laid. The duration of this trap is dependent on the ranger's level, but a target receives only one save, that of the spell contained.</Cell></Row></Block>
</>};
const _summoned_ally_trap = {title: "Summoned Ally Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ranged_tactics_toolbox">Ranged Tactics Toolbox pg. 15</Link></p>
<Block titled size="minimal"><Row><Cell><p>Summoned Ally Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap summons a creature as <Link to="/spell/summon_natures_ally_i">summon nature's ally I</Link> with a caster level equal to the ranger's level - 3.<br/><br/>This trap functions as <Link to="/spell/summon_natures_ally_ii">summon nature's ally II</Link> at 8th level, <Link to="/spell/summon_natures_ally_iii">summon nature's ally III</Link> at 11th level, and <Link to="/spell/summon_natures_ally_iv">summon nature's ally IV</Link> at 14th level.<br/><br/>The summoned creature or creatures appear in a location within the trap's range designated when the trap is set; if it's not possible for the creatures to appear in that location, they appear in the nearest unoccupied space. The ranger can choose a command of no more than 25 words when the trap is created; the creature or creatures follow those instructions, or otherwise attack the creature that triggered the trap.</Cell></Row></Block>
</>};
const _swarm_trap = {title: "Swarm Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 65</Link></p>
<Block titled size="minimal"><Row><Cell><p>Swarm Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap releases a <Link to="/monster/bat_swarm">bat swarm</Link>, <Link to="/monster/rat_swarm">rat swarm</Link>, or <Link to="/monster/spider_swarm">spider swarm</Link> that attacks all creatures in the area. The swarm remains in the general area for no longer than 1 round per ranger level, after which it disperses.<br/><br/>If the trap is an extraordinary trap, the ranger must provide the creatures of the swarm (typically in a small box, cage, or crate); these creatures may die of starvation before the trap is triggered (an extraordinary trap lasts 1 day per level).</Cell></Row></Block>
</>};
const _tar_trap = {title: "Tar Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Tar Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The target is coated in a thin layer of sticky tar unless it succeeds at a Reflex save. It is <Link to="/rule/entangled">entangled</Link>, and becomes susceptible to catching fire from any source of flame.<br/><br/>If lit on fire, the tar burns intensely for 1 round; it deals 2d6 points of fire damage and is destroyed in the process. Unless burned away, the tar remains for 1 round per ranger level.<br/><br/>If this is an extraordinary trap, the ranger must supply a dose of <Link to="/eq-weapon/tar_bomb">tar</Link>.</Cell></Row></Block>
</>};
const _telepathy_trap = {title: "Telepathy Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook pg. 11</Link></p>
<Block titled size="minimal"><Row><Cell><p>Telepathy Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>The trap resonates at a high-pitched frequency audible only to creatures that communicate via telepathy. If the triggering creature has the ability to communicate via telepathy, the creature becomes overwhelmed by psychic feedback. The trapped creature is <Link to="/misc/staggered">staggered</Link> for 1d4 rounds (Will negates), and may not communicate telepathically during this time.<br/><br/>This is a sonic, mind-affecting effect. Creatures that lack telepathy are not affected by this trap, though they may still trigger it.</Cell></Row></Block>
</>};
const _toxic_fumes_trap = {title: "Toxic Fumes Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_balance">Champions of Balance pg. 25</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Toxic Fumes Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>A ranger can add this to a <Link to="/rangertrap/smoke_trap">smoke trap</Link>.<br/><br/>The smoke this trap creates is extremely noxious. Any breathing creature must succeed at a Fortitude saving throw (in addition to the Fortitude save for the smoke trap) or be <Link to="/misc/nauseated">nauseated</Link> every round it's within the smoke and for 1d4+1 rounds after leaving the smoke.<br/><br/>If this is an extraordinary trap, the ranger must use a toxic material when setting the trap, such as <Link to="/eq-weapon/noxious_aromatic_flask">noxious aromatic</Link>.</Cell></Row></Block>
</>};
const _transdimensional_trap = {title: "Transdimensional Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal" hl><Row><Cell><p>Transdimensional Trap (Su)</p>
</Cell></Row>
<Row><Cell>Modification:</Cell><Cell>This augmentation allows a trap to affect an incorporeal or ethereal creature as if it were corporeal or existed on the Material Plane.</Cell></Row>
<Row><Cell>Magical Component:</Cell><Cell><em>Scroll of <Link to="/spell/ghostbane_dirge">ghostbane dirge</Link></em></Cell></Row></Block>
</>};
const _transpositional_trap = {title: "Transpositional Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/demon_hunters_handbook">Demon Hunter's Handbook pg. 11</Link></p>
<Block titled size="minimal"><Row><Cell><p>Transpositional Trap (Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This pair of traps causes any creature that steps in one of the traps to be teleported to the location of the other trap (Will negates), as the spell <Link to="/spell/dimension_door">dimension door</Link>. After having been transported, the creature may not take any other actions until its next turn.<br/><br/>If one part of a pair of transpositional traps becomes blocked by a solid body or object, the trap does not function until the obstruction is removed.<br/><br/>In order to create this trap, a ranger must set up two transpositional traps within 400 feet of each other, thus expending 2 uses of the ranger's traps per day. A ranger can only have one pair of transpositional traps set at a time; setting a third transpositional trap immediately causes the first to disappear and keys the second and third transpositional traps to one another.</Cell></Row></Block>
</>};
const _tripwire = {title: "Tripwire", jsx: <><p><strong>Sources</strong> <Link to="/source/kobolds_of_golarion">Kobolds of Golarion pg. 21</Link></p>
<Block titled size="minimal"><Row><Cell><p>Tripwire (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>A taut wire stretched between two vertical surfaces knocks the target <Link to="/rule/prone">prone</Link> unless it succeeds at a Reflex save. A <Link to="/rule/run">running</Link> or <Link to="/rule/charging">charging</Link> creature takes a -6 penalty on its save.</Cell></Row></Block>
</>};
const _wounding_trap = {title: "Wounding Trap", jsx: <><p><strong>Sources</strong> <Link to="/source/magical_marketplace">Magical Marketplace pg. 12</Link></p>
<Block titled size="minimal"><Row><Cell><p>Wounding Trap (Ex or Su)</p>
</Cell></Row>
<Row><Cell>Effect:</Cell><Cell>This trap makes a melee attack against the target using the ranger's base attack bonus + his Wisdom modifier for the attack roll. It deals an amount of damage equal to 1d6 + 1/2 the ranger's level. The ranger chooses whether this damage is bludgeoning, piercing, or slashing.<br/><br/>If this is a supernatural trap, the attack counts as magical for the purposes of overcoming damage reduction.</Cell></Row></Block>
</>};
export default {not_found:_not_found,acid_trap:_acid_trap,alarm_trap:_alarm_trap,anchoring_trap:_anchoring_trap,blightburn_trap:_blightburn_trap,blighted_mark_trap:_blighted_mark_trap,bludgeoning_trap:_bludgeoning_trap,burning_trap:_burning_trap,channeled_energy_trap:_channeled_energy_trap,cleansing_trap:_cleansing_trap,decoy_trap:_decoy_trap,dirty_trick_trap:_dirty_trick_trap,distraction_trap:_distraction_trap,exploding_trap:_exploding_trap,fire_trap:_fire_trap,firework_trap:_firework_trap,freezing_trap:_freezing_trap,infected_snare_trap:_infected_snare_trap,lazurite_trap:_lazurite_trap,limning_trap:_limning_trap,marking_trap:_marking_trap,oversized_barbs:_oversized_barbs,penetrating_trap:_penetrating_trap,pit_trap:_pit_trap,poison_trap:_poison_trap,quicksand_trap:_quicksand_trap,rust_monster_trap:_rust_monster_trap,selective_trigger:_selective_trigger,sleet_trap:_sleet_trap,smoke_trap:_smoke_trap,snare_trap:_snare_trap,spell_stealing_trap:_spell_stealing_trap,spell_storing_trap:_spell_storing_trap,summoned_ally_trap:_summoned_ally_trap,swarm_trap:_swarm_trap,tar_trap:_tar_trap,telepathy_trap:_telepathy_trap,toxic_fumes_trap:_toxic_fumes_trap,transdimensional_trap:_transdimensional_trap,transpositional_trap:_transpositional_trap,tripwire:_tripwire,wounding_trap:_wounding_trap}