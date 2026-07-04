import {IonRippleEffect} from '@ionic/react';
import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><h2 id="disease-not_found-error">Error</h2>
<p>Unable to find the requested disease.</p>
</>};
const _bonecrusher_dengue = {title: "Bonecrusher (Dengue)", jsx: <><h2 id="disease-bonecrusher_dengue-bonecrusher-dengue">Bonecrusher (Dengue)</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 6</Link></p>
<AffInfo start type="Injury" save="Fort 12" freq="1/day" onset="1 week" eff={<>1d4 <Link to="/rule/dex_damage">Dex damage</Link></>} cure2c icon="d" />
</>};
const _filth_fever = {title: "Filth Fever", jsx: <><h2 id="disease-filth_fever-filth-fever">Filth Fever</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Injury" save="Fort 12" freq="1/day" onset="1d3 days" eff={<>1d3 <Link to="/rule/dex_damage">Dex damage</Link> and 1d3 Con damage</>} cure2c icon="d" />
</>};
const _fungal_flu = {title: "Fungal Flu", jsx: <><h2 id="disease-fungal_flu-fungal-flu">Fungal Flu</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_13_shadow_in_the_sky">Pathfinder #13: Shadow in the Sky pg. 81</Link></p>
<AffInfo start type="Inhaled" save="Fort 12" freq="1/day" onset="3d6 days" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link></>} cure2c extra={<>Rolling a 1 on any Fortitude save to resist taking damage from fungal flu results in <Link to="/misc/blindness">blindness</Link>. The blindness persists - even resisting spells like <Link to="/spell/remove_blindness_deafness">remove blindness/deafness</Link> - until the disease is cured.</>} icon="d" />
</>};
const _leprosy = {title: "Leprosy", jsx: <><h2 id="disease-leprosy-leprosy">Leprosy</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link>  </p>
<AffInfo start type="Contact, inhaled, or injury" save="Fort 12 (negates; DC 20 to avoid effects)" freq="1/week" onset="2d4 weeks" eff={<>1d2 <Link to="/rule/cha_damage">Cha damage</Link></>} cure2c icon="d" />
</>};
const _mindfire = {title: "Mindfire", jsx: <><h2 id="disease-mindfire-mindfire">Mindfire</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Inhaled" save="Fort 12" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/int_damage">Int damage</Link></>} cure2c icon="d" />
</>};
const _cowards_mark = {title: "Coward's Mark", jsx: <><h2 id="disease-cowards_mark-cowards-mark">Coward's Mark</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 24</Link>  </p>
<AffInfo start type="Contact or inhaled" save="Fort 13" freq="1/day" onset="1 day" eff1={<>1d2 <Link to="/rule/dexterity_damage">Dexterity damage</Link> and 1d2 Wisdom damage. If the victim fails two saving throws 2 days in a row (not counting the initial save), he develops a secondary effect, or the existing secondary effect worsens. Curing the affliction immediately removes all accumulated secondary effects.</>} eff2={<>The first time the disease progresses, the victim becomes <Link to="/misc/shaken">shaken</Link> whenever other creatures (including allies) are within 30 feet. After the second progression, the victim must succeed at a Will saving throw (DC equal to the disease's save DC) or become <Link to="/misc/frightened">frightened</Link> each time any creature approaches within 30 feet. The victim needs to attempt a saving throw against any specific creature only once every 24 hours. With the third and final progression, the disease's save DC increases by 2, and the reaction upon a failed save increases to <Link to="/misc/panicked">panic</Link>. After the third progression, the victim feels safe only in complete solitude. The secondary effects of coward's mark are mind-affecting fear effects.</>} cure3c icon="d" />
<p>Externally manifesting as round marks on the skin like ringworm, this fungal infection soon spreads to the nervous system. The corpses of victims that succumb to coward's mark sprout thousands of fruiting bodies 1d4 days after death, spreading the infection on the wind.</p>
</>};
const _ghoul_fever = {title: "Ghoul Fever", jsx: <><h2 id="disease-ghoul_fever-ghoul-fever">Ghoul Fever</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 146</Link></p>
<AffInfo start type="Injury" save="Fort 13" freq="1/day" onset="1 day" eff={<>1d3 <Link to="/rule/dex_damage">Dex damage</Link> and 1d3 Con damage</>} cure2c icon="d" />
<p>A humanoid who dies of ghoul fever rises as a <Link to="/monster/ghoul">ghoul</Link> at the next midnight. A humanoid who becomes a ghoul in this way retains none of the abilities it possessed in life. It is not under the control of any other ghouls, but it hungers for the flesh of the living and behaves like a normal ghoul in all respects. A humanoid of 4 Hit Dice or more rises as a ghast (advanced ghoul). The save DC is Charisma-based.</p>
</>};
const _green_haze = {title: "Green Haze", jsx: <><h2 id="disease-green_haze-green-haze">Green Haze</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Contact" save="Fort 13" freq="1/day" onset="1 day" eff={<>-4 on Perception checks, target is permanently <Link to="/misc/blinded">blinded</Link> if it fails 3 saves</>} cure2c icon="d" />
</>};
const _shakes = {title: "Shakes", jsx: <><h2 id="disease-shakes-shakes">Shakes</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Contact" save="Fort 13" freq="1/day" onset="1 day" eff={<>1d8 <Link to="/rule/dex_damage">Dex damage</Link></>} cure2c icon="d" />
</>};
const _bluespit = {title: "Bluespit", jsx: <><h2 id="disease-bluespit-bluespit">Bluespit</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 23</Link></p>
<AffInfo start type="Inhaled" save="Fort 14" freq="1/day" onset="1 hour" eff={<>1d6 nonlethal damage and <Link to="/misc/fatigue">fatigue</Link>. The fatigue and nonlethal damage cannot be cured while the disease remains. This fatigue does not stack with itself to produce exhaustion, but does stack with other sources of fatigue. A victim that accumulates sufficient damage to fall <Link to="/misc/unconscious">unconscious</Link> while infected with bluespit begins to <Link to="/rule/suffocate">suffocate</Link>. Despite being unconscious, the victim is considered to be holding its breath rather than immediately progressing to negative hit points and death.</>} cure2c icon="d" />
</>};
const _brainworms = {title: "Brainworms", jsx: <><h2 id="disease-brainworms-brainworms">Brainworms</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Contact or injury" save="Fort 14" freq="1/day" onset="1 day" eff={<>1d3 <Link to="/rule/int_damage">Int damage</Link>, 1d3 Wis damage and if damaged in combat, target must make a second Fort save or gain the <Link to="/misc/confused">confused</Link> condition for the duration of the encounter</>} cure2c icon="d" />
</>};
const _devil_chills = {title: "Devil Chills", jsx: <><h2 id="disease-devil_chills-devil-chills">Devil Chills</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Injury" save="Fort 14" freq="1/day" onset="1d4 days" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link></>} cure3c icon="d" />
</>};
const _sleeping_sickness = {title: "Sleeping Sickness", jsx: <><h2 id="disease-sleeping_sickness-sleeping-sickness">Sleeping Sickness</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 8</Link></p>
<AffInfo start type="Injury (parasite)" save="Fort 14" freq="1/day" onset="1d2 days" eff={<>1d4 <Link to="/rule/wis_damage">Wis damage</Link> and target is <Link to="/misc/fatigued">fatigued</Link></>} cure="2 consecutive saves or arsenic (see text)" icon="d" />
<p><strong>Sources</strong> <Link to="/source/pathfinder_38_racing_to_ruin">Pathfinder #38: Racing to Ruin pg. 84</Link><br/>Endemic throughout the Sodden Lands and the Mwangi Expanse, the parasitic affliction known as "sleeping sickness" is spread when flying insects inject tiny parasites into their unsuspecting victim's bloodstream, thus inducing fever, headache, joint pain, swelling of glands in the back and neck, and most notably fatigue. The disease gradually infects the brain, causing confusion, reduced coordination, difficulty keeping track of time, and insomnia.</p>
<p>While exceedingly dangerous, even when administered by a practiced healer, the best cure for this disease is dosing the patient with the poison <Link to="/eq-poison/arsenic">arsenic</Link>. If the patient survives, there's a cumulative 30% chance per dose that the disease is immediately cured.</p>
</>};
const _slimy_doom = {title: "Slimy Doom", jsx: <><h2 id="disease-slimy_doom-slimy-doom">Slimy Doom</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Contact" save="Fort 14" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link> and target must make a second Fort save or 1 point of the damage is drain instead</>} cure2c icon="d" />
</>};
const _tetanus = {title: "Tetanus", jsx: <><h2 id="disease-tetanus-tetanus">Tetanus</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_1_burnt_offerings">Pathfinder #1: Burnt Offerings pg. 43</Link>, <Link to="/source/bestiary_4">Bestiary 4 pg. 132</Link></p>
<AffInfo start type="Injury" save="Fort 14" freq="1/day" onset="1d6 days" eff={<>1d4 <Link to="/rule/dex_damage">Dex damage</Link></>} cure2c extra="Each time someone takes Dexterity damage from tetanus, there's a 50% chance his jaw muscles stiffen, preventing speech and the use of spells with verbal components for the next 24 hours." icon="d" />
</>};
const _glacier_plague = {title: "Glacier Plague", jsx: <><h2 id="disease-glacier_plague-glacier-plague">Glacier Plague</h2>
<p><strong>Sources</strong> <Link to="/source/irrisen___land_of_eternal_winter">Irrisen - Land of Eternal Winter pg. 48</Link></p>
<AffInfo start type="Contact or injury" save="Fort 15" freq="1/day" onset="1 day" eff={<>1d6 <Link to="/rule/dex_damage">Dex damage</Link> and target is <Link to="/misc/exhausted">exhausted</Link>, its speed is reduced by half, and it is unable to speak</>} cure2c icon="d" />
<p>Known to take root in places long buried by supernatural cold, this affliction infects ruins and deep forests throughout Irrisen. It slowly freezes creatures from the inside out without dealing cold damage, so sufferers simply feel the weariness and fatigue of exerting themselves in a cold environment. The affliction reduces an affected creature's range of movement and acts in many ways like very gradual petrification. A sufferer is unable to speak, is severely slowed, and takes Dexterity damage; if the victim's Dexterity score drops below 5, it is unable to move at all. Creatures suffering from this plague don't die from it, but it often strands them out in the cold where they die from exposure.</p>
</>};
const _greenscale = {title: "Greenscale", jsx: <><h2 id="disease-greenscale-greenscale">Greenscale</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Injury" save="Fort 15" freq="1/week" onset="1d6 days" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link>, 1d2 Cha damage and target must make a second Fort save or 1 point of the Cha damage is drain instead</>} cure2c icon="d" />
</>};
const _moxixs_delectation = {title: "Moxix's Delectation", jsx: <><h2 id="disease-moxixs_delectation-moxixs-delectation">Moxix's Delectation</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_58_island_of_empty_eyes">Pathfinder #58: Island of Empty Eyes pg. 67</Link></p>
<AffInfo start type="Injury" save="Fort 15" freq="1/day" onset="1 day" eff={<>1d3 <Link to="/rule/con_damage">Con damage</Link> and 1d3 Wis damage</>} cure2c icon="d" />
<p>A humanoid afflicted with Moxix's delectation must attempt a new Will save each day. If the humanoid fails, it attacks and attempts to eat the weakest humanoid nearby. If the save is successful, it resists. A humanoid who dies or is killed while afflicted rises as a <Link to="/monster/ghast">ghast</Link> at the next midnight. The save DC is Charisma-based.</p>
</>};
const _red_ache = {title: "Red Ache", jsx: <><h2 id="disease-red_ache-red-ache">Red Ache</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Injury" save="Fort 15" freq="1/day" onset="1d3 days" eff={<>1d6 <Link to="/rule/str_damage">Str damage</Link></>} cure2c icon="d" />
</>};
const _spellscar_fever = {title: "Spellscar Fever", className: "simple lastColumnStart", jsx: <><h2 id="disease-spellscar_fever-spellscar-fever">Spellscar Fever</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_119_prisoners_of_the_blight">Pathfinder #119: Prisoners of the Blight pg. 63</Link>  </p>
<AffInfo start type="Ingested or inhaled" save="Fort 15 (+1 per previous save)" freq="1/day" onset="2d6+1 days" eff={<>1d2 <Link to="/rule/con_damage">Con damage</Link> and 1d2 Cha drain</>} cure2c icon="d" />
<p>Anyone who lives with spellscar fever for a week straight without dying becomes immune to the disease and to mana fever (see Mana Wastes mutant), but also becomes a <Link to="/template/mana_wastes_mutant">Mana Wastes mutant</Link> or a <Link to="/template/mutant">mutant</Link>, chosen by the GM. A Mana Waste mutant created in such a way can use the following <em>Spellscar Fever Deformities</em> table in place of a deformity from the <em>Mana Waste mutant</em> template, while a mutant resulting from spellscar fever can take one effect from the same table in place of one deformity and one mutation.</p>
<h3 id="disease-spellscar_fever-spellscar-fever-deformities">Spellscar Fever Deformities</h3>
<ScrollContainer id="disease-spellscar_fever--table-0"><table>
<thead>
<tr>
<th>d4</th>
<th>Effect</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td><strong>Echolocation (Ex):</strong> The mutant constantly emits a yipping noise, causing it to take a -4 penalty on Stealth checks. It can never cast spells with verbal components, but it gains <Link to="/umr/blindsight">blindsight</Link> out to a range of 15 feet.</td>
</tr>
<tr>
<td>2</td>
<td><strong>Gigantism (Ex):</strong> The mutant takes a -2 penalty on all Intelligence-based skill checks, but it gains the benefit of a permanent <Link to="/spell/enlarge_person">enlarge person</Link> effect.</td>
</tr>
<tr>
<td>3</td>
<td><strong>Proteanism (Ex):</strong> The mutant takes a -2 penalty on all Strength-based skill checks, but it gains a +2 bonus on its Disguise skill check and it gains the <Link to="/umr/compression">compression</Link> universal monster ability.</td>
</tr>
<tr>
<td>4</td>
<td><strong>Reality Shift (Ex):</strong> The mutant takes a -5 penalty on initiative checks and can never act in the surprise round, but it gains the benefit of a permanent <Link to="/spell/blur">blur</Link> effect.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _the_tainted_plague = {title: "The Tainted Plague", jsx: <><h2 id="disease-the_tainted_plague-the-tainted-plague">The Tainted Plague</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_campaign_setting">Pathfinder Campaign Setting pg. 149</Link>  </p>
<AffInfo start type="Contact" save="Fort 15 (see description)" freq="1/day" onset="1 day" eff={<>1d6 <Link to="/rule/con_damage">Con damage</Link> and 1d6 Wis damage</>} cure2c icon="d" />
<p>Even in the absence of ravening abyssal hordes, the Worldwound causes a supernatural disease called the tainted plague. Those exposed to the Worldwound or creatures native to it (including creatures already suffering ability damage from the disease) must make a DC 15 Fortitude save once per day or become infected. Those reduced to 0 Wisdom are driven mad by the mind-bending horrors they have witnessed. Those reduced to 0 Constitution perish, their bodies rotting from the inside out and dissolving within 24 hours into primordial chaos matter.</p>
</>};
const _blinding_sickness = {title: "Blinding Sickness", jsx: <><h2 id="disease-blinding_sickness-blinding-sickness">Blinding Sickness</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Ingested" save="Fort 16" freq="1/day" onset="1d3 days" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link>; if more than 2 Str damage, target must make an additional Fort save or be permanently <Link to="/misc/blinded">blinded</Link></>} cure2c icon="d" />
</>};
const _blood_veil = {title: "Blood Veil", jsx: <><h2 id="disease-blood_veil-blood-veil">Blood Veil</h2>
<p><strong>Sources</strong> <Link to="/source/curse_of_the_crimson_throne">Curse of the Crimson Throne pg. 430</Link>, <Link to="/source/pathfinder_8_seven_days_to_the_grave">Pathfinder #8: Seven Days to the Grave pg. 9</Link>  </p>
<AffInfo start type="Contact or injury" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link> and 1d4 Cha damage</>} cure2c extra="The first time ethnically Varisian humanoids, including human, half-elves, and half-orcs with Varisian parentage, are exposed to blood veil, each such character has a flat 5% chance that she is immune to the disease." icon="d" />
<p>Blood veil takes its name from its most apparent symptoms: a rash and mask of blisters that cover the face. In its initial stages, the disease is characterized by headache, fatigue, coughing, and the aforementioned rash. As it progresses, the cough becomes more obtrusive; the rash spreads to the neck, face, and limbs and develops into pox-like blisters; and the lymph glands swell into painful buboes. At its most advanced stage, the blisters grow to the size of grapes or larger, internal bleeding creates black patches on the skin, and the victim expectorates blood. Ultimately, a bloody, wheezing death occurs. If left untreated, blood veil kills the average human in 7 days.</p>
</>};
const _bonechill = {title: "Bonechill", jsx: <><h2 id="disease-bonechill-bonechill">Bonechill</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_51_the_hungry_storm">Pathfinder #51: The Hungry Storm pg. 67</Link></p>
<AffInfo start type="Injury" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/dex_damage">Dex damage</Link> and any nonlethal damage incurred from being in a cold environment becomes lethal damage (though it can still cause <Link to="/rule/cold_dangers">hypothermia</Link>)</>} cure2c icon="d" />
</>};
const _boot_soup = {title: "Boot Soup", jsx: <><h2 id="disease-boot_soup-boot-soup">Boot Soup</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Contact" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d3 <Link to="/rule/dex_damage">Dex damage</Link> and speed reduced by 5 feet; creatures reduced to 0 feet are permanently <Link to="/rule/paralyzed">paralyzed</Link></>} cure="2 consecutive saves, or completely skinning or burning the affected area (inflicting 1d8 points of damage)" icon="d" />
</>};
const _cackle_fever = {title: "Cackle Fever", jsx: <><h2 id="disease-cackle_fever-cackle-fever">Cackle Fever</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Inhaled" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d6 <Link to="/rule/wis_damage">Wis damage</Link></>} cure2c icon="d" />
</>};
const _dvezda_plague = {title: "Dvezda Plague", jsx: <><h2 id="disease-dvezda_plague-dvezda-plague">Dvezda Plague</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_69_maiden_mother_crone">Pathfinder #69: Maiden, Mother, Crone pg. 71</Link></p>
<AffInfo start type="Ingested or inhaled" save="Fort 16" freq="1/day" onset="1d4 days" eff={<>1 <Link to="/rule/dex_damage">Dex damage</Link> and 1d4 Con damage</>} cure2c icon="d" />
<p>Days after contracting the virus, the victim becomes stricken with a high fever and begins sweating profusely. Later, the victim begins suffering from extreme tremors, followed by a thinning of the blood and bleeding from the tear ducts, nose, ears, and other orifices.</p>
</>};
const _dysentary = {title: "Dysentary", jsx: <><h2 id="disease-dysentary-dysentary">Dysentary</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Contact or injury" save="Fort 16" freq="1/day" onset="1d3 days" eff={<>1d6 nonlethal damage and target is <Link to="/misc/fatigued">fatigued</Link> and <Link to="/misc/staggered">staggered</Link></>} cure2c icon="d" />
</>};
const _final_rest = {title: "Final Rest", jsx: <><h2 id="disease-final_rest-final-rest">Final Rest</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 24</Link></p>
<AffInfo start type="Inhaled" save="Fort 16" freq="1/day" onset="1 week" eff={<>1d2 <Link to="/rule/cha_damage">Cha damage</Link></>} cure2c extra="While any Charisma damage remains, the victim cannot gain morale bonuses, receives a +2 bonus on saves against mind-affecting effects, and must attempt a saving throw even against harmless mind-affecting effects." icon="d" />
<p>A disease brought on a ruined starship, final rest sops emotion until the victim simply gives up living.</p>
</>};
const _pulsing_puffs = {title: "Pulsing Puffs", jsx: <><h2 id="disease-pulsing_puffs-pulsing-puffs">Pulsing Puffs</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 8</Link></p>
<AffInfo start type="Injury" save="Fort 16" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/dex_damage">Dex damage</Link></>} cure2c icon="d" />
</>};
const _the_scales = {title: "The Scales", jsx: <><h2 id="disease-the_scales-the-scales">The Scales</h2>
<p><strong>Sources</strong> <Link to="/source/lost_cities_of_golarion">Lost Cities of Golarion pg. 8</Link></p>
<AffInfo start type="Contact or injury" save="Fort 16" freq="1/2 days" onset="1d4 days" eff={<>1d2 <Link to="/rule/dex_damage">Dex damage</Link> and 1d2 Cha damage</>} cure2c extra="Reptiles and creatures with the reptilian subtype receive a -2 penalty on saving throws and require 3 consecutive saves to recover." icon="d" />
</>};
const _bubonic_plague = {title: "Bubonic Plague", jsx: <><h2 id="disease-bubonic_plague-bubonic-plague">Bubonic Plague</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Injury or inhaled" save="Fort 17" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link>, 1d4 Cha damage and target is <Link to="/misc/fatigued">fatigued</Link></>} cure2c icon="d" />
</>};
const _chillbane_fever = {title: "Chillbane Fever", jsx: <><h2 id="disease-chillbane_fever-chillbane-fever">Chillbane Fever</h2>
<p><strong>Sources</strong> <Link to="/source/irrisen___land_of_eternal_winter">Irrisen - Land of Eternal Winter pg. 48</Link></p>
<AffInfo start type="Inhaled, injury" save="Fort 17" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link> and target is <Link to="/misc/sickened">sickened</Link> and <Link to="/misc/fatigued">fatigued</Link></>} cure2c icon="d" />
<p>Not to be confused with the far more potent earlier strain that swept across Bleakmarch during the reign of Queen Velikas, this infectious disease is characterized by the sufferer's constant shaking, as though he were unable to get warm. The <Link to="/monster/khala">khala dragon</Link> is one known carrier of the illness, though many other forms of exposure are possible.</p>
</>};
const _firegut = {title: "Firegut", jsx: <><h2 id="disease-firegut-firegut">Firegut</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Injury or inhaled" save="Fort 17" freq="1/day" onset="1 day" eff={<>target is <Link to="/misc/staggered">staggered</Link></>} cure3c icon="d" />
</>};
const _shattermind = {title: "Shattermind", jsx: <><h2 id="disease-shattermind-shattermind">Shattermind</h2>
<p><strong>Sources</strong> <Link to="/source/numeria_land_of_fallen_stars">Numeria, Land of Fallen Stars pg. 24</Link></p>
<AffInfo start type="Contact" save="Fort 17" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/wis_damage">Wis damage</Link> (cannot reduce Wisdom below 1); on any day the victim fails her saving throw, she suffers the effects of a <Link to="/rule/sanity_and_madness">type of insanity</Link>. Unlike normal insanity, on any day she makes a successful saving throw (using the DC for shattermind, not her form of insanity), she regains her sanity for that day. A given variety of shattermind spreads the same form of insanity to all of its victims.</>} cure2c icon="d" />
<p>Shattermind refers to a group of related infectious mental patterns spread by skin-to-skin contact between infected victims. Most forms of shattermind affect only humanoids and monstrous humanoids. Each form of shattermind spreads a different form of insanity to its victims. <Link to="/spell/restoration">Restoration</Link> allows a new saving throw but does not cure the insanity.</p>
</>};
const _demon_fever = {title: "Demon Fever", jsx: <><h2 id="disease-demon_fever-demon-fever">Demon Fever</h2>
<p><strong>Sources</strong> <Link to="/source/prpg_core_rulebook">PRPG Core Rulebook pg. 557</Link></p>
<AffInfo start type="Injury" save="Fort 18" freq="1/day" onset="1 day" eff={<>1d6 <Link to="/rule/con_damage">Con damage</Link> and target must make a second Fort save or 1 point of the damage is drain instead</>} cure2c icon="d" />
</>};
const _demonplague = {title: "Demonplague", jsx: <><h2 id="disease-demonplague-demonplague">Demonplague</h2>
<p><strong>Sources</strong> <Link to="/source/the_worldwound">The Worldwound pg. 29</Link></p>
<AffInfo start type="Injury or ingested" save="Fort 18" freq="1/day" onset="1 day" eff={<>1d3 <Link to="/rule/con_damage">Con damage</Link>, 1d6 Wis damage and victim is <Link to="/misc/fatigued">fatigued</Link> if it takes any ability damage from the disease</>} cure3c icon="d" />
<p>Of the afflictions wreaked upon Sarkoris by the Worldwound and Deskari's host, the demonplague is perhaps the most insidious. This vile sickness spreads through water, affecting plant and animal life alike. In higher creatures, the demonplague causes madness and then death, but in animals and other unintelligent beasts, it continues beyond death, animating them as undead horrors called <Link to="/template/plagued_beast">plagued beasts</Link>. The plague also twists and corrupts plant life - many hazardous plants are the results of normal plants becoming corrupted by the demonplague.</p>
</>};
const _malaria_jungle_fever = {title: "Malaria (Jungle Fever)", jsx: <><h2 id="disease-malaria_jungle_fever-malaria-jungle-fever">Malaria (Jungle Fever)</h2>
<p><strong>Sources</strong> <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 7</Link></p>
<AffInfo start type="Injury" save="Fort 18" freq="1/day" onset="1d3 days" eff={<>1d3 <Link to="/rule/str_damage">Str damage</Link>, 1d3 Con damage and target is <Link to="/misc/fatigued">fatigued</Link></>} cure2c icon="d" />
</>};
const _red_drip = {title: "Red Drip", jsx: <><h2 id="disease-red_drip-red-drip">Red Drip</h2>
<p><strong>Sources</strong> <Link to="/source/undead_unleashed">Undead Unleashed pg. 63</Link>, <Link to="/source/heart_of_the_jungle">Heart of the Jungle pg. 8</Link></p>
<AffInfo start type="Contact (fungus)" save="Fort 18" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/dex_damage">Dex damage</Link> and 1d2 Cha damage</>} cure="2 consecutive saves or amputation of infected limb" icon="d" />
</>};
const _eidite_sickness = {title: "Eidite sickness", jsx: <><h2 id="disease-eidite_sickness-eidite-sickness">Eidite sickness</h2>
<p><strong>Sources</strong> <Link to="/source/wardens_of_the_reborn_forge">Wardens of the Reborn Forge pg. 19</Link></p>
<AffInfo start type="Ingested, injury, or touch" save="Fort 20" freq="1/day" onset="1d3 days" eff={<>1d3 <Link to="/rule/wis_damage">Wis damage</Link> and -4 penalty on saving throws against poisons and diseases. Unlike other diseases, constructs are not immune to eidite sickness. After 3 days of being affected by the disease, a construct gains the <Link to="/template/advanced">advanced</Link> simple template and loses any programming or instructions given to it, effectively going berserk, and attacks all living creatures in sight until it is destroyed or the disease is removed.</>} cure2c icon="d" />
<p>The toxic mineral eidite is native to the Karggat Hills, and scholars speculate that it's a result of the foul magic left here by Geb and Nex's ancient wars. Any living creature that touches eidite risks exposure to the substance's highly poisonous toxin.</p>
</>};
const _ergia = {title: "Ergia", jsx: <><h2 id="disease-ergia-ergia">Ergia</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_51_the_hungry_storm">Pathfinder #51: The Hungry Storm pg. 67</Link></p>
<AffInfo start type="Contact" save="Fort 20" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link> and 1d4 Con damage, target must make a second Fort save or 1 point of the damage is drain instead, and a creature that has suffered ability drain glows blue as if limned with <Link to="/spell/faerie_fire">faerie fire</Link></>} cure2c icon="d" />
</>};
const _scarlet_leprosy = {title: "Scarlet Leprosy", jsx: <><h2 id="disease-scarlet_leprosy-scarlet-leprosy">Scarlet Leprosy</h2>
<p><strong>Sources</strong> <Link to="/source/undead_unleashed">Undead Unleashed pg. 15</Link></p>
<AffInfo start type="Contact" save="Fort 20" freq="1/day" onset="1 day" eff={<>1d6-1 (min 0) <Link to="/rule/con_damage">Con damage</Link>, 1d6 Cha damage and 1 Con drain</>} cure2c icon="d" />
</>};
const _vorels_phage = {title: "Vorel's Phage", jsx: <><h2 id="disease-vorels_phage-vorels-phage">Vorel's Phage</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_2_the_skinsaw_murders">Pathfinder #2: The Skinsaw Murders pg. 27</Link></p>
<AffInfo start type="Contact or ingestion" save="Fort 20" freq="1/day" onset="1 day" eff="1d4 Cha and 1d4 Con." cure2c icon="d" />
</>};
const _blightburn_sickness = {title: "Blightburn Sickness", jsx: <><h2 id="disease-blightburn_sickness-blightburn-sickness">Blightburn Sickness</h2>
<p><strong>Sources</strong> <Link to="/source/undead_unleashed">Undead Unleashed pg. 15</Link>, <Link to="/source/mythic_realms">Mythic Realms pg. 21</Link></p>
<AffInfo start type="Contact (see text)" save="Fort 22" freq="1/day" onset="1 day" eff={<>1d6 <Link to="/rule/con_damage">Con damage</Link> and 1d6 Cha damage</>} cure2c extra={<>Contact is automatic when a creature comes within a 60-foot radius of <Link to="/eq-material/blightburn">blightburn</Link>, and can be blocked only by lead sheeting, 1 foot of stone, or a force effect</>} icon="d" />
</>};
const _crypt_fever = {title: "Crypt Fever", jsx: <><h2 id="disease-crypt_fever-crypt-fever">Crypt Fever</h2>
<p><strong>Sources</strong> <Link to="/source/tomb_of_the_iron_medusa">Tomb of the Iron Medusa pg. 13</Link></p>
<AffInfo start type="Contact or inhaled" save="Fort 22" freq="1/day" onset="1 minute" eff={<>1d6 <Link to="/rule/str_damage">Str damage</Link>, 1d6 Cha damage and victim is <Link to="/misc/exhausted">exhausted</Link></>} cure={<>Can only be cured by successfully casting <Link to="/spell/remove_curse">remove curse</Link> and <Link to="/spell/remove_disease">remove disease</Link> within 1 minute of each other.</>} icon="d" />
</>};
const _daemonic_wasting = {title: "Daemonic Wasting", jsx: <><h2 id="disease-daemonic_wasting-daemonic-wasting">Daemonic Wasting</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_54_the_empty_throne">Pathfinder #54: The Empty Throne pg. 28</Link></p>
<AffInfo start type="Contact" save="Fort 23" freq="1/day" onset="1 day" eff={<>1d4 <Link to="/rule/con_damage">Con damage</Link> and 1d4 Cha damage</>} cure2c icon="d" />
</>};
const _rabies = {title: "Rabies", jsx: <><h2 id="disease-rabies-rabies">Rabies</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_rpg_bestiary">Pathfinder RPG Bestiary pg. 87</Link></p>
<AffInfo start type="Injury" save="Fort 14" freq="1/day" onset="2d6 weeks" eff={<>1 <Link to="/rule/con_damage">Con damage</Link> and 1d3 Wis damage (minimum reduction to 1 Wis)</>} cure2c icon="d" />
</>};
const _pallid_gift = {title: "Pallid Gift", jsx: <><h2 id="disease-pallid_gift-pallid-gift">Pallid Gift</h2>
<p><strong>Sources</strong> <Link to="/source/villain_codex">Villain Codex</Link>  </p>
<AffInfo start type="Injury" save="Fort 10 + 1/2 the pallid vector's HD + its Con modifier" freq="1/day" onset="immediate" eff={<>1d6 <Link to="/rule/con_damage">Con damage</Link>, 1d6 Wis damage and the infected creature is <Link to="/misc/fatigued">fatigued</Link>; the ability damage can't be healed, and the fatigue can't be removed while the creature is infected</>} cure2c icon="d" />
<p>This infection is mainly spread by <Link to="/template/pallid_vector">pallid vectors</Link>. A non-humanoid infected creature that dies rises as a <Link to="/template/zombie">plague zombie</Link> in 2d6 hours, and spreads pallid gift instead of zombie rot. A humanoid infected creature that dies rises as an undead according to its HD.</p>
<ScrollContainer id="disease-pallid_gift--table-0"><table>
<thead>
<tr>
<th>Hit Dice</th>
<th>Monster</th>
</tr>
</thead>
<tbody><tr>
<td>1-3</td>
<td>Plague zombie</td>
</tr>
<tr>
<td>4-5</td>
<td className="ion-activatable"><Link to="/monster/ghast">Ghast<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>6-7</td>
<td className="ion-activatable"><Link to="/monster/wight">Wight<IonRippleEffect /></Link></td>
</tr>
<tr>
<td>8+</td>
<td className="ion-activatable"><Link to="/template/vampire">Vampire<IonRippleEffect /></Link></td>
</tr>
</tbody></table></ScrollContainer>
</>};
export default {not_found:_not_found,bonecrusher_dengue:_bonecrusher_dengue,filth_fever:_filth_fever,fungal_flu:_fungal_flu,leprosy:_leprosy,mindfire:_mindfire,cowards_mark:_cowards_mark,ghoul_fever:_ghoul_fever,green_haze:_green_haze,shakes:_shakes,bluespit:_bluespit,brainworms:_brainworms,devil_chills:_devil_chills,sleeping_sickness:_sleeping_sickness,slimy_doom:_slimy_doom,tetanus:_tetanus,glacier_plague:_glacier_plague,greenscale:_greenscale,moxixs_delectation:_moxixs_delectation,red_ache:_red_ache,spellscar_fever:_spellscar_fever,the_tainted_plague:_the_tainted_plague,blinding_sickness:_blinding_sickness,blood_veil:_blood_veil,bonechill:_bonechill,boot_soup:_boot_soup,cackle_fever:_cackle_fever,dvezda_plague:_dvezda_plague,dysentary:_dysentary,final_rest:_final_rest,pulsing_puffs:_pulsing_puffs,the_scales:_the_scales,bubonic_plague:_bubonic_plague,chillbane_fever:_chillbane_fever,firegut:_firegut,shattermind:_shattermind,demon_fever:_demon_fever,demonplague:_demonplague,malaria_jungle_fever:_malaria_jungle_fever,red_drip:_red_drip,eidite_sickness:_eidite_sickness,ergia:_ergia,scarlet_leprosy:_scarlet_leprosy,vorels_phage:_vorels_phage,blightburn_sickness:_blightburn_sickness,crypt_fever:_crypt_fever,daemonic_wasting:_daemonic_wasting,rabies:_rabies,pallid_gift:_pallid_gift}