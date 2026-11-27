import Link from '../../components/Link';
import ScrollContainer from '../../components/ScrollContainer';
import Tabular from '../../components/Tabular';
import Icons from '../../components/Icons';
const _not_found = {title: "Unknown", jsx: <><h2 id="tech-armor-not_found-error">Error</h2>
<p>Unable to find the requested tech armor.</p>
</>};
const _heavy_weapon_harness = {title: "Heavy weapon harness", jsx: <><h2 id="tech-armor-heavy_weapon_harness-heavy-weapon-harness">Heavy weapon harness</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="9000" t="Light" w="10" b="1" d="6" c="1" f="5" s="30" z="20" />
<p>Known also as an "H-belt," a <em>heavy weapon harness</em> is an elaborate network of plastic and metal struts and straps.</p>
<p><Icons id="tech-armor-heavy_weapon_harness-warning-icons" wrapper="prefixIcon" list={["warning"]} /> The <em>harness</em> can be worn in conjunction with any other suit of armor - the armor bonus granted by the <em>heavy weapon harness</em> does not stack with that granted by other suits of armor, but the armor check penalties and spell failure percentages do.</p>
<p><Icons id="tech-armor-heavy_weapon_harness-boost-icons" wrapper="prefixIcon" list={["boost"]} /> A <em>heavy weapon harness</em> provides its wearer with additional stability and support, allowing the user to wield heavy weapons as if they were regular firearms, using the <Link to="/feat/exotic_weapon_proficiency">Exotic Weapon</Link> (firearms) feat for proficiency rather than Exotic Weapon (heavy weaponry). A character with Exotic Weapon (heavy weaponry) who wears an H-belt finds the use of heavy weapons even easier, and gains a +1 circumstance bonus on all attack rolls made with harnessed heavy weapons.</p>
<p><Icons id="tech-armor-heavy_weapon_harness-info-icons" wrapper="prefixIcon" list={["info"]} /> Unlike most technological armors, a <em>heavy weapon harness</em> does not use power - its components are purely mechanical.</p>
<Tabular format="techcraft" c="27" p="4500" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _scatterlight_suit_brown = {title: "Scatterlight Suit (brown)", jsx: <><h2 id="tech-armor-scatterlight_suit_brown-scatterlight-suit">Scatterlight suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="Varies" v="v" t="Light" w="5" b="+1 (and see text)" d="8" c="1" f="5" s="30" z="20" y="24" u="1 charge/hour" />
<p>A <em>scatterlight suit</em> is a tight, form-fitting suit of highly reflective polymers and synthetic metal fibers. It's designed to reflect beam weapon attacks, and provides only minimal protection against physical damage.</p>
<p><Icons id="tech-armor-scatterlight_suit_brown-def-info-icons" wrapper="prefixIcon" list={["def","info"]} /> Activating a <em>scatterlight suit</em> is a <strong className="hl">standard action</strong>; once activated, the suit diffuses and blurs light reflected from its surface, making the wearer appear hazy and indistinct. While active, a <em>scatterlight suit</em> increases the wearer's touch AC by a variable amount - this bonus is an armor bonus, but does not increase the wearer's normal or flat-footed AC beyond the <em>scatterlight suit's</em> baseline armor bonus of +1. This bonus to touch AC only applies to attacks made by beam weapons and rays - it does not provide additional protection to other touch attacks.</p>
<ScrollContainer id="tech-armor-scatterlight_suit_brown--table-0"><table>
<thead>
<tr>
<th>Scatterlight Suit Color</th>
<th>Touch AC Bonus</th>
<th>Cost</th>
<th>Craft DC</th>
<th>Craft Cost</th>
</tr>
</thead>
<tbody><tr>
<td>brown</td>
<td>+1</td>
<td>100gp</td>
<td>24</td>
<td>50gp</td>
</tr>
<tr>
<td>black</td>
<td>+2</td>
<td>150gp</td>
<td>25</td>
<td>75gp</td>
</tr>
<tr>
<td>white</td>
<td>+3</td>
<td>200gp</td>
<td>26</td>
<td>100gp</td>
</tr>
<tr>
<td>gray</td>
<td>+4</td>
<td>700gp</td>
<td>27</td>
<td>350gp</td>
</tr>
<tr>
<td>green</td>
<td>+5</td>
<td>1,000gp</td>
<td>28</td>
<td>500gp</td>
</tr>
<tr>
<td>red</td>
<td>+6</td>
<td>1,400gp</td>
<td>29</td>
<td>700gp</td>
</tr>
<tr>
<td>blue</td>
<td>+7</td>
<td>3,600gp</td>
<td>30</td>
<td>1,800gp</td>
</tr>
<tr>
<td>orange</td>
<td>+8</td>
<td>6,000gp</td>
<td>31</td>
<td>3,000gp</td>
</tr>
<tr>
<td>prismatic</td>
<td>+9</td>
<td>12,00gp</td>
<td>32</td>
<td>6,000gp</td>
</tr>
</tbody></table></ScrollContainer>
<Tabular format="techcraft" c="(see above)" p="(see above)" v="v" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _chameleon_suit = {title: "Chameleon suit", jsx: <><h2 id="tech-armor-chameleon_suit-chameleon-suit">Chameleon suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="15000" t="Light" w="5" b="2" d="6" c="0" f="10" s="30" z="20" y="50" u="1 charge/minute" />
<p>This suit of light woven-fiber armor covers the wearer from ankle to wrist and includes a hooded cowl. Its surface consists of millions of tiny, scale-like lenses and LED screens.</p>
<p><Icons id="tech-armor-chameleon_suit-def-icons" wrapper="prefixIcon" list={["def"]} /> When powered on, a <em>chameleon suit</em> analyzes its environment and generates digital camouflage. The wearer gains a +10 competence bonus on <Link to="/skill/stealth">Stealth</Link> checks and can <em>hide in plain sight</em> (as a <Link to="/class/ranger">ranger</Link> in his <Link to="/ability/favored_terrain">favored terrain</Link>).</p>
<Tabular format="techcraft" c="29" p="7500" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _neraplast_armor = {title: "Neraplast armor", jsx: <><h2 id="tech-armor-neraplast_armor-neraplast-armor">Neraplast armor</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_85_fires_of_creation">Pathfinder #85: Fires of Creation pg. 60</Link></p>
<Tabular format="techarmor" p="1200" t="Light" w="5" b="2" d="8" c="0" f="5" s="30" z="20" y="24" u="1 charge" />
<p>This lightweight, form-fitting bodysuit features a variety of pockets, straps, and a built-in interface for automatically adjusting the various colors and patterns on its fabric.</p>
<p>Selecting a color or pattern is a <strong className="hl">full-round action</strong> that consumes 1 charge and provokes an attack of opportunity.</p>
<p><Icons id="tech-armor-neraplast_armor-def-info-icons" wrapper="prefixIcon" list={["def","info"]} /> Capable of cycling through dozens of hues, the armor can even be used to adopt sophisticated camouflage patterns that grant a +3 competence bonus on <Link to="/skill/stealth">Stealth</Link> checks. Whenever the wearer enters a terrain of significantly different coloration and background patterns, the armor must be recalibrated to its current area to maintain this bonus.</p>
<Tabular format="techcraft" c="22" p="600" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">production lab</Link></>} />
</>};
const _deep_diving_suit = {title: "Deep diving suit", jsx: <><h2 id="tech-armor-deep_diving_suit-deep-diving-suit">Deep diving suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="26000" t="Light" w="20" b="3" d="5" c="2" f="30" s="30" z="20" y="25" u="1 charge/hour" />
<p>A <em>deep diving suit</em> is a body-tight mesh of reinforced rubber and polymer fitted with scrubbers that can draw and purify oxygen from its surrounding environment, extracting oxygen from water as easily as from air.</p>
<p><Icons id="tech-armor-deep_diving_suit-def-icons" wrapper="prefixIcon" list={["def"]} /> The suit's helmet is close-fitting but offers excellent visibility, while the suit's fabric itself can flex while still remaining supportive against pressure - depths are treated as being 1,000 feet shallower than their actual depth for the purposes of determining <Link to="/rule/pressure_damage">pressure damage</Link> from deep water. The wearer is also immune to inhaled toxins and can breathe underwater with ease - the suit does not allow breathing in a vacuum.</p>
<p><Icons id="tech-armor-deep_diving_suit-power-boost-down-icons" wrapper="prefixIcon" list={["power","boost","down"]} /> A <em>diving suit's</em> hands and feet can activate webbing, long fins, and flippers, which the wearer can extend (and deactivate) as a <strong className="hl">move action</strong>. While in this mode, the wearer of the suit gains a swim speed of 20 feet and a +8 bonus on <Link to="/skill/swim">Swim</Link> checks, but the armor check penalty of the suit doubles to -4 and its land speed reduces to 20 feet (or 15 feet for slower characters, as appropriate). Swim checks are never penalized by a <em>diving suit's</em> armor check penalty.</p>
<Tabular format="techcraft" c="26" p="13000" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">production lab</Link></>} />
</>};
const _inssuit = {title: "Inssuit", jsx: <><h2 id="tech-armor-inssuit-inssuit">Inssuit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="19250" t="Light" w="10" b="3" d="6" c="0" f="15" s="30" z="20" />
<p>This padded jumpsuit is made of resilient polymers interwoven with superconducting thread. It provides modest protection from conventional and energy weapons.</p>
<p><Icons id="tech-armor-inssuit-def-icons" wrapper="prefixIcon" list={["def"]} /> The wearer applies the armor's AC bonus (including enhancement bonus, if any) against touch and ranged touch attacks that deal energy damage. In addition, the <em>inssuit</em> provides <Link to="/umr/resist">resist</Link> energy 5 against cold, acid, and electricity.</p>
<Tabular format="techcraft" c="24" p="9625" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _smart_armor_compact_form = {title: "Smart Armor (compact form)", jsx: <><h2 id="tech-armor-smart_armor_compact_form-smart-armor">Smart armor</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<h3 id="tech-armor-smart_armor_compact_form-compact-form">Compact form</h3>
<Tabular format="techarmor" p="16500" t="Light" w="20" b="4" d="4" c="2" f="25" s="30" z="20" />
<h3 id="tech-armor-smart_armor_compact_form-expanded-form">Expanded form</h3>
<Tabular format="techarmor" p="16500" t="Heavy" w="20" b="8" d="1" c="5" f="35" s="20" z="15" y="60" u="1 charge/10 minutes" />
<p>While inactive, <em>smart armor</em> resembles a <Link to="/eq-armor/breastplate">breastplate</Link> of <Link to="/eq-material/adamantine">adamantine</Link> scales, which doesn't seem out of place among the metal armor of Golarion, except for its the alien aesthetics of its Androffan design.</p>
<p><Icons id="tech-armor-smart_armor_compact_form-def-icons" wrapper="prefixIcon" list={["def"]} /> When activated as an <strong className="hl">immediate action</strong>, <em>smart armor</em> expands to cover the wearer's legs and limbs, and a built-in magnetic generator hardens the armor into a rigid, plate-like form. When in this form, it uses the statistics of <em>smart armor (expanded form).</em> It can be collapsed back to breastplate form with a <strong className="hl">move action</strong>, and automatically retracts when it loses power.</p>
<p><Icons id="tech-armor-smart_armor_compact_form-def-icons" wrapper="prefixIcon" list={["def"]} /> In either form, <em>smart armor</em> provides DR 2/- due to its adamantine construction. <em>Smart armor</em> is considered <Link to="/rule/masterwork_armor">masterwork armor</Link>.</p>
<Tabular format="techcraft" c="28" p="1400" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _gravity_suit = {title: "Gravity suit", jsx: <><h2 id="tech-armor-gravity_suit-gravity-suit">Gravity suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="40000" t="Light" w="5" b="Varies" d="8" c="0" f="5" s="30" z="20" y="24" u="1 charge/hour" />
<p>A <em>gravity suit</em> consists of several black, flexible straps attached to a framework of delicate servos, thin plates, and small strips of black polymer plastic - this give it an appearance of being ineffective armor.</p>
<p><Icons id="tech-armor-gravity_suit-def-icons" wrapper="prefixIcon" list={["def"]} /> The armor bonus provided by an unpowered <em>gravity suit</em> is +0, but when activated, the suit generates a field of gravitons around the wearer that grants a +5 armor bonus (this bonus is a force effect). This bonus is doubled when it applies to the wearer's CMD score against <Link to="/rule/bull_rush">bull rush</Link>, <Link to="/rule/overrun">overrun</Link>, and <Link to="/rule/trip">trip</Link> attempts, and slows any fall as if the wearer were under the effect of a <Link to="/spell/feather_fall">feather fall</Link> spell.</p>
<p><Icons id="tech-armor-gravity_suit-power-icons" wrapper="prefixIcon" list={["power"]} /> At the cost of 1 additional charge per minute, the wearer of a <em>gravity suit</em> can fly at a speed of 60 ft. (average). Activating this ability is a <strong className="hl">standard action</strong>.</p>
<Tabular format="techcraft" c="33" p="20000" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">graviton lab</Link></>} />
</>};
const _panic_suit = {title: "Panic suit", jsx: <><h2 id="tech-armor-panic_suit-panic-suit">Panic suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="2000" t="Medium" w="2" b="2" d="2" c="4" f="50" s="20" z="15" y="10" u="1 charge/hour, disposable" />
<p>When not being worn, a <em>panic suit</em> is a fist-sized plastic sphere. When activated, it envelops the creature holding it in a full-body protective suit.</p>
<p><Icons id="tech-armor-panic_suit-def-icons" wrapper="prefixIcon" list={["def"]} /> While activated, it provides immunity to low <Link to="/rule/radiation">radiation</Link> and <Link to="/umr/resistance">resistance</Link> 5 against all forms of energy except sonic damage. Its air filters grant a +4 bonus on saving throws against inhaled poisons and diseases.</p>
<p>A <em>panic suit</em> is a single-use item. When its charges run out or its wearer deactivates it, it falls apart into useless fragments.</p>
<Tabular format="techcraft" c="30" p="1000" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _hev_suit = {title: "HEV suit", jsx: <><h2 id="tech-armor-hev_suit-hev-suit">HEV suit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="61000" t="Medium" w="20" b="4" d="3" c="4" f="40" s="20" z="15" y="25" u="1 charge/hour" />
<p>Short for "hazardous environment," an <em>HEV suit</em> provides protection from <Link to="/rule/radiation">radiation</Link>, disease, poisonous gas, cold, heat, and similar environmental dangers. The suit needs a power supply to work - while deactivated, none of the following abilities function at all.</p>
<p><Icons id="tech-armor-hev_suit-def-icons" wrapper="prefixIcon" list={["def"]} /> While powered, the suit provides immunity to inhaled poisons and diseases, and provides resistance 10 against all forms of energy except for sonic damage. An <em>HEV suit</em> completely protects against low radiation, and reduces the effects of medium radiation to low radiation, but it offers no protection against high or severe radiation.</p>
<p><Icons id="tech-armor-hev_suit-aid-warning-icons" wrapper="prefixIcon" list={["aid","warning"]} /> The suit's self-repairing polymer resin fabric automatically seals secondary punctures or tears created by physical attacks to the wearer and damage dealt specifically against the suit. It repairs damage at the rate of 2d6 points of damage per charge consumed. While repairing damage in this manner, the suit's other protective functions listed above are any taken offline.</p>
<p>An <em>HEV suit</em> has <Link to="/rule/hardness">hardness</Link> 2 and 30 hit points.</p>
<Tabular format="techcraft" c="28" p="30500" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">production lab</Link></>} />
</>};
const _nanite_ablative_armor = {title: "Nanite ablative armor", jsx: <><h2 id="tech-armor-nanite_ablative_armor-nanite-ablative-armor">Nanite ablative armor</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="10000" t="Medium" w="35" b="4" d="4" c="3" f="20" s="20" z="15" y="24" u="1 charge/hour" />
<p>This suit of armor consists of several layers of scaly mesh over a thick, cloth-like polymer weave. When activated, a suit of <em>nanite ablative armor</em> grants the wearer additional protection against nanites, through the use of imperceptible magnetic fields that repel the microscopic robots.</p>
<p><Icons id="tech-armor-nanite_ablative_armor-def-icons" wrapper="prefixIcon" list={["def"]} /> An active suit of <em>nanite ablative armor</em> grants its armor bonus (including any enhancement bonuses) to the wearer's touch AC against nanites. The wearer gains a +4 resistance bonus on saving throws made against nanite-related effects delivered through means other than touch attacks.</p>
<Tabular format="techcraft" c="30" p="5000" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">graviton lab</Link></>} />
</>};
const _spacesuit = {title: "Spacesuit", jsx: <><h2 id="tech-armor-spacesuit-spacesuit">Spacesuit</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="90000" t="Heavy" w="35" b="7" d="0" c="8" f="50" s="20" z="15" y="25" u="1 charge/hour" />
<p><Icons id="tech-armor-spacesuit-info-icons" wrapper="prefixIcon" list={["info"]} /> This airtight suit of synthetic polymers includes a transparent, dome-like helmet that completely covers the wearer's head. A <em>spacesuit</em> is nearly identical in function to an <Link to="/tech-armor/hev_suit">HEV suit</Link>, except that as long as the <em>spacesuit</em> is charged, it provides a bit more armor protection as well as complete protection from all <Link to="/rule/radiation">radiation</Link> and exposure to vacuum. A <em>spacesuit</em> repairs damage to itself at the rate of 4d6 points of damage per charge consumed. It has <Link to="/rule/hardness">hardness</Link> 6 and 60 hit points.</p>
<p><Icons id="tech-armor-spacesuit-power-icons" wrapper="prefixIcon" list={["power"]} /> A <em>spacesuit</em> is fitted with numerous small booster jets that grant the wearer a fly speed of 20 ft. (poor) in areas of zero gravity while the <em>spacesuit</em> is charged. The boosters impart no benefit in areas of high, low, or normal gravity.</p>
<Tabular format="techcraft" c="30" p="45000" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">military lab</Link></>} />
</>};
const _hard_light_shield = {title: "Hard light shield", jsx: <><h2 id="tech-armor-hard_light_shield-hard-light-shield">Hard light shield</h2>
<p><strong>Sources</strong> <Link to="/source/technology_guide">Technology Guide pg. 30</Link></p>
<Tabular format="techarmor" p="6400" t="Shield" w="1" b="2" c="0" f="10" y="20" u="1 charge/minute" />
<p>This bulky bracelet is covered in blinking blue lights and pulsing holographic emitters. A <em>hard light shield</em> produces a translucent but substantial holographic barrier when activated.</p>
<p><Icons id="tech-armor-hard_light_shield-def-info-icons" wrapper="prefixIcon" list={["def","info"]} /> The shield bonus counts as a force effect and applies to the wielder's touch AC against beam and ray attacks (but not other touch attacks). As a transparent force effect, a <em>hard light shield</em> provides no bonus against lasers. A hard light shield can be used to deliver <Link to="/misc/shield_bash">shield bash</Link> attacks like a <Link to="/eq-armor/heavy_steel_shield">heavy shield</Link>.</p>
<p><Icons id="tech-armor-hard_light_shield-warning-icons" wrapper="prefixIcon" list={["warning"]} /> When turned off, a <em>hard light shield</em> provides no AC bonus and imposes no spell failure chance. Activating or deactivating a <em>hard light shield</em> is a <strong className="hl">move action</strong>. This item occupies the wearer's <Link to="/rule/wrist_slot">wrist slot</Link>.</p>
<Tabular format="techcraft" c="27" p="3200" r={<><Link to="/feat/craft_technological_arms_and_armor">Craft Technological Arms and Armor</Link>, <Link to="/rule/crafting_laboratories">graviton lab</Link></>} />
</>};
const _scatterlight_suit_black = {..._scatterlight_suit_brown, title: "Scatterlight Suit (black)"};
const _scatterlight_suit_gray = {..._scatterlight_suit_brown, title: "Scatterlight Suit (gray)"};
const _scatterlight_suit_green = {..._scatterlight_suit_brown, title: "Scatterlight Suit (green)"};
const _scatterlight_suit_red = {..._scatterlight_suit_brown, title: "Scatterlight Suit (red)"};
const _scatterlight_suit_blue = {..._scatterlight_suit_brown, title: "Scatterlight Suit (blue)"};
const _scatterlight_suit_orange = {..._scatterlight_suit_brown, title: "Scatterlight Suit (orange)"};
const _scatterlight_suit_prismatic = {..._scatterlight_suit_brown, title: "Scatterlight Suit (prismatic)"};
const _scatterlight_suit_white = {..._scatterlight_suit_brown, title: "Scatterlight Suit (white)"};
const _smart_armor_expanded_form = {..._smart_armor_compact_form, title: "Smart Armor (expanded form)"};
export default {not_found:_not_found,heavy_weapon_harness:_heavy_weapon_harness,scatterlight_suit_brown:_scatterlight_suit_brown,chameleon_suit:_chameleon_suit,neraplast_armor:_neraplast_armor,deep_diving_suit:_deep_diving_suit,inssuit:_inssuit,smart_armor_compact_form:_smart_armor_compact_form,gravity_suit:_gravity_suit,panic_suit:_panic_suit,hev_suit:_hev_suit,nanite_ablative_armor:_nanite_ablative_armor,spacesuit:_spacesuit,hard_light_shield:_hard_light_shield,scatterlight_suit_black:_scatterlight_suit_black,scatterlight_suit_gray:_scatterlight_suit_gray,scatterlight_suit_green:_scatterlight_suit_green,scatterlight_suit_red:_scatterlight_suit_red,scatterlight_suit_blue:_scatterlight_suit_blue,scatterlight_suit_orange:_scatterlight_suit_orange,scatterlight_suit_prismatic:_scatterlight_suit_prismatic,scatterlight_suit_white:_scatterlight_suit_white,smart_armor_expanded_form:_smart_armor_expanded_form}