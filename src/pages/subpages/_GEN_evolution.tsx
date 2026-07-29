import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import AffInfo from '../../components/AfflictionInfo';
const _not_found = {title: "Unknown", jsx: <><p>Unable to find the requested eidolon evolution.</p>
</>};
const _basic_magic = {title: "Basic Magic", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 76</Link></p>
<Ability id="basic-magic-sp" icon={["magic-swirl"]}>
<Pair single id="basic-magic-sp" flavor="An eidolon learns to cast a basic spell as a spell-like ability.">Basic Magic (Sp)</Pair>
<Pair title="Prerequisites">Eidolon has Charisma 10+</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/acid_splash">acid splash</Link>, <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/daze">daze</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/flare">flare</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/light">light</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link>, <Link to="/spell/stabilize">stabilize</Link>, or <Link to="/spell/touch_of_fatigue">touch of fatigue</Link>.</Pair>
<Pair title="Ability">This spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice. The save DC for this spell is 10 + the eidolon's Charisma modifier.</Pair>
<Pair title="At 4th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell.</Pair>
</Ability>
</>};
const _bite = {title: "Bite", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="bite-ex" icon={["mailed-fist"]}>
<Pair single id="bite-ex">Bite (Ex)</Pair>
<Pair title="Ability">An eidolon's maw is full of razor-sharp teeth, giving it a <Link to="/umr/bite_attack">bite attack</Link>. This attack is a primary attack. The bite deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">If the eidolon already has a bite attack, this evolution allows it to deal 1-1/2 times its Strength modifier on damage rolls made with its bite.</Pair>
</Ability>
</>};
const _bleed = {title: "Bleed", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 27</Link></p>
<Ability id="bleed-ex" icon={["mailed-fist"]}>
<Pair single id="bleed-ex" flavor="An eidolon gains the ability to inflict bleeding wounds.">Bleed (Ex)</Pair>
<Pair title="Ability">Select one type of attack. Attacks of that type deal 1d6 points of <Link to="/rule/bleed">bleed</Link> damage.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a different attack. The bleed effect doesn't stack.</Pair>
</Ability>
</>};
const _claws = {title: "Claws", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="claws-ex" icon={["mailed-fist"]}>
<Pair single id="claws-ex">Claws (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link></Pair>
<Pair title="Ability">An eidolon has a pair of vicious claws at the end of its limbs, giving it two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are primary attacks. The claws deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can only be applied to the <em>limbs (legs)</em> evolution once. This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
<aside><p><a href="http://paizo.com/paizo/faq/v5748nruor1fo#v5748eaic9rdk">FAQ</a> (link opens in outside browser) If you are a bipedal creature (roughly humanoid-shaped, with two arms and two legs), your claws must go on your hands; you can not assign them to any other limb or body part.</p>
<p>If you are a quadruped (or have more than four legs), you can have claws on your feet. If you have claws on all of your feet, normally you can't use all of those claw attacks on your turn unless you have a special ability such as <Link to="/umr/pounce">pounce</Link> or <Link to="/umr/rake">rake</Link>.</p>
<p>Talons are much like claws, but go on a creature's feet, usually a bipedal creature (especially a flying bipedal creature such as a <Link to="/monster/giant_eagle">giant eagle</Link> or <Link to="/monster/harpy">harpy</Link>). An ability that grants you claw attacks cannot be used as if they were talon attacks (in other words, you can't "re-skin" the ability's game mechanics so you can use it on a different limb).</p>
</aside></>};
const _climb = {title: "Climb", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="climb-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="climb-ex">Climb (Ex)</Pair>
<Pair title="Ability">An eidolon becomes a skilled climber, gaining a climb speed equal to its base speed.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's climb speed by 20 feet.</Pair>
</Ability>
</>};
const _gills = {title: "Gills", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="gills-ex" icon={["stairs-goal"]}>
<Pair single id="gills-ex">Gills (Ex)</Pair>
<Pair title="Ability">An eidolon has gills and can breathe underwater indefinitely.</Pair>
</Ability>
</>};
const _hooves = {title: "Hooves", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="hooves-ex" icon={["mailed-fist"]}>
<Pair single id="hooves-ex">Hooves (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> evolution, or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon has a pair of sharp hooves at the end of its limbs, giving it two <Link to="/umr/hoof_attack">hoof attacks</Link>. These attacks are secondary attacks. The hooves deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can only be applied to the <em>limbs (legs)</em> evolution once. This evolution can be selected more than once, but the eidolon must possess an equal number of <em>limbs</em> evolutions.</Pair>
</Ability>
</>};
const _improved_damage = {title: "Improved Damage", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="improved-damage-ex" icon={["upgrade"]}>
<Pair single id="improved-damage-ex" flavor="One of the eidolon's natural attacks is particularly deadly.">Improved Damage (Ex)</Pair>
<Pair title="Ability">Select one natural attack form and <Link to="/misc/increase_the_damage_die">increase the damage die</Link> type by one step.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _improved_natural_armor = {title: "Improved Natural Armor", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="improved-natural-armor-ex" icon={["armor-upgrade"]}>
<Pair single id="improved-natural-armor-ex">Improved Natural Armor (Ex)</Pair>
<Pair title="Passive Ability">An eidolon's hide grows thick fur, rigid scales, or bony plates, giving it a +2 bonus to its natural armor.</Pair>
<Pair title="Special">This evolution can be taken once at 1st level, and again at 5th, 10th, 15th, and 20th.</Pair>
</Ability>
</>};
const _low_light_vision = {title: "Low-Light Vision", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="low-light-vision-ex" icon={["stairs-goal"]}>
<Pair single id="low-light-vision-ex">Low-Light Vision (Ex)</Pair>
<Pair title="Ability">An eidolon gains low-light vision, enabling it to see twice as far as a human in conditions of dim light.</Pair>
</Ability>
</>};
const _magic_attacks = {title: "Magic Attacks", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="magic-attacks-su" icon={["upgrade"]}>
<Pair single id="magic-attacks-su">Magic Attacks (Su)</Pair>
<Pair title="Passive Ability">An eidolon is infused with magic, allowing it to treat all of its natural attacks as if they were magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="Special">If the summoner is 10th level or higher, all of the eidolon's weapons are treated as the alignment of the eidolon for the purpose of overcoming damage reduction.</Pair>
</Ability>
</>};
const _mount = {title: "Mount", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="mount-ex" icon={["stairs-goal"]}>
<Pair single id="mount-ex">Mount (Ex)</Pair>
<Pair title="Prerequisites">Eidolon is at least one size category larger than its rider; must be of the aquatic, quadruped, or serpentine base form</Pair>
<Pair title="Ability">An eidolon is properly skilled and formed to serve as a <Link to="/rule/combat_trained">combat-trained</Link> mount.</Pair>
</Ability>
</>};
const _pincers = {title: "Pincers", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="pincers-ex" icon={["mailed-fist"]}>
<Pair single id="pincers-ex">Pincers (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> (arms), or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon grows a large pincers at the end of one pair of its limbs, giving it two pincer attacks. These attacks are secondary attacks. The pincers deal 1d6 points of damage (1d8 if Large, 2d6 if Huge). Eidolons with the <Link to="/evolution/grab">grab</Link> evolution linked to pincers gain a +2 bonus on CMB checks made to grapple.</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
</>};
const _pounce = {title: "Pounce", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="pounce-ex" icon={["mailed-fist"]}>
<Pair single id="pounce-ex">Pounce (Ex)</Pair>
<Pair title="Prerequisites">Quadruped base form</Pair>
<Pair title="Ability">An eidolon gains quick reflexes, allowing it to make a full attack after a charge.</Pair>
</Ability>
</>};
const _pull = {title: "Pull", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link></p>
<Ability id="pull-ex" icon={["mailed-fist"]}>
<Pair single id="pull-ex" flavor="An eidolon gains the ability to pull creatures closer with a successful attack.">Pull (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/reach">Reach</Link> of 10 feet or more</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the target of the attack is pulled 5 feet closer to the eidolon.</p>
<p>This ability only works on creatures of a size equal to or smaller than the eidolon. Creatures pulled in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _push = {title: "Push", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="push-ex" icon={["mailed-fist"]}>
<Pair single id="push-ex" flavor="An eidolon gains the ability to push creatures away with a successful attack.">Push (Ex)</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the target of the attack is pushed 5 feet directly away from the eidolon.</p>
<p>This ability only works on creatures of a size equal to or smaller than the eidolon. Creatures pushed in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
</>};
const _reach = {title: "Reach", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="reach-ex" icon={["mailed-fist"]}>
<Pair single id="reach-ex" flavor="One of an eidolon's attacks is capable of striking at foes at a distance.">Reach (Ex)</Pair>
<Pair title="Ability">Pick one attack. The eidolon's reach with that attack increases by 5 feet.</Pair>
</Ability>
</>};
const _resistance = {title: "Resistance", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="resistance-ex">Resistance (Ex)</Pair>
<Pair title="Passive Ability"><p>An eidolon's form takes on a resiliency to one particular energy type, which is usually reflected in its physical body (ashen hide for fire, icy breath for cold, and so on).</p>
<p>Pick one energy type (acid, cold, electricity, fire, or sonic). The eidolon gains <Link to="/umr/resist">resist</Link> 5 against that energy type.</p>
</Pair>
<Pair title="At 5th Level">The resistance becomes 10.</Pair>
<Pair title="At 10th Level">The resistance becomes 15.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different energy type.</Pair>
</Ability>
</>};
const _scent = {title: "Scent", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="scent-ex" icon={["stairs-goal"]}>
<Pair single id="scent-ex" flavor="An eidolon's sense of smell becomes quite acute.">Scent (Ex)</Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/scent">scent</Link> special quality, allowing it to detect opponents within 30 feet by sense of smell. If the opponent is upwind, the range increases to 60 feet; if downwind, it drops to 15 feet. Strong scents can be detected at twice the normal range.</p>
<p>Scent does not allow the eidolon to precisely locate the creature, only to detect its presence. It can detect the direction with a <strong className="hl">move action</strong>. The eidolon can pinpoint the creature's location if it is within 5 feet. The eidolon can use <em>scent</em> to track creatures.</p>
</Pair>
</Ability>
</>};
const _skilled = {title: "Skilled", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="skilled-ex" icon={["upgrade"]}>
<Pair single id="skilled-ex">Skilled (Ex)</Pair>
<Pair title="Passive Ability">An eidolon becomes especially adept at a specific skill, gaining a +8 racial bonus on that skill.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different skill.</Pair>
</Ability>
</>};
const _slam = {title: "Slam", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="slam-ex" icon={["mailed-fist"]}>
<Pair single id="slam-ex">Slam (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> (arms) evolution, or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon can deliver a devastating <Link to="/umr/slam_attack">slam attack</Link>. This attack is a primary attack. The slam deals 1d8 points of damage (2d6 if Large, 2d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
</>};
const _slippery = {title: "Slippery", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 27</Link></p>
<Ability id="slippery-ex" icon={["armor-upgrade","upgrade"]}>
<Pair single id="slippery-ex">Slippery (Ex)</Pair>
<Pair title="Passive Ability">Due to its slimy hide or a slick exoskeleton, the eidolon is especially slippery. The eidolon gains a +4 bonus to CMD to escape a grapple and on Escape Artist checks.</Pair>
</Ability>
</>};
const _sticky = {title: "Sticky", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 27</Link></p>
<Ability id="sticky-ex" icon={["upgrade"]}>
<Pair single id="sticky-ex">Sticky (Ex)</Pair>
<Pair title="Passive Ability">The eidolon is especially sticky, whether from a coating of adhesive slime, partially congealed blood, or tiny barbed spines. The eidolon gains a +4 bonus on combat maneuver checks to initiate or maintain a grapple.</Pair>
</Ability>
</>};
const _sting = {title: "Sting", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="sting-ex" icon={["mailed-fist"]}>
<Pair single id="sting-ex">Sting (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/tail">Tail</Link></Pair>
<Pair title="Ability">An eidolon possesses a long, barbed stinger at the end of its tail, granting it a <Link to="/umr/sting_attack">sting attack</Link>. This attack is a primary attack. The sting deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>tail</em> evolution.</Pair>
</Ability>
</>};
const _swim = {title: "Swim", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="swim-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="swim-ex">Swim (Ex)</Pair>
<Pair title="Ability">An eidolon gains webbed hands, feet, or powerful flippers, giving it a swim speed equal to its base speed. This evolution does not give the eidolon the ability to breathe underwater.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's swim speed by 20 feet.</Pair>
</Ability>
</>};
const _tail = {title: "Tail", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="tail-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="tail-ex">Tail (Ex)</Pair>
<Pair title="Ability">An eidolon grows a long, powerful tail. This grants it a +2 racial bonus on Acrobatics checks made to balance on a surface.</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _tail_slap = {title: "Tail Slap", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="tail-slap-ex" icon={["mailed-fist"]}>
<Pair single id="tail-slap-ex">Tail Slap (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/tail">Tail</Link></Pair>
<Pair title="Ability">An eidolon can use its tail to bash nearby foes, granting it a <Link to="/umr/tail_slap_attack">tail slap attack</Link>. This attack is a secondary attack. The tail slap deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>tail</em> evolution.</Pair>
</Ability>
</>};
const _tentacle = {title: "Tentacle", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="tentacle-ex" icon={["mailed-fist"]}>
<Pair single id="tentacle-ex">Tentacle (Ex)</Pair>
<Pair title="Ability">An eidolon possesses a long, sinuous tentacle, granting it a <Link to="/umr/tentacle_attack">tentacle attack</Link>. This attack is a secondary attack. The tentacle attack deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _unnatural_aura = {title: "Unnatural Aura", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="unnatural-aura-su" icon={["armor-upgrade"]}>
<Pair single id="unnatural-aura-su">Unnatural Aura (Su)</Pair>
<Pair title="Passive Ability">An eidolon is obviously of unnatural origin. Normal animals do not willingly approach the eidolon unless the animal's master makes a DC 25 Handle Animal, Ride, or wild empathy check.</Pair>
</Ability>
</>};
const _wing_buffet = {title: "Wing Buffet", addenda: ["1pt"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="wing-buffet-ex" icon={["mailed-fist"]}>
<Pair single id="wing-buffet-ex">Wing Buffet (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/flight">Flight</Link> (with wings)</Pair>
<Pair title="Ability">An eidolon learns to use its wings to batter foes, granting it two wing buffet attacks. These attacks are secondary attacks. The wing buffets deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
</Ability>
</>};
const _ability_increase = {title: "Ability Increase", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="ability-increase-ex" icon={["upgrade"]}>
<Pair single id="ability-increase-ex" flavor="An eidolon grows larger muscles, gains faster reflexes, achieves greater intelligence, or acquires another increase to one of its abilities.">Ability Increase (Ex)</Pair>
<Pair title="Passive Ability">Increase one of the eidolon's ability scores by +2.</Pair>
<Pair title="Special"><p>This evolution can be selected more than once. It can only be applied once to an individual ability score, plus 1 additional time for every 6 levels the summoner possesses.</p>
<p>The <em>ability increase</em> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a <Link to="/evolution/large">Large or Huge</Link> eidolon.</p>
</Pair>
</Ability>
</>};
const _alignment_smite = {title: "Alignment Smite", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 26</Link></p>
<Ability id="alignment-smite-su" icon={["upgrade"]}>
<Pair single id="alignment-smite-su">Alignment Smite (Su)</Pair>
<Pair title="Prerequisites">5th-level summoner, and the summoner cannot be evil or true neutral</Pair>
<Pair title="Choice">Choose a single alignment component that opposes one of the summoner's own.</Pair>
<Pair title="Swift Action"><p>Once per day, the eidolon chooses one target within sight. If this target's alignment matches that chosen for this ability, the eidolon deals an additional +1d6 points of damage with one of its natural weapons.</p>
<p>This attack is treated as good-aligned for the purposes of overcoming damage reduction. The alignment smite persists until the target is dead or the eidolon is dismissed.</p>
</Pair>
<Pair title="At 10th Level">The summoner may spend 1 additional evolution point to allow the eidolon a second daily use of this ability.</Pair>
</Ability>
</>};
const _channel_resistance = {title: "Channel Resistance", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="channel-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="channel-resistance-ex" flavor={<>An eidolon becomes less easily affected by the <Link to="/ability/channel_energy">channel energy</Link> ability of clerics or paladins.</>}>Channel Resistance (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/undead_appearance">Undead appearance</Link></Pair>
<Pair title="Passive Ability">The eidolon gains a +2 bonus on any saves that are made to resist the effects of channel energy, including effects that rely on the use of channel energy (such as the <Link to="/feat/command_undead">Command Undead</Link> feat).</Pair>
<Pair title="At 7th Level">This bonus can be increased to +4 by spending 2 additional evolution points.</Pair>
</Ability>
</>};
const _constrict = {title: "Constrict", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 61</Link></p>
<Ability id="constrict-ex" icon={["upgrade"]}>
<Pair single id="constrict-ex" flavor="An eidolon gains powerful muscles that allow it to crush those it grapples.">Constrict (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/grab">Grab</Link>, serpentine base form</Pair>
<Pair title="Ability">Whenever the eidolon successfully grapples a foe using the <em>grab</em> evolution, it deals additional damage equal to the amount of damage dealt by the attack used by the <em>grab</em> evolution.</Pair>
</Ability>
</>};
const _energy_attacks = {title: "Energy Attacks", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="energy-attacks-su" icon={["upgrade"]}>
<Pair single id="energy-attacks-su" flavor="An eidolon's attacks become charged with energy.">Energy Attacks (Su)</Pair>
<Pair title="Prerequisites">5th-level summoner</Pair>
<Pair title="Choice">Pick one energy type: acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">All of the eidolon's natural attacks deal 1d6 points of energy damage of the chosen type on a successful hit.</Pair>
</Ability>
</>};
const _flight = {title: "Flight", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="flight-ex-or-su" icon={["stairs-goal"]}>
<Pair single id="flight-ex-or-su">Flight (Ex or Su)</Pair>
<Pair title="Prerequisites">5th-level summoner</Pair>
<Pair title="Ability"><p>An eidolon grows large wings, like those of a bat, bird, insect, or dragon, gaining the ability to fly. The eidolon gains a fly speed equal to its base speed.</p>
<p>The eidolon's maneuverability depends on it size. Medium or smaller eidolons have good maneuverability. Large eidolons have average maneuverability, while Huge eidolons have poor maneuverability.</p>
<p>For 2 additional evolution points, the eidolon flies by means of magic. It loses its wings, but its maneuverability increases to perfect. Flying via magic means makes this a supernatural ability.</p>
</Pair>
<Pair title="Special">The eidolon's fly speed can be increased by spending additional evolution points, gaining a 20-foot increase to fly speed for each additional point spent.</Pair>
</Ability>
</>};
const _gore = {title: "Gore", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="gore-ex" icon={["stairs-goal"]}>
<Pair single id="gore-ex">Gore (Ex)</Pair>
<Pair title="Ability">An eidolon grows a number of horns on its head, giving it a <Link to="/umr/gore_attack">gore attack</Link>. This attack is a primary attack. The gore deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
</Ability>
</>};
const _grab = {title: "Grab", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="grab-ex" icon={["mailed-fist","upgrade"]}>
<Pair single id="grab-ex">Grab (Ex)</Pair>
<Pair title="Prerequisites">Must have a bite, claw, pincers, slam, tail slap, or tentacle attack</Pair>
<Pair title="Ability">An eidolon becomes adept at grappling foes, gaining the <Link to="/umr/grab">grab</Link> ability. Pick bite, claw, pincers, slam, tail slap, or tentacle attacks. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the eidolon <Link to="/rule/grapple">grapples</Link> the target.</Pair>
<Pair title="Special">This ability only works on creatures of a size one category smaller than the eidolon or smaller. Eidolons with this evolution receive a +4 bonus on CMB checks made to grapple.</Pair>
</Ability>
</>};
const _head = {title: "Head", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="head-ex" icon={["stairs-goal"]}>
<Pair single id="head-ex">Head (Ex)</Pair>
<Pair title="Ability">An eidolon grows an additional head. The eidolon does not gain any additional natural attacks for the additional head, but the additional head does allow the eidolon to take other evolutions that add an additional attack to a head (such as a <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/gore">gore</Link>, or <Link to="/umr/breath_weapon">breath weapon</Link>).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _immunity = {title: "Immunity", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="immunity-su" icon={["armor-upgrade"]}>
<Pair single id="immunity-su" flavor="An eidolon's body becomes extremely resilient to one energy type.">Immunity (Su)</Pair>
<Pair title="Prerequisites">7th-level summoner</Pair>
<Pair title="Passive Ability">Pick one energy type: acid, cold, electricity, fire, or sonic. The eidolon gains <Link to="/umr/immunity">immunity</Link> to that energy type.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time it applies to a different energy type.</Pair>
</Ability>
</>};
const _keen_scent = {title: "Keen Scent", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="keen-scent-ex" icon={["upgrade"]}>
<Pair single id="keen-scent-ex">Keen Scent (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/gills">Gills</Link>, <Link to="/evolution/scent">scent</Link></Pair>
<Pair title="Ability">An eidolon's sense of smell becomes even more acute. The eidolon can notice other creatures by scent in a 180-foot radius underwater and can detect blood in the water at ranges of up to a mile.</Pair>
</Ability>
</>};
const _limbs = {title: "Limbs", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="limbs-ex" icon={["stairs-goal","upgrade"]}>
<Pair single id="limbs-ex">Limbs (Ex)</Pair>
<Pair title="Ability"><p>An eidolon grows an additional pair of limbs. These limbs can take one of two forms.</p>
<p>They can be made into legs, complete with feet. Each pair of legs increases the eidolon's base speed by 10 feet.</p>
<p>Alternatively, they can be made into arms, complete with hands. The eidolon does not gain any additional natural attacks for an additional pair of arms, but it can take other evolutions that add additional attacks (such as <Link to="/evolution/claws">claws</Link> or a <Link to="/evolution/slam">slam</Link>). Arms that have hands can be used to wield weapons, if the eidolon is proficient.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
</>};
const _minor_magic = {title: "Minor Magic", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="minor-magic-sp" icon={["magic-swirl"]}>
<Pair single id="minor-magic-sp" flavor="An eidolon learns to cast a minor spell as a spell-like ability.">Minor Magic (Sp)</Pair>
<Pair title="Prerequisites">4th-level summoner, eidolon has Charisma 11+, <Link to="/evolution/basic_magic">basic magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/detect_evil">detect chaos/evil/good/law</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/vanish">vanish</Link> (self only), or <Link to="/spell/ventriloquism">ventriloquism</Link>.</Pair>
<Pair title="Ability">The chosen spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="At 7th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
</>};
const _poison = {title: "Poison", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="poison-ex" icon={["mailed-fist"]}>
<Pair single id="poison-ex">Poison (Ex)</Pair>
<Pair title="Prerequisites">7th-level summoner, eidolon has a bite or sting attack</Pair>
<Pair title="Ability"><p>An eidolon secretes toxic venom, gaining a poison attack. Pick one bite or sting attack. Whenever the selected attack hits, the target is poisoned.</p>
<AffInfo type="Natural attack-injury" save="Fort 10 + 1/2 the eidolon's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p">Eidolon poison</AffInfo>
<p>For 2 additional evolution points, this poison deals Constitution damage instead. This poison can be used no more than once per round.</p>
</Pair>
</Ability>
</>};
const _rake = {title: "Rake", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="rake-ex" icon={["mailed-fist"]}>
<Pair single id="rake-ex">Rake (Ex)</Pair>
<Pair title="Prerequisites">4th-level summoner, eidolon has quadruped base form</Pair>
<Pair title="Ability">An eidolon grows dangerous claws on its feet, allowing it to make 2 <Link to="/umr/rake">rake</Link> attacks on foes it is grappling. These attacks are <Link to="/umr/primary_attack">primary attacks</Link>. The eidolon receives these additional attacks each time it succeeds on a <Link to="/rule/grapple">grapple</Link> check against the target. These rake attacks deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution counts as one natural attack toward the eidolon's maximum.</Pair>
</Ability>
</>};
const _rend = {title: "Rend", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="rend-ex" icon={["mailed-fist"]}>
<Pair single id="rend-ex">Rend (Ex)</Pair>
<Pair title="Prerequisites">6th-level summoner, <Link to="/evolution/claws">claws</Link></Pair>
<Pair title="Ability">An eidolon learns to rip and tear the flesh of those it attacks with its claws, gaining the <Link to="/umr/rend">rend</Link> ability. Whenever the eidolon makes two successful claw attacks against the same target in 1 round, its claws latch onto the flesh and deal extra damage. This damage is equal to the damage dealt by one claw attack plus 1-1/2 times the eidolon's Strength modifier.</Pair>
</Ability>
</>};
const _rider_bond = {title: "Rider Bond", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/cohorts_and_companions">Cohorts and Companions pg. 9</Link></p>
<Ability id="rider-bond-ex" icon={["upgrade","stairs-goal"]}>
<Pair single id="rider-bond-ex" flavor="You and your eidolon share an empathic connection while you ride it.">Rider Bond (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/mount">Mount</Link></Pair>
<Pair title="Passive Ability">You gain a bonus on Ride checks equal to <Link to="/misc/half">half</Link> your summoner level and you also gain <Link to="/feat/mounted_combat">Mounted Combat</Link> as a bonus feat when mounted on your eidolon.</Pair>
</Ability>
</>};
const _shadow_blend = {title: "Shadow Blend", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 111</Link></p>
<Ability id="shadow-blend-su" icon={["armor-upgrade"]}>
<Pair single id="shadow-blend-su">Shadow Blend (Su)</Pair>
<Pair title="Passive Ability">In any condition of <Link to="/rule/illumination">illumination</Link> other than bright light, the eidolon disappears into the shadows, giving it <Link to="/rule/concealment">concealment</Link> (20% miss chance). If it has the <Link to="/evolution/shadow_form">shadow form</Link> evolution, it instead gains total concealment (50% miss chance). The eidolon can suspend or resume this ability as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</>};
const _shadow_form = {title: "Shadow Form", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_race_guide">Advanced Race Guide pg. 111</Link></p>
<Ability id="shadow-form-su" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="shadow-form-su" flavor="The eidolon's body becomes shadowy and more indistinct.">Shadow Form (Su)</Pair>
<Pair title="Ability">This shadow form grants the eidolon constant <Link to="/rule/concealment">concealment</Link> (20% miss chance), and its melee attacks affect incorporeal creatures as if it had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property. The eidolon's melee attacks deal only half damage to corporeal creatures.</Pair>
</Ability>
</>};
const _sickening = {title: "Sickening", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 27</Link></p>
<Ability id="sickening-ex" icon={["armor-upgrade","aura"]}>
<Pair single id="sickening-ex" flavor="The eidolon's smell or appearance is so offensive it sickens nearby creatures.">Sickening (Ex)</Pair>
<Pair title="Passive Ability">Any living creature except its summoner that approaches within 20 feet or begins its turn in that area is <Link to="/misc/sickened">sickened</Link> for 1 round unless it succeeds at a Fortitude save (DC = 10 + 1/2 the eidolon's HD + its Con modifier). Creatures that successfully save cannot be affected by the same eidolon's sickening effect for 24 hours.</Pair>
</Ability>
</>};
const _trample = {title: "Trample", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="trample-ex" icon={["mailed-fist"]}>
<Pair single id="trample-ex">Trample (Ex)</Pair>
<Pair title="Prerequisites">Biped or quadruped base form</Pair>
<Pair title="Full-Round Action"><p>An eidolon gains the ability to crush its foes underfoot, gaining the <Link to="/umr/trample">trample</Link> ability. The eidolon can overrun any creature that is at least one size smaller than itself. This works like the <Link to="/rule/overrun">overrun</Link> combat maneuver, but the eidolon does not need to make a check, it merely has to move over opponents in its path. The creatures take 1d6 points of damage (1d8 if Large, 2d6 if Huge), plus 1-1/2 times the eidolon's Strength modifier.</p>
<p>Targets of the trample can make attacks of opportunity at a -4 penalty. If a target forgoes the attack of opportunity, it can make a Reflex save for half damage. The DC of this save is 10 + 1/2 the eidolon's HD + the eidolon's Strength modifier.</p>
<p>A trampling eidolon can only deal trampling damage to a creature once per round.</p>
</Pair>
</Ability>
</>};
const _tremorsense = {title: "Tremorsense", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 62</Link></p>
<Ability id="tremorsense-ex" icon={["stairs-goal"]}>
<Pair single id="tremorsense-ex">Tremorsense (Ex)</Pair>
<Pair title="Prerequisites">7th-level summoner</Pair>
<Pair title="Ability">An eidolon becomes attuned to vibrations in the ground, gaining <Link to="/umr/tremorsense">tremorsense</Link> out to a range of 30 feet. This works like the <Link to="/evolution/blindsense">blindsense</Link> evolution, but only if both the eidolon and the creature to be pinpointed are in contact with the ground.</Pair>
</Ability>
</>};
const _trip = {title: "Trip", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="trip-ex" icon={["stairs-goal"]}>
<Pair single id="trip-ex">Trip (Ex)</Pair>
<Pair title="Prerequisites"><Link to="/evolution/bite">Bite</Link></Pair>
<Pair title="Ability">An eidolon becomes adept at knocking foes to the ground with its bite, granting it a <Link to="/rule/trip">trip</Link> attack. Whenever the eidolon makes a successful bite attack of the selected type, it can attempt a free combat maneuver check. If successful, the target is knocked <Link to="/rule/prone">prone</Link>. If the check fails, the eidolon is not tripped in return.</Pair>
<Pair title="Special">This ability only works on creatures of a size equal to or smaller than the eidolon.</Pair>
</Ability>
</>};
const _undead_appearance = {title: "Undead Appearance", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 77</Link></p>
<Ability id="undead-appearance-ex" icon={["broken-shield","upgrade"]}>
<Pair single id="undead-appearance-ex" flavor="An eidolon appears as an undead creature, and mimics some of an undead creature's abilities and weaknesses.">Undead Appearance (Ex)</Pair>
<Pair title="Passive Ability">Negative energy heals the eidolon, and positive energy (including a cleric's <Link to="/ability/channel_energy">channel energy</Link> ability) harms it. Spells and effects that target undead or have specific effects against undead (such as <Link to="/spell/command_undead">Command Undead</Link>, <Link to="/spell/halt_undead">halt undead</Link>, and <Link to="/spell/searing_light">searing light</Link>) affect the eidolon as if it were undead. The eidolon gains a +2 bonus on saves against disease, exhaustion, fatigue, paralysis, poison, sleep effects, and stunning.</Pair>
<Pair title="At 7th Level">This bonus on saves can be increased to +4 by spending 2 additional evolution points.</Pair>
<Pair title="At 12th Level">This protection can be increased to immunity against these attacks by spending 2 additional evolution points (the summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade).</Pair>
<Pair title="Special">Although the eidolon appears undead, it is still an outsider.</Pair>
</Ability>
</>};
const _weapon_training = {title: "Weapon Training", addenda: ["2pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="weapon-training-ex" icon={["mailed-fist"]}>
<Pair single id="weapon-training-ex">Weapon Training (Ex)</Pair>
<Pair title="Ability">An eidolon learns to use a weapon, gaining <Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link> as a bonus feat.</Pair>
<Pair title="Special">If 2 additional evolution points are spent, it gains proficiency with all martial weapons as well.</Pair>
</Ability>
</>};
const _blindsense = {title: "Blindsense", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="blindsense-ex" icon={["stairs-goal"]}>
<Pair single id="blindsense-ex">Blindsense (Ex)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon's senses become incredibly acute, giving it <Link to="/umr/blindsense">blindsense</Link> out to a range of 30 feet. This ability allows the eidolon to pinpoint the location of creatures that it cannot see without having to make a Perception check, but such creatures still have total <Link to="/rule/concealment">concealment</Link> from the eidolon.</Pair>
<Pair title="Special">Visibility still affects the eidolon's movement and it is still denied its Dexterity bonus to Armor Class against attacks from creatures it cannot see.</Pair>
</Ability>
</>};
const _burrow = {title: "Burrow", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="burrow-ex" icon={["stairs-goal"]}>
<Pair single id="burrow-ex">Burrow (Ex)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon grows thick and gnarled claws, allowing it to move through the earth. The eidolon gains a burrow speed equal to 1/2 its base speed. It can use this speed to move through dirt, clay, sand, and earth. It does not leave a hole behind, nor is its passage marked on the surface.</Pair>
</Ability>
</>};
const _celestial_appearance = {title: "Celestial Appearance", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 26</Link></p>
<Ability id="celestial-appearance-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="celestial-appearance-ex" flavor="The eidolon appears as a celestial creature and manifests some of the abilities of a celestial.">Celestial Appearance (Ex)</Pair>
<Pair title="Prerequisites">The summoner must be good-aligned</Pair>
<Pair title="Passive Ability">Spells and effects that target creatures with the good subtype or have specific effects against such creatures affect the eidolon as if it were a celestial. The eidolon gains a +2 bonus on saves against disease, petrification, poison, and electricity spells and effects. It also gains spell resistance equal to 5 + its HD against spells with the evil descriptor.</Pair>
<Pair title="At 7th Level">By spending 2 additional evolution points, this bonus on saves is increased to +4 and the spell resistance is extended to affect any spells and effects from evil creatures.</Pair>
<Pair title="At 12th Level">By spending 2 additional evolution points, this protection is increased to immunity against these attacks and the spell resistance is increased to 11 + its HD (the summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade).</Pair>
</Ability>
</>};
const _damage_reduction = {title: "Damage Reduction", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="damage-reduction-su" icon={["armor-upgrade"]}>
<Pair single id="damage-reduction-su" flavor="An eidolon's body becomes resistant to harm, granting it damage reduction.">Damage Reduction (Su)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Passive Ability">Choose one alignment: chaotic, evil, good, or lawful. The eidolon gains DR 5 that can be bypassed by weapons that possess the chosen alignment. The alignment must be opposite to one of the alignments possessed by the eidolon.</Pair>
<Pair title="At 12th Level">This protection can be increased to DR 10 by spending 2 additional evolution points.</Pair>
</Ability>
</>};
const _fiendish_appearance = {title: "Fiendish Appearance", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_corruption">Champions of Corruption pg. 27</Link></p>
<Ability id="fiendish-appearance-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="fiendish-appearance-ex" flavor="The eidolon appears as a fiendish creature and manifests some of the abilities of a fiend.">Fiendish Appearance (Ex)</Pair>
<Pair title="Prerequisites">The summoner must be evil-aligned</Pair>
<Pair title="Passive Ability">Spells and effects that target creatures with the evil subtype or have specific effects against such creatures affect the eidolon as if it had that subtype. The eidolon gains a +2 bonus on saving throws against acid, disease, fire, and poison spells and effects. It also gains an amount of spell resistance equal to 5 + its HD against spells with the good descriptor.</Pair>
<Pair title="At 7th Level">By spending 2 additional evolution points, the summoner increases the bonus on saving throws to +4 and extends the spell resistance to affect any spells and spell-like abilities cast by good creatures.</Pair>
<Pair title="At 12th Level">By spending 2 additional evolution points, the eidolon gains immunity to acid, disease, fire, and poison. Its spell resistance increases to an amount of equal to 11 + its HD. (The summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade.)</Pair>
</Ability>
</>};
const _frightful_presence = {title: "Frightful Presence", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="frightful-presence-ex" icon={["armor-downgrade"]}>
<Pair single id="frightful-presence-ex">Frightful Presence (Ex)</Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Ability">An eidolon becomes unsettling to its foes, gaining the <Link to="/umr/frightful_presence">frightful presence</Link> ability. The eidolon can activate this ability as part of an offensive action, such as a <Link to="/rule/charge">charge</Link> or attack. Opponents within 30 feet of the eidolon must make a Will save or become <Link to="/misc/shaken">shaken</Link> for 3d6 rounds. The DC of this save is equal to 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">If the eidolon has at least 4 more Hit Dice than an opponent, that opponent becomes <Link to="/misc/frightened">frightened</Link> instead. Foes with more HD than the eidolon are immune to this effect.</Pair>
</Ability>
</>};
const _major_magic = {title: "Major Magic", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="major-magic-sp" icon={["magic-swirl"]}>
<Pair single id="major-magic-sp" flavor="An eidolon learns to cast a major spell as a spell-like ability.">Major Magic (Sp)</Pair>
<Pair title="Prerequisites">7th-level summoner, eidolon has charisma 12+, <Link to="/evolution/minor_magic">minor magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/daze_monster">daze monster</Link>, <Link to="/spell/glide">glide</Link>, <Link to="/spell/invisibility">invisibility</Link> (self only), <Link to="/spell/lesser_restoration">lesser restoration</Link>, <Link to="/spell/levitate">levitate</Link>, <Link to="/spell/minor_image">minor image</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, or <Link to="/spell/spider_climb">spider climb</Link>.</Pair>
<Pair title="Ability">This spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="At 10th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
</>};
const _sacrifice = {title: "Sacrifice", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/champions_of_purity">Champions of Purity pg. 26</Link></p>
<Ability id="sacrifice-su" icon={["remedy"]}>
<Pair single id="sacrifice-su" flavor="An eidolon can sacrifice its own hit points to heal another creature.">Sacrifice (Su)</Pair>
<Pair title="Standard Action">The eidolon can sacrifice up to 2 hit points per Hit Die and then touch a target creature, thereby healing the creature for half the amount sacrificed.</Pair>
</Ability>
</>};
const _see_in_darkness = {title: "See in Darkness", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="see-in-darkness-su" icon={["stairs-goal"]}>
<Pair single id="see-in-darkness-su">See in Darkness (Su)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon can see perfectly in darkness of any kind, including that created by <Link to="/spell/deeper_darkness">deeper darkness</Link>.</Pair>
</Ability>
</>};
const _swallow_whole = {title: "Swallow Whole", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="swallow-whole-ex" icon={["mailed-fist"]}>
<Pair single id="swallow-whole-ex">Swallow Whole (Ex)</Pair>
<Pair title="Prerequisites">9th-level summoner, <Link to="/evolution/grab">grab</Link> (bite)</Pair>
<Pair title="Ability"><p>An eidolon gains the <Link to="/umr/swallow_whole">swallow whole</Link> ability, giving it the ability to consume its foes. If the eidolon begins its turn with a creature grappled using its bite attack (see the <em>grab</em> evolution), it can attempt a combat maneuver check to swallow the creature. The creature can be up to one size category smaller than the eidolon.</p>
<p>Swallowed creatures take damage equal to the eidolon's bite damage each round plus 1d6 points of bludgeoning damage. A swallowed creature keeps the <Link to="/rule/grappled">grappled</Link> condition, but can attempt to cut its way free with a light slashing or piercing weapon. The amount of damage needed to cut free is equal to 1/10 the eidolon's total hit points. The eidolon's AC against these attacks is equal to 10 + 1/2 its natural armor bonus.</p>
<p>Alternatively, the swallowed creature can attempt to escape the grapple as normal. Success indicates that it has returned to the eidolon's mouth, where it can attempt to escape or be swallowed again.</p>
</Pair>
<Pair title="Special">If a swallowed creature cuts its way out, the eidolon loses this ability until it heals this damage.</Pair>
</Ability>
</>};
const _web = {title: "Web", addenda: ["3pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="web-ex" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="web-ex">Web (Ex)</Pair>
<Pair title="Prerequisites">7th-level summoner, <Link to="/evolution/climb">climb</Link></Pair>
<Pair title="Ability"><p>An eidolon gains a pair of spinnerets, giving it the ability to spin webs. The eidolon can use these webs to support itself plus up to one creature of the same size.</p>
<p>It can throw webbing as a ranged touch attack up to 8 times per day, <Link to="/rule/entangled">entangling</Link> a creature up to one size larger than the eidolon. The webbing has a range of 50 feet and a 10-foot range increment. Creatures entangled by the web can escape with an <Link to="/skill/escape_artist">Escape Artist</Link> check or a Strength check (at a -4 penalty). The DC of these checks is equal to 10 + 1/2 the eidolon's HD + the eidolon's Con modifier. The webs have a Hardness of 0 and a number of hits points equal to the eidolon's total Hit Dice.</p>
</Pair>
<Pair title="Special">The eidolon can climb its own webs at its climb speed and can pinpoint any creature touching its webs.</Pair>
</Ability>
</>};
const _blindsight = {title: "Blindsight", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="blindsight-ex" icon={["upgrade"]}>
<Pair single id="blindsight-ex">Blindsight (Ex)</Pair>
<Pair title="Prerequisites">11th-level summoner, <Link to="/evolution/blindsense">blindsense</Link></Pair>
<Pair title="Ability">An eidolon's senses sharpen even further, granting it <Link to="/umr/blindsight">blindsight</Link> out to a range of 30 feet. The eidolon can maneuver and attack as normal, ignoring darkness, invisibility, and most forms of <Link to="/rule/concealment">concealment</Link> as long as it has line of effect to the target.</Pair>
</Ability>
</>};
const _breath_weapon = {title: "Breath Weapon", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 63</Link></p>
<Ability id="breath-weapon-su" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="breath-weapon-su" flavor="An eidolon learns to exhale a cone or line of magical energy, gaining a breath weapon.">Breath Weapon (Su)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Choice">Select either acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">The eidolon can breathe a 30-foot cone (or 60-foot line) that deals 1d6 points of damage of the selected type per HD it possesses. Those caught in the breath weapon can attempt a Reflex save for half damage. The DC is equal to 10 + 1/2 the eidolon's HD + the eidolon's Constitution modifier.</Pair>
<Pair title="Special">The eidolon can use this ability once per day. The eidolon can use this ability 1 additional time per day by spending an additional 1 evolution point (maximum 3/day).</Pair>
</Ability>
</>};
const _dimension_door = {title: "Dimension Door", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="dimension-door-sp" icon={["magic-swirl"]}>
<Pair single id="dimension-door-sp">Dimension Door (Sp)</Pair>
<Pair title="Prerequisites">13th-level summoner, eidolon has charisma 14+</Pair>
<Pair title="Ability">An eidolon learns to cast <Link to="/spell/dimension_door">dimension door</Link> as a spell-like ability once per day. The caster level for this evolution is equal to the eidolon's Hit Dice. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
</Ability>
</>};
const _fast_healing = {title: "Fast Healing", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 64</Link></p>
<Ability id="fast-healing-su" icon={["armor-upgrade"]}>
<Pair single id="fast-healing-su">Fast Healing (Su)</Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Passive Ability"><p>An eidolon's body gains the ability to heal wounds very quickly, giving it <Link to="/umr/fast_healing">fast healing</Link> 1. The eidolon heals 1 point of damage each round, just like natural healing. <em>Fast healing</em> does not restore hit points lost due to starvation, thirst, or suffocation, nor does it allow the eidolon to regrow lost body parts (or to reattach severed parts).</p>
<p><em>Fast healing</em> functions as long as the eidolon is alive. This <em>fast healing</em> does not function when the eidolon is not on the same plane as its summoner.</p>
</Pair>
<Pair title="Special">This healing can be increased by 1 per round for every 2 additional evolution points spent (maximum 5).</Pair>
</Ability>
</>};
const _incorporeal_form = {title: "Incorporeal Form", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="incorporeal-form-sp" icon={["stairs-goal"]}>
<Pair single id="incorporeal-form-sp">Incorporeal Form (Sp)</Pair>
<Pair title="Prerequisites">15th-level summoner</Pair>
<Pair title="Ability">Once per day, an eidolon can become incorporeal for 1 round per summoner level. While in this form, the eidolon gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and <Link to="/umr/incorporeal">incorporeal</Link> quality. It only takes half damage from corporeal sources as long as they are magic (it takes no damage from nonmagical weapons and objects). Likewise, its spells or spell-like abilities deal only half damage to corporeal creatures. Spells and other effects that do not deal damage function normally.</Pair>
</Ability>
</>};
const _large = {title: "Large", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 64</Link></p>
<Ability id="large-ex" icon={["upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="large-ex">Large (Ex)</Pair>
<Pair title="Prerequisites">13th-level summoner, The eidolon must be Medium</Pair>
<Pair title="Ability">An eidolon grows in size, becoming Large. The eidolon gains a +8 bonus to Strength, a +4 bonus to Constitution, and a +2 bonus to its natural armor. It takes a -2 penalty to its Dexterity. This size change also gives the creature a -1 size penalty to its AC and on attack rolls, a +1 bonus to its CMB and CMD, a -2 penalty on Fly skill checks, and a -4 penalty on Stealth skill checks. If the eidolon has the biped base form, it also gains 10-foot reach. Any <Link to="/evolution/reach">reach</Link> evolutions the eidolon possesses are added to this total.</Pair>
<Pair title="Ability">If 6 additional evolution points are spent, the eidolon instead becomes Huge. The eidolon gains a +16 bonus to Strength, a +8 bonus to Constitution, and a +5 bonus to its natural armor. It takes a -4 penalty to its Dexterity. This size change also give the creature a -2 size penalty to its AC and attack rolls, a +2 bonus to its CMB and CMD, 10-foot reach, a -4 penalty on Fly skill checks, and a -8 penalty on Stealth skill checks. If the eidolon has the biped base form, its reach increases to 15 feet (10 feet for all other base forms). Any reach evolutions the eidolon possesses are added to this total. These bonuses and penalties replace, and do not stack with, those gained from becoming Large.</Pair>
<Pair title="Special">The <Link to="/evolution/ability_increase">ability increase</Link> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a Large or Huge eidolon.</Pair>
</Ability>
</>};
const _lifesense = {title: "Lifesense", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="lifesense-su" icon={["stairs-goal"]}>
<Pair single id="lifesense-su">Lifesense (Su)</Pair>
<Pair title="Prerequisites">11th-level summoner, <Link to="/evolution/undead_appearance">undead appearance</Link></Pair>
<Pair title="Ability">An eidolon can pinpoint living creatures with ease. The eidolon notices and locates living creatures within 60 feet, just as if it possessed the <Link to="/evolution/blindsight">blindsight</Link> evolution.</Pair>
</Ability>
</>};
const _no_breath = {title: "No Breath", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="no-breath-ex" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="no-breath-ex" flavor="An eidolon no longer needs to breathe.">No Breath (Ex)</Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Ability">The eidolon does not breathe, and is immune to effects that require breathing (such as inhaled poison). This does not give immunity to cloud or gas attacks that do not require breathing.</Pair>
</Ability>
</>};
const _spell_resistance = {title: "Spell Resistance", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 64</Link></p>
<Ability id="spell-resistance-ex" icon={["armor-upgrade"]}>
<Pair single id="spell-resistance-ex">Spell Resistance (Ex)</Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Passive Ability">An eidolon is protected against magic, gaining spell resistance equal to 11 + the summoner's level. This spell resistance does not apply to spells cast by the summoner.</Pair>
</Ability>
</>};
const _ultimate_magic = {title: "Ultimate Magic", addenda: ["4pts"], jsx: <><p><strong>Sources</strong> <Link to="/source/ultimate_magic">Ultimate Magic pg. 78</Link></p>
<Ability id="ultimate-magic-sp" icon={["magic-swirl"]}>
<Pair single id="ultimate-magic-sp" flavor="An eidolon learns to cast a powerful spell as a spell-like ability.">Ultimate Magic (Sp)</Pair>
<Pair title="Prerequisites">11th-level summoner, eidolon has Charisma 13+, <Link to="/evolution/major_magic">major magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/create_food_and_water">create food and water</Link>, <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/daylight">daylight</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/gaseous_form">gaseous form</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/major_image">major image</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link>, <Link to="/spell/tongues">tongues</Link>, or <Link to="/spell/water_breathing">water breathing</Link>.</Pair>
<Pair title="Ability">The chosen spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
</>};
export default {not_found:_not_found,basic_magic:_basic_magic,bite:_bite,bleed:_bleed,claws:_claws,climb:_climb,gills:_gills,hooves:_hooves,improved_damage:_improved_damage,improved_natural_armor:_improved_natural_armor,low_light_vision:_low_light_vision,magic_attacks:_magic_attacks,mount:_mount,pincers:_pincers,pounce:_pounce,pull:_pull,push:_push,reach:_reach,resistance:_resistance,scent:_scent,skilled:_skilled,slam:_slam,slippery:_slippery,sticky:_sticky,sting:_sting,swim:_swim,tail:_tail,tail_slap:_tail_slap,tentacle:_tentacle,unnatural_aura:_unnatural_aura,wing_buffet:_wing_buffet,ability_increase:_ability_increase,alignment_smite:_alignment_smite,channel_resistance:_channel_resistance,constrict:_constrict,energy_attacks:_energy_attacks,flight:_flight,gore:_gore,grab:_grab,head:_head,immunity:_immunity,keen_scent:_keen_scent,limbs:_limbs,minor_magic:_minor_magic,poison:_poison,rake:_rake,rend:_rend,rider_bond:_rider_bond,shadow_blend:_shadow_blend,shadow_form:_shadow_form,sickening:_sickening,trample:_trample,tremorsense:_tremorsense,trip:_trip,undead_appearance:_undead_appearance,weapon_training:_weapon_training,blindsense:_blindsense,burrow:_burrow,celestial_appearance:_celestial_appearance,damage_reduction:_damage_reduction,fiendish_appearance:_fiendish_appearance,frightful_presence:_frightful_presence,major_magic:_major_magic,sacrifice:_sacrifice,see_in_darkness:_see_in_darkness,swallow_whole:_swallow_whole,web:_web,blindsight:_blindsight,breath_weapon:_breath_weapon,dimension_door:_dimension_door,fast_healing:_fast_healing,incorporeal_form:_incorporeal_form,large:_large,lifesense:_lifesense,no_breath:_no_breath,spell_resistance:_spell_resistance,ultimate_magic:_ultimate_magic}