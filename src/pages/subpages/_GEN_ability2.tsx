import {IonRippleEffect} from '@ionic/react';
import DisplayTable from '../../components/DisplayTable';
import Link from '../../components/Link';
import Pair from '../../components/AbPair';
import Ability from '../../components/Ability';
import ScrollContainer from '../../components/ScrollContainer';
import InnerLink from '../../components/InnerLink';
import AffInfo from '../../components/AfflictionInfo';
const _evolutions = {hasJL:true,title: "Eidolon Evolutions", topLink: ["Summoner","class/summoner"], jsx: <div className="compilation"><div className="jumpList" id="ability-evolutions-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-evolutions-1-point-evolutions">1-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-evolutions-2-point-evolutions">2-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-evolutions-3-point-evolutions">3-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-evolutions-4-point-evolutions">4-Point Evolutions</InnerLink></li></ul></div><h2 id="ability-evolutions-evolutions">Evolutions</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide pg. 60</Link><br/>Each eidolon receives a number of evolution points that can be spent to give the eidolon new abilities, powers, and other upgrades. These abilities, called evolutions, can be changed whenever the summoner gains a new level, but they are otherwise set. Some evolutions require that the eidolon have a specific base form or the summoner be of a specific level before they can be chosen. A number of evolutions grant the eidolon additional natural attacks. Natural attacks listed as primary are made using the eidolon's full base attack bonus and add the eidolon's Strength modifier on damage rolls. Natural attacks listed as secondary are made using the eidolon's base attack bonus - 5 and add 1/2 the eidolon's Strength modifier on damage rolls (if positive). If the eidolon only has a single natural attack, the attack is made using its full base attack bonus and it adds 1-1/2 times its Strength modifier on damage rolls made with that attack, regardless of the attack's type.</p>
<p>Evolutions are grouped by their cost in evolution points. Evolution points cannot be saved. All of the points must be spent whenever the summoner gains a level. Unless otherwise noted, each evolution can only be selected once.</p>
<h3 id="ability-evolutions-1-point-evolutions" data-hash-target>1-Point Evolutions</h3>
<p>The following evolutions cost 1 point from the eidolon's evolution pool.</p>
<Ability id="evolutionbasicmagic-basic-magic-sp-fn1" icon={["magic-swirl"]}>
<Pair single id="evolutionbasicmagic-basic-magic-sp-fn1" flavor="An eidolon learns to cast a basic spell as a spell-like ability."><Link to="/evolution/basic_magic">⮞</Link> Basic Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-1" id="ability-evolutions-fake-fn-1" data-hash-target to="ability-evolutions-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">Eidolon has Charisma 10+</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/acid_splash">acid splash</Link>, <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/daze">daze</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/flare">flare</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/light">light</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/ray_of_frost">ray of frost</Link>, <Link to="/spell/stabilize">stabilize</Link>, or <Link to="/spell/touch_of_fatigue">touch of fatigue</Link>.</Pair>
<Pair title="Ability">This spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice. The save DC for this spell is 10 + the eidolon's Charisma modifier.</Pair>
<Pair title="At 4th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell.</Pair>
</Ability>
<Ability id="evolutionbite-bite-ex-fn2" icon={["mailed-fist"]}>
<Pair single id="evolutionbite-bite-ex-fn2"><Link to="/evolution/bite">⮞</Link> Bite (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2" id="ability-evolutions-fake-fn-2" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon's maw is full of razor-sharp teeth, giving it a <Link to="/umr/bite_attack">bite attack</Link>. This attack is a primary attack. The bite deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">If the eidolon already has a bite attack, this evolution allows it to deal 1-1/2 times its Strength modifier on damage rolls made with its bite.</Pair>
</Ability>
<Ability id="evolutionbleed-bleed-ex-fn3" icon={["mailed-fist"]}>
<Pair single id="evolutionbleed-bleed-ex-fn3" flavor="An eidolon gains the ability to inflict bleeding wounds."><Link to="/evolution/bleed">⮞</Link> Bleed (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-3" id="ability-evolutions-fake-fn-3" data-hash-target to="ability-evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Select one type of attack. Attacks of that type deal 1d6 points of <Link to="/rule/bleed">bleed</Link> damage.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a different attack. The bleed effect doesn't stack.</Pair>
</Ability>
<Ability id="evolutionclaws-claws-ex-fn2-2" icon={["mailed-fist"]}>
<Pair single id="evolutionclaws-claws-ex-fn2-2"><Link to="/evolution/claws">⮞</Link> Claws (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.2" id="ability-evolutions-fake-fn-2.2" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link></Pair>
<Pair title="Ability">An eidolon has a pair of vicious claws at the end of its limbs, giving it two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are primary attacks. The claws deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can only be applied to the <em>limbs (legs)</em> evolution once. This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
<aside><p><a href="http://paizo.com/paizo/faq/v5748nruor1fo#v5748eaic9rdk">FAQ</a> (link opens in outside browser) If you are a bipedal creature (roughly humanoid-shaped, with two arms and two legs), your claws must go on your hands; you can not assign them to any other limb or body part.</p>
<p>If you are a quadruped (or have more than four legs), you can have claws on your feet. If you have claws on all of your feet, normally you can't use all of those claw attacks on your turn unless you have a special ability such as <Link to="/umr/pounce">pounce</Link> or <Link to="/umr/rake">rake</Link>.</p>
<p>Talons are much like claws, but go on a creature's feet, usually a bipedal creature (especially a flying bipedal creature such as a <Link to="/monster/giant_eagle">giant eagle</Link> or <Link to="/monster/harpy">harpy</Link>). An ability that grants you claw attacks cannot be used as if they were talon attacks (in other words, you can't "re-skin" the ability's game mechanics so you can use it on a different limb).</p>
</aside><Ability id="evolutionclimb-climb-ex-fn2-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="evolutionclimb-climb-ex-fn2-3"><Link to="/evolution/climb">⮞</Link> Climb (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.3" id="ability-evolutions-fake-fn-2.3" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon becomes a skilled climber, gaining a climb speed equal to its base speed.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's climb speed by 20 feet.</Pair>
</Ability>
<Ability id="evolutiongills-gills-ex-fn2-4" icon={["stairs-goal"]}>
<Pair single id="evolutiongills-gills-ex-fn2-4"><Link to="/evolution/gills">⮞</Link> Gills (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.4" id="ability-evolutions-fake-fn-2.4" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon has gills and can breathe underwater indefinitely.</Pair>
</Ability>
<Ability id="evolutionhooves-hooves-ex-fn4" icon={["mailed-fist"]}>
<Pair single id="evolutionhooves-hooves-ex-fn4"><Link to="/evolution/hooves">⮞</Link> Hooves (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4" id="ability-evolutions-fake-fn-4" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> evolution, or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon has a pair of sharp hooves at the end of its limbs, giving it two <Link to="/umr/hoof_attack">hoof attacks</Link>. These attacks are secondary attacks. The hooves deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can only be applied to the <em>limbs (legs)</em> evolution once. This evolution can be selected more than once, but the eidolon must possess an equal number of <em>limbs</em> evolutions.</Pair>
</Ability>
<Ability id="evolutionimproveddamage-improved-damage-ex-fn2-5" icon={["upgrade"]}>
<Pair single id="evolutionimproveddamage-improved-damage-ex-fn2-5" flavor="One of the eidolon's natural attacks is particularly deadly."><Link to="/evolution/improved_damage">⮞</Link> Improved Damage (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.5" id="ability-evolutions-fake-fn-2.5" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Select one natural attack form and <Link to="/misc/increase_the_damage_die">increase the damage die</Link> type by one step.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="evolutionimprovednaturalarmor-improved-natural-armor-ex-fn2-6" icon={["armor-upgrade"]}>
<Pair single id="evolutionimprovednaturalarmor-improved-natural-armor-ex-fn2-6"><Link to="/evolution/improved_natural_armor">⮞</Link> Improved Natural Armor (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.6" id="ability-evolutions-fake-fn-2.6" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">An eidolon's hide grows thick fur, rigid scales, or bony plates, giving it a +2 bonus to its natural armor.</Pair>
<Pair title="Special">This evolution can be taken once at 1st level, and again at 5th, 10th, 15th, and 20th.</Pair>
</Ability>
<Ability id="evolutionlowlightvision-low-light-vision-ex-fn4-2" icon={["stairs-goal"]}>
<Pair single id="evolutionlowlightvision-low-light-vision-ex-fn4-2"><Link to="/evolution/low_light_vision">⮞</Link> Low-Light Vision (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.2" id="ability-evolutions-fake-fn-4.2" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon gains low-light vision, enabling it to see twice as far as a human in conditions of dim light.</Pair>
</Ability>
<Ability id="evolutionmagicattacks-magic-attacks-su-fn2-7" icon={["upgrade"]}>
<Pair single id="evolutionmagicattacks-magic-attacks-su-fn2-7"><Link to="/evolution/magic_attacks">⮞</Link> Magic Attacks (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.7" id="ability-evolutions-fake-fn-2.7" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">An eidolon is infused with magic, allowing it to treat all of its natural attacks as if they were magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="Special">If the summoner is 10th level or higher, all of the eidolon's weapons are treated as the alignment of the eidolon for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="evolutionmount-mount-ex-fn2-8" icon={["stairs-goal"]}>
<Pair single id="evolutionmount-mount-ex-fn2-8"><Link to="/evolution/mount">⮞</Link> Mount (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.8" id="ability-evolutions-fake-fn-2.8" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">Eidolon is at least one size category larger than its rider; must be of the aquatic, quadruped, or serpentine base form</Pair>
<Pair title="Ability">An eidolon is properly skilled and formed to serve as a <Link to="/rule/combat_trained">combat-trained</Link> mount.</Pair>
</Ability>
<Ability id="evolutionpincers-pincers-ex-fn2-9" icon={["mailed-fist"]}>
<Pair single id="evolutionpincers-pincers-ex-fn2-9"><Link to="/evolution/pincers">⮞</Link> Pincers (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.9" id="ability-evolutions-fake-fn-2.9" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> (arms), or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon grows a large pincers at the end of one pair of its limbs, giving it two pincer attacks. These attacks are secondary attacks. The pincers deal 1d6 points of damage (1d8 if Large, 2d6 if Huge). Eidolons with the <Link to="/evolution/grab">grab</Link> evolution linked to pincers gain a +2 bonus on CMB checks made to grapple.</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
<Ability id="evolutionpounce-pounce-ex-fn2-10" icon={["mailed-fist"]}>
<Pair single id="evolutionpounce-pounce-ex-fn2-10"><Link to="/evolution/pounce">⮞</Link> Pounce (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.10" id="ability-evolutions-fake-fn-2.10" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">Quadruped base form</Pair>
<Pair title="Ability">An eidolon gains quick reflexes, allowing it to make a full attack after a charge.</Pair>
</Ability>
<Ability id="evolutionpull-pull-ex-fn2-11" icon={["mailed-fist"]}>
<Pair single id="evolutionpull-pull-ex-fn2-11" flavor="An eidolon gains the ability to pull creatures closer with a successful attack."><Link to="/evolution/pull">⮞</Link> Pull (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-2.11" id="ability-evolutions-fake-fn-2.11" data-hash-target to="ability-evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/reach">Reach</Link> of 10 feet or more</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the target of the attack is pulled 5 feet closer to the eidolon.</p>
<p>This ability only works on creatures of a size equal to or smaller than the eidolon. Creatures pulled in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="evolutionpush-push-ex-fn5" icon={["mailed-fist"]}>
<Pair single id="evolutionpush-push-ex-fn5" flavor="An eidolon gains the ability to push creatures away with a successful attack."><Link to="/evolution/push">⮞</Link> Push (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5" id="ability-evolutions-fake-fn-5" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the target of the attack is pushed 5 feet directly away from the eidolon.</p>
<p>This ability only works on creatures of a size equal to or smaller than the eidolon. Creatures pushed in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="evolutionreach-reach-ex-fn5-2" icon={["mailed-fist"]}>
<Pair single id="evolutionreach-reach-ex-fn5-2" flavor="One of an eidolon's attacks is capable of striking at foes at a distance."><Link to="/evolution/reach">⮞</Link> Reach (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.2" id="ability-evolutions-fake-fn-5.2" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">Pick one attack. The eidolon's reach with that attack increases by 5 feet.</Pair>
</Ability>
<Ability id="evolutionresistance-resistance-ex-fn5-3" icon={["armor-upgrade"]}>
<Pair single id="evolutionresistance-resistance-ex-fn5-3"><Link to="/evolution/resistance">⮞</Link> Resistance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.3" id="ability-evolutions-fake-fn-5.3" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Passive Ability"><p>An eidolon's form takes on a resiliency to one particular energy type, which is usually reflected in its physical body (ashen hide for fire, icy breath for cold, and so on).</p>
<p>Pick one energy type (acid, cold, electricity, fire, or sonic). The eidolon gains <Link to="/umr/resist">resist</Link> 5 against that energy type.</p>
</Pair>
<Pair title="At 5th Level">The resistance becomes 10.</Pair>
<Pair title="At 10th Level">The resistance becomes 15.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different energy type.</Pair>
</Ability>
<Ability id="evolutionscent-scent-ex-fn5-4" icon={["stairs-goal"]}>
<Pair single id="evolutionscent-scent-ex-fn5-4" flavor="An eidolon's sense of smell becomes quite acute."><Link to="/evolution/scent">⮞</Link> Scent (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.4" id="ability-evolutions-fake-fn-5.4" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/scent">scent</Link> special quality, allowing it to detect opponents within 30 feet by sense of smell. If the opponent is upwind, the range increases to 60 feet; if downwind, it drops to 15 feet. Strong scents can be detected at twice the normal range.</p>
<p><em>Scent</em> does not allow the eidolon to precisely locate the creature, only to detect its presence. It can detect the direction with a <strong className="hl">move action</strong>. The eidolon can pinpoint the creature's location if it is within 5 feet. The eidolon can use <em>scent</em> to track creatures.</p>
</Pair>
</Ability>
<Ability id="evolutionskilled-skilled-ex-fn5-5" icon={["upgrade"]}>
<Pair single id="evolutionskilled-skilled-ex-fn5-5"><Link to="/evolution/skilled">⮞</Link> Skilled (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.5" id="ability-evolutions-fake-fn-5.5" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Passive Ability">An eidolon becomes especially adept at a specific skill, gaining a +8 racial bonus on that skill.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different skill.</Pair>
</Ability>
<Ability id="evolutionslam-slam-ex-fn5-6" icon={["mailed-fist"]}>
<Pair single id="evolutionslam-slam-ex-fn5-6"><Link to="/evolution/slam">⮞</Link> Slam (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.6" id="ability-evolutions-fake-fn-5.6" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/limbs">Limbs</Link> (arms) evolution, or its base form has <Link to="/evolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">An eidolon can deliver a devastating <Link to="/umr/slam_attack">slam attack</Link>. This attack is a primary attack. The slam deals 1d8 points of damage (2d6 if Large, 2d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>limbs</em> evolution.</Pair>
</Ability>
<Ability id="evolutionslippery-slippery-ex-fn3-2" icon={["armor-upgrade","upgrade"]}>
<Pair single id="evolutionslippery-slippery-ex-fn3-2"><Link to="/evolution/slippery">⮞</Link> Slippery (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-3.2" id="ability-evolutions-fake-fn-3.2" data-hash-target to="ability-evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">Due to its slimy hide or a slick exoskeleton, the eidolon is especially slippery. The eidolon gains a +4 bonus to CMD to escape a grapple and on Escape Artist checks.</Pair>
</Ability>
<Ability id="evolutionsticky-sticky-ex-fn3-3" icon={["upgrade"]}>
<Pair single id="evolutionsticky-sticky-ex-fn3-3"><Link to="/evolution/sticky">⮞</Link> Sticky (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-3.3" id="ability-evolutions-fake-fn-3.3" data-hash-target to="ability-evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">The eidolon is especially sticky, whether from a coating of adhesive slime, partially congealed blood, or tiny barbed spines. The eidolon gains a +4 bonus on combat maneuver checks to initiate or maintain a grapple.</Pair>
</Ability>
<Ability id="evolutionsting-sting-ex-fn5-7" icon={["mailed-fist"]}>
<Pair single id="evolutionsting-sting-ex-fn5-7"><Link to="/evolution/sting">⮞</Link> Sting (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.7" id="ability-evolutions-fake-fn-5.7" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/tail">Tail</Link></Pair>
<Pair title="Ability">An eidolon possesses a long, barbed stinger at the end of its tail, granting it a <Link to="/umr/sting_attack">sting attack</Link>. This attack is a primary attack. The sting deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>tail</em> evolution.</Pair>
</Ability>
<Ability id="evolutionswim-swim-ex-fn5-8" icon={["stairs-goal","upgrade"]}>
<Pair single id="evolutionswim-swim-ex-fn5-8"><Link to="/evolution/swim">⮞</Link> Swim (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.8" id="ability-evolutions-fake-fn-5.8" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon gains webbed hands, feet, or powerful flippers, giving it a swim speed equal to its base speed. This evolution does not give the eidolon the ability to breathe underwater.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's swim speed by 20 feet.</Pair>
</Ability>
<Ability id="evolutiontail-tail-ex-fn5-9" icon={["stairs-goal","upgrade"]}>
<Pair single id="evolutiontail-tail-ex-fn5-9"><Link to="/evolution/tail">⮞</Link> Tail (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.9" id="ability-evolutions-fake-fn-5.9" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon grows a long, powerful tail. This grants it a +2 racial bonus on Acrobatics checks made to balance on a surface.</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="evolutiontailslap-tail-slap-ex-fn5-10" icon={["mailed-fist"]}>
<Pair single id="evolutiontailslap-tail-slap-ex-fn5-10"><Link to="/evolution/tail_slap">⮞</Link> Tail Slap (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.10" id="ability-evolutions-fake-fn-5.10" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/tail">Tail</Link></Pair>
<Pair title="Ability">An eidolon can use its tail to bash nearby foes, granting it a <Link to="/umr/tail_slap_attack">tail slap attack</Link>. This attack is a secondary attack. The tail slap deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, but the eidolon must possess an equal number of the <em>tail</em> evolution.</Pair>
</Ability>
<Ability id="evolutiontentacle-tentacle-ex-fn5-11" icon={["mailed-fist"]}>
<Pair single id="evolutiontentacle-tentacle-ex-fn5-11"><Link to="/evolution/tentacle">⮞</Link> Tentacle (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.11" id="ability-evolutions-fake-fn-5.11" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon possesses a long, sinuous tentacle, granting it a <Link to="/umr/tentacle_attack">tentacle attack</Link>. This attack is a secondary attack. The tentacle attack deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="evolutionunnaturalaura-unnatural-aura-su-fn4-3" icon={["armor-upgrade"]}>
<Pair single id="evolutionunnaturalaura-unnatural-aura-su-fn4-3"><Link to="/evolution/unnatural_aura">⮞</Link> Unnatural Aura (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.3" id="ability-evolutions-fake-fn-4.3" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">An eidolon is obviously of unnatural origin. Normal animals do not willingly approach the eidolon unless the animal's master makes a DC 25 Handle Animal, Ride, or wild empathy check.</Pair>
</Ability>
<Ability id="evolutionwingbuffet-wing-buffet-ex-fn5-12" icon={["mailed-fist"]}>
<Pair single id="evolutionwingbuffet-wing-buffet-ex-fn5-12"><Link to="/evolution/wing_buffet">⮞</Link> Wing Buffet (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.12" id="ability-evolutions-fake-fn-5.12" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/flight">Flight</Link> (with wings)</Pair>
<Pair title="Ability">An eidolon learns to use its wings to batter foes, granting it two wing buffet attacks. These attacks are secondary attacks. The wing buffets deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
</Ability>
<h3 id="ability-evolutions-2-point-evolutions" data-hash-target>2-Point Evolutions</h3>
<p>The following evolutions cost 2 points from the eidolon's evolution pool.</p>
<Ability id="evolutionabilityincrease-ability-increase-ex-fn5-13" icon={["upgrade"]}>
<Pair single id="evolutionabilityincrease-ability-increase-ex-fn5-13" flavor="An eidolon grows larger muscles, gains faster reflexes, achieves greater intelligence, or acquires another increase to one of its abilities."><Link to="/evolution/ability_increase">⮞</Link> Ability Increase (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.13" id="ability-evolutions-fake-fn-5.13" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Passive Ability">Increase one of the eidolon's ability scores by +2.</Pair>
<Pair title="Special"><p>This evolution can be selected more than once. It can only be applied once to an individual ability score, plus 1 additional time for every 6 levels the summoner possesses.</p>
<p>The <em>ability increase</em> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a <Link to="/evolution/large">Large or Huge</Link> eidolon.</p>
</Pair>
</Ability>
<Ability id="evolutionalignmentsmite-alignment-smite-su-fn6" icon={["upgrade"]}>
<Pair single id="evolutionalignmentsmite-alignment-smite-su-fn6"><Link to="/evolution/alignment_smite">⮞</Link> Alignment Smite (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-6" id="ability-evolutions-fake-fn-6" data-hash-target to="ability-evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level summoner, and the summoner cannot be evil or true neutral</Pair>
<Pair title="Choice">Choose a single alignment component that opposes one of the summoner's own.</Pair>
<Pair title="Swift Action"><p>Once per day, the eidolon chooses one target within sight. If this target's alignment matches that chosen for this ability, the eidolon deals an additional +1d6 points of damage with one of its natural weapons.</p>
<p>This attack is treated as good-aligned for the purposes of overcoming damage reduction. The alignment smite persists until the target is dead or the eidolon is dismissed.</p>
</Pair>
<Pair title="At 10th Level">The summoner may spend 1 additional evolution point to allow the eidolon a second daily use of this ability.</Pair>
</Ability>
<Ability id="evolutionchannelresistance-channel-resistance-ex-fn4-4" icon={["armor-upgrade"]}>
<Pair single id="evolutionchannelresistance-channel-resistance-ex-fn4-4" flavor={<>An eidolon becomes less easily affected by the <Link to="/ability/channel_energy">channel energy</Link> ability of clerics or paladins.</>}><Link to="/evolution/channel_resistance">⮞</Link> Channel Resistance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.4" id="ability-evolutions-fake-fn-4.4" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/undead_appearance">Undead appearance</Link></Pair>
<Pair title="Passive Ability">The eidolon gains a +2 bonus on any saves that are made to resist the effects of channel energy, including effects that rely on the use of channel energy (such as the <Link to="/feat/command_undead">Command Undead</Link> feat).</Pair>
<Pair title="At 7th Level">This bonus can be increased to +4 by spending 2 additional evolution points.</Pair>
</Ability>
<Ability id="evolutionconstrict-constrict-ex-fn5-14" icon={["upgrade"]}>
<Pair single id="evolutionconstrict-constrict-ex-fn5-14" flavor="An eidolon gains powerful muscles that allow it to crush those it grapples."><Link to="/evolution/constrict">⮞</Link> Constrict (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-5.14" id="ability-evolutions-fake-fn-5.14" data-hash-target to="ability-evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/grab">Grab</Link>, serpentine base form</Pair>
<Pair title="Ability">Whenever the eidolon successfully grapples a foe using the <em>grab</em> evolution, it deals additional damage equal to the amount of damage dealt by the attack used by the <em>grab</em> evolution.</Pair>
</Ability>
<Ability id="evolutionenergyattacks-energy-attacks-su-fn7" icon={["upgrade"]}>
<Pair single id="evolutionenergyattacks-energy-attacks-su-fn7" flavor="An eidolon's attacks become charged with energy."><Link to="/evolution/energy_attacks">⮞</Link> Energy Attacks (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7" id="ability-evolutions-fake-fn-7" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level summoner</Pair>
<Pair title="Choice">Pick one energy type: acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">All of the eidolon's natural attacks deal 1d6 points of energy damage of the chosen type on a successful hit.</Pair>
</Ability>
<Ability id="evolutionflight-flight-ex-or-su-fn7-2" icon={["stairs-goal"]}>
<Pair single id="evolutionflight-flight-ex-or-su-fn7-2"><Link to="/evolution/flight">⮞</Link> Flight (Ex or Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.2" id="ability-evolutions-fake-fn-7.2" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level summoner</Pair>
<Pair title="Ability"><p>An eidolon grows large wings, like those of a bat, bird, insect, or dragon, gaining the ability to fly. The eidolon gains a fly speed equal to its base speed.</p>
<p>The eidolon's maneuverability depends on it size. Medium or smaller eidolons have good maneuverability. Large eidolons have average maneuverability, while Huge eidolons have poor maneuverability.</p>
<p>For 2 additional evolution points, the eidolon flies by means of magic. It loses its wings, but its maneuverability increases to perfect. Flying via magic means makes this a supernatural ability.</p>
</Pair>
<Pair title="Special">The eidolon's fly speed can be increased by spending additional evolution points, gaining a 20-foot increase to fly speed for each additional point spent.</Pair>
</Ability>
<Ability id="evolutiongore-gore-ex-fn7-3" icon={["stairs-goal"]}>
<Pair single id="evolutiongore-gore-ex-fn7-3"><Link to="/evolution/gore">⮞</Link> Gore (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.3" id="ability-evolutions-fake-fn-7.3" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon grows a number of horns on its head, giving it a <Link to="/umr/gore_attack">gore attack</Link>. This attack is a primary attack. The gore deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
</Ability>
<Ability id="evolutiongrab-grab-ex-fn7-4" icon={["mailed-fist","upgrade"]}>
<Pair single id="evolutiongrab-grab-ex-fn7-4"><Link to="/evolution/grab">⮞</Link> Grab (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.4" id="ability-evolutions-fake-fn-7.4" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">Must have a bite, claw, pincers, slam, tail slap, or tentacle attack</Pair>
<Pair title="Ability">An eidolon becomes adept at grappling foes, gaining the <Link to="/umr/grab">grab</Link> ability. Pick bite, claw, pincers, slam, tail slap, or tentacle attacks. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the eidolon <Link to="/rule/grapple">grapples</Link> the target.</Pair>
<Pair title="Special">This ability only works on creatures of a size one category smaller than the eidolon or smaller. Eidolons with this evolution receive a +4 bonus on CMB checks made to grapple.</Pair>
</Ability>
<Ability id="evolutionhead-head-ex-fn4-5" icon={["stairs-goal"]}>
<Pair single id="evolutionhead-head-ex-fn4-5"><Link to="/evolution/head">⮞</Link> Head (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.5" id="ability-evolutions-fake-fn-4.5" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon grows an additional head. The eidolon does not gain any additional natural attacks for the additional head, but the additional head does allow the eidolon to take other evolutions that add an additional attack to a head (such as a <Link to="/evolution/bite">bite</Link>, <Link to="/evolution/gore">gore</Link>, or <Link to="/umr/breath_weapon">breath weapon</Link>).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="evolutionimmunity-immunity-su-fn7-5" icon={["armor-upgrade"]}>
<Pair single id="evolutionimmunity-immunity-su-fn7-5" flavor="An eidolon's body becomes extremely resilient to one energy type."><Link to="/evolution/immunity">⮞</Link> Immunity (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.5" id="ability-evolutions-fake-fn-7.5" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level summoner</Pair>
<Pair title="Passive Ability">Pick one energy type: acid, cold, electricity, fire, or sonic. The eidolon gains <Link to="/umr/immunity">immunity</Link> to that energy type.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time it applies to a different energy type.</Pair>
</Ability>
<Ability id="evolutionkeenscent-keen-scent-ex-fn4-6" icon={["upgrade"]}>
<Pair single id="evolutionkeenscent-keen-scent-ex-fn4-6"><Link to="/evolution/keen_scent">⮞</Link> Keen Scent (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.6" id="ability-evolutions-fake-fn-4.6" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/gills">Gills</Link>, <Link to="/evolution/scent">scent</Link></Pair>
<Pair title="Ability">An eidolon's sense of smell becomes even more acute. The eidolon can notice other creatures by scent in a 180-foot radius underwater and can detect blood in the water at ranges of up to a mile.</Pair>
</Ability>
<Ability id="evolutionlimbs-limbs-ex-fn7-6" icon={["stairs-goal","upgrade"]}>
<Pair single id="evolutionlimbs-limbs-ex-fn7-6"><Link to="/evolution/limbs">⮞</Link> Limbs (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.6" id="ability-evolutions-fake-fn-7.6" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability"><p>An eidolon grows an additional pair of limbs. These limbs can take one of two forms.</p>
<p>They can be made into legs, complete with feet. Each pair of legs increases the eidolon's base speed by 10 feet.</p>
<p>Alternatively, they can be made into arms, complete with hands. The eidolon does not gain any additional natural attacks for an additional pair of arms, but it can take other evolutions that add additional attacks (such as <Link to="/evolution/claws">claws</Link> or a <Link to="/evolution/slam">slam</Link>). Arms that have hands can be used to wield weapons, if the eidolon is proficient.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="evolutionminormagic-minor-magic-sp-fn4-7" icon={["magic-swirl"]}>
<Pair single id="evolutionminormagic-minor-magic-sp-fn4-7" flavor="An eidolon learns to cast a minor spell as a spell-like ability."><Link to="/evolution/minor_magic">⮞</Link> Minor Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.7" id="ability-evolutions-fake-fn-4.7" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level summoner, eidolon has Charisma 11+, <Link to="/evolution/basic_magic">basic magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/burning_hands">burning hands</Link>, <Link to="/spell/comprehend_languages">comprehend languages</Link>, <Link to="/spell/cure_light_wounds">cure light wounds</Link>, <Link to="/spell/detect_evil">detect chaos/evil/good/law</Link>, <Link to="/spell/magic_missile">magic missile</Link>, <Link to="/spell/obscuring_mist">obscuring mist</Link>, <Link to="/spell/silent_image">silent image</Link>, <Link to="/spell/vanish">vanish</Link> (self only), or <Link to="/spell/ventriloquism">ventriloquism</Link>.</Pair>
<Pair title="Ability">The chosen spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="At 7th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
<Ability id="evolutionpoison-poison-ex-fn7-7" icon={["mailed-fist"]}>
<Pair single id="evolutionpoison-poison-ex-fn7-7"><Link to="/evolution/poison">⮞</Link> Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.7" id="ability-evolutions-fake-fn-7.7" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level summoner, eidolon has a bite or sting attack</Pair>
<Pair title="Ability"><p>An eidolon secretes toxic venom, gaining a poison attack. Pick one bite or sting attack. Whenever the selected attack hits, the target is poisoned.</p>
<AffInfo type="Natural attack-injury" save="Fort 10 + 1/2 the eidolon's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p">Eidolon poison</AffInfo>
<p>For 2 additional evolution points, this poison deals Constitution damage instead. This poison can be used no more than once per round.</p>
</Pair>
</Ability>
<Ability id="evolutionrake-rake-ex-fn7-8" icon={["mailed-fist"]}>
<Pair single id="evolutionrake-rake-ex-fn7-8"><Link to="/evolution/rake">⮞</Link> Rake (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.8" id="ability-evolutions-fake-fn-7.8" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level summoner, eidolon has quadruped base form</Pair>
<Pair title="Ability">An eidolon grows dangerous claws on its feet, allowing it to make 2 <Link to="/umr/rake">rake</Link> attacks on foes it is grappling. These attacks are <Link to="/umr/primary_attack">primary attacks</Link>. The eidolon receives these additional attacks each time it succeeds on a <Link to="/rule/grapple">grapple</Link> check against the target. These rake attacks deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution counts as one natural attack toward the eidolon's maximum.</Pair>
</Ability>
<Ability id="evolutionrend-rend-ex-fn7-9" icon={["mailed-fist"]}>
<Pair single id="evolutionrend-rend-ex-fn7-9"><Link to="/evolution/rend">⮞</Link> Rend (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.9" id="ability-evolutions-fake-fn-7.9" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level summoner, <Link to="/evolution/claws">claws</Link></Pair>
<Pair title="Ability">An eidolon learns to rip and tear the flesh of those it attacks with its claws, gaining the <Link to="/umr/rend">rend</Link> ability. Whenever the eidolon makes two successful claw attacks against the same target in 1 round, its claws latch onto the flesh and deal extra damage. This damage is equal to the damage dealt by one claw attack plus 1-1/2 times the eidolon's Strength modifier.</Pair>
</Ability>
<Ability id="evolutionriderbond-rider-bond-ex-fn8" icon={["upgrade","stairs-goal"]}>
<Pair single id="evolutionriderbond-rider-bond-ex-fn8" flavor="You and your eidolon share an empathic connection while you ride it."><Link to="/evolution/rider_bond">⮞</Link> Rider Bond (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-8" id="ability-evolutions-fake-fn-8" data-hash-target to="ability-evolutions-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/mount">Mount</Link></Pair>
<Pair title="Passive Ability">You gain a bonus on Ride checks equal to <Link to="/misc/half">half</Link> your summoner level and you also gain <Link to="/feat/mounted_combat">Mounted Combat</Link> as a bonus feat when mounted on your eidolon.</Pair>
</Ability>
<Ability id="evolutionshadowblend-shadow-blend-su-fn9" icon={["armor-upgrade"]}>
<Pair single id="evolutionshadowblend-shadow-blend-su-fn9"><Link to="/evolution/shadow_blend">⮞</Link> Shadow Blend (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-9" id="ability-evolutions-fake-fn-9" data-hash-target to="ability-evolutions-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Passive Ability">In any condition of <Link to="/rule/illumination">illumination</Link> other than bright light, the eidolon disappears into the shadows, giving it <Link to="/rule/concealment">concealment</Link> (20% miss chance). If it has the <Link to="/evolution/shadow_form">shadow form</Link> evolution, it instead gains total concealment (50% miss chance). The eidolon can suspend or resume this ability as a <strong className="hl">free action</strong>.</Pair>
</Ability>
<Ability id="evolutionshadowform-shadow-form-su-fn9-2" icon={["armor-upgrade","upgrade","broken-shield"]}>
<Pair single id="evolutionshadowform-shadow-form-su-fn9-2" flavor="The eidolon's body becomes shadowy and more indistinct."><Link to="/evolution/shadow_form">⮞</Link> Shadow Form (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-9.2" id="ability-evolutions-fake-fn-9.2" data-hash-target to="ability-evolutions-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Ability">This shadow form grants the eidolon constant <Link to="/rule/concealment">concealment</Link> (20% miss chance), and its melee attacks affect incorporeal creatures as if it had the <Link to="/magic-enh/ghost_touch">ghost touch</Link> weapon property. The eidolon's melee attacks deal only half damage to corporeal creatures.</Pair>
</Ability>
<Ability id="evolutionsickening-sickening-ex-fn3-4" icon={["armor-upgrade","aura"]}>
<Pair single id="evolutionsickening-sickening-ex-fn3-4" flavor="The eidolon's smell or appearance is so offensive it sickens nearby creatures."><Link to="/evolution/sickening">⮞</Link> Sickening (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-3.4" id="ability-evolutions-fake-fn-3.4" data-hash-target to="ability-evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">Any living creature except its summoner that approaches within 20 feet or begins its turn in that area is <Link to="/misc/sickened">sickened</Link> for 1 round unless it succeeds at a Fortitude save (DC = 10 + 1/2 the eidolon's HD + its Con modifier). Creatures that successfully save cannot be affected by the same eidolon's sickening effect for 24 hours.</Pair>
</Ability>
<Ability id="evolutiontrample-trample-ex-fn7-10" icon={["mailed-fist"]}>
<Pair single id="evolutiontrample-trample-ex-fn7-10"><Link to="/evolution/trample">⮞</Link> Trample (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.10" id="ability-evolutions-fake-fn-7.10" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">Biped or quadruped base form</Pair>
<Pair title="Full-Round Action"><p>An eidolon gains the ability to crush its foes underfoot, gaining the <Link to="/umr/trample">trample</Link> ability. The eidolon can overrun any creature that is at least one size smaller than itself. This works like the <Link to="/rule/overrun">overrun</Link> combat maneuver, but the eidolon does not need to make a check, it merely has to move over opponents in its path. The creatures take 1d6 points of damage (1d8 if Large, 2d6 if Huge), plus 1-1/2 times the eidolon's Strength modifier.</p>
<p>Targets of the trample can make attacks of opportunity at a -4 penalty. If a target forgoes the attack of opportunity, it can make a Reflex save for half damage. The DC of this save is 10 + 1/2 the eidolon's HD + the eidolon's Strength modifier.</p>
<p>A trampling eidolon can only deal trampling damage to a creature once per round.</p>
</Pair>
</Ability>
<Ability id="evolutiontremorsense-tremorsense-ex-fn7-11" icon={["stairs-goal"]}>
<Pair single id="evolutiontremorsense-tremorsense-ex-fn7-11"><Link to="/evolution/tremorsense">⮞</Link> Tremorsense (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-7.11" id="ability-evolutions-fake-fn-7.11" data-hash-target to="ability-evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level summoner</Pair>
<Pair title="Ability">An eidolon becomes attuned to vibrations in the ground, gaining <Link to="/umr/tremorsense">tremorsense</Link> out to a range of 30 feet. This works like the <Link to="/evolution/blindsense">blindsense</Link> evolution, but only if both the eidolon and the creature to be pinpointed are in contact with the ground.</Pair>
</Ability>
<Ability id="evolutiontrip-trip-ex-fn10" icon={["stairs-goal"]}>
<Pair single id="evolutiontrip-trip-ex-fn10"><Link to="/evolution/trip">⮞</Link> Trip (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10" id="ability-evolutions-fake-fn-10" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/evolution/bite">Bite</Link></Pair>
<Pair title="Ability">An eidolon becomes adept at knocking foes to the ground with its bite, granting it a <Link to="/rule/trip">trip</Link> attack. Whenever the eidolon makes a successful bite attack of the selected type, it can attempt a free combat maneuver check. If successful, the target is knocked <Link to="/rule/prone">prone</Link>. If the check fails, the eidolon is not tripped in return.</Pair>
<Pair title="Special">This ability only works on creatures of a size equal to or smaller than the eidolon.</Pair>
</Ability>
<Ability id="evolutionundeadappearance-undead-appearance-ex-fn4-8" icon={["broken-shield","upgrade"]}>
<Pair single id="evolutionundeadappearance-undead-appearance-ex-fn4-8" flavor="An eidolon appears as an undead creature, and mimics some of an undead creature's abilities and weaknesses."><Link to="/evolution/undead_appearance">⮞</Link> Undead Appearance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-4.8" id="ability-evolutions-fake-fn-4.8" data-hash-target to="ability-evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Passive Ability">Negative energy heals the eidolon, and positive energy (including a cleric's <Link to="/ability/channel_energy">channel energy</Link> ability) harms it. Spells and effects that target undead or have specific effects against undead (such as <Link to="/spell/command_undead">Command Undead</Link>, <Link to="/spell/halt_undead">halt undead</Link>, and <Link to="/spell/searing_light">searing light</Link>) affect the eidolon as if it were undead. The eidolon gains a +2 bonus on saves against disease, exhaustion, fatigue, paralysis, poison, sleep effects, and stunning.</Pair>
<Pair title="At 7th Level">This bonus on saves can be increased to +4 by spending 2 additional evolution points.</Pair>
<Pair title="At 12th Level">This protection can be increased to immunity against these attacks by spending 2 additional evolution points (the summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade).</Pair>
<Pair title="Special">Although the eidolon appears undead, it is still an outsider.</Pair>
</Ability>
<Ability id="evolutionweapontraining-weapon-training-ex-fn10-2" icon={["mailed-fist"]}>
<Pair single id="evolutionweapontraining-weapon-training-ex-fn10-2"><Link to="/evolution/weapon_training">⮞</Link> Weapon Training (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.2" id="ability-evolutions-fake-fn-10.2" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">An eidolon learns to use a weapon, gaining <Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link> as a bonus feat.</Pair>
<Pair title="Special">If 2 additional evolution points are spent, it gains proficiency with all martial weapons as well.</Pair>
</Ability>
<h3 id="ability-evolutions-3-point-evolutions" data-hash-target>3-Point Evolutions</h3>
<p>The following evolutions cost 3 points from the eidolon's evolution pool.</p>
<Ability id="evolutionblindsense-blindsense-ex-fn10-3" icon={["stairs-goal"]}>
<Pair single id="evolutionblindsense-blindsense-ex-fn10-3"><Link to="/evolution/blindsense">⮞</Link> Blindsense (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.3" id="ability-evolutions-fake-fn-10.3" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon's senses become incredibly acute, giving it <Link to="/umr/blindsense">blindsense</Link> out to a range of 30 feet. This ability allows the eidolon to pinpoint the location of creatures that it cannot see without having to make a Perception check, but such creatures still have total <Link to="/rule/concealment">concealment</Link> from the eidolon.</Pair>
<Pair title="Special">Visibility still affects the eidolon's movement and it is still denied its Dexterity bonus to Armor Class against attacks from creatures it cannot see.</Pair>
</Ability>
<Ability id="evolutionburrow-burrow-ex-fn10-4" icon={["stairs-goal"]}>
<Pair single id="evolutionburrow-burrow-ex-fn10-4"><Link to="/evolution/burrow">⮞</Link> Burrow (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.4" id="ability-evolutions-fake-fn-10.4" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon grows thick and gnarled claws, allowing it to move through the earth. The eidolon gains a burrow speed equal to 1/2 its base speed. It can use this speed to move through dirt, clay, sand, and earth. It does not leave a hole behind, nor is its passage marked on the surface.</Pair>
</Ability>
<Ability id="evolutioncelestialappearance-celestial-appearance-ex-fn6-2" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="evolutioncelestialappearance-celestial-appearance-ex-fn6-2" flavor="The eidolon appears as a celestial creature and manifests some of the abilities of a celestial."><Link to="/evolution/celestial_appearance">⮞</Link> Celestial Appearance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-6.2" id="ability-evolutions-fake-fn-6.2" data-hash-target to="ability-evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">The summoner must be good-aligned</Pair>
<Pair title="Passive Ability">Spells and effects that target creatures with the good subtype or have specific effects against such creatures affect the eidolon as if it were a celestial. The eidolon gains a +2 bonus on saves against disease, petrification, poison, and electricity spells and effects. It also gains spell resistance equal to 5 + its HD against spells with the evil descriptor.</Pair>
<Pair title="At 7th Level">By spending 2 additional evolution points, this bonus on saves is increased to +4 and the spell resistance is extended to affect any spells and effects from evil creatures.</Pair>
<Pair title="At 12th Level">By spending 2 additional evolution points, this protection is increased to immunity against these attacks and the spell resistance is increased to 11 + its HD (the summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade).</Pair>
</Ability>
<Ability id="evolutiondamagereduction-damage-reduction-su-fn10-5" icon={["armor-upgrade"]}>
<Pair single id="evolutiondamagereduction-damage-reduction-su-fn10-5" flavor="An eidolon's body becomes resistant to harm, granting it damage reduction."><Link to="/evolution/damage_reduction">⮞</Link> Damage Reduction (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.5" id="ability-evolutions-fake-fn-10.5" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Passive Ability">Choose one alignment: chaotic, evil, good, or lawful. The eidolon gains DR 5 that can be bypassed by weapons that possess the chosen alignment. The alignment must be opposite to one of the alignments possessed by the eidolon.</Pair>
<Pair title="At 12th Level">This protection can be increased to DR 10 by spending 2 additional evolution points.</Pair>
</Ability>
<Ability id="evolutionfiendishappearance-fiendish-appearance-ex-fn3-5" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="evolutionfiendishappearance-fiendish-appearance-ex-fn3-5" flavor="The eidolon appears as a fiendish creature and manifests some of the abilities of a fiend."><Link to="/evolution/fiendish_appearance">⮞</Link> Fiendish Appearance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-3.5" id="ability-evolutions-fake-fn-3.5" data-hash-target to="ability-evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">The summoner must be evil-aligned</Pair>
<Pair title="Passive Ability">Spells and effects that target creatures with the evil subtype or have specific effects against such creatures affect the eidolon as if it had that subtype. The eidolon gains a +2 bonus on saving throws against acid, disease, fire, and poison spells and effects. It also gains an amount of spell resistance equal to 5 + its HD against spells with the good descriptor.</Pair>
<Pair title="At 7th Level">By spending 2 additional evolution points, the summoner increases the bonus on saving throws to +4 and extends the spell resistance to affect any spells and spell-like abilities cast by good creatures.</Pair>
<Pair title="At 12th Level">By spending 2 additional evolution points, the eidolon gains immunity to acid, disease, fire, and poison. Its spell resistance increases to an amount of equal to 11 + its HD. (The summoner must pay for the 7th-level upgrade before paying for this 12th-level upgrade.)</Pair>
</Ability>
<Ability id="evolutionfrightfulpresence-frightful-presence-ex-fn10-6" icon={["armor-downgrade"]}>
<Pair single id="evolutionfrightfulpresence-frightful-presence-ex-fn10-6"><Link to="/evolution/frightful_presence">⮞</Link> Frightful Presence (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.6" id="ability-evolutions-fake-fn-10.6" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Ability">An eidolon becomes unsettling to its foes, gaining the <Link to="/umr/frightful_presence">frightful presence</Link> ability. The eidolon can activate this ability as part of an offensive action, such as a <Link to="/rule/charge">charge</Link> or attack. Opponents within 30 feet of the eidolon must make a Will save or become <Link to="/misc/shaken">shaken</Link> for 3d6 rounds. The DC of this save is equal to 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">If the eidolon has at least 4 more Hit Dice than an opponent, that opponent becomes <Link to="/misc/frightened">frightened</Link> instead. Foes with more HD than the eidolon are immune to this effect.</Pair>
</Ability>
<Ability id="evolutionmajormagic-major-magic-sp-fn11" icon={["magic-swirl"]}>
<Pair single id="evolutionmajormagic-major-magic-sp-fn11" flavor="An eidolon learns to cast a major spell as a spell-like ability."><Link to="/evolution/major_magic">⮞</Link> Major Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11" id="ability-evolutions-fake-fn-11" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level summoner, eidolon has charisma 12+, <Link to="/evolution/minor_magic">minor magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/acid_arrow">acid arrow</Link>, <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>, <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/daze_monster">daze monster</Link>, <Link to="/spell/glide">glide</Link>, <Link to="/spell/invisibility">invisibility</Link> (self only), <Link to="/spell/lesser_restoration">lesser restoration</Link>, <Link to="/spell/levitate">levitate</Link>, <Link to="/spell/minor_image">minor image</Link>, <Link to="/spell/scorching_ray">scorching ray</Link>, <Link to="/spell/see_invisibility">see invisibility</Link>, or <Link to="/spell/spider_climb">spider climb</Link>.</Pair>
<Pair title="Ability">This spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="At 10th Level">This spell can be cast three times per day by spending 2 additional evolution points.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
<Ability id="evolutionsacrifice-sacrifice-su-fn6-3" icon={["remedy"]}>
<Pair single id="evolutionsacrifice-sacrifice-su-fn6-3" flavor="An eidolon can sacrifice its own hit points to heal another creature."><Link to="/evolution/sacrifice">⮞</Link> Sacrifice (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-6.3" id="ability-evolutions-fake-fn-6.3" data-hash-target to="ability-evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Standard Action">The eidolon can sacrifice up to 2 hit points per Hit Die and then touch a target creature, thereby healing the creature for half the amount sacrificed.</Pair>
</Ability>
<Ability id="evolutionseeindarkness-see-in-darkness-su-fn11-2" icon={["stairs-goal"]}>
<Pair single id="evolutionseeindarkness-see-in-darkness-su-fn11-2"><Link to="/evolution/see_in_darkness">⮞</Link> See in Darkness (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.2" id="ability-evolutions-fake-fn-11.2" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Ability">An eidolon can see perfectly in darkness of any kind, including that created by <Link to="/spell/deeper_darkness">deeper darkness</Link>.</Pair>
</Ability>
<Ability id="evolutionswallowwhole-swallow-whole-ex-fn10-7" icon={["mailed-fist"]}>
<Pair single id="evolutionswallowwhole-swallow-whole-ex-fn10-7"><Link to="/evolution/swallow_whole">⮞</Link> Swallow Whole (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.7" id="ability-evolutions-fake-fn-10.7" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner, <Link to="/evolution/grab">grab</Link> (bite)</Pair>
<Pair title="Ability"><p>An eidolon gains the <Link to="/umr/swallow_whole">swallow whole</Link> ability, giving it the ability to consume its foes. If the eidolon begins its turn with a creature grappled using its bite attack (see the <em>grab</em> evolution), it can attempt a combat maneuver check to swallow the creature. The creature can be up to one size category smaller than the eidolon.</p>
<p>Swallowed creatures take damage equal to the eidolon's bite damage each round plus 1d6 points of bludgeoning damage. A swallowed creature keeps the <Link to="/rule/grappled">grappled</Link> condition, but can attempt to cut its way free with a light slashing or piercing weapon. The amount of damage needed to cut free is equal to 1/10 the eidolon's total hit points. The eidolon's AC against these attacks is equal to 10 + 1/2 its natural armor bonus.</p>
<p>Alternatively, the swallowed creature can attempt to escape the grapple as normal. Success indicates that it has returned to the eidolon's mouth, where it can attempt to escape or be swallowed again.</p>
</Pair>
<Pair title="Special">If a swallowed creature cuts its way out, the eidolon loses this ability until it heals this damage.</Pair>
</Ability>
<Ability id="evolutionweb-web-ex-fn10-8" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="evolutionweb-web-ex-fn10-8"><Link to="/evolution/web">⮞</Link> Web (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.8" id="ability-evolutions-fake-fn-10.8" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level summoner, <Link to="/evolution/climb">climb</Link></Pair>
<Pair title="Ability"><p>An eidolon gains a pair of spinnerets, giving it the ability to spin webs. The eidolon can use these webs to support itself plus up to one creature of the same size.</p>
<p>It can throw webbing as a ranged touch attack up to 8 times per day, <Link to="/rule/entangled">entangling</Link> a creature up to one size larger than the eidolon. The webbing has a range of 50 feet and a 10-foot range increment. Creatures entangled by the web can escape with an <Link to="/skill/escape_artist">Escape Artist</Link> check or a Strength check (at a -4 penalty). The DC of these checks is equal to 10 + 1/2 the eidolon's HD + the eidolon's Con modifier. The webs have a Hardness of 0 and a number of hits points equal to the eidolon's total Hit Dice.</p>
</Pair>
<Pair title="Special">The eidolon can climb its own webs at its climb speed and can pinpoint any creature touching its webs.</Pair>
</Ability>
<h3 id="ability-evolutions-4-point-evolutions" data-hash-target>4-Point Evolutions</h3>
<p>The following evolutions cost 4 points from the eidolon's evolution pool.</p>
<Ability id="evolutionblindsight-blindsight-ex-fn10-9" icon={["upgrade"]}>
<Pair single id="evolutionblindsight-blindsight-ex-fn10-9"><Link to="/evolution/blindsight">⮞</Link> Blindsight (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.9" id="ability-evolutions-fake-fn-10.9" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner, <Link to="/evolution/blindsense">blindsense</Link></Pair>
<Pair title="Ability">An eidolon's senses sharpen even further, granting it <Link to="/umr/blindsight">blindsight</Link> out to a range of 30 feet. The eidolon can maneuver and attack as normal, ignoring darkness, invisibility, and most forms of <Link to="/rule/concealment">concealment</Link> as long as it has line of effect to the target.</Pair>
</Ability>
<Ability id="evolutionbreathweapon-breath-weapon-su-fn10-10" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="evolutionbreathweapon-breath-weapon-su-fn10-10" flavor="An eidolon learns to exhale a cone or line of magical energy, gaining a breath weapon."><Link to="/evolution/breath_weapon">⮞</Link> Breath Weapon (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-10.10" id="ability-evolutions-fake-fn-10.10" data-hash-target to="ability-evolutions-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Choice">Select either acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">The eidolon can breathe a 30-foot cone (or 60-foot line) that deals 1d6 points of damage of the selected type per HD it possesses. Those caught in the breath weapon can attempt a Reflex save for half damage. The DC is equal to 10 + 1/2 the eidolon's HD + the eidolon's Constitution modifier.</Pair>
<Pair title="Special">The eidolon can use this ability once per day. The eidolon can use this ability 1 additional time per day by spending an additional 1 evolution point (maximum 3/day).</Pair>
</Ability>
<Ability id="evolutiondimensiondoor-dimension-door-sp-fn11-3" icon={["magic-swirl"]}>
<Pair single id="evolutiondimensiondoor-dimension-door-sp-fn11-3"><Link to="/evolution/dimension_door">⮞</Link> Dimension Door (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.3" id="ability-evolutions-fake-fn-11.3" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">13th-level summoner, eidolon has charisma 14+</Pair>
<Pair title="Ability">An eidolon learns to cast <Link to="/spell/dimension_door">dimension door</Link> as a spell-like ability once per day. The caster level for this evolution is equal to the eidolon's Hit Dice. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
</Ability>
<Ability id="evolutionfasthealing-fast-healing-su-fn12" icon={["armor-upgrade"]}>
<Pair single id="evolutionfasthealing-fast-healing-su-fn12"><Link to="/evolution/fast_healing">⮞</Link> Fast Healing (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-12" id="ability-evolutions-fake-fn-12" data-hash-target to="ability-evolutions-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Passive Ability"><p>An eidolon's body gains the ability to heal wounds very quickly, giving it <Link to="/umr/fast_healing">fast healing</Link> 1. The eidolon heals 1 point of damage each round, just like natural healing. <em>Fast healing</em> does not restore hit points lost due to starvation, thirst, or suffocation, nor does it allow the eidolon to regrow lost body parts (or to reattach severed parts).</p>
<p><em>Fast healing</em> functions as long as the eidolon is alive. This <em>fast healing</em> does not function when the eidolon is not on the same plane as its summoner.</p>
</Pair>
<Pair title="Special">This healing can be increased by 1 per round for every 2 additional evolution points spent (maximum 5).</Pair>
</Ability>
<Ability id="evolutionincorporealform-incorporeal-form-sp-fn11-4" icon={["stairs-goal"]}>
<Pair single id="evolutionincorporealform-incorporeal-form-sp-fn11-4"><Link to="/evolution/incorporeal_form">⮞</Link> Incorporeal Form (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.4" id="ability-evolutions-fake-fn-11.4" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level summoner</Pair>
<Pair title="Ability">Once per day, an eidolon can become incorporeal for 1 round per summoner level. While in this form, the eidolon gains the <Link to="/subtype/incorporeal">incorporeal</Link> subtype and <Link to="/umr/incorporeal">incorporeal</Link> quality. It only takes half damage from corporeal sources as long as they are magic (it takes no damage from nonmagical weapons and objects). Likewise, its spells or spell-like abilities deal only half damage to corporeal creatures. Spells and other effects that do not deal damage function normally.</Pair>
</Ability>
<Ability id="evolutionlarge-large-ex-fn12-2" icon={["upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="evolutionlarge-large-ex-fn12-2"><Link to="/evolution/large">⮞</Link> Large (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-12.2" id="ability-evolutions-fake-fn-12.2" data-hash-target to="ability-evolutions-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level summoner, eidolon is Medium-sized</Pair>
<Pair title="Ability">An eidolon grows in size, becoming Large. The eidolon gains a +8 bonus to Strength, a +4 bonus to Constitution, and a +2 bonus to its natural armor. It takes a -2 penalty to its Dexterity. This size change also gives the creature a -1 size penalty to its AC and on attack rolls, a +1 bonus to its CMB and CMD, a -2 penalty on Fly skill checks, and a -4 penalty on Stealth skill checks. If the eidolon has the biped base form, it also gains 10-foot reach. Any <Link to="/evolution/reach">reach</Link> evolutions the eidolon possesses are added to this total.</Pair>
<Pair title="At 13th Level"><p>If 6 additional evolution points are spent, the eidolon instead becomes Huge. The eidolon gains a +16 bonus to Strength, a +8 bonus to Constitution, and a +5 bonus to its natural armor. It takes a -4 penalty to its Dexterity. This size change also give the creature a -2 size penalty to its AC and attack rolls, a +2 bonus to its CMB and CMD, 10-foot reach, a -4 penalty on Fly skill checks, and a -8 penalty on Stealth skill checks. If the eidolon has the biped base form, its reach increases to 15 feet (10 feet for all other base forms). Any <em>reach</em> evolutions the eidolon possesses are added to this total.</p>
<p>These bonuses and penalties replace, and do not stack with, those gained from becoming Large.</p>
</Pair>
<Pair title="Special">The <Link to="/evolution/ability_increase">ability increase</Link> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a Large or Huge eidolon.</Pair>
</Ability>
<Ability id="evolutionlifesense-lifesense-su-fn11-5" icon={["stairs-goal"]}>
<Pair single id="evolutionlifesense-lifesense-su-fn11-5"><Link to="/evolution/lifesense">⮞</Link> Lifesense (Su) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.5" id="ability-evolutions-fake-fn-11.5" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner, <Link to="/evolution/undead_appearance">undead appearance</Link></Pair>
<Pair title="Ability">An eidolon can pinpoint living creatures with ease. The eidolon notices and locates living creatures within 60 feet, just as if it possessed the <Link to="/evolution/blindsight">blindsight</Link> evolution.</Pair>
</Ability>
<Ability id="evolutionnobreath-no-breath-ex-fn11-6" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="evolutionnobreath-no-breath-ex-fn11-6" flavor="An eidolon no longer needs to breathe."><Link to="/evolution/no_breath">⮞</Link> No Breath (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.6" id="ability-evolutions-fake-fn-11.6" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner</Pair>
<Pair title="Ability">The eidolon does not breathe, and is immune to effects that require breathing (such as inhaled poison). This does not give immunity to cloud or gas attacks that do not require breathing.</Pair>
</Ability>
<Ability id="evolutionspellresistance-spell-resistance-ex-fn12-3" icon={["armor-upgrade"]}>
<Pair single id="evolutionspellresistance-spell-resistance-ex-fn12-3"><Link to="/evolution/spell_resistance">⮞</Link> Spell Resistance (Ex) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-12.3" id="ability-evolutions-fake-fn-12.3" data-hash-target to="ability-evolutions-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level summoner</Pair>
<Pair title="Passive Ability">An eidolon is protected against magic, gaining spell resistance equal to 11 + the summoner's level. This spell resistance does not apply to spells cast by the summoner.</Pair>
</Ability>
<Ability id="evolutionultimatemagic-ultimate-magic-sp-fn11-7" icon={["magic-swirl"]}>
<Pair single id="evolutionultimatemagic-ultimate-magic-sp-fn11-7" flavor="An eidolon learns to cast a powerful spell as a spell-like ability."><Link to="/evolution/ultimate_magic">⮞</Link> Ultimate Magic (Sp) <sup><InnerLink showBacklink="backlink-ability-evolutions-fake-fn-11.7" id="ability-evolutions-fake-fn-11.7" data-hash-target to="ability-evolutions-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level summoner, eidolon has Charisma 13+, <Link to="/evolution/major_magic">major magic</Link></Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/arcane_sight">arcane sight</Link>, <Link to="/spell/create_food_and_water">create food and water</Link>, <Link to="/spell/cure_serious_wounds">cure serious wounds</Link>, <Link to="/spell/daylight">daylight</Link>, <Link to="/spell/fireball">fireball</Link>, <Link to="/spell/fly">fly</Link>, <Link to="/spell/gaseous_form">gaseous form</Link>, <Link to="/spell/lightning_bolt">lightning bolt</Link>, <Link to="/spell/major_image">major image</Link>, <Link to="/spell/stinking_cloud">stinking cloud</Link>, <Link to="/spell/tongues">tongues</Link>, or <Link to="/spell/water_breathing">water breathing</Link>.</Pair>
<Pair title="Ability">The chosen spell can be cast once per day as a spell-like ability. The caster level for this evolution is equal to the eidolon's Hit Dice - 2. The save DC for this spell is 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new spell from the above list.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-evolutions-label">Footnotes</h3><ol>
<li id="ability-evolutions-fake-fn-1-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 76 <InnerLink aria-label="Back to reference 1" id="backlink-ability-evolutions-fake-fn-1" data-hash-target to="ability-evolutions-fake-fn-1">↩</InnerLink></p></li>
<li id="ability-evolutions-fake-fn-2-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 60 <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2" data-hash-target to="ability-evolutions-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.2" data-hash-target to="ability-evolutions-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.3" data-hash-target to="ability-evolutions-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.4" data-hash-target to="ability-evolutions-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.5" data-hash-target to="ability-evolutions-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.6" data-hash-target to="ability-evolutions-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.7" data-hash-target to="ability-evolutions-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.8" data-hash-target to="ability-evolutions-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.9" data-hash-target to="ability-evolutions-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.10" data-hash-target to="ability-evolutions-fake-fn-2.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-evolutions-fake-fn-2.11" data-hash-target to="ability-evolutions-fake-fn-2.11">↩<sup>11</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-3-target"><p><Link to="/source/champions_of_corruption">Champions of Corruption</Link> pg. 27 <InnerLink aria-label="Back to reference 3" id="backlink-ability-evolutions-fake-fn-3" data-hash-target to="ability-evolutions-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-evolutions-fake-fn-3.2" data-hash-target to="ability-evolutions-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-evolutions-fake-fn-3.3" data-hash-target to="ability-evolutions-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-evolutions-fake-fn-3.4" data-hash-target to="ability-evolutions-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-evolutions-fake-fn-3.5" data-hash-target to="ability-evolutions-fake-fn-3.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-4-target"><p>Ultimate Magic pg. 77 <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4" data-hash-target to="ability-evolutions-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.2" data-hash-target to="ability-evolutions-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.3" data-hash-target to="ability-evolutions-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.4" data-hash-target to="ability-evolutions-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.5" data-hash-target to="ability-evolutions-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.6" data-hash-target to="ability-evolutions-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.7" data-hash-target to="ability-evolutions-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-evolutions-fake-fn-4.8" data-hash-target to="ability-evolutions-fake-fn-4.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-5-target"><p>Advanced Player's Guide pg. 61 <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5" data-hash-target to="ability-evolutions-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.2" data-hash-target to="ability-evolutions-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.3" data-hash-target to="ability-evolutions-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.4" data-hash-target to="ability-evolutions-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.5" data-hash-target to="ability-evolutions-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.6" data-hash-target to="ability-evolutions-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.7" data-hash-target to="ability-evolutions-fake-fn-5.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.8" data-hash-target to="ability-evolutions-fake-fn-5.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.9" data-hash-target to="ability-evolutions-fake-fn-5.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.10" data-hash-target to="ability-evolutions-fake-fn-5.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.11" data-hash-target to="ability-evolutions-fake-fn-5.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.12" data-hash-target to="ability-evolutions-fake-fn-5.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.13" data-hash-target to="ability-evolutions-fake-fn-5.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-evolutions-fake-fn-5.14" data-hash-target to="ability-evolutions-fake-fn-5.14">↩<sup>14</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-6-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 26 <InnerLink aria-label="Back to reference 6" id="backlink-ability-evolutions-fake-fn-6" data-hash-target to="ability-evolutions-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-evolutions-fake-fn-6.2" data-hash-target to="ability-evolutions-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-evolutions-fake-fn-6.3" data-hash-target to="ability-evolutions-fake-fn-6.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-7-target"><p>Advanced Player's Guide pg. 62 <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7" data-hash-target to="ability-evolutions-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.2" data-hash-target to="ability-evolutions-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.3" data-hash-target to="ability-evolutions-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.4" data-hash-target to="ability-evolutions-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.5" data-hash-target to="ability-evolutions-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.6" data-hash-target to="ability-evolutions-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.7" data-hash-target to="ability-evolutions-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.8" data-hash-target to="ability-evolutions-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.9" data-hash-target to="ability-evolutions-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.10" data-hash-target to="ability-evolutions-fake-fn-7.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-evolutions-fake-fn-7.11" data-hash-target to="ability-evolutions-fake-fn-7.11">↩<sup>11</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-8-target"><p><Link to="/source/cohorts_and_companions">Cohorts and Companions</Link> pg. 9 <InnerLink aria-label="Back to reference 8" id="backlink-ability-evolutions-fake-fn-8" data-hash-target to="ability-evolutions-fake-fn-8">↩</InnerLink></p></li>
<li id="ability-evolutions-fake-fn-9-target"><p><Link to="/source/advanced_race_guide">Advanced Race Guide</Link> pg. 111 <InnerLink aria-label="Back to reference 9" id="backlink-ability-evolutions-fake-fn-9" data-hash-target to="ability-evolutions-fake-fn-9">↩</InnerLink> <InnerLink aria-label="Back to reference 9" id="backlink-ability-evolutions-fake-fn-9.2" data-hash-target to="ability-evolutions-fake-fn-9.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-10-target"><p>Advanced Player's Guide pg. 63 <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10" data-hash-target to="ability-evolutions-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.2" data-hash-target to="ability-evolutions-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.3" data-hash-target to="ability-evolutions-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.4" data-hash-target to="ability-evolutions-fake-fn-10.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.5" data-hash-target to="ability-evolutions-fake-fn-10.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.6" data-hash-target to="ability-evolutions-fake-fn-10.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.7" data-hash-target to="ability-evolutions-fake-fn-10.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.8" data-hash-target to="ability-evolutions-fake-fn-10.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.9" data-hash-target to="ability-evolutions-fake-fn-10.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-evolutions-fake-fn-10.10" data-hash-target to="ability-evolutions-fake-fn-10.10">↩<sup>10</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-11-target"><p>Ultimate Magic pg. 78 <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11" data-hash-target to="ability-evolutions-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.2" data-hash-target to="ability-evolutions-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.3" data-hash-target to="ability-evolutions-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.4" data-hash-target to="ability-evolutions-fake-fn-11.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.5" data-hash-target to="ability-evolutions-fake-fn-11.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.6" data-hash-target to="ability-evolutions-fake-fn-11.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-evolutions-fake-fn-11.7" data-hash-target to="ability-evolutions-fake-fn-11.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-evolutions-fake-fn-12-target"><p>Advanced Player's Guide pg. 64 <InnerLink aria-label="Back to reference 12" id="backlink-ability-evolutions-fake-fn-12" data-hash-target to="ability-evolutions-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-evolutions-fake-fn-12.2" data-hash-target to="ability-evolutions-fake-fn-12.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-evolutions-fake-fn-12.3" data-hash-target to="ability-evolutions-fake-fn-12.3">↩<sup>3</sup></InnerLink></p></li>
</ol></section></div>};
const _unchained_evolutions = {hasJL:true,title: "Unchained Eidolon Evolutions", topLink: ["Unchained Summoner","class/unchained_summoner"], jsx: <div className="compilation"><div className="jumpList" id="ability-unchained_evolutions-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-unchained_evolutions-1-point-evolutions">1-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-unchained_evolutions-2-point-evolutions">2-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-unchained_evolutions-3-point-evolutions">3-Point Evolutions</InnerLink></li><li><InnerLink toTop to="ability-unchained_evolutions-4-point-evolutions">4-Point Evolutions</InnerLink></li></ul></div><h2 id="ability-unchained_evolutions-unchained-evolutions">Unchained Evolutions</h2>
<p><strong>Sources</strong> <Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link><br/>Each eidolon gains a number of evolution points that can be spent to give the eidolon new abilities, powers, and other upgrades. These abilities, called evolutions, can be changed whenever the summoner gains a new level, but they are otherwise set. Some evolutions require that the eidolon have a specific base form or the summoner be of a specific level before they can be chosen. A number of evolutions grant the eidolon additional natural attacks. Natural attacks listed as primary are made using the eidolon's full base attack bonus and add the eidolon's Strength modifier on damage rolls. Natural attacks listed as secondary are made using the eidolon's base attack bonus - 5 and add 1/2 the eidolon's Strength modifier on damage rolls (if positive). If the eidolon has only a single natural attack, the attack is made using its full base attack bonus, and it adds 1-1/2 times its Strength modifier on damage rolls made with that attack, regardless of the attack's type.</p>
<p>Evolutions are grouped by their cost in evolution points. Evolution points cannot be saved. All of the points must be spent whenever the summoner gains a level. Unless otherwise noted, each evolution can be selected only once.</p>
<h3 id="ability-unchained_evolutions-1-point-evolutions" data-hash-target>1-Point Evolutions</h3>
<p>The following evolutions cost 1 point from the eidolon's evolution pool.</p>
<Ability id="unchevolutionbasicpsychicmagic-basic-psychic-magic-fn1" icon={["magic-swirl"]}>
<Pair single id="unchevolutionbasicpsychicmagic-basic-psychic-magic-fn1"><Link to="/unchevolution/basic_psychic_magic">⮞</Link> Basic Psychic Magic <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-1" id="ability-unchained_evolutions-fake-fn-1" data-hash-target to="ability-unchained_evolutions-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/aberrant">Aberrant</Link> subtype, Charisma 10</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/dancing_lights">dancing lights</Link>, <Link to="/spell/detect_magic">detect magic</Link>, <Link to="/spell/ghost_sound">ghost sound</Link>, <Link to="/spell/grave_words">grave words</Link>, <Link to="/spell/know_direction">know direction</Link>, <Link to="/spell/lullaby">lullaby</Link>, <Link to="/spell/mage_hand">mage hand</Link>, <Link to="/spell/open_close">open/close</Link>, or <Link to="/spell/telekinetic_projectile">telekinetic projectile</Link>.</Pair>
<Pair title="Ability">The eidolon can cast the chosen spell as a psychic spell at will. The spell requires thought and emotion components as normal for <Link to="/rule/psychic_magic">psychic magic</Link>. The eidolon's caster level is equal to the eidolon's Hit Dice - 2 (minimum CL 1st). The save DC equals 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time.</Pair>
</Ability>
<Ability id="unchevolutionbite-bite-ex-fn2" icon={["mailed-fist"]}>
<Pair single id="unchevolutionbite-bite-ex-fn2"><Link to="/unchevolution/bite">⮞</Link> Bite (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2" id="ability-unchained_evolutions-fake-fn-2" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability"><p>The eidolon's maw is full of razor-sharp teeth, giving it a <Link to="/umr/bite_attack">bite attack</Link>. This attack is a primary attack. The bite deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</p>
<p>If the eidolon already has a bite attack, this evolution allows it to deal 1-1/2 times its Strength modifier on damage rolls made with its bite.</p>
</Pair>
</Ability>
<Ability id="unchevolutionclaws-claws-ex-fn2-2" icon={["mailed-fist"]}>
<Pair single id="unchevolutionclaws-claws-ex-fn2-2"><Link to="/unchevolution/claws">⮞</Link> Claws (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.2" id="ability-unchained_evolutions-fake-fn-2.2" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/limbs">limbs</Link> evolution</Pair>
<Pair title="Ability">The eidolon has a pair of vicious claws at the ends of its limbs, giving it two <Link to="/umr/claw_attack">claw attacks</Link>. These attacks are primary attacks. The claws deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>limbs</em> evolutions the eidolon possesses. This evolution can be applied to any number of <em>limbs (arms)</em> evolutions, but no more than one <em>limbs (legs)</em> evolution.</Pair>
</Ability>
<Ability id="unchevolutionclimb-climb-ex-fn2-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="unchevolutionclimb-climb-ex-fn2-3"><Link to="/unchevolution/climb">⮞</Link> Climb (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.3" id="ability-unchained_evolutions-fake-fn-2.3" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The eidolon becomes a skilled climber, gaining a climb speed equal to its base speed.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's climb speed by 20 feet.</Pair>
</Ability>
<Ability id="unchevolutiongills-gills-ex-fn2-4" icon={["stairs-goal"]}>
<Pair single id="unchevolutiongills-gills-ex-fn2-4"><Link to="/unchevolution/gills">⮞</Link> Gills (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.4" id="ability-unchained_evolutions-fake-fn-2.4" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">The eidolon has gills and can breathe underwater indefinitely.</Pair>
</Ability>
<Ability id="unchevolutionimproveddamage-improved-damage-ex-fn2-5" icon={["upgrade"]}>
<Pair single id="unchevolutionimproveddamage-improved-damage-ex-fn2-5" flavor="One of the eidolon's natural attacks is particularly deadly."><Link to="/unchevolution/improved_damage">⮞</Link> Improved Damage (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.5" id="ability-unchained_evolutions-fake-fn-2.5" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">Select one natural attack form and <Link to="/misc/increase_the_damage_die">increase the damage die</Link> by one step.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time the eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="unchevolutionimprovednaturalarmor-improved-natural-armor-ex-fn2-6" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionimprovednaturalarmor-improved-natural-armor-ex-fn2-6"><Link to="/unchevolution/improved_natural_armor">⮞</Link> Improved Natural Armor (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.6" id="ability-unchained_evolutions-fake-fn-2.6" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">The eidolon's hide grows thick fur, rigid scales, or bony plates, giving it a +2 bonus to its natural armor.</Pair>
<Pair title="Special">This evolution can be taken once, plus one additional time for every 5 levels the summoner possesses. Each additional time it's taken, the bonus increases by 2.</Pair>
</Ability>
<Ability id="unchevolutionmagicattacks-magic-attacks-su-fn2-7" icon={["upgrade"]}>
<Pair single id="unchevolutionmagicattacks-magic-attacks-su-fn2-7"><Link to="/unchevolution/magic_attacks">⮞</Link> Magic Attacks (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.7" id="ability-unchained_evolutions-fake-fn-2.7" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Passive Ability">The eidolon is infused with magic, allowing it to treat all of its natural attacks as if they were magic for the purpose of overcoming damage reduction.</Pair>
<Pair title="At 10th Level">All of the eidolon's natural attacks are treated as the alignment of the eidolon for the purpose of overcoming damage reduction.</Pair>
</Ability>
<Ability id="unchevolutionmount-mount-ex-fn2-8" icon={["stairs-goal"]}>
<Pair single id="unchevolutionmount-mount-ex-fn2-8"><Link to="/unchevolution/mount">⮞</Link> Mount (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.8" id="ability-unchained_evolutions-fake-fn-2.8" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; quadruped or serpentine base form; must be at least one size category larger than its rider</Pair>
<Pair title="Ability">The eidolon is properly skilled and formed to serve as a <Link to="/rule/combat_trained">combat-trained</Link> mount.</Pair>
</Ability>
<Ability id="unchevolutionpincers-pincers-ex-fn2-9" icon={["mailed-fist"]}>
<Pair single id="unchevolutionpincers-pincers-ex-fn2-9"><Link to="/unchevolution/pincers">⮞</Link> Pincers (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.9" id="ability-unchained_evolutions-fake-fn-2.9" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/limbs">limbs</Link> (arms) evolution, or its base form has <Link to="/unchevolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability"><p>An eidolon grows large pincers at the ends of one pair of its limbs, giving it two <Link to="/umr/pincer_attack">pincer attacks</Link>. These attacks are secondary attacks. The pincers deal 1d6 points of damage (1d8 if Large, 2d6 if Huge).</p>
<p>Eidolons with the <Link to="/unchevolution/grab">grab</Link> evolution linked to their pincers gain a +2 bonus on combat maneuver checks to grapple.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>limbs (arms)</em> evolutions the eidolon possesses.</Pair>
</Ability>
<Ability id="unchevolutionpull-pull-ex-fn2-10" icon={["mailed-fist"]}>
<Pair single id="unchevolutionpull-pull-ex-fn2-10" flavor="The eidolon gains the ability to pull creatures closer with a successful attack."><Link to="/unchevolution/pull">⮞</Link> Pull (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.10" id="ability-unchained_evolutions-fake-fn-2.10" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">Eidolon has reach of 10 feet or more</Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, it pulls the target of the attack 5 feet closer to it.</p>
<p>This ability works only on creatures of a size category equal to or smaller than the eidolon. Creatures pulled in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="unchevolutionpush-push-ex-fn2-11" icon={["mailed-fist"]}>
<Pair single id="unchevolutionpush-push-ex-fn2-11" flavor="The eidolon gains the ability to push creatures away with a successful attack."><Link to="/unchevolution/push">⮞</Link> Push (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-2.11" id="ability-unchained_evolutions-fake-fn-2.11" data-hash-target to="ability-unchained_evolutions-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>Select one type of natural attack. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, it pushes the target of the attack 5 feet directly away from it.</p>
<p>This ability works only on creatures of a size category equal to or smaller than the eidolon. Creatures pushed in this way do not provoke attacks of opportunity.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different natural attack.</Pair>
</Ability>
<Ability id="unchevolutionreach-reach-ex-fn3" icon={["upgrade"]}>
<Pair single id="unchevolutionreach-reach-ex-fn3" flavor="One of the eidolon's attacks is capable of striking foes at a distance."><Link to="/unchevolution/reach">⮞</Link> Reach (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3" id="ability-unchained_evolutions-fake-fn-3" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">Select one attack. The eidolon's reach with that attack increases by 5 feet.</Pair>
</Ability>
<Ability id="unchevolutionresistance-resistance-ex-fn3-2" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionresistance-resistance-ex-fn3-2"><Link to="/unchevolution/resistance">⮞</Link> Resistance (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.2" id="ability-unchained_evolutions-fake-fn-3.2" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability"><p>An eidolon's form takes on a resiliency to one particular energy type, which is usually reflected in its physical body (ashen hide for fire, icy breath for cold, and so on).</p>
<p>Pick one energy type (acid, cold, electricity, fire, or sonic). The eidolon gains <Link to="/umr/resistance">resistance</Link> 5 against that energy type.</p>
</Pair>
<Pair title="At 5th Level">The resistance becomes 10.</Pair>
<Pair title="At 10th Level">The resistance becomes 15.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time an eidolon selects this evolution, it applies to a different energy type.</Pair>
</Ability>
<Ability id="unchevolutionscent-scent-ex-fn3-3" icon={["stairs-goal"]}>
<Pair single id="unchevolutionscent-scent-ex-fn3-3" flavor="The eidolon's sense of smell becomes quite acute."><Link to="/unchevolution/scent">⮞</Link> Scent (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.3" id="ability-unchained_evolutions-fake-fn-3.3" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/scent">scent</Link> special quality, allowing it to detect opponents within 30 feet by sense of smell. If the opponent is upwind, the range increases to 60 feet; if the opponent is downwind, the range drops to 15 feet. Strong scents can be detected at twice the normal range.</p>
<p><em>Scent</em> does not allow the eidolon to precisely locate the creature, only to detect its presence. It can detect the direction as a <strong className="hl">move action</strong>. The eidolon can pinpoint the creature's location if it is within 5 feet. The eidolon can use <em>scent</em> to track creatures.</p>
</Pair>
</Ability>
<Ability id="unchevolutionsharedevolution-shared-evolution-su-fn4" icon={["stairs-goal"]}>
<Pair single id="unchevolutionsharedevolution-shared-evolution-su-fn4"><Link to="/unchevolution/shared_evolution">⮞</Link> Shared Evolution (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-4" id="ability-unchained_evolutions-fake-fn-4" data-hash-target to="ability-unchained_evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Choice">Select a 1-point or 2-point evolution the eidolon has.</Pair>
<Pair title="Standard Action">The eidolon can touch the summoner and transfer the selected evolution to him. This functions as the <Link to="/class/unchained_summoner">summoner's aspect</Link> ability, and the same limitations apply.</Pair>
<Pair title="Special">The summoner can touch the eidolon as a <strong className="hl">standard action</strong> to return the evolution. The evolution returns to the eidolon automatically if the eidolon is dismissed by the summoner or sent back to its home plane.</Pair>
</Ability>
<Ability id="unchevolutionskilled-skilled-ex-fn3-4" icon={["upgrade"]}>
<Pair single id="unchevolutionskilled-skilled-ex-fn3-4"><Link to="/unchevolution/skilled">⮞</Link> Skilled (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.4" id="ability-unchained_evolutions-fake-fn-3.4" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">The eidolon becomes especially adept at a specific skill, gaining a +8 racial bonus on that skill.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time the eidolon selects this evolution, it applies to a different skill.</Pair>
</Ability>
<Ability id="unchevolutionslam-slam-ex-fn3-5" icon={["mailed-fist"]}>
<Pair single id="unchevolutionslam-slam-ex-fn3-5"><Link to="/unchevolution/slam">⮞</Link> Slam (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.5" id="ability-unchained_evolutions-fake-fn-3.5" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/unchevolution/limbs">Limbs</Link> (arms), or its base form has <Link to="/unchevolution/claws">claws</Link> (this evolution replaces the claws)</Pair>
<Pair title="Ability">The eidolon can deliver a devastating <Link to="/umr/slam_attack">slam attack</Link>. This attack is a primary attack. The slam deals 1d8 points of damage (2d6 if Large, 2d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of the eidolon's <em>limbs (arms)</em> evolutions.</Pair>
</Ability>
<Ability id="unchevolutionsting-sting-ex-fn3-6" icon={["mailed-fist"]}>
<Pair single id="unchevolutionsting-sting-ex-fn3-6"><Link to="/unchevolution/sting">⮞</Link> Sting (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.6" id="ability-unchained_evolutions-fake-fn-3.6" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/tail">tail</Link> evolution</Pair>
<Pair title="Ability">The eidolon possesses a long, barbed stinger at the end of its tail, granting it a <Link to="/umr/sting_attack">sting attack</Link>. This attack is a primary attack. The sting deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>tail</em> evolutions the eidolon possesses.</Pair>
</Ability>
<Ability id="unchevolutionswim-swim-ex-fn3-7" icon={["stairs-goal","upgrade"]}>
<Pair single id="unchevolutionswim-swim-ex-fn3-7"><Link to="/unchevolution/swim">⮞</Link> Swim (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.7" id="ability-unchained_evolutions-fake-fn-3.7" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The eidolon gains webbed hands, webbed feet, or powerful flippers, giving it a swim speed equal to its base speed. This evolution does not give the eidolon the ability to breathe underwater.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each additional time it is selected, increase the eidolon's swim speed by 20 feet.</Pair>
</Ability>
<Ability id="unchevolutiontail-tail-ex-fn3-8" icon={["stairs-goal","upgrade"]}>
<Pair single id="unchevolutiontail-tail-ex-fn3-8"><Link to="/unchevolution/tail">⮞</Link> Tail (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.8" id="ability-unchained_evolutions-fake-fn-3.8" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability">The eidolon grows a long, powerful tail. This grants it a +2 racial bonus on Acrobatics checks to balance on a surface.</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="unchevolutiontailslap-tail-slap-ex-fn3-9" icon={["mailed-fist"]}>
<Pair single id="unchevolutiontailslap-tail-slap-ex-fn3-9"><Link to="/unchevolution/tail_slap">⮞</Link> Tail Slap (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.9" id="ability-unchained_evolutions-fake-fn-3.9" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/tail">tail</Link> evolution</Pair>
<Pair title="Ability">The eidolon can use its tail to bash nearby foes, granting it a <Link to="/umr/tail_slap_attack">tail slap attack</Link>. This attack is a secondary attack. The tail slap deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once, up to the number of <em>tail</em> evolutions the eidolon possesses.</Pair>
</Ability>
<Ability id="unchevolutiontentacle-tentacle-ex-fn3-10" icon={["mailed-fist"]}>
<Pair single id="unchevolutiontentacle-tentacle-ex-fn3-10"><Link to="/unchevolution/tentacle">⮞</Link> Tentacle (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.10" id="ability-unchained_evolutions-fake-fn-3.10" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link> subtype</Pair>
<Pair title="Ability">The eidolon possesses a long, sinuous tentacle, granting it a <Link to="/umr/tentacle_attack">tentacle attack</Link>. This attack is a secondary attack. The tentacle attack deals 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="unchevolutiontentaclemass-tentacle-mass-ex-fn1-2" icon={["mailed-fist"]}>
<Pair single id="unchevolutiontentaclemass-tentacle-mass-ex-fn1-2"><Link to="/unchevolution/tentacle_mass">⮞</Link> Tentacle Mass (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-1.2" id="ability-unchained_evolutions-fake-fn-1.2" data-hash-target to="ability-unchained_evolutions-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/aberrant">Aberrant</Link> subtype eidolon</Pair>
<Pair title="Ability">The eidolon grows a thick mass of tentacles that can be used as a primary <Link to="/umr/natural_weapon">natural weapon</Link>. The tentacles deal 1d8 points of damage if the eidolon is Medium.</Pair>
<Pair title="Special">Eidolons with the <Link to="/unchevolution/grab">grab</Link> evolution that is linked to a <em>tentacle mass</em> can use that ability to <Link to="/rule/grapple">grapple</Link> foes of up to the eidolon's size, and they can also use this evolution in place of the serpentine base form to qualify for the <Link to="/unchevolution/constrict">constrict</Link> evolution.</Pair>
</Ability>
<Ability id="unchevolutionwingbuffet-wing-buffet-ex-fn3-11" icon={["mailed-fist"]}>
<Pair single id="unchevolutionwingbuffet-wing-buffet-ex-fn3-11"><Link to="/unchevolution/wing_buffet">⮞</Link> Wing Buffet (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.11" id="ability-unchained_evolutions-fake-fn-3.11" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/unchevolution/flight">Flight</Link> (wings) evolution</Pair>
<Pair title="Ability">The eidolon learns to use its wings to batter foes, granting it two <Link to="/umr/wing_buffet_attack">wing buffet attacks</Link>. These attacks are secondary attacks. The wing buffets deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
</Ability>
<h3 id="ability-unchained_evolutions-2-point-evolutions" data-hash-target>2-Point Evolutions</h3>
<p>The following evolutions cost 2 points from the eidolon's evolution pool.</p>
<Ability id="unchevolutionabilityincrease-ability-increase-ex-fn3-12" icon={["upgrade"]}>
<Pair single id="unchevolutionabilityincrease-ability-increase-ex-fn3-12"><Link to="/unchevolution/ability_increase">⮞</Link> Ability Increase (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.12" id="ability-unchained_evolutions-fake-fn-3.12" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Passive Ability">The eidolon grows larger muscles, gains faster reflexes, achieves greater intelligence, or acquires another increase to one of its abilities. Increase one of the eidolon's ability scores by 2.</Pair>
<Pair title="Special">This evolution can be selected more than once. It can be applied only once to an individual ability score, plus one additional time for every 6 levels the summoner possesses.</Pair>
</Ability>
<Ability id="unchevolutionbloodfrenzy-blood-frenzy-ex-fn5" icon={["upgrade"]}>
<Pair single id="unchevolutionbloodfrenzy-blood-frenzy-ex-fn5"><Link to="/unchevolution/blood_frenzy">⮞</Link> Blood Frenzy (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5" id="ability-unchained_evolutions-fake-fn-5" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link>, <Link to="/eidolon/daemon">daemon</Link>, or <Link to="/eidolon/demon">demon</Link> subtype</Pair>
<Pair title="Ability">When the eidolon is dealt damage, it enters a blood frenzy. It gains a +2 morale bonus on attack rolls and weapon damage rolls and attacks the nearest creature each round, friend or foe, although it ceases attacking its summoner after hitting once. The frenzy lasts for 5 rounds or until the eidolon can perceive no creatures.</Pair>
<Pair title="Special">At the end of that time, the eidolon is <Link to="/misc/fatigued">fatigued</Link> for 1 minute. It cannot enter a blood frenzy while fatigued.</Pair>
</Ability>
<Ability id="unchevolutionconstrict-constrict-ex-fn3-13" icon={["upgrade"]}>
<Pair single id="unchevolutionconstrict-constrict-ex-fn3-13" flavor="The eidolon gains powerful muscles that allow it to crush those it grapples."><Link to="/unchevolution/constrict">⮞</Link> Constrict (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.13" id="ability-unchained_evolutions-fake-fn-3.13" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">Serpentine base form, <Link to="/unchevolution/grab">grab</Link></Pair>
<Pair title="Passive Ability">Whenever the eidolon successfully grapples a foe using the <em>grab</em> evolution, it deals additional damage equal to the amount of damage dealt by the attack the <em>grab</em> evolution is tied to.</Pair>
</Ability>
<Ability id="unchevolutionenergyattacks-energy-attacks-su-fn3-14" icon={["upgrade"]}>
<Pair single id="unchevolutionenergyattacks-energy-attacks-su-fn3-14" flavor="The eidolon's attacks become charged with energy."><Link to="/unchevolution/energy_attacks">⮞</Link> Energy Attacks (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-3.14" id="ability-unchained_evolutions-fake-fn-3.14" data-hash-target to="ability-unchained_evolutions-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level unchained summoner</Pair>
<Pair title="Choice">Select one energy type: acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">All of the eidolon's natural attacks deal 1d6 points of energy damage of the chosen type on a successful hit.</Pair>
</Ability>
<Ability id="unchevolutionextrafeat-extra-feat-ex-fn4-2" icon={["stairs-goal"]}>
<Pair single id="unchevolutionextrafeat-extra-feat-ex-fn4-2"><Link to="/unchevolution/extra_feat">⮞</Link> Extra Feat (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-4.2" id="ability-unchained_evolutions-fake-fn-4.2" data-hash-target to="ability-unchained_evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Ability">The eidolon gains an extra feat. It must meet the prerequisites of the feat.</Pair>
</Ability>
<Ability id="unchevolutionflight-flight-ex-or-su-fn6" icon={["stairs-goal"]}>
<Pair single id="unchevolutionflight-flight-ex-or-su-fn6"><Link to="/unchevolution/flight">⮞</Link> Flight (Ex or Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6" id="ability-unchained_evolutions-fake-fn-6" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon grows large wings, like those of a bat, bird, insect, or dragon, gaining the ability to fly. The eidolon gains a fly speed equal to its base speed. The eidolon's maneuverability depends on its size. Medium or smaller eidolons have good maneuverability. Large eidolons have average maneuverability, while Huge eidolons have poor maneuverability.</Pair>
<Pair title="Ability">For 2 additional evolution points, the eidolon flies by means of magic. It loses its wings, but its maneuverability increases to perfect. If the eidolon flies by magic, this is a supernatural ability.</Pair>
<Pair title="Special">The eidolon can increase its fly speed by spending additional evolution points, gaining a 20-foot increase to its fly speed for each additional point spent.</Pair>
</Ability>
<Ability id="unchevolutiongore-gore-ex-fn6-2" icon={["mailed-fist"]}>
<Pair single id="unchevolutiongore-gore-ex-fn6-2"><Link to="/unchevolution/gore">⮞</Link> Gore (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.2" id="ability-unchained_evolutions-fake-fn-6.2" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/agathion">Agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype</Pair>
<Pair title="Ability">The eidolon grows a number of horns on its head, giving it a <Link to="/umr/gore_attack">gore attack</Link>. This attack is a primary attack. The gore deals 1d6 points of damage (1d8 if Large, 2d6 if Huge).</Pair>
</Ability>
<Ability id="unchevolutiongrab-grab-ex-fn6-3" icon={["mailed-fist","upgrade"]}>
<Pair single id="unchevolutiongrab-grab-ex-fn6-3"><Link to="/unchevolution/grab">⮞</Link> Grab (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.3" id="ability-unchained_evolutions-fake-fn-6.3" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The eidolon becomes adept at grappling foes, gaining the <Link to="/umr/grab">grab</Link> ability. Select one of the following attacks: <Link to="/unchevolution/bite">bite</Link>, <Link to="/unchevolution/claws">claws</Link>, <Link to="/unchevolution/pincers">pincers</Link>, <Link to="/unchevolution/slam">slam</Link>, <Link to="/unchevolution/tail_slap">tail slap</Link>, or <Link to="/unchevolution/tentacle">tentacle</Link>. Whenever the eidolon makes a successful attack of the selected type, it can attempt a free combat maneuver check. If successful, the eidolon <Link to="/rule/grapple">grapples</Link> the target. This ability works only on creatures at least one size category smaller than the eidolon. Eidolons with this evolution gain a +4 bonus on combat maneuver checks to grapple.</Pair>
</Ability>
<Ability id="unchevolutionimmunity-immunity-su-fn6-4" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionimmunity-immunity-su-fn6-4" flavor="The eidolon's body becomes extremely resilient to one energy type."><Link to="/unchevolution/immunity">⮞</Link> Immunity (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.4" id="ability-unchained_evolutions-fake-fn-6.4" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner</Pair>
<Pair title="Passive Ability">Select one energy type: acid, cold, electricity, fire, or sonic. The eidolon gains immunity to that energy type.</Pair>
<Pair title="Special">This evolution can be selected more than once. Its effects do not stack. Each time it applies to a different energy type.</Pair>
</Ability>
<Ability id="unchevolutionintermediatepsychicmagic-intermediate-psychic-magic-fn5-2" icon={["magic-swirl"]}>
<Pair single id="unchevolutionintermediatepsychicmagic-intermediate-psychic-magic-fn5-2"><Link to="/unchevolution/intermediate_psychic_magic">⮞</Link> Intermediate Psychic Magic <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.2" id="ability-unchained_evolutions-fake-fn-5.2" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">5th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>, Charisma 11+</Pair>
<Pair title="Ability">The eidolon gains 2 points of psychic energy that it can spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/compel_hostility">compel hostility</Link>, <Link to="/spell/lesser_confusion">lesser confusion</Link>, <Link to="/spell/hypnotism">hypnotism</Link>, <Link to="/spell/mind_thrust_i">mind thrust I</Link>, or <Link to="/spell/vanish">vanish</Link>. The eidolon can use that spell thereafter as a psychic spell by spending 1 point of psychic energy. The caster level and save DC are the same as for <em>basic psychic magic.</em></Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack - it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
<Ability id="unchevolutionlimbs-limbs-ex-fn6-5" icon={["stairs-goal","upgrade"]}>
<Pair single id="unchevolutionlimbs-limbs-ex-fn6-5"><Link to="/unchevolution/limbs">⮞</Link> Limbs (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.5" id="ability-unchained_evolutions-fake-fn-6.5" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability"><p>The eidolon grows an additional pair of limbs. These limbs can take one of two forms.</p>
<p>They can be made into legs, complete with feet. Each pair of legs increases the eidolon's base speed by 10 feet.</p>
<p>Alternatively, they can be made into arms, complete with hands. The eidolon does not gain any additional natural attacks for an additional pair of arms, but it can take other evolutions that add additional attacks (such as <Link to="/unchevolution/claws">claws</Link> or <Link to="/unchevolution/slam">slam</Link>). Arms that have hands can be used to wield weapons, if the eidolon is proficient.</p>
</Pair>
<Pair title="Special">This evolution can be selected more than once.</Pair>
</Ability>
<Ability id="unchevolutionpoison-poison-ex-fn6-6" icon={["upgrade"]}>
<Pair single id="unchevolutionpoison-poison-ex-fn6-6" flavor="The eidolon secretes toxic venom, gaining a poison attack."><Link to="/unchevolution/poison">⮞</Link> Poison (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.6" id="ability-unchained_evolutions-fake-fn-6.6" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/bite">bite</Link> or <Link to="/unchevolution/sting">sting</Link></Pair>
<Pair title="Ability"><p>Select one bite or sting attack. Whenever the selected attack hits, the target is poisoned.</p>
<AffInfo type="Injury" save="Fort 10 + 1/2 the eidolon's HD + its Con modifier" freq="1/round for 4 rounds" eff={<>1d4 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p">Eidolon Poison</AffInfo>
<p>The save DC is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier.</p>
</Pair>
<Pair title="Special">For 2 additional evolution points, this poison deals Constitution damage instead. This poison can be used no more than once per round.</Pair>
</Ability>
<Ability id="unchevolutionrake-rake-ex-fn6-7" icon={["mailed-fist"]}>
<Pair single id="unchevolutionrake-rake-ex-fn6-7"><Link to="/unchevolution/rake">⮞</Link> Rake (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.7" id="ability-unchained_evolutions-fake-fn-6.7" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">4th-level unchained summoner; quadruped base form</Pair>
<Pair title="Ability">The eidolon grows dangerous claws on its feet, allowing it to make two <Link to="/umr/rake">rake</Link> attacks against foes it is grappling. These attacks are <Link to="/umr/primary_attack">primary attacks</Link>. The eidolon can make these additional attacks each time it succeeds at a <Link to="/rule/grapple">grapple</Link> check against the target. These rake attacks deal 1d4 points of damage (1d6 if Large, 1d8 if Huge).</Pair>
<Pair title="Special">This evolution counts as one natural attack toward the eidolon's maximum.</Pair>
</Ability>
<Ability id="unchevolutionrend-rend-ex-fn6-8" icon={["upgrade"]}>
<Pair single id="unchevolutionrend-rend-ex-fn6-8" flavor={<>The eidolon learns to rip and tear the flesh of those it attacks with its claws, gaining the <Link to="/umr/rend">rend</Link> ability.</>}><Link to="/unchevolution/rend">⮞</Link> Rend (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.8" id="ability-unchained_evolutions-fake-fn-6.8" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">6th-level unchained summoner, <Link to="/unchevolution/claws">claws</Link></Pair>
<Pair title="Ability">Whenever the eidolon makes two successful claw attacks against the same target in 1 round, its claws latch on to the flesh and deal extra damage. This damage is equal to the damage dealt by one claw attack plus 1-1/2 times the eidolon's Strength modifier.</Pair>
</Ability>
<Ability id="unchevolutionsharedslot-shared-slot-su-fn4-3" icon={["stairs-goal"]}>
<Pair single id="unchevolutionsharedslot-shared-slot-su-fn4-3"><Link to="/unchevolution/shared_slot">⮞</Link> Shared Slot (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-4.3" id="ability-unchained_evolutions-fake-fn-4.3" data-hash-target to="ability-unchained_evolutions-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/twinned">Twinned</Link> eidolon</Pair>
<Pair title="Choice">Select a magic item slot. A magic item worn by the eidolon in that slot remains active even if the summoner is also wearing a magic item in that slot.</Pair>
<Pair title="Special">This evolution can be selected more than once. Each time an eidolon selects this evolution, it applies to a new slot.</Pair>
</Ability>
<Ability id="unchevolutiontrample-trample-ex-fn6-9" icon={["mailed-fist","armor-upgrade"]}>
<Pair single id="unchevolutiontrample-trample-ex-fn6-9" flavor={<>The eidolon gains the ability to crush its foes underfoot, gaining the <Link to="/umr/trample">trample</Link> ability.</>}><Link to="/unchevolution/trample">⮞</Link> Trample (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.9" id="ability-unchained_evolutions-fake-fn-6.9" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">Biped or quadruped base form</Pair>
<Pair title="Full-Round Action"><p>The eidolon can overrun any creature that is at least one size category smaller than itself. This works like the <Link to="/rule/overrun">overrun</Link> combat maneuver, but the eidolon does not need to attempt a check; it merely has to move over opponents in its path. The creatures take 1d6 points of damage (1d8 if Large, 2d6 if Huge), plus 1-1/2 times the eidolon's Strength modifier.</p>
<p>Targets of the trample can make attacks of opportunity at a -4 penalty. If a target forgoes this attack of opportunity, it can attempt a Reflex save for half damage. The DC of this save is 10 + 1/2 the eidolon's Hit Dice + the eidolon's Strength modifier.</p>
</Pair>
<Pair title="Special">A trampling eidolon can deal trampling damage to a specific creature only once per round.</Pair>
</Ability>
<Ability id="unchevolutiontremorsense-tremorsense-ex-fn6-10" icon={["stairs-goal"]}>
<Pair single id="unchevolutiontremorsense-tremorsense-ex-fn6-10"><Link to="/unchevolution/tremorsense">⮞</Link> Tremorsense (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.10" id="ability-unchained_evolutions-fake-fn-6.10" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon becomes attuned to vibrations in the ground, gaining <Link to="/umr/tremorsense">tremorsense</Link> with a range of 30 feet. This works like the <Link to="/unchevolution/blindsense">blindsense</Link> evolution, but only if both the eidolon and the creature to be pinpointed are in contact with the ground.</Pair>
</Ability>
<Ability id="unchevolutiontrip-trip-ex-fn6-11" icon={["mailed-fist"]}>
<Pair single id="unchevolutiontrip-trip-ex-fn6-11" flavor={<>The eidolon becomes adept at knocking foes to the ground with its bite, granting it a <Link to="/umr/trip">trip</Link> attack.</>}><Link to="/unchevolution/trip">⮞</Link> Trip (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.11" id="ability-unchained_evolutions-fake-fn-6.11" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/eidolon/daemon">Daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/elemental">elemental</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/bite">bite</Link></Pair>
<Pair title="Ability">Whenever the eidolon makes a successful bite attack, it can attempt a free combat maneuver check. If the eidolon succeeds at this check, the target is knocked <Link to="/rule/prone">prone</Link>. If the eidolon fails, it is not tripped in return.</Pair>
<Pair title="Special">This ability works only on creatures of a size category equal to or smaller than the eidolon.</Pair>
</Ability>
<Ability id="unchevolutionweapontraining-weapon-training-ex-fn6-12" icon={["stairs-goal"]}>
<Pair single id="unchevolutionweapontraining-weapon-training-ex-fn6-12"><Link to="/unchevolution/weapon_training">⮞</Link> Weapon Training (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-6.12" id="ability-unchained_evolutions-fake-fn-6.12" data-hash-target to="ability-unchained_evolutions-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The eidolon learns to use a weapon, gaining <Link to="/feat/simple_weapon_proficiency">Simple Weapon Proficiency</Link> as a bonus feat.</Pair>
<Pair title="Special">If 2 additional evolution points are spent, it gains proficiency with all martial weapons as well.</Pair>
</Ability>
<h3 id="ability-unchained_evolutions-3-point-evolutions" data-hash-target>3-Point Evolutions</h3>
<p>The following evolutions cost 3 points from the eidolon's evolution pool.</p>
<Ability id="unchevolutionadvancedpsychicmagic-advanced-psychic-magic-fn5-3" icon={["magic-swirl"]}>
<Pair single id="unchevolutionadvancedpsychicmagic-advanced-psychic-magic-fn5-3"><Link to="/unchevolution/advanced_psychic_magic">⮞</Link> Advanced Psychic Magic <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.3" id="ability-unchained_evolutions-fake-fn-5.3" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/intermediate_psychic_magic">intermediate psychic magic</Link>, Charisma 12+</Pair>
<Pair title="Ability">The eidolon gains 5 points of psychic energy that it can spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/darkness">darkness</Link>, <Link to="/spell/detect_thoughts">detect thoughts</Link>, <Link to="/spell/disfiguring_touch">disfiguring touch</Link>, <Link to="/spell/id_insinuation_i">id insinuation I</Link>, <Link to="/spell/mind_thrust_ii">mind thrust II</Link>, or <Link to="/spell/touch_of_idiocy">touch of idiocy</Link>. The eidolon can cast that spell as a psychic spell by spending 2 points of psychic energy. The caster level and save DC are the same as for <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack - it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
<Ability id="unchevolutionalienconsciousness-alien-consciousness-ex-fn5-4" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionalienconsciousness-alien-consciousness-ex-fn5-4" flavor="The eidolon's mind is dangerously incomprehensible to mortals who contact it."><Link to="/unchevolution/alien_consciousness">⮞</Link> Alien Consciousness (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.4" id="ability-unchained_evolutions-fake-fn-5.4" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link> or <Link to="/eidolon/protean">protean</Link> subtype</Pair>
<Pair title="Passive Ability"><p>Non-aberrations that read the eidolon's mind or make mental contact with it take 1d4 points of <Link to="/rule/wisdom_damage">Wisdom damage</Link> (or 1d8 points of sanity damage, if you use the <Link to="/rule/sanity">sanity rules</Link>).</p>
<p>This contact also includes communication via telepathy - an eidolon that has telepathic capability must initiate this particular contact as a <strong className="hl">swift action</strong> against a single target in order to force its alien consciousness on another creature. A successful Will saving throw (DC = 10 + 1/2 the eidolon's HD + the eidolon's Charisma modifier) halves the damage.</p>
</Pair>
<Pair title="Special">Once a creature has been subjected to the eidolon's alien consciousness, it is immune to further damage from that eidolon's alien consciousness for 24 hours. The eidolon's summoner is immune to his own eidolon's alien consciousness, but he can still be affected by other eidolons' alien consciousnesses. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="unchevolutionblindsense-blindsense-ex-fn7" icon={["stairs-goal"]}>
<Pair single id="unchevolutionblindsense-blindsense-ex-fn7"><Link to="/unchevolution/blindsense">⮞</Link> Blindsense (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7" id="ability-unchained_evolutions-fake-fn-7" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon's senses become incredibly acute, giving it <Link to="/umr/blindsense">blindsense</Link> with a range of 30 feet. This ability allows the eidolon to pinpoint the location of creatures that it can't see without having to attempt a Perception check, but such creatures still have total <Link to="/rule/concealment">concealment</Link> from the eidolon. Visibility still affects the eidolon's movement, and it is still denied its Dexterity bonus to Armor Class against attacks from creatures it cannot see.</Pair>
</Ability>
<Ability id="unchevolutionburrow-burrow-ex-fn7-2" icon={["stairs-goal"]}>
<Pair single id="unchevolutionburrow-burrow-ex-fn7-2" flavor="The eidolon grows thick and gnarled claws, allowing it to move through the earth."><Link to="/unchevolution/burrow">⮞</Link> Burrow (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.2" id="ability-unchained_evolutions-fake-fn-7.2" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Ability">The eidolon gains a burrow speed equal to 1/2 its base speed. It can use this speed to move through clay, dirt, earth, and sand. It does not leave a hole behind, nor is its passage marked on the surface.</Pair>
</Ability>
<Ability id="unchevolutiondamagereduction-damage-reduction-su-fn7-3" icon={["armor-upgrade"]}>
<Pair single id="unchevolutiondamagereduction-damage-reduction-su-fn7-3" flavor="The eidolon's body becomes more resistant to harm."><Link to="/unchevolution/damage_reduction">⮞</Link> Damage Reduction (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.3" id="ability-unchained_evolutions-fake-fn-7.3" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level unchained summoner, damage reduction granted by the eidolon's subtype</Pair>
<Pair title="Passive Ability">Increase the damage reduction granted by the eidolon's subtype by 5.</Pair>
</Ability>
<Ability id="unchevolutionfrightfulpresence-frightful-presence-ex-fn7-4" icon={["armor-downgrade"]}>
<Pair single id="unchevolutionfrightfulpresence-frightful-presence-ex-fn7-4"><Link to="/unchevolution/frightful_presence">⮞</Link> Frightful Presence (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.4" id="ability-unchained_evolutions-fake-fn-7.4" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level unchained summoner</Pair>
<Pair title="Ability"><p>The eidolon becomes unsettling to its foes, gaining the <Link to="/umr/frightful_presence">frightful presence</Link> ability. The eidolon can activate this ability as part of an offensive action, such as a <Link to="/rule/charge">charge</Link> or attack.</p>
<p>Opponents within 30 feet of the eidolon must succeed at a Will save or become <Link to="/misc/shaken">shaken</Link> for 3d6 rounds. The DC of this save is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Charisma modifier.</p>
<p>If the eidolon has at least 4 more Hit Dice than an opponent that fails this save, that opponent becomes <Link to="/misc/frightened">frightened</Link> instead.</p>
</Pair>
<Pair title="Special">Foes with more Hit Dice than the eidolon are immune to this effect.</Pair>
</Ability>
<Ability id="unchevolutionpounce-pounce-ex-fn7-5" icon={["mailed-fist"]}>
<Pair single id="unchevolutionpounce-pounce-ex-fn7-5"><Link to="/unchevolution/pounce">⮞</Link> Pounce (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.5" id="ability-unchained_evolutions-fake-fn-7.5" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner, quadruped base form</Pair>
<Pair title="Ability">The eidolon gains quick reflexes, allowing it to make a full attack after a <Link to="/rule/charge">charge</Link>.</Pair>
</Ability>
<Ability id="unchevolutionswallowwhole-swallow-whole-ex-fn7-6" icon={["mailed-fist"]}>
<Pair single id="unchevolutionswallowwhole-swallow-whole-ex-fn7-6"><Link to="/unchevolution/swallow_whole">⮞</Link> Swallow Whole (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.6" id="ability-unchained_evolutions-fake-fn-7.6" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner; <Link to="/eidolon/agathion">agathion</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, <Link to="/eidolon/devil">devil</Link>, <Link to="/eidolon/div">div</Link>, <Link to="/eidolon/elemental">elemental</Link>, <Link to="/eidolon/protean">protean</Link>, or <Link to="/eidolon/psychopomp">psychopomp</Link> subtype; <Link to="/unchevolution/grab">grab</Link> (bite)</Pair>
<Pair title="Ability"><p>The eidolon gains the <Link to="/umr/swallow_whole">swallow whole</Link> ability, giving it the ability to consume its foes. If the eidolon begins its turn with a creature grappled using its <em>bite</em> attack (see the <em>grab</em> evolution), it can attempt a combat maneuver check to swallow the creature. The creature must be at least one size category smaller than the eidolon.</p>
<p>Swallowed creatures take an amount of bludgeoning damage equal to the eidolon's bite damage each round + 1d6 points of damage. A swallowed creature keeps the <Link to="/rule/grappled">grappled</Link> condition, but can attempt to cut its way free with a light piercing or slashing weapon. The amount of damage needed to cut free is equal to 1/10 the eidolon's total hit points. The eidolon's AC against these attacks is equal to 10 + 1/2 its natural armor bonus. If a swallowed creature cuts its way out, the eidolon loses this ability until it heals this damage.</p>
<p>Alternatively, the swallowed creature can attempt to escape the grapple as normal. Success indicates that it has returned to the eidolon's mouth, where it can attempt to escape or can be swallowed again.</p>
</Pair>
</Ability>
<Ability id="unchevolutionweb-web-ex-fn7-7" icon={["stairs-goal","smoking-finger"]}>
<Pair single id="unchevolutionweb-web-ex-fn7-7"><Link to="/unchevolution/web">⮞</Link> Web (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.7" id="ability-unchained_evolutions-fake-fn-7.7" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/protean">protean</Link> subtype; <Link to="/unchevolution/climb">climb</Link></Pair>
<Pair title="Ability">The eidolon gains a pair of spinnerets, giving it the ability to spin webs. The eidolon can use these webs to support itself plus one creature of up to the same size.</Pair>
<Pair title="Ability"><p>It can throw webbing as a ranged touch attack up to eight times per day, entangling a creature up to one size larger than the eidolon. The webbing has a range of 50 feet and a 10-foot range increment.</p>
<p>Creatures <Link to="/rule/entangled">entangled</Link> by the web can escape with a successful Escape Artist check, or with a Strength check at a -4 penalty. The DC of these checks is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier. The webs have a hardness of 0 and a number of hits points equal to the eidolon's total Hit Dice.</p>
</Pair>
<Pair title="Special">The eidolon can climb its own webs at its climb speed and can pinpoint the location of any creature touching its webs.</Pair>
</Ability>
<h3 id="ability-unchained_evolutions-4-point-evolutions" data-hash-target>4-Point Evolutions</h3>
<p>The following evolutions cost 4 points from the eidolon's evolution pool.</p>
<Ability id="unchevolutionamorphous-amorphous-ex-fn5-5" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionamorphous-amorphous-ex-fn5-5"><Link to="/unchevolution/amorphous">⮞</Link> Amorphous (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.5" id="ability-unchained_evolutions-fake-fn-5.5" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> or <Link to="/eidolon/elemental">elemental</Link> subtype</Pair>
<Pair title="Passive Ability">The eidolon's biology lacks discernible weak points. It is not subject to critical hits and sneak attacks.</Pair>
</Ability>
<Ability id="unchevolutionblindsight-blindsight-ex-fn7-8" icon={["stairs-goal"]}>
<Pair single id="unchevolutionblindsight-blindsight-ex-fn7-8"><Link to="/unchevolution/blindsight">⮞</Link> Blindsight (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.8" id="ability-unchained_evolutions-fake-fn-7.8" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level unchained summoner, <Link to="/unchevolution/blindsense">blindsense</Link></Pair>
<Pair title="Ability">The eidolon's senses sharpen even further, granting it <Link to="/umr/blindsight">blindsight</Link> with a range of 30 feet. The eidolon can maneuver and attack as normal, ignoring darkness, invisibility, and most forms of <Link to="/rule/concealment">concealment</Link> as long as it has line of effect to the target.</Pair>
</Ability>
<Ability id="unchevolutionbreathweapon-breath-weapon-su-fn7-9" icon={["tornado-discs","barbed-arrow"]}>
<Pair single id="unchevolutionbreathweapon-breath-weapon-su-fn7-9" flavor="The eidolon learns to exhale a cone or line of magical energy, gaining a breath weapon."><Link to="/unchevolution/breath_weapon">⮞</Link> Breath Weapon (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.9" id="ability-unchained_evolutions-fake-fn-7.9" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Choice">Select acid, cold, electricity, or fire.</Pair>
<Pair title="Ability">The eidolon can breathe a 30-foot cone (or 60-foot line) that deals 1d6 points of damage of the selected type per Hit Dice it possesses. Those caught in the breath weapon can attempt a Reflex save for half damage. The DC is equal to 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier.</Pair>
<Pair title="Special">The eidolon can use this ability once per day. The eidolon can gain additional uses of this ability per day by spending 1 evolution point per additional use (to a maximum of three total uses per day).</Pair>
</Ability>
<Ability id="unchevolutiondisease-disease-fn5-6" icon={["upgrade"]}>
<Pair single id="unchevolutiondisease-disease-fn5-6"><Link to="/unchevolution/disease">⮞</Link> Disease <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.6" id="ability-unchained_evolutions-fake-fn-5.6" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level unchained summoner; <Link to="/eidolon/aberrant">aberrant</Link>, <Link to="/eidolon/daemon">daemon</Link>, <Link to="/eidolon/demon">demon</Link>, or <Link to="/eidolon/devil">devil</Link> subtype</Pair>
<Pair title="Ability">One of the eidolon's natural weapons carries a disease chosen from the following list: <Link to="/disease/bubonic_plague">bubonic plague</Link>, <Link to="/disease/filth_fever">filth fever</Link>, <Link to="/disease/leprosy">leprosy</Link>, <Link to="/disease/red_ache">red ache</Link>, or <Link to="/disease/shakes">shakes</Link>. Each hit forces a saving throw against the disease's normal effects. The disease has no onset, however. The save DC equals 10 + 1/2 the eidolon's Hit Dice + the eidolon's Constitution modifier. The eidolon can expose a creature to its disease no more than once per round.</Pair>
<Pair title="Special">By spending 2 additional evolution points, you can instead choose the following additional diseases: <Link to="/disease/demon_fever">demon fever</Link> (only if the eidolon has the <em>demon</em> subtype), <Link to="/disease/devil_chills">devil chills</Link> (only if the eidolon has the <em>devil</em> subtype), or <Link to="/disease/slimy_doom">slimy doom</Link>.</Pair>
</Ability>
<Ability id="unchevolutionfasthealing-fast-healing-su-fn7-10" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionfasthealing-fast-healing-su-fn7-10"><Link to="/unchevolution/fast_healing">⮞</Link> Fast Healing (Su) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-7.10" id="ability-unchained_evolutions-fake-fn-7.10" data-hash-target to="ability-unchained_evolutions-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level unchained summoner</Pair>
<Pair title="Passive Ability"><p>The eidolon's body gains the ability to heal wounds very quickly, giving it <Link to="/umr/fast_healing">fast healing</Link> 1. The eidolon heals 1 point of damage per round, just like via natural healing.</p>
<p><em>Fast healing</em> does not restore hit points lost due to starvation, thirst, or suffocation, nor does it allow the eidolon to regrow lost body parts (or to reattach severed parts).</p>
<p><em>Fast healing</em> functions as long as the eidolon is alive. This <em>fast healing</em> does not function when the eidolon is not on the same plane as its summoner.</p>
</Pair>
<Pair title="Special">This healing can be increased by 1 point per round for every 2 additional evolution points spent (to a maximum of 5 points per round).</Pair>
</Ability>
<Ability id="unchevolutionlarge-large-ex-fn8" icon={["upgrade","armor-upgrade","broken-shield"]}>
<Pair single id="unchevolutionlarge-large-ex-fn8"><Link to="/unchevolution/large">⮞</Link> Large (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-8" id="ability-unchained_evolutions-fake-fn-8" data-hash-target to="ability-unchained_evolutions-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">8th-level unchained summoner, Medium size</Pair>
<Pair title="Ability">The eidolon grows in size, becoming Large. The eidolon gains a +4 bonus to Strength, a +2 bonus to Constitution, and a +2 bonus to its natural armor. It takes a -2 penalty to Dexterity. This size change also gives the creature a -1 size penalty to AC and on attack rolls, a +1 bonus on combat maneuver checks and to CMD, a -2 penalty on Fly checks, and a -4 penalty on Stealth checks. If the eidolon has the biped base form, it also gains a reach of 10 feet. Any <Link to="/unchevolution/reach">reach</Link> evolutions the eidolon possesses are added to this total.</Pair>
<Pair title="At 13th Level"><p>If 6 additional evolution points are spent, the eidolon instead becomes Huge. The eidolon gains a +8 bonus to Strength, a +4 bonus to Constitution, and a +5 bonus to its natural armor. It takes a -4 penalty to Dexterity. This size change also gives the creature a -2 size penalty to AC and on attack rolls, a +2 bonus on combat maneuver checks and to CMD, a 10-foot reach, a -4 penalty on Fly checks, and a -8 penalty on Stealth checks. If the eidolon has the biped base form, its reach increases to 15 feet instead of 10 feet. Any <em>reach</em> evolutions the eidolon possesses are added to this total.</p>
<p>These bonuses and penalties replace, and do not stack with, those gained from becoming Large.</p>
</Pair>
<Pair title="Special">The <Link to="/unchevolution/ability_increase">ability increase</Link> evolution costs twice as much (4 evolution points) when adding to the Strength or Constitution scores of a Large or Huge eidolon.</Pair>
</Ability>
<Ability id="unchevolutionspellresistance-spell-resistance-ex-fn8-2" icon={["armor-upgrade"]}>
<Pair single id="unchevolutionspellresistance-spell-resistance-ex-fn8-2" flavor="The eidolon is protected against magic, gaining spell resistance."><Link to="/unchevolution/spell_resistance">⮞</Link> Spell Resistance (Ex) <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-8.2" id="ability-unchained_evolutions-fake-fn-8.2" data-hash-target to="ability-unchained_evolutions-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites">9th-level unchained summoner</Pair>
<Pair title="Passive Ability">The eidolon's spell resistance is equal to 11 + the summoner's level. This spell resistance does not apply to spells cast by the summoner.</Pair>
</Ability>
<Ability id="unchevolutionsuperiorpsychicmagic-superior-psychic-magic-fn5-7" icon={["magic-swirl"]}>
<Pair single id="unchevolutionsuperiorpsychicmagic-superior-psychic-magic-fn5-7"><Link to="/unchevolution/superior_psychic_magic">⮞</Link> Superior Psychic Magic <sup><InnerLink showBacklink="backlink-ability-unchained_evolutions-fake-fn-5.7" id="ability-unchained_evolutions-fake-fn-5.7" data-hash-target to="ability-unchained_evolutions-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level unchained summoner, <Link to="/eidolon/aberrant">aberrant</Link> subtype, <Link to="/unchevolution/advanced_psychic_magic">advanced psychic magic</Link>, Charisma 13+</Pair>
<Pair title="Ability">The eidolon has 7 points of psychic magic to spend each day.</Pair>
<Pair title="Choice">Select one spell from the following list: <Link to="/spell/confusion">confusion</Link>, <Link to="/spell/deeper_darkness">deeper darkness</Link>, <Link to="/spell/displacement">displacement</Link>, <Link to="/spell/jesters_jaunt">jester's jaunt</Link>, <Link to="/spell/id_insinuation_ii">id insinuation II</Link>, or <Link to="/spell/mind_thrust_iii">mind thrust III</Link>. The eidolon can cast that spell as a psychic spell by spending 3 points of psychic energy. The caster level and save DC are the same as for <Link to="/unchevolution/basic_psychic_magic">basic psychic magic</Link>.</Pair>
<Pair title="Special">This evolution can be selected more than once, selecting a different spell each time. The eidolon's amount of psychic energy available to spend each day does not stack; it uses only the highest number of points granted by its most powerful <em>psychic magic</em> evolution.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-unchained_evolutions-label">Footnotes</h3><ol>
<li id="ability-unchained_evolutions-fake-fn-1-target"><p><Link to="/source/horror_realms">Horror Realms</Link> pg. 18 <InnerLink aria-label="Back to reference 1" id="backlink-ability-unchained_evolutions-fake-fn-1" data-hash-target to="ability-unchained_evolutions-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-unchained_evolutions-fake-fn-1.2" data-hash-target to="ability-unchained_evolutions-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-2-target"><p><Link to="/source/pathfinder_unchained">Pathfinder Unchained</Link> pg. 35 <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2" data-hash-target to="ability-unchained_evolutions-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.2" data-hash-target to="ability-unchained_evolutions-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.3" data-hash-target to="ability-unchained_evolutions-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.4" data-hash-target to="ability-unchained_evolutions-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.5" data-hash-target to="ability-unchained_evolutions-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.6" data-hash-target to="ability-unchained_evolutions-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.7" data-hash-target to="ability-unchained_evolutions-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.8" data-hash-target to="ability-unchained_evolutions-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.9" data-hash-target to="ability-unchained_evolutions-fake-fn-2.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.10" data-hash-target to="ability-unchained_evolutions-fake-fn-2.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-unchained_evolutions-fake-fn-2.11" data-hash-target to="ability-unchained_evolutions-fake-fn-2.11">↩<sup>11</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-3-target"><p>Pathfinder Unchained pg. 36 <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3" data-hash-target to="ability-unchained_evolutions-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.2" data-hash-target to="ability-unchained_evolutions-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.3" data-hash-target to="ability-unchained_evolutions-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.4" data-hash-target to="ability-unchained_evolutions-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.5" data-hash-target to="ability-unchained_evolutions-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.6" data-hash-target to="ability-unchained_evolutions-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.7" data-hash-target to="ability-unchained_evolutions-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.8" data-hash-target to="ability-unchained_evolutions-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.9" data-hash-target to="ability-unchained_evolutions-fake-fn-3.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.10" data-hash-target to="ability-unchained_evolutions-fake-fn-3.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.11" data-hash-target to="ability-unchained_evolutions-fake-fn-3.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.12" data-hash-target to="ability-unchained_evolutions-fake-fn-3.12">↩<sup>12</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.13" data-hash-target to="ability-unchained_evolutions-fake-fn-3.13">↩<sup>13</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-unchained_evolutions-fake-fn-3.14" data-hash-target to="ability-unchained_evolutions-fake-fn-3.14">↩<sup>14</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-4-target"><p><Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link> pg. 19 <InnerLink aria-label="Back to reference 4" id="backlink-ability-unchained_evolutions-fake-fn-4" data-hash-target to="ability-unchained_evolutions-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-unchained_evolutions-fake-fn-4.2" data-hash-target to="ability-unchained_evolutions-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-unchained_evolutions-fake-fn-4.3" data-hash-target to="ability-unchained_evolutions-fake-fn-4.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-5-target"><p>Horror Realms pg. 19 <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5" data-hash-target to="ability-unchained_evolutions-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.2" data-hash-target to="ability-unchained_evolutions-fake-fn-5.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.3" data-hash-target to="ability-unchained_evolutions-fake-fn-5.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.4" data-hash-target to="ability-unchained_evolutions-fake-fn-5.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.5" data-hash-target to="ability-unchained_evolutions-fake-fn-5.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.6" data-hash-target to="ability-unchained_evolutions-fake-fn-5.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-unchained_evolutions-fake-fn-5.7" data-hash-target to="ability-unchained_evolutions-fake-fn-5.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-6-target"><p>Pathfinder Unchained pg. 37 <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6" data-hash-target to="ability-unchained_evolutions-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.2" data-hash-target to="ability-unchained_evolutions-fake-fn-6.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.3" data-hash-target to="ability-unchained_evolutions-fake-fn-6.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.4" data-hash-target to="ability-unchained_evolutions-fake-fn-6.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.5" data-hash-target to="ability-unchained_evolutions-fake-fn-6.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.6" data-hash-target to="ability-unchained_evolutions-fake-fn-6.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.7" data-hash-target to="ability-unchained_evolutions-fake-fn-6.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.8" data-hash-target to="ability-unchained_evolutions-fake-fn-6.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.9" data-hash-target to="ability-unchained_evolutions-fake-fn-6.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.10" data-hash-target to="ability-unchained_evolutions-fake-fn-6.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.11" data-hash-target to="ability-unchained_evolutions-fake-fn-6.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-unchained_evolutions-fake-fn-6.12" data-hash-target to="ability-unchained_evolutions-fake-fn-6.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-7-target"><p>Pathfinder Unchained pg. 38 <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7" data-hash-target to="ability-unchained_evolutions-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.2" data-hash-target to="ability-unchained_evolutions-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.3" data-hash-target to="ability-unchained_evolutions-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.4" data-hash-target to="ability-unchained_evolutions-fake-fn-7.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.5" data-hash-target to="ability-unchained_evolutions-fake-fn-7.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.6" data-hash-target to="ability-unchained_evolutions-fake-fn-7.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.7" data-hash-target to="ability-unchained_evolutions-fake-fn-7.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.8" data-hash-target to="ability-unchained_evolutions-fake-fn-7.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.9" data-hash-target to="ability-unchained_evolutions-fake-fn-7.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-unchained_evolutions-fake-fn-7.10" data-hash-target to="ability-unchained_evolutions-fake-fn-7.10">↩<sup>10</sup></InnerLink></p></li>
<li id="ability-unchained_evolutions-fake-fn-8-target"><p>Pathfinder Unchained pg. 39 <InnerLink aria-label="Back to reference 8" id="backlink-ability-unchained_evolutions-fake-fn-8" data-hash-target to="ability-unchained_evolutions-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-unchained_evolutions-fake-fn-8.2" data-hash-target to="ability-unchained_evolutions-fake-fn-8.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _grand_hexes = {title: "Grand Hexes", topLink: ["Witch","class/witch"], jsx: <div className="compilation"><h2 id="ability-grand_hexes-grand-hexes">Grand Hexes</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>Starting at 18th level, and every two levels thereafter, a witch can choose one of the following grand hexes whenever she could select a new hex.</p>
<hr/>
<Ability id="hexabominate-abominate-su-fn1" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexabominate-abominate-su-fn1"><Link to="/hex/abominate">⮞</Link> Abominate (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-1" id="ability-grand_hexes-fake-fn-1" data-hash-target to="ability-grand_hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability">The witch transforms a creature within 30 feet into an <Link to="/type/aberration">aberration</Link>. This hex acts as <Link to="/spell/baleful_polymorph">baleful polymorph</Link>, except the target is transmuted into a Small, Medium, or Large aberration. The target's abilities are modified as <Link to="/spell/monstrous_physique_iv">monstrous physique IV</Link>.</Pair>
<Pair title="Special">Whether or not its save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexanimalservant-animal-servant-su-fn2" icon={["armor-downgrade"]}>
<Pair single id="hexanimalservant-animal-servant-su-fn2"><Link to="/hex/animal_servant">⮞</Link> Animal Servant (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-2" id="ability-grand_hexes-fake-fn-2" data-hash-target to="ability-grand_hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch can use this hex to turn a humanoid enemy into an animal and rob it of its free will. The transformation works as <Link to="/spell/beast_shape_ii">beast shape II</Link> and is negated by a successful Will save.</p>
<p>The transformed creature retains its Intelligence score and known languages, if any, but the witch controls its mind. This effect functions as <Link to="/spell/dominate_monster">dominate monster</Link>, except the creature does not receive further saving throws to resist the hex.</p>
</Pair>
<Pair title="Special">The effect can be removed only with <Link to="/spell/wish">wish</Link> or similar magic, although slaying the witch also ends the effect. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexcurseofnonviolence-curse-of-nonviolence-su-fn3" icon={["armor-downgrade"]}>
<Pair single id="hexcurseofnonviolence-curse-of-nonviolence-su-fn3"><Link to="/hex/curse_of_nonviolence">⮞</Link> Curse of Nonviolence (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-3" id="ability-grand_hexes-fake-fn-3" data-hash-target to="ability-grand_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch can curse a creature to prevent it from attacking innocents. If the target fails its Will save, it cannot take violent actions or do anything destructive against any creature with fewer Hit Dice than itself. If another creature takes hostile action against the cursed creature, the cursed creature can act normally in regard to that creature only.</Pair>
<Pair title="Special">This is an abjuration effect. The curse is permanent but can be removed with a <Link to="/spell/break_enchantment">break enchantment</Link>, <Link to="/spell/miracle">miracle</Link>, or <Link to="/spell/wish">wish</Link> spell. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexdeathcurse-death-curse-su-fn4" icon={["armor-downgrade"]}>
<Pair single id="hexdeathcurse-death-curse-su-fn4"><Link to="/hex/death_curse">⮞</Link> Death Curse (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-4" id="ability-grand_hexes-fake-fn-4" data-hash-target to="ability-grand_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">This powerful hex seizes a creature's heart, causing death within just a few moments. This hex has a range of 30 feet. The hexed creature receives a Will save to negate the effect. If this save is failed, the creature becomes <Link to="/misc/fatigued">fatigued</Link> the first round of the hex. On the second round of the hex, the creature becomes <Link to="/misc/exhausted">exhausted</Link>. On the third round, the creature dies unless it succeeds at a Fort save.</Pair>
<Pair title="Special">Creatures that fail the first save but succeed at the second remain exhausted and take 4d6 points of damage + 1 point of damage per level of the witch. Slaying the witch that hexed the creature ends the effect, but any fatigue or exhaustion remains. Whether or not the saves are successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexdeathinterrupted-death-interrupted-su-fn5" icon={["magic-swirl","remedy"]}>
<Pair single id="hexdeathinterrupted-death-interrupted-su-fn5"><Link to="/hex/death_interrupted">⮞</Link> Death Interrupted (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-5" id="ability-grand_hexes-fake-fn-5" data-hash-target to="ability-grand_hexes-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability"><p>A witch with this grand hex can pluck a dead creature's soul from the River of Souls and store it in her familiar for safekeeping and eventual resurrection.</p>
<p>In order to use this ability, the witch must be adjacent to the target dead creature and her own familiar, and the ally's soul must be free and willing to return at the witch's behest. When the witch touches the creature's remains (some small portion of the creature's body must still exist, and it may have been dead for any amount of time), its soul enters the body of the witch's familiar as per <Link to="/spell/familiar_melding">familiar melding</Link>, as if the witch's familiar were the target's familiar.</p>
<p>The creature's soul can remain within the witch's familiar for up to 1 hour per class level the witch has. During this time, the witch can telepathically communicate with the creature's soul (though the soul cannot do anything else), and the witch can return the ally to life. Doing so is a <strong className="hl">standard action</strong> that returns the creature's soul to its body, brings it back to life with a number of hit points equal to 5d8 + 1 hit point per the witch's caster level. The witch must be within 300 feet of the creature's body to return it to life.</p>
</Pair>
<Pair title="Special"><p>If a creature's soul is in the witch's familiar and this effect expires, or if the witch attempts to return the creature to life but is out of range, the creature remains dead.</p>
<p>Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</p>
</Pair>
</Ability>
<Ability id="hexdireprophecy-dire-prophecy-su-fn6" icon={["armor-downgrade"]}>
<Pair single id="hexdireprophecy-dire-prophecy-su-fn6"><Link to="/hex/dire_prophecy">⮞</Link> Dire Prophecy (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-6" id="ability-grand_hexes-fake-fn-6" data-hash-target to="ability-grand_hexes-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch curses the target so he is doomed to die (Will negates). As long as the curse persists, the target takes a -4 penalty to his Armor Class and on attack rolls, saves, ability checks, and skill checks.</p>
<p>While the curse persists, the witch may end it by bringing its full force upon her victim all at once. Doing so gives the victim a penalty equal to the witch's caster level to his Armor Class or on any single attack roll, combat maneuver check, opposed ability or skill check, or saving throw. The witch must decide to apply this penalty before the roll to be modified is made. If the witch does not have line of sight to the target, the full force of the curse occurs when the GM considers it most appropriate, such as when the target is in mortal danger.</p>
</Pair>
<Pair title="Special">A target can only have one <em>dire prophecy</em> upon him at a time. Whether or not the target's save against the hex is successful, a creature cannot be the target of this hex for 1 day. This is a curse effect.</Pair>
</Ability>
<Ability id="hexeternalslumber-eternal-slumber-su-fn4-2" icon={["armor-downgrade"]}>
<Pair single id="hexeternalslumber-eternal-slumber-su-fn4-2"><Link to="/hex/eternal_slumber">⮞</Link> Eternal Slumber (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-4.2" id="ability-grand_hexes-fake-fn-4.2" data-hash-target to="ability-grand_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can touch a creature, causing it to drift off into a permanent slumber. The creature receives a Will save to negate this effect. If the save fails, the creature falls asleep and cannot be woken. The effect can only be removed with a <Link to="/spell/wish">wish</Link> or similar magic, although slaying the witch ends the effect.</Pair>
<Pair title="Ability">The witch can use this ability to poison food or drink, causing those who ingest it to make a save or fall into an <em>eternal slumber.</em> She can only have one such dose of poison at any one time, and it loses its potency after 1 minute if not consumed.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexforcedreincarnation-forced-reincarnation-su-fn4-3" icon={["armor-downgrade","magic-swirl"]}>
<Pair single id="hexforcedreincarnation-forced-reincarnation-su-fn4-3"><Link to="/hex/forced_reincarnation">⮞</Link> Forced Reincarnation (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-4.3" id="ability-grand_hexes-fake-fn-4.3" data-hash-target to="ability-grand_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch causes a creature within 30 feet to die and be immediately reincarnated into a new body. A Will save negates this effect. Those that fail are slain and immediately brought back to life with the spell <Link to="/spell/reincarnate">reincarnate</Link>.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexlaytorest-lay-to-rest-sp-fn3-2" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexlaytorest-lay-to-rest-sp-fn3-2"><Link to="/hex/lay_to_rest">⮞</Link> Lay to Rest (Sp) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-3.2" id="ability-grand_hexes-fake-fn-3.2" data-hash-target to="ability-grand_hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch may target a single undead creature with this hex as if with an <Link to="/spell/undeath_to_death">undeath to death</Link> spell. A Will save negates this effect.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexlifegiver-life-giver-su-fn4-4" icon={["remedy"]}>
<Pair single id="hexlifegiver-life-giver-su-fn4-4"><Link to="/hex/life_giver">⮞</Link> Life Giver (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-4.4" id="ability-grand_hexes-fake-fn-4.4" data-hash-target to="ability-grand_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Full-Round Action">Once per day the witch can touch a dead creature and bring it back to life. This functions as <Link to="/spell/resurrection">resurrection</Link>, but it does not require a material component.</Pair>
</Ability>
<Ability id="hexnaturaldisaster-natural-disaster-su-fn4-5" icon={["magic-swirl"]}>
<Pair single id="hexnaturaldisaster-natural-disaster-su-fn4-5"><Link to="/hex/natural_disaster">⮞</Link> Natural Disaster (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-4.5" id="ability-grand_hexes-fake-fn-4.5" data-hash-target to="ability-grand_hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A witch using this hex calls down the forces of nature to wreak havoc on an area. This functions as a <Link to="/spell/storm_of_vengeance">storm of vengeance</Link> combined with an <Link to="/spell/earthquake">earthquake</Link> that occurs on the second round of the effect (while acid is raining from the sky).</Pair>
<Pair title="Special">A witch must concentrate for the duration of this effect. If disrupted, the effect immediately ends. A witch can only use this ability once per day.</Pair>
</Ability>
<Ability id="hexsummonspirit-summon-spirit-sp-fn7" icon={["magic-swirl"]}>
<Pair single id="hexsummonspirit-summon-spirit-sp-fn7"><Link to="/hex/summon_spirit">⮞</Link> Summon Spirit (Sp) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-7" id="ability-grand_hexes-fake-fn-7" data-hash-target to="ability-grand_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch calls forth the <Link to="/template/ghost">ghost</Link> of a humanoid creature with no more than 18 Hit Dice. The ghost has its own personality and desires, but is willing to bargain with the witch, as if she had cast <Link to="/spell/greater_planar_ally">greater planar ally</Link>.</p>
<p>To seal an agreement with the witch, the ghost requires life energy equal to 1 temporary <Link to="/rule/negative_level">negative level</Link> (this is in addition to the standard payment for the ghost's service). This negative level persists as long as the ghost remains in the service of the witch; the witch can end the agreement as a <strong className="hl">standard action</strong>, immediately removing the negative level.</p>
</Pair>
</Ability>
<Ability id="hexwitchshut-witchs-hut-su-fn7-2" icon={["magic-swirl"]}>
<Pair single id="hexwitchshut-witchs-hut-su-fn7-2"><Link to="/hex/witchs_hut">⮞</Link> Witch's Hut (Su) <sup><InnerLink showBacklink="backlink-ability-grand_hexes-fake-fn-7.2" id="ability-grand_hexes-fake-fn-7.2" data-hash-target to="ability-grand_hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The witch can animate a hut, small house, covered wagon, tent, or similar construction as an <Link to="/monster/animated_object">animated object</Link>. The hut can be of up to Huge size (approximately 15 feet by 15 feet). The animated hut's hardness increases to 8 and its hit points double.</Pair>
<Pair title="Ability">The witch can give the hut the following commands: <strong>guard</strong> (the hut watches for trespassers within 120 feet using the witch's Perception modifier and screams if it spots any), <strong>hide</strong> (all entrances are hidden by illusory wall spells and locked with <Link to="/spell/arcane_lock">arcane lock</Link>), and <strong>move</strong> (moves at speed 60 on giant bird or bone legs as directed by the witch, even obeying commands such as "follow me from 100 feet away").</Pair>
<Pair title="Special">The hut remains animate for 24 hours, until she dismisses it or she animates another, at which time the hut stops where it is and reverts to its nonmagical state.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-grand_hexes-label">Footnotes</h3><ol>
<li id="ability-grand_hexes-fake-fn-1-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 28 <InnerLink aria-label="Back to reference 1" id="backlink-ability-grand_hexes-fake-fn-1" data-hash-target to="ability-grand_hexes-fake-fn-1">↩</InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-2-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 16 <InnerLink aria-label="Back to reference 2" id="backlink-ability-grand_hexes-fake-fn-2" data-hash-target to="ability-grand_hexes-fake-fn-2">↩</InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-3-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 27 <InnerLink aria-label="Back to reference 3" id="backlink-ability-grand_hexes-fake-fn-3" data-hash-target to="ability-grand_hexes-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-grand_hexes-fake-fn-3.2" data-hash-target to="ability-grand_hexes-fake-fn-3.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 69 <InnerLink aria-label="Back to reference 4" id="backlink-ability-grand_hexes-fake-fn-4" data-hash-target to="ability-grand_hexes-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-grand_hexes-fake-fn-4.2" data-hash-target to="ability-grand_hexes-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-grand_hexes-fake-fn-4.3" data-hash-target to="ability-grand_hexes-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-grand_hexes-fake-fn-4.4" data-hash-target to="ability-grand_hexes-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-grand_hexes-fake-fn-4.5" data-hash-target to="ability-grand_hexes-fake-fn-4.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-5-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> pg. 17 <InnerLink aria-label="Back to reference 5" id="backlink-ability-grand_hexes-fake-fn-5" data-hash-target to="ability-grand_hexes-fake-fn-5">↩</InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-6-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 82 <InnerLink aria-label="Back to reference 6" id="backlink-ability-grand_hexes-fake-fn-6" data-hash-target to="ability-grand_hexes-fake-fn-6">↩</InnerLink></p></li>
<li id="ability-grand_hexes-fake-fn-7-target"><p>Ultimate Magic pg. 83 <InnerLink aria-label="Back to reference 7" id="backlink-ability-grand_hexes-fake-fn-7" data-hash-target to="ability-grand_hexes-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-grand_hexes-fake-fn-7.2" data-hash-target to="ability-grand_hexes-fake-fn-7.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _greater_exploits = {title: "Greater Exploits", topLink: ["Arcanist","class/arcanist"], jsx: <><h2 id="ability-greater_exploits-greater-exploits">Greater Exploits</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_class_guide">Advanced Class Guide</Link></p>
<p>At 11th level and every 2 levels thereafter, an arcanist can choose one of the following greater exploits in place of an arcanist <Link to="/ability/exploits">exploit</Link>.</p>
<ScrollContainer id="ability-greater_exploits--table-0"><table>
<thead>
<tr>
<th>Exploit</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/exploit/alter_enhancements">Alter Enhancements (Su)<IonRippleEffect /></Link></td>
<td>Change one weapon or armor special ability to another with an equal cost.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/burning_flame">Burning Flame (Su)<IonRippleEffect /></Link></td>
<td>Improve your flaming arc.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/consume_primal_magic">Consume Primal Magic (Su)<IonRippleEffect /></Link></td>
<td>Use <em>consume spells</em> on primal magic events.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/convert_wand">Convert Wand (Su)<IonRippleEffect /></Link></td>
<td>Temporarily change a wand into a <em>cure</em> wand.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/counter_drain">Counter Drain (Su)<IonRippleEffect /></Link></td>
<td>Refill your arcane reservoir when you counterspell.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/counterspell_primal_magic">Counterspell Primal Magic (Su)<IonRippleEffect /></Link></td>
<td>Counter a primal magic event.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/create_primal_event">Create Primal Event (Su)<IonRippleEffect /></Link></td>
<td>Create a 10-foot-by-10-foot area of primal magic at a point within 30 feet.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/dancing_electricity">Dancing Electricity (Su)<IonRippleEffect /></Link></td>
<td>Improve your lightning lance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/energy_absorption">Energy Absorption (Su)<IonRippleEffect /></Link></td>
<td>Improve your energy shield and redirect some of the damage it absorbs.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/greater_counterspell">Greater Counterspell (Su)<IonRippleEffect /></Link></td>
<td>Counterspell more easily.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/greater_metamagic_knowledge">Greater Metamagic Knowledge<IonRippleEffect /></Link></td>
<td>Gain a metamagic feat you can swap out daily.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/greater_spell_disruption">Greater Spell Disruption (Su)<IonRippleEffect /></Link></td>
<td>Dispel a magic effect or item.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/greater_spell_resistance">Greater Spell Resistance (Su)<IonRippleEffect /></Link></td>
<td>Increase your spell resistance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/hellfire_ray">Hellfire Ray (Su)<IonRippleEffect /></Link></td>
<td>Influse your flaming arc with hellfire.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/icy_tomb">Icy Tomb (Su)<IonRippleEffect /></Link></td>
<td>Improve your ice missile.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/lingering_acid">Lingering Acid (Su)<IonRippleEffect /></Link></td>
<td>Improve your acid jet.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/maelstrom_jump">Maelstrom Jump (Su)<IonRippleEffect /></Link></td>
<td>Gain random movement and an <em>entropic shield.</em></td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/redirect_spell">Redirect Spell (Su)<IonRippleEffect /></Link></td>
<td>Gain control of a spell you didn't cast.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/resistance_drain">Resistance Drain (Su)<IonRippleEffect /></Link></td>
<td>Improve your spell resistance.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/siphon_spell">Siphon Spell (Su)<IonRippleEffect /></Link></td>
<td>Dispel a magic effect or item and refill your arcane reservoir.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/spell_thief">Spell Thief (Su)<IonRippleEffect /></Link></td>
<td>Redirect a spell away from a target and onto you.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/exploit/suffering_knowledge">Suffering Knowledge (Su)<IonRippleEffect /></Link></td>
<td>Temporarily acquire a spell you failed a save against.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _gunslinger_deeds = {hasJL:true,title: "Deeds", topLink: ["Gunslinger","class/gunslinger"], jsx: <div className="compilation"><div className="jumpList" id="ability-gunslinger_deeds-jumplist"><h2>Jump to:</h2><ul><li><InnerLink toTop to="ability-gunslinger_deeds-1st-level-deeds">1st-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-gunslinger_deeds-3rd-level-deeds">3rd-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-gunslinger_deeds-7th-level-deeds">7th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-gunslinger_deeds-11th-level-deeds">11th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-gunslinger_deeds-15th-level-deeds">15th-Level Deeds</InnerLink></li><li><InnerLink toTop to="ability-gunslinger_deeds-19th-level-deeds">19th-Level Deeds</InnerLink></li></ul></div><h2 id="ability-gunslinger_deeds-gunslinger-deeds">Gunslinger Deeds</h2>
<p><strong>Sources</strong> <Link to="/source/ultimate_combat">Ultimate Combat pg. 10-12</Link><br/>Gunslingers spend grit points to accomplish deeds. Most deeds grant the gunslinger some momentary bonus or effect, but there are some that provide longer-lasting effects. Some deeds stay in effect as long as the gunslinger has at least 1 grit point. The following is the list of base gunslinger deeds. A gunslinger can only perform deeds of her level or lower. Unless otherwise noted, a deed can be performed multiple successive times, as long as the appropriate amount of grit is spent to perform the deed.</p>
<h3 id="ability-gunslinger_deeds-1st-level-deeds" data-hash-target>1st-Level Deeds</h3>
<Ability id="deeddeadeye-deadeye-ex-fn1" icon={["smoking-finger","upgrade"]}>
<Pair single id="deeddeadeye-deadeye-ex-fn1"><Link to="/deed/deadeye">⮞</Link> Deadeye (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-1" id="ability-gunslinger_deeds-fake-fn-1" data-hash-target to="ability-gunslinger_deeds-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level gunslinger</Pair>
<Pair title="Ability">The gunslinger can resolve an attack against touch AC instead of normal AC when firing beyond her firearm's first range increment. Performing this deed costs 1 grit point per range increment beyond the first. The gunslinger still takes the -2 penalty on attack rolls for each range increment beyond the first when she performs this deed.</Pair>
</Ability>
<Ability id="deedgunslingersdodge-gunslingers-dodge-ex-fn1-2" icon={["armor-upgrade"]}>
<Pair single id="deedgunslingersdodge-gunslingers-dodge-ex-fn1-2" flavor="The gunslinger gains an uncanny knack for getting out of the way of ranged attacks."><Link to="/deed/gunslingers_dodge">⮞</Link> Gunslinger's Dodge (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-1.2" id="ability-gunslinger_deeds-fake-fn-1.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level gunslinger</Pair>
<Pair title="Immediate Action"><p>When a ranged attack is made against the gunslinger, she can spend 1 grit point to move 5 feet; doing so grants the gunslinger a +2 bonus to AC against the triggering attack. This movement is not a 5-foot step, and provokes attacks of opportunity.</p>
<p>Alternatively, the gunslinger can drop <Link to="/rule/prone">prone</Link> to gain a +4 bonus to AC against the triggering attack.</p>
</Pair>
<Pair title="Special">The gunslinger can only perform this deed while wearing medium or light armor, and while carrying no more than a light load.</Pair>
</Ability>
<Ability id="deedquickclear-quick-clear-ex-fn1-3" icon={["stairs-goal"]}>
<Pair single id="deedquickclear-quick-clear-ex-fn1-3"><Link to="/deed/quick_clear">⮞</Link> Quick Clear (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-1.3" id="ability-gunslinger_deeds-fake-fn-1.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">1st-level gunslinger</Pair>
<Pair title="Standard Action">The gunslinger can remove the broken condition from a single firearm she is currently wielding, as long as that condition was gained by a firearm misfire. The gunslinger must have at least 1 grit point to perform this deed.</Pair>
<Pair title="Special">Alternatively, if the gunslinger spends 1 grit point to perform this deed, she can perform quick clear as a <strong className="hl">move-equivalent action</strong> instead of a standard action.</Pair>
</Ability>
<h3 id="ability-gunslinger_deeds-3rd-level-deeds" data-hash-target>3rd-Level Deeds</h3>
<Ability id="deedgunslingerinitiative-gunslinger-initiative-ex-fn1-4" icon={["upgrade","stairs-goal"]}>
<Pair single id="deedgunslingerinitiative-gunslinger-initiative-ex-fn1-4"><Link to="/deed/gunslinger_initiative">⮞</Link> Gunslinger Initiative (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-1.4" id="ability-gunslinger_deeds-fake-fn-1.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level gunslinger</Pair>
<Pair title="Passive Ability">As long as the gunslinger has at least 1 grit point, she gains the following benefits. First, she gains a +2 bonus on initiative checks. Furthermore, if she has the <Link to="/feat/quick_draw">Quick Draw</Link> feat, her hands are free and unrestrained, and the firearm is not hidden, she can draw a single firearm as part of the initiative check.</Pair>
</Ability>
<Ability id="deedpistolwhip-pistol-whip-ex-fn2" icon={["mailed-fist"]}>
<Pair single id="deedpistolwhip-pistol-whip-ex-fn2"><Link to="/deed/pistol_whip">⮞</Link> Pistol-Whip (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-2" id="ability-gunslinger_deeds-fake-fn-2" data-hash-target to="ability-gunslinger_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level gunslinger</Pair>
<Pair title="Standard Action"><p>The gunslinger can make a surprise melee attack with the butt or handle of her firearm. When she does, she is considered to be proficient with the firearm as a melee weapon and gains a bonus on the attack and damage rolls equal to the enhancement bonus of the firearm.</p>
<p>The damage dealt by the pistol-whip is of the bludgeoning type, and is determined by the size of the firearm. One-handed firearms deal 1d6 points of damage (1d4 if wielded by Small creatures) and two-handed firearms deal 1d10 points of damage (1d8 if wielded by Small creatures). Regardless of the gunslinger's size, the critical multiplier of this attack is 20/&times;2.</p>
</Pair>
<Pair title="Special">If the attack hits, the gunslinger can make a <Link to="/rule/combat_maneuver">combat maneuver</Link> check to knock the target <Link to="/rule/prone">prone</Link> as a <strong className="hl">free action</strong>. Performing this deed costs 1 grit point.</Pair>
</Ability>
<Ability id="deedutilityshot-utility-shot-ex-fn2-2" extraClasses="hasSubs" icon={["bowman","remedy"]}>
<Pair single id="deedutilityshot-utility-shot-ex-fn2-2"><Link to="/deed/utility_shot">⮞</Link> Utility Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-2.2" id="ability-gunslinger_deeds-fake-fn-2.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">3rd-level gunslinger</Pair>
<Pair title="Ability">If the gunslinger has at least 1 grit point, she can perform all of the following utility shots. Each utility shot can be applied to any single attack with a firearm, but the gunslinger must declare the utility shot she is using before firing the shot.</Pair>
</Ability>
<Ability id="blast-lock" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="blast-lock">Blast Lock:</Pair>
<Pair title="Ability"><p>The gunslinger makes an attack roll against a lock within the first range increment of her firearm. A Diminutive lock usually has AC 7, and larger locks have a lower AC.</p>
<p>The lock gains a bonus to its AC against this attack based on its quality. A simple lock has a +10 bonus to AC, an average lock has a +15 bonus to AC, a good lock has a +20 bonus to AC, and a superior lock has a +30 bonus to AC. <Link to="/spell/arcane_lock">Arcane lock</Link> grants a +10 bonus to the AC of a lock against this attack.</p>
<p>On a hit, the lock is destroyed, and the object can be opened as if it were unlocked. On a miss, the lock is destroyed, but the object is jammed and still considered locked. It can still be unlocked by successfully performing this deed, by using the Disable Device skill, or with the break DC, though the DC for either break or Disable Device or the AC increases by 10.</p>
<p>A key, combination, or similar mechanical method of unlocking the lock no longer works, though <Link to="/spell/knock">knock</Link> can still be employed to bypass the lock, and the creator of an <em>arcane lock</em> can still bypass the wards of that spell.</p>
</Pair>
</Ability>
<Ability id="scoot-unattended-object" extraClasses="subAbility" icon={["bowman"]}>
<Pair single id="scoot-unattended-object">Scoot Unattended Object:</Pair>
<Pair title="Ability">The gunslinger makes an attack roll against a Tiny or smaller unattended object within the first range increment of her firearm. A Tiny unattended object has an AC of 5, a Diminutive unattended object has an AC of 7, and a Fine unattended object has an AC of 11. On a hit, the gunslinger does not damage the object with the shot, but can move it up to 15 feet farther away from the shot's origin. On a miss, she damages the object normally.</Pair>
</Ability>
<Ability id="stop-bleeding" extraClasses="subAbility" icon={["remedy"]}>
<Pair single id="stop-bleeding">Stop Bleeding:</Pair>
<Pair title="Ability">The gunslinger makes a firearm attack and then presses the hot barrel against herself or an adjacent creature to staunch a bleeding wound. Instead of dealing damage, the shot ends a single <Link to="/rule/bleed">bleed</Link> condition affecting the creature. The gunslinger does not have to make an attack roll when performing the deed in this way; she can instead shoot the firearm into the air, but that shot still uses up ammunition normally.</Pair>
</Ability>
<h3 id="ability-gunslinger_deeds-7th-level-deeds" data-hash-target>7th-Level Deeds</h3>
<Ability id="deeddeadshot-dead-shot-ex-fn2-3" icon={["bowman"]}>
<Pair single id="deeddeadshot-dead-shot-ex-fn2-3"><Link to="/deed/dead_shot">⮞</Link> Dead Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-2.3" id="ability-gunslinger_deeds-fake-fn-2.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level gunslinger</Pair>
<Pair title="Full-Round Action"><p>The gunslinger can take careful aim and pool all of her attack potential into a single, deadly shot. When she does this, she shoots the firearm at a single target, but makes as many attack rolls as she can, based on her base attack bonus. She makes the attack rolls in order from highest bonus to lowest, as if she were making a full attack.</p>
<p>If any of the attack rolls hit the target, the gunslinger's single attack is considered to have hit. For each additional successful attack roll beyond the first, the gunslinger increases the damage of the shot by the base damage dice of the firearm. For instance, if a 7th-level gunslinger firing a musket hits with both attacks, she does 2d12 points of damage with the shot, instead of 1d12 points of damage, before adding any damage modifiers.</p>
<p><Link to="/misc/precision_damage">Precision damage</Link> and extra damage from weapon special abilities (such as <Link to="/magic-enh/flaming">flaming</Link>) are added with damage modifiers and are not increased by this deed. If one or more rolls are critical threats, she confirms the critical once using her highest base attack bonus -5. For each critical threat beyond the first, she reduces this penalty by 1 (to a maximum of 0).</p>
</Pair>
<Pair title="Special">The gunslinger only misfires on a dead shot if <strong>all</strong> the attack rolls are misfires. She cannot perform this deed with a <Link to="/eq-weapon/blunderbuss">blunderbuss</Link> or other <Link to="/misc/scatter">scatter</Link> weapon when attacking creatures in a cone. The gunslinger must spend 1 grit point to perform this deed.</Pair>
</Ability>
<Ability id="deedstartlingshot-startling-shot-ex-fn2-4" icon={["armor-downgrade"]}>
<Pair single id="deedstartlingshot-startling-shot-ex-fn2-4"><Link to="/deed/startling_shot">⮞</Link> Startling Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-2.4" id="ability-gunslinger_deeds-fake-fn-2.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level gunslinger</Pair>
<Pair title="Standard Action">A gunslinger with least 1 grit point can purposely miss a creature that she could normally hit with a firearm attack. When she does, that creature becomes <Link to="/rule/flat_footed">flat-footed</Link> until the start of its next turn.</Pair>
</Ability>
<Ability id="deedtargeting-targeting-ex-fn2-5" icon={["bowman","armor-downgrade"]}>
<Pair single id="deedtargeting-targeting-ex-fn2-5"><Link to="/deed/targeting">⮞</Link> Targeting (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-2.5" id="ability-gunslinger_deeds-fake-fn-2.5" data-hash-target to="ability-gunslinger_deeds-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Prerequisites">7th-level gunslinger</Pair>
<Pair title="Full-Round Action">The gunslinger can make a single firearm attack and choose part of the body to target. She gains the following effects depending on the part of the body targeted. If a creature does not have one of the listed body locations, that part cannot be targeted.</Pair>
<Pair title="Arms">On a hit, the target takes no damage from the hit but drops one carried item of the gunslinger's choice, even if the item is wielded with two hands. Items held in a <Link to="/eq-armorenh/locked_gauntlet">locked gauntlet</Link> are not dropped on a hit.</Pair>
<Pair title="Head">On a hit, the target is damaged normally, and is also <Link to="/misc/confused">confused</Link> for 1 round. This is a mind-affecting effect.</Pair>
<Pair title="Legs">On a hit, the target is damaged normally and knocked <Link to="/rule/prone">prone</Link>. Creatures that have four or more legs or that are immune to trip attacks are immune to this effect.</Pair>
<Pair title="Torso">Targeting the torso threatens a critical on a 19-20.</Pair>
<Pair title="Wings">On a hit, the target is damaged normally, and must make a DC 20 Fly check or fall 20 ft.</Pair>
<Pair title="Special">This deed costs 1 grit point to perform no matter which part of the creature she targets. Creatures that are immune to sneak attacks are immune to these effects.</Pair>
</Ability>
<h3 id="ability-gunslinger_deeds-11th-level-deeds" data-hash-target>11th-Level Deeds</h3>
<Ability id="deedbleedingwound-bleeding-wound-ex-fn3" icon={["broken-shield"]}>
<Pair single id="deedbleedingwound-bleeding-wound-ex-fn3"><Link to="/deed/bleeding_wound">⮞</Link> Bleeding Wound (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3" id="ability-gunslinger_deeds-fake-fn-3" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level gunslinger</Pair>
<Pair title="Free Action"><p>When the gunslinger hits a living creature with a firearm attack, she can spend 1 grit point to have that attack deal extra <Link to="/rule/bleed">bleed</Link> damage. The amount of bleed damage is equal to the gunslinger's Dexterity modifier.</p>
<p>Alternatively, the gunslinger can spend 2 grit points to deal 1 point of <Link to="/rule/constitution_damage">Strength, Dexterity, or Constitution bleed damage</Link> (gunslinger's choice) instead.</p>
</Pair>
<Pair title="Special">Creatures that are immune to <Link to="/ability/sneak_attack">sneak attacks</Link> are also immune to these types of bleed damage.</Pair>
</Ability>
<Ability id="deedexpertloading-expert-loading-ex-fn3-2" icon={["armor-upgrade"]}>
<Pair single id="deedexpertloading-expert-loading-ex-fn3-2"><Link to="/deed/expert_loading">⮞</Link> Expert Loading (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.2" id="ability-gunslinger_deeds-fake-fn-3.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level gunslinger</Pair>
<Pair title="Ability">Whenever the gunslinger rolls a misfire with a gun that has the broken condition, she can spend 1 grit point to keep the gun from exploding, though it retains the broken condition.</Pair>
</Ability>
<Ability id="deedlightningreload-lightning-reload-ex-fn3-3" icon={["upgrade"]}>
<Pair single id="deedlightningreload-lightning-reload-ex-fn3-3"><Link to="/deed/lightning_reload">⮞</Link> Lightning Reload (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.3" id="ability-gunslinger_deeds-fake-fn-3.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">11th-level gunslinger</Pair>
<Pair title="Ability">As long as the gunslinger has at least 1 grit point, she can reload a single barrel of a one-handed or two-handed firearm as a <strong className="hl">swift action</strong> once per round. If she has the <Link to="/feat/rapid_reload">Rapid Reload</Link> feat or is using an alchemical cartridge (or both), she can reload a single barrel of the weapon as a <strong className="hl">free action</strong> each round instead.</Pair>
<Pair title="Special">Using this deed does not provoke attacks of opportunity.</Pair>
</Ability>
<h3 id="ability-gunslinger_deeds-15th-level-deeds" data-hash-target>15th-Level Deeds</h3>
<Ability id="deedevasive-evasive-ex-fn3-4" icon={["armor-upgrade"]}>
<Pair single id="deedevasive-evasive-ex-fn3-4"><Link to="/deed/evasive">⮞</Link> Evasive (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.4" id="ability-gunslinger_deeds-fake-fn-3.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level gunslinger</Pair>
<Pair title="Passive Ability">When the gunslinger has at least 1 grit point, she gains the benefit of the <Link to="/ability/evasion">evasion</Link>, <Link to="/ability/uncanny_dodge">uncanny dodge</Link>, and <Link to="/ability/improved_uncanny_dodge">improved uncanny dodge</Link> rogue class features. She uses her gunslinger level as her rogue level for <em>improved uncanny dodge.</em></Pair>
</Ability>
<Ability id="deedmenacingshot-menacing-shot-ex-fn3-5" icon={["aura","armor-downgrade"]}>
<Pair single id="deedmenacingshot-menacing-shot-ex-fn3-5"><Link to="/deed/menacing_shot">⮞</Link> Menacing Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.5" id="ability-gunslinger_deeds-fake-fn-3.5" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level gunslinger</Pair>
<Pair title="Ability">The gunslinger can spend 1 grit point, shoot a firearm into the air, and affect all living creatures within a 30-foot-radius <Link to="/misc/burst">burst</Link> as if they were subject to the <Link to="/spell/fear">fear</Link> spell. The DC of this effect is equal to 10 + 1/2 the gunslinger's level + the gunslinger's Wisdom modifier.</Pair>
</Ability>
<Ability id="deedslingersluck-slingers-luck-ex-fn3-6" icon={["armor-upgrade","upgrade","rolling-dices"]}>
<Pair single id="deedslingersluck-slingers-luck-ex-fn3-6"><Link to="/deed/slingers_luck">⮞</Link> Slinger's Luck (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.6" id="ability-gunslinger_deeds-fake-fn-3.6" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">15th-level gunslinger</Pair>
<Pair title="Ability">The gunslinger can spend grit to reroll a saving throw or a skill check. It costs 2 grit points to reroll a saving throw, and 1 grit point to reroll a skill check. The gunslinger must take the result of the second roll, even if it is lower.</Pair>
<Pair title="Special">The deed's cost cannot be reduced by the <em>true grit</em> class ability, the <Link to="/feat/signature_deed">Signature Deed</Link> feat, or any other effect that reduces the amount of grit a deed costs.</Pair>
</Ability>
<h3 id="ability-gunslinger_deeds-19th-level-deeds" data-hash-target>19th-Level Deeds</h3>
<Ability id="deedcheatdeath-cheat-death-ex-fn3-7" icon={["armor-upgrade"]}>
<Pair single id="deedcheatdeath-cheat-death-ex-fn3-7"><Link to="/deed/cheat_death">⮞</Link> Cheat Death (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.7" id="ability-gunslinger_deeds-fake-fn-3.7" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level gunslinger</Pair>
<Pair title="Ability">Whenever the gunslinger is reduced to 0 or fewer hit points, she can spend all of her remaining grit points (minimum 1) to instead be reduced to 1 hit point.</Pair>
</Ability>
<Ability id="deeddeathsshot-deaths-shot-ex-fn3-8" icon={["armor-downgrade"]}>
<Pair single id="deeddeathsshot-deaths-shot-ex-fn3-8"><Link to="/deed/deaths_shot">⮞</Link> Death's Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.8" id="ability-gunslinger_deeds-fake-fn-3.8" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level gunslinger</Pair>
<Pair title="Ability">When the gunslinger scores a critical hit, she can spend 1 grit point to deal normal damage, and the target must succeed at a Fortitude saving throw with a DC equal to 10 + 1/2 the gunslinger's level + the gunslinger's Dexterity modifier. On a failed saving throw, the target dies. This is a death attack.</Pair>
<Pair title="Special">Performing this deed does not allow the gunslinger to regain grit from confirming a critical hit or making a killing blow.</Pair>
</Ability>
<Ability id="deedstunningshot-stunning-shot-ex-fn3-9" icon={["armor-downgrade"]}>
<Pair single id="deedstunningshot-stunning-shot-ex-fn3-9"><Link to="/deed/stunning_shot">⮞</Link> Stunning Shot (Ex) <sup><InnerLink showBacklink="backlink-ability-gunslinger_deeds-fake-fn-3.9" id="ability-gunslinger_deeds-fake-fn-3.9" data-hash-target to="ability-gunslinger_deeds-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">19th-level gunslinger</Pair>
<Pair title="Ability">When a gunslinger hits a creature, she can spend 2 grit points to <Link to="/misc/stun">stun</Link> the creature for 1 round. The creature must make a Fortitude saving throw (the DC = 10 + 1/2 the gunslinger's level + the gunslinger's Wisdom modifier). If the creature fails, it is stunned for 1 round.</Pair>
<Pair title="Special">Creatures that are immune to critical hits are also immune to this effect.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-gunslinger_deeds-label">Footnotes</h3><ol>
<li id="ability-gunslinger_deeds-fake-fn-1-target"><p><Link to="/source/ultimate_combat">Ultimate Combat</Link> pg. 10 <InnerLink aria-label="Back to reference 1" id="backlink-ability-gunslinger_deeds-fake-fn-1" data-hash-target to="ability-gunslinger_deeds-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-gunslinger_deeds-fake-fn-1.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-1.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-gunslinger_deeds-fake-fn-1.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-1.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-gunslinger_deeds-fake-fn-1.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-1.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-gunslinger_deeds-fake-fn-2-target"><p>Ultimate Combat pg. 11 <InnerLink aria-label="Back to reference 2" id="backlink-ability-gunslinger_deeds-fake-fn-2" data-hash-target to="ability-gunslinger_deeds-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-gunslinger_deeds-fake-fn-2.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-gunslinger_deeds-fake-fn-2.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-gunslinger_deeds-fake-fn-2.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-gunslinger_deeds-fake-fn-2.5" data-hash-target to="ability-gunslinger_deeds-fake-fn-2.5">↩<sup>5</sup></InnerLink></p></li>
<li id="ability-gunslinger_deeds-fake-fn-3-target"><p>Ultimate Combat pg. 12 <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3" data-hash-target to="ability-gunslinger_deeds-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.2" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.3" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.4" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.5" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.6" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.7" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.8" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-gunslinger_deeds-fake-fn-3.9" data-hash-target to="ability-gunslinger_deeds-fake-fn-3.9">↩<sup>9</sup></InnerLink></p></li>
</ol></section></div>};
const _gunslinger_renowned_deeds = {title: "Renowned Deeds", topLink: ["Gunslinger","class/gunslinger"], jsx: <><h2 id="ability-gunslinger_renowned_deeds-renowned-deeds">Renowned Deeds</h2>
<p><strong>Sources</strong> <Link to="/source/chronicle_of_legends">Chronicle of Legends pg. 4</Link></p>
<p>Swashbucklers and gunslingers perform impressive deeds through their grit and panache, but some are capable of truly spectacular acts known as renowned deeds. A swashbuckler or gunslinger (though not members of other classes) can select a renowned deed for her class upon reaching the class level listed in the deed's description. This replaces the specific listed deed or deeds; if the character would not gain the appropriate deeds, she cannot select the renowned deed, as if selecting an archetype.</p>
<h3 id="ability-gunslinger_renowned_deeds-1st-level-renowned-deed">1st-Level Renowned Deed</h3>
<Ability id="thundering-shot-ex" icon={["bowman","tornado-discs","armor-downgrade"]}>
<Pair single id="thundering-shot-ex" flavor="The gunslinger's shots explode with deafening reports.">Thundering Shot (Ex)</Pair>
<Pair hl title="Replaces">The <Link to="/deed/gunslingers_dodge">gunslinger's dodge</Link> deed and one other 1st-level deed</Pair>
<Pair title="At 1st Level">As a <strong className="hl">standard action</strong> the gunslinger can spend 1 point of grit and make a single ranged attack with a firearm. All creatures in a 15-foot cone, starting at the corner of the gunslinger's square closest to the target and extending directly toward the target, must succeed at a Fortitude save (DC = 10 + half the gunslinger's class level + the gunslinger's Wisdom modifier) or be <Link to="/misc/deafened">deafened</Link> for 1 minute.</Pair>
</Ability>
<h3 id="ability-gunslinger_renowned_deeds-7th-level-renowned-deed">7th-Level Renowned Deed</h3>
<Ability id="gruesome-parry-ex" icon={["bowman","armor-upgrade","mailed-fist"]}>
<Pair single id="gruesome-parry-ex" flavor="Some gunslingers wield guns and blades in concert, readying a shot to unbalance attackers and then eviscerating their assailants.">Gruesome Parry (Ex)</Pair>
<Pair hl title="Replaces">The <Link to="/deed/dead_shot">dead shot</Link> deed and one other 7th-level deed</Pair>
<Pair title="At 7th Level">The gunslinger can spend 1 grit point when she <Link to="/rule/readies_an_action">readies an action</Link> to make a ranged attack with a firearm against a creature that declares a melee attack against her. If she does, the readied ranged attack does not provoke attacks of opportunity. If this readied attack hits, she gains a +4 dodge bonus to AC against the triggering attack, and she can make a single melee attack with a slashing or piercing weapon against the creature that attacked her; if this melee attack hits, it is considered to be a critical threat.</Pair>
</Ability>
<h3 id="ability-gunslinger_renowned_deeds-15th-level-renowned-deed">15th-Level Renowned Deed</h3>
<Ability id="lethal-patience-ex" icon={["bowman","armor-downgrade"]}>
<Pair single id="lethal-patience-ex" flavor="While wild flurries of bullets are certainly effective at felling foes, veteran gunslingers appreciate the value of lining up the perfect shot.">Lethal Patience (Ex)</Pair>
<Pair hl title="Replaces">The <Link to="/deed/slingers_luck">slinger's luck</Link> deed and one other 15th-level deed</Pair>
<Pair title="At 15th Level">The gunslinger can spend 1 grit point to line up a shot against a target as a <strong className="hl">full-round action</strong>. On her next turn, she can make an attack against the target as a <strong className="hl">standard action</strong>, and if the attack hits, the attack is treated as a critical threat.</Pair>
</Ability>
</>};
const _hellknight_disciplines = {title: "Hellknight Disciplines", topLink: ["Hellknight","pclass/hellknight"], jsx: <div className="compilation"><h2 id="ability-hellknight_disciplines-hellknight-disciplines">Hellknight Disciplines</h2>
<p><strong>Sources</strong> <Link to="/source/adventurers_guide">Adventurer's Guide</Link><br/>At 3rd level, a Hellknight gains access to his first discipline, choosing one associated with his specific order. At 6th level, the Hellknight gains a second discipline, choosing from any listed as being available to "any order." At 9th level, the Hellknight gains his third discipline, choosing this one from any of the disciplines listed below, even those from another order, with the exception of <em>pentamic faith.</em></p>
<p>When applicable, the save DC to resist a discipline's effect is equal to 10 + the Hellknight's level + his Charisma modifier. The Hellknight can use any one discipline a number of times per day equal to the total number of disciplines he has access to, so at 3rd level he can use his discipline once per day, at 6th level he can use both disciplines twice per day each, and at 9th level he can use all three of his disciplines three times per day.</p>
<hr/>
<Ability id="hkdisciplinebrand-brand-sp-fn1" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinebrand-brand-sp-fn1"><Link to="/hkdiscipline/brand">⮞</Link> Brand (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-1" id="ability-hellknight_disciplines-fake-fn-1" data-hash-target to="ability-hellknight_disciplines-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_pyre">Order of the Pyre</Link></Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/mark_of_justice">mark of justice</Link> as a spell-like ability.</Pair>
</Ability>
<Ability id="hkdisciplinecallarmor-call-armor-su-fn2" icon={["armor-upgrade"]}>
<Pair single id="hkdisciplinecallarmor-call-armor-su-fn2"><Link to="/hkdiscipline/call_armor">⮞</Link> Call Armor (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2" id="ability-hellknight_disciplines-fake-fn-2" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Move-Equivalent Action"><p>The Hellknight can cause her armor to instantly appear on her body. Alternatively, she can dismiss it as a move action, causing it to vanish. (Doing either of these counts as one use of this discipline.)</p>
<p>Where the armor appears from or vanishes to can be anywhere the Hellknight designates, but it must be a place the Hellknight has seen on the same plane of existence where she is, or be in an extradimensional space she controls, such as a bag of holding.</p>
</Pair>
<Pair title="Special">This armor is a specific suit of <Link to="/eq-armor/hellknight_plate">Hellknight plate</Link> that the Hellknight designates when she selects this discipline. The Hellknight can attune this ability to a new set of armor, but doing so takes 1 week.</Pair>
</Ability>
<Ability id="hkdisciplinecensor-censor-su-fn1-2" icon={["armor-downgrade"]}>
<Pair single id="hkdisciplinecensor-censor-su-fn1-2"><Link to="/hkdiscipline/censor">⮞</Link> Censor (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-1.2" id="ability-hellknight_disciplines-fake-fn-1.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_rack">Order of the Rack</Link></Pair>
<Pair title="Ability">When the Hellknight uses <em>smite chaos</em> on a creature, he can strike the creature mute for 1d4 rounds unless it makes a successful Will save. A mute creature cannot speak, nor can it cast spells that have verbal components or use language-dependant effects.</Pair>
</Ability>
<Ability id="hkdisciplinecommand-command-sp-fn2-2" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinecommand-command-sp-fn2-2"><Link to="/hkdiscipline/command">⮞</Link> Command (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.2" id="ability-hellknight_disciplines-fake-fn-2.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/greater_command">greater command</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
<Ability id="hkdisciplinedispelchaos-dispel-chaos-sp-fn2-3" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinedispelchaos-dispel-chaos-sp-fn2-3"><Link to="/hkdiscipline/dispel_chaos">⮞</Link> Dispel Chaos (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.3" id="ability-hellknight_disciplines-fake-fn-2.3" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/dispel_chaos">dispel chaos</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
<Ability id="hkdisciplinefavoredquarry-favored-quarry-ex-fn2-4" icon={["upgrade"]}>
<Pair single id="hkdisciplinefavoredquarry-favored-quarry-ex-fn2-4"><Link to="/hkdiscipline/favored_quarry">⮞</Link> Favored Quarry (Ex) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.4" id="ability-hellknight_disciplines-fake-fn-2.4" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Choice">The Hellknight chooses a creature type from the ranger <Link to="/ability/favored_enemy">favored enemy</Link> table (usually humanoid with a specific subtype, but this is not required).</Pair>
<Pair title="Passive Ability">The Hellknight gains a +2 bonus on Bluff, Intimidate, Knowledge, Perception, Sense Motive, and Survival checks against creatures of her selected type. She can also attempt Knowledge skill checks untrained to identify those creatures.</Pair>
<Pair title="Special">Each time the Hellknight chooses an additional discipline, this bonus increases by 2 (to a potential maximum of +6 at 9th level).</Pair>
</Ability>
<Ability id="hkdisciplinefearsomeness-fearsomeness-ex-fn3" icon={["armor-downgrade"]}>
<Pair single id="hkdisciplinefearsomeness-fearsomeness-ex-fn3"><Link to="/hkdiscipline/fearsomeness">⮞</Link> Fearsomeness (Ex) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3" id="ability-hellknight_disciplines-fake-fn-3" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">A Hellknight who uses the Intimidate skill to cause a creature within 10 feet to become <Link to="/misc/shaken">shaken</Link> can instead cause that creature to become <Link to="/misc/frightened">frightened</Link>.</Pair>
</Ability>
<Ability id="hkdisciplineinvokeglyph-invoke-glyph-sp-and-ex-fn4" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="hkdisciplineinvokeglyph-invoke-glyph-sp-and-ex-fn4"><Link to="/hkdiscipline/invoke_glyph">⮞</Link> Invoke Glyph (Sp and Ex) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-4" id="ability-hellknight_disciplines-fake-fn-4" data-hash-target to="ability-hellknight_disciplines-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_glyph">Order of the Glyph</Link></Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/glyph_of_warding">glyph of warding</Link> as a spell-like ability. While this ability does not require an expensive material component, a single Hellknight can maintain only one <em>glyph of warding</em> at a time; if he uses this spell-like ability a second time, the previously created <em>glyph of warding</em> vanishes.</Pair>
<Pair title="Passive Ability">The Hellknight gains a +4 bonus on saving throws against <em>glyph of warding</em> or <Link to="/main/symbol_spells">symbol spells</Link>.</Pair>
</Ability>
<Ability id="hkdisciplinementalintrusion-mental-intrusion-sp-fn2-5" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinementalintrusion-mental-intrusion-sp-fn2-5"><Link to="/hkdiscipline/mental_intrusion">⮞</Link> Mental Intrusion (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.5" id="ability-hellknight_disciplines-fake-fn-2.5" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/spell/telepathy">telepathy</Link> as a spell-like ability, using her character level as her caster level.</Pair>
</Ability>
<Ability id="hkdisciplineonslaught-onslaught-su-fn3-2" icon={["upgrade"]}>
<Pair single id="hkdisciplineonslaught-onslaught-su-fn3-2"><Link to="/hkdiscipline/onslaught">⮞</Link> Onslaught (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.2" id="ability-hellknight_disciplines-fake-fn-3.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_nail">Order of the Nail</Link></Pair>
<Pair title="Free Action">Once per day, a Hellknight increases his base speed by +10 feet and gains a +4 bonus to his Strength for 1 round. If the Hellknight is mounted, these bonuses also apply to his mount.</Pair>
</Ability>
<Ability id="hkdisciplinepentamicfaith-pentamic-faith-ex-fn3-3" icon={["upgrade"]}>
<Pair single id="hkdisciplinepentamicfaith-pentamic-faith-ex-fn3-3"><Link to="/hkdiscipline/pentamic_faith">⮞</Link> Pentamic Faith (Ex) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.3" id="ability-hellknight_disciplines-fake-fn-3.3" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">Must be of the <em>Order of the Godclaw.</em></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_godclaw">Order of the Godclaw</Link></Pair>
<Pair title="Choice">This ability allows the Hellknight to select one of the following domains: <Link to="/domain/artifice">Artifice</Link>, <Link to="/domain/glory">Glory</Link>, <Link to="/domain/knowledge">Knowledge</Link>, <Link to="/domain/law">Law</Link>, <Link to="/domain/magic">Magic</Link>, <Link to="/domain/nobility">Nobility</Link>, <Link to="/domain/protection">Protection</Link>, <Link to="/domain/rune">Rune</Link>, <Link to="/domain/strength">Strength</Link>, <Link to="/domain/travel">Travel</Link>, and <Link to="/domain/war">War</Link>.</Pair>
<Pair title="Ability">The Hellknight gains all of the granted powers (but not domain spells) of that domain, treating his Hellknight levels as cleric levels to determine what domain abilities he has access to.</Pair>
</Ability>
<Ability id="hkdisciplineseekthetaken-seek-the-taken-fn5" icon={["magic-swirl"]}>
<Pair single id="hkdisciplineseekthetaken-seek-the-taken-fn5"><Link to="/hkdiscipline/seek_the_taken">⮞</Link> Seek the Taken <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-5" id="ability-hellknight_disciplines-fake-fn-5" data-hash-target to="ability-hellknight_disciplines-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Order"><Link to="/hkorder/order_of_the_torrent">Order of the Torrent</Link></Pair>
<Pair title="Ability">When a member of the <em>Order of the Torrent</em> becomes a 3rd-level Hellknight, he gains his first discipline: <em>seek the taken.</em> This enables the Hellknight to use an <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/locate_creature">locate creature</Link> as a spell-like ability with a caster level equal to his total character level.</Pair>
<Pair title="Special">When an <em>Order of the Torrent</em> Hellknight gains his third discipline, he cannot choose the <Link to="/hkdiscipline/summon_devil">summon devil</Link> discipline.</Pair>
</Ability>
<Ability id="hkdisciplineshackle-shackle-su-fn3-4" icon={["armor-downgrade"]}>
<Pair single id="hkdisciplineshackle-shackle-su-fn3-4"><Link to="/hkdiscipline/shackle">⮞</Link> Shackle (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.4" id="ability-hellknight_disciplines-fake-fn-3.4" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_chain">Order of the Chain</Link></Pair>
<Pair title="Ability">When the Hellknight uses <em>smite chaos</em> on a creature, he can impede its mobility. The creature can negate this effect with a Will save; otherwise, it is affected as if by a <Link to="/spell/slow">slow</Link> spell for 1d4 rounds.</Pair>
</Ability>
<Ability id="hkdisciplineshadowstep-shadow-step-sp-fn2-6" icon={["magic-swirl"]}>
<Pair single id="hkdisciplineshadowstep-shadow-step-sp-fn2-6"><Link to="/hkdiscipline/shadow_step">⮞</Link> Shadow Step (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.6" id="ability-hellknight_disciplines-fake-fn-2.6" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use <Link to="/feat/enlarged">enlarged</Link> <Link to="/spell/shadow_step">shadow step</Link> as a spell-like ability, as if the Enlarge Spell metamagic feat were applied to the spell, using her character level as her caster level.</Pair>
</Ability>
<Ability id="hkdisciplinesummondevil-summon-devil-sp-fn3-5" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinesummondevil-summon-devil-sp-fn3-5"><Link to="/hkdiscipline/summon_devil">⮞</Link> Summon Devil (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.5" id="ability-hellknight_disciplines-fake-fn-3.5" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites">Cannot be in the <Link to="/hkorder/order_of_the_torrent">Order of the Torrent</Link></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_gate">Order of the Gate</Link></Pair>
<Pair title="Ability">The Hellknight may use <Link to="/spell/summon_monster_v">summon monster V</Link> as a spell-like ability to summon 1 <Link to="/monster/bearded_devil">bearded devil</Link>.</Pair>
<Pair title="At 6th Level">This spell-like ability is replaced by <Link to="/spell/summon_monster_vi">summon monster VI</Link>, allowing him to summon 1d3 bearded devils, or 1 <Link to="/monster/erinyes">erinyes</Link>.</Pair>
<Pair title="At 9th Level">This spell-like ability is replaced by <Link to="/spell/summon_monster_vii">summon monster VII</Link>, allowing him to summon 1d4+1 bearded devils, 1d3 erinyes, or 1 <Link to="/monster/bone_devil">bone devil</Link>.</Pair>
</Ability>
<Ability id="hkdisciplinesummonservantoflaw-summon-servant-of-law-sp-fn2-7" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinesummonservantoflaw-summon-servant-of-law-sp-fn2-7"><Link to="/hkdiscipline/summon_servant_of_law">⮞</Link> Summon Servant of Law (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.7" id="ability-hellknight_disciplines-fake-fn-2.7" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can summon a creature or creatures to help her, as if using a <Link to="/spell/summon_monster">summon monster</Link> spell.</Pair>
<Pair title="At 3rd Level">She can summon 1d3 <Link to="/monster/hell_hound">hell hounds</Link>.</Pair>
<Pair title="At 6th Level">She can summon 1d3 <Link to="/template/advanced">advanced</Link> hell hounds or one <Link to="/monster/axiomite">axiomite</Link>.</Pair>
<Pair title="At 9th Level">She can summon 1d4+1 hell hounds, 1d3 axiomites, or one <Link to="/monster/zelekhut">zelekhut inevitable</Link>.</Pair>
</Ability>
<Ability id="hkdisciplinetrace-trace-su-fn2-8" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinetrace-trace-su-fn2-8"><Link to="/hkdiscipline/trace">⮞</Link> Trace (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.8" id="ability-hellknight_disciplines-fake-fn-2.8" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can study a single personal belonging of a creature for 1 minute, after which she knows the general direction of the creature's current location as long as it is within 1 mile and on the same plane. She also learns the direction the creature is currently moving, if any. This effect lasts for 10 minutes per character level.</Pair>
<Pair title="Special"><p>An object can be used as the focus for this ability only once. For the purposes of this ability, a "personal belonging" is any object a creature owned or carried with it for more than a week.</p>
<p>If the target is under the effects of <Link to="/spell/nondetection">nondetection</Link> or a similar spell or effect, or is on a different plane, this ability gives no result.</p>
</Pair>
</Ability>
<Ability id="hkdisciplinetracker-tracker-sp-fn3-6" icon={["magic-swirl"]}>
<Pair single id="hkdisciplinetracker-tracker-sp-fn3-6"><Link to="/hkdiscipline/tracker">⮞</Link> Tracker (Sp) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.6" id="ability-hellknight_disciplines-fake-fn-3.6" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can summon a creature to aid him, either in battle or to track an enemy, as if using a <Link to="/spell/summon_monster">summon monster</Link> spell, save that the summoned creature lingers for 1 hour before vanishing.</Pair>
<Pair title="At 6th Level">The Hellknight can summon either an <Link to="/monster/eagle">eagle</Link>, a <Link to="/monster/riding_dog">riding dog</Link>, a <Link to="/monster/wolf">wolf</Link>, or a <Link to="/monster/leopard">leopard</Link>.</Pair>
<Pair title="At 9th Level">The Hellknight can instead opt to summon a <Link to="/monster/dire_wolf">dire wolf</Link> or a <Link to="/monster/hell_hound">hell hound</Link>.</Pair>
</Ability>
<Ability id="hkdisciplineversatileintimidation-versatile-intimidation-ex-fn2-9" icon={["upgrade"]}>
<Pair single id="hkdisciplineversatileintimidation-versatile-intimidation-ex-fn2-9"><Link to="/hkdiscipline/versatile_intimidation">⮞</Link> Versatile Intimidation (Ex) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-2.9" id="ability-hellknight_disciplines-fake-fn-2.9" data-hash-target to="ability-hellknight_disciplines-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Ability">The Hellknight can use Intimidate to reproduce the effects of another Charisma-based skill. Choose one of the following: Bluff, Diplomacy, Handle Animal, or Perform (oratory). Each time the Hellknight wishes to use that skill, she can attempt an Intimidate check and treat it as if it were a check of the desired type.</Pair>
<Pair title="At 9th Level">The Hellknight can choose an additional skill from the list above and use Intimidate to reproduce its effects.</Pair>
</Ability>
<Ability id="hkdisciplinevigilance-vigilance-su-fn3-7" icon={["stairs-goal"]}>
<Pair single id="hkdisciplinevigilance-vigilance-su-fn3-7"><Link to="/hkdiscipline/vigilance">⮞</Link> Vigilance (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.7" id="ability-hellknight_disciplines-fake-fn-3.7" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl><Link to="/hkorder/order_of_the_scourge">Order of the Scourge</Link></Pair>
<Pair title="Ability">The Hellknight gains low-light vision (this effect is constant).</Pair>
<Pair title="Full-Round Action">The Hellknight can see through up to 5 feet of stone, wood, or similar barriers as if they didn't exist. Metal or denser barriers block this effect. Each use of this ability lasts as long as the Hellknight concentrates, up to a number of rounds equal to the Hellknight's level.</Pair>
</Ability>
<Ability id="hkdisciplinewrack-wrack-su-fn3-8" icon={["magic-palm"]}>
<Pair single id="hkdisciplinewrack-wrack-su-fn3-8"><Link to="/hkdiscipline/wrack">⮞</Link> Wrack (Su) <sup><InnerLink showBacklink="backlink-ability-hellknight_disciplines-fake-fn-3.8" id="ability-hellknight_disciplines-fake-fn-3.8" data-hash-target to="ability-hellknight_disciplines-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Order" hl>Any order</Pair>
<Pair title="Standard Action">The Hellknight may make a touch attack to cause a creature to suffer incredible pain. The creature touched takes 1d6 points of damage + the Hellknight's Charisma modifier, and must make a Will save to avoid being <Link to="/misc/staggered">staggered</Link> for 1d4 rounds.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-hellknight_disciplines-label">Footnotes</h3><ol>
<li id="ability-hellknight_disciplines-fake-fn-1-target"><p><Link to="/source/inner_sea_world_guide">Inner Sea World Guide</Link> pg. 278 <InnerLink aria-label="Back to reference 1" id="backlink-ability-hellknight_disciplines-fake-fn-1" data-hash-target to="ability-hellknight_disciplines-fake-fn-1">↩</InnerLink> <InnerLink aria-label="Back to reference 1" id="backlink-ability-hellknight_disciplines-fake-fn-1.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-1.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hellknight_disciplines-fake-fn-2-target"><p><Link to="/source/path_of_the_hellknight">Path of the Hellknight</Link> pg. 59 <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2" data-hash-target to="ability-hellknight_disciplines-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.3" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.4" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.5" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.6" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.7" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.8" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hellknight_disciplines-fake-fn-2.9" data-hash-target to="ability-hellknight_disciplines-fake-fn-2.9">↩<sup>9</sup></InnerLink></p></li>
<li id="ability-hellknight_disciplines-fake-fn-3-target"><p>Inner Sea World Guide pg. 279 <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3" data-hash-target to="ability-hellknight_disciplines-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.2" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.3" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.4" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.5" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.6" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.7" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hellknight_disciplines-fake-fn-3.8" data-hash-target to="ability-hellknight_disciplines-fake-fn-3.8">↩<sup>8</sup></InnerLink></p></li>
<li id="ability-hellknight_disciplines-fake-fn-4-target"><p><Link to="/source/pathfinder_107_scourge_of_the_godclaw">Pathfinder #107: Scourge of the Godclaw</Link> pg. 47 <InnerLink aria-label="Back to reference 4" id="backlink-ability-hellknight_disciplines-fake-fn-4" data-hash-target to="ability-hellknight_disciplines-fake-fn-4">↩</InnerLink></p></li>
<li id="ability-hellknight_disciplines-fake-fn-5-target"><p><Link to="/source/pathfinder_98_turn_of_the_torrent">Pathfinder #98: Turn of the Torrent</Link> pg. 67 <InnerLink aria-label="Back to reference 5" id="backlink-ability-hellknight_disciplines-fake-fn-5" data-hash-target to="ability-hellknight_disciplines-fake-fn-5">↩</InnerLink></p></li>
</ol></section></div>};
const _hellknight_orders = {title: "Hellknight Orders", topLink: ["Hellknight","pclass/hellknight"], jsx: <><h2 id="ability-hellknight_orders-hellknight-orders">Hellknight Orders</h2>
<p><strong>Sources</strong> <Link to="/source/inner_sea_world_guide">Inner Sea World Guide</Link><br/>A character must choose one Hellknight order to join. The choice of order determines what disciplines the character gains access to, and what Reckoning the character may perform for the <Link to="/feat/hellknight_obedience">Hellknight Obedience</Link> feat.</p>
<ScrollContainer id="ability-hellknight_orders--table-0"><table>
<thead>
<tr>
<th>Order</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_chain">Order of the Chain<IonRippleEffect /></Link></td>
<td>These Hellknights serve as wardens and trackers devoted to hunting down the enemies of society and locking away dangerous criminals.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_gate">Order of the Gate<IonRippleEffect /></Link></td>
<td>Dominated by spellcasting signifers who employ magic in surveillance, manipulation, and execution, this order is known for predicting crimes and creating magical innovations.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_godclaw">Order of the Godclaw<IonRippleEffect /></Link></td>
<td>Crusaders in the service of a pantheon of five lawful deities, these Hellknights bring order wherever it is needed, usually by force. Their unusual faith is understood by few.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_nail">Order of the Nail<IonRippleEffect /></Link></td>
<td>These knights at the vanguard of civilization bring order to frontier settlements and stamp out those who impede society's march.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_pyre">Order of the Pyre<IonRippleEffect /></Link></td>
<td>With spell and blade, this order seeks out superstition and witchcraft and destroys any chaotic cults that threaten the minds and souls of law-abiding citizens.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_rack">Order of the Rack<IonRippleEffect /></Link></td>
<td>These Hellknights root out and quell subversive knowledge and destructive ideas they believe capable of impeding order's march.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_scourge">Order of the Scourge<IonRippleEffect /></Link></td>
<td>Using their vast wealth and resources, these armored sleuths work - sometimes under cover - to take down corrupt politicians, thieves' guilds, and bastions of organized crime.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_coil_minor_order">Order of the Coil (Minor Order)<IonRippleEffect /></Link></td>
<td>A small order of Hellknights that seeks to wipe out the native inhabitants of Sargava in the name of civilization</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_crux_minor_order">Order of the Crux (Minor Order)<IonRippleEffect /></Link></td>
<td>A remnant of the Chelish civil war, these butchers were destroyed by the Order of the Scourge, but have risen again in unlife</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_glyph_minor_order">Order of the Glyph (Minor Order)<IonRippleEffect /></Link></td>
<td>An unofficial band of Hellknights, charged with protecting the true history of Cheliax</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_pike_minor_order">Order of the Pike (Minor Order)<IonRippleEffect /></Link></td>
<td>Monster-slayers and heroes, this order dedicates itself to wiping out dangerous creatures.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_scar_minor_order">Order of the Scar (Minor Order)<IonRippleEffect /></Link></td>
<td>Mercenary assassin-hunters, this order protects its charges and oppsess the Daggermark Guild and the followers of Achaekek.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_torrent_minor_order">Order of the Torrent (Minor Order)<IonRippleEffect /></Link></td>
<td>A good order of Hellknights that focus their efforts on rescuing hostages and kidnapping victims.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/hkorder/order_of_the_wall_minor_order">Order of the Wall (Minor Order)<IonRippleEffect /></Link></td>
<td>These hellknights serve as guardians and watchmen against the forces that would intrude on the borders of civilization</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _hexes = {title: "Hexes", topLink: ["Witch","class/witch"], jsx: <div className="compilation"><h2 id="ability-hexes-witch-hexes">Witch Hexes</h2>
<p><strong>Sources</strong> <Link to="/source/advanced_players_guide">Advanced Player's Guide</Link><br/>Witches learn a number of magic tricks, called hexes, that grant them powers or weaken foes. At 1st level, a witch gains one hex of her choice. She gains an additional hex at 2nd level and for every 2 levels attained after 2nd level. A witch cannot select an individual hex more than once.</p>
<p>Unless otherwise noted, using a hex is a standard action that does not provoke an attack of opportunity. The save to resist a hex is equal to 10 + 1/2 the witch's level + the witch's Intelligence modifier.</p>
<hr/>
<Ability id="hexameliorating-ameliorating-su-fn1" icon={["remedy","shield-reflect"]}>
<Pair single id="hexameliorating-ameliorating-su-fn1" flavor="The witch can touch a creature to suppress or protect it from negative conditions."><Link to="/hex/ameliorating">⮞</Link> Ameliorating (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-1" id="ability-hexes-fake-fn-1" data-hash-target to="ability-hexes-fake-fn-1-target">1</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch chooses one of the following conditions each time she uses this hex: dazzled, fatigued, shaken, or sickened. If the target is or later becomes afflicted with the chosen condition, that condition is suppressed for a number of minutes equal to the witch's level.</p>
<p>Alternatively, the witch can grant her target a +4 circumstance bonus on saving throws against effects that cause any two of the listed conditions (which condition is always the witch's choice) for 24 hours.</p>
</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from the hex again for 24 hours.</Pair>
</Ability>
<Ability id="hexauraofpurity-aura-of-purity-su-fn2" icon={["aura","remedy"]}>
<Pair single id="hexauraofpurity-aura-of-purity-su-fn2"><Link to="/hex/aura_of_purity">⮞</Link> Aura of Purity (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-2" id="ability-hexes-fake-fn-2" data-hash-target to="ability-hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Passive Ability">The witch's aura purifies the air around her. Diseases, inhaled poisons, and noxious gaseous effects (such as <Link to="/spell/stinking_cloud">stinking cloud</Link>) are negated in a 10-foot aura around the witch.</Pair>
<Pair title="Special">Effects caused by spells whose level is more than half the witch's class level are unaffected.</Pair>
</Ability>
<Ability id="hexbeastofillomen-beast-of-ill-omen-su-fn3" icon={["armor-downgrade"]}>
<Pair single id="hexbeastofillomen-beast-of-ill-omen-su-fn3"><Link to="/hex/beast_of_ill_omen">⮞</Link> Beast of Ill-Omen (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3" id="ability-hexes-fake-fn-3" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch imbues her familiar with strange magic, putting a minor curse upon the next enemy to see it. The enemy must make a Will save or be affected by <Link to="/spell/bane">bane</Link> (caster level equal to the witch's level).</p>
<p>The witch can use this hex on her familiar at a range of up to 60 feet. The affected enemy must be no more than 60 feet from the familiar to trigger the effect; seeing the familiar from a greater distance has no effect (though if the enemy and familiar approach to within 60 feet of each other, the hex takes effect). The <em>bane</em> affects the closest creature to the familiar (ties affect the creature with the highest initiative score).</p>
</Pair>
<Pair title="Special">Whether or not the target's save is successful, the creature cannot be the target of the <em>bane</em> effect for 1 day (later uses of this hex ignore that creature when determining who is affected).</Pair>
</Ability>
<Ability id="hexblight-blight-su-fn4" icon={["armor-downgrade","magic-palm"]}>
<Pair single id="hexblight-blight-su-fn4"><Link to="/hex/blight">⮞</Link> Blight (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4" id="ability-hexes-fake-fn-4" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch can curse an animal, plant creature, or plot of land, causing it to wither and die. Blighting an area takes 1 round, during which time the witch and her familiar must be in contact with the target.</p>
<p>If it's used on a plot of land, the land begins to wither the following day, and over the next week all plants in the area die. Nothing will grow in that area so long as the curse persists. A witch can affect an area with a radius equal to her class level &amp;times&amp; 10 feet.</p>
<p>Blighting a creature is a <strong className="hl">standard action</strong> that requires a melee touch attack. If used on a creature of the animal or plant type, the creature gains the following <Link to="/rule/curses">curse</Link>:</p>
<AffInfo type="Curse" save="Will negates" freq="1/day" eff={<>1 <Link to="/rule/con_damage">Con damage</Link></>} icon="c">Blight Hex</AffInfo>
</Pair>
<Pair title="Special">Both types of curse can be removed with a <Link to="/spell/remove_curse">remove curse</Link> or similar magic, using the save DC as the DC to remove the curse. A witch can only have one <em>blight</em> in effect at a time. If another <em>blight</em> hex is made, the first immediately ends.</Pair>
</Ability>
<Ability id="hexcackle-cackle-su-fn4-2-fn5-fn6-fn7-fn8" icon={["upgrade"]}>
<Pair single id="hexcackle-cackle-su-fn4-2-fn5-fn6-fn7-fn8"><Link to="/hex/cackle">⮞</Link> Cackle (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.2" id="ability-hexes-fake-fn-4.2" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-5" id="ability-hexes-fake-fn-5" data-hash-target to="ability-hexes-fake-fn-5-target">5</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-6" id="ability-hexes-fake-fn-6" data-hash-target to="ability-hexes-fake-fn-6-target">6</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-7" id="ability-hexes-fake-fn-7" data-hash-target to="ability-hexes-fake-fn-7-target">7</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8" id="ability-hexes-fake-fn-8" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Move-Equivalent Action">A witch can cackle madly. Any creature that is within 30 feet that is under the effects of an <Link to="/hex/agony">agony</Link> hex, <Link to="/hex/charm">charm</Link> hex, <Link to="/hex/discord">discord</Link> hex, <Link to="/hex/disrupt_connection">disrupt connection</Link> hex, <Link to="/hex/distraction">distraction</Link> hex, <Link to="/hex/evil_eye">evil eye</Link> hex, <Link to="/hex/fortune">fortune</Link> hex, <Link to="/hex/misfortune">misfortune</Link> hex, <Link to="/hex/protective_luck">protective luck</Link> hex, or <Link to="/hex/sink">sink</Link> hex caused by the witch has the duration of that hex extended by 1 round.</Pair>
</Ability>
<Ability id="hexcauldron-cauldron-ex-fn4-3" icon={["stairs-goal","upgrade"]}>
<Pair single id="hexcauldron-cauldron-ex-fn4-3"><Link to="/hex/cauldron">⮞</Link> Cauldron (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.3" id="ability-hexes-fake-fn-4.3" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch receives <Link to="/feat/brew_potion">Brew Potion</Link> as a bonus feat and a +4 insight bonus on Craft (alchemy) skill checks.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="hexpoisonsteep-poison-steep-sp-fn3-2" icon={["magic-swirl"]}>
<Pair single id="hexpoisonsteep-poison-steep-sp-fn3-2"><Link to="/hex/poison_steep">⮞</Link> Poison Steep (Sp) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.2" id="ability-hexes-fake-fn-3.2" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">The witch can use her <em>cauldron</em> to brew a foul toxin in which she can steep fruits and other delicious edibles, transforming them so that when eaten, they have the same effect as a <Link to="/spell/poison">poison</Link> spell. Brewing the toxin and then steeping the food takes 1 hour in total; steeping can affect up to 1 pound of food. The food is poisoned for 24 hours, and the poison cannot be transferred to other objects. The food tastes normal, but magic detects it as poisonous.</Pair>
</Ability>
<Ability id="hexwitchsbottle-witchs-bottle-su-fn9" icon={["magic-swirl"]}>
<Pair single id="hexwitchsbottle-witchs-bottle-su-fn9"><Link to="/hex/witchs_bottle">⮞</Link> Witch's Bottle (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-9" id="ability-hexes-fake-fn-9" data-hash-target to="ability-hexes-fake-fn-9-target">9</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/cauldron">Cauldron</Link></Pair>
<Pair title="Ability">Once per day, the witch can perform a 10-minute ritual to create a potion imbued with the power of one of her hexes. Any creature that consumes this potion is affected by the hex as if cast by its creator. The witch can't use that hex until the potion is consumed or rendered inert.</Pair>
<Pair title="Special">Only hexes that can target a creature other than the witch can be distilled in this way. The potion remains potent until consumed or rendered inert by the witch as a <strong className="hl">free action</strong>.</Pair>
</Ability>
</div>
<Ability id="hexcharm-charm-su-fn4-4" icon={["stairs-goal"]}>
<Pair single id="hexcharm-charm-su-fn4-4"><Link to="/hex/charm">⮞</Link> Charm (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.4" id="ability-hexes-fake-fn-4.4" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A witch can charm an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the witch had successfully used the <Link to="/skill/diplomacy">Diplomacy</Link> skill. The effect lasts for a number of rounds equal to the Witch's Intelligence modifier. A Will save negates this effect.</Pair>
<Pair title="At 8th Level">This effect improves the attitude of the target creature by 2 steps.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
<Ability id="hexchildscent-child-scent-ex-fn3-3" icon={["stairs-goal"]}>
<Pair single id="hexchildscent-child-scent-ex-fn3-3"><Link to="/hex/child_scent">⮞</Link> Child-Scent (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.3" id="ability-hexes-fake-fn-3.3" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch gains the <Link to="/umr/scent">scent</Link> ability, but only with respect to humanoid children and immature animals. Thus, she could sniff out a child's hiding place or a den of wolf pups, but not the child's parents or the den mother.</Pair>
</Ability>
<Ability id="hexcitysight-city-sight-su-fn10" icon={["armor-downgrade"]}>
<Pair single id="hexcitysight-city-sight-su-fn10" flavor="The witch curses a target with the simple vision of urban mortals."><Link to="/hex/city_sight">⮞</Link> City Sight (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-10" id="ability-hexes-fake-fn-10" data-hash-target to="ability-hexes-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">On a failed Fortitude save, the subject loses the use of darkvision, <Link to="/umr/greensight">greensight</Link>, low-light vision, <Link to="/umr/see_in_darkness">see in darkness</Link>, and other visual abilities beyond simple sight, but not nonvisual means of perception like <Link to="/umr/blindsight">blindsight</Link>, <Link to="/umr/scent">scent</Link>, or <Link to="/umr/tremorsense">tremorsense</Link>. This effect lasts 1 minute.</Pair>
<Pair title="At 8th Level">This effect lasts for 10 minutes instead.</Pair>
<Pair title="Special">Whether or not the creature succeeds at the saving throw, it can't be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexcombathypnosis-combat-hypnosis-su-fn11" icon={["magic-swirl"]}>
<Pair single id="hexcombathypnosis-combat-hypnosis-su-fn11" flavor="The witch can lull her enemies into a trance, even in the chaos of combat."><Link to="/hex/combat_hypnosis">⮞</Link> Combat Hypnosis (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-11" id="ability-hexes-fake-fn-11" data-hash-target to="ability-hexes-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">This hex functions as <Link to="/spell/hypnotism">hypnotism</Link>, except it can affect only one creature at a time, and the target creature does not receive the usual +2 bonus on its saving throw while in combat. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexcongeal-congeal-su-fn8-2" icon={["armor-downgrade"]}>
<Pair single id="hexcongeal-congeal-su-fn8-2"><Link to="/hex/congeal">⮞</Link> Congeal (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8.2" id="ability-hexes-fake-fn-8.2" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The witch can make the water in a 10-foot radius around her sludgy and viscous for 1 minute, causing it to function as <Link to="/rule/difficult_terrain">difficult terrain</Link> for all swimming creatures except herself. This also provides partial <Link to="/rule/cover">cover</Link> against physical effects that pass through the affected area.</Pair>
</Ability>
<Ability id="hexcoven-coven-ex-fn4-5" icon={["upgrade"]}>
<Pair single id="hexcoven-coven-ex-fn4-5"><Link to="/hex/coven">⮞</Link> Coven (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.5" id="ability-hexes-fake-fn-4.5" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch counts as a <Link to="/family/hag">hag</Link> for the purpose of joining a hag's coven. The coven must contain at least one hag.</Pair>
<Pair title="Ability">In addition, whenever the witch with this hex is within 30 feet of another witch with this hex, she can use the <Link to="/rule/aid_another">aid another</Link> action to grant a +1 bonus to the other witch's caster level for 1 round. This bonus applies to the witch's spells and all of her hexes.</Pair>
</Ability>
<Ability id="hexcursedwound-cursed-wound-fn12" icon={["armor-downgrade"]}>
<Pair single id="hexcursedwound-cursed-wound-fn12" flavor="The witch can curse a living creature, preventing it from healing completely."><Link to="/hex/cursed_wound">⮞</Link> Cursed Wound <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-12" id="ability-hexes-fake-fn-12" data-hash-target to="ability-hexes-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability"><p>For a number of days equal to 3 + the witch's Intelligence modifier (minimum 1), whenever the victim is the target of a conjuration (healing) spell or magical healing effect, the caster of the healing effect must succeed at a caster level check (DC = 11 + the witch's level) to end the hex. If the check fails, the healing effect functions as normal, except it cannot remove the last 10 points of damage the victim suffered.</p>
<p>Similarly, natural healing, <Link to="/umr/fast_healing">fast healing</Link>, and <Link to="/umr/regeneration">regeneration</Link> fail to cure the victim's last 10 points of damage. Thus, the victim's effective maximum number of hit points is 10 fewer than normal.</p>
<p>A successful Will save reduces the duration of this hex to 1 round.</p>
</Pair>
<Pair title="At 5th Level">The victim of this hex also takes a -2 penalty on Fortitude saving throws to avoid contracting a disease or poison from an injury.</Pair>
<Pair title="Special">This is a curse effect and can be removed by <Link to="/spell/remove_curse">remove curse</Link>.</Pair>
</Ability>
<Ability id="hexdarkapothecary-dark-apothecary-ex-fn11-2" icon={["upgrade"]}>
<Pair single id="hexdarkapothecary-dark-apothecary-ex-fn11-2" flavor="The witches of ancient Iblydos were masters of herbalism, crafting potent drugs and poisons."><Link to="/hex/dark_apothecary">⮞</Link> Dark Apothecary (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-11.2" id="ability-hexes-fake-fn-11.2" data-hash-target to="ability-hexes-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Passive Ability">The witch receives a +4 insight bonus on checks to craft and apply poison.</Pair>
</Ability>
<Ability id="hexdeathcall-deathcall-su-fn13" icon={["armor-downgrade","aura"]}>
<Pair single id="hexdeathcall-deathcall-su-fn13" flavor="The witch's presence makes death more likely for wounded foes."><Link to="/hex/deathcall">⮞</Link> Deathcall (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-13" id="ability-hexes-fake-fn-13" data-hash-target to="ability-hexes-fake-fn-13-target">13</InnerLink></sup></Pair>
<Pair title="Passive Ability">Creatures within 120 feet of the witch take a -1 penalty on checks to stabilize when <Link to="/misc/dying">dying</Link>.</Pair>
<Pair title="At 8th Level">This penalty changes to -2.</Pair>
<Pair title="At 16th Level">It changes to -3.</Pair>
</Ability>
<Ability id="hexdiscord-discord-su-fn5-2" icon={["armor-downgrade"]}>
<Pair single id="hexdiscord-discord-su-fn5-2"><Link to="/hex/discord">⮞</Link> Discord (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-5.2" id="ability-hexes-fake-fn-5.2" data-hash-target to="ability-hexes-fake-fn-5-target">5</InnerLink></sup></Pair>
<Pair title="Ability">The witch can make an animal or humanoid within 30 feet distrust another creature within line of sight. The target's <Link to="/skill/attitude">attitude</Link> toward the other creature decreases by one step. A successful Will save negates this effect. The effect lasts for a number of rounds equal to the witch's Intelligence modifier.</Pair>
<Pair title="At 8th Level">This effect decreases the attitude of the target creature by two steps.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
<Ability id="hexdisguise-disguise-sp-fn4-6" icon={["magic-swirl"]}>
<Pair single id="hexdisguise-disguise-sp-fn4-6"><Link to="/hex/disguise">⮞</Link> Disguise (Sp) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.6" id="ability-hexes-fake-fn-4.6" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Usage">1 hour/day per witch level; these hours need not be consecutive, but they must be spent in 1-hour increments</Pair>
<Pair title="Ability">A witch can change her appearance, as if using <Link to="/spell/disguise_self">disguise self</Link>.</Pair>
</Ability>
<Ability id="hexdisruptconnection-disrupt-connection-su-fn6-2" icon={["armor-downgrade"]}>
<Pair single id="hexdisruptconnection-disrupt-connection-su-fn6-2"><Link to="/hex/disrupt_connection">⮞</Link> Disrupt Connection (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-6.2" id="ability-hexes-fake-fn-6.2" data-hash-target to="ability-hexes-fake-fn-6-target">6</InnerLink></sup></Pair>
<Pair title="Ability">The hexer disrupts the connection between a summoned creature within 30 feet and its master. The summoned creature must succeed at a Will save or be <Link to="/misc/confused">confused</Link> for 1d4 rounds. While it's confused in this way, during any round in which the percentile die roll to determine the creature's confusion result is 76-100, the affected creature instead acts as if the hexer had summoned it (attacking the hexer's enemies or performing such other tasks that the hexer can communicate to it).</Pair>
<Pair title="At 8th Level">This hex causes the summoned creature to act as if the hexer had summoned it on a result of 51-100.</Pair>
<Pair title="At 16th Level">This hex causes the summoned creature to act this way on a result of 26-100.</Pair>
<Pair title="Special">Once a creature has been the target of this hex, that creature is immune to this hex for 24 hours.</Pair>
</Ability>
<Ability id="hexdistraction-distraction-su-fn7-2" icon={["armor-downgrade"]}>
<Pair single id="hexdistraction-distraction-su-fn7-2"><Link to="/hex/distraction">⮞</Link> Distraction (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-7.2" id="ability-hexes-fake-fn-7.2" data-hash-target to="ability-hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause a creature within 30 feet to suffer hallucinatory distractions whenever it tries to cast a spell or use a spell-like ability for 1 round. Anytime the creature attempts to do so, it must succeed at a <Link to="/rule/concentration">concentration</Link> check (DC = 15 + twice the spell level) or lose the spell. A successful Will saving throw negates this hex.</Pair>
<Pair title="At 8th Level">The duration becoems 2 rounds.</Pair>
<Pair title="At 16th Level">The duration increases to 3 rounds.</Pair>
<Pair title="Special">Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day. Hexes that affect the <Link to="/hex/misfortune">misfortune</Link> hex, such as <Link to="/hex/cackle">cackle</Link>, also affect distraction.</Pair>
</Ability>
<Ability id="hexenemyground-enemy-ground-su-fn10-2" icon={["armor-downgrade"]}>
<Pair single id="hexenemyground-enemy-ground-su-fn10-2" flavor="The witch curses a target with clumsiness when in dangerous terrain."><Link to="/hex/enemy_ground">⮞</Link> Enemy Ground (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-10.2" id="ability-hexes-fake-fn-10.2" data-hash-target to="ability-hexes-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">The target takes a -4 penalty on Acrobatics checks to move over slippery or uneven surfaces and to avoid attacks of opportunity while moving through threatened squares. This effect lasts for 1 minute.</Pair>
<Pair title="At 8th Level">This penalty increases to -8.</Pair>
<Pair title="Special">On a successful Will save, the penalty is reduced by half and the duration is only 1 round.</Pair>
</Ability>
<Ability id="hexevileye-evil-eye-su-fn4-7" icon={["armor-downgrade"]}>
<Pair single id="hexevileye-evil-eye-su-fn4-7" flavor="The witch can cause doubt to creep into the mind of a foe within 30 feet that she can see."><Link to="/hex/evil_eye">⮞</Link> Evil Eye (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.7" id="ability-hexes-fake-fn-4.7" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The target takes a -2 penalty on one of the following (witch's choice): AC, ability checks, attack rolls, saving throws, or skill checks.</Pair>
<Pair title="At 8th Level">The penalty increases to -4.</Pair>
<Pair title="Special">This hex lasts for a number of rounds equal to 3 + the witch's Intelligence modifier. A Will save reduces this to just 1 round. This is a mind-affecting effect.</Pair>
</Ability>
<Ability id="hexferalspeech-feral-speech-su-fn3-4" icon={["stairs-goal"]}>
<Pair single id="hexferalspeech-feral-speech-su-fn3-4"><Link to="/hex/feral_speech">⮞</Link> Feral Speech (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.4" id="ability-hexes-fake-fn-3.4" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">This hex grants the witch the ability to speak with and understand the response of any animal as if using <Link to="/spell/speak_with_animals">speak with animals</Link>, though each time she uses the hex, she must decide to communicate with either amphibians, birds, fish, mammals, or reptiles, and can only speak to and understand animals of that type. The witch can make herself understood as far as her voice carries. This hex does not predispose any animal so addressed toward the witch in any way.</Pair>
<Pair title="At 12th Level">The witch can use this hex to communicate with vermin.</Pair>
</Ability>
<Ability id="hexflight-flight-su-fn4-8" icon={["magic-swirl","upgrade"]}>
<Pair single id="hexflight-flight-su-fn4-8" flavor="The witch grows lighter as she gains power, eventually gaining the ability to fly."><Link to="/hex/flight">⮞</Link> Flight (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.8" id="ability-hexes-fake-fn-4.8" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="At 1st Level">The witch can use <Link to="/spell/feather_fall">feather fall</Link> at will and gains a +4 racial bonus on Swim checks.</Pair>
<Pair title="At 3rd Level">She can cast <Link to="/spell/levitate">levitate</Link> once per day.</Pair>
<Pair title="At 5th Level">She can <Link to="/spell/fly">fly</Link>, as per the spell, for a number of minutes per day equal to her level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments.</Pair>
<Pair title="Special">This hex only affects the witch.</Pair>
</Ability>
<Ability id="hexfloatinglotus-floating-lotus-su-fn14" icon={["magic-swirl","upgrade"]}>
<Pair single id="hexfloatinglotus-floating-lotus-su-fn14"><Link to="/hex/floating_lotus">⮞</Link> Floating Lotus (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-14" id="ability-hexes-fake-fn-14" data-hash-target to="ability-hexes-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch can conjure a large lotus flower that floats by her side for a number of minutes per day equal to her level. This duration doesn't need to be consecutive, but must be spent in 1-minute increments.</p>
<p>While summoned, the witch can use the lotus to cross water as if she was affected by <Link to="/spell/water_walk">water walk</Link>. She can also use the flower for short bursts of flight, gaining a +10 enhancement bonus on Acrobatics checks when attempting high jumps and long jumps.</p>
</Pair>
<Pair title="At 5th Level">This bonus increases to +20.</Pair>
<Pair title="At 9th Level">This bonus becomes +30.</Pair>
</Ability>
<Ability id="hexfortune-fortune-su-fn4-9" icon={["rolling-dices","upgrade"]}>
<Pair single id="hexfortune-fortune-su-fn4-9"><Link to="/hex/fortune">⮞</Link> Fortune (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.9" id="ability-hexes-fake-fn-4.9" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can grant a creature within 30 feet a bit of good luck for 1 round. The target can call upon this good luck once per round, allowing him to reroll any ability check, attack roll, saving throw, or skill check, taking the better result. He must decide to use this ability before the first roll is made.</Pair>
<Pair title="At 8th Level">The duration of this hex becomes 2 rounds.</Pair>
<Pair title="At 16th Level">It becomes 3 rounds.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>fortune</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexgiftofconsumption-gift-of-consumption-su-fn15" icon={["armor-downgrade"]}>
<Pair single id="hexgiftofconsumption-gift-of-consumption-su-fn15" flavor="The witch curses a creature to share any effects that target her vitality."><Link to="/hex/gift_of_consumption">⮞</Link> Gift of Consumption (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-15" id="ability-hexes-fake-fn-15" data-hash-target to="ability-hexes-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Immediate Action">Whenever the witch is exposed to an effect that requires her to attempt a Fortitude save, she can curse a creature within 30 feet to share the effect. The hexed creature must also attempt a Fortitude save at the same DC as the witch's, and on a failure it is subject to the same effects as the witch.</Pair>
<Pair title="Special">Regardless of the outcome of the saving throw, the creature can't be targeted by this hex again for 1 day. This hex does not function with effects that require additional types of saves, such as <Link to="/spell/phantasmal_killer">phantasmal killer</Link>.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="hexgreatergiftofconsumption-greater-gift-of-consumption-su-fn15-2" icon={["armor-downgrade"]}>
<Pair single id="hexgreatergiftofconsumption-greater-gift-of-consumption-su-fn15-2" flavor={<>The witch can more effectively redirect effects to her proxy chosen by the <em>gift of consumption</em> hex.</>}><Link to="/hex/greater_gift_of_consumption">⮞</Link> Greater Gift of Consumption (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-15.2" id="ability-hexes-fake-fn-15.2" data-hash-target to="ability-hexes-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/gift_of_consumption">Gift of consumption</Link></Pair>
<Pair title="Ability"><p>When the witch succeeds at her Fortitude save against an effect that she has redirected to a proxy, the hexed creature takes a -4 penalty on its Fortitude save against the redirected effect.</p>
<p>If the witch ever fails a Fortitude save or intentionally exposes herself to an effect that requires a Fortitude save, such as by ingesting a poison, she can redirect that effect to affect only the hexed creature, though the hexed creature can still attempt a saving throw to resist the effects.</p>
<p>Once she has redirected an effect to another creature in this way, that creature cannot be affected by the <em>gift of consumption</em> hex again for 24 hours.</p>
</Pair>
</Ability>
</div>
<Ability id="hexhealing-healing-su-fn4-10" icon={["remedy"]}>
<Pair single id="hexhealing-healing-su-fn4-10"><Link to="/hex/healing">⮞</Link> Healing (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.10" id="ability-hexes-fake-fn-4.10" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A witch can soothe the wounds of those she touches. This acts as a <Link to="/spell/cure_light_wounds">cure light wounds</Link> spell, using the witch's caster level.</Pair>
<Pair title="At 5th Level">This hex acts like <Link to="/spell/cure_moderate_wounds">cure moderate wounds</Link>.</Pair>
<Pair title="Special">Once a creature has benefited from the <em>healing</em> hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexheraldingbloom-heralding-bloom-su-fn14-2" icon={["magic-swirl"]}>
<Pair single id="hexheraldingbloom-heralding-bloom-su-fn14-2"><Link to="/hex/heralding_bloom">⮞</Link> Heralding Bloom (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-14.2" id="ability-hexes-fake-fn-14.2" data-hash-target to="ability-hexes-fake-fn-14-target">14</InnerLink></sup></Pair>
<Pair title="Ability">A witch can compel a plant within 30 feet to spread a message, which must be 25 words or fewer and in a language the witch speaks. This message can't contain verbal spell components, command words, or other magical effects. An intelligent plant that's targeted can attempt a Will save to negate the effect. If the save fails, the plant is magically compelled to "speak" this message in an audible voice, repeating it each time one or more intelligent creatures to whom the message has not yet been repeated comes within range, until 24 hours after the hex has been placed.</Pair>
<Pair title="Special"><p>The plant under the effect of the hex does not gain any special intelligence from this hex or gain any ability to understand the message if it does not normally understand the language the message is delivered in, and it is in no way otherwise compelled to act in any way it would not normally.</p>
<p>A witch can have a number of heralding blooms active equal to her witch level + her Charisma modifier.</p>
</Pair>
</Ability>
<Ability id="hexiceplant-iceplant-su-fn16" icon={["armor-upgrade"]}>
<Pair single id="hexiceplant-iceplant-su-fn16"><Link to="/hex/iceplant">⮞</Link> Iceplant (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-16" id="ability-hexes-fake-fn-16" data-hash-target to="ability-hexes-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Passive Ability">This hex grants the witch and her familiar a +2 natural armor bonus and the constant effects of <Link to="/spell/endure_elements">endure elements</Link>. The effect leaves the witch's skin thick and stiff to the touch.</Pair>
</Ability>
<Ability id="hexleshysummoning-leshy-summoning-su-fn16-2" icon={["upgrade","magic-swirl"]}>
<Pair single id="hexleshysummoning-leshy-summoning-su-fn16-2"><Link to="/hex/leshy_summoning">⮞</Link> Leshy Summoning (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-16.2" id="ability-hexes-fake-fn-16.2" data-hash-target to="ability-hexes-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Passive Ability">The witch counts as a plant creature for the purpose of growing <Link to="/family/leshy">leshys</Link>. She adds <Link to="/monster/leaf_leshy">leaf leshys</Link>, <Link to="/monster/gourd_leshy">gourd leshys</Link>, <Link to="/monster/fungus_leshy">fungus leshys</Link>, <Link to="/monster/seaweed_leshy">seaweed leshys</Link>, and <Link to="/monster/lotus_leshy">lotus leshys</Link> to the list of creatures she can summon with <Link to="/spell/summon_monster">summon monster I, II, III, IV, and V</Link>, respectively.</Pair>
</Ability>
<Ability id="hexminorprophecy-minor-prophecy-su-fn11-3" icon={["magic-swirl"]}>
<Pair single id="hexminorprophecy-minor-prophecy-su-fn11-3"><Link to="/hex/minor_prophecy">⮞</Link> Minor Prophecy (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-11.3" id="ability-hexes-fake-fn-11.3" data-hash-target to="ability-hexes-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">The witch can call on her prophetic ancestors to cast <Link to="/spell/augury">augury</Link> once per day. She can spend a full hour casting the spell to negate the need for material components, but this reduces the accuracy of the spell by 5%.</Pair>
</Ability>
<Ability id="hexmisfortune-misfortune-su-fn4-11" icon={["rolling-dices","armor-downgrade"]}>
<Pair single id="hexmisfortune-misfortune-su-fn4-11"><Link to="/hex/misfortune">⮞</Link> Misfortune (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.11" id="ability-hexes-fake-fn-4.11" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result.</Pair>
<Pair title="At 8th Level">The duration becomes 2 rounds.</Pair>
<Pair title="At 16th Level">This hex now lasts for 3 rounds.</Pair>
<Pair title="Special">This hex affects all rolls the target must make while it lasts. A Will save negates this hex. Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexmotherseye-mothers-eye-su-fn17" icon={["stairs-goal"]}>
<Pair single id="hexmotherseye-mothers-eye-su-fn17"><Link to="/hex/mothers_eye">⮞</Link> Mother's Eye (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-17" id="ability-hexes-fake-fn-17" data-hash-target to="ability-hexes-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability">The witch can see through plant matter, as the <Link to="/umr/greensight">greensight</Link> universal monster ability.</Pair>
</Ability>
<Ability id="hexmurksight-murksight-su-fn8-3" icon={["stairs-goal"]}>
<Pair single id="hexmurksight-murksight-su-fn8-3"><Link to="/hex/murksight">⮞</Link> Murksight (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8.3" id="ability-hexes-fake-fn-8.3" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The witch can see through natural fog, mist, and rain without penalty, ignoring any <Link to="/rule/concealment">concealment</Link> bonuses gained from such effects. If the effect is created by magic, the witch can see up to 15 feet without penalty, with normal penalties and effects applying beyond that distance. This ability functions underwater as well, allowing the witch to see in murky water as though it were clear.</Pair>
<Pair title="Special">This does not allow the witch to see anything she could not see otherwise, such as an invisible creature.</Pair>
</Ability>
<Ability id="hexnails-nails-ex-fn3-5" icon={["mailed-fist"]}>
<Pair single id="hexnails-nails-ex-fn3-5"><Link to="/hex/nails">⮞</Link> Nails (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.5" id="ability-hexes-fake-fn-3.5" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability">The witch's nails are long and sharp, and count as <Link to="/umr/natural_weapons">natural weapons</Link> that deal 1d3 points of damage (1d2 for a Small witch). These attacks are secondary attacks.</Pair>
<Pair title="Special">If trimmed, the witch's nails regrow to their normal size in 1d4 days.</Pair>
</Ability>
<Ability id="hexnoplacelikehome-no-place-like-home-su-fn10-3" icon={["shield-reflect","armor-downgrade"]}>
<Pair single id="hexnoplacelikehome-no-place-like-home-su-fn10-3"><Link to="/hex/no_place_like_home">⮞</Link> No Place Like Home (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-10.3" id="ability-hexes-fake-fn-10.3" data-hash-target to="ability-hexes-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch fills an ally with the safety he feels at home or inflicts pangs of homesickness to hamper an enemy's defenses. She chooses a target for the hex within 30 feet. If she chooses an ally, that ally gains a +2 dodge bonus to AC against traps and on Reflex saves against traps. If she chooses an opponent, that opponent takes a -2 penalty to AC against traps and on Reflex saves against traps.</p>
<p>Either way, the effects last for 1 minute. The target can attempt a Will save to negate the effects of the hex.</p>
</Pair>
<Pair title="At 8th Level">The bonus or penalty increases to 4.</Pair>
<Pair title="At 16th Level">The bonus or penalty increases to 6.</Pair>
<Pair title="Special">A creature targeted by this hex cannot be targeted again by this hex for 1 day.</Pair>
</Ability>
<Ability id="hexpeacebond-peacebond-su-fn2-2" icon={["armor-downgrade"]}>
<Pair single id="hexpeacebond-peacebond-su-fn2-2"><Link to="/hex/peacebond">⮞</Link> Peacebond (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-2.2" id="ability-hexes-fake-fn-2.2" data-hash-target to="ability-hexes-fake-fn-2-target">2</InnerLink></sup></Pair>
<Pair title="Ability">A witch can use this hex on a creature to prevent it from drawing a weapon for a number of rounds equal to the witch's level. This hex has no effect on natural weapons or weapons already in a creature's hands, but does prevent an archer from drawing arrows.</Pair>
<Pair title="Special">A Will save negates this effect, and whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexpoisontouch-poison-touch-ex-fn15-3" icon={["mailed-fist"]}>
<Pair single id="hexpoisontouch-poison-touch-ex-fn15-3"><Link to="/hex/poison_touch">⮞</Link> Poison Touch (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-15.3" id="ability-hexes-fake-fn-15.3" data-hash-target to="ability-hexes-fake-fn-15-target">15</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch empowers herself or an ally within 30 feet with poisonous nails. The affected creature gains a <Link to="/umr/claw_attack">claw attack</Link> as a secondary attack that deals 1d3 points of damage (1d2 for Small creatures) and has the following poison ability:</p>
<AffInfo type="Claw-injury" save="Fort 10 + 1/2 the witch's level + the witch's Int modifier" freq="1/round for 6 rounds" eff={<>1d2 <Link to="/rule/str_damage">Str damage</Link></>} cure1 icon="p" />
<p>The creature gains this claw attack for a number of minutes equal to the witch's level. If the target already has a claw attack, that attack gains the poison ability listed above, but the DC is 1 higher.</p>
</Pair>
<Pair title="Special">Once a creature has benefited from this hex, it cannot benefit from it again for 24 hours.</Pair>
</Ability>
<Ability id="hexpollutewater-pollute-water-su-fn8-4" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexpollutewater-pollute-water-su-fn8-4" flavor="The witch can corrupt bodies of water with foul energies."><Link to="/hex/pollute_water">⮞</Link> Pollute Water (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8.4" id="ability-hexes-fake-fn-8.4" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">This functions as the <Link to="/hex/blight">blight</Link> hex, except it affects only either an area of standing water or a creature with the aquatic or water subtype. A creature of any type that drinks water from a polluted area must succeed at a Fortitude saving throw or become <Link to="/misc/nauseated">nauseated</Link> for 1d3 rounds and afflicted as if blighted with the <em>blight</em> hex curse.</Pair>
<Pair title="Special">A creature that succeeds at this saving throw is immune to the effects of <em>polluted water</em> from this area for 24 hours. <em>Polluted water</em> does not quench thirst.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="hexpollutingglance-polluting-glance-su-fn8-5" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexpollutingglance-polluting-glance-su-fn8-5" flavor="The witch can corrupt nonmagical liquid items (such as alchemical remedies) with a look."><Link to="/hex/polluting_glance">⮞</Link> Polluting Glance (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8.5" id="ability-hexes-fake-fn-8.5" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/pollute_water">Pollute water</Link></Pair>
<Pair title="Ability">The witch can choose one liquid item she can see within 30 feet and change its contents into polluted water as per her <em>pollute water</em> hex.</Pair>
<Pair title="Special">The number of polluting glance hexes the witch can have active at one time is equal to her Intelligence bonus (minimum 1).</Pair>
</Ability>
</div>
<Ability id="hexprehensilehair-prehensile-hair-su-fn3-6" icon={["mailed-fist"]}>
<Pair single id="hexprehensilehair-prehensile-hair-su-fn3-6"><Link to="/hex/prehensile_hair">⮞</Link> Prehensile Hair (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.6" id="ability-hexes-fake-fn-3.6" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch can instantly cause her hair (or even her eyebrows) to grow up to 10 feet long or to shrink to its normal length, and can manipulate her hair as if it were a limb with a Strength score equal to her Intelligence score. Her hair has reach 10 feet, and she can use it as a secondary <Link to="/umr/natural_attack">natural attack</Link> that deals 1d3 points of damage (1d2 for a Small witch).</p>
<p>Her hair can manipulate objects (but not weapons) as dexterously as a human hand. The hair cannot be sundered or attacked as a separate creature. Pieces cut from the witch's elongated hair shrink away to nothing.</p>
<p>Using her hair does not harm the witch's head or neck, even if she lifts something heavy with it.</p>
</Pair>
<Pair title="Special">The witch can manipulate her hair a number of minutes each day equal to her level; these minutes do not need to be consecutive, but must be spent in 1-minute increments. A typical male witch with this hex can also manipulate his beard, moustache, or eyebrows.</Pair>
</Ability>
<Ability id="hexprotectiveluck-protective-luck-su-fn7-3" icon={["rolling-dices","shield-reflect"]}>
<Pair single id="hexprotectiveluck-protective-luck-su-fn7-3"><Link to="/hex/protective_luck">⮞</Link> Protective Luck (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-7.3" id="ability-hexes-fake-fn-7.3" data-hash-target to="ability-hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause fate to twist so that it benefits a creature within 30 feet for 1 round. Whenever that creature is targeted by an effect that requires an attack roll, including weapon attacks, the attacker must roll twice and take the worse result.</Pair>
<Pair title="At 8th Level">This lasts for 2 rounds.</Pair>
<Pair title="At 16th Level">This hex lasts for 3 rounds.</Pair>
<Pair title="Special">A witch cannot use this ability on herself. Hexes that affect the <Link to="/hex/fortune">fortune</Link> hex, such as <Link to="/hex/cackle">cackle</Link>, also affect <em>protective luck.</em></Pair>
</Ability>
<Ability id="hexscar-scar-su-fn3-7" icon={["armor-downgrade"]}>
<Pair single id="hexscar-scar-su-fn3-7"><Link to="/hex/scar">⮞</Link> Scar (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-3.7" id="ability-hexes-fake-fn-3.7" data-hash-target to="ability-hexes-fake-fn-3-target">3</InnerLink></sup></Pair>
<Pair title="Ability"><p>This hex curses a single target touched with horrible scars of the witch's choosing, whether something as simple as a single letter on the target's forehead or blotchy, burn-like scars on his body. The target may make a Will save to resist this hex.</p>
<p>These <em>scars</em> do not interfere with the target's senses or prevent it from using abilities, but may affect social interactions. They persist through disguises and shapechanging.</p>
</Pair>
<Pair title="Ability">The witch can user her hexes on the scarred target at a range of up to 1 mile, and she is considered to have a body part from the target for the purpose of <Link to="/spell/scrying">scrying</Link> and similar divination spells.</Pair>
<Pair title="Special">The witch can withdraw this hex from a target as a <strong className="hl">move action</strong> at any range. The number of supernatural <em>scars</em> the witch can maintain at once is equal to her Intelligence bonus; once she reaches this limit, she must remove the <em>scar</em> from a current victim in order to mark another. Effects that remove curses can remove the <em>scar.</em></Pair>
</Ability>
<Ability id="hexseduction-seduction-su-fn17-2" icon={["armor-downgrade"]}>
<Pair single id="hexseduction-seduction-su-fn17-2"><Link to="/hex/seduction">⮞</Link> Seduction (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-17.2" id="ability-hexes-fake-fn-17.2" data-hash-target to="ability-hexes-fake-fn-17-target">17</InnerLink></sup></Pair>
<Pair title="Ability"><p>The witch uses enthralling movements to <Link to="/misc/fascinated">fascinate</Link> a single creature within 60 feet that can see the witch. A Will save negates this effect. If the target is (or could be) sexually attracted to the witch, the save DC is increased by 2.</p>
<p>The effect lasts for 1 round, but the witch can extend this effect for 1 additional round (up to a total number of rounds equal to her class level) by taking a <strong className="hl">standard action</strong> to continue her enthralling movements.</p>
</Pair>
<Pair title="At 8th Level">The <em>fascination</em> effect lasts for 2 additional rounds after the witch ceases taking a standard action to maintain it.</Pair>
<Pair title="Special">Whether or not the target succeeds at its save, it cannot be the target of this ability again for 1 day. This is a mind-affecting charm effect.</Pair>
</Ability>
<Ability id="hexsink-sink-su-fn8-6" icon={["armor-downgrade"]}>
<Pair single id="hexsink-sink-su-fn8-6"><Link to="/hex/sink">⮞</Link> Sink (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-8.6" id="ability-hexes-fake-fn-8.6" data-hash-target to="ability-hexes-fake-fn-8-target">8</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause a creature in water to struggle, imposing a -4 penalty on its Swim checks and reducing its swim speed (if any) by 10 feet for 1 minute unless it succeeds at a Fortitude saving throw; on a successful save, the effect's duration is reduced to 1 round.</Pair>
<Pair title="Special">This hex does not stack with itself.</Pair>
</Ability>
<Ability id="hexslumber-slumber-su-fn4-12" icon={["magic-swirl"]}>
<Pair single id="hexslumber-slumber-su-fn4-12"><Link to="/hex/slumber">⮞</Link> Slumber (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-4.12" id="ability-hexes-fake-fn-4.12" data-hash-target to="ability-hexes-fake-fn-4-target">4</InnerLink></sup></Pair>
<Pair title="Ability">A witch can cause a creature within 30 feet to fall into a deep, magical sleep, as per the spell <Link to="/spell/sleep">sleep</Link>. The creature receives a Will save to negate the effect. If the save fails, the creature falls asleep for a number of rounds equal to the witch's level.</Pair>
<Pair title="Special"><p>This hex can affect a creature of any HD. The creature will not wake due to noise or light, but others can rouse it with a <strong className="hl">standard action</strong>. This hex ends immediately if the creature takes damage.</p>
<p>Whether or not the save is successful, a creature cannot be the target of this hex again for 1 day.</p>
</Pair>
</Ability>
<Ability id="hexsoothsayer-soothsayer-su-fn18-fn7-4" icon={["upgrade"]}>
<Pair single id="hexsoothsayer-soothsayer-su-fn18-fn7-4" flavor="The witch's predictions become self-fulfilling prophecies."><Link to="/hex/soothsayer">⮞</Link> Soothsayer (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-18" id="ability-hexes-fake-fn-18" data-hash-target to="ability-hexes-fake-fn-18-target">18</InnerLink></sup> <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-7.4" id="ability-hexes-fake-fn-7.4" data-hash-target to="ability-hexes-fake-fn-7-target">7</InnerLink></sup></Pair>
<Pair title="Ability">When the witch uses the <Link to="/hex/distraction">distraction</Link> hex, <Link to="/hex/evil_eye">evil eye</Link> hex, <Link to="/hex/fortune">fortune</Link> hex, <Link to="/hex/misfortune">misfortune</Link> hex, <Link to="/hex/protective_luck">protective luck</Link> hex, or <Link to="/hex/retribution">retribution</Link> major hex, she can choose to delay the effect. If she does so, the hex takes effect the next time the target makes a roll that could be affected by the hex (such as an ability check, attack roll, saving throw, or skill check) or is affected by an action that could be modified by the hex (such as being attacked when the hex would affect the target's AC), whichever comes first (ignoring actions that are not in combat and actions that have no penalty for failure).</Pair>
<Pair title="Special">The duration of the hex begins on the same round as the action that causes it to take effect. The hex is wasted if it is not triggered within 24 hours.</Pair>
</Ability>
<Ability id="hexsummersheat-summers-heat-su-fn10-4" icon={["armor-downgrade"]}>
<Pair single id="hexsummersheat-summers-heat-su-fn10-4"><Link to="/hex/summers_heat">⮞</Link> Summer's Heat (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-10.4" id="ability-hexes-fake-fn-10.4" data-hash-target to="ability-hexes-fake-fn-10-target">10</InnerLink></sup></Pair>
<Pair title="Ability">The witch surrounds her target with oppressive heat, dealing a number of points of nonlethal damage equal to her witch level and causing the target to become <Link to="/misc/fatigued">fatigued</Link>. The target can attempt a Fortitude save to reduce this nonlethal damage by half and negate the fatigued condition.</Pair>
<Pair title="Special">Whether or not the target succeeds at this save, it can't be the target of this hex again for 1 day.</Pair>
</Ability>
<Ability id="hexswamphag-swamp-hag-sp-fn19" icon={["stairs-goal","armor-upgrade"]}>
<Pair single id="hexswamphag-swamp-hag-sp-fn19"><Link to="/hex/swamp_hag">⮞</Link> Swamp Hag (Sp) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-19" id="ability-hexes-fake-fn-19" data-hash-target to="ability-hexes-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Passive Ability">While traveling through swamps, mires, bogs, and similar terrain, the witch leaves no trail and cannot be tracked, as the <Link to="/ability/trackless_step">trackless step</Link> druid ability. The witch can walk through mud and even quicksand as if it were normal ground.</Pair>
</Ability>
<div className="abilityGroup">
<Ability id="hexmudwitch-mud-witch-su-fn20" icon={["magic-swirl","armor-upgrade"]}>
<Pair single id="hexmudwitch-mud-witch-su-fn20"><Link to="/hex/mud_witch">⮞</Link> Mud Witch (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-20" id="ability-hexes-fake-fn-20" data-hash-target to="ability-hexes-fake-fn-20-target">20</InnerLink></sup></Pair>
<Pair title="Prerequisites"><Link to="/hex/swamp_hag">Swamp hag</Link></Pair>
<Pair title="Usage">1 minute/day per witch level; these minutes need not be consecutive, but they must be spent in 1-minute increments</Pair>
<Pair title="Ability"><p>A witch with this hex can assume the form of viscous brown mud. The witch's type changes to <Link to="/type/ooze">ooze</Link> and she is able to squeeze through even the smallest cracks, but she can't make attacks or cast spells with verbal, somatic, material, or focus components while in this form, and she loses her supernatural abilities. If the witch has a touch spell ready to use, that spell is discharged harmlessly when she uses this hex.</p>
<p>While the witch is in mud form, her speed becomes 10 feet and she gains a swim speed of 20 feet. The witch gains DR 10/slashing and cold resistance 10.</p>
</Pair>
<Pair title="At 10th Level">While the witch is in mud form, her speed increases to 20 feet and her swim speed increases to 40 feet.</Pair>
<Pair title="Special">This hex affects only the witch.</Pair>
</Ability>
</div>
<Ability id="hexswampsgrasp-swamps-grasp-fn12-2" icon={["stairs-goal"]}>
<Pair single id="hexswampsgrasp-swamps-grasp-fn12-2"><Link to="/hex/swamps_grasp">⮞</Link> Swamp's Grasp <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-12.2" id="ability-hexes-fake-fn-12.2" data-hash-target to="ability-hexes-fake-fn-12-target">12</InnerLink></sup></Pair>
<Pair title="Ability">The witch can cause an area to become an entangling quagmire. One 10-foot square per witch level within 90 feet becomes <Link to="/rule/difficult_terrain">difficult terrain</Link> for a number of rounds equal to 3 + the witch's Intelligence modifier.</Pair>
<Pair title="Special">If the witch uses this hex again before the duration of the previous use has expired, the effects of the previous use of this hex end immediately.</Pair>
</Ability>
<Ability id="hexswine-swine-su-fn11-4" icon={["magic-swirl","armor-downgrade"]}>
<Pair single id="hexswine-swine-su-fn11-4"><Link to="/hex/swine">⮞</Link> Swine (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-11.4" id="ability-hexes-fake-fn-11.4" data-hash-target to="ability-hexes-fake-fn-11-target">11</InnerLink></sup></Pair>
<Pair title="Ability">The witch can partially transform an enemy into a pig. The effects of the transformation are mostly cosmetic and do not change the creature's size category or overall shape, but the affected creature takes a -2 penalty on Will saving throws for a number of rounds equal to the witch's Intelligence modifier (Will negates).</Pair>
<Pair title="At 8th Level">The affected creature's hands (or paws) turn into hooves, preventing it from using claw attacks or taking any action that would require the creature to use its fingers.</Pair>
</Ability>
<Ability id="hextongues-tongues-su-fn21" icon={["stairs-goal"]}>
<Pair single id="hextongues-tongues-su-fn21"><Link to="/hex/tongues">⮞</Link> Tongues (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-21" id="ability-hexes-fake-fn-21" data-hash-target to="ability-hexes-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Ability">A witch with this hex can understand any spoken language for a number of minutes per day equal to her level, as <Link to="/spell/comprehend_languages">comprehend languages</Link>. This duration does not need to be consecutive, but it must be spent in 1-minute increments.</Pair>
<Pair title="At 5th Level">A witch can use this ability to speak any language, as per <Link to="/spell/tongues">tongues</Link>.</Pair>
</Ability>
<Ability id="hexunnervebeasts-unnerve-beasts-su-fn19-2" icon={["armor-downgrade"]}>
<Pair single id="hexunnervebeasts-unnerve-beasts-su-fn19-2"><Link to="/hex/unnerve_beasts">⮞</Link> Unnerve Beasts (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-19.2" id="ability-hexes-fake-fn-19.2" data-hash-target to="ability-hexes-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Ability">The target becomes offensive to animals (Will negates). Animals become distraught and aggressive in the victim's presence - horses buck, dogs snap and bark, bulls charge, and so on. The hex lasts a number of hours equal to the witch's Intelligence modifier.</Pair>
<Pair title="Special">A creature that saves against the hex cannot be affected by the hex for 1 day. The reaction of the animals is a mind-affecting charm effect, but the hex on the target is not.</Pair>
</Ability>
<Ability id="hexverdantfamiliar-verdant-familiar-ex-fn16-3" icon={["stairs-goal"]}>
<Pair single id="hexverdantfamiliar-verdant-familiar-ex-fn16-3"><Link to="/hex/verdant_familiar">⮞</Link> Verdant Familiar (Ex) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-16.3" id="ability-hexes-fake-fn-16.3" data-hash-target to="ability-hexes-fake-fn-16-target">16</InnerLink></sup></Pair>
<Pair title="Ability">The witch's familiar's creature type changes to plant, gaining all respective <Link to="/type/plant">plant traits</Link>.</Pair>
</Ability>
<Ability id="hexward-ward-su-fn21-2" icon={["shield-reflect"]}>
<Pair single id="hexward-ward-su-fn21-2" flavor="A witch can use this hex to place a protective ward over one creature."><Link to="/hex/ward">⮞</Link> Ward (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-21.2" id="ability-hexes-fake-fn-21.2" data-hash-target to="ability-hexes-fake-fn-21-target">21</InnerLink></sup></Pair>
<Pair title="Ability">The warded creature receives a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This <em>ward</em> lasts until the warded creature is hit or fails a saving throw.</Pair>
<Pair title="At 8th Level">The bonuses become +3.</Pair>
<Pair title="At 16th Level">The bonuses increase to +4.</Pair>
<Pair title="Special">A witch knows when a warded creature is no longer protected. A witch can have only one ward active at a time. If the witch uses this ability again, the previous <em>ward</em> immediately ends. A witch cannot use this ability on herself.</Pair>
</Ability>
<Ability id="hexwaterlung-water-lung-su-fn19-3" icon={["stairs-goal"]}>
<Pair single id="hexwaterlung-water-lung-su-fn19-3"><Link to="/hex/water_lung">⮞</Link> Water Lung (Su) <sup><InnerLink showBacklink="backlink-ability-hexes-fake-fn-19.3" id="ability-hexes-fake-fn-19.3" data-hash-target to="ability-hexes-fake-fn-19-target">19</InnerLink></sup></Pair>
<Pair title="Ability">An air-breathing target can breathe water or an aquatic target can breathe air. This lasts 1 minute.</Pair>
<Pair title="Special">If the witch uses this hex on herself, she can maintain it while she sleeps, allowing her to safely sleep underwater.</Pair>
</Ability>
<section data-footnotes><h3 id="ability-hexes-label">Footnotes</h3><ol>
<li id="ability-hexes-fake-fn-1-target"><p><Link to="/source/healers_handbook">Healer's Handbook</Link> pg. 16 <InnerLink aria-label="Back to reference 1" id="backlink-ability-hexes-fake-fn-1" data-hash-target to="ability-hexes-fake-fn-1">↩</InnerLink></p></li>
<li id="ability-hexes-fake-fn-2-target"><p><Link to="/source/champions_of_purity">Champions of Purity</Link> pg. 27 <InnerLink aria-label="Back to reference 2" id="backlink-ability-hexes-fake-fn-2" data-hash-target to="ability-hexes-fake-fn-2">↩</InnerLink> <InnerLink aria-label="Back to reference 2" id="backlink-ability-hexes-fake-fn-2.2" data-hash-target to="ability-hexes-fake-fn-2.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-3-target"><p><Link to="/source/ultimate_magic">Ultimate Magic</Link> pg. 81 <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3" data-hash-target to="ability-hexes-fake-fn-3">↩</InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.2" data-hash-target to="ability-hexes-fake-fn-3.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.3" data-hash-target to="ability-hexes-fake-fn-3.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.4" data-hash-target to="ability-hexes-fake-fn-3.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.5" data-hash-target to="ability-hexes-fake-fn-3.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.6" data-hash-target to="ability-hexes-fake-fn-3.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 3" id="backlink-ability-hexes-fake-fn-3.7" data-hash-target to="ability-hexes-fake-fn-3.7">↩<sup>7</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-4-target"><p><Link to="/source/advanced_players_guide">Advanced Player's Guide</Link> pg. 66 <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4" data-hash-target to="ability-hexes-fake-fn-4">↩</InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.2" data-hash-target to="ability-hexes-fake-fn-4.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.3" data-hash-target to="ability-hexes-fake-fn-4.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.4" data-hash-target to="ability-hexes-fake-fn-4.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.5" data-hash-target to="ability-hexes-fake-fn-4.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.6" data-hash-target to="ability-hexes-fake-fn-4.6">↩<sup>6</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.7" data-hash-target to="ability-hexes-fake-fn-4.7">↩<sup>7</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.8" data-hash-target to="ability-hexes-fake-fn-4.8">↩<sup>8</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.9" data-hash-target to="ability-hexes-fake-fn-4.9">↩<sup>9</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.10" data-hash-target to="ability-hexes-fake-fn-4.10">↩<sup>10</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.11" data-hash-target to="ability-hexes-fake-fn-4.11">↩<sup>11</sup></InnerLink> <InnerLink aria-label="Back to reference 4" id="backlink-ability-hexes-fake-fn-4.12" data-hash-target to="ability-hexes-fake-fn-4.12">↩<sup>12</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-5-target"><p><Link to="/source/magical_marketplace">Magical Marketplace</Link> pg. 28 <InnerLink aria-label="Back to reference 5" id="backlink-ability-hexes-fake-fn-5" data-hash-target to="ability-hexes-fake-fn-5">↩</InnerLink> <InnerLink aria-label="Back to reference 5" id="backlink-ability-hexes-fake-fn-5.2" data-hash-target to="ability-hexes-fake-fn-5.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-6-target"><p><Link to="/source/monster_summoners_handbook">Monster Summoner's Handbook</Link> pg. 9 <InnerLink aria-label="Back to reference 6" id="backlink-ability-hexes-fake-fn-6" data-hash-target to="ability-hexes-fake-fn-6">↩</InnerLink> <InnerLink aria-label="Back to reference 6" id="backlink-ability-hexes-fake-fn-6.2" data-hash-target to="ability-hexes-fake-fn-6.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-7-target"><p><Link to="/source/heroes_of_the_high_court">Heroes of the High Court</Link> pg. 9 <InnerLink aria-label="Back to reference 7" id="backlink-ability-hexes-fake-fn-7" data-hash-target to="ability-hexes-fake-fn-7">↩</InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-hexes-fake-fn-7.2" data-hash-target to="ability-hexes-fake-fn-7.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-hexes-fake-fn-7.3" data-hash-target to="ability-hexes-fake-fn-7.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 7" id="backlink-ability-hexes-fake-fn-7.4" data-hash-target to="ability-hexes-fake-fn-7.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-8-target"><p><Link to="/source/people_of_the_wastes">People of the Wastes</Link> pg. 21 <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8" data-hash-target to="ability-hexes-fake-fn-8">↩</InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8.2" data-hash-target to="ability-hexes-fake-fn-8.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8.3" data-hash-target to="ability-hexes-fake-fn-8.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8.4" data-hash-target to="ability-hexes-fake-fn-8.4">↩<sup>4</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8.5" data-hash-target to="ability-hexes-fake-fn-8.5">↩<sup>5</sup></InnerLink> <InnerLink aria-label="Back to reference 8" id="backlink-ability-hexes-fake-fn-8.6" data-hash-target to="ability-hexes-fake-fn-8.6">↩<sup>6</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-9-target"><p><Link to="/source/heroes_of_the_wild">Heroes of the Wild</Link> pg. 11 <InnerLink aria-label="Back to reference 9" id="backlink-ability-hexes-fake-fn-9" data-hash-target to="ability-hexes-fake-fn-9">↩</InnerLink></p></li>
<li id="ability-hexes-fake-fn-10-target"><p><Link to="/source/ultimate_wilderness">Ultimate Wilderness</Link> pg. 88 <InnerLink aria-label="Back to reference 10" id="backlink-ability-hexes-fake-fn-10" data-hash-target to="ability-hexes-fake-fn-10">↩</InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-hexes-fake-fn-10.2" data-hash-target to="ability-hexes-fake-fn-10.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-hexes-fake-fn-10.3" data-hash-target to="ability-hexes-fake-fn-10.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 10" id="backlink-ability-hexes-fake-fn-10.4" data-hash-target to="ability-hexes-fake-fn-10.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-11-target"><p><Link to="/source/heroes_of_golarion">Heroes of Golarion</Link> pg. 15 <InnerLink aria-label="Back to reference 11" id="backlink-ability-hexes-fake-fn-11" data-hash-target to="ability-hexes-fake-fn-11">↩</InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-hexes-fake-fn-11.2" data-hash-target to="ability-hexes-fake-fn-11.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-hexes-fake-fn-11.3" data-hash-target to="ability-hexes-fake-fn-11.3">↩<sup>3</sup></InnerLink> <InnerLink aria-label="Back to reference 11" id="backlink-ability-hexes-fake-fn-11.4" data-hash-target to="ability-hexes-fake-fn-11.4">↩<sup>4</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-12-target"><p><Link to="/source/blood_of_the_moon">Blood of the Moon</Link> pg. 15 <InnerLink aria-label="Back to reference 12" id="backlink-ability-hexes-fake-fn-12" data-hash-target to="ability-hexes-fake-fn-12">↩</InnerLink> <InnerLink aria-label="Back to reference 12" id="backlink-ability-hexes-fake-fn-12.2" data-hash-target to="ability-hexes-fake-fn-12.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-13-target"><p><Link to="/source/qadira_jewel_of_the_east">Qadira, Jewel of the East</Link> pg. 15 <InnerLink aria-label="Back to reference 13" id="backlink-ability-hexes-fake-fn-13" data-hash-target to="ability-hexes-fake-fn-13">↩</InnerLink></p></li>
<li id="ability-hexes-fake-fn-14-target"><p><Link to="/source/wilderness_origins">Wilderness Origins</Link> pg. 16 <InnerLink aria-label="Back to reference 14" id="backlink-ability-hexes-fake-fn-14" data-hash-target to="ability-hexes-fake-fn-14">↩</InnerLink> <InnerLink aria-label="Back to reference 14" id="backlink-ability-hexes-fake-fn-14.2" data-hash-target to="ability-hexes-fake-fn-14.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-15-target"><p><Link to="/source/potions_and_poisons">Potions and Poisons</Link> pg. 10 <InnerLink aria-label="Back to reference 15" id="backlink-ability-hexes-fake-fn-15" data-hash-target to="ability-hexes-fake-fn-15">↩</InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-hexes-fake-fn-15.2" data-hash-target to="ability-hexes-fake-fn-15.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 15" id="backlink-ability-hexes-fake-fn-15.3" data-hash-target to="ability-hexes-fake-fn-15.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-16-target"><p>Wilderness Origins pg. 17 <InnerLink aria-label="Back to reference 16" id="backlink-ability-hexes-fake-fn-16" data-hash-target to="ability-hexes-fake-fn-16">↩</InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-hexes-fake-fn-16.2" data-hash-target to="ability-hexes-fake-fn-16.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 16" id="backlink-ability-hexes-fake-fn-16.3" data-hash-target to="ability-hexes-fake-fn-16.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-17-target"><p><Link to="/source/legacy_of_the_first_world">Legacy of the First World</Link> pg. 17 <InnerLink aria-label="Back to reference 17" id="backlink-ability-hexes-fake-fn-17" data-hash-target to="ability-hexes-fake-fn-17">↩</InnerLink> <InnerLink aria-label="Back to reference 17" id="backlink-ability-hexes-fake-fn-17.2" data-hash-target to="ability-hexes-fake-fn-17.2">↩<sup>2</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-18-target"><p><Link to="/source/the_harrow_handbook">The Harrow Handbook</Link> pg. 15 <InnerLink aria-label="Back to reference 18" id="backlink-ability-hexes-fake-fn-18" data-hash-target to="ability-hexes-fake-fn-18">↩</InnerLink></p></li>
<li id="ability-hexes-fake-fn-19-target"><p>Ultimate Magic pg. 82 <InnerLink aria-label="Back to reference 19" id="backlink-ability-hexes-fake-fn-19" data-hash-target to="ability-hexes-fake-fn-19">↩</InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-ability-hexes-fake-fn-19.2" data-hash-target to="ability-hexes-fake-fn-19.2">↩<sup>2</sup></InnerLink> <InnerLink aria-label="Back to reference 19" id="backlink-ability-hexes-fake-fn-19.3" data-hash-target to="ability-hexes-fake-fn-19.3">↩<sup>3</sup></InnerLink></p></li>
<li id="ability-hexes-fake-fn-20-target"><p><Link to="/source/monster_codex">Monster Codex</Link> pg. 105 <InnerLink aria-label="Back to reference 20" id="backlink-ability-hexes-fake-fn-20" data-hash-target to="ability-hexes-fake-fn-20">↩</InnerLink></p></li>
<li id="ability-hexes-fake-fn-21-target"><p>Advanced Player's Guide pg. 67 <InnerLink aria-label="Back to reference 21" id="backlink-ability-hexes-fake-fn-21" data-hash-target to="ability-hexes-fake-fn-21">↩</InnerLink> <InnerLink aria-label="Back to reference 21" id="backlink-ability-hexes-fake-fn-21.2" data-hash-target to="ability-hexes-fake-fn-21.2">↩<sup>2</sup></InnerLink></p></li>
</ol></section></div>};
const _implements = {title: "Implements", topLink: ["Occultist","class/occultist"], jsx: <><h2 id="ability-implements-implements">Implements</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures</Link><br/>Occultists can chose from the following <em>implement schools,</em> each representing a school of magic. An occultist can select an implement school more than once, as noted in the implements class feature.</p>
<h3 id="ability-implements-panoplies">Panoplies</h3>
<p><strong>Sources</strong> <Link to="/source/psychic_anthology">Psychic Anthology</Link><br/>While many occultists focus on the inherent psychic properties of certain types of objects, some specialists take their studies a step further, exploring the ways specific types of implements interact with one another. While not all implements psychically resonate with all other kinds of implements, such <em>panoplies</em> unlock even greater magical potential when used to complement one another.</p>
<p>An occultist can select a panoply anytime he selects a new implement school. To do so, he must already have learned to use the implement school of each implement within the panoply at least once. As with any other implement school, when an occultist learns to use a panoply, he gains access to the resonant power and base focus power, and he becomes able to learn the panoply's other focus powers. He also adds one spell of each spell level to his spell list, and these spells can be taken from any of the implement schools associated with the panoply. To use a panoply's resonant power or any of its focus powers, the occultist must select and invest mental focus into the associated implements that day. A single bearer must hold all the panoply's associated implements to gain the panoply's resonant power, and the occultist counts the total number of points of mental focus invested among all of the associated implements to determine the resonant power's effect. The occultist can expend points of mental focus from any of the associated implements to use the panoply's focus powers. Unlike for other implement schools, an occultist cannot select a panoply more than once.</p>
<h3 id="ability-implements-sacred-implements">Sacred Implements</h3>
<p><strong>Sources</strong> <Link to="/source/occult_origins">Occult Origins pg. 15</Link><br/>Outsiders and divine servants leave especially lasting impressions when they interact with the Material Plane, and many occultists seek out the resulting sacred implements to augment their existing powers. A sacred implement is always a specific kind of object, though not necessarily unique.</p>
<p>An occultist can adopt a sacred implement whenever he gains access to an implement school. Once chosen, the sacred implement is permanent and grants the occultist access to a bonus focus power for that implement school, but causes the occultist to take a -1 penalty to his caster level when using the spells and associated implement powers of a school of magic opposed to that deity's portfolio. An occultist can use a sacred implement even if he doesn't worship the associated god.</p>
<ScrollContainer id="ability-implements--table-0"><table>
<thead>
<tr>
<th>Implement</th>
<th>Has Sacred?</th>
<th>Description</th>
</tr>
</thead>
<tbody><tr>
<td className="ion-activatable"><Link to="/implement/abjuration">Abjuration<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Abjuration implements are objects associated with protection and wards.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/conjuration">Conjuration<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Implements used in conjuration allow the occultist to perform magic that transports or calls creatures.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/divination">Divination<IonRippleEffect /></Link></td>
<td>No</td>
<td>Implements of the divination school grant powers related to foresight and remote viewing.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/enchantment">Enchantment<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Enchantment implements allow the occultist to befuddle the mind and charm his foes.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/evocation">Evocation<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Implements focused on evocation grant the ability to create and direct energy to protect and to destroy.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/illusion">Illusion<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Illusion implements allow the occultist to distort the senses and cloak creatures from sight.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/necromancy">Necromancy<IonRippleEffect /></Link></td>
<td>Yes</td>
<td>Implements that draw power from necromancy can control undead and harm the living.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/transmutation">Transmutation<IonRippleEffect /></Link></td>
<td>No</td>
<td>Transmutation implements can alter the properties of both objects and creatures.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/mages_paraphernalia">Mage's Paraphernalia (Panoply)<IonRippleEffect /></Link></td>
<td>No</td>
<td>This panoply is associated with the arcane arts and the masters of manipulating magic.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/performers_accoutrements">Performer's Accoutrements (Panoply)<IonRippleEffect /></Link></td>
<td>No</td>
<td>This panoply is associated with those who deceive as well as those who entertain.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/saints_holy_regalia">Saint's Holy Regalia (Panoply)<IonRippleEffect /></Link></td>
<td>No</td>
<td>This panoply is associated with devoted members of a good-aligned faith and the power of belief.</td>
</tr>
<tr>
<td className="ion-activatable"><Link to="/implement/trappings_of_the_warrior">Trappings of the Warrior (Panoply)<IonRippleEffect /></Link></td>
<td>No</td>
<td>This panoply is associated with brave and stalwart warriors, martial skill, and the defense of one's allies.</td>
</tr>
</tbody></table></ScrollContainer>
</>};
const _infusion_wild_talents = {title: "Infusions", topLink: ["Kineticist","class/kineticist"], jsx: <><h2 id="ability-infusion_wild_talents-infusion-wild-talents">Infusion Wild Talents</h2>
<p><strong>Sources</strong> <Link to="/source/occult_adventures">Occult Adventures pg. 17</Link><br/>Infusion wild talents change the way kineticists use their kinetic blasts.</p>
<DisplayTable table={{"id":"infusion wild talents","columns":[{"header":"Infusion","size":5.5,"align":"start","link":"kinetic"},{"header":"Type","size":4},{"header":"Elements","size":5.5},{"header":"Level","type":"num","size":3.5},{"header":"Burn","type":"num","size":3.5},{"header":"Prerequisites","size":5.5,"align":"start"},{"header":"Associated Blasts","size":5.5,"align":"start"}],"data":[[["Blade Rush","blade_rush"],"form infusion","universal",2,2,"‹kinetic/kinetic blade›","any"],[["Blade Whirlwind","blade_whirlwind"],"form infusion","universal",5,3,"‹kinetic/kinetic blade›","any"],[["Bolt","bolt"],"form infusion","air",3,2,null,"‹kinetic/Electric Blast›, ‹kinetic/Thunderstorm Blast›"],[["Bowling Infusion","bowling_infusion"],"substance infusion","aether, earth",2,2,null,"‹kinetic/Earth Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Metal Blast›, ‹kinetic/Mud Blast›, ‹kinetic/Telekinetic Blast›"],[["Brilliant Infusion","brilliant_infusion"],"substance infusion","fire",6,4,"‹kinetic/flash infusion›","‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Plasma Blast›"],[["Burning Infusion","burning_infusion"],"substance infusion","fire",1,1,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Plasma Blast›"],[["Chain","chain"],"form infusion","air",5,3,null,"‹kinetic/Electric Blast›"],[["Chilling Infusion","chilling_infusion"],"substance infusion","water",5,3,null,"‹kinetic/Blizzard Blast›, ‹kinetic/Cold Blast›, ‹kinetic/Ice Blast›"],[["Cloud","cloud"],"form infusion","air, water",7,4,"‹kinetic/extended range›","‹kinetic/Blizzard Blast›, ‹kinetic/Sandstorm Blast›, ‹kinetic/Steam Blast›, ‹kinetic/Thunderstorm Blast›"],[["Cyclone","cyclone"],"form infusion","air",4,3,null,"‹kinetic/Air Blast›, ‹kinetic/Blizzard Blast›, ‹kinetic/Sandstorm Blast›, ‹kinetic/Thunderstorm Blast›"],[["Dampening Infusion","dampening_infusion"],"substance infusion","void",1,1,null,"‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Darkness Infusion","darkness_infusion"],"substance infusion","void",3,2,null,"‹kinetic/Gravity Blast›, ‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Darkness Infusion, Greater","greater_darkness_infusion"],"substance infusion","void",6,4,"‹kinetic/darkness infusion›","‹kinetic/Gravity Blast›, ‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Dazzling Infusion","dazzling_infusion"],"substance infusion","fire, wood",1,1,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Plasma Blast›, ‹kinetic/Positive Blast›, ‹kinetic/Verdant Blast›"],[["Deadly Earth","deadly_earth"],"form infusion","earth, wood",6,4,"‹kinetic/extended range›","‹kinetic/Earth Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Metal Blast›, ‹kinetic/Mud Blast›"],[["Detonation","detonation"],"form infusion","fire",4,3,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›"],[["Disintegrating Infusion","disintegrating_infusion"],"substance infusion","aether",6,4,null,"‹kinetic/Force Blast›"],[["Draining Infusion","draining_infusion"],"substance infusion","universal",1,1,null,"any simple"],[["Elemental Trap","elemental_trap"],"form infusion","universal",3,2,null,"any"],[["Energize Weapon","energize_weapon"],"form infusion","air, fire, void, water",1,1,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Cold Blast›, ‹kinetic/Electric Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Negative Blast›"],[["Enervating Infusion","enervating_infusion"],"substance infusion","void",7,4,null,"‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Entangling Infusion","entangling_infusion"],"substance infusion","earth, water, wood",2,2,null,"‹kinetic/Blizzard Blast›, ‹kinetic/Cold Blast›, ‹kinetic/Earth Blast›, ‹kinetic/Ice Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Metal Blast›, ‹kinetic/Mud Blast›, ‹kinetic/Sandstorm Blast›"],[["Eruption","eruption"],"form infusion","fire",3,2,"‹kinetic/extended range›","‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Steam Blast›"],[["Explosion","explosion"],"form infusion","fire",7,4,"‹kinetic/extended range›","‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›"],[["Extended Range","extended_range"],"form infusion","universal",1,1,null,"any"],[["Extreme Range","extreme_range"],"form infusion","universal",3,2,"‹kinetic/extended range›","any"],[["Fan of Flames","fan_of_flames"],"form infusion","fire",1,1,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›"],[["Flash Infusion","flash_infusion"],"substance infusion","fire",4,3,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Plasma Blast›"],[["Flurry of Blasts","flurry_of_blasts"],"form infusion","universal",3,2,"‹kinetic/extended range›","any"],[["Focused Blast","focused_blast"],"form infusion","universal",2,2,null,"any"],[["Foe Throw","foe_throw"],"form infusion","aether",3,2,null,"‹kinetic/Telekinetic Blast›"],[["Force Hook","force_hook"],"form infusion","aether",3,2,null,"‹kinetic/Force Blast›"],[["Foxfire Infusion","foxfire_infusion"],"substance infusion","fire, wood",3,2,"‹kinetic/foxfire› or ‹kinetic/positive blast›","‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Positive Blast›"],[["Fragmentation","fragmentation"],"form infusion","earth, water",7,4,"‹kinetic/extended range›","‹kinetic/Earth Blast›, ‹kinetic/Ice Blast›, ‹kinetic/Metal Blast›"],[["Grappling Infusion","grappling_infusion"],"substance infusion","universal",5,3,null,"any"],[["Gusting Infusion","gusting_infusion"],"substance infusion","air",1,1,null,"‹kinetic/Air Blast›, ‹kinetic/Blizzard Blast›, ‹kinetic/Sandstorm Blast›, ‹kinetic/Thunderstorm Blast›"],[["Impale","impale"],"form infusion","earth, water, wood",3,2,null,"‹kinetic/Earth Blast›, ‹kinetic/Ice Blast›, ‹kinetic/Metal Blast›"],[["Kinetic Blade","kinetic_blade"],"form infusion","universal",1,1,null,"any"],[["Kinetic Fist","kinetic_fist"],"form infusion","universal",1,1,null,"any"],[["Kinetic Whip","kinetic_whip"],"form infusion","universal",3,2,"‹kinetic/kinetic blade›","any"],[["Kundalini Infusion","kundalini_infusion"],"substance infusion","universal",2,0,"ki pool, ‹kinetic/kinetic fist›","any"],[["Maelstrom","maelstrom"],"substance infusion","water",8,4,"‹kinetic/extended range›","‹kinetic/Charged Water Blast›, ‹kinetic/Water Blast›"],[["Magnetic Infusion","magnetic_infusion"],"substance infusion","air, earth",3,2,null,"‹kinetic/Charged Water Blast›, ‹kinetic/Electric Blast›, ‹kinetic/Metal Blast›, ‹kinetic/Plasma Blast›, ‹kinetic/Thunderstorm Blast›"],[["Many Throw","many_throw"],"form infusion","aether",8,4,"‹kinetic/extended range›","‹kinetic/Telekinetic Blast›"],[["Mobile Blast","mobile_blast"],"form infusion","universal",3,2,null,"any"],[["Penetrating Infusion","penetrating_infusion"],"substance infusion","air, fire, water",2,2,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Cold Blast›, ‹kinetic/Electric Blast›, ‹kinetic/Fire Blast›"],[["Photokinetic Infusion","photokinetic_infusion"],"substance infusion","wood",1,1,"‹kinetic/positive blast›","‹kinetic/Positive Blast›"],[["Pulling Infusion","pulling_infusion"],"substance infusion","void",1,1,null,"‹kinetic/Gravity Blast›, ‹kinetic/Void Blast›"],[["Pure-Flame Infusion","pure_flame_infusion"],"substance infusion","fire",7,4,null,"‹kinetic/Blue Flame Blast›"],[["Pushing Infusion","pushing_infusion"],"substance infusion","aether, air, earth, void, water, wood",1,1,null,"‹kinetic/Air Blast›, ‹kinetic/Blizzard Blast›, ‹kinetic/Charged Water Blast›, ‹kinetic/Earth Blast›, ‹kinetic/Gravity Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Metal Blast›, ‹kinetic/Mud Blast›, ‹kinetic/Sandstorm Blast›, ‹kinetic/Steam Blast›, ‹kinetic/Telekinetic Blast›, ‹kinetic/Void Blast›, ‹kinetic/Water Blast›"],[["Quenching Infusion","quenching_infusion"],"substance infusion","water",1,1,null,"‹kinetic/Charged Water Blast›, ‹kinetic/Water Blast›"],[["Rare-Metal Infusion","rare_metal_infusion"],"substance infusion","earth",3,2,null,"‹kinetic/Metal Blast›"],[["Shepherd of Souls","shepherd_of_souls"],"substance infusion","universal",7,4,null,"any simple"],[["Singularity","singularity"],"form infusion","void",4,3,null,"‹kinetic/Gravity Blast›, ‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Slick Infusion","slick_infusion"],"substance infusion","water",2,2,"‹kinetic/slick›","‹kinetic/Blizzard Blast›, ‹kinetic/Charged Water Blast›, ‹kinetic/Cold Blast›, ‹kinetic/Ice Blast›, ‹kinetic/Water Blast›"],[["Snake","snake"],"form infusion","universal",3,2,"‹kinetic/extended range›","any"],[["Spindle","spindle"],"form infusion","universal",2,2,null,"any"],[["Spore Infusion","spore_infusion"],"substance infusion","wood",5,3,null,"‹kinetic/Autumn Blast›, ‹kinetic/Spring Blast›, ‹kinetic/Summer Blast›, ‹kinetic/Verdant Blast›, ‹kinetic/Winter Blast›, ‹kinetic/Wood Blast›"],[["Spray","spray"],"form infusion","water",4,3,null,"‹kinetic/Charged Water Blast›, ‹kinetic/Water Blast›"],[["Stylish Infusion","stylish_infusion"],"substance infusion","universal",3,2,"brawler's flurry or flurry of blows class feature, ‹kinetic/kinetic fist›","any"],[["Synaptic Infusion","synaptic_infusion"],"substance infusion","air",3,2,null,"‹kinetic/Electric Blast›, ‹kinetic/Charged Water Blast›, ‹kinetic/Thunderstorm Blast›"],[["Telekinetic Boomerang","telekinetic_boomerang"],"form infusion","aether",1,1,null,"‹kinetic/Telekinetic Blast›"],[["Thundering Infusion","thundering_infusion"],"substance infusion","air",1,1,null,"‹kinetic/Electric Blast›, ‹kinetic/Thunderstorm Blast›"],[["Torrent","torrent"],"form infusion","air, fire, water",3,2,null,"‹kinetic/Air Blast›, ‹kinetic/Blizzard Blast›, ‹kinetic/Blue Flame Blast›, ‹kinetic/Charged Water Blast›, ‹kinetic/Fire Blast›, ‹kinetic/Magma Blast›, ‹kinetic/Mud Blast›, ‹kinetic/Plasma Blast›, ‹kinetic/Sandstorm Blast›, ‹kinetic/Steam Blast›, ‹kinetic/Thunderstorm Blast›, ‹kinetic/Water Blast›"],[["Toxic Infusion","toxic_infusion"],"substance infusion","wood",4,3,null,"‹kinetic/Autumn Blast›, ‹kinetic/Spring Blast›, ‹kinetic/Summer Blast›, ‹kinetic/Verdant Blast›, ‹kinetic/Winter Blast›, ‹kinetic/Wood Blast›"],[["Toxic Infusion, Greater","greater_toxic_infusion"],"substance infusion","wood",7,4,"‹kinetic/toxic infusion›","‹kinetic/Autumn Blast›, ‹kinetic/Spring Blast›, ‹kinetic/Summer Blast›, ‹kinetic/Verdant Blast›, ‹kinetic/Winter Blast›, ‹kinetic/Wood Blast›"],[["Tremor","tremor"],"form infusion","earth",5,3,null,"‹kinetic/Earth Blast›"],[["Turning Blast","turning_blast"],"substance infusion","void, wood",4,3,"‹race/duskwalker›, or ‹feat/Planar Infusion› (Boneyard)","‹kinetic/Positive Blast›, ‹kinetic/Negative Blast›"],[["Unblinking Flame Infusion","unblinking_flame_infusion"],"substance infusion","fire",5,3,"‹kinetic/kinetic fist›, member of the Monastery of Unblinking Flame","‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›"],[["Unbreaking Waves Infusion","unbreaking_waves_infusion"],"substance infusion","water",5,3,"‹kinetic/kinetic fist›, member of the Monastery of Unbreaking Waves","‹kinetic/Ice Blast›, ‹kinetic/Water Blast›"],[["Unfolding Wind Infusion","unfolding_wind_infusion"],"substance infusion","air",5,3,"‹kinetic/kinetic fist›, member of the Monastery of Unfolding Wind","‹kinetic/Air Blast›, ‹kinetic/Thunderstorm Blast›"],[["Unnerving Infusion","unnerving_infusion"],"substance infusion","void",3,2,null,"‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Unraveling Infusion","unraveling_infusion"],"substance infusion","fire",5,3,null,"‹kinetic/Blue Flame Blast›, ‹kinetic/Fire Blast›"],[["Untwisting Iron Infusion","untwisting_iron_infusion"],"substance infusion","earth",5,3,"‹kinetic/kinetic fist›, member of the Monastery of Untwisting Iron","‹kinetic/Earth Blast›, ‹kinetic/Metal Blast›"],[["Vampiric Infusion","vampiric_infusion"],"substance infusion","void",5,3,"‹kinetic/void healer›","‹kinetic/Negative Blast›, ‹kinetic/Void Blast›"],[["Venom Admixture","venom_admixture"],"substance infusion","universal",2,2,"‹kinetic/venom speaker›",null],[["Venom Infusion","venom_infusion"],"substance infusion","universal",4,3,"‹kinetic/venom speaker›","any simple or composite"],[["Venom Infusion, Greater","greater_venom_infusion"],"substance infusion","universal",7,4,"‹kinetic/venom speaker›, ‹kinetic/venom infusion›","any simple or composite"],[["Wall","wall"],"form infusion","universal",5,3,null,"any"],[["Weighing Infusion","weighing_infusion"],"substance infusion","void",2,2,null,"‹kinetic/Gravity Blast›, ‹kinetic/Void Blast›"],[["Whip Hurricane","whip_hurricane"],"form infusion","universal",6,4,"‹kinetic/kinetic blade›, ‹kinetic/kinetic whip›, ‹kinetic/blade whirlwind›","any"]],"initialColumn":1}} />
</>};
export default {evolutions:_evolutions,unchained_evolutions:_unchained_evolutions,grand_hexes:_grand_hexes,greater_exploits:_greater_exploits,gunslinger_deeds:_gunslinger_deeds,gunslinger_renowned_deeds:_gunslinger_renowned_deeds,hellknight_disciplines:_hellknight_disciplines,hellknight_orders:_hellknight_orders,hexes:_hexes,implements:_implements,infusion_wild_talents:_infusion_wild_talents}