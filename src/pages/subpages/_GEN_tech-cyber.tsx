import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
const _not_found = {title: "Unknown", jsx: <><h2 id="tech-cyber-not_found-error">Error</h2>
<p>Unable to find the requested cybertech.</p>
</>};
const _cybernetic_legs = {title: "Cybernetic Legs", jsx: <><h2 id="tech-cyber-cybernetic_legs-cybernetic-legs">Cybernetic Legs</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 37</Link><br/><strong>Price</strong> 8,500 gp<br/><strong>Slot</strong> legs; <strong>Weight</strong> 12 lbs.<br/><strong>Install</strong> DC 28; <strong>Implantation</strong> 4</p>
<h3 id="tech-cyber-cybernetic_legs-construction">Construction</h3>
<p><strong>Craft DC</strong> 25; <strong>Cost</strong> 4,250 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A cybernetic leg completely replaces a normal leg, from the hip to the foot. It can take the place of a leg lost to a severing wound. The leg is fully functional and no different in appearance from a regular leg, although <Link to="/tech-cyber/cyberart">cyberart</Link> can be added to the leg at no additional cost. A cybernetic leg does not increase a user's Strength score. If both legs are replaced, they increase the user's base land speed by 10 feet and grant a +5 bonus to CMD against trip attempts and a +5 circumstance bonus on Acrobatics checks.</p>
<p>The listed price, implantation, and install DC are for having two legs installed. A single cybernetic leg costs half the price and half the listed implantation value, but no significant bonus is granted to a creature with only one cybernetic leg. Both legs (or all legs, in the case of multilegged creatures) must be replaced for the above benefits to take effect.</p>
</>};
const _cranial_bomb = {title: "Cranial Bomb", jsx: <><h2 id="tech-cyber-cranial_bomb-cranial-bomb">Cranial Bomb</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 35</Link><br/><strong>Price</strong> 4,500 gp<br/><strong>Slot</strong> head; <strong>Weight</strong> 1/2 lb.<br/><strong>Install</strong> DC 25; <strong>Implantation</strong> 1</p>
<h3 id="tech-cyber-cranial_bomb-construction">Construction</h3>
<p><strong>Craft DC</strong> 20; <strong>Cost</strong> 2,250 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A cranial bomb is a bomb implanted at the base of the skull that explodes when remotely activated by a <Link to="/tech-misc/detonator">detonator's</Link> signal. Though normally implanted, a cranial bomb can also be detonated outside of a body. If detonated while implanted, it deals 2d6 points of bludgeoning damage and 2d6 points of fire damage, and the recipient must succeed at a Fortitude saving throw (DC = 10 + the damage dealt) or be instantly slain. Creatures killed in this manner cannot be revived by <Link to="/spell/breath_of_life">breath of life</Link> or <Link to="/spell/raise_dead">raise dead</Link>. If detonated outside a body, the bomb instead creates a small explosion, dealing the damage detailed above in a 5-foot-radius <Link to="/misc/burst">burst</Link> (Reflex DC 13 half).</p>
</>};
const _cybernetic_eyes = {title: "Cybernetic Eyes", jsx: <><h2 id="tech-cyber-cybernetic_eyes-cybernetic-eyes">Cybernetic Eyes</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 37</Link><br/><strong>Price</strong> 4,000 gp<br/><strong>Slot</strong> eyes; <strong>Weight</strong> 1 lb.<br/><strong>Install</strong> DC 28; <strong>Implantation</strong> 1</p>
<h3 id="tech-cyber-cybernetic_eyes-construction">Construction</h3>
<p><strong>Craft DC</strong> 28; <strong>Cost</strong> 2,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A cybernetic eye can be enhanced by <Link to="/tech-cyber/cyberart">cyberart</Link> for no additional cost, giving it an unusual color or pattern. When a pair of eyes is installed, the user gains a +2 circumstance bonus on Perception checks and a +4 resistance bonus on saving throws against blindness or visual effects. The bonus on Perception checks stacks with circumstance bonuses on Perception checks from other cybernetic sources. A pair of cybernetic eyes can be further enhanced by one <Link to="/tech-misc/veemod_brown">veemod</Link> at a price equal to twice the veemod's normal price.</p>
<p>The listed price, implantation value, and install DC are for having two eyes installed. A single cybernetic eye costs half the price and half the listed implantation value, but a creature must replace all of its eyes to receive the benefits above.</p>
</>};
const _optical_turrets = {title: "Optical Turrets", jsx: <><h2 id="tech-cyber-optical_turrets-optical-turrets">Optical Turrets</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_88_valley_of_the_brain_collectors">Pathfinder #88: Valley of the Brain Collectors pg. 75</Link><br/><strong>Price</strong> 6,000 gp<br/><strong>Slot</strong> eyes; <strong>Weight</strong> &mdash;<br/><strong>Install</strong> DC 30; <strong>Implantation</strong> 2</p>
<h3 id="tech-cyber-optical_turrets-construction">Construction</h3>
<p><strong>Craft DC</strong> 30; <strong>Cost</strong> 3,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>These cybernetic implants replace the recipient's eyes with turrets containing multiple lenses, such as one finds on an optical microscope. In addition to providing normal vision, the implants can rapidly adjust to varying light levels, making the wearer immune to both the <Link to="/misc/blinded">blinded</Link> and <Link to="/misc/dazzled">dazzled</Link> conditions.</p>
<p>If the wearer is willing or helpless, additional lenses can be added (or removed) from the optical turrets with 1 minute's work. Each of the three turrets can hold one eyes slot magic item. These lenses do not count against the wearer's limit of one eyes slot item, but only one function can be active at a time. The wearer can change which of the installed lenses is active (or deactivate them all) as a swift action.</p>
</>};
const _cybernetic_ears = {title: "Cybernetic Ears", jsx: <><h2 id="tech-cyber-cybernetic_ears-cybernetic-ears">Cybernetic Ears</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 37</Link><br/><strong>Price</strong> 4,000 gp<br/><strong>Slot</strong> ears; <strong>Weight</strong> 1 lb.<br/><strong>Install</strong> DC 28; <strong>Implantation</strong> 1</p>
<h3 id="tech-cyber-cybernetic_ears-construction">Construction</h3>
<p><strong>Craft DC</strong> 28; <strong>Cost</strong> 2,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A cybernetic ear can be enhanced by <Link to="/tech-cyber/cyberart">cyberart</Link> at no additional cost, giving it an unusual color or shape. When a pair of ears is installed, the user gains a +2 circumstance bonus on Perception checks. This bonus stacks with circumstance bonuses on Perception checks from other cybernetic senses. Cybernetic ears grant a +4 resistance bonus on all saving throws against sonic effects.</p>
<p>The listed price, implantation value, and install DC are for having both ears installed. A single cybernetic ear costs half the price and half the listed implantation value, but a creature must replace all of its ears to receive the benefits above.</p>
</>};
const _skillslot = {title: "Skillslot", jsx: <><h2 id="tech-cyber-skillslot-skillslot">Skillslot</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 38</Link><br/><strong>Price</strong> 2,000 gp<br/><strong>Slot</strong> brain; <strong>Weight</strong> 1 lb.<br/><strong>Install</strong> DC 30; <strong>Implantation</strong> 1</p>
<h3 id="tech-cyber-skillslot-construction">Construction</h3>
<p><strong>Craft DC</strong> 28; <strong>Cost</strong> 1,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A skillslot is implanted into the target's brain, leaving a small port at the base of the skull. This port is covered with a flap of skin when not in use. Once installed, a skillslot has no effect until a <Link to="/tech-misc/skillchip_mark_i">skillchip</Link> is inserted into the port. An inserted skillchip enhances the user's ability in the skill encoded on the chip; the magnitude to which the skill is enhanced depends on the power of the skillchip. This does not grant ranks in the associated skill. It takes 10 minutes for a skillchip to adjust itself to a new skillslot; during this time, the user takes a -2 penalty on all skill checks as distracting sensations flood his mind. When a skillchip is removed, its benefits end immediately, but the wearer suffers no ill effects.</p>
</>};
const _frenzychip = {title: "Frenzychip", jsx: <><h2 id="tech-cyber-frenzychip-frenzychip">Frenzychip</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 37</Link><br/><strong>Price</strong> 36,400 gp<br/><strong>Slot</strong> brain; <strong>Weight</strong> &mdash;<br/><strong>Install</strong> DC 32; <strong>Implantation</strong> 1</p>
<h3 id="tech-cyber-frenzychip-construction">Construction</h3>
<p><strong>Craft DC</strong> 30; <strong>Cost</strong> 18,200 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A frenzychip is installed into a creature's brain. Successful implantation leaves no trace of the operation. Once in place, a frenzychip patches directly in to the patient's motor skills and emotions. As long as she's not <Link to="/misc/fatigued">fatigued</Link> or <Link to="/misc/exhausted">exhausted</Link>, the user of a frenzychip can activate it as a swift action. While active, it grants a +2 morale bonus to Strength and Dexterity, a +1 morale bonus on Reflex saving throws, and a -2 penalty on Will saving throws. The user may use a frenzychip for up to 10 rounds per day, though the rounds need not be consecutive. Once the effects end, she becomes fatigued for twice as many rounds as she was under the frenzychip's effects.</p>
</>};
const _dermal_plating_mark_i = {title: "Dermal Plating (mark I)", jsx: <><h2 id="tech-cyber-dermal_plating_mark_i-dermal-plating-mark-i">Dermal Plating (Mark I)</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 37</Link><br/><strong>Price</strong> 4,000 gp (Mark I), 16,000 gp (Mark II), 36,000 gp (Mark III), 64,000 gp (Mark IV), 100,000 gp (Mark V)<br/><strong>Slot</strong> body; <strong>Weight</strong> 5 lbs. (Mark I), 5 lbs. (Mark II), 5 lbs. (Mark III), 5 lbs. (Mark IV), 5 lbs. (Mark V)<br/><strong>Install</strong> DC 24 (Mark I), DC 26 (Mark II), DC 28 (Mark III), DC 30 (Mark IV), DC 32 (Mark V)<br/><strong>Implantation</strong> 2 (Mark I), 4 (Mark II), 4 (Mark III), 8 (Mark IV), 10 (Mark V)</p>
<h3 id="tech-cyber-dermal_plating_mark_i-construction">Construction</h3>
<p><strong>Craft DC</strong> 24 (Mark I), DC 25 (Mark II), DC 26 (Mark III), DC 27 (Mark IV), DC 28 (Mark V); <strong>Cost</strong> 2,000 gp (Mark I), 8,000 gp (Mark II), 18,000 gp (Mark III), 32,000 gp (Mark IV), 50,000 gp (Mark V)<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>Dermal plating consists of sheets of highly resistant bioplastics anchored directly onto the patient's skin. These armored plates grant an enhancement bonus to natural armor; this bonus influences other elements of the dermal plating, as detailed below.</p>
<ScrollContainer id="tech-cyber-dermal_plating_mark_i--table-0"><table>
<thead>
<tr>
<th>Plating</th>
<th>Enhancement</th>
<th>Implantation</th>
<th>Install</th>
</tr>
</thead>
<tbody><tr>
<td>Mark I</td>
<td>+1</td>
<td>2</td>
<td>DC 24</td>
</tr>
<tr>
<td>Mark II</td>
<td>+2</td>
<td>4</td>
<td>DC 26</td>
</tr>
<tr>
<td>Mark III</td>
<td>+3</td>
<td>4</td>
<td>DC 28</td>
</tr>
<tr>
<td>Mark IV</td>
<td>+4</td>
<td>8</td>
<td>DC 30</td>
</tr>
<tr>
<td>Mark V</td>
<td>+5</td>
<td>10</td>
<td>DC 32</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _cyberfiber_muscles_mark_i = {title: "Cyberfiber Muscles (mark I)", jsx: <><h2 id="tech-cyber-cyberfiber_muscles_mark_i-cyberfiber-muscles-mark-i">Cyberfiber Muscles (Mark I)</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 36</Link><br/><strong>Price</strong> 8,000 gp (Mark I), 32,000 gp (Mark II), 72,000 gp (Mark III)<br/><strong>Slot</strong> body; <strong>Weight</strong> 10 lbs. (Mark I), 10 lbs. (Mark II), 10 lbs. (Mark III)<br/><strong>Install</strong> DC 24 (Mark I), DC 28 (Mark II), DC 36 (Mark III)<br/><strong>Implantation</strong> 2 (Mark I), 4 (Mark II), 8 (Mark III)</p>
<h3 id="tech-cyber-cyberfiber_muscles_mark_i-construction">Construction</h3>
<p><strong>Craft DC</strong> 24 (Mark I), DC 28 (Mark II), DC 32 (Mark III); <strong>Cost</strong> 4,000 gp (Mark I), 16,000 gp (Mark II), 36,000 gp (Mark III)<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>Cyberfiber muscles are powerful synthetic muscles that augment but do not replace existing muscle mass in a creature. Once installed, cyberfiber muscles grant an enhancement bonus to Strength. This enhancement bonus alters price, implantation value, install DCs, and Craft DCs as listed below.</p>
<ScrollContainer id="tech-cyber-cyberfiber_muscles_mark_i--table-0"><table>
<thead>
<tr>
<th>Cyberfiber</th>
<th>Enhancement</th>
<th>Implantation</th>
<th>Install</th>
</tr>
</thead>
<tbody><tr>
<td>Mark I</td>
<td>+2 Str</td>
<td>2</td>
<td>DC 24</td>
</tr>
<tr>
<td>Mark II</td>
<td>+4 Str</td>
<td>4</td>
<td>DC 28</td>
</tr>
<tr>
<td>Mark III</td>
<td>+6 Str</td>
<td>8</td>
<td>DC 36</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _thoracic_nanite_chamber_mark_i = {title: "Thoracic Nanite Chamber (mark I)", jsx: <><h2 id="tech-cyber-thoracic_nanite_chamber_mark_i-thoracic-nanite-chamber-mark-i">Thoracic Nanite Chamber (Mark I)</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 38</Link><br/><strong>Price</strong> 8,000 gp (Mark I), 32,000 gp (Mark II), 72,000 gp (Mark III)<br/><strong>Slot</strong> body; <strong>Weight</strong> 5 lbs. (Mark I), 5 lbs. (Mark II), 5 lbs. (Mark III)<br/><strong>Install</strong> DC 24 (Mark I), DC 28 (Mark II), DC 36 (Mark III)<br/><strong>Implantation</strong> 2 (Mark I), 4 (Mark II), 8 (Mark III)</p>
<h3 id="tech-cyber-thoracic_nanite_chamber_mark_i-construction">Construction</h3>
<p><strong>Craft DC</strong> 24 (Mark I), DC 28 (Mark II), DC 32 (Mark III); <strong>Cost</strong> 4,000 gp (Mark I), 16,000 gp (Mark II), 36,000 gp (Mark III)<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A thoracic nanite chamber augments the vital organs within a creature's chest, particularly its heart, lungs, and pulmonary system. Once installed, a thoracic nanite chamber grants an enhancement bonus to Constitution. This enhancement bonus alters the implant's price, implantation value, install DCs, and Craft DCs as listed below.</p>
<ScrollContainer id="tech-cyber-thoracic_nanite_chamber_mark_i--table-0"><table>
<thead>
<tr>
<th>Chamber</th>
<th>Enhancement</th>
<th>Implantation</th>
<th>Install</th>
</tr>
</thead>
<tbody><tr>
<td>Mark I</td>
<td>+2 Con</td>
<td>2</td>
<td>DC 24</td>
</tr>
<tr>
<td>Mark II</td>
<td>+4 Con</td>
<td>4</td>
<td>DC 28</td>
</tr>
<tr>
<td>Mark III</td>
<td>+6 Con</td>
<td>8</td>
<td>DC 36</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _wirejack_tendons_mark_i = {title: "Wirejack Tendons (mark I)", jsx: <><h2 id="tech-cyber-wirejack_tendons_mark_i-wirejack-tendons-mark-i">Wirejack Tendons (Mark I)</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 38</Link><br/><strong>Price</strong> 8,000 gp (Mark I), 32,000 gp (Mark II), 72,000 gp (Mark III)<br/><strong>Slot</strong> body; <strong>Weight</strong> 10 lbs. (Mark I), 10 lbs. (Mark II), 10 lbs. (Mark III)<br/><strong>Install</strong> DC 24 (Mark I), DC 28 (Mark II), DC 36 (Mark III)<br/><strong>Implantation</strong> 2 (Mark I), 4 (Mark II), 8 (Mark III)</p>
<h3 id="tech-cyber-wirejack_tendons_mark_i-construction">Construction</h3>
<p><strong>Craft DC</strong> 24 (Mark I), DC 28 (Mark II), DC 32 (Mark III); <strong>Cost</strong> 4,000 gp (Mark I), 16,000 gp (Mark II), 36,000 gp (Mark III)<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>Wirejack tendons not only strengthen and enhance existing reflexes, but also enhance the transmission of nerve impulses to surrounding musculature. Once installed, wirejack tendons grant an enhancement bonus to Dexterity. This enhancement bonus alters the price, implantation values, install DCs, and Craft DCs of the implant as listed below.</p>
<ScrollContainer id="tech-cyber-wirejack_tendons_mark_i--table-0"><table>
<thead>
<tr>
<th>Wirejack</th>
<th>Enhancement</th>
<th>Implantation</th>
<th>Install</th>
</tr>
</thead>
<tbody><tr>
<td>Mark I</td>
<td>+2 Dex</td>
<td>2</td>
<td>DC 24</td>
</tr>
<tr>
<td>Mark II</td>
<td>+4 Dex</td>
<td>4</td>
<td>DC 28</td>
</tr>
<tr>
<td>Mark III</td>
<td>+6 Dex</td>
<td>8</td>
<td>DC 36</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _biofilter = {title: "Biofilter", jsx: <><h2 id="tech-cyber-biofilter-biofilter">Biofilter</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 35</Link><br/><strong>Price</strong> 16,000 gp<br/><strong>Slot</strong> body; <strong>Weight</strong> 2 lbs.<br/><strong>Install</strong> DC 25; <strong>Implantation</strong> 3</p>
<h3 id="tech-cyber-biofilter-construction">Construction</h3>
<p><strong>Craft DC</strong> 25; <strong>Cost</strong> 8,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A nanite matrix is installed in the kidneys and liver to help purge the body of toxins. A biofilter provides a +4 competence bonus on saving throws against disease and poison. In addition, when the user attempts such a saving throw, she rolls twice and takes the higher result.</p>
</>};
const _cybernetic_arm = {title: "Cybernetic Arm", jsx: <><h2 id="tech-cyber-cybernetic_arm-cybernetic-arm">Cybernetic Arm</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 36</Link><br/><strong>Price</strong> 4,750 gp<br/><strong>Slot</strong> arm; <strong>Weight</strong> 9 lbs.<br/><strong>Install</strong> DC 28; <strong>Implantation</strong> 2</p>
<h3 id="tech-cyber-cybernetic_arm-construction">Construction</h3>
<p><strong>Craft DC</strong> 25; <strong>Cost</strong> 2,375 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>A cybernetic arm completely replaces a normal arm, from the shoulder to the hand. It can take the place of an arm lost to a severing wound. The arm is fully functional and no different in appearance from a regular arm, although <Link to="/tech-cyber/cyberart">cyberart</Link> can be added to the arm at no additional cost. A cybernetic arm does not increase a user's Strength score. If a creature has two cybernetic arms, it can lift and carry double the normal maximum weight for that creature's Strength and size, and it gains a +5 circumstance bonus on Climb checks. A character who wields a one-handed or light weapon with a cybernetic arm gains a +5 bonus to CMD against <Link to="/rule/disarm">disarm</Link> attempts; two cybernetic arms do not increase this bonus, but do allow the bonus to apply to two-handed weapons.</p>
</>};
const _implanted_weaponry = {title: "Implanted Weaponry", jsx: <><h2 id="tech-cyber-implanted_weaponry-implanted-weaponry">Implanted Weaponry</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 38</Link><br/><strong>Price</strong> 10,000 gp<br/><strong>Slot</strong> arm; <strong>Weight</strong> 1 lb.<br/><strong>Install</strong> DC 26; <strong>Implantation</strong> 2</p>
<h3 id="tech-cyber-implanted_weaponry-construction">Construction</h3>
<p><strong>Craft DC</strong> 25; <strong>Cost</strong> 5,000 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link>, weapon to be implanted</p>
<p>A single light melee weapon or one-handed firearm can be implanted in an arm or cybernetic arm. Melee weapons extend or retract as a swift action. Ranged weapons fire through a port on the palm or back of the wrist. Either type of weapon has statistics identical to its normal form. Firearms reload through a breach in the arm, increasing the reloading time of the weapon to a full-round action, or doubling reloading times that already take a full round or longer. Implanted weapons are well concealed; detecting one requires a thorough search (Perception DC 25). Implanted weaponry can be damaged or destroyed by sundering, but cannot be disarmed. Weaponry installed in a cybernetic arm does not count against a creature's implantation limit. The cost, price, and weight of the weapon to be implanted are added to the cost, price, and weight listed in this stat block.</p>
</>};
const _cyberart = {title: "Cyberart", jsx: <><h2 id="tech-cyber-cyberart-cyberart">Cyberart</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 36</Link><br/><strong>Price</strong> 100 gp<br/><strong>Slot</strong> none; <strong>Weight</strong> 1 lb.<br/><strong>Install</strong> DC 20; <strong>Implantation</strong> 0</p>
<h3 id="tech-cyber-cyberart-construction">Construction</h3>
<p><strong>Craft DC</strong> 20; <strong>Cost</strong> 50 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>Cyberart is the least invasive of all cybertech. This implant is similar in appearance to a tattoo, except that it can glow softly if desired, providing illumination equal to that provided by a <Link to="/eq-misc/candle">candle</Link>. Some cyberart is animated, providing a short looping scene that replays over and over. Cyberart is installed in a body with a small metallic stylus that injects low-grade nanites into a body part; the quality of the art relies on the installer's Craft (painting or tattoo) check.</p>
</>};
const _implant_mesh = {title: "Implant Mesh", jsx: <><h2 id="tech-cyber-implant_mesh-implant-mesh">Implant Mesh</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_89_palace_of_fallen_stars">Pathfinder #89: Palace of Fallen Stars pg. 63</Link><br/><strong>Price</strong> 5,000 gp<br/><strong>Slot</strong> none; <strong>Weight</strong> &mdash;<br/><strong>Install</strong> DC 30; <strong>Implantation</strong> 2</p>
<h3 id="tech-cyber-implant_mesh-construction">Construction</h3>
<p><strong>Craft DC</strong> 34; <strong>Cost</strong> 2,500 gp<br/><Link to="/feat/craft_cybernetics">Craft Cybernetics</Link>, <Link to="/rule/crafting_laboratories">cybernetics lab</Link></p>
<p>An implant mesh is a cybernetic augmentation that enhanced other cybernetic implants, notably those that heighten their wearers' physical abilities. If used to enhance <Link to="/tech-cyber/cyberfiber_muscles_mark_i">cyberfiber muscles</Link>, a <Link to="/tech-cyber/thoracic_nanite_chamber_mark_i">thoracic nanite chamber</Link>, or <Link to="/tech-cyber/wirejack_tendons_mark_i">wirejack tendons</Link>, an implant mesh must be installed on that piece of cyberware before the item is implanted in a body. If the check to implant the mesh into the other cybernetic item fails, the implant mesh is destroyed.</p>
<p>Once a piece of cybertech has been augmented by an implant mesh, that cybertech implant no longer counts as taking up a body slot for the purposes of installing other cybernetic devices into that slot. Enhancing a cybernetic device with an implant mesh doesn't alter the device's install DC, but does increase its implantation value by 2. For example, a mark II thoracic nanite chamber enhanced with an implant mesh could be implanted in a creature that already has cyberfiber muscles or dermal plating, but the augmented thoracic nanite chamber's implantation value increases to 6.</p>
</>};
const _dermal_plating_mark_ii = {..._dermal_plating_mark_i, title: "Dermal Plating (mark II)"};
const _dermal_plating_mark_iii = {..._dermal_plating_mark_i, title: "Dermal Plating (mark III)"};
const _dermal_plating_mark_iv = {..._dermal_plating_mark_i, title: "Dermal Plating (mark IV)"};
const _dermal_plating_mark_v = {..._dermal_plating_mark_i, title: "Dermal Plating (mark V)"};
const _cyberfiber_muscles_mark_ii = {..._cyberfiber_muscles_mark_i, title: "Cyberfiber Muscles (mark II)"};
const _cyberfiber_muscles_mark_iii = {..._cyberfiber_muscles_mark_i, title: "Cyberfiber Muscles (mark III)"};
const _thoracic_nanite_chamber_mark_ii = {..._thoracic_nanite_chamber_mark_i, title: "Thoracic Nanite Chamber (mark II)"};
const _thoracic_nanite_chamber_mark_iii = {..._thoracic_nanite_chamber_mark_i, title: "Thoracic Nanite Chamber (mark III)"};
const _wirejack_tendons_mark_ii = {..._wirejack_tendons_mark_i, title: "Wirejack Tendons (mark II)"};
const _wirejack_tendons_mark_iii = {..._wirejack_tendons_mark_i, title: "Wirejack Tendons (mark III)"};
export default {not_found:_not_found,cybernetic_legs:_cybernetic_legs,cranial_bomb:_cranial_bomb,cybernetic_eyes:_cybernetic_eyes,optical_turrets:_optical_turrets,cybernetic_ears:_cybernetic_ears,skillslot:_skillslot,frenzychip:_frenzychip,dermal_plating_mark_i:_dermal_plating_mark_i,cyberfiber_muscles_mark_i:_cyberfiber_muscles_mark_i,thoracic_nanite_chamber_mark_i:_thoracic_nanite_chamber_mark_i,wirejack_tendons_mark_i:_wirejack_tendons_mark_i,biofilter:_biofilter,cybernetic_arm:_cybernetic_arm,implanted_weaponry:_implanted_weaponry,cyberart:_cyberart,implant_mesh:_implant_mesh,dermal_plating_mark_ii:_dermal_plating_mark_ii,dermal_plating_mark_iii:_dermal_plating_mark_iii,dermal_plating_mark_iv:_dermal_plating_mark_iv,dermal_plating_mark_v:_dermal_plating_mark_v,cyberfiber_muscles_mark_ii:_cyberfiber_muscles_mark_ii,cyberfiber_muscles_mark_iii:_cyberfiber_muscles_mark_iii,thoracic_nanite_chamber_mark_ii:_thoracic_nanite_chamber_mark_ii,thoracic_nanite_chamber_mark_iii:_thoracic_nanite_chamber_mark_iii,wirejack_tendons_mark_ii:_wirejack_tendons_mark_ii,wirejack_tendons_mark_iii:_wirejack_tendons_mark_iii}